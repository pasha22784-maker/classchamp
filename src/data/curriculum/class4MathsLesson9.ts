import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 4 MATHEMATICS (MATH-MAGIC 4)
// CHAPTER 9: TABLES AND SHARES (DIVISION)
// Comprehensive Curriculum Covering All Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_4_MATHS_LESSON_9_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Division as Equal Sharing (बराबर बाँटना)
  // --------------------------------------------------------------------------
  {
    id: 'c4_m9_concept_share_01',
    grade: 4,
    subject: 'maths',
    chapter: 'Tables and Shares (Division)',
    concept: 'Equal Sharing Division',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Grandma has 28 sweet laddoos 🟡. She wants to share them equally among her 4 grandchildren.\nHow many laddoos does each grandchild get?',
    visualEmoji: '🟡 28 ÷ 4 = ❓',
    payload: {
      options: [
        { id: 'opt_sh1', text: '7 laddoos each (28 ÷ 4 = 7)', isCorrect: true },
        { id: 'opt_sh2', text: '6 laddoos each', isCorrect: false },
        { id: 'opt_sh3', text: '8 laddoos each', isCorrect: false },
      ],
    },
    explanation: '💡 28 shared equally into 4 groups: 28 ÷ 4 = **7 laddoos each**!',
    points: 10,
  },
  {
    id: 'c4_m9_concept_share_02',
    grade: 4,
    subject: 'maths',
    chapter: 'Tables and Shares (Division)',
    concept: 'Simple Division Blank',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'There are 45 books 📚 placed equally on 5 library shelves. Each shelf has [BLANK] books.',
    visualEmoji: '📚 45 ÷ 5 = ❓',
    payload: {
      correctAnswer: '9',
      wordBank: ['9', '8', '7', '10'],
      displayTemplate: '45 ÷ 5 = [BLANK]',
    },
    explanation: '💡 5 × 9 = 45, so 45 ÷ 5 = **9 books**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Division with Remainder (शेषफल)
  // --------------------------------------------------------------------------
  {
    id: 'c4_m9_concept_rem_01',
    grade: 4,
    subject: 'maths',
    chapter: 'Tables and Shares (Division)',
    concept: 'Finding Quotient and Remainder',
    difficulty: 'medium',
    type: 'mcq',
    question: 'If you divide 25 marbles among 4 players equally, what is the quotient and the remainder?',
    visualEmoji: '🔮 25 ÷ 4 ➔ Q: ❓, R: ❓',
    payload: {
      options: [
        { id: 'opt_rm1', text: 'Quotient = 6, Remainder = 1 (4 × 6 = 24, 25 - 24 = 1)', isCorrect: true },
        { id: 'opt_rm2', text: 'Quotient = 5, Remainder = 5', isCorrect: false },
        { id: 'opt_rm3', text: 'Quotient = 6, Remainder = 2', isCorrect: false },
      ],
    },
    explanation: '💡 4 × 6 = 24. 25 - 24 leaves **1 as remainder**! So each child gets 6 marbles and 1 marble is left over.',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Table Construction by Adding Tables
  // --------------------------------------------------------------------------
  {
    id: 'c4_m9_concept_tbl_01',
    grade: 4,
    subject: 'maths',
    chapter: 'Tables and Shares (Division)',
    concept: 'Making Table of 7 from 5 and 2',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'Bunty made the Table of 7 by adding the Table of 5 and Table of [BLANK].',
    visualEmoji: '✖️ 7 = 5 + ❓',
    payload: {
      correctAnswer: '2',
      wordBank: ['2', '3', '4', '1'],
      displayTemplate: 'Table of 7 = Table of 5 + Table of [BLANK]',
    },
    explanation: '💡 Since 5 + 2 = 7, you can make the table of 7 by adding products of 5 and 2 (e.g. 5×4 + 2×4 = 20 + 8 = 28)!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 4: Division Fact Families & Ordering
  // --------------------------------------------------------------------------
  {
    id: 'c4_m9_concept_match_01',
    grade: 4,
    subject: 'maths',
    chapter: 'Tables and Shares (Division)',
    concept: 'Multiplication to Division Fact Match',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match the multiplication fact with its corresponding division equation:',
    visualEmoji: '✖️ ➔ ➗',
    payload: {
      pairs: [
        { id: 'ts_p1', left: '6 × 8 = 48', right: '48 ÷ 6 = 8' },
        { id: 'ts_p2', left: '7 × 9 = 63', right: '63 ÷ 7 = 9' },
        { id: 'ts_p3', left: '5 × 12 = 60', right: '60 ÷ 5 = 12' },
        { id: 'ts_p4', left: '8 × 4 = 32', right: '32 ÷ 8 = 4' },
      ],
    },
    explanation: '💡 Division is the inverse of multiplication: If A × B = C, then C ÷ A = B!',
    points: 15,
  },
  {
    id: 'c4_m9_concept_order_01',
    grade: 4,
    subject: 'maths',
    chapter: 'Tables and Shares (Division)',
    concept: 'Long Division Step Sequence',
    difficulty: 'medium',
    type: 'drag_order',
    question: 'Arrange the four basic steps of standard division in their correct repetitive order:',
    visualEmoji: '➗ ➔ ✖️ ➔ ➖ ➔ ⬇️',
    payload: {
      tokens: ['Divide (find quotient)', 'Multiply (quotient × divisor)', 'Subtract (find difference)', 'Bring down the next digit'],
      scrambled: ['Subtract (find difference)', 'Divide (find quotient)', 'Bring down the next digit', 'Multiply (quotient × divisor)'],
      correctSequence: ['Divide (find quotient)', 'Multiply (quotient × divisor)', 'Subtract (find difference)', 'Bring down the next digit'],
    },
    explanation: '💡 Standard long division steps: **Divide ➔ Multiply ➔ Subtract ➔ Bring down**!',
    points: 15,
  },
];
