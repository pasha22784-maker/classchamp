import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { COLORS, BORDER_RADIUS, SPACING, SHADOWS } from '../../constants/theme';
import { MatchPairItem } from '../../types';
import { triggerHaptic } from '../../utils/haptics';

interface MatchPairsRendererProps {
  pairs: MatchPairItem[];
  selectedMatches: Record<string, string>; // { pairId: rightValue }
  isSubmitted: boolean;
  onUpdateMatches: (matches: Record<string, string>) => void;
}

export const MatchPairsRenderer: React.FC<MatchPairsRendererProps> = ({
  pairs,
  selectedMatches,
  isSubmitted,
  onUpdateMatches,
}) => {
  const [activeLeftId, setActiveLeftId] = useState<string | null>(null);

  // Scramble the right column so it's a real puzzle
  const [scrambledRights] = useState(() => {
    return [...pairs].map((p) => p.right).sort(() => Math.random() - 0.5);
  });

  const handleLeftTap = (pairId: string) => {
    if (isSubmitted) return;
    triggerHaptic('light');

    if (activeLeftId === pairId) {
      setActiveLeftId(null);
    } else {
      setActiveLeftId(pairId);
    }
  };

  const handleRightTap = (rightValue: string) => {
    if (isSubmitted) return;
    triggerHaptic('medium');

    if (!activeLeftId) {
      // If no left item is active, see if this right item is already matched to something and unmatch it
      const currentEntry = Object.entries(selectedMatches).find(([_, val]) => val === rightValue);
      if (currentEntry) {
        const next = { ...selectedMatches };
        delete next[currentEntry[0]];
        onUpdateMatches(next);
      }
      return;
    }

    // Match activeLeftId to rightValue
    const nextMatches = { ...selectedMatches, [activeLeftId]: rightValue };
    onUpdateMatches(nextMatches);
    setActiveLeftId(null);
  };

  // Pair colors for clear visual connection
  const PAIR_COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#8B5CF6'];

  return (
    <View style={styles.container}>
      <Text style={styles.instruction}>
        👉 Tap an item on the left, then tap its match on the right:
      </Text>

      <View style={styles.columnsRow}>
        {/* Left Column */}
        <View style={styles.column}>
          {pairs.map((pair, idx) => {
            const isLeftActive = activeLeftId === pair.id;
            const matchedRight = selectedMatches[pair.id];
            const isCorrect = isSubmitted && matchedRight === pair.right;
            const pairColor = PAIR_COLORS[idx % PAIR_COLORS.length];

            return (
              <TouchableOpacity
                key={pair.id}
                activeOpacity={0.8}
                disabled={isSubmitted}
                onPress={() => handleLeftTap(pair.id)}
                style={[
                  styles.card,
                  isLeftActive && styles.cardActive,
                  matchedRight && { borderColor: pairColor, borderWidth: 2 },
                  isSubmitted && isCorrect && styles.cardCorrect,
                  isSubmitted && !isCorrect && styles.cardIncorrect,
                  SHADOWS.small,
                ]}
              >
                <Text
                  style={[
                    styles.cardText,
                    isLeftActive && styles.cardTextActive,
                    matchedRight && { color: pairColor, fontWeight: '800' },
                  ]}
                >
                  {pair.left}
                </Text>
                {matchedRight && !isSubmitted && (
                  <View style={[styles.dotPill, { backgroundColor: pairColor }]} />
                )}
                {isSubmitted && (
                  <Text style={styles.validationIcon}>{isCorrect ? '✓' : '✗'}</Text>
                )}
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Right Column */}
        <View style={styles.column}>
          {scrambledRights.map((rightVal) => {
            const matchedLeftEntry = Object.entries(selectedMatches).find(
              ([_, val]) => val === rightVal
            );
            const isMatched = !!matchedLeftEntry;
            const originalPair = pairs.find((p) => p.right === rightVal);
            const isCorrect = isSubmitted && matchedLeftEntry && originalPair?.id === matchedLeftEntry[0];
            const matchIndex = matchedLeftEntry
              ? pairs.findIndex((p) => p.id === matchedLeftEntry[0])
              : -1;
            const pairColor = matchIndex >= 0 ? PAIR_COLORS[matchIndex % PAIR_COLORS.length] : COLORS.border;

            return (
              <TouchableOpacity
                key={rightVal}
                activeOpacity={0.8}
                disabled={isSubmitted}
                onPress={() => handleRightTap(rightVal)}
                style={[
                  styles.card,
                  isMatched && { borderColor: pairColor, borderWidth: 2 },
                  isSubmitted && isCorrect && styles.cardCorrect,
                  isSubmitted && isMatched && !isCorrect && styles.cardIncorrect,
                  SHADOWS.small,
                ]}
              >
                <Text
                  style={[
                    styles.cardText,
                    isMatched && { color: pairColor, fontWeight: '800' },
                  ]}
                >
                  {rightVal}
                </Text>
                {isMatched && !isSubmitted && (
                  <View style={[styles.dotPill, { backgroundColor: pairColor }]} />
                )}
                {isSubmitted && isMatched && (
                  <Text style={styles.validationIcon}>{isCorrect ? '✓' : '✗'}</Text>
                )}
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: SPACING.lg,
  },
  instruction: {
    fontSize: 13,
    fontWeight: '700',
    color: COLORS.textMedium,
    marginBottom: SPACING.md,
  },
  columnsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: SPACING.md,
  },
  column: {
    flex: 1,
    gap: SPACING.md,
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: BORDER_RADIUS.md,
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.md,
    minHeight: 64,
    borderWidth: 1.5,
    borderColor: COLORS.border,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  cardActive: {
    borderColor: COLORS.gold,
    backgroundColor: '#FFFBEB',
    borderWidth: 2.5,
  },
  cardCorrect: {
    backgroundColor: '#ECFDF5',
    borderColor: COLORS.success,
  },
  cardIncorrect: {
    backgroundColor: '#FEF2F2',
    borderColor: COLORS.error,
  },
  cardText: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.textDark,
    textAlign: 'center',
  },
  cardTextActive: {
    color: COLORS.goldDark,
    fontWeight: '900',
  },
  dotPill: {
    width: 8,
    height: 8,
    borderRadius: 4,
    position: 'absolute',
    top: 6,
    right: 6,
  },
  validationIcon: {
    fontSize: 14,
    fontWeight: '900',
    position: 'absolute',
    top: 4,
    right: 6,
  },
});
