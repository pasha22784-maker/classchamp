import React, { useEffect, useState, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Modal,
  Animated,
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
import { LuckySpinModal } from '../components/gamification/LuckySpinModal';
import { BalloonPopGameModal } from '../components/gamification/BalloonPopGameModal';
import { MemoryMatchModal } from '../components/gamification/MemoryMatchModal';
import { BalanceScaleGameModal } from '../components/conceptGames/BalanceScaleGameModal';
import { FractionPizzaGameModal } from '../components/conceptGames/FractionPizzaGameModal';
import { AngleShooterGameModal } from '../components/conceptGames/AngleShooterGameModal';
import { ShapeSorterGameModal } from '../components/conceptGames/ShapeSorterGameModal';
import { CountingTrainGameModal } from '../components/conceptGames/CountingTrainGameModal';
import { AnimalSeesawGameModal } from '../components/conceptGames/AnimalSeesawGameModal';
import { ClockTimeGameModal } from '../components/conceptGames/ClockTimeGameModal';
import { PatternBuilderGameModal } from '../components/conceptGames/PatternBuilderGameModal';
import { PlaceValueRocketModal } from '../components/conceptGames/PlaceValueRocketModal';
import { GeoAreaPerimeterModal } from '../components/conceptGames/GeoAreaPerimeterModal';
import { IntegerSubmarineModal } from '../components/conceptGames/IntegerSubmarineModal';
import { MagnetLabModal } from '../components/conceptGames/MagnetLabModal';
import { ColorPrismLabModal } from '../components/conceptGames/ColorPrismLabModal';
import { SpeedBrainGameModal } from '../components/conceptGames/SpeedBrainGameModal';
import { ConceptLabHubModal } from '../components/conceptGames/ConceptLabHubModal';
import { DailyBrainGymModal } from '../components/dailyWorkout/DailyBrainGymModal';
import { BrainDevelopmentMatrixModal } from '../components/cognitive/BrainDevelopmentMatrixModal';
import { WeeklyOlympiadTestModal } from '../components/assessment/WeeklyOlympiadTestModal';
import { TargetedWeakTopicModal } from '../components/adaptive/TargetedWeakTopicModal';
import { CONCEPT_LABS_BY_GRADE, getGradeGroupKey } from '../data/conceptLabsRegistry';
import { useUserStore, getTodayDateString } from '../store/useUserStore';
import { getChaptersForGradeSubject, NCERT_BOOKS } from '../data/chaptersData';
import { fetchGlobalConfig } from '../services/adminConfig';
import { Subject, Grade, ChapterLesson, AppGlobalConfig, WeakTopicItem, AppLanguage } from '../types';
import { triggerHaptic } from '../utils/haptics';
import { getActiveLanguage, STRINGS } from '../utils/language';

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
  const { profile, loadProfile, setAvatar, setPreferredLanguage } = useUserStore();
  const activeLang: AppLanguage = getActiveLanguage(profile);
  const s = STRINGS[activeLang];
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [showPaywallModal, setShowPaywallModal] = useState(false);
  const [showLuckySpinModal, setShowLuckySpinModal] = useState(false);
  const [showBalloonPopModal, setShowBalloonPopModal] = useState(false);
  const [showMemoryMatchModal, setShowMemoryMatchModal] = useState(false);
  const [showBalanceScaleModal, setShowBalanceScaleModal] = useState(false);
  const [showFractionPizzaModal, setShowFractionPizzaModal] = useState(false);
  const [showAngleShooterModal, setShowAngleShooterModal] = useState(false);
  const [showShapeSorterModal, setShowShapeSorterModal] = useState(false);
  const [showCountingTrainModal, setShowCountingTrainModal] = useState(false);
  const [showAnimalSeesawModal, setShowAnimalSeesawModal] = useState(false);
  const [showClockTimeModal, setShowClockTimeModal] = useState(false);
  const [showPatternBuilderModal, setShowPatternBuilderModal] = useState(false);
  const [showPlaceValueRocketModal, setShowPlaceValueRocketModal] = useState(false);
  const [showGeoAreaPerimeterModal, setShowGeoAreaPerimeterModal] = useState(false);
  const [showIntegerSubmarineModal, setShowIntegerSubmarineModal] = useState(false);
  const [showMagnetLabModal, setShowMagnetLabModal] = useState(false);
  const [showColorPrismModal, setShowColorPrismModal] = useState(false);
  const [showSpeedBrainModal, setShowSpeedBrainModal] = useState(false);
  const [showConceptLabHub, setShowConceptLabHub] = useState(false);
  const [showDailyBrainGymModal, setShowDailyBrainGymModal] = useState(false);
  const [showBrainMatrixModal, setShowBrainMatrixModal] = useState(false);
  const [showOlympiadTestModal, setShowOlympiadTestModal] = useState(false);
  const [showWeakTopicModal, setShowWeakTopicModal] = useState(false);
  const [selectedWeakTopic, setSelectedWeakTopic] = useState<WeakTopicItem | null>(null);
  const [globalConfig, setGlobalConfig] = useState<AppGlobalConfig | null>(null);

  const handleOpenConceptLab = (labId: string) => {
    triggerHaptic('medium');
    if (labId === 'shape_sorter') setShowShapeSorterModal(true);
    else if (labId === 'counting_train') setShowCountingTrainModal(true);
    else if (labId === 'animal_seesaw') setShowAnimalSeesawModal(true);
    else if (labId === 'balance_scale') setShowBalanceScaleModal(true);
    else if (labId === 'clock_time') setShowClockTimeModal(true);
    else if (labId === 'pattern_builder') setShowPatternBuilderModal(true);
    else if (labId === 'place_value_rocket') setShowPlaceValueRocketModal(true);
    else if (labId === 'fraction_pizza') setShowFractionPizzaModal(true);
    else if (labId === 'metric_weight') setShowBalanceScaleModal(true);
    else if (labId === 'angle_laser') setShowAngleShooterModal(true);
    else if (labId === 'geo_area_perimeter') setShowGeoAreaPerimeterModal(true);
    else if (labId === 'integer_submarine') setShowIntegerSubmarineModal(true);
    else if (labId === 'magnet_lab') setShowMagnetLabModal(true);
    else if (labId === 'color_prism') setShowColorPrismModal(true);
    else if (labId === 'speed_brain') setShowSpeedBrainModal(true);
  };
  
  // App-open Streak Greeting (shown once when app opens, then dismissed)
  const [showStreakWelcome, setShowStreakWelcome] = useState(true);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(-20)).current;

  useEffect(() => {
    loadProfile();
    fetchGlobalConfig().then((cfg) => setGlobalConfig(cfg));

    // Animate in the welcome streak banner
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start();

    // Auto-dismiss the streak greeting after 4 seconds
    const timer = setTimeout(() => {
      dismissStreakWelcome();
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  const dismissStreakWelcome = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setShowStreakWelcome(false));
  };

  const todayStr = getTodayDateString();
  const isCompletedToday = profile.historyDatesCompleted.includes(todayStr);
  const isWorkoutDoneToday = (profile.dailyWorkoutCompletedDates || []).includes(todayStr);
  const currentWeakTopic = (profile.weakTopics && profile.weakTopics.length > 0) ? profile.weakTopics[0] : null;
  const isFreeSpinReady = profile.lastSpinDate !== todayStr;
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
      <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />

      {/* Clean & Smart Header: Avatar (opens Settings) + Greeting + Stars */}
      <ChampHeader
        title={`${s.greeting}, ${profile.name}! 👋`}
        subtitle={`${gradeConfig.label} • ${s.ncertTag}`}
        totalStars={profile.totalStars}
        avatarEmoji={currentAvatar.emoji}
        onPressAvatar={() => {
          triggerHaptic('light');
          setShowSettingsModal(true);
        }}
      />

      {/* App Open Streak Welcome Toast (Auto-dismisses, then moves to Settings) */}
      {showStreakWelcome && (
        <Animated.View
          style={[
            styles.streakToastContainer,
            {
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }],
            },
          ]}
        >
          <View style={styles.streakToastContent}>
            <View style={styles.streakToastFlame}>
              <Text style={{ fontSize: 24 }}>🔥</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.streakToastTitle}>
                {profile.currentStreak > 0
                  ? (activeLang === 'hi' ? `${profile.currentStreak} दिन की स्ट्रीक जारी!` : `${profile.currentStreak} Day Streak Active!`)
                  : (activeLang === 'hi' ? 'आज अपनी स्ट्रीक शुरू करें!' : 'Start Your Streak Today!')}
              </Text>
              <Text style={styles.streakToastSub}>
                {isCompletedToday ? s.heroSubDone : s.heroSubPending}
              </Text>
            </View>
            <TouchableOpacity
              onPress={dismissStreakWelcome}
              style={styles.streakToastClose}
              hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
            >
              <Text style={styles.streakToastCloseText}>✕</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      )}

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Dynamic Global Announcement Banner */}
        {globalConfig?.announcement?.isActive && (
          <View
            style={[
              styles.announcementBanner,
              globalConfig.announcement.type === 'festive'
                ? styles.announcementFestive
                : globalConfig.announcement.type === 'alert'
                ? styles.announcementAlert
                : styles.announcementInfo,
            ]}
          >
            <Text style={{ fontSize: 16, marginRight: 8 }}>
              {globalConfig.announcement.type === 'festive' ? '🎉' : globalConfig.announcement.type === 'alert' ? '🚨' : '📢'}
            </Text>
            <Text style={styles.announcementText}>{globalConfig.announcement.text}</Text>
          </View>
        )}

        {/* Dynamic Special Festive Offer Banner */}
        {globalConfig?.specialOffer?.isActive && (
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => setShowPaywallModal(true)}
            style={styles.offerBannerContainer}
          >
            <View style={styles.offerBadge}>
              <Text style={styles.offerBadgeText}>{globalConfig.specialOffer.badgeText}</Text>
            </View>
            <View style={{ flex: 1, marginLeft: 8 }}>
              <Text style={styles.offerTitle}>{globalConfig.specialOffer.title}</Text>
              <Text style={styles.offerPrice}>
                <Text style={{ textDecorationLine: 'line-through', color: '#94A3B8' }}>
                  {globalConfig.specialOffer.originalPrice}
                </Text>{' '}
                <Text style={{ fontWeight: '900', color: COLORS.gold }}>
                  {globalConfig.specialOffer.discountedPrice}
                </Text>{' '}
                • Code: {globalConfig.specialOffer.couponCode}
              </Text>
            </View>
            <Text style={{ fontSize: 14, color: COLORS.gold, fontWeight: '900' }}>GET ›</Text>
          </TouchableOpacity>
        )}

        {/* Child Gamified Loot Strip: Streak, Shield, Stars, XP */}
        <View style={styles.champLootStrip}>
          <View style={styles.lootStripItem}>
            <Text style={styles.lootStripEmoji}>🔥</Text>
            <View>
              <Text style={styles.lootStripVal}>{profile.currentStreak}d</Text>
              <Text style={styles.lootStripLbl}>{s.streak}</Text>
            </View>
          </View>

          <View style={styles.lootStripDivider} />

          <View style={styles.lootStripItem}>
            <Text style={styles.lootStripEmoji}>🛡️</Text>
            <View>
              <Text style={styles.lootStripVal}>{profile.streakShields ?? 0}</Text>
              <Text style={styles.lootStripLbl}>{s.shields}</Text>
            </View>
          </View>

          <View style={styles.lootStripDivider} />

          <View style={styles.lootStripItem}>
            <Text style={styles.lootStripEmoji}>⭐</Text>
            <View>
              <Text style={styles.lootStripVal}>{profile.totalStars}</Text>
              <Text style={styles.lootStripLbl}>{s.stars}</Text>
            </View>
          </View>

          <View style={styles.lootStripDivider} />

          <View style={styles.lootStripItem}>
            <Text style={styles.lootStripEmoji}>⚡</Text>
            <View>
              <Text style={styles.lootStripVal}>{profile.xp ?? 0}</Text>
              <Text style={styles.lootStripLbl}>{s.xp}</Text>
            </View>
          </View>
        </View>

        {/* Kid-Friendly Vibrant Hero Card: "Daily 10-Min Mission" */}
        <View
          style={[
            styles.heroCard,
            isCompletedToday ? styles.heroCardCompleted : styles.heroCardActive,
          ]}
        >
          <View style={styles.heroTopRow}>
            <View style={[styles.heroBadge, isCompletedToday ? styles.heroBadgeCompleted : styles.heroBadgeActive]}>
              <Text style={styles.heroBadgeText}>
                {isCompletedToday ? s.heroMissionDone : s.heroDailyMission}
              </Text>
            </View>
            <View style={[styles.statusPill, isCompletedToday ? styles.statusPillDone : styles.statusPillPending]}>
              <Text style={styles.statusPillText}>
                {isCompletedToday ? s.heroGoalDone : s.heroGoalPending}
              </Text>
            </View>
          </View>

          <View style={styles.heroBodyRow}>
            <View style={styles.heroTextCol}>
              <Text style={styles.heroTitle}>
                {isCompletedToday ? s.heroTitleDone : s.heroTitlePending}
              </Text>
              <Text style={styles.heroSub}>
                {isCompletedToday ? s.heroSubDone : s.heroSubPending}
              </Text>
            </View>
            <View style={styles.heroIllustrationCircle}>
              <Text style={styles.heroIllustrationEmoji}>
                {isCompletedToday ? '🏆' : '🚀'}
              </Text>
            </View>
          </View>

          {/* Clean Progress Line */}
          <View style={styles.heroProgressTrack}>
            <View
              style={[
                styles.heroProgressBar,
                { width: isCompletedToday ? '100%' : '15%' },
                { backgroundColor: '#FDE047' },
              ]}
            />
          </View>
        </View>

        {/* Daily Lucky Spin Banner */}
        <TouchableOpacity
          style={styles.luckySpinBanner}
          activeOpacity={0.88}
          onPress={() => {
            triggerHaptic('medium');
            setShowLuckySpinModal(true);
          }}
        >
          <View style={styles.luckySpinIconCircle}>
            <Text style={styles.luckySpinIconEmoji}>🎡</Text>
          </View>
          <View style={styles.luckySpinTextBox}>
            <View style={styles.luckySpinBadgeRow}>
              <View style={[styles.luckySpinBadge, isFreeSpinReady && styles.luckySpinBadgeFree]}>
                <Text style={styles.luckySpinBadgeText}>
                  {isFreeSpinReady ? s.spinFreeReady : s.spinExtra}
                </Text>
              </View>
            </View>
            <Text style={styles.luckySpinTitle}>{s.spinTitle}</Text>
            <Text style={styles.luckySpinSub}>
              {s.spinSub}
            </Text>
          </View>
          <View style={styles.luckySpinActionBtn}>
            <Text style={styles.luckySpinActionText}>{s.spinBtn}</Text>
          </View>
        </TouchableOpacity>

        {/* Daily Super Kid Brain Gym Banner (3-Step Daily Workout) */}
        <View style={styles.dailyGymCard}>
          <View style={styles.dailyGymTopRow}>
            <View style={[styles.dailyGymBadge, isWorkoutDoneToday && styles.dailyGymBadgeDone]}>
              <Text style={styles.dailyGymBadgeText}>
                {isWorkoutDoneToday ? s.gymBadgeDone : s.gymBadgePending}
              </Text>
            </View>
            <TouchableOpacity
              style={styles.brainMatrixPill}
              activeOpacity={0.8}
              onPress={() => {
                triggerHaptic('light');
                setShowBrainMatrixModal(true);
              }}
            >
              <Text style={styles.brainMatrixPillText}>{s.brainMatrixBtn}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.dailyGymMainRow}>
            <View style={styles.dailyGymIconCircle}>
              <Text style={styles.dailyGymIconEmoji}>🏋️‍♂️</Text>
            </View>
            <View style={styles.dailyGymTextBox}>
              <Text style={styles.dailyGymTitle}>{s.gymTitle}</Text>
              <Text style={styles.dailyGymSub}>
                {s.gymSub}
              </Text>
            </View>
          </View>

          <TouchableOpacity
            style={[styles.dailyGymActionBtn, isWorkoutDoneToday && styles.dailyGymActionBtnDone]}
            activeOpacity={0.88}
            onPress={() => {
              triggerHaptic('medium');
              setShowDailyBrainGymModal(true);
            }}
          >
            <Text style={styles.dailyGymActionText}>
              {isWorkoutDoneToday ? s.gymBtnReview : s.gymBtnStart}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Adaptive Weak Topic Remediation Booster */}
        {currentWeakTopic && currentWeakTopic.status !== 'mastered' && (
          <TouchableOpacity
            style={styles.weakTopicCard}
            activeOpacity={0.9}
            onPress={() => {
              triggerHaptic('medium');
              setSelectedWeakTopic(currentWeakTopic);
              setShowWeakTopicModal(true);
            }}
          >
            <View style={styles.weakTopicTopRow}>
              <View style={styles.weakTopicBadge}>
                <Text style={styles.weakTopicBadgeText}>{s.weakTopicBadge}</Text>
              </View>
              <Text style={styles.weakTopicAccuracy}>
                {s.weakTopicMastery}: <Text style={{ color: '#EF4444', fontWeight: '900' }}>{currentWeakTopic.accuracyPercentage}%</Text>
              </Text>
            </View>

            <View style={styles.weakTopicContentRow}>
              <View style={styles.weakTopicIconBox}>
                <Text style={styles.weakTopicIconEmoji}>⚠️</Text>
              </View>
              <View style={styles.weakTopicTextBox}>
                <Text style={styles.weakTopicTitle}>{currentWeakTopic.chapterTitle}</Text>
                <Text style={styles.weakTopicSub}>{currentWeakTopic.conceptName}</Text>
                <Text style={styles.weakTopicHint}>
                  {s.weakTopicHint}
                </Text>
              </View>
              <View style={styles.weakTopicGoBtn}>
                <Text style={styles.weakTopicGoText}>{s.weakTopicFixBtn}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}

        {/* Section Heading: Clean & Minimal */}
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionTitle}>{s.selectSubject}</Text>
          <Text style={styles.sectionSub}>{s.subjectSub}</Text>
        </View>

        {/* 1. Mathematics Smart Card */}
        <TouchableOpacity
          style={styles.cleanSubjectCard}
          onPress={() => handleSubjectClick('maths', mathsInfo.lesson.title)}
          activeOpacity={0.85}
        >
          <View style={[styles.subjectIconBox, { backgroundColor: '#EFF6FF' }]}>
            <Text style={styles.subjectEmoji}>📐</Text>
          </View>

          <View style={styles.subjectTextBox}>
            <View style={styles.subjectTitleRow}>
              <Text style={styles.subjectName}>
                {activeLang === 'hi' ? 'गणित (Mathematics)' : 'Mathematics'}
              </Text>
              <View style={[styles.lessonBadge, { backgroundColor: '#DBEAFE' }]}>
                <Text style={[styles.lessonBadgeText, { color: '#1E40AF' }]}>
                  {mathsInfo.isResume ? s.resumeBadge : `${s.chapterPrefix} ${mathsInfo.lesson.number}`}
                </Text>
              </View>
            </View>
            <Text style={styles.lessonName} numberOfLines={1}>
              {mathsInfo.lesson.title}
            </Text>
            <Text style={styles.bookSub} numberOfLines={1}>
              {bookInfo.mathsBook} • 10 {s.practiceQuestionsSuffix}
            </Text>
          </View>

          <View style={[styles.playBtnCircle, { backgroundColor: '#2563EB' }]}>
            <Text style={styles.playBtnArrow}>▶</Text>
          </View>
        </TouchableOpacity>

        {/* 2. English Smart Card */}
        <TouchableOpacity
          style={styles.cleanSubjectCard}
          onPress={() => handleSubjectClick('english', englishInfo.lesson.title)}
          activeOpacity={0.85}
        >
          <View style={[styles.subjectIconBox, { backgroundColor: '#FEF3C7' }]}>
            <Text style={styles.subjectEmoji}>📚</Text>
          </View>

          <View style={styles.subjectTextBox}>
            <View style={styles.subjectTitleRow}>
              <Text style={styles.subjectName}>English Grammar</Text>
              <View style={[styles.lessonBadge, { backgroundColor: '#FEF3C7' }]}>
                <Text style={[styles.lessonBadgeText, { color: '#92400E' }]}>
                  {englishInfo.isResume ? 'Resume ▶' : `Ch ${englishInfo.lesson.number}`}
                </Text>
              </View>
            </View>
            <Text style={styles.lessonName} numberOfLines={1}>
              {englishInfo.lesson.title}
            </Text>
            <Text style={styles.bookSub} numberOfLines={1}>
              {bookInfo.englishBook} • 10 Practice Questions
            </Text>
          </View>

          <View style={[styles.playBtnCircle, { backgroundColor: '#D97706' }]}>
            <Text style={styles.playBtnArrow}>▶</Text>
          </View>
        </TouchableOpacity>

        {/* 3. Hindi Smart Card (Always in pure Hindi) */}
        <TouchableOpacity
          style={styles.cleanSubjectCard}
          onPress={() => handleSubjectClick('hindi', hindiInfo.lesson.title)}
          activeOpacity={0.85}
        >
          <View style={[styles.subjectIconBox, { backgroundColor: '#ECFDF5' }]}>
            <Text style={styles.subjectEmoji}>🇮🇳</Text>
          </View>

          <View style={styles.subjectTextBox}>
            <View style={styles.subjectTitleRow}>
              <Text style={styles.subjectName}>हिंदी (Hindi)</Text>
              <View style={[styles.lessonBadge, { backgroundColor: '#D1FAE5' }]}>
                <Text style={[styles.lessonBadgeText, { color: '#065F46' }]}>
                  {hindiInfo.isResume ? 'जारी रखें ▶' : `पाठ ${hindiInfo.lesson.number}`}
                </Text>
              </View>
            </View>
            <Text style={styles.lessonName} numberOfLines={1}>
              {hindiInfo.lesson.title}
            </Text>
            <Text style={styles.bookSub} numberOfLines={1}>
              {bookInfo.hindiBook} • 10 अभ्यास प्रश्न
            </Text>
          </View>

          <View style={[styles.playBtnCircle, { backgroundColor: '#059669' }]}>
            <Text style={styles.playBtnArrow}>▶</Text>
          </View>
        </TouchableOpacity>

        {/* Clean Shortcut Bar: 365 Roadmap, Vault, Parent Zone */}
        <View style={styles.shortcutsRow}>
          <TouchableOpacity
            style={styles.shortcutPill}
            onPress={() => {
              triggerHaptic('light');
              onOpenRoadmap365();
            }}
            activeOpacity={0.8}
          >
            <Text style={styles.shortcutEmoji}>🗓️</Text>
            <Text style={styles.shortcutLabel}>{s.shortcutRoadmap}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.shortcutPill}
            onPress={() => {
              triggerHaptic('light');
              onOpenChapterVault('maths');
            }}
            activeOpacity={0.8}
          >
            <Text style={styles.shortcutEmoji}>📚</Text>
            <Text style={styles.shortcutLabel}>{s.shortcutVault}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.shortcutPill}
            onPress={() => {
              triggerHaptic('medium');
              setShowConceptLabHub(true);
            }}
            activeOpacity={0.8}
          >
            <Text style={styles.shortcutEmoji}>🔬</Text>
            <Text style={styles.shortcutLabel}>{s.shortcutLabs}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.shortcutPill}
            onPress={() => {
              triggerHaptic('light');
              onOpenParentZone();
            }}
            activeOpacity={0.8}
          >
            <Text style={styles.shortcutEmoji}>👨‍👩‍👧</Text>
            <Text style={styles.shortcutLabel}>{s.shortcutParent}</Text>
          </TouchableOpacity>
        </View>

        {/* Champ Arcade: Exciting Kids Educational Games */}
        <View style={styles.arcadeHeaderRow}>
          <View>
            <Text style={styles.arcadeTitle}>{s.arcadeTitle}</Text>
            <Text style={styles.arcadeSub}>{s.arcadeSub}</Text>
          </View>
          <View style={styles.arcadeLiveBadge}>
            <Text style={styles.arcadeLiveText}>NEW ✨</Text>
          </View>
        </View>

        <View style={styles.arcadeGrid}>
          {/* 1. Balloon Pop Blitz */}
          <TouchableOpacity
            style={[styles.arcadeCard, { backgroundColor: '#0284C7' }]}
            activeOpacity={0.88}
            onPress={() => {
              triggerHaptic('medium');
              setShowBalloonPopModal(true);
            }}
          >
            <View style={styles.arcadeCardTop}>
              <Text style={styles.arcadeCardEmoji}>🎈</Text>
              <View style={styles.arcadeCardBadge}>
                <Text style={styles.arcadeCardBadgeText}>40s Blitz</Text>
              </View>
            </View>
            <Text style={styles.arcadeCardTitle}>{s.balloonPopTitle}</Text>
            <Text style={styles.arcadeCardDesc}>
              {s.balloonPopDesc}
            </Text>
            <View style={styles.arcadeCardBtn}>
              <Text style={styles.arcadeCardBtnText}>{s.playNowBtn}</Text>
            </View>
          </TouchableOpacity>

          {/* 2. Mind Match 3D (Vibrant Bright Purple instead of dark indigo) */}
          <TouchableOpacity
            style={[styles.arcadeCard, { backgroundColor: '#8B5CF6' }]}
            activeOpacity={0.88}
            onPress={() => {
              triggerHaptic('medium');
              setShowMemoryMatchModal(true);
            }}
          >
            <View style={styles.arcadeCardTop}>
              <Text style={styles.arcadeCardEmoji}>🃏</Text>
              <View style={styles.arcadeCardBadge}>
                <Text style={styles.arcadeCardBadgeText}>Brain Power</Text>
              </View>
            </View>
            <Text style={styles.arcadeCardTitle}>{s.mindMatchTitle}</Text>
            <Text style={styles.arcadeCardDesc}>
              {s.mindMatchDesc}
            </Text>
            <View style={styles.arcadeCardBtn}>
              <Text style={styles.arcadeCardBtnText}>{s.playNowBtn}</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* STEM & Math Practical Concept Labs Hero Gateway: Super Kid STEM Hub */}
        <View style={styles.labGatewayCard}>
          {/* Top Live Tag & Grade Badge */}
          <View style={styles.labGatewayTopRow}>
            <View style={styles.labGatewayLiveBadge}>
              <View style={styles.labGatewayLiveDot} />
              <Text style={styles.labGatewayLiveText}>{s.labGatewayBadge}</Text>
            </View>
            <View style={styles.labGatewayGradeBadge}>
              <Text style={styles.labGatewayGradeText}>{gradeConfig.label} • {s.labGatewayLabsCount}</Text>
            </View>
          </View>

          {/* Main Visual Content */}
          <TouchableOpacity
            activeOpacity={0.88}
            onPress={() => {
              triggerHaptic('medium');
              setShowConceptLabHub(true);
            }}
            style={styles.labGatewayMainRow}
          >
            <View style={styles.labGatewayTextCol}>
              <Text style={styles.labGatewayTitle}>{s.labGatewayTitle}</Text>
              <Text style={styles.labGatewayPunchline}>
                {s.labGatewayPunchline}
              </Text>
              <Text style={styles.labGatewayDesc}>
                {s.labGatewayDesc}
              </Text>
            </View>

            <View style={styles.labGatewayFlaskBox}>
              <Text style={styles.labGatewayFlaskEmoji}>🧪</Text>
            </View>
          </TouchableOpacity>

          {/* Feature Badges */}
          <View style={styles.labGatewayPillsRow}>
            <View style={[styles.labFeaturePill, { borderColor: '#0284C7', backgroundColor: '#F0F9FF' }]}>
              <Text style={[styles.labFeatureText, { color: '#0284C7' }]}>⚡ 60s Booster</Text>
            </View>
            <View style={styles.labFeaturePill}>
              <Text style={styles.labFeatureText}>⚖️ Balance Beam</Text>
            </View>
            <View style={styles.labFeaturePill}>
              <Text style={styles.labFeatureText}>🍕 Fraction Slices</Text>
            </View>
            <View style={styles.labFeaturePill}>
              <Text style={styles.labFeatureText}>🧲 Magnets & Optics</Text>
            </View>
          </View>

          {/* Dual Action Buttons Row */}
          <View style={styles.labGatewayActionsRow}>
            <TouchableOpacity
              style={styles.enterLabActionBtn}
              activeOpacity={0.85}
              onPress={() => {
                triggerHaptic('medium');
                setShowConceptLabHub(true);
              }}
            >
              <Text style={styles.enterLabActionText}>{s.labGatewayEnterBtn}</Text>
              <View style={styles.enterLabActionArrow}>
                <Text style={styles.enterLabArrowText}>▶</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.speedBrainActionBtn}
              activeOpacity={0.85}
              onPress={() => {
                triggerHaptic('medium');
                setShowSpeedBrainModal(true);
              }}
            >
              <Text style={styles.speedBrainActionText}>{s.labGatewayRushBtn}</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Weekly Olympiad & Advance HOTS Benchmark Test Banner */}
        <TouchableOpacity
          style={styles.olympiadBanner}
          activeOpacity={0.88}
          onPress={() => {
            triggerHaptic('medium');
            setShowOlympiadTestModal(true);
          }}
        >
          <View style={styles.olympiadIconCircle}>
            <Text style={styles.olympiadIconEmoji}>🏅</Text>
          </View>
          <View style={styles.olympiadTextBox}>
            <View style={styles.olympiadBadgeRow}>
              <View style={styles.olympiadBadge}>
                <Text style={styles.olympiadBadgeText}>{s.olympiadBadge}</Text>
              </View>
            </View>
            <Text style={styles.olympiadTitle}>{s.olympiadTitle}</Text>
            <Text style={styles.olympiadSub}>
              {s.olympiadSub}
            </Text>
          </View>
          <View style={styles.olympiadActionBtn}>
            <Text style={styles.olympiadActionText}>{s.olympiadTestBtn}</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>

      {/* Profile & Settings Modal — Holds Streak, Stats, Avatar & Options */}
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
                  <Text style={styles.modalUserClass}>{gradeConfig.label} ({s.ncertTag})</Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => setShowSettingsModal(false)}
                style={styles.closeBtn}
              >
                <Text style={styles.closeBtnText}>✕</Text>
              </TouchableOpacity>
            </View>

            {/* Dedicated Streak & Progress Hub in Settings */}
            <View style={styles.streakSettingsCard}>
              <View style={styles.streakCardHeader}>
                <View style={styles.streakFlameBadge}>
                  <Text style={{ fontSize: 24 }}>🔥</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.streakCardDays}>
                    {activeLang === 'hi'
                      ? `${profile.currentStreak} दिन की दैनिक स्ट्रीक`
                      : `${profile.currentStreak} Day Practice Streak`}
                  </Text>
                  <Text style={styles.streakCardSubtitle}>
                    {isCompletedToday
                      ? (activeLang === 'hi' ? 'स्ट्रीक सुरक्षित! आज का 10-मिनट अभ्यास पूरा हुआ 🌟' : 'Streak safe! Today’s 10-min practice completed 🌟')
                      : (activeLang === 'hi' ? 'स्ट्रीक जारी रखने के लिए आज 10 मिनट अभ्यास करें!' : 'Practice 10 minutes today to maintain your streak!')}
                  </Text>
                </View>
              </View>

              <View style={styles.streakStatsDivider} />

              <View style={styles.streakStatsRow}>
                <View style={styles.streakStatCol}>
                  <Text style={styles.streakStatVal}>⭐ {profile.totalStars}</Text>
                  <Text style={styles.streakStatLbl}>{s.stars}</Text>
                </View>
                <View style={styles.streakStatCol}>
                  <Text style={styles.streakStatVal}>🛡️ {profile.streakShields ?? 0}</Text>
                  <Text style={styles.streakStatLbl}>{s.shields}</Text>
                </View>
                <View style={styles.streakStatCol}>
                  <Text style={styles.streakStatVal}>⚡ {profile.xp ?? 0}</Text>
                  <Text style={styles.streakStatLbl}>{s.xp}</Text>
                </View>
                <View style={styles.streakStatCol}>
                  <Text style={styles.streakStatVal}>🏆 {profile.totalTrophies}</Text>
                  <Text style={styles.streakStatLbl}>{s.trophies}</Text>
                </View>
              </View>
            </View>

            {/* Preferred Medium / Language Selector */}
            <Text style={styles.sheetSectionTitle}>{s.languageSectionTitle}</Text>
            <View style={styles.langSelectorRow}>
              <TouchableOpacity
                style={[
                  styles.langPill,
                  activeLang === 'en' && styles.langPillActive,
                ]}
                onPress={() => {
                  triggerHaptic('light');
                  setPreferredLanguage('en');
                }}
                activeOpacity={0.8}
              >
                <Text style={styles.langPillFlag}>🇬🇧</Text>
                <View style={styles.langPillTextCol}>
                  <Text style={[styles.langPillText, activeLang === 'en' && styles.langPillTextActive]}>
                    English
                  </Text>
                  <Text style={styles.langPillSub}>Maths & UI in English</Text>
                </View>
                {activeLang === 'en' && (
                  <View style={styles.langCheckCircle}>
                    <Text style={styles.langCheckText}>✓</Text>
                  </View>
                )}
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.langPill,
                  activeLang === 'hi' && styles.langPillActive,
                ]}
                onPress={() => {
                  triggerHaptic('light');
                  setPreferredLanguage('hi');
                }}
                activeOpacity={0.8}
              >
                <Text style={styles.langPillFlag}>🇮🇳</Text>
                <View style={styles.langPillTextCol}>
                  <Text style={[styles.langPillText, activeLang === 'hi' && styles.langPillTextActive]}>
                    हिंदी (Hindi)
                  </Text>
                  <Text style={styles.langPillSub}>गणित और UI हिंदी में</Text>
                </View>
                {activeLang === 'hi' && (
                  <View style={styles.langCheckCircle}>
                    <Text style={styles.langCheckText}>✓</Text>
                  </View>
                )}
              </TouchableOpacity>
            </View>

            {/* Mascot Avatar Selector */}
            <Text style={styles.sheetSectionTitle}>{s.avatarSectionTitle}</Text>
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

            {/* Menu Items */}
            <View style={styles.menuItemsList}>
              {/* Class Switcher */}
              <TouchableOpacity
                style={styles.menuItemRow}
                onPress={() => {
                  setShowSettingsModal(false);
                  onOpenParentZone();
                }}
              >
                <View style={[styles.menuItemIcon, { backgroundColor: '#FEE2E2' }]}>
                  <Text style={{ fontSize: 18 }}>🔒</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.menuItemTitle}>{s.menuChangeClass} ({gradeConfig.label})</Text>
                  <Text style={styles.menuItemSub}>{s.menuParentGateSub}</Text>
                </View>
                <Text style={styles.menuItemArrow}>→</Text>
              </TouchableOpacity>

              {/* 365-Day Plan */}
              <TouchableOpacity
                style={styles.menuItemRow}
                onPress={() => {
                  setShowSettingsModal(false);
                  onOpenRoadmap365();
                }}
              >
                <View style={[styles.menuItemIcon, { backgroundColor: '#FEF3C7' }]}>
                  <Text style={{ fontSize: 18 }}>🗓️</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.menuItemTitle}>{s.menuRoadmap}</Text>
                  <Text style={styles.menuItemSub}>{s.menuRoadmapSub}</Text>
                </View>
                <Text style={styles.menuItemArrow}>→</Text>
              </TouchableOpacity>

              {/* Chapter Vault */}
              <TouchableOpacity
                style={styles.menuItemRow}
                onPress={() => {
                  setShowSettingsModal(false);
                  onOpenChapterVault('maths');
                }}
              >
                <View style={[styles.menuItemIcon, { backgroundColor: '#DBEAFE' }]}>
                  <Text style={{ fontSize: 18 }}>📚</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.menuItemTitle}>{s.menuVault}</Text>
                  <Text style={styles.menuItemSub}>{s.menuVaultSub}</Text>
                </View>
                <Text style={styles.menuItemArrow}>→</Text>
              </TouchableOpacity>

              {/* Parent Zone */}
              <TouchableOpacity
                style={styles.menuItemRow}
                onPress={() => {
                  setShowSettingsModal(false);
                  onOpenParentZone();
                }}
              >
                <View style={[styles.menuItemIcon, { backgroundColor: '#F3E8FF' }]}>
                  <Text style={{ fontSize: 18 }}>👨‍👩‍👧</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.menuItemTitle}>{s.menuParentZone}</Text>
                  <Text style={styles.menuItemSub}>{s.menuParentZoneSub}</Text>
                </View>
                <Text style={styles.menuItemArrow}>→</Text>
              </TouchableOpacity>
            </View>

            {/* Close Button */}
            <TouchableOpacity
              style={styles.modalCloseBtn}
              onPress={() => setShowSettingsModal(false)}
            >
              <Text style={styles.modalCloseBtnText}>{s.doneBtn}</Text>
            </TouchableOpacity>
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

      {/* Gamification Modals */}
      <LuckySpinModal
        visible={showLuckySpinModal}
        onClose={() => setShowLuckySpinModal(false)}
      />

      <BalloonPopGameModal
        visible={showBalloonPopModal}
        onClose={() => setShowBalloonPopModal(false)}
        grade={profile.grade}
      />

      <MemoryMatchModal
        visible={showMemoryMatchModal}
        onClose={() => setShowMemoryMatchModal(false)}
        grade={profile.grade}
      />

      {/* Concept Lab Modals */}
      <ShapeSorterGameModal
        visible={showShapeSorterModal}
        onClose={() => setShowShapeSorterModal(false)}
      />

      <CountingTrainGameModal
        visible={showCountingTrainModal}
        onClose={() => setShowCountingTrainModal(false)}
      />

      <AnimalSeesawGameModal
        visible={showAnimalSeesawModal}
        onClose={() => setShowAnimalSeesawModal(false)}
      />

      <ClockTimeGameModal
        visible={showClockTimeModal}
        onClose={() => setShowClockTimeModal(false)}
      />

      <PatternBuilderGameModal
        visible={showPatternBuilderModal}
        onClose={() => setShowPatternBuilderModal(false)}
      />

      <PlaceValueRocketModal
        visible={showPlaceValueRocketModal}
        onClose={() => setShowPlaceValueRocketModal(false)}
      />

      <GeoAreaPerimeterModal
        visible={showGeoAreaPerimeterModal}
        onClose={() => setShowGeoAreaPerimeterModal(false)}
      />

      <IntegerSubmarineModal
        visible={showIntegerSubmarineModal}
        onClose={() => setShowIntegerSubmarineModal(false)}
      />

      <BalanceScaleGameModal
        visible={showBalanceScaleModal}
        onClose={() => setShowBalanceScaleModal(false)}
        grade={profile.grade}
      />

      <FractionPizzaGameModal
        visible={showFractionPizzaModal}
        onClose={() => setShowFractionPizzaModal(false)}
      />

      <AngleShooterGameModal
        visible={showAngleShooterModal}
        onClose={() => setShowAngleShooterModal(false)}
      />

      <MagnetLabModal
        visible={showMagnetLabModal}
        onClose={() => setShowMagnetLabModal(false)}
      />

      <ColorPrismLabModal
        visible={showColorPrismModal}
        onClose={() => setShowColorPrismModal(false)}
      />

      <ConceptLabHubModal
        visible={showConceptLabHub}
        onClose={() => setShowConceptLabHub(false)}
        userGrade={profile.grade}
        childName={profile.name}
        avatarEmoji={currentAvatar.emoji}
        avatarBadgeColor={currentAvatar.badgeColor}
        totalStars={profile.totalStars}
        streakDays={profile.currentStreak}
        activeLang={activeLang}
        onSelectLab={(labId) => {
          setShowConceptLabHub(false);
          handleOpenConceptLab(labId);
        }}
      />

      <SpeedBrainGameModal
        visible={showSpeedBrainModal}
        onClose={() => setShowSpeedBrainModal(false)}
        userGrade={profile.grade}
      />

      <DailyBrainGymModal
        visible={showDailyBrainGymModal}
        onClose={() => setShowDailyBrainGymModal(false)}
        userGrade={profile.grade}
        activeLang={activeLang}
        onLaunchLab={(labId) => {
          handleOpenConceptLab(labId);
        }}
        onLaunchSpeedBrain={() => {
          setShowSpeedBrainModal(true);
        }}
      />

      <BrainDevelopmentMatrixModal
        visible={showBrainMatrixModal}
        onClose={() => setShowBrainMatrixModal(false)}
        userGrade={profile.grade}
        activeLang={activeLang}
        onOpenLab={() => {
          setShowConceptLabHub(true);
        }}
      />

      <WeeklyOlympiadTestModal
        visible={showOlympiadTestModal}
        onClose={() => setShowOlympiadTestModal(false)}
        userGrade={profile.grade}
        activeLang={activeLang}
      />

      <TargetedWeakTopicModal
        visible={showWeakTopicModal}
        onClose={() => {
          setShowWeakTopicModal(false);
          setSelectedWeakTopic(null);
        }}
        userGrade={profile.grade}
        topic={selectedWeakTopic}
        activeLang={activeLang}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 40,
  },

  // App-open Streak Toast
  streakToastContainer: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 4,
    backgroundColor: '#F8FAFC',
  },
  streakToastContent: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFBEB',
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderWidth: 1.5,
    borderColor: '#FDE68A',
    shadowColor: '#D97706',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    gap: 12,
  },
  streakToastFlame: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#FEF3C7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  streakToastTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: '#92400E',
  },
  streakToastSub: {
    fontSize: 12,
    color: '#B45309',
    marginTop: 1,
  },
  streakToastClose: {
    padding: 6,
  },
  streakToastCloseText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#B45309',
  },

  // Kid-Friendly Vibrant Hero Card: Daily Mission
  heroCard: {
    borderRadius: 22,
    padding: 18,
    marginBottom: 16,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.22,
    shadowRadius: 14,
    elevation: 6,
  },
  heroCardActive: {
    backgroundColor: '#2563EB', // Vibrant bright Royal Blue
    shadowColor: '#1D4ED8',
  },
  heroCardCompleted: {
    backgroundColor: '#059669', // Bright cheerful Emerald Green
    shadowColor: '#047857',
  },
  heroTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  heroBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },
  heroBadgeActive: {
    backgroundColor: 'rgba(255, 255, 255, 0.22)',
  },
  heroBadgeCompleted: {
    backgroundColor: 'rgba(255, 255, 255, 0.22)',
  },
  heroBadgeText: {
    fontSize: 11,
    fontWeight: '900',
    color: '#FFFFFF',
    letterSpacing: 0.6,
  },
  statusPill: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusPillDone: {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
  },
  statusPillPending: {
    backgroundColor: 'rgba(255, 255, 255, 0.22)',
  },
  statusPillText: {
    fontSize: 11,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  heroBodyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  heroTextCol: {
    flex: 1,
    paddingRight: 8,
  },
  heroTitle: {
    fontSize: 19,
    fontWeight: '900',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  heroSub: {
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.92)',
    lineHeight: 18,
  },
  heroIllustrationCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.22)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.35)',
  },
  heroIllustrationEmoji: {
    fontSize: 26,
  },
  heroProgressTrack: {
    height: 7,
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    borderRadius: 4,
    overflow: 'hidden',
  },
  heroProgressBar: {
    height: '100%',
    borderRadius: 4,
  },

  // Daily Super Kid Brain Gym Card Styles
  dailyGymCard: {
    backgroundColor: '#FAF5FF',
    borderRadius: 22,
    padding: 16,
    marginBottom: 16,
    borderWidth: 2.5,
    borderColor: '#8B5CF6',
    shadowColor: '#8B5CF6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 3,
  },
  dailyGymTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  dailyGymBadge: {
    backgroundColor: '#8B5CF6',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  dailyGymBadgeDone: {
    backgroundColor: '#10B981',
  },
  dailyGymBadgeText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  brainMatrixPill: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: BORDER_RADIUS.full,
    borderWidth: 1.5,
    borderColor: '#38BDF8',
  },
  brainMatrixPillText: {
    color: '#0284C7',
    fontSize: 11,
    fontWeight: '800',
  },
  dailyGymMainRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 12,
  },
  dailyGymIconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#C4B5FD',
  },
  dailyGymIconEmoji: {
    fontSize: 24,
  },
  dailyGymTextBox: {
    flex: 1,
  },
  dailyGymTitle: {
    color: '#3B0764',
    fontSize: 16,
    fontWeight: '900',
  },
  dailyGymSub: {
    color: '#6B21A8',
    fontSize: 12,
    marginTop: 2,
    lineHeight: 16,
    fontWeight: '600',
  },
  dailyGymActionBtn: {
    backgroundColor: '#8B5CF6',
    borderRadius: 14,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 4,
    borderBottomColor: '#6D28D9',
  },
  dailyGymActionBtnDone: {
    backgroundColor: '#10B981',
    borderBottomColor: '#059669',
  },
  dailyGymActionText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '900',
    letterSpacing: 0.5,
  },

  // Adaptive Weak Topic Remediation Card Styles
  weakTopicCard: {
    backgroundColor: '#FFFBEB',
    borderRadius: 22,
    padding: 16,
    marginBottom: 16,
    borderWidth: 2.5,
    borderColor: '#F59E0B',
    shadowColor: '#F59E0B',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 3,
  },
  weakTopicTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  weakTopicBadge: {
    backgroundColor: '#F59E0B',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  weakTopicBadgeText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  weakTopicAccuracy: {
    fontSize: 12,
    color: '#92400E',
    fontWeight: '800',
  },
  weakTopicContentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  weakTopicIconBox: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#FDE68A',
  },
  weakTopicIconEmoji: {
    fontSize: 22,
  },
  weakTopicTextBox: {
    flex: 1,
  },
  weakTopicTitle: {
    color: '#78350F',
    fontSize: 15,
    fontWeight: '900',
  },
  weakTopicSub: {
    color: '#92400E',
    fontSize: 12,
    marginTop: 2,
    fontWeight: '600',
  },
  weakTopicHint: {
    color: '#B45309',
    fontSize: 11,
    fontStyle: 'italic',
    marginTop: 3,
  },
  weakTopicGoBtn: {
    backgroundColor: '#F59E0B',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 12,
    borderBottomWidth: 3,
    borderBottomColor: '#D97706',
  },
  weakTopicGoText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '900',
  },

  // Weekly Olympiad Banner Styles
  olympiadBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEF2FF',
    borderRadius: 22,
    padding: 16,
    marginBottom: 16,
    borderWidth: 2.5,
    borderColor: '#6366F1',
    shadowColor: '#6366F1',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 3,
  },
  olympiadIconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#C7D2FE',
    marginRight: 12,
  },
  olympiadIconEmoji: {
    fontSize: 26,
  },
  olympiadTextBox: {
    flex: 1,
  },
  olympiadBadgeRow: {
    flexDirection: 'row',
    marginBottom: 3,
  },
  olympiadBadge: {
    backgroundColor: '#4F46E5',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  olympiadBadgeText: {
    color: '#FFFFFF',
    fontSize: 8,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  olympiadTitle: {
    color: '#312E81',
    fontSize: 15,
    fontWeight: '900',
  },
  olympiadSub: {
    color: '#4338CA',
    fontSize: 11,
    marginTop: 2,
    lineHeight: 15,
    fontWeight: '600',
  },
  olympiadActionBtn: {
    backgroundColor: '#4F46E5',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 12,
    marginLeft: 8,
    borderBottomWidth: 3,
    borderBottomColor: '#3730A3',
  },
  olympiadActionText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '900',
  },

  // Section Header
  sectionHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 12,
    paddingHorizontal: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#0F172A',
  },
  sectionSub: {
    fontSize: 12,
    fontWeight: '600',
    color: '#64748B',
  },

  // Modern Clean Subject Cards
  cleanSubjectCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 16,
    marginBottom: 14,
    shadowColor: '#64748B',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 3,
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
  },
  subjectIconBox: {
    width: 52,
    height: 52,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  subjectEmoji: {
    fontSize: 26,
  },
  subjectTextBox: {
    flex: 1,
    marginRight: 10,
  },
  subjectTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 3,
  },
  subjectName: {
    fontSize: 16,
    fontWeight: '800',
    color: '#1E293B',
  },
  lessonBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  lessonBadgeText: {
    fontSize: 11,
    fontWeight: '700',
  },
  lessonName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#334155',
    marginBottom: 2,
  },
  bookSub: {
    fontSize: 11,
    color: '#94A3B8',
  },
  playBtnCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 2,
  },
  playBtnArrow: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '900',
    marginLeft: 2,
  },

  // Shortcuts Bar
  shortcutsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginTop: 6,
    marginBottom: 16,
  },
  shortcutPill: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 16,
    gap: 6,
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    shadowColor: '#64748B',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  shortcutEmoji: {
    fontSize: 16,
  },
  shortcutLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: '#334155',
  },

  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.55)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    padding: 20,
    maxHeight: '88%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    paddingBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  modalAvatarRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  largeAvatarBubble: {
    width: 52,
    height: 52,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
  },
  largeAvatarEmoji: {
    fontSize: 30,
  },
  modalUserName: {
    fontSize: 18,
    fontWeight: '800',
    color: '#0F172A',
  },
  modalUserClass: {
    fontSize: 13,
    fontWeight: '600',
    color: '#2563EB',
    marginTop: 1,
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
    fontSize: 15,
    fontWeight: '800',
    color: '#475569',
  },

  // Dedicated Streak & Stats Hub inside Settings
  streakSettingsCard: {
    backgroundColor: '#FFFBEB',
    borderRadius: 18,
    padding: 16,
    borderWidth: 1.5,
    borderColor: '#FDE68A',
    marginBottom: 18,
  },
  streakCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  streakFlameBadge: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#FEF3C7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  streakCardDays: {
    fontSize: 16,
    fontWeight: '800',
    color: '#92400E',
  },
  streakCardSubtitle: {
    fontSize: 12,
    color: '#B45309',
    marginTop: 2,
    lineHeight: 16,
  },
  streakStatsDivider: {
    height: 1,
    backgroundColor: '#FDE68A',
    marginVertical: 12,
  },
  streakStatsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  streakStatCol: {
    alignItems: 'center',
  },
  streakStatVal: {
    fontSize: 15,
    fontWeight: '800',
    color: '#1E293B',
  },
  streakStatLbl: {
    fontSize: 11,
    fontWeight: '600',
    color: '#92400E',
    marginTop: 2,
  },

  sheetSectionTitle: {
    fontSize: 12,
    fontWeight: '800',
    color: '#64748B',
    marginBottom: 10,
    textTransform: 'uppercase',
    letterSpacing: 0.6,
  },
  langSelectorRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 18,
  },
  langPill: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderWidth: 2,
    borderColor: '#E2E8F0',
    gap: 8,
  },
  langPillActive: {
    backgroundColor: '#EFF6FF',
    borderColor: '#2563EB',
    shadowColor: '#2563EB',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 3,
  },
  langPillFlag: {
    fontSize: 24,
  },
  langPillTextCol: {
    flex: 1,
  },
  langPillText: {
    fontSize: 14,
    fontWeight: '800',
    color: '#475569',
  },
  langPillTextActive: {
    color: '#1D4ED8',
    fontWeight: '900',
  },
  langPillSub: {
    fontSize: 10,
    fontWeight: '600',
    color: '#64748B',
    marginTop: 1,
  },
  langCheckCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#2563EB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  langCheckText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '900',
  },
  avatarScroll: {
    flexDirection: 'row',
    marginBottom: 18,
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
    borderColor: '#2563EB',
    transform: [{ scale: 1.08 }],
  },
  avatarOptionEmoji: {
    fontSize: 24,
  },
  menuItemsList: {
    gap: 8,
    marginBottom: 16,
  },
  menuItemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#F8FAFC',
    borderRadius: 14,
    gap: 12,
  },
  menuItemIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuItemTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1E293B',
  },
  menuItemSub: {
    fontSize: 11,
    color: '#64748B',
    marginTop: 1,
  },
  menuItemArrow: {
    fontSize: 16,
    fontWeight: '700',
    color: '#94A3B8',
  },
  modalCloseBtn: {
    backgroundColor: '#2563EB',
    borderRadius: 14,
    paddingVertical: 12,
    alignItems: 'center',
  },
  modalCloseBtnText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
  announcementBanner: {
    borderRadius: BORDER_RADIUS.md,
    paddingHorizontal: SPACING.md,
    paddingVertical: 10,
    marginBottom: SPACING.md,
    flexDirection: 'row',
    alignItems: 'center',
  },
  announcementFestive: {
    backgroundColor: '#FEF3C7',
    borderWidth: 1,
    borderColor: COLORS.gold,
  },
  announcementInfo: {
    backgroundColor: '#EFF6FF',
    borderWidth: 1,
    borderColor: '#93C5FD',
  },
  announcementAlert: {
    backgroundColor: '#ECFDF5',
    borderWidth: 1,
    borderColor: '#10B981',
  },
  announcementText: {
    fontSize: 13,
    fontWeight: '700',
    color: COLORS.textDark,
    lineHeight: 18,
    flex: 1,
  },
  offerBannerContainer: {
    backgroundColor: '#FFFBEB',
    borderRadius: 20,
    padding: SPACING.md,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#F59E0B',
    shadowColor: '#F59E0B',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  offerBadge: {
    backgroundColor: '#F59E0B',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  offerBadgeText: {
    color: '#FFFFFF',
    fontWeight: '900',
    fontSize: 11,
  },
  offerTitle: {
    color: '#78350F',
    fontWeight: '800',
    fontSize: 13,
  },
  offerPrice: {
    color: '#92400E',
    fontSize: 11,
    marginTop: 2,
  },

  // 1. Gamified Loot Strip
  champLootStrip: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: '#E2E8F0',
    shadowColor: '#64748B',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  lootStripItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  lootStripEmoji: {
    fontSize: 20,
  },
  lootStripVal: {
    fontSize: 15,
    fontWeight: '900',
    color: '#0F172A',
  },
  lootStripLbl: {
    fontSize: 10,
    fontWeight: '800',
    color: '#64748B',
    textTransform: 'uppercase',
  },
  lootStripDivider: {
    width: 1.5,
    height: 24,
    backgroundColor: '#F1F5F9',
  },

  // 2. Lucky Spin Banner
  luckySpinBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF7ED',
    borderRadius: 22,
    padding: 16,
    marginBottom: 16,
    borderWidth: 2.5,
    borderColor: '#FB923C',
    shadowColor: '#FB923C',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 3,
  },
  luckySpinIconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#FFEDD5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    borderWidth: 2,
    borderColor: '#FB923C',
  },
  luckySpinIconEmoji: {
    fontSize: 26,
  },
  luckySpinTextBox: {
    flex: 1,
  },
  luckySpinBadgeRow: {
    flexDirection: 'row',
    marginBottom: 3,
  },
  luckySpinBadge: {
    backgroundColor: '#F97316',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  luckySpinBadgeFree: {
    backgroundColor: '#10B981',
  },
  luckySpinBadgeText: {
    fontSize: 9,
    fontWeight: '900',
    color: '#FFFFFF',
    letterSpacing: 0.5,
  },
  luckySpinTitle: {
    fontSize: 15,
    fontWeight: '900',
    color: '#7C2D12',
    marginTop: 2,
  },
  luckySpinSub: {
    fontSize: 11,
    color: '#9A3412',
    marginTop: 1,
    fontWeight: '600',
  },
  luckySpinActionBtn: {
    backgroundColor: '#F97316',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 12,
    borderBottomWidth: 3,
    borderBottomColor: '#C2410C',
    marginLeft: 6,
  },
  luckySpinActionText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '900',
  },

  // 3. Champ Arcade
  arcadeHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 10,
  },
  arcadeTitle: {
    fontSize: 18,
    fontWeight: '900',
    color: '#0F172A',
  },
  arcadeSub: {
    fontSize: 12,
    color: '#64748B',
    fontWeight: '600',
  },
  arcadeLiveBadge: {
    backgroundColor: '#EF4444',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: BORDER_RADIUS.round,
  },
  arcadeLiveText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '900',
  },
  arcadeGrid: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  arcadeCard: {
    flex: 1,
    borderRadius: 20,
    padding: 14,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.35)',
    ...SHADOWS.medium,
  },
  arcadeCardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  arcadeCardEmoji: {
    fontSize: 28,
  },
  arcadeCardBadge: {
    backgroundColor: 'rgba(0, 0, 0, 0.22)',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: BORDER_RADIUS.round,
  },
  arcadeCardBadgeText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '800',
  },
  arcadeCardTitle: {
    fontSize: 15,
    fontWeight: '900',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  arcadeCardDesc: {
    fontSize: 11,
    color: 'rgba(255, 255, 255, 0.9)',
    lineHeight: 15,
    marginBottom: 10,
  },
  arcadeCardBtn: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 8,
    borderRadius: BORDER_RADIUS.round,
    alignItems: 'center',
  },
  arcadeCardBtnText: {
    color: '#0F172A',
    fontSize: 12,
    fontWeight: '900',
  },

  // 4. STEM & Math Practical Concept Labs Hero Gateway Card
  labGatewayCard: {
    backgroundColor: '#ECFDF5',
    borderRadius: 22,
    padding: 16,
    marginBottom: 16,
    borderWidth: 2.5,
    borderColor: '#10B981',
    shadowColor: '#10B981',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 3,
  },
  labGatewayTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  labGatewayLiveBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#10B981',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  labGatewayLiveDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#FFFFFF',
  },
  labGatewayLiveText: {
    color: '#FFFFFF',
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  labGatewayGradeBadge: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: BORDER_RADIUS.round,
    borderWidth: 1.5,
    borderColor: '#A7F3D0',
  },
  labGatewayGradeText: {
    color: '#065F46',
    fontSize: 10,
    fontWeight: '800',
  },
  labGatewayMainRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  labGatewayTextCol: {
    flex: 1,
    paddingRight: 10,
  },
  labGatewayTitle: {
    color: '#047857',
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
    marginBottom: 2,
  },
  labGatewayPunchline: {
    color: '#064E3B',
    fontSize: 17,
    fontWeight: '900',
    marginBottom: 4,
  },
  labGatewayDesc: {
    color: '#047857',
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '600',
  },
  labGatewayFlaskBox: {
    width: 52,
    height: 52,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#34D399',
    justifyContent: 'center',
    alignItems: 'center',
  },
  labGatewayFlaskEmoji: {
    fontSize: 28,
  },
  labGatewayPillsRow: {
    flexDirection: 'row',
    gap: 6,
    marginBottom: 10,
    flexWrap: 'wrap',
  },
  labFeaturePill: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: '#A7F3D0',
  },
  labFeatureText: {
    color: '#065F46',
    fontSize: 10,
    fontWeight: '800',
  },
  labGatewayActionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  enterLabActionBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#10B981',
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 4,
    borderBottomColor: '#059669',
  },
  enterLabActionText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  enterLabActionArrow: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#047857',
    justifyContent: 'center',
    alignItems: 'center',
  },
  enterLabArrowText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '900',
  },
  speedBrainActionBtn: {
    backgroundColor: '#0284C7',
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 4,
    borderBottomColor: '#0369A1',
  },
  speedBrainActionText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '900',
  },
});
