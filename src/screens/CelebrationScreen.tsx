import React, { useEffect, useState, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, SPACING, BORDER_RADIUS } from '../constants/theme';
import { ChampButton, ChampCard } from '../components/common';
import { CertificateCard } from '../components/scorecard/CertificateCard';
import { useQuizStore } from '../store/useQuizStore';
import { useUserStore } from '../store/useUserStore';
import { getChaptersForGradeSubject } from '../data/chaptersData';
import { shareScorecard } from '../utils/whatsappShare';
import { triggerHaptic } from '../utils/haptics';

import { Subject } from '../types';

interface CelebrationScreenProps {
  onBackToDashboard: () => void;
  onStartExtraPractice?: (subject: Subject, chapterTitle?: string) => void;
}

export const CelebrationScreen: React.FC<CelebrationScreenProps> = ({
  onBackToDashboard,
  onStartExtraPractice,
}) => {
  const { getResultSummary, starsEarned } = useQuizStore();
  const { profile, recordQuizCompletion } = useUserStore();
  const [result] = useState(() => getResultSummary());
  const [earnedStreak, setEarnedStreak] = useState(profile.currentStreak);
  const [isSharing, setIsSharing] = useState(false);
  const certificateRef = useRef<View>(null);

  useEffect(() => {
    // Record quiz completion to update streak, stars and progress permanently
    const saveProgress = async () => {
      triggerHaptic('success');
      const { newStreak } = await recordQuizCompletion(starsEarned);
      setEarnedStreak(newStreak);

      // Advance to next chapter for the subject so student resumes ahead next time
      if (result.chapterTitle) {
        const chapters = getChaptersForGradeSubject(result.grade, result.subject);
        const currentIndex = chapters.findIndex((c) => c.title === result.chapterTitle);
        if (currentIndex >= 0 && currentIndex + 1 < chapters.length) {
          await useUserStore.getState().setLastSubjectLesson(result.subject, chapters[currentIndex + 1].title);
        } else if (currentIndex >= 0) {
          await useUserStore.getState().setLastSubjectLesson(result.subject, chapters[currentIndex].title);
        }
      }
    };

    saveProgress();
  }, []);

  const handleShare = async () => {
    setIsSharing(true);
    triggerHaptic('medium');
    const success = await shareScorecard(
      certificateRef,
      profile.name,
      profile.grade,
      result,
      earnedStreak
    );
    setIsSharing(false);
    if (!success) {
      Alert.alert('Share', 'Could not open share dialog.');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.primaryDark} />

      {/* Header Banner */}
      <View style={styles.header}>
        <View style={styles.trophyCircle}>
          <Text style={styles.trophyEmoji}>🏆</Text>
        </View>
        <Text style={styles.headerTitle}>10-MINUTE PRACTICE COMPLETE!</Text>
        <Text style={styles.headerSubtitle}>
          Here is your Official ClassChamp Daily Report Card
        </Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Printable / Shareable Digital Certificate */}
        <View ref={certificateRef} collapsable={false} style={styles.certificateWrapper}>
          <CertificateCard
            studentName={profile.name}
            grade={profile.grade}
            result={result}
            streakDays={earnedStreak}
          />
        </View>

        {/* IXL-Grade: Need Extra Practice on this Topic? */}
        {onStartExtraPractice && (
          <ChampCard style={styles.practiceCard} variant="gold">
            <View style={styles.practiceRow}>
              <View style={styles.practiceIconBox}>
                <Text style={{ fontSize: 30 }}>🎯</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.practiceTitle}>Need Extra Practice on this Topic?</Text>
                <Text style={styles.practiceDesc}>
                  Master every concept like a champion! Solve 10 more dynamic questions from {result.chapterTitle || 'this topic'}.
                </Text>
              </View>
            </View>

            <ChampButton
              title="Practice 10 More Questions 🚀"
              icon="🔄"
              variant="gold"
              size="lg"
              onPress={() => {
                triggerHaptic('medium');
                onStartExtraPractice(result.subject, result.chapterTitle);
              }}
              style={styles.practiceBtn}
            />
          </ChampCard>
        )}

        {/* 1-Tap WhatsApp Share Card */}
        <ChampCard style={styles.shareCard} variant="white">
          <View style={styles.waRow}>
            <View style={styles.waIconBox}>
              <Text style={styles.waEmoji}>💬</Text>
            </View>
            <View style={styles.waTextCol}>
              <Text style={styles.waTitle}>Send Scorecard to Parents</Text>
              <Text style={styles.waDesc}>
                Forward your proud certificate to Mom, Dad, or your family group on WhatsApp with 1 tap!
              </Text>
            </View>
          </View>

          <ChampButton
            title={isSharing ? 'Preparing Scorecard...' : 'Share to WhatsApp 📲'}
            icon="✨"
            variant="success"
            size="lg"
            loading={isSharing}
            onPress={handleShare}
            style={styles.shareBtn}
          />
        </ChampCard>

        {/* Back to Home Action */}
        <ChampButton
          title="Back to Daily Dashboard"
          variant="primary"
          size="md"
          onPress={onBackToDashboard}
          style={styles.backBtn}
        />
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
    alignItems: 'center',
    paddingVertical: SPACING.lg,
    paddingHorizontal: SPACING.lg,
    backgroundColor: COLORS.primaryDark,
  },
  trophyCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: COLORS.gold,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SPACING.sm,
  },
  trophyEmoji: {
    fontSize: 32,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '900',
    color: COLORS.white,
    letterSpacing: 0.5,
    marginBottom: 2,
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 12,
    color: COLORS.goldLight,
    fontWeight: '600',
    textAlign: 'center',
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
  certificateWrapper: {
    marginBottom: SPACING.xl,
  },
  practiceCard: {
    marginBottom: SPACING.lg,
    borderWidth: 2,
    borderColor: COLORS.gold,
  },
  practiceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.md,
    marginBottom: SPACING.md,
  },
  practiceIconBox: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#FEF3C7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  practiceTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: COLORS.textDark,
    marginBottom: 2,
  },
  practiceDesc: {
    fontSize: 12,
    color: COLORS.textMedium,
    lineHeight: 16,
  },
  practiceBtn: {
    marginTop: SPACING.xs,
  },
  shareCard: {
    marginBottom: SPACING.lg,
  },
  waRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.md,
    marginBottom: SPACING.md,
  },
  waIconBox: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#DCFCE7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  waEmoji: {
    fontSize: 24,
  },
  waTextCol: {
    flex: 1,
  },
  waTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: COLORS.textDark,
    marginBottom: 2,
  },
  waDesc: {
    fontSize: 12,
    color: COLORS.textMedium,
    lineHeight: 16,
  },
  shareBtn: {
    marginTop: SPACING.xs,
  },
  backBtn: {
    marginTop: SPACING.xs,
    marginBottom: SPACING.xxl,
  },
});
