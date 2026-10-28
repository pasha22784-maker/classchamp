/**
 * KbcOptionButton.jsx
 * Authentic TV Broadcast KBC Hexagonal Option Chevron Button.
 * Features:
 * - Geometric metallic borders with angled chevron cut
 * - Gold Diamond badge: ◆ A ◆
 * - Dynamic suspense glow on Lock ("Lock kiya jaye")
 * - Jade Green victory aura on Correct
 * - Crimson Alert on Wrong
 * - Elimination fade for 50:50 Lifeline
 * - Supports FFF sequence ordering (1st, 2nd, 3rd, 4th)
 * - Highly responsive: fluid font scaling and word-wrapping
 */

import React from 'react';
import { Check, X, Lock } from 'lucide-react';

export default function KbcOptionButton({
  letter,
  text,
  status = 'IDLE', // 'IDLE' | 'LOCKED' | 'CORRECT' | 'WRONG' | 'REVEALED_CORRECT' | 'ELIMINATED'
  orderNumber = null, // 1..4 for FFF
  badgeText = null,
  disabled = false,
  isCompact = false,
  onClick,
  className = ""
}) {
  const isEliminated = status === 'ELIMINATED';
  const isSelected = status === 'SELECTED';
  const isLocked = status === 'LOCKED';
  const isCorrect = status === 'CORRECT' || status === 'REVEALED_CORRECT';
  const isWrong = status === 'WRONG';

  // Outer border gradient based on state
  let borderGradient = "bg-gradient-to-r from-slate-700 via-champGold/40 to-slate-700 hover:from-champGold/70 hover:via-champGold hover:to-champGold/70";
  let innerBg = "bg-gradient-to-b from-[#0e172a] via-[#090d16] to-[#030712]";
  let textColor = "text-slate-100";
  let diamondColor = "text-champGold";
  let auraClass = "";

  if (isEliminated) {
    borderGradient = "bg-slate-800/40 opacity-20 pointer-events-none";
    innerBg = "bg-navy-950/40";
    textColor = "text-slate-600 line-through";
    diamondColor = "text-slate-600";
  } else if (isLocked) {
    borderGradient = "bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600";
    innerBg = "bg-gradient-to-b from-amber-950/80 via-amber-900/60 to-black";
    textColor = "text-amber-100 font-bold";
    diamondColor = "text-amber-300";
    auraClass = "kbc-locked-glow animate-pulse";
  } else if (isSelected) {
    borderGradient = "bg-gradient-to-r from-champGold via-amber-300 to-champGold ring-2 ring-champGold/60";
    innerBg = "bg-gradient-to-b from-amber-950/70 via-navy-900 to-[#0e172a]";
    textColor = "text-amber-200 font-bold";
    diamondColor = "text-champGold";
    auraClass = "shadow-[0_0_20px_rgba(245,158,11,0.6)] animate-pulse";
  } else if (isCorrect) {
    borderGradient = "bg-gradient-to-r from-emerald-600 via-emerald-400 to-emerald-600";
    innerBg = "bg-gradient-to-b from-emerald-950/80 via-emerald-900/60 to-black";
    textColor = "text-emerald-100 font-bold";
    diamondColor = "text-emerald-300";
    auraClass = "kbc-correct-glow";
  } else if (isWrong) {
    borderGradient = "bg-gradient-to-r from-red-600 via-red-400 to-red-600";
    innerBg = "bg-gradient-to-b from-red-950/80 via-red-900/60 to-black";
    textColor = "text-red-100 font-bold";
    diamondColor = "text-red-300";
    auraClass = "shadow-[0_0_25px_rgba(239,68,68,0.8)]";
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled || isEliminated}
      className={`group relative w-full text-left transition-all duration-200 select-none p-[2px] rounded-xl sm:rounded-2xl ${borderGradient} ${auraClass} ${
        disabled ? 'cursor-default' : 'cursor-pointer hover:scale-[1.01] active:scale-[0.99]'
      } ${className}`}
    >
      {/* Inner Chevron Content */}
      <div className={`w-full h-full ${
        isCompact ? 'px-2.5 py-1.5 sm:px-4 sm:py-2.5 rounded-[8px] sm:rounded-[14px]' : 'px-3 py-2.5 sm:px-4 sm:py-3.5 rounded-[10px] sm:rounded-[14px]'
      } ${innerBg} flex items-center justify-between gap-2 sm:gap-3 transition-colors`}>
        {/* Left Side: Diamond Badge + Option Text */}
        <div className="flex items-center gap-1.5 sm:gap-3 min-w-0 flex-1">
          {/* Diamond Letter Badge */}
          <div className="flex items-center gap-0.5 shrink-0 font-rajdhani font-black text-xs sm:text-sm">
            <span className={`${diamondColor} text-[9px] sm:text-xs`}>◆</span>
            <span className={`px-1 sm:px-1.5 py-0.2 sm:py-0.5 rounded font-mono font-bold text-[11px] sm:text-sm ${
              isLocked
                ? 'bg-amber-400 text-navy-950 shadow'
                : isSelected
                  ? 'bg-champGold text-navy-950 shadow font-black'
                  : isCorrect
                    ? 'bg-emerald-400 text-navy-950 shadow'
                    : isWrong
                      ? 'bg-red-500 text-white shadow'
                      : 'bg-navy-900/90 text-champGold border border-champGold/30 group-hover:border-champGold'
            }`}>
              {letter}
            </span>
            <span className={`${diamondColor} text-[9px] sm:text-xs`}>◆</span>
          </div>

          {/* Option Text */}
          <span className={`${isCompact ? 'text-[11px] sm:text-xs md:text-sm' : 'text-xs sm:text-sm'} font-semibold truncate-2-lines leading-snug break-words ${textColor}`}>
            {isEliminated ? '— — —' : (
              text && typeof text === 'string' && text.includes(' / ') ? (
                <>
                  <span className="font-bold">{text.split(' / ')[0]}</span>
                  <span className="text-champGold/80 text-[10px] sm:text-xs font-normal ml-1 sm:ml-1.5 opacity-90">/ {text.split(' / ')[1]}</span>
                </>
              ) : text
            )}
          </span>
        </div>

        {/* Right Side: Status Badges / FFF Order / Feedback Icons */}
        <div className="flex items-center gap-1.5 shrink-0">
          {orderNumber && (
            <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-champGold text-navy-950 font-black text-xs sm:text-sm flex items-center justify-center shadow-lg font-mono">
              #{orderNumber}
            </span>
          )}

          {isSelected && !isLocked && !isCorrect && !isWrong && (
            <span className="flex items-center gap-1 text-[10px] sm:text-xs font-bold text-champGold uppercase tracking-wider font-rajdhani px-2 py-0.5 rounded bg-champGold/20 border border-champGold/50 animate-pulse">
              <span>Selected</span>
            </span>
          )}

          {isLocked && !isCorrect && !isWrong && (
            <span className="flex items-center gap-1 text-[10px] sm:text-xs font-bold text-amber-300 uppercase tracking-wider font-rajdhani px-2 py-0.5 rounded bg-amber-500/20 border border-amber-400/40">
              <Lock size={12} className="animate-spin text-amber-300" />
              <span>Locked</span>
            </span>
          )}

          {isCorrect && (
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-emerald-500 text-navy-950 flex items-center justify-center shadow-lg">
              <Check size={16} strokeWidth={3} />
            </div>
          )}

          {isWrong && (
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg">
              <X size={16} strokeWidth={3} />
            </div>
          )}

          {badgeText && !isLocked && !isCorrect && !isWrong && (
            <span className="text-[10px] sm:text-xs font-mono font-bold px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-400/30">
              {badgeText}
            </span>
          )}
        </div>
      </div>
    </button>
  );
}
