/**
 * FFFLobbyScreen.jsx
 * 10-Player Pool Matchmaking Lobby with 5-Second Timer and Smart Bot Auto-Fill.
 * Features realistic division-tailored bots and single-player safeguard guarantee.
 */

import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useGame } from '../context/GameContext';
import soundService from '../services/soundService';
import storageService from '../services/storageService';
import botService from '../services/botService';
import CountdownClockOverlay from '../components/common/CountdownClockOverlay';
import { Users, Clock, ShieldCheck, Sparkles, Loader2 } from 'lucide-react';

export default function FFFLobbyScreen() {
  const { currentUser } = useAuth();
  const {
    activeDivision,
    startFFF,
    navigateTo,
    languageMode,
    setLanguageMode,
    LANGUAGES,
    t
  } = useGame();

  const botSettings = storageService.getBotSettings();
  const [secondsLeft, setSecondsLeft] = useState(botSettings.matchmakingWaitSeconds || 5);
  const [showCountdownClock, setShowCountdownClock] = useState(false);
  const [readyPool, setReadyPool] = useState(null);
  const [pool, setPool] = useState(() => [
    {
      id: currentUser?.id || 'human',
      name: currentUser?.name || 'You',
      city: currentUser?.city || 'India',
      avatar: currentUser?.avatar || '👑',
      isHuman: true,
      ready: true
    }
  ]);

  // Generate 9 fresh, randomized division bots for this specific match
  const generatedBotsRef = React.useRef(null);
  if (!generatedBotsRef.current) {
    generatedBotsRef.current = botService.generateBots(9, activeDivision, [currentUser?.name]);
  }

  // Matchmaking simulation: gradually add realistic division bots until 10 players total
  useEffect(() => {
    soundService.playTick();
    const candidateBots = generatedBotsRef.current;

    // Timer tick down
    const interval = setInterval(() => {
      setSecondsLeft(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        soundService.playTick();
        return prev - 1;
      });
    }, 1000);

    // Bot injection timeouts
    const timeouts = [];
    const neededBots = candidateBots.length;
    const stepInterval = (botSettings.matchmakingWaitSeconds * 1000) / neededBots;

    candidateBots.forEach((bot, index) => {
      const t = setTimeout(() => {
        setPool(prev => {
          if (prev.some(p => p.id === bot.id || p.name === bot.name)) return prev;
          return [...prev, bot];
        });
      }, (index + 1) * (stepInterval * 0.75));
      timeouts.push(t);
    });

    return () => {
      clearInterval(interval);
      timeouts.forEach(t => clearTimeout(t));
    };
  }, [activeDivision, botSettings]);

  // Once seconds reach 0, show dramatic KBC Countdown Clock before FFF round
  useEffect(() => {
    if (secondsLeft === 0 && !showCountdownClock) {
      soundService.playLock();
      const finalPool = [...pool];
      const candidateBots = generatedBotsRef.current;

      // Guarantee exactly 10 players with fresh bots
      let botIdx = 0;
      while (finalPool.length < 10 && botIdx < candidateBots.length) {
        const b = candidateBots[botIdx];
        if (!finalPool.some(p => p.id === b.id || p.name === b.name)) {
          finalPool.push(b);
        }
        botIdx++;
      }
      setPool(finalPool);
      setReadyPool(finalPool);
      setShowCountdownClock(true);
    }
  }, [secondsLeft, pool, showCountdownClock]);

  return (
    <div className="flex-1 flex flex-col justify-between p-5">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1.5">
            <Users size={16} className="text-champGold" />
            <h2 className="text-sm font-bold text-pearl uppercase tracking-wider font-cinzel">
              10-Player Pool Matchmaking
            </h2>
          </div>
          <button
            onClick={() => navigateTo('HOME')}
            className="text-[11px] text-slate-400 hover:text-crimsonAlert transition"
          >
            Cancel
          </button>
        </div>

        {/* Division & Status Badge */}
        <div className="flex items-center justify-between p-3 rounded-2xl bg-velvet-900/80 border border-champGold/30 mb-4 shadow-lg">
          <div>
            <span className="text-[10px] text-champGold font-bold uppercase tracking-wider block">
              Weight-Class
            </span>
            <span className="text-xs font-bold text-pearl">
              {activeDivision} League Arena
            </span>
          </div>

          <div className="flex items-center gap-2 bg-navy-950 px-3 py-1.5 rounded-xl border border-white/10">
            <Clock size={14} className="text-champGold animate-spin" />
            <div className="text-right">
              <span className="text-[9px] text-slate-400 block leading-tight">STARTING IN</span>
              <span className="text-sm font-mono font-bold text-champGold">
                00:0{secondsLeft}s
              </span>
            </div>
          </div>
        </div>

        {/* Safeguard indicator */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emeraldGlow/10 border border-emeraldGlow/30 text-emeraldGlow-light text-[11px] mb-3">
          <ShieldCheck size={14} />
          <span>Fair Matchmaking: 10 contenders selected for Fastest Finger First</span>
        </div>

        {/* Language Selection Bar (Select before first question) */}
        <div className="p-2.5 rounded-2xl bg-gradient-to-r from-navy-900 via-velvet-950 to-navy-900 border border-champGold/40 mb-3 shadow-lg">
          <div className="flex items-center justify-between mb-1.5 px-1">
            <span className="text-[11px] font-bold text-champGold uppercase font-cinzel flex items-center gap-1">
              <span>🌐</span>
              <span>{t('selectLangPrompt')}</span>
            </span>
            <span className="text-[10px] text-slate-400 font-mono font-bold">
              {languageMode.toUpperCase()}
            </span>
          </div>

          <div className="grid grid-cols-3 gap-1.5">
            {LANGUAGES.map(lang => (
              <button
                key={lang.id}
                type="button"
                onClick={() => setLanguageMode(lang.id)}
                className={`py-1.5 px-2 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                  languageMode === lang.id
                    ? 'bg-gradient-to-r from-amber-500 via-champGold to-amber-500 text-navy-950 shadow-md scale-[1.02]'
                    : 'bg-navy-950/70 hover:bg-navy-800 text-slate-300 border border-white/10'
                }`}
              >
                <span>{lang.icon}</span>
                <span className="truncate">{lang.label}</span>
              </button>
            ))}
          </div>

          <div className="text-[10px] text-slate-400 text-center mt-1.5 font-medium">
            {t('langChangedNotice')}
          </div>
        </div>
      </div>

      {/* 10-Player Grid */}
      <div className="my-auto">
        <div className="grid grid-cols-2 gap-2.5">
          {Array.from({ length: 10 }).map((_, index) => {
            const player = pool[index];
            return (
              <div
                key={index}
                className={`p-2.5 rounded-xl border transition-all duration-300 flex items-center gap-2.5 ${
                  player
                    ? player.isHuman
                      ? 'bg-champGold/15 border-champGold shadow-md'
                      : 'bg-navy-900/90 border-white/10'
                    : 'bg-navy-950/40 border-dashed border-white/5 opacity-40'
                }`}
              >
                {player ? (
                  <>
                    <div className="relative">
                      <div className="w-9 h-9 rounded-full bg-velvet-800 flex items-center justify-center text-base border border-white/10">
                        {player.avatar}
                      </div>
                      <span className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-emeraldGlow border border-navy-950"></span>
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-xs font-bold text-pearl truncate flex items-center gap-1">
                        <span>{player.name}</span>
                        {player.isHuman && <span className="text-[9px] text-champGold font-black">(YOU)</span>}
                      </div>
                      <div className="text-[10px] text-slate-400 truncate">
                        {player.city}
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex items-center gap-2 text-slate-500 py-1">
                    <Loader2 size={16} className="animate-spin text-slate-600" />
                    <span className="text-[11px] font-medium">Finding...</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom info */}
      <div className="text-center pt-4">
        <p className="text-[11px] text-slate-400">
          Rank #1 in the FFF round moves to the <strong className="text-champGold">Hot Seat</strong>!
        </p>
        <p className="text-[10px] text-slate-500 mt-0.5">
          Remaining 9 players will participate in the Live Audience Poll & earn XP.
        </p>
      </div>

      {/* Dramatic Countdown Clock Overlay before FFF starts */}
      {showCountdownClock && (
        <CountdownClockOverlay
          initialCount={5}
          badge={t('fffTitle').toUpperCase()}
          badgeIcon="⚡"
          title={t('gameBeginsIn')}
          subtitle={t('getReady')}
          extraNote={t('fffSubtitle')}
          onComplete={() => startFFF(readyPool || pool)}
        />
      )}
    </div>
  );
}
