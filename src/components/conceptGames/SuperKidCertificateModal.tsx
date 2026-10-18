import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  ScrollView,
  Share,
  Platform,
  Alert,
} from 'react-native';
import { COLORS, SPACING, BORDER_RADIUS, SHADOWS } from '../../constants/theme';
import { triggerHaptic } from '../../utils/haptics';
import { soundManager } from '../../utils/soundManager';
import { Grade } from '../../types';
import { GRADE_OPTIONS } from '../../constants/avatars';

interface SuperKidCertificateModalProps {
  visible: boolean;
  onClose: () => void;
  childName: string;
  grade: Grade;
  avatarEmoji: string;
  avatarBadgeColor: string;
  totalStars?: number;
  streakDays?: number;
}

export const SuperKidCertificateModal: React.FC<SuperKidCertificateModalProps> = ({
  visible,
  onClose,
  childName,
  grade,
  avatarEmoji,
  avatarBadgeColor,
  totalStars = 120,
  streakDays = 5,
}) => {
  const gradeLabel =
    GRADE_OPTIONS.find((g) => g.grade === grade)?.label || `Class ${grade}`;

  const todayStr = new Date().toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const handleShare = async () => {
    soundManager.playFanfare();
    triggerHaptic('success');
    const shareMessage = `🌟 Proud Parent Moment! 🌟\n\nMy child *${childName || 'Champ'}* (${gradeLabel}) has officially been awarded the *Super Kid STEM Diploma* on ClassChamp! 🏆🔬\n\nMastered Experiential Labs:\n✅ ⚖️ Gravitational Balance & Equilibrium\n✅ 🍕 Visual Fractional Slices\n✅ 🧲 Magnetic Polarity & Repulsion\n✅ 🌈 Prism Light Refraction (VIBGYOR)\n✅ ⚡ Angle Laser Geometry\n\nNo rote memorization — 100% practical learning! 🚀\nDownload ClassChamp: classchamp.in`;

    try {
      if (Platform.OS === 'web' && typeof navigator !== 'undefined' && (navigator as any).share) {
        await (navigator as any).share({
          title: `${childName}'s Super Kid STEM Certificate`,
          text: shareMessage,
        });
      } else {
        await Share.share({
          message: shareMessage,
          title: `${childName}'s Super Kid STEM Certificate`,
        });
      }
    } catch {
      // User cancelled share
    }
  };

  const handlePrint = () => {
    soundManager.playBell();
    triggerHaptic('medium');
    Alert.alert(
      '🏆 Ready to Print & Frame!',
      `Take a quick screenshot of this certificate to print and frame on ${childName}'s study table! Parents love showing this to grandparents and friends.`
    );
  };

  return (
    <Modal visible={visible} animationType="slide" transparent onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          {/* Top Bar */}
          <View style={styles.topBar}>
            <View style={styles.topBarBadge}>
              <Text style={styles.topBarBadgeText}>🏅 OFFICIAL STEM CREDENTIAL</Text>
            </View>
            <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
              <Text style={styles.closeText}>✕</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            {/* The Certificate Canvas */}
            <View style={styles.certCard}>
              {/* Outer Golden Border */}
              <View style={styles.certInnerBorder}>
                {/* Header Crest */}
                <View style={styles.crestRow}>
                  <Text style={styles.crestStar}>★</Text>
                  <Text style={styles.crestStar}>★</Text>
                  <Text style={styles.crestEmblem}>🏛️</Text>
                  <Text style={styles.crestStar}>★</Text>
                  <Text style={styles.crestStar}>★</Text>
                </View>

                <Text style={styles.academyName}>
                  CLASSCHAMP STEM INNOVATION ACADEMY
                </Text>
                <Text style={styles.academySub}>
                  Affiliated with NEP 2020 Experiential Learning Standards
                </Text>

                <View style={styles.certDivider} />

                {/* Title */}
                <Text style={styles.certBigTitle}>SUPER KID DIPLOMA</Text>
                <Text style={styles.certTagline}>
                  CERTIFICATE OF HANDS-ON PRACTICAL MASTERY
                </Text>

                {/* Recipient Intro */}
                <Text style={styles.certIntroText}>
                  THIS OFFICIAL RECOGNITION IS PROUDLY BESTOWED UPON
                </Text>

                {/* Avatar & Child Name */}
                <View style={styles.recipientRow}>
                  <View
                    style={[
                      styles.avatarBadge,
                      { backgroundColor: avatarBadgeColor || '#F59E0B' },
                    ]}
                  >
                    <Text style={styles.avatarEmoji}>{avatarEmoji || '🦁'}</Text>
                  </View>
                  <Text style={styles.studentName}>
                    {childName ? childName.toUpperCase() : 'SUPER CHAMP'}
                  </Text>
                </View>

                <View style={styles.gradeBadge}>
                  <Text style={styles.gradeBadgeText}>
                    🎓 {gradeLabel} • JUNIOR SCIENTIST
                  </Text>
                </View>

                {/* Citation */}
                <Text style={styles.citationText}>
                  For extraordinary curiosity, analytical reasoning, and mastery of
                  interactive physics, balance mechanics, fraction partitioning, and optics
                  through hands-on virtual experimentation.
                </Text>

                {/* Mastered Skills Grid */}
                <View style={styles.skillsSection}>
                  <Text style={styles.skillsSectionHeader}>
                    VERIFIED EXPERIENTIAL COMPETENCIES:
                  </Text>
                  <View style={styles.skillsGrid}>
                    <View style={styles.skillItem}>
                      <Text style={styles.skillEmoji}>⚖️</Text>
                      <View style={styles.skillTextBox}>
                        <Text style={styles.skillTitle}>Gravitational Equilibrium</Text>
                        <Text style={styles.skillSub}>Physical Balance & Fulcrum</Text>
                      </View>
                    </View>

                    <View style={styles.skillItem}>
                      <Text style={styles.skillEmoji}>🍕</Text>
                      <View style={styles.skillTextBox}>
                        <Text style={styles.skillTitle}>Fractional Partitioning</Text>
                        <Text style={styles.skillSub}>Visual Parts of a Whole</Text>
                      </View>
                    </View>

                    <View style={styles.skillItem}>
                      <Text style={styles.skillEmoji}>🧲</Text>
                      <View style={styles.skillTextBox}>
                        <Text style={styles.skillTitle}>Electromagnetism</Text>
                        <Text style={styles.skillSub}>Dipole Polarity & Fields</Text>
                      </View>
                    </View>

                    <View style={styles.skillItem}>
                      <Text style={styles.skillEmoji}>🌈</Text>
                      <View style={styles.skillTextBox}>
                        <Text style={styles.skillTitle}>Optical Dispersion</Text>
                        <Text style={styles.skillSub}>VIBGYOR Rainbow Prism</Text>
                      </View>
                    </View>

                    <View style={styles.skillItem}>
                      <Text style={styles.skillEmoji}>⏰</Text>
                      <View style={styles.skillTextBox}>
                        <Text style={styles.skillTitle}>Rotational Chronometry</Text>
                        <Text style={styles.skillSub}>360° Clock Geometry</Text>
                      </View>
                    </View>

                    <View style={styles.skillItem}>
                      <Text style={styles.skillEmoji}>⚡</Text>
                      <View style={styles.skillTextBox}>
                        <Text style={styles.skillTitle}>Laser Angular Optics</Text>
                        <Text style={styles.skillSub}>Protractor Trajectory</Text>
                      </View>
                    </View>
                  </View>
                </View>

                {/* Footer Seal & Signature */}
                <View style={styles.certFooterRow}>
                  {/* Left: Date */}
                  <View style={styles.footerCol}>
                    <Text style={styles.footerLabel}>DATE OF ISSUANCE</Text>
                    <Text style={styles.footerVal}>{todayStr}</Text>
                  </View>

                  {/* Middle: Gold Seal */}
                  <View style={styles.sealBox}>
                    <View style={styles.sealCircle}>
                      <Text style={styles.sealRibbon}>🏅</Text>
                      <Text style={styles.sealText}>AUTHENTIC</Text>
                      <Text style={styles.sealYear}>SUPER KID</Text>
                    </View>
                  </View>

                  {/* Right: Signature */}
                  <View style={styles.footerCol}>
                    <Text style={styles.signatureScript}>ClassChamp</Text>
                    <Text style={styles.footerLabel}>CHIEF STEM DIRECTOR</Text>
                    <Text style={styles.footerVal}>Dr. A. Verma (Ph.D)</Text>
                  </View>
                </View>

                <View style={styles.certBottomPill}>
                  <Text style={styles.certBottomText}>
                    ⭐ {totalStars} Stars Earned • 🔥 {streakDays} Day Practice Streak
                  </Text>
                </View>
              </View>
            </View>

            {/* Action Buttons for Parents */}
            <View style={styles.actionsContainer}>
              <TouchableOpacity
                style={styles.shareBtn}
                activeOpacity={0.88}
                onPress={handleShare}
              >
                <Text style={styles.shareBtnIcon}>📲</Text>
                <View>
                  <Text style={styles.shareBtnTitle}>Share with Family / WhatsApp</Text>
                  <Text style={styles.shareBtnSub}>
                    Show off your Super Kid’s achievement! 🌟
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.printBtn}
                activeOpacity={0.85}
                onPress={handlePrint}
              >
                <Text style={styles.printBtnIcon}>🖨️</Text>
                <Text style={styles.printBtnText}>Save / Print for Study Desk</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 5, 20, 0.92)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: SPACING.md,
  },
  container: {
    width: '94%',
    maxHeight: '92%',
    backgroundColor: '#0F172A',
    borderRadius: BORDER_RADIUS.xl,
    borderWidth: 2,
    borderColor: '#F59E0B',
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
    borderBottomColor: 'rgba(245, 158, 11, 0.3)',
  },
  topBarBadge: {
    backgroundColor: 'rgba(245, 158, 11, 0.15)',
    paddingHorizontal: SPACING.sm,
    paddingVertical: 4,
    borderRadius: BORDER_RADIUS.sm,
    borderWidth: 1,
    borderColor: '#F59E0B',
  },
  topBarBadgeText: {
    color: '#FCD34D',
    fontWeight: '800',
    fontSize: 11,
    letterSpacing: 0.5,
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
  scrollContent: {
    padding: SPACING.md,
    alignItems: 'center',
  },
  certCard: {
    width: '100%',
    backgroundColor: '#FFFBEB',
    borderRadius: BORDER_RADIUS.lg,
    padding: 10,
    borderWidth: 4,
    borderColor: '#D97706',
    ...SHADOWS.card,
  },
  certInnerBorder: {
    borderWidth: 2,
    borderColor: '#B45309',
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.md,
    alignItems: 'center',
    backgroundColor: '#FEF3C7',
  },
  crestRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
    gap: 4,
  },
  crestStar: {
    color: '#D97706',
    fontSize: 14,
  },
  crestEmblem: {
    fontSize: 26,
    marginHorizontal: 4,
  },
  academyName: {
    fontSize: 13,
    fontWeight: '900',
    color: '#78350F',
    letterSpacing: 1,
    textAlign: 'center',
  },
  academySub: {
    fontSize: 10,
    color: '#92400E',
    marginTop: 2,
    textAlign: 'center',
    fontWeight: '600',
  },
  certDivider: {
    height: 2,
    backgroundColor: '#D97706',
    width: '80%',
    marginVertical: 10,
  },
  certBigTitle: {
    fontSize: 22,
    fontWeight: '900',
    color: '#1E293B',
    letterSpacing: 1.5,
    textAlign: 'center',
  },
  certTagline: {
    fontSize: 10,
    fontWeight: '800',
    color: '#D97706',
    letterSpacing: 1,
    marginTop: 2,
    textAlign: 'center',
  },
  certIntroText: {
    fontSize: 10,
    color: '#64748B',
    fontWeight: '700',
    marginTop: 12,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  recipientRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    gap: 8,
  },
  avatarBadge: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#FFF',
  },
  avatarEmoji: {
    fontSize: 20,
  },
  studentName: {
    fontSize: 20,
    fontWeight: '900',
    color: '#0F172A',
    textDecorationLine: 'underline',
    textDecorationColor: '#F59E0B',
  },
  gradeBadge: {
    backgroundColor: '#1E293B',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: BORDER_RADIUS.full,
    marginTop: 6,
  },
  gradeBadgeText: {
    color: '#FCD34D',
    fontSize: 11,
    fontWeight: '800',
  },
  citationText: {
    fontSize: 11,
    color: '#334155',
    textAlign: 'center',
    lineHeight: 16,
    marginTop: 10,
    paddingHorizontal: 8,
    fontStyle: 'italic',
  },
  skillsSection: {
    width: '100%',
    marginTop: 14,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: BORDER_RADIUS.md,
    padding: 10,
    borderWidth: 1,
    borderColor: '#FDE68A',
  },
  skillsSectionHeader: {
    fontSize: 9,
    fontWeight: '800',
    color: '#92400E',
    letterSpacing: 0.8,
    marginBottom: 6,
    textAlign: 'center',
  },
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 6,
  },
  skillItem: {
    width: '48%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 6,
    borderRadius: BORDER_RADIUS.sm,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    gap: 6,
  },
  skillEmoji: {
    fontSize: 16,
  },
  skillTextBox: {
    flex: 1,
  },
  skillTitle: {
    fontSize: 10,
    fontWeight: '800',
    color: '#1E293B',
  },
  skillSub: {
    fontSize: 8,
    color: '#64748B',
  },
  certFooterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 16,
    paddingHorizontal: 4,
  },
  footerCol: {
    flex: 1,
    alignItems: 'center',
  },
  footerLabel: {
    fontSize: 8,
    fontWeight: '800',
    color: '#64748B',
    letterSpacing: 0.5,
  },
  footerVal: {
    fontSize: 10,
    fontWeight: '700',
    color: '#1E293B',
    marginTop: 2,
    textAlign: 'center',
  },
  signatureScript: {
    fontSize: 14,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: '#0F766E',
    letterSpacing: 1,
    marginBottom: 2,
  },
  sealBox: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 6,
  },
  sealCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#F59E0B',
    borderWidth: 3,
    borderColor: '#D97706',
    alignItems: 'center',
    justifyContent: 'center',
    ...SHADOWS.medium,
  },
  sealRibbon: {
    fontSize: 14,
  },
  sealText: {
    fontSize: 7,
    fontWeight: '900',
    color: '#78350F',
    letterSpacing: 0.5,
  },
  sealYear: {
    fontSize: 7,
    fontWeight: '800',
    color: '#FFF',
  },
  certBottomPill: {
    backgroundColor: '#FEF9C3',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: BORDER_RADIUS.full,
    marginTop: 12,
    borderWidth: 1,
    borderColor: '#FACC15',
  },
  certBottomText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#854D0E',
  },
  actionsContainer: {
    width: '100%',
    marginTop: 14,
    gap: 8,
  },
  shareBtn: {
    backgroundColor: '#25D366',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: BORDER_RADIUS.lg,
    gap: 12,
    ...SHADOWS.medium,
  },
  shareBtnIcon: {
    fontSize: 24,
  },
  shareBtnTitle: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '900',
  },
  shareBtnSub: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: 11,
    marginTop: 1,
  },
  printBtn: {
    backgroundColor: '#334155',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: BORDER_RADIUS.lg,
    borderWidth: 1,
    borderColor: '#475569',
    gap: 8,
  },
  printBtnIcon: {
    fontSize: 16,
  },
  printBtnText: {
    color: '#E2E8F0',
    fontSize: 13,
    fontWeight: '700',
  },
});
