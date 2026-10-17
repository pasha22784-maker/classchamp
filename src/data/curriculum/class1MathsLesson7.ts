import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 1 MATHEMATICS (JOYFUL MATHEMATICS)
// CHAPTER 7: LINA'S FAMILY (MEASUREMENT)
// Comprehensive Curriculum Covering All 7 Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_1_MATHS_LESSON_7_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Longer vs Shorter (लंबा और छोटा)
  // --------------------------------------------------------------------------
  {
    id: 'c1_m7_concept_longer_01',
    grade: 1,
    subject: 'maths',
    chapter: "Lina's Family (Measurement)",
    concept: 'Longer vs Shorter',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Lina has two writing pencils on her study desk: a brand-new long pencil ✏️ and an old used small pencil ✏️. Which pencil is LONGER?',
    visualEmoji: '✏️📏 vs ✏️',
    payload: {
      options: [
        { id: 'opt_lng1_1', text: 'Brand-new full pencil', isCorrect: true },
        { id: 'opt_lng1_2', text: 'Old sharpened small pencil', isCorrect: false },
      ],
    },
    explanation: '💡 The new pencil has more length from tip to eraser, so it is **LONGER**!',
    points: 10,
  },
  {
    id: 'c1_m7_concept_longer_02',
    grade: 1,
    subject: 'maths',
    chapter: "Lina's Family (Measurement)",
    concept: 'Longer vs Shorter Vehicles',
    difficulty: 'easy',
    type: 'mcq',
    question: 'On the road, which vehicle is LONGER: a long train 🚆 or a family car 🚗?',
    visualEmoji: '🚆 vs 🚗',
    payload: {
      options: [
        { id: 'opt_lng2_1', text: '🚆 Train is LONGER', isCorrect: true },
        { id: 'opt_lng2_2', text: '🚗 Car is LONGER', isCorrect: false },
      ],
    },
    explanation: '💡 A train has many bogies joined together, so a train 🚆 is much **LONGER** than a car!',
    points: 10,
  },
  {
    id: 'c1_m7_concept_longer_03',
    grade: 1,
    subject: 'maths',
    chapter: "Lina's Family (Measurement)",
    concept: 'Longest vs Shortest among Three',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Look at the three wooden ladders leaning against the wall: Ladder A (2 steps), Ladder B (5 steps), Ladder C (10 steps). Which ladder is the LONGEST?',
    visualEmoji: '🪜 Ladder A, B, C',
    payload: {
      options: [
        { id: 'opt_lng3_1', text: 'Ladder C with 10 steps', isCorrect: true },
        { id: 'opt_lng3_2', text: 'Ladder A with 2 steps', isCorrect: false },
        { id: 'opt_lng3_3', text: 'Ladder B with 5 steps', isCorrect: false },
      ],
    },
    explanation: '💡 Ladder C reaches the highest roof with 10 steps, so Ladder C is the **LONGEST**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Taller vs Shorter (ऊँचा और नाटा / ऊँचाई)
  // --------------------------------------------------------------------------
  {
    id: 'c1_m7_concept_taller_01',
    grade: 1,
    subject: 'maths',
    chapter: "Lina's Family (Measurement)",
    concept: 'Taller vs Shorter Animals',
    difficulty: 'easy',
    type: 'mcq',
    question: 'In the jungle safari, which animal is TALLER from the ground up: a Giraffe 🦒 or a Zebra 🦓?',
    visualEmoji: '🦒 vs 🦓',
    payload: {
      options: [
        { id: 'opt_tal1_1', text: 'Giraffe 🦒 is TALLER', isCorrect: true },
        { id: 'opt_tal1_2', text: 'Zebra 🦓 is TALLER', isCorrect: false },
      ],
    },
    explanation: '💡 The giraffe 🦒 has long legs and a super long neck, making it **TALLER** than the zebra!',
    points: 10,
  },
  {
    id: 'c1_m7_concept_taller_02',
    grade: 1,
    subject: 'maths',
    chapter: "Lina's Family (Measurement)",
    concept: 'Tallest in Family',
    difficulty: 'easy',
    type: 'mcq',
    question: "Look at Lina's family photo 👨‍👩‍👧: Father 👨, Lina 👧, and Baby brother 👶. Who is the TALLEST person in the family?",
    visualEmoji: '👨 👩 👧 👶',
    payload: {
      options: [
        { id: 'opt_tal2_1', text: 'Father 👨 is the TALLEST', isCorrect: true },
        { id: 'opt_tal2_2', text: 'Baby brother 👶 is the TALLEST', isCorrect: false },
        { id: 'opt_tal2_3', text: 'Lina 👧 is the TALLEST', isCorrect: false },
      ],
    },
    explanation: "💡 NCERT Lina's Family: Father 👨 stands the highest, so he is the **TALLEST**! Baby brother is the shortest.",
    points: 10,
  },
  {
    id: 'c1_m7_concept_taller_03',
    grade: 1,
    subject: 'maths',
    chapter: "Lina's Family (Measurement)",
    concept: 'Tallest vs Shortest Plant',
    difficulty: 'medium',
    type: 'mcq',
    question: 'In the garden: a giant Coconut tree 🌴, a Rose bush 🌹, and tiny grass 🌱. Which plant is the SHORTEST?',
    visualEmoji: '🌴 🌹 🌱',
    payload: {
      options: [
        { id: 'opt_tal3_1', text: 'Tiny Grass 🌱 is the SHORTEST', isCorrect: true },
        { id: 'opt_tal3_2', text: 'Coconut tree 🌴 is the SHORTEST', isCorrect: false },
        { id: 'opt_tal3_3', text: 'Rose bush 🌹 is the SHORTEST', isCorrect: false },
      ],
    },
    explanation: '💡 The coconut tree 🌴 is the tallest, and the tiny grass blade 🌱 is the **SHORTEST**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Heavier vs Lighter (भारी और हल्का / वज़न)
  // --------------------------------------------------------------------------
  {
    id: 'c1_m7_concept_heavy_01',
    grade: 1,
    subject: 'maths',
    chapter: "Lina's Family (Measurement)",
    concept: 'Heavier vs Lighter Fruits',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Lina visits the fruit shop 🛒. Which fruit is HEAVIER: a big Watermelon 🍉 or a small Strawberry 🍓?',
    visualEmoji: '🍉 vs 🍓',
    payload: {
      options: [
        { id: 'opt_hvy1_1', text: 'Watermelon 🍉 is HEAVIER', isCorrect: true },
        { id: 'opt_hvy1_2', text: 'Strawberry 🍓 is HEAVIER', isCorrect: false },
      ],
    },
    explanation: '💡 A big watermelon 🍉 has lots of weight and is hard to lift, so it is **HEAVIER**! Strawberry 🍓 is lighter.',
    points: 10,
  },
  {
    id: 'c1_m7_concept_heavy_02',
    grade: 1,
    subject: 'maths',
    chapter: "Lina's Family (Measurement)",
    concept: 'Heavier vs Lighter Objects',
    difficulty: 'easy',
    type: 'mcq',
    question: 'If you drop a feather 🪶 and a stone 🪨, which object is LIGHTER and floats gently in the air?',
    visualEmoji: '🪶 vs 🪨',
    payload: {
      options: [
        { id: 'opt_hvy2_1', text: 'Bird Feather 🪶 is LIGHTER', isCorrect: true },
        { id: 'opt_hvy2_2', text: 'Heavy Stone 🪨 is LIGHTER', isCorrect: false },
      ],
    },
    explanation: '💡 A feather 🪶 has almost no weight, so it is **LIGHTER** than a stone 🪨!',
    points: 10,
  },
  {
    id: 'c1_m7_concept_heavy_03',
    grade: 1,
    subject: 'maths',
    chapter: "Lina's Family (Measurement)",
    concept: 'Balance Seesaw Logic',
    difficulty: 'medium',
    type: 'mcq',
    question: 'On a playground seesaw ⚖️, a heavy bear 🐻 sits on one side and a light rabbit 🐇 sits on the other. Which side goes DOWN to the ground?',
    visualEmoji: '🐻 ⚖️ 🐇',
    payload: {
      options: [
        { id: 'opt_hvy3_1', text: 'The heavy bear side goes DOWN 🐻', isCorrect: true },
        { id: 'opt_hvy3_2', text: 'The light rabbit side goes DOWN 🐇', isCorrect: false },
      ],
    },
    explanation: '💡 Super Champ rule: On a seesaw or balance scale, the **HEAVIER** object pushes its side down to the ground!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 4: Thicker vs Thinner (मोटा और पतला)
  // --------------------------------------------------------------------------
  {
    id: 'c1_m7_concept_thick_01',
    grade: 1,
    subject: 'maths',
    chapter: "Lina's Family (Measurement)",
    concept: 'Thicker vs Thinner Tree Parts',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Look at a banyan tree: the big main tree trunk 🪵 and a tiny twig 🌿. Which one is THICKER?',
    visualEmoji: '🪵 vs 🌿',
    payload: {
      options: [
        { id: 'opt_thk1_1', text: 'Tree Trunk 🪵 is THICKER', isCorrect: true },
        { id: 'opt_thk1_2', text: 'Tiny Twig 🌿 is THICKER', isCorrect: false },
      ],
    },
    explanation: '💡 The main trunk 🪵 is wide and fat, so it is **THICKER**! A twig is thin.',
    points: 10,
  },
  {
    id: 'c1_m7_concept_thick_02',
    grade: 1,
    subject: 'maths',
    chapter: "Lina's Family (Measurement)",
    concept: 'Thicker vs Thinner Books',
    difficulty: 'medium',
    type: 'mcq',
    question: 'A fat dictionary with 1,000 pages 📕 and a slim comic book with 10 pages 📖. Which book is THINNER?',
    visualEmoji: '📕 vs 📖',
    payload: {
      options: [
        { id: 'opt_thk2_1', text: 'Slim Comic Book 📖 is THINNER', isCorrect: true },
        { id: 'opt_thk2_2', text: 'Fat Dictionary 📕 is THINNER', isCorrect: false },
      ],
    },
    explanation: '💡 The slim comic book has very few pages, so it is **THINNER**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 5: Non-Standard Measurement (Handspan 🖐️ & Footsteps 👣)
  // --------------------------------------------------------------------------
  {
    id: 'c1_m7_concept_span_01',
    grade: 1,
    subject: 'maths',
    chapter: "Lina's Family (Measurement)",
    concept: 'Handspan Measurement',
    difficulty: 'easy',
    type: 'mcq',
    question: 'When Lina spreads her hand open from the tip of thumb to the tip of little finger 🖐️, what is this measurement called?',
    visualEmoji: '🖐️ 📏',
    payload: {
      options: [
        { id: 'opt_spn1_1', text: 'HANDSPAN', isCorrect: true },
        { id: 'opt_spn1_2', text: 'FOOTSTEP', isCorrect: false },
        { id: 'opt_spn1_3', text: 'PENCIL TIP', isCorrect: false },
      ],
    },
    explanation: '💡 In NCERT Maths, measuring with an open stretched hand 🖐️ is called a **HANDSPAN** (बित्ता)!',
    points: 10,
  },
  {
    id: 'c1_m7_concept_span_02',
    grade: 1,
    subject: 'maths',
    chapter: "Lina's Family (Measurement)",
    concept: 'Measuring Classroom Room',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'To measure the length of a large classroom floor, what body part do we use to walk across? We measure in [BLANK] 👣',
    visualEmoji: '👣 🚶 🏫',
    payload: {
      correctAnswer: 'footsteps',
      wordBank: ['footsteps', 'fingers', 'hair', 'ears'],
      displayTemplate: 'We walk across the room in [BLANK]. 👣',
    },
    explanation: '💡 Walking heel-to-toe across a room measures the floor in **footsteps** (कदम) 👣!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 6: Measurement Properties Matching
  // --------------------------------------------------------------------------
  {
    id: 'c1_m7_concept_match_01',
    grade: 1,
    subject: 'maths',
    chapter: "Lina's Family (Measurement)",
    concept: 'Measurement Opposites Matching',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each measurement word with its direct opposite:',
    visualEmoji: '↔️ 📐',
    payload: {
      pairs: [
        { id: 'mop_1', left: 'Longer 📏', right: 'Shorter' },
        { id: 'mop_2', left: 'Taller 🦒', right: 'Shorter' },
        { id: 'mop_3', left: 'Heavier 🍉', right: 'Lighter 🪶' },
        { id: 'mop_4', left: 'Thicker 🪵', right: 'Thinner 🌿' },
      ],
    },
    explanation: '💡 Longer/Shorter, Taller/Shorter, Heavier/Lighter, and Thicker/Thinner are opposite measurement pairs!',
    points: 15,
  },
];
