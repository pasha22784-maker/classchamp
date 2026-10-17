import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 5 MATHEMATICS (MATH-MAGIC 5)
// CHAPTER 1: THE FISH TALE (LARGE NUMBERS & SPEED)
// Comprehensive Curriculum Covering All Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_5_MATHS_LESSON_1_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Large Numbers - Lakhs and Crores (लाख और करोड़)
  // --------------------------------------------------------------------------
  {
    id: 'c5_m1_concept_crore_01',
    grade: 5,
    subject: 'maths',
    chapter: 'The Fish Tale (Large Numbers & Speed)',
    concept: 'Understanding One Crore',
    difficulty: 'easy',
    type: 'mcq',
    question: 'How many Lakhs make exactly One Crore (1,00,00,000)?',
    visualEmoji: '💰 1️⃣ Crore = ❓ Lakhs',
    payload: {
      options: [
        { id: 'opt_cr1', text: '100 Lakhs', isCorrect: true },
        { id: 'opt_cr2', text: '10 Lakhs', isCorrect: false },
        { id: 'opt_cr3', text: '1,000 Lakhs', isCorrect: false },
      ],
    },
    explanation: '💡 Remember: **1 Lakh = 100,000 (5 zeros)** and **1 Crore = 100 Lakhs = 10,000,000 (7 zeros)**!',
    points: 10,
  },
  {
    id: 'c5_m1_concept_crore_02',
    grade: 5,
    subject: 'maths',
    chapter: 'The Fish Tale (Large Numbers & Speed)',
    concept: 'Zeros in One Crore',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'The number "One Crore" has exactly [BLANK] zeros.',
    visualEmoji: '1️⃣0️⃣0️⃣0️⃣0️⃣0️⃣0️⃣0️⃣',
    payload: {
      correctAnswer: '7',
      wordBank: ['7', '5', '6', '8'],
      displayTemplate: 'One Crore has [BLANK] zeros.',
    },
    explanation: '💡 1,00,00,000 has **7 zeros**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Boat Speed, Distance and Time (चाल, दूरी और समय)
  // --------------------------------------------------------------------------
  {
    id: 'c5_m1_concept_speed_01',
    grade: 5,
    subject: 'maths',
    chapter: 'The Fish Tale (Large Numbers & Speed)',
    concept: 'Distance Travelled by Log Boat',
    difficulty: 'easy',
    type: 'mcq',
    question: 'A simple log boat goes at a speed of 4 km in 1 hour.\nHow far can it travel in 6 hours?',
    visualEmoji: '🚣 4 km/h × 6 hours = ❓',
    payload: {
      options: [
        { id: 'opt_sp1', text: '24 km', isCorrect: true },
        { id: 'opt_sp2', text: '18 km', isCorrect: false },
        { id: 'opt_sp3', text: '10 km', isCorrect: false },
      ],
    },
    explanation: '💡 Distance = Speed × Time = 4 km/h × 6 hours = **24 km**!',
    points: 10,
  },
  {
    id: 'c5_m1_concept_speed_02',
    grade: 5,
    subject: 'maths',
    chapter: 'The Fish Tale (Large Numbers & Speed)',
    concept: 'Motor Boat Travel Time',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'A fast motor-boat travels at 20 km per hour. To travel a distance of 80 km, it will take [BLANK] hours.',
    visualEmoji: '🚤 80 km ÷ 20 km/h = ❓',
    payload: {
      correctAnswer: '4',
      wordBank: ['4', '3', '5', '2'],
      displayTemplate: 'Time = 80 ÷ 20 = [BLANK] hours.',
    },
    explanation: '💡 Time = Distance ÷ Speed = 80 ÷ 20 = **4 hours**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Weight & Catch Calculations
  // --------------------------------------------------------------------------
  {
    id: 'c5_m1_concept_weight_01',
    grade: 5,
    subject: 'maths',
    chapter: 'The Fish Tale (Large Numbers & Speed)',
    concept: 'Fish Selling Total Amount',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Gracy sold 6 kg of swordfish at ₹ 60 per kg. How much money did she earn?',
    visualEmoji: '🐟 6 kg × ₹ 60 = ❓',
    payload: {
      options: [
        { id: 'opt_wt1', text: '₹ 360', isCorrect: true },
        { id: 'opt_wt2', text: '₹ 300', isCorrect: false },
        { id: 'opt_wt3', text: '₹ 420', isCorrect: false },
      ],
    },
    explanation: '💡 6 kg × ₹ 60 = **₹ 360** earned!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 4: Large Number Matching & Speed Order
  // --------------------------------------------------------------------------
  {
    id: 'c5_m1_concept_match_01',
    grade: 5,
    subject: 'maths',
    chapter: 'The Fish Tale (Large Numbers & Speed)',
    concept: 'Indian Number System Match',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match the number names with their digit notation:',
    visualEmoji: '🔢 ➔ 🎯',
    payload: {
      pairs: [
        { id: 'ft_p1', left: 'Ten Thousand', right: '10,000' },
        { id: 'ft_p2', left: 'One Lakh', right: '1,00,000' },
        { id: 'ft_p3', left: 'Ten Lakhs', right: '10,00,000' },
        { id: 'ft_p4', left: 'One Crore', right: '1,00,00,000' },
      ],
    },
    explanation: '💡 10 Thousand = 10,000; 1 Lakh = 1,00,000; 10 Lakhs = 10,00,000; 1 Crore = 1,00,00,000.',
    points: 15,
  },
  {
    id: 'c5_m1_concept_order_01',
    grade: 5,
    subject: 'maths',
    chapter: 'The Fish Tale (Large Numbers & Speed)',
    concept: 'Boat Speeds Ascending Order',
    difficulty: 'easy',
    type: 'drag_order',
    question: 'Arrange the fishing boats in order from slowest speed to fastest speed:',
    visualEmoji: '🚣 ➔ ⛵ ➔ 🚤 ➔ 🚢',
    payload: {
      tokens: ['Log boat (4 km/h)', 'Oar boat with sail (8 km/h)', 'Motor boat (20 km/h)', 'Machine trawler (30 km/h)'],
      scrambled: ['Machine trawler (30 km/h)', 'Log boat (4 km/h)', 'Motor boat (20 km/h)', 'Oar boat with sail (8 km/h)'],
      correctSequence: ['Log boat (4 km/h)', 'Oar boat with sail (8 km/h)', 'Motor boat (20 km/h)', 'Machine trawler (30 km/h)'],
    },
    explanation: '💡 Speed order: Log boat (4) < Sail boat (8) < Motor boat (20) < Trawler (30)!',
    points: 15,
  },
];
