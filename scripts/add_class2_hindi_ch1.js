import fs from 'fs';
import path from 'path';
import XLSX from 'xlsx';
import { CLASS_2_CH1_QUESTIONS } from './generate_tracker.js';
import { CLASS_2_ENG_CH1_QUESTIONS } from './add_class2_english_ch1.js';

// 32 Grammar & General Hindi Learning Questions for Class 2 Hindi - Chapter 1 / Unit 1
export const CLASS_2_HIN_CH1_QUESTIONS = [
  {
    id: "Q_C2_H_CH1_01",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "Hindi",
    chapter: "पाठ 1: भाषा ज्ञान एवं व्याकरण (तुकांत, विलोम, लिंग, मात्राएं)",
    chapterCode: "C2_HIN_CH1",
    category: "समान तुक वाले शब्द (Rhyming Words)",
    text: "Rhyming Words in Hindi: Which word rhymes with 'चला' (Chala)?",
    text_hi: "समान तुक वाले शब्द: 'चला' शब्द से मिलता-जुलता (तुकांत) शब्द कौन सा है?",
    options: { A: "भला", B: "पानी", C: "ऊँट", D: "किताब" },
    options_hi: { A: "भला", B: "पानी", C: "ऊँट", D: "किताब" },
    correctAnswer: "A",
    guruHint: "Both words end with the sound '-ला' (चला - भला - गला).",
    guruHint_hi: "दोनों शब्दों के अंत में 'ला' की समान ध्वनि आती है (चला - भला - गला)।",
    explanation: "'चला' और 'भला' एक समान तुक वाले (तुकांत) शब्द हैं।"
  },
  {
    id: "Q_C2_H_CH1_02",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "Hindi",
    chapter: "पाठ 1: भाषा ज्ञान एवं व्याकरण (तुकांत, विलोम, लिंग, मात्राएं)",
    chapterCode: "C2_HIN_CH1",
    category: "समान तुक वाले शब्द (Rhyming Words)",
    text: "Rhyming Words: Which word rhymes with 'भालू' (Bhalu)?",
    options: { A: "बालू", B: "पेड़", C: "शेर", D: "नदी" },
    text_hi: "तुकांत शब्द: 'भालू' शब्द का समान तुक वाला शब्द कौन सा है?",
    options_hi: { A: "बालू", B: "पेड़", C: "शेर", D: "नदी" },
    correctAnswer: "A",
    guruHint: "Both words end with the sound '-लू' (भालू - बालू - चालू).",
    guruHint_hi: "दोनों शब्दों के अंत में 'लू' की ध्वनि आती है (भालू - बालू)।",
    explanation: "'भालू' और 'बालू' तुक मिलाने वाले शब्द हैं।"
  },
  {
    id: "Q_C2_H_CH1_03",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "Hindi",
    chapter: "पाठ 1: भाषा ज्ञान एवं व्याकरण (तुकांत, विलोम, लिंग, मात्राएं)",
    chapterCode: "C2_HIN_CH1",
    category: "समान तुक वाले शब्द (Rhyming Words)",
    text: "Rhyming Words: Which word rhymes with 'रात' (Raat)?",
    options: { A: "बात", B: "सूरज", C: "सुबह", D: "हवा" },
    text_hi: "तुकांत शब्द: 'रात' शब्द से मिलता-जुलता तुकांत शब्द कौन सा है?",
    options_hi: { A: "बात", B: "सूरज", C: "सुबह", D: "हवा" },
    correctAnswer: "A",
    guruHint: "Both words end with '-ात' sound (रात - बात - मात).",
    guruHint_hi: "दोनों शब्दों के अंत में 'ात' की ध्वनि निकलती है (रात - बात)।",
    explanation: "'रात' और 'बात' समान तुक वाले शब्द हैं।"
  },
  {
    id: "Q_C2_H_CH1_04",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "Hindi",
    chapter: "पाठ 1: भाषा ज्ञान एवं व्याकरण (तुकांत, विलोम, लिंग, मात्राएं)",
    chapterCode: "C2_HIN_CH1",
    category: "विलोम शब्द (Antonyms)",
    text: "Antonyms: What is the opposite (विलोम) of 'ऊँचा' (Tall / High)?",
    options: { A: "नीचा", B: "बड़ा", C: "लंबा", D: "भारी" },
    text_hi: "विलोम शब्द: 'ऊँचा' शब्द का सही उल्टा (विपरीतार्थक) शब्द क्या होगा?",
    options_hi: { A: "नीचा", B: "बड़ा", C: "लंबा", D: "भारी" },
    correctAnswer: "A",
    guruHint: "Pahaad uncha hota hai, gaddha...",
    guruHint_hi: "ऊँचा का विलोम 'नीचा' होता है।",
    explanation: "'ऊँचा' का सही विलोम शब्द 'नीचा' है।"
  },
  {
    id: "Q_C2_H_CH1_05",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "Hindi",
    chapter: "पाठ 1: भाषा ज्ञान एवं व्याकरण (तुकांत, विलोम, लिंग, मात्राएं)",
    chapterCode: "C2_HIN_CH1",
    category: "विलोम शब्द (Antonyms)",
    text: "Antonyms: What is the opposite of 'भारी' (Heavy)?",
    options: { A: "हल्का", B: "मोटा", C: "पतला", D: "छोटा" },
    text_hi: "विलोम शब्द: 'भारी' शब्द का सही विलोम शब्द क्या है?",
    options_hi: { A: "हल्का", B: "मोटा", C: "पतला", D: "छोटा" },
    correctAnswer: "A",
    guruHint: "Pathar bhari hota hai, pankh...",
    guruHint_hi: "पत्थर भारी होता है, जबकि पंख 'हल्का' होता है।",
    explanation: "'भारी' का विलोम शब्द 'हल्का' होता है।"
  },
  {
    id: "Q_C2_H_CH1_06",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "Hindi",
    chapter: "पाठ 1: भाषा ज्ञान एवं व्याकरण (तुकांत, विलोम, लिंग, मात्राएं)",
    chapterCode: "C2_HIN_CH1",
    category: "विलोम शब्द (Antonyms)",
    text: "Antonyms: What is the opposite of 'हँसना' (Laugh)?",
    options: { A: "रोना", B: "गाना", C: "दौड़ना", D: "सोना" },
    text_hi: "विलोम शब्द: 'हँसना' शब्द का सही उल्टा अर्थ वाला शब्द क्या होगा?",
    options_hi: { A: "रोना", B: "गाना", C: "दौड़ना", D: "सोना" },
    correctAnswer: "A",
    guruHint: "Khushi me hanste hain, dukh me...",
    guruHint_hi: "हँसी का उल्टा रोना होता है।",
    explanation: "'हँसना' का विलोम शब्द 'रोना' है।"
  },
  {
    id: "Q_C2_H_CH1_07",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "Hindi",
    chapter: "पाठ 1: भाषा ज्ञान एवं व्याकरण (तुकांत, विलोम, लिंग, मात्राएं)",
    chapterCode: "C2_HIN_CH1",
    category: "विलोम शब्द (Antonyms)",
    text: "Antonyms: What is the opposite of 'दिन' (Day)?",
    options: { A: "रात", B: "सुबह", C: "दोपहर", D: "शाम" },
    text_hi: "विलोम शब्द: 'दिन' शब्द का सही विलोम शब्द क्या है?",
    options_hi: { A: "रात", B: "सुबह", C: "दोपहर", D: "शाम" },
    correctAnswer: "A",
    guruHint: "Din me suraj nikalta hai, raat me chandrama...",
    guruHint_hi: "दिन का उल्टा 'रात' होता है।",
    explanation: "'दिन' का विलोम शब्द 'रात' होता है।"
  },
  {
    id: "Q_C2_H_CH1_08",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "Hindi",
    chapter: "पाठ 1: भाषा ज्ञान एवं व्याकरण (तुकांत, विलोम, लिंग, मात्राएं)",
    chapterCode: "C2_HIN_CH1",
    category: "लिंग बदलो (Gender)",
    text: "Gender (लिंग बदलो): What is the feminine form (स्त्रीलिंग) of 'ऊँट' (Camel)?",
    options: { A: "ऊँटनी", B: "ऊँटा", C: "ऊँटी", D: "ऊँटिया" },
    text_hi: "लिंग बदलो: 'ऊँट' (पुल्लिंग) का सही स्त्रीलिंग शब्द क्या होगा?",
    options_hi: { A: "ऊँटनी", B: "ऊँटा", C: "ऊँटी", D: "ऊँटिया" },
    correctAnswer: "A",
    guruHint: "Add '-नी' at the end of ऊँट.",
    guruHint_hi: "ऊँट के पीछे 'नी' लगाकर स्त्रीलिंग 'ऊँटनी' बनता है।",
    explanation: "'ऊँट' का स्त्रीलिंग 'ऊँटनी' होता है।"
  },
  {
    id: "Q_C2_H_CH1_09",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "Hindi",
    chapter: "पाठ 1: भाषा ज्ञान एवं व्याकरण (तुकांत, विलोम, लिंग, मात्राएं)",
    chapterCode: "C2_HIN_CH1",
    category: "लिंग बदलो (Gender)",
    text: "Gender (लिंग बदलो): What is the feminine form of 'शेर' (Lion)?",
    options: { A: "शेरनी", B: "शेरी", C: "शेरिन", D: "शेरा" },
    text_hi: "लिंग बदलो: 'शेर' शब्द का सही स्त्रीलिंग रूप क्या है?",
    options_hi: { A: "शेरनी", B: "शेरी", C: "शेरिन", D: "शेरा" },
    correctAnswer: "A",
    guruHint: "Sher ka striling Sherni.",
    guruHint_hi: "शेर का स्त्रीलिंग 'शेरनी' होता है।",
    explanation: "'शेर' का स्त्रीलिंग रूप 'शेरनी' है।"
  },
  {
    id: "Q_C2_H_CH1_10",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "Hindi",
    chapter: "पाठ 1: भाषा ज्ञान एवं व्याकरण (तुकांत, विलोम, लिंग, मात्राएं)",
    chapterCode: "C2_HIN_CH1",
    category: "लिंग बदलो (Gender)",
    text: "Gender (लिंग बदलो): What is the feminine form of 'लड़का' (Boy)?",
    options: { A: "लड़की", B: "माता", C: "बहन", D: "दादी" },
    text_hi: "लिंग बदलो: 'लड़का' शब्द का सही स्त्रीलिंग शब्द क्या होगा?",
    options_hi: { A: "लड़की", B: "माता", C: "बहन", D: "दादी" },
    correctAnswer: "A",
    guruHint: "Ladka - Ladki.",
    guruHint_hi: "लड़का का स्त्रीलिंग 'लड़की' होता है।",
    explanation: "'लड़का' का स्त्रीलिंग 'लड़की' है।"
  },
  {
    id: "Q_C2_H_CH1_11",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "Hindi",
    chapter: "पाठ 1: भाषा ज्ञान एवं व्याकरण (तुकांत, विलोम, लिंग, मात्राएं)",
    chapterCode: "C2_HIN_CH1",
    category: "वचन बदलो (Singular / Plural)",
    text: "Plural (वचन बदलो): What is the plural of 'आँख' (Eye)?",
    options: { A: "आँखें", B: "आँखों", C: "आँखी", D: "आँखिया" },
    text_hi: "वचन बदलो: एक 'आँख' है, तो दोनों को क्या कहेंगे?",
    options_hi: { A: "आँखें", B: "आँखों", C: "आँखी", D: "आँखिया" },
    correctAnswer: "A",
    guruHint: "Ek aankh, do aankhein.",
    guruHint_hi: "आँख का बहुवचन 'आँखें' होता है।",
    explanation: "'आँख' का बहुवचन रूप 'आँखें' है।"
  },
  {
    id: "Q_C2_H_CH1_12",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "Hindi",
    chapter: "पाठ 1: भाषा ज्ञान एवं व्याकरण (तुकांत, विलोम, लिंग, मात्राएं)",
    chapterCode: "C2_HIN_CH1",
    category: "वचन बदलो (Singular / Plural)",
    text: "Plural (वचन बदलो): What is the plural of 'किताब' (Book)?",
    options: { A: "किताबें", B: "किताबी", C: "किताबों", D: "किताबिया" },
    text_hi: "वचन बदलो: 'किताब' (एकवचन) का बहुवचन शब्द क्या होगा?",
    options_hi: { A: "किताबें", B: "किताबी", C: "किताबों", D: "किताबिया" },
    correctAnswer: "A",
    guruHint: "Ek kitab, kai kitabein.",
    guruHint_hi: "किताब का बहुवचन 'किताबें' होता है।",
    explanation: "'किताब' का सही बहुवचन 'किताबें' है।"
  },
  {
    id: "Q_C2_H_CH1_13",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "Hindi",
    chapter: "पाठ 1: भाषा ज्ञान एवं व्याकरण (तुकांत, विलोम, लिंग, मात्राएं)",
    chapterCode: "C2_HIN_CH1",
    category: "वचन बदलो (Singular / Plural)",
    text: "Plural (वचन बदलो): What is the plural of 'तारा' (Star)?",
    options: { A: "तारे", B: "तारों", C: "तारी", D: "तारियां" },
    text_hi: "वचन बदलो: आसमान में एक 'तारा' चमकता है, तो बहुत सारे क्या चमकते हैं?",
    options_hi: { A: "तारे", B: "तारों", C: "तारी", D: "तारियां" },
    correctAnswer: "A",
    guruHint: "Ek tara, anek tare.",
    guruHint_hi: "तारा का बहुवचन 'तारे' होता है।",
    explanation: "'तारा' का बहुवचन 'तारे' है।"
  },
  {
    id: "Q_C2_H_CH1_14",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "Hindi",
    chapter: "पाठ 1: भाषा ज्ञान एवं व्याकरण (तुकांत, विलोम, लिंग, मात्राएं)",
    chapterCode: "C2_HIN_CH1",
    category: "मात्राओं का ज्ञान (Vowel Signs)",
    text: "Matra Knowledge: Which matra is applied in the word 'सूरज' (Suraj)?",
    options: { A: "बड़े 'ऊ' की मात्रा (ू)", B: "छोटे 'उ' की मात्रा (ु)", C: "आ की मात्रा (ा)", D: "इ की मात्रा (ि)" },
    text_hi: "मात्रा पहचानें: 'सूरज' शब्द में 'स' पर कौन सी मात्रा लगी है?",
    options_hi: { A: "बड़े 'ऊ' की मात्रा (ू)", B: "छोटे 'उ' की मात्रा (ु)", C: "आ की मात्रा (ा)", D: "इ की मात्रा (ि)" },
    correctAnswer: "A",
    guruHint: "The long 'oo' sound in Soo-raj.",
    guruHint_hi: "सूरज में 'स' पर बड़े 'ऊ' की मात्रा (ू) लगी है।",
    explanation: "'सूरज' शब्द में 'स' पर बड़े ऊ की मात्रा (ू) प्रयुक्त होती है।"
  },
  {
    id: "Q_C2_H_CH1_15",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "Hindi",
    chapter: "पाठ 1: भाषा ज्ञान एवं व्याकरण (तुकांत, विलोम, लिंग, मात्राएं)",
    chapterCode: "C2_HIN_CH1",
    category: "मात्राओं का ज्ञान (Vowel Signs)",
    text: "Matra Knowledge: In the word 'किताब', which matra is applied to 'क'?",
    options: { A: "छोटी 'इ' की मात्रा (ि)", B: "बड़ी 'ई' की मात्रा (ी)", C: "उ की मात्रा (ु)", D: "ए की मात्रा (े)" },
    text_hi: "मात्रा पहचानें: 'किताब' शब्द में 'क' पर कौन सी मात्रा लगी है?",
    options_hi: { A: "छोटी 'इ' की मात्रा (ि)", B: "बड़ी 'ई' की मात्रा (ी)", C: "उ की मात्रा (ु)", D: "ए की मात्रा (े)" },
    correctAnswer: "A",
    guruHint: "A left-hand hook matra placed before the letter: कि.",
    guruHint_hi: "अक्षर के बाईं ओर से लगने वाली मात्रा छोटी 'इ' (ि) होती है।",
    explanation: "'किताब' में 'क' पर छोटी 'इ' की मात्रा (ि) लगी है।"
  },
  {
    id: "Q_C2_H_CH1_16",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "Hindi",
    chapter: "पाठ 1: भाषा ज्ञान एवं व्याकरण (तुकांत, विलोम, लिंग, मात्राएं)",
    chapterCode: "C2_HIN_CH1",
    category: "चंद्रबिंदु एवं अनुस्वार (Nasal Sounds)",
    text: "Chandrabindu (ँ): Which of the following words correctly uses a Chandrabindu (चंद्रबिंदु)?",
    options: { A: "ऊँट", B: "पतंग", C: "बंदर", D: "जंगल" },
    text_hi: "चंद्रबिंदु (ँ) की पहचान: इनमें से किस शब्द पर चंद्रबिंदु (ँ) लगा होता है?",
    options_hi: { A: "ऊँट", B: "पतंग", C: "बंदर", D: "जंगल" },
    correctAnswer: "A",
    guruHint: "A crescent moon with a dot inside (ँ): ऊँट, चाँद, आँख.",
    guruHint_hi: "चाँद और बिंदु (ँ) केवल 'ऊँट' पर लगा है, बाकियों पर केवल अनुस्वार (बिंदु) है।",
    explanation: "'ऊँट' शब्द में चंद्रबिंदु (ँ) का सही प्रयोग होता है।"
  },
  {
    id: "Q_C2_H_CH1_17",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "Hindi",
    chapter: "पाठ 1: भाषा ज्ञान एवं व्याकरण (तुकांत, विलोम, लिंग, मात्राएं)",
    chapterCode: "C2_HIN_CH1",
    category: "चंद्रबिंदु एवं अनुस्वार (Nasal Sounds)",
    text: "Anuswar (ं): Which of the following words uses an Anuswar (बिंदु)?",
    options: { A: "पतंग", B: "आँख", C: "चाँद", D: "गाँव" },
    text_hi: "अनुस्वार (ं) की पहचान: इनमें से किस शब्द पर केवल अनुस्वार (बिंदु) लगा है?",
    options_hi: { A: "पतंग", B: "आँख", C: "चाँद", D: "गाँव" },
    correctAnswer: "A",
    guruHint: "Pa-tang has a single nasal dot on 'त': तं.",
    guruHint_hi: "'पतंग' में 'त' पर अनुस्वार (ं) लगा है, जबकि अन्य में चंद्रबिंदु है।",
    explanation: "'पतंग' शब्द में अनुस्वार (ं) का प्रयोग होता है।"
  },
  {
    id: "Q_C2_H_CH1_18",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "Hindi",
    chapter: "पाठ 1: भाषा ज्ञान एवं व्याकरण (तुकांत, विलोम, लिंग, मात्राएं)",
    chapterCode: "C2_HIN_CH1",
    category: "संज्ञा (Naming Words / Noun)",
    text: "Noun (संज्ञा): What is a Noun (संज्ञा)?",
    options: { A: "नाम बताने वाले शब्द (Naming word)", B: "काम बताने वाले शब्द", C: "उल्टा बताने वाले शब्द", D: "गिनती बताने वाले शब्द" },
    text_hi: "संज्ञा किसे कहते हैं?",
    options_hi: { A: "किसी व्यक्ति, वस्तु, स्थान या पशु का नाम बताने वाले शब्द", B: "काम बताने वाले शब्द", C: "उल्टा अर्थ बताने वाले शब्द", D: "केवल गिनती बताने वाले शब्द" },
    correctAnswer: "A",
    guruHint: "Any name is a Sangya: Rohan, Delhi, Gend, Gaay.",
    guruHint_hi: "किसी भी नाम को व्याकरण में संज्ञा (Noun) कहते हैं।",
    explanation: "किसी व्यक्ति, वस्तु, स्थान या प्राणी के नाम को संज्ञा कहते हैं।"
  },
  {
    id: "Q_C2_H_CH1_19",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "Hindi",
    chapter: "पाठ 1: भाषा ज्ञान एवं व्याकरण (तुकांत, विलोम, लिंग, मात्राएं)",
    chapterCode: "C2_HIN_CH1",
    category: "संज्ञा (Naming Words / Noun)",
    text: "Noun Identification: In 'ऊँट बालू में चलता है', which word is an Animal Naming Word (पशु का नाम)?",
    options: { A: "ऊँट", B: "चलता", C: "में", D: "है" },
    text_hi: "संज्ञा पहचानें: 'ऊँट बालू में चलता है' वाक्य में पशु (प्राणी) का नाम कौन सा शब्द है?",
    options_hi: { A: "ऊँट", B: "चलता", C: "में", D: "है" },
    correctAnswer: "A",
    guruHint: "A tall desert animal with a hump.",
    guruHint_hi: "रेगिस्तान का बड़ा जानवर 'ऊँट' एक प्राणी का नाम है।",
    explanation: "'ऊँट' एक पशु का नाम है, इसलिए यह संज्ञा है।"
  },
  {
    id: "Q_C2_H_CH1_20",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "Hindi",
    chapter: "पाठ 1: भाषा ज्ञान एवं व्याकरण (तुकांत, विलोम, लिंग, मात्राएं)",
    chapterCode: "C2_HIN_CH1",
    category: "पर्यायवाची शब्द (Synonyms)",
    text: "Synonyms (पर्यायवाची): What is another word for 'पानी' (Water)?",
    options: { A: "जल", B: "आग", C: "हवा", D: "धूप" },
    text_hi: "समानार्थी शब्द (पर्यायवाची): 'पानी' का दूसरा समान अर्थ वाला शब्द क्या है?",
    options_hi: { A: "जल / नीर", B: "आग", C: "हवा", D: "धूप" },
    correctAnswer: "A",
    guruHint: "Jal hi jeevan hai.",
    guruHint_hi: "पानी को 'जल' भी कहते हैं।",
    explanation: "'पानी' का समानार्थी (पर्यायवाची) शब्द 'जल' है।"
  },
  {
    id: "Q_C2_H_CH1_21",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "Hindi",
    chapter: "पाठ 1: भाषा ज्ञान एवं व्याकरण (तुकांत, विलोम, लिंग, मात्राएं)",
    chapterCode: "C2_HIN_CH1",
    category: "पर्यायवाची शब्द (Synonyms)",
    text: "Synonyms: What is another name for 'सूरज' (Sun)?",
    options: { A: "सूर्य", B: "चाँद", C: "तारा", D: "बादल" },
    text_hi: "पर्यायवाची शब्द: 'सूरज' को और क्या कहते हैं?",
    options_hi: { A: "सूर्य (रवि)", B: "चाँद", C: "तारा", D: "बादल" },
    correctAnswer: "A",
    guruHint: "Surya Namaskar.",
    guruHint_hi: "सूरज का दूसरा नाम 'सूर्य' या 'रवि' है।",
    explanation: "'सूरज' का पर्यायवाची शब्द 'सूर्य' है।"
  },
  {
    id: "Q_C2_H_CH1_22",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "Hindi",
    chapter: "पाठ 1: भाषा ज्ञान एवं व्याकरण (तुकांत, विलोम, लिंग, मात्राएं)",
    chapterCode: "C2_HIN_CH1",
    category: "पर्यायवाची शब्द (Synonyms)",
    text: "Synonyms: What is another word for 'पेड़' (Tree)?",
    options: { A: "वृक्ष", B: "घास", C: "फूल", D: "पत्ता" },
    text_hi: "पर्यायवाची शब्द: 'पेड़' का समान अर्थ वाला शब्द कौन सा है?",
    options_hi: { A: "वृक्ष (तरु)", B: "घास", C: "फूल", D: "पत्ता" },
    correctAnswer: "A",
    guruHint: "Vriksh lagao, paryavaran bachao.",
    guruHint_hi: "पेड़ को 'वृक्ष' भी कहा जाता है।",
    explanation: "'पेड़' का समानार्थी शब्द 'वृक्ष' है।"
  },
  {
    id: "Q_C2_H_CH1_23",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "Hindi",
    chapter: "पाठ 1: भाषा ज्ञान एवं व्याकरण (तुकांत, विलोम, लिंग, मात्राएं)",
    chapterCode: "C2_HIN_CH1",
    category: "विराम चिह्न (Punctuation)",
    text: "Punctuation (विराम चिह्न): What mark is placed at the end of a simple sentence in Hindi?",
    options: { A: "पूर्ण विराम (।)", B: "प्रश्नवाचक चिह्न (?)", C: "अल्पविराम (,)", D: "शून्य (०)" },
    text_hi: "विराम चिह्न: हिंदी में एक साधारण वाक्य पूरा होने पर अंत में क्या लगाया जाता है?",
    options_hi: { A: "पूर्ण विराम (।)", B: "प्रश्नवाचक चिह्न (?)", C: "अल्पविराम (,)", D: "शून्य (०)" },
    correctAnswer: "A",
    guruHint: "A straight vertical line: ।",
    guruHint_hi: "वाक्य की समाप्ति पर खड़ी डंडी 'पूर्ण विराम' (।) लगाई जाती है।",
    explanation: "हिंदी में वाक्य के पूर्ण होने पर पूर्ण विराम (।) का प्रयोग किया जाता है।"
  },
  {
    id: "Q_C2_H_CH1_24",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "Hindi",
    chapter: "पाठ 1: भाषा ज्ञान एवं व्याकरण (तुकांत, विलोम, लिंग, मात्राएं)",
    chapterCode: "C2_HIN_CH1",
    category: "विराम चिह्न (Punctuation)",
    text: "Punctuation: What mark goes at the end of 'तुम्हारा नाम क्या है___'?",
    options: { A: "प्रश्नवाचक चिह्न (?)", B: "पूर्ण विराम (।)", C: "विस्मयबोधक (!)", D: "डैश (-)" },
    text_hi: "विराम चिह्न: 'तुम्हारा नाम क्या है___' वाक्य के अंत में कौन सा चिह्न आएगा?",
    options_hi: { A: "प्रश्नवाचक चिह्न (?)", B: "पूर्ण विराम (।)", C: "विस्मयबोधक (!)", D: "डैश (-)" },
    correctAnswer: "A",
    guruHint: "Asked as a question, so it ends with '?'",
    guruHint_hi: "क्योंकि इसमें प्रश्न पूछा गया है, अतः प्रश्नवाचक चिह्न (?) आएगा।",
    explanation: "प्रश्न पूछने वाले वाक्यों के अंत में प्रश्नवाचक चिह्न (?) लगता है।"
  },
  {
    id: "Q_C2_H_CH1_25",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "Hindi",
    chapter: "पाठ 1: भाषा ज्ञान एवं व्याकरण (तुकांत, विलोम, लिंग, मात्राएं)",
    chapterCode: "C2_HIN_CH1",
    category: "सही वर्तनी (Spelling in Hindi)",
    text: "Correct Spelling: Choose the word written with CORRECT Hindi spelling:",
    options: { A: "ऊँट", B: "उंट", C: "ऊट", D: "ऊँट" },
    text_hi: "शुद्ध वर्तनी: इनमें से 'ऊँट' की शुद्ध वर्तनी कौन सी है?",
    options_hi: { A: "ऊँट", B: "उंट", C: "ऊट", D: "उन्ट" },
    correctAnswer: "A",
    guruHint: "Big 'ऊ' with Chandrabindu 'ँ' and 'ट': ऊँट.",
    guruHint_hi: "बड़ा 'ऊ' पर चंद्रबिंदु और 'ट' -> ऊँट।",
    explanation: "'ऊँट' शुद्ध वर्तनी है।"
  },
  {
    id: "Q_C2_H_CH1_26",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "Hindi",
    chapter: "पाठ 1: भाषा ज्ञान एवं व्याकरण (तुकांत, विलोम, लिंग, मात्राएं)",
    chapterCode: "C2_HIN_CH1",
    category: "सही वर्तनी (Spelling in Hindi)",
    text: "Correct Spelling: Choose the correctly spelled Hindi word for 'School':",
    options: { A: "विद्यालय", B: "विदयालय", C: "विद्यलय", D: "वीद्यालय" },
    text_hi: "शुद्ध वर्तनी: स्कूल के लिए 'विद्यालय' की सही वर्तनी चुनें:",
    options_hi: { A: "विद्यालय", B: "विदयालय", C: "विद्यलय", D: "वीद्यालय" },
    correctAnswer: "A",
    guruHint: "व पर छोटी इ की मात्रा, द्य, ा, ल, य.",
    guruHint_hi: "'विद्यालय' शुद्ध रूप है।",
    explanation: "'विद्यालय' की वर्तनी शुद्ध है।"
  },
  {
    id: "Q_C2_H_CH1_27",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "Hindi",
    chapter: "पाठ 1: भाषा ज्ञान एवं व्याकरण (तुकांत, विलोम, लिंग, मात्राएं)",
    chapterCode: "C2_HIN_CH1",
    category: "वर्णमाला ज्ञान (Swar aur Vyanjan)",
    text: "Vowels in Hindi: Which of the following is a SWAR (स्वर)?",
    options: { A: "आ", B: "क", C: "च", D: "प" },
    text_hi: "स्वर की पहचान: इनमें से कौन सा वर्ण 'स्वर' (Swar) है?",
    options_hi: { A: "आ", B: "क", C: "च", D: "प" },
    correctAnswer: "A",
    guruHint: "अ, आ, इ, ई, उ, ऊ... are Swar.",
    guruHint_hi: "'आ' एक स्वर है, जबकि क, च, प व्यंजन हैं।",
    explanation: "'आ' हिंदी वर्णमाला का स्वर वर्ण है।"
  },
  {
    id: "Q_C2_H_CH1_28",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "Hindi",
    chapter: "पाठ 1: भाषा ज्ञान एवं व्याकरण (तुकांत, विलोम, लिंग, मात्राएं)",
    chapterCode: "C2_HIN_CH1",
    category: "वर्णमाला ज्ञान (Swar aur Vyanjan)",
    text: "Consonants in Hindi: Which of the following is a VYANJAN (व्यंजन)?",
    options: { A: "क", B: "अ", C: "ई", D: "उ" },
    text_hi: "व्यंजन की पहचान: इनमें से कौन सा वर्ण 'व्यंजन' (Vyanjan) है?",
    options_hi: { A: "क", B: "अ", C: "ई", D: "उ" },
    correctAnswer: "A",
    guruHint: "Starts the consonant table: क, ख, ग, घ...",
    guruHint_hi: "'क' एक व्यंजन है, बाकी अ, ई, उ स्वर हैं।",
    explanation: "'क' एक व्यंजन वर्ण है।"
  },
  {
    id: "Q_C2_H_CH1_29",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "Hindi",
    chapter: "पाठ 1: भाषा ज्ञान एवं व्याकरण (तुकांत, विलोम, लिंग, मात्राएं)",
    chapterCode: "C2_HIN_CH1",
    category: "सामान्य ज्ञान एवं पशु-पक्षी (Animal Facts)",
    text: "Language Comprehension: Which animal is called 'रेगिस्तान का जहाज' (Ship of the Desert)?",
    options: { A: "ऊँट", B: "घोड़ा", C: "हाथी", D: "बैल" },
    text_hi: "सामान्य ज्ञान: 'रेगिस्तान का जहाज' किस पशु को कहा जाता है?",
    options_hi: { A: "ऊँट", B: "घोड़ा", C: "हाथी", D: "बैल" },
    correctAnswer: "A",
    guruHint: "Runs effortlessly on sandy dunes with padded hooves.",
    guruHint_hi: "गद्देदार पंजों की मदद से बालू (रेत) पर आसानी से दौड़ने वाला पशु ऊँट है।",
    explanation: "रेत पर आसानी से चलने के कारण ऊँट को 'रेगिस्तान का जहाज' कहते हैं।"
  },
  {
    id: "Q_C2_H_CH1_30",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "Hindi",
    chapter: "पाठ 1: भाषा ज्ञान एवं व्याकरण (तुकांत, विलोम, लिंग, मात्राएं)",
    chapterCode: "C2_HIN_CH1",
    category: "सामान्य ज्ञान एवं पशु-पक्षी (Animal Facts)",
    text: "Vocabulary: The raised hump on a camel's back is called what in Hindi?",
    options: { A: "कूबड़", B: "पूंछ", C: "सींग", D: "खुर" },
    text_hi: "शब्द ज्ञान: ऊँट की पीठ पर जो उभरा हुआ भाग होता है, उसे क्या कहते हैं?",
    options_hi: { A: "कूबड़", B: "पूंछ", C: "सींग", D: "खुर" },
    correctAnswer: "A",
    guruHint: "Camel stores fat in this raised hump.",
    guruHint_hi: "ऊँट की पीठ के उभरे हिस्से को 'कूबड़' कहते हैं।",
    explanation: "ऊँट की पीठ पर स्थित टीले जैसे भाग को 'कूबड़' कहा जाता है।"
  },
  // FFF (Fastest Finger First) Ordering Questions
  {
    id: "Q_C2_H_CH1_FFF_01",
    division: "Junior",
    grade: 2,
    bracket: "FFF",
    subject: "Hindi",
    chapter: "पाठ 1: भाषा ज्ञान एवं व्याकरण (तुकांत, विलोम, लिंग, मात्राएं)",
    chapterCode: "C2_HIN_CH1",
    category: "वर्णमाला क्रम (Varnamala Order)",
    text: "Hindi Varnamala Order: Arrange these 4 Hindi letters in correct alphabetical order (क से ज्ञ):",
    options: { A: "ग", B: "क", C: "घ", D: "ख" },
    text_hi: "वर्णमाला क्रम: इन वर्णों को हिंदी वर्णमाला के सही क्रम में व्यवस्थित करें:",
    options_hi: { A: "ग (तीसरा)", B: "क (पहला)", C: "घ (चौथा)", D: "ख (दूसरा)" },
    correctAnswer: "B,D,A,C", // क -> ख -> ग -> घ
    guruHint: "Recall: क, ख, ग, घ, ङ.",
    guruHint_hi: "सही क्रम: क ➔ ख ➔ ग ➔ घ.",
    explanation: "वर्णमाला का सही क्रम: क, ख, ग, घ।"
  },
  {
    id: "Q_C2_H_CH1_FFF_02",
    division: "Junior",
    grade: 2,
    bracket: "FFF",
    subject: "Hindi",
    chapter: "पाठ 1: भाषा ज्ञान एवं व्याकरण (तुकांत, विलोम, लिंग, मात्राएं)",
    chapterCode: "C2_HIN_CH1",
    category: "शब्द लंबाई (अक्षरों की संख्या)",
    text: "Word Length Order: Arrange these Hindi words from FEWEST letters to MOST letters:",
    options: { A: "विद्यालय (4 वर्ण)", B: "घर (2 वर्ण)", C: "किताब (3 वर्ण)", D: "अ (1 वर्ण)" },
    text_hi: "वर्णों की संख्या: इन शब्दों को सबसे कम वर्ण से सबसे अधिक वर्ण के क्रम में लगाएं:",
    options_hi: { A: "विद्यालय (4 वर्ण)", B: "घर (2 वर्ण)", C: "किताब (3 वर्ण)", D: "अ (1 वर्ण)" },
    correctAnswer: "D,B,C,A", // अ (1) -> घर (2) -> किताब (3) -> विद्यालय (4)
    guruHint: "Count letters: 1 letter, then 2 letters, then 3 letters, then 4 letters.",
    guruHint_hi: "क्रम: 1 वर्ण (अ) ➔ 2 वर्ण (घर) ➔ 3 वर्ण (किताब) ➔ 4 वर्ण (विद्यालय).",
    explanation: "वर्ण संख्या क्रम: अ (1) ➔ घर (2) ➔ किताब (3) ➔ विद्यालय (4)।"
  }
];

// Update Master Tracker with Hindi Unit 1
export function updateMasterTrackerWithHindi() {
  const wb = XLSX.utils.book_new();

  // Sheet 1: Master Syllabus Progress Tracker
  const masterTrackerData = [
    // Class 2 Mathematics
    {
      "Class": "Class 2",
      "Subject": "Mathematics",
      "Chapter No.": "Chapter 1",
      "Chapter Name": "What is Long, What is Round? (क्या है लंबा, क्या है गोल?)",
      "Questions Added": 32,
      "Status": "COMPLETED",
      "Syllabus Concepts Covered": "Rolling vs Sliding, Stacking Towers, Shapes, Corners & Edges",
      "Last Updated": new Date().toLocaleDateString('en-IN')
    },
    {
      "Class": "Class 2",
      "Subject": "Mathematics",
      "Chapter No.": "Chapter 2",
      "Chapter Name": "Counting in Groups (गिनो मगर समूह में)",
      "Questions Added": 0,
      "Status": "PENDING",
      "Syllabus Concepts Covered": "Pairs, Counting in 2s, 5s, 10s, Estimation, Guessing counts",
      "Last Updated": "-"
    },
    // Class 2 English
    {
      "Class": "Class 2",
      "Subject": "English",
      "Chapter No.": "Unit 1",
      "Chapter Name": "First Day at School / Welcome to School (Grammar & Phonics)",
      "Questions Added": 32,
      "Status": "COMPLETED",
      "Syllabus Concepts Covered": "Rhyming Words, Opposites, Action Verbs, Plurals, Articles (A/An), Vowels, Pronouns, Punctuation, A-Z Order",
      "Last Updated": new Date().toLocaleDateString('en-IN')
    },
    {
      "Class": "Class 2",
      "Subject": "English",
      "Chapter No.": "Unit 2",
      "Chapter Name": "I am Lucky / Picture Fun (Grammar & Senses)",
      "Questions Added": 0,
      "Status": "PENDING",
      "Syllabus Concepts Covered": "Animal sounds, Prepositions (In/On/Under), Describing words",
      "Last Updated": "-"
    },
    // Class 2 Hindi (Vyakaran & Bhasha Gyan)
    {
      "Class": "Class 2",
      "Subject": "Hindi",
      "Chapter No.": "पाठ 1",
      "Chapter Name": "ऊँट चला / भाषा ज्ञान (तुकांत, विलोम, लिंग, वचन, मात्राएं)",
      "Questions Added": 32,
      "Status": "COMPLETED",
      "Syllabus Concepts Covered": "समान तुक वाले शब्द, विलोम शब्द, लिंग बदलो, वचन बदलो, मात्राएं (इ/ई/उ/ऊ), अनुस्वार व चंद्रबिंदु, संज्ञा, विराम चिह्न, वर्णमाला क्रम",
      "Last Updated": new Date().toLocaleDateString('en-IN')
    },
    {
      "Class": "Class 2",
      "Subject": "Hindi",
      "Chapter No.": "पाठ 2",
      "Chapter Name": "भालू ने खेली फुटबॉल / खेल व क्रिया शब्द (Verbs & Action words)",
      "Questions Added": 0,
      "Status": "PENDING",
      "Syllabus Concepts Covered": "क्रिया शब्द (उछलना, दौड़ना, मारना), खेलों के नाम, दिशा ज्ञान",
      "Last Updated": "-"
    }
  ];

  const wsTracker = XLSX.utils.json_to_sheet(masterTrackerData);
  wsTracker['!cols'] = [
    { wch: 10 }, { wch: 14 }, { wch: 14 }, { wch: 45 }, { wch: 16 }, { wch: 14 }, { wch: 65 }, { wch: 14 }
  ];
  XLSX.utils.book_append_sheet(wb, wsTracker, "Syllabus Progress Tracker");

  // Sheet 2: Class 2 Maths Ch 1
  const mathsRows = CLASS_2_CH1_QUESTIONS.map((q, idx) => ({
    "S.No": idx + 1,
    "Question ID": q.id,
    "Class": `Class ${q.grade}`,
    "Subject": q.subject,
    "Chapter": q.chapter,
    "Question (English)": q.text,
    "Question (Hindi)": q.text_hi,
    "Option A": `${q.options.A} / ${q.options_hi.A}`,
    "Option B": `${q.options.B} / ${q.options_hi.B}`,
    "Option C": `${q.options.C} / ${q.options_hi.C}`,
    "Option D": `${q.options.D} / ${q.options_hi.D}`,
    "Correct Answer": q.correctAnswer,
    "Explanation": q.explanation,
    "Guru Hint": q.guruHint
  }));
  const wsMaths = XLSX.utils.json_to_sheet(mathsRows);
  wsMaths['!cols'] = [
    { wch: 6 }, { wch: 18 }, { wch: 10 }, { wch: 12 }, { wch: 35 },
    { wch: 50 }, { wch: 50 }, { wch: 25 }, { wch: 25 }, { wch: 25 }, { wch: 25 },
    { wch: 14 }, { wch: 45 }, { wch: 45 }
  ];
  XLSX.utils.book_append_sheet(wb, wsMaths, "Class 2 Maths Ch 1");

  // Sheet 3: Class 2 English Ch 1
  const englishRows = CLASS_2_ENG_CH1_QUESTIONS.map((q, idx) => ({
    "S.No": idx + 1,
    "Question ID": q.id,
    "Class": `Class ${q.grade}`,
    "Subject": q.subject,
    "Grammar Category": q.category,
    "Chapter": q.chapter,
    "Question (English)": q.text,
    "Question (Hindi)": q.text_hi,
    "Option A": `${q.options.A} / ${q.options_hi.A}`,
    "Option B": `${q.options.B} / ${q.options_hi.B}`,
    "Option C": `${q.options.C} / ${q.options_hi.C}`,
    "Option D": `${q.options.D} / ${q.options_hi.D}`,
    "Correct Answer": q.correctAnswer,
    "Explanation": q.explanation,
    "Guru Hint": q.guruHint
  }));
  const wsEnglish = XLSX.utils.json_to_sheet(englishRows);
  wsEnglish['!cols'] = [
    { wch: 6 }, { wch: 18 }, { wch: 10 }, { wch: 12 }, { wch: 25 }, { wch: 35 },
    { wch: 50 }, { wch: 50 }, { wch: 25 }, { wch: 25 }, { wch: 25 }, { wch: 25 },
    { wch: 14 }, { wch: 45 }, { wch: 45 }
  ];
  XLSX.utils.book_append_sheet(wb, wsEnglish, "Class 2 English Ch 1");

  // Sheet 4: Class 2 Hindi Ch 1 (Vyakaran & Bhasha Gyan)
  const hindiRows = CLASS_2_HIN_CH1_QUESTIONS.map((q, idx) => ({
    "S.No": idx + 1,
    "Question ID": q.id,
    "Class": `Class ${q.grade}`,
    "Subject": q.subject,
    "Vyakaran Category": q.category,
    "Chapter": q.chapter,
    "Question (Hindi)": q.text_hi,
    "Question (English)": q.text,
    "Option A": q.options_hi.A,
    "Option B": q.options_hi.B,
    "Option C": q.options_hi.C,
    "Option D": q.options_hi.D,
    "Correct Answer": q.correctAnswer,
    "Explanation": q.explanation,
    "Guru Hint": q.guruHint_hi
  }));
  const wsHindi = XLSX.utils.json_to_sheet(hindiRows);
  wsHindi['!cols'] = [
    { wch: 6 }, { wch: 18 }, { wch: 10 }, { wch: 12 }, { wch: 30 }, { wch: 35 },
    { wch: 50 }, { wch: 50 }, { wch: 20 }, { wch: 20 }, { wch: 20 }, { wch: 20 },
    { wch: 14 }, { wch: 45 }, { wch: 45 }
  ];
  XLSX.utils.book_append_sheet(wb, wsHindi, "Class 2 Hindi Ch 1");

  // Write to Desktop and Workspace
  const desktopPath = 'C:\\Users\\Admin\\Desktop\\NCERT_Curriculum_Tracker.xlsx';
  const workspacePath = path.resolve('NCERT_Curriculum_Tracker.xlsx');

  XLSX.writeFile(wb, desktopPath);
  XLSX.writeFile(wb, workspacePath);
  console.log(`Excel tracker updated with Hindi Ch 1 successfully at:\n1. ${desktopPath}\n2. ${workspacePath}`);
}

// Execute tracker update
updateMasterTrackerWithHindi();

// Inject into initialQuestions.js
const targetFile = path.resolve('src/data/initialQuestions.js');
let content = fs.readFileSync(targetFile, 'utf8');

const formattedQuestions = CLASS_2_HIN_CH1_QUESTIONS.map(q => {
  return `  {
    id: ${JSON.stringify(q.id)},
    division: ${JSON.stringify(q.division)},
    grade: ${q.grade},
    bracket: ${JSON.stringify(q.bracket)},
    subject: ${JSON.stringify(q.subject)},
    chapter: ${JSON.stringify(q.chapter)},
    chapterCode: ${JSON.stringify(q.chapterCode)},
    category: ${JSON.stringify(q.category)},
    text: ${JSON.stringify(q.text)},
    options: ${JSON.stringify(q.options)},
    text_hi: ${JSON.stringify(q.text_hi)},
    options_hi: ${JSON.stringify(q.options_hi)},
    correctAnswer: ${JSON.stringify(q.correctAnswer)},
    guruHint: ${JSON.stringify(q.guruHint)},
    guruHint_hi: ${JSON.stringify(q.guruHint_hi)},
    explanation: ${JSON.stringify(q.explanation)}
  },`;
}).join('\n');

const marker = `  // Class 2 (Age 7) Questions`;
if (content.includes(marker)) {
  const replacement = `${marker}\n  // ==========================================\n  // NCERT Hindi Class 2 - पाठ 1: भाषा ज्ञान एवं व्याकरण (तुकांत, विलोम, लिंग, वचन, मात्राएं)\n  // ==========================================\n${formattedQuestions}`;
  content = content.replace(marker, replacement);
  fs.writeFileSync(targetFile, content, 'utf8');
  console.log(`Successfully injected 32 Class 2 Hindi Unit 1 grammar questions into initialQuestions.js!`);
} else {
  console.error(`Marker not found in initialQuestions.js!`);
}
