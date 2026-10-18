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

interface PlaceValueRocketModalProps {
  visible: boolean;
  onClose: () => void;
}

interface RocketLevel {
  id: number;
  targetNumber: number;
  prompt: string;
  hindiPrompt: string;
  parentNote: string;
}

const ROCKET_LEVELS: RocketLevel[] = [
  {
    id: 1,
    targetNumber: 245,
    prompt: 'Fuel the Rocket to Launch Code: 245!',
    hindiPrompt: '2 सैकड़ा (200) + 4 दहाई (40) + 5 इकाई (5) भरें!',
    parentNote: 'Decomposing 3-digit numbers into standard Base-10 components.',
  },
  {
    id: 2,
    targetNumber: 530,
    prompt: 'Launch Code: 530 (Notice 0 Ones!)',
    hindiPrompt: '5 सैकड़ा (500) + 3 दहाई (30) + 0 इकाई भरें!',
    parentNote: 'Understanding zero as a place holder in the ones column.',
  },
  {
    id: 3,
    targetNumber: 809,
    prompt: 'Launch Code: 809 (Zero in Tens!)',
    hindiPrompt: '8 सैकड़ा (800) + 0 दहाई + 9 इकाई भरें!',
    parentNote: 'Zero in the middle (tens place) is a major hurdle in primary school math.',
  },
  {
    id: 4,
    targetNumber: 1250,
    prompt: 'Enter the Thousands: Launch Code 1,250!',
    hindiPrompt: '1 हज़ार (1000) + 2 सैकड़ा (200) + 5 दहाई (50)!',
    parentNote: 'First transition into the 4th digit (Thousands place).',
  },
  {
    id: 5,
    targetNumber: 2408,
    prompt: 'Launch Code: 2,408!',
    hindiPrompt: '2 हज़ार + 4 सैकड़ा + 0 दहाई + 8 इकाई भरें!',
    parentNote: 'Mixed 4-digit numbers with internal zero tens.',
  },
  {
    id: 6,
    targetNumber: 3764,
    prompt: 'Launch Code: 3,764!',
    hindiPrompt: '3 हज़ार + 7 सैकड़ा + 6 दहाई + 4 इकाई!',
    parentNote: 'Full 4-column active value distribution.',
  },
  {
    id: 7,
    targetNumber: 5005,
    prompt: 'Double Zero Trap: Launch Code 5,005!',
    hindiPrompt: '5 हज़ार (5000) + 0 सैकड़ा + 0 दहाई + 5 इकाई!',
    parentNote: 'Double zero placeholder mastery (5005 vs 55).',
  },
  {
    id: 8,
    targetNumber: 6890,
    prompt: 'Launch Code: 6,890!',
    hindiPrompt: '6 हज़ार + 8 सैकड़ा + 9 दहाई + 0 इकाई!',
    parentNote: 'High tens place grouping (9 tens = 90).',
  },
  {
    id: 9,
    targetNumber: 8432,
    prompt: 'Deep Space Mission: Code 8,432!',
    hindiPrompt: '8 हज़ार + 4 सैकड़ा + 3 दहाई + 2 इकाई!',
    parentNote: 'Preparation for Class 4-5 large numbers.',
  },
  {
    id: 10,
    targetNumber: 9999,
    prompt: 'Master Astronaut: Max Code 9,999!',
    hindiPrompt: '9 हज़ार + 9 सैकड़ा + 9 दहाई + 9 इकाई (सर्वोच्च रॉकेट कोड)!',
    parentNote: 'The largest 4-digit number before transitioning to ten-thousands.',
  },
];

export const PlaceValueRocketModal: React.FC<PlaceValueRocketModalProps> = ({
  visible,
  onClose,
}) => {
  const { addReward } = useUserStore();
  const [levelIndex, setLevelIndex] = useState(0);
  const [thousands, setThousands] = useState(0);
  const [hundreds, setHundreds] = useState(0);
  const [tens, setTens] = useState(0);
  const [ones, setOnes] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [showParentInfo, setShowParentInfo] = useState(false);

  const rocketLaunchAnim = useRef(new Animated.Value(0)).current;
  const currentLevel = ROCKET_LEVELS[levelIndex] || ROCKET_LEVELS[0];

  useEffect(() => {
    if (!visible) return;
    setLevelIndex(0);
    resetFuel();
    setIsSuccess(false);
    setIsFinished(false);
    setShowParentInfo(false);
  }, [visible]);

  const resetFuel = () => {
    setThousands(0);
    setHundreds(0);
    setTens(0);
    setOnes(0);
    rocketLaunchAnim.setValue(0);
  };

  const adjustPlace = (place: 'thousands' | 'hundreds' | 'tens' | 'ones', delta: number) => {
    soundManager.playPop();
    triggerHaptic('light');

    if (place === 'thousands') {
      setThousands((prev) => Math.max(0, Math.min(9, prev + delta)));
    } else if (place === 'hundreds') {
      setHundreds((prev) => Math.max(0, Math.min(9, prev + delta)));
    } else if (place === 'tens') {
      setTens((prev) => Math.max(0, Math.min(9, prev + delta)));
    } else {
      setOnes((prev) => Math.max(0, Math.min(9, prev + delta)));
    }
  };

  const currentTotal = thousands * 1000 + hundreds * 100 + tens * 10 + ones;

  const handleLaunch = () => {
    if (currentTotal === currentLevel.targetNumber) {
      setIsSuccess(true);
      soundManager.playFanfare();
      triggerHaptic('success');

      Animated.timing(rocketLaunchAnim, {
        toValue: -180,
        duration: 1200,
        useNativeDriver: true,
      }).start();

      setTimeout(() => {
        if (levelIndex + 1 < ROCKET_LEVELS.length) {
          setLevelIndex((prev) => prev + 1);
          resetFuel();
          setIsSuccess(false);
        } else {
          setIsFinished(true);
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
              <Text style={styles.title}>🚀 Place Value Rocket</Text>
              <Text style={styles.sub}>
                Level {levelIndex + 1} of {ROCKET_LEVELS.length} • NCERT Class 3-4
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

          {/* Rocket Fuel Silo Stage */}
          <View style={styles.rocketStage}>
            {/* Animated Rocket */}
            <Animated.View
              style={[
                styles.rocketBox,
                { transform: [{ translateY: rocketLaunchAnim }] },
              ]}
            >
              <Text style={styles.rocketEmoji}>🚀</Text>
              {isSuccess && <Text style={styles.flameEmoji}>🔥💨</Text>}
            </Animated.View>

            {/* Live Readout Pill */}
            <View style={styles.readoutRow}>
              <Text style={styles.readoutLabel}>Fuel Code:</Text>
              <Text style={[styles.readoutVal, currentTotal === currentLevel.targetNumber && styles.readoutSuccess]}>
                {currentTotal.toLocaleString('en-IN')}
              </Text>
              <Text style={styles.readoutTarget}>
                Target: {currentLevel.targetNumber.toLocaleString('en-IN')}
              </Text>
            </View>
          </View>

          {/* Base-10 Canisters (Thousands, Hundreds, Tens, Ones) */}
          <View style={styles.canisterRow}>
            {/* Thousands */}
            <View style={[styles.canisterCol, { borderColor: '#3B82F6' }]}>
              <Text style={styles.canisterTitle}>Thousands</Text>
              <Text style={styles.canisterUnit}>(×1000)</Text>
              <Text style={styles.canisterVal}>{thousands}</Text>
              <View style={styles.stepperMini}>
                <TouchableOpacity style={styles.miniBtn} onPress={() => adjustPlace('thousands', -1)}>
                  <Text style={styles.miniBtnText}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.miniBtn} onPress={() => adjustPlace('thousands', 1)}>
                  <Text style={styles.miniBtnText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Hundreds */}
            <View style={[styles.canisterCol, { borderColor: '#10B981' }]}>
              <Text style={styles.canisterTitle}>Hundreds</Text>
              <Text style={styles.canisterUnit}>(×100)</Text>
              <Text style={styles.canisterVal}>{hundreds}</Text>
              <View style={styles.stepperMini}>
                <TouchableOpacity style={styles.miniBtn} onPress={() => adjustPlace('hundreds', -1)}>
                  <Text style={styles.miniBtnText}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.miniBtn} onPress={() => adjustPlace('hundreds', 1)}>
                  <Text style={styles.miniBtnText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Tens */}
            <View style={[styles.canisterCol, { borderColor: '#F59E0B' }]}>
              <Text style={styles.canisterTitle}>Tens</Text>
              <Text style={styles.canisterUnit}>(×10)</Text>
              <Text style={styles.canisterVal}>{tens}</Text>
              <View style={styles.stepperMini}>
                <TouchableOpacity style={styles.miniBtn} onPress={() => adjustPlace('tens', -1)}>
                  <Text style={styles.miniBtnText}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.miniBtn} onPress={() => adjustPlace('tens', 1)}>
                  <Text style={styles.miniBtnText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Ones */}
            <View style={[styles.canisterCol, { borderColor: '#EC4899' }]}>
              <Text style={styles.canisterTitle}>Ones</Text>
              <Text style={styles.canisterUnit}>(×1)</Text>
              <Text style={styles.canisterVal}>{ones}</Text>
              <View style={styles.stepperMini}>
                <TouchableOpacity style={styles.miniBtn} onPress={() => adjustPlace('ones', -1)}>
                  <Text style={styles.miniBtnText}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.miniBtn} onPress={() => adjustPlace('ones', 1)}>
                  <Text style={styles.miniBtnText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Launch Button */}
          <TouchableOpacity
            style={[styles.launchBtn, currentTotal === currentLevel.targetNumber && styles.launchBtnReady]}
            onPress={handleLaunch}
            activeOpacity={0.8}
          >
            <Text style={styles.launchBtnText}>
              {isSuccess ? 'LIFTOFF! 🚀' : 'LAUNCH ROCKET 🚀'}
            </Text>
          </TouchableOpacity>

          {/* Footer note */}
          <View style={styles.footerBar}>
            <Text style={styles.footerNote}>
              ✨ Concrete Base-10 visualization eliminates place value confusion
            </Text>
          </View>

          {/* Finished Celebration Modal */}
          {isFinished && (
            <View style={styles.successOverlay}>
              <View style={styles.successBox}>
                <Text style={styles.successEmoji}>👨‍🚀</Text>
                <Text style={styles.successTitle}>Master Astronaut Champ!</Text>
                <Text style={styles.successDesc}>
                  Aapne Thousands, Hundreds, Tens aur Ones ke saare 10 launch codes fuel kar diye!
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
    backgroundColor: '#0F172A',
    borderRadius: BORDER_RADIUS.xl,
    padding: SPACING.lg,
    borderWidth: 2,
    borderColor: '#3B82F6',
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
    backgroundColor: '#1E3A8A',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: BORDER_RADIUS.full,
    borderWidth: 1,
    borderColor: '#60A5FA',
  },
  infoPillText: {
    color: '#93C5FD',
    fontSize: 12,
    fontWeight: '700',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '800',
  },
  sub: {
    color: '#93C5FD',
    fontSize: 12,
    fontWeight: '600',
  },
  closeBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#1E293B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  parentBox: {
    backgroundColor: '#1E293B',
    borderRadius: BORDER_RADIUS.md,
    padding: 10,
    marginBottom: SPACING.sm,
    borderLeftWidth: 3,
    borderLeftColor: '#3B82F6',
  },
  parentTitle: {
    color: '#60A5FA',
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
    backgroundColor: '#1E3A8A',
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.sm,
    alignItems: 'center',
    marginBottom: SPACING.sm,
    borderWidth: 1,
    borderColor: '#3B82F6',
  },
  missionPrompt: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '800',
    textAlign: 'center',
  },
  missionHindi: {
    color: '#93C5FD',
    fontSize: 13,
    fontWeight: '600',
    marginTop: 2,
    textAlign: 'center',
  },
  rocketStage: {
    height: 110,
    backgroundColor: '#020617',
    borderRadius: BORDER_RADIUS.lg,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#1E293B',
    overflow: 'hidden',
  },
  rocketBox: {
    alignItems: 'center',
  },
  rocketEmoji: {
    fontSize: 42,
  },
  flameEmoji: {
    fontSize: 18,
    marginTop: -6,
  },
  readoutRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#1E293B',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: BORDER_RADIUS.full,
  },
  readoutLabel: {
    color: '#94A3B8',
    fontSize: 12,
    fontWeight: '700',
  },
  readoutVal: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '900',
  },
  readoutSuccess: {
    color: '#10B981',
  },
  readoutTarget: {
    color: '#FDE68A',
    fontSize: 12,
    fontWeight: '700',
  },
  canisterRow: {
    flexDirection: 'row',
    gap: 6,
    marginVertical: SPACING.sm,
  },
  canisterCol: {
    flex: 1,
    backgroundColor: '#1E293B',
    borderRadius: BORDER_RADIUS.md,
    paddingVertical: 8,
    paddingHorizontal: 4,
    alignItems: 'center',
    borderWidth: 1.5,
  },
  canisterTitle: {
    color: '#E2E8F0',
    fontSize: 10,
    fontWeight: '800',
  },
  canisterUnit: {
    color: '#94A3B8',
    fontSize: 9,
    fontWeight: '600',
    marginBottom: 4,
  },
  canisterVal: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '900',
    marginVertical: 2,
  },
  stepperMini: {
    flexDirection: 'row',
    gap: 4,
    marginTop: 4,
  },
  miniBtn: {
    width: 28,
    height: 28,
    borderRadius: 6,
    backgroundColor: '#334155',
    justifyContent: 'center',
    alignItems: 'center',
  },
  miniBtnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '900',
  },
  launchBtn: {
    backgroundColor: '#1E3A8A',
    paddingVertical: 13,
    borderRadius: BORDER_RADIUS.lg,
    alignItems: 'center',
    marginTop: SPACING.xs,
    borderWidth: 1,
    borderColor: '#3B82F6',
  },
  launchBtnReady: {
    backgroundColor: '#10B981',
    borderColor: '#34D399',
  },
  launchBtnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 1,
  },
  footerBar: {
    alignItems: 'center',
    marginTop: SPACING.xs,
  },
  footerNote: {
    color: '#64748B',
    fontSize: 11,
    fontStyle: 'italic',
  },
  successOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(15, 23, 42, 0.96)',
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
    color: '#60A5FA',
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
    backgroundColor: '#1E3A8A',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: BORDER_RADIUS.full,
    borderWidth: 1,
    borderColor: '#60A5FA',
    marginBottom: SPACING.lg,
  },
  rewardText: {
    color: '#FDE68A',
    fontSize: 15,
    fontWeight: '800',
  },
  claimBtn: {
    backgroundColor: '#3B82F6',
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: BORDER_RADIUS.xl,
    borderWidth: 1,
    borderColor: '#60A5FA',
  },
  claimBtnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '900',
  },
});
