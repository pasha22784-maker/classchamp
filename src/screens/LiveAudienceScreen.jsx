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

      {/* Main Content Area: Side-by-side on Landscape / Widescreen */}
      <div className="flex-1 w-full grid grid-cols-1 lg:grid-cols-12 gap-2 sm:gap-3 items-stretch overflow-hidden min-h-0">
        {/* Left: Context Card + Question Box + Cheers */}
        <div className="lg:col-span-6 flex flex-col justify-between h-full max-h-full overflow-hidden min-h-0 pr-0.5">
          {/* Match Context Card */}
          {match?.type === 'CLAN_4V4' ? (
            <div className="grid grid-cols-11 items-center gap-2 p-2 bg-gradient-to-r from-velvet-950 via-navy-900 to-velvet-950 rounded-2xl border border-white/10 mb-2 shadow">
              {/* Clan A */}
              <div className="col-span-5 flex items-center gap-1.5">
                <div className="w-8 h-8 rounded-xl bg-velvet-900 border border-champGold/40 flex items-center justify-center text-lg shadow">
                  {match.clanA?.badge || '🦅'}
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-bold text-pearl truncate font-cinzel">
                    {match.clanA?.name || 'Clan Alpha'}
                  </div>
                  <div className="text-[11px] text-champGold font-bold">
                    {match.clanA?.score?.toLocaleString() || 0} Pts
                  </div>
                </div>
              </div>

              <div className="col-span-1 text-center font-bold text-[10px] text-crimsonAlert font-cinzel">
                VS
              </div>

              {/* Clan B */}
              <div className="col-span-5 flex items-center justify-end gap-1.5 text-right">
                <div className="min-w-0">
                  <div className="text-[11px] font-bold text-pearl truncate font-cinzel">
                    {match.clanB?.name || 'Clan Bravo'}
                  </div>
                  <div className="text-[11px] text-champGold font-bold">
                    {match.clanB?.score?.toLocaleString() || 0} Pts
                  </div>
                </div>
                <div className="w-8 h-8 rounded-xl bg-navy-800 border border-blue-400/40 flex items-center justify-center text-lg shadow">
                  {match.clanB?.badge || '🐅'}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between p-2 bg-navy-950/80 rounded-2xl border border-white/10 mb-2 shadow">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-champGold/20 border border-champGold flex items-center justify-center text-base">
                  {match?.soloPlayer?.avatar || '👑'}
                </div>
                <div>
                  <div className="text-[11px] font-bold text-pearl font-cinzel">
                    {match?.soloPlayer?.name || match?.title}
                  </div>
                  <div className="text-[10px] text-slate-400">
                    Playing for {match?.currentPrize || '1 Crore'}
                  </div>
                </div>
              </div>
              <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-champGold/20 text-champGold font-bold border border-champGold/30">
                Level {currentQ.levelIndex || 8}
              </span>
            </div>
          )}

          {/* Live Question Display */}
          <div className="bg-navy-900/90 rounded-2xl p-3 border border-champGold/30 shadow-xl my-auto relative">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[9px] uppercase font-bold text-champGold tracking-wider bg-champGold/10 px-1.5 py-0.5 rounded border border-champGold/30">
                {currentQ.subject || 'General Knowledge'} • Question {currentQ.levelIndex || 8}
              </span>
              <span className="text-[9px] text-slate-400 uppercase font-semibold">
                Anti-Cheat 20s
              </span>
            </div>

            <h3 className="text-xs sm:text-sm font-bold text-pearl leading-snug font-cinzel mb-0.5">
              {currentQ.text}
            </h3>
            {currentQ.text_hi && (
              <p className="text-[11px] text-amber-200/90 font-medium leading-relaxed font-sans">
                {currentQ.text_hi}
              </p>
            )}
          </div>

          {/* Floating Cheers Bar */}
          <div className="flex items-center justify-between bg-navy-900/90 p-1.5 rounded-2xl border border-white/10 shrink-0">
            <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider pl-1">
              Cheer:
            </span>
            <div className="flex items-center gap-1.5">
              {['🔥', '👏', '🏆', '💡', '❤️'].map(emoji => (
                <button
                  key={emoji}
                  type="button"
                  onClick={() => sendCheer(emoji)}
                  className="w-7 h-7 rounded-xl bg-navy-950 hover:bg-navy-800 border border-white/10 flex items-center justify-center text-sm active:scale-125 transition"
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Play-Along Options & Live Audience Poll Telemetry */}
        <div className="lg:col-span-6 flex flex-col justify-between h-full max-h-full overflow-hidden min-h-0 pl-0.5">
          {/* Audience Play-Along Options (A, B, C, D) */}
          <div className="mb-2">
            <div className="flex items-center justify-between mb-1 px-1">
              <span className="text-[10px] font-bold text-pearl uppercase tracking-wider flex items-center gap-1">
                <Sparkles size={11} className="text-champGold" />
                Play-Along: Cast Your Vote
              </span>
              {audienceChoice && (
                <span className="text-[9px] font-bold text-emerald-400 flex items-center gap-0.5">
                  <CheckCircle2 size={11} />
                  Voted [{audienceChoice}]
                </span>
              )}
            </div>

            <div className="grid grid-cols-2 gap-1.5">
              {['A', 'B', 'C', 'D'].map(key => {
                const isSelected = audienceChoice === key;
                const text = currentQ.options?.[key] || '';
                const percent = pollPercentages[key] || 0;

                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => handleCastVote(key)}
                    className={`p-2 rounded-xl border text-left transition flex flex-col justify-between relative overflow-hidden ${
                      isSelected
                        ? 'bg-gradient-to-r from-champGold/30 to-amber-500/20 border-champGold shadow ring-1 ring-champGold'
                        : 'bg-navy-950/70 hover:bg-navy-800/80 border-white/10 hover:border-white/30 text-pearl'
                    }`}
                  >
                    <div
                      className="absolute inset-y-0 left-0 bg-blue-500/15 pointer-events-none transition-all duration-500"
                      style={{ width: `${percent}%` }}
                    />

                    <div className="flex items-center justify-between relative z-10 w-full mb-0.5">
                      <span className={`w-5 h-5 rounded-md flex items-center justify-center font-bold text-[11px] ${
                        isSelected ? 'bg-champGold text-navy-950' : 'bg-white/10 text-champGold'
                      }`}>
                        {key}
                      </span>
                      <span className="text-[10px] font-bold text-slate-300">
                        {percent}%
                      </span>
                    </div>

                    <span className="text-[11px] font-semibold relative z-10 leading-tight line-clamp-2">
                      {text}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Live Audience Poll Distribution Chart */}
          <div className="bg-navy-950/90 rounded-2xl p-2 border border-white/10 shadow shrink-0">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-bold text-champGold uppercase tracking-wider flex items-center gap-1">
                <BarChart3 size={11} />
                Live Telemetry ({pollPercentages.totalVotes} Votes)
              </span>
              <span className="text-[9px] text-slate-400">
                Supplied to Hot Seat
              </span>
            </div>

            <div className="grid grid-cols-4 gap-1.5 text-center">
              {['A', 'B', 'C', 'D'].map(k => (
                <div key={k} className="bg-navy-900 p-1.5 rounded-xl border border-white/5">
                  <div className="text-[9px] font-bold text-slate-400">Opt {k}</div>
                  <div className="text-xs font-bold text-pearl my-0.5">{pollPercentages[k] || 0}%</div>
                  <div className="w-full bg-navy-950 rounded-full h-1 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-champGold h-full rounded-full transition-all duration-500"
                      style={{ width: `${pollPercentages[k] || 0}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
