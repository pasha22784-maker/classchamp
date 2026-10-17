import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 5 MATHEMATICS (MATH-MAGIC 5)
// CHAPTER 9: BOXES AND SKETCHES (3D NETS & CUBES)
// Comprehensive Curriculum Covering All Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_5_MATHS_LESSON_9_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: 3D Shapes & 2D Nets (जाल और आकृतियाँ)
  // --------------------------------------------------------------------------
  {
    id: 'c5_m9_concept_net_01',
    grade: 5,
    subject: 'maths',
    chapter: 'Boxes and Sketches (3D Nets & Cubes)',
    concept: 'Faces of a Cube Net',
    difficulty: 'easy',
    type: 'mcq',
    question: 'How many square faces must a flat 2D net have to fold into a complete closed cube?',
    visualEmoji: '🎲 Flat Net ➡️ 3D Cube',
    payload: {
      options: [
        { id: 'opt_cfaces1', text: '6 square faces (Top, Bottom, Front, Back, Left, Right)', isCorrect: true },
        { id: 'opt_cfaces2', text: '4 square faces', isCorrect: false },
        { id: 'opt_cfaces3', text: '8 square faces', isCorrect: false },
      ],
    },
    explanation: '💡 Remember: A cube has exactly **6 square faces**, **12 edges**, and **8 corners (vertices)**!',
    points: 10,
  },
  {
    id: 'c5_m9_concept_net_02',
    grade: 5,
    subject: 'maths',
    chapter: 'Boxes and Sketches (3D Nets & Cubes)',
    concept: 'Standard Dice Opposite Faces',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'On a standard game dice, the numbers on opposite faces always add up to [BLANK].',
    visualEmoji: '🎲 ⚀ + ⚅ = ❓',
    payload: {
      correctAnswer: '7',
      wordBank: ['7', '6', '10', '12'],
      displayTemplate: 'Opposite faces on a dice sum to [BLANK].',
    },
    explanation: '💡 Remember: On any standard dice, opposite numbers always sum to **7** (1+6=7, 2+5=7, 3+4=7)!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Matching 3D Solids to Flat Nets
  // --------------------------------------------------------------------------
  {
    id: 'c5_m9_concept_match_01',
    grade: 5,
    subject: 'maths',
    chapter: 'Boxes and Sketches (3D Nets & Cubes)',
    concept: 'Matching Solids with their Unfolded Nets',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each 3D shape to the description of its unfolded 2D net:',
    visualEmoji: '📦 3D Shapes & Nets',
    payload: {
      pairs: [
        { id: 'm9_p1', left: 'Cube', right: '6 identical squares' },
        { id: 'm9_p2', left: 'Cylinder', right: '1 rectangle and 2 circular ends' },
        { id: 'm9_p3', left: 'Cone', right: '1 circular base and 1 sector (fan shape)' },
        { id: 'm9_p4', left: 'Triangular Prism', right: '2 triangles and 3 rectangles' },
      ],
    },
    explanation: '💡 When unrolled, a cylinder reveals a rectangle with two circles; a cube unfolds into 6 squares!',
    points: 15,
  },
  {
    id: 'c5_m9_concept_drawing_01',
    grade: 5,
    subject: 'maths',
    chapter: 'Boxes and Sketches (3D Nets & Cubes)',
    concept: 'Floor Map vs Deep Drawing',
    difficulty: 'medium',
    type: 'mcq',
    question: 'What is the main difference between a "Floor Map" and a "Deep Drawing" of a house?',
    visualEmoji: '🗺️ Floor Map vs 🏠 Deep Drawing',
    payload: {
      options: [
        { id: 'opt_dd1', text: 'Floor map shows where doors/windows are from above; Deep drawing shows length, width, and height in 3D perspective', isCorrect: true },
        { id: 'opt_dd2', text: 'Floor map has 3D depth, deep drawing is flat', isCorrect: false },
        { id: 'opt_dd3', text: 'Both are identical drawings', isCorrect: false },
      ],
    },
    explanation: '💡 A floor map is a 2D layout showing positions of rooms, while a **deep drawing** shows realistic 3D depth and height!',
    points: 15,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Folding an Open Box
  // --------------------------------------------------------------------------
  {
    id: 'c5_m9_concept_box_01',
    grade: 5,
    subject: 'maths',
    chapter: 'Boxes and Sketches (3D Nets & Cubes)',
    concept: 'Net for an Open Box',
    difficulty: 'hard',
    type: 'fill_blank',
    question: 'An open box has no lid at the top. Its flat net consists of [BLANK] square faces.',
    visualEmoji: '📥 Open Box (No Top Lid)',
    payload: {
      correctAnswer: '5',
      wordBank: ['5', '6', '4', '8'],
      displayTemplate: 'Net of an open box has [BLANK] squares.',
    },
    explanation: '💡 A closed box has 6 faces. Removing the top lid leaves **5 faces** (bottom + 4 walls)!',
    points: 15,
  },
];
