import { Grade } from '../types';

export interface ConceptLabItem {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  badge: string;
  accentColor: string;
  boxColor: string;
  ncertTopic: string;
  subject?: 'maths' | 'english' | 'hindi';
  grade?: Grade;
  chapterTitle?: string;
  pedagogicalOutcome: {
    english: string;
    hindi: string;
  };
}

export type GradeGroupKey = 'lkg_ukg' | 'class_1_2' | 'class_3_4' | 'class_5_6';

export const getGradeGroupKey = (grade: Grade): GradeGroupKey => {
  if (grade === 'LKG' || grade === 'UKG') return 'lkg_ukg';
  if (grade === 1 || grade === 2) return 'class_1_2';
  if (grade === 3 || grade === 4) return 'class_3_4';
  return 'class_5_6';
};

export const CONCEPT_LABS_BY_GRADE: Record<GradeGroupKey, ConceptLabItem[]> = {
  lkg_ukg: [
    {
      "id": "skill_lab_a",
      "title": "Letter Identification & Sound Lab (A.1 - A.6)",
      "subtitle": "Uppercase & lowercase letter shapes, audio listening & tricky b/d/p/q",
      "icon": "🔤",
      "badge": "Foundation Skills • A.1-A.6",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Letter Recognition (A to Z) & Phonics Safari",
      "subject": "english",
      "chapterTitle": "A.1: Find the letter in the alphabet: uppercase",
      "pedagogicalOutcome": {
        "english": "Children identify capital and small letters, distinguish frequently confused b/d/p/q shapes, and connect letter sounds to visual objects.",
        "hindi": "बच्चे बड़े और छोटे अक्षरों की पहचान, भ्रमित करने वाले b/d/p/q अक्षरों का अंतर और उनकी ध्वनियाँ सीखते हैं।"
      }
    },
    {
      "id": "alphabet_phonics_lab",
      "title": "Alphabet Phonics & Sound Lab (A to Z)",
      "subtitle": "Interactive sound board, letter tracing & picture phonics",
      "icon": "🔤",
      "badge": "NCERT Balvatika 2 • English Ch 1-17",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Letter Recognition (A to Z) & Phonics Safari",
      "subject": "english",
      "pedagogicalOutcome": {
        "english": "Children tap letters A to Z to hear authentic phonics sounds (/æ/, /b/, /k/), see real association objects, and develop foundational phonemic awareness before reading.",
        "hindi": "बच्चे A से Z तक के अक्षरों पर टैप करके उनकी स्वाभाविक ध्वनियाँ (फोनिक्स) और चित्र देखकर अक्षर ज्ञान पक्का करते हैं।"
      }
    },
    {
      "id": "skill_lab_b",
      "title": "Uppercase & Lowercase Partner Lab (B.1 - B.8)",
      "subtitle": "Match uppercase to lowercase partners across all letters A to Z",
      "icon": "🔀",
      "badge": "Foundation Skills • B.1-B.8",
      "accentColor": "#7C3AED",
      "boxColor": "#F5F3FF",
      "ncertTopic": "Upper & Lowercase Pairing",
      "subject": "english",
      "chapterTitle": "B.1: Choose the lowercase letter that matches: c, k, o, p, s, u, v, w, x, z",
      "pedagogicalOutcome": {
        "english": "Strengthens letter-case equivalence (matching C-c, M-m, A-a) so children seamlessly read text in mixed-case storybooks.",
        "hindi": "बच्चे बड़े और छोटे अक्षरों के जोड़ों (C-c, M-m, A-a) को मिलाकर पढ़ने में आत्मविश्वास पाते हैं।"
      }
    },
    {
      "id": "skill_lab_c",
      "title": "Word Recognition & Sentence Spacing Lab (C.1 - C.3)",
      "subtitle": "Word match pairs, finger spacing & word finder in sentences",
      "icon": "📏",
      "badge": "Reading Readiness • C.1-C.3",
      "accentColor": "#059669",
      "boxColor": "#ECFDF5",
      "ncertTopic": "Word Recognition & Sentence Spacing",
      "subject": "english",
      "chapterTitle": "C.1: Choose the two words that are the same",
      "pedagogicalOutcome": {
        "english": "Develops print awareness, visual word tracking, proper finger spacing between words, and locating key words in complete sentences.",
        "hindi": "शब्दों के बीच सही दूरी (Finger spacing) और पूरे वाक्य में शब्दों को खोजने की समझ विकसित करता है।"
      }
    },
    {
      "id": "skill_lab_d",
      "title": "Rhyme Chime & Picture Echo Lab (D.1 - D.3)",
      "subtitle": "Same word endings, rhyming sound pairs & picture rhyming match",
      "icon": "🎵",
      "badge": "Phonemic Awareness • D.1-D.3",
      "accentColor": "#DB2777",
      "boxColor": "#FDF2F8",
      "ncertTopic": "Rhyming Word Families",
      "subject": "english",
      "chapterTitle": "D.1: Which word has the same ending?",
      "pedagogicalOutcome": {
        "english": "Sharpens auditory discrimination by matching word endings (-at, -in, -og, -un) through joyful rhyming chime associations.",
        "hindi": "तुकबंदी वाले शब्दों (Bat-Cat, Pin-Tin, Frog-Log) को सुनकर समान अंत वाली ध्वनियाँ पहचानने का अभ्यास।"
      }
    },
    {
      "id": "english_opposites_rhymes_lab",
      "title": "Opposites, Rhymes & Action Explorer Lab",
      "subtitle": "Hot/Cold & Big/Small switcher, Rhyme chimes & audio missions",
      "icon": "🔄",
      "badge": "NCERT Balvatika 2 • English Ch 24-26",
      "accentColor": "#DB2777",
      "boxColor": "#FDF2F8",
      "ncertTopic": "Everyday Opposites, Rhyming Pairs & Action Verbs",
      "subject": "english",
      "pedagogicalOutcome": {
        "english": "Hands-on sensory switcher where children interactively toggle opposite states (Hot vs Cold, Big vs Small, Up vs Down) and listen to playful rhyming sound-families.",
        "hindi": "बच्चे हॉट बनाम कोल्ड, बिग बनाम स्मॉल के स्विच दबाकर विलोम शब्द और तुकबंदी वाले शब्दों का प्रत्यक्ष अनुभव करते हैं।"
      }
    },
    {
      "id": "skill_lab_e",
      "title": "Sound Blending & Segmenting Lab (E.1 - E.4)",
      "subtitle": "Onset-rime blending, 3-sound synthesis & putting sounds in order",
      "icon": "🧩",
      "badge": "Phonics Decoding • E.1-E.4",
      "accentColor": "#D97706",
      "boxColor": "#FEF3C7",
      "ncertTopic": "Phonemic Blending & Segmentation",
      "subject": "english",
      "chapterTitle": "E.1: Blend onset and rime together to make a word",
      "pedagogicalOutcome": {
        "english": "Teaches the core mechanics of early reading: combining individual phonemes (/c/ + /-at/ = cat; /d/+/o/+/g/ = dog) and segmenting spoken words.",
        "hindi": "अक्षरों की ध्वनियों को जोड़कर पूरा शब्द पढ़ने (Blending) और ध्वनियों को सही क्रम में रखने की कला।"
      }
    },
    {
      "id": "skill_lab_f",
      "title": "Beginning & Ending Sounds Explorer (F.1 - F.3)",
      "subtitle": "Detect matching starting consonant sounds and same ending phonemes",
      "icon": "🎯",
      "badge": "Phonics Discovery • F.1-F.3",
      "accentColor": "#0284C7",
      "boxColor": "#F0F9FF",
      "ncertTopic": "Initial & Final Consonant Sounds",
      "subject": "english",
      "chapterTitle": "F.1: Which two words start with the same sound?",
      "pedagogicalOutcome": {
        "english": "Enables children to isolate the starting sound in spoken words (Sun-Star = /s/) and final consonants (Bat-Hat = /t/).",
        "hindi": "शब्दों की पहली और आखिरी ध्वनि को अलग करके सुनना और समझना।"
      }
    },
    {
      "id": "skill_lab_g",
      "title": "Uppercase Consonant Phonics Lab (G.1 - G.4)",
      "subtitle": "Match 21 consonant sounds to uppercase letters (B, D, J, K, P, T, V, Z...)",
      "icon": "🔊",
      "badge": "Letter-Sound Mastery • G.1-G.4",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Uppercase Consonant Sounds",
      "subject": "english",
      "chapterTitle": "G.1: Choose the letter that matches the consonant sound: B, D, J, K, P, T, V, Z",
      "pedagogicalOutcome": {
        "english": "Systematic letter-sound correspondence for big uppercase consonants across all phonetic groups.",
        "hindi": "बड़े अक्षरों (B, D, J, K, P, T, V, Z) की ध्वनि पहचान का मजबूत अभ्यास।"
      }
    },
    {
      "id": "skill_lab_h",
      "title": "Lowercase Consonant Discovery Lab (H.1 - H.5)",
      "subtitle": "Match small letter sounds (b, d, j, k, p, t, v, z, f, l, m, n, r, s...)",
      "icon": "👂",
      "badge": "Letter-Sound Mastery • H.1-H.5",
      "accentColor": "#059669",
      "boxColor": "#ECFDF5",
      "ncertTopic": "Lowercase Consonant Sounds",
      "subject": "english",
      "chapterTitle": "H.1: Find the word that begins with a given sound",
      "pedagogicalOutcome": {
        "english": "Associates lowercase letters with authentic phonetic sounds in everyday words (pig, tub, van, fox, leaf, ring).",
        "hindi": "छोटे अक्षरों की ध्वनि पहचान और रोज़मर्रा के शब्दों में उनकी आवाज़ सुनना।"
      }
    },
    {
      "id": "skill_lab_i",
      "title": "Short 'a' Word Builder Lab (I.1 - I.2)",
      "subtitle": "CVC short 'a' words: cat, bat, fan, hat, map, bag, jam",
      "icon": "🍎",
      "badge": "Short Vowel Lab • I.1-I.2",
      "accentColor": "#DC2626",
      "boxColor": "#FEF2F2",
      "ncertTopic": "Short Vowel 'a' (CVC Words)",
      "subject": "english",
      "chapterTitle": "I.1: Find the short a word",
      "pedagogicalOutcome": {
        "english": "Focuses on the short vowel /æ/ sound in 3-letter CVC word families (-at, -an, -ap, -ag).",
        "hindi": "Short 'a' (ऐ) की ध्वनि वाले 3-अक्षर के सरल शब्द (Cat, Bat, Hat) सीखने की लैब।"
      }
    },
    {
      "id": "skill_lab_j",
      "title": "Short 'e' Word Builder Lab (J.1 - J.2)",
      "subtitle": "CVC short 'e' words: bed, pen, hen, net, red, ten, leg, web",
      "icon": "🥚",
      "badge": "Short Vowel Lab • J.1-J.2",
      "accentColor": "#D97706",
      "boxColor": "#FEF3C7",
      "ncertTopic": "Short Vowel 'e' (CVC Words)",
      "subject": "english",
      "chapterTitle": "J.1: Find the short e word",
      "pedagogicalOutcome": {
        "english": "Mastery of the short /e/ sound in CVC words (bed, pen, hen, net) with picture associations.",
        "hindi": "Short 'e' (ए) की ध्वनि वाले शब्दों (Bed, Pen, Hen, Net) का सचित्र अभ्यास।"
      }
    },
    {
      "id": "skill_lab_k",
      "title": "Short 'i' Word Builder Lab (K.1 - K.2)",
      "subtitle": "CVC short 'i' words: pig, pin, zip, sit, fin, bin, lip, bib",
      "icon": "🧊",
      "badge": "Short Vowel Lab • K.1-K.2",
      "accentColor": "#0284C7",
      "boxColor": "#E0F2FE",
      "ncertTopic": "Short Vowel 'i' (CVC Words)",
      "subject": "english",
      "chapterTitle": "K.1: Find the short i word",
      "pedagogicalOutcome": {
        "english": "Recognizing and reading CVC short /ɪ/ words (pig, pin, zip, fin, lip) through visual puzzles.",
        "hindi": "Short 'i' (इ) ध्वनि वाले शब्दों (Pig, Pin, Zip, Fin) को पढ़ने का अभ्यास।"
      }
    },
    {
      "id": "skill_lab_l",
      "title": "Short 'o' Word Builder Lab (L.1 - L.2)",
      "subtitle": "CVC short 'o' words: dog, pot, mop, box, fox, log, top, cot",
      "icon": "🐙",
      "badge": "Short Vowel Lab • L.1-L.2",
      "accentColor": "#EA580C",
      "boxColor": "#FFF7ED",
      "ncertTopic": "Short Vowel 'o' (CVC Words)",
      "subject": "english",
      "chapterTitle": "L.1: Find the short o word",
      "pedagogicalOutcome": {
        "english": "Mastering the short /ɒ/ vowel sound in CVC words (dog, pot, mop, box, fox) with picture cues.",
        "hindi": "Short 'o' (ऑ) ध्वनि वाले शब्दों (Dog, Pot, Box, Fox) की सचित्र पहचान।"
      }
    },
    {
      "id": "skill_lab_m",
      "title": "Short 'u' Word Builder Lab (M.1 - M.2)",
      "subtitle": "CVC short 'u' words: sun, bug, bus, cup, mug, tub, rug, nut",
      "icon": "☂️",
      "badge": "Short Vowel Lab • M.1-M.2",
      "accentColor": "#9333EA",
      "boxColor": "#FAF5FF",
      "ncertTopic": "Short Vowel 'u' (CVC Words)",
      "subject": "english",
      "chapterTitle": "M.1: Find the short u word",
      "pedagogicalOutcome": {
        "english": "Completing the 5 core short vowels with /ʌ/ sound words (sun, bug, bus, cup, mug).",
        "hindi": "Short 'u' (अ) ध्वनि वाले शब्दों (Sun, Bug, Bus, Cup) का उच्चारण व अभ्यास।"
      }
    },
    {
      "id": "skill_lab_n",
      "title": "Sight Words 10-Set Mastery Lab (N.1 - N.15)",
      "subtitle": "Read 50 essential high-frequency sight words in interactive sentence puzzles",
      "icon": "👁️",
      "badge": "Sight Word Fluency • N.1-N.15",
      "accentColor": "#F59E0B",
      "boxColor": "#FFFBEB",
      "ncertTopic": "High-Frequency Sight Words (Dolch & Fry)",
      "subject": "english",
      "chapterTitle": "N.1: Choose the two sight words that are the same",
      "pedagogicalOutcome": {
        "english": "Builds automatic, instantaneous reading of 50 non-decodable high-frequency words (the, to, you, said, can, look, where).",
        "hindi": "बार-बार आने वाले 50 ज़रूरी Sight Words (The, You, Said, Can, Where) को बिना रुके पढ़ना।"
      }
    },
    {
      "id": "skill_lab_o",
      "title": "Book Parts & Story Anatomy Lab (O.1)",
      "subtitle": "Front cover, author, illustrator, title & reading mechanics",
      "icon": "📖",
      "badge": "Reading Strategies • O.1",
      "accentColor": "#16A34A",
      "boxColor": "#F0FDF4",
      "ncertTopic": "Book Parts & Print Concepts",
      "subject": "english",
      "chapterTitle": "O.1: Identify book parts and features",
      "pedagogicalOutcome": {
        "english": "Introduces book handling, identifying front cover, title, author, and illustrator for early literature appreciation.",
        "hindi": "किताब के अंग (कवर, लेखक, चित्रकार, शीर्षक) पहचानकर पढ़ने की आदत डालना।"
      }
    },
    {
      "id": "skill_lab_p",
      "title": "Real vs Make-Believe Story Lab (P.1)",
      "subtitle": "Distinguish reality from fiction, fairy tales & pretend stories",
      "icon": "🪄",
      "badge": "Critical Thinking • P.1",
      "accentColor": "#9333EA",
      "boxColor": "#FAF5FF",
      "ncertTopic": "Reality vs Fiction (Fantasy)",
      "subject": "english",
      "chapterTitle": "P.1: Which could happen in real life?",
      "pedagogicalOutcome": {
        "english": "Enhances early logic and critical thinking by discerning real physical events from imaginative fairy tales.",
        "hindi": "असली घटना और काल्पनिक कहानी (Make-Believe) में अंतर समझने की तार्किक क्षमता।"
      }
    },
    {
      "id": "skill_lab_q",
      "title": "Emotions & Story Prediction Lab (Q.1 - Q.2)",
      "subtitle": "Infer characters' feelings & predict logical next story outcomes",
      "icon": "🎭",
      "badge": "Comprehension • Q.1-Q.2",
      "accentColor": "#EC4899",
      "boxColor": "#FDF2F8",
      "ncertTopic": "Inference & Story Predictions",
      "subject": "english",
      "chapterTitle": "Q.1: Which feeling matches the picture?",
      "pedagogicalOutcome": {
        "english": "Emotional quotient and narrative prediction: reading visual facial clues and anticipating story events.",
        "hindi": "पात्रों के भाव (खुश, उदास, हैरान) समझना और आगे क्या होगा इसका सही अनुमान लगाना।"
      }
    },
    {
      "id": "skill_lab_r",
      "title": "Colors & Number Words 1-10 Lab (R.1 - R.4)",
      "subtitle": "Rainbow color words and quantity number words (one to ten)",
      "icon": "🎨",
      "badge": "Vocabulary • R.1-R.4",
      "accentColor": "#F97316",
      "boxColor": "#FFF7ED",
      "ncertTopic": "Color & Number Word Vocabulary",
      "subject": "english",
      "chapterTitle": "R.1: Use colour words",
      "pedagogicalOutcome": {
        "english": "Bridges math and language by reading number words (one to ten) and primary/secondary color names.",
        "hindi": "रंगों के नाम और एक से दस तक की संख्याओं के अंग्रेजी शब्दों (One to Ten) की पहचान।"
      }
    },
    {
      "id": "english_words_vocabulary_lab",
      "title": "Animal Safari, Senses & Daily Words Lab",
      "subtitle": "Animal calls, 5 senses explorer, colors & magic polite words",
      "icon": "🦁",
      "badge": "NCERT Balvatika 2 • English Ch 18-23, 27",
      "accentColor": "#0284C7",
      "boxColor": "#F0F9FF",
      "ncertTopic": "Animal Sounds, Body Parts, Colors & Magic Words",
      "subject": "english",
      "pedagogicalOutcome": {
        "english": "Interactive soundboard where kids tap animal calls (Woof, Meow, Roar), explore body senses (Eyes to see, Ears to hear), and learn golden magic manners (Please, Thank You, Sorry).",
        "hindi": "जानवरों की बोलियाँ, शरीर के अंग और जादुई शिष्टाचार शब्द बच्चे ऑडियो के साथ खेलते हुए सीखते हैं।"
      }
    },
    {
      "id": "skill_lab_s",
      "title": "Nouns Lab: One vs Many (S.1)",
      "subtitle": "Identify singular vs plural nouns with playful visual objects",
      "icon": "📦",
      "badge": "Grammar Basics • S.1",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Nouns: Singular vs Plural",
      "subject": "english",
      "chapterTitle": "S.1: Choose the singular or plural noun that matches the picture",
      "pedagogicalOutcome": {
        "english": "Basic grammar concept of quantity: distinguishing one cat (singular) from multiple cats (plural -s).",
        "hindi": "एकवचन और बहुवचन (One vs Many) की समझ — बिल्ली (Cat) बनाम बिल्लियाँ (Cats)।"
      }
    },
    {
      "id": "skill_lab_t",
      "title": "Action Verbs & Movement Lab (T.1)",
      "subtitle": "Connect physical action words (jump, swim, run, sleep) to pictures",
      "icon": "🏃",
      "badge": "Action Verbs • T.1",
      "accentColor": "#10B981",
      "boxColor": "#ECFDF5",
      "ncertTopic": "Action Verbs & Motion",
      "subject": "english",
      "chapterTitle": "T.1: Find the picture that matches the action verb",
      "pedagogicalOutcome": {
        "english": "Associates active verb words with real physical movements (jump, swim, run, sleep, fly).",
        "hindi": "क्रिया शब्दों (Action Verbs) जैसे Jump, Swim, Run, Sleep को देखकर पहचानना।"
      }
    },
    {
      "id": "skill_lab_u",
      "title": "Adjectives & Comparison Lab (U.1)",
      "subtitle": "Compare objects: tall vs short, big vs small, hot vs cold, fast vs slow",
      "icon": "🦒",
      "badge": "Descriptive Words • U.1",
      "accentColor": "#D97706",
      "boxColor": "#FEF3C7",
      "ncertTopic": "Comparative Adjectives",
      "subject": "english",
      "chapterTitle": "U.1: Compare pictures using adjectives",
      "pedagogicalOutcome": {
        "english": "Descriptive adjective vocabulary: comparing size, temperature, height, and speed between real objects.",
        "hindi": "विशेषण शब्दों (Tall, Short, Big, Cold, Fast) से दो वस्तुओं की तुलना करना।"
      }
    },
    {
      "id": "skill_lab_v",
      "title": "Spatial Position Lab (V.1 - V.3)",
      "subtitle": "Inside vs outside, above vs below, next to vs beside",
      "icon": "↕️",
      "badge": "Spatial Vocabulary • V.1-V.3",
      "accentColor": "#0284C7",
      "boxColor": "#F0F9FF",
      "ncertTopic": "Positional & Directional Words",
      "subject": "english",
      "chapterTitle": "V.1: Inside and outside",
      "pedagogicalOutcome": {
        "english": "Spatial prepositional language: accurately describing where things are located in space.",
        "hindi": "स्थान-सूचक शब्द: अंदर-बाहर (Inside/Outside), ऊपर-नीचे (Above/Below), पास-बगल (Next to)।"
      }
    },
    {
      "id": "skill_lab_w",
      "title": "Antonyms & Opposites Studio (W.1)",
      "subtitle": "Match opposite pairs: hot/cold, happy/sad, big/small, up/down",
      "icon": "⚖️",
      "badge": "Opposites Studio • W.1",
      "accentColor": "#DB2777",
      "boxColor": "#FDF2F8",
      "ncertTopic": "Antonyms & Polar Opposites",
      "subject": "english",
      "chapterTitle": "W.1: Match antonyms to pictures",
      "pedagogicalOutcome": {
        "english": "Antonym vocabulary pairs that expand expressive language and comparative reasoning.",
        "hindi": "विलोम शब्द (Opposites) — Hot/Cold, Happy/Sad, Up/Down का सचित्र मिलान।"
      }
    },
    {
      "id": "skill_lab_x",
      "title": "Category Sorter & Odd-One-Out Lab (X.1 - X.2)",
      "subtitle": "Sort objects into fruits, animals, vehicles & find the intruder",
      "icon": "🧺",
      "badge": "Logic & Reasoning • X.1-X.2",
      "accentColor": "#7C3AED",
      "boxColor": "#F5F3FF",
      "ncertTopic": "Categorization & Odd One Out",
      "subject": "english",
      "chapterTitle": "X.1: Sort objects into categories",
      "pedagogicalOutcome": {
        "english": "Classification, semantic categories (fruits, animals, vehicles, clothes), and odd-one-out deduction.",
        "hindi": "वर्गीकरण (Sorting) और विषम (Odd One Out) को पहचानने का बौद्धिक विकास।"
      }
    },
    {
      "id": "hindi_varnamala_lab",
      "title": "हिंदी स्वर व वर्णमाला लैब (अ से अः)",
      "subtitle": "सचित्र स्वर साउंडबोर्ड, ऑडियो क्विज़ और ताली खेल",
      "icon": "🇮🇳",
      "badge": "NCERT Balvatika 2 • Hindi Ch 1-5",
      "accentColor": "#059669",
      "boxColor": "#ECFDF5",
      "ncertTopic": "स्वर पहचान (अ से अः तक सचित्र ज्ञान)",
      "subject": "hindi",
      "pedagogicalOutcome": {
        "english": "Interactive Hindi Swar soundboard where children tap vowels (अ to अः) to hear pure native Hindi pronunciation, visual objects, and complete auditory missions.",
        "hindi": "बच्चे अ से अः तक के स्वरों पर टैप करके शुद्ध उच्चारण सुनते हैं, चित्र पहचानते हैं और 5 मजेदार मिशन क्विज़ हल करते हैं।"
      }
    },
    {
      "id": "hindi_vyanjan_lab",
      "title": "प्रथम व्यंजन वाटिका (क से म)",
      "subtitle": "सचित्र व्यंजन साउंडबोर्ड, अक्षर खोजो मिशन व बालगीत",
      "icon": "🔤",
      "badge": "NCERT Balvatika 2 • Hindi Ch 6-10",
      "accentColor": "#0284C7",
      "boxColor": "#EFF6FF",
      "ncertTopic": "व्यंजन पहचान (क से म तक प्रारंभिक व्यंजन)",
      "subject": "hindi",
      "pedagogicalOutcome": {
        "english": "Young learners tap 15 core Hindi consonants (क to म) to see cheerful pictures, hear native pronunciation, and complete Letter Hunt quizzes.",
        "hindi": "बच्चे क से म तक के 15 मुख्य व्यंजनों को सचित्र छूकर सीखते हैं, शुद्ध उच्चारण सुनते हैं और अक्षर खोजो खेल खेलते हैं।"
      }
    },
    {
      "id": "hindi_pashu_pakshi_lab",
      "title": "पशु-पक्षी व ध्वनि पहचान लैब",
      "subtitle": "म्याऊं, भौं-भौं, चीं-चीं — बोलियां सुनो व सफारी क्विज़",
      "icon": "🐾",
      "badge": "NCERT Balvatika 2 • Hindi Ch 12",
      "accentColor": "#D97706",
      "boxColor": "#FEF3C7",
      "ncertTopic": "पशु-पक्षी व उनकी बोलियों की पहचान",
      "subject": "hindi",
      "pedagogicalOutcome": {
        "english": "Sensory animal and bird soundboard where toddlers tap beloved Indian animals to hear authentic Hindi sounds and solve audio safari quizzes.",
        "hindi": "बच्चे बिल्ली, कुत्ता, गाय और चिड़िया जैसे प्यारे पशु-पक्षियों की स्वाभाविक बोलियां सुनते हैं और बोली पहचान सफारी क्विज़ खेलते हैं।"
      }
    },
    {
      "id": "hindi_lab_swar_1",
      "title": "स्वर वाटिका १ (अ, आ, इ, ई) सचित्र अभ्यास लैब",
      "subtitle": "अनार, आम, इमली, ईख — चित्र देखकर पहला अक्षर पहचानें",
      "icon": "🥭",
      "badge": "NCERT Balvatika 2 • Hindi Ch 1",
      "accentColor": "#10B981",
      "boxColor": "#ECFDF5",
      "ncertTopic": "स्वर पहचान (अ से ई)",
      "subject": "hindi",
      "chapterTitle": "स्वर पहचान (अ से ई तक - अनार, आम, इमली, ईख)",
      "pedagogicalOutcome": {
        "english": "Foundational Hindi vowel practice: connecting initial vowels (अ, आ, इ, ई) with authentic cultural objects.",
        "hindi": "प्रारंभिक स्वर (अ, आ, इ, ई) और उनके चित्रों की पक्की पहचान।"
      }
    },
    {
      "id": "hindi_lab_swar_2",
      "title": "स्वर वाटिका २ (उ, ऊ, ऋ) सचित्र अभ्यास लैब",
      "subtitle": "उल्लू, ऊन, ऋषि — स्वर ध्वनि व चित्र मिलान",
      "icon": "🦉",
      "badge": "NCERT Balvatika 2 • Hindi Ch 2",
      "accentColor": "#059669",
      "boxColor": "#F0FDF4",
      "ncertTopic": "स्वर पहचान (उ से ऋ)",
      "subject": "hindi",
      "chapterTitle": "स्वर पहचान (उ से ऋ तक - उल्लू, ऊन, ऋषि)",
      "pedagogicalOutcome": {
        "english": "Vowel distinction between short /u/ and long /oo/ sounds (उल्लू, ऊन) with picture cues.",
        "hindi": "उ और ऊ के उच्चारण व मात्रा का अंतर और ऋषि (ऋ) की पहचान।"
      }
    },
    {
      "id": "hindi_lab_swar_3",
      "title": "स्वर वाटिका ३ (ए, ऐ, ओ, औ, अं, अः) अभ्यास लैब",
      "subtitle": "एड़ी, ऐनक, ओखली, औरत, अंगूर — संपूर्ण स्वर अभ्यास",
      "icon": "🍇",
      "badge": "NCERT Balvatika 2 • Hindi Ch 3-4",
      "accentColor": "#047857",
      "boxColor": "#ECFDF5",
      "ncertTopic": "स्वर पहचान (ए से अः)",
      "subject": "hindi",
      "chapterTitle": "स्वर पहचान (ए से औ तक - एड़ी, ऐनक, ओखली, औरत)",
      "pedagogicalOutcome": {
        "english": "Mastering the advanced Hindi vowels, diphthongs, and nasal sounds (अंगूर, प्रातः).",
        "hindi": "ए, ऐ, ओ, औ, अं और अः तक के सभी स्वरों का संपूर्ण सचित्र अभ्यास।"
      }
    },
    {
      "id": "hindi_lab_chitra_pehchan",
      "title": "चित्र देखकर सही स्वर चुनो लैब",
      "subtitle": "चित्र देखकर उसका पहला वर्ण बताने का इंटरैक्टिव टेस्ट",
      "icon": "🖼️",
      "badge": "NCERT Balvatika 2 • Hindi Ch 5",
      "accentColor": "#D97706",
      "boxColor": "#FEF3C7",
      "ncertTopic": "चित्र देखकर सही स्वर चुनना",
      "subject": "hindi",
      "chapterTitle": "चित्र देखकर सही स्वर चुनना",
      "pedagogicalOutcome": {
        "english": "Visual vocabulary connection: seeing everyday pictures and picking the accurate Hindi starting letter.",
        "hindi": "चित्र देखकर सही प्रथम वर्ण चुनने की अभ्यास परीक्षा।"
      }
    },
    {
      "id": "hindi_lab_akshar_khoj",
      "title": "अक्षर पहेली व जोड़ी मिलान लैब",
      "subtitle": "समान स्वर मिलाओ, चित्र और अक्षर की जोड़ी बनाओ",
      "icon": "🧩",
      "badge": "NCERT Balvatika 2 • Hindi Ch 6",
      "accentColor": "#7C3AED",
      "boxColor": "#F5F3FF",
      "ncertTopic": "स्वर मिलान व जोड़ी बनाना",
      "subject": "hindi",
      "chapterTitle": "स्वर मिलान व जोड़ी बनाना (अक्षर से अक्षर / अक्षर से चित्र)",
      "pedagogicalOutcome": {
        "english": "Memory matching and visual pairing of Hindi letters and corresponding pictures.",
        "hindi": "अक्षर से अक्षर और अक्षर से चित्र की सही जोड़ी बनाने का खेल।"
      }
    },
    {
      "id": "hindi_lab_shabda_rachna",
      "title": "सरल दो-वर्ण शब्द निर्माण लैब",
      "subtitle": "घ + र = घर, फ + ल = फल, ज + ल = जल",
      "icon": "🏡",
      "badge": "NCERT Balvatika 2 • Hindi Ch 14",
      "accentColor": "#EA580C",
      "boxColor": "#FFF7ED",
      "ncertTopic": "सरल शब्द निर्माण (दो वर्ण)",
      "subject": "hindi",
      "chapterTitle": "सरल शब्द निर्माण (दो वर्ण - घर, फल, जल, बस)",
      "pedagogicalOutcome": {
        "english": "Early Hindi word synthesis: joining two basic consonants to read first simple Hindi words.",
        "hindi": "दो बिना मात्रा वाले सरल वर्ण जोड़कर शब्द पढ़ने की पहली सीढ़ी।"
      }
    },
    {
      "id": "size_scale_lab",
      "title": "Big vs Small & Height Scale Lab",
      "subtitle": "Interactive measuring tape, height towers & size scale",
      "icon": "📏",
      "badge": "NCERT Balvatika 2 • Ch 1 & Ch 2",
      "accentColor": "#0284C7",
      "boxColor": "#E0F2FE",
      "ncertTopic": "Big vs Small, Tall vs Short & Spatial Relations",
      "subject": "maths",
      "pedagogicalOutcome": {
        "english": "Children pull interactive digital measuring tapes and size scales to physically see why a Giraffe is tall, elephant is big, and learn real-world dimensions without rote memorization.",
        "hindi": "डिजिटल फीता और ऊंचाई स्केल से बच्चे देखकर सीखते हैं कि जिराफ कितना ऊंचा है और हाथी कितना बड़ा।"
      }
    },
    {
      "id": "animal_seesaw",
      "title": "Animal Seesaw Balance",
      "subtitle": "Heavy vs Light physics with cute animals",
      "icon": "⚖️",
      "badge": "NCERT Balvatika 2 • Ch 3",
      "accentColor": "#D97706",
      "boxColor": "#FEF3C7",
      "ncertTopic": "Heavy vs Light & Comparison",
      "subject": "maths",
      "pedagogicalOutcome": {
        "english": "Interactive physics seesaw where an elephant tilts down and mouse goes up, creating intuition for mass and gravity.",
        "hindi": "हाथी और चूहे को झूले पर बिठाकर बच्चे भारी और हल्के का फर्क खुद महसूस करते हैं।"
      }
    },
    {
      "id": "shape_sorter",
      "title": "Shape & Geometry Sorter",
      "subtitle": "Sensory geometric cutouts & spatial matching",
      "icon": "🔷",
      "badge": "NCERT Balvatika 2 • Ch 5",
      "accentColor": "#7C3AED",
      "boxColor": "#F3E8FF",
      "ncertTopic": "2D Basic Shapes (Circle, Square, Triangle)",
      "subject": "maths",
      "pedagogicalOutcome": {
        "english": "Drag and drop 2D shapes (Circle, Square, Triangle, Rectangle) into matching silhouette cutouts.",
        "hindi": "वृत्त (गोला), वर्ग (चौकोर) और त्रिभुज (तिकोना) को उनके सांचों में बैठाकर आकारों की पहचान।"
      }
    },
    {
      "id": "counting_train",
      "title": "Counting Train & Garden",
      "subtitle": "1-to-5 quantity cargo loading & fruit count",
      "icon": "🚂",
      "badge": "NCERT Balvatika 2 • Ch 6",
      "accentColor": "#059669",
      "boxColor": "#DCFCE7",
      "ncertTopic": "Numbers & Counting (1 to 5)",
      "subject": "maths",
      "pedagogicalOutcome": {
        "english": "Children load the cargo train with 1 to 5 apples or stars to master one-to-one number correspondence.",
        "hindi": "ट्रेन के डिब्बों में 1 से 5 तक सेब या सितारे लोड करके गिनती और संख्या का प्रत्यक्ष संबंध समझना।"
      }
    },
    {
      "id": "pattern_builder",
      "title": "Pattern & Repeating Sequences",
      "subtitle": "Color & shape repeat patterns (AB, AAB, ABC)",
      "icon": "🧩",
      "badge": "NCERT Balvatika 2 • Ch 9",
      "accentColor": "#9333EA",
      "boxColor": "#FAF5FF",
      "ncertTopic": "Repeating Patterns & Sequences",
      "subject": "maths",
      "pedagogicalOutcome": {
        "english": "Complete color and bead patterns (Red-Blue-Red-Blue) to stimulate analytical pre-coding logic.",
        "hindi": "रंगों और मोतियों के पैटर्न पूरे करके बच्चों में तार्किक सोच और क्रमबद्धता का विकास।"
      }
    },
    {
      "id": "color_prism",
      "title": "Color Studio & Mixing Lab",
      "subtitle": "Primary colors (Red, Yellow, Blue) to Secondary",
      "icon": "🎨",
      "badge": "NCERT Balvatika 2 • Colors",
      "accentColor": "#DB2777",
      "boxColor": "#FDF2F8",
      "ncertTopic": "Primary & Secondary Color Theory",
      "subject": "maths",
      "pedagogicalOutcome": {
        "english": "Mix primary color paints to discover green, orange, and purple right before your eyes.",
        "hindi": "लाल, पीले और नीले रंग मिलाकर हरे, नारंगी और जामुनी रंग बनते देखना।"
      }
    },
    {
      "id": "maths_lab_numbers_1_5",
      "title": "Numbers 1-5 Practice Lab",
      "subtitle": "Count objects, identify digits 1 to 5 & quantity association",
      "icon": "🖐️",
      "badge": "NCERT Balvatika 2 • Maths Ch 6",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Numbers 1 to 5 & One-to-One Match",
      "subject": "maths",
      "chapterTitle": "Numbers 1 to 5 (Recognition & Counting)",
      "pedagogicalOutcome": {
        "english": "Deep practice in counting quantities up to 5 and matching digits to real-life finger counts.",
        "hindi": "1 से 5 तक की वस्तुओं को गिनना और सही अंक चुनना।"
      }
    },
    {
      "id": "maths_lab_shapes_geometry",
      "title": "2D Shapes & Spatial Geometry Lab",
      "subtitle": "Circle, square, triangle, rectangle in everyday objects",
      "icon": "📐",
      "badge": "NCERT Balvatika 2 • Maths Ch 5",
      "accentColor": "#7C3AED",
      "boxColor": "#F5F3FF",
      "ncertTopic": "2D Shapes Identification",
      "subject": "maths",
      "chapterTitle": "Shapes (Circle, Square, Triangle, Rectangle)",
      "pedagogicalOutcome": {
        "english": "Identifying geometric shapes in everyday objects (wheels as circles, doors as rectangles, slices as triangles).",
        "hindi": "दैनिक वस्तुओं (पहिया, दरवाजा, समोसा) में गोल, चौकोर और तिकोने आकार पहचानना।"
      }
    },
    {
      "id": "maths_lab_more_less",
      "title": "More vs Less Quantity Lab",
      "subtitle": "Compare groups of objects & quantity balance",
      "icon": "⚖️",
      "badge": "NCERT Balvatika 2 • Maths Ch 8",
      "accentColor": "#D97706",
      "boxColor": "#FEF3C7",
      "ncertTopic": "More vs Less Comparison",
      "subject": "maths",
      "chapterTitle": "More vs Less (Comparing Quantities)",
      "pedagogicalOutcome": {
        "english": "Visual comparison of groups: which side has more apples, which side has fewer.",
        "hindi": "दो समूहों में अधिक और कम वस्तुओं की तुलना करने की समझ।"
      }
    },
    {
      "id": "maths_lab_numbers_6_10",
      "title": "Ten-Frame Numbers 6-10 Lab",
      "subtitle": "Count collections from six to ten using ten-frame visual grids",
      "icon": "🔟",
      "badge": "NCERT Balvatika 2 • Maths Ch 10",
      "accentColor": "#059669",
      "boxColor": "#ECFDF5",
      "ncertTopic": "Numbers 6 to 10",
      "subject": "maths",
      "chapterTitle": "Numbers 6 to 10 (Counting & Writing)",
      "pedagogicalOutcome": {
        "english": "Extending counting beyond five to ten using full hand pairs and ten-frame visual structures.",
        "hindi": "6 से 10 तक की गिनती, दोनों हाथों की उंगलियों और 10-फ्रेम से अभ्यास।"
      }
    },
    {
      "id": "maths_lab_zero_concept",
      "title": "Zero Concept Empty Nest Lab",
      "subtitle": "Understand zero (0) as empty basket, nest without birds",
      "icon": "🥚",
      "badge": "NCERT Balvatika 2 • Maths Ch 11",
      "accentColor": "#64748B",
      "boxColor": "#F8FAFC",
      "ncertTopic": "Concept of Zero (0)",
      "subject": "maths",
      "chapterTitle": "Concept of Zero (0)",
      "pedagogicalOutcome": {
        "english": "Concrete understanding of Zero: an empty bowl, a tree with all apples fallen, zero remaining.",
        "hindi": "शून्य (0) की अवधारणा — खाली टोकरी, उड़ गई चिड़िया, कुछ नहीं बचा मतलब शून्य।"
      }
    },
    {
      "id": "maths_lab_spatial_order",
      "title": "Near vs Far & Spatial Position Lab",
      "subtitle": "Above/Below, Near/Far, Top/Bottom in 3D scene puzzles",
      "icon": "↕️",
      "badge": "NCERT Balvatika 2 • Maths Ch 4 & Ch 12",
      "accentColor": "#0284C7",
      "boxColor": "#F0F9FF",
      "ncertTopic": "Spatial Relations (Near, Far, Inside, Outside)",
      "subject": "maths",
      "chapterTitle": "Spatial Positions (Above/Below, Near/Far)",
      "pedagogicalOutcome": {
        "english": "3D spatial awareness: locating objects that are nearest to the house, highest in the sky, or under the bridge.",
        "hindi": "स्थानिक संबंध — पास-दूर, ऊपर-नीचे, आगे-पीछे का वास्तविक ज्ञान।"
      }
    },
    {
      "id": "maths_lab_time_routines",
      "title": "Day & Night Daily Routine Clock Lab",
      "subtitle": "Morning sun, afternoon school, evening play & starry night routines",
      "icon": "⏰",
      "badge": "NCERT Balvatika 2 • Maths Ch 14",
      "accentColor": "#F59E0B",
      "boxColor": "#FFFBEB",
      "ncertTopic": "Time & Daily Routines",
      "subject": "maths",
      "chapterTitle": "Time & Daily Routines (Morning, Afternoon, Night)",
      "pedagogicalOutcome": {
        "english": "Sequencing everyday routine events according to time of day (morning breakfast, night sleep).",
        "hindi": "दिनचर्या का समय — सुबह जागना, दोपहर खाना, शाम को खेलना और रात को सोना।"
      }
    },
    {
      "id": "maths_lab_sorting_grouping",
      "title": "Object Sorting & Classification Lab",
      "subtitle": "Sort by color, size, and shape into organized storage boxes",
      "icon": "📦",
      "badge": "NCERT Balvatika 2 • Maths Ch 13",
      "accentColor": "#7C3AED",
      "boxColor": "#FAF5FF",
      "ncertTopic": "Classification & Grouping",
      "subject": "maths",
      "chapterTitle": "Grouping & Sorting Objects",
      "pedagogicalOutcome": {
        "english": "Pre-algebraic classification: sorting toys by color, shape, or purpose into dedicated categories.",
        "hindi": "वस्तुओं को उनके रंग, आकार या उपयोग के आधार पर अलग-अलग छांटने की क्षमता।"
      }
    },
    {
      "id": "maths_skill_lab_a",
      "title": "2D Shapes & Geometry Studio (A.1 - A.6)",
      "subtitle": "Circle, square, triangle & rectangle discovery with real-life objects",
      "icon": "🔺",
      "badge": "Foundation Math • A.1-A.6",
      "accentColor": "#7C3AED",
      "boxColor": "#F5F3FF",
      "ncertTopic": "2D Shapes & Spatial Geometry",
      "subject": "maths",
      "chapterTitle": "A.1: Name the shape",
      "pedagogicalOutcome": {
        "english": "Children identify basic geometric shapes (circle, square, triangle, rectangle), recognize their corner and side attributes, and spot them in everyday objects.",
        "hindi": "बच्चे वृत्त (गोल), वर्ग (चौकोर), त्रिकोण और आयत की भुजाओं व कोनों की पहचान करते हैं और दैनिक वस्तुओं में इन्हें खोजते हैं।"
      }
    },
    {
      "id": "maths_skill_lab_b",
      "title": "Count & Quantity Lab up to 3 (B.1 - B.7)",
      "subtitle": "Dice dots, shapes, ten-frames and object counters up to 3",
      "icon": "🎲",
      "badge": "Early Numeracy • B.1-B.7",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Numbers & Counting up to 3",
      "subject": "maths",
      "chapterTitle": "B.1: Identify numbers - up to 3",
      "pedagogicalOutcome": {
        "english": "Builds solid one-to-one correspondence up to 3 using subitizing dots, visual objects, ten-frames, and number symbols.",
        "hindi": "1 से 3 तक की वस्तुओं, पासे के बिंदुओं और टेन-फ्रेम पर प्रत्यक्ष गिनती करके बुनियादी संख्या ज्ञान पक्का करते हैं।"
      }
    },
    {
      "id": "maths_skill_lab_c",
      "title": "Numbers, Dominoes & Ten-Frames to 5 Lab (C.1 - C.7)",
      "subtitle": "Subitize dot patterns, finger quantities & ten-frame mastery up to 5",
      "icon": "🖐️",
      "badge": "Early Numeracy • C.1-C.7",
      "accentColor": "#059669",
      "boxColor": "#ECFDF5",
      "ncertTopic": "Numbers & Counting up to 5",
      "subject": "maths",
      "chapterTitle": "C.1: Identify numbers - up to 5",
      "pedagogicalOutcome": {
        "english": "Strengthens counting to 5 through five-frame grids, instant pattern subitizing, and matching numerals to hands and real objects.",
        "hindi": "5 तक की गिनती, हाथ की उंगलियां, टेन-फ्रेम ग्रिड और वस्तुओं को एक-एक करके गिनने का गहन अभ्यास।"
      }
    },
    {
      "id": "maths_skill_lab_d",
      "title": "Number Mastery to 10 & Ten-Frame Grid Lab (D.1 - D.7)",
      "subtitle": "Two-hand finger counts, 10-dot grids, and object counting to 10",
      "icon": "🔟",
      "badge": "Counting Mastery • D.1-D.7",
      "accentColor": "#0284C7",
      "boxColor": "#F0F9FF",
      "ncertTopic": "Numbers & Counting up to 10",
      "subject": "maths",
      "chapterTitle": "D.1: Identify numbers - up to 10",
      "pedagogicalOutcome": {
        "english": "Extends quantitative grasp to 10 using full ten-frame grids, sequential counting, and linking numerals 1-10 to concrete groups.",
        "hindi": "1 से 10 तक की संपूर्ण गिनती, दो हाथों की उंगलियां, 10-डॉट ग्रिड और अंकों की पहचान का समग्र अभ्यास।"
      }
    },
    {
      "id": "maths_skill_lab_e",
      "title": "More, Fewer & Quantity Comparison Lab (E.1 - E.5)",
      "subtitle": "Are there enough?, more vs fewer balance & picture charts",
      "icon": "⚖️",
      "badge": "Pre-Math Logic • E.1-E.5",
      "accentColor": "#D97706",
      "boxColor": "#FEF3C7",
      "ncertTopic": "Quantity Comparison & Equality",
      "subject": "maths",
      "chapterTitle": "E.1: Are there enough?",
      "pedagogicalOutcome": {
        "english": "Develops comparative logic by pairing items one-to-one (enough carrots for bunnies?), and discerning groups with more or fewer items.",
        "hindi": "वस्तुओं का एक-से-एक मिलान (क्या सबके लिए काफी है?), अधिक और कम की तुलना तथा चार्ट देखकर मात्रा समझना।"
      }
    },
    {
      "id": "maths_skill_lab_f",
      "title": "Spatial Positions: Inside, Outside, Above, Below Lab (F.1 - F.7)",
      "subtitle": "Inside/outside, above/below, top/middle/bottom & left/right spatial awareness",
      "icon": "📦",
      "badge": "Spatial Thinking • F.1-F.7",
      "accentColor": "#9333EA",
      "boxColor": "#FAF5FF",
      "ncertTopic": "Spatial Relations & Positional Words",
      "subject": "maths",
      "chapterTitle": "F.1: Inside and outside",
      "pedagogicalOutcome": {
        "english": "Mastery of 3D spatial language: inside vs outside, above vs below, beside vs next to, left/middle/right, and top/middle/bottom.",
        "hindi": "स्थानिक दिशाएं और संबंध: डिब्बे के अंदर/बाहर, मेज के ऊपर/नीचे, बायां/बीच/दायां और सबसे ऊपर/तल पर।"
      }
    },
    {
      "id": "maths_skill_lab_g",
      "title": "Shape & Color Sorting Studio (G.1 - G.6)",
      "subtitle": "Same vs different, color sorting & shape classification",
      "icon": "🎨",
      "badge": "Classification • G.1-G.6",
      "accentColor": "#EA580C",
      "boxColor": "#FFF7ED",
      "ncertTopic": "Classification, Sorting & Attributes",
      "subject": "maths",
      "chapterTitle": "G.1: Same",
      "pedagogicalOutcome": {
        "english": "Pre-algebraic thinking through classifying objects by color and shape, isolating identical attributes, and finding differences.",
        "hindi": "समान और भिन्न की पहचान, रंग के आधार पर छांटना और आकारों के आधार पर वर्गीकरण करने की बौद्धिक क्षमता।"
      }
    },
    {
      "id": "maths_skill_lab_h",
      "title": "Repeating Pattern & Sequence Lab (H.1 - H.4)",
      "subtitle": "Color patterns, size sequences, shape rhythms & what comes next",
      "icon": "🧩",
      "badge": "Patterns & Logic • H.1-H.4",
      "accentColor": "#DB2777",
      "boxColor": "#FDF2F8",
      "ncertTopic": "Patterns & Repeating Sequences",
      "subject": "maths",
      "chapterTitle": "H.1: Color patterns",
      "pedagogicalOutcome": {
        "english": "Fosters algorithmic and pattern recognition by predicting color sequences (AB, AAB), size progressions, and next shape rhythms.",
        "hindi": "रंगों, आकारों और आकृतियों के दोहराव वाले पैटर्न (लाल-नीला-लाल-नीला) को समझना और आगे क्या आएगा उसका सटीक अनुमान लगाना।"
      }
    },
    {
      "id": "maths_skill_lab_i",
      "title": "Measurement Studio: Long, Tall, Wide, Heavy Lab (I.1 - I.4)",
      "subtitle": "Long/short, tall/short, wide/narrow & light/heavy comparisons",
      "icon": "📏",
      "badge": "Early Measurement • I.1-I.4",
      "accentColor": "#16A34A",
      "boxColor": "#F0FDF4",
      "ncertTopic": "Non-Standard Measurement & Dimensions",
      "subject": "maths",
      "chapterTitle": "I.1: Long and short",
      "pedagogicalOutcome": {
        "english": "Introduces physical measurement dimensions: comparing length (long/short), height (tall/short), width (wide/narrow), and mass (light/heavy).",
        "hindi": "लंबाई (लंबा/छोटा), ऊंचाई (ऊंचा/छोटा), चौड़ाई (चौड़ा/संकरा) और वजन (हल्का/भारी) की व्यावहारिक तुलना का ज्ञान।"
      }
    },
    {
      "id": "maths_skill_lab_j",
      "title": "Indian Coins & Money Counter Lab (J.1 - J.2)",
      "subtitle": "Identify ₹1, ₹2, ₹5, ₹10 coins & count 1-rupee coins in piggy bank",
      "icon": "🪙",
      "badge": "Money Basics • J.1-J.2",
      "accentColor": "#D97706",
      "boxColor": "#FEF3C7",
      "ncertTopic": "Indian Currency & Coin Counting",
      "subject": "maths",
      "chapterTitle": "J.1: Coin values",
      "pedagogicalOutcome": {
        "english": "Financial literacy foundations: identifying Indian coins (₹1, ₹2, ₹5, ₹10) and counting 1-rupee coins to buy simple classroom items.",
        "hindi": "भारतीय मुद्रा की पहचान: ₹1, ₹2, ₹5 और ₹10 के सिक्के पहचानना और गुल्लक में 1 रुपये के सिक्के गिनना।"
      }
    },
    {
      "id": "maths_lab_a_1",
      "title": "A.1: Name the shape",
      "subtitle": "आकार का नाम बताएं • 10 प्रश्न गहन अभ्यास",
      "icon": "🔺",
      "badge": "Foundation Math • Shapes (A.1)",
      "accentColor": "#7C3AED",
      "boxColor": "#F5F3FF",
      "ncertTopic": "Geometry & Shapes - Shapes",
      "subject": "maths",
      "chapterTitle": "A.1: Name the shape",
      "pedagogicalOutcome": {
        "english": "Children identify 2D shapes (circle, square, triangle, rectangle) by counting their sides and corners in fun visual challenges.",
        "hindi": "बच्चे बुनियादी आकृतियों (वृत्त, वर्ग, त्रिकोण, आयत) को उनकी भुजाओं और कोनों को गिनकर पहचानते हैं।"
      }
    },
    {
      "id": "maths_lab_a_2",
      "title": "A.2: Circles",
      "subtitle": "वृत्त (गोलाकार) • 10 प्रश्न गहन अभ्यास",
      "icon": "🔴",
      "badge": "Foundation Math • Shapes (A.2)",
      "accentColor": "#7C3AED",
      "boxColor": "#F5F3FF",
      "ncertTopic": "Geometry & Shapes - Shapes",
      "subject": "maths",
      "chapterTitle": "A.2: Circles",
      "pedagogicalOutcome": {
        "english": "Deep exploration of round circular shapes without straight edges or corners, recognizing everyday circles like coins, wheels, and plates.",
        "hindi": "गोल वृत्त की पहचान — कोई सीधी भुजा या कोना नहीं, जैसे पहिया, सिक्का और थाली।"
      }
    },
    {
      "id": "maths_lab_a_3",
      "title": "A.3: Squares",
      "subtitle": "वर्ग (चौकोर) • 10 प्रश्न गहन अभ्यास",
      "icon": "🟦",
      "badge": "Foundation Math • Shapes (A.3)",
      "accentColor": "#7C3AED",
      "boxColor": "#F5F3FF",
      "ncertTopic": "Geometry & Shapes - Shapes",
      "subject": "maths",
      "chapterTitle": "A.3: Squares",
      "pedagogicalOutcome": {
        "english": "Discover squares with 4 equal straight sides and 4 square corners, distinguishing them from other 4-sided figures.",
        "hindi": "वर्ग (चौकोर) की समझ — 4 बराबर भुजाएं और 4 कोने, जैसे कैरम बोर्ड और रूमाल।"
      }
    },
    {
      "id": "maths_lab_a_4",
      "title": "A.4: Triangles",
      "subtitle": "त्रिकोण (तीन कोने) • 10 प्रश्न गहन अभ्यास",
      "icon": "📐",
      "badge": "Foundation Math • Shapes (A.4)",
      "accentColor": "#7C3AED",
      "boxColor": "#F5F3FF",
      "ncertTopic": "Geometry & Shapes - Shapes",
      "subject": "maths",
      "chapterTitle": "A.4: Triangles",
      "pedagogicalOutcome": {
        "english": "Master triangles with exactly 3 sides and 3 corners in various orientations (upright, upside down, tilted).",
        "hindi": "त्रिकोण की पहचान — 3 भुजाएं और 3 कोने, चाहे त्रिकोण सीधा हो या उलटा।"
      }
    },
    {
      "id": "maths_lab_a_5",
      "title": "A.5: Rectangles",
      "subtitle": "आयत (लंबा चौकोर) • 10 प्रश्न गहन अभ्यास",
      "icon": "🟨",
      "badge": "Foundation Math • Shapes (A.5)",
      "accentColor": "#7C3AED",
      "boxColor": "#F5F3FF",
      "ncertTopic": "Geometry & Shapes - Shapes",
      "subject": "maths",
      "chapterTitle": "A.5: Rectangles",
      "pedagogicalOutcome": {
        "english": "Identify rectangles with 2 long opposite sides and 2 short opposite sides, spotting doors, books, and mobile screens.",
        "hindi": "आयत की पहचान — आमने-सामने की बराबर भुजाएं, जैसे दरवाजा, किताब और फोन स्क्रीन।"
      }
    },
    {
      "id": "maths_lab_a_6",
      "title": "A.6: Circles, squares and triangles",
      "subtitle": "वृत्त, वर्ग और त्रिकोण की पहचान • 10 प्रश्न गहन अभ्यास",
      "icon": "🔷",
      "badge": "Foundation Math • Shapes (A.6)",
      "accentColor": "#7C3AED",
      "boxColor": "#F5F3FF",
      "ncertTopic": "Geometry & Shapes - Shapes",
      "subject": "maths",
      "chapterTitle": "A.6: Circles, squares and triangles",
      "pedagogicalOutcome": {
        "english": "Synthesize geometric knowledge by discriminating between circles, squares, and triangles in mixed group puzzles.",
        "hindi": "मिश्रित आकृतियों में से सही वृत्त, वर्ग और त्रिकोण छांटने का समग्र अभ्यास।"
      }
    },
    {
      "id": "maths_lab_b_1",
      "title": "B.1: Identify numbers - up to 3",
      "subtitle": "संख्या पहचानें - 3 तक • 10 प्रश्न गहन अभ्यास",
      "icon": "🔢",
      "badge": "Foundation Math • Count to 3 (B.1)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Counting & Numbers - Count to 3",
      "subject": "maths",
      "chapterTitle": "B.1: Identify numbers - up to 3",
      "pedagogicalOutcome": {
        "english": "Instant visual numeral identification for digits 1, 2, and 3 paired with bright counting pictures.",
        "hindi": "1, 2 और 3 अंकों की पहचान और चित्रों के साथ अंकों का सीधा संबंध।"
      }
    },
    {
      "id": "maths_lab_b_2",
      "title": "B.2: Count dots - up to 3",
      "subtitle": "बिंदु गिनें - 3 तक • 10 प्रश्न गहन अभ्यास",
      "icon": "🎲",
      "badge": "Foundation Math • Count to 3 (B.2)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Counting & Numbers - Count to 3",
      "subject": "maths",
      "chapterTitle": "B.2: Count dots - up to 3",
      "pedagogicalOutcome": {
        "english": "Subitizing practice: recognizing dot patterns (1 to 3 dots) instantly like on a rolling die without one-by-one counting.",
        "hindi": "पासे के 1 से 3 बिंदुओं को देखते ही बिना गिने तुरंत संख्या पहचानने का अभ्यास।"
      }
    },
    {
      "id": "maths_lab_b_3",
      "title": "B.3: Count shapes - up to 3",
      "subtitle": "आकार गिनें - 3 तक • 10 प्रश्न गहन अभ्यास",
      "icon": "⭐",
      "badge": "Foundation Math • Count to 3 (B.3)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Counting & Numbers - Count to 3",
      "subject": "maths",
      "chapterTitle": "B.3: Count shapes - up to 3",
      "pedagogicalOutcome": {
        "english": "Count colorful geometric shapes up to 3 with one-to-one touch tagging and correspondence.",
        "hindi": "3 तक की रंग-बिरंगी आकृतियों को एक-एक करके गिनने का अभ्यास।"
      }
    },
    {
      "id": "maths_lab_b_4",
      "title": "B.4: Count objects - up to 3",
      "subtitle": "वस्तुएं गिनें - 3 तक • 10 प्रश्न गहन अभ्यास",
      "icon": "🍎",
      "badge": "Foundation Math • Count to 3 (B.4)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Counting & Numbers - Count to 3",
      "subject": "maths",
      "chapterTitle": "B.4: Count objects - up to 3",
      "pedagogicalOutcome": {
        "english": "Count delightful everyday objects (apples, balloons, ducks) up to 3 in various arrangements.",
        "hindi": "रोजमर्रा की चीजों (सेब, गुब्बारे, बत्तख) को 3 तक सही क्रम में गिनना।"
      }
    },
    {
      "id": "maths_lab_b_5",
      "title": "B.5: Count on ten frames - up to 3",
      "subtitle": "टेन-फ्रेम पर गिनें - 3 तक • 10 प्रश्न गहन अभ्यास",
      "icon": "🔲",
      "badge": "Foundation Math • Count to 3 (B.5)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Counting & Numbers - Count to 3",
      "subject": "maths",
      "chapterTitle": "B.5: Count on ten frames - up to 3",
      "pedagogicalOutcome": {
        "english": "Read quantities up to 3 placed neatly on horizontal ten-frame grids to develop early mathematical frame visualization.",
        "hindi": "टेन-फ्रेम ग्रिड पर 3 तक के बिंदुओं को देखकर संख्या बताने की समझ।"
      }
    },
    {
      "id": "maths_lab_b_6",
      "title": "B.6: Show numbers on ten frames - up to 3",
      "subtitle": "टेन-फ्रेम पर संख्या दिखाएं - 3 तक • 10 प्रश्न गहन अभ्यास",
      "icon": "🎯",
      "badge": "Foundation Math • Count to 3 (B.6)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Counting & Numbers - Count to 3",
      "subject": "maths",
      "chapterTitle": "B.6: Show numbers on ten frames - up to 3",
      "pedagogicalOutcome": {
        "english": "Construct and visualize numbers 1, 2, and 3 inside ten-frame cells starting from the left.",
        "hindi": "टेन-फ्रेम में बाएं से शुरू करके 1, 2 और 3 संख्या को सही रूप में दर्शाना।"
      }
    },
    {
      "id": "maths_lab_b_7",
      "title": "B.7: Represent numbers - up to 3",
      "subtitle": "संख्या निरूपण - 3 तक • 10 प्रश्न गहन अभ्यास",
      "icon": "📝",
      "badge": "Foundation Math • Count to 3 (B.7)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Counting & Numbers - Count to 3",
      "subject": "maths",
      "chapterTitle": "B.7: Represent numbers - up to 3",
      "pedagogicalOutcome": {
        "english": "Connect three mathematical representations: spoken words, visual dot quantities, and standard numeral symbols up to 3.",
        "hindi": "संख्या के तीन रूपों: चित्र, शब्द और अंक का आपस में सटीक मिलान।"
      }
    },
    {
      "id": "maths_lab_c_1",
      "title": "C.1: Identify numbers - up to 5",
      "subtitle": "संख्या पहचानें - 5 तक • 10 प्रश्न गहन अभ्यास",
      "icon": "🖐️",
      "badge": "Foundation Math • Count to 5 (C.1)",
      "accentColor": "#059669",
      "boxColor": "#ECFDF5",
      "ncertTopic": "Counting & Numbers - Count to 5",
      "subject": "maths",
      "chapterTitle": "C.1: Identify numbers - up to 5",
      "pedagogicalOutcome": {
        "english": "Recognize digits 1, 2, 3, 4, and 5 and connect each digit to single-hand finger counts.",
        "hindi": "1 से 5 तक के अंकों की पहचान और एक हाथ की उंगलियों से गिनती का अभ्यास।"
      }
    },
    {
      "id": "maths_lab_c_2",
      "title": "C.2: Count dots - up to 5",
      "subtitle": "बिंदु गिनें - 5 तक • 10 प्रश्न गहन अभ्यास",
      "icon": "⚄",
      "badge": "Foundation Math • Count to 5 (C.2)",
      "accentColor": "#059669",
      "boxColor": "#ECFDF5",
      "ncertTopic": "Counting & Numbers - Count to 5",
      "subject": "maths",
      "chapterTitle": "C.2: Count dots - up to 5",
      "pedagogicalOutcome": {
        "english": "Instant subitizing of standard domino and dice dot configurations up to 5 dots.",
        "hindi": "डोमिनो और पासे के 5 तक के डॉट पैटर्न को देखते ही झटपट संख्या बताना।"
      }
    },
    {
      "id": "maths_lab_c_3",
      "title": "C.3: Count shapes - up to 5",
      "subtitle": "आकार गिनें - 5 तक • 10 प्रश्न गहन अभ्यास",
      "icon": "🔶",
      "badge": "Foundation Math • Count to 5 (C.3)",
      "accentColor": "#059669",
      "boxColor": "#ECFDF5",
      "ncertTopic": "Counting & Numbers - Count to 5",
      "subject": "maths",
      "chapterTitle": "C.3: Count shapes - up to 5",
      "pedagogicalOutcome": {
        "english": "Count collections of stars, hearts, triangles, and circles up to 5 items with accuracy.",
        "hindi": "5 तक के सितारों, त्रिकोणों और गोलों को व्यवस्थित तरीके से गिनना।"
      }
    },
    {
      "id": "maths_lab_c_4",
      "title": "C.4: Count objects - up to 5",
      "subtitle": "वस्तुएं गिनें - 5 तक • 10 प्रश्न गहन अभ्यास",
      "icon": "🐟",
      "badge": "Foundation Math • Count to 5 (C.4)",
      "accentColor": "#059669",
      "boxColor": "#ECFDF5",
      "ncertTopic": "Counting & Numbers - Count to 5",
      "subject": "maths",
      "chapterTitle": "C.4: Count objects - up to 5",
      "pedagogicalOutcome": {
        "english": "Count living creatures and classroom items up to 5, establishing cardinal number understanding (the last number is total).",
        "hindi": "5 तक की वस्तुओं को गिनकर बताना कि कुल कितनी चीजें हैं।"
      }
    },
    {
      "id": "maths_lab_c_5",
      "title": "C.5: Count on ten frames - up to 5",
      "subtitle": "टेन-फ्रेम पर गिनें - 5 तक • 10 प्रश्न गहन अभ्यास",
      "icon": "🔲",
      "badge": "Foundation Math • Count to 5 (C.5)",
      "accentColor": "#059669",
      "boxColor": "#ECFDF5",
      "ncertTopic": "Counting & Numbers - Count to 5",
      "subject": "maths",
      "chapterTitle": "C.5: Count on ten frames - up to 5",
      "pedagogicalOutcome": {
        "english": "Count dot tokens on a 5-and-10 frame to build deep base-5 mental imagery.",
        "hindi": "टेन-फ्रेम पर 5 तक के टोकन गिनकर 5-संख्या का मानसिक चित्र बनाना।"
      }
    },
    {
      "id": "maths_lab_c_6",
      "title": "C.6: Show numbers on ten frames - up to 5",
      "subtitle": "टेन-फ्रेम पर संख्या दिखाएं - 5 तक • 10 प्रश्न गहन अभ्यास",
      "icon": "🎯",
      "badge": "Foundation Math • Count to 5 (C.6)",
      "accentColor": "#059669",
      "boxColor": "#ECFDF5",
      "ncertTopic": "Counting & Numbers - Count to 5",
      "subject": "maths",
      "chapterTitle": "C.6: Show numbers on ten frames - up to 5",
      "pedagogicalOutcome": {
        "english": "Select and verify ten-frame grids that match target quantities from 1 to 5.",
        "hindi": "दी गई संख्या (1 से 5) के लिए सही टेन-फ्रेम ग्रिड चुनना।"
      }
    },
    {
      "id": "maths_lab_c_7",
      "title": "C.7: Represent numbers - up to 5",
      "subtitle": "संख्या निरूपण - 5 तक • 10 प्रश्न गहन अभ्यास",
      "icon": "📝",
      "badge": "Foundation Math • Count to 5 (C.7)",
      "accentColor": "#059669",
      "boxColor": "#ECFDF5",
      "ncertTopic": "Counting & Numbers - Count to 5",
      "subject": "maths",
      "chapterTitle": "C.7: Represent numbers - up to 5",
      "pedagogicalOutcome": {
        "english": "Multi-representational fluency: linking written numerals, tally marks, finger counts, and pictures up to 5.",
        "hindi": "5 तक की संख्या को अंक, उंगली और चित्रों के साथ बहु-आयामी रूप से समझना।"
      }
    },
    {
      "id": "maths_lab_d_1",
      "title": "D.1: Identify numbers - up to 10",
      "subtitle": "संख्या पहचानें - 10 तक • 10 प्रश्न गहन अभ्यास",
      "icon": "🔟",
      "badge": "Foundation Math • Count to 10 (D.1)",
      "accentColor": "#0284C7",
      "boxColor": "#F0F9FF",
      "ncertTopic": "Counting & Numbers - Count to 10",
      "subject": "maths",
      "chapterTitle": "D.1: Identify numbers - up to 10",
      "pedagogicalOutcome": {
        "english": "Recognize two-digit baseline milestone 10 and all digits from 1 through 10 with clear distinction between 6 and 9.",
        "hindi": "1 से 10 तक के सभी अंकों की पहचान और 6 तथा 9 के भ्रम को दूर करना।"
      }
    },
    {
      "id": "maths_lab_d_2",
      "title": "D.2: Count dots - up to 10",
      "subtitle": "बिंदु गिनें - 10 तक • 10 प्रश्न गहन अभ्यास",
      "icon": "🔘",
      "badge": "Foundation Math • Count to 10 (D.2)",
      "accentColor": "#0284C7",
      "boxColor": "#F0F9FF",
      "ncertTopic": "Counting & Numbers - Count to 10",
      "subject": "maths",
      "chapterTitle": "D.2: Count dots - up to 10",
      "pedagogicalOutcome": {
        "english": "Count structured dot arrays up to 10 in rows of 5 for effortless subitizing and grouping.",
        "hindi": "5-5 की कतारों में व्यवस्थित 10 तक के बिंदुओं को तेजी से गिनना।"
      }
    },
    {
      "id": "maths_lab_d_3",
      "title": "D.3: Count shapes - up to 10",
      "subtitle": "आकार गिनें - 10 तक • 10 प्रश्न गहन अभ्यास",
      "icon": "🔷",
      "badge": "Foundation Math • Count to 10 (D.3)",
      "accentColor": "#0284C7",
      "boxColor": "#F0F9FF",
      "ncertTopic": "Counting & Numbers - Count to 10",
      "subject": "maths",
      "chapterTitle": "D.3: Count shapes - up to 10",
      "pedagogicalOutcome": {
        "english": "Count scattered and linear shapes up to 10 with tracking discipline so no item is skipped or double-counted.",
        "hindi": "10 तक की आकृतियों को बिना दोहराए या छोड़े सावधानी से गिनना।"
      }
    },
    {
      "id": "maths_lab_d_4",
      "title": "D.4: Count objects - up to 10",
      "subtitle": "वस्तुएं गिनें - 10 तक • 10 प्रश्न गहन अभ्यास",
      "icon": "🦋",
      "badge": "Foundation Math • Count to 10 (D.4)",
      "accentColor": "#0284C7",
      "boxColor": "#F0F9FF",
      "ncertTopic": "Counting & Numbers - Count to 10",
      "subject": "maths",
      "chapterTitle": "D.4: Count objects - up to 10",
      "pedagogicalOutcome": {
        "english": "Real-world object counting up to 10 (butterflies, crayons, cupcakes, pencils) with cheerful feedback.",
        "hindi": "10 तक की वस्तुओं (तितलियां, पेंसिलें, कप केक) की वास्तविक गिनती का अभ्यास।"
      }
    },
    {
      "id": "maths_lab_d_5",
      "title": "D.5: Count on ten frames - up to 10",
      "subtitle": "टेन-फ्रेम पर गिनें - 10 तक • 10 प्रश्न गहन अभ्यास",
      "icon": "🔲",
      "badge": "Foundation Math • Count to 10 (D.5)",
      "accentColor": "#0284C7",
      "boxColor": "#F0F9FF",
      "ncertTopic": "Counting & Numbers - Count to 10",
      "subject": "maths",
      "chapterTitle": "D.5: Count on ten frames - up to 10",
      "pedagogicalOutcome": {
        "english": "Master full 10-frame visual grids, realizing a full row equals 5 and both full rows equal 10.",
        "hindi": "टेन-फ्रेम ग्रिड: एक पूरी कतार = 5 और दोनों कतारें भरी होने पर = 10 की ठोस समझ।"
      }
    },
    {
      "id": "maths_lab_d_6",
      "title": "D.6: Show numbers on ten frames - up to 10",
      "subtitle": "टेन-फ्रेम पर संख्या दिखाएं - 10 तक • 10 प्रश्न गहन अभ्यास",
      "icon": "🎯",
      "badge": "Foundation Math • Count to 10 (D.6)",
      "accentColor": "#0284C7",
      "boxColor": "#F0F9FF",
      "ncertTopic": "Counting & Numbers - Count to 10",
      "subject": "maths",
      "chapterTitle": "D.6: Show numbers on ten frames - up to 10",
      "pedagogicalOutcome": {
        "english": "Identify ten-frame representations for larger numbers 6, 7, 8, 9, and full 10.",
        "hindi": "6, 7, 8, 9 और पूरे 10 के लिए सही टेन-फ्रेम ग्रिड की पहचान।"
      }
    },
    {
      "id": "maths_lab_d_7",
      "title": "D.7: Represent numbers - up to 10",
      "subtitle": "संख्या निरूपण - 10 तक • 10 प्रश्न गहन अभ्यास",
      "icon": "📝",
      "badge": "Foundation Math • Count to 10 (D.7)",
      "accentColor": "#0284C7",
      "boxColor": "#F0F9FF",
      "ncertTopic": "Counting & Numbers - Count to 10",
      "subject": "maths",
      "chapterTitle": "D.7: Represent numbers - up to 10",
      "pedagogicalOutcome": {
        "english": "Integrate two-hand 10-finger counting with numerals, words, and ten-frame models for 1-10 mastery.",
        "hindi": "दोनों हाथों की 10 उंगलियां, अंक और शब्द मिलाकर 10 तक की संपूर्ण निपुणता।"
      }
    },
    {
      "id": "maths_lab_e_1",
      "title": "E.1: Are there enough?",
      "subtitle": "क्या पर्याप्त हैं? (One-to-One) • 10 प्रश्न गहन अभ्यास",
      "icon": "🥕",
      "badge": "Foundation Math • Comparing (E.1)",
      "accentColor": "#D97706",
      "boxColor": "#FEF3C7",
      "ncertTopic": "Comparing & Positions - Comparing",
      "subject": "maths",
      "chapterTitle": "E.1: Are there enough?",
      "pedagogicalOutcome": {
        "english": "One-to-one matching correspondence to answer 'Are there enough?' (e.g., carrots for bunnies, hats for kids).",
        "hindi": "एक-से-एक मिलान: क्या प्रत्येक खरगोश के लिए गाजर पर्याप्त है?"
      }
    },
    {
      "id": "maths_lab_e_2",
      "title": "E.2: More",
      "subtitle": "अधिक (More) • 10 प्रश्न गहन अभ्यास",
      "icon": "📈",
      "badge": "Foundation Math • Comparing (E.2)",
      "accentColor": "#D97706",
      "boxColor": "#FEF3C7",
      "ncertTopic": "Comparing & Positions - Comparing",
      "subject": "maths",
      "chapterTitle": "E.2: More",
      "pedagogicalOutcome": {
        "english": "Identify which group has MORE items through visual comparison and quantity counting.",
        "hindi": "दो समूहों को देखकर या गिनकर बताना कि किस समूह में 'अधिक' वस्तुएं हैं।"
      }
    },
    {
      "id": "maths_lab_e_3",
      "title": "E.3: Fewer",
      "subtitle": "कम (Fewer / Less) • 10 प्रश्न गहन अभ्यास",
      "icon": "📉",
      "badge": "Foundation Math • Comparing (E.3)",
      "accentColor": "#D97706",
      "boxColor": "#FEF3C7",
      "ncertTopic": "Comparing & Positions - Comparing",
      "subject": "maths",
      "chapterTitle": "E.3: Fewer",
      "pedagogicalOutcome": {
        "english": "Identify which group has FEWER / LESS items, strengthening opposite quantitative reasoning.",
        "hindi": "तुलना करके बताना कि किस समूह में 'कम' वस्तुएं हैं।"
      }
    },
    {
      "id": "maths_lab_e_4",
      "title": "E.4: Compare in a chart",
      "subtitle": "चार्ट में तुलना करें • 10 प्रश्न गहन अभ्यास",
      "icon": "📊",
      "badge": "Foundation Math • Comparing (E.4)",
      "accentColor": "#D97706",
      "boxColor": "#FEF3C7",
      "ncertTopic": "Comparing & Positions - Comparing",
      "subject": "maths",
      "chapterTitle": "E.4: Compare in a chart",
      "pedagogicalOutcome": {
        "english": "Read simple vertical and horizontal pictograph charts to compare quantities visually.",
        "hindi": "चित्र चार्ट देखकर तुलना करना कि कौन सा बार अधिक या कम है।"
      }
    },
    {
      "id": "maths_lab_e_5",
      "title": "E.5: Compare groups",
      "subtitle": "समूहों की तुलना करें • 10 प्रश्न गहन अभ्यास",
      "icon": "⚖️",
      "badge": "Foundation Math • Comparing (E.5)",
      "accentColor": "#D97706",
      "boxColor": "#FEF3C7",
      "ncertTopic": "Comparing & Positions - Comparing",
      "subject": "maths",
      "chapterTitle": "E.5: Compare groups",
      "pedagogicalOutcome": {
        "english": "Compare two or three distinct groups to determine which group is largest, smallest, or equal.",
        "hindi": "तीन समूहों की आपस में तुलना करके सबसे बड़ा या बराबर समूह पहचानना।"
      }
    },
    {
      "id": "maths_lab_f_1",
      "title": "F.1: Inside and outside",
      "subtitle": "अंदर और बाहर (Inside / Outside) • 10 प्रश्न गहन अभ्यास",
      "icon": "📦",
      "badge": "Foundation Math • Positions (F.1)",
      "accentColor": "#9333EA",
      "boxColor": "#FAF5FF",
      "ncertTopic": "Comparing & Positions - Positions",
      "subject": "maths",
      "chapterTitle": "F.1: Inside and outside",
      "pedagogicalOutcome": {
        "english": "Distinguish between inside and outside boundaries with boxes, baskets, fences, and ponds.",
        "hindi": "अंदर और बाहर की पहचान — डिब्बे के अंदर बिल्ली या टोकरी के बाहर गेंद।"
      }
    },
    {
      "id": "maths_lab_f_2",
      "title": "F.2: Above and below",
      "subtitle": "ऊपर और नीचे (Above / Below) • 10 प्रश्न गहन अभ्यास",
      "icon": "⬆️",
      "badge": "Foundation Math • Positions (F.2)",
      "accentColor": "#9333EA",
      "boxColor": "#FAF5FF",
      "ncertTopic": "Comparing & Positions - Positions",
      "subject": "maths",
      "chapterTitle": "F.2: Above and below",
      "pedagogicalOutcome": {
        "english": "Understand vertical spatial positions: above (higher in space) versus below (lower in space).",
        "hindi": "ऊपर और नीचे की समझ — मेज के ऊपर किताब या पलंग के नीचे खिलौना।"
      }
    },
    {
      "id": "maths_lab_f_3",
      "title": "F.3: Beside and next to",
      "subtitle": "पास और बगल में (Beside / Next to) • 10 प्रश्न गहन अभ्यास",
      "icon": "↔️",
      "badge": "Foundation Math • Positions (F.3)",
      "accentColor": "#9333EA",
      "boxColor": "#FAF5FF",
      "ncertTopic": "Comparing & Positions - Positions",
      "subject": "maths",
      "chapterTitle": "F.3: Beside and next to",
      "pedagogicalOutcome": {
        "english": "Grasp lateral adjacency: beside and next to, describing items positioned side-by-side.",
        "hindi": "पास और बगल में (Next to) — एक-दूसरे के साथ रखी वस्तुओं की स्थिति।"
      }
    },
    {
      "id": "maths_lab_f_4",
      "title": "F.4: Left and right",
      "subtitle": "बायां और दायां (Left / Right) • 10 प्रश्न गहन अभ्यास",
      "icon": "👉",
      "badge": "Foundation Math • Positions (F.4)",
      "accentColor": "#9333EA",
      "boxColor": "#FAF5FF",
      "ncertTopic": "Comparing & Positions - Positions",
      "subject": "maths",
      "chapterTitle": "F.4: Left and right",
      "pedagogicalOutcome": {
        "english": "Foundational directional orientation: distinguishing left hand/side from right hand/side.",
        "hindi": "बायां और दायां (Left vs Right) — अपने बाएं और दाएं हाथ की दिशा पहचानना।"
      }
    },
    {
      "id": "maths_lab_f_5",
      "title": "F.5: Left, middle and right",
      "subtitle": "बायां, बीच और दायां (Left, Middle, Right) • 10 प्रश्न गहन अभ्यास",
      "icon": "🎯",
      "badge": "Foundation Math • Positions (F.5)",
      "accentColor": "#9333EA",
      "boxColor": "#FAF5FF",
      "ncertTopic": "Comparing & Positions - Positions",
      "subject": "maths",
      "chapterTitle": "F.5: Left, middle and right",
      "pedagogicalOutcome": {
        "english": "Three-position lateral arrays: identify which item is on the left, in the middle, or on the right.",
        "hindi": "तीन वस्तुओं की पंक्ति में बायां, बीच वाला और दायां पहचानना।"
      }
    },
    {
      "id": "maths_lab_f_6",
      "title": "F.6: Top and bottom",
      "subtitle": "शीर्ष और तल (Top / Bottom) • 10 प्रश्न गहन अभ्यास",
      "icon": "🏔️",
      "badge": "Foundation Math • Positions (F.6)",
      "accentColor": "#9333EA",
      "boxColor": "#FAF5FF",
      "ncertTopic": "Comparing & Positions - Positions",
      "subject": "maths",
      "chapterTitle": "F.6: Top and bottom",
      "pedagogicalOutcome": {
        "english": "Vertical extremes: top versus bottom on shelves, ladders, mountains, and towers.",
        "hindi": "शीर्ष और तल (Top vs Bottom) — सीढ़ी के सबसे ऊपर या सबसे नीचे।"
      }
    },
    {
      "id": "maths_lab_f_7",
      "title": "F.7: Top, middle and bottom",
      "subtitle": "ऊपर, बीच और नीचे (Top, Middle, Bottom) • 10 प्रश्न गहन अभ्यास",
      "icon": "🚦",
      "badge": "Foundation Math • Positions (F.7)",
      "accentColor": "#9333EA",
      "boxColor": "#FAF5FF",
      "ncertTopic": "Comparing & Positions - Positions",
      "subject": "maths",
      "chapterTitle": "F.7: Top, middle and bottom",
      "pedagogicalOutcome": {
        "english": "Three-tier vertical stacks: identify top, middle, and bottom tiers in traffic lights and bunk beds.",
        "hindi": "तीन स्तरों में ऊपर, बीच और नीचे की सटीक पहचान (जैसे ट्रैफिक लाइट)।"
      }
    },
    {
      "id": "maths_lab_g_1",
      "title": "G.1: Same",
      "subtitle": "समान (Same) • 10 प्रश्न गहन अभ्यास",
      "icon": "👯",
      "badge": "Foundation Math • Classify (G.1)",
      "accentColor": "#EA580C",
      "boxColor": "#FFF7ED",
      "ncertTopic": "Classify & Patterns - Classify",
      "subject": "maths",
      "chapterTitle": "G.1: Same",
      "pedagogicalOutcome": {
        "english": "Visual discrimination of identical attributes: spot items that are exactly the same in shape, color, or kind.",
        "hindi": "समान (Same) चीजों की पहचान — जो रंग, आकार या प्रकार में बिल्कुल एक जैसी हैं।"
      }
    },
    {
      "id": "maths_lab_g_2",
      "title": "G.2: Different",
      "subtitle": "भिन्न (Different / Odd One) • 10 प्रश्न गहन अभ्यास",
      "icon": "🔍",
      "badge": "Foundation Math • Classify (G.2)",
      "accentColor": "#EA580C",
      "boxColor": "#FFF7ED",
      "ncertTopic": "Classify & Patterns - Classify",
      "subject": "maths",
      "chapterTitle": "G.2: Different",
      "pedagogicalOutcome": {
        "english": "Odd-one-out deduction: identify the single item that is different from the rest in a group.",
        "hindi": "विषम (Different / Odd One) को पहचानना जो बाकी समूह से अलग है।"
      }
    },
    {
      "id": "maths_lab_g_3",
      "title": "G.3: Same and different",
      "subtitle": "समान और भिन्न तुलना • 10 प्रश्न गहन अभ्यास",
      "icon": "⚖️",
      "badge": "Foundation Math • Classify (G.3)",
      "accentColor": "#EA580C",
      "boxColor": "#FFF7ED",
      "ncertTopic": "Classify & Patterns - Classify",
      "subject": "maths",
      "chapterTitle": "G.3: Same and different",
      "pedagogicalOutcome": {
        "english": "Compare pairs of objects and decide whether they are the same or different.",
        "hindi": "दो वस्तुओं की तुलना करके तय करना कि वे समान हैं या भिन्न।"
      }
    },
    {
      "id": "maths_lab_g_4",
      "title": "G.4: Classify shapes by color",
      "subtitle": "रंग के आधार पर आकार छाँटें • 10 प्रश्न गहन अभ्यास",
      "icon": "🎨",
      "badge": "Foundation Math • Classify (G.4)",
      "accentColor": "#EA580C",
      "boxColor": "#FFF7ED",
      "ncertTopic": "Classify & Patterns - Classify",
      "subject": "maths",
      "chapterTitle": "G.4: Classify shapes by color",
      "pedagogicalOutcome": {
        "english": "Classify geometric shapes based strictly on color attributes regardless of their shape.",
        "hindi": "आकार भूलकर केवल रंग के आधार पर चीजों को छांटना (सभी लाल एक तरफ)।"
      }
    },
    {
      "id": "maths_lab_g_5",
      "title": "G.5: Classify and sort by shape",
      "subtitle": "आकार के आधार पर छाँटें • 10 प्रश्न गहन अभ्यास",
      "icon": "🧩",
      "badge": "Foundation Math • Classify (G.5)",
      "accentColor": "#EA580C",
      "boxColor": "#FFF7ED",
      "ncertTopic": "Classify & Patterns - Classify",
      "subject": "maths",
      "chapterTitle": "G.5: Classify and sort by shape",
      "pedagogicalOutcome": {
        "english": "Classify and sort items by their geometric shape regardless of color or size differences.",
        "hindi": "रंग भूलकर केवल आकार के आधार पर छांटना (सभी गोल एक तरफ)।"
      }
    },
    {
      "id": "maths_lab_g_6",
      "title": "G.6: Classify and sort by color",
      "subtitle": "रंग के आधार पर वस्तुएं छाँटें • 10 प्रश्न गहन अभ्यास",
      "icon": "🌈",
      "badge": "Foundation Math • Classify (G.6)",
      "accentColor": "#EA580C",
      "boxColor": "#FFF7ED",
      "ncertTopic": "Classify & Patterns - Classify",
      "subject": "maths",
      "chapterTitle": "G.6: Classify and sort by color",
      "pedagogicalOutcome": {
        "english": "Sort diverse everyday objects into color bins, establishing multi-attribute logical categorization.",
        "hindi": "अलग-अलग खिलौनों और फलों को उनके सही रंग के डिब्बे में छांटना।"
      }
    },
    {
      "id": "maths_lab_h_1",
      "title": "H.1: Color patterns",
      "subtitle": "रंगों के पैटर्न (AB, AAB) • 10 प्रश्न गहन अभ्यास",
      "icon": "🟡",
      "badge": "Foundation Math • Patterns (H.1)",
      "accentColor": "#DB2777",
      "boxColor": "#FDF2F8",
      "ncertTopic": "Classify & Patterns - Patterns",
      "subject": "maths",
      "chapterTitle": "H.1: Color patterns",
      "pedagogicalOutcome": {
        "english": "Recognize, predict, and continue simple AB and AAB repeating color patterns (e.g. Red, Blue, Red, Blue).",
        "hindi": "रंगों के पैटर्न पहचानना और आगे बढ़ाना (जैसे: लाल, पीला, लाल, पीला)।"
      }
    },
    {
      "id": "maths_lab_h_2",
      "title": "H.2: Size patterns",
      "subtitle": "आकार के पैटर्न (बड़ा, छोटा) • 10 प्रश्न गहन अभ्यास",
      "icon": "🐘",
      "badge": "Foundation Math • Patterns (H.2)",
      "accentColor": "#DB2777",
      "boxColor": "#FDF2F8",
      "ncertTopic": "Classify & Patterns - Patterns",
      "subject": "maths",
      "chapterTitle": "H.2: Size patterns",
      "pedagogicalOutcome": {
        "english": "Identify size-based alternating sequences (Big, Small, Big, Small) and predict the subsequent element.",
        "hindi": "आकार के पैटर्न — बड़ा, छोटा, बड़ा, छोटा का क्रम समझना।"
      }
    },
    {
      "id": "maths_lab_h_3",
      "title": "H.3: Shape patterns",
      "subtitle": "आकृतियों के पैटर्न (🔺, 🟦) • 10 प्रश्न गहन अभ्यास",
      "icon": "🔺",
      "badge": "Foundation Math • Patterns (H.3)",
      "accentColor": "#DB2777",
      "boxColor": "#FDF2F8",
      "ncertTopic": "Classify & Patterns - Patterns",
      "subject": "maths",
      "chapterTitle": "H.3: Shape patterns",
      "pedagogicalOutcome": {
        "english": "Decode geometric shape patterns (Circle, Triangle, Circle, Triangle) and complete missing segments.",
        "hindi": "आकृतियों के पैटर्न (गोला, त्रिकोण, गोला, त्रिकोण) को पूरा करना।"
      }
    },
    {
      "id": "maths_lab_h_4",
      "title": "H.4: What comes next?",
      "subtitle": "आगे क्या आएगा? (Next Pattern) • 10 प्रश्न गहन अभ्यास",
      "icon": "❓",
      "badge": "Foundation Math • Patterns (H.4)",
      "accentColor": "#DB2777",
      "boxColor": "#FDF2F8",
      "ncertTopic": "Classify & Patterns - Patterns",
      "subject": "maths",
      "chapterTitle": "H.4: What comes next?",
      "pedagogicalOutcome": {
        "english": "Algorithmic thinking: analyze repeating patterns of colors, sizes, or shapes to answer 'What comes next?'.",
        "hindi": "तार्किक क्रमबद्धता: पैटर्न देखकर बताना कि आगे कौन सा चित्र आएगा।"
      }
    },
    {
      "id": "maths_lab_i_1",
      "title": "I.1: Long and short",
      "subtitle": "लंबा और छोटा (Long / Short) • 10 प्रश्न गहन अभ्यास",
      "icon": "📏",
      "badge": "Foundation Math • Size (I.1)",
      "accentColor": "#16A34A",
      "boxColor": "#F0FDF4",
      "ncertTopic": "Measurement & Money - Size",
      "subject": "maths",
      "chapterTitle": "I.1: Long and short",
      "pedagogicalOutcome": {
        "english": "Compare horizontal lengths: distinguish between long and short pencils, snakes, trains, and rulers.",
        "hindi": "लंबाई की तुलना: लंबी और छोटी पेंसिल, सांप या रस्सी की पहचान।"
      }
    },
    {
      "id": "maths_lab_i_2",
      "title": "I.2: Tall and short",
      "subtitle": "ऊंचा और छोटा (Tall / Short) • 10 प्रश्न गहन अभ्यास",
      "icon": "🦒",
      "badge": "Foundation Math • Size (I.2)",
      "accentColor": "#16A34A",
      "boxColor": "#F0FDF4",
      "ncertTopic": "Measurement & Money - Size",
      "subject": "maths",
      "chapterTitle": "I.2: Tall and short",
      "pedagogicalOutcome": {
        "english": "Compare vertical heights: distinguish between tall giraffes/trees and short mice/bushes.",
        "hindi": "ऊंचाई की तुलना: ऊंचा जिराफ/पेड़ बनाम छोटा चूहा/पौधा।"
      }
    },
    {
      "id": "maths_lab_i_3",
      "title": "I.3: Wide and narrow",
      "subtitle": "चौड़ा और संकरा (Wide / Narrow) • 10 प्रश्न गहन अभ्यास",
      "icon": "🛣️",
      "badge": "Foundation Math • Size (I.3)",
      "accentColor": "#16A34A",
      "boxColor": "#F0FDF4",
      "ncertTopic": "Measurement & Money - Size",
      "subject": "maths",
      "chapterTitle": "I.3: Wide and narrow",
      "pedagogicalOutcome": {
        "english": "Examine width dimensions: distinguish between wide roads/bridges and narrow paths/ribbons.",
        "hindi": "चौड़ाई की तुलना: चौड़ी सड़क/पुल बनाम संकरा रास्ता/फीता।"
      }
    },
    {
      "id": "maths_lab_i_4",
      "title": "I.4: Light and heavy",
      "subtitle": "हल्का और भारी (Light / Heavy) • 10 प्रश्न गहन अभ्यास",
      "icon": "🪨",
      "badge": "Foundation Math • Size (I.4)",
      "accentColor": "#16A34A",
      "boxColor": "#F0FDF4",
      "ncertTopic": "Measurement & Money - Size",
      "subject": "maths",
      "chapterTitle": "I.4: Light and heavy",
      "pedagogicalOutcome": {
        "english": "Intuitive mass and weight: discern between light feathers/leaves and heavy rocks/elephants.",
        "hindi": "वजन की तुलना: हल्का पंख/पत्ता बनाम भारी पत्थर/हाथी।"
      }
    },
    {
      "id": "maths_lab_j_1",
      "title": "J.1: Coin values",
      "subtitle": "सिक्कों का मूल्य (₹1, ₹2, ₹5, ₹10) • 10 प्रश्न गहन अभ्यास",
      "icon": "🪙",
      "badge": "Foundation Math • Money (J.1)",
      "accentColor": "#D97706",
      "boxColor": "#FEF3C7",
      "ncertTopic": "Measurement & Money - Money",
      "subject": "maths",
      "chapterTitle": "J.1: Coin values",
      "pedagogicalOutcome": {
        "english": "Identify common Indian coins (₹1, ₹2, ₹5, ₹10) by their engraved numerals and metal colors.",
        "hindi": "भारतीय सिक्कों की पहचान: ₹1, ₹2, ₹5 और ₹10 के सिक्के पहचानना।"
      }
    },
    {
      "id": "maths_lab_j_2",
      "title": "J.2: Count 1-rupee coins",
      "subtitle": "1 रुपये के सिक्के गिनें • 10 प्रश्न गहन अभ्यास",
      "icon": "💰",
      "badge": "Foundation Math • Money (J.2)",
      "accentColor": "#D97706",
      "boxColor": "#FEF3C7",
      "ncertTopic": "Measurement & Money - Money",
      "subject": "maths",
      "chapterTitle": "J.2: Count 1-rupee coins",
      "pedagogicalOutcome": {
        "english": "Count 1-rupee coins in a piggy bank or cash tray to find total money amount in Rupees.",
        "hindi": "गुल्लक में 1 रुपये के सिक्के गिनकर कुल रुपए बताना।"
      }
    },
    {
      "id": "ukg_eng_lab_a_1",
      "title": "A.1: Find the letter in the alphabet: uppercase",
      "subtitle": "वर्णमाला में बड़ा अक्षर पहचानें (Uppercase) • 10 प्रश्न गहन अभ्यास",
      "icon": "🔤",
      "badge": "UKG English • Letter identification (A.1)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Letter identification",
      "subject": "english",
      "chapterTitle": "A.1: Find the letter in the alphabet: uppercase",
      "pedagogicalOutcome": {
        "english": "Children identify and distinguish uppercase and lowercase letters, auditory cues, and visually similar letters.",
        "hindi": "बच्चे बड़े और छोटे अक्षरों की पहचान, ध्वनि और मिलते-जुलते अक्षरों में अंतर सीखते हैं।"
      }
    },
    {
      "id": "ukg_eng_lab_a_2",
      "title": "A.2: Find the letter in the alphabet: lowercase",
      "subtitle": "वर्णमाला में छोटा अक्षर पहचानें (Lowercase) • 10 प्रश्न गहन अभ्यास",
      "icon": "🔡",
      "badge": "UKG English • Letter identification (A.2)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Letter identification",
      "subject": "english",
      "chapterTitle": "A.2: Find the letter in the alphabet: lowercase",
      "pedagogicalOutcome": {
        "english": "Children identify and distinguish uppercase and lowercase letters, auditory cues, and visually similar letters.",
        "hindi": "बच्चे बड़े और छोटे अक्षरों की पहचान, ध्वनि और मिलते-जुलते अक्षरों में अंतर सीखते हैं।"
      }
    },
    {
      "id": "ukg_eng_lab_a_3",
      "title": "A.3: Choose the letter that you hear: uppercase",
      "subtitle": "सुनकर सही बड़ा अक्षर चुनें • 10 प्रश्न गहन अभ्यास",
      "icon": "🎧",
      "badge": "UKG English • Letter identification (A.3)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Letter identification",
      "subject": "english",
      "chapterTitle": "A.3: Choose the letter that you hear: uppercase",
      "pedagogicalOutcome": {
        "english": "Children identify and distinguish uppercase and lowercase letters, auditory cues, and visually similar letters.",
        "hindi": "बच्चे बड़े और छोटे अक्षरों की पहचान, ध्वनि और मिलते-जुलते अक्षरों में अंतर सीखते हैं।"
      }
    },
    {
      "id": "ukg_eng_lab_a_4",
      "title": "A.4: Choose the letter that you hear: lowercase",
      "subtitle": "सुनकर सही छोटा अक्षर चुनें • 10 प्रश्न गहन अभ्यास",
      "icon": "👂",
      "badge": "UKG English • Letter identification (A.4)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Letter identification",
      "subject": "english",
      "chapterTitle": "A.4: Choose the letter that you hear: lowercase",
      "pedagogicalOutcome": {
        "english": "Children identify and distinguish uppercase and lowercase letters, auditory cues, and visually similar letters.",
        "hindi": "बच्चे बड़े और छोटे अक्षरों की पहचान, ध्वनि और मिलते-जुलते अक्षरों में अंतर सीखते हैं।"
      }
    },
    {
      "id": "ukg_eng_lab_a_5",
      "title": "A.5: Frequently confused letters: find the letter",
      "subtitle": "भ्रमित करने वाले अक्षर (b, d, p, q) पहचानें • 10 प्रश्न गहन अभ्यास",
      "icon": "🔍",
      "badge": "UKG English • Letter identification (A.5)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Letter identification",
      "subject": "english",
      "chapterTitle": "A.5: Frequently confused letters: find the letter",
      "pedagogicalOutcome": {
        "english": "Children identify and distinguish uppercase and lowercase letters, auditory cues, and visually similar letters.",
        "hindi": "बच्चे बड़े और छोटे अक्षरों की पहचान, ध्वनि और मिलते-जुलते अक्षरों में अंतर सीखते हैं।"
      }
    },
    {
      "id": "ukg_eng_lab_a_6",
      "title": "A.6: Frequently confused letters: find all the letters",
      "subtitle": "भ्रमित करने वाले सभी अक्षर छाँटें • 10 प्रश्न गहन अभ्यास",
      "icon": "🧩",
      "badge": "UKG English • Letter identification (A.6)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Letter identification",
      "subject": "english",
      "chapterTitle": "A.6: Frequently confused letters: find all the letters",
      "pedagogicalOutcome": {
        "english": "Children identify and distinguish uppercase and lowercase letters, auditory cues, and visually similar letters.",
        "hindi": "बच्चे बड़े और छोटे अक्षरों की पहचान, ध्वनि और मिलते-जुलते अक्षरों में अंतर सीखते हैं।"
      }
    },
    {
      "id": "ukg_eng_lab_b_1",
      "title": "B.1: Choose the lowercase letter that matches: c, k, o, p, s, u, v, w, x, z",
      "subtitle": "समान आकार वाले छोटे अक्षर पहचानें • 10 प्रश्न गहन अभ्यास",
      "icon": "🔀",
      "badge": "UKG English • Lowercase and uppercase letters (B.1)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Lowercase and uppercase letters",
      "subject": "english",
      "chapterTitle": "B.1: Choose the lowercase letter that matches: c, k, o, p, s, u, v, w, x, z",
      "pedagogicalOutcome": {
        "english": "Children master letter-sound mapping, beginning/ending letter recognition, and alphabetical sequencing (ABC order).",
        "hindi": "बच्चे अक्षरों की ध्वनि, शुरुआती/अंतिम अक्षर पहचान और वर्णमाला क्रम (ABC Order) का अभ्यास करते हैं।"
      }
    },
    {
      "id": "ukg_eng_lab_b_2",
      "title": "B.2: Choose the lowercase letter that matches: f, i, j, l, m, t, y",
      "subtitle": "छोटे अक्षर मिलान (f, i, j, l, m, t, y) • 10 प्रश्न गहन अभ्यास",
      "icon": "🔀",
      "badge": "UKG English • Lowercase and uppercase letters (B.2)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Lowercase and uppercase letters",
      "subject": "english",
      "chapterTitle": "B.2: Choose the lowercase letter that matches: f, i, j, l, m, t, y",
      "pedagogicalOutcome": {
        "english": "Children master letter-sound mapping, beginning/ending letter recognition, and alphabetical sequencing (ABC order).",
        "hindi": "बच्चे अक्षरों की ध्वनि, शुरुआती/अंतिम अक्षर पहचान और वर्णमाला क्रम (ABC Order) का अभ्यास करते हैं।"
      }
    },
    {
      "id": "ukg_eng_lab_b_3",
      "title": "B.3: Choose the lowercase letter that matches: a, b, d, e, g, h, n, q, r",
      "subtitle": "छोटे अक्षर मिलान (a, b, d, e, g, h, n, q, r) • 10 प्रश्न गहन अभ्यास",
      "icon": "🔀",
      "badge": "UKG English • Lowercase and uppercase letters (B.3)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Lowercase and uppercase letters",
      "subject": "english",
      "chapterTitle": "B.3: Choose the lowercase letter that matches: a, b, d, e, g, h, n, q, r",
      "pedagogicalOutcome": {
        "english": "Children master letter-sound mapping, beginning/ending letter recognition, and alphabetical sequencing (ABC order).",
        "hindi": "बच्चे अक्षरों की ध्वनि, शुरुआती/अंतिम अक्षर पहचान और वर्णमाला क्रम (ABC Order) का अभ्यास करते हैं।"
      }
    },
    {
      "id": "ukg_eng_lab_b_4",
      "title": "B.4: Choose the lowercase letter that matches: review",
      "subtitle": "छोटे अक्षर मिलान (अभ्यास समीक्षा) • 10 प्रश्न गहन अभ्यास",
      "icon": "📝",
      "badge": "UKG English • Lowercase and uppercase letters (B.4)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Lowercase and uppercase letters",
      "subject": "english",
      "chapterTitle": "B.4: Choose the lowercase letter that matches: review",
      "pedagogicalOutcome": {
        "english": "Children master letter-sound mapping, beginning/ending letter recognition, and alphabetical sequencing (ABC order).",
        "hindi": "बच्चे अक्षरों की ध्वनि, शुरुआती/अंतिम अक्षर पहचान और वर्णमाला क्रम (ABC Order) का अभ्यास करते हैं।"
      }
    },
    {
      "id": "ukg_eng_lab_b_5",
      "title": "B.5: Find all the lowercase letters",
      "subtitle": "सभी छोटे अक्षर (Lowercase) खोजें • 10 प्रश्न गहन अभ्यास",
      "icon": "🔡",
      "badge": "UKG English • Lowercase and uppercase letters (B.5)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Lowercase and uppercase letters",
      "subject": "english",
      "chapterTitle": "B.5: Find all the lowercase letters",
      "pedagogicalOutcome": {
        "english": "Children master letter-sound mapping, beginning/ending letter recognition, and alphabetical sequencing (ABC order).",
        "hindi": "बच्चे अक्षरों की ध्वनि, शुरुआती/अंतिम अक्षर पहचान और वर्णमाला क्रम (ABC Order) का अभ्यास करते हैं।"
      }
    },
    {
      "id": "ukg_eng_lab_b_6",
      "title": "B.6: Choose the uppercase letter that matches: C, K, O, P, S, U, V, W, X, Z",
      "subtitle": "बड़े अक्षर मिलान (C, K, O, P, S, U, V, W, X, Z) • 10 प्रश्न गहन अभ्यास",
      "icon": "🔠",
      "badge": "UKG English • Lowercase and uppercase letters (B.6)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Lowercase and uppercase letters",
      "subject": "english",
      "chapterTitle": "B.6: Choose the uppercase letter that matches: C, K, O, P, S, U, V, W, X, Z",
      "pedagogicalOutcome": {
        "english": "Children master letter-sound mapping, beginning/ending letter recognition, and alphabetical sequencing (ABC order).",
        "hindi": "बच्चे अक्षरों की ध्वनि, शुरुआती/अंतिम अक्षर पहचान और वर्णमाला क्रम (ABC Order) का अभ्यास करते हैं।"
      }
    },
    {
      "id": "ukg_eng_lab_b_7",
      "title": "B.7: Choose the uppercase letter that matches: F, I, J, L, M, T, Y",
      "subtitle": "बड़े अक्षर मिलान (F, I, J, L, M, T, Y) • 10 प्रश्न गहन अभ्यास",
      "icon": "🔠",
      "badge": "UKG English • Lowercase and uppercase letters (B.7)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Lowercase and uppercase letters",
      "subject": "english",
      "chapterTitle": "B.7: Choose the uppercase letter that matches: F, I, J, L, M, T, Y",
      "pedagogicalOutcome": {
        "english": "Children master letter-sound mapping, beginning/ending letter recognition, and alphabetical sequencing (ABC order).",
        "hindi": "बच्चे अक्षरों की ध्वनि, शुरुआती/अंतिम अक्षर पहचान और वर्णमाला क्रम (ABC Order) का अभ्यास करते हैं।"
      }
    },
    {
      "id": "ukg_eng_lab_b_8",
      "title": "B.8: Choose the uppercase letter that matches: A, B, D, E, G, H, N, Q, R",
      "subtitle": "बड़े अक्षर मिलान (A, B, D, E, G, H, N, Q, R) • 10 प्रश्न गहन अभ्यास",
      "icon": "🔠",
      "badge": "UKG English • Lowercase and uppercase letters (B.8)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Lowercase and uppercase letters",
      "subject": "english",
      "chapterTitle": "B.8: Choose the uppercase letter that matches: A, B, D, E, G, H, N, Q, R",
      "pedagogicalOutcome": {
        "english": "Children master letter-sound mapping, beginning/ending letter recognition, and alphabetical sequencing (ABC order).",
        "hindi": "बच्चे अक्षरों की ध्वनि, शुरुआती/अंतिम अक्षर पहचान और वर्णमाला क्रम (ABC Order) का अभ्यास करते हैं।"
      }
    },
    {
      "id": "ukg_eng_lab_b_9",
      "title": "B.9: Choose the uppercase letter that matches: review",
      "subtitle": "बड़े अक्षर मिलान (अभ्यास समीक्षा) • 10 प्रश्न गहन अभ्यास",
      "icon": "📝",
      "badge": "UKG English • Lowercase and uppercase letters (B.9)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Lowercase and uppercase letters",
      "subject": "english",
      "chapterTitle": "B.9: Choose the uppercase letter that matches: review",
      "pedagogicalOutcome": {
        "english": "Children master letter-sound mapping, beginning/ending letter recognition, and alphabetical sequencing (ABC order).",
        "hindi": "बच्चे अक्षरों की ध्वनि, शुरुआती/अंतिम अक्षर पहचान और वर्णमाला क्रम (ABC Order) का अभ्यास करते हैं।"
      }
    },
    {
      "id": "ukg_eng_lab_b_10",
      "title": "B.10: Find all the uppercase letters",
      "subtitle": "सभी बड़े अक्षर (Uppercase) खोजें • 10 प्रश्न गहन अभ्यास",
      "icon": "🔤",
      "badge": "UKG English • Lowercase and uppercase letters (B.10)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Lowercase and uppercase letters",
      "subject": "english",
      "chapterTitle": "B.10: Find all the uppercase letters",
      "pedagogicalOutcome": {
        "english": "Children master letter-sound mapping, beginning/ending letter recognition, and alphabetical sequencing (ABC order).",
        "hindi": "बच्चे अक्षरों की ध्वनि, शुरुआती/अंतिम अक्षर पहचान और वर्णमाला क्रम (ABC Order) का अभ्यास करते हैं।"
      }
    },
    {
      "id": "ukg_eng_lab_b_11",
      "title": "B.11: Put the letters in ABC order",
      "subtitle": "अक्षरों को वर्णमाला क्रम (ABC Order) में रखें • 10 प्रश्न गहन अभ्यास",
      "icon": "🔤",
      "badge": "UKG English • Lowercase and uppercase letters (B.11)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Lowercase and uppercase letters",
      "subject": "english",
      "chapterTitle": "B.11: Put the letters in ABC order",
      "pedagogicalOutcome": {
        "english": "Children master letter-sound mapping, beginning/ending letter recognition, and alphabetical sequencing (ABC order).",
        "hindi": "बच्चे अक्षरों की ध्वनि, शुरुआती/अंतिम अक्षर पहचान और वर्णमाला क्रम (ABC Order) का अभ्यास करते हैं।"
      }
    },
    {
      "id": "ukg_eng_lab_c_1",
      "title": "C.1: Choose the two words that are the same",
      "subtitle": "समान दिखने वाले दो शब्द चुनें • 10 प्रश्न गहन अभ्यास",
      "icon": "👯",
      "badge": "UKG English • Word recognition (C.1)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Word recognition",
      "subject": "english",
      "chapterTitle": "C.1: Choose the two words that are the same",
      "pedagogicalOutcome": {
        "english": "Children identify rhyming word pairs and detect non-rhyming words to build phonological sensitivity.",
        "hindi": "तुकबंदी (Rhyming) वाले शब्दों की पहचान और गैर-तुकबंदी शब्दों को अलग करना।"
      }
    },
    {
      "id": "ukg_eng_lab_c_2",
      "title": "C.2: Choose the sentence that is spaced correctly",
      "subtitle": "शब्दों के बीच सही दूरी (Spacing) वाला वाक्य चुनें • 10 प्रश्न गहन अभ्यास",
      "icon": "📏",
      "badge": "UKG English • Word recognition (C.2)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Word recognition",
      "subject": "english",
      "chapterTitle": "C.2: Choose the sentence that is spaced correctly",
      "pedagogicalOutcome": {
        "english": "Children identify rhyming word pairs and detect non-rhyming words to build phonological sensitivity.",
        "hindi": "तुकबंदी (Rhyming) वाले शब्दों की पहचान और गैर-तुकबंदी शब्दों को अलग करना।"
      }
    },
    {
      "id": "ukg_eng_lab_c_3",
      "title": "C.3: Find a word in a sentence",
      "subtitle": "वाक्य में दिए गए शब्द को खोजें • 10 प्रश्न गहन अभ्यास",
      "icon": "🔎",
      "badge": "UKG English • Word recognition (C.3)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Word recognition",
      "subject": "english",
      "chapterTitle": "C.3: Find a word in a sentence",
      "pedagogicalOutcome": {
        "english": "Children identify rhyming word pairs and detect non-rhyming words to build phonological sensitivity.",
        "hindi": "तुकबंदी (Rhyming) वाले शब्दों की पहचान और गैर-तुकबंदी शब्दों को अलग करना।"
      }
    },
    {
      "id": "ukg_eng_lab_d_1",
      "title": "D.1: Sort consonants and vowels",
      "subtitle": "स्वर (Vowels) और व्यंजन (Consonants) को छाँटें • 10 प्रश्न गहन अभ्यास",
      "icon": "🔠",
      "badge": "UKG English • Consonants and vowels (D.1)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Consonants and vowels",
      "subject": "english",
      "chapterTitle": "D.1: Sort consonants and vowels",
      "pedagogicalOutcome": {
        "english": "Children classify letters into consonants and vowels and identify vowel phonemes in words.",
        "hindi": "स्वर (Vowels) और व्यंजन (Consonants) का वर्गीकरण और शब्दों में स्वर खोजना।"
      }
    },
    {
      "id": "ukg_eng_lab_d_2",
      "title": "D.2: Find the vowel in the word",
      "subtitle": "शब्द में स्वर (A, E, I, O, U) पहचानें • 10 प्रश्न गहन अभ्यास",
      "icon": "⭐",
      "badge": "UKG English • Consonants and vowels (D.2)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Consonants and vowels",
      "subject": "english",
      "chapterTitle": "D.2: Find the vowel in the word",
      "pedagogicalOutcome": {
        "english": "Children classify letters into consonants and vowels and identify vowel phonemes in words.",
        "hindi": "स्वर (Vowels) और व्यंजन (Consonants) का वर्गीकरण और शब्दों में स्वर खोजना।"
      }
    },
    {
      "id": "ukg_eng_lab_e_1",
      "title": "E.1: How many syllables does the word have?",
      "subtitle": "शब्द में कितने शब्दांश (Syllables/ताली) हैं? • 10 प्रश्न गहन अभ्यास",
      "icon": "👏",
      "badge": "UKG English • Syllables (E.1)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Syllables",
      "subject": "english",
      "chapterTitle": "E.1: How many syllables does the word have?",
      "pedagogicalOutcome": {
        "english": "Children count, clap, and compare syllables (1, 2, and 3 syllables) in spoken words.",
        "hindi": "शब्दों को 1, 2 और 3 शब्दांशों (Syllables) में ताली बजाकर गिनना और तुलना करना।"
      }
    },
    {
      "id": "ukg_eng_lab_e_2",
      "title": "E.2: Which word has more syllables?",
      "subtitle": "किस शब्द में अधिक शब्दांश (Syllables) हैं? • 10 प्रश्न गहन अभ्यास",
      "icon": "📈",
      "badge": "UKG English • Syllables (E.2)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Syllables",
      "subject": "english",
      "chapterTitle": "E.2: Which word has more syllables?",
      "pedagogicalOutcome": {
        "english": "Children count, clap, and compare syllables (1, 2, and 3 syllables) in spoken words.",
        "hindi": "शब्दों को 1, 2 और 3 शब्दांशों (Syllables) में ताली बजाकर गिनना और तुलना करना।"
      }
    },
    {
      "id": "ukg_eng_lab_e_3",
      "title": "E.3: Sort by the number of syllables",
      "subtitle": "शब्दांश संख्या (1, 2, 3) के अनुसार छाँटें • 10 प्रश्न गहन अभ्यास",
      "icon": "📊",
      "badge": "UKG English • Syllables (E.3)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Syllables",
      "subject": "english",
      "chapterTitle": "E.3: Sort by the number of syllables",
      "pedagogicalOutcome": {
        "english": "Children count, clap, and compare syllables (1, 2, and 3 syllables) in spoken words.",
        "hindi": "शब्दों को 1, 2 और 3 शब्दांशों (Syllables) में ताली बजाकर गिनना और तुलना करना।"
      }
    },
    {
      "id": "ukg_eng_lab_f_1",
      "title": "F.1: Which word has the same ending?",
      "subtitle": "समान अंत वाली ध्वनि वाला शब्द चुनें • 10 प्रश्न गहन अभ्यास",
      "icon": "🎵",
      "badge": "UKG English • Rhyming (F.1)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Rhyming",
      "subject": "english",
      "chapterTitle": "F.1: Which word has the same ending?",
      "pedagogicalOutcome": {
        "english": "Children discover alliteration, identifying words sharing identical initial sounds and completing alliterative sentences.",
        "hindi": "एक जैसी शुरुआती ध्वनि वाले शब्दों (Alliteration) की पहचान और अभ्यास।"
      }
    },
    {
      "id": "ukg_eng_lab_f_2",
      "title": "F.2: Which two words have the same ending?",
      "subtitle": "समान तुकबंदी वाले दो शब्द चुनें • 10 प्रश्न गहन अभ्यास",
      "icon": "🎶",
      "badge": "UKG English • Rhyming (F.2)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Rhyming",
      "subject": "english",
      "chapterTitle": "F.2: Which two words have the same ending?",
      "pedagogicalOutcome": {
        "english": "Children discover alliteration, identifying words sharing identical initial sounds and completing alliterative sentences.",
        "hindi": "एक जैसी शुरुआती ध्वनि वाले शब्दों (Alliteration) की पहचान और अभ्यास।"
      }
    },
    {
      "id": "ukg_eng_lab_f_3",
      "title": "F.3: Choose the picture that rhymes with the word",
      "subtitle": "दिए गए शब्द से तुक मिलाने वाला चित्र चुनें • 10 प्रश्न गहन अभ्यास",
      "icon": "🖼️",
      "badge": "UKG English • Rhyming (F.3)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Rhyming",
      "subject": "english",
      "chapterTitle": "F.3: Choose the picture that rhymes with the word",
      "pedagogicalOutcome": {
        "english": "Children discover alliteration, identifying words sharing identical initial sounds and completing alliterative sentences.",
        "hindi": "एक जैसी शुरुआती ध्वनि वाले शब्दों (Alliteration) की पहचान और अभ्यास।"
      }
    },
    {
      "id": "ukg_eng_lab_f_4",
      "title": "F.4: Which word does not rhyme?",
      "subtitle": "कौन सा शब्द तुक नहीं मिलाता (Odd One Out)? • 10 प्रश्न गहन अभ्यास",
      "icon": "❌",
      "badge": "UKG English • Rhyming (F.4)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Rhyming",
      "subject": "english",
      "chapterTitle": "F.4: Which word does not rhyme?",
      "pedagogicalOutcome": {
        "english": "Children discover alliteration, identifying words sharing identical initial sounds and completing alliterative sentences.",
        "hindi": "एक जैसी शुरुआती ध्वनि वाले शब्दों (Alliteration) की पहचान और अभ्यास।"
      }
    },
    {
      "id": "ukg_eng_lab_f_5",
      "title": "F.5: Complete the rhyme",
      "subtitle": "तुकबंदी वाली कविता या वाक्य पूरा करें • 10 प्रश्न गहन अभ्यास",
      "icon": "✨",
      "badge": "UKG English • Rhyming (F.5)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Rhyming",
      "subject": "english",
      "chapterTitle": "F.5: Complete the rhyme",
      "pedagogicalOutcome": {
        "english": "Children discover alliteration, identifying words sharing identical initial sounds and completing alliterative sentences.",
        "hindi": "एक जैसी शुरुआती ध्वनि वाले शब्दों (Alliteration) की पहचान और अभ्यास।"
      }
    },
    {
      "id": "ukg_eng_lab_g_1",
      "title": "G.1: Blend onset and rime together to make a word",
      "subtitle": "शुरुआती ध्वनि और अंत जोड़कर शब्द बनाएं • 10 प्रश्न गहन अभ्यास",
      "icon": "🧩",
      "badge": "UKG English • Blending and segmenting (G.1)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Blending and segmenting",
      "subject": "english",
      "chapterTitle": "G.1: Blend onset and rime together to make a word",
      "pedagogicalOutcome": {
        "english": "Children blend individual phonemes into words and segment spoken words into initial, middle, and final sounds.",
        "hindi": "ध्वनियों को जोड़कर शब्द बनाना (Blending) और शब्दों को अलग-अलग ध्वनियों में तोड़ना (Segmenting)।"
      }
    },
    {
      "id": "ukg_eng_lab_g_2",
      "title": "G.2: Blend each sound in a word together",
      "subtitle": "अलग-अलग ध्वनियों को मिलाकर शब्द पढ़ें • 10 प्रश्न गहन अभ्यास",
      "icon": "🗣️",
      "badge": "UKG English • Blending and segmenting (G.2)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Blending and segmenting",
      "subject": "english",
      "chapterTitle": "G.2: Blend each sound in a word together",
      "pedagogicalOutcome": {
        "english": "Children blend individual phonemes into words and segment spoken words into initial, middle, and final sounds.",
        "hindi": "ध्वनियों को जोड़कर शब्द बनाना (Blending) और शब्दों को अलग-अलग ध्वनियों में तोड़ना (Segmenting)।"
      }
    },
    {
      "id": "ukg_eng_lab_g_3",
      "title": "G.3: Identify the first, second and last sound in a word",
      "subtitle": "पहली, दूसरी और अंतिम ध्वनि पहचानें • 10 प्रश्न गहन अभ्यास",
      "icon": "🎯",
      "badge": "UKG English • Blending and segmenting (G.3)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Blending and segmenting",
      "subject": "english",
      "chapterTitle": "G.3: Identify the first, second and last sound in a word",
      "pedagogicalOutcome": {
        "english": "Children blend individual phonemes into words and segment spoken words into initial, middle, and final sounds.",
        "hindi": "ध्वनियों को जोड़कर शब्द बनाना (Blending) और शब्दों को अलग-अलग ध्वनियों में तोड़ना (Segmenting)।"
      }
    },
    {
      "id": "ukg_eng_lab_g_4",
      "title": "G.4: Put the sounds in order",
      "subtitle": "ध्वनियों को सही क्रम में व्यवस्थित करें • 10 प्रश्न गहन अभ्यास",
      "icon": "🔢",
      "badge": "UKG English • Blending and segmenting (G.4)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Blending and segmenting",
      "subject": "english",
      "chapterTitle": "G.4: Put the sounds in order",
      "pedagogicalOutcome": {
        "english": "Children blend individual phonemes into words and segment spoken words into initial, middle, and final sounds.",
        "hindi": "ध्वनियों को जोड़कर शब्द बनाना (Blending) और शब्दों को अलग-अलग ध्वनियों में तोड़ना (Segmenting)।"
      }
    },
    {
      "id": "ukg_eng_lab_h_1",
      "title": "H.1: Which two words start with the same sound?",
      "subtitle": "समान पहली ध्वनि से शुरू होने वाले दो शब्द • 10 प्रश्न गहन अभ्यास",
      "icon": "🔔",
      "badge": "UKG English • Beginning and ending sounds (H.1)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Beginning and ending sounds",
      "subject": "english",
      "chapterTitle": "H.1: Which two words start with the same sound?",
      "pedagogicalOutcome": {
        "english": "Children isolate initial and terminal consonant sounds across diverse everyday words.",
        "hindi": "शब्दों के शुरुआत और अंत की व्यंजन ध्वनियों को पहचानना।"
      }
    },
    {
      "id": "ukg_eng_lab_h_2",
      "title": "H.2: Which word ends with the same sound?",
      "subtitle": "समान अंतिम ध्वनि वाला शब्द पहचानें • 10 प्रश्न गहन अभ्यास",
      "icon": "🔚",
      "badge": "UKG English • Beginning and ending sounds (H.2)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Beginning and ending sounds",
      "subject": "english",
      "chapterTitle": "H.2: Which word ends with the same sound?",
      "pedagogicalOutcome": {
        "english": "Children isolate initial and terminal consonant sounds across diverse everyday words.",
        "hindi": "शब्दों के शुरुआत और अंत की व्यंजन ध्वनियों को पहचानना।"
      }
    },
    {
      "id": "ukg_eng_lab_h_3",
      "title": "H.3: Which two words end with the same sound?",
      "subtitle": "समान अंतिम ध्वनि वाले दो शब्द चुनें • 10 प्रश्न गहन अभ्यास",
      "icon": "🎯",
      "badge": "UKG English • Beginning and ending sounds (H.3)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Beginning and ending sounds",
      "subject": "english",
      "chapterTitle": "H.3: Which two words end with the same sound?",
      "pedagogicalOutcome": {
        "english": "Children isolate initial and terminal consonant sounds across diverse everyday words.",
        "hindi": "शब्दों के शुरुआत और अंत की व्यंजन ध्वनियों को पहचानना।"
      }
    },
    {
      "id": "ukg_eng_lab_i_1",
      "title": "I.1: Find the words that begin with a given sound",
      "subtitle": "दी गई ध्वनि से शुरू होने वाले शब्द खोजें • 10 प्रश्न गहन अभ्यास",
      "icon": "🔊",
      "badge": "UKG English • Letter-sound associations (I.1)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Letter-sound associations",
      "subject": "english",
      "chapterTitle": "I.1: Find the words that begin with a given sound",
      "pedagogicalOutcome": {
        "english": "Children manipulate initial, medial, and final phonemes to transform words and build phonemic flexibility.",
        "hindi": "ध्वनियों को बदलकर नए शब्द बनाना और फोनिक्स में लचीलापन लाना।"
      }
    },
    {
      "id": "ukg_eng_lab_i_2",
      "title": "I.2: Choose the letter that matches the consonant sound: b, d, j, k, p, t, v, z",
      "subtitle": "व्यंजन ध्वनि मिलान (b, d, j, k, p, t, v, z) • 10 प्रश्न गहन अभ्यास",
      "icon": "🅱️",
      "badge": "UKG English • Letter-sound associations (I.2)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Letter-sound associations",
      "subject": "english",
      "chapterTitle": "I.2: Choose the letter that matches the consonant sound: b, d, j, k, p, t, v, z",
      "pedagogicalOutcome": {
        "english": "Children manipulate initial, medial, and final phonemes to transform words and build phonemic flexibility.",
        "hindi": "ध्वनियों को बदलकर नए शब्द बनाना और फोनिक्स में लचीलापन लाना।"
      }
    },
    {
      "id": "ukg_eng_lab_i_3",
      "title": "I.3: Choose the letter that matches the consonant sound: f, l, m, n, r, s",
      "subtitle": "व्यंजन ध्वनि मिलान (f, l, m, n, r, s) • 10 प्रश्न गहन अभ्यास",
      "icon": "🔤",
      "badge": "UKG English • Letter-sound associations (I.3)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Letter-sound associations",
      "subject": "english",
      "chapterTitle": "I.3: Choose the letter that matches the consonant sound: f, l, m, n, r, s",
      "pedagogicalOutcome": {
        "english": "Children manipulate initial, medial, and final phonemes to transform words and build phonemic flexibility.",
        "hindi": "ध्वनियों को बदलकर नए शब्द बनाना और फोनिक्स में लचीलापन लाना।"
      }
    },
    {
      "id": "ukg_eng_lab_i_4",
      "title": "I.4: Choose the letter that matches the consonant sound: c, g, h, w",
      "subtitle": "व्यंजन ध्वनि मिलान (c, g, h, w) • 10 प्रश्न गहन अभ्यास",
      "icon": "🔡",
      "badge": "UKG English • Letter-sound associations (I.4)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Letter-sound associations",
      "subject": "english",
      "chapterTitle": "I.4: Choose the letter that matches the consonant sound: c, g, h, w",
      "pedagogicalOutcome": {
        "english": "Children manipulate initial, medial, and final phonemes to transform words and build phonemic flexibility.",
        "hindi": "ध्वनियों को बदलकर नए शब्द बनाना और फोनिक्स में लचीलापन लाना।"
      }
    },
    {
      "id": "ukg_eng_lab_i_5",
      "title": "I.5: Choose the letter that matches the consonant sound: review",
      "subtitle": "व्यंजन ध्वनि अभ्यास समीक्षा • 10 प्रश्न गहन अभ्यास",
      "icon": "📝",
      "badge": "UKG English • Letter-sound associations (I.5)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Letter-sound associations",
      "subject": "english",
      "chapterTitle": "I.5: Choose the letter that matches the consonant sound: review",
      "pedagogicalOutcome": {
        "english": "Children manipulate initial, medial, and final phonemes to transform words and build phonemic flexibility.",
        "hindi": "ध्वनियों को बदलकर नए शब्द बनाना और फोनिक्स में लचीलापन लाना।"
      }
    },
    {
      "id": "ukg_eng_lab_i_6",
      "title": "I.6: Which letter does the word start with?",
      "subtitle": "शब्द किस अक्षर से शुरू होता है? • 10 प्रश्न गहन अभ्यास",
      "icon": "🟢",
      "badge": "UKG English • Letter-sound associations (I.6)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Letter-sound associations",
      "subject": "english",
      "chapterTitle": "I.6: Which letter does the word start with?",
      "pedagogicalOutcome": {
        "english": "Children manipulate initial, medial, and final phonemes to transform words and build phonemic flexibility.",
        "hindi": "ध्वनियों को बदलकर नए शब्द बनाना और फोनिक्स में लचीलापन लाना।"
      }
    },
    {
      "id": "ukg_eng_lab_i_7",
      "title": "I.7: Which letter does the word end with?",
      "subtitle": "शब्द किस अक्षर पर समाप्त होता है? • 10 प्रश्न गहन अभ्यास",
      "icon": "🔴",
      "badge": "UKG English • Letter-sound associations (I.7)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Letter-sound associations",
      "subject": "english",
      "chapterTitle": "I.7: Which letter does the word end with?",
      "pedagogicalOutcome": {
        "english": "Children manipulate initial, medial, and final phonemes to transform words and build phonemic flexibility.",
        "hindi": "ध्वनियों को बदलकर नए शब्द बनाना और फोनिक्स में लचीलापन लाना।"
      }
    },
    {
      "id": "ukg_eng_lab_j_1",
      "title": "J.1: Which consonant blend does the word start with?",
      "subtitle": "शब्द किस शुरुआती ब्लेंड (bl, cl, tr, st) से शुरू होता है? • 10 प्रश्न गहन अभ्यास",
      "icon": "🌟",
      "badge": "UKG English • Consonant blends and digraphs (J.1)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Consonant blends and digraphs",
      "subject": "english",
      "chapterTitle": "J.1: Which consonant blend does the word start with?",
      "pedagogicalOutcome": {
        "english": "Mastery of consonant blends (bl, cl, tr, st) and digraphs (ch, sh, th, wh, -ck, -ss, -ll) for advanced word decoding.",
        "hindi": "संयुक्त ध्वनियों (Blends: bl, cl, st) और संयुक्ताक्षरों (Digraphs: sh, ch, th, wh, -ck) का उन्नत अभ्यास।"
      }
    },
    {
      "id": "ukg_eng_lab_j_2",
      "title": "J.2: Complete the word with the right initial consonant blend",
      "subtitle": "सही ब्लेंड जोड़कर शब्द पूरा करें • 10 प्रश्न गहन अभ्यास",
      "icon": "✏️",
      "badge": "UKG English • Consonant blends and digraphs (J.2)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Consonant blends and digraphs",
      "subject": "english",
      "chapterTitle": "J.2: Complete the word with the right initial consonant blend",
      "pedagogicalOutcome": {
        "english": "Mastery of consonant blends (bl, cl, tr, st) and digraphs (ch, sh, th, wh, -ck, -ss, -ll) for advanced word decoding.",
        "hindi": "संयुक्त ध्वनियों (Blends: bl, cl, st) और संयुक्ताक्षरों (Digraphs: sh, ch, th, wh, -ck) का उन्नत अभ्यास।"
      }
    },
    {
      "id": "ukg_eng_lab_j_3",
      "title": "J.3: Does the word start with a consonant blend?",
      "subtitle": "क्या यह शब्द ब्लेंड से शुरू होता है? (हाँ/ना) • 10 प्रश्न गहन अभ्यास",
      "icon": "❓",
      "badge": "UKG English • Consonant blends and digraphs (J.3)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Consonant blends and digraphs",
      "subject": "english",
      "chapterTitle": "J.3: Does the word start with a consonant blend?",
      "pedagogicalOutcome": {
        "english": "Mastery of consonant blends (bl, cl, tr, st) and digraphs (ch, sh, th, wh, -ck, -ss, -ll) for advanced word decoding.",
        "hindi": "संयुक्त ध्वनियों (Blends: bl, cl, st) और संयुक्ताक्षरों (Digraphs: sh, ch, th, wh, -ck) का उन्नत अभ्यास।"
      }
    },
    {
      "id": "ukg_eng_lab_j_4",
      "title": "J.4: Which consonant blend does the word end with?",
      "subtitle": "शब्द किस अंतिम ब्लेंड (nd, mp, st, nk) पर खत्म होता है? • 10 प्रश्न गहन अभ्यास",
      "icon": "🏁",
      "badge": "UKG English • Consonant blends and digraphs (J.4)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Consonant blends and digraphs",
      "subject": "english",
      "chapterTitle": "J.4: Which consonant blend does the word end with?",
      "pedagogicalOutcome": {
        "english": "Mastery of consonant blends (bl, cl, tr, st) and digraphs (ch, sh, th, wh, -ck, -ss, -ll) for advanced word decoding.",
        "hindi": "संयुक्त ध्वनियों (Blends: bl, cl, st) और संयुक्ताक्षरों (Digraphs: sh, ch, th, wh, -ck) का उन्नत अभ्यास।"
      }
    },
    {
      "id": "ukg_eng_lab_j_5",
      "title": "J.5: Complete the word with the right final consonant blend",
      "subtitle": "सही अंतिम ब्लेंड जोड़कर शब्द पूरा करें • 10 प्रश्न गहन अभ्यास",
      "icon": "🧩",
      "badge": "UKG English • Consonant blends and digraphs (J.5)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Consonant blends and digraphs",
      "subject": "english",
      "chapterTitle": "J.5: Complete the word with the right final consonant blend",
      "pedagogicalOutcome": {
        "english": "Mastery of consonant blends (bl, cl, tr, st) and digraphs (ch, sh, th, wh, -ck, -ss, -ll) for advanced word decoding.",
        "hindi": "संयुक्त ध्वनियों (Blends: bl, cl, st) और संयुक्ताक्षरों (Digraphs: sh, ch, th, wh, -ck) का उन्नत अभ्यास।"
      }
    },
    {
      "id": "ukg_eng_lab_j_6",
      "title": "J.6: Does the word end with a consonant blend?",
      "subtitle": "क्या यह शब्द ब्लेंड पर समाप्त होता है? • 10 प्रश्न गहन अभ्यास",
      "icon": "❓",
      "badge": "UKG English • Consonant blends and digraphs (J.6)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Consonant blends and digraphs",
      "subject": "english",
      "chapterTitle": "J.6: Does the word end with a consonant blend?",
      "pedagogicalOutcome": {
        "english": "Mastery of consonant blends (bl, cl, tr, st) and digraphs (ch, sh, th, wh, -ck, -ss, -ll) for advanced word decoding.",
        "hindi": "संयुक्त ध्वनियों (Blends: bl, cl, st) और संयुक्ताक्षरों (Digraphs: sh, ch, th, wh, -ck) का उन्नत अभ्यास।"
      }
    },
    {
      "id": "ukg_eng_lab_j_7",
      "title": "J.7: Choose the word that matches the picture: -ss, -ll, -ff, -zz, -ck",
      "subtitle": "डबल व्यंजन और -ck वाले सही शब्द चुनें • 10 प्रश्न गहन अभ्यास",
      "icon": "🦆",
      "badge": "UKG English • Consonant blends and digraphs (J.7)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Consonant blends and digraphs",
      "subject": "english",
      "chapterTitle": "J.7: Choose the word that matches the picture: -ss, -ll, -ff, -zz, -ck",
      "pedagogicalOutcome": {
        "english": "Mastery of consonant blends (bl, cl, tr, st) and digraphs (ch, sh, th, wh, -ck, -ss, -ll) for advanced word decoding.",
        "hindi": "संयुक्त ध्वनियों (Blends: bl, cl, st) और संयुक्ताक्षरों (Digraphs: sh, ch, th, wh, -ck) का उन्नत अभ्यास।"
      }
    },
    {
      "id": "ukg_eng_lab_j_8",
      "title": "J.8: Choose the correct digraph",
      "subtitle": "सही डायग्राफ (sh, ch, th, wh) चुनें • 10 प्रश्न गहन अभ्यास",
      "icon": "🚢",
      "badge": "UKG English • Consonant blends and digraphs (J.8)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Consonant blends and digraphs",
      "subject": "english",
      "chapterTitle": "J.8: Choose the correct digraph",
      "pedagogicalOutcome": {
        "english": "Mastery of consonant blends (bl, cl, tr, st) and digraphs (ch, sh, th, wh, -ck, -ss, -ll) for advanced word decoding.",
        "hindi": "संयुक्त ध्वनियों (Blends: bl, cl, st) और संयुक्ताक्षरों (Digraphs: sh, ch, th, wh, -ck) का उन्नत अभ्यास।"
      }
    },
    {
      "id": "ukg_eng_lab_k_1",
      "title": "K.1: Find the short a word",
      "subtitle": "शॉर्ट 'a' ध्वनि वाला शब्द खोजें (Cat, Hat) • 10 प्रश्न गहन अभ्यास",
      "icon": "🐱",
      "badge": "UKG English • Short a (K.1)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Short a",
      "subject": "english",
      "chapterTitle": "K.1: Find the short a word",
      "pedagogicalOutcome": {
        "english": "Deep exploration of short a CVC word decoding, spelling (c_t -> a), picture matching, and short vowel reading.",
        "hindi": "लघु 'a' (Short a) वाले CVC शब्दों का निर्माण, स्पेलिंग और सचित्र पठन अभ्यास।"
      }
    },
    {
      "id": "ukg_eng_lab_k_2",
      "title": "K.2: Choose the short a word that matches the picture",
      "subtitle": "चित्र से मेल खाने वाला शॉर्ट 'a' शब्द चुनें • 10 प्रश्न गहन अभ्यास",
      "icon": "🖼️",
      "badge": "UKG English • Short a (K.2)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Short a",
      "subject": "english",
      "chapterTitle": "K.2: Choose the short a word that matches the picture",
      "pedagogicalOutcome": {
        "english": "Deep exploration of short a CVC word decoding, spelling (c_t -> a), picture matching, and short vowel reading.",
        "hindi": "लघु 'a' (Short a) वाले CVC शब्दों का निर्माण, स्पेलिंग और सचित्र पठन अभ्यास।"
      }
    },
    {
      "id": "ukg_eng_lab_k_3",
      "title": "K.3: Complete the short a word",
      "subtitle": "अक्षर भरकर शॉर्ट 'a' शब्द पूरा करें (c_t -> a) • 10 प्रश्न गहन अभ्यास",
      "icon": "✍️",
      "badge": "UKG English • Complete the short a word (K.3)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Complete the short a word",
      "subject": "english",
      "chapterTitle": "K.3: Complete the short a word",
      "pedagogicalOutcome": {
        "english": "Deep exploration of short a CVC word decoding, spelling (c_t -> a), picture matching, and short vowel reading.",
        "hindi": "लघु 'a' (Short a) वाले CVC शब्दों का निर्माण, स्पेलिंग और सचित्र पठन अभ्यास।"
      }
    },
    {
      "id": "ukg_eng_lab_k_4",
      "title": "K.4: Choose the short a sentence that matches the picture",
      "subtitle": "चित्र के अनुसार सही शॉर्ट 'a' वाक्य चुनें • 10 प्रश्न गहन अभ्यास",
      "icon": "📖",
      "badge": "UKG English • Short a (K.4)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Short a",
      "subject": "english",
      "chapterTitle": "K.4: Choose the short a sentence that matches the picture",
      "pedagogicalOutcome": {
        "english": "Deep exploration of short a CVC word decoding, spelling (c_t -> a), picture matching, and short vowel reading.",
        "hindi": "लघु 'a' (Short a) वाले CVC शब्दों का निर्माण, स्पेलिंग और सचित्र पठन अभ्यास।"
      }
    },
    {
      "id": "ukg_eng_lab_l_1",
      "title": "L.1: Find the short e word",
      "subtitle": "शॉर्ट 'e' ध्वनि वाला शब्द खोजें (Bed, Pen) • 10 प्रश्न गहन अभ्यास",
      "icon": "🛏️",
      "badge": "UKG English • Short e (L.1)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Short e",
      "subject": "english",
      "chapterTitle": "L.1: Find the short e word",
      "pedagogicalOutcome": {
        "english": "Decoding and spelling short e CVC words with picture cues and short vowel reading sentences.",
        "hindi": "लघु 'e' (Short e) वाले CVC शब्दों का निर्माण और सचित्र वाक्य पठन।"
      }
    },
    {
      "id": "ukg_eng_lab_l_2",
      "title": "L.2: Choose the picture that matches the short e word",
      "subtitle": "शॉर्ट 'e' शब्द के लिए सही चित्र चुनें • 10 प्रश्न गहन अभ्यास",
      "icon": "🖼️",
      "badge": "UKG English • Short e (L.2)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Short e",
      "subject": "english",
      "chapterTitle": "L.2: Choose the picture that matches the short e word",
      "pedagogicalOutcome": {
        "english": "Decoding and spelling short e CVC words with picture cues and short vowel reading sentences.",
        "hindi": "लघु 'e' (Short e) वाले CVC शब्दों का निर्माण और सचित्र वाक्य पठन।"
      }
    },
    {
      "id": "ukg_eng_lab_l_3",
      "title": "L.3: Complete the short e word",
      "subtitle": "अक्षर भरकर शॉर्ट 'e' शब्द पूरा करें (p_n -> e) • 10 प्रश्न गहन अभ्यास",
      "icon": "✍️",
      "badge": "UKG English • Short e (L.3)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Short e",
      "subject": "english",
      "chapterTitle": "L.3: Complete the short e word",
      "pedagogicalOutcome": {
        "english": "Decoding and spelling short e CVC words with picture cues and short vowel reading sentences.",
        "hindi": "लघु 'e' (Short e) वाले CVC शब्दों का निर्माण और सचित्र वाक्य पठन।"
      }
    },
    {
      "id": "ukg_eng_lab_l_4",
      "title": "L.4: Choose the short e sentence that matches the picture",
      "subtitle": "चित्र के अनुसार सही शॉर्ट 'e' वाक्य चुनें • 10 प्रश्न गहन अभ्यास",
      "icon": "📖",
      "badge": "UKG English • Short e (L.4)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Short e",
      "subject": "english",
      "chapterTitle": "L.4: Choose the short e sentence that matches the picture",
      "pedagogicalOutcome": {
        "english": "Decoding and spelling short e CVC words with picture cues and short vowel reading sentences.",
        "hindi": "लघु 'e' (Short e) वाले CVC शब्दों का निर्माण और सचित्र वाक्य पठन।"
      }
    },
    {
      "id": "ukg_eng_lab_m_1",
      "title": "M.1: Find the short i word",
      "subtitle": "शॉर्ट 'i' ध्वनि वाला शब्द खोजें (Pig, Zip) • 10 प्रश्न गहन अभ्यास",
      "icon": "🐷",
      "badge": "UKG English • Short i (M.1)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Short i",
      "subject": "english",
      "chapterTitle": "M.1: Find the short i word",
      "pedagogicalOutcome": {
        "english": "Decoding and spelling short i CVC words with visual reinforcement and short vowel reading fluency.",
        "hindi": "लघु 'i' (Short i) वाले CVC शब्दों का निर्माण और सचित्र पठन।"
      }
    },
    {
      "id": "ukg_eng_lab_m_2",
      "title": "M.2: Choose the short i word that matches the picture",
      "subtitle": "चित्र देखकर सही शॉर्ट 'i' शब्द चुनें • 10 प्रश्न गहन अभ्यास",
      "icon": "🖼️",
      "badge": "UKG English • Short i (M.2)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Short i",
      "subject": "english",
      "chapterTitle": "M.2: Choose the short i word that matches the picture",
      "pedagogicalOutcome": {
        "english": "Decoding and spelling short i CVC words with visual reinforcement and short vowel reading fluency.",
        "hindi": "लघु 'i' (Short i) वाले CVC शब्दों का निर्माण और सचित्र पठन।"
      }
    },
    {
      "id": "ukg_eng_lab_m_3",
      "title": "M.3: Complete the short i words",
      "subtitle": "अक्षर भरकर शॉर्ट 'i' शब्द पूरा करें (p_g -> i) • 10 प्रश्न गहन अभ्यास",
      "icon": "✍️",
      "badge": "UKG English • Short i (M.3)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Short i",
      "subject": "english",
      "chapterTitle": "M.3: Complete the short i words",
      "pedagogicalOutcome": {
        "english": "Decoding and spelling short i CVC words with visual reinforcement and short vowel reading fluency.",
        "hindi": "लघु 'i' (Short i) वाले CVC शब्दों का निर्माण और सचित्र पठन।"
      }
    },
    {
      "id": "ukg_eng_lab_m_4",
      "title": "M.4: Choose the short i sentence that matches the picture",
      "subtitle": "चित्र के अनुसार सही शॉर्ट 'i' वाक्य चुनें • 10 प्रश्न गहन अभ्यास",
      "icon": "📖",
      "badge": "UKG English • Short i (M.4)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Short i",
      "subject": "english",
      "chapterTitle": "M.4: Choose the short i sentence that matches the picture",
      "pedagogicalOutcome": {
        "english": "Decoding and spelling short i CVC words with visual reinforcement and short vowel reading fluency.",
        "hindi": "लघु 'i' (Short i) वाले CVC शब्दों का निर्माण और सचित्र पठन।"
      }
    },
    {
      "id": "ukg_eng_lab_n_1",
      "title": "N.1: Find the short o word",
      "subtitle": "शॉर्ट 'o' ध्वनि वाला शब्द खोजें (Dog, Box) • 10 प्रश्न गहन अभ्यास",
      "icon": "🐶",
      "badge": "UKG English • Short o (N.1)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Short o",
      "subject": "english",
      "chapterTitle": "N.1: Find the short o word",
      "pedagogicalOutcome": {
        "english": "Decoding and spelling short o CVC words with picture prompts and sentence context practice.",
        "hindi": "लघु 'o' (Short o) वाले CVC शब्दों का निर्माण और सचित्र पठन।"
      }
    },
    {
      "id": "ukg_eng_lab_n_2",
      "title": "N.2: Choose the short o word",
      "subtitle": "सही शॉर्ट 'o' शब्द पहचानें • 10 प्रश्न गहन अभ्यास",
      "icon": "📦",
      "badge": "UKG English • Short o (N.2)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Short o",
      "subject": "english",
      "chapterTitle": "N.2: Choose the short o word",
      "pedagogicalOutcome": {
        "english": "Decoding and spelling short o CVC words with picture prompts and sentence context practice.",
        "hindi": "लघु 'o' (Short o) वाले CVC शब्दों का निर्माण और सचित्र पठन।"
      }
    },
    {
      "id": "ukg_eng_lab_n_3",
      "title": "N.3: Complete the short o word",
      "subtitle": "अक्षर भरकर शॉर्ट 'o' शब्द पूरा करें (f_x -> o) • 10 प्रश्न गहन अभ्यास",
      "icon": "✍️",
      "badge": "UKG English • Short o (N.3)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Short o",
      "subject": "english",
      "chapterTitle": "N.3: Complete the short o word",
      "pedagogicalOutcome": {
        "english": "Decoding and spelling short o CVC words with picture prompts and sentence context practice.",
        "hindi": "लघु 'o' (Short o) वाले CVC शब्दों का निर्माण और सचित्र पठन।"
      }
    },
    {
      "id": "ukg_eng_lab_n_4",
      "title": "N.4: Choose the short o sentence that matches the picture",
      "subtitle": "चित्र के अनुसार सही शॉर्ट 'o' वाक्य चुनें • 10 प्रश्न गहन अभ्यास",
      "icon": "📖",
      "badge": "UKG English • Short o (N.4)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Short o",
      "subject": "english",
      "chapterTitle": "N.4: Choose the short o sentence that matches the picture",
      "pedagogicalOutcome": {
        "english": "Decoding and spelling short o CVC words with picture prompts and sentence context practice.",
        "hindi": "लघु 'o' (Short o) वाले CVC शब्दों का निर्माण और सचित्र पठन।"
      }
    },
    {
      "id": "ukg_eng_lab_o_1",
      "title": "O.1: Find the short u word",
      "subtitle": "शॉर्ट 'u' ध्वनि वाला शब्द खोजें (Sun, Cup) • 10 प्रश्न गहन अभ्यास",
      "icon": "☀️",
      "badge": "UKG English • Short u (O.1)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Short u",
      "subject": "english",
      "chapterTitle": "O.1: Find the short u word",
      "pedagogicalOutcome": {
        "english": "Decoding and spelling short u CVC words with multisensory matching and short vowel sentences.",
        "hindi": "लघु 'u' (Short u) वाले CVC शब्दों का निर्माण और सचित्र पठन।"
      }
    },
    {
      "id": "ukg_eng_lab_o_2",
      "title": "O.2: Choose the picture that matches the short u word",
      "subtitle": "शॉर्ट 'u' शब्द के लिए सही चित्र चुनें • 10 प्रश्न गहन अभ्यास",
      "icon": "🖼️",
      "badge": "UKG English • Choose the picture that matches the short u word (O.2)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Choose the picture that matches the short u word",
      "subject": "english",
      "chapterTitle": "O.2: Choose the picture that matches the short u word",
      "pedagogicalOutcome": {
        "english": "Decoding and spelling short u CVC words with multisensory matching and short vowel sentences.",
        "hindi": "लघु 'u' (Short u) वाले CVC शब्दों का निर्माण और सचित्र पठन।"
      }
    },
    {
      "id": "ukg_eng_lab_o_3",
      "title": "O.3: Complete the short u word",
      "subtitle": "अक्षर भरकर शॉर्ट 'u' शब्द पूरा करें (s_n -> u) • 10 प्रश्न गहन अभ्यास",
      "icon": "✍️",
      "badge": "UKG English • Short u (O.3)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Short u",
      "subject": "english",
      "chapterTitle": "O.3: Complete the short u word",
      "pedagogicalOutcome": {
        "english": "Decoding and spelling short u CVC words with multisensory matching and short vowel sentences.",
        "hindi": "लघु 'u' (Short u) वाले CVC शब्दों का निर्माण और सचित्र पठन।"
      }
    },
    {
      "id": "ukg_eng_lab_o_4",
      "title": "O.4: Choose the short u sentence that matches the picture",
      "subtitle": "चित्र के अनुसार सही शॉर्ट 'u' वाक्य चुनें • 10 प्रश्न गहन अभ्यास",
      "icon": "📖",
      "badge": "UKG English • Short u (O.4)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Short u",
      "subject": "english",
      "chapterTitle": "O.4: Choose the short u sentence that matches the picture",
      "pedagogicalOutcome": {
        "english": "Decoding and spelling short u CVC words with multisensory matching and short vowel sentences.",
        "hindi": "लघु 'u' (Short u) वाले CVC शब्दों का निर्माण और सचित्र पठन।"
      }
    },
    {
      "id": "ukg_eng_lab_p_1",
      "title": "P.1: Identify the short vowel sound in a word",
      "subtitle": "शब्द में सही शॉर्ट वोवेल ध्वनि (a, e, i, o, u) पहचानें • 10 प्रश्न गहन अभ्यास",
      "icon": "🔤",
      "badge": "UKG English • Short vowels (P.1)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Short vowels",
      "subject": "english",
      "chapterTitle": "P.1: Identify the short vowel sound in a word",
      "pedagogicalOutcome": {
        "english": "Comprehensive synthesis of all 5 short vowel sounds (a, e, i, o, u) with sorting, spelling, and short vowel stories.",
        "hindi": "सभी पांचों लघु स्वरों (a, e, i, o, u) का तुलनात्मक और व्यापक अभ्यास।"
      }
    },
    {
      "id": "ukg_eng_lab_p_2",
      "title": "P.2: Complete the word with the right short vowel",
      "subtitle": "उचित शॉर्ट वोवेल भरकर शब्द पूरा करें • 10 प्रश्न गहन अभ्यास",
      "icon": "✏️",
      "badge": "UKG English • Short vowels (P.2)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Short vowels",
      "subject": "english",
      "chapterTitle": "P.2: Complete the word with the right short vowel",
      "pedagogicalOutcome": {
        "english": "Comprehensive synthesis of all 5 short vowel sounds (a, e, i, o, u) with sorting, spelling, and short vowel stories.",
        "hindi": "सभी पांचों लघु स्वरों (a, e, i, o, u) का तुलनात्मक और व्यापक अभ्यास।"
      }
    },
    {
      "id": "ukg_eng_lab_p_3",
      "title": "P.3: Spell the short vowel word",
      "subtitle": "शॉर्ट वोवेल CVC शब्द की सही स्पेलिंग चुनें • 10 प्रश्न गहन अभ्यास",
      "icon": "🔤",
      "badge": "UKG English • Short vowels (P.3)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Short vowels",
      "subject": "english",
      "chapterTitle": "P.3: Spell the short vowel word",
      "pedagogicalOutcome": {
        "english": "Comprehensive synthesis of all 5 short vowel sounds (a, e, i, o, u) with sorting, spelling, and short vowel stories.",
        "hindi": "सभी पांचों लघु स्वरों (a, e, i, o, u) का तुलनात्मक और व्यापक अभ्यास।"
      }
    },
    {
      "id": "ukg_eng_lab_p_4",
      "title": "P.4: Complete the sentence with the correct short vowel word",
      "subtitle": "सही शॉर्ट वोवेल शब्द से वाक्य पूरा करें • 10 प्रश्न गहन अभ्यास",
      "icon": "📝",
      "badge": "UKG English • Short vowels (P.4)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Short vowels",
      "subject": "english",
      "chapterTitle": "P.4: Complete the sentence with the correct short vowel word",
      "pedagogicalOutcome": {
        "english": "Comprehensive synthesis of all 5 short vowel sounds (a, e, i, o, u) with sorting, spelling, and short vowel stories.",
        "hindi": "सभी पांचों लघु स्वरों (a, e, i, o, u) का तुलनात्मक और व्यापक अभ्यास।"
      }
    },
    {
      "id": "ukg_eng_lab_p_5",
      "title": "P.5: Read questions with short vowel words",
      "subtitle": "शॉर्ट वोवेल शब्दों वाले सरल प्रश्न पढ़ें और उत्तर दें • 10 प्रश्न गहन अभ्यास",
      "icon": "❓",
      "badge": "UKG English • Short vowels (P.5)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Short vowels",
      "subject": "english",
      "chapterTitle": "P.5: Read questions with short vowel words",
      "pedagogicalOutcome": {
        "english": "Comprehensive synthesis of all 5 short vowel sounds (a, e, i, o, u) with sorting, spelling, and short vowel stories.",
        "hindi": "सभी पांचों लघु स्वरों (a, e, i, o, u) का तुलनात्मक और व्यापक अभ्यास।"
      }
    },
    {
      "id": "ukg_eng_lab_q_1",
      "title": "Q.1: Find the word with the same vowel sound",
      "subtitle": "समान लॉन्ग वोवेल ध्वनि वाला शब्द खोजें • 10 प्रश्न गहन अभ्यास",
      "icon": "🔊",
      "badge": "UKG English • Long vowels (Q.1)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Long vowels",
      "subject": "english",
      "chapterTitle": "Q.1: Find the word with the same vowel sound",
      "pedagogicalOutcome": {
        "english": "Recognizing long vowel sounds (a, e, i, o, u), comparing short vs long vowel words, and mastering silent 'e'.",
        "hindi": "दीर्घ स्वर (Long Vowels) और लघु स्वर में अंतर पहचानना और साइलेंट 'e' समझना।"
      }
    },
    {
      "id": "ukg_eng_lab_q_2",
      "title": "Q.2: Which two words have the same vowel sound?",
      "subtitle": "समान वोवेल ध्वनि वाले दो शब्द चुनें • 10 प्रश्न गहन अभ्यास",
      "icon": "👯",
      "badge": "UKG English • Long vowels (Q.2)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Long vowels",
      "subject": "english",
      "chapterTitle": "Q.2: Which two words have the same vowel sound?",
      "pedagogicalOutcome": {
        "english": "Recognizing long vowel sounds (a, e, i, o, u), comparing short vs long vowel words, and mastering silent 'e'.",
        "hindi": "दीर्घ स्वर (Long Vowels) और लघु स्वर में अंतर पहचानना और साइलेंट 'e' समझना।"
      }
    },
    {
      "id": "ukg_eng_lab_q_3",
      "title": "Q.3: Find the long a word",
      "subtitle": "लॉन्ग 'a' शब्द खोजें (Cake, Lake, Rain) • 10 प्रश्न गहन अभ्यास",
      "icon": "🎂",
      "badge": "UKG English • Long vowels (Q.3)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Long vowels",
      "subject": "english",
      "chapterTitle": "Q.3: Find the long a word",
      "pedagogicalOutcome": {
        "english": "Recognizing long vowel sounds (a, e, i, o, u), comparing short vs long vowel words, and mastering silent 'e'.",
        "hindi": "दीर्घ स्वर (Long Vowels) और लघु स्वर में अंतर पहचानना और साइलेंट 'e' समझना।"
      }
    },
    {
      "id": "ukg_eng_lab_q_4",
      "title": "Q.4: Find the long e word",
      "subtitle": "लॉन्ग 'e' शब्द खोजें (Tree, Bee, Feet) • 10 प्रश्न गहन अभ्यास",
      "icon": "🌳",
      "badge": "UKG English • Long vowels (Q.4)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Long vowels",
      "subject": "english",
      "chapterTitle": "Q.4: Find the long e word",
      "pedagogicalOutcome": {
        "english": "Recognizing long vowel sounds (a, e, i, o, u), comparing short vs long vowel words, and mastering silent 'e'.",
        "hindi": "दीर्घ स्वर (Long Vowels) और लघु स्वर में अंतर पहचानना और साइलेंट 'e' समझना।"
      }
    },
    {
      "id": "ukg_eng_lab_q_5",
      "title": "Q.5: Find the long i word",
      "subtitle": "लॉन्ग 'i' शब्द खोजें (Kite, Bike, Night) • 10 प्रश्न गहन अभ्यास",
      "icon": "🪁",
      "badge": "UKG English • Long vowels (Q.5)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Long vowels",
      "subject": "english",
      "chapterTitle": "Q.5: Find the long i word",
      "pedagogicalOutcome": {
        "english": "Recognizing long vowel sounds (a, e, i, o, u), comparing short vs long vowel words, and mastering silent 'e'.",
        "hindi": "दीर्घ स्वर (Long Vowels) और लघु स्वर में अंतर पहचानना और साइलेंट 'e' समझना।"
      }
    },
    {
      "id": "ukg_eng_lab_q_6",
      "title": "Q.6: Find the long o word",
      "subtitle": "लॉन्ग 'o' शब्द खोजें (Boat, Rope, Rose) • 10 प्रश्न गहन अभ्यास",
      "icon": "⛵",
      "badge": "UKG English • Long vowels (Q.6)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Long vowels",
      "subject": "english",
      "chapterTitle": "Q.6: Find the long o word",
      "pedagogicalOutcome": {
        "english": "Recognizing long vowel sounds (a, e, i, o, u), comparing short vs long vowel words, and mastering silent 'e'.",
        "hindi": "दीर्घ स्वर (Long Vowels) और लघु स्वर में अंतर पहचानना और साइलेंट 'e' समझना।"
      }
    },
    {
      "id": "ukg_eng_lab_q_7",
      "title": "Q.7: Find the long u word",
      "subtitle": "लॉन्ग 'u' शब्द खोजें (Cube, Flute, Mule) • 10 प्रश्न गहन अभ्यास",
      "icon": "🧊",
      "badge": "UKG English • Long vowels (Q.7)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Long vowels",
      "subject": "english",
      "chapterTitle": "Q.7: Find the long u word",
      "pedagogicalOutcome": {
        "english": "Recognizing long vowel sounds (a, e, i, o, u), comparing short vs long vowel words, and mastering silent 'e'.",
        "hindi": "दीर्घ स्वर (Long Vowels) और लघु स्वर में अंतर पहचानना और साइलेंट 'e' समझना।"
      }
    },
    {
      "id": "ukg_eng_lab_q_8",
      "title": "Q.8: Sort short and long vowel words",
      "subtitle": "शॉर्ट और लॉन्ग वोवेल शब्दों को अलग-अलग छाँटें • 10 प्रश्न गहन अभ्यास",
      "icon": "⚖️",
      "badge": "UKG English • Long vowels (Q.8)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Long vowels",
      "subject": "english",
      "chapterTitle": "Q.8: Sort short and long vowel words",
      "pedagogicalOutcome": {
        "english": "Recognizing long vowel sounds (a, e, i, o, u), comparing short vs long vowel words, and mastering silent 'e'.",
        "hindi": "दीर्घ स्वर (Long Vowels) और लघु स्वर में अंतर पहचानना और साइलेंट 'e' समझना।"
      }
    },
    {
      "id": "ukg_eng_lab_r_1",
      "title": "R.1: Choose the two sight words that are the same",
      "subtitle": "समान साइट वर्ड (Sight Word) की जोड़ी चुनें • 10 प्रश्न गहन अभ्यास",
      "icon": "👁️",
      "badge": "UKG English • Sight words (R.1)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Sight words",
      "subject": "english",
      "chapterTitle": "R.1: Choose the two sight words that are the same",
      "pedagogicalOutcome": {
        "english": "Rapid automatic recognition of high-frequency sight words (10 graded sets + reviews), spelling, and sentence completion.",
        "hindi": "दैनिक जीवन में सबसे ज्यादा इस्तेमाल होने वाले 10 साइट वर्ड सेट्स को तुरंत पढ़ना व वाक्यों में प्रयोग करना।"
      }
    },
    {
      "id": "ukg_eng_lab_r_2",
      "title": "R.2: Read sight words set 1: ate, he, of, that, was",
      "subtitle": "साइट वर्ड्स सेट १ पढ़ें (ate, he, of, that, was) • 10 प्रश्न गहन अभ्यास",
      "icon": "📖",
      "badge": "UKG English • Sight words (R.2)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Sight words",
      "subject": "english",
      "chapterTitle": "R.2: Read sight words set 1: ate, he, of, that, was",
      "pedagogicalOutcome": {
        "english": "Rapid automatic recognition of high-frequency sight words (10 graded sets + reviews), spelling, and sentence completion.",
        "hindi": "दैनिक जीवन में सबसे ज्यादा इस्तेमाल होने वाले 10 साइट वर्ड सेट्स को तुरंत पढ़ना व वाक्यों में प्रयोग करना।"
      }
    },
    {
      "id": "ukg_eng_lab_r_3",
      "title": "R.3: Read sight words set 2: are, green, on, please, they",
      "subtitle": "साइट वर्ड्स सेट २ पढ़ें (are, green, on, please, they) • 10 प्रश्न गहन अभ्यास",
      "icon": "📖",
      "badge": "UKG English • Sight words (R.3)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Sight words",
      "subject": "english",
      "chapterTitle": "R.3: Read sight words set 2: are, green, on, please, they",
      "pedagogicalOutcome": {
        "english": "Rapid automatic recognition of high-frequency sight words (10 graded sets + reviews), spelling, and sentence completion.",
        "hindi": "दैनिक जीवन में सबसे ज्यादा इस्तेमाल होने वाले 10 साइट वर्ड सेट्स को तुरंत पढ़ना व वाक्यों में प्रयोग करना।"
      }
    },
    {
      "id": "ukg_eng_lab_r_4",
      "title": "R.4: Read sight words set 3: be, have, or, pretty, this",
      "subtitle": "साइट वर्ड्स सेट ३ पढ़ें (be, have, or, pretty, this) • 10 प्रश्न गहन अभ्यास",
      "icon": "📖",
      "badge": "UKG English • Sight words (R.4)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Sight words",
      "subject": "english",
      "chapterTitle": "R.4: Read sight words set 3: be, have, or, pretty, this",
      "pedagogicalOutcome": {
        "english": "Rapid automatic recognition of high-frequency sight words (10 graded sets + reviews), spelling, and sentence completion.",
        "hindi": "दैनिक जीवन में सबसे ज्यादा इस्तेमाल होने वाले 10 साइट वर्ड सेट्स को तुरंत पढ़ना व वाक्यों में प्रयोग करना।"
      }
    },
    {
      "id": "ukg_eng_lab_r_5",
      "title": "R.5: Read sight words: review sets 1, 2, 3",
      "subtitle": "साइट वर्ड्स समीक्षा (सेट्स १, २, ३) • 10 प्रश्न गहन अभ्यास",
      "icon": "📝",
      "badge": "UKG English • Sight words (R.5)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Sight words",
      "subject": "english",
      "chapterTitle": "R.5: Read sight words: review sets 1, 2, 3",
      "pedagogicalOutcome": {
        "english": "Rapid automatic recognition of high-frequency sight words (10 graded sets + reviews), spelling, and sentence completion.",
        "hindi": "दैनिक जीवन में सबसे ज्यादा इस्तेमाल होने वाले 10 साइट वर्ड सेट्स को तुरंत पढ़ना व वाक्यों में प्रयोग करना।"
      }
    },
    {
      "id": "ukg_eng_lab_r_6",
      "title": "R.6: Read sight words set 4: all, but, ride, saw, what",
      "subtitle": "साइट वर्ड्स सेट ४ पढ़ें (all, but, ride, saw, what) • 10 प्रश्न गहन अभ्यास",
      "icon": "📖",
      "badge": "UKG English • Sight words (R.6)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Sight words",
      "subject": "english",
      "chapterTitle": "R.6: Read sight words set 4: all, but, ride, saw, what",
      "pedagogicalOutcome": {
        "english": "Rapid automatic recognition of high-frequency sight words (10 graded sets + reviews), spelling, and sentence completion.",
        "hindi": "दैनिक जीवन में सबसे ज्यादा इस्तेमाल होने वाले 10 साइट वर्ड सेट्स को तुरंत पढ़ना व वाक्यों में प्रयोग करना।"
      }
    },
    {
      "id": "ukg_eng_lab_r_7",
      "title": "R.7: Read sight words set 5: about, like, she, under, we",
      "subtitle": "साइट वर्ड्स सेट ५ पढ़ें (about, like, she, under, we) • 10 प्रश्न गहन अभ्यास",
      "icon": "📖",
      "badge": "UKG English • Sight words (R.7)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Sight words",
      "subject": "english",
      "chapterTitle": "R.7: Read sight words set 5: about, like, she, under, we",
      "pedagogicalOutcome": {
        "english": "Rapid automatic recognition of high-frequency sight words (10 graded sets + reviews), spelling, and sentence completion.",
        "hindi": "दैनिक जीवन में सबसे ज्यादा इस्तेमाल होने वाले 10 साइट वर्ड सेट्स को तुरंत पढ़ना व वाक्यों में प्रयोग करना।"
      }
    },
    {
      "id": "ukg_eng_lab_r_8",
      "title": "R.8: Read sight words set 6: black, into, made, ran, white",
      "subtitle": "साइट वर्ड्स सेट ६ पढ़ें (black, into, made, ran, white) • 10 प्रश्न गहन अभ्यास",
      "icon": "📖",
      "badge": "UKG English • Sight words (R.8)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Sight words",
      "subject": "english",
      "chapterTitle": "R.8: Read sight words set 6: black, into, made, ran, white",
      "pedagogicalOutcome": {
        "english": "Rapid automatic recognition of high-frequency sight words (10 graded sets + reviews), spelling, and sentence completion.",
        "hindi": "दैनिक जीवन में सबसे ज्यादा इस्तेमाल होने वाले 10 साइट वर्ड सेट्स को तुरंत पढ़ना व वाक्यों में प्रयोग करना।"
      }
    },
    {
      "id": "ukg_eng_lab_r_9",
      "title": "R.9: Read sight words: review sets 4, 5, 6",
      "subtitle": "साइट वर्ड्स समीक्षा (सेट्स ४, ५, ६) • 10 प्रश्न गहन अभ्यास",
      "icon": "📝",
      "badge": "UKG English • Sight words (R.9)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Sight words",
      "subject": "english",
      "chapterTitle": "R.9: Read sight words: review sets 4, 5, 6",
      "pedagogicalOutcome": {
        "english": "Rapid automatic recognition of high-frequency sight words (10 graded sets + reviews), spelling, and sentence completion.",
        "hindi": "दैनिक जीवन में सबसे ज्यादा इस्तेमाल होने वाले 10 साइट वर्ड सेट्स को तुरंत पढ़ना व वाक्यों में प्रयोग करना।"
      }
    },
    {
      "id": "ukg_eng_lab_r_10",
      "title": "R.10: Read sight words set 7: am, did, get, now, well",
      "subtitle": "साइट वर्ड्स सेट ७ पढ़ें (am, did, get, now, well) • 10 प्रश्न गहन अभ्यास",
      "icon": "📖",
      "badge": "UKG English • Sight words (R.10)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Sight words",
      "subject": "english",
      "chapterTitle": "R.10: Read sight words set 7: am, did, get, now, well",
      "pedagogicalOutcome": {
        "english": "Rapid automatic recognition of high-frequency sight words (10 graded sets + reviews), spelling, and sentence completion.",
        "hindi": "दैनिक जीवन में सबसे ज्यादा इस्तेमाल होने वाले 10 साइट वर्ड सेट्स को तुरंत पढ़ना व वाक्यों में प्रयोग करना।"
      }
    },
    {
      "id": "ukg_eng_lab_r_11",
      "title": "R.11: Read sight words set 8: fast, good, him, take, will",
      "subtitle": "साइट वर्ड्स सेट ८ पढ़ें (fast, good, him, take, will) • 10 प्रश्न गहन अभ्यास",
      "icon": "📖",
      "badge": "UKG English • Sight words (R.11)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Sight words",
      "subject": "english",
      "chapterTitle": "R.11: Read sight words set 8: fast, good, him, take, will",
      "pedagogicalOutcome": {
        "english": "Rapid automatic recognition of high-frequency sight words (10 graded sets + reviews), spelling, and sentence completion.",
        "hindi": "दैनिक जीवन में सबसे ज्यादा इस्तेमाल होने वाले 10 साइट वर्ड सेट्स को तुरंत पढ़ना व वाक्यों में प्रयोग करना।"
      }
    },
    {
      "id": "ukg_eng_lab_r_12",
      "title": "R.12: Read sight words set 9: came, going, say, too, with",
      "subtitle": "साइट वर्ड्स सेट ९ पढ़ें (came, going, say, too, with) • 10 प्रश्न गहन अभ्यास",
      "icon": "📖",
      "badge": "UKG English • Sight words (R.12)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Sight words",
      "subject": "english",
      "chapterTitle": "R.12: Read sight words set 9: came, going, say, too, with",
      "pedagogicalOutcome": {
        "english": "Rapid automatic recognition of high-frequency sight words (10 graded sets + reviews), spelling, and sentence completion.",
        "hindi": "दैनिक जीवन में सबसे ज्यादा इस्तेमाल होने वाले 10 साइट वर्ड सेट्स को तुरंत पढ़ना व वाक्यों में प्रयोग करना।"
      }
    },
    {
      "id": "ukg_eng_lab_r_13",
      "title": "R.13: Read sight words set 10: brown, does, eat, must, want",
      "subtitle": "साइट वर्ड्स सेट १० पढ़ें (brown, does, eat, must, want) • 10 प्रश्न गहन अभ्यास",
      "icon": "📖",
      "badge": "UKG English • Sight words (R.13)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Sight words",
      "subject": "english",
      "chapterTitle": "R.13: Read sight words set 10: brown, does, eat, must, want",
      "pedagogicalOutcome": {
        "english": "Rapid automatic recognition of high-frequency sight words (10 graded sets + reviews), spelling, and sentence completion.",
        "hindi": "दैनिक जीवन में सबसे ज्यादा इस्तेमाल होने वाले 10 साइट वर्ड सेट्स को तुरंत पढ़ना व वाक्यों में प्रयोग करना।"
      }
    },
    {
      "id": "ukg_eng_lab_r_14",
      "title": "R.14: Read sight words: review sets 7, 8, 9, 10",
      "subtitle": "साइट वर्ड्स समीक्षा (सेट्स ७, ८, ९, १०) • 10 प्रश्न गहन अभ्यास",
      "icon": "📝",
      "badge": "UKG English • Sight words (R.14)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Sight words",
      "subject": "english",
      "chapterTitle": "R.14: Read sight words: review sets 7, 8, 9, 10",
      "pedagogicalOutcome": {
        "english": "Rapid automatic recognition of high-frequency sight words (10 graded sets + reviews), spelling, and sentence completion.",
        "hindi": "दैनिक जीवन में सबसे ज्यादा इस्तेमाल होने वाले 10 साइट वर्ड सेट्स को तुरंत पढ़ना व वाक्यों में प्रयोग करना।"
      }
    },
    {
      "id": "ukg_eng_lab_r_15",
      "title": "R.15: Read sight words: review sets 1-10",
      "subtitle": "साइट वर्ड्स महा-समीक्षा (सेट्स १-१०) • 10 प्रश्न गहन अभ्यास",
      "icon": "🏆",
      "badge": "UKG English • Sight words (R.15)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Sight words",
      "subject": "english",
      "chapterTitle": "R.15: Read sight words: review sets 1-10",
      "pedagogicalOutcome": {
        "english": "Rapid automatic recognition of high-frequency sight words (10 graded sets + reviews), spelling, and sentence completion.",
        "hindi": "दैनिक जीवन में सबसे ज्यादा इस्तेमाल होने वाले 10 साइट वर्ड सेट्स को तुरंत पढ़ना व वाक्यों में प्रयोग करना।"
      }
    },
    {
      "id": "ukg_eng_lab_r_16",
      "title": "R.16: Complete the sentence with the correct sight word",
      "subtitle": "सही साइट वर्ड से वाक्य पूरा करें • 10 प्रश्न गहन अभ्यास",
      "icon": "✍️",
      "badge": "UKG English • Sight words (R.16)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Sight words",
      "subject": "english",
      "chapterTitle": "R.16: Complete the sentence with the correct sight word",
      "pedagogicalOutcome": {
        "english": "Rapid automatic recognition of high-frequency sight words (10 graded sets + reviews), spelling, and sentence completion.",
        "hindi": "दैनिक जीवन में सबसे ज्यादा इस्तेमाल होने वाले 10 साइट वर्ड सेट्स को तुरंत पढ़ना व वाक्यों में प्रयोग करना।"
      }
    },
    {
      "id": "ukg_eng_lab_r_17",
      "title": "R.17: Spell the sight word",
      "subtitle": "साइट वर्ड की सही स्पेलिंग चुनें • 10 प्रश्न गहन अभ्यास",
      "icon": "🔤",
      "badge": "UKG English • Sight words (R.17)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Reading foundations - Sight words",
      "subject": "english",
      "chapterTitle": "R.17: Spell the sight word",
      "pedagogicalOutcome": {
        "english": "Rapid automatic recognition of high-frequency sight words (10 graded sets + reviews), spelling, and sentence completion.",
        "hindi": "दैनिक जीवन में सबसे ज्यादा इस्तेमाल होने वाले 10 साइट वर्ड सेट्स को तुरंत पढ़ना व वाक्यों में प्रयोग करना।"
      }
    },
    {
      "id": "ukg_eng_lab_s_1",
      "title": "S.1: Identify book parts and features",
      "subtitle": "किताब के अंग (कवर, शीर्षक, लेखक) पहचानें • 10 प्रश्न गहन अभ्यास",
      "icon": "📖",
      "badge": "UKG English • Text features (S.1)",
      "accentColor": "#D97706",
      "boxColor": "#FFFBEB",
      "ncertTopic": "Reading strategies - Text features",
      "subject": "english",
      "chapterTitle": "S.1: Identify book parts and features",
      "pedagogicalOutcome": {
        "english": "Discovering book structure: front cover, author, illustrator, title, spine, and table of contents.",
        "hindi": "किताब के अंगों (लेखक, चित्रकार, शीर्षक, जिल्द, विषय-सूची) की समझ।"
      }
    },
    {
      "id": "ukg_eng_lab_t_1",
      "title": "T.1: Which could happen in real life?",
      "subtitle": "असली दुनिया में क्या हो सकता है? (सत्य बनाम कल्पना) • 10 प्रश्न गहन अभ्यास",
      "icon": "🪄",
      "badge": "UKG English • Reality vs fiction (T.1)",
      "accentColor": "#D97706",
      "boxColor": "#FFFBEB",
      "ncertTopic": "Reading strategies - Reality vs fiction",
      "subject": "english",
      "chapterTitle": "T.1: Which could happen in real life?",
      "pedagogicalOutcome": {
        "english": "Critical thinking to distinguish real-world possibilities from imaginary fiction and make-believe.",
        "hindi": "असल जिंदगी की सच्चाई और काल्पनिक कहानियों में अंतर पहचानना।"
      }
    },
    {
      "id": "ukg_eng_lab_u_1",
      "title": "U.1: What is the picture about?",
      "subtitle": "चित्र मुख्य रूप से किस बारे में है? • 10 प्रश्न गहन अभ्यास",
      "icon": "🖼️",
      "badge": "UKG English • Main idea (U.1)",
      "accentColor": "#D97706",
      "boxColor": "#FFFBEB",
      "ncertTopic": "Reading strategies - Main idea",
      "subject": "english",
      "chapterTitle": "U.1: What is the picture about?",
      "pedagogicalOutcome": {
        "english": "Analyzing illustrations and descriptive scenes to identify the central message and main topic.",
        "hindi": "चित्र और दृश्य देखकर कहानी का मुख्य विचार (Main Idea) समझना।"
      }
    },
    {
      "id": "ukg_eng_lab_v_1",
      "title": "V.1: Which feeling matches the picture?",
      "subtitle": "चित्र के अनुसार सही भावना (खुश, उदास) चुनें • 10 प्रश्न गहन अभ्यास",
      "icon": "🎭",
      "badge": "UKG English • Inference and analysis (V.1)",
      "accentColor": "#D97706",
      "boxColor": "#FFFBEB",
      "ncertTopic": "Reading strategies - Inference and analysis",
      "subject": "english",
      "chapterTitle": "V.1: Which feeling matches the picture?",
      "pedagogicalOutcome": {
        "english": "Inferring characters' emotional feelings and predicting sequence of events (what happens next).",
        "hindi": "पात्रों की भावनाएं समझना और आगे क्या होगा (कारण व परिणाम) का अनुमान लगाना।"
      }
    },
    {
      "id": "ukg_eng_lab_v_2",
      "title": "V.2: What will happen next?",
      "subtitle": "कहानी में आगे क्या होगा? (सटीक अनुमान) • 10 प्रश्न गहन अभ्यास",
      "icon": "🔮",
      "badge": "UKG English • Inference and analysis (V.2)",
      "accentColor": "#D97706",
      "boxColor": "#FFFBEB",
      "ncertTopic": "Reading strategies - Inference and analysis",
      "subject": "english",
      "chapterTitle": "V.2: What will happen next?",
      "pedagogicalOutcome": {
        "english": "Inferring characters' emotional feelings and predicting sequence of events (what happens next).",
        "hindi": "पात्रों की भावनाएं समझना और आगे क्या होगा (कारण व परिणाम) का अनुमान लगाना।"
      }
    },
    {
      "id": "ukg_eng_lab_w_1",
      "title": "W.1: What am I?",
      "subtitle": "पहेली बूझो: मैं कौन हूँ? (What am I?) • 10 प्रश्न गहन अभ्यास",
      "icon": "❓",
      "badge": "UKG English • Riddles (W.1)",
      "accentColor": "#D97706",
      "boxColor": "#FFFBEB",
      "ncertTopic": "Reading strategies - Riddles",
      "subject": "english",
      "chapterTitle": "W.1: What am I?",
      "pedagogicalOutcome": {
        "english": "Deductive reasoning and clue-solving with fun child-friendly 'What am I?' riddles.",
        "hindi": "तार्किक सोच और सुरागों से उत्तर ढूंढने वाली बाल पहेलियां (What am I?)।"
      }
    },
    {
      "id": "ukg_eng_lab_x_1",
      "title": "X.1: Use number words: one to ten",
      "subtitle": "संख्या शब्द (One to Ten) का सही प्रयोग • 10 प्रश्न गहन अभ्यास",
      "icon": "🔟",
      "badge": "UKG English • Colour and number words (X.1)",
      "accentColor": "#059669",
      "boxColor": "#ECFDF5",
      "ncertTopic": "Vocabulary - Colour and number words",
      "subject": "english",
      "chapterTitle": "X.1: Use number words: one to ten",
      "pedagogicalOutcome": {
        "english": "Connecting quantity numerals (one to ten) and colour words to everyday objects.",
        "hindi": "संख्या शब्दों (one to ten) और रंगों के नामों का सचित्र अभ्यास।"
      }
    },
    {
      "id": "ukg_eng_lab_x_2",
      "title": "X.2: Use colour words",
      "subtitle": "रंगों के नाम (Red, Blue, Green) का सही प्रयोग • 10 प्रश्न गहन अभ्यास",
      "icon": "🎨",
      "badge": "UKG English • Colour and number words (X.2)",
      "accentColor": "#059669",
      "boxColor": "#ECFDF5",
      "ncertTopic": "Vocabulary - Colour and number words",
      "subject": "english",
      "chapterTitle": "X.2: Use colour words",
      "pedagogicalOutcome": {
        "english": "Connecting quantity numerals (one to ten) and colour words to everyday objects.",
        "hindi": "संख्या शब्दों (one to ten) और रंगों के नामों का सचित्र अभ्यास।"
      }
    },
    {
      "id": "ukg_eng_lab_y_1",
      "title": "Y.1: Compare pictures using adjectives",
      "subtitle": "विशेषण (Big, Small, Fast, Slow) से तुलना • 10 प्रश्न गहन अभ्यास",
      "icon": "🦒",
      "badge": "UKG English • Adjectives and verbs (Y.1)",
      "accentColor": "#059669",
      "boxColor": "#ECFDF5",
      "ncertTopic": "Vocabulary - Adjectives and verbs",
      "subject": "english",
      "chapterTitle": "Y.1: Compare pictures using adjectives",
      "pedagogicalOutcome": {
        "english": "Comparing attributes using descriptive adjectives (size, weight, speed) and matching dynamic action verbs.",
        "hindi": "विशेषणों (बड़ा/छोटा, भारी/हल्का) से तुलना और क्रिया शब्दों (Verbs) की पहचान।"
      }
    },
    {
      "id": "ukg_eng_lab_y_2",
      "title": "Y.2: Find the picture that matches the action verb",
      "subtitle": "क्रिया (Jump, Swim, Run) से मेल खाता चित्र खोजें • 10 प्रश्न गहन अभ्यास",
      "icon": "🏃",
      "badge": "UKG English • Adjectives and verbs (Y.2)",
      "accentColor": "#059669",
      "boxColor": "#ECFDF5",
      "ncertTopic": "Vocabulary - Adjectives and verbs",
      "subject": "english",
      "chapterTitle": "Y.2: Find the picture that matches the action verb",
      "pedagogicalOutcome": {
        "english": "Comparing attributes using descriptive adjectives (size, weight, speed) and matching dynamic action verbs.",
        "hindi": "विशेषणों (बड़ा/छोटा, भारी/हल्का) से तुलना और क्रिया शब्दों (Verbs) की पहचान।"
      }
    },
    {
      "id": "ukg_eng_lab_z_1",
      "title": "Z.1: Inside and outside, above and below, next to and beside",
      "subtitle": "दिशा व स्थान शब्द (अंदर, बाहर, ऊपर, नीचे) • 10 प्रश्न गहन अभ्यास",
      "icon": "↕️",
      "badge": "UKG English • Location words (Z.1)",
      "accentColor": "#059669",
      "boxColor": "#ECFDF5",
      "ncertTopic": "Vocabulary - Location words",
      "subject": "english",
      "chapterTitle": "Z.1: Inside and outside, above and below, next to and beside",
      "pedagogicalOutcome": {
        "english": "Spatial awareness using prepositions: inside/outside, above/below, beside, between, behind, and in front.",
        "hindi": "स्थान सूचक शब्दों (अंदर/बाहर, ऊपर/नीचे, बीच में, पीछे) की समझ।"
      }
    },
    {
      "id": "ukg_eng_lab_z_2",
      "title": "Z.2: Choose the best location word to match the picture",
      "subtitle": "चित्र के लिए सबसे उपयुक्त स्थान शब्द चुनें • 10 प्रश्न गहन अभ्यास",
      "icon": "📍",
      "badge": "UKG English • Location words (Z.2)",
      "accentColor": "#059669",
      "boxColor": "#ECFDF5",
      "ncertTopic": "Vocabulary - Location words",
      "subject": "english",
      "chapterTitle": "Z.2: Choose the best location word to match the picture",
      "pedagogicalOutcome": {
        "english": "Spatial awareness using prepositions: inside/outside, above/below, beside, between, behind, and in front.",
        "hindi": "स्थान सूचक शब्दों (अंदर/बाहर, ऊपर/नीचे, बीच में, पीछे) की समझ।"
      }
    },
    {
      "id": "ukg_eng_lab_aa_1",
      "title": "AA.1: Who, what, when, where or why?",
      "subtitle": "प्रश्नवाचक शब्द (Who, What, When, Where, Why) • 10 प्रश्न गहन अभ्यास",
      "icon": "❓",
      "badge": "UKG English • Question words (AA.1)",
      "accentColor": "#059669",
      "boxColor": "#ECFDF5",
      "ncertTopic": "Vocabulary - Question words",
      "subject": "english",
      "chapterTitle": "AA.1: Who, what, when, where or why?",
      "pedagogicalOutcome": {
        "english": "Understanding the purpose of 5 key question words: Who, What, When, Where, and Why.",
        "hindi": "प्रश्नवाचक शब्दों (Who, What, When, Where, Why) का सही प्रयोग।"
      }
    },
    {
      "id": "ukg_eng_lab_bb_1",
      "title": "BB.1: Match antonyms to pictures",
      "subtitle": "विलोम शब्द (Opposites) का सचित्र मिलान • 10 प्रश्न गहन अभ्यास",
      "icon": "⚖️",
      "badge": "UKG English • Synonyms and antonyms (BB.1)",
      "accentColor": "#059669",
      "boxColor": "#ECFDF5",
      "ncertTopic": "Vocabulary - Synonyms and antonyms",
      "subject": "english",
      "chapterTitle": "BB.1: Match antonyms to pictures",
      "pedagogicalOutcome": {
        "english": "Expanding expressive vocabulary with opposite meanings (antonyms) and equivalent meanings (synonyms).",
        "hindi": "विलोम शब्द (Antonyms/उल्टे अर्थ) और पर्यायवाची (Synonyms/समान अर्थ) की समझ।"
      }
    },
    {
      "id": "ukg_eng_lab_bb_2",
      "title": "BB.2: Match synonyms",
      "subtitle": "समानार्थक शब्द (Synonyms) का सही मिलान • 10 प्रश्न गहन अभ्यास",
      "icon": "👯",
      "badge": "UKG English • Synonyms and antonyms (BB.2)",
      "accentColor": "#059669",
      "boxColor": "#ECFDF5",
      "ncertTopic": "Vocabulary - Synonyms and antonyms",
      "subject": "english",
      "chapterTitle": "BB.2: Match synonyms",
      "pedagogicalOutcome": {
        "english": "Expanding expressive vocabulary with opposite meanings (antonyms) and equivalent meanings (synonyms).",
        "hindi": "विलोम शब्द (Antonyms/उल्टे अर्थ) और पर्यायवाची (Synonyms/समान अर्थ) की समझ।"
      }
    },
    {
      "id": "ukg_eng_lab_cc_1",
      "title": "CC.1: Sort objects into categories",
      "subtitle": "वस्तुओं को उनके सही समूह (फल, जानवर, वाहन) में छाँटें • 10 प्रश्न गहन अभ्यास",
      "icon": "🧺",
      "badge": "UKG English • Categories (CC.1)",
      "accentColor": "#059669",
      "boxColor": "#ECFDF5",
      "ncertTopic": "Vocabulary - Categories",
      "subject": "english",
      "chapterTitle": "CC.1: Sort objects into categories",
      "pedagogicalOutcome": {
        "english": "Classifying objects into semantic categories (fruits, animals, vehicles, tools) and spotting the odd one out.",
        "hindi": "वस्तुओं को श्रेणियों में बांटना और अलग (Odd one out) को पहचानना।"
      }
    },
    {
      "id": "ukg_eng_lab_cc_2",
      "title": "CC.2: Which one is not like the others?",
      "subtitle": "कौन सा बाकी सब से अलग है (Odd One Out)? • 10 प्रश्न गहन अभ्यास",
      "icon": "🔍",
      "badge": "UKG English • Categories (CC.2)",
      "accentColor": "#059669",
      "boxColor": "#ECFDF5",
      "ncertTopic": "Vocabulary - Categories",
      "subject": "english",
      "chapterTitle": "CC.2: Which one is not like the others?",
      "pedagogicalOutcome": {
        "english": "Classifying objects into semantic categories (fruits, animals, vehicles, tools) and spotting the odd one out.",
        "hindi": "वस्तुओं को श्रेणियों में बांटना और अलग (Odd one out) को पहचानना।"
      }
    },
    {
      "id": "ukg_eng_lab_dd_1",
      "title": "DD.1: Multiple-meaning words with pictures",
      "subtitle": "एकार्थी व अनेकार्थी शब्द (Bat, Ring, Fly) • 10 प्रश्न गहन अभ्यास",
      "icon": "🦇",
      "badge": "UKG English • Multiple-meaning words (DD.1)",
      "accentColor": "#059669",
      "boxColor": "#ECFDF5",
      "ncertTopic": "Vocabulary - Multiple-meaning words",
      "subject": "english",
      "chapterTitle": "DD.1: Multiple-meaning words with pictures",
      "pedagogicalOutcome": {
        "english": "Discovering that single words can hold multiple distinct meanings in different contexts (e.g. bat, ring, bark).",
        "hindi": "एक शब्द के अनेक अर्थ (Multiple-meaning words) की मजेदार समझ।"
      }
    },
    {
      "id": "ukg_eng_lab_ee_1",
      "title": "EE.1: Is it a telling sentence or an asking sentence?",
      "subtitle": "यह साधारण वाक्य है या प्रश्न वाक्य? (. vs ?) • 10 प्रश्न गहन अभ्यास",
      "icon": "💬",
      "badge": "UKG English • Sentences (EE.1)",
      "accentColor": "#7C3AED",
      "boxColor": "#F5F3FF",
      "ncertTopic": "Grammar and mechanics - Sentences",
      "subject": "english",
      "chapterTitle": "EE.1: Is it a telling sentence or an asking sentence?",
      "pedagogicalOutcome": {
        "english": "Distinguishing telling statements from asking questions, applying end punctuation (. vs ?), and unscrambling complete sentences.",
        "hindi": "साधारण वाक्य व प्रश्नवाचक वाक्य में अंतर, पूर्ण विराम (.) व प्रश्नवाचक चिह्न (?) का प्रयोग।"
      }
    },
    {
      "id": "ukg_eng_lab_ee_2",
      "title": "EE.2: Identify and use end marks",
      "subtitle": "विराम चिह्न (End Marks: . और ?) का सही प्रयोग • 10 प्रश्न गहन अभ्यास",
      "icon": "🛑",
      "badge": "UKG English • Sentences (EE.2)",
      "accentColor": "#7C3AED",
      "boxColor": "#F5F3FF",
      "ncertTopic": "Grammar and mechanics - Sentences",
      "subject": "english",
      "chapterTitle": "EE.2: Identify and use end marks",
      "pedagogicalOutcome": {
        "english": "Distinguishing telling statements from asking questions, applying end punctuation (. vs ?), and unscrambling complete sentences.",
        "hindi": "साधारण वाक्य व प्रश्नवाचक वाक्य में अंतर, पूर्ण विराम (.) व प्रश्नवाचक चिह्न (?) का प्रयोग।"
      }
    },
    {
      "id": "ukg_eng_lab_ee_3",
      "title": "EE.3: Find the complete sentence",
      "subtitle": "व्याकरण अनुसार पूर्ण वाक्य पहचानें • 10 प्रश्न गहन अभ्यास",
      "icon": "✅",
      "badge": "UKG English • Sentences (EE.3)",
      "accentColor": "#7C3AED",
      "boxColor": "#F5F3FF",
      "ncertTopic": "Grammar and mechanics - Sentences",
      "subject": "english",
      "chapterTitle": "EE.3: Find the complete sentence",
      "pedagogicalOutcome": {
        "english": "Distinguishing telling statements from asking questions, applying end punctuation (. vs ?), and unscrambling complete sentences.",
        "hindi": "साधारण वाक्य व प्रश्नवाचक वाक्य में अंतर, पूर्ण विराम (.) व प्रश्नवाचक चिह्न (?) का प्रयोग।"
      }
    },
    {
      "id": "ukg_eng_lab_ee_4",
      "title": "EE.4: Unscramble the words to make a complete sentence",
      "subtitle": "उलटे-पुलटे शब्दों को सही क्रम में रखकर वाक्य बनाएं • 10 प्रश्न गहन अभ्यास",
      "icon": "🧩",
      "badge": "UKG English • Sentences (EE.4)",
      "accentColor": "#7C3AED",
      "boxColor": "#F5F3FF",
      "ncertTopic": "Grammar and mechanics - Sentences",
      "subject": "english",
      "chapterTitle": "EE.4: Unscramble the words to make a complete sentence",
      "pedagogicalOutcome": {
        "english": "Distinguishing telling statements from asking questions, applying end punctuation (. vs ?), and unscrambling complete sentences.",
        "hindi": "साधारण वाक्य व प्रश्नवाचक वाक्य में अंतर, पूर्ण विराम (.) व प्रश्नवाचक चिह्न (?) का प्रयोग।"
      }
    },
    {
      "id": "ukg_eng_lab_ff_1",
      "title": "FF.1: Capitalise the first letter of a sentence",
      "subtitle": "वाक्य का पहला अक्षर बड़ा (Capital) बनाएं • 10 प्रश्न गहन अभ्यास",
      "icon": "🔠",
      "badge": "UKG English • Capitalisation (FF.1)",
      "accentColor": "#7C3AED",
      "boxColor": "#F5F3FF",
      "ncertTopic": "Grammar and mechanics - Capitalisation",
      "subject": "english",
      "chapterTitle": "FF.1: Capitalise the first letter of a sentence",
      "pedagogicalOutcome": {
        "english": "Mastering capitalization rules: starting sentences with capital letters and always capitalizing the pronoun 'I'.",
        "hindi": "वाक्य का पहला अक्षर बड़ा (Capital) लिखना और 'I' को हमेशा Capital बनाना।"
      }
    },
    {
      "id": "ukg_eng_lab_ff_2",
      "title": "FF.2: Capitalise the pronoun 'I'",
      "subtitle": "सर्वनाम 'I' को हमेशा कैपिटल लिखें • 10 प्रश्न गहन अभ्यास",
      "icon": "ℹ️",
      "badge": "UKG English • Capitalisation (FF.2)",
      "accentColor": "#7C3AED",
      "boxColor": "#F5F3FF",
      "ncertTopic": "Grammar and mechanics - Capitalisation",
      "subject": "english",
      "chapterTitle": "FF.2: Capitalise the pronoun 'I'",
      "pedagogicalOutcome": {
        "english": "Mastering capitalization rules: starting sentences with capital letters and always capitalizing the pronoun 'I'.",
        "hindi": "वाक्य का पहला अक्षर बड़ा (Capital) लिखना और 'I' को हमेशा Capital बनाना।"
      }
    },
    {
      "id": "ukg_eng_lab_gg_1",
      "title": "GG.1: Is the noun a person, animal, place or thing?",
      "subtitle": "संज्ञा पहचान: व्यक्ति, पशु, स्थान या वस्तु? • 10 प्रश्न गहन अभ्यास",
      "icon": "🏷️",
      "badge": "UKG English • Nouns (GG.1)",
      "accentColor": "#7C3AED",
      "boxColor": "#F5F3FF",
      "ncertTopic": "Grammar and mechanics - Nouns",
      "subject": "english",
      "chapterTitle": "GG.1: Is the noun a person, animal, place or thing?",
      "pedagogicalOutcome": {
        "english": "Grammar fundamentals: identifying nouns as person, animal, place, or thing, and distinguishing singular vs plural forms.",
        "hindi": "संज्ञा (व्यक्ति, जानवर, स्थान, वस्तु) की पहचान और एकवचन/बहुवचन (Singular/Plural)।"
      }
    },
    {
      "id": "ukg_eng_lab_gg_2",
      "title": "GG.2: Choose the singular or plural noun that matches the picture",
      "subtitle": "एकवचन या बहुवचन (Singular / Plural) संज्ञा चुनें • 10 प्रश्न गहन अभ्यास",
      "icon": "📦",
      "badge": "UKG English • Nouns (GG.2)",
      "accentColor": "#7C3AED",
      "boxColor": "#F5F3FF",
      "ncertTopic": "Grammar and mechanics - Nouns",
      "subject": "english",
      "chapterTitle": "GG.2: Choose the singular or plural noun that matches the picture",
      "pedagogicalOutcome": {
        "english": "Grammar fundamentals: identifying nouns as person, animal, place, or thing, and distinguishing singular vs plural forms.",
        "hindi": "संज्ञा (व्यक्ति, जानवर, स्थान, वस्तु) की पहचान और एकवचन/बहुवचन (Singular/Plural)।"
      }
    },
    {
      "id": "ukg_eng_lab_hh_1",
      "title": "HH.1: Find the action verb with images",
      "subtitle": "सचित्र क्रिया (Action Verb) पहचानें • 10 प्रश्न गहन अभ्यास",
      "icon": "🏃",
      "badge": "UKG English • Verbs (HH.1)",
      "accentColor": "#7C3AED",
      "boxColor": "#F5F3FF",
      "ncertTopic": "Grammar and mechanics - Verbs",
      "subject": "english",
      "chapterTitle": "HH.1: Find the action verb with images",
      "pedagogicalOutcome": {
        "english": "Identifying action verbs in pictures and sentences, and completing full sentences with appropriate action verbs.",
        "hindi": "वाक्यों में क्रिया (Action Verbs) पहचानना और सही क्रिया से वाक्य पूरा करना।"
      }
    },
    {
      "id": "ukg_eng_lab_hh_2",
      "title": "HH.2: Find the action verb",
      "subtitle": "वाक्य में काम बताने वाला शब्द (Verb) खोजें • 10 प्रश्न गहन अभ्यास",
      "icon": "⚡",
      "badge": "UKG English • Verbs (HH.2)",
      "accentColor": "#7C3AED",
      "boxColor": "#F5F3FF",
      "ncertTopic": "Grammar and mechanics - Verbs",
      "subject": "english",
      "chapterTitle": "HH.2: Find the action verb",
      "pedagogicalOutcome": {
        "english": "Identifying action verbs in pictures and sentences, and completing full sentences with appropriate action verbs.",
        "hindi": "वाक्यों में क्रिया (Action Verbs) पहचानना और सही क्रिया से वाक्य पूरा करना।"
      }
    },
    {
      "id": "ukg_eng_lab_hh_3",
      "title": "HH.3: Complete the sentence with an action verb to match the picture",
      "subtitle": "चित्र के अनुसार सही क्रिया से वाक्य पूरा करें • 10 प्रश्न गहन अभ्यास",
      "icon": "✍️",
      "badge": "UKG English • Verbs (HH.3)",
      "accentColor": "#7C3AED",
      "boxColor": "#F5F3FF",
      "ncertTopic": "Grammar and mechanics - Verbs",
      "subject": "english",
      "chapterTitle": "HH.3: Complete the sentence with an action verb to match the picture",
      "pedagogicalOutcome": {
        "english": "Identifying action verbs in pictures and sentences, and completing full sentences with appropriate action verbs.",
        "hindi": "वाक्यों में क्रिया (Action Verbs) पहचानना और सही क्रिया से वाक्य पूरा करना।"
      }
    },
    {
      "id": "ukg_maths_interactive_lab",
      "title": "UKG Mathematics STEM Laboratory (हैंड्स-ऑन गणित लैब)",
      "subtitle": "5 Interactive Experiment Stations: Ten-Frames, Beakers, Coins, Geometry & Balance Beam",
      "icon": "🔬",
      "badge": "⭐ UKG Interactive STEM Experiment",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Hands-on Sensory Mathematics STEM Lab",
      "subject": "maths",
      "grade": "UKG",
      "pedagogicalOutcome": {
        "english": "Interactive sandbox with dual ten-frames, visual addition/subtraction beakers, Indian coin cash register, 2D/3D shapes, and dynamic balance scale.",
        "hindi": "टेन-फ्रेम, जोड़/घटाव बीकर, भारतीय सिक्के, 2D/3D आकृतियाँ और तराजू संतुलन के साथ प्रत्यक्ष इंटरैक्टिव गणित प्रयोग।"
      }
    },
    {
      "id": "ukg_maths_ten_frame_lab",
      "title": "Ten-Frame & Place Value Explorer (दहाई व इकाई टेन-फ्रेम लैब)",
      "subtitle": "Dual ten-frames up to 20, glowing counters & instant tens/ones breakdown",
      "icon": "🟩",
      "badge": "⭐ UKG Interactive STEM Experiment",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Counting & Numbers • Ten-Frames & Place Value",
      "subject": "maths",
      "grade": "UKG",
      "pedagogicalOutcome": {
        "english": "Children interactively fill and remove counters on two 10-frames to visualize place value (1 Ten + 4 Ones = 14) and master subitizing.",
        "hindi": "दो टेन-फ्रेम पर काउंटर्स रखकर बच्चे दहाई और इकाई (1 दहाई 10 + 4 इकाई = 14) का प्रत्यक्ष अनुभव करते हैं।"
      }
    },
    {
      "id": "ukg_maths_add_sub_beaker",
      "title": "Addition & Subtraction Magic Beaker (जोड़ व घटाव बीकर लैब)",
      "subtitle": "Drop counters to combine or pop balloons to take away with live equation bar",
      "icon": "🧪",
      "badge": "⭐ UKG Interactive STEM Experiment",
      "accentColor": "#059669",
      "boxColor": "#ECFDF5",
      "ncertTopic": "Addition & Subtraction • Visual Operations",
      "subject": "maths",
      "grade": "UKG",
      "pedagogicalOutcome": {
        "english": "Drop apples or stars into a shared beaker to visualize addition (4 + 3 = 7), or pop items to experience take-away subtraction in real time.",
        "hindi": "कटोरे में सेब या सितारे डालकर जोड़ और वस्तुओं को हटाकर घटाव की जीवंत समझ।"
      }
    },
    {
      "id": "ukg_maths_coin_bank",
      "title": "Indian Currency & Piggy Bank Register (भारतीय सिक्के व गुल्लक लैब)",
      "subtitle": "Drop real ₹1, ₹2, ₹5, ₹10 coins into piggy bank with clink sounds & reach target totals",
      "icon": "🪙",
      "badge": "⭐ UKG Interactive STEM Experiment",
      "accentColor": "#D97706",
      "boxColor": "#FEF3C7",
      "ncertTopic": "Money • Coins & Cash Register",
      "subject": "maths",
      "grade": "UKG",
      "pedagogicalOutcome": {
        "english": "Drop authentic Indian coins (₹1, ₹2, ₹5, ₹10) into a digital piggy bank to solve practical financial puzzles (e.g. ₹5 + ₹2 + ₹1 = ₹8).",
        "hindi": "गुल्लक में ₹1, ₹2, ₹5 और ₹10 के सिक्के डालकर लक्ष्य राशि पूरी करना और सिक्कों का जोड़ सीखना।"
      }
    },
    {
      "id": "ukg_maths_geometry_lab",
      "title": "2D & 3D Shape Laboratory (आकृतियाँ व ठोस वस्तु लैब)",
      "subtitle": "Touch & count sides/corners of 2D shapes and match 3D solids to real-world objects",
      "icon": "🔷",
      "badge": "⭐ UKG Interactive STEM Experiment",
      "accentColor": "#7C3AED",
      "boxColor": "#F5F3FF",
      "ncertTopic": "Geometry & Shapes • 2D & 3D Studio",
      "subject": "maths",
      "grade": "UKG",
      "pedagogicalOutcome": {
        "english": "Explore 2D sides and vertices (triangles, squares, rectangles) and discover real-life 3D solids (spheres as balls, cylinders as cans, cones as hats).",
        "hindi": "त्रिभुज, वर्ग और आयत की भुजाएँ गिनना और 3D ठोस वस्तुओं (गेंद, पासा, डिब्बा, टोपी) को दैनिक जीवन से जोड़ना।"
      }
    },
    {
      "id": "ukg_maths_balance_lab",
      "title": "Balance Beam & Mass Comparison (तराजू व भार संतुलन लैब)",
      "subtitle": "Place animals and weights on two pans, observe real physics tilt & achieve balance",
      "icon": "⚖️",
      "badge": "⭐ UKG Interactive STEM Experiment",
      "accentColor": "#EA580C",
      "boxColor": "#FFF7ED",
      "ncertTopic": "Measurement • Weight & Balance",
      "subject": "maths",
      "grade": "UKG",
      "pedagogicalOutcome": {
        "english": "Dynamic physics scale showing which pan is heavier, developing early intuition for weight comparison, gravity, and algebraic balance.",
        "hindi": "तराजू के पलड़ों पर भार रखकर भारी और हल्के की पहचान और दोनों ओर बराबर वजन करके संतुलन बनाना।"
      }
    },
    {
      "id": "ukg_maths_cat_lab_a",
      "title": "Numbers and counting up to 3 Studio (A.1 - A.6)",
      "subtitle": "1 से 3 तक की वस्तुओं, पासे के बिंदुओं और अंकों की पहचान व गिनती • 6 कौशल गहन अभ्यास",
      "icon": "1️⃣",
      "badge": "UKG Maths Category • A",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Counting & Numbers • Numbers and counting up to 3",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "A.1: Learn to count to 3",
      "pedagogicalOutcome": {
        "english": "Understand quantities 1 to 3 with dot patterns, visual objects, finger counting, and numeral association.",
        "hindi": "1 से 3 तक की वस्तुओं, पासे के बिंदुओं और अंकों की पहचान व गिनती।"
      }
    },
    {
      "id": "ukg_maths_cat_lab_b",
      "title": "Numbers and counting up to 5 Studio (B.1 - B.10)",
      "subtitle": "1 से 5 तक की वस्तुओं, डाइस और टेन-फ्रेम पर प्रत्यक्ष गिनती • 10 कौशल गहन अभ्यास",
      "icon": "🖐️",
      "badge": "UKG Maths Category • B",
      "accentColor": "#059669",
      "boxColor": "#ECFDF5",
      "ncertTopic": "Counting & Numbers • Numbers and counting up to 5",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "B.1: Learn to count to 5",
      "pedagogicalOutcome": {
        "english": "Counting collections up to 5, subitizing, dice dots, ten-frames, and one-to-one number correspondence.",
        "hindi": "1 से 5 तक की वस्तुओं, डाइस और टेन-फ्रेम पर प्रत्यक्ष गिनती।"
      }
    },
    {
      "id": "ukg_maths_cat_lab_c",
      "title": "Numbers and counting up to 10 Studio (C.1 - C.20)",
      "subtitle": "1 से 10 तक की वस्तुओं को गिनना, टेन-फ्रेम भरना और आगे-पीछे गिनती करना • 20 कौशल गहन अभ्यास",
      "icon": "🔟",
      "badge": "UKG Maths Category • C",
      "accentColor": "#7C3AED",
      "boxColor": "#F5F3FF",
      "ncertTopic": "Counting & Numbers • Numbers and counting up to 10",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "C.1: Learn to count to 10",
      "pedagogicalOutcome": {
        "english": "Count dots and objects up to 10, fill ten-frames, identify numbers, and count forward and backward.",
        "hindi": "1 से 10 तक की वस्तुओं को गिनना, टेन-फ्रेम भरना और आगे-पीछे गिनती करना।"
      }
    },
    {
      "id": "ukg_maths_cat_lab_d",
      "title": "Numbers and counting up to 20 Studio (D.1 - D.15)",
      "subtitle": "11 से 20 तक की संख्याएँ, दहाई और इकाई की समझ, और 20 तक गिनती • 15 कौशल गहन अभ्यास",
      "icon": "🔢",
      "badge": "UKG Maths Category • D",
      "accentColor": "#0284C7",
      "boxColor": "#E0F2FE",
      "ncertTopic": "Counting & Numbers • Numbers and counting up to 20",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "D.1: Count to 20",
      "pedagogicalOutcome": {
        "english": "Numbers 11 to 20, tens and ones place value, counting forward/backward up to 20, and two ten-frames.",
        "hindi": "11 से 20 तक की संख्याएँ, दहाई और इकाई की समझ, और 20 तक गिनती।"
      }
    },
    {
      "id": "ukg_maths_cat_lab_e",
      "title": "Comparing Studio (E.1 - E.7)",
      "subtitle": "अधिक, कम और बराबर की तुलना, और 20 तक की संख्याओं में छोटा-बड़ा पहचानना • 7 कौशल गहन अभ्यास",
      "icon": "⚖️",
      "badge": "UKG Maths Category • E",
      "accentColor": "#D97706",
      "boxColor": "#FEF3C7",
      "ncertTopic": "Comparing & Positions • Comparing",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "E.1: Are there enough?",
      "pedagogicalOutcome": {
        "english": "Comparing quantities (more, fewer, equal), comparing numbers up to 10 and 20 using symbols and visuals.",
        "hindi": "अधिक, कम और बराबर की तुलना, और 20 तक की संख्याओं में छोटा-बड़ा पहचानना।"
      }
    },
    {
      "id": "ukg_maths_cat_lab_f",
      "title": "Patterns Studio (F.1 - F.8)",
      "subtitle": "दोहरावदार पैटर्न (AB, AAB, ABC), आकृतियों और रंगों का क्रम समझना • 8 कौशल गहन अभ्यास",
      "icon": "🧩",
      "badge": "UKG Maths Category • F",
      "accentColor": "#9333EA",
      "boxColor": "#FAF5FF",
      "ncertTopic": "Classify & Patterns • Patterns",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "F.1: Colour patterns",
      "pedagogicalOutcome": {
        "english": "Repeating patterns (AB, AAB, ABC, ABB), color & shape sequences, and identifying the next item.",
        "hindi": "दोहरावदार पैटर्न (AB, AAB, ABC), आकृतियों और रंगों का क्रम समझना।"
      }
    },
    {
      "id": "ukg_maths_cat_lab_g",
      "title": "Positions Studio (G.1 - G.8)",
      "subtitle": "स्थानिक समझ: ऊपर, नीचे, अंदर, बाहर, बीच में, दाएँ और बाएँ • 8 कौशल गहन अभ्यास",
      "icon": "📍",
      "badge": "UKG Maths Category • G",
      "accentColor": "#EA580C",
      "boxColor": "#FFF7ED",
      "ncertTopic": "Comparing & Positions • Positions",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "G.1: Inside and outside",
      "pedagogicalOutcome": {
        "english": "Spatial sense: above, below, inside, outside, top, bottom, middle, left, and right.",
        "hindi": "स्थानिक समझ: ऊपर, नीचे, अंदर, बाहर, बीच में, दाएँ और बाएँ।"
      }
    },
    {
      "id": "ukg_maths_cat_lab_h",
      "title": "Addition up to 5 Studio (H.1 - H.6)",
      "subtitle": "चित्रों और वस्तुओं को मिलाकर 5 तक का जोड़ और समीकरण हल करना • 6 कौशल गहन अभ्यास",
      "icon": "➕",
      "badge": "UKG Maths Category • H",
      "accentColor": "#10B981",
      "boxColor": "#ECFDF5",
      "ncertTopic": "Addition & Subtraction • Addition up to 5",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "H.1: Add with pictures - sums up to 5",
      "pedagogicalOutcome": {
        "english": "Add with pictures up to 5, addition equations, putting groups together, and making 5.",
        "hindi": "चित्रों और वस्तुओं को मिलाकर 5 तक का जोड़ और समीकरण हल करना।"
      }
    },
    {
      "id": "ukg_maths_cat_lab_i",
      "title": "Addition up to 10 Studio (I.1 - I.8)",
      "subtitle": "10 तक का जोड़, टेन-फ्रेम से 10 बनाना और सरल मौखिक जोड़ समस्याएँ • 8 कौशल गहन अभ्यास",
      "icon": "➕",
      "badge": "UKG Maths Category • I",
      "accentColor": "#059669",
      "boxColor": "#DCFCE7",
      "ncertTopic": "Addition & Subtraction • Addition up to 10",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "I.1: Add with pictures - sums up to 10",
      "pedagogicalOutcome": {
        "english": "Sums up to 10, make 10 using ten-frames, addition word problems, and number bonds.",
        "hindi": "10 तक का जोड़, टेन-फ्रेम से 10 बनाना और सरल मौखिक जोड़ समस्याएँ।"
      }
    },
    {
      "id": "ukg_maths_cat_lab_j",
      "title": "Subtraction up to 5 Studio (J.1 - J.5)",
      "subtitle": "5 में से वस्तुओं को हटाकर या काटकर घटाव समझना और समीकरण लिखना • 5 कौशल गहन अभ्यास",
      "icon": "➖",
      "badge": "UKG Maths Category • J",
      "accentColor": "#EF4444",
      "boxColor": "#FEF2F2",
      "ncertTopic": "Addition & Subtraction • Subtraction up to 5",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "J.1: Subtract with pictures - numbers up to 5",
      "pedagogicalOutcome": {
        "english": "Take away objects up to 5, subtraction equations, crossed-out pictures, and subtraction stories.",
        "hindi": "5 में से वस्तुओं को हटाकर या काटकर घटाव समझना और समीकरण लिखना।"
      }
    },
    {
      "id": "ukg_maths_cat_lab_k",
      "title": "Subtraction up to 10 Studio (K.1 - K.7)",
      "subtitle": "10 तक की वस्तुओं में से घटाव, अंतर निकालना और मौखिक घटाव समस्याएँ • 7 कौशल गहन अभ्यास",
      "icon": "➖",
      "badge": "UKG Maths Category • K",
      "accentColor": "#DC2626",
      "boxColor": "#FEE2E2",
      "ncertTopic": "Addition & Subtraction • Subtraction up to 10",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "K.1: Subtract with pictures - numbers up to 10",
      "pedagogicalOutcome": {
        "english": "Subtract with pictures up to 10, subtraction word problems, and finding the difference.",
        "hindi": "10 तक की वस्तुओं में से घटाव, अंतर निकालना और मौखिक घटाव समस्याएँ।"
      }
    },
    {
      "id": "ukg_maths_cat_lab_l",
      "title": "Sorting, ordering and classifying Studio (L.1 - L.11)",
      "subtitle": "रंग, आकार और माप के आधार पर वस्तुओं को छांटना और अलग-अलग वर्गों में रखना • 11 कौशल गहन अभ्यास",
      "icon": "🗂️",
      "badge": "UKG Maths Category • L",
      "accentColor": "#8B5CF6",
      "boxColor": "#F5F3FF",
      "ncertTopic": "Classify & Patterns • Sorting, ordering and classifying",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "L.1: Same",
      "pedagogicalOutcome": {
        "english": "Classify by color, shape, size, count each group, and sort objects into multiple categories.",
        "hindi": "रंग, आकार और माप के आधार पर वस्तुओं को छांटना और अलग-अलग वर्गों में रखना।"
      }
    },
    {
      "id": "ukg_maths_cat_lab_m",
      "title": "Data and graphs Studio (M.1 - M.1)",
      "subtitle": "चित्र आलेख (Pictograph) और टैली मार्क से जानकारी पढ़ना और समझना • 1 कौशल गहन अभ्यास",
      "icon": "📊",
      "badge": "UKG Maths Category • M",
      "accentColor": "#06B6D4",
      "boxColor": "#ECFEFF",
      "ncertTopic": "Data & Measurement • Data and graphs",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "M.1: Which pictograph is correct?",
      "pedagogicalOutcome": {
        "english": "Read picture graphs, tally marks, bar graphs, and interpret simple data tables.",
        "hindi": "चित्र आलेख (Pictograph) और टैली मार्क से जानकारी पढ़ना और समझना।"
      }
    },
    {
      "id": "ukg_maths_cat_lab_n",
      "title": "Probability Studio (N.1 - N.1)",
      "subtitle": "संभावना की समझ: क्या अधिक संभव है और क्या असंभव है • 1 कौशल गहन अभ्यास",
      "icon": "🎲",
      "badge": "UKG Maths Category • N",
      "accentColor": "#F59E0B",
      "boxColor": "#FFFBEB",
      "ncertTopic": "Data & Measurement • Probability",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "N.1: More or less likely",
      "pedagogicalOutcome": {
        "english": "Understand likelihood: more likely, less likely, certain, and impossible events.",
        "hindi": "संभावना की समझ: क्या अधिक संभव है और क्या असंभव है।"
      }
    },
    {
      "id": "ukg_maths_cat_lab_o",
      "title": "Measurement Studio (O.1 - O.4)",
      "subtitle": "लम्बाई, ऊंचाई, वजन और धारिता की तुलना: लम्बा, छोटा, भारी, हल्का • 4 कौशल गहन अभ्यास",
      "icon": "📏",
      "badge": "UKG Maths Category • O",
      "accentColor": "#14B8A6",
      "boxColor": "#F0FDFA",
      "ncertTopic": "Data & Measurement • Measurement",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "O.1: Long and short",
      "pedagogicalOutcome": {
        "english": "Compare length, height, weight, and volume: taller, shorter, heavier, lighter, holds more.",
        "hindi": "लम्बाई, ऊंचाई, वजन और धारिता की तुलना: लम्बा, छोटा, भारी, हल्का।"
      }
    },
    {
      "id": "ukg_maths_cat_lab_p",
      "title": "Money Studio (P.1 - P.6)",
      "subtitle": "भारतीय सिक्कों (₹1, ₹2, ₹5, ₹10) की पहचान और कुल मूल्य गिनना • 6 कौशल गहन अभ्यास",
      "icon": "🪙",
      "badge": "UKG Maths Category • P",
      "accentColor": "#EAB308",
      "boxColor": "#FEFCE8",
      "ncertTopic": "Data & Measurement • Money",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "P.1: Coin values",
      "pedagogicalOutcome": {
        "english": "Identify Indian coins (₹1, ₹2, ₹5, ₹10), match coin values, and count money amounts.",
        "hindi": "भारतीय सिक्कों (₹1, ₹2, ₹5, ₹10) की पहचान और कुल मूल्य गिनना।"
      }
    },
    {
      "id": "ukg_maths_cat_lab_q",
      "title": "Two-dimensional shapes Studio (Q.1 - Q.10)",
      "subtitle": "2D आकृतियों (वृत्त, त्रिकोण, वर्ग, आयत) की पहचान और भुजाएँ व कोने गिनना • 10 कौशल गहन अभ्यास",
      "icon": "🔺",
      "badge": "UKG Maths Category • Q",
      "accentColor": "#6366F1",
      "boxColor": "#EEF2FF",
      "ncertTopic": "Geometry & Shapes • Two-dimensional shapes",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "Q.1: Name the two-dimensional shape",
      "pedagogicalOutcome": {
        "english": "Identify circles, triangles, squares, rectangles, hexagons, count sides and corners.",
        "hindi": "2D आकृतियों (वृत्त, त्रिकोण, वर्ग, आयत) की पहचान और भुजाएँ व कोने गिनना।"
      }
    },
    {
      "id": "ukg_maths_cat_lab_r",
      "title": "Three-dimensional shapes Studio (R.1 - R.10)",
      "subtitle": "3D ठोस आकृतियों (गोला, घन, बेलन, शंकु) की पहचान और दैनिक वस्तुओं से मिलान • 10 कौशल गहन अभ्यास",
      "icon": "🧊",
      "badge": "UKG Maths Category • R",
      "accentColor": "#EC4899",
      "boxColor": "#FDF2F8",
      "ncertTopic": "Geometry & Shapes • Three-dimensional shapes",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "R.1: Two-dimensional and three-dimensional shapes",
      "pedagogicalOutcome": {
        "english": "Identify spheres, cubes, cones, cylinders, and match with everyday real-world solid objects.",
        "hindi": "3D ठोस आकृतियों (गोला, घन, बेलन, शंकु) की पहचान और दैनिक वस्तुओं से मिलान।"
      }
    },
    {
      "id": "ukg_maths_cat_lab_s",
      "title": "Vocabulary Studio (S.1 - S.1)",
      "subtitle": "गणितीय शब्दावली: समान, अलग, जोड़ी, समूह, कुल, और स्थान सूचक शब्द • 1 कौशल गहन अभ्यास",
      "icon": "📖",
      "badge": "UKG Maths Category • S",
      "accentColor": "#F97316",
      "boxColor": "#FFF7ED",
      "ncertTopic": "Counting & Numbers • Vocabulary",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "S.1: Sum and difference",
      "pedagogicalOutcome": {
        "english": "Math vocabulary: same, different, pair, group, fewer, more, total, and positions.",
        "hindi": "गणितीय शब्दावली: समान, अलग, जोड़ी, समूह, कुल, और स्थान सूचक शब्द।"
      }
    },
    {
      "id": "ukg_maths_lab_a_1",
      "title": "A.1: Learn to count to 3",
      "subtitle": "३ तक गिनना सीखें • 10 प्रश्न गहन अभ्यास",
      "icon": "1️⃣",
      "badge": "UKG Maths • Numbers and counting up to 3 (A.1)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Counting & Numbers • Numbers and counting up to 3",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "A.1: Learn to count to 3",
      "pedagogicalOutcome": {
        "english": "Master learn to count to 3 through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "३ तक गिनना सीखें की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_a_2",
      "title": "A.2: Count to 3",
      "subtitle": "३ तक गिनें • 10 प्रश्न गहन अभ्यास",
      "icon": "🔢",
      "badge": "UKG Maths • Numbers and counting up to 3 (A.2)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Counting & Numbers • Numbers and counting up to 3",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "A.2: Count to 3",
      "pedagogicalOutcome": {
        "english": "Master count to 3 through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "३ तक गिनें की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_a_3",
      "title": "A.3: Count using stickers - up to 3",
      "subtitle": "स्टिकर से ३ तक गिनें • 10 प्रश्न गहन अभ्यास",
      "icon": "⭐",
      "badge": "UKG Maths • Numbers and counting up to 3 (A.3)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Counting & Numbers • Numbers and counting up to 3",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "A.3: Count using stickers - up to 3",
      "pedagogicalOutcome": {
        "english": "Master count using stickers - up to 3 through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "स्टिकर से ३ तक गिनें की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_a_4",
      "title": "A.4: Count on ten frames - up to 3",
      "subtitle": "टेन फ्रेम पर ३ तक गिनें • 10 प्रश्न गहन अभ्यास",
      "icon": "🔲",
      "badge": "UKG Maths • Numbers and counting up to 3 (A.4)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Counting & Numbers • Numbers and counting up to 3",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "A.4: Count on ten frames - up to 3",
      "pedagogicalOutcome": {
        "english": "Master count on ten frames - up to 3 through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "टेन फ्रेम पर ३ तक गिनें की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_a_5",
      "title": "A.5: Show numbers on ten frames - up to 3",
      "subtitle": "टेन फ्रेम पर संख्या ३ तक दिखाएं • 10 प्रश्न गहन अभ्यास",
      "icon": "🎯",
      "badge": "UKG Maths • Numbers and counting up to 3 (A.5)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Counting & Numbers • Numbers and counting up to 3",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "A.5: Show numbers on ten frames - up to 3",
      "pedagogicalOutcome": {
        "english": "Master show numbers on ten frames - up to 3 through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "टेन फ्रेम पर संख्या ३ तक दिखाएं की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_a_6",
      "title": "A.6: Represent numbers - up to 3",
      "subtitle": "संख्या ३ तक निरूपित करें • 10 प्रश्न गहन अभ्यास",
      "icon": "📊",
      "badge": "UKG Maths • Numbers and counting up to 3 (A.6)",
      "accentColor": "#2563EB",
      "boxColor": "#EFF6FF",
      "ncertTopic": "Counting & Numbers • Numbers and counting up to 3",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "A.6: Represent numbers - up to 3",
      "pedagogicalOutcome": {
        "english": "Master represent numbers - up to 3 through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "संख्या ३ तक निरूपित करें की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_b_1",
      "title": "B.1: Learn to count to 5",
      "subtitle": "५ तक गिनना सीखें • 10 प्रश्न गहन अभ्यास",
      "icon": "🖐️",
      "badge": "UKG Maths • Numbers and counting up to 5 (B.1)",
      "accentColor": "#059669",
      "boxColor": "#ECFDF5",
      "ncertTopic": "Counting & Numbers • Numbers and counting up to 5",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "B.1: Learn to count to 5",
      "pedagogicalOutcome": {
        "english": "Master learn to count to 5 through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "५ तक गिनना सीखें की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_b_2",
      "title": "B.2: Count to 5",
      "subtitle": "५ तक गिनें • 10 प्रश्न गहन अभ्यास",
      "icon": "🔢",
      "badge": "UKG Maths • Numbers and counting up to 5 (B.2)",
      "accentColor": "#059669",
      "boxColor": "#ECFDF5",
      "ncertTopic": "Counting & Numbers • Numbers and counting up to 5",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "B.2: Count to 5",
      "pedagogicalOutcome": {
        "english": "Master count to 5 through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "५ तक गिनें की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_b_3",
      "title": "B.3: Count using stickers - up to 5",
      "subtitle": "स्टिकर से ५ तक गिनें • 10 प्रश्न गहन अभ्यास",
      "icon": "⭐",
      "badge": "UKG Maths • Numbers and counting up to 5 (B.3)",
      "accentColor": "#059669",
      "boxColor": "#ECFDF5",
      "ncertTopic": "Counting & Numbers • Numbers and counting up to 5",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "B.3: Count using stickers - up to 5",
      "pedagogicalOutcome": {
        "english": "Master count using stickers - up to 5 through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "स्टिकर से ५ तक गिनें की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_b_4",
      "title": "B.4: Count on ten frames - up to 5",
      "subtitle": "टेन फ्रेम पर ५ तक गिनें • 10 प्रश्न गहन अभ्यास",
      "icon": "🔲",
      "badge": "UKG Maths • Numbers and counting up to 5 (B.4)",
      "accentColor": "#059669",
      "boxColor": "#ECFDF5",
      "ncertTopic": "Counting & Numbers • Numbers and counting up to 5",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "B.4: Count on ten frames - up to 5",
      "pedagogicalOutcome": {
        "english": "Master count on ten frames - up to 5 through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "टेन फ्रेम पर ५ तक गिनें की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_b_5",
      "title": "B.5: Show numbers on ten frames - up to 5",
      "subtitle": "टेन फ्रेम पर संख्या ५ तक दिखाएं • 10 प्रश्न गहन अभ्यास",
      "icon": "🎯",
      "badge": "UKG Maths • Numbers and counting up to 5 (B.5)",
      "accentColor": "#059669",
      "boxColor": "#ECFDF5",
      "ncertTopic": "Counting & Numbers • Numbers and counting up to 5",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "B.5: Show numbers on ten frames - up to 5",
      "pedagogicalOutcome": {
        "english": "Master show numbers on ten frames - up to 5 through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "टेन फ्रेम पर संख्या ५ तक दिखाएं की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_b_6",
      "title": "B.6: Represent numbers - up to 5",
      "subtitle": "संख्या ५ तक निरूपित करें • 10 प्रश्न गहन अभ्यास",
      "icon": "📊",
      "badge": "UKG Maths • Numbers and counting up to 5 (B.6)",
      "accentColor": "#059669",
      "boxColor": "#ECFDF5",
      "ncertTopic": "Counting & Numbers • Numbers and counting up to 5",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "B.6: Represent numbers - up to 5",
      "pedagogicalOutcome": {
        "english": "Master represent numbers - up to 5 through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "संख्या ५ तक निरूपित करें की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_b_7",
      "title": "B.7: One more - up to 5",
      "subtitle": "एक और (One more) - ५ तक • 10 प्रश्न गहन अभ्यास",
      "icon": "➕",
      "badge": "UKG Maths • Numbers and counting up to 5 (B.7)",
      "accentColor": "#059669",
      "boxColor": "#ECFDF5",
      "ncertTopic": "Counting & Numbers • Numbers and counting up to 5",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "B.7: One more - up to 5",
      "pedagogicalOutcome": {
        "english": "Master one more - up to 5 through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "एक और (One more) - ५ तक की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_b_8",
      "title": "B.8: Count one more - up to 5",
      "subtitle": "एक और गिनें - ५ तक • 10 प्रश्न गहन अभ्यास",
      "icon": "📈",
      "badge": "UKG Maths • Numbers and counting up to 5 (B.8)",
      "accentColor": "#059669",
      "boxColor": "#ECFDF5",
      "ncertTopic": "Counting & Numbers • Numbers and counting up to 5",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "B.8: Count one more - up to 5",
      "pedagogicalOutcome": {
        "english": "Master count one more - up to 5 through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "एक और गिनें - ५ तक की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_b_9",
      "title": "B.9: One less - up to 5",
      "subtitle": "एक कम (One less) - ५ तक • 10 प्रश्न गहन अभ्यास",
      "icon": "➖",
      "badge": "UKG Maths • Numbers and counting up to 5 (B.9)",
      "accentColor": "#059669",
      "boxColor": "#ECFDF5",
      "ncertTopic": "Counting & Numbers • Numbers and counting up to 5",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "B.9: One less - up to 5",
      "pedagogicalOutcome": {
        "english": "Master one less - up to 5 through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "एक कम (One less) - ५ तक की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_b_10",
      "title": "B.10: Count one less - up to 5",
      "subtitle": "एक कम गिनें - ५ तक • 10 प्रश्न गहन अभ्यास",
      "icon": "📉",
      "badge": "UKG Maths • Numbers and counting up to 5 (B.10)",
      "accentColor": "#059669",
      "boxColor": "#ECFDF5",
      "ncertTopic": "Counting & Numbers • Numbers and counting up to 5",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "B.10: Count one less - up to 5",
      "pedagogicalOutcome": {
        "english": "Master count one less - up to 5 through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "एक कम गिनें - ५ तक की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_c_1",
      "title": "C.1: Learn to count to 10",
      "subtitle": "१० तक गिनना सीखें • 10 प्रश्न गहन अभ्यास",
      "icon": "🔟",
      "badge": "UKG Maths • Numbers and counting up to 10 (C.1)",
      "accentColor": "#7C3AED",
      "boxColor": "#F5F3FF",
      "ncertTopic": "Counting & Numbers • Numbers and counting up to 10",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "C.1: Learn to count to 10",
      "pedagogicalOutcome": {
        "english": "Master learn to count to 10 through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "१० तक गिनना सीखें की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_c_2",
      "title": "C.2: Count to 10",
      "subtitle": "१० तक गिनें • 10 प्रश्न गहन अभ्यास",
      "icon": "🔢",
      "badge": "UKG Maths • Numbers and counting up to 10 (C.2)",
      "accentColor": "#7C3AED",
      "boxColor": "#F5F3FF",
      "ncertTopic": "Counting & Numbers • Numbers and counting up to 10",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "C.2: Count to 10",
      "pedagogicalOutcome": {
        "english": "Master count to 10 through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "१० तक गिनें की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_c_3",
      "title": "C.3: Count using stickers - up to 10",
      "subtitle": "स्टिकर से १० तक गिनें • 10 प्रश्न गहन अभ्यास",
      "icon": "⭐",
      "badge": "UKG Maths • Numbers and counting up to 10 (C.3)",
      "accentColor": "#7C3AED",
      "boxColor": "#F5F3FF",
      "ncertTopic": "Counting & Numbers • Numbers and counting up to 10",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "C.3: Count using stickers - up to 10",
      "pedagogicalOutcome": {
        "english": "Master count using stickers - up to 10 through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "स्टिकर से १० तक गिनें की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_c_4",
      "title": "C.4: Count on ten frames - up to 10",
      "subtitle": "टेन फ्रेम पर १० तक गिनें • 10 प्रश्न गहन अभ्यास",
      "icon": "🔲",
      "badge": "UKG Maths • Numbers and counting up to 10 (C.4)",
      "accentColor": "#7C3AED",
      "boxColor": "#F5F3FF",
      "ncertTopic": "Counting & Numbers • Numbers and counting up to 10",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "C.4: Count on ten frames - up to 10",
      "pedagogicalOutcome": {
        "english": "Master count on ten frames - up to 10 through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "टेन फ्रेम पर १० तक गिनें की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_c_5",
      "title": "C.5: Show numbers on ten frames - up to 10",
      "subtitle": "टेन फ्रेम पर संख्या १० तक दिखाएं • 10 प्रश्न गहन अभ्यास",
      "icon": "🎯",
      "badge": "UKG Maths • Numbers and counting up to 10 (C.5)",
      "accentColor": "#7C3AED",
      "boxColor": "#F5F3FF",
      "ncertTopic": "Counting & Numbers • Numbers and counting up to 10",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "C.5: Show numbers on ten frames - up to 10",
      "pedagogicalOutcome": {
        "english": "Master show numbers on ten frames - up to 10 through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "टेन फ्रेम पर संख्या १० तक दिखाएं की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_c_6",
      "title": "C.6: Represent numbers - up to 10",
      "subtitle": "संख्या १० तक निरूपित करें • 10 प्रश्न गहन अभ्यास",
      "icon": "📊",
      "badge": "UKG Maths • Numbers and counting up to 10 (C.6)",
      "accentColor": "#7C3AED",
      "boxColor": "#F5F3FF",
      "ncertTopic": "Counting & Numbers • Numbers and counting up to 10",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "C.6: Represent numbers - up to 10",
      "pedagogicalOutcome": {
        "english": "Master represent numbers - up to 10 through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "संख्या १० तक निरूपित करें की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_c_7",
      "title": "C.7: One more - up to 10",
      "subtitle": "एक और (One more) - १० तक • 10 प्रश्न गहन अभ्यास",
      "icon": "➕",
      "badge": "UKG Maths • Numbers and counting up to 10 (C.7)",
      "accentColor": "#7C3AED",
      "boxColor": "#F5F3FF",
      "ncertTopic": "Counting & Numbers • Numbers and counting up to 10",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "C.7: One more - up to 10",
      "pedagogicalOutcome": {
        "english": "Master one more - up to 10 through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "एक और (One more) - १० तक की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_c_8",
      "title": "C.8: Count one more - up to 10",
      "subtitle": "एक और गिनें - १० तक • 10 प्रश्न गहन अभ्यास",
      "icon": "📈",
      "badge": "UKG Maths • Numbers and counting up to 10 (C.8)",
      "accentColor": "#7C3AED",
      "boxColor": "#F5F3FF",
      "ncertTopic": "Counting & Numbers • Numbers and counting up to 10",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "C.8: Count one more - up to 10",
      "pedagogicalOutcome": {
        "english": "Master count one more - up to 10 through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "एक और गिनें - १० तक की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_c_9",
      "title": "C.9: One less - up to 10",
      "subtitle": "एक कम (One less) - १० तक • 10 प्रश्न गहन अभ्यास",
      "icon": "➖",
      "badge": "UKG Maths • Numbers and counting up to 10 (C.9)",
      "accentColor": "#7C3AED",
      "boxColor": "#F5F3FF",
      "ncertTopic": "Counting & Numbers • Numbers and counting up to 10",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "C.9: One less - up to 10",
      "pedagogicalOutcome": {
        "english": "Master one less - up to 10 through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "एक कम (One less) - १० तक की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_c_10",
      "title": "C.10: Count one less - up to 10",
      "subtitle": "एक कम गिनें - १० तक • 10 प्रश्न गहन अभ्यास",
      "icon": "📉",
      "badge": "UKG Maths • Numbers and counting up to 10 (C.10)",
      "accentColor": "#7C3AED",
      "boxColor": "#F5F3FF",
      "ncertTopic": "Counting & Numbers • Numbers and counting up to 10",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "C.10: Count one less - up to 10",
      "pedagogicalOutcome": {
        "english": "Master count one less - up to 10 through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "एक कम गिनें - १० तक की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_c_11",
      "title": "C.11: One more and one less - up to 10",
      "subtitle": "एक ज्यादा और एक कम - १० तक • 10 प्रश्न गहन अभ्यास",
      "icon": "⚖️",
      "badge": "UKG Maths • Numbers and counting up to 10 (C.11)",
      "accentColor": "#7C3AED",
      "boxColor": "#F5F3FF",
      "ncertTopic": "Counting & Numbers • Numbers and counting up to 10",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "C.11: One more and one less - up to 10",
      "pedagogicalOutcome": {
        "english": "Master one more and one less - up to 10 through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "एक ज्यादा और एक कम - १० तक की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_c_12",
      "title": "C.12: Count one more and one less - up to 10",
      "subtitle": "एक अधिक और एक कम गिनें - १० तक • 10 प्रश्न गहन अभ्यास",
      "icon": "🔄",
      "badge": "UKG Maths • Numbers and counting up to 10 (C.12)",
      "accentColor": "#7C3AED",
      "boxColor": "#F5F3FF",
      "ncertTopic": "Counting & Numbers • Numbers and counting up to 10",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "C.12: Count one more and one less - up to 10",
      "pedagogicalOutcome": {
        "english": "Master count one more and one less - up to 10 through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "एक अधिक और एक कम गिनें - १० तक की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_c_13",
      "title": "C.13: Count up and down to find the next number - up to 10",
      "subtitle": "आगे और पीछे गिनकर अगली संख्या खोजें - १० तक • 10 प्रश्न गहन अभ्यास",
      "icon": "🪜",
      "badge": "UKG Maths • Numbers and counting up to 10 (C.13)",
      "accentColor": "#7C3AED",
      "boxColor": "#F5F3FF",
      "ncertTopic": "Counting & Numbers • Numbers and counting up to 10",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "C.13: Count up and down to find the next number - up to 10",
      "pedagogicalOutcome": {
        "english": "Master count up and down to find the next number - up to 10 through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "आगे और पीछे गिनकर अगली संख्या खोजें - १० तक की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_c_14",
      "title": "C.14: Count to fill a ten frame",
      "subtitle": "टेन फ्रेम भरने के लिए गिनें • 10 प्रश्न गहन अभ्यास",
      "icon": "🔲",
      "badge": "UKG Maths • Numbers and counting up to 10 (C.14)",
      "accentColor": "#7C3AED",
      "boxColor": "#F5F3FF",
      "ncertTopic": "Counting & Numbers • Numbers and counting up to 10",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "C.14: Count to fill a ten frame",
      "pedagogicalOutcome": {
        "english": "Master count to fill a ten frame through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "टेन फ्रेम भरने के लिए गिनें की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_c_15",
      "title": "C.15: Tally marks - up to 10",
      "subtitle": "टैली मार्क्स (Tally marks) - १० तक • 10 प्रश्न गहन अभ्यास",
      "icon": "🪓",
      "badge": "UKG Maths • Numbers and counting up to 10 (C.15)",
      "accentColor": "#7C3AED",
      "boxColor": "#F5F3FF",
      "ncertTopic": "Counting & Numbers • Numbers and counting up to 10",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "C.15: Tally marks - up to 10",
      "pedagogicalOutcome": {
        "english": "Master tally marks - up to 10 through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "टैली मार्क्स (Tally marks) - १० तक की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_c_16",
      "title": "C.16: Number lines - up to 10",
      "subtitle": "संख्या रेखा (Number lines) - १० तक • 10 प्रश्न गहन अभ्यास",
      "icon": "📏",
      "badge": "UKG Maths • Numbers and counting up to 10 (C.16)",
      "accentColor": "#7C3AED",
      "boxColor": "#F5F3FF",
      "ncertTopic": "Counting & Numbers • Numbers and counting up to 10",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "C.16: Number lines - up to 10",
      "pedagogicalOutcome": {
        "english": "Master number lines - up to 10 through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "संख्या रेखा (Number lines) - १० तक की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_c_17",
      "title": "C.17: Before, after and between - up to 10",
      "subtitle": "पहले, बाद और बीच में - १० तक • 10 प्रश्न गहन अभ्यास",
      "icon": "↔️",
      "badge": "UKG Maths • Numbers and counting up to 10 (C.17)",
      "accentColor": "#7C3AED",
      "boxColor": "#F5F3FF",
      "ncertTopic": "Counting & Numbers • Numbers and counting up to 10",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "C.17: Before, after and between - up to 10",
      "pedagogicalOutcome": {
        "english": "Master before, after and between - up to 10 through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "पहले, बाद और बीच में - १० तक की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_c_18",
      "title": "C.18: Count forwards and backwards - up to 10",
      "subtitle": "आगे और पीछे की गिनती - १० तक • 10 प्रश्न गहन अभ्यास",
      "icon": "🔄",
      "badge": "UKG Maths • Numbers and counting up to 10 (C.18)",
      "accentColor": "#7C3AED",
      "boxColor": "#F5F3FF",
      "ncertTopic": "Counting & Numbers • Numbers and counting up to 10",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "C.18: Count forwards and backwards - up to 10",
      "pedagogicalOutcome": {
        "english": "Master count forwards and backwards - up to 10 through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "आगे और पीछे की गिनती - १० तक की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_c_19",
      "title": "C.19: Names of numbers - up to 10",
      "subtitle": "संख्याओं के नाम (One to Ten) - १० तक • 10 प्रश्न गहन अभ्यास",
      "icon": "📝",
      "badge": "UKG Maths • Numbers and counting up to 10 (C.19)",
      "accentColor": "#7C3AED",
      "boxColor": "#F5F3FF",
      "ncertTopic": "Counting & Numbers • Numbers and counting up to 10",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "C.19: Names of numbers - up to 10",
      "pedagogicalOutcome": {
        "english": "Master names of numbers - up to 10 through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "संख्याओं के नाम (One to Ten) - १० तक की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_c_20",
      "title": "C.20: Complete a sequence - up to 10",
      "subtitle": "संख्या क्रम पूरा करें - १० तक • 10 प्रश्न गहन अभ्यास",
      "icon": "🧩",
      "badge": "UKG Maths • Numbers and counting up to 10 (C.20)",
      "accentColor": "#7C3AED",
      "boxColor": "#F5F3FF",
      "ncertTopic": "Counting & Numbers • Numbers and counting up to 10",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "C.20: Complete a sequence - up to 10",
      "pedagogicalOutcome": {
        "english": "Master complete a sequence - up to 10 through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "संख्या क्रम पूरा करें - १० तक की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_d_1",
      "title": "D.1: Count to 20",
      "subtitle": "२० तक गिनें • 10 प्रश्न गहन अभ्यास",
      "icon": "🔢",
      "badge": "UKG Maths • Numbers and counting up to 20 (D.1)",
      "accentColor": "#0284C7",
      "boxColor": "#E0F2FE",
      "ncertTopic": "Counting & Numbers • Numbers and counting up to 20",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "D.1: Count to 20",
      "pedagogicalOutcome": {
        "english": "Master count to 20 through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "२० तक गिनें की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_d_2",
      "title": "D.2: Count on ten frames - up to 20",
      "subtitle": "टेन फ्रेम पर २० तक गिनें • 10 प्रश्न गहन अभ्यास",
      "icon": "🔲",
      "badge": "UKG Maths • Numbers and counting up to 20 (D.2)",
      "accentColor": "#0284C7",
      "boxColor": "#E0F2FE",
      "ncertTopic": "Counting & Numbers • Numbers and counting up to 20",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "D.2: Count on ten frames - up to 20",
      "pedagogicalOutcome": {
        "english": "Master count on ten frames - up to 20 through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "टेन फ्रेम पर २० तक गिनें की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_d_3",
      "title": "D.3: Show numbers on ten frames - up to 20",
      "subtitle": "टेन फ्रेम पर संख्या २० तक दिखाएं • 10 प्रश्न गहन अभ्यास",
      "icon": "🎯",
      "badge": "UKG Maths • Numbers and counting up to 20 (D.3)",
      "accentColor": "#0284C7",
      "boxColor": "#E0F2FE",
      "ncertTopic": "Counting & Numbers • Numbers and counting up to 20",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "D.3: Show numbers on ten frames - up to 20",
      "pedagogicalOutcome": {
        "english": "Master show numbers on ten frames - up to 20 through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "टेन फ्रेम पर संख्या २० तक दिखाएं की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_d_4",
      "title": "D.4: Represent numbers - up to 20",
      "subtitle": "संख्या २० तक निरूपित करें • 10 प्रश्न गहन अभ्यास",
      "icon": "📊",
      "badge": "UKG Maths • Numbers and counting up to 20 (D.4)",
      "accentColor": "#0284C7",
      "boxColor": "#E0F2FE",
      "ncertTopic": "Counting & Numbers • Numbers and counting up to 20",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "D.4: Represent numbers - up to 20",
      "pedagogicalOutcome": {
        "english": "Master represent numbers - up to 20 through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "संख्या २० तक निरूपित करें की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_d_5",
      "title": "D.5: Count up and down to find the next number - up to 20",
      "subtitle": "आगे और पीछे गिनकर अगली संख्या खोजें - २० तक • 10 प्रश्न गहन अभ्यास",
      "icon": "🪜",
      "badge": "UKG Maths • Numbers and counting up to 20 (D.5)",
      "accentColor": "#0284C7",
      "boxColor": "#E0F2FE",
      "ncertTopic": "Counting & Numbers • Numbers and counting up to 20",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "D.5: Count up and down to find the next number - up to 20",
      "pedagogicalOutcome": {
        "english": "Master count up and down to find the next number - up to 20 through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "आगे और पीछे गिनकर अगली संख्या खोजें - २० तक की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_d_6",
      "title": "D.6: Tally marks - up to 20",
      "subtitle": "टैली मार्क्स (Tally marks) - २० तक • 10 प्रश्न गहन अभ्यास",
      "icon": "🪓",
      "badge": "UKG Maths • Numbers and counting up to 20 (D.6)",
      "accentColor": "#0284C7",
      "boxColor": "#E0F2FE",
      "ncertTopic": "Counting & Numbers • Numbers and counting up to 20",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "D.6: Tally marks - up to 20",
      "pedagogicalOutcome": {
        "english": "Master tally marks - up to 20 through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "टैली मार्क्स (Tally marks) - २० तक की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_d_7",
      "title": "D.7: Number lines - up to 20",
      "subtitle": "संख्या रेखा - २० तक • 10 प्रश्न गहन अभ्यास",
      "icon": "📏",
      "badge": "UKG Maths • Numbers and counting up to 20 (D.7)",
      "accentColor": "#0284C7",
      "boxColor": "#E0F2FE",
      "ncertTopic": "Counting & Numbers • Numbers and counting up to 20",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "D.7: Number lines - up to 20",
      "pedagogicalOutcome": {
        "english": "Master number lines - up to 20 through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "संख्या रेखा - २० तक की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_d_8",
      "title": "D.8: Before, after and between - up to 20",
      "subtitle": "पहले, बाद और बीच में - २० तक • 10 प्रश्न गहन अभ्यास",
      "icon": "↔️",
      "badge": "UKG Maths • Numbers and counting up to 20 (D.8)",
      "accentColor": "#0284C7",
      "boxColor": "#E0F2FE",
      "ncertTopic": "Counting & Numbers • Numbers and counting up to 20",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "D.8: Before, after and between - up to 20",
      "pedagogicalOutcome": {
        "english": "Master before, after and between - up to 20 through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "पहले, बाद और बीच में - २० तक की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_d_9",
      "title": "D.9: Count forwards and backwards - up to 20",
      "subtitle": "आगे और पीछे की गिनती - २० तक • 10 प्रश्न गहन अभ्यास",
      "icon": "🔄",
      "badge": "UKG Maths • Numbers and counting up to 20 (D.9)",
      "accentColor": "#0284C7",
      "boxColor": "#E0F2FE",
      "ncertTopic": "Counting & Numbers • Numbers and counting up to 20",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "D.9: Count forwards and backwards - up to 20",
      "pedagogicalOutcome": {
        "english": "Master count forwards and backwards - up to 20 through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "आगे और पीछे की गिनती - २० तक की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_d_10",
      "title": "D.10: Names of numbers - up to 20",
      "subtitle": "संख्याओं के नाम (Eleven to Twenty) - २० तक • 10 प्रश्न गहन अभ्यास",
      "icon": "📝",
      "badge": "UKG Maths • Numbers and counting up to 20 (D.10)",
      "accentColor": "#0284C7",
      "boxColor": "#E0F2FE",
      "ncertTopic": "Counting & Numbers • Numbers and counting up to 20",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "D.10: Names of numbers - up to 20",
      "pedagogicalOutcome": {
        "english": "Master names of numbers - up to 20 through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "संख्याओं के नाम (Eleven to Twenty) - २० तक की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_d_11",
      "title": "D.11: Complete a sequence - up to 20",
      "subtitle": "संख्या क्रम पूरा करें - २० तक • 10 प्रश्न गहन अभ्यास",
      "icon": "🧩",
      "badge": "UKG Maths • Numbers and counting up to 20 (D.11)",
      "accentColor": "#0284C7",
      "boxColor": "#E0F2FE",
      "ncertTopic": "Counting & Numbers • Numbers and counting up to 20",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "D.11: Complete a sequence - up to 20",
      "pedagogicalOutcome": {
        "english": "Master complete a sequence - up to 20 through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "संख्या क्रम पूरा करें - २० तक की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_d_12",
      "title": "D.12: Count tens and ones - up to 20",
      "subtitle": "दहाई और इकाई (Tens and Ones) - २० तक • 10 प्रश्न गहन अभ्यास",
      "icon": "📦",
      "badge": "UKG Maths • Numbers and counting up to 20 (D.12)",
      "accentColor": "#0284C7",
      "boxColor": "#E0F2FE",
      "ncertTopic": "Counting & Numbers • Numbers and counting up to 20",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "D.12: Count tens and ones - up to 20",
      "pedagogicalOutcome": {
        "english": "Master count tens and ones - up to 20 through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "दहाई और इकाई (Tens and Ones) - २० तक की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_d_13",
      "title": "D.13: Learn to skip-count by twos",
      "subtitle": "दो-दो करके गिनना (Skip-count by 2s) सीखें • 10 प्रश्न गहन अभ्यास",
      "icon": "🦘",
      "badge": "UKG Maths • Numbers and counting up to 20 (D.13)",
      "accentColor": "#0284C7",
      "boxColor": "#E0F2FE",
      "ncertTopic": "Counting & Numbers • Numbers and counting up to 20",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "D.13: Learn to skip-count by twos",
      "pedagogicalOutcome": {
        "english": "Master learn to skip-count by twos through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "दो-दो करके गिनना (Skip-count by 2s) सीखें की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_d_14",
      "title": "D.14: Skip-count by twos",
      "subtitle": "दो-दो करके गिनें (Skip-count by 2s) • 10 प्रश्न गहन अभ्यास",
      "icon": "⚡",
      "badge": "UKG Maths • Numbers and counting up to 20 (D.14)",
      "accentColor": "#0284C7",
      "boxColor": "#E0F2FE",
      "ncertTopic": "Counting & Numbers • Numbers and counting up to 20",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "D.14: Skip-count by twos",
      "pedagogicalOutcome": {
        "english": "Master skip-count by twos through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "दो-दो करके गिनें (Skip-count by 2s) की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_d_15",
      "title": "D.15: Skip-count by twos on ten frames",
      "subtitle": "टेन फ्रेम पर दो-दो करके गिनें • 10 प्रश्न गहन अभ्यास",
      "icon": "🔲",
      "badge": "UKG Maths • Numbers and counting up to 20 (D.15)",
      "accentColor": "#0284C7",
      "boxColor": "#E0F2FE",
      "ncertTopic": "Counting & Numbers • Numbers and counting up to 20",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "D.15: Skip-count by twos on ten frames",
      "pedagogicalOutcome": {
        "english": "Master skip-count by twos on ten frames through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "टेन फ्रेम पर दो-दो करके गिनें की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_e_1",
      "title": "E.1: Are there enough?",
      "subtitle": "क्या पर्याप्त हैं? (Are there enough?) • 10 प्रश्न गहन अभ्यास",
      "icon": "🍎",
      "badge": "UKG Maths • Comparing (E.1)",
      "accentColor": "#D97706",
      "boxColor": "#FEF3C7",
      "ncertTopic": "Comparing & Positions • Comparing",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "E.1: Are there enough?",
      "pedagogicalOutcome": {
        "english": "Master are there enough? through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "क्या पर्याप्त हैं? (Are there enough?) की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_e_2",
      "title": "E.2: Fewer and more - compare by matching",
      "subtitle": "कम और ज्यादा - मिलान करके तुलना करें • 10 प्रश्न गहन अभ्यास",
      "icon": "⚖️",
      "badge": "UKG Maths • Comparing (E.2)",
      "accentColor": "#D97706",
      "boxColor": "#FEF3C7",
      "ncertTopic": "Comparing & Positions • Comparing",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "E.2: Fewer and more - compare by matching",
      "pedagogicalOutcome": {
        "english": "Master fewer and more - compare by matching through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "कम और ज्यादा - मिलान करके तुलना करें की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_e_3",
      "title": "E.3: Fewer and more - compare by counting",
      "subtitle": "कम और ज्यादा - गिनकर तुलना करें • 10 प्रश्न गहन अभ्यास",
      "icon": "🔢",
      "badge": "UKG Maths • Comparing (E.3)",
      "accentColor": "#D97706",
      "boxColor": "#FEF3C7",
      "ncertTopic": "Comparing & Positions • Comparing",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "E.3: Fewer and more - compare by counting",
      "pedagogicalOutcome": {
        "english": "Master fewer and more - compare by counting through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "कम और ज्यादा - गिनकर तुलना करें की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_e_4",
      "title": "E.4: Fewer and more - compare in a mixed group",
      "subtitle": "कम और ज्यादा - मिश्रित समूह में तुलना करें • 10 प्रश्न गहन अभ्यास",
      "icon": "👥",
      "badge": "UKG Maths • Comparing (E.4)",
      "accentColor": "#D97706",
      "boxColor": "#FEF3C7",
      "ncertTopic": "Comparing & Positions • Comparing",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "E.4: Fewer and more - compare in a mixed group",
      "pedagogicalOutcome": {
        "english": "Master fewer and more - compare in a mixed group through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "कम और ज्यादा - मिश्रित समूह में तुलना करें की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_e_5",
      "title": "E.5: Fewer, more and same",
      "subtitle": "कम, ज्यादा और बराबर • 10 प्रश्न गहन अभ्यास",
      "icon": "🟰",
      "badge": "UKG Maths • Comparing (E.5)",
      "accentColor": "#D97706",
      "boxColor": "#FEF3C7",
      "ncertTopic": "Comparing & Positions • Comparing",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "E.5: Fewer, more and same",
      "pedagogicalOutcome": {
        "english": "Master fewer, more and same through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "कम, ज्यादा और बराबर की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_e_6",
      "title": "E.6: Compare two numbers - up to 10",
      "subtitle": "दो संख्याओं की तुलना करें - १० तक • 10 प्रश्न गहन अभ्यास",
      "icon": "📊",
      "badge": "UKG Maths • Comparing (E.6)",
      "accentColor": "#D97706",
      "boxColor": "#FEF3C7",
      "ncertTopic": "Comparing & Positions • Comparing",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "E.6: Compare two numbers - up to 10",
      "pedagogicalOutcome": {
        "english": "Master compare two numbers - up to 10 through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "दो संख्याओं की तुलना करें - १० तक की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_e_7",
      "title": "E.7: Compare three numbers - up to 10",
      "subtitle": "तीन संख्याओं की तुलना करें - १० तक • 10 प्रश्न गहन अभ्यास",
      "icon": "🏆",
      "badge": "UKG Maths • Comparing (E.7)",
      "accentColor": "#D97706",
      "boxColor": "#FEF3C7",
      "ncertTopic": "Comparing & Positions • Comparing",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "E.7: Compare three numbers - up to 10",
      "pedagogicalOutcome": {
        "english": "Master compare three numbers - up to 10 through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "तीन संख्याओं की तुलना करें - १० तक की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_f_1",
      "title": "F.1: Colour patterns",
      "subtitle": "रंग पैटर्न (Color patterns) • 10 प्रश्न गहन अभ्यास",
      "icon": "🎨",
      "badge": "UKG Maths • Patterns (F.1)",
      "accentColor": "#9333EA",
      "boxColor": "#FAF5FF",
      "ncertTopic": "Classify & Patterns • Patterns",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "F.1: Colour patterns",
      "pedagogicalOutcome": {
        "english": "Master colour patterns through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "रंग पैटर्न (Color patterns) की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_f_2",
      "title": "F.2: Size patterns",
      "subtitle": "साइज पैटर्न (Size patterns) • 10 प्रश्न गहन अभ्यास",
      "icon": "📏",
      "badge": "UKG Maths • Patterns (F.2)",
      "accentColor": "#9333EA",
      "boxColor": "#FAF5FF",
      "ncertTopic": "Classify & Patterns • Patterns",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "F.2: Size patterns",
      "pedagogicalOutcome": {
        "english": "Master size patterns through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "साइज पैटर्न (Size patterns) की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_f_3",
      "title": "F.3: Shape patterns",
      "subtitle": "आकार पैटर्न (Shape patterns) • 10 प्रश्न गहन अभ्यास",
      "icon": "🔷",
      "badge": "UKG Maths • Patterns (F.3)",
      "accentColor": "#9333EA",
      "boxColor": "#FAF5FF",
      "ncertTopic": "Classify & Patterns • Patterns",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "F.3: Shape patterns",
      "pedagogicalOutcome": {
        "english": "Master shape patterns through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "आकार पैटर्न (Shape patterns) की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_f_4",
      "title": "F.4: Find the next shape in a pattern",
      "subtitle": "पैटर्न में अगला आकार खोजें • 10 प्रश्न गहन अभ्यास",
      "icon": "🔍",
      "badge": "UKG Maths • Patterns (F.4)",
      "accentColor": "#9333EA",
      "boxColor": "#FAF5FF",
      "ncertTopic": "Classify & Patterns • Patterns",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "F.4: Find the next shape in a pattern",
      "pedagogicalOutcome": {
        "english": "Master find the next shape in a pattern through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "पैटर्न में अगला आकार खोजें की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_f_5",
      "title": "F.5: Complete a pattern",
      "subtitle": "पैटर्न पूरा करें • 10 प्रश्न गहन अभ्यास",
      "icon": "🧩",
      "badge": "UKG Maths • Patterns (F.5)",
      "accentColor": "#9333EA",
      "boxColor": "#FAF5FF",
      "ncertTopic": "Classify & Patterns • Patterns",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "F.5: Complete a pattern",
      "pedagogicalOutcome": {
        "english": "Master complete a pattern through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "पैटर्न पूरा करें की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_f_6",
      "title": "F.6: Growing patterns",
      "subtitle": "बढ़ते पैटर्न (Growing patterns) • 10 प्रश्न गहन अभ्यास",
      "icon": "📈",
      "badge": "UKG Maths • Patterns (F.6)",
      "accentColor": "#9333EA",
      "boxColor": "#FAF5FF",
      "ncertTopic": "Classify & Patterns • Patterns",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "F.6: Growing patterns",
      "pedagogicalOutcome": {
        "english": "Master growing patterns through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "बढ़ते पैटर्न (Growing patterns) की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_f_7",
      "title": "F.7: Find the next shape in a growing pattern",
      "subtitle": "बढ़ते पैटर्न में अगला आकार खोजें • 10 प्रश्न गहन अभ्यास",
      "icon": "🌱",
      "badge": "UKG Maths • Patterns (F.7)",
      "accentColor": "#9333EA",
      "boxColor": "#FAF5FF",
      "ncertTopic": "Classify & Patterns • Patterns",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "F.7: Find the next shape in a growing pattern",
      "pedagogicalOutcome": {
        "english": "Master find the next shape in a growing pattern through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "बढ़ते पैटर्न में अगला आकार खोजें की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_f_8",
      "title": "F.8: Find the next row in a growing pattern",
      "subtitle": "बढ़ते पैटर्न में अगली पंक्ति खोजें • 10 प्रश्न गहन अभ्यास",
      "icon": "🧱",
      "badge": "UKG Maths • Patterns (F.8)",
      "accentColor": "#9333EA",
      "boxColor": "#FAF5FF",
      "ncertTopic": "Classify & Patterns • Patterns",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "F.8: Find the next row in a growing pattern",
      "pedagogicalOutcome": {
        "english": "Master find the next row in a growing pattern through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "बढ़ते पैटर्न में अगली पंक्ति खोजें की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_g_1",
      "title": "G.1: Inside and outside",
      "subtitle": "अंदर और बाहर (Inside and outside) • 10 प्रश्न गहन अभ्यास",
      "icon": "📦",
      "badge": "UKG Maths • Positions (G.1)",
      "accentColor": "#EA580C",
      "boxColor": "#FFF7ED",
      "ncertTopic": "Comparing & Positions • Positions",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "G.1: Inside and outside",
      "pedagogicalOutcome": {
        "english": "Master inside and outside through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "अंदर और बाहर (Inside and outside) की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_g_2",
      "title": "G.2: Above and below",
      "subtitle": "ऊपर और नीचे (Above and below) • 10 प्रश्न गहन अभ्यास",
      "icon": "☁️",
      "badge": "UKG Maths • Positions (G.2)",
      "accentColor": "#EA580C",
      "boxColor": "#FFF7ED",
      "ncertTopic": "Comparing & Positions • Positions",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "G.2: Above and below",
      "pedagogicalOutcome": {
        "english": "Master above and below through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "ऊपर और नीचे (Above and below) की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_g_3",
      "title": "G.3: Above and below - find solid figures",
      "subtitle": "ऊपर और नीचे - ठोस आकृतियां खोजें • 10 प्रश्न गहन अभ्यास",
      "icon": "🧊",
      "badge": "UKG Maths • Positions (G.3)",
      "accentColor": "#EA580C",
      "boxColor": "#FFF7ED",
      "ncertTopic": "Comparing & Positions • Positions",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "G.3: Above and below - find solid figures",
      "pedagogicalOutcome": {
        "english": "Master above and below - find solid figures through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "ऊपर और नीचे - ठोस आकृतियां खोजें की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_g_4",
      "title": "G.4: Beside and next to",
      "subtitle": "पास और बगल में (Beside and next to) • 10 प्रश्न गहन अभ्यास",
      "icon": "👫",
      "badge": "UKG Maths • Positions (G.4)",
      "accentColor": "#EA580C",
      "boxColor": "#FFF7ED",
      "ncertTopic": "Comparing & Positions • Positions",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "G.4: Beside and next to",
      "pedagogicalOutcome": {
        "english": "Master beside and next to through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "पास और बगल में (Beside and next to) की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_g_5",
      "title": "G.5: Beside and next to - find solid figures",
      "subtitle": "पास और बगल में - ठोस आकृतियां खोजें • 10 प्रश्न गहन अभ्यास",
      "icon": "⚽",
      "badge": "UKG Maths • Positions (G.5)",
      "accentColor": "#EA580C",
      "boxColor": "#FFF7ED",
      "ncertTopic": "Comparing & Positions • Positions",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "G.5: Beside and next to - find solid figures",
      "pedagogicalOutcome": {
        "english": "Master beside and next to - find solid figures through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "पास और बगल में - ठोस आकृतियां खोजें की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_g_6",
      "title": "G.6: Left, middle and right",
      "subtitle": "बाएं, बीच और दाएं (Left, middle and right) • 10 प्रश्न गहन अभ्यास",
      "icon": "↔️",
      "badge": "UKG Maths • Positions (G.6)",
      "accentColor": "#EA580C",
      "boxColor": "#FFF7ED",
      "ncertTopic": "Comparing & Positions • Positions",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "G.6: Left, middle and right",
      "pedagogicalOutcome": {
        "english": "Master left, middle and right through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "बाएं, बीच और दाएं (Left, middle and right) की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_g_7",
      "title": "G.7: Top, middle and bottom",
      "subtitle": "शीर्ष, मध्य और तल (Top, middle and bottom) • 10 प्रश्न गहन अभ्यास",
      "icon": "🪜",
      "badge": "UKG Maths • Positions (G.7)",
      "accentColor": "#EA580C",
      "boxColor": "#FFF7ED",
      "ncertTopic": "Comparing & Positions • Positions",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "G.7: Top, middle and bottom",
      "pedagogicalOutcome": {
        "english": "Master top, middle and bottom through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "शीर्ष, मध्य और तल (Top, middle and bottom) की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_g_8",
      "title": "G.8: Location in a grid",
      "subtitle": "ग्रिड में स्थान (Location in a grid) • 10 प्रश्न गहन अभ्यास",
      "icon": "🗺️",
      "badge": "UKG Maths • Positions (G.8)",
      "accentColor": "#EA580C",
      "boxColor": "#FFF7ED",
      "ncertTopic": "Comparing & Positions • Positions",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "G.8: Location in a grid",
      "pedagogicalOutcome": {
        "english": "Master location in a grid through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "ग्रिड में स्थान (Location in a grid) की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_h_1",
      "title": "H.1: Add with pictures - sums up to 5",
      "subtitle": "चित्रों से जोड़ें - योग ५ तक • 10 प्रश्न गहन अभ्यास",
      "icon": "🍎",
      "badge": "UKG Maths • Addition up to 5 (H.1)",
      "accentColor": "#10B981",
      "boxColor": "#ECFDF5",
      "ncertTopic": "Addition & Subtraction • Addition up to 5",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "H.1: Add with pictures - sums up to 5",
      "pedagogicalOutcome": {
        "english": "Master add with pictures - sums up to 5 through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "चित्रों से जोड़ें - योग ५ तक की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_h_2",
      "title": "H.2: Addition sentences - sums up to 5",
      "subtitle": "जोड़ के वाक्य - योग ५ तक • 10 प्रश्न गहन अभ्यास",
      "icon": "➕",
      "badge": "UKG Maths • Addition up to 5 (H.2)",
      "accentColor": "#10B981",
      "boxColor": "#ECFDF5",
      "ncertTopic": "Addition & Subtraction • Addition up to 5",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "H.2: Addition sentences - sums up to 5",
      "pedagogicalOutcome": {
        "english": "Master addition sentences - sums up to 5 through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "जोड़ के वाक्य - योग ५ तक की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_h_3",
      "title": "H.3: Make a number using addition - sums up to 5",
      "subtitle": "जोड़ से संख्या बनाएं - योग ५ तक • 10 प्रश्न गहन अभ्यास",
      "icon": "🎯",
      "badge": "UKG Maths • Addition up to 5 (H.3)",
      "accentColor": "#10B981",
      "boxColor": "#ECFDF5",
      "ncertTopic": "Addition & Subtraction • Addition up to 5",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "H.3: Make a number using addition - sums up to 5",
      "pedagogicalOutcome": {
        "english": "Master make a number using addition - sums up to 5 through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "जोड़ से संख्या बनाएं - योग ५ तक की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_h_4",
      "title": "H.4: Add two numbers - sums up to 5",
      "subtitle": "दो संख्याओं को जोड़ें - योग ५ तक • 10 प्रश्न गहन अभ्यास",
      "icon": "🔢",
      "badge": "UKG Maths • Addition up to 5 (H.4)",
      "accentColor": "#10B981",
      "boxColor": "#ECFDF5",
      "ncertTopic": "Addition & Subtraction • Addition up to 5",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "H.4: Add two numbers - sums up to 5",
      "pedagogicalOutcome": {
        "english": "Master add two numbers - sums up to 5 through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "दो संख्याओं को जोड़ें - योग ५ तक की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_h_5",
      "title": "H.5: Complete the addition sentence - sums up to 5",
      "subtitle": "जोड़ का वाक्य पूरा करें - योग ५ तक • 10 प्रश्न गहन अभ्यास",
      "icon": "✍️",
      "badge": "UKG Maths • Addition up to 5 (H.5)",
      "accentColor": "#10B981",
      "boxColor": "#ECFDF5",
      "ncertTopic": "Addition & Subtraction • Addition up to 5",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "H.5: Complete the addition sentence - sums up to 5",
      "pedagogicalOutcome": {
        "english": "Master complete the addition sentence - sums up to 5 through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "जोड़ का वाक्य पूरा करें - योग ५ तक की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_h_6",
      "title": "H.6: Addition word problems - sums up to 5",
      "subtitle": "जोड़ की इबारती समस्याएं - योग ५ तक • 10 प्रश्न गहन अभ्यास",
      "icon": "📖",
      "badge": "UKG Maths • Addition up to 5 (H.6)",
      "accentColor": "#10B981",
      "boxColor": "#ECFDF5",
      "ncertTopic": "Addition & Subtraction • Addition up to 5",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "H.6: Addition word problems - sums up to 5",
      "pedagogicalOutcome": {
        "english": "Master addition word problems - sums up to 5 through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "जोड़ की इबारती समस्याएं - योग ५ तक की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_i_1",
      "title": "I.1: Add with pictures - sums up to 10",
      "subtitle": "चित्रों से जोड़ें - योग १० तक • 10 प्रश्न गहन अभ्यास",
      "icon": "🍎",
      "badge": "UKG Maths • Addition up to 10 (I.1)",
      "accentColor": "#059669",
      "boxColor": "#DCFCE7",
      "ncertTopic": "Addition & Subtraction • Addition up to 10",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "I.1: Add with pictures - sums up to 10",
      "pedagogicalOutcome": {
        "english": "Master add with pictures - sums up to 10 through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "चित्रों से जोड़ें - योग १० तक की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_i_2",
      "title": "I.2: Addition sentences - sums up to 10",
      "subtitle": "जोड़ के वाक्य - योग १० तक • 10 प्रश्न गहन अभ्यास",
      "icon": "➕",
      "badge": "UKG Maths • Addition up to 10 (I.2)",
      "accentColor": "#059669",
      "boxColor": "#DCFCE7",
      "ncertTopic": "Addition & Subtraction • Addition up to 10",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "I.2: Addition sentences - sums up to 10",
      "pedagogicalOutcome": {
        "english": "Master addition sentences - sums up to 10 through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "जोड़ के वाक्य - योग १० तक की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_i_3",
      "title": "I.3: Make a number using addition - sums up to 10",
      "subtitle": "जोड़ से संख्या बनाएं - योग १० तक • 10 प्रश्न गहन अभ्यास",
      "icon": "🎯",
      "badge": "UKG Maths • Addition up to 10 (I.3)",
      "accentColor": "#059669",
      "boxColor": "#DCFCE7",
      "ncertTopic": "Addition & Subtraction • Addition up to 10",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "I.3: Make a number using addition - sums up to 10",
      "pedagogicalOutcome": {
        "english": "Master make a number using addition - sums up to 10 through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "जोड़ से संख्या बनाएं - योग १० तक की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_i_4",
      "title": "I.4: Add two numbers - sums up to 10",
      "subtitle": "दो संख्याओं को जोड़ें - योग १० तक • 10 प्रश्न गहन अभ्यास",
      "icon": "🔢",
      "badge": "UKG Maths • Addition up to 10 (I.4)",
      "accentColor": "#059669",
      "boxColor": "#DCFCE7",
      "ncertTopic": "Addition & Subtraction • Addition up to 10",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "I.4: Add two numbers - sums up to 10",
      "pedagogicalOutcome": {
        "english": "Master add two numbers - sums up to 10 through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "दो संख्याओं को जोड़ें - योग १० तक की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_i_5",
      "title": "I.5: Complete the addition sentence - sums up to 10",
      "subtitle": "जोड़ का वाक्य पूरा करें - योग १० तक • 10 प्रश्न गहन अभ्यास",
      "icon": "✍️",
      "badge": "UKG Maths • Addition up to 10 (I.5)",
      "accentColor": "#059669",
      "boxColor": "#DCFCE7",
      "ncertTopic": "Addition & Subtraction • Addition up to 10",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "I.5: Complete the addition sentence - sums up to 10",
      "pedagogicalOutcome": {
        "english": "Master complete the addition sentence - sums up to 10 through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "जोड़ का वाक्य पूरा करें - योग १० तक की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_i_6",
      "title": "I.6: Complete the addition sentence - make 10",
      "subtitle": "१० बनाने के लिए जोड़ का वाक्य पूरा करें • 10 प्रश्न गहन अभ्यास",
      "icon": "🔟",
      "badge": "UKG Maths • Addition up to 10 (I.6)",
      "accentColor": "#059669",
      "boxColor": "#DCFCE7",
      "ncertTopic": "Addition & Subtraction • Addition up to 10",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "I.6: Complete the addition sentence - make 10",
      "pedagogicalOutcome": {
        "english": "Master complete the addition sentence - make 10 through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "१० बनाने के लिए जोड़ का वाक्य पूरा करें की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_i_7",
      "title": "I.7: Write addition sentences",
      "subtitle": "जोड़ के वाक्य लिखें • 10 प्रश्न गहन अभ्यास",
      "icon": "📝",
      "badge": "UKG Maths • Addition up to 10 (I.7)",
      "accentColor": "#059669",
      "boxColor": "#DCFCE7",
      "ncertTopic": "Addition & Subtraction • Addition up to 10",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "I.7: Write addition sentences",
      "pedagogicalOutcome": {
        "english": "Master write addition sentences through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "जोड़ के वाक्य लिखें की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_i_8",
      "title": "I.8: Addition word problems - sums up to 10",
      "subtitle": "जोड़ की इबारती समस्याएं - योग १० तक • 10 प्रश्न गहन अभ्यास",
      "icon": "📖",
      "badge": "UKG Maths • Addition up to 10 (I.8)",
      "accentColor": "#059669",
      "boxColor": "#DCFCE7",
      "ncertTopic": "Addition & Subtraction • Addition up to 10",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "I.8: Addition word problems - sums up to 10",
      "pedagogicalOutcome": {
        "english": "Master addition word problems - sums up to 10 through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "जोड़ की इबारती समस्याएं - योग १० तक की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_j_1",
      "title": "J.1: Subtract with pictures - numbers up to 5",
      "subtitle": "चित्रों से घटाएं - संख्या ५ तक • 10 प्रश्न गहन अभ्यास",
      "icon": "🍎",
      "badge": "UKG Maths • Subtraction up to 5 (J.1)",
      "accentColor": "#EF4444",
      "boxColor": "#FEF2F2",
      "ncertTopic": "Addition & Subtraction • Subtraction up to 5",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "J.1: Subtract with pictures - numbers up to 5",
      "pedagogicalOutcome": {
        "english": "Master subtract with pictures - numbers up to 5 through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "चित्रों से घटाएं - संख्या ५ तक की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_j_2",
      "title": "J.2: Subtraction sentences - numbers up to 5",
      "subtitle": "घटाव के वाक्य - संख्या ५ तक • 10 प्रश्न गहन अभ्यास",
      "icon": "➖",
      "badge": "UKG Maths • Subtraction up to 5 (J.2)",
      "accentColor": "#EF4444",
      "boxColor": "#FEF2F2",
      "ncertTopic": "Addition & Subtraction • Subtraction up to 5",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "J.2: Subtraction sentences - numbers up to 5",
      "pedagogicalOutcome": {
        "english": "Master subtraction sentences - numbers up to 5 through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "घटाव के वाक्य - संख्या ५ तक की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_j_3",
      "title": "J.3: Subtract - numbers up to 5",
      "subtitle": "घटाएं - संख्या ५ तक • 10 प्रश्न गहन अभ्यास",
      "icon": "🔢",
      "badge": "UKG Maths • Subtraction up to 5 (J.3)",
      "accentColor": "#EF4444",
      "boxColor": "#FEF2F2",
      "ncertTopic": "Addition & Subtraction • Subtraction up to 5",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "J.3: Subtract - numbers up to 5",
      "pedagogicalOutcome": {
        "english": "Master subtract - numbers up to 5 through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "घटाएं - संख्या ५ तक की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_j_4",
      "title": "J.4: Complete the subtraction sentence - numbers up to 5",
      "subtitle": "घटाव का वाक्य पूरा करें - संख्या ५ तक • 10 प्रश्न गहन अभ्यास",
      "icon": "✍️",
      "badge": "UKG Maths • Subtraction up to 5 (J.4)",
      "accentColor": "#EF4444",
      "boxColor": "#FEF2F2",
      "ncertTopic": "Addition & Subtraction • Subtraction up to 5",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "J.4: Complete the subtraction sentence - numbers up to 5",
      "pedagogicalOutcome": {
        "english": "Master complete the subtraction sentence - numbers up to 5 through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "घटाव का वाक्य पूरा करें - संख्या ५ तक की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_j_5",
      "title": "J.5: Subtraction word problems - numbers up to 5",
      "subtitle": "घटाव की इबारती समस्याएं - संख्या ५ तक • 10 प्रश्न गहन अभ्यास",
      "icon": "📖",
      "badge": "UKG Maths • Subtraction up to 5 (J.5)",
      "accentColor": "#EF4444",
      "boxColor": "#FEF2F2",
      "ncertTopic": "Addition & Subtraction • Subtraction up to 5",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "J.5: Subtraction word problems - numbers up to 5",
      "pedagogicalOutcome": {
        "english": "Master subtraction word problems - numbers up to 5 through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "घटाव की इबारती समस्याएं - संख्या ५ तक की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_k_1",
      "title": "K.1: Subtract with pictures - numbers up to 10",
      "subtitle": "चित्रों से घटाएं - संख्या १० तक • 10 प्रश्न गहन अभ्यास",
      "icon": "🍎",
      "badge": "UKG Maths • Subtraction up to 10 (K.1)",
      "accentColor": "#DC2626",
      "boxColor": "#FEE2E2",
      "ncertTopic": "Addition & Subtraction • Subtraction up to 10",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "K.1: Subtract with pictures - numbers up to 10",
      "pedagogicalOutcome": {
        "english": "Master subtract with pictures - numbers up to 10 through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "चित्रों से घटाएं - संख्या १० तक की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_k_2",
      "title": "K.2: Subtraction sentences - numbers up to 10",
      "subtitle": "घटाव के वाक्य - संख्या १० तक • 10 प्रश्न गहन अभ्यास",
      "icon": "➖",
      "badge": "UKG Maths • Subtraction up to 10 (K.2)",
      "accentColor": "#DC2626",
      "boxColor": "#FEE2E2",
      "ncertTopic": "Addition & Subtraction • Subtraction up to 10",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "K.2: Subtraction sentences - numbers up to 10",
      "pedagogicalOutcome": {
        "english": "Master subtraction sentences - numbers up to 10 through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "घटाव के वाक्य - संख्या १० तक की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_k_3",
      "title": "K.3: Make a number using subtraction - numbers up to 10",
      "subtitle": "घटाव से संख्या बनाएं - संख्या १० तक • 10 प्रश्न गहन अभ्यास",
      "icon": "🎯",
      "badge": "UKG Maths • Subtraction up to 10 (K.3)",
      "accentColor": "#DC2626",
      "boxColor": "#FEE2E2",
      "ncertTopic": "Addition & Subtraction • Subtraction up to 10",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "K.3: Make a number using subtraction - numbers up to 10",
      "pedagogicalOutcome": {
        "english": "Master make a number using subtraction - numbers up to 10 through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "घटाव से संख्या बनाएं - संख्या १० तक की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_k_4",
      "title": "K.4: Subtract - numbers up to 10",
      "subtitle": "घटाएं - संख्या १० तक • 10 प्रश्न गहन अभ्यास",
      "icon": "🔢",
      "badge": "UKG Maths • Subtraction up to 10 (K.4)",
      "accentColor": "#DC2626",
      "boxColor": "#FEE2E2",
      "ncertTopic": "Addition & Subtraction • Subtraction up to 10",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "K.4: Subtract - numbers up to 10",
      "pedagogicalOutcome": {
        "english": "Master subtract - numbers up to 10 through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "घटाएं - संख्या १० तक की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_k_5",
      "title": "K.5: Complete the subtraction sentence - numbers up to 10",
      "subtitle": "घटाव का वाक्य पूरा करें - संख्या १० तक • 10 प्रश्न गहन अभ्यास",
      "icon": "✍️",
      "badge": "UKG Maths • Subtraction up to 10 (K.5)",
      "accentColor": "#DC2626",
      "boxColor": "#FEE2E2",
      "ncertTopic": "Addition & Subtraction • Subtraction up to 10",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "K.5: Complete the subtraction sentence - numbers up to 10",
      "pedagogicalOutcome": {
        "english": "Master complete the subtraction sentence - numbers up to 10 through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "घटाव का वाक्य पूरा करें - संख्या १० तक की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_k_6",
      "title": "K.6: Write subtraction sentences",
      "subtitle": "घटाव के वाक्य लिखें • 10 प्रश्न गहन अभ्यास",
      "icon": "📝",
      "badge": "UKG Maths • Subtraction up to 10 (K.6)",
      "accentColor": "#DC2626",
      "boxColor": "#FEE2E2",
      "ncertTopic": "Addition & Subtraction • Subtraction up to 10",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "K.6: Write subtraction sentences",
      "pedagogicalOutcome": {
        "english": "Master write subtraction sentences through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "घटाव के वाक्य लिखें की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_k_7",
      "title": "K.7: Subtraction word problems - numbers up to 10",
      "subtitle": "घटाव की इबारती समस्याएं - संख्या १० तक • 10 प्रश्न गहन अभ्यास",
      "icon": "📖",
      "badge": "UKG Maths • Subtraction up to 10 (K.7)",
      "accentColor": "#DC2626",
      "boxColor": "#FEE2E2",
      "ncertTopic": "Addition & Subtraction • Subtraction up to 10",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "K.7: Subtraction word problems - numbers up to 10",
      "pedagogicalOutcome": {
        "english": "Master subtraction word problems - numbers up to 10 through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "घटाव की इबारती समस्याएं - संख्या १० तक की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_l_1",
      "title": "L.1: Same",
      "subtitle": "एक जैसे (Same) • 10 प्रश्न गहन अभ्यास",
      "icon": "👯",
      "badge": "UKG Maths • Sorting, ordering and classifying (L.1)",
      "accentColor": "#8B5CF6",
      "boxColor": "#F5F3FF",
      "ncertTopic": "Classify & Patterns • Sorting, ordering and classifying",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "L.1: Same",
      "pedagogicalOutcome": {
        "english": "Master same through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "एक जैसे (Same) की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_l_2",
      "title": "L.2: Different",
      "subtitle": "अलग (Different) • 10 प्रश्न गहन अभ्यास",
      "icon": "🦄",
      "badge": "UKG Maths • Sorting, ordering and classifying (L.2)",
      "accentColor": "#8B5CF6",
      "boxColor": "#F5F3FF",
      "ncertTopic": "Classify & Patterns • Sorting, ordering and classifying",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "L.2: Different",
      "pedagogicalOutcome": {
        "english": "Master different through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "अलग (Different) की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_l_3",
      "title": "L.3: Same and different",
      "subtitle": "एक जैसे और अलग • 10 प्रश्न गहन अभ्यास",
      "icon": "🎭",
      "badge": "UKG Maths • Sorting, ordering and classifying (L.3)",
      "accentColor": "#8B5CF6",
      "boxColor": "#F5F3FF",
      "ncertTopic": "Classify & Patterns • Sorting, ordering and classifying",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "L.3: Same and different",
      "pedagogicalOutcome": {
        "english": "Master same and different through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "एक जैसे और अलग की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_l_4",
      "title": "L.4: Classify shapes by colour",
      "subtitle": "रंग के आधार पर आकृतियों का वर्गीकरण • 10 प्रश्न गहन अभ्यास",
      "icon": "🎨",
      "badge": "UKG Maths • Sorting, ordering and classifying (L.4)",
      "accentColor": "#8B5CF6",
      "boxColor": "#F5F3FF",
      "ncertTopic": "Classify & Patterns • Sorting, ordering and classifying",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "L.4: Classify shapes by colour",
      "pedagogicalOutcome": {
        "english": "Master classify shapes by colour through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "रंग के आधार पर आकृतियों का वर्गीकरण की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_l_5",
      "title": "L.5: Classify and sort by colour",
      "subtitle": "रंग के आधार पर छांटें • 10 प्रश्न गहन अभ्यास",
      "icon": "🌈",
      "badge": "UKG Maths • Sorting, ordering and classifying (L.5)",
      "accentColor": "#8B5CF6",
      "boxColor": "#F5F3FF",
      "ncertTopic": "Classify & Patterns • Sorting, ordering and classifying",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "L.5: Classify and sort by colour",
      "pedagogicalOutcome": {
        "english": "Master classify and sort by colour through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "रंग के आधार पर छांटें की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_l_6",
      "title": "L.6: Classify and sort by shape",
      "subtitle": "आकार के आधार पर छांटें • 10 प्रश्न गहन अभ्यास",
      "icon": "🔷",
      "badge": "UKG Maths • Sorting, ordering and classifying (L.6)",
      "accentColor": "#8B5CF6",
      "boxColor": "#F5F3FF",
      "ncertTopic": "Classify & Patterns • Sorting, ordering and classifying",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "L.6: Classify and sort by shape",
      "pedagogicalOutcome": {
        "english": "Master classify and sort by shape through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "आकार के आधार पर छांटें की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_l_7",
      "title": "L.7: Classify and sort",
      "subtitle": "वर्गीकरण और छांटना • 10 प्रश्न गहन अभ्यास",
      "icon": "🧺",
      "badge": "UKG Maths • Sorting, ordering and classifying (L.7)",
      "accentColor": "#8B5CF6",
      "boxColor": "#F5F3FF",
      "ncertTopic": "Classify & Patterns • Sorting, ordering and classifying",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "L.7: Classify and sort",
      "pedagogicalOutcome": {
        "english": "Master classify and sort through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "वर्गीकरण और छांटना की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_l_8",
      "title": "L.8: Sort shapes into a Venn diagram",
      "subtitle": "वेन आरेख (Venn diagram) में आकृतियां छांटें • 10 प्रश्न गहन अभ्यास",
      "icon": "⭕",
      "badge": "UKG Maths • Sorting, ordering and classifying (L.8)",
      "accentColor": "#8B5CF6",
      "boxColor": "#F5F3FF",
      "ncertTopic": "Classify & Patterns • Sorting, ordering and classifying",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "L.8: Sort shapes into a Venn diagram",
      "pedagogicalOutcome": {
        "english": "Master sort shapes into a venn diagram through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "वेन आरेख (Venn diagram) में आकृतियां छांटें की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_l_9",
      "title": "L.9: Count shapes in a Venn diagram",
      "subtitle": "वेन आरेख में आकृतियां गिनें • 10 प्रश्न गहन अभ्यास",
      "icon": "🔢",
      "badge": "UKG Maths • Sorting, ordering and classifying (L.9)",
      "accentColor": "#8B5CF6",
      "boxColor": "#F5F3FF",
      "ncertTopic": "Classify & Patterns • Sorting, ordering and classifying",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "L.9: Count shapes in a Venn diagram",
      "pedagogicalOutcome": {
        "english": "Master count shapes in a venn diagram through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "वेन आरेख में आकृतियां गिनें की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_l_10",
      "title": "L.10: Put numbers up to 10 in order",
      "subtitle": "संख्याओं को क्रम में लगाएं - १० तक • 10 प्रश्न गहन अभ्यास",
      "icon": "🪜",
      "badge": "UKG Maths • Sorting, ordering and classifying (L.10)",
      "accentColor": "#8B5CF6",
      "boxColor": "#F5F3FF",
      "ncertTopic": "Classify & Patterns • Sorting, ordering and classifying",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "L.10: Put numbers up to 10 in order",
      "pedagogicalOutcome": {
        "english": "Master put numbers up to 10 in order through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "संख्याओं को क्रम में लगाएं - १० तक की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_l_11",
      "title": "L.11: Put numbers up to 20 in order",
      "subtitle": "संख्याओं को क्रम में लगाएं - २० तक • 10 प्रश्न गहन अभ्यास",
      "icon": "📈",
      "badge": "UKG Maths • Sorting, ordering and classifying (L.11)",
      "accentColor": "#8B5CF6",
      "boxColor": "#F5F3FF",
      "ncertTopic": "Classify & Patterns • Sorting, ordering and classifying",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "L.11: Put numbers up to 20 in order",
      "pedagogicalOutcome": {
        "english": "Master put numbers up to 20 in order through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "संख्याओं को क्रम में लगाएं - २० तक की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_m_1",
      "title": "M.1: Which pictograph is correct?",
      "subtitle": "कौन सा पिक्टोग्राफ (Pictograph) सही है? • 10 प्रश्न गहन अभ्यास",
      "icon": "📊",
      "badge": "UKG Maths • Data and graphs (M.1)",
      "accentColor": "#06B6D4",
      "boxColor": "#ECFEFF",
      "ncertTopic": "Data & Measurement • Data and graphs",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "M.1: Which pictograph is correct?",
      "pedagogicalOutcome": {
        "english": "Master which pictograph is correct? through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "कौन सा पिक्टोग्राफ (Pictograph) सही है? की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_n_1",
      "title": "N.1: More or less likely",
      "subtitle": "ज्यादा या कम संभावित (More or less likely) • 10 प्रश्न गहन अभ्यास",
      "icon": "🎲",
      "badge": "UKG Maths • Probability (N.1)",
      "accentColor": "#F59E0B",
      "boxColor": "#FFFBEB",
      "ncertTopic": "Data & Measurement • Probability",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "N.1: More or less likely",
      "pedagogicalOutcome": {
        "english": "Master more or less likely through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "ज्यादा या कम संभावित (More or less likely) की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_o_1",
      "title": "O.1: Long and short",
      "subtitle": "लंबा और छोटा (Long and short) • 10 प्रश्न गहन अभ्यास",
      "icon": "📏",
      "badge": "UKG Maths • Measurement (O.1)",
      "accentColor": "#14B8A6",
      "boxColor": "#F0FDFA",
      "ncertTopic": "Data & Measurement • Measurement",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "O.1: Long and short",
      "pedagogicalOutcome": {
        "english": "Master long and short through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "लंबा और छोटा (Long and short) की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_o_2",
      "title": "O.2: Tall and short",
      "subtitle": "ऊंचा और छोटा (Tall and short) • 10 प्रश्न गहन अभ्यास",
      "icon": "🦒",
      "badge": "UKG Maths • Measurement (O.2)",
      "accentColor": "#14B8A6",
      "boxColor": "#F0FDFA",
      "ncertTopic": "Data & Measurement • Measurement",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "O.2: Tall and short",
      "pedagogicalOutcome": {
        "english": "Master tall and short through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "ऊंचा और छोटा (Tall and short) की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_o_3",
      "title": "O.3: Wide and narrow",
      "subtitle": "चौड़ा और संकरा (Wide and narrow) • 10 प्रश्न गहन अभ्यास",
      "icon": "🛣️",
      "badge": "UKG Maths • Measurement (O.3)",
      "accentColor": "#14B8A6",
      "boxColor": "#F0FDFA",
      "ncertTopic": "Data & Measurement • Measurement",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "O.3: Wide and narrow",
      "pedagogicalOutcome": {
        "english": "Master wide and narrow through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "चौड़ा और संकरा (Wide and narrow) की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_o_4",
      "title": "O.4: Light and heavy",
      "subtitle": "हल्का और भारी (Light and heavy) • 10 प्रश्न गहन अभ्यास",
      "icon": "⚖️",
      "badge": "UKG Maths • Measurement (O.4)",
      "accentColor": "#14B8A6",
      "boxColor": "#F0FDFA",
      "ncertTopic": "Data & Measurement • Measurement",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "O.4: Light and heavy",
      "pedagogicalOutcome": {
        "english": "Master light and heavy through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "हल्का और भारी (Light and heavy) की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_p_1",
      "title": "P.1: Coin values",
      "subtitle": "सिक्कों का मूल्य (Coin values) • 10 प्रश्न गहन अभ्यास",
      "icon": "🪙",
      "badge": "UKG Maths • Money (P.1)",
      "accentColor": "#EAB308",
      "boxColor": "#FEFCE8",
      "ncertTopic": "Data & Measurement • Money",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "P.1: Coin values",
      "pedagogicalOutcome": {
        "english": "Master coin values through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "सिक्कों का मूल्य (Coin values) की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_p_2",
      "title": "P.2: Count money - 1-rupee coins only",
      "subtitle": "पैसे गिनें - केवल १ रुपये के सिक्के • 10 प्रश्न गहन अभ्यास",
      "icon": "💰",
      "badge": "UKG Maths • Money (P.2)",
      "accentColor": "#EAB308",
      "boxColor": "#FEFCE8",
      "ncertTopic": "Data & Measurement • Money",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "P.2: Count money - 1-rupee coins only",
      "pedagogicalOutcome": {
        "english": "Master count money - 1-rupee coins only through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "पैसे गिनें - केवल १ रुपये के सिक्के की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_p_3",
      "title": "P.3: Count money - 1- and 2-rupee coins",
      "subtitle": "पैसे गिनें - १ और २ रुपये के सिक्के • 10 प्रश्न गहन अभ्यास",
      "icon": "💵",
      "badge": "UKG Maths • Money (P.3)",
      "accentColor": "#EAB308",
      "boxColor": "#FEFCE8",
      "ncertTopic": "Data & Measurement • Money",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "P.3: Count money - 1- and 2-rupee coins",
      "pedagogicalOutcome": {
        "english": "Master count money - 1- and 2-rupee coins through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "पैसे गिनें - १ और २ रुपये के सिक्के की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_p_4",
      "title": "P.4: Count money - 1-, 2- and 5-rupee coins",
      "subtitle": "पैसे गिनें - १, २ और ५ रुपये के सिक्के • 10 प्रश्न गहन अभ्यास",
      "icon": "🪙",
      "badge": "UKG Maths • Money (P.4)",
      "accentColor": "#EAB308",
      "boxColor": "#FEFCE8",
      "ncertTopic": "Data & Measurement • Money",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "P.4: Count money - 1-, 2- and 5-rupee coins",
      "pedagogicalOutcome": {
        "english": "Master count money - 1-, 2- and 5-rupee coins through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "पैसे गिनें - १, २ और ५ रुपये के सिक्के की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_p_5",
      "title": "P.5: Equivalent groups of coins",
      "subtitle": "सिक्कों के बराबर समूह (Equivalent groups) • 10 प्रश्न गहन अभ्यास",
      "icon": "🤝",
      "badge": "UKG Maths • Money (P.5)",
      "accentColor": "#EAB308",
      "boxColor": "#FEFCE8",
      "ncertTopic": "Data & Measurement • Money",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "P.5: Equivalent groups of coins",
      "pedagogicalOutcome": {
        "english": "Master equivalent groups of coins through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "सिक्कों के बराबर समूह (Equivalent groups) की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_p_6",
      "title": "P.6: Compare two groups of coins",
      "subtitle": "सिक्कों के दो समूहों की तुलना करें • 10 प्रश्न गहन अभ्यास",
      "icon": "⚖️",
      "badge": "UKG Maths • Money (P.6)",
      "accentColor": "#EAB308",
      "boxColor": "#FEFCE8",
      "ncertTopic": "Data & Measurement • Money",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "P.6: Compare two groups of coins",
      "pedagogicalOutcome": {
        "english": "Master compare two groups of coins through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "सिक्कों के दो समूहों की तुलना करें की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_q_1",
      "title": "Q.1: Name the two-dimensional shape",
      "subtitle": "द्विविमीय (2D) आकार का नाम बताएं • 10 प्रश्न गहन अभ्यास",
      "icon": "🔺",
      "badge": "UKG Maths • Two-dimensional shapes (Q.1)",
      "accentColor": "#6366F1",
      "boxColor": "#EEF2FF",
      "ncertTopic": "Geometry & Shapes • Two-dimensional shapes",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "Q.1: Name the two-dimensional shape",
      "pedagogicalOutcome": {
        "english": "Master name the two-dimensional shape through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "द्विविमीय (2D) आकार का नाम बताएं की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_q_2",
      "title": "Q.2: Circles",
      "subtitle": "वृत्त (Circles) • 10 प्रश्न गहन अभ्यास",
      "icon": "🔴",
      "badge": "UKG Maths • Two-dimensional shapes (Q.2)",
      "accentColor": "#6366F1",
      "boxColor": "#EEF2FF",
      "ncertTopic": "Geometry & Shapes • Two-dimensional shapes",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "Q.2: Circles",
      "pedagogicalOutcome": {
        "english": "Master circles through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "वृत्त (Circles) की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_q_3",
      "title": "Q.3: Triangles",
      "subtitle": "त्रिभुज (Triangles) • 10 प्रश्न गहन अभ्यास",
      "icon": "🔺",
      "badge": "UKG Maths • Two-dimensional shapes (Q.3)",
      "accentColor": "#6366F1",
      "boxColor": "#EEF2FF",
      "ncertTopic": "Geometry & Shapes • Two-dimensional shapes",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "Q.3: Triangles",
      "pedagogicalOutcome": {
        "english": "Master triangles through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "त्रिभुज (Triangles) की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_q_4",
      "title": "Q.4: Squares and rectangles",
      "subtitle": "वर्ग और आयत (Squares and rectangles) • 10 प्रश्न गहन अभ्यास",
      "icon": "🟦",
      "badge": "UKG Maths • Two-dimensional shapes (Q.4)",
      "accentColor": "#6366F1",
      "boxColor": "#EEF2FF",
      "ncertTopic": "Geometry & Shapes • Two-dimensional shapes",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "Q.4: Squares and rectangles",
      "pedagogicalOutcome": {
        "english": "Master squares and rectangles through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "वर्ग और आयत (Squares and rectangles) की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_q_5",
      "title": "Q.5: Hexagons",
      "subtitle": "षट्भुज (Hexagons) • 10 प्रश्न गहन अभ्यास",
      "icon": "⬡",
      "badge": "UKG Maths • Two-dimensional shapes (Q.5)",
      "accentColor": "#6366F1",
      "boxColor": "#EEF2FF",
      "ncertTopic": "Geometry & Shapes • Two-dimensional shapes",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "Q.5: Hexagons",
      "pedagogicalOutcome": {
        "english": "Master hexagons through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "षट्भुज (Hexagons) की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_q_6",
      "title": "Q.6: Select two-dimensional shapes",
      "subtitle": "2D आकार चुनें • 10 प्रश्न गहन अभ्यास",
      "icon": "✨",
      "badge": "UKG Maths • Two-dimensional shapes (Q.6)",
      "accentColor": "#6366F1",
      "boxColor": "#EEF2FF",
      "ncertTopic": "Geometry & Shapes • Two-dimensional shapes",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "Q.6: Select two-dimensional shapes",
      "pedagogicalOutcome": {
        "english": "Master select two-dimensional shapes through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "2D आकार चुनें की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_q_7",
      "title": "Q.7: Count sides and corners",
      "subtitle": "भुजाएं और कोने गिनें • 10 प्रश्न गहन अभ्यास",
      "icon": "📐",
      "badge": "UKG Maths • Two-dimensional shapes (Q.7)",
      "accentColor": "#6366F1",
      "boxColor": "#EEF2FF",
      "ncertTopic": "Geometry & Shapes • Two-dimensional shapes",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "Q.7: Count sides and corners",
      "pedagogicalOutcome": {
        "english": "Master count sides and corners through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "भुजाएं और कोने गिनें की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_q_8",
      "title": "Q.8: Compare sides and corners",
      "subtitle": "भुजाओं और कोनों की तुलना करें • 10 प्रश्न गहन अभ्यास",
      "icon": "🔍",
      "badge": "UKG Maths • Two-dimensional shapes (Q.8)",
      "accentColor": "#6366F1",
      "boxColor": "#EEF2FF",
      "ncertTopic": "Geometry & Shapes • Two-dimensional shapes",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "Q.8: Compare sides and corners",
      "pedagogicalOutcome": {
        "english": "Master compare sides and corners through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "भुजाओं और कोनों की तुलना करें की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_q_9",
      "title": "Q.9: Introduction to symmetry",
      "subtitle": "सममिति का परिचय (Introduction to symmetry) • 10 प्रश्न गहन अभ्यास",
      "icon": "🦋",
      "badge": "UKG Maths • Two-dimensional shapes (Q.9)",
      "accentColor": "#6366F1",
      "boxColor": "#EEF2FF",
      "ncertTopic": "Geometry & Shapes • Two-dimensional shapes",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "Q.9: Introduction to symmetry",
      "pedagogicalOutcome": {
        "english": "Master introduction to symmetry through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "सममिति का परिचय (Introduction to symmetry) की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_q_10",
      "title": "Q.10: Identify pictures with symmetry",
      "subtitle": "सममित (Symmetrical) चित्र पहचानें • 10 प्रश्न गहन अभ्यास",
      "icon": "🪞",
      "badge": "UKG Maths • Two-dimensional shapes (Q.10)",
      "accentColor": "#6366F1",
      "boxColor": "#EEF2FF",
      "ncertTopic": "Geometry & Shapes • Two-dimensional shapes",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "Q.10: Identify pictures with symmetry",
      "pedagogicalOutcome": {
        "english": "Master identify pictures with symmetry through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "सममित (Symmetrical) चित्र पहचानें की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_r_1",
      "title": "R.1: Two-dimensional and three-dimensional shapes",
      "subtitle": "2D और 3D आकृतियों में अंतर • 10 प्रश्न गहन अभ्यास",
      "icon": "🧊",
      "badge": "UKG Maths • Three-dimensional shapes (R.1)",
      "accentColor": "#EC4899",
      "boxColor": "#FDF2F8",
      "ncertTopic": "Geometry & Shapes • Three-dimensional shapes",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "R.1: Two-dimensional and three-dimensional shapes",
      "pedagogicalOutcome": {
        "english": "Master two-dimensional and three-dimensional shapes through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "2D और 3D आकृतियों में अंतर की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_r_2",
      "title": "R.2: Name the three-dimensional shape",
      "subtitle": "3D आकार का नाम बताएं • 10 प्रश्न गहन अभ्यास",
      "icon": "📦",
      "badge": "UKG Maths • Three-dimensional shapes (R.2)",
      "accentColor": "#EC4899",
      "boxColor": "#FDF2F8",
      "ncertTopic": "Geometry & Shapes • Three-dimensional shapes",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "R.2: Name the three-dimensional shape",
      "pedagogicalOutcome": {
        "english": "Master name the three-dimensional shape through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "3D आकार का नाम बताएं की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_r_3",
      "title": "R.3: Spheres",
      "subtitle": "गोला (Spheres) • 10 प्रश्न गहन अभ्यास",
      "icon": "⚽",
      "badge": "UKG Maths • Three-dimensional shapes (R.3)",
      "accentColor": "#EC4899",
      "boxColor": "#FDF2F8",
      "ncertTopic": "Geometry & Shapes • Three-dimensional shapes",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "R.3: Spheres",
      "pedagogicalOutcome": {
        "english": "Master spheres through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "गोला (Spheres) की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_r_4",
      "title": "R.4: Cubes",
      "subtitle": "घन (Cubes) • 10 प्रश्न गहन अभ्यास",
      "icon": "🎲",
      "badge": "UKG Maths • Three-dimensional shapes (R.4)",
      "accentColor": "#EC4899",
      "boxColor": "#FDF2F8",
      "ncertTopic": "Geometry & Shapes • Three-dimensional shapes",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "R.4: Cubes",
      "pedagogicalOutcome": {
        "english": "Master cubes through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "घन (Cubes) की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_r_5",
      "title": "R.5: Cones",
      "subtitle": "शंकु (Cones) • 10 प्रश्न गहन अभ्यास",
      "icon": "🍦",
      "badge": "UKG Maths • Three-dimensional shapes (R.5)",
      "accentColor": "#EC4899",
      "boxColor": "#FDF2F8",
      "ncertTopic": "Geometry & Shapes • Three-dimensional shapes",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "R.5: Cones",
      "pedagogicalOutcome": {
        "english": "Master cones through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "शंकु (Cones) की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_r_6",
      "title": "R.6: Cylinders",
      "subtitle": "बेलन (Cylinders) • 10 प्रश्न गहन अभ्यास",
      "icon": "🥫",
      "badge": "UKG Maths • Three-dimensional shapes (R.6)",
      "accentColor": "#EC4899",
      "boxColor": "#FDF2F8",
      "ncertTopic": "Geometry & Shapes • Three-dimensional shapes",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "R.6: Cylinders",
      "pedagogicalOutcome": {
        "english": "Master cylinders through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "बेलन (Cylinders) की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_r_7",
      "title": "R.7: Select three-dimensional shapes",
      "subtitle": "3D आकार चुनें • 10 प्रश्न गहन अभ्यास",
      "icon": "✨",
      "badge": "UKG Maths • Three-dimensional shapes (R.7)",
      "accentColor": "#EC4899",
      "boxColor": "#FDF2F8",
      "ncertTopic": "Geometry & Shapes • Three-dimensional shapes",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "R.7: Select three-dimensional shapes",
      "pedagogicalOutcome": {
        "english": "Master select three-dimensional shapes through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "3D आकार चुनें की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_r_8",
      "title": "R.8: Identify shapes traced from solids",
      "subtitle": "ठोस वस्तुओं से बनी आकृतियां पहचानें • 10 प्रश्न गहन अभ्यास",
      "icon": "👣",
      "badge": "UKG Maths • Three-dimensional shapes (R.8)",
      "accentColor": "#EC4899",
      "boxColor": "#FDF2F8",
      "ncertTopic": "Geometry & Shapes • Three-dimensional shapes",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "R.8: Identify shapes traced from solids",
      "pedagogicalOutcome": {
        "english": "Master identify shapes traced from solids through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "ठोस वस्तुओं से बनी आकृतियां पहचानें की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_r_9",
      "title": "R.9: Shapes of everyday objects I",
      "subtitle": "दैनिक वस्तुओं के 3D आकार १ • 10 प्रश्न गहन अभ्यास",
      "icon": "🎁",
      "badge": "UKG Maths • Three-dimensional shapes (R.9)",
      "accentColor": "#EC4899",
      "boxColor": "#FDF2F8",
      "ncertTopic": "Geometry & Shapes • Three-dimensional shapes",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "R.9: Shapes of everyday objects I",
      "pedagogicalOutcome": {
        "english": "Master shapes of everyday objects i through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "दैनिक वस्तुओं के 3D आकार १ की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_r_10",
      "title": "R.10: Shapes of everyday objects II",
      "subtitle": "दैनिक वस्तुओं के 3D आकार २ • 10 प्रश्न गहन अभ्यास",
      "icon": "🏮",
      "badge": "UKG Maths • Three-dimensional shapes (R.10)",
      "accentColor": "#EC4899",
      "boxColor": "#FDF2F8",
      "ncertTopic": "Geometry & Shapes • Three-dimensional shapes",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "R.10: Shapes of everyday objects II",
      "pedagogicalOutcome": {
        "english": "Master shapes of everyday objects ii through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "दैनिक वस्तुओं के 3D आकार २ की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    },
    {
      "id": "ukg_maths_lab_s_1",
      "title": "S.1: Sum and difference",
      "subtitle": "योग और अंतर (Sum and difference) • 10 प्रश्न गहन अभ्यास",
      "icon": "➕➖",
      "badge": "UKG Maths • Vocabulary (S.1)",
      "accentColor": "#F97316",
      "boxColor": "#FFF7ED",
      "ncertTopic": "Counting & Numbers • Vocabulary",
      "subject": "maths",
      "grade": "UKG",
      "chapterTitle": "S.1: Sum and difference",
      "pedagogicalOutcome": {
        "english": "Master sum and difference through 10 progressively challenging interactive problems with visual aids and step-by-step reasoning.",
        "hindi": "योग और अंतर (Sum and difference) की गहन समझ: चित्रों और स्पष्ट व्याख्या के साथ 10 स्तरीय अभ्यास प्रश्न।"
      }
    }
  ],

  class_1_2: [
    {
      id: 'balance_scale',
      title: 'The Balance Beam',
      subtitle: 'Physics tilt scale for 1-to-20 addition & subtraction',
      icon: '⚖️',
      badge: 'NCERT Class 1-2 • Addition Balance',
      accentColor: '#F59E0B',
      boxColor: '#78350F',
      ncertTopic: 'Equalities & Regrouping (Making 10)',
      subject: 'maths',
      grade: 1,
      pedagogicalOutcome: {
        english: 'Transforms abstract equations (4 + 3 = 7) into physical equilibrium. If weights are unequal, the beam tilts realistically!',
        hindi: 'गणित के समीकरण (समानता) को तराजू के पलड़ों से समझाता है — दोनों तरफ बराबर वजन होने पर ही तराजू सीधा होता है।',
      },
    },
    {
      id: 'clock_time',
      title: 'Tick-Tock Clock Time Lab',
      subtitle: 'Rotational analog clock hands & daily routines',
      icon: '🕒',
      badge: 'NCERT Class 1-2 • Time & Clock',
      accentColor: '#06B6D4',
      boxColor: '#164E63',
      ncertTopic: 'Reading Analog & Digital Clocks',
      subject: 'maths',
      grade: 1,
      pedagogicalOutcome: {
        english: 'Interactive clock face lets children rotate hour and minute hands to connect time with school, play, and bedtime routines.',
        hindi: 'घड़ी की सुइयों को खुद घुमाकर समय देखना, स्कूल का समय, दोपहर और रात का फर्क बच्चे आसानी से समझते हैं।',
      },
    },
    {
      id: 'pattern_builder',
      title: 'Pattern & Sequence Builder',
      subtitle: 'Geometric repeats, rotations & skip-counting',
      icon: '🧩',
      badge: 'NCERT Class 1-2 • Patterns',
      accentColor: '#8B5CF6',
      boxColor: '#4C1D95',
      ncertTopic: 'Pattern Recognition & Skip Counting',
      subject: 'maths',
      grade: 1,
      pedagogicalOutcome: {
        english: 'Pattern detection builds the early brain architecture for coding, algebra, and logical sequences.',
        hindi: 'पैटर्न पहचानना बच्चों में लॉजिकल थिंकिंग और कोडिंग की समझ की सबसे मजबूत बुनियाद तैयार करता है।',
      },
    },
    {
      id: 'class1_english_interactive_lab',
      title: 'Class 1 English 5-Station Practical Lab',
      subtitle: 'Magic "e", Compound Words, Shades Thermometer, Sentence Architect & Time Machine',
      icon: '🧪',
      badge: 'NCERT Class 1 • 5 Practical Stations',
      accentColor: '#2563EB',
      boxColor: '#EFF6FF',
      ncertTopic: 'Comprehensive Class 1 English Practical Lab',
      subject: 'english',
      grade: 1,
      pedagogicalOutcome: {
        english: 'Full interactive practical laboratory covering silent "e", digraphs, compound words, nuances, syntax, and verb tenses.',
        hindi: 'साइलेंट "e", डायग्राफ्स, संयुक्त शब्द, वाक्यों की बनावट और काल परिवर्तन की 5 इंटरैक्टिव लैब्स।',
      },
    },
    {
      id: 'c1_lab_magic_phonics',
      title: "The Magic 'e' & Digraphs Phonics Lab",
      subtitle: 'Magic Wand transforms CVC to CVCe (tap ➔ tape, pin ➔ pine) & 9 soundboard tiles',
      icon: '🪄',
      badge: 'Reading Foundations • A to Q',
      accentColor: '#2563EB',
      boxColor: '#EFF6FF',
      ncertTopic: "Silent 'e' Long Vowels, Digraphs & Blends",
      subject: 'english',
      grade: 1,
      pedagogicalOutcome: {
        english: 'Visual magic wand adds silent "e", converts short vowels to long vowel sounds, and audio soundboard reinforces 9 essential digraphs and blends.',
        hindi: 'जादुई छड़ी से साइलेंट "e" जोड़कर वोवेल साउंड बदलना और 9 महत्वपूर्ण डायग्राफ्स (sh, ch, th) व ब्लेंड्स का ऑडियो अभ्यास।',
      },
    },
    {
      id: 'c1_lab_syllables_words',
      title: 'Two-Syllable & Compound Word Forge',
      subtitle: 'Collision reactor fuses words (sun + set = sunset) & Syllable Clapper challenge',
      icon: '⚡',
      badge: 'Reading Foundations • R & S',
      accentColor: '#7C3AED',
      boxColor: '#F5F3FF',
      ncertTopic: 'Two-Syllable Splitting & Compound Word Fusion',
      subject: 'english',
      grade: 1,
      pedagogicalOutcome: {
        english: 'High-voltage reactor fuses two standalone words into compound nouns while the Syllable Clapper develops rhythmic multi-syllable chunking.',
        hindi: 'दो अलग शब्दों को जोड़कर नया संयुक्त शब्द बनाना और ताली बजाकर शब्दों के 1, 2, 3 या 4 सिलेबल्स (टुकड़े) गिनना।',
      },
    },
    {
      id: 'c1_lab_vocab_shades',
      title: 'Shades of Meaning & Prefix/Suffix Factory',
      subtitle: 'Interactive intensity thermometer & Affix conveyor assembly line',
      icon: '🌡️',
      badge: 'Vocabulary • W to DD',
      accentColor: '#EA580C',
      boxColor: '#FFF7ED',
      ncertTopic: 'Word Nuances, Prefixes (un-, re-) & Suffixes (-ful, -er, -ly)',
      subject: 'english',
      grade: 1,
      pedagogicalOutcome: {
        english: 'Children slide the mercury from chilly to freezing or walk to sprint to understand word intensity, and snap prefixes/suffixes onto root words.',
        hindi: 'थर्मामीटर से शब्दों की तीव्रता (ठंडा ➔ जमा देने वाला) समझना और मूल शब्दों में प्रीफ़िक्स (un-, re-) व सफ़िक्स (-ful, -ly) जोड़ना।',
      },
    },
    {
      id: 'c1_lab_sentence_grammar',
      title: 'Sentence Architect Studio & Noun Conveyor',
      subtitle: 'Subject + Predicate + End Mark builder & 4-bin noun sorting',
      icon: '🏗️',
      badge: 'Grammar • EE to II',
      accentColor: '#059669',
      boxColor: '#ECFDF5',
      ncertTopic: 'Sentence Structure, Punctuation & Noun Categorization',
      subject: 'english',
      grade: 1,
      pedagogicalOutcome: {
        english: 'Hands-on blocks assemble complete sentences with naming parts, action parts, and correct punctuation (. ? !), plus sorting nouns into Person, Place, Animal, or Thing.',
        hindi: 'नेमिंग पार्ट (Subject) और एक्शन पार्ट (Predicate) जोड़कर सही विराम चिन्ह (. ? !) के साथ पूरा वाक्य बनाना और संज्ञा का वर्गीकरण।',
      },
    },
    {
      id: 'c1_lab_tenses_contractions',
      title: 'Verb Time Machine & Contraction Snapper',
      subtitle: 'Past, Present & Future chronometer & Magnetic apostrophe contraction snap',
      icon: '⏳',
      badge: 'Grammar • JJ to PP',
      accentColor: '#DB2777',
      boxColor: '#FDF2F8',
      ncertTopic: "Verb Tenses (jumped / jumps / will jump) & Contractions (can't, don't)",
      subject: 'english',
      grade: 1,
      pedagogicalOutcome: {
        english: 'Children rotate the Time Machine dial to see verbs change across Past, Present, and Future eras, and snap magnetic blocks with apostrophes.',
        hindi: 'टाइम मशीन से भूतकाल, वर्तमान और भविष्य काल में क्रिया बदलना और मैग्नेटिक ब्लॉक्स से शॉर्ट फॉर्म (कंट्रैक्शन) बनाना।',
      },
    },
  ],

  class_3_4: [
    {
      id: 'place_value_rocket',
      title: 'Place Value Rocket Launchpad',
      subtitle: 'Thousands, Hundreds, Tens & Ones fuel canisters',
      icon: '🚀',
      badge: 'NCERT Class 3-4 • Number Systems',
      accentColor: '#3B82F6',
      boxColor: '#1E3A8A',
      ncertTopic: 'Base-10 Place Value Architecture',
      pedagogicalOutcome: {
        english: 'Assembles rockets using Base-10 blocks (1000s, 100s, 10s, 1s). Eliminates place value confusion with multi-digit numbers.',
        hindi: 'इकाई, दहाई, सैकड़ा और हज़ार को रॉकेट के ईंधन ब्लॉक के रूप में जोड़कर बच्चे बड़े नंबरों की संरचना को समझते हैं।',
      },
    },
    {
      id: 'fraction_pizza',
      title: 'Fraction Pizza Kitchen',
      subtitle: 'Slice pizzas & serve orders (1/2, 1/4, 3/4 & Equivalence)',
      icon: '🍕',
      badge: 'NCERT Class 3-4 • Fractions',
      accentColor: '#EA580C',
      boxColor: '#7C2D12',
      ncertTopic: 'Parts of a Whole & Equivalent Fractions',
      pedagogicalOutcome: {
        english: 'Children physically cut pizzas into 2, 3, 4, 6, 8 slices and see that 2/4 is the exact same amount of pizza as 1/2.',
        hindi: 'पिज़्ज़ा को 2, 4 या 8 टुकड़ों में काटकर बच्चे देखते हैं कि 2/4 और 1/2 वास्तव में एक ही बराबर हिस्सा होते हैं।',
      },
    },
    {
      id: 'metric_weight',
      title: 'Metric Grocery & Scale Lab',
      subtitle: '1 kg = 1000g conversion & grocery balance',
      icon: '⚖️',
      badge: 'NCERT Class 3-4 • Measurement',
      accentColor: '#10B981',
      boxColor: '#064E3B',
      ncertTopic: 'Grams to Kilograms Conversion & Balance',
      pedagogicalOutcome: {
        english: 'Standard laboratory weights (500g, 250g, 100g) teach children real grocery shopping calculations without rote conversion charts.',
        hindi: 'दुकानदार की तरह 500g और 250g के बाट रखकर 1 किलोग्राम पूरा करना सीखते हैं — व्यावहारिक मापन।',
      },
    },
  ],

  class_5_6: [
    {
      id: 'angle_laser',
      title: 'Angle Laser Optics Lab',
      subtitle: 'Rotate laser turret & protractor (Acute, Right, Obtuse, Reflex)',
      icon: '⚡',
      badge: 'NCERT Class 5-6 • Geometry',
      accentColor: '#8B5CF6',
      boxColor: '#4C1D95',
      ncertTopic: 'Protractor Degrees & Angle Types',
      pedagogicalOutcome: {
        english: 'Rotational laser turret with full 360° protractor lets students fire beams at target crystals, intuitively mastering degrees and angle types.',
        hindi: 'लेज़र गन को प्रोट्रैक्टर (चाँदा) पर 45°, 90°, 135° और 180° पर घुमाकर बच्चे कोणों के प्रकार खेल-खेल में सीख जाते हैं।',
      },
    },
    {
      id: 'geo_area_perimeter',
      title: 'Geo-Board Area & Perimeter Lab',
      subtitle: 'Stretchable grid: Glowing border vs Inner tile count',
      icon: '📐',
      badge: 'NCERT Class 5-6 • Mensuration',
      accentColor: '#06B6D4',
      boxColor: '#164E63',
      ncertTopic: 'Area (Region) vs Perimeter (Boundary)',
      pedagogicalOutcome: {
        english: 'Directly solves the #1 confusion in middle school math: children see the boundary wire (Perimeter) glow separate from the interior floor tiles (Area).',
        hindi: 'क्षेत्रफल (अंदर की जगह) और परिमाप (चारों तरफ की बाउंड्री) के बीच के अंतर को ग्रिड पर खींचकर हमेशा के लिए साफ करता है।',
      },
    },
    {
      id: 'integer_submarine',
      title: 'Integer Submarine & Freeze Lab',
      subtitle: 'Sea level depth & thermometer mercury (Positive & Negative)',
      icon: '❄️',
      badge: 'NCERT Class 6 • Integers',
      accentColor: '#3B82F6',
      boxColor: '#1E3A8A',
      ncertTopic: 'Number Line, Positive & Negative Integers',
      pedagogicalOutcome: {
        english: 'Negative numbers made physical: dive below 0m sea level or drop thermometer mercury below freezing to experience -5, -10 and additions.',
        hindi: 'ऋणात्मक संख्याएं (Negative numbers) को समुद्र की गहराई (-5m, -10m) और शून्य से नीचे के तापमान के रूप में महसूस करते हैं।',
      },
    },
  ],
};

export const SCIENCE_STEM_LABS: ConceptLabItem[] = [
  {
    id: 'magnet_lab',
    title: 'Magnetic Poles & Field Lab',
    subtitle: 'Opposite poles attract, like poles repel & iron testing',
    icon: '🧲',
    badge: 'NCERT Science • Magnetism',
    accentColor: '#EF4444',
    boxColor: '#7F1D1D',
    ncertTopic: 'Magnetic Poles & Materials',
    pedagogicalOutcome: {
      english: 'Children physically test North and South magnetic poles and discover which everyday materials (iron vs wood) are magnetic.',
      hindi: 'बच्चे चुंबक के North और South पोल्स को जोड़कर आकर्षण (Attraction) और प्रतिकर्षण (Repulsion) का प्रत्यक्ष अनुभव करते हैं।',
    },
  },
  {
    id: 'color_prism',
    title: 'Color Mixing & Rainbow Prism',
    subtitle: 'Primary color synthesis & glass prism light dispersion',
    icon: '🌈',
    badge: 'NCERT Science • Optics & Light',
    accentColor: '#EC4899',
    boxColor: '#831843',
    ncertTopic: 'Light Dispersion & Color Theory',
    pedagogicalOutcome: {
      english: 'Drops of Red, Yellow, and Blue mix in a visual beaker, and white light refracts through a glass prism into 7 VIBGYOR colors.',
      hindi: 'बीकर में लाल, पीले और नीले रंग मिलाकर नए रंग बनाना और कांच के प्रिज्म से सफेद रोशनी को 7 रंगों में बिखरते देखना।',
    },
  },
  {
    id: 'speed_brain',
    title: '60s Lightning Brain Booster',
    subtitle: 'High-speed mental math & reflex combo agility test',
    icon: '⚡',
    badge: 'Super Kid Agility • 60s Rush',
    accentColor: '#0EA5E9',
    boxColor: '#0369A1',
    ncertTopic: 'Rapid Mental Agility & Cognitive Reflex',
    pedagogicalOutcome: {
      english: 'Builds super-fast cognitive processing, working memory recall, and lightning calculation confidence under light gamified pressure.',
      hindi: 'तेज़ दिमागी कसरत — 60 सेकंड में त्वरित निर्णय, मेंटल कैलकुलेशन और कॉग्निटिव रिफ्लेक्स को मजबूत करता है।',
    },
  },
];

export const ALL_CONCEPT_LABS: ConceptLabItem[] = [
  ...CONCEPT_LABS_BY_GRADE.lkg_ukg,
  ...CONCEPT_LABS_BY_GRADE.class_1_2,
  ...CONCEPT_LABS_BY_GRADE.class_3_4,
  ...CONCEPT_LABS_BY_GRADE.class_5_6,
  ...SCIENCE_STEM_LABS,
];
