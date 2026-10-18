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
import { Grade } from '../../types';
import { getDailyWorkoutForDate, DailyWorkoutData } from '../../data/cognitiveEngine';
import { useUserStore, getTodayDateString } from '../../store/useUserStore';

interface DailyBrainGymModalProps {
  visible: boolean;
  onClose: () => void;
  userGrade: Grade;
  onLaunchLab: (labId: string) => void;
  onLaunchSpeedBrain: () => void;
}

export const DailyBrainGymModal: React.FC<DailyBrainGymModalProps> = ({
  visible,
  onClose,
  userGrade,
  onLaunchLab,
  onLaunchSpeedBrain,
}) => {
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
                <Text style={styles.barTitle}>Daily Super Kid Brain Gym</Text>
                <Text style={styles.barSub}>
                  Day {workoutData.dayNumber} of 365 • 3-Step Daily Workout
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
                  <Text style={styles.stepBadgeText}>STEP 1: LOGIC PUZZLE OF THE DAY 🧩</Text>
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
                        💡 {showHint ? workoutData.puzzle.hint : 'Need a Hint? Tap here'}
                      </Text>
                    </TouchableOpacity>
                  )}

                  {/* Explanation feedback */}
                  {puzzleAnswered && (
                    <View style={styles.feedbackBox}>
                      <Text style={styles.feedbackTitle}>
                        {isPuzzleCorrect ? '🎉 Brilliant Deduction!' : '💡 Learning Moment!'}
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
                        <Text style={styles.nextStepBtnText}>Next: STEM Lab Mission 🚀</Text>
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
    backgroundColor: 'rgba(5, 5, 20, 0.92)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '94%',
    maxHeight: '92%',
    backgroundColor: '#0F172A',
    borderRadius: BORDER_RADIUS.xl,
    borderWidth: 2,
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
    backgroundColor: '#1E293B',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(139, 92, 246, 0.3)',
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
    color: '#FFF',
    fontSize: 15,
    fontWeight: '900',
  },
  barSub: {
    color: '#A78BFA',
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
  stepperRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    backgroundColor: 'rgba(30, 41, 59, 0.6)',
  },
  stepDot: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#334155',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepDotActive: {
    backgroundColor: '#8B5CF6',
  },
  stepDotText: {
    color: '#FFF',
    fontSize: 11,
    fontWeight: '900',
  },
  stepLine: {
    width: 40,
    height: 3,
    backgroundColor: '#334155',
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
    backgroundColor: 'rgba(139, 92, 246, 0.2)',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: BORDER_RADIUS.full,
    borderWidth: 1,
    borderColor: '#8B5CF6',
    marginBottom: 12,
  },
  stepBadgeText: {
    color: '#C4B5FD',
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  puzzleCard: {
    width: '100%',
    backgroundColor: '#1E293B',
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.md,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#334155',
  },
  puzzleVisual: {
    fontSize: 36,
    marginVertical: 4,
  },
  puzzleTitle: {
    color: '#F8FAFC',
    fontSize: 18,
    fontWeight: '900',
    textAlign: 'center',
  },
  puzzleQuestion: {
    color: '#CBD5E1',
    fontSize: 13,
    textAlign: 'center',
    marginTop: 6,
    marginBottom: 16,
    lineHeight: 18,
  },
  optionsCol: {
    width: '100%',
    gap: 8,
  },
  optionBtn: {
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
  optionText: {
    color: '#F8FAFC',
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
    color: '#FACC15',
    fontSize: 11,
    fontWeight: '700',
    textAlign: 'center',
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
    color: '#FDE047',
    fontSize: 13,
    fontWeight: '900',
    marginBottom: 4,
  },
  feedbackDesc: {
    color: '#CBD5E1',
    fontSize: 12,
    lineHeight: 16,
    marginBottom: 10,
  },
  nextStepBtn: {
    backgroundColor: '#8B5CF6',
    paddingVertical: 10,
    borderRadius: BORDER_RADIUS.md,
    alignItems: 'center',
  },
  nextStepBtnText: {
    color: '#FFF',
    fontSize: 13,
    fontWeight: '900',
  },
  labMissionCard: {
    width: '100%',
    backgroundColor: '#1E293B',
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.md,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#334155',
  },
  labMissionIconBox: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#0F172A',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#10B981',
    marginVertical: 8,
  },
  labMissionEmoji: {
    fontSize: 32,
  },
  labMissionTitle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '900',
    textAlign: 'center',
  },
  labMissionGoalLabel: {
    color: '#10B981',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
    marginTop: 10,
  },
  labMissionGoal: {
    color: '#CBD5E1',
    fontSize: 13,
    textAlign: 'center',
    marginTop: 4,
    marginBottom: 16,
    lineHeight: 18,
  },
  labMissionActions: {
    width: '100%',
    gap: 8,
  },
  launchLabBtn: {
    backgroundColor: '#10B981',
    paddingVertical: 12,
    borderRadius: BORDER_RADIUS.md,
    alignItems: 'center',
  },
  launchLabBtnText: {
    color: '#022C22',
    fontSize: 14,
    fontWeight: '900',
  },
  markDoneBtn: {
    backgroundColor: '#334155',
    paddingVertical: 10,
    borderRadius: BORDER_RADIUS.md,
    alignItems: 'center',
  },
  markDoneBtnText: {
    color: '#E2E8F0',
    fontSize: 12,
    fontWeight: '700',
  },
  sprintCard: {
    width: '100%',
    backgroundColor: '#1E293B',
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.md,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#334155',
  },
  sprintEmoji: {
    fontSize: 40,
    marginVertical: 6,
  },
  sprintTitle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '900',
  },
  sprintGoalText: {
    color: '#CBD5E1',
    fontSize: 13,
    textAlign: 'center',
    marginVertical: 12,
  },
  startSprintBtn: {
    width: '100%',
    backgroundColor: '#0284C7',
    paddingVertical: 12,
    borderRadius: BORDER_RADIUS.md,
    alignItems: 'center',
    marginBottom: 8,
  },
  startSprintBtnText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '900',
  },
  completeWorkoutBtn: {
    width: '100%',
    backgroundColor: '#D97706',
    paddingVertical: 10,
    borderRadius: BORDER_RADIUS.md,
    alignItems: 'center',
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
    color: '#F8FAFC',
    fontSize: 18,
    fontWeight: '900',
    textAlign: 'center',
    letterSpacing: 1,
  },
  finishedSub: {
    color: '#94A3B8',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 6,
    marginBottom: 16,
    lineHeight: 18,
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
    backgroundColor: '#1E293B',
    paddingVertical: 10,
    borderRadius: BORDER_RADIUS.md,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#334155',
  },
  rewardPillVal: {
    color: '#FACC15',
    fontSize: 15,
    fontWeight: '900',
  },
  rewardPillLabel: {
    color: '#94A3B8',
    fontSize: 9,
    fontWeight: '700',
    marginTop: 2,
  },
  doneBtn: {
    width: '100%',
    backgroundColor: '#8B5CF6',
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
