import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  ScrollView,
  Animated,
} from 'react-native';
import { COLORS, SPACING, BORDER_RADIUS, SHADOWS } from '../../constants/theme';
import { triggerHaptic } from '../../utils/haptics';
import { soundManager } from '../../utils/soundManager';
import { speakText, stopSpeaking } from '../../utils/speech';
import { useUserStore } from '../../store/useUserStore';
import { SpeakerButton } from '../common/SpeakerButton';

interface EnglishOppositesRhymesLabModalProps {
  visible: boolean;
  onClose: () => void;
  activeLang?: string;
}

interface OppositePair {
  id: string;
  word1: string;
  emoji1: string;
  desc1: string;
  word2: string;
  emoji2: string;
  desc2: string;
  category: string;
  speech1: string;
  speech2: string;
  color1: string;
  color2: string;
}

const OPPOSITE_PAIRS: OppositePair[] = [
  {
    id: 'hot_cold',
    word1: 'HOT',
    emoji1: '🔥',
    desc1: 'Steaming hot fire & soup!',
    word2: 'COLD',
    emoji2: '🍦',
    desc2: 'Frosty ice cream & snow!',
    category: 'Temperature',
    speech1: 'Hot! Fire and boiling soup are very hot! Ouch!',
    speech2: 'Cold! Ice cream and snowflakes are freezing cold! Brrr!',
    color1: '#FEE2E2',
    color2: '#E0F2FE',
  },
  {
    id: 'big_small',
    word1: 'BIG',
    emoji1: '🐘',
    desc1: 'Giant elephant with big ears!',
    word2: 'SMALL',
    emoji2: '🐭',
    desc2: 'Tiny mouse on four paws!',
    category: 'Size',
    speech1: 'Big! The elephant is huge and big!',
    speech2: 'Small! The little mouse is tiny and small! Squeak!',
    color1: '#EDE9FE',
    color2: '#FEF3C7',
  },
  {
    id: 'day_night',
    word1: 'DAY',
    emoji1: '☀️',
    desc1: 'Bright sun and chirping birds!',
    word2: 'NIGHT',
    emoji2: '🌙',
    desc2: 'Dark sky with twinkling stars!',
    category: 'Time',
    speech1: 'Day! Bright sunny daytime! Rise and shine!',
    speech2: 'Night! Starry night sky! Sleep tight, sweet dreams!',
    color1: '#FEF08A',
    color2: '#312E81',
  },
  {
    id: 'up_down',
    word1: 'UP',
    emoji1: '⬆️',
    desc1: 'Flying high in the clouds!',
    word2: 'DOWN',
    emoji2: '⬇️',
    desc2: 'Resting low on the ground!',
    category: 'Direction',
    speech1: 'Up! Look up high at the floating balloon!',
    speech2: 'Down! Look down low at the grass below!',
    color1: '#DCFCE7',
    color2: '#F3E8FF',
  },
  {
    id: 'fast_slow',
    word1: 'FAST',
    emoji1: '🐇',
    desc1: 'Zooming rabbit in a dash!',
    word2: 'SLOW',
    emoji2: '🐢',
    desc2: 'Strolling turtle step by step!',
    category: 'Speed',
    speech1: 'Fast! Quick and speedy like a rabbit on the run!',
    speech2: 'Slow! Gentle and steady like a turtle walking slow!',
    color1: '#FFEDD5',
    color2: '#E2E8F0',
  },
  {
    id: 'heavy_light',
    word1: 'HEAVY',
    emoji1: '🧱',
    desc1: 'Solid stone brick with a thud!',
    word2: 'LIGHT',
    emoji2: '🍃',
    desc2: 'Soft feather floating in the wind!',
    category: 'Weight',
    speech1: 'Heavy! A solid stone brick is very heavy! Thud!',
    speech2: 'Light! A gentle feather is light as air!',
    color1: '#CBD5E1',
    color2: '#D1FAE5',
  },
];

interface RhymeItem {
  id: string;
  word1: string;
  emoji1: string;
  word2: string;
  emoji2: string;
  soundFamily: string;
  speech: string;
}

const RHYME_ITEMS: RhymeItem[] = [
  { id: 'cat_bat', word1: 'Cat', emoji1: '🐱', word2: 'Bat', emoji2: '🦇', soundFamily: '-at', speech: 'Cat and Bat! They both rhyme with -at! Cat, Bat!' },
  { id: 'sun_run', word1: 'Sun', emoji1: '☀️', word2: 'Run', emoji2: '🏃', soundFamily: '-un', speech: 'Sun and Run! They both rhyme with -un! Sun, Run!' },
  { id: 'pen_hen', word1: 'Pen', emoji1: '🖊️', word2: 'Hen', emoji2: '🐔', soundFamily: '-en', speech: 'Pen and Hen! They both rhyme with -en! Pen, Hen!' },
  { id: 'frog_log', word1: 'Frog', emoji1: '🐸', word2: 'Log', emoji2: '🪵', soundFamily: '-og', speech: 'Frog and Log! They both rhyme with -og! Frog, Log!' },
  { id: 'king_ring', word1: 'King', emoji1: '👑', word2: 'Ring', emoji2: '💍', soundFamily: '-ing', speech: 'King and Ring! They both rhyme with -ing! King, Ring!' },
  { id: 'cap_map', word1: 'Cap', emoji1: '🧢', word2: 'Map', emoji2: '🗺️', soundFamily: '-ap', speech: 'Cap and Map! They both rhyme with -ap! Cap, Map!' },
];

interface OppMission {
  id: number;
  prompt: string;
  speech: string;
  correctWord: string;
  options: { word: string; emoji: string }[];
}

const OPP_MISSIONS: OppMission[] = [
  {
    id: 1,
    prompt: 'What is the opposite of steaming HOT 🔥?',
    speech: 'What is the opposite of hot? Tap cold!',
    correctWord: 'Cold',
    options: [
      { word: 'Cold', emoji: '🍦' },
      { word: 'Warm', emoji: '☀️' },
      { word: 'Fire', emoji: '💥' },
    ],
  },
  {
    id: 2,
    prompt: 'What rhymes with furry 🐱 CAT?',
    speech: 'Which word rhymes with Cat? Tap Bat!',
    correctWord: 'Bat',
    options: [
      { word: 'Dog', emoji: '🐶' },
      { word: 'Bat', emoji: '🦇' },
      { word: 'Fish', emoji: '🐟' },
    ],
  },
  {
    id: 3,
    prompt: 'What is the opposite of giant 🐘 BIG?',
    speech: 'What is the opposite of big? Tap small!',
    correctWord: 'Small',
    options: [
      { word: 'Tall', emoji: '🦒' },
      { word: 'Small', emoji: '🐭' },
      { word: 'Heavy', emoji: '🧱' },
    ],
  },
  {
    id: 4,
    prompt: 'What rhymes with shining ☀️ SUN?',
    speech: 'Which word rhymes with Sun? Tap Run!',
    correctWord: 'Run',
    options: [
      { word: 'Run', emoji: '🏃' },
      { word: 'Moon', emoji: '🌙' },
      { word: 'Star', emoji: '⭐' },
    ],
  },
  {
    id: 5,
    prompt: 'What is the opposite of pointing ⬆️ UP?',
    speech: 'What is the opposite of up? Tap down!',
    correctWord: 'Down',
    options: [
      { word: 'Down', emoji: '⬇️' },
      { word: 'In', emoji: '📦' },
      { word: 'Out', emoji: '🚪' },
    ],
  },
];

export const EnglishOppositesRhymesLabModal: React.FC<EnglishOppositesRhymesLabModalProps> = ({
  visible,
  onClose,
  activeLang = 'en',
}) => {
  const { addStars, addReward } = useUserStore();
  const [activeTab, setActiveTab] = useState<'opposites' | 'rhymes' | 'missions'>('opposites');
  const [selectedPair, setSelectedPair] = useState<OppositePair>(OPPOSITE_PAIRS[0]);
  const [activeSide, setActiveSide] = useState<'left' | 'right'>('left');
  const [missionIdx, setMissionIdx] = useState(0);
  const [missionScore, setMissionScore] = useState(0);
  const [isMissionComplete, setIsMissionComplete] = useState(false);
  const [feedbackMsg, setFeedbackMsg] = useState<string | null>(null);

  const flipAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (visible) {
      triggerHaptic('light');
      handleSelectSide('left', OPPOSITE_PAIRS[0]);
    } else {
      stopSpeaking();
    }
  }, [visible]);

  const handleSelectSide = (side: 'left' | 'right', pair: OppositePair = selectedPair) => {
    setActiveSide(side);
    triggerHaptic('medium');
    soundManager.playPop();

    Animated.sequence([
      Animated.timing(flipAnim, { toValue: 1.12, duration: 120, useNativeDriver: true }),
      Animated.timing(flipAnim, { toValue: 1.0, duration: 120, useNativeDriver: true }),
    ]).start();

    const text = side === 'left' ? pair.speech1 : pair.speech2;
    speakText(text);
  };

  const handleRhymeTap = (item: RhymeItem) => {
    triggerHaptic('light');
    soundManager.playBubblePop();
    speakText(item.speech);
  };

  const handleMissionAnswer = (word: string) => {
    if (feedbackMsg) return;
    const mission = OPP_MISSIONS[missionIdx];

    if (word === mission.correctWord) {
      soundManager.playCorrect();
      triggerHaptic('success');
      const nextScore = missionScore + 10;
      setMissionScore(nextScore);
      setFeedbackMsg('BRILLIANT! CORRECT! 🎉');

      setTimeout(() => {
        setFeedbackMsg(null);
        const next = missionIdx + 1;
        if (next >= OPP_MISSIONS.length) {
          finishMissions(nextScore);
        } else {
          setMissionIdx(next);
          speakText(OPP_MISSIONS[next].speech);
        }
      }, 1200);
    } else {
      soundManager.playIncorrect();
      triggerHaptic('warning');
      setFeedbackMsg('Try again! Tap the matching pair');
      setTimeout(() => setFeedbackMsg(null), 1400);
    }
  };

  const finishMissions = async (finalScore: number) => {
    setIsMissionComplete(true);
    soundManager.playFanfare();
    triggerHaptic('success');
    await addStars(5);
    await addReward({ stars: 5, coins: 50, xp: finalScore, streakShields: 1 });
  };

  const resetMissions = () => {
    setMissionIdx(0);
    setMissionScore(0);
    setIsMissionComplete(false);
    setFeedbackMsg(null);
    speakText(OPP_MISSIONS[0].speech);
  };

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.labContainer}>
          {/* Header Bar */}
          <View style={styles.hudHeader}>
            <View style={styles.headerLeft}>
              <View style={styles.labBadgePill}>
                <Text style={styles.labBadgeText}>🔄 ENGLISH EXPERIENTIAL LAB</Text>
              </View>
              <Text style={styles.labTitle}>
                {activeLang === 'hi' ? 'विलोम शब्द व तुकबंदी लैब' : 'Opposites & Rhymes Explorer Lab'}
              </Text>
            </View>

            <TouchableOpacity
              style={styles.closeBtn}
              onPress={() => {
                stopSpeaking();
                onClose();
              }}
            >
              <Text style={styles.closeBtnText}>✕</Text>
            </TouchableOpacity>
          </View>

          {/* Navigation Tabs */}
          <View style={styles.tabsRow}>
            <TouchableOpacity
              style={[styles.tabButton, activeTab === 'opposites' && styles.tabButtonActive]}
              onPress={() => {
                stopSpeaking();
                setActiveTab('opposites');
              }}
            >
              <Text style={[styles.tabText, activeTab === 'opposites' && styles.tabTextActive]}>
                🔄 Opposites Switcher
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.tabButton, activeTab === 'rhymes' && styles.tabButtonActive]}
              onPress={() => {
                stopSpeaking();
                setActiveTab('rhymes');
              }}
            >
              <Text style={[styles.tabText, activeTab === 'rhymes' && styles.tabTextActive]}>
                🎵 Rhyme Chimes
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.tabButton, activeTab === 'missions' && styles.tabButtonActive]}
              onPress={() => {
                stopSpeaking();
                setActiveTab('missions');
                speakText(OPP_MISSIONS[missionIdx].speech);
              }}
            >
              <Text style={[styles.tabText, activeTab === 'missions' && styles.tabTextActive]}>
                🎯 Lab Missions
              </Text>
            </TouchableOpacity>
          </View>

          {/* TAB 1: OPPOSITES SWITCHER */}
          {activeTab === 'opposites' && (
            <ScrollView
              style={styles.tabScrollView}
              contentContainerStyle={styles.tabContent}
              showsVerticalScrollIndicator={false}
            >
              {/* Interactive Split Switcher Card */}
              <View style={styles.interactiveBox}>
                <View style={styles.pairCategoryPill}>
                  <Text style={styles.pairCategoryText}>{selectedPair.category} Comparison</Text>
                </View>

                <Animated.View style={[styles.splitCard, { transform: [{ scale: flipAnim }] }]}>
                  {/* Left Side */}
                  <TouchableOpacity
                    style={[
                      styles.sideBox,
                      { backgroundColor: selectedPair.color1 },
                      activeSide === 'left' && styles.sideBoxActive,
                    ]}
                    activeOpacity={0.85}
                    onPress={() => handleSelectSide('left')}
                  >
                    <Text style={styles.sideEmoji}>{selectedPair.emoji1}</Text>
                    <Text style={styles.sideWord}>{selectedPair.word1}</Text>
                    <Text style={styles.sideDesc}>{selectedPair.desc1}</Text>
                    <View style={[styles.activeIndicator, activeSide === 'left' && styles.activeIndicatorOn]}>
                      <Text style={styles.activeIndicatorText}>{activeSide === 'left' ? 'ACTIVE ▶' : 'TAP ME'}</Text>
                    </View>
                  </TouchableOpacity>

                  {/* VS Circle */}
                  <View style={styles.vsBadge}>
                    <Text style={styles.vsText}>VS</Text>
                  </View>

                  {/* Right Side */}
                  <TouchableOpacity
                    style={[
                      styles.sideBox,
                      { backgroundColor: selectedPair.color2 },
                      activeSide === 'right' && styles.sideBoxActive,
                    ]}
                    activeOpacity={0.85}
                    onPress={() => handleSelectSide('right')}
                  >
                    <Text style={styles.sideEmoji}>{selectedPair.emoji2}</Text>
                    <Text style={styles.sideWord}>{selectedPair.word2}</Text>
                    <Text style={styles.sideDesc}>{selectedPair.desc2}</Text>
                    <View style={[styles.activeIndicator, activeSide === 'right' && styles.activeIndicatorOn]}>
                      <Text style={styles.activeIndicatorText}>{activeSide === 'right' ? 'ACTIVE ▶' : 'TAP ME'}</Text>
                    </View>
                  </TouchableOpacity>
                </Animated.View>

                {/* Speaker Button Row */}
                <View style={styles.speakerRow}>
                  <SpeakerButton
                    textToSpeak={activeSide === 'left' ? selectedPair.speech1 : selectedPair.speech2}
                    size="pill"
                    showLabel
                    activeLang={activeLang}
                  />
                </View>
              </View>

              <Text style={styles.hintLabel}>👇 Tap any pair to test opposite worlds:</Text>

              {/* Pair Selector Row */}
              <View style={styles.pairsGrid}>
                {OPPOSITE_PAIRS.map((pair) => {
                  const isCur = pair.id === selectedPair.id;
                  return (
                    <TouchableOpacity
                      key={pair.id}
                      style={[styles.pairPillBtn, isCur && styles.pairPillBtnActive]}
                      onPress={() => {
                        setSelectedPair(pair);
                        handleSelectSide('left', pair);
                      }}
                    >
                      <Text style={styles.pairPillEmoji}>{pair.emoji1} ↔️ {pair.emoji2}</Text>
                      <Text style={[styles.pairPillText, isCur && styles.pairPillTextActive]}>
                        {pair.word1} / {pair.word2}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </ScrollView>
          )}

          {/* TAB 2: RHYME CHIMES */}
          {activeTab === 'rhymes' && (
            <ScrollView
              style={styles.tabScrollView}
              contentContainerStyle={styles.tabContent}
              showsVerticalScrollIndicator={false}
            >
              <Text style={styles.hintLabel}>🎵 Tap each rhyming pair to hear their matching sounds:</Text>

              <View style={styles.rhymesList}>
                {RHYME_ITEMS.map((item) => (
                  <TouchableOpacity
                    key={item.id}
                    style={styles.rhymeCard}
                    activeOpacity={0.85}
                    onPress={() => handleRhymeTap(item)}
                  >
                    <View style={styles.rhymeFamilyBadge}>
                      <Text style={styles.rhymeFamilyText}>Sound: {item.soundFamily}</Text>
                    </View>

                    <View style={styles.rhymeWordsRow}>
                      <View style={styles.rhymeWordBox}>
                        <Text style={styles.rhymeEmoji}>{item.emoji1}</Text>
                        <Text style={styles.rhymeWord}>{item.word1}</Text>
                      </View>

                      <Text style={styles.rhymeEqual}>🎶 rhymes with 🎶</Text>

                      <View style={styles.rhymeWordBox}>
                        <Text style={styles.rhymeEmoji}>{item.emoji2}</Text>
                        <Text style={styles.rhymeWord}>{item.word2}</Text>
                      </View>
                    </View>

                    <SpeakerButton textToSpeak={item.speech} size="sm" activeLang={activeLang} />
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          )}

          {/* TAB 3: MISSIONS */}
          {activeTab === 'missions' && !isMissionComplete && (
            <View style={styles.missionsContainer}>
              <View style={styles.missionCard}>
                <View style={styles.missionHeaderRow}>
                  <View style={styles.missionBadgePill}>
                    <Text style={styles.missionBadgeText}>
                      Mission {missionIdx + 1} of {OPP_MISSIONS.length}
                    </Text>
                  </View>
                  <SpeakerButton textToSpeak={OPP_MISSIONS[missionIdx].speech} size="pill" showLabel activeLang={activeLang} />
                </View>

                <Text style={styles.missionPrompt}>{OPP_MISSIONS[missionIdx].prompt}</Text>
              </View>

              {feedbackMsg && (
                <View style={styles.feedbackBox}>
                  <Text style={styles.feedbackText}>{feedbackMsg}</Text>
                </View>
              )}

              <View style={styles.missionOptionsRow}>
                {OPP_MISSIONS[missionIdx].options.map((opt) => (
                  <TouchableOpacity
                    key={opt.word}
                    style={styles.missionOptBtn}
                    activeOpacity={0.82}
                    onPress={() => handleMissionAnswer(opt.word)}
                  >
                    <Text style={styles.missionOptEmoji}>{opt.emoji}</Text>
                    <Text style={styles.missionOptWord}>{opt.word}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          )}

          {/* Completed State */}
          {activeTab === 'missions' && isMissionComplete && (
            <View style={styles.completeContainer}>
              <Text style={{ fontSize: 56 }}>🏆</Text>
              <Text style={styles.completeTitle}>OPPOSITES & RHYMES MASTER! 🌟</Text>
              <Text style={styles.completeSub}>You solved all opposite challenges and rhyme missions!</Text>

              <View style={styles.rewardPillsRow}>
                <View style={styles.rewardPill}>
                  <Text style={{ fontSize: 20 }}>⭐</Text>
                  <Text style={styles.rewardPillVal}>+5 Stars</Text>
                </View>
                <View style={styles.rewardPill}>
                  <Text style={{ fontSize: 20 }}>💰</Text>
                  <Text style={styles.rewardPillVal}>+50 Coins</Text>
                </View>
              </View>

              <View style={styles.completeActionRow}>
                <TouchableOpacity style={styles.completeBtn} onPress={resetMissions}>
                  <Text style={styles.completeBtnText}>Play Again 🔄</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.completeBtn, { backgroundColor: '#10B981' }]} onPress={onClose}>
                  <Text style={styles.completeBtnText}>Done 👍</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(15, 23, 42, 0.75)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
  },
  labContainer: {
    width: '100%',
    maxWidth: 580,
    maxHeight: '94%',
    backgroundColor: '#FFFFFF',
    borderRadius: 28,
    overflow: 'hidden',
    ...SHADOWS.large,
    flexDirection: 'column',
  },
  hudHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FDF2F8',
    borderBottomWidth: 1.5,
    borderBottomColor: '#FBCFE8',
  },
  headerLeft: {
    flex: 1,
  },
  labBadgePill: {
    alignSelf: 'flex-start',
    backgroundColor: '#FCE7F3',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
    marginBottom: 4,
  },
  labBadgeText: {
    fontSize: 10,
    fontWeight: '900',
    color: '#BE185D',
  },
  labTitle: {
    fontSize: 16,
    fontWeight: '900',
    color: '#0F172A',
  },
  closeBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    ...SHADOWS.small,
  },
  closeBtnText: {
    fontSize: 15,
    fontWeight: '900',
    color: '#64748B',
  },
  tabsRow: {
    flexDirection: 'row',
    backgroundColor: '#F8FAFC',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
    paddingHorizontal: 12,
    paddingVertical: 6,
    gap: 6,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  tabButtonActive: {
    backgroundColor: '#DB2777',
    borderColor: '#BE185D',
  },
  tabText: {
    fontSize: 11,
    fontWeight: '800',
    color: '#475569',
  },
  tabTextActive: {
    color: '#FFFFFF',
  },
  tabScrollView: {
    flex: 1,
  },
  tabContent: {
    padding: 16,
    paddingBottom: 24,
  },
  interactiveBox: {
    backgroundColor: '#FDF4FF',
    borderRadius: 22,
    padding: 14,
    borderWidth: 1.5,
    borderColor: '#F0ABFC',
    alignItems: 'center',
    marginBottom: 14,
  },
  pairCategoryPill: {
    backgroundColor: '#FAE8FF',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 10,
  },
  pairCategoryText: {
    fontSize: 11,
    fontWeight: '900',
    color: '#A21CAF',
  },
  splitCard: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  sideBox: {
    flex: 1,
    borderRadius: 18,
    padding: 12,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
    ...SHADOWS.small,
  },
  sideBoxActive: {
    borderColor: '#DB2777',
    backgroundColor: '#FFFFFF',
  },
  sideEmoji: {
    fontSize: 42,
    marginBottom: 4,
  },
  sideWord: {
    fontSize: 18,
    fontWeight: '900',
    color: '#0F172A',
  },
  sideDesc: {
    fontSize: 10,
    fontWeight: '600',
    color: '#475569',
    textAlign: 'center',
    marginTop: 2,
    minHeight: 28,
  },
  activeIndicator: {
    marginTop: 8,
    backgroundColor: '#F1F5F9',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
  },
  activeIndicatorOn: {
    backgroundColor: '#DB2777',
  },
  activeIndicatorText: {
    fontSize: 9,
    fontWeight: '900',
    color: '#475569',
  },
  vsBadge: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#BE185D',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  vsText: {
    fontSize: 11,
    fontWeight: '900',
    color: '#FFFFFF',
  },
  speakerRow: {
    marginTop: 10,
  },
  hintLabel: {
    fontSize: 12,
    fontWeight: '800',
    color: '#64748B',
    marginBottom: 10,
  },
  pairsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  pairPillBtn: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#F8FAFC',
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    alignItems: 'center',
    flexBasis: '31%',
    flexGrow: 1,
  },
  pairPillBtnActive: {
    backgroundColor: '#FCE7F3',
    borderColor: '#DB2777',
  },
  pairPillEmoji: {
    fontSize: 16,
    marginBottom: 2,
  },
  pairPillText: {
    fontSize: 11,
    fontWeight: '800',
    color: '#334155',
  },
  pairPillTextActive: {
    color: '#BE185D',
    fontWeight: '900',
  },
  rhymesList: {
    gap: 10,
  },
  rhymeCard: {
    backgroundColor: '#FAF5FF',
    borderRadius: 18,
    padding: 12,
    borderWidth: 1.5,
    borderColor: '#E9D5FF',
    alignItems: 'center',
  },
  rhymeFamilyBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#F3E8FF',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
    marginBottom: 6,
  },
  rhymeFamilyText: {
    fontSize: 10,
    fontWeight: '900',
    color: '#7E22CE',
  },
  rhymeWordsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 4,
  },
  rhymeWordBox: {
    alignItems: 'center',
  },
  rhymeEmoji: {
    fontSize: 32,
  },
  rhymeWord: {
    fontSize: 16,
    fontWeight: '900',
    color: '#3B0764',
  },
  rhymeEqual: {
    fontSize: 11,
    fontWeight: '700',
    color: '#A855F7',
  },
  missionsContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'space-between',
  },
  missionCard: {
    backgroundColor: '#FDF4FF',
    borderRadius: 20,
    padding: 16,
    borderWidth: 1.5,
    borderColor: '#F0ABFC',
  },
  missionHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  missionBadgePill: {
    backgroundColor: '#FAE8FF',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  missionBadgeText: {
    fontSize: 11,
    fontWeight: '800',
    color: '#A21CAF',
  },
  missionPrompt: {
    fontSize: 16,
    fontWeight: '900',
    color: '#0F172A',
    textAlign: 'center',
    marginVertical: 10,
  },
  feedbackBox: {
    backgroundColor: '#ECFDF5',
    padding: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#10B981',
    alignItems: 'center',
  },
  feedbackText: {
    fontSize: 13,
    fontWeight: '900',
    color: '#047857',
  },
  missionOptionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 8,
  },
  missionOptBtn: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    paddingVertical: 16,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FBCFE8',
    ...SHADOWS.small,
  },
  missionOptEmoji: {
    fontSize: 36,
    marginBottom: 6,
  },
  missionOptWord: {
    fontSize: 15,
    fontWeight: '900',
    color: '#0F172A',
  },
  completeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  completeTitle: {
    fontSize: 18,
    fontWeight: '900',
    color: '#0F172A',
    marginTop: 10,
  },
  completeSub: {
    fontSize: 13,
    color: '#64748B',
    textAlign: 'center',
    marginTop: 4,
  },
  rewardPillsRow: {
    flexDirection: 'row',
    gap: 12,
    marginVertical: 16,
  },
  rewardPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 14,
    gap: 6,
  },
  rewardPillVal: {
    fontSize: 13,
    fontWeight: '900',
    color: '#92400E',
  },
  completeActionRow: {
    flexDirection: 'row',
    gap: 12,
  },
  completeBtn: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#DB2777',
    borderRadius: 14,
  },
  completeBtnText: {
    color: '#FFFFFF',
    fontWeight: '900',
    fontSize: 13,
  },
});
