import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Switch,
  TextInput,
  ActivityIndicator,
  Alert,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS, SPACING, BORDER_RADIUS, SHADOWS } from '../constants/theme';
import { ChampCard, ChampButton, ChampBadge, ChampHeader } from '../components/common';
import {
  fetchGlobalConfig,
  saveGlobalConfig,
  fetchAllProfilesForAdmin,
  setStudentProStatusByAdmin,
  DEFAULT_GLOBAL_CONFIG,
} from '../services/adminConfig';
import { signOutParent, isSupabaseConfigured } from '../services/supabase';
import { AppGlobalConfig } from '../types';
import { triggerHaptic } from '../utils/haptics';

interface AdminScreenProps {
  onBackToApp: () => void;
  adminEmail?: string;
}

export const AdminScreen: React.FC<AdminScreenProps> = ({ onBackToApp, adminEmail }) => {
  const [activeTab, setActiveTab] = useState<'settings' | 'users'>('settings');
  const [config, setConfig] = useState<AppGlobalConfig>(DEFAULT_GLOBAL_CONFIG);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [usersList, setUsersList] = useState<any[]>([]);
  const [isLoadingUsers, setIsLoadingUsers] = useState(false);

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    setIsLoading(true);
    const data = await fetchGlobalConfig();
    setConfig(data);
    setIsLoading(false);
  };

  const loadUsers = async () => {
    setIsLoadingUsers(true);
    const users = await fetchAllProfilesForAdmin();
    setUsersList(users);
    setIsLoadingUsers(false);
  };

  const handleSave = async () => {
    setIsSaving(true);
    triggerHaptic('medium');
    const res = await saveGlobalConfig(config);
    setIsSaving(false);

    if (res.success) {
      triggerHaptic('success');
      Alert.alert(
        'Published Successfully! 🚀',
        'Aapke saare updates Supabase cloud me save ho gaye hain aur sabhi students ke phones me live ho chuke hain!'
      );
    } else {
      Alert.alert('Save Error', res.error || 'Changes save nahi ho paaye.');
    }
  };

  const handleToggleProUser = async (userId: string, currentStatus: boolean) => {
    triggerHaptic('light');
    const newStatus = !currentStatus;
    const ok = await setStudentProStatusByAdmin(userId, newStatus);
    if (ok) {
      triggerHaptic('success');
      setUsersList((prev) =>
        prev.map((u) => (u.id === userId ? { ...u, is_pro: newStatus } : u))
      );
    } else {
      Alert.alert('Error', 'User pro status update nahi ho paya.');
    }
  };

  const handleSignOut = async () => {
    Alert.alert('Sign Out', 'Admin console se sign out karein?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Sign Out',
        style: 'destructive',
        onPress: async () => {
          await signOutParent();
          onBackToApp();
        },
      },
    ]);
  };

  if (isLoading) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.centerContainer}>
          <ActivityIndicator size="large" color={COLORS.gold} />
          <Text style={styles.loadingText}>Admin Console Load Ho Raha Hai...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
      <StatusBar barStyle="light-content" backgroundColor="#0F172A" />

      {/* Top Admin Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View style={styles.badgeRow}>
            <View style={styles.adminBadge}>
              <Text style={styles.adminBadgeText}>👑 SUPER ADMIN</Text>
            </View>
            <View style={styles.cloudBadge}>
              <View style={[styles.dot, { backgroundColor: isSupabaseConfigured() ? '#10B981' : '#F59E0B' }]} />
              <Text style={styles.cloudBadgeText}>
                {isSupabaseConfigured() ? 'Cloud Live' : 'Offline Mode'}
              </Text>
            </View>
          </View>
          <TouchableOpacity onPress={handleSignOut} style={styles.logoutBtn}>
            <MaterialCommunityIcons name="logout" size={18} color="#EF4444" />
            <Text style={styles.logoutText}>Exit</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.headerTitle}>ClassChamp Control Center</Text>
        <Text style={styles.headerSub}>
          {adminEmail ? `Logged in: ${adminEmail}` : 'Manage App Features, Free Mode & Live Offers'}
        </Text>

        {/* Tab Switcher */}
        <View style={styles.tabBar}>
          <TouchableOpacity
            style={[styles.tabBtn, activeTab === 'settings' && styles.tabBtnActive]}
            onPress={() => {
              triggerHaptic('light');
              setActiveTab('settings');
            }}
          >
            <MaterialCommunityIcons
              name="tune"
              size={18}
              color={activeTab === 'settings' ? COLORS.white : '#94A3B8'}
            />
            <Text style={[styles.tabText, activeTab === 'settings' && styles.tabTextActive]}>
              Feature & Offer Control
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tabBtn, activeTab === 'users' && styles.tabBtnActive]}
            onPress={() => {
              triggerHaptic('light');
              setActiveTab('users');
              loadUsers();
            }}
          >
            <MaterialCommunityIcons
              name="account-group"
              size={18}
              color={activeTab === 'users' ? COLORS.white : '#94A3B8'}
            />
            <Text style={[styles.tabText, activeTab === 'users' && styles.tabTextActive]}>
              Users & Pro Access
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* ==================================================================== */}
        {/* TAB 1: FEATURE & OFFER CONTROLS                                       */}
        {/* ==================================================================== */}
        {activeTab === 'settings' && (
          <View>
            {/* 1. FREE FOR ALL OVERRIDE */}
            <ChampCard style={styles.card}>
              <View style={styles.cardHeaderRow}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.cardTitle}>🔓 App Access: Free for All Mode</Text>
                  <Text style={styles.cardDesc}>
                    Jab yeh ON hoga, to sabhi students ke liye har chapter aur quiz 100% FREE ho jayega. Koi Paywall nahi dikhega.
                  </Text>
                </View>
                <Switch
                  value={config.isAppFreeForAll}
                  onValueChange={(val) => {
                    triggerHaptic('medium');
                    setConfig({ ...config, isAppFreeForAll: val });
                  }}
                  trackColor={{ false: '#334155', true: '#10B981' }}
                  thumbColor={config.isAppFreeForAll ? '#059669' : '#94A3B8'}
                />
              </View>

              <View
                style={[
                  styles.statusPill,
                  { backgroundColor: config.isAppFreeForAll ? '#ECFDF5' : '#F8FAFC' },
                ]}
              >
                <MaterialCommunityIcons
                  name={config.isAppFreeForAll ? 'gift' : 'lock-outline'}
                  size={18}
                  color={config.isAppFreeForAll ? '#10B981' : '#64748B'}
                />
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: '700',
                    marginLeft: 6,
                    color: config.isAppFreeForAll ? '#059669' : '#475569',
                  }}
                >
                  {config.isAppFreeForAll
                    ? 'CURRENT STATUS: 100% FREE FOR ALL STUDENTS'
                    : 'CURRENT STATUS: Standard VIP Trial + Subscription Mode'}
                </Text>
              </View>
            </ChampCard>

            {/* 2. VIP TRIAL DURATION */}
            <ChampCard style={styles.card}>
              <Text style={styles.cardTitle}>⏱️ Default VIP Free Trial Days</Text>
              <Text style={styles.cardDesc}>
                Naye parent ke install karne par kitne din ka ad-free VIP access milega:
              </Text>
              <View style={styles.trialDaysRow}>
                {[7, 14, 30, 60, 90].map((days) => {
                  const isSel = config.trialDurationDays === days;
                  return (
                    <TouchableOpacity
                      key={days}
                      style={[styles.dayChip, isSel && styles.dayChipActive]}
                      onPress={() => {
                        triggerHaptic('light');
                        setConfig({ ...config, trialDurationDays: days });
                      }}
                    >
                      <Text style={[styles.dayChipText, isSel && styles.dayChipTextActive]}>
                        {days} Din
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </ChampCard>

            {/* 3. PROMOTIONAL OFFER & PRICING */}
            <ChampCard style={styles.card}>
              <View style={styles.cardHeaderRow}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.cardTitle}>🏷️ Special Festive / Promo Offer</Text>
                  <Text style={styles.cardDesc}>
                    Parent Zone aur Home screen par discount banner live karein:
                  </Text>
                </View>
                <Switch
                  value={config.specialOffer.isActive}
                  onValueChange={(val) => {
                    triggerHaptic('medium');
                    setConfig({
                      ...config,
                      specialOffer: { ...config.specialOffer, isActive: val },
                    });
                  }}
                  trackColor={{ false: '#334155', true: COLORS.gold }}
                  thumbColor={config.specialOffer.isActive ? COLORS.goldDark : '#94A3B8'}
                />
              </View>

              {config.specialOffer.isActive && (
                <View style={styles.inputContainer}>
                  <Text style={styles.inputLabel}>Offer Badge Text:</Text>
                  <TextInput
                    style={styles.textInput}
                    value={config.specialOffer.badgeText}
                    onChangeText={(txt) =>
                      setConfig({
                        ...config,
                        specialOffer: { ...config.specialOffer, badgeText: txt },
                      })
                    }
                    placeholder="e.g. DIWALI SPECIAL 🪔"
                  />

                  <Text style={styles.inputLabel}>Offer Title:</Text>
                  <TextInput
                    style={styles.textInput}
                    value={config.specialOffer.title}
                    onChangeText={(txt) =>
                      setConfig({
                        ...config,
                        specialOffer: { ...config.specialOffer, title: txt },
                      })
                    }
                    placeholder="e.g. Flat 50% OFF on Annual VIP Pass"
                  />

                  <View style={{ flexDirection: 'row', gap: SPACING.md }}>
                    <View style={{ flex: 1 }}>
                      <Text style={styles.inputLabel}>Original Price:</Text>
                      <TextInput
                        style={styles.textInput}
                        value={config.specialOffer.originalPrice}
                        onChangeText={(txt) =>
                          setConfig({
                            ...config,
                            specialOffer: { ...config.specialOffer, originalPrice: txt },
                          })
                        }
                        placeholder="₹999"
                      />
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text style={styles.inputLabel}>Discount Price:</Text>
                      <TextInput
                        style={styles.textInput}
                        value={config.specialOffer.discountedPrice}
                        onChangeText={(txt) =>
                          setConfig({
                            ...config,
                            specialOffer: { ...config.specialOffer, discountedPrice: txt },
                          })
                        }
                        placeholder="₹499"
                      />
                    </View>
                  </View>

                  <Text style={styles.inputLabel}>Coupon Code:</Text>
                  <TextInput
                    style={styles.textInput}
                    value={config.specialOffer.couponCode}
                    onChangeText={(txt) =>
                      setConfig({
                        ...config,
                        specialOffer: { ...config.specialOffer, couponCode: txt },
                      })
                    }
                    placeholder="e.g. CHAMP50"
                  />

                  {/* Live Offer Preview */}
                  <View style={styles.previewBox}>
                    <Text style={styles.previewLabel}>LIVE PREVIEW FOR PARENTS:</Text>
                    <View style={styles.previewBanner}>
                      <View style={styles.previewBadge}>
                        <Text style={styles.previewBadgeText}>{config.specialOffer.badgeText}</Text>
                      </View>
                      <Text style={styles.previewTitle}>{config.specialOffer.title}</Text>
                      <Text style={styles.previewPrice}>
                        <Text style={{ textDecorationLine: 'line-through', color: '#94A3B8' }}>
                          {config.specialOffer.originalPrice}
                        </Text>{' '}
                        {config.specialOffer.discountedPrice} • Code: {config.specialOffer.couponCode}
                      </Text>
                    </View>
                  </View>
                </View>
              )}
            </ChampCard>

            {/* 4. BROADCAST ANNOUNCEMENT BANNER */}
            <ChampCard style={styles.card}>
              <View style={styles.cardHeaderRow}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.cardTitle}>📢 Broadcast Announcement</Text>
                  <Text style={styles.cardDesc}>
                    Sabhi students ke dashboard par top notice bar dikhayen:
                  </Text>
                </View>
                <Switch
                  value={config.announcement.isActive}
                  onValueChange={(val) => {
                    triggerHaptic('medium');
                    setConfig({
                      ...config,
                      announcement: { ...config.announcement, isActive: val },
                    });
                  }}
                  trackColor={{ false: '#334155', true: '#3B82F6' }}
                  thumbColor={config.announcement.isActive ? '#2563EB' : '#94A3B8'}
                />
              </View>

              {config.announcement.isActive && (
                <View style={styles.inputContainer}>
                  <Text style={styles.inputLabel}>Notice Message:</Text>
                  <TextInput
                    style={[styles.textInput, { height: 60 }]}
                    multiline
                    value={config.announcement.text}
                    onChangeText={(txt) =>
                      setConfig({
                        ...config,
                        announcement: { ...config.announcement, text: txt },
                      })
                    }
                    placeholder="Notice message for all users..."
                  />

                  <View style={{ flexDirection: 'row', gap: SPACING.sm, marginTop: 8 }}>
                    {(['festive', 'info', 'alert'] as const).map((type) => {
                      const isSel = config.announcement.type === type;
                      return (
                        <TouchableOpacity
                          key={type}
                          onPress={() =>
                            setConfig({
                              ...config,
                              announcement: { ...config.announcement, type },
                            })
                          }
                          style={[
                            styles.typeChip,
                            isSel && styles.typeChipActive,
                            {
                              borderColor:
                                type === 'festive'
                                  ? COLORS.gold
                                  : type === 'info'
                                  ? '#3B82F6'
                                  : '#10B981',
                            },
                          ]}
                        >
                          <Text style={[styles.typeChipText, isSel && { color: COLORS.white }]}>
                            {type.toUpperCase()}
                          </Text>
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                </View>
              )}
            </ChampCard>

            {/* PUBLISH BUTTON */}
            <ChampButton
              title={isSaving ? 'Cloud Me Publish Ho Raha Hai...' : '💾 Save & Publish to Cloud'}
              variant="gold"
              size="lg"
              onPress={handleSave}
              disabled={isSaving}
              style={{ marginTop: SPACING.md, marginBottom: SPACING.xl }}
            />
          </View>
        )}

        {/* ==================================================================== */}
        {/* TAB 2: REGISTERED USERS & PRO OVERRIDES                              */}
        {/* ==================================================================== */}
        {activeTab === 'users' && (
          <View>
            <View style={styles.usersHeader}>
              <Text style={styles.usersCountText}>
                Registered Users in Supabase: {usersList.length}
              </Text>
              <TouchableOpacity onPress={loadUsers} style={styles.refreshBtn}>
                <MaterialCommunityIcons name="refresh" size={18} color={COLORS.primary} />
                <Text style={styles.refreshBtnText}>Refresh</Text>
              </TouchableOpacity>
            </View>

            {isLoadingUsers ? (
              <ActivityIndicator size="small" color={COLORS.gold} style={{ marginVertical: 30 }} />
            ) : usersList.length === 0 ? (
              <ChampCard style={styles.card}>
                <Text style={{ textAlign: 'center', color: COLORS.textMedium, padding: 20 }}>
                  Abhi tak koi user cloud me sync nahi hua hai, ya Supabase table empty hai.
                </Text>
              </ChampCard>
            ) : (
              usersList.map((u) => (
                <ChampCard key={u.id} style={{ ...styles.card, padding: SPACING.md }}>
                  <View style={styles.userRow}>
                    <View style={styles.avatarBubble}>
                      <Text style={{ fontSize: 22 }}>
                        {u.avatar_id === 'owl' ? '🦉' : u.avatar_id === 'tiger' ? '🐯' : '🦁'}
                      </Text>
                    </View>
                    <View style={{ flex: 1, marginLeft: SPACING.sm }}>
                      <Text style={styles.userName}>{u.student_name || 'Champ'}</Text>
                      <Text style={styles.userMeta}>
                        Grade {u.grade} • {u.phone || u.email || 'Guest Phone'}
                      </Text>
                      <Text style={styles.userStats}>
                        ⭐ {u.total_stars || 0} Stars • 🔥 {u.current_streak || 0} Streak • 🏆 {u.total_trophies || 0}
                      </Text>
                    </View>
                    <View style={{ alignItems: 'flex-end' }}>
                      <ChampBadge
                        label={u.is_pro ? 'PRO VIP' : 'FREE'}
                        variant={u.is_pro ? 'gold' : 'neutral'}
                        size="sm"
                      />
                      <TouchableOpacity
                        style={[styles.grantProBtn, u.is_pro && styles.revokeBtn]}
                        onPress={() => handleToggleProUser(u.id, !!u.is_pro)}
                      >
                        <Text style={[styles.grantProText, u.is_pro && { color: '#EF4444' }]}>
                          {u.is_pro ? 'Revoke Pro' : 'Grant Pro'}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </ChampCard>
              ))
            )}
          </View>
        )}

        {/* Bottom Back Button */}
        <TouchableOpacity style={styles.backToAppBtn} onPress={onBackToApp} activeOpacity={0.8}>
          <MaterialCommunityIcons name="arrow-left" size={20} color={COLORS.primary} />
          <Text style={styles.backToAppText}>Back to Student App View</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0F172A',
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 12,
    color: '#94A3B8',
    fontSize: 14,
  },
  header: {
    backgroundColor: '#0F172A',
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.md,
    paddingBottom: SPACING.md,
    borderBottomWidth: 1,
    borderBottomColor: '#1E293B',
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.xs,
  },
  badgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  adminBadge: {
    backgroundColor: '#3B82F6',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: BORDER_RADIUS.sm,
  },
  adminBadgeText: {
    color: COLORS.white,
    fontWeight: '900',
    fontSize: 10,
    letterSpacing: 0.5,
  },
  cloudBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E293B',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: BORDER_RADIUS.sm,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 6,
  },
  cloudBadgeText: {
    color: '#94A3B8',
    fontSize: 11,
    fontWeight: '600',
  },
  logoutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    padding: 4,
  },
  logoutText: {
    color: '#EF4444',
    fontSize: 12,
    fontWeight: '700',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '900',
    color: COLORS.white,
    marginTop: 4,
  },
  headerSub: {
    fontSize: 12,
    color: '#94A3B8',
    marginTop: 2,
    marginBottom: SPACING.md,
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#1E293B',
    borderRadius: BORDER_RADIUS.md,
    padding: 3,
  },
  tabBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingVertical: 8,
    borderRadius: BORDER_RADIUS.sm,
  },
  tabBtnActive: {
    backgroundColor: COLORS.primary,
  },
  tabText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#94A3B8',
  },
  tabTextActive: {
    color: COLORS.white,
  },
  scrollContent: {
    backgroundColor: '#F8FAFC',
    padding: SPACING.lg,
    paddingBottom: SPACING.giant,
  },
  card: {
    backgroundColor: COLORS.white,
    marginBottom: SPACING.md,
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.lg,
  },
  cardHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: SPACING.md,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: COLORS.textDark,
  },
  cardDesc: {
    fontSize: 12,
    color: COLORS.textMedium,
    marginTop: 3,
    lineHeight: 17,
  },
  statusPill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    borderRadius: BORDER_RADIUS.md,
    marginTop: SPACING.md,
  },
  trialDaysRow: {
    flexDirection: 'row',
    gap: 8,
    marginTop: SPACING.md,
    flexWrap: 'wrap',
  },
  dayChip: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: BORDER_RADIUS.md,
    backgroundColor: '#F1F5F9',
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
  },
  dayChipActive: {
    backgroundColor: COLORS.primarySoft,
    borderColor: COLORS.primary,
  },
  dayChipText: {
    fontSize: 13,
    fontWeight: '700',
    color: COLORS.textDark,
  },
  dayChipTextActive: {
    color: COLORS.primary,
  },
  inputContainer: {
    marginTop: SPACING.md,
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
    paddingTop: SPACING.sm,
  },
  inputLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: COLORS.textDark,
    marginTop: 8,
    marginBottom: 4,
  },
  textInput: {
    backgroundColor: '#F8FAFC',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: BORDER_RADIUS.md,
    paddingHorizontal: SPACING.md,
    paddingVertical: 8,
    fontSize: 14,
    color: COLORS.textDark,
  },
  previewBox: {
    backgroundColor: '#F1F5F9',
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.md,
    marginTop: SPACING.md,
  },
  previewLabel: {
    fontSize: 10,
    fontWeight: '900',
    color: '#64748B',
    marginBottom: 6,
    letterSpacing: 0.5,
  },
  previewBanner: {
    backgroundColor: COLORS.primaryDark,
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.md,
  },
  previewBadge: {
    alignSelf: 'flex-start',
    backgroundColor: COLORS.gold,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    marginBottom: 4,
  },
  previewBadgeText: {
    color: COLORS.textDark,
    fontWeight: '900',
    fontSize: 11,
  },
  previewTitle: {
    color: COLORS.white,
    fontWeight: '800',
    fontSize: 14,
  },
  previewPrice: {
    color: '#E2E8F0',
    fontSize: 12,
    marginTop: 2,
  },
  typeChip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: BORDER_RADIUS.sm,
    borderWidth: 1,
    backgroundColor: '#F8FAFC',
  },
  typeChipActive: {
    backgroundColor: COLORS.primary,
  },
  typeChipText: {
    fontSize: 11,
    fontWeight: '800',
    color: COLORS.textDark,
  },
  usersHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  usersCountText: {
    fontSize: 14,
    fontWeight: '800',
    color: COLORS.textDark,
  },
  refreshBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  refreshBtnText: {
    fontSize: 13,
    fontWeight: '700',
    color: COLORS.primary,
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarBubble: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#FEF3C7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userName: {
    fontSize: 15,
    fontWeight: '800',
    color: COLORS.textDark,
  },
  userMeta: {
    fontSize: 12,
    color: COLORS.textMedium,
    marginTop: 2,
  },
  userStats: {
    fontSize: 11,
    color: '#475569',
    marginTop: 3,
    fontWeight: '600',
  },
  grantProBtn: {
    marginTop: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: COLORS.primarySoft,
    borderRadius: 4,
  },
  grantProText: {
    fontSize: 11,
    fontWeight: '800',
    color: COLORS.primary,
  },
  revokeBtn: {
    backgroundColor: '#FEE2E2',
  },
  backToAppBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingVertical: SPACING.lg,
  },
  backToAppText: {
    fontSize: 14,
    fontWeight: '800',
    color: COLORS.primary,
  },
});
