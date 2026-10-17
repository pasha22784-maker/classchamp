import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 6 MATHEMATICS
// CHAPTER 7: DECIMALS & PLACE VALUES
// Comprehensive Curriculum Covering All Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_6_MATHS_LESSON_7_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Decimal Place Value (Tenths, Hundredths, Thousandths)
  // --------------------------------------------------------------------------
  {
    id: 'c6_m7_concept_place_01',
    grade: 6,
    subject: 'maths',
    chapter: 'Decimals & Place Values',
    concept: 'Thousandths Place Value',
    difficulty: 'easy',
    type: 'mcq',
    question: 'In the decimal number 14.285, what is the place value of the digit "5"?',
    visualEmoji: '🪙 14 . 2 8 [5]',
    payload: {
      options: [
        { id: 'opt_dec1', text: '5 thousandths (5/1000 or 0.005)', isCorrect: true },
        { id: 'opt_dec2', text: '5 hundredths (0.05)', isCorrect: false },
        { id: 'opt_dec3', text: '5 units (5)', isCorrect: false },
      ],
    },
    explanation: '💡 In 14.285: 2 is in Tenths place, 8 is in Hundredths place, and **5 is in Thousandths place (5/1000)**!',
    points: 10,
  },
  {
    id: 'c6_m7_concept_place_02',
    grade: 6,
    subject: 'maths',
    chapter: 'Decimals & Place Values',
    concept: 'Fraction to Decimal Conversion',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'Write the fraction 7/100 as a decimal number: [BLANK].',
    visualEmoji: '➗ 7/100 = ❓',
    payload: {
      correctAnswer: '0.07',
      wordBank: ['0.07', '0.7', '7.0', '0.007'],
      displayTemplate: '7/100 = [BLANK].',
    },
    explanation: '💡 Dividing by 100 shifts the decimal point 2 places to the left: 7/100 = **0.07**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Unit Conversions with Decimals
  // --------------------------------------------------------------------------
  {
    id: 'c6_m7_concept_unit_01',
    grade: 6,
    subject: 'maths',
    chapter: 'Decimals & Place Values',
    concept: 'Measurement Decimal Units Match',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each measurement to its correct decimal converted value:',
    visualEmoji: '📏 Decimal Conversions',
    payload: {
      pairs: [
        { id: 'm7_p1', left: '750 grams', right: '0.75 kg (divide by 1000)' },
        { id: 'm7_p2', left: '25 cm', right: '0.25 m (divide by 100)' },
        { id: 'm7_p3', left: '5 mm', right: '0.5 cm (divide by 10)' },
        { id: 'm7_p4', left: '8 paise', right: '₹0.08 (divide by 100)' },
      ],
    },
    explanation: '💡 Conversions: 1 kg = 1000g, 1m = 100cm, 1cm = 10mm, ₹1 = 100 paise!',
    points: 15,
  },
  {
    id: 'c6_m7_concept_calc_01',
    grade: 6,
    subject: 'maths',
    chapter: 'Decimals & Place Values',
    concept: 'Subtraction of Decimals',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Subtract: 20.75 - 14.50 = ?',
    visualEmoji: '➖ 20.75 - 14.50 = ❓',
    payload: {
      options: [
        { id: 'opt_sub1', text: '6.25 (20.75 - 14.50 = 6.25)', isCorrect: true },
        { id: 'opt_sub2', text: '5.25', isCorrect: false },
        { id: 'opt_sub3', text: '6.75', isCorrect: false },
      ],
    },
    explanation: '💡 Align decimals vertically: 20.75 - 14.50 = **6.25**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Ordering Decimals by Value
  // --------------------------------------------------------------------------
  {
    id: 'c6_m7_concept_order_01',
    grade: 6,
    subject: 'maths',
    chapter: 'Decimals & Place Values',
    concept: 'Ascending Order of Decimals',
    difficulty: 'hard',
    type: 'drag_order',
    question: 'Arrange these decimals in ascending order (smallest to largest):',
    visualEmoji: '📊 Smallest ➡️ Largest Decimals',
    payload: {
      tokens: ['0.008', '0.08', '0.8', '8.0'],
      scrambled: ['8.0', '0.08', '0.008', '0.8'],
      correctSequence: ['0.008', '0.08', '0.8', '8.0'],
    },
    explanation: '💡 Comparing place values: 8 thousandths (0.008) < 8 hundredths (0.08) < 8 tenths (0.8) < 8 wholes (8.0)!',
    points: 15,
  },
];
