/**
 * SpectatorScreen.jsx
 * Live Studio Audience with Live Hot-Seat Telecast & Interactive "Play Along" Engine.
 * Features:
 * 1. Live Question View: Spectators see the EXACT Question, Options, and Timer of the Hot-Seat player.
 * 2. Hot-Seat Live Action Feed: Watch the contender think, lock in an option, and trigger lifelines.
 * 3. Audience "PLAY ALONG": Spectators can pick their own answer to win Play Along Points & Gems.
 * 4. Audience Poll Lifeline: Interactive voting modal when the Hot-Seat player triggers the lifeline.
 * 5. Grand Finale & Prize Distribution: At the end of the match, spectators receive Gems, ELO Trophies,
 *    and digital achievement badges based on their Play Along performance!
 */

import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import { useGame } from '../context/GameContext';
import { LADDER_TIERS } from '../services/questionEngine';
import soundService from '../services/soundService';
import confetti from 'canvas-confetti';
import {
  Eye,
  BarChart2,
  Award,
  LogOut,
  CheckCircle2,
  XCircle,
  Sparkles,
  Gamepad2,
  Clock,
  Trophy,
  Flame,
  Check,
  Gift
} from 'lucide-react';

export default function SpectatorScreen() {
  const { currentUser, addGems, updateTrophies } = useAuth();
  const {
    spectatorPlayer,
    spectatorLevel,
    setSpectatorLevel,
    hotSeatQuestions,
    spectatorPollActive,
    setSpectatorPollActive,
    floatingEmojis,
    sendSpectatorEmoji,
    navigateTo,
    startMatch,
    activeDivision
  } = useGame();

  // Active question on hot seat
  const currentQIndex = Math.min((spectatorLevel || 1) - 1, (hotSeatQuestions?.length || 1) - 1);
  const currentQ = hotSeatQuestions?.[currentQIndex] || null;
  const currentTier = currentQ?.tierMeta || LADDER_TIERS[currentQIndex] || LADDER_TIERS[0];

  // Hot-Seat Contender State Simulation
  const [contenderStatus, setContenderStatus] = useState('THINKING'); // 'THINKING' | 'LOCKED' | 'REVEALED'
  const [contenderLockedOption, setContenderLockedOption] = useState(null);
  const [contenderTimer, setContenderTimer] = useState(12);

  // Audience "PLAY ALONG" State
  const [audienceSelection, setAudienceSelection] = useState(null);
  const [playAlongLocked, setPlayAlongLocked] = useState(false);
  const [playAlongResult, setPlayAlongResult] = useState(null); // null | 'CORRECT' | 'WRONG'
  const [playAlongScore, setPlayAlongScore] = useState(0);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [totalQuestionsPlayed, setTotalQuestionsPlayed] = useState(0);

  // Audience Poll Lifeline Modal
  const [pollCountdown, setPollCountdown] = useState(10);
  const [pollVotedOption, setPollVotedOption] = useState(null);

  // Match Conclusion / Finale Screen for Audience
  const [matchEnded, setMatchEnded] = useState(false);
  const [prizesClaimed, setPrizesClaimed] = useState(false);

  const emojis = ['👏', '🔥', '💡', '🏆', '⭐', '🎉'];

  // -------------------------------------------------------------
  // HOT-SEAT SIMULATION CYCLE PER QUESTION
  // -------------------------------------------------------------
  useEffect(() => {
    if (matchEnded || !currentQ) return;

    // Reset question state
    setContenderStatus('THINKING');
    setContenderLockedOption(null);
    setContenderTimer(10);
    setAudienceSelection(null);
    setPlayAlongLocked(false);
    setPlayAlongResult(null);

    // Question countdown
    const clockInterval = setInterval(() => {
      setContenderTimer(prev => {
        if (prev <= 1) {
          clearInterval(clockInterval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Contender locks answer after 5 seconds
    const lockTimeout = setTimeout(() => {
      // 80% chance bot picks correct answer, 20% mistake
      const correct = currentQ.correctAnswer;
      const isCorrectBot = spectatorLevel <= 8 ? Math.random() > 0.15 : Math.random() > 0.35;
      const options = ['A', 'B', 'C', 'D'];
      const picked = isCorrectBot ? correct : options.find(o => o !== correct) || 'A';

      setContenderLockedOption(picked);
      setContenderStatus('LOCKED');
      soundService.playLock();

      // Trigger audience poll lifeline at Level 5 if not triggered yet
      if (spectatorLevel === 5 && !spectatorPollActive && !pollVotedOption) {
        setSpectatorPollActive(true);
        setPollCountdown(10);
        soundService.playLifeline();
      }

      // Reveal answer after 2.5 seconds suspense
      const revealTimeout = setTimeout(() => {
        setContenderStatus('REVEALED');

        // Evaluate Audience Play Along
        if (audienceSelection) {
          setTotalQuestionsPlayed(prev => prev + 1);
          if (audienceSelection === correct) {
            soundService.playCorrect();
            setPlayAlongResult('CORRECT');
            setPlayAlongScore(prev => prev + 50);
            setCorrectAnswersCount(prev => prev + 1);
            addGems(5); // +5 Gems instant reward!
          } else {
            soundService.playWrong();
            setPlayAlongResult('WRONG');
          }
        }

        // Advance or Conclude Match
        const advanceTimeout = setTimeout(() => {
          if (isCorrectBot && spectatorLevel < 10) {
            setSpectatorLevel(prev => prev + 1);
          } else {
            // Contender finishes run -> Trigger Grand Finale for Audience!
            soundService.playCorrect();
            setMatchEnded(true);
            try {
              confetti({
                particleCount: 100,
                spread: 80,
                origin: { y: 0.6 }
              });
            } catch {
              // fallback
            }
          }
        }, 2200);

        return () => clearTimeout(advanceTimeout);
      }, 2500);

      return () => clearTimeout(revealTimeout);
    }, 5500);

    return () => {
      clearInterval(clockInterval);
      clearTimeout(lockTimeout);
    };
  }, [spectatorLevel, matchEnded, currentQIndex]);

  // -------------------------------------------------------------
  // AUDIENCE PLAY ALONG HANDLERS
  // -------------------------------------------------------------
  const handlePlayAlongSelect = (optionKey) => {
    if (playAlongLocked || contenderStatus === 'REVEALED') return;
    soundService.playClick();
    setAudienceSelection(optionKey);
    setPlayAlongLocked(true);
  };

  const handlePollVote = (optionKey) => {
    if (pollVotedOption) return;
    soundService.playLock();
    setPollVotedOption(optionKey);
    // +10 Bonus Gems for participating in live audience poll
    addGems(10);
    setTimeout(() => {
      setSpectatorPollActive(false);
    }, 1500);
  };

  const handleClaimAudienceRewards = () => {
    soundService.playCorrect();
    // Grant audience rewards based on Play Along score
    const bonusTrophies = 15;
    const bonusGems = Math.max(30, correctAnswersCount * 10);
    updateTrophies(bonusTrophies);
    addGems(bonusGems);
    setPrizesClaimed(true);
  };

  if (!currentQ && !matchEnded) return null;

  return (
    <div className="flex-1 flex flex-col justify-between p-4 relative overflow-hidden">
      {/* Floating Emojis Canvas */}
      {floatingEmojis.map(item => (
        <div
          key={item.id}
          className="absolute bottom-20 text-3xl pointer-events-none animate-float transition-all"
          style={{ left: `${item.left}%` }}
        >
          {item.emoji}
        </div>
      ))}

      {/* ========================================================= */}
      {/* 1. TOP HEADER & LIVE TELECAST INFO                        */}
      {/* ========================================================= */}
      <div>
        <div className="flex items-center justify-between mb-2.5">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-crimsonAlert animate-ping"></span>
            <div className="flex items-center gap-1.5 text-xs font-bold text-pearl uppercase font-cinzel">
              <Eye size={15} className="text-champGold" />
              <span>Live Studio Audience</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Play Along Score Pill */}
            <div className="flex items-center gap-1 bg-navy-900 border border-champGold/30 px-2 py-0.5 rounded-full">
              <Gamepad2 size={13} className="text-champGold" />
              <span className="text-[10px] font-mono font-bold text-champGold">
                {playAlongScore} Pts
              </span>
            </div>

            <button
              type="button"
              onClick={() => navigateTo('HOME')}
              className="flex items-center gap-1 px-2 py-1 rounded-lg bg-navy-900 hover:bg-navy-800 border border-white/10 text-[10px] text-slate-300 hover:text-pearl transition"
            >
              <LogOut size={12} />
              <span>Exit</span>
            </button>
          </div>
        </div>

        {/* Hot-Seat Contender Telecast Banner */}
        <div className="p-3 rounded-2xl glass-panel border border-champGold/40 shadow-xl mb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-velvet-800 to-velvet-700 border-2 border-champGold flex items-center justify-center text-lg shadow">
                {spectatorPlayer?.avatar || '🦁'}
              </div>
              <div>
                <div className="text-xs font-bold text-pearl flex items-center gap-1.5 leading-tight">
                  <span>{spectatorPlayer?.name || 'Hot-Seat Player'}</span>
                  <span className="text-[10px] text-slate-400 font-normal">• {spectatorPlayer?.city}</span>
                </div>
                <div className="text-[10px] text-champGold font-semibold mt-0.5">
                  Playing Level {spectatorLevel}/15 ({currentTier?.label} Pts)
                </div>
              </div>
            </div>

            <div className="text-right">
              <div className="flex items-center gap-1 text-slate-300 text-xs font-mono font-bold">
                <Clock size={13} className="text-champGold" />
                <span>{contenderTimer}s</span>
              </div>
              <span className={`text-[10px] font-bold block ${
                contenderStatus === 'LOCKED'
                  ? 'text-champGold animate-pulse'
                  : contenderStatus === 'REVEALED'
                    ? 'text-emeraldGlow-light'
                    : 'text-slate-400'
              }`}>
                {contenderStatus === 'THINKING' && 'Considering...'}
                {contenderStatus === 'LOCKED' && `Locked Option ${contenderLockedOption}`}
                {contenderStatus === 'REVEALED' && 'Answer Checked'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 2. MAIN TELECAST: LIVE QUESTION & AUDIENCE "PLAY ALONG"   */}
      {/* ========================================================= */}
      {!matchEnded ? (
        <div className="my-auto space-y-3">
          {/* Question Display Card */}
          <div className="p-3.5 rounded-2xl bg-velvet-950/90 border border-champGold/30 shadow-2xl relative">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[9px] font-bold bg-champGold/15 text-champGold px-2 py-0.5 rounded border border-champGold/30 uppercase tracking-wider">
                {currentQ?.subject || 'Trivia'} • Hot Seat Question {spectatorLevel}
              </span>
              <span className="text-[10px] font-mono font-bold text-slate-300">
                {currentTier?.label} Points
              </span>
            </div>

            <h3 className="text-xs font-semibold text-pearl leading-relaxed">
              {currentQ?.text}
            </h3>
          </div>

          {/* "Play Along" Prompt Header */}
          <div className="flex items-center justify-between px-1">
            <span className="text-[11px] font-bold text-champGold flex items-center gap-1 uppercase tracking-wider font-cinzel">
              <Gamepad2 size={13} className="text-champGold" />
              Play Along: Pick Your Answer
            </span>
            <span className="text-[10px] text-emeraldGlow-light font-semibold">
              +50 Pts on Correct
            </span>
          </div>

          {/* 4 Interactive Options (Audience Tap-To-Play) */}
          <div className="space-y-2">
            {['A', 'B', 'C', 'D'].map(letter => {
              const isAudienceSelected = audienceSelection === letter;
              const isContenderLocked = contenderLockedOption === letter;
              const isCorrect = currentQ?.correctAnswer === letter;

              let btnStyle = "bg-navy-900/90 border-white/10 hover:border-champGold/40 text-slate-200";

              if (contenderStatus === 'REVEALED') {
                if (isCorrect) {
                  btnStyle = "bg-emeraldGlow/25 border-emeraldGlow text-emeraldGlow-light font-bold";
                } else if (isAudienceSelected && !isCorrect) {
                  btnStyle = "bg-crimsonAlert/25 border-crimsonAlert text-crimsonAlert";
                }
              } else if (isAudienceSelected) {
                btnStyle = "bg-champGold/20 border-champGold text-pearl shadow-md font-bold";
              }

              return (
                <button
                  key={letter}
                  type="button"
                  onClick={() => handlePlayAlongSelect(letter)}
                  disabled={playAlongLocked || contenderStatus === 'REVEALED'}
                  className={`w-full p-2.5 rounded-xl border text-left flex items-center justify-between transition text-xs ${btnStyle}`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className={`w-6 h-6 rounded-lg flex items-center justify-center font-bold text-[11px] font-mono ${
                      isAudienceSelected ? 'bg-champGold text-navy-950' : 'bg-velvet-800 text-champGold'
                    }`}>
                      {letter}
                    </span>
                    <span className="font-medium text-[11px]">{currentQ?.options[letter]}</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-[10px]">
                    {isContenderLocked && (
                      <span className="bg-blue-500/20 text-blue-300 font-bold px-1.5 py-0.5 rounded text-[9px] border border-blue-500/40">
                        Player Pick
                      </span>
                    )}
                    {isAudienceSelected && (
                      <span className="bg-champGold text-navy-950 font-bold px-1.5 py-0.5 rounded text-[9px]">
                        Your Guess
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Feedback banner after reveal */}
          {playAlongResult && (
            <div className={`p-2 rounded-xl text-xs font-bold text-center flex items-center justify-center gap-1.5 animate-fadeIn ${
              playAlongResult === 'CORRECT'
                ? 'bg-emeraldGlow/20 border border-emeraldGlow text-emeraldGlow-light'
                : 'bg-navy-900 border border-white/10 text-slate-300'
            }`}>
              {playAlongResult === 'CORRECT' ? (
                <>
                  <CheckCircle2 size={15} />
                  <span>BINGO! You predicted correctly! +50 Pts & +5 Gems credited!</span>
                </>
              ) : (
                <>
                  <XCircle size={15} />
                  <span>Wrong guess this round. Watch out for the next question!</span>
                </>
              )}
            </div>
          )}
        </div>
      ) : (
        /* ========================================================= */
        /* 3. AUDIENCE PLAY ALONG FINALE & PRIZE DISTRIBUTION        */
        /* ========================================================= */
        <div className="my-auto space-y-3 p-4 rounded-2xl bg-velvet-950 border-2 border-champGold shadow-2xl animate-fadeIn text-center">
          <div className="inline-block p-3 rounded-full bg-champGold/20 border border-champGold text-3xl mb-1 shadow-inner">
            🏆
          </div>

          <h3 className="text-base font-cinzel font-bold text-pearl">
            Studio Audience Play Along Finale!
          </h3>
          <p className="text-[11px] text-champGold font-semibold">
            Match Concluded • Claim Your Audience Rewards Below
          </p>

          {/* Performance Stats */}
          <div className="grid grid-cols-3 gap-2 my-3 text-center">
            <div className="p-2 rounded-xl bg-navy-950 border border-white/10">
              <span className="text-[9px] text-slate-400 uppercase block font-semibold">Play Along Pts</span>
              <span className="text-sm font-mono font-bold text-champGold">{playAlongScore}</span>
            </div>
            <div className="p-2 rounded-xl bg-navy-950 border border-white/10">
              <span className="text-[9px] text-slate-400 uppercase block font-semibold">Accuracy</span>
              <span className="text-sm font-mono font-bold text-emeraldGlow-light">
                {correctAnswersCount}/{totalQuestionsPlayed || 1}
              </span>
            </div>
            <div className="p-2 rounded-xl bg-navy-950 border border-white/10">
              <span className="text-[9px] text-slate-400 uppercase block font-semibold">Rating Gain</span>
              <span className="text-sm font-mono font-bold text-blue-300">+15 🏆</span>
            </div>
          </div>

          {/* Prize breakdown */}
          <div className="p-3 rounded-xl bg-navy-900 border border-champGold/30 text-left space-y-1.5 text-xs">
            <span className="font-bold text-champGold block text-[11px] uppercase tracking-wider flex items-center gap-1">
              <Gift size={13} /> Audience Prizes Awarded:
            </span>
            <div className="flex items-center justify-between text-slate-200">
              <span>💎 Bonus Gems:</span>
              <span className="font-bold font-mono text-champGold">+{Math.max(30, correctAnswersCount * 10)} Gems</span>
            </div>
            <div className="flex items-center justify-between text-slate-200">
              <span>🏆 Audience ELO Rank:</span>
              <span className="font-bold font-mono text-blue-300">+15 Trophies</span>
            </div>
            <div className="flex items-center justify-between text-slate-200">
              <span>🎖️ Digital Badge:</span>
              <span className="font-bold text-emeraldGlow-light">Studio Master VIP</span>
            </div>
          </div>

          {!prizesClaimed ? (
            <button
              type="button"
              onClick={handleClaimAudienceRewards}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-champGold to-champGold-dark text-navy-950 font-bold text-xs shadow-lg hover:brightness-110 transition uppercase font-rajdhani tracking-wider"
            >
              Claim My Rewards & Update Profile
            </button>
          ) : (
            <div className="space-y-2">
              <div className="p-2 rounded-lg bg-emeraldGlow/20 text-emeraldGlow-light text-xs font-bold">
                ✓ All Gems & Trophies credited to your profile!
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => navigateTo('HOME')}
                  className="py-2 rounded-xl bg-navy-900 border border-white/10 text-pearl font-bold text-xs"
                >
                  Return to Arena
                </button>
                <button
                  type="button"
                  onClick={() => startMatch(activeDivision)}
                  className="py-2 rounded-xl bg-champGold text-navy-950 font-bold text-xs"
                >
                  Play Hot Seat Now
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ========================================================= */}
      {/* 4. AUDIENCE POLL LIFELINE MODAL POPUP                     */}
      {/* ========================================================= */}
      {spectatorPollActive && (
        <div className="absolute inset-0 bg-navy-950/95 backdrop-blur-md z-50 p-4 flex flex-col justify-center rounded-2xl animate-fadeIn">
          <div className="p-4 rounded-2xl bg-velvet-950 border border-champGold shadow-2xl text-center">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5">
                <BarChart2 size={16} className="text-champGold" />
                <h4 className="text-xs font-bold text-champGold uppercase font-cinzel">
                  Audience Poll Lifeline Triggered!
                </h4>
              </div>
              <span className="text-xs font-mono font-bold text-crimsonAlert bg-crimsonAlert/10 px-2 py-0.5 rounded border border-crimsonAlert/30">
                00:0{pollCountdown}s
              </span>
            </div>

            <p className="text-xs text-pearl mb-3">
              Hot-Seat player {spectatorPlayer?.name} is asking the audience! Vote now to earn <strong className="text-champGold">+10 Bonus Gems</strong>!
            </p>

            <div className="grid grid-cols-2 gap-2 mb-2">
              {['A', 'B', 'C', 'D'].map(opt => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => handlePollVote(opt)}
                  disabled={Boolean(pollVotedOption)}
                  className={`p-2.5 rounded-xl border text-xs font-bold transition flex items-center justify-between ${
                    pollVotedOption === opt
                      ? 'bg-champGold text-navy-950 border-champGold shadow-lg'
                      : 'bg-navy-900 border-white/10 hover:border-champGold/40 text-pearl'
                  } ${pollVotedOption && pollVotedOption !== opt ? 'opacity-40 cursor-not-allowed' : ''}`}
                >
                  <span>Option {opt}</span>
                  {pollVotedOption === opt && <Check size={14} />}
                </button>
              ))}
            </div>

            {pollVotedOption && (
              <div className="text-center text-[11px] text-emeraldGlow-light font-semibold pt-1">
                ✓ Vote recorded! +10 Bonus Gems added to your balance!
              </div>
            )}
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 5. FLOATING REACTION EMOJI TOOLBAR                        */}
      {/* ========================================================= */}
      <div className="pt-2">
        <div className="flex items-center justify-between bg-navy-900/90 backdrop-blur p-2 rounded-2xl border border-white/10 shadow-lg">
          <span className="text-[10px] text-slate-400 font-semibold pl-2">
            Send Reaction:
          </span>
          <div className="flex items-center gap-1.5">
            {emojis.map(e => (
              <button
                key={e}
                type="button"
                onClick={() => { soundService.playClick(); sendSpectatorEmoji(e); }}
                className="w-8 h-8 rounded-xl bg-navy-950 hover:bg-velvet-800 border border-white/10 flex items-center justify-center text-lg active:scale-125 transition-transform"
              >
                {e}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
