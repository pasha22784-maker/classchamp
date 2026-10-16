import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { COLORS } from './src/constants/theme';
import { useUserStore } from './src/store/useUserStore';
import { useQuizStore } from './src/store/useQuizStore';
import { DashboardScreen } from './src/screens/DashboardScreen';
import { ChapterVaultScreen } from './src/screens/ChapterVaultScreen';
import { Roadmap365Screen } from './src/screens/Roadmap365Screen';
import { OnboardingScreen } from './src/screens/OnboardingScreen';
import { ParentZoneScreen } from './src/screens/ParentZoneScreen';
import { QuizScreen } from './src/screens/QuizScreen';
import { CelebrationScreen } from './src/screens/CelebrationScreen';
import { ParentGateModal, AppUpdaterModal } from './src/components/common';
import { generateQuestionsForSession } from './src/data/questionGenerator';
import { getQuestionsForDay, getDayMissionInfo } from './src/data/curriculum365Engine';
import { getChaptersForGradeSubject } from './src/data/chaptersData';
import { Subject, Grade, ScreenType } from './src/types';

export default function App() {
  const { profile, isHydrated, loadProfile, setGrade, setLastSubjectLesson } = useUserStore();
  const { startQuiz } = useQuizStore();
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('dashboard');
  const [vaultSubject, setVaultSubject] = useState<Subject>('maths');
  const [showParentGate, setShowParentGate] = useState(false);

  useEffect(() => {
    loadProfile();
  }, []);

  if (!isHydrated) {
    return (
      <SafeAreaProvider>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={COLORS.gold} />
        </View>
      </SafeAreaProvider>
    );
  }

  // Calculate current active day in the 365-day annual path
  const currentActiveDay = Math.min(365, profile.historyDatesCompleted.length + 1);
  const completedDaysList = profile.historyDatesCompleted.map((_, idx) => idx + 1);

  // Handle Quick Daily Quiz Start — Resumes where student left off with full 10-question drill!
  const handleStartQuiz = (subject: Subject, specificChapter?: string) => {
    const chapters = getChaptersForGradeSubject(profile.grade, subject);
    const targetChapter = specificChapter || profile.lastLessonBySubject?.[subject] || (chapters[0] ? chapters[0].title : undefined);
    
    if (targetChapter) {
      setLastSubjectLesson(subject, targetChapter);
    }

    const sessionQuestions = generateQuestionsForSession(profile.grade, subject, targetChapter);
    startQuiz(profile.grade, subject, sessionQuestions, targetChapter);
    setCurrentScreen('quiz');
  };

  // Handle Lesson-Wise Quiz Start
  const handleSelectChapter = (subject: Subject, chapterTitle: string) => {
    setLastSubjectLesson(subject, chapterTitle);
    const chapterQuestions = generateQuestionsForSession(profile.grade, subject, chapterTitle);
    startQuiz(profile.grade, subject, chapterQuestions, chapterTitle);
    setCurrentScreen('quiz');
  };

  // Handle 365-Day Specific Day Mission Start
  const handleSelect365Day = (dayNumber: number) => {
    const mission = getDayMissionInfo(profile.grade, dayNumber);
    const dayQuestions = getQuestionsForDay(profile.grade, dayNumber);
    startQuiz(profile.grade, mission.subject, dayQuestions, mission.title);
    setCurrentScreen('quiz');
  };

  const handleOpenChapterVault = (subject: Subject = 'maths') => {
    setVaultSubject(subject);
    setCurrentScreen('chapter_vault');
  };

  const handleOpenParentZone = () => {
    setShowParentGate(true);
  };

  const handleParentGateSuccess = () => {
    setShowParentGate(false);
    setCurrentScreen('parent_zone');
  };

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        {currentScreen === 'onboarding' && (
          <OnboardingScreen onComplete={() => setCurrentScreen('dashboard')} />
        )}

        {currentScreen === 'dashboard' && (
          <DashboardScreen
            onStartQuiz={handleStartQuiz}
            onOpenChapterVault={handleOpenChapterVault}
            onOpenRoadmap365={() => setCurrentScreen('roadmap_365')}
            onOpenParentZone={handleOpenParentZone}
          />
        )}

        {currentScreen === 'chapter_vault' && (
          <ChapterVaultScreen
            grade={profile.grade}
            initialSubject={vaultSubject}
            onSelectChapter={handleSelectChapter}
            onBack={() => setCurrentScreen('dashboard')}
          />
        )}

        {currentScreen === 'roadmap_365' && (
          <Roadmap365Screen
            grade={profile.grade}
            currentActiveDay={currentActiveDay}
            completedDays={completedDaysList}
            onSelectDay={handleSelect365Day}
            onBack={() => setCurrentScreen('dashboard')}
          />
        )}

        {currentScreen === 'quiz' && (
          <QuizScreen
            onFinishQuiz={() => setCurrentScreen('celebration')}
            onExitQuiz={() => setCurrentScreen('dashboard')}
          />
        )}

        {currentScreen === 'celebration' && (
          <CelebrationScreen
            onBackToDashboard={() => setCurrentScreen('dashboard')}
          />
        )}

        {currentScreen === 'parent_zone' && (
          <ParentZoneScreen onBack={() => setCurrentScreen('dashboard')} />
        )}

        {/* Google Play Families Security Challenge Modal */}
        <ParentGateModal
          visible={showParentGate}
          onSuccess={handleParentGateSuccess}
          onCancel={() => setShowParentGate(false)}
        />

        {/* GitHub In-App Auto Updater */}
        <AppUpdaterModal />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryDark,
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryDark,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
