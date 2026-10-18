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

interface FractionPizzaGameModalProps {
  visible: boolean;
  onClose: () => void;
}

interface OrderChallenge {
  id: number;
  prompt: string;
  targetFractionText: string;
  targetNumerator: number;
  targetDenominator: number;
  explanation: string;
}

const PIZZA_CHALLENGES: OrderChallenge[] = [
  {
    id: 1,
    prompt: 'Slice into 2 halves & tap 1 slice!',
    targetFractionText: '1/2',
    targetNumerator: 1,
    targetDenominator: 2,
    explanation: '1 out of 2 equal parts is called Half (आधा / 1/2)!',
  },
  {
    id: 2,
    prompt: 'Slice into 4 quarters & tap 1 slice!',
    targetFractionText: '1/4',
    targetNumerator: 1,
    targetDenominator: 4,
    explanation: '1 out of 4 equal parts is One-Quarter (एक-चौथाई / 1/4)!',
  },
  {
    id: 3,
    prompt: 'Equivalent Fraction: Select 2 out of 4 slices!',
    targetFractionText: '2/4',
    targetNumerator: 2,
    targetDenominator: 4,
    explanation: '2/4 is equivalent to 1/2 — notice it covers exactly half the pizza!',
  },
  {
    id: 4,
    prompt: 'Slice into 4 quarters & tap 3 slices!',
    targetFractionText: '3/4',
    targetNumerator: 3,
    targetDenominator: 4,
    explanation: '3 out of 4 equal parts is Three-Fourths (तीन-चौथाई / 3/4)!',
  },
  {
    id: 5,
    prompt: 'Slice into 4 and select all 4 slices!',
    targetFractionText: '4/4',
    targetNumerator: 4,
    targetDenominator: 4,
    explanation: '4/4 means all parts are taken = 1 Whole Pizza (पूर्ण)!',
  },
  {
    id: 6,
    prompt: 'Two Halves: Cut into 2 and select both!',
    targetFractionText: '2/2',
    targetNumerator: 2,
    targetDenominator: 2,
    explanation: '2/2 is also 1 Whole Pizza — both halves joined together!',
  },
  {
    id: 7,
    prompt: 'Party Snack: Serve Three-Quarters (3/4)!',
    targetFractionText: '3/4',
    targetNumerator: 3,
    targetDenominator: 4,
    explanation: '75% of the pizza served, only 1 slice remains for the chef!',
  },
  {
    id: 8,
    prompt: 'Master Pizza Chef: Serve Half (1/2) using 2 quarters!',
    targetFractionText: '1/2',
    targetNumerator: 2,
    targetDenominator: 4,
    explanation: 'Outstanding! You showed that 2/4 = 1/2!',
  },
];

export const FractionPizzaGameModal: React.FC<FractionPizzaGameModalProps> = ({
  visible,
  onClose,
}) => {
  const { addReward } = useUserStore();
  const [levelIndex, setLevelIndex] = useState(0);
  const [slicesCount, setSlicesCount] = useState<2 | 4>(2);
  const [selectedSlices, setSelectedSlices] = useState<number[]>([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [showParentInfo, setShowParentInfo] = useState(false);

  const currentChallenge = PIZZA_CHALLENGES[levelIndex] || PIZZA_CHALLENGES[0];

  useEffect(() => {
    if (!visible) return;
    setLevelIndex(0);
    setSlicesCount(2);
    setSelectedSlices([]);
    setIsSuccess(false);
    setIsFinished(false);
    setShowParentInfo(false);
  }, [visible]);

  const handleSliceCutChange = (count: 2 | 4) => {
    soundManager.playPop();
    triggerHaptic('light');
    setSlicesCount(count);
    setSelectedSlices([]);
  };

  const handleToggleSlice = (sliceIndex: number) => {
    if (isSuccess) return;

    soundManager.playBubblePop();
    triggerHaptic('medium');

    let updated: number[];
    if (selectedSlices.includes(sliceIndex)) {
      updated = selectedSlices.filter((i) => i !== sliceIndex);
    } else {
      updated = [...selectedSlices, sliceIndex];
    }
    setSelectedSlices(updated);

    // Check if order matches target
    const currentNum = updated.length;
    const currentDenom = slicesCount;

    // Check equivalence (e.g. 2/4 == 1/2 or exact 1/2)
    const isTargetMatch =
      (currentNum === currentChallenge.targetNumerator && currentDenom === currentChallenge.targetDenominator) ||
      (currentChallenge.targetFractionText === '1/2' && currentNum === 2 && currentDenom === 4);

    if (isTargetMatch) {
      setIsSuccess(true);
      soundManager.playBell();
      triggerHaptic('success');

      setTimeout(() => {
        if (levelIndex + 1 < PIZZA_CHALLENGES.length) {
          const nextIdx = levelIndex + 1;
          setLevelIndex(nextIdx);
          setSlicesCount(PIZZA_CHALLENGES[nextIdx].targetDenominator as 2 | 4);
          setSelectedSlices([]);
          setIsSuccess(false);
        } else {
          setIsFinished(true);
          soundManager.playFanfare();
        }
      }, 1800);
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
        <View style={styles.gameCard}>
          {/* Header */}
          <View style={styles.headerRow}>
            <View>
              <Text style={styles.gameTitle}>🍕 Fraction Pizza Kitchen</Text>
              <Text style={styles.gameSub}>Order {levelIndex + 1} of {PIZZA_CHALLENGES.length} • Concept Lab</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#7C2D12',
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  borderRadius: BORDER_RADIUS.full,
                  borderWidth: 1,
                  borderColor: '#FDBA74',
                }}
                onPress={() => setShowParentInfo((v) => !v)}
              >
                <Text style={{ color: '#FFEDD5', fontSize: 12, fontWeight: '700' }}>👨‍🏫 Parents</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
                <Text style={styles.closeText}>✕</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Parent Pedagogical Guide Dropdown */}
          {showParentInfo && (
            <View style={{
              backgroundColor: '#431407',
              borderRadius: BORDER_RADIUS.md,
              padding: 10,
              marginBottom: SPACING.sm,
              borderLeftWidth: 3,
              borderLeftColor: '#EA580C',
            }}>
              <Text style={{ color: '#FB923C', fontSize: 12, fontWeight: '700', marginBottom: 2 }}>
                💡 Practical Learning Note:
              </Text>
              <Text style={{ color: '#E2E8F0', fontSize: 12, lineHeight: 16 }}>
                Fractions represent equal shares of a whole unit. Touching slices to form 2/4 demonstrates that 2/4 and 1/2 cover the exact same portion of food!
              </Text>
            </View>
          )}

          {/* Customer Order Banner */}
          <View style={styles.orderBanner}>
            <Text style={styles.orderTitle}>🧑‍🍳 {currentChallenge.prompt}</Text>
            <View style={styles.targetBadge}>
              <Text style={styles.targetBadgeText}>Target: {currentChallenge.targetFractionText}</Text>
            </View>
          </View>

          {/* Slicer Controls */}
          <View style={styles.slicerRow}>
            <Text style={styles.slicerLabel}>Pizza Cutter:</Text>
            <TouchableOpacity
              style={[styles.slicerBtn, slicesCount === 2 && styles.slicerBtnActive]}
              onPress={() => handleSliceCutChange(2)}
              activeOpacity={0.8}
            >
              <Text style={[styles.slicerBtnText, slicesCount === 2 && styles.slicerBtnTextActive]}>
                Cut into 2 Halves (1/2)
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.slicerBtn, slicesCount === 4 && styles.slicerBtnActive]}
              onPress={() => handleSliceCutChange(4)}
              activeOpacity={0.8}
            >
              <Text style={[styles.slicerBtnText, slicesCount === 4 && styles.slicerBtnTextActive]}>
                Cut into 4 Quarters (1/4)
              </Text>
            </TouchableOpacity>
          </View>

          {/* Pizza Stage */}
          <View style={styles.pizzaStage}>
            <View style={styles.pizzaCrust}>
              {slicesCount === 2 ? (
                /* 2 Halves */
                <View style={styles.twoHalvesContainer}>
                  {[0, 1].map((idx) => {
                    const isSelected = selectedSlices.includes(idx);
                    return (
                      <TouchableOpacity
                        key={idx}
                        style={[
                          styles.halfSlice,
                          idx === 0 ? styles.leftHalf : styles.rightHalf,
                          isSelected && styles.sliceSelected,
                        ]}
                        onPress={() => handleToggleSlice(idx)}
                        activeOpacity={0.8}
                      >
                        <Text style={styles.sliceEmoji}>{isSelected ? '🍕' : '⚪'}</Text>
                        <Text style={styles.sliceLabel}>{isSelected ? '1/2' : 'Empty'}</Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              ) : (
                /* 4 Quarters */
                <View style={styles.fourQuartersContainer}>
                  {[0, 1, 2, 3].map((idx) => {
                    const isSelected = selectedSlices.includes(idx);
                    return (
                      <TouchableOpacity
                        key={idx}
                        style={[
                          styles.quarterSlice,
                          isSelected && styles.sliceSelected,
                        ]}
                        onPress={() => handleToggleSlice(idx)}
                        activeOpacity={0.8}
                      >
                        <Text style={styles.sliceEmoji}>{isSelected ? '🍕' : '⚪'}</Text>
                        <Text style={styles.sliceLabel}>{isSelected ? '1/4' : 'Empty'}</Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              )}
            </View>
          </View>

          {/* Live Fraction Formula Display */}
          <View style={styles.fractionMathBox}>
            <View style={styles.fractionVisual}>
              <Text style={styles.fractionNum}>{selectedSlices.length}</Text>
              <View style={styles.fractionLine} />
              <Text style={styles.fractionDenom}>{slicesCount}</Text>
            </View>
            <View style={styles.fractionMathExpl}>
              <Text style={styles.fractionMathTitle}>
                {selectedSlices.length} of {slicesCount} slices selected
              </Text>
              <Text style={styles.fractionMathSub}>
                {isSuccess ? `✨ ${currentChallenge.explanation}` : '👉 Tap slices above to add or remove!'}
              </Text>
            </View>
          </View>
        </View>

        {/* Victory Screen */}
        {isFinished && (
          <View style={styles.victoryOverlay}>
            <View style={styles.victoryCard}>
              <Text style={styles.victoryEmoji}>👨‍🍳</Text>
              <Text style={styles.victoryTitle}>Master Fraction Chef!</Text>
              <Text style={styles.victorySub}>
                You now visually understand Halves, Quarters, and Fraction Equivalence!
              </Text>
              <View style={styles.rewardPills}>
                <View style={styles.pill}><Text style={styles.pillText}>⭐ +25 Stars</Text></View>
                <View style={styles.pill}><Text style={styles.pillText}>⚡ +90 XP</Text></View>
              </View>
              <TouchableOpacity style={styles.finishBtn} onPress={handleFinish} activeOpacity={0.85}>
                <Text style={styles.finishBtnText}>CLAIM CHEF BADGE 🌟</Text>
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
    backgroundColor: '#78350F', // Rich warm brick oven
    borderRadius: BORDER_RADIUS.xl,
    padding: SPACING.md,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#F59E0B',
    ...SHADOWS.large,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: SPACING.xs,
  },
  gameTitle: {
    fontSize: 20,
    fontWeight: '900',
    color: '#FEF08A',
  },
  gameSub: {
    fontSize: 11,
    color: '#FED7AA',
    fontWeight: '700',
  },
  closeBtn: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  orderBanner: {
    backgroundColor: '#451A03',
    width: '100%',
    padding: 10,
    borderRadius: BORDER_RADIUS.md,
    marginVertical: SPACING.xs,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#F59E0B',
  },
  orderTitle: {
    fontSize: 13,
    fontWeight: '900',
    color: '#FFFFFF',
    flex: 1,
  },
  targetBadge: {
    backgroundColor: '#F59E0B',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: BORDER_RADIUS.round,
    marginLeft: 6,
  },
  targetBadgeText: {
    color: '#78350F',
    fontSize: 12,
    fontWeight: '900',
  },
  slicerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: 6,
    gap: 6,
  },
  slicerLabel: {
    color: '#FED7AA',
    fontSize: 11,
    fontWeight: '700',
  },
  slicerBtn: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    paddingVertical: 6,
    borderRadius: BORDER_RADIUS.round,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  slicerBtnActive: {
    backgroundColor: '#F59E0B',
    borderColor: '#FEF08A',
  },
  slicerBtnText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#FED7AA',
  },
  slicerBtnTextActive: {
    color: '#78350F',
    fontWeight: '900',
  },
  pizzaStage: {
    width: 240,
    height: 240,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: SPACING.sm,
  },
  pizzaCrust: {
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: '#D97706',
    borderWidth: 8,
    borderColor: '#92400E',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 8,
  },
  twoHalvesContainer: {
    flexDirection: 'row',
    width: '100%',
    height: '100%',
  },
  halfSlice: {
    flex: 1,
    height: '100%',
    backgroundColor: '#FEF3C7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftHalf: {
    borderRightWidth: 3,
    borderRightColor: '#B45309',
  },
  rightHalf: {
    borderLeftWidth: 3,
    borderLeftColor: '#B45309',
  },
  fourQuartersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    height: '100%',
  },
  quarterSlice: {
    width: '50%',
    height: '50%',
    backgroundColor: '#FEF3C7',
    borderWidth: 2,
    borderColor: '#B45309',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sliceSelected: {
    backgroundColor: '#F59E0B',
  },
  sliceEmoji: {
    fontSize: 26,
  },
  sliceLabel: {
    fontSize: 11,
    fontWeight: '900',
    color: '#78350F',
    marginTop: 2,
  },
  fractionMathBox: {
    backgroundColor: '#451A03',
    width: '100%',
    padding: 10,
    borderRadius: BORDER_RADIUS.md,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderWidth: 1,
    borderColor: '#B45309',
  },
  fractionVisual: {
    alignItems: 'center',
    backgroundColor: '#78350F',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 8,
  },
  fractionNum: {
    fontSize: 18,
    fontWeight: '900',
    color: '#FEF08A',
  },
  fractionLine: {
    width: 24,
    height: 2,
    backgroundColor: '#FEF08A',
    marginVertical: 2,
  },
  fractionDenom: {
    fontSize: 18,
    fontWeight: '900',
    color: '#FEF08A',
  },
  fractionMathExpl: {
    flex: 1,
  },
  fractionMathTitle: {
    fontSize: 13,
    fontWeight: '900',
    color: '#FFFFFF',
  },
  fractionMathSub: {
    fontSize: 11,
    color: '#FED7AA',
    marginTop: 2,
    lineHeight: 15,
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
