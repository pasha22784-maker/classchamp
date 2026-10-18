import React, { useState, useEffect } from 'react';
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
import { Grade, Question, AppLanguage } from '../../types';
import { getOlympiadMockTestQuestions } from '../../data/cognitiveEngine';
import { useUserStore } from '../../store/useUserStore';

interface WeeklyOlympiadTestModalProps {
  visible: boolean;
  onClose: () => void;
  userGrade: Grade;
  onPracticeWeakTopic?: (chapterTitle: string) => void;
  activeLang?: AppLanguage;
}

export const WeeklyOlympiadTestModal: React.FC<WeeklyOlympiadTestModalProps> = ({
  visible,
  onClose,
  userGrade,
  onPracticeWeakTopic,
  activeLang = 'en',
}) => {
  const isHindi = activeLang === 'hi';
  const { addStars, recordTopicPerformance } = useUserStore();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<number, { isCorrect: boolean; selected: string }>>({});
  const [isTestComplete, setIsTestComplete] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (visible) {
      const q = getOlympiadMockTestQuestions(userGrade);
      setQuestions(q);
      setCurrentIndex(0);
      setSelectedOptionId(null);
      setAnswers({});
      setIsTestComplete(false);
      setScore(0);
    }
  }, [visible, userGrade]);

  const handleSelectOption = (optId: string) => {
    setSelectedOptionId(optId);
    soundManager.playPop();
    triggerHaptic('light');
  };

  const handleNext = () => {
    if (!selectedOptionId) return;

    const currentQ = questions[currentIndex];
    const option = currentQ.payload.options?.find((o) => o.id === selectedOptionId);
    const correct = option?.isCorrect === true;

    if (correct) {
      soundManager.playCorrect();
      triggerHaptic('medium');
    } else {
      soundManager.playIncorrect();
      triggerHaptic('error');
    }

    const newAnswers = {
      ...answers,
      [currentIndex]: { isCorrect: correct, selected: selectedOptionId },
    };
    setAnswers(newAnswers);

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((i) => i + 1);
      setSelectedOptionId(null);
    } else {
      // Calculate score & finish
      let totalCorrect = 0;
      Object.values(newAnswers).forEach((a) => {
        if (a.isCorrect) totalCorrect += 1;
      });
      const pct = Math.round((totalCorrect / questions.length) * 100);
      setScore(pct);
      setIsTestComplete(true);
      soundManager.playFanfare();
      addStars(60);

      // Record performance for diagnostic weak topic engine
      questions.forEach((q, idx) => {
        const ans = newAnswers[idx];
        if (ans && !ans.isCorrect) {
          recordTopicPerformance(q.subject, q.chapter, 40);
        } else if (ans && ans.isCorrect) {
          recordTopicPerformance(q.subject, q.chapter, 90);
        }
      });
    }
  };

  const currentQ = questions[currentIndex];

  return (
    <Modal visible={visible} animationType="slide" transparent onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          {/* Top Bar */}
          <View style={styles.topBar}>
            <View style={styles.topBarLeft}>
              <Text style={styles.trophyIcon}>🏅</Text>
              <View>
                <Text style={styles.topBarTitle}>Weekly STEM Olympiad Benchmark</Text>
                <Text style={styles.topBarSub}>Higher-Order Thinking Skills (HOTS) • Class {userGrade}</Text>
              </View>
            </View>
            <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
              <Text style={styles.closeText}>✕</Text>
            </TouchableOpacity>
          </View>

          {!isTestComplete && currentQ && (
            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
              {/* Progress Bar */}
              <View style={styles.qIndexRow}>
                <Text style={styles.qIndexText}>
                  Question {currentIndex + 1} of {questions.length}
                </Text>
                <View style={styles.olympiadBadge}>
                  <Text style={styles.olympiadBadgeText}>HOTS LEVEL 🚀</Text>
                </View>
              </View>

              {/* Question Card */}
              <View style={styles.questionCard}>
                <Text style={styles.qTopicText}>Topic: {currentQ.chapter} • {currentQ.concept}</Text>
                {currentQ.visualEmoji && <Text style={styles.qEmoji}>{currentQ.visualEmoji}</Text>}
                <Text style={styles.qText}>{currentQ.question}</Text>

                {/* Options List */}
                <View style={styles.optionsList}>
                  {currentQ.payload.options?.map((opt) => {
                    const isSelected = selectedOptionId === opt.id;
                    return (
                      <TouchableOpacity
                        key={opt.id}
                        style={[styles.optCard, isSelected && styles.optCardSelected]}
                        activeOpacity={0.85}
                        onPress={() => handleSelectOption(opt.id)}
                      >
                        <View style={[styles.optRadio, isSelected && styles.optRadioSelected]} />
                        <Text style={[styles.optText, isSelected && styles.optTextSelected]}>
                          {opt.text}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>

              <TouchableOpacity
                style={[styles.nextBtn, !selectedOptionId && styles.nextBtnDisabled]}
                disabled={!selectedOptionId}
                activeOpacity={0.88}
                onPress={handleNext}
              >
                <Text style={styles.nextBtnText}>
                  {currentIndex + 1 === questions.length ? 'Submit Olympiad Test 🏆' : 'Next Question ▶'}
                </Text>
              </TouchableOpacity>
            </ScrollView>
          )}

          {/* Test Complete / Diagnostic Report */}
          {isTestComplete && (
            <ScrollView contentContainerStyle={styles.reportScroll} showsVerticalScrollIndicator={false}>
              <View style={styles.reportCard}>
                <Text style={styles.medalEmoji}>🥇</Text>
                <Text style={styles.reportTitle}>OLYMPIAD BENCHMARK REPORT</Text>
                <Text style={styles.reportScoreText}>{score}% MASTERY</Text>

                <View style={styles.statsRow}>
                  <View style={styles.statBox}>
                    <Text style={styles.statVal}>Top 4%</Text>
                    <Text style={styles.statLabel}>National Rank</Text>
                  </View>
                  <View style={styles.statBox}>
                    <Text style={styles.statVal}>+60 ⭐</Text>
                    <Text style={styles.statLabel}>Stars Added</Text>
                  </View>
                  <View style={styles.statBox}>
                    <Text style={styles.statVal}>Advanced</Text>
                    <Text style={styles.statLabel}>HOTS Tier</Text>
                  </View>
                </View>

                {/* Diagnostic Insights */}
                <View style={styles.insightBox}>
                  <Text style={styles.insightTitle}>
                    {isHindi ? '🔍 अभिभावक नैदानिक मूल्यांकन:' : '🔍 Diagnostic Parent Assessment:'}
                  </Text>
                  <Text style={styles.insightText}>
                    {isHindi
                      ? (score >= 70
                          ? 'बच्चे की तार्किक और समस्या निवारण क्षमता बहुत मजबूत है। कठिन से कठिन सवालों को समझने की अच्छी समझ विकसित हो चुकी है।'
                          : 'कुछ टॉपिक्स में बुनियादी समझ को और मजबूत करने की ज़रूरत है। नीचे दिए गए वीक-टॉपिक की प्रैक्टिस करें।')
                      : (score >= 70
                          ? 'Child shows exceptional conceptual and problem-solving skills! Excellent grasp over high-order thinking concepts.'
                          : 'Foundational concepts in a few topics need extra reinforcement. Recommended to practice via the targeted boosters.')}
                  </Text>
                </View>

                {/* Weak Spots & Remediation */}
                <View style={styles.weakActionBox}>
                  <Text style={styles.weakActionTitle}>
                    {isHindi ? '🎯 विशेष अभ्यास सिफ़ारिश:' : '🎯 Targeted Practice Recommended:'}
                  </Text>
                  <Text style={styles.weakActionDesc}>
                    {isHindi
                      ? 'कमज़ोर टॉपिक्स को 100% परफेक्ट बनाने के लिए होमपेज पर दिए गए 3-Minute Booster से प्रैक्टिस करें।'
                      : 'To turn weak topics into 100% strengths, practice using the 3-Minute Booster available on the dashboard.'}
                  </Text>
                </View>

                <TouchableOpacity
                  style={styles.doneBtn}
                  activeOpacity={0.88}
                  onPress={onClose}
                >
                  <Text style={styles.doneBtnText}>
                    {isHindi ? 'होमपेज पर कमज़ोर टॉपिक देखें 🏠' : 'Review Weak Topics on Home 🏠'}
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
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
    width: '94%',
    maxHeight: '92%',
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    borderWidth: 2.5,
    borderColor: '#6366F1',
    overflow: 'hidden',
    ...SHADOWS.large,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    backgroundColor: '#EEF2FF',
    borderBottomWidth: 1.5,
    borderBottomColor: '#C7D2FE',
  },
  topBarLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  trophyIcon: {
    fontSize: 24,
  },
  topBarTitle: {
    color: '#312E81',
    fontSize: 16,
    fontWeight: '900',
  },
  topBarSub: {
    color: '#4338CA',
    fontSize: 11,
    fontWeight: '700',
  },
  closeBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#E0E7FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeText: {
    color: '#3730A3',
    fontSize: 16,
    fontWeight: 'bold',
  },
  scrollContent: {
    padding: SPACING.md,
  },
  qIndexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  qIndexText: {
    color: '#64748B',
    fontSize: 12,
    fontWeight: '800',
  },
  olympiadBadge: {
    backgroundColor: '#EEF2FF',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: '#818CF8',
  },
  olympiadBadgeText: {
    color: '#312E81',
    fontSize: 9,
    fontWeight: '900',
  },
  questionCard: {
    backgroundColor: '#F8FAFC',
    borderRadius: 20,
    padding: SPACING.md,
    borderWidth: 2,
    borderColor: '#E2E8F0',
  },
  qTopicText: {
    color: '#4F46E5',
    fontSize: 12,
    fontWeight: '800',
    marginBottom: 6,
    textTransform: 'uppercase',
  },
  qEmoji: {
    fontSize: 34,
    textAlign: 'center',
    marginVertical: 4,
  },
  qText: {
    color: '#0F172A',
    fontSize: 16,
    fontWeight: '800',
    lineHeight: 22,
    marginBottom: 16,
  },
  optionsList: {
    gap: 8,
  },
  optCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: '#E2E8F0',
    gap: 10,
  },
  optCardSelected: {
    borderColor: '#6366F1',
    backgroundColor: '#EEF2FF',
  },
  optRadio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#94A3B8',
  },
  optRadioSelected: {
    borderColor: '#6366F1',
    backgroundColor: '#6366F1',
  },
  optText: {
    color: '#1E293B',
    fontSize: 14,
    fontWeight: '700',
    flex: 1,
  },
  optTextSelected: {
    color: '#312E81',
    fontWeight: '900',
  },
  nextBtn: {
    backgroundColor: '#4F46E5',
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 16,
    borderBottomWidth: 4,
    borderBottomColor: '#3730A3',
  },
  nextBtnDisabled: {
    backgroundColor: '#CBD5E1',
    borderBottomColor: '#94A3B8',
    opacity: 0.6,
  },
  nextBtnText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: '900',
  },
  reportScroll: {
    padding: SPACING.md,
    alignItems: 'center',
  },
  reportCard: {
    width: '100%',
    alignItems: 'center',
  },
  medalEmoji: {
    fontSize: 48,
    marginVertical: 4,
  },
  reportTitle: {
    color: '#0F172A',
    fontSize: 20,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  reportScoreText: {
    color: '#D97706',
    fontSize: 28,
    fontWeight: '900',
    marginVertical: 4,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    gap: 8,
    marginVertical: 14,
  },
  statBox: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    paddingVertical: 10,
    borderRadius: 14,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
  },
  statVal: {
    color: '#4F46E5',
    fontSize: 16,
    fontWeight: '900',
  },
  statLabel: {
    color: '#64748B',
    fontSize: 10,
    fontWeight: '800',
    marginTop: 2,
    textTransform: 'uppercase',
  },
  insightBox: {
    width: '100%',
    backgroundColor: '#F0FDF4',
    borderRadius: 14,
    padding: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#10B981',
    borderWidth: 1,
    borderColor: '#BBF7D0',
    marginBottom: 10,
  },
  insightTitle: {
    color: '#166534',
    fontSize: 12,
    fontWeight: '800',
    marginBottom: 2,
  },
  insightText: {
    color: '#15803D',
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '500',
  },
  weakActionBox: {
    width: '100%',
    backgroundColor: '#FFFBEB',
    borderRadius: 14,
    padding: 12,
    borderWidth: 1.5,
    borderColor: '#F59E0B',
    marginBottom: 16,
  },
  weakActionTitle: {
    color: '#B45309',
    fontSize: 12,
    fontWeight: '800',
    marginBottom: 2,
  },
  weakActionDesc: {
    color: '#92400E',
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '600',
  },
  doneBtn: {
    width: '100%',
    backgroundColor: '#4F46E5',
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
    borderBottomWidth: 4,
    borderBottomColor: '#3730A3',
  },
  doneBtnText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: '900',
  },
});
