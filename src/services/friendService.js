/**
 * friendService.js
 * Comprehensive Social & Squad System for BrainLeague (PUBG-Style).
 * 
 * Features:
 * 1. Unique Player Friend Codes (e.g. BL-7842) with 1-tap Copy & WhatsApp Share.
 * 2. Recent Players Tracker (logs players from Hot Seat, FFF, Private Rooms, and Play Alongs).
 * 3. Send & Receive Friend Requests (by Code or from Recent Players list).
 * 4. Real-Time Online Presence (PUBG-style 🟢 Online / 🟡 In Match / ⚪ Offline indicators).
 * 5. Real-Time PUBG-Style Group Game Invites (instant push notifications across devices).
 * 6. Cloud Relay (ntfy.sh) + Local BroadcastChannel synchronization.
 */

import storageService from './storageService';

const CHANNEL_NAME = 'brainleague_social';
const RELAY_BASE_URL = 'https://ntfy.sh';
const RELAY_WS_BASE  = 'wss://ntfy.sh';

// Local storage key helpers
const friendsKey = (userId) => `bl_friends_${userId || 'guest'}`;
const incomingKey = (userId) => `bl_friend_req_in_${userId || 'guest'}`;
const outgoingKey = (userId) => `bl_friend_req_out_${userId || 'guest'}`;
const recentKey = (userId) => `bl_recent_players_${userId || 'guest'}`;
const presenceCacheKey = 'bl_presence_cache';

// Seed default sample friends for an engaging out-of-the-box experience
const DEFAULT_SAMPLE_FRIENDS = [
  {
    id: 'friend_kabir',
    name: 'Kabir Sharma',
    avatar: '👦',
    friendCode: 'BL-KABIR',
    division: 'Junior',
    city: 'New Delhi',
    trophies: 1240,
    addedAt: Date.now() - 86400000 * 2,
    simulatedStatus: 'ONLINE'
  },
  {
    id: 'friend_priya',
    name: 'Priya Patel',
    avatar: '👧',
    friendCode: 'BL-PRIYA',
    division: 'Junior',
    city: 'Ahmedabad',
    trophies: 1560,
    addedAt: Date.now() - 86400000 * 4,
    simulatedStatus: 'ONLINE'
  },
  {
    id: 'friend_rohan',
    name: 'Rohan Verma',
    avatar: '⚡',
    friendCode: 'BL-ROHAN',
    division: 'Senior',
    city: 'Lucknow',
    trophies: 1890,
    addedAt: Date.now() - 86400000 * 7,
    simulatedStatus: 'IN_MATCH'
  }
];

function sanitizeCode(code) {
  return (code || '').toString().trim().toUpperCase().replace(/[^A-Z0-9-]/g, '');
}

const friendService = {
  /**
   * Get or generate unique 6-character Friend Code for a user (e.g. BL-4982)
   */
  getFriendCode(user) {
    if (!user) return 'BL-GUEST';
    if (user.friendCode) return user.friendCode;

    // Deterministically or randomly generate a memorable code
    const rawId = (user.id || user.email || user.name || 'user').toString();
    let hash = 0;
    for (let i = 0; i < rawId.length; i++) {
      hash = ((hash << 5) - hash) + rawId.charCodeAt(i);
      hash |= 0;
    }
    const cleanNum = Math.abs(hash % 90000) + 10000;
    const code = `BL-${cleanNum}`;

    try {
      user.friendCode = code;
      const currentUser = storageService.getCurrentUser();
      if (currentUser && currentUser.id === user.id) {
        currentUser.friendCode = code;
        storageService.setCurrentUser(currentUser);
      }
    } catch {}

    return code;
  },

  /**
   * Broadcast message locally and across cloud relay
   */
  async publishEvent(topic, payload) {
    try {
      // Local BroadcastChannel
      if (typeof BroadcastChannel !== 'undefined') {
        const ch = new BroadcastChannel(CHANNEL_NAME);
        ch.postMessage({ topic, payload, timestamp: Date.now() });
        ch.close();
      }
    } catch {}

    try {
      // Universal Cloud Relay (ntfy.sh)
      fetch(`${RELAY_BASE_URL}/${topic}`, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Title': 'BrainLeague Social',
          'Priority': 'urgent'
        }
      }).catch(() => {});
    } catch {}
  },

  // =============================================================
  // 1. FRIENDS LIST MANAGEMENT
  // =============================================================
  getFriends(userId) {
    try {
      const raw = localStorage.getItem(friendsKey(userId));
      if (!raw) {
        // Initialize with realistic friends
        localStorage.setItem(friendsKey(userId), JSON.stringify(DEFAULT_SAMPLE_FRIENDS));
        return DEFAULT_SAMPLE_FRIENDS;
      }
      return JSON.parse(raw);
    } catch {
      return DEFAULT_SAMPLE_FRIENDS;
    }
  },

  saveFriends(userId, friends) {
    try {
      localStorage.setItem(friendsKey(userId), JSON.stringify(friends));
    } catch {}
  },

  removeFriend(userId, friendId) {
    const friends = this.getFriends(userId).filter(f => f.id !== friendId);
    this.saveFriends(userId, friends);
    return friends;
  },

  // =============================================================
  // 2. RECENT PLAYERS TRACKER (PLAY ALONG & MATCHES)
  // =============================================================
  getRecentPlayers(userId) {
    try {
      const raw = localStorage.getItem(recentKey(userId));
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  },

  /**
   * Automatically records players encountered in Hot Seat, FFF, Play Alongs, or Private Rooms.
   */
  recordRecentPlayers(userId, players = [], context = 'Play Along') {
    if (!userId || !Array.isArray(players) || players.length === 0) return;

    try {
      const existing = this.getRecentPlayers(userId);
      const friends = this.getFriends(userId);
      const friendIds = new Set(friends.map(f => f.id));

      const updated = [...existing];

      players.forEach(p => {
        if (!p || p.id === userId) return; // Don't add oneself

        const friendCode = p.friendCode || this.getFriendCode(p);
        const idx = updated.findIndex(item => item.id === p.id);

        const record = {
          id: p.id,
          name: p.name || 'Brain Contender',
          avatar: p.avatar || '🎮',
          city: p.city || 'India',
          division: p.division || 'Junior',
          friendCode,
          context: p.context || context,
          isFriend: friendIds.has(p.id),
          playedAt: Date.now()
        };

        if (idx !== -1) {
          updated[idx] = { ...updated[idx], ...record };
        } else {
          updated.unshift(record);
        }
      });

      // Keep up to 30 most recent players
      const trimmed = updated.slice(0, 30);
      localStorage.setItem(recentKey(userId), JSON.stringify(trimmed));
    } catch {}
  },

  // =============================================================
  // 3. FRIEND REQUESTS (SEND / ACCEPT / DECLINE / BY CODE)
  // =============================================================
  getIncomingRequests(userId) {
    try {
      const raw = localStorage.getItem(incomingKey(userId));
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  },

  getOutgoingRequests(userId) {
    try {
      const raw = localStorage.getItem(outgoingKey(userId));
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  },

  /**
   * Send friend request to another player by Friend Code or Player Object
   */
  async sendFriendRequest(currentUser, target) {
    if (!currentUser) return { success: false, error: 'Please log in to add friends.' };

    const myCode = this.getFriendCode(currentUser);
    let targetCode = '';
    let targetUser = null;

    if (typeof target === 'string') {
      targetCode = sanitizeCode(target);
    } else if (target && target.friendCode) {
      targetCode = sanitizeCode(target.friendCode);
      targetUser = target;
    } else if (target && target.id) {
      targetCode = sanitizeCode(this.getFriendCode(target));
      targetUser = target;
    }

    if (!targetCode) {
      return { success: false, error: 'Please enter a valid Friend Code (e.g. BL-7842).' };
    }

    if (targetCode === myCode) {
      return { success: false, error: 'You cannot send a friend request to yourself!' };
    }

    // Check if already friends
    const currentFriends = this.getFriends(currentUser.id);
    if (currentFriends.some(f => sanitizeCode(f.friendCode) === targetCode || f.id === target?.id)) {
      return { success: false, error: 'You are already friends with this player!' };
    }

    // Check if already pending outgoing request
    const outgoing = this.getOutgoingRequests(currentUser.id);
    if (outgoing.some(r => sanitizeCode(r.targetCode) === targetCode)) {
      return { success: false, error: 'Friend request already sent to this player!' };
    }

    // Attempt to resolve target details from users or recent players
    if (!targetUser) {
      const allUsers = storageService.getUsers();
      targetUser = allUsers.find(u => sanitizeCode(this.getFriendCode(u)) === targetCode);
      if (!targetUser) {
        const recents = this.getRecentPlayers(currentUser.id);
        targetUser = recents.find(r => sanitizeCode(r.friendCode) === targetCode);
      }
    }

    const requestPayload = {
      requestId: `freq_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
      senderId: currentUser.id,
      senderName: currentUser.name || 'Brain Contender',
      senderAvatar: currentUser.avatar || '🎮',
      senderCode: myCode,
      senderDivision: currentUser.division || 'Junior',
      targetCode,
      targetId: targetUser?.id || null,
      targetName: targetUser?.name || 'ClassChamp Player',
      targetAvatar: targetUser?.avatar || '🌟',
      sentAt: Date.now()
    };

    // Save locally to outgoing requests
    outgoing.unshift(requestPayload);
    localStorage.setItem(outgoingKey(currentUser.id), JSON.stringify(outgoing));

    // Relay to cloud topic for target
    const topic = `bl_freq_${targetCode.replace(/[^A-Z0-9]/g, '')}`;
    await this.publishEvent(topic, {
      type: 'FRIEND_REQUEST',
      request: requestPayload
    });

    return {
      success: true,
      message: `Friend request sent to ${targetUser?.name || targetCode}!`,
      request: requestPayload
    };
  },

  /**
   * Accept an incoming friend request
   */
  async acceptFriendRequest(currentUser, request) {
    if (!currentUser || !request) return false;

    // 1. Add to current user's friends list
    const friends = this.getFriends(currentUser.id);
    const newFriend = {
      id: request.senderId || `friend_${Date.now()}`,
      name: request.senderName,
      avatar: request.senderAvatar || '🎮',
      friendCode: request.senderCode,
      division: request.senderDivision || 'Junior',
      city: 'India',
      addedAt: Date.now()
    };

    if (!friends.some(f => f.id === newFriend.id || f.friendCode === newFriend.friendCode)) {
      friends.unshift(newFriend);
      this.saveFriends(currentUser.id, friends);
    }

    // 2. Remove from incoming requests
    const incoming = this.getIncomingRequests(currentUser.id).filter(r => r.requestId !== request.requestId);
    localStorage.setItem(incomingKey(currentUser.id), JSON.stringify(incoming));

    // 3. Notify the sender that request was accepted
    const myCode = this.getFriendCode(currentUser);
    const topic = `bl_freq_${(request.senderCode || '').replace(/[^A-Z0-9]/g, '')}`;
    await this.publishEvent(topic, {
      type: 'FRIEND_ACCEPTED',
      acceptedBy: {
        id: currentUser.id,
        name: currentUser.name,
        avatar: currentUser.avatar,
        friendCode: myCode,
        division: currentUser.division || 'Junior'
      }
    });

    return true;
  },

  /**
   * Decline an incoming friend request
   */
  declineFriendRequest(userId, requestId) {
    const incoming = this.getIncomingRequests(userId).filter(r => r.requestId !== requestId);
    localStorage.setItem(incomingKey(userId), JSON.stringify(incoming));
    return incoming;
  },

  // =============================================================
  // 4. REAL-TIME ONLINE PRESENCE (PUBG STYLE)
  // =============================================================
  startPresenceHeartbeat(currentUser, getActiveStatus = () => 'ONLINE') {
    if (!currentUser?.id) return () => {};

    const cleanId = currentUser.id;
    const cleanCode = this.getFriendCode(currentUser);

    const sendPing = () => {
      const status = typeof getActiveStatus === 'function' ? getActiveStatus() : 'ONLINE';
      const payload = {
        userId: cleanId,
        friendCode: cleanCode,
        name: currentUser.name,
        avatar: currentUser.avatar,
        division: currentUser.division || 'Junior',
        status, // 'ONLINE' | 'IN_MATCH' | 'IN_LOBBY'
        timestamp: Date.now()
      };

      // Save in local storage cache
      try {
        const raw = localStorage.getItem(presenceCacheKey);
        const cache = raw ? JSON.parse(raw) : {};
        cache[cleanId] = payload;
        cache[cleanCode] = payload;
        localStorage.setItem(presenceCacheKey, JSON.stringify(cache));
      } catch {}

      // Broadcast to cloud presence topic
      const topic = `bl_pres_${cleanId}`;
      fetch(`${RELAY_BASE_URL}/${topic}`, {
        method: 'POST',
        body: JSON.stringify(payload)
      }).catch(() => {});
    };

    sendPing();
    const interval = setInterval(sendPing, 15000); // 15-second heartbeat
    return () => clearInterval(interval);
  },

  /**
   * Checks if a friend is currently online or in match
   * Returns: { isOnline: boolean, status: 'ONLINE' | 'IN_MATCH' | 'OFFLINE', label: string }
   */
  getFriendPresence(friend) {
    if (!friend) return { isOnline: false, status: 'OFFLINE', label: 'Offline' };

    // 1. Simulated status for demo friends so user always experiences live PUBG squad features
    if (friend.simulatedStatus) {
      return {
        isOnline: friend.simulatedStatus !== 'OFFLINE',
        status: friend.simulatedStatus,
        label: friend.simulatedStatus === 'ONLINE' ? 'Online' : 'In Match'
      };
    }

    try {
      const raw = localStorage.getItem(presenceCacheKey);
      if (raw) {
        const cache = JSON.parse(raw);
        const item = cache[friend.id] || cache[friend.friendCode];
        if (item && (Date.now() - (item.timestamp || 0) < 45000)) {
          return {
            isOnline: true,
            status: item.status || 'ONLINE',
            label: item.status === 'IN_MATCH' ? 'In Match' : 'Online'
          };
        }
      }
    } catch {}

    return {
      isOnline: false,
      status: 'OFFLINE',
      label: 'Offline'
    };
  },

  // =============================================================
  // 5. PUBG-STYLE REAL-TIME GAME INVITES (TEAM UP)
  // =============================================================
  /**
   * Send a direct Game Invite to a friend (e.g. from Home or Room Lobby)
   */
  async sendGameInvite({ fromUser, toFriend, roomCode, division = 'Junior' }) {
    if (!fromUser || !toFriend || !roomCode) {
      return { success: false, error: 'Missing invite details.' };
    }

    const invitePayload = {
      inviteId: `inv_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
      fromUser: {
        id: fromUser.id,
        name: fromUser.name || 'Friend',
        avatar: fromUser.avatar || '🎮'
      },
      toFriendId: toFriend.id,
      roomCode: sanitizeCode(roomCode),
      division,
      createdAt: Date.now(),
      expiresAt: Date.now() + 60000 // 60 seconds TTL
    };

    // Publish to friend's dedicated invite topic
    const topic = `bl_inv_${toFriend.id || toFriend.friendCode}`;
    await this.publishEvent(topic, {
      type: 'GAME_INVITE',
      invite: invitePayload
    });

    return { success: true, invite: invitePayload };
  },

  /**
   * Subscribe to incoming game invites for current player
   */
  subscribeToGameInvites(currentUser, onInviteReceived) {
    if (!currentUser?.id) return () => {};

    const cleanId = currentUser.id;
    const cleanCode = this.getFriendCode(currentUser);
    let isDisposed = false;
    let ws = null;
    let ch = null;

    // A. Local BroadcastChannel
    try {
      if (typeof BroadcastChannel !== 'undefined') {
        ch = new BroadcastChannel(CHANNEL_NAME);
        ch.onmessage = (e) => {
          if (isDisposed) return;
          const data = e.data?.payload;
          if (data?.type === 'GAME_INVITE' && data?.invite?.toFriendId === cleanId) {
            onInviteReceived(data.invite);
          }
        };
      }
    } catch {}

    // B. WebSocket to cloud relay
    const topic = `bl_inv_${cleanId}`;
    try {
      ws = new WebSocket(`${RELAY_WS_BASE}/${topic}/ws`);
      ws.onmessage = (event) => {
        if (isDisposed) return;
        try {
          const raw = JSON.parse(event.data);
          if (raw.event === 'message' && raw.message) {
            const data = JSON.parse(raw.message);
            if (data?.type === 'GAME_INVITE' && data?.invite) {
              onInviteReceived(data.invite);
            }
          }
        } catch {}
      };
    } catch {}

    return () => {
      isDisposed = true;
      if (ws) { try { ws.close(); } catch {} }
      if (ch) { try { ch.close(); } catch {} }
    };
  }
};

export default friendService;