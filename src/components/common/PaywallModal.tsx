import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { COLORS, BORDER_RADIUS, SPACING, SHADOWS } from '../../constants/theme';
import { ChampButton } from './ChampButton';
import { ChampBadge } from './ChampBadge';
import { triggerHaptic } from '../../utils/haptics';

interface PaywallModalProps {
  visible: boolean;
  onClose: () => void;
  onUpgradeSuccess: () => void;
}

export const PaywallModal: React.FC<PaywallModalProps> = ({
  visible,
  onClose,
  onUpgradeSuccess,
}) => {
  const [selectedPlan, setSelectedPlan] = useState<'annual' | 'monthly'>('annual');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubscribe = () => {
    setIsProcessing(true);
    triggerHaptic('success');

    // Simulate Google Play In-App Purchase sandbox flow
    setTimeout(() => {
      setIsProcessing(false);
      Alert.alert(
        '🌟 Welcome to ClassChamp Pro!',
        'Unlimited practice, all chapters, and parent analytics are now unlocked!',
        [
          {
            text: 'Let’s Practice! 🚀',
            onPress: () => {
              onUpgradeSuccess();
              onClose();
            },
          },
        ]
      );
    }, 1200);
  };

  if (!visible) return null;

  return (
    <Modal
      transparent
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={[styles.modalCard, SHADOWS.large]}>
          {/* Close X Button */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={onClose}
            style={styles.closeX}
          >
            <Text style={styles.closeXText}>✕</Text>
          </TouchableOpacity>

          <ScrollView showsVerticalScrollIndicator={false}>
            {/* Header Hero */}
            <View style={styles.header}>
              <View style={styles.crownIconBox}>
                <Text style={styles.crownEmoji}>👑</Text>
              </View>
              <Text style={styles.title}>Unlock ClassChamp Pro</Text>
              <Text style={styles.subtitle}>
                Give your child the unfair advantage of daily 10-minute mastery
              </Text>
            </View>

            {/* Pro Benefits List */}
            <View style={styles.benefitsList}>
              <View style={styles.benefitRow}>
                <Text style={styles.checkEmoji}>✅</Text>
                <View style={styles.benefitTextCol}>
                  <Text style={styles.benefitTitle}>Unlimited Daily Practice Quizzes</Text>
                  <Text style={styles.benefitDesc}>Practice anytime, not just 1 free quiz per day</Text>
                </View>
              </View>

              <View style={styles.benefitRow}>
                <Text style={styles.checkEmoji}>✅</Text>
                <View style={styles.benefitTextCol}>
                  <Text style={styles.benefitTitle}>Full Class 3, 4 & 5 CBSE Vaults</Text>
                  <Text style={styles.benefitDesc}>Unlimited access to all Mathematics & English chapters</Text>
                </View>
              </View>

              <View style={styles.benefitRow}>
                <Text style={styles.checkEmoji}>✅</Text>
                <View style={styles.benefitTextCol}>
                  <Text style={styles.benefitTitle}>Weakness Analytics & Mastery Reports</Text>
                  <Text style={styles.benefitDesc}>Deep insight into concepts needing improvement</Text>
                </View>
              </View>

              <View style={styles.benefitRow}>
                <Text style={styles.checkEmoji}>✅</Text>
                <View style={styles.benefitTextCol}>
                  <Text style={styles.benefitTitle}>100% Ad-Free & Google Play Families Safe</Text>
                  <Text style={styles.benefitDesc}>Zero distracting ads or invasive tracking</Text>
                </View>
              </View>
            </View>

            {/* Pricing Plan Selector */}
            <View style={styles.planSelector}>
              {/* Annual Plan (Best Value) */}
              <TouchableOpacity
                activeOpacity={0.85}
                onPress={() => {
                  triggerHaptic('light');
                  setSelectedPlan('annual');
                }}
                style={[
                  styles.planCard,
                  selectedPlan === 'annual' && styles.planCardActive,
                ]}
              >
                <View style={styles.planBadgeContainer}>
                  <ChampBadge label="MOST POPULAR • SAVE 37%" variant="gold" size="sm" />
                </View>
                <View style={styles.planInfoRow}>
                  <View>
                    <Text style={styles.planName}>Annual Super Champ</Text>
                    <Text style={styles.planPriceSub}>Only ₹125 / month (Billed yearly)</Text>
                  </View>
                  <Text style={styles.planPrice}>₹1,499</Text>
                </View>
              </TouchableOpacity>

              {/* Monthly Plan */}
              <TouchableOpacity
                activeOpacity={0.85}
                onPress={() => {
                  triggerHaptic('light');
                  setSelectedPlan('monthly');
                }}
                style={[
                  styles.planCard,
                  selectedPlan === 'monthly' && styles.planCardActive,
                ]}
              >
                <View style={styles.planInfoRow}>
                  <View>
                    <Text style={styles.planName}>Monthly Practice Plan</Text>
                    <Text style={styles.planPriceSub}>Cancel anytime</Text>
                  </View>
                  <Text style={styles.planPrice}>₹199 / mo</Text>
                </View>
              </TouchableOpacity>
            </View>

            {/* Guarantee Tag */}
            <View style={styles.guaranteeBox}>
              <Text style={styles.guaranteeText}>
                🛡️ 7-Day Money-Back Guarantee • Simple 1-Tap Google Play Cancellation
              </Text>
            </View>

            {/* Subscribe Action */}
            <ChampButton
              title={
                isProcessing
                  ? 'Activating Pro...'
                  : selectedPlan === 'annual'
                  ? 'Start 7-Day Free Trial (₹1,499/yr)'
                  : 'Subscribe for ₹199 / month'
              }
              variant="gold"
              size="lg"
              loading={isProcessing}
              onPress={handleSubscribe}
              style={styles.subscribeBtn}
            />

            <Text style={styles.parentNotice}>
              Purchases are protected by Google Play Family Security.
            </Text>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(15, 23, 42, 0.75)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING.md,
  },
  modalCard: {
    width: '100%',
    maxHeight: '90%',
    backgroundColor: COLORS.white,
    borderRadius: BORDER_RADIUS.xl,
    padding: SPACING.xl,
    position: 'relative',
  },
  closeX: {
    position: 'absolute',
    top: SPACING.md,
    right: SPACING.md,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: COLORS.backgroundAlt,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
  closeXText: {
    fontSize: 16,
    fontWeight: '800',
    color: COLORS.textDark,
  },
  header: {
    alignItems: 'center',
    marginBottom: SPACING.lg,
    marginTop: SPACING.xs,
  },
  crownIconBox: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FEF3C7',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SPACING.sm,
  },
  crownEmoji: {
    fontSize: 34,
  },
  title: {
    fontSize: 22,
    fontWeight: '900',
    color: COLORS.textDark,
    marginBottom: 4,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 13,
    color: COLORS.textMedium,
    textAlign: 'center',
    lineHeight: 18,
    paddingHorizontal: SPACING.sm,
  },
  benefitsList: {
    backgroundColor: COLORS.background,
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.md,
    marginBottom: SPACING.lg,
    gap: SPACING.md,
  },
  benefitRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: SPACING.sm,
  },
  checkEmoji: {
    fontSize: 16,
    marginTop: 2,
  },
  benefitTextCol: {
    flex: 1,
  },
  benefitTitle: {
    fontSize: 13,
    fontWeight: '800',
    color: COLORS.textDark,
    marginBottom: 2,
  },
  benefitDesc: {
    fontSize: 11,
    color: COLORS.textMedium,
    lineHeight: 15,
  },
  planSelector: {
    gap: SPACING.md,
    marginBottom: SPACING.md,
  },
  planCard: {
    backgroundColor: COLORS.white,
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.md,
    borderWidth: 2,
    borderColor: COLORS.border,
  },
  planCardActive: {
    borderColor: COLORS.gold,
    backgroundColor: '#FFFDF5',
  },
  planBadgeContainer: {
    marginBottom: 6,
  },
  planInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  planName: {
    fontSize: 15,
    fontWeight: '800',
    color: COLORS.textDark,
  },
  planPriceSub: {
    fontSize: 11,
    color: COLORS.textMedium,
    marginTop: 2,
  },
  planPrice: {
    fontSize: 18,
    fontWeight: '900',
    color: COLORS.primaryDark,
  },
  guaranteeBox: {
    alignItems: 'center',
    marginBottom: SPACING.md,
    paddingHorizontal: SPACING.sm,
  },
  guaranteeText: {
    fontSize: 11,
    color: COLORS.textMedium,
    textAlign: 'center',
    fontWeight: '600',
  },
  subscribeBtn: {
    marginBottom: SPACING.sm,
  },
  parentNotice: {
    fontSize: 10,
    color: COLORS.textLight,
    textAlign: 'center',
    marginBottom: SPACING.xs,
  },
});
