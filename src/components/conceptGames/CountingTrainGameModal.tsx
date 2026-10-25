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
import { SpeakerButton } from '../common/SpeakerButton';
import { stopSpeaking } from '../../utils/speech';

const { width } = Dimensions.get('window');

interface CountingTrainGameModalProps {
  visible: boolean;
  onClose: () => void;
  activeLang?: string;
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
    targetCount: 1,
    itemEmoji: '🍎',
    itemName: '1 Apple',
    hindiName: '1 सेब ट्रेन में भरें!',
    parentNote: 'Number 1: Cardinal foundation - representing the concept of a single isolated object.',
  },
  {
    id: 2,
    targetCount: 2,
    itemEmoji: '🥭',
    itemName: '2 Juicy Mangoes',
    hindiName: '2 आम लोड करें!',
    parentNote: 'Number 2: Pair concept - connecting left/right and dual items.',
  },
  {
    id: 3,
    targetCount: 3,
    itemEmoji: '⭐',
    itemName: '3 Golden Stars',
    hindiName: '3 चमकते सितारे लोड करें!',
    parentNote: 'Counting up to 3 develops subitizing (recognizing small groups instantly).',
  },
  {
    id: 4,
    targetCount: 4,
    itemEmoji: '🎈',
    itemName: '4 Colorful Balloons',
    hindiName: '4 रंग-बिरंगे गुब्बारे भरें!',
    parentNote: 'Reinforces 1-to-1 matching: 1 tap = exactly 1 physical item.',
  },
  {
    id: 5,
    targetCount: 5,
    itemEmoji: '🧁',
    itemName: '5 Sweet Cupcakes',
    hindiName: '5 मीठे कपकेक्स लोड करें!',
    parentNote: 'Five is an essential benchmark number (fingers on one hand).',
  },
  {
    id: 6,
    targetCount: 6,
    itemEmoji: '🍓',
    itemName: '6 Red Strawberries',
    hindiName: '6 स्ट्रॉबेरी लोड करें!',
    parentNote: 'Counting beyond 5 (5 + 1 structure) prepares for early addition.',
  },
  {
    id: 7,
    targetCount: 8,
    itemEmoji: '🚗',
    itemName: '8 Toy Cars',
    hindiName: '8 खिलौना कारें ट्रेन में लोड करें!',
    parentNote: 'Reinforces cardinality: the last number spoken tells "how many in all".',
  },
  {
    id: 8,
    targetCount: 10,
    itemEmoji: '💎',
    itemName: '10 Shiny Diamonds',
    hindiName: '10 चमकीले हीरे भरें (पूरे 10)!',
    parentNote: '10 is the king of the decimal base-10 number system.',
  },
];

export const CountingTrainGameModal: React.FC<CountingTrainGameModalProps> = ({
  visible,
  onClose,
  activeLang,
}) => {
  const { addReward, profile } = useUserStore();
  const isHindi = (activeLang || profile.preferredLanguage) === 'hi';
  const [levelIndex, setLevelIndex] = useState(0);
  const [currentLoaded, setCurrentLoaded] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [showParentInfo, setShowParentInfo] = useState(false);

  const trainWiggle = useRef(new Animated.Value(0)).current;
  const currentLevel = TRAIN_LEVELS[levelIndex] || TRAIN_LEVELS[0];

  useEffect(() => {
    if (!visible) return;
    stopSpeaking();
    setLevelIndex(0);
    setCurrentLoaded(0);
    setIsSuccess(false);
    setIsFinished(false);
    setShowParentInfo(false);
  }, [visible]);

  useEffect(() => {
    if (!visible) return;
    stopSpeaking();
  }, [levelIndex]);

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

  const handleClose = () => {
    stopSpeaking();
    onClose();
  };

  const handleFinish = async () => {
    stopSpeaking();
    await addReward({ stars: 25, xp: 90 });
    triggerHaptic('success');
    onClose();
  };

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={handleClose}>
      <View style={styles.overlay}>
        <View style={styles.card}>
          {/* Header */}
          <View style={styles.header}>
            <View>
              <Text style={styles.title}>🚂 Counting Number Train</Text>
              <Text style={styles.sub}>
                Level {levelIndex + 1} of {TRAIN_LEVELS.length} • NCERT Balvatika 2
              </Text>
            </View>
            <View style={styles.topRightRow}>
              <TouchableOpacity
                style={styles.infoPill}
                onPress={() => setShowParentInfo((v) => !v)}
              >
                <Text style={styles.infoPillText}>👨‍🏫 Parents</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleClose} style={styles.closeBtn}>
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

          {/* Mission Target Banner with Speaker */}
          <View style={styles.missionBanner}>
            <View style={styles.missionTextCol}>
              <Text style={styles.missionPrompt}>
                Load {currentLevel.targetCount} {currentLevel.itemName} into the Train!
              </Text>
              {isHindi && <Text style={styles.missionHindi}>{currentLevel.hindiName}</Text>}
            </View>
            <SpeakerButton
              textToSpeak={isHindi ? currentLevel.hindiName : `Load ${currentLevel.targetCount} ${currentLevel.itemName} into the train!`}
              size="pill"
              showLabel
              activeLang={isHindi ? 'hi' : 'en'}
              style={styles.speakerPill}
            />
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
    backgroundColor: 'rgba(15, 23, 42, 0.45)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING.md,
  },
  card: {
    width: Math.min(width - 32, 440),
    backgroundColor: '#FFFFFF',
    borderRadius: BORDER_RADIUS.xl,
    padding: SPACING.lg,
    borderWidth: 2,
    borderColor: '#86EFAC',
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
    backgroundColor: '#ECFDF5',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: BORDER_RADIUS.full,
    borderWidth: 1,
    borderColor: '#A7F3D0',
  },
  infoPillText: {
    color: '#065F46',
    fontSize: 12,
    fontWeight: '700',
  },
  title: {
    color: '#064E3B',
    fontSize: 18,
    fontWeight: '800',
  },
  sub: {
    color: '#059669',
    fontSize: 12,
    fontWeight: '600',
  },
  closeBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F1F5F9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeText: {
    color: '#475569',
    fontSize: 16,
    fontWeight: '700',
  },
  parentBox: {
    backgroundColor: '#FEF3C7',
    borderRadius: BORDER_RADIUS.md,
    padding: 10,
    marginBottom: SPACING.sm,
    borderLeftWidth: 3,
    borderLeftColor: '#F59E0B',
  },
  parentTitle: {
    color: '#B45309',
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 2,
  },
  parentDesc: {
    color: '#78350F',
    fontSize: 12,
    lineHeight: 16,
  },
  missionBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F0FDF4',
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.sm,
    marginBottom: SPACING.md,
    borderWidth: 1,
    borderColor: '#A7F3D0',
    gap: 8,
  },
  missionTextCol: {
    flex: 1,
  },
  missionPrompt: {
    color: '#064E3B',
    fontSize: 15,
    fontWeight: '800',
  },
  missionHindi: {
    color: '#047857',
    fontSize: 13,
    fontWeight: '600',
    marginTop: 2,
  },
  speakerPill: {
    backgroundColor: '#FFFFFF',
    borderColor: '#34D399',
  },
  trainStage: {
    backgroundColor: '#F8FAFC',
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.md,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: SPACING.md,
  },
  trainStageSuccess: {
    borderColor: '#10B981',
    backgroundColor: '#DCFCE7',
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
    color: '#059669',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1,
  },
  wagonBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.sm,
    borderWidth: 1,
    borderColor: '#A7F3D0',
  },
  counterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  counterText: {
    color: '#334155',
    fontSize: 13,
    fontWeight: '700',
  },
  counterHighlight: {
    color: '#059669',
    fontSize: 16,
    fontWeight: '900',
  },
  chimeCheck: {
    color: '#059669',
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
    backgroundColor: '#F1F5F9',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#CBD5E1',
  },
  cargoSlotFilled: {
    backgroundColor: '#DCFCE7',
    borderColor: '#10B981',
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
    backgroundColor: '#FEE2E2',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: BORDER_RADIUS.lg,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FCA5A5',
  },
  addBtn: {
    flex: 1,
    backgroundColor: '#10B981',
    paddingVertical: 14,
    borderRadius: BORDER_RADIUS.lg,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#059669',
  },
  btnSuccess: {
    backgroundColor: '#059669',
  },
  btnDisabled: {
    opacity: 0.4,
  },
  btnText: {
    color: '#DC2626',
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
    color: '#059669',
    fontSize: 11,
    fontStyle: 'italic',
  },
  successOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.96)',
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
    color: '#064E3B',
    fontSize: 22,
    fontWeight: '900',
    marginBottom: 4,
  },
  successDesc: {
    color: '#334155',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: SPACING.md,
    lineHeight: 20,
  },
  rewardPill: {
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: BORDER_RADIUS.full,
    borderWidth: 1,
    borderColor: '#F59E0B',
    marginBottom: SPACING.lg,
  },
  rewardText: {
    color: '#B45309',
    fontSize: 15,
    fontWeight: '800',
  },
  claimBtn: {
    backgroundColor: '#10B981',
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: BORDER_RADIUS.xl,
    borderWidth: 1,
    borderColor: '#059669',
  },
  claimBtnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
  },
});
