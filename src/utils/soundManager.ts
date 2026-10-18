import { Platform } from 'react-native';
import { triggerHaptic } from './haptics';

// Sound effect player with Web Audio API support and graceful haptic fallback
class SoundManager {
  private audioContext: any = null;

  constructor() {
    if (Platform.OS === 'web' && typeof window !== 'undefined') {
      try {
        const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
        if (AudioCtx) {
          this.audioContext = new AudioCtx();
        }
      } catch {
        // Web audio context not available
      }
    }
  }

  // Play synthetic pleasant musical chime for correct answers
  playCorrect() {
    triggerHaptic('success');
    if (this.audioContext) {
      try {
        const ctx = this.audioContext;
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        // Play upward musical arpeggio: C5 -> E5 -> G5
        osc.frequency.setValueAtTime(523.25, now); // C5
        osc.frequency.setValueAtTime(659.25, now + 0.1); // E5
        osc.frequency.setValueAtTime(783.99, now + 0.2); // G5

        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 0.4);
      } catch {
        // Fallback
      }
    }
  }

  // Play gentle, friendly low-thud for incorrect answers (never punishing)
  playIncorrect() {
    triggerHaptic('error');
    if (this.audioContext) {
      try {
        const ctx = this.audioContext;
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'triangle';
        // Friendly downward wobble
        osc.frequency.setValueAtTime(320, now);
        osc.frequency.linearRampToValueAtTime(240, now + 0.25);

        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 0.3);
      } catch {
        // Fallback
      }
    }
  }

  // Play celebratory grand fanfare for finishing the 10-minute quiz
  playFanfare() {
    triggerHaptic('success');
    if (this.audioContext) {
      try {
        const ctx = this.audioContext;
        const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
        notes.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          const noteTime = ctx.currentTime + idx * 0.12;

          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, noteTime);

          gain.gain.setValueAtTime(0.25, noteTime);
          gain.gain.exponentialRampToValueAtTime(0.01, noteTime + 0.35);

          osc.connect(gain);
          gain.connect(ctx.destination);

          osc.start(noteTime);
          osc.stop(noteTime + 0.35);
        });
      } catch {
        // Fallback
      }
    }
  }

  // Play gentle pop for button touches
  playPop() {
    triggerHaptic('light');
  }

  // Play light click sound
  playClick() {
    this.playPop();
  }

  // Play crisp click sound for spinning wheel ticks
  playSpinTick() {
    triggerHaptic('light');
    if (this.audioContext) {
      try {
        const ctx = this.audioContext;
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(800, now);
        osc.frequency.exponentialRampToValueAtTime(300, now + 0.05);

        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 0.05);
      } catch {
        // Fallback
      }
    }
  }

  // Play joyful sparkle chime for winning rewards
  playReward() {
    triggerHaptic('success');
    if (this.audioContext) {
      try {
        const ctx = this.audioContext;
        const notes = [659.25, 783.99, 987.77, 1318.51]; // E5, G5, B5, E6
        notes.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          const noteTime = ctx.currentTime + idx * 0.09;

          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, noteTime);

          gain.gain.setValueAtTime(0.2, noteTime);
          gain.gain.exponentialRampToValueAtTime(0.01, noteTime + 0.3);

          osc.connect(gain);
          gain.connect(ctx.destination);

          osc.start(noteTime);
          osc.stop(noteTime + 0.3);
        });
      } catch {
        // Fallback
      }
    }
  }

  // Play bouncy high-frequency pop for balloon pop
  playBubblePop() {
    triggerHaptic('medium');
    if (this.audioContext) {
      try {
        const ctx = this.audioContext;
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(400, now);
        osc.frequency.exponentialRampToValueAtTime(1200, now + 0.06);

        gain.gain.setValueAtTime(0.25, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 0.08);
      } catch {
        // Fallback
      }
    }
  }

  // Play clear bell chime for balanced scale or completed challenge
  playBell() {
    triggerHaptic('success');
    if (this.audioContext) {
      try {
        const ctx = this.audioContext;
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(1046.5, now); // C6 bell
        osc.frequency.exponentialRampToValueAtTime(1046.5, now + 0.8);

        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.8);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 0.8);
      } catch {
        // Fallback
      }
    }
  }

  // Play laser shoot sound for angle lab
  playLaser() {
    triggerHaptic('light');
    if (this.audioContext) {
      try {
        const ctx = this.audioContext;
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(1200, now);
        osc.frequency.exponentialRampToValueAtTime(200, now + 0.15);

        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 0.15);
      } catch {
        // Fallback
      }
    }
  }
}

export const soundManager = new SoundManager();


