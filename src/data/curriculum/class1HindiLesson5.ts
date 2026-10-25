import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 1 HINDI (सारंगी 1 / RIMJHIM 1)
// CHAPTER 5: वाह! मेरे खिलौने (ए, ऐ, ओ, औ की मात्रा)
// Comprehensive Curriculum Covering All 8 Core Concepts (Global Benchmark Standard)
// ============================================================================

export const CLASS_1_HINDI_LESSON_5_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: 'ए' की मात्रा (चिह्न: े - ऊपर एक चोटी)
  // --------------------------------------------------------------------------
  {
    id: 'c1_h5_concept_matra_e_01',
    grade: 1,
    subject: 'hindi',
    chapter: 'वाह! मेरे खिलौने (ए, ऐ, ओ, औ की मात्रा)',
    concept: 'ए की मात्रा पहचान',
    difficulty: 'easy',
    type: 'mcq',
    question: '"ए" की मात्रा (े) अक्षर के ऊपर कैसे लगाई जाती है?',
    visualEmoji: 'े ➡️ के',
    payload: {
      options: [
        { id: 'opt_e1_1', text: 'अक्षर के ऊपर एक तिरछी चोटी', isCorrect: true },
        { id: 'opt_e1_2', text: 'अक्षर के ऊपर दो चोटियाँ', isCorrect: false },
        { id: 'opt_e1_3', text: 'अक्षर के नीचे गोल घुमाव', isCorrect: false },
      ],
    },
    explanation: '💡 याद रखें: स्वर "ए" की मात्रा **े** (ऊपर एक चोटी) होती है, जैसे क + े = **के** (केला 🍌)!',
    points: 10,
  },
  {
    id: 'c1_h5_concept_matra_e_02',
    grade: 1,
    subject: 'hindi',
    chapter: 'वाह! मेरे खिलौने (ए, ऐ, ओ, औ की मात्रा)',
    concept: 'ए की मात्रा वाले फल',
    difficulty: 'easy',
    type: 'mcq',
    question: 'छिलका उतार कर खाया जाने वाला मीठा पीला फल 🍌 कौन सा है?',
    visualEmoji: '🍌',
    payload: {
      options: [
        { id: 'opt_e2_1', text: 'केला 🍌', isCorrect: true },
        { id: 'opt_e2_2', text: 'सेब 🍎', isCorrect: false },
        { id: 'opt_e2_3', text: 'आम 🥭', isCorrect: false },
      ],
    },
    explanation: '💡 क + े + ल + ा = **केला** 🍌! क पर ए (े) की मात्रा लगती है।',
    points: 10,
  },
  {
    id: 'c1_h5_concept_matra_e_03',
    grade: 1,
    subject: 'hindi',
    chapter: 'वाह! मेरे खिलौने (ए, ऐ, ओ, औ की मात्रा)',
    concept: 'ए की मात्रा शब्द मिलान',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'ए (े) की मात्रा वाले शब्दों को उनके सही चित्र से मिलाइए:',
    visualEmoji: '🍎 🦁 🌳 🚂',
    payload: {
      pairs: [
        { id: 'ep_1', left: 'सेब', right: '🍎 लाल मीठा सेब' },
        { id: 'ep_2', left: 'शेर', right: '🦁 जंगल का राजा शेर' },
        { id: 'ep_3', left: 'पेड़', right: '🌳 छायादार हरा पेड़' },
        { id: 'ep_4', left: 'रेल', right: '🚂 छुक-छुक चलती रेलगाड़ी' },
      ],
    },
    explanation: '💡 सेब, शेर, पेड़, रेल — सभी में ऊपर ए (े) की मात्रा लगती है!',
    points: 15,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: 'ऐ' की मात्रा (चिह्न: ै - ऊपर दो चोटियाँ)
  // --------------------------------------------------------------------------
  {
    id: 'c1_h5_concept_matra_ai_01',
    grade: 1,
    subject: 'hindi',
    chapter: 'वाह! मेरे खिलौने (ए, ऐ, ओ, औ की मात्रा)',
    concept: 'ऐ की मात्रा पहचान',
    difficulty: 'easy',
    type: 'mcq',
    question: '"ऐ" की मात्रा (ै) में अक्षर के ऊपर कितनी चोटियाँ लगाई जाती हैं?',
    visualEmoji: 'ै ➡️ पै',
    payload: {
      options: [
        { id: 'opt_ai1_1', text: 'ऊपर दो चोटियाँ जैसे प + ै = पै', isCorrect: true },
        { id: 'opt_ai1_2', text: 'ऊपर केवल एक चोटी', isCorrect: false },
        { id: 'opt_ai1_3', text: 'पीछे एक खड़ी डंडी', isCorrect: false },
      ],
    },
    explanation: '💡 याद रखें: **ऐ (ै)** की मात्रा में ऊपर दो चोटियाँ लगती हैं, जैसे प + ै + र = **पैर** 🦶!',
    points: 10,
  },
  {
    id: 'c1_h5_concept_matra_ai_02',
    grade: 1,
    subject: 'hindi',
    chapter: 'वाह! मेरे खिलौने (ए, ऐ, ओ, औ की मात्रा)',
    concept: 'ऐ की मात्रा शब्द',
    difficulty: 'easy',
    type: 'mcq',
    question: 'देश की सीमा पर हमारी रक्षा करने वाले वीर जवान 🪖 को क्या कहते हैं?',
    visualEmoji: '🪖 🇮🇳',
    payload: {
      options: [
        { id: 'opt_ai2_1', text: 'सैनिक 🪖', isCorrect: true },
        { id: 'opt_ai2_2', text: 'नेता 👔', isCorrect: false },
        { id: 'opt_ai2_3', text: 'किसान 🌾', isCorrect: false },
      ],
    },
    explanation: '💡 स + ै + न + ि + क = **सैनिक** 🪖! स पर ऐ (ै) की दो मात्राएँ लगती हैं।',
    points: 10,
  },
  {
    id: 'c1_h5_concept_matra_ai_03',
    grade: 1,
    subject: 'hindi',
    chapter: 'वाह! मेरे खिलौने (ए, ऐ, ओ, औ की मात्रा)',
    concept: 'ऐ की मात्रा रिक्त स्थान',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'सब्ज़ी और फल लाने के लिए माँ हाथ में [BLANK] लेकर बाज़ार गईं 🛍️',
    visualEmoji: '🛍️ 🛒',
    payload: {
      correctAnswer: 'थैला',
      wordBank: ['थैला', 'डंडा', 'छाता', 'जूता'],
      displayTemplate: 'माँ हाथ में [BLANK] लेकर गईं। 🛍️',
    },
    explanation: '💡 थ + ै + ल + ा = **थैला** 🛍️!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: 'ओ' की मात्रा (चिह्न: ो - एक डंडी और ऊपर एक चोटी)
  // --------------------------------------------------------------------------
  {
    id: 'c1_h5_concept_matra_o_01',
    grade: 1,
    subject: 'hindi',
    chapter: 'वाह! मेरे खिलौने (ए, ऐ, ओ, औ की मात्रा)',
    concept: 'ओ की मात्रा पहचान',
    difficulty: 'easy',
    type: 'mcq',
    question: 'हमारा राष्ट्रीय पक्षी मोर 🦚 बारिश में सुंदर पंख फैलाकर नाचता है। "मोर" में कौन सी मात्रा है?',
    visualEmoji: '🦚 🌧️',
    payload: {
      options: [
        { id: 'opt_o1_1', text: 'ओ की मात्रा - म + ो + र', isCorrect: true },
        { id: 'opt_o1_2', text: 'आ की मात्रा', isCorrect: false },
        { id: 'opt_o1_3', text: 'ऊ की मात्रा', isCorrect: false },
      ],
    },
    explanation: '💡 म + ो + र = **मोर** 🦚! म के पीछे एक डंडी और ऊपर एक चोटी यानी "ओ" (ो) की मात्रा लगती है।',
    points: 10,
  },
  {
    id: 'c1_h5_concept_matra_o_02',
    grade: 1,
    subject: 'hindi',
    chapter: 'वाह! मेरे खिलौने (ए, ऐ, ओ, औ की मात्रा)',
    concept: 'ओ की मात्रा वाले शब्द मिलान',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'ओ (ो) की मात्रा वाले शब्दों को उनके सही चित्र से मिलाइए:',
    visualEmoji: '🦜 🪘 🟡 🥣',
    payload: {
      pairs: [
        { id: 'op_1', left: 'तोता', right: '🦜 लाल चोंच वाला तोता' },
        { id: 'op_2', left: 'ढोलक', right: '🪘 थाप पर बजने वाली ढोलक' },
        { id: 'op_3', left: 'गोल', right: '🟡 गोल-गोल गेंद' },
        { id: 'op_4', left: 'कटोरी', right: '🥣 खीर की कटोरी' },
      ],
    },
    explanation: '💡 तोता, ढोलक, गोल, कटोरी — इन सभी शब्दों में ओ (ो) की मात्रा आती है!',
    points: 15,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 4: 'औ' की मात्रा (चिह्न: ौ - एक डंडी और ऊपर दो चोटियाँ)
  // --------------------------------------------------------------------------
  {
    id: 'c1_h5_concept_matra_au_01',
    grade: 1,
    subject: 'hindi',
    chapter: 'वाह! मेरे खिलौने (ए, ऐ, ओ, औ की मात्रा)',
    concept: 'औ की मात्रा पहचान',
    difficulty: 'easy',
    type: 'mcq',
    question: 'गमले में पानी देने से छोटा सा हरा-भरा क्या बढ़ता है 🌱?',
    visualEmoji: '🌱 🌱',
    payload: {
      options: [
        { id: 'opt_au1_1', text: 'पौधा 🌱', isCorrect: true },
        { id: 'opt_au1_2', text: 'पेड़ 🌳', isCorrect: false },
        { id: 'opt_au1_3', text: 'पत्ता 🍃', isCorrect: false },
      ],
    },
    explanation: '💡 प + ौ + ध + ा = **पौधा** 🌱! प पर एक डंडी और ऊपर दो चोटियाँ यानी "औ" (ौ) की मात्रा लगती है।',
    points: 10,
  },
  {
    id: 'c1_h5_concept_matra_au_02',
    grade: 1,
    subject: 'hindi',
    chapter: 'वाह! मेरे खिलौने (ए, ऐ, ओ, औ की मात्रा)',
    concept: 'खिलौने पाठ बोध',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'मेले से रोहन अपने खेलने के लिए सुंदर [BLANK] लाया 🧸',
    visualEmoji: '🧸 🚗',
    payload: {
      correctAnswer: 'खिलौना',
      wordBank: ['खिलौना', 'खाना', 'किताब', 'छाता'],
      displayTemplate: 'रोहन खेलने के लिए [BLANK] लाया। 🧸',
    },
    explanation: '💡 ख + ि + ल + ौ + न + ा = **खिलौना** 🧸! ल पर औ (ौ) की मात्रा लगती है।',
    points: 10,
  },
  {
    id: 'c1_h5_concept_matra_au_03',
    grade: 1,
    subject: 'hindi',
    chapter: 'वाह! मेरे खिलौने (ए, ऐ, ओ, औ की मात्रा)',
    concept: 'पानी पर चलने वाली नाव',
    difficulty: 'medium',
    type: 'mcq',
    question: 'नदी के पानी में तैरती हुई नाव ⛵ को शुद्ध हिंदी में क्या कहते हैं?',
    visualEmoji: '⛵ 🌊',
    payload: {
      options: [
        { id: 'opt_au3_1', text: 'नौका ⛵', isCorrect: true },
        { id: 'opt_au3_2', text: 'गाड़ी 🚗', isCorrect: false },
        { id: 'opt_au3_3', text: 'हवाई जहाज ✈️', isCorrect: false },
      ],
    },
    explanation: '💡 न + ौ + क + ा = **नौका** ⛵!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 5: मात्राओं में अंतर (ए vs ऐ, ओ vs औ)
  // --------------------------------------------------------------------------
  {
    id: 'c1_h5_concept_diff_01',
    grade: 1,
    subject: 'hindi',
    chapter: 'वाह! मेरे खिलौने (ए, ऐ, ओ, औ की मात्रा)',
    concept: 'ए और ऐ की मात्रा में अंतर',
    difficulty: 'hard',
    type: 'mcq',
    question: 'खेत जोतने वाला सींगों वाला पशु "बैल" 🐂 है। इसमें कौन सी मात्रा है?',
    visualEmoji: '🐂 🌾',
    payload: {
      options: [
        { id: 'opt_df1_1', text: 'ऐ की मात्रा - बैल', isCorrect: true },
        { id: 'opt_df1_2', text: 'ए की मात्रा - बेल', isCorrect: false },
      ],
    },
    explanation: '💡 ब पर दो चोटियाँ (ै) लगने पर बनता है **बैल** 🐂 (पशु), जबकि एक चोटी (े) लगने पर बनता है बेल 🌿 (लता)!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 6: तुकबंदी वाले शब्द
  // --------------------------------------------------------------------------
  {
    id: 'c1_h5_concept_rhyme_01',
    grade: 1,
    subject: 'hindi',
    chapter: 'वाह! मेरे खिलौने (ए, ऐ, ओ, औ की मात्रा)',
    concept: 'तुकबंदी मिलान',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'समान तुक वाले (तुकबंदी) शब्दों के जोड़े मिलाइए:',
    visualEmoji: '🎵 ✍️',
    payload: {
      pairs: [
        { id: 'khr_1', left: 'मेला 🎡', right: 'केला 🍌' },
        { id: 'khr_2', left: 'सैर 🚶', right: 'पैर 🦶' },
        { id: 'khr_3', left: 'मोर 🦚', right: 'शोर 📢' },
        { id: 'khr_4', left: 'कौआ 🐦‍⬛', right: 'हौआ 👻' },
      ],
    },
    explanation: '💡 मेला-केला, सैर-पैर, मोर-शोर, कौआ-हौआ — सभी समान तुकबंदी वाले शब्द हैं!',
    points: 15,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 7: सरल वाक्य पठन
  // --------------------------------------------------------------------------
  {
    id: 'c1_h5_concept_sent_01',
    grade: 1,
    subject: 'hindi',
    chapter: 'वाह! मेरे खिलौने (ए, ऐ, ओ, औ की मात्रा)',
    concept: 'सरल वाक्य पूर्ण करना',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'वाक्य पूरा कीजिए: "काले बादल देखकर [BLANK] नाचा।" 🦚 🌧️',
    visualEmoji: '🦚 🌧️',
    payload: {
      correctAnswer: 'मोर',
      wordBank: ['मोर', 'शेर', 'हाथी', 'चूहा'],
      displayTemplate: 'बादल देखकर [BLANK] नाचा। 🦚',
    },
    explanation: '💡 "काले बादल देखकर **मोर** नाचा।" 🦚',
    points: 10,
  },
];
