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
import roomService from '../services/roomService';
import friendService from '../services/friendService';
import confetti from 'canvas-confetti';
import KbcQuestionBox from '../components/common/KbcQuestionBox';
import KbcOptionButton from '../components/common/KbcOptionButton';
import { getLocalizedQuestion } from '../services/questionLanguageHelper';
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
  Gift,
  RotateCw,
  UserPlus,
  AlertTriangle
} from 'lucide-react';

export default function SpectatorScreen() {
  const { currentUser, addGems, updateTrophies } = useAuth();
  const {
    activeRoom,
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
    activeDivision,
    isLandscapeMode,
    toggleLandscapeMode,
    t,
    languageMode
  } = useGame();

  // Active question on hot seat
  const currentQIndex = Math.min((spectatorLevel || 1) - 1, (hotSeatQuestions?.length || 1) - 1);
  const currentQ = hotSeatQuestions?.[currentQIndex] || null;
  const localizedQ = getLocalizedQuestion(currentQ, languageMode);
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
  const [hasSentContenderRequest, setHasSentContenderRequest] = useState(false);

  // Disconnect & Inactivity Monitor for Contender Recovery
  const [isContenderInactive, setIsContenderInactive] = useState(false);
  const [disconnectCountdown, setDisconnectCountdown] = useState(10);
  const [promotedNotice, setPromotedNotice] = useState(null);
  const lastActivityTimestampRef = useRef(Date.now());
  const isRecoveringRef = useRef(false);

  // Automatically record contender into recent players for social play-along connecting
  useEffect(() => {
    if (currentUser?.id && spectatorPlayer) {
      friendService.recordRecentPlayers(currentUser.id, [spectatorPlayer], 'Play Along Hot Seat');
    }
  }, [currentUser, spectatorPlayer]);

  const emojis = ['👏', '🔥', '💡', '🏆', '⭐', '🎉'];

  // Play Along Welcome Announcement & 5-Second KBC Clock (bypassed if joining mid-match)
  const isMidMatchJoin = Boolean(activeRoom?.matchProgress?.currentLevel && activeRoom.matchProgress.currentLevel > 1);
  const [showPlayAlongWelcome, setShowPlayAlongWelcome] = useState(!isMidMatchJoin && (spectatorLevel || 1) === 1);
  const [welcomeCountdown, setWelcomeCountdown] = useState(5);

  // Instant Mid-Match Level & Contender State Adoption
  useEffect(() => {
    if (activeRoom?.matchProgress) {
      const mp = activeRoom.matchProgress;
      if (mp.currentLevel && mp.currentLevel !== spectatorLevel) {
        setSpectatorLevel(mp.currentLevel);
      }
      if (typeof mp.timeRemaining === 'number') {
        setContenderTimer(mp.timeRemaining);
      }
      if (mp.isAnswerLocked) {
        setContenderLockedOption(mp.lockedOption);
        setContenderStatus(mp.revealState ? 'REVEALED' : 'LOCKED');
      }
    }
  }, [activeRoom?.code]);

  // Refs to prevent stale closure state & cleanly manage timeouts
  const audienceSelectionRef = useRef(null);
  const timersRef = useRef([]);

  const addTimeout = (fn, delay) => {
    const id = setTimeout(fn, delay);
    timersRef.current.push(id);
    return id;
  };

  const clearAllTimers = () => {
    timersRef.current.forEach(id => clearTimeout(id));
    timersRef.current = [];
  };

  useEffect(() => {
    if (!showPlayAlongWelcome) return;
    soundService.playCountdownTick(welcomeCountdown);

    const interval = setInterval(() => {
      setWelcomeCountdown(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          soundService.playCountdownStart();
          setTimeout(() => {
            setShowPlayAlongWelcome(false);
          }, 700);
          return 0;
        }
        soundService.playCountdownTick(prev - 1);
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [showPlayAlongWelcome]);

  // -------------------------------------------------------------
  // REAL-TIME MULTIPLAYER ROOM SYNCHRONIZATION
  // -------------------------------------------------------------
  useEffect(() => {
    if (!activeRoom?.code) return;
    const cleanCode = activeRoom.code;

    const unsub = roomService.subscribe(cleanCode, (updatedRoom) => {
      if (!updatedRoom || !updatedRoom.matchProgress) return;
      const mp = updatedRoom.matchProgress;

      // Reset activity timestamp on receiving updates from contender/room
      lastActivityTimestampRef.current = Date.now();
      setIsContenderInactive(false);

      // Handle runner-up contender promotion
      if (mp.contenderPromoted) {
        setPromotedNotice(mp.hotSeatPlayer?.name || 'Next Contender');
        isRecoveringRef.current = false;
        setTimeout(() => setPromotedNotice(null), 5000);
      }

      // 1. Sync level progression
      if (mp.currentLevel && mp.currentLevel !== spectatorLevel) {
        setSpectatorLevel(mp.currentLevel);
        setContenderStatus('THINKING');
        setContenderLockedOption(null);
        setAudienceSelection(null);
        audienceSelectionRef.current = null;
        setPlayAlongLocked(false);
        setPlayAlongResult(null);
      }

      // 2. Sync contender countdown timer
      if (typeof mp.timeRemaining === 'number') {
        setContenderTimer(mp.timeRemaining);
      }

      // 3. Sync contender locked option
      if (mp.isAnswerLocked && mp.lockedOption) {
        setContenderLockedOption(mp.lockedOption);
        setContenderStatus(mp.revealState ? 'REVEALED' : 'LOCKED');
      }

      // 4. Sync reveal state (Correct / Wrong) & evaluate user's Play Along
      if (mp.revealState) {
        setContenderStatus('REVEALED');
        if (mp.revealState === 'CORRECT') {
          soundService.playCorrect();
        } else if (mp.revealState === 'WRONG') {
          soundService.playWrong();
        }

        const userGuess = audienceSelectionRef.current;
        if (userGuess && !playAlongResult) {
          const correct = currentQ?.correctAnswer;
          setTotalQuestionsPlayed(prev => prev + 1);
          if (userGuess === correct) {
            setPlayAlongResult('CORRECT');
            setPlayAlongScore(prev => prev + 50);
            setCorrectAnswersCount(prev => prev + 1);
            addGems(5);
          } else {
            setPlayAlongResult('WRONG');
          }
        }
      }

      // 5. Sync match completion
      if (mp.isFinished) {
        setMatchEnded(true);
        try {
          confetti({
            particleCount: 100,
            spread: 80,
            origin: { y: 0.6 }
          });
        } catch {}
      }
    });

    return () => {
      if (unsub) unsub();
    };
  }, [activeRoom?.code, spectatorLevel, currentQ, playAlongResult]);

  // Contender Inactivity & Disconnect Recovery Monitor
  useEffect(() => {
    if (!activeRoom?.code || matchEnded) return;

    const checkInterval = setInterval(() => {
      const now = Date.now();
      const elapsed = now - lastActivityTimestampRef.current;

      // Inactivity threshold: 18 seconds without heartbeat or timer sync
      if (elapsed > 18000) {
        setIsContenderInactive(true);
        const remaining = Math.max(0, 28 - Math.floor(elapsed / 1000));
        setDisconnectCountdown(remaining);

        if (remaining <= 0 && !isRecoveringRef.current) {
          isRecoveringRef.current = true;
          roomService.promoteNextContender(activeRoom.code);
        }
      } else {
        setIsContenderInactive(false);
        setDisconnectCountdown(10);
      }
    }, 1000);

    return () => clearInterval(checkInterval);
  }, [activeRoom?.code, matchEnded]);

  // -------------------------------------------------------------
  // HOT-SEAT SIMULATION CYCLE PER QUESTION (SOLO BOT MATCH ONLY)
  // -------------------------------------------------------------
  useEffect(() => {
    // In real private multiplayer rooms, progression is driven live by the real human contender!
    if (activeRoom?.code) return;
    if (matchEnded || !currentQ || showPlayAlongWelcome) return;

    // Reset previous timers
    clearAllTimers();

    // Reset question state for new level
    setContenderStatus('THINKING');
    setContenderLockedOption(null);
    setContenderTimer(10);
    setAudienceSelection(null);
    audienceSelectionRef.current = null;
    setPlayAlongLocked(false);
    setPlayAlongResult(null);

    // 1. Question countdown interval
    const clockInterval = setInterval(() => {
      setContenderTimer(prev => {
        if (prev <= 1) {
          clearInterval(clockInterval);
          return 0;
        }
        soundService.playTick();
        return prev - 1;
      });
    }, 1000);

    // 2. Contender locks answer after 5 seconds (gives audience time to pick)
    addTimeout(() => {
      const correct = currentQ.correctAnswer;
      // High accuracy so spectator can enjoy multiple questions of Play Along
      const isCorrectBot = spectatorLevel <= 10 ? Math.random() > 0.12 : Math.random() > 0.30;
      const options = ['A', 'B', 'C', 'D'];
      const picked = isCorrectBot ? correct : (options.find(o => o !== correct) || 'A');

      setContenderLockedOption(picked);
      setContenderStatus('LOCKED');
      soundService.playLock();

      // Trigger audience poll lifeline at Level 5 if not triggered yet
      if (spectatorLevel === 5 && !spectatorPollActive && !pollVotedOption) {
        setSpectatorPollActive(true);
        setPollCountdown(10);
        soundService.playLifeline();
      }

      // 3. Reveal answer after 2.5 seconds suspense
      addTimeout(() => {
        setContenderStatus('REVEALED');

        const userGuess = audienceSelectionRef.current;
        if (isCorrectBot) {
          soundService.playCorrect();
        } else {
          soundService.playWrong();
        }

        // Evaluate Audience Play Along
        if (userGuess) {
          setTotalQuestionsPlayed(prev => prev + 1);
          if (userGuess === correct) {
            setPlayAlongResult('CORRECT');
            setPlayAlongScore(prev => prev + 50);
            setCorrectAnswersCount(prev => prev + 1);
            addGems(5); // +5 Gems instant reward!
          } else {
            setPlayAlongResult('WRONG');
          }
        }

        // 4. Advance or Conclude Match after 2.5 seconds
        addTimeout(() => {
          if (isCorrectBot && spectatorLevel < 15) {
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
            } catch {}
          }
        }, 2500);

      }, 2500);

    }, 5000);

    return () => {
      clearInterval(clockInterval);
      clearAllTimers();
    };
  }, [spectatorLevel, matchEnded, currentQIndex, showPlayAlongWelcome]);

  // -------------------------------------------------------------
  // AUDIENCE PLAY ALONG HANDLERS
  // -------------------------------------------------------------
  const handlePlayAlongSelect = (optionKey) => {
    if (playAlongLocked || contenderStatus === 'REVEALED') return;
    soundService.playClick();
    setAudienceSelection(optionKey);
    audienceSelectionRef.current = optionKey;
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

            {/* Landscape / Portrait Toggle */}
            <button
              type="button"
              onClick={toggleLandscapeMode}
              className="flex items-center gap-1 px-2 py-1 rounded-lg bg-navy-900 hover:bg-navy-800 border border-white/10 text-[10px] text-champGold hover:text-pearl transition"
              title="Toggle Landscape / Portrait"
            >
              <RotateCw size={12} />
              <span className="hidden sm:inline">{isLandscapeMode ? "TV" : "Phone"}</span>
            </button>

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
                {contenderStatus === 'THINKING' && t('considering')}
                {contenderStatus === 'LOCKED' && t('lockedOptionX', { option: contenderLockedOption })}
                {contenderStatus === 'REVEALED' && t('answerChecked')}
              </span>
            </div>
          </div>
        </div>

        {/* Disconnect Alert & Promotion Banner */}
        {isContenderInactive && (
          <div className="mb-2.5 p-2 rounded-xl bg-crimsonAlert/20 border border-crimsonAlert/50 flex items-center justify-between text-xs text-crimsonAlert animate-pulse">
            <div className="flex items-center gap-1.5 font-bold">
              <AlertTriangle size={15} />
              <span>हॉट सीट खिलाड़ी डिस्कनेक्ट हो गया है!</span>
            </div>
            <span className="font-mono text-[11px] bg-crimsonAlert text-white px-2 py-0.5 rounded-full font-bold">
              अगले दावेदार को मौका: {disconnectCountdown}s
            </span>
          </div>
        )}
        {promotedNotice && (
          <div className="mb-2.5 p-2 rounded-xl bg-champGold/20 border border-champGold/50 flex items-center gap-1.5 text-xs text-champGold font-bold animate-bounce">
            <Sparkles size={15} />
            <span>नए दावेदार {promotedNotice} को हॉट सीट पर प्रमोट किया गया है!</span>
          </div>
        )}
      </div>

      {/* ========================================================= */}
      {/* 2. MAIN TELECAST: LIVE QUESTION & AUDIENCE "PLAY ALONG"   */}
      {/* ========================================================= */}
      {!matchEnded ? (
        isLandscapeMode ? (
          /* ZERO-SCROLLING LANDSCAPE TV STUDIO (SIDE-BY-SIDE) */
          <div className="flex-1 w-full grid grid-cols-12 gap-3 items-center overflow-hidden min-h-0 py-0.5">
            {/* Left: Question Box */}
            <div className="col-span-6 flex flex-col justify-center h-full max-h-full overflow-hidden min-h-0">
              <KbcQuestionBox
                questionText={localizedQ?.displayText || currentQ?.text}
                levelNumber={spectatorLevel}
                totalLevels={15}
                pointsFormatted={currentTier?.label}
                subject={currentQ?.subject}
                isPadav={currentTier?.isPadav}
                questionLabel={t('questionLabel')}
                padavLabel={t('safeMilestoneBanner')}
                isCompact={true}
              />
            </div>

            {/* Right: Play-Along Options & Status */}
            <div className="col-span-6 flex flex-col justify-center h-full max-h-full overflow-hidden min-h-0">
              <div className="flex items-center justify-between px-1 mb-1">
                <span className="text-[11px] font-bold text-champGold flex items-center gap-1 uppercase tracking-wider font-cinzel">
                  <Gamepad2 size={12} className="text-champGold" />
                  <span>{t('playAlongTitle')}</span>
                </span>
                <span className="text-[10px] text-emeraldGlow-light font-semibold">
                  {t('pointsBonus')}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                {['A', 'B', 'C', 'D'].map(letter => {
                  const isAudienceSelected = audienceSelection === letter;
                  const isContenderLocked = contenderLockedOption === letter;
                  const isCorrect = currentQ?.correctAnswer === letter;

                  let status = 'IDLE';
                  let badgeText = null;

                  if (contenderStatus === 'REVEALED') {
                    if (isCorrect) {
                      status = 'CORRECT';
                    } else if (isAudienceSelected && !isCorrect) {
                      status = 'WRONG';
                    } else if (isContenderLocked && !isCorrect) {
                      status = 'WRONG';
                    }
                  } else if (isAudienceSelected) {
                    status = 'LOCKED';
                    badgeText = t('yourGuess');
                  }

                  if (isContenderLocked && !isAudienceSelected) {
                    badgeText = t('playerPick');
                  } else if (isContenderLocked && isAudienceSelected && contenderStatus !== 'REVEALED') {
                    badgeText = t('bothPicked');
                  }

                  return (
                    <KbcOptionButton
                      key={letter}
                      letter={letter}
                      text={localizedQ?.displayOptions?.[letter] || currentQ?.options[letter]}
                      status={status}
                      badgeText={badgeText}
                      disabled={playAlongLocked || contenderStatus === 'REVEALED'}
                      isCompact={true}
                      onClick={() => handlePlayAlongSelect(letter)}
                    />
                  );
                })}
              </div>

              {/* Feedback banner after reveal */}
              {playAlongResult && (
                <div className={`mt-2 p-1.5 rounded-xl text-[11px] font-bold text-center flex items-center justify-center gap-1.5 animate-fadeIn ${
                  playAlongResult === 'CORRECT'
                    ? 'bg-emeraldGlow/20 border border-emeraldGlow text-emeraldGlow-light'
                    : 'bg-navy-900 border border-white/10 text-slate-300'
                }`}>
                  {playAlongResult === 'CORRECT' ? (
                    <>
                      <CheckCircle2 size={13} />
                      <span>{t('bingoCorrect')}</span>
                    </>
                  ) : (
                    <>
                      <XCircle size={13} />
                      <span>{t('wrongGuess')}</span>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        ) : (
          /* PORTRAIT LAYOUT */
          <div className="my-auto space-y-3">
            {/* Authentic Metallic Question Frame */}
            <KbcQuestionBox
              questionText={localizedQ?.displayText || currentQ?.text}
              levelNumber={spectatorLevel}
              totalLevels={15}
              pointsFormatted={currentTier?.label}
              subject={currentQ?.subject}
              isPadav={currentTier?.isPadav}
              questionLabel={t('questionLabel')}
              padavLabel={t('safeMilestoneBanner')}
              isCompact={false}
            />

            {/* "Play Along" Prompt Header */}
            <div className="flex items-center justify-between px-1">
              <span className="text-[11px] sm:text-xs font-bold text-champGold flex items-center gap-1 uppercase tracking-wider font-cinzel">
                <Gamepad2 size={13} className="text-champGold" />
                {t('playAlongTitle')}
              </span>
              <span className="text-[10px] sm:text-xs text-emeraldGlow-light font-semibold">
                {t('pointsBonus')}
              </span>
            </div>

            {/* 4 Interactive Options in 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
              {['A', 'B', 'C', 'D'].map(letter => {
                const isAudienceSelected = audienceSelection === letter;
                const isContenderLocked = contenderLockedOption === letter;
                const isCorrect = currentQ?.correctAnswer === letter;

                let status = 'IDLE';
                let badgeText = null;

                if (contenderStatus === 'REVEALED') {
                  if (isCorrect) {
                    status = 'CORRECT';
                  } else if (isAudienceSelected && !isCorrect) {
                    status = 'WRONG';
                  } else if (isContenderLocked && !isCorrect) {
                    status = 'WRONG';
                  }
                } else if (isAudienceSelected) {
                  status = 'LOCKED';
                  badgeText = t('yourGuess');
                }

                if (isContenderLocked && !isAudienceSelected) {
                  badgeText = t('playerPick');
                } else if (isContenderLocked && isAudienceSelected && contenderStatus !== 'REVEALED') {
                  badgeText = t('bothPicked');
                }

                return (
                  <KbcOptionButton
                    key={letter}
                    letter={letter}
                    text={localizedQ?.displayOptions?.[letter] || currentQ?.options[letter]}
                    status={status}
                    badgeText={badgeText}
                    disabled={playAlongLocked || contenderStatus === 'REVEALED'}
                    isCompact={false}
                    onClick={() => handlePlayAlongSelect(letter)}
                  />
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
                    <span>{t('bingoCorrect')}</span>
                  </>
                ) : (
                  <>
                    <XCircle size={15} />
                    <span>{t('wrongGuess')}</span>
                  </>
                )}
              </div>
            )}
          </div>
        )
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

          {/* Social Play Along Connection */}
          {spectatorPlayer && (
            <div className="p-2.5 rounded-xl bg-navy-950/80 border border-white/10 flex items-center justify-between gap-2 text-xs text-left">
              <div className="flex items-center gap-2 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-navy-800 flex items-center justify-center text-sm shrink-0">
                  {spectatorPlayer.avatar || '👦'}
                </div>
                <div className="min-w-0">
                  <span className="font-bold text-pearl block leading-tight truncate">
                    {spectatorPlayer.name}
                  </span>
                  <span className="text-[10px] text-slate-400">Played Together in Hot Seat</span>
                </div>
              </div>
              <button
                type="button"
                onClick={async () => {
                  soundService.playClick();
                  await friendService.sendFriendRequest(currentUser, spectatorPlayer);
                  setHasSentContenderRequest(true);
                }}
                disabled={hasSentContenderRequest}
                className="px-2.5 py-1 rounded-lg bg-champGold/20 hover:bg-champGold/30 border border-champGold/40 text-champGold font-bold text-[11px] shrink-0 transition flex items-center gap-1"
              >
                <UserPlus size={12} />
                <span>{hasSentContenderRequest ? 'Request Sent' : 'Add Friend'}</span>
              </button>
            </div>
          )}

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
                  {t('audiencePollTriggered')}
                </h4>
              </div>
              <span className="text-xs font-mono font-bold text-crimsonAlert bg-crimsonAlert/10 px-2 py-0.5 rounded border border-crimsonAlert/30">
                00:0{pollCountdown}s
              </span>
            </div>

            <p className="text-xs text-pearl mb-3">
              {t('voteNowNotice', { name: spectatorPlayer?.name || 'Contender' })}
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
                {t('voteRecorded')}
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
            {t('sendReaction')}
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

      {/* ========================================================= */}
      {/* 6. BIG CENTER PLAY ALONG ANNOUNCEMENT & KBC CLOCK MODAL   */}
      {/* ========================================================= */}
      {showPlayAlongWelcome && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/92 backdrop-blur-md animate-fade-in">
          {/* Glowing Aura Background */}
          <div className="absolute w-96 h-96 rounded-full bg-gradient-to-tr from-cyan-500/20 via-velvet-800/30 to-champGold/20 blur-3xl pointer-events-none" />

          {/* Modal Container */}
          <div className="relative w-full max-w-sm rounded-3xl p-6 bg-gradient-to-b from-navy-900/98 to-velvet-950/98 border-2 border-cyan-400/40 shadow-[0_0_50px_rgba(6,182,212,0.25)] text-center flex flex-col items-center">
            
            {/* Top Live Badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/50 text-cyan-300 text-xs font-bold tracking-widest uppercase mb-3 shadow">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="font-rajdhani">{t('playAlongModalBadge')}</span>
            </div>

            {/* Contender context */}
            <div className="flex items-center gap-2 p-2 rounded-xl bg-navy-950/80 border border-white/10 mb-3 w-full justify-center">
              <span className="text-xl">{spectatorPlayer?.avatar || '👑'}</span>
              <div className="text-left text-xs">
                <span className="text-slate-400 block text-[10px]">{t('winnerBadge')}:</span>
                <span className="font-bold text-pearl">{spectatorPlayer?.name || 'Contender'} ({spectatorPlayer?.city || 'India'})</span>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-extrabold text-pearl font-cinzel tracking-wider uppercase mb-1 drop-shadow">
              {t('playAlongModalTitle')}
            </h3>
            
            <p className="text-xs text-slate-300 mb-3 leading-relaxed">
              {t('playAlongModalSubtext')}
            </p>

            {/* Feature Perks Chips */}
            <div className="grid grid-cols-2 gap-2 w-full mb-4 text-[10px]">
              <div className="p-2 rounded-xl bg-navy-950/70 border border-emeraldGlow/30 text-emeraldGlow-light flex items-center gap-1.5 justify-center">
                <span>💎</span>
                <span><strong>{t('gemsPerCorrect')}</strong></span>
              </div>
              <div className="p-2 rounded-xl bg-navy-950/70 border border-champGold/30 text-champGold flex items-center gap-1.5 justify-center">
                <span>⭐</span>
                <span><strong>{t('ptsPerCorrect')}</strong></span>
              </div>
            </div>

            {/* Dramatic Countdown Clock Section */}
            <div className="w-full pt-2 border-t border-white/10 flex flex-col items-center">
              <span className="text-[11px] font-bold text-champGold uppercase tracking-wider mb-1 font-rajdhani">
                {t('firstQArrivesIn')}
              </span>

              {/* Countdown Circular Display */}
              <div className="relative w-28 h-28 flex items-center justify-center my-1">
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-400/40 animate-spin-slow" />
                <div className="absolute inset-1 rounded-full bg-gradient-to-b from-velvet-900 to-navy-950 shadow-inner" />
                
                <span className="relative z-10 text-5xl font-black font-rajdhani text-transparent bg-clip-text bg-gradient-to-b from-pearl via-cyan-300 to-cyan-500 drop-shadow-[0_4px_16px_rgba(6,182,212,0.6)] animate-scale-up">
                  {welcomeCountdown > 0 ? welcomeCountdown : 'START!'}
                </span>
              </div>

              <span className="text-[10px] text-slate-400 mt-1 font-medium">
                {t('playAlongReadyNote')}
              </span>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
