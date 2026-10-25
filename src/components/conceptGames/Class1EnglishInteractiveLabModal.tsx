import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  Animated,
  Dimensions,
  ScrollView,
} from 'react-native';
import { COLORS, SPACING, BORDER_RADIUS, SHADOWS } from '../../constants/theme';
import { triggerHaptic } from '../../utils/haptics';
import { soundManager } from '../../utils/soundManager';
import { SpeakerButton } from '../common/SpeakerButton';
import { stopSpeaking, speakText } from '../../utils/speech';

const { width } = Dimensions.get('window');

export type Class1EnglishLabStation =
  | 'magic_phonics'
  | 'syllable_compound'
  | 'vocab_shades'
  | 'grammar_sentence'
  | 'tenses_contractions';

interface Class1EnglishInteractiveLabModalProps {
  visible: boolean;
  onClose: () => void;
  activeLang?: string;
  initialStation?: Class1EnglishLabStation;
}

export const Class1EnglishInteractiveLabModal: React.FC<Class1EnglishInteractiveLabModalProps> = ({
  visible,
  onClose,
  activeLang = 'hi',
  initialStation = 'magic_phonics',
}) => {
  const isHindi = activeLang === 'hi';
  const [station, setStation] = useState<Class1EnglishLabStation>(initialStation);

  useEffect(() => {
    if (visible && initialStation) {
      setStation(initialStation);
    }
  }, [visible, initialStation]);

  // =========================================================================
  // STATION 1: MAGIC 'e' & PHONICS LAB STATE
  // =========================================================================
  const magicWords = [
    { base: 'tap', baseEmoji: '🚰', baseSound: 'short a (/æ/)', trans: 'tape', transEmoji: '📼', transSound: 'long a (/eɪ/)', meaningHi: 'नल ➔ सेलोटेप' },
    { base: 'pin', baseEmoji: '📌', baseSound: 'short i (/ɪ/)', trans: 'pine', transEmoji: '🌲', transSound: 'long i (/aɪ/)', meaningHi: 'पिन ➔ चीड़ का पेड़' },
    { base: 'cub', baseEmoji: '🐻', baseSound: 'short u (/ʌ/)', trans: 'cube', transEmoji: '🧊', transSound: 'long u (/juː/)', meaningHi: 'शावक ➔ बर्फ का घन' },
    { base: 'hop', baseEmoji: '🦘', baseSound: 'short o (/ɒ/)', trans: 'hope', transEmoji: '🙏', transSound: 'long o (/oʊ/)', meaningHi: 'कूदना ➔ आशा' },
    { base: 'kit', baseEmoji: '🧰', baseSound: 'short i (/ɪ/)', trans: 'kite', transEmoji: '🪁', transSound: 'long i (/aɪ/)', meaningHi: 'औज़ार किट ➔ पतंग' },
    { base: 'can', baseEmoji: '🥫', baseSound: 'short a (/æ/)', trans: 'cane', transEmoji: '🦯', transSound: 'long a (/eɪ/)', meaningHi: 'डिब्बा ➔ छड़ी' },
    { base: 'tub', baseEmoji: '🛁', baseSound: 'short u (/ʌ/)', trans: 'tube', transEmoji: '🧪', transSound: 'long u (/juː/)', meaningHi: 'टब ➔ नली' },
    { base: 'rob', baseEmoji: '🥷', baseSound: 'short o (/ɒ/)', trans: 'robe', transEmoji: '🥋', transSound: 'long o (/oʊ/)', meaningHi: 'लूटना ➔ बागा' },
  ];

  const [magicIdx, setMagicIdx] = useState(0);
  const [isWanded, setIsWanded] = useState(false);
  const wandAnim = useRef(new Animated.Value(0)).current;
  const glowAnim = useRef(new Animated.Value(1)).current;

  const currentMagic = magicWords[magicIdx];

  const handleWaveWand = () => {
    triggerHaptic('medium');
    soundManager.playCorrect();
    
    // Wave animation
    Animated.sequence([
      Animated.timing(wandAnim, { toValue: 1, duration: 250, useNativeDriver: true }),
      Animated.timing(wandAnim, { toValue: 0, duration: 250, useNativeDriver: true }),
    ]).start();

    // Glow pulse
    Animated.sequence([
      Animated.timing(glowAnim, { toValue: 1.25, duration: 200, useNativeDriver: true }),
      Animated.timing(glowAnim, { toValue: 1, duration: 200, useNativeDriver: true }),
    ]).start();

    const nextState = !isWanded;
    setIsWanded(nextState);
    if (nextState) {
      speakText(`${currentMagic.trans}! The silent e makes the vowel say its name: ${currentMagic.transSound}`);
    } else {
      speakText(`${currentMagic.base}! Short vowel sound: ${currentMagic.baseSound}`);
    }
  };

  // Phonics blend soundboard items
  const blendTiles = [
    { blend: 'sh', icon: '🤫', word: 'ship 🚢', sound: '/ʃ/' },
    { blend: 'ch', icon: '🚂', word: 'chin 🧔', sound: '/tʃ/' },
    { blend: 'th', icon: '🧵', word: 'thumb 👍', sound: '/θ/' },
    { blend: 'wh', icon: '🐋', word: 'whale 🐋', sound: '/w/' },
    { blend: 'bl', icon: '🫐', word: 'blue 💙', sound: '/bl/' },
    { blend: 'cl', icon: '👏', word: 'clap 👏', sound: '/kl/' },
    { blend: 'st', icon: '⭐', word: 'star ⭐', sound: '/st/' },
    { blend: 'oi', icon: '🪙', word: 'coin 🪙', sound: '/ɔɪ/' },
    { blend: 'ou', icon: '☁️', word: 'cloud ☁️', sound: '/aʊ/' },
  ];
  const [selectedBlend, setSelectedBlend] = useState(blendTiles[0]);

  // =========================================================================
  // STATION 2: TWO-SYLLABLE & COMPOUND FORGE
  // =========================================================================
  const compoundPairs = [
    { s1: 'sun', e1: '☀️', s2: 'set', e2: '🌅', res: 'sunset', resEmoji: '🌇', hi: 'सूर्यास्त' },
    { s1: 'pan', e1: '🍳', s2: 'cake', e2: '🥞', res: 'pancake', resEmoji: '🥞', hi: 'पैनकेक' },
    { s1: 'rain', e1: '🌧️', s2: 'bow', e2: '🏹', res: 'rainbow', resEmoji: '🌈', hi: 'इंद्रधनुष' },
    { s1: 'foot', e1: '🦶', s2: 'ball', e2: '⚽', res: 'football', resEmoji: '⚽', hi: 'फुटबॉल' },
    { s1: 'star', e1: '⭐', s2: 'fish', e2: '🐟', res: 'starfish', resEmoji: '🌟', hi: 'तारा मछली' },
    { s1: 'cup', e1: '☕', s2: 'cake', e2: '🧁', res: 'cupcake', resEmoji: '🧁', hi: 'कपकेक' },
    { s1: 'snow', e1: '❄️', s2: 'man', e2: '⛄', res: 'snowman', resEmoji: '⛄', hi: 'हिममानव' },
    { s1: 'pop', e1: '💥', s2: 'corn', e2: '🌽', res: 'popcorn', resEmoji: '🍿', hi: 'पॉपकॉर्न' },
  ];
  const [compoundIdx, setCompoundIdx] = useState(0);
  const [isFused, setIsFused] = useState(false);
  const fuseAnim = useRef(new Animated.Value(0)).current;
  const currentCompound = compoundPairs[compoundIdx];

  const handleFuseCompound = () => {
    triggerHaptic('medium');
    soundManager.playCorrect();
    setIsFused(true);
    Animated.sequence([
      Animated.timing(fuseAnim, { toValue: 1, duration: 300, useNativeDriver: true }),
      Animated.timing(fuseAnim, { toValue: 0, duration: 200, useNativeDriver: true }),
    ]).start();
    speakText(`${currentCompound.s1} plus ${currentCompound.s2} equals ${currentCompound.res}!`);
  };

  // Syllable clapper
  const clapWords = [
    { word: 'cat', claps: 1, emoji: '🐱' },
    { word: 'napkin', claps: 2, emoji: '🧻' },
    { word: 'elephant', claps: 3, emoji: '🐘' },
    { word: 'watermelon', claps: 4, emoji: '🍉' },
  ];
  const [clapIdx, setClapIdx] = useState(0);
  const [userClapCount, setUserClapCount] = useState(0);
  const [clapSolved, setClapSolved] = useState(false);
  const currentClap = clapWords[clapIdx];

  const handleClap = () => {
    triggerHaptic('light');
    soundManager.playPop();
    const newCount = userClapCount + 1;
    setUserClapCount(newCount);
    if (newCount === currentClap.claps) {
      setClapSolved(true);
      soundManager.playFanfare();
    }
  };

  // =========================================================================
  // STATION 3: SHADES-OF-MEANING THERMOMETER & PREFIX FACTORY
  // =========================================================================
  const shadeSets = [
    {
      theme: 'Temperature (तापमान)',
      icon: '🌡️',
      levels: [
        { word: 'chilly', badge: 'Level 1: Cool breeze', emoji: '🌬️', color: '#60A5FA', desc: 'Mild cool air' },
        { word: 'cold', badge: 'Level 2: Winter day', emoji: '🥶', color: '#3B82F6', desc: 'Freezing wind' },
        { word: 'freezing', badge: 'Level 3: Solid Ice', emoji: '🧊', color: '#1D4ED8', desc: 'Water turns to ice' },
      ],
    },
    {
      theme: 'Speed (रफ़्तार)',
      icon: '👟',
      levels: [
        { word: 'walk', badge: 'Level 1: Steady stroll', emoji: '🚶', color: '#34D399', desc: 'Easy footsteps' },
        { word: 'jog', badge: 'Level 2: Brisk run', emoji: '🏃', color: '#F59E0B', desc: 'Active workout' },
        { word: 'sprint', badge: 'Level 3: Top speed!', emoji: '⚡', color: '#EF4444', desc: 'Fastest dash' },
      ],
    },
    {
      theme: 'Volume (आवाज़)',
      icon: '📢',
      levels: [
        { word: 'whisper', badge: 'Level 1: Soft secret', emoji: '🤫', color: '#A78BFA', desc: 'Barely audible' },
        { word: 'talk', badge: 'Level 2: Normal chat', emoji: '🗣️', color: '#8B5CF6', desc: 'Regular classroom speech' },
        { word: 'shout', badge: 'Level 3: Loudest yell!', emoji: '📢', color: '#C026D3', desc: 'Heard across the hall' },
      ],
    },
    {
      theme: 'Size (आकार)',
      icon: '📏',
      levels: [
        { word: 'tiny', badge: 'Level 1: Little pebble', emoji: '🐜', color: '#F472B6', desc: 'Fits on a fingertip' },
        { word: 'big', badge: 'Level 2: Large puppy', emoji: '🐕', color: '#FB923C', desc: 'Much bigger size' },
        { word: 'gigantic', badge: 'Level 3: Huge mountain!', emoji: '🐘', color: '#DC2626', desc: 'Colossal and massive' },
      ],
    },
  ];
  const [shadeIdx, setShadeIdx] = useState(0);
  const [shadeLevel, setShadeLevel] = useState(0);
  const currentShade = shadeSets[shadeIdx];

  // Prefix & Suffix Factory
  const affixes = [
    { base: 'happy', baseEmoji: '😊', affix: 'un-', type: 'prefix', result: 'unhappy', resEmoji: '😢', rule: "un- means 'not' ➔ not happy" },
    { base: 'build', baseEmoji: '🧱', affix: 're-', type: 'prefix', result: 'rebuild', resEmoji: '🏰', rule: "re- means 'again' ➔ build again" },
    { base: 'care', baseEmoji: '🤲', affix: '-ful', type: 'suffix', result: 'careful', resEmoji: '🥛', rule: "-ful means 'full of' ➔ full of care" },
    { base: 'teach', baseEmoji: '📖', affix: '-er', type: 'suffix', result: 'teacher', resEmoji: '👩‍🏫', rule: "-er means 'person who' ➔ one who teaches" },
    { base: 'slow', baseEmoji: '🐢', affix: '-ly', type: 'suffix', result: 'slowly', resEmoji: '🐌', rule: "-ly describes 'manner' ➔ in a slow way" },
    { base: 'lock', baseEmoji: '🔒', affix: 'un-', type: 'prefix', result: 'unlock', resEmoji: '🔓', rule: "un- reverses action ➔ open the lock" },
  ];
  const [affixIdx, setAffixIdx] = useState(0);
  const [isAffixApplied, setIsAffixApplied] = useState(false);
  const currentAffix = affixes[affixIdx];

  // =========================================================================
  // STATION 4: SENTENCE ARCHITECT & GRAMMAR STUDIO
  // =========================================================================
  const namingParts = [
    { text: 'The playful puppy', emoji: '🐶' },
    { text: 'Three little frogs', emoji: '🐸' },
    { text: 'Our kind teacher', emoji: '👩‍🏫' },
    { text: 'The bright golden sun', emoji: '☀️' },
    { text: 'A busy honeybee', emoji: '🐝' },
  ];
  const actionParts = [
    { text: 'barked at the mailman', emoji: '📬' },
    { text: 'leaped into the clear pond', emoji: '🌊' },
    { text: 'read an exciting story aloud', emoji: '📖' },
    { text: 'shined warmly all day long', emoji: '🌄' },
    { text: 'made sweet honey in the hive', emoji: '🍯' },
  ];
  const endMarks = ['.', '?', '!'];

  const [chosenSubjectIdx, setChosenSubjectIdx] = useState(0);
  const [chosenPredicateIdx, setChosenPredicateIdx] = useState(0);
  const [chosenMark, setChosenMark] = useState('.');
  const [isSentenceTested, setIsSentenceTested] = useState(false);

  const fullSentence = `${namingParts[chosenSubjectIdx].text} ${actionParts[chosenPredicateIdx].text}${chosenMark}`;

  // Noun Sorter Tray
  const nounTestWords = [
    { word: 'Doctor', icon: '🩺', type: 'person' },
    { word: 'Tiger', icon: '🐅', type: 'animal' },
    { word: 'School', icon: '🏫', type: 'place' },
    { word: 'Pencil', icon: '✏️', type: 'thing' },
    { word: 'Farmer', icon: '🧑‍🌾', type: 'person' },
    { word: 'Elephant', icon: '🐘', type: 'animal' },
    { word: 'Hospital', icon: '🏥', type: 'place' },
    { word: 'Book', icon: '📖', type: 'thing' },
  ];
  const [nounWordIdx, setNounWordIdx] = useState(0);
  const [nounFeedback, setNounFeedback] = useState<'correct' | 'wrong' | null>(null);
  const currentNoun = nounTestWords[nounWordIdx];

  const handleClassifyNoun = (chosenType: 'person' | 'animal' | 'place' | 'thing') => {
    if (chosenType === currentNoun.type) {
      triggerHaptic('medium');
      soundManager.playCorrect();
      setNounFeedback('correct');
      setTimeout(() => {
        setNounFeedback(null);
        setNounWordIdx((prev) => (prev + 1) % nounTestWords.length);
      }, 1000);
    } else {
      triggerHaptic('medium');
      soundManager.playIncorrect();
      setNounFeedback('wrong');
      setTimeout(() => setNounFeedback(null), 1200);
    }
  };

  // =========================================================================
  // STATION 5: VERB TIME MACHINE & CONTRACTION SNAPPER
  // =========================================================================
  const tenseVerbs = [
    { base: 'jump', past: 'jumped', pres: 'jumps', fut: 'will jump', emoji: '🦘' },
    { base: 'walk', past: 'walked', pres: 'walks', fut: 'will walk', emoji: '🚶' },
    { base: 'go', past: 'went (irregular)', pres: 'goes', fut: 'will go', emoji: '🚪' },
    { base: 'eat', past: 'ate (irregular)', pres: 'eats', fut: 'will eat', emoji: '🍎' },
    { base: 'see', past: 'saw (irregular)', pres: 'sees', fut: 'will see', emoji: '👀' },
    { base: 'sing', past: 'sang (irregular)', pres: 'sings', fut: 'will sing', emoji: '🎤' },
  ];
  const [tenseVerbIdx, setTenseVerbIdx] = useState(0);
  const [selectedTense, setSelectedTense] = useState<'past' | 'present' | 'future'>('present');
  const currentTenseVerb = tenseVerbs[tenseVerbIdx];

  // Contraction Snapper Pairs
  const contractionPairs = [
    { w1: 'do', w2: 'not', contracted: "don't", dropped: 'o', icon: '❌' },
    { w1: 'can', w2: 'not', contracted: "can't", dropped: 'no', icon: '🚫' },
    { w1: 'is', w2: 'not', contracted: "isn't", dropped: 'o', icon: '⛔' },
    { w1: 'it', w2: 'is', contracted: "it's", dropped: 'i', icon: '👉' },
    { w1: 'I', w2: 'am', contracted: "I'm", dropped: 'a', icon: '🙋' },
    { w1: 'we', w2: 'are', contracted: "we're", dropped: 'a', icon: '👥' },
    { w1: 'will', w2: 'not', contracted: "won't", dropped: 'ill/o', icon: '🙅' },
  ];
  const [contractIdx, setContractIdx] = useState(0);
  const [isSnapped, setIsSnapped] = useState(false);
  const snapAnim = useRef(new Animated.Value(0)).current;
  const currentContract = contractionPairs[contractIdx];

  const handleSnapContraction = () => {
    triggerHaptic('medium');
    soundManager.playCorrect();
    setIsSnapped(true);
    Animated.sequence([
      Animated.timing(snapAnim, { toValue: 1, duration: 250, useNativeDriver: true }),
      Animated.timing(snapAnim, { toValue: 0, duration: 150, useNativeDriver: true }),
    ]).start();
    speakText(`${currentContract.w1} plus ${currentContract.w2} snaps into ${currentContract.contracted}!`);
  };

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          {/* Top Modal Header */}
          <View style={styles.header}>
            <View style={styles.headerLeft}>
              <View style={styles.titleIconBadge}>
                <Text style={{ fontSize: 24 }}>🔬</Text>
              </View>
              <View>
                <Text style={styles.headerGradeText}>
                  {isHindi ? 'कक्षा 1 अंग्रेजी • इंटरएक्टिव प्रैक्टिकल लैब' : 'Class 1 English • Interactive Concept Lab'}
                </Text>
                <Text style={styles.headerTitleText}>
                  {station === 'magic_phonics' && (isHindi ? 'जादुई "e" और फोनिक्स प्रयोगशाला' : 'The Magic "e" & Phonics Lab')}
                  {station === 'syllable_compound' && (isHindi ? 'शब्दांश और यौगिक शब्द बिल्डर' : 'Two-Syllable & Compound Forge')}
                  {station === 'vocab_shades' && (isHindi ? 'शब्दावली और सूक्ष्म अर्थ थर्मामीटर' : 'Shades of Meaning & Prefixes')}
                  {station === 'grammar_sentence' && (isHindi ? 'वाक्य आर्किटेक्ट और व्याकरण स्टूडियो' : 'Sentence Architect & Grammar')}
                  {station === 'tenses_contractions' && (isHindi ? 'काल टाइम मशीन और संक्षिप्त रूप' : 'Verb Time Machine & Contractions')}
                </Text>
              </View>
            </View>
            <TouchableOpacity activeOpacity={0.7} onPress={onClose} style={styles.closeBtn}>
              <Text style={styles.closeBtnText}>✕</Text>
            </TouchableOpacity>
          </View>

          {/* Navigation Station Switcher Tabs */}
          <View style={styles.stationTabsScrollContainer}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.stationTabsContent}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={[styles.stationTabPill, station === 'magic_phonics' && styles.stationTabActive]}
                onPress={() => {
                  triggerHaptic('light');
                  setStation('magic_phonics');
                }}
              >
                <Text style={styles.stationTabIcon}>🪄</Text>
                <Text style={[styles.stationTabText, station === 'magic_phonics' && styles.stationTabTextActive]}>
                  {isHindi ? 'मैजिक e और फोनिक्स' : "Magic 'e' Phonics"}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.8}
                style={[styles.stationTabPill, station === 'syllable_compound' && styles.stationTabActive]}
                onPress={() => {
                  triggerHaptic('light');
                  setStation('syllable_compound');
                }}
              >
                <Text style={styles.stationTabIcon}>🧩</Text>
                <Text style={[styles.stationTabText, station === 'syllable_compound' && styles.stationTabTextActive]}>
                  {isHindi ? 'यौगिक शब्द' : 'Compound Forge'}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.8}
                style={[styles.stationTabPill, station === 'vocab_shades' && styles.stationTabActive]}
                onPress={() => {
                  triggerHaptic('light');
                  setStation('vocab_shades');
                }}
              >
                <Text style={styles.stationTabIcon}>🌡️</Text>
                <Text style={[styles.stationTabText, station === 'vocab_shades' && styles.stationTabTextActive]}>
                  {isHindi ? 'अर्थ थर्मामीटर' : 'Shades of Meaning'}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.8}
                style={[styles.stationTabPill, station === 'grammar_sentence' && styles.stationTabActive]}
                onPress={() => {
                  triggerHaptic('light');
                  setStation('grammar_sentence');
                }}
              >
                <Text style={styles.stationTabIcon}>🏗️</Text>
                <Text style={[styles.stationTabText, station === 'grammar_sentence' && styles.stationTabTextActive]}>
                  {isHindi ? 'वाक्य आर्किटेक्ट' : 'Sentence Architect'}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.8}
                style={[styles.stationTabPill, station === 'tenses_contractions' && styles.stationTabActive]}
                onPress={() => {
                  triggerHaptic('light');
                  setStation('tenses_contractions');
                }}
              >
                <Text style={styles.stationTabIcon}>⏳</Text>
                <Text style={[styles.stationTabText, station === 'tenses_contractions' && styles.stationTabTextActive]}>
                  {isHindi ? 'काल टाइम मशीन' : 'Verb Time Machine'}
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>

          {/* Main Station Active Area */}
          <ScrollView style={styles.stationBody} showsVerticalScrollIndicator={false}>
            {/* ========================================================================= */}
            {/* STATION 1: MAGIC 'e' & PHONICS LAB */}
            {/* ========================================================================= */}
            {station === 'magic_phonics' && (
              <View style={styles.stationSection}>
                {/* Hero Instruction Card */}
                <View style={styles.heroInstructionBox}>
                  <Text style={styles.heroInstructionEmoji}>🪄</Text>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.heroInstructionTitle}>
                      {isHindi ? 'जादुई "e" की छड़ी घुमाओ!' : "Wave the Magic 'e' Wand!"}
                    </Text>
                    <Text style={styles.heroInstructionSub}>
                      {isHindi
                        ? 'अंतिम "e" आते ही छोटा स्वर अपने पूरे नाम में बदल जाता है (Short Vowel ➔ Long Vowel).'
                        : 'Watch silent "e" magically transform short vowels into their long name sounds!'}
                    </Text>
                  </View>
                  <SpeakerButton textToSpeak={
                      isHindi
                        ? 'जादुई ई की छड़ी घुमाएं। अंतिम ई जुड़ते ही छोटा स्वर अपने नाम की दीर्घ ध्वनि देने लगता है।'
                        : "Wave the magic wand to add silent final e and hear the short vowel become a long vowel sound."
                    }
                    size="md"
                  />
                </View>

                {/* Interactive Magic Wand Stage */}
                <View style={styles.magicStage}>
                  {/* Word Selector Chips */}
                  <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.chipRow}>
                    {magicWords.map((item, idx) => (
                      <TouchableOpacity
                        key={item.base}
                        style={[styles.wordChip, magicIdx === idx && styles.wordChipActive]}
                        onPress={() => {
                          triggerHaptic('light');
                          setMagicIdx(idx);
                          setIsWanded(false);
                        }}
                      >
                        <Text style={[styles.wordChipText, magicIdx === idx && styles.wordChipTextActive]}>
                          {item.base}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </ScrollView>

                  {/* Transformation Display Box */}
                  <Animated.View style={[styles.magicTransformationCard, { transform: [{ scale: glowAnim }] }]}>
                    <View style={styles.magicResultRow}>
                      <View style={styles.magicWordSide}>
                        <Text style={styles.magicEmoji}>
                          {isWanded ? currentMagic.transEmoji : currentMagic.baseEmoji}
                        </Text>
                        <View style={styles.magicWordLettersRow}>
                          <Text style={styles.magicWordText}>{currentMagic.base}</Text>
                          {isWanded && <Text style={styles.magicLetterE}>e</Text>}
                        </View>
                        <Text style={styles.magicPhonicsLabel}>
                          {isWanded ? currentMagic.transSound : currentMagic.baseSound}
                        </Text>
                        <Text style={styles.magicMeaningText}>{currentMagic.meaningHi}</Text>
                      </View>
                    </View>

                    {/* Magic Wand Interactive Action Button */}
                    <TouchableOpacity
                      activeOpacity={0.85}
                      style={[styles.wandButton, isWanded && styles.wandButtonActive]}
                      onPress={handleWaveWand}
                    >
                      <Animated.Text
                        style={[
                          styles.wandButtonIcon,
                          {
                            transform: [
                              {
                                rotate: wandAnim.interpolate({
                                  inputRange: [0, 1],
                                  outputRange: ['0deg', '-35deg'],
                                }),
                              },
                            ],
                          },
                        ]}
                      >
                        🪄
                      </Animated.Text>
                      <Text style={styles.wandButtonText}>
                        {isWanded
                          ? (isHindi ? 'छड़ी वापस लाओ (Remove Magic e)' : "Reset Word (Remove 'e')")
                          : (isHindi ? 'जादुई छड़ी घुमाओ! (Add Magic e 🪄)' : "Wave Magic Wand (Add 'e' 🪄)")}
                      </Text>
                    </TouchableOpacity>
                  </Animated.View>
                </View>

                {/* Phonics Digraphs & Blends Soundboard */}
                <View style={styles.soundboardContainer}>
                  <Text style={styles.soundboardHeader}>
                    {isHindi ? '🔤 कॉन्सोनेंट ब्लेंड्स और डिग्राफ्स ध्वनि बोर्ड:' : '🔤 Digraphs & Blends Soundboard:'}
                  </Text>
                  <View style={styles.blendGrid}>
                    {blendTiles.map((tile) => (
                      <TouchableOpacity
                        key={tile.blend}
                        activeOpacity={0.8}
                        style={[styles.blendCard, selectedBlend.blend === tile.blend && styles.blendCardActive]}
                        onPress={() => {
                          triggerHaptic('medium');
                          soundManager.playPop();
                          setSelectedBlend(tile);
                          speakText(`${tile.blend} says ${tile.sound} as in ${tile.word}`);
                        }}
                      >
                        <Text style={styles.blendIcon}>{tile.icon}</Text>
                        <Text style={styles.blendLetters}>{tile.blend}</Text>
                        <Text style={styles.blendWord}>{tile.word}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>
              </View>
            )}

            {/* ========================================================================= */}
            {/* STATION 2: TWO-SYLLABLE & COMPOUND FORGE */}
            {/* ========================================================================= */}
            {station === 'syllable_compound' && (
              <View style={styles.stationSection}>
                {/* Hero Instruction */}
                <View style={styles.heroInstructionBox}>
                  <Text style={styles.heroInstructionEmoji}>⚡</Text>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.heroInstructionTitle}>
                      {isHindi ? 'यौगिक शब्द फ्यूजन रिएक्टर' : 'Compound Word Fusion Reactor'}
                    </Text>
                    <Text style={styles.heroInstructionSub}>
                      {isHindi
                        ? 'दो अलग-अलग शब्दांशों को आपस में जोड़कर नया 2-syllable शब्द बनाएं!'
                        : 'Collide two independent syllables together to forge brand new compound words!'}
                    </Text>
                  </View>
                  <SpeakerButton textToSpeak={
                      isHindi
                        ? 'दो अलग शब्दों को मिलाकर यौगिक शब्द बनाएं। जैसे सन और सेट मिलकर सनसेट बनता है।'
                        : "Combine two individual word parts to build a compound two-syllable word."
                    }
                    size="md"
                  />
                </View>

                {/* Pair Selector Chips */}
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.chipRow}>
                  {compoundPairs.map((item, idx) => (
                    <TouchableOpacity
                      key={item.res}
                      style={[styles.wordChip, compoundIdx === idx && styles.wordChipActive]}
                      onPress={() => {
                        triggerHaptic('light');
                        setCompoundIdx(idx);
                        setIsFused(false);
                      }}
                    >
                      <Text style={[styles.wordChipText, compoundIdx === idx && styles.wordChipTextActive]}>
                        {item.res}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>

                {/* Fusion Chamber Card */}
                <View style={styles.fusionChamberCard}>
                  <View style={styles.fusionReactorRow}>
                    {/* Chamber 1 */}
                    <View style={styles.syllableChamber}>
                      <Text style={styles.chamberEmoji}>{currentCompound.e1}</Text>
                      <Text style={styles.chamberSyllableText}>{currentCompound.s1}</Text>
                    </View>

                    <Text style={styles.chamberPlusSign}>+</Text>

                    {/* Chamber 2 */}
                    <View style={styles.syllableChamber}>
                      <Text style={styles.chamberEmoji}>{currentCompound.e2}</Text>
                      <Text style={styles.chamberSyllableText}>{currentCompound.s2}</Text>
                    </View>
                  </View>

                  {/* Fused Result */}
                  <View style={[styles.fusedResultBox, isFused && styles.fusedResultBoxActive]}>
                    <Text style={styles.fusedResultEmoji}>
                      {isFused ? currentCompound.resEmoji : '❓'}
                    </Text>
                    <Text style={styles.fusedResultTitle}>
                      {isFused ? currentCompound.res : `${currentCompound.s1} + ${currentCompound.s2} = ?`}
                    </Text>
                    {isFused && (
                      <Text style={styles.fusedResultMeaning}>
                        {isHindi ? `अर्थ: ${currentCompound.hi}` : `Meaning: ${currentCompound.res}`}
                      </Text>
                    )}
                  </View>

                  <TouchableOpacity
                    activeOpacity={0.85}
                    style={styles.fuseActionButton}
                    onPress={handleFuseCompound}
                  >
                    <Text style={styles.fuseActionBtnText}>
                      ⚡ {isHindi ? 'शब्दांशों को जोड़ो (FUSE SYLLABLES)' : 'FUSE SYLLABLES TOGETHER ⚡'}
                    </Text>
                  </TouchableOpacity>
                </View>

                {/* Syllable Clapper Mini-Station */}
                <View style={styles.clapperStationBox}>
                  <View style={styles.clapperHeaderRow}>
                    <Text style={styles.clapperTitle}>
                      👏 {isHindi ? 'शब्दांश ताली मापक (Syllable Clapper):' : 'Syllable Clapper Challenge:'}
                    </Text>
                    <TouchableOpacity
                      onPress={() => {
                        triggerHaptic('light');
                        setClapIdx((prev) => (prev + 1) % clapWords.length);
                        setUserClapCount(0);
                        setClapSolved(false);
                      }}
                      style={styles.nextClapPill}
                    >
                      <Text style={styles.nextClapPillText}>Next ❯</Text>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.clapperCard}>
                    <Text style={styles.clapperEmoji}>{currentClap.emoji}</Text>
                    <Text style={styles.clapperWordText}>{currentClap.word.toUpperCase()}</Text>
                    <Text style={styles.clapperPrompt}>
                      {isHindi
                        ? `इस शब्द में कितनी ताली बजेगी? (Target: ${currentClap.claps} Syllables)`
                        : `How many beats/claps in this word? (Target: ${currentClap.claps})`}
                    </Text>

                    <View style={styles.clapCounterRow}>
                      <Text style={styles.clapCounterText}>
                        Claps Clapped: <Text style={{ color: COLORS.primary, fontWeight: '900' }}>{userClapCount}</Text> / {currentClap.claps}
                      </Text>
                      {clapSolved && <Text style={styles.clapSolvedBadge}>🎉 PERFECT! ✓</Text>}
                    </View>

                    <TouchableOpacity
                      activeOpacity={0.75}
                      style={styles.clapButton}
                      onPress={handleClap}
                    >
                      <Text style={styles.clapButtonText}>👏 TAP TO CLAP BEAT!</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}

            {/* ========================================================================= */}
            {/* STATION 3: SHADES-OF-MEANING & PREFIX FACTORY */}
            {/* ========================================================================= */}
            {station === 'vocab_shades' && (
              <View style={styles.stationSection}>
                {/* Hero Instruction */}
                <View style={styles.heroInstructionBox}>
                  <Text style={styles.heroInstructionEmoji}>🌡️</Text>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.heroInstructionTitle}>
                      {isHindi ? 'सूक्ष्म अर्थ थर्मामीटर' : 'Shades-of-Meaning Thermometer'}
                    </Text>
                    <Text style={styles.heroInstructionSub}>
                      {isHindi
                        ? 'समान अर्थ वाले शब्दों की तीव्रता (कम से अधिक) को समझें!'
                        : 'Explore how related words express weaker or stronger degrees of meaning!'}
                    </Text>
                  </View>
                  <SpeakerButton textToSpeak={
                      isHindi
                        ? 'शब्दों की तीव्रता को समझें। जैसे चिली थोड़ा ठंडा होता है, और फ्रीज़िंग बर्फ जैसा जमा देने वाला।'
                        : "Compare related words by their intensity, from weak to moderate to extreme."
                    }
                    size="md"
                  />
                </View>

                {/* Theme Selector */}
                <View style={styles.shadeThemeRow}>
                  {shadeSets.map((set, idx) => (
                    <TouchableOpacity
                      key={set.theme}
                      style={[styles.shadeThemeTab, shadeIdx === idx && styles.shadeThemeTabActive]}
                      onPress={() => {
                        triggerHaptic('light');
                        setShadeIdx(idx);
                        setShadeLevel(0);
                      }}
                    >
                      <Text style={styles.shadeThemeIcon}>{set.icon}</Text>
                      <Text style={[styles.shadeThemeText, shadeIdx === idx && styles.shadeThemeTextActive]}>
                        {set.theme.split(' ')[0]}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>

                {/* Thermometer Display Card */}
                <View style={styles.thermometerCard}>
                  <View style={styles.thermometerDisplay}>
                    <Text style={styles.thermometerLevelEmoji}>
                      {currentShade.levels[shadeLevel].emoji}
                    </Text>
                    <Text style={[styles.thermometerWordText, { color: currentShade.levels[shadeLevel].color }]}>
                      {currentShade.levels[shadeLevel].word.toUpperCase()}
                    </Text>
                    <View style={[styles.thermometerBadge, { backgroundColor: currentShade.levels[shadeLevel].color }]}>
                      <Text style={styles.thermometerBadgeText}>
                        {currentShade.levels[shadeLevel].badge}
                      </Text>
                    </View>
                    <Text style={styles.thermometerDesc}>
                      {currentShade.levels[shadeLevel].desc}
                    </Text>
                  </View>

                  {/* 3 Level Selector Buttons */}
                  <View style={styles.levelButtonsRow}>
                    {currentShade.levels.map((lvl, lIdx) => (
                      <TouchableOpacity
                        key={lvl.word}
                        style={[
                          styles.levelPillBtn,
                          shadeLevel === lIdx && { backgroundColor: lvl.color, borderColor: lvl.color },
                        ]}
                        onPress={() => {
                          triggerHaptic('medium');
                          soundManager.playPop();
                          setShadeLevel(lIdx);
                          speakText(`${lvl.word}! ${lvl.desc}`);
                        }}
                      >
                        <Text style={[styles.levelPillText, shadeLevel === lIdx && { color: '#FFFFFF', fontWeight: '900' }]}>
                          {lIdx + 1}. {lvl.word}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>

                {/* Prefix & Suffix Factory */}
                <View style={styles.prefixFactoryBox}>
                  <View style={styles.clapperHeaderRow}>
                    <Text style={styles.clapperTitle}>
                      🏭 {isHindi ? 'उपसर्ग व प्रत्यय फ़ैक्ट्री:' : 'Prefix & Suffix Word Assembly:'}
                    </Text>
                    <TouchableOpacity
                      onPress={() => {
                        triggerHaptic('light');
                        setAffixIdx((prev) => (prev + 1) % affixes.length);
                        setIsAffixApplied(false);
                      }}
                      style={styles.nextClapPill}
                    >
                      <Text style={styles.nextClapPillText}>Next ❯</Text>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.affixStageCard}>
                    <View style={styles.affixPartsRow}>
                      <View style={styles.affixChip}>
                        <Text style={styles.affixChipLabel}>{currentAffix.type === 'prefix' ? 'PREFIX' : 'BASE'}</Text>
                        <Text style={styles.affixChipText}>{currentAffix.type === 'prefix' ? currentAffix.affix : currentAffix.base}</Text>
                      </View>
                      <Text style={styles.affixPlusText}>+</Text>
                      <View style={styles.affixChip}>
                        <Text style={styles.affixChipLabel}>{currentAffix.type === 'prefix' ? 'BASE' : 'SUFFIX'}</Text>
                        <Text style={styles.affixChipText}>{currentAffix.type === 'prefix' ? currentAffix.base : currentAffix.affix}</Text>
                      </View>
                    </View>

                    <View style={[styles.affixResultCard, isAffixApplied && styles.affixResultCardActive]}>
                      <Text style={styles.affixResultEmoji}>
                        {isAffixApplied ? currentAffix.resEmoji : currentAffix.baseEmoji}
                      </Text>
                      <Text style={styles.affixResultWord}>
                        {isAffixApplied ? currentAffix.result : `${currentAffix.base} (tap assemble)`}
                      </Text>
                      <Text style={styles.affixRuleText}>{currentAffix.rule}</Text>
                    </View>

                    <TouchableOpacity
                      activeOpacity={0.85}
                      style={styles.affixAssembleBtn}
                      onPress={() => {
                        triggerHaptic('medium');
                        soundManager.playCorrect();
                        setIsAffixApplied(!isAffixApplied);
                        speakText(`${currentAffix.result}! ${currentAffix.rule}`);
                      }}
                    >
                      <Text style={styles.affixAssembleBtnText}>
                        {isAffixApplied ? '↺ RESET BASE WORD' : '⚙️ ASSEMBLE WORD!'}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}

            {/* ========================================================================= */}
            {/* STATION 4: SENTENCE ARCHITECT & GRAMMAR STUDIO */}
            {/* ========================================================================= */}
            {station === 'grammar_sentence' && (
              <View style={styles.stationSection}>
                {/* Hero Instruction */}
                <View style={styles.heroInstructionBox}>
                  <Text style={styles.heroInstructionEmoji}>🏗️</Text>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.heroInstructionTitle}>
                      {isHindi ? 'वाक्य आर्किटेक्ट स्टूडियो' : 'The Sentence Architect Studio'}
                    </Text>
                    <Text style={styles.heroInstructionSub}>
                      {isHindi
                        ? 'नाम वाला भाग (Subject) + काम वाला भाग (Predicate) जोड़कर पूर्ण विचार बनाएं!'
                        : 'Connect the Naming Part (Subject) + Action Part (Predicate) + End Mark (. ? !)'}
                    </Text>
                  </View>
                  <SpeakerButton textToSpeak={
                      isHindi
                        ? 'वाक्य के दो मुख्य हिस्से होते हैं: नाम वाला भाग कर्ता और काम वाला भाग क्रिया। दोनों मिलकर पूर्ण विचार बनाते हैं।'
                        : "Every complete sentence needs a naming part telling who or what, and an action part telling what happened."
                    }
                    size="md"
                  />
                </View>

                {/* Sentence Builder Station */}
                <View style={styles.sentenceStudioCard}>
                  {/* Subject Selector */}
                  <Text style={styles.builderSectionLabel}>
                    1️⃣ {isHindi ? 'नाम वाला भाग (Naming Part / Subject):' : '1. Naming Part (Subject):'}
                  </Text>
                  <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.chipRow}>
                    {namingParts.map((item, idx) => (
                      <TouchableOpacity
                        key={item.text}
                        style={[styles.grammarChip, chosenSubjectIdx === idx && styles.grammarChipActiveSubject]}
                        onPress={() => {
                          triggerHaptic('light');
                          setChosenSubjectIdx(idx);
                          setIsSentenceTested(false);
                        }}
                      >
                        <Text style={styles.grammarChipEmoji}>{item.emoji}</Text>
                        <Text style={[styles.grammarChipText, chosenSubjectIdx === idx && styles.grammarChipTextActive]}>
                          {item.text}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </ScrollView>

                  {/* Predicate Selector */}
                  <Text style={styles.builderSectionLabel}>
                    2️⃣ {isHindi ? 'काम वाला भाग (Action Part / Predicate):' : '2. Action Part (Predicate):'}
                  </Text>
                  <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.chipRow}>
                    {actionParts.map((item, idx) => (
                      <TouchableOpacity
                        key={item.text}
                        style={[styles.grammarChip, chosenPredicateIdx === idx && styles.grammarChipActivePredicate]}
                        onPress={() => {
                          triggerHaptic('light');
                          setChosenPredicateIdx(idx);
                          setIsSentenceTested(false);
                        }}
                      >
                        <Text style={styles.grammarChipEmoji}>{item.emoji}</Text>
                        <Text style={[styles.grammarChipText, chosenPredicateIdx === idx && styles.grammarChipTextActive]}>
                          {item.text}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </ScrollView>

                  {/* Punctuation Mark Selector */}
                  <Text style={styles.builderSectionLabel}>
                    3️⃣ {isHindi ? 'विराम चिह्न (End Mark):' : '3. End Punctuation Mark:'}
                  </Text>
                  <View style={styles.punctRow}>
                    {endMarks.map((mk) => (
                      <TouchableOpacity
                        key={mk}
                        style={[styles.punctBtn, chosenMark === mk && styles.punctBtnActive]}
                        onPress={() => {
                          triggerHaptic('light');
                          setChosenMark(mk);
                          setIsSentenceTested(false);
                        }}
                      >
                        <Text style={[styles.punctBtnText, chosenMark === mk && styles.punctBtnTextActive]}>
                          {mk === '.' ? '. (Period)' : mk === '?' ? '? (Question)' : '! (Exclaim)'}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>

                  {/* Live Sentence Display Board */}
                  <View style={styles.sentenceBoardCard}>
                    <Text style={styles.sentenceBoardLabel}>
                      {isHindi ? 'निर्मित पूर्ण वाक्य (Assembled Sentence):' : 'ASSEMBLED SENTENCE:'}
                    </Text>
                    <Text style={styles.sentenceBoardText}>{fullSentence}</Text>

                    {isSentenceTested && (
                      <View style={styles.sentenceGrammarBreakdown}>
                        <View style={styles.breakdownTagSubject}>
                          <Text style={styles.breakdownTagText}>Subject: {namingParts[chosenSubjectIdx].text}</Text>
                        </View>
                        <View style={styles.breakdownTagPredicate}>
                          <Text style={styles.breakdownTagText}>Predicate: {actionParts[chosenPredicateIdx].text}</Text>
                        </View>
                        <Text style={styles.breakdownVerifiedText}>
                          ✅ Complete Thought • Grammatically Perfect!
                        </Text>
                      </View>
                    )}
                  </View>

                  <TouchableOpacity
                    activeOpacity={0.85}
                    style={styles.testSentenceButton}
                    onPress={() => {
                      triggerHaptic('medium');
                      soundManager.playFanfare();
                      setIsSentenceTested(true);
                      speakText(fullSentence);
                    }}
                  >
                    <Text style={styles.testSentenceButtonText}>
                      🚀 {isHindi ? 'वाक्य की जाँच करें (TEST SENTENCE)' : 'INSPECT & TEST SENTENCE 🚀'}
                    </Text>
                  </TouchableOpacity>
                </View>

                {/* Noun Sorter Conveyor */}
                <View style={styles.nounSorterCard}>
                  <Text style={styles.nounSorterTitle}>
                    🗂️ {isHindi ? 'संज्ञा वर्गीकरण बेल्ट (Person, Animal, Place, Thing):' : 'Noun Classifier Conveyor:'}
                  </Text>

                  <View style={styles.currentNounDisplay}>
                    <Text style={styles.currentNounIcon}>{currentNoun.icon}</Text>
                    <Text style={styles.currentNounWord}>{currentNoun.word}</Text>
                    {nounFeedback === 'correct' && (
                      <Text style={styles.nounFeedbackCorrect}>🎉 Correct Category! ✓</Text>
                    )}
                    {nounFeedback === 'wrong' && (
                      <Text style={styles.nounFeedbackWrong}>❌ Try Another Category!</Text>
                    )}
                  </View>

                  <View style={styles.nounBinsGrid}>
                    <TouchableOpacity
                      style={[styles.nounBinBtn, { backgroundColor: '#EFF6FF', borderColor: '#3B82F6' }]}
                      onPress={() => handleClassifyNoun('person')}
                    >
                      <Text style={styles.nounBinEmoji}>🧑‍⚕️</Text>
                      <Text style={[styles.nounBinText, { color: '#1D4ED8' }]}>Person</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={[styles.nounBinBtn, { backgroundColor: '#FEF3C7', borderColor: '#F59E0B' }]}
                      onPress={() => handleClassifyNoun('animal')}
                    >
                      <Text style={styles.nounBinEmoji}>🐅</Text>
                      <Text style={[styles.nounBinText, { color: '#B45309' }]}>Animal</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={[styles.nounBinBtn, { backgroundColor: '#ECFDF5', borderColor: '#10B981' }]}
                      onPress={() => handleClassifyNoun('place')}
                    >
                      <Text style={styles.nounBinEmoji}>🏫</Text>
                      <Text style={[styles.nounBinText, { color: '#047857' }]}>Place</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={[styles.nounBinBtn, { backgroundColor: '#FDF2F8', borderColor: '#EC4899' }]}
                      onPress={() => handleClassifyNoun('thing')}
                    >
                      <Text style={styles.nounBinEmoji}>✏️</Text>
                      <Text style={[styles.nounBinText, { color: '#BE185D' }]}>Thing</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}

            {/* ========================================================================= */}
            {/* STATION 5: VERB TIME MACHINE & CONTRACTION SNAPPER */}
            {/* ========================================================================= */}
            {station === 'tenses_contractions' && (
              <View style={styles.stationSection}>
                {/* Hero Instruction */}
                <View style={styles.heroInstructionBox}>
                  <Text style={styles.heroInstructionEmoji}>⏳</Text>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.heroInstructionTitle}>
                      {isHindi ? 'क्रिया काल टाइम मशीन' : 'The Verb Time Machine'}
                    </Text>
                    <Text style={styles.heroInstructionSub}>
                      {isHindi
                        ? 'समय रेखा (भूत, वर्तमान, भविष्य) पर क्रिया के बदलते रूप को देखें!'
                        : 'Travel across Past (yesterday), Present (today), and Future (tomorrow)!'}
                    </Text>
                  </View>
                  <SpeakerButton textToSpeak={
                      isHindi
                        ? 'काल टाइम मशीन से देखें कि बीता हुआ कल, आज और आने वाले कल में क्रिया कैसे बदलती है।'
                        : "Turn the dial to travel between past completed actions, present ongoing actions, and future actions."
                    }
                    size="md"
                  />
                </View>

                {/* Verb Selector Chips */}
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.chipRow}>
                  {tenseVerbs.map((v, idx) => (
                    <TouchableOpacity
                      key={v.base}
                      style={[styles.wordChip, tenseVerbIdx === idx && styles.wordChipActive]}
                      onPress={() => {
                        triggerHaptic('light');
                        setTenseVerbIdx(idx);
                      }}
                    >
                      <Text style={[styles.wordChipText, tenseVerbIdx === idx && styles.wordChipTextActive]}>
                        {v.base}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>

                {/* Time Machine Interactive Dial Stage */}
                <View style={styles.timeMachineCard}>
                  {/* Three Time Eras */}
                  <View style={styles.tenseEraTabsRow}>
                    <TouchableOpacity
                      style={[styles.tenseEraTab, selectedTense === 'past' && styles.tenseEraTabPast]}
                      onPress={() => {
                        triggerHaptic('medium');
                        soundManager.playPop();
                        setSelectedTense('past');
                        speakText(`Past: yesterday, he ${currentTenseVerb.past}`);
                      }}
                    >
                      <Text style={styles.tenseEraIcon}>⬅️ 📅</Text>
                      <Text style={[styles.tenseEraLabel, selectedTense === 'past' && styles.tenseEraTextActive]}>
                        PAST (Yesterday)
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={[styles.tenseEraTab, selectedTense === 'present' && styles.tenseEraTabPresent]}
                      onPress={() => {
                        triggerHaptic('medium');
                        soundManager.playPop();
                        setSelectedTense('present');
                        speakText(`Present: today, he ${currentTenseVerb.pres}`);
                      }}
                    >
                      <Text style={styles.tenseEraIcon}>⏸️ ⏰</Text>
                      <Text style={[styles.tenseEraLabel, selectedTense === 'present' && styles.tenseEraTextActive]}>
                        PRESENT (Today)
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={[styles.tenseEraTab, selectedTense === 'future' && styles.tenseEraTabFuture]}
                      onPress={() => {
                        triggerHaptic('medium');
                        soundManager.playPop();
                        setSelectedTense('future');
                        speakText(`Future: tomorrow, he ${currentTenseVerb.fut}`);
                      }}
                    >
                      <Text style={styles.tenseEraIcon}>➡️ 🚀</Text>
                      <Text style={[styles.tenseEraLabel, selectedTense === 'future' && styles.tenseEraTextActive]}>
                        FUTURE (Tomorrow)
                      </Text>
                    </TouchableOpacity>
                  </View>

                  {/* Dynamic Verb Timeline Output Display */}
                  <View style={styles.timeMachineDisplayCard}>
                    <Text style={styles.timeMachineEmoji}>{currentTenseVerb.emoji}</Text>
                    <Text style={styles.timeMachineVerbOutput}>
                      {selectedTense === 'past' && currentTenseVerb.past}
                      {selectedTense === 'present' && currentTenseVerb.pres}
                      {selectedTense === 'future' && currentTenseVerb.fut}
                    </Text>

                    <View style={styles.timeSentenceSample}>
                      <Text style={styles.timeSentenceText}>
                        {selectedTense === 'past' && `Yesterday, the kid ${currentTenseVerb.past}.`}
                        {selectedTense === 'present' && `Today, the kid ${currentTenseVerb.pres}.`}
                        {selectedTense === 'future' && `Tomorrow, the kid ${currentTenseVerb.fut}.`}
                      </Text>
                    </View>
                  </View>
                </View>

                {/* Contraction Snapper Machine */}
                <View style={styles.contractionMachineCard}>
                  <View style={styles.clapperHeaderRow}>
                    <Text style={styles.clapperTitle}>
                      🧲 {isHindi ? 'संक्षिप्त रूप स्नैपर (Contraction Snapper):' : 'Contraction Word Snapper:'}
                    </Text>
                    <TouchableOpacity
                      onPress={() => {
                        triggerHaptic('light');
                        setContractIdx((prev) => (prev + 1) % contractionPairs.length);
                        setIsSnapped(false);
                      }}
                      style={styles.nextClapPill}
                    >
                      <Text style={styles.nextClapPillText}>Next ❯</Text>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.snapperStageCard}>
                    <View style={styles.magnetBlocksRow}>
                      <View style={styles.magnetBlock}>
                        <Text style={styles.magnetBlockText}>{currentContract.w1}</Text>
                      </View>
                      <Text style={styles.magnetPlusText}>+</Text>
                      <View style={styles.magnetBlock}>
                        <Text style={styles.magnetBlockText}>{currentContract.w2}</Text>
                      </View>
                    </View>

                    {/* Snapped Result */}
                    <View style={[styles.snappedResultBox, isSnapped && styles.snappedResultBoxActive]}>
                      <Text style={styles.snappedResultEmoji}>{currentContract.icon}</Text>
                      <Text style={styles.snappedResultText}>
                        {isSnapped ? currentContract.contracted : `${currentContract.w1} + ${currentContract.w2}`}
                      </Text>
                      {isSnapped && (
                        <Text style={styles.snappedRuleNotice}>
                          Apostrophe (') replaces missing '{currentContract.dropped}'!
                        </Text>
                      )}
                    </View>

                    <TouchableOpacity
                      activeOpacity={0.85}
                      style={styles.snapActionButton}
                      onPress={handleSnapContraction}
                    >
                      <Text style={styles.snapActionButtonText}>
                        ⚡ {isSnapped ? 'SNAP ANOTHER PAIR ↺' : 'SNAP INTO CONTRACTION! 🧲'}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#F8FAFC',
    borderTopLeftRadius: BORDER_RADIUS.xl,
    borderTopRightRadius: BORDER_RADIUS.xl,
    height: '94%',
    paddingBottom: SPACING.md,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.md,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
    backgroundColor: '#FFFFFF',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
    flex: 1,
  },
  titleIconBadge: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#FEF3C7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerGradeText: {
    fontSize: 11,
    fontWeight: '800',
    color: '#D97706',
    textTransform: 'uppercase',
  },
  headerTitleText: {
    fontSize: 16,
    fontWeight: '900',
    color: COLORS.textDark,
  },
  closeBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#F1F5F9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeBtnText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#64748B',
  },

  // Station tabs
  stationTabsScrollContainer: {
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
    paddingVertical: SPACING.xs,
  },
  stationTabsContent: {
    paddingHorizontal: SPACING.md,
    gap: SPACING.xs,
  },
  stationTabPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#F1F5F9',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  stationTabActive: {
    backgroundColor: '#FEF3C7',
    borderColor: '#F59E0B',
  },
  stationTabIcon: {
    fontSize: 15,
  },
  stationTabText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#64748B',
  },
  stationTabTextActive: {
    color: '#92400E',
    fontWeight: '900',
  },

  // Body
  stationBody: {
    flex: 1,
    paddingHorizontal: SPACING.md,
  },
  stationSection: {
    paddingVertical: SPACING.md,
    gap: SPACING.md,
  },

  // Hero Instruction
  heroInstructionBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
    backgroundColor: '#FFFFFF',
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.md,
    borderWidth: 1,
    borderColor: '#FEF3C7',
    ...SHADOWS.small,
  },
  heroInstructionEmoji: {
    fontSize: 32,
  },
  heroInstructionTitle: {
    fontSize: 15,
    fontWeight: '900',
    color: COLORS.textDark,
  },
  heroInstructionSub: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 2,
    lineHeight: 16,
  },

  // Chips
  chipRow: {
    gap: SPACING.xs,
    paddingVertical: SPACING.xs,
  },
  wordChip: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CBD5E1',
  },
  wordChipActive: {
    backgroundColor: '#2563EB',
    borderColor: '#1D4ED8',
  },
  wordChipText: {
    fontSize: 13,
    fontWeight: '800',
    color: '#334155',
  },
  wordChipTextActive: {
    color: '#FFFFFF',
  },

  // Magic Stage
  magicStage: {
    gap: SPACING.sm,
  },
  magicTransformationCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.lg,
    borderWidth: 2,
    borderColor: '#FDE68A',
    alignItems: 'center',
    gap: SPACING.md,
    ...SHADOWS.medium,
  },
  magicResultRow: {
    alignItems: 'center',
  },
  magicWordSide: {
    alignItems: 'center',
    gap: 4,
  },
  magicEmoji: {
    fontSize: 48,
  },
  magicWordLettersRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  magicWordText: {
    fontSize: 38,
    fontWeight: '900',
    color: COLORS.textDark,
    letterSpacing: 2,
  },
  magicLetterE: {
    fontSize: 38,
    fontWeight: '900',
    color: '#EF4444',
    letterSpacing: 2,
  },
  magicPhonicsLabel: {
    fontSize: 13,
    fontWeight: '800',
    color: '#2563EB',
    backgroundColor: '#EFF6FF',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    marginTop: 4,
  },
  magicMeaningText: {
    fontSize: 13,
    color: '#64748B',
    fontWeight: '600',
  },
  wandButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#F59E0B',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 24,
    width: '100%',
    ...SHADOWS.small,
  },
  wandButtonActive: {
    backgroundColor: '#8B5CF6',
  },
  wandButtonIcon: {
    fontSize: 22,
  },
  wandButtonText: {
    fontSize: 14,
    fontWeight: '900',
    color: '#FFFFFF',
  },

  // Soundboard
  soundboardContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.md,
    gap: SPACING.sm,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  soundboardHeader: {
    fontSize: 13,
    fontWeight: '800',
    color: COLORS.textDark,
  },
  blendGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  blendCard: {
    width: (width - 64) / 3,
    backgroundColor: '#F8FAFC',
    borderRadius: BORDER_RADIUS.sm,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    padding: 10,
    alignItems: 'center',
    gap: 2,
  },
  blendCardActive: {
    backgroundColor: '#EFF6FF',
    borderColor: '#3B82F6',
  },
  blendIcon: {
    fontSize: 20,
  },
  blendLetters: {
    fontSize: 18,
    fontWeight: '900',
    color: '#1E293B',
  },
  blendWord: {
    fontSize: 11,
    fontWeight: '700',
    color: '#64748B',
  },

  // Station 2 Fusion
  fusionChamberCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.md,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    alignItems: 'center',
    gap: SPACING.md,
    ...SHADOWS.small,
  },
  fusionReactorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  syllableChamber: {
    backgroundColor: '#EFF6FF',
    borderRadius: BORDER_RADIUS.md,
    borderWidth: 2,
    borderColor: '#3B82F6',
    paddingHorizontal: 20,
    paddingVertical: 14,
    alignItems: 'center',
    minWidth: 100,
  },
  chamberEmoji: {
    fontSize: 32,
  },
  chamberSyllableText: {
    fontSize: 22,
    fontWeight: '900',
    color: '#1D4ED8',
    marginTop: 4,
  },
  chamberPlusSign: {
    fontSize: 26,
    fontWeight: '900',
    color: '#F59E0B',
  },
  fusedResultBox: {
    width: '100%',
    backgroundColor: '#F8FAFC',
    borderRadius: BORDER_RADIUS.md,
    borderWidth: 2,
    borderColor: '#CBD5E1',
    padding: SPACING.md,
    alignItems: 'center',
  },
  fusedResultBoxActive: {
    backgroundColor: '#ECFDF5',
    borderColor: '#10B981',
  },
  fusedResultEmoji: {
    fontSize: 40,
  },
  fusedResultTitle: {
    fontSize: 26,
    fontWeight: '900',
    color: COLORS.textDark,
    marginTop: 4,
  },
  fusedResultMeaning: {
    fontSize: 13,
    color: '#047857',
    fontWeight: '700',
    marginTop: 2,
  },
  fuseActionButton: {
    backgroundColor: '#10B981',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
    width: '100%',
    alignItems: 'center',
  },
  fuseActionBtnText: {
    fontSize: 14,
    fontWeight: '900',
    color: '#FFFFFF',
  },

  // Clapper
  clapperStationBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.md,
    gap: SPACING.sm,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  clapperHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  clapperTitle: {
    fontSize: 14,
    fontWeight: '900',
    color: COLORS.textDark,
  },
  nextClapPill: {
    backgroundColor: '#F1F5F9',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  nextClapPillText: {
    fontSize: 11,
    fontWeight: '800',
    color: '#475569',
  },
  clapperCard: {
    backgroundColor: '#FFFBEB',
    borderRadius: BORDER_RADIUS.md,
    borderWidth: 1,
    borderColor: '#FDE68A',
    padding: SPACING.md,
    alignItems: 'center',
    gap: 6,
  },
  clapperEmoji: {
    fontSize: 36,
  },
  clapperWordText: {
    fontSize: 26,
    fontWeight: '900',
    color: '#78350F',
    letterSpacing: 1.5,
  },
  clapperPrompt: {
    fontSize: 12,
    color: '#92400E',
    fontWeight: '600',
  },
  clapCounterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 4,
  },
  clapCounterText: {
    fontSize: 13,
    fontWeight: '800',
    color: '#334155',
  },
  clapSolvedBadge: {
    fontSize: 12,
    fontWeight: '900',
    color: '#15803D',
    backgroundColor: '#DCFCE7',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
  },
  clapButton: {
    backgroundColor: '#F59E0B',
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 6,
  },
  clapButtonText: {
    fontSize: 13,
    fontWeight: '900',
    color: '#FFFFFF',
  },

  // Station 3 Shades
  shadeThemeRow: {
    flexDirection: 'row',
    gap: 6,
  },
  shadeThemeTab: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: BORDER_RADIUS.sm,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    paddingVertical: 8,
    alignItems: 'center',
  },
  shadeThemeTabActive: {
    backgroundColor: '#FEF3C7',
    borderColor: '#F59E0B',
  },
  shadeThemeIcon: {
    fontSize: 16,
  },
  shadeThemeText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#64748B',
    marginTop: 2,
  },
  shadeThemeTextActive: {
    color: '#B45309',
  },
  thermometerCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.md,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    alignItems: 'center',
    gap: SPACING.md,
    ...SHADOWS.small,
  },
  thermometerDisplay: {
    alignItems: 'center',
    gap: 4,
  },
  thermometerLevelEmoji: {
    fontSize: 48,
  },
  thermometerWordText: {
    fontSize: 32,
    fontWeight: '900',
    letterSpacing: 1.5,
  },
  thermometerBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  thermometerBadgeText: {
    fontSize: 12,
    fontWeight: '900',
    color: '#FFFFFF',
  },
  thermometerDesc: {
    fontSize: 12,
    color: '#64748B',
    fontWeight: '600',
    marginTop: 2,
  },
  levelButtonsRow: {
    flexDirection: 'row',
    gap: 8,
    width: '100%',
  },
  levelPillBtn: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 16,
    backgroundColor: '#F1F5F9',
    borderWidth: 1,
    borderColor: '#CBD5E1',
    alignItems: 'center',
  },
  levelPillText: {
    fontSize: 12,
    fontWeight: '800',
    color: '#475569',
  },

  // Prefix Factory
  prefixFactoryBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.md,
    gap: SPACING.sm,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  affixStageCard: {
    backgroundColor: '#F8FAFC',
    borderRadius: BORDER_RADIUS.md,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    padding: SPACING.md,
    alignItems: 'center',
    gap: SPACING.sm,
  },
  affixPartsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  affixChip: {
    backgroundColor: '#EDE9FE',
    borderWidth: 1,
    borderColor: '#C4B5FD',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: 'center',
  },
  affixChipLabel: {
    fontSize: 9,
    fontWeight: '900',
    color: '#6D28D9',
  },
  affixChipText: {
    fontSize: 16,
    fontWeight: '900',
    color: '#4C1D95',
  },
  affixPlusText: {
    fontSize: 20,
    fontWeight: '900',
    color: '#8B5CF6',
  },
  affixResultCard: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: BORDER_RADIUS.sm,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    padding: SPACING.sm,
    alignItems: 'center',
  },
  affixResultCardActive: {
    backgroundColor: '#F5F3FF',
    borderColor: '#8B5CF6',
  },
  affixResultEmoji: {
    fontSize: 32,
  },
  affixResultWord: {
    fontSize: 22,
    fontWeight: '900',
    color: COLORS.textDark,
  },
  affixRuleText: {
    fontSize: 11,
    color: '#6D28D9',
    fontWeight: '700',
    marginTop: 2,
  },
  affixAssembleBtn: {
    backgroundColor: '#8B5CF6',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 20,
    width: '100%',
    alignItems: 'center',
  },
  affixAssembleBtnText: {
    fontSize: 13,
    fontWeight: '900',
    color: '#FFFFFF',
  },

  // Station 4 Grammar
  sentenceStudioCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.md,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    gap: 8,
    ...SHADOWS.small,
  },
  builderSectionLabel: {
    fontSize: 12,
    fontWeight: '800',
    color: '#475569',
    marginTop: 4,
  },
  grammarChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 14,
    backgroundColor: '#F8FAFC',
    borderWidth: 1,
    borderColor: '#CBD5E1',
  },
  grammarChipActiveSubject: {
    backgroundColor: '#ECFDF5',
    borderColor: '#10B981',
  },
  grammarChipActivePredicate: {
    backgroundColor: '#EFF6FF',
    borderColor: '#3B82F6',
  },
  grammarChipEmoji: {
    fontSize: 14,
  },
  grammarChipText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#334155',
  },
  grammarChipTextActive: {
    fontWeight: '900',
    color: COLORS.textDark,
  },
  punctRow: {
    flexDirection: 'row',
    gap: 8,
  },
  punctBtn: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 12,
    backgroundColor: '#F1F5F9',
    borderWidth: 1,
    borderColor: '#CBD5E1',
    alignItems: 'center',
  },
  punctBtnActive: {
    backgroundColor: '#FEF3C7',
    borderColor: '#F59E0B',
  },
  punctBtnText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#475569',
  },
  punctBtnTextActive: {
    fontWeight: '900',
    color: '#92400E',
  },
  sentenceBoardCard: {
    backgroundColor: '#F8FAFC',
    borderRadius: BORDER_RADIUS.md,
    borderWidth: 2,
    borderColor: '#E2E8F0',
    padding: SPACING.md,
    alignItems: 'center',
    marginTop: 6,
  },
  sentenceBoardLabel: {
    fontSize: 10,
    fontWeight: '900',
    color: '#94A3B8',
    letterSpacing: 1,
  },
  sentenceBoardText: {
    fontSize: 18,
    fontWeight: '900',
    color: COLORS.textDark,
    textAlign: 'center',
    marginVertical: 6,
  },
  sentenceGrammarBreakdown: {
    width: '100%',
    gap: 4,
    marginTop: 6,
  },
  breakdownTagSubject: {
    backgroundColor: '#ECFDF5',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  breakdownTagPredicate: {
    backgroundColor: '#EFF6FF',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  breakdownTagText: {
    fontSize: 11,
    fontWeight: '800',
    color: '#334155',
  },
  breakdownVerifiedText: {
    fontSize: 12,
    fontWeight: '900',
    color: '#15803D',
    textAlign: 'center',
    marginTop: 2,
  },
  testSentenceButton: {
    backgroundColor: '#2563EB',
    paddingVertical: 12,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 6,
  },
  testSentenceButtonText: {
    fontSize: 13,
    fontWeight: '900',
    color: '#FFFFFF',
  },

  // Noun Sorter
  nounSorterCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.md,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    gap: SPACING.sm,
  },
  nounSorterTitle: {
    fontSize: 13,
    fontWeight: '900',
    color: COLORS.textDark,
  },
  currentNounDisplay: {
    backgroundColor: '#F8FAFC',
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.md,
    alignItems: 'center',
    gap: 2,
  },
  currentNounIcon: {
    fontSize: 40,
  },
  currentNounWord: {
    fontSize: 24,
    fontWeight: '900',
    color: COLORS.textDark,
  },
  nounFeedbackCorrect: {
    fontSize: 12,
    fontWeight: '900',
    color: '#15803D',
  },
  nounFeedbackWrong: {
    fontSize: 12,
    fontWeight: '900',
    color: '#DC2626',
  },
  nounBinsGrid: {
    flexDirection: 'row',
    gap: 6,
  },
  nounBinBtn: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 10,
    alignItems: 'center',
  },
  nounBinEmoji: {
    fontSize: 18,
  },
  nounBinText: {
    fontSize: 11,
    fontWeight: '900',
    marginTop: 2,
  },

  // Station 5 Tenses
  timeMachineCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.md,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    alignItems: 'center',
    gap: SPACING.md,
    ...SHADOWS.small,
  },
  tenseEraTabsRow: {
    flexDirection: 'row',
    gap: 6,
    width: '100%',
  },
  tenseEraTab: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    borderRadius: BORDER_RADIUS.sm,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    paddingVertical: 10,
    alignItems: 'center',
  },
  tenseEraTabPast: {
    backgroundColor: '#FEF3C7',
    borderColor: '#F59E0B',
  },
  tenseEraTabPresent: {
    backgroundColor: '#EFF6FF',
    borderColor: '#3B82F6',
  },
  tenseEraTabFuture: {
    backgroundColor: '#F3E8FF',
    borderColor: '#A855F7',
  },
  tenseEraIcon: {
    fontSize: 14,
  },
  tenseEraLabel: {
    fontSize: 10,
    fontWeight: '800',
    color: '#64748B',
    marginTop: 2,
  },
  tenseEraTextActive: {
    color: COLORS.textDark,
    fontWeight: '900',
  },
  timeMachineDisplayCard: {
    width: '100%',
    backgroundColor: '#F8FAFC',
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.md,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#CBD5E1',
    gap: 4,
  },
  timeMachineEmoji: {
    fontSize: 40,
  },
  timeMachineVerbOutput: {
    fontSize: 26,
    fontWeight: '900',
    color: '#1E293B',
    letterSpacing: 1,
  },
  timeSentenceSample: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    marginTop: 4,
  },
  timeSentenceText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#475569',
  },

  // Contraction Snapper
  contractionMachineCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.md,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    gap: SPACING.sm,
  },
  snapperStageCard: {
    backgroundColor: '#F8FAFC',
    borderRadius: BORDER_RADIUS.md,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    padding: SPACING.md,
    alignItems: 'center',
    gap: SPACING.md,
  },
  magnetBlocksRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  magnetBlock: {
    backgroundColor: '#FEF2F2',
    borderWidth: 2,
    borderColor: '#EF4444',
    borderRadius: 12,
    paddingHorizontal: 18,
    paddingVertical: 10,
  },
  magnetBlockText: {
    fontSize: 20,
    fontWeight: '900',
    color: '#991B1B',
  },
  magnetPlusText: {
    fontSize: 22,
    fontWeight: '900',
    color: '#EF4444',
  },
  snappedResultBox: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: BORDER_RADIUS.sm,
    borderWidth: 1,
    borderColor: '#CBD5E1',
    padding: SPACING.md,
    alignItems: 'center',
  },
  snappedResultBoxActive: {
    backgroundColor: '#FEFCE8',
    borderColor: '#EAB308',
  },
  snappedResultEmoji: {
    fontSize: 32,
  },
  snappedResultText: {
    fontSize: 26,
    fontWeight: '900',
    color: '#713F12',
    marginTop: 2,
  },
  snappedRuleNotice: {
    fontSize: 12,
    fontWeight: '800',
    color: '#A16207',
    marginTop: 4,
  },
  snapActionButton: {
    backgroundColor: '#DC2626',
    paddingVertical: 12,
    borderRadius: 20,
    width: '100%',
    alignItems: 'center',
  },
  snapActionButtonText: {
    fontSize: 13,
    fontWeight: '900',
    color: '#FFFFFF',
  },
});
