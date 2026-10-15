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
}

export const soundManager = new SoundManager();
