import { Question, Grade, Subject, ChapterLesson } from '../types';
import { MOCK_QUESTIONS } from './mockQuestions';
import { getChaptersForGradeSubject } from './chaptersData';

export interface DayMission {
  dayNumber: number;
  termNumber: 1 | 2 | 3 | 4;
  weekNumber: number;
  dayOfWeek: number; // 1 to 7
  title: string;
  subject: Subject;
  chapter: string;
  concept: string;
  badgeEmoji: string;
  isMilestone: boolean;
}

// 365-Day Syllabus Mapping Engine — 100% NCERT Maths, English & Hindi Aligned
export const getDayMissionInfo = (grade: Grade, dayNumber: number): DayMission => {
  const safeDay = Math.min(Math.max(1, dayNumber), 365);
  const weekNumber = Math.ceil(safeDay / 7);
  const dayOfWeek = ((safeDay - 1) % 7) + 1; // 1 (Mon) to 7 (Sun)
  
  let termNumber: 1 | 2 | 3 | 4 = 1;
  if (safeDay > 270) termNumber = 4;
  else if (safeDay > 180) termNumber = 3;
  else if (safeDay > 90) termNumber = 2;

  const isMilestone = dayOfWeek === 7 || safeDay % 30 === 0;

  // 3-Subject Rotation: Day 1 = Maths, Day 2 = English, Day 3 = Hindi, Day 4 = Maths...
  const subjectCycle: Subject[] = ['maths', 'english', 'hindi'];
  const subject: Subject = subjectCycle[(safeDay - 1) % 3];

  const chapters = getChaptersForGradeSubject(grade, subject);
  const chapterIndex = Math.floor((safeDay - 1) / 3) % (chapters.length || 1);
  const currentChapter: ChapterLesson = chapters[chapterIndex] || {
    id: `ncert_${grade}_${subject}_${chapterIndex + 1}`,
    number: chapterIndex + 1,
    title: subject === 'maths' ? 'NCERT Mathematics' : subject === 'english' ? 'NCERT English' : 'NCERT हिंदी (Hindi)',
    grade,
    subject,
    icon: subject === 'maths' ? '📐' : subject === 'english' ? '📚' : '🇮🇳',
    conceptSummary: typeof grade === 'number' ? `Official NCERT syllabus for Class ${grade}` : `Foundational syllabus for ${grade}`,
  };

  const subjectLabel = subject === 'maths' ? 'Maths' : subject === 'english' ? 'English' : 'Hindi';

  return {
    dayNumber: safeDay,
    termNumber,
    weekNumber,
    dayOfWeek,
    title: `Day ${safeDay}: ${subjectLabel} • ${currentChapter.title}`,
    subject,
    chapter: currentChapter.title,
    concept: currentChapter.conceptSummary,
    badgeEmoji: currentChapter.icon,
    isMilestone,
  };
};

import { generateQuestionsForSession } from './questionGenerator';

export const getQuestionsForDay = (grade: Grade, dayNumber: number): Question[] => {
  const mission = getDayMissionInfo(grade, dayNumber);
  return generateQuestionsForSession(grade, mission.subject, mission.chapter);
};
