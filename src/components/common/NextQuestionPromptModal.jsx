/**
 * NextQuestionPromptModal.jsx
 * Interstitial / Composure Modal shown after each correct answer.
 * Gives the contestant time to compose themselves, celebrates their earned points,
 * and prominently announces the points at stake for the next question.
 */

import React, { useState, useEffect } from 'react';
import soundService from '../../services/soundService';
import { Award, Shield, ArrowRight, Sparkles, CheckCircle2, Zap } from 'lucide-react';

export default function NextQuestionPromptModal({
  currentLevel,
  currentPoints,
  nextLevel,
  nextPoints,
  isNextPadav,
  onProceed
}) {
  const [secondsLeft, setSecondsLeft] = useState(4);

  useEffect(() => {
    // Play celebratory tone
    soundService.playFastFingerTick?.();

    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onProceed();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onProceed]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-navy-950/85 backdrop-blur-md animate-fadeIn select-none">
      <div className="w-full max-w-md bg-gradient-to-b from-navy-900 via-navy-950 to-velvet-950 border-2 border-champGold/60 rounded-3xl shadow-[0_0_50px_rgba(245,158,11,0.35)] p-5 text-center flex flex-col items-center relative overflow-hidden animate-scaleIn">
        
        {/* Ambient Top Glow */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-48 h-48 bg-champGold/20 rounded-full blur-3xl pointer-events-none" />

        {/* Victory Badge */}
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-600 to-emerald-400 text-navy-950 flex items-center justify-center shadow-[0_0_25px_rgba(16,185,129,0.5)] mb-3">
          <CheckCircle2 size={32} strokeWidth={2.5} />
        </div>

        {/* Current Result */}
        <span className="text-[11px] font-bold font-rajdhani text-emeraldGlow-light uppercase tracking-widest bg-emerald-500/15 border border-emerald-500/30 px-3 py-0.5 rounded-full mb-1">
          ✓ Correct Answer
        </span>
        <h3 className="text-sm font-semibold text-slate-300 font-cinzel">
          Level {currentLevel} Completed • <strong className="text-emerald-400 font-mono">+{currentPoints} Pts</strong>
        </h3>

        {/* Divider */}
        <div className="w-full flex items-center justify-center gap-2 my-4">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-champGold/40 to-transparent" />
          <span className="text-champGold text-xs">◆</span>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-champGold/40 to-transparent" />
        </div>

        {/* Next Question Announcement Card */}
        <div className="w-full rounded-2xl bg-gradient-to-b from-velvet-900/90 to-navy-900/90 border border-champGold/40 p-4 shadow-xl mb-4 relative">
          <p className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold mb-1">
            Question {nextLevel} of 15
          </p>

          <div className="my-1.5">
            <span className="text-xs text-champGold-light font-bold block font-rajdhani uppercase tracking-wider">
              Playing For
            </span>
            <span className="text-3xl sm:text-4xl font-black font-mono tracking-wider text-champGold drop-shadow-[0_2px_10px_rgba(245,158,11,0.6)]">
              {nextPoints}
            </span>
            <span className="text-xs text-champGold font-bold font-rajdhani ml-1 uppercase">
              Points
            </span>
          </div>

          {/* Safe Milestone Banner if applicable */}
          {isNextPadav && (
            <div className="mt-2.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500/25 via-champGold/30 to-amber-500/25 border border-champGold text-champGold text-[11px] font-bold flex items-center justify-center gap-1.5 shadow animate-pulse">
              <Shield size={14} className="text-champGold fill-champGold/30" />
              <span>SAFE MILESTONE LEVEL ({nextPoints} Guaranteed!)</span>
            </div>
          )}
        </div>

        {/* Composure Tip */}
        <p className="text-[11px] text-slate-400 mb-4 leading-relaxed max-w-xs">
          Take a deep breath and compose yourself. Focus on the next question!
        </p>

        {/* Proceed Action Button with Countdown */}
        <button
          type="button"
          onClick={() => {
            soundService.playClick();
            onProceed();
          }}
          className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-champGold via-amber-400 to-champGold-dark text-navy-950 font-black text-sm font-rajdhani uppercase tracking-wider shadow-[0_0_25px_rgba(245,158,11,0.4)] hover:brightness-110 active:scale-[0.98] transition flex items-center justify-center gap-2"
        >
          <span>Ready for Question {nextLevel}</span>
          <span className="bg-navy-950 text-champGold text-xs font-mono font-bold px-2 py-0.5 rounded-full">
            {secondsLeft}s
          </span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
