import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  Animated,
  Dimensions,
  ScrollView,
} from 'react-native';
import { COLORS, SPACING, BORDER_RADIUS, SHADOWS } from '../../constants/theme';
import { triggerHaptic } from '../../utils/haptics';
import { soundManager } from '../../utils/soundManager';
import { SpeakerButton } from '../common/SpeakerButton';
import { stopSpeaking } from '../../utils/speech';

const { width } = Dimensions.get('window');

export type UkgLabStation = 'ten_frame' | 'add_sub' | 'coins' | 'geometry' | 'balance';

interface UkgMathsInteractiveLabModalProps {
  visible: boolean;
  onClose: () => void;
  activeLang?: string;
  initialStation?: UkgLabStation;
}

export const UkgMathsInteractiveLabModal: React.FC<UkgMathsInteractiveLabModalProps> = ({
  visible,
  onClose,
  activeLang = 'hi',
  initialStation = 'ten_frame',
}) => {
  const isHindi = activeLang === 'hi';
  const [station, setStation] = useState<UkgLabStation>(initialStation);

  useEffect(() => {
    if (visible && initialStation) {
      setStation(initialStation);
    }
  }, [visible, initialStation]);

  // =========================================================================
  // STATION 1: TEN-FRAME & PLACE VALUE STATE
  // =========================================================================
  const [tenFrameCount, setTenFrameCount] = useState<number>(7);
  const [tenFrameMissionTarget, setTenFrameMissionTarget] = useState<number>(14);
  const [tenFrameMissionSolved, setTenFrameMissionSolved] = useState<boolean>(false);

  const tens = Math.floor(tenFrameCount / 10);
  const ones = tenFrameCount % 10;

  const handleToggleTenFrameSlot = (slotIndex: number) => {
    triggerHaptic('light');
    soundManager.playPop();
    if (slotIndex < tenFrameCount) {
      // remove from this index onwards
      const newCount = slotIndex;
      setTenFrameCount(newCount);
      checkTenFrameMission(newCount);
    } else {
      // fill up to this index + 1
      const newCount = slotIndex + 1;
      setTenFrameCount(newCount);
      checkTenFrameMission(newCount);
    }
  };

  const handleAddTenFrame = (amount: number) => {
    triggerHaptic('medium');
    soundManager.playPop();
    const newCount = Math.min(20, Math.max(0, tenFrameCount + amount));
    setTenFrameCount(newCount);
    checkTenFrameMission(newCount);
  };

  const checkTenFrameMission = (cnt: number) => {
    if (cnt === tenFrameMissionTarget) {
      setTenFrameMissionSolved(true);
      soundManager.playFanfare();
      triggerHaptic('success');
    } else {
      setTenFrameMissionSolved(false);
    }
  };

  const handleNewTenFrameMission = () => {
    triggerHaptic('light');
    soundManager.playPop();
    const targets = [8, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    const filtered = targets.filter((t) => t !== tenFrameMissionTarget);
    const nextTarget = filtered[Math.floor(Math.random() * filtered.length)];
    setTenFrameMissionTarget(nextTarget);
    setTenFrameMissionSolved(tenFrameCount === nextTarget);
  };

  // =========================================================================
  // STATION 2: ADDITION & SUBTRACTION BEAKER STATE
  // =========================================================================
  const [opMode, setOpMode] = useState<'add' | 'sub'>('add');
  const [addLeft, setAddLeft] = useState<number>(4);
  const [addRight, setAddRight] = useState<number>(3);
  const [subTotal, setSubTotal] = useState<number>(7);
  const [subTakenAway, setSubTakenAway] = useState<number>(2);
  const [objectEmoji, setObjectEmoji] = useState<'🍎' | '⭐' | '🍬' | '⚽'>('🍎');

  const addSum = addLeft + addRight;
  const subDiff = subTotal - subTakenAway;

  // =========================================================================
  // STATION 3: INDIAN CURRENCY & PIGGY BANK STATE
  // =========================================================================
  const [bankCoins, setBankCoins] = useState<number[]>([]);
  const [coinMissionTarget, setCoinMissionTarget] = useState<number>(8);
  const [coinMissionSuccess, setCoinMissionSuccess] = useState<boolean>(false);

  const bankTotal = bankCoins.reduce((sum, v) => sum + v, 0);

  const handleDropCoin = (coinVal: number) => {
    triggerHaptic('medium');
    soundManager.playPop();
    const updated = [...bankCoins, coinVal];
    setBankCoins(updated);
    const newTot = updated.reduce((s, v) => s + v, 0);
    if (newTot === coinMissionTarget) {
      setCoinMissionSuccess(true);
      soundManager.playFanfare();
      triggerHaptic('success');
    } else if (newTot > coinMissionTarget) {
      setCoinMissionSuccess(false);
    }
  };

  const handleClearBank = () => {
    triggerHaptic('light');
    soundManager.playPop();
    setBankCoins([]);
    setCoinMissionSuccess(false);
  };

  const handleNewCoinMission = () => {
    triggerHaptic('light');
    soundManager.playPop();
    const missions = [5, 6, 7, 8, 9, 10, 12, 15, 16, 20];
    const filtered = missions.filter((m) => m !== coinMissionTarget);
    const nextTarget = filtered[Math.floor(Math.random() * filtered.length)];
    setCoinMissionTarget(nextTarget);
    setBankCoins([]);
    setCoinMissionSuccess(false);
  };

  // =========================================================================
  // STATION 4: 2D & 3D GEOMETRY STUDIO STATE
  // =========================================================================
  const [geoTab, setGeoTab] = useState<'2D' | '3D'>('2D');
  const [selected2DShape, setSelected2DShape] = useState<string>('triangle');
  const [selected3DShape, setSelected3DShape] = useState<string>('sphere');

  const SHAPES_2D = [
    {
      id: 'circle',
      nameEn: 'Circle',
      nameHi: 'वृत्त (गोल)',
      icon: '⭕',
      sides: 0,
      corners: 0,
      descEn: 'Round shape with 0 straight sides and 0 corners.',
      descHi: 'पूरी तरह गोल आकृति, 0 सीधी भुजाएँ और 0 कोने।',
      realExample: '🪙 सिक्का, 🛞 पहिया, 🌕 रोटी',
    },
    {
      id: 'triangle',
      nameEn: 'Triangle',
      nameHi: 'त्रिभुज (त्रिकोण)',
      icon: '🔺',
      sides: 3,
      corners: 3,
      descEn: '3 straight sides and 3 sharp corners (vertices).',
      descHi: '3 सीधी भुजाएँ और 3 कोने।',
      realExample: '🍕 पिज़्ज़ा स्लाइस, 📐 समोसा, ⛺ तम्बू',
    },
    {
      id: 'square',
      nameEn: 'Square',
      nameHi: 'वर्ग (चौकोर)',
      icon: '⬛',
      sides: 4,
      corners: 4,
      descEn: '4 equal straight sides and 4 equal square corners.',
      descHi: '4 बिल्कुल बराबर भुजाएँ और 4 कोने।',
      realExample: '🍞 ब्रेड स्लाइस, 🪟 खिड़की, 🎲 पासा फलक',
    },
    {
      id: 'rectangle',
      nameEn: 'Rectangle',
      nameHi: 'आयत (लम्बा चौकोर)',
      icon: '▭',
      sides: 4,
      corners: 4,
      descEn: '4 straight sides (opposite sides are equal) and 4 corners.',
      descHi: '4 भुजाएँ (आमने-सामने की बराबर) और 4 कोने।',
      realExample: '🚪 दरवाजा, 📱 मोबाइल फोन, 💵 रुपया नोट',
    },
    {
      id: 'hexagon',
      nameEn: 'Hexagon',
      nameHi: 'षट्भुज (छह भुजाएँ)',
      icon: '⬡',
      sides: 6,
      corners: 6,
      descEn: '6 straight sides and 6 corners.',
      descHi: '6 सीधी भुजाएँ और 6 कोने।',
      realExample: '🐝 मधुमक्खी का छत्ता, 🛑 स्टॉप साइन',
    },
  ];

  const SHAPES_3D = [
    {
      id: 'sphere',
      nameEn: 'Sphere',
      nameHi: 'गोला (ठोस गेंद)',
      icon: '⚽',
      faces: '1 Curved Face (1 घुमावदार सतह)',
      edges: 0,
      vertices: 0,
      descEn: 'Round 3D solid like a ball. It can easily roll!',
      descHi: 'गेंद जैसा ठोस गोला। यह आसानी से लुढ़क सकता है!',
      realExample: '⚽ फुटबॉल, 🍊 संतरा, 🌍 ग्लोब',
    },
    {
      id: 'cube',
      nameEn: 'Cube',
      nameHi: 'घन (चौकोर डिब्बा)',
      icon: '🎲',
      faces: '6 Flat Square Faces (6 चौकोर फलक)',
      edges: 12,
      vertices: 8,
      descEn: 'Box-like solid with 6 square faces. It stacks without rolling!',
      descHi: '6 चौकोर सतहों वाला डिब्बा। इसे एक के ऊपर एक रखा जा सकता है!',
      realExample: '🎲 लूडो का पासा, 🧊 बर्फ का टुकड़ा, 📦 पार्सल बॉक्स',
    },
    {
      id: 'cylinder',
      nameEn: 'Cylinder',
      nameHi: 'बेलन (पाइप जैसा)',
      icon: '🥫',
      faces: '2 Flat Circles + 1 Curved Face (2 गोल + 1 घुमावदार)',
      edges: 2,
      vertices: 0,
      descEn: 'Round tube solid with 2 circular flat ends. It can roll and stack!',
      descHi: '2 गोल समतल सिरों वाला ठोस। यह लुढ़क भी सकता है और खड़ा भी हो सकता है!',
      realExample: '🥫 कोल्ड ड्रिंक टिन, 🪘 ढोलक, 🕯️ मोमबत्ती',
    },
    {
      id: 'cone',
      nameEn: 'Cone',
      nameHi: 'शंकु (टोपी जैसा)',
      icon: '🍦',
      faces: '1 Flat Circle + 1 Pointed Tip (1 गोल फलक + 1 नुकीला सिरा)',
      edges: 1,
      vertices: 1,
      descEn: 'Pointed solid with 1 flat circle base and 1 vertex tip.',
      descHi: 'नीचे से गोल और ऊपर से नुकीला।',
      realExample: '🍦 आइसक्रीम कोन, 🥳 पार्टी हैट, 🚦 ट्रैफिक कोन',
    },
  ];

  // =========================================================================
  // STATION 5: BALANCE BEAM STATE
  // =========================================================================
  const [leftPanItems, setLeftPanItems] = useState<{ id: string; emoji: string; weight: number }[]>([
    { id: 'bear_1', emoji: '🐻', weight: 4 },
  ]);
  const [rightPanItems, setRightPanItems] = useState<{ id: string; emoji: string; weight: number }[]>([
    { id: 'rabbit_1', emoji: '🐰', weight: 2 },
    { id: 'apple_1', emoji: '🍎', weight: 1 },
  ]);

  const leftWeight = leftPanItems.reduce((acc, i) => acc + i.weight, 0);
  const rightWeight = rightPanItems.reduce((acc, i) => acc + i.weight, 0);
  const weightDiff = leftWeight - rightWeight;

  const tiltAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // -15 deg (left down) to +15 deg (right down)
    const targetDeg = Math.min(15, Math.max(-15, (rightWeight - leftWeight) * 4));
    Animated.spring(tiltAnim, {
      toValue: targetDeg,
      friction: 5,
      tension: 40,
      useNativeDriver: true,
    }).start();
  }, [leftWeight, rightWeight]);

  const handleAddPanItem = (pan: 'left' | 'right', emoji: string, weight: number) => {
    triggerHaptic('medium');
    soundManager.playPop();
    const item = { id: `${pan}_${Date.now()}_${Math.random()}`, emoji, weight };
    if (pan === 'left') {
      if (leftPanItems.length < 5) setLeftPanItems([...leftPanItems, item]);
    } else {
      if (rightPanItems.length < 5) setRightPanItems([...rightPanItems, item]);
    }
  };

  const handleRemovePanItem = (pan: 'left' | 'right', itemId: string) => {
    triggerHaptic('light');
    soundManager.playPop();
    if (pan === 'left') {
      setLeftPanItems(leftPanItems.filter((i) => i.id !== itemId));
    } else {
      setRightPanItems(rightPanItems.filter((i) => i.id !== itemId));
    }
  };

  const handleResetBalance = () => {
    triggerHaptic('light');
    soundManager.playPop();
    setLeftPanItems([]);
    setRightPanItems([]);
  };

  const active2DShapeObj = SHAPES_2D.find((s) => s.id === selected2DShape) || SHAPES_2D[1];
  const active3DShapeObj = SHAPES_3D.find((s) => s.id === selected3DShape) || SHAPES_3D[0];

  return (
    <Modal visible={visible} animationType="slide" transparent={false} onRequestClose={onClose}>
      <View style={styles.container}>
        {/* Top Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.closeBtn}
            onPress={() => {
              stopSpeaking();
              triggerHaptic('light');
              onClose();
            }}
          >
            <Text style={styles.closeText}>✕</Text>
          </TouchableOpacity>

          <View style={styles.headerTitleCol}>
            <View style={styles.headerBadge}>
              <Text style={styles.headerBadgeText}>
                {isHindi ? '⭐ यूकेजी मैथ्स एसटीईएम लैब' : '⭐ UKG MATHS STEM LAB'}
              </Text>
            </View>
            <Text style={styles.headerTitle}>
              {isHindi ? '🔬 हैंड्स-ऑन गणित प्रयोगशाला' : '🔬 Hands-on Mathematics Lab'}
            </Text>
          </View>

          <SpeakerButton
            textToSpeak={
              station === 'ten_frame'
                ? isHindi
                  ? `दहाई और इकाई टेन-फ्रेम लैब। कुल संख्या है ${tenFrameCount}। जिसमें 1 दहाई दस और ${ones} इकाई हैं।`
                  : `Ten-frame and place value lab. Total count is ${tenFrameCount}, meaning ${tens} tens and ${ones} ones.`
                : station === 'add_sub'
                ? opMode === 'add'
                  ? isHindi
                    ? `${addLeft} और ${addRight} मिलकर बनते हैं ${addSum}।`
                    : `${addLeft} plus ${addRight} equals ${addSum}.`
                  : isHindi
                  ? `${subTotal} में से ${subTakenAway} घटाने पर बचते हैं ${subDiff}।`
                  : `${subTotal} minus ${subTakenAway} equals ${subDiff}.`
                : station === 'coins'
                ? isHindi
                  ? `गुल्लक में कुल सिक्के हैं ${bankTotal} रुपये।`
                  : `Total coins in piggy bank equal ${bankTotal} Rupees.`
                : station === 'geometry'
                ? geoTab === '2D'
                  ? isHindi
                    ? `${active2DShapeObj.nameHi} में ${active2DShapeObj.sides} भुजाएँ और ${active2DShapeObj.corners} कोने होते हैं।`
                    : `${active2DShapeObj.nameEn} has ${active2DShapeObj.sides} sides and ${active2DShapeObj.corners} corners.`
                  : isHindi
                  ? `${active3DShapeObj.nameHi}। ${active3DShapeObj.descHi}`
                  : `${active3DShapeObj.nameEn}. ${active3DShapeObj.descEn}`
                : isHindi
                ? weightDiff === 0
                  ? 'दोनों पलड़े बिल्कुल बराबर संतुलित हैं!'
                  : weightDiff > 0
                  ? 'बायाँ पलड़ा भारी है और नीचे झुक गया है।'
                  : 'दायाँ पलड़ा भारी है और नीचे झुक गया है।'
                : weightDiff === 0
                ? 'Both pans are perfectly balanced!'
                : weightDiff > 0
                ? 'Left pan is heavier!'
                : 'Right pan is heavier!'
            }
            activeLang={isHindi ? 'hi' : 'en'}
            size="md"
          />
        </View>

        {/* Experiment Station Tabs Bar */}
        <View style={styles.stationTabsScrollContainer}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.stationTabsScroll}
          >
            <TouchableOpacity
              style={[styles.stationPill, station === 'ten_frame' && styles.stationPillActive]}
              onPress={() => {
                triggerHaptic('light');
                soundManager.playPop();
                setStation('ten_frame');
              }}
            >
              <Text style={styles.stationPillEmoji}>🟩</Text>
              <Text style={[styles.stationPillText, station === 'ten_frame' && styles.stationPillTextActive]}>
                {isHindi ? 'टेन-फ्रेम (1-20)' : 'Ten-Frames (1-20)'}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.stationPill, station === 'add_sub' && styles.stationPillActive]}
              onPress={() => {
                triggerHaptic('light');
                soundManager.playPop();
                setStation('add_sub');
              }}
            >
              <Text style={styles.stationPillEmoji}>🧪</Text>
              <Text style={[styles.stationPillText, station === 'add_sub' && styles.stationPillTextActive]}>
                {isHindi ? 'जोड़/घटाव बीकर' : 'Add/Sub Beaker'}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.stationPill, station === 'coins' && styles.stationPillActive]}
              onPress={() => {
                triggerHaptic('light');
                soundManager.playPop();
                setStation('coins');
              }}
            >
              <Text style={styles.stationPillEmoji}>🪙</Text>
              <Text style={[styles.stationPillText, station === 'coins' && styles.stationPillTextActive]}>
                {isHindi ? 'सिक्के व गुल्लक' : 'Piggy Bank Coins'}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.stationPill, station === 'geometry' && styles.stationPillActive]}
              onPress={() => {
                triggerHaptic('light');
                soundManager.playPop();
                setStation('geometry');
              }}
            >
              <Text style={styles.stationPillEmoji}>🔷</Text>
              <Text style={[styles.stationPillText, station === 'geometry' && styles.stationPillTextActive]}>
                {isHindi ? 'आकृतियाँ (2D/3D)' : '2D & 3D Shapes'}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.stationPill, station === 'balance' && styles.stationPillActive]}
              onPress={() => {
                triggerHaptic('light');
                soundManager.playPop();
                setStation('balance');
              }}
            >
              <Text style={styles.stationPillEmoji}>⚖️</Text>
              <Text style={[styles.stationPillText, station === 'balance' && styles.stationPillTextActive]}>
                {isHindi ? 'तराजू भार संतुलन' : 'Balance Beam'}
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Content Area */}
        <ScrollView contentContainerStyle={styles.contentScroll} showsVerticalScrollIndicator={false}>
          {/* ================================================================= */}
          {/* STATION 1: TEN-FRAME & PLACE VALUE                                */}
          {/* ================================================================= */}
          {station === 'ten_frame' && (
            <View style={styles.stationCard}>
              <View style={styles.stationHeaderRow}>
                <View>
                  <Text style={styles.stationTitle}>
                    {isHindi ? '🟩 दहाई व इकाई टेन-फ्रेम लैब' : '🟩 Ten-Frame & Place Value Explorer'}
                  </Text>
                  <Text style={styles.stationSub}>
                    {isHindi
                      ? 'बॉक्स पर टैप करके भरें या हटाएँ • 1 दहाई = 10 वस्तुएँ'
                      : 'Tap slots to fill or remove • 1 Ten = 10 items'}
                  </Text>
                </View>
              </View>

              {/* Mission Card */}
              <View style={[styles.missionCard, tenFrameMissionSolved && styles.missionCardSuccess]}>
                <View style={styles.missionTopRow}>
                  <Text style={styles.missionTitle}>
                    🎯 {isHindi ? 'मिशन चैलेंज:' : 'Mission Challenge:'} {isHindi ? `संख्या ${tenFrameMissionTarget} बनाएं!` : `Make Number ${tenFrameMissionTarget}!`}
                  </Text>
                  <TouchableOpacity style={styles.newMissionBtn} onPress={handleNewTenFrameMission}>
                    <Text style={styles.newMissionBtnText}>{isHindi ? 'नया मिशन 🔄' : 'New Target 🔄'}</Text>
                  </TouchableOpacity>
                </View>

                {tenFrameMissionSolved ? (
                  <View style={styles.successBanner}>
                    <Text style={styles.successBannerText}>
                      🎉 {isHindi ? `शानदार! आपने ${tenFrameMissionTarget} पूरा बना दिया!` : `Awesome! You made ${tenFrameMissionTarget}!`}
                    </Text>
                  </View>
                ) : (
                  <Text style={styles.missionHintText}>
                    {isHindi
                      ? `वर्तमान संख्या: ${tenFrameCount} • लक्ष्य: ${tenFrameMissionTarget} (${tenFrameCount < tenFrameMissionTarget ? `${tenFrameMissionTarget - tenFrameCount} और जोड़ें` : `${tenFrameCount - tenFrameMissionTarget} हटाएँ`})`
                      : `Current: ${tenFrameCount} • Target: ${tenFrameMissionTarget}`}
                  </Text>
                )}
              </View>

              {/* Live Place-Value Big Breakdown Card */}
              <View style={styles.breakdownCard}>
                <View style={styles.bigNumberBadge}>
                  <Text style={styles.bigNumberDigit}>{tenFrameCount}</Text>
                </View>
                <View style={styles.breakdownCol}>
                  <Text style={styles.breakdownEquation}>
                    {tens > 0 ? `${tens * 10} + ${ones} = ${tenFrameCount}` : `${tenFrameCount}`}
                  </Text>
                  <Text style={styles.breakdownLabel}>
                    {isHindi
                      ? `${tens} दहाई (Ten) + ${ones} इकाई (Ones)`
                      : `${tens} Ten(s) (${tens * 10}) + ${ones} One(s) (${ones})`}
                  </Text>
                </View>
              </View>

              {/* Frame 1 (1 to 10) */}
              <View style={styles.frameContainer}>
                <View style={styles.frameLabelRow}>
                  <Text style={styles.frameLabelTitle}>
                    {isHindi ? 'पहला टेन-फ्रेम (1 से 10)' : 'Ten-Frame 1 (1 to 10)'}
                  </Text>
                  <Text style={styles.frameLabelCount}>
                    {Math.min(10, tenFrameCount)} / 10 {isHindi ? 'भरे हैं' : 'Filled'}
                  </Text>
                </View>

                <View style={styles.tenFrameGrid}>
                  {Array.from({ length: 10 }).map((_, idx) => {
                    const isFilled = idx < tenFrameCount;
                    return (
                      <TouchableOpacity
                        key={`frame1_${idx}`}
                        style={[styles.tenFrameSlot, isFilled && styles.tenFrameSlotFilled]}
                        activeOpacity={0.8}
                        onPress={() => handleToggleTenFrameSlot(idx)}
                      >
                        <Text style={styles.slotDot}>{isFilled ? '🟢' : '⬜'}</Text>
                        <Text style={styles.slotIndexNumber}>{idx + 1}</Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>

              {/* Frame 2 (11 to 20) */}
              <View style={styles.frameContainer}>
                <View style={styles.frameLabelRow}>
                  <Text style={styles.frameLabelTitle}>
                    {isHindi ? 'दूसरा टेन-फ्रेम (11 से 20)' : 'Ten-Frame 2 (11 to 20)'}
                  </Text>
                  <Text style={styles.frameLabelCount}>
                    {Math.max(0, tenFrameCount - 10)} / 10 {isHindi ? 'भरे हैं' : 'Filled'}
                  </Text>
                </View>

                <View style={styles.tenFrameGrid}>
                  {Array.from({ length: 10 }).map((_, idx) => {
                    const totalIdx = 10 + idx;
                    const isFilled = totalIdx < tenFrameCount;
                    return (
                      <TouchableOpacity
                        key={`frame2_${idx}`}
                        style={[styles.tenFrameSlot, isFilled && styles.tenFrameSlotFilledSecond]}
                        activeOpacity={0.8}
                        onPress={() => handleToggleTenFrameSlot(totalIdx)}
                      >
                        <Text style={styles.slotDot}>{isFilled ? '🟡' : '⬜'}</Text>
                        <Text style={styles.slotIndexNumber}>{totalIdx + 1}</Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>

              {/* Quick Controller Buttons */}
              <View style={styles.quickButtonsRow}>
                <TouchableOpacity
                  style={[styles.quickBtn, { backgroundColor: '#DBEAFE' }]}
                  onPress={() => handleAddTenFrame(1)}
                >
                  <Text style={[styles.quickBtnText, { color: '#1E40AF' }]}>+1 🟢</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.quickBtn, { backgroundColor: '#FEF3C7' }]}
                  onPress={() => handleAddTenFrame(5)}
                >
                  <Text style={[styles.quickBtnText, { color: '#92400E' }]}>+5 🖐️</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.quickBtn, { backgroundColor: '#DCFCE7' }]}
                  onPress={() => {
                    triggerHaptic('medium');
                    soundManager.playPop();
                    const next = tenFrameCount < 10 ? 10 : 20;
                    setTenFrameCount(next);
                    checkTenFrameMission(next);
                  }}
                >
                  <Text style={[styles.quickBtnText, { color: '#166534' }]}>
                    {tenFrameCount < 10 ? 'Fill 10 🔟' : 'Fill 20 🌟'}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.quickBtn, { backgroundColor: '#FEE2E2' }]}
                  onPress={() => {
                    triggerHaptic('light');
                    soundManager.playPop();
                    setTenFrameCount(0);
                    checkTenFrameMission(0);
                  }}
                >
                  <Text style={[styles.quickBtnText, { color: '#991B1B' }]}>Clear 🔄</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}

          {/* ================================================================= */}
          {/* STATION 2: ADDITION & SUBTRACTION BEAKER                          */}
          {/* ================================================================= */}
          {station === 'add_sub' && (
            <View style={styles.stationCard}>
              <View style={styles.stationHeaderRow}>
                <View>
                  <Text style={styles.stationTitle}>
                    {isHindi ? '🧪 जोड़ व घटाव बीकर लैब' : '🧪 Visual Addition & Subtraction Beaker'}
                  </Text>
                  <Text style={styles.stationSub}>
                    {isHindi
                      ? 'चीजों को मिलाकर जोड़ें या हटाकर घटाएँ!'
                      : 'Combine objects to add, or tap to take away!'}
                  </Text>
                </View>
              </View>

              {/* Mode Switcher */}
              <View style={styles.opModeSwitchRow}>
                <TouchableOpacity
                  style={[styles.opModeBtn, opMode === 'add' && styles.opModeBtnActiveAdd]}
                  onPress={() => {
                    triggerHaptic('light');
                    soundManager.playPop();
                    setOpMode('add');
                  }}
                >
                  <Text style={[styles.opModeBtnText, opMode === 'add' && styles.opModeBtnTextActive]}>
                    ➕ {isHindi ? 'जोड़ लैब (Addition)' : 'Addition (+)'}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.opModeBtn, opMode === 'sub' && styles.opModeBtnActiveSub]}
                  onPress={() => {
                    triggerHaptic('light');
                    soundManager.playPop();
                    setOpMode('sub');
                  }}
                >
                  <Text style={[styles.opModeBtnText, opMode === 'sub' && styles.opModeBtnTextActive]}>
                    ➖ {isHindi ? 'घटाव लैब (Subtraction)' : 'Subtraction (-)'}
                  </Text>
                </TouchableOpacity>
              </View>

              {/* Object Type Selector */}
              <View style={styles.objectPickerRow}>
                <Text style={styles.objectPickerLabel}>
                  {isHindi ? 'वस्तु चुनें:' : 'Choose Item:'}
                </Text>
                {(['🍎', '⭐', '🍬', '⚽'] as const).map((em) => (
                  <TouchableOpacity
                    key={em}
                    style={[styles.objectPickerBtn, objectEmoji === em && styles.objectPickerBtnActive]}
                    onPress={() => {
                      triggerHaptic('light');
                      setObjectEmoji(em);
                    }}
                  >
                    <Text style={{ fontSize: 24 }}>{em}</Text>
                  </TouchableOpacity>
                ))}
              </View>

              {opMode === 'add' ? (
                /* Addition View */
                <View style={styles.beakerBox}>
                  {/* Big Live Equation Bar */}
                  <View style={styles.equationBar}>
                    <Text style={styles.equationText}>
                      {addLeft} + {addRight} = <Text style={{ color: '#059669', fontWeight: '900' }}>{addSum}</Text>
                    </Text>
                  </View>

                  {/* Left & Right Selector */}
                  <View style={styles.addSubControlsRow}>
                    <View style={styles.addSubCol}>
                      <Text style={styles.addSubColLabel}>{isHindi ? 'पहला समूह' : 'Group 1'}</Text>
                      <View style={styles.addSubStepperRow}>
                        <TouchableOpacity
                          style={styles.stepperBtn}
                          onPress={() => {
                            if (addLeft > 0) {
                              triggerHaptic('light');
                              setAddLeft(addLeft - 1);
                            }
                          }}
                        >
                          <Text style={styles.stepperBtnText}>−</Text>
                        </TouchableOpacity>
                        <Text style={styles.stepperValueText}>{addLeft}</Text>
                        <TouchableOpacity
                          style={styles.stepperBtn}
                          onPress={() => {
                            if (addLeft < 5) {
                              triggerHaptic('light');
                              setAddLeft(addLeft + 1);
                            }
                          }}
                        >
                          <Text style={styles.stepperBtnText}>+</Text>
                        </TouchableOpacity>
                      </View>
                    </View>

                    <Text style={styles.bigPlusSign}>➕</Text>

                    <View style={styles.addSubCol}>
                      <Text style={styles.addSubColLabel}>{isHindi ? 'दूसरा समूह' : 'Group 2'}</Text>
                      <View style={styles.addSubStepperRow}>
                        <TouchableOpacity
                          style={styles.stepperBtn}
                          onPress={() => {
                            if (addRight > 0) {
                              triggerHaptic('light');
                              setAddRight(addRight - 1);
                            }
                          }}
                        >
                          <Text style={styles.stepperBtnText}>−</Text>
                        </TouchableOpacity>
                        <Text style={styles.stepperValueText}>{addRight}</Text>
                        <TouchableOpacity
                          style={styles.stepperBtn}
                          onPress={() => {
                            if (addRight < 5) {
                              triggerHaptic('light');
                              setAddRight(addRight + 1);
                            }
                          }}
                        >
                          <Text style={styles.stepperBtnText}>+</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>

                  {/* Visual Bowl */}
                  <View style={styles.beakerBowl}>
                    <Text style={styles.bowlLabel}>
                      🥣 {isHindi ? 'कुल मिलकर कटोरे में:' : 'Combined in Bowl:'} ({addSum})
                    </Text>
                    <View style={styles.bowlItemsWrap}>
                      {Array.from({ length: addSum }).map((_, i) => (
                        <View key={`bowl_${i}`} style={styles.bowlItemBadge}>
                          <Text style={{ fontSize: 26 }}>{objectEmoji}</Text>
                          <Text style={styles.bowlItemNumber}>{i + 1}</Text>
                        </View>
                      ))}
                    </View>
                  </View>
                </View>
              ) : (
                /* Subtraction View */
                <View style={styles.beakerBox}>
                  {/* Big Live Equation Bar */}
                  <View style={styles.equationBar}>
                    <Text style={styles.equationText}>
                      {subTotal} − {subTakenAway} = <Text style={{ color: '#DC2626', fontWeight: '900' }}>{subDiff}</Text>
                    </Text>
                  </View>

                  <View style={styles.addSubControlsRow}>
                    <View style={styles.addSubCol}>
                      <Text style={styles.addSubColLabel}>{isHindi ? 'शुरुआत में कुल' : 'Start Total'}</Text>
                      <View style={styles.addSubStepperRow}>
                        <TouchableOpacity
                          style={styles.stepperBtn}
                          onPress={() => {
                            if (subTotal > 1) {
                              triggerHaptic('light');
                              const next = subTotal - 1;
                              setSubTotal(next);
                              if (subTakenAway > next) setSubTakenAway(next);
                            }
                          }}
                        >
                          <Text style={styles.stepperBtnText}>−</Text>
                        </TouchableOpacity>
                        <Text style={styles.stepperValueText}>{subTotal}</Text>
                        <TouchableOpacity
                          style={styles.stepperBtn}
                          onPress={() => {
                            if (subTotal < 10) {
                              triggerHaptic('light');
                              setSubTotal(subTotal + 1);
                            }
                          }}
                        >
                          <Text style={styles.stepperBtnText}>+</Text>
                        </TouchableOpacity>
                      </View>
                    </View>

                    <Text style={styles.bigPlusSign}>➖</Text>

                    <View style={styles.addSubCol}>
                      <Text style={styles.addSubColLabel}>{isHindi ? 'कितने हटाए?' : 'Take Away'}</Text>
                      <View style={styles.addSubStepperRow}>
                        <TouchableOpacity
                          style={styles.stepperBtn}
                          onPress={() => {
                            if (subTakenAway > 0) {
                              triggerHaptic('light');
                              setSubTakenAway(subTakenAway - 1);
                            }
                          }}
                        >
                          <Text style={styles.stepperBtnText}>−</Text>
                        </TouchableOpacity>
                        <Text style={styles.stepperValueText}>{subTakenAway}</Text>
                        <TouchableOpacity
                          style={styles.stepperBtn}
                          onPress={() => {
                            if (subTakenAway < subTotal) {
                              triggerHaptic('light');
                              setSubTakenAway(subTakenAway + 1);
                            }
                          }}
                        >
                          <Text style={styles.stepperBtnText}>+</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>

                  {/* Interactive Basket with Cross-out effect */}
                  <View style={styles.beakerBowl}>
                    <Text style={styles.bowlLabel}>
                      🧺 {isHindi ? 'किसी भी वस्तु पर टैप करके हटाएँ:' : 'Tap any item to take away:'}
                    </Text>
                    <View style={styles.bowlItemsWrap}>
                      {Array.from({ length: subTotal }).map((_, i) => {
                        const isCrossed = i >= subDiff;
                        return (
                          <TouchableOpacity
                            key={`sub_${i}`}
                            style={[styles.bowlItemBadge, isCrossed && styles.bowlItemBadgeCrossed]}
                            activeOpacity={0.8}
                            onPress={() => {
                              triggerHaptic('medium');
                              soundManager.playPop();
                              // if tapped item is before subDiff, make it the cutoff
                              if (i < subDiff) {
                                setSubTakenAway(subTotal - i);
                              } else {
                                setSubTakenAway(subTotal - (i + 1));
                              }
                            }}
                          >
                            <Text style={{ fontSize: 26, opacity: isCrossed ? 0.35 : 1 }}>
                              {objectEmoji}
                            </Text>
                            {isCrossed && <Text style={styles.crossOverlay}>❌</Text>}
                            <Text style={styles.bowlItemNumber}>{i + 1}</Text>
                          </TouchableOpacity>
                        );
                      })}
                    </View>
                    <Text style={styles.subResultHelp}>
                      {isHindi
                        ? `✅ बचे हुए: ${subDiff} • ❌ हटाए गए: ${subTakenAway}`
                        : `✅ Remaining: ${subDiff} • ❌ Crossed Out: ${subTakenAway}`}
                    </Text>
                  </View>
                </View>
              )}
            </View>
          )}

          {/* ================================================================= */}
          {/* STATION 3: INDIAN CURRENCY & PIGGY BANK                           */}
          {/* ================================================================= */}
          {station === 'coins' && (
            <View style={styles.stationCard}>
              <View style={styles.stationHeaderRow}>
                <View>
                  <Text style={styles.stationTitle}>
                    {isHindi ? '🪙 सिक्के व गुल्लक कैश काउंटर' : '🪙 Indian Coins & Piggy Bank Register'}
                  </Text>
                  <Text style={styles.stationSub}>
                    {isHindi
                      ? 'सिक्कों पर टैप करें और गुल्लक में जमा करें!'
                      : 'Tap coins to drop into the piggy bank!'}
                  </Text>
                </View>
              </View>

              {/* Target Mission Card */}
              <View style={[styles.missionCard, coinMissionSuccess && styles.missionCardSuccess]}>
                <View style={styles.missionTopRow}>
                  <Text style={styles.missionTitle}>
                    🎯 {isHindi ? `मिशन: गुल्लक में ₹${coinMissionTarget} जमा करें!` : `Mission: Put ₹${coinMissionTarget} in the bank!`}
                  </Text>
                  <TouchableOpacity style={styles.newMissionBtn} onPress={handleNewCoinMission}>
                    <Text style={styles.newMissionBtnText}>{isHindi ? 'नया लक्ष्य 🔄' : 'New Target 🔄'}</Text>
                  </TouchableOpacity>
                </View>

                {coinMissionSuccess ? (
                  <View style={styles.successBanner}>
                    <Text style={styles.successBannerText}>
                      🎉 {isHindi ? `कमाल कर दिया! पूरे ₹${coinMissionTarget} जमा हो गए!` : `Super! Exact ₹${coinMissionTarget} collected!`}
                    </Text>
                  </View>
                ) : (
                  <Text style={styles.missionHintText}>
                    {isHindi
                      ? `वर्तमान राशि: ₹${bankTotal} / ₹${coinMissionTarget} ${bankTotal > coinMissionTarget ? '(अधिक हो गए, खाली करें!)' : `(₹${coinMissionTarget - bankTotal} और चाहिए)`}`
                      : `Current Total: ₹${bankTotal} / Target: ₹${coinMissionTarget}`}
                  </Text>
                )}
              </View>

              {/* Big Piggy Bank Visual */}
              <View style={styles.piggyBankContainer}>
                <View style={styles.piggyBankGraphic}>
                  <Text style={{ fontSize: 64 }}>🐷</Text>
                  <View style={styles.piggyTotalBadge}>
                    <Text style={styles.piggyTotalText}>₹{bankTotal}</Text>
                  </View>
                </View>

                <View style={styles.piggyDetailsCol}>
                  <Text style={styles.piggyDetailsTitle}>
                    {isHindi ? 'गुल्लक के सिक्के:' : 'Coins in Bank:'}
                  </Text>
                  {bankCoins.length === 0 ? (
                    <Text style={styles.emptyBankText}>
                      {isHindi ? 'गुल्लक खाली है! नीचे से सिक्के डालें।' : 'Bank is empty! Tap coins below.'}
                    </Text>
                  ) : (
                    <View style={styles.bankCoinsFlowRow}>
                      {bankCoins.map((cVal, idx) => (
                        <View key={`bcoin_${idx}`} style={styles.bankCoinToken}>
                          <Text style={styles.bankCoinTokenText}>₹{cVal}</Text>
                        </View>
                      ))}
                    </View>
                  )}
                  {bankCoins.length > 0 && (
                    <TouchableOpacity style={styles.clearBankBtn} onPress={handleClearBank}>
                      <Text style={styles.clearBankBtnText}>
                        {isHindi ? 'गुल्लक खाली करें 🔄' : 'Empty Bank 🔄'}
                      </Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>

              {/* Coin Drawer */}
              <View style={styles.coinDrawer}>
                <Text style={styles.coinDrawerTitle}>
                  🪙 {isHindi ? 'सिक्का ट्रे (टैप करके डालें):' : 'Coin Tray (Tap to Drop):'}
                </Text>
                <View style={styles.coinsRow}>
                  {/* ₹1 Coin */}
                  <TouchableOpacity
                    style={[styles.coinBtn, styles.coinOne]}
                    activeOpacity={0.8}
                    onPress={() => handleDropCoin(1)}
                  >
                    <Text style={styles.coinSymbolText}>₹1</Text>
                    <Text style={styles.coinSubText}>{isHindi ? 'एक रुपया' : 'One Rupee'}</Text>
                  </TouchableOpacity>

                  {/* ₹2 Coin */}
                  <TouchableOpacity
                    style={[styles.coinBtn, styles.coinTwo]}
                    activeOpacity={0.8}
                    onPress={() => handleDropCoin(2)}
                  >
                    <Text style={styles.coinSymbolText}>₹2</Text>
                    <Text style={styles.coinSubText}>{isHindi ? 'दो रुपये' : 'Two Rupees'}</Text>
                  </TouchableOpacity>

                  {/* ₹5 Coin */}
                  <TouchableOpacity
                    style={[styles.coinBtn, styles.coinFive]}
                    activeOpacity={0.8}
                    onPress={() => handleDropCoin(5)}
                  >
                    <Text style={styles.coinSymbolText}>₹5</Text>
                    <Text style={styles.coinSubText}>{isHindi ? 'पाँच रुपये' : 'Five Rupees'}</Text>
                  </TouchableOpacity>

                  {/* ₹10 Coin */}
                  <TouchableOpacity
                    style={[styles.coinBtn, styles.coinTen]}
                    activeOpacity={0.8}
                    onPress={() => handleDropCoin(10)}
                  >
                    <Text style={styles.coinSymbolText}>₹10</Text>
                    <Text style={styles.coinSubText}>{isHindi ? 'दस रुपये' : 'Ten Rupees'}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}

          {/* ================================================================= */}
          {/* STATION 4: 2D & 3D GEOMETRY STUDIO                                */}
          {/* ================================================================= */}
          {station === 'geometry' && (
            <View style={styles.stationCard}>
              <View style={styles.stationHeaderRow}>
                <View>
                  <Text style={styles.stationTitle}>
                    {isHindi ? '🔷 आकृतियाँ व ठोस वस्तु लैब' : '🔷 2D & 3D Shape Laboratory'}
                  </Text>
                  <Text style={styles.stationSub}>
                    {isHindi
                      ? 'भुजाएँ, कोने और दैनिक जीवन में आकृतियों की पहचान'
                      : 'Sides, corners, faces and real-world solid objects'}
                  </Text>
                </View>
              </View>

              {/* 2D vs 3D Sub Tab Switcher */}
              <View style={styles.opModeSwitchRow}>
                <TouchableOpacity
                  style={[styles.opModeBtn, geoTab === '2D' && styles.opModeBtnActiveAdd]}
                  onPress={() => {
                    triggerHaptic('light');
                    setGeoTab('2D');
                  }}
                >
                  <Text style={[styles.opModeBtnText, geoTab === '2D' && styles.opModeBtnTextActive]}>
                    🔺 {isHindi ? '2D समतल आकृतियाँ' : '2D Flat Shapes'}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.opModeBtn, geoTab === '3D' && styles.opModeBtnActiveSub]}
                  onPress={() => {
                    triggerHaptic('light');
                    setGeoTab('3D');
                  }}
                >
                  <Text style={[styles.opModeBtnText, geoTab === '3D' && styles.opModeBtnTextActive]}>
                    🧊 {isHindi ? '3D ठोस वस्तुएँ' : '3D Solid Shapes'}
                  </Text>
                </TouchableOpacity>
              </View>

              {geoTab === '2D' ? (
                <View>
                  {/* 2D Shapes Selector */}
                  <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.shapesListScroll}>
                    {SHAPES_2D.map((s) => (
                      <TouchableOpacity
                        key={s.id}
                        style={[
                          styles.shapeSelectPill,
                          selected2DShape === s.id && styles.shapeSelectPillActive,
                        ]}
                        onPress={() => {
                          triggerHaptic('light');
                          soundManager.playPop();
                          setSelected2DShape(s.id);
                        }}
                      >
                        <Text style={{ fontSize: 24 }}>{s.icon}</Text>
                        <Text
                          style={[
                            styles.shapeSelectText,
                            selected2DShape === s.id && styles.shapeSelectTextActive,
                          ]}
                        >
                          {isHindi ? s.nameHi : s.nameEn}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </ScrollView>

                  {/* Active 2D Shape Display */}
                  <View style={styles.shapeDisplayCard}>
                    <Text style={{ fontSize: 72 }}>{active2DShapeObj.icon}</Text>
                    <Text style={styles.shapeNameBig}>
                      {isHindi ? active2DShapeObj.nameHi : active2DShapeObj.nameEn}
                    </Text>

                    <View style={styles.shapeStatsRow}>
                      <View style={styles.shapeStatBadge}>
                        <Text style={styles.shapeStatDigit}>{active2DShapeObj.sides}</Text>
                        <Text style={styles.shapeStatLabel}>{isHindi ? 'सीधी भुजाएँ' : 'Sides'}</Text>
                      </View>

                      <View style={styles.shapeStatBadge}>
                        <Text style={styles.shapeStatDigit}>{active2DShapeObj.corners}</Text>
                        <Text style={styles.shapeStatLabel}>{isHindi ? 'कोने' : 'Corners'}</Text>
                      </View>
                    </View>

                    <Text style={styles.shapeFactText}>
                      💡 {isHindi ? active2DShapeObj.descHi : active2DShapeObj.descEn}
                    </Text>

                    <View style={styles.realLifeBox}>
                      <Text style={styles.realLifeTitle}>
                        🌍 {isHindi ? 'असली दुनिया में उदाहरण:' : 'Everyday Real Life Examples:'}
                      </Text>
                      <Text style={styles.realLifeItemsText}>{active2DShapeObj.realExample}</Text>
                    </View>
                  </View>
                </View>
              ) : (
                <View>
                  {/* 3D Shapes Selector */}
                  <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.shapesListScroll}>
                    {SHAPES_3D.map((s) => (
                      <TouchableOpacity
                        key={s.id}
                        style={[
                          styles.shapeSelectPill,
                          selected3DShape === s.id && styles.shapeSelectPillActive,
                        ]}
                        onPress={() => {
                          triggerHaptic('light');
                          soundManager.playPop();
                          setSelected3DShape(s.id);
                        }}
                      >
                        <Text style={{ fontSize: 24 }}>{s.icon}</Text>
                        <Text
                          style={[
                            styles.shapeSelectText,
                            selected3DShape === s.id && styles.shapeSelectTextActive,
                          ]}
                        >
                          {isHindi ? s.nameHi : s.nameEn}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </ScrollView>

                  {/* Active 3D Shape Display */}
                  <View style={styles.shapeDisplayCard}>
                    <Text style={{ fontSize: 72 }}>{active3DShapeObj.icon}</Text>
                    <Text style={styles.shapeNameBig}>
                      {isHindi ? active3DShapeObj.nameHi : active3DShapeObj.nameEn}
                    </Text>

                    <View style={styles.shapeStatsRow}>
                      <View style={[styles.shapeStatBadge, { flex: 1 }]}>
                        <Text style={styles.shapeStatLabel}>{isHindi ? 'सतह (Faces)' : 'Faces'}</Text>
                        <Text style={[styles.shapeStatDigit, { fontSize: 15, fontWeight: '700' }]}>
                          {active3DShapeObj.faces}
                        </Text>
                      </View>
                    </View>

                    <Text style={styles.shapeFactText}>
                      💡 {isHindi ? active3DShapeObj.descHi : active3DShapeObj.descEn}
                    </Text>

                    <View style={styles.realLifeBox}>
                      <Text style={styles.realLifeTitle}>
                        🌍 {isHindi ? 'दैनिक जीवन में ठोस वस्तुएँ:' : 'Real-Life Everyday Solids:'}
                      </Text>
                      <Text style={styles.realLifeItemsText}>{active3DShapeObj.realExample}</Text>
                    </View>
                  </View>
                </View>
              )}
            </View>
          )}

          {/* ================================================================= */}
          {/* STATION 5: BALANCE BEAM                                           */}
          {/* ================================================================= */}
          {station === 'balance' && (
            <View style={styles.stationCard}>
              <View style={styles.stationHeaderRow}>
                <View>
                  <Text style={styles.stationTitle}>
                    {isHindi ? '⚖️ तराजू भार संतुलन लैब' : '⚖️ Balance Beam & Weight Laboratory'}
                  </Text>
                  <Text style={styles.stationSub}>
                    {isHindi
                      ? 'पलड़ों पर वजन रखें और तराजू को संतुलित करें!'
                      : 'Place weights on pans and balance the scale!'}
                  </Text>
                </View>
              </View>

              {/* Status Banner */}
              <View
                style={[
                  styles.balanceStatusCard,
                  weightDiff === 0 && styles.balanceStatusEqual,
                  weightDiff > 0 && styles.balanceStatusLeft,
                  weightDiff < 0 && styles.balanceStatusRight,
                ]}
              >
                <Text style={styles.balanceStatusText}>
                  {weightDiff === 0
                    ? isHindi
                      ? '⚖️ दोनों पलड़े बिल्कुल बराबर संतुलित हैं!'
                      : '⚖️ Perfectly Balanced!'
                    : weightDiff > 0
                    ? isHindi
                      ? `⬅️ बायाँ पलड़ा भारी है! (वजन: ${leftWeight} > ${rightWeight})`
                      : `⬅️ Left Pan is Heavier! (${leftWeight} > ${rightWeight})`
                    : isHindi
                    ? `➡️ दायाँ पलड़ा भारी है! (वजन: ${rightWeight} > ${leftWeight})`
                    : `➡️ Right Pan is Heavier! (${rightWeight} > ${leftWeight})`}
                </Text>
              </View>

              {/* Dynamic Animated Balance Beam */}
              <View style={styles.balanceStage}>
                {/* Central Fulcrum Stand */}
                <View style={styles.fulcrumStand}>
                  <Text style={{ fontSize: 32 }}>▲</Text>
                </View>

                {/* Tilting Beam */}
                <Animated.View
                  style={[
                    styles.tiltingBeamBar,
                    {
                      transform: [
                        {
                          rotate: tiltAnim.interpolate({
                            inputRange: [-15, 15],
                            outputRange: ['-15deg', '15deg'],
                          }),
                        },
                      ],
                    },
                  ]}
                >
                  <View style={styles.beamBeamLine} />

                  {/* Left Pan */}
                  <View style={styles.leftPanHanger}>
                    <View style={styles.panRopes} />
                    <View style={styles.panPlate}>
                      <Text style={styles.panWeightBadge}>{leftWeight}kg</Text>
                      <View style={styles.panItemsWrap}>
                        {leftPanItems.map((item) => (
                          <TouchableOpacity
                            key={item.id}
                            onPress={() => handleRemovePanItem('left', item.id)}
                          >
                            <Text style={{ fontSize: 26 }}>{item.emoji}</Text>
                          </TouchableOpacity>
                        ))}
                      </View>
                    </View>
                  </View>

                  {/* Right Pan */}
                  <View style={styles.rightPanHanger}>
                    <View style={styles.panRopes} />
                    <View style={styles.panPlate}>
                      <Text style={styles.panWeightBadge}>{rightWeight}kg</Text>
                      <View style={styles.panItemsWrap}>
                        {rightPanItems.map((item) => (
                          <TouchableOpacity
                            key={item.id}
                            onPress={() => handleRemovePanItem('right', item.id)}
                          >
                            <Text style={{ fontSize: 26 }}>{item.emoji}</Text>
                          </TouchableOpacity>
                        ))}
                      </View>
                    </View>
                  </View>
                </Animated.View>
              </View>

              {/* Add Items Controls */}
              <View style={styles.balanceControlsCard}>
                <View style={styles.balanceControlsHeader}>
                  <Text style={styles.balanceControlsTitle}>
                    {isHindi ? 'पलड़े में वस्तुएं जोड़ें (टैप करें):' : 'Add Weights to Pans:'}
                  </Text>
                  <TouchableOpacity style={styles.resetBalanceBtn} onPress={handleResetBalance}>
                    <Text style={styles.resetBalanceBtnText}>{isHindi ? 'खाली करें 🔄' : 'Reset 🔄'}</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.panAddRowsContainer}>
                  {/* Left Pan Add Column */}
                  <View style={styles.panAddColumn}>
                    <Text style={[styles.panAddColTitle, { color: '#2563EB' }]}>
                      ⬅️ {isHindi ? 'बायाँ पलड़ा' : 'Left Pan'}
                    </Text>
                    <View style={styles.panAddButtonsRow}>
                      <TouchableOpacity
                        style={styles.addWeightPill}
                        onPress={() => handleAddPanItem('left', '🍎', 1)}
                      >
                        <Text style={{ fontSize: 18 }}>🍎</Text>
                        <Text style={styles.addWeightPillText}>1kg</Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={styles.addWeightPill}
                        onPress={() => handleAddPanItem('left', '🐰', 2)}
                      >
                        <Text style={{ fontSize: 18 }}>🐰</Text>
                        <Text style={styles.addWeightPillText}>2kg</Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={styles.addWeightPill}
                        onPress={() => handleAddPanItem('left', '🐻', 4)}
                      >
                        <Text style={{ fontSize: 18 }}>🐻</Text>
                        <Text style={styles.addWeightPillText}>4kg</Text>
                      </TouchableOpacity>
                    </View>
                  </View>

                  {/* Right Pan Add Column */}
                  <View style={styles.panAddColumn}>
                    <Text style={[styles.panAddColTitle, { color: '#D97706' }]}>
                      ➡️ {isHindi ? 'दायाँ पलड़ा' : 'Right Pan'}
                    </Text>
                    <View style={styles.panAddButtonsRow}>
                      <TouchableOpacity
                        style={styles.addWeightPill}
                        onPress={() => handleAddPanItem('right', '🍎', 1)}
                      >
                        <Text style={{ fontSize: 18 }}>🍎</Text>
                        <Text style={styles.addWeightPillText}>1kg</Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={styles.addWeightPill}
                        onPress={() => handleAddPanItem('right', '🐰', 2)}
                      >
                        <Text style={{ fontSize: 18 }}>🐰</Text>
                        <Text style={styles.addWeightPillText}>2kg</Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={styles.addWeightPill}
                        onPress={() => handleAddPanItem('right', '🐻', 4)}
                      >
                        <Text style={{ fontSize: 18 }}>🐻</Text>
                        <Text style={styles.addWeightPillText}>4kg</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          )}
        </ScrollView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 48,
    paddingBottom: 14,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
    ...SHADOWS.small,
  },
  closeBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#F1F5F9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  closeText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#475569',
  },
  headerTitleCol: {
    flex: 1,
  },
  headerBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#EFF6FF',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
    marginBottom: 2,
  },
  headerBadgeText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#2563EB',
    letterSpacing: 0.5,
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: '800',
    color: '#0F172A',
  },
  stationTabsScrollContainer: {
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  stationTabsScroll: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    gap: 8,
  },
  stationPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F5F9',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  stationPillActive: {
    backgroundColor: '#2563EB',
    borderColor: '#1D4ED8',
  },
  stationPillEmoji: {
    fontSize: 16,
    marginRight: 6,
  },
  stationPillText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#475569',
  },
  stationPillTextActive: {
    color: '#FFFFFF',
  },
  contentScroll: {
    padding: 16,
    paddingBottom: 40,
  },
  stationCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    ...SHADOWS.medium,
  },
  stationHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 14,
  },
  stationTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#0F172A',
  },
  stationSub: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 2,
  },
  missionCard: {
    backgroundColor: '#EFF6FF',
    borderRadius: 14,
    padding: 12,
    borderWidth: 1,
    borderColor: '#BFDBFE',
    marginBottom: 14,
  },
  missionCardSuccess: {
    backgroundColor: '#ECFDF5',
    borderColor: '#A7F3D0',
  },
  missionTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  missionTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: '#1E40AF',
  },
  newMissionBtn: {
    backgroundColor: '#DBEAFE',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  newMissionBtnText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#1D4ED8',
  },
  missionHintText: {
    fontSize: 12,
    color: '#3B82F6',
    marginTop: 6,
  },
  successBanner: {
    backgroundColor: '#10B981',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 10,
    marginTop: 8,
  },
  successBannerText: {
    fontSize: 13,
    fontWeight: '800',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  breakdownCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    borderRadius: 14,
    padding: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 14,
  },
  bigNumberBadge: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#2563EB',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  bigNumberDigit: {
    fontSize: 26,
    fontWeight: '900',
    color: '#FFFFFF',
  },
  breakdownCol: {
    flex: 1,
  },
  breakdownEquation: {
    fontSize: 18,
    fontWeight: '800',
    color: '#0F172A',
  },
  breakdownLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#64748B',
    marginTop: 2,
  },
  frameContainer: {
    marginBottom: 14,
  },
  frameLabelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  frameLabelTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#334155',
  },
  frameLabelCount: {
    fontSize: 12,
    fontWeight: '700',
    color: '#2563EB',
  },
  tenFrameGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderWidth: 2,
    borderColor: '#CBD5E1',
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#F8FAFC',
  },
  tenFrameSlot: {
    width: '20%',
    aspectRatio: 1,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  tenFrameSlotFilled: {
    backgroundColor: '#EFF6FF',
  },
  tenFrameSlotFilledSecond: {
    backgroundColor: '#FEF9C3',
  },
  slotDot: {
    fontSize: 20,
  },
  slotIndexNumber: {
    position: 'absolute',
    bottom: 2,
    right: 4,
    fontSize: 9,
    fontWeight: '600',
    color: '#94A3B8',
  },
  quickButtonsRow: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 6,
  },
  quickBtn: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quickBtnText: {
    fontSize: 12,
    fontWeight: '800',
  },
  opModeSwitchRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 12,
  },
  opModeBtn: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 12,
    backgroundColor: '#F1F5F9',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  opModeBtnActiveAdd: {
    backgroundColor: '#059669',
    borderColor: '#047857',
  },
  opModeBtnActiveSub: {
    backgroundColor: '#DC2626',
    borderColor: '#B91C1C',
  },
  opModeBtnText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#475569',
  },
  opModeBtnTextActive: {
    color: '#FFFFFF',
  },
  objectPickerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 14,
    backgroundColor: '#F8FAFC',
    padding: 8,
    borderRadius: 12,
  },
  objectPickerLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: '#64748B',
    marginRight: 4,
  },
  objectPickerBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  objectPickerBtnActive: {
    backgroundColor: '#DBEAFE',
    borderColor: '#2563EB',
    borderWidth: 2,
  },
  beakerBox: {
    backgroundColor: '#F8FAFC',
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  equationBar: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  equationText: {
    fontSize: 24,
    fontWeight: '900',
    color: '#0F172A',
    letterSpacing: 1,
  },
  addSubControlsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 14,
  },
  addSubCol: {
    alignItems: 'center',
  },
  addSubColLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: '#64748B',
    marginBottom: 6,
  },
  addSubStepperRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#CBD5E1',
    padding: 4,
    gap: 12,
  },
  stepperBtn: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: '#F1F5F9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepperBtnText: {
    fontSize: 20,
    fontWeight: '800',
    color: '#0F172A',
  },
  stepperValueText: {
    fontSize: 18,
    fontWeight: '900',
    color: '#0F172A',
    minWidth: 20,
    textAlign: 'center',
  },
  bigPlusSign: {
    fontSize: 22,
  },
  beakerBowl: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 12,
    borderWidth: 1,
    borderColor: '#CBD5E1',
  },
  bowlLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: '#334155',
    marginBottom: 8,
  },
  bowlItemsWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    minHeight: 60,
    alignItems: 'center',
  },
  bowlItemBadge: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
  },
  bowlItemBadgeCrossed: {
    opacity: 0.6,
  },
  crossOverlay: {
    position: 'absolute',
    fontSize: 20,
  },
  bowlItemNumber: {
    fontSize: 10,
    fontWeight: '700',
    color: '#64748B',
  },
  subResultHelp: {
    fontSize: 12,
    fontWeight: '700',
    color: '#059669',
    marginTop: 10,
    textAlign: 'center',
  },
  piggyBankContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFBEB',
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
    borderColor: '#FDE68A',
    marginBottom: 14,
  },
  piggyBankGraphic: {
    alignItems: 'center',
    marginRight: 14,
  },
  piggyTotalBadge: {
    backgroundColor: '#D97706',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    marginTop: -8,
  },
  piggyTotalText: {
    fontSize: 16,
    fontWeight: '900',
    color: '#FFFFFF',
  },
  piggyDetailsCol: {
    flex: 1,
  },
  piggyDetailsTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#78350F',
    marginBottom: 4,
  },
  emptyBankText: {
    fontSize: 12,
    color: '#B45309',
    fontStyle: 'italic',
  },
  bankCoinsFlowRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginBottom: 6,
  },
  bankCoinToken: {
    backgroundColor: '#F59E0B',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  bankCoinTokenText: {
    fontSize: 11,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  clearBankBtn: {
    alignSelf: 'flex-start',
    backgroundColor: '#FDE68A',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
    marginTop: 4,
  },
  clearBankBtnText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#92400E',
  },
  coinDrawer: {
    backgroundColor: '#F8FAFC',
    borderRadius: 14,
    padding: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  coinDrawerTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#334155',
    marginBottom: 10,
  },
  coinsRow: {
    flexDirection: 'row',
    gap: 8,
  },
  coinBtn: {
    flex: 1,
    aspectRatio: 1,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    ...SHADOWS.small,
  },
  coinOne: {
    backgroundColor: '#F1F5F9',
    borderColor: '#CBD5E1',
  },
  coinTwo: {
    backgroundColor: '#E2E8F0',
    borderColor: '#94A3B8',
  },
  coinFive: {
    backgroundColor: '#FEF3C7',
    borderColor: '#F59E0B',
  },
  coinTen: {
    backgroundColor: '#FEF9C3',
    borderColor: '#D97706',
  },
  coinSymbolText: {
    fontSize: 20,
    fontWeight: '900',
    color: '#0F172A',
  },
  coinSubText: {
    fontSize: 8,
    fontWeight: '700',
    color: '#475569',
    marginTop: 2,
  },
  shapesListScroll: {
    marginBottom: 12,
  },
  shapeSelectPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F5F9',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginRight: 8,
    gap: 6,
  },
  shapeSelectPillActive: {
    backgroundColor: '#7C3AED',
    borderColor: '#6D28D9',
  },
  shapeSelectText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#475569',
  },
  shapeSelectTextActive: {
    color: '#FFFFFF',
  },
  shapeDisplayCard: {
    backgroundColor: '#FAF5FF',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E9D5FF',
  },
  shapeNameBig: {
    fontSize: 22,
    fontWeight: '900',
    color: '#581C87',
    marginTop: 8,
  },
  shapeStatsRow: {
    flexDirection: 'row',
    gap: 12,
    marginVertical: 12,
    width: '100%',
  },
  shapeStatBadge: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E9D5FF',
  },
  shapeStatDigit: {
    fontSize: 22,
    fontWeight: '900',
    color: '#7C3AED',
  },
  shapeStatLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: '#6B21A8',
  },
  shapeFactText: {
    fontSize: 13,
    color: '#4A044E',
    textAlign: 'center',
    lineHeight: 18,
    marginBottom: 12,
  },
  realLifeBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 10,
    width: '100%',
    borderWidth: 1,
    borderColor: '#E9D5FF',
  },
  realLifeTitle: {
    fontSize: 11,
    fontWeight: '800',
    color: '#6B21A8',
    marginBottom: 4,
  },
  realLifeItemsText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#3B0764',
  },
  balanceStatusCard: {
    borderRadius: 12,
    padding: 10,
    marginBottom: 14,
    alignItems: 'center',
  },
  balanceStatusEqual: {
    backgroundColor: '#ECFDF5',
    borderWidth: 1,
    borderColor: '#A7F3D0',
  },
  balanceStatusLeft: {
    backgroundColor: '#EFF6FF',
    borderWidth: 1,
    borderColor: '#BFDBFE',
  },
  balanceStatusRight: {
    backgroundColor: '#FFFBEB',
    borderWidth: 1,
    borderColor: '#FDE68A',
  },
  balanceStatusText: {
    fontSize: 13,
    fontWeight: '800',
    color: '#0F172A',
  },
  balanceStage: {
    height: 180,
    backgroundColor: '#F8FAFC',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    marginBottom: 14,
  },
  fulcrumStand: {
    position: 'absolute',
    bottom: 25,
    alignItems: 'center',
  },
  tiltingBeamBar: {
    width: width - 80,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  beamBeamLine: {
    width: '90%',
    height: 8,
    backgroundColor: '#475569',
    borderRadius: 4,
  },
  leftPanHanger: {
    position: 'absolute',
    left: 10,
    top: 60,
    alignItems: 'center',
  },
  rightPanHanger: {
    position: 'absolute',
    right: 10,
    top: 60,
    alignItems: 'center',
  },
  panRopes: {
    width: 2,
    height: 25,
    backgroundColor: '#94A3B8',
  },
  panPlate: {
    width: 80,
    minHeight: 50,
    backgroundColor: '#E2E8F0',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#94A3B8',
    alignItems: 'center',
    padding: 4,
  },
  panWeightBadge: {
    fontSize: 10,
    fontWeight: '800',
    color: '#1E293B',
    marginBottom: 2,
  },
  panItemsWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 2,
  },
  balanceControlsCard: {
    backgroundColor: '#F8FAFC',
    borderRadius: 14,
    padding: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  balanceControlsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  balanceControlsTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#334155',
  },
  resetBalanceBtn: {
    backgroundColor: '#E2E8F0',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
  },
  resetBalanceBtnText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#475569',
  },
  panAddRowsContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  panAddColumn: {
    flex: 1,
  },
  panAddColTitle: {
    fontSize: 12,
    fontWeight: '800',
    marginBottom: 6,
  },
  panAddButtonsRow: {
    flexDirection: 'row',
    gap: 6,
  },
  addWeightPill: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingVertical: 6,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#CBD5E1',
  },
  addWeightPillText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#334155',
    marginTop: 2,
  },
});
