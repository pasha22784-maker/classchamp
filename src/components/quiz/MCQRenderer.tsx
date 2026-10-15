import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { COLORS, BORDER_RADIUS, SPACING, SHADOWS } from '../../constants/theme';
import { MCQOption } from '../../types';

interface MCQRendererProps {
  options: MCQOption[];
  selectedOption: MCQOption | null;
  isSubmitted: boolean;
  onSelectOption: (option: MCQOption) => void;
}

export const MCQRenderer: React.FC<MCQRendererProps> = ({
  options,
  selectedOption,
  isSubmitted,
  onSelectOption,
}) => {
  return (
    <View style={styles.optionsList}>
      {options.map((opt, index) => {
        const isChosen = selectedOption?.id === opt.id;

        let cardStyle = styles.optionNormal;
        let textStyle = styles.optionTextNormal;

        if (isSubmitted) {
          if (opt.isCorrect) {
            cardStyle = styles.optionCorrect;
            textStyle = styles.optionTextCorrect;
          } else if (isChosen && !opt.isCorrect) {
            cardStyle = styles.optionIncorrect;
            textStyle = styles.optionTextIncorrect;
          }
        } else if (isChosen) {
          cardStyle = styles.optionSelected;
          textStyle = styles.optionTextSelected;
        }

        return (
          <TouchableOpacity
            key={opt.id}
            activeOpacity={0.8}
            disabled={isSubmitted}
            onPress={() => onSelectOption(opt)}
            style={[styles.optionCard, cardStyle, SHADOWS.small]}
          >
            <View
              style={[
                styles.numberCircle,
                isChosen && !isSubmitted && styles.numberCircleSelected,
                isSubmitted && opt.isCorrect && styles.numberCircleCorrect,
              ]}
            >
              <Text
                style={[
                  styles.numberText,
                  isChosen && !isSubmitted && styles.numberTextSelected,
                  isSubmitted && opt.isCorrect && styles.numberTextCorrect,
                ]}
              >
                {String.fromCharCode(65 + index)}
              </Text>
            </View>

            <Text style={[styles.optionText, textStyle]}>{opt.text}</Text>

            {isSubmitted && opt.isCorrect && (
              <Text style={styles.validationIcon}>✅</Text>
            )}
            {isSubmitted && isChosen && !opt.isCorrect && (
              <Text style={styles.validationIcon}>❌</Text>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  optionsList: {
    gap: SPACING.md,
    marginBottom: SPACING.lg,
  },
  optionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.lg,
    borderWidth: 2,
  },
  optionNormal: {
    backgroundColor: COLORS.cardBg,
    borderColor: COLORS.border,
  },
  optionSelected: {
    backgroundColor: COLORS.primarySoft,
    borderColor: COLORS.primary,
  },
  optionCorrect: {
    backgroundColor: '#ECFDF5',
    borderColor: COLORS.success,
  },
  optionIncorrect: {
    backgroundColor: '#FEF2F2',
    borderColor: COLORS.error,
  },
  numberCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: COLORS.backgroundAlt,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SPACING.md,
  },
  numberCircleSelected: {
    backgroundColor: COLORS.primary,
  },
  numberCircleCorrect: {
    backgroundColor: COLORS.success,
  },
  numberText: {
    fontSize: 14,
    fontWeight: '800',
    color: COLORS.textDark,
  },
  numberTextSelected: {
    color: COLORS.white,
  },
  numberTextCorrect: {
    color: COLORS.white,
  },
  optionText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
  },
  optionTextNormal: {
    color: COLORS.textDark,
  },
  optionTextSelected: {
    color: COLORS.primary,
    fontWeight: '800',
  },
  optionTextCorrect: {
    color: '#065F46',
    fontWeight: '800',
  },
  optionTextIncorrect: {
    color: '#991B1B',
    fontWeight: '700',
  },
  validationIcon: {
    fontSize: 18,
    marginLeft: SPACING.sm,
  },
});
