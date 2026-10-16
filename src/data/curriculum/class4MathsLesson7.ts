import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 4 MATHEMATICS (MATH-MAGIC 4)
// CHAPTER 7: CARTS AND WHEELS (CIRCLES & RADIUS)
// Comprehensive Curriculum Covering All Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_4_MATHS_LESSON_7_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Anatomy of a Circle (Radius, Diameter, Center)
  // --------------------------------------------------------------------------
  {
    id: 'c4_m7_concept_anat_01',
    grade: 4,
    subject: 'maths',
    chapter: 'Carts and Wheels (Circles & Radius)',
    concept: 'Definition of Radius',
    difficulty: 'easy',
    type: 'mcq',
    question: 'What is the line segment joining the center of a circle to any point on its boundary called?',
    visualEmoji: '⭕ 📍 ➔ ➖',
    payload: {
      options: [
        { id: 'opt_rd1', text: 'Radius (त्रिज्या)', isCorrect: true },
        { id: 'opt_rd2', text: 'Diameter (व्यास)', isCorrect: false },
        { id: 'opt_rd3', text: 'Chord', isCorrect: false },
      ],
    },
    explanation: '💡 The distance from the exact center to the boundary edge is the **radius** (r)!',
    points: 10,
  },
  {
    id: 'c4_m7_concept_anat_02',
    grade: 4,
    subject: 'maths',
    chapter: 'Carts and Wheels (Circles & Radius)',
    concept: 'Diameter is Double the Radius',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'The diameter of a circle is always [BLANK] times its radius.',
    visualEmoji: '⭕ Diameter = ❓ × Radius',
    payload: {
      correctAnswer: '2',
      wordBank: ['2', '3', '4', '1'],
      displayTemplate: 'Diameter = [BLANK] × Radius',
    },
    explanation: '💡 A diameter is formed by two radii in a straight line: **Diameter = 2 × Radius**!',
    points: 10,
  },
  {
    id: 'c4_m7_concept_anat_03',
    grade: 4,
    subject: 'maths',
    chapter: 'Carts and Wheels (Circles & Radius)',
    concept: 'Calculating Diameter from Radius',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'If a bullock cart wheel 🎡 has a radius of 35 cm, its diameter is [BLANK] cm.',
    visualEmoji: '🎡 Radius: 35 cm ➔ Diameter: ❓',
    payload: {
      correctAnswer: '70',
      wordBank: ['70', '65', '35', '105'],
      displayTemplate: 'Diameter = 35 × 2 = [BLANK] cm.',
    },
    explanation: '💡 35 cm × 2 = **70 cm**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Spinning Tops (लट्टू) & Center of Rotation
  // --------------------------------------------------------------------------
  {
    id: 'c4_m7_concept_spin_01',
    grade: 4,
    subject: 'maths',
    chapter: 'Carts and Wheels (Circles & Radius)',
    concept: 'Pin Placement on a Spinning Top',
    difficulty: 'easy',
    type: 'mcq',
    question: 'To make a cardboard spinning top (lattu / charkhi) 🪀 spin smoothly without wobbling, where must the nail or matchstick be inserted?',
    visualEmoji: '🪀 📍 🌀',
    payload: {
      options: [
        { id: 'opt_sp1', text: 'Exactly at the center point of the circular disc', isCorrect: true },
        { id: 'opt_sp2', text: 'Near the outer curved edge', isCorrect: false },
        { id: 'opt_sp3', text: 'Anywhere near the border', isCorrect: false },
      ],
    },
    explanation: '💡 When the pivot pin is at the **exact center**, the weight is balanced and the top spins fastest and longest without falling!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Matching Circle Elements & Size Ordering
  // --------------------------------------------------------------------------
  {
    id: 'c4_m7_concept_match_01',
    grade: 4,
    subject: 'maths',
    chapter: 'Carts and Wheels (Circles & Radius)',
    concept: 'Circle Elements Match',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each circle term with its correct geometric definition:',
    visualEmoji: '⭕ ➔ 🎯',
    payload: {
      pairs: [
        { id: 'cw_p1', left: 'Center Point 📍', right: 'Exact middle of the circle' },
        { id: 'cw_p2', left: 'Radius ➖', right: 'Half the diameter (center to edge)' },
        { id: 'cw_p3', left: 'Diameter 📏', right: '2 × Radius passing through center' },
        { id: 'cw_p4', left: 'Circumference ⭕', right: 'Outer boundary length of circle' },
      ],
    },
    explanation: '💡 Center is the middle, radius is center-to-edge, diameter is edge-to-edge through center, circumference is the boundary.',
    points: 15,
  },
  {
    id: 'c4_m7_concept_order_01',
    grade: 4,
    subject: 'maths',
    chapter: 'Carts and Wheels (Circles & Radius)',
    concept: 'Wheel Size Order by Radius',
    difficulty: 'easy',
    type: 'drag_order',
    question: 'Arrange these circular wheels in order from smallest radius to largest radius:',
    visualEmoji: '🔘 ➔ 🪙 ➔ 🚲 ➔ 🚜',
    payload: {
      tokens: ['Shirt button wheel (1 cm)', 'Coin wheel (2 cm)', 'Bicycle wheel (30 cm)', 'Tractor rear wheel (90 cm)'],
      scrambled: ['Bicycle wheel (30 cm)', 'Shirt button wheel (1 cm)', 'Tractor rear wheel (90 cm)', 'Coin wheel (2 cm)'],
      correctSequence: ['Shirt button wheel (1 cm)', 'Coin wheel (2 cm)', 'Bicycle wheel (30 cm)', 'Tractor rear wheel (90 cm)'],
    },
    explanation: '💡 Radius size order: Button (1 cm) < Coin (2 cm) < Bicycle (30 cm) < Tractor (90 cm)!',
    points: 15,
  },
];
