import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 5 ENGLISH (MARIGOLD 5)
// CHAPTER 6: PUNCTUATION: QUOTATION MARKS & APOSTROPHE
// Comprehensive Curriculum Covering All Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_5_ENGLISH_LESSON_6_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Quotation Marks in Direct Speech
  // --------------------------------------------------------------------------
  {
    id: 'c5_e6_concept_quote_01',
    grade: 5,
    subject: 'english',
    chapter: 'Punctuation: Quotation Marks & Apostrophe',
    concept: 'Direct Speech Punctuation',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Choose the sentence with correct quotation marks and punctuation for direct speech:',
    visualEmoji: '💬 "..." Speech',
    payload: {
      options: [
        { id: 'opt_spch1', text: '"We are going to the library," said Priya.', isCorrect: true },
        { id: 'opt_spch2', text: 'We are going to the library said Priya.', isCorrect: false },
        { id: 'opt_spch3', text: '"We are going to the library" said Priya.', isCorrect: false },
      ],
    },
    explanation: '💡 Remember: The exact spoken words are placed inside **quotation marks ("...")**, and a comma separates the spoken dialogue from the speaker tag inside the closing quote!',
    points: 10,
  },
  {
    id: 'c5_e6_concept_quote_02',
    grade: 5,
    subject: 'english',
    chapter: 'Punctuation: Quotation Marks & Apostrophe',
    concept: 'Question Mark inside Quotes',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'When a character asks a question in dialogue, the question mark goes inside the quotation marks: "Where is my book[BLANK]" asked Ali.',
    visualEmoji: '❓ "..."',
    payload: {
      correctAnswer: '?"',
      wordBank: ['?"', '".', ',"', '?!'],
      displayTemplate: '"Where is my book[BLANK] asked Ali.',
    },
    explanation: '💡 Terminal punctuation like question marks belong inside the closing quotation marks: *"Where is my book?"* asked Ali!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Apostrophe for Contractions & Possession
  // --------------------------------------------------------------------------
  {
    id: 'c5_e6_concept_apos_01',
    grade: 5,
    subject: 'english',
    chapter: 'Punctuation: Quotation Marks & Apostrophe',
    concept: 'Apostrophe Contractions Match',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each contraction to its full two-word form:',
    visualEmoji: '✂️ Apostrophe Contractions',
    payload: {
      pairs: [
        { id: 'e6_p1', left: "Don't", right: 'Do not' },
        { id: 'e6_p2', left: "I've", right: 'I have' },
        { id: 'e6_p3', left: "They're", right: 'They are' },
        { id: 'e6_p4', left: "Won't", right: 'Will not' },
      ],
    },
    explanation: '💡 An apostrophe (\') replaces omitted letters in contractions (e.g. *o* in *do not* ➡️ *don\'t*, *wi-* and *-o-* in *will not* ➡️ *won\'t*)!',
    points: 15,
  },
  {
    id: 'c5_e6_concept_poss_01',
    grade: 5,
    subject: 'english',
    chapter: 'Punctuation: Quotation Marks & Apostrophe',
    concept: 'Possessive Apostrophe',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Which phrase correctly shows that the bicycle belongs to Ravi?',
    visualEmoji: '🚲 👦 Possession',
    payload: {
      options: [
        { id: 'opt_pos1', text: "Ravi's bicycle (Singular possessive with 's)", isCorrect: true },
        { id: 'opt_pos2', text: 'Ravis bicycle', isCorrect: false },
        { id: 'opt_pos3', text: "Ravis' bicycle", isCorrect: false },
      ],
    },
    explanation: '💡 For singular nouns showing ownership, add **\'s** (Ravi\'s bicycle, the girl\'s doll)!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Ordering a Dialogue Sentence
  // --------------------------------------------------------------------------
  {
    id: 'c5_e6_concept_order_01',
    grade: 5,
    subject: 'english',
    chapter: 'Punctuation: Quotation Marks & Apostrophe',
    concept: 'Arranging Punctuated Dialogue',
    difficulty: 'hard',
    type: 'drag_order',
    question: 'Arrange the sentence fragments into a properly formatted spoken sentence:',
    visualEmoji: '💬 Dialogue Order',
    payload: {
      tokens: ['"Please pass the salt,"', 'whispered Tina', 'softly across', 'the dining table.'],
      scrambled: ['the dining table.', 'whispered Tina', '"Please pass the salt,"', 'softly across'],
      correctSequence: ['"Please pass the salt,"', 'whispered Tina', 'softly across', 'the dining table.'],
    },
    explanation: '💡 Proper dialogue begins with the quoted spoken words `["Please pass the salt,"]` followed by the dialogue attribution `[whispered Tina softly across the dining table.]`!',
    points: 15,
  },
];
