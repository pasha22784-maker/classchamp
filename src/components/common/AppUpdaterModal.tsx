import React, { useState, useEffect } from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  ActivityIndicator,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS } from '../../constants/theme';

// Current App Version
export const CURRENT_APP_VERSION = 'v1.0.3';
const GITHUB_REPO = 'pasha22784-maker/classchamp';

interface ReleaseInfo {
  version: string;
  notes: string;
  downloadUrl: string;
}

// Check if latest remote version is strictly newer than current app version
function isNewerVersion(latest: string, current: string): boolean {
  const cleanL = latest.replace(/^v/, '').split('.').map((n) => parseInt(n, 10) || 0);
  const cleanC = current.replace(/^v/, '').split('.').map((n) => parseInt(n, 10) || 0);
  for (let i = 0; i < Math.max(cleanL.length, cleanC.length); i++) {
    const l = cleanL[i] || 0;
    const c = cleanC[i] || 0;
    if (l > c) return true;
    if (l < c) return false;
  }
  return false;
}

export function AppUpdaterModal() {
  const [updateAvailable, setUpdateAvailable] = useState<ReleaseInfo | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [isChecking, setIsChecking] = useState(false);

  useEffect(() => {
    checkForUpdate();
  }, []);

  const checkForUpdate = async () => {
    try {
      setIsChecking(true);
      const res = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/releases/latest`, {
        headers: {
          'Accept': 'application/vnd.github+json',
        },
      });

      if (!res.ok) {
        return;
      }

      const data = await res.json();
      const latestTag = data.tag_name || '';

      // Find ClassChamp.apk asset
      const apkAsset = data.assets?.find(
        (a: any) => a.name.endsWith('.apk')
      );

      const downloadUrl =
        apkAsset?.browser_download_url ||
        `https://github.com/${GITHUB_REPO}/releases/latest/download/ClassChamp.apk`;

      // Check if GitHub has a newer version than this build
      if (latestTag && isNewerVersion(latestTag, CURRENT_APP_VERSION)) {
        setUpdateAvailable({
          version: latestTag,
          notes: data.body || 'Naye sawaal aur CBSE improvements add kiye gaye hain.',
          downloadUrl,
        });
        setModalVisible(true);
      }
    } catch {
      // Silent fail if offline or no internet
    } finally {
      setIsChecking(false);
    }
  };

  const handleUpdateNow = () => {
    if (updateAvailable?.downloadUrl) {
      Linking.openURL(updateAvailable.downloadUrl);
      setModalVisible(false);
    }
  };

  if (!updateAvailable) {
    return null;
  }

  return (
    <Modal
      visible={modalVisible}
      transparent
      animationType="fade"
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.overlay}>
        <View style={styles.card}>
          <View style={styles.iconCircle}>
            <MaterialCommunityIcons name="rocket-launch" size={40} color={COLORS.gold} />
          </View>

          <Text style={styles.title}>🎉 Naya Update Aaya Hai!</Text>
          <Text style={styles.versionBadge}>{updateAvailable.version}</Text>

          <Text style={styles.message}>
            ClassChamp ka naya version available hai. Naye practice questions aur improvements pane ke liye abhi update karein!
          </Text>

          {updateAvailable.notes ? (
            <View style={styles.notesBox}>
              <Text style={styles.notesTitle}>Naya kya hai:</Text>
              <Text style={styles.notesText} numberOfLines={3}>
                {updateAvailable.notes}
              </Text>
            </View>
          ) : null}

          <TouchableOpacity style={styles.updateBtn} onPress={handleUpdateNow} activeOpacity={0.85}>
            <MaterialCommunityIcons name="download" size={20} color="#FFFFFF" style={{ marginRight: 8 }} />
            <Text style={styles.updateBtnText}>Abhi Update Karein</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.laterBtn} onPress={() => setModalVisible(false)} activeOpacity={0.7}>
            <Text style={styles.laterBtnText}>Baad Me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  card: {
    width: '100%',
    maxWidth: 380,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 10,
  },
  iconCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#FEF3C7',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1E293B',
    textAlign: 'center',
    marginBottom: 6,
  },
  versionBadge: {
    fontSize: 13,
    fontWeight: '700',
    color: '#2563EB',
    backgroundColor: '#EFF6FF',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 12,
  },
  message: {
    fontSize: 14,
    color: '#64748B',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 16,
  },
  notesBox: {
    width: '100%',
    backgroundColor: '#F8FAFC',
    borderRadius: 12,
    padding: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  notesTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#475569',
    marginBottom: 4,
  },
  notesText: {
    fontSize: 12,
    color: '#64748B',
    lineHeight: 16,
  },
  updateBtn: {
    width: '100%',
    height: 50,
    backgroundColor: '#2563EB',
    borderRadius: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  updateBtnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  laterBtn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  laterBtnText: {
    color: '#94A3B8',
    fontSize: 14,
    fontWeight: '600',
  },
});
