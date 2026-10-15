import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { COLORS, BORDER_RADIUS, SPACING, SHADOWS } from '../../constants/theme';
import { triggerHaptic } from '../../utils/haptics';

interface ChampCardProps {
  children: React.ReactNode;
  onPress?: () => void;
  style?: ViewStyle;
  variant?: 'white' | 'gold' | 'blue' | 'accent' | 'outlined';
  shadow?: 'none' | 'small' | 'medium' | 'large';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}

export const ChampCard: React.FC<ChampCardProps> = ({
  children,
  onPress,
  style,
  variant = 'white',
  shadow = 'small',
  padding = 'lg',
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'gold':
        return {
          backgroundColor: '#FFFBEB',
          borderColor: '#FDE68A',
          borderWidth: 1.5,
        };
      case 'blue':
        return {
          backgroundColor: COLORS.primarySoft,
          borderColor: '#BFDBFE',
          borderWidth: 1.5,
        };
      case 'accent':
        return {
          backgroundColor: COLORS.backgroundAlt,
          borderColor: COLORS.border,
          borderWidth: 1,
        };
      case 'outlined':
        return {
          backgroundColor: COLORS.white,
          borderColor: COLORS.borderStrong,
          borderWidth: 2,
        };
      case 'white':
      default:
        return {
          backgroundColor: COLORS.white,
          borderColor: COLORS.border,
          borderWidth: 1,
        };
    }
  };

  const getPadding = () => {
    switch (padding) {
      case 'none':
        return 0;
      case 'sm':
        return SPACING.sm;
      case 'md':
        return SPACING.md;
      case 'xl':
        return SPACING.xl;
      case 'lg':
      default:
        return SPACING.lg;
    }
  };

  const getShadow = () => {
    if (shadow === 'none') return null;
    return SHADOWS[shadow];
  };

  const cardStyle = [
    styles.card,
    getVariantStyles(),
    getShadow(),
    { padding: getPadding() },
    style,
  ];

  if (onPress) {
    return (
      <TouchableOpacity
        activeOpacity={0.85}
        onPress={() => {
          triggerHaptic('light');
          onPress();
        }}
        style={cardStyle}
      >
        {children}
      </TouchableOpacity>
    );
  }

  return <View style={cardStyle}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    borderRadius: BORDER_RADIUS.lg,
  },
});
