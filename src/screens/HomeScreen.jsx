/**
 * HomeScreen.jsx
 * Player Home Arena Dashboard.
 * Includes:
 * 1. Live Scheduled Championship Banner with Ticking Countdown & Sponsor tag.
 * 2. Weight-Class Division Selector (with downward bullying lock & upward challenge).
 * 3. Hot-Seat "Play Arena" Match Entry button (1 Energy Heart).
 * 4. Hall of Fame Champions Showcase.
 * 5. Multi-Tab Leaderboards: City, State, All-India, and Study Clans.
 */

import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useGame } from '../context/GameContext';
import PlayerHeader from '../components/common/PlayerHeader';
import storageService from '../services/storageService';
import soundService from '../services/soundService';
import {
  Trophy,
  Flame,
  Clock,
  Users,
  Shield,
  ChevronRight,
  Sparkles,
  Zap,
  Lock,
  ArrowUpRight,
  Star
} from 'lucide-react';

export default function HomeScreen() {
  const { currentUser, deductEnergy } = useAuth();
  const { activeDivision, setActiveDivision, startMatch, navigateTo } = useGame();

  const [championships, setChampionships] = useState(() => storageService.getChampionships());
  const [timeLeft, setTimeLeft] = useState({ days: 2, hours: 14, minutes: 22, seconds: 45 });
  const [leaderboardTab, setLeaderboardTab] = useState('city'); // 'city' | 'state' | 'national' | 'clans'

  // Live countdown timer for Championship
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleStartGame = () => {
    soundService.playClick();
    if (currentUser?.energy < 1 && !currentUser?.isPro) {
      soundService.playWrong();
      alert("You need 1 Energy Heart to play. Recharges automatically every 30 minutes, or refill from Store!");
      navigateTo('STORE');
      return;
    }

    const deducted = deductEnergy();
    if (deducted) {
      startMatch(activeDivision);
    }
  };

  const currentChampionship = championships[0] || null;

  // Weight-class fair division rules
  const userDivision = currentUser?.division || 'Junior';

  // Lower divisions check
  const isDivisionLocked = (divName) => {
    // Junior cannot be locked
    if (divName === 'Junior') {
      // If user is Senior or Open, Junior is locked (No Bullying Downwards)
      return userDivision === 'Senior' || userDivision === 'Open';
    }
    if (divName === 'Senior') {
      // If user is Open, Senior is locked (No Bullying Downwards)
      return userDivision === 'Open';
    }
    // Open is available for everyone to challenge upwards
    return false;
  };

  const handleDivisionClick = (divName) => {
    if (isDivisionLocked(divName)) {
      soundService.playWrong();
      alert(`Fair Play Rule: Players in higher divisions cannot compete in ${divName} League.`);
      return;
    }
    soundService.playClick();
    setActiveDivision(divName);
  };

  // Mock Leaderboard data
  const cityRankings = [
    { rank: 1, name: currentUser?.name || 'You', trophies: currentUser?.trophies || 890, city: currentUser?.city || 'Mumbai', isSelf: true },
    { rank: 2, name: 'Aditya Verma', trophies: 840, city: currentUser?.city || 'Mumbai', isSelf: false },
    { rank: 3, name: 'Priya Deshmukh', trophies: 795, city: currentUser?.city || 'Mumbai', isSelf: false },
    { rank: 4, name: 'Rehan Sheikh', trophies: 760, city: currentUser?.city || 'Mumbai', isSelf: false }
  ];

  const stateRankings = [
    { rank: 1, name: 'Kavya Pillai', trophies: 1420, city: 'Pune', state: 'Maharashtra', isSelf: false },
    { rank: 2, name: 'Zoya Khan', trophies: 1380, city: 'Nagpur', state: 'Maharashtra', isSelf: false },
    { rank: 3, name: currentUser?.name || 'You', trophies: currentUser?.trophies || 890, city: currentUser?.city || 'Mumbai', isSelf: true },
    { rank: 4, name: 'Siddharth R.', trophies: 810, city: 'Nashik', state: 'Maharashtra', isSelf: false }
  ];

  const nationalRankings = [
    { rank: 1, name: 'Vikramaditya S.', trophies: 2850, city: 'Bengaluru', isSelf: false },
    { rank: 2, name: 'Ananya Sharma', trophies: 2710, city: 'New Delhi', isSelf: false },
    { rank: 3, name: 'Fatima Zahra', trophies: 2590, city: 'Hyderabad', isSelf: false },
    { rank: 4, name: 'Tanmay Bhatt', trophies: 2480, city: 'Chandigarh', isSelf: false }
  ];

  const clanRankings = [
    { rank: 1, name: 'DPS Superstars Clan', members: 8, trophies: 8940, score: 'Weekly #1' },
    { rank: 2, name: 'SSC Crackers Guild', members: 10, trophies: 8420, score: 'Weekly #2' },
    { rank: 3, name: 'St. Xavier Quiz Champs', members: 7, trophies: 7850, score: 'Weekly #3' }
  ];

  return (
    <div className="flex-1 flex flex-col pb-16">
      {/* Sticky Player Header */}
      <PlayerHeader />

      <div className="px-4 py-3 space-y-4">
        {/* 1. Live Scheduled Championship Mega Banner */}
        {currentChampionship && (
          <div className="relative overflow-hidden rounded-2xl p-4 bg-gradient-to-r from-velvet-900 via-navy-900 to-velvet-950 border border-champGold/40 shadow-xl">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-champGold/10 rounded-full blur-2xl pointer-events-none"></div>

            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="inline-flex items-center gap-1 bg-champGold/20 text-champGold text-[10px] font-bold px-2 py-0.5 rounded-full border border-champGold/30">
                <Flame size={12} className="text-champGold fill-champGold" />
                MEGA NATIONAL CHAMPIONSHIP
              </span>
              <span className="text-[10px] text-slate-400 flex items-center gap-1 font-mono">
                <Clock size={11} />
                LIVE SUNDAY 8 PM
              </span>
            </div>

            <h3 className="text-sm font-bold text-pearl font-cinzel leading-snug">
              {currentChampionship.title}
            </h3>

            <p className="text-[11px] text-champGold/90 font-medium mt-1">
              🏆 Prize: {currentChampionship.prizeDescription}
            </p>

            {/* Countdown Clock */}
            <div className="mt-3 flex items-center justify-between bg-navy-950/70 rounded-xl p-2 border border-white/5">
              <div className="flex items-center gap-2">
                <div className="text-center px-1.5 py-0.5 rounded bg-velvet-800 border border-champGold/20">
                  <span className="text-xs font-bold text-champGold font-mono">{String(timeLeft.days).padStart(2, '0')}</span>
                  <span className="block text-[8px] text-slate-400">DAYS</span>
                </div>
                <span className="text-champGold font-bold">:</span>
                <div className="text-center px-1.5 py-0.5 rounded bg-velvet-800 border border-champGold/20">
                  <span className="text-xs font-bold text-champGold font-mono">{String(timeLeft.hours).padStart(2, '0')}</span>
                  <span className="block text-[8px] text-slate-400">HRS</span>
                </div>
                <span className="text-champGold font-bold">:</span>
                <div className="text-center px-1.5 py-0.5 rounded bg-velvet-800 border border-champGold/20">
                  <span className="text-xs font-bold text-champGold font-mono">{String(timeLeft.minutes).padStart(2, '0')}</span>
                  <span className="block text-[8px] text-slate-400">MIN</span>
                </div>
                <span className="text-champGold font-bold">:</span>
                <div className="text-center px-1.5 py-0.5 rounded bg-velvet-800 border border-champGold/20">
                  <span className="text-xs font-bold text-champGold font-mono">{String(timeLeft.seconds).padStart(2, '0')}</span>
                  <span className="block text-[8px] text-slate-400">SEC</span>
                </div>
              </div>

              <div className="text-right">
                <span className="text-[9px] text-slate-400 block">Sponsor</span>
                <span className="text-[10px] font-bold text-emeraldGlow-light flex items-center gap-1">
                  <span>{currentChampionship.sponsorLogo}</span>
                  <span>{currentChampionship.sponsorName}</span>
                </span>
              </div>
            </div>
          </div>
        )}

        {/* 2. Weight-Class League Selector */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
              <Shield size={13} className="text-champGold" />
              Weight-Class Divisions
            </h4>
            <span className="text-[10px] text-champGold font-medium">
              Fair Matchmaking
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {/* Junior League */}
            <button
              type="button"
              onClick={() => handleDivisionClick('Junior')}
              disabled={isDivisionLocked('Junior')}
              className={`p-2.5 rounded-xl border text-left transition relative ${
                activeDivision === 'Junior'
                  ? 'bg-velvet-900 border-champGold shadow-lg'
                  : isDivisionLocked('Junior')
                    ? 'bg-navy-900/40 border-white/5 opacity-50 cursor-not-allowed'
                    : 'bg-navy-900 border-white/10 hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-base">🚀</span>
                {isDivisionLocked('Junior') && <Lock size={12} className="text-slate-500" />}
                {activeDivision === 'Junior' && <span className="w-1.5 h-1.5 rounded-full bg-champGold"></span>}
              </div>
              <div className="text-xs font-bold text-pearl leading-tight">Junior</div>
              <div className="text-[9px] text-slate-400">Class 3–6</div>
            </button>

            {/* Senior League */}
            <button
              type="button"
              onClick={() => handleDivisionClick('Senior')}
              disabled={isDivisionLocked('Senior')}
              className={`p-2.5 rounded-xl border text-left transition relative ${
                activeDivision === 'Senior'
                  ? 'bg-velvet-900 border-champGold shadow-lg'
                  : isDivisionLocked('Senior')
                    ? 'bg-navy-900/40 border-white/5 opacity-50 cursor-not-allowed'
                    : 'bg-navy-900 border-white/10 hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-base">⭐</span>
                {isDivisionLocked('Senior') && <Lock size={12} className="text-slate-500" />}
                {activeDivision === 'Senior' && <span className="w-1.5 h-1.5 rounded-full bg-champGold"></span>}
              </div>
              <div className="text-xs font-bold text-pearl leading-tight">Senior</div>
              <div className="text-[9px] text-slate-400">Class 7–10</div>
            </button>

            {/* Open Champions League */}
            <button
              type="button"
              onClick={() => handleDivisionClick('Open')}
              className={`p-2.5 rounded-xl border text-left transition relative ${
                activeDivision === 'Open'
                  ? 'bg-velvet-900 border-champGold shadow-lg'
                  : 'bg-navy-900 border-white/10 hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-base">🦁</span>
                {userDivision !== 'Open' && (
                  <span className="text-[8px] bg-purple-500/20 text-purple-300 font-bold px-1 rounded flex items-center">
                    <ArrowUpRight size={10} /> Up
                  </span>
                )}
                {activeDivision === 'Open' && <span className="w-1.5 h-1.5 rounded-full bg-champGold"></span>}
              </div>
              <div className="text-xs font-bold text-pearl leading-tight">Champions</div>
              <div className="text-[9px] text-slate-400">17+ Adults</div>
            </button>
          </div>
        </div>

        {/* 3. Big Hot-Seat "Play Arena" Button */}
        <div className="pt-1">
          <button
            type="button"
            onClick={handleStartGame}
            className="w-full relative group overflow-hidden rounded-2xl bg-gradient-to-r from-champGold via-champGold-light to-champGold-dark p-4 shadow-xl active:scale-[0.98] transition"
          >
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-navy-950/90 flex items-center justify-center text-2xl shadow-inner">
                  🔥
                </div>
                <div className="text-left">
                  <div className="text-navy-950 font-black text-base font-cinzel tracking-wider leading-tight">
                    PLAY HOT-SEAT ARENA
                  </div>
                  <div className="text-navy-900 font-semibold text-[11px] flex items-center gap-1.5">
                    <span>10-Player Pool</span>
                    <span>•</span>
                    <span>Fastest Finger First</span>
                    <span>•</span>
                    <span>15-Tier Ladder</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="bg-navy-950 text-champGold font-bold text-[10px] px-2 py-0.5 rounded-full shadow">
                  1 HEART
                </span>
                <ChevronRight size={18} className="text-navy-950 mt-1" />
              </div>
            </div>
          </button>
        </div>

        {/* 4. Hall of Fame Showcase */}
        <div className="bg-navy-900/80 rounded-2xl p-3 border border-white/5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-bold text-champGold flex items-center gap-1 uppercase tracking-wider">
              <Star size={13} className="fill-champGold text-champGold" />
              Hall of Fame • Last Month Champions
            </span>
            <span className="text-[10px] text-slate-400">Physical Medal Awarded</span>
          </div>
          <div className="flex items-center justify-between bg-navy-950/70 p-2.5 rounded-xl border border-white/5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-champGold/20 border border-champGold flex items-center justify-center text-sm">
                🥇
              </div>
              <div>
                <div className="text-xs font-bold text-pearl">Ananya S. (Class 8)</div>
                <div className="text-[10px] text-slate-400">National Trophy Winner • Lucknow, UP</div>
              </div>
            </div>
            <span className="text-[11px] font-mono font-bold text-emeraldGlow-light">
              1 Crore Pts
            </span>
          </div>
        </div>

        {/* 5. Multi-Tab Leaderboard */}
        <div className="glass-panel-subtle rounded-2xl p-3">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-xs font-bold text-pearl flex items-center gap-1 font-cinzel">
              <Trophy size={14} className="text-champGold" />
              Arena Leaderboards
            </h4>
            <div className="flex bg-navy-950 p-0.5 rounded-lg border border-white/5 text-[10px]">
              <button
                type="button"
                onClick={() => { soundService.playClick(); setLeaderboardTab('city'); }}
                className={`px-2 py-0.5 rounded transition ${leaderboardTab === 'city' ? 'bg-velvet-800 text-champGold font-bold' : 'text-slate-400'}`}
              >
                City
              </button>
              <button
                type="button"
                onClick={() => { soundService.playClick(); setLeaderboardTab('state'); }}
                className={`px-2 py-0.5 rounded transition ${leaderboardTab === 'state' ? 'bg-velvet-800 text-champGold font-bold' : 'text-slate-400'}`}
              >
                State
              </button>
              <button
                type="button"
                onClick={() => { soundService.playClick(); setLeaderboardTab('national'); }}
                className={`px-2 py-0.5 rounded transition ${leaderboardTab === 'national' ? 'bg-velvet-800 text-champGold font-bold' : 'text-slate-400'}`}
              >
                National
              </button>
              <button
                type="button"
                onClick={() => { soundService.playClick(); setLeaderboardTab('clans'); }}
                className={`px-2 py-0.5 rounded transition ${leaderboardTab === 'clans' ? 'bg-velvet-800 text-champGold font-bold' : 'text-slate-400'}`}
              >
                Clans
              </button>
            </div>
          </div>

          {/* Leaderboard Table */}
          <div className="space-y-1.5">
            {leaderboardTab === 'city' && cityRankings.map((item) => (
              <div
                key={item.name}
                className={`flex items-center justify-between p-2 rounded-xl text-xs ${
                  item.isSelf ? 'bg-champGold/15 border border-champGold/30 text-champGold' : 'bg-navy-950/50 text-slate-300'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className={`w-5 text-center font-bold font-mono ${item.rank <= 3 ? 'text-champGold' : 'text-slate-500'}`}>
                    #{item.rank}
                  </span>
                  <span className="font-semibold">{item.name}</span>
                </div>
                <div className="flex items-center gap-1 font-mono font-bold">
                  <span>{item.trophies}</span>
                  <span className="text-[10px] text-blue-400">🏆</span>
                </div>
              </div>
            ))}

            {leaderboardTab === 'state' && stateRankings.map((item) => (
              <div
                key={item.name}
                className={`flex items-center justify-between p-2 rounded-xl text-xs ${
                  item.isSelf ? 'bg-champGold/15 border border-champGold/30 text-champGold' : 'bg-navy-950/50 text-slate-300'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className={`w-5 text-center font-bold font-mono ${item.rank <= 3 ? 'text-champGold' : 'text-slate-500'}`}>
                    #{item.rank}
                  </span>
                  <span className="font-semibold">{item.name} ({item.city})</span>
                </div>
                <div className="flex items-center gap-1 font-mono font-bold">
                  <span>{item.trophies}</span>
                  <span className="text-[10px] text-blue-400">🏆</span>
                </div>
              </div>
            ))}

            {leaderboardTab === 'national' && nationalRankings.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between p-2 rounded-xl text-xs bg-navy-950/50 text-slate-300"
              >
                <div className="flex items-center gap-2">
                  <span className={`w-5 text-center font-bold font-mono ${item.rank <= 3 ? 'text-champGold' : 'text-slate-500'}`}>
                    #{item.rank}
                  </span>
                  <span className="font-semibold">{item.name} ({item.city})</span>
                </div>
                <div className="flex items-center gap-1 font-mono font-bold">
                  <span>{item.trophies}</span>
                  <span className="text-[10px] text-blue-400">🏆</span>
                </div>
              </div>
            ))}

            {leaderboardTab === 'clans' && clanRankings.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between p-2 rounded-xl text-xs bg-navy-950/50 text-slate-300"
              >
                <div className="flex items-center gap-2">
                  <span className="w-5 text-center font-bold font-mono text-champGold">
                    #{item.rank}
                  </span>
                  <div>
                    <span className="font-semibold block leading-tight">{item.name}</span>
                    <span className="text-[9px] text-slate-400">{item.members} Members Clan</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono font-bold text-champGold">{item.trophies} 🏆</span>
                  <span className="block text-[9px] text-emeraldGlow-light">{item.score}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
