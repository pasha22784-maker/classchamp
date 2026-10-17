import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  Alert,
  ScrollView,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS, BORDER_RADIUS, SPACING, SHADOWS } from '../../constants/theme';
import { useUserStore } from '../../store/useUserStore';
import { getMonetizationInfo } from '../../utils/monetization';
import {
  sendParentPhoneOtp,
  verifyParentPhoneOtp,
  signInWithParentEmail,
  signUpWithParentEmail,
  signOutParent,
  isSupabaseConfigured,
  syncProfileToCloud,
} from '../../services/supabase';
import { checkUserIsAdmin } from '../../services/adminConfig';
import { triggerHaptic } from '../../utils/haptics';

interface ParentAuthModalProps {
  visible: boolean;
  onClose: () => void;
  onAdminLogin?: (adminEmail: string) => void;
}

type AuthMode = 'phone' | 'email_login' | 'email_signup';

export const ParentAuthModal: React.FC<ParentAuthModalProps> = ({ visible, onClose, onAdminLogin }) => {
  const { profile, setProStatus } = useUserStore();
  const monetization = getMonetizationInfo(profile);

  const [mode, setMode] = useState<AuthMode>('phone');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otpToken, setOtpToken] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [otpSent, setOtpSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const configured = isSupabaseConfigured();

  const handleSendOtp = async () => {
    if (!phoneNumber || phoneNumber.length < 10) {
      Alert.alert('Mobile Number', 'Kripya 10 digit ka valid mobile number dalein.');
      return;
    }
    setIsLoading(true);
    setStatusMessage(null);
    triggerHaptic('light');

    const res = await sendParentPhoneOtp(phoneNumber);
    setIsLoading(false);

    if (res.success) {
      setOtpSent(true);
      setStatusMessage('OTP aapke mobile number par bhej diya gaya hai.');
    } else {
      Alert.alert('Notice', res.error || 'OTP nahi bhej paya.');
    }
  };

  const handleVerifyOtp = async () => {
    if (!otpToken || otpToken.length < 4) {
      Alert.alert('OTP', 'Kripya valid OTP dalein.');
      return;
    }
    setIsLoading(true);
    triggerHaptic('medium');

    const res = await verifyParentPhoneOtp(phoneNumber, otpToken);
    setIsLoading(false);

    if (res.success) {
      triggerHaptic('success');
      Alert.alert('Login Kamyab!', 'Aapka account successfully link ho gaya hai.');
      await syncProfileToCloud(profile);
      onClose();
    } else {
      Alert.alert('Galat OTP', res.error || 'OTP galat hai ya expire ho gaya.');
    }
  };

  const handleEmailAuth = async () => {
    if (!email || !password || password.length < 6) {
      Alert.alert('Invalid Input', 'Email aur kam se kam 6 character ka password dalein.');
      return;
    }
    setIsLoading(true);
    triggerHaptic('light');

    const res =
      mode === 'email_signup'
        ? await signUpWithParentEmail(email, password)
        : await signInWithParentEmail(email, password);

    setIsLoading(false);

    if (res.success) {
      triggerHaptic('success');

      // Check if logged-in user is an Admin
      const isAdmin = await checkUserIsAdmin(res.user?.id || '', email);
      if (isAdmin && onAdminLogin) {
        onClose();
        Alert.alert('👑 Admin Login Successful', `Swagat hai Admin! ClassChamp Control Center me redirect kiya ja raha hai.`);
        onAdminLogin(email);
        return;
      }

      Alert.alert('Safal!', 'Aapka account login ho chuka hai.');
      await syncProfileToCloud(profile);
      onClose();
    } else {
      Alert.alert('Error', res.error || 'Authentication mein samasya aayi.');
    }
  };

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.card}>
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
            {/* Header */}
            <View style={styles.topRow}>
              <View style={styles.headerTitleRow}>
                <Text style={{ fontSize: 24, marginRight: 8 }}>👨‍👩‍👧</Text>
                <View>
                  <Text style={styles.title}>Parent Account & Cloud Sync</Text>
                  <Text style={styles.subTitle}>Progress sync aur Ad-Free plan ke liye</Text>
                </View>
              </View>
              <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
                <Text style={styles.closeText}>✕</Text>
              </TouchableOpacity>
            </View>

            {/* 30-Day Trial Status Banner */}
            <View
              style={[
                styles.trialBanner,
                { backgroundColor: monetization.isPro ? '#FEF3C7' : monetization.isTrialActive ? '#ECFDF5' : '#F1F5F9' },
              ]}
            >
              <View style={{ flex: 1 }}>
                <Text style={[styles.trialBadge, { color: monetization.statusColor }]}>
                  {monetization.statusBadge}
                </Text>
                <Text style={styles.trialLabel}>{monetization.statusLabel}</Text>
                <Text style={styles.trialSub}>
                  {monetization.isPro
                    ? 'Aapke bache ke liye sabhi chapters aur quizzes ad-free hain.'
                    : monetization.isTrialActive
                    ? `Shuruat ke 30 din bilkul free hain. Abhi ${monetization.daysRemaining} din bache hain!`
                    : '30-Day Free Trial poora ho gaya hai. Ad-free hone ke liye Pro plan lein.'}
                </Text>
              </View>
              <MaterialCommunityIcons
                name={monetization.isPro ? 'crown' : monetization.isTrialActive ? 'gift' : 'shield-account'}
                size={34}
                color={monetization.statusColor}
              />
            </View>

            {/* Supabase Status Check */}
            {!configured && (
              <View style={styles.localNotice}>
                <MaterialCommunityIcons name="information" size={20} color="#2563EB" style={{ marginRight: 6 }} />
                <Text style={styles.localNoticeText}>
                  Supabase database connect hone par cloud sync aur OTP chalu ho jayenge. Tab tak aapka trial phone storage par 100% active rahega.
                </Text>
              </View>
            )}

            {/* Auth Method Switcher */}
            <View style={styles.tabRow}>
              <TouchableOpacity
                style={[styles.tab, mode === 'phone' && styles.tabActive]}
                onPress={() => {
                  setMode('phone');
                  setOtpSent(false);
                }}
              >
                <Text style={[styles.tabText, mode === 'phone' && styles.tabTextActive]}>
                  📱 Mobile OTP
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.tab, mode.startsWith('email') && styles.tabActive]}
                onPress={() => setMode('email_login')}
              >
                <Text style={[styles.tabText, mode.startsWith('email') && styles.tabTextActive]}>
                  ✉️ Email Login
                </Text>
              </TouchableOpacity>
            </View>

            {/* Phone OTP Form */}
            {mode === 'phone' && (
              <View style={styles.form}>
                <Text style={styles.inputLabel}>Parent Mobile Number (WhatsApp / SMS):</Text>
                <View style={styles.phoneInputRow}>
                  <Text style={styles.countryCode}>+91</Text>
                  <TextInput
                    style={styles.phoneInput}
                    placeholder="98765 43210"
                    placeholderTextColor="#94A3B8"
                    keyboardType="phone-pad"
                    maxLength={10}
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                    editable={!otpSent}
                  />
                </View>

                {otpSent && (
                  <>
                    <Text style={[styles.inputLabel, { marginTop: 14 }]}>6-Digit OTP Dalein:</Text>
                    <TextInput
                      style={styles.textInput}
                      placeholder="Enter OTP"
                      placeholderTextColor="#94A3B8"
                      keyboardType="number-pad"
                      maxLength={6}
                      value={otpToken}
                      onChangeText={setOtpToken}
                    />
                  </>
                )}

                {statusMessage && <Text style={styles.statusSuccess}>{statusMessage}</Text>}

                <TouchableOpacity
                  style={[styles.primaryBtn, isLoading && { opacity: 0.7 }]}
                  onPress={otpSent ? handleVerifyOtp : handleSendOtp}
                  disabled={isLoading}
                  activeOpacity={0.85}
                >
                  {isLoading ? (
                    <ActivityIndicator color="#FFFFFF" size="small" />
                  ) : (
                    <Text style={styles.primaryBtnText}>
                      {otpSent ? 'Verify OTP & Login' : 'Send OTP via SMS'}
                    </Text>
                  )}
                </TouchableOpacity>

                {otpSent && (
                  <TouchableOpacity
                    onPress={() => setOtpSent(false)}
                    style={styles.secondaryBtn}
                  >
                    <Text style={styles.secondaryBtnText}>Number Badlein</Text>
                  </TouchableOpacity>
                )}
              </View>
            )}

            {/* Email Form */}
            {mode.startsWith('email') && (
              <View style={styles.form}>
                <Text style={styles.inputLabel}>Parent Email ID:</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="parent@example.com"
                  placeholderTextColor="#94A3B8"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  value={email}
                  onChangeText={setEmail}
                />

                <Text style={[styles.inputLabel, { marginTop: 12 }]}>Password:</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="Minimum 6 characters"
                  placeholderTextColor="#94A3B8"
                  secureTextEntry
                  value={password}
                  onChangeText={setPassword}
                />

                <TouchableOpacity
                  style={[styles.primaryBtn, isLoading && { opacity: 0.7 }]}
                  onPress={handleEmailAuth}
                  disabled={isLoading}
                  activeOpacity={0.85}
                >
                  {isLoading ? (
                    <ActivityIndicator color="#FFFFFF" size="small" />
                  ) : (
                    <Text style={styles.primaryBtnText}>
                      {mode === 'email_signup' ? 'Create Parent Account' : 'Sign In'}
                    </Text>
                  )}
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => setMode(mode === 'email_login' ? 'email_signup' : 'email_login')}
                  style={styles.secondaryBtn}
                >
                  <Text style={styles.secondaryBtnText}>
                    {mode === 'email_login'
                      ? 'Naya account banana hai? Sign Up karein'
                      : 'Pehle se account hai? Login karein'}
                  </Text>
                </TouchableOpacity>
              </View>
            )}

            {/* Guest Mode Button */}
            <TouchableOpacity onPress={onClose} style={styles.skipBtn} activeOpacity={0.7}>
              <Text style={styles.skipBtnText}>Abhi Bina Login Ke Padhein (Guest Mode) ✕</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
    justifyContent: 'flex-end',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    maxHeight: '90%',
    padding: 20,
    ...SHADOWS.large,
  },
  scroll: {
    paddingBottom: 24,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
    color: '#0F172A',
  },
  subTitle: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 2,
  },
  closeBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F1F5F9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#64748B',
  },
  trialBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 18,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  trialBadge: {
    fontSize: 14,
    fontWeight: '800',
    marginBottom: 2,
  },
  trialLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: 2,
  },
  trialSub: {
    fontSize: 11,
    color: '#64748B',
    lineHeight: 15,
  },
  localNotice: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EFF6FF',
    padding: 12,
    borderRadius: 12,
    marginBottom: 16,
  },
  localNoticeText: {
    fontSize: 11,
    color: '#1E40AF',
    lineHeight: 16,
    flex: 1,
  },
  tabRow: {
    flexDirection: 'row',
    backgroundColor: '#F1F5F9',
    borderRadius: 12,
    padding: 4,
    marginBottom: 16,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
  tabActive: {
    backgroundColor: '#FFFFFF',
    ...SHADOWS.small,
  },
  tabText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#64748B',
  },
  tabTextActive: {
    color: '#1E40AF',
    fontWeight: '800',
  },
  form: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: '#334155',
    marginBottom: 6,
  },
  phoneInputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    borderRadius: 14,
    paddingHorizontal: 12,
  },
  countryCode: {
    fontSize: 16,
    fontWeight: '800',
    color: '#1E40AF',
    marginRight: 8,
  },
  phoneInput: {
    flex: 1,
    height: 48,
    fontSize: 16,
    fontWeight: '700',
    color: '#0F172A',
  },
  textInput: {
    height: 48,
    backgroundColor: '#F8FAFC',
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    borderRadius: 14,
    paddingHorizontal: 14,
    fontSize: 15,
    color: '#0F172A',
  },
  primaryBtn: {
    height: 50,
    backgroundColor: '#1E40AF',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 14,
    ...SHADOWS.medium,
  },
  primaryBtnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
  },
  secondaryBtn: {
    paddingVertical: 10,
    alignItems: 'center',
  },
  secondaryBtnText: {
    color: '#2563EB',
    fontSize: 13,
    fontWeight: '700',
  },
  statusSuccess: {
    fontSize: 12,
    color: '#059669',
    marginTop: 8,
    fontWeight: '600',
  },
  skipBtn: {
    paddingVertical: 12,
    alignItems: 'center',
  },
  skipBtnText: {
    color: '#94A3B8',
    fontSize: 13,
    fontWeight: '600',
  },
});
