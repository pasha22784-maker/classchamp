import React, { useState, useRef, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Animated,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, SPACING, BORDER_RADIUS, SHADOWS } from '../constants/theme';
import { ChampHeader } from '../components/common';
import { getDayMissionInfo, DayMission } from '../data/curriculum365Engine';
import { Grade } from '../types';
import { triggerHaptic } from '../utils/haptics';
import { soundManager } from '../utils/soundManager';
import { useUserStore } from '../store/useUserStore';
import { KID_AVATARS } from '../constants/avatars';

interface Roadmap365ScreenProps {
  grade: Grade;
  currentActiveDay: number;
  completedDays: number[];
  onSelectDay: (dayNumber: number) => void;
  onBack: () => void;
}

export const Roadmap365Screen: React.FC<Roadmap365ScreenProps> = ({
  grade,
  currentActiveDay,
  completedDays,
  onSelectDay,
  onBack,
}) => {
  const { profile } = useUserStore();
  const [selectedTerm, setSelectedTerm] = useState<1 | 2 | 3 | 4>(1);
  const [selectedMilestone, setSelectedMilestone] = useState<DayMission | null>(null);

  const scrollRef = useRef<ScrollView>(null);
  const pulseAnim = useRef(new Animated.Value(1)).current;
  const bounceAnim = useRef(new Animated.Value(0)).current;

  // Mascot avatar
  const userAvatar = KID_AVATARS.find((a) => a.id === profile.avatarId) || KID_AVATARS[0];

  // Active day pulsing glow
  useEffect(() => {
    const pulse = Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, { toValue: 1.15, duration: 700, useNativeDriver: true }),
        Animated.timing(pulseAnim, { toValue: 1, duration: 700, useNativeDriver: true }),
      ])
    );
    const bounce = Animated.loop(
      Animated.sequence([
        Animated.timing(bounceAnim, { toValue: -8, duration: 500, useNativeDriver: true }),
        Animated.timing(bounceAnim, { toValue: 0, duration: 500, useNativeDriver: true }),
      ])
    );
    pulse.start();
    bounce.start();

    return () => {
      pulse.stop();
      bounce.stop();
    };
  }, []);

  // Term day ranges
  const termRanges = {
    1: { start: 1, end: 90, label: 'Term 1: Foundations (Days 1-90)' },
    2: { start: 91, end: 180, label: 'Term 2: Operations (Days 91-180)' },
    3: { start: 181, end: 270, label: 'Term 3: Time & Words (Days 181-270)' },
    4: { start: 271, end: 365, label: 'Term 4: Mastery (Days 271-365)' },
  }[selectedTerm];

  // Generate 45 days chunk per term view for smooth rendering & high performance
  const termDays: DayMission[] = [];
  const displayLimit = Math.min(termRanges.end, termRanges.start + 44);
  for (let d = termRanges.start; d <= displayLimit; d++) {
    termDays.push(getDayMissionInfo(grade, d));
  }

  const handleTermChange = (term: 1 | 2 | 3 | 4) => {
    triggerHaptic('light');
    setSelectedTerm(term);
  };

  const handleNodePress = (mission: DayMission) => {
    soundManager.playPop();
    triggerHaptic('medium');

    if (mission.isMilestone && completedDays.includes(mission.dayNumber)) {
      setSelectedMilestone(mission);
    } else {
      onSelectDay(mission.dayNumber);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
      <StatusBar barStyle="light-content" backgroundColor="#0B132B" />

      {/* Header */}
      <ChampHeader
        title={typeof grade === 'number' ? `Class ${grade} • Adventure Map` : `${grade} • Adventure Map`}
        subtitle="Candy Crush Style 365-Day CBSE Quest"
        onBack={onBack}
      />

      {/* Top Stats Strip */}
      <View style={styles.statsStrip}>
        <View style={styles.statPill}>
          <Text style={styles.statEmoji}>🔥</Text>
          <Text style={styles.statText}>{profile.currentStreak} Day Streak</Text>
        </View>
        <View style={styles.statPill}>
          <Text style={styles.statEmoji}>⭐</Text>
          <Text style={styles.statText}>{profile.totalStars} Stars</Text>
        </View>
        <View style={styles.statPill}>
          <Text style={styles.statEmoji}>🏆</Text>
          <Text style={styles.statText}>{completedDays.length} Done</Text>
        </View>
      </View>

      {/* Term Selector Pills */}
      <View style={styles.termBar}>
        {[1, 2, 3, 4].map((t) => (
          <TouchableOpacity
            key={t}
            activeOpacity={0.8}
            onPress={() => handleTermChange(t as 1 | 2 | 3 | 4)}
            style={[styles.termPill, selectedTerm === t && styles.termPillActive]}
          >
            <Text style={[styles.termPillText, selectedTerm === t && styles.termPillTextActive]}>
              Term {t}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView
        ref={scrollRef}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Term Intro Banner */}
        <View style={styles.bannerBox}>
          <Text style={styles.bannerTitle}>🗺️ {termRanges.label}</Text>
          <Text style={styles.bannerSub}>
            Follow the winding road! Every 7th day unlocks a Golden Milestone Chest 🎁!
          </Text>
        </View>

        {/* Serpentine Adventure Road */}
        <View style={styles.roadStage}>
          {termDays.map((mission, index) => {
            const isCompleted = completedDays.includes(mission.dayNumber);
            const isCurrent = mission.dayNumber === currentActiveDay;
            const isMilestone = mission.isMilestone || mission.dayNumber % 7 === 0;

            // Sine wave horizontal offset (creates a perfect S-curve road)
            // Waves repeat every 7 days so milestone chests always land at center (0)
            const xOffset = Math.sin((mission.dayNumber * Math.PI) / 3.5) * 85;

            return (
              <View
                key={mission.dayNumber}
                style={[styles.roadNodeWrapper, { transform: [{ translateX: xOffset }] }]}
              >
                {/* Connecting Path Dots to next stone */}
                {index < termDays.length - 1 && (
                  <View style={styles.trailConnector}>
                    <View style={styles.trailDot} />
                    <View style={styles.trailDot} />
                    <View style={styles.trailDot} />
                  </View>
                )}

                {/* Active Mascot Champu Indicator */}
                {isCurrent && (
                  <Animated.View
                    style={[
                      styles.mascotBalloon,
                      { transform: [{ translateY: bounceAnim }] },
                    ]}
                  >
                    <View style={styles.mascotBubble}>
                      <Text style={styles.mascotBubbleText}>YOU ARE HERE! 🚀</Text>
                    </View>
                    <Text style={styles.mascotEmoji}>{userAvatar.emoji}</Text>
                    <View style={styles.mascotPointer} />
                  </Animated.View>
                )}

                {/* The 3D Stepping Stone Button */}
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => handleNodePress(mission)}
                  style={[
                    styles.steppingStone,
                    isMilestone && styles.milestoneStone,
                    isCompleted && styles.completedStone,
                    isCurrent && styles.currentStone,
                    !isCompleted && !isCurrent && styles.lockedStone,
                  ]}
                >
                  {/* Glowing pulsing halo for active day */}
                  {isCurrent && (
                    <Animated.View
                      style={[
                        styles.activeHaloRing,
                        { transform: [{ scale: pulseAnim }] },
                      ]}
                    />
                  )}

                  {/* Icon / Content inside stone */}
                  {isMilestone ? (
                    <View style={styles.milestoneContent}>
                      <Text style={styles.milestoneEmoji}>
                        {isCompleted ? '👑' : '🎁'}
                      </Text>
                      <Text style={styles.milestoneDayTag}>Day {mission.dayNumber}</Text>
                    </View>
                  ) : (
                    <View style={styles.stoneContent}>
                      {isCompleted ? (
                        <>
                          <Text style={styles.stoneStars}>⭐⭐⭐</Text>
                          <Text style={styles.stoneCheck}>✓</Text>
                          <Text style={styles.stoneDayNum}>Day {mission.dayNumber}</Text>
                        </>
                      ) : isCurrent ? (
                        <>
                          <Text style={styles.stonePlayIcon}>▶</Text>
                          <Text style={styles.currentDayNum}>Day {mission.dayNumber}</Text>
                        </>
                      ) : (
                        <>
                          <Text style={styles.lockedIcon}>🔒</Text>
                          <Text style={styles.lockedDayNum}>Day {mission.dayNumber}</Text>
                        </>
                      )}
                    </View>
                  )}
                </TouchableOpacity>

                {/* Subtitle Label below stone */}
                <View style={styles.stoneLabelBadge}>
                  <Text style={styles.stoneSubjectText} numberOfLines={1}>
                    {mission.subject === 'maths' ? '📐 Maths' : mission.subject === 'english' ? '📚 English' : '🇮🇳 Hindi'}
                  </Text>
                  <Text style={styles.stoneConceptText} numberOfLines={1}>
                    {mission.title}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>

      {/* Milestone Unlocked Popup */}
      {selectedMilestone && (
        <View style={styles.milestoneModalOverlay}>
          <View style={styles.milestoneModalCard}>
            <Text style={styles.milestoneModalEmoji}>🏆</Text>
            <Text style={styles.milestoneModalTitle}>Milestone Conquered!</Text>
            <Text style={styles.milestoneModalSub}>
              Day {selectedMilestone.dayNumber}: {selectedMilestone.title}
            </Text>
            <Text style={styles.milestoneModalDesc}>
              Aapne is 7-Day learning milestone ko successfully complete kiya hai! Shabaash!
            </Text>

            <TouchableOpacity
              style={styles.milestonePlayAgainBtn}
              onPress={() => {
                const day = selectedMilestone.dayNumber;
                setSelectedMilestone(null);
                onSelectDay(day);
              }}
              activeOpacity={0.85}
            >
              <Text style={styles.milestonePlayAgainText}>Replay Milestone Mission 🔄</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.milestoneCloseBtn}
              onPress={() => setSelectedMilestone(null)}
              activeOpacity={0.7}
            >
              <Text style={styles.milestoneCloseText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0F172A', // Deep space midnight
  },
  statsStrip: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#1E293B',
    paddingVertical: 10,
    paddingHorizontal: SPACING.md,
    borderBottomWidth: 1,
    borderBottomColor: '#334155',
  },
  statPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: BORDER_RADIUS.round,
    gap: 6,
  },
  statEmoji: {
    fontSize: 16,
  },
  statText: {
    color: '#F8FAFC',
    fontSize: 13,
    fontWeight: '800',
  },
  termBar: {
    flexDirection: 'row',
    backgroundColor: '#0F172A',
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    gap: SPACING.sm,
  },
  termPill: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: BORDER_RADIUS.round,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
  },
  termPillActive: {
    backgroundColor: '#F59E0B',
  },
  termPillText: {
    color: '#94A3B8',
    fontSize: 12,
    fontWeight: '700',
  },
  termPillTextActive: {
    color: '#78350F',
    fontWeight: '900',
  },
  scrollContent: {
    paddingBottom: 80,
    alignItems: 'center',
  },
  bannerBox: {
    width: '92%',
    backgroundColor: '#1E1B4B',
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.md,
    marginVertical: SPACING.sm,
    borderWidth: 1.5,
    borderColor: '#4338CA',
    alignItems: 'center',
  },
  bannerTitle: {
    color: '#FDE047',
    fontSize: 14,
    fontWeight: '900',
    marginBottom: 4,
  },
  bannerSub: {
    color: '#C7D2FE',
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 16,
  },
  roadStage: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: SPACING.md,
  },
  roadNodeWrapper: {
    alignItems: 'center',
    marginVertical: 14,
    position: 'relative',
  },
  trailConnector: {
    position: 'absolute',
    bottom: -22,
    alignItems: 'center',
    gap: 4,
    zIndex: 1,
  },
  trailDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  mascotBalloon: {
    position: 'absolute',
    top: -56,
    alignItems: 'center',
    zIndex: 50,
  },
  mascotBubble: {
    backgroundColor: '#FDE047',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#CA8A04',
  },
  mascotBubbleText: {
    fontSize: 9,
    fontWeight: '900',
    color: '#713F12',
  },
  mascotEmoji: {
    fontSize: 26,
    marginTop: 1,
  },
  mascotPointer: {
    width: 0,
    height: 0,
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderTopWidth: 5,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#FDE047',
  },
  steppingStone: {
    width: 74,
    height: 74,
    borderRadius: 37,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    ...SHADOWS.medium,
  },
  activeHaloRing: {
    position: 'absolute',
    width: 92,
    height: 92,
    borderRadius: 46,
    borderWidth: 3,
    borderColor: '#FDE047',
    backgroundColor: 'rgba(253, 224, 71, 0.2)',
  },
  completedStone: {
    backgroundColor: '#10B981',
    borderWidth: 3,
    borderColor: '#34D399',
    borderBottomWidth: 6,
    borderBottomColor: '#047857',
  },
  currentStone: {
    backgroundColor: '#3B82F6',
    borderWidth: 4,
    borderColor: '#FDE047',
    borderBottomWidth: 6,
    borderBottomColor: '#1D4ED8',
  },
  lockedStone: {
    backgroundColor: '#334155',
    borderWidth: 2,
    borderColor: '#475569',
    borderBottomWidth: 5,
    borderBottomColor: '#1E293B',
  },
  milestoneStone: {
    width: 82,
    height: 82,
    borderRadius: 41,
    backgroundColor: '#F59E0B',
    borderWidth: 4,
    borderColor: '#FEF08A',
    borderBottomWidth: 7,
    borderBottomColor: '#B45309',
  },
  stoneContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  stoneStars: {
    fontSize: 8,
    marginBottom: -2,
  },
  stoneCheck: {
    fontSize: 18,
    fontWeight: '900',
    color: '#FFFFFF',
  },
  stoneDayNum: {
    fontSize: 10,
    fontWeight: '800',
    color: '#D1FAE5',
    marginTop: -2,
  },
  stonePlayIcon: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: '900',
    marginLeft: 2,
  },
  currentDayNum: {
    fontSize: 10,
    fontWeight: '900',
    color: '#FFFFFF',
    marginTop: -2,
  },
  lockedIcon: {
    fontSize: 18,
    color: '#94A3B8',
  },
  lockedDayNum: {
    fontSize: 10,
    fontWeight: '700',
    color: '#94A3B8',
    marginTop: 2,
  },
  milestoneContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  milestoneEmoji: {
    fontSize: 28,
  },
  milestoneDayTag: {
    fontSize: 9,
    fontWeight: '900',
    color: '#78350F',
    marginTop: -2,
  },
  stoneLabelBadge: {
    backgroundColor: 'rgba(15, 23, 42, 0.8)',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: BORDER_RADIUS.round,
    marginTop: 6,
    alignItems: 'center',
    maxWidth: 120,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  stoneSubjectText: {
    fontSize: 9,
    fontWeight: '800',
    color: '#38BDF8',
  },
  stoneConceptText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#F8FAFC',
  },
  milestoneModalOverlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING.lg,
    zIndex: 100,
  },
  milestoneModalCard: {
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
  milestoneModalEmoji: {
    fontSize: 50,
    marginBottom: SPACING.sm,
  },
  milestoneModalTitle: {
    fontSize: 20,
    fontWeight: '900',
    color: '#FDE047',
    marginBottom: 4,
  },
  milestoneModalSub: {
    fontSize: 14,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  milestoneModalDesc: {
    fontSize: 12,
    color: '#94A3B8',
    textAlign: 'center',
    marginBottom: SPACING.lg,
    lineHeight: 18,
  },
  milestonePlayAgainBtn: {
    width: '100%',
    backgroundColor: '#F59E0B',
    paddingVertical: 14,
    borderRadius: BORDER_RADIUS.lg,
    alignItems: 'center',
    borderBottomWidth: 4,
    borderBottomColor: '#B45309',
    marginBottom: SPACING.sm,
  },
  milestonePlayAgainText: {
    color: '#78350F',
    fontSize: 15,
    fontWeight: '900',
  },
  milestoneCloseBtn: {
    paddingVertical: 8,
    alignItems: 'center',
  },
  milestoneCloseText: {
    color: '#94A3B8',
    fontSize: 14,
    fontWeight: '700',
  },
});
