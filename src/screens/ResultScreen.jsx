/**
 * ResultScreen.jsx
 * Post-Match Celebration, ELO Trophy Math, WhatsApp Scorecard, Physical Prize Claim Form,
 * and "Review My Answers" — educational breakdown of the player's hot-seat session.
 */

import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useGame } from '../context/GameContext';
import RegisterModal from '../components/common/RegisterModal';
import storageService from '../services/storageService';
import soundService from '../services/soundService';
import { getLocalizedQuestion } from '../services/questionLanguageHelper';
import confetti from 'canvas-confetti';
import {
  Trophy,
  Share2,
  RotateCcw,
  Home,
  Award,
  Sparkles,
  MapPin,
  Phone,
  User,
  CheckCircle2,
  Package,
  BookOpen,
  ChevronDown,
  ChevronUp,
  XCircle,
  CheckCircle,
  Minus
} from 'lucide-react';

// ---------------------------------------------------------------------------
// Helper: render potentially bilingual text (lines split by \n)
// ---------------------------------------------------------------------------
function BilingualText({ text, className = '' }) {
  if (!text) return null;
  const lines = String(text).split('\n');
  if (lines.length === 1) return <span className={className}>{text}</span>;
  return (
    <span className={className}>
      <span className="block font-bold text-champGold/90">{lines[0]}</span>
      <span className="block text-[0.8em] text-pearl/70 mt-0.5">{lines[1]}</span>
    </span>
  );
}

// ---------------------------------------------------------------------------
// Helper: render bilingual option text (format: "Hindi / English")
// ---------------------------------------------------------------------------
function OptionText({ text }) {
  if (!text) return null;
  if (text.includes(' / ')) {
    const [hi, en] = text.split(' / ');
    return (
      <span>
        <span className="font-semibold">{hi}</span>
        <span className="text-[0.85em] opacity-70"> / {en}</span>
      </span>
    );
  }
  return <span>{text}</span>;
}

// ---------------------------------------------------------------------------
// ReviewCard — one question's full breakdown
// ---------------------------------------------------------------------------
function ReviewCard({ index, question, playerChoice, languageMode }) {
  const [expanded, setExpanded] = useState(false);
  const localized = getLocalizedQuestion(question, languageMode);

  const optionKeys = ['A', 'B', 'C', 'D'];
  const correct = question.correctAnswer;

  const getBadge = (key) => {
    if (key === correct && key === playerChoice) return 'correct-chosen';
    if (key === correct) return 'correct';
    if (key === playerChoice) return 'wrong-chosen';
    return 'neutral';
  };

  const badgeStyles = {
    'correct-chosen': 'bg-emeraldGlow/25 border-emeraldGlow text-emeraldGlow-light',
    'correct':        'bg-emeraldGlow/10 border-emeraldGlow/50 text-emeraldGlow-light',
    'wrong-chosen':   'bg-crimsonAlert/25 border-crimsonAlert text-red-300',
    'neutral':        'bg-navy-950/50 border-white/10 text-slate-400'
  };

  const badgeIcon = {
    'correct-chosen': <CheckCircle size={13} className="text-emeraldGlow flex-shrink-0" />,
    'correct':        <CheckCircle size={13} className="text-emeraldGlow/70 flex-shrink-0" />,
    'wrong-chosen':   <XCircle size={13} className="text-crimsonAlert flex-shrink-0" />,
    'neutral':        <Minus size={13} className="text-slate-600 flex-shrink-0" />
  };

  const playerWasCorrect = playerChoice === correct;

  return (
    <div className="rounded-xl overflow-hidden border border-white/10 mb-2 bg-navy-950/60">
      {/* Header Row */}
      <button
        type="button"
        onClick={() => { soundService.playClick(); setExpanded(prev => !prev); }}
        className="w-full flex items-center gap-2.5 p-3 text-left hover:bg-white/5 transition"
      >
        {/* Q number badge */}
        <span className="flex-shrink-0 w-7 h-7 rounded-full bg-velvet-800 border border-white/10 flex items-center justify-center text-[11px] font-bold text-champGold font-mono">
          {index + 1}
        </span>

        {/* Question preview */}
        <span className="flex-1 text-[11px] text-pearl/80 leading-snug line-clamp-2">
          <BilingualText text={localized.displayText} />
        </span>

        {/* Result pip */}
        <span className={`flex-shrink-0 text-[9px] font-bold uppercase px-1.5 py-0.5 rounded ${
          playerChoice == null
            ? 'bg-slate-700/60 text-slate-400'
            : playerWasCorrect
              ? 'bg-emeraldGlow/20 text-emeraldGlow-light'
              : 'bg-crimsonAlert/20 text-red-300'
        }`}>
          {playerChoice == null ? 'Skipped' : playerWasCorrect ? '✓ Right' : '✗ Wrong'}
        </span>

        {expanded ? <ChevronUp size={14} className="text-slate-500 flex-shrink-0" /> : <ChevronDown size={14} className="text-slate-500 flex-shrink-0" />}
      </button>

      {/* Expanded Detail */}
      {expanded && (
        <div className="px-3 pb-3 border-t border-white/8 pt-2 space-y-1.5">
          {/* Full question text */}
          <p className="text-[11px] text-pearl leading-relaxed mb-2">
            <BilingualText text={localized.displayText} />
          </p>

          {/* Options */}
          <div className="space-y-1">
            {optionKeys.map(key => {
              const badge = getBadge(key);
              return (
                <div
                  key={key}
                  className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg border text-[11px] ${badgeStyles[badge]}`}
                >
                  {badgeIcon[badge]}
                  <span className="font-bold mr-1">{key}.</span>
                  <OptionText text={localized.displayOptions[key] || '—'} />
                  {key === correct && (
                    <span className="ml-auto text-[9px] font-bold text-emeraldGlow bg-emeraldGlow/15 px-1 rounded">Correct</span>
                  )}
                  {key === playerChoice && key !== correct && (
                    <span className="ml-auto text-[9px] font-bold text-red-400 bg-crimsonAlert/15 px-1 rounded">Your Pick</span>
                  )}
                  {key === playerChoice && key === correct && (
                    <span className="ml-auto text-[9px] font-bold text-emeraldGlow bg-emeraldGlow/15 px-1 rounded">Your Pick ✓</span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Guru Hint */}
          {localized.displayGuruHint && (
            <div className="mt-2 p-2 rounded-lg bg-blue-950/50 border border-blue-500/30">
              <p className="text-[10px] font-bold text-blue-300 mb-0.5 flex items-center gap-1">
                <Sparkles size={11} /> AI Guru Hint
              </p>
              <p className="text-[11px] text-blue-100/80 leading-relaxed">
                <BilingualText text={localized.displayGuruHint} />
              </p>
            </div>
          )}

          {/* Full Explanation */}
          {localized.displayExplanation && (
            <div className="mt-1.5 p-2 rounded-lg bg-velvet-900/60 border border-champGold/20">
              <p className="text-[10px] font-bold text-champGold mb-0.5">📖 Explanation</p>
              <p className="text-[11px] text-pearl/75 leading-relaxed">
                <BilingualText text={localized.displayExplanation} />
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main Result Screen
// ---------------------------------------------------------------------------
export default function ResultScreen() {
  const { currentUser, isRegisterModalOpen, openRegisterModal, closeRegisterModal } = useAuth();
  const {
    matchResult,
    activeDivision,
    navigateTo,
    startMatch,
    hotSeatQuestions,
    sessionAnswers,
    languageMode
  } = useGame();

  const [showClaimForm, setShowClaimForm] = useState(false);
  const [claimSubmitted, setClaimSubmitted] = useState(false);
  const [fullName, setFullName] = useState(currentUser?.name || '');
  const [parentPhone, setParentPhone] = useState('');
  const [address, setAddress] = useState('');
  const [showReview, setShowReview] = useState(false);

  // Confetti burst on victory or major level
  useEffect(() => {
    if (matchResult.isWinner || matchResult.pointsWon >= 10000) {
      soundService.playCorrect();
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // Fallback
      }
    }
  }, [matchResult]);

  // Generate WhatsApp Share text
  const getWhatsAppShareText = () => {
    const pts = (matchResult.pointsWon || 0).toLocaleString();
    const lvl = matchResult.levelReached || 1;
    const div = activeDivision || 'Junior';
    return encodeURIComponent(
      `🏆 I reached Level ${lvl} (${pts} Points) in BrainLeague ${div} League!\nCan you beat my hot-seat score? Play now on BrainLeague!`
    );
  };

  const handleWhatsAppShare = () => {
    soundService.playClick();
    const url = `https://wa.me/?text=${getWhatsAppShareText()}`;
    window.open(url, '_blank');
  };

  const handleClaimSubmit = (e) => {
    e.preventDefault();
    soundService.playClick();

    storageService.addPrizeClaim({
      userId: currentUser?.id,
      playerName: fullName,
      parentPhone,
      address,
      division: activeDivision,
      pointsWon: matchResult.pointsWon,
      levelReached: matchResult.levelReached
    });

    setClaimSubmitted(true);
  };

  const isEligibleForPhysicalMedal = matchResult.isWinner || matchResult.levelReached >= 10;

  // Derive only the questions the player actually reached (attempted)
  const attemptedQuestions = hotSeatQuestions.slice(0, Math.max(Object.keys(sessionAnswers).length, 1));

  return (
    <div className="flex-1 flex flex-col justify-between p-4 overflow-y-auto">
      {/* Top Victory / Match Conclusion Card */}
      <div>
        <div className="text-center pt-2 pb-4">
          <div className="inline-block p-4 rounded-3xl bg-gradient-to-tr from-champGold/20 to-velvet-800 border-2 border-champGold shadow-2xl mb-3 animate-bounce-subtle">
            <span className="text-5xl">
              {matchResult.isWinner ? '👑' : matchResult.pointsWon >= 10000 ? '🏆' : '🎯'}
            </span>
          </div>

          <h1 className="text-xl font-cinzel font-bold text-pearl tracking-wider">
            {matchResult.isWinner
              ? 'GRAND CHAMPION!'
              : matchResult.pointsWon >= 10000
                ? 'OUTSTANDING RUN!'
                : 'GOOD EFFORT!'}
          </h1>

          <p className="text-xs text-champGold font-medium mt-0.5">
            {activeDivision} League • Hot-Seat Arena
          </p>
        </div>

        {/* Scorecard Summary Box */}
        <div className="glass-panel rounded-2xl p-4 border border-champGold/40 shadow-xl mb-4">
          {/* Fair Play Shield Notice */}
          {matchResult.fairPlay?.status === 'DOWNWARD_PRACTICE' && (
            <div className="mb-3 p-2.5 rounded-xl bg-blue-950/80 border border-blue-400/40 text-xs flex items-center gap-2.5">
              <span className="text-xl">🛡️</span>
              <div>
                <span className="font-bold block text-blue-300 text-[11px]">Junior Practice Match (0 Ranked Points)</span>
                <span className="text-[9px] text-slate-300 block">
                  Fair Play Active: Class {matchResult.fairPlay.userGrade} playing Class {matchResult.fairPlay.targetGrade}. Zero points & trophies awarded to protect younger students' leaderboard fairness.
                </span>
              </div>
            </div>
          )}

          {/* Upward Challenger Bonus Notice */}
          {matchResult.fairPlay?.status === 'UPWARD_CHALLENGE' && (
            <div className="mb-3 p-2.5 rounded-xl bg-purple-950/80 border border-purple-400/40 text-xs flex items-center gap-2.5">
              <span className="text-xl">🚀</span>
              <div>
                <span className="font-bold block text-purple-300 text-[11px]">Upward Challenger (+25% Extra Trophies)</span>
                <span className="text-[9px] text-slate-300 block">
                  Daring Play: Challenging higher grade earned you 1.25x ELO trophies!
                </span>
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 gap-3 text-center mb-3">
            {/* Virtual Points Won */}
            <div className="p-3 rounded-xl bg-navy-950/80 border border-white/10">
              <span className="text-[10px] text-slate-400 uppercase font-semibold block">
                Virtual Points Won
              </span>
              <span className="text-base font-mono font-bold text-champGold">
                {matchResult.pointsWon.toLocaleString()}
              </span>
            </div>

            {/* Level Reached */}
            <div className="p-3 rounded-xl bg-navy-950/80 border border-white/10">
              <span className="text-[10px] text-slate-400 uppercase font-semibold block">
                Level Reached
              </span>
              <span className="text-base font-mono font-bold text-pearl">
                Level {matchResult.levelReached}/15
              </span>
            </div>
          </div>

          {/* ELO Trophies Rating Math */}
          <div className="p-2.5 rounded-xl bg-velvet-950/80 border border-blue-500/30 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <Award size={16} className="text-blue-400" />
              <div>
                <span className="font-bold text-pearl block text-[11px]">Skill Rating (ELO)</span>
                <span className="text-[9px] text-slate-400">Official ELO Skill Rating</span>
              </div>
            </div>
            <div className="font-mono font-bold">
              <span className={matchResult.trophyDelta >= 0 ? 'text-emeraldGlow-light' : 'text-crimsonAlert'}>
                {matchResult.trophyDelta >= 0 ? `+${matchResult.trophyDelta}` : matchResult.trophyDelta} Trophies
              </span>
            </div>
          </div>
        </div>

        {/* 1-Tap WhatsApp Scorecard Button */}
        <button
          type="button"
          onClick={handleWhatsAppShare}
          className="w-full mb-3 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-navy-950 font-bold text-xs shadow-lg active:scale-[0.98] transition flex items-center justify-center gap-2 uppercase tracking-wider font-rajdhani"
        >
          <Share2 size={16} className="text-navy-950" />
          <span>Share Scorecard on WhatsApp</span>
        </button>

        {/* ----------------------------------------------------------------- */}
        {/* 📚 REVIEW MY ANSWERS                                              */}
        {/* ----------------------------------------------------------------- */}
        {attemptedQuestions.length > 0 && (
          <div className="mb-3">
            <button
              type="button"
              onClick={() => { soundService.playClick(); setShowReview(prev => !prev); }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-900/80 to-velvet-900/80 border border-blue-500/40 text-pearl font-bold text-xs shadow-lg active:scale-[0.98] transition flex items-center justify-center gap-2 uppercase tracking-wider font-rajdhani hover:brightness-110"
            >
              <BookOpen size={16} className="text-blue-300" />
              <span>{showReview ? 'Hide Answer Review' : '📚 Review My Answers'}</span>
              <span className="text-[10px] bg-blue-500/30 text-blue-200 px-1.5 py-0.5 rounded font-mono">
                {attemptedQuestions.length} Q
              </span>
            </button>

            {showReview && (
              <div className="mt-2 animate-fadeIn">
                {/* Legend */}
                <div className="flex flex-wrap gap-2 mb-2 px-1">
                  <span className="flex items-center gap-1 text-[9px] text-emeraldGlow-light">
                    <CheckCircle size={10} /> Correct
                  </span>
                  <span className="flex items-center gap-1 text-[9px] text-red-400">
                    <XCircle size={10} /> Your wrong pick
                  </span>
                  <span className="flex items-center gap-1 text-[9px] text-slate-500">
                    <Minus size={10} /> Not chosen
                  </span>
                </div>

                {/* Question Cards */}
                {attemptedQuestions.map((q, idx) => (
                  <ReviewCard
                    key={q.id || idx}
                    index={idx}
                    question={q}
                    playerChoice={sessionAnswers[idx] ?? null}
                    languageMode={languageMode}
                  />
                ))}

                {/* Score summary inside review */}
                <div className="mt-2 p-2.5 rounded-xl bg-velvet-900/60 border border-champGold/20 text-center">
                  <p className="text-[10px] text-slate-400 mb-0.5">Session Score</p>
                  <p className="text-sm font-bold text-champGold font-mono">
                    {Object.entries(sessionAnswers).filter(([idx, key]) => hotSeatQuestions[idx]?.correctAnswer === key).length}
                    {' / '}
                    {attemptedQuestions.length} Correct
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Guest Score Save Prompt */}
        {currentUser?.isGuest && (
          <div className="p-3.5 rounded-2xl bg-gradient-to-r from-amber-500/20 via-velvet-950 to-purple-950/40 border-2 border-champGold/50 shadow-xl mb-3 flex items-center justify-between gap-3 animate-fadeIn">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-champGold/20 border border-champGold/40 flex items-center justify-center text-xl shrink-0 shadow">
                🏆
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="text-xs font-bold text-champGold uppercase font-cinzel">
                    Save Your Score & Streak
                  </span>
                  <span className="text-[9px] bg-amber-500/20 text-amber-300 px-1.5 py-0.2 rounded-full font-bold">
                    Guest
                  </span>
                </div>
                <p className="text-[10px] text-slate-300 leading-tight">
                  You earned {(matchResult.pointsWon || 0).toLocaleString()} pts! Register free to lock your National Rank & start your daily streak.
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={openRegisterModal}
              className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-500 via-champGold to-amber-500 text-navy-950 font-black text-xs uppercase font-rajdhani tracking-wider shadow-lg hover:brightness-110 active:scale-95 shrink-0 transition"
            >
              Save Score
            </button>
          </div>
        )}

        {/* Physical Medal / Trophy Claim Banner (Ju'alah Halal Model) */}
        {isEligibleForPhysicalMedal && (
          <div className="p-3 rounded-2xl bg-velvet-900 border border-champGold/40 shadow-lg mb-3">
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-1.5">
                <Package size={16} className="text-champGold" />
                <span className="text-xs font-bold text-champGold uppercase font-cinzel">
                  Claim Physical Medal / Trophy
                </span>
              </div>
              <span className="text-[9px] bg-champGold/20 text-champGold px-1.5 py-0.5 rounded font-bold">
                QUALIFIED
              </span>
            </div>
            <p className="text-[11px] text-slate-300 mb-2">
              Congratulations! Your high ladder score qualifies you for an in-app physical trophy/medal dispatched to your home.
            </p>

            {!claimSubmitted ? (
              <button
                type="button"
                onClick={() => setShowClaimForm(prev => !prev)}
                className="w-full py-2 rounded-xl bg-champGold text-navy-950 font-bold text-xs shadow hover:brightness-110 transition font-rajdhani uppercase tracking-wider"
              >
                {showClaimForm ? 'Hide Claim Form' : 'Fill Dispatch Address Details'}
              </button>
            ) : (
              <div className="p-2 rounded-xl bg-emeraldGlow/15 border border-emeraldGlow/40 text-emeraldGlow-light text-xs flex items-center gap-2">
                <CheckCircle2 size={16} />
                <span>Address saved! Admin team has received your dispatch request.</span>
              </div>
            )}

            {/* Claim Address Form */}
            {showClaimForm && !claimSubmitted && (
              <form onSubmit={handleClaimSubmit} className="mt-3 space-y-2 border-t border-white/10 pt-2 animate-fadeIn">
                <div>
                  <label className="block text-[10px] text-slate-300 font-medium mb-1">Full Student Name</label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-navy-950 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-pearl focus:border-champGold focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[10px] text-slate-300 font-medium mb-1">Parent Phone / WhatsApp</label>
                  <input
                    type="tel"
                    value={parentPhone}
                    onChange={(e) => setParentPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full bg-navy-950 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-pearl focus:border-champGold focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[10px] text-slate-300 font-medium mb-1">Complete Courier Delivery Address</label>
                  <textarea
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="House/Flat No, Street, City, State, PIN Code"
                    rows={2}
                    className="w-full bg-navy-950 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-pearl focus:border-champGold focus:outline-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2 rounded-lg bg-emeraldGlow text-navy-950 font-bold text-xs shadow hover:brightness-110 transition uppercase tracking-wider font-rajdhani"
                >
                  Submit Dispatch Request
                </button>
              </form>
            )}
          </div>
        )}
      </div>

      {/* Navigation Buttons: Play Again & Return Home */}
      <div className="grid grid-cols-2 gap-2 pt-2">
        <button
          type="button"
          onClick={() => navigateTo('HOME')}
          className="py-2.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-pearl font-bold text-xs border border-white/10 transition flex items-center justify-center gap-1.5 uppercase font-rajdhani"
        >
          <Home size={15} />
          <span>Home Arena</span>
        </button>

        <button
          type="button"
          onClick={() => startMatch(activeDivision)}
          className="py-2.5 rounded-xl bg-gradient-to-r from-champGold to-champGold-dark text-navy-950 font-bold text-xs shadow-lg hover:brightness-110 active:scale-[0.98] transition flex items-center justify-center gap-1.5 uppercase font-rajdhani"
        >
          <RotateCcw size={15} />
          <span>Play Again (1 Heart)</span>
        </button>
      </div>

      {/* Guest Progress Migration Modal */}
      <RegisterModal isOpen={isRegisterModalOpen} onClose={closeRegisterModal} />
    </div>
  );
}
