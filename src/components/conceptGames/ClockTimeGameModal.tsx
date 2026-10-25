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
import { SpeakerButton } from '../common/SpeakerButton';
import { stopSpeaking } from '../../utils/speech';

const { width } = Dimensions.get('window');

interface ClockTimeGameModalProps {
  visible: boolean;
  onClose: () => void;
  activeLang?: string;
}

interface ClockLevel {
  id: number;
  prompt: string;
  hindiPrompt: string;
  targetHour: number;
  targetMinute: number;
  dayPeriod: 'morning' | 'afternoon' | 'evening' | 'night';
  contextEmoji: string;
  parentNote: string;
}

const CLOCK_LEVELS: ClockLevel[] = [
  {
    id: 1,
    prompt: 'Set the Clock to 3:00 (O\'Clock)!',
    hindiPrompt: 'घड़ी में ठीक 3:00 बजाएं!',
    targetHour: 3,
    targetMinute: 0,
    dayPeriod: 'afternoon',
    contextEmoji: '🕒',
    parentNote: 'At O\'Clock times, the long minute hand points straight up at 12.',
  },
  {
    id: 2,
    prompt: 'School Bus Time: 7:00 AM!',
    hindiPrompt: 'सुबह 7:00 बजे स्कूल बस आती है — घड़ी सेट करें!',
    targetHour: 7,
    targetMinute: 0,
    dayPeriod: 'morning',
    contextEmoji: '🚌',
    parentNote: 'Morning routine association helps children understand real-world time necessity.',
  },
  {
    id: 3,
    prompt: 'Lunch Time: Set clock to 12:00 (Noon)!',
    hindiPrompt: 'दोपहर 12:00 बजे लंच टाइम — दोनों सुइयां 12 पर लाएं!',
    targetHour: 12,
    targetMinute: 0,
    dayPeriod: 'afternoon',
    contextEmoji: '🍱',
    parentNote: 'At 12:00, both hour and minute hands overlap pointing up.',
  },
  {
    id: 4,
    prompt: 'Park Play Time: 4:30 (Half-Past 4)!',
    hindiPrompt: 'साढ़े चार (4:30) बजाएं — मिनट की सुई 6 पर जाएगी!',
    targetHour: 4,
    targetMinute: 30,
    dayPeriod: 'evening',
    contextEmoji: '⚽',
    parentNote: 'Half-past means 30 minutes have passed; minute hand is halfway at 6.',
  },
  {
    id: 5,
    prompt: 'Dinner & Sunset Time: 6:30 PM!',
    hindiPrompt: 'शाम के 6:30 (साढ़े छः) बजाएं!',
    targetHour: 6,
    targetMinute: 30,
    dayPeriod: 'evening',
    contextEmoji: '🌅',
    parentNote: 'Hour hand sits halfway between 6 and 7 during half-past.',
  },
  {
    id: 6,
    prompt: 'Bedtime & Good Night: 9:00 PM!',
    hindiPrompt: 'रात के 9:00 बजे सोने का समय — 9:00 बजाएं!',
    targetHour: 9,
    targetMinute: 0,
    dayPeriod: 'night',
    contextEmoji: '🛌',
    parentNote: 'Connecting bedtime with the 9 o\'clock angle.',
  },
  {
    id: 7,
    prompt: 'Drawing Class: 2:15 (Quarter Past 2)!',
    hindiPrompt: 'सवा दो (2:15) बजाएं — मिनट की सुई 3 पर!',
    targetHour: 2,
    targetMinute: 15,
    dayPeriod: 'afternoon',
    contextEmoji: '🎨',
    parentNote: 'Quarter past (15 minutes) represents 1/4 of a full circle turn.',
  },
  {
    id: 8,
    prompt: 'Story Time Master: 8:30 PM!',
    hindiPrompt: 'रात 8:30 (साढ़े आठ) बजाकर मास्टर घड़ी पदक जीतें!',
    targetHour: 8,
    targetMinute: 30,
    dayPeriod: 'night',
    contextEmoji: '📖',
    parentNote: 'Combines full routine mastery with analog-digital conversion.',
  },
];

export const ClockTimeGameModal: React.FC<ClockTimeGameModalProps> = ({
  visible,
  onClose,
  activeLang,
}) => {
  const { addReward, profile } = useUserStore();
  const isHindi = (activeLang || profile.preferredLanguage) === 'hi';
  const [levelIndex, setLevelIndex] = useState(0);
  const [currentHour, setCurrentHour] = useState(12);
  const [currentMinute, setCurrentMinute] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [showParentInfo, setShowParentInfo] = useState(false);

  const currentLevel = CLOCK_LEVELS[levelIndex] || CLOCK_LEVELS[0];

  useEffect(() => {
    if (!visible) return;
    stopSpeaking();
    setLevelIndex(0);
    setCurrentHour(12);
    setCurrentMinute(0);
    setIsSuccess(false);
    setIsFinished(false);
    setShowParentInfo(false);
  }, [visible]);

  useEffect(() => {
    if (!visible) return;
    stopSpeaking();
  }, [levelIndex]);

  const adjustHour = (delta: number) => {
    soundManager.playPop();
    triggerHaptic('light');
    setCurrentHour((prev) => {
      let next = prev + delta;
      if (next > 12) next = 1;
      if (next < 1) next = 12;
      return next;
    });
  };

  const adjustMinute = (delta: number) => {
    soundManager.playPop();
    triggerHaptic('light');
    setCurrentMinute((prev) => {
      let next = prev + delta;
      if (next >= 60) next = 0;
      if (next < 0) next = 45;
      return next;
    });
  };

  const handleCheckTime = () => {
    const isHourMatch = currentHour === currentLevel.targetHour;
    const isMinMatch = currentMinute === currentLevel.targetMinute;

    if (isHourMatch && isMinMatch) {
      setIsSuccess(true);
      soundManager.playBell();
      triggerHaptic('success');

      setTimeout(() => {
        if (levelIndex + 1 < CLOCK_LEVELS.length) {
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

  // Convert hour & min to rotational degrees for hands
  // Hour hand: 30 deg per hour + 0.5 deg per minute
  const hourDeg = (currentHour % 12) * 30 + currentMinute * 0.5;
  // Minute hand: 6 deg per minute
  const minDeg = currentMinute * 6;

  const formattedDigital = `${currentHour}:${currentMinute.toString().padStart(2, '0')}`;
  const targetFormatted = `${currentLevel.targetHour}:${currentLevel.targetMinute.toString().padStart(2, '0')}`;

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={handleClose}>
      <View style={styles.overlay}>
        <View style={styles.card}>
          {/* Header */}
          <View style={styles.header}>
            <View>
              <Text style={styles.title}>{isHindi ? '🕒 समय और घड़ी लैब' : '🕒 Tick-Tock Clock Lab'}</Text>
              <Text style={styles.sub}>
                Level {levelIndex + 1} of {CLOCK_LEVELS.length} • NCERT Class 1-2
              </Text>
            </View>
            <View style={styles.topRightRow}>
              <TouchableOpacity
                style={styles.infoPill}
                onPress={() => setShowParentInfo((v) => !v)}
              >
                <Text style={styles.infoPillText}>{isHindi ? '👨‍🏫 अभिभावक' : '👨‍🏫 Parents'}</Text>
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

          {/* Mission Target Banner with Speaker Button */}
          <View style={styles.missionBanner}>
            <View style={styles.missionTextCol}>
              <Text style={styles.missionPrompt}>
                {currentLevel.contextEmoji} {currentLevel.prompt}
              </Text>
              {isHindi && <Text style={styles.missionHindi}>{currentLevel.hindiPrompt}</Text>}
            </View>
            <SpeakerButton
              textToSpeak={isHindi ? currentLevel.hindiPrompt : currentLevel.prompt}
              size="pill"
              showLabel
              activeLang={isHindi ? 'hi' : 'en'}
              style={styles.speakerPill}
            />
          </View>

          {/* Clock Apparatus */}
          <View style={styles.clockStage}>
            {/* Clock Face Circle */}
            <View style={[styles.clockCircle, isSuccess && styles.clockCircleSuccess]}>
              {/* Hour Numbers on Dial */}
              <Text style={[styles.dialNum, styles.num12]}>12</Text>
              <Text style={[styles.dialNum, styles.num3]}>3</Text>
              <Text style={[styles.dialNum, styles.num6]}>6</Text>
              <Text style={[styles.dialNum, styles.num9]}>9</Text>

              {/* Hour Hand (Thick, Shorter) */}
              <View
                style={[
                  styles.handHour,
                  {
                    transform: [
                      { rotate: `${hourDeg}deg` },
                      { translateY: -28 },
                    ],
                  },
                ]}
              />

              {/* Minute Hand (Longer, Thinner, Cyan) */}
              <View
                style={[
                  styles.handMinute,
                  {
                    transform: [
                      { rotate: `${minDeg}deg` },
                      { translateY: -40 },
                    ],
                  },
                ]}
              />

              {/* Center Pin */}
              <View style={styles.centerPin} />
            </View>

            {/* Live Digital Display Pill */}
            <View style={styles.digitalPill}>
              <Text style={styles.digitalLabel}>Your Clock:</Text>
              <Text style={styles.digitalTime}>{formattedDigital}</Text>
              <Text style={styles.digitalTarget}>Target: {targetFormatted}</Text>
            </View>
          </View>

          {/* Stepper Hand Controls */}
          <View style={styles.controlsGrid}>
            <View style={styles.controlCol}>
              <Text style={styles.controlHeader}>Hour Hand:</Text>
              <View style={styles.stepperRow}>
                <TouchableOpacity
                  style={styles.stepperBtn}
                  onPress={() => adjustHour(-1)}
                >
                  <Text style={styles.stepperBtnText}>-1 Hr</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.stepperBtn}
                  onPress={() => adjustHour(1)}
                >
                  <Text style={styles.stepperBtnText}>+1 Hr</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.controlCol}>
              <Text style={styles.controlHeader}>Minute Hand:</Text>
              <View style={styles.stepperRow}>
                <TouchableOpacity
                  style={styles.stepperBtn}
                  onPress={() => adjustMinute(-15)}
                >
                  <Text style={styles.stepperBtnText}>-15m</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.stepperBtn}
                  onPress={() => adjustMinute(15)}
                >
                  <Text style={styles.stepperBtnText}>+15m</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Check Time Button */}
          <TouchableOpacity
            style={[styles.checkBtn, isSuccess && styles.checkBtnSuccess]}
            onPress={handleCheckTime}
            activeOpacity={0.8}
          >
            <Text style={styles.checkBtnText}>
              {isSuccess ? 'PERFECT TIME MATCH! 🎉' : 'Lock & Check Time ⏰'}
            </Text>
          </TouchableOpacity>

          {/* Footer note */}
          <View style={styles.footerBar}>
            <Text style={styles.footerNote}>
              ✨ Rotational angle to daily routine synchronization
            </Text>
          </View>

          {/* Finished Celebration Modal */}
          {isFinished && (
            <View style={styles.successOverlay}>
              <View style={styles.successBox}>
                <Text style={styles.successEmoji}>⏰</Text>
                <Text style={styles.successTitle}>Time Master Champ!</Text>
                <Text style={styles.successDesc}>
                  Aapne analog ghadi dekhna aur time match karna seekh liya!
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
    backgroundColor: '#083344',
    borderRadius: BORDER_RADIUS.xl,
    padding: SPACING.lg,
    borderWidth: 2,
    borderColor: '#06B6D4',
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
    backgroundColor: '#164E63',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: BORDER_RADIUS.full,
    borderWidth: 1,
    borderColor: '#22D3EE',
  },
  infoPillText: {
    color: '#A5F3FC',
    fontSize: 12,
    fontWeight: '700',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '800',
  },
  sub: {
    color: '#A5F3FC',
    fontSize: 12,
    fontWeight: '600',
  },
  closeBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#164E63',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  parentBox: {
    backgroundColor: '#042F2E',
    borderRadius: BORDER_RADIUS.md,
    padding: 10,
    marginBottom: SPACING.sm,
    borderLeftWidth: 3,
    borderLeftColor: '#06B6D4',
  },
  parentTitle: {
    color: '#22D3EE',
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#164E63',
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.sm,
    marginBottom: SPACING.sm,
    borderWidth: 1.5,
    borderColor: '#06B6D4',
    gap: 8,
  },
  missionTextCol: {
    flex: 1,
  },
  missionPrompt: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '800',
  },
  missionHindi: {
    color: '#CFFAFE',
    fontSize: 13,
    fontWeight: '600',
    marginTop: 2,
  },
  speakerPill: {
    backgroundColor: '#0E7490',
    borderColor: '#22D3EE',
  },
  clockStage: {
    alignItems: 'center',
    marginVertical: SPACING.sm,
  },
  clockCircle: {
    width: 170,
    height: 170,
    borderRadius: 85,
    backgroundColor: '#0E7490',
    borderWidth: 5,
    borderColor: '#22D3EE',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    ...SHADOWS.md,
  },
  clockCircleSuccess: {
    borderColor: '#10B981',
    backgroundColor: '#047857',
  },
  dialNum: {
    position: 'absolute',
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '900',
  },
  num12: { top: 6 },
  num3: { right: 8 },
  num6: { bottom: 6 },
  num9: { left: 8 },
  handHour: {
    position: 'absolute',
    width: 6,
    height: 56,
    backgroundColor: '#FDE68A',
    borderRadius: 3,
  },
  handMinute: {
    position: 'absolute',
    width: 4,
    height: 80,
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
  },
  centerPin: {
    position: 'absolute',
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#EF4444',
  },
  digitalPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#164E63',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: BORDER_RADIUS.full,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#22D3EE',
  },
  digitalLabel: {
    color: '#A5F3FC',
    fontSize: 12,
    fontWeight: '700',
  },
  digitalTime: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '900',
  },
  digitalTarget: {
    color: '#FDE68A',
    fontSize: 12,
    fontWeight: '700',
  },
  controlsGrid: {
    flexDirection: 'row',
    gap: 10,
    marginVertical: SPACING.sm,
  },
  controlCol: {
    flex: 1,
    backgroundColor: '#164E63',
    borderRadius: BORDER_RADIUS.md,
    padding: 8,
    borderWidth: 1,
    borderColor: '#0E7490',
  },
  controlHeader: {
    color: '#A5F3FC',
    fontSize: 11,
    fontWeight: '700',
    marginBottom: 6,
    textAlign: 'center',
  },
  stepperRow: {
    flexDirection: 'row',
    gap: 6,
  },
  stepperBtn: {
    flex: 1,
    backgroundColor: '#0891B2',
    paddingVertical: 8,
    borderRadius: BORDER_RADIUS.md,
    alignItems: 'center',
  },
  stepperBtnText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '800',
  },
  checkBtn: {
    backgroundColor: '#06B6D4',
    paddingVertical: 13,
    borderRadius: BORDER_RADIUS.lg,
    alignItems: 'center',
    marginVertical: SPACING.xs,
  },
  checkBtnSuccess: {
    backgroundColor: '#10B981',
  },
  checkBtnText: {
    color: '#083344',
    fontSize: 15,
    fontWeight: '900',
  },
  footerBar: {
    alignItems: 'center',
    marginTop: SPACING.xs,
  },
  footerNote: {
    color: '#67E8F9',
    fontSize: 11,
    fontStyle: 'italic',
  },
  successOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(8, 51, 68, 0.96)',
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
    color: '#A5F3FC',
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
    backgroundColor: '#164E63',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: BORDER_RADIUS.full,
    borderWidth: 1,
    borderColor: '#22D3EE',
    marginBottom: SPACING.lg,
  },
  rewardText: {
    color: '#FDE68A',
    fontSize: 15,
    fontWeight: '800',
  },
  claimBtn: {
    backgroundColor: '#06B6D4',
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: BORDER_RADIUS.xl,
    borderWidth: 1,
    borderColor: '#22D3EE',
  },
  claimBtnText: {
    color: '#083344',
    fontSize: 16,
    fontWeight: '900',
  },
});
