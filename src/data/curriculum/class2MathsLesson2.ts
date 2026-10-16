import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 2 MATHEMATICS (JOYFUL MATHEMATICS 2)
// CHAPTER 2: SHAPES AROUND US (ROLLING & SLIDING)
// Comprehensive Curriculum Covering All 7 Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_2_MATHS_LESSON_2_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Objects That Roll (लुढ़कने वाली वस्तुएँ - Curved Surface)
  // --------------------------------------------------------------------------
  {
    id: 'c2_m2_concept_roll_01',
    grade: 2,
    subject: 'maths',
    chapter: 'Shapes Around Us (Rolling & Sliding)',
    concept: 'Identifying Rolling Objects',
    difficulty: 'easy',
    type: 'mcq',
    question: 'If you push these objects down a children\'s playground slide 🛝, which one will ROLL smoothly?',
    visualEmoji: '🛝 ⚽ vs 📦',
    payload: {
      options: [
        { id: 'opt_rl1_1', text: 'A round football ⚽ (It has a curved surface)', isCorrect: true },
        { id: 'opt_rl1_2', text: 'A flat cardboard box 📦', isCorrect: false },
        { id: 'opt_rl1_3', text: 'A flat pencil box 📏', isCorrect: false },
      ],
    },
    explanation: '💡 Objects with curved, round surfaces (like balls ⚽ and oranges 🍊) **ROLL** smoothly!',
    points: 10,
  },
  {
    id: 'c2_m2_concept_roll_02',
    grade: 2,
    subject: 'maths',
    chapter: 'Shapes Around Us (Rolling & Sliding)',
    concept: 'Roll in Fruits',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'A round juicy orange 🍊 will [BLANK] down an inclined wooden plank.',
    visualEmoji: '🍊 📐',
    payload: {
      correctAnswer: 'roll',
      wordBank: ['roll', 'slide', 'stop', 'break'],
      displayTemplate: 'A round orange will [BLANK] down the slope.',
    },
    explanation: '💡 Because the orange is round, it will **roll**! 🍊',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Objects That Slide (सरकने वाली वस्तुएँ - Flat Surface)
  // --------------------------------------------------------------------------
  {
    id: 'c2_m2_concept_slide_01',
    grade: 2,
    subject: 'maths',
    chapter: 'Shapes Around Us (Rolling & Sliding)',
    concept: 'Identifying Sliding Objects',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which of these objects has flat faces and will SLIDE across the tiled floor?',
    visualEmoji: '📖 🧱 ⚽',
    payload: {
      options: [
        { id: 'opt_sl1_1', text: 'A heavy storybook 📖 (It has flat faces)', isCorrect: true },
        { id: 'opt_sl1_2', text: 'A cricket tennis ball 🎾', isCorrect: false },
        { id: 'opt_sl1_3', text: 'A round glass marble 🔮', isCorrect: false },
      ],
    },
    explanation: '💡 Objects with flat surfaces (like books 📖 and erasers 🧼) **SLIDE** without spinning!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Objects That Can Both Roll AND Slide! (दोनों करने वाले)
  // --------------------------------------------------------------------------
  {
    id: 'c2_m2_concept_both_01',
    grade: 2,
    subject: 'maths',
    chapter: 'Shapes Around Us (Rolling & Sliding)',
    concept: 'Both Rolling and Sliding',
    difficulty: 'medium',
    type: 'mcq',
    question: 'A ₹5 shiny coin 🪙 can slide on its flat side. If you stand it on its round edge and flick it, what will it do?',
    visualEmoji: '🪙 🔄',
    payload: {
      options: [
        { id: 'opt_bt1_1', text: 'It will ROLL on its curved circular edge 🪙', isCorrect: true },
        { id: 'opt_bt1_2', text: 'It cannot move at all', isCorrect: false },
        { id: 'opt_bt1_3', text: 'It only flies', isCorrect: false },
      ],
    },
    explanation: '💡 A coin 🪙 has both flat faces and a round curved rim, so it can **BOTH roll and slide**!',
    points: 10,
  },
  {
    id: 'c2_m2_concept_both_02',
    grade: 2,
    subject: 'maths',
    chapter: 'Shapes Around Us (Rolling & Sliding)',
    concept: 'Cylinder Rolling and Sliding',
    difficulty: 'medium',
    type: 'mcq',
    question: 'A drinking steel glass or soup tin can 🥫: Can it both roll and slide?',
    visualEmoji: '🥫 🥤',
    payload: {
      options: [
        { id: 'opt_bt2_1', text: 'Yes, it rolls on its curved side and slides on its flat base', isCorrect: true },
        { id: 'opt_bt2_2', text: 'No, it only rolls', isCorrect: false },
        { id: 'opt_bt2_3', text: 'No, it only slides', isCorrect: false },
      ],
    },
    explanation: '💡 On its flat bottom it **slides**, and on its curved body it **rolls**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 4: Building Towers (Stacking Objects - मीनार बनाना)
  // --------------------------------------------------------------------------
  {
    id: 'c2_m2_concept_stack_01',
    grade: 2,
    subject: 'maths',
    chapter: 'Shapes Around Us (Rolling & Sliding)',
    concept: 'Stacking to Build a Tower',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Ria wants to build a tall toy tower 🏰. Which items can be stacked one on top of another without tumbling down?',
    visualEmoji: '🧱 📦 ⚽',
    payload: {
      options: [
        { id: 'opt_st1_1', text: 'Wooden building blocks with flat tops 🧱', isCorrect: true },
        { id: 'opt_st1_2', text: 'Round cricket balls 🎾', isCorrect: false },
        { id: 'opt_st1_3', text: 'Round glass marbles 🔮', isCorrect: false },
      ],
    },
    explanation: '💡 You can only stack objects with **flat surfaces** (like blocks 🧱, books 📚, and matchboxes 📦)!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 5: Tracing Faces to Discover 2D Shapes (छाप लगाना)
  // --------------------------------------------------------------------------
  {
    id: 'c2_m2_concept_trace_01',
    grade: 2,
    subject: 'maths',
    chapter: 'Shapes Around Us (Rolling & Sliding)',
    concept: 'Tracing Base of a Glass',
    difficulty: 'easy',
    type: 'mcq',
    question: 'If you place a round water glass 🥛 on a sheet of paper and trace along its circular bottom with a pencil, what shape do you get?',
    visualEmoji: '🥛 ✏️ 📄 ➡️ ⭕',
    payload: {
      options: [
        { id: 'opt_tr1_1', text: 'A Circle ⭕', isCorrect: true },
        { id: 'opt_tr1_2', text: 'A Triangle 🔺', isCorrect: false },
        { id: 'opt_tr1_3', text: 'A Square ⏹️', isCorrect: false },
      ],
    },
    explanation: '💡 The bottom base of a drinking glass is round, so tracing it makes a **Circle ⭕**!',
    points: 10,
  },
  {
    id: 'c2_m2_concept_trace_02',
    grade: 2,
    subject: 'maths',
    chapter: 'Shapes Around Us (Rolling & Sliding)',
    concept: 'Tracing a Matchbox',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'Tracing around the flat base of an eraser or matchbox gives a [BLANK] shape.',
    visualEmoji: '📦 ✏️ 📄 ➡️ ▭',
    payload: {
      correctAnswer: 'rectangle',
      wordBank: ['rectangle', 'circle', 'sphere', 'cone'],
      displayTemplate: 'Tracing a matchbox gives a [BLANK] shape.',
    },
    explanation: '💡 A matchbox face has two long sides and two short sides, forming a **rectangle**! ▭',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 6: Edges and Corners (किनारे और कोने)
  // --------------------------------------------------------------------------
  {
    id: 'c2_m2_concept_corners_01',
    grade: 2,
    subject: 'maths',
    chapter: 'Shapes Around Us (Rolling & Sliding)',
    concept: 'Corners of a Square',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Look at a square piece of origami craft paper ⏹️. How many straight corners does it have?',
    visualEmoji: '⏹️ (Corners)',
    payload: {
      options: [
        { id: 'opt_cn1_1', text: '4 corners and 4 straight edges', isCorrect: true },
        { id: 'opt_cn1_2', text: '3 corners', isCorrect: false },
        { id: 'opt_cn1_3', text: '0 corners', isCorrect: false },
      ],
    },
    explanation: '💡 A square has **4 corners and 4 straight sides**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 7: Match Objects to Movement Property
  // --------------------------------------------------------------------------
  {
    id: 'c2_m2_concept_match_01',
    grade: 2,
    subject: 'maths',
    chapter: 'Shapes Around Us (Rolling & Sliding)',
    concept: 'Movement Property Match',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each everyday object to how it moves when pushed:',
    visualEmoji: '🔄 📐',
    payload: {
      pairs: [
        { id: 'mv1', left: 'Tennis Ball 🎾', right: 'Rolls only' },
        { id: 'mv2', left: 'Wooden Ruler 📏', right: 'Slides only' },
        { id: 'mv3', left: 'Five-Rupee Coin 🪙', right: 'Rolls AND Slides' },
        { id: 'mv4', left: 'Soup Tin Can 🥫', right: 'Rolls AND Slides' },
      ],
    },
    explanation: '💡 Round objects roll, flat objects slide, objects with both flat and curved surfaces do both!',
    points: 15,
  },
];
