/**
 * HotSeatScreen.jsx
 * The 15-Step Hot-Seat Quiz Engine.
 * Features:
 * - 15-Level Point Ladder with Safe Padavs (Q5: 10,000 & Q10: 3,20,000 & Q15: 1 Crore)
 * - 4 Interactive Lifelines: 50:50, Audience Poll, Ask AI Guru, Time Freeze
 * - Tick-tick and Heartbeat audio tension cues
 * - Lock suspense and celebration fanfare
 * - Walk Away / Take Points functionality
 */

import React, { useState, useEffect, useRef } from 'react';
import { useGame } from '../context/GameContext';
import { LADDER_TIERS } from '../services/questionEngine';
import soundService from '../services/soundService';
import {
  Timer,
  Pause,
  Award,
  HelpCircle,
  BarChart2,
  Brain,
  Snowflake,
  LogOut,
  ChevronUp,
  ChevronDown,
  Check,
  X
} from 'lucide-react';

export default function HotSeatScreen() {
  const {
    hotSeatQuestions,
    currentQIndex,
    lockedOption,
    isAnswerLocked,
    revealState,
    timerRemaining,
    setTimerRemaining,
    isTimerPaused,
    lockAnswer,
    walkAway,
    handleTimeOut,
    lifelinesUsed,
    eliminatedOptions,
    audiencePollData,
    activeGuruHint,
    useFiftyFifty,
    useAudiencePoll,
    useGuruHint,
    useTimeFreeze
  } = useGame();

  const [showLadder, setShowLadder] = useState(false);
  const currentQ = hotSeatQuestions[currentQIndex];
  const tierMeta = currentQ?.tierMeta || LADDER_TIERS[currentQIndex] || LADDER_TIERS[0];

  // Tick-tick and Heartbeat Audio Loop
  useEffect(() => {
    if (isAnswerLocked || revealState || isTimerPaused) return;

    const timer = setInterval(() => {
      setTimerRemaining(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleTimeOut();
          return 0;
        }

        // Tension audio cues
        if (currentQIndex >= 9) {
          // Heartbeat on high levels (Q10 to Q15)
          soundService.playHeartbeat();
        } else {
          // Standard clock tick
          soundService.playTick();
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentQIndex, isAnswerLocked, revealState, isTimerPaused]);

  if (!currentQ) return null;

  return (
    <div className="flex-1 flex flex-col justify-between p-4 relative">
      {/* Top Header: Ladder Drawer Toggle, Current Points, & Timer */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-2">
          {/* Level & Points Indicator */}
          <button
            type="button"
            onClick={() => { soundService.playClick(); setShowLadder(prev => !prev); }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-velvet-900 border border-champGold/40 text-xs font-bold text-champGold shadow"
          >
            <span>Q{currentQIndex + 1}/15: {tierMeta.label} Pts</span>
            {showLadder ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>

          {/* Lifelines Bar */}
          <div className="flex items-center gap-1.5">
            {/* 1. 50:50 */}
            <button
              type="button"
              onClick={useFiftyFifty}
              disabled={lifelinesUsed.fiftyFifty || isAnswerLocked}
              className={`w-8 h-8 rounded-lg flex items-center justify-center text-[11px] font-bold font-mono transition border ${
                lifelinesUsed.fiftyFifty
                  ? 'bg-navy-900 text-slate-600 border-white/5 line-through opacity-40 cursor-not-allowed'
                  : 'bg-velvet-800 hover:bg-velvet-700 text-champGold border-champGold/40 shadow hover:scale-105 active:scale-95'
              }`}
              title="50:50 (Removes 2 incorrect options)"
            >
              50:50
            </button>

            {/* 2. Audience Poll */}
            <button
              type="button"
              onClick={useAudiencePoll}
              disabled={lifelinesUsed.audiencePoll || isAnswerLocked}
              className={`w-8 h-8 rounded-lg flex items-center justify-center transition border ${
                lifelinesUsed.audiencePoll
                  ? 'bg-navy-900 text-slate-600 border-white/5 opacity-40 cursor-not-allowed'
                  : 'bg-velvet-800 hover:bg-velvet-700 text-blue-400 border-blue-400/40 shadow hover:scale-105 active:scale-95'
              }`}
              title="Audience Poll (Live spectator & calibrated bot votes)"
            >
              <BarChart2 size={15} />
            </button>

            {/* 3. Ask AI Guru */}
            <button
              type="button"
              onClick={useGuruHint}
              disabled={lifelinesUsed.guruHint || isAnswerLocked}
              className={`w-8 h-8 rounded-lg flex items-center justify-center transition border ${
                lifelinesUsed.guruHint
                  ? 'bg-navy-900 text-slate-600 border-white/5 opacity-40 cursor-not-allowed'
                  : 'bg-velvet-800 hover:bg-velvet-700 text-emeraldGlow-light border-emeraldGlow/40 shadow hover:scale-105 active:scale-95'
              }`}
              title="Ask the AI Guru (Smart hint)"
            >
              <Brain size={15} />
            </button>

            {/* 4. Time Freeze */}
            <button
              type="button"
              onClick={useTimeFreeze}
              disabled={lifelinesUsed.timeFreeze || isAnswerLocked}
              className={`w-8 h-8 rounded-lg flex items-center justify-center transition border ${
                lifelinesUsed.timeFreeze
                  ? 'bg-navy-900 text-slate-600 border-white/5 opacity-40 cursor-not-allowed'
                  : 'bg-velvet-800 hover:bg-velvet-700 text-cyan-400 border-cyan-400/40 shadow hover:scale-105 active:scale-95'
              }`}
              title="Time Freeze (Stop countdown clock)"
            >
              <Snowflake size={15} />
            </button>
          </div>

          {/* Clock Timer */}
          <div className={`flex items-center gap-1 px-2.5 py-1 rounded-xl border font-mono font-bold text-xs ${
            isTimerPaused
              ? 'bg-cyan-500/20 border-cyan-500 text-cyan-300'
              : timerRemaining <= 10
                ? 'bg-crimsonAlert/20 border-crimsonAlert text-crimsonAlert animate-pulse'
                : 'bg-navy-900 border-white/10 text-pearl'
          }`}>
            {isTimerPaused ? <Pause size={13} /> : <Timer size={13} />}
            <span>{timerRemaining}s</span>
          </div>
        </div>

        {/* Safe Padav Banner Notification */}
        {tierMeta.isPadav && (
          <div className="mb-2 px-3 py-1 rounded-lg bg-champGold/20 border border-champGold/40 text-champGold text-[11px] font-bold flex items-center justify-between">
            <span>🛡️ SAFE PADAV MILESTONE</span>
            <span>{tierMeta.label} Guaranteed</span>
          </div>
        )}

        {/* Active AI Guru Hint Box */}
        {activeGuruHint && (
          <div className="mb-3 p-3 rounded-xl bg-emeraldGlow/15 border border-emeraldGlow/40 text-pearl text-xs flex items-start gap-2 shadow-lg animate-fadeIn">
            <Brain size={16} className="text-emeraldGlow-light shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-emeraldGlow-light block text-[10px] uppercase">
                AI Guru Hint:
              </span>
              <span>{activeGuruHint}</span>
            </div>
          </div>
        )}

        {/* Audience Poll Bar Chart Modal/Box */}
        {audiencePollData && (
          <div className="mb-3 p-3 rounded-xl bg-velvet-950 border border-blue-500/40 shadow-xl animate-fadeIn">
            <div className="text-[10px] font-bold text-blue-300 uppercase tracking-wider mb-2 flex items-center justify-between">
              <span>📊 Live Audience & Spectator Poll Results</span>
              <span>100% Total</span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {['A', 'B', 'C', 'D'].map(k => (
                <div key={k} className="text-center">
                  <div className="h-16 bg-navy-900 rounded-lg flex items-end p-1 border border-white/5">
                    <div
                      className="w-full bg-blue-500 rounded transition-all duration-700"
                      style={{ height: `${audiencePollData[k] || 0}%` }}
                    ></div>
                  </div>
                  <span className="block text-[10px] font-mono font-bold text-blue-300 mt-1">
                    {audiencePollData[k] || 0}%
                  </span>
                  <span className="block text-[10px] font-bold text-pearl">{k}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Main Question Card */}
        <div className="p-4 rounded-2xl glass-panel border border-champGold/30 shadow-2xl relative">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-bold text-champGold uppercase tracking-wider bg-champGold/10 px-2 py-0.5 rounded border border-champGold/20">
              {currentQ.subject || 'Trivia'} • Level {currentQIndex + 1}
            </span>
            <span className="text-[11px] font-mono font-bold text-slate-300">
              {tierMeta.label} Virtual Points
            </span>
          </div>

          <h2 className="text-sm font-semibold text-pearl leading-relaxed min-h-[50px]">
            {currentQ.text}
          </h2>
        </div>
      </div>

      {/* 4 Hot-Seat Answer Options */}
      <div className="space-y-2.5 my-3">
        {['A', 'B', 'C', 'D'].map((letter) => {
          const isEliminated = eliminatedOptions.includes(letter);
          const isSelected = lockedOption === letter;
          const isCorrect = currentQ.correctAnswer === letter;

          // Compute button color states
          let btnClass = "bg-navy-900/90 border-white/10 hover:border-champGold/40 text-slate-200";

          if (isEliminated) {
            btnClass = "bg-navy-950/40 border-white/5 text-slate-600 opacity-25 cursor-not-allowed";
          } else if (isSelected && !revealState) {
            // Locked & suspense pulse
            btnClass = "bg-champGold/25 border-champGold text-pearl animate-pulse gold-border-glow";
          } else if (revealState === 'CORRECT' && isCorrect) {
            // Correct Green Flash
            btnClass = "bg-emeraldGlow/30 border-emeraldGlow text-emeraldGlow-light emerald-border-glow";
          } else if (revealState === 'WRONG' && isSelected) {
            // Wrong Red Flash
            btnClass = "bg-crimsonAlert/30 border-crimsonAlert text-crimsonAlert-light crimson-border-glow";
          } else if (revealState === 'WRONG' && isCorrect) {
            // Reveal true correct answer
            btnClass = "bg-emeraldGlow/20 border-emeraldGlow/60 text-emeraldGlow-light";
          }

          return (
            <button
              key={letter}
              type="button"
              onClick={() => lockAnswer(letter)}
              disabled={isAnswerLocked || isEliminated}
              className={`w-full p-3 rounded-xl border text-left flex items-center justify-between transition-all kbc-option-btn ${btnClass}`}
            >
              <div className="flex items-center gap-3">
                <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs font-mono ${
                  isSelected ? 'bg-champGold text-navy-950' : 'bg-velvet-800 text-champGold'
                }`}>
                  {letter}
                </span>
                <span className="text-xs font-medium">{currentQ.options[letter]}</span>
              </div>

              {isSelected && !revealState && (
                <span className="text-[10px] text-champGold font-bold uppercase tracking-wider animate-pulse">
                  Locked
                </span>
              )}
              {revealState === 'CORRECT' && isCorrect && (
                <Check size={16} className="text-emeraldGlow-light" />
              )}
              {revealState === 'WRONG' && isSelected && (
                <X size={16} className="text-crimsonAlert" />
              )}
            </button>
          );
        })}
      </div>

      {/* Bottom Walk Away / Quit & Take Points Button */}
      <div className="flex items-center justify-between pt-1 border-t border-white/10">
        <button
          type="button"
          onClick={walkAway}
          disabled={isAnswerLocked || revealState}
          className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-navy-900 hover:bg-navy-800 border border-white/10 text-xs font-medium text-slate-400 hover:text-pearl transition disabled:opacity-40"
        >
          <LogOut size={14} />
          <span>Walk Away & Take Points</span>
        </button>

        <span className="text-[10px] text-slate-400 font-mono">
          Safe: {currentQIndex >= 9 ? '3,20,000' : currentQIndex >= 4 ? '10,000' : '0'} pts
        </span>
      </div>

      {/* 15-Level Ladder Drawer Modal Overlay */}
      {showLadder && (
        <div className="absolute inset-0 bg-navy-950/95 backdrop-blur-md z-50 p-4 flex flex-col justify-between rounded-2xl animate-fadeIn">
          <div>
            <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2">
              <h3 className="text-sm font-bold text-pearl font-cinzel flex items-center gap-1.5">
                <Award size={16} className="text-champGold" />
                15-Question Point Ladder
              </h3>
              <button
                onClick={() => setShowLadder(false)}
                className="text-xs text-slate-400 hover:text-pearl p-1"
              >
                ✕ Close
              </button>
            </div>

            {/* Ladder Rows */}
            <div className="space-y-1 overflow-y-auto max-h-[520px]">
              {[...LADDER_TIERS].reverse().map(tier => {
                const isCurrent = tier.level === currentQIndex + 1;
                const isPassed = tier.level < currentQIndex + 1;

                return (
                  <div
                    key={tier.level}
                    className={`flex items-center justify-between px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition ${
                      isCurrent
                        ? 'bg-champGold text-navy-950 shadow-md font-black'
                        : isPassed
                          ? 'bg-emeraldGlow/15 text-emeraldGlow-light'
                          : tier.isPadav
                            ? 'bg-velvet-800/80 text-champGold border border-champGold/30'
                            : 'bg-navy-900/60 text-slate-400'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-5">{tier.level}</span>
                      {tier.isPadav && <span className="text-[10px]">🛡️ PADAV</span>}
                      {tier.level === 15 && <span className="text-[10px]">👑 CRORE</span>}
                    </div>
                    <span>{tier.label} Pts</span>
                  </div>
                );
              })}
            </div>
          </div>

          <button
            onClick={() => setShowLadder(false)}
            className="w-full py-2.5 rounded-xl bg-velvet-800 text-pearl font-bold text-xs border border-white/10"
          >
            Back to Question
          </button>
        </div>
      )}
    </div>
  );
}
