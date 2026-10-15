import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, SPACING, BORDER_RADIUS, SHADOWS } from '../constants/theme';
import { KID_AVATARS, GRADE_OPTIONS } from '../constants/avatars';
import {
  ChampBadge,
  ChampButton,
  ChampCard,
  ChampHeader,
  PaywallModal,
} from '../components/common';
import { useUserStore, getTodayDateString } from '../store/useUserStore';
import { getChaptersForGradeSubject, NCERT_BOOKS } from '../data/chaptersData';
import { Subject, Grade, ChapterLesson } from '../types';
import { triggerHaptic } from '../utils/haptics';

interface DashboardScreenProps {
  onStartQuiz: (subject: Subject, chapterTitle?: string) => void;
  onOpenChapterVault: (subject?: Subject) => void;
  onOpenRoadmap365: () => void;
  onOpenParentZone: () => void;
}

export const DashboardScreen: React.FC<DashboardScreenProps> = ({
  onStartQuiz,
  onOpenChapterVault,
  onOpenRoadmap365,
  onOpenParentZone,
}) => {
  const { profile, loadProfile, setAvatar } = useUserStore();
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [showPaywallModal, setShowPaywallModal] = useState(false);

  useEffect(() => {
    loadProfile();
  }, []);

  const todayStr = getTodayDateString();
  const isCompletedToday = profile.historyDatesCompleted.includes(todayStr);
  const currentAvatar = KID_AVATARS.find((a) => a.id === profile.avatarId) || KID_AVATARS[0];
  const gradeConfig = GRADE_OPTIONS.find((g) => g.grade === profile.grade) || GRADE_OPTIONS[0];
  const bookInfo = NCERT_BOOKS[profile.grade] || {
    mathsBook: 'NCERT Mathematics',
    englishBook: 'NCERT English',
    hindiBook: 'NCERT Hindi',
  };

  // Helper to fetch where the student left off for any subject
  const getSubjectResumeInfo = (subj: Subject) => {
    const chapters = getChaptersForGradeSubject(profile.grade, subj);
    const savedLessonTitle = profile.lastLessonBySubject?.[subj];
    const found = savedLessonTitle
      ? chapters.find((c) => c.title === savedLessonTitle)
      : null;

    if (found) {
      return {
        lesson: found,
        isResume: true,
      };
    }

    return {
      lesson: chapters[0] || ({
        id: `default_${subj}`,
        number: 1,
        title: `${subj === 'maths' ? 'Mathematics' : subj === 'english' ? 'English' : 'Hindi'} Lesson 1`,
        grade: profile.grade,
        subject: subj,
        icon: subj === 'maths' ? '📐' : subj === 'english' ? '📚' : '🇮🇳',
        conceptSummary: 'NCERT Textbook Lesson',
      } as ChapterLesson),
      isResume: false,
    };
  };

  const mathsInfo = getSubjectResumeInfo('maths');
  const englishInfo = getSubjectResumeInfo('english');
  const hindiInfo = getSubjectResumeInfo('hindi');

  const handleSubjectClick = (subj: Subject, lessonTitle: string) => {
    if (!profile.isPro && isCompletedToday) {
      setShowPaywallModal(true);
    } else {
      triggerHaptic('medium');
      onStartQuiz(subj, lessonTitle);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.primaryDark} />

      {/* Top Header — Tap Profile / User Icon to open Settings */}
      <ChampHeader
        title={`Hi, ${profile.name}! 👋`}
        subtitle={`${gradeConfig.label} • NCERT`}
        streakDays={profile.currentStreak}
        totalStars={profile.totalStars}
        avatarEmoji={currentAvatar.emoji}
        onPressAvatar={() => {
          triggerHaptic('light');
          setShowSettingsModal(true);
        }}
      />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Top Motivational Streak Card */}
        <ChampCard variant="gold" style={styles.streakBanner}>
          <View style={styles.streakRow}>
            <View style={styles.streakFlameCircle}>
              <Text style={styles.streakFlameEmoji}>🔥</Text>
            </View>
            <View style={styles.streakTextCol}>
              <View style={styles.streakBadgeRow}>
                <ChampBadge
                  label={`${profile.currentStreak} Day Streak`}
                  variant="gold"
                  size="sm"
                />
                <ChampBadge
                  label={isCompletedToday ? 'Completed Today! 🌟' : 'Daily Goal: 10 Min'}
                  variant={isCompletedToday ? 'success' : 'primary'}
                  size="sm"
                />
              </View>
              <Text style={styles.streakHeading}>
                {isCompletedToday
                  ? 'Great Job! Today’s Streak Safe 🌟'
                  : 'Practice 10 Mins Today! 🚀'}
              </Text>
              <Text style={styles.streakSub}>
                {isCompletedToday
                  ? 'You’ve practiced today! Continue learning or resume any subject below.'
                  : 'Complete a quick 10-min quiz in any subject to keep your streak alive!'}
              </Text>
            </View>
          </View>
        </ChampCard>

        {/* Section Heading */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Your 3 Subjects</Text>
          <Text style={styles.sectionSubtitle}>
            100% NCERT • Resumes where you left off
          </Text>
        </View>

        {/* 1. Mathematics Card */}
        <ChampCard style={styles.subjectCard} shadow="medium">
          <View style={styles.cardTopRow}>
            <View style={[styles.subjectIconBox, { backgroundColor: '#DBEAFE' }]}>
              <Text style={styles.subjectEmoji}>📐</Text>
            </View>
            <View style={styles.subjectHeaderInfo}>
              <View style={styles.pillRow}>
                <ChampBadge label="Mathematics" variant="primary" size="sm" />
                <ChampBadge
                  label={mathsInfo.isResume ? 'Resume Lesson ▶' : 'Lesson 1'}
                  variant="gold"
                  size="sm"
                />
              </View>
              <Text style={styles.bookTitle} numberOfLines={1}>
                {bookInfo.mathsBook}
              </Text>
            </View>
          </View>

          <View style={styles.lessonInfoBox}>
            <Text style={styles.lessonNumber}>
              Lesson {mathsInfo.lesson.number} {mathsInfo.lesson.icon}
            </Text>
            <Text style={styles.lessonTitle}>{mathsInfo.lesson.title}</Text>
            <Text style={styles.lessonConcept}>{mathsInfo.lesson.conceptSummary}</Text>
          </View>

          <ChampButton
            title={mathsInfo.isResume ? 'Continue Maths ▶' : 'Start Maths Lesson 1 🚀'}
            icon="📐"
            variant="primary"
            size="md"
            onPress={() => handleSubjectClick('maths', mathsInfo.lesson.title)}
            style={styles.actionBtn}
          />
        </ChampCard>

        {/* 2. English Card */}
        <ChampCard style={styles.subjectCard} shadow="medium">
          <View style={styles.cardTopRow}>
            <View style={[styles.subjectIconBox, { backgroundColor: '#FEF3C7' }]}>
              <Text style={styles.subjectEmoji}>📚</Text>
            </View>
            <View style={styles.subjectHeaderInfo}>
              <View style={styles.pillRow}>
                <ChampBadge label="English Grammar" variant="gold" size="sm" />
                <ChampBadge
                  label={englishInfo.isResume ? 'Resume Lesson ▶' : 'Lesson 1'}
                  variant="primary"
                  size="sm"
                />
              </View>
              <Text style={styles.bookTitle} numberOfLines={1}>
                {bookInfo.englishBook}
              </Text>
            </View>
          </View>

          <View style={styles.lessonInfoBox}>
            <Text style={styles.lessonNumber}>
              Lesson {englishInfo.lesson.number} {englishInfo.lesson.icon}
            </Text>
            <Text style={styles.lessonTitle}>{englishInfo.lesson.title}</Text>
            <Text style={styles.lessonConcept}>{englishInfo.lesson.conceptSummary}</Text>
          </View>

          <ChampButton
            title={englishInfo.isResume ? 'Continue English ▶' : 'Start English Lesson 1 ✨'}
            icon="📚"
            variant="gold"
            size="md"
            onPress={() => handleSubjectClick('english', englishInfo.lesson.title)}
            style={styles.actionBtn}
          />
        </ChampCard>

        {/* 3. Hindi Card */}
        <ChampCard style={styles.subjectCard} shadow="medium">
          <View style={styles.cardTopRow}>
            <View style={[styles.subjectIconBox, { backgroundColor: '#DCFCE7' }]}>
              <Text style={styles.subjectEmoji}>🇮🇳</Text>
            </View>
            <View style={styles.subjectHeaderInfo}>
              <View style={styles.pillRow}>
                <ChampBadge label="हिंदी व्याकरण (Hindi)" variant="success" size="sm" />
                <ChampBadge
                  label={hindiInfo.isResume ? 'Resume Lesson ▶' : 'Lesson 1'}
                  variant="gold"
                  size="sm"
                />
              </View>
              <Text style={styles.bookTitle} numberOfLines={1}>
                {bookInfo.hindiBook}
              </Text>
            </View>
          </View>

          <View style={styles.lessonInfoBox}>
            <Text style={styles.lessonNumber}>
              पाठ {hindiInfo.lesson.number} {hindiInfo.lesson.icon}
            </Text>
            <Text style={styles.lessonTitle}>{hindiInfo.lesson.title}</Text>
            <Text style={styles.lessonConcept}>{hindiInfo.lesson.conceptSummary}</Text>
          </View>

          <ChampButton
            title={hindiInfo.isResume ? 'Continue Hindi ▶' : 'Start Hindi Lesson 1 🪶'}
            icon="🇮🇳"
            variant="success"
            size="md"
            onPress={() => handleSubjectClick('hindi', hindiInfo.lesson.title)}
            style={styles.actionBtn}
          />
        </ChampCard>
      </ScrollView>

      {/* Profile & Settings Modal — Triggered when clicking user avatar / Hi Champ */}
      <Modal
        visible={showSettingsModal}
        animationType="slide"
        transparent
        onRequestClose={() => setShowSettingsModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {/* Modal Header */}
            <View style={styles.modalHeader}>
              <View style={styles.modalAvatarRow}>
                <View
                  style={[
                    styles.largeAvatarBubble,
                    { backgroundColor: currentAvatar.badgeColor },
                  ]}
                >
                  <Text style={styles.largeAvatarEmoji}>{currentAvatar.emoji}</Text>
                </View>
                <View>
                  <Text style={styles.modalUserName}>{profile.name} 👋</Text>
                  <Text style={styles.modalUserClass}>{gradeConfig.label} (CBSE/NCERT)</Text>
                  <View style={styles.modalStatsRow}>
                    <Text style={styles.modalStatItem}>⭐ {profile.totalStars} Stars</Text>
                    <Text style={styles.modalStatItem}>🔥 {profile.currentStreak} Streak</Text>
                    <Text style={styles.modalStatItem}>🏆 {profile.totalTrophies} Trophies</Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => setShowSettingsModal(false)}
                style={styles.closeBtn}
              >
                <Text style={styles.closeBtnText}>✕</Text>
              </TouchableOpacity>
            </View>

            {/* Avatar Selector */}
            <Text style={styles.sheetSectionTitle}>Choose Avatar Mascot:</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.avatarScroll}>
              {KID_AVATARS.map((avatar) => {
                const isSelected = avatar.id === profile.avatarId;
                return (
                  <TouchableOpacity
                    key={avatar.id}
                    onPress={() => {
                      triggerHaptic('light');
                      setAvatar(avatar.id);
                    }}
                    style={[
                      styles.avatarOption,
                      isSelected && styles.avatarOptionSelected,
                      { backgroundColor: avatar.badgeColor },
                    ]}
                  >
                    <Text style={styles.avatarOptionEmoji}>{avatar.emoji}</Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>

            {/* Menu Action Items */}
            <View style={styles.menuItemsList}>
              {/* Class Switcher (Parent Protected) */}
              <TouchableOpacity
                style={styles.menuItemRow}
                onPress={() => {
                  setShowSettingsModal(false);
                  onOpenParentZone();
                }}
              >
                <View style={[styles.menuItemIcon, { backgroundColor: '#FEE2E2' }]}>
                  <Text style={{ fontSize: 20 }}>🔒</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.menuItemTitle}>Change Class ({gradeConfig.label})</Text>
                  <Text style={styles.menuItemSub}>Protected by Parent Gate</Text>
                </View>
                <Text style={styles.menuItemArrow}>→</Text>
              </TouchableOpacity>

              {/* 365-Day Annual Roadmap */}
              <TouchableOpacity
                style={styles.menuItemRow}
                onPress={() => {
                  setShowSettingsModal(false);
                  onOpenRoadmap365();
                }}
              >
                <View style={[styles.menuItemIcon, { backgroundColor: '#FEF3C7' }]}>
                  <Text style={{ fontSize: 20 }}>🗓️</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.menuItemTitle}>365-Day Annual Roadmap</Text>
                  <Text style={styles.menuItemSub}>Full 52-week curriculum plan</Text>
                </View>
                <Text style={styles.menuItemArrow}>→</Text>
              </TouchableOpacity>

              {/* NCERT Chapter Vault */}
              <TouchableOpacity
                style={styles.menuItemRow}
                onPress={() => {
                  setShowSettingsModal(false);
                  onOpenChapterVault('maths');
                }}
              >
                <View style={[styles.menuItemIcon, { backgroundColor: '#DBEAFE' }]}>
                  <Text style={{ fontSize: 20 }}>📚</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.menuItemTitle}>NCERT Chapter Vault</Text>
                  <Text style={styles.menuItemSub}>Browse all textbook chapters</Text>
                </View>
                <Text style={styles.menuItemArrow}>→</Text>
              </TouchableOpacity>

              {/* Parent Zone Settings */}
              <TouchableOpacity
                style={styles.menuItemRow}
                onPress={() => {
                  setShowSettingsModal(false);
                  onOpenParentZone();
                }}
              >
                <View style={[styles.menuItemIcon, { backgroundColor: '#F3E8FF' }]}>
                  <Text style={{ fontSize: 20 }}>⚙️</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.menuItemTitle}>Parent Zone & Settings</Text>
                  <Text style={styles.menuItemSub}>Sound, notifications & reset</Text>
                </View>
                <Text style={styles.menuItemArrow}>→</Text>
              </TouchableOpacity>
            </View>

            {/* Close Button */}
            <ChampButton
              title="Back to Dashboard"
              variant="outline"
              size="md"
              onPress={() => setShowSettingsModal(false)}
              style={{ marginTop: SPACING.md }}
            />
          </View>
        </View>
      </Modal>

      {/* Paywall Modal */}
      <PaywallModal
        visible={showPaywallModal}
        onClose={() => setShowPaywallModal(false)}
        onUpgradeSuccess={() => {
          setShowPaywallModal(false);
          useUserStore.getState().setProStatus(true);
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContent: {
    padding: SPACING.md,
    paddingBottom: SPACING.xxl * 2,
  },
  streakBanner: {
    marginBottom: SPACING.md,
  },
  streakRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.md,
  },
  streakFlameCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#FEF3C7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  streakFlameEmoji: {
    fontSize: 26,
  },
  streakTextCol: {
    flex: 1,
  },
  streakBadgeRow: {
    flexDirection: 'row',
    gap: SPACING.xs,
    marginBottom: 4,
  },
  streakHeading: {
    fontSize: 15,
    fontWeight: '800',
    color: COLORS.textDark,
  },
  streakSub: {
    fontSize: 12,
    color: COLORS.textMedium,
    marginTop: 2,
    lineHeight: 16,
  },
  sectionHeader: {
    marginTop: SPACING.xs,
    marginBottom: SPACING.sm,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '900',
    color: COLORS.textDark,
  },
  sectionSubtitle: {
    fontSize: 12,
    color: COLORS.textMedium,
    marginTop: 2,
  },
  subjectCard: {
    marginBottom: SPACING.md,
    padding: SPACING.md,
  },
  cardTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.md,
    marginBottom: SPACING.sm,
  },
  subjectIconBox: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subjectEmoji: {
    fontSize: 26,
  },
  subjectHeaderInfo: {
    flex: 1,
  },
  pillRow: {
    flexDirection: 'row',
    gap: 6,
    marginBottom: 4,
  },
  bookTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: COLORS.textMedium,
  },
  lessonInfoBox: {
    backgroundColor: '#F8FAFC',
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.sm,
    marginBottom: SPACING.md,
    borderLeftWidth: 3,
    borderLeftColor: COLORS.primary,
  },
  lessonNumber: {
    fontSize: 12,
    fontWeight: '800',
    color: COLORS.primary,
    marginBottom: 2,
  },
  lessonTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: COLORS.textDark,
    marginBottom: 2,
  },
  lessonConcept: {
    fontSize: 12,
    color: COLORS.textMedium,
    lineHeight: 16,
  },
  actionBtn: {
    width: '100%',
  },

  // Profile / Settings Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: COLORS.white,
    borderTopLeftRadius: BORDER_RADIUS.xl,
    borderTopRightRadius: BORDER_RADIUS.xl,
    padding: SPACING.lg,
    maxHeight: '90%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: SPACING.md,
    paddingBottom: SPACING.md,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  modalAvatarRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.md,
    flex: 1,
  },
  largeAvatarBubble: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  largeAvatarEmoji: {
    fontSize: 34,
  },
  modalUserName: {
    fontSize: 18,
    fontWeight: '900',
    color: COLORS.textDark,
  },
  modalUserClass: {
    fontSize: 13,
    fontWeight: '700',
    color: COLORS.primary,
    marginTop: 1,
  },
  modalStatsRow: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 4,
  },
  modalStatItem: {
    fontSize: 11,
    fontWeight: '700',
    color: COLORS.textMedium,
  },
  closeBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F1F5F9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeBtnText: {
    fontSize: 16,
    fontWeight: '800',
    color: COLORS.textDark,
  },
  sheetSectionTitle: {
    fontSize: 13,
    fontWeight: '800',
    color: COLORS.textMedium,
    marginBottom: SPACING.sm,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  avatarScroll: {
    flexDirection: 'row',
    marginBottom: SPACING.md,
  },
  avatarOption: {
    width: 46,
    height: 46,
    borderRadius: 23,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  avatarOptionSelected: {
    borderColor: COLORS.primary,
    transform: [{ scale: 1.1 }],
  },
  avatarOptionEmoji: {
    fontSize: 24,
  },
  menuItemsList: {
    gap: SPACING.sm,
  },
  menuItemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: SPACING.sm + 2,
    backgroundColor: '#F8FAFC',
    borderRadius: BORDER_RADIUS.md,
    gap: SPACING.md,
  },
  menuItemIcon: {
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuItemTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: COLORS.textDark,
  },
  menuItemSub: {
    fontSize: 11,
    color: COLORS.textMedium,
    marginTop: 1,
  },
  menuItemArrow: {
    fontSize: 16,
    fontWeight: '800',
    color: COLORS.textLight,
  },
});
