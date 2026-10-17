import { Platform, Share } from 'react-native';
import * as Sharing from 'expo-sharing';
import { captureRef } from 'react-native-view-shot';
import { QuizSessionResult, Grade } from '../types';

export const shareScorecard = async (
  viewRef: React.RefObject<any>,
  studentName: string,
  grade: Grade,
  result: QuizSessionResult,
  streakDays: number
): Promise<boolean> => {
  const gradeLabel = typeof grade === 'number' ? `Class ${grade}` : grade;
  const shareMessage =
    `🌟 *CLASSCHAMP DAILY REPORT CARD* 🌟\n\n` +
    `👤 Champion: *${studentName}* (${gradeLabel})\n` +
    `📚 Subject: *${result.subject === 'maths' ? 'Mathematics 📐' : result.subject === 'english' ? 'English Grammar 📚' : 'Hindi (हिंदी) 🇮🇳'}*\n` +
    `⭐ Score: *${result.correctCount} / ${result.totalQuestions}* (${result.scorePercentage}%)\n` +
    `⏱️ Focus Time: *${Math.floor(result.timeTakenSeconds / 60)}m ${result.timeTakenSeconds % 60}s*\n` +
    `🔥 Daily Habit Streak: *${streakDays} Days Strong!*\n` +
    `✨ Stars Won Today: *+${result.starsEarned}*\n\n` +
    `"10 minutes of daily practice makes a Champion!" 🚀\n` +
    `_Download ClassChamp for CBSE Class 3-5 Practice_`;

  // On Mobile, attempt high-res view-shot snapshot first
  if (Platform.OS !== 'web' && viewRef.current) {
    try {
      const uri = await captureRef(viewRef, {
        format: 'png',
        quality: 0.95,
      });

      const isAvailable = await Sharing.isAvailableAsync();
      if (isAvailable) {
        await Sharing.shareAsync(uri, {
          mimeType: 'image/png',
          dialogTitle: `${studentName}'s ClassChamp Scorecard`,
          UTI: 'public.png',
        });
        return true;
      }
    } catch (e) {
      console.warn('ViewShot capture or native sharing failed, falling back to text share', e);
    }
  }

  // Universal text fallback
  try {
    await Share.share({
      title: `${studentName}'s Daily Scorecard`,
      message: shareMessage,
    });
    return true;
  } catch (err) {
    console.error('Error sharing scorecard', err);
    return false;
  }
};
