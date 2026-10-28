/**
 * LiveAudienceScreen.jsx
 * Interactive Audience Spectator & Real-Time Play-Along Studio.
 * 
 * Features:
 * 1. Watch Live 4v4 Clan Battles or Solo Matches in real time.
 * 2. Interactive Play-Along: Audience can tap A, B, C, D to play along and test their own knowledge.
 * 3. Real Audience Poll: Audience votes directly feed into the match's "Audience Poll" lifeline!
 * 4. Floating Cheer Reactions (🔥, 👏, 🏆, 💡, ❤️).
 * 5. Clan voice chat indicators showing who is currently talking.
 */

import React, { useState, useEffect } from 'react';
import { useGame } from '../context/GameContext';
import liveGameHubService from '../services/liveGameHubService';
import soundService from '../services/soundService';
import {
  ArrowLeft,
  Radio,
  Eye,
  BarChart3,
  Flame,
  Award,
  Clock,
  Sparkles,
  Volume2,
  Users,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export default function LiveAudienceScreen() {
  const { selectedLiveMatch, navigateTo } = useGame();
  const [match, setMatch] = useState(() => selectedLiveMatch || liveGameHubService.getLiveMatches()[0]);
  const [audienceChoice, setAudienceChoice] = useState(null);
  const [pollPercentages, setPollPercentages] = useState({ A: 25, B: 25, C: 25, D: 25, totalVotes: 0 });
  const [floatingCheers, setFloatingCheers] = useState([]);
  const [timer, setTimer] = useState(match?.antiCheatTimeRemaining || 20);

  // Subscribe to live updates
  useEffect(() => {
    if (!match?.id) return;
    const unsub = liveGameHubService.subscribe((list) => {
      const updated = list.find(m => m.id === match.id);
      if (updated) {
        setMatch(updated);
        setPollPercentages(liveGameHubService.getAudienceVotePercentages(match.id));
      }
    });

    setPollPercentages(liveGameHubService.getAudienceVotePercentages(match.id));
    return unsub;
  }, [match?.id]);

  // Fast anti-cheat countdown simulation
  useEffect(() => {
    const t = setInterval(() => {
      setTimer(prev => (prev > 0 ? prev - 1 : 20));
    }, 1000);
    return () => clearInterval(t);
  }, []);

  const handleCastVote = (optionKey) => {
    if (audienceChoice) return; // already voted for this question
    soundService.playClick();
    setAudienceChoice(optionKey);

    if (match?.id) {
      const newPercentages = liveGameHubService.castAudienceVote(match.id, optionKey);
      if (newPercentages) setPollPercentages(newPercentages);
    }
  };

  const sendCheer = (emoji) => {
    soundService.playClick();
    const id = Date.now() + Math.random();
    setFloatingCheers(prev => [...prev, { id, emoji, left: Math.floor(20 + Math.random() * 60) }]);
    setTimeout(() => {
      setFloatingCheers(prev => prev.filter(c => c.id !== id));
    }, 2000);
  };

  const currentQ = match?.currentQuestion || {
    levelIndex: 8,
    bracket: '10000-340000',
    subject: 'General Knowledge',
    text: 'Which planet in our solar system is known as the "Red Planet" due to iron oxide on its surface?',
    text_hi: 'हमारे सौर मंडल के किस ग्रह को उसकी सतह पर आयरन ऑक्साइड के कारण "लाल ग्रह" कहा जाता है?',
    options: {
      A: 'Venus (शुक्र)',
      B: 'Mars (मंगल)',
      C: 'Jupiter (बृहस्पति)',
      D: 'Saturn (शनि)'
    },
    correctAnswer: 'B'
  };

  return (
    <div className="flex-1 flex flex-col p-3 max-w-2xl mx-auto w-full font-rajdhani relative overflow-hidden select-none animate-fadeIn">
      {/* Floating Cheers Layer */}
      <div className="absolute inset-0 pointer-events-none z-50 overflow-hidden">
        {floatingCheers.map(c => (
          <div
            key={c.id}
            className="absolute bottom-16 text-3xl animate-floatUp transition-all"
            style={{ left: `${c.left}%` }}
          >
            {c.emoji}
          </div>
        ))}
      </div>

      {/* Top Navigation & Status Bar */}
      <div className="flex items-center justify-between mb-3 bg-navy-950/80 p-2.5 rounded-2xl border border-white/10 shadow">
        <button
          type="button"
          onClick={() => { soundService.playClick(); navigateTo('LIVE_HUB'); }}
          className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-navy-900 border border-white/10 text-slate-300 hover:text-pearl font-bold text-xs uppercase"
        >
          <ArrowLeft size={14} />
          <span>Exit Arena</span>
        </button>

        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-crimsonAlert text-pearl font-bold text-[10px] uppercase shadow-md animate-pulse">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
            LIVE AUDIENCE
          </span>
          <div className="flex items-center gap-1 text-[11px] text-champGold font-bold bg-navy-900 px-2 py-0.5 rounded-full border border-champGold/30">
            <Eye size={12} />
            <span>{(match?.viewersCount || 1) + 1} Watching</span>
          </div>
        </div>

        <div className="flex items-center gap-1 text-[11px] text-amber-400 font-bold bg-amber-500/10 px-2.5 py-1 rounded-xl border border-amber-500/20">
          <Clock size={13} className="animate-spin" />
          <span>{timer}s</span>
        </div>
      </div>

      {/* Match Context Card */}
      {match?.type === 'CLAN_4V4' ? (
        <div className="grid grid-cols-11 items-center gap-2 p-3 bg-gradient-to-r from-velvet-950 via-navy-900 to-velvet-950 rounded-2xl border border-white/10 mb-3 shadow-lg">
          {/* Clan A */}
          <div className="col-span-5 flex items-center gap-2">
            <div className="w-11 h-11 rounded-xl bg-velvet-900 border border-champGold/40 flex items-center justify-center text-2xl shadow">
              {match.clanA?.badge || '🦅'}
            </div>
            <div className="min-w-0">
              <div className="text-xs font-bold text-pearl truncate font-cinzel">
                {match.clanA?.name || 'Clan Alpha'}
              </div>
              <div className="text-xs text-champGold font-bold">
                {match.clanA?.score?.toLocaleString() || 0} Pts
              </div>
              <div className="flex items-center gap-1 mt-0.5">
                <Volume2 size={11} className="text-emerald-400 animate-pulse" />
                <span className="text-[10px] text-emerald-400 font-bold">Team Voice Active</span>
              </div>
            </div>
          </div>

          <div className="col-span-1 text-center font-bold text-xs text-crimsonAlert font-cinzel">
            VS
          </div>

          {/* Clan B */}
          <div className="col-span-5 flex items-center justify-end gap-2 text-right">
            <div className="min-w-0">
              <div className="text-xs font-bold text-pearl truncate font-cinzel">
                {match.clanB?.name || 'Clan Bravo'}
              </div>
              <div className="text-xs text-champGold font-bold">
                {match.clanB?.score?.toLocaleString() || 0} Pts
              </div>
              <div className="flex items-center justify-end gap-1 mt-0.5">
                <span className="text-[10px] text-slate-400">Tactics In-Sync</span>
                <Volume2 size={11} className="text-blue-400" />
              </div>
            </div>
            <div className="w-11 h-11 rounded-xl bg-navy-800 border border-blue-400/40 flex items-center justify-center text-2xl shadow">
              {match.clanB?.badge || '🐅'}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between p-3 bg-navy-950/80 rounded-2xl border border-white/10 mb-3 shadow">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-full bg-champGold/20 border border-champGold flex items-center justify-center text-xl">
              {match?.soloPlayer?.avatar || '👑'}
            </div>
            <div>
              <div className="text-xs font-bold text-pearl font-cinzel">
                {match?.soloPlayer?.name || match?.title}
              </div>
              <div className="text-[11px] text-slate-400">
                Playing for {match?.currentPrize || '1 Crore'} • Solo Hot-Seat
              </div>
            </div>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-champGold/20 text-champGold font-bold border border-champGold/30">
            Level {currentQ.levelIndex || 8}
          </span>
        </div>
      )}

      {/* Live Question Display */}
      <div className="bg-navy-900/90 rounded-2xl p-4 border border-champGold/30 shadow-xl mb-3 relative">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] uppercase font-bold text-champGold tracking-wider bg-champGold/10 px-2 py-0.5 rounded border border-champGold/30">
            {currentQ.subject || 'General Knowledge'} • Question {currentQ.levelIndex || 8}
          </span>
          <span className="text-[10px] text-slate-400 uppercase font-semibold">
            Anti-Cheat 20s Window
          </span>
        </div>

        <h3 className="text-sm md:text-base font-bold text-pearl leading-snug font-cinzel mb-1">
          {currentQ.text}
        </h3>
        {currentQ.text_hi && (
          <p className="text-xs text-amber-200/90 font-medium leading-relaxed font-sans">
            {currentQ.text_hi}
          </p>
        )}
      </div>

      {/* Audience Play-Along Options (A, B, C, D) */}
      <div className="mb-3">
        <div className="flex items-center justify-between mb-1.5 px-1">
          <span className="text-[11px] font-bold text-pearl uppercase tracking-wider flex items-center gap-1">
            <Sparkles size={12} className="text-champGold" />
            Play-Along: Cast Your Answer (ऑडियंस पोल वोट)
          </span>
          {audienceChoice && (
            <span className="text-[10px] font-bold text-emerald-400 flex items-center gap-1">
              <CheckCircle2 size={12} />
              Voted Option {audienceChoice}
            </span>
          )}
        </div>

        <div className="grid grid-cols-2 gap-2">
          {['A', 'B', 'C', 'D'].map(key => {
            const isSelected = audienceChoice === key;
            const text = currentQ.options?.[key] || '';
            const percent = pollPercentages[key] || 0;

            return (
              <button
                key={key}
                type="button"
                onClick={() => handleCastVote(key)}
                className={`p-2.5 rounded-xl border text-left transition flex flex-col justify-between relative overflow-hidden ${
                  isSelected
                    ? 'bg-gradient-to-r from-champGold/30 to-amber-500/20 border-champGold shadow-lg ring-1 ring-champGold'
                    : 'bg-navy-950/70 hover:bg-navy-800/80 border-white/10 hover:border-white/30 text-pearl'
                }`}
              >
                {/* Background vote progress bar */}
                <div
                  className="absolute inset-y-0 left-0 bg-blue-500/15 pointer-events-none transition-all duration-500"
                  style={{ width: `${percent}%` }}
                />

                <div className="flex items-center justify-between relative z-10 w-full mb-1">
                  <span className={`w-6 h-6 rounded-md flex items-center justify-center font-bold text-xs ${
                    isSelected ? 'bg-champGold text-navy-950' : 'bg-white/10 text-champGold'
                  }`}>
                    {key}
                  </span>
                  <span className="text-[11px] font-bold text-slate-300">
                    {percent}%
                  </span>
                </div>

                <span className="text-xs font-semibold relative z-10 leading-tight">
                  {text}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Live Audience Poll Distribution Chart */}
      <div className="bg-navy-950/90 rounded-2xl p-3 border border-white/10 mb-3 shadow">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-bold text-champGold uppercase tracking-wider flex items-center gap-1.5">
            <BarChart3 size={13} />
            Live "Audience Poll" Telemetry ({pollPercentages.totalVotes} Total Votes)
          </span>
          <span className="text-[10px] text-slate-400">
            Real spectator data supplied to Hot Seat
          </span>
        </div>

        <div className="grid grid-cols-4 gap-2 text-center">
          {['A', 'B', 'C', 'D'].map(k => (
            <div key={k} className="bg-navy-900 p-2 rounded-xl border border-white/5">
              <div className="text-[10px] font-bold text-slate-400">Option {k}</div>
              <div className="text-sm font-bold text-pearl my-0.5">{pollPercentages[k] || 0}%</div>
              <div className="w-full bg-navy-950 rounded-full h-1.5 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-blue-500 to-champGold h-full rounded-full transition-all duration-500"
                  style={{ width: `${pollPercentages[k] || 0}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Cheers Bar */}
      <div className="flex items-center justify-between bg-navy-900/90 p-2 rounded-2xl border border-white/10">
        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider pl-1">
          Cheer Players:
        </span>
        <div className="flex items-center gap-2">
          {['🔥', '👏', '🏆', '💡', '❤️'].map(emoji => (
            <button
              key={emoji}
              type="button"
              onClick={() => sendCheer(emoji)}
              className="w-9 h-9 rounded-xl bg-navy-950 hover:bg-navy-800 border border-white/10 flex items-center justify-center text-lg active:scale-125 transition"
            >
              {emoji}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
