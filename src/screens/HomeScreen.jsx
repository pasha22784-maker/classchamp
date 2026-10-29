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

import React, { useState, useEffect, useMemo } from 'react';
import { useAuth } from '../context/AuthContext';
import { useGame } from '../context/GameContext';
import PlayerHeader from '../components/common/PlayerHeader';
import RegisterModal from '../components/common/RegisterModal';
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
  Star,
  Crown,
  LogIn,
  Gift,
  Radio,
  Swords,
  Mic
} from 'lucide-react';

import examCategoryService from '../services/examCategoryService';
import fairPlayService, { JUNIOR_GRADES, SENIOR_GRADES, MAX_DOWNWARD_PRACTICE_DAILY } from '../services/fairPlayService';

export default function HomeScreen() {
  const { currentUser, deductEnergy, isRegisterModalOpen, openRegisterModal, closeRegisterModal } = useAuth();
  const { activeDivision, setActiveDivision, selectedGrade, setSelectedGrade, startMatch, startClanBattle, navigateTo, openSettings, openFriends, examCategory } = useGame();
  const categoryMeta = examCategoryService.getCategories().find(c => c.id === examCategory) || examCategoryService.getCategories()[0];

  const [championships, setChampionships] = useState(() => storageService.getChampionships());
  const [timeLeft, setTimeLeft] = useState({ days: 2, hours: 14, minutes: 22, seconds: 45 });
  const [leaderboardTab, setLeaderboardTab] = useState('city'); // 'city' | 'state' | 'national' | 'clans'
  const [downwardWarningModal, setDownwardWarningModal] = useState(null);

  const activeFlashOffer = storageService.getStoreOffers().find(o => o.isActive !== false);

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

  const userDivision = currentUser?.division || 'Junior';
  const userGrade = currentUser?.grade ? Number(currentUser.grade) : (userDivision === 'Senior' ? 8 : userDivision === 'Open' ? 13 : 3);

  const handleGradeSelect = (targetGrade) => {
    soundService.playClick();
    if (targetGrade < userGrade) {
      // Check downward limit
      const usage = storageService.getDownwardPracticeUsage(currentUser?.id);
      if (usage.count >= MAX_DOWNWARD_PRACTICE_DAILY) {
        soundService.playWrong();
        alert(`Fair Play Shield Active: You have reached today's limit of ${MAX_DOWNWARD_PRACTICE_DAILY} practice matches in lower grades. This prevents younger students from being overwhelmed. Please compete in Class ${userGrade} or above for official ranked points!`);
        return;
      }
      setDownwardWarningModal({
        targetGrade,
        usageCount: usage.count
      });
      return;
    }
    setSelectedGrade(targetGrade);
  };

  const handleStartGame = () => {
    soundService.playClick();

    // Check if selected division is held by admin
    const lockKey = activeDivision === 'Junior' ? 'juniorLeague' : (activeDivision === 'Senior' ? 'seniorLeague' : 'openLeague');
    if (storageService.isFeatureHeld(lockKey)) {
      soundService.playWrong();
      alert(`The ${activeDivision} League is currently on hold for scheduled server updates by the Administrator. Please try another division or check back shortly!`);
      return;
    }

    const gradeToUse = (activeDivision === 'Junior' || activeDivision === 'Senior') ? (selectedGrade || userGrade) : null;

    // Free Access Gala: Unlimited energy & free entry for all!
    if (storageService.isFreeAccessActive()) {
      startMatch(activeDivision, gradeToUse);
      return;
    }

    if (currentUser?.energy < 1 && !currentUser?.isPro) {
      soundService.playWrong();
      alert("You need 1 Energy Heart to play. Recharges automatically every 30 minutes, or refill from Store!");
      navigateTo('STORE');
      return;
    }

    const deducted = deductEnergy();
    if (deducted) {
      startMatch(activeDivision, gradeToUse);
    }
  };

  const currentChampionship = championships[0] || null;

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
    const lockKey = divName === 'Junior' ? 'juniorLeague' : (divName === 'Senior' ? 'seniorLeague' : 'openLeague');
    if (storageService.isFeatureHeld(lockKey)) {
      soundService.playWrong();
      alert(`${divName} League is currently paused for updates by the Administrator.`);
      return;
    }
    if (isDivisionLocked(divName)) {
      soundService.playWrong();
      alert(`Fair Play Rule: Players in higher divisions cannot compete in ${divName} League.`);
      return;
    }
    soundService.playClick();
    setActiveDivision(divName);
    if (divName === 'Junior' && (selectedGrade < 2 || selectedGrade > 5)) {
      setSelectedGrade(userDivision === 'Junior' ? userGrade : 3);
    }
    if (divName === 'Senior' && (selectedGrade < 6 || selectedGrade > 12)) {
      setSelectedGrade(userDivision === 'Senior' ? userGrade : 8);
    }
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

  const userClan = storageService.getUserClan(currentUser?.id);
  const liveClans = useMemo(() => {
    return [...storageService.getClans()].sort((a, b) => (b.averageTrophies || 0) - (a.averageTrophies || 0));
  }, [storageService]);

  return (
    <div className="flex-1 flex flex-col pb-16">
      {/* Sticky Player Header */}
      <PlayerHeader />

      <div className="px-4 py-3 space-y-4">
        {/* Guest Player Smart Conversion Banner */}
        {currentUser?.isGuest && (
          <div className="p-3.5 rounded-2xl bg-gradient-to-r from-amber-500/20 via-velvet-950 to-purple-950/40 border-2 border-champGold/50 shadow-xl flex items-center justify-between gap-3 animate-fadeIn">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-champGold/20 border border-champGold/40 flex items-center justify-center text-xl shrink-0 shadow">
                🎮
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="text-xs font-bold text-champGold uppercase font-cinzel">
                    Playing as Guest
                  </span>
                  <span className="text-[9px] bg-amber-500/20 text-amber-300 px-1.5 py-0.2 rounded-full font-bold">
                    Unsaved
                  </span>
                </div>
                <p className="text-[10px] text-slate-300 leading-tight">
                  Register your Free Account to save your Streak 🔥, National Rank 🏆 & Clans!
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={openRegisterModal}
              className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-500 via-champGold to-amber-500 text-navy-950 font-black text-xs uppercase font-rajdhani tracking-wider shadow-lg hover:brightness-110 active:scale-95 shrink-0 transition"
            >
              Register
            </button>
          </div>
        )}

        {/* Clan Quick Status Bar */}
        <div className="flex items-center justify-between px-3 py-2.5 rounded-xl bg-velvet-950/80 border border-champGold/30 shadow-md">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-velvet-800 border border-champGold/30 flex items-center justify-center text-lg">
              {userClan ? (userClan.badge || '🛡️') : '🛡️'}
            </div>
            <div>
              <span className="text-[9px] text-slate-400 uppercase font-semibold block leading-tight">
                Study Clan Arena
              </span>
              <span className="text-xs font-bold text-pearl flex items-center gap-1.5">
                <span>{userClan ? userClan.name : 'No Clan Joined'}</span>
                {userClan && (
                  <span className="text-[9px] font-mono text-champGold bg-champGold/15 px-1 rounded font-bold">
                    {userClan.code}
                  </span>
                )}
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={() => { soundService.playClick(); navigateTo('CLAN'); }}
            className="text-[11px] font-bold text-champGold hover:underline font-rajdhani uppercase tracking-wider flex items-center gap-1"
          >
            <span>{userClan ? `${userClan.averageTrophies || 0} Avg 🏆` : '+ Join Clan'}</span>
            <ChevronRight size={13} />
          </button>
        </div>

        {/* Free Access Gala Banner */}
        {storageService.isFreeAccessActive() && (
          <div className="p-3.5 rounded-2xl bg-gradient-to-r from-amber-500/20 via-champGold/25 to-yellow-600/20 border-2 border-champGold shadow-2xl relative overflow-hidden animate-pulse">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-champGold text-navy-950 flex items-center justify-center font-bold text-lg shadow">
                  🎉
                </div>
                <div>
                  <span className="text-[10px] font-bold text-champGold uppercase tracking-wider block font-rajdhani">
                    Admin Special Pass • Free Access Gala Active
                  </span>
                  <h4 className="text-xs font-bold text-pearl leading-tight">
                    Unlimited Energy & Free Match Plays For Everyone!
                  </h4>
                </div>
              </div>
              <span className="text-[10px] font-mono text-champGold bg-navy-950/80 px-2 py-1 rounded-lg border border-champGold/40 font-bold shrink-0">
                100% FREE
              </span>
            </div>
          </div>
        )}

        {/* Dynamic Flash Offer Banner from Admin */}
        {activeFlashOffer && (
          <div className="p-3.5 rounded-2xl bg-gradient-to-r from-purple-950/70 via-navy-900 to-velvet-950 border border-purple-500/40 shadow-lg flex items-center justify-between gap-3">
            <div className="overflow-hidden">
              <div className="flex items-center gap-1.5 mb-1 flex-wrap">
                <span className="text-[9px] font-bold bg-purple-500/30 text-purple-200 px-2 py-0.5 rounded border border-purple-400/40">
                  {activeFlashOffer.badge || 'FLASH DEAL'}
                </span>
                <span className="text-[10px] text-emeraldGlow-light font-bold">
                  {activeFlashOffer.discountPercent}% OFF
                </span>
              </div>
              <div className="text-xs font-bold text-pearl truncate">
                {activeFlashOffer.title}
              </div>
              <div className="text-[10px] text-slate-300 line-clamp-1">
                {activeFlashOffer.description}
              </div>
            </div>

            <button
              type="button"
              onClick={() => { soundService.playClick(); navigateTo('STORE'); }}
              className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-champGold to-champGold-dark text-navy-950 font-bold text-xs shrink-0 shadow hover:brightness-110 font-rajdhani uppercase tracking-wider"
            >
              View in Store
            </button>
          </div>
        )}

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
              <div className="text-[9px] text-slate-400">Class 2–5 (Age 7-10)</div>
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
              <div className="text-[9px] text-slate-400">Class 6–12 (Age 11-17)</div>
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
              <div className="text-[9px] text-slate-400 truncate">
                {activeDivision === 'Open' ? `${categoryMeta.badge} ${categoryMeta.shortName}` : '18+ Adults'}
              </div>
            </button>
          </div>

          {/* Junior Grade Sub-Selector (Class 2 to 5 | Age 7 to 10) */}
          {activeDivision === 'Junior' && (
            <div className="mt-2.5 p-3 rounded-2xl bg-velvet-950/90 border border-champGold/40 animate-fadeIn">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold text-champGold flex items-center gap-1.5 font-rajdhani uppercase tracking-wider">
                  <span>🎒 Select Junior Grade (Age 7 to 10)</span>
                </span>
                <span className="text-[9px] text-emeraldGlow-light font-bold flex items-center gap-1">
                  <Shield size={10} /> Fair Play Active
                </span>
              </div>

              <div className="grid grid-cols-4 gap-1.5">
                {JUNIOR_GRADES.map(item => {
                  const isMyGrade = userGrade === item.grade;
                  const isUpward = item.grade > userGrade;
                  const isDownward = item.grade < userGrade;
                  const isSelected = (selectedGrade || userGrade) === item.grade;

                  return (
                    <button
                      key={item.grade}
                      type="button"
                      onClick={() => handleGradeSelect(item.grade)}
                      className={`p-2 rounded-xl border text-center transition flex flex-col items-center justify-between relative ${
                        isSelected
                          ? 'bg-gradient-to-b from-amber-500/25 to-champGold/20 border-champGold shadow-md text-pearl ring-1 ring-champGold/40'
                          : 'bg-navy-950/70 border-white/10 hover:border-white/20 text-slate-300'
                      }`}
                    >
                      {/* Top Indicator Badge */}
                      <div className="mb-1">
                        {isMyGrade && (
                          <span className="text-[8px] font-extrabold bg-champGold/25 text-champGold px-1.5 py-0.5 rounded-full block border border-champGold/40 leading-none">
                            MY CLASS
                          </span>
                        )}
                        {isUpward && (
                          <span className="text-[8px] font-extrabold bg-purple-500/25 text-purple-300 px-1.5 py-0.5 rounded-full block border border-purple-400/40 leading-none">
                            +25% PTS
                          </span>
                        )}
                        {isDownward && (
                          <span className="text-[8px] font-extrabold bg-blue-500/20 text-blue-300 px-1.5 py-0.5 rounded-full block border border-blue-400/30 leading-none">
                            0 PTS
                          </span>
                        )}
                      </div>

                      <span className="text-base block mb-0.5">{item.icon}</span>
                      <span className="text-xs font-bold leading-tight font-rajdhani">{item.label}</span>
                      <span className="text-[9px] text-slate-400 block">{item.age}</span>
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Fair Play Context Notice */}
              <div className="mt-2.5 pt-2 border-t border-white/5 flex items-center justify-between text-[10px]">
                {(selectedGrade || userGrade) === userGrade && (
                  <span className="text-slate-300 flex items-center gap-1">
                    <span className="text-champGold">⭐</span> Official Ranked Match • Full Points & Trophies
                  </span>
                )}
                {(selectedGrade || userGrade) > userGrade && (
                  <span className="text-purple-300 flex items-center gap-1 font-medium">
                    <span className="text-purple-400">🚀</span> Upward Challenge • <strong>+25% Extra Trophies!</strong>
                  </span>
                )}
                {(selectedGrade || userGrade) < userGrade && (
                  <span className="text-blue-300 flex items-center gap-1 font-medium">
                    <span className="text-blue-400">🛡️</span> Practice Mode • 0 Points (Younger students protected)
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Senior Grade Sub-Selector (Class 6 to 12 | Age 11 to 17) */}
          {activeDivision === 'Senior' && (
            <div className="mt-2.5 p-3 rounded-2xl bg-velvet-950/90 border border-champGold/40 animate-fadeIn">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold text-champGold flex items-center gap-1.5 font-rajdhani uppercase tracking-wider">
                  <span>🎓 Select Senior Grade (Age 11 to 17)</span>
                </span>
                <span className="text-[9px] text-emeraldGlow-light font-bold flex items-center gap-1">
                  <Shield size={10} /> Fair Play Active
                </span>
              </div>

              <div className="grid grid-cols-4 sm:grid-cols-7 gap-1.5">
                {SENIOR_GRADES.map(item => {
                  const isMyGrade = userGrade === item.grade;
                  const isUpward = item.grade > userGrade;
                  const isDownward = item.grade < userGrade;
                  const isSelected = (selectedGrade || userGrade) === item.grade;

                  return (
                    <button
                      key={item.grade}
                      type="button"
                      onClick={() => handleGradeSelect(item.grade)}
                      className={`p-2 rounded-xl border text-center transition flex flex-col items-center justify-between relative ${
                        isSelected
                          ? 'bg-gradient-to-b from-amber-500/25 to-champGold/20 border-champGold shadow-md text-pearl ring-1 ring-champGold/40'
                          : 'bg-navy-950/70 border-white/10 hover:border-white/20 text-slate-300'
                      }`}
                    >
                      {/* Top Indicator Badge */}
                      <div className="mb-1">
                        {isMyGrade && (
                          <span className="text-[8px] font-extrabold bg-champGold/25 text-champGold px-1.5 py-0.5 rounded-full block border border-champGold/40 leading-none">
                            MY CLASS
                          </span>
                        )}
                        {isUpward && (
                          <span className="text-[8px] font-extrabold bg-purple-500/25 text-purple-300 px-1.5 py-0.5 rounded-full block border border-purple-400/40 leading-none">
                            +25% PTS
                          </span>
                        )}
                        {isDownward && (
                          <span className="text-[8px] font-extrabold bg-blue-500/20 text-blue-300 px-1.5 py-0.5 rounded-full block border border-blue-400/30 leading-none">
                            0 PTS
                          </span>
                        )}
                      </div>

                      <span className="text-base block mb-0.5">{item.icon}</span>
                      <span className="text-xs font-bold leading-tight font-rajdhani">{item.label}</span>
                      <span className="text-[9px] text-slate-400 block">{item.age}</span>
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Fair Play Context Notice */}
              <div className="mt-2.5 pt-2 border-t border-white/5 flex items-center justify-between text-[10px]">
                {(selectedGrade || userGrade) === userGrade && (
                  <span className="text-slate-300 flex items-center gap-1">
                    <span className="text-champGold">⭐</span> Official Ranked Match • Full Points & Trophies
                  </span>
                )}
                {(selectedGrade || userGrade) > userGrade && (
                  <span className="text-purple-300 flex items-center gap-1 font-medium">
                    <span className="text-purple-400">🚀</span> Upward Challenge • <strong>+25% Extra Trophies!</strong>
                  </span>
                )}
                {(selectedGrade || userGrade) < userGrade && (
                  <span className="text-blue-300 flex items-center gap-1 font-medium">
                    <span className="text-blue-400">🛡️</span> Practice Mode • 0 Points (Fair Play Protection Active)
                  </span>
                )}
              </div>
            </div>
          )}
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

        {/* 4. Play with Friends / Private Room (Max 10) */}
        <div className="rounded-2xl p-3.5 bg-gradient-to-r from-velvet-950 via-navy-900 to-velvet-900 border border-blue-500/30 shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-sm">
                👥
              </div>
              <div>
                <h4 className="text-xs font-bold text-pearl font-cinzel">Play with Friends</h4>
                <p className="text-[10px] text-slate-400">Invite up to 10 players • WhatsApp / SMS / Link</p>
              </div>
            </div>
            <span className="text-[9px] bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
              Max 10
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 mt-2.5">
            <button
              type="button"
              onClick={() => { soundService.playClick(); navigateTo('PRIVATE_ROOM'); }}
              className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-velvet-800 to-navy-800 border border-champGold/40 hover:border-champGold text-champGold font-bold text-xs flex items-center justify-center gap-1.5 shadow transition active:scale-95 font-rajdhani uppercase tracking-wider"
            >
              <Crown size={14} className="text-champGold" />
              <span>Create Room</span>
            </button>

            <button
              type="button"
              onClick={() => { soundService.playClick(); navigateTo('JOIN_ROOM'); }}
              className="py-2.5 px-3 rounded-xl bg-navy-950/80 hover:bg-navy-800 border border-white/10 hover:border-white/30 text-pearl font-bold text-xs flex items-center justify-center gap-1.5 shadow transition active:scale-95 font-rajdhani uppercase tracking-wider"
            >
              <LogIn size={14} className="text-blue-400" />
              <span>Join with Code</span>
            </button>
          </div>

          {/* PUBG-Style Squad & Online Friends Quick Launcher */}
          <button
            type="button"
            onClick={openFriends}
            className="w-full mt-2 py-2 px-3 rounded-xl bg-navy-950/90 hover:bg-navy-800/90 border border-champGold/30 hover:border-champGold text-champGold font-bold text-xs flex items-center justify-center gap-2 transition active:scale-95 font-rajdhani uppercase tracking-wider shadow"
          >
            <Users size={14} className="text-champGold" />
            <span>👥 Squad & Online Friends (PUBG Style)</span>
          </button>
        </div>

        {/* 4B. ⚔️ 4v4 Clan Battle Arena (Voice Chat & Clan Wars) */}
        <div className="rounded-2xl p-3.5 bg-gradient-to-r from-crimsonAlert/20 via-navy-900 to-velvet-950 border border-crimsonAlert/40 shadow-xl relative overflow-hidden">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-crimsonAlert/20 border border-crimsonAlert flex items-center justify-center text-sm shadow">
                <Swords size={16} className="text-crimsonAlert" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-pearl font-cinzel flex items-center gap-1.5">
                  <span>4v4 Clan Battle Mode</span>
                  <span className="px-1.5 py-0.2 rounded bg-crimsonAlert text-pearl text-[9px] uppercase font-bold">
                    NEW
                  </span>
                </h4>
                <p className="text-[10px] text-slate-300">
                  Lobby: All-Chat • Match: Team-Only Voice • 20s Anti-Cheat
                </p>
              </div>
            </div>
            <span className="text-[9px] bg-champGold/20 text-champGold px-2 py-0.5 rounded-full font-bold uppercase tracking-wider border border-champGold/30">
              🎙️ Voice Chat
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 mt-2.5">
            <button
              type="button"
              onClick={() => {
                soundService.playClick();
                if (startClanBattle) startClanBattle(activeDivision);
                else navigateTo('CLAN_BATTLE_LOBBY');
              }}
              className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-crimsonAlert to-velvet-800 hover:brightness-110 text-pearl font-bold text-xs flex items-center justify-center gap-1.5 shadow transition active:scale-95 font-rajdhani uppercase tracking-wider"
            >
              <Swords size={14} />
              <span>Create 4v4 War</span>
            </button>

            <button
              type="button"
              onClick={() => { soundService.playClick(); navigateTo('JOIN_ROOM'); }}
              className="py-2.5 px-3 rounded-xl bg-navy-950/80 hover:bg-navy-800 border border-white/10 hover:border-white/30 text-pearl font-bold text-xs flex items-center justify-center gap-1.5 shadow transition active:scale-95 font-rajdhani uppercase tracking-wider"
            >
              <LogIn size={14} className="text-champGold" />
              <span>Join Clan War</span>
            </button>
          </div>
        </div>

        {/* 4C. 🔴 LIVE Games Running (Audience Spectator & Play-Along Hub - No Code Needed) */}
        <div className="rounded-2xl p-3.5 bg-gradient-to-r from-velvet-950 via-navy-950 to-navy-900 border border-champGold/40 shadow-xl relative overflow-hidden">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-champGold/20 border border-champGold flex items-center justify-center text-sm shadow">
                <Radio size={16} className="text-crimsonAlert animate-pulse" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-pearl font-cinzel flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-crimsonAlert animate-ping" />
                  <span>🔴 Live Games Running</span>
                </h4>
                <p className="text-[10px] text-slate-300">
                  बिना कोड के दर्शक बनें • Play-Along करें और जनता पोल में वोट दें!
                </p>
              </div>
            </div>
            <span className="text-[9px] bg-crimsonAlert/20 text-crimsonAlert px-2 py-0.5 rounded-full font-bold uppercase tracking-wider border border-crimsonAlert/30">
              No Code Needed
            </span>
          </div>

          <button
            type="button"
            onClick={() => { soundService.playClick(); navigateTo('LIVE_HUB'); }}
            className="w-full mt-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-champGold via-amber-400 to-champGold-dark text-navy-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg hover:scale-[1.01] active:scale-95 transition font-rajdhani uppercase tracking-wider"
          >
            <Radio size={14} className="text-navy-950 animate-pulse" />
            <span>लाइव मुकाबले देखें (Watch Live & Play-Along)</span>
            <ChevronRight size={15} />
          </button>
        </div>

        {/* 5. Hall of Fame Showcase */}
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

            {leaderboardTab === 'clans' && (
              <div className="space-y-1.5">
                {liveClans.map((clan, idx) => {
                  const isMyClan = userClan && userClan.id === clan.id;
                  return (
                    <div
                      key={clan.id}
                      className={`flex items-center justify-between p-2.5 rounded-xl text-xs transition ${
                        isMyClan
                          ? 'bg-champGold/15 border border-champGold/50 text-champGold shadow'
                          : 'bg-navy-950/50 text-slate-300 border border-white/5'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className={`w-5 text-center font-bold font-mono ${idx < 3 ? 'text-champGold' : 'text-slate-500'}`}>
                          #{idx + 1}
                        </span>
                        <div className="text-base">{clan.badge || '🛡️'}</div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="font-semibold block leading-tight text-pearl">{clan.name}</span>
                            {isMyClan && (
                              <span className="text-[8px] bg-champGold/20 text-champGold font-bold px-1 rounded">
                                YOUR CLAN
                              </span>
                            )}
                          </div>
                          <span className="text-[9px] text-slate-400">
                            {clan.code} • {clan.members?.length || 0} Members
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-mono font-bold text-champGold block">
                          {clan.averageTrophies || 0} Avg 🏆
                        </span>
                        <span className="text-[9px] text-slate-400">
                          {clan.totalTrophies?.toLocaleString() || 0} Total
                        </span>
                      </div>
                    </div>
                  );
                })}

                <button
                  type="button"
                  onClick={() => { soundService.playClick(); navigateTo('CLAN'); }}
                  className="w-full mt-2 py-2 rounded-xl bg-velvet-900/90 hover:bg-velvet-800 text-champGold border border-champGold/30 font-bold text-xs flex items-center justify-center gap-1.5 uppercase font-rajdhani tracking-wider transition shadow"
                >
                  <Shield size={13} />
                  <span>{userClan ? 'Manage My Clan' : 'Join / Create a Clan'}</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Guest-to-Registered Progress Migration Modal */}
      <RegisterModal isOpen={isRegisterModalOpen} onClose={closeRegisterModal} />

      {/* Anti-Bullying Downward Fair Play Confirmation Modal */}
      {downwardWarningModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/85 backdrop-blur-md animate-fadeIn">
          <div className="w-full max-w-sm bg-navy-900 border border-blue-500/40 rounded-3xl p-5 shadow-2xl relative">
            <div className="text-center mb-3">
              <div className="inline-flex p-3 rounded-2xl bg-blue-500/20 border border-blue-400/40 text-2xl mb-2">
                🛡️
              </div>
              <h3 className="text-base font-bold text-pearl font-cinzel">
                Junior Fair Play Protection
              </h3>
              <p className="text-[11px] text-blue-300 font-medium">
                Practice Mode • Zero Ranked Rewards
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-velvet-950/90 border border-white/10 text-xs space-y-2 mb-4">
              <p className="text-slate-300 leading-relaxed">
                You are registered in <strong className="text-champGold">Class {userGrade}</strong>.
                Playing in <strong className="text-blue-300">Class {downwardWarningModal.targetGrade}</strong> is strictly <strong>Practice Mode</strong>:
              </p>
              <ul className="space-y-1 text-[11px] text-slate-400">
                <li className="flex items-center gap-1.5">
                  <span className="text-crimsonAlert font-bold">✕</span> 0 Points Earned
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-crimsonAlert font-bold">✕</span> 0 Ranked ELO Trophies
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-crimsonAlert font-bold">✕</span> 0 Streak or Badge Credits
                </li>
              </ul>
              <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] text-slate-400">
                <span>Daily Practice Limit:</span>
                <span className="font-bold text-champGold font-mono">
                  {downwardWarningModal.usageCount} / {MAX_DOWNWARD_PRACTICE_DAILY} Used Today
                </span>
              </div>
              <p className="text-[10px] text-emeraldGlow-light italic">
                ✨ Younger students' rankings stay protected and fair!
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => {
                  soundService.playClick();
                  setDownwardWarningModal(null);
                }}
                className="py-2.5 rounded-xl bg-navy-800 border border-white/10 text-slate-300 font-bold text-xs hover:bg-navy-700 transition"
              >
                Keep My Class
              </button>
              <button
                type="button"
                onClick={() => {
                  soundService.playClick();
                  setSelectedGrade(downwardWarningModal.targetGrade);
                  setDownwardWarningModal(null);
                }}
                className="py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-pearl font-bold text-xs uppercase font-rajdhani tracking-wider transition shadow-lg"
              >
                Start Practice (0 Pts)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
