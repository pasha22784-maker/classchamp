import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 2 HINDI (सारंगी 2 / RIMJHIM 2)
// CHAPTER 6: एक और अनेक (वचन - लड़का/लड़के)
// Comprehensive Curriculum Covering All 6 Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_2_HINDI_LESSON_6_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: एक और अनेक (एकवचन व बहुवचन परिचय)
  // --------------------------------------------------------------------------
  {
    id: 'c2_h6_concept_vachan_01',
    grade: 2,
    subject: 'hindi',
    chapter: 'एक और अनेक (वचन - लड़का/लड़के)',
    concept: 'वचन की परिभाषा',
    difficulty: 'easy',
    type: 'mcq',
    question: 'जब कोई शब्द किसी वस्तु के \'एक\' या \'एक से अधिक\' (अनेक) होने का बोध कराता है, तो उसे क्या कहते हैं?',
    visualEmoji: '🍎 vs 🍎🍎🍎',
    payload: {
      options: [
        { id: 'opt_vc1_1', text: 'वचन (एकवचन और बहुवचन)', isCorrect: true },
        { id: 'opt_vc1_2', text: 'लिंग', isCorrect: false },
        { id: 'opt_vc1_3', text: 'क्रिया', isCorrect: false },
      ],
    },
    explanation: '💡 एक वस्तु का बोध = **एकवचन** (जैसे तारा ⭐), एक से अधिक = **बहुवचन** (जैसे तारे ✨✨)!',
    points: 10,
  },
  {
    id: 'c2_h6_concept_vachan_02',
    grade: 2,
    subject: 'hindi',
    chapter: 'एक और अनेक (वचन - लड़का/लड़के)',
    concept: 'आ से ए का नियम (लड़का -> लड़के)',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'मैदान में एक लड़का दौड़ रहा है। जब दो या तीन हो जाएँ, तो वे [BLANK] कहलाते हैं।',
    visualEmoji: '👦 ➡️ 👦👦',
    payload: {
      correctAnswer: 'लड़के',
      wordBank: ['लड़के', 'लड़की', 'लड़कों', 'बच्ची'],
      displayTemplate: 'मैदान में कई [BLANK] खेल रहे हैं।',
    },
    explanation: '💡 लड़का (एक) -> **लड़के** (अनेक)! 👦👦',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: ई से 'ियाँ' का नियम (तितली -> तितलियाँ)
  // --------------------------------------------------------------------------
  {
    id: 'c2_h6_concept_iyan_01',
    grade: 2,
    subject: 'hindi',
    chapter: 'एक और अनेक (वचन - लड़का/लड़के)',
    concept: 'तितली का बहुवचन',
    difficulty: 'easy',
    type: 'mcq',
    question: 'बगीचे में एक "तितली" 🦋 उड़ रही थी। कुछ देर बाद चार [BLANK] फूलों पर आ बैठीं।',
    visualEmoji: '🦋 ➡️ 🦋🦋🦋',
    payload: {
      options: [
        { id: 'opt_iy1_1', text: 'तितलियाँ 🦋 (बड़ी ई बदलकर छोटी इ और -याँ)', isCorrect: true },
        { id: 'opt_iy1_2', text: 'तितलिये', isCorrect: false },
        { id: 'opt_iy1_3', text: 'तितलों', isCorrect: false },
      ],
    },
    explanation: '💡 याद रखें: अंत की बड़ी \'ई\' बदलकर छोटी \'इ\' बन जाती है और \'याँ\' जुड़ता है: तितली -> **तितलियाँ**! 🦋',
    points: 10,
  },
  {
    id: 'c2_h6_concept_iyan_02',
    grade: 2,
    subject: 'hindi',
    chapter: 'एक और अनेक (वचन - लड़का/लड़के)',
    concept: 'मछली का बहुवचन',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'तालाब में एक मछली 🐟 और नदी में बहुत सारी [BLANK] तैर रही हैं।',
    visualEmoji: '🐟 ➡️ 🐟🐟🐟',
    payload: {
      correctAnswer: 'मछलियाँ',
      wordBank: ['मछलियाँ', 'मछले', 'मछली', 'मछलियां'],
      displayTemplate: 'नदी में बहुत सारी [BLANK] हैं।',
    },
    explanation: '💡 मछली -> **मछलियाँ**! 🐟',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: बिन्दु लगाकर बहुवचन (किताब -> किताबें, आँख -> आँखें)
  // --------------------------------------------------------------------------
  {
    id: 'c2_h6_concept_bindu_01',
    grade: 2,
    subject: 'hindi',
    chapter: 'एक और अनेक (वचन - लड़का/लड़के)',
    concept: 'आँख का बहुवचन',
    difficulty: 'easy',
    type: 'mcq',
    question: 'हमारे चेहरे पर देखने के लिए दो [BLANK] 👁️👁️ होती हैं।',
    visualEmoji: '👁️ 👁️',
    payload: {
      options: [
        { id: 'opt_bd1_1', text: 'आँखें (एक आँख -> दो आँखें)', isCorrect: true },
        { id: 'opt_bd1_2', text: 'आँखा', isCorrect: false },
        { id: 'opt_bd1_3', text: 'आँखों', isCorrect: false },
      ],
    },
    explanation: '💡 एक आँख 👁️, दो **आँखें** 👁️👁️!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 4: वाक्य में वचन की संगति (Drag Order)
  // --------------------------------------------------------------------------
  {
    id: 'c2_h6_concept_order_01',
    grade: 2,
    subject: 'hindi',
    chapter: 'एक और अनेक (वचन - लड़का/लड़के)',
    concept: 'बहुवचन वाक्य विन्यास',
    difficulty: 'medium',
    type: 'drag_order',
    question: 'शब्दों को सही क्रम में लगाकर बहुवचन का सही वाक्य बनाइए:',
    visualEmoji: '✨ 🌌 🌙',
    payload: {
      tokens: ['रात', 'में', 'आकाश', 'में', 'तारे', 'चमकते', 'हैं।'],
      scrambled: ['तारे', 'रात', 'हैं।', 'चमकते', 'में', 'में', 'आकाश'],
      correctSequence: ['रात', 'में', 'आकाश', 'में', 'तारे', 'चमकते', 'हैं।'],
    },
    explanation: '💡 सही वाक्य: "**रात में आकाश में तारे चमकते हैं।**" (तारे = बहुवचन) ✨',
    points: 15,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 5: एकवचन और बहुवचन का मिलान
  // --------------------------------------------------------------------------
  {
    id: 'c2_h6_concept_match_01',
    grade: 2,
    subject: 'hindi',
    chapter: 'एक और अनेक (वचन - लड़का/लड़के)',
    concept: 'एकवचन बहुवचन मिलान',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'एकवचन शब्द को उसके सही बहुवचन रूप से मिलाइए:',
    visualEmoji: '📚 🚪 🪟 🪁',
    payload: {
      pairs: [
        { id: 'vc_p1', left: 'किताब 📖', right: 'किताबें 📚' },
        { id: 'vc_p2', left: 'पतंग 🪁', right: 'पतंगें' },
        { id: 'vc_p3', left: 'कमरा 🚪', right: 'कमरे' },
        { id: 'vc_p4', left: 'चिड़िया 🐦', right: 'चिड़ियाँ' },
      ],
    },
    explanation: '💡 किताब=किताबें, पतंग=पतंगें, कमरा=कमरे, चिड़िया=चिड़ियाँ!',
    points: 15,
  },
];
