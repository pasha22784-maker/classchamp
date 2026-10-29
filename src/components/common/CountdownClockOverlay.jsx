/**
 * CountdownClockOverlay.jsx
 * High-Drama BrainLeague Arena Center Countdown Clock.
 * Features:
 * - Radial rotating golden aura and circular progress stroke
 * - 5 -> 4 -> 3 -> 2 -> 1 -> GO! explosive scale animation
 * - Synchronized arena audio cues on every tick
 * - Fully customizable badge, title, subtitle and callback
 */

import React, { useState, useEffect } from 'react';
import soundService from '../../services/soundService';
import { Sparkles, Trophy, Gamepad2, Award } from 'lucide-react';

export default function CountdownClockOverlay({
  initialCount = 5,
  badge = 'RAPID ROUND QUALIFIER',
  badgeIcon = '⚡',
  title = 'Game Begins In',
  subtitle = 'Get Ready!',
  extraNote = null,
  accentColor = 'gold', // 'gold' | 'cyan' | 'emerald'
  onComplete
}) {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    // Sound on initial mount
    soundService.playCountdownTick(initialCount);

    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          soundService.playCountdownStart();
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 700);
          return 0; // 0 represents "GO!" / "START!"
        }
        soundService.playCountdownTick(prev - 1);
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const progressPercent = count === 0 ? 100 : ((initialCount - count + 1) / initialCount) * 100;
  const strokeDashoffset = 283 - (283 * progressPercent) / 100;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/90 backdrop-blur-md animate-fade-in">
      {/* Background Radial Glow */}
      <div className="absolute w-80 h-80 rounded-full bg-gradient-to-tr from-champGold/20 via-velvet-800/30 to-champGold/10 blur-3xl pointer-events-none" />

      {/* Main Glass Center Card */}
      <div className="relative w-full max-w-sm rounded-3xl p-6 bg-gradient-to-b from-navy-900/95 to-velvet-950/95 border-2 border-champGold/40 shadow-[0_0_50px_rgba(212,175,55,0.25)] text-center flex flex-col items-center">
        
        {/* Top Floating Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-champGold/20 border border-champGold/50 text-champGold text-[11px] font-bold tracking-widest uppercase mb-4 shadow">
          <span>{badgeIcon}</span>
          <span className="font-rajdhani">{badge}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-extrabold text-pearl font-cinzel tracking-wider uppercase mb-1 drop-shadow">
          {title}
        </h3>
        
        {/* Subtitle */}
        <p className="text-xs text-champGold font-medium mb-5">
          {subtitle}
        </p>

        {/* Big Circular Clock Display */}
        <div className="relative w-36 h-36 flex items-center justify-center my-2">
          {/* Outer Pulsing Aura Ring */}
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-champGold/30 animate-spin-slow pointer-events-none" />
          <div className="absolute inset-1 rounded-full bg-gradient-to-b from-velvet-900 to-navy-950 shadow-inner" />

          {/* SVG Circular Progress Bar */}
          <svg className="absolute inset-0 w-full h-full -rotate-90">
            <circle
              cx="72"
              cy="72"
              r="45"
              fill="transparent"
              stroke="rgba(255, 255, 255, 0.08)"
              strokeWidth="6"
            />
            <circle
              cx="72"
              cy="72"
              r="45"
              fill="transparent"
              stroke="#D4AF37"
              strokeWidth="6"
              strokeDasharray="283"
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-700 ease-out"
            />
          </svg>

          {/* Giant Number Animated */}
          <div
            key={count}
            className="relative z-10 flex flex-col items-center justify-center animate-scale-up"
          >
            {count > 0 ? (
              <span className="text-6xl font-black font-rajdhani text-transparent bg-clip-text bg-gradient-to-b from-pearl via-champGold to-champGold-dark drop-shadow-[0_4px_16px_rgba(212,175,55,0.6)]">
                {count}
              </span>
            ) : (
              <span className="text-4xl font-black font-rajdhani text-emeraldGlow-light drop-shadow-[0_0_20px_rgba(52,211,153,0.8)] tracking-wider animate-bounce">
                START!
              </span>
            )}
          </div>
        </div>

        {/* Extra Note / Context Preview */}
        {extraNote && (
          <div className="mt-4 p-2.5 rounded-xl bg-navy-950/80 border border-white/10 text-[11px] text-slate-300 w-full leading-relaxed">
            {extraNote}
          </div>
        )}

        {/* Bottom subtle indicator */}
        <div className="mt-4 flex items-center justify-center gap-1.5 text-[10px] text-slate-400 font-mono">
          <div className="w-1.5 h-1.5 rounded-full bg-champGold animate-pulse" />
          <span>BrainLeague Arena Match Countdown</span>
        </div>
      </div>
    </div>
  );
}
