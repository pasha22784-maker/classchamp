import { createClient, SupabaseClient } from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserProfile } from '../types';

// Supabase Configuration
export const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL || 'https://oeghcusumhhqlvokwnff.supabase.co';
export const SUPABASE_ANON_KEY = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_KIThD2aZvbUIKzP6Djo7Pw_jLRljbbz';

// Helper to check if user has linked real Supabase credentials
export const isSupabaseConfigured = (): boolean => {
  return (
    Boolean(SUPABASE_URL) &&
    !SUPABASE_URL.includes('your-project-id') &&
    Boolean(SUPABASE_ANON_KEY) &&
    !SUPABASE_ANON_KEY.includes('your-public-anon-key')
  );
};

// Initialize Supabase Client with persistent AsyncStorage session
export const supabase: SupabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

// --- AUTHENTICATION HELPERS ---

/**
 * Send Phone OTP via SMS to Parent's Mobile
 * @param phone Indian mobile number (+91XXXXXXXXXX)
 */
export async function sendParentPhoneOtp(phone: string): Promise<{ success: boolean; error?: string }> {
  if (!isSupabaseConfigured()) {
    return {
      success: false,
      error: 'Supabase credentials configure nahi hain. Kripya URL aur Key add karein.',
    };
  }

  try {
    const formattedPhone = phone.startsWith('+') ? phone : `+91${phone.replace(/\D/g, '')}`;
    const { error } = await supabase.auth.signInWithOtp({
      phone: formattedPhone,
    });

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err: any) {
    return { success: false, error: err?.message || 'OTP bhejne mein samasya aayi.' };
  }
}

/**
 * Verify SMS OTP
 */
export async function verifyParentPhoneOtp(
  phone: string,
  token: string
): Promise<{ success: boolean; user?: any; error?: string }> {
  if (!isSupabaseConfigured()) {
    return { success: false, error: 'Supabase configure nahi hai.' };
  }

  try {
    const formattedPhone = phone.startsWith('+') ? phone : `+91${phone.replace(/\D/g, '')}`;
    const { data, error } = await supabase.auth.verifyOtp({
      phone: formattedPhone,
      token: token.trim(),
      type: 'sms',
    });

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true, user: data.user };
  } catch (err: any) {
    return { success: false, error: err?.message || 'OTP verify nahi ho paya.' };
  }
}

/**
 * Send OTP to Parent's Email ID
 */
export async function sendParentEmailOtp(email: string): Promise<{ success: boolean; error?: string }> {
  if (!isSupabaseConfigured()) {
    return { success: false, error: 'Supabase configure nahi hai.' };
  }

  try {
    const { error } = await supabase.auth.signInWithOtp({
      email: email.trim().toLowerCase(),
    });

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err: any) {
    return { success: false, error: err?.message || 'Email par OTP nahi bhej paya.' };
  }
}

/**
 * Verify Email 6-digit OTP
 */
export async function verifyParentEmailOtp(
  email: string,
  token: string
): Promise<{ success: boolean; user?: any; error?: string }> {
  if (!isSupabaseConfigured()) {
    return { success: false, error: 'Supabase configure nahi hai.' };
  }

  try {
    const { data, error } = await supabase.auth.verifyOtp({
      email: email.trim().toLowerCase(),
      token: token.trim(),
      type: 'email',
    });

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true, user: data.user };
  } catch (err: any) {
    return { success: false, error: err?.message || 'Email OTP verify nahi ho paya.' };
  }
}

/**
 * Sign In with Email & Password (Alternative for parents)
 */
export async function signInWithParentEmail(
  email: string,
  pass: string
): Promise<{ success: boolean; user?: any; error?: string }> {
  if (!isSupabaseConfigured()) {
    return { success: false, error: 'Supabase configure nahi hai.' };
  }

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password: pass,
    });

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true, user: data.user };
  } catch (err: any) {
    return { success: false, error: err?.message || 'Sign in fail ho gaya.' };
  }
}

/**
 * Sign Up with Email & Password
 */
export async function signUpWithParentEmail(
  email: string,
  pass: string
): Promise<{ success: boolean; user?: any; error?: string }> {
  if (!isSupabaseConfigured()) {
    return { success: false, error: 'Supabase configure nahi hai.' };
  }

  try {
    const { data, error } = await supabase.auth.signUp({
      email: email.trim(),
      password: pass,
    });

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true, user: data.user };
  } catch (err: any) {
    return { success: false, error: err?.message || 'Account nahi ban paya.' };
  }
}

/**
 * Sign Out
 */
export async function signOutParent(): Promise<void> {
  if (!isSupabaseConfigured()) return;
  try {
    await supabase.auth.signOut();
  } catch {
    // ignore
  }
}

// --- DATABASE CLOUD SYNC HELPERS ---

/**
 * Sync Local User Profile & 30-Day Trial State to Supabase Cloud
 */
export async function syncProfileToCloud(profile: UserProfile): Promise<boolean> {
  if (!isSupabaseConfigured()) return false;

  try {
    const { data: sessionData } = await supabase.auth.getSession();
    const user = sessionData?.session?.user;
    if (!user) return false;

    const payload = {
      id: user.id,
      phone: user.phone || profile.parentPhone || null,
      email: user.email || profile.parentEmail || null,
      student_name: profile.name,
      grade: profile.grade,
      avatar_id: profile.avatarId,
      total_stars: profile.totalStars,
      total_trophies: profile.totalTrophies,
      current_streak: profile.currentStreak,
      is_pro: profile.isPro,
      subscription_plan: profile.subscriptionPlan || null,
      subscription_expires_at: profile.subscriptionExpiresAt || null,
      trial_started_at: profile.trialStartedAt || new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    const { error } = await supabase.from('profiles').upsert(payload);
    if (error) {
      console.warn('Supabase sync warning:', error);
      return false;
    }

    return true;
  } catch (err) {
    console.warn('Cloud sync error:', err);
    return false;
  }
}

/**
 * Fetch Profile and Subscription from Supabase Cloud
 */
export async function fetchProfileFromCloud(userId: string): Promise<Partial<UserProfile> | null> {
  if (!isSupabaseConfigured() || !userId) return null;

  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();

    if (error || !data) return null;

    return {
      name: data.student_name,
      grade: data.grade,
      avatarId: data.avatar_id,
      totalStars: data.total_stars,
      totalTrophies: data.total_trophies,
      currentStreak: data.current_streak,
      isPro: data.is_pro,
      subscriptionPlan: data.subscription_plan,
      subscriptionExpiresAt: data.subscription_expires_at,
      trialStartedAt: data.trial_started_at,
      userId: data.id,
      parentPhone: data.phone,
      parentEmail: data.email,
    };
  } catch {
    return null;
  }
}
