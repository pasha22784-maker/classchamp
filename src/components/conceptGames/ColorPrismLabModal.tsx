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

interface ColorPrismLabModalProps {
  visible: boolean;
  onClose: () => void;
}

interface ColorLevel {
  id: number;
  prompt: string;
  hindiPrompt: string;
  requiredColors: string[];
  targetResultColor: string;
  targetResultName: string;
  targetResultHex: string;
  parentNote: string;
}

const COLOR_LEVELS: ColorLevel[] = [
  {
    id: 1,
    prompt: 'Mix Red 🔴 and Yellow 🟡 drops in the beaker!',
    hindiPrompt: 'लाल और पीला रंग मिलाने पर कौन सा नया रंग बनेगा?',
    requiredColors: ['red', 'yellow'],
    targetResultColor: 'orange',
    targetResultName: 'Orange (नारंगी)',
    targetResultHex: '#F97316',
    parentNote: 'Primary colors (Red + Yellow) combine optical wavelengths to produce Orange.',
  },
  {
    id: 2,
    prompt: 'Mix Blue 🔵 and Yellow 🟡 drops!',
    hindiPrompt: 'नीला और पीला रंग मिलाने पर प्रकृति का हरा रंग बनता है!',
    requiredColors: ['blue', 'yellow'],
    targetResultColor: 'green',
    targetResultName: 'Green (हरा)',
    targetResultHex: '#10B981',
    parentNote: 'Blue absorbs red wavelengths, Yellow absorbs blue wavelengths, leaving Green visible.',
  },
  {
    id: 3,
    prompt: 'Mix Red 🔴 and Blue 🔵 drops!',
    hindiPrompt: 'लाल और नीला रंग मिलाकर शाही बैंगनी (Purple) बनाएं!',
    requiredColors: ['red', 'blue'],
    targetResultColor: 'purple',
    targetResultName: 'Purple (बैंगनी)',
    targetResultHex: '#8B5CF6',
    parentNote: 'Red (long wavelength) and Blue (short wavelength) synthesize violet/purple light.',
  },
  {
    id: 4,
    prompt: 'Mix Red 🔴 + Blue 🔵 + Yellow 🟡: All Three Primary Colors!',
    hindiPrompt: 'तीनों प्राथमिक रंग मिलाने पर कौन सा रंग बनता है?',
    requiredColors: ['red', 'blue', 'yellow'],
    targetResultColor: 'brown',
    targetResultName: 'Deep Brown / Charcoal (भूरा)',
    targetResultHex: '#78350F',
    parentNote: 'Subtractive pigment mixing of all primary colors absorbs all light, creating dark brown.',
  },
  {
    id: 5,
    prompt: 'Prism Optics: Shine White Flashlight 🔦 through the Glass Prism 📐!',
    hindiPrompt: 'कांच के प्रिज्म से श्वेत प्रकाश गुजारकर इंद्रधनुष के 7 रंग बनाएं!',
    requiredColors: ['white'],
    targetResultColor: 'rainbow',
    targetResultName: 'Rainbow Spectrum (VIBGYOR 🌈)',
    targetResultHex: '#EC4899',
    parentNote: 'Isaac Newton discovery: White sunlight is composed of all 7 spectrum colors separated by refraction.',
  },
  {
    id: 6,
    prompt: 'Re-Mix Green: Select Blue 🔵 and Yellow 🟡!',
    hindiPrompt: 'हरा रंग बनाने के लिए सही दो रंग बीकर में डालें!',
    requiredColors: ['blue', 'yellow'],
    targetResultColor: 'green',
    targetResultName: 'Emerald Green (हरा)',
    targetResultHex: '#059669',
    parentNote: 'Reinforces secondary color synthesis.',
  },
  {
    id: 7,
    prompt: 'Re-Mix Orange: Select Red 🔴 and Yellow 🟡!',
    hindiPrompt: 'सूर्योदय का नारंगी रंग बनाने के लिए 2 रंग चुनें!',
    requiredColors: ['red', 'yellow'],
    targetResultColor: 'orange',
    targetResultName: 'Sunset Orange (नारंगी)',
    targetResultHex: '#EA580C',
    parentNote: 'Warm color temperature classification.',
  },
  {
    id: 8,
    prompt: 'Master Optics Scientist: Full Rainbow Prism Lock 🌈!',
    hindiPrompt: 'प्रिज्म स्पेक्ट्रम सक्रिय करके मास्टर ऑप्टिक्स पदक जीतें!',
    requiredColors: ['white'],
    targetResultColor: 'rainbow',
    targetResultName: 'Pure Rainbow Spectrum (VIBGYOR)',
    targetResultHex: '#3B82F6',
    parentNote: 'Complete sensory mastery of color theory and prism light dispersion.',
  },
];

export const ColorPrismLabModal: React.FC<ColorPrismLabModalProps> = ({
  visible,
  onClose,
}) => {
  const { addReward } = useUserStore();
  const [levelIndex, setLevelIndex] = useState(0);
  const [selectedDrops, setSelectedDrops] = useState<string[]>([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [showParentInfo, setShowParentInfo] = useState(false);

  const currentLevel = COLOR_LEVELS[levelIndex] || COLOR_LEVELS[0];

  useEffect(() => {
    if (!visible) return;
    setLevelIndex(0);
    setSelectedDrops([]);
    setIsSuccess(false);
    setIsFinished(false);
    setShowParentInfo(false);
  }, [visible]);

  const toggleDrop = (color: string) => {
    if (isSuccess) return;

    soundManager.playPop();
    triggerHaptic('light');

    let updated: string[];
    if (selectedDrops.includes(color)) {
      updated = selectedDrops.filter((c) => c !== color);
    } else {
      updated = [...selectedDrops, color];
    }
    setSelectedDrops(updated);

    // Check if selected matches required
    const isMatch =
      updated.length === currentLevel.requiredColors.length &&
      currentLevel.requiredColors.every((c) => updated.includes(c));

    if (isMatch) {
      setIsSuccess(true);
      soundManager.playBell();
      triggerHaptic('success');

      setTimeout(() => {
        if (levelIndex + 1 < COLOR_LEVELS.length) {
          setLevelIndex((prev) => prev + 1);
          setSelectedDrops([]);
          setIsSuccess(false);
        } else {
          setIsFinished(true);
          soundManager.playFanfare();
        }
      }, 1600);
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
              <Text style={styles.title}>🌈 Color Optics & Prism Lab</Text>
              <Text style={styles.sub}>
                Experiment {levelIndex + 1} of {COLOR_LEVELS.length} • NCERT Science
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

          {/* Beaker & Prism Stage */}
          <View style={styles.stage}>
            {/* Beaker / Prism View */}
            <View
              style={[
                styles.beakerBox,
                isSuccess && {
                  backgroundColor: currentLevel.targetResultHex,
                  borderColor: '#FFFFFF',
                },
              ]}
            >
              <Text style={styles.beakerEmoji}>
                {isSuccess ? '✨' : currentLevel.targetResultColor === 'rainbow' ? '📐' : '🧪'}
              </Text>
              <Text style={styles.beakerLabel}>
                {isSuccess ? currentLevel.targetResultName : 'Tap colors to mix in beaker'}
              </Text>
              {isSuccess && currentLevel.targetResultColor === 'rainbow' && (
                <Text style={styles.rainbowText}>🟣 🔵 🟢 🟡 🟠 🔴</Text>
              )}
            </View>
          </View>

          {/* Color Dropper Trays */}
          <View style={styles.dropperRow}>
            {currentLevel.requiredColors.includes('white') ? (
              <TouchableOpacity
                style={[
                  styles.dropperBtn,
                  { backgroundColor: '#334155', borderColor: '#FFFFFF' },
                  selectedDrops.includes('white') && styles.dropperBtnActive,
                ]}
                onPress={() => toggleDrop('white')}
                activeOpacity={0.8}
              >
                <Text style={styles.dropEmoji}>🔦</Text>
                <Text style={styles.dropLabel}>White Flashlight</Text>
              </TouchableOpacity>
            ) : (
              <>
                <TouchableOpacity
                  style={[
                    styles.dropperBtn,
                    { backgroundColor: '#7F1D1D', borderColor: '#EF4444' },
                    selectedDrops.includes('red') && styles.dropperBtnActive,
                  ]}
                  onPress={() => toggleDrop('red')}
                  activeOpacity={0.8}
                >
                  <Text style={styles.dropEmoji}>🔴</Text>
                  <Text style={styles.dropLabel}>Red Drop</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.dropperBtn,
                    { backgroundColor: '#713F12', borderColor: '#EAB308' },
                    selectedDrops.includes('yellow') && styles.dropperBtnActive,
                  ]}
                  onPress={() => toggleDrop('yellow')}
                  activeOpacity={0.8}
                >
                  <Text style={styles.dropEmoji}>🟡</Text>
                  <Text style={styles.dropLabel}>Yellow Drop</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.dropperBtn,
                    { backgroundColor: '#1E3A8A', borderColor: '#3B82F6' },
                    selectedDrops.includes('blue') && styles.dropperBtnActive,
                  ]}
                  onPress={() => toggleDrop('blue')}
                  activeOpacity={0.8}
                >
                  <Text style={styles.dropEmoji}>🔵</Text>
                  <Text style={styles.dropLabel}>Blue Drop</Text>
                </TouchableOpacity>
              </>
            )}
          </View>

          {/* Footer note */}
          <View style={styles.footerBar}>
            <Text style={styles.footerNote}>
              ✨ Sensory color theory and optical wavelength dispersion
            </Text>
          </View>

          {/* Finished Celebration Modal */}
          {isFinished && (
            <View style={styles.successOverlay}>
              <View style={styles.successBox}>
                <Text style={styles.successEmoji}>🌈</Text>
                <Text style={styles.successTitle}>Master Optics Scientist!</Text>
                <Text style={styles.successDesc}>
                  Aapne Primary color mixing aur Prism Rainbow dispersion ke saare 8 experiments complete kar liye!
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
    borderColor: '#EC4899',
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
    backgroundColor: '#831843',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: BORDER_RADIUS.full,
    borderWidth: 1,
    borderColor: '#F472B6',
  },
  infoPillText: {
    color: '#FCE7F3',
    fontSize: 12,
    fontWeight: '700',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '800',
  },
  sub: {
    color: '#F472B6',
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
    borderLeftColor: '#EC4899',
  },
  parentTitle: {
    color: '#F472B6',
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
    backgroundColor: '#831843',
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.sm,
    alignItems: 'center',
    marginBottom: SPACING.sm,
    borderWidth: 1,
    borderColor: '#EC4899',
  },
  missionPrompt: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
    textAlign: 'center',
  },
  missionHindi: {
    color: '#FCE7F3',
    fontSize: 12,
    fontWeight: '600',
    marginTop: 2,
    textAlign: 'center',
  },
  stage: {
    height: 160,
    backgroundColor: '#020617',
    borderRadius: BORDER_RADIUS.lg,
    borderWidth: 1,
    borderColor: '#1E293B',
    alignItems: 'center',
    justifyContent: 'center',
    padding: SPACING.sm,
    marginVertical: SPACING.xs,
  },
  beakerBox: {
    width: 140,
    height: 130,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#475569',
    backgroundColor: '#1E293B',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  beakerEmoji: {
    fontSize: 36,
    marginBottom: 4,
  },
  beakerLabel: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '800',
    textAlign: 'center',
  },
  rainbowText: {
    fontSize: 14,
    marginTop: 4,
  },
  dropperRow: {
    flexDirection: 'row',
    gap: 8,
    marginVertical: SPACING.sm,
  },
  dropperBtn: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: BORDER_RADIUS.lg,
    alignItems: 'center',
    borderWidth: 2,
  },
  dropperBtnActive: {
    borderWidth: 3,
    borderColor: '#FFFFFF',
    transform: [{ scale: 1.05 }],
  },
  dropEmoji: {
    fontSize: 22,
    marginBottom: 2,
  },
  dropLabel: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '800',
  },
  footerBar: {
    alignItems: 'center',
    marginTop: SPACING.xs,
  },
  footerNote: {
    color: '#94A3B8',
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
    color: '#F472B6',
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
    backgroundColor: '#831843',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: BORDER_RADIUS.full,
    borderWidth: 1,
    borderColor: '#F472B6',
    marginBottom: SPACING.lg,
  },
  rewardText: {
    color: '#FDE68A',
    fontSize: 15,
    fontWeight: '800',
  },
  claimBtn: {
    backgroundColor: '#EC4899',
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: BORDER_RADIUS.xl,
    borderWidth: 1,
    borderColor: '#F472B6',
  },
  claimBtnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '900',
  },
});
