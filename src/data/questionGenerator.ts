import { Question, Grade, Subject, QuestionType } from '../types';
import { MOCK_QUESTIONS } from './mockQuestions';

// Utility helper to shuffle any array
function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Random integer between min and max inclusive
function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Random item from array
function randomChoice<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

// ============================================================================
// DYNAMIC INFINITE QUESTION GENERATOR (MATHS, ENGLISH GRAMMAR & HINDI VYAKARAN)
// Generates unlimited randomized supporting practice questions for Class 1 to 6
// ============================================================================

// ----------------------------------------------------------------------------
// 1. DYNAMIC MATHEMATICS GENERATOR (Class 1 to 6)
// ----------------------------------------------------------------------------
export function generateDynamicMathQuestion(grade: Grade, chapterTitle?: string): Question {
  const qId = `dyn_math_${grade}_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  const ch = chapterTitle || `Mathematics Practice (Class ${grade})`;

  // LKG MATHEMATICS (FOUNDATIONAL & GAMIFIED)
  if (grade === 'LKG') {
    const type = randomChoice(['count5', 'big_small', 'shapes', 'colors']);
    if (type === 'count5') {
      const num = randomInt(1, 5);
      const emoji = randomChoice(['🍎', '⭐', '🎈', '🐱', '⚽']);
      const emojis = Array(num).fill(emoji).join(' ');
      return {
        id: qId,
        grade: 'LKG',
        subject: 'maths',
        chapter: ch,
        concept: 'Counting up to 5',
        difficulty: 'easy',
        type: 'mcq',
        question: `How many ${emoji} can you see?\n${emojis}`,
        visualEmoji: '🖐️ 🔢',
        payload: {
          options: shuffleArray([
            { id: 'opt_1', text: `${num} ${emoji}`, isCorrect: true },
            { id: 'opt_2', text: `${num === 5 ? 3 : num + 1} ${emoji}`, isCorrect: false },
            { id: 'opt_3', text: `${num === 1 ? 4 : num - 1} ${emoji}`, isCorrect: false },
          ]),
        },
        explanation: `💡 Let's count together: ${emojis} = ${num}! Great job! 🎉`,
        points: 10,
      };
    } else if (type === 'big_small') {
      return {
        id: qId,
        grade: 'LKG',
        subject: 'maths',
        chapter: ch,
        concept: 'Big vs Small',
        difficulty: 'easy',
        type: 'mcq',
        question: 'Which one is BIG?',
        visualEmoji: '🐘 🐭',
        payload: {
          options: shuffleArray([
            { id: 'opt_1', text: '🐘 Big Elephant', isCorrect: true },
            { id: 'opt_2', text: '🐭 Small Mouse', isCorrect: false },
          ]),
        },
        explanation: '💡 An Elephant 🐘 is huge and big! A Mouse 🐭 is small.',
        points: 10,
      };
    } else if (type === 'shapes') {
      const shape = randomChoice([
        { q: 'Which shape is a ROUND CIRCLE? ⭕', correct: '⭕ Circle', wrong: '⬛ Square' },
        { q: 'Which shape has 3 corners like a samosa? 🔺', correct: '🔺 Triangle', wrong: '⭕ Circle' },
        { q: 'Which shape has 4 equal sides? ⬛', correct: '⬛ Square', wrong: '⭕ Circle' },
      ]);
      return {
        id: qId,
        grade: 'LKG',
        subject: 'maths',
        chapter: ch,
        concept: 'Basic Shapes',
        difficulty: 'easy',
        type: 'mcq',
        question: shape.q,
        visualEmoji: '🔺 ⭕',
        payload: {
          options: shuffleArray([
            { id: 'opt_1', text: shape.correct, isCorrect: true },
            { id: 'opt_2', text: shape.wrong, isCorrect: false },
          ]),
        },
        explanation: `💡 ${shape.correct} is the right shape! Super star! ⭐`,
        points: 10,
      };
    } else {
      const color = randomChoice([
        { q: 'Which one is RED? 🔴', correct: '🍎 Red Apple', wrong: '🍌 Yellow Banana' },
        { q: 'Which one is YELLOW? 🟡', correct: '🌻 Yellow Sunflower', wrong: '🫐 Blue Berry' },
        { q: 'Which one is GREEN? 🟢', correct: '🍃 Green Leaf', wrong: '🍓 Red Strawberry' },
      ]);
      return {
        id: qId,
        grade: 'LKG',
        subject: 'maths',
        chapter: ch,
        concept: 'Colors Recognition',
        difficulty: 'easy',
        type: 'mcq',
        question: color.q,
        visualEmoji: '🎨 ✨',
        payload: {
          options: shuffleArray([
            { id: 'opt_1', text: color.correct, isCorrect: true },
            { id: 'opt_2', text: color.wrong, isCorrect: false },
          ]),
        },
        explanation: `💡 Yes! ${color.correct}! You know your colors so well! 🎨`,
        points: 10,
      };
    }
  }

  // UKG MATHEMATICS (KINDERGARTEN COUNTING & VISUAL ADDITION)
  if (grade === 'UKG') {
    const type = randomChoice(['count10', 'add_pic', 'after_before']);
    if (type === 'count10') {
      const num = randomInt(5, 10);
      const emoji = randomChoice(['⭐', '🎈', '🧁', '🚗']);
      const emojis = Array(num).fill(emoji).join(' ');
      return {
        id: qId,
        grade: 'UKG',
        subject: 'maths',
        chapter: ch,
        concept: 'Numbers 1 to 10',
        difficulty: 'easy',
        type: 'mcq',
        question: `Count the ${emoji}:\n${emojis}`,
        visualEmoji: '🔟 🔢',
        payload: {
          options: shuffleArray([
            { id: 'opt_1', text: `${num}`, isCorrect: true },
            { id: 'opt_2', text: `${num + 1}`, isCorrect: false },
            { id: 'opt_3', text: `${num - 1}`, isCorrect: false },
          ]),
        },
        explanation: `💡 There are ${num} ${emoji}! Great counting! 🌟`,
        points: 10,
      };
    } else if (type === 'add_pic') {
      const a = randomInt(1, 4);
      const b = randomInt(1, 4);
      const ans = a + b;
      const emoji = randomChoice(['🍎', '⭐', '🎈']);
      const aEmojis = Array(a).fill(emoji).join(' ');
      const bEmojis = Array(b).fill(emoji).join(' ');
      return {
        id: qId,
        grade: 'UKG',
        subject: 'maths',
        chapter: ch,
        concept: 'Picture Addition',
        difficulty: 'medium',
        type: 'mcq',
        question: `How many in all?\n${aEmojis} + ${bEmojis} = ?`,
        visualEmoji: '➕ 🌟',
        payload: {
          options: shuffleArray([
            { id: 'opt_1', text: `${ans} ${emoji}`, isCorrect: true },
            { id: 'opt_2', text: `${ans + 1} ${emoji}`, isCorrect: false },
            { id: 'opt_3', text: `${ans - 1} ${emoji}`, isCorrect: false },
          ]),
        },
        explanation: `💡 ${a} and ${b} more make ${ans}! Terrific math! 🚀`,
        points: 15,
      };
    } else {
      const n = randomInt(2, 9);
      return {
        id: qId,
        grade: 'UKG',
        subject: 'maths',
        chapter: ch,
        concept: 'After Numbers',
        difficulty: 'easy',
        type: 'mcq',
        question: `What number comes AFTER ${n}?`,
        visualEmoji: '⏭️ 🔢',
        payload: {
          options: shuffleArray([
            { id: 'opt_1', text: `${n + 1}`, isCorrect: true },
            { id: 'opt_2', text: `${n - 1}`, isCorrect: false },
            { id: 'opt_3', text: `${n + 2}`, isCorrect: false },
          ]),
        },
        explanation: `💡 Counting forward: ${n}, then comes ${n + 1}!`,
        points: 10,
      };
    }
  }

  // CLASS 1 MATHEMATICS
  if (grade === 1) {
    const type = randomChoice(['add', 'sub', 'compare', 'count']);
    if (type === 'add') {
      const a = randomInt(1, 9);
      const b = randomInt(1, 10 - a);
      const ans = a + b;
      const wrong1 = ans + 1;
      const wrong2 = Math.max(1, ans - 1);
      const wrong3 = ans + 2;
      return {
        id: qId,
        grade: 1,
        subject: 'maths',
        chapter: ch,
        concept: 'Addition within 10',
        difficulty: 'easy',
        type: 'mcq',
        question: `What is ${a} + ${b}?`,
        visualEmoji: '➕ 🔢',
        payload: {
          options: shuffleArray([
            { id: 'opt_1', text: `${ans}`, isCorrect: true },
            { id: 'opt_2', text: `${wrong1}`, isCorrect: false },
            { id: 'opt_3', text: `${wrong2}`, isCorrect: false },
            { id: 'opt_4', text: `${wrong3}`, isCorrect: false },
          ]),
        },
        explanation: `💡 ${a} + ${b} = ${ans}! Count forward from ${a} by ${b} steps.`,
        points: 10,
      };
    } else if (type === 'sub') {
      const a = randomInt(3, 10);
      const b = randomInt(1, a - 1);
      const ans = a - b;
      return {
        id: qId,
        grade: 1,
        subject: 'maths',
        chapter: ch,
        concept: 'Subtraction within 10',
        difficulty: 'easy',
        type: 'mcq',
        question: `Rohan had ${a} balloons. ${b} balloons burst. How many balloons are left? (${a} - ${b} = ?)`,
        visualEmoji: '🎈 💥',
        payload: {
          options: shuffleArray([
            { id: 'opt_1', text: `${ans} balloons`, isCorrect: true },
            { id: 'opt_2', text: `${ans + 1} balloons`, isCorrect: false },
            { id: 'opt_3', text: `${Math.max(1, ans - 1)} balloons`, isCorrect: false },
          ]),
        },
        explanation: `💡 ${a} minus ${b} leaves ${ans} balloons!`,
        points: 10,
      };
    } else {
      const a = randomInt(1, 15);
      const b = randomInt(1, 15);
      const bigger = Math.max(a, b);
      const smaller = Math.min(a, b);
      return {
        id: qId,
        grade: 1,
        subject: 'maths',
        chapter: ch,
        concept: 'Comparing Numbers',
        difficulty: 'easy',
        type: 'mcq',
        question: `Which number is BIGGER between ${a} and ${b}?`,
        visualEmoji: '⚖️ 🔢',
        payload: {
          options: shuffleArray([
            { id: 'opt_1', text: `${bigger}`, isCorrect: true },
            { id: 'opt_2', text: `${smaller}`, isCorrect: false },
          ]),
        },
        explanation: `💡 ${bigger} is greater than ${smaller}!`,
        points: 10,
      };
    }
  }

  // CLASS 2 MATHEMATICS
  if (grade === 2) {
    const type = randomChoice(['add2', 'sub2', 'tens_ones', 'skip_count', 'pairs']);
    if (type === 'add2') {
      const a = randomInt(15, 55);
      const b = randomInt(10, 40);
      const ans = a + b;
      return {
        id: qId,
        grade: 2,
        subject: 'maths',
        chapter: ch,
        concept: '2-Digit Addition',
        difficulty: 'medium',
        type: 'mcq',
        question: `Solve the addition: ${a} + ${b} = ?`,
        visualEmoji: '➕ 🔢',
        payload: {
          options: shuffleArray([
            { id: 'opt_1', text: `${ans}`, isCorrect: true },
            { id: 'opt_2', text: `${ans + 10}`, isCorrect: false },
            { id: 'opt_3', text: `${ans - 1}`, isCorrect: false },
            { id: 'opt_4', text: `${ans + 2}`, isCorrect: false },
          ]),
        },
        explanation: `💡 Add ones and tens: ${a} + ${b} = ${ans}!`,
        points: 10,
      };
    } else if (type === 'sub2') {
      const a = randomInt(40, 95);
      const b = randomInt(11, a - 10);
      const ans = a - b;
      return {
        id: qId,
        grade: 2,
        subject: 'maths',
        chapter: ch,
        concept: '2-Digit Subtraction',
        difficulty: 'medium',
        type: 'mcq',
        question: `Calculate: ${a} - ${b} = ?`,
        visualEmoji: '➖ 🔢',
        payload: {
          options: shuffleArray([
            { id: 'opt_1', text: `${ans}`, isCorrect: true },
            { id: 'opt_2', text: `${ans + 10}`, isCorrect: false },
            { id: 'opt_3', text: `${ans - 2}`, isCorrect: false },
            { id: 'opt_4', text: `${ans + 5}`, isCorrect: false },
          ]),
        },
        explanation: `💡 Subtract ones and tens: ${a} - ${b} = ${ans}!`,
        points: 10,
      };
    } else if (type === 'tens_ones') {
      const t = randomInt(2, 9);
      const o = randomInt(1, 9);
      const ans = t * 10 + o;
      return {
        id: qId,
        grade: 2,
        subject: 'maths',
        chapter: ch,
        concept: 'Tens and Ones Place Value',
        difficulty: 'easy',
        type: 'mcq',
        question: `What number is formed by ${t} Tens and ${o} Ones?`,
        visualEmoji: '📦 🔢',
        payload: {
          options: shuffleArray([
            { id: 'opt_1', text: `${ans}`, isCorrect: true },
            { id: 'opt_2', text: `${o}${t}`, isCorrect: false },
            { id: 'opt_3', text: `${t + o}`, isCorrect: false },
            { id: 'opt_4', text: `${t}0${o}`, isCorrect: false },
          ]),
        },
        explanation: `💡 ${t} Tens = ${t * 10}, and ${o} Ones = ${o}. ${t * 10} + ${o} = ${ans}!`,
        points: 10,
      };
    } else {
      const pairs = randomInt(3, 9);
      const total = pairs * 2;
      return {
        id: qId,
        grade: 2,
        subject: 'maths',
        chapter: ch,
        concept: 'Counting in Pairs',
        difficulty: 'easy',
        type: 'mcq',
        question: `If there are ${pairs} pairs of shoes, how many individual shoes are there in total?`,
        visualEmoji: '👟👟 🔢',
        payload: {
          options: shuffleArray([
            { id: 'opt_1', text: `${total} shoes`, isCorrect: true },
            { id: 'opt_2', text: `${pairs} shoes`, isCorrect: false },
            { id: 'opt_3', text: `${total + 2} shoes`, isCorrect: false },
            { id: 'opt_4', text: `${pairs + 2} shoes`, isCorrect: false },
          ]),
        },
        explanation: `💡 1 pair = 2 items. ${pairs} pairs × 2 = ${total} shoes!`,
        points: 10,
      };
    }
  }

  // CLASS 3 MATHEMATICS
  if (grade === 3) {
    const type = randomChoice(['mult', 'div', 'add3', 'money', 'measurement']);
    if (type === 'mult') {
      const a = randomInt(2, 9);
      const b = randomInt(3, 9);
      const ans = a * b;
      return {
        id: qId,
        grade: 3,
        subject: 'maths',
        chapter: ch,
        concept: 'Multiplication Tables',
        difficulty: 'easy',
        type: 'mcq',
        question: `Multiply: ${a} × ${b} = ?`,
        visualEmoji: '✖️ 🔢',
        payload: {
          options: shuffleArray([
            { id: 'opt_1', text: `${ans}`, isCorrect: true },
            { id: 'opt_2', text: `${ans + a}`, isCorrect: false },
            { id: 'opt_3', text: `${ans - 2}`, isCorrect: false },
            { id: 'opt_4', text: `${ans + 3}`, isCorrect: false },
          ]),
        },
        explanation: `💡 ${a} times ${b} equals ${ans}!`,
        points: 10,
      };
    } else if (type === 'div') {
      const b = randomInt(2, 8);
      const ans = randomInt(2, 9);
      const a = b * ans;
      return {
        id: qId,
        grade: 3,
        subject: 'maths',
        chapter: ch,
        concept: 'Division Facts',
        difficulty: 'medium',
        type: 'mcq',
        question: `Divide: ${a} ÷ ${b} = ?`,
        visualEmoji: '➗ 🔢',
        payload: {
          options: shuffleArray([
            { id: 'opt_1', text: `${ans}`, isCorrect: true },
            { id: 'opt_2', text: `${ans + 1}`, isCorrect: false },
            { id: 'opt_3', text: `${Math.max(1, ans - 1)}`, isCorrect: false },
            { id: 'opt_4', text: `${ans + 2}`, isCorrect: false },
          ]),
        },
        explanation: `💡 Because ${b} × ${ans} = ${a}, ${a} ÷ ${b} = ${ans}!`,
        points: 10,
      };
    } else if (type === 'money') {
      const note1 = randomChoice([50, 100, 200]);
      const note2 = randomChoice([20, 50, 100]);
      const total = note1 + note2;
      return {
        id: qId,
        grade: 3,
        subject: 'maths',
        chapter: ch,
        concept: 'Indian Currency (Rupees)',
        difficulty: 'easy',
        type: 'mcq',
        question: `A student has a ₹${note1} note and a ₹${note2} note. How much total money does the student have?`,
        visualEmoji: '💵 🪙',
        payload: {
          options: shuffleArray([
            { id: 'opt_1', text: `₹${total}`, isCorrect: true },
            { id: 'opt_2', text: `₹${total + 10}`, isCorrect: false },
            { id: 'opt_3', text: `₹${total - 10}`, isCorrect: false },
            { id: 'opt_4', text: `₹${total + 50}`, isCorrect: false },
          ]),
        },
        explanation: `💡 ₹${note1} + ₹${note2} = ₹${total}!`,
        points: 10,
      };
    } else {
      const a = randomInt(120, 480);
      const b = randomInt(110, 390);
      const ans = a + b;
      return {
        id: qId,
        grade: 3,
        subject: 'maths',
        chapter: ch,
        concept: '3-Digit Addition',
        difficulty: 'medium',
        type: 'mcq',
        question: `Add: ${a} + ${b} = ?`,
        visualEmoji: '➕ 🔢',
        payload: {
          options: shuffleArray([
            { id: 'opt_1', text: `${ans}`, isCorrect: true },
            { id: 'opt_2', text: `${ans + 10}`, isCorrect: false },
            { id: 'opt_3', text: `${ans - 10}`, isCorrect: false },
            { id: 'opt_4', text: `${ans + 100}`, isCorrect: false },
          ]),
        },
        explanation: `💡 ${a} + ${b} = ${ans}!`,
        points: 10,
      };
    }
  }

  // CLASS 4 MATHEMATICS
  if (grade === 4) {
    const type = randomChoice(['fractions', 'perimeter', 'mult2', 'factors']);
    if (type === 'fractions') {
      const denom = randomChoice([5, 7, 8, 9, 10]);
      const n1 = randomInt(1, Math.floor(denom / 2));
      const n2 = randomInt(1, denom - n1 - 1);
      const numSum = n1 + n2;
      return {
        id: qId,
        grade: 4,
        subject: 'maths',
        chapter: ch,
        concept: 'Addition of Like Fractions',
        difficulty: 'medium',
        type: 'mcq',
        question: `Add the like fractions: ${n1}/${denom} + ${n2}/${denom} = ?`,
        visualEmoji: '🍰 🔢',
        payload: {
          options: shuffleArray([
            { id: 'opt_1', text: `${numSum}/${denom}`, isCorrect: true },
            { id: 'opt_2', text: `${numSum}/${denom * 2}`, isCorrect: false },
            { id: 'opt_3', text: `${numSum + 1}/${denom}`, isCorrect: false },
            { id: 'opt_4', text: `1/${denom}`, isCorrect: false },
          ]),
        },
        explanation: `💡 When denominators are identical, add the numerators: ${n1} + ${n2} = ${numSum}/${denom}!`,
        points: 15,
      };
    } else if (type === 'perimeter') {
      const l = randomInt(5, 15);
      const w = randomInt(3, l - 1);
      const perimeter = 2 * (l + w);
      return {
        id: qId,
        grade: 4,
        subject: 'maths',
        chapter: ch,
        concept: 'Perimeter of a Rectangle',
        difficulty: 'medium',
        type: 'mcq',
        question: `A rectangular playground has length = ${l} m and breadth = ${w} m. What is its perimeter?`,
        visualEmoji: '📐 🏞️',
        payload: {
          options: shuffleArray([
            { id: 'opt_1', text: `${perimeter} m`, isCorrect: true },
            { id: 'opt_2', text: `${l * w} m`, isCorrect: false },
            { id: 'opt_3', text: `${l + w} m`, isCorrect: false },
            { id: 'opt_4', text: `${perimeter + 4} m`, isCorrect: false },
          ]),
        },
        explanation: `💡 Perimeter of rectangle = 2 × (Length + Breadth) = 2 × (${l} + ${w}) = ${perimeter} m!`,
        points: 15,
      };
    } else {
      const a = randomInt(12, 25);
      const b = randomInt(11, 19);
      const ans = a * b;
      return {
        id: qId,
        grade: 4,
        subject: 'maths',
        chapter: ch,
        concept: '2-Digit by 2-Digit Multiplication',
        difficulty: 'hard',
        type: 'mcq',
        question: `Calculate: ${a} × ${b} = ?`,
        visualEmoji: '✖️ 🔢',
        payload: {
          options: shuffleArray([
            { id: 'opt_1', text: `${ans}`, isCorrect: true },
            { id: 'opt_2', text: `${ans + 10}`, isCorrect: false },
            { id: 'opt_3', text: `${ans - 10}`, isCorrect: false },
            { id: 'opt_4', text: `${ans + 20}`, isCorrect: false },
          ]),
        },
        explanation: `💡 ${a} × ${b} = ${ans}!`,
        points: 15,
      };
    }
  }

  // CLASS 5 MATHEMATICS
  if (grade === 5) {
    const type = randomChoice(['decimals', 'angles', 'percentage', 'area']);
    if (type === 'decimals') {
      const a = (randomInt(20, 80) / 10).toFixed(1);
      const b = (randomInt(10, 50) / 10).toFixed(1);
      const ans = (parseFloat(a) + parseFloat(b)).toFixed(1);
      return {
        id: qId,
        grade: 5,
        subject: 'maths',
        chapter: ch,
        concept: 'Addition of Decimals',
        difficulty: 'medium',
        type: 'mcq',
        question: `Add the decimals: ${a} + ${b} = ?`,
        visualEmoji: '🔢 🧮',
        payload: {
          options: shuffleArray([
            { id: 'opt_1', text: `${ans}`, isCorrect: true },
            { id: 'opt_2', text: `${(parseFloat(ans) + 0.2).toFixed(1)}`, isCorrect: false },
            { id: 'opt_3', text: `${(parseFloat(ans) - 0.1).toFixed(1)}`, isCorrect: false },
            { id: 'opt_4', text: `${(parseFloat(ans) + 1.0).toFixed(1)}`, isCorrect: false },
          ]),
        },
        explanation: `💡 Align the decimal points: ${a} + ${b} = ${ans}!`,
        points: 15,
      };
    } else if (type === 'angles') {
      const angle = randomChoice([45, 60, 90, 120, 150]);
      let kind = 'Acute angle';
      if (angle === 90) kind = 'Right angle';
      else if (angle > 90) kind = 'Obtuse angle';
      return {
        id: qId,
        grade: 5,
        subject: 'maths',
        chapter: ch,
        concept: 'Classification of Angles',
        difficulty: 'easy',
        type: 'mcq',
        question: `An angle measuring ${angle}° is classified as what type of angle?`,
        visualEmoji: '📐 📐',
        payload: {
          options: shuffleArray([
            { id: 'opt_1', text: `${kind}`, isCorrect: true },
            { id: 'opt_2', text: kind === 'Acute angle' ? 'Obtuse angle' : 'Acute angle', isCorrect: false },
            { id: 'opt_3', text: 'Reflex angle', isCorrect: false },
            { id: 'opt_4', text: 'Straight angle', isCorrect: false },
          ]),
        },
        explanation: `💡 Less than 90° = Acute; Exactly 90° = Right; Between 90° and 180° = Obtuse! So ${angle}° is a ${kind}.`,
        points: 10,
      };
    } else {
      const pct = randomChoice([25, 50, 10]);
      const val = randomChoice([40, 80, 100, 200]);
      const ans = (pct / 100) * val;
      return {
        id: qId,
        grade: 5,
        subject: 'maths',
        chapter: ch,
        concept: 'Percentage Calculation',
        difficulty: 'medium',
        type: 'mcq',
        question: `What is ${pct}% of ${val}?`,
        visualEmoji: '💯 🔢',
        payload: {
          options: shuffleArray([
            { id: 'opt_1', text: `${ans}`, isCorrect: true },
            { id: 'opt_2', text: `${ans + 10}`, isCorrect: false },
            { id: 'opt_3', text: `${ans / 2}`, isCorrect: false },
            { id: 'opt_4', text: `${ans * 2}`, isCorrect: false },
          ]),
        },
        explanation: `💡 ${pct}% of ${val} = (${pct} / 100) × ${val} = ${ans}!`,
        points: 15,
      };
    }
  }

  // CLASS 6 MATHEMATICS
  const type = randomChoice(['integers', 'algebra', 'ratio']);
  if (type === 'integers') {
    const a = -randomInt(3, 12);
    const b = randomInt(5, 20);
    const ans = a + b;
    return {
      id: qId,
      grade: 6,
      subject: 'maths',
      chapter: ch,
      concept: 'Addition of Integers',
      difficulty: 'medium',
      type: 'mcq',
      question: `Calculate: (${a}) + (${b}) = ?`,
      visualEmoji: '➖ ➕ 🔢',
      payload: {
        options: shuffleArray([
          { id: 'opt_1', text: `${ans}`, isCorrect: true },
          { id: 'opt_2', text: `${-ans}`, isCorrect: false },
          { id: 'opt_3', text: `${a - b}`, isCorrect: false },
          { id: 'opt_4', text: `${ans + 2}`, isCorrect: false },
        ]),
      },
      explanation: `💡 Adding positive ${b} to negative ${a}: ${b} - ${Math.abs(a)} = ${ans}!`,
      points: 15,
    };
  } else if (type === 'algebra') {
    const x = randomInt(4, 15);
    const add = randomInt(5, 20);
    const total = x + add;
    return {
      id: qId,
      grade: 6,
      subject: 'maths',
      chapter: ch,
      concept: 'Simple Linear Equation',
      difficulty: 'medium',
      type: 'mcq',
      question: `Solve for x: x + ${add} = ${total}`,
      visualEmoji: '🧮 ❓',
      payload: {
        options: shuffleArray([
          { id: 'opt_1', text: `x = ${x}`, isCorrect: true },
          { id: 'opt_2', text: `x = ${x + 2}`, isCorrect: false },
          { id: 'opt_3', text: `x = ${total + add}`, isCorrect: false },
          { id: 'opt_4', text: `x = ${x - 1}`, isCorrect: false },
        ]),
      },
      explanation: `💡 Subtract ${add} from both sides: x = ${total} - ${add} = ${x}!`,
      points: 15,
    };
  } else {
    const common = randomChoice([3, 4, 5, 6]);
    const a = 1 * common;
    const b = 3 * common;
    return {
      id: qId,
      grade: 6,
      subject: 'maths',
      chapter: ch,
      concept: 'Simplest Form of Ratio',
      difficulty: 'medium',
      type: 'mcq',
      question: `Find the simplest form of the ratio ${a} : ${b}:`,
      visualEmoji: '⚖️ 🔢',
      payload: {
        options: shuffleArray([
          { id: 'opt_1', text: '1 : 3', isCorrect: true },
          { id: 'opt_2', text: '2 : 3', isCorrect: false },
          { id: 'opt_3', text: '1 : 4', isCorrect: false },
          { id: 'opt_4', text: `${a} : 1`, isCorrect: false },
        ]),
      },
      explanation: `💡 Divide both terms by their common factor ${common}: ${a}÷${common} : ${b}÷${common} = 1 : 3!`,
      points: 15,
    };
  }
}

// ----------------------------------------------------------------------------
// 2. DYNAMIC UNIVERSAL ENGLISH GRAMMAR GENERATOR (Class 1 to 6)
// Focuses 100% on English Grammar rules that apply across all school boards
// ----------------------------------------------------------------------------
export function generateDynamicEnglishGrammarQuestion(grade: Grade, chapterTitle?: string): Question {
  const qId = `dyn_eng_${grade}_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  const ch = chapterTitle || `English Grammar Mastery (Class ${grade})`;

  // LKG & UKG FOUNDATIONAL ENGLISH (Ages 3-5)
  if (grade === 'LKG' || grade === 'UKG') {
    const earlyEnglishBank = [
      {
        concept: 'Letter Recognition',
        question: 'Which letter comes after A in the alphabet? A, [?]',
        correct: 'B',
        wrongs: ['C', 'D'],
        expl: '💡 A, B, C! B comes right after A.',
        emoji: '🔤 🅰️',
      },
      {
        concept: 'Phonics Sounds',
        question: 'Which object starts with letter "A"? 🍎',
        correct: 'Apple 🍎',
        wrongs: ['Ball ⚽', 'Cat 🐱'],
        expl: '💡 A is for Apple! Crisp and sweet.',
        emoji: '🍎 🔤',
      },
      {
        concept: 'Phonics Sounds',
        question: 'Which object starts with letter "B"? ⚽',
        correct: 'Ball ⚽',
        wrongs: ['Fish 🐟', 'Egg 🥚'],
        expl: '💡 B is for Ball! Great job!',
        emoji: '⚽ 🔤',
      },
      {
        concept: 'Animal Sounds',
        question: 'What sound does a friendly dog 🐶 make?',
        correct: 'Woof Woof! 🐶',
        wrongs: ['Meow Meow! 🐱', 'Moo Moo! 🐮'],
        expl: '💡 A dog says "Woof! Woof!"',
        emoji: '🐶 🎵',
      },
      {
        concept: 'Animal Sounds',
        question: 'What sound does a cute cat 🐱 make?',
        correct: 'Meow Meow! 🐱',
        wrongs: ['Quack Quack! 🦆', 'Roar! 🦁'],
        expl: '💡 A cat says "Meow! Meow!"',
        emoji: '🐱 🎵',
      },
      {
        concept: 'CVC Phonics',
        question: 'Blend these sounds together: C + A + T = [?]',
        correct: 'CAT 🐱',
        wrongs: ['BAT 🦇', 'RAT 🐀'],
        expl: '💡 C-A-T spells CAT! Meow!',
        emoji: '🐱 🔤',
      },
      {
        concept: 'Everyday Opposites',
        question: 'Hot fire 🔥 is opposite to cold [?]:',
        correct: 'Ice ❄️',
        wrongs: ['Tea ☕', 'Soup 🥣'],
        expl: '💡 Hot and Cold are opposites!',
        emoji: '🔥 ❄️',
      },
      {
        concept: 'Everyday Opposites',
        question: 'What is the opposite of UP ⬆️?',
        correct: 'DOWN ⬇️',
        wrongs: ['IN 📥', 'OUT 📤'],
        expl: '💡 Up and Down are opposites!',
        emoji: '⬆️ ⬇️',
      },
      {
        concept: 'Sight Words & Colors',
        question: 'The bright Sun ☀️ in the sky is [BLANK] in color.',
        correct: 'Yellow 🟡',
        wrongs: ['Blue 🔵', 'Green 🟢'],
        expl: '💡 The sun is yellow and bright!',
        emoji: '☀️ 🟡',
      },
      {
        concept: 'Capital and Small Letters',
        question: 'Which small letter matches the capital letter "A"?',
        correct: 'a',
        wrongs: ['b', 'd'],
        expl: '💡 Capital A and small a make "Aa"!',
        emoji: '🅰️ 🔡',
      },
    ];
    const item = randomChoice(earlyEnglishBank);
    return {
      id: qId,
      grade,
      subject: 'english',
      chapter: ch,
      concept: item.concept,
      difficulty: 'easy',
      type: 'mcq',
      question: item.question,
      visualEmoji: item.emoji,
      payload: {
        options: shuffleArray([
          { id: 'opt_1', text: item.correct, isCorrect: true },
          { id: 'opt_2', text: item.wrongs[0], isCorrect: false },
          { id: 'opt_3', text: item.wrongs[1], isCorrect: false },
        ]),
      },
      explanation: item.expl,
      points: 10,
    };
  }

  const grammarBank = [
    // Articles (A, An, The)
    {
      concept: 'Articles (A / An / The)',
      question: 'Choose the correct article: "She saw [BLANK] owl perched on the roof."',
      correct: 'an',
      wrongs: ['a', 'the', 'no article needed'],
      expl: '💡 We use "an" before vowel sounds (a, e, i, o, u): an owl!',
    },
    {
      concept: 'Articles (A / An / The)',
      question: 'Choose the correct article: "He is [BLANK] honest and hardworking man."',
      correct: 'an',
      wrongs: ['a', 'the', 'no article needed'],
      expl: '💡 "Honest" begins with a silent "h" and an "o" vowel sound, so we use "an honest man"!',
    },
    {
      concept: 'Articles (A / An / The)',
      question: 'Choose the correct article: "[BLANK] Sun is the center of our solar system."',
      correct: 'The',
      wrongs: ['A', 'An', 'Any'],
      expl: '💡 We use "The" before unique universal celestial bodies: The Sun, The Moon, The Earth!',
    },

    // Nouns & Types
    {
      concept: 'Proper Noun Identification',
      question: 'Which of the following is a PROPER NOUN that must begin with a capital letter?',
      correct: 'Mumbai',
      wrongs: ['city', 'building', 'street'],
      expl: '💡 Mumbai is the specific name of a city, so it is a Proper Noun!',
    },
    {
      concept: 'Collective Nouns',
      question: 'What is the collective noun for a group of lions?',
      correct: 'A pride of lions',
      wrongs: ['A flock of lions', 'A herd of lions', 'A swarm of lions'],
      expl: '💡 A family group of lions is called a PRIDE of lions!',
    },
    {
      concept: 'Collective Nouns',
      question: 'A group of birds flying together in the sky is called a [BLANK] of birds.',
      correct: 'flock',
      wrongs: ['pack', 'swarm', 'fleet'],
      expl: '💡 A group of birds or sheep is called a FLOCK!',
    },
    {
      concept: 'Abstract Nouns',
      question: 'Which word is an ABSTRACT NOUN representing a quality or feeling?',
      correct: 'Honesty',
      wrongs: ['Table', 'Apple', 'Doctor'],
      expl: '💡 Honesty cannot be touched or seen with eyes; it is a quality, making it an Abstract Noun!',
    },

    // Pronouns
    {
      concept: 'Pronoun Agreement',
      question: 'Choose the correct pronoun: "Riya and Aman are good dancers. [BLANK] won the competition."',
      correct: 'They',
      wrongs: ['He', 'She', 'It'],
      expl: '💡 For multiple people (plural), we use the pronoun "They"!',
    },
    {
      concept: 'Pronouns (Subject vs Object)',
      question: 'Father bought a new bicycle for Aryan and [BLANK].',
      correct: 'me',
      wrongs: ['I', 'he', 'we'],
      expl: '💡 In the object position after a preposition ("for"), we use the object pronoun "me" (not "I")!',
    },

    // Subject-Verb Agreement
    {
      concept: 'Subject-Verb Agreement',
      question: 'Choose the correct verb: "The team of players [BLANK] ready for the final match."',
      correct: 'is',
      wrongs: ['are', 'were', 'have'],
      expl: '💡 "Team" is a collective singular noun, so it takes the singular verb "is"!',
    },
    {
      concept: 'Subject-Verb Agreement',
      question: 'Choose the correct verb: "Neither the teacher nor the students [BLANK] in the room."',
      correct: 'were',
      wrongs: ['was', 'is', 'has'],
      expl: '💡 In "neither... nor", the verb agrees with the closer subject ("students", which is plural): "were"!',
    },

    // Tenses
    {
      concept: 'Irregular Past Tense',
      question: 'What is the past tense form of the verb "CATCH"?',
      correct: 'caught',
      wrongs: ['catched', 'cought', 'catches'],
      expl: '💡 Catch is an irregular verb: catch -> caught!',
    },
    {
      concept: 'Irregular Past Tense',
      question: 'What is the past tense form of the verb "WRITE"?',
      correct: 'wrote',
      wrongs: ['writed', 'written', 'writes'],
      expl: '💡 Write -> wrote -> written. The simple past tense is "wrote"!',
    },

    // Adjectives & Degrees of Comparison
    {
      concept: 'Degrees of Comparison',
      question: 'Mount Everest is the [BLANK] mountain peak in the world.',
      correct: 'highest',
      wrongs: ['higher', 'high', 'most high'],
      expl: '💡 With "the" for the topmost among all, we use the Superlative degree: "highest"!',
    },
    {
      concept: 'Degrees of Comparison',
      question: 'A car travels [BLANK] than a bicycle.',
      correct: 'faster',
      wrongs: ['fast', 'fastest', 'more fast'],
      expl: '💡 When comparing two things with "than", we use the Comparative degree: "faster"!',
    },

    // Prepositions
    {
      concept: 'Prepositions of Time',
      question: 'School begins punctually [BLANK] 8:00 AM.',
      correct: 'at',
      wrongs: ['on', 'in', 'by'],
      expl: '💡 We use "at" for specific clock times: at 8:00 AM!',
    },
    {
      concept: 'Prepositions (Between vs Among)',
      question: 'The prize was distributed [BLANK] all forty students in the class.',
      correct: 'among',
      wrongs: ['between', 'with', 'along'],
      expl: '💡 We use "between" for two people/things, and "among" for more than two!',
    },

    // Conjunctions
    {
      concept: 'Conjunctions (Connecting Words)',
      question: 'Rohan worked hard, [BLANK] he could not win the first prize.',
      correct: 'but',
      wrongs: ['and', 'because', 'so'],
      expl: '💡 We use "but" to connect contrasting or opposing ideas!',
    },
  ];

  const item = randomChoice(grammarBank);
  return {
    id: qId,
    grade,
    subject: 'english',
    chapter: ch,
    concept: item.concept,
    difficulty: grade <= 2 ? 'easy' : grade <= 4 ? 'medium' : 'hard',
    type: 'mcq',
    question: item.question,
    visualEmoji: '🔤 ✍️',
    payload: {
      options: shuffleArray([
        { id: 'opt_1', text: item.correct, isCorrect: true },
        { id: 'opt_2', text: item.wrongs[0], isCorrect: false },
        { id: 'opt_3', text: item.wrongs[1], isCorrect: false },
        ...(item.wrongs[2] ? [{ id: 'opt_4', text: item.wrongs[2], isCorrect: false }] : []),
      ]),
    },
    explanation: item.expl,
    points: 10,
  };
}

// ----------------------------------------------------------------------------
// 3. DYNAMIC UNIVERSAL HINDI VYAKARAN GENERATOR (Class 1 to 6)
// Focuses 100% on Hindi Grammar rules common across CBSE, ICSE & all State Boards
// ----------------------------------------------------------------------------
export function generateDynamicHindiVyakaranQuestion(grade: Grade, chapterTitle?: string): Question {
  const qId = `dyn_hin_${grade}_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  const ch = chapterTitle || `हिंदी व्याकरण अभ्यास (कक्षा ${grade})`;

  // LKG & UKG FOUNDATIONAL HINDI (Ages 3-5)
  if (grade === 'LKG' || grade === 'UKG') {
    const earlyHindiBank = [
      {
        concept: 'स्वर पहचान (अ से अनार)',
        question: 'लाल-लाल मीठे दानों वाला अनार 🍎 किस स्वर से शुरू होता है?',
        correct: 'अ',
        wrongs: ['आ', 'इ'],
        expl: '💡 अ से अनार! बहुत बढ़िया!',
        emoji: '🍎 🔤',
      },
      {
        concept: 'स्वर पहचान (आ से आम)',
        question: 'फलों का राजा पीला-पीला आम 🥭 किस स्वर से शुरू होता है?',
        correct: 'आ',
        wrongs: ['अ', 'ई'],
        expl: '💡 आ से आम! रसीला और मीठा आम।',
        emoji: '🥭 👑',
      },
      {
        concept: 'व्यंजन पहचान (क से कबूतर)',
        question: 'आसमान में उड़ने वाला कबूतर 🕊️ किस अक्षर से शुरू होता है?',
        correct: 'क',
        wrongs: ['ख', 'ग'],
        expl: '💡 क से कबूतर! गुटरगूँ कबूतर।',
        emoji: '🕊️ 🔤',
      },
      {
        concept: 'व्यंजन पहचान (ख से खरगोश)',
        question: 'गाजर खाने वाला प्यारा खरगोश 🐇 किस अक्षर से शुरू होता है?',
        correct: 'ख',
        wrongs: ['क', 'घ'],
        expl: '💡 ख से खरगोश!',
        emoji: '🐇 🥕',
      },
      {
        concept: 'दो अक्षर वाले शब्द (घर)',
        question: 'अक्षरों को जोड़कर पढ़ो: घ + र = [?]',
        correct: 'घर 🏠',
        wrongs: ['जल 💧', 'बस 🚌'],
        expl: '💡 घ + र मिलकर "घर" बनता है!',
        emoji: '🏠 ➕',
      },
      {
        concept: 'दो अक्षर वाले शब्द (जल)',
        question: 'अक्षरों को जोड़कर पढ़ो: ज + ल = [?]',
        correct: 'जल 💧',
        wrongs: ['नल 🚰', 'फल 🍎'],
        expl: '💡 ज + ल = जल (पानी)!',
        emoji: '💧 ➕',
      },
      {
        concept: 'सरल विलोम शब्द (दिन और रात)',
        question: 'सूरज निकलता है तो "दिन" ☀️ होता है, इसका उल्टा क्या है?',
        correct: 'रात 🌙',
        wrongs: ['सुबह 🌅', 'शाम 🌇'],
        expl: '💡 दिन का विलोम रात होता है!',
        emoji: '☀️ ↔️ 🌙',
      },
      {
        concept: 'सरल विलोम शब्द (बड़ा और छोटा)',
        question: 'हाथी 🐘 बहुत "बड़ा" है, तो नन्हा चूहा 🐭 कैसा है?',
        correct: 'छोटा',
        wrongs: ['मोटा', 'लंबा'],
        expl: '💡 बड़ा का उल्टा छोटा होता है!',
        emoji: '🐘 ↔️ 🐭',
      },
      {
        concept: 'पशु-पक्षी पहचान',
        question: 'हमारा राष्ट्रीय पक्षी "मोर" 🦚 किस अक्षर से शुरू होता है?',
        correct: 'म',
        wrongs: ['न', 'प'],
        expl: '💡 म से मोर! सुंदर पंखों वाला मोर।',
        emoji: '🦚 🔤',
      },
      {
        concept: 'रंग पहचान',
        question: 'टमाटर 🍅 और सेब 🍎 किस रंग के होते हैं?',
        correct: 'लाल 🔴',
        wrongs: ['पीला 🟡', 'नीला 🔵'],
        expl: '💡 टमाटर और सेब लाल रंग के होते हैं!',
        emoji: '🍅 🔴',
      },
    ];
    const item = randomChoice(earlyHindiBank);
    return {
      id: qId,
      grade,
      subject: 'hindi',
      chapter: ch,
      concept: item.concept,
      difficulty: 'easy',
      type: 'mcq',
      question: item.question,
      visualEmoji: item.emoji,
      payload: {
        options: shuffleArray([
          { id: 'opt_1', text: item.correct, isCorrect: true },
          { id: 'opt_2', text: item.wrongs[0], isCorrect: false },
          { id: 'opt_3', text: item.wrongs[1], isCorrect: false },
        ]),
      },
      explanation: item.expl,
      points: 10,
    };
  }

  const vyakaranBank = [
    // संज्ञा व उसके भेद
    {
      concept: 'भाववाचक संज्ञा की पहचान',
      question: 'इनमें से कौन सा शब्द \'भाववाचक संज्ञा\' है जिसे छुआ नहीं जा सकता, केवल अनुभव किया जाता है?',
      correct: 'मित्रता',
      wrongs: ['लड़का', 'किताब', 'दिल्ली'],
      expl: '💡 लड़का जातिवाचक है, किताब वस्तु है, दिल्ली व्यक्तिवाचक है। "मित्रता" एक गुण/भाव है, अतः भाववाचक संज्ञा है!',
    },
    {
      concept: 'व्यक्तिवाचक संज्ञा की पहचान',
      question: 'इनमें से कौन सा शब्द \'व्यक्तिवाचक संज्ञा\' (किसी विशेष व्यक्ति, स्थान या पर्वत का नाम) है?',
      correct: 'हिमालय',
      wrongs: ['पहाड़', 'नदी', 'पेड़'],
      expl: '💡 पहाड़ और नदी सामान्य जाति हैं; "हिमालय" एक विशेष पर्वत का नाम है, इसलिए यह व्यक्तिवाचक संज्ञा है!',
    },

    // सर्वनाम
    {
      concept: 'सर्वनाम शब्द पहचान',
      question: 'वाक्य में संज्ञा के स्थान पर प्रयुक्त होने वाला \'सर्वनाम शब्द\' कौन सा है: "रोहन ने कहा कि वह कल स्कूल जाएगा।"',
      correct: 'वह',
      wrongs: ['रोहन', 'स्कूल', 'जाएगा'],
      expl: '💡 रोहन के नाम के स्थान पर "वह" का प्रयोग हुआ है, इसलिए "वह" सर्वनाम है!',
    },
    {
      concept: 'पुरुषवाचक सर्वनाम (उत्तम पुरुष)',
      question: 'जब बोलने वाला व्यक्ति अपने लिए बात करता है (जैसे मैं, हम), तो उसे कौन सा सर्वनाम कहते हैं?',
      correct: 'उत्तम पुरुष',
      wrongs: ['मध्यम पुरुष', 'अन्य पुरुष', 'निजवाचक'],
      expl: '💡 बोलने वाला = उत्तम पुरुष (मैं/हम); सुनने वाला = मध्यम पुरुष (तुम/आप); जिसके बारे में बात हो = अन्य पुरुष (वह/वे)!',
    },

    // क्रिया व काल
    {
      concept: 'काल की पहचान (भविष्यत् काल)',
      question: 'वाक्य का काल पहचानिए: "हम सब कल शाम को चिड़ियाघर देखने जाएँगे।"',
      correct: 'भविष्यत् काल',
      wrongs: ['भूतकाल', 'वर्तमानकाल'],
      expl: '💡 "जाएँगे" आने वाले समय (कल) का बोध कराता है, इसलिए यह भविष्यत् काल है!',
    },
    {
      concept: 'सकर्मक क्रिया की पहचान',
      question: 'जिस क्रिया के साथ \'कर्म\' जुड़ा होता है (जैसे: बच्चा दूध पी रहा है), उसे क्या कहते हैं?',
      correct: 'सकर्मक क्रिया',
      wrongs: ['अकर्मक क्रिया', 'सहायक क्रिया', 'प्रेरणार्थक क्रिया'],
      expl: '💡 "क्या पी रहा है? दूध" — कर्म साथ में होने के कारण यह सकर्मक क्रिया है!',
    },

    // लिंग परिवर्तन
    {
      concept: 'स्त्रीलिंग रूप',
      question: '\'विद्वान\' शब्द का सही स्त्रीलिंग रूप कौन सा है?',
      correct: 'विदुषी',
      wrongs: ['विद्वानी', 'विद्वाती', 'विदुषा'],
      expl: '💡 विद्वान (पुल्लिंग) का सही स्त्रीलिंग रूप "विदुषी" होता है!',
    },
    {
      concept: 'कवि का स्त्रीलिंग',
      question: '\'कवि\' शब्द का सही और शुद्ध वर्तनी वाला स्त्रीलिंग रूप कौन सा है?',
      correct: 'कवयित्री',
      wrongs: ['कविइत्री', 'कवयत्री', 'कवित्री'],
      expl: '💡 शुद्ध वर्तनी नियम: कवि का स्त्रीलिंग "कवयित्री" होता है!',
    },

    // वचन परिवर्तन
    {
      concept: 'वचन परिवर्तन नियम',
      question: '\'दवाई\' शब्द का सही बहुवचन रूप कौन सा है?',
      correct: 'दवाइयाँ',
      wrongs: ['दवाईयाँ', 'दवाइयें', 'दवाइयों'],
      expl: '💡 नियम: अंत की बड़ी \'ई\' छोटी \'इ\' में बदलती है: दवाई -> दवाइयाँ!',
    },
    {
      concept: 'आकारांत स्त्रीलिंग बहुवचन',
      question: '\'महिला\' शब्द का सही बहुवचन रूप कौन सा है?',
      correct: 'महिलाएँ',
      wrongs: ['महिलायें', 'महिलाओं', 'महिलियाँ'],
      expl: '💡 महिला (एक) -> महिलाएँ (अनेक)!',
    },

    // विलोम शब्द
    {
      concept: 'विलोम शब्द (विपरीतार्थक)',
      question: '\'अमृत\' शब्द का सही विलोम (उलटा अर्थ वाला) शब्द क्या है?',
      correct: 'विष',
      wrongs: ['जल', 'दूध', 'मधु'],
      expl: '💡 अमृत का विपरीतार्थक शब्द "विष" होता है!',
    },
    {
      concept: 'विलोम शब्द',
      question: '\'वरदान\' शब्द का सही विलोम शब्द क्या है?',
      correct: 'अभिशाप',
      wrongs: ['उपहार', 'प्रसाद', 'आशीर्वाद'],
      expl: '💡 वरदान का उलटा शब्द "अभिशाप" या "शाप" होता है!',
    },

    // पर्यायवाची शब्द
    {
      concept: 'पर्यायवाची शब्द (समानार्थक)',
      question: '\'सूर्य\' (सूरज) का पर्यायवाची शब्द इनमें से कौन सा है?',
      correct: 'दिनकर',
      wrongs: ['निशाकर', 'जलधर', 'पवन'],
      expl: '💡 सूर्य के पर्यायवाची हैं: दिनकर, रवि, भानु, भास्कर!',
    },
    {
      concept: 'पर्यायवाची शब्द',
      question: '\'नेत्र\', \'नयन\', और \'चक्षु\' किसके पर्यायवाची शब्द हैं?',
      correct: 'आँख',
      wrongs: ['कान', 'नाक', 'हाथ'],
      expl: '💡 नयन, नेत्र, चक्षु, लोचन सब "आँख" के पर्यायवाची शब्द हैं!',
    },

    // मुहावरे
    {
      concept: 'मुहावरे का अर्थ',
      question: '\'ईद का चाँद होना\' मुहावरे का सही अर्थ क्या है?',
      correct: 'बहुत दिनों बाद दिखाई देना',
      wrongs: ['त्योहार मनाना', 'चाँद पर जाना', 'उपवास रखना'],
      expl: '💡 जैसे ईद का चाँद बहुत प्रतीक्षा के बाद दिखता है, वैसे ही बहुत दिनों बाद मिलने वाले को कहते हैं!',
    },
    {
      concept: 'मुहावरे का अर्थ',
      question: '\'अँगूठा दिखाना\' मुहावरे का सही अर्थ क्या है?',
      correct: 'साफ़ मना कर देना',
      wrongs: ['मदद करना', 'ताली बजाना', 'हाथ मिलाना'],
      expl: '💡 ज़रूरत के समय किसी चीज़ को देने से साफ़ इनकार कर देना "अँगूठा दिखाना" कहलाता है!',
    },

    // अनेक शब्दों के लिए एक शब्द
    {
      concept: 'अनेक शब्दों के लिए एक शब्द',
      question: '\'जो ईश्वर में विश्वास रखता हो\', उसे एक शब्द में क्या कहते हैं?',
      correct: 'आस्तिक',
      wrongs: ['नास्तिक', 'साधु', 'पुजारी'],
      expl: '💡 ईश्वर को मानने वाला = आस्तिक; न मानने वाला = नास्तिक!',
    },
    {
      concept: 'अनेक शब्दों के लिए एक शब्द',
      question: '\'जो कभी न मरे\', उसे एक शब्द में क्या कहते हैं?',
      correct: 'अमर',
      wrongs: ['अजर', 'अमरूद', 'अदृश्य'],
      expl: '💡 जिसकी कभी मृत्यु न हो, उसे "अमर" कहते हैं!',
    },
  ];

  const item = randomChoice(vyakaranBank);
  return {
    id: qId,
    grade,
    subject: 'hindi',
    chapter: ch,
    concept: item.concept,
    difficulty: grade <= 2 ? 'easy' : grade <= 4 ? 'medium' : 'hard',
    type: 'mcq',
    question: item.question,
    visualEmoji: '🇮🇳 ✍️',
    payload: {
      options: shuffleArray([
        { id: 'opt_1', text: item.correct, isCorrect: true },
        { id: 'opt_2', text: item.wrongs[0], isCorrect: false },
        { id: 'opt_3', text: item.wrongs[1], isCorrect: false },
        ...(item.wrongs[2] ? [{ id: 'opt_4', text: item.wrongs[2], isCorrect: false }] : []),
      ]),
    },
    explanation: item.expl,
    points: 10,
  };
}

// ----------------------------------------------------------------------------
// 4. GENERATE EXTRA SUPPORTING PRACTICE QUESTIONS
// Generates fresh, dynamic questions for limitless practice on any topic
// ----------------------------------------------------------------------------
export function generateExtraPracticeQuestions(
  grade: Grade,
  subject: Subject,
  chapterTitle?: string,
  count: number = 10
): Question[] {
  const list: Question[] = [];
  for (let i = 0; i < count; i++) {
    if (subject === 'maths') {
      list.push(generateDynamicMathQuestion(grade, chapterTitle));
    } else if (subject === 'english') {
      list.push(generateDynamicEnglishGrammarQuestion(grade, chapterTitle));
    } else {
      list.push(generateDynamicHindiVyakaranQuestion(grade, chapterTitle));
    }
  }
  return list;
}

// ----------------------------------------------------------------------------
// 5. MAIN SESSION QUESTION SELECTOR (with Extra Practice Support)
// ----------------------------------------------------------------------------
export const generateQuestionsForSession = (
  grade: Grade,
  subject: Subject,
  chapterTitle?: string,
  isExtraPractice: boolean = false
): Question[] => {
  // If explicitly requested as Extra Practice (e.g. from Celebration screen "Practice Again"):
  // Instantly generate fresh, dynamic supporting questions!
  if (isExtraPractice) {
    return generateExtraPracticeQuestions(grade, subject, chapterTitle, 10);
  }

  // 1. Gather curated matching questions from MOCK_QUESTIONS for the specific chapter
  let matchedQuestions: Question[] = [];
  if (chapterTitle) {
    const cleanChapter = chapterTitle.toLowerCase().replace(/[^a-z0-9\u0900-\u097F\s]/g, ' ').trim();
    const chapterWords = cleanChapter.split(/\s+/).filter((w) => w.length > 2);
    matchedQuestions = MOCK_QUESTIONS.filter((q) => {
      if (q.grade !== grade || q.subject !== subject) return false;
      const qChapter = q.chapter.toLowerCase().replace(/[^a-z0-9\u0900-\u097F\s]/g, ' ').trim();
      if (cleanChapter === qChapter) return true;
      if (cleanChapter.includes(qChapter) || qChapter.includes(cleanChapter)) return true;
      const qWords = qChapter.split(/\s+/).filter((w) => w.length > 2);
      const overlap = chapterWords.filter((w) => qWords.includes(w));
      return overlap.length >= 2 || (chapterWords.length === 1 && overlap.length >= 1);
    });
  }

  // Fallback if no chapter specified or no match: get all grade and subject questions
  if (matchedQuestions.length === 0) {
    matchedQuestions = MOCK_QUESTIONS.filter(
      (q) => q.grade === grade && q.subject === subject
    );
  }

  // If still no questions or less than 5 questions available, synthesize dynamic questions
  if (matchedQuestions.length < 5) {
    const needed = 10 - matchedQuestions.length;
    const dynamicFill = generateExtraPracticeQuestions(grade, subject, chapterTitle, Math.max(needed, 5));
    matchedQuestions = [...matchedQuestions, ...dynamicFill];
  }

  // 2. PEDAGOGICAL LEARNING LADDER (सीखने का निश्चित पैटर्न)
  // Strictly sort questions by progressive learning difficulty:
  // Easy (बुनियादी अवधारणा) ➡️ Medium (नियम प्रयोग व अभ्यास) ➡️ Hard (चुनौती व निपुणता)
  const difficultyOrder: Record<string, number> = {
    easy: 1,
    medium: 2,
    hard: 3,
  };

  const sortedQuestions = [...matchedQuestions].sort((a, b) => {
    const diffA = difficultyOrder[a.difficulty] || 2;
    const diffB = difficultyOrder[b.difficulty] || 2;
    return diffA - diffB;
  });

  return sortedQuestions;
};
