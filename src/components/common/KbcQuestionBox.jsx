/**
 * KbcQuestionBox.jsx
 * Authentic TV Broadcast KBC Question Frame.
 * Features:
 * - Hexagonal/chevron metallic gold gradient border
 * - Deep studio midnight-blue radial gradient
 * - Lateral glowing laser line
 * - Level/Points badge & Subject indicator
 * - Highly legible, responsive typography
 */

import React from 'react';

export default function KbcQuestionBox({
  questionText,
  levelNumber,
  totalLevels = 15,
  pointsFormatted,
  subject,
  isPadav = false,
  questionLabel = "QUESTION",
  padavLabel = "SAFE PADAV",
  isCompact = false,
  className = ""
}) {
  return (
    <div className={`relative w-full ${isCompact ? 'my-1 sm:my-2' : 'my-2 sm:my-3'} ${className}`}>
      {/* Lateral Glowing Laser Lines extending from edges */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-between pointer-events-none px-1">
        <div className="h-[2px] w-8 sm:w-16 bg-gradient-to-r from-transparent via-champGold to-champGold opacity-70"></div>
        <div className="h-[2px] w-8 sm:w-16 bg-gradient-to-l from-transparent via-champGold to-champGold opacity-70"></div>
      </div>

      {/* Main Metallic Chevron Border Container */}
      <div className="kbc-frame-border p-[2px] sm:p-[2.5px] transition-all duration-300">
        <div className={`kbc-frame-inner ${
          isCompact ? 'px-3 py-1.5 sm:px-6 sm:py-3' : 'px-4 py-3 sm:px-8 sm:py-5'
        } flex flex-col justify-center items-center text-center relative overflow-hidden`}>
          {/* Subtle Ambient Studio Spotlight */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent pointer-events-none"></div>

          {/* Top Info Bar: Category / Question # / Points */}
          <div className={`flex wrap items-center justify-center gap-1.5 sm:gap-2 ${isCompact ? 'mb-1' : 'mb-2'} z-10`}>
            {subject && (
              <span className="text-[9px] sm:text-xs font-bold font-mono tracking-widest text-slate-300 uppercase px-1.5 py-0.5 rounded bg-navy-950/80 border border-white/10">
                {subject}
              </span>
            )}

            {levelNumber && (
              <span className="text-[9px] sm:text-xs font-bold font-rajdhani tracking-wider text-champGold bg-champGold/15 border border-champGold/40 px-2 py-0.5 rounded-full shadow">
                ◆ {questionLabel} {levelNumber}{totalLevels ? ` / ${totalLevels}` : ''} ◆
              </span>
            )}

            {pointsFormatted && (
              <span className="text-[9px] sm:text-xs font-bold font-mono text-emeraldGlow-light bg-emeraldGlow/15 border border-emeraldGlow/30 px-1.5 py-0.5 rounded-full">
                {pointsFormatted} Pts
              </span>
            )}

            {isPadav && (
              <span className="text-[9px] sm:text-xs font-bold text-amber-300 bg-amber-500/20 border border-amber-400/40 px-1.5 py-0.5 rounded-full flex items-center gap-1 animate-pulse">
                <span>🛡️</span> {padavLabel}
              </span>
            )}
          </div>

          {/* Question Text */}
          {questionText && typeof questionText === 'string' && questionText.includes('\n') ? (
            <div className={`z-10 max-w-4xl ${isCompact ? 'min-h-[28px]' : 'min-h-[44px]'} flex flex-col items-center justify-center text-center`}>
              <h2 className={`${isCompact ? 'text-[11px] sm:text-sm md:text-base' : 'text-xs sm:text-base md:text-lg'} font-bold text-amber-200 leading-snug tracking-wide font-sans`}>
                {questionText.split('\n')[0]}
              </h2>
              <p className={`${isCompact ? 'text-[10px] sm:text-xs' : 'text-[11px] sm:text-xs md:text-sm'} font-medium text-slate-300 leading-snug tracking-wide font-sans mt-0.5 pt-0.5 border-t border-white/10 max-w-3xl`}>
                {questionText.split('\n')[1]}
              </p>
            </div>
          ) : (
            <h2 className={`${isCompact ? 'text-[11px] sm:text-sm md:text-base min-h-[28px]' : 'text-xs sm:text-base md:text-lg min-h-[44px]'} font-bold text-pearl leading-snug tracking-wide font-sans z-10 max-w-4xl flex items-center justify-center`}>
              {questionText}
            </h2>
          )}
        </div>
      </div>
    </div>
  );
}
