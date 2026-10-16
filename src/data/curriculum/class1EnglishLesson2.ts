import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 1 ENGLISH (MRIDANG & MARIGOLD)
// CHAPTER 2: PICTURE READING & NAMING WORDS (NOUNS)
// Comprehensive Curriculum Covering All 6 Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_1_ENGLISH_LESSON_2_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Naming Words for People (Persons)
  // --------------------------------------------------------------------------
  {
    id: 'c1_e2_concept_person_01',
    grade: 1,
    subject: 'english',
    chapter: 'Picture Reading & Naming Words (Nouns)',
    concept: 'Naming Words for People',
    difficulty: 'easy',
    type: 'mcq',
    question: 'A person who teaches children in a school classroom 🧑‍🏫 is called a:',
    visualEmoji: '🧑‍🏫 🏫 📚',
    payload: {
      options: [
        { id: 'opt_per1_1', text: 'Teacher (A person)', isCorrect: true },
        { id: 'opt_per1_2', text: 'Table', isCorrect: false },
        { id: 'opt_per1_3', text: 'Tree', isCorrect: false },
      ],
    },
    explanation: '💡 A **Teacher** 🧑‍🏫 is a naming word for a person who helps us learn!',
    points: 10,
  },
  {
    id: 'c1_e2_concept_person_02',
    grade: 1,
    subject: 'english',
    chapter: 'Picture Reading & Naming Words (Nouns)',
    concept: 'Naming Words for People',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which of the following is a NAMING WORD for a person who cures sick people?',
    visualEmoji: '🧑‍⚕️ 🩺',
    payload: {
      options: [
        { id: 'opt_per2_1', text: 'Doctor 🧑‍⚕️', isCorrect: true },
        { id: 'opt_per2_2', text: 'Medicine 💊', isCorrect: false },
        { id: 'opt_per2_3', text: 'Hospital 🏥', isCorrect: false },
      ],
    },
    explanation: '💡 **Doctor** 🧑‍⚕️ is the person (noun). Medicine is a thing and Hospital is a place!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Naming Words for Animals and Birds
  // --------------------------------------------------------------------------
  {
    id: 'c1_e2_concept_animal_01',
    grade: 1,
    subject: 'english',
    chapter: 'Picture Reading & Naming Words (Nouns)',
    concept: 'Naming Words for Animals',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Look at the picture of the big gentle animal that gives us milk 🐄. What is its name?',
    visualEmoji: '🐄 🥛',
    payload: {
      options: [
        { id: 'opt_ani1_1', text: 'Cow 🐄 (An animal)', isCorrect: true },
        { id: 'opt_ani1_2', text: 'Chair 🪑', isCorrect: false },
        { id: 'opt_ani1_3', text: 'Car 🚗', isCorrect: false },
      ],
    },
    explanation: '💡 **Cow** 🐄 is a naming word for a farm animal!',
    points: 10,
  },
  {
    id: 'c1_e2_concept_animal_02',
    grade: 1,
    subject: 'english',
    chapter: 'Picture Reading & Naming Words (Nouns)',
    concept: 'Animal and Sound Matching',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each animal (naming word) with its familiar sound:',
    visualEmoji: '🐶 🐱 🐄 🦆',
    payload: {
      pairs: [
        { id: 'ani_snd_1', left: 'Dog 🐶', right: 'Woof! Bark!' },
        { id: 'ani_snd_2', left: 'Cat 🐱', right: 'Meow! Meow!' },
        { id: 'ani_snd_3', left: 'Cow 🐄', right: 'Moo! Moo!' },
        { id: 'ani_snd_4', left: 'Duck 🦆', right: 'Quack! Quack!' },
      ],
    },
    explanation: '💡 Dogs bark, cats meow, cows moo, and ducks quack!',
    points: 15,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Naming Words for Places
  // --------------------------------------------------------------------------
  {
    id: 'c1_e2_concept_place_01',
    grade: 1,
    subject: 'english',
    chapter: 'Picture Reading & Naming Words (Nouns)',
    concept: 'Naming Words for Places',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Where do children go to play on swings, see-saws, and green grass 🏞️?',
    visualEmoji: '🏞️ 🛝',
    payload: {
      options: [
        { id: 'opt_plc1_1', text: 'Park (A place to play)', isCorrect: true },
        { id: 'opt_plc1_2', text: 'Pencil', isCorrect: false },
        { id: 'opt_plc1_3', text: 'Puppy', isCorrect: false },
      ],
    },
    explanation: '💡 A **Park** 🏞️ is a naming word for a fun open place!',
    points: 10,
  },
  {
    id: 'c1_e2_concept_place_02',
    grade: 1,
    subject: 'english',
    chapter: 'Picture Reading & Naming Words (Nouns)',
    concept: 'Naming Words for Places',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Which word in this sentence is a PLACE: "Aarav went to the Zoo with his family."',
    visualEmoji: '🦁 🦓 🦒 🏞️',
    payload: {
      options: [
        { id: 'opt_plc2_1', text: 'Zoo (A place with animals)', isCorrect: true },
        { id: 'opt_plc2_2', text: 'Aarav (A person)', isCorrect: false },
        { id: 'opt_plc2_3', text: 'went (Action verb)', isCorrect: false },
      ],
    },
    explanation: '💡 The **Zoo** is the place where wild animals live and visitors come to see them!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 4: Naming Words for Things (Objects)
  // --------------------------------------------------------------------------
  {
    id: 'c1_e2_concept_thing_01',
    grade: 1,
    subject: 'english',
    chapter: 'Picture Reading & Naming Words (Nouns)',
    concept: 'Naming Words for Things',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which of the following is a THING you carry to school on your back 🎒?',
    visualEmoji: '🎒',
    payload: {
      options: [
        { id: 'opt_thg1_1', text: 'School Bag 🎒 (A thing)', isCorrect: true },
        { id: 'opt_thg1_2', text: 'Friend 👦 (A person)', isCorrect: false },
        { id: 'opt_thg1_3', text: 'Walk 🚶 (An action)', isCorrect: false },
      ],
    },
    explanation: '💡 A **School Bag** 🎒 is a non-living object, so it is a **thing**!',
    points: 10,
  },
  {
    id: 'c1_e2_concept_thing_02',
    grade: 1,
    subject: 'english',
    chapter: 'Picture Reading & Naming Words (Nouns)',
    concept: 'Classroom Things Matching',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each classroom thing with how we use it:',
    visualEmoji: '✏️ 📖 🪑 ✂️',
    payload: {
      pairs: [
        { id: 'cls_th1', left: 'Pencil ✏️', right: 'To write letters' },
        { id: 'cls_th2', left: 'Book 📖', right: 'To read stories' },
        { id: 'cls_th3', left: 'Chair 🪑', right: 'To sit on' },
        { id: 'cls_th4', left: 'Eraser 🧼', right: 'To rub mistakes' },
      ],
    },
    explanation: '💡 Pencils, books, chairs, and erasers are all useful classroom things (nouns)!',
    points: 15,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 5: Categorizing Naming Words (Person, Place, Animal, Thing)
  // --------------------------------------------------------------------------
  {
    id: 'c1_e2_concept_cat_01',
    grade: 1,
    subject: 'english',
    chapter: 'Picture Reading & Naming Words (Nouns)',
    concept: 'Noun Categories Matching',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each naming word to its correct category (Person, Place, Animal, Thing):',
    visualEmoji: '🏷️ 🗂️',
    payload: {
      pairs: [
        { id: 'cat_p1', left: 'Mother 👩', right: 'PERSON' },
        { id: 'cat_p2', left: 'Hospital 🏥', right: 'PLACE' },
        { id: 'cat_p3', left: 'Lion 🦁', right: 'ANIMAL' },
        { id: 'cat_p4', left: 'Football ⚽', right: 'THING' },
      ],
    },
    explanation: '💡 All naming words (nouns) name a Person 👩, Place 🏥, Animal 🦁, or Thing ⚽!',
    points: 15,
  },
  {
    id: 'c1_e2_concept_cat_02',
    grade: 1,
    subject: 'english',
    chapter: 'Picture Reading & Naming Words (Nouns)',
    concept: 'Odd One Out Noun',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Find the odd one out! Which word is an ACTION, NOT a naming word?',
    visualEmoji: '🐶 ⚽ 🏃 🎒',
    payload: {
      options: [
        { id: 'opt_odd_n1', text: 'RUN 🏃 (Action verb, not a noun)', isCorrect: true },
        { id: 'opt_odd_n2', text: 'DOG 🐶 (Animal)', isCorrect: false },
        { id: 'opt_odd_n3', text: 'BALL ⚽ (Thing)', isCorrect: false },
        { id: 'opt_odd_n4', text: 'BAG 🎒 (Thing)', isCorrect: false },
      ],
    },
    explanation: '💡 Dog, Ball, and Bag are names of objects and animals. Run 🏃 is doing an action!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 6: Picture Sentence Completion
  // --------------------------------------------------------------------------
  {
    id: 'c1_e2_concept_sent_01',
    grade: 1,
    subject: 'english',
    chapter: 'Picture Reading & Naming Words (Nouns)',
    concept: 'Picture Reading Fill Blank',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'Look at the picture: An elephant 🐘 is drinking water. The [BLANK] has big ears and a long trunk.',
    visualEmoji: '🐘 💧',
    payload: {
      correctAnswer: 'elephant',
      wordBank: ['elephant', 'mouse', 'bird', 'fish'],
      displayTemplate: 'The [BLANK] has big ears and a long trunk. 🐘',
    },
    explanation: '💡 The **elephant** 🐘 is the largest land animal with big floppy ears!',
    points: 10,
  },
  {
    id: 'c1_e2_concept_sent_02',
    grade: 1,
    subject: 'english',
    chapter: 'Picture Reading & Naming Words (Nouns)',
    concept: 'Picture Reading Fill Blank',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'Look at the picture: Maya is reading a fairy tale. Maya opens her favorite story [BLANK].',
    visualEmoji: '👧 📖',
    payload: {
      correctAnswer: 'book',
      wordBank: ['book', 'shoe', 'spoon', 'bottle'],
      displayTemplate: 'Maya opens her favorite story [BLANK]. 📖',
    },
    explanation: '💡 You open and read a story **book** 📖!',
    points: 10,
  },
];
