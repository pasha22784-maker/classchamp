import React, { useEffect, useState, useRef, useMemo } from 'react';
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
import { SizeComparisonLabModal } from '../components/conceptGames/SizeComparisonLabModal';
import { AlphabetPhonicsLabModal } from '../components/conceptGames/AlphabetPhonicsLabModal';
import { EnglishOppositesRhymesLabModal } from '../components/conceptGames/EnglishOppositesRhymesLabModal';
import { EnglishWordsVocabularyLabModal } from '../components/conceptGames/EnglishWordsVocabularyLabModal';
import { HindiVarnamalaLabModal } from '../components/conceptGames/HindiVarnamalaLabModal';
import { HindiVyanjanLabModal } from '../components/conceptGames/HindiVyanjanLabModal';
import { HindiPashuPakshiLabModal } from '../components/conceptGames/HindiPashuPakshiLabModal';
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
import { UkgMathsInteractiveLabModal, UkgLabStation } from '../components/conceptGames/UkgMathsInteractiveLabModal';
import { Class1EnglishInteractiveLabModal, Class1EnglishLabStation } from '../components/conceptGames/Class1EnglishInteractiveLabModal';
import { ConceptLabHubModal } from '../components/conceptGames/ConceptLabHubModal';
import { KidsConceptArcadeModal, KidsArcadeGameType } from '../components/conceptGames/KidsConceptArcadeModal';
import { DailyBrainGymModal } from '../components/dailyWorkout/DailyBrainGymModal';
import { BrainDevelopmentMatrixModal } from '../components/cognitive/BrainDevelopmentMatrixModal';
import { WeeklyOlympiadTestModal } from '../components/assessment/WeeklyOlympiadTestModal';
import { TargetedWeakTopicModal } from '../components/adaptive/TargetedWeakTopicModal';
import { CONCEPT_LABS_BY_GRADE, getGradeGroupKey, ALL_CONCEPT_LABS } from '../data/conceptLabsRegistry';
import { CONCEPT_GAMES_BY_SUBJECT } from '../data/conceptGamesRegistry';
import { TopicSelectionModal } from '../components/quiz/TopicSelectionModal';
import { generateQuestionsForSession } from '../data/questionGenerator';
import { useUserStore, getTodayDateString } from '../store/useUserStore';
import { getChaptersForGradeSubject, NCERT_BOOKS } from '../data/chaptersData';
import { fetchGlobalConfig } from '../services/adminConfig';
import { Subject, Grade, ChapterLesson, AppGlobalConfig, WeakTopicItem, AppLanguage } from '../types';
import { triggerHaptic } from '../utils/haptics';
import { getActiveLanguage, STRINGS, cleanBilingualForEnglish, cleanBilingualForHindi, getChapterTitle } from '../utils/language';

interface DashboardScreenProps {
  onStartQuiz: (subject: Subject, chapterTitle?: string, isExtraPractice?: boolean, startIndex?: number) => void;
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
  const { profile, loadProfile, setAvatar, setPreferredLanguage, getChapterProgress } = useUserStore();
  const activeLang: AppLanguage = getActiveLanguage(profile);
  const s = STRINGS[activeLang];
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [showPaywallModal, setShowPaywallModal] = useState(false);
  const [showLuckySpinModal, setShowLuckySpinModal] = useState(false);
  const [selectedTopicData, setSelectedTopicData] = useState<{ subject: Subject; title: string; icon?: string; initialMode?: 'topics' | 'labs' | 'games' | 'questions' } | null>(null);
  const [showBalloonPopModal, setShowBalloonPopModal] = useState(false);
  const [showMemoryMatchModal, setShowMemoryMatchModal] = useState(false);
  const [showKidsConceptArcadeModal, setShowKidsConceptArcadeModal] = useState(false);
  const [selectedKidsArcadeGame, setSelectedKidsArcadeGame] = useState<KidsArcadeGameType | string | null>(null);
  const [arcadeChapterTitle, setArcadeChapterTitle] = useState<string | null>(null);
  const [arcadeGameTitle, setArcadeGameTitle] = useState<string | null>(null);
  const [showSizeComparisonModal, setShowSizeComparisonModal] = useState(false);
  const [showAlphabetPhonicsModal, setShowAlphabetPhonicsModal] = useState(false);
  const [showHindiVarnamalaModal, setShowHindiVarnamalaModal] = useState(false);
  const [showHindiVyanjanModal, setShowHindiVyanjanModal] = useState(false);
  const [showHindiPashuPakshiModal, setShowHindiPashuPakshiModal] = useState(false);
  const [arcadeFilterSubject, setArcadeFilterSubject] = useState<Subject>('maths');
  const [labsSubjectFilter, setLabsSubjectFilter] = useState<Subject>('maths');
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
  const [showEnglishOppositesLabModal, setShowEnglishOppositesLabModal] = useState(false);
  const [showEnglishWordsLabModal, setShowEnglishWordsLabModal] = useState(false);
  const [showConceptLabHub, setShowConceptLabHub] = useState(false);
  const [showDailyBrainGymModal, setShowDailyBrainGymModal] = useState(false);
  const [showBrainMatrixModal, setShowBrainMatrixModal] = useState(false);
  const [showOlympiadTestModal, setShowOlympiadTestModal] = useState(false);
  const [showWeakTopicModal, setShowWeakTopicModal] = useState(false);
  const [selectedWeakTopic, setSelectedWeakTopic] = useState<WeakTopicItem | null>(null);
  const [globalConfig, setGlobalConfig] = useState<AppGlobalConfig | null>(null);
  const [activeCategory, setActiveCategory] = useState<'subjects' | 'labs' | 'arcade' | 'all'>('subjects');
  const [showOfferDetailsModal, setShowOfferDetailsModal] = useState(false);
  const [showUkgMathsLabModal, setShowUkgMathsLabModal] = useState(false);
  const [ukgMathsStation, setUkgMathsStation] = useState<UkgLabStation>('ten_frame');
  const [showClass1EnglishLabModal, setShowClass1EnglishLabModal] = useState(false);
  const [class1EnglishStation, setClass1EnglishStation] = useState<Class1EnglishLabStation>('magic_phonics');
  const [showCompletedMissionBanner, setShowCompletedMissionBanner] = useState(true);

  const gradeGroupKey = getGradeGroupKey(profile.grade);
  const mathsLabsCount = useMemo(() => {
    const labs = CONCEPT_LABS_BY_GRADE[gradeGroupKey] || [];
    return labs.filter((l) => {
      if (l.subject && l.subject !== 'maths') return false;
      if (profile.grade === 'LKG') {
        if (l.grade === 'UKG' || l.id.startsWith('ukg_') || l.badge.includes('UKG')) return false;
      } else if (profile.grade === 'UKG') {
        if (l.grade === 'LKG' || (l.id.startsWith('maths_lab_') && !l.id.startsWith('ukg_maths_lab_')) || (l.id.startsWith('maths_skill_lab_') && !l.id.startsWith('ukg_maths_')) || (l.id.startsWith('skill_lab_') && !l.id.startsWith('ukg_'))) return false;
      }
      return true;
    }).length;
  }, [gradeGroupKey, profile.grade]);
  const englishLabsCount = useMemo(() => {
    const labs = CONCEPT_LABS_BY_GRADE[gradeGroupKey] || [];
    return labs.filter((l) => {
      if (l.subject !== 'english') return false;
      if (profile.grade === 'LKG') {
        if (l.grade === 'UKG' || l.id.startsWith('ukg_') || l.badge.includes('UKG')) return false;
      } else if (profile.grade === 'UKG') {
        if (l.grade === 'LKG' || (l.id.startsWith('skill_lab_') && !l.id.startsWith('ukg_'))) return false;
      }
      return true;
    }).length;
  }, [gradeGroupKey, profile.grade]);
  const hindiLabsCount = useMemo(() => {
    const labs = CONCEPT_LABS_BY_GRADE[gradeGroupKey] || [];
    return labs.filter((l) => l.subject === 'hindi').length;
  }, [gradeGroupKey]);

  const mathsGamesCount = useMemo(() => {
    const list = CONCEPT_GAMES_BY_SUBJECT.maths || [];
    return list.filter((g) => {
      if (profile.grade === 'LKG') {
        if (g.grade === 'UKG' || g.id.startsWith('game_ukg_') || g.badgeEn.includes('UKG')) return false;
      } else if (profile.grade === 'UKG') {
        if (g.grade === 'LKG' || (g.id.startsWith('game_math_ws_') && !g.id.startsWith('game_ukg_math_')) || (g.id.startsWith('game_maths_cat_') && !g.id.startsWith('game_ukg_math_'))) return false;
      }
      return true;
    }).length;
  }, [profile.grade]);

  const englishGamesCount = useMemo(() => {
    const list = CONCEPT_GAMES_BY_SUBJECT.english || [];
    return list.filter((g) => {
      if (profile.grade === 'LKG') {
        if (g.grade === 'UKG' || g.grade === 1 || g.id.startsWith('game_ukg_') || g.id.startsWith('game_c1_') || g.badgeEn.includes('UKG') || g.badgeEn.includes('Class 1')) return false;
      } else if (profile.grade === 'UKG') {
        if (g.grade === 'LKG' || g.grade === 1 || g.id.startsWith('game_c1_') || g.badgeEn.includes('Class 1') || (g.id.startsWith('game_skill_') && !g.id.startsWith('game_ukg_'))) return false;
      } else if (profile.grade === 1) {
        if (g.grade === 'LKG' || g.grade === 'UKG' || g.id.startsWith('game_skill_') || g.id.startsWith('game_ukg_') || g.badgeEn.includes('UKG') || g.badgeEn.includes('LKG')) return false;
      }
      return true;
    }).length;
  }, [profile.grade]);

  const filteredArcadeGames = useMemo(() => {
    const list = CONCEPT_GAMES_BY_SUBJECT[arcadeFilterSubject] || [];
    return list.filter((g) => {
      if (profile.grade === 'LKG') {
        if (g.grade === 'UKG' || g.grade === 1 || g.id.startsWith('game_ukg_') || g.id.startsWith('game_c1_') || g.badgeEn.includes('UKG') || g.badgeEn.includes('Class 1')) return false;
      } else if (profile.grade === 'UKG') {
        if (g.grade === 'LKG' || g.grade === 1 || g.id.startsWith('game_c1_') || g.badgeEn.includes('Class 1') || (g.id.startsWith('game_skill_') && !g.id.startsWith('game_ukg_'))) return false;
      } else if (profile.grade === 1) {
        if (g.grade === 'LKG' || g.grade === 'UKG' || g.id.startsWith('game_skill_') || g.id.startsWith('game_ukg_') || g.badgeEn.includes('UKG') || g.badgeEn.includes('LKG')) return false;
      }
      return true;
    });
  }, [arcadeFilterSubject, profile.grade]);

  const hindiGamesCount = CONCEPT_GAMES_BY_SUBJECT.hindi?.length || 0;

  const handleOpenConceptLab = (labId: string) => {
    triggerHaptic('medium');
    if (labId === 'size_scale_lab' || labId === 'size_comparison') setShowSizeComparisonModal(true);
    else if (labId === 'alphabet_phonics_lab') setShowAlphabetPhonicsModal(true);
    else if (labId === 'english_opposites_rhymes_lab') setShowEnglishOppositesLabModal(true);
    else if (labId === 'english_words_vocabulary_lab') setShowEnglishWordsLabModal(true);
    else if (labId === 'hindi_varnamala_lab') setShowHindiVarnamalaModal(true);
    else if (labId === 'hindi_vyanjan_lab') setShowHindiVyanjanModal(true);
    else if (labId === 'hindi_pashu_pakshi_lab') setShowHindiPashuPakshiModal(true);
    else if (labId === 'shape_sorter') setShowShapeSorterModal(true);
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
    else if (
      labId === 'ukg_maths_interactive_lab' ||
      labId === 'ukg_maths_ten_frame_lab' ||
      labId === 'ukg_maths_add_sub_beaker' ||
      labId === 'ukg_maths_coin_bank' ||
      labId === 'ukg_maths_geometry_lab' ||
      labId === 'ukg_maths_balance_lab' ||
      labId.startsWith('ukg_maths_')
    ) {
      if (labId.includes('ten_frame') || labId.includes('_a_') || labId.includes('_b_') || labId.includes('_c_') || labId.includes('_d_') || labId.endsWith('_a') || labId.endsWith('_b') || labId.endsWith('_c') || labId.endsWith('_d')) {
        setUkgMathsStation('ten_frame');
      } else if (labId.includes('add_sub') || labId.includes('_e_') || labId.includes('_f_') || labId.includes('_g_') || labId.includes('_h_') || labId.includes('_i_') || labId.endsWith('_e') || labId.endsWith('_f') || labId.endsWith('_g') || labId.endsWith('_h') || labId.endsWith('_i')) {
        setUkgMathsStation('add_sub');
      } else if (labId.includes('balance') || labId.includes('_j_') || labId.includes('_k_') || labId.includes('_l_') || labId.endsWith('_j') || labId.endsWith('_k') || labId.endsWith('_l')) {
        setUkgMathsStation('balance');
      } else if (labId.includes('geometry') || labId.includes('_m_') || labId.includes('_n_') || labId.includes('_o_') || labId.endsWith('_m') || labId.endsWith('_n') || labId.endsWith('_o')) {
        setUkgMathsStation('geometry');
      } else if (labId.includes('coin') || labId.includes('_p_') || labId.includes('_q_') || labId.includes('_r_') || labId.includes('_s_') || labId.endsWith('_p') || labId.endsWith('_q') || labId.endsWith('_r') || labId.endsWith('_s')) {
        setUkgMathsStation('coins');
      } else {
        setUkgMathsStation('ten_frame');
      }
      setShowUkgMathsLabModal(true);
    }
    else if (
      labId === 'class1_english_interactive_lab' ||
      labId.startsWith('c1_lab_') ||
      labId.startsWith('class1_english_')
    ) {
      if (labId.includes('magic') || labId.includes('phonic')) {
        setClass1EnglishStation('magic_phonics');
      } else if (labId.includes('syllable') || labId.includes('compound')) {
        setClass1EnglishStation('syllable_compound');
      } else if (labId.includes('vocab') || labId.includes('shade') || labId.includes('prefix')) {
        setClass1EnglishStation('vocab_shades');
      } else if (labId.includes('sentence') || labId.includes('grammar') || labId.includes('noun')) {
        setClass1EnglishStation('grammar_sentence');
      } else if (labId.includes('tense') || labId.includes('contraction') || labId.includes('verb')) {
        setClass1EnglishStation('tenses_contractions');
      } else {
        setClass1EnglishStation('magic_phonics');
      }
      setShowClass1EnglishLabModal(true);
    }
    else {
      const matched = ALL_CONCEPT_LABS.find((l) => l.id === labId);
      if (matched && matched.chapterTitle) {
        onStartQuiz(matched.subject || 'english', matched.chapterTitle, false, 0);
      }
    }
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

  const mathsChapters = getChaptersForGradeSubject(profile.grade, 'maths');
  const englishChapters = getChaptersForGradeSubject(profile.grade, 'english');
  const hindiChapters = getChaptersForGradeSubject(profile.grade, 'hindi');

  const completedMathsCount = mathsChapters.filter((c) => getChapterProgress(profile.grade, 'maths', c.title)?.isCompleted).length;
  const completedEnglishCount = englishChapters.filter((c) => getChapterProgress(profile.grade, 'english', c.title)?.isCompleted).length;
  const completedHindiCount = hindiChapters.filter((c) => getChapterProgress(profile.grade, 'hindi', c.title)?.isCompleted).length;

  const mathsProg = getChapterProgress(profile.grade, 'maths', mathsInfo.lesson.title);
  const englishProg = getChapterProgress(profile.grade, 'english', englishInfo.lesson.title);
  const hindiProg = getChapterProgress(profile.grade, 'hindi', hindiInfo.lesson.title);

  const handleSubjectClick = (subj: Subject, lessonTitle: string, icon?: string, mode: 'topics' | 'labs' | 'games' | 'questions' = 'topics') => {
    // Paywall/Subscribe disabled for manual testing as requested
    triggerHaptic('medium');
    setSelectedTopicData({
      subject: subj,
      title: lessonTitle,
      icon: icon || (subj === 'maths' ? '📐' : subj === 'english' ? '📚' : '🇮🇳'),
      initialMode: mode,
    });
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />

      {/* Clean & Smart Header: Avatar (opens Settings) + Greeting + Stars + Coins */}
      <ChampHeader
        title={`${s.greeting}, ${profile.name}! 👋`}
        subtitle={`${gradeConfig.label} ▾ • ${s.ncertTag}`}
        totalStars={profile.totalStars}
        totalCoins={profile.totalCoins ?? (profile.totalStars * 10 + 50)}
        avatarEmoji={currentAvatar.emoji}
        onPressAvatar={() => {
          triggerHaptic('light');
          setShowSettingsModal(true);
        }}
        onPressTitle={() => {
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
        {/* Child Gamified Loot Strip: Streak, Coins, Stars, XP */}
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
            <Text style={styles.lootStripEmoji}>💰</Text>
            <View>
              <Text style={styles.lootStripVal}>{profile.totalCoins ?? (profile.totalStars * 10 + 50)}</Text>
              <Text style={styles.lootStripLbl}>{activeLang === 'hi' ? 'सिक्के' : 'Coins'}</Text>
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

        {/* Smooth Special Launch Offer Capsule Pill (Takes only 34px, click opens full details) */}
        {globalConfig?.specialOffer?.isActive && (
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => {
              triggerHaptic('medium');
              setShowOfferDetailsModal(true);
            }}
            style={styles.specialOfferCapsule}
          >
            <View style={styles.specialOfferInner}>
              <View style={styles.specialOfferIconCircle}>
                <Text style={{ fontSize: 13 }}>🎁</Text>
              </View>
              <Text style={styles.specialOfferText}>{s.specialLaunchOffer}</Text>
              <Text style={styles.specialOfferArrow}>✨ ›</Text>
            </View>
          </TouchableOpacity>
        )}

        {/* Smart Category Tabs Bar */}
        <View style={styles.categoryTabsWrapper}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoryTabsScroll}
          >
            {/* 1. Subjects */}
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                triggerHaptic('light');
                setActiveCategory('subjects');
              }}
              style={[
                styles.categoryTabPill,
                activeCategory === 'subjects' && styles.categoryTabPillActive,
              ]}
            >
              <Text style={styles.categoryTabEmoji}>📚</Text>
              <Text
                style={[
                  styles.categoryTabText,
                  activeCategory === 'subjects' && styles.categoryTabTextActive,
                ]}
              >
                {s.catSubjects}
              </Text>
              <View
                style={[
                  styles.categoryTabBadge,
                  activeCategory === 'subjects' && styles.categoryTabBadgeActive,
                ]}
              >
                <Text
                  style={[
                    styles.categoryTabBadgeText,
                    activeCategory === 'subjects' && styles.categoryTabBadgeTextActive,
                  ]}
                >
                  3
                </Text>
              </View>
            </TouchableOpacity>

            {/* 2. Concept Labs */}
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                triggerHaptic('light');
                setActiveCategory('labs');
              }}
              style={[
                styles.categoryTabPill,
                activeCategory === 'labs' && styles.categoryTabPillActive,
              ]}
            >
              <Text style={styles.categoryTabEmoji}>🔬</Text>
              <Text
                style={[
                  styles.categoryTabText,
                  activeCategory === 'labs' && styles.categoryTabTextActive,
                ]}
              >
                {s.catLabs}
              </Text>
              <View
                style={[
                  styles.categoryTabBadge,
                  activeCategory === 'labs' && styles.categoryTabBadgeActive,
                ]}
              >
                <Text
                  style={[
                    styles.categoryTabBadgeText,
                    activeCategory === 'labs' && styles.categoryTabBadgeTextActive,
                  ]}
                >
                  {`${mathsLabsCount + englishLabsCount + hindiLabsCount}+`}
                </Text>
              </View>
            </TouchableOpacity>

            {/* 3. Fun Arcade */}
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                triggerHaptic('light');
                setActiveCategory('arcade');
              }}
              style={[
                styles.categoryTabPill,
                activeCategory === 'arcade' && styles.categoryTabPillActive,
              ]}
            >
              <Text style={styles.categoryTabEmoji}>🎮</Text>
              <Text
                style={[
                  styles.categoryTabText,
                  activeCategory === 'arcade' && styles.categoryTabTextActive,
                ]}
              >
                {s.catArcade}
              </Text>
              {isFreeSpinReady && (
                <View style={styles.categoryTabFreeDot} />
              )}
            </TouchableOpacity>

            {/* 4. All */}
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                triggerHaptic('light');
                setActiveCategory('all');
              }}
              style={[
                styles.categoryTabPill,
                activeCategory === 'all' && styles.categoryTabPillActive,
              ]}
            >
              <Text style={styles.categoryTabEmoji}>🌟</Text>
              <Text
                style={[
                  styles.categoryTabText,
                  activeCategory === 'all' && styles.categoryTabTextActive,
                ]}
              >
                {s.catAll}
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Daily 10-Min Mission (Only shown when pending) */}
        {!isCompletedToday && (
          <View style={[styles.heroCard, styles.heroCardActive]}>
            <View style={styles.heroTopRow}>
              <View style={[styles.heroBadge, styles.heroBadgeActive]}>
                <Text style={styles.heroBadgeText}>{s.heroDailyMission}</Text>
              </View>
              <View style={[styles.statusPill, styles.statusPillPending]}>
                <Text style={styles.statusPillText}>{s.heroGoalPending}</Text>
              </View>
            </View>

            <View style={styles.heroBodyRow}>
              <View style={styles.heroTextCol}>
                <Text style={styles.heroTitle}>{s.heroTitlePending}</Text>
                <Text style={styles.heroSub}>{s.heroSubPending}</Text>
              </View>
              <View style={styles.heroIllustrationCircle}>
                <Text style={styles.heroIllustrationEmoji}>🚀</Text>
              </View>
            </View>

            <View style={styles.heroProgressTrack}>
              <View
                style={[
                  styles.heroProgressBar,
                  { width: '15%', backgroundColor: '#FDE047' },
                ]}
              />
            </View>
          </View>
        )}

        {/* Mission Completed Compact Celebratory Ribbon (Dismissible with ✕) */}
        {isCompletedToday && showCompletedMissionBanner && (
          <View style={styles.compactMissionDoneCard}>
            <View style={styles.compactMissionDoneLeft}>
              <Text style={{ fontSize: 20 }}>🏆</Text>
              <View style={{ marginLeft: 10, flex: 1 }}>
                <Text style={styles.compactMissionDoneTitle}>{s.missionDoneCompact}</Text>
                <Text style={styles.compactMissionDoneSub}>{s.missionDoneStreakActive}</Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => {
                triggerHaptic('light');
                setShowCompletedMissionBanner(false);
              }}
              style={styles.compactMissionDoneClose}
              hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
            >
              <Text style={styles.compactMissionDoneCloseText}>✕</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* CATEGORY 1: Core Subjects (CBSE / NCERT) */}
        {(activeCategory === 'subjects' || activeCategory === 'all') && (
          <View style={styles.categorySectionBlock}>
            <View style={styles.categorySectionHeaderRow}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginBottom: 4 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                  <Text style={styles.categorySectionTitle}>📚 {s.selectSubject}</Text>
                  <View style={styles.categorySectionBadge}>
                    <Text style={styles.categorySectionBadgeText}>CBSE / NCERT</Text>
                  </View>
                </View>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => onOpenChapterVault('maths')}
                  style={styles.allChaptersPill}
                >
                  <Text style={styles.allChaptersPillText}>
                    {activeLang === 'hi' ? '📖 सभी पाठ देखें →' : '📖 All Topics →'}
                  </Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.categorySectionSub}>{s.subjectSub}</Text>
            </View>

            {/* 1. Mathematics Smart Card */}
            <TouchableOpacity
              style={[
                styles.cleanSubjectCard,
                mathsProg?.isCompleted && styles.cleanSubjectCardCompleted,
              ]}
              onPress={() => handleSubjectClick('maths', mathsInfo.lesson.title, mathsInfo.lesson.icon || '📐')}
              activeOpacity={0.85}
            >
              <View
                style={[
                  styles.subjectIconBox,
                  mathsProg?.isCompleted
                    ? { backgroundColor: '#DCFCE7' }
                    : { backgroundColor: '#EFF6FF' },
                ]}
              >
                <Text style={styles.subjectEmoji}>{mathsProg?.isCompleted ? '🏆' : '📐'}</Text>
              </View>

              <View style={styles.subjectTextBox}>
                <View style={styles.subjectTitleRow}>
                  <Text style={styles.subjectName}>
                    {activeLang === 'hi' ? 'गणित (Mathematics)' : 'Mathematics'}
                  </Text>
                  <View
                    style={[
                      styles.lessonBadge,
                      (mathsProg?.isCompleted || completedMathsCount > 0)
                        ? { backgroundColor: '#DCFCE7' }
                        : { backgroundColor: '#DBEAFE' },
                    ]}
                  >
                    <Text
                      style={[
                        styles.lessonBadgeText,
                        (mathsProg?.isCompleted || completedMathsCount > 0)
                          ? { color: '#15803D', fontWeight: '900' }
                          : { color: '#1E40AF' },
                      ]}
                    >
                      {mathsProg?.isCompleted
                        ? '🏆 ' + (activeLang === 'hi' ? 'पूरा हुआ ✓' : 'Finished ✓')
                        : completedMathsCount > 0
                        ? `🏆 ${completedMathsCount}/${mathsChapters.length} ${activeLang === 'hi' ? 'पूरा ✓' : 'Done ✓'}`
                        : mathsProg && mathsProg.lastQuestionIndex > 0
                        ? `Resume Q${mathsProg.lastQuestionIndex + 1} ▶`
                        : mathsInfo.isResume
                        ? s.resumeBadge
                        : `${s.chapterPrefix} ${mathsInfo.lesson.number}`}
                    </Text>
                  </View>
                </View>
                <Text style={styles.lessonName} numberOfLines={1}>
                  {getChapterTitle(mathsInfo.lesson, activeLang === 'hi')}
                </Text>
                <Text style={styles.bookSub} numberOfLines={1}>
                  {profile.grade === 'LKG'
                    ? activeLang === 'hi'
                      ? '30 पाठ • 55 सूक्ष्म कौशल वर्कशीट (A-J)'
                      : '30 Lessons • 55 Micro-Skill Worksheets (A-J)'
                    : profile.grade === 'UKG'
                    ? activeLang === 'hi'
                      ? '30 पाठ • 144 सूक्ष्म कौशल वर्कशीट (A-S)'
                      : '30 Lessons • 144 Micro-Skill Worksheets (A-S)'
                    : `${bookInfo.mathsBook} • ${mathsProg?.isCompleted ? `⭐ ${mathsProg.scorePercentage ?? 100}% Score • Finished` : mathsProg && mathsProg.lastQuestionIndex > 0 ? `Q${mathsProg.lastQuestionIndex + 1} / ${mathsProg.totalQuestions}` : `10-15 ${s.practiceQuestionsSuffix}`}`}
                </Text>
              </View>

              <View
                style={[
                  styles.playBtnCircle,
                  mathsProg?.isCompleted
                    ? { backgroundColor: '#10B981' }
                    : { backgroundColor: '#2563EB' },
                ]}
              >
                <Text style={styles.playBtnArrow}>{mathsProg?.isCompleted ? '↻' : '▶'}</Text>
              </View>
            </TouchableOpacity>

            {/* Maths Subject Action Shelf: Skills, Labs & Games */}
            <View style={styles.subjectActionShelf}>
              {profile.grade === 'LKG' && (
                <TouchableOpacity
                  style={[styles.subjectShelfPill, { backgroundColor: '#FEF3C7', borderColor: '#FDE68A' }]}
                  activeOpacity={0.8}
                  onPress={() => {
                    triggerHaptic('medium');
                    handleSubjectClick('maths', 'A.1: Name the shape', '⭐');
                  }}
                >
                  <Text style={styles.subjectShelfIcon}>⭐</Text>
                  <Text style={[styles.subjectShelfText, { color: '#B45309' }]}>
                    {activeLang === 'hi' ? '55 कौशल वर्कशीट (A-J)' : '55 Skill Worksheets (A-J)'}
                  </Text>
                  <Text style={[styles.subjectShelfArrow, { color: '#B45309' }]}>→</Text>
                </TouchableOpacity>
              )}

              {profile.grade === 'UKG' && (
                <TouchableOpacity
                  style={[styles.subjectShelfPill, { backgroundColor: '#EFF6FF', borderColor: '#BFDBFE' }]}
                  activeOpacity={0.8}
                  onPress={() => {
                    triggerHaptic('medium');
                    handleSubjectClick('maths', 'A.1: Learn to count to 3', '⭐');
                  }}
                >
                  <Text style={styles.subjectShelfIcon}>⭐</Text>
                  <Text style={[styles.subjectShelfText, { color: '#1D4ED8' }]}>
                    {activeLang === 'hi' ? '144 कौशल वर्कशीट (A-S)' : '144 Skill Worksheets (A-S)'}
                  </Text>
                  <Text style={[styles.subjectShelfArrow, { color: '#1D4ED8' }]}>→</Text>
                </TouchableOpacity>
              )}

              <TouchableOpacity
                style={[styles.subjectShelfPill, { backgroundColor: '#F0F9FF', borderColor: '#BAE6FD' }]}
                activeOpacity={0.8}
                onPress={() => {
                  triggerHaptic('medium');
                  setLabsSubjectFilter('maths');
                  setShowConceptLabHub(true);
                }}
              >
                <Text style={styles.subjectShelfIcon}>🔬</Text>
                <Text style={[styles.subjectShelfText, { color: '#0369A1' }]}>
                  {activeLang === 'hi' ? `गणित लैब्स (${mathsLabsCount})` : `Maths Labs (${mathsLabsCount})`}
                </Text>
                <Text style={[styles.subjectShelfArrow, { color: '#0369A1' }]}>→</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.subjectShelfPill, { backgroundColor: '#FEF3C7', borderColor: '#FDE68A' }]}
                activeOpacity={0.8}
                onPress={() => {
                  triggerHaptic('medium');
                  setArcadeFilterSubject('maths');
                  setSelectedKidsArcadeGame(null);
                  setShowKidsConceptArcadeModal(true);
                }}
              >
                <Text style={styles.subjectShelfIcon}>🎮</Text>
                <Text style={[styles.subjectShelfText, { color: '#B45309' }]}>
                  {activeLang === 'hi' ? `गणित खेल (${mathsGamesCount})` : `Maths Games (${mathsGamesCount})`}
                </Text>
                <Text style={[styles.subjectShelfArrow, { color: '#B45309' }]}>→</Text>
              </TouchableOpacity>
            </View>

            {/* 2. English Smart Card */}
            <TouchableOpacity
              style={[
                styles.cleanSubjectCard,
                englishProg?.isCompleted && styles.cleanSubjectCardCompleted,
              ]}
              onPress={() => handleSubjectClick('english', englishInfo.lesson.title, englishInfo.lesson.icon || '📚')}
              activeOpacity={0.85}
            >
              <View
                style={[
                  styles.subjectIconBox,
                  englishProg?.isCompleted
                    ? { backgroundColor: '#DCFCE7' }
                    : { backgroundColor: '#FEF3C7' },
                ]}
              >
                <Text style={styles.subjectEmoji}>{englishProg?.isCompleted ? '🏆' : '📚'}</Text>
              </View>

              <View style={styles.subjectTextBox}>
                <View style={styles.subjectTitleRow}>
                  <Text style={styles.subjectName}>
                    {profile.grade === 'LKG' || profile.grade === 'UKG'
                      ? (activeLang === 'hi' ? 'अंग्रेज़ी और फोनिक्स' : 'English & Phonics')
                      : (activeLang === 'hi' ? 'अंग्रेज़ी व्याकरण' : 'English Grammar')}
                  </Text>
                  <View
                    style={[
                      styles.lessonBadge,
                      (englishProg?.isCompleted || completedEnglishCount > 0)
                        ? { backgroundColor: '#DCFCE7' }
                        : { backgroundColor: '#FEF3C7' },
                    ]}
                  >
                    <Text
                      style={[
                        styles.lessonBadgeText,
                        (englishProg?.isCompleted || completedEnglishCount > 0)
                          ? { color: '#15803D', fontWeight: '900' }
                          : { color: '#92400E' },
                      ]}
                    >
                      {englishProg?.isCompleted
                        ? '🏆 ' + (activeLang === 'hi' ? 'पूरा हुआ ✓' : 'Finished ✓')
                        : completedEnglishCount > 0
                        ? `🏆 ${completedEnglishCount}/${englishChapters.length} ${activeLang === 'hi' ? 'पूरा ✓' : 'Done ✓'}`
                        : englishProg && englishProg.lastQuestionIndex > 0
                        ? `Resume Q${englishProg.lastQuestionIndex + 1} ▶`
                        : englishInfo.isResume
                        ? 'Resume ▶'
                        : `Ch ${englishInfo.lesson.number}`}
                    </Text>
                  </View>
                </View>
                <Text style={styles.lessonName} numberOfLines={1}>
                  {getChapterTitle(englishInfo.lesson, activeLang === 'hi')}
                </Text>
                <Text style={styles.bookSub} numberOfLines={1}>
                  {profile.grade === 'LKG'
                    ? activeLang === 'hi'
                      ? '30 पाठ • 78 सूक्ष्म कौशल वर्कशीट (A-X)'
                      : '30 Lessons • 78 Micro-Skill Worksheets (A-X)'
                    : profile.grade === 'UKG'
                    ? activeLang === 'hi'
                      ? '30 पाठ • 131 सूक्ष्म कौशल वर्कशीट (A-HH)'
                      : '30 Lessons • 131 Micro-Skill Worksheets (A-HH)'
                    : `${bookInfo.englishBook} • ${englishProg?.isCompleted ? `⭐ ${englishProg.scorePercentage ?? 100}% Score • Finished` : englishProg && englishProg.lastQuestionIndex > 0 ? `Q${englishProg.lastQuestionIndex + 1} / ${englishProg.totalQuestions}` : '10-15 Practice Questions'}`}
                </Text>
              </View>

              <View
                style={[
                  styles.playBtnCircle,
                  englishProg?.isCompleted
                    ? { backgroundColor: '#10B981' }
                    : { backgroundColor: '#D97706' },
                ]}
              >
                <Text style={styles.playBtnArrow}>{englishProg?.isCompleted ? '↻' : '▶'}</Text>
              </View>
            </TouchableOpacity>

            {/* English Subject Action Shelf: Phonics, Opposites & Rhymes, Animals & Games */}
            <View style={styles.subjectActionShelf}>
              {profile.grade === 'LKG' && (
                <TouchableOpacity
                  style={[styles.subjectShelfPill, { backgroundColor: '#FEF3C7', borderColor: '#FDE68A' }]}
                  activeOpacity={0.8}
                  onPress={() => {
                    triggerHaptic('medium');
                    handleSubjectClick('english', 'A.1: Find the letter in the alphabet: uppercase', '⭐');
                  }}
                >
                  <Text style={styles.subjectShelfIcon}>⭐</Text>
                  <Text style={[styles.subjectShelfText, { color: '#B45309' }]}>
                    {activeLang === 'hi' ? '78 कौशल वर्कशीट (A-X)' : '78 Skill Worksheets (A-X)'}
                  </Text>
                  <Text style={[styles.subjectShelfArrow, { color: '#B45309' }]}>→</Text>
                </TouchableOpacity>
              )}

              {profile.grade === 'UKG' && (
                <TouchableOpacity
                  style={[styles.subjectShelfPill, { backgroundColor: '#FEF3C7', borderColor: '#FDE68A' }]}
                  activeOpacity={0.8}
                  onPress={() => {
                    triggerHaptic('medium');
                    handleSubjectClick('english', 'A.1: Find the letter in the alphabet: uppercase', '⭐');
                  }}
                >
                  <Text style={styles.subjectShelfIcon}>⭐</Text>
                  <Text style={[styles.subjectShelfText, { color: '#B45309' }]}>
                    {activeLang === 'hi' ? '131 कौशल वर्कशीट (A-HH)' : '131 Skill Worksheets (A-HH)'}
                  </Text>
                  <Text style={[styles.subjectShelfArrow, { color: '#B45309' }]}>→</Text>
                </TouchableOpacity>
              )}
                {(profile.grade === 1) && (
                  <>
                    <TouchableOpacity
                      style={[styles.subjectShelfPill, { backgroundColor: '#FEF3C7', borderColor: '#FDE68A' }]}
                      activeOpacity={0.8}
                      onPress={() => {
                        triggerHaptic('medium');
                        handleSubjectClick('english', 'A.1: Sort consonants and vowels', '⭐');
                      }}
                    >
                      <Text style={styles.subjectShelfIcon}>⭐</Text>
                      <Text style={[styles.subjectShelfText, { color: '#B45309' }]}>
                        {activeLang === 'hi' ? '169 कौशल वर्कशीट (A-PP)' : '169 Skill Worksheets (A-PP)'}
                      </Text>
                      <Text style={[styles.subjectShelfArrow, { color: '#B45309' }]}>→</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[styles.subjectShelfPill, { backgroundColor: '#EFF6FF', borderColor: '#BFDBFE' }]}
                      activeOpacity={0.8}
                      onPress={() => {
                        triggerHaptic('medium');
                        setClass1EnglishStation('magic_phonics');
                        setShowClass1EnglishLabModal(true);
                      }}
                    >
                      <Text style={styles.subjectShelfIcon}>🔬</Text>
                      <Text style={[styles.subjectShelfText, { color: '#1D4ED8' }]}>
                        {activeLang === 'hi' ? 'अंग्रेज़ी 5-स्टेशन प्रैक्टिकल लैब →' : 'English 5-Station Practical Lab →'}
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[styles.subjectShelfPill, { backgroundColor: '#FDF2F8', borderColor: '#FBCFE8' }]}
                      activeOpacity={0.8}
                      onPress={() => {
                        triggerHaptic('medium');
                        handleSubjectClick('english', 'A.1: Sort consonants and vowels', '🎮', 'games');
                      }}
                    >
                      <Text style={styles.subjectShelfIcon}>🎮</Text>
                      <Text style={[styles.subjectShelfText, { color: '#BE185D' }]}>
                        {activeLang === 'hi' ? `169+ आर्केड गेम्स (${englishGamesCount}) →` : `169+ Arcade Games (${englishGamesCount}) →`}
                      </Text>
                    </TouchableOpacity>
                  </>
                )}


              <TouchableOpacity
                style={[styles.subjectShelfPill, { backgroundColor: '#F0FDF4', borderColor: '#BBF7D0' }]}
                activeOpacity={0.8}
                onPress={() => {
                  triggerHaptic('medium');
                  setLabsSubjectFilter('english');
                  setShowConceptLabHub(true);
                }}
              >
                <Text style={styles.subjectShelfIcon}>🔬</Text>
                <Text style={[styles.subjectShelfText, { color: '#15803D' }]}>
                  {activeLang === 'hi' ? `इंग्लिश लैब्स (${englishLabsCount})` : `English Labs (${englishLabsCount})`}
                </Text>
                <Text style={[styles.subjectShelfArrow, { color: '#15803D' }]}>→</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.subjectShelfPill, { backgroundColor: '#EFF6FF', borderColor: '#BFDBFE' }]}
                activeOpacity={0.8}
                onPress={() => {
                  triggerHaptic('medium');
                  setShowAlphabetPhonicsModal(true);
                }}
              >
                <Text style={styles.subjectShelfIcon}>🔤</Text>
                <Text style={[styles.subjectShelfText, { color: '#1D4ED8' }]}>
                  {activeLang === 'hi' ? 'फोनिक्स (A-Z)' : 'Phonics (A-Z)'}
                </Text>
                <Text style={[styles.subjectShelfArrow, { color: '#1D4ED8' }]}>→</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.subjectShelfPill, { backgroundColor: '#FDF2F8', borderColor: '#FBCFE8' }]}
                activeOpacity={0.8}
                onPress={() => {
                  triggerHaptic('medium');
                  setShowEnglishOppositesLabModal(true);
                }}
              >
                <Text style={styles.subjectShelfIcon}>🔄</Text>
                <Text style={[styles.subjectShelfText, { color: '#BE185D' }]}>
                  {activeLang === 'hi' ? 'विलोम व तुकबंदी' : 'Opposites & Rhymes'}
                </Text>
                <Text style={[styles.subjectShelfArrow, { color: '#BE185D' }]}>→</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.subjectShelfPill, { backgroundColor: '#F0F9FF', borderColor: '#BAE6FD' }]}
                activeOpacity={0.8}
                onPress={() => {
                  triggerHaptic('medium');
                  setShowEnglishWordsLabModal(true);
                }}
              >
                <Text style={styles.subjectShelfIcon}>🦁</Text>
                <Text style={[styles.subjectShelfText, { color: '#0369A1' }]}>
                  {activeLang === 'hi' ? 'एनिमल सफारी' : 'Animal Safari'}
                </Text>
                <Text style={[styles.subjectShelfArrow, { color: '#0369A1' }]}>→</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.subjectShelfPill, { backgroundColor: '#FDF4FF', borderColor: '#F5D0FE' }]}
                activeOpacity={0.8}
                onPress={() => {
                  triggerHaptic('medium');
                  setArcadeFilterSubject('english');
                  setSelectedKidsArcadeGame(null);
                  setShowKidsConceptArcadeModal(true);
                }}
              >
                <Text style={styles.subjectShelfIcon}>🎮</Text>
                <Text style={[styles.subjectShelfText, { color: '#A21CAF' }]}>
                  {activeLang === 'hi' ? `इंग्लिश खेल (${englishGamesCount})` : `English Games (${englishGamesCount})`}
                </Text>
                <Text style={[styles.subjectShelfArrow, { color: '#A21CAF' }]}>→</Text>
              </TouchableOpacity>
            </View>

            {/* 3. Hindi Smart Card (Always in pure Hindi) */}
            <TouchableOpacity
              style={[
                styles.cleanSubjectCard,
                hindiProg?.isCompleted && styles.cleanSubjectCardCompleted,
              ]}
              onPress={() => handleSubjectClick('hindi', hindiInfo.lesson.title, hindiInfo.lesson.icon || '🇮🇳')}
              activeOpacity={0.85}
            >
              <View
                style={[
                  styles.subjectIconBox,
                  hindiProg?.isCompleted
                    ? { backgroundColor: '#DCFCE7' }
                    : { backgroundColor: '#ECFDF5' },
                ]}
              >
                <Text style={styles.subjectEmoji}>{hindiProg?.isCompleted ? '🏆' : '🇮🇳'}</Text>
              </View>

              <View style={styles.subjectTextBox}>
                <View style={styles.subjectTitleRow}>
                  <Text style={styles.subjectName}>हिंदी (Hindi)</Text>
                  <View
                    style={[
                      styles.lessonBadge,
                      (hindiProg?.isCompleted || completedHindiCount > 0)
                        ? { backgroundColor: '#DCFCE7' }
                        : { backgroundColor: '#D1FAE5' },
                    ]}
                  >
                    <Text
                      style={[
                        styles.lessonBadgeText,
                        (hindiProg?.isCompleted || completedHindiCount > 0)
                          ? { color: '#15803D', fontWeight: '900' }
                          : { color: '#065F46' },
                      ]}
                    >
                      {hindiProg?.isCompleted
                        ? '🏆 पूरा हुआ ✓'
                        : completedHindiCount > 0
                        ? `🏆 ${completedHindiCount}/${hindiChapters.length} पूरा ✓`
                        : hindiProg && hindiProg.lastQuestionIndex > 0
                        ? `प्रश्न ${hindiProg.lastQuestionIndex + 1} से जारी रखें ▶`
                        : hindiInfo.isResume
                        ? 'जारी रखें ▶'
                        : `पाठ ${hindiInfo.lesson.number}`}
                    </Text>
                  </View>
                </View>
                <Text style={styles.lessonName} numberOfLines={1}>
                  {getChapterTitle(hindiInfo.lesson, true)}
                </Text>
                <Text style={styles.bookSub} numberOfLines={1}>
                  {bookInfo.hindiBook} • {hindiProg?.isCompleted ? `⭐ ${hindiProg.scorePercentage ?? 100}% स्कोर • पूरा हुआ` : hindiProg && hindiProg.lastQuestionIndex > 0 ? `प्रश्न ${hindiProg.lastQuestionIndex + 1} / ${hindiProg.totalQuestions}` : '10-15 अभ्यास प्रश्न'}
                </Text>
              </View>

              <View
                style={[
                  styles.playBtnCircle,
                  hindiProg?.isCompleted
                    ? { backgroundColor: '#10B981' }
                    : { backgroundColor: '#059669' },
                ]}
              >
                <Text style={styles.playBtnArrow}>{hindiProg?.isCompleted ? '↻' : '▶'}</Text>
              </View>
            </TouchableOpacity>

            {/* Hindi Subject Action Shelf: Swar Lab & Swar Pop */}
            <View style={styles.subjectActionShelf}>
              <TouchableOpacity
                style={[styles.subjectShelfPill, { backgroundColor: '#ECFDF5', borderColor: '#A7F3D0' }]}
                activeOpacity={0.8}
                onPress={() => {
                  triggerHaptic('medium');
                  setLabsSubjectFilter('hindi');
                  setShowConceptLabHub(true);
                }}
              >
                <Text style={styles.subjectShelfIcon}>🇮🇳</Text>
                <Text style={[styles.subjectShelfText, { color: '#047857' }]}>
                  {activeLang === 'hi' ? `हिंदी लैब्स (${hindiLabsCount})` : `Hindi Labs (${hindiLabsCount})`}
                </Text>
                <Text style={[styles.subjectShelfArrow, { color: '#047857' }]}>→</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.subjectShelfPill, { backgroundColor: '#FEF9C3', borderColor: '#FDE047' }]}
                activeOpacity={0.8}
                onPress={() => {
                  triggerHaptic('medium');
                  setArcadeFilterSubject('hindi');
                  setSelectedKidsArcadeGame(null);
                  setShowKidsConceptArcadeModal(true);
                }}
              >
                <Text style={styles.subjectShelfIcon}>🎯</Text>
                <Text style={[styles.subjectShelfText, { color: '#854D0E' }]}>
                  {activeLang === 'hi' ? `हिंदी खेल (${hindiGamesCount})` : `Hindi Games (${hindiGamesCount})`}
                </Text>
                <Text style={[styles.subjectShelfArrow, { color: '#854D0E' }]}>→</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* CATEGORY 2: STEM Concept Labs & Mind Development */}
        {(activeCategory === 'labs' || activeCategory === 'all') && (
          <View style={styles.categorySectionBlock}>
            {activeCategory === 'all' && (
              <View style={styles.categorySectionHeaderRow}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={styles.categorySectionTitle}>🔬 STEM Concept Labs & Mind Gym</Text>
                  <View style={[styles.categorySectionBadge, { backgroundColor: '#ECFDF5' }]}>
                    <Text style={[styles.categorySectionBadgeText, { color: '#059669' }]}>PRACTICAL</Text>
                  </View>
                </View>
                <Text style={styles.categorySectionSub}>{s.labGatewayPunchline}</Text>
              </View>
            )}

            {/* STEM Concept Labs Hero Gateway */}
            <View style={styles.labGatewayCard}>
              <View style={styles.labGatewayTopRow}>
                <View style={styles.labGatewayLiveBadge}>
                  <View style={styles.labGatewayLiveDot} />
                  <Text style={styles.labGatewayLiveText}>{s.labGatewayBadge}</Text>
                </View>
                <View style={styles.labGatewayGradeBadge}>
                  <Text style={styles.labGatewayGradeText} numberOfLines={1} ellipsizeMode="tail">
                    {typeof profile.grade === 'number' ? `Class ${profile.grade}` : profile.grade} • {s.labGatewayLabsCount}
                  </Text>
                </View>
              </View>

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
                  <Text style={styles.labGatewayPunchline}>{s.labGatewayPunchline}</Text>
                  <Text style={styles.labGatewayDesc}>{s.labGatewayDesc}</Text>
                </View>

                <View style={styles.labGatewayFlaskBox}>
                  <Text style={styles.labGatewayFlaskEmoji}>🧪</Text>
                </View>
              </TouchableOpacity>

              {/* Subject Filter for Labs - 100% Strictly Separated */}
              <View style={styles.categorySubjFilterRow}>
                {([
                  { key: 'maths', label: activeLang === 'hi' ? `📐 गणित लैब्स (${mathsLabsCount})` : `📐 Maths Labs (${mathsLabsCount})` },
                  { key: 'english', label: activeLang === 'hi' ? `🔤 इंग्लिश लैब्स (${englishLabsCount})` : `🔤 English Labs (${englishLabsCount})` },
                  { key: 'hindi', label: activeLang === 'hi' ? `🇮🇳 हिंदी लैब्स (${hindiLabsCount})` : `🇮🇳 Hindi Labs (${hindiLabsCount})` },
                ] as const).map((filterItem) => (
                  <TouchableOpacity
                    key={filterItem.key}
                    onPress={() => {
                      triggerHaptic('light');
                      setLabsSubjectFilter(filterItem.key);
                    }}
                    style={[
                      styles.categorySubjPill,
                      labsSubjectFilter === filterItem.key && styles.categorySubjPillActive,
                    ]}
                  >
                    <Text
                      style={[
                        styles.categorySubjPillText,
                        labsSubjectFilter === filterItem.key && styles.categorySubjPillTextActive,
                      ]}
                    >
                      {filterItem.label}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>

              <View style={styles.labGatewayPillsRow}>
                {profile.grade === 1 && labsSubjectFilter === 'english' && (
                  <>
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() => handleOpenConceptLab('c1_lab_magic_phonics')}
                      style={[styles.labFeaturePill, { borderColor: '#2563EB', backgroundColor: '#EFF6FF' }]}
                    >
                      <Text style={[styles.labFeatureText, { color: '#2563EB' }]}>🪄 Magic 'e' Lab</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() => handleOpenConceptLab('c1_lab_syllables_words')}
                      style={[styles.labFeaturePill, { borderColor: '#7C3AED', backgroundColor: '#F5F3FF' }]}
                    >
                      <Text style={[styles.labFeatureText, { color: '#7C3AED' }]}>⚡ Syllable & Compound</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() => handleOpenConceptLab('c1_lab_vocab_shades')}
                      style={[styles.labFeaturePill, { borderColor: '#EA580C', backgroundColor: '#FFF7ED' }]}
                    >
                      <Text style={[styles.labFeatureText, { color: '#EA580C' }]}>🌡️ Shades of Meaning</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() => handleOpenConceptLab('c1_lab_sentence_grammar')}
                      style={[styles.labFeaturePill, { borderColor: '#059669', backgroundColor: '#ECFDF5' }]}
                    >
                      <Text style={[styles.labFeatureText, { color: '#059669' }]}>🏗️ Sentence Architect</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() => handleOpenConceptLab('c1_lab_tenses_contractions')}
                      style={[styles.labFeaturePill, { borderColor: '#DB2777', backgroundColor: '#FDF2F8' }]}
                    >
                      <Text style={[styles.labFeatureText, { color: '#DB2777' }]}>⏳ Verb Time Machine</Text>
                    </TouchableOpacity>
                  </>
                )}
                {profile.grade === 'LKG' || profile.grade === 'UKG' ? (
                  <>
                    {labsSubjectFilter === 'english' && (
                      <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => handleOpenConceptLab('alphabet_phonics_lab')}
                        style={[styles.labFeaturePill, { borderColor: '#E11D48', backgroundColor: '#FFF1F2' }]}
                      >
                        <Text style={[styles.labFeatureText, { color: '#E11D48' }]}>🔤 Phonics Lab (A-M)</Text>
                      </TouchableOpacity>
                    )}
                    {labsSubjectFilter === 'hindi' && (
                      <>
                        <TouchableOpacity
                          activeOpacity={0.8}
                          onPress={() => handleOpenConceptLab('hindi_varnamala_lab')}
                          style={[styles.labFeaturePill, { borderColor: '#059669', backgroundColor: '#ECFDF5' }]}
                        >
                          <Text style={[styles.labFeatureText, { color: '#059669' }]}>🇮🇳 स्वर व वर्णमाला (अ-अः)</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          activeOpacity={0.8}
                          onPress={() => handleOpenConceptLab('hindi_vyanjan_lab')}
                          style={[styles.labFeaturePill, { borderColor: '#D97706', backgroundColor: '#FEF3C7' }]}
                        >
                          <Text style={[styles.labFeatureText, { color: '#B45309' }]}>🔤 व्यंजन लैब (क-म)</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          activeOpacity={0.8}
                          onPress={() => handleOpenConceptLab('hindi_pashu_pakshi_lab')}
                          style={[styles.labFeaturePill, { borderColor: '#0284C7', backgroundColor: '#F0F9FF' }]}
                        >
                          <Text style={[styles.labFeatureText, { color: '#0369A1' }]}>🦁 पशु-पक्षी आवाज लैब</Text>
                        </TouchableOpacity>
                      </>
                    )}
                    {labsSubjectFilter === 'maths' && (
                      profile.grade === 'UKG' ? (
                        <>
                          <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => handleOpenConceptLab('ukg_maths_ten_frame_lab')}
                            style={[styles.labFeaturePill, { borderColor: '#2563EB', backgroundColor: '#EFF6FF' }]}
                          >
                            <Text style={[styles.labFeatureText, { color: '#2563EB' }]}>🟩 Ten-Frames (1-20)</Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => handleOpenConceptLab('ukg_maths_add_sub_beaker')}
                            style={[styles.labFeaturePill, { borderColor: '#059669', backgroundColor: '#ECFDF5' }]}
                          >
                            <Text style={[styles.labFeatureText, { color: '#059669' }]}>🧪 Add/Sub Beaker</Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => handleOpenConceptLab('ukg_maths_coin_bank')}
                            style={[styles.labFeaturePill, { borderColor: '#D97706', backgroundColor: '#FEF3C7' }]}
                          >
                            <Text style={[styles.labFeatureText, { color: '#D97706' }]}>🪙 Piggy Bank Coins</Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => handleOpenConceptLab('ukg_maths_geometry_lab')}
                            style={[styles.labFeaturePill, { borderColor: '#7C3AED', backgroundColor: '#F5F3FF' }]}
                          >
                            <Text style={[styles.labFeatureText, { color: '#7C3AED' }]}>🔷 2D & 3D Shapes</Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => handleOpenConceptLab('ukg_maths_balance_lab')}
                            style={[styles.labFeaturePill, { borderColor: '#EA580C', backgroundColor: '#FFF7ED' }]}
                          >
                            <Text style={[styles.labFeatureText, { color: '#EA580C' }]}>⚖️ Balance Beam</Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => setShowConceptLabHub(true)}
                            style={[styles.labFeaturePill, { borderColor: '#0284C7', backgroundColor: '#F0F9FF' }]}
                          >
                            <Text style={[styles.labFeatureText, { color: '#0284C7' }]}>⭐ 144 कौशल लैब्स →</Text>
                          </TouchableOpacity>
                        </>
                      ) : (
                        <>
                          <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => handleOpenConceptLab('size_scale_lab')}
                            style={[styles.labFeaturePill, { borderColor: '#0284C7', backgroundColor: '#F0F9FF' }]}
                          >
                            <Text style={[styles.labFeatureText, { color: '#0284C7' }]}>📏 Big & Tall Lab</Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => handleOpenConceptLab('animal_seesaw')}
                            style={[styles.labFeaturePill, { borderColor: '#D97706', backgroundColor: '#FFFBEB' }]}
                          >
                            <Text style={[styles.labFeatureText, { color: '#D97706' }]}>⚖️ Animal Seesaw</Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => handleOpenConceptLab('counting_train')}
                            style={[styles.labFeaturePill, { borderColor: '#059669', backgroundColor: '#F0FDF4' }]}
                          >
                            <Text style={[styles.labFeatureText, { color: '#059669' }]}>🎈 Counting 1-5</Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => handleOpenConceptLab('shape_sorter')}
                            style={[styles.labFeaturePill, { borderColor: '#7C3AED', backgroundColor: '#FAF5FF' }]}
                          >
                            <Text style={[styles.labFeatureText, { color: '#7C3AED' }]}>🔷 Shapes</Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => handleOpenConceptLab('color_prism')}
                            style={[styles.labFeaturePill, { borderColor: '#DB2777', backgroundColor: '#FDF2F8' }]}
                          >
                            <Text style={[styles.labFeatureText, { color: '#DB2777' }]}>🎨 Colors</Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => handleOpenConceptLab('pattern_builder')}
                            style={[styles.labFeaturePill, { borderColor: '#8B5CF6', backgroundColor: '#F5F3FF' }]}
                          >
                            <Text style={[styles.labFeatureText, { color: '#8B5CF6' }]}>🧩 Patterns</Text>
                          </TouchableOpacity>
                        </>
                      )
                    )}
                  </>
                ) : (
                  <>
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
                  </>
                )}
              </View>

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

            {/* Daily Super Kid Brain Gym Card */}
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
                  <Text style={styles.dailyGymSub}>{s.gymSub}</Text>
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

            {/* Weekly Olympiad Test Banner */}
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
                <Text style={styles.olympiadSub}>{s.olympiadSub}</Text>
              </View>
              <View style={styles.olympiadActionBtn}>
                <Text style={styles.olympiadActionText}>{s.olympiadTestBtn}</Text>
              </View>
            </TouchableOpacity>

            {/* Adaptive Weak Topic Remediation Booster (if any) */}
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
                    <Text style={styles.weakTopicTitle}>
                      {activeLang === 'hi' ? cleanBilingualForHindi(currentWeakTopic.chapterTitle) : cleanBilingualForEnglish(currentWeakTopic.chapterTitle)}
                    </Text>
                    <Text style={styles.weakTopicSub}>
                      {activeLang === 'hi' ? cleanBilingualForHindi(currentWeakTopic.conceptName) : cleanBilingualForEnglish(currentWeakTopic.conceptName)}
                    </Text>
                    <Text style={styles.weakTopicHint}>{s.weakTopicHint}</Text>
                  </View>
                  <View style={styles.weakTopicGoBtn}>
                    <Text style={styles.weakTopicGoText}>{s.weakTopicFixBtn}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          </View>
        )}

        {/* CATEGORY 3: Fun Arcade & Rewards */}
        {(activeCategory === 'arcade' || activeCategory === 'all') && (
          <View style={styles.categorySectionBlock}>
            {activeCategory === 'all' && (
              <View style={styles.categorySectionHeaderRow}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={styles.categorySectionTitle}>🎮 {s.arcadeTitle}</Text>
                  <View style={[styles.categorySectionBadge, { backgroundColor: '#EFF6FF' }]}>
                    <Text style={[styles.categorySectionBadgeText, { color: '#2563EB' }]}>FUN & REWARDS</Text>
                  </View>
                </View>
                <Text style={styles.categorySectionSub}>{s.arcadeSub}</Text>
              </View>
            )}

            {/* 🌟 Super Kid Concept Arcade Flagship (Balvatika & Foundational Concepts) */}
            <TouchableOpacity
              style={styles.kidsConceptArcadeBanner}
              activeOpacity={0.88}
              onPress={() => {
                triggerHaptic('medium');
                setSelectedKidsArcadeGame(null);
                setShowKidsConceptArcadeModal(true);
              }}
            >
              <View style={styles.kidsArcadeBannerLeft}>
                <View style={styles.kidsArcadeBadgeRow}>
                  <View style={styles.kidsArcadeBadge}>
                    <Text style={styles.kidsArcadeBadgeText}>{s.kidsArcadeBadge}</Text>
                  </View>
                  <View style={styles.kidsArcadePill}>
                    <Text style={styles.kidsArcadePillText}>{`⭐ ${mathsGamesCount + englishGamesCount + hindiGamesCount}+ ARCADE GAMES`}</Text>
                  </View>
                </View>
                <Text style={styles.kidsArcadeTitle}>{s.kidsArcadeTitle}</Text>
                <Text style={styles.kidsArcadeSub}>{s.kidsArcadeSub}</Text>
                <View style={styles.kidsArcadePillsRow}>
                  <Text style={styles.kidsArcadeMiniTag}>🐘 Big/Small</Text>
                  <Text style={styles.kidsArcadeMiniTag}>⚖️ Heavy/Light</Text>
                  <Text style={styles.kidsArcadeMiniTag}>🐰 Count 1-5</Text>
                  <Text style={styles.kidsArcadeMiniTag}>🔷 Shapes</Text>
                  <Text style={styles.kidsArcadeMiniTag}>🔤 Alphabet</Text>
                  <Text style={styles.kidsArcadeMiniTag}>🎯 स्वर (Hindi)</Text>
                </View>
              </View>
              <View style={styles.kidsArcadeActionCol}>
                <View style={styles.kidsArcadePlayBtn}>
                  <Text style={styles.kidsArcadePlayText}>{s.kidsArcadeEnterBtn}</Text>
                </View>
              </View>
            </TouchableOpacity>

            {/* Subject Filter for Concept Arcade - 100% Strictly Separated */}
            <View style={styles.categorySubjFilterRow}>
              {([
                { key: 'maths', label: activeLang === 'hi' ? `📐 गणित खेल (${mathsGamesCount})` : `📐 Maths Games (${mathsGamesCount})` },
                { key: 'english', label: activeLang === 'hi' ? `🔤 इंग्लिश खेल (${englishGamesCount})` : `🔤 English Games (${englishGamesCount})` },
                { key: 'hindi', label: activeLang === 'hi' ? `🇮🇳 हिंदी खेल (${hindiGamesCount})` : `🇮🇳 Hindi Games (${hindiGamesCount})` },
              ] as const).map((filterItem) => (
                <TouchableOpacity
                  key={filterItem.key}
                  onPress={() => {
                    triggerHaptic('light');
                    setArcadeFilterSubject(filterItem.key);
                  }}
                  style={[
                    styles.categorySubjPill,
                    arcadeFilterSubject === filterItem.key && styles.categorySubjPillActive,
                  ]}
                >
                  <Text
                    style={[
                      styles.categorySubjPillText,
                      arcadeFilterSubject === filterItem.key && styles.categorySubjPillTextActive,
                    ]}
                  >
                    {filterItem.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Quick-Launch Concept Games Row (Separated by Subject) */}
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.conceptMiniGamesScrollContent}
              style={styles.conceptMiniGamesScrollView}
            >
              {filteredArcadeGames.map((game) => (
                <TouchableOpacity
                  key={game.id}
                  style={[styles.conceptMiniCard, { backgroundColor: game.color, borderColor: game.borderColor }]}
                  activeOpacity={0.88}
                  onPress={() => {
                    triggerHaptic('medium');
                    setSelectedKidsArcadeGame(game.id as KidsArcadeGameType);
                    setArcadeChapterTitle(game.chapterTitle || null);
                    setArcadeGameTitle(activeLang === 'hi' ? game.titleHi : game.titleEn);
                    setShowKidsConceptArcadeModal(true);
                  }}
                >
                  <Text style={styles.conceptMiniEmoji}>{game.emoji}</Text>
                  <Text style={styles.conceptMiniName} numberOfLines={1}>
                    {activeLang === 'hi' ? game.titleHi : game.titleEn}
                  </Text>
                  <Text style={styles.conceptMiniSub} numberOfLines={1}>
                    {activeLang === 'hi' ? game.descHi : game.descEn}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>

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
                <Text style={styles.luckySpinSub}>{s.spinSub}</Text>
              </View>
              <View style={styles.luckySpinActionBtn}>
                <Text style={styles.luckySpinActionText}>{s.spinBtn}</Text>
              </View>
            </TouchableOpacity>

            {/* Champ Arcade Mini Games Grid */}
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
                <Text style={styles.arcadeCardDesc}>{s.balloonPopDesc}</Text>
                <View style={styles.arcadeCardBtn}>
                  <Text style={styles.arcadeCardBtnText}>{s.playNowBtn}</Text>
                </View>
              </TouchableOpacity>

              {/* 2. Mind Match 3D */}
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
                <Text style={styles.arcadeCardDesc}>{s.mindMatchDesc}</Text>
                <View style={styles.arcadeCardBtn}>
                  <Text style={styles.arcadeCardBtnText}>{s.playNowBtn}</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        )}
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

      <KidsConceptArcadeModal
        visible={showKidsConceptArcadeModal}
        onClose={() => setShowKidsConceptArcadeModal(false)}
        grade={profile.grade}
        initialGame={selectedKidsArcadeGame}
        filterSubject={arcadeFilterSubject}
        initialChapterTitle={arcadeChapterTitle}
        initialGameTitle={arcadeGameTitle}
      />

      {/* Concept Lab Modals */}
      <SizeComparisonLabModal
        visible={showSizeComparisonModal}
        onClose={() => setShowSizeComparisonModal(false)}
        activeLang={activeLang}
      />

      <AlphabetPhonicsLabModal
        visible={showAlphabetPhonicsModal}
        onClose={() => setShowAlphabetPhonicsModal(false)}
        activeLang={activeLang}
      />

      <EnglishOppositesRhymesLabModal
        visible={showEnglishOppositesLabModal}
        onClose={() => setShowEnglishOppositesLabModal(false)}
        activeLang={activeLang}
      />

      <EnglishWordsVocabularyLabModal
        visible={showEnglishWordsLabModal}
        onClose={() => setShowEnglishWordsLabModal(false)}
        activeLang={activeLang}
      />

      <HindiVarnamalaLabModal
        visible={showHindiVarnamalaModal}
        onClose={() => setShowHindiVarnamalaModal(false)}
        activeLang={activeLang}
      />

      <HindiVyanjanLabModal
        visible={showHindiVyanjanModal}
        onClose={() => setShowHindiVyanjanModal(false)}
        activeLang={activeLang}
      />

      <HindiPashuPakshiLabModal
        visible={showHindiPashuPakshiModal}
        onClose={() => setShowHindiPashuPakshiModal(false)}
        activeLang={activeLang}
      />

      <ShapeSorterGameModal
        visible={showShapeSorterModal}
        onClose={() => setShowShapeSorterModal(false)}
        activeLang={activeLang}
      />

      <CountingTrainGameModal
        visible={showCountingTrainModal}
        onClose={() => setShowCountingTrainModal(false)}
        activeLang={activeLang}
      />

      <AnimalSeesawGameModal
        visible={showAnimalSeesawModal}
        onClose={() => setShowAnimalSeesawModal(false)}
        activeLang={activeLang}
      />

      <ClockTimeGameModal
        visible={showClockTimeModal}
        onClose={() => setShowClockTimeModal(false)}
        activeLang={activeLang}
      />

      <PatternBuilderGameModal
        visible={showPatternBuilderModal}
        onClose={() => setShowPatternBuilderModal(false)}
        activeLang={activeLang}
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
        activeLang={activeLang}
      />

      <UkgMathsInteractiveLabModal
        visible={showUkgMathsLabModal}
        onClose={() => setShowUkgMathsLabModal(false)}
        activeLang={activeLang}
        initialStation={ukgMathsStation}
      />

      <Class1EnglishInteractiveLabModal
        visible={showClass1EnglishLabModal}
        onClose={() => setShowClass1EnglishLabModal(false)}
        activeLang={activeLang}
        initialStation={class1EnglishStation}
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
        initialSubject={labsSubjectFilter}
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

      {/* Special Launch Offer Details Modal (Shows on tapping sleek offer capsule) */}
      <Modal
        visible={showOfferDetailsModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowOfferDetailsModal(false)}
      >
        <View style={styles.offerModalOverlay}>
          <View style={styles.offerModalCard}>
            {/* Close Button */}
            <TouchableOpacity
              onPress={() => setShowOfferDetailsModal(false)}
              style={styles.offerModalCloseBtn}
              hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
            >
              <Text style={styles.offerModalCloseText}>✕</Text>
            </TouchableOpacity>

            {/* Header Icon & Badge */}
            <View style={styles.offerModalIconCircle}>
              <Text style={{ fontSize: 32 }}>🎁</Text>
            </View>

            <View style={styles.offerModalBadge}>
              <Text style={styles.offerModalBadgeText}>{s.launchOfferBadge}</Text>
            </View>

            <Text style={styles.offerModalTitle}>
              {globalConfig?.specialOffer?.title || s.launchOfferTitle}
            </Text>
            <Text style={styles.offerModalSub}>
              {s.launchOfferSub}
            </Text>

            {/* Pricing Box */}
            <View style={styles.offerModalPriceBox}>
              <View style={styles.offerModalPriceRow}>
                <Text style={styles.offerModalOrigPrice}>
                  {globalConfig?.specialOffer?.originalPrice || '₹999'}
                </Text>
                <Text style={styles.offerModalDiscountedPrice}>
                  {globalConfig?.specialOffer?.discountedPrice || '₹499'}
                </Text>
                <View style={styles.offerModalSaveTag}>
                  <Text style={styles.offerModalSaveTagText}>50% OFF</Text>
                </View>
              </View>
              <View style={styles.offerModalCouponRow}>
                <Text style={styles.offerModalCouponLabel}>{s.launchOfferCodeLabel}:</Text>
                <View style={styles.offerModalCouponCodeBox}>
                  <Text style={styles.offerModalCouponCode}>
                    {globalConfig?.specialOffer?.couponCode || 'CHAMP50'}
                  </Text>
                </View>
              </View>
            </View>

            {/* Features Checklist */}
            <View style={styles.offerModalFeatures}>
              <Text style={styles.offerModalFeatureItem}>✨ Unlimited Daily Practice across all Subjects</Text>
              <Text style={styles.offerModalFeatureItem}>🔬 Full Access to all 15+ STEM Concept Labs</Text>
              <Text style={styles.offerModalFeatureItem}>🧠 Daily Super Kid Brain Gym & Olympiads</Text>
              <Text style={styles.offerModalFeatureItem}>🛡️ 100% Ad-Free, Kid-Safe & Parent Reports</Text>
            </View>

            {/* Claim Button */}
            <TouchableOpacity
              activeOpacity={0.88}
              onPress={() => {
                triggerHaptic('success');
                setShowOfferDetailsModal(false);
                setShowPaywallModal(true);
              }}
              style={styles.offerModalClaimBtn}
            >
              <Text style={styles.offerModalClaimBtnText}>
                {s.launchOfferClaimBtn} ({globalConfig?.specialOffer?.discountedPrice || '₹499'}) 🚀
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Topic / Concept Selection Modal */}
      {selectedTopicData && (
        <TopicSelectionModal
          visible={!!selectedTopicData}
          onClose={() => setSelectedTopicData(null)}
          grade={profile.grade}
          subject={selectedTopicData.subject}
          chapterTitle={selectedTopicData.title}
          initialMode={selectedTopicData.initialMode || 'topics'}
          chapterIcon={selectedTopicData.icon || (selectedTopicData.subject === 'maths' ? '📐' : selectedTopicData.subject === 'english' ? '📚' : '🇮🇳')}
          questions={generateQuestionsForSession(profile.grade, selectedTopicData.subject, selectedTopicData.title)}
          savedProgress={getChapterProgress(profile.grade, selectedTopicData.subject, selectedTopicData.title)}
          onStartAtQuestion={(startIndex, targetChapter) => {
            const finalChapter = targetChapter || selectedTopicData.title;
            onStartQuiz(selectedTopicData.subject, finalChapter, false, startIndex);
          }}
          onOpenConceptLab={(labId) => {
            setSelectedTopicData(null);
            handleOpenConceptLab(labId);
          }}
          onOpenArcadeGame={(gameType, chapterTitle, gameTitle) => {
            setSelectedTopicData(null);
            setArcadeFilterSubject(selectedTopicData.subject);
            setSelectedKidsArcadeGame(gameType as KidsArcadeGameType);
            setArcadeChapterTitle(chapterTitle || null);
            setArcadeGameTitle(gameTitle || null);
            setShowKidsConceptArcadeModal(true);
          }}
        />
      )}
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
    marginBottom: 8,
    shadowColor: '#64748B',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 3,
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
  },
  cleanSubjectCardCompleted: {
    backgroundColor: '#F0FDF4',
    borderColor: '#10B981',
    borderWidth: 2,
    borderLeftWidth: 5,
    borderLeftColor: '#059669',
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

  // Subject Action Shelf (Quick direct launch for Labs & Games scoped to subject)
  subjectActionShelf: {
    flexDirection: 'row',
    gap: 8,
    marginTop: -2,
    marginBottom: 14,
    paddingHorizontal: 2,
  },
  subjectShelfPill: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 14,
    borderWidth: 1.5,
    gap: 6,
  },
  subjectShelfIcon: {
    fontSize: 14,
  },
  subjectShelfText: {
    fontSize: 12,
    fontWeight: '800',
    flex: 1,
  },
  subjectShelfArrow: {
    fontSize: 13,
    fontWeight: '900',
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
  kidsConceptArcadeBanner: {
    backgroundColor: '#F0FDF4',
    borderRadius: 22,
    borderWidth: 1.5,
    borderColor: '#BBF7D0',
    padding: 16,
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    ...SHADOWS.medium,
  },
  kidsArcadeBannerLeft: {
    flex: 1,
    paddingRight: 10,
  },
  kidsArcadeBadgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 6,
  },
  kidsArcadeBadge: {
    backgroundColor: '#DCFCE7',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#86EFAC',
  },
  kidsArcadeBadgeText: {
    fontSize: 10,
    fontWeight: '900',
    color: '#15803D',
  },
  kidsArcadePill: {
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
  },
  kidsArcadePillText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#B45309',
  },
  kidsArcadeTitle: {
    fontSize: 18,
    fontWeight: '900',
    color: '#0F172A',
    marginBottom: 4,
  },
  kidsArcadeSub: {
    fontSize: 12,
    color: '#475569',
    lineHeight: 16,
    marginBottom: 8,
  },
  kidsArcadePillsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  kidsArcadeMiniTag: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
    fontSize: 10,
    fontWeight: '800',
    color: '#334155',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  kidsArcadeActionCol: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  kidsArcadePlayBtn: {
    backgroundColor: '#16A34A',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 16,
    ...SHADOWS.small,
  },
  kidsArcadePlayText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '900',
  },
  conceptMiniGamesGrid: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },
  conceptMiniGamesScrollView: {
    marginBottom: 16,
  },
  conceptMiniGamesScrollContent: {
    flexDirection: 'row',
    gap: 8,
    paddingHorizontal: 2,
    paddingVertical: 2,
  },
  conceptMiniCard: {
    width: 96,
    borderRadius: 16,
    borderWidth: 1.5,
    paddingVertical: 10,
    paddingHorizontal: 6,
    alignItems: 'center',
    justifyContent: 'center',
    ...SHADOWS.small,
  },
  categorySubjFilterRow: {
    flexDirection: 'row',
    gap: 6,
    marginBottom: 10,
    flexWrap: 'wrap',
  },
  categorySubjPill: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
    backgroundColor: '#F1F5F9',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  categorySubjPillActive: {
    backgroundColor: '#2563EB',
    borderColor: '#1D4ED8',
  },
  categorySubjPillText: {
    fontSize: 11,
    fontWeight: '800',
    color: '#475569',
  },
  categorySubjPillTextActive: {
    color: '#FFFFFF',
  },
  conceptMiniEmoji: {
    fontSize: 24,
    marginBottom: 3,
  },
  conceptMiniName: {
    fontSize: 11,
    fontWeight: '900',
    color: '#0F172A',
    textAlign: 'center',
    marginBottom: 2,
  },
  conceptMiniSub: {
    fontSize: 9,
    fontWeight: '700',
    color: '#64748B',
    textAlign: 'center',
  },
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
    gap: 8,
  },
  labGatewayLiveBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: '#10B981',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    flexShrink: 0,
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
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: BORDER_RADIUS.round,
    borderWidth: 1.5,
    borderColor: '#A7F3D0',
    flexShrink: 1,
    maxWidth: '55%',
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
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#10B981',
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderBottomWidth: 4,
    borderBottomColor: '#059669',
  },
  enterLabActionText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '900',
    letterSpacing: 0.3,
  },
  enterLabActionArrow: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#047857',
    justifyContent: 'center',
    alignItems: 'center',
  },
  enterLabArrowText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '900',
  },
  speedBrainActionBtn: {
    backgroundColor: '#0284C7',
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 14,
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

  // Sleek Special Launch Offer Capsule Pill
  specialOfferCapsule: {
    alignSelf: 'center',
    marginBottom: 14,
    backgroundColor: '#FFFBEB',
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: '#F59E0B',
    shadowColor: '#D97706',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 3,
  },
  specialOfferInner: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 14,
    gap: 8,
  },
  specialOfferIconCircle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#FEF3C7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  specialOfferText: {
    fontSize: 13,
    fontWeight: '800',
    color: '#92400E',
  },
  specialOfferArrow: {
    fontSize: 12,
    fontWeight: '900',
    color: '#D97706',
  },

  // Smart Category Tabs Bar
  categoryTabsWrapper: {
    marginBottom: 14,
  },
  categoryTabsScroll: {
    flexDirection: 'row',
    gap: 8,
    paddingVertical: 2,
  },
  categoryTabPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    gap: 6,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 2,
  },
  categoryTabPillActive: {
    backgroundColor: '#2563EB',
    borderColor: '#1D4ED8',
    shadowColor: '#2563EB',
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 4,
  },
  categoryTabEmoji: {
    fontSize: 16,
  },
  categoryTabText: {
    fontSize: 13,
    fontWeight: '800',
    color: '#475569',
  },
  categoryTabTextActive: {
    color: '#FFFFFF',
  },
  categoryTabBadge: {
    backgroundColor: '#F1F5F9',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 10,
  },
  categoryTabBadgeActive: {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
  },
  categoryTabBadgeText: {
    fontSize: 10,
    fontWeight: '900',
    color: '#64748B',
  },
  categoryTabBadgeTextActive: {
    color: '#FFFFFF',
  },
  categoryTabFreeDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#EF4444',
  },

  // Mission Completed Compact Celebratory Ribbon
  compactMissionDoneCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ECFDF5',
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 14,
    marginBottom: 14,
    borderWidth: 1.5,
    borderColor: '#A7F3D0',
    shadowColor: '#059669',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 2,
  },
  compactMissionDoneLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  compactMissionDoneTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: '#065F46',
  },
  compactMissionDoneSub: {
    fontSize: 12,
    color: '#047857',
    marginTop: 1,
  },
  compactMissionDoneClose: {
    padding: 6,
  },
  compactMissionDoneCloseText: {
    fontSize: 14,
    fontWeight: '800',
    color: '#059669',
  },

  // Category Section Block & Header
  categorySectionBlock: {
    marginBottom: 8,
  },
  categorySectionHeaderRow: {
    marginBottom: 10,
    marginTop: 6,
  },
  categorySectionTitle: {
    fontSize: 17,
    fontWeight: '900',
    color: '#1E293B',
    marginRight: 8,
    flexShrink: 1,
  },
  categorySectionBadge: {
    backgroundColor: '#EFF6FF',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  categorySectionBadgeText: {
    fontSize: 10,
    fontWeight: '900',
    color: '#2563EB',
    letterSpacing: 0.5,
  },
  categorySectionSub: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 2,
  },
  allChaptersPill: {
    backgroundColor: '#EFF6FF',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: BORDER_RADIUS.round,
    borderWidth: 1,
    borderColor: '#BFDBFE',
  },
  allChaptersPillText: {
    fontSize: 11,
    fontWeight: '800',
    color: '#2563EB',
  },

  // Special Launch Offer Modal Styles
  offerModalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(15, 23, 42, 0.65)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  offerModalCard: {
    width: '100%',
    maxWidth: 380,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 22,
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 10,
  },
  offerModalCloseBtn: {
    position: 'absolute',
    top: 14,
    right: 14,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F1F5F9',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
  offerModalCloseText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#64748B',
  },
  offerModalIconCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#FEF3C7',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#FDE68A',
  },
  offerModalBadge: {
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#F59E0B',
  },
  offerModalBadgeText: {
    fontSize: 11,
    fontWeight: '900',
    color: '#B45309',
    letterSpacing: 0.5,
  },
  offerModalTitle: {
    fontSize: 20,
    fontWeight: '900',
    color: '#0F172A',
    textAlign: 'center',
    marginBottom: 6,
  },
  offerModalSub: {
    fontSize: 13,
    color: '#475569',
    textAlign: 'center',
    lineHeight: 18,
    marginBottom: 16,
  },
  offerModalPriceBox: {
    width: '100%',
    backgroundColor: '#FFFBEB',
    borderRadius: 16,
    padding: 14,
    borderWidth: 1.5,
    borderColor: '#FDE68A',
    alignItems: 'center',
    marginBottom: 14,
  },
  offerModalPriceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 6,
  },
  offerModalOrigPrice: {
    fontSize: 18,
    color: '#94A3B8',
    textDecorationLine: 'line-through',
    fontWeight: '600',
  },
  offerModalDiscountedPrice: {
    fontSize: 28,
    fontWeight: '900',
    color: '#B45309',
  },
  offerModalSaveTag: {
    backgroundColor: '#EF4444',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
  },
  offerModalSaveTagText: {
    fontSize: 11,
    fontWeight: '900',
    color: '#FFFFFF',
  },
  offerModalCouponRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  offerModalCouponLabel: {
    fontSize: 12,
    color: '#78350F',
    fontWeight: '700',
  },
  offerModalCouponCodeBox: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#F59E0B',
  },
  offerModalCouponCode: {
    fontSize: 12,
    fontWeight: '900',
    color: '#B45309',
    letterSpacing: 0.6,
  },
  offerModalFeatures: {
    width: '100%',
    marginBottom: 18,
    gap: 6,
  },
  offerModalFeatureItem: {
    fontSize: 12,
    color: '#334155',
    fontWeight: '600',
    lineHeight: 18,
  },
  offerModalClaimBtn: {
    width: '100%',
    backgroundColor: '#2563EB',
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#2563EB',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 4,
    borderBottomWidth: 4,
    borderBottomColor: '#1D4ED8',
  },
  offerModalClaimBtnText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
});
