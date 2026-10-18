import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  Animated,
  Dimensions,
} from 'react-native';
import { COLORS, SPACING, BORDER_RADIUS, SHADOWS } from '../../constants/theme';
import { triggerHaptic } from '../../utils/haptics';
import { soundManager } from '../../utils/soundManager';
import { useUserStore } from '../../store/useUserStore';
import { Grade } from '../../types';

interface MemoryMatchModalProps {
  visible: boolean;
  onClose: () => void;
  grade: Grade;
}

interface CardItem {
  id: string; // Unique card instance ID (e.g. 'c1', 'c2')
  pairKey: string; // Key connecting matching pair
  display: string; // Emoji or text shown on card face
  isFlipped: boolean;
  isMatched: boolean;
}

const getPairDataForGrade = (grade: Grade): Array<{ key: string; itemA: string; itemB: string }> => {
  const isKG = grade === 'LKG' || grade === 'UKG';
  const isPrimary = grade === 1 || grade === 2;

  if (isKG) {
    return [
      { key: 'p1', itemA: '🦁', itemB: '🦁' },
      { key: 'p2', itemA: '🐘', itemB: '🐘' },
      { key: 'p3', itemA: '🍎', itemB: '🍎' },
      { key: 'p4', itemA: '🚀', itemB: '🚀' },
      { key: 'p5', itemA: '⭐', itemB: '⭐' },
      { key: 'p6', itemA: '🎈', itemB: '🎈' },
    ];
  }

  if (isPrimary) {
    return [
      { key: 'p1', itemA: '3 + 4', itemB: '7' },
      { key: 'p2', itemA: '10 - 2', itemB: '8' },
      { key: 'p3', itemA: '5 + 5', itemB: '10' },
      { key: 'p4', itemA: 'Cat', itemB: 'Kitten' },
      { key: 'p5', itemA: 'Day', itemB: 'Night' },
      { key: 'p6', itemA: 'Hot', itemB: 'Cold' },
    ];
  }

  // Class 3-6
  return [
    { key: 'p1', itemA: '6 × 7', itemB: '42' },
    { key: 'p2', itemA: '9 × 8', itemB: '72' },
    { key: 'p3', itemA: '8 × 4', itemB: '32' },
    { key: 'p4', itemA: 'Tiny', itemB: 'Small' },
    { key: 'p5', itemA: 'Huge', itemB: 'Giant' },
    { key: 'p6', itemA: 'Brave', itemB: 'Hero' },
  ];
};

export const MemoryMatchModal: React.FC<MemoryMatchModalProps> = ({
  visible,
  onClose,
  grade,
}) => {
  const { addReward } = useUserStore();
  const [cards, setCards] = useState<CardItem[]>([]);
  const [flippedCards, setFlippedCards] = useState<CardItem[]>([]);
  const [moves, setMoves] = useState(0);
  const [matchedPairsCount, setMatchedPairsCount] = useState(0);
  const [isWon, setIsWon] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  // Initialize cards
  useEffect(() => {
    if (!visible) return;

    const rawPairs = getPairDataForGrade(grade);
    const cardList: CardItem[] = [];

    rawPairs.forEach((pair, idx) => {
      cardList.push({
        id: `card_${idx}_A`,
        pairKey: pair.key,
        display: pair.itemA,
        isFlipped: false,
        isMatched: false,
      });
      cardList.push({
        id: `card_${idx}_B`,
        pairKey: pair.key,
        display: pair.itemB,
        isFlipped: false,
        isMatched: false,
      });
    });

    // Shuffle randomly
    cardList.sort(() => 0.5 - Math.random());

    setCards(cardList);
    setFlippedCards([]);
    setMoves(0);
    setMatchedPairsCount(0);
    setIsWon(false);
    setIsProcessing(false);
  }, [visible, grade]);

  const handleCardPress = (card: CardItem) => {
    if (isProcessing || card.isFlipped || card.isMatched) return;

    soundManager.playPop();
    triggerHaptic('light');

    const updated = cards.map((c) =>
      c.id === card.id ? { ...c, isFlipped: true } : c
    );
    setCards(updated);

    const newFlipped = [...flippedCards, card];
    setFlippedCards(newFlipped);

    if (newFlipped.length === 2) {
      setMoves((m) => m + 1);
      setIsProcessing(true);

      const [first, second] = newFlipped;
      if (first.pairKey === second.pairKey) {
        // MATCH FOUND!
        setTimeout(() => {
          soundManager.playCorrect();
          triggerHaptic('success');

          setCards((prev) =>
            prev.map((c) =>
              c.pairKey === first.pairKey ? { ...c, isMatched: true } : c
            )
          );
          setFlippedCards([]);
          setIsProcessing(false);

          const newMatchCount = matchedPairsCount + 1;
          setMatchedPairsCount(newMatchCount);

          if (newMatchCount === 6) {
            // ALL 6 PAIRS MATCHED!
            setTimeout(() => {
              setIsWon(true);
              soundManager.playFanfare();
            }, 400);
          }
        }, 300);
      } else {
        // NO MATCH: flip back after short pause
        setTimeout(() => {
          triggerHaptic('warning');
          setCards((prev) =>
            prev.map((c) =>
              c.id === first.id || c.id === second.id
                ? { ...c, isFlipped: false }
                : c
            )
          );
          setFlippedCards([]);
          setIsProcessing(false);
        }, 800);
      }
    }
  };

  const handleCollectAndClose = async () => {
    const starRating = moves <= 9 ? 3 : moves <= 14 ? 2 : 1;
    const starsReward = starRating === 3 ? 25 : starRating === 2 ? 15 : 10;
    const xpReward = starRating * 30;

    await addReward({ stars: starsReward, xp: xpReward });
    triggerHaptic('success');
    onClose();
  };

  const starRating = moves <= 9 ? 3 : moves <= 14 ? 2 : 1;

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.gameCard}>
          {/* Header Bar */}
          <View style={styles.hudBar}>
            <View style={styles.hudStatBox}>
              <Text style={styles.hudEmoji}>🧠</Text>
              <Text style={styles.hudValue}>{moves} Moves</Text>
            </View>

            <View style={styles.hudStatBox}>
              <Text style={styles.hudEmoji}>✨</Text>
              <Text style={styles.hudValue}>{matchedPairsCount} / 6 Pairs</Text>
            </View>

            <TouchableOpacity onPress={onClose} style={styles.hudCloseBtn} activeOpacity={0.7}>
              <Text style={styles.hudCloseText}>✕</Text>
            </TouchableOpacity>
          </View>

          {/* Title Banner */}
          <View style={styles.titleBanner}>
            <Text style={styles.titleText}>🃏 Mind Match 3D</Text>
            <Text style={styles.titleSub}>Find all 6 matching memory pairs!</Text>
          </View>

          {/* Cards 4x3 Grid */}
          <View style={styles.gridContainer}>
            {cards.map((card) => {
              const showFace = card.isFlipped || card.isMatched;

              return (
                <TouchableOpacity
                  key={card.id}
                  style={[
                    styles.cardWrapper,
                    showFace && styles.cardWrapperFace,
                    card.isMatched && styles.cardWrapperMatched,
                  ]}
                  onPress={() => handleCardPress(card)}
                  activeOpacity={0.8}
                  disabled={showFace || isProcessing}
                >
                  {showFace ? (
                    <View style={styles.cardFace}>
                      <Text
                        style={[
                          styles.cardText,
                          card.display.length > 3 && styles.cardTextSmall,
                        ]}
                      >
                        {card.display}
                      </Text>
                      {card.isMatched && <Text style={styles.checkBadge}>✓</Text>}
                    </View>
                  ) : (
                    <View style={styles.cardBack}>
                      <Text style={styles.cardBackIcon}>⭐</Text>
                    </View>
                  )}
                </TouchableOpacity>
              );
            })}
          </View>

          <Text style={styles.tipText}>
            💡 Tip: Remember card positions to solve in fewer moves!
          </Text>
        </View>

        {/* Win Modal */}
        {isWon && (
          <View style={styles.winOverlay}>
            <View style={styles.winCard}>
              <Text style={styles.winHeader}>🎉 PUZZLE SOLVED! 🎉</Text>
              <View style={styles.starsRow}>
                <Text style={styles.starBig}>{starRating >= 1 ? '⭐' : '☆'}</Text>
                <Text style={[styles.starBig, { transform: [{ scale: 1.2 }] }]}>
                  {starRating >= 2 ? '⭐' : '☆'}
                </Text>
                <Text style={styles.starBig}>{starRating >= 3 ? '⭐' : '☆'}</Text>
              </View>

              <Text style={styles.winMovesText}>Finished in {moves} moves!</Text>
              <Text style={styles.winSub}>
                {starRating === 3
                  ? 'Grand Champion! Photographic Memory! 🏆'
                  : 'Well done! Your memory is getting sharper every day.'}
              </Text>

              {/* Rewards */}
              <View style={styles.lootRow}>
                <View style={styles.lootPill}>
                  <Text style={styles.lootPillText}>
                    ⭐ +{starRating === 3 ? 25 : starRating === 2 ? 15 : 10} Stars
                  </Text>
                </View>
                <View style={styles.lootPill}>
                  <Text style={styles.lootPillText}>⚡ +{starRating * 30} XP</Text>
                </View>
              </View>

              <TouchableOpacity
                style={styles.claimBtn}
                onPress={handleCollectAndClose}
                activeOpacity={0.85}
              >
                <Text style={styles.claimBtnText}>COLLECT REWARD 🌟</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(15, 23, 42, 0.85)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING.md,
  },
  gameCard: {
    width: '100%',
    maxWidth: 390,
    backgroundColor: '#312E81', // Rich indigo
    borderRadius: BORDER_RADIUS.xl,
    padding: SPACING.md,
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#6366F1',
    ...SHADOWS.large,
  },
  hudBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: SPACING.xs,
  },
  hudStatBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: BORDER_RADIUS.round,
    gap: 6,
  },
  hudEmoji: {
    fontSize: 16,
  },
  hudValue: {
    fontSize: 14,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  hudCloseBtn: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hudCloseText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  titleBanner: {
    alignItems: 'center',
    marginBottom: SPACING.sm,
  },
  titleText: {
    fontSize: 20,
    fontWeight: '900',
    color: '#FDE047',
    letterSpacing: 0.5,
  },
  titleSub: {
    fontSize: 12,
    color: '#C7D2FE',
    marginTop: 2,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 4,
    gap: 8,
  },
  cardWrapper: {
    width: '30%',
    height: 75,
    borderRadius: BORDER_RADIUS.md,
    backgroundColor: '#4338CA',
    borderWidth: 2,
    borderColor: '#818CF8',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4,
  },
  cardWrapperFace: {
    backgroundColor: '#FFFFFF',
    borderColor: '#F59E0B',
  },
  cardWrapperMatched: {
    backgroundColor: '#ECFDF5',
    borderColor: '#10B981',
    borderWidth: 2.5,
  },
  cardBack: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardBackIcon: {
    fontSize: 24,
  },
  cardFace: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
  },
  cardText: {
    fontSize: 24,
    fontWeight: '900',
    color: '#1E1B4B',
    textAlign: 'center',
  },
  cardTextSmall: {
    fontSize: 14,
  },
  checkBadge: {
    position: 'absolute',
    top: 2,
    right: 4,
    fontSize: 12,
    fontWeight: '900',
    color: '#10B981',
  },
  tipText: {
    fontSize: 11,
    color: '#A5B4FC',
    marginTop: SPACING.md,
    textAlign: 'center',
  },
  winOverlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING.lg,
    zIndex: 100,
  },
  winCard: {
    width: '100%',
    maxWidth: 340,
    backgroundColor: '#1E293B',
    borderRadius: BORDER_RADIUS.xl,
    padding: SPACING.xl,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#F59E0B',
    ...SHADOWS.large,
  },
  winHeader: {
    fontSize: 20,
    fontWeight: '900',
    color: '#FDE047',
    letterSpacing: 1,
    marginBottom: SPACING.md,
  },
  starsRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: SPACING.md,
  },
  starBig: {
    fontSize: 38,
  },
  winMovesText: {
    fontSize: 22,
    fontWeight: '900',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  winSub: {
    fontSize: 13,
    color: '#94A3B8',
    textAlign: 'center',
    marginBottom: SPACING.lg,
    lineHeight: 18,
  },
  lootRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: SPACING.lg,
  },
  lootPill: {
    backgroundColor: '#0F172A',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: BORDER_RADIUS.round,
    borderWidth: 1,
    borderColor: '#38BDF8',
  },
  lootPillText: {
    color: '#38BDF8',
    fontSize: 14,
    fontWeight: '800',
  },
  claimBtn: {
    width: '100%',
    backgroundColor: '#F59E0B',
    paddingVertical: 14,
    borderRadius: BORDER_RADIUS.lg,
    alignItems: 'center',
    borderBottomWidth: 4,
    borderBottomColor: '#B45309',
  },
  claimBtnText: {
    color: '#78350F',
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
});
