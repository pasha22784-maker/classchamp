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
import { Grade, AppLanguage } from '../../types';
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
  activeLang?: AppLanguage;
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
  activeLang = 'en',
}) => {
  const isHindi = activeLang === 'hi';
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
                <Text style={styles.headerTitle}>
                  {isHindi ? 'एसटीईएम कॉन्सेप्ट लैब' : 'STEM Concept Labs'}
                </Text>
                <Text style={styles.headerSub}>
                  {isHindi ? 'खेल-खेल में सीखें • प्रैक्टिकल लर्निंग' : 'Hands-On Practical Learning • STEM Labs'}
                </Text>
              </View>
            </View>

            <View style={styles.headerRight}>
              <TouchableOpacity
                style={styles.parentPill}
                onPress={() => setShowParentInfo((v) => !v)}
              >
                <Text style={styles.parentPillText}>
                  {isHindi ? '👨‍🏫 अभिभावक' : '👨‍🏫 Parents'}
                </Text>
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
                {isHindi ? '💡 प्रैक्टिकल लर्निंग क्यों जरूरी है?' : '💡 Why Practical Concept Labs?'}
              </Text>
              <Text style={styles.parentDesc}>
                {isHindi
                  ? 'बच्चे परिभाषाएं और फॉर्मूले रटने के बजाय जब खुद स्क्रीन पर तराजू का वजन बदलते हैं, घड़ी की सुइयां घुमाते हैं, पिज़्ज़ा के टुकड़े करते हैं, और चुंबक के पोल्स जोड़ते हैं — तो उनका कॉन्सेप्ट हमेशा के लिए पक्का हो जाता है।'
                  : 'Instead of rote memorization, children interact directly with balance weights, clock hands, pizza fractions, and magnetic poles — building deep conceptual mastery.'}
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
                <Text style={styles.viewCertBtnText}>
                  {isHindi ? '🏆 प्रमाण-पत्र देखें' : '🏆 View STEM Diploma'}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.brainBoosterBtn}
                activeOpacity={0.85}
                onPress={() => handleLaunch('speed_brain')}
              >
                <Text style={styles.brainBoosterBtnText}>
                  {isHindi ? '⚡ 60s ब्रेन बूस्टर' : '⚡ 60s Brain Booster'}
                </Text>
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
                  {isHindi ? '🎯 मेरी क्लास' : '🎯 My Class Labs'}
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
                  {isHindi ? '👶 LKG और UKG' : '👶 LKG & UKG'}
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
                  {isHindi ? '🎒 कक्षा 1 व 2' : '🎒 Class 1 & 2'}
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
                  {isHindi ? '🚀 कक्षा 3 व 4' : '🚀 Class 3 & 4'}
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
                  {isHindi ? '⚡ कक्षा 5 व 6' : '⚡ Class 5 & 6'}
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
                  {isHindi ? '🧲 विज्ञान और प्रकाशिकी' : '🧲 Science & Optics'}
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
                  {isHindi ? '🌟 सभी 15 लैब' : '🌟 All 15 Labs'}
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
                      <Text style={styles.levelsText}>
                        {isHindi ? '8-10 स्तर 🔬' : '8-10 Levels 🔬'}
                      </Text>
                    </View>
                  </View>

                  <Text style={styles.labTitle}>{lab.title}</Text>
                  <Text style={styles.labSub}>{lab.subtitle}</Text>

                  <View style={styles.practicalNoteRow}>
                    <Text style={styles.practicalNoteText} numberOfLines={2}>
                      💡 {isHindi ? lab.pedagogicalOutcome.hindi : lab.pedagogicalOutcome.english}
                    </Text>
                  </View>
                </View>

                <View style={[styles.launchBtn, { backgroundColor: lab.accentColor }]}>
                  <Text style={styles.launchBtnText}>
                    {isHindi ? 'प्रवेश ▶' : 'Enter ▶'}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}

            <View style={styles.footerSpace}>
              <Text style={styles.footerNote}>
                {isHindi
                  ? '✨ सीबीएसई एनसीईआरटी पाठ्यक्रम और एनईपी 2020 प्रायोगिक शिक्षा'
                  : '✨ Aligned with NCERT CBSE Syllabus & NEP 2020 Experiential Learning'}
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
    backgroundColor: 'rgba(15, 23, 42, 0.65)',
    justifyContent: 'flex-end',
  },
  container: {
    height: '92%',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    borderWidth: 1.5,
    borderColor: '#A7F3D0',
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
    borderRadius: 14,
    backgroundColor: '#ECFDF5',
    borderWidth: 2,
    borderColor: '#10B981',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flaskIcon: {
    fontSize: 24,
  },
  headerTitle: {
    color: '#064E3B',
    fontSize: 18,
    fontWeight: '900',
  },
  headerSub: {
    color: '#047857',
    fontSize: 11,
    fontWeight: '700',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  parentPill: {
    backgroundColor: '#EFF6FF',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: BORDER_RADIUS.full,
    borderWidth: 1.5,
    borderColor: '#93C5FD',
  },
  parentPillText: {
    color: '#1D4ED8',
    fontSize: 12,
    fontWeight: '700',
  },
  closeBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F1F5F9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeText: {
    color: '#475569',
    fontSize: 16,
    fontWeight: '700',
  },
  parentBox: {
    backgroundColor: '#F0FDF4',
    borderRadius: 14,
    padding: 12,
    marginBottom: SPACING.sm,
    borderLeftWidth: 4,
    borderLeftColor: '#10B981',
    borderWidth: 1,
    borderColor: '#BBF7D0',
  },
  parentTitle: {
    color: '#166534',
    fontSize: 13,
    fontWeight: '800',
    marginBottom: 4,
  },
  parentDesc: {
    color: '#14532D',
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '500',
  },
  // Super Kid Passport Styles
  passportCard: {
    backgroundColor: '#F0FDF4',
    borderRadius: 20,
    padding: SPACING.md,
    marginBottom: SPACING.xs,
    borderWidth: 2,
    borderColor: '#86EFAC',
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
    backgroundColor: '#FFFFFF',
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
    color: '#064E3B',
    fontSize: 16,
    fontWeight: '900',
    maxWidth: 160,
  },
  passportCadetBadge: {
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: '#F59E0B',
  },
  passportCadetText: {
    color: '#92400E',
    fontSize: 9,
    fontWeight: '900',
  },
  passportRank: {
    color: '#047857',
    fontSize: 11,
    fontWeight: '700',
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
    backgroundColor: '#FFFFFF',
    padding: 8,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#D1FAE5',
  },
  powerLabelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  powerLabel: {
    color: '#065F46',
    fontSize: 9,
    fontWeight: '800',
  },
  powerVal: {
    color: '#064E3B',
    fontSize: 10,
    fontWeight: '900',
  },
  powerBarBg: {
    height: 4,
    backgroundColor: '#E2E8F0',
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
    backgroundColor: '#F59E0B',
    paddingVertical: 9,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#D97706',
  },
  viewCertBtnText: {
    color: '#FFF',
    fontSize: 11,
    fontWeight: '900',
  },
  brainBoosterBtn: {
    flex: 1,
    backgroundColor: '#0284C7',
    paddingVertical: 9,
    borderRadius: 12,
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
    backgroundColor: '#F1F5F9',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: BORDER_RADIUS.full,
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
  },
  tabPillActive: {
    backgroundColor: '#10B981',
    borderColor: '#059669',
  },
  tabText: {
    color: '#64748B',
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
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: SPACING.md,
    borderWidth: 2,
    borderColor: '#E2E8F0',
    shadowColor: '#64748B',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  labIconBox: {
    width: 52,
    height: 52,
    borderRadius: 16,
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
    borderRadius: 6,
  },
  ncertText: {
    fontSize: 10,
    fontWeight: '800',
  },
  levelsPill: {
    backgroundColor: '#F1F5F9',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
  },
  levelsText: {
    color: '#475569',
    fontSize: 10,
    fontWeight: '700',
  },
  labTitle: {
    color: '#0F172A',
    fontSize: 15,
    fontWeight: '800',
    marginBottom: 2,
  },
  labSub: {
    color: '#475569',
    fontSize: 12,
    marginBottom: 4,
    fontWeight: '600',
  },
  practicalNoteRow: {
    marginTop: 2,
  },
  practicalNoteText: {
    color: '#059669',
    fontSize: 11,
    fontStyle: 'italic',
    lineHeight: 15,
    fontWeight: '600',
  },
  launchBtn: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 12,
    marginLeft: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 3,
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
    fontWeight: '600',
  },
});
