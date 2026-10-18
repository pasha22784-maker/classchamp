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
import { CONCEPT_LABS_BY_GRADE, getGradeGroupKey } from '../data/conceptLabsRegistry';
import { useUserStore, getTodayDateString } from '../store/useUserStore';
import { getChaptersForGradeSubject, NCERT_BOOKS } from '../data/chaptersData';
import { fetchGlobalConfig } from '../services/adminConfig';
import { Subject, Grade, ChapterLesson, AppGlobalConfig } from '../types';
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
      <StatusBar barStyle="light-content" backgroundColor={COLORS.primaryDark} />

      {/* Clean & Smart Header: Avatar (opens Settings) + Greeting + Stars */}
      <ChampHeader
        title={`Hi, ${profile.name}! 👋`}
        subtitle={`${gradeConfig.label} • NCERT`}
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
                  ? `${profile.currentStreak} Day Streak Active!`
                  : 'Start Your Streak Today!'}
              </Text>
              <Text style={styles.streakToastSub}>
                {isCompletedToday
                  ? "Today's goal completed! Shabaash 🌟"
                  : 'Complete 10 min practice to keep it burning!'}
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
              <Text style={styles.lootStripLbl}>Streak</Text>
            </View>
          </View>

          <View style={styles.lootStripDivider} />

          <View style={styles.lootStripItem}>
            <Text style={styles.lootStripEmoji}>🛡️</Text>
            <View>
              <Text style={styles.lootStripVal}>{profile.streakShields ?? 0}</Text>
              <Text style={styles.lootStripLbl}>Shields</Text>
            </View>
          </View>

          <View style={styles.lootStripDivider} />

          <View style={styles.lootStripItem}>
            <Text style={styles.lootStripEmoji}>⭐</Text>
            <View>
              <Text style={styles.lootStripVal}>{profile.totalStars}</Text>
              <Text style={styles.lootStripLbl}>Stars</Text>
            </View>
          </View>

          <View style={styles.lootStripDivider} />

          <View style={styles.lootStripItem}>
            <Text style={styles.lootStripEmoji}>⚡</Text>
            <View>
              <Text style={styles.lootStripVal}>{profile.xp ?? 0}</Text>
              <Text style={styles.lootStripLbl}>XP</Text>
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
                {isCompletedToday ? '🌟 MISSION ACCOMPLISHED' : '🎯 DAILY MISSION'}
              </Text>
            </View>
            <View style={[styles.statusPill, isCompletedToday ? styles.statusPillDone : styles.statusPillPending]}>
              <Text style={styles.statusPillText}>
                {isCompletedToday ? '100% Done ✅' : '10 Min Goal ⏱️'}
              </Text>
            </View>
          </View>

          <View style={styles.heroBodyRow}>
            <View style={styles.heroTextCol}>
              <Text style={styles.heroTitle}>
                {isCompletedToday ? 'Shabaash, Champ! 🎉' : 'Daily 10-Min CBSE Quest 🚀'}
              </Text>
              <Text style={styles.heroSub}>
                {isCompletedToday
                  ? 'Aapne aaj ka target poora kar liya! Neeche kisi bhi subject ki practice jari rakhein.'
                  : 'Rozana 10 sawaal solve karke naye stars jeetein aur CBSE concepts master karein!'}
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
                  {isFreeSpinReady ? '🎁 FREE SPIN READY' : '⭐ EXTRA SPIN'}
                </Text>
              </View>
            </View>
            <Text style={styles.luckySpinTitle}>Daily Lucky Spin Wheel</Text>
            <Text style={styles.luckySpinSub}>
              Spin daily to win Stars, Shields, Trophies & XP!
            </Text>
          </View>
          <View style={styles.luckySpinActionBtn}>
            <Text style={styles.luckySpinActionText}>SPIN ›</Text>
          </View>
        </TouchableOpacity>

        {/* Section Heading: Clean & Minimal */}
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionTitle}>Select Subject</Text>
          <Text style={styles.sectionSub}>100% CBSE & NCERT</Text>
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
              <Text style={styles.subjectName}>Mathematics</Text>
              <View style={[styles.lessonBadge, { backgroundColor: '#DBEAFE' }]}>
                <Text style={[styles.lessonBadgeText, { color: '#1E40AF' }]}>
                  {mathsInfo.isResume ? 'Resume ▶' : `Ch ${mathsInfo.lesson.number}`}
                </Text>
              </View>
            </View>
            <Text style={styles.lessonName} numberOfLines={1}>
              {mathsInfo.lesson.title}
            </Text>
            <Text style={styles.bookSub} numberOfLines={1}>
              {bookInfo.mathsBook} • 10 Practice Questions
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

        {/* 3. Hindi Smart Card */}
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
                  {hindiInfo.isResume ? 'Resume ▶' : `पाठ ${hindiInfo.lesson.number}`}
                </Text>
              </View>
            </View>
            <Text style={styles.lessonName} numberOfLines={1}>
              {hindiInfo.lesson.title}
            </Text>
            <Text style={styles.bookSub} numberOfLines={1}>
              {bookInfo.hindiBook} • 10 Practice Questions
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
            <Text style={styles.shortcutLabel}>365 Plan</Text>
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
            <Text style={styles.shortcutLabel}>All Chapters</Text>
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
            <Text style={styles.shortcutLabel}>Parent Zone</Text>
          </TouchableOpacity>
        </View>

        {/* Champ Arcade: Exciting Kids Educational Games */}
        <View style={styles.arcadeHeaderRow}>
          <View>
            <Text style={styles.arcadeTitle}>🎮 Champ Arcade</Text>
            <Text style={styles.arcadeSub}>High-energy educational mini games</Text>
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
            <Text style={styles.arcadeCardTitle}>Balloon Pop Blitz</Text>
            <Text style={styles.arcadeCardDesc}>
              Pop the right balloons fast! Beat the clock & score combos 🔥
            </Text>
            <View style={styles.arcadeCardBtn}>
              <Text style={styles.arcadeCardBtnText}>Play Now ▶</Text>
            </View>
          </TouchableOpacity>

          {/* 2. Mind Match 3D */}
          <TouchableOpacity
            style={[styles.arcadeCard, { backgroundColor: '#4338CA' }]}
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
            <Text style={styles.arcadeCardTitle}>Mind Match 3D</Text>
            <Text style={styles.arcadeCardDesc}>
              Flip & match memory pairs! Earn 3-star rating & big XP.
            </Text>
            <View style={styles.arcadeCardBtn}>
              <Text style={styles.arcadeCardBtnText}>Play Now ▶</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Concept Labs: Physics Wallah & PhET Style Practical Hands-On Simulations */}
        <View style={styles.arcadeHeaderRow}>
          <View>
            <Text style={styles.arcadeTitle}>🧪 Concept Labs</Text>
            <Text style={styles.arcadeSub}>Practical Learning • खेल-खेल में सीखें!</Text>
          </View>
          <View style={[styles.arcadeLiveBadge, { backgroundColor: '#10B981' }]}>
            <Text style={styles.arcadeLiveText}>PRACTICAL 🔬</Text>
          </View>
        </View>

        <View style={styles.conceptLabList}>
          {CONCEPT_LABS_BY_GRADE[getGradeGroupKey(profile.grade)].map((lab) => (
            <TouchableOpacity
              key={lab.id}
              style={[styles.conceptLabCard, { backgroundColor: '#1E293B', borderColor: lab.accentColor }]}
              activeOpacity={0.88}
              onPress={() => handleOpenConceptLab(lab.id)}
            >
              <View style={[styles.conceptLabIconBox, { backgroundColor: lab.boxColor }]}>
                <Text style={styles.conceptLabEmoji}>{lab.icon}</Text>
              </View>
              <View style={styles.conceptLabTextBox}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 2 }}>
                  <Text style={styles.conceptLabTitle}>{lab.title}</Text>
                </View>
                <View style={{ marginBottom: 3 }}>
                  <Text style={{ color: lab.accentColor, fontSize: 10, fontWeight: '800' }}>{lab.badge}</Text>
                </View>
                <Text style={styles.conceptLabDesc}>{lab.subtitle}</Text>
              </View>
              <View style={[styles.conceptLabPlayBtn, { backgroundColor: lab.accentColor }]}>
                <Text style={styles.conceptLabPlayText}>Lab ▶</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
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
                  <Text style={styles.modalUserClass}>{gradeConfig.label} (CBSE/NCERT)</Text>
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
                    {profile.currentStreak} Day Practice Streak
                  </Text>
                  <Text style={styles.streakCardSubtitle}>
                    {isCompletedToday
                      ? 'Streak safe! Today’s 10-min practice completed 🌟'
                      : 'Practice 10 minutes today to maintain your streak!'}
                  </Text>
                </View>
              </View>

              <View style={styles.streakStatsDivider} />

              <View style={styles.streakStatsRow}>
                <View style={styles.streakStatCol}>
                  <Text style={styles.streakStatVal}>⭐ {profile.totalStars}</Text>
                  <Text style={styles.streakStatLbl}>Stars</Text>
                </View>
                <View style={styles.streakStatCol}>
                  <Text style={styles.streakStatVal}>🛡️ {profile.streakShields ?? 0}</Text>
                  <Text style={styles.streakStatLbl}>Shields</Text>
                </View>
                <View style={styles.streakStatCol}>
                  <Text style={styles.streakStatVal}>⚡ {profile.xp ?? 0}</Text>
                  <Text style={styles.streakStatLbl}>XP</Text>
                </View>
                <View style={styles.streakStatCol}>
                  <Text style={styles.streakStatVal}>🏆 {profile.totalTrophies}</Text>
                  <Text style={styles.streakStatLbl}>Trophies</Text>
                </View>
              </View>
            </View>

            {/* Mascot Avatar Selector */}
            <Text style={styles.sheetSectionTitle}>Change Avatar Mascot:</Text>
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
                  <Text style={styles.menuItemTitle}>Change Class ({gradeConfig.label})</Text>
                  <Text style={styles.menuItemSub}>Parent Gate protected</Text>
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
                  <Text style={styles.menuItemTitle}>365-Day Annual Roadmap</Text>
                  <Text style={styles.menuItemSub}>View all 52 weeks</Text>
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
                  <Text style={styles.menuItemTitle}>NCERT Chapter Vault</Text>
                  <Text style={styles.menuItemSub}>Browse all lessons</Text>
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
                  <Text style={styles.menuItemTitle}>Parent Zone & Settings</Text>
                  <Text style={styles.menuItemSub}>Audio, report & reset</Text>
                </View>
                <Text style={styles.menuItemArrow}>→</Text>
              </TouchableOpacity>
            </View>

            {/* Close Button */}
            <TouchableOpacity
              style={styles.modalCloseBtn}
              onPress={() => setShowSettingsModal(false)}
            >
              <Text style={styles.modalCloseBtnText}>Done</Text>
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
    marginBottom: 20,
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
    borderRadius: 18,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#64748B',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#F1F5F9',
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
    marginTop: 10,
    marginBottom: 8,
  },
  shortcutPill: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 14,
    gap: 6,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    shadowColor: '#64748B',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
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
    backgroundColor: COLORS.primaryDark,
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.md,
    marginBottom: SPACING.md,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: COLORS.gold,
  },
  offerBadge: {
    backgroundColor: COLORS.gold,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  offerBadgeText: {
    color: COLORS.textDark,
    fontWeight: '900',
    fontSize: 11,
  },
  offerTitle: {
    color: COLORS.white,
    fontWeight: '800',
    fontSize: 13,
  },
  offerPrice: {
    color: '#E2E8F0',
    fontSize: 11,
    marginTop: 2,
  },

  // 1. Gamified Loot Strip
  champLootStrip: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1E293B',
    borderRadius: BORDER_RADIUS.lg,
    paddingVertical: 10,
    paddingHorizontal: SPACING.md,
    marginBottom: SPACING.md,
    ...SHADOWS.small,
  },
  lootStripItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  lootStripEmoji: {
    fontSize: 18,
  },
  lootStripVal: {
    fontSize: 14,
    fontWeight: '900',
    color: '#FFFFFF',
  },
  lootStripLbl: {
    fontSize: 10,
    fontWeight: '700',
    color: '#94A3B8',
  },
  lootStripDivider: {
    width: 1,
    height: 22,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
  },

  // 2. Lucky Spin Banner
  luckySpinBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#312E81', // Mystical Indigo
    borderRadius: BORDER_RADIUS.xl,
    padding: SPACING.md,
    marginVertical: SPACING.sm,
    borderWidth: 2,
    borderColor: '#F59E0B',
    ...SHADOWS.medium,
  },
  luckySpinIconCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#F59E0B',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING.sm,
  },
  luckySpinIconEmoji: {
    fontSize: 26,
  },
  luckySpinTextBox: {
    flex: 1,
  },
  luckySpinBadgeRow: {
    flexDirection: 'row',
    marginBottom: 2,
  },
  luckySpinBadge: {
    backgroundColor: 'rgba(245, 158, 11, 0.25)',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#F59E0B',
  },
  luckySpinBadgeFree: {
    backgroundColor: '#10B981',
    borderColor: '#34D399',
  },
  luckySpinBadgeText: {
    fontSize: 9,
    fontWeight: '900',
    color: '#FDE047',
  },
  luckySpinTitle: {
    fontSize: 15,
    fontWeight: '900',
    color: '#FFFFFF',
    marginTop: 2,
  },
  luckySpinSub: {
    fontSize: 11,
    color: '#C7D2FE',
    marginTop: 1,
  },
  luckySpinActionBtn: {
    backgroundColor: '#F59E0B',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: BORDER_RADIUS.round,
    marginLeft: 6,
  },
  luckySpinActionText: {
    color: '#78350F',
    fontSize: 12,
    fontWeight: '900',
  },

  // 3. Champ Arcade
  arcadeHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SPACING.lg,
    marginBottom: SPACING.sm,
  },
  arcadeTitle: {
    fontSize: 18,
    fontWeight: '900',
    color: COLORS.textDark,
  },
  arcadeSub: {
    fontSize: 12,
    color: COLORS.textLight,
  },
  arcadeLiveBadge: {
    backgroundColor: '#DC2626',
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
    marginBottom: SPACING.xl,
  },
  arcadeCard: {
    flex: 1,
    borderRadius: BORDER_RADIUS.xl,
    padding: SPACING.md,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.25)',
    ...SHADOWS.medium,
  },
  arcadeCardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.xs,
  },
  arcadeCardEmoji: {
    fontSize: 28,
  },
  arcadeCardBadge: {
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
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
    color: 'rgba(255, 255, 255, 0.85)',
    lineHeight: 15,
    marginBottom: SPACING.sm,
  },
  arcadeCardBtn: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 6,
    borderRadius: BORDER_RADIUS.round,
    alignItems: 'center',
  },
  arcadeCardBtnText: {
    color: '#0F172A',
    fontSize: 12,
    fontWeight: '900',
  },

  // 4. Concept Labs
  conceptLabList: {
    gap: 10,
    marginBottom: SPACING.xl,
  },
  conceptLabCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: BORDER_RADIUS.xl,
    padding: SPACING.md,
    borderWidth: 1.5,
    ...SHADOWS.medium,
  },
  conceptLabIconBox: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING.sm,
  },
  conceptLabEmoji: {
    fontSize: 24,
  },
  conceptLabTextBox: {
    flex: 1,
  },
  conceptLabTitle: {
    fontSize: 15,
    fontWeight: '900',
    color: '#FFFFFF',
    marginBottom: 2,
  },
  conceptLabDesc: {
    fontSize: 11,
    color: '#94A3B8',
    lineHeight: 15,
  },
  conceptLabPlayBtn: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: BORDER_RADIUS.round,
    marginLeft: 8,
  },
  conceptLabPlayText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '900',
  },
});
