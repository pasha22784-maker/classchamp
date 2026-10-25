import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserProfile, Grade, Subject, CognitiveProfileScores, AppLanguage, ChapterProgressItem } from '../types';
import { syncProfileToCloud } from '../services/supabase';
import { getDefaultWeakTopicsForGrade } from '../data/cognitiveEngine';

const STORAGE_KEY = '@classchamp_user_profile_v1';

export const getChapterProgressKey = (grade: Grade, subject: Subject, chapterTitle: string): string => {
  const cleanTitle = (chapterTitle || '')
    .replace(/\s*\([^)]*[\u0900-\u097F]+[^)]*\)/g, '')
    .replace(/[\u0900-\u097F]+/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');
  return `${grade}_${subject}_${cleanTitle}`;
};

export const getTodayDateString = (): string => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const getYesterdayDateString = (): string => {
  const date = new Date();
  date.setDate(date.getDate() - 1);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const DEFAULT_PROFILE: UserProfile = {
  name: 'Champ',
  grade: 1,
  avatarId: 'lion',
  preferredLanguage: 'en',
  isPro: false,
  totalStars: 0,
  totalCoins: 50,
  totalTrophies: 0,
  currentStreak: 0,
  lastActiveDate: '',
  historyDatesCompleted: [],
  trialStartedAt: new Date().toISOString(),
  xp: 0,
  streakShields: 1, // Give 1 complimentary streak shield to start!
  lastSpinDate: '',
  weakTopics: getDefaultWeakTopicsForGrade(1),
  cognitiveScores: {
    logicScore: 88,
    spatialScore: 84,
    memorySpeedScore: 86,
    problemSolvingScore: 89,
  },
  dailyWorkoutCompletedDates: [],
  chapterProgress: {},
};

interface UserState {
  profile: UserProfile;
  isHydrated: boolean;
  loadProfile: () => Promise<void>;
  updateName: (name: string) => Promise<void>;
  setGrade: (grade: Grade) => Promise<void>;
  setAvatar: (avatarId: string) => Promise<void>;
  setPreferredLanguage: (lang: AppLanguage) => Promise<void>;
  setProStatus: (isPro: boolean) => Promise<void>;
  addStars: (stars: number) => Promise<void>;
  addCoins: (coins: number) => Promise<void>;
  addReward: (reward: { stars?: number; coins?: number; trophies?: number; xp?: number; streakShields?: number }) => Promise<void>;
  recordSpinUsed: () => Promise<void>;
  recordQuizCompletion: (starsEarned: number) => Promise<{ newStreak: number; earnedTrophy: boolean }>;
  setLastSubjectLesson: (subject: Subject, chapterTitle: string) => Promise<void>;
  setChapterProgress: (
    grade: Grade,
    subject: Subject,
    chapterTitle: string,
    questionIndex: number,
    totalQuestions: number,
    isCompleted?: boolean,
    scorePercentage?: number,
    starsEarned?: number
  ) => Promise<void>;
  getChapterProgress: (grade: Grade, subject: Subject, chapterTitle: string) => ChapterProgressItem | undefined;
  recordTopicPerformance: (subject: Subject, chapterTitle: string, accuracy: number) => Promise<void>;
  markDailyWorkoutDone: () => Promise<void>;
  updateCognitiveScore: (track: keyof CognitiveProfileScores, delta: number) => Promise<void>;
  resetProgress: () => Promise<void>;
}

export const useUserStore = create<UserState>((set, get) => ({
  profile: DEFAULT_PROFILE,
  isHydrated: false,

  loadProfile: async () => {
    try {
      const stored = await AsyncStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed: UserProfile = JSON.parse(stored);
        
        // Ensure 30-day trial timer exists
        if (!parsed.trialStartedAt) {
          parsed.trialStartedAt = new Date().toISOString();
        }

        // Check if streak was broken (missed yesterday and today)
        const today = getTodayDateString();
        const yesterday = getYesterdayDateString();
        let validStreak = parsed.currentStreak;
        let shields = parsed.streakShields ?? 1;
        
        if (parsed.lastActiveDate && parsed.lastActiveDate !== today && parsed.lastActiveDate !== yesterday) {
          if (shields > 0 && validStreak > 0) {
            // Streak Shield saved the streak!
            shields -= 1;
          } else {
            validStreak = 0; // Streak reset if inactive for 2+ days and no shield
          }
        }

        const updatedProfile: UserProfile = {
          ...parsed,
          currentStreak: validStreak,
          streakShields: shields,
          xp: parsed.xp ?? 0,
          lastSpinDate: parsed.lastSpinDate ?? '',
          weakTopics: parsed.weakTopics && parsed.weakTopics.length > 0
            ? parsed.weakTopics
            : getDefaultWeakTopicsForGrade(parsed.grade || 1),
          cognitiveScores: parsed.cognitiveScores ?? {
            logicScore: 88,
            spatialScore: 84,
            memorySpeedScore: 86,
            problemSolvingScore: 89,
          },
          dailyWorkoutCompletedDates: parsed.dailyWorkoutCompletedDates ?? [],
          chapterProgress: parsed.chapterProgress ?? {},
        };
        set({ profile: updatedProfile, isHydrated: true });
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedProfile));
        return;
      }
    } catch (e) {
      console.warn('Failed to load user profile from storage', e);
    }
    const fresh = { ...DEFAULT_PROFILE, trialStartedAt: new Date().toISOString() };
    set({ profile: fresh, isHydrated: true });
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(fresh));
  },

  updateName: async (name: string) => {
    const updated = { ...get().profile, name: name.trim() || 'Champ' };
    set({ profile: updated });
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    syncProfileToCloud(updated);
  },

  setGrade: async (grade: Grade) => {
    const current = get().profile;
    const updated = {
      ...current,
      grade,
      weakTopics: getDefaultWeakTopicsForGrade(grade),
    };
    set({ profile: updated });
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    syncProfileToCloud(updated);
  },

  setAvatar: async (avatarId: string) => {
    const updated = { ...get().profile, avatarId };
    set({ profile: updated });
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    syncProfileToCloud(updated);
  },

  setPreferredLanguage: async (lang: AppLanguage) => {
    const updated = { ...get().profile, preferredLanguage: lang };
    set({ profile: updated });
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    syncProfileToCloud(updated);
  },

  setProStatus: async (isPro: boolean) => {
    const updated = { ...get().profile, isPro };
    set({ profile: updated });
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    syncProfileToCloud(updated);
  },

  addStars: async (stars: number) => {
    const current = get().profile;
    const coinsWon = stars * 10;
    const updated = {
      ...current,
      totalStars: current.totalStars + stars,
      totalCoins: (current.totalCoins ?? (current.totalStars * 10 + 50)) + coinsWon,
    };
    set({ profile: updated });
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    syncProfileToCloud(updated);
  },

  addCoins: async (coins: number) => {
    const current = get().profile;
    const updated = {
      ...current,
      totalCoins: (current.totalCoins ?? (current.totalStars * 10 + 50)) + coins,
    };
    set({ profile: updated });
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    syncProfileToCloud(updated);
  },

  addReward: async (reward) => {
    const current = get().profile;
    const coinsWon = reward.coins ?? (reward.stars ? reward.stars * 10 : 0);
    const updated: UserProfile = {
      ...current,
      totalStars: current.totalStars + (reward.stars || 0),
      totalCoins: (current.totalCoins ?? (current.totalStars * 10 + 50)) + coinsWon,
      totalTrophies: current.totalTrophies + (reward.trophies || 0),
      xp: (current.xp || 0) + (reward.xp || 0),
      streakShields: (current.streakShields || 0) + (reward.streakShields || 0),
    };
    set({ profile: updated });
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    syncProfileToCloud(updated);
  },

  recordSpinUsed: async () => {
    const current = get().profile;
    const today = getTodayDateString();
    const updated: UserProfile = {
      ...current,
      lastSpinDate: today,
    };
    set({ profile: updated });
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    syncProfileToCloud(updated);
  },

  recordQuizCompletion: async (starsEarned: number) => {
    const current = get().profile;
    const today = getTodayDateString();
    const yesterday = getYesterdayDateString();
    
    let newStreak = current.currentStreak;
    const alreadyCompletedToday = current.historyDatesCompleted.includes(today);

    if (!alreadyCompletedToday) {
      if (current.lastActiveDate === yesterday) {
        newStreak += 1;
      } else if (current.lastActiveDate === today) {
        // Already practiced today, keep current
      } else {
        newStreak = 1; // Brand new streak
      }
    }

    // Trophy awarded every 5 days of streak or reaching 50 stars
    const newTotalStars = current.totalStars + starsEarned;
    const earnedTrophy = newStreak > 0 && newStreak % 5 === 0 && !alreadyCompletedToday;
    const newTrophies = earnedTrophy ? current.totalTrophies + 1 : current.totalTrophies;

    const updatedHistory = alreadyCompletedToday
      ? current.historyDatesCompleted
      : [...current.historyDatesCompleted, today];

    const updatedProfile: UserProfile = {
      ...current,
      totalStars: newTotalStars,
      totalTrophies: newTrophies,
      currentStreak: newStreak,
      lastActiveDate: today,
      historyDatesCompleted: updatedHistory,
    };

    set({ profile: updatedProfile });
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedProfile));
    syncProfileToCloud(updatedProfile);

    return { newStreak, earnedTrophy };
  },

  setLastSubjectLesson: async (subject: Subject, chapterTitle: string) => {
    const current = get().profile;
    const currentLessons = current.lastLessonBySubject || {};
    const updatedProfile: UserProfile = {
      ...current,
      lastLessonBySubject: {
        ...currentLessons,
        [subject]: chapterTitle,
      },
    };
    set({ profile: updatedProfile });
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedProfile));
  },

  setChapterProgress: async (
    grade: Grade,
    subject: Subject,
    chapterTitle: string,
    questionIndex: number,
    totalQuestions: number,
    isCompleted: boolean = false,
    scorePercentage?: number,
    starsEarned?: number
  ) => {
    const current = get().profile;
    const key = getChapterProgressKey(grade, subject, chapterTitle);
    const existing = current.chapterProgress || {};
    const prevItem = existing[key];

    const updatedProfile: UserProfile = {
      ...current,
      chapterProgress: {
        ...existing,
        [key]: {
          lastQuestionIndex: questionIndex,
          totalQuestions,
          lastUpdated: new Date().toISOString(),
          isCompleted: isCompleted || prevItem?.isCompleted || false,
          scorePercentage: scorePercentage !== undefined ? scorePercentage : prevItem?.scorePercentage,
          starsEarned: starsEarned !== undefined ? starsEarned : prevItem?.starsEarned,
          completedAt: isCompleted ? (prevItem?.completedAt || new Date().toISOString()) : prevItem?.completedAt,
        },
      },
    };
    set({ profile: updatedProfile });
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedProfile));
  },

  getChapterProgress: (grade: Grade, subject: Subject, chapterTitle: string) => {
    const current = get().profile;
    const progressMap = current.chapterProgress || {};
    const key = getChapterProgressKey(grade, subject, chapterTitle);
    if (progressMap[key]) {
      return progressMap[key];
    }
    // Backward compatibility: match legacy keys that had raw Devanagari converted to underscores
    const legacyKey = `${grade}_${subject}_${(chapterTitle || '').toLowerCase().replace(/[^a-z0-9]/g, '_')}`;
    if (progressMap[legacyKey]) {
      return progressMap[legacyKey];
    }
    // Fallback: match any key starting with clean title
    const cleanBase = (chapterTitle || '')
      .replace(/\s*\([^)]*[\u0900-\u097F]+[^)]*\)/g, '')
      .replace(/[\u0900-\u097F]+/g, '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '_')
      .replace(/^_+|_+$/g, '');
    const prefix = `${grade}_${subject}_${cleanBase}`;
    const foundKey = Object.keys(progressMap).find((k) => k === prefix || k.startsWith(prefix));
    if (foundKey) {
      return progressMap[foundKey];
    }
    return undefined;
  },

  recordTopicPerformance: async (subject: Subject, chapterTitle: string, accuracy: number) => {
    const current = get().profile;
    const existingWeak = [...(current.weakTopics || [])];
    const today = getTodayDateString();

    const idx = existingWeak.findIndex(
      (t) => t.chapterTitle.toLowerCase() === chapterTitle.toLowerCase() && t.subject === subject
    );

    if (idx >= 0) {
      const topic = existingWeak[idx];
      const newStatus = accuracy >= 80 ? 'mastered' : accuracy >= 60 ? 'improving' : 'needs_practice';
      existingWeak[idx] = {
        ...topic,
        accuracyPercentage: Math.round((topic.accuracyPercentage + accuracy) / 2),
        attemptsCount: topic.attemptsCount + 1,
        status: newStatus,
        lastPracticedDate: today,
      };
    } else if (accuracy < 75) {
      existingWeak.unshift({
        id: `weak_${Date.now()}`,
        subject,
        chapterTitle,
        conceptName: `Core ${subject.toUpperCase()} Application`,
        accuracyPercentage: accuracy,
        attemptsCount: 1,
        status: accuracy >= 60 ? 'improving' : 'needs_practice',
        lastPracticedDate: today,
      });
    }

    const updatedProfile: UserProfile = {
      ...current,
      weakTopics: existingWeak,
    };
    set({ profile: updatedProfile });
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedProfile));
    syncProfileToCloud(updatedProfile);
  },

  markDailyWorkoutDone: async () => {
    const current = get().profile;
    const today = getTodayDateString();
    const completed = current.dailyWorkoutCompletedDates || [];
    if (!completed.includes(today)) {
      const updated: UserProfile = {
        ...current,
        totalStars: current.totalStars + 50,
        xp: (current.xp || 0) + 100,
        dailyWorkoutCompletedDates: [...completed, today],
      };
      set({ profile: updated });
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      syncProfileToCloud(updated);
    }
  },

  updateCognitiveScore: async (track: keyof CognitiveProfileScores, delta: number) => {
    const current = get().profile;
    const scores = current.cognitiveScores || {
      logicScore: 88,
      spatialScore: 84,
      memorySpeedScore: 86,
      problemSolvingScore: 89,
    };
    const newScore = Math.min(100, Math.max(50, (scores[track] || 85) + delta));
    const updated: UserProfile = {
      ...current,
      cognitiveScores: {
        ...scores,
        [track]: newScore,
      },
    };
    set({ profile: updated });
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    syncProfileToCloud(updated);
  },

  resetProgress: async () => {
    set({ profile: DEFAULT_PROFILE });
    await AsyncStorage.removeItem(STORAGE_KEY);
  },
}));
