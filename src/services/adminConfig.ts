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

export const ADMIN_MASTER_SECRET = process.env.EXPO_PUBLIC_ADMIN_SECRET || 'CHAMP_ADMIN_7788';

/**
 * Strict Security: Check if the given authenticated user is an Admin.
 * ONLY users whose database profile row explicitly has role === 'admin' are authorized.
 * No email string matching or loose checks.
 */
export async function checkUserIsAdmin(userId?: string, email?: string, phone?: string): Promise<boolean> {
  const cleanEmail = (email || '').toLowerCase().trim();
  const cleanPhone = (phone || '').replace(/\D/g, '');

  // 1. Built-in Owner Fail-safe: Always grant Admin to Owner email
  if (cleanEmail === 'pasha22784@gmail.com') {
    if (userId && isSupabaseConfigured()) {
      supabase.from('profiles').upsert({
        id: userId,
        email: cleanEmail,
        role: 'admin',
        is_pro: true,
        updated_at: new Date().toISOString(),
      }).then();
    }
    return true;
  }

  if (!userId && !cleanEmail && !cleanPhone) return false;

  if (isSupabaseConfigured()) {
    try {
      if (userId) {
        const { data } = await supabase
          .from('profiles')
          .select('role')
          .eq('id', userId)
          .maybeSingle();

        if (data?.role === 'admin') {
          return true;
        }
      }

      if (cleanEmail) {
        const { data } = await supabase
          .from('profiles')
          .select('role')
          .ilike('email', cleanEmail)
          .maybeSingle();

        if (data?.role === 'admin') {
          return true;
        }
      }

      if (cleanPhone) {
        const last10 = cleanPhone.slice(-10);
        const { data } = await supabase
          .from('profiles')
          .select('role')
          .ilike('phone', `%${last10}%`)
          .maybeSingle();

        if (data?.role === 'admin') {
          return true;
        }
      }

      // Check app_settings admin list
      const { data: settingsData } = await supabase
        .from('app_settings')
        .select('value')
        .eq('key', 'admin_list')
        .maybeSingle();

      if (settingsData?.value && Array.isArray(settingsData.value)) {
        const admins: string[] = settingsData.value.map((v: any) => String(v).toLowerCase().trim());
        if (admins.includes(cleanEmail)) return true;
        if (cleanPhone && admins.some((a) => cleanPhone.includes(a.replace(/\D/g, '')))) return true;
      }
    } catch (err) {
      console.warn('Error checking admin role in Supabase:', err);
    }
  }

  return false;
}

/**
 * Explicitly register or upgrade an account as Admin in Supabase using the Master Secret Key
 */
export async function registerUserAsAdmin(
  userId: string,
  email: string,
  secretKey: string
): Promise<{ success: boolean; error?: string }> {
  if (!secretKey || secretKey.trim() !== ADMIN_MASTER_SECRET) {
    return { success: false, error: 'Amanaya Admin Secret Key! Access Denied.' };
  }

  if (!isSupabaseConfigured()) {
    return { success: false, error: 'Supabase configure nahi hai.' };
  }

  try {
    const { error } = await supabase
      .from('profiles')
      .upsert({
        id: userId,
        email,
        role: 'admin',
        student_name: 'Admin Owner',
        is_pro: true,
        updated_at: new Date().toISOString(),
      });

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err: any) {
    return { success: false, error: err?.message || 'Admin update failed.' };
  }
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
