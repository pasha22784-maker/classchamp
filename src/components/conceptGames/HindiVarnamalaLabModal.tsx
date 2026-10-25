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

interface HindiVarnamalaLabModalProps {
  visible: boolean;
  onClose: () => void;
  activeLang?: string;
}

interface HindiSwarItem {
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

const HINDI_SWAR_LIST: HindiSwarItem[] = [
  {
    letter: 'अ',
    name: 'अ',
    exampleWord: 'अनार',
    exampleWordEn: 'Pomegranate',
    emoji: '🍎',
    color: '#FEE2E2',
    borderColor: '#FCA5A5',
    speechHi: 'अ से अनार! लाल-लाल दानों वाला अनार!',
    speechEn: 'A for Anar! Juicy red pomegranate!',
  },
  {
    letter: 'आ',
    name: 'आ',
    exampleWord: 'आम',
    exampleWordEn: 'Mango',
    emoji: '🥭',
    color: '#FEF3C7',
    borderColor: '#FCD34D',
    speechHi: 'आ से आम! मीठा-रसीला फलों का राजा आम!',
    speechEn: 'Aa for Aam! Sweet delicious Mango!',
  },
  {
    letter: 'इ',
    name: 'इ',
    exampleWord: 'इमली',
    exampleWordEn: 'Tamarind',
    emoji: '🫒',
    color: '#DCFCE7',
    borderColor: '#86EFAC',
    speechHi: 'इ से इमली! खट्टी-मीठी चटपटी इमली!',
    speechEn: 'I for Imli! Tangy tasty tamarind!',
  },
  {
    letter: 'ई',
    name: 'ई',
    exampleWord: 'ईख',
    exampleWordEn: 'Sugarcane',
    emoji: '🎋',
    color: '#E0F2FE',
    borderColor: '#7DD3FC',
    speechHi: 'ई से ईख! मीठा रसदार गन्ना व ईख!',
    speechEn: 'Ee for Eekh! Sweet sugarcane!',
  },
  {
    letter: 'उ',
    name: 'उ',
    exampleWord: 'उल्लू',
    exampleWordEn: 'Owl',
    emoji: '🦉',
    color: '#F3E8FF',
    borderColor: '#D8B4FE',
    speechHi: 'उ से उल्लू! रात में जागे बड़ा समझदार उल्लू!',
    speechEn: 'U for Ullu! Wise night owl!',
  },
  {
    letter: 'ऊ',
    name: 'ऊ',
    exampleWord: 'ऊन',
    exampleWordEn: 'Wool',
    emoji: '🧶',
    color: '#FFEDD5',
    borderColor: '#FDBA74',
    speechHi: 'ऊ से ऊन! सर्दी में गर्म स्वेटर बुने ऊन!',
    speechEn: 'Oo for Oon! Warm wool for winter!',
  },
  {
    letter: 'ऋ',
    name: 'ऋ',
    exampleWord: 'ऋषि',
    exampleWordEn: 'Sage',
    emoji: '🧘',
    color: '#FEF9C3',
    borderColor: '#FDE047',
    speechHi: 'ऋ से ऋषि! ज्ञान और ध्यान सिखाने वाले ऋषि!',
    speechEn: 'Ri for Rishi! Wise meditating sage!',
  },
  {
    letter: 'ए',
    name: 'ए',
    exampleWord: 'एड़ी',
    exampleWordEn: 'Heel',
    emoji: '🦶',
    color: '#F1F5F9',
    borderColor: '#CBD5E1',
    speechHi: 'ए से एड़ी! पैर की मजबूत एड़ी!',
    speechEn: 'E for Edi! Strong foot heel!',
  },
  {
    letter: 'ऐ',
    name: 'ऐ',
    exampleWord: 'ऐनक',
    exampleWordEn: 'Spectacles',
    emoji: '👓',
    color: '#E0E7FF',
    borderColor: '#A5B4FC',
    speechHi: 'ऐ से ऐनक! साफ दिखाए दादी जी की ऐनक!',
    speechEn: 'Ai for Ainak! Clear shiny spectacles!',
  },
  {
    letter: 'ओ',
    name: 'ओ',
    exampleWord: 'ओखली',
    exampleWordEn: 'Mortar',
    emoji: '🥣',
    color: '#FDF2F8',
    borderColor: '#FBCFE8',
    speechHi: 'ओ से ओखली! धान और मसाले कूटे ओखली!',
    speechEn: 'O for Okhli! Wooden mortar bowl!',
  },
  {
    letter: 'औ',
    name: 'औ',
    exampleWord: 'औरत',
    exampleWordEn: 'Mother/Woman',
    emoji: '👩',
    color: '#FFE4E6',
    borderColor: '#FDA4AF',
    speechHi: 'औ से औरत! ममता की मूरत प्यारी औरत!',
    speechEn: 'Au for Aurat! Caring loving mother!',
  },
  {
    letter: 'अं',
    name: 'अं',
    exampleWord: 'अंगूर',
    exampleWordEn: 'Grapes',
    emoji: '🍇',
    color: '#EDE9FE',
    borderColor: '#C4B5FD',
    speechHi: 'अं से अंगूर! मीठे-मीठे गुच्छेदार अंगूर!',
    speechEn: 'Ang for Angoor! Juicy purple grapes!',
  },
  {
    letter: 'अः',
    name: 'अः',
    exampleWord: 'खाली (ताली)',
    exampleWordEn: 'Empty / Clap',
    emoji: '👏',
    color: '#FEF08A',
    borderColor: '#FACC15',
    speechHi: 'अः से खाली! बच्चों बजाओ जोर से ताली!',
    speechEn: 'Aha for Taali! Everyone clap your hands!',
  },
];

interface QuizMission {
  questionHi: string;
  questionEn: string;
  speechHi: string;
  speechEn: string;
  targetLetter: string;
  options: {
    letter: string;
    word: string;
    emoji: string;
    isCorrect: boolean;
  }[];
}

const HINDI_QUIZ_MISSIONS: QuizMission[] = [
  {
    questionHi: 'अनार 🍎 किस स्वर से शुरू होता है?',
    questionEn: 'Which swar begins Anar 🍎?',
    speechHi: 'अनार के लिए सही स्वर चुनें!',
    speechEn: 'Find the letter for Anar pomegranate!',
    targetLetter: 'अ',
    options: [
      { letter: 'अ', word: 'अनार 🍎', emoji: '🍎', isCorrect: true },
      { letter: 'आ', word: 'आम 🥭', emoji: '🥭', isCorrect: false },
      { letter: 'इ', word: 'इमली 🫒', emoji: '🫒', isCorrect: false },
    ],
  },
  {
    questionHi: 'फलों का राजा मीठा आम 🥭 किस स्वर से शुरू होता है?',
    questionEn: 'Which letter starts sweet Mango 🥭?',
    speechHi: 'मीठे आम के लिए सही स्वर खोजें!',
    speechEn: 'Find the letter for sweet Mango!',
    targetLetter: 'आ',
    options: [
      { letter: 'ई', word: 'ईख 🎋', emoji: '🎋', isCorrect: false },
      { letter: 'आ', word: 'आम 🥭', emoji: '🥭', isCorrect: true },
      { letter: 'उ', word: 'उल्लू 🦉', emoji: '🦉', isCorrect: false },
    ],
  },
  {
    questionHi: 'खट्टी-मीठी इमली 🫒 का पहला स्वर कौन सा है?',
    questionEn: 'What is the starting swar of Imli 🫒?',
    speechHi: 'इमली का पहला स्वर पहचानें!',
    speechEn: 'Identify the first letter of Imli!',
    targetLetter: 'इ',
    options: [
      { letter: 'अ', word: 'अनार 🍎', emoji: '🍎', isCorrect: false },
      { letter: 'इ', word: 'इमली 🫒', emoji: '🫒', isCorrect: true },
      { letter: 'ऊ', word: 'ऊन 🧶', emoji: '🧶', isCorrect: false },
    ],
  },
  {
    questionHi: 'रात में जागने वाला बुद्धिमान उल्लू 🦉 किस स्वर से है?',
    questionEn: 'Which letter begins Ullu the owl 🦉?',
    speechHi: 'उल्लू के लिए सही स्वर चुनें!',
    speechEn: 'Find the letter for Ullu the owl!',
    targetLetter: 'उ',
    options: [
      { letter: 'उ', word: 'उल्लू 🦉', emoji: '🦉', isCorrect: true },
      { letter: 'ओ', word: 'ओखली 🥣', emoji: '🥣', isCorrect: false },
      { letter: 'ए', word: 'एड़ी 🦶', emoji: '🦶', isCorrect: false },
    ],
  },
  {
    questionHi: 'रसीले मीठे अंगूर 🍇 किस स्वर से शुरू होते हैं?',
    questionEn: 'Which swar begins sweet Grapes 🍇?',
    speechHi: 'अंगूर के लिए सही स्वर पर टैप करें!',
    speechEn: 'Tap the letter for sweet Grapes!',
    targetLetter: 'अं',
    options: [
      { letter: 'औ', word: 'औरत 👩', emoji: '👩', isCorrect: false },
      { letter: 'अं', word: 'अंगूर 🍇', emoji: '🍇', isCorrect: true },
      { letter: 'आ', word: 'आम 🥭', emoji: '🥭', isCorrect: false },
    ],
  },
];

export const HindiVarnamalaLabModal: React.FC<HindiVarnamalaLabModalProps> = ({
  visible,
  onClose,
  activeLang = 'hi',
}) => {
  const { addStars, addReward, updateCognitiveScore } = useUserStore();
  const isHindi = activeLang === 'hi';

  const [activeTab, setActiveTab] = useState<'board' | 'quiz'>('board');
  const [selectedLetter, setSelectedLetter] = useState<HindiSwarItem>(HINDI_SWAR_LIST[0]);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizFeedback, setQuizFeedback] = useState<string | null>(null);
  const [starsEarned, setStarsEarned] = useState(0);
  const [isQuizComplete, setIsQuizComplete] = useState(false);

  const bounceAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (visible) {
      stopSpeaking();
      const welcomeSpeech = isHindi
        ? 'सुपर किड हिंदी स्वर व वर्णमाला लैब में आपका स्वागत है! किसी भी स्वर पर टैप करके आवाज़ सुनें!'
        : 'Welcome to Hindi Swar Lab! Tap any swar to hear its sound!';
      speakText(welcomeSpeech);
    } else {
      stopSpeaking();
    }
  }, [visible]);

  const handleSelectLetter = (item: HindiSwarItem) => {
    setSelectedLetter(item);
    soundManager.playPop();
    triggerHaptic('light');

    Animated.sequence([
      Animated.timing(bounceAnim, { toValue: 1.15, duration: 120, useNativeDriver: true }),
      Animated.timing(bounceAnim, { toValue: 1.0, duration: 120, useNativeDriver: true }),
    ]).start();

    const speech = isHindi ? item.speechHi : item.speechEn;
    speakText(speech);
  };

  const handleQuizAnswer = async (isCorrect: boolean, letter: string) => {
    if (quizFeedback) return;

    if (isCorrect) {
      soundManager.playCorrect();
      triggerHaptic('success');
      setQuizFeedback(isHindi ? `शाबाश! स्वर '${letter}' एकदम सही है! 🎉` : `Awesome! Swar '${letter}' is correct! 🎉`);
      const newStars = starsEarned + 1;
      setStarsEarned(newStars);

      setTimeout(async () => {
        setQuizFeedback(null);
        if (quizIndex + 1 < HINDI_QUIZ_MISSIONS.length) {
          const nextIdx = quizIndex + 1;
          setQuizIndex(nextIdx);
          const nextQ = HINDI_QUIZ_MISSIONS[nextIdx];
          speakText(isHindi ? nextQ.speechHi : nextQ.speechEn);
        } else {
          setIsQuizComplete(true);
          soundManager.playFanfare();
          await addStars(5);
          await addReward({ stars: 5, coins: 50, xp: 60, streakShields: 1 });
          await updateCognitiveScore('memorySpeedScore', 10);
        }
      }, 1200);
    } else {
      soundManager.playIncorrect();
      triggerHaptic('warning');
      setQuizFeedback(isHindi ? `यह स्वर '${letter}' है। फिर से ध्यान से सुनें!` : `That is swar '${letter}'. Listen carefully again!`);
      setTimeout(() => {
        setQuizFeedback(null);
      }, 1400);
    }
  };

  const restartQuiz = () => {
    setQuizIndex(0);
    setStarsEarned(0);
    setIsQuizComplete(false);
    setQuizFeedback(null);
    const firstQ = HINDI_QUIZ_MISSIONS[0];
    speakText(isHindi ? firstQ.speechHi : firstQ.speechEn);
  };

  const currentMission = HINDI_QUIZ_MISSIONS[quizIndex % HINDI_QUIZ_MISSIONS.length];

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalCard}>
          {/* Header */}
          <View style={styles.headerRow}>
            <View style={styles.headerLeft}>
              <View style={styles.iconCircle}>
                <Text style={{ fontSize: 24 }}>🇮🇳</Text>
              </View>
              <View>
                <Text style={styles.headerTitle}>
                  {isHindi ? 'स्वर व वर्णमाला लैब' : 'Hindi Swar & Phonics Lab'}
                </Text>
                <Text style={styles.headerSub}>
                  {isHindi ? 'अ से अः तक स्वर • बालवाटिका 2' : 'Swar A to Aha • Balvatika 2'}
                </Text>
              </View>
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

          {/* Mode Switcher Tabs */}
          <View style={styles.tabsBar}>
            <TouchableOpacity
              style={[styles.tabBtn, activeTab === 'board' && styles.tabBtnActive]}
              activeOpacity={0.8}
              onPress={() => {
                triggerHaptic('light');
                setActiveTab('board');
              }}
            >
              <Text style={[styles.tabBtnText, activeTab === 'board' && styles.tabBtnTextActive]}>
                {isHindi ? '🔊 स्वर साउंड बोर्ड' : '🔊 Swar Sound Board'}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.tabBtn, activeTab === 'quiz' && styles.tabBtnActive]}
              activeOpacity={0.8}
              onPress={() => {
                triggerHaptic('light');
                setActiveTab('quiz');
                const q = HINDI_QUIZ_MISSIONS[quizIndex];
                speakText(isHindi ? q.speechHi : q.speechEn);
              }}
            >
              <Text style={[styles.tabBtnText, activeTab === 'quiz' && styles.tabBtnTextActive]}>
                {isHindi ? '🎯 स्वर क्विज़ (5 मिशन)' : '🎯 Swar Quiz (5 Missions)'}
              </Text>
            </TouchableOpacity>
          </View>

          {/* ======================================================== */}
          {/* TAB 1: SWAR SOUND BOARD                                  */}
          {/* ======================================================== */}
          {activeTab === 'board' && (
            <ScrollView
              style={styles.scrollArea}
              contentContainerStyle={styles.scrollContent}
              showsVerticalScrollIndicator={false}
            >
              {/* Active Selected Swar Showcase Card */}
              <Animated.View
                style={[
                  styles.activeShowcaseCard,
                  { backgroundColor: selectedLetter.color, borderColor: selectedLetter.borderColor, transform: [{ scale: bounceAnim }] },
                ]}
              >
                <View style={styles.showcaseTopRow}>
                  <View style={styles.letterBigBadge}>
                    <Text style={styles.letterBigText}>{selectedLetter.letter}</Text>
                  </View>
                  <View style={styles.showcaseDetailCol}>
                    <Text style={styles.showcaseWordTitle}>{selectedLetter.exampleWord}</Text>
                    <Text style={styles.showcaseWordSub}>{selectedLetter.exampleWordEn}</Text>
                    <Text style={styles.showcaseRhyme}>{selectedLetter.speechHi}</Text>
                  </View>
                  <Text style={styles.showcaseEmoji}>{selectedLetter.emoji}</Text>
                </View>

                <View style={styles.showcaseActionRow}>
                  <SpeakerButton
                    textToSpeak={isHindi ? selectedLetter.speechHi : selectedLetter.speechEn}
                    size="md"
                    showLabel
                    activeLang={activeLang as any}
                  />
                  <Text style={styles.tapToHearHint}>
                    {isHindi ? '👆 आवाज़ सुनने के लिए टैप करें' : '👆 Tap to hear pronunciation'}
                  </Text>
                </View>
              </Animated.View>

              {/* Swar Grid (अ से अः) */}
              <Text style={styles.sectionHeader}>
                {isHindi ? 'स्वर चुनें (टैप करें):' : 'Choose a Swar (Tap to explore):'}
              </Text>

              <View style={styles.lettersGrid}>
                {HINDI_SWAR_LIST.map((item) => {
                  const isSelected = selectedLetter.letter === item.letter;
                  return (
                    <TouchableOpacity
                      key={item.letter}
                      style={[
                        styles.letterTile,
                        { backgroundColor: item.color, borderColor: item.borderColor },
                        isSelected && styles.letterTileSelected,
                      ]}
                      activeOpacity={0.8}
                      onPress={() => handleSelectLetter(item)}
                    >
                      <Text style={styles.tileEmoji}>{item.emoji}</Text>
                      <Text style={styles.tileLetter}>{item.letter}</Text>
                      <Text style={styles.tileWord} numberOfLines={1}>
                        {item.exampleWord}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </ScrollView>
          )}

          {/* ======================================================== */}
          {/* TAB 2: SWAR QUIZ MODE                                    */}
          {/* ======================================================== */}
          {activeTab === 'quiz' && (
            <View style={styles.quizWrapper}>
              {!isQuizComplete ? (
                <View style={styles.quizInner}>
                  {/* Mission Progress */}
                  <View style={styles.quizProgressRow}>
                    <View style={styles.missionPill}>
                      <Text style={styles.missionPillText}>
                        {isHindi ? `मिशन ${quizIndex + 1} / 5` : `Mission ${quizIndex + 1} of 5`}
                      </Text>
                    </View>
                    <View style={styles.starsPill}>
                      <Text style={styles.starsPillText}>⭐ {starsEarned} / 5</Text>
                    </View>
                  </View>

                  {/* Question Banner */}
                  <View style={styles.quizPromptCard}>
                    <View style={styles.promptSpeakerRow}>
                      <Text style={styles.promptHeadline}>
                        {isHindi ? currentMission.questionHi : currentMission.questionEn}
                      </Text>
                      <SpeakerButton
                        textToSpeak={isHindi ? currentMission.speechHi : currentMission.speechEn}
                        size="sm"
                        activeLang={activeLang as any}
                      />
                    </View>

                    {quizFeedback && (
                      <View style={styles.feedbackToast}>
                        <Text style={styles.feedbackToastText}>{quizFeedback}</Text>
                      </View>
                    )}
                  </View>

                  {/* 3 Interactive Swar Options */}
                  <View style={styles.optionsGrid}>
                    {currentMission.options.map((opt) => (
                      <TouchableOpacity
                        key={opt.letter}
                        style={styles.quizOptionCard}
                        activeOpacity={0.82}
                        onPress={() => handleQuizAnswer(opt.isCorrect, opt.letter)}
                      >
                        <Text style={styles.optionEmoji}>{opt.emoji}</Text>
                        <Text style={styles.optionLetter}>{opt.letter}</Text>
                        <Text style={styles.optionWord}>{opt.word}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>
              ) : (
                /* Celebration Completion */
                <View style={styles.quizCompleteBox}>
                  <Text style={{ fontSize: 60 }}>🏆</Text>
                  <Text style={styles.quizCompleteTitle}>
                    {isHindi ? 'शानदार! आपने सभी स्वर सीख लिए!' : 'Awesome! Swar Mastered!'}
                  </Text>
                  <Text style={styles.quizCompleteSub}>
                    {isHindi
                      ? 'आपने 5 स्टार्स और 50 गोल्डन सिक्के 💰 जीते!'
                      : 'You won 5 Stars & 50 Golden Coins!'}
                  </Text>
                  <TouchableOpacity
                    style={styles.restartBtn}
                    activeOpacity={0.88}
                    onPress={restartQuiz}
                  >
                    <Text style={styles.restartBtnText}>
                      {isHindi ? 'फिर से खेलें ↻' : 'Play Again ↻'}
                    </Text>
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
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(15, 23, 42, 0.75)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING.md,
  },
  modalCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: BORDER_RADIUS.xl,
    width: '100%',
    maxWidth: 540,
    maxHeight: '92%',
    padding: SPACING.md,
    ...SHADOWS.large,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
    paddingBottom: SPACING.sm,
    marginBottom: SPACING.sm,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    flex: 1,
  },
  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#DCFCE7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '900',
    color: '#1E293B',
  },
  headerSub: {
    fontSize: 12,
    color: '#059669',
    fontWeight: '700',
  },
  closeBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#F1F5F9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeBtnText: {
    fontSize: 16,
    fontWeight: '900',
    color: '#64748B',
  },
  tabsBar: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: SPACING.sm,
  },
  tabBtn: {
    flex: 1,
    paddingVertical: 9,
    borderRadius: BORDER_RADIUS.md,
    backgroundColor: '#F8FAFC',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  tabBtnActive: {
    backgroundColor: '#059669',
    borderColor: '#047857',
  },
  tabBtnText: {
    fontSize: 12,
    fontWeight: '800',
    color: '#64748B',
  },
  tabBtnTextActive: {
    color: '#FFFFFF',
  },
  scrollArea: {
    flexGrow: 1,
  },
  scrollContent: {
    paddingBottom: SPACING.md,
  },
  activeShowcaseCard: {
    borderRadius: BORDER_RADIUS.lg,
    borderWidth: 2,
    padding: SPACING.md,
    marginBottom: SPACING.md,
  },
  showcaseTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 8,
  },
  letterBigBadge: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    ...SHADOWS.small,
  },
  letterBigText: {
    fontSize: 34,
    fontWeight: '900',
    color: '#059669',
  },
  showcaseDetailCol: {
    flex: 1,
  },
  showcaseWordTitle: {
    fontSize: 20,
    fontWeight: '900',
    color: '#1E293B',
  },
  showcaseWordSub: {
    fontSize: 12,
    fontWeight: '700',
    color: '#64748B',
  },
  showcaseRhyme: {
    fontSize: 12,
    color: '#047857',
    fontWeight: '700',
    marginTop: 2,
  },
  showcaseEmoji: {
    fontSize: 36,
  },
  showcaseActionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.06)',
  },
  tapToHearHint: {
    fontSize: 11,
    fontWeight: '700',
    color: '#64748B',
  },
  sectionHeader: {
    fontSize: 13,
    fontWeight: '900',
    color: '#334155',
    marginBottom: 8,
  },
  lettersGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  letterTile: {
    width: '31%',
    flexGrow: 1,
    borderRadius: BORDER_RADIUS.md,
    borderWidth: 1.5,
    paddingVertical: 10,
    alignItems: 'center',
  },
  letterTileSelected: {
    borderWidth: 2.5,
    borderColor: '#059669',
    transform: [{ scale: 1.04 }],
    ...SHADOWS.small,
  },
  tileEmoji: {
    fontSize: 24,
    marginBottom: 2,
  },
  tileLetter: {
    fontSize: 22,
    fontWeight: '900',
    color: '#1E293B',
  },
  tileWord: {
    fontSize: 11,
    fontWeight: '700',
    color: '#475569',
  },
  quizWrapper: {
    paddingVertical: SPACING.xs,
  },
  quizInner: {
    gap: 12,
  },
  quizProgressRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  missionPill: {
    backgroundColor: '#ECFDF5',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  missionPillText: {
    fontSize: 11,
    fontWeight: '800',
    color: '#059669',
  },
  starsPill: {
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  starsPillText: {
    fontSize: 11,
    fontWeight: '800',
    color: '#D97706',
  },
  quizPromptCard: {
    backgroundColor: '#F8FAFC',
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.md,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  promptSpeakerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  promptHeadline: {
    fontSize: 16,
    fontWeight: '800',
    color: '#1E293B',
    flex: 1,
  },
  feedbackToast: {
    marginTop: 8,
    backgroundColor: '#FEF08A',
    borderRadius: 8,
    padding: 6,
    alignItems: 'center',
  },
  feedbackToastText: {
    fontSize: 12,
    fontWeight: '800',
    color: '#854D0E',
  },
  optionsGrid: {
    gap: 10,
  },
  quizOptionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    borderRadius: BORDER_RADIUS.md,
    paddingVertical: 12,
    paddingHorizontal: 16,
    gap: 14,
    ...SHADOWS.small,
  },
  optionEmoji: {
    fontSize: 28,
  },
  optionLetter: {
    fontSize: 24,
    fontWeight: '900',
    color: '#059669',
    width: 36,
  },
  optionWord: {
    fontSize: 15,
    fontWeight: '800',
    color: '#1E293B',
    flex: 1,
  },
  quizCompleteBox: {
    alignItems: 'center',
    paddingVertical: SPACING.xl,
    gap: 8,
  },
  quizCompleteTitle: {
    fontSize: 18,
    fontWeight: '900',
    color: '#1E293B',
    textAlign: 'center',
  },
  quizCompleteSub: {
    fontSize: 13,
    fontWeight: '700',
    color: '#059669',
    textAlign: 'center',
  },
  restartBtn: {
    marginTop: 12,
    backgroundColor: '#059669',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: BORDER_RADIUS.full,
    ...SHADOWS.small,
  },
  restartBtnText: {
    fontSize: 14,
    fontWeight: '900',
    color: '#FFFFFF',
  },
});
