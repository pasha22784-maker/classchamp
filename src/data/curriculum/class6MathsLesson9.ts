import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 6 MATHEMATICS
// CHAPTER 9: MENSURATION (PERIMETER & AREA)
// Comprehensive Curriculum Covering All Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_6_MATHS_LESSON_9_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Perimeter of Regular Polygons
  // --------------------------------------------------------------------------
  {
    id: 'c6_m9_concept_poly_01',
    grade: 6,
    subject: 'maths',
    chapter: 'Mensuration (Perimeter & Area)',
    concept: 'Perimeter of an Equilateral Triangle',
    difficulty: 'easy',
    type: 'mcq',
    question: 'An equilateral triangle has all 3 sides equal. If one side is 8 cm, what is its perimeter?',
    visualEmoji: '🔺 Side = 8 cm',
    payload: {
      options: [
        { id: 'opt_eq1', text: '24 cm (Perimeter = 3 × Side = 3 × 8 = 24 cm)', isCorrect: true },
        { id: 'opt_eq2', text: '16 cm', isCorrect: false },
        { id: 'opt_eq3', text: '64 cm', isCorrect: false },
      ],
    },
    explanation: '💡 Remember: **Perimeter of Equilateral Triangle = 3 × Side** = 3 × 8 = **24 cm**!',
    points: 10,
  },
  {
    id: 'c6_m9_concept_poly_02',
    grade: 6,
    subject: 'maths',
    chapter: 'Mensuration (Perimeter & Area)',
    concept: 'Perimeter of Regular Hexagon',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'A regular hexagon has 6 equal sides of length 7 cm each. Its perimeter is [BLANK] cm.',
    visualEmoji: '⬡ 6 × 7 cm',
    payload: {
      correctAnswer: '42',
      wordBank: ['42', '36', '49', '28'],
      displayTemplate: 'Perimeter of regular hexagon = [BLANK] cm.',
    },
    explanation: '💡 **Perimeter of Regular Hexagon = 6 × Side** = 6 × 7 = **42 cm**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Formulas for Perimeter & Area
  // --------------------------------------------------------------------------
  {
    id: 'c6_m9_concept_form_01',
    grade: 6,
    subject: 'maths',
    chapter: 'Mensuration (Perimeter & Area)',
    concept: 'Mensuration Formulas Match',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each geometrical figure to its correct perimeter formula:',
    visualEmoji: '📐 Perimeter Formulas',
    payload: {
      pairs: [
        { id: 'm9_p1', left: 'Square', right: '4 × Side' },
        { id: 'm9_p2', left: 'Rectangle', right: '2 × (Length + Breadth)' },
        { id: 'm9_p3', left: 'Regular Pentagon', right: '5 × Side' },
        { id: 'm9_p4', left: 'Equilateral Triangle', right: '3 × Side' },
      ],
    },
    explanation: '💡 For any regular polygon, perimeter is simply **Number of sides × Side length**!',
    points: 15,
  },
  {
    id: 'c6_m9_concept_area_01',
    grade: 6,
    subject: 'maths',
    chapter: 'Mensuration (Perimeter & Area)',
    concept: 'Area Calculation for Floor Tiles',
    difficulty: 'medium',
    type: 'mcq',
    question: 'A room floor is 6 m long and 4 m wide. How many square tiles of side 1 m are needed to cover the entire floor?',
    visualEmoji: '🏠 6m × 4m Floor',
    payload: {
      options: [
        { id: 'opt_tile1', text: '24 tiles (Area of room = 6 × 4 = 24 sq m; Tile area = 1 sq m)', isCorrect: true },
        { id: 'opt_tile2', text: '20 tiles', isCorrect: false },
        { id: 'opt_tile3', text: '10 tiles', isCorrect: false },
      ],
    },
    explanation: '💡 Total area = 6 × 4 = 24 sq meters. Each tile covers 1 sq meter, so **24 tiles** are required!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Calculation of Fencing Cost
  // --------------------------------------------------------------------------
  {
    id: 'c6_m9_concept_order_01',
    grade: 6,
    subject: 'maths',
    chapter: 'Mensuration (Perimeter & Area)',
    concept: 'Order of Steps to Calculate Fencing Cost',
    difficulty: 'hard',
    type: 'drag_order',
    question: 'Order the steps to find the cost of fencing a square park of side 50 m at ₹20 per meter:',
    visualEmoji: '🚧 Fencing Square Park',
    payload: {
      tokens: [
        'Identify side of square park = 50 m',
        'Find perimeter = 4 × 50 = 200 m',
        'Multiply perimeter by cost rate: 200 × ₹20',
        'Total cost of fencing = ₹4,000',
      ],
      scrambled: [
        'Total cost of fencing = ₹4,000',
        'Identify side of square park = 50 m',
        'Multiply perimeter by cost rate: 200 × ₹20',
        'Find perimeter = 4 × 50 = 200 m',
      ],
      correctSequence: [
        'Identify side of square park = 50 m',
        'Find perimeter = 4 × 50 = 200 m',
        'Multiply perimeter by cost rate: 200 × ₹20',
        'Total cost of fencing = ₹4,000',
      ],
    },
    explanation: '💡 Perimeter = 4 × 50 = 200 m. Cost = 200 × ₹20 = **₹4,000**!',
    points: 15,
  },
];
