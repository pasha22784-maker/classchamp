import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 1 MATHEMATICS — CHAPTER 1: SHAPES AND SPACE (Finding the Furry Cat)
// Comprehensive Curriculum Covering All 11 Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_1_MATHS_LESSON_1_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Inside and Outside (अंदर और बाहर)
  // --------------------------------------------------------------------------
  {
    id: 'c1_m1_concept_inout_01',
    grade: 1,
    subject: 'maths',
    chapter: 'Finding the Furry Cat (Shapes & Space)',
    concept: 'Inside vs Outside',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Look at the little kitten 🐱 and the basket 🧺. Where is the kitten?',
    visualEmoji: '🐱 🧺',
    payload: {
      options: [
        { id: 'opt_in_1', text: 'INSIDE the basket 🧺', isCorrect: true },
        { id: 'opt_in_2', text: 'OUTSIDE the basket 🌿', isCorrect: false },
      ],
    },
    explanation: '💡 Remember: An object is INSIDE when it is nestled within a basket, room, or box. The kitten is inside!',
    points: 10,
  },
  {
    id: 'c1_m1_concept_inout_02',
    grade: 1,
    subject: 'maths',
    chapter: 'Finding the Furry Cat (Shapes & Space)',
    concept: 'Inside vs Outside',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Look at the fruit table. Where is the red apple 🍎 located relative to the bowl 🥣?',
    visualEmoji: '🥣 🍎',
    payload: {
      options: [
        { id: 'opt_out_1', text: 'OUTSIDE the bowl 🍎', isCorrect: true },
        { id: 'opt_out_2', text: 'INSIDE the bowl 🥣', isCorrect: false },
      ],
    },
    explanation: '💡 Remember: The apple is on the open table surface, not in the bowl. So it is OUTSIDE!',
    points: 10,
  },
  {
    id: 'c1_m1_concept_inout_03',
    grade: 1,
    subject: 'maths',
    chapter: 'Finding the Furry Cat (Shapes & Space)',
    concept: 'Inside vs Outside (NCERT Story)',
    difficulty: 'medium',
    type: 'mcq',
    question: 'In the cold desert night 🌙, who stayed INSIDE the warm tent ⛺?',
    visualEmoji: '⛺ 🐪',
    payload: {
      options: [
        { id: 'opt_arab_1', text: 'The Arab stayed INSIDE the tent ⛺', isCorrect: true },
        { id: 'opt_arab_2', text: 'The Camel was INSIDE the tent 🐪', isCorrect: false },
      ],
    },
    explanation: '💡 NCERT Chapter 1: The Arab went inside the cozy tent to sleep, while the camel stood outside in the cold!',
    points: 10,
  },
  {
    id: 'c1_m1_concept_inout_04',
    grade: 1,
    subject: 'maths',
    chapter: 'Finding the Furry Cat (Shapes & Space)',
    concept: 'Inside vs Outside',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'When it started raining 🌧️, the children ran [BLANK] their home to stay dry.',
    visualEmoji: '🌧️ 🏡',
    payload: {
      displayTemplate: 'When it started raining 🌧️, the children ran [BLANK] their home to stay dry.',
      wordBank: ['INSIDE', 'OUTSIDE', 'UNDER', 'TOP'],
      correctAnswer: 'INSIDE',
    },
    explanation: '💡 Remember: We go INSIDE our home under the roof to protect ourselves from rain!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Bigger and Smaller (बड़ा और छोटा)
  // --------------------------------------------------------------------------
  {
    id: 'c1_m1_concept_bigsmall_01',
    grade: 1,
    subject: 'maths',
    chapter: 'Finding the Furry Cat (Shapes & Space)',
    concept: 'Bigger vs Smaller',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Look at the animals: 🐘 Elephant and 🐕 Dog. Which animal is BIGGER?',
    visualEmoji: '🐘 🐕',
    payload: {
      options: [
        { id: 'opt_bs_1', text: '🐘 Elephant is BIGGER', isCorrect: true },
        { id: 'opt_bs_2', text: '🐕 Dog is BIGGER', isCorrect: false },
      ],
    },
    explanation: '💡 Remember: An elephant 🐘 is huge and much bigger in size than a dog 🐕!',
    points: 10,
  },
  {
    id: 'c1_m1_concept_bigsmall_02',
    grade: 1,
    subject: 'maths',
    chapter: 'Finding the Furry Cat (Shapes & Space)',
    concept: 'Bigger vs Smaller',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Look at the fruits: 🍉 Watermelon and 🍓 Strawberry. Which fruit is SMALLER?',
    visualEmoji: '🍉 🍓',
    payload: {
      options: [
        { id: 'opt_bs_3', text: '🍓 Strawberry is SMALLER', isCorrect: true },
        { id: 'opt_bs_4', text: '🍉 Watermelon is SMALLER', isCorrect: false },
      ],
    },
    explanation: '💡 Remember: A strawberry 🍓 can fit in your hand, while a watermelon 🍉 is very big. Strawberry is smaller!',
    points: 10,
  },
  {
    id: 'c1_m1_concept_bigsmall_03',
    grade: 1,
    subject: 'maths',
    chapter: 'Finding the Furry Cat (Shapes & Space)',
    concept: 'Bigger vs Smaller',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Compare a huge 🌳 Banyan tree with a small 🌱 Rose plant. Which one is SMALLER?',
    visualEmoji: '🌳 🌱',
    payload: {
      options: [
        { id: 'opt_tree_1', text: '🌱 Rose plant is SMALLER', isCorrect: true },
        { id: 'opt_tree_2', text: '🌳 Banyan tree is SMALLER', isCorrect: false },
      ],
    },
    explanation: '💡 Remember: The rose plant 🌱 is short and small, while the banyan tree 🌳 is massive and big!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Biggest and Smallest (सबसे बड़ा और सबसे छोटा)
  // --------------------------------------------------------------------------
  {
    id: 'c1_m1_concept_bigsm_01',
    grade: 1,
    subject: 'maths',
    chapter: 'Finding the Furry Cat (Shapes & Space)',
    concept: 'Biggest vs Smallest',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Look at the three bubbles in the air: 🫧 Bubble A (tiny), 🫧 Bubble B (medium), 🫧 Bubble C (giant). Which is the BIGGEST?',
    visualEmoji: '🫧 🫧 🫧',
    payload: {
      options: [
        { id: 'opt_bub_1', text: 'Bubble C is the BIGGEST', isCorrect: true },
        { id: 'opt_bub_2', text: 'Bubble A is the BIGGEST', isCorrect: false },
        { id: 'opt_bub_3', text: 'Bubble B is the BIGGEST', isCorrect: false },
      ],
    },
    explanation: '💡 Remember: The biggest is the one that has the largest size among all three bubbles!',
    points: 10,
  },
  {
    id: 'c1_m1_concept_bigsm_02',
    grade: 1,
    subject: 'maths',
    chapter: 'Finding the Furry Cat (Shapes & Space)',
    concept: 'Biggest vs Smallest',
    difficulty: 'medium',
    type: 'drag_order',
    question: 'Arrange these animals in order from SMALLEST to BIGGEST:',
    visualEmoji: '🐜 🐱 🐘',
    payload: {
      scrambled: ['🐘 Elephant', '🐜 Tiny Ant', '🐱 Cat'],
      correctSequence: ['🐜 Tiny Ant', '🐱 Cat', '🐘 Elephant'],
    },
    explanation: '💡 Ant 🐜 is smallest, Cat 🐱 is medium size, Elephant 🐘 is biggest!',
    points: 10,
  },
  {
    id: 'c1_m1_concept_bigsm_03',
    grade: 1,
    subject: 'maths',
    chapter: 'Finding the Furry Cat (Shapes & Space)',
    concept: 'Biggest vs Smallest',
    difficulty: 'hard',
    type: 'drag_order',
    question: 'Arrange these fruits in order from BIGGEST to SMALLEST:',
    visualEmoji: '🍉 🍎 🍒',
    payload: {
      scrambled: ['🍒 Cherry', '🍉 Watermelon', '🍎 Apple'],
      correctSequence: ['🍉 Watermelon', '🍎 Apple', '🍒 Cherry'],
    },
    explanation: '💡 Watermelon 🍉 is the biggest, Apple 🍎 is in the middle, and Cherry 🍒 is the smallest!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 4: Top and Bottom (ऊपर और नीचे)
  // --------------------------------------------------------------------------
  {
    id: 'c1_m1_concept_topbot_01',
    grade: 1,
    subject: 'maths',
    chapter: 'Finding the Furry Cat (Shapes & Space)',
    concept: 'Top vs Bottom',
    difficulty: 'easy',
    type: 'mcq',
    question: 'On the playground slide 🛝, Rohan is ready at the highest point. Where is Rohan?',
    visualEmoji: '🛝 🧒',
    payload: {
      options: [
        { id: 'opt_tb_1', text: 'At the TOP of the slide 🛝', isCorrect: true },
        { id: 'opt_tb_2', text: 'At the BOTTOM on the ground 🌿', isCorrect: false },
      ],
    },
    explanation: '💡 Remember: Top means the highest point on the slide before sliding down!',
    points: 10,
  },
  {
    id: 'c1_m1_concept_topbot_02',
    grade: 1,
    subject: 'maths',
    chapter: 'Finding the Furry Cat (Shapes & Space)',
    concept: 'Top vs Bottom',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Three clay pots 🏺 🏺 🏺 are stacked on top of each other. Which pot is resting on the floor?',
    visualEmoji: '🏺',
    payload: {
      options: [
        { id: 'opt_pot_1', text: 'The pot at the BOTTOM 🏺', isCorrect: true },
        { id: 'opt_pot_2', text: 'The pot at the TOP 🏺', isCorrect: false },
      ],
    },
    explanation: '💡 Remember: The pot on the floor supports the stack and is at the BOTTOM!',
    points: 10,
  },
  {
    id: 'c1_m1_concept_topbot_03',
    grade: 1,
    subject: 'maths',
    chapter: 'Finding the Furry Cat (Shapes & Space)',
    concept: 'Top vs Bottom',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'The bright green parrot 🦜 flew up and perched at the [BLANK] branch of the tree.',
    visualEmoji: '🦜 🌳',
    payload: {
      displayTemplate: 'The bright green parrot 🦜 flew up and perched at the [BLANK] branch of the tree.',
      wordBank: ['TOP', 'BOTTOM', 'UNDER', 'INSIDE'],
      correctAnswer: 'TOP',
    },
    explanation: '💡 Remember: Flying birds perch high up at the TOP branch of trees!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 5: Nearer and Farther (पास और दूर)
  // --------------------------------------------------------------------------
  {
    id: 'c1_m1_concept_nearfar_01',
    grade: 1,
    subject: 'maths',
    chapter: 'Finding the Furry Cat (Shapes & Space)',
    concept: 'Nearer vs Farther',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Two birds are flying to a tree 🌳. Pink bird is 2 steps away, Blue bird is 10 steps away. Which bird is NEARER to the tree?',
    visualEmoji: '🐦 🌳',
    payload: {
      options: [
        { id: 'opt_nf_1', text: 'Pink bird is NEARER 🐦', isCorrect: true },
        { id: 'opt_nf_2', text: 'Blue bird is NEARER 🐦', isCorrect: false },
      ],
    },
    explanation: '💡 Remember: Nearer means having a shorter distance to the tree!',
    points: 10,
  },
  {
    id: 'c1_m1_concept_nearfar_02',
    grade: 1,
    subject: 'maths',
    chapter: 'Finding the Furry Cat (Shapes & Space)',
    concept: 'Nearer vs Farther',
    difficulty: 'medium',
    type: 'mcq',
    question: 'House A is beside the school 🏫. House B is 3 kilometers away. Which house is FARTHER from the school?',
    visualEmoji: '🏫 🏡',
    payload: {
      options: [
        { id: 'opt_nf_3', text: 'House B is FARTHER from school 🏡', isCorrect: true },
        { id: 'opt_nf_4', text: 'House A is FARTHER from school 🏡', isCorrect: false },
      ],
    },
    explanation: '💡 Remember: Farther means a longer distance away from the school!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 6: Nearest and Farthest (सबसे पास और सबसे दूर)
  // --------------------------------------------------------------------------
  {
    id: 'c1_m1_concept_nstfst_01',
    grade: 1,
    subject: 'maths',
    chapter: 'Finding the Furry Cat (Shapes & Space)',
    concept: 'Nearest vs Farthest',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Three puppies 🐶 🐶 🐶 run to their mama dog 🐕. Puppy 1 is right next to mama. Which puppy is NEAREST to mama dog?',
    visualEmoji: '🐕 🐶 🐶 🐶',
    payload: {
      options: [
        { id: 'opt_nst_1', text: 'Puppy 1 is NEAREST to mama dog', isCorrect: true },
        { id: 'opt_nst_2', text: 'Puppy 3 is NEAREST to mama dog', isCorrect: false },
      ],
    },
    explanation: '💡 Remember: Nearest means closest of all to the mama dog!',
    points: 10,
  },
  {
    id: 'c1_m1_concept_nstfst_02',
    grade: 1,
    subject: 'maths',
    chapter: 'Finding the Furry Cat (Shapes & Space)',
    concept: 'Nearest vs Farthest',
    difficulty: 'hard',
    type: 'mcq',
    question: 'Three children are running towards a park swing 🎪. Who is FARTHEST from the swing?',
    visualEmoji: '🏃 🏃 🏃 🎪',
    payload: {
      options: [
        { id: 'opt_fst_1', text: 'The child who is farthest back at the gate', isCorrect: true },
        { id: 'opt_fst_2', text: 'The child touching the swing rope', isCorrect: false },
      ],
    },
    explanation: '💡 Remember: Farthest means the longest distance away from the swing!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 7: On and Under (के ऊपर और के नीचे)
  // --------------------------------------------------------------------------
  {
    id: 'c1_m1_concept_onunder_01',
    grade: 1,
    subject: 'maths',
    chapter: 'Finding the Furry Cat (Shapes & Space)',
    concept: 'On vs Under',
    difficulty: 'easy',
    type: 'mcq',
    question: 'The school bag 🎒 is resting ON the study table 🪑. Where is the bag?',
    visualEmoji: '🪑 🎒',
    payload: {
      options: [
        { id: 'opt_ou_1', text: 'ON the table 🪑', isCorrect: true },
        { id: 'opt_ou_2', text: 'UNDER the table 🐾', isCorrect: false },
      ],
    },
    explanation: '💡 Remember: An object placed on the surface is ON the table. Below the table on the floor is UNDER!',
    points: 10,
  },
  {
    id: 'c1_m1_concept_onunder_02',
    grade: 1,
    subject: 'maths',
    chapter: 'Finding the Furry Cat (Shapes & Space)',
    concept: 'On vs Under',
    difficulty: 'easy',
    type: 'mcq',
    question: 'A naughty mouse 🐭 is hiding UNDER the bed 🛏️ on the floor. Where is the mouse?',
    visualEmoji: '🛏️ 🐭',
    payload: {
      options: [
        { id: 'opt_ou_3', text: 'UNDER the bed 🛏️', isCorrect: true },
        { id: 'opt_ou_4', text: 'ON the bed 🛏️', isCorrect: false },
      ],
    },
    explanation: '💡 Remember: The mouse is hiding beneath the bed on the floor, so it is UNDER the bed!',
    points: 10,
  },
  {
    id: 'c1_m1_concept_onunder_03',
    grade: 1,
    subject: 'maths',
    chapter: 'Finding the Furry Cat (Shapes & Space)',
    concept: 'Spatial Matching',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each item with its correct location relative to the table 🪑:',
    visualEmoji: '🪑',
    payload: {
      pairs: [
        { id: 'p_1', left: '📖 Story Book', right: 'ON the table' },
        { id: 'p_2', left: '👟 Running Shoes', right: 'UNDER the table' },
        { id: 'p_3', left: '🌀 Ceiling Fan', right: 'ABOVE the table' },
        { id: 'p_4', left: '🍎 Apple in lunchbox', right: 'INSIDE the box' },
      ],
    },
    explanation: '💡 Book is ON the table, shoes are UNDER, fan is ABOVE, and apple is INSIDE!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 8: Above and Below (के ऊपर और के नीचे - Without Contact)
  // --------------------------------------------------------------------------
  {
    id: 'c1_m1_concept_abovebelow_01',
    grade: 1,
    subject: 'maths',
    chapter: 'Finding the Furry Cat (Shapes & Space)',
    concept: 'Above vs Below',
    difficulty: 'medium',
    type: 'mcq',
    question: 'In your classroom, the electric ceiling fan 🌀 is hanging from the roof. The fan is [BLANK] the study tables.',
    visualEmoji: '🌀 🪑',
    payload: {
      options: [
        { id: 'opt_ab_1', text: 'ABOVE the study tables 🌀', isCorrect: true },
        { id: 'opt_ab_2', text: 'BELOW the study tables 🪑', isCorrect: false },
      ],
    },
    explanation: '💡 Remember: The ceiling fan hangs high in the air without touching the tables, so it is ABOVE!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 9: Shapes Around Us (Circle, Square, Triangle, Rectangle)
  // --------------------------------------------------------------------------
  {
    id: 'c1_m1_concept_shapes_01',
    grade: 1,
    subject: 'maths',
    chapter: 'Finding the Furry Cat (Shapes & Space)',
    concept: 'Circle in Real Life',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Look at a round wall clock ⏰ and a delicious chapati 🫓. What shape are they?',
    visualEmoji: '⏰ 🫓',
    payload: {
      options: [
        { id: 'opt_sh_1', text: 'Round like a CIRCLE ⚪', isCorrect: true },
        { id: 'opt_sh_2', text: 'Box-like like a SQUARE ⏹️', isCorrect: false },
        { id: 'opt_sh_3', text: 'Pointy like a TRIANGLE 🔺', isCorrect: false },
      ],
    },
    explanation: '💡 Remember: Clocks and chapatis are round with no corners, making them CIRCLES ⚪!',
    points: 10,
  },
  {
    id: 'c1_m1_concept_shapes_02',
    grade: 1,
    subject: 'maths',
    chapter: 'Finding the Furry Cat (Shapes & Space)',
    concept: 'Triangle in Real Life',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which delicious snack has 3 sharp corners and looks like a TRIANGLE 🔺?',
    visualEmoji: '🔺 🥟',
    payload: {
      options: [
        { id: 'opt_sh_4', text: 'Crispy Samosa 🥟', isCorrect: true },
        { id: 'opt_sh_5', text: 'Round Gulab Jamun 🟤', isCorrect: false },
        { id: 'opt_sh_6', text: 'Square Sandwich 🥪', isCorrect: false },
      ],
    },
    explanation: '💡 Remember: A samosa has 3 sides and 3 corners, which is a TRIANGLE 🔺!',
    points: 10,
  },
  {
    id: 'c1_m1_concept_shapes_03',
    grade: 1,
    subject: 'maths',
    chapter: 'Finding the Furry Cat (Shapes & Space)',
    concept: 'Shapes Matching',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each real-life object with its geometric shape:',
    visualEmoji: '🎨 📐',
    payload: {
      pairs: [
        { id: 'sp_1', left: '⚽ Football', right: 'Circle (Round) ⚪' },
        { id: 'sp_2', left: '🎲 Game Dice', right: 'Square (4 equal sides) ⏹️' },
        { id: 'sp_3', left: '🍕 Pizza Slice', right: 'Triangle (3 corners) 🔺' },
        { id: 'sp_4', left: '🚪 Classroom Door', right: 'Rectangle (Long box) ▭' },
      ],
    },
    explanation: '💡 Football is a Circle, Dice is a Square, Pizza slice is a Triangle, and Door is a Rectangle!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 10: Sorting Shapes (आकारों को छांटना)
  // --------------------------------------------------------------------------
  {
    id: 'c1_m1_concept_sorting_01',
    grade: 1,
    subject: 'maths',
    chapter: 'Finding the Furry Cat (Shapes & Space)',
    concept: 'Sorting & Classification',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Aarav has a basket for ROUND things. Which fruit should he put in this basket?',
    visualEmoji: '🧺 🍊',
    payload: {
      options: [
        { id: 'opt_sort_1', text: '🍊 Round Orange', isCorrect: true },
        { id: 'opt_sort_2', text: '📦 Square Juice Carton', isCorrect: false },
        { id: 'opt_sort_3', text: '📐 Triangular Ruler', isCorrect: false },
      ],
    },
    explanation: '💡 Remember: An orange 🍊 is round like a ball, so it belongs in the round basket!',
    points: 10,
  },
  {
    id: 'c1_m1_concept_sorting_02',
    grade: 1,
    subject: 'maths',
    chapter: 'Finding the Furry Cat (Shapes & Space)',
    concept: 'Sorting Odd One Out',
    difficulty: 'hard',
    type: 'mcq',
    question: 'Find the odd one out! Which object does NOT have 4 straight sides?',
    visualEmoji: '🪙 📱 📖 🚪',
    payload: {
      options: [
        { id: 'opt_odd_1', text: '🪙 Round ₹5 Coin', isCorrect: true },
        { id: 'opt_odd_2', text: '📱 Mobile Phone', isCorrect: false },
        { id: 'opt_odd_3', text: '📖 Notebook', isCorrect: false },
        { id: 'opt_odd_4', text: '🚪 Door', isCorrect: false },
      ],
    },
    explanation: '💡 The coin 🪙 is circular/round, while the phone, book, and door all have 4 straight sides!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 11: Rolling and Sliding (लुढ़कना और फिसलना)
  // --------------------------------------------------------------------------
  {
    id: 'c1_m1_concept_rollslide_01',
    grade: 1,
    subject: 'maths',
    chapter: 'Finding the Furry Cat (Shapes & Space)',
    concept: 'Rolling vs Sliding',
    difficulty: 'easy',
    type: 'mcq',
    question: 'If you push these objects down a children’s slide 🛝, which one will ROLL like a wheel?',
    visualEmoji: '🛝 ⚽',
    payload: {
      options: [
        { id: 'opt_rs_1', text: '⚽ Round Football', isCorrect: true },
        { id: 'opt_rs_2', text: '📦 Cardboard Box', isCorrect: false },
        { id: 'opt_rs_3', text: '🧱 Wooden Block', isCorrect: false },
      ],
    },
    explanation: '💡 Remember: Objects with smooth curved or round surfaces ROLL down slopes!',
    points: 10,
  },
  {
    id: 'c1_m1_concept_rollslide_02',
    grade: 1,
    subject: 'maths',
    chapter: 'Finding the Furry Cat (Shapes & Space)',
    concept: 'Rolling vs Sliding',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Why does a school pencil box 📦 SLIDE across the desk when pushed?',
    visualEmoji: '📦',
    payload: {
      options: [
        { id: 'opt_rs_4', text: 'Because it has FLAT surfaces 📦', isCorrect: true },
        { id: 'opt_rs_5', text: 'Because it is round like a ball ⚽', isCorrect: false },
      ],
    },
    explanation: '💡 Remember: Objects with flat bottom faces SLIDE across flat surfaces!',
    points: 10,
  },
  {
    id: 'c1_m1_concept_rollslide_03',
    grade: 1,
    subject: 'maths',
    chapter: 'Finding the Furry Cat (Shapes & Space)',
    concept: 'Dual Property: Roll AND Slide',
    difficulty: 'hard',
    type: 'mcq',
    question: 'Look at a shiny ₹5 coin 🪙. Can a coin BOTH roll and slide?',
    visualEmoji: '🪙',
    payload: {
      options: [
        { id: 'opt_rs_6', text: 'YES! It can roll on its edge and slide on its flat face 🪙', isCorrect: true },
        { id: 'opt_rs_7', text: 'NO, it can only slide', isCorrect: false },
      ],
    },
    explanation: '💡 NCERT Wonder: A coin 🪙 has a flat circular face (it slides) AND a round edge (it rolls)!',
    points: 10,
  },
  {
    id: 'c1_m1_concept_rollslide_04',
    grade: 1,
    subject: 'maths',
    chapter: 'Finding the Furry Cat (Shapes & Space)',
    concept: 'Rolling vs Sliding Classification',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each object with whether it ROLLS or SLIDES:',
    visualEmoji: '🛝 ⚽ 📦',
    payload: {
      pairs: [
        { id: 'rsp_1', left: '⚽ Football', right: 'ROLLS (Round) 🔄' },
        { id: 'rsp_2', left: '📦 Wooden Box', right: 'SLIDES (Flat) ➡️' },
        { id: 'rsp_3', left: '🍅 Ripe Tomato', right: 'ROLLS (Round) 🔄' },
        { id: 'rsp_4', left: '🧱 Brick', right: 'SLIDES (Flat) ➡️' },
      ],
    },
    explanation: '💡 Football & Tomato are round so they ROLL. Box & Brick have flat faces so they SLIDE!',
    points: 10,
  },
];
