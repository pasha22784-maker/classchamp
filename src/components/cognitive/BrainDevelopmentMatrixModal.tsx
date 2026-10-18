import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { COLORS, SPACING, BORDER_RADIUS, SHADOWS } from '../../constants/theme';
import { triggerHaptic } from '../../utils/haptics';
import { soundManager } from '../../utils/soundManager';
import { Grade } from '../../types';
import { COGNITIVE_PILLARS } from '../../data/cognitiveEngine';
import { useUserStore } from '../../store/useUserStore';

interface BrainDevelopmentMatrixModalProps {
  visible: boolean;
  onClose: () => void;
  userGrade: Grade;
  onOpenLab: () => void;
}

export const BrainDevelopmentMatrixModal: React.FC<BrainDevelopmentMatrixModalProps> = ({
  visible,
  onClose,
  userGrade,
  onOpenLab,
}) => {
  const { profile } = useUserStore();
  const scores = profile.cognitiveScores || {
    logicScore: 88,
    spatialScore: 84,
    memorySpeedScore: 86,
    problemSolvingScore: 89,
  };

  const avgScore = Math.round(
    (scores.logicScore + scores.spatialScore + scores.memorySpeedScore + scores.problemSolvingScore) / 4
  );

  return (
    <Modal visible={visible} animationType="slide" transparent onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          {/* Top Bar */}
          <View style={styles.topBar}>
            <View style={styles.topBarLeft}>
              <Text style={styles.matrixIcon}>🧠</Text>
              <View>
                <Text style={styles.topBarTitle}>Super Kid Cognitive Matrix</Text>
                <Text style={styles.topBarSub}>Scientific Brain Growth Report • वैज्ञानिक विकास</Text>
              </View>
            </View>
            <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
              <Text style={styles.closeText}>✕</Text>
            </TouchableOpacity>
          </View>

          <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
            {/* Overall IQ & Percentile Banner */}
            <View style={styles.overallBanner}>
              <View style={styles.overallHeader}>
                <View>
                  <Text style={styles.overallTitle}>{profile.name}’s Cognitive Index</Text>
                  <Text style={styles.overallSub}>Class {userGrade} Developmental Benchmark</Text>
                </View>
                <View style={styles.scoreCircle}>
                  <Text style={styles.scoreCircleVal}>{avgScore}</Text>
                  <Text style={styles.scoreCircleLabel}>INDEX</Text>
                </View>
              </View>

              <View style={styles.percentileBadgeRow}>
                <View style={styles.percentileBadge}>
                  <Text style={styles.percentileBadgeText}>🏆 TOP 3% COGNITIVE PERCENTILE</Text>
                </View>
              </View>

              <Text style={styles.overallDesc}>
                रटने की बजाय खेल-खेल में 4 मुख्य मानसिक स्तंभों (Logic, Spatial, Memory, Problem Solving) का संतुलित विकास हो रहा है।
              </Text>
            </View>

            {/* 4 Pillars Breakdown */}
            <Text style={styles.sectionHeader}>4 CORE DEVELOPMENTAL PILLARS</Text>

            <View style={styles.pillarsList}>
              {COGNITIVE_PILLARS.map((pillar) => {
                const score = scores[pillar.id] || 85;

                return (
                  <View key={pillar.id} style={styles.pillarCard}>
                    <View style={styles.pillarHeader}>
                      <View style={[styles.pillarIconBox, { backgroundColor: `${pillar.accentColor}25` }]}>
                        <Text style={styles.pillarEmoji}>{pillar.icon}</Text>
                      </View>
                      <View style={styles.pillarTitleCol}>
                        <Text style={styles.pillarNameEn}>{pillar.nameEnglish}</Text>
                        <Text style={styles.pillarNameHi}>{pillar.nameHindi}</Text>
                      </View>
                      <Text style={[styles.pillarScoreText, { color: pillar.accentColor }]}>
                        {score}%
                      </Text>
                    </View>

                    {/* Score Bar */}
                    <View style={styles.barBg}>
                      <View
                        style={[
                          styles.barFill,
                          { width: `${score}%`, backgroundColor: pillar.accentColor },
                        ]}
                      />
                    </View>

                    <Text style={styles.pillarDesc}>{pillar.description}</Text>

                    <View style={styles.pedagogyBox}>
                      <Text style={styles.pedagogyText}>
                        💡 <Text style={{ fontWeight: '800' }}>Impact:</Text> {pillar.pedagogicalBenefit}
                      </Text>
                    </View>
                  </View>
                );
              })}
            </View>

            {/* Parent Recommendation */}
            <View style={styles.recCard}>
              <Text style={styles.recTitle}>👨‍🏫 Recommended Next Step for Parents</Text>
              <Text style={styles.recDesc}>
                अपने बच्चे की तार्किक और स्थानिक क्षमता को 100% तक पहुँचाने के लिए रोज़ाना 10 मिनट Concept Labs में प्रयोग करवाएँ।
              </Text>
              <TouchableOpacity
                style={styles.openLabsBtn}
                activeOpacity={0.88}
                onPress={() => {
                  soundManager.playPop();
                  triggerHaptic('medium');
                  onClose();
                  onOpenLab();
                }}
              >
                <Text style={styles.openLabsBtnText}>Open Practical Concept Labs 🔬</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(5, 5, 20, 0.94)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '94%',
    maxHeight: '92%',
    backgroundColor: '#0F172A',
    borderRadius: BORDER_RADIUS.xl,
    borderWidth: 2,
    borderColor: '#38BDF8',
    overflow: 'hidden',
    ...SHADOWS.large,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    backgroundColor: '#1E293B',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(56, 189, 248, 0.3)',
  },
  topBarLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  matrixIcon: {
    fontSize: 24,
  },
  topBarTitle: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: '900',
  },
  topBarSub: {
    color: '#38BDF8',
    fontSize: 10,
    fontWeight: '700',
  },
  closeBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  scrollContent: {
    padding: SPACING.md,
  },
  overallBanner: {
    backgroundColor: '#1E293B',
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.md,
    borderWidth: 1.5,
    borderColor: '#F59E0B',
    marginBottom: SPACING.md,
    ...SHADOWS.card,
  },
  overallHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  overallTitle: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '900',
  },
  overallSub: {
    color: '#94A3B8',
    fontSize: 11,
    marginTop: 2,
  },
  scoreCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#F59E0B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scoreCircleVal: {
    color: '#78350F',
    fontSize: 18,
    fontWeight: '900',
  },
  scoreCircleLabel: {
    color: '#78350F',
    fontSize: 8,
    fontWeight: '900',
  },
  percentileBadgeRow: {
    marginTop: 8,
    marginBottom: 6,
  },
  percentileBadge: {
    backgroundColor: 'rgba(245, 158, 11, 0.2)',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: '#F59E0B',
  },
  percentileBadgeText: {
    color: '#FCD34D',
    fontSize: 10,
    fontWeight: '900',
  },
  overallDesc: {
    color: '#CBD5E1',
    fontSize: 11,
    lineHeight: 16,
    marginTop: 4,
  },
  sectionHeader: {
    color: '#94A3B8',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
    marginBottom: 10,
  },
  pillarsList: {
    gap: 10,
    marginBottom: SPACING.md,
  },
  pillarCard: {
    backgroundColor: '#1E293B',
    borderRadius: BORDER_RADIUS.md,
    padding: 12,
    borderWidth: 1,
    borderColor: '#334155',
  },
  pillarHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 8,
  },
  pillarIconBox: {
    width: 36,
    height: 36,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pillarEmoji: {
    fontSize: 18,
  },
  pillarTitleCol: {
    flex: 1,
  },
  pillarNameEn: {
    color: '#FFF',
    fontSize: 13,
    fontWeight: '800',
  },
  pillarNameHi: {
    color: '#94A3B8',
    fontSize: 10,
  },
  pillarScoreText: {
    fontSize: 16,
    fontWeight: '900',
  },
  barBg: {
    width: '100%',
    height: 6,
    backgroundColor: '#334155',
    borderRadius: 3,
    overflow: 'hidden',
    marginBottom: 8,
  },
  barFill: {
    height: '100%',
    borderRadius: 3,
  },
  pillarDesc: {
    color: '#CBD5E1',
    fontSize: 11,
    lineHeight: 15,
  },
  pedagogyBox: {
    backgroundColor: '#0F172A',
    padding: 6,
    borderRadius: 6,
    marginTop: 6,
  },
  pedagogyText: {
    color: '#94A3B8',
    fontSize: 10,
    lineHeight: 14,
  },
  recCard: {
    backgroundColor: 'rgba(56, 189, 248, 0.1)',
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.md,
    borderWidth: 1,
    borderColor: '#38BDF8',
    marginBottom: SPACING.md,
  },
  recTitle: {
    color: '#38BDF8',
    fontSize: 13,
    fontWeight: '800',
    marginBottom: 4,
  },
  recDesc: {
    color: '#CBD5E1',
    fontSize: 11,
    lineHeight: 16,
    marginBottom: 12,
  },
  openLabsBtn: {
    backgroundColor: '#0284C7',
    paddingVertical: 12,
    borderRadius: BORDER_RADIUS.md,
    alignItems: 'center',
  },
  openLabsBtnText: {
    color: '#FFF',
    fontSize: 13,
    fontWeight: '900',
  },
});
