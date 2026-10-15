import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { COLORS, BORDER_RADIUS, SPACING, SHADOWS } from '../../constants/theme';
import { triggerHaptic } from '../../utils/haptics';

export type ButtonVariant = 'primary' | 'gold' | 'success' | 'outline' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface ChampButtonProps {
  title: string;
  onPress: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: string;
  iconRight?: string;
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  haptic?: boolean;
}

export const ChampButton: React.FC<ChampButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  disabled = false,
  loading = false,
  style,
  textStyle,
  haptic = true,
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    if (disabled || loading) return;
    if (haptic) {
      triggerHaptic(variant === 'success' ? 'success' : 'medium');
    }
    onPress();
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'gold':
        return {
          bg: COLORS.gold,
          borderBottom: COLORS.goldDark,
          textColor: COLORS.textDark,
        };
      case 'success':
        return {
          bg: COLORS.success,
          borderBottom: '#047857',
          textColor: COLORS.white,
        };
      case 'outline':
        return {
          bg: COLORS.white,
          borderBottom: COLORS.borderStrong,
          border: COLORS.borderStrong,
          textColor: COLORS.textDark,
        };
      case 'danger':
        return {
          bg: COLORS.error,
          borderBottom: '#B91C1C',
          textColor: COLORS.white,
        };
      case 'primary':
      default:
        return {
          bg: COLORS.primary,
          borderBottom: COLORS.primaryDark,
          textColor: COLORS.white,
        };
    }
  };

  const currentVariant = getVariantStyles();

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return {
          paddingVertical: SPACING.sm,
          paddingHorizontal: SPACING.md,
          fontSize: 14,
          iconSize: 16,
          bottomDepth: 3,
        };
      case 'lg':
        return {
          paddingVertical: SPACING.lg,
          paddingHorizontal: SPACING.xl,
          fontSize: 18,
          iconSize: 22,
          bottomDepth: 5,
        };
      case 'md':
      default:
        return {
          paddingVertical: SPACING.md,
          paddingHorizontal: SPACING.lg,
          fontSize: 16,
          iconSize: 18,
          bottomDepth: 4,
        };
    }
  };

  const currentSize = getSizeStyles();

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={handlePress}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      disabled={disabled || loading}
      style={[
        styles.buttonContainer,
        {
          backgroundColor: disabled ? COLORS.borderStrong : currentVariant.bg,
          borderBottomColor: disabled ? COLORS.border : currentVariant.borderBottom,
          borderBottomWidth: isPressed ? 1 : currentSize.bottomDepth,
          transform: [{ translateY: isPressed ? currentSize.bottomDepth - 1 : 0 }],
          paddingVertical: currentSize.paddingVertical,
          paddingHorizontal: currentSize.paddingHorizontal,
          borderWidth: variant === 'outline' ? 2 : 0,
          borderColor: currentVariant.border || undefined,
        },
        !disabled && SHADOWS.tactileButton,
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={currentVariant.textColor} size="small" />
      ) : (
        <View style={styles.contentRow}>
          {icon ? <Text style={[styles.icon, { fontSize: currentSize.iconSize }]}>{icon}</Text> : null}
          <Text
            style={[
              styles.buttonText,
              {
                color: disabled ? COLORS.textLight : currentVariant.textColor,
                fontSize: currentSize.fontSize,
              },
              textStyle,
            ]}
          >
            {title}
          </Text>
          {iconRight ? (
            <Text style={[styles.iconRight, { fontSize: currentSize.iconSize }]}>{iconRight}</Text>
          ) : null}
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: BORDER_RADIUS.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: SPACING.sm,
  },
  buttonText: {
    fontWeight: '800',
    letterSpacing: 0.4,
    textAlign: 'center',
  },
  icon: {
    marginRight: 4,
  },
  iconRight: {
    marginLeft: 4,
  },
});
