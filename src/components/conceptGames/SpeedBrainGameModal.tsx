import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  Animated,
  Dimensions,
} from 'react-native';
import { COLORS, SPACING, BORDER_RADIUS, SHADOWS } from '../../constants/theme';
import { triggerHaptic } from '../../utils/haptics';
import { soundManager } from '../../utils/soundManager';
import { Grade } from '../../types';
import { useUserStore } from '../../store/useUserStore';

const { width } = Dimensions.get('window');

interface SpeedBrainGameModalProps {
  visible: boolean;
  onClose: () => void;
  userGrade: Grade;
  onEarnStars?: (stars: number) => void;
}

interface QuickQuestion {
  question: string;
  visual?: string;
  options: string[];
  correctAnswer: string;
  category: string;
}

export const SpeedBrainGameModal: React.FC<SpeedBrainGameModalProps> = ({
  visible,
  onClose,
  userGrade,
  onEarnStars,
}) => {
  const { addStars } = useUserStore();
  const [gameState, setGameState] = useState<'intro' | 'playing' | 'gameover'>('intro');
  const [timeLeft, setTimeLeft] = useState(60);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [maxCombo, setMaxCombo] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);

  // Animations
  const pulseAnim = useRef(new Animated.Value(1)).current;
  const comboScaleAnim = useRef(new Animated.Value(1)).current;

  // Question pool generation based on grade
  const getQuestionPool = (): QuickQuestion[] => {
    if (userGrade === 'LKG' || userGrade === 'UKG') {
      return [
        { question: 'Count the apples!', visual: '🍎 🍎 🍎', options: ['3', '4'], correctAnswer: '3', category: 'Counting' },
        { question: 'Which animal is BIGGER?', visual: '🐘 vs 🐭', options: ['Elephant', 'Mouse'], correctAnswer: 'Elephant', category: 'Logic' },
        { question: 'Count the stars!', visual: '⭐ ⭐ ⭐ ⭐', options: ['4', '5'], correctAnswer: '4', category: 'Counting' },
        { question: 'Which shape is a CIRCLE?', visual: '🔵 or 🔺', options: ['Circle', 'Triangle'], correctAnswer: 'Circle', category: 'Shapes' },
        { question: 'What comes next? 1, 2, 3, __', visual: '🔢', options: ['4', '5'], correctAnswer: '4', category: 'Sequence' },
        { question: 'Which is RED color?', visual: '🔴 or 🟢', options: ['Red', 'Green'], correctAnswer: 'Red', category: 'Colors' },
        { question: 'Count the balloons!', visual: '🎈 🎈', options: ['2', '3'], correctAnswer: '2', category: 'Counting' },
        { question: 'Which is HEAVIER?', visual: '🪨 Rock vs 🪶 Feather', options: ['Rock', 'Feather'], correctAnswer: 'Rock', category: 'Physics' },
        { question: 'What comes after 5?', visual: '1, 2, 3, 4, 5, __', options: ['6', '7'], correctAnswer: '6', category: 'Numbers' },
        { question: 'Which animal FLIES?', visual: '🦅 vs 🦁', options: ['Falcon', 'Lion'], correctAnswer: 'Falcon', category: 'Nature' },
      ];
    }

    if (userGrade === 1 || userGrade === 2) {
      return [
        { question: '5 + 4 = ?', visual: '➕', options: ['9', '8'], correctAnswer: '9', category: 'Addition' },
        { question: '10 - 3 = ?', visual: '➖', options: ['7', '6'], correctAnswer: '7', category: 'Subtraction' },
        { question: 'Which is greater?', visual: '🔢', options: ['58', '49'], correctAnswer: '58', category: 'Comparison' },
        { question: 'Next number: 2, 4, 6, __', visual: '⚡', options: ['8', '7'], correctAnswer: '8', category: 'Pattern' },
        { question: 'How many sides does a triangle have?', visual: '🔺', options: ['3', '4'], correctAnswer: '3', category: 'Geometry' },
        { question: '6 + 7 = ?', visual: '➕', options: ['13', '14'], correctAnswer: '13', category: 'Addition' },
        { question: 'Half of 10 is:', visual: '🍕', options: ['5', '6'], correctAnswer: '5', category: 'Fractions' },
        { question: '15 - 8 = ?', visual: '➖', options: ['7', '8'], correctAnswer: '7', category: 'Subtraction' },
        { question: '8 + 8 = ?', visual: '➕', options: ['16', '18'], correctAnswer: '16', category: 'Double' },
        { question: 'Minutes in 1 hour:', visual: '🕒', options: ['60', '100'], correctAnswer: '60', category: 'Time' },
        { question: 'Next number: 5, 10, 15, __', visual: '🏃', options: ['20', '25'], correctAnswer: '20', category: 'Skip Count' },
        { question: 'Is 14 Even or Odd?', visual: '⚖️', options: ['Even', 'Odd'], correctAnswer: 'Even', category: 'Number Sense' },
      ];
    }

    if (userGrade === 3 || userGrade === 4) {
      return [
        { question: '7 × 6 = ?', visual: '✖️', options: ['42', '48'], correctAnswer: '42', category: 'Tables' },
        { question: '8 × 8 = ?', visual: '✖️', options: ['64', '56'], correctAnswer: '64', category: 'Tables' },
        { question: '1 kilogram = ? grams', visual: '⚖️', options: ['1000g', '100g'], correctAnswer: '1000g', category: 'Metrics' },
        { question: '1/2 of 80 = ?', visual: '🍕', options: ['40', '30'], correctAnswer: '40', category: 'Fractions' },
        { question: '45 ÷ 5 = ?', visual: '➗', options: ['9', '8'], correctAnswer: '9', category: 'Division' },
        { question: 'Perimeter of square with side 6cm:', visual: '📐', options: ['24cm', '36cm'], correctAnswer: '24cm', category: 'Perimeter' },
        { question: '9 × 4 = ?', visual: '✖️', options: ['36', '38'], correctAnswer: '36', category: 'Tables' },
        { question: '72 ÷ 8 = ?', visual: '➗', options: ['9', '7'], correctAnswer: '9', category: 'Division' },
        { question: 'Roman numeral for 10:', visual: '🏛️', options: ['X', 'V'], correctAnswer: 'X', category: 'Roman' },
        { question: 'Which fraction is larger: 1/2 or 1/4?', visual: '🍕', options: ['1/2', '1/4'], correctAnswer: '1/2', category: 'Fractions' },
        { question: '12 × 5 = ?', visual: '✖️', options: ['60', '50'], correctAnswer: '60', category: 'Tables' },
        { question: 'Sides in a Pentagon:', visual: '⬟', options: ['5', '6'], correctAnswer: '5', category: 'Geometry' },
      ];
    }

    // Class 5 & 6
    return [
      { question: '(-5) + 9 = ?', visual: '❄️', options: ['4', '-4'], correctAnswer: '4', category: 'Integers' },
      { question: 'Right angle measures:', visual: '📐', options: ['90°', '180°'], correctAnswer: '90°', category: 'Angles' },
      { question: '15 × 6 = ?', visual: '✖️', options: ['90', '80'], correctAnswer: '90', category: 'Multiplication' },
      { question: 'Square root of 64:', visual: '⚡', options: ['8', '7'], correctAnswer: '8', category: 'Algebra' },
      { question: '(-4) × (-6) = ?', visual: '🧲', options: ['24', '-24'], correctAnswer: '24', category: 'Integers' },
      { question: 'Sum of angles in a triangle:', visual: '🔺', options: ['180°', '360°'], correctAnswer: '180°', category: 'Geometry' },
      { question: '0.50 as a simplified fraction:', visual: '🍕', options: ['1/2', '1/4'], correctAnswer: '1/2', category: 'Decimals' },
      { question: 'Straight angle measures:', visual: '➖', options: ['180°', '90°'], correctAnswer: '180°', category: 'Angles' },
      { question: 'Opposite poles of magnet:', visual: '🧲', options: ['Attract', 'Repel'], correctAnswer: 'Attract', category: 'Science' },
      { question: '12 × 12 = ?', visual: '✖️', options: ['144', '124'], correctAnswer: '144', category: 'Tables' },
      { question: 'Complement of 40° angle:', visual: '⚡', options: ['50°', '60°'], correctAnswer: '50°', category: 'Geometry' },
      { question: 'Light prism splits white into how many colors?', visual: '🌈', options: ['7', '5'], correctAnswer: '7', category: 'Optics' },
    ];
  };

  const [questions, setQuestions] = useState<QuickQuestion[]>([]);

  useEffect(() => {
    if (visible) {
      resetGame();
    }
  }, [visible, userGrade]);

  const resetGame = () => {
    const pool = getQuestionPool();
    // Shuffle pool
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    setQuestions(shuffled);
    setCurrentQIndex(0);
    setTimeLeft(60);
    setScore(0);
    setCombo(0);
    setMaxCombo(0);
    setTotalAnswered(0);
    setCorrectCount(0);
    setFeedback(null);
    setGameState('intro');
  };

  const startGame = () => {
    soundManager.playLaser();
    triggerHaptic('medium');
    setGameState('playing');
  };

  // Timer countdown
  useEffect(() => {
    let timer: any = null;
    if (gameState === 'playing') {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            endGame();
            return 0;
          }
          if (prev <= 10) {
            // Heartbeat ticking in last 10s
            triggerHaptic('light');
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [gameState]);

  const endGame = () => {
    soundManager.playFanfare();
    triggerHaptic('success');
    setGameState('gameover');
    addStars(50);
    if (onEarnStars) onEarnStars(50);
  };

  const getComboMultiplier = (c: number): number => {
    if (c >= 12) return 10;
    if (c >= 8) return 5;
    if (c >= 5) return 3;
    if (c >= 2) return 2;
    return 1;
  };

  const getComboBadge = (c: number): { label: string; color: string } => {
    if (c >= 12) return { label: '👑 10x SUPER KID GODLIKE!', color: '#F59E0B' };
    if (c >= 8) return { label: '🚀 5x QUANTUM SPEED!', color: '#06B6D4' };
    if (c >= 5) return { label: '🔥 3x MEGA BRAIN!', color: '#EF4444' };
    if (c >= 2) return { label: '⚡ 2x SUPER SPEED!', color: '#EAB308' };
    return { label: '1x FOCUS', color: '#64748B' };
  };

  const handleSelectAnswer = (selected: string) => {
    if (feedback !== null || gameState !== 'playing') return;

    const currentQ = questions[currentQIndex % questions.length];
    const isCorrect = selected === currentQ.correctAnswer;
    setTotalAnswered((prev) => prev + 1);

    if (isCorrect) {
      soundManager.playCorrect();
      triggerHaptic('medium');
      const newCombo = combo + 1;
      setCombo(newCombo);
      if (newCombo > maxCombo) setMaxCombo(newCombo);

      const multiplier = getComboMultiplier(newCombo);
      const points = 10 * multiplier;
      setScore((s) => s + points);
      setCorrectCount((c) => c + 1);
      setFeedback('correct');

      // Animate combo scale
      Animated.sequence([
        Animated.timing(comboScaleAnim, {
          toValue: 1.3,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(comboScaleAnim, {
          toValue: 1,
          duration: 150,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      soundManager.playIncorrect();
      triggerHaptic('error');
      setCombo(0);
      setFeedback('wrong');
    }

    setTimeout(() => {
      setFeedback(null);
      setCurrentQIndex((idx) => (idx + 1) % questions.length);
    }, 400);
  };

  const currentQ = questions[currentQIndex % (questions.length || 1)] || {
    question: 'Loading...',
    visual: '⚡',
    options: ['A', 'B'],
    correctAnswer: 'A',
    category: 'STEM',
  };

  const comboBadge = getComboBadge(combo);
  const accuracy =
    totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 100;

  return (
    <Modal visible={visible} animationType="slide" transparent onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          {/* Top Bar */}
          <View style={styles.topBar}>
            <View style={styles.topBarLeft}>
              <Text style={styles.lightningIcon}>⚡</Text>
              <Text style={styles.topBarTitle}>Super Kid Brain Booster</Text>
            </View>
            <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
              <Text style={styles.closeText}>✕</Text>
            </TouchableOpacity>
          </View>

          {/* INTRO SCREEN */}
          {gameState === 'intro' && (
            <View style={styles.introBox}>
              <View style={styles.heroGlowBox}>
                <Text style={styles.heroEmoji}>🦸⚡</Text>
              </View>

              <Text style={styles.introTitle}>60-Second Lightning Reflex</Text>
              <Text style={styles.introSubtitle}>
                60 सेकंड में अपने सुपर-किड दिमाग की स्पीड टेस्ट करें!
              </Text>

              <View style={styles.rulesList}>
                <View style={styles.ruleItem}>
                  <Text style={styles.ruleEmoji}>⚡</Text>
                  <Text style={styles.ruleText}>
                    Quick-fire Math & STEM questions (60s non-stop)
                  </Text>
                </View>
                <View style={styles.ruleItem}>
                  <Text style={styles.ruleEmoji}>🔥</Text>
                  <Text style={styles.ruleText}>
                    Answer fast to build 2x, 3x, 5x & 10x Combos!
                  </Text>
                </View>
                <View style={styles.ruleItem}>
                  <Text style={styles.ruleEmoji}>⭐</Text>
                  <Text style={styles.ruleText}>
                    Win +50 Bonus Stars & Official Super Kid Ranking!
                  </Text>
                </View>
              </View>

              <TouchableOpacity
                style={styles.startBtn}
                activeOpacity={0.88}
                onPress={startGame}
              >
                <Text style={styles.startBtnText}>START 60s RUSH! 🚀</Text>
              </TouchableOpacity>
            </View>
          )}

          {/* PLAYING SCREEN */}
          {gameState === 'playing' && (
            <View style={styles.playBox}>
              {/* Stats Bar */}
              <View style={styles.statsBar}>
                {/* Timer Box */}
                <View
                  style={[
                    styles.timerBox,
                    timeLeft <= 10 && styles.timerBoxUrgent,
                  ]}
                >
                  <Text style={styles.timerIcon}>⏱️</Text>
                  <Text
                    style={[
                      styles.timerText,
                      timeLeft <= 10 && styles.timerTextUrgent,
                    ]}
                  >
                    {timeLeft}s
                  </Text>
                </View>

                {/* Combo Badge */}
                <Animated.View
                  style={[
                    styles.comboBadgeBox,
                    {
                      borderColor: comboBadge.color,
                      transform: [{ scale: comboScaleAnim }],
                    },
                  ]}
                >
                  <Text style={[styles.comboBadgeText, { color: comboBadge.color }]}>
                    {comboBadge.label}
                  </Text>
                </Animated.View>

                {/* Score Box */}
                <View style={styles.scoreBox}>
                  <Text style={styles.scoreLabel}>SCORE</Text>
                  <Text style={styles.scoreVal}>{score}</Text>
                </View>
              </View>

              {/* Countdown Progress Line */}
              <View style={styles.progressLineBg}>
                <View
                  style={[
                    styles.progressLineFill,
                    {
                      width: `${(timeLeft / 60) * 100}%`,
                      backgroundColor:
                        timeLeft > 25 ? '#10B981' : timeLeft > 10 ? '#F59E0B' : '#EF4444',
                    },
                  ]}
                />
              </View>

              {/* Question Card */}
              <View
                style={[
                  styles.questionCard,
                  feedback === 'correct' && styles.cardCorrect,
                  feedback === 'wrong' && styles.cardWrong,
                ]}
              >
                <View style={styles.categoryPill}>
                  <Text style={styles.categoryText}>{currentQ.category}</Text>
                </View>

                {currentQ.visual && (
                  <Text style={styles.questionVisual}>{currentQ.visual}</Text>
                )}

                <Text style={styles.questionTitle}>{currentQ.question}</Text>
              </View>

              {/* Big Responsive Options Buttons */}
              <View style={styles.optionsRow}>
                {currentQ.options.map((opt, idx) => (
                  <TouchableOpacity
                    key={idx}
                    style={[
                      styles.optionButton,
                      feedback === 'correct' &&
                        opt === currentQ.correctAnswer &&
                        styles.optCorrect,
                      feedback === 'wrong' &&
                        opt !== currentQ.correctAnswer &&
                        styles.optWrong,
                    ]}
                    activeOpacity={0.85}
                    onPress={() => handleSelectAnswer(opt)}
                  >
                    <Text style={styles.optionButtonText}>{opt}</Text>
                  </TouchableOpacity>
                ))}
              </View>

              <View style={styles.speedHintBox}>
                <Text style={styles.speedHintText}>
                  💡 Tip: The faster you answer correctly, the bigger your combo!
                </Text>
              </View>
            </View>
          )}

          {/* GAME OVER SCREEN */}
          {gameState === 'gameover' && (
            <View style={styles.gameoverBox}>
              <Text style={styles.trophyEmoji}>🏆⚡</Text>
              <Text style={styles.gameoverTitle}>SUPER KID AGILITY REPORT</Text>
              <Text style={styles.tierBadge}>🌟 S-TIER SUPER KID GENIUS 🌟</Text>

              {/* Results Grid */}
              <View style={styles.resultsGrid}>
                <View style={styles.resultItem}>
                  <Text style={styles.resultVal}>{score}</Text>
                  <Text style={styles.resultLabel}>Total Score</Text>
                </View>
                <View style={styles.resultItem}>
                  <Text style={styles.resultVal}>{maxCombo}x</Text>
                  <Text style={styles.resultLabel}>Max Combo</Text>
                </View>
                <View style={styles.resultItem}>
                  <Text style={styles.resultVal}>{totalAnswered}</Text>
                  <Text style={styles.resultLabel}>Questions</Text>
                </View>
                <View style={styles.resultItem}>
                  <Text style={styles.resultVal}>{accuracy}%</Text>
                  <Text style={styles.resultLabel}>Accuracy</Text>
                </View>
              </View>

              {/* Reward Banner */}
              <View style={styles.rewardBanner}>
                <Text style={styles.rewardStars}>⭐ +50 STARS ADDED!</Text>
                <Text style={styles.rewardSub}>
                  Your brain speed is in the top 1% of Junior Scientists! 🚀
                </Text>
              </View>

              {/* Action Buttons */}
              <View style={styles.gameOverActions}>
                <TouchableOpacity
                  style={styles.playAgainBtn}
                  activeOpacity={0.88}
                  onPress={startGame}
                >
                  <Text style={styles.playAgainText}>Play Again ⚡</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.doneBtn}
                  activeOpacity={0.85}
                  onPress={onClose}
                >
                  <Text style={styles.doneBtnText}>Back to Hub 🔬</Text>
                </TouchableOpacity>
              </View>
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
    backgroundColor: 'rgba(15, 23, 42, 0.65)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '92%',
    maxHeight: '90%',
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    borderWidth: 2.5,
    borderColor: '#0284C7',
    overflow: 'hidden',
    ...SHADOWS.large,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    backgroundColor: '#F0F9FF',
    borderBottomWidth: 1.5,
    borderBottomColor: '#BAE6FD',
  },
  topBarLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  lightningIcon: {
    fontSize: 20,
  },
  topBarTitle: {
    color: '#0369A1',
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  closeBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#E0F2FE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeText: {
    color: '#0284C7',
    fontSize: 16,
    fontWeight: 'bold',
  },

  // INTRO
  introBox: {
    padding: SPACING.lg,
    alignItems: 'center',
  },
  heroGlowBox: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#E0F2FE',
    borderWidth: 2.5,
    borderColor: '#38BDF8',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: SPACING.sm,
    ...SHADOWS.medium,
  },
  heroEmoji: {
    fontSize: 44,
  },
  introTitle: {
    color: '#0C4A6E',
    fontSize: 20,
    fontWeight: '900',
    textAlign: 'center',
    marginTop: 8,
  },
  introSubtitle: {
    color: '#0369A1',
    fontSize: 13,
    textAlign: 'center',
    marginTop: 4,
    marginBottom: 16,
    fontWeight: '600',
  },
  rulesList: {
    width: '100%',
    backgroundColor: '#F0F9FF',
    borderRadius: 16,
    padding: SPACING.md,
    gap: 10,
    marginBottom: 20,
    borderWidth: 1.5,
    borderColor: '#BAE6FD',
  },
  ruleItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  ruleEmoji: {
    fontSize: 18,
  },
  ruleText: {
    color: '#075985',
    fontSize: 12,
    fontWeight: '700',
    flex: 1,
  },
  startBtn: {
    width: '100%',
    backgroundColor: '#0284C7',
    paddingVertical: 14,
    borderRadius: 16,
    alignItems: 'center',
    borderBottomWidth: 4,
    borderBottomColor: '#0369A1',
    ...SHADOWS.medium,
  },
  startBtnText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 1,
  },

  // PLAYING
  playBox: {
    padding: SPACING.md,
    alignItems: 'center',
  },
  statsBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  timerBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F9FF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    gap: 4,
    borderWidth: 1.5,
    borderColor: '#BAE6FD',
  },
  timerBoxUrgent: {
    borderColor: '#EF4444',
    backgroundColor: '#FEF2F2',
  },
  timerIcon: {
    fontSize: 14,
  },
  timerText: {
    color: '#0284C7',
    fontWeight: '900',
    fontSize: 14,
  },
  timerTextUrgent: {
    color: '#EF4444',
  },
  comboBadgeBox: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: BORDER_RADIUS.full,
    borderWidth: 1.5,
    backgroundColor: '#FFFBEB',
    borderColor: '#F59E0B',
  },
  comboBadgeText: {
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  scoreBox: {
    alignItems: 'flex-end',
  },
  scoreLabel: {
    color: '#64748B',
    fontSize: 9,
    fontWeight: '800',
  },
  scoreVal: {
    color: '#D97706',
    fontSize: 18,
    fontWeight: '900',
  },
  progressLineBg: {
    width: '100%',
    height: 6,
    backgroundColor: '#E2E8F0',
    borderRadius: 3,
    overflow: 'hidden',
    marginBottom: 16,
  },
  progressLineFill: {
    height: '100%',
    borderRadius: 3,
  },
  questionCard: {
    width: '100%',
    backgroundColor: '#F8FAFC',
    borderRadius: 20,
    padding: SPACING.md,
    alignItems: 'center',
    minHeight: 140,
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#E2E8F0',
    ...SHADOWS.card,
  },
  cardCorrect: {
    borderColor: '#10B981',
    backgroundColor: '#ECFDF5',
  },
  cardWrong: {
    borderColor: '#EF4444',
    backgroundColor: '#FEF2F2',
  },
  categoryPill: {
    backgroundColor: '#E0F2FE',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: BORDER_RADIUS.full,
    marginBottom: 8,
  },
  categoryText: {
    color: '#0284C7',
    fontSize: 10,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  questionVisual: {
    fontSize: 32,
    marginVertical: 4,
  },
  questionTitle: {
    color: '#0F172A',
    fontSize: 18,
    fontWeight: '800',
    textAlign: 'center',
    marginTop: 4,
  },
  optionsRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    gap: 12,
    marginTop: 18,
  },
  optionButton: {
    flex: 1,
    backgroundColor: '#0284C7',
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 4,
    borderBottomColor: '#0369A1',
    ...SHADOWS.medium,
  },
  optCorrect: {
    backgroundColor: '#10B981',
    borderBottomColor: '#059669',
  },
  optWrong: {
    backgroundColor: '#EF4444',
    borderBottomColor: '#DC2626',
  },
  optionButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '900',
  },
  speedHintBox: {
    marginTop: 16,
  },
  speedHintText: {
    color: '#64748B',
    fontSize: 11,
    textAlign: 'center',
    fontStyle: 'italic',
    fontWeight: '600',
  },

  // GAME OVER
  gameoverBox: {
    padding: SPACING.md,
    alignItems: 'center',
  },
  trophyEmoji: {
    fontSize: 48,
    marginTop: 6,
  },
  gameoverTitle: {
    color: '#0F172A',
    fontSize: 20,
    fontWeight: '900',
    letterSpacing: 0.5,
    marginTop: 6,
  },
  tierBadge: {
    color: '#D97706',
    fontSize: 14,
    fontWeight: '900',
    marginTop: 4,
  },
  resultsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: '#F0F9FF',
    borderRadius: 18,
    padding: SPACING.md,
    marginVertical: 16,
    gap: 8,
    borderWidth: 1.5,
    borderColor: '#BAE6FD',
  },
  resultItem: {
    width: '46%',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#BAE6FD',
  },
  resultVal: {
    color: '#0284C7',
    fontSize: 20,
    fontWeight: '900',
  },
  resultLabel: {
    color: '#0369A1',
    fontSize: 10,
    fontWeight: '800',
    marginTop: 2,
    textTransform: 'uppercase',
  },
  rewardBanner: {
    backgroundColor: '#FFFBEB',
    borderWidth: 2,
    borderColor: '#F59E0B',
    borderRadius: 14,
    padding: 12,
    width: '100%',
    alignItems: 'center',
    marginBottom: 16,
  },
  rewardStars: {
    color: '#B45309',
    fontSize: 16,
    fontWeight: '900',
  },
  rewardSub: {
    color: '#92400E',
    fontSize: 11,
    textAlign: 'center',
    marginTop: 2,
    fontWeight: '600',
  },
  gameOverActions: {
    width: '100%',
    gap: 10,
  },
  playAgainBtn: {
    backgroundColor: '#0284C7',
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
    borderBottomWidth: 4,
    borderBottomColor: '#0369A1',
    ...SHADOWS.medium,
  },
  playAgainText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: '900',
  },
  doneBtn: {
    backgroundColor: '#F1F5F9',
    paddingVertical: 12,
    borderRadius: 14,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#CBD5E1',
  },
  doneBtnText: {
    color: '#475569',
    fontSize: 14,
    fontWeight: '700',
  },
});
