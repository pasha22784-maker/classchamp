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

const { width } = Dimensions.get('window');

interface CountingTrainGameModalProps {
  visible: boolean;
  onClose: () => void;
}

interface TrainLevel {
  id: number;
  targetCount: number;
  itemEmoji: string;
  itemName: string;
  hindiName: string;
  parentNote: string;
}

const TRAIN_LEVELS: TrainLevel[] = [
  {
    id: 1,
    targetCount: 3,
    itemEmoji: '🍎',
    itemName: 'Apples',
    hindiName: '3 सेब ट्रेन में भरें!',
    parentNote: 'Counting up to 3 develops subitizing (recognizing small groups instantly).',
  },
  {
    id: 2,
    targetCount: 5,
    itemEmoji: '⭐',
    itemName: 'Golden Stars',
    hindiName: '5 चमकते सितारे लोड करें!',
    parentNote: 'Five is an essential benchmark number (fingers on one hand).',
  },
  {
    id: 3,
    targetCount: 4,
    itemEmoji: '🎈',
    itemName: 'Balloons',
    hindiName: '4 रंग-बिरंगे गुब्बारे भरें!',
    parentNote: 'Reinforces 1-to-1 matching: 1 tap = exactly 1 physical item.',
  },
  {
    id: 4,
    targetCount: 6,
    itemEmoji: '🧁',
    itemName: 'Cupcakes',
    hindiName: '6 मीठे कपकेक्स लोड करें!',
    parentNote: 'Counting beyond 5 (5 + 1 structure) prepares for early addition.',
  },
  {
    id: 5,
    targetCount: 7,
    itemEmoji: '🍌',
    itemName: 'Bananas',
    hindiName: '7 केले ट्रेन में रखें!',
    parentNote: 'Develops working memory retention during continuous counting.',
  },
  {
    id: 6,
    targetCount: 8,
    itemEmoji: '🍓',
    itemName: 'Strawberries',
    hindiName: '8 स्ट्रॉबेरी लोड करें!',
    parentNote: 'Reinforces cardinality: the last number spoken tells "how many in all".',
  },
  {
    id: 7,
    targetCount: 10,
    itemEmoji: '🚗',
    itemName: 'Toy Cars',
    hindiName: '10 खिलौना कारें ट्रेन में लोड करें!',
    parentNote: '10 is the king of the decimal base-10 number system.',
  },
  {
    id: 8,
    targetCount: 12,
    itemEmoji: '💎',
    itemName: 'Diamonds',
    hindiName: '12 चमकीले हीरे भरें (एक दर्जन)!',
    parentNote: 'Teens transition: counting beyond 10 into 11 and 12.',
  },
];

export const CountingTrainGameModal: React.FC<CountingTrainGameModalProps> = ({
  visible,
  onClose,
}) => {
  const { addReward } = useUserStore();
  const [levelIndex, setLevelIndex] = useState(0);
  const [currentLoaded, setCurrentLoaded] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [showParentInfo, setShowParentInfo] = useState(false);

  const trainWiggle = useRef(new Animated.Value(0)).current;
  const currentLevel = TRAIN_LEVELS[levelIndex] || TRAIN_LEVELS[0];

  useEffect(() => {
    if (!visible) return;
    setLevelIndex(0);
    setCurrentLoaded(0);
    setIsSuccess(false);
    setIsFinished(false);
    setShowParentInfo(false);
  }, [visible]);

  const handleAddItem = () => {
    if (isSuccess || currentLoaded >= currentLevel.targetCount) return;

    const nextCount = currentLoaded + 1;
    setCurrentLoaded(nextCount);
    soundManager.playPop();
    triggerHaptic('light');

    if (nextCount === currentLevel.targetCount) {
      setIsSuccess(true);
      soundManager.playBell();
      triggerHaptic('success');

      Animated.sequence([
        Animated.timing(trainWiggle, { toValue: 10, duration: 100, useNativeDriver: true }),
        Animated.timing(trainWiggle, { toValue: -10, duration: 100, useNativeDriver: true }),
        Animated.timing(trainWiggle, { toValue: 5, duration: 100, useNativeDriver: true }),
        Animated.timing(trainWiggle, { toValue: 0, duration: 100, useNativeDriver: true }),
      ]).start();

      setTimeout(() => {
        if (levelIndex + 1 < TRAIN_LEVELS.length) {
          setLevelIndex((prev) => prev + 1);
          setCurrentLoaded(0);
          setIsSuccess(false);
        } else {
          setIsFinished(true);
          soundManager.playFanfare();
        }
      }, 1600);
    }
  };

  const handleRemoveItem = () => {
    if (isSuccess || currentLoaded <= 0) return;
    soundManager.playClick();
    triggerHaptic('light');
    setCurrentLoaded((prev) => prev - 1);
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
              <Text style={styles.title}>🚂 Counting Number Train</Text>
              <Text style={styles.sub}>
                Level {levelIndex + 1} of {TRAIN_LEVELS.length} • NCERT Foundation
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
            <Text style={styles.missionPrompt}>
              Load {currentLevel.targetCount} {currentLevel.itemName} into the Train!
            </Text>
            <Text style={styles.missionHindi}>{currentLevel.hindiName}</Text>
          </View>

          {/* Animated Train Cargo Visual */}
          <Animated.View
            style={[
              styles.trainStage,
              { transform: [{ translateX: trainWiggle }] },
              isSuccess && styles.trainStageSuccess,
            ]}
          >
            {/* Train Engine */}
            <View style={styles.engineBox}>
              <Text style={styles.engineEmoji}>🚂</Text>
              <Text style={styles.engineLabel}>CHAMP EXP</Text>
            </View>

            {/* Wagon Cargo Display */}
            <View style={styles.wagonBox}>
              <View style={styles.counterRow}>
                <Text style={styles.counterText}>
                  Loaded: <Text style={styles.counterHighlight}>{currentLoaded}</Text> / {currentLevel.targetCount}
                </Text>
                {isSuccess && <Text style={styles.chimeCheck}>✅ FULL!</Text>}
              </View>

              <View style={styles.cargoGrid}>
                {Array.from({ length: currentLevel.targetCount }).map((_, idx) => {
                  const isFilled = idx < currentLoaded;
                  return (
                    <View
                      key={idx}
                      style={[
                        styles.cargoSlot,
                        isFilled && styles.cargoSlotFilled,
                      ]}
                    >
                      <Text style={styles.cargoSlotEmoji}>
                        {isFilled ? currentLevel.itemEmoji : '▫️'}
                      </Text>
                    </View>
                  );
                })}
              </View>
            </View>
          </Animated.View>

          {/* Interactive Loading Controls */}
          <View style={styles.controlsRow}>
            <TouchableOpacity
              style={[styles.removeBtn, currentLoaded === 0 && styles.btnDisabled]}
              disabled={currentLoaded === 0 || isSuccess}
              onPress={handleRemoveItem}
              activeOpacity={0.8}
            >
              <Text style={styles.btnText}>- Remove</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.addBtn,
                currentLoaded >= currentLevel.targetCount && styles.btnSuccess,
              ]}
              disabled={isSuccess}
              onPress={handleAddItem}
              activeOpacity={0.8}
            >
              <Text style={styles.addBtnText}>
                + Tap to Load {currentLevel.itemEmoji}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Footer note */}
          <View style={styles.footerBar}>
            <Text style={styles.footerNote}>
              ✨ 1-to-1 tactile correspondence method
            </Text>
          </View>

          {/* Finished Celebration Modal */}
          {isFinished && (
            <View style={styles.successOverlay}>
              <View style={styles.successBox}>
                <Text style={styles.successEmoji}>🎉</Text>
                <Text style={styles.successTitle}>Train Conductor Champ!</Text>
                <Text style={styles.successDesc}>
                  Aapne saare 8 wagons me sahi counting karke train chala di!
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
    backgroundColor: '#064E3B',
    borderRadius: BORDER_RADIUS.xl,
    padding: SPACING.lg,
    borderWidth: 2,
    borderColor: '#10B981',
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
    backgroundColor: '#047857',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: BORDER_RADIUS.full,
    borderWidth: 1,
    borderColor: '#34D399',
  },
  infoPillText: {
    color: '#A7F3D0',
    fontSize: 12,
    fontWeight: '700',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '800',
  },
  sub: {
    color: '#A7F3D0',
    fontSize: 12,
    fontWeight: '600',
  },
  closeBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#065F46',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  parentBox: {
    backgroundColor: '#022C22',
    borderRadius: BORDER_RADIUS.md,
    padding: 10,
    marginBottom: SPACING.sm,
    borderLeftWidth: 3,
    borderLeftColor: '#34D399',
  },
  parentTitle: {
    color: '#34D399',
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
    backgroundColor: '#047857',
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.sm,
    alignItems: 'center',
    marginBottom: SPACING.md,
    borderWidth: 1,
    borderColor: '#10B981',
  },
  missionPrompt: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
    textAlign: 'center',
  },
  missionHindi: {
    color: '#D1FAE5',
    fontSize: 13,
    fontWeight: '600',
    marginTop: 2,
    textAlign: 'center',
  },
  trainStage: {
    backgroundColor: '#022C22',
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.md,
    borderWidth: 1,
    borderColor: '#059669',
    marginBottom: SPACING.md,
  },
  trainStageSuccess: {
    borderColor: '#34D399',
    backgroundColor: '#065F46',
  },
  engineBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  engineEmoji: {
    fontSize: 32,
    marginRight: 8,
  },
  engineLabel: {
    color: '#34D399',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1,
  },
  wagonBox: {
    backgroundColor: '#064E3B',
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.sm,
    borderWidth: 1,
    borderColor: '#10B981',
  },
  counterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  counterText: {
    color: '#E2E8F0',
    fontSize: 13,
    fontWeight: '700',
  },
  counterHighlight: {
    color: '#FDE68A',
    fontSize: 16,
    fontWeight: '900',
  },
  chimeCheck: {
    color: '#34D399',
    fontSize: 12,
    fontWeight: '800',
  },
  cargoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    justifyContent: 'center',
    minHeight: 64,
    alignItems: 'center',
  },
  cargoSlot: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: '#022C22',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#047857',
  },
  cargoSlotFilled: {
    backgroundColor: '#059669',
    borderColor: '#34D399',
  },
  cargoSlotEmoji: {
    fontSize: 20,
  },
  controlsRow: {
    flexDirection: 'row',
    gap: 12,
    marginVertical: SPACING.sm,
  },
  removeBtn: {
    backgroundColor: '#991B1B',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: BORDER_RADIUS.lg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addBtn: {
    flex: 1,
    backgroundColor: '#10B981',
    paddingVertical: 14,
    borderRadius: BORDER_RADIUS.lg,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#34D399',
  },
  btnSuccess: {
    backgroundColor: '#059669',
  },
  btnDisabled: {
    opacity: 0.4,
  },
  btnText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
  },
  addBtnText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '800',
  },
  footerBar: {
    alignItems: 'center',
    marginTop: SPACING.xs,
  },
  footerNote: {
    color: '#6EE7B7',
    fontSize: 11,
    fontStyle: 'italic',
  },
  successOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(6, 78, 59, 0.96)',
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
    color: '#FDE68A',
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
    backgroundColor: '#065F46',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: BORDER_RADIUS.full,
    borderWidth: 1,
    borderColor: '#34D399',
    marginBottom: SPACING.lg,
  },
  rewardText: {
    color: '#FDE68A',
    fontSize: 15,
    fontWeight: '800',
  },
  claimBtn: {
    backgroundColor: '#10B981',
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: BORDER_RADIUS.xl,
    borderWidth: 1,
    borderColor: '#34D399',
  },
  claimBtnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
  },
});
