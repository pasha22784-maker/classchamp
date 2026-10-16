import React, { useEffect } from 'react';
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
import { useQuizStore } from '../store/useQuizStore';
import { triggerHaptic } from '../utils/haptics';
import { stopSpeaking } from '../utils/speech';

interface QuizScreenProps {
  onFinishQuiz: () => void;
  onExitQuiz: () => void;
}

export const QuizScreen: React.FC<QuizScreenProps> = ({
  onFinishQuiz,
  onExitQuiz,
}) => {
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
    tickTimer,
    isQuizComplete,
  } = useQuizStore();

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

  // Stop previous speech on new question or screen exit
  useEffect(() => {
    stopSpeaking();
    return () => {
      stopSpeaking();
    };
  }, [currentQuestionIndex]);

  const currentQ = questions[currentQuestionIndex];

  if (!currentQ) {
    return null;
  }

  // Format timer MM:SS
  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  const timeString = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  const handleExitPress = () => {
    Alert.alert(
      'Leave Practice?',
      'Your progress for this 10-minute session will not be saved.',
      [
        { text: 'Keep Playing', style: 'cancel' },
        {
          text: 'Leave',
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
        return 'Multiple Choice 🔘';
      case 'fill_blank':
        return 'Fill the Blank ✍️';
      case 'match_pairs':
        return 'Match the Pairs 🔗';
      case 'drag_order':
        return 'Order Puzzle 🧩';
      default:
        return 'Practice Question';
    }
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.primaryDark} />

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

        {/* Live Session Stars */}
        <View style={styles.starsPill}>
          <Text style={styles.starsText}>⭐ {starsEarned}</Text>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Progress Bar */}
        <ChampProgressBar
          current={currentQuestionIndex + 1}
          total={questions.length}
          style={styles.progressBar}
        />

        {/* In-Quiz Streak Multiplier Banner */}
        {consecutiveStreak >= 2 && (
          <View style={styles.streakBanner}>
            <Text style={styles.streakBannerText}>
              🔥 {consecutiveStreak} In A Row! Super Champ (+15 ⭐ Bonus)
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
            <SpeakerButton textToSpeak={currentQ.question} size="md" />
          </View>

          <Text style={styles.questionText}>
            {currentQ.question}
          </Text>

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
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
              <Text style={styles.feedbackHeading}>
                {isCorrect ? '🎉 Super Champ! That’s Right!' : '💡 Good Try! Here’s the Clue:'}
              </Text>
              <SpeakerButton textToSpeak={currentQ.explanation} size="sm" />
            </View>
            <Text style={styles.explanationBody}>{currentQ.explanation}</Text>
          </ChampCard>
        )}

        {/* Bottom Interactive Control */}
        <View style={styles.bottomControl}>
          {!isAnswerSubmitted ? (
            <ChampButton
              title="Check Answer"
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
                  ? 'See Today’s Scorecard 🏆'
                  : 'Next Question →'
              }
              variant="gold"
              size="lg"
              onPress={nextQuestion}
            />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.primaryDark,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.md,
    backgroundColor: COLORS.primaryDark,
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
  progressBar: {
    marginBottom: SPACING.md,
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
  bottomControl: {
    marginTop: SPACING.sm,
    marginBottom: SPACING.giant,
  },
});
