/**
 * FFFScreen.jsx
 * Fastest Finger First (FFF) 15-Second Interactive Ordering Engine.
 * Supports tap-to-order (1st, 2nd, 3rd, 4th), millisecond precision timing,
 * and live ranked results transition.
 */

import React, { useState, useEffect, useRef } from 'react';
import { useGame } from '../context/GameContext';
import soundService from '../services/soundService';
import { Timer, CheckCircle2, RotateCcw, Award, ArrowRight } from 'lucide-react';

export default function FFFScreen() {
  const { fffQuestion, submitFFF, fffWinner, fffResults } = useGame();

  const [selectedOrder, setSelectedOrder] = useState([]); // array of option keys ['B', 'A', 'D', 'C']
  const [secondsRemaining, setSecondsRemaining] = useState(15);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeTaken, setTimeTaken] = useState(0);

  const startTimeRef = useRef(Date.now());
  const timerIntervalRef = useRef(null);

  // 15-Second Countdown and Millisecond timer
  useEffect(() => {
    startTimeRef.current = Date.now();

    timerIntervalRef.current = setInterval(() => {
      const elapsed = (Date.now() - startTimeRef.current) / 1000;
      const left = Math.max(0, 15 - elapsed);
      setSecondsRemaining(left);

      // Tick sound every full second
      if (Math.floor(left) !== Math.floor(left + 0.1)) {
        soundService.playTick();
      }

      if (left <= 0) {
        clearInterval(timerIntervalRef.current);
        // Auto-submit current selection or partial
        handleAutoSubmit();
      }
    }, 100);

    return () => clearInterval(timerIntervalRef.current);
  }, []);

  const handleOptionClick = (key) => {
    if (isSubmitted) return;
    soundService.playClick();

    if (selectedOrder.includes(key)) {
      // Remove from selection
      setSelectedOrder(prev => prev.filter(k => k !== key));
    } else {
      if (selectedOrder.length < 4) {
        setSelectedOrder(prev => [...prev, key]);
      }
    }
  };

  const handleReset = () => {
    if (isSubmitted) return;
    soundService.playClick();
    setSelectedOrder([]);
  };

  const handleSubmit = () => {
    if (isSubmitted || selectedOrder.length !== 4) return;
    clearInterval(timerIntervalRef.current);
    soundService.playLock();
    setIsSubmitted(true);

    const elapsed = +((Date.now() - startTimeRef.current) / 1000).toFixed(2);
    setTimeTaken(elapsed);
    submitFFF(selectedOrder.join(','), elapsed);
  };

  const handleAutoSubmit = () => {
    if (isSubmitted) return;
    setIsSubmitted(true);
    soundService.playWrong();

    // Fill missing options arbitrarily to complete
    const all = ['A', 'B', 'C', 'D'];
    const filled = [...selectedOrder];
    all.forEach(k => {
      if (!filled.includes(k)) filled.push(k);
    });

    setTimeTaken(15.00);
    submitFFF(filled.join(','), 15.00);
  };

  if (!fffQuestion) return null;

  return (
    <div className="flex-1 flex flex-col justify-between p-4">
      {/* Top Header & Countdown */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1.5">
            <span className="text-xl">⚡</span>
            <div>
              <h2 className="text-xs font-bold text-champGold uppercase tracking-wider font-cinzel">
                Fastest Finger First
              </h2>
              <span className="text-[10px] text-slate-400">Order 4 items from 1st to 4th</span>
            </div>
          </div>

          {/* Countdown Clock */}
          <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border font-mono font-bold text-sm ${
            secondsRemaining < 5
              ? 'bg-crimsonAlert/20 border-crimsonAlert text-crimsonAlert animate-pulse'
              : 'bg-navy-900 border-champGold/40 text-champGold'
          }`}>
            <Timer size={15} />
            <span>{secondsRemaining.toFixed(1)}s</span>
          </div>
        </div>

        {/* Question Card */}
        <div className="p-4 rounded-2xl glass-panel border border-champGold/30 shadow-xl mb-4">
          <span className="text-[10px] font-bold text-champGold uppercase tracking-wider block mb-1">
            {fffQuestion.subject} • Arrangement Challenge
          </span>
          <h3 className="text-sm font-semibold text-pearl leading-relaxed">
            {fffQuestion.text}
          </h3>
        </div>
      </div>

      {/* 4 Interactive Option Buttons */}
      {!isSubmitted ? (
        <div className="space-y-2.5 my-auto">
          {['A', 'B', 'C', 'D'].map((letter) => {
            const isSelected = selectedOrder.includes(letter);
            const orderIndex = selectedOrder.indexOf(letter) + 1; // 1, 2, 3, 4

            return (
              <button
                key={letter}
                type="button"
                onClick={() => handleOptionClick(letter)}
                className={`w-full p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                  isSelected
                    ? 'bg-champGold/20 border-champGold text-pearl shadow-md'
                    : 'bg-navy-900/90 hover:bg-navy-800 border-white/10 text-slate-200'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs font-mono ${
                    isSelected ? 'bg-champGold text-navy-950' : 'bg-velvet-800 text-champGold'
                  }`}>
                    {letter}
                  </span>
                  <span className="text-xs font-medium">{fffQuestion.options[letter]}</span>
                </div>

                {isSelected ? (
                  <span className="w-6 h-6 rounded-full bg-champGold text-navy-950 font-black text-xs flex items-center justify-center shadow">
                    #{orderIndex}
                  </span>
                ) : (
                  <span className="text-[11px] text-slate-500 font-mono">Tap to select</span>
                )}
              </button>
            );
          })}

          {/* Reset and Lock Controls */}
          <div className="flex items-center gap-2 pt-2">
            <button
              type="button"
              onClick={handleReset}
              disabled={selectedOrder.length === 0}
              className="flex items-center gap-1.5 px-3 py-2.5 rounded-xl bg-navy-900 text-slate-400 hover:text-pearl border border-white/10 text-xs font-semibold disabled:opacity-40"
            >
              <RotateCcw size={14} />
              <span>Reset</span>
            </button>

            <button
              type="button"
              onClick={handleSubmit}
              disabled={selectedOrder.length !== 4}
              className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-champGold to-champGold-dark text-navy-950 font-bold text-xs shadow-lg hover:brightness-110 active:scale-[0.98] transition uppercase tracking-wider font-rajdhani flex items-center justify-center gap-1.5 disabled:opacity-40"
            >
              <CheckCircle2 size={15} />
              <span>Lock My Order ({selectedOrder.length}/4)</span>
            </button>
          </div>
        </div>
      ) : (
        /* Results Table Screen */
        <div className="my-auto space-y-3">
          <div className="text-center p-3 rounded-2xl bg-velvet-900/90 border border-champGold/40 shadow-xl">
            <span className="text-2xl block mb-1">
              {fffWinner?.isHuman ? '🎉' : '📺'}
            </span>
            <h4 className="text-sm font-bold text-pearl font-cinzel">
              {fffWinner?.isHuman
                ? 'VICTORY! You won Fastest Finger First!'
                : `${fffWinner?.name} won the Hot Seat!`}
            </h4>
            <p className="text-[11px] text-champGold mt-0.5">
              {fffWinner?.isHuman
                ? 'Moving directly to the Main 15-Question Hot Seat...'
                : 'Entering Live Studio Audience & Audience Poll Mode...'}
            </p>
          </div>

          {/* Ranked Contenders List */}
          <div className="glass-panel rounded-xl p-3 max-h-56 overflow-y-auto space-y-1.5">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex justify-between">
              <span>Rank & Contender</span>
              <span>Time / Accuracy</span>
            </div>
            {fffResults.map((player, idx) => (
              <div
                key={player.id || idx}
                className={`flex items-center justify-between p-2 rounded-lg text-xs ${
                  player.isHuman
                    ? 'bg-champGold/20 border border-champGold/40 text-pearl font-bold'
                    : 'bg-navy-950/60 text-slate-300'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className={`w-5 font-mono font-bold ${idx === 0 ? 'text-champGold' : 'text-slate-500'}`}>
                    #{idx + 1}
                  </span>
                  <span>{player.avatar}</span>
                  <span>{player.name} {player.isHuman && '(YOU)'}</span>
                </div>

                <div className="flex items-center gap-2 font-mono">
                  <span className={player.isCorrect ? 'text-emeraldGlow-light' : 'text-crimsonAlert'}>
                    {player.isCorrect ? '✓ Sahi' : '✗ Galat'}
                  </span>
                  <span className="text-slate-400 text-[11px]">{player.timeFormatted}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Correct answer footer note */}
      <div className="pt-2 text-center">
        <span className="text-[10px] text-slate-500">
          Fastest accurate contender moves to the Hot Seat. Others become the Live Studio Audience.
        </span>
      </div>
    </div>
  );
}
