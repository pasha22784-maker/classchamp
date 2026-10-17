import { AvatarOption } from '../types';

export const KID_AVATARS: AvatarOption[] = [
  { id: 'lion', name: 'Leo the Lion', emoji: '🦁', badgeColor: '#F59E0B' },
  { id: 'owl', name: 'Ollie the Wise Owl', emoji: '🦉', badgeColor: '#3B82F6' },
  { id: 'astronaut', name: 'Cosmo Explorer', emoji: '🚀', badgeColor: '#8B5CF6' },
  { id: 'dolphin', name: 'Splashy Dolphin', emoji: '🐬', badgeColor: '#06B6D4' },
  { id: 'tiger', name: 'Tiggy Champ', emoji: '🐯', badgeColor: '#F97316' },
  { id: 'falcon', name: 'Swift Falcon', emoji: '🦅', badgeColor: '#10B981' },
];

export const GRADE_OPTIONS = [
  { grade: 'LKG' as const, label: 'LKG (Balvatika 2)', desc: 'Ages 3-4 (Phonics, ABC, 1-5, Shapes, Colors, Emojis)' },
  { grade: 'UKG' as const, label: 'UKG (Balvatika 3)', desc: 'Ages 4-5 (Phonics Reading, CVC Words, 1-20, Addition)' },
  { grade: 1 as const, label: 'Class 1', desc: 'Ages 6-7 (Counting, Shapes, Alphabet, Nouns)' },
  { grade: 2 as const, label: 'Class 2', desc: 'Ages 7-8 (Addition, Subtraction, Verbs, Rhymes)' },
  { grade: 3 as const, label: 'Class 3', desc: 'Ages 8-9 (Fractions, Time, Prepositions)' },
  { grade: 4 as const, label: 'Class 4', desc: 'Ages 9-10 (Decimals, Angles, Tenses)' },
  { grade: 5 as const, label: 'Class 5', desc: 'Ages 10-11 (Percentages, Geometry, Conjunctions)' },
  { grade: 6 as const, label: 'Class 6', desc: 'Ages 11-12 (Integers, Algebra, Sentences)' },
];
