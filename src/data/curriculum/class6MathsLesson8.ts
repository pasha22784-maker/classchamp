import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 6 MATHEMATICS
// CHAPTER 8: DATA HANDLING (TALLY & BAR GRAPHS)
// Comprehensive Curriculum Covering All Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_6_MATHS_LESSON_8_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Tally Marks & Frequency
  // --------------------------------------------------------------------------
  {
    id: 'c6_m8_concept_tally_01',
    grade: 6,
    subject: 'maths',
    chapter: 'Data Handling (Tally & Bar Graphs)',
    concept: 'Reading Tally Mark Bundles',
    difficulty: 'easy',
    type: 'mcq',
    question: 'In a frequency table, tally marks are grouped in bundles of 5. How is the number 13 represented?',
    visualEmoji: '📊 Tally Marks: 13',
    payload: {
      options: [
        { id: 'opt_tl1', text: 'Two bundles of 5 and 3 single lines (卌 卌 ||| = 13)', isCorrect: true },
        { id: 'opt_tl2', text: 'Three bundles of 4 and 1 single line', isCorrect: false },
        { id: 'opt_tl3', text: '13 single lines without bundling', isCorrect: false },
      ],
    },
    explanation: '💡 Remember: Tally marks use four vertical bars crossed diagonally by a fifth bar for groups of 5. So 13 = **5 + 5 + 3**!',
    points: 10,
  },
  {
    id: 'c6_m8_concept_picto_01',
    grade: 6,
    subject: 'maths',
    chapter: 'Data Handling (Tally & Bar Graphs)',
    concept: 'Pictograph Scaling',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'In a pictograph, one symbol 🚗 represents 10 cars. To represent 60 cars, [BLANK] car symbols must be drawn.',
    visualEmoji: '🚗 = 10 cars ➡️ 60 cars = ❓',
    payload: {
      correctAnswer: '6',
      wordBank: ['6', '60', '10', '5'],
      displayTemplate: 'Number of symbols needed = [BLANK].',
    },
    explanation: '💡 Formula: Total quantity ÷ Scale = 60 ÷ 10 = **6 symbols**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Reading & Interpreting Bar Graphs
  // --------------------------------------------------------------------------
  {
    id: 'c6_m8_concept_graph_01',
    grade: 6,
    subject: 'maths',
    chapter: 'Data Handling (Tally & Bar Graphs)',
    concept: 'Components of a Bar Graph Match',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each feature of a bar graph with its correct description:',
    visualEmoji: '📈 Bar Graph Features',
    payload: {
      pairs: [
        { id: 'm8_p1', left: 'Scale', right: 'Ratio determining how much quantity each unit grid represents' },
        { id: 'm8_p2', left: 'Height of Bar', right: 'Represents the numerical value or frequency of the category' },
        { id: 'm8_p3', left: 'Width of Bars', right: 'Kept uniform (equal) for all categories' },
        { id: 'm8_p4', left: 'Spacing between Bars', right: 'Equal gaps maintained throughout the graph' },
      ],
    },
    explanation: '💡 In a standard bar graph, all bars have equal width and equal spacing, while their heights represent the quantities!',
    points: 15,
  },
  {
    id: 'c6_m8_concept_graph_02',
    grade: 6,
    subject: 'maths',
    chapter: 'Data Handling (Tally & Bar Graphs)',
    concept: 'Analyzing Bar Heights',
    difficulty: 'medium',
    type: 'mcq',
    question: 'A bar graph scale is 1 unit length = 5 students.\nThe bar for "Cricket" is 8 units high, and "Football" is 6 units high.\nHow many more students prefer Cricket than Football?',
    visualEmoji: '🏏 vs ⚽ Bar Heights',
    payload: {
      options: [
        { id: 'opt_bg1', text: '10 students (Difference = 8 - 6 = 2 units × 5 = 10 students)', isCorrect: true },
        { id: 'opt_bg2', text: '2 students', isCorrect: false },
        { id: 'opt_bg3', text: '14 students', isCorrect: false },
      ],
    },
    explanation: '💡 Cricket = 8 × 5 = 40. Football = 6 × 5 = 30. Difference = 40 - 30 = **10 students** (or 2 units × 5 = 10)!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Steps in Data Handling Process
  // --------------------------------------------------------------------------
  {
    id: 'c6_m8_concept_order_01',
    grade: 6,
    subject: 'maths',
    chapter: 'Data Handling (Tally & Bar Graphs)',
    concept: 'Chronological Steps in Data Handling',
    difficulty: 'hard',
    type: 'drag_order',
    question: 'Arrange the stages of statistical investigation in the correct order:',
    visualEmoji: '📊 Investigation Steps',
    payload: {
      tokens: [
        '1. Collection of raw data through survey',
        '2. Organization of data using tally marks',
        '3. Representation in a Bar Graph with chosen scale',
        '4. Interpretation and drawing conclusions',
      ],
      scrambled: [
        '3. Representation in a Bar Graph with chosen scale',
        '1. Collection of raw data through survey',
        '4. Interpretation and drawing conclusions',
        '2. Organization of data using tally marks',
      ],
      correctSequence: [
        '1. Collection of raw data through survey',
        '2. Organization of data using tally marks',
        '3. Representation in a Bar Graph with chosen scale',
        '4. Interpretation and drawing conclusions',
      ],
    },
    explanation: '💡 Scientific sequence: Collection ➡️ Organization ➡️ Representation ➡️ Interpretation!',
    points: 15,
  },
];
