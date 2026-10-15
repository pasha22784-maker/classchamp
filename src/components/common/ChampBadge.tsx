import React from 'react';
import { StyleSheet, Text, View, ViewStyle, TextStyle } from 'react-native';
import { COLORS, BORDER_RADIUS, SPACING } from '../../constants/theme';

export type BadgeVariant = 'gold' | 'primary' | 'success' | 'warning' | 'purple' | 'neutral';

interface ChampBadgeProps {
  label: string;
  icon?: string;
  variant?: BadgeVariant;
  size?: 'sm' | 'md' | 'lg';
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export const ChampBadge: React.FC<ChampBadgeProps> = ({
  label,
  icon,
  variant = 'gold',
  size = 'md',
  style,
  textStyle,
}) => {
  const getBadgeColors = () => {
    switch (variant) {
      case 'gold':
        return { bg: COLORS.goldBadge, text: COLORS.goldDark, border: '#FDE68A' };
      case 'primary':
        return { bg: COLORS.primarySoft, text: COLORS.primary, border: '#BFDBFE' };
      case 'success':
        return { bg: COLORS.successSoft, text: '#065F46', border: '#A7F3D0' };
      case 'warning':
        return { bg: COLORS.warningSoft, text: '#C2410C', border: '#FED7AA' };
      case 'purple':
        return { bg: COLORS.purpleSoft, text: '#6D28D9', border: '#DDD6FE' };
      case 'neutral':
      default:
        return { bg: COLORS.backgroundAlt, text: COLORS.textMedium, border: COLORS.border };
    }
  };

  const colors = getBadgeColors();

  const sizeStyles = {
    sm: { paddingVertical: 2, paddingHorizontal: SPACING.sm, fontSize: 11 },
    md: { paddingVertical: SPACING.xs, paddingHorizontal: SPACING.md, fontSize: 13 },
    lg: { paddingVertical: SPACING.sm, paddingHorizontal: SPACING.lg, fontSize: 15 },
  }[size];

  return (
    <View
      style={[
        styles.badge,
        {
          backgroundColor: colors.bg,
          borderColor: colors.border,
          paddingVertical: sizeStyles.paddingVertical,
          paddingHorizontal: sizeStyles.paddingHorizontal,
        },
        style,
      ]}
    >
      {icon ? <Text style={[styles.icon, { fontSize: sizeStyles.fontSize + 2 }]}>{icon}</Text> : null}
      <Text
        style={[
          styles.label,
          {
            color: colors.text,
            fontSize: sizeStyles.fontSize,
          },
          textStyle,
        ]}
      >
        {label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: BORDER_RADIUS.round,
    borderWidth: 1,
    alignSelf: 'flex-start',
    gap: 4,
  },
  icon: {
    marginRight: 2,
  },
  label: {
    fontWeight: '700',
    letterSpacing: 0.3,
  },
});
