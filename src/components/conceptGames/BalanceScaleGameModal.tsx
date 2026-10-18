import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  Animated,
  Dimensions,
} from 'react-native';
import { COLORS, SPACING, BORDER_RADIUS, SHADOWS } from '../../constants/theme';
import { triggerHaptic } from '../../utils/haptics';
import { soundManager } from '../../utils/soundManager';
import { useUserStore } from '../../store/useUserStore';
import { Grade } from '../../types';

interface BalanceScaleGameModalProps {
  visible: boolean;
  onClose: () => void;
  grade: Grade;
}

interface LevelData {
  id: number;
  prompt: string;
  conceptNote: string;
  leftTargetWeight: number;
  leftDisplay: string; // e.g. "8 kg" or "5 + 3" or "3 × 4"
  rightInitialWeight: number;
  rightInitialDisplay: string;
  availableWeights: number[];
}

const getLevelsForGrade = (grade: Grade): LevelData[] => {
  const isLower = grade === 1 || grade === 2;

  if (isLower) {
    return [
      { id: 1, prompt: 'Balance: 4 + 3 = ?', conceptNote: 'Addition balance', leftTargetWeight: 7, leftDisplay: '4 + 3 (7)', rightInitialWeight: 2, rightInitialDisplay: '2 + ?', availableWeights: [3, 4, 5, 6] },
      { id: 2, prompt: 'Balance the scale at 10!', conceptNote: 'Making 10 (Friends of 10)', leftTargetWeight: 10, leftDisplay: '10 kg', rightInitialWeight: 6, rightInitialDisplay: '6 + ?', availableWeights: [2, 3, 4, 5] },
      { id: 3, prompt: 'Balance: 15 - 5 = ?', conceptNote: 'Subtraction equivalence', leftTargetWeight: 10, leftDisplay: '15 - 5 (10)', rightInitialWeight: 3, rightInitialDisplay: '3 + ?', availableWeights: [4, 6, 7, 8] },
      { id: 4, prompt: 'Balance: 8 + 4 = ?', conceptNote: 'Regrouping to 12', leftTargetWeight: 12, leftDisplay: '8 + 4 (12)', rightInitialWeight: 5, rightInitialDisplay: '5 + ?', availableWeights: [5, 6, 7, 8] },
      { id: 5, prompt: 'Friends of 10: 10 = 7 + ?', conceptNote: '10 pairs', leftTargetWeight: 10, leftDisplay: '10', rightInitialWeight: 7, rightInitialDisplay: '7 + ?', availableWeights: [2, 3, 4, 5] },
      { id: 6, prompt: 'Double Balance: 5 + 5 = ?', conceptNote: 'Doubles balance', leftTargetWeight: 10, leftDisplay: '5 + 5 (10)', rightInitialWeight: 4, rightInitialDisplay: '4 + ?', availableWeights: [4, 5, 6, 7] },
      { id: 7, prompt: 'Balance 16 kg on scale!', conceptNote: 'Addition to 16', leftTargetWeight: 16, leftDisplay: '16 kg', rightInitialWeight: 9, rightInitialDisplay: '9 + ?', availableWeights: [5, 6, 7, 8] },
      { id: 8, prompt: 'Subtraction Balance: 20 - 6 = ?', conceptNote: 'Subtraction from 20', leftTargetWeight: 14, leftDisplay: '20 - 6 (14)', rightInitialWeight: 8, rightInitialDisplay: '8 + ?', availableWeights: [5, 6, 7, 8] },
      { id: 9, prompt: 'Balance 18 kg: 11 + ?', conceptNote: 'Two-digit equilibrium', leftTargetWeight: 18, leftDisplay: '18 kg', rightInitialWeight: 11, rightInitialDisplay: '11 + ?', availableWeights: [6, 7, 8, 9] },
      { id: 10, prompt: 'Master Balance: 25 kg scale!', conceptNote: 'Champ equation balance', leftTargetWeight: 25, leftDisplay: '25 kg', rightInitialWeight: 15, rightInitialDisplay: '15 + ?', availableWeights: [8, 9, 10, 12] },
    ];
  }

  // Class 3 to 6: Metric Weight conversions & Multiplication equations (10 Levels)
  return [
    { id: 1, prompt: 'Balance the multiplication equation!', conceptNote: 'Multiplication: 6 × 4 = 24', leftTargetWeight: 24, leftDisplay: '6 × 4 (24)', rightInitialWeight: 14, rightInitialDisplay: '14 + ?', availableWeights: [8, 10, 12, 14] },
    { id: 2, prompt: 'Metric Weight Balance: 1 kg = 1000g', conceptNote: 'Metric: 1000g = 650g + ?', leftTargetWeight: 1000, leftDisplay: '1 kg (1000g)', rightInitialWeight: 650, rightInitialDisplay: '650g + ?', availableWeights: [250, 300, 350, 400] },
    { id: 3, prompt: 'Balance 1 kg Sugar with 500g!', conceptNote: '500g + 500g = 1000g', leftTargetWeight: 1000, leftDisplay: '1 kg Sugar', rightInitialWeight: 500, rightInitialDisplay: '500g + ?', availableWeights: [250, 400, 500, 600] },
    { id: 4, prompt: 'Multiplication Balance: 7 × 5 = ?', conceptNote: '7 × 5 = 35', leftTargetWeight: 35, leftDisplay: '7 × 5 (35)', rightInitialWeight: 20, rightInitialDisplay: '20 + ?', availableWeights: [12, 14, 15, 18] },
    { id: 5, prompt: 'Metric Double: 2 kg = 2000g', conceptNote: '2000g = 1200g + ?', leftTargetWeight: 2000, leftDisplay: '2 kg (2000g)', rightInitialWeight: 1200, rightInitialDisplay: '1200g + ?', availableWeights: [600, 700, 800, 900] },
    { id: 6, prompt: 'Multiplication Balance: 8 × 4 = ?', conceptNote: '8 × 4 = 32', leftTargetWeight: 32, leftDisplay: '8 × 4 (32)', rightInitialWeight: 18, rightInitialDisplay: '18 + ?', availableWeights: [12, 14, 16, 18] },
    { id: 7, prompt: 'Flour Sack: 1500g = 900g + ?', conceptNote: '1.5 kg balance', leftTargetWeight: 1500, leftDisplay: '1.5 kg Flour', rightInitialWeight: 900, rightInitialDisplay: '900g + ?', availableWeights: [400, 500, 600, 700] },
    { id: 8, prompt: 'Multiplication Balance: 9 × 6 = ?', conceptNote: '9 × 6 = 54', leftTargetWeight: 54, leftDisplay: '9 × 6 (54)', rightInitialWeight: 30, rightInitialDisplay: '30 + ?', availableWeights: [20, 22, 24, 26] },
    { id: 9, prompt: 'Grocery Bag: 2500g = 1750g + ?', conceptNote: '2.5 kg balance', leftTargetWeight: 2500, leftDisplay: '2.5 kg Grocery', rightInitialWeight: 1750, rightInitialDisplay: '1750g + ?', availableWeights: [650, 700, 750, 800] },
    { id: 10, prompt: 'Master Scientist: 3000g = 1800g + ?', conceptNote: '3 kg Grand Balance', leftTargetWeight: 3000, leftDisplay: '3 kg (3000g)', rightInitialWeight: 1800, rightInitialDisplay: '1800g + ?', availableWeights: [1000, 1100, 1200, 1300] },
  ];
};

export const BalanceScaleGameModal: React.FC<BalanceScaleGameModalProps> = ({
  visible,
  onClose,
  grade,
}) => {
  const { addReward } = useUserStore();
  const [levelIndex, setLevelIndex] = useState(0);
  const [rightCurrentAdded, setRightCurrentAdded] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [isBalanced, setIsBalanced] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [showParentInfo, setShowParentInfo] = useState(false);

  const levels = getLevelsForGrade(grade);
  const currentLevel = levels[levelIndex] || levels[0];

  const tiltAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (!visible) return;
    setLevelIndex(0);
    setRightCurrentAdded(null);
    setScore(0);
    setIsBalanced(false);
    setIsFinished(false);
    setShowParentInfo(false);
    tiltAnim.setValue(-12); // Initial tilt towards heavier left side
  }, [visible, grade]);

  // Handle placing a weight onto the right pan
  const handleSelectWeight = (weight: number) => {
    if (isBalanced) return;

    soundManager.playPop();
    triggerHaptic('light');
    setRightCurrentAdded(weight);

    // Calculate new right total
    let newRightTotal = currentLevel.rightInitialWeight + weight;
    if (currentLevel.rightInitialDisplay.includes('2 × ?')) {
      newRightTotal = currentLevel.rightInitialWeight + 2 * weight;
    }

    const difference = newRightTotal - currentLevel.leftTargetWeight;

    // Beam tilt angle based on difference
    let targetTilt = 0;
    if (difference < 0) {
      targetTilt = -12; // Still tilted left (heavier left)
    } else if (difference > 0) {
      targetTilt = 12; // Tilted right (heavier right)
    } else {
      targetTilt = 0; // PERFECTLY BALANCED!
    }

    Animated.spring(tiltAnim, {
      toValue: targetTilt,
      friction: 4,
      tension: 40,
      useNativeDriver: true,
    }).start();

    if (difference === 0) {
      // SUCCESS!
      setIsBalanced(true);
      soundManager.playBell();
      setScore((s) => s + 25);

      setTimeout(() => {
        if (levelIndex + 1 < levels.length) {
          setLevelIndex((prev) => prev + 1);
          setRightCurrentAdded(null);
          setIsBalanced(false);
          tiltAnim.setValue(-12);
        } else {
          setIsFinished(true);
          soundManager.playFanfare();
        }
      }, 1500);
    } else {
      triggerHaptic('warning');
    }
  };

  const handleFinish = async () => {
    await addReward({ stars: 20, xp: 80 });
    triggerHaptic('success');
    onClose();
  };

  const tiltRotation = tiltAnim.interpolate({
    inputRange: [-18, 18],
    outputRange: ['-18deg', '18deg'],
  });

  // Inverse rotation for pans so they always hang straight down
  const panCounterRotation = tiltAnim.interpolate({
    inputRange: [-18, 18],
    outputRange: ['18deg', '-18deg'],
  });

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.gameCard}>
          {/* Header */}
          <View style={styles.headerRow}>
            <View style={styles.headerTitleBox}>
              <Text style={styles.gameTitle}>⚖️ The Balance Scale</Text>
              <Text style={styles.gameSub}>Level {levelIndex + 1} of {levels.length} • Concept Lab</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#78350F',
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  borderRadius: BORDER_RADIUS.full,
                  borderWidth: 1,
                  borderColor: '#FDE68A',
                }}
                onPress={() => setShowParentInfo((v) => !v)}
              >
                <Text style={{ color: '#FEF3C7', fontSize: 12, fontWeight: '700' }}>👨‍🏫 Parents</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
                <Text style={styles.closeText}>✕</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Parent Pedagogical Guide Dropdown */}
          {showParentInfo && (
            <View style={{
              backgroundColor: '#451A03',
              borderRadius: BORDER_RADIUS.md,
              padding: 10,
              marginBottom: SPACING.sm,
              borderLeftWidth: 3,
              borderLeftColor: '#F59E0B',
            }}>
              <Text style={{ color: '#F59E0B', fontSize: 12, fontWeight: '700', marginBottom: 2 }}>
                💡 Practical Learning Note:
              </Text>
              <Text style={{ color: '#E2E8F0', fontSize: 12, lineHeight: 16 }}>
                Equalities (A + B = C) are physically realized on a balance scale. When both pans hold equal mass, the beam sits horizontal without tipping.
              </Text>
            </View>
          )}

          {/* Mission Objective */}
          <View style={styles.promptBox}>
            <Text style={styles.promptTitle}>{currentLevel.prompt}</Text>
            <Text style={styles.conceptHint}>💡 {currentLevel.conceptNote}</Text>
          </View>

          {/* Interactive Balance Scale Apparatus */}
          <View style={styles.scaleStage}>
            {/* Center Dial & Pointer Needle */}
            <View style={styles.dialBox}>
              <View style={[styles.dialIndicator, isBalanced && styles.dialIndicatorBalanced]}>
                <Text style={styles.dialEmoji}>{isBalanced ? '🌟' : '⚖️'}</Text>
              </View>
            </View>

            {/* Central Pillar Stand */}
            <View style={styles.pillarStand} />
            <View style={styles.pillarBase} />

            {/* Tilting Crossbeam */}
            <Animated.View
              style={[
                styles.crossBeam,
                { transform: [{ rotate: tiltRotation }] },
              ]}
            >
              {/* Center Fulcrum Pin */}
              <View style={styles.fulcrumPin} />

              {/* Left Hanging Pan */}
              <Animated.View
                style={[
                  styles.panWrapper,
                  styles.leftPanWrapper,
                  { transform: [{ rotate: panCounterRotation }] },
                ]}
              >
                <View style={styles.panStrings} />
                <View style={[styles.panPlate, styles.panPlateLeft]}>
                  <Text style={styles.panWeightText}>{currentLevel.leftDisplay}</Text>
                </View>
              </Animated.View>

              {/* Right Hanging Pan */}
              <Animated.View
                style={[
                  styles.panWrapper,
                  styles.rightPanWrapper,
                  { transform: [{ rotate: panCounterRotation }] },
                ]}
              >
                <View style={styles.panStrings} />
                <View
                  style={[
                    styles.panPlate,
                    styles.panPlateRight,
                    isBalanced && styles.panPlateBalanced,
                  ]}
                >
                  <Text style={styles.panWeightText}>
                    {rightCurrentAdded !== null
                      ? currentLevel.rightInitialDisplay.replace('?', String(rightCurrentAdded))
                      : currentLevel.rightInitialDisplay || 'Empty'}
                  </Text>
                </View>
              </Animated.View>
            </Animated.View>
          </View>

          {/* Balanced Status Toast */}
          <View style={styles.statusToastBox}>
            <Text style={[styles.statusToastText, isBalanced && styles.statusToastBalanced]}>
              {isBalanced ? '✨ BALANCED! EQUATION SOLVED! ✨' : 'Scale is tilted! Pick a weight to balance:'}
            </Text>
          </View>

          {/* Available Weight Blocks (Manipulatives Shelf) */}
          <View style={styles.weightsShelf}>
            {currentLevel.availableWeights.map((w) => {
              const isSelected = rightCurrentAdded === w;
              return (
                <TouchableOpacity
                  key={w}
                  style={[
                    styles.weightBlock,
                    isSelected && styles.weightBlockSelected,
                    isSelected && isBalanced && styles.weightBlockBalanced,
                  ]}
                  onPress={() => handleSelectWeight(w)}
                  activeOpacity={0.8}
                  disabled={isBalanced}
                >
                  <Text style={styles.weightBlockEmoji}>⚖️</Text>
                  <Text style={styles.weightBlockText}>+{w}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* Victory Dialog */}
        {isFinished && (
          <View style={styles.victoryOverlay}>
            <View style={styles.victoryCard}>
              <Text style={styles.victoryEmoji}>🏆</Text>
              <Text style={styles.victoryTitle}>Scale Master!</Text>
              <Text style={styles.victorySub}>
                You learned equations & balancing through hands-on physics simulation!
              </Text>
              <View style={styles.rewardPills}>
                <View style={styles.pill}><Text style={styles.pillText}>⭐ +20 Stars</Text></View>
                <View style={styles.pill}><Text style={styles.pillText}>⚡ +80 XP</Text></View>
              </View>
              <TouchableOpacity style={styles.finishBtn} onPress={handleFinish} activeOpacity={0.85}>
                <Text style={styles.finishBtnText}>COLLECT REWARD 🌟</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(15, 23, 42, 0.85)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING.md,
  },
  gameCard: {
    width: '100%',
    maxWidth: 390,
    backgroundColor: '#0F172A',
    borderRadius: BORDER_RADIUS.xl,
    padding: SPACING.md,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#38BDF8',
    ...SHADOWS.large,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: SPACING.xs,
  },
  headerTitleBox: {
    flex: 1,
  },
  gameTitle: {
    fontSize: 20,
    fontWeight: '900',
    color: '#FDE047',
  },
  gameSub: {
    fontSize: 11,
    color: '#94A3B8',
    fontWeight: '700',
  },
  closeBtn: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  promptBox: {
    backgroundColor: '#1E293B',
    width: '100%',
    padding: 10,
    borderRadius: BORDER_RADIUS.md,
    marginVertical: SPACING.xs,
    borderWidth: 1,
    borderColor: '#334155',
    alignItems: 'center',
  },
  promptTitle: {
    fontSize: 16,
    fontWeight: '900',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  conceptHint: {
    fontSize: 12,
    color: '#38BDF8',
    fontWeight: '700',
    marginTop: 2,
  },
  scaleStage: {
    width: '100%',
    height: 220,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginVertical: SPACING.sm,
  },
  dialBox: {
    position: 'absolute',
    top: 15,
    zIndex: 30,
  },
  dialIndicator: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#1E293B',
    borderWidth: 2,
    borderColor: '#F59E0B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dialIndicatorBalanced: {
    borderColor: '#10B981',
    backgroundColor: '#064E3B',
  },
  dialEmoji: {
    fontSize: 22,
  },
  pillarStand: {
    position: 'absolute',
    bottom: 20,
    width: 14,
    height: 120,
    backgroundColor: '#64748B',
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#94A3B8',
  },
  pillarBase: {
    position: 'absolute',
    bottom: 12,
    width: 110,
    height: 14,
    backgroundColor: '#475569',
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#94A3B8',
  },
  crossBeam: {
    width: 280,
    height: 10,
    backgroundColor: '#F59E0B',
    borderRadius: 5,
    position: 'absolute',
    top: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#FEF08A',
  },
  fulcrumPin: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#B45309',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  panWrapper: {
    position: 'absolute',
    top: 8,
    alignItems: 'center',
  },
  leftPanWrapper: {
    left: 10,
  },
  rightPanWrapper: {
    right: 10,
  },
  panStrings: {
    width: 1.5,
    height: 50,
    backgroundColor: '#CBD5E1',
  },
  panPlate: {
    width: 95,
    minHeight: 48,
    borderRadius: 14,
    backgroundColor: '#1E293B',
    borderWidth: 2,
    borderColor: '#94A3B8',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 6,
    paddingVertical: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4,
  },
  panPlateLeft: {
    borderColor: '#38BDF8',
    backgroundColor: '#0F172A',
  },
  panPlateRight: {
    borderColor: '#F59E0B',
    backgroundColor: '#0F172A',
  },
  panPlateBalanced: {
    borderColor: '#10B981',
    backgroundColor: '#064E3B',
  },
  panWeightText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '900',
    textAlign: 'center',
  },
  statusToastBox: {
    marginVertical: 4,
    alignItems: 'center',
  },
  statusToastText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#94A3B8',
  },
  statusToastBalanced: {
    color: '#34D399',
    fontWeight: '900',
    fontSize: 13,
  },
  weightsShelf: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
    width: '100%',
    paddingTop: 8,
  },
  weightBlock: {
    backgroundColor: '#1E293B',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: BORDER_RADIUS.md,
    borderWidth: 2,
    borderColor: '#64748B',
    alignItems: 'center',
    minWidth: 70,
  },
  weightBlockSelected: {
    borderColor: '#F59E0B',
    backgroundColor: '#78350F',
  },
  weightBlockBalanced: {
    borderColor: '#10B981',
    backgroundColor: '#065F46',
  },
  weightBlockEmoji: {
    fontSize: 14,
  },
  weightBlockText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '900',
    marginTop: 2,
  },
  victoryOverlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING.lg,
    zIndex: 100,
  },
  victoryCard: {
    width: '100%',
    maxWidth: 340,
    backgroundColor: '#1E293B',
    borderRadius: BORDER_RADIUS.xl,
    padding: SPACING.xl,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#F59E0B',
    ...SHADOWS.large,
  },
  victoryEmoji: {
    fontSize: 50,
  },
  victoryTitle: {
    fontSize: 22,
    fontWeight: '900',
    color: '#FDE047',
    marginVertical: 4,
  },
  victorySub: {
    fontSize: 13,
    color: '#94A3B8',
    textAlign: 'center',
    lineHeight: 18,
    marginBottom: SPACING.md,
  },
  rewardPills: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: SPACING.lg,
  },
  pill: {
    backgroundColor: '#0F172A',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: BORDER_RADIUS.round,
    borderWidth: 1,
    borderColor: '#38BDF8',
  },
  pillText: {
    color: '#38BDF8',
    fontSize: 14,
    fontWeight: '800',
  },
  finishBtn: {
    width: '100%',
    backgroundColor: '#10B981',
    paddingVertical: 14,
    borderRadius: BORDER_RADIUS.lg,
    alignItems: 'center',
    borderBottomWidth: 4,
    borderBottomColor: '#047857',
  },
  finishBtnText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '900',
  },
});
