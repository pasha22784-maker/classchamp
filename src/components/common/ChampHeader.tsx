import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { COLORS, SPACING, BORDER_RADIUS } from '../../constants/theme';
import { triggerHaptic } from '../../utils/haptics';

interface ChampHeaderProps {
  title?: string;
  subtitle?: string;
  onBack?: () => void;
  streakDays?: number;
  totalStars?: number;
  avatarEmoji?: string;
  onPressAvatar?: () => void;
  rightComponent?: React.ReactNode;
  style?: ViewStyle;
}

export const ChampHeader: React.FC<ChampHeaderProps> = ({
  title,
  subtitle,
  onBack,
  streakDays,
  totalStars,
  avatarEmoji,
  onPressAvatar,
  rightComponent,
  style,
}) => {
  return (
    <View style={[styles.headerContainer, style]}>
      <View style={styles.leftRow}>
        {onBack ? (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              triggerHaptic('light');
              onBack();
            }}
            style={styles.backButton}
          >
            <Text style={styles.backArrow}>←</Text>
          </TouchableOpacity>
        ) : avatarEmoji ? (
          <TouchableOpacity
            activeOpacity={onPressAvatar ? 0.7 : 1}
            disabled={!onPressAvatar}
            onPress={() => {
              if (onPressAvatar) {
                triggerHaptic('light');
                onPressAvatar();
              }
            }}
            style={styles.avatarBubble}
          >
            <Text style={styles.avatarEmoji}>{avatarEmoji}</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.logoBadge}>
            <Text style={styles.logoEmoji}>🏆</Text>
          </View>
        )}

        <View style={styles.titleColumn}>
          <Text style={styles.titleText} numberOfLines={1}>
            {title || 'ClassChamp'}
          </Text>
          {subtitle ? (
            <Text style={styles.subtitleText} numberOfLines={1}>
              {subtitle}
            </Text>
          ) : null}
        </View>
      </View>

      <View style={styles.rightRow}>
        {streakDays !== undefined && (
          <View style={styles.streakPill}>
            <Text style={styles.streakText}>🔥 {streakDays}</Text>
          </View>
        )}
        {totalStars !== undefined && (
          <View style={styles.starPill}>
            <Text style={styles.starText}>⭐ {totalStars}</Text>
          </View>
        )}
        {rightComponent}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.md,
    backgroundColor: COLORS.primaryDark,
  },
  leftRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: SPACING.md,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: BORDER_RADIUS.md,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backArrow: {
    color: COLORS.white,
    fontSize: 22,
    fontWeight: '800',
  },
  avatarBubble: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarEmoji: {
    fontSize: 24,
  },
  logoBadge: {
    width: 40,
    height: 40,
    borderRadius: BORDER_RADIUS.md,
    backgroundColor: COLORS.gold,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoEmoji: {
    fontSize: 22,
  },
  titleColumn: {
    flex: 1,
  },
  titleText: {
    fontSize: 18,
    fontWeight: '800',
    color: COLORS.white,
  },
  subtitleText: {
    fontSize: 12,
    color: COLORS.goldLight,
    fontWeight: '500',
  },
  rightRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
  },
  streakPill: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    paddingHorizontal: SPACING.md,
    paddingVertical: 4,
    borderRadius: BORDER_RADIUS.round,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.25)',
  },
  streakText: {
    color: COLORS.white,
    fontWeight: '700',
    fontSize: 13,
  },
  starPill: {
    backgroundColor: 'rgba(245, 158, 11, 0.25)',
    paddingHorizontal: SPACING.md,
    paddingVertical: 4,
    borderRadius: BORDER_RADIUS.round,
    borderWidth: 1,
    borderColor: COLORS.gold,
  },
  starText: {
    color: COLORS.goldLight,
    fontWeight: '700',
    fontSize: 13,
  },
});
