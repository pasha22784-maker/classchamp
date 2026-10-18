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
import { Grade, AppLanguage } from '../../types';
import { COGNITIVE_PILLARS } from '../../data/cognitiveEngine';
import { useUserStore } from '../../store/useUserStore';

interface BrainDevelopmentMatrixModalProps {
  visible: boolean;
  onClose: () => void;
  userGrade: Grade;
  onOpenLab: () => void;
  activeLang?: AppLanguage;
}

export const BrainDevelopmentMatrixModal: React.FC<BrainDevelopmentMatrixModalProps> = ({
  visible,
  onClose,
  userGrade,
  onOpenLab,
  activeLang = 'en',
}) => {
  const isHindi = activeLang === 'hi';
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
                <Text style={styles.topBarTitle}>
                  {isHindi ? 'सुपर किड बौद्धिक विकास मैट्रिक्स' : 'Super Kid Cognitive Matrix'}
                </Text>
                <Text style={styles.topBarSub}>
                  {isHindi ? 'वैज्ञानिक मस्तिष्क विकास रिपोर्ट' : 'Scientific Brain Growth Report'}
                </Text>
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
                  <Text style={styles.overallTitle}>
                    {isHindi ? `${profile.name} का बौद्धिक सूचकांक` : `${profile.name}’s Cognitive Index`}
                  </Text>
                  <Text style={styles.overallSub}>
                    {isHindi ? `कक्षा ${userGrade} विकासात्मक मानक` : `Class ${userGrade} Developmental Benchmark`}
                  </Text>
                </View>
                <View style={styles.scoreCircle}>
                  <Text style={styles.scoreCircleVal}>{avgScore}</Text>
                  <Text style={styles.scoreCircleLabel}>INDEX</Text>
                </View>
              </View>

              <View style={styles.percentileBadgeRow}>
                <View style={styles.percentileBadge}>
                  <Text style={styles.percentileBadgeText}>
                    {isHindi ? '🏆 शीर्ष 3% बौद्धिक स्तर' : '🏆 TOP 3% COGNITIVE PERCENTILE'}
                  </Text>
                </View>
              </View>

              <Text style={styles.overallDesc}>
                {isHindi
                  ? 'रटने की बजाय खेल-खेल में 4 मुख्य मानसिक स्तंभों (तर्क, स्थानिक समझ, स्मृति, समस्या निवारण) का संतुलित विकास हो रहा है।'
                  : 'Balanced cognitive growth across 4 core mental pillars (Logic, Spatial, Memory, Problem Solving) through hands-on practice.'}
              </Text>
            </View>

            {/* 4 Pillars Breakdown */}
            <Text style={styles.sectionHeader}>
              {isHindi ? '4 मुख्य बौद्धिक विकास स्तंभ' : '4 CORE DEVELOPMENTAL PILLARS'}
            </Text>

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
                        <Text style={styles.pillarNameEn}>
                          {isHindi ? pillar.nameHindi : pillar.nameEnglish}
                        </Text>
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

                    <Text style={styles.pillarDesc}>
                      {pillar.description}
                    </Text>

                    <View style={styles.pedagogyBox}>
                      <Text style={styles.pedagogyText}>
                        💡 <Text style={{ fontWeight: '800' }}>{isHindi ? 'प्रभाव:' : 'Impact:'}</Text> {pillar.pedagogicalBenefit}
                      </Text>
                    </View>
                  </View>
                );
              })}
            </View>

            {/* Parent Recommendation */}
            <View style={styles.recCard}>
              <Text style={styles.recTitle}>
                {isHindi ? '👨‍🏫 अभिभावकों के लिए सिफ़ारिश' : '👨‍🏫 Recommended Next Step for Parents'}
              </Text>
              <Text style={styles.recDesc}>
                {isHindi
                  ? 'अपने बच्चे की तार्किक और स्थानिक क्षमता को 100% तक पहुँचाने के लिए रोज़ाना 10 मिनट Concept Labs में प्रयोग करवाएँ।'
                  : 'To maximize your child’s logical and spatial thinking to 100%, encourage 10 minutes of daily exploration in Concept Labs.'}
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
                <Text style={styles.openLabsBtnText}>
                  {isHindi ? 'प्रैक्टिकल कॉन्सेप्ट लैब खोलें 🔬' : 'Open Practical Concept Labs 🔬'}
                </Text>
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
    backgroundColor: 'rgba(15, 23, 42, 0.65)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '94%',
    maxHeight: '92%',
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    borderWidth: 2.5,
    borderColor: '#0284C7',
    overflow: 'hidden',
    ...SHADOWS.large,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    backgroundColor: '#F0F9FF',
    borderBottomWidth: 1.5,
    borderBottomColor: '#BAE6FD',
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
    color: '#0369A1',
    fontSize: 16,
    fontWeight: '900',
  },
  topBarSub: {
    color: '#0284C7',
    fontSize: 11,
    fontWeight: '700',
  },
  closeBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#E0F2FE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeText: {
    color: '#0284C7',
    fontSize: 16,
    fontWeight: 'bold',
  },
  scrollContent: {
    padding: SPACING.md,
  },
  overallBanner: {
    backgroundColor: '#FFFBEB',
    borderRadius: 20,
    padding: SPACING.md,
    borderWidth: 2,
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
    color: '#78350F',
    fontSize: 17,
    fontWeight: '900',
  },
  overallSub: {
    color: '#92400E',
    fontSize: 12,
    marginTop: 2,
    fontWeight: '700',
  },
  scoreCircle: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: '#F59E0B',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#D97706',
  },
  scoreCircleVal: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '900',
  },
  scoreCircleLabel: {
    color: '#FFFFFF',
    fontSize: 8,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  percentileBadgeRow: {
    marginTop: 8,
    marginBottom: 6,
  },
  percentileBadge: {
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    alignSelf: 'flex-start',
    borderWidth: 1.5,
    borderColor: '#F59E0B',
  },
  percentileBadgeText: {
    color: '#92400E',
    fontSize: 10,
    fontWeight: '900',
  },
  overallDesc: {
    color: '#78350F',
    fontSize: 12,
    lineHeight: 17,
    marginTop: 6,
    fontWeight: '600',
  },
  sectionHeader: {
    color: '#64748B',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.8,
    marginBottom: 10,
    textTransform: 'uppercase',
  },
  pillarsList: {
    gap: 10,
    marginBottom: SPACING.md,
  },
  pillarCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 12,
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    shadowColor: '#64748B',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  pillarHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 8,
  },
  pillarIconBox: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pillarEmoji: {
    fontSize: 20,
  },
  pillarTitleCol: {
    flex: 1,
  },
  pillarNameEn: {
    color: '#0F172A',
    fontSize: 14,
    fontWeight: '900',
  },
  pillarNameHi: {
    color: '#64748B',
    fontSize: 11,
    fontWeight: '600',
  },
  pillarScoreText: {
    fontSize: 16,
    fontWeight: '900',
  },
  barBg: {
    width: '100%',
    height: 7,
    backgroundColor: '#E2E8F0',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 8,
  },
  barFill: {
    height: '100%',
    borderRadius: 4,
  },
  pillarDesc: {
    color: '#334155',
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '500',
  },
  pedagogyBox: {
    backgroundColor: '#F8FAFC',
    padding: 8,
    borderRadius: 8,
    marginTop: 8,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  pedagogyText: {
    color: '#475569',
    fontSize: 11,
    lineHeight: 15,
    fontWeight: '600',
  },
  recCard: {
    backgroundColor: '#ECFDF5',
    borderRadius: 20,
    padding: SPACING.md,
    borderWidth: 2,
    borderColor: '#A7F3D0',
    marginBottom: SPACING.md,
  },
  recTitle: {
    color: '#065F46',
    fontSize: 14,
    fontWeight: '900',
    marginBottom: 4,
  },
  recDesc: {
    color: '#047857',
    fontSize: 12,
    lineHeight: 17,
    marginBottom: 12,
    fontWeight: '600',
  },
  openLabsBtn: {
    backgroundColor: '#10B981',
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
    borderBottomWidth: 4,
    borderBottomColor: '#059669',
  },
  openLabsBtnText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '900',
  },
});
