/**
 * roomService.js
 * Private Friend Room — localStorage + BroadcastChannel sync.
 *
 * How it works:
 * 1. Host creates a room → 6-char alphanumeric code stored in localStorage.
 * 2. Invite link: <origin>?room=<CODE>
 * 3. Any player opening the link or entering the code manually joins.
 * 4. BroadcastChannel 'brainleague_room' syncs state across browser tabs on the same device.
 * 5. Room state is also polled via localStorage so cross-device works when hosted (same LAN server).
 * 6. Host can kick players, force-start, or game auto-starts when 10/10 slots filled.
 *
 * Room document (stored at key `bl_room_<CODE>`):
 * {
 *   code: string,
 *   hostId: string,
 *   hostName: string,
 *   division: string,
 *   status: 'waiting' | 'starting' | 'started',
 *   maxPlayers: number (2–10),
 *   players: [ { id, name, avatar, isHost, joinedAt } ],
 *   createdAt: number,
 *   startCountdown: number | null,
 * }
 */

const STORAGE_PREFIX = 'bl_room_';
const CHANNEL_NAME   = 'brainleague_room';
const ROOM_TTL_MS    = 2 * 60 * 60 * 1000; // 2 hours auto-expire

// ---------------------------------------------------------------------------
// Utility
// ---------------------------------------------------------------------------
function generateCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // no O,0,1,I for clarity
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
}

function roomKey(code) {
  return `${STORAGE_PREFIX}${code.toUpperCase()}`;
}

function readRoom(code) {
  try {
    const raw = localStorage.getItem(roomKey(code));
    if (!raw) return null;
    const room = JSON.parse(raw);
    // Auto-expire stale rooms
    if (Date.now() - room.createdAt > ROOM_TTL_MS) {
      localStorage.removeItem(roomKey(code));
      return null;
    }
    return room;
  } catch {
    return null;
  }
}

function writeRoom(room) {
  try {
    localStorage.setItem(roomKey(room.code), JSON.stringify(room));
  } catch {}
}

function broadcastUpdate(room) {
  try {
    const ch = new BroadcastChannel(CHANNEL_NAME);
    ch.postMessage({ type: 'ROOM_UPDATE', room });
    ch.close();
  } catch {}
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------
const roomService = {
  /**
   * Create a new private room. Returns the room object.
   */
  createRoom({ hostId, hostName, hostAvatar = '🎮', division = 'Junior', maxPlayers = 10 }) {
    let code;
    // Ensure unique code
    do { code = generateCode(); } while (readRoom(code));

    const room = {
      code,
      hostId,
      hostName,
      division,
      status: 'waiting',
      maxPlayers: Math.min(Math.max(maxPlayers, 2), 10),
      players: [{
        id: hostId,
        name: hostName,
        avatar: hostAvatar,
        isHost: true,
        joinedAt: Date.now()
      }],
      createdAt: Date.now(),
      startCountdown: null
    };

    writeRoom(room);
    broadcastUpdate(room);
    return room;
  },

  /**
   * Join an existing room. Returns { success, room, error }.
   */
  joinRoom({ code, playerId, playerName, playerAvatar = '🎮' }) {
    const room = readRoom(code);
    if (!room) return { success: false, error: 'Room not found. Check the code and try again.' };
    if (room.status !== 'waiting') return { success: false, error: 'This game has already started.' };
    if (room.players.length >= room.maxPlayers) return { success: false, error: 'Room is full!' };

    // Already in room?
    const alreadyIn = room.players.find(p => p.id === playerId);
    if (alreadyIn) return { success: true, room }; // re-join

    room.players.push({
      id: playerId,
      name: playerName,
      avatar: playerAvatar,
      isHost: false,
      joinedAt: Date.now()
    });

    // Auto-start if full
    if (room.players.length >= room.maxPlayers) {
      room.status = 'starting';
      room.startCountdown = Date.now() + 5000;
    }

    writeRoom(room);
    broadcastUpdate(room);
    return { success: true, room };
  },

  /**
   * Host forces game start (early, even if not full).
   */
  startRoom(code, hostId) {
    const room = readRoom(code);
    if (!room || room.hostId !== hostId) return null;
    if (room.players.length < 2) return null; // need at least 2 players

    room.status = 'starting';
    room.startCountdown = Date.now() + 5000;
    writeRoom(room);
    broadcastUpdate(room);
    return room;
  },

  /**
   * Host kicks a player.
   */
  kickPlayer(code, hostId, kickPlayerId) {
    const room = readRoom(code);
    if (!room || room.hostId !== hostId) return null;

    room.players = room.players.filter(p => p.id !== kickPlayerId);
    writeRoom(room);
    broadcastUpdate(room);
    return room;
  },

  /**
   * Player leaves a room voluntarily.
   */
  leaveRoom(code, playerId) {
    const room = readRoom(code);
    if (!room) return;

    room.players = room.players.filter(p => p.id !== playerId);

    // If host left, promote next player OR dissolve room
    if (room.players.length === 0 || playerId === room.hostId) {
      if (room.players.length > 0) {
        room.players[0].isHost = true;
        room.hostId = room.players[0].id;
        room.hostName = room.players[0].name;
      } else {
        localStorage.removeItem(roomKey(code));
        broadcastUpdate({ ...room, players: [], status: 'dissolved' });
        return;
      }
    }

    writeRoom(room);
    broadcastUpdate(room);
  },

  /**
   * Mark room as started (called after countdown ends).
   */
  markStarted(code) {
    const room = readRoom(code);
    if (!room) return;
    room.status = 'started';
    writeRoom(room);
    broadcastUpdate(room);
  },

  /**
   * Read current room state (for polling).
   */
  getRoom: readRoom,

  /**
   * Subscribe to room updates via BroadcastChannel.
   * Returns unsubscribe function.
   */
  subscribe(callback) {
    try {
      const ch = new BroadcastChannel(CHANNEL_NAME);
      ch.onmessage = (e) => {
        if (e.data?.type === 'ROOM_UPDATE') callback(e.data.room);
      };
      return () => ch.close();
    } catch {
      return () => {};
    }
  },

  /**
   * Generate shareable invite URL for a room code.
   */
  getInviteUrl(code) {
    const base = typeof window !== 'undefined'
      ? `${window.location.origin}${window.location.pathname}`
      : 'https://brainleague.app/';
    return `${base}?room=${code}`;
  },

  /**
   * Read ?room= from current URL (called on app init).
   */
  getRoomCodeFromUrl() {
    try {
      const params = new URLSearchParams(window.location.search);
      return params.get('room')?.toUpperCase() || null;
    } catch {
      return null;
    }
  },

  /**
   * Clean room code from URL without page reload.
   */
  clearRoomFromUrl() {
    try {
      const url = new URL(window.location.href);
      url.searchParams.delete('room');
      window.history.replaceState({}, '', url.toString());
    } catch {}
  }
};

export default roomService;
