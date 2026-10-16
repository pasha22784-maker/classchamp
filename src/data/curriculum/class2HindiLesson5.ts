import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 2 HINDI (सारंगी 2 / RIMJHIM 2)
// CHAPTER 5: दोस्त की मदद (काम वाले शब्द - क्रिया)
// Comprehensive Curriculum Covering All 6 Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_2_HINDI_LESSON_5_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: काम बताने वाले शब्द (क्रिया की पहचान)
  // --------------------------------------------------------------------------
  {
    id: 'c2_h5_concept_kriya_01',
    grade: 2,
    subject: 'hindi',
    chapter: 'दोस्त की मदद (काम वाले शब्द - क्रिया)',
    concept: 'क्रिया शब्द पहचान',
    difficulty: 'easy',
    type: 'mcq',
    question: 'वाक्य पढ़िए: "तेंदुआ झपटकर कछुए को मुँह में दबाकर ले भागा।" इस वाक्य में \'काम बताने वाले शब्द\' (क्रिया) कौन से हैं?',
    visualEmoji: '🐆 🐢 🏃‍♂️',
    payload: {
      options: [
        { id: 'opt_kr1_1', text: 'झपटकर, दबाकर, भागा (काम बताने वाले शब्द)', isCorrect: true },
        { id: 'opt_kr1_2', text: 'तेंदुआ और कछुआ (संज्ञा)', isCorrect: false },
        { id: 'opt_kr1_3', text: 'मुँह (अंग)', isCorrect: false },
      ],
    },
    explanation: '💡 जिन शब्दों से किसी काम के करने या होने का पता चले, उन्हें **क्रिया (काम वाले शब्द)** कहते हैं!',
    points: 10,
  },
  {
    id: 'c2_h5_concept_kriya_02',
    grade: 2,
    subject: 'hindi',
    chapter: 'दोस्त की मदद (काम वाले शब्द - क्रिया)',
    concept: 'तैरने की क्रिया',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'पानी में कछुआ अपने पैरों से आसानी से [BLANK] (तैरता) है।',
    visualEmoji: '🐢 🌊',
    payload: {
      correctAnswer: 'तैरता',
      wordBank: ['तैरता', 'उड़ता', 'दौड़ता', 'सोता'],
      displayTemplate: 'पानी में कछुआ आसानी से [BLANK] है।',
    },
    explanation: '💡 पानी में जीव **तैरते** हैं! 🐢 🌊',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: कहानी बोध (सच्ची दोस्ती व मदद)
  // --------------------------------------------------------------------------
  {
    id: 'c2_h5_concept_story_01',
    grade: 2,
    subject: 'hindi',
    chapter: 'दोस्त की मदद (काम वाले शब्द - क्रिया)',
    concept: 'लोमड़ी की समझदारी',
    difficulty: 'easy',
    type: 'mcq',
    question: 'कछुए की जान बचाने के लिए उसकी समझदार दोस्त लोमड़ी 🦊 ने तेंदुए को क्या तरकीब बताई?',
    visualEmoji: '🦊 💡 🐆 🐢',
    payload: {
      options: [
        { id: 'opt_st1_1', text: 'कछुए को पानी में फेंकने की (ताकि उसका सख्त खोल नरम हो जाए)', isCorrect: true },
        { id: 'opt_st1_2', text: 'पेड़ पर चढ़ने की', isCorrect: false },
        { id: 'opt_st1_3', text: 'कछुए को ज़मीन में गाड़ने की', isCorrect: false },
      ],
    },
    explanation: '💡 लोमड़ी ने तेंदुए को मूर्ख बनाकर कछुए को **पानी में फिंकवा दिया**, और कछुआ तैरकर अपनी जान बचा गया! 🦊🐢',
    points: 10,
  },
  {
    id: 'c2_h5_concept_story_02',
    grade: 2,
    subject: 'hindi',
    chapter: 'दोस्त की मदद (काम वाले शब्द - क्रिया)',
    concept: 'कछुए का खोल',
    difficulty: 'easy',
    type: 'mcq',
    question: 'कछुए की पीठ पर जो सख्त ढाल जैसा आवरण होता है जो उसे दुश्मनों से बचाता है, उसे क्या कहते हैं?',
    visualEmoji: '🐢 🛡️',
    payload: {
      options: [
        { id: 'opt_kh1_1', text: 'खोल (सख्त आवरण)', isCorrect: true },
        { id: 'opt_kh1_2', text: 'पंख', isCorrect: false },
        { id: 'opt_kh1_3', text: 'सींग', isCorrect: false },
      ],
    },
    explanation: '💡 कछुए की पीठ पर बहुत सख्त **खोल** होता है! 🐢',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: चाल और गति (धीमी चाल vs तेज दौड़)
  // --------------------------------------------------------------------------
  {
    id: 'c2_h5_concept_speed_01',
    grade: 2,
    subject: 'hindi',
    chapter: 'दोस्त की मदद (काम वाले शब्द - क्रिया)',
    concept: 'कछुए की धीमी चाल',
    difficulty: 'easy',
    type: 'mcq',
    question: 'कछुआ ज़मीन पर कैसे चलता है?',
    visualEmoji: '🐢 ⏳ vs 🐆 ⚡',
    payload: {
      options: [
        { id: 'opt_sp1_1', text: 'बहुत धीमी चाल से 🐢', isCorrect: true },
        { id: 'opt_sp1_2', text: 'बिजली जैसी तेज रफ्तार से', isCorrect: false },
        { id: 'opt_sp1_3', text: 'फुदक-फुदक कर', isCorrect: false },
      ],
    },
    explanation: '💡 कछुआ अपनी **धीमी चाल** के लिए जाना जाता है! 🐢',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 4: वाक्य क्रम (Drag Order)
  // --------------------------------------------------------------------------
  {
    id: 'c2_h5_concept_order_01',
    grade: 2,
    subject: 'hindi',
    chapter: 'दोस्त की मदद (काम वाले शब्द - क्रिया)',
    concept: 'दोस्ती वाक्य क्रम',
    difficulty: 'medium',
    type: 'drag_order',
    question: 'शब्दों को सही क्रम में लगाकर सच्ची दोस्ती की सीख का वाक्य बनाइए:',
    visualEmoji: '🤝 🦊 🐢',
    payload: {
      tokens: ['सच्चे', 'दोस्त', 'मुसीबत', 'में', 'मदद', 'करते', 'हैं।'],
      scrambled: ['मदद', 'सच्चे', 'हैं।', 'में', 'दोस्त', 'करते', 'मुसीबत'],
      correctSequence: ['सच्चे', 'दोस्त', 'मुसीबत', 'में', 'मदद', 'करते', 'हैं।'],
    },
    explanation: '💡 सही वाक्य: "**सच्चे दोस्त मुसीबत में मदद करते हैं।**" 🤝',
    points: 15,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 5: काम वाले शब्दों का जानवरों से मिलान
  // --------------------------------------------------------------------------
  {
    id: 'c2_h5_concept_match_01',
    grade: 2,
    subject: 'hindi',
    chapter: 'दोस्त की मदद (काम वाले शब्द - क्रिया)',
    concept: 'जीव और उनकी क्रिया का मिलान',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'प्रत्येक जीव को उसके स्वाभाविक काम (क्रिया) से मिलाइए:',
    visualEmoji: '🐟 🐦 🐆 🐢',
    payload: {
      pairs: [
        { id: 'kr_p1', left: 'मछली 🐟', right: 'जल में तैरना' },
        { id: 'kr_p2', left: 'चिड़िया 🐦', right: 'आकाश में उड़ना' },
        { id: 'kr_p3', left: 'तेंदुआ 🐆', right: 'तेज छलाँग लगाना' },
        { id: 'kr_p4', left: 'कछुआ 🐢', right: 'धीमे-धीमे रेंगना' },
      ],
    },
    explanation: '💡 मछली तैरती है, चिड़िया उड़ती है, तेंदुआ छलाँग लगाता है, कछुआ रेंगता है!',
    points: 15,
  },
];
