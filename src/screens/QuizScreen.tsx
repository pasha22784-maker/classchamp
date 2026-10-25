import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, SPACING, BORDER_RADIUS } from '../constants/theme';
import {
  ChampBadge,
  ChampButton,
  ChampCard,
  ChampProgressBar,
  SpeakerButton,
} from '../components/common';
import { DynamicQuestionRenderer } from '../components/quiz';
import { TopicSelectionModal } from '../components/quiz/TopicSelectionModal';
import { useQuizStore } from '../store/useQuizStore';
import { useUserStore } from '../store/useUserStore';
import { triggerHaptic } from '../utils/haptics';
import { speakText, stopSpeaking } from '../utils/speech';
import { cleanBilingualForEnglish, cleanBilingualForHindi, getAdaptedQuestion } from '../utils/language';

interface QuizScreenProps {
  onFinishQuiz: () => void;
  onExitQuiz: () => void;
}

export const QuizScreen: React.FC<QuizScreenProps> = ({
  onFinishQuiz,
  onExitQuiz,
}) => {
  const { profile } = useUserStore();
  const {
    questions,
    currentQuestionIndex,
    secondsRemaining,
    isTimerRunning,
    selectedAnswer,
    isAnswerSubmitted,
    isCorrect,
    consecutiveStreak,
    starsEarned,
    selectAnswer,
    submitAnswer,
    nextQuestion,
    jumpToQuestion,
    tickTimer,
    isQuizComplete,
    activeChapterTitle,
  } = useQuizStore();

  const [showTopicDrawer, setShowTopicDrawer] = useState(false);
  const isKindergarten = profile.grade === 'LKG' || profile.grade === 'UKG';
  const [autoSpeakEnabled, setAutoSpeakEnabled] = useState(isKindergarten);

  // Run the 10-minute countdown timer
  useEffect(() => {
    if (!isTimerRunning) return;

    const interval = setInterval(() => {
      tickTimer();
    }, 1000);

    return () => clearInterval(interval);
  }, [isTimerRunning]);

  // When quiz finishes, navigate to celebration
  useEffect(() => {
    if (isQuizComplete) {
      stopSpeaking();
      onFinishQuiz();
    }
  }, [isQuizComplete]);

  // Stop previous speech on screen unmount
  useEffect(() => {
    return () => {
      stopSpeaking();
    };
  }, []);

  const rawQ = questions[currentQuestionIndex];
  const isHindi = rawQ ? (rawQ.subject === 'hindi' || (rawQ.subject !== 'english' && profile.preferredLanguage === 'hi')) : false;
  const currentQ = rawQ ? getAdaptedQuestion(rawQ, isHindi ? 'hi' : 'en') : null;

  // Auto-speak question for pre-readers & young learners upon question load
  useEffect(() => {
    stopSpeaking();
    if (autoSpeakEnabled && rawQ && currentQ) {
      const textToSpeak = isHindi
        ? (rawQ.questionHindi || currentQ.question)
        : currentQ.question;
      const timer = setTimeout(() => {
        speakText(textToSpeak);
      }, 380);
      return () => {
        clearTimeout(timer);
        stopSpeaking();
      };
    }
  }, [currentQuestionIndex, autoSpeakEnabled, isHindi]);

  if (!rawQ || !currentQ) {
    return null;
  }

  // Format timer MM:SS
  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  const timeString = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  const handleExitPress = () => {
    stopSpeaking();
    Alert.alert(
      isHindi ? 'अभ्यास छोड़ें?' : 'Leave Practice?',
      isHindi
        ? 'इस 10-मिनट सत्र की आपकी प्रगति सुरक्षित नहीं होगी।'
        : 'Your progress for this 10-minute session will not be saved.',
      [
        { text: isHindi ? 'जारी रखें' : 'Keep Playing', style: 'cancel' },
        {
          text: isHindi ? 'बाहर जाएं' : 'Leave',
          style: 'destructive',
          onPress: () => {
            triggerHaptic('warning');
            onExitQuiz();
          },
        },
      ]
    );
  };

  // Determine if child has completed the interactive step before pressing "Check Answer"
  const isSubmitDisabled = (() => {
    if (isAnswerSubmitted) return false;
    if (selectedAnswer === null || selectedAnswer === undefined) return true;

    switch (currentQ.type) {
      case 'mcq':
        return !selectedAnswer;
      case 'fill_blank':
        return !selectedAnswer || String(selectedAnswer).trim().length === 0;
      case 'match_pairs': {
        const requiredCount = currentQ.payload.pairs?.length || 0;
        const matchedCount = Object.keys(selectedAnswer || {}).length;
        return matchedCount < requiredCount;
      }
      case 'drag_order': {
        const requiredCount = currentQ.payload.correctSequence?.length || 0;
        const placedCount = (selectedAnswer as string[] || []).length;
        return placedCount < requiredCount;
      }
      default:
        return false;
    }
  })();

  const formatQuestionTypeLabel = (type: string) => {
    switch (type) {
      case 'mcq':
        return isHindi ? 'बहुविकल्पीय प्रश्न 🔘' : 'Multiple Choice 🔘';
      case 'fill_blank':
        return isHindi ? 'रिक्त स्थान भरें ✍️' : 'Fill the Blank ✍️';
      case 'match_pairs':
        return isHindi ? 'जोड़ियां मिलाएं 🔗' : 'Match the Pairs 🔗';
      case 'drag_order':
        return isHindi ? 'क्रम में लगाएं 🧩' : 'Order Puzzle 🧩';
      default:
        return isHindi ? 'अभ्यास प्रश्न' : 'Practice Question';
    }
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />

      {/* Quiz Header with Timer & Exit */}
      <View style={styles.header}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={handleExitPress}
          style={styles.exitBtn}
        >
          <Text style={styles.exitText}>✕</Text>
        </TouchableOpacity>

        {/* 10-Minute Countdown Clock */}
        <View style={styles.timerBadge}>
          <Text style={styles.timerEmoji}>⏱️</Text>
          <Text style={[styles.timerText, secondsRemaining < 60 && styles.timerUrgent]}>
            {timeString}
          </Text>
        </View>

        {/* Voice Auto-Narrate Toggle */}
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            triggerHaptic('light');
            if (autoSpeakEnabled) {
              stopSpeaking();
            }
            setAutoSpeakEnabled((prev) => !prev);
          }}
          style={[styles.audioToggleBtn, !autoSpeakEnabled && styles.audioToggleBtnMuted]}
          accessibilityLabel={autoSpeakEnabled ? 'Voice assistance on' : 'Voice assistance muted'}
        >
          <Text style={styles.audioToggleEmoji}>{autoSpeakEnabled ? '🔊' : '🔇'}</Text>
        </TouchableOpacity>

        {/* Live Session Coins */}
        <View style={styles.coinsPill}>
          <Text style={styles.coinsText}>💰 {starsEarned * 10}</Text>
        </View>

        {/* Live Session Stars */}
        <View style={styles.starsPill}>
          <Text style={styles.starsText}>⭐ {starsEarned}</Text>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Progress Bar & Topic Jump Trigger */}
        <View style={styles.progressContainer}>
          <View style={{ flex: 1 }}>
            <ChampProgressBar
              current={currentQuestionIndex + 1}
              total={questions.length}
              style={styles.progressBar}
            />
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              triggerHaptic('light');
              setShowTopicDrawer(true);
            }}
            style={styles.topicDrawerTrigger}
          >
            <Text style={styles.topicDrawerText}>
              📑 {isHindi ? `विषय Q${currentQuestionIndex + 1}/${questions.length}` : `Topics Q${currentQuestionIndex + 1}/${questions.length}`} ▾
            </Text>
          </TouchableOpacity>
        </View>

        {/* Chapter & Learning Progression Ladder Header */}
        <View style={styles.chapterHeader}>
          <Text style={styles.chapterTitleText} numberOfLines={1}>
            📖 {isHindi
              ? cleanBilingualForHindi(currentQ.chapter || activeChapterTitle || 'NCERT अभ्यास')
              : cleanBilingualForEnglish(currentQ.chapter || activeChapterTitle || 'NCERT Practice')}
          </Text>
          <View style={styles.stepBadgeRow}>
            <ChampBadge
              label={
                currentQ.difficulty === 'easy'
                  ? (isHindi ? '🌱 चरण 1: समझें' : '🌱 Step 1: Understand')
                  : currentQ.difficulty === 'medium'
                  ? (isHindi ? '🌿 चरण 2: अभ्यास' : '🌿 Step 2: Practice')
                  : (isHindi ? '🏆 चरण 3: निपुणता' : '🏆 Step 3: Mastery')
              }
              variant={
                currentQ.difficulty === 'easy'
                  ? 'success'
                  : currentQ.difficulty === 'medium'
                  ? 'primary'
                  : 'gold'
              }
              size="sm"
            />
            {currentQ.concept ? (
              <Text style={styles.conceptText} numberOfLines={1}>
                {isHindi ? cleanBilingualForHindi(currentQ.concept) : cleanBilingualForEnglish(currentQ.concept)}
              </Text>
            ) : null}
          </View>
        </View>

        {/* In-Quiz Streak Multiplier Banner */}
        {consecutiveStreak >= 2 && (
          <View style={styles.streakBanner}>
            <Text style={styles.streakBannerText}>
              {isHindi
                ? `🔥 लगातार ${consecutiveStreak}! सुपर चैंप (+15 ⭐ बोनस)`
                : `🔥 ${consecutiveStreak} In A Row! Super Champ (+15 ⭐ Bonus)`}
            </Text>
          </View>
        )}

        {/* Question Header Card */}
        <ChampCard style={styles.questionCard} shadow="medium">
          <View style={styles.badgeRow}>
            <View style={{ flexDirection: 'row', gap: 6, alignItems: 'center' }}>
              <ChampBadge
                label={formatQuestionTypeLabel(currentQ.type)}
                variant="purple"
                size="sm"
              />
              <ChampBadge
                label={`+${currentQ.points} Points`}
                variant="gold"
                size="sm"
              />
            </View>
            <View style={{ flexDirection: 'row', gap: 6, alignItems: 'center' }}>
              <SpeakerButton
                textToSpeak={currentQ.question}
                activeLang={isHindi ? 'hi' : 'en'}
                size="md"
              />
              {rawQ.questionHindi && !isHindi && (
                <SpeakerButton
                  textToSpeak={rawQ.questionHindi}
                  activeLang="hi"
                  size="sm"
                  label="हिंदी"
                  showLabel
                />
              )}
            </View>
          </View>

          <Text style={styles.questionText}>
            {currentQ.question}
          </Text>

          {rawQ.questionHindi && !isHindi && (
            <Text style={styles.questionHindiText}>
              {rawQ.questionHindi}
            </Text>
          )}

          {currentQ.visualEmoji ? (
            <View style={styles.emojiHeroBox}>
              <Text style={styles.emojiHero}>{currentQ.visualEmoji}</Text>
            </View>
          ) : null}
        </ChampCard>

        {/* Dynamic Question Renderer (MCQ, Fill in blank, Match pairs, Drag order) */}
        <DynamicQuestionRenderer
          question={currentQ}
          selectedAnswer={selectedAnswer}
          isSubmitted={isAnswerSubmitted}
          onAnswerChange={selectAnswer}
        />

        {/* Post-Answer Explanation Card */}
        {isAnswerSubmitted && (
          <ChampCard
            style={styles.explanationCard}
            variant={isCorrect ? 'gold' : 'accent'}
          >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
              <Text style={styles.feedbackHeading}>
                {isCorrect
                  ? (isHindi ? '🎉 शाबाश, सुपर चैंप! बिल्कुल सही!' : '🎉 Super Champ! That’s Right!')
                  : (isHindi ? '💡 अच्छा प्रयास! यह रहा सही संकेत:' : '💡 Good Try! Here’s the Clue:')}
              </Text>
              <View style={{ flexDirection: 'row', gap: 6, alignItems: 'center' }}>
                <SpeakerButton
                  textToSpeak={currentQ.explanation}
                  activeLang={isHindi ? 'hi' : 'en'}
                  size="sm"
                />
                {rawQ.explanationHindi && !isHindi && (
                  <SpeakerButton
                    textToSpeak={rawQ.explanationHindi}
                    activeLang="hi"
                    size="sm"
                    label="हिंदी"
                    showLabel
                  />
                )}
              </View>
            </View>
            <Text style={styles.explanationBody}>{currentQ.explanation}</Text>
            {rawQ.explanationHindi && !isHindi && (
              <Text style={styles.explanationHindiBody}>{rawQ.explanationHindi}</Text>
            )}
          </ChampCard>
        )}

        {/* Bottom Interactive Control */}
        <View style={styles.bottomControl}>
          {!isAnswerSubmitted ? (
            <ChampButton
              title={isHindi ? 'उत्तर जाँचें' : 'Check Answer'}
              icon="✓"
              variant="primary"
              size="lg"
              disabled={isSubmitDisabled}
              onPress={submitAnswer}
            />
          ) : (
            <ChampButton
              title={
                currentQuestionIndex + 1 >= questions.length
                  ? (isHindi ? 'आज का स्कोरकार्ड देखें 🏆' : 'See Today’s Scorecard 🏆')
                  : (isHindi ? 'अगला प्रश्न →' : 'Next Question →')
              }
              variant="gold"
              size="lg"
              onPress={nextQuestion}
            />
          )}
        </View>
      </ScrollView>

      {/* Interactive In-Quiz Topic / Question Drawer */}
      <TopicSelectionModal
        visible={showTopicDrawer}
        onClose={() => setShowTopicDrawer(false)}
        grade={profile.grade}
        subject={currentQ.subject}
        chapterTitle={currentQ.chapter || activeChapterTitle || ''}
        chapterIcon={currentQ.visualEmoji?.split(' ')[0] || '📖'}
        questions={questions}
        savedProgress={{
          lastQuestionIndex: currentQuestionIndex,
          totalQuestions: questions.length,
          lastUpdated: new Date().toISOString(),
        }}
        onStartAtQuestion={(idx) => {
          jumpToQuestion(idx);
          setShowTopicDrawer(false);
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.md,
    backgroundColor: COLORS.primary,
  },
  exitBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  exitText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '800',
  },
  audioToggleBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255, 255, 255, 0.22)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: 'rgba(255, 255, 255, 0.4)',
  },
  audioToggleBtnMuted: {
    backgroundColor: 'rgba(0, 0, 0, 0.28)',
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  audioToggleEmoji: {
    fontSize: 16,
  },
  timerBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    paddingHorizontal: SPACING.md,
    paddingVertical: 5,
    borderRadius: BORDER_RADIUS.round,
    gap: 4,
  },
  timerEmoji: {
    fontSize: 14,
  },
  timerText: {
    color: COLORS.white,
    fontSize: 15,
    fontWeight: '800',
    fontVariant: ['tabular-nums'],
  },
  timerUrgent: {
    color: '#F87171',
  },
  coinsPill: {
    backgroundColor: 'rgba(234, 179, 8, 0.22)',
    paddingHorizontal: SPACING.md,
    paddingVertical: 5,
    borderRadius: BORDER_RADIUS.round,
    borderWidth: 1,
    borderColor: '#EAB308',
  },
  coinsText: {
    color: '#FEF08A',
    fontWeight: '800',
    fontSize: 13,
  },
  starsPill: {
    backgroundColor: 'rgba(245, 158, 11, 0.25)',
    paddingHorizontal: SPACING.md,
    paddingVertical: 5,
    borderRadius: BORDER_RADIUS.round,
    borderWidth: 1,
    borderColor: COLORS.gold,
  },
  starsText: {
    color: COLORS.goldLight,
    fontWeight: '800',
    fontSize: 13,
  },
  scrollContent: {
    backgroundColor: COLORS.background,
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.lg,
    paddingBottom: SPACING.giant,
    borderTopLeftRadius: BORDER_RADIUS.xl,
    borderTopRightRadius: BORDER_RADIUS.xl,
    minHeight: '100%',
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
    marginBottom: SPACING.sm,
  },
  progressBar: {
    marginBottom: 0,
  },
  topicDrawerTrigger: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: BORDER_RADIUS.round,
    borderWidth: 1,
    borderColor: '#C7D2FE',
    flexDirection: 'row',
    alignItems: 'center',
  },
  topicDrawerText: {
    fontSize: 11,
    fontWeight: '800',
    color: COLORS.primaryDark,
  },
  chapterHeader: {
    backgroundColor: '#EEF2FF',
    borderRadius: BORDER_RADIUS.md,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    marginBottom: SPACING.md,
    borderWidth: 1,
    borderColor: '#C7D2FE',
  },
  chapterTitleText: {
    fontSize: 14,
    fontWeight: '800',
    color: COLORS.primaryDark,
    marginBottom: 4,
  },
  stepBadgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 6,
  },
  conceptText: {
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.textMedium,
    flex: 1,
  },
  streakBanner: {
    backgroundColor: '#FEF3C7',
    borderWidth: 1,
    borderColor: COLORS.gold,
    borderRadius: BORDER_RADIUS.md,
    paddingVertical: 6,
    paddingHorizontal: SPACING.md,
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  streakBannerText: {
    color: COLORS.goldDark,
    fontSize: 13,
    fontWeight: '800',
  },
  questionCard: {
    marginBottom: SPACING.lg,
  },
  badgeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SPACING.md,
  },
  questionText: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.textDark,
    lineHeight: 26,
    marginBottom: SPACING.sm,
  },
  questionHindiText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4338CA',
    lineHeight: 24,
    marginBottom: SPACING.sm,
    backgroundColor: '#EEF2FF',
    paddingHorizontal: SPACING.sm,
    paddingVertical: 6,
    borderRadius: BORDER_RADIUS.sm,
    borderLeftWidth: 3,
    borderLeftColor: COLORS.primary,
  },
  emojiHeroBox: {
    alignItems: 'center',
    paddingVertical: SPACING.sm,
  },
  emojiHero: {
    fontSize: 44,
  },
  explanationCard: {
    marginBottom: SPACING.lg,
  },
  feedbackHeading: {
    fontSize: 15,
    fontWeight: '800',
    color: COLORS.textDark,
    marginBottom: 4,
  },
  explanationBody: {
    fontSize: 13,
    color: COLORS.textMedium,
    lineHeight: 18,
  },
  explanationHindiBody: {
    fontSize: 13,
    color: '#4B5563',
    lineHeight: 19,
    marginTop: 6,
    paddingTop: 6,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0, 0, 0, 0.08)',
  },
  bottomControl: {
    marginTop: SPACING.sm,
    marginBottom: SPACING.giant,
  },
});
