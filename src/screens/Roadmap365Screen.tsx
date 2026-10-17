import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, SPACING, BORDER_RADIUS, SHADOWS } from '../constants/theme';
import { ChampHeader, ChampCard, ChampBadge } from '../components/common';
import { getDayMissionInfo, DayMission } from '../data/curriculum365Engine';
import { Grade } from '../types';
import { triggerHaptic } from '../utils/haptics';

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
  const [selectedTerm, setSelectedTerm] = useState<1 | 2 | 3 | 4>(1);

  // Term day ranges
  const termRanges = {
    1: { start: 1, end: 90, label: 'Term 1: Foundations (Days 1-90)' },
    2: { start: 91, end: 180, label: 'Term 2: Operations (Days 91-180)' },
    3: { start: 181, end: 270, label: 'Term 3: Time & Words (Days 181-270)' },
    4: { start: 271, end: 365, label: 'Term 4: Mastery (Days 271-365)' },
  }[selectedTerm];

  // Generate day items for the selected term
  const termDays: DayMission[] = [];
  // For smooth rendering, display in chunks of 30 days or scrollable
  const displayLimit = Math.min(termRanges.end, termRanges.start + 29); // 30 days per view
  for (let d = termRanges.start; d <= displayLimit; d++) {
    termDays.push(getDayMissionInfo(grade, d));
  }

  const handleTermChange = (term: 1 | 2 | 3 | 4) => {
    triggerHaptic('light');
    setSelectedTerm(term);
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.primaryDark} />

      <ChampHeader
        title={typeof grade === 'number' ? `Class ${grade} • 365-Day Journey` : `${grade} • 365-Day Journey`}
        subtitle="10-Min Daily Practice Every Single Day"
        onBack={onBack}
      />

      {/* Term Selector Pills */}
      <View style={styles.termBar}>
        {[1, 2, 3, 4].map((t) => (
          <TouchableOpacity
            key={t}
            activeOpacity={0.8}
            onPress={() => handleTermChange(t as 1 | 2 | 3 | 4)}
            style={[
              styles.termPill,
              selectedTerm === t && styles.termPillActive,
            ]}
          >
            <Text
              style={[
                styles.termPillText,
                selectedTerm === t && styles.termPillTextActive,
              ]}
            >
              Term {t}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Banner Info */}
        <ChampCard variant="gold" style={styles.bannerCard}>
          <Text style={styles.bannerTitle}>📅 {termRanges.label}</Text>
          <Text style={styles.bannerSub}>
            Every single day is planned with targeted CBSE practice. 365 days = 365 champion steps!
          </Text>
        </ChampCard>

        {/* 365-Day Timeline Path */}
        <View style={styles.timelineList}>
          {termDays.map((mission) => {
            const isCompleted = completedDays.includes(mission.dayNumber);
            const isCurrent = mission.dayNumber === currentActiveDay;

            return (
              <ChampCard
                key={mission.dayNumber}
                style={styles.dayCard}
                shadow="small"
                onPress={() => onSelectDay(mission.dayNumber)}
              >
                <View style={styles.dayRow}>
                  {/* Day Node Circle */}
                  <View
                    style={[
                      styles.dayNodeCircle,
                      isCompleted && styles.dayNodeCompleted,
                      isCurrent && styles.dayNodeCurrent,
                    ]}
                  >
                    <Text style={styles.dayNodeEmoji}>
                      {isCompleted ? '⭐' : mission.badgeEmoji}
                    </Text>
                  </View>

                  {/* Day Mission Information */}
                  <View style={styles.dayInfoCol}>
                    <View style={styles.dayBadgeRow}>
                      <ChampBadge
                        label={`Day ${mission.dayNumber}`}
                        variant={isCurrent ? 'primary' : 'neutral'}
                        size="sm"
                      />
                      <ChampBadge
                        label={
                          mission.subject === 'maths'
                            ? 'Maths 📐'
                            : mission.subject === 'english'
                            ? 'English 📚'
                            : 'Hindi 🇮🇳'
                        }
                        variant={
                          mission.subject === 'maths'
                            ? 'primary'
                            : mission.subject === 'english'
                            ? 'gold'
                            : 'success'
                        }
                        size="sm"
                      />
                      {mission.isMilestone && (
                        <ChampBadge label="Milestone 🏆" variant="warning" size="sm" />
                      )}
                    </View>

                    <Text style={styles.dayTitle}>{mission.title}</Text>
                    <Text style={styles.dayConcept}>{mission.concept}</Text>
                  </View>

                  {/* Action CTA */}
                  <View style={styles.ctaBox}>
                    <Text
                      style={[
                        styles.ctaText,
                        isCurrent && styles.ctaTextCurrent,
                        isCompleted && styles.ctaTextCompleted,
                      ]}
                    >
                      {isCompleted ? 'Review' : isCurrent ? 'Start ▶' : 'Play'}
                    </Text>
                  </View>
                </View>
              </ChampCard>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.primaryDark,
  },
  termBar: {
    flexDirection: 'row',
    backgroundColor: COLORS.primaryDark,
    paddingHorizontal: SPACING.lg,
    paddingBottom: SPACING.md,
    gap: SPACING.sm,
  },
  termPill: {
    flex: 1,
    paddingVertical: 6,
    borderRadius: BORDER_RADIUS.round,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  termPillActive: {
    backgroundColor: COLORS.gold,
  },
  termPillText: {
    fontSize: 12,
    fontWeight: '700',
    color: COLORS.white,
  },
  termPillTextActive: {
    color: COLORS.textDark,
  },
  scrollContent: {
    backgroundColor: COLORS.background,
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.lg,
    paddingBottom: SPACING.giant,
    borderTopLeftRadius: BORDER_RADIUS.xl,
    borderTopRightRadius: BORDER_RADIUS.xl,
    minHeight: '100%',
  },
  bannerCard: {
    marginBottom: SPACING.lg,
  },
  bannerTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: COLORS.textDark,
    marginBottom: 4,
  },
  bannerSub: {
    fontSize: 12,
    color: COLORS.textMedium,
    lineHeight: 16,
  },
  timelineList: {
    gap: SPACING.md,
    marginBottom: SPACING.xxl,
  },
  dayCard: {
    marginBottom: SPACING.xs,
  },
  dayRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.md,
  },
  dayNodeCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: COLORS.backgroundAlt,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: COLORS.border,
  },
  dayNodeCurrent: {
    borderColor: COLORS.primary,
    backgroundColor: COLORS.primarySoft,
  },
  dayNodeCompleted: {
    borderColor: COLORS.gold,
    backgroundColor: '#FEF3C7',
  },
  dayNodeEmoji: {
    fontSize: 22,
  },
  dayInfoCol: {
    flex: 1,
  },
  dayBadgeRow: {
    flexDirection: 'row',
    gap: SPACING.xs,
    marginBottom: 4,
  },
  dayTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: COLORS.textDark,
    marginBottom: 2,
  },
  dayConcept: {
    fontSize: 11,
    color: COLORS.textMedium,
  },
  ctaBox: {
    paddingLeft: SPACING.xs,
  },
  ctaText: {
    fontSize: 13,
    fontWeight: '800',
    color: COLORS.primary,
  },
  ctaTextCurrent: {
    color: COLORS.primaryDark,
  },
  ctaTextCompleted: {
    color: '#065F46',
  },
});
