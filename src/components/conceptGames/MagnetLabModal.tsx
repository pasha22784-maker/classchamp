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

interface MagnetLabModalProps {
  visible: boolean;
  onClose: () => void;
}

interface MagnetLevel {
  id: number;
  prompt: string;
  hindiPrompt: string;
  leftPole: 'N' | 'S';
  targetRightPole: 'N' | 'S' | 'metal' | 'wood';
  expectedBehavior: 'attract' | 'repel';
  objectName: string;
  objectEmoji: string;
  parentNote: string;
}

const MAGNET_LEVELS: MagnetLevel[] = [
  {
    id: 1,
    prompt: 'Bring Opposite Poles Together: North (N) and South (S)!',
    hindiPrompt: 'उत्तर ध्रुव (N) और दक्षिण ध्रुव (S) को पास लाएं — क्या वे आकर्षित होंगे?',
    leftPole: 'N',
    targetRightPole: 'S',
    expectedBehavior: 'attract',
    objectName: 'South Pole Magnet',
    objectEmoji: '🧲 (S)',
    parentNote: 'Opposite magnetic poles (N and S) always pull towards each other (Attract / आकर्षण).',
  },
  {
    id: 2,
    prompt: 'Bring Like Poles Together: North (N) and North (N)!',
    hindiPrompt: 'N और N को आमने-सामने लाएं — क्या वे एक-दूसरे को धक्का देंगे?',
    leftPole: 'N',
    targetRightPole: 'N',
    expectedBehavior: 'repel',
    objectName: 'North Pole Magnet',
    objectEmoji: '🧲 (N)',
    parentNote: 'Like magnetic poles (N-N or S-S) push away from each other (Repel / प्रतिकर्षण).',
  },
  {
    id: 3,
    prompt: 'Bring South (S) and South (S) Together!',
    hindiPrompt: 'दक्षिण (S) और दक्षिण (S) को पास लाएं — धक्का महसूस करें!',
    leftPole: 'S',
    targetRightPole: 'S',
    expectedBehavior: 'repel',
    objectName: 'South Pole Magnet',
    objectEmoji: '🧲 (S)',
    parentNote: 'Like poles repel regardless of whether they are both North or both South.',
  },
  {
    id: 4,
    prompt: 'Magnetic Material: Test an Iron Paperclip 📎!',
    hindiPrompt: 'लोहे की आलपिन (पेपरक्लिप) को चुंबक के पास लाएं!',
    leftPole: 'N',
    targetRightPole: 'metal',
    expectedBehavior: 'attract',
    objectName: 'Iron Paperclip',
    objectEmoji: '📎',
    parentNote: 'Iron, nickel, and cobalt are ferromagnetic materials strongly attracted by any pole.',
  },
  {
    id: 5,
    prompt: 'Non-Magnetic Test: Test a Wooden Pencil ✏️!',
    hindiPrompt: 'लकड़ी की पेंसिल को चुंबक के पास लाएं — क्या वह चिपकेगी?',
    leftPole: 'N',
    targetRightPole: 'wood',
    expectedBehavior: 'repel',
    objectName: 'Wooden Pencil',
    objectEmoji: '✏️',
    parentNote: 'Wood, plastic, and glass do not contain magnetic dipoles and are unaffected by magnets.',
  },
  {
    id: 6,
    prompt: 'Iron Key Test: Will the Steel Key 🗝️ stick?',
    hindiPrompt: 'लोहे की चाबी को चुंबक के पास लाएं!',
    leftPole: 'S',
    targetRightPole: 'metal',
    expectedBehavior: 'attract',
    objectName: 'Steel Key',
    objectEmoji: '🗝️',
    parentNote: 'Steel contains iron alloys, making keys magnetically responsive.',
  },
  {
    id: 7,
    prompt: 'Flip Pole Test: Bring South (S) to North (N)!',
    hindiPrompt: 'S और N को जोड़ें — जादुई चुंबकीय खिंचाव!',
    leftPole: 'S',
    targetRightPole: 'N',
    expectedBehavior: 'attract',
    objectName: 'North Pole Magnet',
    objectEmoji: '🧲 (N)',
    parentNote: 'Reinforcing magnetic inversion: polarity order does not affect attraction.',
  },
  {
    id: 8,
    prompt: 'Master Magnet Scientist: Pick the Steel Horseshoe 🧲!',
    hindiPrompt: 'मास्टर चुंबक वैज्ञानिक पदक जीतने के लिए सही पोल लॉक करें!',
    leftPole: 'N',
    targetRightPole: 'S',
    expectedBehavior: 'attract',
    objectName: 'Horseshoe South',
    objectEmoji: '🧲 (S)',
    parentNote: 'Complete foundational physics intuition for NCERT Science "Fun with Magnets".',
  },
];

export const MagnetLabModal: React.FC<MagnetLabModalProps> = ({
  visible,
  onClose,
}) => {
  const { addReward } = useUserStore();
  const [levelIndex, setLevelIndex] = useState(0);
  const [actionTested, setActionTested] = useState<'attract' | 'repel' | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [showParentInfo, setShowParentInfo] = useState(false);

  const rightMagnetSlide = useRef(new Animated.Value(60)).current;
  const currentLevel = MAGNET_LEVELS[levelIndex] || MAGNET_LEVELS[0];

  useEffect(() => {
    if (!visible) return;
    setLevelIndex(0);
    resetStage();
    setIsSuccess(false);
    setIsFinished(false);
    setShowParentInfo(false);
  }, [visible]);

  const resetStage = () => {
    setActionTested(null);
    rightMagnetSlide.setValue(60);
  };

  const handleTestMagnet = (action: 'attract' | 'repel') => {
    if (isSuccess) return;

    setActionTested(action);
    triggerHaptic('medium');

    if (action === 'attract') {
      soundManager.playPop();
      // Snap together
      Animated.spring(rightMagnetSlide, {
        toValue: 6,
        friction: 4,
        useNativeDriver: true,
      }).start();
    } else {
      soundManager.playIncorrect();
      // Push far away
      Animated.spring(rightMagnetSlide, {
        toValue: 90,
        friction: 4,
        useNativeDriver: true,
      }).start();
    }

    if (action === currentLevel.expectedBehavior) {
      setIsSuccess(true);
      soundManager.playBell();
      triggerHaptic('success');

      setTimeout(() => {
        if (levelIndex + 1 < MAGNET_LEVELS.length) {
          setLevelIndex((prev) => prev + 1);
          resetStage();
          setIsSuccess(false);
        } else {
          setIsFinished(true);
          soundManager.playFanfare();
        }
      }, 1600);
    } else {
      triggerHaptic('warning');
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
              <Text style={styles.title}>🧲 Magnetic Field & Poles Lab</Text>
              <Text style={styles.sub}>
                Experiment {levelIndex + 1} of {MAGNET_LEVELS.length} • NCERT Science
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

          {/* Magnetic Apparatus Stage */}
          <View style={styles.apparatusStage}>
            {/* Left Magnet Bar */}
            <View style={styles.magnetBar}>
              <View style={[styles.poleBlock, currentLevel.leftPole === 'N' ? styles.northPole : styles.southPole]}>
                <Text style={styles.poleLetter}>{currentLevel.leftPole}</Text>
                <Text style={styles.poleName}>{currentLevel.leftPole === 'N' ? 'NORTH' : 'SOUTH'}</Text>
              </View>
            </View>

            {/* Magnetic Field Glow / Spark */}
            <View style={styles.fieldZone}>
              <Text style={styles.fieldEmoji}>
                {actionTested === 'attract' ? '⚡ CLACK! ⚡' : actionTested === 'repel' ? '💨 PUSH! 💨' : '〰️ Field 〰️'}
              </Text>
            </View>

            {/* Right Test Magnet / Material */}
            <Animated.View
              style={[
                styles.magnetBar,
                { transform: [{ translateX: rightMagnetSlide }] },
              ]}
            >
              <View
                style={[
                  styles.poleBlock,
                  currentLevel.targetRightPole === 'N'
                    ? styles.northPole
                    : currentLevel.targetRightPole === 'S'
                    ? styles.southPole
                    : styles.neutralMaterial,
                ]}
              >
                <Text style={styles.poleLetter}>
                  {currentLevel.targetRightPole === 'N'
                    ? 'N'
                    : currentLevel.targetRightPole === 'S'
                    ? 'S'
                    : currentLevel.objectEmoji}
                </Text>
                <Text style={styles.poleName}>{currentLevel.objectName}</Text>
              </View>
            </Animated.View>
          </View>

          {/* Interaction Prediction Buttons */}
          <View style={styles.actionRow}>
            <TouchableOpacity
              style={[
                styles.actionBtn,
                styles.attractBtn,
                actionTested === 'attract' && styles.actionBtnActive,
              ]}
              onPress={() => handleTestMagnet('attract')}
              activeOpacity={0.8}
            >
              <Text style={styles.actionBtnText}>🧲 ATTRACT (खींचेंगे!)</Text>
              <Text style={styles.actionSubText}>Pull Together</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.actionBtn,
                styles.repelBtn,
                actionTested === 'repel' && styles.actionBtnActive,
              ]}
              onPress={() => handleTestMagnet('repel')}
              activeOpacity={0.8}
            >
              <Text style={styles.actionBtnText}>💥 REPEL (धक्का देंगे!)</Text>
              <Text style={styles.actionSubText}>Push Away / No Stick</Text>
            </TouchableOpacity>
          </View>

          {/* Footer note */}
          <View style={styles.footerBar}>
            <Text style={styles.footerNote}>
              ✨ Physical magnetic dipole interactions without rote rules
            </Text>
          </View>

          {/* Finished Celebration Modal */}
          {isFinished && (
            <View style={styles.successOverlay}>
              <View style={styles.successBox}>
                <Text style={styles.successEmoji}>🧲</Text>
                <Text style={styles.successTitle}>Master Magnet Scientist!</Text>
                <Text style={styles.successDesc}>
                  Aapne North-South poles, attraction aur magnetic materials ke saare 8 experiments poore kar liye!
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
    borderColor: '#EF4444',
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
    backgroundColor: '#7F1D1D',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: BORDER_RADIUS.full,
    borderWidth: 1,
    borderColor: '#F87171',
  },
  infoPillText: {
    color: '#FECACA',
    fontSize: 12,
    fontWeight: '700',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '800',
  },
  sub: {
    color: '#F87171',
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
    borderLeftColor: '#EF4444',
  },
  parentTitle: {
    color: '#F87171',
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
    backgroundColor: '#7F1D1D',
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.sm,
    alignItems: 'center',
    marginBottom: SPACING.sm,
    borderWidth: 1,
    borderColor: '#EF4444',
  },
  missionPrompt: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
    textAlign: 'center',
  },
  missionHindi: {
    color: '#FECACA',
    fontSize: 12,
    fontWeight: '600',
    marginTop: 2,
    textAlign: 'center',
  },
  apparatusStage: {
    height: 140,
    backgroundColor: '#020617',
    borderRadius: BORDER_RADIUS.lg,
    borderWidth: 1,
    borderColor: '#1E293B',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
    overflow: 'hidden',
    marginVertical: SPACING.xs,
  },
  magnetBar: {
    width: 90,
    height: 80,
    borderRadius: 10,
    overflow: 'hidden',
  },
  poleBlock: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  northPole: {
    backgroundColor: '#EF4444',
    borderWidth: 2,
    borderColor: '#F87171',
  },
  southPole: {
    backgroundColor: '#3B82F6',
    borderWidth: 2,
    borderColor: '#60A5FA',
  },
  neutralMaterial: {
    backgroundColor: '#64748B',
    borderWidth: 2,
    borderColor: '#94A3B8',
  },
  poleLetter: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: '900',
  },
  poleName: {
    color: '#FFFFFF',
    fontSize: 9,
    fontWeight: '800',
    marginTop: 2,
    textAlign: 'center',
    paddingHorizontal: 2,
  },
  fieldZone: {
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fieldEmoji: {
    color: '#FDE68A',
    fontSize: 11,
    fontWeight: '800',
  },
  actionRow: {
    flexDirection: 'row',
    gap: 10,
    marginVertical: SPACING.sm,
  },
  actionBtn: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: BORDER_RADIUS.lg,
    alignItems: 'center',
    borderWidth: 2,
  },
  attractBtn: {
    backgroundColor: '#065F46',
    borderColor: '#10B981',
  },
  repelBtn: {
    backgroundColor: '#7C2D12',
    borderColor: '#F97316',
  },
  actionBtnActive: {
    borderWidth: 3,
    borderColor: '#FFFFFF',
  },
  actionBtnText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '900',
  },
  actionSubText: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 10,
    marginTop: 2,
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
    color: '#F87171',
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
    backgroundColor: '#7F1D1D',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: BORDER_RADIUS.full,
    borderWidth: 1,
    borderColor: '#F87171',
    marginBottom: SPACING.lg,
  },
  rewardText: {
    color: '#FDE68A',
    fontSize: 15,
    fontWeight: '800',
  },
  claimBtn: {
    backgroundColor: '#EF4444',
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: BORDER_RADIUS.xl,
    borderWidth: 1,
    borderColor: '#F87171',
  },
  claimBtnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '900',
  },
});
