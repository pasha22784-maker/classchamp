import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 6 MATHEMATICS
// CHAPTER 6: FRACTIONS (OPERATIONS & MIXED FRACTIONS)
// Comprehensive Curriculum Covering All Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_6_MATHS_LESSON_6_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Proper, Improper & Mixed Fractions
  // --------------------------------------------------------------------------
  {
    id: 'c6_m6_concept_type_01',
    grade: 6,
    subject: 'maths',
    chapter: 'Fractions (Operations & Mixed Fractions)',
    concept: 'Types of Fractions',
    difficulty: 'easy',
    type: 'mcq',
    question: 'A fraction where the numerator is greater than or equal to the denominator (such as 9/4) is called what?',
    visualEmoji: '🍰 9/4 = Improper Fraction',
    payload: {
      options: [
        { id: 'opt_fr1', text: 'Improper Fraction', isCorrect: true },
        { id: 'opt_fr2', text: 'Proper Fraction', isCorrect: false },
        { id: 'opt_fr3', text: 'Unit Fraction', isCorrect: false },
      ],
    },
    explanation: '💡 Remember: In a **proper fraction**, numerator is smaller than denominator (< 1). In an **improper fraction**, numerator is greater than or equal to denominator (>= 1)!',
    points: 10,
  },
  {
    id: 'c6_m6_concept_type_02',
    grade: 6,
    subject: 'maths',
    chapter: 'Fractions (Operations & Mixed Fractions)',
    concept: 'Mixed Fraction to Improper Fraction',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'Convert the mixed fraction 2 3/5 into an improper fraction: (2 × 5 + 3)/5 = [BLANK]/5.',
    visualEmoji: '🍰 2 3/5 = ❓/5',
    payload: {
      correctAnswer: '13',
      wordBank: ['13', '10', '11', '15'],
      displayTemplate: 'Improper fraction = [BLANK]/5.',
    },
    explanation: '💡 Formula: (Whole Number × Denominator + Numerator)/Denominator = (2 × 5 + 3)/5 = **13/5**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Equivalent Fractions & Operations
  // --------------------------------------------------------------------------
  {
    id: 'c6_m6_concept_eq_01',
    grade: 6,
    subject: 'maths',
    chapter: 'Fractions (Operations & Mixed Fractions)',
    concept: 'Equivalent Fractions Match',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each fraction to its simplest equivalent form:',
    visualEmoji: '⚖️ Equivalent Fractions',
    payload: {
      pairs: [
        { id: 'm6_p1', left: '15/20', right: '3/4 (divide both by 5)' },
        { id: 'm6_p2', left: '18/24', right: '3/4 (divide both by 6)' },
        { id: 'm6_p3', left: '12/36', right: '1/3 (divide both by 12)' },
        { id: 'm6_p4', left: '14/21', right: '2/3 (divide both by 7)' },
      ],
    },
    explanation: '💡 To find the simplest form, divide both numerator and denominator by their HCF!',
    points: 15,
  },
  {
    id: 'c6_m6_concept_calc_01',
    grade: 6,
    subject: 'maths',
    chapter: 'Fractions (Operations & Mixed Fractions)',
    concept: 'Addition of Unlike Fractions',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Calculate: 1/3 + 1/4 = ? (Find LCM of denominators 3 and 4)',
    visualEmoji: '➕ 1/3 + 1/4 = ❓',
    payload: {
      options: [
        { id: 'opt_addf1', text: '7/12', isCorrect: true },
        { id: 'opt_addf2', text: '2/7', isCorrect: false },
        { id: 'opt_addf3', text: '1/12', isCorrect: false },
      ],
    },
    explanation: '💡 For unlike fractions: find LCM(3, 4) = 12. Convert: 4/12 + 3/12 = **7/12**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Ordering Fractions with Common Denominator
  // --------------------------------------------------------------------------
  {
    id: 'c6_m6_concept_order_01',
    grade: 6,
    subject: 'maths',
    chapter: 'Fractions (Operations & Mixed Fractions)',
    concept: 'Ascending Order of Fractions',
    difficulty: 'hard',
    type: 'drag_order',
    question: 'Arrange these fractions in ascending order (smallest to largest):',
    visualEmoji: '📊 Smallest ➡️ Largest Fraction',
    payload: {
      tokens: ['1/8', '3/8', '5/8', '7/8'],
      scrambled: ['7/8', '1/8', '5/8', '3/8'],
      correctSequence: ['1/8', '3/8', '5/8', '7/8'],
    },
    explanation: '💡 When denominators are equal (like fractions), the fraction with the smaller numerator is smaller: 1/8 < 3/8 < 5/8 < 7/8!',
    points: 15,
  },
];
