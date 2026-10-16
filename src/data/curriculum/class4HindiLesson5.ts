import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 4 HINDI (रिमझिम 4)
// CHAPTER 5: नाव बनाओ (पर्यायवाची शब्द व तुकांत शब्द)
// Comprehensive Curriculum Covering All Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_4_HINDI_LESSON_5_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: 'नाव बनाओ' कविता संदर्भ
  // --------------------------------------------------------------------------
  {
    id: 'c4_h5_concept_poem_01',
    grade: 4,
    subject: 'hindi',
    chapter: 'नाव बनाओ (पर्यायवाची शब्द व तुकांत शब्द)',
    concept: 'कागज़ की नाव बनाने का आह्वान',
    difficulty: 'easy',
    type: 'mcq',
    question: 'बारिश के पानी में चलाने के लिए बच्चा अपने भैया से क्या बनाने को कहता है?',
    visualEmoji: '⛵ 🌧️ 👦',
    payload: {
      options: [
        { id: 'opt_nv1', text: 'कागज़ की रंग-बिरंगी नाव', isCorrect: true },
        { id: 'opt_nv2', text: 'कागज़ का हवाई जहाज', isCorrect: false },
        { id: 'opt_nv3', text: 'मिट्टी का खिलौना', isCorrect: false },
      ],
    },
    explanation: '💡 कविता की पंक्ति है: "नाव बनाओ नाव बनाओ, भैया मेरे जल्दी आओ! पानी में लहराती नाव आगे बढ़ेगी!"',
    points: 10,
  },
  {
    id: 'c4_h5_concept_poem_02',
    grade: 4,
    subject: 'hindi',
    chapter: 'नाव बनाओ (पर्यायवाची शब्द व तुकांत शब्द)',
    concept: 'बादल क्या भर कर लाए हैं',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'कविता के अनुसार उमड़-घुमड़ कर आए काले बादल सात [BLANK] का पानी भर लाए हैं।',
    visualEmoji: '☁️ 🌊 🌧️',
    payload: {
      correctAnswer: 'समुंदर',
      wordBank: ['समुंदर', 'नदियाँ', 'तालाब', 'कुएँ'],
      displayTemplate: 'सात [BLANK] भर लाया है।',
    },
    explanation: '💡 कविता की पंक्ति है: "घिर-घिर कर बादल छाया है, सात **समुंदर** भर लाया है!"',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: पर्यायवाची शब्द (समानार्थक शब्द)
  // --------------------------------------------------------------------------
  {
    id: 'c4_h5_concept_paryay_01',
    grade: 4,
    subject: 'hindi',
    chapter: 'नाव बनाओ (पर्यायवाची शब्द व तुकांत शब्द)',
    concept: 'बादल के पर्यायवाची शब्द',
    difficulty: 'easy',
    type: 'mcq',
    question: '"बादल" का पर्यायवाची (समान अर्थ वाला) शब्द कौन सा है?',
    visualEmoji: '☁️ ➔ ❓',
    payload: {
      options: [
        { id: 'opt_bdl1', text: 'मेघ / घन / जलद', isCorrect: true },
        { id: 'opt_bdl2', text: 'पवन / समीर', isCorrect: false },
        { id: 'opt_bdl3', text: 'सरिता / तरंगिणी', isCorrect: false },
      ],
    },
    explanation: '💡 बादल के पर्यायवाची शब्द **मेघ, घन, और जलद** हैं!',
    points: 10,
  },
  {
    id: 'c4_h5_concept_paryay_02',
    grade: 4,
    subject: 'hindi',
    chapter: 'नाव बनाओ (पर्यायवाची शब्द व तुकांत शब्द)',
    concept: 'समुंदर का पर्यायवाची',
    difficulty: 'medium',
    type: 'fill_blank',
    question: '"समुंदर" को संस्कृत व हिंदी में [BLANK] भी कहा जाता है।',
    visualEmoji: '🌊 ⛵',
    payload: {
      correctAnswer: 'सागर',
      wordBank: ['सागर', 'नदी', 'झरना', 'बादल'],
      displayTemplate: 'समुंदर का पर्यायवाची [BLANK] है।',
    },
    explanation: '💡 समुंदर के पर्यायवाची हैं: **सागर**, **सिंधु**, और **रत्नाकर**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: तुकांत शब्द व पर्यायवाची मिलान
  // --------------------------------------------------------------------------
  {
    id: 'c4_h5_concept_match_01',
    grade: 4,
    subject: 'hindi',
    chapter: 'नाव बनाओ (पर्यायवाची शब्द व तुकांत शब्द)',
    concept: 'पर्यायवाची शब्द मिलान',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'शब्दों को उनके सही पर्यायवाची (समानार्थी) शब्दों से मिलाइए:',
    visualEmoji: '🤝 ➔ 🎯',
    payload: {
      pairs: [
        { id: 'nb_p1', left: 'पानी', right: 'जल / नीर' },
        { id: 'nb_p2', left: 'नाव', right: 'नौका / किश्ती' },
        { id: 'nb_p3', left: 'समुंदर', right: 'सागर / सिंधु' },
        { id: 'nb_p4', left: 'बादल', right: 'मेघ / घन' },
      ],
    },
    explanation: '💡 पानी = जल, नाव = नौका, समुंदर = सागर, बादल = मेघ।',
    points: 15,
  },
  {
    id: 'c4_h5_concept_order_01',
    grade: 4,
    subject: 'hindi',
    chapter: 'नाव बनाओ (पर्यायवाची शब्द व तुकांत शब्द)',
    concept: 'कविता की पंक्तियों का सही क्रम',
    difficulty: 'medium',
    type: 'drag_order',
    question: 'कविता "नाव बनाओ" की आरंभिक पंक्तियों को सही क्रम में लगाइए:',
    visualEmoji: '⛵ 📜 🌧️',
    payload: {
      tokens: ['नाव बनाओ नाव बनाओ,', 'भैया मेरे जल्दी आओ!', 'वह देखो पानी आया है,', 'घिर-घिर कर बादल छाया है।'],
      scrambled: ['घिर-घिर कर बादल छाया है।', 'नाव बनाओ नाव बनाओ,', 'वह देखो पानी आया है,', 'भैया मेरे जल्दी आओ!'],
      correctSequence: ['नाव बनाओ नाव बनाओ,', 'भैया मेरे जल्दी आओ!', 'वह देखो पानी आया है,', 'घिर-घिर कर बादल छाया है।'],
    },
    explanation: '💡 सही क्रम: "नाव बनाओ नाव बनाओ, भैया मेरे जल्दी आओ! वह देखो पानी आया है, घिर-घिर कर बादल छाया है।"',
    points: 15,
  },
];
