/**
 * HotSeatScreen.jsx
 * Authentic TV Broadcast KBC Hot-Seat Engine.
 * Features:
 * - Real KBC Hexagonal Question Frame & 2x2 Hexagonal Options Grid
 * - Dynamic Landscape Mode (Broadcast TV Studio Layout with 15-tier Persistent Tree Sidebar)
 * - Flexible Portrait Mode (Mobile vertical stack with slide-up ladder drawer)
 * - 1-Tap Landscape / Portrait mode toggle in HUD
 * - 15-Level Point Ladder with Safe Padavs (Q5: 10,000, Q10: 3,20,000, Q15: 1 Crore)
 * - 4 Interactive Lifelines: 50:50, Audience Poll, Ask AI Guru, Time Freeze
 * - Tension tick-tick and heartbeat audio loop
 * - "Lock Kiya Jaye" amber pulse suspense & emerald victory aura
 * - Walk Away / Take Points functionality
 */

import React, { useState, useEffect } from 'react';
import { useGame } from '../context/GameContext';
import { useAuth } from '../context/AuthContext';
import { LADDER_TIERS } from '../services/questionEngine';
import soundService from '../services/soundService';
import KbcQuestionBox from '../components/common/KbcQuestionBox';
import KbcOptionButton from '../components/common/KbcOptionButton';
import CountdownClockOverlay from '../components/common/CountdownClockOverlay';
import { getLocalizedQuestion } from '../services/questionLanguageHelper';
import {
  Timer,
  Pause,
  Award,
  BarChart2,
  Brain,
  Snowflake,
  LogOut,
  ChevronUp,
  ChevronDown,
  RotateCw,
  Shield,
  User,
  Volume2,
  VolumeX
} from 'lucide-react';

export default function HotSeatScreen() {
  const [isMuted, setIsMuted] = useState(() => soundService.isMuted());
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
    useTimeFreeze,
    isLandscapeMode,
    toggleLandscapeMode,
    hasSeenHotSeatIntro,
    t,
    languageMode
  } = useGame();

  const { currentUser } = useAuth();
  const [showLadderDrawer, setShowLadderDrawer] = useState(false);
  const [showHotSeatIntro, setShowHotSeatIntro] = useState(!hasSeenHotSeatIntro && currentQIndex === 0);

  const currentQ = hotSeatQuestions[currentQIndex];
  const localizedQ = getLocalizedQuestion(currentQ, languageMode);
  const tierMeta = currentQ?.tierMeta || LADDER_TIERS[currentQIndex] || LADDER_TIERS[0];

  // Tension Audio Loop: tick-tick and heartbeat
  useEffect(() => {
    if (isAnswerLocked || revealState || isTimerPaused || showHotSeatIntro) return;

    const timer = setInterval(() => {
      setTimerRemaining(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleTimeOut();
          return 0;
        }

        if (currentQIndex >= 9) {
          soundService.playHeartbeat();
        } else {
          soundService.playTick();
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentQIndex, isAnswerLocked, revealState, isTimerPaused, showHotSeatIntro]);

  if (!currentQ) return null;

  // Determine option button status
  const getOptionStatus = (letter) => {
    if (eliminatedOptions.includes(letter)) return 'ELIMINATED';
    if (revealState === 'CORRECT' && currentQ.correctAnswer === letter) return 'CORRECT';
    if (revealState === 'WRONG' && lockedOption === letter) return 'WRONG';
    if (revealState === 'WRONG' && currentQ.correctAnswer === letter) return 'REVEALED_CORRECT';
    if (lockedOption === letter) return 'LOCKED';
    return 'IDLE';
  };

  // Safe Padav guaranteed points
  const safeGuaranteed = currentQIndex >= 9 ? '3,20,000' : currentQIndex >= 4 ? '10,000' : '0';

  return (
    <div className="flex-1 flex flex-col justify-between p-1.5 sm:p-4 relative w-full h-full max-h-full overflow-hidden select-none">
      {/* ========================================================= */}
      {/* TOP IN-GAME HUD: Lifelines, Timer, Points & Orientation   */}
      {/* ========================================================= */}
      <div className="w-full flex items-center justify-between gap-1 sm:gap-2 mb-1 sm:mb-2 bg-navy-900/80 backdrop-blur-md px-2 py-1 sm:p-2 rounded-xl sm:rounded-2xl border border-white/10 shadow-lg shrink-0">
        {/* Left: Ladder drawer toggle in portrait OR Level Badge */}
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => { soundService.playClick(); setShowLadderDrawer(prev => !prev); }}
            className={`flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-xl bg-gradient-to-r from-velvet-900 to-navy-900 border border-champGold/40 text-[11px] sm:text-xs font-bold font-rajdhani text-champGold shadow transition active:scale-95 ${
              isLandscapeMode ? 'hidden lg:flex' : 'flex'
            }`}
            title="View 15-Question Point Ladder"
          >
            <Award size={13} className="text-champGold" />
            <span>Q{currentQIndex + 1}/15: {tierMeta.label} Pts</span>
            {showLadderDrawer ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
          </button>

          {/* Landscape mode header label */}
          {isLandscapeMode && (
            <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-xl bg-champGold/10 border border-champGold/30">
              <span className="text-xs font-bold text-champGold font-rajdhani uppercase tracking-wider">
                {t('hotSeatArena')}
              </span>
              <span className="text-[11px] font-mono text-slate-300">
                {t('playingForPts', { points: tierMeta.label })}
              </span>
            </div>
          )}
        </div>

        {/* Center: 4 Interactive Lifelines */}
        <div className="flex items-center gap-1 sm:gap-2">
          {/* 1. 50:50 */}
          <button
            type="button"
            onClick={useFiftyFifty}
            disabled={lifelinesUsed.fiftyFifty || isAnswerLocked}
            className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center text-[10px] sm:text-xs font-bold font-mono transition border ${
              lifelinesUsed.fiftyFifty
                ? 'bg-navy-900 text-slate-600 border-white/5 line-through opacity-40 cursor-not-allowed'
                : 'bg-velvet-800 hover:bg-velvet-700 text-champGold border-champGold/40 shadow hover:scale-105 active:scale-95'
            }`}
            title="50:50 (Eliminates 2 incorrect options)"
          >
            50:50
          </button>

          {/* 2. Audience Poll */}
          <button
            type="button"
            onClick={useAudiencePoll}
            disabled={lifelinesUsed.audiencePoll || isAnswerLocked}
            className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center transition border ${
              lifelinesUsed.audiencePoll
                ? 'bg-navy-900 text-slate-600 border-white/5 opacity-40 cursor-not-allowed'
                : 'bg-velvet-800 hover:bg-velvet-700 text-blue-400 border-blue-400/40 shadow hover:scale-105 active:scale-95'
            }`}
            title="Audience Poll (Live spectator & calibrated poll)"
          >
            <BarChart2 size={14} />
          </button>

          {/* 3. Ask AI Guru */}
          <button
            type="button"
            onClick={useGuruHint}
            disabled={lifelinesUsed.guruHint || isAnswerLocked}
            className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center transition border ${
              lifelinesUsed.guruHint
                ? 'bg-navy-900 text-slate-600 border-white/5 opacity-40 cursor-not-allowed'
                : 'bg-velvet-800 hover:bg-velvet-700 text-emeraldGlow-light border-emeraldGlow/40 shadow hover:scale-105 active:scale-95'
            }`}
            title="Ask AI Guru (Smart hint)"
          >
            <Brain size={14} />
          </button>

          {/* 4. Time Freeze */}
          <button
            type="button"
            onClick={useTimeFreeze}
            disabled={lifelinesUsed.timeFreeze || isAnswerLocked}
            className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center transition border ${
              lifelinesUsed.timeFreeze
                ? 'bg-navy-900 text-slate-600 border-white/5 opacity-40 cursor-not-allowed'
                : 'bg-velvet-800 hover:bg-velvet-700 text-cyan-400 border-cyan-400/40 shadow hover:scale-105 active:scale-95'
            }`}
            title="Time Freeze (Stops countdown clock)"
          >
            <Snowflake size={14} />
          </button>
        </div>

        {/* Right: Clock Timer & In-Game Sound & Landscape Toggle */}
        <div className="flex items-center gap-1 sm:gap-2">
          {/* Audio Mute/Unmute */}
          <button
            type="button"
            onClick={() => {
              const muted = soundService.toggleMute();
              setIsMuted(muted);
              if (!muted) soundService.playClick();
            }}
            className="p-1 sm:p-1.5 rounded-lg bg-navy-800 hover:bg-navy-700 text-slate-300 hover:text-champGold transition border border-white/5"
            title={isMuted ? "Unmute Audio" : "Mute Audio"}
          >
            {isMuted ? <VolumeX size={13} /> : <Volume2 size={13} className="text-emeraldGlow" />}
          </button>

          {/* Clock Timer */}
          <div className={`flex items-center gap-1 px-2 py-0.5 sm:py-1 rounded-xl border font-mono font-bold text-xs ${
            isTimerPaused
              ? 'bg-cyan-500/20 border-cyan-500 text-cyan-300'
              : timerRemaining <= 10
                ? 'bg-crimsonAlert/20 border-crimsonAlert text-crimsonAlert animate-pulse'
                : 'bg-navy-900 border-champGold/40 text-champGold'
          }`}>
            {isTimerPaused ? <Pause size={11} /> : <Timer size={11} />}
            <span>{timerRemaining}s</span>
          </div>

          {/* 1-Tap Landscape / Portrait Mode Switcher */}
          <button
            type="button"
            onClick={toggleLandscapeMode}
            className="flex items-center gap-1 px-2 py-0.5 sm:py-1 rounded-xl bg-navy-800 hover:bg-navy-700 border border-white/10 hover:border-champGold/40 text-[11px] font-bold text-slate-300 hover:text-champGold transition shadow active:scale-95"
            title="Switch between Landscape (TV Studio) and Portrait (Phone) layout"
          >
            <RotateCw size={11} />
            <span className="hidden sm:inline">{isLandscapeMode ? "TV" : "Phone"}</span>
          </button>
        </div>
      </div>

      {/* ========================================================= */}
      {/* MAIN STAGE: Dual-Column in Landscape, Single-Column in Portrait */}
      {/* ========================================================= */}
      <div className={`flex-1 w-full gap-3 sm:gap-4 items-stretch ${
        isLandscapeMode ? 'grid grid-cols-1 lg:grid-cols-12' : 'flex flex-col justify-between'
      }`}>
        {/* LEFT / CENTER BROADCAST ARENA (Column 1-9 in Landscape, Full Width in Portrait) */}
        <div className={`flex flex-col justify-between ${
          isLandscapeMode ? 'lg:col-span-8 xl:col-span-9' : 'w-full flex-1'
        }`}>
          <div>
            {/* Safe Padav Banner Notification */}
            {tierMeta.isPadav && (
              <div className="mb-2 px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500/20 via-champGold/20 to-amber-500/20 border border-champGold/50 text-champGold text-xs font-bold flex items-center justify-between shadow-md">
                <span className="flex items-center gap-1.5 font-rajdhani uppercase tracking-wider">
                  <Shield size={14} className="text-champGold" />
                  {t('safeMilestoneBanner')}
                </span>
                <span className="font-mono">{tierMeta.label} {t('guaranteedPts')}</span>
              </div>
            )}

            {/* Active AI Guru Hint Banner */}
            {activeGuruHint && (
              <div className="mb-2.5 p-3 rounded-xl bg-emeraldGlow/15 border border-emeraldGlow/40 text-pearl text-xs flex items-start gap-2 shadow-lg animate-fadeIn">
                <Brain size={16} className="text-emeraldGlow-light shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-emeraldGlow-light block text-[10px] uppercase font-mono tracking-wider">
                    {t('guruHintTitle')}
                  </span>
                  <span className="text-slate-200">{activeGuruHint}</span>
                </div>
              </div>
            )}

            {/* Audience Poll Bar Chart Inline Result */}
            {audiencePollData && (
              <div className="mb-2.5 p-3 rounded-xl bg-velvet-950 border border-blue-500/40 shadow-xl animate-fadeIn">
                <div className="text-[10px] font-bold text-blue-300 uppercase tracking-wider mb-2 flex items-center justify-between font-mono">
                  <span>📊 {t('pollResultsTitle')}</span>
                  <span>{t('totalVotes')}</span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {['A', 'B', 'C', 'D'].map(k => (
                    <div key={k} className="text-center">
                      <div className="h-14 bg-navy-900 rounded-lg flex items-end p-1 border border-white/5">
                        <div
                          className="w-full bg-blue-500 rounded transition-all duration-700"
                          style={{ height: `${audiencePollData[k] || 0}%` }}
                        ></div>
                      </div>
                      <span className="block text-[10px] font-mono font-bold text-blue-300 mt-1">
                        {audiencePollData[k] || 0}%
                      </span>
                      <span className="block text-xs font-bold text-pearl font-rajdhani">{k}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Authentic KBC Metallic Question Frame */}
            <KbcQuestionBox
              questionText={localizedQ?.displayText || currentQ.text}
              levelNumber={currentQIndex + 1}
              totalLevels={15}
              pointsFormatted={tierMeta.label}
              subject={currentQ.subject}
              isPadav={tierMeta.isPadav}
              questionLabel={t('questionLabel')}
              padavLabel={t('safeMilestoneBanner')}
              isCompact={isLandscapeMode}
            />
          </div>

          {/* Authentic KBC 2x2 Hexagonal Options Grid */}
          <div className={isLandscapeMode ? 'my-1 sm:my-2' : 'my-2 sm:my-3'}>
            <div className={`grid gap-1.5 sm:gap-2.5 ${
              isLandscapeMode ? 'grid-cols-2' : 'grid-cols-1 sm:grid-cols-2'
            }`}>
              {['A', 'B', 'C', 'D'].map((letter) => {
                const status = getOptionStatus(letter);
                return (
                  <KbcOptionButton
                    key={letter}
                    letter={letter}
                    text={localizedQ?.displayOptions?.[letter] || currentQ.options[letter]}
                    status={status}
                    disabled={isAnswerLocked || eliminatedOptions.includes(letter)}
                    isCompact={isLandscapeMode}
                    onClick={() => lockAnswer(letter)}
                  />
                );
              })}
            </div>
          </div>

          {/* Bottom Controls: Walk Away / Quit & Safe Balance */}
          <div className={`flex items-center justify-between ${isLandscapeMode ? 'pt-1 sm:pt-2' : 'pt-2'} border-t border-white/10 mt-auto shrink-0`}>
            <button
              type="button"
              onClick={walkAway}
              disabled={isAnswerLocked || revealState}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-navy-900 hover:bg-navy-800 border border-white/10 text-xs font-semibold text-slate-400 hover:text-pearl transition disabled:opacity-40 active:scale-95"
            >
              <LogOut size={13} />
              <span>{t('walkAwayBtn')}</span>
            </button>

            <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
              <span>{t('guaranteedSafe')}</span>
              <span className="text-champGold font-bold">{safeGuaranteed} pts</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR: Persistent 15-Step KBC Ladder (Widescreen Landscape Mode) */}
        {isLandscapeMode && (
          <div className="hidden lg:flex lg:col-span-4 xl:col-span-3 flex-col justify-between bg-navy-900/90 rounded-2xl border border-champGold/30 p-3 shadow-2xl overflow-hidden backdrop-blur-md">
            <div>
              {/* Contestant Profile Header */}
              <div className="flex items-center gap-2 mb-2 pb-2 border-b border-white/10">
                <div className="w-8 h-8 rounded-full bg-champGold/20 border border-champGold/40 flex items-center justify-center text-sm shadow">
                  {currentUser?.avatar || '👤'}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-bold text-pearl truncate">
                    {currentUser?.name || 'Contender'}
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono">
                    Hot Seat Contestant
                  </div>
                </div>
              </div>

              {/* Ladder Title */}
              <div className="text-[11px] font-bold text-champGold font-cinzel tracking-wider uppercase mb-1.5 flex items-center justify-between">
                <span>{t('ladderTitle')}</span>
                <span className="text-[10px] font-mono text-slate-400">Safe Padavs</span>
              </div>

              {/* Persistent 15 Rows */}
              <div className="space-y-1 overflow-y-auto max-h-[460px] pr-0.5">
                {[...LADDER_TIERS].reverse().map(tier => {
                  const isCurrent = tier.level === currentQIndex + 1;
                  const isPassed = tier.level < currentQIndex + 1;

                  return (
                    <div
                      key={tier.level}
                      className={`flex items-center justify-between px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
                        isCurrent
                          ? 'bg-gradient-to-r from-amber-500 via-champGold to-amber-500 text-navy-950 shadow-lg font-black scale-[1.02]'
                          : isPassed
                            ? 'bg-emeraldGlow/15 text-emeraldGlow-light border border-emeraldGlow/20'
                            : tier.isPadav
                              ? 'bg-velvet-900 text-champGold border border-champGold/40'
                              : 'bg-navy-950/60 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-4 text-[11px]">{tier.level}</span>
                        {tier.isPadav && (
                          <span className="text-[9px] px-1 py-0.2 rounded bg-champGold/20 text-champGold font-sans">
                            {tier.level === 15 ? '👑 CRORE' : '🛡️ PADAV'}
                          </span>
                        )}
                      </div>
                      <span className="text-[11px]">{tier.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Ladder Footnote */}
            <div className="pt-2 border-t border-white/10 text-[10px] text-slate-400 text-center font-mono">
              {t('padavLegend')}
            </div>
          </div>
        )}
      </div>

      {/* ========================================================= */}
      {/* 15-LEVEL LADDER DRAWER MODAL (For Portrait Mode)          */}
      {/* ========================================================= */}
      {showLadderDrawer && (
        <div className="absolute inset-0 bg-navy-950/95 backdrop-blur-md z-50 p-4 flex flex-col justify-between rounded-2xl animate-fadeIn">
          <div>
            <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2">
              <h3 className="text-sm font-bold text-pearl font-cinzel flex items-center gap-1.5">
                <Award size={16} className="text-champGold" />
                {t('ladderTitle')}
              </h3>
              <button
                onClick={() => setShowLadderDrawer(false)}
                className="text-xs text-slate-400 hover:text-pearl p-1 font-bold"
              >
                ✕ {t('close')}
              </button>
            </div>

            {/* Ladder Rows */}
            <div className="space-y-1 overflow-y-auto max-h-[500px]">
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
            onClick={() => setShowLadderDrawer(false)}
            className="w-full py-2.5 rounded-xl bg-velvet-800 text-pearl font-bold text-xs border border-white/10 hover:bg-velvet-700 transition"
          >
            {t('backToQuestion')}
          </button>
        </div>
      )}

      {/* ========================================================= */}
      {/* QUESTION 1 HOT SEAT READY 5-SECOND COUNTDOWN OVERLAY      */}
      {/* ========================================================= */}
      {showHotSeatIntro && (
        <CountdownClockOverlay
          initialCount={5}
          badge={t('hotSeatArena')}
          badgeIcon="👑"
          title={t('firstQArrivesIn')}
          subtitle={t('playingForPts', { points: tierMeta.pointsFormatted || tierMeta.label })}
          extraNote={t('hotSeatHint')}
          onComplete={() => setShowHotSeatIntro(false)}
        />
      )}
    </div>
  );
}
