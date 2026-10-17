import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 5 MATHEMATICS (MATH-MAGIC 5)
// CHAPTER 7: TENTHS AND HUNDREDTHS (DECIMALS & PAISE)
// Comprehensive Curriculum Covering All Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_5_MATHS_LESSON_7_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Tenths (दसवाँ भाग - 0.1) & Millimeters to Centimeters
  // --------------------------------------------------------------------------
  {
    id: 'c5_m7_concept_tenth_01',
    grade: 5,
    subject: 'maths',
    chapter: 'Tenths and Hundredths (Decimals & Paise)',
    concept: 'Millimeters to Centimeters',
    difficulty: 'easy',
    type: 'mcq',
    question: '1 centimeter has 10 equal small divisions called millimeters (mm).\nWhat is 1 mm in centimeters?',
    visualEmoji: '📏 1 cm = 10 mm | 1 mm = ❓ cm',
    payload: {
      options: [
        { id: 'opt_t1', text: '0.1 cm', isCorrect: true },
        { id: 'opt_t2', text: '0.01 cm', isCorrect: false },
        { id: 'opt_t3', text: '1.0 cm', isCorrect: false },
      ],
    },
    explanation: '💡 Remember: **1 cm = 10 mm**. Therefore, **1 mm = 1/10 cm = 0.1 cm** (one tenth of a centimeter)!',
    points: 10,
  },
  {
    id: 'c5_m7_concept_tenth_02',
    grade: 5,
    subject: 'maths',
    chapter: 'Tenths and Hundredths (Decimals & Paise)',
    concept: 'Writing Lengths in Decimals',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'A pencil tail measures 3 cm and 6 mm. In decimal notation, its length is [BLANK] cm.',
    visualEmoji: '✏️ 3 cm + 6 mm = ❓ cm',
    payload: {
      correctAnswer: '3.6',
      wordBank: ['3.6', '3.06', '36', '0.36'],
      displayTemplate: '3 cm and 6 mm = [BLANK] cm.',
    },
    explanation: '💡 6 mm = 0.6 cm. So, 3 cm + 0.6 cm = **3.6 cm**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Hundredths (सवा भाग - 0.01) & Rupees to Paise
  // --------------------------------------------------------------------------
  {
    id: 'c5_m7_concept_paise_01',
    grade: 5,
    subject: 'maths',
    chapter: 'Tenths and Hundredths (Decimals & Paise)',
    concept: 'Rupees and Paise Decimal Conversion',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each amount in paise or fraction to its correct decimal Rupee amount:',
    visualEmoji: '🪙 ₹1 = 100 paise',
    payload: {
      pairs: [
        { id: 'm7_p1', left: '50 paise (1/2 Rupee)', right: '₹0.50' },
        { id: 'm7_p2', left: '25 paise (1/4 Rupee)', right: '₹0.25' },
        { id: 'm7_p3', left: '5 paise (5/100 Rupee)', right: '₹0.05' },
        { id: 'm7_p4', left: '75 paise (3/4 Rupee)', right: '₹0.75' },
      ],
    },
    explanation: '💡 1 Rupee = 100 paise. 5 paise is 5/100 = **₹0.05**, while 50 paise is 50/100 = **₹0.50**!',
    points: 15,
  },
  {
    id: 'c5_m7_concept_paise_02',
    grade: 5,
    subject: 'maths',
    chapter: 'Tenths and Hundredths (Decimals & Paise)',
    concept: 'Adding Decimals with Money',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Rahul bought an eraser for ₹2.50 and a pen for ₹6.75.\nWhat is the total amount he paid?',
    visualEmoji: '🛒 ₹2.50 + ₹6.75 = ❓',
    payload: {
      options: [
        { id: 'opt_add1', text: '₹9.25', isCorrect: true },
        { id: 'opt_add2', text: '₹8.25', isCorrect: false },
        { id: 'opt_add3', text: '₹9.75', isCorrect: false },
      ],
    },
    explanation: '💡 Align decimals: ₹2.50 + ₹6.75 = **₹9.25**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Decimal Place Value & Ordering
  // --------------------------------------------------------------------------
  {
    id: 'c5_m7_concept_ordering_01',
    grade: 5,
    subject: 'maths',
    chapter: 'Tenths and Hundredths (Decimals & Paise)',
    concept: 'Ordering Decimals from Smallest to Largest',
    difficulty: 'hard',
    type: 'drag_order',
    question: 'Arrange these decimals in ascending order (from smallest to largest):',
    visualEmoji: '📊 Smallest ➡️ Largest',
    payload: {
      tokens: ['0.05', '0.2', '0.5', '1.05'],
      scrambled: ['0.5', '0.05', '1.05', '0.2'],
      correctSequence: ['0.05', '0.2', '0.5', '1.05'],
    },
    explanation: '💡 Comparing place values: 0.05 (5 hundredths) < 0.20 (2 tenths) < 0.50 (5 tenths) < 1.05 (1 whole and 5 hundredths)!',
    points: 15,
  },
];
