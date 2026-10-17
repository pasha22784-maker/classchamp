import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 6 MATHEMATICS
// CHAPTER 4: BASIC GEOMETRICAL IDEAS (POINTS, LINES, POLYGONS)
// Comprehensive Curriculum Covering All Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_6_MATHS_LESSON_4_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Points, Lines, Segments & Rays
  // --------------------------------------------------------------------------
  {
    id: 'c6_m4_concept_line_01',
    grade: 6,
    subject: 'maths',
    chapter: 'Basic Geometrical Ideas (Points, Lines, Polygons)',
    concept: 'Ray vs Line Segment',
    difficulty: 'easy',
    type: 'mcq',
    question: 'A beam of light from a torch has one fixed starting point and goes endlessly in one direction.\nWhat geometrical shape is it?',
    visualEmoji: '🔦 ➡️ Ray of Light',
    payload: {
      options: [
        { id: 'opt_ray1', text: 'A Ray (has 1 starting endpoint and extends infinitely in 1 direction)', isCorrect: true },
        { id: 'opt_ray2', text: 'A Line Segment (has 2 fixed endpoints)', isCorrect: false },
        { id: 'opt_ray3', text: 'A Line (extends both directions without endpoints)', isCorrect: false },
      ],
    },
    explanation: '💡 Remember: A **Ray** has one fixed initial point and extends endlessly in one direction (e.g. Ray AB with arrow at B)!',
    points: 10,
  },
  {
    id: 'c6_m4_concept_poly_01',
    grade: 6,
    subject: 'maths',
    chapter: 'Basic Geometrical Ideas (Points, Lines, Polygons)',
    concept: 'Polygon Definition',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'A simple closed curve made up entirely of straight line segments is called a [BLANK].',
    visualEmoji: '🔺 🔲 ⬡ Polygon',
    payload: {
      correctAnswer: 'polygon',
      wordBank: ['polygon', 'circle', 'spiral', 'cylinder'],
      displayTemplate: 'Called a [BLANK].',
    },
    explanation: '💡 A **Polygon** is a flat closed shape made completely of line segments (minimum 3 sides = triangle)!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Circle Terminology (Radius, Diameter, Chord, Sector)
  // --------------------------------------------------------------------------
  {
    id: 'c6_m4_concept_circle_01',
    grade: 6,
    subject: 'maths',
    chapter: 'Basic Geometrical Ideas (Points, Lines, Polygons)',
    concept: 'Circle Parts Match',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each part of a circle to its precise geometrical definition:',
    visualEmoji: '⭕ Circle Parts',
    payload: {
      pairs: [
        { id: 'm4_p1', left: 'Diameter', right: 'Longest chord passing through center (2 × Radius)' },
        { id: 'm4_p2', left: 'Radius', right: 'Line segment from center to any point on circle' },
        { id: 'm4_p3', left: 'Chord', right: 'Line segment connecting any two points on circle' },
        { id: 'm4_p4', left: 'Sector', right: 'Region bounded by an arc and two radii (pizza slice)' },
      ],
    },
    explanation: '💡 A diameter is twice the radius; a sector is formed by 2 radii and an arc!',
    points: 15,
  },
  {
    id: 'c6_m4_concept_circle_02',
    grade: 6,
    subject: 'maths',
    chapter: 'Basic Geometrical Ideas (Points, Lines, Polygons)',
    concept: 'Radius to Diameter Calculation',
    difficulty: 'medium',
    type: 'mcq',
    question: 'If the radius of a circular coin is 3.5 cm, what is its diameter?',
    visualEmoji: '🪙 Radius = 3.5 cm ➡️ Diameter = ❓',
    payload: {
      options: [
        { id: 'opt_dia1', text: '7.0 cm (Diameter = 2 × Radius = 2 × 3.5 = 7 cm)', isCorrect: true },
        { id: 'opt_dia2', text: '3.5 cm', isCorrect: false },
        { id: 'opt_dia3', text: '14.0 cm', isCorrect: false },
      ],
    },
    explanation: '💡 **Diameter = 2 × Radius** = 2 × 3.5 = **7 cm**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Polygons by Number of Sides
  // --------------------------------------------------------------------------
  {
    id: 'c6_m4_concept_order_01',
    grade: 6,
    subject: 'maths',
    chapter: 'Basic Geometrical Ideas (Points, Lines, Polygons)',
    concept: 'Polygons Ordered by Sides Count',
    difficulty: 'hard',
    type: 'drag_order',
    question: 'Arrange these polygons in increasing order of their number of sides (3 ➡️ 4 ➡️ 5 ➡️ 6):',
    visualEmoji: '📐 3 ➡️ 6 Sides',
    payload: {
      tokens: ['Triangle (3 sides)', 'Quadrilateral (4 sides)', 'Pentagon (5 sides)', 'Hexagon (6 sides)'],
      scrambled: ['Hexagon (6 sides)', 'Triangle (3 sides)', 'Pentagon (5 sides)', 'Quadrilateral (4 sides)'],
      correctSequence: ['Triangle (3 sides)', 'Quadrilateral (4 sides)', 'Pentagon (5 sides)', 'Hexagon (6 sides)'],
    },
    explanation: '💡 Triangle = 3 sides, Quadrilateral = 4 sides, Pentagon = 5 sides, Hexagon = 6 sides!',
    points: 15,
  },
];
