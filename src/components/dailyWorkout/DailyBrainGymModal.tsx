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
import { Grade, AppLanguage } from '../../types';
import { getDailyWorkoutForDate, DailyWorkoutData } from '../../data/cognitiveEngine';
import { useUserStore, getTodayDateString } from '../../store/useUserStore';

interface DailyBrainGymModalProps {
  visible: boolean;
  onClose: () => void;
  userGrade: Grade;
  onLaunchLab: (labId: string) => void;
  onLaunchSpeedBrain: () => void;
  activeLang?: AppLanguage;
}

export const DailyBrainGymModal: React.FC<DailyBrainGymModalProps> = ({
  visible,
  onClose,
  userGrade,
  onLaunchLab,
  onLaunchSpeedBrain,
  activeLang = 'en',
}) => {
  const isHindi = activeLang === 'hi';
  const { profile, markDailyWorkoutDone, updateCognitiveScore } = useUserStore();
  const today = getTodayDateString();
  const isCompletedToday = (profile.dailyWorkoutCompletedDates || []).includes(today);

  const workoutData: DailyWorkoutData = getDailyWorkoutForDate(userGrade, today);

  // Steps: 1 = Logic Puzzle, 2 = STEM Mission, 3 = Speed Reflex, 4 = Workout Finished
  const [currentStep, setCurrentStep] = useState<number>(isCompletedToday ? 4 : 1);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [puzzleAnswered, setPuzzleAnswered] = useState(false);
  const [isPuzzleCorrect, setIsPuzzleCorrect] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const handleSelectOption = (opt: string) => {
    if (puzzleAnswered) return;
    setSelectedOption(opt);
    const correct = opt === workoutData.puzzle.correctAnswer;
    setIsPuzzleCorrect(correct);
    setPuzzleAnswered(true);

    if (correct) {
      soundManager.playCorrect();
      triggerHaptic('success');
      updateCognitiveScore('logicScore', 2);
    } else {
      soundManager.playIncorrect();
      triggerHaptic('error');
    }
  };

  const handleCompleteMission = () => {
    soundManager.playCorrect();
    triggerHaptic('medium');
    setCurrentStep(3);
  };

  const handleFinishWorkout = async () => {
    soundManager.playFanfare();
    triggerHaptic('success');
    await markDailyWorkoutDone();
    setCurrentStep(4);
  };

  return (
    <Modal visible={visible} animationType="slide" transparent onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          {/* Top Bar */}
          <View style={styles.topBar}>
            <View style={styles.topBarLeft}>
              <Text style={styles.barEmoji}>🏋️‍♂️</Text>
              <View>
                <Text style={styles.barTitle}>
                  {isHindi ? 'दैनिक सुपर किड ब्रेन जिम' : 'Daily Super Kid Brain Gym'}
                </Text>
                <Text style={styles.barSub}>
                  {isHindi
                    ? `365 में से दिन ${workoutData.dayNumber} • 3-चरणीय दैनिक कसरत`
                    : `Day ${workoutData.dayNumber} of 365 • 3-Step Daily Workout`}
                </Text>
              </View>
            </View>
            <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
              <Text style={styles.closeText}>✕</Text>
            </TouchableOpacity>
          </View>

          {/* Stepper Indicator */}
          <View style={styles.stepperRow}>
            <View style={[styles.stepDot, currentStep >= 1 && styles.stepDotActive]}>
              <Text style={styles.stepDotText}>1</Text>
            </View>
            <View style={[styles.stepLine, currentStep >= 2 && styles.stepLineActive]} />
            <View style={[styles.stepDot, currentStep >= 2 && styles.stepDotActive]}>
              <Text style={styles.stepDotText}>2</Text>
            </View>
            <View style={[styles.stepLine, currentStep >= 3 && styles.stepLineActive]} />
            <View style={[styles.stepDot, currentStep >= 3 && styles.stepDotActive]}>
              <Text style={styles.stepDotText}>3</Text>
            </View>
          </View>

          <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            {/* STEP 1: LOGIC PUZZLE */}
            {currentStep === 1 && (
              <View style={styles.stepBox}>
                <View style={styles.stepBadge}>
                  <Text style={styles.stepBadgeText}>
                    {isHindi ? 'चरण 1: आज की तार्किक पहेली 🧩' : 'STEP 1: LOGIC PUZZLE OF THE DAY 🧩'}
                  </Text>
                </View>

                <View style={styles.puzzleCard}>
                  <Text style={styles.puzzleVisual}>{workoutData.puzzle.visualEmoji}</Text>
                  <Text style={styles.puzzleTitle}>{workoutData.puzzle.title}</Text>
                  <Text style={styles.puzzleQuestion}>{workoutData.puzzle.question}</Text>

                  {/* Options */}
                  <View style={styles.optionsCol}>
                    {workoutData.puzzle.options.map((opt, idx) => {
                      const isChosen = selectedOption === opt;
                      const isCorrect = opt === workoutData.puzzle.correctAnswer;
                      let btnStyle = styles.optionBtn;
                      if (puzzleAnswered) {
                        if (isCorrect) btnStyle = { ...styles.optionBtn, ...styles.optCorrect };
                        else if (isChosen) btnStyle = { ...styles.optionBtn, ...styles.optWrong };
                      }

                      return (
                        <TouchableOpacity
                          key={idx}
                          style={btnStyle}
                          activeOpacity={0.85}
                          onPress={() => handleSelectOption(opt)}
                          disabled={puzzleAnswered}
                        >
                          <Text style={styles.optionText}>{opt}</Text>
                          {puzzleAnswered && isCorrect && <Text style={styles.checkIcon}>✅</Text>}
                        </TouchableOpacity>
                      );
                    })}
                  </View>

                  {/* Hint Toggle */}
                  {!puzzleAnswered && (
                    <TouchableOpacity
                      style={styles.hintBtn}
                      onPress={() => {
                        triggerHaptic('light');
                        setShowHint((v) => !v);
                      }}
                    >
                      <Text style={styles.hintBtnText}>
                        💡 {showHint ? workoutData.puzzle.hint : (isHindi ? 'संकेत चाहिए? यहाँ टैप करें' : 'Need a Hint? Tap here')}
                      </Text>
                    </TouchableOpacity>
                  )}

                  {/* Explanation feedback */}
                  {puzzleAnswered && (
                    <View style={styles.feedbackBox}>
                      <Text style={styles.feedbackTitle}>
                        {isPuzzleCorrect
                          ? (isHindi ? '🎉 शाबाश! बेहतरीन जवाब!' : '🎉 Brilliant Deduction!')
                          : (isHindi ? '💡 सीखने का अवसर!' : '💡 Learning Moment!')}
                      </Text>
                      <Text style={styles.feedbackDesc}>
                        {workoutData.puzzle.explanation}
                      </Text>

                      <TouchableOpacity
                        style={styles.nextStepBtn}
                        activeOpacity={0.88}
                        onPress={() => {
                          triggerHaptic('medium');
                          setCurrentStep(2);
                        }}
                      >
                        <Text style={styles.nextStepBtnText}>
                          {isHindi ? 'अगला: एसटीईएम लैब मिशन 🚀' : 'Next: STEM Lab Mission 🚀'}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              </View>
            )}

            {/* STEP 2: STEM EXPERIMENT MISSION */}
            {currentStep === 2 && (
              <View style={styles.stepBox}>
                <View style={styles.stepBadge}>
                  <Text style={styles.stepBadgeText}>STEP 2: STEM LAB MISSION OF THE DAY 🔬</Text>
                </View>

                <View style={styles.labMissionCard}>
                  <View style={styles.labMissionIconBox}>
                    <Text style={styles.labMissionEmoji}>{workoutData.featuredLabIcon}</Text>
                  </View>
                  <Text style={styles.labMissionTitle}>{workoutData.featuredLabTitle}</Text>
                  <Text style={styles.labMissionGoalLabel}>TODAY’S HANDS-ON TARGET:</Text>
                  <Text style={styles.labMissionGoal}>{workoutData.labDailyMission}</Text>

                  <View style={styles.labMissionActions}>
                    <TouchableOpacity
                      style={styles.launchLabBtn}
                      activeOpacity={0.85}
                      onPress={() => {
                        triggerHaptic('medium');
                        onClose();
                        onLaunchLab(workoutData.featuredLabId);
                      }}
                    >
                      <Text style={styles.launchLabBtnText}>Launch Experiment ▶</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={styles.markDoneBtn}
                      activeOpacity={0.85}
                      onPress={handleCompleteMission}
                    >
                      <Text style={styles.markDoneBtnText}>I Tested This! Next Step ✅</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}

            {/* STEP 3: SPEED REFLEX SPRINT */}
            {currentStep === 3 && (
              <View style={styles.stepBox}>
                <View style={styles.stepBadge}>
                  <Text style={styles.stepBadgeText}>STEP 3: 60s LIGHTNING REFLEX SPRINT ⚡</Text>
                </View>

                <View style={styles.sprintCard}>
                  <Text style={styles.sprintEmoji}>⚡⏱️</Text>
                  <Text style={styles.sprintTitle}>Sprint Challenge</Text>
                  <Text style={styles.sprintGoalText}>{workoutData.speedSprintGoal}</Text>

                  <TouchableOpacity
                    style={styles.startSprintBtn}
                    activeOpacity={0.88}
                    onPress={() => {
                      triggerHaptic('medium');
                      onClose();
                      onLaunchSpeedBrain();
                    }}
                  >
                    <Text style={styles.startSprintBtnText}>Launch 60s Rush ⚡</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.completeWorkoutBtn}
                    activeOpacity={0.85}
                    onPress={handleFinishWorkout}
                  >
                    <Text style={styles.completeWorkoutBtnText}>Claim Today’s Workout Rewards 🏆</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}

            {/* STEP 4: WORKOUT FINISHED CELEBRATION */}
            {currentStep === 4 && (
              <View style={styles.finishedBox}>
                <Text style={styles.celebrateEmoji}>🔥🦸‍♂️⭐</Text>
                <Text style={styles.finishedTitle}>DAILY BRAIN GYM COMPLETED!</Text>
                <Text style={styles.finishedSub}>
                  Day {workoutData.dayNumber} workout is sealed. You’re building the mind of a true Super Kid!
                </Text>

                <View style={styles.rewardPillsRow}>
                  <View style={styles.rewardPill}>
                    <Text style={styles.rewardPillVal}>+50 ⭐</Text>
                    <Text style={styles.rewardPillLabel}>Bonus Stars</Text>
                  </View>
                  <View style={styles.rewardPill}>
                    <Text style={styles.rewardPillVal}>+100 XP ⚡</Text>
                    <Text style={styles.rewardPillLabel}>Brain Power</Text>
                  </View>
                  <View style={styles.rewardPill}>
                    <Text style={styles.rewardPillVal}>🔥 Active</Text>
                    <Text style={styles.rewardPillLabel}>Daily Streak</Text>
                  </View>
                </View>

                <TouchableOpacity
                  style={styles.doneBtn}
                  activeOpacity={0.88}
                  onPress={onClose}
                >
                  <Text style={styles.doneBtnText}>Awesome! Back to Home 🏠</Text>
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
    borderColor: '#8B5CF6',
    overflow: 'hidden',
    ...SHADOWS.large,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    backgroundColor: '#FAF5FF',
    borderBottomWidth: 1.5,
    borderBottomColor: '#EDE9FE',
  },
  topBarLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  barEmoji: {
    fontSize: 24,
  },
  barTitle: {
    color: '#3B0764',
    fontSize: 16,
    fontWeight: '900',
  },
  barSub: {
    color: '#7C3AED',
    fontSize: 11,
    fontWeight: '700',
  },
  closeBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#EDE9FE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeText: {
    color: '#6B21A8',
    fontSize: 16,
    fontWeight: 'bold',
  },
  stepperRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    backgroundColor: '#F5F3FF',
    borderBottomWidth: 1,
    borderBottomColor: '#EDE9FE',
  },
  stepDot: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#E2E8F0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepDotActive: {
    backgroundColor: '#8B5CF6',
  },
  stepDotText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '900',
  },
  stepLine: {
    width: 44,
    height: 3,
    backgroundColor: '#E2E8F0',
    marginHorizontal: 4,
  },
  stepLineActive: {
    backgroundColor: '#8B5CF6',
  },
  scrollContent: {
    padding: SPACING.md,
  },
  stepBox: {
    alignItems: 'center',
  },
  stepBadge: {
    backgroundColor: '#F3E8FF',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: BORDER_RADIUS.full,
    borderWidth: 1.5,
    borderColor: '#C4B5FD',
    marginBottom: 12,
  },
  stepBadgeText: {
    color: '#6B21A8',
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  puzzleCard: {
    width: '100%',
    backgroundColor: '#FAF5FF',
    borderRadius: 20,
    padding: SPACING.md,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#DDD6FE',
  },
  puzzleVisual: {
    fontSize: 36,
    marginVertical: 4,
  },
  puzzleTitle: {
    color: '#3B0764',
    fontSize: 18,
    fontWeight: '900',
    textAlign: 'center',
  },
  puzzleQuestion: {
    color: '#4C1D95',
    fontSize: 13,
    textAlign: 'center',
    marginTop: 6,
    marginBottom: 16,
    lineHeight: 18,
    fontWeight: '600',
  },
  optionsCol: {
    width: '100%',
    gap: 8,
  },
  optionBtn: {
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
  optionText: {
    color: '#1E293B',
    fontSize: 14,
    fontWeight: '800',
  },
  checkIcon: {
    fontSize: 14,
  },
  hintBtn: {
    marginTop: 12,
    padding: 6,
  },
  hintBtnText: {
    color: '#D97706',
    fontSize: 12,
    fontWeight: '800',
    textAlign: 'center',
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
    fontSize: 13,
    fontWeight: '900',
    marginBottom: 4,
  },
  feedbackDesc: {
    color: '#15803D',
    fontSize: 12,
    lineHeight: 16,
    marginBottom: 10,
    fontWeight: '600',
  },
  nextStepBtn: {
    backgroundColor: '#8B5CF6',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#6D28D9',
  },
  nextStepBtnText: {
    color: '#FFF',
    fontSize: 13,
    fontWeight: '900',
  },
  labMissionCard: {
    width: '100%',
    backgroundColor: '#ECFDF5',
    borderRadius: 20,
    padding: SPACING.md,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#A7F3D0',
  },
  labMissionIconBox: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#34D399',
    marginVertical: 8,
  },
  labMissionEmoji: {
    fontSize: 32,
  },
  labMissionTitle: {
    color: '#064E3B',
    fontSize: 18,
    fontWeight: '900',
    textAlign: 'center',
  },
  labMissionGoalLabel: {
    color: '#059669',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
    marginTop: 10,
  },
  labMissionGoal: {
    color: '#047857',
    fontSize: 13,
    textAlign: 'center',
    marginTop: 4,
    marginBottom: 16,
    lineHeight: 18,
    fontWeight: '600',
  },
  labMissionActions: {
    width: '100%',
    gap: 10,
  },
  launchLabBtn: {
    backgroundColor: '#10B981',
    paddingVertical: 12,
    borderRadius: 14,
    alignItems: 'center',
    borderBottomWidth: 4,
    borderBottomColor: '#059669',
  },
  launchLabBtnText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '900',
  },
  markDoneBtn: {
    backgroundColor: '#F1F5F9',
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#CBD5E1',
  },
  markDoneBtnText: {
    color: '#475569',
    fontSize: 12,
    fontWeight: '700',
  },
  sprintCard: {
    width: '100%',
    backgroundColor: '#F0F9FF',
    borderRadius: 20,
    padding: SPACING.md,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#BAE6FD',
  },
  sprintEmoji: {
    fontSize: 40,
    marginVertical: 6,
  },
  sprintTitle: {
    color: '#0369A1',
    fontSize: 18,
    fontWeight: '900',
  },
  sprintGoalText: {
    color: '#0C4A6E',
    fontSize: 13,
    textAlign: 'center',
    marginVertical: 12,
    fontWeight: '600',
  },
  startSprintBtn: {
    width: '100%',
    backgroundColor: '#0284C7',
    paddingVertical: 12,
    borderRadius: 14,
    alignItems: 'center',
    marginBottom: 8,
    borderBottomWidth: 4,
    borderBottomColor: '#0369A1',
  },
  startSprintBtnText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '900',
  },
  completeWorkoutBtn: {
    width: '100%',
    backgroundColor: '#F59E0B',
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#D97706',
  },
  completeWorkoutBtnText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '800',
  },
  finishedBox: {
    alignItems: 'center',
    paddingVertical: SPACING.md,
  },
  celebrateEmoji: {
    fontSize: 48,
    marginBottom: 8,
  },
  finishedTitle: {
    color: '#1E293B',
    fontSize: 20,
    fontWeight: '900',
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  finishedSub: {
    color: '#64748B',
    fontSize: 13,
    textAlign: 'center',
    marginTop: 6,
    marginBottom: 16,
    lineHeight: 18,
    fontWeight: '600',
  },
  rewardPillsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    gap: 8,
    marginBottom: 20,
  },
  rewardPill: {
    flex: 1,
    backgroundColor: '#FFFBEB',
    paddingVertical: 10,
    borderRadius: 14,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FDE68A',
  },
  rewardPillVal: {
    color: '#B45309',
    fontSize: 16,
    fontWeight: '900',
  },
  rewardPillLabel: {
    color: '#92400E',
    fontSize: 10,
    fontWeight: '800',
    marginTop: 2,
    textTransform: 'uppercase',
  },
  doneBtn: {
    width: '100%',
    backgroundColor: '#8B5CF6',
    paddingVertical: 14,
    borderRadius: 16,
    alignItems: 'center',
    borderBottomWidth: 4,
    borderBottomColor: '#6D28D9',
  },
  doneBtnText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: '900',
  },
});
