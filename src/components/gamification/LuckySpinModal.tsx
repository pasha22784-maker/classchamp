import React, { useState, useRef, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  Animated,
  Easing,
  Dimensions,
  Platform,
} from 'react-native';
import { COLORS, SPACING, BORDER_RADIUS, SHADOWS } from '../../constants/theme';
import { triggerHaptic } from '../../utils/haptics';
import { soundManager } from '../../utils/soundManager';
import { useUserStore, getTodayDateString } from '../../store/useUserStore';

interface LuckySpinModalProps {
  visible: boolean;
  onClose: () => void;
}

interface PrizeWedge {
  id: number;
  label: string;
  emoji: string;
  badge: string;
  color: string;
  reward: {
    stars?: number;
    coins?: number;
    trophies?: number;
    xp?: number;
    streakShields?: number;
  };
}

const PRIZES: PrizeWedge[] = [
  { id: 0, label: '10 Stars', emoji: '⭐', badge: '+10', color: '#F59E0B', reward: { stars: 10, coins: 50, xp: 20 } },
  { id: 1, label: 'Streak Shield', emoji: '🛡️', badge: '+1', color: '#06B6D4', reward: { streakShields: 1, xp: 50 } },
  { id: 2, label: '100 Coins', emoji: '💰', badge: '+100', color: '#8B5CF6', reward: { coins: 100, xp: 50 } },
  { id: 3, label: 'Trophy 🏆', emoji: '🏆', badge: 'EPIC', color: '#EC4899', reward: { trophies: 1, stars: 15, coins: 150, xp: 100 } },
  { id: 4, label: '25 Stars', emoji: '⭐', badge: '+25', color: '#F97316', reward: { stars: 25, coins: 100, xp: 30 } },
  { id: 5, label: '100 XP', emoji: '⚡', badge: '+100', color: '#10B981', reward: { xp: 100, coins: 75 } },
  { id: 6, label: 'Mystery Gift', emoji: '🎁', badge: 'LUCKY', color: '#3B82F6', reward: { stars: 30, coins: 200, xp: 75, streakShields: 1 } },
  { id: 7, label: '50 Stars', emoji: '🌟', badge: 'JACKPOT', color: '#EAB308', reward: { stars: 50, coins: 300, xp: 150 } },
];

const WHEEL_SIZE = 300;
const RADIUS = WHEEL_SIZE / 2;
const SEGMENT_ANGLE = 360 / PRIZES.length; // 45 degrees

export const LuckySpinModal: React.FC<LuckySpinModalProps> = ({ visible, onClose }) => {
  const { profile, addReward, recordSpinUsed, addStars } = useUserStore();
  const [spinning, setSpinning] = useState(false);
  const [wonPrize, setWonPrize] = useState<PrizeWedge | null>(null);
  const [showPrizeClaim, setShowPrizeClaim] = useState(false);

  const rotateAnim = useRef(new Animated.Value(0)).current;
  const currentAngle = useRef(0);
  const pointerWobble = useRef(new Animated.Value(0)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;
  const confettiAnim = useRef(new Animated.Value(0)).current;

  const todayStr = getTodayDateString();
  const isFreeSpinAvailable = profile.lastSpinDate !== todayStr;
  const canSpinWithStars = profile.totalStars >= 25;

  // Center pulse animation
  useEffect(() => {
    if (!visible) return;
    const pulse = Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.08,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }),
      ])
    );
    pulse.start();
    return () => pulse.stop();
  }, [visible]);

  const handleSpin = () => {
    if (spinning) return;

    if (!isFreeSpinAvailable && !canSpinWithStars) {
      triggerHaptic('warning');
      return;
    }

    if (!isFreeSpinAvailable && canSpinWithStars) {
      // Deduct 25 stars for extra spin
      addStars(-25);
    }

    setSpinning(true);
    setWonPrize(null);
    setShowPrizeClaim(false);
    triggerHaptic('medium');

    // Pick weighted or random prize (ensure nice surprises!)
    const randomIndex = Math.floor(Math.random() * PRIZES.length);
    const prize = PRIZES[randomIndex];

    // Pointer is at TOP (0 degrees).
    // To make wedge index 'randomIndex' land at top, wheel must rotate so that wedge's center aligns with top.
    const targetWedgeAngle = randomIndex * SEGMENT_ANGLE;
    const baseRotations = 360 * 6; // 6 full revolutions
    // Align wedge center to top: 360 - targetWedgeAngle
    const finalAngle = currentAngle.current + baseRotations + ((360 - targetWedgeAngle) % 360);

    // Audio clicks during spin
    let tickCount = 0;
    const tickInterval = setInterval(() => {
      tickCount++;
      if (tickCount < 25) {
        soundManager.playSpinTick();
      }
    }, 120);

    // Pointer wobble
    Animated.loop(
      Animated.sequence([
        Animated.timing(pointerWobble, { toValue: -12, duration: 80, useNativeDriver: true }),
        Animated.timing(pointerWobble, { toValue: 12, duration: 80, useNativeDriver: true }),
        Animated.timing(pointerWobble, { toValue: 0, duration: 80, useNativeDriver: true }),
      ]),
      { iterations: 20 }
    ).start();

    Animated.timing(rotateAnim, {
      toValue: finalAngle,
      duration: 3800,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start(async () => {
      clearInterval(tickInterval);
      currentAngle.current = finalAngle % 360;
      setSpinning(false);
      setWonPrize(prize);
      setShowPrizeClaim(true);
      soundManager.playReward();

      // Trigger Confetti
      confettiAnim.setValue(0);
      Animated.spring(confettiAnim, {
        toValue: 1,
        friction: 4,
        useNativeDriver: true,
      }).start();

      // Credit rewards
      await addReward(prize.reward);
      if (isFreeSpinAvailable) {
        await recordSpinUsed();
      }
    });
  };

  const handleClaim = () => {
    triggerHaptic('success');
    setShowPrizeClaim(false);
    setWonPrize(null);
    onClose();
  };

  const spinInterpolation = rotateAnim.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  });

  const pointerInterpolation = pointerWobble.interpolate({
    inputRange: [-15, 15],
    outputRange: ['-15deg', '15deg'],
  });

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.modalCard}>
          {/* Header Bar */}
          <View style={styles.headerRow}>
            <View style={styles.titleBox}>
              <Text style={styles.modalTitle}>🎡 Daily Lucky Spin</Text>
              <Text style={styles.modalSub}>
                {isFreeSpinAvailable
                  ? '✨ Free Spin is Ready!'
                  : canSpinWithStars
                  ? '⭐ Extra Spin: 25 Stars'
                  : '⏳ Come back tomorrow!'}
              </Text>
            </View>
            <TouchableOpacity onPress={onClose} style={styles.closeBtn} activeOpacity={0.7}>
              <Text style={styles.closeBtnText}>✕</Text>
            </TouchableOpacity>
          </View>

          {/* User Loot Tracker Bar */}
          <View style={styles.lootBar}>
            <View style={styles.lootItem}>
              <Text style={styles.lootEmoji}>⭐</Text>
              <Text style={styles.lootValue}>{profile.totalStars}</Text>
              <Text style={styles.lootLabel}>Stars</Text>
            </View>
            <View style={styles.lootDivider} />
            <View style={styles.lootItem}>
              <Text style={styles.lootEmoji}>💰</Text>
              <Text style={styles.lootValue}>{profile.totalCoins ?? (profile.totalStars * 10 + 50)}</Text>
              <Text style={styles.lootLabel}>Coins</Text>
            </View>
            <View style={styles.lootDivider} />
            <View style={styles.lootItem}>
              <Text style={styles.lootEmoji}>⚡</Text>
              <Text style={styles.lootValue}>{profile.xp ?? 0}</Text>
              <Text style={styles.lootLabel}>XP</Text>
            </View>
          </View>

          {/* Wheel Stage */}
          <View style={styles.wheelStage}>
            {/* Top Pointer Needle */}
            <Animated.View
              style={[
                styles.pointerBox,
                { transform: [{ rotate: pointerInterpolation }] },
              ]}
            >
              <View style={styles.pointerNeedle} />
              <View style={styles.pointerCap} />
            </Animated.View>

            {/* Glowing Carnival Outer Rim */}
            <View style={styles.outerRim}>
              {/* Spinning Disc */}
              <Animated.View
                style={[
                  styles.wheelDisc,
                  { transform: [{ rotate: spinInterpolation }] },
                ]}
              >
                {/* 8 Segments */}
                {PRIZES.map((prize, idx) => {
                  const angle = idx * SEGMENT_ANGLE;
                  return (
                    <View
                      key={prize.id}
                      style={[
                        styles.wedgeContainer,
                        { transform: [{ rotate: `${angle}deg` }] },
                      ]}
                    >
                      {/* Spoke Line Divider */}
                      <View style={styles.spokeLine} />

                      {/* Prize Pill Item on the perimeter */}
                      <View
                        style={[
                          styles.wedgeItem,
                          { backgroundColor: prize.color },
                        ]}
                      >
                        <Text style={styles.wedgeEmoji}>{prize.emoji}</Text>
                        <Text style={styles.wedgeText}>{prize.badge}</Text>
                      </View>
                    </View>
                  );
                })}
              </Animated.View>

              {/* Center Spinning Hub Button */}
              <TouchableOpacity
                style={styles.centerHubBtn}
                onPress={handleSpin}
                disabled={spinning}
                activeOpacity={0.8}
              >
                <Animated.View
                  style={[
                    styles.centerHubInner,
                    { transform: [{ scale: spinning ? 0.95 : pulseAnim }] },
                  ]}
                >
                  <Text style={styles.centerHubEmoji}>{spinning ? '🌀' : '🎯'}</Text>
                  <Text style={styles.centerHubText}>{spinning ? 'SPINNING' : 'SPIN!'}</Text>
                </Animated.View>
              </TouchableOpacity>
            </View>
          </View>

          {/* Action CTA & Info */}
          <View style={styles.ctaBox}>
            <TouchableOpacity
              style={[
                styles.actionBtn,
                spinning && styles.actionBtnDisabled,
                !isFreeSpinAvailable && !canSpinWithStars && styles.actionBtnDisabled,
              ]}
              onPress={handleSpin}
              disabled={spinning || (!isFreeSpinAvailable && !canSpinWithStars)}
              activeOpacity={0.85}
            >
              <Text style={styles.actionBtnText}>
                {spinning
                  ? 'Wheel is Spinning...'
                  : isFreeSpinAvailable
                  ? '🎁 SPIN FOR FREE!'
                  : canSpinWithStars
                  ? '⭐ Spin Again (25 Stars)'
                  : '⏳ Next Free Spin Tomorrow'}
              </Text>
            </TouchableOpacity>
            <Text style={styles.disclaimerText}>
              🛡️ Streak Shields protect your daily streak if you miss a day!
            </Text>
          </View>
        </View>

        {/* Prize Claim Modal / Confetti Explosion */}
        {showPrizeClaim && wonPrize && (
          <View style={styles.prizeOverlay}>
            <Animated.View
              style={[
                styles.prizePopup,
                {
                  transform: [
                    { scale: confettiAnim },
                    {
                      translateY: confettiAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [50, 0],
                      }),
                    },
                  ],
                },
              ]}
            >
              <Text style={styles.confettiHeader}>🎉 JACKPOT WINNER! 🎉</Text>
              <View style={[styles.prizeBadgeCircle, { backgroundColor: wonPrize.color }]}>
                <Text style={styles.prizeBigEmoji}>{wonPrize.emoji}</Text>
              </View>
              <Text style={styles.prizeWonTitle}>{wonPrize.label}</Text>
              <Text style={styles.prizeWonSub}>
                Awesome! You earned {wonPrize.label} for practicing regularly on ClassChamp!
              </Text>

              {/* Reward breakdown */}
              <View style={styles.rewardSummaryRow}>
                {wonPrize.reward.stars ? (
                  <View style={styles.rewardPill}>
                    <Text style={styles.rewardPillText}>⭐ +{wonPrize.reward.stars} Stars</Text>
                  </View>
                ) : null}
                {wonPrize.reward.streakShields ? (
                  <View style={styles.rewardPill}>
                    <Text style={styles.rewardPillText}>🛡️ +{wonPrize.reward.streakShields} Shield</Text>
                  </View>
                ) : null}
                {wonPrize.reward.xp ? (
                  <View style={styles.rewardPill}>
                    <Text style={styles.rewardPillText}>⚡ +{wonPrize.reward.xp} XP</Text>
                  </View>
                ) : null}
                {wonPrize.reward.trophies ? (
                  <View style={styles.rewardPill}>
                    <Text style={styles.rewardPillText}>🏆 +{wonPrize.reward.trophies} Trophy</Text>
                  </View>
                ) : null}
              </View>

              <TouchableOpacity style={styles.claimBtn} onPress={handleClaim} activeOpacity={0.85}>
                <Text style={styles.claimBtnText}>COLLECT REWARD 🌟</Text>
              </TouchableOpacity>
            </Animated.View>
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
  modalCard: {
    width: '100%',
    maxWidth: 380,
    backgroundColor: '#1E1B4B', // Deep mystical purple
    borderRadius: BORDER_RADIUS.xl,
    padding: SPACING.lg,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#4338CA',
    ...SHADOWS.large,
  },
  headerRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.sm,
  },
  titleBox: {
    flex: 1,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: '900',
    color: '#FDE047',
    letterSpacing: 0.5,
  },
  modalSub: {
    fontSize: 12,
    fontWeight: '600',
    color: '#A5B4FC',
    marginTop: 2,
  },
  closeBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeBtnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  lootBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    borderRadius: BORDER_RADIUS.lg,
    paddingVertical: 8,
    marginBottom: SPACING.md,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  lootItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  lootEmoji: {
    fontSize: 16,
  },
  lootValue: {
    fontSize: 14,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  lootLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: '#94A3B8',
  },
  lootDivider: {
    width: 1,
    height: 18,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
  },
  wheelStage: {
    width: WHEEL_SIZE,
    height: WHEEL_SIZE + 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: SPACING.sm,
  },
  pointerBox: {
    position: 'absolute',
    top: 0,
    zIndex: 50,
    alignItems: 'center',
  },
  pointerNeedle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 14,
    borderRightWidth: 14,
    borderTopWidth: 26,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#EF4444',
  },
  pointerCap: {
    position: 'absolute',
    top: -4,
    width: 16,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FDE047',
    borderWidth: 1,
    borderColor: '#B45309',
  },
  outerRim: {
    width: WHEEL_SIZE,
    height: WHEEL_SIZE,
    borderRadius: WHEEL_SIZE / 2,
    borderWidth: 8,
    borderColor: '#F59E0B', // Golden rim
    backgroundColor: '#312E81',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#F59E0B',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 16,
    elevation: 12,
  },
  wheelDisc: {
    width: WHEEL_SIZE - 16,
    height: WHEEL_SIZE - 16,
    borderRadius: (WHEEL_SIZE - 16) / 2,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wedgeContainer: {
    position: 'absolute',
    width: 44,
    height: WHEEL_SIZE - 16,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  spokeLine: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: 1.5,
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
  },
  wedgeItem: {
    marginTop: 10,
    width: 44,
    paddingVertical: 5,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.4)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 3,
  },
  wedgeEmoji: {
    fontSize: 18,
  },
  wedgeText: {
    fontSize: 9,
    fontWeight: '900',
    color: '#FFFFFF',
    marginTop: 1,
  },
  centerHubBtn: {
    position: 'absolute',
    zIndex: 40,
    width: 76,
    height: 76,
    borderRadius: 38,
    backgroundColor: '#F59E0B',
    borderWidth: 4,
    borderColor: '#FEF08A',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 8,
  },
  centerHubInner: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerHubEmoji: {
    fontSize: 20,
  },
  centerHubText: {
    fontSize: 11,
    fontWeight: '900',
    color: '#78350F',
    marginTop: -1,
  },
  ctaBox: {
    width: '100%',
    alignItems: 'center',
    marginTop: SPACING.sm,
  },
  actionBtn: {
    width: '100%',
    backgroundColor: '#10B981',
    paddingVertical: 14,
    borderRadius: BORDER_RADIUS.lg,
    alignItems: 'center',
    borderBottomWidth: 4,
    borderBottomColor: '#047857',
    ...SHADOWS.medium,
  },
  actionBtnDisabled: {
    backgroundColor: '#64748B',
    borderBottomColor: '#334155',
  },
  actionBtnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  disclaimerText: {
    fontSize: 11,
    color: '#94A3B8',
    marginTop: 8,
    textAlign: 'center',
  },
  prizeOverlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING.lg,
    zIndex: 100,
  },
  prizePopup: {
    width: '100%',
    maxWidth: 340,
    backgroundColor: '#1E293B',
    borderRadius: BORDER_RADIUS.xl,
    padding: SPACING.xl,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#F59E0B',
    ...SHADOWS.large,
  },
  confettiHeader: {
    fontSize: 16,
    fontWeight: '900',
    color: '#FDE047',
    letterSpacing: 1,
    marginBottom: SPACING.md,
  },
  prizeBadgeCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SPACING.md,
    borderWidth: 4,
    borderColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 8,
  },
  prizeBigEmoji: {
    fontSize: 44,
  },
  prizeWonTitle: {
    fontSize: 24,
    fontWeight: '900',
    color: '#FFFFFF',
    marginBottom: 6,
  },
  prizeWonSub: {
    fontSize: 13,
    color: '#94A3B8',
    textAlign: 'center',
    marginBottom: SPACING.lg,
    lineHeight: 18,
  },
  rewardSummaryRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    justifyContent: 'center',
    marginBottom: SPACING.lg,
  },
  rewardPill: {
    backgroundColor: '#0F172A',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: BORDER_RADIUS.round,
    borderWidth: 1,
    borderColor: '#38BDF8',
  },
  rewardPillText: {
    color: '#38BDF8',
    fontSize: 13,
    fontWeight: '800',
  },
  claimBtn: {
    width: '100%',
    backgroundColor: '#F59E0B',
    paddingVertical: 14,
    borderRadius: BORDER_RADIUS.lg,
    alignItems: 'center',
    borderBottomWidth: 4,
    borderBottomColor: '#B45309',
  },
  claimBtnText: {
    color: '#78350F',
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
});
