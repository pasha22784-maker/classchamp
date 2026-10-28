/**
 * LiveGamesHubScreen.jsx
 * Public Live Games Radar & Spectator Entrance (No Room Code Required).
 * 
 * Features:
 * 1. Discover all live ongoing 4v4 Clan Battles and Solo Hot-Seat matches in real-time.
 * 2. Instant Spectate: Tap any live match to enter as an audience member.
 * 3. Live Viewer Counts, Division Badges, Current Ladder Level and Real-Time Stakes.
 */

import React, { useState, useEffect } from 'react';
import { useGame } from '../context/GameContext';
import liveGameHubService from '../services/liveGameHubService';
import soundService from '../services/soundService';
import {
  Radio,
  Users,
  Eye,
  Swords,
  Flame,
  ArrowLeft,
  ChevronRight,
  Shield,
  Sparkles,
  Trophy
} from 'lucide-react';

export default function LiveGamesHubScreen() {
  const { navigateTo, setSelectedLiveMatch } = useGame();
  const [matches, setMatches] = useState(() => liveGameHubService.getLiveMatches());
  const [filter, setFilter] = useState('ALL'); // 'ALL' | 'CLAN' | 'SOLO'

  useEffect(() => {
    const unsub = liveGameHubService.subscribe((list) => {
      setMatches(list);
    });
    return unsub;
  }, []);

  const filteredMatches = matches.filter(m => {
    if (filter === 'CLAN') return m.type === 'CLAN_4V4';
    if (filter === 'SOLO') return m.type === 'SOLO';
    return true;
  });

  const handleJoinSpectate = (match) => {
    soundService.playClick();
    if (setSelectedLiveMatch) {
      setSelectedLiveMatch(match);
    }
    navigateTo('LIVE_AUDIENCE');
  };

  return (
    <div className="flex-1 flex flex-col p-4 max-w-2xl mx-auto w-full animate-fadeIn font-rajdhani">
      {/* Top Header */}
      <div className="flex items-center justify-between mb-4">
        <button
          type="button"
          onClick={() => { soundService.playClick(); navigateTo('HOME'); }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-navy-900 border border-white/10 text-slate-300 hover:text-pearl font-bold text-xs uppercase"
        >
          <ArrowLeft size={16} />
          <span>Home</span>
        </button>

        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-crimsonAlert animate-ping" />
          <h2 className="text-sm font-bold text-pearl uppercase font-cinzel tracking-wider flex items-center gap-1.5">
            <Radio size={16} className="text-crimsonAlert animate-pulse" />
            <span>Live Games Radar</span>
          </h2>
        </div>

        <div className="px-2.5 py-1 rounded-full bg-crimsonAlert/20 border border-crimsonAlert/40 text-crimsonAlert text-[11px] font-bold uppercase tracking-wider flex items-center gap-1">
          <Eye size={12} />
          <span>{matches.reduce((acc, m) => acc + (m.viewersCount || 0), 0)} Viewers</span>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="rounded-2xl p-4 bg-gradient-to-r from-crimsonAlert/20 via-navy-900 to-velvet-950 border border-crimsonAlert/40 shadow-xl mb-4 relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2 py-0.5 rounded bg-crimsonAlert text-pearl font-bold text-[10px] uppercase tracking-wider">
              PUBLIC SPECTATOR ARENA
            </span>
            <span className="text-[11px] text-champGold font-semibold">No Code Needed • 100% Free</span>
          </div>
          <h1 className="text-lg font-bold text-pearl font-cinzel">
            लाइव मुकाबले देखें और ऑडियंस पोल में वोट दें!
          </h1>
          <p className="text-xs text-slate-300 mt-1 max-w-lg leading-relaxed">
            देखें भारत के शीर्ष क्लैन और छात्र कैसे 4v4 और हॉट-सीट पर खेल रहे हैं। आप भी साथ-साथ प्ले-अलॉन्ग करें और जब खिलाड़ी "जनता पोल" लाइफलाइन लें तो अपना वोट दर्ज करें!
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 mb-4 bg-navy-950/80 p-1 rounded-xl border border-white/10">
        <button
          type="button"
          onClick={() => { soundService.playClick(); setFilter('ALL'); }}
          className={`flex-1 py-1.5 rounded-lg text-xs font-bold uppercase transition flex items-center justify-center gap-1.5 ${
            filter === 'ALL'
              ? 'bg-gradient-to-r from-champGold to-champGold-dark text-navy-950 shadow'
              : 'text-slate-400 hover:text-pearl'
          }`}
        >
          <Sparkles size={13} />
          <span>All Live ({matches.length})</span>
        </button>

        <button
          type="button"
          onClick={() => { soundService.playClick(); setFilter('CLAN'); }}
          className={`flex-1 py-1.5 rounded-lg text-xs font-bold uppercase transition flex items-center justify-center gap-1.5 ${
            filter === 'CLAN'
              ? 'bg-gradient-to-r from-champGold to-champGold-dark text-navy-950 shadow'
              : 'text-slate-400 hover:text-pearl'
          }`}
        >
          <Swords size={13} />
          <span>4v4 Clan Wars</span>
        </button>

        <button
          type="button"
          onClick={() => { soundService.playClick(); setFilter('SOLO'); }}
          className={`flex-1 py-1.5 rounded-lg text-xs font-bold uppercase transition flex items-center justify-center gap-1.5 ${
            filter === 'SOLO'
              ? 'bg-gradient-to-r from-champGold to-champGold-dark text-navy-950 shadow'
              : 'text-slate-400 hover:text-pearl'
          }`}
        >
          <Trophy size={13} />
          <span>Solo Hot-Seat</span>
        </button>
      </div>

      {/* Match Cards List */}
      <div className="space-y-3 flex-1 overflow-y-auto pr-1">
        {filteredMatches.length === 0 ? (
          <div className="text-center py-12 bg-navy-900/60 rounded-2xl border border-white/5 p-6">
            <Radio size={36} className="mx-auto text-slate-500 mb-2 opacity-50" />
            <h4 className="text-sm font-bold text-pearl">No Live Matches Found</h4>
            <p className="text-xs text-slate-400 mt-1">
              Start your own 4v4 Clan Battle or Hot Seat game to be featured live!
            </p>
          </div>
        ) : (
          filteredMatches.map(match => (
            <div
              key={match.id}
              className="bg-navy-900/80 hover:bg-navy-800/90 rounded-2xl p-4 border border-white/10 hover:border-champGold/40 transition shadow-lg relative overflow-hidden group cursor-pointer"
              onClick={() => handleJoinSpectate(match)}
            >
              {/* Header inside card */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-crimsonAlert text-pearl font-bold text-[10px] uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                    LIVE
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-blue-500/20 text-blue-300 font-bold text-[10px] uppercase border border-blue-500/30">
                    {match.type === 'CLAN_4V4' ? '⚔️ 4v4 Clan Battle' : '👑 Solo Hot-Seat'}
                  </span>
                  <span className="text-[11px] text-slate-400 font-semibold">
                    {match.division} Division
                  </span>
                </div>

                <div className="flex items-center gap-1 text-[11px] text-champGold font-bold bg-navy-950 px-2 py-0.5 rounded-full border border-champGold/30">
                  <Eye size={12} />
                  <span>{match.viewersCount || 1} watching</span>
                </div>
              </div>

              {/* Match Content */}
              {match.type === 'CLAN_4V4' ? (
                <div className="grid grid-cols-11 items-center gap-2 my-2 bg-navy-950/70 p-3 rounded-xl border border-white/5">
                  {/* Clan A */}
                  <div className="col-span-5 flex items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-velvet-900 border border-champGold/40 flex items-center justify-center text-xl shadow">
                      {match.clanA?.badge || '🦅'}
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-pearl truncate font-cinzel">
                        {match.clanA?.name || 'Clan Alpha'}
                      </div>
                      <div className="text-[11px] text-champGold font-bold">
                        {match.clanA?.score?.toLocaleString() || 0} Pts
                      </div>
                      <div className="text-[9px] text-slate-400">
                        {match.clanA?.members?.length || 4} Members
                      </div>
                    </div>
                  </div>

                  {/* VS Emblem */}
                  <div className="col-span-1 text-center font-bold text-xs text-crimsonAlert font-cinzel">
                    VS
                  </div>

                  {/* Clan B */}
                  <div className="col-span-5 flex items-center justify-end gap-2 text-right">
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-pearl truncate font-cinzel">
                        {match.clanB?.name || 'Clan Bravo'}
                      </div>
                      <div className="text-[11px] text-champGold font-bold">
                        {match.clanB?.score?.toLocaleString() || 0} Pts
                      </div>
                      <div className="text-[9px] text-slate-400">
                        {match.clanB?.members?.length || 4} Members
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-navy-800 border border-blue-400/40 flex items-center justify-center text-xl shadow">
                      {match.clanB?.badge || '🐅'}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-between bg-navy-950/70 p-3 rounded-xl border border-white/5 my-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-champGold/20 border border-champGold flex items-center justify-center text-xl">
                      {match.soloPlayer?.avatar || '👑'}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-pearl font-cinzel">
                        {match.soloPlayer?.name || match.title}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {match.soloPlayer?.city || 'India'} • {match.soloPlayer?.trophies || 1500} 🏆
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-[10px] text-slate-400 uppercase font-bold">Playing For</div>
                    <div className="text-xs font-bold text-champGold font-rajdhani">
                      {match.currentPrize || '1 Crore'}
                    </div>
                  </div>
                </div>
              )}

              {/* Live Status Bar & CTA */}
              <div className="flex items-center justify-between mt-3 pt-2 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-slate-300">
                    Question <strong className="text-champGold">{match.currentLevel || 1}</strong> of 15
                  </span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30">
                    ⏱️ 20s Fast-Timer
                  </span>
                </div>

                <button
                  type="button"
                  className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-crimsonAlert to-velvet-800 text-pearl font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-md group-hover:scale-105 transition"
                >
                  <Eye size={13} />
                  <span>Watch & Play</span>
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
