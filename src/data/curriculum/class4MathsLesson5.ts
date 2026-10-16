import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 4 MATHEMATICS (MATH-MAGIC 4)
// CHAPTER 5: THE WAY THE WORLD LOOKS (3D PERSPECTIVES)
// Comprehensive Curriculum Covering All Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_4_MATHS_LESSON_5_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Perspective & Distance Effect (दूर और पास का अंतर)
  // --------------------------------------------------------------------------
  {
    id: 'c4_m5_concept_persp_01',
    grade: 4,
    subject: 'maths',
    chapter: 'The Way The World Looks (3D Perspectives)',
    concept: 'Perspective Illusion of Railway Tracks',
    difficulty: 'easy',
    type: 'mcq',
    question: 'When you stand looking down a straight railway track 🛤️, why do the two parallel rails appear to meet together far away?',
    visualEmoji: '🛤️ 👁️',
    payload: {
      options: [
        { id: 'opt_persp1', text: 'Because objects appear smaller and closer together as distance increases', isCorrect: true },
        { id: 'opt_persp2', text: 'Because the tracks actually cross each other', isCorrect: false },
        { id: 'opt_persp3', text: 'Because the train bends the metal rails', isCorrect: false },
      ],
    },
    explanation: '💡 This is called **perspective**! Things look big and wide when near, but look narrow and small when far away.',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Dice Opposite Faces Rule (पासे के आमने-सामने के फलक)
  // --------------------------------------------------------------------------
  {
    id: 'c4_m5_concept_dice_01',
    grade: 4,
    subject: 'maths',
    chapter: 'The Way The World Looks (3D Perspectives)',
    concept: 'Sum of Opposite Faces on a Die',
    difficulty: 'easy',
    type: 'mcq',
    question: 'On a standard playing dice 🎲, what is the sum of dots on any two opposite faces?',
    visualEmoji: '🎲 ❓ + ❓ = 7️⃣',
    payload: {
      options: [
        { id: 'opt_dc1', text: 'Always 7 (Opposite faces add up to 7)', isCorrect: true },
        { id: 'opt_dc2', text: 'Always 10', isCorrect: false },
        { id: 'opt_dc3', text: 'Always 6', isCorrect: false },
      ],
    },
    explanation: '💡 NCERT Math-Magic Rule: The numbers on opposite faces of a standard die always add up to **7** (1+6=7, 2+5=7, 3+4=7)!',
    points: 10,
  },
  {
    id: 'c4_m5_concept_dice_02',
    grade: 4,
    subject: 'maths',
    chapter: 'The Way The World Looks (3D Perspectives)',
    concept: 'Finding the Opposite Number on a Die',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'If the top face of a dice shows 5 dots 🎲, the bottom face touching the table has [BLANK] dots.',
    visualEmoji: '🎲 Top: 5 ➔ Bottom: ❓',
    payload: {
      correctAnswer: '2',
      wordBank: ['2', '1', '3', '4'],
      displayTemplate: '7 - 5 = [BLANK]',
    },
    explanation: '💡 Since opposite faces add up to 7: 7 - 5 = **2 dots** on the bottom face!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Aerial Views (Top View vs Side View)
  // --------------------------------------------------------------------------
  {
    id: 'c4_m5_concept_view_01',
    grade: 4,
    subject: 'maths',
    chapter: 'The Way The World Looks (3D Perspectives)',
    concept: 'Top View of a Tea Cup',
    difficulty: 'easy',
    type: 'mcq',
    question: 'When you look at a tea cup ☕ directly from the TOP, what do you see?',
    visualEmoji: '☕ ⬇️ 👁️',
    payload: {
      options: [
        { id: 'opt_cup1', text: 'Two concentric circles with a small side loop handle', isCorrect: true },
        { id: 'opt_cup2', text: 'A tall cylinder', isCorrect: false },
        { id: 'opt_cup3', text: 'A triangle', isCorrect: false },
      ],
    },
    explanation: '💡 From the top, the circular rim and base appear as circles, with the ear/handle protruding to one side!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 4: Dice Opposite Pairs Matching & Perspective Ordering
  // --------------------------------------------------------------------------
  {
    id: 'c4_m5_concept_match_01',
    grade: 4,
    subject: 'maths',
    chapter: 'The Way The World Looks (3D Perspectives)',
    concept: 'Opposite Die Faces Match',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each face of a die with the number directly opposite to it:',
    visualEmoji: '🎲 ➔ 🎯',
    payload: {
      pairs: [
        { id: 'dp_p1', left: 'Face with 1 dot', right: 'Face with 6 dots' },
        { id: 'dp_p2', left: 'Face with 2 dots', right: 'Face with 5 dots' },
        { id: 'dp_p3', left: 'Face with 3 dots', right: 'Face with 4 dots' },
        { id: 'dp_p4', left: 'Face with 6 dots', right: 'Face with 1 dot' },
      ],
    },
    explanation: '💡 1+6=7, 2+5=7, 3+4=7. Every opposite pair on a die sums to 7!',
    points: 15,
  },
  {
    id: 'c4_m5_concept_order_01',
    grade: 4,
    subject: 'maths',
    chapter: 'The Way The World Looks (3D Perspectives)',
    concept: 'Directions Clockwise Order',
    difficulty: 'medium',
    type: 'drag_order',
    question: 'Arrange the four cardinal directions in clockwise order starting from the top (North):',
    visualEmoji: '🧭 ⬆️ ➔ ➡️ ➔ ⬇️ ➔ ⬅️',
    payload: {
      tokens: ['North', 'East', 'South', 'West'],
      scrambled: ['South', 'North', 'West', 'East'],
      correctSequence: ['North', 'East', 'South', 'West'],
    },
    explanation: '💡 Clockwise compass directions: **North (Top) ➔ East (Right) ➔ South (Bottom) ➔ West (Left)**!',
    points: 15,
  },
];
