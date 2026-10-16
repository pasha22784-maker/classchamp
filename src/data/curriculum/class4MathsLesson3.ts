import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 4 MATHEMATICS (MATH-MAGIC 4)
// CHAPTER 3: A TRIP TO BHOPAL (WORD PROBLEMS & ESTIMATION)
// Comprehensive Curriculum Covering All Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_4_MATHS_LESSON_3_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Bus Capacity & Seating Calculations
  // --------------------------------------------------------------------------
  {
    id: 'c4_m3_concept_bus_01',
    grade: 4,
    subject: 'maths',
    chapter: 'A Trip to Bhopal (Word Problems & Estimation)',
    concept: 'Bus Seating Capacity',
    difficulty: 'easy',
    type: 'mcq',
    question: 'A large tour bus has 50 passenger seats. How many children can sit in 4 such buses?',
    visualEmoji: '🚌 50 seats × 4 buses = ❓',
    payload: {
      options: [
        { id: 'opt_bs1', text: '200 children (4 × 50 = 200)', isCorrect: true },
        { id: 'opt_bs2', text: '250 children', isCorrect: false },
        { id: 'opt_bs3', text: '150 children', isCorrect: false },
      ],
    },
    explanation: '💡 4 buses × 50 seats each = **200 children** can get seats!',
    points: 10,
  },
  {
    id: 'c4_m3_concept_bus_02',
    grade: 4,
    subject: 'maths',
    chapter: 'A Trip to Bhopal (Word Problems & Estimation)',
    concept: 'Children Left Without Seats',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'There are 210 students going on the trip. If 4 buses carry 200 students, exactly [BLANK] students will be left without seats.',
    visualEmoji: '👥 210 - 200 = ❓',
    payload: {
      correctAnswer: '10',
      wordBank: ['10', '5', '15', '20'],
      displayTemplate: '210 students - 200 seats = [BLANK] students without seats.',
    },
    explanation: '💡 210 - 200 = **10 students** left without seats.',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Petrol Pump Refilling & Total Bill
  // --------------------------------------------------------------------------
  {
    id: 'c4_m3_concept_fuel_01',
    grade: 4,
    subject: 'maths',
    chapter: 'A Trip to Bhopal (Word Problems & Estimation)',
    concept: 'Diesel Cost Calculation',
    difficulty: 'medium',
    type: 'mcq',
    question: 'The bus stopped at a petrol pump. It took 100 litres of diesel. If 1 litre costs ₹ 35, how much did the driver pay?',
    visualEmoji: '⛽ 100 L × ₹ 35 = ❓',
    payload: {
      options: [
        { id: 'opt_fl1', text: '₹ 3,500 (100 × 35 = 3500)', isCorrect: true },
        { id: 'opt_fl2', text: '₹ 350', isCorrect: false },
        { id: 'opt_fl3', text: '₹ 35,000', isCorrect: false },
      ],
    },
    explanation: '💡 Multiply: 100 litres × ₹ 35/litre = **₹ 3,500**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Boating Time & Ticket Rates
  // --------------------------------------------------------------------------
  {
    id: 'c4_m3_concept_boat_01',
    grade: 4,
    subject: 'maths',
    chapter: 'A Trip to Bhopal (Word Problems & Estimation)',
    concept: 'Boat Ride Cost for Group',
    difficulty: 'medium',
    type: 'mcq',
    question: 'A motor-boat ticket costs ₹ 25 per person. A group of 4 friends ride the motor-boat. How much do they pay in total?',
    visualEmoji: '🚤 ₹ 25 × 4 friends = ❓',
    payload: {
      options: [
        { id: 'opt_bt1', text: '₹ 100 (4 × 25 = 100)', isCorrect: true },
        { id: 'opt_bt2', text: '₹ 75', isCorrect: false },
        { id: 'opt_bt3', text: '₹ 50', isCorrect: false },
      ],
    },
    explanation: '💡 4 friends × ₹ 25 = **₹ 100** total ticket cost!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 4: Trip Timeline & Boat Matching
  // --------------------------------------------------------------------------
  {
    id: 'c4_m3_concept_order_01',
    grade: 4,
    subject: 'maths',
    chapter: 'A Trip to Bhopal (Word Problems & Estimation)',
    concept: 'Bhopal Trip Daily Timeline',
    difficulty: 'medium',
    type: 'drag_order',
    question: 'Arrange the events of the Bhopal picnic in chronological order from morning to evening:',
    visualEmoji: '🚌 ➔ ⛽ ➔ 🎨 ➔ 🚤',
    payload: {
      tokens: ['Boarded school buses at 9:00 AM', 'Refilled diesel at petrol pump', 'Saw cave paintings at Bhimbetka', 'Enjoyed boating at the lake at 3:00 PM'],
      scrambled: ['Enjoyed boating at the lake at 3:00 PM', 'Boarded school buses at 9:00 AM', 'Saw cave paintings at Bhimbetka', 'Refilled diesel at petrol pump'],
      correctSequence: ['Boarded school buses at 9:00 AM', 'Refilled diesel at petrol pump', 'Saw cave paintings at Bhimbetka', 'Enjoyed boating at the lake at 3:00 PM'],
    },
    explanation: '💡 Timeline order: Board bus ➔ Petrol pump ➔ Bhimbetka cave art ➔ Boating at lake!',
    points: 15,
  },
  {
    id: 'c4_m3_concept_match_01',
    grade: 4,
    subject: 'maths',
    chapter: 'A Trip to Bhopal (Word Problems & Estimation)',
    concept: 'Boat Ride Rates & Duration Match',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each boat with its ticket price and ride duration:',
    visualEmoji: '⛵ ➔ 🏷️',
    payload: {
      pairs: [
        { id: 'bp_p1', left: 'Double-decker boat 🚢', right: '₹ 30 for 45 minutes' },
        { id: 'bp_p2', left: 'Paddle boat 🚣', right: '₹ 15 for 30 minutes' },
        { id: 'bp_p3', left: 'Motor boat 🚤', right: '₹ 25 for 20 minutes' },
        { id: 'bp_p4', left: 'Oar boat 🛶', right: '₹ 15 for 45 minutes' },
      ],
    },
    explanation: '💡 NCERT Math-Magic rates: Double-decker ₹30/45min; Paddle ₹15/30min; Motor ₹25/20min; Oar ₹15/45min.',
    points: 15,
  },
];
