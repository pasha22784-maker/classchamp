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

interface HindiVyanjanLabModalProps {
  visible: boolean;
  onClose: () => void;
  activeLang?: string;
}

interface HindiVyanjanItem {
  letter: string;
  name: string;
  exampleWord: string;
  exampleWordEn: string;
  emoji: string;
  color: string;
  borderColor: string;
  speechHi: string;
  speechEn: string;
}

const HINDI_VYANJAN_LIST: HindiVyanjanItem[] = [
  {
    letter: 'क',
    name: 'क',
    exampleWord: 'कबूतर',
    exampleWordEn: 'Pigeon',
    emoji: '🕊️',
    color: '#EFF6FF',
    borderColor: '#93C5FD',
    speechHi: 'क से कबूतर! गुटर-गूँ बोलने वाला प्यारा कबूतर!',
    speechEn: 'Ka se Kabootar! The gentle pigeon bird!',
  },
  {
    letter: 'ख',
    name: 'ख',
    exampleWord: 'खरगोश',
    exampleWordEn: 'Rabbit',
    emoji: '🐰',
    color: '#FEF3C7',
    borderColor: '#FCD34D',
    speechHi: 'ख से खरगोश! सफेद-सफेद गाजर खाने वाला प्यारा खरगोश!',
    speechEn: 'Kha se Khargosh! Cute white fluffy rabbit!',
  },
  {
    letter: 'ग',
    name: 'ग',
    exampleWord: 'गमला',
    exampleWordEn: 'Flower Pot',
    emoji: '🪴',
    color: '#DCFCE7',
    borderColor: '#86EFAC',
    speechHi: 'ग से गमला! सुंदर-सुंदर फूल खिलाने वाला गमला!',
    speechEn: 'Ga se Gamla! Fresh green flower pot!',
  },
  {
    letter: 'घ',
    name: 'घ',
    exampleWord: 'घर',
    exampleWordEn: 'House',
    emoji: '🏠',
    color: '#FEE2E2',
    borderColor: '#FCA5A5',
    speechHi: 'घ से घर! हमारा प्यारा-प्यारा सुंदर घर!',
    speechEn: 'Gha se Ghar! Sweet home sweet home!',
  },
  {
    letter: 'च',
    name: 'च',
    exampleWord: 'चम्मच',
    exampleWordEn: 'Spoon',
    emoji: '🥄',
    color: '#FDF4FF',
    borderColor: '#F5D0FE',
    speechHi: 'च से चम्मच! स्वादिष्ट खीर और हलवा खाने वाला चम्मच!',
    speechEn: 'Cha se Chammach! Shining silver spoon!',
  },
  {
    letter: 'छ',
    name: 'छ',
    exampleWord: 'छाता',
    exampleWordEn: 'Umbrella',
    emoji: '☂️',
    color: '#F0FDF4',
    borderColor: '#86EFAC',
    speechHi: 'छ से छाता! बारिश और कड़ी धूप से बचाने वाला रंगीन छाता!',
    speechEn: 'Chha se Chhata! Colorful rain umbrella!',
  },
  {
    letter: 'ज',
    name: 'ज',
    exampleWord: 'जग',
    exampleWordEn: 'Jug',
    emoji: '🫖',
    color: '#F0F9FF',
    borderColor: '#BAE6FD',
    speechHi: 'ज से जग! ठंडा-मीठा जल भरने वाला जग!',
    speechEn: 'Ja se Jag! Fresh cool water jug!',
  },
  {
    letter: 'झ',
    name: 'झ',
    exampleWord: 'झंडा',
    exampleWordEn: 'Flag',
    emoji: '🇮🇳',
    color: '#FFF7ED',
    borderColor: '#FDBA74',
    speechHi: 'झ से झंडा! हमारा प्यारा तिरंगा राष्ट्रीय झंडा!',
    speechEn: 'Jha se Jhanda! Tricolor national flag!',
  },
  {
    letter: 'ट',
    name: 'ट',
    exampleWord: 'टमाटर',
    exampleWordEn: 'Tomato',
    emoji: '🍅',
    color: '#FEE2E2',
    borderColor: '#F87171',
    speechHi: 'ट से टमाटर! लाल-लाल गोल-मटोल रसीला टमाटर!',
    speechEn: 'Ta se Tamatar! Red juicy round tomato!',
  },
  {
    letter: 'ड',
    name: 'ड',
    exampleWord: 'डमरू',
    exampleWordEn: 'Drum',
    emoji: '🥁',
    color: '#FEF9C3',
    borderColor: '#FACC15',
    speechHi: 'ड से डमरू! डम-डम बाजे प्यारा डमरू!',
    speechEn: 'Da se Damroo! Dam-dam playing mini drum!',
  },
  {
    letter: 'त',
    name: 'त',
    exampleWord: 'तितली',
    exampleWordEn: 'Butterfly',
    emoji: '🦋',
    color: '#FAF5FF',
    borderColor: '#D8B4FE',
    speechHi: 'त से तितली! फूलों पर उड़ने वाली रंग-बिरंगी तितली!',
    speechEn: 'Ta se Titli! Colorful flying butterfly!',
  },
  {
    letter: 'न',
    name: 'न',
    exampleWord: 'नल',
    exampleWordEn: 'Tap',
    emoji: '🚰',
    color: '#EFF6FF',
    borderColor: '#60A5FA',
    speechHi: 'न से नल! कल-कल बहता शीतल मीठा पानी!',
    speechEn: 'Na se Nal! Running fresh water tap!',
  },
  {
    letter: 'प',
    name: 'प',
    exampleWord: 'पतंग',
    exampleWordEn: 'Kite',
    emoji: '🪁',
    color: '#FDF2F8',
    borderColor: '#F472B6',
    speechHi: 'प से पतंग! नीले गगन में उड़ने वाली पतंग!',
    speechEn: 'Pa se Patang! High flying diamond kite!',
  },
  {
    letter: 'ब',
    name: 'ब',
    exampleWord: 'बतख',
    exampleWordEn: 'Duck',
    emoji: '🦆',
    color: '#ECFDF5',
    borderColor: '#6EE7B7',
    speechHi: 'ब से बतख! तालाब में मजे से तैरने वाली बतख!',
    speechEn: 'Ba se Batakh! Quack-quack swimming duck!',
  },
  {
    letter: 'म',
    name: 'म',
    exampleWord: 'मछली',
    exampleWordEn: 'Fish',
    emoji: '🐟',
    color: '#F0F9FF',
    borderColor: '#38BDF8',
    speechHi: 'म से मछली! जल की रानी मछली, जीवन इसका पानी है!',
    speechEn: 'Ma se Machhli! Golden fish, queen of the water!',
  },
];

interface VyanjanQuizMission {
  questionHi: string;
  targetLetter: string;
  targetWord: string;
  targetEmoji: string;
  speechText: string;
  options: string[]; // 3 letters
}

const VYANJAN_QUIZ_MISSIONS: VyanjanQuizMission[] = [
  {
    questionHi: '🕊️ "कबूतर" किस व्यंजन अक्षर से शुरू होता है?',
    targetLetter: 'क',
    targetWord: 'कबूतर',
    targetEmoji: '🕊️',
    speechText: 'कबूतर किस अक्षर से शुरू होता है? क, ख या ग?',
    options: ['क', 'ख', 'ग'],
  },
  {
    questionHi: '🐟 "मछली जल की रानी है" — मछली किस अक्षर से है?',
    targetLetter: 'म',
    targetWord: 'मछली',
    targetEmoji: '🐟',
    speechText: 'मछली किस अक्षर से शुरू होती है? म पर टैप करें!',
    options: ['न', 'प', 'म'],
  },
  {
    questionHi: '🪁 नीले आकाश में उड़ने वाली "पतंग" किस अक्षर से है?',
    targetLetter: 'प',
    targetWord: 'पतंग',
    targetEmoji: '🪁',
    speechText: 'पतंग किस अक्षर से शुरू होती है? प, ब या म?',
    options: ['ब', 'प', 'त'],
  },
  {
    questionHi: '🍅 लाल-लाल "टमाटर" किस अक्षर से शुरू होता है?',
    targetLetter: 'ट',
    targetWord: 'टमाटर',
    targetEmoji: '🍅',
    speechText: 'लाल-लाल टमाटर किस अक्षर से है? ट पर टैप करो!',
    options: ['ड', 'ट', 'झ'],
  },
  {
    questionHi: '🦋 सुंदर रंग-बिरंगी "तितली" किस अक्षर से है?',
    targetLetter: 'त',
    targetWord: 'तितली',
    targetEmoji: '🦋',
    speechText: 'रंग-बिरंगी तितली किस अक्षर से शुरू होती है?',
    options: ['त', 'न', 'क'],
  },
];

export const HindiVyanjanLabModal: React.FC<HindiVyanjanLabModalProps> = ({
  visible,
  onClose,
  activeLang = 'hi',
}) => {
  const { addStars, addReward } = useUserStore();
  const [activeTab, setActiveTab] = useState<'soundboard' | 'quiz'>('soundboard');
  const [selectedVyanjan, setSelectedVyanjan] = useState<HindiVyanjanItem>(HINDI_VYANJAN_LIST[0]);
  const [currentMissionIndex, setCurrentMissionIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [feedbackState, setFeedbackState] = useState<'correct' | 'wrong' | null>(null);

  const scaleAnim = useRef(new Animated.Value(1)).current;
  const bounceAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      soundManager.playPop();
      speakText('नमस्ते प्यारे बच्चों! चलिए क से म तक के सुंदर व्यंजन सीखते हैं!');
    } else {
      stopSpeaking();
    }
  }, [visible]);

  const handleVyanjanTap = (item: HindiVyanjanItem) => {
    triggerHaptic('medium');
    soundManager.playPop();
    setSelectedVyanjan(item);

    // Bouncy animation
    Animated.sequence([
      Animated.timing(scaleAnim, { toValue: 1.15, duration: 120, useNativeDriver: true }),
      Animated.spring(scaleAnim, { toValue: 1, friction: 3, useNativeDriver: true }),
    ]).start();

    speakText(item.speechHi);
  };

  const handleQuizAnswer = (chosenLetter: string) => {
    const currentMission = VYANJAN_QUIZ_MISSIONS[currentMissionIndex];
    if (chosenLetter === currentMission.targetLetter) {
      // Correct!
      triggerHaptic('success');
      soundManager.playFanfare();
      setFeedbackState('correct');
      setQuizScore((prev) => prev + 1);
      addStars(2);
      addReward({ coins: 10 });
      speakText(`शाबाश! बहुत बढ़िया! ${currentMission.targetLetter} से ${currentMission.targetWord}!`);

      setTimeout(() => {
        setFeedbackState(null);
        if (currentMissionIndex + 1 < VYANJAN_QUIZ_MISSIONS.length) {
          setCurrentMissionIndex((prev) => prev + 1);
        } else {
          setQuizCompleted(true);
          soundManager.playFanfare();
        }
      }, 1400);
    } else {
      // Wrong!
      triggerHaptic('warning');
      soundManager.playIncorrect();
      setFeedbackState('wrong');
      speakText('अरे! फिर से कोशिश करो, सही अक्षर पहचानो!');

      setTimeout(() => {
        setFeedbackState(null);
      }, 1000);
    }
  };

  const restartQuiz = () => {
    setCurrentMissionIndex(0);
    setQuizScore(0);
    setQuizCompleted(false);
    setFeedbackState(null);
    soundManager.playPop();
  };

  const currentMission = VYANJAN_QUIZ_MISSIONS[currentMissionIndex];

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.headerLeft}>
              <View style={styles.headerIconCircle}>
                <Text style={{ fontSize: 26 }}>🔤</Text>
              </View>
              <View>
                <Text style={styles.headerTitle}>प्रथम व्यंजन वाटिका (क से म)</Text>
                <Text style={styles.headerSub}>NCERT बाल वाटिका 2 • सचित्र हिंदी वर्णमाला</Text>
              </View>
            </View>
            <TouchableOpacity onPress={onClose} style={styles.closeBtn} activeOpacity={0.7}>
              <Text style={styles.closeBtnText}>✕</Text>
            </TouchableOpacity>
          </View>

          {/* Mode Switch Tabs */}
          <View style={styles.modeTabsRow}>
            <TouchableOpacity
              style={[styles.modeTab, activeTab === 'soundboard' && styles.modeTabActive]}
              onPress={() => {
                triggerHaptic('light');
                setActiveTab('soundboard');
              }}
              activeOpacity={0.8}
            >
              <Text style={[styles.modeTabText, activeTab === 'soundboard' && styles.modeTabTextActive]}>
                🔊 व्यंजन साउंड बोर्ड ({HINDI_VYANJAN_LIST.length})
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.modeTab, activeTab === 'quiz' && styles.modeTabActive]}
              onPress={() => {
                triggerHaptic('light');
                setActiveTab('quiz');
              }}
              activeOpacity={0.8}
            >
              <Text style={[styles.modeTabText, activeTab === 'quiz' && styles.modeTabTextActive]}>
                🎯 अक्षर खोजो क्विज़ (5)
              </Text>
            </TouchableOpacity>
          </View>

          {/* MODE 1: SOUND BOARD */}
          {activeTab === 'soundboard' && (
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
              {/* Big Spotlight Interactive Card */}
              <Animated.View
                style={[
                  styles.spotlightCard,
                  { backgroundColor: selectedVyanjan.color, borderColor: selectedVyanjan.borderColor, transform: [{ scale: scaleAnim }] },
                ]}
              >
                <View style={styles.spotlightTopRow}>
                  <View style={styles.spotlightLetterCircle}>
                    <Text style={styles.spotlightLetterText}>{selectedVyanjan.letter}</Text>
                  </View>
                  <Text style={styles.spotlightEmoji}>{selectedVyanjan.emoji}</Text>
                </View>

                <Text style={styles.spotlightWordText}>
                  {selectedVyanjan.letter} से {selectedVyanjan.exampleWord}
                </Text>
                <Text style={styles.spotlightRhymeText}>
                  💡 {selectedVyanjan.speechHi}
                </Text>

                <View style={styles.speakerRow}>
                  <SpeakerButton
                    textToSpeak={selectedVyanjan.speechHi}
                    size="md"
                    label={`सुनें: ${selectedVyanjan.letter} से ${selectedVyanjan.exampleWord}`}
                  />
                </View>
              </Animated.View>

              {/* Instruction Banner */}
              <View style={styles.instructionBanner}>
                <Text style={styles.instructionText}>
                  👇 किसी भी व्यंजन अक्षर पर टैप करें और बोलकर सीखें!
                </Text>
              </View>

              {/* 15 Vyanjan Grid */}
              <View style={styles.vyanjanGrid}>
                {HINDI_VYANJAN_LIST.map((item) => {
                  const isSelected = selectedVyanjan.letter === item.letter;
                  return (
                    <TouchableOpacity
                      key={item.letter}
                      style={[
                        styles.vyanjanTile,
                        { backgroundColor: item.color, borderColor: item.borderColor },
                        isSelected && styles.vyanjanTileSelected,
                      ]}
                      activeOpacity={0.8}
                      onPress={() => handleVyanjanTap(item)}
                    >
                      <Text style={styles.vyanjanTileLetter}>{item.letter}</Text>
                      <Text style={styles.vyanjanTileEmoji}>{item.emoji}</Text>
                      <Text style={styles.vyanjanTileWord} numberOfLines={1}>
                        {item.exampleWord}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </ScrollView>
          )}

          {/* MODE 2: 5-MISSION LETTER HUNT QUIZ */}
          {activeTab === 'quiz' && (
            <View style={styles.quizWrapper}>
              {!quizCompleted ? (
                <View style={styles.quizCard}>
                  {/* Progress Header */}
                  <View style={styles.quizProgressRow}>
                    <View style={styles.quizBadge}>
                      <Text style={styles.quizBadgeText}>
                        मिशन {currentMissionIndex + 1} / {VYANJAN_QUIZ_MISSIONS.length}
                      </Text>
                    </View>
                    <View style={styles.quizScoreBadge}>
                      <Text style={styles.quizScoreText}>⭐ {quizScore} सही</Text>
                    </View>
                  </View>

                  {/* Question Image & Title */}
                  <View style={styles.quizPromptBox}>
                    <Text style={styles.quizBigEmoji}>{currentMission.targetEmoji}</Text>
                    <Text style={styles.quizQuestionTitle}>{currentMission.questionHi}</Text>
                  </View>

                  <View style={{ alignItems: 'center', marginBottom: 14 }}>
                    <SpeakerButton
                      textToSpeak={currentMission.speechText}
                      size="md"
                      label="प्रश्न सुनें 🔊"
                    />
                  </View>

                  {/* 3 Letter Option Buttons */}
                  <View style={styles.quizOptionsRow}>
                    {currentMission.options.map((letterOpt) => (
                      <TouchableOpacity
                        key={letterOpt}
                        style={styles.quizOptionBtn}
                        activeOpacity={0.8}
                        onPress={() => handleQuizAnswer(letterOpt)}
                      >
                        <Text style={styles.quizOptionLetter}>{letterOpt}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>

                  {/* Feedback Message */}
                  {feedbackState === 'correct' && (
                    <View style={styles.feedbackCorrect}>
                      <Text style={styles.feedbackCorrectText}>🎉 शाबाश! बिल्कुल सही! +2 ⭐</Text>
                    </View>
                  )}
                  {feedbackState === 'wrong' && (
                    <View style={styles.feedbackWrong}>
                      <Text style={styles.feedbackWrongText}>❌ फिर से कोशिश करो!</Text>
                    </View>
                  )}
                </View>
              ) : (
                /* Celebration Completion Card */
                <View style={styles.celebrationCard}>
                  <Text style={{ fontSize: 48, marginBottom: 8 }}>🏆 🌟 👑</Text>
                  <Text style={styles.celebrationTitle}>अद्भुत सुपर किड!</Text>
                  <Text style={styles.celebrationSub}>
                    आपने क से म तक के सभी 5 व्यंजन मिशन पूरे कर लिए हैं!
                  </Text>
                  <View style={styles.rewardBox}>
                    <Text style={styles.rewardText}>⭐ 10 स्टार्स जीते!</Text>
                    <Text style={styles.rewardText}>💰 50 सोने के सिक्के मिले!</Text>
                  </View>
                  <TouchableOpacity style={styles.playAgainBtn} onPress={restartQuiz} activeOpacity={0.85}>
                    <Text style={styles.playAgainText}>फिर से खेलें ↻</Text>
                  </TouchableOpacity>
                </View>
              )}
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
    backgroundColor: 'rgba(15, 23, 42, 0.75)',
    justifyContent: 'flex-end',
  },
  container: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    maxHeight: '92%',
    minHeight: '85%',
    paddingBottom: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
    borderBottomWidth: 1.5,
    borderBottomColor: '#F1F5F9',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  headerIconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#EFF6FF',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: '#BFDBFE',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '900',
    color: '#1E293B',
  },
  headerSub: {
    fontSize: 11,
    color: '#64748B',
    fontWeight: '600',
    marginTop: 2,
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
    fontWeight: '900',
    color: '#64748B',
  },
  modeTabsRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 10,
    gap: 8,
    backgroundColor: '#F8FAFC',
  },
  modeTab: {
    flex: 1,
    paddingVertical: 9,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    alignItems: 'center',
  },
  modeTabActive: {
    backgroundColor: '#2563EB',
    borderColor: '#1D4ED8',
  },
  modeTabText: {
    fontSize: 12,
    fontWeight: '800',
    color: '#64748B',
  },
  modeTabTextActive: {
    color: '#FFFFFF',
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 24,
  },
  spotlightCard: {
    borderRadius: 20,
    borderWidth: 2,
    padding: 16,
    alignItems: 'center',
    marginBottom: 12,
    ...SHADOWS.small,
  },
  spotlightTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginBottom: 8,
  },
  spotlightLetterCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    ...SHADOWS.small,
  },
  spotlightLetterText: {
    fontSize: 34,
    fontWeight: '900',
    color: '#1E293B',
  },
  spotlightEmoji: {
    fontSize: 44,
  },
  spotlightWordText: {
    fontSize: 22,
    fontWeight: '900',
    color: '#0F172A',
    marginBottom: 4,
  },
  spotlightRhymeText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#475569',
    textAlign: 'center',
    lineHeight: 18,
    marginBottom: 12,
  },
  speakerRow: {
    marginTop: 2,
  },
  instructionBanner: {
    backgroundColor: '#F1F5F9',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: 'center',
  },
  instructionText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#475569',
  },
  vyanjanGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    justifyContent: 'space-between',
  },
  vyanjanTile: {
    width: '31%',
    borderRadius: 16,
    borderWidth: 2,
    paddingVertical: 12,
    alignItems: 'center',
    ...SHADOWS.small,
  },
  vyanjanTileSelected: {
    transform: [{ scale: 1.04 }],
    borderColor: '#2563EB',
    borderWidth: 2.5,
  },
  vyanjanTileLetter: {
    fontSize: 26,
    fontWeight: '900',
    color: '#0F172A',
    marginBottom: 2,
  },
  vyanjanTileEmoji: {
    fontSize: 24,
    marginBottom: 2,
  },
  vyanjanTileWord: {
    fontSize: 11,
    fontWeight: '800',
    color: '#334155',
  },
  quizWrapper: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  quizCard: {
    backgroundColor: '#F8FAFC',
    borderRadius: 22,
    padding: 16,
    borderWidth: 2,
    borderColor: '#E2E8F0',
    ...SHADOWS.small,
  },
  quizProgressRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  quizBadge: {
    backgroundColor: '#DBEAFE',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },
  quizBadgeText: {
    fontSize: 11,
    fontWeight: '800',
    color: '#1E40AF',
  },
  quizScoreBadge: {
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },
  quizScoreText: {
    fontSize: 11,
    fontWeight: '800',
    color: '#B45309',
  },
  quizPromptBox: {
    alignItems: 'center',
    marginBottom: 12,
  },
  quizBigEmoji: {
    fontSize: 56,
    marginBottom: 8,
  },
  quizQuestionTitle: {
    fontSize: 18,
    fontWeight: '900',
    color: '#1E293B',
    textAlign: 'center',
    lineHeight: 24,
  },
  quizOptionsRow: {
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'center',
    marginBottom: 14,
  },
  quizOptionBtn: {
    width: 80,
    height: 80,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 2.5,
    borderColor: '#93C5FD',
    alignItems: 'center',
    justifyContent: 'center',
    ...SHADOWS.medium,
  },
  quizOptionLetter: {
    fontSize: 36,
    fontWeight: '900',
    color: '#1E40AF',
  },
  feedbackCorrect: {
    backgroundColor: '#DCFCE7',
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#86EFAC',
  },
  feedbackCorrectText: {
    fontSize: 14,
    fontWeight: '900',
    color: '#15803D',
  },
  feedbackWrong: {
    backgroundColor: '#FEE2E2',
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#FCA5A5',
  },
  feedbackWrongText: {
    fontSize: 14,
    fontWeight: '900',
    color: '#B91C1C',
  },
  celebrationCard: {
    backgroundColor: '#ECFDF5',
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#A7F3D0',
    padding: 24,
    alignItems: 'center',
  },
  celebrationTitle: {
    fontSize: 22,
    fontWeight: '900',
    color: '#065F46',
    marginBottom: 6,
  },
  celebrationSub: {
    fontSize: 13,
    fontWeight: '600',
    color: '#047857',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 18,
  },
  rewardBox: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: '#A7F3D0',
    marginBottom: 20,
    alignItems: 'center',
    gap: 4,
  },
  rewardText: {
    fontSize: 14,
    fontWeight: '800',
    color: '#065F46',
  },
  playAgainBtn: {
    backgroundColor: '#10B981',
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 16,
    ...SHADOWS.small,
  },
  playAgainText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '900',
  },
});
