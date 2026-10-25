import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  ScrollView,
  Animated,
  Dimensions,
  Platform,
} from 'react-native';
import { COLORS, SPACING, BORDER_RADIUS, SHADOWS } from '../../constants/theme';
import { triggerHaptic } from '../../utils/haptics';
import { soundManager } from '../../utils/soundManager';
import { speakText, stopSpeaking } from '../../utils/speech';
import { useUserStore } from '../../store/useUserStore';
import { SpeakerButton } from '../common/SpeakerButton';
import { Grade, Subject, Question, MCQOption } from '../../types';
import { MOCK_QUESTIONS } from '../../data/mockQuestions';
import {
  ALL_CONCEPT_GAMES,
  CONCEPT_GAMES_BY_SUBJECT,
  ConceptGameItem,
} from '../../data/conceptGamesRegistry';
import {
  MATH_NUMBER_TRAIN_CHALLENGES,
  MATH_MORE_LESS_CHALLENGES,
  MATH_COLOR_PATTERN_CHALLENGES,
  ENGLISH_PHONIC_TRAIN_CHALLENGES,
  ENGLISH_CVC_POP_CHALLENGES,
  ENGLISH_ACTION_DASH_CHALLENGES,
  HINDI_VARNAMALA_TRAIN_CHALLENGES,
  HINDI_SHABD_MILAN_CHALLENGES,
  HINDI_RANG_GINTI_CHALLENGES,
} from '../../data/conceptArcadeExtraData';

interface KidsConceptArcadeModalProps {
  visible: boolean;
  onClose: () => void;
  grade?: Grade;
  initialGame?: KidsArcadeGameType | string | null;
  filterSubject?: Subject | null;
  initialChapterTitle?: string | null;
  initialGameTitle?: string | null;
}

export type KidsArcadeGameType =
  // Maths (7)
  | 'bubble_pop'
  | 'seesaw_slam'
  | 'feed_frenzy'
  | 'shape_ninja'
  | 'math_number_train'
  | 'math_more_less'
  | 'math_color_pattern'
  // English (6)
  | 'alphabet_pop'
  | 'english_rhyme_catch'
  | 'english_word_safari'
  | 'english_phonic_train'
  | 'english_cvc_pop'
  | 'english_action_dash'
  // Hindi (6)
  | 'hindi_swar_pop'
  | 'hindi_vyanjan_catch'
  | 'hindi_sound_safari'
  | 'hindi_varnamala_train'
  | 'hindi_shabd_milan'
  | 'hindi_rang_ginti'
  // All-in-one Blitz
  | 'blitz'
  // Dynamic Worksheet Arcade Mode
  | 'worksheet_arcade'
  | string;

// ==========================================
// GAME 1: BUBBLE POPPER (Size, Height, Shapes)
// ==========================================
interface BubbleChallenge {
  promptEn: string;
  promptHi: string;
  speechEn: string;
  speechHi: string;
  options: {
    id: string;
    labelEn: string;
    labelHi: string;
    emoji: string;
    sizeScale: number; // visual relative size
    isCorrect: boolean;
    color: string;
  }[];
}

const BUBBLE_CHALLENGES: BubbleChallenge[] = [
  {
    promptEn: 'Pop the BIG animal! 🐘',
    promptHi: 'बड़ा जानवर फोड़ें! 🐘',
    speechEn: 'Pop the big animal! Look for the giant elephant.',
    speechHi: 'बड़ा जानवर ढूंढें और उस पर टैप करें!',
    options: [
      { id: 'b1', labelEn: 'Big Elephant', labelHi: 'बड़ा हाथी', emoji: '🐘', sizeScale: 1.4, isCorrect: true, color: '#DBEAFE' },
      { id: 'b2', labelEn: 'Tiny Mouse', labelHi: 'छोटा चूहा', emoji: '🐭', sizeScale: 0.8, isCorrect: false, color: '#FEE2E2' },
    ],
  },
  {
    promptEn: 'Pop the TALL giraffe! 🦒',
    promptHi: 'लंबा जिराफ़ फोड़ें! 🦒',
    speechEn: 'Pop the tall giraffe reaching high up!',
    speechHi: 'ऊंचा लंबा जिराफ़ ढूंढें और फोड़ें!',
    options: [
      { id: 'b3', labelEn: 'Short Turtle', labelHi: 'छोटा कछुआ', emoji: '🐢', sizeScale: 0.85, isCorrect: false, color: '#FEF3C7' },
      { id: 'b4', labelEn: 'Tall Giraffe', labelHi: 'लंबा जिराफ़', emoji: '🦒', sizeScale: 1.45, isCorrect: true, color: '#DCFCE7' },
    ],
  },
  {
    promptEn: 'Pop the TINY bird! 🐥',
    promptHi: 'छोटा चूज़ा फोड़ें! 🐥',
    speechEn: 'Pop the tiny baby chick!',
    speechHi: 'छोटा सा नन्हा चूज़ा ढूंढें और टैप करें!',
    options: [
      { id: 'b5', labelEn: 'Huge Bear', labelHi: 'बड़ा भालू', emoji: '🐻', sizeScale: 1.4, isCorrect: false, color: '#E0E7FF' },
      { id: 'b6', labelEn: 'Tiny Chick', labelHi: 'छोटा चूज़ा', emoji: '🐥', sizeScale: 0.8, isCorrect: true, color: '#FEF08A' },
    ],
  },
  {
    promptEn: 'Pop the TALL tree! 🌲',
    promptHi: 'लंबा पेड़ फोड़ें! 🌲',
    speechEn: 'Find and pop the tall green tree!',
    speechHi: 'ऊंचा लंबा पेड़ ढूंढें और फोड़ें!',
    options: [
      { id: 'b7', labelEn: 'Tall Tree', labelHi: 'लंबा पेड़', emoji: '🌲', sizeScale: 1.4, isCorrect: true, color: '#DCFCE7' },
      { id: 'b8', labelEn: 'Small Plant', labelHi: 'छोटा पौधा', emoji: '🌱', sizeScale: 0.85, isCorrect: false, color: '#FEF3C7' },
    ],
  },
  {
    promptEn: 'Pop the RED CIRCLE! 🔴',
    promptHi: 'लाल वृत्त (गोल) फोड़ें! 🔴',
    speechEn: 'Pop the red round circle!',
    speechHi: 'लाल गोल वृत्त ढूंढें और फोड़ें!',
    options: [
      { id: 'b9', labelEn: 'Blue Square', labelHi: 'नीला चौकोर', emoji: '🟦', sizeScale: 1.0, isCorrect: false, color: '#DBEAFE' },
      { id: 'b10', labelEn: 'Red Circle', labelHi: 'लाल गोला', emoji: '🔴', sizeScale: 1.25, isCorrect: true, color: '#FEE2E2' },
      { id: 'b11', labelEn: 'Yellow Star', labelHi: 'पीला तारा', emoji: '⭐', sizeScale: 1.0, isCorrect: false, color: '#FEF3C7' },
    ],
  },
];

// ==========================================
// GAME 2: SEESAW SLAM (Heavy vs Light Physics)
// ==========================================
interface SeesawChallenge {
  promptEn: string;
  promptHi: string;
  speechEn: string;
  speechHi: string;
  target: 'heavier' | 'lighter';
  leftItem: {
    labelEn: string;
    labelHi: string;
    emoji: string;
    weightKg: number;
  };
  rightItem: {
    labelEn: string;
    labelHi: string;
    emoji: string;
    weightKg: number;
  };
  explanationEn: string;
  explanationHi: string;
}

const SEESAW_CHALLENGES: SeesawChallenge[] = [
  {
    promptEn: 'Which animal is HEAVIER? 🏋️',
    promptHi: 'कौन सा जानवर भारी है? 🏋️',
    speechEn: 'Which animal is heavier? Tap the heavy one to slam the seesaw!',
    speechHi: 'कौन सा जानवर भारी है? भारी वाले को चुनिए!',
    target: 'heavier',
    leftItem: { labelEn: 'Elephant', labelHi: 'हाथी', emoji: '🐘', weightKg: 3000 },
    rightItem: { labelEn: 'Small Bird', labelHi: 'चिड़िया', emoji: '🐦', weightKg: 0.05 },
    explanationEn: 'BOOM! 🐘 Elephant is super heavy so it goes down!',
    explanationHi: 'धड़ाम! 🐘 हाथी बहुत भारी है इसलिए नीचे झुका!',
  },
  {
    promptEn: 'Which object is LIGHTER? 🍃',
    promptHi: 'कौन सी चीज़ हल्की है? 🍃',
    speechEn: 'Which object is lighter and floats in air? Tap the light one!',
    speechHi: 'कौन सी चीज़ हल्की है? हल्की वाली चीज़ पर टैप करें!',
    target: 'lighter',
    leftItem: { labelEn: 'Heavy Brick', labelHi: 'भारी ईंट', emoji: '🧱', weightKg: 50 },
    rightItem: { labelEn: 'Leaf', labelHi: 'पत्ता', emoji: '🍃', weightKg: 0.02 },
    explanationEn: 'WHEEE! 🍃 Leaf is light as a whisper and floats up!',
    explanationHi: 'वाह! 🍃 पत्ता बहुत हल्का है इसलिए हवा में ऊपर उठा!',
  },
  {
    promptEn: 'Which is HEAVIER? 🏋️',
    promptHi: 'कौन भारी है? 🏋️',
    speechEn: 'Which vehicle is heavier? A car or a bicycle?',
    speechHi: 'कार और साइकिल में से कौन ज्यादा भारी है?',
    target: 'heavier',
    leftItem: { labelEn: 'Bicycle', labelHi: 'साइकिल', emoji: '🚲', weightKg: 12 },
    rightItem: { labelEn: 'Big Car', labelHi: 'कार', emoji: '🚗', weightKg: 1200 },
    explanationEn: 'SLAM! 🚗 Car is heavier with iron engine!',
    explanationHi: 'धड़ाम! 🚗 कार भारी है इसलिए नीचे बैठ गई!',
  },
  {
    promptEn: 'Which is LIGHTER? 🎈',
    promptHi: 'कौन हल्का है? 🎈',
    speechEn: 'Which one is lighter? The tiny balloon or the watermelon?',
    speechHi: 'गुब्बारा और तरबूज में से कौन हल्का है?',
    target: 'lighter',
    leftItem: { labelEn: 'Balloon', labelHi: 'गुब्बारा', emoji: '🎈', weightKg: 0.01 },
    rightItem: { labelEn: 'Watermelon', labelHi: 'तरबूज', emoji: '🍉', weightKg: 5 },
    explanationEn: 'UP! 🎈 Balloon is super light and flies high!',
    explanationHi: 'ऊपर! 🎈 गुब्बारा बहुत हल्का है और उड़ने को तैयार है!',
  },
  {
    promptEn: 'Which animal is HEAVIER? 🏋️',
    promptHi: 'कौन सा जानवर भारी है? 🏋️',
    speechEn: 'Which animal is heavier? Tap the heavy one!',
    speechHi: 'कौन सा जानवर ज्यादा भारी है?',
    target: 'heavier',
    leftItem: { labelEn: 'Big Bear', labelHi: 'बड़ा भालू', emoji: '🐻', weightKg: 800 },
    rightItem: { labelEn: 'Little Mouse', labelHi: 'छोटा चूहा', emoji: '🐭', weightKg: 0.1 },
    explanationEn: 'THUD! 🐻 Bear is mighty heavy!',
    explanationHi: 'धड़ाम! 🐻 भालू बहुत भारी है!',
  },
];

// ==========================================
// GAME 3: FEED FRENZY (Counting 1 to 5)
// ==========================================
interface FeedChallenge {
  animalEmoji: string;
  animalNameEn: string;
  animalNameHi: string;
  foodEmoji: string;
  foodNameEn: string;
  foodNameHi: string;
  targetCount: number;
  availableCount: number;
}

const FEED_CHALLENGES: FeedChallenge[] = [
  {
    animalEmoji: '🐰',
    animalNameEn: 'Benny Bunny',
    animalNameHi: 'बनी खरगोश',
    foodEmoji: '🥕',
    foodNameEn: 'Crunchy Carrots',
    foodNameHi: 'गाजर',
    targetCount: 3,
    availableCount: 5,
  },
  {
    animalEmoji: '🐼',
    animalNameEn: 'Pom-Pom Panda',
    animalNameHi: 'पोम-पोम पांडा',
    foodEmoji: '🍎',
    foodNameEn: 'Red Apples',
    foodNameHi: 'सेब',
    targetCount: 2,
    availableCount: 4,
  },
  {
    animalEmoji: '🐵',
    animalNameEn: 'Chintu Monkey',
    animalNameHi: 'चिंटू बंदर',
    foodEmoji: '🍌',
    foodNameEn: 'Ripe Bananas',
    foodNameHi: 'केले',
    targetCount: 4,
    availableCount: 6,
  },
  {
    animalEmoji: '🐱',
    animalNameEn: 'Kitty Cat',
    animalNameHi: 'किट्टी बिल्ली',
    foodEmoji: '🐟',
    foodNameEn: 'Tasty Fish',
    foodNameHi: 'मछली',
    targetCount: 1,
    availableCount: 3,
  },
  {
    animalEmoji: '🐻',
    animalNameEn: 'Bruno Bear',
    animalNameHi: 'ब्रूनो भालू',
    foodEmoji: '🍓',
    foodNameEn: 'Sweet Berries',
    foodNameHi: 'स्ट्रॉबेरी',
    targetCount: 5,
    availableCount: 6,
  },
];

// ==========================================
// GAME 4: SHAPE NINJA & PATTERNS
// ==========================================
interface ShapeChallenge {
  promptEn: string;
  promptHi: string;
  speechEn: string;
  speechHi: string;
  options: {
    id: string;
    labelEn: string;
    labelHi: string;
    emoji: string;
    isCorrect: boolean;
    color: string;
  }[];
  patternSequence?: string[];
}

const SHAPE_CHALLENGES: ShapeChallenge[] = [
  {
    promptEn: 'Tap the SHINING STAR! ⭐',
    promptHi: 'चमकता हुआ तारा चुनें! ⭐',
    speechEn: 'Tap the shining golden star!',
    speechHi: 'चमकता हुआ तारा ढूंढें और टैप करें!',
    options: [
      { id: 's1', labelEn: 'Star', labelHi: 'तारा', emoji: '⭐', isCorrect: true, color: '#FEF3C7' },
      { id: 's2', labelEn: 'Square', labelHi: 'चौकोर', emoji: '🟦', isCorrect: false, color: '#DBEAFE' },
      { id: 's3', labelEn: 'Circle', labelHi: 'गोला', emoji: '🔴', isCorrect: false, color: '#FEE2E2' },
    ],
  },
  {
    promptEn: 'Tap the GREEN TRIANGLE! 🔺',
    promptHi: 'हरा त्रिभुज (तीन कोना) चुनें! 🔺',
    speechEn: 'Find and tap the triangle with 3 sides!',
    speechHi: 'तीन कोनों वाला त्रिभुज ढूंढें और टैप करें!',
    options: [
      { id: 's4', labelEn: 'Circle', labelHi: 'गोला', emoji: '🟡', isCorrect: false, color: '#FEF08A' },
      { id: 's5', labelEn: 'Triangle', labelHi: 'त्रिभुज', emoji: '🔺', isCorrect: true, color: '#DCFCE7' },
      { id: 's6', labelEn: 'Square', labelHi: 'चौकोर', emoji: '🟧', isCorrect: false, color: '#FFEDD5' },
    ],
  },
  {
    promptEn: 'What comes next? 🔴 🔵 🔴 ❓',
    promptHi: 'अगला क्या आएगा? 🔴 🔵 🔴 ❓',
    speechEn: 'Complete the pattern: Red, Blue, Red, what comes next?',
    speechHi: 'पैटर्न पूरा करें: लाल, नीला, लाल, इसके बाद क्या आएगा?',
    patternSequence: ['🔴', '🔵', '🔴', '❓'],
    options: [
      { id: 's7', labelEn: 'Blue Circle', labelHi: 'नीला गोला', emoji: '🔵', isCorrect: true, color: '#DBEAFE' },
      { id: 's8', labelEn: 'Yellow Star', labelHi: 'पीला तारा', emoji: '⭐', isCorrect: false, color: '#FEF3C7' },
    ],
  },
  {
    promptEn: 'Tap the BLUE SQUARE! 🟦',
    promptHi: 'नीला चौकोर (4 बराबर कोने) चुनें! 🟦',
    speechEn: 'Tap the blue square with four equal sides!',
    speechHi: 'चार बराबर भुजाओं वाला चौकोर वर्ग चुनें!',
    options: [
      { id: 's9', labelEn: 'Triangle', labelHi: 'त्रिभुज', emoji: '🔺', isCorrect: false, color: '#FCE7F3' },
      { id: 's10', labelEn: 'Square', labelHi: 'चौकोर', emoji: '🟦', isCorrect: true, color: '#DBEAFE' },
      { id: 's11', labelEn: 'Moon', labelHi: 'चांद', emoji: '🌙', isCorrect: false, color: '#F3E8FF' },
    ],
  },
  {
    promptEn: 'What comes next? ☀️ 🌙 ☀️ ❓',
    promptHi: 'अगला क्या आएगा? ☀️ 🌙 ☀️ ❓',
    speechEn: 'Look at the sky pattern: Sun, Moon, Sun, what comes next?',
    speechHi: 'पैटर्न पूरा करें: सूरज, चांद, सूरज, अब क्या आएगा?',
    patternSequence: ['☀️', '🌙', '☀️', '❓'],
    options: [
      { id: 's12', labelEn: 'Moon', labelHi: 'चांद', emoji: '🌙', isCorrect: true, color: '#E0E7FF' },
      { id: 's13', labelEn: 'Cloud', labelHi: 'बादल', emoji: '☁️', isCorrect: false, color: '#F1F5F9' },
    ],
  },
];

// ==========================================
// GAME 5: ALPHABET POP (Letters A to M)
// ==========================================
interface AlphabetPopChallenge {
  promptEn: string;
  promptHi: string;
  speechEn: string;
  speechHi: string;
  targetLetter: string;
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

const ALPHABET_POP_CHALLENGES: AlphabetPopChallenge[] = [
  {
    promptEn: 'Pop Letter A for Apple! 🍎',
    promptHi: 'सेब 🍎 के लिए Letter A फोड़ें!',
    speechEn: 'Pop the letter A for juicy red Apple!',
    speechHi: 'एप्पल के लिए A फोड़ें!',
    targetLetter: 'A',
    options: [
      { id: 'ap_1', letter: 'A', wordEn: 'Apple', wordHi: 'एप्पल', emoji: '🍎', isCorrect: true, color: '#FEE2E2' },
      { id: 'ap_2', letter: 'B', wordEn: 'Ball', wordHi: 'बॉल', emoji: '⚽', isCorrect: false, color: '#DBEAFE' },
      { id: 'ap_3', letter: 'C', wordEn: 'Cat', wordHi: 'कैट', emoji: '🐱', isCorrect: false, color: '#FEF3C7' },
    ],
  },
  {
    promptEn: 'Pop Letter B for Ball! ⚽',
    promptHi: 'बॉल ⚽ के लिए Letter B फोड़ें!',
    speechEn: 'Pop the letter B for bouncing Ball!',
    speechHi: 'बॉल के लिए B फोड़ें!',
    targetLetter: 'B',
    options: [
      { id: 'ap_4', letter: 'D', wordEn: 'Dog', wordHi: 'डॉग', emoji: '🐶', isCorrect: false, color: '#DCFCE7' },
      { id: 'ap_5', letter: 'B', wordEn: 'Ball', wordHi: 'बॉल', emoji: '⚽', isCorrect: true, color: '#DBEAFE' },
      { id: 'ap_6', letter: 'E', wordEn: 'Elephant', wordHi: 'हाथी', emoji: '🐘', isCorrect: false, color: '#E0E7FF' },
    ],
  },
  {
    promptEn: 'Pop Letter M for Monkey! 🐵',
    promptHi: 'मंकी 🐵 के लिए Letter M फोड़ें!',
    speechEn: 'Pop the letter M for naughty Monkey!',
    speechHi: 'मंकी के लिए M फोड़ें!',
    targetLetter: 'M',
    options: [
      { id: 'ap_7', letter: 'W', wordEn: 'Watch', wordHi: 'घड़ी', emoji: '⌚', isCorrect: false, color: '#FEF08A' },
      { id: 'ap_8', letter: 'M', wordEn: 'Monkey', wordHi: 'मंकी', emoji: '🐵', isCorrect: true, color: '#FFEDD5' },
      { id: 'ap_9', letter: 'N', wordEn: 'Nest', wordHi: 'घोंसला', emoji: '🐦', isCorrect: false, color: '#F1F5F9' },
    ],
  },
  {
    promptEn: 'Pop Letter L for Lion! 🦁',
    promptHi: 'लायन 🦁 के लिए Letter L फोड़ें!',
    speechEn: 'Roar! Pop the letter L for brave Lion!',
    speechHi: 'लायन के लिए L फोड़ें!',
    targetLetter: 'L',
    options: [
      { id: 'ap_10', letter: 'I', wordEn: 'Ice cream', wordHi: 'आइसक्रीम', emoji: '🍦', isCorrect: false, color: '#FEF3C7' },
      { id: 'ap_11', letter: 'L', wordEn: 'Lion', wordHi: 'लायन', emoji: '🦁', isCorrect: true, color: '#FDE68A' },
      { id: 'ap_12', letter: 'T', wordEn: 'Tree', wordHi: 'पेड़', emoji: '🌲', isCorrect: false, color: '#DCFCE7' },
    ],
  },
  {
    promptEn: 'Pop Letter F for Fish! 🐟',
    promptHi: 'फिश 🐟 के लिए Letter F फोड़ें!',
    speechEn: 'Pop the letter F for swimming Fish!',
    speechHi: 'फिश के लिए F फोड़ें!',
    targetLetter: 'F',
    options: [
      { id: 'ap_13', letter: 'E', wordEn: 'Elephant', wordHi: 'हाथी', emoji: '🐘', isCorrect: false, color: '#E0E7FF' },
      { id: 'ap_14', letter: 'F', wordEn: 'Fish', wordHi: 'फिश', emoji: '🐟', isCorrect: true, color: '#E0F2FE' },
      { id: 'ap_15', letter: 'H', wordEn: 'House', wordHi: 'घर', emoji: '🏠', isCorrect: false, color: '#FFEDD5' },
    ],
  },
  {
    promptEn: 'Pop Letter S for shining Sun! ☀️',
    promptHi: 'सूरज ☀️ के लिए Letter S फोड़ें!',
    speechEn: 'Pop the letter S for shining bright Sun!',
    speechHi: 'सन के लिए S फोड़ें!',
    targetLetter: 'S',
    options: [
      { id: 'ap_16', letter: 'S', wordEn: 'Sun', wordHi: 'सूरज', emoji: '☀️', isCorrect: true, color: '#FEF08A' },
      { id: 'ap_17', letter: 'Z', wordEn: 'Zebra', wordHi: 'ज़ेबरा', emoji: '🦓', isCorrect: false, color: '#F1F5F9' },
      { id: 'ap_18', letter: 'C', wordEn: 'Cat', wordHi: 'कैट', emoji: '🐱', isCorrect: false, color: '#FEF3C7' },
    ],
  },
  {
    promptEn: 'Pop Letter U for rainy Umbrella! ☂️',
    promptHi: 'छाते ☂️ के लिए Letter U फोड़ें!',
    speechEn: 'Pop the letter U for Umbrella!',
    speechHi: 'अम्ब्रेला के लिए U फोड़ें!',
    targetLetter: 'U',
    options: [
      { id: 'ap_19', letter: 'V', wordEn: 'Van', wordHi: 'वैन', emoji: '🚐', isCorrect: false, color: '#F3E8FF' },
      { id: 'ap_20', letter: 'U', wordEn: 'Umbrella', wordHi: 'छाता', emoji: '☂️', isCorrect: true, color: '#EFF6FF' },
      { id: 'ap_21', letter: 'W', wordEn: 'Watch', wordHi: 'घड़ी', emoji: '⌚', isCorrect: false, color: '#E0F2FE' },
    ],
  },
  {
    promptEn: 'Pop Letter Z for striped Zebra! 🦓',
    promptHi: 'ज़ेबरा 🦓 के लिए Letter Z फोड़ें!',
    speechEn: 'Pop the letter Z for running Zebra!',
    speechHi: 'ज़ेबरा के लिए Z फोड़ें!',
    targetLetter: 'Z',
    options: [
      { id: 'ap_22', letter: 'S', wordEn: 'Sun', wordHi: 'सूरज', emoji: '☀️', isCorrect: false, color: '#FEF08A' },
      { id: 'ap_23', letter: 'Z', wordEn: 'Zebra', wordHi: 'ज़ेबरा', emoji: '🦓', isCorrect: true, color: '#F8FAFC' },
      { id: 'ap_24', letter: 'Y', wordEn: 'Yo-yo', wordHi: 'यो-यो', emoji: '🪀', isCorrect: false, color: '#FEF9C3' },
    ],
  },
];

// ==========================================
// GAME 9: ENGLISH RHYME & OPPOSITE CATCHER
// ==========================================
interface EnglishRhymeChallenge {
  promptEn: string;
  promptHi: string;
  speechEn: string;
  speechHi: string;
  targetWord: string;
  options: {
    id: string;
    wordEn: string;
    wordHi: string;
    emoji: string;
    isCorrect: boolean;
    color: string;
  }[];
}

const ENGLISH_RHYME_CHALLENGES: EnglishRhymeChallenge[] = [
  {
    promptEn: 'Catch the word that rhymes with CAT 🐱!',
    promptHi: 'CAT 🐱 से तुकबंदी (Rhyme) वाला शब्द पकड़ें!',
    speechEn: 'Catch the word that rhymes with Cat! Tap Bat!',
    speechHi: 'कैट से तुकबंदी वाला शब्द बैट पकड़ें!',
    targetWord: 'Bat',
    options: [
      { id: 'erc_1', wordEn: 'Bat', wordHi: 'बैट', emoji: '🦇', isCorrect: true, color: '#FDF2F8' },
      { id: 'erc_2', wordEn: 'Dog', wordHi: 'डॉग', emoji: '🐶', isCorrect: false, color: '#EFF6FF' },
      { id: 'erc_3', wordEn: 'Cup', wordHi: 'कप', emoji: '🥛', isCorrect: false, color: '#FEF3C7' },
    ],
  },
  {
    promptEn: 'Catch the OPPOSITE of steaming HOT 🔥!',
    promptHi: 'गर्म (HOT 🔥) का उल्टा (Opposite) पकड़ें!',
    speechEn: 'What is the opposite of hot? Catch cold!',
    speechHi: 'हॉट का विलोम कोल्ड पकड़ें!',
    targetWord: 'Cold',
    options: [
      { id: 'erc_4', wordEn: 'Cold', wordHi: 'कोल्ड', emoji: '🍦', isCorrect: true, color: '#E0F2FE' },
      { id: 'erc_5', wordEn: 'Sun', wordHi: 'सन', emoji: '☀️', isCorrect: false, color: '#FEF08A' },
      { id: 'erc_6', wordEn: 'Fire', wordHi: 'आग', emoji: '💥', isCorrect: false, color: '#FEE2E2' },
    ],
  },
  {
    promptEn: 'Catch the word that rhymes with SUN ☀️!',
    promptHi: 'SUN ☀️ से तुकबंदी वाला शब्द पकड़ें!',
    speechEn: 'Catch the word that rhymes with Sun! Tap Run!',
    speechHi: 'सन से तुकबंदी वाला शब्द रन पकड़ें!',
    targetWord: 'Run',
    options: [
      { id: 'erc_7', wordEn: 'Moon', wordHi: 'मून', emoji: '🌙', isCorrect: false, color: '#EDE9FE' },
      { id: 'erc_8', wordEn: 'Run', wordHi: 'रन', emoji: '🏃', isCorrect: true, color: '#DCFCE7' },
      { id: 'erc_9', wordEn: 'Star', wordHi: 'स्टार', emoji: '⭐', isCorrect: false, color: '#FEF9C3' },
    ],
  },
  {
    promptEn: 'Catch the OPPOSITE of giant BIG 🐘!',
    promptHi: 'बड़ा (BIG 🐘) का उल्टा (Opposite) पकड़ें!',
    speechEn: 'What is the opposite of big? Catch small!',
    speechHi: 'बिग का विलोम स्मॉल पकड़ें!',
    targetWord: 'Small',
    options: [
      { id: 'erc_10', wordEn: 'Tall', wordHi: 'लंबा', emoji: '🦒', isCorrect: false, color: '#FEF3C7' },
      { id: 'erc_11', wordEn: 'Small', wordHi: 'स्मॉल', emoji: '🐭', isCorrect: true, color: '#FEF3C7' },
      { id: 'erc_12', wordEn: 'Heavy', wordHi: 'भारी', emoji: '🧱', isCorrect: false, color: '#CBD5E1' },
    ],
  },
  {
    promptEn: 'Catch the word that rhymes with PEN 🖊️!',
    promptHi: 'PEN 🖊️ से तुकबंदी वाला शब्द पकड़ें!',
    speechEn: 'Which word rhymes with Pen? Tap Hen!',
    speechHi: 'पेन से तुकबंदी वाला शब्द हेन पकड़ें!',
    targetWord: 'Hen',
    options: [
      { id: 'erc_13', wordEn: 'Hen', wordHi: 'हेन', emoji: '🐔', isCorrect: true, color: '#FFEDD5' },
      { id: 'erc_14', wordEn: 'Book', wordHi: 'बुक', emoji: '📖', isCorrect: false, color: '#E0E7FF' },
      { id: 'erc_15', wordEn: 'Box', wordHi: 'बॉक्स', emoji: '📦', isCorrect: false, color: '#F1F5F9' },
    ],
  },
  {
    promptEn: 'Catch the OPPOSITE of pointing UP ⬆️!',
    promptHi: 'ऊपर (UP ⬆️) का उल्टा (Opposite) पकड़ें!',
    speechEn: 'What is the opposite of up? Catch down!',
    speechHi: 'अप का विलोम डाउन पकड़ें!',
    targetWord: 'Down',
    options: [
      { id: 'erc_16', wordEn: 'Down', wordHi: 'डाउन', emoji: '⬇️', isCorrect: true, color: '#F3E8FF' },
      { id: 'erc_17', wordEn: 'In', wordHi: 'इन', emoji: '📦', isCorrect: false, color: '#DCFCE7' },
      { id: 'erc_18', wordEn: 'High', wordHi: 'ऊंचा', emoji: '☁️', isCorrect: false, color: '#EFF6FF' },
    ],
  },
];

// ==========================================
// GAME 10: ENGLISH WORD & ANIMAL SAFARI
// ==========================================
interface EnglishSafariChallenge {
  promptEn: string;
  promptHi: string;
  speechEn: string;
  speechHi: string;
  options: {
    id: string;
    labelEn: string;
    labelHi: string;
    emoji: string;
    isCorrect: boolean;
    color: string;
  }[];
}

const ENGLISH_SAFARI_CHALLENGES: EnglishSafariChallenge[] = [
  {
    promptEn: 'Which animal friend says ROAR! ROAR! 🦁?',
    promptHi: 'कौन सा जानवर दहाड़ (ROAR! ROAR!) लगाता है? 🦁',
    speechEn: 'Which animal says Roar! Roar!? Listen and pick the King of the Jungle!',
    speechHi: 'कौन सा जानवर दहाड़ता है, रोअर-रोअर? सही जानवर पहचानो!',
    options: [
      { id: 'esc_1', labelEn: 'Lion', labelHi: 'शेर', emoji: '🦁', isCorrect: true, color: '#FFF7ED' },
      { id: 'esc_2', labelEn: 'Cow', labelHi: 'गाय', emoji: '🐄', isCorrect: false, color: '#F0FDF4' },
      { id: 'esc_3', labelEn: 'Duck', labelHi: 'बतख', emoji: '🦆', isCorrect: false, color: '#FDF2F8' },
    ],
  },
  {
    promptEn: 'Which body part helps us SMELL sweet flowers? 👃',
    promptHi: 'हम किस अंग से खुशबू सूंघते हैं? 👃',
    speechEn: 'From which body part do we smell? Look at the pictures and choose!',
    speechHi: 'हम किस अंग से सूंघते हैं? चित्रों में से सही अंग चुनो!',
    options: [
      { id: 'esc_4', labelEn: 'Nose', labelHi: 'नाक', emoji: '👃', isCorrect: true, color: '#FDF2F8' },
      { id: 'esc_5', labelEn: 'Eyes', labelHi: 'आँखें', emoji: '👀', isCorrect: false, color: '#EFF6FF' },
      { id: 'esc_6', labelEn: 'Ears', labelHi: 'कान', emoji: '👂', isCorrect: false, color: '#FEF3C7' },
    ],
  },
  {
    promptEn: 'Which animal friend says WOOF! WOOF! 🐶?',
    promptHi: 'कौन सा वफादार दोस्त भौं-भौं (WOOF! 🐶) बोलता है?',
    speechEn: 'Which animal friend says Woof! Woof!? Listen and tap the right friend!',
    speechHi: 'कौन सा वफादार जानवर वुफ-वुफ बोलता है? सही दोस्त पहचानो!',
    options: [
      { id: 'esc_7', labelEn: 'Dog', labelHi: 'कुत्ता', emoji: '🐕', isCorrect: true, color: '#EFF6FF' },
      { id: 'esc_8', labelEn: 'Cat', labelHi: 'बिल्ली', emoji: '🐱', isCorrect: false, color: '#FEF3C7' },
      { id: 'esc_9', labelEn: 'Frog', labelHi: 'मेंढक', emoji: '🐸', isCorrect: false, color: '#ECFDF5' },
    ],
  },
  {
    promptEn: 'Which body part do we SEE colorful rainbows with? 👀',
    promptHi: 'हम किस अंग से सुंदर इंद्रधनुष और दुनिया देखते हैं? 👀',
    speechEn: 'Which body part do we use to see? Look at the pictures and choose!',
    speechHi: 'हम किस अंग से दुनिया देखते हैं? सही चित्र चुनो!',
    options: [
      { id: 'esc_10', labelEn: 'Eyes', labelHi: 'आँखें', emoji: '👀', isCorrect: true, color: '#EFF6FF' },
      { id: 'esc_11', labelEn: 'Ears', labelHi: 'कान', emoji: '👂', isCorrect: false, color: '#FEF3C7' },
      { id: 'esc_12', labelEn: 'Hands', labelHi: 'हाथ', emoji: '🖐️', isCorrect: false, color: '#F0FDF4' },
    ],
  },
  {
    promptEn: 'Which cute animal friend says MEOW! MEOW! 🐱?',
    promptHi: 'प्यारी म्याऊं-म्याऊं (MEOW! 🐱) कौन बोलती है?',
    speechEn: 'Which cute animal says Meow! Meow!? Listen and choose the right pet!',
    speechHi: 'म्याऊं-म्याऊं कौन बोलती है? सही जानवर चुनो!',
    options: [
      { id: 'esc_13', labelEn: 'Cat', labelHi: 'बिल्ली', emoji: '🐱', isCorrect: true, color: '#FEF3C7' },
      { id: 'esc_14', labelEn: 'Cow', labelHi: 'गाय', emoji: '🐄', isCorrect: false, color: '#F0FDF4' },
      { id: 'esc_15', labelEn: 'Lion', labelHi: 'शेर', emoji: '🦁', isCorrect: false, color: '#FFF7ED' },
    ],
  },
  {
    promptEn: 'Which body part helps us HEAR sweet music and bells? 👂',
    promptHi: 'हम किस अंग से मधुर घंटी और संगीत सुनते हैं? 👂',
    speechEn: 'Which body part helps us hear sounds and music? Look and choose!',
    speechHi: 'हम किस अंग से आवाज़ें सुनते हैं? सही अंग चुनो!',
    options: [
      { id: 'esc_16', labelEn: 'Ears', labelHi: 'कान', emoji: '👂', isCorrect: true, color: '#FEF3C7' },
      { id: 'esc_17', labelEn: 'Nose', labelHi: 'नाक', emoji: '👃', isCorrect: false, color: '#FDF2F8' },
      { id: 'esc_18', labelEn: 'Feet', labelHi: 'पैर', emoji: '🦶', isCorrect: false, color: '#FFF7ED' },
    ],
  },
  {
    promptEn: 'Which gentle farm friend says MOO! MOO! 🐄?',
    promptHi: 'मीठा दूध देने वाली कौन सी सहेली मू-मू (MOO! 🐄) बोलती है?',
    speechEn: 'Which gentle farm friend says Moo! Moo!? Listen and pick the animal!',
    speechHi: 'मू-मू बोलकर मीठा दूध कौन देती है? सही सहेली चुनो!',
    options: [
      { id: 'esc_19', labelEn: 'Cow', labelHi: 'गाय', emoji: '🐄', isCorrect: true, color: '#F0FDF4' },
      { id: 'esc_20', labelEn: 'Duck', labelHi: 'बतख', emoji: '🦆', isCorrect: false, color: '#FDF2F8' },
      { id: 'esc_21', labelEn: 'Frog', labelHi: 'मेंढक', emoji: '🐸', isCorrect: false, color: '#ECFDF5' },
    ],
  },
  {
    promptEn: 'Which body part helps us TASTE sweet ice cream? 👅',
    promptHi: 'हम किस अंग से स्वादिष्ट आइसक्रीम का स्वाद चखते हैं? 👅',
    speechEn: 'Which body part helps us taste yummy food? Look and choose!',
    speechHi: 'हम किस अंग से खाने का स्वाद चखते हैं? सही चित्र चुनो!',
    options: [
      { id: 'esc_22', labelEn: 'Tongue', labelHi: 'जीभ', emoji: '👅', isCorrect: true, color: '#FEE2E2' },
      { id: 'esc_23', labelEn: 'Eyes', labelHi: 'आँखें', emoji: '👀', isCorrect: false, color: '#EFF6FF' },
      { id: 'esc_24', labelEn: 'Ears', labelHi: 'कान', emoji: '👂', isCorrect: false, color: '#FEF3C7' },
    ],
  },
  {
    promptEn: 'Which body part do we CLAP together and hold toys with? 🖐️',
    promptHi: 'हम किन अंगों से ताली बजाते हैं और खिलौने पकड़ते हैं? 🖐️',
    speechEn: 'Which body part do we use to clap together? Choose the picture!',
    speechHi: 'हम किन अंगों से ताली बजाते हैं? सही चित्र चुनो!',
    options: [
      { id: 'esc_25', labelEn: 'Hands', labelHi: 'हाथ', emoji: '🖐️', isCorrect: true, color: '#F0FDF4' },
      { id: 'esc_26', labelEn: 'Feet', labelHi: 'पैर', emoji: '🦶', isCorrect: false, color: '#FFF7ED' },
      { id: 'esc_27', labelEn: 'Nose', labelHi: 'नाक', emoji: '👃', isCorrect: false, color: '#FDF2F8' },
    ],
  },
  {
    promptEn: 'What polite magic word do we say for a wonderful gift? 🎁',
    promptHi: 'उपहार मिलने पर कौन सा जादुई शिष्टाचार शब्द बोलते हैं? 🎁',
    speechEn: 'When someone gives you a wonderful gift, what polite word do you say?',
    speechHi: 'जब कोई प्यारा उपहार दे, तब हम क्या बोलते हैं?',
    options: [
      { id: 'esc_28', labelEn: 'Thank You!', labelHi: 'थैंक यू!', emoji: '✨', isCorrect: true, color: '#FEF3C7' },
      { id: 'esc_29', labelEn: 'Sorry', labelHi: 'सॉरी', emoji: '🌸', isCorrect: false, color: '#FEE2E2' },
      { id: 'esc_30', labelEn: 'No', labelHi: 'नहीं', emoji: '❌', isCorrect: false, color: '#F1F5F9' },
    ],
  },
];

// ==========================================
// GAME 6: HINDI SWAR POP (Swar अ to अः)
// ==========================================
interface HindiSwarPopChallenge {
  promptEn: string;
  promptHi: string;
  speechEn: string;
  speechHi: string;
  targetLetter: string;
  options: {
    id: string;
    letter: string;
    wordHi: string;
    wordEn: string;
    emoji: string;
    isCorrect: boolean;
    color: string;
  }[];
}

const HINDI_SWAR_POP_CHALLENGES: HindiSwarPopChallenge[] = [
  {
    promptEn: 'Pop Swar "अ" for Anar 🍎!',
    promptHi: 'अनार 🍎 के लिए स्वर "अ" फोड़ें!',
    speechEn: 'Pop the balloon with swar A for Anar!',
    speechHi: 'अनार के लिए स्वर अ का गुब्बारा फोड़ें!',
    targetLetter: 'अ',
    options: [
      { id: 'hsp_1', letter: 'अ', wordHi: 'अनार', wordEn: 'Anar', emoji: '🍎', isCorrect: true, color: '#FEE2E2' },
      { id: 'hsp_2', letter: 'आ', wordHi: 'आम', wordEn: 'Aam', emoji: '🥭', isCorrect: false, color: '#FEF3C7' },
      { id: 'hsp_3', letter: 'इ', wordHi: 'इमली', wordEn: 'Imli', emoji: '🫒', isCorrect: false, color: '#DCFCE7' },
    ],
  },
  {
    promptEn: 'Pop Swar "आ" for sweet Mango 🥭!',
    promptHi: 'मीठे आम 🥭 के लिए स्वर "आ" फोड़ें!',
    speechEn: 'Pop the balloon with swar Aa for Aam!',
    speechHi: 'आम के लिए स्वर आ का गुब्बारा फोड़ें!',
    targetLetter: 'आ',
    options: [
      { id: 'hsp_4', letter: 'ई', wordHi: 'ईख', wordEn: 'Eekh', emoji: '🎋', isCorrect: false, color: '#E0F2FE' },
      { id: 'hsp_5', letter: 'आ', wordHi: 'आम', wordEn: 'Aam', emoji: '🥭', isCorrect: true, color: '#FEF3C7' },
      { id: 'hsp_6', letter: 'उ', wordHi: 'उल्लू', wordEn: 'Ullu', emoji: '🦉', isCorrect: false, color: '#F3E8FF' },
    ],
  },
  {
    promptEn: 'Pop Swar "इ" for tangy Imli 🫒!',
    promptHi: 'खट्टी इमली 🫒 के लिए स्वर "इ" फोड़ें!',
    speechEn: 'Pop the balloon with swar I for Imli!',
    speechHi: 'इमली के लिए स्वर इ का गुब्बारा फोड़ें!',
    targetLetter: 'इ',
    options: [
      { id: 'hsp_7', letter: 'अ', wordHi: 'अनार', wordEn: 'Anar', emoji: '🍎', isCorrect: false, color: '#FEE2E2' },
      { id: 'hsp_8', letter: 'इ', wordHi: 'इमली', wordEn: 'Imli', emoji: '🫒', isCorrect: true, color: '#DCFCE7' },
      { id: 'hsp_9', letter: 'ऊ', wordHi: 'ऊन', wordEn: 'Oon', emoji: '🧶', isCorrect: false, color: '#FFEDD5' },
    ],
  },
  {
    promptEn: 'Pop Swar "उ" for wise Owl 🦉!',
    promptHi: 'उल्लू 🦉 के लिए स्वर "उ" फोड़ें!',
    speechEn: 'Pop the balloon with swar U for Ullu!',
    speechHi: 'उल्लू के लिए स्वर उ का गुब्बारा फोड़ें!',
    targetLetter: 'उ',
    options: [
      { id: 'hsp_10', letter: 'उ', wordHi: 'उल्लू', wordEn: 'Ullu', emoji: '🦉', isCorrect: true, color: '#F3E8FF' },
      { id: 'hsp_11', letter: 'ओ', wordHi: 'ओखली', wordEn: 'Okhli', emoji: '🥣', isCorrect: false, color: '#FDF2F8' },
      { id: 'hsp_12', letter: 'ऋ', wordHi: 'ऋषि', wordEn: 'Rishi', emoji: '🧘', isCorrect: false, color: '#FEF9C3' },
    ],
  },
  {
    promptEn: 'Pop Swar "अं" for sweet Grapes 🍇!',
    promptHi: 'अंगूर 🍇 के लिए स्वर "अं" फोड़ें!',
    speechEn: 'Pop the balloon with swar Ang for Angoor!',
    speechHi: 'अंगूर के लिए स्वर अं का गुब्बारा फोड़ें!',
    targetLetter: 'अं',
    options: [
      { id: 'hsp_13', letter: 'औ', wordHi: 'औरत', wordEn: 'Aurat', emoji: '👩', isCorrect: false, color: '#FFE4E6' },
      { id: 'hsp_14', letter: 'अं', wordHi: 'अंगूर', wordEn: 'Angoor', emoji: '🍇', isCorrect: true, color: '#EDE9FE' },
      { id: 'hsp_15', letter: 'ए', wordHi: 'एड़ी', wordEn: 'Edi', emoji: '🦶', isCorrect: false, color: '#F1F5F9' },
    ],
  },
];

// ==========================================
// GAME 7: HINDI VYANJAN CATCH (क से म तक)
// ==========================================
interface HindiVyanjanCatchChallenge {
  promptEn: string;
  promptHi: string;
  speechEn: string;
  speechHi: string;
  targetLetter: string;
  options: {
    id: string;
    letter: string;
    wordHi: string;
    wordEn: string;
    emoji: string;
    isCorrect: boolean;
    color: string;
  }[];
}

const HINDI_VYANJAN_CATCH_CHALLENGES: HindiVyanjanCatchChallenge[] = [
  {
    promptEn: 'Catch Vyanjan "क" for Kabootar 🕊️!',
    promptHi: 'कबूतर 🕊️ के लिए व्यंजन "क" पकड़ें!',
    speechEn: 'Catch the kite with letter Ka for Kabootar!',
    speechHi: 'कबूतर के लिए व्यंजन क की पतंग पकड़ें!',
    targetLetter: 'क',
    options: [
      { id: 'hvc_1', letter: 'क', wordHi: 'कबूतर', wordEn: 'Pigeon', emoji: '🕊️', isCorrect: true, color: '#DCFCE7' },
      { id: 'hvc_2', letter: 'ख', wordHi: 'खरगोश', wordEn: 'Rabbit', emoji: '🐰', isCorrect: false, color: '#FEF3C7' },
      { id: 'hvc_3', letter: 'ग', wordHi: 'गमला', wordEn: 'Flowerpot', emoji: '🪴', isCorrect: false, color: '#DBEAFE' },
    ],
  },
  {
    promptEn: 'Catch Vyanjan "ग" for Flowerpot 🪴!',
    promptHi: 'गमला 🪴 के लिए व्यंजन "ग" पकड़ें!',
    speechEn: 'Catch the letter Ga for Gamla!',
    speechHi: 'सुंदर गमले के लिए व्यंजन ग पकड़ें!',
    targetLetter: 'ग',
    options: [
      { id: 'hvc_4', letter: 'घ', wordHi: 'घर', wordEn: 'House', emoji: '🏠', isCorrect: false, color: '#FEE2E2' },
      { id: 'hvc_5', letter: 'ग', wordHi: 'गमला', wordEn: 'Flowerpot', emoji: '🪴', isCorrect: true, color: '#DCFCE7' },
      { id: 'hvc_6', letter: 'च', wordHi: 'चम्मच', wordEn: 'Spoon', emoji: '🥄', isCorrect: false, color: '#EDE9FE' },
    ],
  },
  {
    promptEn: 'Catch Vyanjan "च" for Spoon 🥄!',
    promptHi: 'चम्मच 🥄 के लिए व्यंजन "च" पकड़ें!',
    speechEn: 'Catch the letter Cha for Chammach!',
    speechHi: 'चम्मच के लिए व्यंजन च पकड़ें!',
    targetLetter: 'च',
    options: [
      { id: 'hvc_7', letter: 'छ', wordHi: 'छाता', wordEn: 'Umbrella', emoji: '☂️', isCorrect: false, color: '#FEF9C3' },
      { id: 'hvc_8', letter: 'च', wordHi: 'चम्मच', wordEn: 'Spoon', emoji: '🥄', isCorrect: true, color: '#E0F2FE' },
      { id: 'hvc_9', letter: 'ज', wordHi: 'जग', wordEn: 'Jug', emoji: '🫖', isCorrect: false, color: '#FDF2F8' },
    ],
  },
  {
    promptEn: 'Catch Vyanjan "ट" for red Tomato 🍅!',
    promptHi: 'लाल टमाटर 🍅 के लिए व्यंजन "ट" पकड़ें!',
    speechEn: 'Catch the letter Ta for Tamatar!',
    speechHi: 'लाल टमाटर के लिए व्यंजन ट पकड़ें!',
    targetLetter: 'ट',
    options: [
      { id: 'hvc_10', letter: 'ट', wordHi: 'टमाटर', wordEn: 'Tomato', emoji: '🍅', isCorrect: true, color: '#FEE2E2' },
      { id: 'hvc_11', letter: 'ड', wordHi: 'डमरू', wordEn: 'Damru', emoji: '🥁', isCorrect: false, color: '#FEF3C7' },
      { id: 'hvc_12', letter: 'त', wordHi: 'तितली', wordEn: 'Butterfly', emoji: '🦋', isCorrect: false, color: '#DCFCE7' },
    ],
  },
  {
    promptEn: 'Catch Vyanjan "म" for Fish 🐟!',
    promptHi: 'मछली 🐟 के लिए व्यंजन "म" पकड़ें!',
    speechEn: 'Catch the letter Ma for Machhli jal ki rani hai!',
    speechHi: 'मछली जल की रानी है, व्यंजन म पकड़ें!',
    targetLetter: 'म',
    options: [
      { id: 'hvc_13', letter: 'प', wordHi: 'पतंग', wordEn: 'Kite', emoji: '🪁', isCorrect: false, color: '#EDE9FE' },
      { id: 'hvc_14', letter: 'ब', wordHi: 'बतख', wordEn: 'Duck', emoji: '🦆', isCorrect: false, color: '#FEF9C3' },
      { id: 'hvc_15', letter: 'म', wordHi: 'मछली', wordEn: 'Fish', emoji: '🐟', isCorrect: true, color: '#DCFCE7' },
    ],
  },
];

// ==========================================
// GAME 8: HINDI SOUND SAFARI (पशु-पक्षी आवाज सफारी)
// ==========================================
interface HindiSoundSafariChallenge {
  promptEn: string;
  promptHi: string;
  speechEn: string;
  speechHi: string;
  soundCue: string;
  options: {
    id: string;
    animalHi: string;
    animalEn: string;
    soundHi: string;
    soundEn: string;
    emoji: string;
    isCorrect: boolean;
    color: string;
  }[];
}

const HINDI_SOUND_SAFARI_CHALLENGES: HindiSoundSafariChallenge[] = [
  {
    promptEn: 'Who says "Meow-Meow" (म्याऊं-म्याऊं)? 🐱',
    promptHi: '"म्याऊं-म्याऊं" कौन बोलता है? 🐱',
    speechEn: 'Listen: Meow meow! Who makes this sound?',
    speechHi: 'सुनो: म्याऊं-म्याऊं! यह आवाज कौन करता है?',
    soundCue: 'म्याऊं-म्याऊं!',
    options: [
      { id: 'hss_1', animalHi: 'बिल्ली', animalEn: 'Cat', soundHi: 'म्याऊं-म्याऊं', soundEn: 'Meow', emoji: '🐱', isCorrect: true, color: '#FEF3C7' },
      { id: 'hss_2', animalHi: 'कुत्ता', animalEn: 'Dog', soundHi: 'भौं-भौं', soundEn: 'Woof', emoji: '🐕', isCorrect: false, color: '#DBEAFE' },
      { id: 'hss_3', animalHi: 'गाय', animalEn: 'Cow', soundHi: 'अंबा-अंबा', soundEn: 'Moo', emoji: '🐄', isCorrect: false, color: '#DCFCE7' },
    ],
  },
  {
    promptEn: 'Who says "Bhow-Bhow" (भौं-भौं)? 🐕',
    promptHi: '"भौं-भौं" कौन करता है? 🐕',
    speechEn: 'Listen: Bhow bhow! Who barks like this?',
    speechHi: 'सुनो: भौं-भौं! वफादार पहरेदार कौन है?',
    soundCue: 'भौं-भौं!',
    options: [
      { id: 'hss_4', animalHi: 'चिड़िया', animalEn: 'Sparrow', soundHi: 'चीं-चीं', soundEn: 'Chirp', emoji: '🐦', isCorrect: false, color: '#FCE7F3' },
      { id: 'hss_5', animalHi: 'कुत्ता', animalEn: 'Dog', soundHi: 'भौं-भौं', soundEn: 'Woof', emoji: '🐕', isCorrect: true, color: '#DBEAFE' },
      { id: 'hss_6', animalHi: 'बिल्ली', animalEn: 'Cat', soundHi: 'म्याऊं-म्याऊं', soundEn: 'Meow', emoji: '🐱', isCorrect: false, color: '#FEF3C7' },
    ],
  },
  {
    promptEn: 'Who chirps "Cheen-Cheen" (चीं-चीं)? 🐦',
    promptHi: '"चीं-चीं" कौन चहकती है? 🐦',
    speechEn: 'Listen: Cheen cheen! Which little bird sings in the tree?',
    speechHi: 'सुनो: चीं-चीं! पेड़ पर नन्ही चिड़िया कौन है?',
    soundCue: 'चीं-चीं!',
    options: [
      { id: 'hss_7', animalHi: 'कौआ', animalEn: 'Crow', soundHi: 'काँव-काँव', soundEn: 'Caw', emoji: '🐦‍⬛', isCorrect: false, color: '#E2E8F0' },
      { id: 'hss_8', animalHi: 'चिड़िया', animalEn: 'Sparrow', soundHi: 'चीं-चीं', soundEn: 'Chirp', emoji: '🐦', isCorrect: true, color: '#DCFCE7' },
      { id: 'hss_9', animalHi: 'मेंढक', animalEn: 'Frog', soundHi: 'टर्र-टर्र', soundEn: 'Croak', emoji: '🐸', isCorrect: false, color: '#FEF08A' },
    ],
  },
  {
    promptEn: 'Who makes the sound "Kaaw-Kaaw" (काँव-काँव)? 🐦‍⬛',
    promptHi: '"काँव-काँव" कौन बोलता है? 🐦‍⬛',
    speechEn: 'Listen: Kaaw kaaw! Who has black feathers?',
    speechHi: 'सुनो: काँव-काँव! काला पंखों वाला पक्षी कौन है?',
    soundCue: 'काँव-काँव!',
    options: [
      { id: 'hss_10', animalHi: 'कौआ', animalEn: 'Crow', soundHi: 'काँव-काँव', soundEn: 'Caw', emoji: '🐦‍⬛', isCorrect: true, color: '#E2E8F0' },
      { id: 'hss_11', animalHi: 'बतख', animalEn: 'Duck', soundHi: 'क्वैक-क्वैक', soundEn: 'Quack', emoji: '🦆', isCorrect: false, color: '#DBEAFE' },
      { id: 'hss_12', animalHi: 'गाय', animalEn: 'Cow', soundHi: 'अंबा-अंबा', soundEn: 'Moo', emoji: '🐄', isCorrect: false, color: '#FEF3C7' },
    ],
  },
  {
    promptEn: 'Who roars "Roar" (दहाड़) as King of Jungle? 🦁',
    promptHi: 'जंगल का राजा जोर से "दहाड़ता" कौन है? 🦁',
    speechEn: 'Listen: Roar! Who is the mighty King of the Jungle?',
    speechHi: 'सुनो: भयंकर दहाड़! जंगल का राजा कौन है?',
    soundCue: 'गंभीर दहाड़!',
    options: [
      { id: 'hss_13', animalHi: 'बिल्ली', animalEn: 'Cat', soundHi: 'म्याऊं-म्याऊं', soundEn: 'Meow', emoji: '🐱', isCorrect: false, color: '#FEF3C7' },
      { id: 'hss_14', animalHi: 'शेर', animalEn: 'Lion', soundHi: 'दहाड़ (Roar)', soundEn: 'Roar', emoji: '🦁', isCorrect: true, color: '#FED7AA' },
      { id: 'hss_15', animalHi: 'मेंढक', animalEn: 'Frog', soundHi: 'टर्र-टर्र', soundEn: 'Croak', emoji: '🐸', isCorrect: false, color: '#DCFCE7' },
    ],
  },
];

export const KidsConceptArcadeModal: React.FC<KidsConceptArcadeModalProps> = ({
  visible,
  onClose,
  grade = 'LKG',
  initialGame = null,
  filterSubject = null,
  initialChapterTitle = null,
  initialGameTitle = null,
}) => {
  const { profile, addStars, addReward, updateCognitiveScore } = useUserStore();
  const activeLang = profile.preferredLanguage || 'hi';

  const [selectedSubjectTab, setSelectedSubjectTab] = useState<Subject>(
    filterSubject || 'maths'
  );

  const getSubjectGames = (subj: Subject) => {
    const list = CONCEPT_GAMES_BY_SUBJECT[subj] || [];
    return list.filter((game) => {
      if (grade === 'LKG') {
        if (game.grade === 'UKG' || game.id.startsWith('game_ukg_') || game.badgeEn.includes('UKG')) return false;
      } else if (grade === 'UKG') {
        if (game.grade === 'LKG' || (game.id.startsWith('game_math_ws_') && !game.id.startsWith('game_ukg_math_')) || (game.id.startsWith('game_maths_cat_') && !game.id.startsWith('game_ukg_math_')) || (game.id.startsWith('game_skill_') && !game.id.startsWith('game_ukg_'))) return false;
      }
      return true;
    });
  };

  const mathsGames = useMemo(() => getSubjectGames('maths'), [grade]);
  const englishGames = useMemo(() => getSubjectGames('english'), [grade]);
  const hindiGames = useMemo(() => getSubjectGames('hindi'), [grade]);

  const displayedGames = selectedSubjectTab === 'maths' ? mathsGames : selectedSubjectTab === 'english' ? englishGames : hindiGames;
  const totalGamesCount = mathsGames.length + englishGames.length + hindiGames.length;

  const [activeGame, setActiveGame] = useState<KidsArcadeGameType | 'menu'>(
    initialGame || 'menu'
  );
  const [activeChapterTitle, setActiveChapterTitle] = useState<string | null>(initialChapterTitle || null);
  const [activeGameTitle, setActiveGameTitle] = useState<string | null>(initialGameTitle || null);
  const [activeWorksheetQuestions, setActiveWorksheetQuestions] = useState<Question[]>([]);

  useEffect(() => {
    if (filterSubject) {
      setSelectedSubjectTab(filterSubject);
    }
  }, [filterSubject, visible]);
  const [currentRound, setCurrentRound] = useState(0);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [starsWon, setStarsWon] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [feedbackText, setFeedbackText] = useState<string | null>(null);

  // Animation values
  const bounceAnim = useRef(new Animated.Value(1)).current;
  const seesawTiltAnim = useRef(new Animated.Value(0)).current; // -20 deg to +20 deg
  const fedCountAnim = useRef(new Animated.Value(0)).current;
  const [fedCount, setFedCount] = useState(0);
  const [poppedBubbleIds, setPoppedBubbleIds] = useState<string[]>([]);

  // Update activeGame if initialGame or initialChapterTitle changes
  useEffect(() => {
    if (visible) {
      if (initialChapterTitle) {
        startWorksheetGame(initialGame || 'worksheet_arcade', initialChapterTitle, initialGameTitle || undefined);
      } else if (initialGame) {
        const matched = ALL_CONCEPT_GAMES.find((g) => g.id === initialGame);
        if (matched && matched.chapterTitle) {
          startWorksheetGame(matched.id, matched.chapterTitle, activeLang === 'hi' ? matched.titleHi : matched.titleEn);
        } else {
          startNewGame(initialGame as KidsArcadeGameType);
        }
      } else {
        setActiveGame('menu');
      }
    } else {
      stopSpeaking();
    }
  }, [visible, initialGame, initialChapterTitle, initialGameTitle]);

  const startWorksheetGame = (gameId: string, chapterTitle: string, gameTitle?: string) => {
    stopSpeaking();
    const matchedQs = MOCK_QUESTIONS.filter((q) => q.chapter === chapterTitle);
    const questionsToUse = matchedQs.length > 0
      ? matchedQs
      : MOCK_QUESTIONS.filter((q) => q.chapter.toLowerCase().includes(chapterTitle.toLowerCase().slice(0, 10)));

    if (questionsToUse.length === 0) {
      startNewGame('bubble_pop');
      return;
    }

    setActiveChapterTitle(chapterTitle);
    setActiveGameTitle(gameTitle || chapterTitle);
    setActiveWorksheetQuestions(questionsToUse);
    setActiveGame('worksheet_arcade');
    setCurrentRound(0);
    setScore(0);
    setCombo(0);
    setStarsWon(0);
    setFedCount(0);
    setPoppedBubbleIds([]);
    setIsGameOver(false);
    setFeedbackText(null);
    seesawTiltAnim.setValue(0);

    triggerHaptic('medium');
    soundManager.playPop();

    setTimeout(() => {
      announceWorksheetQuestion(questionsToUse[0]);
    }, 400);
  };

  const announceWorksheetQuestion = (q: Question) => {
    if (!q) return;
    const textToSpeak = activeLang === 'hi'
      ? (q.questionHindi || q.question)
      : q.question;
    speakText(textToSpeak);
  };

  const handleWorksheetOptionTap = (opt: MCQOption) => {
    if (poppedBubbleIds.includes(opt.id) || feedbackText) return;

    setPoppedBubbleIds((prev) => [...prev, opt.id]);

    if (opt.isCorrect) {
      soundManager.playBubblePop();
      handleCorrectAnswer(
        activeLang === 'hi' ? '💥 बूम! सही पकड़ा!' : '💥 POP! PERFECT HIT!'
      );
    } else {
      handleWrongAnswer(
        activeLang === 'hi'
          ? 'अरे वाह! दूसरा गुब्बारा फोड़कर देखें! 🎈'
          : 'Oops! Try another bubble! 🎈'
      );
    }
  };

  const startNewGame = (game: KidsArcadeGameType) => {
    stopSpeaking();
    setActiveGame(game);
    setCurrentRound(0);
    setScore(0);
    setCombo(0);
    setStarsWon(0);
    setFedCount(0);
    setPoppedBubbleIds([]);
    setIsGameOver(false);
    setFeedbackText(null);
    seesawTiltAnim.setValue(0);

    triggerHaptic('medium');
    soundManager.playPop();

    // Auto-announce speech after a brief delay
    setTimeout(() => {
      announceQuestion(game, 0);
    }, 400);
  };

  const announceQuestion = (game: KidsArcadeGameType, roundIndex: number) => {
    let textToSpeak = '';
    if (game === 'bubble_pop') {
      const q = BUBBLE_CHALLENGES[roundIndex % BUBBLE_CHALLENGES.length];
      textToSpeak = activeLang === 'hi' ? q.speechHi : q.speechEn;
    } else if (game === 'seesaw_slam') {
      const q = SEESAW_CHALLENGES[roundIndex % SEESAW_CHALLENGES.length];
      textToSpeak = activeLang === 'hi' ? q.speechHi : q.speechEn;
    } else if (game === 'feed_frenzy') {
      const q = FEED_CHALLENGES[roundIndex % FEED_CHALLENGES.length];
      textToSpeak =
        activeLang === 'hi'
          ? `भूखे ${q.animalNameHi} को ${q.targetCount} ${q.foodNameHi} खिलाएं!`
          : `Feed hungry ${q.animalNameEn} ${q.targetCount} ${q.foodNameEn}!`;
    } else if (game === 'shape_ninja') {
      const q = SHAPE_CHALLENGES[roundIndex % SHAPE_CHALLENGES.length];
      textToSpeak = activeLang === 'hi' ? q.speechHi : q.speechEn;
    } else if (game === 'alphabet_pop') {
      const q = ALPHABET_POP_CHALLENGES[roundIndex % ALPHABET_POP_CHALLENGES.length];
      textToSpeak = activeLang === 'hi' ? q.speechHi : q.speechEn;
    } else if (game === 'english_rhyme_catch') {
      const q = ENGLISH_RHYME_CHALLENGES[roundIndex % ENGLISH_RHYME_CHALLENGES.length];
      textToSpeak = activeLang === 'hi' ? q.speechHi : q.speechEn;
    } else if (game === 'english_word_safari') {
      const q = ENGLISH_SAFARI_CHALLENGES[roundIndex % ENGLISH_SAFARI_CHALLENGES.length];
      textToSpeak = activeLang === 'hi' ? q.speechHi : q.speechEn;
    } else if (game === 'hindi_swar_pop') {
      const q = HINDI_SWAR_POP_CHALLENGES[roundIndex % HINDI_SWAR_POP_CHALLENGES.length];
      textToSpeak = activeLang === 'hi' ? q.speechHi : q.speechEn;
    } else if (game === 'hindi_vyanjan_catch') {
      const q = HINDI_VYANJAN_CATCH_CHALLENGES[roundIndex % HINDI_VYANJAN_CATCH_CHALLENGES.length];
      textToSpeak = activeLang === 'hi' ? q.speechHi : q.speechEn;
    } else if (game === 'hindi_sound_safari') {
      const q = HINDI_SOUND_SAFARI_CHALLENGES[roundIndex % HINDI_SOUND_SAFARI_CHALLENGES.length];
      textToSpeak = activeLang === 'hi' ? q.speechHi : q.speechEn;
    } else if (game === 'math_number_train') {
      const q = MATH_NUMBER_TRAIN_CHALLENGES[roundIndex % MATH_NUMBER_TRAIN_CHALLENGES.length];
      textToSpeak = activeLang === 'hi' ? q.speechHi : q.speechEn;
    } else if (game === 'math_more_less') {
      const q = MATH_MORE_LESS_CHALLENGES[roundIndex % MATH_MORE_LESS_CHALLENGES.length];
      textToSpeak = activeLang === 'hi' ? q.speechHi : q.speechEn;
    } else if (game === 'math_color_pattern') {
      const q = MATH_COLOR_PATTERN_CHALLENGES[roundIndex % MATH_COLOR_PATTERN_CHALLENGES.length];
      textToSpeak = activeLang === 'hi' ? q.speechHi : q.speechEn;
    } else if (game === 'english_phonic_train') {
      const q = ENGLISH_PHONIC_TRAIN_CHALLENGES[roundIndex % ENGLISH_PHONIC_TRAIN_CHALLENGES.length];
      textToSpeak = activeLang === 'hi' ? q.speechHi : q.speechEn;
    } else if (game === 'english_cvc_pop') {
      const q = ENGLISH_CVC_POP_CHALLENGES[roundIndex % ENGLISH_CVC_POP_CHALLENGES.length];
      textToSpeak = activeLang === 'hi' ? q.speechHi : q.speechEn;
    } else if (game === 'english_action_dash') {
      const q = ENGLISH_ACTION_DASH_CHALLENGES[roundIndex % ENGLISH_ACTION_DASH_CHALLENGES.length];
      textToSpeak = activeLang === 'hi' ? q.speechHi : q.speechEn;
    } else if (game === 'hindi_varnamala_train') {
      const q = HINDI_VARNAMALA_TRAIN_CHALLENGES[roundIndex % HINDI_VARNAMALA_TRAIN_CHALLENGES.length];
      textToSpeak = activeLang === 'hi' ? q.speechHi : q.speechEn;
    } else if (game === 'hindi_shabd_milan') {
      const q = HINDI_SHABD_MILAN_CHALLENGES[roundIndex % HINDI_SHABD_MILAN_CHALLENGES.length];
      textToSpeak = activeLang === 'hi' ? q.speechHi : q.speechEn;
    } else if (game === 'hindi_rang_ginti') {
      const q = HINDI_RANG_GINTI_CHALLENGES[roundIndex % HINDI_RANG_GINTI_CHALLENGES.length];
      textToSpeak = activeLang === 'hi' ? q.speechHi : q.speechEn;
    } else if (game === 'blitz') {
      textToSpeak =
        activeLang === 'hi'
          ? 'सुपर किड ब्लिट्ज़! तेजी से सही जवाब चुनें!'
          : 'Super Kid Blitz! Tap fast and beat the challenge!';
    }
    speakText(textToSpeak);
  };

  const handleCorrectAnswer = (bonusMessage?: string) => {
    soundManager.playBubblePop();
    triggerHaptic('success');

    const newCombo = combo + 1;
    setCombo(newCombo);
    const addedPoints = 10 * Math.min(newCombo, 5);
    setScore((prev) => prev + addedPoints);

    // Pulse bounce
    Animated.sequence([
      Animated.timing(bounceAnim, { toValue: 1.2, duration: 150, useNativeDriver: true }),
      Animated.timing(bounceAnim, { toValue: 1.0, duration: 150, useNativeDriver: true }),
    ]).start();

    const streakMsg =
      newCombo >= 4
        ? activeLang === 'hi' ? '⚡ सुपर किड! गजब!' : '⚡ SUPER KID! GENIUS!'
        : newCombo >= 2
        ? activeLang === 'hi' ? '🔥 कॉम्बो स्ट्रीक!' : '🔥 COMBO STREAK!'
        : activeLang === 'hi' ? 'शाबाश! बहुत अच्छे! 🎉' : 'AWESOME! GREAT JOB! 🎉';

    setFeedbackText(bonusMessage || streakMsg);

    // Advance round after brief celebration
    setTimeout(() => {
      setFeedbackText(null);
      setFedCount(0);
      setPoppedBubbleIds([]);
      seesawTiltAnim.setValue(0);

      const nextRound = currentRound + 1;
      const totalRounds = activeGame === 'worksheet_arcade'
        ? Math.min(activeWorksheetQuestions.length || 10, 10)
        : 5;

      if (nextRound >= totalRounds) {
        finishGame(score + addedPoints, newCombo);
      } else {
        setCurrentRound(nextRound);
        if (activeGame === 'worksheet_arcade') {
          announceWorksheetQuestion(activeWorksheetQuestions[nextRound % (activeWorksheetQuestions.length || 1)]);
        } else {
          announceQuestion(activeGame as KidsArcadeGameType, nextRound);
        }
      }
    }, 1100);
  };

  const handleWrongAnswer = (hint: string) => {
    soundManager.playIncorrect();
    triggerHaptic('warning');
    setCombo(0);
    setFeedbackText(hint);

    // Gentle shake animation
    Animated.sequence([
      Animated.timing(bounceAnim, { toValue: 0.95, duration: 80, useNativeDriver: true }),
      Animated.timing(bounceAnim, { toValue: 1.05, duration: 80, useNativeDriver: true }),
      Animated.timing(bounceAnim, { toValue: 1.0, duration: 80, useNativeDriver: true }),
    ]).start();

    setTimeout(() => {
      setFeedbackText(null);
    }, 1400);
  };

  const finishGame = async (finalScore: number, maxCombo: number) => {
    setIsGameOver(true);
    soundManager.playFanfare();
    triggerHaptic('success');

    const starsEarned = Math.min(5, Math.max(3, Math.floor(finalScore / 25)));
    setStarsWon(starsEarned);

    // Add real rewards to profile wallet!
    await addStars(starsEarned);
    await addReward({ stars: starsEarned, coins: starsEarned * 20, xp: finalScore, streakShields: 1 });
    await updateCognitiveScore('spatialScore', 2);
    await updateCognitiveScore('logicScore', 2);
  };

  // ----------------------------------------
  // GAME 1: Bubble Popper Handler
  // ----------------------------------------
  const handleBubbleTap = (option: { id: string; isCorrect: boolean; labelEn: string; labelHi: string }) => {
    if (poppedBubbleIds.includes(option.id) || feedbackText) return;

    setPoppedBubbleIds((prev) => [...prev, option.id]);

    if (option.isCorrect) {
      handleCorrectAnswer(
        activeLang === 'hi' ? '💥 बूम! सही पकड़ा!' : '💥 POP! PERFECT HIT!'
      );
    } else {
      const hint =
        activeLang === 'hi'
          ? `यह ${option.labelHi} है! बड़ा/लंबा वाला ढूंढें!`
          : `That is ${option.labelEn}! Look for the target!`;
      handleWrongAnswer(hint);
    }
  };

  // ----------------------------------------
  // GAME 2: Seesaw Slam Handler
  // ----------------------------------------
  const handleSeesawSideTap = (side: 'left' | 'right') => {
    if (feedbackText) return;
    const challenge = SEESAW_CHALLENGES[currentRound % SEESAW_CHALLENGES.length];
    const isLeftHeavier = challenge.leftItem.weightKg > challenge.rightItem.weightKg;

    const isLeftTarget =
      challenge.target === 'heavier' ? isLeftHeavier : !isLeftHeavier;

    const isUserCorrect = (side === 'left' && isLeftTarget) || (side === 'right' && !isLeftTarget);

    // Animate Seesaw Slam
    const targetTilt = isLeftHeavier ? -18 : 18; // degrees
    Animated.spring(seesawTiltAnim, {
      toValue: targetTilt,
      friction: 4,
      tension: 60,
      useNativeDriver: true,
    }).start();

    if (isUserCorrect) {
      soundManager.playReward();
      handleCorrectAnswer(
        activeLang === 'hi' ? challenge.explanationHi : challenge.explanationEn
      );
    } else {
      const wrongHint =
        activeLang === 'hi'
          ? 'हल्की चीज़ ऊपर उठती है, भारी चीज़ नीचे जाती है! फिर से कोशिश करें!'
          : 'Heavy pushes down, Light floats up! Try again!';
      handleWrongAnswer(wrongHint);
    }
  };

  // ----------------------------------------
  // GAME 3: Feed Frenzy Handler
  // ----------------------------------------
  const handleFeedItemTap = (index: number) => {
    if (feedbackText) return;
    const challenge = FEED_CHALLENGES[currentRound % FEED_CHALLENGES.length];
    const newCount = fedCount + 1;
    setFedCount(newCount);

    soundManager.playPop();
    triggerHaptic('light');

    // Count speech
    const countNumberText = String(newCount);
    speakText(countNumberText);

    if (newCount === challenge.targetCount) {
      // Completed target count!
      soundManager.playCorrect();
      handleCorrectAnswer(
        activeLang === 'hi'
          ? `😋 यम्मी! पूरे ${challenge.targetCount} ${challenge.foodNameHi} खा लिए!`
          : `😋 YUMMY! Benny ate all ${challenge.targetCount} ${challenge.foodNameEn}!`
      );
    } else if (newCount > challenge.targetCount) {
      const overHint =
        activeLang === 'hi'
          ? `अरे! सिर्फ ${challenge.targetCount} चाहिए थे! फिर से गिनें!`
          : `Oops! Only wanted ${challenge.targetCount}! Let's recount!`;
      handleWrongAnswer(overHint);
      setFedCount(0);
    }
  };

  // ----------------------------------------
  // GAME 4: Shape Ninja Handler
  // ----------------------------------------
  const handleShapeTap = (option: { id: string; isCorrect: boolean; labelEn: string; labelHi: string }) => {
    if (feedbackText) return;
    if (option.isCorrect) {
      soundManager.playCorrect();
      handleCorrectAnswer(
        activeLang === 'hi' ? `शानदार! ${option.labelHi} एकदम सही है! ⭐` : `BRILLIANT! ${option.labelEn} is correct! ⭐`
      );
    } else {
      const hint =
        activeLang === 'hi'
          ? `यह ${option.labelHi} है! सही आकार पर टैप करें!`
          : `That is ${option.labelEn}! Try again!`;
      handleWrongAnswer(hint);
    }
  };

  // ----------------------------------------
  // GAME 5: Alphabet Pop Handler
  // ----------------------------------------
  const handleAlphabetPopTap = (option: { id: string; isCorrect: boolean; letter: string; wordEn: string; wordHi: string }) => {
    if (poppedBubbleIds.includes(option.id) || feedbackText) return;

    setPoppedBubbleIds((prev) => [...prev, option.id]);

    if (option.isCorrect) {
      handleCorrectAnswer(
        activeLang === 'hi'
          ? `💥 शाबाश! ${option.letter} एकदम सही है!`
          : `💥 POP! Letter ${option.letter} is correct!`
      );
    } else {
      const hint =
        activeLang === 'hi'
          ? `यह Letter ${option.letter} है! सही अक्षर खोजें!`
          : `That is Letter ${option.letter}! Find the target letter!`;
      handleWrongAnswer(hint);
    }
  };

  // ----------------------------------------
  // GAME 6: Hindi Swar Pop Handler
  // ----------------------------------------
  const handleHindiSwarPopTap = (option: { id: string; isCorrect: boolean; letter: string; wordHi: string; wordEn: string }) => {
    if (poppedBubbleIds.includes(option.id) || feedbackText) return;

    setPoppedBubbleIds((prev) => [...prev, option.id]);

    if (option.isCorrect) {
      handleCorrectAnswer(
        activeLang === 'hi'
          ? `💥 शाबाश! स्वर '${option.letter}' (${option.wordHi}) एकदम सही है!`
          : `💥 POP! Swar '${option.letter}' is correct!`
      );
    } else {
      const hint =
        activeLang === 'hi'
          ? `यह स्वर '${option.letter}' है! सही स्वर वाला गुब्बारा खोजें!`
          : `That is swar '${option.letter}'! Find the correct swar!`;
      handleWrongAnswer(hint);
    }
  };

  // ----------------------------------------
  // GAME 7: Hindi Vyanjan Catch Handler
  // ----------------------------------------
  const handleHindiVyanjanTap = (option: { id: string; isCorrect: boolean; letter: string; wordHi: string; wordEn: string }) => {
    if (poppedBubbleIds.includes(option.id) || feedbackText) return;

    setPoppedBubbleIds((prev) => [...prev, option.id]);

    if (option.isCorrect) {
      handleCorrectAnswer(
        activeLang === 'hi'
          ? `🎉 पकड़ा! व्यंजन '${option.letter}' (${option.wordHi}) बिल्कुल सही है!`
          : `🎉 CAUGHT! Consonant '${option.letter}' is correct!`
      );
    } else {
      const hint =
        activeLang === 'hi'
          ? `यह व्यंजन '${option.letter}' है! सही व्यंजन पकड़ें!`
          : `That is consonant '${option.letter}'! Look closely!`;
      handleWrongAnswer(hint);
    }
  };

  // ----------------------------------------
  // GAME 8: Hindi Sound Safari Handler
  // ----------------------------------------
  const handleHindiSoundSafariTap = (option: { id: string; isCorrect: boolean; animalHi: string; animalEn: string; soundHi: string }) => {
    if (poppedBubbleIds.includes(option.id) || feedbackText) return;

    setPoppedBubbleIds((prev) => [...prev, option.id]);

    if (option.isCorrect) {
      handleCorrectAnswer(
        activeLang === 'hi'
          ? `🎉 कमाल! ${option.animalHi} '${option.soundHi}' बोलती है!`
          : `🎉 BINGO! ${option.animalEn} makes this sound!`
      );
    } else {
      const hint =
        activeLang === 'hi'
          ? `${option.animalHi} '${option.soundHi}' बोलती है! फिर से सोचें!`
          : `${option.animalEn} makes a different sound! Try again!`;
      handleWrongAnswer(hint);
    }
  };

  // ----------------------------------------
  // GAME 9: English Rhyme & Opposite Catcher Handler
  // ----------------------------------------
  const handleEnglishRhymeTap = (option: { id: string; isCorrect: boolean; wordEn: string; wordHi: string }) => {
    if (poppedBubbleIds.includes(option.id) || feedbackText) return;

    setPoppedBubbleIds((prev) => [...prev, option.id]);

    if (option.isCorrect) {
      handleCorrectAnswer(
        activeLang === 'hi'
          ? `🎉 सही! '${option.wordEn}' बिल्कुल सही मेल है!`
          : `🎉 CAUGHT! '${option.wordEn}' is correct!`
      );
    } else {
      const hint =
        activeLang === 'hi'
          ? `'${option.wordEn}' सही नहीं है! दोबारा सोचें!`
          : `'${option.wordEn}' does not match! Try another!`;
      handleWrongAnswer(hint);
    }
  };

  // ----------------------------------------
  // GAME 10: English Word Safari Handler
  // ----------------------------------------
  const handleEnglishSafariTap = (option: { id: string; isCorrect: boolean; labelEn: string; labelHi: string }) => {
    if (poppedBubbleIds.includes(option.id) || feedbackText) return;

    setPoppedBubbleIds((prev) => [...prev, option.id]);

    if (option.isCorrect) {
      handleCorrectAnswer(
        activeLang === 'hi'
          ? `🌟 शाबाश! '${option.labelEn}' सही जवाब है!`
          : `🌟 EXCELLENT! '${option.labelEn}' is correct!`
      );
    } else {
      const hint =
        activeLang === 'hi'
          ? `'${option.labelEn}' नहीं! सही विकल्प ढूंढें!`
          : `'${option.labelEn}' is not it! Look again!`;
      handleWrongAnswer(hint);
    }
  };

  // ----------------------------------------
  // GAME 11: Number Train Mystery Handler (Maths)
  // ----------------------------------------
  const handleNumberTrainTap = (option: { id: string; num: string; isCorrect: boolean }) => {
    if (poppedBubbleIds.includes(option.id) || feedbackText) return;
    setPoppedBubbleIds((prev) => [...prev, option.id]);

    if (option.isCorrect) {
      soundManager.playFanfare();
      handleCorrectAnswer(
        activeLang === 'hi'
          ? `🚂 छुक-छुक! डिब्बा नंबर ${option.num} बिल्कुल सही है!`
          : `🚂 CHOO CHOO! Wagon ${option.num} is correct!`
      );
    } else {
      const hint =
        activeLang === 'hi'
          ? `नंबर ${option.num} नहीं! सही गिनती क्रम सोचें!`
          : `Wagon ${option.num} is not it! Check sequence!`;
      handleWrongAnswer(hint);
    }
  };

  // ----------------------------------------
  // GAME 12: More vs Less Berry Balance Handler (Maths)
  // ----------------------------------------
  const handleMoreLessTap = (basket: { id: string; isCorrect: boolean; itemLabelEn: string; itemLabelHi: string }) => {
    if (feedbackText) return;
    if (basket.isCorrect) {
      soundManager.playCorrect();
      handleCorrectAnswer(
        activeLang === 'hi'
          ? `🍓 यम्मी! ${basket.itemLabelHi} बिल्कुल सही है!`
          : `🍓 YUMMY! ${basket.itemLabelEn} is correct!`
      );
    } else {
      const hint =
        activeLang === 'hi'
          ? 'फिर से गिनें! ज्यादा या कम ध्यान से देखें!'
          : 'Count again! Look closely at more vs less!';
      handleWrongAnswer(hint);
    }
  };

  // ----------------------------------------
  // GAME 13: Frog Lilypad Hop Pattern Handler (Maths)
  // ----------------------------------------
  const handleColorPatternTap = (option: { id: string; isCorrect: boolean; labelEn: string; labelHi: string }) => {
    if (poppedBubbleIds.includes(option.id) || feedbackText) return;
    setPoppedBubbleIds((prev) => [...prev, option.id]);

    if (option.isCorrect) {
      soundManager.playReward();
      handleCorrectAnswer(
        activeLang === 'hi'
          ? `🐸 बोइंग! मेंढक ${option.labelHi} पत्ते पर कूद गया!`
          : `🐸 BOING! Frog leaped onto ${option.labelEn}!`
      );
    } else {
      const hint =
        activeLang === 'hi'
          ? `${option.labelHi} नहीं! क्रम के अनुसार अगला रंग चुनें!`
          : `${option.labelEn} is not next in pattern! Try again!`;
      handleWrongAnswer(hint);
    }
  };

  // ----------------------------------------
  // GAME 14: Phonics Sound Express Handler (English)
  // ----------------------------------------
  const handlePhonicTrainTap = (option: { id: string; isCorrect: boolean; letter: string; wordEn: string }) => {
    if (poppedBubbleIds.includes(option.id) || feedbackText) return;
    setPoppedBubbleIds((prev) => [...prev, option.id]);

    if (option.isCorrect) {
      soundManager.playReward();
      handleCorrectAnswer(
        activeLang === 'hi'
          ? `🔊 शाबाश! '${option.letter}' for '${option.wordEn}'!`
          : `🔊 BINGO! '${option.letter}' is for '${option.wordEn}'!`
      );
    } else {
      const hint =
        activeLang === 'hi'
          ? `'${option.wordEn}' की ध्वनि अलग है! दोबारा सुनें!`
          : `'${option.wordEn}' has a different sound! Listen again!`;
      handleWrongAnswer(hint);
    }
  };

  // ----------------------------------------
  // GAME 15: Junior CVC Word Builder Handler (English)
  // ----------------------------------------
  const handleCvcPopTap = (option: { id: string; isCorrect: boolean; letter: string }) => {
    if (poppedBubbleIds.includes(option.id) || feedbackText) return;
    setPoppedBubbleIds((prev) => [...prev, option.id]);

    if (option.isCorrect) {
      soundManager.playFanfare();
      handleCorrectAnswer(
        activeLang === 'hi'
          ? `🔤 शानदार! अक्षर '${option.letter}' से शब्द पूरा हुआ!`
          : `🔤 AWESOME! Letter '${option.letter}' completes the word!`
      );
    } else {
      const hint =
        activeLang === 'hi'
          ? `अक्षर '${option.letter}' से सही स्पेलिंग नहीं बनती! दूसरा अक्षर चुनें!`
          : `Letter '${option.letter}' does not fit! Try another!`;
      handleWrongAnswer(hint);
    }
  };

  // ----------------------------------------
  // GAME 16: Action Dash Handler (English)
  // ----------------------------------------
  const handleActionDashTap = (option: { id: string; isCorrect: boolean; verbEn: string; verbHi: string }) => {
    if (poppedBubbleIds.includes(option.id) || feedbackText) return;
    setPoppedBubbleIds((prev) => [...prev, option.id]);

    if (option.isCorrect) {
      soundManager.playCorrect();
      handleCorrectAnswer(
        activeLang === 'hi'
          ? `🏃 कमाल! '${option.verbHi}' बिल्कुल सही एक्शन है!`
          : `🏃 SUPER! '${option.verbEn}' is correct!`
      );
    } else {
      const hint =
        activeLang === 'hi'
          ? `यह '${option.verbHi}' है! सही क्रिया पहचानें!`
          : `That is '${option.verbEn}'! Find the matching action!`;
      handleWrongAnswer(hint);
    }
  };

  // ----------------------------------------
  // GAME 17: Varnamala Rail Handler (Hindi)
  // ----------------------------------------
  const handleVarnamalaTrainTap = (option: { id: string; isCorrect: boolean; letter: string; wordHi: string }) => {
    if (poppedBubbleIds.includes(option.id) || feedbackText) return;
    setPoppedBubbleIds((prev) => [...prev, option.id]);

    if (option.isCorrect) {
      soundManager.playFanfare();
      handleCorrectAnswer(
        activeLang === 'hi'
          ? `🚂 छुक-छुक! '${option.letter}' (${option.wordHi}) सही अगला अक्षर है!`
          : `🚂 CHOO CHOO! Letter '${option.letter}' is correct!`
      );
    } else {
      const hint =
        activeLang === 'hi'
          ? `'${option.letter}' नहीं! वर्णमाला का अगला अक्षर सोचें!`
          : `Letter '${option.letter}' is not next! Try again!`;
      handleWrongAnswer(hint);
    }
  };

  // ----------------------------------------
  // GAME 18: Do Akshar Wale Shabd Milan Handler (Hindi)
  // ----------------------------------------
  const handleShabdMilanTap = (option: { id: string; isCorrect: boolean; wordHi: string }) => {
    if (poppedBubbleIds.includes(option.id) || feedbackText) return;
    setPoppedBubbleIds((prev) => [...prev, option.id]);

    if (option.isCorrect) {
      soundManager.playReward();
      handleCorrectAnswer(
        activeLang === 'hi'
          ? `🌟 वाह! '${option.wordHi}' एकदम सही शब्द है!`
          : `🌟 PERFECT! Word '${option.wordHi}' matches!`
      );
    } else {
      const hint =
        activeLang === 'hi'
          ? `'${option.wordHi}' नहीं! चित्र से मिलता शब्द चुनें!`
          : `'${option.wordHi}' does not match picture! Look again!`;
      handleWrongAnswer(hint);
    }
  };

  // ----------------------------------------
  // GAME 19: Rang aur Ginti Rusher Handler (Hindi)
  // ----------------------------------------
  const handleRangGintiTap = (option: { id: string; isCorrect: boolean; labelHi: string; labelEn: string }) => {
    if (poppedBubbleIds.includes(option.id) || feedbackText) return;
    setPoppedBubbleIds((prev) => [...prev, option.id]);

    if (option.isCorrect) {
      soundManager.playCorrect();
      handleCorrectAnswer(
        activeLang === 'hi'
          ? `🎨 शाबाश! '${option.labelHi}' सही गिना और पहचाना!`
          : `🎨 EXCELLENT! '${option.labelEn}' is correct!`
      );
    } else {
      const hint =
        activeLang === 'hi'
          ? `'${option.labelHi}' नहीं! रंग और संख्या फिर से गिनें!`
          : `'${option.labelEn}' is not it! Recount and try!`;
      handleWrongAnswer(hint);
    }
  };

  // Seesaw tilt rotation interpolator
  const tiltInterpolation = seesawTiltAnim.interpolate({
    inputRange: [-20, 20],
    outputRange: ['-18deg', '18deg'],
  });

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.arcadeContainer}>
          {/* Top Arcade HUD Header */}
          <View style={styles.hudHeader}>
            <View style={styles.hudLeft}>
              {activeGame !== 'menu' && (
                <TouchableOpacity
                  style={styles.backBtn}
                  onPress={() => {
                    stopSpeaking();
                    setActiveGame('menu');
                  }}
                >
                  <Text style={styles.backBtnText}>◀ {activeLang === 'hi' ? 'खेल सूची' : 'Games'}</Text>
                </TouchableOpacity>
              )}
              <View style={styles.arcadeBadge}>
                <Text style={styles.arcadeBadgeText}>🌟 SUPER KID ARCADE</Text>
              </View>
            </View>

            <View style={styles.hudRight}>
              {activeGame !== 'menu' && (
                <>
                  <View style={styles.hudCoinBox}>
                    <Text style={styles.hudScoreLabel}>💰</Text>
                    <Text style={styles.hudCoinVal}>{score * 2}</Text>
                  </View>
                  <View style={styles.hudScoreBox}>
                    <Text style={styles.hudScoreLabel}>⭐</Text>
                    <Text style={styles.hudScoreVal}>{score}</Text>
                  </View>
                </>
              )}
              {combo > 1 && (
                <View style={styles.comboFlameBadge}>
                  <Text style={styles.comboFlameText}>🔥 {combo}x</Text>
                </View>
              )}
              <TouchableOpacity
                style={styles.closeBtn}
                onPress={() => {
                  stopSpeaking();
                  onClose();
                }}
              >
                <Text style={styles.closeBtnText}>✕</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* ======================================================== */}
          {/* MENU SCREEN: Choose a Psychological Concept Game */}
          {/* ======================================================== */}
          {activeGame === 'menu' && (
            <ScrollView
              style={styles.menuScrollView}
              contentContainerStyle={styles.menuScrollContent}
              showsVerticalScrollIndicator={false}
            >
              <View style={styles.menuHeroBanner}>
                <Text style={styles.menuHeroEmoji}>🚀 🧠 🏆</Text>
                <Text style={styles.menuHeroTitle}>
                  {activeLang === 'hi' ? 'सुपर किड कॉन्सेप्ट गेम ज़ोन' : 'Super Kid Concept Arcade'}
                </Text>
                <Text style={styles.menuHeroSub}>
                  {activeLang === 'hi'
                    ? 'गणित, अंग्रेज़ी और हिंदी के लिए खेल-खेल में सीखने वाले 50 अनोखे खेल! हमेशा याद रहेगा!'
                    : '50 Fun sensory and worksheet concept arcade games across Maths, English & Hindi!'}
                </Text>
                <View style={styles.gradePill}>
                  <Text style={styles.gradePillText}>🎮 {grade || 'UKG'} • {totalGamesCount} ARCADE GAMES</Text>
                </View>
              </View>

              {/* Smart Subject Filter Tabs - 100% Strictly Separated */}
              <View style={styles.arcadeSubjectTabsRow}>
                <TouchableOpacity
                  style={[styles.arcadeSubjTab, selectedSubjectTab === 'maths' && styles.arcadeSubjTabActive]}
                  onPress={() => {
                    triggerHaptic('light');
                    setSelectedSubjectTab('maths');
                  }}
                  activeOpacity={0.8}
                >
                  <Text style={[styles.arcadeSubjTabText, selectedSubjectTab === 'maths' && styles.arcadeSubjTabTextActive]}>
                    📐 {activeLang === 'hi' ? `गणित खेल (${mathsGames.length})` : `Maths Games (${mathsGames.length})`}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.arcadeSubjTab, selectedSubjectTab === 'english' && styles.arcadeSubjTabActive]}
                  onPress={() => {
                    triggerHaptic('light');
                    setSelectedSubjectTab('english');
                  }}
                  activeOpacity={0.8}
                >
                  <Text style={[styles.arcadeSubjTabText, selectedSubjectTab === 'english' && styles.arcadeSubjTabTextActive]}>
                    🔤 {activeLang === 'hi' ? `अंग्रेज़ी खेल (${englishGames.length})` : `English Games (${englishGames.length})`}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.arcadeSubjTab, selectedSubjectTab === 'hindi' && styles.arcadeSubjTabActive]}
                  onPress={() => {
                    triggerHaptic('light');
                    setSelectedSubjectTab('hindi');
                  }}
                  activeOpacity={0.8}
                >
                  <Text style={[styles.arcadeSubjTabText, selectedSubjectTab === 'hindi' && styles.arcadeSubjTabTextActive]}>
                    🇮🇳 {activeLang === 'hi' ? `हिंदी खेल (${hindiGames.length})` : `Hindi Games (${hindiGames.length})`}
                  </Text>
                </TouchableOpacity>
              </View>

              {/* Game Cards Grid */}
              <View style={styles.gameCardsGrid}>
                {displayedGames.map((game) => (
                  <TouchableOpacity
                    key={game.id}
                    style={[styles.menuGameCard, { backgroundColor: game.color, borderColor: game.borderColor }]}
                    activeOpacity={0.88}
                    onPress={() => {
                      if (game.chapterTitle) {
                        startWorksheetGame(game.id, game.chapterTitle, activeLang === 'hi' ? game.titleHi : game.titleEn);
                      } else if (game.gameType) {
                        startNewGame(game.gameType as KidsArcadeGameType);
                      } else {
                        startNewGame(game.id as KidsArcadeGameType);
                      }
                    }}
                  >
                    <View style={styles.gameCardTopRow}>
                      <Text style={styles.gameCardBigEmoji}>{game.emoji}</Text>
                      <View style={[styles.gameCardTag, { backgroundColor: '#FFFFFF' }]}>
                        <Text style={[styles.gameCardTagText, { color: '#1E293B', fontWeight: '800' }]}>
                          {activeLang === 'hi' ? game.badgeHi : game.badgeEn}
                        </Text>
                      </View>
                    </View>
                    <Text style={styles.gameCardTitle}>
                      {activeLang === 'hi' ? game.titleHi : game.titleEn}
                    </Text>
                    <Text style={styles.gameCardDesc}>
                      {activeLang === 'hi' ? game.descHi : game.descEn}
                    </Text>
                    <View style={[styles.gamePlayActionBtn, { backgroundColor: '#2563EB' }]}>
                      <Text style={styles.gamePlayActionText}>
                        {activeLang === 'hi' ? 'खेलें ▶' : 'Play Now ▶'}
                      </Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>

              {/* All-in-One Super Kid Blitz Launcher */}
              <TouchableOpacity
                style={styles.allRounderBanner}
                activeOpacity={0.88}
                onPress={() => startNewGame('bubble_pop')}
              >
                <View style={styles.allRounderIcon}>
                  <Text style={{ fontSize: 32 }}>⚡</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.allRounderTitle}>
                    {activeLang === 'hi' ? '⚡ 60s सुपर किड रश' : '⚡ 60s Super Kid Rush'}
                  </Text>
                  <Text style={styles.allRounderSub}>
                    {activeLang === 'hi'
                      ? 'सभी 4 खेलों का मजेदार मिश्रण! 5 स्टार और ट्रॉफी जीतें!'
                      : 'All 4 concept mini-games combined! Earn 5 Stars & Gold Trophy!'}
                  </Text>
                </View>
                <View style={styles.allRounderGoBtn}>
                  <Text style={styles.allRounderGoText}>
                    {activeLang === 'hi' ? 'शुरू करें ▶' : 'Start ▶'}
                  </Text>
                </View>
              </TouchableOpacity>
            </ScrollView>
          )}

          {/* ======================================================== */}
          {/* ACTIVE GAME PLAY ARENA */}
          {/* ======================================================== */}
          {activeGame !== 'menu' && !isGameOver && (
            <View style={styles.playArena}>
              {/* Progress & Speaker Banner */}
              <View style={styles.arenaPromptCard}>
                <View style={styles.arenaPromptTopRow}>
                  <View style={styles.roundIndicatorPill}>
                    <Text style={styles.roundIndicatorText}>
                      {activeLang === 'hi'
                        ? `चुनौती ${currentRound + 1} / ${activeGame === 'worksheet_arcade' ? Math.min(activeWorksheetQuestions.length || 10, 10) : 5}`
                        : `Round ${currentRound + 1} of ${activeGame === 'worksheet_arcade' ? Math.min(activeWorksheetQuestions.length || 10, 10) : 5}`}
                    </Text>
                  </View>
                  {activeGameTitle && (
                    <View style={[styles.roundIndicatorPill, { backgroundColor: '#EFF6FF', marginLeft: 8 }]}>
                      <Text style={[styles.roundIndicatorText, { color: '#2563EB', fontWeight: '800' }]} numberOfLines={1}>
                        {activeGameTitle}
                      </Text>
                    </View>
                  )}

                  <SpeakerButton
                    textToSpeak={
                      activeGame === 'worksheet_arcade'
                        ? activeWorksheetQuestions[currentRound % (activeWorksheetQuestions.length || 1)]
                          ? (activeLang === 'hi'
                            ? activeWorksheetQuestions[currentRound % activeWorksheetQuestions.length].questionHindi || activeWorksheetQuestions[currentRound % activeWorksheetQuestions.length].question
                            : activeWorksheetQuestions[currentRound % activeWorksheetQuestions.length].question)
                          : ''
                        : activeGame === 'bubble_pop'
                        ? activeLang === 'hi'
                          ? BUBBLE_CHALLENGES[currentRound % BUBBLE_CHALLENGES.length].speechHi
                          : BUBBLE_CHALLENGES[currentRound % BUBBLE_CHALLENGES.length].speechEn
                        : activeGame === 'seesaw_slam'
                        ? activeLang === 'hi'
                          ? SEESAW_CHALLENGES[currentRound % SEESAW_CHALLENGES.length].speechHi
                          : SEESAW_CHALLENGES[currentRound % SEESAW_CHALLENGES.length].speechEn
                        : activeGame === 'feed_frenzy'
                        ? activeLang === 'hi'
                          ? `भूखे जानवर को ${FEED_CHALLENGES[currentRound % FEED_CHALLENGES.length].targetCount} चीजें खिलाएं!`
                          : `Feed hungry animal ${FEED_CHALLENGES[currentRound % FEED_CHALLENGES.length].targetCount} items!`
                        : activeGame === 'alphabet_pop'
                        ? activeLang === 'hi'
                          ? ALPHABET_POP_CHALLENGES[currentRound % ALPHABET_POP_CHALLENGES.length].speechHi
                          : ALPHABET_POP_CHALLENGES[currentRound % ALPHABET_POP_CHALLENGES.length].speechEn
                        : activeGame === 'english_rhyme_catch'
                        ? activeLang === 'hi'
                          ? ENGLISH_RHYME_CHALLENGES[currentRound % ENGLISH_RHYME_CHALLENGES.length].speechHi
                          : ENGLISH_RHYME_CHALLENGES[currentRound % ENGLISH_RHYME_CHALLENGES.length].speechEn
                        : activeGame === 'english_word_safari'
                        ? activeLang === 'hi'
                          ? ENGLISH_SAFARI_CHALLENGES[currentRound % ENGLISH_SAFARI_CHALLENGES.length].speechHi
                          : ENGLISH_SAFARI_CHALLENGES[currentRound % ENGLISH_SAFARI_CHALLENGES.length].speechEn
                        : activeGame === 'hindi_swar_pop'
                        ? activeLang === 'hi'
                          ? HINDI_SWAR_POP_CHALLENGES[currentRound % HINDI_SWAR_POP_CHALLENGES.length].speechHi
                          : HINDI_SWAR_POP_CHALLENGES[currentRound % HINDI_SWAR_POP_CHALLENGES.length].speechEn
                        : activeGame === 'hindi_vyanjan_catch'
                        ? activeLang === 'hi'
                          ? HINDI_VYANJAN_CATCH_CHALLENGES[currentRound % HINDI_VYANJAN_CATCH_CHALLENGES.length].speechHi
                          : HINDI_VYANJAN_CATCH_CHALLENGES[currentRound % HINDI_VYANJAN_CATCH_CHALLENGES.length].speechEn
                        : activeGame === 'hindi_sound_safari'
                        ? activeLang === 'hi'
                          ? HINDI_SOUND_SAFARI_CHALLENGES[currentRound % HINDI_SOUND_SAFARI_CHALLENGES.length].speechHi
                          : HINDI_SOUND_SAFARI_CHALLENGES[currentRound % HINDI_SOUND_SAFARI_CHALLENGES.length].speechEn
                        : activeGame === 'math_number_train'
                        ? activeLang === 'hi'
                          ? MATH_NUMBER_TRAIN_CHALLENGES[currentRound % MATH_NUMBER_TRAIN_CHALLENGES.length].speechHi
                          : MATH_NUMBER_TRAIN_CHALLENGES[currentRound % MATH_NUMBER_TRAIN_CHALLENGES.length].speechEn
                        : activeGame === 'math_more_less'
                        ? activeLang === 'hi'
                          ? MATH_MORE_LESS_CHALLENGES[currentRound % MATH_MORE_LESS_CHALLENGES.length].speechHi
                          : MATH_MORE_LESS_CHALLENGES[currentRound % MATH_MORE_LESS_CHALLENGES.length].speechEn
                        : activeGame === 'math_color_pattern'
                        ? activeLang === 'hi'
                          ? MATH_COLOR_PATTERN_CHALLENGES[currentRound % MATH_COLOR_PATTERN_CHALLENGES.length].speechHi
                          : MATH_COLOR_PATTERN_CHALLENGES[currentRound % MATH_COLOR_PATTERN_CHALLENGES.length].speechEn
                        : activeGame === 'english_phonic_train'
                        ? activeLang === 'hi'
                          ? ENGLISH_PHONIC_TRAIN_CHALLENGES[currentRound % ENGLISH_PHONIC_TRAIN_CHALLENGES.length].speechHi
                          : ENGLISH_PHONIC_TRAIN_CHALLENGES[currentRound % ENGLISH_PHONIC_TRAIN_CHALLENGES.length].speechEn
                        : activeGame === 'english_cvc_pop'
                        ? activeLang === 'hi'
                          ? ENGLISH_CVC_POP_CHALLENGES[currentRound % ENGLISH_CVC_POP_CHALLENGES.length].speechHi
                          : ENGLISH_CVC_POP_CHALLENGES[currentRound % ENGLISH_CVC_POP_CHALLENGES.length].speechEn
                        : activeGame === 'english_action_dash'
                        ? activeLang === 'hi'
                          ? ENGLISH_ACTION_DASH_CHALLENGES[currentRound % ENGLISH_ACTION_DASH_CHALLENGES.length].speechHi
                          : ENGLISH_ACTION_DASH_CHALLENGES[currentRound % ENGLISH_ACTION_DASH_CHALLENGES.length].speechEn
                        : activeGame === 'hindi_varnamala_train'
                        ? activeLang === 'hi'
                          ? HINDI_VARNAMALA_TRAIN_CHALLENGES[currentRound % HINDI_VARNAMALA_TRAIN_CHALLENGES.length].speechHi
                          : HINDI_VARNAMALA_TRAIN_CHALLENGES[currentRound % HINDI_VARNAMALA_TRAIN_CHALLENGES.length].speechEn
                        : activeGame === 'hindi_shabd_milan'
                        ? activeLang === 'hi'
                          ? HINDI_SHABD_MILAN_CHALLENGES[currentRound % HINDI_SHABD_MILAN_CHALLENGES.length].speechHi
                          : HINDI_SHABD_MILAN_CHALLENGES[currentRound % HINDI_SHABD_MILAN_CHALLENGES.length].speechEn
                        : activeGame === 'hindi_rang_ginti'
                        ? activeLang === 'hi'
                          ? HINDI_RANG_GINTI_CHALLENGES[currentRound % HINDI_RANG_GINTI_CHALLENGES.length].speechHi
                          : HINDI_RANG_GINTI_CHALLENGES[currentRound % HINDI_RANG_GINTI_CHALLENGES.length].speechEn
                        : activeLang === 'hi'
                        ? SHAPE_CHALLENGES[currentRound % SHAPE_CHALLENGES.length].speechHi
                        : SHAPE_CHALLENGES[currentRound % SHAPE_CHALLENGES.length].speechEn
                    }
                    size="pill"
                    showLabel
                    activeLang={activeLang}
                  />
                </View>

                {/* Question Title */}
                <Text style={styles.missionHeadline}>
                  {activeGame === 'worksheet_arcade'
                    ? activeWorksheetQuestions[currentRound % (activeWorksheetQuestions.length || 1)]
                      ? (activeLang === 'hi'
                        ? activeWorksheetQuestions[currentRound % activeWorksheetQuestions.length].questionHindi || activeWorksheetQuestions[currentRound % activeWorksheetQuestions.length].question
                        : activeWorksheetQuestions[currentRound % activeWorksheetQuestions.length].question)
                      : ''
                    : activeGame === 'bubble_pop'
                    ? activeLang === 'hi'
                      ? BUBBLE_CHALLENGES[currentRound % BUBBLE_CHALLENGES.length].promptHi
                      : BUBBLE_CHALLENGES[currentRound % BUBBLE_CHALLENGES.length].promptEn
                    : activeGame === 'seesaw_slam'
                    ? activeLang === 'hi'
                      ? SEESAW_CHALLENGES[currentRound % SEESAW_CHALLENGES.length].promptHi
                      : SEESAW_CHALLENGES[currentRound % SEESAW_CHALLENGES.length].promptEn
                    : activeGame === 'feed_frenzy'
                    ? activeLang === 'hi'
                      ? `${FEED_CHALLENGES[currentRound % FEED_CHALLENGES.length].animalEmoji} ${FEED_CHALLENGES[currentRound % FEED_CHALLENGES.length].animalNameHi} को ${FEED_CHALLENGES[currentRound % FEED_CHALLENGES.length].targetCount} ${FEED_CHALLENGES[currentRound % FEED_CHALLENGES.length].foodNameHi} खिलाएं!`
                      : `Feed ${FEED_CHALLENGES[currentRound % FEED_CHALLENGES.length].animalEmoji} ${FEED_CHALLENGES[currentRound % FEED_CHALLENGES.length].animalNameEn} ${FEED_CHALLENGES[currentRound % FEED_CHALLENGES.length].targetCount} ${FEED_CHALLENGES[currentRound % FEED_CHALLENGES.length].foodNameEn}!`
                    : activeGame === 'alphabet_pop'
                    ? activeLang === 'hi'
                      ? ALPHABET_POP_CHALLENGES[currentRound % ALPHABET_POP_CHALLENGES.length].promptHi
                      : ALPHABET_POP_CHALLENGES[currentRound % ALPHABET_POP_CHALLENGES.length].promptEn
                    : activeGame === 'english_rhyme_catch'
                    ? activeLang === 'hi'
                      ? ENGLISH_RHYME_CHALLENGES[currentRound % ENGLISH_RHYME_CHALLENGES.length].promptHi
                      : ENGLISH_RHYME_CHALLENGES[currentRound % ENGLISH_RHYME_CHALLENGES.length].promptEn
                    : activeGame === 'english_word_safari'
                    ? activeLang === 'hi'
                      ? ENGLISH_SAFARI_CHALLENGES[currentRound % ENGLISH_SAFARI_CHALLENGES.length].promptHi
                      : ENGLISH_SAFARI_CHALLENGES[currentRound % ENGLISH_SAFARI_CHALLENGES.length].promptEn
                    : activeGame === 'hindi_swar_pop'
                    ? activeLang === 'hi'
                      ? HINDI_SWAR_POP_CHALLENGES[currentRound % HINDI_SWAR_POP_CHALLENGES.length].promptHi
                      : HINDI_SWAR_POP_CHALLENGES[currentRound % HINDI_SWAR_POP_CHALLENGES.length].promptEn
                    : activeGame === 'hindi_vyanjan_catch'
                    ? activeLang === 'hi'
                      ? HINDI_VYANJAN_CATCH_CHALLENGES[currentRound % HINDI_VYANJAN_CATCH_CHALLENGES.length].promptHi
                      : HINDI_VYANJAN_CATCH_CHALLENGES[currentRound % HINDI_VYANJAN_CATCH_CHALLENGES.length].promptEn
                    : activeGame === 'hindi_sound_safari'
                    ? activeLang === 'hi'
                      ? HINDI_SOUND_SAFARI_CHALLENGES[currentRound % HINDI_SOUND_SAFARI_CHALLENGES.length].promptHi
                      : HINDI_SOUND_SAFARI_CHALLENGES[currentRound % HINDI_SOUND_SAFARI_CHALLENGES.length].promptEn
                    : activeGame === 'math_number_train'
                    ? activeLang === 'hi'
                      ? MATH_NUMBER_TRAIN_CHALLENGES[currentRound % MATH_NUMBER_TRAIN_CHALLENGES.length].promptHi
                      : MATH_NUMBER_TRAIN_CHALLENGES[currentRound % MATH_NUMBER_TRAIN_CHALLENGES.length].promptEn
                    : activeGame === 'math_more_less'
                    ? activeLang === 'hi'
                      ? MATH_MORE_LESS_CHALLENGES[currentRound % MATH_MORE_LESS_CHALLENGES.length].promptHi
                      : MATH_MORE_LESS_CHALLENGES[currentRound % MATH_MORE_LESS_CHALLENGES.length].promptEn
                    : activeGame === 'math_color_pattern'
                    ? activeLang === 'hi'
                      ? MATH_COLOR_PATTERN_CHALLENGES[currentRound % MATH_COLOR_PATTERN_CHALLENGES.length].promptHi
                      : MATH_COLOR_PATTERN_CHALLENGES[currentRound % MATH_COLOR_PATTERN_CHALLENGES.length].promptEn
                    : activeGame === 'english_phonic_train'
                    ? activeLang === 'hi'
                      ? ENGLISH_PHONIC_TRAIN_CHALLENGES[currentRound % ENGLISH_PHONIC_TRAIN_CHALLENGES.length].promptHi
                      : ENGLISH_PHONIC_TRAIN_CHALLENGES[currentRound % ENGLISH_PHONIC_TRAIN_CHALLENGES.length].promptEn
                    : activeGame === 'english_cvc_pop'
                    ? activeLang === 'hi'
                      ? ENGLISH_CVC_POP_CHALLENGES[currentRound % ENGLISH_CVC_POP_CHALLENGES.length].promptHi
                      : ENGLISH_CVC_POP_CHALLENGES[currentRound % ENGLISH_CVC_POP_CHALLENGES.length].promptEn
                    : activeGame === 'english_action_dash'
                    ? activeLang === 'hi'
                      ? ENGLISH_ACTION_DASH_CHALLENGES[currentRound % ENGLISH_ACTION_DASH_CHALLENGES.length].promptHi
                      : ENGLISH_ACTION_DASH_CHALLENGES[currentRound % ENGLISH_ACTION_DASH_CHALLENGES.length].promptEn
                    : activeGame === 'hindi_varnamala_train'
                    ? activeLang === 'hi'
                      ? HINDI_VARNAMALA_TRAIN_CHALLENGES[currentRound % HINDI_VARNAMALA_TRAIN_CHALLENGES.length].promptHi
                      : HINDI_VARNAMALA_TRAIN_CHALLENGES[currentRound % HINDI_VARNAMALA_TRAIN_CHALLENGES.length].promptEn
                    : activeGame === 'hindi_shabd_milan'
                    ? activeLang === 'hi'
                      ? HINDI_SHABD_MILAN_CHALLENGES[currentRound % HINDI_SHABD_MILAN_CHALLENGES.length].promptHi
                      : HINDI_SHABD_MILAN_CHALLENGES[currentRound % HINDI_SHABD_MILAN_CHALLENGES.length].promptEn
                    : activeGame === 'hindi_rang_ginti'
                    ? activeLang === 'hi'
                      ? HINDI_RANG_GINTI_CHALLENGES[currentRound % HINDI_RANG_GINTI_CHALLENGES.length].promptHi
                      : HINDI_RANG_GINTI_CHALLENGES[currentRound % HINDI_RANG_GINTI_CHALLENGES.length].promptEn
                    : activeLang === 'hi'
                    ? SHAPE_CHALLENGES[currentRound % SHAPE_CHALLENGES.length].promptHi
                    : SHAPE_CHALLENGES[currentRound % SHAPE_CHALLENGES.length].promptEn}
                </Text>

                {/* Instant Feedback Toast */}
                {feedbackText && (
                  <View style={styles.feedbackBanner}>
                    <Text style={styles.feedbackText}>{feedbackText}</Text>
                  </View>
                )}
              </View>

              {/* GAME STAGE: DYNAMIC WORKSHEET ARCADE ARENA */}
              {activeGame === 'worksheet_arcade' && activeWorksheetQuestions.length > 0 && (
                <View style={styles.bubbleStageContainer}>
                  {(() => {
                    const currentQ = activeWorksheetQuestions[currentRound % activeWorksheetQuestions.length];
                    const options = currentQ.payload.options || [];
                    const bubbleColors = ['#DBEAFE', '#DCFCE7', '#FEF3C7', '#FCE7F3', '#EDE9FE', '#FFEDD5'];
                    return (
                      <View style={{ width: '100%', alignItems: 'center' }}>
                        {currentQ.visualEmoji ? (
                          <View style={{ marginBottom: 14 }}>
                            <Text style={{ fontSize: 44 }}>{currentQ.visualEmoji}</Text>
                          </View>
                        ) : null}

                        <View style={[styles.bubbleGrid, { justifyContent: 'center' }]}>
                          {options.map((opt, idx) => {
                            const isPopped = poppedBubbleIds.includes(opt.id);
                            const podColor = bubbleColors[idx % bubbleColors.length];
                            return (
                              <TouchableOpacity
                                key={opt.id}
                                activeOpacity={0.8}
                                disabled={isPopped}
                                onPress={() => handleWorksheetOptionTap(opt)}
                                style={[
                                  styles.bubblePod,
                                  {
                                    backgroundColor: isPopped ? '#F1F5F9' : podColor,
                                    opacity: isPopped ? 0.35 : 1,
                                    minWidth: 120,
                                    paddingVertical: 14,
                                    paddingHorizontal: 16,
                                    margin: 6,
                                    borderRadius: 24,
                                    borderWidth: 2.5,
                                    borderColor: isPopped ? '#CBD5E1' : '#FFFFFF',
                                  },
                                ]}
                              >
                                <Text style={styles.bubbleEmoji}>
                                  {isPopped ? '💥' : '🎈'}
                                </Text>
                                <Text
                                  style={[
                                    styles.bubbleLabel,
                                    {
                                      fontSize: 18,
                                      fontWeight: '800',
                                      color: isPopped ? '#94A3B8' : '#1E293B',
                                      textAlign: 'center',
                                    },
                                  ]}
                                >
                                  {isPopped ? 'POP!' : opt.text}
                                </Text>
                              </TouchableOpacity>
                            );
                          })}
                        </View>
                      </View>
                    );
                  })()}
                  <Text style={styles.stageHint}>
                    {activeLang === 'hi'
                      ? '👆 सही गुब्बारे पर टैप करके फोड़ें और कॉम्बो बनाएं! 🎈'
                      : '👆 Tap the correct bubble to pop it and build your combo! 🎈'}
                  </Text>
                </View>
              )}

              {/* GAME 1 STAGE: BUBBLE POPPER */}
              {activeGame === 'bubble_pop' && (
                <View style={styles.bubbleStageContainer}>
                  <View style={styles.bubbleGrid}>
                    {BUBBLE_CHALLENGES[currentRound % BUBBLE_CHALLENGES.length].options.map(
                      (opt) => {
                        const isPopped = poppedBubbleIds.includes(opt.id);
                        return (
                          <TouchableOpacity
                            key={opt.id}
                            activeOpacity={0.8}
                            disabled={isPopped}
                            onPress={() => handleBubbleTap(opt)}
                            style={[
                              styles.bubblePod,
                              {
                                backgroundColor: isPopped ? '#F1F5F9' : opt.color,
                                transform: [{ scale: opt.sizeScale }],
                                opacity: isPopped ? 0.35 : 1,
                              },
                            ]}
                          >
                            <Text style={styles.bubbleEmoji}>
                              {isPopped ? '💥' : opt.emoji}
                            </Text>
                            <Text style={styles.bubbleLabel}>
                              {isPopped
                                ? 'POP!'
                                : activeLang === 'hi'
                                ? opt.labelHi
                                : opt.labelEn}
                            </Text>
                          </TouchableOpacity>
                        );
                      }
                    )}
                  </View>
                  <Text style={styles.stageHint}>
                    {activeLang === 'hi'
                      ? '👆 सही गुब्बारे पर अपनी उंगली से टैप करके फोड़ें!'
                      : '👆 Tap the correct bubble to pop it with real sound!'}
                  </Text>
                </View>
              )}

              {/* GAME 2 STAGE: SEESAW SLAM */}
              {activeGame === 'seesaw_slam' && (
                <View style={styles.seesawStageContainer}>
                  {(() => {
                    const ch = SEESAW_CHALLENGES[currentRound % SEESAW_CHALLENGES.length];
                    return (
                      <View style={styles.seesawPhysicsWrapper}>
                        {/* Dynamic Tilting Beam */}
                        <Animated.View
                          style={[
                            styles.seesawBeam,
                            { transform: [{ rotate: tiltInterpolation }] },
                          ]}
                        >
                          {/* Left Pan */}
                          <TouchableOpacity
                            style={[styles.seesawSeat, styles.seatLeft]}
                            activeOpacity={0.85}
                            onPress={() => handleSeesawSideTap('left')}
                          >
                            <Text style={styles.seatEmoji}>{ch.leftItem.emoji}</Text>
                            <Text style={styles.seatLabel}>
                              {activeLang === 'hi' ? ch.leftItem.labelHi : ch.leftItem.labelEn}
                            </Text>
                            <View style={styles.tapPromptPill}>
                              <Text style={styles.tapPromptText}>
                                {activeLang === 'hi' ? 'चुनें' : 'TAP'}
                              </Text>
                            </View>
                          </TouchableOpacity>

                          {/* Center Fulcrum Pivot */}
                          <View style={styles.seesawCenterPivot}>
                            <Text style={{ fontSize: 16 }}>🔘</Text>
                          </View>

                          {/* Right Pan */}
                          <TouchableOpacity
                            style={[styles.seesawSeat, styles.seatRight]}
                            activeOpacity={0.85}
                            onPress={() => handleSeesawSideTap('right')}
                          >
                            <Text style={styles.seatEmoji}>{ch.rightItem.emoji}</Text>
                            <Text style={styles.seatLabel}>
                              {activeLang === 'hi' ? ch.rightItem.labelHi : ch.rightItem.labelEn}
                            </Text>
                            <View style={styles.tapPromptPill}>
                              <Text style={styles.tapPromptText}>
                                {activeLang === 'hi' ? 'चुनें' : 'TAP'}
                              </Text>
                            </View>
                          </TouchableOpacity>
                        </Animated.View>

                        {/* Seesaw Base Triangle */}
                        <View style={styles.seesawTriangleBase}>
                          <Text style={{ fontSize: 40 }}>▲</Text>
                        </View>
                      </View>
                    );
                  })()}
                  <Text style={styles.stageHint}>
                    {activeLang === 'hi'
                      ? 'सी-सॉ को देखकर बताएं कौन सा भारी या हल्का है!'
                      : 'Tap the correct side to slam the seesaw down!'}
                  </Text>
                </View>
              )}

              {/* GAME 3 STAGE: FEED FRENZY */}
              {activeGame === 'feed_frenzy' && (
                <View style={styles.feedStageContainer}>
                  {(() => {
                    const ch = FEED_CHALLENGES[currentRound % FEED_CHALLENGES.length];
                    return (
                      <View style={styles.feedInnerBox}>
                        {/* Hungry Animal Mascot */}
                        <View style={styles.animalMascotPod}>
                          <Text style={styles.animalMascotEmoji}>{ch.animalEmoji}</Text>
                          <Text style={styles.animalMascotName}>
                            {activeLang === 'hi' ? ch.animalNameHi : ch.animalNameEn}
                          </Text>
                          <View style={styles.fedCounterPill}>
                            <Text style={styles.fedCounterText}>
                              {activeLang === 'hi'
                                ? `खाया: ${fedCount} / ${ch.targetCount}`
                                : `Fed: ${fedCount} of ${ch.targetCount}`}
                            </Text>
                          </View>
                        </View>

                        {/* Food Plate with Tappable Food items */}
                        <View style={styles.foodPlateCard}>
                          <Text style={styles.plateLabel}>
                            {activeLang === 'hi' ? 'थाली से एक-एक करके खिलाएं:' : 'Tap to feed one by one:'}
                          </Text>
                          <View style={styles.foodItemsRow}>
                            {Array.from({ length: ch.availableCount }).map((_, idx) => {
                              const isFed = idx < fedCount;
                              return (
                                <TouchableOpacity
                                  key={idx}
                                  activeOpacity={0.7}
                                  disabled={isFed}
                                  onPress={() => handleFeedItemTap(idx)}
                                  style={[
                                    styles.foodItemBubble,
                                    isFed && styles.foodItemBubbleFed,
                                  ]}
                                >
                                  <Text style={styles.foodItemEmoji}>
                                    {isFed ? '😋' : ch.foodEmoji}
                                  </Text>
                                  <Text style={styles.foodItemIndex}>
                                    {isFed ? '✓' : idx + 1}
                                  </Text>
                                </TouchableOpacity>
                              );
                            })}
                          </View>
                        </View>
                      </View>
                    );
                  })()}
                  <Text style={styles.stageHint}>
                    {activeLang === 'hi'
                      ? 'जितनी संख्या बोली है, उतने फल गिनकर खिलाएं!'
                      : 'Tap exactly the target count to feed the hungry friend!'}
                  </Text>
                </View>
              )}

              {/* GAME 4 STAGE: SHAPE NINJA */}
              {activeGame === 'shape_ninja' && (
                <View style={styles.shapeStageContainer}>
                  {(() => {
                    const ch = SHAPE_CHALLENGES[currentRound % SHAPE_CHALLENGES.length];
                    return (
                      <View style={{ width: '100%', alignItems: 'center' }}>
                        {/* Pattern Strip if exists */}
                        {ch.patternSequence && (
                          <View style={styles.patternStrip}>
                            {ch.patternSequence.map((sym, idx) => (
                              <View
                                key={idx}
                                style={[
                                  styles.patternSymBox,
                                  sym === '❓' && styles.patternSymBoxQuestion,
                                ]}
                              >
                                <Text style={styles.patternSymText}>{sym}</Text>
                              </View>
                            ))}
                          </View>
                        )}

                        {/* Shape Options Grid */}
                        <View style={styles.shapeOptionsGrid}>
                          {ch.options.map((opt) => (
                            <TouchableOpacity
                              key={opt.id}
                              activeOpacity={0.8}
                              onPress={() => handleShapeTap(opt)}
                              style={[
                                styles.shapeOptionCard,
                                { backgroundColor: opt.color },
                              ]}
                            >
                              <Text style={styles.shapeOptionEmoji}>{opt.emoji}</Text>
                              <Text style={styles.shapeOptionLabel}>
                                {activeLang === 'hi' ? opt.labelHi : opt.labelEn}
                              </Text>
                            </TouchableOpacity>
                          ))}
                        </View>
                      </View>
                    );
                  })()}
                  <Text style={styles.stageHint}>
                    {activeLang === 'hi'
                      ? 'सही आकृति या पैटर्न पूरा करने वाली वस्तु पर टैप करें!'
                      : 'Tap the correct shape or pattern piece to win!'}
                  </Text>
                </View>
              )}

              {/* GAME 5 STAGE: ALPHABET POP */}
              {activeGame === 'alphabet_pop' && (
                <View style={styles.bubbleStageContainer}>
                  {(() => {
                    const ch = ALPHABET_POP_CHALLENGES[currentRound % ALPHABET_POP_CHALLENGES.length];
                    return (
                      <View style={styles.bubbleGrid}>
                        {ch.options.map((opt) => {
                          const isPopped = poppedBubbleIds.includes(opt.id);
                          return (
                            <TouchableOpacity
                              key={opt.id}
                              activeOpacity={0.8}
                              disabled={isPopped}
                              onPress={() => handleAlphabetPopTap(opt)}
                              style={[
                                styles.bubblePod,
                                {
                                  backgroundColor: isPopped ? '#F1F5F9' : opt.color,
                                  opacity: isPopped ? 0.35 : 1,
                                },
                              ]}
                            >
                              <Text style={styles.bubbleEmoji}>
                                {isPopped ? '💥' : opt.emoji}
                              </Text>
                              <Text
                                style={[
                                  styles.bubbleLabel,
                                  { fontSize: 24, fontWeight: '900', color: '#1E293B' },
                                ]}
                              >
                                {isPopped ? 'POP!' : opt.letter}
                              </Text>
                              {!isPopped && (
                                <Text
                                  style={{
                                    fontSize: 13,
                                    fontWeight: '700',
                                    color: '#64748B',
                                    marginTop: 2,
                                  }}
                                >
                                  {activeLang === 'hi' ? opt.wordHi : opt.wordEn}
                                </Text>
                              )}
                            </TouchableOpacity>
                          );
                        })}
                      </View>
                    );
                  })()}
                  <Text style={styles.stageHint}>
                    {activeLang === 'hi'
                      ? '👆 सही अक्षर और चित्र वाले गुब्बारे पर टैप करके फोड़ें!'
                      : '👆 Tap the balloon with the target letter to pop it!'}
                  </Text>
                </View>
              )}

              {/* GAME 6 STAGE: HINDI SWAR POP */}
              {activeGame === 'hindi_swar_pop' && (
                <View style={styles.bubbleStageContainer}>
                  {(() => {
                    const ch = HINDI_SWAR_POP_CHALLENGES[currentRound % HINDI_SWAR_POP_CHALLENGES.length];
                    return (
                      <View style={styles.bubbleGrid}>
                        {ch.options.map((opt) => {
                          const isPopped = poppedBubbleIds.includes(opt.id);
                          return (
                            <TouchableOpacity
                              key={opt.id}
                              activeOpacity={0.8}
                              disabled={isPopped}
                              onPress={() => handleHindiSwarPopTap(opt)}
                              style={[
                                styles.bubblePod,
                                {
                                  backgroundColor: isPopped ? '#F1F5F9' : opt.color,
                                  opacity: isPopped ? 0.35 : 1,
                                },
                              ]}
                            >
                              <Text style={styles.bubbleEmoji}>
                                {isPopped ? '💥' : opt.emoji}
                              </Text>
                              <Text
                                style={[
                                  styles.bubbleLabel,
                                  { fontSize: 26, fontWeight: '900', color: '#059669' },
                                ]}
                              >
                                {isPopped ? 'POP!' : opt.letter}
                              </Text>
                              {!isPopped && (
                                <Text
                                  style={{
                                    fontSize: 13,
                                    fontWeight: '700',
                                    color: '#065F46',
                                    marginTop: 2,
                                  }}
                                >
                                  {activeLang === 'hi' ? opt.wordHi : opt.wordEn}
                                </Text>
                              )}
                            </TouchableOpacity>
                          );
                        })}
                      </View>
                    );
                  })()}
                  <Text style={styles.stageHint}>
                    {activeLang === 'hi'
                      ? '👆 सही स्वर और चित्र वाले गुब्बारे पर टैप करके फोड़ें!'
                      : '👆 Tap the balloon with the target swar to pop it!'}
                  </Text>
                </View>
              )}

              {/* GAME 7 STAGE: HINDI VYANJAN CATCH */}
              {activeGame === 'hindi_vyanjan_catch' && (
                <View style={styles.bubbleStageContainer}>
                  {(() => {
                    const ch = HINDI_VYANJAN_CATCH_CHALLENGES[currentRound % HINDI_VYANJAN_CATCH_CHALLENGES.length];
                    return (
                      <View style={styles.bubbleGrid}>
                        {ch.options.map((opt) => {
                          const isPopped = poppedBubbleIds.includes(opt.id);
                          return (
                            <TouchableOpacity
                              key={opt.id}
                              activeOpacity={0.8}
                              disabled={isPopped}
                              onPress={() => handleHindiVyanjanTap(opt)}
                              style={[
                                styles.bubblePod,
                                {
                                  backgroundColor: isPopped ? '#F1F5F9' : opt.color,
                                  opacity: isPopped ? 0.35 : 1,
                                },
                              ]}
                            >
                              <Text style={styles.bubbleEmoji}>
                                {isPopped ? '✨' : opt.emoji}
                              </Text>
                              <Text
                                style={[
                                  styles.bubbleLabel,
                                  { fontSize: 26, fontWeight: '900', color: '#B45309' },
                                ]}
                              >
                                {isPopped ? 'CAUGHT!' : opt.letter}
                              </Text>
                              {!isPopped && (
                                <Text
                                  style={{
                                    fontSize: 13,
                                    fontWeight: '700',
                                    color: '#92400E',
                                    marginTop: 2,
                                  }}
                                >
                                  {activeLang === 'hi' ? opt.wordHi : opt.wordEn}
                                </Text>
                              )}
                            </TouchableOpacity>
                          );
                        })}
                      </View>
                    );
                  })()}
                  <Text style={styles.stageHint}>
                    {activeLang === 'hi'
                      ? '👆 सही व्यंजन और चित्र पर टैप करके पकड़ें!'
                      : '👆 Tap the kite with the target consonant to catch it!'}
                  </Text>
                </View>
              )}

              {/* GAME 8 STAGE: HINDI SOUND SAFARI */}
              {activeGame === 'hindi_sound_safari' && (
                <View style={styles.bubbleStageContainer}>
                  {(() => {
                    const ch = HINDI_SOUND_SAFARI_CHALLENGES[currentRound % HINDI_SOUND_SAFARI_CHALLENGES.length];
                    return (
                      <View style={styles.bubbleGrid}>
                        {ch.options.map((opt) => {
                          const isPopped = poppedBubbleIds.includes(opt.id);
                          return (
                            <TouchableOpacity
                              key={opt.id}
                              activeOpacity={0.8}
                              disabled={isPopped}
                              onPress={() => handleHindiSoundSafariTap(opt)}
                              style={[
                                styles.bubblePod,
                                {
                                  backgroundColor: isPopped ? '#F1F5F9' : opt.color,
                                  opacity: isPopped ? 0.35 : 1,
                                  minWidth: 95,
                                },
                              ]}
                            >
                              <Text style={styles.bubbleEmoji}>
                                {isPopped ? '🎉' : opt.emoji}
                              </Text>
                              <Text
                                style={[
                                  styles.bubbleLabel,
                                  { fontSize: 18, fontWeight: '800', color: '#15803D' },
                                ]}
                              >
                                {activeLang === 'hi' ? opt.animalHi : opt.animalEn}
                              </Text>
                              <Text
                                style={{
                                  fontSize: 12,
                                  fontWeight: '700',
                                  color: '#047857',
                                  marginTop: 2,
                                }}
                              >
                                {isPopped ? 'MATCHED!' : opt.soundHi}
                              </Text>
                            </TouchableOpacity>
                          );
                        })}
                      </View>
                    );
                  })()}
                  <Text style={styles.stageHint}>
                    {activeLang === 'hi'
                      ? '👂 बोली सुनकर सही पशु या पक्षी पर टैप करें!'
                      : '👂 Listen to the sound and tap the matching animal or bird!'}
                  </Text>
                </View>
              )}

              {/* GAME 9 STAGE: ENGLISH RHYME & OPPOSITE CATCH */}
              {activeGame === 'english_rhyme_catch' && (
                <View style={styles.bubbleStageContainer}>
                  {(() => {
                    const ch = ENGLISH_RHYME_CHALLENGES[currentRound % ENGLISH_RHYME_CHALLENGES.length];
                    return (
                      <View style={styles.bubbleGrid}>
                        {ch.options.map((opt) => {
                          const isPopped = poppedBubbleIds.includes(opt.id);
                          return (
                            <TouchableOpacity
                              key={opt.id}
                              activeOpacity={0.8}
                              disabled={isPopped}
                              onPress={() => handleEnglishRhymeTap(opt)}
                              style={[
                                styles.bubblePod,
                                {
                                  backgroundColor: isPopped ? '#F1F5F9' : opt.color,
                                  opacity: isPopped ? 0.35 : 1,
                                  minWidth: 100,
                                },
                              ]}
                            >
                              <Text style={styles.bubbleEmoji}>
                                {isPopped ? '🎉' : opt.emoji}
                              </Text>
                              <Text
                                style={[
                                  styles.bubbleLabel,
                                  { fontSize: 20, fontWeight: '900', color: '#1D4ED8' },
                                ]}
                              >
                                {isPopped ? 'CAUGHT!' : opt.wordEn}
                              </Text>
                              {!isPopped && (
                                <Text
                                  style={{
                                    fontSize: 13,
                                    fontWeight: '700',
                                    color: '#475569',
                                    marginTop: 2,
                                  }}
                                >
                                  {activeLang === 'hi' ? opt.wordHi : opt.wordEn}
                                </Text>
                              )}
                            </TouchableOpacity>
                          );
                        })}
                      </View>
                    );
                  })()}
                  <Text style={styles.stageHint}>
                    {activeLang === 'hi'
                      ? '👆 सही तुकबंदी या उल्टे शब्द पर टैप करके पकड़ें!'
                      : '👆 Tap the matching rhyming or opposite word to catch it!'}
                  </Text>
                </View>
              )}

              {/* GAME 10 STAGE: ENGLISH WORD SAFARI */}
              {activeGame === 'english_word_safari' && (
                <View style={styles.bubbleStageContainer}>
                  {(() => {
                    const ch = ENGLISH_SAFARI_CHALLENGES[currentRound % ENGLISH_SAFARI_CHALLENGES.length];
                    return (
                      <View style={styles.bubbleGrid}>
                        {ch.options.map((opt) => {
                          const isPopped = poppedBubbleIds.includes(opt.id);
                          return (
                            <TouchableOpacity
                              key={opt.id}
                              activeOpacity={0.8}
                              disabled={isPopped}
                              onPress={() => handleEnglishSafariTap(opt)}
                              style={[
                                styles.bubblePod,
                                {
                                  backgroundColor: isPopped ? '#F1F5F9' : opt.color,
                                  opacity: isPopped ? 0.35 : 1,
                                  minWidth: 100,
                                },
                              ]}
                            >
                              <Text style={styles.bubbleEmoji}>
                                {isPopped ? '🌟' : opt.emoji}
                              </Text>
                              <Text
                                style={[
                                  styles.bubbleLabel,
                                  { fontSize: 18, fontWeight: '800', color: '#B45309' },
                                ]}
                              >
                                {isPopped ? 'MATCHED!' : opt.labelEn}
                              </Text>
                              {!isPopped && (
                                <Text
                                  style={{
                                    fontSize: 12,
                                    fontWeight: '700',
                                    color: '#78350F',
                                    marginTop: 2,
                                  }}
                                >
                                  {activeLang === 'hi' ? opt.labelHi : opt.labelEn}
                                </Text>
                              )}
                            </TouchableOpacity>
                          );
                        })}
                      </View>
                    );
                  })()}
                  <Text style={styles.stageHint}>
                    {activeLang === 'hi'
                      ? '👆 सही चित्र और शब्द पर अपनी उंगली से टैप करें!'
                      : '👆 Tap the correct picture and word to complete the safari!'}
                  </Text>
                </View>
              )}

              {/* GAME 11 STAGE: MATH NUMBER TRAIN */}
              {activeGame === 'math_number_train' && (
                <View style={styles.bubbleStageContainer}>
                  {(() => {
                    const ch = MATH_NUMBER_TRAIN_CHALLENGES[currentRound % MATH_NUMBER_TRAIN_CHALLENGES.length];
                    return (
                      <View style={{ width: '100%', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#EFF6FF', borderRadius: 20, padding: 14, marginBottom: 16, borderWidth: 1.5, borderColor: '#BFDBFE', width: '100%' }}>
                          <Text style={{ fontSize: 36, marginRight: 6 }}>🚂</Text>
                          <View style={{ flexDirection: 'row', gap: 6, flexWrap: 'wrap', justifyContent: 'center' }}>
                            {ch.trainWagons.map((w) => (
                              <View
                                key={w.id}
                                style={{
                                  width: 44,
                                  height: 48,
                                  borderRadius: 12,
                                  backgroundColor: w.isMissing ? '#FEF08A' : '#FFFFFF',
                                  borderWidth: w.isMissing ? 2 : 1.5,
                                  borderColor: w.isMissing ? '#EAB308' : '#CBD5E1',
                                  borderStyle: w.isMissing ? 'dashed' : 'solid',
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                  ...SHADOWS.small,
                                }}
                              >
                                <Text style={{ fontSize: 20, fontWeight: '900', color: w.isMissing ? '#B45309' : '#1E293B' }}>
                                  {w.num}
                                </Text>
                              </View>
                            ))}
                          </View>
                        </View>

                        <View style={styles.bubbleGrid}>
                          {ch.options.map((opt) => {
                            const isPopped = poppedBubbleIds.includes(opt.id);
                            return (
                              <TouchableOpacity
                                key={opt.id}
                                activeOpacity={0.8}
                                disabled={isPopped}
                                onPress={() => handleNumberTrainTap(opt)}
                                style={[
                                  styles.bubblePod,
                                  {
                                    backgroundColor: isPopped ? '#F1F5F9' : opt.color,
                                    opacity: isPopped ? 0.35 : 1,
                                    minWidth: 95,
                                  },
                                ]}
                              >
                                <Text style={styles.bubbleEmoji}>{isPopped ? '🚂' : '🚃'}</Text>
                                <Text style={[styles.bubbleLabel, { fontSize: 24, fontWeight: '900', color: '#1D4ED8' }]}>
                                  {isPopped ? 'POP!' : opt.num}
                                </Text>
                              </TouchableOpacity>
                            );
                          })}
                        </View>
                      </View>
                    );
                  })()}
                  <Text style={styles.stageHint}>
                    {activeLang === 'hi'
                      ? '👆 खाली डिब्बे में आने वाले सही नंबर पर टैप करें!'
                      : '👆 Tap the missing wagon number to make the train roll!'}
                  </Text>
                </View>
              )}

              {/* GAME 12 STAGE: MORE VS LESS */}
              {activeGame === 'math_more_less' && (
                <View style={styles.bubbleStageContainer}>
                  {(() => {
                    const ch = MATH_MORE_LESS_CHALLENGES[currentRound % MATH_MORE_LESS_CHALLENGES.length];
                    return (
                      <View style={{ width: '100%', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', gap: 14, justifyContent: 'center', width: '100%', marginBottom: 12 }}>
                          <TouchableOpacity
                            activeOpacity={0.85}
                            onPress={() => handleMoreLessTap(ch.leftBasket)}
                            style={{
                              flex: 1,
                              backgroundColor: ch.leftBasket.color,
                              borderRadius: 20,
                              borderWidth: 2,
                              borderColor: '#E2E8F0',
                              padding: 16,
                              alignItems: 'center',
                              ...SHADOWS.small,
                            }}
                          >
                            <Text style={{ fontSize: 36, marginBottom: 8 }}>🧺</Text>
                            <Text style={{ fontSize: 18, marginBottom: 6, letterSpacing: 2 }}>
                              {Array(ch.leftBasket.count).fill(ch.leftBasket.emoji).join(' ')}
                            </Text>
                            <View style={{ backgroundColor: '#FFFFFF', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12, borderWidth: 1, borderColor: '#CBD5E1' }}>
                              <Text style={{ fontSize: 13, fontWeight: '900', color: '#1E293B' }}>
                                {activeLang === 'hi' ? ch.leftBasket.itemLabelHi : ch.leftBasket.itemLabelEn}
                              </Text>
                            </View>
                          </TouchableOpacity>

                          <TouchableOpacity
                            activeOpacity={0.85}
                            onPress={() => handleMoreLessTap(ch.rightBasket)}
                            style={{
                              flex: 1,
                              backgroundColor: ch.rightBasket.color,
                              borderRadius: 20,
                              borderWidth: 2,
                              borderColor: '#E2E8F0',
                              padding: 16,
                              alignItems: 'center',
                              ...SHADOWS.small,
                            }}
                          >
                            <Text style={{ fontSize: 36, marginBottom: 8 }}>🧺</Text>
                            <Text style={{ fontSize: 18, marginBottom: 6, letterSpacing: 2 }}>
                              {Array(ch.rightBasket.count).fill(ch.rightBasket.emoji).join(' ')}
                            </Text>
                            <View style={{ backgroundColor: '#FFFFFF', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12, borderWidth: 1, borderColor: '#CBD5E1' }}>
                              <Text style={{ fontSize: 13, fontWeight: '900', color: '#1E293B' }}>
                                {activeLang === 'hi' ? ch.rightBasket.itemLabelHi : ch.rightBasket.itemLabelEn}
                              </Text>
                            </View>
                          </TouchableOpacity>
                        </View>
                      </View>
                    );
                  })()}
                  <Text style={styles.stageHint}>
                    {activeLang === 'hi'
                      ? '👆 सही टोकरी पर टैप करें (ज्यादा या कम)!'
                      : '👆 Tap the correct basket (More or Less)!'}
                  </Text>
                </View>
              )}

              {/* GAME 13 STAGE: FROG LILYPAD HOP */}
              {activeGame === 'math_color_pattern' && (
                <View style={styles.bubbleStageContainer}>
                  {(() => {
                    const ch = MATH_COLOR_PATTERN_CHALLENGES[currentRound % MATH_COLOR_PATTERN_CHALLENGES.length];
                    return (
                      <View style={{ width: '100%', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#F0FDF4', borderRadius: 20, padding: 14, marginBottom: 16, borderWidth: 1.5, borderColor: '#BBF7D0', width: '100%', gap: 8 }}>
                          {ch.patternSteps.map((s) => (
                            <View
                              key={s.id}
                              style={{
                                width: 48,
                                height: 50,
                                borderRadius: 16,
                                backgroundColor: s.isMissing ? '#FEF9C3' : '#FFFFFF',
                                borderWidth: s.isMissing ? 2 : 1.5,
                                borderColor: s.isMissing ? '#EAB308' : '#86EFAC',
                                borderStyle: s.isMissing ? 'dashed' : 'solid',
                                justifyContent: 'center',
                                alignItems: 'center',
                                ...SHADOWS.small,
                              }}
                            >
                              <Text style={{ fontSize: 22 }}>{s.emoji}</Text>
                              <Text style={{ fontSize: 10, fontWeight: '800', color: '#475569', marginTop: 2 }}>
                                {activeLang === 'hi' ? s.labelHi : s.labelEn}
                              </Text>
                            </View>
                          ))}
                        </View>

                        <View style={styles.bubbleGrid}>
                          {ch.options.map((opt) => {
                            const isPopped = poppedBubbleIds.includes(opt.id);
                            return (
                              <TouchableOpacity
                                key={opt.id}
                                activeOpacity={0.8}
                                disabled={isPopped}
                                onPress={() => handleColorPatternTap(opt)}
                                style={[
                                  styles.bubblePod,
                                  {
                                    backgroundColor: isPopped ? '#F1F5F9' : opt.color,
                                    opacity: isPopped ? 0.35 : 1,
                                    minWidth: 95,
                                  },
                                ]}
                              >
                                <Text style={styles.bubbleEmoji}>{isPopped ? '🐸' : opt.emoji}</Text>
                                <Text style={[styles.bubbleLabel, { fontSize: 15, fontWeight: '900', color: '#15803D' }]}>
                                  {isPopped ? 'BOING!' : activeLang === 'hi' ? opt.labelHi : opt.labelEn}
                                </Text>
                              </TouchableOpacity>
                            );
                          })}
                        </View>
                      </View>
                    );
                  })()}
                  <Text style={styles.stageHint}>
                    {activeLang === 'hi'
                      ? '👆 मेंढक के लिए सही अगला रंगीन पत्ता चुनें!'
                      : '👆 Tap the next pattern lilypad for Freddie the Frog!'}
                  </Text>
                </View>
              )}

              {/* GAME 14 STAGE: PHONICS SOUND EXPRESS */}
              {activeGame === 'english_phonic_train' && (
                <View style={styles.bubbleStageContainer}>
                  {(() => {
                    const ch = ENGLISH_PHONIC_TRAIN_CHALLENGES[currentRound % ENGLISH_PHONIC_TRAIN_CHALLENGES.length];
                    return (
                      <View style={{ width: '100%', alignItems: 'center' }}>
                        <View style={{ backgroundColor: '#E0F2FE', paddingHorizontal: 18, paddingVertical: 10, borderRadius: 18, borderWidth: 1.5, borderColor: '#BAE6FD', marginBottom: 16, alignItems: 'center' }}>
                          <Text style={{ fontSize: 20, fontWeight: '900', color: '#0369A1' }}>
                            🔊 Sound: {ch.phonicsSound}
                          </Text>
                        </View>

                        <View style={styles.bubbleGrid}>
                          {ch.options.map((opt) => {
                            const isPopped = poppedBubbleIds.includes(opt.id);
                            return (
                              <TouchableOpacity
                                key={opt.id}
                                activeOpacity={0.8}
                                disabled={isPopped}
                                onPress={() => handlePhonicTrainTap(opt)}
                                style={[
                                  styles.bubblePod,
                                  {
                                    backgroundColor: isPopped ? '#F1F5F9' : opt.color,
                                    opacity: isPopped ? 0.35 : 1,
                                    minWidth: 100,
                                  },
                                ]}
                              >
                                <Text style={styles.bubbleEmoji}>{isPopped ? '🌟' : opt.emoji}</Text>
                                <Text style={[styles.bubbleLabel, { fontSize: 18, fontWeight: '900', color: '#0369A1' }]}>
                                  {isPopped ? 'BINGO!' : `${opt.letter} - ${opt.wordEn}`}
                                </Text>
                              </TouchableOpacity>
                            );
                          })}
                        </View>
                      </View>
                    );
                  })()}
                  <Text style={styles.stageHint}>
                    {activeLang === 'hi'
                      ? '👂 ध्वनि सुनकर सही चित्र पर टैप करें!'
                      : '👂 Listen to the sound and tap the matching picture!'}
                  </Text>
                </View>
              )}

              {/* GAME 15 STAGE: JUNIOR CVC WORD BUILDER */}
              {activeGame === 'english_cvc_pop' && (
                <View style={styles.bubbleStageContainer}>
                  {(() => {
                    const ch = ENGLISH_CVC_POP_CHALLENGES[currentRound % ENGLISH_CVC_POP_CHALLENGES.length];
                    return (
                      <View style={{ width: '100%', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#FAF5FF', paddingHorizontal: 20, paddingVertical: 12, borderRadius: 20, borderWidth: 2, borderColor: '#E9D5FF', marginBottom: 18, gap: 10 }}>
                          <Text style={{ fontSize: 34 }}>{ch.emoji}</Text>
                          <Text style={{ fontSize: 32, fontWeight: '900', color: '#7E22CE', letterSpacing: 4 }}>
                            {ch.wordPattern}
                          </Text>
                        </View>

                        <View style={styles.bubbleGrid}>
                          {ch.options.map((opt) => {
                            const isPopped = poppedBubbleIds.includes(opt.id);
                            return (
                              <TouchableOpacity
                                key={opt.id}
                                activeOpacity={0.8}
                                disabled={isPopped}
                                onPress={() => handleCvcPopTap(opt)}
                                style={[
                                  styles.bubblePod,
                                  {
                                    backgroundColor: isPopped ? '#F1F5F9' : opt.color,
                                    opacity: isPopped ? 0.35 : 1,
                                    minWidth: 85,
                                  },
                                ]}
                              >
                                <Text style={styles.bubbleEmoji}>{isPopped ? '✨' : '🔤'}</Text>
                                <Text style={[styles.bubbleLabel, { fontSize: 28, fontWeight: '900', color: '#7E22CE' }]}>
                                  {isPopped ? 'POP!' : opt.letter}
                                </Text>
                              </TouchableOpacity>
                            );
                          })}
                        </View>
                      </View>
                    );
                  })()}
                  <Text style={styles.stageHint}>
                    {activeLang === 'hi'
                      ? '👆 शब्द पूरा करने के लिए सही वोवेल (A, E, I, O, U) पर टैप करें!'
                      : '👆 Tap the missing vowel to complete the word!'}
                  </Text>
                </View>
              )}

              {/* GAME 16 STAGE: ACTION DASH */}
              {activeGame === 'english_action_dash' && (
                <View style={styles.bubbleStageContainer}>
                  {(() => {
                    const ch = ENGLISH_ACTION_DASH_CHALLENGES[currentRound % ENGLISH_ACTION_DASH_CHALLENGES.length];
                    return (
                      <View style={styles.bubbleGrid}>
                        {ch.options.map((opt) => {
                          const isPopped = poppedBubbleIds.includes(opt.id);
                          return (
                            <TouchableOpacity
                              key={opt.id}
                              activeOpacity={0.8}
                              disabled={isPopped}
                              onPress={() => handleActionDashTap(opt)}
                              style={[
                                styles.bubblePod,
                                {
                                  backgroundColor: isPopped ? '#F1F5F9' : opt.color,
                                  opacity: isPopped ? 0.35 : 1,
                                  minWidth: 100,
                                },
                              ]}
                            >
                              <Text style={styles.bubbleEmoji}>{isPopped ? '🏃' : opt.emoji}</Text>
                              <Text style={[styles.bubbleLabel, { fontSize: 18, fontWeight: '900', color: '#B45309' }]}>
                                {isPopped ? 'SUPER!' : opt.verbEn}
                              </Text>
                              {!isPopped && (
                                <Text style={{ fontSize: 12, fontWeight: '700', color: '#78350F', marginTop: 2 }}>
                                  {opt.verbHi}
                                </Text>
                              )}
                            </TouchableOpacity>
                          );
                        })}
                      </View>
                    );
                  })()}
                  <Text style={styles.stageHint}>
                    {activeLang === 'hi'
                      ? '👆 पूछे गए सही एक्शन (कूदना, सोना, ताली बजाना) पर टैप करें!'
                      : '👆 Tap the matching action card (Jumping, Sleeping, Clapping)!'}
                  </Text>
                </View>
              )}

              {/* GAME 17 STAGE: HINDI VARNAMALA TRAIN */}
              {activeGame === 'hindi_varnamala_train' && (
                <View style={styles.bubbleStageContainer}>
                  {(() => {
                    const ch = HINDI_VARNAMALA_TRAIN_CHALLENGES[currentRound % HINDI_VARNAMALA_TRAIN_CHALLENGES.length];
                    return (
                      <View style={{ width: '100%', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#EFF6FF', borderRadius: 20, padding: 14, marginBottom: 16, borderWidth: 1.5, borderColor: '#BFDBFE', width: '100%' }}>
                          <Text style={{ fontSize: 36, marginRight: 6 }}>🚂</Text>
                          <View style={{ flexDirection: 'row', gap: 6, flexWrap: 'wrap', justifyContent: 'center' }}>
                            {ch.trainWagons.map((w) => (
                              <View
                                key={w.id}
                                style={{
                                  width: 46,
                                  height: 50,
                                  borderRadius: 12,
                                  backgroundColor: w.isMissing ? '#FEF08A' : '#FFFFFF',
                                  borderWidth: w.isMissing ? 2 : 1.5,
                                  borderColor: w.isMissing ? '#EAB308' : '#CBD5E1',
                                  borderStyle: w.isMissing ? 'dashed' : 'solid',
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                  ...SHADOWS.small,
                                }}
                              >
                                <Text style={{ fontSize: 22, fontWeight: '900', color: w.isMissing ? '#B45309' : '#1D4ED8' }}>
                                  {w.letter}
                                </Text>
                              </View>
                            ))}
                          </View>
                        </View>

                        <View style={styles.bubbleGrid}>
                          {ch.options.map((opt) => {
                            const isPopped = poppedBubbleIds.includes(opt.id);
                            return (
                              <TouchableOpacity
                                key={opt.id}
                                activeOpacity={0.8}
                                disabled={isPopped}
                                onPress={() => handleVarnamalaTrainTap(opt)}
                                style={[
                                  styles.bubblePod,
                                  {
                                    backgroundColor: isPopped ? '#F1F5F9' : opt.color,
                                    opacity: isPopped ? 0.35 : 1,
                                    minWidth: 95,
                                  },
                                ]}
                              >
                                <Text style={styles.bubbleEmoji}>{isPopped ? '🚂' : opt.emoji}</Text>
                                <Text style={[styles.bubbleLabel, { fontSize: 24, fontWeight: '900', color: '#1D4ED8' }]}>
                                  {isPopped ? 'छुक-छुक!' : opt.letter}
                                </Text>
                                {!isPopped && (
                                  <Text style={{ fontSize: 11, fontWeight: '700', color: '#1E40AF', marginTop: 2 }}>
                                    {opt.wordHi}
                                  </Text>
                                )}
                              </TouchableOpacity>
                            );
                          })}
                        </View>
                      </View>
                    );
                  })()}
                  <Text style={styles.stageHint}>
                    {activeLang === 'hi'
                      ? '👆 रेलगाड़ी में आने वाले सही अगले हिंदी अक्षर पर टैप करें!'
                      : '👆 Tap the next Hindi letter in sequence to roll the train!'}
                  </Text>
                </View>
              )}

              {/* GAME 18 STAGE: HINDI SHABD MILAN */}
              {activeGame === 'hindi_shabd_milan' && (
                <View style={styles.bubbleStageContainer}>
                  {(() => {
                    const ch = HINDI_SHABD_MILAN_CHALLENGES[currentRound % HINDI_SHABD_MILAN_CHALLENGES.length];
                    return (
                      <View style={{ width: '100%', alignItems: 'center' }}>
                        <View style={{ backgroundColor: '#FEF3C7', paddingHorizontal: 22, paddingVertical: 12, borderRadius: 20, borderWidth: 2, borderColor: '#FDE68A', marginBottom: 16, alignItems: 'center' }}>
                          <Text style={{ fontSize: 44, marginBottom: 2 }}>{ch.targetEmoji}</Text>
                          <Text style={{ fontSize: 14, fontWeight: '800', color: '#B45309' }}>
                            {activeLang === 'hi' ? `चित्र: ${ch.targetMeaningEn}` : `Picture: ${ch.targetMeaningEn}`}
                          </Text>
                        </View>

                        <View style={styles.bubbleGrid}>
                          {ch.options.map((opt) => {
                            const isPopped = poppedBubbleIds.includes(opt.id);
                            return (
                              <TouchableOpacity
                                key={opt.id}
                                activeOpacity={0.8}
                                disabled={isPopped}
                                onPress={() => handleShabdMilanTap(opt)}
                                style={[
                                  styles.bubblePod,
                                  {
                                    backgroundColor: isPopped ? '#F1F5F9' : opt.color,
                                    opacity: isPopped ? 0.35 : 1,
                                    minWidth: 95,
                                  },
                                ]}
                              >
                                <Text style={styles.bubbleEmoji}>{isPopped ? '✨' : opt.emoji}</Text>
                                <Text style={[styles.bubbleLabel, { fontSize: 24, fontWeight: '900', color: '#B45309' }]}>
                                  {isPopped ? 'सही!' : opt.wordHi}
                                </Text>
                                {!isPopped && (
                                  <Text style={{ fontSize: 11, fontWeight: '700', color: '#78350F', marginTop: 2 }}>
                                    {opt.wordEn}
                                  </Text>
                                )}
                              </TouchableOpacity>
                            );
                          })}
                        </View>
                      </View>
                    );
                  })()}
                  <Text style={styles.stageHint}>
                    {activeLang === 'hi'
                      ? '👆 चित्र देखकर सही दो-अक्षर वाले शब्द पर टैप करें!'
                      : '👆 Tap the correct 2-letter Hindi word matching the picture!'}
                  </Text>
                </View>
              )}

              {/* GAME 19 STAGE: HINDI RANG GINTI */}
              {activeGame === 'hindi_rang_ginti' && (
                <View style={styles.bubbleStageContainer}>
                  {(() => {
                    const ch = HINDI_RANG_GINTI_CHALLENGES[currentRound % HINDI_RANG_GINTI_CHALLENGES.length];
                    return (
                      <View style={styles.bubbleGrid}>
                        {ch.options.map((opt) => {
                          const isPopped = poppedBubbleIds.includes(opt.id);
                          return (
                            <TouchableOpacity
                              key={opt.id}
                              activeOpacity={0.8}
                              disabled={isPopped}
                              onPress={() => handleRangGintiTap(opt)}
                              style={[
                                styles.bubblePod,
                                {
                                  backgroundColor: isPopped ? '#F1F5F9' : opt.color,
                                  opacity: isPopped ? 0.35 : 1,
                                  minWidth: 105,
                                  paddingVertical: 12,
                                },
                              ]}
                            >
                              <Text style={{ fontSize: 20, letterSpacing: 2, marginBottom: 4 }}>
                                {isPopped ? '🎉' : opt.emojiCluster}
                              </Text>
                              <Text style={[styles.bubbleLabel, { fontSize: 15, fontWeight: '900', color: '#7E22CE' }]}>
                                {isPopped ? 'MATCHED!' : opt.labelHi}
                              </Text>
                              {!isPopped && (
                                <Text style={{ fontSize: 11, fontWeight: '700', color: '#6B21A8', marginTop: 2 }}>
                                  {opt.labelEn}
                                </Text>
                              )}
                            </TouchableOpacity>
                          );
                        })}
                      </View>
                    );
                  })()}
                  <Text style={styles.stageHint}>
                    {activeLang === 'hi'
                      ? '👆 सही रंग और गिनती वाले कार्ड पर टैप करें!'
                      : '👆 Tap the card matching both color and count!'}
                  </Text>
                </View>
              )}
            </View>
          )}

          {/* ======================================================== */}
          {/* VICTORY & REWARD CELEBRATION MODAL */}
          {/* ======================================================== */}
          {isGameOver && (
            <View style={styles.victoryContainer}>
              <View style={styles.trophyBurstCircle}>
                <Text style={{ fontSize: 64 }}>🏆</Text>
              </View>

              <Text style={styles.victoryTitle}>
                {activeLang === 'hi' ? 'शानदार जीत! आप सुपर किड हैं!' : 'SUPER KID VICTORY! 🎉'}
              </Text>
              <Text style={styles.victorySub}>
                {activeLang === 'hi'
                  ? 'आपने सभी अवधारणाओं को बहुत ही शानदार तरीके से सीखा!'
                  : 'You mastered early math concepts through fun sensory games!'}
              </Text>

              {/* Reward Highlights */}
              <View style={styles.rewardStatsRow}>
                <View style={styles.rewardStatBox}>
                  <Text style={styles.rewardStatEmoji}>⭐</Text>
                  <Text style={styles.rewardStatVal}>+{starsWon}</Text>
                  <Text style={styles.rewardStatLbl}>
                    {activeLang === 'hi' ? 'सितारे' : 'Stars'}
                  </Text>
                </View>
                <View style={styles.rewardStatBox}>
                  <Text style={styles.rewardStatEmoji}>💰</Text>
                  <Text style={styles.rewardStatVal}>+{starsWon * 20}</Text>
                  <Text style={styles.rewardStatLbl}>
                    {activeLang === 'hi' ? 'सिक्के' : 'Coins'}
                  </Text>
                </View>
                <View style={styles.rewardStatBox}>
                  <Text style={styles.rewardStatEmoji}>🎯</Text>
                  <Text style={styles.rewardStatVal}>{score}</Text>
                  <Text style={styles.rewardStatLbl}>
                    {activeLang === 'hi' ? 'स्कोर अंक' : 'Points'}
                  </Text>
                </View>
                <View style={styles.rewardStatBox}>
                  <Text style={styles.rewardStatEmoji}>🔥</Text>
                  <Text style={styles.rewardStatVal}>{combo}x</Text>
                  <Text style={styles.rewardStatLbl}>
                    {activeLang === 'hi' ? 'कॉम्बो' : 'Combo'}
                  </Text>
                </View>
              </View>

              {/* Action Buttons */}
              <View style={styles.victoryActionRow}>
                <TouchableOpacity
                  style={styles.victoryNextBtn}
                  activeOpacity={0.88}
                  onPress={() => setActiveGame('menu')}
                >
                  <Text style={styles.victoryNextText}>
                    {activeLang === 'hi' ? 'दूसरा खेल खेलें 🎮' : 'Play Another Game 🎮'}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.victoryDoneBtn}
                  activeOpacity={0.88}
                  onPress={() => {
                    stopSpeaking();
                    onClose();
                  }}
                >
                  <Text style={styles.victoryDoneText}>
                    {activeLang === 'hi' ? 'पूरा हुआ 👍' : 'Done for Today 👍'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(15, 23, 42, 0.75)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
  },
  arcadeContainer: {
    width: '100%',
    maxWidth: 580,
    maxHeight: '94%',
    backgroundColor: '#FFFFFF',
    borderRadius: 28,
    overflow: 'hidden',
    ...SHADOWS.large,
    flexDirection: 'column',
  },
  hudHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#F8FAFC',
    borderBottomWidth: 1.5,
    borderBottomColor: '#E2E8F0',
  },
  hudLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  hudRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  backBtn: {
    backgroundColor: '#EEF2F6',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 14,
  },
  backBtnText: {
    fontSize: 12,
    fontWeight: '800',
    color: '#334155',
  },
  arcadeBadge: {
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#FDE68A',
  },
  arcadeBadgeText: {
    fontSize: 11,
    fontWeight: '900',
    color: '#B45309',
  },
  hudCoinBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FEF9C3',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 14,
    gap: 4,
    borderWidth: 1,
    borderColor: '#FDE047',
  },
  hudCoinVal: {
    fontSize: 13,
    fontWeight: '900',
    color: '#854D0E',
  },
  hudScoreBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EFF6FF',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 14,
    gap: 4,
    borderWidth: 1,
    borderColor: '#BFDBFE',
  },
  hudScoreLabel: {
    fontSize: 14,
  },
  hudScoreVal: {
    fontSize: 13,
    fontWeight: '900',
    color: '#1E40AF',
  },
  comboFlameBadge: {
    backgroundColor: '#FFEDD5',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  comboFlameText: {
    fontSize: 12,
    fontWeight: '900',
    color: '#EA580C',
  },
  closeBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F1F5F9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeBtnText: {
    fontSize: 15,
    fontWeight: '900',
    color: '#64748B',
  },
  menuScrollView: {
    flex: 1,
  },
  menuScrollContent: {
    padding: 16,
    paddingBottom: 24,
  },
  menuHeroBanner: {
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    borderRadius: 20,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
  },
  menuHeroEmoji: {
    fontSize: 34,
    marginBottom: 4,
  },
  menuHeroTitle: {
    fontSize: 20,
    fontWeight: '900',
    color: '#0F172A',
    textAlign: 'center',
    marginBottom: 4,
  },
  menuHeroSub: {
    fontSize: 13,
    color: '#475569',
    textAlign: 'center',
    lineHeight: 18,
    marginBottom: 10,
  },
  gradePill: {
    backgroundColor: '#DCFCE7',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#86EFAC',
  },
  gradePillText: {
    fontSize: 12,
    fontWeight: '800',
    color: '#15803D',
  },
  arcadeSubjectTabsRow: {
    flexDirection: 'row',
    gap: 6,
    marginBottom: 14,
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  arcadeSubjTab: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
    backgroundColor: '#F1F5F9',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  arcadeSubjTabActive: {
    backgroundColor: '#2563EB',
    borderColor: '#1D4ED8',
    ...SHADOWS.small,
  },
  arcadeSubjTabText: {
    fontSize: 11,
    fontWeight: '800',
    color: '#475569',
  },
  arcadeSubjTabTextActive: {
    color: '#FFFFFF',
  },
  gameCardsGrid: {
    gap: 12,
    marginBottom: 16,
  },
  menuGameCard: {
    borderRadius: 20,
    borderWidth: 1.5,
    padding: 16,
    ...SHADOWS.small,
  },
  gameCardTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  gameCardBigEmoji: {
    fontSize: 32,
  },
  gameCardTag: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 12,
  },
  gameCardTagText: {
    fontSize: 11,
    fontWeight: '800',
  },
  gameCardTitle: {
    fontSize: 17,
    fontWeight: '900',
    color: '#0F172A',
    marginBottom: 4,
  },
  gameCardDesc: {
    fontSize: 12,
    color: '#475569',
    lineHeight: 17,
    marginBottom: 12,
  },
  gamePlayActionBtn: {
    alignSelf: 'flex-start',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 14,
  },
  gamePlayActionText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '900',
  },
  allRounderBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FEF3C7',
    borderRadius: 20,
    padding: 14,
    borderWidth: 1.5,
    borderColor: '#FDE68A',
    gap: 12,
  },
  allRounderIcon: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#FDE047',
    justifyContent: 'center',
    alignItems: 'center',
  },
  allRounderTitle: {
    fontSize: 15,
    fontWeight: '900',
    color: '#854D0E',
    marginBottom: 2,
  },
  allRounderSub: {
    fontSize: 11,
    color: '#713F12',
    lineHeight: 15,
  },
  allRounderGoBtn: {
    backgroundColor: '#CA8A04',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 14,
  },
  allRounderGoText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '900',
  },
  playArena: {
    flex: 1,
    padding: 16,
    justifyContent: 'space-between',
  },
  arenaPromptCard: {
    backgroundColor: '#F8FAFC',
    borderRadius: 20,
    padding: 14,
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    marginBottom: 12,
  },
  arenaPromptTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  roundIndicatorPill: {
    backgroundColor: '#EFF6FF',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  roundIndicatorText: {
    fontSize: 11,
    fontWeight: '800',
    color: '#2563EB',
  },
  missionHeadline: {
    fontSize: 18,
    fontWeight: '900',
    color: '#0F172A',
    textAlign: 'center',
    marginVertical: 4,
  },
  feedbackBanner: {
    backgroundColor: '#FEF3C7',
    borderRadius: 12,
    paddingVertical: 6,
    paddingHorizontal: 10,
    alignItems: 'center',
    marginTop: 6,
  },
  feedbackText: {
    fontSize: 13,
    fontWeight: '800',
    color: '#92400E',
  },
  stageHint: {
    fontSize: 12,
    color: '#64748B',
    textAlign: 'center',
    fontWeight: '600',
    marginTop: 10,
  },
  bubbleStageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
  },
  bubbleGrid: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    flexWrap: 'wrap',
  },
  bubblePod: {
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#FFFFFF',
    ...SHADOWS.medium,
  },
  bubbleEmoji: {
    fontSize: 48,
    marginBottom: 4,
  },
  bubbleLabel: {
    fontSize: 11,
    fontWeight: '800',
    color: '#0F172A',
  },
  seesawStageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  seesawPhysicsWrapper: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 20,
  },
  seesawBeam: {
    width: '92%',
    height: 14,
    backgroundColor: '#94A3B8',
    borderRadius: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  seesawCenterPivot: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#475569',
    justifyContent: 'center',
    alignItems: 'center',
  },
  seesawSeat: {
    width: 100,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 10,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#E2E8F0',
    ...SHADOWS.medium,
    marginTop: -55,
  },
  seatLeft: {
    marginLeft: 4,
  },
  seatRight: {
    marginRight: 4,
  },
  seatEmoji: {
    fontSize: 40,
    marginBottom: 4,
  },
  seatLabel: {
    fontSize: 12,
    fontWeight: '800',
    color: '#1E293B',
    marginBottom: 6,
  },
  tapPromptPill: {
    backgroundColor: '#3B82F6',
    paddingHorizontal: 12,
    paddingVertical: 3,
    borderRadius: 10,
  },
  tapPromptText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '900',
  },
  seesawTriangleBase: {
    marginTop: -6,
  },
  feedStageContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  feedInnerBox: {
    alignItems: 'center',
    gap: 16,
  },
  animalMascotPod: {
    alignItems: 'center',
    backgroundColor: '#F0FDF4',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 24,
    borderWidth: 1.5,
    borderColor: '#BBF7D0',
  },
  animalMascotEmoji: {
    fontSize: 54,
    marginBottom: 4,
  },
  animalMascotName: {
    fontSize: 16,
    fontWeight: '900',
    color: '#14532D',
    marginBottom: 4,
  },
  fedCounterPill: {
    backgroundColor: '#16A34A',
    paddingHorizontal: 14,
    paddingVertical: 3,
    borderRadius: 12,
  },
  fedCounterText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '900',
  },
  foodPlateCard: {
    width: '100%',
    backgroundColor: '#F8FAFC',
    borderRadius: 20,
    padding: 14,
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    alignItems: 'center',
  },
  plateLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: '#475569',
    marginBottom: 10,
  },
  foodItemsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
  },
  foodItemBubble: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#E2E8F0',
    justifyContent: 'center',
    alignItems: 'center',
    ...SHADOWS.small,
  },
  foodItemBubbleFed: {
    backgroundColor: '#DCFCE7',
    borderColor: '#86EFAC',
    opacity: 0.5,
  },
  foodItemEmoji: {
    fontSize: 26,
  },
  foodItemIndex: {
    fontSize: 10,
    fontWeight: '800',
    color: '#64748B',
  },
  shapeStageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  patternStrip: {
    flexDirection: 'row',
    backgroundColor: '#F1F5F9',
    padding: 10,
    borderRadius: 16,
    gap: 8,
    marginBottom: 16,
  },
  patternSymBox: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    ...SHADOWS.small,
  },
  patternSymBoxQuestion: {
    backgroundColor: '#FEF08A',
    borderColor: '#EAB308',
    borderWidth: 2,
  },
  patternSymText: {
    fontSize: 24,
  },
  shapeOptionsGrid: {
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  shapeOptionCard: {
    width: 100,
    height: 100,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    ...SHADOWS.medium,
  },
  shapeOptionEmoji: {
    fontSize: 40,
    marginBottom: 4,
  },
  shapeOptionLabel: {
    fontSize: 11,
    fontWeight: '800',
    color: '#1E293B',
  },
  victoryContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  trophyBurstCircle: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: '#FEF3C7',
    borderWidth: 3,
    borderColor: '#FDE047',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    ...SHADOWS.medium,
  },
  victoryTitle: {
    fontSize: 22,
    fontWeight: '900',
    color: '#0F172A',
    textAlign: 'center',
    marginBottom: 6,
  },
  victorySub: {
    fontSize: 13,
    color: '#475569',
    textAlign: 'center',
    lineHeight: 19,
    marginBottom: 20,
    maxWidth: 360,
  },
  rewardStatsRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  rewardStatBox: {
    width: 90,
    backgroundColor: '#F8FAFC',
    borderRadius: 18,
    padding: 12,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
  },
  rewardStatEmoji: {
    fontSize: 24,
    marginBottom: 2,
  },
  rewardStatVal: {
    fontSize: 16,
    fontWeight: '900',
    color: '#0F172A',
    marginBottom: 2,
  },
  rewardStatLbl: {
    fontSize: 11,
    fontWeight: '700',
    color: '#64748B',
  },
  victoryActionRow: {
    width: '100%',
    gap: 10,
  },
  victoryNextBtn: {
    backgroundColor: '#2563EB',
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: 'center',
  },
  victoryNextText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '900',
  },
  victoryDoneBtn: {
    backgroundColor: '#F1F5F9',
    borderRadius: 16,
    paddingVertical: 12,
    alignItems: 'center',
  },
  victoryDoneText: {
    color: '#475569',
    fontSize: 13,
    fontWeight: '800',
  },
});
