import { UserProfile } from '../types';

export const TRIAL_DURATION_DAYS = 30;

export interface MonetizationInfo {
  isPro: boolean;
  isTrialActive: boolean;
  daysRemaining: number;
  daysElapsed: number;
  shouldShowAds: boolean;
  statusBadge: string;
  statusLabel: string;
  statusColor: string;
}

// Calculate how many days have elapsed since trial started
export function getTrialDaysElapsed(profile: UserProfile): number {
  if (!profile.trialStartedAt) return 0;
  const start = new Date(profile.trialStartedAt).getTime();
  const now = Date.now();
  const diffMs = Math.max(0, now - start);
  return Math.floor(diffMs / (1000 * 60 * 60 * 24));
}

// Calculate how many free trial days remain (out of 30)
export function getTrialDaysRemaining(profile: UserProfile): number {
  const elapsed = getTrialDaysElapsed(profile);
  return Math.max(0, TRIAL_DURATION_DAYS - elapsed);
}

// Check if 30-day VIP free trial is still valid
export function isTrialActive(profile: UserProfile): boolean {
  if (profile.isPro) return true;
  return getTrialDaysRemaining(profile) > 0;
}

// Determine if ads should be displayed
export function shouldShowAds(profile: UserProfile): boolean {
  // Pro subscribers never see ads
  if (profile.isPro) return false;
  // During first 30 days trial, completely ad-free!
  if (isTrialActive(profile)) return false;
  // After 30 days, free tier users see safe educational ads
  return true;
}

// Get comprehensive status info for UI and Badges
export function getMonetizationInfo(profile: UserProfile): MonetizationInfo {
  const isPro = !!profile.isPro;
  const daysElapsed = getTrialDaysElapsed(profile);
  const daysRemaining = getTrialDaysRemaining(profile);
  const trialActive = isTrialActive(profile);
  const showAds = shouldShowAds(profile);

  if (isPro) {
    return {
      isPro: true,
      isTrialActive: false,
      daysRemaining: 0,
      daysElapsed,
      shouldShowAds: false,
      statusBadge: 'PRO VIP ⭐',
      statusLabel: 'Ad-Free Unlimited Member',
      statusColor: '#F59E0B',
    };
  }

  if (trialActive) {
    return {
      isPro: false,
      isTrialActive: true,
      daysRemaining,
      daysElapsed,
      shouldShowAds: false,
      statusBadge: `${daysRemaining} Days Free Trial 🎁`,
      statusLabel: `VIP Ad-Free Trial (${daysRemaining} Days Left)`,
      statusColor: '#10B981',
    };
  }

  return {
    isPro: false,
    isTrialActive: false,
    daysRemaining: 0,
    daysElapsed,
    shouldShowAds: true,
    statusBadge: 'Free Plan 📺',
    statusLabel: 'Trial Expired • Ad-Supported',
    statusColor: '#64748B',
  };
}

// Subscription Pricing Plans (Indian Rupee Pricing)
export const SUBSCRIPTION_PLANS = [
  {
    id: 'monthly',
    name: 'Monthly Champ',
    priceText: '₹99 / month',
    priceValue: 99,
    period: 'monthly',
    savings: '',
    popular: false,
    features: [
      '100% Ad-Free Learning',
      'All 140+ NCERT Chapters',
      'Unlimited Daily Quizzes',
      'Printable Progress Reports',
    ],
  },
  {
    id: 'yearly',
    name: 'Annual Champ (Best Value)',
    priceText: '₹499 / year',
    priceValue: 499,
    period: 'yearly',
    savings: 'Save 58%',
    popular: true,
    features: [
      '100% Ad-Free Learning',
      'All 140+ NCERT Chapters',
      'Unlimited 365 Days Roadmap',
      'Weekly WhatsApp Parent Summary',
      'Gold Champion Certificate',
    ],
  },
];
