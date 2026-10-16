import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 2 ENGLISH (MRIDANG 2 & MARIGOLD 2)
// CHAPTER 2: PICTURE FUN & NAMING WORDS (NOUNS)
// Comprehensive Curriculum Covering All 6 Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_2_ENGLISH_LESSON_2_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Naming Words for People & Community Helpers (लोग)
  // --------------------------------------------------------------------------
  {
    id: 'c2_e2_concept_helper_01',
    grade: 2,
    subject: 'english',
    chapter: 'Picture Fun & Naming Words',
    concept: 'Community Helper Nouns',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Who flies large aeroplanes high up in the blue sky ✈️?',
    visualEmoji: '✈️ 👨‍✈️',
    payload: {
      options: [
        { id: 'opt_hp1_1', text: 'A Pilot 👨‍✈️', isCorrect: true },
        { id: 'opt_hp1_2', text: 'A Baker 👨‍🍳', isCorrect: false },
        { id: 'opt_hp1_3', text: 'A Carpenter 🪚', isCorrect: false },
      ],
    },
    explanation: '💡 A **Pilot 👨‍✈️** is the person who flies planes!',
    points: 10,
  },
  {
    id: 'c2_e2_concept_helper_02',
    grade: 2,
    subject: 'english',
    chapter: 'Picture Fun & Naming Words',
    concept: 'Farmer Growing Crops',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'A hardworking [BLANK] grows wheat, rice, and fresh vegetables in the farm field 🌾.',
    visualEmoji: '👨‍🌾 🌾 🚜',
    payload: {
      correctAnswer: 'farmer',
      wordBank: ['farmer', 'tailor', 'painter', 'barber'],
      displayTemplate: 'A hardworking [BLANK] grows fresh food in fields.',
    },
    explanation: '💡 A **farmer (किसान)** grows food crops for everyone!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Naming Words for Places (जगहें)
  // --------------------------------------------------------------------------
  {
    id: 'c2_e2_concept_place_01',
    grade: 2,
    subject: 'english',
    chapter: 'Picture Fun & Naming Words',
    concept: 'Hospital Place Noun',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Where do doctors and nurses take care of sick and injured patients?',
    visualEmoji: '🏥 🩺 🚑',
    payload: {
      options: [
        { id: 'opt_pl1_1', text: 'Hospital 🏥', isCorrect: true },
        { id: 'opt_pl1_2', text: 'Railway Station 🚉', isCorrect: false },
        { id: 'opt_pl1_3', text: 'Cinema Hall 🍿', isCorrect: false },
      ],
    },
    explanation: '💡 A **Hospital 🏥** is the place where sick people are healed!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Animals and Their Cute Babies
  // --------------------------------------------------------------------------
  {
    id: 'c2_e2_concept_baby_01',
    grade: 2,
    subject: 'english',
    chapter: 'Picture Fun & Naming Words',
    concept: 'Baby of a Cat',
    difficulty: 'easy',
    type: 'mcq',
    question: 'What is the baby of a cat called?',
    visualEmoji: '🐱 🐾',
    payload: {
      options: [
        { id: 'opt_bb1_1', text: 'Kitten 🐱', isCorrect: true },
        { id: 'opt_bb1_2', text: 'Puppy 🐶', isCorrect: false },
        { id: 'opt_bb1_3', text: 'Calf 🐮', isCorrect: false },
      ],
    },
    explanation: '💡 A baby cat is called a **Kitten**! 🐱',
    points: 10,
  },
  {
    id: 'c2_e2_concept_baby_02',
    grade: 2,
    subject: 'english',
    chapter: 'Picture Fun & Naming Words',
    concept: 'Baby of a Dog',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'The loving pet dog wagged its tail as its playful little [BLANK] ran around.',
    visualEmoji: '🐶 🐾',
    payload: {
      correctAnswer: 'puppy',
      wordBank: ['puppy', 'duckling', 'cub', 'lamb'],
      displayTemplate: 'The dog played with its cute [BLANK].',
    },
    explanation: '💡 A baby dog is called a **puppy**! 🐶',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 4: Spotting the Noun in a Picture Sentence
  // --------------------------------------------------------------------------
  {
    id: 'c2_e2_concept_spot_01',
    grade: 2,
    subject: 'english',
    chapter: 'Picture Fun & Naming Words',
    concept: 'Spotting the Naming Word',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Read the sentence: "The shiny bicycle 🚲 has two rubber wheels." Which word is a THING (naming word)?',
    visualEmoji: '🚲 🚴',
    payload: {
      options: [
        { id: 'opt_sp1_1', text: 'Bicycle (A vehicle/thing) 🚲', isCorrect: true },
        { id: 'opt_sp1_2', text: 'Shiny (Describing word)', isCorrect: false },
        { id: 'opt_sp1_3', text: 'Has (Helping word)', isCorrect: false },
      ],
    },
    explanation: '💡 **Bicycle** is the name of an object/vehicle, so it is a naming word (noun)!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 5: Build a Complete Sentence with Nouns (Drag Order)
  // --------------------------------------------------------------------------
  {
    id: 'c2_e2_concept_order_01',
    grade: 2,
    subject: 'english',
    chapter: 'Picture Fun & Naming Words',
    concept: 'Noun Sentence Builder',
    difficulty: 'medium',
    type: 'drag_order',
    question: 'Order the words to create a meaningful sentence about an animal:',
    visualEmoji: '🐘 🍌 🌳',
    payload: {
      tokens: ['The', 'big', 'elephant', 'eats', 'bananas.'],
      scrambled: ['bananas.', 'elephant', 'The', 'eats', 'big'],
      correctSequence: ['The', 'big', 'elephant', 'eats', 'bananas.'],
    },
    explanation: '💡 Correct order: "**The big elephant eats bananas.**" (Elephant and bananas are naming words!)',
    points: 15,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 6: Match Animals to Their Babies
  // --------------------------------------------------------------------------
  {
    id: 'c2_e2_concept_match_01',
    grade: 2,
    subject: 'english',
    chapter: 'Picture Fun & Naming Words',
    concept: 'Animal and Baby Match',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each mother animal to her baby:',
    visualEmoji: '🦁 🐥 🐮 🐶',
    payload: {
      pairs: [
        { id: 'an_p1', left: 'Cow 🐮', right: 'Calf' },
        { id: 'an_p2', left: 'Hen 🐔', right: 'Chick 🐥' },
        { id: 'an_p3', left: 'Lion 🦁', right: 'Cub' },
        { id: 'an_p4', left: 'Duck 🦆', right: 'Duckling' },
      ],
    },
    explanation: '💡 Cow-Calf, Hen-Chick, Lion-Cub, Duck-Duckling!',
    points: 15,
  },
];
