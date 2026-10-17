import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, SPACING, BORDER_RADIUS, SHADOWS } from '../constants/theme';
import { ChampHeader, ChampCard, ChampBadge, ChampButton } from '../components/common';
import { getChaptersForGradeSubject, NCERT_BOOKS } from '../data/chaptersData';
import { ChapterLesson, Grade, Subject } from '../types';
import { triggerHaptic } from '../utils/haptics';

interface ChapterVaultScreenProps {
  grade: Grade;
  initialSubject?: Subject;
  onSelectChapter: (subject: Subject, chapterTitle: string) => void;
  onBack: () => void;
}

export const ChapterVaultScreen: React.FC<ChapterVaultScreenProps> = ({
  grade,
  initialSubject = 'maths',
  onSelectChapter,
  onBack,
}) => {
  const [selectedSubject, setSelectedSubject] = useState<Subject>(initialSubject);

  const chapters = getChaptersForGradeSubject(grade, selectedSubject);
  const bookInfo = NCERT_BOOKS[grade] || {
    mathsBook: 'NCERT Mathematics',
    englishBook: 'NCERT English',
    hindiBook: 'NCERT Hindi (हिंदी)',
  };

  const handleSubjectTab = (subj: Subject) => {
    triggerHaptic('light');
    setSelectedSubject(subj);
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.primaryDark} />

      <ChampHeader
        title={typeof grade === 'number' ? `Class ${grade} NCERT Lessons` : `${grade} Foundation Lessons`}
        subtitle="100% Official Textbook Syllabus"
        onBack={onBack}
      />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Subject Switcher Tabs */}
        <View style={styles.tabContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => handleSubjectTab('maths')}
            style={[
              styles.tabButton,
              selectedSubject === 'maths' && styles.tabButtonActive,
            ]}
          >
            <Text
              style={[
                styles.tabText,
                selectedSubject === 'maths' && styles.tabTextActive,
              ]}
            >
              📐 Maths
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => handleSubjectTab('english')}
            style={[
              styles.tabButton,
              selectedSubject === 'english' && styles.tabButtonActive,
            ]}
          >
            <Text
              style={[
                styles.tabText,
                selectedSubject === 'english' && styles.tabTextActive,
              ]}
            >
              📚 English
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => handleSubjectTab('hindi')}
            style={[
              styles.tabButton,
              selectedSubject === 'hindi' && styles.tabButtonActive,
            ]}
          >
            <Text
              style={[
                styles.tabText,
                selectedSubject === 'hindi' && styles.tabTextActive,
              ]}
            >
              🇮🇳 हिंदी
            </Text>
          </TouchableOpacity>
        </View>

        {/* Section Title with Official NCERT Book Name */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            {selectedSubject === 'maths'
              ? bookInfo.mathsBook
              : selectedSubject === 'english'
              ? bookInfo.englishBook
              : bookInfo.hindiBook}
          </Text>
          <Text style={styles.sectionSub}>Official NCERT chapters — tap to practice:</Text>
        </View>

        {/* Chapter Lessons List */}
        <View style={styles.chaptersList}>
          {chapters.map((chapter) => (
            <ChampCard
              key={chapter.id}
              style={styles.chapterCard}
              shadow="small"
              onPress={() => onSelectChapter(selectedSubject, chapter.title)}
            >
              <View style={styles.cardHeader}>
                <View style={styles.numberBadge}>
                  <Text style={styles.numberText}>
                    {chapter.number < 10 ? `0${chapter.number}` : chapter.number}
                  </Text>
                </View>

                <View style={styles.iconCircle}>
                  <Text style={styles.chapterIcon}>{chapter.icon}</Text>
                </View>

                <View style={styles.infoCol}>
                  <Text style={styles.chapterTitle}>{chapter.title}</Text>
                  <Text style={styles.conceptSummary} numberOfLines={2}>
                    {chapter.conceptSummary}
                  </Text>
                </View>
              </View>

              <View style={styles.cardFooter}>
                <ChampBadge
                  label="10 Questions"
                  variant="neutral"
                  size="sm"
                />
                <View style={styles.playActionRow}>
                  <Text style={styles.playActionText}>Practice Lesson</Text>
                  <Text style={styles.arrowIcon}>→</Text>
                </View>
              </View>
            </ChampCard>
          ))}
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
  scrollContent: {
    backgroundColor: COLORS.background,
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.lg,
    paddingBottom: SPACING.giant,
    borderTopLeftRadius: BORDER_RADIUS.xl,
    borderTopRightRadius: BORDER_RADIUS.xl,
    minHeight: '100%',
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.backgroundAlt,
    borderRadius: BORDER_RADIUS.round,
    padding: 4,
    marginBottom: SPACING.lg,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  tabButton: {
    flex: 1,
    paddingVertical: SPACING.sm + 2,
    alignItems: 'center',
    borderRadius: BORDER_RADIUS.round,
  },
  tabButtonActive: {
    backgroundColor: COLORS.primary,
  },
  tabText: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.textMedium,
  },
  tabTextActive: {
    color: COLORS.white,
  },
  sectionHeader: {
    marginBottom: SPACING.md,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: COLORS.textDark,
  },
  sectionSub: {
    fontSize: 12,
    color: COLORS.textMedium,
    marginTop: 2,
  },
  chaptersList: {
    gap: SPACING.md,
    marginBottom: SPACING.xxl,
  },
  chapterCard: {
    marginBottom: SPACING.xs,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.md,
  },
  numberBadge: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: COLORS.primarySoft,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    fontSize: 13,
    fontWeight: '900',
    color: COLORS.primaryDark,
  },
  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#FEF3C7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chapterIcon: {
    fontSize: 24,
  },
  infoCol: {
    flex: 1,
  },
  chapterTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: COLORS.textDark,
    marginBottom: 2,
  },
  conceptSummary: {
    fontSize: 12,
    color: COLORS.textMedium,
    lineHeight: 16,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SPACING.md,
    paddingTop: SPACING.sm,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  playActionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  playActionText: {
    fontSize: 13,
    fontWeight: '700',
    color: COLORS.primary,
  },
  arrowIcon: {
    fontSize: 14,
    fontWeight: '800',
    color: COLORS.primary,
  },
});
