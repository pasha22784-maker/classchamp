import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { COLORS, BORDER_RADIUS, SPACING, SHADOWS } from '../../constants/theme';
import { triggerHaptic } from '../../utils/haptics';

interface DragOrderRendererProps {
  scrambledTokens: string[];
  currentSequence: string[];
  correctSequence: string[];
  isSubmitted: boolean;
  onUpdateSequence: (seq: string[]) => void;
}

export const DragOrderRenderer: React.FC<DragOrderRendererProps> = ({
  scrambledTokens,
  currentSequence,
  correctSequence,
  isSubmitted,
  onUpdateSequence,
}) => {
  const isCorrect =
    isSubmitted &&
    currentSequence.length === correctSequence.length &&
    currentSequence.every((token, idx) => token === correctSequence[idx]);

  // Handle tapping an available token at the bottom to add to sentence tray
  const handleBankTokenTap = (token: string, tokenIndex: number) => {
    if (isSubmitted) return;
    triggerHaptic('light');
    onUpdateSequence([...currentSequence, token]);
  };

  // Handle tapping a token in the tray to return it back to bank
  const handleTrayTokenTap = (indexToRemove: number) => {
    if (isSubmitted) return;
    triggerHaptic('light');
    const updated = currentSequence.filter((_, idx) => idx !== indexToRemove);
    onUpdateSequence(updated);
  };

  // Track which scrambled tokens have been placed
  const placedCounts: Record<string, number> = {};
  currentSequence.forEach((t) => {
    placedCounts[t] = (placedCounts[t] || 0) + 1;
  });

  const availableTokensWithStatus = scrambledTokens.map((token, index) => {
    // Count how many times this token appears up to this index in scrambledTokens
    let occurrencesBefore = 0;
    for (let i = 0; i <= index; i++) {
      if (scrambledTokens[i] === token) occurrencesBefore++;
    }
    const isUsed = (placedCounts[token] || 0) >= occurrencesBefore;
    return { token, isUsed, originalIndex: index };
  });

  return (
    <View style={styles.container}>
      {/* Target Sentence Tray */}
      <View
        style={[
          styles.sentenceTray,
          isSubmitted && isCorrect && styles.trayCorrect,
          isSubmitted && !isCorrect && styles.trayIncorrect,
          SHADOWS.small,
        ]}
      >
        <Text style={styles.trayLabel}>Your Sentence Order (Tap to remove):</Text>
        <View style={styles.trayChipsRow}>
          {currentSequence.length === 0 ? (
            <Text style={styles.placeholderText}>
              Tap words below in the right order... ✍️
            </Text>
          ) : (
            currentSequence.map((word, idx) => (
              <TouchableOpacity
                key={`${word}_${idx}`}
                activeOpacity={0.8}
                disabled={isSubmitted}
                onPress={() => handleTrayTokenTap(idx)}
                style={[
                  styles.trayChip,
                  isSubmitted && isCorrect && styles.chipCorrect,
                  isSubmitted && !isCorrect && styles.chipIncorrect,
                ]}
              >
                <Text
                  style={[
                    styles.trayChipText,
                    isSubmitted && isCorrect && styles.chipTextCorrect,
                    isSubmitted && !isCorrect && styles.chipTextIncorrect,
                  ]}
                >
                  {word}
                </Text>
              </TouchableOpacity>
            ))
          )}
        </View>
      </View>

      {/* Available Word Bank */}
      <Text style={styles.bankLabel}>Tap words to arrange them:</Text>
      <View style={styles.bankChipsRow}>
        {availableTokensWithStatus.map((item, idx) => (
          <TouchableOpacity
            key={`${item.token}_${idx}`}
            activeOpacity={0.8}
            disabled={isSubmitted || item.isUsed}
            onPress={() => handleBankTokenTap(item.token, idx)}
            style={[
              styles.bankChip,
              item.isUsed && styles.bankChipUsed,
              SHADOWS.small,
            ]}
          >
            <Text
              style={[
                styles.bankChipText,
                item.isUsed && styles.bankChipTextUsed,
              ]}
            >
              {item.token}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Correct Reveal on Wrong */}
      {isSubmitted && !isCorrect && (
        <View style={styles.solutionBox}>
          <Text style={styles.solutionText}>
            Correct Sequence: <Text style={styles.solutionHighlight}>{correctSequence.join(' ')}</Text>
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: SPACING.lg,
  },
  sentenceTray: {
    backgroundColor: COLORS.white,
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.lg,
    borderWidth: 2,
    borderColor: COLORS.primaryLight,
    minHeight: 110,
    marginBottom: SPACING.xl,
  },
  trayCorrect: {
    borderColor: COLORS.success,
    backgroundColor: '#ECFDF5',
  },
  trayIncorrect: {
    borderColor: COLORS.error,
    backgroundColor: '#FEF2F2',
  },
  trayLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: COLORS.textMedium,
    marginBottom: SPACING.sm,
  },
  trayChipsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SPACING.sm,
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: 14,
    color: COLORS.textLight,
    fontStyle: 'italic',
    paddingVertical: SPACING.sm,
  },
  trayChip: {
    backgroundColor: COLORS.primarySoft,
    borderWidth: 1.5,
    borderColor: COLORS.primary,
    borderRadius: BORDER_RADIUS.md,
    paddingVertical: 6,
    paddingHorizontal: SPACING.md,
  },
  chipCorrect: {
    backgroundColor: '#D1FAE5',
    borderColor: COLORS.success,
  },
  chipIncorrect: {
    backgroundColor: '#FEE2E2',
    borderColor: COLORS.error,
  },
  trayChipText: {
    fontSize: 15,
    fontWeight: '800',
    color: COLORS.primaryDark,
  },
  chipTextCorrect: {
    color: '#065F46',
  },
  chipTextIncorrect: {
    color: '#991B1B',
  },
  bankLabel: {
    fontSize: 14,
    fontWeight: '800',
    color: COLORS.textDark,
    marginBottom: SPACING.md,
  },
  bankChipsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SPACING.sm,
  },
  bankChip: {
    backgroundColor: COLORS.white,
    borderWidth: 2,
    borderColor: COLORS.gold,
    borderRadius: BORDER_RADIUS.round,
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.lg,
  },
  bankChipUsed: {
    backgroundColor: COLORS.backgroundAlt,
    borderColor: COLORS.border,
    opacity: 0.4,
  },
  bankChipText: {
    fontSize: 15,
    fontWeight: '800',
    color: COLORS.textDark,
  },
  bankChipTextUsed: {
    color: COLORS.textLight,
  },
  solutionBox: {
    marginTop: SPACING.lg,
    backgroundColor: '#FEF2F2',
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.md,
    borderWidth: 1,
    borderColor: '#FECACA',
  },
  solutionText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#991B1B',
  },
  solutionHighlight: {
    fontWeight: '900',
    color: COLORS.primaryDark,
  },
});
