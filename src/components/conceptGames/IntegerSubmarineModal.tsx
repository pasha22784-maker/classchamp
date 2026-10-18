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

interface IntegerSubmarineModalProps {
  visible: boolean;
  onClose: () => void;
}

interface IntegerLevel {
  id: number;
  prompt: string;
  hindiPrompt: string;
  targetDepth: number; // e.g. -5, -2, -8
  scenario: string;
  parentNote: string;
}

const INTEGER_LEVELS: IntegerLevel[] = [
  {
    id: 1,
    prompt: 'Dive to 5 meters below sea level (-5m)!',
    hindiPrompt: 'पनडुब्बी को समुद्र तल से 5 मीटर नीचे (-5m) ले जाएं!',
    targetDepth: -5,
    scenario: 'Sea level is 0m. Below sea level is negative (-).',
    parentNote: 'Negative integers represent values below the zero datum line (sea level).',
  },
  {
    id: 2,
    prompt: 'At -5m, ascend (rise up) 3 meters! (-5 + 3 = ?)',
    hindiPrompt: '-5m से 3 मीटर ऊपर आएं (-5 + 3 = -2m)!',
    targetDepth: -2,
    scenario: 'Adding positive numbers moves UP towards sea level.',
    parentNote: 'Adding a positive to a negative integer reduces the negative distance.',
  },
  {
    id: 3,
    prompt: 'At -2m, dive 6 meters deeper! (-2 - 6 = ?)',
    hindiPrompt: '-2m से 6 मीटर और गहरा गोता लगाएं (-2 - 6 = -8m)!',
    targetDepth: -8,
    scenario: 'Subtracting moves further DOWN into deep negatives.',
    parentNote: 'Subtracting a positive moves further away from zero into negative values.',
  },
  {
    id: 4,
    prompt: 'Freezer temperature dropped from 0°C to -4°C!',
    hindiPrompt: 'फ्रीज़र का तापमान -4°C सेट करें!',
    targetDepth: -4,
    scenario: 'Freezing point of water is 0°C. Ice cubes form in the negatives.',
    parentNote: 'Connecting depth with thermometer Celsius scale.',
  },
  {
    id: 5,
    prompt: 'Deep Trench Dive: Navigate to -10 meters!',
    hindiPrompt: 'गहरी खाई (-10m) में जाएं!',
    targetDepth: -10,
    scenario: 'Notice that -10 is LESS than -5 (it is deeper down).',
    parentNote: 'Crucial concept: -10 < -5. Numbers with larger absolute negative values are smaller.',
  },
  {
    id: 6,
    prompt: 'Rescue Mission: Ascend 7 meters from -10m! (-10 + 7 = ?)',
    hindiPrompt: '-10m से 7 मीटर ऊपर तैरें (-10 + 7 = -3m)!',
    targetDepth: -3,
    scenario: '-10 + 7 leaves us at -3m.',
    parentNote: 'Mental arithmetic on the vertical integer number line.',
  },
  {
    id: 7,
    prompt: 'Submarine surfaces to Sea Level (0 meters)!',
    hindiPrompt: 'पनडुब्बी को बिल्कुल समुद्र तल (0m) पर लाएं!',
    targetDepth: 0,
    scenario: '0 is neither positive nor negative; it is the origin.',
    parentNote: 'Zero is the neutral origin dividing positive and negative numbers.',
  },
  {
    id: 8,
    prompt: 'Abyssal Zone: Dive straight to -12 meters!',
    hindiPrompt: 'गहरे समुद्र में -12 मीटर तक गोता लगाएं!',
    targetDepth: -12,
    scenario: 'Extreme negative zone exploration.',
    parentNote: 'Building confidence navigating multi-unit jumps.',
  },
  {
    id: 9,
    prompt: 'Quick Rise: Ascend 6 meters from -12m! (-12 + 6 = ?)',
    hindiPrompt: '-12m से 6 मीटर ऊपर उठें (-12 + 6 = -6m)!',
    targetDepth: -6,
    scenario: 'Halfway back to the surface.',
    parentNote: 'Recognizing additive inverses and symmetrical halfway points.',
  },
  {
    id: 10,
    prompt: 'Master Oceanographer: Reach -7 meters with exact balance!',
    hindiPrompt: '-7 मीटर पर सटीक संतुलन बनाकर मास्टर सबमरीन पदक जीतें!',
    targetDepth: -7,
    scenario: 'Complete underwater expedition challenge.',
    parentNote: 'Complete mastery of positive and negative integers in physical space.',
  },
];

export const IntegerSubmarineModal: React.FC<IntegerSubmarineModalProps> = ({
  visible,
  onClose,
}) => {
  const { addReward } = useUserStore();
  const [levelIndex, setLevelIndex] = useState(0);
  const [currentDepth, setCurrentDepth] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [showParentInfo, setShowParentInfo] = useState(false);

  const subPosition = useRef(new Animated.Value(0)).current;
  const currentLevel = INTEGER_LEVELS[levelIndex] || INTEGER_LEVELS[0];

  useEffect(() => {
    if (!visible) return;
    setLevelIndex(0);
    setCurrentDepth(0);
    setIsSuccess(false);
    setIsFinished(false);
    setShowParentInfo(false);
    subPosition.setValue(0);
  }, [visible]);

  const adjustDepth = (delta: number) => {
    soundManager.playPop();
    triggerHaptic('light');

    const next = Math.max(-15, Math.min(2, currentDepth + delta));
    setCurrentDepth(next);

    // Animate submarine Y position: depth goes from 0 down to -15
    // Map -15 to +110 translateY
    const targetY = -next * 7;
    Animated.spring(subPosition, {
      toValue: targetY,
      friction: 5,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  const handleVerifyDepth = () => {
    if (currentDepth === currentLevel.targetDepth) {
      setIsSuccess(true);
      soundManager.playBell();
      triggerHaptic('success');

      setTimeout(() => {
        if (levelIndex + 1 < INTEGER_LEVELS.length) {
          setLevelIndex((prev) => prev + 1);
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
              <Text style={styles.title}>❄️ Integer Submarine Lab</Text>
              <Text style={styles.sub}>
                Level {levelIndex + 1} of {INTEGER_LEVELS.length} • NCERT Class 6
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

          {/* Submarine Ocean Stage */}
          <View style={styles.oceanStage}>
            {/* Sea Level Line (0m) */}
            <View style={styles.seaLevelMarker}>
              <Text style={styles.seaLevelTag}>🌊 SEA LEVEL: 0 m</Text>
            </View>

            {/* Depth markings */}
            <View style={styles.depthAxis}>
              <Text style={styles.depthMark}>+2m (Air)</Text>
              <Text style={styles.depthMark}>0m</Text>
              <Text style={styles.depthMark}>-5m</Text>
              <Text style={styles.depthMark}>-10m</Text>
              <Text style={styles.depthMark}>-15m (Deep)</Text>
            </View>

            {/* Animated Submarine */}
            <Animated.View
              style={[
                styles.subBox,
                { transform: [{ translateY: subPosition }] },
                isSuccess && styles.subBoxSuccess,
              ]}
            >
              <Text style={styles.subEmoji}>🚤</Text>
              <View style={styles.subPill}>
                <Text style={styles.subPillText}>{currentDepth} m</Text>
              </View>
            </Animated.View>

            {/* Target Depth Flag */}
            <View style={styles.targetFlagRow}>
              <Text style={styles.targetFlagLabel}>Target Depth: {currentLevel.targetDepth} m</Text>
            </View>
          </View>

          {/* Stepper Controls: Rise / Dive */}
          <View style={styles.controlsRow}>
            <View style={styles.controlGroup}>
              <Text style={styles.controlTitle}>Ascend (+ Rise):</Text>
              <View style={styles.btnPair}>
                <TouchableOpacity style={styles.diveBtn} onPress={() => adjustDepth(1)}>
                  <Text style={styles.diveBtnText}>+1 m ⬆️</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.diveBtn} onPress={() => adjustDepth(3)}>
                  <Text style={styles.diveBtnText}>+3 m ⬆️</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.controlGroup}>
              <Text style={styles.controlTitle}>Dive (- Deep):</Text>
              <View style={styles.btnPair}>
                <TouchableOpacity style={[styles.diveBtn, styles.diveDeep]} onPress={() => adjustDepth(-1)}>
                  <Text style={styles.diveBtnText}>-1 m ⬇️</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.diveBtn, styles.diveDeep]} onPress={() => adjustDepth(-3)}>
                  <Text style={styles.diveBtnText}>-3 m ⬇️</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Verify Depth Button */}
          <TouchableOpacity
            style={[styles.verifyBtn, currentDepth === currentLevel.targetDepth && styles.verifyBtnReady]}
            onPress={handleVerifyDepth}
            activeOpacity={0.8}
          >
            <Text style={styles.verifyBtnText}>
              {isSuccess ? 'TARGET DEPTH LOCKED! 🎉' : 'Lock Submarine Depth ⚓'}
            </Text>
          </TouchableOpacity>

          {/* Footer note */}
          <View style={styles.footerBar}>
            <Text style={styles.footerNote}>
              ✨ Physical elevation datum line for negative integers
            </Text>
          </View>

          {/* Finished Celebration Modal */}
          {isFinished && (
            <View style={styles.successOverlay}>
              <View style={styles.successBox}>
                <Text style={styles.successEmoji}>🔱</Text>
                <Text style={styles.successTitle}>Master Oceanographer!</Text>
                <Text style={styles.successDesc}>
                  Aapne Positive aur Negative Integers ki depth navigation master kar li!
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
    fontSize: 14,
    fontWeight: '800',
    textAlign: 'center',
  },
  missionHindi: {
    color: '#93C5FD',
    fontSize: 12,
    fontWeight: '600',
    marginTop: 2,
    textAlign: 'center',
  },
  oceanStage: {
    height: 180,
    backgroundColor: '#020617',
    borderRadius: BORDER_RADIUS.lg,
    borderWidth: 1,
    borderColor: '#1E3A8A',
    padding: SPACING.sm,
    position: 'relative',
    overflow: 'hidden',
  },
  seaLevelMarker: {
    position: 'absolute',
    top: 24,
    left: 0,
    right: 0,
    borderBottomWidth: 2,
    borderBottomColor: '#38BDF8',
    paddingHorizontal: 8,
  },
  seaLevelTag: {
    color: '#38BDF8',
    fontSize: 10,
    fontWeight: '800',
  },
  depthAxis: {
    position: 'absolute',
    left: 8,
    top: 6,
    bottom: 6,
    justifyContent: 'space-between',
  },
  depthMark: {
    color: '#64748B',
    fontSize: 9,
    fontWeight: '700',
  },
  subBox: {
    position: 'absolute',
    left: '42%',
    top: 20,
    alignItems: 'center',
  },
  subBoxSuccess: {
    transform: [{ scale: 1.15 }],
  },
  subEmoji: {
    fontSize: 34,
  },
  subPill: {
    backgroundColor: '#1E3A8A',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#60A5FA',
    marginTop: 2,
  },
  subPillText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '900',
  },
  targetFlagRow: {
    position: 'absolute',
    bottom: 6,
    right: 8,
    backgroundColor: '#1E293B',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  targetFlagLabel: {
    color: '#FDE68A',
    fontSize: 11,
    fontWeight: '800',
  },
  controlsRow: {
    flexDirection: 'row',
    gap: 10,
    marginVertical: SPACING.xs,
  },
  controlGroup: {
    flex: 1,
    backgroundColor: '#1E293B',
    borderRadius: BORDER_RADIUS.md,
    padding: 8,
    alignItems: 'center',
  },
  controlTitle: {
    color: '#93C5FD',
    fontSize: 11,
    fontWeight: '700',
    marginBottom: 6,
  },
  btnPair: {
    flexDirection: 'row',
    gap: 6,
    width: '100%',
  },
  diveBtn: {
    flex: 1,
    backgroundColor: '#2563EB',
    paddingVertical: 8,
    borderRadius: BORDER_RADIUS.md,
    alignItems: 'center',
  },
  diveDeep: {
    backgroundColor: '#1D4ED8',
  },
  diveBtnText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '800',
  },
  verifyBtn: {
    backgroundColor: '#1E3A8A',
    paddingVertical: 13,
    borderRadius: BORDER_RADIUS.lg,
    alignItems: 'center',
    marginTop: 6,
    borderWidth: 1,
    borderColor: '#3B82F6',
  },
  verifyBtnReady: {
    backgroundColor: '#10B981',
    borderColor: '#34D399',
  },
  verifyBtnText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '900',
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
