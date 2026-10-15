import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
} from 'react-native';
import { COLORS, BORDER_RADIUS, SPACING, SHADOWS } from '../../constants/theme';
import { generateParentGateChallenge, ParentGateChallenge } from '../../utils/parentGate';
import { triggerHaptic } from '../../utils/haptics';
import { ChampButton } from './ChampButton';

interface ParentGateModalProps {
  visible: boolean;
  onSuccess: () => void;
  onCancel: () => void;
}

export const ParentGateModal: React.FC<ParentGateModalProps> = ({
  visible,
  onSuccess,
  onCancel,
}) => {
  const [challenge, setChallenge] = useState<ParentGateChallenge | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (visible) {
      setChallenge(generateParentGateChallenge());
      setErrorMessage('');
    }
  }, [visible]);

  const handleSelectOption = (chosen: number) => {
    if (!challenge) return;

    if (chosen === challenge.correctAnswer) {
      triggerHaptic('success');
      onSuccess();
    } else {
      triggerHaptic('error');
      setErrorMessage('Incorrect. Please try this new question:');
      setChallenge(generateParentGateChallenge());
    }
  };

  if (!visible || !challenge) return null;

  return (
    <Modal
      transparent
      animationType="fade"
      visible={visible}
      onRequestClose={onCancel}
    >
      <View style={styles.overlay}>
        <View style={[styles.modalCard, SHADOWS.large]}>
          <View style={styles.header}>
            <View style={styles.lockIconBox}>
              <Text style={styles.lockEmoji}>🔒</Text>
            </View>
            <Text style={styles.modalTitle}>Parent Zone Access</Text>
            <Text style={styles.modalSubtitle}>
              To keep ClassChamp kid-safe, please solve this adult math check:
            </Text>
          </View>

          {errorMessage ? (
            <Text style={styles.errorText}>{errorMessage}</Text>
          ) : null}

          <View style={styles.questionBox}>
            <Text style={styles.questionText}>{challenge.question}</Text>
          </View>

          <View style={styles.optionsGrid}>
            {challenge.options.map((opt) => (
              <TouchableOpacity
                key={opt}
                activeOpacity={0.8}
                onPress={() => handleSelectOption(opt)}
                style={styles.optionButton}
              >
                <Text style={styles.optionText}>{opt}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <ChampButton
            title="Cancel & Go Back"
            variant="outline"
            size="sm"
            onPress={onCancel}
            style={styles.cancelBtn}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(15, 23, 42, 0.65)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING.xl,
  },
  modalCard: {
    width: '100%',
    maxWidth: 380,
    backgroundColor: COLORS.white,
    borderRadius: BORDER_RADIUS.xl,
    padding: SPACING.xl,
  },
  header: {
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  lockIconBox: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: COLORS.primarySoft,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SPACING.sm,
  },
  lockEmoji: {
    fontSize: 24,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: COLORS.textDark,
    marginBottom: 4,
  },
  modalSubtitle: {
    fontSize: 12,
    color: COLORS.textMedium,
    textAlign: 'center',
    lineHeight: 16,
  },
  errorText: {
    color: COLORS.error,
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: SPACING.sm,
  },
  questionBox: {
    backgroundColor: COLORS.backgroundAlt,
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.md,
    alignItems: 'center',
    marginBottom: SPACING.lg,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  questionText: {
    fontSize: 15,
    fontWeight: '700',
    color: COLORS.primaryDark,
    textAlign: 'center',
  },
  optionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: SPACING.md,
    marginBottom: SPACING.lg,
  },
  optionButton: {
    width: '47%',
    backgroundColor: COLORS.white,
    borderWidth: 2,
    borderColor: COLORS.primary,
    borderRadius: BORDER_RADIUS.md,
    paddingVertical: SPACING.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionText: {
    fontSize: 18,
    fontWeight: '800',
    color: COLORS.primary,
  },
  cancelBtn: {
    marginTop: SPACING.xs,
  },
});
