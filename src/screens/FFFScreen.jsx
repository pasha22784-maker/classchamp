/**
 * FFFScreen.jsx
 * Rapid Round (RR) 15-Second Interactive Ordering Engine.
 * Features:
 * - BrainLeague Royal Question Frame & 2x2 Options Grid
 * - Tap-to-order (1st, 2nd, 3rd, 4th) with glowing gold diamond badges
 * - Sahi Kram (Correct Order) reveal & transparent 10-contender leaderboard
 * - Detailed Accuracy (✓ Sahi / ✗ Galat) and Shortest Time verification
 * - 4-second trust-building inspection countdown before Hot Seat selection modal
 * - Seamless landscape (TV studio) and portrait responsiveness
 * - 1-Tap Landscape / Portrait mode toggle in HUD
 */

import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import { useGame } from '../context/GameContext';
import soundService from '../services/soundService';
import BLQuestionBox from '../components/common/BLQuestionBox';
import BLOptionButton from '../components/common/BLOptionButton';
import HotSeatWinnerModal from '../components/common/HotSeatWinnerModal';
import { getLocalizedQuestion } from '../services/questionLanguageHelper';
import {
  Timer,
  CheckCircle2,
  XCircle,
  RotateCcw,
  RotateCw,
  Award,
  ArrowRight,
  Crown,
  Eye,
  Check,
  X,
  RefreshCw
} from 'lucide-react';

export default function FFFScreen() {
  const { currentUser } = useAuth();
  const {
    activeRoom,
    fffQuestion,
    submitFFF,
    fffWinner,
    fffResults,
    isLandscapeMode,
    toggleLandscapeMode,
    navigateTo,
    setHasSeenHotSeatIntro,
    setSpectatorPlayer,
    setSpectatorLevel,
    languageMode,
    t
  } = useGame();

  const localizedFff = getLocalizedQuestion(fffQuestion, languageMode);
  const [selectedOrder, setSelectedOrder] = useState([]); // array of option keys ['B', 'A', 'D', 'C']
  const [secondsRemaining, setSecondsRemaining] = useState(15);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeTaken, setTimeTaken] = useState(0);

  // Determine whether current player is the single fastest winner
  const isMeWinner = Boolean(
    fffWinner && (
      (currentUser?.id && fffWinner.id === currentUser.id) ||
      (!activeRoom && fffWinner.isHuman)
    )
  );

  // Trust-building post-submit states
  const [showWinnerModal, setShowWinnerModal] = useState(false);
  const [reviewCountdown, setReviewCountdown] = useState(4); // 4 seconds review time

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
        handleAutoSubmit();
      }
    }, 100);

    return () => clearInterval(timerIntervalRef.current);
  }, []);

  // Post-submit inspection timer (allows player to verify leaderboard before modal pop-up)
  useEffect(() => {
    if (!isSubmitted || !fffWinner) return;

    const timer = setInterval(() => {
      setReviewCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          if (isMeWinner) {
            setShowWinnerModal(true);
          } else {
            setSpectatorPlayer(fffWinner);
            setSpectatorLevel(1);
            navigateTo('SPECTATOR');
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isSubmitted, fffWinner, isMeWinner]);

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

  // Correct order sequence array
  const correctOrderKeys = fffQuestion.correctAnswer ? fffQuestion.correctAnswer.split(',') : ['A', 'B', 'C', 'D'];
  const isHumanCorrect = selectedOrder.join(',') === fffQuestion.correctAnswer;

  return (
    <div className="flex-1 flex flex-col justify-between p-1.5 sm:p-4 select-none w-full h-full max-h-full overflow-hidden">
      {/* Top Header & Countdown */}
      <div className="shrink-0">
        <div className="flex items-center justify-between mb-1 sm:mb-2 bg-navy-900/80 backdrop-blur-md px-2 py-1 sm:p-2 rounded-xl sm:rounded-2xl border border-white/10 shadow-lg">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="text-base sm:text-xl">⚡</span>
            <div>
              <h2 className="text-xs sm:text-sm font-bold text-champGold uppercase tracking-wider font-cinzel">
                {t('fffTitle')}
              </h2>
              <span className="text-[10px] text-slate-400">{t('fffSubtitle')}</span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Countdown Clock */}
            {!isSubmitted ? (
              <div className={`flex items-center gap-1 sm:gap-1.5 px-2 py-1 sm:px-3 sm:py-1.5 rounded-xl border font-mono font-bold text-xs sm:text-sm ${
                secondsRemaining < 5
                  ? 'bg-crimsonAlert/20 border-crimsonAlert text-crimsonAlert animate-pulse'
                  : 'bg-navy-900 border-champGold/40 text-champGold'
              }`}>
                <Timer size={13} />
                <span>{secondsRemaining.toFixed(1)}s</span>
              </div>
            ) : (
              <div className="flex items-center gap-1 px-2 py-1 rounded-xl bg-champGold/15 border border-champGold/40 text-champGold text-xs font-mono font-bold">
                <CheckCircle2 size={13} />
                <span>{t('submittedNotice')} ({timeTaken}s)</span>
              </div>
            )}

            {/* Landscape Toggle */}
            <button
              type="button"
              onClick={toggleLandscapeMode}
              className="flex items-center gap-1 px-2 py-1 rounded-xl bg-navy-800 hover:bg-navy-700 border border-white/10 text-[11px] font-bold text-slate-300 hover:text-champGold transition shadow"
              title="Toggle landscape TV studio or portrait phone view"
            >
              <RotateCw size={12} />
              <span className="hidden sm:inline">{isLandscapeMode ? "TV" : "Phone"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content: Side-by-side in landscape, vertical in portrait */}
      {!isSubmitted ? (
        isLandscapeMode ? (
          /* ZERO-SCROLLING LANDSCAPE TV STUDIO (SIDE-BY-SIDE) */
          <div className="flex-1 w-full grid grid-cols-12 gap-3 items-center overflow-hidden min-h-0 py-0.5">
            {/* Left: Question Box */}
            <div className="col-span-6 flex flex-col justify-center h-full max-h-full overflow-hidden min-h-0">
              <BLQuestionBox
                questionText={localizedFff?.displayText || fffQuestion.text}
                subject={fffQuestion.subject || "Chronological / Numerical Order"}
                pointsFormatted="Hot Seat Qualifier"
                isCompact={true}
              />
            </div>

            {/* Right: 4 Options + Controls */}
            <div className="col-span-6 flex flex-col justify-center h-full max-h-full overflow-hidden min-h-0">
              <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                {['A', 'B', 'C', 'D'].map((letter) => {
                  const isSelected = selectedOrder.includes(letter);
                  const orderIndex = selectedOrder.indexOf(letter) + 1; // 1, 2, 3, 4

                  return (
                    <BLOptionButton
                      key={letter}
                      letter={letter}
                      text={localizedFff?.displayOptions?.[letter] || fffQuestion.options[letter]}
                      status={isSelected ? 'LOCKED' : 'IDLE'}
                      orderNumber={isSelected ? orderIndex : null}
                      isCompact={true}
                      onClick={() => handleOptionClick(letter)}
                    />
                  );
                })}
              </div>

              {/* Reset and Lock Controls */}
              <div className="flex items-center gap-2 pt-2 w-full">
                <button
                  type="button"
                  onClick={handleReset}
                  disabled={selectedOrder.length === 0}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-navy-900 text-slate-400 hover:text-pearl border border-white/10 text-xs font-semibold disabled:opacity-40 transition active:scale-95"
                >
                  <RotateCcw size={12} />
                  <span>{t('reset')}</span>
                </button>

                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={selectedOrder.length !== 4}
                  className="flex-1 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 via-champGold to-amber-500 text-navy-950 font-bold text-xs shadow-lg hover:brightness-110 active:scale-[0.98] transition uppercase tracking-wider font-rajdhani flex items-center justify-center gap-1.5 disabled:opacity-40"
                >
                  <CheckCircle2 size={13} />
                  <span>{t('lockMyOrder')} ({selectedOrder.length}/4)</span>
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* PORTRAIT LAYOUT */
          <div className="my-auto space-y-2">
            <BLQuestionBox
              questionText={localizedFff?.displayText || fffQuestion.text}
              subject={fffQuestion.subject || "Chronological / Numerical Order"}
              pointsFormatted="Hot Seat Qualifier"
              isCompact={false}
            />

            <div className="grid gap-1.5 sm:gap-3 grid-cols-1 sm:grid-cols-2">
              {['A', 'B', 'C', 'D'].map((letter) => {
                const isSelected = selectedOrder.includes(letter);
                const orderIndex = selectedOrder.indexOf(letter) + 1; // 1, 2, 3, 4

                return (
                  <BLOptionButton
                    key={letter}
                    letter={letter}
                    text={localizedFff?.displayOptions?.[letter] || fffQuestion.options[letter]}
                    status={isSelected ? 'LOCKED' : 'IDLE'}
                    orderNumber={isSelected ? orderIndex : null}
                    isCompact={false}
                    onClick={() => handleOptionClick(letter)}
                  />
                );
              })}
            </div>

            {/* Reset and Lock Controls */}
            <div className="flex items-center gap-2 pt-2 max-w-xl mx-auto">
              <button
                type="button"
                onClick={handleReset}
                disabled={selectedOrder.length === 0}
                className="flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2.5 rounded-xl bg-navy-900 text-slate-400 hover:text-pearl border border-white/10 text-xs font-semibold disabled:opacity-40 transition active:scale-95"
              >
                <RotateCcw size={13} />
                <span>{t('reset')}</span>
              </button>

              <button
                type="button"
                onClick={handleSubmit}
                disabled={selectedOrder.length !== 4}
                className="flex-1 py-1.5 sm:py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-champGold to-amber-500 text-navy-950 font-bold text-xs sm:text-sm shadow-lg hover:brightness-110 active:scale-[0.98] transition uppercase tracking-wider font-rajdhani flex items-center justify-center gap-1.5 disabled:opacity-40"
              >
                <CheckCircle2 size={15} />
                <span>{t('lockMyOrder')} ({selectedOrder.length}/4)</span>
              </button>
            </div>
          </div>
        )
      ) : (
        /* STAGE B: TRANSPARENT RESULTS BOARD (Sahi Kram + Shortest Time Rankings) */
        <div className="my-auto space-y-3 max-w-3xl mx-auto w-full animate-fadeIn py-1">
          
          {/* 1. Sahi Kram (Correct Chronological Sequence) Reveal */}
          <div className="p-3 sm:p-3.5 rounded-2xl bg-velvet-950/95 border-2 border-champGold/40 shadow-xl text-center">
            <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-white/10 px-1">
              <span className="text-[11px] sm:text-xs font-bold text-champGold uppercase font-cinzel flex items-center gap-1.5 tracking-wider">
                <span>🎯</span>
                <span>{t('correctOrderTitle')}</span>
              </span>
              <span className="text-[10px] font-mono font-bold text-slate-300">
                {t('orderSeqHelper')}
              </span>
            </div>

            {/* Sequence Pills with Arrows */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
              {correctOrderKeys.map((letter, idx) => (
                <React.Fragment key={letter}>
                  <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-navy-900 border border-champGold/40 text-xs shadow">
                    <span className="w-5 h-5 rounded-full bg-champGold text-navy-950 font-black text-[11px] flex items-center justify-center font-mono">
                      {idx + 1}
                    </span>
                    <span className="font-bold text-champGold font-mono">{letter}:</span>
                    <span className="font-semibold text-pearl text-[11px]">{localizedFff?.displayOptions?.[letter] || fffQuestion.options[letter]}</span>
                  </div>
                  {idx < correctOrderKeys.length - 1 && (
                    <span className="text-champGold font-bold text-xs sm:text-sm">➔</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* User Submission Feedback */}
            <div className="mt-2 pt-2 border-t border-white/5 flex items-center justify-between px-2 text-xs">
              <span className="text-slate-400 text-[11px]">
                {t('yourOrder')} <strong className="text-pearl font-mono">{selectedOrder.join(' ➔ ') || 'None'}</strong>
              </span>
              <span className={`font-bold flex items-center gap-1 text-[11px] font-mono ${
                isHumanCorrect ? 'text-emeraldGlow-light' : 'text-crimsonAlert'
              }`}>
                {isHumanCorrect ? <Check size={14} /> : <X size={14} />}
                <span>{isHumanCorrect ? `${t('correctSeqNotice')} (${timeTaken}s)` : t('wrongSeqNotice')}</span>
              </span>
            </div>
          </div>

          {/* 2. 10 Contenders Ranked List by Accuracy & Shortest Time */}
          <div className="glass-panel rounded-2xl p-3 shadow-2xl">
            {activeRoom?.code && reviewCountdown > 0 && (
              <div className="mb-2 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 flex items-center justify-center gap-1.5 text-[11px] text-blue-300 font-semibold animate-pulse">
                <RefreshCw size={11} className="animate-spin text-blue-400" />
                <span>3G/4G नेटवर्क के खिलाड़ियों के जवाब का मिलान हो रहा है: {reviewCountdown}s...</span>
              </div>
            )}
            <div className="flex items-center justify-between mb-2 px-1 text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider font-mono border-b border-white/10 pb-1.5">
              <span>{t('rankContender')}</span>
              <div className="flex items-center gap-6">
                <span>{t('accuracy')}</span>
                <span>{t('shortestTime')}</span>
              </div>
            </div>

            {/* Scrollable / Stacked 10-Player Rows */}
            <div className="space-y-1.5 max-h-56 overflow-y-auto pr-1">
              {fffResults.map((player, idx) => {
                const isWinner = idx === 0;

                return (
                  <div
                    key={player.id || idx}
                    className={`flex items-center justify-between p-2 rounded-xl text-xs transition-all ${
                      isWinner
                        ? 'bg-gradient-to-r from-amber-500/25 via-champGold/30 to-amber-500/25 border-2 border-champGold text-pearl shadow-lg font-bold'
                        : player.isHuman
                          ? 'bg-navy-900 border border-champGold/40 text-pearl font-semibold'
                          : 'bg-navy-950/60 border border-white/5 text-slate-300'
                    }`}
                  >
                    {/* Left: Rank + Avatar + Name */}
                    <div className="flex items-center gap-2 min-w-0">
                      <span className={`w-5 font-mono font-bold text-xs flex items-center justify-center ${
                        isWinner ? 'text-champGold' : 'text-slate-500'
                      }`}>
                        {isWinner ? '👑' : `#${idx + 1}`}
                      </span>
                      <span className="text-base">{player.avatar}</span>
                      <span className="truncate max-w-[140px] sm:max-w-[200px]">
                        {player.name} {player.isHuman && <span className="text-champGold font-bold">(YOU)</span>}
                      </span>
                    </div>

                    {/* Right: Accuracy & Time */}
                    <div className="flex items-center gap-5 sm:gap-6 font-mono shrink-0">
                      <span className={`flex items-center gap-1 font-bold text-[11px] ${
                        player.isCorrect ? 'text-emeraldGlow-light' : 'text-crimsonAlert'
                      }`}>
                        {player.isCorrect ? <Check size={12} strokeWidth={3} /> : <X size={12} strokeWidth={3} />}
                        <span>{player.isCorrect ? t('sahiBadge') : t('galatBadge')}</span>
                      </span>

                      <span className={`font-bold text-xs w-14 text-right ${
                        isWinner ? 'text-champGold' : 'text-slate-400'
                      }`}>
                        {player.timeFormatted}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 3. Verification & Trust-Building Transition Banner */}
          {isMeWinner ? (
            <div className="p-3 rounded-2xl bg-gradient-to-r from-amber-500/20 via-champGold/25 to-amber-500/20 border-2 border-champGold shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-2.5 text-center sm:text-left">
              <div>
                <span className="text-xs sm:text-sm font-black text-champGold uppercase font-cinzel flex items-center justify-center sm:justify-start gap-1.5">
                  <Crown size={15} className="text-amber-400" />
                  <span>{t('verifiedFastestHeadline', { time: `${timeTaken}s` })}</span>
                </span>
                <p className="text-[11px] text-slate-300 mt-0.5">
                  {t('verifiedFastestSubtext', { seconds: reviewCountdown })}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowWinnerModal(true)}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 via-champGold to-amber-500 text-navy-950 font-black text-xs shadow-lg hover:brightness-110 active:scale-95 transition font-rajdhani uppercase tracking-wider flex items-center gap-1.5 shrink-0"
              >
                <span>{t('viewSelectionNow')}</span>
                <ArrowRight size={14} />
              </button>
            </div>
          ) : (
            <div className="p-3 rounded-2xl bg-navy-900/90 border border-blue-400/40 shadow-xl text-center flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
              <div className="text-left">
                <span className="font-bold text-blue-300 uppercase font-cinzel flex items-center gap-1.5">
                  <Eye size={14} className="text-blue-400" />
                  <span>{t('botWonNotice', { name: fffWinner?.name, time: fffWinner?.timeFormatted })}</span>
                </span>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  {t('movingToSpectatorNotice', { seconds: reviewCountdown })}
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  setSpectatorPlayer(fffWinner);
                  setSpectatorLevel(1);
                  navigateTo('SPECTATOR');
                }}
                className="px-3 py-1.5 rounded-xl bg-blue-600/30 hover:bg-blue-600/50 border border-blue-400/40 text-blue-200 font-bold text-xs transition"
              >
                <span>{t('enterSpectatorNow')}</span>
                <ArrowRight size={13} />
              </button>
            </div>
          )}
        </div>
      )}

      {/* Correct answer footer note */}
      <div className="pt-2 text-center">
        <span className="text-[10px] text-slate-500">
          Fastest accurate contender moves to the Hot Seat. Others become the Live Studio Audience.
        </span>
      </div>

      {/* ========================================================= */}
      {/* GRAND HOT SEAT FINALIST NOTIFICATION & COUNTDOWN MODAL   */}
      {/* Appears AFTER 4-second trust verification of results      */}
      {/* ========================================================= */}
      {showWinnerModal && isMeWinner && (
        <HotSeatWinnerModal
          player={fffWinner}
          timeTaken={timeTaken}
          onComplete={() => {
            setHasSeenHotSeatIntro(true);
            navigateTo('HOTSEAT');
          }}
        />
      )}
    </div>
  );
}
