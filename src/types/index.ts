// ClassChamp Core TypeScript Type Definitions

export type Grade = 'LKG' | 'UKG' | 1 | 2 | 3 | 4 | 5 | 6;
export type Subject = 'maths' | 'english' | 'hindi';
export type Difficulty = 'easy' | 'medium' | 'hard';
export type QuestionType = 'mcq' | 'fill_blank' | 'match_pairs' | 'drag_order';

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
  visualEmoji?: string;
  payload: QuestionPayload;
  explanation: string;
  points: number;
}

export interface ChapterLesson {
  id: string;
  number: number;
  title: string;
  grade: Grade;
  subject: Subject;
  icon: string;
  conceptSummary: string;
}

export interface AvatarOption {
  id: string;
  name: string;
  emoji: string;
  badgeColor: string;
}

export interface UserProfile {
  name: string;
  grade: Grade;
  avatarId: string;
  isPro: boolean;
  totalStars: number;
  totalTrophies: number;
  currentStreak: number;
  lastActiveDate: string; // YYYY-MM-DD
  historyDatesCompleted: string[]; // List of YYYY-MM-DD
  lastLessonBySubject?: Partial<Record<Subject, string>>;
  // 30-Day Free Trial & Cloud Auth Fields
  trialStartedAt?: string; // ISO string
  userId?: string;
  parentPhone?: string;
  parentEmail?: string;
  subscriptionPlan?: 'monthly' | 'yearly' | null;
  subscriptionExpiresAt?: string; // ISO string
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
  | 'paywall';
