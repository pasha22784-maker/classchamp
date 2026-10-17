import AsyncStorage from '@react-native-async-storage/async-storage';
import { supabase, isSupabaseConfigured } from './supabase';
import { AppGlobalConfig } from '../types';

const STORAGE_KEY = '@classchamp_global_config_v1';

export const DEFAULT_GLOBAL_CONFIG: AppGlobalConfig = {
  isAppFreeForAll: false,
  trialDurationDays: 30,
  specialOffer: {
    isActive: true,
    badgeText: 'SPECIAL LAUNCH OFFER 🚀',
    title: 'Flat 50% OFF on Annual VIP Pass',
    originalPrice: '₹999',
    discountedPrice: '₹499',
    couponCode: 'CHAMP50',
  },
  announcement: {
    isActive: true,
    text: '🎉 Complete LKG to Class 6 curriculum is live! Practice 10 minutes daily.',
    type: 'festive',
  },
};

/**
 * Fetch Remote App Settings from Supabase Cloud (with offline AsyncStorage caching)
 */
export async function fetchGlobalConfig(): Promise<AppGlobalConfig> {
  // 1. Try fetching from Supabase cloud
  if (isSupabaseConfigured()) {
    try {
      const { data, error } = await supabase
        .from('app_settings')
        .select('value')
        .eq('key', 'global_config')
        .single();

      if (!error && data?.value) {
        const remoteConfig = data.value as AppGlobalConfig;
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(remoteConfig));
        return remoteConfig;
      }
    } catch (err) {
      console.warn('Could not fetch remote app_settings from Supabase, using local cache:', err);
    }
  }

  // 2. Fallback to local cached config
  try {
    const cached = await AsyncStorage.getItem(STORAGE_KEY);
    if (cached) {
      return JSON.parse(cached);
    }
  } catch (err) {
    console.warn('Error reading cached global config:', err);
  }

  return DEFAULT_GLOBAL_CONFIG;
}

/**
 * Save & Publish Global App Config to Supabase Cloud & Local Cache
 */
export async function saveGlobalConfig(config: AppGlobalConfig): Promise<{ success: boolean; error?: string }> {
  try {
    // 1. Save to local storage first
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(config));

    // 2. Publish to Supabase cloud if connected
    if (isSupabaseConfigured()) {
      const { error } = await supabase.from('app_settings').upsert({
        key: 'global_config',
        value: config,
        updated_at: new Date().toISOString(),
      });

      if (error) {
        console.warn('Supabase upsert warning for app_settings:', error.message);
        return { success: true, error: 'Local me save ho gaya, par Supabase table me sync nahi hua: ' + error.message };
      }
    }

    return { success: true };
  } catch (err: any) {
    return { success: false, error: err?.message || 'Settings save karne me samasya aayi.' };
  }
}

/**
 * Check if the given authenticated user is an Admin
 */
export async function checkUserIsAdmin(userId: string, email?: string): Promise<boolean> {
  if (!userId) return false;

  const cleanEmail = (email || '').toLowerCase().trim();

  // 1. Check if email contains 'admin' keyword or matches configured admin email
  if (cleanEmail.includes('admin') || cleanEmail === 'pasha22784@gmail.com') {
    return true;
  }

  // 2. Check role column in profiles table in Supabase
  if (isSupabaseConfigured()) {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('role, email')
        .eq('id', userId)
        .single();

      if (!error && data) {
        if (data.role === 'admin' || (data.email && data.email.toLowerCase().includes('admin'))) {
          return true;
        }
      }
    } catch {
      // fallback
    }
  }

  return false;
}

/**
 * Fetch all registered student/parent profiles for Admin management
 */
export async function fetchAllProfilesForAdmin(): Promise<any[]> {
  if (!isSupabaseConfigured()) return [];

  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .order('updated_at', { ascending: false })
      .limit(50);

    if (error) {
      console.warn('Error fetching profiles for admin:', error);
      return [];
    }

    return data || [];
  } catch (err) {
    console.warn('Admin fetch profiles exception:', err);
    return [];
  }
}

/**
 * Admin: Toggle Pro Status for any specific student in Supabase Cloud
 */
export async function setStudentProStatusByAdmin(userId: string, isPro: boolean): Promise<boolean> {
  if (!isSupabaseConfigured() || !userId) return false;

  try {
    const { error } = await supabase
      .from('profiles')
      .update({ is_pro: isPro, updated_at: new Date().toISOString() })
      .eq('id', userId);

    return !error;
  } catch {
    return false;
  }
}
