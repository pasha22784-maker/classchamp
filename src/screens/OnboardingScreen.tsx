import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, SPACING, BORDER_RADIUS, SHADOWS } from '../constants/theme';
import { KID_AVATARS, GRADE_OPTIONS } from '../constants/avatars';
import { ChampButton, ChampCard } from '../components/common';
import { useUserStore } from '../store/useUserStore';
import { Grade } from '../types';
import { triggerHaptic } from '../utils/haptics';

interface OnboardingScreenProps {
  onComplete: () => void;
}

export const OnboardingScreen: React.FC<OnboardingScreenProps> = ({ onComplete }) => {
  const { updateName, setGrade, setAvatar } = useUserStore();
  const [name, setName] = useState('');
  const [selectedGrade, setSelectedGrade] = useState<Grade>(3);
  const [selectedAvatarId, setSelectedAvatarId] = useState<string>('lion');

  const handleFinish = async () => {
    triggerHaptic('success');
    await updateName(name.trim() || 'Champ');
    await setGrade(selectedGrade);
    await setAvatar(selectedAvatarId);
    onComplete();
  };

  const selectedAvatar = KID_AVATARS.find((a) => a.id === selectedAvatarId) || KID_AVATARS[0];

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.primaryDark} />
      
      {/* Top Banner */}
      <View style={styles.header}>
        <View style={styles.logoBadge}>
          <Text style={styles.logoEmoji}>🏆</Text>
        </View>
        <Text style={styles.title}>Welcome to ClassChamp!</Text>
        <Text style={styles.subtitle}>Let’s set up your daily practice profile</Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Child Name Input */}
        <ChampCard style={styles.cardSection}>
          <Text style={styles.sectionLabel}>What is your first name or nickname?</Text>
          <TextInput
            style={styles.textInput}
            placeholder="e.g. Aarav, Ananya, Kabir"
            placeholderTextColor={COLORS.textLight}
            value={name}
            onChangeText={setName}
            maxLength={18}
          />
        </ChampCard>

        {/* Grade Selection */}
        <ChampCard style={styles.cardSection}>
          <Text style={styles.sectionLabel}>Choose your Class (CBSE / NCERT):</Text>
          <View style={styles.gradeGrid}>
            {GRADE_OPTIONS.map((item) => {
              const isSelected = selectedGrade === item.grade;
              return (
                <TouchableOpacity
                  key={item.grade}
                  activeOpacity={0.8}
                  onPress={() => {
                    triggerHaptic('light');
                    setSelectedGrade(item.grade);
                  }}
                  style={[
                    styles.gradeOption,
                    isSelected && styles.gradeOptionSelected,
                  ]}
                >
                  <View style={styles.gradeRow}>
                    <Text
                      style={[
                        styles.gradeTitle,
                        isSelected && styles.gradeTitleSelected,
                      ]}
                    >
                      {item.label}
                    </Text>
                    {isSelected && (
                      <View style={styles.checkCircle}>
                        <Text style={styles.checkText}>✓</Text>
                      </View>
                    )}
                  </View>
                  <Text
                    style={[
                      styles.gradeDesc,
                      isSelected && styles.gradeDescSelected,
                    ]}
                  >
                    {item.desc}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </ChampCard>

        {/* Avatar Buddy Selection */}
        <ChampCard style={styles.cardSection}>
          <Text style={styles.sectionLabel}>Pick your Learning Mascot:</Text>
          <View style={styles.avatarGrid}>
            {KID_AVATARS.map((avatar) => {
              const isChosen = selectedAvatarId === avatar.id;
              return (
                <TouchableOpacity
                  key={avatar.id}
                  activeOpacity={0.8}
                  onPress={() => {
                    triggerHaptic('light');
                    setSelectedAvatarId(avatar.id);
                  }}
                  style={[
                    styles.avatarTile,
                    isChosen && styles.avatarTileChosen,
                  ]}
                >
                  <View
                    style={[
                      styles.avatarCircle,
                      { backgroundColor: avatar.badgeColor + '25' },
                      isChosen && { borderColor: avatar.badgeColor, borderWidth: 3 },
                    ]}
                  >
                    <Text style={styles.avatarEmoji}>{avatar.emoji}</Text>
                  </View>
                  <Text
                    style={[
                      styles.avatarName,
                      isChosen && styles.avatarNameChosen,
                    ]}
                    numberOfLines={1}
                  >
                    {avatar.name.split(' ')[0]}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </ChampCard>

        {/* Start Button */}
        <ChampButton
          title={`Start Learning with ${selectedAvatar.name.split(' ')[0]}!`}
          icon="🚀"
          variant="gold"
          size="lg"
          onPress={handleFinish}
          style={styles.submitBtn}
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
  header: {
    alignItems: 'center',
    paddingVertical: SPACING.lg,
    paddingHorizontal: SPACING.lg,
    backgroundColor: COLORS.primaryDark,
  },
  logoBadge: {
    width: 50,
    height: 50,
    borderRadius: BORDER_RADIUS.md,
    backgroundColor: COLORS.gold,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SPACING.sm,
  },
  logoEmoji: {
    fontSize: 28,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: COLORS.white,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 13,
    color: COLORS.goldLight,
    fontWeight: '500',
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
  cardSection: {
    marginBottom: SPACING.lg,
  },
  sectionLabel: {
    fontSize: 15,
    fontWeight: '700',
    color: COLORS.textDark,
    marginBottom: SPACING.md,
  },
  textInput: {
    backgroundColor: COLORS.backgroundAlt,
    borderWidth: 1.5,
    borderColor: COLORS.borderStrong,
    borderRadius: BORDER_RADIUS.md,
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.md,
    fontSize: 16,
    color: COLORS.textDark,
    fontWeight: '600',
  },
  gradeGrid: {
    gap: SPACING.sm,
  },
  gradeOption: {
    backgroundColor: COLORS.backgroundAlt,
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.md,
    borderWidth: 2,
    borderColor: COLORS.border,
  },
  gradeOptionSelected: {
    backgroundColor: COLORS.primarySoft,
    borderColor: COLORS.primary,
  },
  gradeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 2,
  },
  gradeTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.textDark,
  },
  gradeTitleSelected: {
    color: COLORS.primary,
  },
  gradeDesc: {
    fontSize: 12,
    color: COLORS.textMedium,
  },
  gradeDescSelected: {
    color: COLORS.primaryDark,
    fontWeight: '600',
  },
  checkCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkText: {
    color: COLORS.white,
    fontSize: 11,
    fontWeight: '800',
  },
  avatarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: SPACING.md,
  },
  avatarTile: {
    alignItems: 'center',
    width: '30%',
    paddingVertical: SPACING.xs,
  },
  avatarTileChosen: {
    transform: [{ scale: 1.05 }],
  },
  avatarCircle: {
    width: 58,
    height: 58,
    borderRadius: 29,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
  },
  avatarEmoji: {
    fontSize: 28,
  },
  avatarName: {
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.textMedium,
  },
  avatarNameChosen: {
    color: COLORS.primary,
    fontWeight: '800',
  },
  submitBtn: {
    marginTop: SPACING.sm,
    marginBottom: SPACING.xxl,
  },
});
