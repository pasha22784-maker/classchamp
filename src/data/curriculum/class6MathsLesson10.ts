import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 6 MATHEMATICS
// CHAPTER 10: ALGEBRA (VARIABLES & EXPRESSIONS)
// Comprehensive Curriculum Covering All Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_6_MATHS_LESSON_10_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: What is a Variable? Matchstick Patterns
  // --------------------------------------------------------------------------
  {
    id: 'c6_m10_concept_var_01',
    grade: 6,
    subject: 'maths',
    chapter: 'Algebra (Variables & Expressions)',
    concept: 'Matchstick Pattern for Letter "L"',
    difficulty: 'easy',
    type: 'mcq',
    question: 'To form one letter "L", 2 matchsticks are used. How many matchsticks are needed to form "n" letters of "L"?',
    visualEmoji: '🥢 L L L... Pattern',
    payload: {
      options: [
        { id: 'opt_alg1', text: '2n matchsticks (where n is the number of Ls)', isCorrect: true },
        { id: 'opt_alg2', text: 'n + 2 matchsticks', isCorrect: false },
        { id: 'opt_alg3', text: '2 + n matchsticks', isCorrect: false },
      ],
    },
    explanation: '💡 Remember: In algebra, a **variable (n)** represents an unknown number. For n letter Ls, the rule is **2n**!',
    points: 10,
  },
  {
    id: 'c6_m10_concept_var_02',
    grade: 6,
    subject: 'maths',
    chapter: 'Algebra (Variables & Expressions)',
    concept: 'Forming Algebraic Expressions',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'Write the algebraic expression for: "7 added to twice a number x": 2x + [BLANK].',
    visualEmoji: '➕ 2x + ❓',
    payload: {
      correctAnswer: '7',
      wordBank: ['7', '2', '14', 'x'],
      displayTemplate: 'Twice x plus 7 = 2x + [BLANK].',
    },
    explanation: '💡 Twice x is 2x; adding 7 gives **2x + 7**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Translating Words into Expressions
  // --------------------------------------------------------------------------
  {
    id: 'c6_m10_concept_trans_01',
    grade: 6,
    subject: 'maths',
    chapter: 'Algebra (Variables & Expressions)',
    concept: 'Word Statements to Algebraic Form Match',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each English statement to its correct algebraic expression:',
    visualEmoji: '🔤 ➡️ 🔢 Algebraic Match',
    payload: {
      pairs: [
        { id: 'm10_p1', left: 'p multiplied by 4 and then 3 added', right: '4p + 3' },
        { id: 'm10_p2', left: '5 subtracted from y', right: 'y - 5' },
        { id: 'm10_p3', left: 'z divided by 8', right: 'z / 8' },
        { id: 'm10_p4', left: '10 subtracted from twice x', right: '2x - 10' },
      ],
    },
    explanation: '💡 Word rules translate directly into operators: sum (+), difference (-), product (×), quotient (÷)!',
    points: 15,
  },
  {
    id: 'c6_m10_concept_eq_01',
    grade: 6,
    subject: 'maths',
    chapter: 'Algebra (Variables & Expressions)',
    concept: 'Solving Simple Linear Equation',
    difficulty: 'medium',
    type: 'mcq',
    question: 'What is the value of variable x that satisfies the equation: x + 7 = 15?',
    visualEmoji: '⚖️ x + 7 = 15',
    payload: {
      options: [
        { id: 'opt_sol1', text: 'x = 8 (because 8 + 7 = 15)', isCorrect: true },
        { id: 'opt_sol2', text: 'x = 22', isCorrect: false },
        { id: 'opt_sol3', text: 'x = 7', isCorrect: false },
      ],
    },
    explanation: '💡 Subtract 7 from both sides: x = 15 - 7 = **8**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Solving an Equation Step-by-Step
  // --------------------------------------------------------------------------
  {
    id: 'c6_m10_concept_order_01',
    grade: 6,
    subject: 'maths',
    chapter: 'Algebra (Variables & Expressions)',
    concept: 'Solving 3y - 5 = 10 in Proper Order',
    difficulty: 'hard',
    type: 'drag_order',
    question: 'Arrange the algebraic steps to solve the equation 3y - 5 = 10:',
    visualEmoji: '🧩 Step-by-Step Algebra',
    payload: {
      tokens: [
        'Start with equation: 3y - 5 = 10',
        'Add 5 to both sides: 3y = 10 + 5 = 15',
        'Divide both sides by 3: y = 15 / 3',
        'Obtain final solution: y = 5',
      ],
      scrambled: [
        'Divide both sides by 3: y = 15 / 3',
        'Start with equation: 3y - 5 = 10',
        'Obtain final solution: y = 5',
        'Add 5 to both sides: 3y = 10 + 5 = 15',
      ],
      correctSequence: [
        'Start with equation: 3y - 5 = 10',
        'Add 5 to both sides: 3y = 10 + 5 = 15',
        'Divide both sides by 3: y = 15 / 3',
        'Obtain final solution: y = 5',
      ],
    },
    explanation: '💡 First isolate the variable term by adding 5 (3y = 15), then divide by 3 to get **y = 5**!',
    points: 15,
  },
];
