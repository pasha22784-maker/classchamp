/**
 * GameContext.jsx
 * Central Game State Machine for ClassChamp.
 * Manages 10-Player Lobby, FFF ordering, Hot-Seat ladder, lifelines, spectator mode, and rewards.
 */

import React, { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react';
import { useAuth } from './AuthContext';
import questionEngine, { LADDER_TIERS } from '../services/questionEngine';
import storageService from '../services/storageService';
import soundService from '../services/soundService';
import botService from '../services/botService';
import examCategoryService from '../services/examCategoryService';
import fairPlayService from '../services/fairPlayService';
import clanBattleService from '../services/clanBattleService';
import roomService from '../services/roomService';
import friendService from '../services/friendService';
import { getTranslation, LANGUAGES } from '../services/localizationService';

const GameContext = createContext();

export function GameProvider({ children }) {
  const { currentUser, updateTrophies, addGems } = useAuth();

  // Active Screen: 'HOME' | 'LOBBY' | 'FFF' | 'HOTSEAT' | 'SPECTATOR' | 'RESULT' | 'STORE' | 'ADMIN'
  const [screen, setScreen] = useState('HOME');

  // Match configuration
  const [activeDivision, setActiveDivision] = useState('Junior');
  const [selectedGrade, setSelectedGrade] = useState(() => currentUser?.grade || 3);
  const [matchFairPlay, setMatchFairPlay] = useState(null);
  const [lobbyPlayers, setLobbyPlayers] = useState([]);
  const [fffQuestion, setFffQuestion] = useState(null);
  const [fffWinner, setFffWinner] = useState(null);
  const [fffResults, setFffResults] = useState([]);

  // Hot Seat Match state
  const [hotSeatQuestions, setHotSeatQuestions] = useState([]);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [lockedOption, setLockedOption] = useState(null);
  const [isAnswerLocked, setIsAnswerLocked] = useState(false);
  const [sessionAnswers, setSessionAnswers] = useState({}); // { qIndex -> optionKey }
  const [revealState, setRevealState] = useState(null); // null | 'CORRECT' | 'WRONG'
  const [showNextPromptModal, setShowNextPromptModal] = useState(false);
  const [timerRemaining, setTimerRemaining] = useState(30);
  const [isTimerPaused, setIsTimerPaused] = useState(false);

  // Lifelines: { fiftyFifty: bool, audiencePoll: bool, guruHint: bool, timeFreeze: bool }
  const [lifelinesUsed, setLifelinesUsed] = useState({
    fiftyFifty: false,
    audiencePoll: false,
    guruHint: false,
    timeFreeze: false
  });
  const [eliminatedOptions, setEliminatedOptions] = useState([]);
  const [audiencePollData, setAudiencePollData] = useState(null);
  const [activeGuruHint, setActiveGuruHint] = useState(null);

  // Orientation & Viewport Mode: 'landscape' | 'portrait'
  // Auto-transitions to landscape when game starts, player can toggle anytime!
  const [isLandscapeMode, setIsLandscapeMode] = useState(false);
  const [hasSeenHotSeatIntro, setHasSeenHotSeatIntro] = useState(false);

  // Language Mode: 'bilingual' | 'hi' | 'en'
  const [languageMode, setLanguageModeState] = useState(() => {
    try {
      return localStorage.getItem('brainleague_lang') || 'bilingual';
    } catch {
      return 'bilingual';
    }
  });

  const setLanguageMode = (newLang) => {
    soundService.playClick();
    setLanguageModeState(newLang);
    try {
      localStorage.setItem('brainleague_lang', newLang);
    } catch {}
  };

  const t = (key, params) => getTranslation(languageMode, key, params);

  // Settings modal visibility state
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const openSettings = () => {
    soundService.playClick();
    setIsSettingsOpen(true);
  };
  const closeSettings = () => {
    setIsSettingsOpen(false);
  };

  // PUBG-Style Friends & Social Center modal state
  const [isFriendsOpen, setIsFriendsOpen] = useState(false);
  const openFriends = () => {
    soundService.playClick();
    setIsFriendsOpen(true);
  };
  const closeFriends = () => {
    setIsFriendsOpen(false);
  };

  // Compulsory First-Time App Tour Guide state
  const [isTourOpen, setIsTourOpen] = useState(() => {
    try {
      const completed = localStorage.getItem('brainleague_has_completed_tour');
      return completed !== 'true';
    } catch {
      return false;
    }
  });
  const openTour = () => {
    soundService.playClick();
    setIsTourOpen(true);
  };
  const closeTour = () => {
    setIsTourOpen(false);
  };

  // PUBG-Style Presence Heartbeat across the app
  useEffect(() => {
    if (!currentUser?.id) return;
    const unsub = friendService.startPresenceHeartbeat(currentUser, () => {
      if (['HOTSEAT', 'FFF', 'CLAN_BATTLE_MATCH'].includes(screen)) return 'IN_MATCH';
      if (['LOBBY', 'PRIVATE_ROOM', 'CLAN_BATTLE_LOBBY'].includes(screen)) return 'IN_LOBBY';
      return 'ONLINE';
    });
    return unsub;
  }, [currentUser, screen]);

  // Champion's / Open Division Competitive Exam Category
  const [examCategory, setExamCategoryState] = useState(() => examCategoryService.getActiveCategory());
  const setExamCategory = (newCat) => {
    soundService.playClick();
    setExamCategoryState(newCat);
    examCategoryService.setActiveCategory(newCat);
  };

  // Live Spectator & Audience Play-Along State
  const [selectedLiveMatch, setSelectedLiveMatch] = useState(null);

  // 4v4 Clan Battle launcher
  const startClanBattle = (division = 'Senior', clanName = 'Clan Alpha') => {
    const room = clanBattleService.createRoom(currentUser, division, clanName);
    setScreen('CLAN_BATTLE_LOBBY');
    return room;
  };

  // 5-Second Disappearing Orientation Hint Pill State
  const [showOrientationHint, setShowOrientationHint] = useState(false);
  const orientationHintTimeoutRef = useRef(null);

  const triggerOrientationHint = useCallback(() => {
    if (orientationHintTimeoutRef.current) {
      clearTimeout(orientationHintTimeoutRef.current);
    }
    setShowOrientationHint(true);
    orientationHintTimeoutRef.current = setTimeout(() => {
      setShowOrientationHint(false);
    }, 5000);
  }, []);

  // Cleanup hint timer on unmount
  useEffect(() => {
    return () => {
      if (orientationHintTimeoutRef.current) {
        clearTimeout(orientationHintTimeoutRef.current);
      }
    };
  }, []);

  const toggleLandscapeMode = () => {
    soundService.playClick();
    setIsLandscapeMode(prev => {
      const next = !prev;
      try {
        if (typeof window !== 'undefined' && window.screen?.orientation) {
          if (next && window.screen.orientation.lock) {
            window.screen.orientation.lock('landscape').catch(() => {});
          } else if (!next && window.screen.orientation.lock) {
            window.screen.orientation.lock('portrait').catch(() => {
              if (window.screen.orientation.unlock) window.screen.orientation.unlock();
            });
          }
        }
      } catch (e) {}
      return next;
    });
    // Immediately dismiss hint on manual tap
    setShowOrientationHint(false);
  };

  // Listen to orientation change events and show orientation hint if in game screens
  useEffect(() => {
    const handleOrientationChange = () => {
      if (['LOBBY', 'FFF', 'HOTSEAT', 'SPECTATOR'].includes(screen)) {
        triggerOrientationHint();
      }
    };

    window.addEventListener('orientationchange', handleOrientationChange);
    if (window.screen?.orientation) {
      window.screen.orientation.addEventListener('change', handleOrientationChange);
    }
    let mql = null;
    try {
      mql = window.matchMedia?.('(orientation: portrait)');
      mql?.addEventListener?.('change', handleOrientationChange);
    } catch (e) {}

    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
      if (window.screen?.orientation) {
        window.screen.orientation.removeEventListener('change', handleOrientationChange);
      }
      try {
        mql?.removeEventListener?.('change', handleOrientationChange);
      } catch (e) {}
    };
  }, [screen, triggerOrientationHint]);

  // Final Match Result
  const [matchResult, setMatchResult] = useState({
    pointsWon: 0,
    guaranteedPoints: 0,
    levelReached: 0,
    trophyDelta: 0,
    isWinner: false,
    wasWalkAway: false
  });

  // Live Spectator Mode
  const [spectatorPlayer, setSpectatorPlayer] = useState(null);
  const [spectatorLevel, setSpectatorLevel] = useState(1);
  const [spectatorPollActive, setSpectatorPollActive] = useState(false);
  const [spectatorVoted, setSpectatorVoted] = useState(null);
  const [floatingEmojis, setFloatingEmojis] = useState([]);

  // Sync active division with current user on profile change
  useEffect(() => {
    if (currentUser?.division) {
      setActiveDivision(currentUser.division);
    }
    if (currentUser?.grade) {
      setSelectedGrade(Number(currentUser.grade));
    }
  }, [currentUser]);

  // Private Room Match state
  const [activeRoom, setActiveRoom] = useState(null);

  // Real-time synchronization subscription for Private Multiplayer Rooms
  useEffect(() => {
    if (!activeRoom?.code) return;
    const cleanCode = activeRoom.code;

    const unsub = roomService.subscribe(cleanCode, (updatedRoom) => {
      if (!updatedRoom) return;

      setActiveRoom(updatedRoom);

      // Keep shared questions synchronized across devices
      if (updatedRoom.fffQuestion) {
        setFffQuestion(prev => (!prev || prev.id !== updatedRoom.fffQuestion.id ? updatedRoom.fffQuestion : prev));
      }
      if (updatedRoom.hotSeatQuestions && updatedRoom.hotSeatQuestions.length === 15) {
        setHotSeatQuestions(prev => (!prev || prev.length !== 15 ? updatedRoom.hotSeatQuestions : prev));
      }

      // Synchronize live FFF submissions & determine single winner across all devices
      if (updatedRoom.fffResults) {
        const sortedResults = Object.values(updatedRoom.fffResults).sort((a, b) => {
          if (a.isCorrect && !b.isCorrect) return -1;
          if (!a.isCorrect && b.isCorrect) return 1;
          return a.timeTaken - b.timeTaken;
        });
        setFffResults(sortedResults);
        if (sortedResults.length > 0) {
          setFffWinner(sortedResults[0]);
        }
      }

      // Synchronize Hot Seat contender
      if (updatedRoom.matchProgress?.hotSeatPlayer) {
        setSpectatorPlayer(updatedRoom.matchProgress.hotSeatPlayer);
      }
    });

    return () => {
      if (unsub) unsub();
    };
  }, [activeRoom?.code]);

  // Navigate between screens
  const navigateTo = (newScreen) => {
    soundService.playClick();
    if (['HOME', 'STORE', 'ADMIN', 'PRIVATE_ROOM', 'JOIN_ROOM', 'CLAN'].includes(newScreen)) {
      setIsLandscapeMode(false);
    }
    setScreen(newScreen);
  };

  // Start Matchmaking: enters 10-player lobby
  const startMatch = (division, customGrade = null) => {
    const selectedDivision = division || activeDivision;
    setActiveDivision(selectedDivision);
    setActiveRoom(null);

    const gradeToUse = customGrade || (
      selectedDivision === 'Junior'
        ? (selectedGrade || currentUser?.grade || 3)
        : (selectedDivision === 'Senior' ? (selectedGrade || currentUser?.grade || 8) : null)
    );
    if (gradeToUse) {
      setSelectedGrade(Number(gradeToUse));
    }

    const fairPlay = fairPlayService.evaluateMatchPlay(currentUser, selectedDivision, gradeToUse);
    setMatchFairPlay(fairPlay);

    // Auto-enter Landscape Mode on match start & Request Fullscreen
    setIsLandscapeMode(true);
    try {
      if (typeof window !== 'undefined') {
        if (window.screen?.orientation?.lock) {
          window.screen.orientation.lock('landscape').catch(() => {});
        }
        if (document.documentElement?.requestFullscreen && !document.fullscreenElement) {
          document.documentElement.requestFullscreen().catch(() => {});
        }
      }
    } catch (e) {}
    triggerOrientationHint();

    // Reset lifelines & match state
    setLifelinesUsed({
      fiftyFifty: false,
      audiencePoll: false,
      guruHint: false,
      timeFreeze: false
    });
    setEliminatedOptions([]);
    setAudiencePollData(null);
    setActiveGuruHint(null);
    setLockedOption(null);
    setIsAnswerLocked(false);
    setRevealState(null);
    setShowNextPromptModal(false);
    setCurrentQIndex(0);
    setSessionAnswers({});
    setHasSeenHotSeatIntro(false);

    // Prepare questions
    const allQuestions = storageService.getQuestions();
    const fff = questionEngine.getFFFQuestion(allQuestions, selectedDivision, currentUser?.id, examCategory, gradeToUse);
    const hotSeat = questionEngine.getHotSeatMatchQuestions(allQuestions, selectedDivision, currentUser?.id, examCategory, gradeToUse);

    setFffQuestion(fff);
    setHotSeatQuestions(hotSeat);

    // Register all match questions immediately into 6-month zero-repeat tracker (User + Device level)
    const matchQuestionIds = [fff?.id, ...(hotSeat || []).map(q => q.id)].filter(Boolean);
    questionEngine.recordQuestionsEncountered(currentUser?.id, matchQuestionIds);

    setScreen('LOBBY');
  };

  // Start Private Match with Friends (Up to 10 players)
  const startPrivateMatch = (room, customGrade = null) => {
    const selectedDivision = room?.division || activeDivision;
    setActiveDivision(selectedDivision);
    setActiveRoom(room);

    const gradeToUse = customGrade || (
      selectedDivision === 'Junior'
        ? (selectedGrade || currentUser?.grade || 3)
        : (selectedDivision === 'Senior' ? (selectedGrade || currentUser?.grade || 8) : null)
    );
    if (gradeToUse) {
      setSelectedGrade(Number(gradeToUse));
    }

    const fairPlay = fairPlayService.evaluateMatchPlay(currentUser, selectedDivision, gradeToUse);
    setMatchFairPlay(fairPlay);

    // Auto-enter Landscape Mode on match start & Request Fullscreen
    setIsLandscapeMode(true);
    try {
      if (typeof window !== 'undefined') {
        if (window.screen?.orientation?.lock) {
          window.screen.orientation.lock('landscape').catch(() => {});
        }
        if (document.documentElement?.requestFullscreen && !document.fullscreenElement) {
          document.documentElement.requestFullscreen().catch(() => {});
        }
      }
    } catch (e) {}
    triggerOrientationHint();

    // Reset lifelines & match state
    setLifelinesUsed({
      fiftyFifty: false,
      audiencePoll: false,
      guruHint: false,
      timeFreeze: false
    });
    setEliminatedOptions([]);
    setAudiencePollData(null);
    setActiveGuruHint(null);
    setLockedOption(null);
    setIsAnswerLocked(false);
    setRevealState(null);
    setShowNextPromptModal(false);
    setCurrentQIndex(0);
    setSessionAnswers({});
    setHasSeenHotSeatIntro(false);

    // Prepare questions: prioritize room's shared questions so all players see identical questions!
    const allQuestions = storageService.getQuestions();
    const fff = (room?.fffQuestion)
      ? room.fffQuestion
      : questionEngine.getFFFQuestion(allQuestions, selectedDivision, currentUser?.id, examCategory, gradeToUse);
    const hotSeat = (room?.hotSeatQuestions && room.hotSeatQuestions.length === 15)
      ? room.hotSeatQuestions
      : questionEngine.getHotSeatMatchQuestions(allQuestions, selectedDivision, currentUser?.id, examCategory, gradeToUse);

    setFffQuestion(fff);
    setHotSeatQuestions(hotSeat);

    // Register all match questions immediately into 6-month zero-repeat tracker (User + Device level)
    const matchQuestionIds = [fff?.id, ...(hotSeat || []).map(q => q.id)].filter(Boolean);
    questionEngine.recordQuestionsEncountered(currentUser?.id, matchQuestionIds);

    // Construct 10-player pool with real joined friends + bot fillers if < 10
    const friends = (room?.players || []).map(p => ({
      id: p.id,
      name: p.name,
      city: p.isHost ? 'Room Host' : 'Friend Contender',
      avatar: p.avatar || '🎮',
      isHuman: p.id === currentUser?.id,
      isFriend: true,
      ready: true
    }));

    const neededBots = Math.max(0, 10 - friends.length);
    let bots = [];
    if (room?.bots && room.bots.length >= neededBots) {
      bots = room.bots.slice(0, neededBots);
    } else if (neededBots > 0) {
      bots = botService.generateBots(neededBots, selectedDivision, friends.map(f => f.name));
    }

    const finalPool = [...friends, ...bots];
    setLobbyPlayers(finalPool);

    // Seed initial fffResults if room has pre-generated results
    if (room?.fffResults) {
      const sorted = Object.values(room.fffResults).sort((a, b) => {
        if (a.isCorrect && !b.isCorrect) return -1;
        if (!a.isCorrect && b.isCorrect) return 1;
        return a.timeTaken - b.timeTaken;
      });
      setFffResults(sorted);
      if (sorted.length > 0) {
        setFffWinner(sorted[0]);
      }
    }

    // Record room players into Recent Players list for easy Friend adding
    if (currentUser?.id && room?.players?.length > 0) {
      friendService.recordRecentPlayers(currentUser.id, room.players, 'Private Room Game');
    }

    // Start directly with Fastest Finger First round
    setScreen('FFF');
  };

  // Trigger FFF round after lobby fills
  const startFFF = (players) => {
    setLobbyPlayers(players);
    setScreen('FFF');
  };

  // Submit FFF sequence (e.g. 'B,D,C,A')
  const submitFFF = async (playerSequence, timeTakenSeconds) => {
    if (!fffQuestion) return;

    const isCorrect = playerSequence === fffQuestion.correctAnswer;
    const botSettings = storageService.getBotSettings();

    // Record answer in 180-day zero-repeat tracker (User + Device)
    questionEngine.recordAnswer(currentUser?.id, fffQuestion.id, isCorrect);

    // Record all match contenders into Recent Players list for social connecting
    if (currentUser?.id && lobbyPlayers?.length > 0) {
      friendService.recordRecentPlayers(currentUser.id, lobbyPlayers, 'Fastest Finger First');
    }

    // Private Multiplayer Room: Broadcast submission so all devices see the unified leaderboard!
    if (activeRoom?.code) {
      const playerResult = {
        id: currentUser?.id,
        name: currentUser?.name || 'Contender',
        avatar: currentUser?.avatar || '🎮',
        isHuman: true,
        isFriend: true,
        isCorrect,
        timeTaken: timeTakenSeconds,
        timeFormatted: `${timeTakenSeconds.toFixed(2)}s`
      };
      const updated = await roomService.submitPlayerFFF(activeRoom.code, playerResult);
      if (updated?.fffResults) {
        const sorted = Object.values(updated.fffResults).sort((a, b) => {
          if (a.isCorrect && !b.isCorrect) return -1;
          if (!a.isCorrect && b.isCorrect) return 1;
          return a.timeTaken - b.timeTaken;
        });
        setFffResults(sorted);
        const winner = sorted[0];
        setFffWinner(winner);
        if (winner?.id === currentUser?.id) {
          soundService.playCorrect();
        }
      }
      return;
    }

    // Evaluate bot completion times in solo mode
    const [minSpeed, maxSpeed] = activeDivision === 'Junior'
      ? botSettings.juniorBotSpeedRange
      : activeDivision === 'Senior'
        ? botSettings.seniorBotSpeedRange
        : botSettings.openBotSpeedRange;

    const results = lobbyPlayers.map(p => {
      if (p.isHuman) {
        return {
          ...p,
          isCorrect,
          timeTaken: timeTakenSeconds,
          timeFormatted: `${timeTakenSeconds.toFixed(2)}s`
        };
      } else {
        // Calibrate bot performance
        const botCorrect = Math.random() > 0.25; // 75% accuracy
        let botTime = +(Math.random() * (maxSpeed - minSpeed) + minSpeed).toFixed(2);

        // Single-player safeguard guarantee
        if (botSettings.guaranteedHumanWinInSinglePlayer && isCorrect) {
          if (botTime <= timeTakenSeconds) {
            botTime = +(timeTakenSeconds + Math.random() * 1.5 + 0.5).toFixed(2);
          }
        }

        return {
          ...p,
          isCorrect: botCorrect,
          timeTaken: botTime,
          timeFormatted: `${botTime}s`
        };
      }
    });

    // Sort: Correct answers first sorted by fastest time
    results.sort((a, b) => {
      if (a.isCorrect && !b.isCorrect) return -1;
      if (!a.isCorrect && b.isCorrect) return 1;
      return a.timeTaken - b.timeTaken;
    });

    setFffResults(results);
    const winner = results[0];
    setFffWinner(winner);

    // Auto-route: If bot wins -> Spectator Mode after 3.2s.
    // If human wins -> FFFScreen displays the grand HotSeatWinnerModal & 5-second countdown!
    if (winner.isHuman) {
      soundService.playCorrect();
    } else {
      setTimeout(() => {
        setSpectatorPlayer(winner);
        setSpectatorLevel(1);
        setScreen('SPECTATOR');
      }, 4800);
    }
  };

  // Hot Seat: Lock an answer
  const lockAnswer = (optionKey) => {
    if (isAnswerLocked || revealState) return;
    setLockedOption(optionKey);
    setIsAnswerLocked(true);
    setSessionAnswers(prev => ({ ...prev, [currentQIndex]: optionKey }));
    soundService.playLock();

    // Broadcast lock to all room spectators in real-time
    if (activeRoom?.code) {
      roomService.syncMatchProgress(activeRoom.code, {
        currentLevel: currentQIndex + 1,
        lockedOption: optionKey,
        isAnswerLocked: true,
        revealState: null
      });
    }

    const currentQ = hotSeatQuestions[currentQIndex];
    const isCorrect = optionKey === currentQ.correctAnswer;

    // Record in 180-day zero-repeat tracker (User + Device)
    questionEngine.recordAnswer(currentUser?.id, currentQ.id, isCorrect);

    // Dramatic reveal after 1.8 seconds suspense
    setTimeout(() => {
      if (isCorrect) {
        soundService.playCorrect();
        setRevealState('CORRECT');

        if (activeRoom?.code) {
          roomService.syncMatchProgress(activeRoom.code, {
            currentLevel: currentQIndex + 1,
            lockedOption: optionKey,
            isAnswerLocked: true,
            revealState: 'CORRECT'
          });
        }

        // Check if won Crore (Q15)
        if (currentQIndex === 14) {
          setTimeout(() => {
            finishMatch({
              wonLevel: 15,
              points: 10000000,
              isWinner: true,
              wasWalkAway: false
            });
          }, 2000);
        } else {
          // Pause timer during interstitial composure
          setIsTimerPaused(true);
          // Show "Next Question is for XXXXXX Points" modal after celebration
          setTimeout(() => {
            setShowNextPromptModal(true);
          }, 1400);
        }
      } else {
        soundService.playWrong();
        setRevealState('WRONG');

        if (activeRoom?.code) {
          roomService.syncMatchProgress(activeRoom.code, {
            currentLevel: currentQIndex + 1,
            lockedOption: optionKey,
            isAnswerLocked: true,
            revealState: 'WRONG'
          });
        }

        setTimeout(() => {
          handleDropOut(currentQIndex);
        }, 2000);
      }
    }, 1800);
  };

  // Advance to next question
  const advanceToNextQuestion = () => {
    const nextIdx = currentQIndex + 1;
    setCurrentQIndex(nextIdx);
    setLockedOption(null);
    setIsAnswerLocked(false);
    setRevealState(null);
    setShowNextPromptModal(false);
    setEliminatedOptions([]);
    setAudiencePollData(null);
    setActiveGuruHint(null);
    setIsTimerPaused(false);

    const nextQ = hotSeatQuestions[nextIdx];
    const newTimer = nextQ?.tierMeta?.timeLimit || 45;
    setTimerRemaining(newTimer);

    if (activeRoom?.code) {
      roomService.syncMatchProgress(activeRoom.code, {
        currentLevel: nextIdx + 1,
        lockedOption: null,
        isAnswerLocked: false,
        revealState: null,
        timeRemaining: newTimer,
        eliminatedOptions: []
      });
    }
  };

  const proceedToNextQuestion = () => {
    setShowNextPromptModal(false);
    advanceToNextQuestion();
  };

  // Handle wrong answer / drop
  const handleDropOut = (failedIndex) => {
    // Determine safe milestone guaranteed points
    let guaranteed = 0;
    if (failedIndex >= 9) { // Passed Q10 (Level 10)
      guaranteed = 320000;
    } else if (failedIndex >= 4) { // Passed Q5 (Level 5)
      guaranteed = 10000;
    }

    finishMatch({
      wonLevel: failedIndex,
      points: guaranteed,
      isWinner: false,
      wasWalkAway: false
    });
  };

  // Player voluntary walk away / quit
  const walkAway = () => {
    if (isAnswerLocked || revealState) return;
    const currentPoints = currentQIndex > 0 ? LADDER_TIERS[currentQIndex - 1].points : 0;
    finishMatch({
      wonLevel: currentQIndex,
      points: currentPoints,
      isWinner: false,
      wasWalkAway: true
    });
  };

  // Time Out handler
  const handleTimeOut = () => {
    soundService.playWrong();
    const currentQ = hotSeatQuestions[currentQIndex];
    if (currentQ?.id) {
      questionEngine.recordAnswer(currentUser?.id, currentQ.id, false);
    }
    handleDropOut(currentQIndex);
  };

  // Conclude match and compute ELO Trophies
  const finishMatch = ({ wonLevel, points, isWinner, wasWalkAway }) => {
    let finalPoints = points;
    let trophyDelta = 0;

    if (activeRoom?.code) {
      roomService.syncMatchProgress(activeRoom.code, {
        isFinished: true,
        wonLevel,
        points: finalPoints
      });
    }

    const isDownward = matchFairPlay?.status === 'DOWNWARD_PRACTICE';
    const isUpward = matchFairPlay?.status === 'UPWARD_CHALLENGE';

    if (isDownward) {
      // Anti-Bullying Fair Play Rule:
      // Strictly 0 Points, 0 Trophies to protect younger children!
      finalPoints = 0;
      trophyDelta = 0;
      if (currentUser?.id) {
        storageService.recordDownwardPractice(currentUser.id);
      }
    } else {
      // ELO Math: High progression or win = +25 Trophies, early elimination (below Q5) = -10 Trophies
      if (isWinner || wonLevel >= 10) {
        trophyDelta = 25;
      } else if (wonLevel >= 5 || wasWalkAway) {
        trophyDelta = 10;
      } else {
        trophyDelta = -10;
      }

      // Upward Challenger Bonus (+25% trophies on positive gains)
      if (isUpward && trophyDelta > 0) {
        trophyDelta = Math.round(trophyDelta * 1.25);
      }

      updateTrophies(trophyDelta);

      // Update Clan average rating & statistics
      if (currentUser?.id) {
        storageService.recordClanMatchForUser(currentUser.id, trophyDelta, finalPoints);
      }
    }

    setMatchResult({
      pointsWon: finalPoints,
      levelReached: wonLevel,
      trophyDelta,
      isWinner,
      wasWalkAway,
      fairPlay: matchFairPlay
    });

    setScreen('RESULT');
  };

  // ----------------------------------------
  // 4 LIFELINES
  // ----------------------------------------
  // Lifeline 1: 50:50
  const useFiftyFifty = () => {
    if (lifelinesUsed.fiftyFifty || isAnswerLocked) return;
    soundService.playLifeline();

    const currentQ = hotSeatQuestions[currentQIndex];
    const correct = currentQ.correctAnswer;
    const wrongOptions = ['A', 'B', 'C', 'D'].filter(o => o !== correct);
    const shuffledWrong = questionEngine.shuffle(wrongOptions);
    const toEliminate = shuffledWrong.slice(0, 2);

    setEliminatedOptions(toEliminate);
    setLifelinesUsed(prev => ({ ...prev, fiftyFifty: true }));

    if (activeRoom?.code) {
      roomService.syncMatchProgress(activeRoom.code, {
        eliminatedOptions: toEliminate
      });
    }
  };

  // Lifeline 2: Audience Poll
  const useAudiencePoll = () => {
    if (lifelinesUsed.audiencePoll || isAnswerLocked) return;
    soundService.playLifeline();

    const currentQ = hotSeatQuestions[currentQIndex];
    const correct = currentQ.correctAnswer;

    // Realistic percentage distribution heavily favoring correct answer (60-80%)
    const correctPct = Math.floor(Math.random() * 20) + 60;
    const remaining = 100 - correctPct;
    const otherKeys = ['A', 'B', 'C', 'D'].filter(k => k !== correct);
    const split1 = Math.floor(Math.random() * (remaining - 4)) + 2;
    const split2 = Math.floor(Math.random() * (remaining - split1 - 2)) + 1;
    const split3 = remaining - split1 - split2;

    const pollData = {
      [correct]: correctPct,
      [otherKeys[0]]: split1,
      [otherKeys[1]]: split2,
      [otherKeys[2]]: split3
    };

    setAudiencePollData(pollData);
    setLifelinesUsed(prev => ({ ...prev, audiencePoll: true }));
  };

  // Lifeline 3: Ask the AI Guru
  const useGuruHint = () => {
    if (lifelinesUsed.guruHint || isAnswerLocked) return;
    soundService.playLifeline();

    const currentQ = hotSeatQuestions[currentQIndex];
    setActiveGuruHint(currentQ.guruHint || "Focus on the core concept and eliminate clearly false distractors.");
    setLifelinesUsed(prev => ({ ...prev, guruHint: true }));
  };

  // Lifeline 4: Time Freeze
  const useTimeFreeze = () => {
    if (lifelinesUsed.timeFreeze || isAnswerLocked) return;
    soundService.playLifeline();
    setIsTimerPaused(true);
    setLifelinesUsed(prev => ({ ...prev, timeFreeze: true }));
  };

  // ----------------------------------------
  // SPECTATOR AUDIENCE ACTIONS
  // ----------------------------------------
  const sendSpectatorEmoji = (emoji) => {
    const id = Date.now() + Math.random();
    setFloatingEmojis(prev => [...prev.slice(-15), { id, emoji, left: Math.random() * 80 + 10 }]);
  };

  const voteSpectatorPoll = (optionKey, isCorrect) => {
    setSpectatorVoted(optionKey);
    if (isCorrect) {
      soundService.playCorrect();
      // Reward +10 Bonus XP / Gems for active audience participation
      addGems(10);
    }
  };

  return (
    <GameContext.Provider
      value={{
        screen,
        setScreen,
        navigateTo,
        activeDivision,
        setActiveDivision,
        selectedGrade,
        setSelectedGrade,
        matchFairPlay,
        setMatchFairPlay,
        lobbyPlayers,
        fffQuestion,
        fffWinner,
        fffResults,
        startMatch,
        startPrivateMatch,
        activeRoom,
        setActiveRoom,
        startFFF,
        submitFFF,
        hotSeatQuestions,
        currentQIndex,
        lockedOption,
        isAnswerLocked,
        revealState,
        showNextPromptModal,
        proceedToNextQuestion,
        timerRemaining,
        setTimerRemaining,
        isTimerPaused,
        lockAnswer,
        walkAway,
        handleTimeOut,
        lifelinesUsed,
        eliminatedOptions,
        audiencePollData,
        activeGuruHint,
        useFiftyFifty,
        useAudiencePoll,
        useGuruHint,
        useTimeFreeze,
        matchResult,
        sessionAnswers,
        spectatorPlayer,
        spectatorLevel,
        setSpectatorLevel,
        spectatorPollActive,
        setSpectatorPollActive,
        spectatorVoted,
        voteSpectatorPoll,
        floatingEmojis,
        sendSpectatorEmoji,
        isLandscapeMode,
        setIsLandscapeMode,
        toggleLandscapeMode,
        showOrientationHint,
        triggerOrientationHint,
        setShowOrientationHint,
        hasSeenHotSeatIntro,
        setHasSeenHotSeatIntro,
        languageMode,
        setLanguageMode,
        t,
        LANGUAGES,
        isSettingsOpen,
        setIsSettingsOpen,
        openSettings,
        closeSettings,
        isFriendsOpen,
        setIsFriendsOpen,
        openFriends,
        closeFriends,
        isTourOpen,
        setIsTourOpen,
        openTour,
        closeTour,
        examCategory,
        setExamCategory,
        selectedLiveMatch,
        setSelectedLiveMatch,
        startClanBattle
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export const useGame = () => useContext(GameContext);
export default GameContext;
