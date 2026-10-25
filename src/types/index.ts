// ClassChamp Core TypeScript Type Definitions

export type Grade = 'LKG' | 'UKG' | 1 | 2 | 3 | 4 | 5 | 6;
export type Subject = 'maths' | 'english' | 'hindi';
export type Difficulty = 'easy' | 'medium' | 'hard';
export type QuestionType = 'mcq' | 'fill_blank' | 'match_pairs' | 'drag_order';
export type AppLanguage = 'en' | 'hi';

export interface MCQOption {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface MatchPairItem {
  id: string;
  left: string;
  right: string;
}

export interface QuestionPayload {
  // MCQ
  options?: MCQOption[];
  
  // Fill in the blanks
  correctAnswer?: string;
  wordBank?: string[];
  displayTemplate?: string;

  // Match the pairs
  pairs?: MatchPairItem[];

  // Drag & drop ordering
  tokens?: string[];
  scrambled?: string[];
  correctSequence?: string[];
}

export interface Question {
  id: string;
  grade: Grade;
  subject: Subject;
  chapter: string;
  concept: string;
  difficulty: Difficulty;
  type: QuestionType;
  question: string;
  questionHindi?: string;
  visualEmoji?: string;
  payload: QuestionPayload;
  payloadHindi?: QuestionPayload;
  explanation: string;
  explanationHindi?: string;
  points: number;
}

export interface ChapterLesson {
  id: string;
  number: number;
  title: string;
  titleHindi?: string;
  grade: Grade;
  subject: Subject;
  icon: string;
  conceptSummary: string;
  conceptSummaryHindi?: string;
}

export interface AvatarOption {
  id: string;
  name: string;
  emoji: string;
  badgeColor: string;
}

export interface ChapterProgressItem {
  lastQuestionIndex: number;
  totalQuestions: number;
  lastUpdated: string; // ISO string
  isCompleted?: boolean;
  scorePercentage?: number;
  starsEarned?: number;
  completedAt?: string;
}

export interface UserProfile {
  name: string;
  grade: Grade;
  avatarId: string;
  preferredLanguage?: AppLanguage; // 'en' | 'hi' (Default 'en', Hindi subject is always Hindi)
  isPro: boolean;
  totalStars: number;
  totalCoins?: number;
  totalTrophies: number;
  currentStreak: number;
  lastActiveDate: string; // YYYY-MM-DD
  historyDatesCompleted: string[]; // List of YYYY-MM-DD
  lastLessonBySubject?: Partial<Record<Subject, string>>;
  chapterProgress?: Record<string, ChapterProgressItem>;
  // 30-Day Free Trial & Cloud Auth Fields
  trialStartedAt?: string; // ISO string
  userId?: string;
  parentPhone?: string;
  parentEmail?: string;
  role?: 'admin' | 'user';
  subscriptionPlan?: 'monthly' | 'yearly' | null;
  subscriptionExpiresAt?: string; // ISO string
  // Gamification & Rewards
  xp?: number;
  streakShields?: number;
  lastSpinDate?: string; // YYYY-MM-DD
  // Adaptive Learning & Cognitive Development
  weakTopics?: WeakTopicItem[];
  cognitiveScores?: CognitiveProfileScores;
  dailyWorkoutCompletedDates?: string[];
}

export interface WeakTopicItem {
  id: string;
  subject: Subject;
  chapterTitle: string;
  conceptName: string;
  accuracyPercentage: number;
  attemptsCount: number;
  status: 'needs_practice' | 'improving' | 'mastered';
  lastPracticedDate: string;
}

export interface CognitiveProfileScores {
  logicScore: number;       // 0 - 100
  spatialScore: number;     // 0 - 100
  memorySpeedScore: number; // 0 - 100
  problemSolvingScore: number; // 0 - 100
}

export interface AppGlobalConfig {
  isAppFreeForAll: boolean;
  trialDurationDays: number;
  specialOffer: {
    isActive: boolean;
    badgeText: string;
    title: string;
    originalPrice: string;
    discountedPrice: string;
    couponCode: string;
  };
  announcement: {
    isActive: boolean;
    text: string;
    type: 'info' | 'festive' | 'alert';
  };
}

export interface UserAnswerRecord {
  questionId: string;
  isCorrect: boolean;
  userSelection: any;
  timeSpentSeconds: number;
}

export interface QuizSessionResult {
  date: string;
  grade: Grade;
  subject: Subject;
  chapterTitle?: string;
  totalQuestions: number;
  correctCount: number;
  starsEarned: number;
  timeTakenSeconds: number;
  scorePercentage: number;
  answers: UserAnswerRecord[];
}

export type ScreenType = 
  | 'splash'
  | 'onboarding'
  | 'dashboard'
  | 'chapter_vault'
  | 'roadmap_365'
  | 'quiz'
  | 'celebration'
  | 'parent_zone'
  | 'paywall'
  | 'admin';
