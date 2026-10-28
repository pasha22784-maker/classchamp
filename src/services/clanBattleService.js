/**
 * clanBattleService.js
 * 4v4 Clan Battle Room Orchestrator & Anti-Cheat Match Engine.
 * 
 * Rules:
 * - 2 Clans/Teams: Clan Alpha (up to 4) vs Clan Bravo (up to 4).
 * - Voice Chat Flow:
 *   - LOBBY / WARMUP: 'ALL' voice mode (Both teams talk together, 8 players max).
 *   - MATCH IN PROGRESS: 'TEAM' voice mode (Only teammates hear each other, opponent team muted!).
 * - Anti-Cheat Timer: Strict 20-second countdown per question to prevent web search or bot assistance.
 * - Team Locking: Team members can propose options; Captain locks or consensus locks.
 * - Live Audience Spectator Support: Broadcasts match to liveGameHubService so spectators can watch & play along!
 */

import voiceChatService from './voiceChatService';
import liveGameHubService from './liveGameHubService';
import questionEngine from './questionEngine';
import storageService from './storageService';

const CLAN_ROOM_KEY_PREFIX = 'bl_clan_room_';

class ClanBattleService {
  constructor() {
    this.currentRoom = null;
    this.roomListeners = new Set();
    this.questionTimer = null;
    this.pollInterval = null;
  }

  onRoomUpdate(callback) {
    this.roomListeners.add(callback);
    if (this.currentRoom) callback(this.currentRoom);
    return () => this.roomListeners.delete(callback);
  }

  _notify() {
    if (!this.currentRoom) return;
    this.roomListeners.forEach(cb => {
      try { cb({ ...this.currentRoom }); } catch (e) {}
    });

    // Also broadcast to Public Live Games Hub so audience can spectate
    if (this.currentRoom.stage === 'MATCH') {
      liveGameHubService.broadcastMatch({
        id: this.currentRoom.code,
        type: 'CLAN_4V4',
        title: `${this.currentRoom.clanA.name} vs ${this.currentRoom.clanB.name}`,
        division: this.currentRoom.division,
        currentLevel: (this.currentRoom.currentQIndex || 0) + 1,
        currentPrize: `${(this.currentRoom.currentQIndex + 1) * 10000} Pts`,
        viewersCount: this.currentRoom.spectatorsCount || 14,
        clanA: this.currentRoom.clanA,
        clanB: this.currentRoom.clanB,
        currentQuestion: this.currentRoom.questions?.[this.currentRoom.currentQIndex] || null,
        antiCheatTimeRemaining: this.currentRoom.timeRemaining || 20,
        audienceVotes: this.currentRoom.audienceVotes || { A: 0, B: 0, C: 0, D: 0 }
      });
    }
  }

  /**
   * Create a new 4v4 Clan Battle Room
   */
  createRoom(hostPlayer, division = 'Senior', clanName = 'Clan Alpha') {
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    const allQuestions = storageService.getQuestions();
    const matchQuestions = questionEngine.getHotSeatMatchQuestions(allQuestions, division, hostPlayer?.id).slice(0, 10);

    const room = {
      code,
      division,
      stage: 'LOBBY', // 'LOBBY' | 'MATCH' | 'RESULT'
      voiceMode: 'ALL', // 'ALL' (Lobby) -> 'TEAM' (Match)
      hostId: hostPlayer?.id,
      createdAt: Date.now(),
      spectatorsCount: 0,
      clanA: {
        id: 'CLAN_A',
        name: clanName || 'Alpha Titans',
        tag: 'ALP',
        badge: '🦅',
        score: 0,
        members: [
          {
            id: hostPlayer?.id || 'host',
            name: hostPlayer?.name || 'Player 1',
            avatar: hostPlayer?.avatar || '🦁',
            role: 'Captain',
            isReady: true,
            isSpeaking: false,
            clanId: 'CLAN_A'
          }
        ]
      },
      clanB: {
        id: 'CLAN_B',
        name: 'Bravo Strikers',
        tag: 'BRV',
        badge: '🐅',
        score: 0,
        members: []
      },
      questions: matchQuestions,
      currentQIndex: 0,
      timeRemaining: 20, // 20s anti-cheat timer
      teamProposals: { CLAN_A: {}, CLAN_B: {} },
      teamLocks: { CLAN_A: null, CLAN_B: null },
      audienceVotes: { A: 0, B: 0, C: 0, D: 0 }
    };

    this.currentRoom = room;
    this._saveRoom();

    // Start in ALL voice chat mode for warm-up & lobby banter
    voiceChatService.initLocalMicrophone(hostPlayer?.id, 'CLAN_A');
    voiceChatService.setMode('ALL', 'CLAN_A');

    this._startRelaySync(code);
    return room;
  }

  /**
   * Join an existing 4v4 Clan Battle Room
   */
  joinRoom(code, player, preferredClan = 'CLAN_B') {
    let room = this._loadRoom(code);
    if (!room) {
      // Mock / fallback room if testing
      return null;
    }

    const memberObj = {
      id: player.id,
      name: player.name,
      avatar: player.avatar || '🎮',
      role: 'Contender',
      isReady: false,
      isSpeaking: false
    };

    // Slot into chosen clan or available clan (max 4 per clan)
    const targetClanKey = preferredClan === 'CLAN_A' ? 'clanA' : 'clanB';
    const otherClanKey = targetClanKey === 'clanA' ? 'clanB' : 'clanA';

    if (room[targetClanKey].members.length < 4) {
      memberObj.clanId = room[targetClanKey].id;
      if (room[targetClanKey].members.length === 0) memberObj.role = 'Captain';
      room[targetClanKey].members.push(memberObj);
    } else if (room[otherClanKey].members.length < 4) {
      memberObj.clanId = room[otherClanKey].id;
      if (room[otherClanKey].members.length === 0) memberObj.role = 'Captain';
      room[otherClanKey].members.push(memberObj);
    } else {
      throw new Error('Both Clans are full (Max 4v4)');
    }

    this.currentRoom = room;
    this._saveRoom();

    // Init voice chat for this player
    voiceChatService.initLocalMicrophone(player.id, memberObj.clanId);
    voiceChatService.setMode(room.stage === 'MATCH' ? 'TEAM' : 'ALL', memberObj.clanId);

    this._notify();
    this._startRelaySync(code);
    return room;
  }

  /**
   * Toggle player ready status in Lobby
   */
  toggleReady(playerId) {
    if (!this.currentRoom || this.currentRoom.stage !== 'LOBBY') return;
    const findAndToggle = (clan) => {
      const m = clan.members.find(x => x.id === playerId);
      if (m) m.isReady = !m.isReady;
    };
    findAndToggle(this.currentRoom.clanA);
    findAndToggle(this.currentRoom.clanB);
    this._saveRoom();
    this._notify();
  }

  /**
   * Fill empty slots with realistic Clan Bots so solo/duo players can test 4v4 immediately
   */
  fillWithBots() {
    if (!this.currentRoom) return;
    const botNamesA = ['Aarav (Bot)', 'Diya (Bot)', 'Rishi (Bot)'];
    const botNamesB = ['Kabir (Bot)', 'Meera (Bot)', 'Reyansh (Bot)', 'Ishita (Bot)'];

    while (this.currentRoom.clanA.members.length < 4) {
      const name = botNamesA.shift() || 'AI Scout';
      this.currentRoom.clanA.members.push({
        id: `bot_a_${Date.now()}_${Math.random()}`,
        name,
        avatar: '🤖',
        role: 'Contender',
        isReady: true,
        isBot: true,
        clanId: 'CLAN_A'
      });
    }

    while (this.currentRoom.clanB.members.length < 4) {
      const name = botNamesB.shift() || 'AI Strike';
      this.currentRoom.clanB.members.push({
        id: `bot_b_${Date.now()}_${Math.random()}`,
        name,
        avatar: '🤖',
        role: this.currentRoom.clanB.members.length === 0 ? 'Captain' : 'Contender',
        isReady: true,
        isBot: true,
        clanId: 'CLAN_B'
      });
    }

    this._saveRoom();
    this._notify();
  }

  /**
   * Start 4v4 Match: Switch voice chat to 'TEAM' only!
   */
  startMatch() {
    if (!this.currentRoom) return;
    this.currentRoom.stage = 'MATCH';
    this.currentRoom.voiceMode = 'TEAM';
    this.currentRoom.currentQIndex = 0;
    this.currentRoom.timeRemaining = 20; // 20s anti-cheat
    this.currentRoom.teamProposals = { CLAN_A: {}, CLAN_B: {} };
    this.currentRoom.teamLocks = { CLAN_A: null, CLAN_B: null };

    // CRITICAL REQUIREMENT:
    // Game started -> Automatically switch Voice Engine to TEAM ONLY!
    // Opponent team audio is muted, only teammates can talk/hear!
    voiceChatService.setMode('TEAM');

    this._saveRoom();
    this._notify();
    this._startQuestionTimer();
  }

  /**
   * Anti-Cheat 20-Second Question Timer
   */
  _startQuestionTimer() {
    if (this.questionTimer) clearInterval(this.questionTimer);

    this.questionTimer = setInterval(() => {
      if (!this.currentRoom || this.currentRoom.stage !== 'MATCH') {
        clearInterval(this.questionTimer);
        return;
      }

      if (this.currentRoom.timeRemaining > 0) {
        this.currentRoom.timeRemaining -= 1;
        this._notify();
      } else {
        // Time expired! Evaluate round
        this._evaluateRound();
      }
    }, 1000);
  }

  /**
   * A player proposes an option during team discussion
   */
  proposeAnswer(playerId, clanId, optionKey) {
    if (!this.currentRoom || this.currentRoom.stage !== 'MATCH') return;
    if (!this.currentRoom.teamProposals[clanId]) {
      this.currentRoom.teamProposals[clanId] = {};
    }
    this.currentRoom.teamProposals[clanId][playerId] = optionKey;
    this._saveRoom();
    this._notify();
  }

  /**
   * Team Captain or Team locks answer ("ताला लगाया जाए?")
   */
  lockTeamAnswer(clanId, optionKey) {
    if (!this.currentRoom || this.currentRoom.stage !== 'MATCH') return;
    this.currentRoom.teamLocks[clanId] = optionKey;
    this._saveRoom();
    this._notify();

    // If both teams have locked, finish question early
    if (this.currentRoom.teamLocks.CLAN_A && this.currentRoom.teamLocks.CLAN_B) {
      setTimeout(() => this._evaluateRound(), 1200);
    }
  }

  /**
   * Evaluate Round Score and advance to next question
   */
  _evaluateRound() {
    if (this.questionTimer) clearInterval(this.questionTimer);
    if (!this.currentRoom) return;

    const currentQ = this.currentRoom.questions[this.currentRoom.currentQIndex];
    const correctAns = currentQ?.correctAnswer;
    const pointsForQuestion = (this.currentRoom.currentQIndex + 1) * 10000;

    // Check Clan A
    const lockA = this.currentRoom.teamLocks.CLAN_A;
    if (lockA === correctAns) {
      this.currentRoom.clanA.score += pointsForQuestion;
    }

    // Check Clan B (simulate bot if bot captain)
    let lockB = this.currentRoom.teamLocks.CLAN_B;
    if (!lockB) {
      // Bot pick
      const options = ['A', 'B', 'C', 'D'];
      lockB = Math.random() > 0.35 ? correctAns : options[Math.floor(Math.random() * 4)];
      this.currentRoom.teamLocks.CLAN_B = lockB;
    }
    if (lockB === correctAns) {
      this.currentRoom.clanB.score += pointsForQuestion;
    }

    this._notify();

    // After 3.5s review, move to next question or conclude
    setTimeout(() => {
      if (!this.currentRoom) return;
      if (this.currentRoom.currentQIndex < (this.currentRoom.questions.length - 1)) {
        this.currentRoom.currentQIndex += 1;
        this.currentRoom.timeRemaining = 20; // reset 20s anti-cheat timer
        this.currentRoom.teamProposals = { CLAN_A: {}, CLAN_B: {} };
        this.currentRoom.teamLocks = { CLAN_A: null, CLAN_B: null };
        this._saveRoom();
        this._notify();
        this._startQuestionTimer();
      } else {
        // Conclude Match
        this.currentRoom.stage = 'RESULT';
        // Re-enable ALL voice chat for post-match GG / handshake
        voiceChatService.setMode('ALL');
        this._saveRoom();
        this._notify();
        liveGameHubService.concludeMatch(this.currentRoom.code);
      }
    }, 3500);
  }

  /**
   * Leave clan battle and reset voice chat
   */
  leaveRoom() {
    if (this.questionTimer) clearInterval(this.questionTimer);
    if (this.pollInterval) clearInterval(this.pollInterval);
    if (this.currentRoom) {
      liveGameHubService.concludeMatch(this.currentRoom.code);
    }
    voiceChatService.leaveVoice();
    this.currentRoom = null;
  }

  _saveRoom() {
    if (!this.currentRoom || typeof window === 'undefined') return;
    try {
      localStorage.setItem(`${CLAN_ROOM_KEY_PREFIX}${this.currentRoom.code}`, JSON.stringify(this.currentRoom));
    } catch (e) {}
  }

  _loadRoom(code) {
    if (typeof window === 'undefined') return null;
    try {
      const raw = localStorage.getItem(`${CLAN_ROOM_KEY_PREFIX}${code}`);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  _startRelaySync(code) {
    if (this.pollInterval) clearInterval(this.pollInterval);
    // Periodically re-sync room state
    this.pollInterval = setInterval(() => {
      if (!this.currentRoom) {
        clearInterval(this.pollInterval);
        return;
      }
      this._saveRoom();
    }, 4000);
  }
}

export const clanBattleService = new ClanBattleService();
export default clanBattleService;
