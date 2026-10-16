import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 3 HINDI (वीणा 3 / RIMJHIM 3)
// CHAPTER 2: शेखीबाज़ मक्खी (सर्वनाम शब्द)
// Comprehensive Curriculum Covering All Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_3_HINDI_LESSON_2_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: 'शेखीबाज़ मक्खी' कहानी संदर्भ
  // --------------------------------------------------------------------------
  {
    id: 'c3_h2_concept_story_01',
    grade: 3,
    subject: 'hindi',
    chapter: 'शेखीबाज़ मक्खी (सर्वनाम शब्द)',
    concept: 'कहानी का मुख्य पात्र',
    difficulty: 'easy',
    type: 'mcq',
    question: 'कहानी में शेखीबाज़ मक्खी का घमंड किसने तोड़ा?',
    visualEmoji: '🪰 🦊 🕸️',
    payload: {
      options: [
        { id: 'opt_sh1', text: 'चतुर लोमड़ी ने (मकड़ी के जाले में फँसवा कर)', isCorrect: true },
        { id: 'opt_sh2', text: 'शेर ने', isCorrect: false },
        { id: 'opt_sh3', text: 'हाथी ने', isCorrect: false },
      ],
    },
    explanation: '💡 चतुर लोमड़ी ने मक्खी की झूठी प्रशंसा की और उसे मकड़ी के जाले में फँसाकर उसका घमंड चूर-चूर कर दिया!',
    points: 10,
  },
  {
    id: 'c3_h2_concept_story_02',
    grade: 3,
    subject: 'hindi',
    chapter: 'शेखीबाज़ मक्खी (सर्वनाम शब्द)',
    concept: 'शेखीबाज़ का अर्थ',
    difficulty: 'easy',
    type: 'fill_blank',
    question: '"शेखी बघारना" या शेखीबाज़ होने का मतलब अपनी झूठी [BLANK] करना होता है।',
    visualEmoji: '🗣️ 💨 🪰',
    payload: {
      correctAnswer: 'तारीफ़',
      wordBank: ['तारीफ़', 'निंदा', 'शिकायत', 'मदद'],
      displayTemplate: 'शेखीबाज़ का अर्थ अपनी झूठी [BLANK] करने वाला होता है।',
    },
    explanation: '💡 शेखीबाज़ का मतलब होता है जो अपनी झूठी **तारीफ़** या बड़ाई करता रहे!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: सर्वनाम शब्द की पहचान (संज्ञा के स्थान पर आने वाले शब्द)
  // --------------------------------------------------------------------------
  {
    id: 'c3_h2_concept_sarv_01',
    grade: 3,
    subject: 'hindi',
    chapter: 'शेखीबाज़ मक्खी (सर्वनाम शब्द)',
    concept: 'सर्वनाम की परिभाषा व पहचान',
    difficulty: 'easy',
    type: 'mcq',
    question: 'इस वाक्य में सर्वनाम शब्द पहचानिए:\n"शेर आराम कर रहा था, तभी उसने मक्खी को देखा।"',
    visualEmoji: '🦁 🪰 👁️',
    payload: {
      options: [
        { id: 'opt_sv1', text: 'उसने (शेर संज्ञा के बदले आया है)', isCorrect: true },
        { id: 'opt_sv2', text: 'शेर', isCorrect: false },
        { id: 'opt_sv3', text: 'मक्खी', isCorrect: false },
      ],
    },
    explanation: '💡 जो शब्द संज्ञा (नाम) के स्थान पर प्रयोग किए जाते हैं, उन्हें **सर्वनाम** कहते हैं। यहाँ शेर के स्थान पर **"उसने"** आया है!',
    points: 10,
  },
  {
    id: 'c3_h2_concept_sarv_02',
    grade: 3,
    subject: 'hindi',
    chapter: 'शेखीबाज़ मक्खी (सर्वनाम शब्द)',
    concept: 'सर्वनाम का सही प्रयोग',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'रोहन ने कहा, "[BLANK] आज अपने नाना जी के घर जाऊँगा।"',
    visualEmoji: '👦 🏠 👴',
    payload: {
      correctAnswer: 'मैं',
      wordBank: ['मैं', 'तुम', 'वे', 'उसका'],
      displayTemplate: 'रोहन ने कहा, "[BLANK] नाना जी के घर जाऊँगा।"',
    },
    explanation: '💡 अपने स्वयं के लिए वक्ता **"मैं"** सर्वनाम का प्रयोग करता है!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: एकवचन और बहुवचन सर्वनाम
  // --------------------------------------------------------------------------
  {
    id: 'c3_h2_concept_vachan_01',
    grade: 3,
    subject: 'hindi',
    chapter: 'शेखीबाज़ मक्खी (सर्वनाम शब्द)',
    concept: 'सर्वनाम का बहुवचन रूप',
    difficulty: 'medium',
    type: 'mcq',
    question: '"वह" सर्वनाम का बहुवचन रूप क्या होता है?',
    visualEmoji: '👉 👦 ➔ 👦👧👦',
    payload: {
      options: [
        { id: 'opt_vch1', text: 'वे (वह ➔ वे)', isCorrect: true },
        { id: 'opt_vch2', text: 'हम', isCorrect: false },
        { id: 'opt_vch3', text: 'आप', isCorrect: false },
      ],
    },
    explanation: '💡 एकवचन "वह" का बहुवचन **"वे"** होता है, और "यह" का बहुवचन **"ये"** होता है!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 4: सर्वनाम मिलान व वाक्य क्रम
  // --------------------------------------------------------------------------
  {
    id: 'c3_h2_concept_match_01',
    grade: 3,
    subject: 'hindi',
    chapter: 'शेखीबाज़ मक्खी (सर्वनाम शब्द)',
    concept: 'सर्वनाम एकवचन व बहुवचन मिलान',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'एकवचन सर्वनाम को उसके सही बहुवचन रूप से मिलाइए:',
    visualEmoji: '1️⃣ ➔ 🔢',
    payload: {
      pairs: [
        { id: 'h2_p1', left: 'मैं', right: 'हम' },
        { id: 'h2_p2', left: 'वह', right: 'वे' },
        { id: 'h2_p3', left: 'यह', right: 'ये' },
        { id: 'h2_p4', left: 'तू', right: 'तुम' },
      ],
    },
    explanation: '💡 मैं ➔ हम, वह ➔ वे, यह ➔ ये, तू ➔ तुम।',
    points: 15,
  },
  {
    id: 'c3_h2_concept_order_01',
    grade: 3,
    subject: 'hindi',
    chapter: 'शेखीबाज़ मक्खी (सर्वनाम शब्द)',
    concept: 'सर्वनाम युक्त वाक्य निर्माण',
    difficulty: 'medium',
    type: 'drag_order',
    question: 'शब्दों को सही क्रम में लगाकर सार्थक वाक्य बनाइए:',
    visualEmoji: '🦊 🌲 🐾',
    payload: {
      tokens: ['लोमड़ी ने कहा,', 'आप बहुत बुद्धिमान हैं,', 'मगर वह मकड़ी', 'आपको ललकार रही है।'],
      scrambled: ['मगर वह मकड़ी', 'लोमड़ी ने कहा,', 'आपको ललकार रही है।', 'आप बहुत बुद्धिमान हैं,'],
      correctSequence: ['लोमड़ी ने कहा,', 'आप बहुत बुद्धिमान हैं,', 'मगर वह मकड़ी', 'आपको ललकार रही है।'],
    },
    explanation: '💡 सही क्रम: "लोमड़ी ने कहा, आप बहुत बुद्धिमान हैं, मगर वह मकड़ी आपको ललकार रही है।"',
    points: 15,
  },
];
