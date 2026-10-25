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
import { ChampHeader, ChampCard, ChampBadge } from '../components/common';
import { getChaptersForGradeSubject, NCERT_BOOKS } from '../data/chaptersData';
import { ChapterLesson, Grade, Subject } from '../types';
import { triggerHaptic } from '../utils/haptics';
import { TopicSelectionModal } from '../components/quiz/TopicSelectionModal';
import { generateQuestionsForSession } from '../data/questionGenerator';
import { useUserStore } from '../store/useUserStore';
import { getChapterTitle, getChapterSummary, cleanBilingualForEnglish, cleanBilingualForHindi } from '../utils/language';

interface ChapterVaultScreenProps {
  grade: Grade;
  initialSubject?: Subject;
  onSelectChapter: (subject: Subject, chapterTitle: string, startIndex?: number) => void;
  onBack: () => void;
}

export const ChapterVaultScreen: React.FC<ChapterVaultScreenProps> = ({
  grade,
  initialSubject = 'maths',
  onSelectChapter,
  onBack,
}) => {
  const { profile, getChapterProgress } = useUserStore();
  const [selectedSubject, setSelectedSubject] = useState<Subject>(initialSubject);
  const [selectedChapterForTopic, setSelectedChapterForTopic] = useState<{ title: string; icon: string } | null>(null);

  const isHindi = selectedSubject === 'hindi' || (selectedSubject !== 'english' && profile.preferredLanguage === 'hi');

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
              ? (isHindi ? cleanBilingualForHindi(bookInfo.mathsBook) : cleanBilingualForEnglish(bookInfo.mathsBook))
              : selectedSubject === 'english'
              ? bookInfo.englishBook
              : bookInfo.hindiBook}
          </Text>
          <Text style={styles.sectionSub}>
            {isHindi ? 'एनसीईआरटी पाठ — अभ्यास के लिए चुनें:' : 'Official NCERT chapters — tap to practice:'}
          </Text>
        </View>

        {grade === 'LKG' && selectedSubject === 'english' && (
          <TouchableOpacity
            style={styles.skillBannerCard}
            activeOpacity={0.88}
            onPress={() => {
              triggerHaptic('medium');
              setSelectedChapterForTopic({
                title: 'A.1: Find the letter in the alphabet: uppercase',
                icon: '⭐',
              });
            }}
          >
            <View style={styles.skillBannerIconCircle}>
              <Text style={{ fontSize: 24 }}>⭐</Text>
            </View>
            <View style={{ flex: 1 }}>
              <View style={styles.skillBannerTag}>
                <Text style={styles.skillBannerTagText}>FOUNDATION SKILLS DIRECTORY</Text>
              </View>
              <Text style={styles.skillBannerTitle}>
                {isHindi ? '78 सूक्ष्म कौशल वर्कशीट (A.1 - X.2)' : '78 Micro-Skill Worksheets (A.1 - X.2)'}
              </Text>
              <Text style={styles.skillBannerSub}>
                {isHindi
                  ? 'रीडिंग फाउंडेशन, स्ट्रैटेजी और शब्दावली के 78 कौशल • 312 प्रश्न'
                  : 'Reading Foundations, Strategies & Vocabulary • 312 Curated Questions'}
              </Text>
            </View>
            <Text style={styles.skillBannerArrow}>→</Text>
          </TouchableOpacity>
        )}

        {/* Chapter Lessons List */}
        <View style={styles.chaptersList}>
          {chapters.map((chapter) => {
            const progress = getChapterProgress(grade, selectedSubject, chapter.title);
            const isCompleted = progress?.isCompleted === true;
            const isStarted = progress && progress.lastQuestionIndex > 0 && !isCompleted;

            const displayTitle = getChapterTitle(chapter, isHindi);
            const displaySummary = getChapterSummary(chapter, isHindi);

            return (
              <ChampCard
                key={chapter.id}
                style={[styles.chapterCard, isCompleted && styles.chapterCardCompleted]}
                shadow={isCompleted ? 'medium' : 'small'}
                onPress={() => {
                  triggerHaptic('light');
                  setSelectedChapterForTopic({ title: chapter.title, icon: chapter.icon });
                }}
              >
                {/* Shiny Completed Stamp / Ribbon Banner */}
                {isCompleted && (
                  <View style={styles.completedHeaderBanner}>
                    <View style={styles.completedTag}>
                      <Text style={styles.completedTagEmoji}>🏆</Text>
                      <Text style={styles.completedTagText}>
                        {isHindi ? 'पूरा हुआ ✓' : 'FINISHED ✓'}
                      </Text>
                    </View>
                    {progress?.scorePercentage !== undefined && (
                      <Text style={styles.completedScoreText}>
                        ⭐ {progress.scorePercentage}% Score
                      </Text>
                    )}
                  </View>
                )}

                <View style={styles.cardHeader}>
                  <View style={[styles.numberBadge, isCompleted && styles.numberBadgeCompleted]}>
                    <Text style={[styles.numberText, isCompleted && styles.numberTextCompleted]}>
                      {isCompleted ? '✓' : chapter.number < 10 ? `0${chapter.number}` : chapter.number}
                    </Text>
                  </View>

                  <View style={[styles.iconCircle, isCompleted && styles.iconCircleCompleted]}>
                    <Text style={styles.chapterIcon}>{chapter.icon}</Text>
                  </View>

                  <View style={styles.infoCol}>
                    <Text style={[styles.chapterTitle, isCompleted && styles.chapterTitleCompleted]}>
                      {displayTitle}
                    </Text>
                    <Text style={styles.conceptSummary} numberOfLines={2}>
                      {displaySummary}
                    </Text>
                  </View>
                </View>

                <View style={[styles.cardFooter, isCompleted && styles.cardFooterCompleted]}>
                  {isCompleted ? (
                    <ChampBadge
                      label={isHindi ? '🏆 पूरा सीखा' : '🏆 Worksheet Mastered'}
                      variant="success"
                      size="sm"
                    />
                  ) : isStarted ? (
                    <ChampBadge
                      label={isHindi ? `जारी रखें (Q${progress.lastQuestionIndex + 1})` : `Resume (Q${progress.lastQuestionIndex + 1})`}
                      variant="gold"
                      size="sm"
                    />
                  ) : (
                    <ChampBadge
                      label={isHindi ? '10 प्रश्न' : '10 Questions'}
                      variant="neutral"
                      size="sm"
                    />
                  )}
                  <View style={styles.playActionRow}>
                    <Text style={[styles.playActionText, isCompleted && styles.playActionTextCompleted]}>
                      {isCompleted ? (isHindi ? 'दोबारा अभ्यास 🔁' : 'Practice Again 🔁') : isStarted ? (isHindi ? 'जारी रखें / टॉपिक' : 'Resume / Choose Topic') : (isHindi ? 'टॉपिक चुनें' : 'Choose Topic')}
                    </Text>
                    <Text style={[styles.arrowIcon, isCompleted && styles.arrowIconCompleted]}>
                      {isCompleted ? '↻' : '→'}
                    </Text>
                  </View>
                </View>
              </ChampCard>
            );
          })}
        </View>
      </ScrollView>

      {/* Topic / Concept Selection Modal */}
      {selectedChapterForTopic && (
        <TopicSelectionModal
          visible={!!selectedChapterForTopic}
          onClose={() => setSelectedChapterForTopic(null)}
          grade={grade}
          subject={selectedSubject}
          chapterTitle={selectedChapterForTopic.title}
          chapterIcon={selectedChapterForTopic.icon}
          questions={generateQuestionsForSession(grade, selectedSubject, selectedChapterForTopic.title)}
          savedProgress={getChapterProgress(grade, selectedSubject, selectedChapterForTopic.title)}
          onStartAtQuestion={(startIndex, targetChapter) => {
            const finalChapter = targetChapter || selectedChapterForTopic.title;
            onSelectChapter(selectedSubject, finalChapter, startIndex);
          }}
        />
      )}
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
    borderWidth: 1.5,
    borderColor: COLORS.border,
  },
  chapterCardCompleted: {
    backgroundColor: '#DCFCE7',
    borderColor: '#10B981',
    borderWidth: 2,
    borderLeftWidth: 6,
    borderLeftColor: '#059669',
  },
  completedHeaderBanner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.sm,
    paddingBottom: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#BBF7D0',
  },
  completedTag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#DCFCE7',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: BORDER_RADIUS.round,
    borderWidth: 1,
    borderColor: '#86EFAC',
  },
  completedTagEmoji: {
    fontSize: 12,
  },
  completedTagText: {
    fontSize: 11,
    fontWeight: '900',
    color: '#15803D',
    letterSpacing: 0.5,
  },
  completedScoreText: {
    fontSize: 12,
    fontWeight: '800',
    color: '#166534',
  },
  numberBadgeCompleted: {
    backgroundColor: '#10B981',
  },
  numberTextCompleted: {
    color: COLORS.white,
    fontSize: 15,
    fontWeight: '900',
  },
  iconCircleCompleted: {
    backgroundColor: '#DCFCE7',
    borderWidth: 1.5,
    borderColor: '#86EFAC',
  },
  chapterTitleCompleted: {
    color: '#064E3B',
  },
  cardFooterCompleted: {
    borderTopColor: '#BBF7D0',
  },
  playActionTextCompleted: {
    color: '#059669',
    fontWeight: '800',
  },
  arrowIconCompleted: {
    color: '#059669',
    fontSize: 16,
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
  skillBannerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FEF3C7',
    borderWidth: 1.5,
    borderColor: '#F59E0B',
    borderRadius: 20,
    padding: 14,
    gap: 12,
    marginBottom: 16,
    ...SHADOWS.small,
  },
  skillBannerIconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  skillBannerTag: {
    alignSelf: 'flex-start',
    backgroundColor: '#F59E0B',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
    marginBottom: 4,
  },
  skillBannerTagText: {
    fontSize: 9,
    fontWeight: '900',
    color: '#FFFFFF',
    letterSpacing: 0.5,
  },
  skillBannerTitle: {
    fontSize: 14,
    fontWeight: '900',
    color: '#92400E',
    marginBottom: 2,
  },
  skillBannerSub: {
    fontSize: 11,
    fontWeight: '600',
    color: '#B45309',
    lineHeight: 15,
  },
  skillBannerArrow: {
    fontSize: 18,
    fontWeight: '900',
    color: '#D97706',
  },
});
