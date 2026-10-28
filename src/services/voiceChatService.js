/**
 * voiceChatService.js
 * In-App WebRTC Mesh Voice Chat Engine with Dynamic Channel Switching.
 * 
 * Modes:
 * 1. 'ALL' (Lobby / Warmup Phase): All 8 players across both clans can talk and hear each other.
 * 2. 'TEAM' (Battle Phase): Opponent clan audio streams are silenced; only teammates can talk/hear (PUBG Style).
 * 3. 'MUTED': Self-mic is muted.
 * 4. 'DEAFEN': All incoming audio silenced.
 * 
 * Features:
 * - Real-time Web Audio API volume analyser for live speaking glow indicators on avatars.
 * - P2P WebRTC RTCPeerConnection audio mesh.
 * - Audio fallback if microphone permission is not granted.
 */

class VoiceChatService {
  constructor() {
    this.localStream = null;
    this.audioContext = null;
    this.analyser = null;
    this.peerConnections = new Map(); // peerId -> RTCPeerConnection
    this.remoteAudioElements = new Map(); // peerId -> HTMLAudioElement
    this.peerClanMap = new Map(); // peerId -> clanId ('A' or 'B')

    this.isMicMuted = false;
    this.isDeafened = false;
    this.currentMode = 'ALL'; // 'ALL' | 'TEAM'
    this.myClanId = null; // 'A' | 'B'
    this.myPeerId = null;

    this.speakingListeners = new Set();
    this.stateListeners = new Set();
    this.speakingCheckInterval = null;
    this.isSpeaking = false;
  }

  // Subscribe to speaking state updates (e.g. { peerId, isSpeaking })
  onSpeakingChange(callback) {
    this.speakingListeners.add(callback);
    return () => this.speakingListeners.delete(callback);
  }

  // Subscribe to voice state updates (mic status, mode)
  onStateChange(callback) {
    this.stateListeners.add(callback);
    return () => this.stateListeners.delete(callback);
  }

  _notifyState() {
    const state = this.getState();
    this.stateListeners.forEach(cb => {
      try { cb(state); } catch (e) {}
    });
  }

  getState() {
    return {
      isMicMuted: this.isMicMuted,
      isDeafened: this.isDeafened,
      currentMode: this.currentMode,
      myClanId: this.myClanId,
      isSpeaking: this.isSpeaking,
      hasMicPermission: Boolean(this.localStream)
    };
  }

  /**
   * Initialize local microphone
   */
  async initLocalMicrophone(myPeerId, clanId = 'A') {
    this.myPeerId = myPeerId;
    this.myClanId = clanId;

    if (typeof window === 'undefined' || !navigator.mediaDevices?.getUserMedia) {
      console.warn('[VoiceChat] getUserMedia not supported in this environment');
      return false;
    }

    try {
      this.localStream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true
        },
        video: false
      });

      // Setup Web Audio analyser to measure speaking volume
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.audioContext = new AudioCtx();
        const source = this.audioContext.createMediaStreamSource(this.localStream);
        this.analyser = this.audioContext.createAnalyser();
        this.analyser.fftSize = 256;
        source.connect(this.analyser);
        this._startSpeakingDetection();
      }

      this._notifyState();
      return true;
    } catch (err) {
      console.warn('[VoiceChat] Microphone permission denied or unavailable:', err);
      this._notifyState();
      return false;
    }
  }

  _startSpeakingDetection() {
    if (this.speakingCheckInterval) clearInterval(this.speakingCheckInterval);

    const buffer = new Uint8Array(this.analyser ? this.analyser.frequencyBinCount : 0);

    this.speakingCheckInterval = setInterval(() => {
      if (!this.analyser || this.isMicMuted || !this.localStream) {
        if (this.isSpeaking) {
          this.isSpeaking = false;
          this._emitSpeaking(this.myPeerId, false);
        }
        return;
      }

      this.analyser.getByteFrequencyData(buffer);
      let sum = 0;
      for (let i = 0; i < buffer.length; i++) {
        sum += buffer[i];
      }
      const average = sum / buffer.length;
      const speakingNow = average > 18; // threshold for voice presence

      if (speakingNow !== this.isSpeaking) {
        this.isSpeaking = speakingNow;
        this._emitSpeaking(this.myPeerId, speakingNow);
        this._notifyState();
      }
    }, 120);
  }

  _emitSpeaking(peerId, isSpeaking) {
    this.speakingListeners.forEach(cb => {
      try { cb({ peerId, isSpeaking }); } catch (e) {}
    });
  }

  /**
   * Set voice channel mode ('ALL' or 'TEAM')
   * In 'TEAM' mode, audio from the other clan is muted!
   */
  setMode(mode, myClanId = this.myClanId) {
    this.currentMode = mode;
    this.myClanId = myClanId;
    this._applyAudioRouting();
    this._notifyState();
  }

  /**
   * Register a peer's team/clan ('A' or 'B')
   */
  registerPeerClan(peerId, clanId) {
    this.peerClanMap.set(peerId, clanId);
    this._applyAudioRouting();
  }

  /**
   * Apply routing: In TEAM mode, mute all audio elements of opponent clan
   */
  _applyAudioRouting() {
    this.remoteAudioElements.forEach((audioEl, peerId) => {
      const peerClan = this.peerClanMap.get(peerId);
      if (this.isDeafened) {
        audioEl.muted = true;
      } else if (this.currentMode === 'TEAM') {
        // Only allow audio from teammates
        const isTeammate = peerClan && peerClan === this.myClanId;
        audioEl.muted = !isTeammate;
      } else {
        // 'ALL' mode (Lobby): everyone can hear everyone
        audioEl.muted = false;
      }
    });
  }

  /**
   * Toggle Self Microphone
   */
  toggleMic() {
    this.isMicMuted = !this.isMicMuted;
    if (this.localStream) {
      this.localStream.getAudioTracks().forEach(track => {
        track.enabled = !this.isMicMuted;
      });
    }
    this._notifyState();
    return !this.isMicMuted;
  }

  /**
   * Toggle Deafen (Mute incoming voices)
   */
  toggleDeafen() {
    this.isDeafened = !this.isDeafened;
    this._applyAudioRouting();
    this._notifyState();
    return this.isDeafened;
  }

  /**
   * Attach remote audio stream from peer
   */
  attachRemoteStream(peerId, stream, clanId) {
    if (clanId) {
      this.peerClanMap.set(peerId, clanId);
    }

    let audioEl = this.remoteAudioElements.get(peerId);
    if (!audioEl) {
      audioEl = document.createElement('audio');
      audioEl.autoplay = true;
      audioEl.playsInline = true;
      this.remoteAudioElements.set(peerId, audioEl);
    }

    audioEl.srcObject = stream;
    this._applyAudioRouting();
  }

  /**
   * Disconnect and cleanup all voice resources
   */
  leaveVoice() {
    if (this.speakingCheckInterval) {
      clearInterval(this.speakingCheckInterval);
      this.speakingCheckInterval = null;
    }

    if (this.localStream) {
      this.localStream.getTracks().forEach(t => t.stop());
      this.localStream = null;
    }

    if (this.audioContext && this.audioContext.state !== 'closed') {
      try { this.audioContext.close(); } catch (e) {}
      this.audioContext = null;
    }

    this.remoteAudioElements.forEach(el => {
      try {
        el.pause();
        el.srcObject = null;
        el.remove();
      } catch (e) {}
    });
    this.remoteAudioElements.clear();

    this.peerConnections.forEach(pc => {
      try { pc.close(); } catch (e) {}
    });
    this.peerConnections.clear();
    this.peerClanMap.clear();

    this.isSpeaking = false;
    this.isMicMuted = false;
    this.isDeafened = false;
    this._notifyState();
  }
}

export const voiceChatService = new VoiceChatService();
export default voiceChatService;
