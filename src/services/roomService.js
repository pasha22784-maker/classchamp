/**
 * roomService.js
 * Real-Time Cross-Device Private Friend Room Manager for BrainLeague.
 * 
 * Supports:
 * 1. Global Cloud Relay (zero-config, sub-second sync across all devices via ntfy WebSocket/HTTP).
 * 2. Hostinger / cPanel PHP API fallback (/api/room.php).
 * 3. Local BroadcastChannel + localStorage for instant latency and offline tab sync.
 * 4. Safe URL generation that always points to https://play.bolchaall.com on mobile apps.
 */

import storageService from './storageService';
import questionEngine from './questionEngine';
import botService from './botService';

const STORAGE_PREFIX = 'bl_room_';
const CHANNEL_NAME   = 'brainleague_room';
const ACTIVE_HOST_KEY = 'bl_active_host_room_code';
const ROOM_TTL_MS    = 2 * 60 * 60 * 1000; // 2 hours auto-expire

// Public zero-config cloud relay
const RELAY_BASE_URL = 'https://ntfy.sh';
const RELAY_WS_BASE  = 'wss://ntfy.sh';

function sanitizeCode(code) {
  return (code || '').toString().trim().toUpperCase().replace(/[^A-Z0-9]/g, '');
}

function topicForRoom(code) {
  return `bl_room_${sanitizeCode(code)}`;
}

function roomKey(code) {
  return `${STORAGE_PREFIX}${sanitizeCode(code)}`;
}

function generateCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // no O, 0, 1, I for readability
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
}

function readLocal(code) {
  try {
    const raw = localStorage.getItem(roomKey(code));
    if (!raw) return null;
    const room = JSON.parse(raw);
    if (Date.now() - (room.createdAt || 0) > ROOM_TTL_MS) {
      localStorage.removeItem(roomKey(code));
      return null;
    }
    return room;
  } catch {
    return null;
  }
}

function writeLocal(room) {
  try {
    if (!room || !room.code) return;
    localStorage.setItem(roomKey(room.code), JSON.stringify(room));
  } catch {}
}

function broadcastLocal(room) {
  try {
    if (typeof BroadcastChannel !== 'undefined') {
      const ch = new BroadcastChannel(CHANNEL_NAME);
      ch.postMessage({ type: 'ROOM_UPDATE', room });
      ch.close();
    }
  } catch {}
}

const roomService = {
  /**
   * Publishes room state to all channels:
   * LocalStorage -> BroadcastChannel -> Cloud Relay -> Local PHP API
   */
  async publishRoomState(room) {
    if (!room || !room.code) return;
    const cleanCode = sanitizeCode(room.code);
    room.code = cleanCode;
    room.updatedAt = Date.now();

    // 1. Instant local persistence
    writeLocal(room);
    broadcastLocal(room);

    // 2. Publish to universal cloud relay
    const payload = JSON.stringify(room);
    const cloudPromise = fetch(`${RELAY_BASE_URL}/${topicForRoom(cleanCode)}`, {
      method: 'POST',
      body: payload,
      headers: {
        'Title': 'BrainLeague Room',
        'Priority': 'urgent',
        'Tags': 'game,room'
      }
    }).catch(err => {
      console.warn('Cloud relay publish warning (will rely on fallbacks):', err.message);
    });

    // 3. Dual-post to Hostinger /api/room.php if deployed
    const phpPromise = fetch('/api/room.php?action=save', {
      method: 'POST',
      body: payload,
      headers: { 'Content-Type': 'application/json' }
    }).catch(() => {});

    // Don't block caller indefinitely
    await Promise.race([
      Promise.allSettled([cloudPromise, phpPromise]),
      new Promise(resolve => setTimeout(resolve, 800))
    ]);
  },

  /**
   * Fetch room state from Cloud Relay, PHP backend, or LocalStorage
   */
  async fetchRoomOnline(code) {
    const cleanCode = sanitizeCode(code);
    if (!cleanCode) return null;

    let freshestRoom = readLocal(cleanCode);

    try {
      // 1. Check cloud relay (poll latest message)
      const cloudRes = await fetch(`${RELAY_BASE_URL}/${topicForRoom(cleanCode)}/json?poll=1`, {
        cache: 'no-store'
      });

      if (cloudRes.ok) {
        const text = await cloudRes.text();
        const lines = text.trim().split('\n').filter(Boolean);
        for (let i = lines.length - 1; i >= 0; i--) {
          try {
            const entry = JSON.parse(lines[i]);
            if (entry.event === 'message' && entry.message) {
              const parsed = JSON.parse(entry.message);
              if (parsed && sanitizeCode(parsed.code) === cleanCode) {
                freshestRoom = parsed;
                writeLocal(parsed);
                return freshestRoom;
              }
            }
          } catch {}
        }
      }
    } catch (e) {
      console.warn('Relay poll warning:', e.message);
    }

    // 2. Fallback to PHP API on host
    try {
      const phpRes = await fetch(`/api/room.php?action=get&code=${cleanCode}`, {
        cache: 'no-store'
      });
      if (phpRes.ok) {
        const phpData = await phpRes.json();
        if (phpData && sanitizeCode(phpData.code) === cleanCode) {
          freshestRoom = phpData;
          writeLocal(phpData);
          return freshestRoom;
        }
      }
    } catch {}

    return freshestRoom;
  },

  /**
   * Synchronous local read
   */
  getRoom(code) {
    return readLocal(code);
  },

  /**
   * Get currently active waiting room for this host (prevents regenerating codes on app-switch)
   */
  getActiveHostRoom(hostId) {
    try {
      const savedCode = sessionStorage.getItem(ACTIVE_HOST_KEY) || localStorage.getItem(ACTIVE_HOST_KEY);
      if (savedCode) {
        const r = readLocal(savedCode);
        if (r && r.hostId === hostId && r.status === 'waiting') {
          return r;
        }
      }
    } catch {}
    return null;
  },

  /**
   * Create a new room (or return active waiting room if host already created one)
   */
  async createRoom({ hostId, hostName, hostAvatar = '🎮', division = 'Junior', maxPlayers = 10, grade = null }) {
    // Check if host already has an active waiting room
    const existing = this.getActiveHostRoom(hostId);
    if (existing) {
      if (!existing.fffQuestion || !existing.hotSeatQuestions || existing.hotSeatQuestions.length < 15) {
        const allQuestions = storageService.getQuestions();
        existing.fffQuestion = questionEngine.getFFFQuestion(allQuestions, existing.division || division, hostId, null, grade);
        existing.hotSeatQuestions = questionEngine.getHotSeatMatchQuestions(allQuestions, existing.division || division, hostId, null, grade);
      }
      this.publishRoomState(existing);
      return existing;
    }

    let code;
    let attempts = 0;
    do {
      code = generateCode();
      attempts++;
    } while (readLocal(code) && attempts < 10);

    // Pre-generate shared match questions so all room players see the EXACT same questions!
    const allQuestions = storageService.getQuestions();
    const fffQuestion = questionEngine.getFFFQuestion(allQuestions, division, hostId, null, grade);
    const hotSeatQuestions = questionEngine.getHotSeatMatchQuestions(allQuestions, division, hostId, null, grade);

    // Pre-generate 9 bot players and their predetermined FFF times so all devices see identical bot roster and times
    const bots = botService.generateBots(9, division, [hostName]);
    const fffResults = {};
    bots.forEach(b => {
      const isCorrect = Math.random() > 0.25;
      const timeTaken = +(Math.random() * 4.5 + 4.5).toFixed(2);
      fffResults[b.id] = {
        id: b.id,
        name: b.name,
        avatar: b.avatar,
        city: b.city,
        isHuman: false,
        isCorrect,
        timeTaken,
        timeFormatted: `${timeTaken}s`
      };
    });

    const room = {
      code,
      hostId,
      hostName,
      division,
      status: 'waiting',
      maxPlayers: Math.min(Math.max(maxPlayers, 2), 10),
      fffQuestion,
      hotSeatQuestions,
      bots,
      fffResults,
      players: [{
        id: hostId,
        name: hostName,
        avatar: hostAvatar,
        isHost: true,
        joinedAt: Date.now()
      }],
      createdAt: Date.now(),
      updatedAt: Date.now(),
      startCountdown: null,
      matchProgress: {
        currentLevel: 1,
        lockedOption: null,
        revealState: null,
        isAnswerLocked: false,
        timeRemaining: 30,
        hotSeatPlayer: null
      }
    };

    try {
      sessionStorage.setItem(ACTIVE_HOST_KEY, code);
      localStorage.setItem(ACTIVE_HOST_KEY, code);
    } catch {}

    await this.publishRoomState(room);
    return room;
  },

  /**
   * Join an existing room across devices.
   * Returns { success, room, error }
   */
  async joinRoom({ code, playerId, playerName, playerAvatar = '🎮' }) {
    const cleanCode = sanitizeCode(code);
    if (!cleanCode || cleanCode.length < 4) {
      return { success: false, error: 'Please enter a valid 6-letter room code.' };
    }

    // Fetch freshest room state across all devices
    const room = await this.fetchRoomOnline(cleanCode);
    if (!room) {
      return { success: false, error: `Room "${cleanCode}" not found. Please verify the code with your friend.` };
    }

    if (room.status === 'dissolved') {
      return { success: false, error: 'This room was dissolved by the host.' };
    }

    if (room.status !== 'waiting') {
      return { success: false, error: 'This game has already started!' };
    }

    if (!Array.isArray(room.players)) {
      room.players = [];
    }

    // Already in room? Update details
    const existingIdx = room.players.findIndex(p => p.id === playerId);
    if (existingIdx !== -1) {
      room.players[existingIdx].name = playerName;
      room.players[existingIdx].avatar = playerAvatar;
    } else {
      if (room.players.length >= room.maxPlayers) {
        return { success: false, error: 'This room is full (10/10 players)!' };
      }
      room.players.push({
        id: playerId,
        name: playerName,
        avatar: playerAvatar,
        isHost: false,
        joinedAt: Date.now()
      });
    }

    // Auto-start countdown if room is full
    if (room.players.length >= room.maxPlayers) {
      room.status = 'starting';
      room.startCountdown = Date.now() + 5000;
    }

    await this.publishRoomState(room);
    return { success: true, room };
  },

  /**
   * Host starts game (minimum 2 players)
   */
  async startRoom(code, hostId) {
    const room = (await this.fetchRoomOnline(code)) || readLocal(code);
    if (!room || room.hostId !== hostId) return null;
    if (room.players.length < 2) return null;

    // Ensure shared questions exist
    if (!room.fffQuestion || !room.hotSeatQuestions || room.hotSeatQuestions.length < 15) {
      const allQuestions = storageService.getQuestions();
      room.fffQuestion = questionEngine.getFFFQuestion(allQuestions, room.division, hostId);
      room.hotSeatQuestions = questionEngine.getHotSeatMatchQuestions(allQuestions, room.division, hostId);
    }

    // Ensure filler bots and predetermined bot results match room player count (total 10)
    const neededBots = Math.max(0, 10 - room.players.length);
    if (!room.bots || room.bots.length !== neededBots) {
      const bots = botService.generateBots(neededBots, room.division, room.players.map(p => p.name));
      const botResults = {};
      bots.forEach(b => {
        const isCorrect = Math.random() > 0.25;
        const timeTaken = +(Math.random() * 4.5 + 4.5).toFixed(2);
        botResults[b.id] = {
          id: b.id,
          name: b.name,
          avatar: b.avatar,
          city: b.city,
          isHuman: false,
          isCorrect,
          timeTaken,
          timeFormatted: `${timeTaken}s`
        };
      });
      room.bots = bots;
      room.fffResults = { ...botResults };
    }

    room.status = 'starting';
    room.startCountdown = Date.now() + 5000;
    room.matchProgress = {
      currentLevel: 1,
      lockedOption: null,
      revealState: null,
      isAnswerLocked: false,
      timeRemaining: 30,
      hotSeatPlayer: null
    };
    await this.publishRoomState(room);
    return room;
  },

  /**
   * Sync real-time in-game match progress for Hot-Seat and Spectator play-along
   */
  async syncMatchProgress(code, progressData) {
    const cleanCode = sanitizeCode(code);
    if (!cleanCode) return;
    let room = readLocal(cleanCode);
    if (!room) {
      room = await this.fetchRoomOnline(cleanCode);
    }
    if (!room) return;

    room.matchProgress = {
      ...(room.matchProgress || {}),
      ...progressData,
      updatedAt: Date.now()
    };
    room.updatedAt = Date.now();

    // Instant local persistence & broadcast
    writeLocal(room);
    broadcastLocal(room);

    // Relay to cloud (debounced to avoid rate limiting)
    const now = Date.now();
    if (!this._lastSyncPost || now - this._lastSyncPost > 400) {
      this._lastSyncPost = now;
      this.publishRoomState(room);
    }
  },

  /**
   * Sync real-time FFF results from human players across devices
   */
  async submitPlayerFFF(code, playerResult) {
    const cleanCode = sanitizeCode(code);
    if (!cleanCode) return null;
    let room = (await this.fetchRoomOnline(cleanCode)) || readLocal(cleanCode);
    if (!room) return null;

    if (!room.fffResults) room.fffResults = {};
    room.fffResults[playerResult.id] = playerResult;

    // Evaluate fastest correct winner
    const submissions = Object.values(room.fffResults);
    submissions.sort((a, b) => {
      if (a.isCorrect && !b.isCorrect) return -1;
      if (!a.isCorrect && b.isCorrect) return 1;
      return a.timeTaken - b.timeTaken;
    });

    const winner = submissions[0];
    if (winner && winner.isCorrect) {
      room.matchProgress = {
        ...(room.matchProgress || {}),
        hotSeatPlayer: winner
      };
    }

    await this.publishRoomState(room);
    return room;
  },

  /**
   * Host kicks a player
   */
  async kickPlayer(code, hostId, kickPlayerId) {
    const room = await this.fetchRoomOnline(code);
    if (!room || room.hostId !== hostId) return null;

    room.players = room.players.filter(p => p.id !== kickPlayerId);
    await this.publishRoomState(room);
    return room;
  },

  /**
   * Player leaves voluntarily.
   */
  async leaveRoom(code, playerId) {
    const room = await this.fetchRoomOnline(code);
    if (!room) return;

    room.players = room.players.filter(p => p.id !== playerId);

    if (room.players.length === 0 || playerId === room.hostId) {
      if (room.players.length > 0) {
        room.players[0].isHost = true;
        room.hostId = room.players[0].id;
        room.hostName = room.players[0].name;
        await this.publishRoomState(room);
      } else {
        // Room dissolved
        room.status = 'dissolved';
        try {
          localStorage.removeItem(roomKey(code));
          localStorage.removeItem(ACTIVE_HOST_KEY);
          sessionStorage.removeItem(ACTIVE_HOST_KEY);
        } catch {}
        await this.publishRoomState(room);
        return;
      }
    } else {
      await this.publishRoomState(room);
    }
  },

  /**
   * Mark room as started after countdown
   */
  async markStarted(code) {
    const room = await this.fetchRoomOnline(code);
    if (!room) return;
    room.status = 'started';
    await this.publishRoomState(room);
  },

  /**
   * Subscribe to real-time room updates across devices:
   * 1. BroadcastChannel (same browser)
   * 2. Cloud Relay WebSocket (cross-device instant push <100ms)
   * 3. Polling interval every 1.5s (fallback)
   */
  subscribe(code, callback) {
    const cleanCode = sanitizeCode(code);
    if (!cleanCode) return () => {};

    let isDisposed = false;
    let ws = null;
    let pollInterval = null;

    // A. Local BroadcastChannel
    let ch = null;
    try {
      if (typeof BroadcastChannel !== 'undefined') {
        ch = new BroadcastChannel(CHANNEL_NAME);
        ch.onmessage = (e) => {
          if (e.data?.type === 'ROOM_UPDATE' && sanitizeCode(e.data.room?.code) === cleanCode) {
            callback(e.data.room);
          }
        };
      }
    } catch {}

    // B. Real-time WebSocket connection to Cloud Relay
    try {
      ws = new WebSocket(`${RELAY_WS_BASE}/${topicForRoom(cleanCode)}/ws`);
      ws.onmessage = (event) => {
        if (isDisposed) return;
        try {
          const data = JSON.parse(event.data);
          if (data.event === 'message' && data.message) {
            const parsedRoom = JSON.parse(data.message);
            if (parsedRoom && sanitizeCode(parsedRoom.code) === cleanCode) {
              writeLocal(parsedRoom);
              callback(parsedRoom);
            }
          }
        } catch {}
      };
      ws.onerror = () => {
        // Handled silently; polling continues as backup
      };
    } catch {}

    // C. Concurrently poll cloud state every 1.5 seconds for rock-solid reliability
    pollInterval = setInterval(async () => {
      if (isDisposed) return;
      try {
        const fresh = await this.fetchRoomOnline(cleanCode);
        if (fresh && !isDisposed) {
          callback(fresh);
        }
      } catch {}
    }, 1500);

    return () => {
      isDisposed = true;
      if (pollInterval) clearInterval(pollInterval);
      if (ws) {
        try { ws.close(); } catch {}
      }
      if (ch) {
        try { ch.close(); } catch {}
      }
    };
  },

  /**
   * Generates public shareable invite URL.
   * Always resolves to https://play.bolchaall.com on mobile apps/Capacitor.
   */
  getInviteUrl(code) {
    const cleanCode = sanitizeCode(code);
    let base = 'https://play.bolchaall.com/';
    try {
      if (typeof window !== 'undefined' && window.location) {
        const host = window.location.hostname;
        if (host && host !== 'localhost' && host !== '127.0.0.1' && !host.startsWith('192.168.')) {
          base = `${window.location.origin}${window.location.pathname}`;
        }
      }
    } catch {}
    if (!base.endsWith('/')) base += '/';
    return `${base}?room=${cleanCode}`;
  },

  getRoomCodeFromUrl() {
    try {
      if (typeof window === 'undefined') return null;
      const params = new URLSearchParams(window.location.search);
      const code = params.get('room');
      return code ? sanitizeCode(code) : null;
    } catch {
      return null;
    }
  },

  clearRoomFromUrl() {
    try {
      if (typeof window === 'undefined') return;
      const url = new URL(window.location.href);
      url.searchParams.delete('room');
      window.history.replaceState({}, '', url.toString());
    } catch {}
  }
};

export default roomService;
