import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS, BORDER_RADIUS, SPACING, SHADOWS } from '../../constants/theme';
import { QuizSessionResult, Grade } from '../../types';

interface CertificateCardProps {
  studentName: string;
  grade: Grade;
  result: QuizSessionResult;
  streakDays: number;
}

export const CertificateCard: React.FC<CertificateCardProps> = ({
  studentName,
  grade,
  result,
  streakDays,
}) => {
  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = secs % 60;
    return `${mins}m ${remainingSecs}s`;
  };

  const getPraise = () => {
    if (result.scorePercentage >= 90) return '🏆 OUTSTANDING PRACTICE!';
    if (result.scorePercentage >= 70) return '🌟 SUPER SMART EFFORT!';
    return '💪 GREAT DAILY PRACTICE!';
  };

  return (
    <View style={[styles.cardContainer, SHADOWS.medium]}>
      {/* Decorative Border Ring */}
      <View style={styles.borderFrame}>
        {/* Certificate Header */}
        <View style={styles.headerRow}>
          <View style={styles.logoBadge}>
            <Text style={styles.logoEmoji}>🏆</Text>
          </View>
          <View style={styles.headerTextCol}>
            <Text style={styles.appTitle}>CLASSCHAMP</Text>
            <Text style={styles.appSubtitle}>Daily 10-Min School Practice Report</Text>
          </View>
          <View style={styles.dateBadge}>
            <Text style={styles.dateText}>{result.date}</Text>
          </View>
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Student Info Hero */}
        <View style={styles.studentHero}>
          <Text style={styles.congratsText}>{getPraise()}</Text>
          <Text style={styles.studentName}>{studentName}</Text>
          <Text style={styles.gradeText}>
            {typeof grade === 'number' ? `Class ${grade}` : grade} • {result.subject === 'maths' ? 'Mathematics 📐' : result.subject === 'english' ? 'English Grammar 📚' : 'Hindi (हिंदी) 🇮🇳'}
          </Text>
          {result.chapterTitle ? (
            <Text style={[styles.gradeText, { color: COLORS.primary, fontWeight: '700', marginTop: 2 }]}>
              Lesson: {result.chapterTitle}
            </Text>
          ) : null}
        </View>

        {/* Stars Display */}
        <View style={styles.starsRow}>
          <Text style={[styles.starEmoji, result.starsEarned >= 1 ? styles.starOn : styles.starOff]}>
            ⭐
          </Text>
          <Text style={[styles.starEmojiLarge, result.starsEarned >= 2 ? styles.starOn : styles.starOff]}>
            ⭐
          </Text>
          <Text style={[styles.starEmoji, result.starsEarned >= 3 ? styles.starOn : styles.starOff]}>
            ⭐
          </Text>
        </View>

        {/* Stats Grid */}
        <View style={styles.metricsGrid}>
          <View style={styles.metricBox}>
            <Text style={styles.metricLabel}>Score</Text>
            <Text style={styles.metricValue}>
              {result.correctCount}/{result.totalQuestions}
            </Text>
            <Text style={styles.metricSub}>{result.scorePercentage}% Correct</Text>
          </View>

          <View style={styles.metricBox}>
            <Text style={styles.metricLabel}>Time Taken</Text>
            <Text style={styles.metricValue}>{formatTime(result.timeTakenSeconds)}</Text>
            <Text style={styles.metricSub}>Bite-Sized Focus</Text>
          </View>

          <View style={styles.metricBox}>
            <Text style={styles.metricLabel}>Habit Streak</Text>
            <Text style={[styles.metricValue, { color: '#C2410C' }]}>
              🔥 {streakDays}d
            </Text>
            <Text style={styles.metricSub}>Daily Habit</Text>
          </View>
        </View>

        {/* Footer Brand Seal */}
        <View style={styles.footerRow}>
          <Text style={styles.footerMotto}>
            "Consistency beats intensity — 10 mins daily makes a Champion!" 🚀
          </Text>
          <Text style={styles.brandTag}>ClassChamp • Safe & Ad-Free Learning</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#FFFDF5',
    borderRadius: BORDER_RADIUS.xl,
    padding: SPACING.md,
    borderWidth: 3,
    borderColor: COLORS.gold,
  },
  borderFrame: {
    borderWidth: 1.5,
    borderColor: '#FDE68A',
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.lg,
    borderStyle: 'dashed',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: SPACING.sm,
  },
  logoBadge: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: COLORS.gold,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoEmoji: {
    fontSize: 20,
  },
  headerTextCol: {
    flex: 1,
    marginLeft: SPACING.sm,
  },
  appTitle: {
    fontSize: 16,
    fontWeight: '900',
    color: COLORS.primaryDark,
    letterSpacing: 1,
  },
  appSubtitle: {
    fontSize: 10,
    fontWeight: '600',
    color: COLORS.textMedium,
  },
  dateBadge: {
    backgroundColor: COLORS.primarySoft,
    paddingHorizontal: SPACING.sm,
    paddingVertical: 3,
    borderRadius: BORDER_RADIUS.round,
  },
  dateText: {
    fontSize: 10,
    fontWeight: '700',
    color: COLORS.primaryDark,
  },
  divider: {
    height: 1,
    backgroundColor: '#FDE68A',
    marginVertical: SPACING.sm,
  },
  studentHero: {
    alignItems: 'center',
    marginVertical: SPACING.xs,
  },
  congratsText: {
    fontSize: 12,
    fontWeight: '800',
    color: COLORS.goldDark,
    letterSpacing: 0.5,
    marginBottom: 2,
  },
  studentName: {
    fontSize: 22,
    fontWeight: '900',
    color: COLORS.textDark,
    marginBottom: 2,
  },
  gradeText: {
    fontSize: 13,
    fontWeight: '600',
    color: COLORS.textMedium,
  },
  starsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: SPACING.md,
    marginVertical: SPACING.sm,
  },
  starEmoji: {
    fontSize: 28,
  },
  starEmojiLarge: {
    fontSize: 38,
  },
  starOn: {
    opacity: 1,
  },
  starOff: {
    opacity: 0.25,
  },
  metricsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.md,
    marginVertical: SPACING.sm,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  metricBox: {
    alignItems: 'center',
    width: '32%',
  },
  metricLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: COLORS.textLight,
    textTransform: 'uppercase',
  },
  metricValue: {
    fontSize: 16,
    fontWeight: '900',
    color: COLORS.primaryDark,
    marginVertical: 2,
  },
  metricSub: {
    fontSize: 10,
    fontWeight: '600',
    color: COLORS.textMedium,
  },
  footerRow: {
    alignItems: 'center',
    marginTop: SPACING.sm,
  },
  footerMotto: {
    fontSize: 10,
    fontWeight: '700',
    color: COLORS.textDark,
    textAlign: 'center',
    fontStyle: 'italic',
    marginBottom: 2,
  },
  brandTag: {
    fontSize: 9,
    fontWeight: '700',
    color: COLORS.primaryLight,
  },
});
