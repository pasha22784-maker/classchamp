import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 2 HINDI (सारंगी 2 / RIMJHIM 2)
// CHAPTER 4: अधिक बलवान कौन? (विशेषण - कैसा/कितना)
// Comprehensive Curriculum Covering All 6 Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_2_HINDI_LESSON_4_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: विशेषता बताने वाले शब्द (विशेषण परिचय)
  // --------------------------------------------------------------------------
  {
    id: 'c2_h4_concept_vishesh_01',
    grade: 2,
    subject: 'hindi',
    chapter: 'अधिक बलवान कौन? (विशेषण - कैसा/कितना)',
    concept: 'विशेषण की पहचान',
    difficulty: 'easy',
    type: 'mcq',
    question: 'वाक्य पढ़िए: "सूरज की तेज धूप ☀️ से आदमी को बहुत पसीना आने लगा।" इसमें धूप \'कैसी\' है?',
    visualEmoji: '☀️ 🥵',
    payload: {
      options: [
        { id: 'opt_vs1_1', text: 'तेज (धूप की विशेषता बताने वाला शब्द)', isCorrect: true },
        { id: 'opt_vs1_2', text: 'आदमी', isCorrect: false },
        { id: 'opt_vs1_3', text: 'सूरज', isCorrect: false },
      ],
    },
    explanation: '💡 जो शब्द संज्ञा की विशेषता (कैसा/कितना) बताते हैं, उन्हें **विशेषण** कहते हैं। यहाँ धूप \'तेज\' है!',
    points: 10,
  },
  {
    id: 'c2_h4_concept_vishesh_02',
    grade: 2,
    subject: 'hindi',
    chapter: 'अधिक बलवान कौन? (विशेषण - कैसा/कितना)',
    concept: 'रंग रूप का विशेषण',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'यात्री ने अपने शरीर पर एक भारी [BLANK] (काला) कोट पहन रखा था।',
    visualEmoji: '🧥 🚶',
    payload: {
      correctAnswer: 'काला',
      wordBank: ['काला', 'दौड़ना', 'उड़ना', 'हँसना'],
      displayTemplate: 'यात्री ने [BLANK] कोट पहना था।',
    },
    explanation: '💡 कोट कैसा था? **काला** कोट! काला एक विशेषण शब्द है। 🧥',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: कहानी बोध (हवा और सूरज की शर्त)
  // --------------------------------------------------------------------------
  {
    id: 'c2_h4_concept_story_01',
    grade: 2,
    subject: 'hindi',
    chapter: 'अधिक बलवान कौन? (विशेषण - कैसा/कितना)',
    concept: 'हवा और सूरज में बहस',
    difficulty: 'easy',
    type: 'mcq',
    question: 'हवा 💨 और सूरज ☀️ में किस बात पर बहस छिड़ गई थी?',
    visualEmoji: '💨 vs ☀️',
    payload: {
      options: [
        { id: 'opt_st1_1', text: 'कि हम दोनों में से अधिक बलवान (ताकतवर) कौन है!', isCorrect: true },
        { id: 'opt_st1_2', text: 'कि कौन तेज दौड़ सकता है', isCorrect: false },
        { id: 'opt_st1_3', text: 'कि कौन खाना खाएगा', isCorrect: false },
      ],
    },
    explanation: '💡 हवा और सूरज में इस बात पर बहस हुई कि **अधिक बलवान (ताकतवर) कौन है**!',
    points: 10,
  },
  {
    id: 'c2_h4_concept_story_02',
    grade: 2,
    subject: 'hindi',
    chapter: 'अधिक बलवान कौन? (विशेषण - कैसा/कितना)',
    concept: 'सूरज की जीत',
    difficulty: 'easy',
    type: 'mcq',
    question: 'जब सूरज बहुत तेज तपने और चमकने लगा, तो आदमी ने गर्मी के कारण क्या किया?',
    visualEmoji: '☀️ 🥵 🧥',
    payload: {
      options: [
        { id: 'opt_st2_1', text: 'अपना कोट उतार दिया 🧥 (और सूरज जीत गया)', isCorrect: true },
        { id: 'opt_st2_2', text: 'कोट और कसकर पहन लिया', isCorrect: false },
        { id: 'opt_st2_3', text: 'दौड़ने लगा', isCorrect: false },
      ],
    },
    explanation: '💡 तेज धूप और गर्मी से आदमी ने अपना कोट उतार दिया, जिससे सूरज की जीत हुई! ☀️',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: विपरीत विशेषण (Antonym Adjectives)
  // --------------------------------------------------------------------------
  {
    id: 'c2_h4_concept_opp_01',
    grade: 2,
    subject: 'hindi',
    chapter: 'अधिक बलवान कौन? (विशेषण - कैसा/कितना)',
    concept: 'बलवान का विलोम',
    difficulty: 'easy',
    type: 'mcq',
    question: '"बलवान" (ताकतवर) का उल्टा अर्थ वाला शब्द क्या होगा?',
    visualEmoji: '💪 ↔️ 🍂',
    payload: {
      options: [
        { id: 'opt_op1_1', text: 'कमज़ोर / दुर्बल', isCorrect: true },
        { id: 'opt_op1_2', text: 'बड़ा', isCorrect: false },
        { id: 'opt_op1_3', text: 'सुंदर', isCorrect: false },
      ],
    },
    explanation: '💡 बलवान का उल्टा शब्द **कमज़ोर (निर्बल)** होता है! 💪 ↔️ 🍂',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 4: वाक्य क्रम (Drag Order)
  // --------------------------------------------------------------------------
  {
    id: 'c2_h4_concept_order_01',
    grade: 2,
    subject: 'hindi',
    chapter: 'अधिक बलवान कौन? (विशेषण - कैसा/कितना)',
    concept: 'विशेषण वाक्य क्रम',
    difficulty: 'medium',
    type: 'drag_order',
    question: 'शब्दों को सही क्रम में लगाकर कहानी का वाक्य बनाइए:',
    visualEmoji: '☀️ 💨 🤝',
    payload: {
      tokens: ['हवा', 'ने', 'सूरज', 'की', 'ताकत', 'मान', 'ली।'],
      scrambled: ['सूरज', 'ली।', 'की', 'हवा', 'मान', 'ताकत', 'ने'],
      correctSequence: ['हवा', 'ने', 'सूरज', 'की', 'ताकत', 'मान', 'ली।'],
    },
    explanation: '💡 सही क्रम: "**हवा ने सूरज की ताकत मान ली।**" ☀️',
    points: 15,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 5: विशेषण और विशेष्य (संज्ञा) का मिलान
  // --------------------------------------------------------------------------
  {
    id: 'c2_h4_concept_match_01',
    grade: 2,
    subject: 'hindi',
    chapter: 'अधिक बलवान कौन? (विशेषण - कैसा/कितना)',
    concept: 'विशेषण और संज्ञा मिलान',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'कैसा/कितना बताने वाले विशेषण को सही संज्ञा से मिलाइए:',
    visualEmoji: '🏷️ 🎯',
    payload: {
      pairs: [
        { id: 'vs_p1', left: 'ठंडी ❄️', right: 'हवा 💨' },
        { id: 'vs_p2', left: 'तेज ☀️', right: 'धूप' },
        { id: 'vs_p3', left: 'मीठा 🥭', right: 'आम' },
        { id: 'vs_p4', left: 'हरा 🍃', right: 'पत्ता' },
      ],
    },
    explanation: '💡 ठंडी हवा, तेज धूप, मीठा आम, हरा पत्ता!',
    points: 15,
  },
];
