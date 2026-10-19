/**
 * GameContext.jsx
 * Central Game State Machine for ClassChamp.
 * Manages 10-Player Lobby, FFF ordering, Hot-Seat ladder, lifelines, spectator mode, and rewards.
 */

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import questionEngine, { LADDER_TIERS } from '../services/questionEngine';
import storageService from '../services/storageService';
import soundService from '../services/soundService';

const GameContext = createContext();

export function GameProvider({ children }) {
  const { currentUser, updateTrophies, addGems } = useAuth();

  // Active Screen: 'HOME' | 'LOBBY' | 'FFF' | 'HOTSEAT' | 'SPECTATOR' | 'RESULT' | 'STORE' | 'ADMIN'
  const [screen, setScreen] = useState('HOME');

  // Match configuration
  const [activeDivision, setActiveDivision] = useState('Junior');
  const [lobbyPlayers, setLobbyPlayers] = useState([]);
  const [fffQuestion, setFffQuestion] = useState(null);
  const [fffWinner, setFffWinner] = useState(null);
  const [fffResults, setFffResults] = useState([]);

  // Hot Seat Match state
  const [hotSeatQuestions, setHotSeatQuestions] = useState([]);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [lockedOption, setLockedOption] = useState(null);
  const [isAnswerLocked, setIsAnswerLocked] = useState(false);
  const [revealState, setRevealState] = useState(null); // null | 'CORRECT' | 'WRONG'
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
  }, [currentUser]);

  // Navigate between screens
  const navigateTo = (newScreen) => {
    soundService.playClick();
    setScreen(newScreen);
  };

  // Start Matchmaking: enters 10-player lobby
  const startMatch = (division) => {
    const selectedDivision = division || activeDivision;
    setActiveDivision(selectedDivision);

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
    setCurrentQIndex(0);

    // Prepare questions
    const allQuestions = storageService.getQuestions();
    const fff = questionEngine.getFFFQuestion(allQuestions, selectedDivision, currentUser?.id);
    const hotSeat = questionEngine.getHotSeatMatchQuestions(allQuestions, selectedDivision, currentUser?.id);

    setFffQuestion(fff);
    setHotSeatQuestions(hotSeat);

    setScreen('LOBBY');
  };

  // Trigger FFF round after lobby fills
  const startFFF = (players) => {
    setLobbyPlayers(players);
    setScreen('FFF');
  };

  // Submit FFF sequence (e.g. 'B,D,C,A')
  const submitFFF = (playerSequence, timeTakenSeconds) => {
    if (!fffQuestion) return;

    const isCorrect = playerSequence === fffQuestion.correctAnswer;
    const botSettings = storageService.getBotSettings();

    // Record answer in 365-day seen tracker
    if (currentUser?.id) {
      questionEngine.recordAnswer(currentUser.id, fffQuestion.id, isCorrect);
    }

    // Evaluate bot completion times
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

    // Auto-route: If human wins -> Hot Seat. If human loses -> Live Spectator Mode!
    setTimeout(() => {
      if (winner.isHuman) {
        soundService.playCorrect();
        setScreen('HOTSEAT');
      } else {
        setSpectatorPlayer(winner);
        setSpectatorLevel(1);
        setScreen('SPECTATOR');
      }
    }, 2800);
  };

  // Hot Seat: Lock an answer
  const lockAnswer = (optionKey) => {
    if (isAnswerLocked || revealState) return;
    setLockedOption(optionKey);
    setIsAnswerLocked(true);
    soundService.playLock();

    const currentQ = hotSeatQuestions[currentQIndex];
    const isCorrect = optionKey === currentQ.correctAnswer;

    // Record in 365-day seen tracker
    if (currentUser?.id) {
      questionEngine.recordAnswer(currentUser.id, currentQ.id, isCorrect);
    }

    // Dramatic reveal after 1.8 seconds suspense
    setTimeout(() => {
      if (isCorrect) {
        soundService.playCorrect();
        setRevealState('CORRECT');

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
          // Advance to next question after 1.5s
          setTimeout(() => {
            advanceToNextQuestion();
          }, 1500);
        }
      } else {
        soundService.playWrong();
        setRevealState('WRONG');
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
    setEliminatedOptions([]);
    setAudiencePollData(null);
    setActiveGuruHint(null);
    setIsTimerPaused(false);

    const nextQ = hotSeatQuestions[nextIdx];
    setTimerRemaining(nextQ?.tierMeta?.timeLimit || 45);
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
    handleDropOut(currentQIndex);
  };

  // Conclude match and compute ELO Trophies
  const finishMatch = ({ wonLevel, points, isWinner, wasWalkAway }) => {
    // ELO Math: High progression or win = +25 Trophies, early elimination (below Q5) = -10 Trophies
    let trophyDelta = 0;
    if (isWinner || wonLevel >= 10) {
      trophyDelta = 25;
    } else if (wonLevel >= 5 || wasWalkAway) {
      trophyDelta = 10;
    } else {
      trophyDelta = -10;
    }

    updateTrophies(trophyDelta);

    setMatchResult({
      pointsWon: points,
      levelReached: wonLevel,
      trophyDelta,
      isWinner,
      wasWalkAway
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
        lobbyPlayers,
        fffQuestion,
        fffWinner,
        fffResults,
        startMatch,
        startFFF,
        submitFFF,
        hotSeatQuestions,
        currentQIndex,
        lockedOption,
        isAnswerLocked,
        revealState,
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
        spectatorPlayer,
        spectatorLevel,
        setSpectatorLevel,
        spectatorPollActive,
        setSpectatorPollActive,
        spectatorVoted,
        voteSpectatorPoll,
        floatingEmojis,
        sendSpectatorEmoji
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export const useGame = () => useContext(GameContext);
export default GameContext;
