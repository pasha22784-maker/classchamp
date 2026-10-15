// ClassChamp Kid-Safe Design System & Theme Tokens

export const COLORS = {
  // Brand Primaries
  primary: '#1E40AF',        // Royal Blue
  primaryDark: '#1E3A8A',    // Deep Royal Navy
  primaryLight: '#3B82F6',   // Bright Blue
  primarySoft: '#EFF6FF',    // Ice Blue Background

  // Accent & Stars
  gold: '#F59E0B',           // Golden Champ Yellow
  goldLight: '#FDE68A',      // Soft Gold
  goldDark: '#D97706',       // Amber Gold
  goldBadge: '#FEF3C7',      // Light Gold Pill

  // Feedback Colors
  success: '#10B981',        // Emerald Green (Correct Answer)
  successSoft: '#D1FAE5',    // Soft Green Pill
  error: '#EF4444',          // Gentle Coral Red
  errorSoft: '#FEE2E2',      // Soft Red
  warning: '#F97316',        // Orange (Streak / Alert)
  warningSoft: '#FFEDD5',

  // Neutrals & Surfaces
  white: '#FFFFFF',
  cardBg: '#FFFFFF',
  background: '#F8FAFC',     // Calm light slate (protects young eyes)
  backgroundAlt: '#F1F5F9',
  border: '#E2E8F0',
  borderStrong: '#CBD5E1',

  // Typography Colors
  textDark: '#0F172A',       // High-contrast slate charcoal
  textMedium: '#475569',     // Readable subtitle slate
  textLight: '#94A3B8',      // Soft metadata text
  textInverted: '#FFFFFF',

  // Kid Fun Accents
  purple: '#8B5CF6',
  purpleSoft: '#EDE9FE',
  teal: '#14B8A6',
  tealSoft: '#CCFBF1',
  pink: '#EC4899',
  pinkSoft: '#FCE7F3',
};

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  giant: 32,
};

export const BORDER_RADIUS = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  round: 9999,
};

export const SHADOWS = {
  small: {
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  medium: {
    shadowColor: '#1E40AF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  large: {
    shadowColor: '#1E40AF',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 8,
  },
  tactileButton: {
    shadowColor: '#1E3A8A',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 0,
    elevation: 4,
  },
};
