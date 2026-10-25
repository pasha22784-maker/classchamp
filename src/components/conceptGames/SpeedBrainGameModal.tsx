import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  Animated,
  Dimensions,
} from 'react-native';
import { COLORS, SPACING, BORDER_RADIUS, SHADOWS } from '../../constants/theme';
import { triggerHaptic } from '../../utils/haptics';
import { soundManager } from '../../utils/soundManager';
import { speakText, stopSpeaking } from '../../utils/speech';
import { SpeakerButton } from '../common/SpeakerButton';
import { Grade } from '../../types';
import { useUserStore } from '../../store/useUserStore';

const { width } = Dimensions.get('window');

interface SpeedBrainGameModalProps {
  visible: boolean;
  onClose: () => void;
  userGrade: Grade;
  onEarnStars?: (stars: number) => void;
  activeLang?: 'en' | 'hi';
}

export interface QuickQuestionOption {
  id: string;
  labelEn: string;
  labelHi: string;
  emoji?: string;
  color?: string;
  bgColor?: string;
  borderColor?: string;
}

export interface QuickQuestion {
  questionEn: string;
  questionHi: string;
  speechEn: string;
  speechHi: string;
  visual?: string;
  options: QuickQuestionOption[];
  correctAnswerId: string;
  categoryEn: string;
  categoryHi: string;
}

export const SpeedBrainGameModal: React.FC<SpeedBrainGameModalProps> = ({
  visible,
  onClose,
  userGrade,
  onEarnStars,
  activeLang: activeLangProp,
}) => {
  const { profile, addStars } = useUserStore();
  const activeLang = activeLangProp || profile.preferredLanguage || 'hi';

  const [gameState, setGameState] = useState<'intro' | 'playing' | 'gameover'>('intro');
  const [timeLeft, setTimeLeft] = useState(60);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [maxCombo, setMaxCombo] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);

  // Animations
  const comboScaleAnim = useRef(new Animated.Value(1)).current;

  // Clean, high-quality question pool without giveaway prompts
  const getQuestionPool = (): QuickQuestion[] => {
    // -------------------------------------------------------------
    // LKG & UKG (BALVATIKA 2 & 3) — SENSORY, PICTURE-FIRST, AGE 3-5
    // -------------------------------------------------------------
    if (userGrade === 'LKG' || userGrade === 'UKG') {
      return [
        {
          questionEn: 'Which balloon is RED? 🎈',
          questionHi: 'लाल रंग का गुब्बारा कौन सा है? 🎈',
          speechEn: 'Which balloon is red color? Tap the red balloon!',
          speechHi: 'लाल रंग का गुब्बारा कौन सा है? लाल गुब्बारे को छुएं!',
          categoryEn: 'Colors',
          categoryHi: 'रंग',
          options: [
            { id: 'red', labelEn: 'Red Balloon', labelHi: 'लाल गुब्बारा', emoji: '🎈', color: '#DC2626', bgColor: '#FEF2F2', borderColor: '#FCA5A5' },
            { id: 'green', labelEn: 'Green Balloon', labelHi: 'हरा गुब्बारा', emoji: '🎈', color: '#16A34A', bgColor: '#F0FDF4', borderColor: '#86EFAC' },
          ],
          correctAnswerId: 'red',
        },
        {
          questionEn: 'Which shape is a ROUND CIRCLE? 🔵',
          questionHi: 'गोल वृत्त (सर्कल) कौन सा है? 🔵',
          speechEn: 'Which shape is a round circle? Tap the circle!',
          speechHi: 'गोल वृत्त यानी सर्कल कौन सा है? गोल आकार पर टैप करें!',
          categoryEn: 'Shapes',
          categoryHi: 'आकार',
          options: [
            { id: 'circle', labelEn: 'Round Circle', labelHi: 'गोल वृत्त', emoji: '🔵', color: '#2563EB', bgColor: '#EFF6FF', borderColor: '#93C5FD' },
            { id: 'triangle', labelEn: 'Sharp Triangle', labelHi: 'तिकोना त्रिभुज', emoji: '🔺', color: '#EA580C', bgColor: '#FFF7ED', borderColor: '#FDBA74' },
          ],
          correctAnswerId: 'circle',
        },
        {
          questionEn: 'How many apples in the basket? 🧺',
          questionHi: 'टोकरी में कितने सेब हैं? 🧺',
          speechEn: 'Count the apples! How many apples do you see?',
          speechHi: 'सेब गिनें! टोकरी में कितने सेब हैं?',
          visual: '🍎 🍎 🍎',
          categoryEn: 'Counting',
          categoryHi: 'गिनती',
          options: [
            { id: '3', labelEn: '3 Apples', labelHi: '3 सेब', emoji: '3️⃣', color: '#059669', bgColor: '#ECFDF5', borderColor: '#A7F3D0' },
            { id: '4', labelEn: '4 Apples', labelHi: '4 सेब', emoji: '4️⃣', color: '#4F46E5', bgColor: '#EEF2FF', borderColor: '#C7D2FE' },
          ],
          correctAnswerId: '3',
        },
        {
          questionEn: 'Which animal is BIGGER? 🐘',
          questionHi: 'बड़ा जानवर कौन सा है? 🐘',
          speechEn: 'Which animal is bigger? Find the giant animal!',
          speechHi: 'बड़ा जानवर कौन सा है? बड़े हाथी को पहचानें!',
          categoryEn: 'Size',
          categoryHi: 'आकार तुलना',
          options: [
            { id: 'elephant', labelEn: 'Big Elephant', labelHi: 'बड़ा हाथी', emoji: '🐘', color: '#0284C7', bgColor: '#F0F9FF', borderColor: '#BAE6FD' },
            { id: 'mouse', labelEn: 'Tiny Mouse', labelHi: 'छोटा चूहा', emoji: '🐭', color: '#D97706', bgColor: '#FFFBEB', borderColor: '#FDE68A' },
          ],
          correctAnswerId: 'elephant',
        },
        {
          questionEn: 'How many shining stars in the sky? ⭐',
          questionHi: 'आसमान में कितने तारे चमक रहे हैं? ⭐',
          speechEn: 'Count the stars! How many shining stars do you see?',
          speechHi: 'तारे गिनें! आसमान में कितने चमकते तारे हैं?',
          visual: '⭐ ⭐ ⭐ ⭐',
          categoryEn: 'Counting',
          categoryHi: 'गिनती',
          options: [
            { id: '4', labelEn: '4 Stars', labelHi: '4 तारे', emoji: '4️⃣', color: '#D97706', bgColor: '#FEF9C3', borderColor: '#FDE047' },
            { id: '5', labelEn: '5 Stars', labelHi: '5 तारे', emoji: '5️⃣', color: '#0284C7', bgColor: '#F0F9FF', borderColor: '#BAE6FD' },
          ],
          correctAnswerId: '4',
        },
        {
          questionEn: 'Which one is HEAVIER? ⚖️',
          questionHi: 'भारी चीज़ कौन सी है? ⚖️',
          speechEn: 'Which one is heavier? Find the heavy object!',
          speechHi: 'भारी चीज़ कौन सी है? भारी वस्तु पर टैप करें!',
          categoryEn: 'Weight',
          categoryHi: 'वजन',
          options: [
            { id: 'brick', labelEn: 'Heavy Brick', labelHi: 'भारी ईंट', emoji: '🧱', color: '#B45309', bgColor: '#FEF3C7', borderColor: '#FDE68A' },
            { id: 'feather', labelEn: 'Light Leaf', labelHi: 'हल्का पत्ता', emoji: '🍃', color: '#16A34A', bgColor: '#F0FDF4', borderColor: '#BBF7D0' },
          ],
          correctAnswerId: 'brick',
        },
        {
          questionEn: 'Which one is TALLER? 🦒',
          questionHi: 'ऊंचा लंबा कौन सा है? 🦒',
          speechEn: 'Which one is taller? Look for the tall giraffe reaching high!',
          speechHi: 'ऊंचा लंबा कौन सा है? लंबे जिराफ़ को छुएं!',
          categoryEn: 'Height',
          categoryHi: 'ऊंचाई',
          options: [
            { id: 'giraffe', labelEn: 'Tall Giraffe', labelHi: 'लंबा जिराफ़', emoji: '🦒', color: '#D97706', bgColor: '#FEF3C7', borderColor: '#FDE68A' },
            { id: 'turtle', labelEn: 'Short Turtle', labelHi: 'छोटा कछुआ', emoji: '🐢', color: '#16A34A', bgColor: '#F0FDF4', borderColor: '#BBF7D0' },
          ],
          correctAnswerId: 'giraffe',
        },
        {
          questionEn: 'Which one is COLD and sweet? 🍦',
          questionHi: 'ठंडी और मीठी चीज़ कौन सी है? 🍦',
          speechEn: 'Which one is cold and sweet? Tap the ice cream!',
          speechHi: 'ठंडी और मीठी चीज़ कौन सी है? आइसक्रीम पहचानें!',
          categoryEn: 'Sense',
          categoryHi: 'अनुभूति',
          options: [
            { id: 'icecream', labelEn: 'Cold Ice Cream', labelHi: 'ठंडी आइसक्रीम', emoji: '🍦', color: '#DB2777', bgColor: '#FDF2F8', borderColor: '#FBCFE8' },
            { id: 'fire', labelEn: 'Hot Fire', labelHi: 'गर्म आग', emoji: '🔥', color: '#EA580C', bgColor: '#FFF7ED', borderColor: '#FDBA74' },
          ],
          correctAnswerId: 'icecream',
        },
        {
          questionEn: 'Which animal FLIES in the sky? ☁️',
          questionHi: 'आसमान में कौन उड़ता है? 🦅',
          speechEn: 'Which animal has wings and flies in the sky?',
          speechHi: 'पंख फैलाकर आसमान में कौन उड़ता है?',
          categoryEn: 'Animals',
          categoryHi: 'पशु-पक्षी',
          options: [
            { id: 'eagle', labelEn: 'Eagle (Flies)', labelHi: 'चील (उड़ती है)', emoji: '🦅', color: '#0284C7', bgColor: '#F0F9FF', borderColor: '#BAE6FD' },
            { id: 'lion', labelEn: 'Lion (Walks)', labelHi: 'शेर (दौड़ता है)', emoji: '🦁', color: '#D97706', bgColor: '#FFFBEB', borderColor: '#FDE68A' },
          ],
          correctAnswerId: 'eagle',
        },
        {
          questionEn: 'Who says "Meow-Meow"? 🐱',
          questionHi: '"म्याऊं-म्याऊं" कौन बोलती है? 🐱',
          speechEn: 'Listen: Meow meow! Who makes this sound?',
          speechHi: 'सुनो: म्याऊं-म्याऊं! यह आवाज कौन निकालती है?',
          categoryEn: 'Sounds',
          categoryHi: 'आवाज',
          options: [
            { id: 'cat', labelEn: 'Cat (Meow)', labelHi: 'बिल्ली मौसी', emoji: '🐱', color: '#EA580C', bgColor: '#FFF7ED', borderColor: '#FDBA74' },
            { id: 'dog', labelEn: 'Dog (Woof)', labelHi: 'वफादार कुत्ता', emoji: '🐕', color: '#0284C7', bgColor: '#F0F9FF', borderColor: '#BAE6FD' },
          ],
          correctAnswerId: 'cat',
        },
        {
          questionEn: 'What number comes next? 1, 2, 3, __ 🔢',
          questionHi: 'अगली संख्या क्या आएगी? 1, 2, 3, __ 🔢',
          speechEn: 'What number comes after three? 1, 2, 3...',
          speechHi: '1, 2, 3 के बाद कौन सा नंबर आता है?',
          visual: '1️⃣ ➡️ 2️⃣ ➡️ 3️⃣ ➡️ ❓',
          categoryEn: 'Sequence',
          categoryHi: 'क्रम',
          options: [
            { id: '4', labelEn: 'Number 4', labelHi: 'संख्या 4', emoji: '4️⃣', color: '#16A34A', bgColor: '#F0FDF4', borderColor: '#BBF7D0' },
            { id: '5', labelEn: 'Number 5', labelHi: 'संख्या 5', emoji: '5️⃣', color: '#DC2626', bgColor: '#FEF2F2', borderColor: '#FECACA' },
          ],
          correctAnswerId: '4',
        },
        {
          questionEn: 'Which animal gives us sweet MILK? 🥛',
          questionHi: 'हमें पौष्टिक दूध कौन देती है? 🥛',
          speechEn: 'Which animal gives us healthy milk to drink?',
          speechHi: 'हमें स्वस्थ और मीठा दूध कौन देती है? पहचानें!',
          categoryEn: 'Nature',
          categoryHi: 'प्रकृति',
          options: [
            { id: 'cow', labelEn: 'Cow (Milk)', labelHi: 'गौ माता (दूध)', emoji: '🐄', color: '#059669', bgColor: '#ECFDF5', borderColor: '#A7F3D0' },
            { id: 'tiger', labelEn: 'Tiger (Wild)', labelHi: 'जंगली बाघ', emoji: '🐅', color: '#D97706', bgColor: '#FFFBEB', borderColor: '#FDE68A' },
          ],
          correctAnswerId: 'cow',
        },
        {
          questionEn: 'Which shape is a SQUARE with 4 sides? 🟩',
          questionHi: '4 बराबर भुजाओं वाला चौकोर (वर्ग) कौन सा है? 🟩',
          speechEn: 'Which shape is a square with four equal sides? Tap the square!',
          speechHi: 'चार बराबर भुजाओं वाला चौकोर यानी वर्ग कौन सा है?',
          categoryEn: 'Shapes',
          categoryHi: 'आकार',
          options: [
            { id: 'square', labelEn: 'Square (4 sides)', labelHi: 'चौकोर (वर्ग)', emoji: '🟩', color: '#059669', bgColor: '#ECFDF5', borderColor: '#A7F3D0' },
            { id: 'circle', labelEn: 'Round Circle', labelHi: 'गोल वृत्त', emoji: '⚪', color: '#64748B', bgColor: '#F8FAFC', borderColor: '#CBD5E1' },
          ],
          correctAnswerId: 'square',
        },
        {
          questionEn: 'Which fruit is bright YELLOW? 🟡',
          questionHi: 'पीला फल कौन सा है? 🟡',
          speechEn: 'Which sweet fruit is bright yellow color? Tap the yellow banana!',
          speechHi: 'पीले रंग का मीठा फल कौन सा है? केले को पहचानें!',
          categoryEn: 'Colors',
          categoryHi: 'रंग',
          options: [
            { id: 'banana', labelEn: 'Yellow Banana', labelHi: 'पीला केला', emoji: '🍌', color: '#D97706', bgColor: '#FEF9C3', borderColor: '#FDE047' },
            { id: 'apple', labelEn: 'Red Apple', labelHi: 'लाल सेब', emoji: '🍎', color: '#DC2626', bgColor: '#FEF2F2', borderColor: '#FECACA' },
          ],
          correctAnswerId: 'banana',
        },
        {
          questionEn: 'How many floating balloons? 🎈',
          questionHi: 'यहाँ कितने गुब्बारे हैं? 🎈',
          speechEn: 'Count the balloons! How many balloons do you see?',
          speechHi: 'गुब्बारे गिनें! कितने गुब्बारे उड़ रहे हैं?',
          visual: '🎈 🎈',
          categoryEn: 'Counting',
          categoryHi: 'गिनती',
          options: [
            { id: '2', labelEn: '2 Balloons', labelHi: '2 गुब्बारे', emoji: '2️⃣', color: '#DB2777', bgColor: '#FDF2F8', borderColor: '#FBCFE8' },
            { id: '3', labelEn: '3 Balloons', labelHi: '3 गुब्बारे', emoji: '3️⃣', color: '#2563EB', bgColor: '#EFF6FF', borderColor: '#93C5FD' },
          ],
          correctAnswerId: '2',
        },
      ];
    }

    // -------------------------------------------------------------
    // CLASS 1 & 2 — FOUNDATIONAL MATHS & PATTERNS
    // -------------------------------------------------------------
    if (userGrade === 1 || userGrade === 2) {
      return [
        {
          questionEn: 'What is 5 + 4?',
          questionHi: '5 + 4 कितना होता है?',
          speechEn: 'What is five plus four?',
          speechHi: 'पाँच जमा चार कितना होता है?',
          visual: '🖐️ + 🖐️ (5 + 4)',
          categoryEn: 'Addition',
          categoryHi: 'जोड़',
          options: [
            { id: '9', labelEn: '9 (Nine)', labelHi: '9 (नौ)', emoji: '9️⃣', color: '#16A34A', bgColor: '#F0FDF4', borderColor: '#86EFAC' },
            { id: '8', labelEn: '8 (Eight)', labelHi: '8 (आठ)', emoji: '8️⃣', color: '#DC2626', bgColor: '#FEF2F2', borderColor: '#FECACA' },
          ],
          correctAnswerId: '9',
        },
        {
          questionEn: 'What is 10 - 3?',
          questionHi: '10 में से 3 घटाने पर क्या बचेगा?',
          speechEn: 'What is ten minus three?',
          speechHi: 'दस में से तीन घटाने पर क्या बचेगा?',
          visual: '🔟 - 3️⃣',
          categoryEn: 'Subtraction',
          categoryHi: 'घटाव',
          options: [
            { id: '7', labelEn: '7 (Seven)', labelHi: '7 (सात)', emoji: '7️⃣', color: '#16A34A', bgColor: '#F0FDF4', borderColor: '#86EFAC' },
            { id: '6', labelEn: '6 (Six)', labelHi: '6 (छह)', emoji: '6️⃣', color: '#DC2626', bgColor: '#FEF2F2', borderColor: '#FECACA' },
          ],
          correctAnswerId: '7',
        },
        {
          questionEn: 'Which number is GREATER?',
          questionHi: 'कौन सी संख्या बड़ी है?',
          speechEn: 'Which number is greater: 58 or 49?',
          speechHi: 'कौन सी संख्या बड़ी है: 58 या 49?',
          categoryEn: 'Comparison',
          categoryHi: 'संख्या तुलना',
          options: [
            { id: '58', labelEn: '58 (Greater)', labelHi: '58 (बड़ी)', emoji: '🔢', color: '#0284C7', bgColor: '#F0F9FF', borderColor: '#BAE6FD' },
            { id: '49', labelEn: '49 (Smaller)', labelHi: '49 (छोटी)', emoji: '🔢', color: '#64748B', bgColor: '#F8FAFC', borderColor: '#CBD5E1' },
          ],
          correctAnswerId: '58',
        },
        {
          questionEn: 'Next number: 2, 4, 6, __',
          questionHi: 'अगली संख्या: 2, 4, 6, __',
          speechEn: 'Skip count by two: 2, 4, 6... what comes next?',
          speechHi: '2, 4, 6 के बाद अगला अंक क्या होगा?',
          visual: '⚡ 2 ➡️ 4 ➡️ 6 ➡️ ❓',
          categoryEn: 'Pattern',
          categoryHi: 'पैटर्न',
          options: [
            { id: '8', labelEn: '8 (Eight)', labelHi: '8 (आठ)', emoji: '8️⃣', color: '#16A34A', bgColor: '#F0FDF4', borderColor: '#86EFAC' },
            { id: '7', labelEn: '7 (Seven)', labelHi: '7 (सात)', emoji: '7️⃣', color: '#DC2626', bgColor: '#FEF2F2', borderColor: '#FECACA' },
          ],
          correctAnswerId: '8',
        },
        {
          questionEn: 'How many sides in a TRIANGLE?',
          questionHi: 'एक त्रिभुज की कितनी भुजाएँ (साइड्स) होती हैं?',
          speechEn: 'How many sides does a triangle have?',
          speechHi: 'एक त्रिभुज की कितनी भुजाएँ होती हैं?',
          visual: '🔺',
          categoryEn: 'Geometry',
          categoryHi: 'ज्यामिति',
          options: [
            { id: '3', labelEn: '3 Sides 🔺', labelHi: '3 भुजाएँ 🔺', emoji: '3️⃣', color: '#D97706', bgColor: '#FEF9C3', borderColor: '#FDE047' },
            { id: '4', labelEn: '4 Sides ⏹️', labelHi: '4 भुजाएँ ⏹️', emoji: '4️⃣', color: '#0284C7', bgColor: '#F0F9FF', borderColor: '#BAE6FD' },
          ],
          correctAnswerId: '3',
        },
        {
          questionEn: 'What is 6 + 7?',
          questionHi: '6 + 7 कितना होगा?',
          speechEn: 'What is six plus seven?',
          speechHi: 'छह जमा सात कितना होगा?',
          visual: '➕',
          categoryEn: 'Addition',
          categoryHi: 'जोड़',
          options: [
            { id: '13', labelEn: '13', labelHi: '13', emoji: '⭐', color: '#16A34A', bgColor: '#F0FDF4', borderColor: '#86EFAC' },
            { id: '14', labelEn: '14', labelHi: '14', emoji: '⭐', color: '#DC2626', bgColor: '#FEF2F2', borderColor: '#FECACA' },
          ],
          correctAnswerId: '13',
        },
        {
          questionEn: 'What is HALF of 10? 🍕',
          questionHi: '10 का आधा कितना होता है? 🍕',
          speechEn: 'What is half of ten?',
          speechHi: 'दस का आधा कितना होता है?',
          visual: '🍕 10 ÷ 2',
          categoryEn: 'Fractions',
          categoryHi: 'भिन्न',
          options: [
            { id: '5', labelEn: '5 (Five)', labelHi: '5 (पाँच)', emoji: '5️⃣', color: '#059669', bgColor: '#ECFDF5', borderColor: '#A7F3D0' },
            { id: '6', labelEn: '6 (Six)', labelHi: '6 (छह)', emoji: '6️⃣', color: '#DC2626', bgColor: '#FEF2F2', borderColor: '#FECACA' },
          ],
          correctAnswerId: '5',
        },
        {
          questionEn: 'How many minutes in 1 HOUR? 🕒',
          questionHi: '1 घंटे में कितने मिनट होते हैं? 🕒',
          speechEn: 'How many minutes are in one hour?',
          speechHi: 'एक घंटे में कितने मिनट होते हैं?',
          visual: '🕒 ⏰',
          categoryEn: 'Time',
          categoryHi: 'समय',
          options: [
            { id: '60', labelEn: '60 Minutes', labelHi: '60 मिनट', emoji: '⌛', color: '#0284C7', bgColor: '#F0F9FF', borderColor: '#BAE6FD' },
            { id: '100', labelEn: '100 Minutes', labelHi: '100 मिनट', emoji: '⌛', color: '#DC2626', bgColor: '#FEF2F2', borderColor: '#FECACA' },
          ],
          correctAnswerId: '60',
        },
        {
          questionEn: 'Next number: 5, 10, 15, __',
          questionHi: 'अगली संख्या: 5, 10, 15, __',
          speechEn: 'Count by fives: 5, 10, 15... what comes next?',
          speechHi: 'पाँच की छलांग: 5, 10, 15 के बाद क्या आएगा?',
          visual: '🏃 5 ➡️ 10 ➡️ 15 ➡️ ❓',
          categoryEn: 'Skip Count',
          categoryHi: 'छलांग गिनती',
          options: [
            { id: '20', labelEn: '20', labelHi: '20', emoji: '🎯', color: '#16A34A', bgColor: '#F0FDF4', borderColor: '#86EFAC' },
            { id: '25', labelEn: '25', labelHi: '25', emoji: '🎯', color: '#DC2626', bgColor: '#FEF2F2', borderColor: '#FECACA' },
          ],
          correctAnswerId: '20',
        },
        {
          questionEn: 'Is number 14 Even or Odd? ⚖️',
          questionHi: 'क्या 14 सम (Even) संख्या है या विषम (Odd)? ⚖️',
          speechEn: 'Is the number fourteen even or odd?',
          speechHi: 'क्या संख्या 14 सम है या विषम?',
          categoryEn: 'Number Sense',
          categoryHi: 'सम व विषम',
          options: [
            { id: 'even', labelEn: 'Even (सम)', labelHi: 'Even (सम संख्या)', emoji: '⚖️', color: '#2563EB', bgColor: '#EFF6FF', borderColor: '#93C5FD' },
            { id: 'odd', labelEn: 'Odd (विषम)', labelHi: 'Odd (विषम संख्या)', emoji: '⚖️', color: '#D97706', bgColor: '#FFFBEB', borderColor: '#FDE68A' },
          ],
          correctAnswerId: 'even',
        },
      ];
    }

    // -------------------------------------------------------------
    // CLASS 3 & 4 — MULTIPLICATION, METRICS & LOGIC
    // -------------------------------------------------------------
    if (userGrade === 3 || userGrade === 4) {
      return [
        {
          questionEn: 'What is 7 × 6?',
          questionHi: '7 × 6 कितना होता है?',
          speechEn: 'What is seven times six?',
          speechHi: 'सात को छह से गुणा करने पर क्या आएगा?',
          visual: '✖️ 7 × 6',
          categoryEn: 'Tables',
          categoryHi: 'पहाड़े',
          options: [
            { id: '42', labelEn: '42', labelHi: '42', emoji: '🎯', color: '#16A34A', bgColor: '#F0FDF4', borderColor: '#86EFAC' },
            { id: '48', labelEn: '48', labelHi: '48', emoji: '🎯', color: '#DC2626', bgColor: '#FEF2F2', borderColor: '#FECACA' },
          ],
          correctAnswerId: '42',
        },
        {
          questionEn: 'What is 8 × 8?',
          questionHi: '8 × 8 कितना होता है?',
          speechEn: 'What is eight times eight?',
          speechHi: 'आठ को आठ से गुणा करने पर क्या आएगा?',
          visual: '✖️ 8 × 8',
          categoryEn: 'Tables',
          categoryHi: 'पहाड़े',
          options: [
            { id: '64', labelEn: '64', labelHi: '64', emoji: '⚡', color: '#16A34A', bgColor: '#F0FDF4', borderColor: '#86EFAC' },
            { id: '56', labelEn: '56', labelHi: '56', emoji: '⚡', color: '#DC2626', bgColor: '#FEF2F2', borderColor: '#FECACA' },
          ],
          correctAnswerId: '64',
        },
        {
          questionEn: '1 kilogram equals how many grams?',
          questionHi: '1 किलोग्राम में कितने ग्राम होते हैं?',
          speechEn: 'One kilogram equals how many grams?',
          speechHi: 'एक किलोग्राम में कितने ग्राम होते हैं?',
          visual: '⚖️ 1 kg = ? g',
          categoryEn: 'Metrics',
          categoryHi: 'माप-तौल',
          options: [
            { id: '1000', labelEn: '1000 g', labelHi: '1000 ग्राम', emoji: '⚖️', color: '#0284C7', bgColor: '#F0F9FF', borderColor: '#BAE6FD' },
            { id: '100', labelEn: '100 g', labelHi: '100 ग्राम', emoji: '⚖️', color: '#DC2626', bgColor: '#FEF2F2', borderColor: '#FECACA' },
          ],
          correctAnswerId: '1000',
        },
        {
          questionEn: 'What is 1/2 of 80?',
          questionHi: '80 का आधा (1/2) कितना होगा?',
          speechEn: 'What is one-half of eighty?',
          speechHi: 'अस्सी का आधा कितना होगा?',
          visual: '🍕 80 ÷ 2',
          categoryEn: 'Fractions',
          categoryHi: 'भिन्न',
          options: [
            { id: '40', labelEn: '40', labelHi: '40', emoji: '🍕', color: '#16A34A', bgColor: '#F0FDF4', borderColor: '#86EFAC' },
            { id: '30', labelEn: '30', labelHi: '30', emoji: '🍕', color: '#DC2626', bgColor: '#FEF2F2', borderColor: '#FECACA' },
          ],
          correctAnswerId: '40',
        },
        {
          questionEn: 'What is 45 ÷ 5?',
          questionHi: '45 ÷ 5 कितना होता है?',
          speechEn: 'What is forty-five divided by five?',
          speechHi: 'पैंतालीस को पाँच से भाग देने पर क्या आएगा?',
          visual: '➗ 45 ÷ 5',
          categoryEn: 'Division',
          categoryHi: 'भाग',
          options: [
            { id: '9', labelEn: '9', labelHi: '9', emoji: '🔢', color: '#059669', bgColor: '#ECFDF5', borderColor: '#A7F3D0' },
            { id: '8', labelEn: '8', labelHi: '8', emoji: '🔢', color: '#DC2626', bgColor: '#FEF2F2', borderColor: '#FECACA' },
          ],
          correctAnswerId: '9',
        },
        {
          questionEn: 'Perimeter of a square with side 6cm:',
          questionHi: '6 सेमी भुजा वाले वर्ग का परिमाप क्या होगा?',
          speechEn: 'Perimeter of a square with side six centimeters:',
          speechHi: '6 सेमी भुजा वाले वर्ग का परिमाप कितना होगा?',
          visual: '📐 4 × 6cm',
          categoryEn: 'Perimeter',
          categoryHi: 'परिमाप',
          options: [
            { id: '24', labelEn: '24 cm', labelHi: '24 सेमी', emoji: '📐', color: '#2563EB', bgColor: '#EFF6FF', borderColor: '#93C5FD' },
            { id: '36', labelEn: '36 cm', labelHi: '36 सेमी', emoji: '📐', color: '#DC2626', bgColor: '#FEF2F2', borderColor: '#FECACA' },
          ],
          correctAnswerId: '24',
        },
        {
          questionEn: 'Roman numeral for number 10:',
          questionHi: 'संख्या 10 का रोमन अंक क्या है?',
          speechEn: 'What is the Roman numeral for ten?',
          speechHi: 'संख्या दस का रोमन अंक क्या होता है?',
          visual: '🏛️ 10 = ?',
          categoryEn: 'Roman',
          categoryHi: 'रोमन अंक',
          options: [
            { id: 'X', labelEn: 'X (Ten)', labelHi: 'X (दस)', emoji: '🏛️', color: '#D97706', bgColor: '#FEF9C3', borderColor: '#FDE047' },
            { id: 'V', labelEn: 'V (Five)', labelHi: 'V (पाँच)', emoji: '🏛️', color: '#64748B', bgColor: '#F8FAFC', borderColor: '#CBD5E1' },
          ],
          correctAnswerId: 'X',
        },
        {
          questionEn: 'Which fraction is LARGER?',
          questionHi: 'कौन सी भिन्न बड़ी है: 1/2 या 1/4?',
          speechEn: 'Which fraction is larger: one-half or one-fourth?',
          speechHi: 'कौन सी भिन्न बड़ी है: 1/2 या 1/4?',
          visual: '🍕 1/2 vs 1/4',
          categoryEn: 'Fractions',
          categoryHi: 'भिन्न',
          options: [
            { id: 'half', labelEn: '1/2 (Half)', labelHi: '1/2 (आधा भाग)', emoji: '🍕', color: '#16A34A', bgColor: '#F0FDF4', borderColor: '#86EFAC' },
            { id: 'fourth', labelEn: '1/4 (Quarter)', labelHi: '1/4 (चौथाई भाग)', emoji: '🍕', color: '#64748B', bgColor: '#F8FAFC', borderColor: '#CBD5E1' },
          ],
          correctAnswerId: 'half',
        },
      ];
    }

    // -------------------------------------------------------------
    // CLASS 5 & 6 — INTEGERS, ANGLES, ALGEBRA & SCIENCE
    // -------------------------------------------------------------
    return [
      {
        questionEn: 'What is (-5) + 9?',
        questionHi: '(-5) + 9 कितना होता है?',
        speechEn: 'What is negative five plus nine?',
        speechHi: 'ऋण पाँच जमा नौ कितना होगा?',
        visual: '❄️ (-5) + 9',
        categoryEn: 'Integers',
        categoryHi: 'पूर्णांक',
        options: [
          { id: '4', labelEn: '4 (Positive)', labelHi: '4 (धनात्मक)', emoji: '➕', color: '#16A34A', bgColor: '#F0FDF4', borderColor: '#86EFAC' },
          { id: '-4', labelEn: '-4 (Negative)', labelHi: '-4 (ऋणात्मक)', emoji: '➖', color: '#DC2626', bgColor: '#FEF2F2', borderColor: '#FECACA' },
        ],
        correctAnswerId: '4',
      },
      {
        questionEn: 'A RIGHT ANGLE measures exactly:',
        questionHi: 'एक समकोण (Right Angle) का मान कितना होता है?',
        speechEn: 'A right angle measures exactly how many degrees?',
        speechHi: 'एक समकोण का माप कितने डिग्री होता है?',
        visual: '📐 ∟',
        categoryEn: 'Angles',
        categoryHi: 'कोण',
        options: [
          { id: '90', labelEn: '90° (Right Angle)', labelHi: '90° (समकोण)', emoji: '📐', color: '#0284C7', bgColor: '#F0F9FF', borderColor: '#BAE6FD' },
          { id: '180', labelEn: '180° (Straight)', labelHi: '180° (ऋजु कोण)', emoji: '📐', color: '#DC2626', bgColor: '#FEF2F2', borderColor: '#FECACA' },
        ],
        correctAnswerId: '90',
      },
      {
        questionEn: 'What is 15 × 6?',
        questionHi: '15 × 6 कितना होता है?',
        speechEn: 'What is fifteen times six?',
        speechHi: 'पंद्रह को छह से गुणा करने पर क्या आएगा?',
        visual: '✖️ 15 × 6',
        categoryEn: 'Multiplication',
        categoryHi: 'गुणा',
        options: [
          { id: '90', labelEn: '90', labelHi: '90', emoji: '⚡', color: '#16A34A', bgColor: '#F0FDF4', borderColor: '#86EFAC' },
          { id: '80', labelEn: '80', labelHi: '80', emoji: '⚡', color: '#DC2626', bgColor: '#FEF2F2', borderColor: '#FECACA' },
        ],
        correctAnswerId: '90',
      },
      {
        questionEn: 'What is (-4) × (-6)?',
        questionHi: '(-4) × (-6) कितना होता है?',
        speechEn: 'Negative four multiplied by negative six is:',
        speechHi: 'ऋण चार गुना ऋण छह का मान क्या होगा?',
        visual: '🧲 (-) × (-) = (+)',
        categoryEn: 'Integers',
        categoryHi: 'पूर्णांक',
        options: [
          { id: '24', labelEn: '+24 (Positive)', labelHi: '+24 (धनात्मक)', emoji: '➕', color: '#16A34A', bgColor: '#F0FDF4', borderColor: '#86EFAC' },
          { id: '-24', labelEn: '-24 (Negative)', labelHi: '-24 (ऋणात्मक)', emoji: '➖', color: '#DC2626', bgColor: '#FEF2F2', borderColor: '#FECACA' },
        ],
        correctAnswerId: '24',
      },
      {
        questionEn: 'Sum of all angles in a triangle:',
        questionHi: 'त्रिभुज के तीनों कोणों का योग कितना होता है?',
        speechEn: 'What is the sum of all angles in a triangle?',
        speechHi: 'त्रिभुज के तीनों अंतः कोणों का योग कितना होता है?',
        visual: '🔺 ∠A + ∠B + ∠C',
        categoryEn: 'Geometry',
        categoryHi: 'ज्यामिति',
        options: [
          { id: '180', labelEn: '180°', labelHi: '180°', emoji: '🔺', color: '#2563EB', bgColor: '#EFF6FF', borderColor: '#93C5FD' },
          { id: '360', labelEn: '360°', labelHi: '360°', emoji: '🔺', color: '#DC2626', bgColor: '#FEF2F2', borderColor: '#FECACA' },
        ],
        correctAnswerId: '180',
      },
      {
        questionEn: 'Opposite poles of two magnets:',
        questionHi: 'चुंबक के दो विपरीत ध्रुव (North और South) आपस में क्या करते हैं?',
        speechEn: 'What do opposite poles of two magnets do?',
        speechHi: 'चुंबक के विपरीत ध्रुव एक-दूसरे को क्या करते हैं?',
        visual: '🧲 N 🧲 S',
        categoryEn: 'Science',
        categoryHi: 'विज्ञान',
        options: [
          { id: 'attract', labelEn: 'Attract (आकर्षित)', labelHi: 'Attract (खींचते हैं)', emoji: '🧲', color: '#16A34A', bgColor: '#F0FDF4', borderColor: '#86EFAC' },
          { id: 'repel', labelEn: 'Repel (प्रतिकर्षित)', labelHi: 'Repel (दूर फेंकते हैं)', emoji: '⚡', color: '#DC2626', bgColor: '#FEF2F2', borderColor: '#FECACA' },
        ],
        correctAnswerId: 'attract',
      },
    ];
  };

  const [questions, setQuestions] = useState<QuickQuestion[]>([]);

  useEffect(() => {
    if (visible) {
      resetGame();
    } else {
      stopSpeaking();
    }
  }, [visible, userGrade]);

  const resetGame = () => {
    const pool = getQuestionPool();
    // Shuffle pool
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    setQuestions(shuffled);
    setCurrentQIndex(0);
    setTimeLeft(60);
    setScore(0);
    setCombo(0);
    setMaxCombo(0);
    setTotalAnswered(0);
    setCorrectCount(0);
    setFeedback(null);
    setGameState('intro');
  };

  const startGame = () => {
    soundManager.playLaser();
    triggerHaptic('medium');
    setGameState('playing');
  };

  // Auto-speak question when it appears
  useEffect(() => {
    if (gameState === 'playing' && questions.length > 0) {
      const q = questions[currentQIndex % questions.length];
      if (q) {
        const text = activeLang === 'hi' ? q.speechHi : q.speechEn;
        speakText(text);
      }
    }
  }, [currentQIndex, gameState, activeLang]);

  // Clean speech on unmount
  useEffect(() => {
    return () => {
      stopSpeaking();
    };
  }, []);

  // Timer countdown
  useEffect(() => {
    let timer: any = null;
    if (gameState === 'playing') {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            endGame();
            return 0;
          }
          if (prev <= 10) {
            // Heartbeat ticking in last 10s
            triggerHaptic('light');
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [gameState]);

  const endGame = () => {
    stopSpeaking();
    soundManager.playFanfare();
    triggerHaptic('success');
    setGameState('gameover');
    addStars(50);
    if (onEarnStars) onEarnStars(50);
  };

  const getComboMultiplier = (c: number): number => {
    if (c >= 12) return 10;
    if (c >= 8) return 5;
    if (c >= 5) return 3;
    if (c >= 2) return 2;
    return 1;
  };

  const getComboBadge = (c: number): { label: string; color: string } => {
    if (c >= 12) return { label: '👑 10x SUPER KID GODLIKE!', color: '#F59E0B' };
    if (c >= 8) return { label: '🚀 5x QUANTUM SPEED!', color: '#06B6D4' };
    if (c >= 5) return { label: '🔥 3x MEGA BRAIN!', color: '#EF4444' };
    if (c >= 2) return { label: '⚡ 2x SUPER SPEED!', color: '#EAB308' };
    return { label: '1x FOCUS', color: '#64748B' };
  };

  const handleSelectAnswer = (selectedId: string) => {
    if (feedback !== null || gameState !== 'playing') return;

    const currentQ = questions[currentQIndex % questions.length];
    const isCorrect = selectedId === currentQ.correctAnswerId;
    setTotalAnswered((prev) => prev + 1);

    if (isCorrect) {
      soundManager.playCorrect();
      triggerHaptic('medium');
      const newCombo = combo + 1;
      setCombo(newCombo);
      if (newCombo > maxCombo) setMaxCombo(newCombo);

      const multiplier = getComboMultiplier(newCombo);
      const points = 10 * multiplier;
      setScore((s) => s + points);
      setCorrectCount((c) => c + 1);
      setFeedback('correct');

      // Animate combo scale
      Animated.sequence([
        Animated.timing(comboScaleAnim, {
          toValue: 1.3,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(comboScaleAnim, {
          toValue: 1,
          duration: 150,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      soundManager.playIncorrect();
      triggerHaptic('error');
      setCombo(0);
      setFeedback('wrong');
    }

    setTimeout(() => {
      setFeedback(null);
      setCurrentQIndex((idx) => (idx + 1) % questions.length);
    }, 500);
  };

  const handleClose = () => {
    stopSpeaking();
    onClose();
  };

  const currentQ = questions[currentQIndex % (questions.length || 1)] || {
    questionEn: 'Loading...',
    questionHi: 'लोड हो रहा है...',
    speechEn: 'Loading question',
    speechHi: 'प्रश्न लोड हो रहा है',
    options: [],
    correctAnswerId: '',
    categoryEn: 'STEM',
    categoryHi: 'अभ्यास',
  };

  const comboBadge = getComboBadge(combo);
  const accuracy =
    totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 100;

  return (
    <Modal visible={visible} animationType="slide" transparent onRequestClose={handleClose}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          {/* Top Bar */}
          <View style={styles.topBar}>
            <View style={styles.topBarLeft}>
              <Text style={styles.lightningIcon}>⚡</Text>
              <Text style={styles.topBarTitle}>
                {activeLang === 'hi' ? 'सुपर किड ब्रेन बूस्टर' : 'Super Kid Brain Booster'}
              </Text>
            </View>
            <TouchableOpacity onPress={handleClose} style={styles.closeBtn}>
              <Text style={styles.closeText}>✕</Text>
            </TouchableOpacity>
          </View>

          {/* INTRO SCREEN */}
          {gameState === 'intro' && (
            <View style={styles.introBox}>
              <View style={styles.heroGlowBox}>
                <Text style={styles.heroEmoji}>🦸⚡</Text>
              </View>

              <Text style={styles.introTitle}>
                {activeLang === 'hi' ? '60-सेकंड सुपर किड स्पीड टेस्ट' : '60-Second Lightning Reflex'}
              </Text>
              <Text style={styles.introSubtitle}>
                {activeLang === 'hi'
                  ? '60 सेकंड में अपने सुपर-किड दिमाग की स्पीड और फोकस टेस्ट करें!'
                  : 'Test your super-kid reflexes and build giant combos in 60s!'}
              </Text>

              <View style={styles.rulesList}>
                <View style={styles.ruleItem}>
                  <Text style={styles.ruleEmoji}>⚡</Text>
                  <Text style={styles.ruleText}>
                    {activeLang === 'hi'
                      ? 'तेज और मजेदार सचित्र प्रश्न (60 सेकंड नॉन-स्टॉप)'
                      : 'Quick-fire sensory picture questions (60s non-stop)'}
                  </Text>
                </View>
                <View style={styles.ruleItem}>
                  <Text style={styles.ruleEmoji}>🔥</Text>
                  <Text style={styles.ruleText}>
                    {activeLang === 'hi'
                      ? 'सही जवाब देकर 2x, 3x, 5x व 10x कॉम्बो बनाएं!'
                      : 'Answer fast to build 2x, 3x, 5x & 10x Combos!'}
                  </Text>
                </View>
                <View style={styles.ruleItem}>
                  <Text style={styles.ruleEmoji}>⭐</Text>
                  <Text style={styles.ruleText}>
                    {activeLang === 'hi'
                      ? '+50 बोनस स्टार्स जीतें और सुपर किड रैंकिंग पाएं!'
                      : 'Win +50 Bonus Stars & Official Super Kid Ranking!'}
                  </Text>
                </View>
              </View>

              <TouchableOpacity
                style={styles.startBtn}
                activeOpacity={0.88}
                onPress={startGame}
              >
                <Text style={styles.startBtnText}>
                  {activeLang === 'hi' ? 'शुरू करें! (60s RUSH) 🚀' : 'START 60s RUSH! 🚀'}
                </Text>
              </TouchableOpacity>
            </View>
          )}

          {/* PLAYING SCREEN */}
          {gameState === 'playing' && (
            <View style={styles.playBox}>
              {/* Stats Bar */}
              <View style={styles.statsBar}>
                {/* Timer Box */}
                <View
                  style={[
                    styles.timerBox,
                    timeLeft <= 10 && styles.timerBoxUrgent,
                  ]}
                >
                  <Text style={styles.timerIcon}>⏱️</Text>
                  <Text
                    style={[
                      styles.timerText,
                      timeLeft <= 10 && styles.timerTextUrgent,
                    ]}
                  >
                    {timeLeft}s
                  </Text>
                </View>

                {/* Combo Badge */}
                <Animated.View
                  style={[
                    styles.comboBadgeBox,
                    {
                      borderColor: comboBadge.color,
                      transform: [{ scale: comboScaleAnim }],
                    },
                  ]}
                >
                  <Text style={[styles.comboBadgeText, { color: comboBadge.color }]}>
                    {comboBadge.label}
                  </Text>
                </Animated.View>

                {/* Score Box */}
                <View style={styles.scoreBox}>
                  <Text style={styles.scoreLabel}>SCORE</Text>
                  <Text style={styles.scoreVal}>{score}</Text>
                </View>
              </View>

              {/* Countdown Progress Line */}
              <View style={styles.progressLineBg}>
                <View
                  style={[
                    styles.progressLineFill,
                    {
                      width: `${(timeLeft / 60) * 100}%`,
                      backgroundColor:
                        timeLeft > 25 ? '#10B981' : timeLeft > 10 ? '#F59E0B' : '#EF4444',
                    },
                  ]}
                />
              </View>

              {/* Question Card */}
              <View
                style={[
                  styles.questionCard,
                  feedback === 'correct' && styles.cardCorrect,
                  feedback === 'wrong' && styles.cardWrong,
                ]}
              >
                {/* Header Row: Category & Speaker Button */}
                <View style={styles.questionCardHeaderRow}>
                  <View style={styles.categoryPill}>
                    <Text style={styles.categoryText}>
                      {activeLang === 'hi' ? currentQ.categoryHi : currentQ.categoryEn}
                    </Text>
                  </View>

                  <SpeakerButton
                    textToSpeak={activeLang === 'hi' ? currentQ.speechHi : currentQ.speechEn}
                    size="pill"
                    showLabel
                    activeLang={activeLang}
                  />
                </View>

                {currentQ.visual && (
                  <Text style={styles.questionVisual}>{currentQ.visual}</Text>
                )}

                <Text style={styles.questionTitle}>
                  {activeLang === 'hi' ? currentQ.questionHi : currentQ.questionEn}
                </Text>
              </View>

              {/* Big Sensory Responsive Option Cards */}
              <View style={styles.optionsRow}>
                {currentQ.options.map((opt) => {
                  const isSelectedCorrect = feedback === 'correct' && opt.id === currentQ.correctAnswerId;
                  const isSelectedWrong = feedback === 'wrong' && opt.id !== currentQ.correctAnswerId;

                  return (
                    <TouchableOpacity
                      key={opt.id}
                      style={[
                        styles.optionCard,
                        {
                          backgroundColor: opt.bgColor || '#F0F9FF',
                          borderColor: opt.borderColor || '#BAE6FD',
                          borderBottomColor: opt.borderColor || '#7DD3FC',
                        },
                        isSelectedCorrect && styles.optCorrect,
                        isSelectedWrong && styles.optWrong,
                      ]}
                      activeOpacity={0.82}
                      onPress={() => handleSelectAnswer(opt.id)}
                    >
                      {opt.emoji && (
                        <Text style={styles.optionEmoji}>{opt.emoji}</Text>
                      )}
                      <Text
                        style={[
                          styles.optionLabel,
                          { color: opt.color || '#0369A1' },
                          isSelectedCorrect && { color: '#FFFFFF' },
                          isSelectedWrong && { color: '#FFFFFF' },
                        ]}
                      >
                        {activeLang === 'hi' ? opt.labelHi : opt.labelEn}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>

              <View style={styles.speedHintBox}>
                <Text style={styles.speedHintText}>
                  {activeLang === 'hi'
                    ? '💡 टिप: जितनी तेजी से सही जवाब देंगे, कॉम्बो और स्कोर उतना बड़ा होगा!'
                    : '💡 Tip: The faster you answer correctly, the bigger your combo!'}
                </Text>
              </View>
            </View>
          )}

          {/* GAME OVER SCREEN */}
          {gameState === 'gameover' && (
            <View style={styles.gameoverBox}>
              <Text style={styles.trophyEmoji}>🏆⚡</Text>
              <Text style={styles.gameoverTitle}>
                {activeLang === 'hi' ? 'सुपर किड रिपोर्ट कार्ड' : 'SUPER KID AGILITY REPORT'}
              </Text>
              <Text style={styles.tierBadge}>🌟 S-TIER SUPER KID GENIUS 🌟</Text>

              {/* Results Grid */}
              <View style={styles.resultsGrid}>
                <View style={styles.resultItem}>
                  <Text style={styles.resultVal}>{score}</Text>
                  <Text style={styles.resultLabel}>
                    {activeLang === 'hi' ? 'कुल स्कोर' : 'Total Score'}
                  </Text>
                </View>
                <View style={styles.resultItem}>
                  <Text style={styles.resultVal}>{maxCombo}x</Text>
                  <Text style={styles.resultLabel}>
                    {activeLang === 'hi' ? 'उच्चतम कॉम्बो' : 'Max Combo'}
                  </Text>
                </View>
                <View style={styles.resultItem}>
                  <Text style={styles.resultVal}>{totalAnswered}</Text>
                  <Text style={styles.resultLabel}>
                    {activeLang === 'hi' ? 'कुल प्रश्न' : 'Questions'}
                  </Text>
                </View>
                <View style={styles.resultItem}>
                  <Text style={styles.resultVal}>{accuracy}%</Text>
                  <Text style={styles.resultLabel}>
                    {activeLang === 'hi' ? 'सटीकता' : 'Accuracy'}
                  </Text>
                </View>
              </View>

              {/* Reward Banner */}
              <View style={styles.rewardBanner}>
                <Text style={styles.rewardStars}>⭐ +50 STARS ADDED!</Text>
                <Text style={styles.rewardSub}>
                  {activeLang === 'hi'
                    ? 'आपकी दिमागी गति और सटीकता टॉप 1% सुपर बच्चों में है! 🚀'
                    : 'Your brain speed is in the top 1% of Junior Scientists! 🚀'}
                </Text>
              </View>

              {/* Action Buttons */}
              <View style={styles.gameOverActions}>
                <TouchableOpacity
                  style={styles.playAgainBtn}
                  activeOpacity={0.88}
                  onPress={startGame}
                >
                  <Text style={styles.playAgainText}>
                    {activeLang === 'hi' ? 'फिर से खेलें ⚡' : 'Play Again ⚡'}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.doneBtn}
                  activeOpacity={0.85}
                  onPress={handleClose}
                >
                  <Text style={styles.doneBtnText}>
                    {activeLang === 'hi' ? 'वापस जाएं 🔬' : 'Back to Hub 🔬'}
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
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(15, 23, 42, 0.65)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '92%',
    maxHeight: '92%',
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    borderWidth: 2.5,
    borderColor: '#0284C7',
    overflow: 'hidden',
    ...SHADOWS.large,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    backgroundColor: '#F0F9FF',
    borderBottomWidth: 1.5,
    borderBottomColor: '#BAE6FD',
  },
  topBarLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  lightningIcon: {
    fontSize: 20,
  },
  topBarTitle: {
    color: '#0369A1',
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  closeBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#E0F2FE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeText: {
    color: '#0284C7',
    fontSize: 16,
    fontWeight: 'bold',
  },

  // INTRO
  introBox: {
    padding: SPACING.lg,
    alignItems: 'center',
  },
  heroGlowBox: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#E0F2FE',
    borderWidth: 2.5,
    borderColor: '#38BDF8',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: SPACING.sm,
    ...SHADOWS.medium,
  },
  heroEmoji: {
    fontSize: 44,
  },
  introTitle: {
    color: '#0C4A6E',
    fontSize: 20,
    fontWeight: '900',
    textAlign: 'center',
    marginTop: 8,
  },
  introSubtitle: {
    color: '#0369A1',
    fontSize: 13,
    textAlign: 'center',
    marginTop: 4,
    marginBottom: 16,
    fontWeight: '600',
  },
  rulesList: {
    width: '100%',
    backgroundColor: '#F0F9FF',
    borderRadius: 16,
    padding: SPACING.md,
    gap: 10,
    marginBottom: 20,
    borderWidth: 1.5,
    borderColor: '#BAE6FD',
  },
  ruleItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  ruleEmoji: {
    fontSize: 18,
  },
  ruleText: {
    color: '#075985',
    fontSize: 12,
    fontWeight: '700',
    flex: 1,
  },
  startBtn: {
    width: '100%',
    backgroundColor: '#0284C7',
    paddingVertical: 14,
    borderRadius: 16,
    alignItems: 'center',
    borderBottomWidth: 4,
    borderBottomColor: '#0369A1',
    ...SHADOWS.medium,
  },
  startBtnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 0.5,
  },

  // PLAYING
  playBox: {
    padding: SPACING.md,
  },
  statsBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  timerBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F5F9',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: BORDER_RADIUS.full,
    gap: 4,
    borderWidth: 1,
    borderColor: '#CBD5E1',
  },
  timerBoxUrgent: {
    backgroundColor: '#FEE2E2',
    borderColor: '#F87171',
  },
  timerIcon: {
    fontSize: 14,
  },
  timerText: {
    color: '#0F172A',
    fontSize: 13,
    fontWeight: '900',
  },
  timerTextUrgent: {
    color: '#DC2626',
  },
  comboBadgeBox: {
    borderWidth: 1.5,
    borderRadius: BORDER_RADIUS.full,
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: '#FFFFFF',
  },
  comboBadgeText: {
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  scoreBox: {
    alignItems: 'flex-end',
  },
  scoreLabel: {
    color: '#64748B',
    fontSize: 9,
    fontWeight: '800',
  },
  scoreVal: {
    color: '#D97706',
    fontSize: 18,
    fontWeight: '900',
  },
  progressLineBg: {
    width: '100%',
    height: 6,
    backgroundColor: '#E2E8F0',
    borderRadius: 3,
    overflow: 'hidden',
    marginBottom: 14,
  },
  progressLineFill: {
    height: '100%',
    borderRadius: 3,
  },
  questionCard: {
    width: '100%',
    backgroundColor: '#F8FAFC',
    borderRadius: 20,
    padding: SPACING.md,
    alignItems: 'center',
    minHeight: 140,
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#E2E8F0',
    ...SHADOWS.card,
  },
  cardCorrect: {
    borderColor: '#10B981',
    backgroundColor: '#ECFDF5',
  },
  cardWrong: {
    borderColor: '#EF4444',
    backgroundColor: '#FEF2F2',
  },
  questionCardHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 8,
  },
  categoryPill: {
    backgroundColor: '#E0F2FE',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: BORDER_RADIUS.full,
  },
  categoryText: {
    color: '#0284C7',
    fontSize: 11,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  questionVisual: {
    fontSize: 32,
    marginVertical: 4,
    textAlign: 'center',
  },
  questionTitle: {
    color: '#0F172A',
    fontSize: 18,
    fontWeight: '800',
    textAlign: 'center',
    marginTop: 4,
    lineHeight: 25,
  },
  optionsRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    gap: 12,
    marginTop: 16,
  },
  optionCard: {
    flex: 1,
    minHeight: 96,
    paddingVertical: 14,
    paddingHorizontal: 8,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2.5,
    borderBottomWidth: 5,
    ...SHADOWS.medium,
  },
  optionEmoji: {
    fontSize: 34,
    marginBottom: 6,
  },
  optionLabel: {
    fontSize: 14,
    fontWeight: '900',
    textAlign: 'center',
  },
  optCorrect: {
    backgroundColor: '#10B981',
    borderColor: '#059669',
    borderBottomColor: '#047857',
  },
  optWrong: {
    backgroundColor: '#EF4444',
    borderColor: '#DC2626',
    borderBottomColor: '#B91C1C',
  },
  speedHintBox: {
    marginTop: 14,
  },
  speedHintText: {
    color: '#64748B',
    fontSize: 11,
    textAlign: 'center',
    fontStyle: 'italic',
    fontWeight: '600',
  },

  // GAME OVER
  gameoverBox: {
    padding: SPACING.md,
    alignItems: 'center',
  },
  trophyEmoji: {
    fontSize: 48,
    marginTop: 6,
  },
  gameoverTitle: {
    color: '#0F172A',
    fontSize: 20,
    fontWeight: '900',
    letterSpacing: 0.5,
    marginTop: 6,
  },
  tierBadge: {
    color: '#D97706',
    fontSize: 14,
    fontWeight: '900',
    marginTop: 4,
  },
  resultsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: '#F0F9FF',
    borderRadius: 18,
    padding: SPACING.md,
    marginVertical: 16,
    gap: 8,
    borderWidth: 1.5,
    borderColor: '#BAE6FD',
  },
  resultItem: {
    width: '46%',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#BAE6FD',
  },
  resultVal: {
    color: '#0284C7',
    fontSize: 20,
    fontWeight: '900',
  },
  resultLabel: {
    color: '#0369A1',
    fontSize: 10,
    fontWeight: '800',
    marginTop: 2,
    textTransform: 'uppercase',
  },
  rewardBanner: {
    backgroundColor: '#FFFBEB',
    borderWidth: 2,
    borderColor: '#F59E0B',
    borderRadius: 14,
    padding: 12,
    width: '100%',
    alignItems: 'center',
    marginBottom: 16,
  },
  rewardStars: {
    color: '#B45309',
    fontSize: 16,
    fontWeight: '900',
  },
  rewardSub: {
    color: '#92400E',
    fontSize: 11,
    textAlign: 'center',
    marginTop: 2,
    fontWeight: '600',
  },
  gameOverActions: {
    width: '100%',
    gap: 10,
  },
  playAgainBtn: {
    backgroundColor: '#0284C7',
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
    borderBottomWidth: 4,
    borderBottomColor: '#0369A1',
    ...SHADOWS.medium,
  },
  playAgainText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: '900',
  },
  doneBtn: {
    backgroundColor: '#F1F5F9',
    paddingVertical: 12,
    borderRadius: 14,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#CBD5E1',
  },
  doneBtnText: {
    color: '#475569',
    fontSize: 14,
    fontWeight: '700',
  },
});
