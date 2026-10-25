import React, { useState, useEffect, useMemo } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import { COLORS, SPACING, BORDER_RADIUS, SHADOWS } from '../../constants/theme';
import { ChampBadge } from '../common/ChampBadge';
import { ChampCard } from '../common/ChampCard';
import { ChapterProgressItem, Grade, Question, Subject, ChapterLesson } from '../../types';
import {
  cleanBilingualForEnglish,
  cleanBilingualForHindi,
  getChapterTitle,
  getChapterSummary,
} from '../../utils/language';
import { useUserStore } from '../../store/useUserStore';
import { triggerHaptic } from '../../utils/haptics';
import { getChaptersForGradeSubject } from '../../data/chaptersData';
import { generateQuestionsForSession } from '../../data/questionGenerator';
import { CONCEPT_LABS_BY_GRADE, getGradeGroupKey, ConceptLabItem } from '../../data/conceptLabsRegistry';
import { CONCEPT_GAMES_BY_SUBJECT, ConceptGameItem } from '../../data/conceptGamesRegistry';
import { KidsArcadeGameType } from '../conceptGames/KidsConceptArcadeModal';
import { LKG_ENGLISH_SKILLS, LKGSkillItem } from '../../data/curriculum/lkgEnglishSkillDirectory';
import { LKG_MATHS_SKILLS, LKGMathsSkillItem } from '../../data/curriculum/lkgMathsSkillDirectory';
import { UKG_MATHS_SKILLS, UKGMathsSkillItem } from '../../data/curriculum/ukgMathsSkillDirectory';
import { UKG_ENGLISH_SKILLS, UKGSkillItem } from '../../data/curriculum/ukgEnglishSkillDirectory';
import { CLASS_1_ENGLISH_SKILLS, Class1EnglishSkillItem } from '../../data/curriculum/class1EnglishSkillDirectory';

export interface ChapterTopicItem {
  concept: string;
  firstQuestionIndex: number;
  questionCount: number;
  difficulty: 'easy' | 'medium' | 'hard';
  visualEmoji?: string;
  points: number;
}

interface TopicSelectionModalProps {
  visible: boolean;
  onClose: () => void;
  grade: Grade;
  subject: Subject;
  chapterTitle?: string;
  chapterIcon?: string;
  questions?: Question[];
  savedProgress?: ChapterProgressItem;
  onStartAtQuestion: (startIndex: number, targetChapterTitle?: string) => void;
  onOpenConceptLab?: (labId: string) => void;
  onOpenArcadeGame?: (gameType: KidsArcadeGameType | string, chapterTitle?: string, gameTitle?: string) => void;
  initialMode?: 'topics' | 'labs' | 'games' | 'questions';
}

export const TopicSelectionModal: React.FC<TopicSelectionModalProps> = ({
  visible,
  onClose,
  grade,
  subject,
  chapterTitle,
  chapterIcon = '📖',
  questions,
  savedProgress,
  onStartAtQuestion,
  onOpenConceptLab,
  onOpenArcadeGame,
  initialMode = 'topics',
}) => {
  const { profile, getChapterProgress } = useUserStore();
  const isHindi = subject === 'hindi' || (subject !== 'english' && profile.preferredLanguage === 'hi');
  const isLkgEnglish = grade === 'LKG' && subject === 'english';
  const isLkgMaths = grade === 'LKG' && subject === 'maths';
  const isUkgEnglish = grade === 'UKG' && subject === 'english';
  const isUkgMaths = grade === 'UKG' && subject === 'maths';
  const isClass1English = grade === 1 && subject === 'english';

  const allChapters = useMemo(
    () => getChaptersForGradeSubject(grade, subject),
    [grade, subject]
  );

  const [activeChapterTitle, setActiveChapterTitle] = useState<string>(
    chapterTitle || (
      isLkgEnglish
        ? `${LKG_ENGLISH_SKILLS[0].code}: ${LKG_ENGLISH_SKILLS[0].title}`
        : isLkgMaths
        ? `${LKG_MATHS_SKILLS[0].code}: ${LKG_MATHS_SKILLS[0].title}`
        : isUkgEnglish
        ? `${UKG_ENGLISH_SKILLS[0].code}: ${UKG_ENGLISH_SKILLS[0].title}`
        : isUkgMaths
        ? `${UKG_MATHS_SKILLS[0].code}: ${UKG_MATHS_SKILLS[0].title}`
        : isClass1English
        ? `${CLASS_1_ENGLISH_SKILLS[0].code}: ${CLASS_1_ENGLISH_SKILLS[0].title}`
        : allChapters[0]?.title || ''
    )
  );

  // For LKG English: toggle between 78 Skill skills and 30 NCERT lessons
  const [englishCatalogMode, setEnglishCatalogMode] = useState<'skills' | 'ncert'>('skills');
  const [skillAreaFilter, setSkillAreaFilter] = useState<
    'all' | 'Reading foundations' | 'Reading strategies' | 'Vocabulary'
  >('all');

  // For LKG Maths: toggle between 55 Skill skills and 30 NCERT lessons
  const [mathsCatalogMode, setMathsCatalogMode] = useState<'skills' | 'ncert'>('skills');
  const [mathsAreaFilter, setMathsAreaFilter] = useState<
    'all' | 'Geometry & Shapes' | 'Counting & Numbers' | 'Comparing & Positions' | 'Classify & Patterns' | 'Measurement & Money'
  >('all');

  // For UKG English: toggle between 131 Skill skills and 30 NCERT lessons
  const [ukgEnglishCatalogMode, setUkgEnglishCatalogMode] = useState<'skills' | 'ncert'>('skills');
  const [ukgSkillAreaFilter, setUkgSkillAreaFilter] = useState<
    'all' | 'Reading foundations' | 'Reading strategies' | 'Vocabulary' | 'Grammar and mechanics'
  >('all');

  // For Class 1 English: toggle between 169 Skill skills and 30 NCERT lessons
  const [class1EnglishCatalogMode, setClass1EnglishCatalogMode] = useState<'skills' | 'ncert'>('skills');
  const [class1SkillAreaFilter, setClass1SkillAreaFilter] = useState<
    'all' | 'Reading foundations' | 'Reading strategies' | 'Vocabulary' | 'Grammar and mechanics'
  >('all');

  // For UKG Maths: toggle between 144 Skill skills and 30 NCERT lessons
  const [ukgMathsCatalogMode, setUkgMathsCatalogMode] = useState<'skills' | 'ncert'>('skills');
  const [ukgMathsAreaFilter, setUkgMathsAreaFilter] = useState<
    'all' | 'Counting & Numbers' | 'Addition & Subtraction' | 'Geometry & Shapes' | 'Comparing & Positions' | 'Classify & Patterns' | 'Data & Measurement'
  >('all');

  // Search query state for instant topic/skill lookup
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Tab switch between: 'topics' (worksheets), 'labs' (concept labs), 'games' (arcade), 'questions' (Q1-Q10 drill)
  const [activeTab, setActiveTab] = useState<'topics' | 'labs' | 'games' | 'questions'>(initialMode);

  const gradeGroup = getGradeGroupKey(grade);
  const subjectLabs: ConceptLabItem[] = useMemo(() => {
    const allLabs = CONCEPT_LABS_BY_GRADE[gradeGroup] || [];
    return allLabs.filter((l) => {
      if (l.subject !== subject) return false;
      if (grade === 'LKG') {
        if (l.grade === 'UKG' || l.id.startsWith('ukg_') || l.badge.includes('UKG')) return false;
      } else if (grade === 'UKG') {
        if (l.grade === 'LKG' || (l.id.startsWith('maths_lab_') && !l.id.startsWith('ukg_maths_lab_')) || (l.id.startsWith('maths_skill_lab_') && !l.id.startsWith('ukg_maths_')) || (l.id.startsWith('skill_lab_') && !l.id.startsWith('ukg_'))) return false;
      }
      return true;
    });
  }, [gradeGroup, grade, subject]);

  const subjectGames: ConceptGameItem[] = useMemo(() => {
    const list = CONCEPT_GAMES_BY_SUBJECT[subject] || [];
    return list.filter((game) => {
      if (grade === 'LKG') {
        if (game.grade === 'UKG' || game.grade === 1 || game.id.startsWith('game_ukg_') || game.id.startsWith('game_c1_') || game.badgeEn.includes('UKG') || game.badgeEn.includes('Class 1')) return false;
      } else if (grade === 'UKG') {
        if (game.grade === 'LKG' || game.grade === 1 || game.id.startsWith('game_c1_') || game.badgeEn.includes('Class 1') || (game.id.startsWith('game_math_ws_') && !game.id.startsWith('game_ukg_math_')) || (game.id.startsWith('game_maths_cat_') && !game.id.startsWith('game_ukg_math_')) || (game.id.startsWith('game_skill_') && !game.id.startsWith('game_ukg_'))) return false;
      } else if (grade === 1) {
        if (game.grade === 'LKG' || game.grade === 'UKG' || game.id.startsWith('game_skill_') || game.id.startsWith('game_ukg_') || game.badgeEn.includes('UKG') || game.badgeEn.includes('LKG')) return false;
      }
      return true;
    });
  }, [subject, grade]);

  const searchedGames: ConceptGameItem[] = useMemo(() => {
    if (!searchQuery.trim()) return subjectGames;
    const q = searchQuery.toLowerCase().trim();
    return subjectGames.filter((g) =>
      g.titleEn.toLowerCase().includes(q) ||
      g.titleHi.toLowerCase().includes(q) ||
      g.descEn.toLowerCase().includes(q) ||
      g.descHi.toLowerCase().includes(q) ||
      g.badgeEn.toLowerCase().includes(q) ||
      g.badgeHi.toLowerCase().includes(q) ||
      (g.chapterTitle && g.chapterTitle.toLowerCase().includes(q))
    );
  }, [subjectGames, searchQuery]);

  useEffect(() => {
    if (chapterTitle) {
      setActiveChapterTitle(chapterTitle);
      if (
        isLkgEnglish &&
        LKG_ENGLISH_SKILLS.some(
          (s) => `${s.code}: ${s.title}` === chapterTitle || s.title === chapterTitle
        )
      ) {
        setEnglishCatalogMode('skills');
      }
      if (
        isLkgMaths &&
        LKG_MATHS_SKILLS.some(
          (s) => `${s.code}: ${s.title}` === chapterTitle || s.title === chapterTitle
        )
      ) {
        setMathsCatalogMode('skills');
      }
      if (
        isUkgEnglish &&
        UKG_ENGLISH_SKILLS.some(
          (s) => `${s.code}: ${s.title}` === chapterTitle || s.title === chapterTitle
        )
      ) {
        setUkgEnglishCatalogMode('skills');
      }
      if (
        isUkgMaths &&
        UKG_MATHS_SKILLS.some(
          (s) => `${s.code}: ${s.title}` === chapterTitle || s.title === chapterTitle
        )
      ) {
        setUkgMathsCatalogMode('skills');
      }
    }
  }, [chapterTitle, isLkgEnglish, isLkgMaths, isUkgEnglish, isUkgMaths]);

  // Current active chapter details (supports both NCERT chapters & Skill skills)
  const selectedChapterObj: ChapterLesson = useMemo(() => {
    const found = allChapters.find((c) => c.title === activeChapterTitle);
    if (found) return found;

    if (isLkgEnglish) {
      const skillMatch = LKG_ENGLISH_SKILLS.find(
        (s) =>
          `${s.code}: ${s.title}` === activeChapterTitle ||
          s.title === activeChapterTitle ||
          s.id === activeChapterTitle
      );
      if (skillMatch) {
        return {
          id: skillMatch.id,
          number: parseInt(skillMatch.code.replace(/[^0-9]/g, '') || '1', 10),
          title: `${skillMatch.code}: ${skillMatch.title}`,
          titleHindi: `${skillMatch.code}: ${skillMatch.titleHindi}`,
          grade: 'LKG',
          subject: 'english',
          icon: skillMatch.icon,
          conceptSummary: `${skillMatch.area} • ${skillMatch.categoryTitle}`,
          conceptSummaryHindi: `${skillMatch.categoryTitle} (${skillMatch.area})`,
        };
      }
    }

    if (isLkgMaths) {
      const skillMatch = LKG_MATHS_SKILLS.find(
        (s) =>
          `${s.code}: ${s.title}` === activeChapterTitle ||
          s.title === activeChapterTitle ||
          s.id === activeChapterTitle
      );
      if (skillMatch) {
        return {
          id: skillMatch.id,
          number: parseInt(skillMatch.code.replace(/[^0-9]/g, '') || '1', 10),
          title: `${skillMatch.code}: ${skillMatch.title}`,
          titleHindi: `${skillMatch.code}: ${skillMatch.titleHindi}`,
          grade: 'LKG',
          subject: 'maths',
          icon: skillMatch.icon,
          conceptSummary: `${skillMatch.area} • ${skillMatch.categoryTitle}`,
          conceptSummaryHindi: `${skillMatch.categoryTitle} (${skillMatch.area})`,
        };
      }
    }

    if (isUkgEnglish) {
      const skillMatch = UKG_ENGLISH_SKILLS.find(
        (s) =>
          `${s.code}: ${s.title}` === activeChapterTitle ||
          s.title === activeChapterTitle ||
          s.id === activeChapterTitle
      );
      if (skillMatch) {
        return {
          id: skillMatch.id,
          number: parseInt(skillMatch.code.replace(/[^0-9]/g, '') || '1', 10),
          title: `${skillMatch.code}: ${skillMatch.title}`,
          titleHindi: `${skillMatch.code}: ${skillMatch.titleHindi}`,
          grade: 'UKG',
          subject: 'english',
          icon: skillMatch.icon,
          conceptSummary: `${skillMatch.area} • ${skillMatch.categoryTitle}`,
          conceptSummaryHindi: `${skillMatch.categoryTitle} (${skillMatch.area})`,
        };
      }
    }

    if (isClass1English) {
      const skillMatch = CLASS_1_ENGLISH_SKILLS.find(
        (s) =>
          `${s.code}: ${s.title}` === activeChapterTitle ||
          s.title === activeChapterTitle ||
          s.id === activeChapterTitle
      );
      if (skillMatch) {
        return {
          id: skillMatch.id,
          number: parseInt(skillMatch.code.replace(/[^0-9]/g, '') || '1', 10),
          title: `${skillMatch.code}: ${skillMatch.title}`,
          titleHindi: `${skillMatch.code}: ${skillMatch.titleHindi}`,
          grade: 1,
          subject: 'english',
          icon: skillMatch.icon,
          conceptSummary: `${skillMatch.area} • ${skillMatch.categoryTitle}`,
          conceptSummaryHindi: `${skillMatch.categoryTitle} (${skillMatch.area})`,
        };
      }
    }

    if (isUkgMaths) {
      const skillMatch = UKG_MATHS_SKILLS.find(
        (s) =>
          `${s.code}: ${s.title}` === activeChapterTitle ||
          s.title === activeChapterTitle ||
          s.id === activeChapterTitle
      );
      if (skillMatch) {
        return {
          id: skillMatch.id,
          number: parseInt(skillMatch.code.replace(/[^0-9]/g, '') || '1', 10),
          title: `${skillMatch.code}: ${skillMatch.title}`,
          titleHindi: `${skillMatch.code}: ${skillMatch.titleHindi}`,
          grade: 'UKG',
          subject: 'maths',
          icon: skillMatch.icon,
          conceptSummary: `${skillMatch.area} • ${skillMatch.categoryTitle}`,
          conceptSummaryHindi: `${skillMatch.categoryTitle} (${skillMatch.area})`,
        };
      }
    }

    return (
      allChapters[0] || {
        id: `default_${subject}`,
        number: 1,
        title: activeChapterTitle || `${subject} Lesson 1`,
        grade,
        subject,
        icon: chapterIcon,
        conceptSummary: 'NCERT Curriculum Lesson',
      }
    );
  }, [allChapters, activeChapterTitle, grade, subject, chapterIcon, isLkgEnglish, isLkgMaths, isUkgEnglish, isUkgMaths, isClass1English]);

  // Current active questions
  const activeQuestions: Question[] = useMemo(() => {
    if (activeChapterTitle === chapterTitle && questions && questions.length > 0) {
      return questions;
    }
    return generateQuestionsForSession(grade, subject, activeChapterTitle);
  }, [activeChapterTitle, chapterTitle, questions, grade, subject]);

  // Current chapter progress
  const activeProgress: ChapterProgressItem | undefined = useMemo(() => {
    if (activeChapterTitle === chapterTitle && savedProgress) {
      return savedProgress;
    }
    return getChapterProgress(grade, subject, activeChapterTitle);
  }, [activeChapterTitle, chapterTitle, savedProgress, getChapterProgress, grade, subject]);

  // Total completed worksheets in this subject (NCERT)
  const completedChaptersCount = useMemo(() => {
    return allChapters.filter((c) => {
      const p = getChapterProgress(grade, subject, c.title);
      return p?.isCompleted === true;
    }).length;
  }, [allChapters, grade, subject, getChapterProgress]);

  // Total completed Skill skills (English)
  const completedSkillsCount = useMemo(() => {
    if (!isLkgEnglish) return 0;
    return LKG_ENGLISH_SKILLS.filter((s) => {
      const p = getChapterProgress(grade, subject, `${s.code}: ${s.title}`);
      return p?.isCompleted === true;
    }).length;
  }, [isLkgEnglish, grade, subject, getChapterProgress]);

  // Filtered list of Skill skills by area (English)
  const filteredSkills = useMemo(() => {
    if (!isLkgEnglish) return [];
    if (skillAreaFilter === 'all') return LKG_ENGLISH_SKILLS;
    return LKG_ENGLISH_SKILLS.filter((s) => s.area === skillAreaFilter);
  }, [isLkgEnglish, skillAreaFilter]);

  const foundationsCount = useMemo(() => LKG_ENGLISH_SKILLS.filter(s => s.area === 'Reading foundations').length, []);
  const strategiesCount = useMemo(() => LKG_ENGLISH_SKILLS.filter(s => s.area === 'Reading strategies').length, []);
  const vocabCount = useMemo(() => LKG_ENGLISH_SKILLS.filter(s => s.area === 'Vocabulary').length, []);

  // Total completed Skill skills (Maths)
  const completedMathsSkillsCount = useMemo(() => {
    if (!isLkgMaths) return 0;
    return LKG_MATHS_SKILLS.filter((s) => {
      const p = getChapterProgress(grade, subject, `${s.code}: ${s.title}`);
      return p?.isCompleted === true;
    }).length;
  }, [isLkgMaths, grade, subject, getChapterProgress]);

  // Filtered list of Skill skills by area (Maths)
  const filteredMathsSkills = useMemo(() => {
    if (!isLkgMaths) return [];
    if (mathsAreaFilter === 'all') return LKG_MATHS_SKILLS;
    return LKG_MATHS_SKILLS.filter((s) => s.area === mathsAreaFilter);
  }, [isLkgMaths, mathsAreaFilter]);

  const mathsShapesCount = useMemo(() => LKG_MATHS_SKILLS.filter(s => s.area === 'Geometry & Shapes').length, []);
  const mathsCountingCount = useMemo(() => LKG_MATHS_SKILLS.filter(s => s.area === 'Counting & Numbers').length, []);
  const mathsComparingCount = useMemo(() => LKG_MATHS_SKILLS.filter(s => s.area === 'Comparing & Positions').length, []);
  const mathsClassifyCount = useMemo(() => LKG_MATHS_SKILLS.filter(s => s.area === 'Classify & Patterns').length, []);
  const mathsMeasureCount = useMemo(() => LKG_MATHS_SKILLS.filter(s => s.area === 'Measurement & Money').length, []);

  // Total completed Skill skills (UKG English)
  const completedUkgSkillsCount = useMemo(() => {
    if (!isUkgEnglish) return 0;
    return UKG_ENGLISH_SKILLS.filter((s) => {
      const p = getChapterProgress(grade, subject, `${s.code}: ${s.title}`);
      return p?.isCompleted === true;
    }).length;
  }, [isUkgEnglish, grade, subject, getChapterProgress]);

  // Filtered list of Skill skills by area (UKG English)
  const filteredUkgSkills = useMemo(() => {
    if (!isUkgEnglish) return [];
    if (ukgSkillAreaFilter === 'all') return UKG_ENGLISH_SKILLS;
    return UKG_ENGLISH_SKILLS.filter((s) => s.area === ukgSkillAreaFilter);
  }, [isUkgEnglish, ukgSkillAreaFilter]);

  const ukgFoundationsCount = useMemo(() => UKG_ENGLISH_SKILLS.filter(s => s.area === 'Reading foundations').length, []);
  const ukgStrategiesCount = useMemo(() => UKG_ENGLISH_SKILLS.filter(s => s.area === 'Reading strategies').length, []);
  const ukgVocabCount = useMemo(() => UKG_ENGLISH_SKILLS.filter(s => s.area === 'Vocabulary').length, []);
  const ukgGrammarCount = useMemo(() => UKG_ENGLISH_SKILLS.filter(s => s.area === 'Grammar and mechanics').length, []);

  // Total completed Skill skills (UKG Maths)
  const completedUkgMathsSkillsCount = useMemo(() => {
    if (!isUkgMaths) return 0;
    return UKG_MATHS_SKILLS.filter((s) => {
      const p = getChapterProgress(grade, subject, `${s.code}: ${s.title}`);
      return p?.isCompleted === true;
    }).length;
  }, [isUkgMaths, grade, subject, getChapterProgress]);

  // Filtered list of Skill skills by area (UKG Maths)
  const filteredUkgMathsSkills = useMemo(() => {
    if (!isUkgMaths) return [];
    if (ukgMathsAreaFilter === 'all') return UKG_MATHS_SKILLS;
    return UKG_MATHS_SKILLS.filter((s) => s.area === ukgMathsAreaFilter);
  }, [isUkgMaths, ukgMathsAreaFilter]);

  const ukgMathsCountingCount = useMemo(() => UKG_MATHS_SKILLS.filter(s => s.area === 'Counting & Numbers').length, []);
  const ukgMathsAddSubCount = useMemo(() => UKG_MATHS_SKILLS.filter(s => s.area === 'Addition & Subtraction').length, []);
  const ukgMathsShapesCount = useMemo(() => UKG_MATHS_SKILLS.filter(s => s.area === 'Geometry & Shapes').length, []);
  const ukgMathsComparingCount = useMemo(() => UKG_MATHS_SKILLS.filter(s => s.area === 'Comparing & Positions').length, []);
  const ukgMathsClassifyCount = useMemo(() => UKG_MATHS_SKILLS.filter(s => s.area === 'Classify & Patterns').length, []);
  const ukgMathsDataMeasureCount = useMemo(() => UKG_MATHS_SKILLS.filter(s => s.area === 'Data & Measurement').length, []);

  // Total completed Skill skills (Class 1 English)
  const completedClass1SkillsCount = useMemo(() => {
    if (!isClass1English) return 0;
    return CLASS_1_ENGLISH_SKILLS.filter((s) => {
      const p = getChapterProgress(grade, subject, `${s.code}: ${s.title}`);
      return p?.isCompleted === true;
    }).length;
  }, [isClass1English, grade, subject, getChapterProgress]);

  // Filtered list of Skill skills by area (Class 1 English)
  const filteredClass1Skills = useMemo(() => {
    if (!isClass1English) return [];
    if (class1SkillAreaFilter === 'all') return CLASS_1_ENGLISH_SKILLS;
    return CLASS_1_ENGLISH_SKILLS.filter((s) => s.area === class1SkillAreaFilter);
  }, [isClass1English, class1SkillAreaFilter]);

  const c1FoundationsCount = useMemo(() => CLASS_1_ENGLISH_SKILLS.filter(s => s.area === 'Reading foundations').length, []);
  const c1StrategiesCount = useMemo(() => CLASS_1_ENGLISH_SKILLS.filter(s => s.area === 'Reading strategies').length, []);
  const c1VocabCount = useMemo(() => CLASS_1_ENGLISH_SKILLS.filter(s => s.area === 'Vocabulary').length, []);
  const c1GrammarCount = useMemo(() => CLASS_1_ENGLISH_SKILLS.filter(s => s.area === 'Grammar and mechanics').length, []);

  // Search-filtered Skill Skills Lists
  const searchedSkills = useMemo(() => {
    if (!searchQuery.trim()) return filteredSkills;
    const q = searchQuery.toLowerCase().trim();
    return filteredSkills.filter((s) =>
      s.code.toLowerCase().includes(q) ||
      s.title.toLowerCase().includes(q) ||
      (s.titleHindi && s.titleHindi.toLowerCase().includes(q)) ||
      s.categoryTitle.toLowerCase().includes(q) ||
      s.area.toLowerCase().includes(q)
    );
  }, [filteredSkills, searchQuery]);

  const searchedMathsSkills = useMemo(() => {
    if (!searchQuery.trim()) return filteredMathsSkills;
    const q = searchQuery.toLowerCase().trim();
    return filteredMathsSkills.filter((s) =>
      s.code.toLowerCase().includes(q) ||
      s.title.toLowerCase().includes(q) ||
      (s.titleHindi && s.titleHindi.toLowerCase().includes(q)) ||
      s.categoryTitle.toLowerCase().includes(q) ||
      s.area.toLowerCase().includes(q)
    );
  }, [filteredMathsSkills, searchQuery]);

  const searchedUkgSkills = useMemo(() => {
    if (!searchQuery.trim()) return filteredUkgSkills;
    const q = searchQuery.toLowerCase().trim();
    return filteredUkgSkills.filter((s) =>
      s.code.toLowerCase().includes(q) ||
      s.title.toLowerCase().includes(q) ||
      (s.titleHindi && s.titleHindi.toLowerCase().includes(q)) ||
      s.categoryTitle.toLowerCase().includes(q) ||
      s.area.toLowerCase().includes(q)
    );
  }, [filteredUkgSkills, searchQuery]);

  const searchedClass1Skills = useMemo(() => {
    if (!searchQuery.trim()) return filteredClass1Skills;
    const q = searchQuery.toLowerCase().trim();
    return filteredClass1Skills.filter((s) =>
      s.code.toLowerCase().includes(q) ||
      s.title.toLowerCase().includes(q) ||
      (s.titleHindi && s.titleHindi.toLowerCase().includes(q)) ||
      s.categoryTitle.toLowerCase().includes(q) ||
      s.area.toLowerCase().includes(q)
    );
  }, [filteredClass1Skills, searchQuery]);

  const searchedUkgMathsSkills = useMemo(() => {
    if (!searchQuery.trim()) return filteredUkgMathsSkills;
    const q = searchQuery.toLowerCase().trim();
    return filteredUkgMathsSkills.filter((s) =>
      s.code.toLowerCase().includes(q) ||
      s.title.toLowerCase().includes(q) ||
      (s.titleHindi && s.titleHindi.toLowerCase().includes(q)) ||
      s.categoryTitle.toLowerCase().includes(q) ||
      s.area.toLowerCase().includes(q)
    );
  }, [filteredUkgMathsSkills, searchQuery]);

  const searchedAllChapters = useMemo(() => {
    if (!searchQuery.trim()) return allChapters;
    const q = searchQuery.toLowerCase().trim();
    return allChapters.filter((c) =>
      c.title.toLowerCase().includes(q) ||
      (c.titleHindi && c.titleHindi.toLowerCase().includes(q)) ||
      c.conceptSummary.toLowerCase().includes(q)
    );
  }, [allChapters, searchQuery]);

  // Next up chapter to recommend if any
  const nextUnfinishedChapter = useMemo(() => {
    return allChapters.find((c) => {
      const p = getChapterProgress(grade, subject, c.title);
      return !p?.isCompleted;
    });
  }, [allChapters, grade, subject, getChapterProgress]);

  // Next up Skill skill to recommend if any
  const nextUnfinishedSkill = useMemo(() => {
    if (!isLkgEnglish) return null;
    return LKG_ENGLISH_SKILLS.find((s) => {
      const p = getChapterProgress(grade, subject, `${s.code}: ${s.title}`);
      return !p?.isCompleted;
    });
  }, [isLkgEnglish, grade, subject, getChapterProgress]);

  const nextUnfinishedMathsSkill = useMemo(() => {
    if (!isLkgMaths) return null;
    return LKG_MATHS_SKILLS.find((s) => {
      const p = getChapterProgress(grade, subject, `${s.code}: ${s.title}`);
      return !p?.isCompleted;
    });
  }, [isLkgMaths, grade, subject, getChapterProgress]);

  const nextUnfinishedUkgSkill = useMemo(() => {
    if (!isUkgEnglish) return null;
    return UKG_ENGLISH_SKILLS.find((s) => {
      const p = getChapterProgress(grade, subject, `${s.code}: ${s.title}`);
      return !p?.isCompleted;
    });
  }, [isUkgEnglish, grade, subject, getChapterProgress]);

  const nextUnfinishedClass1Skill = useMemo(() => {
    if (!isClass1English) return null;
    return CLASS_1_ENGLISH_SKILLS.find((s) => {
      const p = getChapterProgress(grade, subject, `${s.code}: ${s.title}`);
      return !p?.isCompleted;
    });
  }, [isClass1English, grade, subject, getChapterProgress]);

  const nextUnfinishedUkgMathsSkill = useMemo(() => {
    if (!isUkgMaths) return null;
    return UKG_MATHS_SKILLS.find((s) => {
      const p = getChapterProgress(grade, subject, `${s.code}: ${s.title}`);
      return !p?.isCompleted;
    });
  }, [isUkgMaths, grade, subject, getChapterProgress]);

  // Extract micro-concepts for active questions
  const topics: ChapterTopicItem[] = useMemo(() => {
    const items: ChapterTopicItem[] = [];
    const seenConcepts = new Set<string>();

    activeQuestions.forEach((q, idx) => {
      const conceptKey = q.concept || `Topic ${idx + 1}`;
      if (!seenConcepts.has(conceptKey)) {
        seenConcepts.add(conceptKey);
        const count = activeQuestions.filter((item) => (item.concept || `Topic`) === conceptKey).length;
        items.push({
          concept: conceptKey,
          firstQuestionIndex: idx,
          questionCount: count,
          difficulty: q.difficulty || 'easy',
          visualEmoji: q.visualEmoji,
          points: q.points || 10,
        });
      }
    });
    return items;
  }, [activeQuestions]);

  const lastIndex = activeProgress?.lastQuestionIndex ?? 0;
  const hasResumeOption =
    activeProgress &&
    lastIndex > 0 &&
    lastIndex < activeQuestions.length &&
    !activeProgress.isCompleted;
  const resumeQuestion = activeQuestions[lastIndex];

  const handleStart = (idx: number, targetChapter?: string) => {
    triggerHaptic('medium');
    const chapterToRun = targetChapter || activeChapterTitle;
    onStartAtQuestion(idx, chapterToRun);
    onClose();
  };

  const handleSelectChapterForDrill = (ch: ChapterLesson) => {
    triggerHaptic('light');
    setActiveChapterTitle(ch.title);
    setActiveTab('questions');
  };

  const displayActiveTitle = useMemo(() => {
    if (isLkgEnglish) {
      const skillMatch = LKG_ENGLISH_SKILLS.find(
        (s) => `${s.code}: ${s.title}` === activeChapterTitle || s.title === activeChapterTitle
      );
      if (skillMatch) {
        return isHindi ? `${skillMatch.code}: ${skillMatch.titleHindi}` : `${skillMatch.code}: ${skillMatch.title}`;
      }
    }
    if (isLkgMaths) {
      const skillMatch = LKG_MATHS_SKILLS.find(
        (s) => `${s.code}: ${s.title}` === activeChapterTitle || s.title === activeChapterTitle
      );
      if (skillMatch) {
        return isHindi ? `${skillMatch.code}: ${skillMatch.titleHindi}` : `${skillMatch.code}: ${skillMatch.title}`;
      }
    }
    if (isUkgEnglish) {
      const skillMatch = UKG_ENGLISH_SKILLS.find(
        (s) => `${s.code}: ${s.title}` === activeChapterTitle || s.title === activeChapterTitle
      );
      if (skillMatch) {
        return isHindi ? `${skillMatch.code}: ${skillMatch.titleHindi}` : `${skillMatch.code}: ${skillMatch.title}`;
      }
    }
    if (isClass1English) {
      const skillMatch = CLASS_1_ENGLISH_SKILLS.find(
        (s) => `${s.code}: ${s.title}` === activeChapterTitle || s.title === activeChapterTitle
      );
      if (skillMatch) {
        return isHindi ? `${skillMatch.code}: ${skillMatch.titleHindi}` : `${skillMatch.code}: ${skillMatch.title}`;
      }
    }
    if (isUkgMaths) {
      const skillMatch = UKG_MATHS_SKILLS.find(
        (s) => `${s.code}: ${s.title}` === activeChapterTitle || s.title === activeChapterTitle
      );
      if (skillMatch) {
        return isHindi ? `${skillMatch.code}: ${skillMatch.titleHindi}` : `${skillMatch.code}: ${skillMatch.title}`;
      }
    }
    return getChapterTitle(selectedChapterObj, isHindi);
  }, [isLkgEnglish, isLkgMaths, isUkgEnglish, isUkgMaths, isClass1English, activeChapterTitle, selectedChapterObj, isHindi]);

  const isSkillCatalog =
    (isLkgEnglish && englishCatalogMode === 'skills') ||
    (isLkgMaths && mathsCatalogMode === 'skills') ||
    (isUkgEnglish && ukgEnglishCatalogMode === 'skills') ||
    (isUkgMaths && ukgMathsCatalogMode === 'skills') ||
    (isClass1English && class1EnglishCatalogMode === 'skills');
  const activeSkillsTotal = isClass1English ? 169 : isUkgMaths ? 144 : isUkgEnglish ? 131 : isLkgEnglish ? 78 : 55;
  const activeCompletedSkills = isClass1English
    ? completedClass1SkillsCount
    : isUkgMaths
    ? completedUkgMathsSkillsCount
    : isUkgEnglish
    ? completedUkgSkillsCount
    : isLkgEnglish
    ? completedSkillsCount
    : completedMathsSkillsCount;
  const skillCatalogTitle = isClass1English
    ? isHindi
      ? '169 अंग्रेजी कौशल वर्कशीट (A-PP)'
      : '169 Micro-Skill Worksheets (A-PP)'
    : isUkgMaths
    ? isHindi
      ? '144 सूक्ष्म कौशल वर्कशीट (A-S)'
      : '144 Micro-Skill Worksheets (A-S)'
    : isUkgEnglish
    ? isHindi
      ? '131 सूक्ष्म कौशल वर्कशीट (A-HH)'
      : '131 Micro-Skill Worksheets (A-HH)'
    : isLkgEnglish
    ? isHindi
      ? '78 सूक्ष्म कौशल वर्कशीट (A-X)'
      : '78 Micro-Skill Worksheets (A-X)'
    : isHindi
    ? '55 सूक्ष्म कौशल वर्कशीट (A-J)'
    : '55 Micro-Skill Worksheets (A-J)';

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          {/* Top Modal Header */}
          <View style={styles.modalHeader}>
            <View style={styles.headerLeft}>
              <View style={styles.iconCircle}>
                <Text style={styles.chapterIcon}>{selectedChapterObj.icon || chapterIcon}</Text>
              </View>
              <View style={styles.titleCol}>
                <Text style={styles.chapterLabel}>
                  {typeof grade === 'number' ? `Class ${grade}` : grade} • {subject.toUpperCase()}
                </Text>
                <Text style={styles.chapterTitle} numberOfLines={1}>
                  {activeTab === 'topics'
                    ? isSkillCatalog
                      ? skillCatalogTitle
                      : isHindi
                      ? `सभी वर्कशीट (${allChapters.length})`
                      : `All Worksheets (${allChapters.length})`
                    : displayActiveTitle}
                </Text>
              </View>
            </View>
            <TouchableOpacity activeOpacity={0.7} onPress={onClose} style={styles.closeButton}>
              <Text style={styles.closeText}>✕</Text>
            </TouchableOpacity>
          </View>

          {/* Overall Subject Completion Progress Tracker Bar */}
          <View style={styles.subjectProgressBar}>
            <View style={styles.subjectProgressTextRow}>
              <Text style={styles.subjectProgressLabel}>
                🏆{' '}
                {isSkillCatalog
                  ? isHindi
                    ? 'कौशल प्रगति: '
                    : 'Skills Mastered: '
                  : isHindi
                  ? 'विषय प्रगति: '
                  : 'Overall Progress: '}
                <Text
                  style={{
                    fontWeight: '900',
                    color: isSkillCatalog ? '#B45309' : '#15803D',
                  }}
                >
                  {isSkillCatalog
                    ? `${activeCompletedSkills} / ${activeSkillsTotal} ${
                        isHindi ? 'कौशल पूरे हुए' : 'Skills Mastered'
                      }`
                    : `${completedChaptersCount} / ${allChapters.length} ${
                        isHindi ? 'वर्कशीट पूरी हुई' : 'Worksheets Mastered'
                      }`}
                </Text>
              </Text>
              <Text style={styles.subjectProgressPercent}>
                {isSkillCatalog
                  ? `${Math.round((activeCompletedSkills / activeSkillsTotal) * 100)}%`
                  : `${Math.round(
                      (completedChaptersCount / Math.max(1, allChapters.length)) * 100
                    )}%`}
              </Text>
            </View>
            <View style={styles.progressTrack}>
              <View
                style={[
                  styles.progressFill,
                  {
                    width: `${
                      isSkillCatalog
                        ? Math.round((activeCompletedSkills / activeSkillsTotal) * 100)
                        : Math.round(
                            (completedChaptersCount / Math.max(1, allChapters.length)) * 100
                          )
                    }%`,
                    backgroundColor: isSkillCatalog ? '#F59E0B' : '#10B981',
                  },
                ]}
              />
            </View>
          </View>

          {/* Interactive Navigation Tabs */}
          <View style={styles.tabsRow}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={[styles.tabButton, activeTab === 'topics' && styles.tabButtonActive]}
              onPress={() => {
                triggerHaptic('light');
                setActiveTab('topics');
              }}
            >
              <Text style={[styles.tabText, activeTab === 'topics' && styles.tabTextActive]}>
                {isSkillCatalog
                  ? isHindi
                    ? `⭐ कौशल (${activeSkillsTotal})`
                    : `⭐ Skills (${activeSkillsTotal})`
                  : `📚 ${isHindi ? `पाठ (${allChapters.length})` : `Topics (${allChapters.length})`}`}
              </Text>
            </TouchableOpacity>

            {subjectLabs.length > 0 && (
              <TouchableOpacity
                activeOpacity={0.8}
                style={[styles.tabButton, activeTab === 'labs' && styles.tabButtonActive]}
                onPress={() => {
                  triggerHaptic('light');
                  setActiveTab('labs');
                }}
              >
                <Text style={[styles.tabText, activeTab === 'labs' && styles.tabTextActive]}>
                  🔬 {isHindi ? `लैब (${subjectLabs.length})` : `Labs (${subjectLabs.length})`}
                </Text>
              </TouchableOpacity>
            )}

            {subjectGames.length > 0 && (
              <TouchableOpacity
                activeOpacity={0.8}
                style={[styles.tabButton, activeTab === 'games' && styles.tabButtonActive]}
                onPress={() => {
                  triggerHaptic('light');
                  setActiveTab('games');
                }}
              >
                <Text style={[styles.tabText, activeTab === 'games' && styles.tabTextActive]}>
                  🎮 {isHindi ? `खेल (${subjectGames.length})` : `Games (${subjectGames.length})`}
                </Text>
              </TouchableOpacity>
            )}

            <TouchableOpacity
              activeOpacity={0.8}
              style={[styles.tabButton, activeTab === 'questions' && styles.tabButtonActive]}
              onPress={() => {
                triggerHaptic('light');
                setActiveTab('questions');
              }}
            >
              <Text style={[styles.tabText, activeTab === 'questions' && styles.tabTextActive]}>
                🎯 {isHindi ? 'अभ्यास' : 'Drill'}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Scrollable Content */}
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollBody}
          >
            {/* ============================================================== */}
            {/* TAB 1: ALL WORKSHEETS / TOPICS LIST                            */}
            {/* ============================================================== */}
            {activeTab === 'topics' && (
              <View style={styles.tabContentContainer}>
                {/* Universal Instant Search Bar */}
                <View style={styles.searchBarWrapper}>
                  <Text style={styles.searchBarIcon}>🔍</Text>
                  <TextInput
                    style={styles.searchBarInput}
                    placeholder={
                      isHindi
                        ? "कौशल या विषय खोजें... (उदा. Counting, Shapes, Phonics)"
                        : "Search skills or topics... (e.g. Counting, Shapes, Phonics)"
                    }
                    placeholderTextColor="#94A3B8"
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                    clearButtonMode="while-editing"
                    autoCorrect={false}
                  />
                  {searchQuery.length > 0 && (
                    <TouchableOpacity
                      onPress={() => setSearchQuery('')}
                      style={styles.searchBarClearBtn}
                      hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                    >
                      <Text style={styles.searchBarClearText}>✕</Text>
                    </TouchableOpacity>
                  )}
                </View>


                {/* Subject-Specific Labs & Games Shortcut Banner */}
                {(subjectLabs.length > 0 || subjectGames.length > 0) && (
                  <View style={styles.subjectSmartBar}>
                    {subjectLabs.length > 0 && (
                      <TouchableOpacity
                        style={styles.subjectSmartPill}
                        activeOpacity={0.8}
                        onPress={() => {
                          triggerHaptic('light');
                          setActiveTab('labs');
                        }}
                      >
                        <Text style={{ fontSize: 16 }}>🔬</Text>
                        <Text style={styles.subjectSmartText}>
                          {isHindi ? `लैब्स (${subjectLabs.length})` : `Labs (${subjectLabs.length})`}
                        </Text>
                        <Text style={styles.subjectSmartArrow}>→</Text>
                      </TouchableOpacity>
                    )}

                    {subjectGames.length > 0 && (
                      <TouchableOpacity
                        style={[styles.subjectSmartPill, { backgroundColor: '#FDF2F8', borderColor: '#FBCFE8' }]}
                        activeOpacity={0.8}
                        onPress={() => {
                          triggerHaptic('light');
                          setActiveTab('games');
                        }}
                      >
                        <Text style={{ fontSize: 16 }}>🎮</Text>
                        <Text style={[styles.subjectSmartText, { color: '#BE185D' }]}>
                          {isHindi ? `गेम्स (${subjectGames.length})` : `Games (${subjectGames.length})`}
                        </Text>
                        <Text style={[styles.subjectSmartArrow, { color: '#BE185D' }]}>→</Text>
                      </TouchableOpacity>
                    )}
                  </View>
                )}

                {/* LKG English Mode Switcher: 78 Skill Skills vs 30 NCERT Lessons */}
                {isLkgEnglish && (
                  <View style={styles.skillModeSwitcherContainer}>
                    <TouchableOpacity
                      activeOpacity={0.85}
                      style={[
                        styles.skillModeButton,
                        englishCatalogMode === 'skills' && styles.skillModeButtonActiveSkills,
                      ]}
                      onPress={() => {
                        triggerHaptic('light');
                        setEnglishCatalogMode('skills');
                      }}
                    >
                      <Text style={{ fontSize: 18 }}>⭐</Text>
                      <View style={{ flex: 1 }}>
                        <Text
                          style={[
                            styles.skillModeBtnTitle,
                            englishCatalogMode === 'skills' && styles.skillModeBtnTitleActiveSkills,
                          ]}
                        >
                          {isHindi ? '78 सूक्ष्म कौशल वर्कशीट' : '78 Micro-Skill Worksheets'}
                        </Text>
                        <Text style={styles.skillModeBtnSub}>
                          {isHindi ? 'A.1 से X.2 तक सूक्ष्म कौशल' : 'Granular A.1 to X.2 skills'}
                        </Text>
                      </View>
                      <View
                        style={[
                          styles.skillModeCountBadge,
                          englishCatalogMode === 'skills' && styles.skillModeCountBadgeActiveSkills,
                        ]}
                      >
                        <Text
                          style={[
                            styles.skillModeCountText,
                            englishCatalogMode === 'skills' && styles.skillModeCountTextActiveSkills,
                          ]}
                        >
                          78
                        </Text>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                      activeOpacity={0.85}
                      style={[
                        styles.skillModeButton,
                        englishCatalogMode === 'ncert' && styles.skillModeButtonActiveNcert,
                      ]}
                      onPress={() => {
                        triggerHaptic('light');
                        setEnglishCatalogMode('ncert');
                      }}
                    >
                      <Text style={{ fontSize: 18 }}>📚</Text>
                      <View style={{ flex: 1 }}>
                        <Text
                          style={[
                            styles.skillModeBtnTitle,
                            englishCatalogMode === 'ncert' && styles.skillModeBtnTitleActiveNcert,
                          ]}
                        >
                          {isHindi ? '30 NCERT संपूर्ण पाठ' : '30 NCERT Lessons'}
                        </Text>
                        <Text style={styles.skillModeBtnSub}>
                          {isHindi ? '10-प्रश्नों वाले संपूर्ण पाठ' : '10-question full lessons'}
                        </Text>
                      </View>
                      <View
                        style={[
                          styles.skillModeCountBadge,
                          englishCatalogMode === 'ncert' && styles.skillModeCountBadgeActiveNcert,
                        ]}
                      >
                        <Text
                          style={[
                            styles.skillModeCountText,
                            englishCatalogMode === 'ncert' && styles.skillModeCountTextActiveNcert,
                          ]}
                        >
                          30
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                )}

                {/* LKG Maths Mode Switcher: 55 Skill Skills vs 30 NCERT Lessons */}
                {isLkgMaths && (
                  <View style={styles.skillModeSwitcherContainer}>
                    <TouchableOpacity
                      activeOpacity={0.85}
                      style={[
                        styles.skillModeButton,
                        mathsCatalogMode === 'skills' && styles.skillModeButtonActiveSkills,
                      ]}
                      onPress={() => {
                        triggerHaptic('light');
                        setMathsCatalogMode('skills');
                      }}
                    >
                      <Text style={{ fontSize: 18 }}>⭐</Text>
                      <View style={{ flex: 1 }}>
                        <Text
                          style={[
                            styles.skillModeBtnTitle,
                            mathsCatalogMode === 'skills' && styles.skillModeBtnTitleActiveSkills,
                          ]}
                        >
                          {isHindi ? '55 सूक्ष्म कौशल वर्कशीट' : '55 Micro-Skill Worksheets'}
                        </Text>
                        <Text style={styles.skillModeBtnSub}>
                          {isHindi ? 'A.1 से J.2 तक सूक्ष्म कौशल' : 'Granular A.1 to J.2 skills'}
                        </Text>
                      </View>
                      <View
                        style={[
                          styles.skillModeCountBadge,
                          mathsCatalogMode === 'skills' && styles.skillModeCountBadgeActiveSkills,
                        ]}
                      >
                        <Text
                          style={[
                            styles.skillModeCountText,
                            mathsCatalogMode === 'skills' && styles.skillModeCountTextActiveSkills,
                          ]}
                        >
                          55
                        </Text>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                      activeOpacity={0.85}
                      style={[
                        styles.skillModeButton,
                        mathsCatalogMode === 'ncert' && styles.skillModeButtonActiveNcert,
                      ]}
                      onPress={() => {
                        triggerHaptic('light');
                        setMathsCatalogMode('ncert');
                      }}
                    >
                      <Text style={{ fontSize: 18 }}>📚</Text>
                      <View style={{ flex: 1 }}>
                        <Text
                          style={[
                            styles.skillModeBtnTitle,
                            mathsCatalogMode === 'ncert' && styles.skillModeBtnTitleActiveNcert,
                          ]}
                        >
                          {isHindi ? '30 NCERT संपूर्ण पाठ' : '30 NCERT Lessons'}
                        </Text>
                        <Text style={styles.skillModeBtnSub}>
                          {isHindi ? '10-प्रश्नों वाले संपूर्ण पाठ' : '10-question full lessons'}
                        </Text>
                      </View>
                      <View
                        style={[
                          styles.skillModeCountBadge,
                          mathsCatalogMode === 'ncert' && styles.skillModeCountBadgeActiveNcert,
                        ]}
                      >
                        <Text
                          style={[
                            styles.skillModeCountText,
                            mathsCatalogMode === 'ncert' && styles.skillModeCountTextActiveNcert,
                          ]}
                        >
                          30
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                )}

                {/* Class 1 English Mode Switcher: 169 Skills vs 30 NCERT Lessons */}
                {isClass1English && (
                  <View style={styles.skillModeSwitcherContainer}>
                    <TouchableOpacity
                      activeOpacity={0.85}
                      style={[
                        styles.skillModeButton,
                        class1EnglishCatalogMode === 'skills' && styles.skillModeButtonActiveSkills,
                      ]}
                      onPress={() => {
                        triggerHaptic('light');
                        setClass1EnglishCatalogMode('skills');
                      }}
                    >
                      <Text style={{ fontSize: 18 }}>⭐</Text>
                      <View style={{ flex: 1 }}>
                        <Text
                          style={[
                            styles.skillModeBtnTitle,
                            class1EnglishCatalogMode === 'skills' && styles.skillModeBtnTitleActiveSkills,
                          ]}
                        >
                          {isHindi ? '169 कौशल वर्कशीट' : '169 Skill Worksheets'}
                        </Text>
                        <Text style={styles.skillModeBtnSub}>
                          {isHindi ? 'कक्षा 1 अंग्रेजी (A-PP)' : 'Class 1 English (A-PP)'}
                        </Text>
                      </View>
                      <View
                        style={[
                          styles.skillModeCountBadge,
                          class1EnglishCatalogMode === 'skills' && styles.skillModeCountBadgeActiveSkills,
                        ]}
                      >
                        <Text
                          style={[
                            styles.skillModeCountText,
                            class1EnglishCatalogMode === 'skills' && styles.skillModeCountTextActiveSkills,
                          ]}
                        >
                          169
                        </Text>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                      activeOpacity={0.85}
                      style={[
                        styles.skillModeButton,
                        class1EnglishCatalogMode === 'ncert' && styles.skillModeButtonActiveNcert,
                      ]}
                      onPress={() => {
                        triggerHaptic('light');
                        setClass1EnglishCatalogMode('ncert');
                      }}
                    >
                      <Text style={{ fontSize: 18 }}>📖</Text>
                      <View style={{ flex: 1 }}>
                        <Text
                          style={[
                            styles.skillModeBtnTitle,
                            class1EnglishCatalogMode === 'ncert' && styles.skillModeBtnTitleActiveNcert,
                          ]}
                        >
                          {isHindi ? 'मृदंग पाठ' : 'Mridang Lessons'}
                        </Text>
                        <Text style={styles.skillModeBtnSub}>
                          {isHindi ? 'एनसीईआरटी पाठ्यपुस्तक' : 'NCERT Textbook'}
                        </Text>
                      </View>
                      <View
                        style={[
                          styles.skillModeCountBadge,
                          class1EnglishCatalogMode === 'ncert' && styles.skillModeCountBadgeActiveNcert,
                        ]}
                      >
                        <Text
                          style={[
                            styles.skillModeCountText,
                            class1EnglishCatalogMode === 'ncert' && styles.skillModeCountTextActiveNcert,
                          ]}
                        >
                          {allChapters.length}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                )}

                {/* UKG English Mode Switcher: 131 Skills vs 30 NCERT Lessons */}
                {isUkgEnglish && (
                  <View style={styles.skillModeSwitcherContainer}>
                    <TouchableOpacity
                      activeOpacity={0.85}
                      style={[
                        styles.skillModeButton,
                        ukgEnglishCatalogMode === 'skills' && styles.skillModeButtonActiveSkills,
                      ]}
                      onPress={() => {
                        triggerHaptic('light');
                        setUkgEnglishCatalogMode('skills');
                      }}
                    >
                      <Text style={{ fontSize: 18 }}>⭐</Text>
                      <View style={{ flex: 1 }}>
                        <Text
                          style={[
                            styles.skillModeBtnTitle,
                            ukgEnglishCatalogMode === 'skills' && styles.skillModeBtnTitleActiveSkills,
                          ]}
                        >
                          {isHindi ? '131 सूक्ष्म कौशल वर्कशीट' : '131 Micro-Skill Worksheets'}
                        </Text>
                        <Text style={styles.skillModeBtnSub}>
                          {isHindi ? 'A.1 से HH.3 तक सूक्ष्म कौशल' : 'Granular A.1 to HH.3 skills'}
                        </Text>
                      </View>
                      <View
                        style={[
                          styles.skillModeCountBadge,
                          ukgEnglishCatalogMode === 'skills' && styles.skillModeCountBadgeActiveSkills,
                        ]}
                      >
                        <Text
                          style={[
                            styles.skillModeCountText,
                            ukgEnglishCatalogMode === 'skills' && styles.skillModeCountTextActiveSkills,
                          ]}
                        >
                          131
                        </Text>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                      activeOpacity={0.85}
                      style={[
                        styles.skillModeButton,
                        ukgEnglishCatalogMode === 'ncert' && styles.skillModeButtonActiveNcert,
                      ]}
                      onPress={() => {
                        triggerHaptic('light');
                        setUkgEnglishCatalogMode('ncert');
                      }}
                    >
                      <Text style={{ fontSize: 18 }}>📚</Text>
                      <View style={{ flex: 1 }}>
                        <Text
                          style={[
                            styles.skillModeBtnTitle,
                            ukgEnglishCatalogMode === 'ncert' && styles.skillModeBtnTitleActiveNcert,
                          ]}
                        >
                          {isHindi ? '30 NCERT संपूर्ण पाठ' : '30 NCERT Lessons'}
                        </Text>
                        <Text style={styles.skillModeBtnSub}>
                          {isHindi ? '10-प्रश्नों वाले संपूर्ण पाठ' : '10-question full lessons'}
                        </Text>
                      </View>
                      <View
                        style={[
                          styles.skillModeCountBadge,
                          ukgEnglishCatalogMode === 'ncert' && styles.skillModeCountBadgeActiveNcert,
                        ]}
                      >
                        <Text
                          style={[
                            styles.skillModeCountText,
                            ukgEnglishCatalogMode === 'ncert' && styles.skillModeCountTextActiveNcert,
                          ]}
                        >
                          30
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                )}

                {/* UKG Maths Mode Switcher: 144 Skills vs 30 NCERT Lessons */}
                {isUkgMaths && (
                  <View style={styles.skillModeSwitcherContainer}>
                    <TouchableOpacity
                      activeOpacity={0.85}
                      style={[
                        styles.skillModeButton,
                        ukgMathsCatalogMode === 'skills' && styles.skillModeButtonActiveSkills,
                      ]}
                      onPress={() => {
                        triggerHaptic('light');
                        setUkgMathsCatalogMode('skills');
                      }}
                    >
                      <Text style={{ fontSize: 18 }}>⭐</Text>
                      <View style={{ flex: 1 }}>
                        <Text
                          style={[
                            styles.skillModeBtnTitle,
                            ukgMathsCatalogMode === 'skills' && styles.skillModeBtnTitleActiveSkills,
                          ]}
                        >
                          {isHindi ? '144 सूक्ष्म कौशल वर्कशीट' : '144 Micro-Skill Worksheets'}
                        </Text>
                        <Text style={styles.skillModeBtnSub}>
                          {isHindi ? 'A.1 से S.1 तक सूक्ष्म कौशल (19 श्रेणियां)' : 'Granular A.1 to S.1 skills (19 categories)'}
                        </Text>
                      </View>
                      <View
                        style={[
                          styles.skillModeCountBadge,
                          ukgMathsCatalogMode === 'skills' && styles.skillModeCountBadgeActiveSkills,
                        ]}
                      >
                        <Text
                          style={[
                            styles.skillModeCountText,
                            ukgMathsCatalogMode === 'skills' && styles.skillModeCountTextActiveSkills,
                          ]}
                        >
                          144
                        </Text>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                      activeOpacity={0.85}
                      style={[
                        styles.skillModeButton,
                        ukgMathsCatalogMode === 'ncert' && styles.skillModeButtonActiveNcert,
                      ]}
                      onPress={() => {
                        triggerHaptic('light');
                        setUkgMathsCatalogMode('ncert');
                      }}
                    >
                      <Text style={{ fontSize: 18 }}>📚</Text>
                      <View style={{ flex: 1 }}>
                        <Text
                          style={[
                            styles.skillModeBtnTitle,
                            ukgMathsCatalogMode === 'ncert' && styles.skillModeBtnTitleActiveNcert,
                          ]}
                        >
                          {isHindi ? '30 NCERT संपूर्ण पाठ' : '30 NCERT Lessons'}
                        </Text>
                        <Text style={styles.skillModeBtnSub}>
                          {isHindi ? '10-प्रश्नों वाले संपूर्ण पाठ' : '10-question full lessons'}
                        </Text>
                      </View>
                      <View
                        style={[
                          styles.skillModeCountBadge,
                          ukgMathsCatalogMode === 'ncert' && styles.skillModeCountBadgeActiveNcert,
                        ]}
                      >
                        <Text
                          style={[
                            styles.skillModeCountText,
                            ukgMathsCatalogMode === 'ncert' && styles.skillModeCountTextActiveNcert,
                          ]}
                        >
                          30
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                )}

                {/* 1. Quick Resume / Recommended Next Action Card */}
                {hasResumeOption ? (
                  <ChampCard style={styles.resumeHeroCard} shadow="medium">
                    <View style={styles.resumeHeaderRow}>
                      <View style={styles.resumeBadgePill}>
                        <Text style={styles.resumeBadgeText}>
                          {isHindi ? '▶️ पिछली प्रगति से जारी रखें' : '▶️ RESUME WHERE YOU LEFT OFF'}
                        </Text>
                      </View>
                      <ChampBadge
                        label={`Q${lastIndex + 1} / ${activeQuestions.length}`}
                        variant="primary"
                        size="sm"
                      />
                    </View>
                    <Text style={styles.resumeLessonTitle}>{displayActiveTitle}</Text>
                    <Text style={styles.resumeSubText}>
                      {isHindi
                        ? `आप प्रश्न ${lastIndex + 1} पर थे। यहीं से जारी रखें!`
                        : `You were at Question ${lastIndex + 1}. Jump right back in!`}
                    </Text>
                    <TouchableOpacity
                      activeOpacity={0.85}
                      style={styles.primaryResumeButton}
                      onPress={() => handleStart(lastIndex, activeChapterTitle)}
                    >
                      <Text style={styles.primaryResumeButtonText}>
                        {isHindi
                          ? `प्रश्न ${lastIndex + 1} से जारी रखें →`
                          : `Resume from Question ${lastIndex + 1} →`}
                      </Text>
                    </TouchableOpacity>
                  </ChampCard>
                ) : isLkgEnglish && englishCatalogMode === 'skills' && nextUnfinishedSkill ? (
                  <ChampCard style={styles.nextHeroCard} shadow="small">
                    <View style={styles.nextHeaderRow}>
                      <View style={styles.nextBadgePill}>
                        <Text style={styles.nextBadgeText}>
                          {isHindi ? '🚀 अगला कौशल सीखें' : '🚀 NEXT SKILL TO MASTER'}
                        </Text>
                      </View>
                      <ChampBadge
                        label={isHindi ? `${nextUnfinishedSkill.questionCount} प्रश्न` : `${nextUnfinishedSkill.questionCount} Questions`}
                        variant="gold"
                        size="sm"
                      />
                    </View>
                    <Text style={styles.nextLessonTitle}>
                      {nextUnfinishedSkill.code}: {nextUnfinishedSkill.title}
                    </Text>
                    <Text style={styles.nextLessonSub}>
                      {isHindi ? nextUnfinishedSkill.titleHindi : `${nextUnfinishedSkill.area} • ${nextUnfinishedSkill.categoryTitle}`}
                    </Text>
                    <TouchableOpacity
                      activeOpacity={0.85}
                      style={styles.nextLessonButton}
                      onPress={() => handleStart(0, `${nextUnfinishedSkill.code}: ${nextUnfinishedSkill.title}`)}
                    >
                      <Text style={styles.nextLessonButtonText}>
                        {isHindi ? 'यह कौशल शुरू करें ▶' : 'Start This Skill ▶'}
                      </Text>
                    </TouchableOpacity>
                  </ChampCard>
                ) : isLkgMaths && mathsCatalogMode === 'skills' && nextUnfinishedMathsSkill ? (
                  <ChampCard style={styles.nextHeroCard} shadow="small">
                    <View style={styles.nextHeaderRow}>
                      <View style={styles.nextBadgePill}>
                        <Text style={styles.nextBadgeText}>
                          {isHindi ? '🚀 अगला कौशल सीखें' : '🚀 NEXT SKILL TO MASTER'}
                        </Text>
                      </View>
                      <ChampBadge
                        label={isHindi ? `${nextUnfinishedMathsSkill.questionCount} प्रश्न` : `${nextUnfinishedMathsSkill.questionCount} Questions`}
                        variant="gold"
                        size="sm"
                      />
                    </View>
                    <Text style={styles.nextLessonTitle}>
                      {nextUnfinishedMathsSkill.code}: {nextUnfinishedMathsSkill.title}
                    </Text>
                    <Text style={styles.nextLessonSub}>
                      {isHindi ? nextUnfinishedMathsSkill.titleHindi : `${nextUnfinishedMathsSkill.area} • ${nextUnfinishedMathsSkill.categoryTitle}`}
                    </Text>
                    <TouchableOpacity
                      activeOpacity={0.85}
                      style={styles.nextLessonButton}
                      onPress={() => handleStart(0, `${nextUnfinishedMathsSkill.code}: ${nextUnfinishedMathsSkill.title}`)}
                    >
                      <Text style={styles.nextLessonButtonText}>
                        {isHindi ? 'यह कौशल शुरू करें ▶' : 'Start This Skill ▶'}
                      </Text>
                    </TouchableOpacity>
                  </ChampCard>
                ) : isClass1English && class1EnglishCatalogMode === 'skills'
                    ? isHindi
                      ? `कक्षा 1 अंग्रेजी कौशल प्रगति • ${completedClass1SkillsCount} / 169 पूर्ण`
                      : `Class 1 English Skills Progress • ${completedClass1SkillsCount} of 169 Mastered`
                    : isUkgEnglish && ukgEnglishCatalogMode === 'skills' && nextUnfinishedUkgSkill ? (
                  <ChampCard style={styles.nextHeroCard} shadow="small">
                    <View style={styles.nextHeaderRow}>
                      <View style={styles.nextBadgePill}>
                        <Text style={styles.nextBadgeText}>
                          {isHindi ? '🚀 अगला कौशल सीखें' : '🚀 NEXT SKILL TO MASTER'}
                        </Text>
                      </View>
                      <ChampBadge
                        label={isHindi ? `${nextUnfinishedUkgSkill.questionCount} प्रश्न` : `${nextUnfinishedUkgSkill.questionCount} Questions`}
                        variant="gold"
                        size="sm"
                      />
                    </View>
                    <Text style={styles.nextLessonTitle}>
                      {nextUnfinishedUkgSkill.code}: {nextUnfinishedUkgSkill.title}
                    </Text>
                    <Text style={styles.nextLessonSub}>
                      {isHindi ? nextUnfinishedUkgSkill.titleHindi : `${nextUnfinishedUkgSkill.area} • ${nextUnfinishedUkgSkill.categoryTitle}`}
                    </Text>
                    <TouchableOpacity
                      activeOpacity={0.85}
                      style={styles.nextLessonButton}
                      onPress={() => handleStart(0, `${nextUnfinishedUkgSkill.code}: ${nextUnfinishedUkgSkill.title}`)}
                    >
                      <Text style={styles.nextLessonButtonText}>
                        {isHindi ? 'यह कौशल शुरू करें ▶' : 'Start This Skill ▶'}
                      </Text>
                    </TouchableOpacity>
                  </ChampCard>
                ) : isClass1English && class1EnglishCatalogMode === 'skills' && nextUnfinishedClass1Skill ? (
                  <ChampCard style={styles.nextHeroCard} shadow="small">
                    <View style={styles.nextHeaderRow}>
                      <View style={styles.nextBadgePill}>
                        <Text style={styles.nextBadgeText}>
                          {isHindi ? 'अगला अभ्यास कौशल' : 'RECOMMENDED SKILL'}
                        </Text>
                      </View>
                      <ChampBadge
                        label={`Skill ${nextUnfinishedClass1Skill.code}`}
                        variant="gold"
                        size="sm"
                      />
                    </View>
                    <Text style={styles.nextLessonTitle}>
                      {nextUnfinishedClass1Skill.code}: {nextUnfinishedClass1Skill.title}
                    </Text>
                    <Text style={styles.nextLessonSub}>
                      {isHindi ? nextUnfinishedClass1Skill.titleHindi : `${nextUnfinishedClass1Skill.area} • ${nextUnfinishedClass1Skill.categoryTitle}`}
                    </Text>
                    <TouchableOpacity
                      activeOpacity={0.85}
                      style={styles.nextLessonButton}
                      onPress={() => handleStart(0, `${nextUnfinishedClass1Skill.code}: ${nextUnfinishedClass1Skill.title}`)}
                    >
                      <Text style={styles.nextLessonButtonText}>
                        {isHindi ? 'वर्कशीट शुरू करें ▶' : 'Start Worksheet ▶'}
                      </Text>
                    </TouchableOpacity>
                  </ChampCard>
                ) : isUkgMaths && ukgMathsCatalogMode === 'skills' && nextUnfinishedUkgMathsSkill ? (
                  <ChampCard style={styles.nextHeroCard} shadow="small">
                    <View style={styles.nextHeaderRow}>
                      <View style={styles.nextBadgePill}>
                        <Text style={styles.nextBadgeText}>
                          {isHindi ? '🚀 अगला गणित कौशल सीखें' : '🚀 NEXT MATHS SKILL TO MASTER'}
                        </Text>
                      </View>
                      <ChampBadge
                        label={isHindi ? `${nextUnfinishedUkgMathsSkill.questionCount} प्रश्न` : `${nextUnfinishedUkgMathsSkill.questionCount} Questions`}
                        variant="gold"
                        size="sm"
                      />
                    </View>
                    <Text style={styles.nextLessonTitle}>
                      {nextUnfinishedUkgMathsSkill.code}: {nextUnfinishedUkgMathsSkill.title}
                    </Text>
                    <Text style={styles.nextLessonSub}>
                      {isHindi ? nextUnfinishedUkgMathsSkill.titleHindi : `${nextUnfinishedUkgMathsSkill.area} • ${nextUnfinishedUkgMathsSkill.categoryTitle}`}
                    </Text>
                    <TouchableOpacity
                      activeOpacity={0.85}
                      style={styles.nextLessonButton}
                      onPress={() => handleStart(0, `${nextUnfinishedUkgMathsSkill.code}: ${nextUnfinishedUkgMathsSkill.title}`)}
                    >
                      <Text style={styles.nextLessonButtonText}>
                        {isHindi ? 'यह कौशल शुरू करें ▶' : 'Start This Skill ▶'}
                      </Text>
                    </TouchableOpacity>
                  </ChampCard>
                ) : nextUnfinishedChapter && (
                  <ChampCard style={styles.nextHeroCard} shadow="small">
                    <View style={styles.nextHeaderRow}>
                      <View style={styles.nextBadgePill}>
                        <Text style={styles.nextBadgeText}>
                          {isHindi ? '🚀 अगला पाठ शुरू करें' : '🚀 NEXT LESSON TO LEARN'}
                        </Text>
                      </View>
                      <ChampBadge
                        label={isHindi ? '10 प्रश्न' : '10 Questions'}
                        variant="gold"
                        size="sm"
                      />
                    </View>
                    <Text style={styles.nextLessonTitle}>
                      {getChapterTitle(nextUnfinishedChapter, isHindi)}
                    </Text>
                    <Text style={styles.nextLessonSub}>
                      {getChapterSummary(nextUnfinishedChapter, isHindi)}
                    </Text>
                    <TouchableOpacity
                      activeOpacity={0.85}
                      style={styles.nextLessonButton}
                      onPress={() => handleStart(0, nextUnfinishedChapter.title)}
                    >
                      <Text style={styles.nextLessonButtonText}>
                        {isHindi ? 'नया पाठ शुरू करें ▶' : 'Start This Lesson ▶'}
                      </Text>
                    </TouchableOpacity>
                  </ChampCard>
                )}

                {/* VIEW MODE 1: 78 Skill GRANULAR SKILLS (LKG ENGLISH) */}
                {isLkgEnglish && englishCatalogMode === 'skills' ? (
                  <>
                    {/* Area Filter Scrollbar */}
                    <View style={styles.skillAreaFilterContainer}>
                      <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.skillAreaFilterScroll}
                      >
                        <TouchableOpacity
                          activeOpacity={0.8}
                          style={[
                            styles.skillAreaFilterPill,
                            skillAreaFilter === 'all' && styles.skillAreaFilterPillActive,
                          ]}
                          onPress={() => {
                            triggerHaptic('light');
                            setSkillAreaFilter('all');
                          }}
                        >
                          <Text
                            style={[
                              styles.skillAreaFilterText,
                              skillAreaFilter === 'all' && styles.skillAreaFilterTextActive,
                            ]}
                          >
                            🌟 All Skills (78)
                          </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                          activeOpacity={0.8}
                          style={[
                            styles.skillAreaFilterPill,
                            skillAreaFilter === 'Reading foundations' && styles.skillAreaFilterPillActive,
                          ]}
                          onPress={() => {
                            triggerHaptic('light');
                            setSkillAreaFilter('Reading foundations');
                          }}
                        >
                          <Text
                            style={[
                              styles.skillAreaFilterText,
                              skillAreaFilter === 'Reading foundations' && styles.skillAreaFilterTextActive,
                            ]}
                          >
                            🔤 Foundations ({foundationsCount})
                          </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                          activeOpacity={0.8}
                          style={[
                            styles.skillAreaFilterPill,
                            skillAreaFilter === 'Reading strategies' && styles.skillAreaFilterPillActive,
                          ]}
                          onPress={() => {
                            triggerHaptic('light');
                            setSkillAreaFilter('Reading strategies');
                          }}
                        >
                          <Text
                            style={[
                              styles.skillAreaFilterText,
                              skillAreaFilter === 'Reading strategies' && styles.skillAreaFilterTextActive,
                            ]}
                          >
                            💡 Strategies ({strategiesCount})
                          </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                          activeOpacity={0.8}
                          style={[
                            styles.skillAreaFilterPill,
                            skillAreaFilter === 'Vocabulary' && styles.skillAreaFilterPillActive,
                          ]}
                          onPress={() => {
                            triggerHaptic('light');
                            setSkillAreaFilter('Vocabulary');
                          }}
                        >
                          <Text
                            style={[
                              styles.skillAreaFilterText,
                              skillAreaFilter === 'Vocabulary' && styles.skillAreaFilterTextActive,
                            ]}
                          >
                            🦁 Vocabulary ({vocabCount})
                          </Text>
                        </TouchableOpacity>
                      </ScrollView>
                    </View>

                    {/* Section Header */}
                    <View style={styles.sectionHeaderRow}>
                      <Text style={styles.sectionHeading}>
                        ⭐ {isHindi ? 'सूक्ष्म कौशल वर्कशीट:' : '78 Granular Skills (A to X):'}
                      </Text>
                      <Text style={styles.sectionSubHeading}>
                        {isHindi
                          ? `${filteredSkills.length} कौशल उपलब्ध • प्रत्येक में 4 केंद्रित प्रश्न`
                          : `${filteredSkills.length} skills showing • 4 curated bite-sized questions each`}
                      </Text>
                    </View>

                    {/* All Skill Skill Cards List */}
                    <View style={styles.skillSkillsList}>
                      {searchedSkills.map((skill) => {
                        const skillChapterTitle = `${skill.code}: ${skill.title}`;
                        const prog = getChapterProgress(grade, subject, skillChapterTitle);
                        const isFinished = prog?.isCompleted === true;
                        const isStarted = prog && prog.lastQuestionIndex > 0 && !isFinished;
                        const isCurrent = skillChapterTitle === activeChapterTitle;

                        return (
                          <TouchableOpacity
                            key={skill.id}
                            activeOpacity={0.88}
                            style={[
                              styles.skillSkillCard,
                              { backgroundColor: skill.color, borderColor: skill.borderColor },
                              isFinished && styles.skillSkillCardFinished,
                              isStarted && styles.skillSkillCardStarted,
                              isCurrent && !isFinished && styles.skillSkillCardCurrent,
                            ]}
                            onPress={() => {
                              triggerHaptic('light');
                              setActiveChapterTitle(skillChapterTitle);
                              setActiveTab('questions');
                            }}
                          >
                            {/* Finished Trophy Celebration Banner */}
                            {isFinished && (
                              <View style={styles.skillFinishedBanner}>
                                <View style={styles.skillFinishedTagPill}>
                                  <Text style={{ fontSize: 13 }}>🏆</Text>
                                  <Text style={styles.skillFinishedTagText}>
                                    {isHindi ? 'कौशल पूरा हुआ! MASTERED ✓' : 'SKILL MASTERED ✓'}
                                  </Text>
                                </View>
                                {prog?.scorePercentage !== undefined && (
                                  <Text style={styles.skillFinishedScore}>
                                    ⭐ {prog.scorePercentage}%
                                  </Text>
                                )}
                              </View>
                            )}

                            <View style={styles.skillCardMainRow}>
                              {/* Code Badge */}
                              <View
                                style={[
                                  styles.skillCodeBadge,
                                  isFinished && styles.skillCodeBadgeFinished,
                                  isStarted && styles.skillCodeBadgeStarted,
                                ]}
                              >
                                <Text
                                  style={[
                                    styles.skillCodeText,
                                    isFinished && styles.skillCodeTextFinished,
                                    isStarted && styles.skillCodeTextStarted,
                                  ]}
                                >
                                  {isFinished ? '✓' : skill.code}
                                </Text>
                              </View>

                              {/* Icon Circle */}
                              <View
                                style={[
                                  styles.skillIconCircle,
                                  isFinished && styles.skillIconCircleFinished,
                                ]}
                              >
                                <Text style={styles.skillIconText}>{skill.icon || '📖'}</Text>
                              </View>

                              {/* Titles & Category */}
                              <View style={styles.skillInfoCol}>
                                <View style={styles.skillCategoryTagRow}>
                                  <View style={styles.skillCategoryPill}>
                                    <Text style={styles.skillCategoryText} numberOfLines={1}>
                                      {skill.categoryTitle}
                                    </Text>
                                  </View>
                                  <Text style={styles.skillAreaDot}>•</Text>
                                  <Text style={styles.skillAreaLabel} numberOfLines={1}>
                                    {skill.area === 'Reading foundations'
                                      ? 'Foundations'
                                      : skill.area === 'Reading strategies'
                                      ? 'Strategies'
                                      : 'Vocabulary'}
                                  </Text>
                                </View>

                                <Text
                                  style={[
                                    styles.skillTitleText,
                                    isFinished && styles.skillTitleTextFinished,
                                  ]}
                                  numberOfLines={2}
                                >
                                  {skill.title}
                                </Text>
                                <Text
                                  style={[
                                    styles.skillSubTitleText,
                                    isFinished && styles.skillSubTitleTextFinished,
                                  ]}
                                  numberOfLines={1}
                                >
                                  {skill.titleHindi}
                                </Text>

                                {/* Status Meta */}
                                <View style={styles.chMetaRow}>
                                  {isFinished ? (
                                    <ChampBadge
                                      label={isHindi ? '✓ 100% पूरा' : '✓ Mastered'}
                                      variant="success"
                                      size="sm"
                                    />
                                  ) : isStarted ? (
                                    <ChampBadge
                                      label={isHindi ? `Q${prog.lastQuestionIndex + 1} से जारी` : `Resume Q${prog.lastQuestionIndex + 1}`}
                                      variant="gold"
                                      size="sm"
                                    />
                                  ) : (
                                    <ChampBadge
                                      label={`${skill.questionCount} Questions`}
                                      variant="neutral"
                                      size="sm"
                                    />
                                  )}
                                  <Text style={styles.drillTapHint}>
                                    {isHindi ? '• टैप करके 10 प्रश्न देखें ▾' : '• Tap for Q1-Q10 ▾'}
                                  </Text>
                                </View>
                              </View>

                              {/* Quick Action Button */}
                              <TouchableOpacity
                                activeOpacity={0.8}
                                style={[
                                  styles.chActionButton,
                                  isFinished && styles.chActionButtonFinished,
                                  isStarted && styles.chActionButtonStarted,
                                ]}
                                onPress={() => {
                                  const startIndex = isStarted ? prog.lastQuestionIndex : 0;
                                  handleStart(startIndex, skillChapterTitle);
                                }}
                              >
                                <Text
                                  style={[
                                    styles.chActionIcon,
                                    isFinished && styles.chActionIconFinished,
                                    isStarted && styles.chActionIconStarted,
                                  ]}
                                >
                                  {isFinished ? '🔁' : isStarted ? '▶' : '▶'}
                                </Text>
                                <Text
                                  style={[
                                    styles.chActionLabel,
                                    isFinished && styles.chActionLabelFinished,
                                    isStarted && styles.chActionLabelStarted,
                                  ]}
                                >
                                  {isFinished ? (isHindi ? 'दोबारा' : 'Replay') : isStarted ? (isHindi ? 'जारी' : 'Resume') : (isHindi ? 'शुरू' : 'Start')}
                                </Text>
                              </TouchableOpacity>
                            </View>
                          </TouchableOpacity>
                        );
                      })}
                    </View>
                  </>
                ) : isLkgMaths && mathsCatalogMode === 'skills' ? (
                  /* VIEW MODE: 55 Skill GRANULAR SKILLS (LKG MATHS) */
                  <>
                    {/* Area Filter Scrollbar */}
                    <View style={styles.skillAreaFilterContainer}>
                      <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.skillAreaFilterScroll}
                      >
                        <TouchableOpacity
                          activeOpacity={0.8}
                          style={[
                            styles.skillAreaFilterPill,
                            mathsAreaFilter === 'all' && styles.skillAreaFilterPillActive,
                          ]}
                          onPress={() => {
                            triggerHaptic('light');
                            setMathsAreaFilter('all');
                          }}
                        >
                          <Text
                            style={[
                              styles.skillAreaFilterText,
                              mathsAreaFilter === 'all' && styles.skillAreaFilterTextActive,
                            ]}
                          >
                            🌟 All Skills (55)
                          </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                          activeOpacity={0.8}
                          style={[
                            styles.skillAreaFilterPill,
                            mathsAreaFilter === 'Geometry & Shapes' && styles.skillAreaFilterPillActive,
                          ]}
                          onPress={() => {
                            triggerHaptic('light');
                            setMathsAreaFilter('Geometry & Shapes');
                          }}
                        >
                          <Text
                            style={[
                              styles.skillAreaFilterText,
                              mathsAreaFilter === 'Geometry & Shapes' && styles.skillAreaFilterTextActive,
                            ]}
                          >
                            📐 Shapes ({mathsShapesCount})
                          </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                          activeOpacity={0.8}
                          style={[
                            styles.skillAreaFilterPill,
                            mathsAreaFilter === 'Counting & Numbers' && styles.skillAreaFilterPillActive,
                          ]}
                          onPress={() => {
                            triggerHaptic('light');
                            setMathsAreaFilter('Counting & Numbers');
                          }}
                        >
                          <Text
                            style={[
                              styles.skillAreaFilterText,
                              mathsAreaFilter === 'Counting & Numbers' && styles.skillAreaFilterTextActive,
                            ]}
                          >
                            🔢 Counting ({mathsCountingCount})
                          </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                          activeOpacity={0.8}
                          style={[
                            styles.skillAreaFilterPill,
                            mathsAreaFilter === 'Comparing & Positions' && styles.skillAreaFilterPillActive,
                          ]}
                          onPress={() => {
                            triggerHaptic('light');
                            setMathsAreaFilter('Comparing & Positions');
                          }}
                        >
                          <Text
                            style={[
                              styles.skillAreaFilterText,
                              mathsAreaFilter === 'Comparing & Positions' && styles.skillAreaFilterTextActive,
                            ]}
                          >
                            ⚖️ Comparing ({mathsComparingCount})
                          </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                          activeOpacity={0.8}
                          style={[
                            styles.skillAreaFilterPill,
                            mathsAreaFilter === 'Classify & Patterns' && styles.skillAreaFilterPillActive,
                          ]}
                          onPress={() => {
                            triggerHaptic('light');
                            setMathsAreaFilter('Classify & Patterns');
                          }}
                        >
                          <Text
                            style={[
                              styles.skillAreaFilterText,
                              mathsAreaFilter === 'Classify & Patterns' && styles.skillAreaFilterTextActive,
                            ]}
                          >
                            🧩 Patterns ({mathsClassifyCount})
                          </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                          activeOpacity={0.8}
                          style={[
                            styles.skillAreaFilterPill,
                            mathsAreaFilter === 'Measurement & Money' && styles.skillAreaFilterPillActive,
                          ]}
                          onPress={() => {
                            triggerHaptic('light');
                            setMathsAreaFilter('Measurement & Money');
                          }}
                        >
                          <Text
                            style={[
                              styles.skillAreaFilterText,
                              mathsAreaFilter === 'Measurement & Money' && styles.skillAreaFilterTextActive,
                            ]}
                          >
                            📏 Size & Money ({mathsMeasureCount})
                          </Text>
                        </TouchableOpacity>
                      </ScrollView>
                    </View>

                    {/* Section Header */}
                    <View style={styles.sectionHeaderRow}>
                      <Text style={styles.sectionHeading}>
                        ⭐ {isHindi ? 'सूक्ष्म कौशल वर्कशीट:' : '55 Granular Skills (A to J):'}
                      </Text>
                      <Text style={styles.sectionSubHeading}>
                        {isHindi
                          ? `${filteredMathsSkills.length} कौशल उपलब्ध • प्रत्येक में 10 केंद्रित प्रश्न`
                          : `${filteredMathsSkills.length} skills showing • 10 curated questions each`}
                      </Text>
                    </View>

                    {/* All Maths Skill Cards List */}
                    <View style={styles.skillSkillsList}>
                      {searchedMathsSkills.map((skill) => {
                        const skillChapterTitle = `${skill.code}: ${skill.title}`;
                        const prog = getChapterProgress(grade, subject, skillChapterTitle);
                        const isFinished = prog?.isCompleted === true;
                        const isStarted = prog && prog.lastQuestionIndex > 0 && !isFinished;
                        const isCurrent = skillChapterTitle === activeChapterTitle;

                        return (
                          <TouchableOpacity
                            key={skill.id}
                            activeOpacity={0.88}
                            style={[
                              styles.skillSkillCard,
                              { backgroundColor: skill.color, borderColor: skill.borderColor },
                              isFinished && styles.skillSkillCardFinished,
                              isStarted && styles.skillSkillCardStarted,
                              isCurrent && !isFinished && styles.skillSkillCardCurrent,
                            ]}
                            onPress={() => {
                              triggerHaptic('light');
                              setActiveChapterTitle(skillChapterTitle);
                              setActiveTab('questions');
                            }}
                          >
                            {/* Finished Trophy Celebration Banner */}
                            {isFinished && (
                              <View style={styles.skillFinishedBanner}>
                                <View style={styles.skillFinishedTagPill}>
                                  <Text style={{ fontSize: 13 }}>🏆</Text>
                                  <Text style={styles.skillFinishedTagText}>
                                    {isHindi ? 'कौशल पूरा हुआ! MASTERED ✓' : 'SKILL MASTERED ✓'}
                                  </Text>
                                </View>
                                {prog?.scorePercentage !== undefined && (
                                  <Text style={styles.skillFinishedScore}>
                                    ⭐ {prog.scorePercentage}%
                                  </Text>
                                )}
                              </View>
                            )}

                            <View style={styles.skillCardMainRow}>
                              {/* Code Badge */}
                              <View
                                style={[
                                  styles.skillCodeBadge,
                                  isFinished && styles.skillCodeBadgeFinished,
                                  isStarted && styles.skillCodeBadgeStarted,
                                ]}
                              >
                                <Text
                                  style={[
                                    styles.skillCodeText,
                                    isFinished && styles.skillCodeTextFinished,
                                    isStarted && styles.skillCodeTextStarted,
                                  ]}
                                >
                                  {isFinished ? '✓' : skill.code}
                                </Text>
                              </View>

                              {/* Icon Circle */}
                              <View
                                style={[
                                  styles.skillIconCircle,
                                  isFinished && styles.skillIconCircleFinished,
                                ]}
                              >
                                <Text style={styles.skillIconText}>{skill.icon || '📐'}</Text>
                              </View>

                              {/* Titles & Category */}
                              <View style={styles.skillInfoCol}>
                                <View style={styles.skillCategoryTagRow}>
                                  <View style={styles.skillCategoryPill}>
                                    <Text style={styles.skillCategoryText} numberOfLines={1}>
                                      {skill.categoryTitle}
                                    </Text>
                                  </View>
                                  <Text style={styles.skillAreaDot}>•</Text>
                                  <Text style={styles.skillAreaLabel} numberOfLines={1}>
                                    {skill.area}
                                  </Text>
                                </View>

                                <Text
                                  style={[
                                    styles.skillTitleText,
                                    isFinished && styles.skillTitleTextFinished,
                                  ]}
                                  numberOfLines={2}
                                >
                                  {skill.title}
                                </Text>
                                <Text
                                  style={[
                                    styles.skillSubTitleText,
                                    isFinished && styles.skillSubTitleTextFinished,
                                  ]}
                                  numberOfLines={1}
                                >
                                  {skill.titleHindi}
                                </Text>

                                {/* Status Meta */}
                                <View style={styles.chMetaRow}>
                                  {isFinished ? (
                                    <ChampBadge
                                      label={isHindi ? '✓ 100% पूरा' : '✓ Mastered'}
                                      variant="success"
                                      size="sm"
                                    />
                                  ) : isStarted ? (
                                    <ChampBadge
                                      label={isHindi ? `Q${prog.lastQuestionIndex + 1} से जारी` : `Resume Q${prog.lastQuestionIndex + 1}`}
                                      variant="gold"
                                      size="sm"
                                    />
                                  ) : (
                                    <ChampBadge
                                      label={`${skill.questionCount} Questions`}
                                      variant="neutral"
                                      size="sm"
                                    />
                                  )}
                                  <Text style={styles.drillTapHint}>
                                    {isHindi ? '• टैप करके 10 प्रश्न देखें ▾' : '• Tap for Q1-Q10 ▾'}
                                  </Text>
                                </View>
                              </View>

                              {/* Quick Action Button */}
                              <TouchableOpacity
                                activeOpacity={0.8}
                                style={[
                                  styles.chActionButton,
                                  isFinished && styles.chActionButtonFinished,
                                  isStarted && styles.chActionButtonStarted,
                                ]}
                                onPress={() => {
                                  const startIndex = isStarted ? prog.lastQuestionIndex : 0;
                                  handleStart(startIndex, skillChapterTitle);
                                }}
                              >
                                <Text
                                  style={[
                                    styles.chActionIcon,
                                    isFinished && styles.chActionIconFinished,
                                    isStarted && styles.chActionIconStarted,
                                  ]}
                                >
                                  {isFinished ? '🔁' : isStarted ? '▶' : '▶'}
                                </Text>
                                <Text
                                  style={[
                                    styles.chActionLabel,
                                    isFinished && styles.chActionLabelFinished,
                                    isStarted && styles.chActionLabelStarted,
                                  ]}
                                >
                                  {isFinished ? (isHindi ? 'दोबारा' : 'Replay') : isStarted ? (isHindi ? 'जारी' : 'Resume') : (isHindi ? 'शुरू' : 'Start')}
                                </Text>
                              </TouchableOpacity>
                            </View>
                          </TouchableOpacity>
                        );
                      })}
                    </View>
                  </>
                ) : isUkgEnglish && ukgEnglishCatalogMode === 'skills' ? (
                  /* VIEW MODE: 131 Skill GRANULAR SKILLS (UKG ENGLISH) */
                  <>
                    {/* Area Filter Scrollbar */}
                    <View style={styles.skillAreaFilterContainer}>
                      <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.skillAreaFilterScroll}
                      >
                        <TouchableOpacity
                          activeOpacity={0.8}
                          style={[
                            styles.skillAreaFilterPill,
                            ukgSkillAreaFilter === 'all' && styles.skillAreaFilterPillActive,
                          ]}
                          onPress={() => {
                            triggerHaptic('light');
                            setUkgSkillAreaFilter('all');
                          }}
                        >
                          <Text
                            style={[
                              styles.skillAreaFilterText,
                              ukgSkillAreaFilter === 'all' && styles.skillAreaFilterTextActive,
                            ]}
                          >
                            🌟 All Skills (131)
                          </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                          activeOpacity={0.8}
                          style={[
                            styles.skillAreaFilterPill,
                            ukgSkillAreaFilter === 'Reading foundations' && styles.skillAreaFilterPillActive,
                          ]}
                          onPress={() => {
                            triggerHaptic('light');
                            setUkgSkillAreaFilter('Reading foundations');
                          }}
                        >
                          <Text
                            style={[
                              styles.skillAreaFilterText,
                              ukgSkillAreaFilter === 'Reading foundations' && styles.skillAreaFilterTextActive,
                            ]}
                          >
                            🔤 Foundations ({ukgFoundationsCount})
                          </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                          activeOpacity={0.8}
                          style={[
                            styles.skillAreaFilterPill,
                            ukgSkillAreaFilter === 'Reading strategies' && styles.skillAreaFilterPillActive,
                          ]}
                          onPress={() => {
                            triggerHaptic('light');
                            setUkgSkillAreaFilter('Reading strategies');
                          }}
                        >
                          <Text
                            style={[
                              styles.skillAreaFilterText,
                              ukgSkillAreaFilter === 'Reading strategies' && styles.skillAreaFilterTextActive,
                            ]}
                          >
                            💡 Strategies ({ukgStrategiesCount})
                          </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                          activeOpacity={0.8}
                          style={[
                            styles.skillAreaFilterPill,
                            ukgSkillAreaFilter === 'Vocabulary' && styles.skillAreaFilterPillActive,
                          ]}
                          onPress={() => {
                            triggerHaptic('light');
                            setUkgSkillAreaFilter('Vocabulary');
                          }}
                        >
                          <Text
                            style={[
                              styles.skillAreaFilterText,
                              ukgSkillAreaFilter === 'Vocabulary' && styles.skillAreaFilterTextActive,
                            ]}
                          >
                            🦁 Vocabulary ({ukgVocabCount})
                          </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                          activeOpacity={0.8}
                          style={[
                            styles.skillAreaFilterPill,
                            ukgSkillAreaFilter === 'Grammar and mechanics' && styles.skillAreaFilterPillActive,
                          ]}
                          onPress={() => {
                            triggerHaptic('light');
                            setUkgSkillAreaFilter('Grammar and mechanics');
                          }}
                        >
                          <Text
                            style={[
                              styles.skillAreaFilterText,
                              ukgSkillAreaFilter === 'Grammar and mechanics' && styles.skillAreaFilterTextActive,
                            ]}
                          >
                            ✍️ Grammar ({ukgGrammarCount})
                          </Text>
                        </TouchableOpacity>
                      </ScrollView>
                    </View>

                    {/* Section Header */}
                    <View style={styles.sectionHeaderRow}>
                      <Text style={styles.sectionHeading}>
                        ⭐ {isHindi ? '131 सूक्ष्म कौशल वर्कशीट (A से HH):' : '131 Granular Skills (A to HH):'}
                      </Text>
                      <Text style={styles.sectionSubHeading}>
                        {isHindi
                          ? `${filteredUkgSkills.length} कौशल उपलब्ध • प्रत्येक में 10 स्तरित प्रश्न`
                          : `${filteredUkgSkills.length} skills showing • 10 progressive questions each`}
                      </Text>
                    </View>

                    {/* All Skill Cards List */}
                    <View style={styles.skillSkillsList}>
                      {searchedUkgSkills.map((skill) => {
                        const skillChapterTitle = `${skill.code}: ${skill.title}`;
                        const prog = getChapterProgress(grade, subject, skillChapterTitle);
                        const isFinished = prog?.isCompleted === true;
                        const isStarted = prog && prog.lastQuestionIndex > 0 && !isFinished;
                        const isCurrent = skillChapterTitle === activeChapterTitle;

                        return (
                          <TouchableOpacity
                            key={skill.id}
                            activeOpacity={0.88}
                            style={[
                              styles.skillSkillCard,
                              { backgroundColor: skill.color, borderColor: skill.borderColor },
                              isFinished && styles.skillSkillCardFinished,
                              isStarted && styles.skillSkillCardStarted,
                              isCurrent && !isFinished && styles.skillSkillCardCurrent,
                            ]}
                            onPress={() => {
                              triggerHaptic('light');
                              setActiveChapterTitle(skillChapterTitle);
                              setActiveTab('questions');
                            }}
                          >
                            {/* Finished Trophy Celebration Banner */}
                            {isFinished && (
                              <View style={styles.skillFinishedBanner}>
                                <View style={styles.skillFinishedTagPill}>
                                  <Text style={{ fontSize: 13 }}>🏆</Text>
                                  <Text style={styles.skillFinishedTagText}>
                                    {isHindi ? 'कौशल पूरा हुआ! MASTERED ✓' : 'SKILL MASTERED ✓'}
                                  </Text>
                                </View>
                                {prog?.scorePercentage !== undefined && (
                                  <Text style={styles.skillFinishedScore}>
                                    ⭐ {prog.scorePercentage}%
                                  </Text>
                                )}
                              </View>
                            )}

                            <View style={styles.skillCardMainRow}>
                              {/* Code Badge */}
                              <View
                                style={[
                                  styles.skillCodeBadge,
                                  isFinished && styles.skillCodeBadgeFinished,
                                  isStarted && styles.skillCodeBadgeStarted,
                                ]}
                              >
                                <Text
                                  style={[
                                    styles.skillCodeText,
                                    isFinished && styles.skillCodeTextFinished,
                                    isStarted && styles.skillCodeTextStarted,
                                  ]}
                                >
                                  {isFinished ? '✓' : skill.code}
                                </Text>
                              </View>

                              {/* Icon Circle */}
                              <View
                                style={[
                                  styles.skillIconCircle,
                                  isFinished && styles.skillIconCircleFinished,
                                ]}
                              >
                                <Text style={styles.skillIconText}>{skill.icon || '📖'}</Text>
                              </View>

                              {/* Titles & Category */}
                              <View style={styles.skillInfoCol}>
                                <View style={styles.skillCategoryTagRow}>
                                  <View style={styles.skillCategoryPill}>
                                    <Text style={styles.skillCategoryText} numberOfLines={1}>
                                      {skill.categoryTitle}
                                    </Text>
                                  </View>
                                  <View style={[styles.skillCategoryPill, { backgroundColor: '#F3F4F6' }]}>
                                    <Text style={[styles.skillCategoryText, { color: '#4B5563' }]} numberOfLines={1}>
                                      {skill.area}
                                    </Text>
                                  </View>
                                </View>

                                <Text
                                  style={[
                                    styles.skillTitleText,
                                    isFinished && styles.skillTitleTextFinished,
                                  ]}
                                  numberOfLines={2}
                                >
                                  {skill.title}
                                </Text>

                                <Text
                                  style={[
                                    styles.skillSubTitleText,
                                    isFinished && styles.skillSubTitleTextFinished,
                                  ]}
                                  numberOfLines={1}
                                >
                                  {skill.titleHindi}
                                </Text>

                                <View style={styles.chMetaRow}>
                                  <ChampBadge
                                    label={isHindi ? `${skill.questionCount} प्रश्न` : `${skill.questionCount} Questions`}
                                    variant="gold"
                                    size="sm"
                                  />
                                  {isFinished ? (
                                    <ChampBadge
                                      label={isHindi ? 'पूर्ण ✓' : 'Finished ✓'}
                                      variant="success"
                                      size="sm"
                                    />
                                  ) : isStarted ? (
                                    <ChampBadge
                                      label={`Q${(prog?.lastQuestionIndex || 0) + 1} / ${skill.questionCount}`}
                                      variant="primary"
                                      size="sm"
                                    />
                                  ) : (
                                    <ChampBadge
                                      label={isHindi ? '150 अंक' : '150 Pts'}
                                      variant="neutral"
                                      size="sm"
                                    />
                                  )}
                                  <Text style={styles.drillTapHint}>
                                    {isHindi ? '• टैप करके 10 प्रश्न देखें ▾' : '• Tap for Q1-Q10 ▾'}
                                  </Text>
                                </View>
                              </View>

                              {/* Quick Action Button */}
                              <TouchableOpacity
                                activeOpacity={0.8}
                                style={[
                                  styles.chActionButton,
                                  isFinished && styles.chActionButtonFinished,
                                  isStarted && styles.chActionButtonStarted,
                                ]}
                                onPress={() => {
                                  const startIndex = isStarted ? prog.lastQuestionIndex : 0;
                                  handleStart(startIndex, skillChapterTitle);
                                }}
                              >
                                <Text
                                  style={[
                                    styles.chActionIcon,
                                    isFinished && styles.chActionIconFinished,
                                    isStarted && styles.chActionIconStarted,
                                  ]}
                                >
                                  {isFinished ? '🔁' : isStarted ? '▶' : '▶'}
                                </Text>
                                <Text
                                  style={[
                                    styles.chActionLabel,
                                    isFinished && styles.chActionLabelFinished,
                                    isStarted && styles.chActionLabelStarted,
                                  ]}
                                >
                                  {isFinished ? (isHindi ? 'दोबारा' : 'Replay') : isStarted ? (isHindi ? 'जारी' : 'Resume') : (isHindi ? 'शुरू' : 'Start')}
                                </Text>
                              </TouchableOpacity>
                            </View>
                          </TouchableOpacity>
                        );
                      })}
                    </View>
                  </>
                ) : isClass1English && class1EnglishCatalogMode === 'skills' ? (
                  /* VIEW MODE: 169 Skill GRANULAR SKILLS (CLASS 1 ENGLISH) */
                  <>
                    {/* Area Filter Scrollbar */}
                    <View style={styles.skillAreaFilterContainer}>
                      <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.skillAreaFilterScroll}
                      >
                        <TouchableOpacity
                          activeOpacity={0.8}
                          style={[
                            styles.skillAreaFilterPill,
                            class1SkillAreaFilter === 'all' && styles.skillAreaFilterPillActive,
                          ]}
                          onPress={() => {
                            triggerHaptic('light');
                            setClass1SkillAreaFilter('all');
                          }}
                        >
                          <Text
                            style={[
                              styles.skillAreaFilterText,
                              class1SkillAreaFilter === 'all' && styles.skillAreaFilterTextActive,
                            ]}
                          >
                            {isHindi ? 'सभी कौशल (169)' : 'All Skills (169)'}
                          </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                          activeOpacity={0.8}
                          style={[
                            styles.skillAreaFilterPill,
                            class1SkillAreaFilter === 'Reading foundations' && styles.skillAreaFilterPillActive,
                          ]}
                          onPress={() => {
                            triggerHaptic('light');
                            setClass1SkillAreaFilter('Reading foundations');
                          }}
                        >
                          <Text
                            style={[
                              styles.skillAreaFilterText,
                              class1SkillAreaFilter === 'Reading foundations' && styles.skillAreaFilterTextActive,
                            ]}
                          >
                            {isHindi ? `पठन आधार (${c1FoundationsCount})` : `Reading Foundations (${c1FoundationsCount})`}
                          </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                          activeOpacity={0.8}
                          style={[
                            styles.skillAreaFilterPill,
                            class1SkillAreaFilter === 'Reading strategies' && styles.skillAreaFilterPillActive,
                          ]}
                          onPress={() => {
                            triggerHaptic('light');
                            setClass1SkillAreaFilter('Reading strategies');
                          }}
                        >
                          <Text
                            style={[
                              styles.skillAreaFilterText,
                              class1SkillAreaFilter === 'Reading strategies' && styles.skillAreaFilterTextActive,
                            ]}
                          >
                            {isHindi ? `पठन रणनीतियाँ (${c1StrategiesCount})` : `Reading Strategies (${c1StrategiesCount})`}
                          </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                          activeOpacity={0.8}
                          style={[
                            styles.skillAreaFilterPill,
                            class1SkillAreaFilter === 'Vocabulary' && styles.skillAreaFilterPillActive,
                          ]}
                          onPress={() => {
                            triggerHaptic('light');
                            setClass1SkillAreaFilter('Vocabulary');
                          }}
                        >
                          <Text
                            style={[
                              styles.skillAreaFilterText,
                              class1SkillAreaFilter === 'Vocabulary' && styles.skillAreaFilterTextActive,
                            ]}
                          >
                            {isHindi ? `शब्दावली (${c1VocabCount})` : `Vocabulary (${c1VocabCount})`}
                          </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                          activeOpacity={0.8}
                          style={[
                            styles.skillAreaFilterPill,
                            class1SkillAreaFilter === 'Grammar and mechanics' && styles.skillAreaFilterPillActive,
                          ]}
                          onPress={() => {
                            triggerHaptic('light');
                            setClass1SkillAreaFilter('Grammar and mechanics');
                          }}
                        >
                          <Text
                            style={[
                              styles.skillAreaFilterText,
                              class1SkillAreaFilter === 'Grammar and mechanics' && styles.skillAreaFilterTextActive,
                            ]}
                          >
                            {isHindi ? `व्याकरण (${c1GrammarCount})` : `Grammar & Mechanics (${c1GrammarCount})`}
                          </Text>
                        </TouchableOpacity>
                      </ScrollView>
                    </View>

                    {/* Section Header */}
                    <View style={styles.sectionHeaderRow}>
                      <Text style={styles.sectionHeading}>
                        ⭐ {isHindi ? '169 सूक्ष्म कौशल वर्कशीट (A से PP):' : '169 Granular Skills (A to PP):'}
                      </Text>
                      <Text style={styles.sectionSubHeading}>
                        {isHindi
                          ? `${filteredClass1Skills.length} कौशल उपलब्ध • प्रत्येक में 10 स्तरित प्रश्न`
                          : `${filteredClass1Skills.length} skills showing • 10 progressive questions each`}
                      </Text>
                    </View>

                    {/* All Skill Cards List */}
                    <View style={styles.skillSkillsList}>
                      {searchedClass1Skills.map((skill) => {
                        const skillChapterTitle = `${skill.code}: ${skill.title}`;
                        const prog = getChapterProgress(grade, subject, skillChapterTitle);
                        const isFinished = prog?.isCompleted === true;
                        const isStarted = prog && prog.lastQuestionIndex > 0 && !isFinished;
                        const isCurrent = skillChapterTitle === activeChapterTitle;

                        return (
                          <TouchableOpacity
                            key={skill.id}
                            activeOpacity={0.88}
                            style={[
                              styles.skillSkillCard,
                              { backgroundColor: skill.color, borderColor: skill.borderColor },
                              isFinished && styles.skillSkillCardFinished,
                              isStarted && styles.skillSkillCardStarted,
                              isCurrent && !isFinished && styles.skillSkillCardCurrent,
                            ]}
                            onPress={() => {
                              triggerHaptic('light');
                              setActiveChapterTitle(skillChapterTitle);
                              setActiveTab('questions');
                            }}
                          >
                            {/* Finished Trophy Celebration Banner */}
                            {isFinished && (
                              <View style={styles.skillFinishedBanner}>
                                <View style={styles.skillFinishedTagPill}>
                                  <Text style={{ fontSize: 13 }}>🏆</Text>
                                  <Text style={styles.skillFinishedTagText}>
                                    {isHindi ? 'कौशल पूरा हुआ! MASTERED ✓' : 'SKILL MASTERED ✓'}
                                  </Text>
                                </View>
                                {prog?.scorePercentage !== undefined && (
                                  <Text style={styles.skillFinishedScore}>
                                    ⭐ {prog.scorePercentage}%
                                  </Text>
                                )}
                              </View>
                            )}

                            <View style={styles.skillCardMainRow}>
                              {/* Code Badge */}
                              <View
                                style={[
                                  styles.skillCodeBadge,
                                  isFinished && styles.skillCodeBadgeFinished,
                                  isStarted && styles.skillCodeBadgeStarted,
                                ]}
                              >
                                <Text
                                  style={[
                                    styles.skillCodeText,
                                    isFinished && styles.skillCodeTextFinished,
                                    isStarted && styles.skillCodeTextStarted,
                                  ]}
                                >
                                  {isFinished ? '✓' : skill.code}
                                </Text>
                              </View>

                              {/* Icon Circle */}
                              <View
                                style={[
                                  styles.skillIconCircle,
                                  isFinished && styles.skillIconCircleFinished,
                                ]}
                              >
                                <Text style={styles.skillIconText}>{skill.icon || '📖'}</Text>
                              </View>

                              {/* Titles & Category */}
                              <View style={styles.skillInfoCol}>
                                <View style={styles.skillCategoryTagRow}>
                                  <View style={styles.skillCategoryPill}>
                                    <Text style={styles.skillCategoryText} numberOfLines={1}>
                                      {skill.categoryTitle}
                                    </Text>
                                  </View>
                                  <View style={[styles.skillCategoryPill, { backgroundColor: '#F3F4F6' }]}>
                                    <Text style={[styles.skillCategoryText, { color: '#4B5563' }]} numberOfLines={1}>
                                      {skill.area}
                                    </Text>
                                  </View>
                                </View>

                                <Text
                                  style={[
                                    styles.skillTitleText,
                                    isFinished && styles.skillTitleTextFinished,
                                  ]}
                                  numberOfLines={2}
                                >
                                  {skill.title}
                                </Text>

                                <Text
                                  style={[
                                    styles.skillSubTitleText,
                                    isFinished && styles.skillSubTitleTextFinished,
                                  ]}
                                  numberOfLines={1}
                                >
                                  {skill.titleHindi}
                                </Text>

                                <View style={styles.chMetaRow}>
                                  <ChampBadge
                                    label={isHindi ? `${skill.questionCount} प्रश्न` : `${skill.questionCount} Questions`}
                                    variant="gold"
                                    size="sm"
                                  />
                                  {isFinished ? (
                                    <ChampBadge
                                      label={isHindi ? 'पूर्ण ✓' : 'Finished ✓'}
                                      variant="success"
                                      size="sm"
                                    />
                                  ) : isStarted ? (
                                    <ChampBadge
                                      label={`Q${(prog?.lastQuestionIndex || 0) + 1} / ${skill.questionCount}`}
                                      variant="primary"
                                      size="sm"
                                    />
                                  ) : (
                                    <ChampBadge
                                      label={isHindi ? '150 अंक' : '150 Pts'}
                                      variant="neutral"
                                      size="sm"
                                    />
                                  )}
                                  <Text style={styles.drillTapHint}>
                                    {isHindi ? '• टैप करके 10 प्रश्न देखें ▾' : '• Tap for Q1-Q10 ▾'}
                                  </Text>
                                </View>
                              </View>

                              {/* Quick Action Button */}
                              <TouchableOpacity
                                activeOpacity={0.8}
                                style={[
                                  styles.chActionButton,
                                  isFinished && styles.chActionButtonFinished,
                                  isStarted && styles.chActionButtonStarted,
                                ]}
                                onPress={() => {
                                  const startIndex = isStarted ? prog.lastQuestionIndex : 0;
                                  handleStart(startIndex, skillChapterTitle);
                                }}
                              >
                                <Text
                                  style={[
                                    styles.chActionIcon,
                                    isFinished && styles.chActionIconFinished,
                                    isStarted && styles.chActionIconStarted,
                                  ]}
                                >
                                  {isFinished ? '🔁' : isStarted ? '▶' : '▶'}
                                </Text>
                                <Text
                                  style={[
                                    styles.chActionLabel,
                                    isFinished && styles.chActionLabelFinished,
                                    isStarted && styles.chActionLabelStarted,
                                  ]}
                                >
                                  {isFinished ? (isHindi ? 'दोबारा' : 'Replay') : isStarted ? (isHindi ? 'जारी' : 'Resume') : (isHindi ? 'शुरू' : 'Start')}
                                </Text>
                              </TouchableOpacity>
                            </View>
                          </TouchableOpacity>
                        );
                      })}
                    </View>
                  </>
                ) : isUkgMaths && ukgMathsCatalogMode === 'skills' ? (
                  /* VIEW MODE: 144 Skill GRANULAR SKILLS (UKG MATHS) */
                  <>
                    {/* Area Filter Scrollbar */}
                    <View style={styles.skillAreaFilterContainer}>
                      <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.skillAreaFilterScroll}
                      >
                        <TouchableOpacity
                          activeOpacity={0.8}
                          style={[
                            styles.skillAreaFilterPill,
                            ukgMathsAreaFilter === 'all' && styles.skillAreaFilterPillActive,
                          ]}
                          onPress={() => {
                            triggerHaptic('light');
                            setUkgMathsAreaFilter('all');
                          }}
                        >
                          <Text
                            style={[
                              styles.skillAreaFilterText,
                              ukgMathsAreaFilter === 'all' && styles.skillAreaFilterTextActive,
                            ]}
                          >
                            🌟 All Skills (144)
                          </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                          activeOpacity={0.8}
                          style={[
                            styles.skillAreaFilterPill,
                            ukgMathsAreaFilter === 'Counting & Numbers' && styles.skillAreaFilterPillActive,
                          ]}
                          onPress={() => {
                            triggerHaptic('light');
                            setUkgMathsAreaFilter('Counting & Numbers');
                          }}
                        >
                          <Text
                            style={[
                              styles.skillAreaFilterText,
                              ukgMathsAreaFilter === 'Counting & Numbers' && styles.skillAreaFilterTextActive,
                            ]}
                          >
                            🔢 Counting & Numbers ({ukgMathsCountingCount})
                          </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                          activeOpacity={0.8}
                          style={[
                            styles.skillAreaFilterPill,
                            ukgMathsAreaFilter === 'Addition & Subtraction' && styles.skillAreaFilterPillActive,
                          ]}
                          onPress={() => {
                            triggerHaptic('light');
                            setUkgMathsAreaFilter('Addition & Subtraction');
                          }}
                        >
                          <Text
                            style={[
                              styles.skillAreaFilterText,
                              ukgMathsAreaFilter === 'Addition & Subtraction' && styles.skillAreaFilterTextActive,
                            ]}
                          >
                            ➕ Addition & Subtraction ({ukgMathsAddSubCount})
                          </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                          activeOpacity={0.8}
                          style={[
                            styles.skillAreaFilterPill,
                            ukgMathsAreaFilter === 'Geometry & Shapes' && styles.skillAreaFilterPillActive,
                          ]}
                          onPress={() => {
                            triggerHaptic('light');
                            setUkgMathsAreaFilter('Geometry & Shapes');
                          }}
                        >
                          <Text
                            style={[
                              styles.skillAreaFilterText,
                              ukgMathsAreaFilter === 'Geometry & Shapes' && styles.skillAreaFilterTextActive,
                            ]}
                          >
                            🔺 Shapes (2D & 3D) ({ukgMathsShapesCount})
                          </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                          activeOpacity={0.8}
                          style={[
                            styles.skillAreaFilterPill,
                            ukgMathsAreaFilter === 'Comparing & Positions' && styles.skillAreaFilterPillActive,
                          ]}
                          onPress={() => {
                            triggerHaptic('light');
                            setUkgMathsAreaFilter('Comparing & Positions');
                          }}
                        >
                          <Text
                            style={[
                              styles.skillAreaFilterText,
                              ukgMathsAreaFilter === 'Comparing & Positions' && styles.skillAreaFilterTextActive,
                            ]}
                          >
                            ⚖️ Comparing & Positions ({ukgMathsComparingCount})
                          </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                          activeOpacity={0.8}
                          style={[
                            styles.skillAreaFilterPill,
                            ukgMathsAreaFilter === 'Classify & Patterns' && styles.skillAreaFilterPillActive,
                          ]}
                          onPress={() => {
                            triggerHaptic('light');
                            setUkgMathsAreaFilter('Classify & Patterns');
                          }}
                        >
                          <Text
                            style={[
                              styles.skillAreaFilterText,
                              ukgMathsAreaFilter === 'Classify & Patterns' && styles.skillAreaFilterTextActive,
                            ]}
                          >
                            🎨 Classify & Patterns ({ukgMathsClassifyCount})
                          </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                          activeOpacity={0.8}
                          style={[
                            styles.skillAreaFilterPill,
                            ukgMathsAreaFilter === 'Data & Measurement' && styles.skillAreaFilterPillActive,
                          ]}
                          onPress={() => {
                            triggerHaptic('light');
                            setUkgMathsAreaFilter('Data & Measurement');
                          }}
                        >
                          <Text
                            style={[
                              styles.skillAreaFilterText,
                              ukgMathsAreaFilter === 'Data & Measurement' && styles.skillAreaFilterTextActive,
                            ]}
                          >
                            📊 Data, Measure & Money ({ukgMathsDataMeasureCount})
                          </Text>
                        </TouchableOpacity>
                      </ScrollView>
                    </View>

                    {/* Section Header */}
                    <View style={styles.sectionHeaderRow}>
                      <Text style={styles.sectionHeading}>
                        {isHindi ? '⭐ यूकेजी गणित कौशल वर्कशीट चुनें:' : '⭐ Select a UKG Maths Skill Worksheet:'}
                      </Text>
                      <Text style={styles.sectionSubHeading}>
                        {isHindi
                          ? `${filteredUkgMathsSkills.length} कौशल उपलब्ध • प्रत्येक में 10 स्तरित प्रश्न`
                          : `${filteredUkgMathsSkills.length} skills showing • 10 progressive questions each`}
                      </Text>
                    </View>

                    {/* All UKG Maths Skill Cards List */}
                    <View style={styles.skillSkillsList}>
                      {searchedUkgMathsSkills.map((skill) => {
                        const skillChapterTitle = `${skill.code}: ${skill.title}`;
                        const prog = getChapterProgress(grade, subject, skillChapterTitle);
                        const isFinished = prog?.isCompleted === true;
                        const isStarted = Boolean(prog && (prog.lastQuestionIndex ?? 0) > 0 && !isFinished);
                        const isCurrent = skillChapterTitle === activeChapterTitle;

                        return (
                          <TouchableOpacity
                            key={skill.id}
                            activeOpacity={0.88}
                            style={[
                              styles.skillSkillCard,
                              { backgroundColor: skill.color, borderColor: skill.borderColor },
                              isFinished && styles.skillSkillCardFinished,
                              isStarted && styles.skillSkillCardStarted,
                              isCurrent && !isFinished && styles.skillSkillCardCurrent,
                            ]}
                            onPress={() => {
                              triggerHaptic('light');
                              setActiveChapterTitle(skillChapterTitle);
                              setActiveTab('questions');
                            }}
                          >
                            {/* Finished Trophy Celebration Banner */}
                            {isFinished && (
                              <View style={styles.skillFinishedBanner}>
                                <View style={styles.skillFinishedTagPill}>
                                  <Text style={{ fontSize: 13 }}>🏆</Text>
                                  <Text style={styles.skillFinishedTagText}>
                                    {isHindi ? 'कौशल पूरा हुआ! MASTERED ✓' : 'SKILL MASTERED ✓'}
                                  </Text>
                                </View>
                                {prog?.scorePercentage !== undefined && (
                                  <Text style={styles.skillFinishedScore}>
                                    ⭐ {prog.scorePercentage}%
                                  </Text>
                                )}
                              </View>
                            )}

                            <View style={styles.skillCardMainRow}>
                              {/* Code Badge */}
                              <View
                                style={[
                                  styles.skillCodeBadge,
                                  isFinished && styles.skillCodeBadgeFinished,
                                  isStarted && styles.skillCodeBadgeStarted,
                                ]}
                              >
                                <Text
                                  style={[
                                    styles.skillCodeText,
                                    isFinished && styles.skillCodeTextFinished,
                                    isStarted && styles.skillCodeTextStarted,
                                  ]}
                                >
                                  {isFinished ? '✓' : skill.code}
                                </Text>
                              </View>

                              {/* Icon Circle */}
                              <View
                                style={[
                                  styles.skillIconCircle,
                                  isFinished && styles.skillIconCircleFinished,
                                ]}
                              >
                                <Text style={styles.skillIconText}>{skill.icon || '🔢'}</Text>
                              </View>

                              {/* Titles & Category */}
                              <View style={styles.skillInfoCol}>
                                <View style={styles.skillCategoryTagRow}>
                                  <View style={styles.skillCategoryPill}>
                                    <Text style={styles.skillCategoryText} numberOfLines={1}>
                                      {skill.categoryTitle}
                                    </Text>
                                  </View>
                                  <Text style={styles.skillAreaDot}>•</Text>
                                  <Text style={styles.skillAreaLabel} numberOfLines={1}>
                                    {skill.area}
                                  </Text>
                                </View>

                                <Text
                                  style={[
                                    styles.skillTitleText,
                                    isFinished && styles.skillTitleTextFinished,
                                  ]}
                                  numberOfLines={2}
                                >
                                  {skill.title}
                                </Text>

                                <Text
                                  style={[
                                    styles.skillSubTitleText,
                                    isFinished && styles.skillSubTitleTextFinished,
                                  ]}
                                  numberOfLines={1}
                                >
                                  {skill.titleHindi}
                                </Text>

                                {/* Status Meta */}
                                <View style={styles.chMetaRow}>
                                  {isFinished ? (
                                    <ChampBadge
                                      label={isHindi ? '✓ 100% पूरा' : '✓ Mastered'}
                                      variant="success"
                                      size="sm"
                                    />
                                  ) : isStarted && prog ? (
                                    <ChampBadge
                                      label={isHindi ? `Q${prog.lastQuestionIndex + 1} से जारी` : `Resume Q${prog.lastQuestionIndex + 1}`}
                                      variant="gold"
                                      size="sm"
                                    />
                                  ) : (
                                    <ChampBadge
                                      label={`${skill.questionCount} Questions`}
                                      variant="neutral"
                                      size="sm"
                                    />
                                  )}
                                  <Text style={styles.drillTapHint}>
                                    {isHindi ? '• टैप करके 10 प्रश्न देखें ▾' : '• Tap for Q1-Q10 ▾'}
                                  </Text>
                                </View>
                              </View>

                              {/* Quick Action Button */}
                              <TouchableOpacity
                                activeOpacity={0.8}
                                style={[
                                  styles.chActionButton,
                                  isFinished && styles.chActionButtonFinished,
                                  isStarted && styles.chActionButtonStarted,
                                ]}
                                onPress={() => {
                                  const startIndex = isStarted && prog ? prog.lastQuestionIndex : 0;
                                  handleStart(startIndex, skillChapterTitle);
                                }}
                              >
                                <Text
                                  style={[
                                    styles.chActionIcon,
                                    isFinished && styles.chActionIconFinished,
                                    isStarted && styles.chActionIconStarted,
                                  ]}
                                >
                                  {isFinished ? '🔁' : isStarted ? '▶' : '▶'}
                                </Text>
                                <Text
                                  style={[
                                    styles.chActionLabel,
                                    isFinished && styles.chActionLabelFinished,
                                    isStarted && styles.chActionLabelStarted,
                                  ]}
                                >
                                  {isFinished ? (isHindi ? 'दोबारा' : 'Replay') : isStarted ? (isHindi ? 'जारी' : 'Resume') : (isHindi ? 'शुरू' : 'Start')}
                                </Text>
                              </TouchableOpacity>
                            </View>
                          </TouchableOpacity>
                        );
                      })}
                    </View>
                  </>
                ) : (
                  /* VIEW MODE 2: 30 NCERT CORE CHAPTERS */
                  <>
                    {/* Section Header */}
                    <View style={styles.sectionHeaderRow}>
                      <Text style={styles.sectionHeading}>
                        {isHindi ? '📚 वर्कशीट या पाठ चुनें:' : '📚 Choose a Topic / Worksheet to Start:'}
                      </Text>
                      <Text style={styles.sectionSubHeading}>
                        {isHindi ? 'पूरी हुई वर्कशीट हरे रंग में चिह्नित हैं' : 'Finished worksheets are marked in bright green'}
                      </Text>
                    </View>

                    {/* All Worksheets Cards List */}
                    <View style={styles.worksheetsList}>
                      {searchedAllChapters.map((ch, idx) => {
                        const prog = getChapterProgress(grade, subject, ch.title);
                        const isFinished = prog?.isCompleted === true;
                        const isStarted = prog && prog.lastQuestionIndex > 0 && !isFinished;
                        const isCurrent = ch.title === activeChapterTitle;

                        const title = getChapterTitle(ch, isHindi);
                        const summary = getChapterSummary(ch, isHindi);

                        return (
                          <TouchableOpacity
                            key={ch.id || `ch_${idx}`}
                            activeOpacity={0.85}
                            style={[
                              styles.worksheetCard,
                              isFinished && styles.worksheetCardFinished,
                              isStarted && styles.worksheetCardStarted,
                              isCurrent && !isFinished && styles.worksheetCardCurrent,
                            ]}
                            onPress={() => handleSelectChapterForDrill(ch)}
                          >
                            {/* Finished Trophy Celebration Banner */}
                            {isFinished && (
                              <View style={styles.finishedCelebrationBanner}>
                                <View style={styles.finishedTagPill}>
                                  <Text style={styles.finishedTagIcon}>🏆</Text>
                                  <Text style={styles.finishedTagText}>
                                    {isHindi ? 'पूरा हुआ! MASTERED ✓' : 'FINISHED & MASTERED ✓'}
                                  </Text>
                                </View>
                                {prog?.scorePercentage !== undefined && (
                                  <Text style={styles.finishedScoreBadge}>
                                    ⭐ {prog.scorePercentage}% Score
                                  </Text>
                                )}
                              </View>
                            )}

                            <View style={styles.worksheetCardMainRow}>
                              {/* Number Badge or Checkmark */}
                              <View
                                style={[
                                  styles.chNumberBadge,
                                  isFinished && styles.chNumberBadgeFinished,
                                  isStarted && styles.chNumberBadgeStarted,
                                ]}
                              >
                                <Text
                                  style={[
                                    styles.chNumberText,
                                    isFinished && styles.chNumberTextFinished,
                                    isStarted && styles.chNumberTextStarted,
                                  ]}
                                >
                                  {isFinished ? '✓' : ch.number < 10 ? `0${ch.number}` : ch.number}
                                </Text>
                              </View>

                              {/* Icon Circle */}
                              <View
                                style={[
                                  styles.chIconCircle,
                                  isFinished && styles.chIconCircleFinished,
                                ]}
                              >
                                <Text style={styles.chIconText}>{ch.icon || '📖'}</Text>
                              </View>

                              {/* Titles & Summary */}
                              <View style={styles.chInfoCol}>
                                <Text
                                  style={[
                                    styles.chTitleText,
                                    isFinished && styles.chTitleTextFinished,
                                  ]}
                                  numberOfLines={1}
                                >
                                  {title}
                                </Text>
                                <Text
                                  style={[
                                    styles.chSummaryText,
                                    isFinished && styles.chSummaryTextFinished,
                                  ]}
                                  numberOfLines={2}
                                >
                                  {summary}
                                </Text>

                                {/* Status Meta Badges */}
                                <View style={styles.chMetaRow}>
                                  {isFinished ? (
                                    <ChampBadge
                                      label={isHindi ? '✓ 100% पूरा' : '✓ Completed'}
                                      variant="success"
                                      size="sm"
                                    />
                                  ) : isStarted ? (
                                    <ChampBadge
                                      label={isHindi ? `Q${prog.lastQuestionIndex + 1} से जारी` : `Resume Q${prog.lastQuestionIndex + 1}`}
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
                                  <Text style={styles.drillTapHint}>
                                    {isHindi ? '• टैप करके प्रश्न देखें ▾' : '• Tap for Q1-Q10 ▾'}
                                  </Text>
                                </View>
                              </View>

                              {/* Quick Action Button */}
                              <TouchableOpacity
                                activeOpacity={0.8}
                                style={[
                                  styles.chActionButton,
                                  isFinished && styles.chActionButtonFinished,
                                  isStarted && styles.chActionButtonStarted,
                                ]}
                                onPress={() => {
                                  const startIndex = isStarted ? prog.lastQuestionIndex : 0;
                                  handleStart(startIndex, ch.title);
                                }}
                              >
                                <Text
                                  style={[
                                    styles.chActionIcon,
                                    isFinished && styles.chActionIconFinished,
                                    isStarted && styles.chActionIconStarted,
                                  ]}
                                >
                                  {isFinished ? '🔁' : isStarted ? '▶' : '▶'}
                                </Text>
                                <Text
                                  style={[
                                    styles.chActionLabel,
                                    isFinished && styles.chActionLabelFinished,
                                    isStarted && styles.chActionLabelStarted,
                                  ]}
                                >
                                  {isFinished ? (isHindi ? 'दोबारा' : 'Replay') : isStarted ? (isHindi ? 'जारी' : 'Resume') : (isHindi ? 'शुरू' : 'Start')}
                                </Text>
                              </TouchableOpacity>
                            </View>
                          </TouchableOpacity>
                        );
                      })}
                    </View>
                  </>
                )}
              </View>
            )}

            {/* ============================================================== */}
            {/* TAB: CONCEPT LABS (SUBJECT-SPECIFIC)                            */}
            {/* ============================================================== */}
            {activeTab === 'labs' && (
              <View style={styles.tabContentContainer}>
                <View style={styles.sectionHeaderCard}>
                  <Text style={styles.sectionHeaderTitle}>
                    🔬 {isHindi
                      ? `${subject === 'maths' ? 'गणित' : 'हिंदी'} प्रैक्टिकल लैब्स`
                      : `${subject === 'maths' ? 'Mathematics' : subject === 'english' ? 'English' : 'Hindi'} Concept Labs`}
                  </Text>
                  <Text style={styles.sectionHeaderSub}>
                    {isHindi
                      ? 'रटने के बजाय देखकर, छूकर और खेलकर असली कॉन्सेप्ट समझें!'
                      : 'Hands-on sensory labs built specifically for deep conceptual mastery!'}
                  </Text>
                </View>

                <View style={styles.labsGridList}>
                  {subjectLabs.map((lab) => (
                    <TouchableOpacity
                      key={lab.id}
                      style={[styles.labItemCard, { backgroundColor: lab.boxColor, borderColor: lab.accentColor }]}
                      activeOpacity={0.88}
                      onPress={() => {
                        triggerHaptic('medium');
                        if (
                          lab.id === 'ukg_maths_interactive_lab' ||
                          lab.id === 'ukg_maths_ten_frame_lab' ||
                          lab.id === 'ukg_maths_add_sub_beaker' ||
                          lab.id === 'ukg_maths_coin_bank' ||
                          lab.id === 'ukg_maths_geometry_lab' ||
                          lab.id === 'ukg_maths_balance_lab' ||
                          lab.id === 'class1_english_interactive_lab' ||
                          lab.id.startsWith('c1_lab_') ||
                          !lab.chapterTitle
                        ) {
                          if (onOpenConceptLab) {
                            onClose();
                            onOpenConceptLab(lab.id);
                          }
                        } else if (lab.chapterTitle) {
                          onStartAtQuestion(0, lab.chapterTitle);
                        }
                      }}
                    >
                      <View style={styles.labItemTopRow}>
                        <View style={[styles.labIconCircle, { backgroundColor: '#FFFFFF' }]}>
                          <Text style={{ fontSize: 28 }}>{lab.icon}</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                          <View style={styles.labBadgePill}>
                            <Text style={[styles.labBadgeText, { color: lab.accentColor }]}>{lab.badge}</Text>
                          </View>
                          <Text style={styles.labItemTitle}>{lab.title}</Text>
                        </View>
                      </View>
                      <Text style={styles.labItemSub}>{lab.subtitle}</Text>
                      <Text style={styles.labItemPedagogy} numberOfLines={2}>
                        💡 {isHindi ? lab.pedagogicalOutcome.hindi : lab.pedagogicalOutcome.english}
                      </Text>
                      <View style={[styles.labLaunchBtn, { backgroundColor: lab.accentColor }]}>
                        <Text style={styles.labLaunchBtnText}>
                          {isHindi ? 'लैब शुरू करें ▶' : 'Launch Lab ▶'}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            )}

            {/* ============================================================== */}
            {/* TAB: CONCEPT GAMES (SUBJECT-SPECIFIC)                           */}
            {/* ============================================================== */}
            {activeTab === 'games' && (
              <View style={styles.tabContentContainer}>
                <View style={styles.sectionHeaderCard}>
                  <Text style={styles.sectionHeaderTitle}>
                    🎮 {isHindi
                      ? `${subject === 'maths' ? 'गणित' : 'हिंदी'} गेम ज़ोन`
                      : `${subject === 'maths' ? 'Mathematics' : 'English'} Game Zone`}
                  </Text>
                  <Text style={styles.sectionHeaderSub}>
                    {isHindi
                      ? 'खेल-खेल में दिमाग तेज करें और स्टार्स व सिक्के जीतें!'
                      : 'Play fun sensory games and earn stars & golden coins!'}
                  </Text>
                </View>

                <View style={styles.labsGridList}>
                  {searchedGames.map((game) => (
                    <TouchableOpacity
                      key={game.id}
                      style={[styles.gameItemCard, { backgroundColor: game.color, borderColor: game.borderColor }]}
                      activeOpacity={0.88}
                      onPress={() => {
                        triggerHaptic('medium');
                        if (onOpenArcadeGame) {
                          onClose();
                          onOpenArcadeGame(game.id, game.chapterTitle, isHindi ? game.titleHi : game.titleEn);
                        }
                      }}
                    >
                      <View style={styles.labItemTopRow}>
                        <View style={[styles.labIconCircle, { backgroundColor: '#FFFFFF' }]}>
                          <Text style={{ fontSize: 32 }}>{game.emoji}</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                          <View style={{ alignSelf: 'flex-start', backgroundColor: '#FFFFFF', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 6, marginBottom: 4 }}>
                            <Text style={{ fontSize: 11, fontWeight: '700', color: '#1E293B' }}>
                              {isHindi ? game.badgeHi : game.badgeEn}
                            </Text>
                          </View>
                          <Text style={styles.labItemTitle}>
                            {isHindi ? game.titleHi : game.titleEn}
                          </Text>
                          <Text style={styles.labItemSub}>
                            {isHindi ? game.descHi : game.descEn}
                          </Text>
                        </View>
                      </View>
                      <View style={[styles.labLaunchBtn, { backgroundColor: '#2563EB' }]}>
                        <Text style={styles.labLaunchBtnText}>
                          {isHindi ? 'खेलें ▶' : 'Play Now ▶'}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            )}

            {/* ============================================================== */}
            {/* TAB 4: QUESTIONS DRILL (Q1 - Q10 DIRECT NUMBER GRID)           */}
            {/* ============================================================== */}
            {activeTab === 'questions' && (
              <View style={styles.tabContentContainer}>
                {/* Active Chapter Header Card */}
                <ChampCard
                  style={[
                    styles.activeChapterHeroCard,
                    activeProgress?.isCompleted && styles.activeChapterHeroCardFinished,
                  ]}
                  shadow="small"
                >
                  <View style={styles.activeChapterHeroTop}>
                    <Text style={styles.activeChapterHeroIcon}>
                      {selectedChapterObj.icon || chapterIcon}
                    </Text>
                    <View style={{ flex: 1, marginLeft: 8 }}>
                      <Text style={styles.activeChapterHeroLabel}>
                        {isHindi ? `पाठ ${selectedChapterObj.number}` : `Chapter ${selectedChapterObj.number}`} • {subject.toUpperCase()}
                      </Text>
                      <Text style={styles.activeChapterHeroTitle} numberOfLines={2}>
                        {displayActiveTitle}
                      </Text>
                    </View>
                    {activeProgress?.isCompleted && (
                      <ChampBadge label="✓ FINISHED" variant="success" size="sm" />
                    )}
                  </View>
                  <Text style={styles.activeChapterHeroSub}>
                    {getChapterSummary(selectedChapterObj, isHindi)}
                  </Text>
                </ChampCard>

                {/* Completed Celebration Card if this chapter is done */}
                {activeProgress?.isCompleted && (
                  <ChampCard style={styles.completedMasteryCard} shadow="medium">
                    <View style={styles.completedHeader}>
                      <View style={styles.completedBadgeTag}>
                        <Text style={styles.completedBadgeIcon}>🏆</Text>
                        <Text style={styles.completedBadgeText}>
                          {isHindi ? 'पूरा हुआ! 🌟' : 'FINISHED & MASTERED!'}
                        </Text>
                      </View>
                      {activeProgress.scorePercentage !== undefined && (
                        <ChampBadge
                          label={`⭐ ${activeProgress.scorePercentage}% Score`}
                          variant="gold"
                          size="sm"
                        />
                      )}
                    </View>
                    <Text style={styles.completedMasteryTitle}>
                      {isHindi ? 'शाबाश! आपने यह पूरी वर्कशीट हल कर ली है 🌟' : 'Awesome Job! You completed this worksheet 🌟'}
                    </Text>
                    <Text style={styles.completedMasterySub}>
                      {isHindi
                        ? 'आप पूरे पाठ का दोबारा अभ्यास कर सकते हैं या नीचे से किसी भी प्रश्न पर सीधा कूद सकते हैं।'
                        : 'Drill the full worksheet again or tap any question below to test.'}
                    </Text>
                    <TouchableOpacity
                      activeOpacity={0.8}
                      style={styles.replayFullButton}
                      onPress={() => handleStart(0, activeChapterTitle)}
                    >
                      <Text style={styles.replayFullButtonText}>
                        {isHindi ? '🔁 दोबारा पूरा हल करें (प्रश्न 1 से)' : '🔁 Replay Full Worksheet (From Q1)'}
                      </Text>
                    </TouchableOpacity>
                  </ChampCard>
                )}

                {/* Quick Resume Card if user left midway */}
                {hasResumeOption && (
                  <ChampCard style={styles.resumeCard} shadow="medium">
                    <View style={styles.resumeHeader}>
                      <Text style={styles.resumeBadge}>
                        {isHindi ? '▶️ पिछली प्रगति से जारी रखें' : '▶️ Resume Where You Left Off'}
                      </Text>
                      <ChampBadge
                        label={`Q${lastIndex + 1} of ${activeQuestions.length}`}
                        variant="primary"
                        size="sm"
                      />
                    </View>
                    <Text style={styles.resumeTitle}>
                      {resumeQuestion?.concept
                        ? isHindi
                          ? cleanBilingualForHindi(resumeQuestion.concept)
                          : cleanBilingualForEnglish(resumeQuestion.concept)
                        : `Question ${lastIndex + 1}`}
                    </Text>
                    <Text style={styles.resumeSub}>
                      {isHindi
                        ? `आप प्रश्न ${lastIndex + 1} पर थे। यहीं से अभ्यास जारी रखें!`
                        : `You were at Question ${lastIndex + 1}. Jump right back in!`}
                    </Text>
                    <TouchableOpacity
                      activeOpacity={0.8}
                      style={styles.resumeButton}
                      onPress={() => handleStart(lastIndex, activeChapterTitle)}
                    >
                      <Text style={styles.resumeButtonText}>
                        {isHindi
                          ? `प्रश्न ${lastIndex + 1} से जारी रखें →`
                          : `Resume from Question ${lastIndex + 1} →`}
                      </Text>
                    </TouchableOpacity>
                  </ChampCard>
                )}

                {/* Start from Q1 Action */}
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={[
                    styles.startBeginningButton,
                    activeProgress?.isCompleted && styles.startBeginningButtonCompleted,
                  ]}
                  onPress={() => handleStart(0, activeChapterTitle)}
                >
                  <Text style={styles.startBeginningIcon}>
                    {activeProgress?.isCompleted ? '🔁' : '🔄'}
                  </Text>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.startBeginningText}>
                      {activeProgress?.isCompleted
                        ? isHindi
                          ? 'दोबारा पूरा पाठ हल करें'
                          : 'Replay from Question 1'
                        : isHindi
                        ? 'शुरुआत से शुरू करें'
                        : 'Start from Question 1'}
                    </Text>
                    <Text style={styles.startBeginningSub}>
                      {isHindi
                        ? `प्रश्न 1 से पूरा अभ्यास (Q1 से Q${activeQuestions.length})`
                        : `Full lesson drill (Q1 to Q${activeQuestions.length})`}
                    </Text>
                  </View>
                  <Text style={styles.actionArrow}>→</Text>
                </TouchableOpacity>

                {/* Direct Question Number Grid (Q1 to Q10) */}
                <View style={styles.questionGridSection}>
                  <Text style={styles.sectionLabel}>
                    {isHindi ? '🎯 किसी भी प्रश्न पर सीधा जाएं (सीधा टेस्ट):' : '🎯 Jump to Any Question (Direct Test):'}
                  </Text>
                  <View style={styles.questionGrid}>
                    {activeQuestions.map((q, idx) => {
                      const isCurrent = hasResumeOption && idx === lastIndex;
                      const isFinished = activeProgress?.isCompleted;
                      return (
                        <TouchableOpacity
                          key={q.id || `q_${idx}`}
                          activeOpacity={0.7}
                          style={[
                            styles.gridPill,
                            isFinished && styles.gridPillCompleted,
                            isCurrent && styles.gridPillActive,
                          ]}
                          onPress={() => handleStart(idx, activeChapterTitle)}
                        >
                          <Text
                            style={[
                              styles.gridPillText,
                              isFinished && styles.gridPillTextCompleted,
                              isCurrent && styles.gridPillTextActive,
                            ]}
                          >
                            {isFinished ? `✓ Q${idx + 1}` : `Q${idx + 1}`}
                          </Text>
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                </View>

                {/* Topics / Micro-Concepts in this Chapter */}
                {topics.length > 0 && (
                  <View style={styles.topicsSection}>
                    <Text style={styles.sectionLabel}>
                      {isHindi ? '📚 इस पाठ के उप-विषय:' : '📚 Sub-Topics in this Lesson:'}
                    </Text>
                    {topics.map((t, idx) => {
                      const isFinished = activeProgress?.isCompleted;
                      return (
                        <TouchableOpacity
                          key={`topic_${idx}_${t.firstQuestionIndex}`}
                          activeOpacity={0.8}
                          style={[styles.topicCard, isFinished && styles.topicCardCompleted]}
                          onPress={() => handleStart(t.firstQuestionIndex, activeChapterTitle)}
                        >
                          <View style={styles.topicLeft}>
                            <View
                              style={[
                                styles.topicNumber,
                                isFinished && styles.topicNumberCompleted,
                              ]}
                            >
                              <Text
                                style={[
                                  styles.topicNumberText,
                                  isFinished && styles.topicNumberTextCompleted,
                                ]}
                              >
                                {isFinished ? '✓' : idx + 1}
                              </Text>
                            </View>
                            <View style={{ flex: 1 }}>
                              <Text
                                style={[
                                  styles.topicTitle,
                                  isFinished && styles.topicTitleCompleted,
                                ]}
                              >
                                {isHindi ? cleanBilingualForHindi(t.concept) : cleanBilingualForEnglish(t.concept)}
                              </Text>
                              <View style={styles.topicMetaRow}>
                                <ChampBadge
                                  label={
                                    t.difficulty === 'easy'
                                      ? isHindi
                                        ? '🌱 समझें'
                                        : '🌱 Easy'
                                      : t.difficulty === 'medium'
                                      ? isHindi
                                        ? '🌿 अभ्यास'
                                        : '🌿 Medium'
                                      : isHindi
                                      ? '🏆 निपुण'
                                      : '🏆 Hard'
                                  }
                                  variant={
                                    t.difficulty === 'easy'
                                      ? 'success'
                                      : t.difficulty === 'medium'
                                      ? 'primary'
                                      : 'gold'
                                  }
                                  size="sm"
                                />
                                {isFinished && (
                                  <ChampBadge
                                    label={isHindi ? '✓ हल किया' : '✓ Mastered'}
                                    variant="success"
                                    size="sm"
                                  />
                                )}
                                <Text style={styles.questionCountText}>
                                  {t.questionCount > 1
                                    ? `Q${t.firstQuestionIndex + 1} - Q${
                                        t.firstQuestionIndex + t.questionCount
                                      }`
                                    : `Question ${t.firstQuestionIndex + 1}`}
                                </Text>
                              </View>
                            </View>
                          </View>
                          <View
                            style={[
                              styles.playTopicCircle,
                              isFinished && styles.playTopicCircleCompleted,
                            ]}
                          >
                            <Text
                              style={[
                                styles.playTopicIcon,
                                isFinished && styles.playTopicIconCompleted,
                              ]}
                            >
                              {isFinished ? '↻' : '▶'}
                            </Text>
                          </View>
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                )}

                {/* Back to All Worksheets Button */}
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.switchBackToAllTopicsButton}
                  onPress={() => {
                    triggerHaptic('light');
                    setActiveTab('topics');
                  }}
                >
                  <Text style={styles.switchBackToAllTopicsText}>
                    {isLkgEnglish && englishCatalogMode === 'skills'
                      ? isHindi
                        ? '← सभी 78 कौशल वर्कशीट देखें'
                        : '← View All 78 Skill Worksheets'
                      : isLkgMaths && mathsCatalogMode === 'skills'
                      ? isHindi
                        ? '← सभी 55 कौशल वर्कशीट देखें'
                        : '← View All 55 Skill Worksheets'
                      : isUkgEnglish && ukgEnglishCatalogMode === 'skills'
                      ? isHindi
                        ? '← सभी 131 कौशल वर्कशीट देखें'
                        : '← View All 131 Skill Worksheets'
                      : isUkgMaths && ukgMathsCatalogMode === 'skills'
                      ? isHindi
                        ? '← सभी 144 कौशल वर्कशीट देखें'
                        : '← View All 144 Skill Worksheets'
                      : isHindi
                      ? `← सभी ${allChapters.length} पाठ / वर्कशीट देखें`
                      : `← View All ${allChapters.length} Topics / Worksheets`}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(15, 23, 42, 0.75)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: COLORS.background,
    borderTopLeftRadius: BORDER_RADIUS.xl,
    borderTopRightRadius: BORDER_RADIUS.xl,
    maxHeight: '92%',
    paddingBottom: SPACING.xl,
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.lg,
    paddingBottom: SPACING.md,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: BORDER_RADIUS.xl,
    borderTopRightRadius: BORDER_RADIUS.xl,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.md,
    flex: 1,
    marginRight: SPACING.sm,
  },
  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: COLORS.primarySoft,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chapterIcon: {
    fontSize: 22,
  },
  titleCol: {
    flex: 1,
  },
  chapterLabel: {
    fontSize: 11,
    fontWeight: '800',
    color: COLORS.primary,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  chapterTitle: {
    fontSize: 16,
    fontWeight: '900',
    color: COLORS.textDark,
  },
  closeButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: COLORS.backgroundAlt,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeText: {
    fontSize: 16,
    fontWeight: '800',
    color: COLORS.textMedium,
  },
  subjectProgressBar: {
    backgroundColor: COLORS.white,
    paddingHorizontal: SPACING.lg,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  subjectProgressTextRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  subjectProgressLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: COLORS.textMedium,
  },
  subjectProgressPercent: {
    fontSize: 13,
    fontWeight: '900',
    color: '#15803D',
  },
  progressTrack: {
    height: 6,
    backgroundColor: '#E2E8F0',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#10B981',
    borderRadius: 3,
  },
  tabsRow: {
    flexDirection: 'row',
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.md,
    paddingBottom: SPACING.xs,
    gap: SPACING.sm,
    backgroundColor: COLORS.background,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: BORDER_RADIUS.md,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  tabButtonActive: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  tabText: {
    fontSize: 13,
    fontWeight: '800',
    color: COLORS.textMedium,
  },
  tabTextActive: {
    color: COLORS.white,
  },
  scrollBody: {
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.sm,
    paddingBottom: SPACING.giant,
  },
  tabContentContainer: {
    gap: SPACING.md,
  },
  resumeHeroCard: {
    backgroundColor: '#EFF6FF',
    borderColor: '#93C5FD',
    borderWidth: 1.5,
    borderLeftWidth: 5,
    borderLeftColor: '#2563EB',
    padding: SPACING.md,
  },
  resumeHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  resumeBadgePill: {
    backgroundColor: '#DBEAFE',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: BORDER_RADIUS.round,
  },
  resumeBadgeText: {
    fontSize: 10,
    fontWeight: '900',
    color: '#1D4ED8',
    letterSpacing: 0.5,
  },
  resumeLessonTitle: {
    fontSize: 16,
    fontWeight: '900',
    color: COLORS.textDark,
    marginTop: 4,
  },
  resumeSubText: {
    fontSize: 12,
    color: COLORS.textMedium,
    marginTop: 2,
    marginBottom: SPACING.sm,
  },
  primaryResumeButton: {
    backgroundColor: '#2563EB',
    paddingVertical: 10,
    paddingHorizontal: SPACING.lg,
    borderRadius: BORDER_RADIUS.md,
    alignItems: 'center',
  },
  primaryResumeButtonText: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: '800',
  },
  nextHeroCard: {
    backgroundColor: '#FFFBEB',
    borderColor: '#FDE68A',
    borderWidth: 1.5,
    borderLeftWidth: 5,
    borderLeftColor: '#D97706',
    padding: SPACING.md,
  },
  nextHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  nextBadgePill: {
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: BORDER_RADIUS.round,
  },
  nextBadgeText: {
    fontSize: 10,
    fontWeight: '900',
    color: '#B45309',
    letterSpacing: 0.5,
  },
  nextLessonTitle: {
    fontSize: 16,
    fontWeight: '900',
    color: COLORS.textDark,
    marginTop: 4,
  },
  nextLessonSub: {
    fontSize: 12,
    color: COLORS.textMedium,
    marginTop: 2,
    marginBottom: SPACING.sm,
  },
  nextLessonButton: {
    backgroundColor: '#D97706',
    paddingVertical: 10,
    paddingHorizontal: SPACING.lg,
    borderRadius: BORDER_RADIUS.md,
    alignItems: 'center',
  },
  nextLessonButtonText: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: '800',
  },
  sectionHeaderRow: {
    marginTop: SPACING.xs,
  },
  sectionHeading: {
    fontSize: 15,
    fontWeight: '900',
    color: COLORS.textDark,
  },
  sectionSubHeading: {
    fontSize: 12,
    color: COLORS.textMedium,
    marginTop: 2,
  },
  worksheetsList: {
    gap: SPACING.sm,
  },
  worksheetCard: {
    backgroundColor: COLORS.white,
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.md,
    borderWidth: 1.5,
    borderColor: COLORS.border,
    ...SHADOWS.small,
  },
  worksheetCardFinished: {
    backgroundColor: '#DCFCE7', // VIBRANT GREEN for completed topics
    borderColor: '#10B981',
    borderWidth: 2,
    borderLeftWidth: 6,
    borderLeftColor: '#059669',
  },
  worksheetCardStarted: {
    backgroundColor: '#EFF6FF',
    borderColor: '#93C5FD',
    borderLeftWidth: 5,
    borderLeftColor: '#2563EB',
  },
  worksheetCardCurrent: {
    borderColor: COLORS.primary,
  },
  finishedCelebrationBanner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.sm,
    paddingBottom: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#86EFAC',
  },
  finishedTagPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#BBF7D0',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: BORDER_RADIUS.round,
    borderWidth: 1,
    borderColor: '#4ADE80',
  },
  finishedTagIcon: {
    fontSize: 12,
  },
  finishedTagText: {
    fontSize: 11,
    fontWeight: '900',
    color: '#14532D',
    letterSpacing: 0.5,
  },
  finishedScoreBadge: {
    fontSize: 12,
    fontWeight: '900',
    color: '#15803D',
  },
  worksheetCardMainRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  chNumberBadge: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: COLORS.backgroundAlt,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  chNumberBadgeFinished: {
    backgroundColor: '#10B981', // Solid emerald green circle
  },
  chNumberBadgeStarted: {
    backgroundColor: '#2563EB',
  },
  chNumberText: {
    fontSize: 13,
    fontWeight: '900',
    color: COLORS.textDark,
  },
  chNumberTextFinished: {
    color: COLORS.white,
    fontWeight: '900',
  },
  chNumberTextStarted: {
    color: COLORS.white,
  },
  chIconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.primarySoft,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  chIconCircleFinished: {
    backgroundColor: '#BBF7D0',
  },
  chIconText: {
    fontSize: 20,
  },
  chInfoCol: {
    flex: 1,
    marginRight: 8,
  },
  chTitleText: {
    fontSize: 14,
    fontWeight: '800',
    color: COLORS.textDark,
    marginBottom: 2,
  },
  chTitleTextFinished: {
    color: '#14532D',
    fontWeight: '900',
  },
  chSummaryText: {
    fontSize: 11,
    color: COLORS.textMedium,
    lineHeight: 15,
  },
  chSummaryTextFinished: {
    color: '#166534',
  },
  chMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 6,
  },
  drillTapHint: {
    fontSize: 10,
    color: COLORS.textLight,
  },
  chActionButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: BORDER_RADIUS.md,
    backgroundColor: COLORS.primarySoft,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 64,
  },
  chActionButtonFinished: {
    backgroundColor: '#10B981', // Replay in solid green
  },
  chActionButtonStarted: {
    backgroundColor: '#2563EB',
  },
  chActionIcon: {
    fontSize: 14,
    color: COLORS.primary,
  },
  chActionIconFinished: {
    color: COLORS.white,
  },
  chActionIconStarted: {
    color: COLORS.white,
  },
  chActionLabel: {
    fontSize: 11,
    fontWeight: '800',
    color: COLORS.primary,
    marginTop: 1,
  },
  chActionLabelFinished: {
    color: COLORS.white,
  },
  chActionLabelStarted: {
    color: COLORS.white,
  },
  activeChapterHeroCard: {
    backgroundColor: COLORS.white,
    padding: SPACING.md,
    borderWidth: 1.5,
    borderColor: COLORS.primary,
  },
  activeChapterHeroCardFinished: {
    backgroundColor: '#DCFCE7',
    borderColor: '#10B981',
    borderWidth: 2,
  },
  activeChapterHeroTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  activeChapterHeroIcon: {
    fontSize: 28,
  },
  activeChapterHeroLabel: {
    fontSize: 11,
    fontWeight: '800',
    color: COLORS.primary,
    textTransform: 'uppercase',
  },
  activeChapterHeroTitle: {
    fontSize: 16,
    fontWeight: '900',
    color: COLORS.textDark,
  },
  activeChapterHeroSub: {
    fontSize: 12,
    color: COLORS.textMedium,
    marginTop: 6,
  },
  completedMasteryCard: {
    backgroundColor: '#DCFCE7',
    borderColor: '#10B981',
    borderWidth: 2,
    borderLeftWidth: 5,
    borderLeftColor: '#059669',
    padding: SPACING.md,
  },
  completedHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  completedBadgeTag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#BBF7D0',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: BORDER_RADIUS.round,
    borderWidth: 1,
    borderColor: '#4ADE80',
  },
  completedBadgeIcon: {
    fontSize: 12,
  },
  completedBadgeText: {
    fontSize: 11,
    fontWeight: '900',
    color: '#14532D',
    letterSpacing: 0.5,
  },
  completedMasteryTitle: {
    fontSize: 15,
    fontWeight: '900',
    color: '#064E3B',
    marginTop: 4,
  },
  completedMasterySub: {
    fontSize: 12,
    color: '#047857',
    marginTop: 2,
    marginBottom: SPACING.sm,
  },
  replayFullButton: {
    backgroundColor: '#059669',
    paddingVertical: SPACING.sm + 2,
    paddingHorizontal: SPACING.lg,
    borderRadius: BORDER_RADIUS.md,
    alignItems: 'center',
  },
  replayFullButtonText: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: '800',
  },
  resumeCard: {
    backgroundColor: '#EFF6FF',
    borderColor: '#93C5FD',
    borderWidth: 1.5,
    padding: SPACING.md,
  },
  resumeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  resumeBadge: {
    fontSize: 12,
    fontWeight: '900',
    color: '#1D4ED8',
    textTransform: 'uppercase',
  },
  resumeTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: COLORS.textDark,
    marginTop: 2,
  },
  resumeSub: {
    fontSize: 12,
    color: COLORS.textMedium,
    marginTop: 2,
    marginBottom: SPACING.sm,
  },
  resumeButton: {
    backgroundColor: '#2563EB',
    paddingVertical: SPACING.sm + 2,
    paddingHorizontal: SPACING.lg,
    borderRadius: BORDER_RADIUS.md,
    alignItems: 'center',
  },
  resumeButtonText: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: '800',
  },
  startBeginningButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    padding: SPACING.md,
    borderRadius: BORDER_RADIUS.lg,
    borderWidth: 1,
    borderColor: COLORS.border,
    gap: SPACING.md,
    ...SHADOWS.small,
  },
  startBeginningButtonCompleted: {
    borderColor: '#86EFAC',
    backgroundColor: '#DCFCE7',
  },
  startBeginningIcon: {
    fontSize: 22,
  },
  startBeginningText: {
    fontSize: 15,
    fontWeight: '800',
    color: COLORS.textDark,
  },
  startBeginningSub: {
    fontSize: 11,
    color: COLORS.textMedium,
    marginTop: 1,
  },
  actionArrow: {
    fontSize: 18,
    color: COLORS.primary,
    fontWeight: '900',
  },
  questionGridSection: {
    marginTop: SPACING.xs,
  },
  sectionLabel: {
    fontSize: 13,
    fontWeight: '800',
    color: COLORS.textDark,
    marginBottom: SPACING.sm,
  },
  questionGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SPACING.xs + 2,
  },
  gridPill: {
    backgroundColor: COLORS.white,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: BORDER_RADIUS.round,
    borderWidth: 1,
    borderColor: COLORS.borderStrong,
    minWidth: 44,
    alignItems: 'center',
  },
  gridPillActive: {
    backgroundColor: COLORS.primarySoft,
    borderColor: COLORS.primary,
    borderWidth: 1.5,
  },
  gridPillCompleted: {
    backgroundColor: '#DCFCE7',
    borderColor: '#10B981',
  },
  gridPillText: {
    fontSize: 12,
    fontWeight: '700',
    color: COLORS.textDark,
  },
  gridPillTextActive: {
    color: COLORS.primary,
    fontWeight: '900',
  },
  gridPillTextCompleted: {
    color: '#15803D',
    fontWeight: '900',
  },
  topicsSection: {
    marginTop: SPACING.xs,
  },
  topicCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
    padding: SPACING.md,
    borderRadius: BORDER_RADIUS.md,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: SPACING.xs + 2,
    ...SHADOWS.small,
  },
  topicCardCompleted: {
    borderColor: '#10B981',
    backgroundColor: '#DCFCE7',
    borderLeftWidth: 5,
    borderLeftColor: '#059669',
  },
  topicLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.md,
    flex: 1,
    marginRight: SPACING.sm,
  },
  topicNumber: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: COLORS.backgroundAlt,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topicNumberCompleted: {
    backgroundColor: '#10B981',
  },
  topicNumberText: {
    fontSize: 12,
    fontWeight: '800',
    color: COLORS.textMedium,
  },
  topicNumberTextCompleted: {
    color: COLORS.white,
    fontWeight: '900',
  },
  topicTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: COLORS.textDark,
    marginBottom: 4,
  },
  topicTitleCompleted: {
    color: '#14532D',
    fontWeight: '900',
  },
  topicMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
  },
  questionCountText: {
    fontSize: 11,
    fontWeight: '600',
    color: COLORS.textLight,
  },
  playTopicCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: COLORS.primarySoft,
    alignItems: 'center',
    justifyContent: 'center',
  },
  playTopicCircleCompleted: {
    backgroundColor: '#BBF7D0',
  },
  playTopicIcon: {
    fontSize: 12,
    color: COLORS.primary,
    marginLeft: 2,
  },
  playTopicIconCompleted: {
    color: '#059669',
  },
  switchBackToAllTopicsButton: {
    marginTop: SPACING.md,
    paddingVertical: 12,
    paddingHorizontal: SPACING.lg,
    backgroundColor: COLORS.white,
    borderRadius: BORDER_RADIUS.md,
    borderWidth: 1,
    borderColor: COLORS.primary,
    alignItems: 'center',
  },
  switchBackToAllTopicsText: {
    color: COLORS.primary,
    fontSize: 14,
    fontWeight: '800',
  },
  subjectSmartBar: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 14,
  },
  subjectSmartPill: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 9,
    paddingHorizontal: 12,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#BAE6FD',
    backgroundColor: '#F0F9FF',
    gap: 6,
  },
  subjectSmartText: {
    fontSize: 12,
    fontWeight: '800',
    color: '#0284C7',
    flex: 1,
  },
  subjectSmartArrow: {
    fontSize: 13,
    fontWeight: '900',
    color: '#0284C7',
  },
  sectionHeaderCard: {
    backgroundColor: '#F8FAFC',
    borderRadius: BORDER_RADIUS.md,
    padding: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 12,
  },
  sectionHeaderTitle: {
    fontSize: 16,
    fontWeight: '900',
    color: '#1E293B',
    marginBottom: 2,
  },
  sectionHeaderSub: {
    fontSize: 12,
    color: '#64748B',
    lineHeight: 16,
  },
  labsGridList: {
    gap: 12,
    paddingBottom: 20,
  },
  labItemCard: {
    borderRadius: 18,
    borderWidth: 1.5,
    padding: 14,
    ...SHADOWS.small,
  },
  gameItemCard: {
    borderRadius: 18,
    borderWidth: 1.5,
    padding: 14,
    ...SHADOWS.small,
  },
  labItemTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 8,
  },
  labIconCircle: {
    width: 48,
    height: 48,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    ...SHADOWS.small,
  },
  labBadgePill: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
    marginBottom: 4,
  },
  labBadgeText: {
    fontSize: 10,
    fontWeight: '800',
  },
  labItemTitle: {
    fontSize: 15,
    fontWeight: '900',
    color: '#1E293B',
  },
  labItemSub: {
    fontSize: 12,
    fontWeight: '700',
    color: '#475569',
    marginBottom: 6,
  },
  labItemPedagogy: {
    fontSize: 11,
    color: '#64748B',
    lineHeight: 15,
    marginBottom: 10,
  },
  labLaunchBtn: {
    paddingVertical: 8,
    borderRadius: 12,
    alignItems: 'center',
  },
  labLaunchBtnText: {
    fontSize: 12,
    fontWeight: '900',
    color: '#FFFFFF',
  },

  /* ========================================================================= */
  /* Skill 78 GRANULAR SKILL STYLES (LKG ENGLISH)                                */
  /* ========================================================================= */
  skillModeSwitcherContainer: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 14,
  },
  skillModeButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    borderRadius: 16,
    padding: 10,
    gap: 8,
  },
  skillModeButtonActiveSkills: {
    backgroundColor: '#FEF3C7',
    borderColor: '#F59E0B',
  },
  skillModeButtonActiveNcert: {
    backgroundColor: '#EFF6FF',
    borderColor: '#3B82F6',
  },
  skillModeBtnTitle: {
    fontSize: 12,
    fontWeight: '900',
    color: '#475569',
  },
  skillModeBtnTitleActiveSkills: {
    color: '#B45309',
  },
  skillModeBtnTitleActiveNcert: {
    color: '#1D4ED8',
  },
  skillModeBtnSub: {
    fontSize: 10,
    color: '#94A3B8',
    marginTop: 1,
  },
  skillModeCountBadge: {
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 10,
    backgroundColor: '#E2E8F0',
  },
  skillModeCountBadgeActiveSkills: {
    backgroundColor: '#F59E0B',
  },
  skillModeCountBadgeActiveNcert: {
    backgroundColor: '#3B82F6',
  },
  skillModeCountText: {
    fontSize: 11,
    fontWeight: '900',
    color: '#64748B',
  },
  skillModeCountTextActiveSkills: {
    color: '#FFFFFF',
  },
  skillModeCountTextActiveNcert: {
    color: '#FFFFFF',
  },
  skillAreaFilterContainer: {
    marginBottom: 12,
  },
  skillAreaFilterScroll: {
    gap: 8,
    paddingVertical: 2,
  },
  skillAreaFilterPill: {
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 20,
    backgroundColor: '#F1F5F9',
    borderWidth: 1,
    borderColor: '#CBD5E1',
  },
  skillAreaFilterPillActive: {
    backgroundColor: '#2563EB',
    borderColor: '#1D4ED8',
  },
  skillAreaFilterText: {
    fontSize: 12,
    fontWeight: '800',
    color: '#475569',
  },
  skillAreaFilterTextActive: {
    color: '#FFFFFF',
  },
  skillSkillsList: {
    gap: 10,
    paddingBottom: 20,
  },
  skillSkillCard: {
    borderRadius: 18,
    borderWidth: 1.5,
    padding: 12,
    ...SHADOWS.small,
  },
  skillSkillCardFinished: {
    borderColor: '#86EFAC',
    backgroundColor: '#F0FDF4',
  },
  skillSkillCardStarted: {
    borderColor: '#FDE68A',
  },
  skillSkillCardCurrent: {
    borderColor: '#60A5FA',
  },
  skillFinishedBanner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#DCFCE7',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
    marginBottom: 8,
  },
  skillFinishedTagPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  skillFinishedTagText: {
    fontSize: 11,
    fontWeight: '900',
    color: '#15803D',
  },
  skillFinishedScore: {
    fontSize: 11,
    fontWeight: '900',
    color: '#15803D',
  },
  skillCardMainRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  skillCodeBadge: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: '#3B82F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  skillCodeBadgeFinished: {
    backgroundColor: '#10B981',
  },
  skillCodeBadgeStarted: {
    backgroundColor: '#F59E0B',
  },
  skillCodeText: {
    fontSize: 12,
    fontWeight: '900',
    color: '#FFFFFF',
  },
  skillCodeTextFinished: {
    color: '#FFFFFF',
  },
  skillCodeTextStarted: {
    color: '#FFFFFF',
  },
  skillIconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    ...SHADOWS.small,
  },
  skillIconCircleFinished: {
    backgroundColor: '#DCFCE7',
  },
  skillIconText: {
    fontSize: 18,
  },
  skillInfoCol: {
    flex: 1,
  },
  skillCategoryTagRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 2,
  },
  skillCategoryPill: {
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderRadius: 6,
  },
  skillCategoryText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#0369A1',
  },
  skillAreaDot: {
    fontSize: 10,
    color: '#94A3B8',
  },
  skillAreaLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: '#64748B',
  },
  skillTitleText: {
    fontSize: 13,
    fontWeight: '900',
    color: '#1E293B',
    marginBottom: 1,
    lineHeight: 17,
  },
  skillTitleTextFinished: {
    color: '#166534',
  },
  skillSubTitleText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#64748B',
    marginBottom: 4,
  },
  skillSubTitleTextFinished: {
    color: '#15803D',
  },
  searchBarWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: BORDER_RADIUS.md,
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  searchBarIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  searchBarInput: {
    flex: 1,
    fontSize: 14,
    color: '#1E293B',
    fontWeight: '600',
    paddingVertical: 0,
  },
  searchBarClearBtn: {
    padding: 4,
  },
  searchBarClearText: {
    fontSize: 14,
    color: '#94A3B8',
    fontWeight: '800',
  },
});
