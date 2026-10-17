import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserProfile, Grade, Subject } from '../types';
import { syncProfileToCloud } from '../services/supabase';

const STORAGE_KEY = '@classchamp_user_profile_v1';

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
  isPro: false,
  totalStars: 0,
  totalTrophies: 0,
  currentStreak: 0,
  lastActiveDate: '',
  historyDatesCompleted: [],
  trialStartedAt: new Date().toISOString(),
};

interface UserState {
  profile: UserProfile;
  isHydrated: boolean;
  loadProfile: () => Promise<void>;
  updateName: (name: string) => Promise<void>;
  setGrade: (grade: Grade) => Promise<void>;
  setAvatar: (avatarId: string) => Promise<void>;
  setProStatus: (isPro: boolean) => Promise<void>;
  addStars: (stars: number) => Promise<void>;
  recordQuizCompletion: (starsEarned: number) => Promise<{ newStreak: number; earnedTrophy: boolean }>;
  setLastSubjectLesson: (subject: Subject, chapterTitle: string) => Promise<void>;
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
        
        if (parsed.lastActiveDate && parsed.lastActiveDate !== today && parsed.lastActiveDate !== yesterday) {
          validStreak = 0; // Streak reset if inactive for 2+ days
        }

        const updatedProfile = { ...parsed, currentStreak: validStreak };
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
    const updated = { ...get().profile, grade };
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

  setProStatus: async (isPro: boolean) => {
    const updated = { ...get().profile, isPro };
    set({ profile: updated });
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    syncProfileToCloud(updated);
  },

  addStars: async (stars: number) => {
    const current = get().profile;
    const updated = { ...current, totalStars: current.totalStars + stars };
    set({ profile: updated });
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
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

  resetProgress: async () => {
    set({ profile: DEFAULT_PROFILE });
    await AsyncStorage.removeItem(STORAGE_KEY);
  },
}));
