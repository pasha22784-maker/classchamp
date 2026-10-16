import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 3 HINDI (वीणा 3 / RIMJHIM 3)
// CHAPTER 6: बंदर बाँट (विराम चिह्न व वाक्य शुद्धि)
// Comprehensive Curriculum Covering All Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_3_HINDI_LESSON_6_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: 'बंदर बाँट' नाटक संदर्भ व सीख
  // --------------------------------------------------------------------------
  {
    id: 'c3_h6_concept_play_01',
    grade: 3,
    subject: 'hindi',
    chapter: 'बंदर बाँट (विराम चिह्न व वाक्य शुद्धि)',
    concept: 'नाटक का सार व सीख',
    difficulty: 'easy',
    type: 'mcq',
    question: 'नाटक "बंदर बाँट" में दो बिल्लियों के झगड़े का क्या परिणाम हुआ?',
    visualEmoji: '🐱 ⚖️ 🐒 🍞',
    payload: {
      options: [
        { id: 'opt_bb1', text: 'बंदर तराज़ू में तोलते-तोलते सारी रोटी खा गया और बिल्लियों को कुछ नहीं मिला', isCorrect: true },
        { id: 'opt_bb2', text: 'दोनों बिल्लियों को बराबर रोटी मिली', isCorrect: false },
        { id: 'opt_bb3', text: 'बिल्लियों ने बंदर को भगा दिया', isCorrect: false },
      ],
    },
    explanation: '💡 नाटक की सीख है कि आपस में झगड़ा करने से दोनों का नुकसान होता है और तीसरे (चालाक व्यक्ति) का फायदा हो जाता है!',
    points: 10,
  },
  {
    id: 'c3_h6_concept_play_02',
    grade: 3,
    subject: 'hindi',
    chapter: 'बंदर बाँट (विराम चिह्न व वाक्य शुद्धि)',
    concept: 'रोटी तोलने का साधन',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'बंदर दोनों पलों को बराबर करने के लिए अपने हाथ में [BLANK] लेकर आया था।',
    visualEmoji: '⚖️ 🐒 🍞',
    payload: {
      correctAnswer: 'तराज़ू',
      wordBank: ['तराज़ू', 'छड़ी', 'कटोरी', 'थैला'],
      displayTemplate: 'बंदर हाथ में [BLANK] लेकर आया।',
    },
    explanation: '💡 बंदर ने धर्म-अधिकारी बनकर दोनों के बीच न्याय करने के लिए **तराज़ू** निकाला था!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: विराम चिह्न (Punctuation Marks)
  // --------------------------------------------------------------------------
  {
    id: 'c3_h6_concept_viram_01',
    grade: 3,
    subject: 'hindi',
    chapter: 'बंदर बाँट (विराम चिह्न व वाक्य शुद्धि)',
    concept: 'प्रश्नवाचक चिह्न (?)',
    difficulty: 'easy',
    type: 'mcq',
    question: 'इस वाक्य के अंत में कौन सा विराम चिह्न आएगा?\n"तुम दोनों आपस में क्यों झगड़ रही हो [_____]"',
    visualEmoji: '❓ ✍️ 🐱',
    payload: {
      options: [
        { id: 'opt_qm1', text: 'प्रश्नवाचक चिह्न ( ? )', isCorrect: true },
        { id: 'opt_qm2', text: 'पूर्ण विराम ( । )', isCorrect: false },
        { id: 'opt_qm3', text: 'विस्मयादिबोधक चिह्न ( ! )', isCorrect: false },
      ],
    },
    explanation: '💡 जिस वाक्य में कोई प्रश्न पूछा जाए (क्यों, क्या, कहाँ, कब), उसके अंत में **प्रश्नवाचक चिह्न (?)** लगता है!',
    points: 10,
  },
  {
    id: 'c3_h6_concept_viram_02',
    grade: 3,
    subject: 'hindi',
    chapter: 'बंदर बाँट (विराम चिह्न व वाक्य शुद्धि)',
    concept: 'पूर्ण विराम (।)',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'साधारण वाक्य पूरा होने पर अंत में [BLANK] विराम लगाया जाता है।',
    visualEmoji: '✍️ । 📖',
    payload: {
      correctAnswer: 'पूर्ण',
      wordBank: ['पूर्ण', 'अल्प', 'प्रश्न', 'अर्ध'],
      displayTemplate: 'वाक्य समाप्त होने पर [BLANK] विराम ( । ) लगाया जाता है।',
    },
    explanation: '💡 अपनी बात या वाक्य पूरी होने पर हम **पूर्ण विराम ( । )** लगाते हैं!',
    points: 10,
  },
  {
    id: 'c3_h6_concept_viram_03',
    grade: 3,
    subject: 'hindi',
    chapter: 'बंदर बाँट (विराम चिह्न व वाक्य शुद्धि)',
    concept: 'विस्मयादिबोधक चिह्न (!)',
    difficulty: 'medium',
    type: 'mcq',
    question: '"अरे! यह रोटी तो बहुत स्वादिष्ट है।" इस वाक्य में "!" चिह्न क्या कहलाता है?',
    visualEmoji: '❗ 😲 🍞',
    payload: {
      options: [
        { id: 'opt_ex1', text: 'विस्मयादिबोधक चिह्न (आश्चर्य या भाव प्रकट करने वाला)', isCorrect: true },
        { id: 'opt_ex2', text: 'अल्प विराम', isCorrect: false },
        { id: 'opt_ex3', text: 'योजक चिह्न', isCorrect: false },
      ],
    },
    explanation: '💡 आश्चर्य, हर्ष, शोक, या भय आदि मनोभावों को प्रकट करने वाले शब्दों के आगे **विस्मयादिबोधक चिह्न (!)** लगता है!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: वाक्य शुद्धि व विराम चिह्न मिलान
  // --------------------------------------------------------------------------
  {
    id: 'c3_h6_concept_match_01',
    grade: 3,
    subject: 'hindi',
    chapter: 'बंदर बाँट (विराम चिह्न व वाक्य शुद्धि)',
    concept: 'विराम चिह्न व उनके नाम का मिलान',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'विराम चिह्नों को उनके सही नामों से मिलाइए:',
    visualEmoji: '🖋️ ➔ 🏷️',
    payload: {
      pairs: [
        { id: 'h6_p1', left: '।', right: 'पूर्ण विराम' },
        { id: 'h6_p2', left: '?', right: 'प्रश्नवाचक चिह्न' },
        { id: 'h6_p3', left: '!', right: 'विस्मयादिबोधक चिह्न' },
        { id: 'h6_p4', left: ',', right: 'अल्प विराम' },
      ],
    },
    explanation: '💡 । = पूर्ण विराम, ? = प्रश्नवाचक, ! = विस्मयादिबोधक, , = अल्प विराम।',
    points: 15,
  },
  {
    id: 'c3_h6_concept_order_01',
    grade: 3,
    subject: 'hindi',
    chapter: 'बंदर बाँट (विराम चिह्न व वाक्य शुद्धि)',
    concept: 'शुद्ध वाक्य निर्माण क्रम',
    difficulty: 'medium',
    type: 'drag_order',
    question: 'शब्दों को सही व्याकरणिक क्रम में लगाकर शुद्ध वाक्य बनाइए:',
    visualEmoji: '🐱 🤝 🐱',
    payload: {
      tokens: ['आपस में मिल-जुलकर', 'रहने से', 'सबका', 'कल्याण होता है।'],
      scrambled: ['सबका', 'आपस में मिल-जुलकर', 'कल्याण होता है।', 'रहने से'],
      correctSequence: ['आपस में मिल-जुलकर', 'रहने से', 'सबका', 'कल्याण होता है।'],
    },
    explanation: '💡 सही क्रम: "आपस में मिल-जुलकर रहने से सबका कल्याण होता है।"',
    points: 15,
  },
];
