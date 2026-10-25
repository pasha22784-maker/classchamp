import React, { useState, useEffect } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  Animated,
  View,
} from 'react-native';
import { COLORS } from '../../constants/theme';
import { speakText, stopSpeaking, subscribeToSpeech, getCurrentlySpeaking } from '../../utils/speech';

interface SpeakerButtonProps {
  textToSpeak: string;
  size?: 'sm' | 'md' | 'lg' | 'pill';
  style?: ViewStyle;
  showLabel?: boolean;
  label?: string;
  activeLang?: string;
}

export const SpeakerButton: React.FC<SpeakerButtonProps> = ({
  textToSpeak,
  size = 'md',
  style,
  showLabel = false,
  label,
  activeLang = 'en',
}) => {
  const [isSpeaking, setIsSpeaking] = useState(
    getCurrentlySpeaking() === textToSpeak
  );

  useEffect(() => {
    const unsubscribe = subscribeToSpeech((current) => {
      setIsSpeaking(current === textToSpeak);
    });
    return unsubscribe;
  }, [textToSpeak]);

  const handlePress = () => {
    if (isSpeaking) {
      stopSpeaking();
    } else {
      speakText(textToSpeak);
    }
  };

  const isSmall = size === 'sm';
  const isLarge = size === 'lg';
  const isPill = size === 'pill' || showLabel;
  const isHindi = activeLang === 'hi';

  const defaultIdleLabel = isHindi ? 'सुनें' : 'Listen';
  const defaultSpeakingLabel = isHindi ? 'बोल रहे हैं...' : 'Speaking...';
  const displayLabel = isSpeaking ? defaultSpeakingLabel : (label || defaultIdleLabel);

  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
      style={[
        styles.button,
        isSmall && styles.buttonSm,
        isLarge && styles.buttonLg,
        !isSmall && !isLarge && !isPill && styles.buttonMd,
        isPill && styles.buttonPill,
        isSpeaking && styles.buttonSpeaking,
        style,
      ]}
      accessibilityLabel={isSpeaking ? 'Stop speaking' : 'Read aloud'}
    >
      <Text
        style={[
          styles.icon,
          isSmall && styles.iconSm,
          isLarge && styles.iconLg,
          !isSmall && !isLarge && !isPill && styles.iconMd,
          isPill && styles.iconPill,
        ]}
      >
        {isSpeaking ? '🔊' : '🔈'}
      </Text>
      {isPill && (
        <Text
          style={[
            styles.labelText,
            isSpeaking && styles.labelTextSpeaking,
          ]}
        >
          {displayLabel}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#EFF6FF',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: '#BFDBFE',
    shadowColor: '#2563EB',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  buttonMd: {
    width: 42,
    height: 42,
    borderRadius: 21,
  },
  buttonSm: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  buttonLg: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  buttonPill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    gap: 6,
    minHeight: 36,
  },
  buttonSpeaking: {
    backgroundColor: '#FEF3C7',
    borderColor: '#F59E0B',
    transform: [{ scale: 1.05 }],
  },
  icon: {
    textAlign: 'center',
  },
  iconMd: {
    fontSize: 20,
  },
  iconSm: {
    fontSize: 15,
  },
  iconLg: {
    fontSize: 26,
  },
  iconPill: {
    fontSize: 17,
  },
  labelText: {
    fontSize: 13,
    fontWeight: '800',
    color: '#1D4ED8',
  },
  labelTextSpeaking: {
    color: '#B45309',
  },
});
