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

interface GeoAreaPerimeterModalProps {
  visible: boolean;
  onClose: () => void;
}

interface GeoLevel {
  id: number;
  prompt: string;
  hindiPrompt: string;
  targetType: 'area' | 'perimeter' | 'dimensions';
  targetValue: number;
  targetL?: number;
  targetB?: number;
  parentNote: string;
}

const GEO_LEVELS: GeoLevel[] = [
  {
    id: 1,
    prompt: 'Adjust Length = 4 and Breadth = 2 to see Area & Perimeter!',
    hindiPrompt: 'लंबाई 4 और चौड़ाई 2 सेट करके क्षेत्रफल और परिमाप देखें!',
    targetType: 'dimensions',
    targetValue: 8,
    targetL: 4,
    targetB: 2,
    parentNote: 'Area is the space INSIDE (8 tiles); Perimeter is the fence OUTSIDE (2×(4+2) = 12).',
  },
  {
    id: 2,
    prompt: 'Build a Square with Side = 3! (Area = 9 sq cm)',
    hindiPrompt: '3 × 3 का वर्ग बनाएं — क्षेत्रफल 9 टाइल्स होगा!',
    targetType: 'dimensions',
    targetValue: 9,
    targetL: 3,
    targetB: 3,
    parentNote: 'Squares have equal length and breadth: Area = Side × Side = 3 × 3 = 9.',
  },
  {
    id: 3,
    prompt: 'Build ANY rectangle with Area = 12 sq cm!',
    hindiPrompt: 'ऐसा आयत बनाएं जिसका क्षेत्रफल ठीक 12 हो (जैसे 4×3 या 6×2)!',
    targetType: 'area',
    targetValue: 12,
    parentNote: 'Multiple dimensions (4×3 or 6×2) can yield the exact same total area.',
  },
  {
    id: 4,
    prompt: 'Build a rectangle with Boundary Perimeter = 16 cm!',
    hindiPrompt: 'ऐसी आकृति बनाएं जिसकी बाहरी बाउंड्री (परिमाप) 16 सेमी हो!',
    targetType: 'perimeter',
    targetValue: 16,
    parentNote: 'Perimeter counts the border units: 2×(L + B) = 16.',
  },
  {
    id: 5,
    prompt: 'Flooring Tiles: Cover a 5 × 4 room floor!',
    hindiPrompt: '5 × 4 का कमरा बनाएं — इसमें कुल कितनी टाइल्स लगेंगी?',
    targetType: 'dimensions',
    targetValue: 20,
    targetL: 5,
    targetB: 4,
    parentNote: 'Practical tiling: 5 columns × 4 rows = 20 square tiles.',
  },
  {
    id: 6,
    prompt: 'Garden Wire Fencing: L = 6m, B = 3m!',
    hindiPrompt: 'बगीचे के लिए 6 × 3 का घेरा बनाएं (तार की लंबाई = परिमाप)!',
    targetType: 'dimensions',
    targetValue: 18,
    targetL: 6,
    targetB: 3,
    parentNote: 'Fencing wire required is always the Perimeter, never the area.',
  },
  {
    id: 7,
    prompt: 'Build a Shape with Area = 15 sq cm!',
    hindiPrompt: '15 वर्ग सेमी क्षेत्रफल वाला आयत बनाएं (5 × 3)!',
    targetType: 'area',
    targetValue: 15,
    parentNote: 'Factoring numbers geometrically: 15 = 5 × 3.',
  },
  {
    id: 8,
    prompt: 'Square Tile: Build a Square with Area = 16 sq cm!',
    hindiPrompt: '16 क्षेत्रफल का वर्ग बनाएं (4 × 4)!',
    targetType: 'dimensions',
    targetValue: 16,
    targetL: 4,
    targetB: 4,
    parentNote: 'Square roots in action: √16 = 4.',
  },
  {
    id: 9,
    prompt: 'Perimeter Challenge: Build a fence of 20 cm!',
    hindiPrompt: '20 सेमी परिमाप वाला आयत बनाएं (जैसे 7×3 या 6×4)!',
    targetType: 'perimeter',
    targetValue: 20,
    parentNote: 'Deepening boundary intuition before secondary school mensuration.',
  },
  {
    id: 10,
    prompt: 'Master Architect: Build Max Area 25 sq cm!',
    hindiPrompt: '5 × 5 का सबसे बड़ा वर्ग बनाकर मास्टर आर्किटेक्ट ट्रॉफी जीतें!',
    targetType: 'dimensions',
    targetValue: 25,
    targetL: 5,
    targetB: 5,
    parentNote: 'A square always maximizes area for any given perimeter.',
  },
];

export const GeoAreaPerimeterModal: React.FC<GeoAreaPerimeterModalProps> = ({
  visible,
  onClose,
}) => {
  const { addReward } = useUserStore();
  const [levelIndex, setLevelIndex] = useState(0);
  const [length, setLength] = useState(3);
  const [breadth, setBreadth] = useState(2);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [showParentInfo, setShowParentInfo] = useState(false);

  const currentLevel = GEO_LEVELS[levelIndex] || GEO_LEVELS[0];

  useEffect(() => {
    if (!visible) return;
    setLevelIndex(0);
    setLength(3);
    setBreadth(2);
    setIsSuccess(false);
    setIsFinished(false);
    setShowParentInfo(false);
  }, [visible]);

  const currentArea = length * breadth;
  const currentPerimeter = 2 * (length + breadth);

  const adjustLength = (delta: number) => {
    soundManager.playPop();
    triggerHaptic('light');
    setLength((prev) => Math.max(1, Math.min(7, prev + delta)));
  };

  const adjustBreadth = (delta: number) => {
    soundManager.playPop();
    triggerHaptic('light');
    setBreadth((prev) => Math.max(1, Math.min(5, prev + delta)));
  };

  const handleCheck = () => {
    let matched = false;

    if (currentLevel.targetType === 'dimensions') {
      matched = length === currentLevel.targetL && breadth === currentLevel.targetB;
    } else if (currentLevel.targetType === 'area') {
      matched = currentArea === currentLevel.targetValue;
    } else if (currentLevel.targetType === 'perimeter') {
      matched = currentPerimeter === currentLevel.targetValue;
    }

    if (matched) {
      setIsSuccess(true);
      soundManager.playBell();
      triggerHaptic('success');

      setTimeout(() => {
        if (levelIndex + 1 < GEO_LEVELS.length) {
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
              <Text style={styles.title}>📐 Geo-Board Area & Perimeter</Text>
              <Text style={styles.sub}>
                Level {levelIndex + 1} of {GEO_LEVELS.length} • NCERT Class 5-6
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

          {/* Interactive Geo-Grid Stage */}
          <View style={styles.gridStage}>
            {/* Real-time Glowing Rectangle with internal unit tiles */}
            <View
              style={[
                styles.rectBox,
                {
                  width: length * 38,
                  height: breadth * 38,
                },
                isSuccess && styles.rectBoxSuccess,
              ]}
            >
              {Array.from({ length: breadth }).map((_, rIdx) => (
                <View key={rIdx} style={styles.tileRow}>
                  {Array.from({ length: length }).map((_, cIdx) => (
                    <View key={cIdx} style={styles.tileCell}>
                      <Text style={styles.tileText}>1</Text>
                    </View>
                  ))}
                </View>
              ))}
            </View>

            {/* Formula Readouts */}
            <View style={styles.readoutBar}>
              <View style={styles.readoutItem}>
                <Text style={styles.readoutTitle}>🟦 Inside Area:</Text>
                <Text style={styles.readoutFormula}>
                  {length} × {breadth} = <Text style={styles.boldVal}>{currentArea} cm²</Text>
                </Text>
              </View>

              <View style={styles.readoutItem}>
                <Text style={styles.readoutTitle}>🟨 Border Perimeter:</Text>
                <Text style={styles.readoutFormula}>
                  2×({length}+{breadth}) = <Text style={styles.boldVal}>{currentPerimeter} cm</Text>
                </Text>
              </View>
            </View>
          </View>

          {/* Dimension Adjusters */}
          <View style={styles.adjusterRow}>
            {/* Length Controls */}
            <View style={styles.adjusterCol}>
              <Text style={styles.adjusterLabel}>Length (L): {length} cm</Text>
              <View style={styles.btnPair}>
                <TouchableOpacity style={styles.adjBtn} onPress={() => adjustLength(-1)}>
                  <Text style={styles.adjBtnText}>- 1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.adjBtn} onPress={() => adjustLength(1)}>
                  <Text style={styles.adjBtnText}>+ 1</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Breadth Controls */}
            <View style={styles.adjusterCol}>
              <Text style={styles.adjusterLabel}>Breadth (B): {breadth} cm</Text>
              <View style={styles.btnPair}>
                <TouchableOpacity style={styles.adjBtn} onPress={() => adjustBreadth(-1)}>
                  <Text style={styles.adjBtnText}>- 1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.adjBtn} onPress={() => adjustBreadth(1)}>
                  <Text style={styles.adjBtnText}>+ 1</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Check Button */}
          <TouchableOpacity
            style={[styles.checkBtn, isSuccess && styles.checkBtnSuccess]}
            onPress={handleCheck}
            activeOpacity={0.8}
          >
            <Text style={styles.checkBtnText}>
              {isSuccess ? 'PERFECT ARCHITECT MATCH! 🎉' : 'Verify Shape & Lock 📐'}
            </Text>
          </TouchableOpacity>

          {/* Footer note */}
          <View style={styles.footerBar}>
            <Text style={styles.footerNote}>
              ✨ Visual tactile separation of boundary (perimeter) vs region (area)
            </Text>
          </View>

          {/* Finished Celebration Modal */}
          {isFinished && (
            <View style={styles.successOverlay}>
              <View style={styles.successBox}>
                <Text style={styles.successEmoji}>🏛️</Text>
                <Text style={styles.successTitle}>Master Architect Champ!</Text>
                <Text style={styles.successDesc}>
                  Aapne Area aur Perimeter ke saare 10 practical challenges solve kar liye!
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
    backgroundColor: '#164E63',
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.sm,
    alignItems: 'center',
    marginBottom: SPACING.sm,
    borderWidth: 1,
    borderColor: '#06B6D4',
  },
  missionPrompt: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
    textAlign: 'center',
  },
  missionHindi: {
    color: '#CFFAFE',
    fontSize: 12,
    fontWeight: '600',
    marginTop: 2,
    textAlign: 'center',
  },
  gridStage: {
    height: 220,
    backgroundColor: '#042F2E',
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.sm,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#0E7490',
    marginBottom: SPACING.sm,
  },
  rectBox: {
    backgroundColor: '#0E7490',
    borderWidth: 4,
    borderColor: '#F59E0B',
    borderRadius: 6,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    ...SHADOWS.md,
  },
  rectBoxSuccess: {
    borderColor: '#10B981',
    backgroundColor: '#065F46',
  },
  tileRow: {
    flexDirection: 'row',
  },
  tileCell: {
    width: 38,
    height: 38,
    borderWidth: 0.5,
    borderColor: 'rgba(255,255,255,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tileText: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 10,
    fontWeight: '700',
  },
  readoutBar: {
    position: 'absolute',
    bottom: 6,
    left: 8,
    right: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(8, 51, 68, 0.9)',
    borderRadius: BORDER_RADIUS.md,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  readoutItem: {
    alignItems: 'center',
  },
  readoutTitle: {
    color: '#A5F3FC',
    fontSize: 10,
    fontWeight: '700',
  },
  readoutFormula: {
    color: '#E2E8F0',
    fontSize: 11,
    fontWeight: '600',
  },
  boldVal: {
    color: '#FDE68A',
    fontWeight: '900',
  },
  adjusterRow: {
    flexDirection: 'row',
    gap: 10,
    marginVertical: SPACING.xs,
  },
  adjusterCol: {
    flex: 1,
    backgroundColor: '#164E63',
    borderRadius: BORDER_RADIUS.md,
    padding: 8,
    borderWidth: 1,
    borderColor: '#0E7490',
    alignItems: 'center',
  },
  adjusterLabel: {
    color: '#A5F3FC',
    fontSize: 12,
    fontWeight: '800',
    marginBottom: 6,
  },
  btnPair: {
    flexDirection: 'row',
    gap: 8,
    width: '100%',
  },
  adjBtn: {
    flex: 1,
    backgroundColor: '#0891B2',
    paddingVertical: 8,
    borderRadius: BORDER_RADIUS.md,
    alignItems: 'center',
  },
  adjBtnText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '900',
  },
  checkBtn: {
    backgroundColor: '#06B6D4',
    paddingVertical: 13,
    borderRadius: BORDER_RADIUS.lg,
    alignItems: 'center',
    marginTop: 6,
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
