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
import { useUserStore } from '../../store/useUserStore';
import { SpeakerButton } from '../common/SpeakerButton';
import { Grade } from '../../types';

interface BalloonPopGameModalProps {
  visible: boolean;
  onClose: () => void;
  grade: Grade;
}

interface BalloonOption {
  id: string;
  text: string;
  isCorrect: boolean;
  color: string;
  xOffset: number; // Horizontal position
}

interface GameRound {
  prompt: string;
  options: BalloonOption[];
}

const BALLOON_COLORS = [
  '#EF4444', // Red
  '#3B82F6', // Blue
  '#10B981', // Green
  '#F59E0B', // Amber
  '#8B5CF6', // Purple
  '#EC4899', // Pink
];

// Generates educational challenges suited for the child's grade
const generateChallenge = (grade: Grade, roundNum: number): GameRound => {
  const isKindergarten = grade === 'LKG' || grade === 'UKG';
  const isLowerPrimary = grade === 1 || grade === 2;

  if (isKindergarten) {
    const kType = roundNum % 4;
    if (kType === 0) {
      // Big vs Small, Tall vs Short
      const pairs = [
        { q: '🎈 Pop the BIG elephant! 🐘', a: '🐘 Big', d: ['🐭 Tiny', '🐜 Mini', '🐤 Small'] },
        { q: '🎈 Pop the TINY mouse! 🐭', a: '🐭 Tiny', d: ['🐘 Huge', '🦁 Big', '🐻 Giant'] },
        { q: '🎈 Pop the TALL giraffe! 🦒', a: '🦒 Tall', d: ['🐢 Short', '🐇 Tiny', '🐥 Mini'] },
        { q: '🎈 Pop the TALL tree! 🌲', a: '🌲 Tall', d: ['🌱 Short', '🍄 Tiny', '🌿 Mini'] },
      ];
      const item = pairs[Math.floor(Math.random() * pairs.length)];
      const all = [item.a, ...item.d].sort(() => 0.5 - Math.random());
      return {
        prompt: item.q,
        options: all.map((text, idx) => ({
          id: `opt_${idx}_${roundNum}`,
          text,
          isCorrect: text === item.a,
          color: BALLOON_COLORS[idx % BALLOON_COLORS.length],
          xOffset: (idx - 1.5) * 65,
        })),
      };
    } else if (kType === 1) {
      // Shapes
      const shapes = [
        { q: '🎈 Pop the CIRCLE! 🔴', a: '🔴 Circle', d: ['🔺 Triangle', '🟦 Square', '⭐ Star'] },
        { q: '🎈 Pop the STAR! ⭐', a: '⭐ Star', d: ['🔴 Circle', '🔺 Triangle', '🟦 Square'] },
        { q: '🎈 Pop the TRIANGLE! 🔺', a: '🔺 Triangle', d: ['🔴 Circle', '🟦 Square', '🌙 Moon'] },
        { q: '🎈 Pop the SQUARE! 🟦', a: '🟦 Square', d: ['🔴 Circle', '🔺 Triangle', '⭐ Star'] },
      ];
      const item = shapes[Math.floor(Math.random() * shapes.length)];
      const all = [item.a, ...item.d].sort(() => 0.5 - Math.random());
      return {
        prompt: item.q,
        options: all.map((text, idx) => ({
          id: `opt_${idx}_${roundNum}`,
          text,
          isCorrect: text === item.a,
          color: BALLOON_COLORS[idx % BALLOON_COLORS.length],
          xOffset: (idx - 1.5) * 65,
        })),
      };
    } else if (kType === 2) {
      // Numbers 1 to 5
      const nums = [1, 2, 3, 4, 5];
      const target = nums[Math.floor(Math.random() * nums.length)];
      const distractors = nums.filter((n) => n !== target).sort(() => 0.5 - Math.random()).slice(0, 3);
      const all = [target, ...distractors].sort(() => 0.5 - Math.random());
      return {
        prompt: `🎈 Pop the Number "${target}"!`,
        options: all.map((num, idx) => ({
          id: `opt_${idx}_${roundNum}`,
          text: String(num),
          isCorrect: num === target,
          color: BALLOON_COLORS[idx % BALLOON_COLORS.length],
          xOffset: (idx - 1.5) * 65,
        })),
      };
    } else {
      // Letters
      const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'M', 'P', 'S', 'T'];
      const target = letters[Math.floor(Math.random() * letters.length)];
      const distractors = letters.filter((l) => l !== target).sort(() => 0.5 - Math.random()).slice(0, 3);
      const all = [target, ...distractors].sort(() => 0.5 - Math.random());

      return {
        prompt: `🎈 Pop the letter "${target}"!`,
        options: all.map((item, idx) => ({
          id: `opt_${idx}_${roundNum}`,
          text: item,
          isCorrect: item === target,
          color: BALLOON_COLORS[idx % BALLOON_COLORS.length],
          xOffset: (idx - 1.5) * 65,
        })),
      };
    }
  }

  if (isLowerPrimary) {
    const isAddition = Math.random() > 0.5;
    if (isAddition) {
      const a = Math.floor(Math.random() * 8) + 2;
      const b = Math.floor(Math.random() * 8) + 1;
      const correct = a + b;
      const d1 = correct + 1;
      const d2 = Math.max(1, correct - 2);
      const d3 = correct + 2;
      const all = [correct, d1, d2, d3].sort(() => 0.5 - Math.random());

      return {
        prompt: `🎈 Pop: ${a} + ${b} = ?`,
        options: all.map((val, idx) => ({
          id: `opt_${idx}_${roundNum}`,
          text: String(val),
          isCorrect: val === correct,
          color: BALLOON_COLORS[idx % BALLOON_COLORS.length],
          xOffset: (idx - 1.5) * 65,
        })),
      };
    } else {
      const a = Math.floor(Math.random() * 10) + 10;
      const b = Math.floor(Math.random() * 8) + 1;
      const correct = a - b;
      const d1 = correct + 1;
      const d2 = Math.max(1, correct - 1);
      const d3 = correct + 2;
      const all = [correct, d1, d2, d3].sort(() => 0.5 - Math.random());

      return {
        prompt: `🎈 Pop: ${a} - ${b} = ?`,
        options: all.map((val, idx) => ({
          id: `opt_${idx}_${roundNum}`,
          text: String(val),
          isCorrect: val === correct,
          color: BALLOON_COLORS[idx % BALLOON_COLORS.length],
          xOffset: (idx - 1.5) * 65,
        })),
      };
    }
  }

  // Class 3 to 6: Fast Multiplication, Division, Word challenges
  const type = Math.floor(Math.random() * 3);
  if (type === 0) {
    // Multiplication
    const a = Math.floor(Math.random() * 9) + 4;
    const b = Math.floor(Math.random() * 9) + 3;
    const correct = a * b;
    const d1 = correct + a;
    const d2 = correct - b;
    const d3 = correct + 10;
    const all = [correct, d1, d2, d3].sort(() => 0.5 - Math.random());

    return {
      prompt: `🎈 Pop: ${a} × ${b} = ?`,
      options: all.map((val, idx) => ({
        id: `opt_${idx}_${roundNum}`,
        text: String(val),
        isCorrect: val === correct,
        color: BALLOON_COLORS[idx % BALLOON_COLORS.length],
        xOffset: (idx - 1.5) * 65,
      })),
    };
  } else if (type === 1) {
    // Division
    const divisor = Math.floor(Math.random() * 7) + 3;
    const quotient = Math.floor(Math.random() * 8) + 2;
    const dividend = divisor * quotient;
    const correct = quotient;
    const d1 = correct + 1;
    const d2 = Math.max(1, correct - 1);
    const d3 = correct + 2;
    const all = [correct, d1, d2, d3].sort(() => 0.5 - Math.random());

    return {
      prompt: `🎈 Pop: ${dividend} ÷ ${divisor} = ?`,
      options: all.map((val, idx) => ({
        id: `opt_${idx}_${roundNum}`,
        text: String(val),
        isCorrect: val === correct,
        color: BALLOON_COLORS[idx % BALLOON_COLORS.length],
        xOffset: (idx - 1.5) * 65,
      })),
    };
  } else {
    // Synonyms / Antonyms
    const wordPairs = [
      { q: 'Opposite of FAST', a: 'SLOW', d: ['QUICK', 'RUN', 'RACE'] },
      { q: 'Opposite of HUGE', a: 'TINY', d: ['BIG', 'TALL', 'HIGH'] },
      { q: 'Synonym of HAPPY', a: 'JOYFUL', d: ['SAD', 'ANGRY', 'TIRED'] },
      { q: 'Opposite of BRAVE', a: 'SCARED', d: ['HERO', 'STRONG', 'BOLD'] },
      { q: 'Noun in: "The eagle flies"', a: 'EAGLE', d: ['FLIES', 'THE', 'FAST'] },
    ];
    const item = wordPairs[Math.floor(Math.random() * wordPairs.length)];
    const all = [item.a, ...item.d].sort(() => 0.5 - Math.random());

    return {
      prompt: `🎈 ${item.q}`,
      options: all.map((text, idx) => ({
        id: `opt_${idx}_${roundNum}`,
        text,
        isCorrect: text === item.a,
        color: BALLOON_COLORS[idx % BALLOON_COLORS.length],
        xOffset: (idx - 1.5) * 65,
      })),
    };
  }
};

const GAME_DURATION = 40; // 40 seconds blitz

export const BalloonPopGameModal: React.FC<BalloonPopGameModalProps> = ({
  visible,
  onClose,
  grade,
}) => {
  const { addReward } = useUserStore();
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [roundNum, setRoundNum] = useState(1);
  const [challenge, setChallenge] = useState<GameRound>(() => generateChallenge(grade, 1));
  const [poppedIds, setPoppedIds] = useState<string[]>([]);
  const [isGameOver, setIsGameOver] = useState(false);

  // Floating bounce animation
  const floatAnim = useRef(new Animated.Value(0)).current;

  // Initialize and run game timer
  useEffect(() => {
    if (!visible) return;

    // Reset game state
    setTimeLeft(GAME_DURATION);
    setScore(0);
    setCombo(0);
    setRoundNum(1);
    setPoppedIds([]);
    setIsGameOver(false);
    setChallenge(generateChallenge(grade, 1));

    // Floating balloon wave
    const floatLoop = Animated.loop(
      Animated.sequence([
        Animated.timing(floatAnim, { toValue: -15, duration: 900, useNativeDriver: true }),
        Animated.timing(floatAnim, { toValue: 5, duration: 900, useNativeDriver: true }),
      ])
    );
    floatLoop.start();

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          finishGame();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
      floatLoop.stop();
    };
  }, [visible]);

  const finishGame = async () => {
    setIsGameOver(true);
    soundManager.playFanfare();
  };

  const handlePopBalloon = (option: BalloonOption) => {
    if (poppedIds.includes(option.id) || isGameOver) return;

    // Instant pop sound & haptic
    soundManager.playBubblePop();
    setPoppedIds((prev) => [...prev, option.id]);

    if (option.isCorrect) {
      const newCombo = combo + 1;
      const points = 10 * Math.min(newCombo, 4);
      setCombo(newCombo);
      setScore((prev) => prev + points);

      // Advance to next challenge quickly
      setTimeout(() => {
        const nextRound = roundNum + 1;
        setRoundNum(nextRound);
        setChallenge(generateChallenge(grade, nextRound));
        setPoppedIds([]);
      }, 350);
    } else {
      // Wrong balloon: break combo and time penalty
      triggerHaptic('error');
      setCombo(0);
      setTimeLeft((prev) => Math.max(1, prev - 2));
    }
  };

  const handleCollectAndClose = async () => {
    // Reward stars and XP based on score
    const starsWon = Math.max(5, Math.floor(score / 25));
    const xpWon = score * 2;
    await addReward({ stars: starsWon, xp: xpWon });
    triggerHaptic('success');
    onClose();
  };

  const timerPercent = (timeLeft / GAME_DURATION) * 100;

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.gameCard}>
          {/* Header Stats Bar */}
          <View style={styles.hudBar}>
            <View style={styles.hudStatBox}>
              <Text style={styles.hudEmoji}>⏱️</Text>
              <Text style={[styles.hudValue, timeLeft <= 10 && styles.hudTimerWarning]}>
                {timeLeft}s
              </Text>
            </View>

            <View style={styles.hudStatBox}>
              <Text style={styles.hudEmoji}>🎯</Text>
              <Text style={styles.hudValue}>{score} pts</Text>
            </View>

            {combo > 1 && (
              <View style={styles.comboBadge}>
                <Text style={styles.comboText}>Combo x{combo} 🔥</Text>
              </View>
            )}

            <TouchableOpacity onPress={onClose} style={styles.hudCloseBtn} activeOpacity={0.7}>
              <Text style={styles.hudCloseText}>✕</Text>
            </TouchableOpacity>
          </View>

          {/* Time Bar */}
          <View style={styles.timerTrack}>
            <View
              style={[
                styles.timerFill,
                { width: `${timerPercent}%` },
                timeLeft <= 10 && { backgroundColor: '#EF4444' },
              ]}
            />
          </View>

          {/* Question / Mission Prompt */}
          <View style={styles.promptBanner}>
            <View style={{ flex: 1 }}>
              <Text style={styles.promptText}>{challenge.prompt}</Text>
            </View>
            <SpeakerButton textToSpeak={challenge.prompt} size="sm" />
          </View>

          {/* Balloon Sky Area */}
          <View style={styles.skyArea}>
            <View style={styles.cloudsDecor}>
              <Text style={styles.cloudText}>☁️</Text>
              <Text style={[styles.cloudText, { marginLeft: 160 }]}>☁️</Text>
            </View>

            {/* Balloons Grid */}
            <View style={styles.balloonsRow}>
              {challenge.options.map((opt, i) => {
                const isPopped = poppedIds.includes(opt.id);

                return (
                  <Animated.View
                    key={opt.id}
                    style={[
                      styles.balloonWrapper,
                      {
                        transform: [
                          {
                            translateY: floatAnim.interpolate({
                              inputRange: [-15, 5],
                              outputRange: [i % 2 === 0 ? -12 : 6, i % 2 === 0 ? 6 : -12],
                            }),
                          },
                        ],
                      },
                    ]}
                  >
                    {!isPopped ? (
                      <TouchableOpacity
                        style={[styles.balloonBody, { backgroundColor: opt.color }]}
                        onPress={() => handlePopBalloon(opt)}
                        activeOpacity={0.7}
                      >
                        {/* 3D Shiny Reflection Dot */}
                        <View style={styles.balloonGloss} />

                        {/* Text Inside Balloon */}
                        <Text style={styles.balloonText} numberOfLines={2}>
                          {opt.text}
                        </Text>

                        {/* Knot & String */}
                        <View style={[styles.balloonKnot, { borderTopColor: opt.color }]} />
                        <View style={styles.balloonString} />
                      </TouchableOpacity>
                    ) : (
                      /* Pop Burst Effect */
                      <View style={styles.popBurst}>
                        <Text style={styles.burstEmoji}>💥</Text>
                      </View>
                    )}
                  </Animated.View>
                );
              })}
            </View>
          </View>

          <Text style={styles.hintText}>
            👉 Tap the right balloon as fast as you can!
          </Text>
        </View>

        {/* Game Over Scorecard Modal */}
        {isGameOver && (
          <View style={styles.gameOverOverlay}>
            <View style={styles.gameOverCard}>
              <Text style={styles.gameOverTitle}>🎈 TIME'S UP! 🎈</Text>
              <Text style={styles.finalScoreEmoji}>🏆</Text>
              <Text style={styles.finalScoreText}>{score} Points</Text>
              <Text style={styles.finalScoreSub}>
                Awesome reflexes! You mastered rapid CBSE questions under pressure.
              </Text>

              {/* Reward Loot */}
              <View style={styles.lootRewardRow}>
                <View style={styles.lootBadge}>
                  <Text style={styles.lootBadgeText}>
                    ⭐ +{Math.max(5, Math.floor(score / 25))} Stars
                  </Text>
                </View>
                <View style={styles.lootBadge}>
                  <Text style={styles.lootBadgeText}>⚡ +{score * 2} XP</Text>
                </View>
              </View>

              <TouchableOpacity
                style={styles.gameOverBtn}
                onPress={handleCollectAndClose}
                activeOpacity={0.85}
              >
                <Text style={styles.gameOverBtnText}>COLLECT & EXIT 🌟</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(15, 23, 42, 0.85)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING.md,
  },
  gameCard: {
    width: '100%',
    maxWidth: 390,
    backgroundColor: '#0284C7', // Sky Blue background
    borderRadius: BORDER_RADIUS.xl,
    padding: SPACING.md,
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#38BDF8',
    ...SHADOWS.large,
  },
  hudBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: SPACING.xs,
  },
  hudStatBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: BORDER_RADIUS.round,
    gap: 4,
  },
  hudEmoji: {
    fontSize: 16,
  },
  hudValue: {
    fontSize: 15,
    fontWeight: '900',
    color: '#FFFFFF',
  },
  hudTimerWarning: {
    color: '#F87171',
  },
  comboBadge: {
    backgroundColor: '#F59E0B',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: BORDER_RADIUS.round,
  },
  comboText: {
    fontSize: 12,
    fontWeight: '900',
    color: '#FFFFFF',
  },
  hudCloseBtn: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hudCloseText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  timerTrack: {
    width: '100%',
    height: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    borderRadius: 3,
    overflow: 'hidden',
    marginBottom: SPACING.sm,
  },
  timerFill: {
    height: '100%',
    backgroundColor: '#FDE047',
    borderRadius: 3,
  },
  promptBanner: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: SPACING.md,
    borderRadius: BORDER_RADIUS.lg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    marginBottom: SPACING.sm,
  },
  promptText: {
    fontSize: 18,
    fontWeight: '900',
    color: '#0F172A',
    textAlign: 'center',
  },
  skyArea: {
    width: '100%',
    height: 260,
    backgroundColor: '#38BDF8',
    borderRadius: BORDER_RADIUS.lg,
    overflow: 'hidden',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#7DD3FC',
  },
  cloudsDecor: {
    position: 'absolute',
    top: 10,
    left: 15,
    flexDirection: 'row',
    opacity: 0.7,
  },
  cloudText: {
    fontSize: 26,
  },
  balloonsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 8,
  },
  balloonWrapper: {
    width: '45%',
    alignItems: 'center',
    marginVertical: 10,
  },
  balloonBody: {
    width: 90,
    height: 105,
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
  balloonGloss: {
    position: 'absolute',
    top: 12,
    left: 16,
    width: 14,
    height: 22,
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.45)',
    transform: [{ rotate: '-25deg' }],
  },
  balloonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '900',
    textAlign: 'center',
    paddingHorizontal: 6,
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  balloonKnot: {
    position: 'absolute',
    bottom: -6,
    width: 0,
    height: 0,
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderTopWidth: 8,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
  },
  balloonString: {
    position: 'absolute',
    bottom: -22,
    width: 1.5,
    height: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  popBurst: {
    width: 90,
    height: 105,
    justifyContent: 'center',
    alignItems: 'center',
  },
  burstEmoji: {
    fontSize: 42,
  },
  hintText: {
    fontSize: 12,
    fontWeight: '700',
    color: 'rgba(255, 255, 255, 0.9)',
    marginTop: SPACING.sm,
  },
  gameOverOverlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING.lg,
    zIndex: 100,
  },
  gameOverCard: {
    width: '100%',
    maxWidth: 340,
    backgroundColor: '#1E293B',
    borderRadius: BORDER_RADIUS.xl,
    padding: SPACING.xl,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#38BDF8',
    ...SHADOWS.large,
  },
  gameOverTitle: {
    fontSize: 22,
    fontWeight: '900',
    color: '#38BDF8',
    letterSpacing: 1,
    marginBottom: SPACING.sm,
  },
  finalScoreEmoji: {
    fontSize: 46,
    marginVertical: 4,
  },
  finalScoreText: {
    fontSize: 28,
    fontWeight: '900',
    color: '#FDE047',
    marginBottom: 4,
  },
  finalScoreSub: {
    fontSize: 13,
    color: '#94A3B8',
    textAlign: 'center',
    marginBottom: SPACING.md,
    lineHeight: 18,
  },
  lootRewardRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: SPACING.lg,
  },
  lootBadge: {
    backgroundColor: '#0F172A',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: BORDER_RADIUS.round,
    borderWidth: 1,
    borderColor: '#F59E0B',
  },
  lootBadgeText: {
    color: '#FDE047',
    fontSize: 14,
    fontWeight: '800',
  },
  gameOverBtn: {
    width: '100%',
    backgroundColor: '#10B981',
    paddingVertical: 14,
    borderRadius: BORDER_RADIUS.lg,
    alignItems: 'center',
    borderBottomWidth: 4,
    borderBottomColor: '#047857',
  },
  gameOverBtnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
});
