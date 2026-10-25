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

interface HindiPashuPakshiLabModalProps {
  visible: boolean;
  onClose: () => void;
  activeLang?: string;
}

interface PashuPakshiItem {
  id: string;
  name: string;
  nameEn: string;
  soundText: string;
  emoji: string;
  rhyme: string;
  color: string;
  borderColor: string;
  speechText: string;
}

const PASHU_PAKSHI_LIST: PashuPakshiItem[] = [
  {
    id: 'cat',
    name: 'बिल्ली',
    nameEn: 'Cat',
    soundText: 'म्याऊं-म्याऊं!',
    emoji: '🐱',
    rhyme: 'दूध मलाई खाती बिल्ली, म्याऊं-म्याऊं गाती बिल्ली!',
    color: '#FEF3C7',
    borderColor: '#FCD34D',
    speechText: 'बिल्ली बोली: म्याऊं-म्याऊं! दूध मलाई खाती बिल्ली!',
  },
  {
    id: 'dog',
    name: 'कुत्ता',
    nameEn: 'Dog',
    soundText: 'भौं-भौं!',
    emoji: '🐕',
    rhyme: 'घर का सच्चा पहरेदार, भौं-भौं करके भगाए चोर!',
    color: '#EFF6FF',
    borderColor: '#93C5FD',
    speechText: 'कुत्ता बोला: भौं-भौं! वफादार पहरेदार कुत्ता!',
  },
  {
    id: 'bird',
    name: 'चिड़िया',
    nameEn: 'Sparrow',
    soundText: 'चीं-चीं!',
    emoji: '🐦',
    rhyme: 'फुर्र-फुर्र उड़ती नन्ही चिड़िया, चीं-चीं गाती प्यारी चिड़िया!',
    color: '#DCFCE7',
    borderColor: '#86EFAC',
    speechText: 'चिड़िया बोली: चीं-चीं! पेड़ पर गाना गाती नन्ही चिड़िया!',
  },
  {
    id: 'cow',
    name: 'गाय',
    nameEn: 'Cow',
    soundText: 'अंबा-अंबा!',
    emoji: '🐄',
    rhyme: 'मीठा-मीठा दूध है देती, हरी-हरी घास है खाती!',
    color: '#FDF4FF',
    borderColor: '#F5D0FE',
    speechText: 'गौ माता बोली: अंबा-अंबा! मीठा दूध देने वाली प्यारी गाय!',
  },
  {
    id: 'frog',
    name: 'मेंढक',
    nameEn: 'Frog',
    soundText: 'टर्र-टर्र!',
    emoji: '🐸',
    rhyme: 'बरसात में पानी में कूदे, टर्र-टर्र गाता मेंढक!',
    color: '#ECFDF5',
    borderColor: '#6EE7B7',
    speechText: 'मेंढक बोला: टर्र-टर्र! फुदक-फुदक कर चलने वाला मेंढक!',
  },
  {
    id: 'crow',
    name: 'कौआ',
    nameEn: 'Crow',
    soundText: 'काँव-काँव!',
    emoji: '🐦‍⬛',
    rhyme: 'काले पंखों वाला कौआ, सुबह-सवेरे बोले काँव-काँव!',
    color: '#F1F5F9',
    borderColor: '#CBD5E1',
    speechText: 'कौआ बोला: काँव-काँव! मुंडेर पर बैठा चतुर कौआ!',
  },
  {
    id: 'duck',
    name: 'बतख',
    nameEn: 'Duck',
    soundText: 'क्वैक-क्वैक!',
    emoji: '🦆',
    rhyme: 'जल में तैरती प्यारी बतख, क्वैक-क्वैक करती खुश बतख!',
    color: '#FEF9C3',
    borderColor: '#FACC15',
    speechText: 'बतख बोली: क्वैक-क्वैक! तालाब में तैरती नन्ही बतख!',
  },
  {
    id: 'lion',
    name: 'शेर',
    nameEn: 'Lion',
    soundText: 'दहाड़ (गर्र-गर्र)!',
    emoji: '🦁',
    rhyme: 'जंगल का राजा है शेर, बड़ी शान से करे दहाड़!',
    color: '#FFF7ED',
    borderColor: '#FDBA74',
    speechText: 'शेर राजा की दहाड़! जंगल का राजा ताकतवर शेर!',
  },
];

interface SoundMission {
  soundPrompt: string;
  targetId: string;
  targetName: string;
  targetEmoji: string;
  speechText: string;
  options: { id: string; name: string; emoji: string }[];
}

const SOUND_MISSIONS: SoundMission[] = [
  {
    soundPrompt: '🐱 "म्याऊं-म्याऊं" किसकी प्यारी बोली है?',
    targetId: 'cat',
    targetName: 'बिल्ली',
    targetEmoji: '🐱',
    speechText: 'म्याऊं-म्याऊं कौन बोलता है? बिल्ली, कुत्ता या चिड़िया?',
    options: [
      { id: 'cat', name: 'बिल्ली', emoji: '🐱' },
      { id: 'dog', name: 'कुत्ता', emoji: '🐕' },
      { id: 'cow', name: 'गाय', emoji: '🐄' },
    ],
  },
  {
    soundPrompt: '🐕 "भौं-भौं" करके पहरेदारी कौन करता है?',
    targetId: 'dog',
    targetName: 'कुत्ता',
    targetEmoji: '🐕',
    speechText: 'भौं-भौं कौन बोलता है? सही जानवर पहचानो!',
    options: [
      { id: 'frog', name: 'मेंढक', emoji: '🐸' },
      { id: 'dog', name: 'कुत्ता', emoji: '🐕' },
      { id: 'bird', name: 'चिड़िया', emoji: '🐦' },
    ],
  },
  {
    soundPrompt: '🐦 डाल पर बैठकर "चीं-चीं" कौन गाती है?',
    targetId: 'bird',
    targetName: 'चिड़िया',
    targetEmoji: '🐦',
    speechText: 'चीं-चीं कौन गाती है? सही पक्षी पहचानो!',
    options: [
      { id: 'cow', name: 'गाय', emoji: '🐄' },
      { id: 'duck', name: 'बतख', emoji: '🦆' },
      { id: 'bird', name: 'चिड़िया', emoji: '🐦' },
    ],
  },
  {
    soundPrompt: '🐄 "अंबा-अंबा" बोलकर मीठा दूध कौन देती है?',
    targetId: 'cow',
    targetName: 'गाय',
    targetEmoji: '🐄',
    speechText: 'अंबा-अंबा बोलकर मीठा दूध कौन देती है? सही सहेली चुनो!',
    options: [
      { id: 'cow', name: 'गाय', emoji: '🐄' },
      { id: 'lion', name: 'शेर', emoji: '🦁' },
      { id: 'cat', name: 'बिल्ली', emoji: '🐱' },
    ],
  },
  {
    soundPrompt: '🐸 बारिश के मौसम में "टर्र-टर्र" कौन करता है?',
    targetId: 'frog',
    targetName: 'मेंढक',
    targetEmoji: '🐸',
    speechText: 'पानी में टर्र-टर्र कौन करता है? सही जीव पहचानो!',
    options: [
      { id: 'crow', name: 'कौआ', emoji: '🐦‍⬛' },
      { id: 'frog', name: 'मेंढक', emoji: '🐸' },
      { id: 'dog', name: 'कुत्ता', emoji: '🐕' },
    ],
  },
];

export const HindiPashuPakshiLabModal: React.FC<HindiPashuPakshiLabModalProps> = ({
  visible,
  onClose,
  activeLang = 'hi',
}) => {
  const { addStars, addReward } = useUserStore();
  const [activeTab, setActiveTab] = useState<'sounds' | 'safari'>('sounds');
  const [selectedAnimal, setSelectedAnimal] = useState<PashuPakshiItem>(PASHU_PAKSHI_LIST[0]);
  const [currentMissionIndex, setCurrentMissionIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [feedbackState, setFeedbackState] = useState<'correct' | 'wrong' | null>(null);

  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (visible) {
      soundManager.playPop();
      speakText('नमस्ते दोस्तों! चलिए पशु-पक्षियों की मीठी बोलियाँ सुनते हैं!');
    } else {
      stopSpeaking();
    }
  }, [visible]);

  const handleAnimalTap = (item: PashuPakshiItem) => {
    triggerHaptic('medium');
    soundManager.playPop();
    setSelectedAnimal(item);

    Animated.sequence([
      Animated.timing(scaleAnim, { toValue: 1.15, duration: 120, useNativeDriver: true }),
      Animated.spring(scaleAnim, { toValue: 1, friction: 3, useNativeDriver: true }),
    ]).start();

    speakText(item.speechText);
  };

  const handleSafariAnswer = (chosenId: string) => {
    const currentMission = SOUND_MISSIONS[currentMissionIndex];
    if (chosenId === currentMission.targetId) {
      triggerHaptic('success');
      soundManager.playFanfare();
      setFeedbackState('correct');
      setQuizScore((prev) => prev + 1);
      addStars(2);
      addReward({ coins: 10 });
      speakText(`शाबाश! बिल्कुल सही! ${currentMission.targetName} ही ऐसे बोलती है!`);

      setTimeout(() => {
        setFeedbackState(null);
        if (currentMissionIndex + 1 < SOUND_MISSIONS.length) {
          setCurrentMissionIndex((prev) => prev + 1);
        } else {
          setQuizCompleted(true);
          soundManager.playFanfare();
        }
      }, 1400);
    } else {
      triggerHaptic('warning');
      soundManager.playIncorrect();
      setFeedbackState('wrong');
      speakText('अरे! यह सही जानवर नहीं है, फिर से ध्यान से सुनो!');

      setTimeout(() => {
        setFeedbackState(null);
      }, 1000);
    }
  };

  const restartSafari = () => {
    setCurrentMissionIndex(0);
    setQuizScore(0);
    setQuizCompleted(false);
    setFeedbackState(null);
    soundManager.playPop();
  };

  const currentMission = SOUND_MISSIONS[currentMissionIndex];

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.headerLeft}>
              <View style={styles.headerIconCircle}>
                <Text style={{ fontSize: 26 }}>🐾</Text>
              </View>
              <View>
                <Text style={styles.headerTitle}>पशु-पक्षी व ध्वनि पहचान लैब</Text>
                <Text style={styles.headerSub}>NCERT बाल वाटिका 2 • पशु-पक्षियों की मीठी बोलियां</Text>
              </View>
            </View>
            <TouchableOpacity onPress={onClose} style={styles.closeBtn} activeOpacity={0.7}>
              <Text style={styles.closeBtnText}>✕</Text>
            </TouchableOpacity>
          </View>

          {/* Mode Switch Tabs */}
          <View style={styles.modeTabsRow}>
            <TouchableOpacity
              style={[styles.modeTab, activeTab === 'sounds' && styles.modeTabActive]}
              onPress={() => {
                triggerHaptic('light');
                setActiveTab('sounds');
              }}
              activeOpacity={0.8}
            >
              <Text style={[styles.modeTabText, activeTab === 'sounds' && styles.modeTabTextActive]}>
                🔊 बोलियां सुनो ({PASHU_PAKSHI_LIST.length})
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.modeTab, activeTab === 'safari' && styles.modeTabActive]}
              onPress={() => {
                triggerHaptic('light');
                setActiveTab('safari');
              }}
              activeOpacity={0.8}
            >
              <Text style={[styles.modeTabText, activeTab === 'safari' && styles.modeTabTextActive]}>
                🎯 बोली पहचान सफारी (5)
              </Text>
            </TouchableOpacity>
          </View>

          {/* MODE 1: SOUNDS EXPLORATION */}
          {activeTab === 'sounds' && (
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
              {/* Spotlight Card */}
              <Animated.View
                style={[
                  styles.spotlightCard,
                  { backgroundColor: selectedAnimal.color, borderColor: selectedAnimal.borderColor, transform: [{ scale: scaleAnim }] },
                ]}
              >
                <Text style={styles.spotlightEmoji}>{selectedAnimal.emoji}</Text>
                <Text style={styles.spotlightName}>{selectedAnimal.name} ({selectedAnimal.nameEn})</Text>
                <View style={styles.soundBubble}>
                  <Text style={styles.soundBubbleText}>🗣️ {selectedAnimal.soundText}</Text>
                </View>
                <Text style={styles.spotlightRhyme}>💡 {selectedAnimal.rhyme}</Text>

                <View style={{ marginTop: 6 }}>
                  <SpeakerButton
                    textToSpeak={selectedAnimal.speechText}
                    size="md"
                    label={`आवाज़ सुनें: ${selectedAnimal.name}`}
                  />
                </View>
              </Animated.View>

              <View style={styles.instructionBanner}>
                <Text style={styles.instructionText}>
                  👇 किसी भी पशु-पक्षी को छुएं और उनकी मजेदार बोली सुनें!
                </Text>
              </View>

              {/* 8 Animal Grid */}
              <View style={styles.animalGrid}>
                {PASHU_PAKSHI_LIST.map((item) => {
                  const isSelected = selectedAnimal.id === item.id;
                  return (
                    <TouchableOpacity
                      key={item.id}
                      style={[
                        styles.animalTile,
                        { backgroundColor: item.color, borderColor: item.borderColor },
                        isSelected && styles.animalTileSelected,
                      ]}
                      activeOpacity={0.8}
                      onPress={() => handleAnimalTap(item)}
                    >
                      <Text style={styles.animalTileEmoji}>{item.emoji}</Text>
                      <Text style={styles.animalTileName}>{item.name}</Text>
                      <Text style={styles.animalTileSound} numberOfLines={1}>{item.soundText}</Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </ScrollView>
          )}

          {/* MODE 2: SOUND SAFARI QUIZ */}
          {activeTab === 'safari' && (
            <View style={styles.quizWrapper}>
              {!quizCompleted ? (
                <View style={styles.quizCard}>
                  <View style={styles.quizProgressRow}>
                    <View style={styles.quizBadge}>
                      <Text style={styles.quizBadgeText}>
                        सफारी मिशन {currentMissionIndex + 1} / {SOUND_MISSIONS.length}
                      </Text>
                    </View>
                    <View style={styles.quizScoreBadge}>
                      <Text style={styles.quizScoreText}>⭐ {quizScore} सही</Text>
                    </View>
                  </View>

                  <View style={styles.quizPromptBox}>
                    <Text style={styles.quizBigEmoji}>👂 🔊</Text>
                    <Text style={styles.quizQuestionTitle}>{currentMission.soundPrompt}</Text>
                  </View>

                  <View style={{ alignItems: 'center', marginBottom: 16 }}>
                    <SpeakerButton
                      textToSpeak={currentMission.speechText}
                      size="md"
                      label="बोली सुनें 🔊"
                    />
                  </View>

                  {/* 3 Animal Option Cards */}
                  <View style={styles.safariOptionsRow}>
                    {currentMission.options.map((opt) => (
                      <TouchableOpacity
                        key={opt.id}
                        style={styles.safariOptionBtn}
                        activeOpacity={0.8}
                        onPress={() => handleSafariAnswer(opt.id)}
                      >
                        <Text style={styles.safariOptionEmoji}>{opt.emoji}</Text>
                        <Text style={styles.safariOptionName}>{opt.name}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>

                  {/* Feedback Message */}
                  {feedbackState === 'correct' && (
                    <View style={styles.feedbackCorrect}>
                      <Text style={styles.feedbackCorrectText}>🎉 शाबाश! बिल्कुल सही बोली! +2 ⭐</Text>
                    </View>
                  )}
                  {feedbackState === 'wrong' && (
                    <View style={styles.feedbackWrong}>
                      <Text style={styles.feedbackWrongText}>❌ यह सही नहीं है, फिर से कोशिश करो!</Text>
                    </View>
                  )}
                </View>
              ) : (
                <View style={styles.celebrationCard}>
                  <Text style={{ fontSize: 48, marginBottom: 8 }}>🏆 🐾 🌟</Text>
                  <Text style={styles.celebrationTitle}>सफारी चैंपियन!</Text>
                  <Text style={styles.celebrationSub}>
                    आपने सभी पशु-पक्षियों की बोलियाँ बिल्कुल सही पहचान लीं!
                  </Text>
                  <View style={styles.rewardBox}>
                    <Text style={styles.rewardText}>⭐ 10 स्टार्स जीते!</Text>
                    <Text style={styles.rewardText}>💰 50 सोने के सिक्के मिले!</Text>
                  </View>
                  <TouchableOpacity style={styles.playAgainBtn} onPress={restartSafari} activeOpacity={0.85}>
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
    backgroundColor: '#ECFDF5',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: '#A7F3D0',
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
    backgroundColor: '#059669',
    borderColor: '#047857',
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
  spotlightEmoji: {
    fontSize: 52,
    marginBottom: 6,
  },
  spotlightName: {
    fontSize: 22,
    fontWeight: '900',
    color: '#0F172A',
    marginBottom: 4,
  },
  soundBubble: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 14,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  soundBubbleText: {
    fontSize: 14,
    fontWeight: '900',
    color: '#D97706',
  },
  spotlightRhyme: {
    fontSize: 13,
    fontWeight: '700',
    color: '#475569',
    textAlign: 'center',
    lineHeight: 18,
    marginBottom: 10,
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
  animalGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    justifyContent: 'space-between',
  },
  animalTile: {
    width: '48%',
    borderRadius: 16,
    borderWidth: 2,
    paddingVertical: 12,
    paddingHorizontal: 8,
    alignItems: 'center',
    ...SHADOWS.small,
  },
  animalTileSelected: {
    transform: [{ scale: 1.04 }],
    borderColor: '#059669',
    borderWidth: 2.5,
  },
  animalTileEmoji: {
    fontSize: 32,
    marginBottom: 2,
  },
  animalTileName: {
    fontSize: 14,
    fontWeight: '900',
    color: '#0F172A',
    marginBottom: 2,
  },
  animalTileSound: {
    fontSize: 11,
    fontWeight: '700',
    color: '#64748B',
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
    backgroundColor: '#D1FAE5',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },
  quizBadgeText: {
    fontSize: 11,
    fontWeight: '800',
    color: '#065F46',
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
    fontSize: 50,
    marginBottom: 8,
  },
  quizQuestionTitle: {
    fontSize: 18,
    fontWeight: '900',
    color: '#1E293B',
    textAlign: 'center',
    lineHeight: 24,
  },
  safariOptionsRow: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    marginBottom: 16,
  },
  safariOptionBtn: {
    flex: 1,
    paddingVertical: 14,
    paddingHorizontal: 6,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#A7F3D0',
    alignItems: 'center',
    justifyContent: 'center',
    ...SHADOWS.small,
  },
  safariOptionEmoji: {
    fontSize: 34,
    marginBottom: 4,
  },
  safariOptionName: {
    fontSize: 13,
    fontWeight: '900',
    color: '#065F46',
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
    backgroundColor: '#059669',
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
