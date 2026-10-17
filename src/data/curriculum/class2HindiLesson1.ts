import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 2 HINDI (सारंगी 2 / RIMJHIM 2)
// CHAPTER 1: ऊँट चला (संयुक्त व्यंजन व वर्ण ज्ञान)
// Comprehensive Curriculum Covering All 6 Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_2_HINDI_LESSON_1_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: संयुक्त व्यंजन की पहचान (क्ष, त्र, ज्ञ, श्र)
  // --------------------------------------------------------------------------
  {
    id: 'c2_h1_concept_sanyukta_01',
    grade: 2,
    subject: 'hindi',
    chapter: 'ऊँट चला (संयुक्त व्यंजन व वर्ण ज्ञान)',
    concept: 'संयुक्त व्यंजन पहचान',
    difficulty: 'easy',
    type: 'mcq',
    question: 'हिंदी वर्णमाला में दो व्यंजनों के मेल से बनने वाले संयुक्त व्यंजन कौन से हैं?',
    visualEmoji: '🔤 ✍️',
    payload: {
      options: [
        { id: 'opt_sy1_1', text: 'क्ष, त्र, ज्ञ, श्र', isCorrect: true },
        { id: 'opt_sy1_2', text: 'क, ख, ग, घ', isCorrect: false },
        { id: 'opt_sy1_3', text: 'अ, आ, इ, ई', isCorrect: false },
      ],
    },
    explanation: '💡 हिंदी में चार मुख्य संयुक्त व्यंजन होते हैं: **क्ष** (क्+ष), **त्र** (त्+र), **ज्ञ** (ज्+ञ), और **श्र** (श्+र)!',
    points: 10,
  },
  {
    id: 'c2_h1_concept_sanyukta_02',
    grade: 2,
    subject: 'hindi',
    chapter: 'ऊँट चला (संयुक्त व्यंजन व वर्ण ज्ञान)',
    concept: 'चित्र व संयुक्त व्यंजन शब्द',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'विद्यालय में सभी विद्यार्थी [BLANK] (कक्षा) में बैठकर पढ़ते हैं।',
    visualEmoji: '🏫 👧👦',
    payload: {
      correctAnswer: 'कक्षा',
      wordBank: ['कक्षा', 'घर', 'पेड़', 'पानी'],
      displayTemplate: 'विद्यार्थी [BLANK] में बैठकर पढ़ते हैं।',
    },
    explanation: '💡 "कक्षा" में **क्ष** एक संयुक्त व्यंजन है! 🏫',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: द्वित्व व्यंजन (एक आधा व एक पूरा समान व्यंजन)
  // --------------------------------------------------------------------------
  {
    id: 'c2_h1_concept_dvitva_01',
    grade: 2,
    subject: 'hindi',
    chapter: 'ऊँट चला (संयुक्त व्यंजन व वर्ण ज्ञान)',
    concept: 'द्वित्व व्यंजन पहचान',
    difficulty: 'easy',
    type: 'mcq',
    question: 'जब एक ही व्यंजन दो बार आए (पहला आधा और दूसरा पूरा, जैसे- त्त, च्च, ल्ल), तो उसे क्या कहते हैं?',
    visualEmoji: '🐱 🍃 🥄',
    payload: {
      options: [
        { id: 'opt_dv1_1', text: 'द्वित्व व्यंजन', isCorrect: true },
        { id: 'opt_dv1_2', text: 'केवल स्वर', isCorrect: false },
        { id: 'opt_dv1_3', text: 'मात्रा हीन शब्द', isCorrect: false },
      ],
    },
    explanation: '💡 जब एक ही व्यंजन साथ-साथ दो बार आए (जैसे पत्ता 🍃, बिल्ली 🐱), उसे **द्वित्व व्यंजन** कहते हैं!',
    points: 10,
  },
  {
    id: 'c2_h1_concept_dvitva_02',
    grade: 2,
    subject: 'hindi',
    chapter: 'ऊँट चला (संयुक्त व्यंजन व वर्ण ज्ञान)',
    concept: 'द्वित्व व्यंजन शब्द पहचान',
    difficulty: 'easy',
    type: 'mcq',
    question: 'इनमें से कौन सा शब्द द्वित्व व्यंजन वाला शब्द है?',
    visualEmoji: '🍃 💧 🚗',
    payload: {
      options: [
        { id: 'opt_dv2_1', text: 'पत्ता 🍃', isCorrect: true },
        { id: 'opt_dv2_2', text: 'पानी', isCorrect: false },
        { id: 'opt_dv2_3', text: 'कमल', isCorrect: false },
      ],
    },
    explanation: '💡 **पत्ता** में \'त्त\' दो बार \'त\' के मिलने से बना द्वित्व व्यंजन है! 🍃',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: चन्द्रबिन्दु (ँ) व अनुस्वार (ं)
  // --------------------------------------------------------------------------
  {
    id: 'c2_h1_concept_chand_01',
    grade: 2,
    subject: 'hindi',
    chapter: 'ऊँट चला (संयुक्त व्यंजन व वर्ण ज्ञान)',
    concept: 'ऊँट में चन्द्रबिन्दु',
    difficulty: 'easy',
    type: 'mcq',
    question: '"ऊँट" शब्द में कौन सा चिह्न लगा है?',
    visualEmoji: '🐪 🌙',
    payload: {
      options: [
        { id: 'opt_ch1_1', text: 'चन्द्रबिन्दु', isCorrect: true },
        { id: 'opt_ch1_2', text: 'अनुस्वार', isCorrect: false },
        { id: 'opt_ch1_3', text: 'विसर्ग', isCorrect: false },
      ],
    },
    explanation: '💡 ऊँट, चाँद, आँख, और दाँत में **चन्द्रबिन्दु ( ँ )** का प्रयोग होता है! 🐪',
    points: 10,
  },
  {
    id: 'c2_h1_concept_chand_02',
    grade: 2,
    subject: 'hindi',
    chapter: 'ऊँट चला (संयुक्त व्यंजन व वर्ण ज्ञान)',
    concept: 'चन्द्रबिन्दु शब्द',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'रात के आकाश में सुंदर [BLANK] (चाँद) चमकता है।',
    visualEmoji: '🌙 ✨',
    payload: {
      correctAnswer: 'चाँद',
      wordBank: ['चाँद', 'सूरज', 'दिन', 'धूप'],
      displayTemplate: 'रात के आकाश में सुंदर [BLANK] चमकता है।',
    },
    explanation: '💡 **चाँद** पर चन्द्रबिन्दु ( ँ ) आता है! 🌙',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 4: ऊँट की विशेषताएँ (कविता बोध)
  // --------------------------------------------------------------------------
  {
    id: 'c2_h1_concept_oont_01',
    grade: 2,
    subject: 'hindi',
    chapter: 'ऊँट चला (संयुक्त व्यंजन व वर्ण ज्ञान)',
    concept: 'रेगिस्तान का जहाज - ऊँट',
    difficulty: 'easy',
    type: 'mcq',
    question: 'ऊँट किस जगह आसानी से दौड़ और चल सकता है जहाँ दूसरे जानवर नहीं चल पाते?',
    visualEmoji: '🐪 🏜️',
    payload: {
      options: [
        { id: 'opt_on1_1', text: 'रेत में 🏜️', isCorrect: true },
        { id: 'opt_on1_2', text: 'बर्फ में ❄️', isCorrect: false },
        { id: 'opt_on1_3', text: 'नदी के गहरे पानी में', isCorrect: false },
      ],
    },
    explanation: '💡 ऊँट के गद्दीदार पैर **रेत (बालू)** में नहीं धँसते, इसलिए वह रेगिस्तान में आसानी से चलता है! 🏜️',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 5: तुकबंदी शब्द (Rhyming Words in Hindi)
  // --------------------------------------------------------------------------
  {
    id: 'c2_h1_concept_tuk_01',
    grade: 2,
    subject: 'hindi',
    chapter: 'ऊँट चला (संयुक्त व्यंजन व वर्ण ज्ञान)',
    concept: 'बालू का तुकबंदी शब्द',
    difficulty: 'easy',
    type: 'mcq',
    question: 'कविता के अनुसार "बालू" शब्द का सही तुकबंदी (समान लय वाला) शब्द क्या है?',
    visualEmoji: '🏜️ 🐻 🎵',
    payload: {
      options: [
        { id: 'opt_tk1_1', text: 'भालू 🐻', isCorrect: true },
        { id: 'opt_tk1_2', text: 'हाथी', isCorrect: false },
        { id: 'opt_tk1_3', text: 'चिड़िया', isCorrect: false },
      ],
    },
    explanation: '💡 **बालू** और **भालू** दोनों के अंत में समान ध्वनि है! 🐻',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 6: द्वित्व व्यंजन शब्दों का मिलान
  // --------------------------------------------------------------------------
  {
    id: 'c2_h1_concept_match_01',
    grade: 2,
    subject: 'hindi',
    chapter: 'ऊँट चला (संयुक्त व्यंजन व वर्ण ज्ञान)',
    concept: 'द्वित्व व्यंजन मिलान',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'द्वित्व व्यंजन को उनके सही शब्द से मिलाइए:',
    visualEmoji: '🧩 🔤',
    payload: {
      pairs: [
        { id: 'dv_p1', left: 'ल्ल', right: 'बिल्ली 🐱' },
        { id: 'dv_p2', left: 'त्त', right: 'पत्ता 🍃' },
        { id: 'dv_p3', left: 'च्च', right: 'बच्चा 👶' },
        { id: 'dv_p4', left: 'म्म', right: 'चम्मच 🥄' },
      ],
    },
    explanation: '💡 ल्ल = बिल्ली, त्त = पत्ता, च्च = बच्चा, म्म = चम्मच!',
    points: 15,
  },
];
