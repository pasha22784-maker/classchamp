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
import { Grade, WeakTopicItem, Question } from '../../types';
import { useUserStore } from '../../store/useUserStore';

interface TargetedWeakTopicModalProps {
  visible: boolean;
  onClose: () => void;
  userGrade: Grade;
  topic: WeakTopicItem | null;
}

export const TargetedWeakTopicModal: React.FC<TargetedWeakTopicModalProps> = ({
  visible,
  onClose,
  userGrade,
  topic,
}) => {
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
                <Text style={styles.topBarTitle}>Targeted Concept Booster</Text>
                <Text style={styles.topBarSub}>3-Minute Mastery Session • कमज़ोर टॉपिक सुधार</Text>
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
                    <Text style={styles.topicBadgeText}>⚠️ FOCUS AREA DETECTED</Text>
                  </View>
                  <Text style={styles.topicTitle}>{topic.chapterTitle}</Text>
                  <Text style={styles.topicSub}>{topic.conceptName}</Text>
                  <Text style={styles.topicAccuracy}>
                    Current Mastery: <Text style={{ color: '#FACC15', fontWeight: '900' }}>{topic.accuracyPercentage}%</Text> • Goal: 100% 🚀
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
                      <Text style={styles.feedbackTitle}>💡 Concept Clarity:</Text>
                      <Text style={styles.feedbackText}>{currentQ.explanation}</Text>

                      <TouchableOpacity
                        style={styles.masteredBtn}
                        activeOpacity={0.88}
                        onPress={handleFinish}
                      >
                        <Text style={styles.masteredBtnText}>Mark as Mastered (+30 Stars) 🌟</Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              </View>
            ) : (
              <View style={styles.completeBox}>
                <Text style={styles.trophyEmoji}>🌟🏆</Text>
                <Text style={styles.completeTitle}>TOPIC MASTERED!</Text>
                <Text style={styles.completeSub}>
                  You turned a weak spot into a superpower strength! Your mastery rating in {topic.chapterTitle} is now 90%+.
                </Text>
                <View style={styles.rewardPill}>
                  <Text style={styles.rewardText}>⭐ +30 Stars Awarded to Profile!</Text>
                </View>
                <TouchableOpacity
                  style={styles.doneBtn}
                  activeOpacity={0.88}
                  onPress={handleModalClose}
                >
                  <Text style={styles.doneBtnText}>Back to Dashboard 🏠</Text>
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
    backgroundColor: 'rgba(5, 5, 20, 0.94)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '94%',
    maxHeight: '92%',
    backgroundColor: '#0F172A',
    borderRadius: BORDER_RADIUS.xl,
    borderWidth: 2,
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
    backgroundColor: '#1E293B',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(245, 158, 11, 0.3)',
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
    color: '#FFF',
    fontSize: 14,
    fontWeight: '900',
  },
  topBarSub: {
    color: '#FCD34D',
    fontSize: 10,
    fontWeight: '700',
  },
  closeBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeText: {
    color: '#FFF',
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
    backgroundColor: '#1E293B',
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.md,
    borderWidth: 1.5,
    borderColor: '#F59E0B',
    marginBottom: SPACING.sm,
  },
  topicBadge: {
    backgroundColor: 'rgba(245, 158, 11, 0.2)',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: '#F59E0B',
    marginBottom: 6,
  },
  topicBadgeText: {
    color: '#FCD34D',
    fontSize: 9,
    fontWeight: '900',
  },
  topicTitle: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: '900',
  },
  topicSub: {
    color: '#94A3B8',
    fontSize: 12,
    marginTop: 2,
  },
  topicAccuracy: {
    color: '#CBD5E1',
    fontSize: 11,
    marginTop: 8,
  },
  questionCard: {
    backgroundColor: '#1E293B',
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.md,
    borderWidth: 1,
    borderColor: '#334155',
    alignItems: 'center',
  },
  qVisual: {
    fontSize: 36,
    marginVertical: 4,
  },
  qPrompt: {
    color: '#F8FAFC',
    fontSize: 15,
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
    backgroundColor: '#0F172A',
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: BORDER_RADIUS.md,
    borderWidth: 1.5,
    borderColor: '#334155',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  optCorrect: {
    borderColor: '#10B981',
    backgroundColor: 'rgba(16, 185, 129, 0.15)',
  },
  optWrong: {
    borderColor: '#EF4444',
    backgroundColor: 'rgba(239, 68, 68, 0.15)',
  },
  optText: {
    color: '#F8FAFC',
    fontSize: 14,
    fontWeight: '800',
    flex: 1,
  },
  feedbackBox: {
    width: '100%',
    marginTop: 14,
    padding: 12,
    backgroundColor: 'rgba(15, 23, 42, 0.8)',
    borderRadius: BORDER_RADIUS.md,
    borderWidth: 1,
    borderColor: '#475569',
  },
  feedbackTitle: {
    color: '#38BDF8',
    fontSize: 12,
    fontWeight: '900',
    marginBottom: 4,
  },
  feedbackText: {
    color: '#CBD5E1',
    fontSize: 12,
    lineHeight: 16,
    marginBottom: 12,
  },
  masteredBtn: {
    backgroundColor: '#10B981',
    paddingVertical: 12,
    borderRadius: BORDER_RADIUS.md,
    alignItems: 'center',
  },
  masteredBtnText: {
    color: '#022C22',
    fontSize: 13,
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
    color: '#FACC15',
    fontSize: 18,
    fontWeight: '900',
    letterSpacing: 1,
  },
  completeSub: {
    color: '#CBD5E1',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 6,
    marginBottom: 16,
    lineHeight: 18,
  },
  rewardPill: {
    backgroundColor: 'rgba(234, 179, 8, 0.2)',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: BORDER_RADIUS.full,
    borderWidth: 1,
    borderColor: '#FACC15',
    marginBottom: 20,
  },
  rewardText: {
    color: '#FDE047',
    fontSize: 13,
    fontWeight: '900',
  },
  doneBtn: {
    width: '100%',
    backgroundColor: '#0284C7',
    paddingVertical: 12,
    borderRadius: BORDER_RADIUS.lg,
    alignItems: 'center',
  },
  doneBtnText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '900',
  },
});
