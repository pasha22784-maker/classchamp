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

interface AnimalSeesawGameModalProps {
  visible: boolean;
  onClose: () => void;
}

interface SeesawLevel {
  id: number;
  prompt: string;
  hindiPrompt: string;
  leftAnimal: { name: string; emoji: string; weight: number };
  rightAnimal: { name: string; emoji: string; weight: number };
  questionType: 'who_is_heavier' | 'who_is_lighter';
  correctSide: 'left' | 'right';
  parentNote: string;
}

const SEESAW_LEVELS: SeesawLevel[] = [
  {
    id: 1,
    prompt: 'Who is HEAVIER (भारी)? Tap to see who goes down!',
    hindiPrompt: 'हाथी 🐘 या चूहा 🐭 में कौन भारी है?',
    leftAnimal: { name: 'Elephant', emoji: '🐘', weight: 50 },
    rightAnimal: { name: 'Mouse', emoji: '🐭', weight: 1 },
    questionType: 'who_is_heavier',
    correctSide: 'left',
    parentNote: 'Gravity pull makes the heavier mass tilt downwards on a seesaw fulcrum.',
  },
  {
    id: 2,
    prompt: 'Who is LIGHTER (हल्का)? Tap the lighter one!',
    hindiPrompt: 'शेर 🦁 या तितली 🦋 में कौन हल्का है?',
    leftAnimal: { name: 'Lion', emoji: '🦁', weight: 35 },
    rightAnimal: { name: 'Butterfly', emoji: '🦋', weight: 1 },
    questionType: 'who_is_lighter',
    correctSide: 'right',
    parentNote: 'Lighter objects rise up when pitted against heavier masses.',
  },
  {
    id: 3,
    prompt: 'Who is HEAVIER (भारी)? Tap the heavy fruit!',
    hindiPrompt: 'तरबूज 🍉 या स्ट्रॉबेरी 🍓 में कौन भारी है?',
    leftAnimal: { name: 'Strawberry', emoji: '🍓', weight: 2 },
    rightAnimal: { name: 'Watermelon', emoji: '🍉', weight: 40 },
    questionType: 'who_is_heavier',
    correctSide: 'right',
    parentNote: 'Sensory volume vs mass: big juicy watermelon vs tiny strawberry.',
  },
  {
    id: 4,
    prompt: 'Who is LIGHTER (हल्का)?',
    hindiPrompt: 'दरियाई घोड़ा 🦛 या बिल्ली 🐱 में कौन हल्का है?',
    leftAnimal: { name: 'Hippo', emoji: '🦛', weight: 45 },
    rightAnimal: { name: 'Cat', emoji: '🐱', weight: 5 },
    questionType: 'who_is_lighter',
    correctSide: 'right',
    parentNote: 'Developing relative weight perception without numerical units.',
  },
  {
    id: 5,
    prompt: 'Who is HEAVIER (भारी)? Tap the heavy vehicle!',
    hindiPrompt: 'बस 🚌 या साइकिल 🚲 में कौन भारी है?',
    leftAnimal: { name: 'Bus', emoji: '🚌', weight: 60 },
    rightAnimal: { name: 'Bicycle', emoji: '🚲', weight: 8 },
    questionType: 'who_is_heavier',
    correctSide: 'left',
    parentNote: 'Connecting everyday transportation items with mechanical weight comparison.',
  },
  {
    id: 6,
    prompt: 'Who is LIGHTER (हल्का)?',
    hindiPrompt: 'किताब 📚 या मोर पंख 🪶 में कौन हल्का है?',
    leftAnimal: { name: 'Heavy Book', emoji: '📚', weight: 15 },
    rightAnimal: { name: 'Feather', emoji: '🪶', weight: 1 },
    questionType: 'who_is_lighter',
    correctSide: 'right',
    parentNote: 'Extremes of lightness: feathers float, books drop.',
  },
  {
    id: 7,
    prompt: 'Who is HEAVIER (भारी)?',
    hindiPrompt: 'भालू 🐻 या खरगोश 🐰 में कौन भारी है?',
    leftAnimal: { name: 'Bear', emoji: '🐻', weight: 38 },
    rightAnimal: { name: 'Rabbit', emoji: '🐰', weight: 4 },
    questionType: 'who_is_heavier',
    correctSide: 'left',
    parentNote: 'Comparing forest animal body masses.',
  },
  {
    id: 8,
    prompt: 'Master Balance: Who is LIGHTER (हल्का)?',
    hindiPrompt: 'बड़ा कद्दू 🎃 या छोटी चेरी 🍒 में कौन हल्का है?',
    leftAnimal: { name: 'Pumpkin', emoji: '🎃', weight: 28 },
    rightAnimal: { name: 'Cherry', emoji: '🍒', weight: 1 },
    questionType: 'who_is_lighter',
    correctSide: 'right',
    parentNote: 'Harvest vegetables & fruit size comparison mastery.',
  },
];

export const AnimalSeesawGameModal: React.FC<AnimalSeesawGameModalProps> = ({
  visible,
  onClose,
}) => {
  const { addReward } = useUserStore();
  const [levelIndex, setLevelIndex] = useState(0);
  const [selectedSide, setSelectedSide] = useState<'left' | 'right' | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [showParentInfo, setShowParentInfo] = useState(false);

  const seesawTilt = useRef(new Animated.Value(0)).current;
  const currentLevel = SEESAW_LEVELS[levelIndex] || SEESAW_LEVELS[0];

  useEffect(() => {
    if (!visible) return;
    setLevelIndex(0);
    setSelectedSide(null);
    setIsSuccess(false);
    setIsFinished(false);
    setShowParentInfo(false);
    seesawTilt.setValue(0);
  }, [visible]);

  const handleSelectSide = (side: 'left' | 'right') => {
    if (isSuccess) return;

    soundManager.playPop();
    triggerHaptic('medium');
    setSelectedSide(side);

    // Calculate realistic seesaw tilt: heavier side goes DOWN (positive or negative angle)
    const tiltTarget = currentLevel.leftAnimal.weight > currentLevel.rightAnimal.weight ? -15 : 15;

    Animated.spring(seesawTilt, {
      toValue: tiltTarget,
      friction: 4,
      tension: 40,
      useNativeDriver: true,
    }).start();

    if (side === currentLevel.correctSide) {
      setIsSuccess(true);
      soundManager.playBell();
      triggerHaptic('success');

      setTimeout(() => {
        if (levelIndex + 1 < SEESAW_LEVELS.length) {
          setLevelIndex((prev) => prev + 1);
          setSelectedSide(null);
          setIsSuccess(false);
          seesawTilt.setValue(0);
        } else {
          setIsFinished(true);
          soundManager.playFanfare();
        }
      }, 1800);
    } else {
      triggerHaptic('warning');
    }
  };

  const handleFinish = async () => {
    await addReward({ stars: 25, xp: 90 });
    triggerHaptic('success');
    onClose();
  };

  const tiltInterpolate = seesawTilt.interpolate({
    inputRange: [-20, 20],
    outputRange: ['-20deg', '20deg'],
  });

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.card}>
          {/* Header */}
          <View style={styles.header}>
            <View>
              <Text style={styles.title}>⚖️ Animal Seesaw Balance</Text>
              <Text style={styles.sub}>
                Level {levelIndex + 1} of {SEESAW_LEVELS.length} • NCERT Foundation
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

          {/* Realistic Seesaw Physics Stage */}
          <View style={styles.seesawStage}>
            {/* Fulcrum Plank */}
            <Animated.View
              style={[
                styles.seesawPlank,
                { transform: [{ rotate: tiltInterpolate }] },
              ]}
            >
              {/* Left Seat */}
              <TouchableOpacity
                style={[
                  styles.seatBox,
                  selectedSide === 'left' && styles.seatBoxSelected,
                  isSuccess && currentLevel.correctSide === 'left' && styles.seatBoxCorrect,
                ]}
                activeOpacity={0.8}
                onPress={() => handleSelectSide('left')}
              >
                <Text style={styles.animalEmoji}>{currentLevel.leftAnimal.emoji}</Text>
                <Text style={styles.animalName}>{currentLevel.leftAnimal.name}</Text>
              </TouchableOpacity>

              {/* Center Pivot Point */}
              <View style={styles.pivotDot} />

              {/* Right Seat */}
              <TouchableOpacity
                style={[
                  styles.seatBox,
                  selectedSide === 'right' && styles.seatBoxSelected,
                  isSuccess && currentLevel.correctSide === 'right' && styles.seatBoxCorrect,
                ]}
                activeOpacity={0.8}
                onPress={() => handleSelectSide('right')}
              >
                <Text style={styles.animalEmoji}>{currentLevel.rightAnimal.emoji}</Text>
                <Text style={styles.animalName}>{currentLevel.rightAnimal.name}</Text>
              </TouchableOpacity>
            </Animated.View>

            {/* Fulcrum Triangle Base */}
            <View style={styles.fulcrumBase}>
              <Text style={styles.fulcrumEmoji}>▲</Text>
              <View style={styles.groundBar} />
            </View>
          </View>

          {/* Prompt Buttons */}
          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={[
                styles.sideBtn,
                selectedSide === 'left' && styles.sideBtnChosen,
              ]}
              onPress={() => handleSelectSide('left')}
            >
              <Text style={styles.sideBtnText}>
                {currentLevel.leftAnimal.emoji} {currentLevel.leftAnimal.name}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.sideBtn,
                selectedSide === 'right' && styles.sideBtnChosen,
              ]}
              onPress={() => handleSelectSide('right')}
            >
              <Text style={styles.sideBtnText}>
                {currentLevel.rightAnimal.emoji} {currentLevel.rightAnimal.name}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Footer note */}
          <View style={styles.footerBar}>
            <Text style={styles.footerNote}>
              ✨ Fulcrum physics & mass comparison method
            </Text>
          </View>

          {/* Finished Celebration Modal */}
          {isFinished && (
            <View style={styles.successOverlay}>
              <View style={styles.successBox}>
                <Text style={styles.successEmoji}>🦚</Text>
                <Text style={styles.successTitle}>Seesaw Physics Champ!</Text>
                <Text style={styles.successDesc}>
                  Aapne heavy (भारी) aur light (हल्के) ka practical concept master kar liya!
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
    backgroundColor: '#78350F',
    borderRadius: BORDER_RADIUS.xl,
    padding: SPACING.lg,
    borderWidth: 2,
    borderColor: '#F59E0B',
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
    backgroundColor: '#92400E',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: BORDER_RADIUS.full,
    borderWidth: 1,
    borderColor: '#FDE68A',
  },
  infoPillText: {
    color: '#FEF3C7',
    fontSize: 12,
    fontWeight: '700',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '800',
  },
  sub: {
    color: '#FDE68A',
    fontSize: 12,
    fontWeight: '600',
  },
  closeBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#92400E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  parentBox: {
    backgroundColor: '#451A03',
    borderRadius: BORDER_RADIUS.md,
    padding: 10,
    marginBottom: SPACING.sm,
    borderLeftWidth: 3,
    borderLeftColor: '#F59E0B',
  },
  parentTitle: {
    color: '#F59E0B',
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
    backgroundColor: '#92400E',
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.sm,
    alignItems: 'center',
    marginBottom: SPACING.md,
    borderWidth: 1,
    borderColor: '#F59E0B',
  },
  missionPrompt: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '800',
    textAlign: 'center',
  },
  missionHindi: {
    color: '#FEF3C7',
    fontSize: 13,
    fontWeight: '600',
    marginTop: 2,
    textAlign: 'center',
  },
  seesawStage: {
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#451A03',
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.sm,
    marginBottom: SPACING.md,
    overflow: 'hidden',
  },
  seesawPlank: {
    width: '92%',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 6,
    borderBottomColor: '#D97706',
    paddingHorizontal: 8,
  },
  seatBox: {
    alignItems: 'center',
    backgroundColor: '#78350F',
    borderRadius: BORDER_RADIUS.md,
    padding: 8,
    borderWidth: 2,
    borderColor: '#F59E0B',
    minWidth: 80,
  },
  seatBoxSelected: {
    borderColor: '#FDE68A',
    backgroundColor: '#92400E',
  },
  seatBoxCorrect: {
    borderColor: '#10B981',
    backgroundColor: '#065F46',
  },
  animalEmoji: {
    fontSize: 34,
  },
  animalName: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
    marginTop: 2,
  },
  pivotDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#FDE68A',
  },
  fulcrumBase: {
    alignItems: 'center',
    marginTop: -8,
  },
  fulcrumEmoji: {
    fontSize: 28,
    color: '#F59E0B',
  },
  groundBar: {
    width: 120,
    height: 6,
    backgroundColor: '#059669',
    borderRadius: 3,
    marginTop: -4,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: SPACING.sm,
  },
  sideBtn: {
    flex: 1,
    backgroundColor: '#92400E',
    paddingVertical: 12,
    borderRadius: BORDER_RADIUS.lg,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F59E0B',
  },
  sideBtnChosen: {
    backgroundColor: '#B45309',
    borderColor: '#FDE68A',
  },
  sideBtnText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '800',
  },
  footerBar: {
    alignItems: 'center',
    marginTop: SPACING.xs,
  },
  footerNote: {
    color: '#FDE68A',
    fontSize: 11,
    fontStyle: 'italic',
  },
  successOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(69, 26, 3, 0.96)',
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
    backgroundColor: '#92400E',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: BORDER_RADIUS.full,
    borderWidth: 1,
    borderColor: '#FDE68A',
    marginBottom: SPACING.lg,
  },
  rewardText: {
    color: '#FDE68A',
    fontSize: 15,
    fontWeight: '800',
  },
  claimBtn: {
    backgroundColor: '#F59E0B',
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: BORDER_RADIUS.xl,
    borderWidth: 1,
    borderColor: '#FDE68A',
  },
  claimBtnText: {
    color: '#451A03',
    fontSize: 16,
    fontWeight: '900',
  },
});
