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

interface ShapeSorterGameModalProps {
  visible: boolean;
  onClose: () => void;
}

interface ShapeLevel {
  id: number;
  prompt: string;
  hindiPrompt: string;
  targetShape: string;
  targetEmoji: string;
  options: { id: string; label: string; emoji: string; color: string }[];
  parentNote: string;
}

const SHAPE_LEVELS: ShapeLevel[] = [
  {
    id: 1,
    prompt: 'Find the Circle (वृत्त / गोल)!',
    hindiPrompt: 'गोल आकार (सर्कल) पर टैप करें!',
    targetShape: 'circle',
    targetEmoji: '⭕',
    options: [
      { id: 'opt1', label: 'Circle', emoji: '🔴', color: '#EF4444' },
      { id: 'opt2', label: 'Square', emoji: '🟦', color: '#3B82F6' },
      { id: 'opt3', label: 'Triangle', emoji: '🔺', color: '#10B981' },
    ],
    parentNote: 'Circles have 0 corners and round edges. Recognized in wheels, rotis, and sun.',
  },
  {
    id: 2,
    prompt: 'Find the Triangle (त्रिभुज)!',
    hindiPrompt: '3 कोनों वाला त्रिभुज ढूंढें!',
    targetShape: 'triangle',
    targetEmoji: '🔺',
    options: [
      { id: 'opt1', label: 'Square', emoji: '🟧', color: '#F97316' },
      { id: 'opt2', label: 'Triangle', emoji: '🔺', color: '#10B981' },
      { id: 'opt3', label: 'Circle', emoji: '🟡', color: '#EAB308' },
    ],
    parentNote: 'Triangles have exactly 3 sides and 3 corners (like a slice of pizza or samosa).',
  },
  {
    id: 3,
    prompt: 'Find the Square (वर्ग)!',
    hindiPrompt: '4 बराबर भुजाओं वाला चौकोर (स्क्वायर) ढूंढें!',
    targetShape: 'square',
    targetEmoji: '🟦',
    options: [
      { id: 'opt1', label: 'Star', emoji: '⭐', color: '#F59E0B' },
      { id: 'opt2', label: 'Circle', emoji: '🟢', color: '#10B981' },
      { id: 'opt3', label: 'Square', emoji: '🟦', color: '#3B82F6' },
    ],
    parentNote: 'Squares have 4 equal sides and 4 straight corners (like a carrom board or bread slice).',
  },
  {
    id: 4,
    prompt: 'Find the Shiny Star (तारा)!',
    hindiPrompt: 'आसमान का चमकता तारा ढूंढें!',
    targetShape: 'star',
    targetEmoji: '⭐',
    options: [
      { id: 'opt1', label: 'Star', emoji: '⭐', color: '#F59E0B' },
      { id: 'opt2', label: 'Rectangle', emoji: '🟩', color: '#10B981' },
      { id: 'opt3', label: 'Circle', emoji: '🟣', color: '#8B5CF6' },
    ],
    parentNote: 'Star pattern recognition develops complex boundary tracking in early vision.',
  },
  {
    id: 5,
    prompt: 'Find the Rectangle (आयत)!',
    hindiPrompt: 'लंबा चौकोर (आयत / रेक्टेंगल) पहचानें!',
    targetShape: 'rectangle',
    targetEmoji: '🟩',
    options: [
      { id: 'opt1', label: 'Circle', emoji: '🔴', color: '#EF4444' },
      { id: 'opt2', label: 'Rectangle', emoji: '🟩', color: '#10B981' },
      { id: 'opt3', label: 'Triangle', emoji: '🔺', color: '#F59E0B' },
    ],
    parentNote: 'Rectangles have 2 long sides and 2 short sides (like a book, blackboard, or door).',
  },
  {
    id: 6,
    prompt: 'Match the Color: Golden Yellow! 🟡',
    hindiPrompt: 'पीला रंग (Yellow) पहचानें!',
    targetShape: 'yellow',
    targetEmoji: '🟡',
    options: [
      { id: 'opt1', label: 'Yellow', emoji: '🟡', color: '#EAB308' },
      { id: 'opt2', label: 'Blue', emoji: '🔵', color: '#3B82F6' },
      { id: 'opt3', label: 'Red', emoji: '🔴', color: '#EF4444' },
    ],
    parentNote: 'Primary color classification develops visual categorization pathways.',
  },
  {
    id: 7,
    prompt: 'Find the Oval (अंडाकार / ओवल)!',
    hindiPrompt: 'अंडाकार (ओवल) आकार ढूंढें!',
    targetShape: 'oval',
    targetEmoji: '🥚',
    options: [
      { id: 'opt1', label: 'Circle', emoji: '🔴', color: '#EF4444' },
      { id: 'opt2', label: 'Oval', emoji: '🥚', color: '#F3F4F6' },
      { id: 'opt3', label: 'Square', emoji: '🟪', color: '#8B5CF6' },
    ],
    parentNote: 'Differentiating an oval from a circle is a crucial developmental milestone in 2D geometry.',
  },
  {
    id: 8,
    prompt: 'Master Match: Find the Diamond Gem 💎!',
    hindiPrompt: 'हीरे जैसा डायमंड आकार पहचानें!',
    targetShape: 'diamond',
    targetEmoji: '💎',
    options: [
      { id: 'opt1', label: 'Triangle', emoji: '🔺', color: '#EF4444' },
      { id: 'opt2', label: 'Square', emoji: '🟨', color: '#EAB308' },
      { id: 'opt3', label: 'Diamond', emoji: '💎', color: '#06B6D4' },
    ],
    parentNote: 'Rhombus/Diamond orientation shows children how shapes rotate in space.',
  },
];

export const ShapeSorterGameModal: React.FC<ShapeSorterGameModalProps> = ({
  visible,
  onClose,
}) => {
  const { addReward } = useUserStore();
  const [levelIndex, setLevelIndex] = useState(0);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [showParentInfo, setShowParentInfo] = useState(false);

  const bounceAnim = useRef(new Animated.Value(1)).current;
  const currentLevel = SHAPE_LEVELS[levelIndex] || SHAPE_LEVELS[0];

  useEffect(() => {
    if (!visible) return;
    setLevelIndex(0);
    setSelectedId(null);
    setIsSuccess(false);
    setIsFinished(false);
    setShowParentInfo(false);
  }, [visible]);

  const handleSelect = (option: { id: string; label: string; emoji: string; color: string }) => {
    if (isSuccess) return;

    soundManager.playPop();
    triggerHaptic('medium');
    setSelectedId(option.id);

    const isMatch =
      (currentLevel.targetShape === 'circle' && option.label === 'Circle') ||
      (currentLevel.targetShape === 'triangle' && option.label === 'Triangle') ||
      (currentLevel.targetShape === 'square' && option.label === 'Square') ||
      (currentLevel.targetShape === 'star' && option.label === 'Star') ||
      (currentLevel.targetShape === 'rectangle' && option.label === 'Rectangle') ||
      (currentLevel.targetShape === 'yellow' && option.label === 'Yellow') ||
      (currentLevel.targetShape === 'oval' && option.label === 'Oval') ||
      (currentLevel.targetShape === 'diamond' && option.label === 'Diamond');

    if (isMatch) {
      setIsSuccess(true);
      soundManager.playBell();
      triggerHaptic('success');

      Animated.sequence([
        Animated.timing(bounceAnim, { toValue: 1.25, duration: 200, useNativeDriver: true }),
        Animated.spring(bounceAnim, { toValue: 1, friction: 3, useNativeDriver: true }),
      ]).start();

      setTimeout(() => {
        if (levelIndex + 1 < SHAPE_LEVELS.length) {
          setLevelIndex((prev) => prev + 1);
          setSelectedId(null);
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
              <Text style={styles.title}>🔷 Shape & Color Sorter</Text>
              <Text style={styles.sub}>
                Level {levelIndex + 1} of {SHAPE_LEVELS.length} • NCERT Foundation
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

          {/* Glowing Stencil Slot Box */}
          <View style={styles.stencilStage}>
            <Text style={styles.stencilTag}>Fit into the Shape Slot:</Text>
            <Animated.View
              style={[
                styles.stencilSlot,
                { transform: [{ scale: bounceAnim }] },
                isSuccess && styles.stencilSlotSuccess,
              ]}
            >
              <Text style={styles.stencilTargetEmoji}>
                {isSuccess ? currentLevel.targetEmoji : '❓'}
              </Text>
              <Text style={styles.stencilGlowLabel}>
                {isSuccess ? 'PERFECT FIT! 🎉' : 'Tap matching shape below'}
              </Text>
            </Animated.View>
          </View>

          {/* Option Choices */}
          <View style={styles.choicesRow}>
            {currentLevel.options.map((opt) => {
              const isChosen = selectedId === opt.id;
              return (
                <TouchableOpacity
                  key={opt.id}
                  style={[
                    styles.choiceCard,
                    { borderColor: opt.color },
                    isChosen && { backgroundColor: `${opt.color}25` },
                  ]}
                  activeOpacity={0.8}
                  onPress={() => handleSelect(opt)}
                >
                  <Text style={styles.choiceEmoji}>{opt.emoji}</Text>
                  <Text style={[styles.choiceLabel, { color: opt.color }]}>{opt.label}</Text>
                </TouchableOpacity>
              );
            })}
          </View>

          {/* Footer note */}
          <View style={styles.footerBar}>
            <Text style={styles.footerNote}>✨ Montessori tactile learning method</Text>
          </View>

          {/* Finished Celebration Modal */}
          {isFinished && (
            <View style={styles.successOverlay}>
              <View style={styles.successBox}>
                <Text style={styles.successEmoji}>🏆</Text>
                <Text style={styles.successTitle}>Shape Master Champ!</Text>
                <Text style={styles.successDesc}>
                  Aapne saare 8 shapes & colors ko pehchan kar fit kar diya!
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
    fontSize: 19,
    fontWeight: '800',
  },
  sub: {
    color: '#94A3B8',
    fontSize: 12,
    fontWeight: '600',
  },
  closeBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#334155',
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
    borderLeftColor: '#60A5FA',
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
    marginBottom: SPACING.md,
    borderWidth: 1,
    borderColor: '#3B82F6',
  },
  missionPrompt: {
    color: '#FFFFFF',
    fontSize: 16,
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
  stencilStage: {
    alignItems: 'center',
    marginVertical: SPACING.md,
  },
  stencilTag: {
    color: '#94A3B8',
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 8,
  },
  stencilSlot: {
    width: 140,
    height: 140,
    borderRadius: 24,
    borderWidth: 3,
    borderStyle: 'dashed',
    borderColor: '#60A5FA',
    backgroundColor: '#1E293B',
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING.xs,
  },
  stencilSlotSuccess: {
    borderColor: '#10B981',
    borderStyle: 'solid',
    backgroundColor: '#064E3B',
  },
  stencilTargetEmoji: {
    fontSize: 52,
  },
  stencilGlowLabel: {
    color: '#93C5FD',
    fontSize: 11,
    fontWeight: '700',
    marginTop: 6,
    textAlign: 'center',
  },
  choicesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginVertical: SPACING.md,
  },
  choiceCard: {
    flex: 1,
    backgroundColor: '#1E293B',
    borderRadius: BORDER_RADIUS.lg,
    paddingVertical: SPACING.md,
    alignItems: 'center',
    borderWidth: 2,
  },
  choiceEmoji: {
    fontSize: 40,
    marginBottom: 6,
  },
  choiceLabel: {
    fontSize: 13,
    fontWeight: '800',
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
    color: '#F59E0B',
    fontSize: 24,
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
    backgroundColor: '#78350F',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: BORDER_RADIUS.full,
    borderWidth: 1,
    borderColor: '#F59E0B',
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
    fontWeight: '800',
  },
});
