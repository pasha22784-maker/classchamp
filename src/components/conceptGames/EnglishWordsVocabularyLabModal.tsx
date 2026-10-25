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

interface EnglishWordsVocabularyLabModalProps {
  visible: boolean;
  onClose: () => void;
  activeLang?: string;
}

interface AnimalWord {
  id: string;
  name: string;
  nameHi: string;
  sound: string;
  emoji: string;
  desc: string;
  speech: string;
  speechHi: string;
  color: string;
}

const ANIMALS_LIST: AnimalWord[] = [
  {
    id: 'lion',
    name: 'Lion',
    nameHi: 'शेर',
    sound: 'Roar! Roar!',
    emoji: '🦁',
    desc: 'King of the Jungle',
    speech: 'Lion says Roar! King of the Jungle with a mighty golden mane!',
    speechHi: 'शेर दहाड़ता है गर्र-गर्र! जंगल का राजा शेर!',
    color: '#FFF7ED',
  },
  {
    id: 'dog',
    name: 'Dog',
    nameHi: 'कुत्ता',
    sound: 'Woof! Woof!',
    emoji: '🐕',
    desc: 'Friendly playful pet',
    speech: 'Dog says Woof! Woof! A faithful friend who wags his tail!',
    speechHi: 'कुत्ता बोलता है वुफ-वुफ! वफादार और प्यारा दोस्त!',
    color: '#EFF6FF',
  },
  {
    id: 'cat',
    name: 'Cat',
    nameHi: 'बिल्ली',
    sound: 'Meow! Meow!',
    emoji: '🐱',
    desc: 'Gentle purring cat',
    speech: 'Cat says Meow! Meow! Loves to drink milk and take naps!',
    speechHi: 'बिल्ली बोलती है म्याऊं-म्याऊं! दूध पीने वाली प्यारी बिल्ली!',
    color: '#FEF3C7',
  },
  {
    id: 'cow',
    name: 'Cow',
    nameHi: 'गाय',
    sound: 'Moo! Moo!',
    emoji: '🐄',
    desc: 'Gentle farm friend',
    speech: 'Cow says Moo! Moo! Gives healthy sweet fresh milk!',
    speechHi: 'गाय बोलती है मू-मू! मीठा और सेहतमंद दूध देती है!',
    color: '#F0FDF4',
  },
  {
    id: 'duck',
    name: 'Duck',
    nameHi: 'बतख',
    sound: 'Quack! Quack!',
    emoji: '🦆',
    desc: 'Swimming pond bird',
    speech: 'Duck says Quack! Quack! Paddling happily across the blue water!',
    speechHi: 'बतख बोलती है क्वैक-क्वैक! पानी में तैरती नन्ही बतख!',
    color: '#FDF2F8',
  },
  {
    id: 'frog',
    name: 'Frog',
    nameHi: 'मेंढक',
    sound: 'Croak! Croak!',
    emoji: '🐸',
    desc: 'Green hopping frog',
    speech: 'Frog says Croak! Croak! Hopping high on green water lilies!',
    speechHi: 'मेंढक बोलता है क्रोक-क्रोक यानी टर्र-टर्र! पानी में कूदता मेंढक!',
    color: '#ECFDF5',
  },
];

interface BodyPartWord {
  id: string;
  part: string;
  partHi: string;
  emoji: string;
  action: string;
  actionHi: string;
  speech: string;
  speechHi: string;
  color: string;
}

const BODY_PARTS: BodyPartWord[] = [
  {
    id: 'nose',
    part: 'Nose',
    partHi: 'नाक',
    emoji: '👃',
    action: 'We SMELL roses!',
    actionHi: 'हम खुशबू सूंघते हैं!',
    speech: 'We smell fresh flowers and yummy cookies with our Nose!',
    speechHi: 'हम अपनी नाक से फूलों की खुशबू सूंघते हैं!',
    color: '#FDF2F8',
  },
  {
    id: 'eyes',
    part: 'Eyes',
    partHi: 'आँखें',
    emoji: '👀',
    action: 'We SEE colors!',
    actionHi: 'हम रंग देखते हैं!',
    speech: 'We see colorful books and sunshine with our two Eyes!',
    speechHi: 'हम अपनी आँखों से सुंदर किताबें और दुनिया देखते हैं!',
    color: '#EFF6FF',
  },
  {
    id: 'ears',
    part: 'Ears',
    partHi: 'कान',
    emoji: '👂',
    action: 'We HEAR sounds!',
    actionHi: 'हम आवाज़ें सुनते हैं!',
    speech: 'We hear sweet music and ringing bells with our two Ears!',
    speechHi: 'हम अपने कानों से मीठा संगीत और घंटियाँ सुनते हैं!',
    color: '#FEF3C7',
  },
  {
    id: 'mouth',
    part: 'Mouth',
    partHi: 'मुँह / जीभ',
    emoji: '👄',
    action: 'We TASTE & smile!',
    actionHi: 'हम स्वाद चखते हैं!',
    speech: 'We taste sweet ice cream and smile happily with our Mouth!',
    speechHi: 'हम स्वादिष्ट भोजन का स्वाद चखते हैं और मुस्कुराते हैं!',
    color: '#FEE2E2',
  },
  {
    id: 'hands',
    part: 'Hands',
    partHi: 'हाथ',
    emoji: '🖐️',
    action: 'We CLAP & hold!',
    actionHi: 'हम ताली बजाते हैं!',
    speech: 'We clap together and hold toys with our two Hands!',
    speechHi: 'हम अपने दोनों हाथों से ताली बजाते हैं और खिलौने पकड़ते हैं!',
    color: '#F0FDF4',
  },
  {
    id: 'feet',
    part: 'Feet',
    partHi: 'पैर',
    emoji: '🦶',
    action: 'We RUN & jump!',
    actionHi: 'हम दौड़ते और कूदते हैं!',
    speech: 'We walk, run, and hop around with our two Feet!',
    speechHi: 'हम अपने दोनों पैरों से चलते, दौड़ते और कूदते हैं!',
    color: '#FFF7ED',
  },
];

interface QuizItem {
  id: number;
  prompt: string;
  promptHi: string;
  speech: string;
  speechHi: string;
  correctAnswer: string;
  celebrationSpeech: string;
  celebrationSpeechHi: string;
  options: { label: string; labelHi: string; emoji: string; color: string }[];
}

// 🎯 SAFARI SOUND QUIZ (Child picks animal based on sounds like "Roar! Roar!")
const SAFARI_SOUND_QUIZ: QuizItem[] = [
  {
    id: 1,
    prompt: 'Which animal friend says ROAR! ROAR! 🦁?',
    promptHi: 'कौन सा जानवर दहाड़ (ROAR! ROAR!) लगाता है? 🦁',
    speech: 'Which animal says Roar! Roar!? Listen and pick the King of the Jungle!',
    speechHi: 'कौन सा जानवर दहाड़ता है, रोअर-रोअर? सही जानवर पहचानो!',
    correctAnswer: 'Lion',
    celebrationSpeech: 'Mighty Roar! The Lion is the King of the Jungle!',
    celebrationSpeechHi: 'शाबाश! शेर ही जंगल का राजा होता है!',
    options: [
      { label: 'Lion', labelHi: 'शेर', emoji: '🦁', color: '#FFF7ED' },
      { label: 'Cow', labelHi: 'गाय', emoji: '🐄', color: '#F0FDF4' },
      { label: 'Dog', labelHi: 'कुत्ता', emoji: '🐕', color: '#EFF6FF' },
    ],
  },
  {
    id: 2,
    prompt: 'Which animal friend says WOOF! WOOF! 🐶?',
    promptHi: 'कौन सा वफादार दोस्त भौं-भौं (WOOF! 🐶) करता है?',
    speech: 'Which animal friend says Woof! Woof!? Listen and pick the faithful friend!',
    speechHi: 'कौन सा जानवर वुफ-वुफ बोलता है? सही दोस्त पहचानो!',
    correctAnswer: 'Dog',
    celebrationSpeech: 'Woof Woof! The playful dog is a loyal friend!',
    celebrationSpeechHi: 'बिल्कुल सही! कुत्ता ही वफादार दोस्त है!',
    options: [
      { label: 'Dog', labelHi: 'कुत्ता', emoji: '🐕', color: '#EFF6FF' },
      { label: 'Cat', labelHi: 'बिल्ली', emoji: '🐱', color: '#FEF3C7' },
      { label: 'Duck', labelHi: 'बतख', emoji: '🦆', color: '#FDF2F8' },
    ],
  },
  {
    id: 3,
    prompt: 'Which cute pet says MEOW! MEOW! 🐱?',
    promptHi: 'प्यारी म्याऊं-म्याऊं (MEOW! 🐱) कौन बोलती है?',
    speech: 'Which cute animal friend says Meow! Meow!? Listen and choose!',
    speechHi: 'म्याऊं-म्याऊं कौन बोलती है? सही जानवर चुनो!',
    correctAnswer: 'Cat',
    celebrationSpeech: 'Purr purr! The sweet little cat loves warm milk!',
    celebrationSpeechHi: 'शाबाश! प्यारी बिल्ली ही म्याऊं-म्याऊं करती है!',
    options: [
      { label: 'Cat', labelHi: 'बिल्ली', emoji: '🐱', color: '#FEF3C7' },
      { label: 'Cow', labelHi: 'गाय', emoji: '🐄', color: '#F0FDF4' },
      { label: 'Frog', labelHi: 'मेंढक', emoji: '🐸', color: '#ECFDF5' },
    ],
  },
  {
    id: 4,
    prompt: 'Which gentle farm friend says MOO! MOO! 🐄?',
    promptHi: 'मीठा दूध देने वाली कौन सी सहेली मू-मू (MOO! 🐄) बोलती है?',
    speech: 'Which gentle farm friend says Moo! Moo! and gives sweet fresh milk?',
    speechHi: 'मू-मू बोलकर मीठा दूध कौन देती है? सही सहेली पहचानो!',
    correctAnswer: 'Cow',
    celebrationSpeech: 'Moo Moo! The gentle cow gives sweet nutritious milk!',
    celebrationSpeechHi: 'बहुत बढ़िया! गौ माता हमें मीठा दूध देती है!',
    options: [
      { label: 'Cow', labelHi: 'गाय', emoji: '🐄', color: '#F0FDF4' },
      { label: 'Lion', labelHi: 'शेर', emoji: '🦁', color: '#FFF7ED' },
      { label: 'Duck', labelHi: 'बतख', emoji: '🦆', color: '#FDF2F8' },
    ],
  },
  {
    id: 5,
    prompt: 'Which swimming bird says QUACK! QUACK! 🦆?',
    promptHi: 'पानी में तैरते हुए क्वैक-क्वैक (QUACK! 🦆) कौन बोलती है?',
    speech: 'Which bird says Quack! Quack! while paddling in the pond?',
    speechHi: 'तालाब में तैरते हुए क्वैक-क्वैक कौन बोलती है? सही पक्षी चुनो!',
    correctAnswer: 'Duck',
    celebrationSpeech: 'Quack Quack! The happy duck loves paddling in water!',
    celebrationSpeechHi: 'शाबाश! बतख ही तालाब में क्वैक-क्वैक करती है!',
    options: [
      { label: 'Duck', labelHi: 'बतख', emoji: '🦆', color: '#FDF2F8' },
      { label: 'Frog', labelHi: 'मेंढक', emoji: '🐸', color: '#ECFDF5' },
      { label: 'Cat', labelHi: 'बिल्ली', emoji: '🐱', color: '#FEF3C7' },
    ],
  },
  {
    id: 6,
    prompt: 'Which green friend says CROAK! CROAK! 🐸?',
    promptHi: 'कूदते हुए क्रोक-क्रोक या टर्र-टर्र (CROAK! 🐸) कौन बोलता है?',
    speech: 'Which hopping green friend says Croak! Croak! on water lilies?',
    speechHi: 'कूदते हुए क्रोक-क्रोक कौन बोलता है? सही जीव चुनो!',
    correctAnswer: 'Frog',
    celebrationSpeech: 'Croak Croak! The little green frog hops high!',
    celebrationSpeechHi: 'वाह! मेंढक ही पानी और जमीन पर टर्र-टर्र करता है!',
    options: [
      { label: 'Frog', labelHi: 'मेंढक', emoji: '🐸', color: '#ECFDF5' },
      { label: 'Dog', labelHi: 'कुत्ता', emoji: '🐕', color: '#EFF6FF' },
      { label: 'Lion', labelHi: 'शेर', emoji: '🦁', color: '#FFF7ED' },
    ],
  },
];

// 👃 SENSES QUIZ (Child picks body part from images based on senses/actions)
const SENSES_QUIZ: QuizItem[] = [
  {
    id: 1,
    prompt: 'From which body part do we SMELL sweet flowers? 👃',
    promptHi: 'हम किस अंग से खुशबू सूंघते हैं? 👃',
    speech: 'From which body part do we smell? Look at the pictures and choose!',
    speechHi: 'हम किस अंग से सूंघते हैं? चित्रों में से सही अंग चुनो!',
    correctAnswer: 'Nose',
    celebrationSpeech: 'Super! We smell sweet roses and cookies with our Nose!',
    celebrationSpeechHi: 'बिल्कुल सही! हम नाक से खुशबू सूंघते हैं!',
    options: [
      { label: 'Nose', labelHi: 'नाक', emoji: '👃', color: '#FDF2F8' },
      { label: 'Eyes', labelHi: 'आँखें', emoji: '👀', color: '#EFF6FF' },
      { label: 'Ears', labelHi: 'कान', emoji: '👂', color: '#FEF3C7' },
    ],
  },
  {
    id: 2,
    prompt: 'Which body part do we SEE colorful rainbows with? 👀',
    promptHi: 'हम किस अंग से सुंदर इंद्रधनुष और दुनिया देखते हैं? 👀',
    speech: 'Which body part helps us see? Look at the pictures and choose!',
    speechHi: 'हम किस अंग से दुनिया देखते हैं? चित्रों में से सही अंग चुनो!',
    correctAnswer: 'Eyes',
    celebrationSpeech: 'Wonderful! We see bright colors and sunny skies with our Eyes!',
    celebrationSpeechHi: 'शाबाश! हम अपनी आँखों से सब कुछ देखते हैं!',
    options: [
      { label: 'Eyes', labelHi: 'आँखें', emoji: '👀', color: '#EFF6FF' },
      { label: 'Ears', labelHi: 'कान', emoji: '👂', color: '#FEF3C7' },
      { label: 'Hands', labelHi: 'हाथ', emoji: '🖐️', color: '#F0FDF4' },
    ],
  },
  {
    id: 3,
    prompt: 'Which body part helps us HEAR music and ringing bells? 👂',
    promptHi: 'हम किस अंग से मधुर घंटी और संगीत सुनते हैं? 👂',
    speech: 'Which body part helps us hear songs and sounds? Find the right picture!',
    speechHi: 'हम किस अंग से आवाज़ें सुनते हैं? सही अंग चुनो!',
    correctAnswer: 'Ears',
    celebrationSpeech: 'Great listening! We hear sweet music with our two Ears!',
    celebrationSpeechHi: 'बहुत बढ़िया! हम अपने कानों से मीठी आवाज़ें सुनते हैं!',
    options: [
      { label: 'Ears', labelHi: 'कान', emoji: '👂', color: '#FEF3C7' },
      { label: 'Nose', labelHi: 'नाक', emoji: '👃', color: '#FDF2F8' },
      { label: 'Feet', labelHi: 'पैर', emoji: '🦶', color: '#FFF7ED' },
    ],
  },
  {
    id: 4,
    prompt: 'Which body part helps us TASTE sweet ice cream and fruits? 👅',
    promptHi: 'हम किस अंग से स्वादिष्ट आइसक्रीम का स्वाद चखते हैं? 👅',
    speech: 'Which body part helps us taste yummy treats? Look and choose!',
    speechHi: 'हम किस अंग से खाने का स्वाद चखते हैं? सही चित्र चुनो!',
    correctAnswer: 'Mouth',
    celebrationSpeech: 'Yummy! We taste delicious food and smile with our Mouth!',
    celebrationSpeechHi: 'वाह! मुँह और जीभ से हम स्वाद चखते हैं!',
    options: [
      { label: 'Mouth', labelHi: 'मुँह', emoji: '👄', color: '#FEE2E2' },
      { label: 'Eyes', labelHi: 'आँखें', emoji: '👀', color: '#EFF6FF' },
      { label: 'Ears', labelHi: 'कान', emoji: '👂', color: '#FEF3C7' },
    ],
  },
  {
    id: 5,
    prompt: 'Which body part do we CLAP together and hold toys with? 🖐️',
    promptHi: 'हम किन अंगों से ताली बजाते हैं और खिलौने पकड़ते हैं? 🖐️',
    speech: 'Which body part do we use to clap together? Choose the picture!',
    speechHi: 'हम किन अंगों से ताली बजाते हैं? सही चित्र चुनो!',
    correctAnswer: 'Hands',
    celebrationSpeech: 'Clap clap! We hold toys and clap happily with our two Hands!',
    celebrationSpeechHi: 'ताली बजाओ! हम हाथों से ताली बजाते हैं!',
    options: [
      { label: 'Hands', labelHi: 'हाथ', emoji: '🖐️', color: '#F0FDF4' },
      { label: 'Feet', labelHi: 'पैर', emoji: '🦶', color: '#FFF7ED' },
      { label: 'Nose', labelHi: 'नाक', emoji: '👃', color: '#FDF2F8' },
    ],
  },
  {
    id: 6,
    prompt: 'Which body part helps us RUN, hop, and jump? 🦶',
    promptHi: 'हम किन अंगों से दौड़ते, कूदते और चलते हैं? 🦶',
    speech: 'Which body part helps us run and jump around? Choose the picture!',
    speechHi: 'हम किन अंगों से दौड़ते और कूदते हैं? सही चित्र चुनो!',
    correctAnswer: 'Feet',
    celebrationSpeech: 'Hop hop! We run, jump, and dance with our two Feet!',
    celebrationSpeechHi: 'शाबाश! पैरों से हम चलते और दौड़ते हैं!',
    options: [
      { label: 'Feet', labelHi: 'पैर', emoji: '🦶', color: '#FFF7ED' },
      { label: 'Ears', labelHi: 'कान', emoji: '👂', color: '#FEF3C7' },
      { label: 'Hands', labelHi: 'हाथ', emoji: '🖐️', color: '#F0FDF4' },
    ],
  },
];

// 🎯 WORD MISSIONS (Master deck: Zero giveaways in prompts or speech!)
const VOCAB_MISSIONS: QuizItem[] = [
  {
    id: 1,
    prompt: 'Which animal friend says WOOF! WOOF! 🐶?',
    promptHi: 'कौन सा वफादार दोस्त भौं-भौं (WOOF! 🐶) बोलता है?',
    speech: 'Which animal friend says Woof! Woof!? Listen and pick the faithful friend!',
    speechHi: 'कौन सा वफादार जानवर वुफ-वुफ बोलता है? सही दोस्त पहचानो!',
    correctAnswer: 'Dog',
    celebrationSpeech: 'Fantastic! The dog barks Woof Woof and wags his tail!',
    celebrationSpeechHi: 'शाबाश! कुत्ता ही वुफ-वुफ करता है!',
    options: [
      { label: 'Dog', labelHi: 'कुत्ता', emoji: '🐕', color: '#EFF6FF' },
      { label: 'Cat', labelHi: 'बिल्ली', emoji: '🐱', color: '#FEF3C7' },
      { label: 'Duck', labelHi: 'बतख', emoji: '🦆', color: '#FDF2F8' },
    ],
  },
  {
    id: 2,
    prompt: 'From which body part do we SMELL sweet flowers? 👃',
    promptHi: 'हम किस अंग से खुशबू सूंघते हैं? 👃',
    speech: 'From which body part do we smell? Look at the pictures and choose!',
    speechHi: 'हम किस अंग से सूंघते हैं? चित्रों में से सही अंग चुनो!',
    correctAnswer: 'Nose',
    celebrationSpeech: 'Wonderful! We smell sweet roses with our Nose!',
    celebrationSpeechHi: 'शाबाश! नाक से हम खुशबू सूंघते हैं!',
    options: [
      { label: 'Nose', labelHi: 'नाक', emoji: '👃', color: '#FDF2F8' },
      { label: 'Eyes', labelHi: 'आँखें', emoji: '👀', color: '#EFF6FF' },
      { label: 'Ears', labelHi: 'कान', emoji: '👂', color: '#FEF3C7' },
    ],
  },
  {
    id: 3,
    prompt: 'Which animal friend says ROAR! ROAR! 🦁?',
    promptHi: 'कौन सा जानवर दहाड़ (ROAR! ROAR!) लगाता है? 🦁',
    speech: 'Which animal says Roar! Roar!? Listen and pick the King of the Jungle!',
    speechHi: 'कौन सा जानवर दहाड़ता है, रोअर-रोअर? सही जानवर पहचानो!',
    correctAnswer: 'Lion',
    celebrationSpeech: 'Mighty Roar! Lion is the King of the Jungle!',
    celebrationSpeechHi: 'शाबाश! शेर ही दहाड़ लगाता है!',
    options: [
      { label: 'Lion', labelHi: 'शेर', emoji: '🦁', color: '#FFF7ED' },
      { label: 'Cow', labelHi: 'गाय', emoji: '🐄', color: '#F0FDF4' },
      { label: 'Duck', labelHi: 'बतख', emoji: '🦆', color: '#FDF2F8' },
    ],
  },
  {
    id: 4,
    prompt: 'Which body part do we SEE colorful books and rainbows with? 👀',
    promptHi: 'हम किस अंग से सुंदर इंद्रधनुष और दुनिया देखते हैं? 👀',
    speech: 'Which body part helps us see colorful things? Look at the pictures and choose!',
    speechHi: 'हम किस अंग से दुनिया देखते हैं? सही चित्र चुनो!',
    correctAnswer: 'Eyes',
    celebrationSpeech: 'Brilliant! We see colorful worlds with our two Eyes!',
    celebrationSpeechHi: 'बहुत बढ़िया! आँखों से हम दुनिया देखते हैं!',
    options: [
      { label: 'Eyes', labelHi: 'आँखें', emoji: '👀', color: '#EFF6FF' },
      { label: 'Ears', labelHi: 'कान', emoji: '👂', color: '#FEF3C7' },
      { label: 'Hands', labelHi: 'हाथ', emoji: '🖐️', color: '#F0FDF4' },
    ],
  },
  {
    id: 5,
    prompt: 'What magic polite word do we say for a wonderful gift? 🎁',
    promptHi: 'उपहार मिलने पर कौन सा जादुई शिष्टाचार शब्द बोलते हैं? 🎁',
    speech: 'When someone gives you a wonderful gift, what polite word do you say?',
    speechHi: 'जब कोई प्यारा उपहार दे, तब हम क्या बोलते हैं?',
    correctAnswer: 'Thank You',
    celebrationSpeech: 'Golden Manners! Always say Thank You for every kindness!',
    celebrationSpeechHi: 'अति उत्तम! हमेशा धन्यवाद (Thank You) बोलना चाहिए!',
    options: [
      { label: 'Thank You', labelHi: 'थैंक यू', emoji: '✨', color: '#FEF3C7' },
      { label: 'Please', labelHi: 'प्लीज़', emoji: '🪄', color: '#F0FDF4' },
      { label: 'Sorry', labelHi: 'सॉरी', emoji: '🌸', color: '#FEE2E2' },
    ],
  },
  {
    id: 6,
    prompt: 'Which body part do we CLAP together when we are happy? 👏',
    promptHi: 'खुश होने पर हम किन अंगों से ताली बजाते हैं? 👏',
    speech: 'Which body part do we clap together to make a happy sound?',
    speechHi: 'हम किन अंगों से ताली बजाते हैं? सही चित्र चुनो!',
    correctAnswer: 'Hands',
    celebrationSpeech: 'Clap Clap! We clap together with our two Hands!',
    celebrationSpeechHi: 'ताली बजाओ! हाथों से हम ताली बजाते हैं!',
    options: [
      { label: 'Hands', labelHi: 'हाथ', emoji: '🖐️', color: '#F0FDF4' },
      { label: 'Feet', labelHi: 'पैर', emoji: '🦶', color: '#FFF7ED' },
      { label: 'Ears', labelHi: 'कान', emoji: '👂', color: '#FEF3C7' },
    ],
  },
  {
    id: 7,
    prompt: 'Which cute animal friend says MEOW! MEOW! 🐱?',
    promptHi: 'प्यारी म्याऊं-म्याऊं (MEOW! 🐱) कौन बोलती है?',
    speech: 'Which cute animal friend says Meow! Meow!? Listen and choose!',
    speechHi: 'म्याऊं-म्याऊं कौन बोलती है? सही जानवर चुनो!',
    correctAnswer: 'Cat',
    celebrationSpeech: 'Meow Meow! The sweet cat purrs gently!',
    celebrationSpeechHi: 'शाबाश! बिल्ली ही म्याऊं-म्याऊं करती है!',
    options: [
      { label: 'Cat', labelHi: 'बिल्ली', emoji: '🐱', color: '#FEF3C7' },
      { label: 'Cow', labelHi: 'गाय', emoji: '🐄', color: '#F0FDF4' },
      { label: 'Lion', labelHi: 'शेर', emoji: '🦁', color: '#FFF7ED' },
    ],
  },
  {
    id: 8,
    prompt: 'Which body part helps us HEAR sweet music and ringing bells? 👂',
    promptHi: 'हम किस अंग से मधुर घंटी और संगीत सुनते हैं? 👂',
    speech: 'Which body part helps us hear songs and sounds? Find the right picture!',
    speechHi: 'हम किस अंग से आवाज़ें सुनते हैं? सही अंग चुनो!',
    correctAnswer: 'Ears',
    celebrationSpeech: 'Super Listening! We hear music with our two Ears!',
    celebrationSpeechHi: 'शाबाश! हम अपने कानों से सुनते हैं!',
    options: [
      { label: 'Ears', labelHi: 'कान', emoji: '👂', color: '#FEF3C7' },
      { label: 'Mouth', labelHi: 'मुँह', emoji: '👄', color: '#FEE2E2' },
      { label: 'Feet', labelHi: 'पैर', emoji: '🦶', color: '#FFF7ED' },
    ],
  },
];

export const EnglishWordsVocabularyLabModal: React.FC<EnglishWordsVocabularyLabModalProps> = ({
  visible,
  onClose,
  activeLang = 'en',
}) => {
  const { addStars, addReward } = useUserStore();
  const [activeTab, setActiveTab] = useState<'animals' | 'body' | 'missions'>('animals');

  // Tab 1 Animal state
  const [selectedAnimal, setSelectedAnimal] = useState<AnimalWord>(ANIMALS_LIST[0]);
  const [animalSubMode, setAnimalSubMode] = useState<'explore' | 'quiz'>('explore');
  const [animalQuizIdx, setAnimalQuizIdx] = useState(0);
  const [animalQuizScore, setAnimalQuizScore] = useState(0);
  const [isAnimalQuizComplete, setIsAnimalQuizComplete] = useState(false);
  const [animalFeedback, setAnimalFeedback] = useState<string | null>(null);

  // Tab 2 Body Parts & Senses state
  const [selectedBodyPart, setSelectedBodyPart] = useState<BodyPartWord>(BODY_PARTS[0]);
  const [bodySubMode, setBodySubMode] = useState<'explore' | 'quiz'>('explore');
  const [sensesQuizIdx, setSensesQuizIdx] = useState(0);
  const [sensesQuizScore, setSensesQuizScore] = useState(0);
  const [isSensesQuizComplete, setIsSensesQuizComplete] = useState(false);
  const [sensesFeedback, setSensesFeedback] = useState<string | null>(null);

  // Tab 3 Word Missions state
  const [missionIdx, setMissionIdx] = useState(0);
  const [missionScore, setMissionScore] = useState(0);
  const [isMissionComplete, setIsMissionComplete] = useState(false);
  const [feedbackMsg, setFeedbackMsg] = useState<string | null>(null);

  const bounceAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (visible) {
      triggerHaptic('light');
      handleSelectAnimal(ANIMALS_LIST[0], true);
    } else {
      stopSpeaking();
    }
  }, [visible]);

  // Sub-mode switchers
  const handleAnimalSubModeChange = (mode: 'explore' | 'quiz') => {
    triggerHaptic('light');
    setAnimalSubMode(mode);
    if (mode === 'explore') {
      stopSpeaking();
    } else {
      speakText(
        activeLang === 'hi'
          ? SAFARI_SOUND_QUIZ[animalQuizIdx].speechHi
          : SAFARI_SOUND_QUIZ[animalQuizIdx].speech
      );
    }
  };

  const handleBodySubModeChange = (mode: 'explore' | 'quiz') => {
    triggerHaptic('light');
    setBodySubMode(mode);
    if (mode === 'explore') {
      stopSpeaking();
    } else {
      speakText(
        activeLang === 'hi'
          ? SENSES_QUIZ[sensesQuizIdx].speechHi
          : SENSES_QUIZ[sensesQuizIdx].speech
      );
    }
  };
  const handleSelectAnimal = (item: AnimalWord, autoSpeak = true) => {
    setSelectedAnimal(item);
    triggerHaptic('medium');
    soundManager.playPop();

    Animated.sequence([
      Animated.timing(bounceAnim, { toValue: 1.15, duration: 120, useNativeDriver: true }),
      Animated.timing(bounceAnim, { toValue: 1.0, duration: 120, useNativeDriver: true }),
    ]).start();

    if (autoSpeak) {
      speakText(activeLang === 'hi' ? item.speechHi : item.speech);
    }
  };

  // Body Part Explorer Tap
  const handleSelectBodyPart = (item: BodyPartWord) => {
    setSelectedBodyPart(item);
    triggerHaptic('medium');
    soundManager.playBubblePop();
    speakText(activeLang === 'hi' ? item.speechHi : item.speech);
  };

  // 🦁 Animal Sound Quiz Handler
  const handleAnimalQuizAnswer = (answer: string) => {
    if (animalFeedback) return;
    const q = SAFARI_SOUND_QUIZ[animalQuizIdx];

    if (answer === q.correctAnswer) {
      soundManager.playCorrect();
      triggerHaptic('success');
      const nextScore = animalQuizScore + 1;
      setAnimalQuizScore(nextScore);
      setAnimalFeedback(activeLang === 'hi' ? 'शाबाश! बिल्कुल सही! 🎉' : 'FANTASTIC! CORRECT! 🎉');
      speakText(activeLang === 'hi' ? q.celebrationSpeechHi : q.celebrationSpeech);
      addStars(2);
      addReward({ coins: 10 });

      setTimeout(() => {
        setAnimalFeedback(null);
        const next = animalQuizIdx + 1;
        if (next >= SAFARI_SOUND_QUIZ.length) {
          setIsAnimalQuizComplete(true);
          soundManager.playFanfare();
        } else {
          setAnimalQuizIdx(next);
          speakText(activeLang === 'hi' ? SAFARI_SOUND_QUIZ[next].speechHi : SAFARI_SOUND_QUIZ[next].speech);
        }
      }, 1400);
    } else {
      soundManager.playIncorrect();
      triggerHaptic('warning');
      setAnimalFeedback(activeLang === 'hi' ? 'ध्यान से सुनो! फिर से कोशिश करो 👂' : 'Listen carefully! Try again 👂');
      speakText(activeLang === 'hi' ? 'फिर से ध्यान से सुनो!' : 'Listen carefully again!');
      setTimeout(() => setAnimalFeedback(null), 1400);
    }
  };

  const resetAnimalQuiz = () => {
    setAnimalQuizIdx(0);
    setAnimalQuizScore(0);
    setIsAnimalQuizComplete(false);
    setAnimalFeedback(null);
    speakText(activeLang === 'hi' ? SAFARI_SOUND_QUIZ[0].speechHi : SAFARI_SOUND_QUIZ[0].speech);
  };

  // 👃 Senses Quiz Handler
  const handleSensesQuizAnswer = (answer: string) => {
    if (sensesFeedback) return;
    const q = SENSES_QUIZ[sensesQuizIdx];

    if (answer === q.correctAnswer) {
      soundManager.playCorrect();
      triggerHaptic('success');
      const nextScore = sensesQuizScore + 1;
      setSensesQuizScore(nextScore);
      setSensesFeedback(activeLang === 'hi' ? 'शाबाश! सही अंग पहचाना! 🌟' : 'PERFECT! CORRECT BODY PART! 🌟');
      speakText(activeLang === 'hi' ? q.celebrationSpeechHi : q.celebrationSpeech);
      addStars(2);
      addReward({ coins: 10 });

      setTimeout(() => {
        setSensesFeedback(null);
        const next = sensesQuizIdx + 1;
        if (next >= SENSES_QUIZ.length) {
          setIsSensesQuizComplete(true);
          soundManager.playFanfare();
        } else {
          setSensesQuizIdx(next);
          speakText(activeLang === 'hi' ? SENSES_QUIZ[next].speechHi : SENSES_QUIZ[next].speech);
        }
      }, 1400);
    } else {
      soundManager.playIncorrect();
      triggerHaptic('warning');
      setSensesFeedback(activeLang === 'hi' ? 'चित्रों को ध्यान से देखो 👀' : 'Look at the pictures carefully 👀');
      speakText(activeLang === 'hi' ? 'चित्रों को ध्यान से देखो!' : 'Look at the pictures again!');
      setTimeout(() => setSensesFeedback(null), 1400);
    }
  };

  const resetSensesQuiz = () => {
    setSensesQuizIdx(0);
    setSensesQuizScore(0);
    setIsSensesQuizComplete(false);
    setSensesFeedback(null);
    speakText(activeLang === 'hi' ? SENSES_QUIZ[0].speechHi : SENSES_QUIZ[0].speech);
  };

  // 🎯 Master Word Mission Answer Handler
  const handleMissionAnswer = (answer: string) => {
    if (feedbackMsg) return;
    const mission = VOCAB_MISSIONS[missionIdx];

    if (answer === mission.correctAnswer) {
      soundManager.playCorrect();
      triggerHaptic('success');
      const nextScore = missionScore + 10;
      setMissionScore(nextScore);
      setFeedbackMsg(activeLang === 'hi' ? 'शाबाश! बिल्कुल सही! 🎉' : 'FANTASTIC! CORRECT! 🎉');
      speakText(activeLang === 'hi' ? mission.celebrationSpeechHi : mission.celebrationSpeech);

      setTimeout(() => {
        setFeedbackMsg(null);
        const next = missionIdx + 1;
        if (next >= VOCAB_MISSIONS.length) {
          finishMissions(nextScore);
        } else {
          setMissionIdx(next);
          speakText(activeLang === 'hi' ? VOCAB_MISSIONS[next].speechHi : VOCAB_MISSIONS[next].speech);
        }
      }, 1400);
    } else {
      soundManager.playIncorrect();
      triggerHaptic('warning');
      setFeedbackMsg(activeLang === 'hi' ? 'ध्यान से सुनो! फिर से कोशिश करो' : 'Try again! Listen carefully');
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
    speakText(activeLang === 'hi' ? VOCAB_MISSIONS[0].speechHi : VOCAB_MISSIONS[0].speech);
  };

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.labContainer}>
          {/* Header Bar */}
          <View style={styles.hudHeader}>
            <View style={styles.headerLeft}>
              <View style={styles.labBadgePill}>
                <Text style={styles.labBadgeText}>🦁 ENGLISH VOCABULARY LAB</Text>
              </View>
              <Text style={styles.labTitle}>
                {activeLang === 'hi' ? 'एनिमल सफारी व दैनिक शब्द लैब' : 'Animal Safari & Everyday Words Lab'}
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
              style={[styles.tabButton, activeTab === 'animals' && styles.tabButtonActive]}
              onPress={() => {
                stopSpeaking();
                setActiveTab('animals');
              }}
            >
              <Text style={[styles.tabText, activeTab === 'animals' && styles.tabTextActive]}>
                🦁 Animal Safari
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.tabButton, activeTab === 'body' && styles.tabButtonActive]}
              onPress={() => {
                stopSpeaking();
                setActiveTab('body');
              }}
            >
              <Text style={[styles.tabText, activeTab === 'body' && styles.tabTextActive]}>
                👀 Body & Senses
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.tabButton, activeTab === 'missions' && styles.tabButtonActive]}
              onPress={() => {
                stopSpeaking();
                setActiveTab('missions');
                speakText(activeLang === 'hi' ? VOCAB_MISSIONS[missionIdx].speechHi : VOCAB_MISSIONS[missionIdx].speech);
              }}
            >
              <Text style={[styles.tabText, activeTab === 'missions' && styles.tabTextActive]}>
                🎯 Word Missions
              </Text>
            </TouchableOpacity>
          </View>

          {/* ========================================================================= */}
          {/* TAB 1: ANIMAL SAFARI (Soundboard + Guess The Sound Quiz) */}
          {/* ========================================================================= */}
          {activeTab === 'animals' && (
            <ScrollView
              style={styles.tabScrollView}
              contentContainerStyle={styles.tabContent}
              showsVerticalScrollIndicator={false}
            >
              {/* Sub-mode Segmented Switcher */}
              <View style={styles.subModeRow}>
                <TouchableOpacity
                  style={[styles.subModePill, animalSubMode === 'explore' && styles.subModePillActive]}
                  onPress={() => handleAnimalSubModeChange('explore')}
                >
                  <Text style={[styles.subModePillText, animalSubMode === 'explore' && styles.subModePillTextActive]}>
                    🔊 {activeLang === 'hi' ? 'बोलियाँ सुनें' : 'Soundboard'}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.subModePill, animalSubMode === 'quiz' && styles.subModePillActive]}
                  onPress={() => handleAnimalSubModeChange('quiz')}
                >
                  <Text style={[styles.subModePillText, animalSubMode === 'quiz' && styles.subModePillTextActive]}>
                    🎯 {activeLang === 'hi' ? 'बोली पहचान क्विज़' : 'Sound Quiz'} ({SAFARI_SOUND_QUIZ.length})
                  </Text>
                </TouchableOpacity>
              </View>

              {/* Mode 1A: Animal Soundboard Explorer */}
              {animalSubMode === 'explore' && (
                <>
                  <View style={styles.heroAnimalCard}>
                    <Animated.View style={[styles.heroEmojiCircle, { transform: [{ scale: bounceAnim }] }]}>
                      <Text style={styles.heroEmojiText}>{selectedAnimal.emoji}</Text>
                    </Animated.View>
                    <Text style={styles.heroNameText}>
                      {selectedAnimal.name} {activeLang === 'hi' ? `(${selectedAnimal.nameHi})` : ''}
                    </Text>
                    <View style={styles.heroSoundBadge}>
                      <Text style={styles.heroSoundBadgeText}>Sound: {selectedAnimal.sound}</Text>
                    </View>
                    <Text style={styles.heroDescText}>
                      {activeLang === 'hi' ? selectedAnimal.speechHi : selectedAnimal.speech}
                    </Text>
                    <SpeakerButton
                      textToSpeak={activeLang === 'hi' ? selectedAnimal.speechHi : selectedAnimal.speech}
                      size="pill"
                      showLabel
                      label={activeLang === 'hi' ? 'आवाज़ सुनें' : 'Listen Sound'}
                      activeLang={activeLang}
                    />
                  </View>

                  <Text style={styles.sectionHeader}>
                    {activeLang === 'hi'
                      ? '👇 किसी भी जानवर पर टैप करें और उसकी आवाज़ सुनें:'
                      : '👇 Tap each animal to hear its call:'}
                  </Text>

                  <View style={styles.animalGrid}>
                    {ANIMALS_LIST.map((item) => {
                      const isCur = item.id === selectedAnimal.id;
                      return (
                        <TouchableOpacity
                          key={item.id}
                          style={[
                            styles.animalTile,
                            { backgroundColor: item.color },
                            isCur && styles.animalTileActive,
                          ]}
                          activeOpacity={0.82}
                          onPress={() => handleSelectAnimal(item)}
                        >
                          <Text style={styles.animalTileEmoji}>{item.emoji}</Text>
                          <Text style={styles.animalTileName}>
                            {activeLang === 'hi' ? item.nameHi : item.name}
                          </Text>
                          <Text style={styles.animalTileSound}>{item.sound}</Text>
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                </>
              )}

              {/* Mode 1B: Safari Sound Quiz */}
              {animalSubMode === 'quiz' && !isAnimalQuizComplete && (
                <View style={styles.quizWrapper}>
                  <View style={styles.missionCard}>
                    <View style={styles.missionHeaderRow}>
                      <View style={styles.missionBadgePill}>
                        <Text style={styles.missionBadgeText}>
                          {activeLang === 'hi' ? 'सफारी प्रश्न' : 'Safari Challenge'} {animalQuizIdx + 1} /{' '}
                          {SAFARI_SOUND_QUIZ.length}
                        </Text>
                      </View>
                      <SpeakerButton
                        textToSpeak={
                          activeLang === 'hi'
                            ? SAFARI_SOUND_QUIZ[animalQuizIdx].speechHi
                            : SAFARI_SOUND_QUIZ[animalQuizIdx].speech
                        }
                        size="pill"
                        showLabel
                        label={activeLang === 'hi' ? 'बोली सुनें' : 'Listen Sound'}
                        activeLang={activeLang}
                      />
                    </View>

                    <Text style={styles.missionPrompt}>
                      {activeLang === 'hi'
                        ? SAFARI_SOUND_QUIZ[animalQuizIdx].promptHi
                        : SAFARI_SOUND_QUIZ[animalQuizIdx].prompt}
                    </Text>
                  </View>

                  {animalFeedback && (
                    <View style={styles.feedbackBox}>
                      <Text style={styles.feedbackText}>{animalFeedback}</Text>
                    </View>
                  )}

                  <Text style={styles.sectionHeader}>
                    {activeLang === 'hi'
                      ? '👇 सही जानवर का चित्र चुनें:'
                      : '👇 Pick the animal who makes this sound:'}
                  </Text>

                  <View style={styles.missionOptionsRow}>
                    {SAFARI_SOUND_QUIZ[animalQuizIdx].options.map((opt) => (
                      <TouchableOpacity
                        key={opt.label}
                        style={[styles.missionOptBtn, { backgroundColor: opt.color }]}
                        activeOpacity={0.82}
                        onPress={() => handleAnimalQuizAnswer(opt.label)}
                      >
                        <Text style={styles.missionOptEmoji}>{opt.emoji}</Text>
                        <Text style={styles.missionOptWord}>
                          {activeLang === 'hi' ? opt.labelHi : opt.label}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>
              )}

              {/* Animal Quiz Complete */}
              {animalSubMode === 'quiz' && isAnimalQuizComplete && (
                <View style={styles.completeContainer}>
                  <Text style={{ fontSize: 56 }}>🦁 🏆 🌟</Text>
                  <Text style={styles.completeTitle}>
                    {activeLang === 'hi' ? 'सफारी साउंड चैंपियन!' : 'SAFARI SOUND CHAMPION!'}
                  </Text>
                  <Text style={styles.completeSub}>
                    {activeLang === 'hi'
                      ? 'आपने सभी जानवरों की बोलियाँ बिल्कुल सही पहचान लीं!'
                      : 'You identified all animal sounds perfectly! Super proud of you!'}
                  </Text>
                  <View style={styles.rewardPillsRow}>
                    <View style={styles.rewardPill}>
                      <Text style={{ fontSize: 20 }}>⭐</Text>
                      <Text style={styles.rewardPillVal}>+6 Stars</Text>
                    </View>
                    <View style={styles.rewardPill}>
                      <Text style={{ fontSize: 20 }}>💰</Text>
                      <Text style={styles.rewardPillVal}>+30 Coins</Text>
                    </View>
                  </View>
                  <TouchableOpacity style={styles.completeBtn} onPress={resetAnimalQuiz}>
                    <Text style={styles.completeBtnText}>Play Again 🔄</Text>
                  </TouchableOpacity>
                </View>
              )}
            </ScrollView>
          )}

          {/* ========================================================================= */}
          {/* TAB 2: BODY & SENSES (Explorer + Senses Quiz) */}
          {/* ========================================================================= */}
          {activeTab === 'body' && (
            <ScrollView
              style={styles.tabScrollView}
              contentContainerStyle={styles.tabContent}
              showsVerticalScrollIndicator={false}
            >
              {/* Sub-mode Segmented Switcher */}
              <View style={styles.subModeRow}>
                <TouchableOpacity
                  style={[styles.subModePill, bodySubMode === 'explore' && styles.subModePillActive]}
                  onPress={() => handleBodySubModeChange('explore')}
                >
                  <Text style={[styles.subModePillText, bodySubMode === 'explore' && styles.subModePillTextActive]}>
                    🌟 {activeLang === 'hi' ? 'इंद्रियाँ जानें' : 'Senses Explorer'}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.subModePill, bodySubMode === 'quiz' && styles.subModePillActive]}
                  onPress={() => handleBodySubModeChange('quiz')}
                >
                  <Text style={[styles.subModePillText, bodySubMode === 'quiz' && styles.subModePillTextActive]}>
                    🎯 {activeLang === 'hi' ? 'अंग पहचान क्विज़' : 'Senses Quiz'} ({SENSES_QUIZ.length})
                  </Text>
                </TouchableOpacity>
              </View>

              {/* Mode 2A: Body Explorer */}
              {bodySubMode === 'explore' && (
                <>
                  <View style={styles.heroAnimalCard}>
                    <Text style={{ fontSize: 52 }}>{selectedBodyPart.emoji}</Text>
                    <Text style={styles.heroNameText}>
                      {selectedBodyPart.part} {activeLang === 'hi' ? `(${selectedBodyPart.partHi})` : ''}
                    </Text>
                    <View style={[styles.heroSoundBadge, { backgroundColor: '#E0E7FF' }]}>
                      <Text style={[styles.heroSoundBadgeText, { color: '#4338CA' }]}>
                        {activeLang === 'hi' ? selectedBodyPart.actionHi : selectedBodyPart.action}
                      </Text>
                    </View>
                    <Text style={styles.heroDescText}>
                      {activeLang === 'hi' ? selectedBodyPart.speechHi : selectedBodyPart.speech}
                    </Text>
                    <SpeakerButton
                      textToSpeak={activeLang === 'hi' ? selectedBodyPart.speechHi : selectedBodyPart.speech}
                      size="pill"
                      showLabel
                      label={activeLang === 'hi' ? 'कार्य सुनें' : 'Listen Sense'}
                      activeLang={activeLang}
                    />
                  </View>

                  <Text style={styles.sectionHeader}>
                    {activeLang === 'hi'
                      ? '👇 शरीर के किसी भी अंग को छूकर उसकी इंद्रिय जानें:'
                      : '👇 Tap body parts to discover senses:'}
                  </Text>

                  <View style={styles.animalGrid}>
                    {BODY_PARTS.map((item) => {
                      const isCur = item.id === selectedBodyPart.id;
                      return (
                        <TouchableOpacity
                          key={item.id}
                          style={[
                            styles.animalTile,
                            { backgroundColor: item.color },
                            isCur && styles.animalTileActive,
                          ]}
                          activeOpacity={0.82}
                          onPress={() => handleSelectBodyPart(item)}
                        >
                          <Text style={styles.animalTileEmoji}>{item.emoji}</Text>
                          <Text style={styles.animalTileName}>
                            {activeLang === 'hi' ? item.partHi : item.part}
                          </Text>
                          <Text style={styles.animalTileSound}>
                            {activeLang === 'hi' ? item.actionHi : item.action}
                          </Text>
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                </>
              )}

              {/* Mode 2B: Senses Quiz */}
              {bodySubMode === 'quiz' && !isSensesQuizComplete && (
                <View style={styles.quizWrapper}>
                  <View style={styles.missionCard}>
                    <View style={styles.missionHeaderRow}>
                      <View style={styles.missionBadgePill}>
                        <Text style={styles.missionBadgeText}>
                          {activeLang === 'hi' ? 'इंद्रिय प्रश्न' : 'Sense Challenge'} {sensesQuizIdx + 1} /{' '}
                          {SENSES_QUIZ.length}
                        </Text>
                      </View>
                      <SpeakerButton
                        textToSpeak={
                          activeLang === 'hi'
                            ? SENSES_QUIZ[sensesQuizIdx].speechHi
                            : SENSES_QUIZ[sensesQuizIdx].speech
                        }
                        size="pill"
                        showLabel
                        label={activeLang === 'hi' ? 'प्रश्न सुनें' : 'Listen Question'}
                        activeLang={activeLang}
                      />
                    </View>

                    <Text style={styles.missionPrompt}>
                      {activeLang === 'hi'
                        ? SENSES_QUIZ[sensesQuizIdx].promptHi
                        : SENSES_QUIZ[sensesQuizIdx].prompt}
                    </Text>
                  </View>

                  {sensesFeedback && (
                    <View style={styles.feedbackBox}>
                      <Text style={styles.feedbackText}>{sensesFeedback}</Text>
                    </View>
                  )}

                  <Text style={styles.sectionHeader}>
                    {activeLang === 'hi'
                      ? '👇 सही अंग का चित्र चुनें:'
                      : '👇 Pick the correct body part image:'}
                  </Text>

                  <View style={styles.missionOptionsRow}>
                    {SENSES_QUIZ[sensesQuizIdx].options.map((opt) => (
                      <TouchableOpacity
                        key={opt.label}
                        style={[styles.missionOptBtn, { backgroundColor: opt.color }]}
                        activeOpacity={0.82}
                        onPress={() => handleSensesQuizAnswer(opt.label)}
                      >
                        <Text style={styles.missionOptEmoji}>{opt.emoji}</Text>
                        <Text style={styles.missionOptWord}>
                          {activeLang === 'hi' ? opt.labelHi : opt.label}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>
              )}

              {/* Senses Quiz Complete */}
              {bodySubMode === 'quiz' && isSensesQuizComplete && (
                <View style={styles.completeContainer}>
                  <Text style={{ fontSize: 56 }}>👃 👀 👂 🏆</Text>
                  <Text style={styles.completeTitle}>
                    {activeLang === 'hi' ? 'इंद्रिय ज्ञान चैंपियन!' : '5 SENSES CHAMPION!'}
                  </Text>
                  <Text style={styles.completeSub}>
                    {activeLang === 'hi'
                      ? 'आपने सभी अंगों और उनकी इंद्रियों को सही पहचान लिया!'
                      : 'You mastered all 5 senses and body parts! Fantastic work!'}
                  </Text>
                  <View style={styles.rewardPillsRow}>
                    <View style={styles.rewardPill}>
                      <Text style={{ fontSize: 20 }}>⭐</Text>
                      <Text style={styles.rewardPillVal}>+6 Stars</Text>
                    </View>
                    <View style={styles.rewardPill}>
                      <Text style={{ fontSize: 20 }}>💰</Text>
                      <Text style={styles.rewardPillVal}>+30 Coins</Text>
                    </View>
                  </View>
                  <TouchableOpacity style={styles.completeBtn} onPress={resetSensesQuiz}>
                    <Text style={styles.completeBtnText}>Play Again 🔄</Text>
                  </TouchableOpacity>
                </View>
              )}
            </ScrollView>
          )}

          {/* ========================================================================= */}
          {/* TAB 3: WORD MISSIONS (Master Deck - Zero Giveaways) */}
          {/* ========================================================================= */}
          {activeTab === 'missions' && !isMissionComplete && (
            <View style={styles.missionsContainer}>
              <View style={styles.missionCard}>
                <View style={styles.missionHeaderRow}>
                  <View style={styles.missionBadgePill}>
                    <Text style={styles.missionBadgeText}>
                      Mission {missionIdx + 1} of {VOCAB_MISSIONS.length}
                    </Text>
                  </View>
                  <SpeakerButton
                    textToSpeak={
                      activeLang === 'hi'
                        ? VOCAB_MISSIONS[missionIdx].speechHi
                        : VOCAB_MISSIONS[missionIdx].speech
                    }
                    size="pill"
                    showLabel
                    label={activeLang === 'hi' ? 'प्रश्न सुनें' : 'Listen Question'}
                    activeLang={activeLang}
                  />
                </View>

                <Text style={styles.missionPrompt}>
                  {activeLang === 'hi'
                    ? VOCAB_MISSIONS[missionIdx].promptHi
                    : VOCAB_MISSIONS[missionIdx].prompt}
                </Text>
              </View>

              {feedbackMsg && (
                <View style={styles.feedbackBox}>
                  <Text style={styles.feedbackText}>{feedbackMsg}</Text>
                </View>
              )}

              <View style={styles.missionOptionsRow}>
                {VOCAB_MISSIONS[missionIdx].options.map((opt) => (
                  <TouchableOpacity
                    key={opt.label}
                    style={[styles.missionOptBtn, { backgroundColor: opt.color }]}
                    activeOpacity={0.82}
                    onPress={() => handleMissionAnswer(opt.label)}
                  >
                    <Text style={styles.missionOptEmoji}>{opt.emoji}</Text>
                    <Text style={styles.missionOptWord}>
                      {activeLang === 'hi' ? opt.labelHi : opt.label}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          )}

          {/* Completed State */}
          {activeTab === 'missions' && isMissionComplete && (
            <View style={styles.completeContainer}>
              <Text style={{ fontSize: 56 }}>🏆 🌟</Text>
              <Text style={styles.completeTitle}>
                {activeLang === 'hi' ? 'शब्दावली चैंपियन! 🌟' : 'VOCABULARY CHAMPION! 🌟'}
              </Text>
              <Text style={styles.completeSub}>
                {activeLang === 'hi'
                  ? 'आपने पशु-पक्षियों, इंद्रियों और शिष्टाचार शब्दों को पूरी तरह सीख लिया!'
                  : 'You mastered animal sounds, 5 body senses, and polite magic words!'}
              </Text>

              <View style={styles.rewardPillsRow}>
                <View style={styles.rewardPill}>
                  <Text style={{ fontSize: 20 }}>⭐</Text>
                  <Text style={styles.rewardPillVal}>+8 Stars</Text>
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
    backgroundColor: '#EFF6FF',
    borderBottomWidth: 1.5,
    borderBottomColor: '#DBEAFE',
  },
  headerLeft: {
    flex: 1,
  },
  labBadgePill: {
    alignSelf: 'flex-start',
    backgroundColor: '#DBEAFE',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
    marginBottom: 4,
  },
  labBadgeText: {
    fontSize: 10,
    fontWeight: '900',
    color: '#1D4ED8',
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
    backgroundColor: '#2563EB',
    borderColor: '#1D4ED8',
  },
  tabText: {
    fontSize: 11,
    fontWeight: '800',
    color: '#475569',
  },
  tabTextActive: {
    color: '#FFFFFF',
  },
  subModeRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 12,
    backgroundColor: '#F1F5F9',
    padding: 4,
    borderRadius: 14,
  },
  subModePill: {
    flex: 1,
    paddingVertical: 6,
    borderRadius: 10,
    alignItems: 'center',
  },
  subModePillActive: {
    backgroundColor: '#FFFFFF',
    ...SHADOWS.small,
  },
  subModePillText: {
    fontSize: 11,
    fontWeight: '800',
    color: '#64748B',
  },
  subModePillTextActive: {
    color: '#1D4ED8',
    fontWeight: '900',
  },
  tabScrollView: {
    flex: 1,
  },
  tabContent: {
    padding: 16,
    paddingBottom: 24,
  },
  heroAnimalCard: {
    backgroundColor: '#F8FAFC',
    borderRadius: 22,
    padding: 16,
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    alignItems: 'center',
    marginBottom: 14,
  },
  heroEmojiCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#EFF6FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    borderWidth: 2,
    borderColor: '#BFDBFE',
  },
  heroEmojiText: {
    fontSize: 48,
  },
  heroNameText: {
    fontSize: 20,
    fontWeight: '900',
    color: '#0F172A',
  },
  heroSoundBadge: {
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    marginVertical: 6,
  },
  heroSoundBadgeText: {
    fontSize: 12,
    fontWeight: '900',
    color: '#B45309',
  },
  heroDescText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#475569',
    textAlign: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  sectionHeader: {
    fontSize: 12,
    fontWeight: '800',
    color: '#64748B',
    marginBottom: 10,
  },
  animalGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  animalTile: {
    flexBasis: '31%',
    flexGrow: 1,
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 16,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    ...SHADOWS.small,
  },
  animalTileActive: {
    borderColor: '#2563EB',
    borderWidth: 2.5,
  },
  animalTileEmoji: {
    fontSize: 32,
    marginBottom: 4,
  },
  animalTileName: {
    fontSize: 13,
    fontWeight: '900',
    color: '#0F172A',
  },
  animalTileSound: {
    fontSize: 10,
    fontWeight: '800',
    color: '#64748B',
    marginTop: 2,
  },
  quizWrapper: {
    width: '100%',
  },
  missionsContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'space-between',
  },
  missionCard: {
    backgroundColor: '#EFF6FF',
    borderRadius: 20,
    padding: 16,
    borderWidth: 1.5,
    borderColor: '#BFDBFE',
    marginBottom: 12,
  },
  missionHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  missionBadgePill: {
    backgroundColor: '#DBEAFE',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  missionBadgeText: {
    fontSize: 11,
    fontWeight: '800',
    color: '#1D4ED8',
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
    marginBottom: 12,
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
    marginTop: 8,
  },
  missionOptBtn: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    paddingVertical: 16,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#BFDBFE',
    ...SHADOWS.small,
  },
  missionOptEmoji: {
    fontSize: 36,
    marginBottom: 6,
  },
  missionOptWord: {
    fontSize: 14,
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
    backgroundColor: '#2563EB',
    borderRadius: 14,
  },
  completeBtnText: {
    color: '#FFFFFF',
    fontWeight: '900',
    fontSize: 13,
  },
});
