import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  ScrollView,
  Animated,
} from 'react-native';
import { COLORS, SPACING, BORDER_RADIUS, SHADOWS } from '../../constants/theme';
import { triggerHaptic } from '../../utils/haptics';
import { soundManager } from '../../utils/soundManager';
import { speakText, stopSpeaking } from '../../utils/speech';
import { useUserStore } from '../../store/useUserStore';
import { SpeakerButton } from '../common/SpeakerButton';

interface AlphabetPhonicsLabModalProps {
  visible: boolean;
  onClose: () => void;
  activeLang?: string;
}

interface PhonicsLetterItem {
  letter: string;
  soundPhonics: string;
  exampleWordEn: string;
  exampleWordHi: string;
  emoji: string;
  color: string;
  borderColor: string;
  speechEn: string;
  speechHi: string;
}

const PHONICS_LETTERS: PhonicsLetterItem[] = [
  {
    letter: 'A',
    soundPhonics: '/æ/ • Ah',
    exampleWordEn: 'Apple',
    exampleWordHi: 'एप्पल (सेब)',
    emoji: '🍎',
    color: '#FEE2E2',
    borderColor: '#FCA5A5',
    speechEn: 'A says /æ/ as in Apple! Ah, Ah, Apple!',
    speechHi: 'A से एप्पल! ए - फॉर - एप्पल!',
  },
  {
    letter: 'B',
    soundPhonics: '/b/ • Buh',
    exampleWordEn: 'Ball',
    exampleWordHi: 'बॉल (गेंद)',
    emoji: '⚽',
    color: '#DBEAFE',
    borderColor: '#93C5FD',
    speechEn: 'B says /b/ as in Ball! Buh, Buh, Ball!',
    speechHi: 'B से बॉल! बी - फॉर - बॉल!',
  },
  {
    letter: 'C',
    soundPhonics: '/k/ • Cuh',
    exampleWordEn: 'Cat',
    exampleWordHi: 'कैट (बिल्ली)',
    emoji: '🐱',
    color: '#FEF3C7',
    borderColor: '#FCD34D',
    speechEn: 'C says /k/ as in Cat! Meow! Cuh, Cuh, Cat!',
    speechHi: 'C से कैट! सी - फॉर - कैट!',
  },
  {
    letter: 'D',
    soundPhonics: '/d/ • Duh',
    exampleWordEn: 'Dog',
    exampleWordHi: 'डॉग (कुत्ता)',
    emoji: '🐶',
    color: '#DCFCE7',
    borderColor: '#86EFAC',
    speechEn: 'D says /d/ as in Dog! Woof, Woof, Dog!',
    speechHi: 'D से डॉग! डी - फॉर - डॉग!',
  },
  {
    letter: 'E',
    soundPhonics: '/e/ • Eh',
    exampleWordEn: 'Elephant',
    exampleWordHi: 'एलीफेंट (हाथी)',
    emoji: '🐘',
    color: '#E0E7FF',
    borderColor: '#A5B4FC',
    speechEn: 'E says /e/ as in Elephant! Big giant Elephant!',
    speechHi: 'E से एलीफेंट! ई - फॉर - एलीफेंट!',
  },
  {
    letter: 'F',
    soundPhonics: '/f/ • Fff',
    exampleWordEn: 'Fish',
    exampleWordHi: 'फिश (मछली)',
    emoji: '🐟',
    color: '#E0F2FE',
    borderColor: '#7DD3FC',
    speechEn: 'F says /f/ as in Fish! Swim in water, Fish!',
    speechHi: 'F से फिश! एफ - फॉर - फिश!',
  },
  {
    letter: 'G',
    soundPhonics: '/g/ • Guh',
    exampleWordEn: 'Grapes',
    exampleWordHi: 'ग्रेप्स (अंगूर)',
    emoji: '🍇',
    color: '#F3E8FF',
    borderColor: '#D8B4FE',
    speechEn: 'G says /g/ as in Grapes! Sweet purple Grapes!',
    speechHi: 'G से ग्रेप्स! जी - फॉर - ग्रेप्स!',
  },
  {
    letter: 'H',
    soundPhonics: '/h/ • Huh',
    exampleWordEn: 'House',
    exampleWordHi: 'हाउस (घर)',
    emoji: '🏠',
    color: '#FFEDD5',
    borderColor: '#FDBA74',
    speechEn: 'H says /h/ as in House! Sweet sweet House!',
    speechHi: 'H से हाउस! एच - फॉर - हाउस!',
  },
  {
    letter: 'I',
    soundPhonics: '/ɪ/ • Ih',
    exampleWordEn: 'Ice Cream',
    exampleWordHi: 'आइसक्रीम',
    emoji: '🍦',
    color: '#FEF08A',
    borderColor: '#FACC15',
    speechEn: 'I says /ɪ/ as in yummy Ice cream!',
    speechHi: 'I से आइसक्रीम! आई - फॉर - आइसक्रीम!',
  },
  {
    letter: 'J',
    soundPhonics: '/dʒ/ • Juh',
    exampleWordEn: 'Juice',
    exampleWordHi: 'जूस',
    emoji: '🧃',
    color: '#FEE2E2',
    borderColor: '#F87171',
    speechEn: 'J says /dʒ/ as in sweet Juice! Slurp, Juice!',
    speechHi: 'J से जूस! जे - फॉर - जूस!',
  },
  {
    letter: 'K',
    soundPhonics: '/k/ • Kuh',
    exampleWordEn: 'Kite',
    exampleWordHi: 'काइट (पतंग)',
    emoji: '🪁',
    color: '#CCFBF1',
    borderColor: '#5EEAD4',
    speechEn: 'K says /k/ as in flying Kite! High in the sky, Kite!',
    speechHi: 'K से काइट! के - फॉर - काइट!',
  },
  {
    letter: 'L',
    soundPhonics: '/l/ • Lll',
    exampleWordEn: 'Lion',
    exampleWordHi: 'लायन (शेर)',
    emoji: '🦁',
    color: '#FEF3C7',
    borderColor: '#FBBF24',
    speechEn: 'L says /l/ as in brave Lion! Roar says the Lion!',
    speechHi: 'L से लायन! एल - फॉर - लायन!',
  },
  {
    letter: 'M',
    soundPhonics: '/m/ • Mmm',
    exampleWordEn: 'Monkey',
    exampleWordHi: 'मंकी (बंदर)',
    emoji: '🐵',
    color: '#F1F5F9',
    borderColor: '#CBD5E1',
    speechEn: 'M says /m/ as in naughty Monkey! Chattering Monkey!',
    speechHi: 'M से मंकी! एम - फॉर - मंकी!',
  },
  {
    letter: 'N',
    soundPhonics: '/n/ • Nnn',
    exampleWordEn: 'Nest',
    exampleWordHi: 'नेस्ट (घोंसला)',
    emoji: '🪺',
    color: '#ECFDF5',
    borderColor: '#6EE7B7',
    speechEn: 'N says /n/ as in Nest! Little birds in a cozy Nest!',
    speechHi: 'N से नेस्ट! एन - फॉर - नेस्ट!',
  },
  {
    letter: 'O',
    soundPhonics: '/ɒ/ • Oh',
    exampleWordEn: 'Orange',
    exampleWordHi: 'ऑरेंज (संतरा)',
    emoji: '🍊',
    color: '#FFEDD5',
    borderColor: '#FDBA74',
    speechEn: 'O says /ɒ/ as in Orange! Juicy round sweet Orange!',
    speechHi: 'O से ऑरेंज! ओ - फॉर - ऑरेंज!',
  },
  {
    letter: 'P',
    soundPhonics: '/p/ • Puh',
    exampleWordEn: 'Parrot',
    exampleWordHi: 'पैरट (तोता)',
    emoji: '🦜',
    color: '#FDF2F8',
    borderColor: '#F472B6',
    speechEn: 'P says /p/ as in Parrot! Green feathers and red beak!',
    speechHi: 'P से पैरट! पी - फॉर - पैरट!',
  },
  {
    letter: 'Q',
    soundPhonics: '/kw/ • Kwuh',
    exampleWordEn: 'Queen',
    exampleWordHi: 'क्वीन (रानी)',
    emoji: '👑',
    color: '#FEF9C3',
    borderColor: '#FACC15',
    speechEn: 'Q says /kw/ as in royal Queen! Queen wearing a golden crown!',
    speechHi: 'Q से क्वीन! क्यू - फॉर - क्वीन!',
  },
  {
    letter: 'R',
    soundPhonics: '/r/ • Rrr',
    exampleWordEn: 'Rabbit',
    exampleWordHi: 'रैबिट (खरगोश)',
    emoji: '🐇',
    color: '#F1F5F9',
    borderColor: '#94A3B8',
    speechEn: 'R says /r/ as in Rabbit! Cute fluffy hopping Rabbit!',
    speechHi: 'R से रैबिट! आर - फॉर - रैबिट!',
  },
  {
    letter: 'S',
    soundPhonics: '/s/ • Sss',
    exampleWordEn: 'Sun',
    exampleWordHi: 'सन (सूरज)',
    emoji: '☀️',
    color: '#FEF3C7',
    borderColor: '#F59E0B',
    speechEn: 'S says /s/ as in Sun! Shining warm bright Sun!',
    speechHi: 'S से सन! एस - फॉर - सन!',
  },
  {
    letter: 'T',
    soundPhonics: '/t/ • Tuh',
    exampleWordEn: 'Tiger',
    exampleWordHi: 'टाइगर (बाघ)',
    emoji: '🐅',
    color: '#FFEDD5',
    borderColor: '#EA580C',
    speechEn: 'T says /t/ as in Tiger! Strong striped wild Tiger!',
    speechHi: 'T से टाइगर! टी - फॉर - टाइगर!',
  },
  {
    letter: 'U',
    soundPhonics: '/ʌ/ • Uh',
    exampleWordEn: 'Umbrella',
    exampleWordHi: 'अम्ब्रेला (छाता)',
    emoji: '☂️',
    color: '#EFF6FF',
    borderColor: '#60A5FA',
    speechEn: 'U says /ʌ/ as in Umbrella! Keeping us dry in the rain!',
    speechHi: 'U से अम्ब्रेला! यू - फॉर - अम्ब्रेला!',
  },
  {
    letter: 'V',
    soundPhonics: '/v/ • Vvv',
    exampleWordEn: 'Van',
    exampleWordHi: 'वैन (गाड़ी)',
    emoji: '🚐',
    color: '#F3E8FF',
    borderColor: '#A855F7',
    speechEn: 'V says /v/ as in school Van! Rolling on four wheels!',
    speechHi: 'V से वैन! वी - फॉर - वैन!',
  },
  {
    letter: 'W',
    soundPhonics: '/w/ • Wuh',
    exampleWordEn: 'Watch',
    exampleWordHi: 'वॉच (घड़ी)',
    emoji: '⌚',
    color: '#E0F2FE',
    borderColor: '#38BDF8',
    speechEn: 'W says /w/ as in ticking Watch! Tick-tock on our wrist!',
    speechHi: 'W से वॉच! डब्ल्यू - फॉर - वॉच!',
  },
  {
    letter: 'X',
    soundPhonics: '/ks/ • Xxx',
    exampleWordEn: 'Xylophone',
    exampleWordHi: 'ज़ाइलोफ़ोन (बाजा)',
    emoji: '🎼',
    color: '#FDF2F8',
    borderColor: '#EC4899',
    speechEn: 'X says /ks/ as in Xylophone! Colorful sweet musical notes!',
    speechHi: 'X से ज़ाइलोफ़ोन! एक्स - फॉर - ज़ाइलोफ़ोन!',
  },
  {
    letter: 'Y',
    soundPhonics: '/j/ • Yuh',
    exampleWordEn: 'Yo-yo',
    exampleWordHi: 'यो-यो (खिलौना)',
    emoji: '🪀',
    color: '#FEF08A',
    borderColor: '#EAB308',
    speechEn: 'Y says /j/ as in spinning Yo-yo! Up and down on a string!',
    speechHi: 'Y से यो-यो! वाई - फॉर - यो-यो!',
  },
  {
    letter: 'Z',
    soundPhonics: '/z/ • Zzz',
    exampleWordEn: 'Zebra',
    exampleWordHi: 'ज़ेबरा',
    emoji: '🦓',
    color: '#F8FAFC',
    borderColor: '#64748B',
    speechEn: 'Z says /z/ as in striped Zebra! Black and white running Zebra!',
    speechHi: 'Z से ज़ेबरा! ज़ेड - फॉर - ज़ेबरा!',
  },
];

interface PhonicsMission {
  id: number;
  promptEn: string;
  promptHi: string;
  speechEn: string;
  speechHi: string;
  targetLetter: string;
  options: { letter: string; emoji: string }[];
}

const PHONICS_MISSIONS: PhonicsMission[] = [
  {
    id: 1,
    promptEn: 'Which letter does 🍎 Apple start with?',
    promptHi: 'सेब 🍎 किस अक्षर से शुरू होता है?',
    speechEn: 'Which letter does Apple begin with? Tap letter A for Apple!',
    speechHi: 'एप्पल किस अक्षर से शुरू होता है? सही अक्षर चुनें!',
    targetLetter: 'A',
    options: [
      { letter: 'A', emoji: '🍎' },
      { letter: 'B', emoji: '⚽' },
      { letter: 'C', emoji: '🐱' },
    ],
  },
  {
    id: 2,
    promptEn: 'Which letter begins bouncing ⚽ Ball?',
    promptHi: 'गेंद ⚽ किस अक्षर से शुरू होती है?',
    speechEn: 'Which letter starts the bouncing Ball? Tap letter B!',
    speechHi: 'बॉल किस अक्षर से शुरू होती है?',
    targetLetter: 'B',
    options: [
      { letter: 'D', emoji: '🐶' },
      { letter: 'B', emoji: '⚽' },
      { letter: 'A', emoji: '🍎' },
    ],
  },
  {
    id: 3,
    promptEn: 'Which letter begins naughty 🐵 Monkey?',
    promptHi: 'बंदर 🐵 किस अक्षर से शुरू होता है?',
    speechEn: 'Which letter starts the word Monkey? Tap letter M!',
    speechHi: 'मंकी किस अक्षर से शुरू होता है?',
    targetLetter: 'M',
    options: [
      { letter: 'M', emoji: '🐵' },
      { letter: 'N', emoji: '🪺' },
      { letter: 'W', emoji: '🍉' },
    ],
  },
  {
    id: 4,
    promptEn: 'Which letter starts the brave 🦁 Lion?',
    promptHi: 'शेर 🦁 किस अक्षर से शुरू होता है?',
    speechEn: 'Roar! Which letter begins Lion? Tap letter L!',
    speechHi: 'लायन किस अक्षर से शुरू होता है?',
    targetLetter: 'L',
    options: [
      { letter: 'I', emoji: '🍦' },
      { letter: 'L', emoji: '🦁' },
      { letter: 'T', emoji: '🌲' },
    ],
  },
  {
    id: 5,
    promptEn: 'Which letter starts cozy bird 🪺 Nest?',
    promptHi: 'घोंसला 🪺 किस अक्षर से शुरू होता है?',
    speechEn: 'Which letter starts Nest? Tap letter N!',
    speechHi: 'नेस्ट किस अक्षर से शुरू होता है? N चुनें!',
    targetLetter: 'N',
    options: [
      { letter: 'N', emoji: '🪺' },
      { letter: 'M', emoji: '🐵' },
      { letter: 'P', emoji: '🦜' },
    ],
  },
  {
    id: 6,
    promptEn: 'Which letter begins shining ☀️ Sun?',
    promptHi: 'सूरज ☀️ किस अक्षर से शुरू होता है?',
    speechEn: 'Which letter begins Sun? Sss! Tap letter S!',
    speechHi: 'सन किस अक्षर से शुरू होता है? S चुनें!',
    targetLetter: 'S',
    options: [
      { letter: 'S', emoji: '☀️' },
      { letter: 'Z', emoji: '🦓' },
      { letter: 'C', emoji: '🐱' },
    ],
  },
  {
    id: 7,
    promptEn: 'Which letter begins rainy ☂️ Umbrella?',
    promptHi: 'छाता ☂️ किस अक्षर से शुरू होता है?',
    speechEn: 'Which letter starts Umbrella? Tap letter U!',
    speechHi: 'अम्ब्रेला किस अक्षर से शुरू होता है? U चुनें!',
    targetLetter: 'U',
    options: [
      { letter: 'U', emoji: '☂️' },
      { letter: 'V', emoji: '🚐' },
      { letter: 'W', emoji: '⌚' },
    ],
  },
  {
    id: 8,
    promptEn: 'Which letter begins striped 🦓 Zebra?',
    promptHi: 'ज़ेबरा 🦓 किस अक्षर से शुरू होता है?',
    speechEn: 'Which letter starts Zebra? Tap letter Z!',
    speechHi: 'ज़ेबरा किस अक्षर से शुरू होता है? Z चुनें!',
    targetLetter: 'Z',
    options: [
      { letter: 'Z', emoji: '🦓' },
      { letter: 'S', emoji: '☀️' },
      { letter: 'Y', emoji: '🪀' },
    ],
  },
  {
    id: 9,
    promptEn: 'What comes after B? A, B, ❓',
    promptHi: 'B के बाद क्या आता है? A, B, ❓',
    speechEn: 'What letter comes after B? A, B, what is next?',
    speechHi: 'A, B, इसके बाद अगला अक्षर क्या आएगा?',
    targetLetter: 'C',
    options: [
      { letter: 'C', emoji: '🐱' },
      { letter: 'D', emoji: '🐶' },
      { letter: 'E', emoji: '🐘' },
    ],
  },
  {
    id: 10,
    promptEn: 'What comes after X, Y, ❓',
    promptHi: 'X, Y के बाद क्या आता है?',
    speechEn: 'X, Y, what is the final letter of the alphabet?',
    speechHi: 'X, Y के बाद वर्णमाला का आखिरी अक्षर क्या आएगा?',
    targetLetter: 'Z',
    options: [
      { letter: 'Z', emoji: '🦓' },
      { letter: 'A', emoji: '🍎' },
      { letter: 'W', emoji: '⌚' },
    ],
  },
];

export const AlphabetPhonicsLabModal: React.FC<AlphabetPhonicsLabModalProps> = ({
  visible,
  onClose,
  activeLang = 'en',
}) => {
  const { addStars, addReward } = useUserStore();
  const [activeTab, setActiveTab] = useState<'soundboard' | 'missions'>('soundboard');
  const [letterFilter, setLetterFilter] = useState<'all' | 'a_to_m' | 'n_to_z'>('all');
  const [selectedLetter, setSelectedLetter] = useState<PhonicsLetterItem>(PHONICS_LETTERS[0]);
  const [currentMissionIdx, setCurrentMissionIdx] = useState(0);
  const [missionScore, setMissionScore] = useState(0);
  const [isMissionComplete, setIsMissionComplete] = useState(false);
  const [feedbackMsg, setFeedbackMsg] = useState<string | null>(null);

  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (visible) {
      triggerHaptic('light');
      handleSelectLetter(PHONICS_LETTERS[0], true);
    } else {
      stopSpeaking();
    }
  }, [visible]);

  const handleSelectLetter = (item: PhonicsLetterItem, autoSpeak: boolean = true) => {
    setSelectedLetter(item);
    triggerHaptic('light');
    soundManager.playPop();

    // Pulse animation
    Animated.sequence([
      Animated.timing(scaleAnim, { toValue: 1.15, duration: 140, useNativeDriver: true }),
      Animated.timing(scaleAnim, { toValue: 1.0, duration: 140, useNativeDriver: true }),
    ]).start();

    if (autoSpeak) {
      const textToSpeak = activeLang === 'hi' ? item.speechHi : item.speechEn;
      speakText(textToSpeak);
    }
  };

  const handleMissionAnswer = (letter: string) => {
    if (feedbackMsg) return;
    const mission = PHONICS_MISSIONS[currentMissionIdx];

    if (letter === mission.targetLetter) {
      soundManager.playBubblePop();
      triggerHaptic('success');
      const newScore = missionScore + 10;
      setMissionScore(newScore);

      const winMsg = activeLang === 'hi' ? 'शाबाश! बिल्कुल सही! 🎉' : 'SUPER! CORRECT! 🎉';
      setFeedbackMsg(winMsg);

      setTimeout(() => {
        setFeedbackMsg(null);
        const nextIdx = currentMissionIdx + 1;
        if (nextIdx >= PHONICS_MISSIONS.length) {
          finishMissions(newScore);
        } else {
          setCurrentMissionIdx(nextIdx);
          const nextMission = PHONICS_MISSIONS[nextIdx];
          const speakTextStr = activeLang === 'hi' ? nextMission.speechHi : nextMission.speechEn;
          speakText(speakTextStr);
        }
      }, 1200);
    } else {
      soundManager.playIncorrect();
      triggerHaptic('warning');
      const tryMsg = activeLang === 'hi' ? 'दोबारा कोशिश करें! सही अक्षर ढूंढें' : 'Try again! Find the matching letter';
      setFeedbackMsg(tryMsg);
      setTimeout(() => setFeedbackMsg(null), 1400);
    }
  };

  const finishMissions = async (finalScore: number) => {
    setIsMissionComplete(true);
    soundManager.playFanfare();
    triggerHaptic('success');

    // Reward stars and coins
    await addStars(5);
    await addReward({ stars: 5, coins: 50, xp: finalScore, streakShields: 1 });
  };

  const resetMissions = () => {
    setCurrentMissionIdx(0);
    setMissionScore(0);
    setIsMissionComplete(false);
    setFeedbackMsg(null);
    const m = PHONICS_MISSIONS[0];
    speakText(activeLang === 'hi' ? m.speechHi : m.speechEn);
  };

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.labContainer}>
          {/* Header Bar */}
          <View style={styles.hudHeader}>
            <View style={styles.headerLeft}>
              <View style={styles.labBadgePill}>
                <Text style={styles.labBadgeText}>🔤 PHONICS STEM LAB</Text>
              </View>
              <Text style={styles.labTitle}>
                {activeLang === 'hi' ? 'अल्फाबेट व फोनिक्स साउंड लैब (A to Z)' : 'Alphabet & Phonics Sound Lab (A to Z)'}
              </Text>
            </View>

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

          {/* Navigation Tabs */}
          <View style={styles.tabsRow}>
            <TouchableOpacity
              style={[styles.tabButton, activeTab === 'soundboard' && styles.tabButtonActive]}
              onPress={() => {
                stopSpeaking();
                setActiveTab('soundboard');
              }}
            >
              <Text style={[styles.tabText, activeTab === 'soundboard' && styles.tabTextActive]}>
                🎹 {activeLang === 'hi' ? 'फोनिक्स साउंड बोर्ड' : 'Phonics Sound Board'}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.tabButton, activeTab === 'missions' && styles.tabButtonActive]}
              onPress={() => {
                stopSpeaking();
                setActiveTab('missions');
                const m = PHONICS_MISSIONS[currentMissionIdx];
                speakText(activeLang === 'hi' ? m.speechHi : m.speechEn);
              }}
            >
              <Text style={[styles.tabText, activeTab === 'missions' && styles.tabTextActive]}>
                🎯 {activeLang === 'hi' ? 'फोनिक्स मिशन क्विज़' : 'Sound Missions'}
              </Text>
            </TouchableOpacity>
          </View>

          {/* ======================================================== */}
          {/* TAB 1: PHONICS SOUND BOARD (A TO M)                       */}
          {/* ======================================================== */}
          {activeTab === 'soundboard' && (
            <ScrollView
              style={styles.tabScrollView}
              contentContainerStyle={styles.soundboardContent}
              showsVerticalScrollIndicator={false}
            >
              {/* Active Letter Hero Spotlight Card */}
              <View style={styles.spotlightCard}>
                <Animated.View
                  style={[
                    styles.spotlightCircle,
                    {
                      backgroundColor: selectedLetter.color,
                      borderColor: selectedLetter.borderColor,
                      transform: [{ scale: scaleAnim }],
                    },
                  ]}
                >
                  <Text style={styles.spotlightLetter}>{selectedLetter.letter}</Text>
                  <Text style={styles.spotlightEmoji}>{selectedLetter.emoji}</Text>
                </Animated.View>

                <View style={styles.spotlightInfoCol}>
                  <View style={styles.phonicsSoundBadge}>
                    <Text style={styles.phonicsSoundBadgeText}>
                      Sound: {selectedLetter.soundPhonics}
                    </Text>
                  </View>
                  <Text style={styles.spotlightWord}>
                    {activeLang === 'hi'
                      ? `${selectedLetter.letter} for ${selectedLetter.exampleWordHi}`
                      : `${selectedLetter.letter} is for ${selectedLetter.exampleWordEn}`}
                  </Text>
                  <Text style={styles.spotlightSentence}>
                    {activeLang === 'hi' ? selectedLetter.speechHi : selectedLetter.speechEn}
                  </Text>
                </View>

                <SpeakerButton
                  textToSpeak={activeLang === 'hi' ? selectedLetter.speechHi : selectedLetter.speechEn}
                  size="pill"
                  showLabel
                  activeLang={activeLang}
                />
              </View>

              {/* Letter Filter Pills (All / A-M / N-Z) */}
              <View style={styles.subFilterRow}>
                <TouchableOpacity
                  style={[styles.subFilterPill, letterFilter === 'all' && styles.subFilterPillActive]}
                  onPress={() => setLetterFilter('all')}
                >
                  <Text style={[styles.subFilterText, letterFilter === 'all' && styles.subFilterTextActive]}>
                    🔤 All A-Z (26)
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.subFilterPill, letterFilter === 'a_to_m' && styles.subFilterPillActive]}
                  onPress={() => setLetterFilter('a_to_m')}
                >
                  <Text style={[styles.subFilterText, letterFilter === 'a_to_m' && styles.subFilterTextActive]}>
                    🅰️ A to M (13)
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.subFilterPill, letterFilter === 'n_to_z' && styles.subFilterPillActive]}
                  onPress={() => setLetterFilter('n_to_z')}
                >
                  <Text style={[styles.subFilterText, letterFilter === 'n_to_z' && styles.subFilterTextActive]}>
                    🔡 N to Z (13)
                  </Text>
                </TouchableOpacity>
              </View>

              <Text style={styles.soundboardHint}>
                {activeLang === 'hi'
                  ? '👇 किसी भी अक्षर पर अपनी उंगली से टैप करके उसकी ध्वनि और शब्द सुनें:'
                  : '👇 Tap any letter to hear its authentic phonics sound & real-world word:'}
              </Text>

              {/* 26 Letter Tiles Grid */}
              <View style={styles.lettersGrid}>
                {PHONICS_LETTERS.filter((item) => {
                  if (letterFilter === 'a_to_m') return item.letter <= 'M';
                  if (letterFilter === 'n_to_z') return item.letter >= 'N';
                  return true;
                }).map((item) => {
                  const isSelected = item.letter === selectedLetter.letter;
                  return (
                    <TouchableOpacity
                      key={item.letter}
                      activeOpacity={0.8}
                      onPress={() => handleSelectLetter(item)}
                      style={[
                        styles.letterTile,
                        {
                          backgroundColor: item.color,
                          borderColor: isSelected ? '#2563EB' : item.borderColor,
                          borderWidth: isSelected ? 3 : 1.5,
                        },
                      ]}
                    >
                      <Text style={styles.tileLetterText}>{item.letter}</Text>
                      <Text style={styles.tileEmoji}>{item.emoji}</Text>
                      <Text style={styles.tileWordText}>{item.exampleWordEn}</Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </ScrollView>
          )}

          {/* ======================================================== */}
          {/* TAB 2: PHONICS MISSIONS & SOUND QUIZ                      */}
          {/* ======================================================== */}
          {activeTab === 'missions' && !isMissionComplete && (
            <View style={styles.missionsContainer}>
              {/* Mission Prompt Card */}
              <View style={styles.missionCard}>
                <View style={styles.missionHeaderRow}>
                  <View style={styles.missionBadgePill}>
                    <Text style={styles.missionBadgeText}>
                      {activeLang === 'hi'
                        ? `मिशन ${currentMissionIdx + 1} / ${PHONICS_MISSIONS.length}`
                        : `Mission ${currentMissionIdx + 1} of ${PHONICS_MISSIONS.length}`}
                    </Text>
                  </View>

                  <SpeakerButton
                    textToSpeak={
                      activeLang === 'hi'
                        ? PHONICS_MISSIONS[currentMissionIdx].speechHi
                        : PHONICS_MISSIONS[currentMissionIdx].speechEn
                    }
                    size="pill"
                    showLabel
                    activeLang={activeLang}
                  />
                </View>

                <Text style={styles.missionQuestionText}>
                  {activeLang === 'hi'
                    ? PHONICS_MISSIONS[currentMissionIdx].promptHi
                    : PHONICS_MISSIONS[currentMissionIdx].promptEn}
                </Text>

                {feedbackMsg && (
                  <View style={styles.feedbackToast}>
                    <Text style={styles.feedbackToastText}>{feedbackMsg}</Text>
                  </View>
                )}
              </View>

              {/* Tappable Choice Pods */}
              <View style={styles.choicesRow}>
                {PHONICS_MISSIONS[currentMissionIdx].options.map((opt) => (
                  <TouchableOpacity
                    key={opt.letter}
                    activeOpacity={0.82}
                    onPress={() => handleMissionAnswer(opt.letter)}
                    style={styles.choiceCard}
                  >
                    <Text style={styles.choiceLetter}>{opt.letter}</Text>
                    <Text style={styles.choiceEmoji}>{opt.emoji}</Text>
                    <View style={styles.choiceTapPill}>
                      <Text style={styles.choiceTapText}>
                        {activeLang === 'hi' ? 'चुनें' : 'TAP'}
                      </Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>

              <Text style={styles.missionHintText}>
                {activeLang === 'hi'
                  ? 'स्पीकर से सुनकर सही अक्षर पर अपनी उंगली से टैप करें!'
                  : 'Listen to the audio cue and tap the correct letter!'}
              </Text>
            </View>
          )}

          {/* Missions Completion Celebration */}
          {activeTab === 'missions' && isMissionComplete && (
            <View style={styles.completeContainer}>
              <View style={styles.trophyCircle}>
                <Text style={{ fontSize: 56 }}>🏆</Text>
              </View>
              <Text style={styles.completeTitle}>
                {activeLang === 'hi' ? 'अद्भुत! फोनिक्स मास्टर! 🌟' : 'PHONICS CHAMPION! 🌟'}
              </Text>
              <Text style={styles.completeSub}>
                {activeLang === 'hi'
                  ? 'आपने A से M तक के सभी अक्षरों और ध्वनियों को सफलता से पूरा किया!'
                  : 'You mastered letter recognition and initial phonics sounds for A to M!'}
              </Text>

              <View style={styles.rewardPillsRow}>
                <View style={styles.rewardPill}>
                  <Text style={{ fontSize: 20 }}>⭐</Text>
                  <Text style={styles.rewardPillVal}>+5 Stars</Text>
                </View>
                <View style={styles.rewardPill}>
                  <Text style={{ fontSize: 20 }}>💰</Text>
                  <Text style={styles.rewardPillVal}>+50 Coins</Text>
                </View>
              </View>

              <View style={styles.completeActionRow}>
                <TouchableOpacity
                  style={styles.completeBtn}
                  activeOpacity={0.88}
                  onPress={resetMissions}
                >
                  <Text style={styles.completeBtnText}>
                    {activeLang === 'hi' ? 'दोबारा खेलें 🔄' : 'Practice Again 🔄'}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.completeBtn, { backgroundColor: '#10B981' }]}
                  activeOpacity={0.88}
                  onPress={() => {
                    stopSpeaking();
                    onClose();
                  }}
                >
                  <Text style={styles.completeBtnText}>
                    {activeLang === 'hi' ? 'पूरा हुआ 👍' : 'Done 👍'}
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
  labContainer: {
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
    backgroundColor: '#EFF6FF',
    borderBottomWidth: 1.5,
    borderBottomColor: '#DBEAFE',
  },
  headerLeft: {
    flex: 1,
  },
  labBadgePill: {
    alignSelf: 'flex-start',
    backgroundColor: '#DBEAFE',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
    marginBottom: 4,
  },
  labBadgeText: {
    fontSize: 10,
    fontWeight: '900',
    color: '#1D4ED8',
  },
  labTitle: {
    fontSize: 16,
    fontWeight: '900',
    color: '#0F172A',
  },
  closeBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    ...SHADOWS.small,
  },
  closeBtnText: {
    fontSize: 15,
    fontWeight: '900',
    color: '#64748B',
  },
  tabsRow: {
    flexDirection: 'row',
    backgroundColor: '#F8FAFC',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
    paddingHorizontal: 12,
    paddingVertical: 6,
    gap: 8,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  tabButtonActive: {
    backgroundColor: '#2563EB',
    borderColor: '#1D4ED8',
  },
  tabText: {
    fontSize: 12,
    fontWeight: '800',
    color: '#475569',
  },
  tabTextActive: {
    color: '#FFFFFF',
  },
  tabScrollView: {
    flex: 1,
  },
  soundboardContent: {
    padding: 16,
    paddingBottom: 24,
  },
  spotlightCard: {
    backgroundColor: '#F8FAFC',
    borderRadius: 22,
    padding: 14,
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    alignItems: 'center',
    marginBottom: 14,
    ...SHADOWS.small,
  },
  spotlightCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  spotlightLetter: {
    fontSize: 40,
    fontWeight: '900',
    color: '#0F172A',
  },
  spotlightEmoji: {
    fontSize: 22,
    marginTop: -4,
  },
  spotlightInfoCol: {
    alignItems: 'center',
    marginBottom: 10,
  },
  phonicsSoundBadge: {
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 12,
    marginBottom: 4,
  },
  phonicsSoundBadgeText: {
    fontSize: 12,
    fontWeight: '900',
    color: '#B45309',
  },
  spotlightWord: {
    fontSize: 16,
    fontWeight: '900',
    color: '#0F172A',
    marginBottom: 2,
  },
  spotlightSentence: {
    fontSize: 12,
    color: '#475569',
    textAlign: 'center',
  },
  subFilterRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    marginVertical: 10,
  },
  subFilterPill: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
    backgroundColor: '#F1F5F9',
    borderWidth: 1,
    borderColor: '#CBD5E1',
  },
  subFilterPillActive: {
    backgroundColor: '#DBEAFE',
    borderColor: '#3B82F6',
  },
  subFilterText: {
    fontSize: 11,
    fontWeight: '800',
    color: '#475569',
  },
  subFilterTextActive: {
    color: '#1D4ED8',
    fontWeight: '900',
  },
  soundboardHint: {
    fontSize: 12,
    color: '#64748B',
    fontWeight: '600',
    marginBottom: 10,
    textAlign: 'center',
  },
  lettersGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    justifyContent: 'center',
  },
  letterTile: {
    width: 76,
    height: 76,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
    ...SHADOWS.small,
  },
  tileLetterText: {
    fontSize: 22,
    fontWeight: '900',
    color: '#0F172A',
  },
  tileEmoji: {
    fontSize: 20,
    marginVertical: 1,
  },
  tileWordText: {
    fontSize: 9,
    fontWeight: '800',
    color: '#475569',
  },
  missionsContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'space-between',
  },
  missionCard: {
    backgroundColor: '#F8FAFC',
    borderRadius: 20,
    padding: 14,
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
  },
  missionHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  missionBadgePill: {
    backgroundColor: '#EFF6FF',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  missionBadgeText: {
    fontSize: 11,
    fontWeight: '800',
    color: '#2563EB',
  },
  missionQuestionText: {
    fontSize: 18,
    fontWeight: '900',
    color: '#0F172A',
    textAlign: 'center',
    marginVertical: 6,
  },
  feedbackToast: {
    backgroundColor: '#FEF3C7',
    paddingVertical: 6,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 6,
  },
  feedbackToastText: {
    fontSize: 13,
    fontWeight: '900',
    color: '#92400E',
  },
  choicesRow: {
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'center',
    marginVertical: 20,
  },
  choiceCard: {
    width: 100,
    height: 120,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#E2E8F0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    ...SHADOWS.medium,
  },
  choiceLetter: {
    fontSize: 34,
    fontWeight: '900',
    color: '#1E293B',
    marginBottom: 4,
  },
  choiceEmoji: {
    fontSize: 28,
    marginBottom: 6,
  },
  choiceTapPill: {
    backgroundColor: '#2563EB',
    paddingHorizontal: 12,
    paddingVertical: 3,
    borderRadius: 10,
  },
  choiceTapText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '900',
  },
  missionHintText: {
    fontSize: 12,
    color: '#64748B',
    textAlign: 'center',
    fontWeight: '600',
  },
  completeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  trophyCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#FEF3C7',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#FDE047',
    marginBottom: 14,
    ...SHADOWS.medium,
  },
  completeTitle: {
    fontSize: 22,
    fontWeight: '900',
    color: '#0F172A',
    marginBottom: 6,
  },
  completeSub: {
    fontSize: 13,
    color: '#475569',
    textAlign: 'center',
    lineHeight: 18,
    marginBottom: 18,
    maxWidth: 340,
  },
  rewardPillsRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
  },
  rewardPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#F8FAFC',
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 16,
  },
  rewardPillVal: {
    fontSize: 13,
    fontWeight: '900',
    color: '#0F172A',
  },
  completeActionRow: {
    width: '100%',
    gap: 10,
  },
  completeBtn: {
    backgroundColor: '#2563EB',
    paddingVertical: 12,
    borderRadius: 16,
    alignItems: 'center',
  },
  completeBtnText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '900',
  },
});
