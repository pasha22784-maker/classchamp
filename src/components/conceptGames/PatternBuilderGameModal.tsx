import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { COLORS, SPACING, BORDER_RADIUS, SHADOWS } from '../../constants/theme';
import { triggerHaptic } from '../../utils/haptics';
import { soundManager } from '../../utils/soundManager';
import { useUserStore } from '../../store/useUserStore';

const { width } = Dimensions.get('window');

interface PatternBuilderGameModalProps {
  visible: boolean;
  onClose: () => void;
}

interface PatternLevel {
  id: number;
  prompt: string;
  hindiPrompt: string;
  sequence: string[];
  options: string[];
  correctAnswer: string;
  parentNote: string;
}

const PATTERN_LEVELS: PatternLevel[] = [
  {
    id: 1,
    prompt: 'What comes next in this ABAB pattern?',
    hindiPrompt: 'अगला पैटर्न क्या होगा?',
    sequence: ['🔴', '🟦', '🔴', '🟦', '❓'],
    options: ['🔴', '🟦', '⭐'],
    correctAnswer: '🔴',
    parentNote: 'ABAB repeating color sequence: trains alternating pattern detection.',
  },
  {
    id: 2,
    prompt: 'What comes next in this AABB pattern?',
    hindiPrompt: 'दो-दो के जोड़े का अगला आकार चुनें!',
    sequence: ['🔺', '🔺', '🟢', '🟢', '🔺', '❓'],
    options: ['🔺', '🟢', '🟦'],
    correctAnswer: '🔺',
    parentNote: 'AABB doublets encourage counting while tracking pattern rules.',
  },
  {
    id: 3,
    prompt: 'Nature Trio: Day & Night Cycle!',
    hindiPrompt: 'दिन और रात का चक्र पूरा करें!',
    sequence: ['☀️', '🌙', '⭐', '☀️', '🌙', '❓'],
    options: ['⭐', '☀️', '🌧️'],
    correctAnswer: '⭐',
    parentNote: 'ABC trio sequences require holding 3 states in working memory.',
  },
  {
    id: 4,
    prompt: 'Skip Counting by 2s: Frog Jump!',
    hindiPrompt: '2 की छलांग (2, 4, 6, 8...): अगला नंबर क्या है?',
    sequence: ['2', '4', '6', '8', '❓'],
    options: ['9', '10', '12'],
    correctAnswer: '10',
    parentNote: 'Skip counting by 2s lays the direct visual foundation for multiplication tables.',
  },
  {
    id: 5,
    prompt: 'Clockwise Arrow Spin Pattern!',
    hindiPrompt: 'घड़ी की दिशा में घूमते तीर का अगला रुख क्या होगा?',
    sequence: ['⬆️', '➡️', '⬇️', '❓'],
    options: ['⬅️', '⬆️', '↗️'],
    correctAnswer: '⬅️',
    parentNote: 'Rotational 90-degree sequences connect geometry with physical direction.',
  },
  {
    id: 6,
    prompt: 'High-Five: Skip Counting by 5s!',
    hindiPrompt: '5 की छलांग (5, 10, 15, 20...): अगला नंबर?',
    sequence: ['5', '10', '15', '20', '❓'],
    options: ['22', '25', '30'],
    correctAnswer: '25',
    parentNote: 'Skip counting by 5s is essential for reading minutes on a clock and money coins.',
  },
  {
    id: 7,
    prompt: 'Rocket Fuel: Tens Sequence!',
    hindiPrompt: 'दहाई की गिनती (10, 20, 30...): अगला नंबर?',
    sequence: ['10', '20', '30', '40', '❓'],
    options: ['45', '50', '60'],
    correctAnswer: '50',
    parentNote: 'Tens place value sequence prepares children for 2-digit addition.',
  },
  {
    id: 8,
    prompt: 'Odd Number Champ Sequence!',
    hindiPrompt: 'विषम संख्याएं (1, 3, 5, 7...): अगला नंबर?',
    sequence: ['1', '3', '5', '7', '❓'],
    options: ['8', '9', '10'],
    correctAnswer: '9',
    parentNote: 'Odd-even pattern differentiation builds foundational number theory.',
  },
];

export const PatternBuilderGameModal: React.FC<PatternBuilderGameModalProps> = ({
  visible,
  onClose,
}) => {
  const { addReward } = useUserStore();
  const [levelIndex, setLevelIndex] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [showParentInfo, setShowParentInfo] = useState(false);

  const currentLevel = PATTERN_LEVELS[levelIndex] || PATTERN_LEVELS[0];

  useEffect(() => {
    if (!visible) return;
    setLevelIndex(0);
    setSelectedOpt(null);
    setIsSuccess(false);
    setIsFinished(false);
    setShowParentInfo(false);
  }, [visible]);

  const handleSelectOption = (opt: string) => {
    if (isSuccess) return;

    soundManager.playPop();
    triggerHaptic('medium');
    setSelectedOpt(opt);

    if (opt === currentLevel.correctAnswer) {
      setIsSuccess(true);
      soundManager.playBell();
      triggerHaptic('success');

      setTimeout(() => {
        if (levelIndex + 1 < PATTERN_LEVELS.length) {
          setLevelIndex((prev) => prev + 1);
          setSelectedOpt(null);
          setIsSuccess(false);
        } else {
          setIsFinished(true);
          soundManager.playFanfare();
        }
      }, 1600);
    } else {
      triggerHaptic('warning');
      soundManager.playIncorrect();
    }
  };

  const handleFinish = async () => {
    await addReward({ stars: 25, xp: 90 });
    triggerHaptic('success');
    onClose();
  };

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.card}>
          {/* Header */}
          <View style={styles.header}>
            <View>
              <Text style={styles.title}>🧩 Pattern & Sequence Lab</Text>
              <Text style={styles.sub}>
                Level {levelIndex + 1} of {PATTERN_LEVELS.length} • NCERT Class 1-2
              </Text>
            </View>
            <View style={styles.topRightRow}>
              <TouchableOpacity
                style={styles.infoPill}
                onPress={() => setShowParentInfo((v) => !v)}
              >
                <Text style={styles.infoPillText}>👨‍🏫 Parents</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
                <Text style={styles.closeText}>✕</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Parent Pedagogical Guide Dropdown */}
          {showParentInfo && (
            <View style={styles.parentBox}>
              <Text style={styles.parentTitle}>💡 Practical Learning Note:</Text>
              <Text style={styles.parentDesc}>{currentLevel.parentNote}</Text>
            </View>
          )}

          {/* Mission Target Banner */}
          <View style={styles.missionBanner}>
            <Text style={styles.missionPrompt}>{currentLevel.prompt}</Text>
            <Text style={styles.missionHindi}>{currentLevel.hindiPrompt}</Text>
          </View>

          {/* Pattern Sequence Strip */}
          <View style={styles.stripStage}>
            <Text style={styles.stripTag}>Complete the Sequence:</Text>
            <View style={styles.stripRow}>
              {currentLevel.sequence.map((token, idx) => {
                const isLast = idx === currentLevel.sequence.length - 1;
                return (
                  <View
                    key={idx}
                    style={[
                      styles.stripToken,
                      isLast && styles.stripTokenTarget,
                      isLast && isSuccess && styles.stripTokenSuccess,
                    ]}
                  >
                    <Text style={styles.stripTokenText}>
                      {isLast ? (isSuccess ? currentLevel.correctAnswer : '❓') : token}
                    </Text>
                  </View>
                );
              })}
            </View>
          </View>

          {/* Option Choices */}
          <View style={styles.optionsBox}>
            <Text style={styles.optionsTag}>Tap the Missing Block:</Text>
            <View style={styles.optionsRow}>
              {currentLevel.options.map((opt, idx) => {
                const isChosen = selectedOpt === opt;
                return (
                  <TouchableOpacity
                    key={idx}
                    style={[
                      styles.optionCard,
                      isChosen && styles.optionCardChosen,
                      isChosen && isSuccess && styles.optionCardCorrect,
                    ]}
                    onPress={() => handleSelectOption(opt)}
                    activeOpacity={0.8}
                  >
                    <Text style={styles.optionText}>{opt}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          {/* Footer note */}
          <View style={styles.footerBar}>
            <Text style={styles.footerNote}>
              ✨ Algebraic thinking & sequence logic training
            </Text>
          </View>

          {/* Finished Celebration Modal */}
          {isFinished && (
            <View style={styles.successOverlay}>
              <View style={styles.successBox}>
                <Text style={styles.successEmoji}>🧩</Text>
                <Text style={styles.successTitle}>Pattern Master Champ!</Text>
                <Text style={styles.successDesc}>
                  Aapne complex repeating sequences aur skip counting solve kar li!
                </Text>
                <View style={styles.rewardPill}>
                  <Text style={styles.rewardText}>+25 Stars ⭐  +90 XP ⚡</Text>
                </View>
                <TouchableOpacity style={styles.claimBtn} onPress={handleFinish}>
                  <Text style={styles.claimBtnText}>Claim & Return 🚀</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.85)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING.md,
  },
  card: {
    width: Math.min(width - 32, 440),
    backgroundColor: '#4C1D95',
    borderRadius: BORDER_RADIUS.xl,
    padding: SPACING.lg,
    borderWidth: 2,
    borderColor: '#8B5CF6',
    ...SHADOWS.card,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.sm,
  },
  topRightRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  infoPill: {
    backgroundColor: '#6D28D9',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: BORDER_RADIUS.full,
    borderWidth: 1,
    borderColor: '#C4B5FD',
  },
  infoPillText: {
    color: '#EDE9FE',
    fontSize: 12,
    fontWeight: '700',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '800',
  },
  sub: {
    color: '#DDD6FE',
    fontSize: 12,
    fontWeight: '600',
  },
  closeBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#5B21B6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  parentBox: {
    backgroundColor: '#2E1065',
    borderRadius: BORDER_RADIUS.md,
    padding: 10,
    marginBottom: SPACING.sm,
    borderLeftWidth: 3,
    borderLeftColor: '#8B5CF6',
  },
  parentTitle: {
    color: '#C4B5FD',
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 2,
  },
  parentDesc: {
    color: '#E2E8F0',
    fontSize: 12,
    lineHeight: 16,
  },
  missionBanner: {
    backgroundColor: '#6D28D9',
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.sm,
    alignItems: 'center',
    marginBottom: SPACING.md,
    borderWidth: 1,
    borderColor: '#8B5CF6',
  },
  missionPrompt: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '800',
    textAlign: 'center',
  },
  missionHindi: {
    color: '#EDE9FE',
    fontSize: 13,
    fontWeight: '600',
    marginTop: 2,
    textAlign: 'center',
  },
  stripStage: {
    backgroundColor: '#2E1065',
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.md,
    alignItems: 'center',
    marginBottom: SPACING.md,
    borderWidth: 1,
    borderColor: '#7C3AED',
  },
  stripTag: {
    color: '#C4B5FD',
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 10,
  },
  stripRow: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stripToken: {
    width: 52,
    height: 52,
    borderRadius: 12,
    backgroundColor: '#5B21B6',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#8B5CF6',
  },
  stripTokenTarget: {
    borderStyle: 'dashed',
    borderColor: '#FDE68A',
    backgroundColor: '#4C1D95',
  },
  stripTokenSuccess: {
    borderStyle: 'solid',
    borderColor: '#10B981',
    backgroundColor: '#065F46',
  },
  stripTokenText: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: '800',
  },
  optionsBox: {
    alignItems: 'center',
    marginVertical: SPACING.sm,
  },
  optionsTag: {
    color: '#DDD6FE',
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 8,
  },
  optionsRow: {
    flexDirection: 'row',
    gap: 12,
    width: '100%',
  },
  optionCard: {
    flex: 1,
    backgroundColor: '#5B21B6',
    paddingVertical: 14,
    borderRadius: BORDER_RADIUS.lg,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#8B5CF6',
  },
  optionCardChosen: {
    borderColor: '#FDE68A',
    backgroundColor: '#6D28D9',
  },
  optionCardCorrect: {
    borderColor: '#10B981',
    backgroundColor: '#065F46',
  },
  optionText: {
    fontSize: 24,
    fontWeight: '900',
    color: '#FFFFFF',
  },
  footerBar: {
    alignItems: 'center',
    marginTop: SPACING.xs,
  },
  footerNote: {
    color: '#C4B5FD',
    fontSize: 11,
    fontStyle: 'italic',
  },
  successOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(46, 16, 101, 0.96)',
    borderRadius: BORDER_RADIUS.xl,
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING.lg,
  },
  successBox: {
    alignItems: 'center',
  },
  successEmoji: {
    fontSize: 64,
    marginBottom: SPACING.sm,
  },
  successTitle: {
    color: '#DDD6FE',
    fontSize: 22,
    fontWeight: '900',
    marginBottom: 4,
  },
  successDesc: {
    color: '#E2E8F0',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: SPACING.md,
    lineHeight: 20,
  },
  rewardPill: {
    backgroundColor: '#5B21B6',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: BORDER_RADIUS.full,
    borderWidth: 1,
    borderColor: '#8B5CF6',
    marginBottom: SPACING.lg,
  },
  rewardText: {
    color: '#FDE68A',
    fontSize: 15,
    fontWeight: '800',
  },
  claimBtn: {
    backgroundColor: '#8B5CF6',
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: BORDER_RADIUS.xl,
    borderWidth: 1,
    borderColor: '#C4B5FD',
  },
  claimBtnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '900',
  },
});
