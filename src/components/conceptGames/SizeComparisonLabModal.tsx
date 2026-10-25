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
import { useUserStore } from '../../store/useUserStore';
import { SpeakerButton } from '../common/SpeakerButton';
import { stopSpeaking } from '../../utils/speech';

const { width } = Dimensions.get('window');

interface SizeComparisonLabModalProps {
  visible: boolean;
  onClose: () => void;
  activeLang?: string;
}

type ConceptCategory = 'big_small' | 'tall_short' | 'long_short' | 'thick_thin' | 'inside_outside';

interface LabLevel {
  id: number;
  category: ConceptCategory;
  categoryLabel: string;
  categoryHindi: string;
  prompt: string;
  hindiPrompt: string;
  targetProperty: 'big' | 'small' | 'tall' | 'short' | 'long' | 'thick' | 'thin' | 'inside' | 'outside';
  leftItem: {
    name: string;
    hindiName: string;
    emoji: string;
    sizeScale: number; // 1 to 3 for visual size
    metricText: string;
  };
  rightItem: {
    name: string;
    hindiName: string;
    emoji: string;
    sizeScale: number;
    metricText: string;
  };
  correctSide: 'left' | 'right';
  pedagogicalFact: {
    english: string;
    hindi: string;
  };
  visualTool: 'scale' | 'height_ruler' | 'ribbon' | 'girth' | 'spatial_box';
}

const LAB_LEVELS: LabLevel[] = [
  // 1. Big vs Small
  {
    id: 1,
    category: 'big_small',
    categoryLabel: 'Big vs Small',
    categoryHindi: 'बड़ा बनाम छोटा',
    prompt: 'Who is BIG? Tap the giant one!',
    hindiPrompt: 'कौन बड़ा है? बड़े जानवर पर टैप करें!',
    targetProperty: 'big',
    leftItem: { name: 'Elephant', hindiName: 'हाथी', emoji: '🐘', sizeScale: 2.2, metricText: '5,000 kg • Huge!' },
    rightItem: { name: 'Little Mouse', hindiName: 'छोटा चूहा', emoji: '🐭', sizeScale: 0.8, metricText: '25 g • Tiny!' },
    correctSide: 'left',
    pedagogicalFact: {
      english: 'An adult elephant is over 200,000 times heavier than a tiny field mouse!',
      hindi: 'हाथी धरती का सबसे बड़ा स्थलीय जीव है, जबकि चूहा हथेली में भी समा सकता है!',
    },
    visualTool: 'scale',
  },
  {
    id: 2,
    category: 'big_small',
    categoryLabel: 'Big vs Small',
    categoryHindi: 'बड़ा बनाम छोटा',
    prompt: 'Which fruit is SMALL?',
    hindiPrompt: 'कौन सा फल छोटा है? छोटे फल पर टैप करें!',
    targetProperty: 'small',
    leftItem: { name: 'Juicy Watermelon', hindiName: 'तरबूज', emoji: '🍉', sizeScale: 2.0, metricText: 'Big Fruit' },
    rightItem: { name: 'Tiny Strawberry', hindiName: 'स्ट्रॉबेरी', emoji: '🍓', sizeScale: 0.9, metricText: 'Small Berry' },
    correctSide: 'right',
    pedagogicalFact: {
      english: 'A watermelon needs two strong hands to carry, while a strawberry fits between two fingers!',
      hindi: 'तरबूज को उठाने के लिए दोनों हाथों की जरूरत होती है, जबकि स्ट्रॉबेरी दो उंगलियों में आ जाती है!',
    },
    visualTool: 'scale',
  },
  {
    id: 3,
    category: 'big_small',
    categoryLabel: 'Big vs Small',
    categoryHindi: 'बड़ा बनाम छोटा',
    prompt: 'Which vehicle is BIG?',
    hindiPrompt: 'कौन सा वाहन बड़ा है?',
    targetProperty: 'big',
    leftItem: { name: 'City Bus', hindiName: 'सिटी बस', emoji: '🚌', sizeScale: 2.1, metricText: 'Carries 50 Kids' },
    rightItem: { name: 'Bicycle', hindiName: 'साइकिल', emoji: '🚲', sizeScale: 0.9, metricText: '1 Rider' },
    correctSide: 'left',
    pedagogicalFact: {
      english: 'A school bus can seat up to 50 children, while a bicycle is for only 1 rider!',
      hindi: 'बस में पचास बच्चे एक साथ बैठ सकते हैं, जबकि साइकिल सिर्फ एक बच्चे के लिए होती है!',
    },
    visualTool: 'scale',
  },

  // 2. Tall vs Short
  {
    id: 4,
    category: 'tall_short',
    categoryLabel: 'Tall vs Short',
    categoryHindi: 'लंबा बनाम छोटा (ऊंचाई)',
    prompt: 'Who is TALL? Pull up the height ruler!',
    hindiPrompt: 'कौन लंबा / ऊंचा है? ऊंचे जीव पर टैप करें!',
    targetProperty: 'tall',
    leftItem: { name: 'Giraffe', hindiName: 'जिराफ', emoji: '🦒', sizeScale: 2.3, metricText: 'Height: 5.8 Meters 📏' },
    rightItem: { name: 'Turtle', hindiName: 'कछुआ', emoji: '🐢', sizeScale: 0.8, metricText: 'Height: 0.3 Meters' },
    correctSide: 'left',
    pedagogicalFact: {
      english: 'The giraffe is the tallest animal in the world. Its neck alone is over 6 feet tall!',
      hindi: 'जिराफ दुनिया का सबसे ऊंचा जानवर है — उसकी सिर्फ गर्दन ही एक इंसान से भी लंबी होती है!',
    },
    visualTool: 'height_ruler',
  },
  {
    id: 5,
    category: 'tall_short',
    categoryLabel: 'Tall vs Short',
    categoryHindi: 'लंबा बनाम छोटा (ऊंचाई)',
    prompt: 'Which plant is SHORT?',
    hindiPrompt: 'कौन सा पौधा छोटा है?',
    targetProperty: 'short',
    leftItem: { name: 'Coconut Palm', hindiName: 'नारियल का पेड़', emoji: '🌴', sizeScale: 2.2, metricText: 'Height: 15 Meters' },
    rightItem: { name: 'Rose Bush', hindiName: 'गुलाब का पौधा', emoji: '🌺', sizeScale: 0.9, metricText: 'Height: 0.6 Meters' },
    correctSide: 'right',
    pedagogicalFact: {
      english: 'Coconut palm trees touch the sky at 15 meters, while rose shrubs stay down near our knees!',
      hindi: 'नारियल का पेड़ आसमान छूता है, जबकि गुलाब की झाड़ी हमारे घुटनों जितनी ही ऊंची होती है!',
    },
    visualTool: 'height_ruler',
  },
  {
    id: 6,
    category: 'tall_short',
    categoryLabel: 'Tall vs Short',
    categoryHindi: 'लंबा बनाम छोटा (ऊंचाई)',
    prompt: 'Which building is TALL?',
    hindiPrompt: 'कौन सी इमारत बहुत ऊंची है?',
    targetProperty: 'tall',
    leftItem: { name: 'Camping Tent', hindiName: 'तंबू', emoji: '⛺', sizeScale: 0.9, metricText: 'Height: 1.5 Meters' },
    rightItem: { name: 'Lighthouse Tower', hindiName: 'प्रकाशस्तंभ', emoji: '🗼', sizeScale: 2.2, metricText: 'Height: 35 Meters' },
    correctSide: 'right',
    pedagogicalFact: {
      english: 'A coastal lighthouse shines bright light for miles out at sea from high up in the air!',
      hindi: 'लाइटहाउस समुद्र के जहाजों को रास्ता दिखाने के लिए बहुत ऊंचा बनाया जाता है!',
    },
    visualTool: 'height_ruler',
  },

  // 3. Long vs Short (Horizontal Length)
  {
    id: 7,
    category: 'long_short',
    categoryLabel: 'Long vs Short',
    categoryHindi: 'लंबा और छोटा (लंबाई)',
    prompt: 'Which vehicle is LONG? Measure the ribbon!',
    hindiPrompt: 'किसकी लंबाई सबसे ज्यादा है?',
    targetProperty: 'long',
    leftItem: { name: 'Express Train', hindiName: 'रेलगाड़ी', emoji: '🚂', sizeScale: 2.2, metricText: 'Length: 400 Meters 🛤️' },
    rightItem: { name: 'Motor Scooter', hindiName: 'स्कूटर', emoji: '🛵', sizeScale: 0.9, metricText: 'Length: 1.8 Meters' },
    correctSide: 'left',
    pedagogicalFact: {
      english: 'An express train has 20 long bogies linked together stretching across several streets!',
      hindi: 'ट्रेन में बीस डिब्बे जुड़े होते हैं जो कई सौ मीटर लंबी कतार बनाते हैं!',
    },
    visualTool: 'ribbon',
  },
  {
    id: 8,
    category: 'long_short',
    categoryLabel: 'Long vs Short',
    categoryHindi: 'लंबा और छोटा (लंबाई)',
    prompt: 'Which creature is SHORT in length?',
    hindiPrompt: 'कौन सा जीव लंबाई में छोटा है?',
    targetProperty: 'short',
    leftItem: { name: 'Long Green Snake', hindiName: 'लंबा सांप', emoji: '🐍', sizeScale: 2.1, metricText: 'Length: 3 Meters' },
    rightItem: { name: 'Little Caterpillar', hindiName: 'सुंडी / कीड़ा', emoji: '🐛', sizeScale: 0.9, metricText: 'Length: 4 Centimeters' },
    correctSide: 'right',
    pedagogicalFact: {
      english: 'A snake can slither across an entire room, while a tiny caterpillar fits on a single leaf!',
      hindi: 'सांप पूरे कमरे जितनी लंबाई में फैल सकता है, जबकि कैटरपिलर एक छोटे से पत्ते पर रहता है!',
    },
    visualTool: 'ribbon',
  },

  // 4. Thick vs Thin
  {
    id: 9,
    category: 'thick_thin',
    categoryLabel: 'Thick vs Thin',
    categoryHindi: 'मोटा बनाम पतला (घेर)',
    prompt: 'Which object is THICK?',
    hindiPrompt: 'किसका तना / घेरा मोटा है?',
    targetProperty: 'thick',
    leftItem: { name: 'Tree Trunk Log', hindiName: 'पेड़ का तना', emoji: '🌲', sizeScale: 2.1, metricText: 'Girth: Wide & Sturdy' },
    rightItem: { name: 'Slender Candle', hindiName: 'मोमबत्ती', emoji: '🕯️', sizeScale: 0.8, metricText: 'Girth: Thin & Narrow' },
    correctSide: 'left',
    pedagogicalFact: {
      english: 'A tree trunk is so thick it takes two people holding hands to hug it around!',
      hindi: 'पुराने पेड़ का तना इतना मोटा होता है कि दो बच्चे मिलकर भी उसे दोनों हाथों से नहीं घेर पाते!',
    },
    visualTool: 'girth',
  },

  // 5. Inside vs Outside
  {
    id: 10,
    category: 'inside_outside',
    categoryLabel: 'Inside vs Outside',
    categoryHindi: 'अंदर बनाम बाहर',
    prompt: 'Where is the puppy 🐶? Tap INSIDE or OUTSIDE!',
    hindiPrompt: 'पिल्ला 🐶 कहाँ है? अंदर या बाहर पर टैप करें!',
    targetProperty: 'inside',
    leftItem: { name: 'Inside Kennel', hindiName: 'घर के अंदर', emoji: '🏠', sizeScale: 1.5, metricText: 'Cozy Inside 🐶' },
    rightItem: { name: 'Outside in Garden', hindiName: 'बगीचे में बाहर', emoji: '🌳', sizeScale: 1.5, metricText: 'Playing Outside' },
    correctSide: 'left',
    pedagogicalFact: {
      english: 'Inside means safe within boundaries or walls, outside means in open outdoor space!',
      hindi: 'अंदर का मतलब किसी सीमा या चारदीवारी के भीतर, और बाहर का मतलब खुली जगह में!',
    },
    visualTool: 'spatial_box',
  },
];

export const SizeComparisonLabModal: React.FC<SizeComparisonLabModalProps> = ({
  visible,
  onClose,
  activeLang,
}) => {
  const { profile, addReward } = useUserStore();
  const isHindi = (activeLang || profile.preferredLanguage) === 'hi';

  const [levelIndex, setLevelIndex] = useState(0);
  const [selectedSide, setSelectedSide] = useState<'left' | 'right' | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [starsWon, setStarsWon] = useState(0);

  // Animations
  const leftBounce = useRef(new Animated.Value(1)).current;
  const rightBounce = useRef(new Animated.Value(1)).current;
  const rulerHeight = useRef(new Animated.Value(0)).current;

  const currentLevel = LAB_LEVELS[levelIndex] || LAB_LEVELS[0];

  useEffect(() => {
    if (!visible) return;
    stopSpeaking();
    setLevelIndex(0);
    setSelectedSide(null);
    setIsSuccess(false);
    setIsFinished(false);
    setStarsWon(0);
    leftBounce.setValue(1);
    rightBounce.setValue(1);
    rulerHeight.setValue(0);
  }, [visible]);

  // When level loads, trigger smooth entrance
  useEffect(() => {
    if (!visible) return;
    stopSpeaking();
    rulerHeight.setValue(0);
    Animated.timing(rulerHeight, {
      toValue: 1,
      duration: 600,
      useNativeDriver: false,
    }).start();
  }, [levelIndex, visible]);

  const handleSelectSide = (side: 'left' | 'right') => {
    if (isSuccess) return;

    soundManager.playPop();
    triggerHaptic('medium');
    setSelectedSide(side);

    const animTarget = side === 'left' ? leftBounce : rightBounce;
    Animated.sequence([
      Animated.timing(animTarget, { toValue: 1.25, duration: 150, useNativeDriver: true }),
      Animated.spring(animTarget, { toValue: 1, friction: 3, tension: 40, useNativeDriver: true }),
    ]).start();

    if (side === currentLevel.correctSide) {
      setIsSuccess(true);
      soundManager.playCorrect();
      triggerHaptic('success');
      setStarsWon((prev) => prev + 10);

      setTimeout(() => {
        if (levelIndex + 1 < LAB_LEVELS.length) {
          setLevelIndex((prev) => prev + 1);
          setSelectedSide(null);
          setIsSuccess(false);
        } else {
          setIsFinished(true);
          soundManager.playFanfare();
          addReward({ stars: 100, xp: 200 });
        }
      }, 1400);
    } else {
      triggerHaptic('warning');
    }
  };

  const handleClose = () => {
    stopSpeaking();
    onClose();
  };

  const progressPercent = Math.round(((levelIndex + 1) / LAB_LEVELS.length) * 100);

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={handleClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalCard}>
          {/* Top Header Row with Light Pastels */}
          <View style={styles.modalHeader}>
            <View style={styles.headerLeft}>
              <View style={styles.labIconCircle}>
                <Text style={{ fontSize: 24 }}>📏</Text>
              </View>
              <View>
                <Text style={styles.labSubtitle}>
                  {isHindi ? 'एनसीईआरटी बालवाटिका २ गणित लैब' : 'NCERT Balvatika 2 Maths STEM Lab'}
                </Text>
                <Text style={styles.labTitle}>
                  {isHindi ? 'आकार और ऊंचाई अन्वेषक लैब' : 'Size & Height Practical Explorer'}
                </Text>
              </View>
            </View>

            <TouchableOpacity activeOpacity={0.8} onPress={handleClose} style={styles.closeBtn}>
              <Text style={styles.closeBtnText}>✕</Text>
            </TouchableOpacity>
          </View>

          {/* Progress Tracker Pill Bar */}
          <View style={styles.progressContainer}>
            <View style={styles.progressInfoRow}>
              <Text style={styles.progressLevelText}>
                {isHindi ? `प्रयोग ${levelIndex + 1} / ${LAB_LEVELS.length}` : `Experiment ${levelIndex + 1} of ${LAB_LEVELS.length}`} •{' '}
                <Text style={{ color: '#0284C7', fontWeight: '800' }}>
                  {isHindi ? currentLevel.categoryHindi : currentLevel.categoryLabel}
                </Text>
              </Text>
              <Text style={styles.starsPillText}>⭐ {starsWon} Stars</Text>
            </View>
            <View style={styles.progressTrack}>
              <View style={[styles.progressFill, { width: `${progressPercent}%` }]} />
            </View>
          </View>

          {/* Main Experiment Arena */}
          {!isFinished ? (
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollBody}>
              {/* Question Banner in Light Peach/Gold with Speaker Button */}
              <View style={styles.promptCard}>
                <View style={styles.promptTextRow}>
                  <Text style={styles.promptEmoji}>💡</Text>
                  <Text style={styles.promptText}>
                    {isHindi ? currentLevel.hindiPrompt : currentLevel.prompt}
                  </Text>
                </View>
                <SpeakerButton
                  textToSpeak={isHindi ? currentLevel.hindiPrompt : currentLevel.prompt}
                  size="pill"
                  showLabel
                  activeLang={isHindi ? 'hi' : 'en'}
                  style={styles.promptSpeakerBtn}
                />
              </View>

              {/* Physical Comparison Stage */}
              <View style={styles.comparisonStage}>
                {/* Visual Tool Badge */}
                <View style={styles.toolIndicatorBadge}>
                  <Text style={styles.toolIndicatorText}>
                    {currentLevel.visualTool === 'scale'
                      ? (isHindi ? '⚖️ डिजिटल आकार तुलना पैड' : '⚖️ Live Size Comparison Scale')
                      : currentLevel.visualTool === 'height_ruler'
                      ? (isHindi ? '📏 ऊंचाई मापने वाला डिजिटल फीता' : '📏 Height Measuring Tower Tape')
                      : currentLevel.visualTool === 'ribbon'
                      ? (isHindi ? '🛤️ लंबाई विस्तारक रिबन' : '🛤️ Horizontal Length Extender')
                      : (isHindi ? '📦 स्थानिक स्थिति क्षेत्र' : '📦 3D Spatial Position Field')}
                  </Text>
                </View>

                {/* Left & Right Interactive Pods */}
                <View style={styles.podsRow}>
                  {/* Left Pod */}
                  <TouchableOpacity
                    activeOpacity={0.85}
                    onPress={() => handleSelectSide('left')}
                    style={[
                      styles.itemPod,
                      selectedSide === 'left' &&
                        (currentLevel.correctSide === 'left' ? styles.podCorrect : styles.podIncorrect),
                    ]}
                  >
                    <Animated.View
                      style={[
                        styles.itemEmojiContainer,
                        {
                          transform: [
                            { scale: leftBounce },
                            { scale: currentLevel.leftItem.sizeScale },
                          ],
                        },
                      ]}
                    >
                      <Text style={styles.itemEmoji}>{currentLevel.leftItem.emoji}</Text>
                    </Animated.View>

                    <View style={styles.itemNameRow}>
                      <Text style={styles.itemName}>
                        {isHindi ? currentLevel.leftItem.hindiName : currentLevel.leftItem.name}
                      </Text>
                      <SpeakerButton
                        textToSpeak={isHindi ? currentLevel.leftItem.hindiName : currentLevel.leftItem.name}
                        size="sm"
                        activeLang={isHindi ? 'hi' : 'en'}
                        style={styles.podSpeakerBtn}
                      />
                    </View>
                    <View style={styles.metricPill}>
                      <Text style={styles.metricText}>{currentLevel.leftItem.metricText}</Text>
                    </View>

                    {selectedSide === 'left' && (
                      <View style={styles.feedbackCheckBadge}>
                        <Text style={styles.feedbackCheckText}>
                          {currentLevel.correctSide === 'left' ? '✓' : '✗'}
                        </Text>
                      </View>
                    )}
                  </TouchableOpacity>

                  {/* Center Measuring Tape or Scale Divider */}
                  <View style={styles.centerMeasureToolBox}>
                    <Animated.View
                      style={[
                        styles.heightRulerTape,
                        {
                          height: rulerHeight.interpolate({
                            inputRange: [0, 1],
                            outputRange: ['0%', '100%'],
                          }),
                        },
                      ]}
                    >
                      <Text style={styles.rulerTick}>10m</Text>
                      <Text style={styles.rulerTick}>5m</Text>
                      <Text style={styles.rulerTick}>2m</Text>
                      <Text style={styles.rulerTick}>0m</Text>
                    </Animated.View>
                  </View>

                  {/* Right Pod */}
                  <TouchableOpacity
                    activeOpacity={0.85}
                    onPress={() => handleSelectSide('right')}
                    style={[
                      styles.itemPod,
                      selectedSide === 'right' &&
                        (currentLevel.correctSide === 'right' ? styles.podCorrect : styles.podIncorrect),
                    ]}
                  >
                    <Animated.View
                      style={[
                        styles.itemEmojiContainer,
                        {
                          transform: [
                            { scale: rightBounce },
                            { scale: currentLevel.rightItem.sizeScale },
                          ],
                        },
                      ]}
                    >
                      <Text style={styles.itemEmoji}>{currentLevel.rightItem.emoji}</Text>
                    </Animated.View>

                    <View style={styles.itemNameRow}>
                      <Text style={styles.itemName}>
                        {isHindi ? currentLevel.rightItem.hindiName : currentLevel.rightItem.name}
                      </Text>
                      <SpeakerButton
                        textToSpeak={isHindi ? currentLevel.rightItem.hindiName : currentLevel.rightItem.name}
                        size="sm"
                        activeLang={isHindi ? 'hi' : 'en'}
                        style={styles.podSpeakerBtn}
                      />
                    </View>
                    <View style={styles.metricPill}>
                      <Text style={styles.metricText}>{currentLevel.rightItem.metricText}</Text>
                    </View>

                    {selectedSide === 'right' && (
                      <View style={styles.feedbackCheckBadge}>
                        <Text style={styles.feedbackCheckText}>
                          {currentLevel.correctSide === 'right' ? '✓' : '✗'}
                        </Text>
                      </View>
                    )}
                  </TouchableOpacity>
                </View>
              </View>

              {/* Pedagogical Clue & Fact Card in Light Mint/Green */}
              <View style={styles.pedagogyCard}>
                <View style={styles.pedagogyHeaderRow}>
                  <Text style={styles.pedagogyHeaderEmoji}>🔬</Text>
                  <Text style={styles.pedagogyHeaderText}>
                    {isHindi ? 'वैज्ञानिक समझ (Practical Science Clue):' : 'Hands-On Science Insight:'}
                  </Text>
                </View>
                <Text style={styles.pedagogyBody}>
                  {isHindi ? currentLevel.pedagogicalFact.hindi : currentLevel.pedagogicalFact.english}
                </Text>
              </View>
            </ScrollView>
          ) : (
            /* Celebration Screen when all experiments finished */
            <View style={styles.celebrationCard}>
              <View style={styles.trophyGlowCircle}>
                <Text style={{ fontSize: 50 }}>🏆</Text>
              </View>

              <Text style={styles.celebrationTitle}>
                {isHindi ? 'शानदार! आकार और ऊंचाई वैज्ञानिक!' : 'Awesome Job! Junior Scientist!'}
              </Text>
              <Text style={styles.celebrationSub}>
                {isHindi
                  ? 'आपने बड़ा बनाम छोटा, लंबा बनाम छोटा, और स्थानिक समझ के सभी १० प्रयोग सफलतापूर्वक पूरे कर लिए!'
                  : 'You have mastered Big vs Small, Tall vs Short & Spatial Dimensions through hands-on experiments!'}
              </Text>

              <View style={styles.rewardStarsBox}>
                <Text style={styles.rewardStarsText}>⭐ +{starsWon} Bonus Stars Earned!</Text>
              </View>

              <TouchableOpacity
                activeOpacity={0.85}
                style={styles.celebrationCloseBtn}
                onPress={onClose}
              >
                <Text style={styles.celebrationCloseBtnText}>
                  {isHindi ? 'होम पर वापस जाएं 🚀' : 'Back to STEM Labs 🚀'}
                </Text>
              </TouchableOpacity>
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
    backgroundColor: 'rgba(15, 23, 42, 0.7)',
    justifyContent: 'flex-end',
  },
  modalCard: {
    backgroundColor: '#F8FAFC', // Light, soothing cloud white
    borderTopLeftRadius: BORDER_RADIUS.xl,
    borderTopRightRadius: BORDER_RADIUS.xl,
    maxHeight: '92%',
    paddingBottom: SPACING.xl,
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.lg,
    paddingBottom: SPACING.md,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: BORDER_RADIUS.xl,
    borderTopRightRadius: BORDER_RADIUS.xl,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.md,
    flex: 1,
  },
  labIconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#E0F2FE', // Light pastel sky blue
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#BAE6FD',
  },
  labSubtitle: {
    fontSize: 11,
    fontWeight: '800',
    color: '#0284C7',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  labTitle: {
    fontSize: 15,
    fontWeight: '900',
    color: '#0F172A',
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
  progressContainer: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: SPACING.lg,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  progressInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  progressLevelText: {
    fontSize: 12,
    color: '#475569',
    fontWeight: '700',
  },
  starsPillText: {
    fontSize: 12,
    fontWeight: '900',
    color: '#D97706',
  },
  progressTrack: {
    height: 6,
    backgroundColor: '#E2E8F0',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#0284C7', // Fresh light blue fill
    borderRadius: 3,
  },
  scrollBody: {
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.md,
    paddingBottom: SPACING.giant,
    gap: SPACING.md,
  },
  promptCard: {
    backgroundColor: '#FEF3C7', // Light sunny pastel gold
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.md,
    borderWidth: 1.5,
    borderColor: '#FDE68A',
    gap: SPACING.sm,
  },
  promptTextRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  promptEmoji: {
    fontSize: 22,
  },
  promptText: {
    flex: 1,
    fontSize: 15,
    fontWeight: '900',
    color: '#92400E',
    lineHeight: 20,
  },
  promptSpeakerBtn: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFFFFF',
    borderColor: '#F59E0B',
  },
  itemNameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    marginVertical: 4,
  },
  podSpeakerBtn: {
    backgroundColor: '#FFFFFF',
    borderColor: '#CBD5E1',
  },
  comparisonStage: {
    backgroundColor: '#FFFFFF',
    borderRadius: BORDER_RADIUS.xl,
    padding: SPACING.md,
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    ...SHADOWS.small,
  },
  toolIndicatorBadge: {
    alignSelf: 'center',
    backgroundColor: '#F0F9FF',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: BORDER_RADIUS.round,
    borderWidth: 1,
    borderColor: '#BAE6FD',
    marginBottom: SPACING.md,
  },
  toolIndicatorText: {
    fontSize: 11,
    fontWeight: '800',
    color: '#0369A1',
  },
  podsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 200,
  },
  itemPod: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F8FAFC',
    borderRadius: BORDER_RADIUS.lg,
    paddingVertical: SPACING.lg,
    paddingHorizontal: SPACING.sm,
    borderWidth: 2,
    borderColor: '#E2E8F0',
    position: 'relative',
    minHeight: 180,
  },
  podCorrect: {
    backgroundColor: '#DCFCE7', // Lush light green
    borderColor: '#10B981',
  },
  podIncorrect: {
    backgroundColor: '#FEE2E2', // Soft pastel red
    borderColor: '#EF4444',
  },
  itemEmojiContainer: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  itemEmoji: {
    fontSize: 38,
  },
  itemName: {
    fontSize: 14,
    fontWeight: '900',
    color: '#0F172A',
    textAlign: 'center',
    marginBottom: 4,
  },
  metricPill: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: BORDER_RADIUS.round,
    borderWidth: 1,
    borderColor: '#CBD5E1',
  },
  metricText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#475569',
  },
  centerMeasureToolBox: {
    width: 32,
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 160,
    marginHorizontal: 4,
  },
  heightRulerTape: {
    width: 20,
    backgroundColor: '#FEF3C7',
    borderWidth: 1.5,
    borderColor: '#F59E0B',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  rulerTick: {
    fontSize: 8,
    fontWeight: '800',
    color: '#B45309',
  },
  feedbackCheckBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#10B981',
    alignItems: 'center',
    justifyContent: 'center',
  },
  feedbackCheckText: {
    fontSize: 14,
    fontWeight: '900',
    color: '#FFFFFF',
  },
  pedagogyCard: {
    backgroundColor: '#F0FDF4', // Light pastel mint green
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.md,
    borderWidth: 1.5,
    borderColor: '#BBF7D0',
  },
  pedagogyHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 4,
  },
  pedagogyHeaderEmoji: {
    fontSize: 16,
  },
  pedagogyHeaderText: {
    fontSize: 12,
    fontWeight: '900',
    color: '#15803D',
  },
  pedagogyBody: {
    fontSize: 13,
    color: '#166534',
    lineHeight: 18,
    fontWeight: '600',
  },
  celebrationCard: {
    alignItems: 'center',
    padding: SPACING.xl,
    backgroundColor: '#FFFFFF',
    margin: SPACING.lg,
    borderRadius: BORDER_RADIUS.xl,
    borderWidth: 2,
    borderColor: '#10B981',
  },
  trophyGlowCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#DCFCE7',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SPACING.md,
    borderWidth: 3,
    borderColor: '#86EFAC',
  },
  celebrationTitle: {
    fontSize: 20,
    fontWeight: '900',
    color: '#064E3B',
    textAlign: 'center',
    marginBottom: 8,
  },
  celebrationSub: {
    fontSize: 13,
    color: '#047857',
    textAlign: 'center',
    lineHeight: 18,
    marginBottom: SPACING.lg,
  },
  rewardStarsBox: {
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: BORDER_RADIUS.round,
    borderWidth: 1,
    borderColor: '#FDE68A',
    marginBottom: SPACING.xl,
  },
  rewardStarsText: {
    fontSize: 14,
    fontWeight: '900',
    color: '#B45309',
  },
  celebrationCloseBtn: {
    backgroundColor: '#10B981',
    paddingVertical: 12,
    paddingHorizontal: SPACING.xxl,
    borderRadius: BORDER_RADIUS.lg,
    alignItems: 'center',
    width: '100%',
  },
  celebrationCloseBtnText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '900',
  },
});
