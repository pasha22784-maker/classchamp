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

interface AngleShooterGameModalProps {
  visible: boolean;
  onClose: () => void;
}

interface AngleMission {
  id: number;
  prompt: string;
  targetAngle: number;
  expectedType: 'acute' | 'right' | 'obtuse' | 'straight';
  targetLabel: string;
  explanation: string;
}

const ANGLE_MISSIONS: AngleMission[] = [
  {
    id: 1,
    prompt: 'Aim a Right Angle (समकोण) at 90° to target the Diamond!',
    targetAngle: 90,
    expectedType: 'right',
    targetLabel: 'Right Angle (90°)',
    explanation: 'A 90° angle makes a perfect L-shape corner, called a Right Angle (समकोण)!',
  },
  {
    id: 2,
    prompt: 'Aim an Acute Angle (न्यून कोण) at 45° to reflect the beam!',
    targetAngle: 45,
    expectedType: 'acute',
    targetLabel: 'Acute Angle (45°)',
    explanation: 'Any angle less than 90° is an Acute Angle (न्यून कोण) — sharp & narrow!',
  },
  {
    id: 3,
    prompt: 'Aim an Acute Angle at 60° (Triangle Angle)!',
    targetAngle: 60,
    expectedType: 'acute',
    targetLabel: 'Acute Angle (60°)',
    explanation: 'Every angle in an equilateral triangle is exactly 60° (Acute)!',
  },
  {
    id: 4,
    prompt: 'Aim a Sharp Acute Angle at 30°!',
    targetAngle: 30,
    expectedType: 'acute',
    targetLabel: 'Acute Angle (30°)',
    explanation: '30° is 1/3 of a right angle — very sharp and narrow!',
  },
  {
    id: 5,
    prompt: 'Aim an Obtuse Angle (अधिक कोण) at 120°!',
    targetAngle: 120,
    expectedType: 'obtuse',
    targetLabel: 'Obtuse Angle (120°)',
    explanation: '120° is wider than a 90° right angle, making it an Obtuse Angle (अधिक कोण)!',
  },
  {
    id: 6,
    prompt: 'Aim an Obtuse Angle at 135° to unlock the portal!',
    targetAngle: 135,
    expectedType: 'obtuse',
    targetLabel: 'Obtuse Angle (135°)',
    explanation: 'An angle between 90° and 180° is an Obtuse Angle — wide & open!',
  },
  {
    id: 7,
    prompt: 'Aim a Wide Obtuse Angle at 150°!',
    targetAngle: 150,
    expectedType: 'obtuse',
    targetLabel: 'Obtuse Angle (150°)',
    explanation: '150° is nearly a straight line, but still an Obtuse Angle!',
  },
  {
    id: 8,
    prompt: 'Aim a Flat Straight Angle (ऋजु कोण) at 180°!',
    targetAngle: 180,
    expectedType: 'straight',
    targetLabel: 'Straight Angle (180°)',
    explanation: 'A 180° angle forms a complete straight line, called a Straight Angle (ऋजु कोण)!',
  },
];

const PRESET_ANGLES = [30, 45, 60, 90, 120, 135, 150, 180];

export const AngleShooterGameModal: React.FC<AngleShooterGameModalProps> = ({
  visible,
  onClose,
}) => {
  const { addReward } = useUserStore();
  const [levelIndex, setLevelIndex] = useState(0);
  const [currentAngle, setCurrentAngle] = useState(30);
  const [isLaserFired, setIsLaserFired] = useState(false);
  const [isHit, setIsHit] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [showParentInfo, setShowParentInfo] = useState(false);

  const mission = ANGLE_MISSIONS[levelIndex] || ANGLE_MISSIONS[0];

  useEffect(() => {
    if (!visible) return;
    setLevelIndex(0);
    setCurrentAngle(30);
    setIsLaserFired(false);
    setIsHit(false);
    setIsFinished(false);
    setShowParentInfo(false);
  }, [visible]);

  const getAngleClassification = (angle: number) => {
    if (angle < 90) return { type: 'acute', label: 'Acute Angle (न्यून कोण)', color: '#10B981', tag: '< 90°' };
    if (angle === 90) return { type: 'right', label: 'Right Angle (समकोण)', color: '#F59E0B', tag: '= 90°' };
    if (angle < 180) return { type: 'obtuse', label: 'Obtuse Angle (अधिक कोण)', color: '#8B5CF6', tag: '> 90°' };
    return { type: 'straight', label: 'Straight Angle (ऋजु कोण)', color: '#3B82F6', tag: '= 180°' };
  };

  const currentClass = getAngleClassification(currentAngle);

  const handleSelectAngle = (angle: number) => {
    soundManager.playPop();
    triggerHaptic('light');
    setCurrentAngle(angle);
    setIsLaserFired(false);
    setIsHit(false);
  };

  const handleFireLaser = () => {
    soundManager.playLaser();
    setIsLaserFired(true);

    if (currentAngle === mission.targetAngle) {
      // Direct hit!
      setIsHit(true);
      soundManager.playBell();
      triggerHaptic('success');

      setTimeout(() => {
        if (levelIndex + 1 < ANGLE_MISSIONS.length) {
          const next = levelIndex + 1;
          setLevelIndex(next);
          setCurrentAngle(30);
          setIsLaserFired(false);
          setIsHit(false);
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

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.gameCard}>
          {/* Header */}
          <View style={styles.headerRow}>
            <View>
              <Text style={styles.gameTitle}>📐 Angle Laser Lab</Text>
              <Text style={styles.gameSub}>Mission {levelIndex + 1} of {ANGLE_MISSIONS.length} • Geometry Lab</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#4C1D95',
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  borderRadius: BORDER_RADIUS.full,
                  borderWidth: 1,
                  borderColor: '#C4B5FD',
                }}
                onPress={() => setShowParentInfo((v) => !v)}
              >
                <Text style={{ color: '#EDE9FE', fontSize: 12, fontWeight: '700' }}>👨‍🏫 Parents</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
                <Text style={styles.closeText}>✕</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Parent Pedagogical Guide Dropdown */}
          {showParentInfo && (
            <View style={{
              backgroundColor: '#2E1065',
              borderRadius: BORDER_RADIUS.md,
              padding: 10,
              marginBottom: SPACING.sm,
              borderLeftWidth: 3,
              borderLeftColor: '#8B5CF6',
            }}>
              <Text style={{ color: '#C4B5FD', fontSize: 12, fontWeight: '700', marginBottom: 2 }}>
                💡 Practical Learning Note:
              </Text>
              <Text style={{ color: '#E2E8F0', fontSize: 12, lineHeight: 16 }}>
                Angles measure circular rotation in degrees (°). Aiming laser beams connects the abstract numbers (45°, 90°, 135°) to physical trajectory and sharp vs wide turns.
              </Text>
            </View>
          )}

          {/* Mission Prompt */}
          <View style={styles.missionBox}>
            <Text style={styles.missionTitle}>{mission.prompt}</Text>
          </View>

          {/* Laser Angle Apparatus */}
          <View style={styles.angleStage}>
            {/* Target Diamond on Top */}
            <View style={[styles.targetNode, isHit && styles.targetNodeHit]}>
              <Text style={styles.targetEmoji}>{isHit ? '💥' : '💎'}</Text>
              <Text style={styles.targetDegreeText}>{mission.targetAngle}°</Text>
            </View>

            {/* Base Ray (Horizontal Line 0°) */}
            <View style={styles.baseRayLine} />

            {/* Rotating Arm Ray */}
            <View
              style={[
                styles.rotatingArmRay,
                { transform: [{ rotate: `-${currentAngle}deg` }] },
                isLaserFired && (isHit ? styles.laserRaySuccess : styles.laserRayMiss),
              ]}
            >
              <View style={styles.laserPointerHead} />
            </View>

            {/* Glowing Central Vertex Pivot */}
            <View style={styles.vertexPivot}>
              <Text style={styles.vertexText}>V</Text>
            </View>

            {/* Live Angle Arc Badge */}
            <View style={styles.angleArcBadge}>
              <Text style={styles.angleArcText}>{currentAngle}°</Text>
            </View>
          </View>

          {/* Live Concept Classifier Bar */}
          <View style={[styles.classifierBar, { borderColor: currentClass.color }]}>
            <View style={[styles.classifierTag, { backgroundColor: currentClass.color }]}>
              <Text style={styles.classifierTagText}>{currentClass.tag}</Text>
            </View>
            <View style={styles.classifierTextBox}>
              <Text style={[styles.classifierName, { color: currentClass.color }]}>
                {currentClass.label}
              </Text>
              <Text style={styles.classifierSub}>
                {isHit ? `✨ ${mission.explanation}` : 'Set the correct angle and press Fire!'}
              </Text>
            </View>
          </View>

          {/* Preset Angle Buttons */}
          <View style={styles.angleSelectorRow}>
            {PRESET_ANGLES.map((a) => {
              const isSelected = currentAngle === a;
              return (
                <TouchableOpacity
                  key={a}
                  style={[
                    styles.anglePill,
                    isSelected && styles.anglePillSelected,
                    isSelected && isHit && styles.anglePillHit,
                  ]}
                  onPress={() => handleSelectAngle(a)}
                  activeOpacity={0.8}
                >
                  <Text
                    style={[
                      styles.anglePillText,
                      isSelected && styles.anglePillTextSelected,
                    ]}
                  >
                    {a}°
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          {/* Fire Laser Button */}
          <TouchableOpacity
            style={[styles.fireBtn, isHit && styles.fireBtnHit]}
            onPress={handleFireLaser}
            activeOpacity={0.85}
          >
            <Text style={styles.fireBtnText}>
              {isHit ? '🎯 DIRECT HIT! CONQUERED!' : '⚡ FIRE LASER AT ' + currentAngle + '°'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Victory Screen */}
        {isFinished && (
          <View style={styles.victoryOverlay}>
            <View style={styles.victoryCard}>
              <Text style={styles.victoryEmoji}>📐</Text>
              <Text style={styles.victoryTitle}>Geometry Master!</Text>
              <Text style={styles.victorySub}>
                You now intuitively master Acute, Right, Obtuse, and Straight Angles!
              </Text>
              <View style={styles.rewardPills}>
                <View style={styles.pill}><Text style={styles.pillText}>⭐ +25 Stars</Text></View>
                <View style={styles.pill}><Text style={styles.pillText}>⚡ +90 XP</Text></View>
              </View>
              <TouchableOpacity style={styles.finishBtn} onPress={handleFinish} activeOpacity={0.85}>
                <Text style={styles.finishBtnText}>CLAIM GEOMETRY BADGE 🌟</Text>
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
    backgroundColor: '#0F172A',
    borderRadius: BORDER_RADIUS.xl,
    padding: SPACING.md,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#8B5CF6',
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
    color: '#C4B5FD',
  },
  gameSub: {
    fontSize: 11,
    color: '#94A3B8',
    fontWeight: '700',
  },
  closeBtn: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  missionBox: {
    backgroundColor: '#1E1B4B',
    width: '100%',
    padding: 10,
    borderRadius: BORDER_RADIUS.md,
    marginVertical: SPACING.xs,
    borderWidth: 1,
    borderColor: '#4338CA',
  },
  missionTitle: {
    fontSize: 13,
    fontWeight: '900',
    color: '#FDE047',
    textAlign: 'center',
  },
  angleStage: {
    width: 260,
    height: 180,
    backgroundColor: '#020617',
    borderRadius: BORDER_RADIUS.lg,
    position: 'relative',
    marginVertical: SPACING.sm,
    borderWidth: 1.5,
    borderColor: '#334155',
    overflow: 'hidden',
  },
  targetNode: {
    position: 'absolute',
    top: 15,
    right: 30,
    alignItems: 'center',
  },
  targetNodeHit: {
    transform: [{ scale: 1.2 }],
  },
  targetEmoji: {
    fontSize: 26,
  },
  targetDegreeText: {
    fontSize: 10,
    color: '#38BDF8',
    fontWeight: '800',
  },
  baseRayLine: {
    position: 'absolute',
    bottom: 25,
    left: 40,
    width: 180,
    height: 3,
    backgroundColor: '#64748B',
  },
  rotatingArmRay: {
    position: 'absolute',
    bottom: 25,
    left: 40,
    width: 140,
    height: 4,
    backgroundColor: '#A855F7',
    transformOrigin: 'left center',
  },
  laserPointerHead: {
    position: 'absolute',
    right: -4,
    top: -4,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#FDE047',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  laserRaySuccess: {
    backgroundColor: '#10B981',
    height: 6,
    shadowColor: '#10B981',
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  laserRayMiss: {
    backgroundColor: '#EF4444',
  },
  vertexPivot: {
    position: 'absolute',
    bottom: 16,
    left: 31,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#F59E0B',
    borderWidth: 2,
    borderColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  vertexText: {
    fontSize: 9,
    fontWeight: '900',
    color: '#78350F',
  },
  angleArcBadge: {
    position: 'absolute',
    bottom: 35,
    left: 65,
    backgroundColor: 'rgba(168, 85, 247, 0.25)',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#A855F7',
  },
  angleArcText: {
    color: '#E9D5FF',
    fontSize: 12,
    fontWeight: '900',
  },
  classifierBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E293B',
    width: '100%',
    padding: 8,
    borderRadius: BORDER_RADIUS.md,
    borderWidth: 1.5,
    gap: 8,
    marginVertical: 4,
  },
  classifierTag: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  classifierTagText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '900',
  },
  classifierTextBox: {
    flex: 1,
  },
  classifierName: {
    fontSize: 13,
    fontWeight: '900',
  },
  classifierSub: {
    fontSize: 10,
    color: '#94A3B8',
    marginTop: 1,
  },
  angleSelectorRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 6,
    width: '100%',
    marginVertical: 8,
  },
  anglePill: {
    backgroundColor: '#1E293B',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: BORDER_RADIUS.round,
    borderWidth: 1.5,
    borderColor: '#475569',
  },
  anglePillSelected: {
    borderColor: '#A855F7',
    backgroundColor: '#581C87',
  },
  anglePillHit: {
    borderColor: '#10B981',
    backgroundColor: '#064E3B',
  },
  anglePillText: {
    color: '#94A3B8',
    fontSize: 12,
    fontWeight: '800',
  },
  anglePillTextSelected: {
    color: '#FFFFFF',
    fontWeight: '900',
  },
  fireBtn: {
    width: '100%',
    backgroundColor: '#8B5CF6',
    paddingVertical: 12,
    borderRadius: BORDER_RADIUS.lg,
    alignItems: 'center',
    borderBottomWidth: 4,
    borderBottomColor: '#6D28D9',
    marginTop: 4,
  },
  fireBtnHit: {
    backgroundColor: '#10B981',
    borderBottomColor: '#047857',
  },
  fireBtnText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '900',
    letterSpacing: 0.5,
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
