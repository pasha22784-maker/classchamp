import React, { useState, useEffect } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  Animated,
} from 'react-native';
import { COLORS } from '../../constants/theme';
import { speakText, stopSpeaking, subscribeToSpeech, getCurrentlySpeaking } from '../../utils/speech';

interface SpeakerButtonProps {
  textToSpeak: string;
  size?: 'sm' | 'md';
  style?: ViewStyle;
}

export const SpeakerButton: React.FC<SpeakerButtonProps> = ({
  textToSpeak,
  size = 'md',
  style,
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

  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
      style={[
        styles.button,
        isSmall ? styles.buttonSm : styles.buttonMd,
        isSpeaking && styles.buttonSpeaking,
        style,
      ]}
      accessibilityLabel="Read aloud"
    >
      <Text style={[styles.icon, isSmall ? styles.iconSm : styles.iconMd]}>
        {isSpeaking ? '🔊' : '🔈'}
      </Text>
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
  buttonSpeaking: {
    backgroundColor: '#FEF3C7',
    borderColor: '#F59E0B',
    transform: [{ scale: 1.08 }],
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
});
