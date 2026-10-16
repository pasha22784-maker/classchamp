import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 1 HINDI (सारंगी 1 / RIMJHIM 1)
// CHAPTER 6: नाम वाले शब्द (संज्ञा परिचय)
// Comprehensive Curriculum Covering All 7 Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_1_HINDI_LESSON_6_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: नाम वाले शब्द की पहचान (संज्ञा)
  // --------------------------------------------------------------------------
  {
    id: 'c1_h6_concept_naam_01',
    grade: 1,
    subject: 'hindi',
    chapter: 'नाम वाले शब्द (संज्ञा परिचय)',
    concept: 'नाम वाले शब्द पहचान',
    difficulty: 'easy',
    type: 'mcq',
    question: 'इस संसार में प्रत्येक व्यक्ति, वस्तु और पशु-पक्षी की पहचान के लिए क्या होता है?',
    visualEmoji: '🏷️ 🌍',
    payload: {
      options: [
        { id: 'opt_nm1_1', text: 'उसका नाम (नाम वाले शब्द)', isCorrect: true },
        { id: 'opt_nm1_2', text: 'केवल संख्या', isCorrect: false },
        { id: 'opt_nm1_3', text: 'कोई नाम नहीं होता', isCorrect: false },
      ],
    },
    explanation: '💡 किसी भी व्यक्ति, वस्तु, स्थान या पशु के नाम को **नाम वाले शब्द (संज्ञा)** कहते हैं!',
    points: 10,
  },
  {
    id: 'c1_h6_concept_naam_02',
    grade: 1,
    subject: 'hindi',
    chapter: 'नाम वाले शब्द (संज्ञा परिचय)',
    concept: 'व्यक्तियों के नाम',
    difficulty: 'easy',
    type: 'mcq',
    question: 'इनमें से कौन सा शब्द किसी व्यक्ति (इंसान) का नाम है?',
    visualEmoji: '👦 🪑 ⚽',
    payload: {
      options: [
        { id: 'opt_nm2_1', text: 'अमन 👦 (एक बालक का नाम)', isCorrect: true },
        { id: 'opt_nm2_2', text: 'कुर्सी 🪑 (वस्तु)', isCorrect: false },
        { id: 'opt_nm2_3', text: 'दौड़ना 🏃 (काम)', isCorrect: false },
      ],
    },
    explanation: '💡 **अमन** 👦 एक व्यक्ति/बालक का नाम है!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: पशु-पक्षियों के नाम
  // --------------------------------------------------------------------------
  {
    id: 'c1_h6_concept_ani_01',
    grade: 1,
    subject: 'hindi',
    chapter: 'नाम वाले शब्द (संज्ञा परिचय)',
    concept: 'पशु-पक्षी का नाम',
    difficulty: 'easy',
    type: 'mcq',
    question: 'इनमें से कौन सा शब्द किसी पशु या पक्षी का नाम है?',
    visualEmoji: '🦚 🎒 🏫',
    payload: {
      options: [
        { id: 'opt_ani1_1', text: 'मोर 🦚 (पक्षी का नाम)', isCorrect: true },
        { id: 'opt_ani1_2', text: 'बस्ता 🎒 (वस्तु का नाम)', isCorrect: false },
        { id: 'opt_ani1_3', text: 'स्कूल 🏫 (स्थान का नाम)', isCorrect: false },
      ],
    },
    explanation: '💡 **मोर** 🦚 हमारा राष्ट्रीय पक्षी है, यह एक पक्षी का नाम है!',
    points: 10,
  },
  {
    id: 'c1_h6_concept_ani_02',
    grade: 1,
    subject: 'hindi',
    chapter: 'नाम वाले शब्द (संज्ञा परिचय)',
    concept: 'पशुओं के नाम मिलान',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'पशु के नाम को उसकी सही पहचान से मिलाइए:',
    visualEmoji: '🦁 🐘 🐄 🐕',
    payload: {
      pairs: [
        { id: 'ani_p1', left: 'शेर', right: '🦁 जंगल का राजा' },
        { id: 'ani_p2', left: 'हाथी', right: '🐘 विशाल सूँड़ वाला' },
        { id: 'ani_p3', left: 'गाय', right: '🐄 मीठा दूध देने वाली' },
        { id: 'ani_p4', left: 'कुत्ता', right: '🐕 वफादार रखवाला' },
      ],
    },
    explanation: '💡 शेर, हाथी, गाय, कुत्ता — सभी पशुओं के नाम (नाम वाले शब्द) हैं!',
    points: 15,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: स्थानों (जगहों) के नाम
  // --------------------------------------------------------------------------
  {
    id: 'c1_h6_concept_place_01',
    grade: 1,
    subject: 'hindi',
    chapter: 'नाम वाले शब्द (संज्ञा परिचय)',
    concept: 'स्थान का नाम पहचान',
    difficulty: 'easy',
    type: 'mcq',
    question: 'जहाँ हम सब पढ़ने, लिखने और खेलने जाते हैं 🏫, उस स्थान का नाम क्या है?',
    visualEmoji: '🏫 📚',
    payload: {
      options: [
        { id: 'opt_plc1_1', text: 'विद्यालय / पाठशाला 🏫 (स्थान का नाम)', isCorrect: true },
        { id: 'opt_plc1_2', text: 'पेंसिल ✏️ (वस्तु)', isCorrect: false },
        { id: 'opt_plc1_3', text: 'हँसना 😄 (काम)', isCorrect: false },
      ],
    },
    explanation: '💡 **पाठशाला / विद्यालय** 🏫 एक स्थान (जगह) का नाम है!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 4: वस्तुओं (चीज़ों) के नाम
  // --------------------------------------------------------------------------
  {
    id: 'c1_h6_concept_thing_01',
    grade: 1,
    subject: 'hindi',
    chapter: 'नाम वाले शब्द (संज्ञा परिचय)',
    concept: 'वस्तु का नाम पहचान',
    difficulty: 'easy',
    type: 'mcq',
    question: 'इनमें से कौन सा शब्द किसी वस्तु (निर्जीव चीज़) का नाम है?',
    visualEmoji: '⚽ 👦 🌳',
    payload: {
      options: [
        { id: 'opt_thg1_1', text: 'गेंद ⚽ (वस्तु का नाम)', isCorrect: true },
        { id: 'opt_thg1_2', text: 'रोहन 👦 (व्यक्ति का नाम)', isCorrect: false },
        { id: 'opt_thg1_3', text: 'बंदर 🐒 (पशु का नाम)', isCorrect: false },
      ],
    },
    explanation: '💡 **गेंद** ⚽ एक खेलने वाली वस्तु (चीज़) का नाम है!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 5: नाम वाले शब्दों का वर्गीकरण मिलान
  // --------------------------------------------------------------------------
  {
    id: 'c1_h6_concept_cat_01',
    grade: 1,
    subject: 'hindi',
    chapter: 'नाम वाले शब्द (संज्ञा परिचय)',
    concept: 'नाम वाले शब्द वर्गीकरण',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'प्रत्येक नाम वाले शब्द को उसके सही वर्ग से मिलाइए:',
    visualEmoji: '🏷️ 🗂️',
    payload: {
      pairs: [
        { id: 'ncat_1', left: 'माँ 👩', right: 'व्यक्ति का नाम' },
        { id: 'ncat_2', left: 'बगीचा 🌳', right: 'स्थान का नाम' },
        { id: 'ncat_3', left: 'तितली 🦋', right: 'जीव का नाम' },
        { id: 'ncat_4', left: 'छाता ☂️', right: 'वस्तु का नाम' },
      ],
    },
    explanation: '💡 नाम वाले शब्द किसी व्यक्ति, स्थान, जीव या वस्तु की पहचान कराते हैं!',
    points: 15,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 6: वाक्य में नाम वाला शब्द पहचान
  // --------------------------------------------------------------------------
  {
    id: 'c1_h6_concept_sent_01',
    grade: 1,
    subject: 'hindi',
    chapter: 'नाम वाले शब्द (संज्ञा परिचय)',
    concept: 'वाक्य में नाम वाला शब्द',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'वाक्य में वस्तु का नाम भरिए: "मीना ने लाल रंग का [BLANK] पहना।" 👗',
    visualEmoji: '👧 👗',
    payload: {
      correctAnswer: 'फ्रॉक',
      wordBank: ['फ्रॉक', 'सेब', 'पानी', 'पेड़'],
      displayTemplate: 'मीना ने लाल रंग का [BLANK] पहना। 👗',
    },
    explanation: '💡 फ्रॉक 👗 एक पहनने वाली वस्तु का नाम है!',
    points: 10,
  },
];
