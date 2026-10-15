import React from 'react';
import { StyleSheet, View, Text, ViewStyle } from 'react-native';
import { COLORS, BORDER_RADIUS, SPACING } from '../../constants/theme';

interface ChampProgressBarProps {
  current: number;
  total: number;
  showText?: boolean;
  style?: ViewStyle;
}

export const ChampProgressBar: React.FC<ChampProgressBarProps> = ({
  current,
  total,
  showText = true,
  style,
}) => {
  const safeTotal = Math.max(1, total);
  const safeCurrent = Math.min(Math.max(0, current), safeTotal);
  const percentage = Math.round((safeCurrent / safeTotal) * 100);

  return (
    <View style={[styles.container, style]}>
      {showText && (
        <View style={styles.textRow}>
          <Text style={styles.stepText}>
            Question <Text style={styles.stepHighlight}>{safeCurrent}</Text> of {safeTotal}
          </Text>
          <Text style={styles.percentageText}>{percentage}%</Text>
        </View>
      )}
      <View style={styles.track}>
        <View style={[styles.fill, { width: `${percentage}%` }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  textRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.xs + 2,
  },
  stepText: {
    fontSize: 13,
    fontWeight: '600',
    color: COLORS.textMedium,
  },
  stepHighlight: {
    color: COLORS.primary,
    fontWeight: '800',
  },
  percentageText: {
    fontSize: 12,
    fontWeight: '700',
    color: COLORS.primaryDark,
  },
  track: {
    height: 12,
    backgroundColor: COLORS.backgroundAlt,
    borderRadius: BORDER_RADIUS.round,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  fill: {
    height: '100%',
    backgroundColor: COLORS.gold,
    borderRadius: BORDER_RADIUS.round,
  },
});
