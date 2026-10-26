/**
 * examCategoryService.js
 * Competitive Examination Categories for Champion's / Open Division.
 * Allows aspirants to tailor questions to their target examination syllabus.
 */

export const EXAM_CATEGORIES = [
  {
    id: 'ALL',
    name: 'All Competitive Examinations',
    shortName: 'All Exams (Mixed)',
    badge: '🏛️',
    description: 'Comprehensive general studies: Balanced mix of Indian Polity, History, Economy, Science & Current Affairs.',
    targetExams: 'UPSC, SSC, Defence, Banking, State PSC',
    subjects: ['Polity', 'Economy', 'History', 'Geography', 'Science', 'GK', 'Current Affairs', 'Literature']
  },
  {
    id: 'SSC',
    name: 'SSC (CGL, CHSL, CPO, MTS & GD)',
    shortName: 'SSC Exams',
    badge: '📋',
    description: 'Staff Selection Commission syllabus: General Awareness, Static GK, Indian History, Constitution & General Science.',
    targetExams: 'SSC CGL, CHSL, MTS, CPO, GD Constable, Steno',
    subjects: ['GK', 'Polity', 'History', 'Geography', 'Science', 'Economy', 'Current Affairs']
  },
  {
    id: 'NDA_CDS',
    name: 'Defence (NDA, CDS & AFCAT)',
    shortName: 'NDA / Defence',
    badge: '🛡️',
    description: 'UPSC Defence Services pattern: General Knowledge, Indian Military History, World Geography, Physics & Indian Polity.',
    targetExams: 'NDA, CDS, AFCAT, CAPF AC, Indian Coast Guard',
    subjects: ['History', 'Geography', 'Science', 'Polity', 'GK', 'Current Affairs']
  },
  {
    id: 'NEET_JEE',
    name: 'NEET & Medical / Science Foundation',
    shortName: 'NEET / Medical',
    badge: '🩺',
    description: 'Core Science syllabus: Biology (Botany & Zoology), Chemistry, Physics principles & Environmental Ecology.',
    targetExams: 'NEET UG, Nursing, Paramedical, Pharmacy Entrance',
    subjects: ['Science', 'Biology', 'Chemistry', 'Physics', 'Environment']
  },
  {
    id: 'BANKING',
    name: 'Banking & Insurance (IBPS, SBI & RBI)',
    shortName: 'Banking Exams',
    badge: '🏦',
    description: 'Financial awareness: RBI Monetary Policy, Banking history, Indian Financial System, Macroeconomics & Current Affairs.',
    targetExams: 'IBPS PO/Clerk, SBI PO/Clerk, RBI Grade B/Assistant, LIC',
    subjects: ['Economy', 'Current Affairs', 'GK', 'Maths']
  },
  {
    id: 'RAILWAYS',
    name: 'Railways (RRB NTPC, Group D & ALP)',
    shortName: 'Railways RRB',
    badge: '🚆',
    description: 'Railway Recruitment Board focus: General Science, Indian Railways history, Indian Geography & General Awareness.',
    targetExams: 'RRB NTPC, Group D, ALP, RPF SI & Constable',
    subjects: ['Science', 'Geography', 'History', 'GK', 'Current Affairs']
  },
  {
    id: 'NCERT_6_10',
    name: 'NCERT Foundation (Class 6th to 10th Standard)',
    shortName: 'NCERT 6th–10th',
    badge: '📚',
    description: 'School textbook curriculum: Social Studies (History, Geography, Civics), General Science & Fundamental Mathematics.',
    targetExams: 'School Olympiads, NTSE, Foundation GS for all competitive exams',
    subjects: ['History', 'Geography', 'Science', 'Polity', 'Maths', 'English']
  },
  {
    id: 'NCERT_11_12',
    name: 'NCERT Advanced (Class 11th to 12th Standard)',
    shortName: 'NCERT 11th–12th',
    badge: '🎓',
    description: 'Higher Secondary curriculum: Indian Constitution at Work, Macroeconomics, Modern Indian History & Core Sciences.',
    targetExams: 'CUET UG, Board Examinations, Civil Services Foundation',
    subjects: ['Polity', 'Economy', 'History', 'Science', 'Geography']
  },
  {
    id: 'UPSC_PSC',
    name: 'Civil Services (UPSC CSE & State PSC)',
    shortName: 'UPSC / State PSC',
    badge: '⚖️',
    description: 'Civil Services Prelims standard: Constitution & Governance, Economy, Modern History, Ecology & International Affairs.',
    targetExams: 'UPSC Civil Services, UPPSC, BPSC, MPPSC, MPSC, RAS',
    subjects: ['Polity', 'Economy', 'History', 'Geography', 'Current Affairs', 'Environment']
  }
];

const STORAGE_KEY = 'brainleague_exam_category';

export const examCategoryService = {
  getCategories() {
    return EXAM_CATEGORIES;
  },

  getActiveCategory() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored && EXAM_CATEGORIES.some(c => c.id === stored)) {
        return stored;
      }
      return 'ALL';
    } catch {
      return 'ALL';
    }
  },

  getActiveCategoryMeta() {
    const id = this.getActiveCategory();
    return EXAM_CATEGORIES.find(c => c.id === id) || EXAM_CATEGORIES[0];
  },

  setActiveCategory(categoryId) {
    try {
      localStorage.setItem(STORAGE_KEY, categoryId);
    } catch {}
  }
};

export default examCategoryService;
