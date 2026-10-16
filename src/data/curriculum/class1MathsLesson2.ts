import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 1 MATHEMATICS — CHAPTER 2: WHAT IS LONG? WHAT IS ROUND?
// (क्या है लंबा? क्या है गोल?)
// Comprehensive Curriculum Covering All 7 Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_1_MATHS_LESSON_2_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Long Objects (लंबी वस्तुएं)
  // --------------------------------------------------------------------------
  {
    id: 'c1_m2_concept_long_01',
    grade: 1,
    subject: 'maths',
    chapter: 'What is Long? What is Round?',
    concept: 'Identifying Long Objects',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Look at the two playground toys: Cricket Bat 🏏 and Football ⚽. Which one is LONG?',
    visualEmoji: '🏏 ⚽',
    payload: {
      options: [
        { id: 'opt_l1_1', text: '🏏 Cricket Bat is LONG', isCorrect: true },
        { id: 'opt_l1_2', text: '⚽ Football is LONG', isCorrect: false },
      ],
    },
    explanation: '💡 Remember: A cricket bat 🏏 has length and extends straight, so it is LONG! A football ⚽ is round.',
    points: 10,
  },
  {
    id: 'c1_m2_concept_long_02',
    grade: 1,
    subject: 'maths',
    chapter: 'What is Long? What is Round?',
    concept: 'Identifying Long Objects',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which item in your school pencil pouch is LONG and straight?',
    visualEmoji: '✏️ 🪙 🔘',
    payload: {
      options: [
        { id: 'opt_l2_1', text: '✏️ Writing Pencil (LONG)', isCorrect: true },
        { id: 'opt_l2_2', text: '🪙 Round Coin (ROUND)', isCorrect: false },
        { id: 'opt_l2_3', text: '🔘 Shirt Button (ROUND)', isCorrect: false },
      ],
    },
    explanation: '💡 Remember: A pencil ✏️ is long and straight so you can hold and write with it!',
    points: 10,
  },
  {
    id: 'c1_m2_concept_long_03',
    grade: 1,
    subject: 'maths',
    chapter: 'What is Long? What is Round?',
    concept: 'Long Vegetables',
    difficulty: 'medium',
    type: 'mcq',
    question: 'In the vegetable market 🛒, which green vegetable is LONG like a ruler?',
    visualEmoji: '🥒 🍅 🧅',
    payload: {
      options: [
        { id: 'opt_veg_1', text: '🥒 Cucumber / Gourd (LONG)', isCorrect: true },
        { id: 'opt_veg_2', text: '🍅 Ripe Tomato (ROUND)', isCorrect: false },
        { id: 'opt_veg_3', text: '🧅 Pink Onion (ROUND)', isCorrect: false },
      ],
    },
    explanation: '💡 Remember: Cucumbers 🥒 and carrots 🥕 grow long, while tomatoes 🍅 and onions 🧅 are round!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Round Objects (गोल वस्तुएं)
  // --------------------------------------------------------------------------
  {
    id: 'c1_m2_concept_round_01',
    grade: 1,
    subject: 'maths',
    chapter: 'What is Long? What is Round?',
    concept: 'Identifying Round Objects',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Look at the breakfast plate 🍽️. Which delicious food item is completely ROUND?',
    visualEmoji: '🫓 🍌',
    payload: {
      options: [
        { id: 'opt_r1_1', text: '🫓 Soft Roti / Chapati (ROUND)', isCorrect: true },
        { id: 'opt_r1_2', text: '🍌 Yellow Banana (LONG)', isCorrect: false },
      ],
    },
    explanation: '💡 Remember: A roti 🫓 is round all around with zero corners, while a banana 🍌 is long!',
    points: 10,
  },
  {
    id: 'c1_m2_concept_round_02',
    grade: 1,
    subject: 'maths',
    chapter: 'What is Long? What is Round?',
    concept: 'Identifying Round Objects',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which sweet treat is perfectly ROUND and rolls in your palm?',
    visualEmoji: '🟡 🍫',
    payload: {
      options: [
        { id: 'opt_r2_1', text: '🟡 Motichoor Ladoo (ROUND)', isCorrect: true },
        { id: 'opt_r2_2', text: '🍫 Chocolate Bar (RECTANGLE/LONG)', isCorrect: false },
      ],
    },
    explanation: '💡 Remember: A ladoo 🟡 or rasgulla is spherical and round all around!',
    points: 10,
  },
  {
    id: 'c1_m2_concept_round_03',
    grade: 1,
    subject: 'maths',
    chapter: 'What is Long? What is Round?',
    concept: 'Classification: Long vs Round',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'A football ⚽ is round, but a cricket bat 🏏 is [BLANK].',
    visualEmoji: '⚽ 🏏',
    payload: {
      displayTemplate: 'A football ⚽ is round, but a cricket bat 🏏 is [BLANK].',
      wordBank: ['LONG', 'ROUND', 'SQUARE', 'TINY'],
      correctAnswer: 'LONG',
    },
    explanation: '💡 Remember: Balls are round, while bats are long!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Meeku Uncle’s Guessing Game (अंकल मीकू का छूकर पहचानना)
  // --------------------------------------------------------------------------
  {
    id: 'c1_m2_concept_riddle_01',
    grade: 1,
    subject: 'maths',
    chapter: 'What is Long? What is Round?',
    concept: "Uncle Meeku's Riddle: Pencil",
    difficulty: 'medium',
    type: 'mcq',
    question: 'Uncle Meeku puts his hand inside a bag and says: "Pointy at one end, flat at the other, round like a pipe... Guess what I am holding!"',
    visualEmoji: '🎒 ✏️',
    payload: {
      options: [
        { id: 'opt_rid_1', text: '✏️ A wooden Pencil!', isCorrect: true },
        { id: 'opt_rid_2', text: '⚽ A big Football!', isCorrect: false },
        { id: 'opt_rid_3', text: '📦 An Eraser Box!', isCorrect: false },
      ],
    },
    explanation: '💡 NCERT Chapter 2: A pencil ✏️ has a sharp writing point at one end, a flat eraser end at the other, and a cylindrical body!',
    points: 10,
  },
  {
    id: 'c1_m2_concept_riddle_02',
    grade: 1,
    subject: 'maths',
    chapter: 'What is Long? What is Round?',
    concept: "Uncle Meeku's Riddle: Ball",
    difficulty: 'medium',
    type: 'mcq',
    question: 'Uncle Meeku says: "Round all around, no corners, no sides. I can roll in your hand. What am I?"',
    visualEmoji: '🔮',
    payload: {
      options: [
        { id: 'opt_rid_4', text: '🔮 A smooth Ball / Marble', isCorrect: true },
        { id: 'opt_rid_5', text: '📏 A long Scale', isCorrect: false },
        { id: 'opt_rid_6', text: '📖 A Story Book', isCorrect: false },
      ],
    },
    explanation: '💡 NCERT Chapter 2: A ball ⚽ or marble 🔮 has no corners, no edges, and rolls anywhere!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 4: Building Towers (मीनार बनाना - कौन टिकेगा, कौन गिरेगा?)
  // --------------------------------------------------------------------------
  {
    id: 'c1_m2_concept_tower_01',
    grade: 1,
    subject: 'maths',
    chapter: 'What is Long? What is Round?',
    concept: 'Stacking: Making a Tower',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Can you stack 5 flat ₹5 coins 🪙 🪙 🪙 on top of each other to build a small tower?',
    visualEmoji: '🪙 🪙 🪙',
    payload: {
      options: [
        { id: 'opt_tow_1', text: 'YES! Flat coins can balance and form a tower 🪙', isCorrect: true },
        { id: 'opt_tow_2', text: 'NO, coins roll away immediately', isCorrect: false },
      ],
    },
    explanation: '💡 NCERT Chapter 2: Objects with flat faces like coins 🪙, matchboxes, and books can easily stack to make towers!',
    points: 10,
  },
  {
    id: 'c1_m2_concept_tower_02',
    grade: 1,
    subject: 'maths',
    chapter: 'What is Long? What is Round?',
    concept: 'Stacking: Round vs Flat',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Can you stack 3 tennis balls 🎾 🎾 🎾 vertically on top of each other without holding them?',
    visualEmoji: '🎾 🎾 🎾',
    payload: {
      options: [
        { id: 'opt_tow_3', text: 'NO! Round balls roll off and fall down 🎾', isCorrect: true },
        { id: 'opt_tow_4', text: 'YES! Balls stand easily like bricks', isCorrect: false },
      ],
    },
    explanation: '💡 NCERT Wonder: Round objects have no flat surface to balance, so they roll and cannot easily make a tower!',
    points: 10,
  },
  {
    id: 'c1_m2_concept_tower_03',
    grade: 1,
    subject: 'maths',
    chapter: 'What is Long? What is Round?',
    concept: 'Tower Stacking Objects',
    difficulty: 'hard',
    type: 'match_pairs',
    question: 'Match whether you can build a stable TOWER with these objects:',
    visualEmoji: '🧱 ⚽ 📦 🍊',
    payload: {
      pairs: [
        { id: 'tp_1', left: '📦 Matchboxes', right: 'CAN make a tower 🗼' },
        { id: 'tp_2', left: '⚽ Footballs', right: 'CANNOT make a tower ❌' },
        { id: 'tp_3', left: '📚 Story Books', right: 'CAN make a tower 🗼' },
        { id: 'tp_4', left: '🍊 Round Oranges', right: 'CANNOT make a tower ❌' },
      ],
    },
    explanation: '💡 Flat objects (Matchbox, Books) stack into towers. Round objects (Footballs, Oranges) roll away!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 5: What Rolls? What Slides? What Does Both?
  // --------------------------------------------------------------------------
  {
    id: 'c1_m2_concept_rollslide_01',
    grade: 1,
    subject: 'maths',
    chapter: 'What is Long? What is Round?',
    concept: 'Objects that both Roll and Slide',
    difficulty: 'hard',
    type: 'mcq',
    question: 'Which of these common objects can BOTH roll and slide?',
    visualEmoji: '🪙 🧱 ⚽',
    payload: {
      options: [
        { id: 'opt_dual_1', text: '🪙 Coin (Rolls on edge, Slides on face)', isCorrect: true },
        { id: 'opt_dual_2', text: '🧱 Brick (Only slides)', isCorrect: false },
        { id: 'opt_dual_3', text: '⚽ Ball (Only rolls)', isCorrect: false },
      ],
    },
    explanation: '💡 NCERT Secret: A coin 🪙 has a flat face (slides) and a circular rim (rolls)! Pipes and pencils can also do both.',
    points: 10,
  },
  {
    id: 'c1_m2_concept_rollslide_02',
    grade: 1,
    subject: 'maths',
    chapter: 'What is Long? What is Round?',
    concept: 'Roll vs Slide Classification',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each object with how it moves down a park slide 🛝:',
    visualEmoji: '🛝',
    payload: {
      pairs: [
        { id: 'rsp_1', left: '⚽ Round Football', right: 'It ROLLS 🔄' },
        { id: 'rsp_2', left: '📏 Flat Ruler', right: 'It SLIDES ➡️' },
        { id: 'rsp_3', left: '🪙 Indian Coin', right: 'BOTH Rolls and Slides ✨' },
        { id: 'rsp_4', left: '🍎 Fresh Apple', right: 'It ROLLS 🔄' },
      ],
    },
    explanation: '💡 Football & Apple roll, Ruler slides, and Coin can do BOTH!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 6: Sorting Long vs Round (लंबी और गोल चीजों को छांटना)
  // --------------------------------------------------------------------------
  {
    id: 'c1_m2_concept_sort_01',
    grade: 1,
    subject: 'maths',
    chapter: 'What is Long? What is Round?',
    concept: 'Sorting Long vs Round',
    difficulty: 'easy',
    type: 'match_pairs',
    question: 'Sort each object: Is it LONG or is it ROUND?',
    visualEmoji: '📏 🟡',
    payload: {
      pairs: [
        { id: 'lr_1', left: '🏏 Cricket Bat', right: 'It is LONG 📏' },
        { id: 'lr_2', left: '🍋 Yellow Lemon', right: 'It is ROUND 🟡' },
        { id: 'lr_3', left: '🪈 Bamboo Flute', right: 'It is LONG 📏' },
        { id: 'lr_4', left: '🍅 Red Tomato', right: 'It is ROUND 🟡' },
      ],
    },
    explanation: '💡 Bat & Flute are long. Lemon & Tomato are round!',
    points: 10,
  },
  {
    id: 'c1_m2_concept_sort_02',
    grade: 1,
    subject: 'maths',
    chapter: 'What is Long? What is Round?',
    concept: 'Odd One Out: Shape Property',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Find the odd one out! Which object is NOT long?',
    visualEmoji: '📏 🪥 🥕 ⚽',
    payload: {
      options: [
        { id: 'opt_odd_2', text: '⚽ Football (It is round, not long)', isCorrect: true },
        { id: 'opt_odd_1', text: '📏 Measuring Ruler (Long)', isCorrect: false },
        { id: 'opt_odd_3', text: '🪥 Toothbrush (Long)', isCorrect: false },
        { id: 'opt_odd_4', text: '🥕 Carrot (Long)', isCorrect: false },
      ],
    },
    explanation: '💡 Ruler, toothbrush, and carrot are long. A football ⚽ is round!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 7: Tracing Footprints / Shadows (छापे बनाना)
  // --------------------------------------------------------------------------
  {
    id: 'c1_m2_concept_trace_01',
    grade: 1,
    subject: 'maths',
    chapter: 'What is Long? What is Round?',
    concept: 'Tracing Shapes of Objects',
    difficulty: 'medium',
    type: 'mcq',
    question: 'If you place a bottle cap 🧴 flat on a sheet of paper and trace with a pencil, what shape will you get?',
    visualEmoji: '🧴 ✏️ ⚪',
    payload: {
      options: [
        { id: 'opt_tr_1', text: '⚪ A round CIRCLE', isCorrect: true },
        { id: 'opt_tr_2', text: '🔺 A sharp TRIANGLE', isCorrect: false },
        { id: 'opt_tr_3', text: '⏹️ A box SQUARE', isCorrect: false },
      ],
    },
    explanation: '💡 NCERT Chapter 2: The rim of a bottle cap is circular, so tracing it draws a round CIRCLE ⚪!',
    points: 10,
  },
  {
    id: 'c1_m2_concept_trace_02',
    grade: 1,
    subject: 'maths',
    chapter: 'What is Long? What is Round?',
    concept: 'Tracing Shapes of Objects',
    difficulty: 'medium',
    type: 'mcq',
    question: 'If you place a matchbox 📦 flat on paper and draw around its edges, what shape will you see?',
    visualEmoji: '📦 ✏️',
    payload: {
      options: [
        { id: 'opt_tr_4', text: '▭ A RECTANGLE with 4 straight sides', isCorrect: true },
        { id: 'opt_tr_5', text: '⚪ A round circle with no sides', isCorrect: false },
      ],
    },
    explanation: '💡 Remember: A matchbox 📦 has flat rectangular faces, so tracing its base makes a RECTANGLE ▭!',
    points: 10,
  },
];
