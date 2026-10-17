import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 6 ENGLISH (HONEYSUCKLE & A PACT WITH THE SUN)
// CHAPTER 1: A TALE OF TWO BIRDS & SENTENCES
// Comprehensive Curriculum Covering All Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_6_ENGLISH_LESSON_1_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Story Comprehension - A Tale of Two Birds
  // --------------------------------------------------------------------------
  {
    id: 'c6_e1_concept_story_01',
    grade: 6,
    subject: 'english',
    chapter: 'A Tale of Two Birds & Sentences',
    concept: 'Central Moral of the Tale',
    difficulty: 'easy',
    type: 'mcq',
    question: 'In the story "A Tale of Two Birds", what eternal lesson did the holy Rishi explain to the King?',
    visualEmoji: '🦅 🌳 Two Birds',
    payload: {
      options: [
        { id: 'opt_tb1', text: '"One is known by the company one keeps"', isCorrect: true },
        { id: 'opt_tb2', text: 'Birds cannot talk to humans', isCorrect: false },
        { id: 'opt_tb3', text: 'The forest is dangerous for kings', isCorrect: false },
      ],
    },
    explanation: '💡 Remember: The first bird imitated the robbers because he lived with them, while the second bird welcomed visitors warmly because he lived with the Rishi: **"One is known by the company one keeps"**!',
    points: 10,
  },
  {
    id: 'c6_e1_concept_story_02',
    grade: 6,
    subject: 'english',
    chapter: 'A Tale of Two Birds & Sentences',
    concept: 'Separation of the Birds',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'A fierce [BLANK] with heavy thunder and rain blew down the big tree and separated the two young birds.',
    visualEmoji: '⛈️ ⚡ Storm',
    payload: {
      correctAnswer: 'storm',
      wordBank: ['storm', 'fire', 'hunter', 'flood'],
      displayTemplate: 'A fierce [BLANK] separated the young birds.',
    },
    explanation: '💡 A terrible **storm** blew through the forest, blowing down the nest and landing the birds at two different places!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Subject and Predicate in a Sentence
  // --------------------------------------------------------------------------
  {
    id: 'c6_e1_concept_subj_01',
    grade: 6,
    subject: 'english',
    chapter: 'A Tale of Two Birds & Sentences',
    concept: 'Subject and Predicate Matching',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each Subject to its appropriate Predicate to make complete meaningful sentences:',
    visualEmoji: '📝 Subject & Predicate',
    payload: {
      pairs: [
        { id: 'e1_p1', left: 'The gentle Rishi', right: 'welcomed the tired king into the ashram' },
        { id: 'e1_p2', left: 'The first bird', right: 'shouted to the robbers to rob the traveler' },
        { id: 'e1_p3', left: 'A huge branch', right: 'fell on the nest during the thunderous storm' },
        { id: 'e1_p4', left: 'The amazed King', right: 'listened carefully to both birds in disbelief' },
      ],
    },
    explanation: '💡 Every complete sentence consists of a **Subject** (who/what does the action) and a **Predicate** (what happens or is said about the subject)!',
    points: 15,
  },
  {
    id: 'c6_e1_concept_subj_02',
    grade: 6,
    subject: 'english',
    chapter: 'A Tale of Two Birds & Sentences',
    concept: 'Identifying the Complete Subject',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Identify the complete Subject in the sentence:\n"The tall oak tree near the river bank was uprooted by the wind."',
    visualEmoji: '🌳 💨 Subject Hunt',
    payload: {
      options: [
        { id: 'opt_sub1', text: '"The tall oak tree near the river bank"', isCorrect: true },
        { id: 'opt_sub2', text: '"was uprooted"', isCorrect: false },
        { id: 'opt_sub3', text: '"by the wind"', isCorrect: false },
      ],
    },
    explanation: '💡 The complete subject includes the noun phrase and its modifying prepositional phrase describing what was uprooted: **"The tall oak tree near the river bank"**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Story Chronological Sequence
  // --------------------------------------------------------------------------
  {
    id: 'c6_e1_concept_order_01',
    grade: 6,
    subject: 'english',
    chapter: 'A Tale of Two Birds & Sentences',
    concept: 'Story Events in Proper Sequence',
    difficulty: 'hard',
    type: 'drag_order',
    question: 'Arrange the events of "A Tale of Two Birds" in chronological sequence:',
    visualEmoji: '📖 Story Timeline',
    payload: {
      tokens: [
        'A fierce thunderstorm blew the baby birds to opposite sides of the forest',
        'The King came hunting in the forest and lost his path',
        'The first bird outside the cave called robbers to take the King\'s jewels',
        'The Rishi at the ashram explained why the two brother birds behaved differently',
      ],
      scrambled: [
        'The first bird outside the cave called robbers to take the King\'s jewels',
        'A fierce thunderstorm blew the baby birds to opposite sides of the forest',
        'The Rishi at the ashram explained why the two brother birds behaved differently',
        'The King came hunting in the forest and lost his path',
      ],
      correctSequence: [
        'A fierce thunderstorm blew the baby birds to opposite sides of the forest',
        'The King came hunting in the forest and lost his path',
        'The first bird outside the cave called robbers to take the King\'s jewels',
        'The Rishi at the ashram explained why the two brother birds behaved differently',
      ],
    },
    explanation: '💡 Timeline: Storm separates brothers ➡️ King gets lost ➡️ Cave bird threatens ➡️ Rishi explains the moral!',
    points: 15,
  },
];
