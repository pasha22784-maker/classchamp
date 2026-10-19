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
import { Users, Clock, ShieldCheck, Sparkles, Loader2 } from 'lucide-react';

export default function FFFLobbyScreen() {
  const { currentUser } = useAuth();
  const { activeDivision, startFFF, navigateTo } = useGame();

  const botSettings = storageService.getBotSettings();
  const [secondsLeft, setSecondsLeft] = useState(botSettings.matchmakingWaitSeconds || 5);
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

  // Once seconds reach 0, proceed to FFF round
  useEffect(() => {
    if (secondsLeft === 0) {
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
      setTimeout(() => {
        startFFF(finalPool);
      }, 800);
    }
  }, [secondsLeft, pool, activeDivision]);

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
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emeraldGlow/10 border border-emeraldGlow/30 text-emeraldGlow-light text-[11px] mb-4">
          <ShieldCheck size={14} />
          <span>Fair Matchmaking: 10 contenders selected for Fastest Finger First</span>
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
    </div>
  );
}
