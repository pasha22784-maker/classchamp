import React, { useState, useEffect, useRef } from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  ActivityIndicator,
  Platform,
} from 'react-native';
import * as FileSystem from 'expo-file-system/legacy';
import * as IntentLauncher from 'expo-intent-launcher';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS } from '../../constants/theme';

// Current App Version
export const CURRENT_APP_VERSION = 'v1.2.4';
const GITHUB_REPO = 'pasha22784-maker/classchamp';

interface ReleaseInfo {
  version: string;
  notes: string;
  downloadUrl: string;
}

type UpdateStatus = 'idle' | 'downloading' | 'ready_to_install' | 'error';

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
  const [status, setStatus] = useState<UpdateStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [bytesWritten, setBytesWritten] = useState(0);
  const [totalBytesExpected, setTotalBytesExpected] = useState(0);
  const [downloadedFileUri, setDownloadedFileUri] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const downloadTaskRef = useRef<FileSystem.DownloadResumable | null>(null);

  useEffect(() => {
    checkForUpdate();
  }, []);

  const checkForUpdate = async () => {
    try {
      const res = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/releases/latest?t=${Date.now()}`, {
        headers: {
          'Accept': 'application/vnd.github+json',
          'Cache-Control': 'no-cache',
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
        const info: ReleaseInfo = {
          version: latestTag,
          notes: data.body || 'Naye sawaal, attractive colors aur improvements add kiye gaye hain.',
          downloadUrl,
        };
        setUpdateAvailable(info);
        setModalVisible(true);

        // Auto-start downloading immediately on launch!
        startDirectDownload(info.downloadUrl);
      }
    } catch {
      // Silent fail if offline or no internet
    }
  };

  const startDirectDownload = async (url: string) => {
    try {
      setStatus('downloading');
      setProgress(0);
      setBytesWritten(0);
      setTotalBytesExpected(0);
      setErrorMessage(null);

      const localTargetUri = `${FileSystem.documentDirectory}ClassChamp-Update.apk`;

      // Remove existing temp apk if any
      try {
        const fileInfo = await FileSystem.getInfoAsync(localTargetUri);
        if (fileInfo.exists) {
          await FileSystem.deleteAsync(localTargetUri, { idempotent: true });
        }
      } catch {
        // ignore delete failure
      }

      const downloadResumable = FileSystem.createDownloadResumable(
        url,
        localTargetUri,
        {},
        (downloadProgress) => {
          if (downloadProgress.totalBytesExpectedToWrite > 0) {
            const prog =
              downloadProgress.totalBytesWritten / downloadProgress.totalBytesExpectedToWrite;
            setProgress(Math.min(1, Math.max(0, prog)));
            setBytesWritten(downloadProgress.totalBytesWritten);
            setTotalBytesExpected(downloadProgress.totalBytesExpectedToWrite);
          }
        }
      );

      downloadTaskRef.current = downloadResumable;
      const result = await downloadResumable.downloadAsync();

      if (!result || result.status !== 200) {
        throw new Error(`Download status: ${result?.status || 'Failed'}`);
      }

      setDownloadedFileUri(result.uri);
      setStatus('ready_to_install');
      setProgress(1);

      // Trigger native Android installer immediately!
      await launchPackageInstaller(result.uri);
    } catch (err: any) {
      console.log('Update download failed:', err);
      setStatus('error');
      setErrorMessage(err?.message || 'Download nahi ho paya.');
    }
  };

  const launchPackageInstaller = async (fileUri: string) => {
    if (Platform.OS === 'android') {
      try {
        const contentUri = await FileSystem.getContentUriAsync(fileUri);
        await IntentLauncher.startActivityAsync('android.intent.action.VIEW', {
          data: contentUri,
          type: 'application/vnd.android.package-archive',
          flags: 1 | 268435456, // FLAG_GRANT_READ_URI_PERMISSION | FLAG_ACTIVITY_NEW_TASK
        });
      } catch (err: any) {
        console.log('IntentLauncher error:', err);
        // Fallback to browser if intent fails
        if (updateAvailable?.downloadUrl) {
          Linking.openURL(updateAvailable.downloadUrl);
        }
      }
    } else {
      if (updateAvailable?.downloadUrl) {
        Linking.openURL(updateAvailable.downloadUrl);
      }
    }
  };

  const handleInstallNow = () => {
    if (downloadedFileUri) {
      launchPackageInstaller(downloadedFileUri);
    } else if (updateAvailable?.downloadUrl) {
      startDirectDownload(updateAvailable.downloadUrl);
    }
  };

  const handleBrowserFallback = () => {
    if (updateAvailable?.downloadUrl) {
      Linking.openURL(updateAvailable.downloadUrl);
      setModalVisible(false);
    }
  };

  const formatMB = (bytes: number) => {
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
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
            <MaterialCommunityIcons
              name={status === 'ready_to_install' ? 'check-circle' : 'rocket-launch'}
              size={42}
              color={status === 'ready_to_install' ? '#10B981' : COLORS.gold}
            />
          </View>

          <Text style={styles.title}>
            {status === 'ready_to_install'
              ? '🎉 Update Ready Hai!'
              : '⚡ Naya Update Aaya Hai!'}
          </Text>

          <View style={styles.versionBadge}>
            <Text style={styles.versionBadgeText}>{updateAvailable.version}</Text>
          </View>

          <Text style={styles.message}>
            {status === 'downloading'
              ? 'Naya update automatically download ho raha hai. Download complete hote hi install screen khul jayegi...'
              : status === 'ready_to_install'
              ? 'Download poora ho gaya hai! Neeche "Install Karein" dabakar update complete karein.'
              : status === 'error'
              ? 'Download mein rukawat aayi. Dobara try karein ya browser se download karein.'
              : 'ClassChamp ka naya version update karne ke liye taiyaar hai.'}
          </Text>

          {/* Real-time Progress Bar */}
          {status === 'downloading' && (
            <View style={styles.progressContainer}>
              <View style={styles.progressTrack}>
                <View style={[styles.progressBar, { width: `${Math.round(progress * 100)}%` }]} />
              </View>
              <View style={styles.progressLabelRow}>
                <Text style={styles.progressPercent}>{Math.round(progress * 100)}%</Text>
                <Text style={styles.progressBytes}>
                  {totalBytesExpected > 0
                    ? `${formatMB(bytesWritten)} / ${formatMB(totalBytesExpected)}`
                    : 'Connecting...'}
                </Text>
              </View>
            </View>
          )}

          {/* Action Buttons */}
          {status === 'ready_to_install' && (
            <TouchableOpacity
              style={[styles.actionBtn, { backgroundColor: '#10B981' }]}
              onPress={handleInstallNow}
              activeOpacity={0.85}
            >
              <MaterialCommunityIcons name="cellphone-arrow-down" size={22} color="#FFFFFF" style={{ marginRight: 8 }} />
              <Text style={styles.actionBtnText}>Abhi Install Karein</Text>
            </TouchableOpacity>
          )}

          {status === 'downloading' && (
            <View style={styles.downloadingPill}>
              <ActivityIndicator size="small" color="#2563EB" style={{ marginRight: 8 }} />
              <Text style={styles.downloadingText}>Downloading APK...</Text>
            </View>
          )}

          {status === 'error' && (
            <TouchableOpacity
              style={styles.actionBtn}
              onPress={() => startDirectDownload(updateAvailable.downloadUrl)}
              activeOpacity={0.85}
            >
              <MaterialCommunityIcons name="refresh" size={20} color="#FFFFFF" style={{ marginRight: 8 }} />
              <Text style={styles.actionBtnText}>Dobara Download Karein</Text>
            </TouchableOpacity>
          )}

          {/* Browser Fallback Link */}
          <TouchableOpacity
            style={styles.fallbackBtn}
            onPress={handleBrowserFallback}
            activeOpacity={0.7}
          >
            <Text style={styles.fallbackBtnText}>Ya browser se download karein ↗</Text>
          </TouchableOpacity>

          {/* Dismiss Button */}
          <TouchableOpacity
            style={styles.laterBtn}
            onPress={() => setModalVisible(false)}
            activeOpacity={0.7}
          >
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
    marginBottom: 14,
  },
  title: {
    fontSize: 21,
    fontWeight: '900',
    color: '#0F172A',
    textAlign: 'center',
    marginBottom: 6,
  },
  versionBadge: {
    backgroundColor: '#EFF6FF',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 12,
  },
  versionBadgeText: {
    fontSize: 13,
    fontWeight: '800',
    color: '#2563EB',
  },
  message: {
    fontSize: 13,
    color: '#64748B',
    textAlign: 'center',
    lineHeight: 19,
    marginBottom: 16,
    paddingHorizontal: 6,
  },
  progressContainer: {
    width: '100%',
    marginBottom: 18,
  },
  progressTrack: {
    width: '100%',
    height: 10,
    backgroundColor: '#E2E8F0',
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 6,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#2563EB',
    borderRadius: 5,
  },
  progressLabelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  progressPercent: {
    fontSize: 13,
    fontWeight: '800',
    color: '#2563EB',
  },
  progressBytes: {
    fontSize: 12,
    fontWeight: '600',
    color: '#94A3B8',
  },
  downloadingPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EFF6FF',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    marginBottom: 14,
  },
  downloadingText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#2563EB',
  },
  actionBtn: {
    width: '100%',
    height: 50,
    backgroundColor: '#2563EB',
    borderRadius: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#2563EB',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  actionBtnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  fallbackBtn: {
    paddingVertical: 6,
    marginBottom: 8,
  },
  fallbackBtnText: {
    color: '#64748B',
    fontSize: 12,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  laterBtn: {
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  laterBtnText: {
    color: '#94A3B8',
    fontSize: 13,
    fontWeight: '600',
  },
});
