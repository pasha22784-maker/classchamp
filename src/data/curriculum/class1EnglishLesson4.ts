import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 1 ENGLISH (MRIDANG & MARIGOLD)
// CHAPTER 4: ACTION WORDS IN PLAY (VERBS)
// Comprehensive Curriculum Covering All 6 Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_1_ENGLISH_LESSON_4_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Identifying Action Words (Doing Words)
  // --------------------------------------------------------------------------
  {
    id: 'c1_e4_concept_verb_01',
    grade: 1,
    subject: 'english',
    chapter: 'Action Words in Play (Verbs)',
    concept: 'Identifying Action Words',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Look at the happy boy on the playground track 🏃. What ACTION is he doing?',
    visualEmoji: '🏃 👟',
    payload: {
      options: [
        { id: 'opt_vrb1_1', text: 'RUNNING 🏃', isCorrect: true },
        { id: 'opt_vrb1_2', text: 'Shoe', isCorrect: false },
        { id: 'opt_vrb1_3', text: 'Tree', isCorrect: false },
      ],
    },
    explanation: '💡 **Run** 🏃 is an action word (verb) because it shows something you do!',
    points: 10,
  },
  {
    id: 'c1_e4_concept_verb_02',
    grade: 1,
    subject: 'english',
    chapter: 'Action Words in Play (Verbs)',
    concept: 'Identifying Action Words',
    difficulty: 'easy',
    type: 'mcq',
    question: 'When music plays at a birthday party 🎶, what fun ACTION do children do?',
    visualEmoji: '💃 🕺 🎶',
    payload: {
      options: [
        { id: 'opt_vrb2_1', text: 'DANCE 💃', isCorrect: true },
        { id: 'opt_vrb2_2', text: 'Cake 🎂', isCorrect: false },
        { id: 'opt_vrb2_3', text: 'Hat 🎩', isCorrect: false },
      ],
    },
    explanation: '💡 **Dance** 💃 is an action word! Cake and hat are things (nouns).',
    points: 10,
  },
  {
    id: 'c1_e4_concept_verb_03',
    grade: 1,
    subject: 'english',
    chapter: 'Action Words in Play (Verbs)',
    concept: 'Action Words Matching',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each action word to its fun picture emoji:',
    visualEmoji: '👏 😴 🍎 📖',
    payload: {
      pairs: [
        { id: 'act_p1', left: 'CLAP', right: '👏 Clapping hands' },
        { id: 'act_p2', left: 'SLEEP', right: '😴 Sleeping in bed' },
        { id: 'act_p3', left: 'EAT', right: '🍎 Eating an apple' },
        { id: 'act_p4', left: 'READ', right: '📖 Reading a book' },
      ],
    },
    explanation: '💡 Clap, sleep, eat, and read are all doing words (verbs)!',
    points: 15,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Animal Actions
  // --------------------------------------------------------------------------
  {
    id: 'c1_e4_concept_ani_01',
    grade: 1,
    subject: 'english',
    chapter: 'Action Words in Play (Verbs)',
    concept: 'Animal Action Matching',
    difficulty: 'easy',
    type: 'mcq',
    question: 'A little green frog 🐸 sits by the pond. What ACTION does a frog do best?',
    visualEmoji: '🐸 🪷',
    payload: {
      options: [
        { id: 'opt_af1_1', text: 'HOP / JUMP 🐸', isCorrect: true },
        { id: 'opt_af1_2', text: 'FLY high in clouds ☁️', isCorrect: false },
        { id: 'opt_af1_3', text: 'WRITE with a pencil ✏️', isCorrect: false },
      ],
    },
    explanation: '💡 Frogs have strong back legs so they **HOP and JUMP** 🐸!',
    points: 10,
  },
  {
    id: 'c1_e4_concept_ani_02',
    grade: 1,
    subject: 'english',
    chapter: 'Action Words in Play (Verbs)',
    concept: 'Animal Action Matching',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each creature with the special action it can do:',
    visualEmoji: '🐦 🐟 🦘 🐶',
    payload: {
      pairs: [
        { id: 'an_act_1', left: 'Bird 🐦', right: 'FLY in the sky' },
        { id: 'an_act_2', left: 'Fish 🐟', right: 'SWIM in the water' },
        { id: 'an_act_3', left: 'Kangaroo 🦘', right: 'HOP on grass' },
        { id: 'an_act_4', left: 'Dog 🐶', right: 'BARK loudly' },
      ],
    },
    explanation: '💡 Birds fly, fish swim, kangaroos hop, and dogs bark!',
    points: 15,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Action vs Naming Word (Verb vs Noun)
  // --------------------------------------------------------------------------
  {
    id: 'c1_e4_concept_vs_01',
    grade: 1,
    subject: 'english',
    chapter: 'Action Words in Play (Verbs)',
    concept: 'Find the Action Word',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which word in this sentence is the ACTION WORD: "Cats drink milk."',
    visualEmoji: '🐱 🥛',
    payload: {
      options: [
        { id: 'opt_vs1_1', text: 'drink', isCorrect: true },
        { id: 'opt_vs1_2', text: 'Cats', isCorrect: false },
        { id: 'opt_vs1_3', text: 'milk', isCorrect: false },
      ],
    },
    explanation: '💡 **Drink** is what the cats are doing, so it is the action word (verb)!',
    points: 10,
  },
  {
    id: 'c1_e4_concept_vs_02',
    grade: 1,
    subject: 'english',
    chapter: 'Action Words in Play (Verbs)',
    concept: 'Odd One Out (Find the Verb)',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Which word is an ACTION WORD among these four words?',
    visualEmoji: '🪑 ⚽ 🏃 🎒',
    payload: {
      options: [
        { id: 'opt_vodd_1', text: 'JUMP', isCorrect: true },
        { id: 'opt_vodd_2', text: 'Chair', isCorrect: false },
        { id: 'opt_vodd_3', text: 'Ball', isCorrect: false },
        { id: 'opt_vodd_4', text: 'Table', isCorrect: false },
      ],
    },
    explanation: '💡 Chair, Ball, and Table are objects (nouns). **JUMP** is an action word!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 4: -ing Action Words (Playing, Singing, Reading)
  // --------------------------------------------------------------------------
  {
    id: 'c1_e4_concept_ing_01',
    grade: 1,
    subject: 'english',
    chapter: 'Action Words in Play (Verbs)',
    concept: '-ing Words Fill Blank',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'Look at the picture: Tina is holding a microphone and singing 🎤. Tina is [BLANK] a sweet song.',
    visualEmoji: '👧 🎤 🎶',
    payload: {
      correctAnswer: 'singing',
      wordBank: ['singing', 'sleeping', 'crying', 'eating'],
      displayTemplate: 'Tina is [BLANK] a sweet song. 🎤',
    },
    explanation: '💡 Tina is **singing** 🎤! Adding "-ing" shows an action happening right now.',
    points: 10,
  },
  {
    id: 'c1_e4_concept_ing_02',
    grade: 1,
    subject: 'english',
    chapter: 'Action Words in Play (Verbs)',
    concept: '-ing Words Fill Blank',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'Children are in the park kicking a football ⚽. The children are [BLANK] outside.',
    visualEmoji: '🧒 ⚽ 🏞️',
    payload: {
      correctAnswer: 'playing',
      wordBank: ['playing', 'sleeping', 'cooking', 'washing'],
      displayTemplate: 'The children are [BLANK] outside. ⚽',
    },
    explanation: '💡 Play + ing = **playing**! They are playing with a ball.',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 5: Body Action Rhymes (Simon Says)
  // --------------------------------------------------------------------------
  {
    id: 'c1_e4_concept_rhyme_01',
    grade: 1,
    subject: 'english',
    chapter: 'Action Words in Play (Verbs)',
    concept: 'Body Actions Matching',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match the body part with the natural action you do with it:',
    visualEmoji: '👀 👂 👃 👣',
    payload: {
      pairs: [
        { id: 'bact_1', left: 'Eyes 👀', right: 'SEE & BLINK' },
        { id: 'bact_2', left: 'Ears 👂', right: 'HEAR sounds' },
        { id: 'bact_3', left: 'Nose 👃', right: 'SMELL flowers' },
        { id: 'bact_4', left: 'Feet 👣', right: 'WALK & TAP' },
      ],
    },
    explanation: '💡 Eyes see, ears hear, noses smell, and feet walk!',
    points: 15,
  },
  {
    id: 'c1_e4_concept_rhyme_02',
    grade: 1,
    subject: 'english',
    chapter: 'Action Words in Play (Verbs)',
    concept: 'Action Rhyme Completion',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'Complete the popular poem: "Two little hands go [BLANK], [BLANK], [BLANK]!" 👏',
    visualEmoji: '👏 👏 👏',
    payload: {
      correctAnswer: 'clap',
      wordBank: ['clap', 'sleep', 'bite', 'kick'],
      displayTemplate: 'Two little hands go [BLANK], clap, clap! 👏',
    },
    explanation: '💡 "Two little hands go **clap, clap, clap**!" 👏',
    points: 10,
  },
];
