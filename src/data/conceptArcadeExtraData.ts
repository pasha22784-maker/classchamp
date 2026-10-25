// ==========================================
// SUPER KID CONCEPT ARCADE: EXTENDED GAMES DATA
// Dynamic & Replayable games for year-round mastery
// ==========================================

// ------------------------------------------
// 1. MATHS: Number Train Mystery (संख्या रेलगाड़ी)
// ------------------------------------------
export interface MathNumberTrainChallenge {
  promptEn: string;
  promptHi: string;
  speechEn: string;
  speechHi: string;
  targetNum: string;
  trainWagons: {
    id: string;
    num: string;
    isMissing: boolean;
  }[];
  options: {
    id: string;
    num: string;
    emoji: string;
    isCorrect: boolean;
    color: string;
  }[];
}

export const MATH_NUMBER_TRAIN_CHALLENGES: MathNumberTrainChallenge[] = [
  {
    promptEn: 'Which wagon number is missing from the train? 🚂',
    promptHi: 'रेलगाड़ी के खाली डिब्बे का कौन सा नंबर गायब है? 🚂',
    speechEn: 'Choo Choo! One, two, what comes next? Then four!',
    speechHi: 'छुक छुक! एक, दो, फिर क्या आएगा? चार से पहले!',
    targetNum: '3',
    trainWagons: [
      { id: 'w1', num: '1', isMissing: false },
      { id: 'w2', num: '2', isMissing: false },
      { id: 'w3', num: '?', isMissing: true },
      { id: 'w4', num: '4', isMissing: false },
    ],
    options: [
      { id: 'nto_1', num: '3', emoji: '🚂', isCorrect: true, color: '#DCFCE7' },
      { id: 'nto_2', num: '5', emoji: '🚂', isCorrect: false, color: '#FEE2E2' },
      { id: 'nto_3', num: '1', emoji: '🚂', isCorrect: false, color: '#FEF3C7' },
    ],
  },
  {
    promptEn: 'Fill in the missing train wagon number! 🚂',
    promptHi: 'रेलगाड़ी का गायब डिब्बा नंबर भरें! 🚂',
    speechEn: 'Look closely: Three, four, what comes next? Then six!',
    speechHi: 'ध्यान से देखें: तीन, चार, उसके बाद क्या आता है? फिर छह!',
    targetNum: '5',
    trainWagons: [
      { id: 'w5', num: '3', isMissing: false },
      { id: 'w6', num: '4', isMissing: false },
      { id: 'w7', num: '?', isMissing: true },
      { id: 'w8', num: '6', isMissing: false },
    ],
    options: [
      { id: 'nto_4', num: '2', emoji: '🚂', isCorrect: false, color: '#EDE9FE' },
      { id: 'nto_5', num: '5', emoji: '🚂', isCorrect: true, color: '#DBEAFE' },
      { id: 'nto_6', num: '7', emoji: '🚂', isCorrect: false, color: '#FEF3C7' },
    ],
  },
  {
    promptEn: 'Which number starts this express train? 🚂',
    promptHi: 'इस एक्सप्रेस ट्रेन का पहला नंबर कौन सा है? 🚂',
    speechEn: 'What number comes before two and three?',
    speechHi: 'दो और तीन से पहले कौन सा नंबर आता है?',
    targetNum: '1',
    trainWagons: [
      { id: 'w9', num: '?', isMissing: true },
      { id: 'w10', num: '2', isMissing: false },
      { id: 'w11', num: '3', isMissing: false },
      { id: 'w12', num: '4', isMissing: false },
    ],
    options: [
      { id: 'nto_7', num: '1', emoji: '🚂', isCorrect: true, color: '#FEF08A' },
      { id: 'nto_8', num: '4', emoji: '🚂', isCorrect: false, color: '#F1F5F9' },
      { id: 'nto_9', num: '0', emoji: '🚂', isCorrect: false, color: '#FEE2E2' },
    ],
  },
  {
    promptEn: 'The train is reaching 8! What is missing in between? 🚂',
    promptHi: 'ट्रेन 8 तक पहुंच रही है! बीच का कौन सा डिब्बा खाली है? 🚂',
    speechEn: 'Five, six, what comes next? Then eight!',
    speechHi: 'पांच, छह, उसके बाद क्या आता है? फिर आठ!',
    targetNum: '7',
    trainWagons: [
      { id: 'w13', num: '5', isMissing: false },
      { id: 'w14', num: '6', isMissing: false },
      { id: 'w15', num: '?', isMissing: true },
      { id: 'w16', num: '8', isMissing: false },
    ],
    options: [
      { id: 'nto_10', num: '9', emoji: '🚂', isCorrect: false, color: '#FCE7F3' },
      { id: 'nto_11', num: '7', emoji: '🚂', isCorrect: true, color: '#DCFCE7' },
      { id: 'nto_12', num: '4', emoji: '🚂', isCorrect: false, color: '#E0E7FF' },
    ],
  },
  {
    promptEn: 'Final wagon mystery! What comes after eight? 🚂',
    promptHi: 'अंतिम डिब्बा पहेली! आठ के बाद कौन सा नंबर आएगा? 🚂',
    speechEn: 'Seven, eight, what is next? Then ten!',
    speechHi: 'सात, आठ, उसके बाद क्या? फिर दस!',
    targetNum: '9',
    trainWagons: [
      { id: 'w17', num: '7', isMissing: false },
      { id: 'w18', num: '8', isMissing: false },
      { id: 'w19', num: '?', isMissing: true },
      { id: 'w20', num: '10', isMissing: false },
    ],
    options: [
      { id: 'nto_13', num: '6', emoji: '🚂', isCorrect: false, color: '#FEE2E2' },
      { id: 'nto_14', num: '9', emoji: '🚂', isCorrect: true, color: '#FDF2F8' },
      { id: 'nto_15', num: '11', emoji: '🚂', isCorrect: false, color: '#FEF3C7' },
    ],
  },
  {
    promptEn: 'Count and roll: 2, 3, ?, 5! Tap the wagon! 🚂',
    promptHi: 'गिनें और चलाएं: २, ३, ?, ५! सही डिब्बे पर टैप करें! 🚂',
    speechEn: 'Two, three, what comes next? Then five!',
    speechHi: 'दो, तीन, उसके बाद क्या? फिर पांच!',
    targetNum: '4',
    trainWagons: [
      { id: 'w21', num: '2', isMissing: false },
      { id: 'w22', num: '3', isMissing: false },
      { id: 'w23', num: '?', isMissing: true },
      { id: 'w24', num: '5', isMissing: false },
    ],
    options: [
      { id: 'nto_16', num: '4', emoji: '🚂', isCorrect: true, color: '#DCFCE7' },
      { id: 'nto_17', num: '6', emoji: '🚂', isCorrect: false, color: '#DBEAFE' },
      { id: 'nto_18', num: '1', emoji: '🚂', isCorrect: false, color: '#FEE2E2' },
    ],
  },
];

// ------------------------------------------
// 2. MATHS: More vs Less Berry Balance (ज्यादा बनाम कम)
// ------------------------------------------
export interface MathMoreLessChallenge {
  promptEn: string;
  promptHi: string;
  speechEn: string;
  speechHi: string;
  targetMode: 'more' | 'less';
  leftBasket: {
    id: string;
    count: number;
    emoji: string;
    itemLabelEn: string;
    itemLabelHi: string;
    isCorrect: boolean;
    color: string;
  };
  rightBasket: {
    id: string;
    count: number;
    emoji: string;
    itemLabelEn: string;
    itemLabelHi: string;
    isCorrect: boolean;
    color: string;
  };
}

export const MATH_MORE_LESS_CHALLENGES: MathMoreLessChallenge[] = [
  {
    promptEn: 'Tap the basket with MORE delicious strawberries! 🍓',
    promptHi: 'ज्यादा रसदार स्ट्रॉबेरी 🍓 वाली टोकरी पर टैप करें!',
    speechEn: 'Tap the basket that has more strawberries! 5 or 2?',
    speechHi: 'किस टोकरी में ज्यादा स्ट्रॉबेरी हैं? 5 या 2? टैप करें!',
    targetMode: 'more',
    leftBasket: {
      id: 'ml_1_l',
      count: 5,
      emoji: '🍓',
      itemLabelEn: '5 Strawberries',
      itemLabelHi: '5 स्ट्रॉबेरी',
      isCorrect: true,
      color: '#FEE2E2',
    },
    rightBasket: {
      id: 'ml_1_r',
      count: 2,
      emoji: '🍓',
      itemLabelEn: '2 Strawberries',
      itemLabelHi: '2 स्ट्रॉबेरी',
      isCorrect: false,
      color: '#FEF3C7',
    },
  },
  {
    promptEn: 'Tap the plate with LESS cookies! 🍪',
    promptHi: 'कम कुकीज़ 🍪 वाली प्लेट पर टैप करें!',
    speechEn: 'Tap the plate that has fewer cookies! 1 or 4?',
    speechHi: 'कम कुकीज वाली प्लेट कौन सी है? 1 या 4?',
    targetMode: 'less',
    leftBasket: {
      id: 'ml_2_l',
      count: 4,
      emoji: '🍪',
      itemLabelEn: '4 Cookies',
      itemLabelHi: '4 कुकीज़',
      isCorrect: false,
      color: '#FEF3C7',
    },
    rightBasket: {
      id: 'ml_2_r',
      count: 1,
      emoji: '🍪',
      itemLabelEn: '1 Cookie',
      itemLabelHi: '1 कुकी',
      isCorrect: true,
      color: '#DCFCE7',
    },
  },
  {
    promptEn: 'Tap the bunch with MORE yellow bananas! 🍌',
    promptHi: 'ज्यादा पीले केले 🍌 वाले गुच्छे पर टैप करें!',
    speechEn: 'Which bunch has more bananas? 3 or 6?',
    speechHi: 'ज्यादा केले किसमें हैं? 3 या 6? टैप करें!',
    targetMode: 'more',
    leftBasket: {
      id: 'ml_3_l',
      count: 3,
      emoji: '🍌',
      itemLabelEn: '3 Bananas',
      itemLabelHi: '3 केले',
      isCorrect: false,
      color: '#FEF9C3',
    },
    rightBasket: {
      id: 'ml_3_r',
      count: 6,
      emoji: '🍌',
      itemLabelEn: '6 Bananas',
      itemLabelHi: '6 केले',
      isCorrect: true,
      color: '#FEF08A',
    },
  },
  {
    promptEn: 'Tap the pond with LESS fish! 🐟',
    promptHi: 'कम मछलियों 🐟 वाले तालाब पर टैप करें!',
    speechEn: 'Find the pond with less fish! 2 or 5?',
    speechHi: 'कम मछलियां किस तालाब में हैं? 2 या 5?',
    targetMode: 'less',
    leftBasket: {
      id: 'ml_4_l',
      count: 2,
      emoji: '🐟',
      itemLabelEn: '2 Fish',
      itemLabelHi: '2 मछलियां',
      isCorrect: true,
      color: '#DBEAFE',
    },
    rightBasket: {
      id: 'ml_4_r',
      count: 5,
      emoji: '🐟',
      itemLabelEn: '5 Fish',
      itemLabelHi: '5 मछलियां',
      isCorrect: false,
      color: '#E0E7FF',
    },
  },
  {
    promptEn: 'Tap the box with MORE shining stars! ⭐',
    promptHi: 'ज्यादा चमकते सितारों ⭐ वाले बॉक्स पर टैप करें!',
    speechEn: 'Tap the box that has more shining stars! 4 or 1?',
    speechHi: 'ज्यादा चमकते सितारे किसमें हैं? 4 या 1?',
    targetMode: 'more',
    leftBasket: {
      id: 'ml_5_l',
      count: 4,
      emoji: '⭐',
      itemLabelEn: '4 Stars',
      itemLabelHi: '4 सितारे',
      isCorrect: true,
      color: '#FEF08A',
    },
    rightBasket: {
      id: 'ml_5_r',
      count: 1,
      emoji: '⭐',
      itemLabelEn: '1 Star',
      itemLabelHi: '1 सितारा',
      isCorrect: false,
      color: '#F1F5F9',
    },
  },
  {
    promptEn: 'Tap the nest with LESS little eggs! 🥚',
    promptHi: 'कम अंडों 🥚 वाले घोंसले पर टैप करें!',
    speechEn: 'Which nest has less eggs? 3 or 1?',
    speechHi: 'कम अंडे किस घोंसले में हैं? 3 या 1?',
    targetMode: 'less',
    leftBasket: {
      id: 'ml_6_l',
      count: 3,
      emoji: '🥚',
      itemLabelEn: '3 Eggs',
      itemLabelHi: '3 अंडे',
      isCorrect: false,
      color: '#FDF2F8',
    },
    rightBasket: {
      id: 'ml_6_r',
      count: 1,
      emoji: '🥚',
      itemLabelEn: '1 Egg',
      itemLabelHi: '1 अंडा',
      isCorrect: true,
      color: '#DCFCE7',
    },
  },
];

// ------------------------------------------
// 3. MATHS: Frog Lilypad Hop / Color Pattern (रंग पैटर्न)
// ------------------------------------------
export interface MathColorPatternChallenge {
  promptEn: string;
  promptHi: string;
  speechEn: string;
  speechHi: string;
  patternSteps: {
    id: string;
    emoji: string;
    color: string;
    labelEn: string;
    labelHi: string;
    isMissing?: boolean;
  }[];
  options: {
    id: string;
    emoji: string;
    color: string;
    labelEn: string;
    labelHi: string;
    isCorrect: boolean;
  }[];
}

export const MATH_COLOR_PATTERN_CHALLENGES: MathColorPatternChallenge[] = [
  {
    promptEn: 'Red, Green, Red... Which lilypad comes next for Freddie? 🐸',
    promptHi: 'लाल, हरा, लाल... मेंढक के लिए अगला कमल का पत्ता कौन सा है? 🐸',
    speechEn: 'Red, Green, Red... What color comes next? Tap Green!',
    speechHi: 'लाल, हरा, लाल... आगे कौन सा रंग आएगा? हरे पर टैप करें!',
    patternSteps: [
      { id: 'p1', emoji: '🔴', color: '#EF4444', labelEn: 'Red', labelHi: 'लाल' },
      { id: 'p2', emoji: '🟢', color: '#22C55E', labelEn: 'Green', labelHi: 'हरा' },
      { id: 'p3', emoji: '🔴', color: '#EF4444', labelEn: 'Red', labelHi: 'लाल' },
      { id: 'p4', emoji: '❓', color: '#CBD5E1', labelEn: 'Next?', labelHi: 'अगला?', isMissing: true },
    ],
    options: [
      { id: 'cpo_1', emoji: '🟢', color: '#DCFCE7', labelEn: 'Green', labelHi: 'हरा', isCorrect: true },
      { id: 'cpo_2', emoji: '🔵', color: '#DBEAFE', labelEn: 'Blue', labelHi: 'नीला', isCorrect: false },
      { id: 'cpo_3', emoji: '🟡', color: '#FEF08A', labelEn: 'Yellow', labelHi: 'पीला', isCorrect: false },
    ],
  },
  {
    promptEn: 'Yellow, Blue, Yellow... What color lilypad is next? 🐸',
    promptHi: 'पीला, नीला, पीला... आगे कौन सा रंग आएगा? 🐸',
    speechEn: 'Yellow, Blue, Yellow... Tap Blue!',
    speechHi: 'पीला, नीला, पीला... नीले पर टैप करें!',
    patternSteps: [
      { id: 'p5', emoji: '🟡', color: '#EAB308', labelEn: 'Yellow', labelHi: 'पीला' },
      { id: 'p6', emoji: '🔵', color: '#3B82F6', labelEn: 'Blue', labelHi: 'नीला' },
      { id: 'p7', emoji: '🟡', color: '#EAB308', labelEn: 'Yellow', labelHi: 'पीला' },
      { id: 'p8', emoji: '❓', color: '#CBD5E1', labelEn: 'Next?', labelHi: 'अगला?', isMissing: true },
    ],
    options: [
      { id: 'cpo_4', emoji: '🔵', color: '#DBEAFE', labelEn: 'Blue', labelHi: 'नीला', isCorrect: true },
      { id: 'cpo_5', emoji: '🔴', color: '#FEE2E2', labelEn: 'Red', labelHi: 'लाल', isCorrect: false },
      { id: 'cpo_6', emoji: '🟣', color: '#EDE9FE', labelEn: 'Purple', labelHi: 'बैंगनी', isCorrect: false },
    ],
  },
  {
    promptEn: 'Star, Circle, Star... What shape is next? ⭐',
    promptHi: 'तारा, गोला, तारा... आगे कौन सा आकार आएगा? ⭐',
    speechEn: 'Star, Circle, Star... Tap Circle!',
    speechHi: 'तारा, गोला, तारा... गोले पर टैप करें!',
    patternSteps: [
      { id: 'p9', emoji: '⭐', color: '#F59E0B', labelEn: 'Star', labelHi: 'तारा' },
      { id: 'p10', emoji: '🔵', color: '#3B82F6', labelEn: 'Circle', labelHi: 'गोला' },
      { id: 'p11', emoji: '⭐', color: '#F59E0B', labelEn: 'Star', labelHi: 'तारा' },
      { id: 'p12', emoji: '❓', color: '#CBD5E1', labelEn: 'Next?', labelHi: 'अगला?', isMissing: true },
    ],
    options: [
      { id: 'cpo_7', emoji: '🔵', color: '#DBEAFE', labelEn: 'Circle', labelHi: 'गोला', isCorrect: true },
      { id: 'cpo_8', emoji: '🔺', color: '#FEE2E2', labelEn: 'Triangle', labelHi: 'तिकोना', isCorrect: false },
      { id: 'cpo_9', emoji: '🟩', color: '#DCFCE7', labelEn: 'Square', labelHi: 'चौकोर', isCorrect: false },
    ],
  },
  {
    promptEn: 'Big, Small, Big... What comes next in size? 🐘',
    promptHi: 'बड़ा, छोटा, बड़ा... आगे कौन सा आकार आएगा? 🐘',
    speechEn: 'Big, Small, Big... What is next? Tap Small!',
    speechHi: 'बड़ा, छोटा, बड़ा... आगे क्या आएगा? छोटे पर टैप करें!',
    patternSteps: [
      { id: 'p13', emoji: '🐘', color: '#94A3B8', labelEn: 'Big', labelHi: 'बड़ा' },
      { id: 'p14', emoji: '🐭', color: '#FCD34D', labelEn: 'Small', labelHi: 'छोटा' },
      { id: 'p15', emoji: '🐘', color: '#94A3B8', labelEn: 'Big', labelHi: 'बड़ा' },
      { id: 'p16', emoji: '❓', color: '#CBD5E1', labelEn: 'Next?', labelHi: 'अगला?', isMissing: true },
    ],
    options: [
      { id: 'cpo_10', emoji: '🐭', color: '#FEF3C7', labelEn: 'Small', labelHi: 'छोटा', isCorrect: true },
      { id: 'cpo_11', emoji: '🐘', color: '#E2E8F0', labelEn: 'Big', labelHi: 'बड़ा', isCorrect: false },
      { id: 'cpo_12', emoji: '🦒', color: '#FFEDD5', labelEn: 'Tall', labelHi: 'लंबा', isCorrect: false },
    ],
  },
  {
    promptEn: 'Sun, Cloud, Sun... Complete the sky pattern! ☀️',
    promptHi: 'सूरज, बादल, सूरज... आसमान का पैटर्न पूरा करें! ☀️',
    speechEn: 'Sun, Cloud, Sun... Tap Cloud!',
    speechHi: 'सूरज, बादल, सूरज... बादल पर टैप करें!',
    patternSteps: [
      { id: 'p17', emoji: '☀️', color: '#F59E0B', labelEn: 'Sun', labelHi: 'सूरज' },
      { id: 'p18', emoji: '☁️', color: '#94A3B8', labelEn: 'Cloud', labelHi: 'बादल' },
      { id: 'p19', emoji: '☀️', color: '#F59E0B', labelEn: 'Sun', labelHi: 'सूरज' },
      { id: 'p20', emoji: '❓', color: '#CBD5E1', labelEn: 'Next?', labelHi: 'अगला?', isMissing: true },
    ],
    options: [
      { id: 'cpo_13', emoji: '☁️', color: '#E2E8F0', labelEn: 'Cloud', labelHi: 'बादल', isCorrect: true },
      { id: 'cpo_14', emoji: '🌧️', color: '#DBEAFE', labelEn: 'Rain', labelHi: 'बारिश', isCorrect: false },
      { id: 'cpo_15', emoji: '🌙', color: '#EDE9FE', labelEn: 'Moon', labelHi: 'चांद', isCorrect: false },
    ],
  },
  {
    promptEn: 'Heart, Flower, Heart... What blooms next? 🌸',
    promptHi: 'दिल, फूल, दिल... आगे क्या खिलेगा? 🌸',
    speechEn: 'Heart, Flower, Heart... Tap Flower!',
    speechHi: 'दिल, फूल, दिल... सुंदर फूल पर टैप करें!',
    patternSteps: [
      { id: 'p21', emoji: '❤️', color: '#EF4444', labelEn: 'Heart', labelHi: 'दिल' },
      { id: 'p22', emoji: '🌸', color: '#EC4899', labelEn: 'Flower', labelHi: 'फूल' },
      { id: 'p23', emoji: '❤️', color: '#EF4444', labelEn: 'Heart', labelHi: 'दिल' },
      { id: 'p24', emoji: '❓', color: '#CBD5E1', labelEn: 'Next?', labelHi: 'अगला?', isMissing: true },
    ],
    options: [
      { id: 'cpo_16', emoji: '🌸', color: '#FCE7F3', labelEn: 'Flower', labelHi: 'फूल', isCorrect: true },
      { id: 'cpo_17', emoji: '⭐', color: '#FEF9C3', labelEn: 'Star', labelHi: 'तारा', isCorrect: false },
      { id: 'cpo_18', emoji: '🍂', color: '#FFEDD5', labelEn: 'Leaf', labelHi: 'पत्ता', isCorrect: false },
    ],
  },
];

// ------------------------------------------
// 4. ENGLISH: Phonics Sound Express (ध्वनि पहचान)
// ------------------------------------------
export interface EnglishPhonicTrainChallenge {
  promptEn: string;
  promptHi: string;
  speechEn: string;
  speechHi: string;
  phonicsSound: string;
  options: {
    id: string;
    letter: string;
    wordEn: string;
    wordHi: string;
    emoji: string;
    isCorrect: boolean;
    color: string;
  }[];
}

export const ENGLISH_PHONIC_TRAIN_CHALLENGES: EnglishPhonicTrainChallenge[] = [
  {
    promptEn: 'Listen: "/b/ /b/" — Tap the picture that starts with /b/! ⚽',
    promptHi: 'सुनो: "/b/ /b/" — /b/ ध्वनि वाला सही चित्र चुनें! ⚽',
    speechEn: 'Listen to the sound: Buh buh! Which picture starts with buh?',
    speechHi: 'ध्वनि सुनो: ब ब! ब से शुरू होने वाला चित्र चुनें!',
    phonicsSound: '/b/ /b/ (Buh)',
    options: [
      { id: 'pht_1', letter: 'B', wordEn: 'Ball', wordHi: 'बॉल', emoji: '⚽', isCorrect: true, color: '#DBEAFE' },
      { id: 'pht_2', letter: 'A', wordEn: 'Apple', wordHi: 'एप्पल', emoji: '🍎', isCorrect: false, color: '#FEE2E2' },
      { id: 'pht_3', letter: 'C', wordEn: 'Cat', wordHi: 'कैट', emoji: '🐱', isCorrect: false, color: '#FEF3C7' },
    ],
  },
  {
    promptEn: 'Listen: "/m/ /m/" — Which animal starts with /m/? 🐒',
    promptHi: 'सुनो: "/m/ /m/" — /m/ ध्वनि वाला जानवर कौन सा है? 🐒',
    speechEn: 'Listen to the sound: Mmm mmm! M is for Monkey!',
    speechHi: 'ध्वनि सुनो: म म! म से मंकी पहचानें!',
    phonicsSound: '/m/ /m/ (Mmm)',
    options: [
      { id: 'pht_4', letter: 'D', wordEn: 'Dog', wordHi: 'डॉग', emoji: '🐶', isCorrect: false, color: '#FEF3C7' },
      { id: 'pht_5', letter: 'M', wordEn: 'Monkey', wordHi: 'मंकी', emoji: '🐒', isCorrect: true, color: '#FEF08A' },
      { id: 'pht_6', letter: 'F', wordEn: 'Fish', wordHi: 'फिश', emoji: '🐟', isCorrect: false, color: '#DBEAFE' },
    ],
  },
  {
    promptEn: 'Listen: "/s/ /s/" — Tap the bright object starting with /s/! ☀️',
    promptHi: 'सुनो: "/s/ /s/" — /s/ ध्वनि वाली चमकीली चीज़ चुनें! ☀️',
    speechEn: 'Listen: Sss sss! Which word begins with sss? Tap Sun!',
    speechHi: 'ध्वनि सुनो: स स! स से सन पहचानें!',
    phonicsSound: '/s/ /s/ (Sss)',
    options: [
      { id: 'pht_7', letter: 'S', wordEn: 'Sun', wordHi: 'सन', emoji: '☀️', isCorrect: true, color: '#FEF9C3' },
      { id: 'pht_8', letter: 'T', wordEn: 'Tree', wordHi: 'ट्री', emoji: '🌳', isCorrect: false, color: '#DCFCE7' },
      { id: 'pht_9', letter: 'P', wordEn: 'Pen', wordHi: 'पेन', emoji: '🖊️', isCorrect: false, color: '#EDE9FE' },
    ],
  },
  {
    promptEn: 'Listen: "/d/ /d/" — Tap the playful pet starting with /d/! 🐶',
    promptHi: 'सुनो: "/d/ /d/" — /d/ ध्वनि वाला प्यारा पालतू जानवर चुनें! 🐶',
    speechEn: 'Listen: Duh duh! D is for Dog!',
    speechHi: 'ध्वनि सुनो: ड ड! ड से डॉग चुनें!',
    phonicsSound: '/d/ /d/ (Duh)',
    options: [
      { id: 'pht_10', letter: 'C', wordEn: 'Cow', wordHi: 'काउ', emoji: '🐄', isCorrect: false, color: '#DCFCE7' },
      { id: 'pht_11', letter: 'D', wordEn: 'Dog', wordHi: 'डॉग', emoji: '🐶', isCorrect: true, color: '#DBEAFE' },
      { id: 'pht_12', letter: 'E', wordEn: 'Elephant', wordHi: 'एलिफेंट', emoji: '🐘', isCorrect: false, color: '#E2E8F0' },
    ],
  },
  {
    promptEn: 'Listen: "/k/ /k/" — Tap the cute pet starting with /k/! 🐱',
    promptHi: 'सुनो: "/k/ /k/" — /k/ ध्वनि वाली प्यारी बिल्ली चुनें! 🐱',
    speechEn: 'Listen: Kuh kuh! C is for Cat!',
    speechHi: 'ध्वनि सुनो: क क! C से कैट चुनें!',
    phonicsSound: '/k/ /k/ (Kuh)',
    options: [
      { id: 'pht_13', letter: 'C', wordEn: 'Cat', wordHi: 'कैट', emoji: '🐱', isCorrect: true, color: '#FEF3C7' },
      { id: 'pht_14', letter: 'H', wordEn: 'Hen', wordHi: 'हेन', emoji: '🐔', isCorrect: false, color: '#FFEDD5' },
      { id: 'pht_15', letter: 'P', wordEn: 'Pig', wordHi: 'पिग', emoji: '🐷', isCorrect: false, color: '#FCE7F3' },
    ],
  },
  {
    promptEn: 'Listen: "/f/ /f/" — Tap the swimmer starting with /f/! 🐟',
    promptHi: 'सुनो: "/f/ /f/" — /f/ ध्वनि वाली तैरने वाली मछली चुनें! 🐟',
    speechEn: 'Listen: Fff fff! F is for Fish!',
    speechHi: 'ध्वनि सुनो: फ फ! F से फिश चुनें!',
    phonicsSound: '/f/ /f/ (Fff)',
    options: [
      { id: 'pht_16', letter: 'F', wordEn: 'Fish', wordHi: 'फिश', emoji: '🐟', isCorrect: true, color: '#DBEAFE' },
      { id: 'pht_17', letter: 'B', wordEn: 'Bird', wordHi: 'बर्ड', emoji: '🐦', isCorrect: false, color: '#DCFCE7' },
      { id: 'pht_18', letter: 'F', wordEn: 'Lion', wordHi: 'लायन', emoji: '🦁', isCorrect: false, color: '#FEF3C7' },
    ],
  },
];

// ------------------------------------------
// 5. ENGLISH: Junior CVC Word Builder (3-अक्षर शब्द)
// ------------------------------------------
export interface EnglishCvcPopChallenge {
  promptEn: string;
  promptHi: string;
  speechEn: string;
  speechHi: string;
  wordPattern: string;
  fullWord: string;
  emoji: string;
  missingVowel: string;
  options: {
    id: string;
    letter: string;
    isCorrect: boolean;
    color: string;
  }[];
}

export const ENGLISH_CVC_POP_CHALLENGES: EnglishCvcPopChallenge[] = [
  {
    promptEn: 'Complete the word: C _ T 🐱 (Cat)',
    promptHi: 'शब्द पूरा करें: C _ T 🐱 (कैट)',
    speechEn: 'Which letter completes the word Cat? Tap A!',
    speechHi: 'कैट शब्द पूरा करने के लिए A पर टैप करें!',
    wordPattern: 'C _ T',
    fullWord: 'CAT',
    emoji: '🐱',
    missingVowel: 'A',
    options: [
      { id: 'cvc_1', letter: 'A', isCorrect: true, color: '#DCFCE7' },
      { id: 'cvc_2', letter: 'O', isCorrect: false, color: '#FEF3C7' },
      { id: 'cvc_3', letter: 'I', isCorrect: false, color: '#DBEAFE' },
    ],
  },
  {
    promptEn: 'Complete the word: S _ N ☀️ (Sun)',
    promptHi: 'शब्द पूरा करें: S _ N ☀️ (सन)',
    speechEn: 'Which letter completes the word Sun? Tap U!',
    speechHi: 'सन शब्द पूरा करने के लिए U पर टैप करें!',
    wordPattern: 'S _ N',
    fullWord: 'SUN',
    emoji: '☀️',
    missingVowel: 'U',
    options: [
      { id: 'cvc_4', letter: 'E', isCorrect: false, color: '#EDE9FE' },
      { id: 'cvc_5', letter: 'U', isCorrect: true, color: '#FEF9C3' },
      { id: 'cvc_6', letter: 'A', isCorrect: false, color: '#FEE2E2' },
    ],
  },
  {
    promptEn: 'Complete the word: D _ G 🐶 (Dog)',
    promptHi: 'शब्द पूरा करें: D _ G 🐶 (डॉग)',
    speechEn: 'Which letter completes the word Dog? Tap O!',
    speechHi: 'डॉग शब्द पूरा करने के लिए O पर टैप करें!',
    wordPattern: 'D _ G',
    fullWord: 'DOG',
    emoji: '🐶',
    missingVowel: 'O',
    options: [
      { id: 'cvc_7', letter: 'O', isCorrect: true, color: '#DBEAFE' },
      { id: 'cvc_8', letter: 'I', isCorrect: false, color: '#F1F5F9' },
      { id: 'cvc_9', letter: 'U', isCorrect: false, color: '#FEF3C7' },
    ],
  },
  {
    promptEn: 'Complete the word: P _ N 🖊️ (Pen)',
    promptHi: 'शब्द पूरा करें: P _ N 🖊️ (पेन)',
    speechEn: 'Which letter completes the word Pen? Tap E!',
    speechHi: 'पेन शब्द पूरा करने के लिए E पर टैप करें!',
    wordPattern: 'P _ N',
    fullWord: 'PEN',
    emoji: '🖊️',
    missingVowel: 'E',
    options: [
      { id: 'cvc_10', letter: 'A', isCorrect: false, color: '#FCE7F3' },
      { id: 'cvc_11', letter: 'E', isCorrect: true, color: '#EDE9FE' },
      { id: 'cvc_12', letter: 'O', isCorrect: false, color: '#DCFCE7' },
    ],
  },
  {
    promptEn: 'Complete the word: B _ G 🐞 (Bug)',
    promptHi: 'शब्द पूरा करें: B _ G 🐞 (बग)',
    speechEn: 'Which letter completes the word Bug? Tap U!',
    speechHi: 'बग शब्द पूरा करने के लिए U पर टैप करें!',
    wordPattern: 'B _ G',
    fullWord: 'BUG',
    emoji: '🐞',
    missingVowel: 'U',
    options: [
      { id: 'cvc_13', letter: 'U', isCorrect: true, color: '#DCFCE7' },
      { id: 'cvc_14', letter: 'E', isCorrect: false, color: '#DBEAFE' },
      { id: 'cvc_15', letter: 'I', isCorrect: false, color: '#FEF3C7' },
    ],
  },
  {
    promptEn: 'Complete the word: F _ X 🦊 (Fox)',
    promptHi: 'शब्द पूरा करें: F _ X 🦊 (फॉक्स)',
    speechEn: 'Which letter completes the word Fox? Tap O!',
    speechHi: 'फॉक्स शब्द पूरा करने के लिए O पर टैप करें!',
    wordPattern: 'F _ X',
    fullWord: 'FOX',
    emoji: '🦊',
    missingVowel: 'O',
    options: [
      { id: 'cvc_16', letter: 'A', isCorrect: false, color: '#FEE2E2' },
      { id: 'cvc_17', letter: 'O', isCorrect: true, color: '#FFEDD5' },
      { id: 'cvc_18', letter: 'U', isCorrect: false, color: '#EDE9FE' },
    ],
  },
];

// ------------------------------------------
// 6. ENGLISH: Action Dash & Verb Quest (एक्शन शब्द)
// ------------------------------------------
export interface EnglishActionDashChallenge {
  promptEn: string;
  promptHi: string;
  speechEn: string;
  speechHi: string;
  targetVerbEn: string;
  options: {
    id: string;
    verbEn: string;
    verbHi: string;
    emoji: string;
    isCorrect: boolean;
    color: string;
  }[];
}

export const ENGLISH_ACTION_DASH_CHALLENGES: EnglishActionDashChallenge[] = [
  {
    promptEn: 'Who is JUMPING high in the air? 🦘',
    promptHi: 'हवा में ऊंची छलांग (JUMPING 🦘) कौन लगा रहा है?',
    speechEn: 'Show me who is jumping!',
    speechHi: 'जंपिंग यानी कूदना! कूदने वाला चित्र चुनें!',
    targetVerbEn: 'Jumping',
    options: [
      { id: 'ead_1', verbEn: 'Jumping', verbHi: 'कूदना', emoji: '🦘', isCorrect: true, color: '#FEF3C7' },
      { id: 'ead_2', verbEn: 'Sleeping', verbHi: 'सोना', emoji: '😴', isCorrect: false, color: '#E0E7FF' },
      { id: 'ead_3', verbEn: 'Eating', verbHi: 'खाना', emoji: '🍎', isCorrect: false, color: '#DCFCE7' },
    ],
  },
  {
    promptEn: 'Who is peacefully SLEEPING? 😴',
    promptHi: 'आराम से सो (SLEEPING 😴) कौन रहा है?',
    speechEn: 'Find who is sleeping softly in bed!',
    speechHi: 'स्लीपिंग यानी सोना! सोने वाले चित्र पर टैप करें!',
    targetVerbEn: 'Sleeping',
    options: [
      { id: 'ead_4', verbEn: 'Running', verbHi: 'दौड़ना', emoji: '🏃', isCorrect: false, color: '#FEE2E2' },
      { id: 'ead_5', verbEn: 'Sleeping', verbHi: 'सोना', emoji: '😴', isCorrect: true, color: '#EDE9FE' },
      { id: 'ead_6', verbEn: 'Dancing', verbHi: 'नाचना', emoji: '💃', isCorrect: false, color: '#FCE7F3' },
    ],
  },
  {
    promptEn: 'Who is CLAPPING hands with joy? 👏',
    promptHi: 'खुशी से ताली (CLAPPING 👏) कौन बजा रहा है?',
    speechEn: 'Clap clap! Who is clapping happy hands?',
    speechHi: 'क्लैपिंग यानी ताली बजाना! ताली बजाने वाले पर टैप करें!',
    targetVerbEn: 'Clapping',
    options: [
      { id: 'ead_7', verbEn: 'Clapping', verbHi: 'ताली बजाना', emoji: '👏', isCorrect: true, color: '#FEF9C3' },
      { id: 'ead_8', verbEn: 'Swimming', verbHi: 'तैरना', emoji: '🏊', isCorrect: false, color: '#DBEAFE' },
      { id: 'ead_9', verbEn: 'Drinking', verbHi: 'पीना', emoji: '🥛', isCorrect: false, color: '#DCFCE7' },
    ],
  },
  {
    promptEn: 'Who is FLYING in the blue sky? 🕊️',
    promptHi: 'नीले आसमान में उड़ (FLYING 🕊️) कौन रहा है?',
    speechEn: 'Flap flap wings! Who is flying in the sky?',
    speechHi: 'फ्लाईंग यानी उड़ना! उड़ने वाले पक्षी पर टैप करें!',
    targetVerbEn: 'Flying',
    options: [
      { id: 'ead_10', verbEn: 'Sitting', verbHi: 'बैठना', emoji: '🪑', isCorrect: false, color: '#E2E8F0' },
      { id: 'ead_11', verbEn: 'Flying', verbHi: 'उड़ना', emoji: '🕊️', isCorrect: true, color: '#DBEAFE' },
      { id: 'ead_12', verbEn: 'Writing', verbHi: 'लिखना', emoji: '✍️', isCorrect: false, color: '#FEF3C7' },
    ],
  },
  {
    promptEn: 'Who is SWIMMING in the cool water? 🏊',
    promptHi: 'ठंडे पानी में तैर (SWIMMING 🏊) कौन रहा है?',
    speechEn: 'Splish splash! Who is swimming in water?',
    speechHi: 'स्विमिंग यानी तैरना! तैरने वाले चित्र पर टैप करें!',
    targetVerbEn: 'Swimming',
    options: [
      { id: 'ead_13', verbEn: 'Swimming', verbHi: 'तैरना', emoji: '🏊', isCorrect: true, color: '#DBEAFE' },
      { id: 'ead_14', verbEn: 'Walking', verbHi: 'चलना', emoji: '🚶', isCorrect: false, color: '#FEF08A' },
      { id: 'ead_15', verbEn: 'Reading', verbHi: 'पढ़ना', emoji: '📖', isCorrect: false, color: '#DCFCE7' },
    ],
  },
  {
    promptEn: 'Who is RUNNING super fast? 🏃',
    promptHi: 'बहुत तेज दौड़ (RUNNING 🏃) कौन रहा है?',
    speechEn: 'Zoom zoom! Who is running like a champion?',
    speechHi: 'रनिंग यानी दौड़ना! दौड़ने वाले पर टैप करें!',
    targetVerbEn: 'Running',
    options: [
      { id: 'ead_16', verbEn: 'Sleeping', verbHi: 'सोना', emoji: '😴', isCorrect: false, color: '#EDE9FE' },
      { id: 'ead_17', verbEn: 'Running', verbHi: 'दौड़ना', emoji: '🏃', isCorrect: true, color: '#DCFCE7' },
      { id: 'ead_18', verbEn: 'Singing', verbHi: 'गाना', emoji: '🎤', isCorrect: false, color: '#FCE7F3' },
    ],
  },
];

// ------------------------------------------
// 7. HINDI: Varnamala Rail (वर्णमाला रेलगाड़ी)
// ------------------------------------------
export interface HindiVarnamalaTrainChallenge {
  promptEn: string;
  promptHi: string;
  speechEn: string;
  speechHi: string;
  targetLetter: string;
  trainWagons: {
    id: string;
    letter: string;
    isMissing: boolean;
  }[];
  options: {
    id: string;
    letter: string;
    wordHi: string;
    emoji: string;
    isCorrect: boolean;
    color: string;
  }[];
}

export const HINDI_VARNAMALA_TRAIN_CHALLENGES: HindiVarnamalaTrainChallenge[] = [
  {
    promptEn: 'Which Swar comes next in the Hindi train? 🚂',
    promptHi: 'वर्णमाला रेलगाड़ी 🚂 में अगला स्वर कौन सा आएगा?',
    speechEn: 'A, Aa... what comes next? Then Ee!',
    speechHi: 'छुक छुक! अ से अनार, आ से आम... फिर क्या आएगा?',
    targetLetter: 'इ',
    trainWagons: [
      { id: 'hw1', letter: 'अ', isMissing: false },
      { id: 'hw2', letter: 'आ', isMissing: false },
      { id: 'hw3', letter: '?', isMissing: true },
      { id: 'hw4', letter: 'ई', isMissing: false },
    ],
    options: [
      { id: 'hvo_1', letter: 'इ', wordHi: 'इमली', emoji: '🫒', isCorrect: true, color: '#DCFCE7' },
      { id: 'hvo_2', letter: 'उ', wordHi: 'उल्लू', emoji: '🦉', isCorrect: false, color: '#FEF3C7' },
      { id: 'hvo_3', letter: 'ओ', wordHi: 'ओखली', emoji: '🥣', isCorrect: false, color: '#FEE2E2' },
    ],
  },
  {
    promptEn: 'Fill the missing vowel in the train: इ, ई, ?, ऊ! 🚂',
    promptHi: 'रेलगाड़ी का गायब स्वर भरें: इ, ई, ?, ऊ! 🚂',
    speechEn: 'Look closely: I, Ee, what comes next? Then Ooh!',
    speechHi: 'इ से इमली, ई से ईख... उसके बाद क्या आता है? उ से उल्लू!',
    targetLetter: 'उ',
    trainWagons: [
      { id: 'hw5', letter: 'इ', isMissing: false },
      { id: 'hw6', letter: 'ई', isMissing: false },
      { id: 'hw7', letter: '?', isMissing: true },
      { id: 'hw8', letter: 'ऊ', isMissing: false },
    ],
    options: [
      { id: 'hvo_4', letter: 'ए', wordHi: 'एड़ी', emoji: '🦶', isCorrect: false, color: '#DBEAFE' },
      { id: 'hvo_5', letter: 'उ', wordHi: 'उल्लू', emoji: '🦉', isCorrect: true, color: '#FEF08A' },
      { id: 'hvo_6', letter: 'ऋ', wordHi: 'ऋषि', emoji: '🧘', isCorrect: false, color: '#EDE9FE' },
    ],
  },
  {
    promptEn: 'Which Vyanjan comes between Ka and Ga? 🚂',
    promptHi: 'व्यंजन क और ग के बीच कौन सा अक्षर आएगा? 🚂',
    speechEn: 'Ka, what comes next? Then Ga for Gamla!',
    speechHi: 'क से कबूतर, फिर क्या आता है? ग से पहले खरगोश वाला ख!',
    targetLetter: 'ख',
    trainWagons: [
      { id: 'hw9', letter: 'क', isMissing: false },
      { id: 'hw10', letter: '?', isMissing: true },
      { id: 'hw11', letter: 'ग', isMissing: false },
      { id: 'hw12', letter: 'घ', isMissing: false },
    ],
    options: [
      { id: 'hvo_7', letter: 'ख', wordHi: 'खरगोश', emoji: '🐰', isCorrect: true, color: '#DCFCE7' },
      { id: 'hvo_8', letter: 'च', wordHi: 'चम्मच', emoji: '🥄', isCorrect: false, color: '#FEE2E2' },
      { id: 'hvo_9', letter: 'ज', wordHi: 'जग', emoji: '🫖', isCorrect: false, color: '#FEF3C7' },
    ],
  },
  {
    promptEn: 'What comes after Cha and Chha in the train? 🚂',
    promptHi: 'च और छ के बाद कौन सा डिब्बा आएगा? 🚂',
    speechEn: 'Cha, Chha, what is next? Then Jha for Jhanda!',
    speechHi: 'च से चम्मच, छ से छाता, उसके बाद आता है ज से जग!',
    targetLetter: 'ज',
    trainWagons: [
      { id: 'hw13', letter: 'च', isMissing: false },
      { id: 'hw14', letter: 'छ', isMissing: false },
      { id: 'hw15', letter: '?', isMissing: true },
      { id: 'hw16', letter: 'झ', isMissing: false },
    ],
    options: [
      { id: 'hvo_10', letter: 'ट', wordHi: 'टमाटर', emoji: '🍅', isCorrect: false, color: '#FEE2E2' },
      { id: 'hvo_11', letter: 'ज', wordHi: 'जग', emoji: '🫖', isCorrect: true, color: '#DBEAFE' },
      { id: 'hvo_12', letter: 'त', wordHi: 'तितली', emoji: '🦋', isCorrect: false, color: '#FEF9C3' },
    ],
  },
  {
    promptEn: 'What comes after Ta for Tamatar? 🚂',
    promptHi: 'ट से टमाटर के बाद कौन सा व्यंजन आता है? 🚂',
    speechEn: 'Ta for Tomato, then what? Then Da for Damru!',
    speechHi: 'ट से टमाटर के बाद आता है ठ से ठठेरा!',
    targetLetter: 'ठ',
    trainWagons: [
      { id: 'hw17', letter: 'ट', isMissing: false },
      { id: 'hw18', letter: '?', isMissing: true },
      { id: 'hw19', letter: 'ड', isMissing: false },
      { id: 'hw20', letter: 'ढ', isMissing: false },
    ],
    options: [
      { id: 'hvo_13', letter: 'ठ', wordHi: 'ठप्पा/ठठेरा', emoji: '🔨', isCorrect: true, color: '#FEF08A' },
      { id: 'hvo_14', letter: 'प', wordHi: 'पतंग', emoji: '🪁', isCorrect: false, color: '#EDE9FE' },
      { id: 'hvo_15', letter: 'न', wordHi: 'नल', emoji: '🚰', isCorrect: false, color: '#DCFCE7' },
    ],
  },
  {
    promptEn: 'What comes after Pa and Pha? 🚂',
    promptHi: 'प और फ के बाद कौन सा प्यारा व्यंजन आता है? 🚂',
    speechEn: 'Pa for Patang, Pha for Phal, what is next?',
    speechHi: 'प से पतंग, फ से फल, फिर आता है ब से बतख!',
    targetLetter: 'ब',
    trainWagons: [
      { id: 'hw21', letter: 'प', isMissing: false },
      { id: 'hw22', letter: 'फ', isMissing: false },
      { id: 'hw23', letter: '?', isMissing: true },
      { id: 'hw24', letter: 'भ', isMissing: false },
    ],
    options: [
      { id: 'hvo_16', letter: 'ब', wordHi: 'बतख', emoji: '🦆', isCorrect: true, color: '#DBEAFE' },
      { id: 'hvo_17', letter: 'म', wordHi: 'मछली', emoji: '🐟', isCorrect: false, color: '#FCE7F3' },
      { id: 'hvo_18', letter: 'र', wordHi: 'रथ', emoji: '🏹', isCorrect: false, color: '#FEF3C7' },
    ],
  },
];

// ------------------------------------------
// 8. HINDI: Do Akshar Wale Shabd Milan (शब्द-चित्र मिलान)
// ------------------------------------------
export interface HindiShabdMilanChallenge {
  promptEn: string;
  promptHi: string;
  speechEn: string;
  speechHi: string;
  targetEmoji: string;
  targetMeaningEn: string;
  options: {
    id: string;
    wordHi: string;
    wordEn: string;
    emoji: string;
    isCorrect: boolean;
    color: string;
  }[];
}

export const HINDI_SHABD_MILAN_CHALLENGES: HindiShabdMilanChallenge[] = [
  {
    promptEn: 'Match the water tap 🚰 with the correct Hindi word!',
    promptHi: 'पानी के नल 🚰 के सही हिंदी शब्द पर टैप करें!',
    speechEn: 'Find the Hindi word for Tap: Nal!',
    speechHi: 'पानी के नल के लिए सही शब्द पहचानें: न+ल = नल!',
    targetEmoji: '🚰',
    targetMeaningEn: 'Tap',
    options: [
      { id: 'hsm_1', wordHi: 'नल', wordEn: 'Tap', emoji: '🚰', isCorrect: true, color: '#DBEAFE' },
      { id: 'hsm_2', wordHi: 'फल', wordEn: 'Fruit', emoji: '🍎', isCorrect: false, color: '#FEE2E2' },
      { id: 'hsm_3', wordHi: 'घर', wordEn: 'House', emoji: '🏠', isCorrect: false, color: '#FEF3C7' },
    ],
  },
  {
    promptEn: 'Match delicious fruits 🍎 with the correct Hindi word!',
    promptHi: 'मीठे फलों 🍎 के सही हिंदी शब्द पर टैप करें!',
    speechEn: 'Find the Hindi word for Fruit: Phal!',
    speechHi: 'स्वादिष्ट मीठे फलों के लिए सही शब्द चुनें: फ+ल = फल!',
    targetEmoji: '🍎',
    targetMeaningEn: 'Fruit',
    options: [
      { id: 'hsm_4', wordHi: 'बस', wordEn: 'Bus', emoji: '🚌', isCorrect: false, color: '#FEF08A' },
      { id: 'hsm_5', wordHi: 'फल', wordEn: 'Fruit', emoji: '🍎', isCorrect: true, color: '#DCFCE7' },
      { id: 'hsm_6', wordHi: 'जग', wordEn: 'Jug', emoji: '🫖', isCorrect: false, color: '#EDE9FE' },
    ],
  },
  {
    promptEn: 'Match sweet home 🏠 with the correct Hindi word!',
    promptHi: 'प्यारे घर 🏠 के सही हिंदी शब्द पर टैप करें!',
    speechEn: 'Find the Hindi word for Home: Ghar!',
    speechHi: 'प्यारा घर! घ+र = घर शब्द पहचानें!',
    targetEmoji: '🏠',
    targetMeaningEn: 'Home',
    options: [
      { id: 'hsm_7', wordHi: 'घर', wordEn: 'House', emoji: '🏠', isCorrect: true, color: '#FEF3C7' },
      { id: 'hsm_8', wordHi: 'नल', wordEn: 'Tap', emoji: '🚰', isCorrect: false, color: '#DBEAFE' },
      { id: 'hsm_9', wordHi: 'दस', wordEn: 'Ten', emoji: '🔟', isCorrect: false, color: '#FDF2F8' },
    ],
  },
  {
    promptEn: 'Match yellow school bus 🚌 with the correct Hindi word!',
    promptHi: 'स्कूल बस 🚌 के सही हिंदी शब्द पर टैप करें!',
    speechEn: 'Find the Hindi word for Bus: Bas!',
    speechHi: 'सवारी वाली बस! ब+स = बस पर टैप करें!',
    targetEmoji: '🚌',
    targetMeaningEn: 'Bus',
    options: [
      { id: 'hsm_10', wordHi: 'रथ', wordEn: 'Chariot', emoji: '🏹', isCorrect: false, color: '#E2E8F0' },
      { id: 'hsm_11', wordHi: 'बस', wordEn: 'Bus', emoji: '🚌', isCorrect: true, color: '#FEF9C3' },
      { id: 'hsm_12', wordHi: 'जल', wordEn: 'Water', emoji: '💧', isCorrect: false, color: '#DBEAFE' },
    ],
  },
  {
    promptEn: 'Match water jug 🫖 with the correct Hindi word!',
    promptHi: 'पानी के जग 🫖 के सही हिंदी शब्द पर टैप करें!',
    speechEn: 'Find the Hindi word for Jug: Jag!',
    speechHi: 'पानी का जग! ज+ग = जग पर टैप करें!',
    targetEmoji: '🫖',
    targetMeaningEn: 'Jug',
    options: [
      { id: 'hsm_13', wordHi: 'जग', wordEn: 'Jug', emoji: '🫖', isCorrect: true, color: '#DCFCE7' },
      { id: 'hsm_14', wordHi: 'हल', wordEn: 'Plow', emoji: '🌱', isCorrect: false, color: '#FEF3C7' },
      { id: 'hsm_15', wordHi: 'खत', wordEn: 'Letter', emoji: '✉️', isCorrect: false, color: '#EDE9FE' },
    ],
  },
  {
    promptEn: 'Match number ten 🔟 with the correct Hindi word!',
    promptHi: 'नंबर दस 🔟 के सही हिंदी शब्द पर टैप करें!',
    speechEn: 'Find the Hindi word for Ten: Das!',
    speechHi: 'गिनती का दस! द+स = दस पहचानें!',
    targetEmoji: '🔟',
    targetMeaningEn: 'Ten',
    options: [
      { id: 'hsm_16', wordHi: 'वन', wordEn: 'Forest', emoji: '🌲', isCorrect: false, color: '#DCFCE7' },
      { id: 'hsm_17', wordHi: 'दस', wordEn: 'Ten', emoji: '🔟', isCorrect: true, color: '#DBEAFE' },
      { id: 'hsm_18', wordHi: 'कप', wordEn: 'Cup', emoji: '☕', isCorrect: false, color: '#FEE2E2' },
    ],
  },
];

// ------------------------------------------
// 9. HINDI: Rang aur Ginti Rusher (रंग और गिनती)
// ------------------------------------------
export interface HindiRangGintiChallenge {
  promptEn: string;
  promptHi: string;
  speechEn: string;
  speechHi: string;
  targetCount: number;
  targetColorHi: string;
  targetColorEn: string;
  options: {
    id: string;
    labelHi: string;
    labelEn: string;
    emojiCluster: string;
    count: number;
    isCorrect: boolean;
    color: string;
  }[];
}

export const HINDI_RANG_GINTI_CHALLENGES: HindiRangGintiChallenge[] = [
  {
    promptEn: 'Tap "३ लाल सेब" (3 Red Apples 🍎🍎🍎)!',
    promptHi: '"३ लाल सेब" 🍎🍎🍎 पर टैप करें!',
    speechEn: 'Count and find three red apples!',
    speechHi: 'गिनिए और पहचानिए: तीन लाल सेब कहां हैं?',
    targetCount: 3,
    targetColorHi: 'लाल',
    targetColorEn: 'Red',
    options: [
      { id: 'hrg_1', labelHi: '३ लाल सेब', labelEn: '3 Red Apples', emojiCluster: '🍎 🍎 🍎', count: 3, isCorrect: true, color: '#FEE2E2' },
      { id: 'hrg_2', labelHi: '१ पीला केला', labelEn: '1 Yellow Banana', emojiCluster: '🍌', count: 1, isCorrect: false, color: '#FEF9C3' },
      { id: 'hrg_3', labelHi: '२ हरी पत्तियां', labelEn: '2 Green Leaves', emojiCluster: '🍃 🍃', count: 2, isCorrect: false, color: '#DCFCE7' },
    ],
  },
  {
    promptEn: 'Tap "२ पीले सूरजमुखी" (2 Yellow Flowers 🌻🌻)!',
    promptHi: '"२ पीले सूरजमुखी" 🌻🌻 पर टैप करें!',
    speechEn: 'Count and tap two yellow sunflowers!',
    speechHi: 'दो पीले सूरजमुखी फूल गिनकर टैप करें!',
    targetCount: 2,
    targetColorHi: 'पीला',
    targetColorEn: 'Yellow',
    options: [
      { id: 'hrg_4', labelHi: '४ लाल टमाटर', labelEn: '4 Red Tomatoes', emojiCluster: '🍅 🍅 🍅 🍅', count: 4, isCorrect: false, color: '#FEE2E2' },
      { id: 'hrg_5', labelHi: '२ पीले फूल', labelEn: '2 Yellow Flowers', emojiCluster: '🌻 🌻', count: 2, isCorrect: true, color: '#FEF08A' },
      { id: 'hrg_6', labelHi: '१ नीली तितली', labelEn: '1 Blue Butterfly', emojiCluster: '🦋', count: 1, isCorrect: false, color: '#DBEAFE' },
    ],
  },
  {
    promptEn: 'Tap "४ हरी पत्तियां" (4 Green Leaves 🍃🍃🍃🍃)!',
    promptHi: '"४ हरी पत्तियां" 🍃🍃🍃🍃 पर टैप करें!',
    speechEn: 'Find four green leaves!',
    speechHi: 'चार हरी पत्तियां गिनकर पहचानें!',
    targetCount: 4,
    targetColorHi: 'हरा',
    targetColorEn: 'Green',
    options: [
      { id: 'hrg_7', labelHi: '४ हरी पत्तियां', labelEn: '4 Green Leaves', emojiCluster: '🍃 🍃 🍃 🍃', count: 4, isCorrect: true, color: '#DCFCE7' },
      { id: 'hrg_8', labelHi: '२ लाल सेब', labelEn: '2 Red Apples', emojiCluster: '🍎 🍎', count: 2, isCorrect: false, color: '#FEE2E2' },
      { id: 'hrg_9', labelHi: '३ नीले बादल', labelEn: '3 Blue Clouds', emojiCluster: '☁️ ☁️ ☁️', count: 3, isCorrect: false, color: '#DBEAFE' },
    ],
  },
  {
    promptEn: 'Tap "५ चमकते नीले तारे" (5 Blue Stars ⭐⭐⭐⭐⭐)!',
    promptHi: '"५ चमकते नीले तारे" ⭐⭐⭐⭐⭐ पर टैप करें!',
    speechEn: 'Count all five blue shining stars!',
    speechHi: 'पांच चमकते नीले तारे गिनें और टैप करें!',
    targetCount: 5,
    targetColorHi: 'नीला',
    targetColorEn: 'Blue',
    options: [
      { id: 'hrg_10', labelHi: '१ लाल गुब्बारा', labelEn: '1 Red Balloon', emojiCluster: '🎈', count: 1, isCorrect: false, color: '#FEE2E2' },
      { id: 'hrg_11', labelHi: '५ नीले तारे', labelEn: '5 Blue Stars', emojiCluster: '⭐ ⭐ ⭐ ⭐ ⭐', count: 5, isCorrect: true, color: '#DBEAFE' },
      { id: 'hrg_12', labelHi: '३ पीले आम', labelEn: '3 Yellow Mangoes', emojiCluster: '🥭 🥭 🥭', count: 3, isCorrect: false, color: '#FEF9C3' },
    ],
  },
  {
    promptEn: 'Tap "१ नारंगी संतरा" (1 Orange 🍊)!',
    promptHi: '"१ नारंगी संतरा" 🍊 पर टैप करें!',
    speechEn: 'Find just one juicy orange!',
    speechHi: 'एक रसीला नारंगी संतरा कहां है? टैप करें!',
    targetCount: 1,
    targetColorHi: 'नारंगी',
    targetColorEn: 'Orange',
    options: [
      { id: 'hrg_13', labelHi: '१ नारंगी संतरा', labelEn: '1 Orange', emojiCluster: '🍊', count: 1, isCorrect: true, color: '#FFEDD5' },
      { id: 'hrg_14', labelHi: '३ हरी मिर्च', labelEn: '3 Green Chillies', emojiCluster: '🌶️ 🌶️ 🌶️', count: 3, isCorrect: false, color: '#DCFCE7' },
      { id: 'hrg_15', labelHi: '४ पीले केले', labelEn: '4 Yellow Bananas', emojiCluster: '🍌 🍌 🍌 🍌', count: 4, isCorrect: false, color: '#FEF08A' },
    ],
  },
  {
    promptEn: 'Tap "३ लाल टमाटर" (3 Red Tomatoes 🍅🍅🍅)!',
    promptHi: '"३ लाल टमाटर" 🍅🍅🍅 पर टैप करें!',
    speechEn: 'Count and tap three ripe red tomatoes!',
    speechHi: 'तीन लाल पके टमाटर गिनकर टैप करें!',
    targetCount: 3,
    targetColorHi: 'लाल',
    targetColorEn: 'Red',
    options: [
      { id: 'hrg_16', labelHi: '३ लाल टमाटर', labelEn: '3 Red Tomatoes', emojiCluster: '🍅 🍅 🍅', count: 3, isCorrect: true, color: '#FEE2E2' },
      { id: 'hrg_17', labelHi: '२ नीले छाते', labelEn: '2 Blue Umbrellas', emojiCluster: '☂️ ☂️', count: 2, isCorrect: false, color: '#DBEAFE' },
      { id: 'hrg_18', labelHi: '५ हरी घास', labelEn: '5 Green Plants', emojiCluster: '🌱 🌱 🌱 🌱 🌱', count: 5, isCorrect: false, color: '#DCFCE7' },
    ],
  },
];
