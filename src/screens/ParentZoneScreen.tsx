import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  TextInput,
  Switch,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, SPACING, BORDER_RADIUS } from '../constants/theme';
import { ChampHeader, ChampCard, ChampButton, ChampBadge } from '../components/common';
import { GRADE_OPTIONS } from '../constants/avatars';
import { useUserStore } from '../store/useUserStore';
import { triggerHaptic } from '../utils/haptics';

interface ParentZoneScreenProps {
  onBack: () => void;
}

export const ParentZoneScreen: React.FC<ParentZoneScreenProps> = ({ onBack }) => {
  const { profile, updateName, setGrade, setProStatus, resetProgress } = useUserStore();
  const [editingName, setEditingName] = useState(profile.name);
  const [isSaved, setIsSaved] = useState(false);

  const handleSaveName = async () => {
    if (editingName.trim()) {
      triggerHaptic('success');
      await updateName(editingName);
      setIsSaved(true);
      setTimeout(() => setIsSaved(false), 2000);
    }
  };

  const handleTogglePro = async (value: boolean) => {
    triggerHaptic('medium');
    await setProStatus(value);
  };

  const handleConfirmReset = () => {
    Alert.alert(
      'Reset All Progress?',
      'This will clear streak, stars, and trophies. This action cannot be undone.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Reset',
          style: 'destructive',
          onPress: async () => {
            triggerHaptic('warning');
            await resetProgress();
            onBack();
          },
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.primaryDark} />

      <ChampHeader
        title="Parent Zone & Reports"
        subtitle="Manage settings & child progress"
        onBack={onBack}
      />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Child Progress Overview Card */}
        <ChampCard style={styles.card}>
          <Text style={styles.cardTitle}>📊 Performance & Habit Stats</Text>
          <View style={styles.statsGrid}>
            <View style={styles.statBox}>
              <Text style={styles.statEmoji}>🔥</Text>
              <Text style={styles.statValue}>{profile.currentStreak}</Text>
              <Text style={styles.statLabel}>Day Streak</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statEmoji}>⭐</Text>
              <Text style={styles.statValue}>{profile.totalStars}</Text>
              <Text style={styles.statLabel}>Stars Earned</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statEmoji}>🏆</Text>
              <Text style={styles.statValue}>{profile.totalTrophies}</Text>
              <Text style={styles.statLabel}>Trophies</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statEmoji}>📅</Text>
              <Text style={styles.statValue}>{profile.historyDatesCompleted.length}</Text>
              <Text style={styles.statLabel}>Days Active</Text>
            </View>
          </View>
        </ChampCard>

        {/* Edit Child Profile */}
        <ChampCard style={styles.card}>
          <Text style={styles.cardTitle}>✏️ Child's Display Name</Text>
          <View style={styles.inputRow}>
            <TextInput
              style={styles.textInput}
              value={editingName}
              onChangeText={setEditingName}
              maxLength={18}
            />
            <ChampButton
              title={isSaved ? 'Saved! ✓' : 'Update'}
              variant={isSaved ? 'success' : 'primary'}
              size="sm"
              onPress={handleSaveName}
            />
          </View>
        </ChampCard>

        {/* Change Child's Class / Grade (Parent-Controlled) */}
        <ChampCard style={styles.card}>
          <Text style={styles.cardTitle}>🎓 Child's Class / Grade (CBSE / NCERT)</Text>
          <Text style={styles.cardSub}>
            Select the grade your child is currently studying in. The daily 365-day practice missions and subjects will automatically adapt.
          </Text>
          <View style={{ gap: SPACING.sm, marginTop: SPACING.md }}>
            {GRADE_OPTIONS.map((g) => {
              const isSelected = profile.grade === g.grade;
              return (
                <TouchableOpacity
                  key={g.grade}
                  activeOpacity={0.8}
                  onPress={async () => {
                    triggerHaptic('success');
                    await setGrade(g.grade);
                  }}
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: isSelected ? COLORS.primarySoft : COLORS.backgroundAlt,
                    borderWidth: 2,
                    borderColor: isSelected ? COLORS.primary : COLORS.border,
                    borderRadius: BORDER_RADIUS.md,
                    padding: SPACING.md,
                  }}
                >
                  <View style={{ flex: 1, paddingRight: SPACING.sm }}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '800',
                        color: isSelected ? COLORS.primary : COLORS.textDark,
                      }}
                    >
                      {g.label}
                    </Text>
                    <Text style={{ fontSize: 11, color: COLORS.textMedium, marginTop: 2 }}>
                      {g.desc}
                    </Text>
                  </View>
                  {isSelected && (
                    <View
                      style={{
                        width: 22,
                        height: 22,
                        borderRadius: 11,
                        backgroundColor: COLORS.primary,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Text style={{ color: COLORS.white, fontSize: 12, fontWeight: '800' }}>✓</Text>
                    </View>
                  )}
                </TouchableOpacity>
              );
            })}
          </View>
        </ChampCard>

        {/* Freemium Pro Status Sandbox */}
        <ChampCard style={styles.card}>
          <View style={styles.switchRow}>
            <View style={styles.switchTextCol}>
              <View style={styles.proBadgeRow}>
                <Text style={styles.cardTitle}>🌟 ClassChamp Pro</Text>
                <ChampBadge
                  label={profile.isPro ? 'Active Pro' : 'Free Tier'}
                  variant={profile.isPro ? 'gold' : 'neutral'}
                  size="sm"
                />
              </View>
              <Text style={styles.cardSub}>
                Unlock unlimited daily quizzes, past revision archives, and mistake workbooks.
              </Text>
            </View>
            <Switch
              value={profile.isPro}
              onValueChange={handleTogglePro}
              trackColor={{ false: COLORS.border, true: COLORS.gold }}
              thumbColor={profile.isPro ? COLORS.goldDark : COLORS.white}
            />
          </View>
        </ChampCard>

        {/* Google Play Families Compliance Guarantee */}
        <ChampCard style={styles.card} variant="accent">
          <Text style={styles.cardTitle}>🛡️ Google Play Families Safe</Text>
          <Text style={styles.policyText}>
            • 100% Ad-Free environment: zero behavioral trackers.{'\n'}
            • Strictly COPPA & Student Privacy compliant.{'\n'}
            • Outbound sharing & settings require parent math gates.{'\n'}
            • App Version: 1.0.0 (Production-Ready)
          </Text>
        </ChampCard>

        {/* Reset Progress */}
        <ChampButton
          title="Reset Child Progress"
          variant="danger"
          size="md"
          onPress={handleConfirmReset}
          style={styles.resetBtn}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.primaryDark,
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
  card: {
    marginBottom: SPACING.lg,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: COLORS.textDark,
    marginBottom: SPACING.sm,
  },
  cardSub: {
    fontSize: 12,
    color: COLORS.textMedium,
    lineHeight: 16,
    marginTop: 2,
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: SPACING.xs,
  },
  statBox: {
    alignItems: 'center',
    width: '23%',
    backgroundColor: COLORS.backgroundAlt,
    borderRadius: BORDER_RADIUS.md,
    paddingVertical: SPACING.md,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  statEmoji: {
    fontSize: 22,
    marginBottom: 4,
  },
  statValue: {
    fontSize: 18,
    fontWeight: '800',
    color: COLORS.textDark,
  },
  statLabel: {
    fontSize: 10,
    fontWeight: '600',
    color: COLORS.textMedium,
    marginTop: 2,
    textAlign: 'center',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
  },
  textInput: {
    flex: 1,
    backgroundColor: COLORS.backgroundAlt,
    borderWidth: 1.5,
    borderColor: COLORS.borderStrong,
    borderRadius: BORDER_RADIUS.md,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    fontSize: 15,
    color: COLORS.textDark,
    fontWeight: '600',
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  switchTextCol: {
    flex: 1,
    paddingRight: SPACING.md,
  },
  proBadgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
  },
  policyText: {
    fontSize: 12,
    color: COLORS.textMedium,
    lineHeight: 18,
  },
  resetBtn: {
    marginTop: SPACING.sm,
    marginBottom: SPACING.xxl,
  },
});
