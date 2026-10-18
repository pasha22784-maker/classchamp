import { create } from 'zustand';
import { Question, UserAnswerRecord, QuizSessionResult, Subject, Grade } from '../types';
import { soundManager } from '../utils/soundManager';
import { getAdaptedQuestion, getSubjectLanguage } from '../utils/language';
import { useUserStore } from './useUserStore';

interface QuizState {
  // Session details
  grade: Grade;
  subject: Subject;
  activeChapterTitle?: string;
  questions: Question[];
  currentQuestionIndex: number;
  
  // Timer
  secondsRemaining: number;
  timeSpentSeconds: number;
  isTimerRunning: boolean;

  // Question interaction state
  selectedAnswer: any;
  isAnswerSubmitted: boolean;
  isCorrect: boolean | null;

  // Running session metrics
  correctCount: number;
  consecutiveStreak: number;
  maxConsecutiveStreak: number;
  starsEarned: number;
  answersRecord: UserAnswerRecord[];
  
  // Quiz lifecycle
  isQuizComplete: boolean;

  // Actions
  startQuiz: (grade: Grade, subject: Subject, questions: Question[], chapterTitle?: string) => void;
  selectAnswer: (answer: any) => void;
  submitAnswer: () => void;
  nextQuestion: () => void;
  tickTimer: () => void;
  stopTimer: () => void;
  getResultSummary: () => QuizSessionResult;
  resetQuiz: () => void;
}

export const useQuizStore = create<QuizState>((set, get) => ({
  grade: 1,
  subject: 'maths',
  activeChapterTitle: undefined,
  questions: [],
  currentQuestionIndex: 0,
  
  secondsRemaining: 600, // 10 minutes
  timeSpentSeconds: 0,
  isTimerRunning: false,

  selectedAnswer: null,
  isAnswerSubmitted: false,
  isCorrect: null,

  correctCount: 0,
  consecutiveStreak: 0,
  maxConsecutiveStreak: 0,
  starsEarned: 0,
  answersRecord: [],
  isQuizComplete: false,

  startQuiz: (grade: Grade, subject: Subject, questions: Question[], chapterTitle?: string) => {
    const userLang = useUserStore.getState().profile.preferredLanguage;
    const targetLang = getSubjectLanguage(subject, userLang);
    const sanitizedQuestions = (questions || []).map((q) => getAdaptedQuestion(q, targetLang));

    set({
      grade,
      subject,
      activeChapterTitle: chapterTitle,
      questions: sanitizedQuestions,
      currentQuestionIndex: 0,
      secondsRemaining: 600,
      timeSpentSeconds: 0,
      isTimerRunning: true,
      selectedAnswer: null,
      isAnswerSubmitted: false,
      isCorrect: null,
      correctCount: 0,
      consecutiveStreak: 0,
      maxConsecutiveStreak: 0,
      starsEarned: 0,
      answersRecord: [],
      isQuizComplete: false,
    });
  },

  selectAnswer: (answer: any) => {
    if (get().isAnswerSubmitted) return;
    set({ selectedAnswer: answer });
    soundManager.playPop();
  },

  submitAnswer: () => {
    const state = get();
    if (state.isAnswerSubmitted || state.selectedAnswer === null) return;

    const currentQ = state.questions[state.currentQuestionIndex];
    if (!currentQ) return;

    let correct = false;

    // Validate based on question type
    if (currentQ.type === 'mcq') {
      correct = state.selectedAnswer?.isCorrect === true;
    } else if (currentQ.type === 'fill_blank') {
      const target = currentQ.payload.correctAnswer?.trim().toLowerCase();
      const user = String(state.selectedAnswer).trim().toLowerCase();
      correct = target === user;
    } else if (currentQ.type === 'match_pairs') {
      // payload.pairs
      const userPairs = state.selectedAnswer as Record<string, string>;
      const pairs = currentQ.payload.pairs || [];
      correct = pairs.length > 0 && pairs.every((p) => userPairs[p.id] === p.right);
    } else if (currentQ.type === 'drag_order') {
      const userSeq = state.selectedAnswer as string[];
      const correctSeq = currentQ.payload.correctSequence || [];
      correct =
        userSeq.length === correctSeq.length &&
        userSeq.every((token, idx) => token === correctSeq[idx]);
    }

    if (correct) {
      soundManager.playCorrect();
    } else {
      soundManager.playIncorrect();
    }

    const newConsecutive = correct ? state.consecutiveStreak + 1 : 0;
    const newMaxStreak = Math.max(state.maxConsecutiveStreak, newConsecutive);
    const starReward = correct ? (newConsecutive >= 3 ? 15 : 10) : 0; // Streak bonus!

    const record: UserAnswerRecord = {
      questionId: currentQ.id,
      isCorrect: correct,
      userSelection: state.selectedAnswer,
      timeSpentSeconds: 0,
    };

    set({
      isAnswerSubmitted: true,
      isCorrect: correct,
      correctCount: correct ? state.correctCount + 1 : state.correctCount,
      consecutiveStreak: newConsecutive,
      maxConsecutiveStreak: newMaxStreak,
      starsEarned: state.starsEarned + starReward,
      answersRecord: [...state.answersRecord, record],
    });
  },

  nextQuestion: () => {
    const state = get();
    const nextIndex = state.currentQuestionIndex + 1;

    if (nextIndex >= state.questions.length) {
      // Quiz complete!
      soundManager.playFanfare();
      set({
        isQuizComplete: true,
        isTimerRunning: false,
      });
    } else {
      set({
        currentQuestionIndex: nextIndex,
        selectedAnswer: null,
        isAnswerSubmitted: false,
        isCorrect: null,
      });
    }
  },

  tickTimer: () => {
    const state = get();
    if (!state.isTimerRunning) return;

    if (state.secondsRemaining <= 1) {
      // Time is up!
      set({
        secondsRemaining: 0,
        timeSpentSeconds: state.timeSpentSeconds + 1,
        isTimerRunning: false,
        isQuizComplete: true,
      });
    } else {
      set({
        secondsRemaining: state.secondsRemaining - 1,
        timeSpentSeconds: state.timeSpentSeconds + 1,
      });
    }
  },

  stopTimer: () => {
    set({ isTimerRunning: false });
  },

  getResultSummary: (): QuizSessionResult => {
    const state = get();
    const total = Math.max(1, state.questions.length);
    const percentage = Math.round((state.correctCount / total) * 100);
    
    // Star calculation: 3 stars for 80%+, 2 stars for 60%+, 1 star otherwise
    let starsAwarded = 1;
    if (percentage >= 80) starsAwarded = 3;
    else if (percentage >= 60) starsAwarded = 2;

    return {
      date: new Date().toISOString().split('T')[0],
      grade: state.grade,
      subject: state.subject,
      chapterTitle: state.activeChapterTitle,
      totalQuestions: state.questions.length,
      correctCount: state.correctCount,
      starsEarned: state.starsEarned,
      timeTakenSeconds: state.timeSpentSeconds,
      scorePercentage: percentage,
      answers: state.answersRecord,
    };
  },

  resetQuiz: () => {
    set({
      questions: [],
      currentQuestionIndex: 0,
      secondsRemaining: 600,
      timeSpentSeconds: 0,
      isTimerRunning: false,
      selectedAnswer: null,
      isAnswerSubmitted: false,
      isCorrect: null,
      correctCount: 0,
      consecutiveStreak: 0,
      maxConsecutiveStreak: 0,
      starsEarned: 0,
      answersRecord: [],
      isQuizComplete: false,
    });
  },
}));
