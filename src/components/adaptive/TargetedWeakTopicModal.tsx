import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { COLORS, SPACING, BORDER_RADIUS, SHADOWS } from '../../constants/theme';
import { triggerHaptic } from '../../utils/haptics';
import { soundManager } from '../../utils/soundManager';
import { Grade, WeakTopicItem, Question, AppLanguage } from '../../types';
import { useUserStore } from '../../store/useUserStore';

interface TargetedWeakTopicModalProps {
  visible: boolean;
  onClose: () => void;
  userGrade: Grade;
  topic: WeakTopicItem | null;
  activeLang?: AppLanguage;
}

export const TargetedWeakTopicModal: React.FC<TargetedWeakTopicModalProps> = ({
  visible,
  onClose,
  userGrade,
  topic,
  activeLang = 'en',
}) => {
  const isHindi = activeLang === 'hi';
  const { addStars, recordTopicPerformance } = useUserStore();
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  // Remedial questions tailored to the topic
  const getRemedialQuestion = () => {
    const title = topic?.chapterTitle?.toLowerCase() || '';

    if (title.includes('fraction')) {
      return {
        prompt: 'If a pizza has 4 slices and you eat 2 slices, what part did you eat?',
        options: ['1/2 (Exactly Half) 🍕', '1/4 (One Quarter)', '3/4 (Three Quarters)'],
        correctIndex: 0,
        explanation: '2 out of 4 slices is 2/4. Dividing both by 2 gives 1/2. You ate exactly half of the pizza!',
        visual: '🍕',
      };
    }

    if (title.includes('ten') || title.includes('regrouping') || title.includes('addition')) {
      return {
        prompt: 'To make 10, how much more do you need to add to 7? (7 + __ = 10)',
        options: ['3', '4', '2'],
        correctIndex: 0,
        explanation: '7 + 3 = 10! Thinking in bundles of 10 makes mental addition super fast!',
        visual: '🔟',
      };
    }

    if (title.includes('clock') || title.includes('time')) {
      return {
        prompt: 'When the long minute hand points at 6 and the short hour hand is at 4, what time is it?',
        options: ['4:30 (Half-past 4) 🕒', '4:00 (4 O\'Clock)', '6:20'],
        correctIndex: 0,
        explanation: 'The minute hand at 6 means 30 minutes! So the time is 4:30 (half-past 4).',
        visual: '🕒',
      };
    }

    if (title.includes('area') || title.includes('perimeter')) {
      return {
        prompt: 'What is the PERIMETER of a square if each side is 5 cm?',
        options: ['20 cm (5 + 5 + 5 + 5)', '25 cm²', '10 cm'],
        correctIndex: 0,
        explanation: 'Perimeter is the total length of the 4 outer sides: 5 × 4 = 20 cm!',
        visual: '📐',
      };
    }

    // Default concept reinforcement
    return {
      prompt: `Which approach best solves: ${topic?.conceptName || 'this concept'}?`,
      options: ['Break it down into simpler steps 💡', 'Rote memorize without understanding', 'Skip the step'],
      correctIndex: 0,
      explanation: 'Breaking problems into visual, hands-on steps builds long-term super kid intuition!',
      visual: '🎯',
    };
  };

  const currentQ = getRemedialQuestion();

  const handleSelect = (idx: number) => {
    if (isAnswered) return;
    setSelectedOpt(idx);
    setIsAnswered(true);

    const isCorrect = idx === currentQ.correctIndex;
    if (isCorrect) {
      soundManager.playCorrect();
      triggerHaptic('success');
    } else {
      soundManager.playIncorrect();
      triggerHaptic('error');
    }
  };

  const handleFinish = async () => {
    soundManager.playFanfare();
    triggerHaptic('success');
    addStars(30);

    if (topic) {
      await recordTopicPerformance(topic.subject, topic.chapterTitle, 90);
    }
    setIsComplete(true);
  };

  const handleModalClose = () => {
    setSelectedOpt(null);
    setIsAnswered(false);
    setIsComplete(false);
    onClose();
  };

  if (!topic) return null;

  return (
    <Modal visible={visible} animationType="slide" transparent onRequestClose={handleModalClose}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          {/* Top Bar */}
          <View style={styles.topBar}>
            <View style={styles.topBarLeft}>
              <Text style={styles.boosterIcon}>🎯</Text>
              <View>
                <Text style={styles.topBarTitle}>
                  {isHindi ? 'कमज़ोर टॉपिक सुधार' : 'Targeted Concept Booster'}
                </Text>
                <Text style={styles.topBarSub}>
                  {isHindi ? '3-मिनट का विशेष अभ्यास' : '3-Minute Mastery Session'}
                </Text>
              </View>
            </View>
            <TouchableOpacity onPress={handleModalClose} style={styles.closeBtn}>
              <Text style={styles.closeText}>✕</Text>
            </TouchableOpacity>
          </View>

          <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
            {!isComplete ? (
              <View style={styles.practiceBox}>
                {/* Topic Header Card */}
                <View style={styles.topicHeaderCard}>
                  <View style={styles.topicBadge}>
                    <Text style={styles.topicBadgeText}>
                      {isHindi ? '⚠️ सुधार क्षेत्र' : '⚠️ FOCUS AREA DETECTED'}
                    </Text>
                  </View>
                  <Text style={styles.topicTitle}>{topic.chapterTitle}</Text>
                  <Text style={styles.topicSub}>{topic.conceptName}</Text>
                  <Text style={styles.topicAccuracy}>
                    {isHindi ? (
                      <>वर्तमान दक्षता: <Text style={{ color: '#FACC15', fontWeight: '900' }}>{topic.accuracyPercentage}%</Text> • लक्ष्य: 100% 🚀</>
                    ) : (
                      <>Current Mastery: <Text style={{ color: '#FACC15', fontWeight: '900' }}>{topic.accuracyPercentage}%</Text> • Goal: 100% 🚀</>
                    )}
                  </Text>
                </View>

                {/* Remedial Question Card */}
                <View style={styles.questionCard}>
                  <Text style={styles.qVisual}>{currentQ.visual}</Text>
                  <Text style={styles.qPrompt}>{currentQ.prompt}</Text>

                  {/* Options */}
                  <View style={styles.optionsList}>
                    {currentQ.options.map((opt, idx) => {
                      const isChosen = selectedOpt === idx;
                      const isCorrect = idx === currentQ.correctIndex;
                      let btnStyle = styles.optBtn;

                      if (isAnswered) {
                        if (isCorrect) btnStyle = { ...styles.optBtn, ...styles.optCorrect };
                        else if (isChosen) btnStyle = { ...styles.optBtn, ...styles.optWrong };
                      }

                      return (
                        <TouchableOpacity
                          key={idx}
                          style={btnStyle}
                          activeOpacity={0.85}
                          onPress={() => handleSelect(idx)}
                          disabled={isAnswered}
                        >
                          <Text style={styles.optText}>{opt}</Text>
                          {isAnswered && isCorrect && <Text style={{ fontSize: 16 }}>✅</Text>}
                        </TouchableOpacity>
                      );
                    })}
                  </View>

                  {/* Explanation feedback */}
                  {isAnswered && (
                    <View style={styles.feedbackBox}>
                      <Text style={styles.feedbackTitle}>
                        {isHindi ? '💡 कॉन्सेप्ट स्पष्टता:' : '💡 Concept Clarity:'}
                      </Text>
                      <Text style={styles.feedbackText}>{currentQ.explanation}</Text>

                      <TouchableOpacity
                        style={styles.masteredBtn}
                        activeOpacity={0.88}
                        onPress={handleFinish}
                      >
                        <Text style={styles.masteredBtnText}>
                          {isHindi ? 'निपुण घोषित करें (+30 सितारे) 🌟' : 'Mark as Mastered (+30 Stars) 🌟'}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              </View>
            ) : (
              <View style={styles.completeBox}>
                <Text style={styles.trophyEmoji}>🌟🏆</Text>
                <Text style={styles.completeTitle}>
                  {isHindi ? 'टॉपिक में निपुणता प्राप्त!' : 'TOPIC MASTERED!'}
                </Text>
                <Text style={styles.completeSub}>
                  {isHindi
                    ? `कमज़ोर टॉपिक अब आपकी ताकत बन गया है! ${topic.chapterTitle} में आपकी दक्षता 90%+ हो गई है।`
                    : `You turned a weak spot into a superpower strength! Your mastery rating in ${topic.chapterTitle} is now 90%+.`}
                </Text>
                <View style={styles.rewardPill}>
                  <Text style={styles.rewardText}>
                    {isHindi ? '⭐ +30 सितारे प्रोफ़ाइल में जोड़े गए!' : '⭐ +30 Stars Awarded to Profile!'}
                  </Text>
                </View>
                <TouchableOpacity
                  style={styles.doneBtn}
                  activeOpacity={0.88}
                  onPress={handleModalClose}
                >
                  <Text style={styles.doneBtnText}>
                    {isHindi ? 'डैशबोर्ड पर वापस जाएं 🏠' : 'Back to Dashboard 🏠'}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </ScrollView>
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
    width: '94%',
    maxHeight: '92%',
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    borderWidth: 2.5,
    borderColor: '#F59E0B',
    overflow: 'hidden',
    ...SHADOWS.large,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    backgroundColor: '#FFFBEB',
    borderBottomWidth: 1.5,
    borderBottomColor: '#FDE68A',
  },
  topBarLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  boosterIcon: {
    fontSize: 24,
  },
  topBarTitle: {
    color: '#78350F',
    fontSize: 16,
    fontWeight: '900',
  },
  topBarSub: {
    color: '#B45309',
    fontSize: 11,
    fontWeight: '700',
  },
  closeBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FEF3C7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeText: {
    color: '#92400E',
    fontSize: 16,
    fontWeight: 'bold',
  },
  scrollContent: {
    padding: SPACING.md,
  },
  practiceBox: {
    width: '100%',
  },
  topicHeaderCard: {
    backgroundColor: '#FFFBEB',
    borderRadius: 20,
    padding: SPACING.md,
    borderWidth: 2,
    borderColor: '#FDE68A',
    marginBottom: SPACING.sm,
  },
  topicBadge: {
    backgroundColor: '#F59E0B',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    alignSelf: 'flex-start',
    marginBottom: 6,
  },
  topicBadgeText: {
    color: '#FFFFFF',
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  topicTitle: {
    color: '#78350F',
    fontSize: 18,
    fontWeight: '900',
  },
  topicSub: {
    color: '#92400E',
    fontSize: 13,
    marginTop: 2,
    fontWeight: '600',
  },
  topicAccuracy: {
    color: '#78350F',
    fontSize: 12,
    marginTop: 8,
    fontWeight: '700',
  },
  questionCard: {
    backgroundColor: '#F8FAFC',
    borderRadius: 20,
    padding: SPACING.md,
    borderWidth: 2,
    borderColor: '#E2E8F0',
    alignItems: 'center',
  },
  qVisual: {
    fontSize: 36,
    marginVertical: 4,
  },
  qPrompt: {
    color: '#0F172A',
    fontSize: 16,
    fontWeight: '800',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 16,
  },
  optionsList: {
    width: '100%',
    gap: 8,
  },
  optBtn: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: '#E2E8F0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  optCorrect: {
    borderColor: '#10B981',
    backgroundColor: '#ECFDF5',
  },
  optWrong: {
    borderColor: '#EF4444',
    backgroundColor: '#FEF2F2',
  },
  optText: {
    color: '#1E293B',
    fontSize: 14,
    fontWeight: '700',
    flex: 1,
  },
  feedbackBox: {
    width: '100%',
    marginTop: 14,
    padding: 12,
    backgroundColor: '#F0FDF4',
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: '#86EFAC',
  },
  feedbackTitle: {
    color: '#166534',
    fontSize: 12,
    fontWeight: '900',
    marginBottom: 4,
  },
  feedbackText: {
    color: '#15803D',
    fontSize: 12,
    lineHeight: 16,
    marginBottom: 12,
    fontWeight: '600',
  },
  masteredBtn: {
    backgroundColor: '#10B981',
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
    borderBottomWidth: 4,
    borderBottomColor: '#059669',
  },
  masteredBtnText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '900',
  },
  completeBox: {
    alignItems: 'center',
    paddingVertical: SPACING.lg,
  },
  trophyEmoji: {
    fontSize: 50,
    marginBottom: 8,
  },
  completeTitle: {
    color: '#78350F',
    fontSize: 20,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  completeSub: {
    color: '#92400E',
    fontSize: 13,
    textAlign: 'center',
    marginTop: 6,
    marginBottom: 16,
    lineHeight: 18,
    fontWeight: '600',
  },
  rewardPill: {
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#F59E0B',
    marginBottom: 20,
  },
  rewardText: {
    color: '#92400E',
    fontSize: 13,
    fontWeight: '900',
  },
  doneBtn: {
    width: '100%',
    backgroundColor: '#F59E0B',
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
    borderBottomWidth: 4,
    borderBottomColor: '#D97706',
  },
  doneBtnText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '900',
  },
});
