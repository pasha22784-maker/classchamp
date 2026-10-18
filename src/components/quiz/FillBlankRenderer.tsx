import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { COLORS, BORDER_RADIUS, SPACING, SHADOWS } from '../../constants/theme';
import { triggerHaptic } from '../../utils/haptics';

import { SpeakerButton } from '../common/SpeakerButton';

interface FillBlankRendererProps {
  displayTemplate: string;
  wordBank: string[];
  correctAnswer: string;
  selectedWord: string | null;
  isSubmitted: boolean;
  onSelectWord: (word: string | null) => void;
}

export const FillBlankRenderer: React.FC<FillBlankRendererProps> = ({
  displayTemplate,
  wordBank,
  correctAnswer,
  selectedWord,
  isSubmitted,
  onSelectWord,
}) => {
  // Split template by [BLANK]
  const parts = displayTemplate.split('[BLANK]');
  const isCorrect = isSubmitted && selectedWord?.trim().toLowerCase() === correctAnswer.trim().toLowerCase();
  const isHindiTemplate = /[\u0900-\u097F]/.test(displayTemplate);
  const blankWord = selectedWord || (isHindiTemplate ? 'खाली जगह' : 'blank');
  const fullSpokenSentence = displayTemplate.replace('[BLANK]', blankWord);

  const handleWordTap = (word: string) => {
    if (isSubmitted) return;
    triggerHaptic('light');
    if (selectedWord === word) {
      onSelectWord(null); // Deselect
    } else {
      onSelectWord(word);
    }
  };

  const handleBlankTap = () => {
    if (isSubmitted || !selectedWord) return;
    triggerHaptic('light');
    onSelectWord(null);
  };

  return (
    <View style={styles.container}>
      {/* Interactive Sentence with Blank Slot */}
      <View style={[styles.sentenceCard, SHADOWS.small]}>
        <View style={styles.sentenceHeaderRow}>
          <Text style={styles.sentenceLabel}>Sentence:</Text>
          <SpeakerButton textToSpeak={fullSpokenSentence} size="sm" />
        </View>

        <Text style={styles.sentenceText}>
          {parts[0]}
          <TouchableOpacity
            activeOpacity={0.8}
            disabled={isSubmitted}
            onPress={handleBlankTap}
            style={[
              styles.blankSlot,
              selectedWord ? styles.blankSlotFilled : styles.blankSlotEmpty,
              isSubmitted && isCorrect && styles.blankSlotCorrect,
              isSubmitted && !isCorrect && styles.blankSlotIncorrect,
            ]}
          >
            <Text
              style={[
                styles.blankText,
                selectedWord ? styles.blankTextFilled : styles.blankTextEmpty,
                isSubmitted && isCorrect && styles.blankTextCorrect,
                isSubmitted && !isCorrect && styles.blankTextIncorrect,
              ]}
            >
              {selectedWord || '______'}
            </Text>
          </TouchableOpacity>
          {parts[1] || ''}
        </Text>
      </View>

      {/* Word Bank Label */}
      <View style={styles.wordBankHeader}>
        <Text style={styles.wordBankTitle}>💡 Word Bank (Tap word to pick, 🔊 to hear):</Text>
        {selectedWord && !isSubmitted && (
          <Text style={styles.tapToUndoText}>Tap blank to remove</Text>
        )}
      </View>

      {/* Word Bank Chips with Speaker Buttons */}
      <View style={styles.chipsContainer}>
        {wordBank.map((word) => {
          const isSelected = selectedWord === word;
          return (
            <View
              key={word}
              style={[
                styles.wordChipWrapper,
                isSelected && styles.wordChipUsed,
                SHADOWS.small,
              ]}
            >
              <TouchableOpacity
                activeOpacity={0.8}
                disabled={isSubmitted}
                onPress={() => handleWordTap(word)}
                style={styles.wordChipTouch}
              >
                <Text
                  style={[
                    styles.wordChipText,
                    isSelected && styles.wordChipTextUsed,
                  ]}
                >
                  {word}
                </Text>
              </TouchableOpacity>
              <SpeakerButton textToSpeak={word} size="sm" style={styles.chipSpeakerBtn} />
            </View>
          );
        })}
      </View>

      {/* Solution Reveal if Submitted Incorrect */}
      {isSubmitted && !isCorrect && (
        <View style={styles.solutionBox}>
          <Text style={styles.solutionText}>
            Correct Answer: <Text style={styles.solutionHighlight}>{correctAnswer}</Text>
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
  sentenceCard: {
    backgroundColor: COLORS.white,
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.lg,
    borderWidth: 1.5,
    borderColor: COLORS.border,
    marginBottom: SPACING.xl,
  },
  sentenceHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.sm,
  },
  sentenceLabel: {
    fontSize: 12,
    fontWeight: '800',
    color: COLORS.textMedium,
    textTransform: 'uppercase',
  },
  sentenceText: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.textDark,
    lineHeight: 34,
  },
  blankSlot: {
    paddingHorizontal: SPACING.md,
    paddingVertical: 4,
    borderRadius: BORDER_RADIUS.md,
    borderWidth: 2,
    marginHorizontal: 4,
    alignSelf: 'center',
  },
  blankSlotEmpty: {
    backgroundColor: COLORS.backgroundAlt,
    borderColor: COLORS.primaryLight,
    borderStyle: 'dashed',
  },
  blankSlotFilled: {
    backgroundColor: COLORS.primarySoft,
    borderColor: COLORS.primary,
  },
  blankSlotCorrect: {
    backgroundColor: '#ECFDF5',
    borderColor: COLORS.success,
  },
  blankSlotIncorrect: {
    backgroundColor: '#FEF2F2',
    borderColor: COLORS.error,
  },
  blankText: {
    fontSize: 18,
    fontWeight: '800',
  },
  blankTextEmpty: {
    color: COLORS.textLight,
  },
  blankTextFilled: {
    color: COLORS.primary,
  },
  blankTextCorrect: {
    color: '#065F46',
  },
  blankTextIncorrect: {
    color: '#991B1B',
  },
  wordBankHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  wordBankTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: COLORS.textDark,
  },
  tapToUndoText: {
    fontSize: 12,
    color: COLORS.textMedium,
    fontStyle: 'italic',
  },
  chipsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SPACING.md,
  },
  wordChipWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderWidth: 2,
    borderColor: COLORS.gold,
    borderRadius: BORDER_RADIUS.round,
    paddingLeft: SPACING.md,
    paddingRight: 4,
    paddingVertical: 4,
    gap: 6,
  },
  wordChipTouch: {
    paddingVertical: SPACING.xs,
  },
  chipSpeakerBtn: {
    borderWidth: 1,
  },
  wordChipUsed: {
    backgroundColor: COLORS.backgroundAlt,
    borderColor: COLORS.border,
    opacity: 0.5,
  },
  wordChipText: {
    fontSize: 16,
    fontWeight: '800',
    color: COLORS.textDark,
  },
  wordChipTextUsed: {
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
    fontSize: 14,
    fontWeight: '700',
    color: '#991B1B',
  },
  solutionHighlight: {
    fontWeight: '900',
    color: COLORS.primaryDark,
  },
});
