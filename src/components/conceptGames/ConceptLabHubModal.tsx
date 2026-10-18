import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import { COLORS, SPACING, BORDER_RADIUS, SHADOWS } from '../../constants/theme';
import { triggerHaptic } from '../../utils/haptics';
import { soundManager } from '../../utils/soundManager';
import { Grade } from '../../types';
import {
  CONCEPT_LABS_BY_GRADE,
  SCIENCE_STEM_LABS,
  ALL_CONCEPT_LABS,
  getGradeGroupKey,
  GradeGroupKey,
  ConceptLabItem,
} from '../../data/conceptLabsRegistry';
import { SuperKidCertificateModal } from './SuperKidCertificateModal';

const { width } = Dimensions.get('window');

interface ConceptLabHubModalProps {
  visible: boolean;
  onClose: () => void;
  userGrade: Grade;
  onSelectLab: (labId: string) => void;
  childName?: string;
  avatarEmoji?: string;
  avatarBadgeColor?: string;
  totalStars?: number;
  streakDays?: number;
}

type TabKey = GradeGroupKey | 'science_stem' | 'all';

export const ConceptLabHubModal: React.FC<ConceptLabHubModalProps> = ({
  visible,
  onClose,
  userGrade,
  onSelectLab,
  childName = 'Champ',
  avatarEmoji = '🦁',
  avatarBadgeColor = '#F59E0B',
  totalStars = 120,
  streakDays = 5,
}) => {
  const defaultTab = getGradeGroupKey(userGrade);
  const [selectedTab, setSelectedTab] = useState<TabKey>(defaultTab);
  const [showParentInfo, setShowParentInfo] = useState(false);
  const [showCertModal, setShowCertModal] = useState(false);

  const getFilteredLabs = (): ConceptLabItem[] => {
    if (selectedTab === 'all') return ALL_CONCEPT_LABS;
    if (selectedTab === 'science_stem') return SCIENCE_STEM_LABS;
    return CONCEPT_LABS_BY_GRADE[selectedTab] || CONCEPT_LABS_BY_GRADE.class_1_2;
  };

  const handleLaunch = (labId: string) => {
    soundManager.playPop();
    triggerHaptic('medium');
    onSelectLab(labId);
  };

  const labs = getFilteredLabs();

  return (
    <Modal visible={visible} animationType="slide" transparent onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.headerLeft}>
              <View style={styles.flaskIconBox}>
                <Text style={styles.flaskIcon}>🧪</Text>
              </View>
              <View>
                <Text style={styles.headerTitle}>STEM Concept Labs</Text>
                <Text style={styles.headerSub}>
                  Hands-On Practical Learning • खेल-खेल में सीखें
                </Text>
              </View>
            </View>

            <View style={styles.headerRight}>
              <TouchableOpacity
                style={styles.parentPill}
                onPress={() => setShowParentInfo((v) => !v)}
              >
                <Text style={styles.parentPillText}>👨‍🏫 Parents</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
                <Text style={styles.closeText}>✕</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Parent Pedagogical Guide Box */}
          {showParentInfo && (
            <View style={styles.parentBox}>
              <Text style={styles.parentTitle}>
                💡 Why Practical Concept Labs? (प्रैक्टिकल लर्निंग क्यों?)
              </Text>
              <Text style={styles.parentDesc}>
                बच्चे परिभाषाएं और फॉर्मूले रटने के बजाय जब खुद स्क्रीन पर तराजू का वजन बदलते हैं, घड़ी की सुइयां घुमाते हैं, पिज़्ज़ा के टुकड़े करते हैं, और चुंबक के पोल्स जोड़ते हैं — तो उनका कॉन्सेप्ट हमेशा के लिए पक्का हो जाता है।
              </Text>
            </View>
          )}

          {/* Holographic Super Kid STEM Passport */}
          <View style={styles.passportCard}>
            <View style={styles.passportHeader}>
              <View style={[styles.passportAvatarBox, { backgroundColor: avatarBadgeColor }]}>
                <Text style={styles.passportAvatarEmoji}>{avatarEmoji}</Text>
              </View>
              <View style={styles.passportInfo}>
                <View style={styles.passportTitleRow}>
                  <Text style={styles.passportName} numberOfLines={1}>{childName}</Text>
                  <View style={styles.passportCadetBadge}>
                    <Text style={styles.passportCadetText}>SUPER KID 🦸</Text>
                  </View>
                </View>
                <Text style={styles.passportRank}>Level 5 Quantum Cadet • Verified ID</Text>
              </View>
            </View>

            {/* Superpower Radar Bars */}
            <View style={styles.powersRow}>
              <View style={styles.powerItem}>
                <View style={styles.powerLabelRow}>
                  <Text style={styles.powerLabel}>🧠 Logic IQ</Text>
                  <Text style={styles.powerVal}>96%</Text>
                </View>
                <View style={styles.powerBarBg}>
                  <View style={[styles.powerBarFill, { width: '96%', backgroundColor: '#38BDF8' }]} />
                </View>
              </View>

              <View style={styles.powerItem}>
                <View style={styles.powerLabelRow}>
                  <Text style={styles.powerLabel}>⚡ Agility</Text>
                  <Text style={styles.powerVal}>92%</Text>
                </View>
                <View style={styles.powerBarBg}>
                  <View style={[styles.powerBarFill, { width: '92%', backgroundColor: '#FACC15' }]} />
                </View>
              </View>

              <View style={styles.powerItem}>
                <View style={styles.powerLabelRow}>
                  <Text style={styles.powerLabel}>🔬 STEM Sense</Text>
                  <Text style={styles.powerVal}>98%</Text>
                </View>
                <View style={styles.powerBarBg}>
                  <View style={[styles.powerBarFill, { width: '98%', backgroundColor: '#10B981' }]} />
                </View>
              </View>
            </View>

            {/* Passport Action Buttons */}
            <View style={styles.passportActionRow}>
              <TouchableOpacity
                style={styles.viewCertBtn}
                activeOpacity={0.85}
                onPress={() => {
                  soundManager.playFanfare();
                  triggerHaptic('medium');
                  setShowCertModal(true);
                }}
              >
                <Text style={styles.viewCertBtnText}>🏆 View STEM Diploma</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.brainBoosterBtn}
                activeOpacity={0.85}
                onPress={() => handleLaunch('speed_brain')}
              >
                <Text style={styles.brainBoosterBtnText}>⚡ 60s Brain Booster</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Grade / Category Filter Scroll */}
          <View style={styles.tabsContainer}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.tabsRow}>
              <TouchableOpacity
                style={[styles.tabPill, selectedTab === getGradeGroupKey(userGrade) && styles.tabPillActive]}
                onPress={() => {
                  triggerHaptic('light');
                  setSelectedTab(getGradeGroupKey(userGrade));
                }}
              >
                <Text style={[styles.tabText, selectedTab === getGradeGroupKey(userGrade) && styles.tabTextActive]}>
                  🎯 My Class Labs
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.tabPill, selectedTab === 'lkg_ukg' && styles.tabPillActive]}
                onPress={() => {
                  triggerHaptic('light');
                  setSelectedTab('lkg_ukg');
                }}
              >
                <Text style={[styles.tabText, selectedTab === 'lkg_ukg' && styles.tabTextActive]}>
                  👶 LKG & UKG
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.tabPill, selectedTab === 'class_1_2' && styles.tabPillActive]}
                onPress={() => {
                  triggerHaptic('light');
                  setSelectedTab('class_1_2');
                }}
              >
                <Text style={[styles.tabText, selectedTab === 'class_1_2' && styles.tabTextActive]}>
                  🎒 Class 1 & 2
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.tabPill, selectedTab === 'class_3_4' && styles.tabPillActive]}
                onPress={() => {
                  triggerHaptic('light');
                  setSelectedTab('class_3_4');
                }}
              >
                <Text style={[styles.tabText, selectedTab === 'class_3_4' && styles.tabTextActive]}>
                  🚀 Class 3 & 4
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.tabPill, selectedTab === 'class_5_6' && styles.tabPillActive]}
                onPress={() => {
                  triggerHaptic('light');
                  setSelectedTab('class_5_6');
                }}
              >
                <Text style={[styles.tabText, selectedTab === 'class_5_6' && styles.tabTextActive]}>
                  ⚡ Class 5 & 6
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.tabPill, selectedTab === 'science_stem' && styles.tabPillActive]}
                onPress={() => {
                  triggerHaptic('light');
                  setSelectedTab('science_stem');
                }}
              >
                <Text style={[styles.tabText, selectedTab === 'science_stem' && styles.tabTextActive]}>
                  🧲 Science & Optics
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.tabPill, selectedTab === 'all' && styles.tabPillActive]}
                onPress={() => {
                  triggerHaptic('light');
                  setSelectedTab('all');
                }}
              >
                <Text style={[styles.tabText, selectedTab === 'all' && styles.tabTextActive]}>
                  🌟 All 15 Labs
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>

          {/* Labs List */}
          <ScrollView contentContainerStyle={styles.labsScroll} showsVerticalScrollIndicator={false}>
            {labs.map((lab) => (
              <TouchableOpacity
                key={lab.id}
                style={[
                  styles.labCard,
                  { borderColor: lab.accentColor },
                ]}
                activeOpacity={0.88}
                onPress={() => handleLaunch(lab.id)}
              >
                <View style={[styles.labIconBox, { backgroundColor: lab.boxColor }]}>
                  <Text style={styles.labEmoji}>{lab.icon}</Text>
                </View>

                <View style={styles.labDetails}>
                  <View style={styles.badgeRow}>
                    <View style={[styles.ncertPill, { backgroundColor: `${lab.accentColor}25` }]}>
                      <Text style={[styles.ncertText, { color: lab.accentColor }]}>
                        {lab.badge}
                      </Text>
                    </View>
                    <View style={styles.levelsPill}>
                      <Text style={styles.levelsText}>8-10 Levels 🔬</Text>
                    </View>
                  </View>

                  <Text style={styles.labTitle}>{lab.title}</Text>
                  <Text style={styles.labSub}>{lab.subtitle}</Text>

                  <View style={styles.practicalNoteRow}>
                    <Text style={styles.practicalNoteText} numberOfLines={2}>
                      💡 {lab.pedagogicalOutcome.hindi}
                    </Text>
                  </View>
                </View>

                <View style={[styles.launchBtn, { backgroundColor: lab.accentColor }]}>
                  <Text style={styles.launchBtnText}>Enter ▶</Text>
                </View>
              </TouchableOpacity>
            ))}

            <View style={styles.footerSpace}>
              <Text style={styles.footerNote}>
                ✨ Aligned with NCERT CBSE Syllabus & NEP 2020 Experiential Learning
              </Text>
            </View>
          </ScrollView>

          {/* Super Kid Certificate Modal */}
          <SuperKidCertificateModal
            visible={showCertModal}
            onClose={() => setShowCertModal(false)}
            childName={childName}
            grade={userGrade}
            avatarEmoji={avatarEmoji}
            avatarBadgeColor={avatarBadgeColor}
            totalStars={totalStars}
            streakDays={streakDays}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.85)',
    justifyContent: 'flex-end',
  },
  container: {
    height: '92%',
    backgroundColor: '#0F172A',
    borderTopLeftRadius: BORDER_RADIUS.xl,
    borderTopRightRadius: BORDER_RADIUS.xl,
    borderWidth: 1,
    borderColor: '#334155',
    paddingTop: SPACING.md,
    paddingHorizontal: SPACING.md,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.sm,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  flaskIconBox: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#065F46',
    borderWidth: 1.5,
    borderColor: '#10B981',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flaskIcon: {
    fontSize: 24,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '900',
  },
  headerSub: {
    color: '#94A3B8',
    fontSize: 11,
    fontWeight: '600',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  parentPill: {
    backgroundColor: '#1E293B',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: BORDER_RADIUS.full,
    borderWidth: 1,
    borderColor: '#60A5FA',
  },
  parentPillText: {
    color: '#93C5FD',
    fontSize: 12,
    fontWeight: '700',
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
    padding: 12,
    marginBottom: SPACING.sm,
    borderLeftWidth: 4,
    borderLeftColor: '#10B981',
  },
  parentTitle: {
    color: '#34D399',
    fontSize: 13,
    fontWeight: '800',
    marginBottom: 4,
  },
  parentDesc: {
    color: '#E2E8F0',
    fontSize: 12,
    lineHeight: 18,
  },
  // Super Kid Passport Styles
  passportCard: {
    backgroundColor: '#1E293B',
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.md,
    marginBottom: SPACING.xs,
    borderWidth: 1.5,
    borderColor: '#38BDF8',
    ...SHADOWS.card,
  },
  passportHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 10,
  },
  passportAvatarBox: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#F59E0B',
  },
  passportAvatarEmoji: {
    fontSize: 24,
  },
  passportInfo: {
    flex: 1,
  },
  passportTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  passportName: {
    color: '#F8FAFC',
    fontSize: 16,
    fontWeight: '900',
    maxWidth: 160,
  },
  passportCadetBadge: {
    backgroundColor: 'rgba(245, 158, 11, 0.2)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#F59E0B',
  },
  passportCadetText: {
    color: '#FCD34D',
    fontSize: 9,
    fontWeight: '900',
  },
  passportRank: {
    color: '#94A3B8',
    fontSize: 11,
    fontWeight: '600',
    marginTop: 2,
  },
  powersRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
    marginBottom: 10,
  },
  powerItem: {
    flex: 1,
    backgroundColor: '#0F172A',
    padding: 6,
    borderRadius: BORDER_RADIUS.sm,
    borderWidth: 1,
    borderColor: '#334155',
  },
  powerLabelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  powerLabel: {
    color: '#CBD5E1',
    fontSize: 9,
    fontWeight: '800',
  },
  powerVal: {
    color: '#F8FAFC',
    fontSize: 9,
    fontWeight: '900',
  },
  powerBarBg: {
    height: 4,
    backgroundColor: '#334155',
    borderRadius: 2,
    overflow: 'hidden',
  },
  powerBarFill: {
    height: '100%',
    borderRadius: 2,
  },
  passportActionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
    marginTop: 2,
  },
  viewCertBtn: {
    flex: 1,
    backgroundColor: '#D97706',
    paddingVertical: 8,
    borderRadius: BORDER_RADIUS.md,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#B45309',
  },
  viewCertBtnText: {
    color: '#FFF',
    fontSize: 11,
    fontWeight: '900',
  },
  brainBoosterBtn: {
    flex: 1,
    backgroundColor: '#0284C7',
    paddingVertical: 8,
    borderRadius: BORDER_RADIUS.md,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#0369A1',
  },
  brainBoosterBtnText: {
    color: '#FFF',
    fontSize: 11,
    fontWeight: '900',
  },
  tabsContainer: {
    marginVertical: SPACING.xs,
  },
  tabsRow: {
    gap: 8,
    paddingVertical: 4,
  },
  tabPill: {
    backgroundColor: '#1E293B',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: BORDER_RADIUS.full,
    borderWidth: 1,
    borderColor: '#334155',
  },
  tabPillActive: {
    backgroundColor: '#2563EB',
    borderColor: '#60A5FA',
  },
  tabText: {
    color: '#94A3B8',
    fontSize: 12,
    fontWeight: '700',
  },
  tabTextActive: {
    color: '#FFFFFF',
    fontWeight: '900',
  },
  labsScroll: {
    paddingVertical: SPACING.sm,
    gap: 10,
  },
  labCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E293B',
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.md,
    borderWidth: 1.5,
    ...SHADOWS.card,
  },
  labIconBox: {
    width: 52,
    height: 52,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING.md,
  },
  labEmoji: {
    fontSize: 28,
  },
  labDetails: {
    flex: 1,
  },
  badgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 4,
  },
  ncertPill: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  ncertText: {
    fontSize: 10,
    fontWeight: '800',
  },
  levelsPill: {
    backgroundColor: '#334155',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  levelsText: {
    color: '#E2E8F0',
    fontSize: 10,
    fontWeight: '700',
  },
  labTitle: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '800',
    marginBottom: 2,
  },
  labSub: {
    color: '#94A3B8',
    fontSize: 12,
    marginBottom: 4,
  },
  practicalNoteRow: {
    marginTop: 2,
  },
  practicalNoteText: {
    color: '#CBD5E1',
    fontSize: 11,
    fontStyle: 'italic',
    lineHeight: 15,
  },
  launchBtn: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: BORDER_RADIUS.md,
    marginLeft: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  launchBtnText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '900',
  },
  footerSpace: {
    alignItems: 'center',
    paddingVertical: SPACING.lg,
  },
  footerNote: {
    color: '#64748B',
    fontSize: 11,
    textAlign: 'center',
  },
});
