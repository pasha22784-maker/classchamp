/**
 * HotSeatWinnerModal.jsx
 * Grand Celebration Modal notifying the contestant they have been selected for the Hot Seat.
 * Features:
 * - Fullscreen studio backdrop with golden radial aura
 * - Confetti explosion & triumphant brass fanfare
 * - Contestant victory badge, avatar, and winning stats (#1 Rank, completion time)
 * - 15-Question Point Ladder Roadmap (Padav 1: Q5, Padav 2: Q10, Jackpot: Q15 1 Crore)
 * - 4 Lifelines briefing (50:50, Audience Poll, Guru Hint, Time Freeze)
 * - Center Countdown Clock (5 -> 4 -> 3 -> 2 -> 1 -> START!)
 * - Synchronized rising pitch tick and fanfare audio
 * - 1-tap "Enter Hot Seat Now" quick action
 */

import React, { useState, useEffect } from 'react';
import soundService from '../../services/soundService';
import { useGame } from '../../context/GameContext';
import confetti from 'canvas-confetti';
import { Crown, Trophy, Sparkles, Award, Shield, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';

export default function HotSeatWinnerModal({
  player,
  timeTaken,
  onComplete
}) {
  const { t } = useGame();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    // 1. Confetti celebration
    try {
      confetti({
        particleCount: 120,
        spread: 100,
        origin: { y: 0.5 }
      });
      setTimeout(() => {
        confetti({
          particleCount: 80,
          angle: 60,
          spread: 70,
          origin: { x: 0.1, y: 0.6 }
        });
        confetti({
          particleCount: 80,
          angle: 120,
          spread: 70,
          origin: { x: 0.9, y: 0.6 }
        });
      }, 400);
    } catch (e) {}

    // 2. Play initial audio cue
    soundService.playCountdownTick(5);

    // 3. 5-second countdown timer
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          soundService.playCountdownStart();
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 800);
          return 0; // 0 represents "START!"
        }
        soundService.playCountdownTick(prev - 1);
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const progressPercent = countdown === 0 ? 100 : ((5 - countdown + 1) / 5) * 100;
  const strokeDashoffset = 283 - (283 * progressPercent) / 100;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-navy-950/92 backdrop-blur-md animate-fade-in select-none">
      {/* Background Radial Gold Glow */}
      <div className="absolute w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-amber-500/25 via-champGold/30 to-amber-600/20 blur-3xl pointer-events-none" />

      {/* Main Center Modal Container */}
      <div className="relative w-full max-w-md rounded-3xl p-5 sm:p-7 bg-gradient-to-b from-[#141b2d]/98 via-[#0e1424]/98 to-[#050811]/98 border-2 border-champGold shadow-[0_0_60px_rgba(212,175,55,0.35)] text-center flex flex-col items-center overflow-hidden">
        
        {/* Top Gold Badge */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-amber-500/25 via-champGold/30 to-amber-500/25 border border-champGold/60 text-champGold text-[11px] sm:text-xs font-bold tracking-widest uppercase mb-3 shadow-lg">
          <Crown size={14} className="text-amber-400" />
          <span className="font-rajdhani">{t('winnerBadge')}</span>
          <Crown size={14} className="text-amber-400" />
        </div>

        {/* Winner Profile Badge */}
        <div className="flex items-center gap-3 p-2.5 rounded-2xl bg-navy-900/90 border border-champGold/40 mb-3 w-full justify-center shadow-inner">
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-500 to-champGold flex items-center justify-center text-2xl shadow-md border-2 border-pearl">
              {player?.avatar || '🦁'}
            </div>
            <span className="absolute -bottom-1 -right-1 px-1.5 py-0.2 rounded-full bg-champGold text-navy-950 font-black text-[9px] shadow">
              #1
            </span>
          </div>

          <div className="text-left">
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-sm text-pearl font-cinzel">
                {player?.name || 'Contender'} (YOU)
              </span>
            </div>
            <div className="text-[11px] text-emeraldGlow-light font-mono font-semibold flex items-center gap-1">
              <CheckCircle2 size={12} />
              <span>{timeTaken ? `${timeTaken}s` : 'Winner!'}</span>
            </div>
          </div>
        </div>

        {/* Main Headline */}
        <h2 className="text-lg sm:text-xl font-black text-pearl font-cinzel tracking-wide uppercase mb-1 drop-shadow leading-snug">
          {t('winnerHeadline')}
        </h2>
        
        <p className="text-xs text-slate-300 mb-3 leading-relaxed">
          {t('winnerSubtext')}
        </p>

        {/* Game Rules / Safe Padav Milestone Chips */}
        <div className="grid grid-cols-2 gap-2 w-full mb-3 text-[10px] sm:text-xs">
          <div className="p-2 rounded-xl bg-navy-950/80 border border-champGold/30 text-champGold flex items-center gap-1.5 justify-center">
            <Shield size={13} className="shrink-0 text-champGold" />
            <span>{t('safePadavsChip')}</span>
          </div>
          <div className="p-2 rounded-xl bg-navy-950/80 border border-emeraldGlow/30 text-emeraldGlow-light flex items-center gap-1.5 justify-center">
            <Zap size={13} className="shrink-0 text-emeraldGlow-light" />
            <span>{t('lifelinesChip')}</span>
          </div>
        </div>

        {/* Center Dramatic Circular Clock */}
        <div className="w-full pt-2 border-t border-white/10 flex flex-col items-center">
          <span className="text-[11px] font-bold text-champGold uppercase tracking-wider mb-1 font-rajdhani">
            {t('hotSeatBeginsIn')}
          </span>

          <div className="relative w-28 h-28 flex items-center justify-center my-1">
            {/* Outer Rotating Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-champGold/40 animate-spin-slow pointer-events-none" />
            <div className="absolute inset-1 rounded-full bg-gradient-to-b from-velvet-900 to-navy-950 shadow-inner" />

            {/* Circular Progress Stroke */}
            <svg className="absolute inset-0 w-full h-full -rotate-90">
              <circle
                cx="56"
                cy="56"
                r="45"
                fill="transparent"
                stroke="rgba(255, 255, 255, 0.08)"
                strokeWidth="5"
              />
              <circle
                cx="56"
                cy="56"
                r="45"
                fill="transparent"
                stroke="#D4AF37"
                strokeWidth="5"
                strokeDasharray="283"
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                className="transition-all duration-700 ease-out"
              />
            </svg>

            {/* Giant Number Animated */}
            <div
              key={countdown}
              className="relative z-10 flex flex-col items-center justify-center animate-scale-up"
            >
              {countdown > 0 ? (
                <span className="text-5xl font-black font-rajdhani text-transparent bg-clip-text bg-gradient-to-b from-pearl via-champGold to-amber-500 drop-shadow-[0_4px_16px_rgba(212,175,55,0.7)]">
                  {countdown}
                </span>
              ) : (
                <span className="text-3xl font-black font-rajdhani text-emeraldGlow-light drop-shadow-[0_0_20px_rgba(52,211,153,0.8)] tracking-wider animate-bounce">
                  {t('countdownStart')}
                </span>
              )}
            </div>
          </div>

          <span className="text-[10px] text-slate-400 mt-1 font-medium">
            {t('hotSeatHint')}
          </span>
        </div>

        {/* Quick Skip / Enter Button */}
        <button
          type="button"
          onClick={() => {
            soundService.playClick();
            if (onComplete) onComplete();
          }}
          className="mt-3 w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-champGold to-amber-500 text-navy-950 font-bold text-xs uppercase tracking-wider font-rajdhani flex items-center justify-center gap-1.5 shadow-lg hover:brightness-110 active:scale-95 transition"
        >
          <span>{t('enterHotSeatNow')}</span>
          <ArrowRight size={14} />
        </button>

      </div>
    </div>
  );
}
