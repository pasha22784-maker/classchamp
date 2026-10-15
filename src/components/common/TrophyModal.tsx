import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { COLORS, BORDER_RADIUS, SPACING, SHADOWS } from '../../constants/theme';
import { ChampButton } from './ChampButton';
import { ChampBadge } from './ChampBadge';
import { UserProfile } from '../../types';

interface TrophyModalProps {
  visible: boolean;
  profile: UserProfile;
  onClose: () => void;
}

interface BadgeItem {
  id: string;
  title: string;
  desc: string;
  emoji: string;
  isUnlocked: boolean;
}

export const TrophyModal: React.FC<TrophyModalProps> = ({
  visible,
  profile,
  onClose,
}) => {
  const badges: BadgeItem[] = [
    {
      id: 'b1',
      title: '3-Day Champ',
      desc: 'Practice for 3 days in a row',
      emoji: '🔥',
      isUnlocked: profile.currentStreak >= 3,
    },
    {
      id: 'b2',
      title: '7-Day Super Streak',
      desc: 'Unbroken week of daily practice',
      emoji: '⚡',
      isUnlocked: profile.currentStreak >= 7,
    },
    {
      id: 'b3',
      title: 'Star Collector',
      desc: 'Collect 50 or more total stars',
      emoji: '⭐',
      isUnlocked: profile.totalStars >= 50,
    },
    {
      id: 'b4',
      title: 'Century Club',
      desc: 'Reach 100 practice stars',
      emoji: '🌟',
      isUnlocked: profile.totalStars >= 100,
    },
    {
      id: 'b5',
      title: 'Trophy Hunter',
      desc: 'Earn your first gold trophy',
      emoji: '🏆',
      isUnlocked: profile.totalTrophies >= 1,
    },
    {
      id: 'b6',
      title: 'Habit Champion',
      desc: 'Active for 5 or more days',
      emoji: '🎖️',
      isUnlocked: profile.historyDatesCompleted.length >= 5,
    },
  ];

  const unlockedCount = badges.filter((b) => b.isUnlocked).length;

  return (
    <Modal
      transparent
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={[styles.modalCard, SHADOWS.large]}>
          <View style={styles.header}>
            <View style={styles.trophyIconBox}>
              <Text style={styles.trophyEmoji}>🏆</Text>
            </View>
            <Text style={styles.title}>Your Trophy Room</Text>
            <View style={styles.badgeRow}>
              <ChampBadge
                label={`${unlockedCount} / ${badges.length} Badges Unlocked`}
                variant="gold"
                size="sm"
              />
            </View>
          </View>

          <ScrollView style={styles.badgesList} showsVerticalScrollIndicator={false}>
            <View style={styles.badgesGrid}>
              {badges.map((b) => (
                <View
                  key={b.id}
                  style={[
                    styles.badgeTile,
                    b.isUnlocked ? styles.badgeTileUnlocked : styles.badgeTileLocked,
                  ]}
                >
                  <View
                    style={[
                      styles.iconCircle,
                      b.isUnlocked ? styles.iconCircleUnlocked : styles.iconCircleLocked,
                    ]}
                  >
                    <Text style={styles.badgeEmoji}>
                      {b.isUnlocked ? b.emoji : '🔒'}
                    </Text>
                  </View>
                  <Text
                    style={[
                      styles.badgeTitle,
                      b.isUnlocked ? styles.badgeTitleUnlocked : styles.badgeTitleLocked,
                    ]}
                    numberOfLines={1}
                  >
                    {b.title}
                  </Text>
                  <Text style={styles.badgeDesc} numberOfLines={2}>
                    {b.desc}
                  </Text>
                </View>
              ))}
            </View>
          </ScrollView>

          <ChampButton
            title="Awesome, Keep Practicing!"
            variant="gold"
            size="md"
            onPress={onClose}
            style={styles.closeBtn}
          />
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
    padding: SPACING.lg,
  },
  modalCard: {
    width: '100%',
    maxHeight: '85%',
    backgroundColor: COLORS.white,
    borderRadius: BORDER_RADIUS.xl,
    padding: SPACING.xl,
  },
  header: {
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  trophyIconBox: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#FEF3C7',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SPACING.xs,
  },
  trophyEmoji: {
    fontSize: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: '900',
    color: COLORS.textDark,
    marginBottom: 4,
  },
  badgeRow: {
    marginTop: 2,
  },
  badgesList: {
    marginVertical: SPACING.sm,
  },
  badgesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: SPACING.md,
  },
  badgeTile: {
    width: '47%',
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.md,
    alignItems: 'center',
    borderWidth: 1.5,
  },
  badgeTileUnlocked: {
    backgroundColor: '#FFFDF5',
    borderColor: '#FDE68A',
  },
  badgeTileLocked: {
    backgroundColor: COLORS.backgroundAlt,
    borderColor: COLORS.border,
    opacity: 0.6,
  },
  iconCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SPACING.sm,
  },
  iconCircleUnlocked: {
    backgroundColor: '#FEF3C7',
  },
  iconCircleLocked: {
    backgroundColor: COLORS.border,
  },
  badgeEmoji: {
    fontSize: 26,
  },
  badgeTitle: {
    fontSize: 13,
    fontWeight: '800',
    marginBottom: 2,
    textAlign: 'center',
  },
  badgeTitleUnlocked: {
    color: COLORS.textDark,
  },
  badgeTitleLocked: {
    color: COLORS.textLight,
  },
  badgeDesc: {
    fontSize: 11,
    color: COLORS.textMedium,
    textAlign: 'center',
    lineHeight: 14,
  },
  closeBtn: {
    marginTop: SPACING.md,
  },
});
