import { Question } from '../../types';

// ============================================================================
// LKG (BALVATIKA 2) ENGLISH — FULL 78 GRANULAR SKILL DIRECTORY & QUESTION BANK
// Foundation Early Reading Standard (A.1 to X.2)
// Total 78 Skills | 312 Curated Pedagogical Questions | Zero Spoilers
// ============================================================================

export interface LKGSkillItem {
  id: string;
  code: string;
  categoryCode: string;
  categoryTitle: string;
  area: 'Reading foundations' | 'Reading strategies' | 'Vocabulary';
  title: string;
  titleHindi: string;
  icon: string;
  color: string;
  borderColor: string;
  questionCount: number;
}

export const LKG_ENGLISH_SKILLS: LKGSkillItem[] = [
  {
    "id": "skill_lkg_e_a_1",
    "code": "A.1",
    "categoryCode": "L",
    "categoryTitle": "Letter identification",
    "area": "Reading foundations",
    "title": "Find the letter in the alphabet: uppercase",
    "titleHindi": "वर्णमाला में बड़ा अक्षर पहचानें (Uppercase)",
    "icon": "🔤",
    "color": "#EFF6FF",
    "borderColor": "#BFDBFE",
    "questionCount": 4
  },
  {
    "id": "skill_lkg_e_a_2",
    "code": "A.2",
    "categoryCode": "L",
    "categoryTitle": "Letter identification",
    "area": "Reading foundations",
    "title": "Find the letter in the alphabet: lowercase",
    "titleHindi": "वर्णमाला में छोटा अक्षर पहचानें (Lowercase)",
    "icon": "🔡",
    "color": "#EFF6FF",
    "borderColor": "#BFDBFE",
    "questionCount": 4
  },
  {
    "id": "skill_lkg_e_a_3",
    "code": "A.3",
    "categoryCode": "L",
    "categoryTitle": "Letter identification",
    "area": "Reading foundations",
    "title": "Choose the letter that you hear: uppercase",
    "titleHindi": "सुनकर सही बड़ा अक्षर चुनें",
    "icon": "🎧",
    "color": "#EFF6FF",
    "borderColor": "#BFDBFE",
    "questionCount": 4
  },
  {
    "id": "skill_lkg_e_a_4",
    "code": "A.4",
    "categoryCode": "L",
    "categoryTitle": "Letter identification",
    "area": "Reading foundations",
    "title": "Choose the letter that you hear: lowercase",
    "titleHindi": "सुनकर सही छोटा अक्षर चुनें",
    "icon": "👂",
    "color": "#EFF6FF",
    "borderColor": "#BFDBFE",
    "questionCount": 4
  },
  {
    "id": "skill_lkg_e_a_5",
    "code": "A.5",
    "categoryCode": "L",
    "categoryTitle": "Letter identification",
    "area": "Reading foundations",
    "title": "Frequently confused letters: find the letter",
    "titleHindi": "भ्रमित करने वाले अक्षर पहचानें (b vs d, p vs q)",
    "icon": "🔍",
    "color": "#EFF6FF",
    "borderColor": "#BFDBFE",
    "questionCount": 4
  },
  {
    "id": "skill_lkg_e_a_6",
    "code": "A.6",
    "categoryCode": "L",
    "categoryTitle": "Letter identification",
    "area": "Reading foundations",
    "title": "Frequently confused letters: find all the letters",
    "titleHindi": "भ्रमित करने वाले सभी अक्षर खोजें",
    "icon": "🎯",
    "color": "#EFF6FF",
    "borderColor": "#BFDBFE",
    "questionCount": 4
  },
  {
    "id": "skill_lkg_e_b_1",
    "code": "B.1",
    "categoryCode": "UL",
    "categoryTitle": "Lowercase and uppercase letters",
    "area": "Reading foundations",
    "title": "Choose the lowercase letter that matches: c, k, o, p, s, u, v, w, x, z",
    "titleHindi": "मिलता-जुलता छोटा अक्षर चुनें (c, k, o, p, s, u, v, w, x, z)",
    "icon": "🔀",
    "color": "#EFF6FF",
    "borderColor": "#BFDBFE",
    "questionCount": 4
  },
  {
    "id": "skill_lkg_e_b_2",
    "code": "B.2",
    "categoryCode": "UL",
    "categoryTitle": "Lowercase and uppercase letters",
    "area": "Reading foundations",
    "title": "Choose the lowercase letter that matches: f, i, j, l, m, t, y",
    "titleHindi": "मिलता-जुलता छोटा अक्षर चुनें (f, i, j, l, m, t, y)",
    "icon": "🔀",
    "color": "#EFF6FF",
    "borderColor": "#BFDBFE",
    "questionCount": 4
  },
  {
    "id": "skill_lkg_e_b_3",
    "code": "B.3",
    "categoryCode": "UL",
    "categoryTitle": "Lowercase and uppercase letters",
    "area": "Reading foundations",
    "title": "Choose the lowercase letter that matches: a, b, d, e, g, h, n, q, r",
    "titleHindi": "मिलता-जुलता छोटा अक्षर चुनें (a, b, d, e, g, h, n, q, r)",
    "icon": "🔀",
    "color": "#EFF6FF",
    "borderColor": "#BFDBFE",
    "questionCount": 4
  },
  {
    "id": "skill_lkg_e_b_4",
    "code": "B.4",
    "categoryCode": "UL",
    "categoryTitle": "Lowercase and uppercase letters",
    "area": "Reading foundations",
    "title": "Find all the lowercase letters",
    "titleHindi": "सभी छोटे अक्षर पहचानें",
    "icon": "🔡",
    "color": "#EFF6FF",
    "borderColor": "#BFDBFE",
    "questionCount": 4
  },
  {
    "id": "skill_lkg_e_b_5",
    "code": "B.5",
    "categoryCode": "UL",
    "categoryTitle": "Lowercase and uppercase letters",
    "area": "Reading foundations",
    "title": "Choose the uppercase letter that matches: C, K, O, P, S, U, V, W, X, Z",
    "titleHindi": "बड़ा अक्षर चुनें (C, K, O, P, S, U, V, W, X, Z)",
    "icon": "🔤",
    "color": "#EFF6FF",
    "borderColor": "#BFDBFE",
    "questionCount": 4
  },
  {
    "id": "skill_lkg_e_b_6",
    "code": "B.6",
    "categoryCode": "UL",
    "categoryTitle": "Lowercase and uppercase letters",
    "area": "Reading foundations",
    "title": "Choose the uppercase letter that matches: F, I, J, L, M, T, Y",
    "titleHindi": "बड़ा अक्षर चुनें (F, I, J, L, M, T, Y)",
    "icon": "🔤",
    "color": "#EFF6FF",
    "borderColor": "#BFDBFE",
    "questionCount": 4
  },
  {
    "id": "skill_lkg_e_b_7",
    "code": "B.7",
    "categoryCode": "UL",
    "categoryTitle": "Lowercase and uppercase letters",
    "area": "Reading foundations",
    "title": "Choose the uppercase letter that matches: A, B, D, E, G, H, N, Q, R",
    "titleHindi": "बड़ा अक्षर चुनें (A, B, D, E, G, H, N, Q, R)",
    "icon": "🔤",
    "color": "#EFF6FF",
    "borderColor": "#BFDBFE",
    "questionCount": 4
  },
  {
    "id": "skill_lkg_e_b_8",
    "code": "B.8",
    "categoryCode": "UL",
    "categoryTitle": "Lowercase and uppercase letters",
    "area": "Reading foundations",
    "title": "Find all the uppercase letters",
    "titleHindi": "सभी बड़े अक्षर पहचानें",
    "icon": "🔤",
    "color": "#EFF6FF",
    "borderColor": "#BFDBFE",
    "questionCount": 4
  },
  {
    "id": "skill_lkg_e_c_1",
    "code": "C.1",
    "categoryCode": "WR",
    "categoryTitle": "Word recognition",
    "area": "Reading foundations",
    "title": "Choose the two words that are the same",
    "titleHindi": "दो समान शब्द पहचानें",
    "icon": "👯",
    "color": "#EFF6FF",
    "borderColor": "#BFDBFE",
    "questionCount": 4
  },
  {
    "id": "skill_lkg_e_c_2",
    "code": "C.2",
    "categoryCode": "WR",
    "categoryTitle": "Word recognition",
    "area": "Reading foundations",
    "title": "Choose the sentence that is spaced correctly",
    "titleHindi": "सही दूरी (Spacing) वाला वाक्य चुनें",
    "icon": "📏",
    "color": "#EFF6FF",
    "borderColor": "#BFDBFE",
    "questionCount": 4
  },
  {
    "id": "skill_lkg_e_c_3",
    "code": "C.3",
    "categoryCode": "WR",
    "categoryTitle": "Word recognition",
    "area": "Reading foundations",
    "title": "Find a word in a sentence",
    "titleHindi": "वाक्य में शब्द पहचानें",
    "icon": "🔍",
    "color": "#EFF6FF",
    "borderColor": "#BFDBFE",
    "questionCount": 4
  },
  {
    "id": "skill_lkg_e_d_1",
    "code": "D.1",
    "categoryCode": "RH",
    "categoryTitle": "Rhyming",
    "area": "Reading foundations",
    "title": "Which word has the same ending?",
    "titleHindi": "समान तुक वाले शब्द (Rhyme)",
    "icon": "🎵",
    "color": "#EFF6FF",
    "borderColor": "#BFDBFE",
    "questionCount": 4
  },
  {
    "id": "skill_lkg_e_d_2",
    "code": "D.2",
    "categoryCode": "RH",
    "categoryTitle": "Rhyming",
    "area": "Reading foundations",
    "title": "Which two words have the same ending?",
    "titleHindi": "कौन से दो शब्द तुक मिलाते हैं?",
    "icon": "🎶",
    "color": "#EFF6FF",
    "borderColor": "#BFDBFE",
    "questionCount": 4
  },
  {
    "id": "skill_lkg_e_d_3",
    "code": "D.3",
    "categoryCode": "RH",
    "categoryTitle": "Rhyming",
    "area": "Reading foundations",
    "title": "Choose the picture that rhymes with the word",
    "titleHindi": "चित्र पहचानें जो तुक मिलाता है",
    "icon": "🖼️",
    "color": "#EFF6FF",
    "borderColor": "#BFDBFE",
    "questionCount": 4
  },
  {
    "id": "skill_lkg_e_e_1",
    "code": "E.1",
    "categoryCode": "BS",
    "categoryTitle": "Blending and segmenting",
    "area": "Reading foundations",
    "title": "Blend onset and rime together to make a word",
    "titleHindi": "शुरुआती और अंतिम ध्वनि जोड़कर शब्द बनाएं",
    "icon": "🧩",
    "color": "#EFF6FF",
    "borderColor": "#BFDBFE",
    "questionCount": 4
  },
  {
    "id": "skill_lkg_e_e_2",
    "code": "E.2",
    "categoryCode": "BS",
    "categoryTitle": "Blending and segmenting",
    "area": "Reading foundations",
    "title": "Blend each sound in a word together",
    "titleHindi": "प्रत्येक ध्वनि को मिलाकर शब्द बनाएं",
    "icon": "🔤",
    "color": "#EFF6FF",
    "borderColor": "#BFDBFE",
    "questionCount": 4
  },
  {
    "id": "skill_lkg_e_e_3",
    "code": "E.3",
    "categoryCode": "BS",
    "categoryTitle": "Blending and segmenting",
    "area": "Reading foundations",
    "title": "Identify the first sound in a word",
    "titleHindi": "शब्द की पहली ध्वनि पहचानें",
    "icon": "🥇",
    "color": "#EFF6FF",
    "borderColor": "#BFDBFE",
    "questionCount": 4
  },
  {
    "id": "skill_lkg_e_e_4",
    "code": "E.4",
    "categoryCode": "BS",
    "categoryTitle": "Blending and segmenting",
    "area": "Reading foundations",
    "title": "Put the sounds in order",
    "titleHindi": "ध्वनियों को सही क्रम में रखें",
    "icon": "🔢",
    "color": "#EFF6FF",
    "borderColor": "#BFDBFE",
    "questionCount": 4
  },
  {
    "id": "skill_lkg_e_f_1",
    "code": "F.1",
    "categoryCode": "BE",
    "categoryTitle": "Beginning and ending sounds",
    "area": "Reading foundations",
    "title": "Which two words start with the same sound?",
    "titleHindi": "कौन से दो शब्द समान ध्वनि से शुरू होते हैं?",
    "icon": "🎯",
    "color": "#EFF6FF",
    "borderColor": "#BFDBFE",
    "questionCount": 4
  },
  {
    "id": "skill_lkg_e_f_2",
    "code": "F.2",
    "categoryCode": "BE",
    "categoryTitle": "Beginning and ending sounds",
    "area": "Reading foundations",
    "title": "Which word ends with the same sound?",
    "titleHindi": "कौन सा शब्द समान अंतिम ध्वनि पर समाप्त होता है?",
    "icon": "🏁",
    "color": "#EFF6FF",
    "borderColor": "#BFDBFE",
    "questionCount": 4
  },
  {
    "id": "skill_lkg_e_f_3",
    "code": "F.3",
    "categoryCode": "BE",
    "categoryTitle": "Beginning and ending sounds",
    "area": "Reading foundations",
    "title": "Which two words end with the same sound?",
    "titleHindi": "कौन से दो शब्द समान ध्वनि पर समाप्त होते हैं?",
    "icon": "🔚",
    "color": "#EFF6FF",
    "borderColor": "#BFDBFE",
    "questionCount": 4
  },
  {
    "id": "skill_lkg_e_g_1",
    "code": "G.1",
    "categoryCode": "LS",
    "categoryTitle": "Letter-sound associations: uppercase",
    "area": "Reading foundations",
    "title": "Choose the letter that matches the consonant sound: B, D, J, K, P, T, V, Z",
    "titleHindi": "व्यंजन ध्वनि से मिलता बड़ा अक्षर चुनें (B, D, J, K, P, T, V, Z)",
    "icon": "🔤",
    "color": "#EFF6FF",
    "borderColor": "#BFDBFE",
    "questionCount": 4
  },
  {
    "id": "skill_lkg_e_g_2",
    "code": "G.2",
    "categoryCode": "LS",
    "categoryTitle": "Letter-sound associations: uppercase",
    "area": "Reading foundations",
    "title": "Choose the letter that matches the consonant sound: F, L, M, N, R, S",
    "titleHindi": "व्यंजन ध्वनि से मिलता बड़ा अक्षर चुनें (F, L, M, N, R, S)",
    "icon": "🔤",
    "color": "#EFF6FF",
    "borderColor": "#BFDBFE",
    "questionCount": 4
  },
  {
    "id": "skill_lkg_e_g_3",
    "code": "G.3",
    "categoryCode": "LS",
    "categoryTitle": "Letter-sound associations: uppercase",
    "area": "Reading foundations",
    "title": "Choose the letter that matches the consonant sound: C, G, H, W",
    "titleHindi": "व्यंजन ध्वनि से मिलता बड़ा अक्षर चुनें (C, G, H, W)",
    "icon": "🔤",
    "color": "#EFF6FF",
    "borderColor": "#BFDBFE",
    "questionCount": 4
  },
  {
    "id": "skill_lkg_e_g_4",
    "code": "G.4",
    "categoryCode": "LS",
    "categoryTitle": "Letter-sound associations: uppercase",
    "area": "Reading foundations",
    "title": "Choose the uppercase letter that matches the consonant sound: review",
    "titleHindi": "व्यंजन ध्वनि समीक्षा: बड़ा अक्षर चुनें",
    "icon": "⭐",
    "color": "#EFF6FF",
    "borderColor": "#BFDBFE",
    "questionCount": 4
  },
  {
    "id": "skill_lkg_e_h_1",
    "code": "H.1",
    "categoryCode": "LSL",
    "categoryTitle": "Letter-sound associations: lowercase",
    "area": "Reading foundations",
    "title": "Find the word that begins with a given sound",
    "titleHindi": "दी गई ध्वनि से शुरू होने वाला शब्द खोजें",
    "icon": "🔊",
    "color": "#EFF6FF",
    "borderColor": "#BFDBFE",
    "questionCount": 4
  },
  {
    "id": "skill_lkg_e_h_2",
    "code": "H.2",
    "categoryCode": "LSL",
    "categoryTitle": "Letter-sound associations: lowercase",
    "area": "Reading foundations",
    "title": "Choose the letter that matches the consonant sound: b, d, j, k, p, t, v, z",
    "titleHindi": "व्यंजन ध्वनि से मिलता छोटा अक्षर चुनें (b, d, j, k, p, t, v, z)",
    "icon": "🔡",
    "color": "#EFF6FF",
    "borderColor": "#BFDBFE",
    "questionCount": 4
  },
  {
    "id": "skill_lkg_e_h_3",
    "code": "H.3",
    "categoryCode": "LSL",
    "categoryTitle": "Letter-sound associations: lowercase",
    "area": "Reading foundations",
    "title": "Choose the letter that matches the consonant sound: f, l, m, n, r, s",
    "titleHindi": "व्यंजन ध्वनि से मिलता छोटा अक्षर चुनें (f, l, m, n, r, s)",
    "icon": "🔡",
    "color": "#EFF6FF",
    "borderColor": "#BFDBFE",
    "questionCount": 4
  },
  {
    "id": "skill_lkg_e_h_4",
    "code": "H.4",
    "categoryCode": "LSL",
    "categoryTitle": "Letter-sound associations: lowercase",
    "area": "Reading foundations",
    "title": "Choose the letter that matches the consonant sound: c, g, h, w",
    "titleHindi": "व्यंजन ध्वनि से मिलता छोटा अक्षर चुनें (c, g, h, w)",
    "icon": "🔡",
    "color": "#EFF6FF",
    "borderColor": "#BFDBFE",
    "questionCount": 4
  },
  {
    "id": "skill_lkg_e_h_5",
    "code": "H.5",
    "categoryCode": "LSL",
    "categoryTitle": "Letter-sound associations: lowercase",
    "area": "Reading foundations",
    "title": "Choose the lowercase letter that matches the consonant sound: review",
    "titleHindi": "व्यंजन ध्वनि समीक्षा: छोटा अक्षर चुनें",
    "icon": "🌟",
    "color": "#EFF6FF",
    "borderColor": "#BFDBFE",
    "questionCount": 4
  },
  {
    "id": "skill_lkg_e_i_1",
    "code": "I.1",
    "categoryCode": "SA",
    "categoryTitle": "Short a",
    "area": "Reading foundations",
    "title": "Find the short a word",
    "titleHindi": "Short 'a' ध्वनि वाला शब्द पहचानें",
    "icon": "🍎",
    "color": "#EFF6FF",
    "borderColor": "#BFDBFE",
    "questionCount": 4
  },
  {
    "id": "skill_lkg_e_i_2",
    "code": "I.2",
    "categoryCode": "SA",
    "categoryTitle": "Short a",
    "area": "Reading foundations",
    "title": "Choose the short a word that matches the picture: lowercase",
    "titleHindi": "चित्र से मिलता short 'a' शब्द चुनें",
    "icon": "👒",
    "color": "#EFF6FF",
    "borderColor": "#BFDBFE",
    "questionCount": 4
  },
  {
    "id": "skill_lkg_e_j_1",
    "code": "J.1",
    "categoryCode": "SE",
    "categoryTitle": "Short e",
    "area": "Reading foundations",
    "title": "Find the short e word",
    "titleHindi": "Short 'e' ध्वनि वाला शब्द पहचानें",
    "icon": "🥚",
    "color": "#EFF6FF",
    "borderColor": "#BFDBFE",
    "questionCount": 4
  },
  {
    "id": "skill_lkg_e_j_2",
    "code": "J.2",
    "categoryCode": "SE",
    "categoryTitle": "Short e",
    "area": "Reading foundations",
    "title": "Choose the picture that matches the short e word: lowercase",
    "titleHindi": "चित्र पहचानें जो short 'e' शब्द से मेल खाता है",
    "icon": "🔴",
    "color": "#EFF6FF",
    "borderColor": "#BFDBFE",
    "questionCount": 4
  },
  {
    "id": "skill_lkg_e_k_1",
    "code": "K.1",
    "categoryCode": "SI",
    "categoryTitle": "Short i",
    "area": "Reading foundations",
    "title": "Find the short i word",
    "titleHindi": "Short 'i' ध्वनि वाला शब्द पहचानें",
    "icon": "🧊",
    "color": "#EFF6FF",
    "borderColor": "#BFDBFE",
    "questionCount": 4
  },
  {
    "id": "skill_lkg_e_k_2",
    "code": "K.2",
    "categoryCode": "SI",
    "categoryTitle": "Short i",
    "area": "Reading foundations",
    "title": "Choose the short i word that matches the picture: lowercase",
    "titleHindi": "चित्र से मिलता short 'i' शब्द चुनें",
    "icon": "🐟",
    "color": "#EFF6FF",
    "borderColor": "#BFDBFE",
    "questionCount": 4
  },
  {
    "id": "skill_lkg_e_l_1",
    "code": "L.1",
    "categoryCode": "SO",
    "categoryTitle": "Short o",
    "area": "Reading foundations",
    "title": "Find the short o word",
    "titleHindi": "Short 'o' ध्वनि वाला शब्द पहचानें",
    "icon": "🐙",
    "color": "#EFF6FF",
    "borderColor": "#BFDBFE",
    "questionCount": 4
  },
  {
    "id": "skill_lkg_e_l_2",
    "code": "L.2",
    "categoryCode": "SO",
    "categoryTitle": "Short o",
    "area": "Reading foundations",
    "title": "Choose the short o word that matches the picture: lowercase",
    "titleHindi": "चित्र से मिलता short 'o' शब्द चुनें",
    "icon": "🦊",
    "color": "#EFF6FF",
    "borderColor": "#BFDBFE",
    "questionCount": 4
  },
  {
    "id": "skill_lkg_e_m_1",
    "code": "M.1",
    "categoryCode": "SU",
    "categoryTitle": "Short u",
    "area": "Reading foundations",
    "title": "Find the short u word",
    "titleHindi": "Short 'u' ध्वनि वाला शब्द पहचानें",
    "icon": "☂️",
    "color": "#EFF6FF",
    "borderColor": "#BFDBFE",
    "questionCount": 4
  },
  {
    "id": "skill_lkg_e_m_2",
    "code": "M.2",
    "categoryCode": "SU",
    "categoryTitle": "Short u",
    "area": "Reading foundations",
    "title": "Choose the picture that matches the short u word: lowercase",
    "titleHindi": "चित्र से मिलता short 'u' शब्द चुनें",
    "icon": "☕",
    "color": "#EFF6FF",
    "borderColor": "#BFDBFE",
    "questionCount": 4
  },
  {
    "id": "skill_lkg_e_n_1",
    "code": "N.1",
    "categoryCode": "SW",
    "categoryTitle": "Sight words",
    "area": "Reading foundations",
    "title": "Choose the two sight words that are the same",
    "titleHindi": "दो समान sight words पहचानें",
    "icon": "👁️",
    "color": "#EFF6FF",
    "borderColor": "#BFDBFE",
    "questionCount": 4
  },
  {
    "id": "skill_lkg_e_n_2",
    "code": "N.2",
    "categoryCode": "SW",
    "categoryTitle": "Sight words",
    "area": "Reading foundations",
    "title": "Read sight words set 1: a, in, run, the, you",
    "titleHindi": "Sight words सेट 1 पढ़ें (a, in, run, the, you)",
    "icon": "📖",
    "color": "#EFF6FF",
    "borderColor": "#BFDBFE",
    "questionCount": 4
  },
  {
    "id": "skill_lkg_e_n_3",
    "code": "N.3",
    "categoryCode": "SW",
    "categoryTitle": "Sight words",
    "area": "Reading foundations",
    "title": "Read sight words set 2: and, had, is, let, to",
    "titleHindi": "Sight words सेट 2 पढ़ें (and, had, is, let, to)",
    "icon": "📖",
    "color": "#EFF6FF",
    "borderColor": "#BFDBFE",
    "questionCount": 4
  },
  {
    "id": "skill_lkg_e_n_4",
    "code": "N.4",
    "categoryCode": "SW",
    "categoryTitle": "Sight words",
    "area": "Reading foundations",
    "title": "Read sight words set 3: at, for, I, one, said",
    "titleHindi": "Sight words सेट 3 पढ़ें (at, for, I, one, said)",
    "icon": "📖",
    "color": "#EFF6FF",
    "borderColor": "#BFDBFE",
    "questionCount": 4
  },
  {
    "id": "skill_lkg_e_n_5",
    "code": "N.5",
    "categoryCode": "SW",
    "categoryTitle": "Sight words",
    "area": "Reading foundations",
    "title": "Read sight words: review sets 1, 2, 3",
    "titleHindi": "Sight words समीक्षा (सेट 1, 2, 3)",
    "icon": "⭐",
    "color": "#EFF6FF",
    "borderColor": "#BFDBFE",
    "questionCount": 4
  },
  {
    "id": "skill_lkg_e_n_6",
    "code": "N.6",
    "categoryCode": "SW",
    "categoryTitle": "Sight words",
    "area": "Reading foundations",
    "title": "Read sight words set 4: can, it, not, up, yes",
    "titleHindi": "Sight words सेट 4 पढ़ें (can, it, not, up, yes)",
    "icon": "📖",
    "color": "#EFF6FF",
    "borderColor": "#BFDBFE",
    "questionCount": 4
  },
  {
    "id": "skill_lkg_e_n_7",
    "code": "N.7",
    "categoryCode": "SW",
    "categoryTitle": "Sight words",
    "area": "Reading foundations",
    "title": "Read sight words set 5: an, do, jump, look, make",
    "titleHindi": "Sight words सेट 5 पढ़ें (an, do, jump, look, make)",
    "icon": "📖",
    "color": "#EFF6FF",
    "borderColor": "#BFDBFE",
    "questionCount": 4
  },
  {
    "id": "skill_lkg_e_n_8",
    "code": "N.8",
    "categoryCode": "SW",
    "categoryTitle": "Sight words",
    "area": "Reading foundations",
    "title": "Read sight words set 6: down, go, out, so, two",
    "titleHindi": "Sight words सेट 6 पढ़ें (down, go, out, so, two)",
    "icon": "📖",
    "color": "#EFF6FF",
    "borderColor": "#BFDBFE",
    "questionCount": 4
  },
  {
    "id": "skill_lkg_e_n_9",
    "code": "N.9",
    "categoryCode": "SW",
    "categoryTitle": "Sight words",
    "area": "Reading foundations",
    "title": "Read sight words: review sets 4, 5, 6",
    "titleHindi": "Sight words समीक्षा (सेट 4, 5, 6)",
    "icon": "⭐",
    "color": "#EFF6FF",
    "borderColor": "#BFDBFE",
    "questionCount": 4
  },
  {
    "id": "skill_lkg_e_n_10",
    "code": "N.10",
    "categoryCode": "SW",
    "categoryTitle": "Sight words",
    "area": "Reading foundations",
    "title": "Read sight words set 7: find, my, no, red, see",
    "titleHindi": "Sight words सेट 7 पढ़ें (find, my, no, red, see)",
    "icon": "📖",
    "color": "#EFF6FF",
    "borderColor": "#BFDBFE",
    "questionCount": 4
  },
  {
    "id": "skill_lkg_e_n_11",
    "code": "N.11",
    "categoryCode": "SW",
    "categoryTitle": "Sight words",
    "area": "Reading foundations",
    "title": "Read sight words set 8: come, funny, little, me, sit",
    "titleHindi": "Sight words सेट 8 पढ़ें (come, funny, little, me, sit)",
    "icon": "📖",
    "color": "#EFF6FF",
    "borderColor": "#BFDBFE",
    "questionCount": 4
  },
  {
    "id": "skill_lkg_e_n_12",
    "code": "N.12",
    "categoryCode": "SW",
    "categoryTitle": "Sight words",
    "area": "Reading foundations",
    "title": "Read sight words set 9: big, help, play, three, yellow",
    "titleHindi": "Sight words सेट 9 पढ़ें (big, help, play, three, yellow)",
    "icon": "📖",
    "color": "#EFF6FF",
    "borderColor": "#BFDBFE",
    "questionCount": 4
  },
  {
    "id": "skill_lkg_e_n_13",
    "code": "N.13",
    "categoryCode": "SW",
    "categoryTitle": "Sight words",
    "area": "Reading foundations",
    "title": "Read sight words set 10: away, blue, here, us, where",
    "titleHindi": "Sight words सेट 10 पढ़ें (away, blue, here, us, where)",
    "icon": "📖",
    "color": "#EFF6FF",
    "borderColor": "#BFDBFE",
    "questionCount": 4
  },
  {
    "id": "skill_lkg_e_n_14",
    "code": "N.14",
    "categoryCode": "SW",
    "categoryTitle": "Sight words",
    "area": "Reading foundations",
    "title": "Read sight words: review sets 7, 8, 9, 10",
    "titleHindi": "Sight words समीक्षा (सेट 7, 8, 9, 10)",
    "icon": "⭐",
    "color": "#EFF6FF",
    "borderColor": "#BFDBFE",
    "questionCount": 4
  },
  {
    "id": "skill_lkg_e_n_15",
    "code": "N.15",
    "categoryCode": "SW",
    "categoryTitle": "Sight words",
    "area": "Reading foundations",
    "title": "Read sight words: review sets 1-10",
    "titleHindi": "Sight words महा-समीक्षा (सेट 1-10)",
    "icon": "🏆",
    "color": "#EFF6FF",
    "borderColor": "#BFDBFE",
    "questionCount": 4
  },
  {
    "id": "skill_lkg_e_o_1",
    "code": "O.1",
    "categoryCode": "TF",
    "categoryTitle": "Text features",
    "area": "Reading strategies",
    "title": "Identify book parts and features",
    "titleHindi": "किताब के मुख्य अंग पहचानें",
    "icon": "📖",
    "color": "#F0FDF4",
    "borderColor": "#BBF7D0",
    "questionCount": 4
  },
  {
    "id": "skill_lkg_e_p_1",
    "code": "P.1",
    "categoryCode": "RF",
    "categoryTitle": "Reality vs fiction",
    "area": "Reading strategies",
    "title": "Which could happen in real life?",
    "titleHindi": "वास्तविक जीवन में क्या सच हो सकता है?",
    "icon": "🪄",
    "color": "#F0FDF4",
    "borderColor": "#BBF7D0",
    "questionCount": 4
  },
  {
    "id": "skill_lkg_e_q_1",
    "code": "Q.1",
    "categoryCode": "IA",
    "categoryTitle": "Inference and analysis",
    "area": "Reading strategies",
    "title": "Which feeling matches the picture?",
    "titleHindi": "चित्र से मिलता सही भाव (Emotion) चुनें",
    "icon": "🎭",
    "color": "#F0FDF4",
    "borderColor": "#BBF7D0",
    "questionCount": 4
  },
  {
    "id": "skill_lkg_e_q_2",
    "code": "Q.2",
    "categoryCode": "IA",
    "categoryTitle": "Inference and analysis",
    "area": "Reading strategies",
    "title": "What will happen next?",
    "titleHindi": "आगे क्या होगा? (Prediction)",
    "icon": "🔮",
    "color": "#F0FDF4",
    "borderColor": "#BBF7D0",
    "questionCount": 4
  },
  {
    "id": "skill_lkg_e_r_1",
    "code": "R.1",
    "categoryCode": "CN",
    "categoryTitle": "Colour and number words",
    "area": "Vocabulary",
    "title": "Use colour words",
    "titleHindi": "रंगों के नाम पहचानें",
    "icon": "🎨",
    "color": "#FEF3C7",
    "borderColor": "#FDE68A",
    "questionCount": 4
  },
  {
    "id": "skill_lkg_e_r_2",
    "code": "R.2",
    "categoryCode": "CN",
    "categoryTitle": "Colour and number words",
    "area": "Vocabulary",
    "title": "Use number words: one to five",
    "titleHindi": "संख्या शब्द: एक से पांच (1 to 5)",
    "icon": "🖐️",
    "color": "#FEF3C7",
    "borderColor": "#FDE68A",
    "questionCount": 4
  },
  {
    "id": "skill_lkg_e_r_3",
    "code": "R.3",
    "categoryCode": "CN",
    "categoryTitle": "Colour and number words",
    "area": "Vocabulary",
    "title": "Use number words: six to ten",
    "titleHindi": "संख्या शब्द: छह से दस (6 to 10)",
    "icon": "🔟",
    "color": "#FEF3C7",
    "borderColor": "#FDE68A",
    "questionCount": 4
  },
  {
    "id": "skill_lkg_e_r_4",
    "code": "R.4",
    "categoryCode": "CN",
    "categoryTitle": "Colour and number words",
    "area": "Vocabulary",
    "title": "Use number words: one to ten",
    "titleHindi": "संख्या शब्द: एक से दस समीक्षा (1 to 10)",
    "icon": "🔢",
    "color": "#FEF3C7",
    "borderColor": "#FDE68A",
    "questionCount": 4
  },
  {
    "id": "skill_lkg_e_s_1",
    "code": "S.1",
    "categoryCode": "NO",
    "categoryTitle": "Nouns",
    "area": "Vocabulary",
    "title": "Choose the singular or plural noun that matches the picture",
    "titleHindi": "एकवचन या बहुवचन संज्ञा चुनें (One or Many)",
    "icon": "📦",
    "color": "#FEF3C7",
    "borderColor": "#FDE68A",
    "questionCount": 4
  },
  {
    "id": "skill_lkg_e_t_1",
    "code": "T.1",
    "categoryCode": "VE",
    "categoryTitle": "Verbs",
    "area": "Vocabulary",
    "title": "Find the picture that matches the action verb",
    "titleHindi": "क्रिया (Action Verb) से मिलता चित्र पहचानें",
    "icon": "🏃",
    "color": "#FEF3C7",
    "borderColor": "#FDE68A",
    "questionCount": 4
  },
  {
    "id": "skill_lkg_e_u_1",
    "code": "U.1",
    "categoryCode": "AD",
    "categoryTitle": "Adjectives",
    "area": "Vocabulary",
    "title": "Compare pictures using adjectives",
    "titleHindi": "विशेषण (Adjective) से चित्रों की तुलना करें",
    "icon": "📏",
    "color": "#FEF3C7",
    "borderColor": "#FDE68A",
    "questionCount": 4
  },
  {
    "id": "skill_lkg_e_v_1",
    "code": "V.1",
    "categoryCode": "LW",
    "categoryTitle": "Location words",
    "area": "Vocabulary",
    "title": "Inside and outside",
    "titleHindi": "अंदर और बाहर (Inside / Outside)",
    "icon": "🚪",
    "color": "#FEF3C7",
    "borderColor": "#FDE68A",
    "questionCount": 4
  },
  {
    "id": "skill_lkg_e_v_2",
    "code": "V.2",
    "categoryCode": "LW",
    "categoryTitle": "Location words",
    "area": "Vocabulary",
    "title": "Above and below",
    "titleHindi": "ऊपर और नीचे (Above / Below)",
    "icon": "↕️",
    "color": "#FEF3C7",
    "borderColor": "#FDE68A",
    "questionCount": 4
  },
  {
    "id": "skill_lkg_e_v_3",
    "code": "V.3",
    "categoryCode": "LW",
    "categoryTitle": "Location words",
    "area": "Vocabulary",
    "title": "Next to and beside",
    "titleHindi": "पास और बगल में (Next to / Beside)",
    "icon": "👥",
    "color": "#FEF3C7",
    "borderColor": "#FDE68A",
    "questionCount": 4
  },
  {
    "id": "skill_lkg_e_w_1",
    "code": "W.1",
    "categoryCode": "AN",
    "categoryTitle": "Antonyms",
    "area": "Vocabulary",
    "title": "Match antonyms to pictures",
    "titleHindi": "विलोम शब्द (Opposites) चित्रों से मिलाएं",
    "icon": "⚖️",
    "color": "#FEF3C7",
    "borderColor": "#FDE68A",
    "questionCount": 4
  },
  {
    "id": "skill_lkg_e_x_1",
    "code": "X.1",
    "categoryCode": "CT",
    "categoryTitle": "Categories",
    "area": "Vocabulary",
    "title": "Sort objects into categories",
    "titleHindi": "वस्तुओं को सही श्रेणी में बांटें (Category Sorting)",
    "icon": "🧺",
    "color": "#FEF3C7",
    "borderColor": "#FDE68A",
    "questionCount": 4
  },
  {
    "id": "skill_lkg_e_x_2",
    "code": "X.2",
    "categoryCode": "CT",
    "categoryTitle": "Categories",
    "area": "Vocabulary",
    "title": "Which one is not like the others?",
    "titleHindi": "विषम चुनें (Odd One Out)",
    "icon": "🔍",
    "color": "#FEF3C7",
    "borderColor": "#FDE68A",
    "questionCount": 4
  }
];

export const LKG_ENGLISH_ALL_QUESTIONS: Question[] = [
  {
    "id": "lkg_skill_a_1_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "A.1: Find the letter in the alphabet: uppercase",
    "concept": "Letter identification (A.1)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Look at the sweet red Apple 🍎. Which BIG (uppercase) letter does it begin with?",
    "visualEmoji": "🍎 🔤",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "A",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "a",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "o",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Apple begins with the letter A! The big uppercase form is 'A'.",
    "points": 10
  },
  {
    "id": "lkg_skill_a_1_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "A.1: Find the letter in the alphabet: uppercase",
    "concept": "Letter identification (A.1)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Look at the bouncing Ball ⚽. Which BIG (uppercase) letter does it begin with?",
    "visualEmoji": "⚽ 🔤",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "B",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "d",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "p",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Ball starts with B! The capital B has a tall straight spine and two round bumps.",
    "points": 10
  },
  {
    "id": "lkg_skill_a_1_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "A.1: Find the letter in the alphabet: uppercase",
    "concept": "Letter identification (A.1)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at the sweet Mango 🥭. Which BIG (uppercase) letter does it begin with?",
    "visualEmoji": "🥭 🔤",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "M",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "m",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "w",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Mango starts with M! Capital M has two tall poles with two slanting lines meeting in the middle.",
    "points": 10
  },
  {
    "id": "lkg_skill_a_1_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "A.1: Find the letter in the alphabet: uppercase",
    "concept": "Letter identification (A.1)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Look at the bright Sun ☀️. Which BIG (uppercase) letter does it begin with?",
    "visualEmoji": "☀️ 🔤",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "S",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "s",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "z",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Sun starts with S! Big capital S curves gracefully like a snake.",
    "points": 10
  },
  {
    "id": "lkg_skill_a_2_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "A.2: Find the letter in the alphabet: lowercase",
    "concept": "Letter identification (A.2)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Look at the busy little Ant 🐜. Which SMALL (lowercase) letter does it begin with?",
    "visualEmoji": "🐜 🔡",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "a",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "A",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "c",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Ant begins with 'a'! Small lowercase 'a' has a round circle and a small stick.",
    "points": 10
  },
  {
    "id": "lkg_skill_a_2_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "A.2: Find the letter in the alphabet: lowercase",
    "concept": "Letter identification (A.2)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Look at the buzzing Bee 🐝. Which SMALL (lowercase) letter does it begin with?",
    "visualEmoji": "🐝 🔡",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "b",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "B",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "d",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Bee begins with 'b'! Small lowercase 'b' has a tall stick with its round belly facing right.",
    "points": 10
  },
  {
    "id": "lkg_skill_a_2_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "A.2: Find the letter in the alphabet: lowercase",
    "concept": "Letter identification (A.2)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at the cute Monkey 🐒. Which SMALL (lowercase) letter does it begin with?",
    "visualEmoji": "🐒 🔡",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "m",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "M",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "n",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Monkey begins with 'm'! Small lowercase 'm' has two curvy hops.",
    "points": 10
  },
  {
    "id": "lkg_skill_a_2_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "A.2: Find the letter in the alphabet: lowercase",
    "concept": "Letter identification (A.2)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Look at the slithering Snake 🐍. Which SMALL (lowercase) letter does it begin with?",
    "visualEmoji": "🐍 🔡",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "s",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "S",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "c",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Snake begins with 's'! Small 's' is the lowercase partner of big 'S'.",
    "points": 10
  },
  {
    "id": "lkg_skill_a_3_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "A.3: Choose the letter that you hear: uppercase",
    "concept": "Letter identification (A.3)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Listen to the letter sound: 'D' (as in Drum 🥁). Which BIG letter is it?",
    "visualEmoji": "🥁 🔤",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "D",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "B",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "P",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Capital D has one straight line and one big curved belly!",
    "points": 10
  },
  {
    "id": "lkg_skill_a_3_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "A.3: Choose the letter that you hear: uppercase",
    "concept": "Letter identification (A.3)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Listen to the letter sound: 'K' (as in Kite 🪁). Which BIG letter is it?",
    "visualEmoji": "🪁 🔤",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "K",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "H",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "L",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Capital K has a tall stick with kicking arms!",
    "points": 10
  },
  {
    "id": "lkg_skill_a_3_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "A.3: Choose the letter that you hear: uppercase",
    "concept": "Letter identification (A.3)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Listen to the letter sound: 'T' (as in Tiger 🐯). Which BIG letter is it?",
    "visualEmoji": "🐯 🔤",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "T",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "I",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "F",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Capital T has a tall pole with a flat roof on top!",
    "points": 10
  },
  {
    "id": "lkg_skill_a_3_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "A.3: Choose the letter that you hear: uppercase",
    "concept": "Letter identification (A.3)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Listen to the letter sound: 'Z' (as in Zebra 🦓). Which BIG letter is it?",
    "visualEmoji": "🦓 🔤",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "Z",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "S",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "N",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Capital Z zigs across, zags down, and zigs across the bottom!",
    "points": 10
  },
  {
    "id": "lkg_skill_a_4_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "A.4: Choose the letter that you hear: lowercase",
    "concept": "Letter identification (A.4)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Listen to the sound: small 'e' (as in Elephant 🐘). Which SMALL letter is it?",
    "visualEmoji": "🐘 🔡",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "e",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "c",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "o",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Small 'e' has an eye inside its round loop!",
    "points": 10
  },
  {
    "id": "lkg_skill_a_4_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "A.4: Choose the letter that you hear: lowercase",
    "concept": "Letter identification (A.4)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Listen to the sound: small 'g' (as in Grapes 🍇). Which SMALL letter is it?",
    "visualEmoji": "🍇 🔡",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "g",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "q",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "p",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Small 'g' has a round head and curves its tail like a fishhook!",
    "points": 10
  },
  {
    "id": "lkg_skill_a_4_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "A.4: Choose the letter that you hear: lowercase",
    "concept": "Letter identification (A.4)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Listen to the sound: small 'h' (as in Hat 👒). Which SMALL letter is it?",
    "visualEmoji": "👒 🔡",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "h",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "n",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "b",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Small 'h' has a tall chimney and a single arch.",
    "points": 10
  },
  {
    "id": "lkg_skill_a_4_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "A.4: Choose the letter that you hear: lowercase",
    "concept": "Letter identification (A.4)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Listen to the sound: small 'r' (as in Rabbit 🐰). Which SMALL letter is it?",
    "visualEmoji": "🐰 🔡",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "r",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "v",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "n",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Small 'r' goes down, up, and hooks over like a little branch.",
    "points": 10
  },
  {
    "id": "lkg_skill_a_5_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "A.5: Frequently confused letters: find the letter",
    "concept": "Letter identification (A.5)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "A bat and ball ⚽: Which letter has its round belly on the RIGHT (👉)?",
    "visualEmoji": "⚽ 🔍",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "b",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "d",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "p",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Lowercase 'b' has its round belly facing right (bat hits the ball 👉)!",
    "points": 10
  },
  {
    "id": "lkg_skill_a_5_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "A.5: Frequently confused letters: find the letter",
    "concept": "Letter identification (A.5)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "A waddling duck 🦆: Which letter has its round tummy on the LEFT (👈) with a tall stick on the right?",
    "visualEmoji": "🦆 🔍",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "d",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "b",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "q",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Lowercase 'd' has its round tummy facing left (duck follows its tummy 👈)!",
    "points": 10
  },
  {
    "id": "lkg_skill_a_5_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "A.5: Frequently confused letters: find the letter",
    "concept": "Letter identification (A.5)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "A playful puppy 🐶: Which letter hangs its tail BELOW the line on the left, with its round head on the right (👉)?",
    "visualEmoji": "🐶 🔍",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "p",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "q",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "d",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Lowercase 'p' has a straight drop line with the loop on the right top!",
    "points": 10
  },
  {
    "id": "lkg_skill_a_5_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "A.5: Frequently confused letters: find the letter",
    "concept": "Letter identification (A.5)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "A royal queen 👑: Which letter has its round head on the LEFT (👈) and hangs its tail down on the right?",
    "visualEmoji": "👑 🔍",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "q",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "p",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "b",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Lowercase 'q' has the circle on the left and stick on the right dropping below the line!",
    "points": 10
  },
  {
    "id": "lkg_skill_a_6_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "A.6: Frequently confused letters: find all the letters",
    "concept": "Letter identification (A.6)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at the letters: 'd, b, d, p'. Which letter appears TWICE?",
    "visualEmoji": "🎯 🔍",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "d",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "b",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "p",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The letter 'd' is shown two times!",
    "points": 10
  },
  {
    "id": "lkg_skill_a_6_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "A.6: Frequently confused letters: find all the letters",
    "concept": "Letter identification (A.6)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at the letters: 'p, q, p, b'. Which letter appears TWICE?",
    "visualEmoji": "🎯 🔍",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "p",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "q",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "b",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The letter 'p' is shown two times!",
    "points": 10
  },
  {
    "id": "lkg_skill_a_6_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "A.6: Frequently confused letters: find all the letters",
    "concept": "Letter identification (A.6)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Look at the letters: 'm, n, m, u'. Which letter appears TWICE?",
    "visualEmoji": "🎯 🔍",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "m",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "n",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "u",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The letter 'm' with two arches is shown twice!",
    "points": 10
  },
  {
    "id": "lkg_skill_a_6_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "A.6: Frequently confused letters: find all the letters",
    "concept": "Letter identification (A.6)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Which of these letter groups contains ONLY lowercase 'b'?",
    "visualEmoji": "🎯 🔍",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "b, b, b",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "b, d, b",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "d, d, d",
          "isCorrect": false
        }
      ]
    },
    "explanation": "'b, b, b' has only lowercase 'b' letters!",
    "points": 10
  },
  {
    "id": "lkg_skill_b_1_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "B.1: Choose the lowercase letter that matches: c, k, o, p, s, u, v, w, x, z",
    "concept": "Lowercase and uppercase letters (B.1)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Look at uppercase 'C'. Which small letter is its lowercase partner?",
    "visualEmoji": "🔀 🔡",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "c",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "e",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "o",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Uppercase C and lowercase c share the same round curved shape!",
    "points": 10
  },
  {
    "id": "lkg_skill_b_1_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "B.1: Choose the lowercase letter that matches: c, k, o, p, s, u, v, w, x, z",
    "concept": "Lowercase and uppercase letters (B.1)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Look at uppercase 'O'. Which small letter is its lowercase partner?",
    "visualEmoji": "🔀 🔡",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "o",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "c",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "u",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Uppercase O and lowercase o are both complete circles!",
    "points": 10
  },
  {
    "id": "lkg_skill_b_1_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "B.1: Choose the lowercase letter that matches: c, k, o, p, s, u, v, w, x, z",
    "concept": "Lowercase and uppercase letters (B.1)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at uppercase 'S'. Which small letter is its lowercase partner?",
    "visualEmoji": "🔀 🔡",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "s",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "z",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "c",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Uppercase S and lowercase s both curve like a friendly snake!",
    "points": 10
  },
  {
    "id": "lkg_skill_b_1_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "B.1: Choose the lowercase letter that matches: c, k, o, p, s, u, v, w, x, z",
    "concept": "Lowercase and uppercase letters (B.1)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Look at uppercase 'K'. Which small letter is its lowercase partner?",
    "visualEmoji": "🔀 🔡",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "k",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "h",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "l",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Uppercase K and lowercase k both have a tall stick and kicking legs!",
    "points": 10
  },
  {
    "id": "lkg_skill_b_2_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "B.2: Choose the lowercase letter that matches: f, i, j, l, m, t, y",
    "concept": "Lowercase and uppercase letters (B.2)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Look at uppercase 'M'. Which small letter is its lowercase partner?",
    "visualEmoji": "🔀 🔡",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "m",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "n",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "w",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Capital M matches lowercase m!",
    "points": 10
  },
  {
    "id": "lkg_skill_b_2_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "B.2: Choose the lowercase letter that matches: f, i, j, l, m, t, y",
    "concept": "Lowercase and uppercase letters (B.2)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Look at uppercase 'Y'. Which small letter is its lowercase partner?",
    "visualEmoji": "🔀 🔡",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "y",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "v",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "u",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Capital Y matches lowercase y with its tail dropping below the line.",
    "points": 10
  },
  {
    "id": "lkg_skill_b_2_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "B.2: Choose the lowercase letter that matches: f, i, j, l, m, t, y",
    "concept": "Lowercase and uppercase letters (B.2)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at uppercase 'F'. Which small letter is its lowercase partner?",
    "visualEmoji": "🔀 🔡",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "f",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "t",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "l",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Capital F matches lowercase f with its curved hood!",
    "points": 10
  },
  {
    "id": "lkg_skill_b_2_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "B.2: Choose the lowercase letter that matches: f, i, j, l, m, t, y",
    "concept": "Lowercase and uppercase letters (B.2)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Look at uppercase 'T'. Which small letter is its lowercase partner?",
    "visualEmoji": "🔀 🔡",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "t",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "f",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "l",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Capital T matches lowercase t with its crossbar!",
    "points": 10
  },
  {
    "id": "lkg_skill_b_3_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "B.3: Choose the lowercase letter that matches: a, b, d, e, g, h, n, q, r",
    "concept": "Lowercase and uppercase letters (B.3)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Look at uppercase 'A'. Which small letter is its lowercase partner?",
    "visualEmoji": "🔀 🔡",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "a",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "o",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "d",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Big 'A' matches small 'a'!",
    "points": 10
  },
  {
    "id": "lkg_skill_b_3_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "B.3: Choose the lowercase letter that matches: a, b, d, e, g, h, n, q, r",
    "concept": "Lowercase and uppercase letters (B.3)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Look at uppercase 'G'. Which small letter is its lowercase partner?",
    "visualEmoji": "🔀 🔡",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "g",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "q",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "p",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Big 'G' matches small 'g'!",
    "points": 10
  },
  {
    "id": "lkg_skill_b_3_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "B.3: Choose the lowercase letter that matches: a, b, d, e, g, h, n, q, r",
    "concept": "Lowercase and uppercase letters (B.3)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at uppercase 'H'. Which small letter is its lowercase partner?",
    "visualEmoji": "🔀 🔡",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "h",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "n",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "b",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Big 'H' matches small 'h'!",
    "points": 10
  },
  {
    "id": "lkg_skill_b_3_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "B.3: Choose the lowercase letter that matches: a, b, d, e, g, h, n, q, r",
    "concept": "Lowercase and uppercase letters (B.3)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Look at uppercase 'R'. Which small letter is its lowercase partner?",
    "visualEmoji": "🔀 🔡",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "r",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "v",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "n",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Big 'R' matches small 'r'!",
    "points": 10
  },
  {
    "id": "lkg_skill_b_4_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "B.4: Find all the lowercase letters",
    "concept": "Lowercase and uppercase letters (B.4)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which of these is a SMALL (lowercase) letter?",
    "visualEmoji": "🔡 ✨",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "e",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "E",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "F",
          "isCorrect": false
        }
      ]
    },
    "explanation": "'e' is the small lowercase letter!",
    "points": 10
  },
  {
    "id": "lkg_skill_b_4_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "B.4: Find all the lowercase letters",
    "concept": "Lowercase and uppercase letters (B.4)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which of these is a SMALL (lowercase) letter?",
    "visualEmoji": "🔡 ✨",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "m",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "M",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "W",
          "isCorrect": false
        }
      ]
    },
    "explanation": "'m' is the small lowercase letter!",
    "points": 10
  },
  {
    "id": "lkg_skill_b_4_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "B.4: Find all the lowercase letters",
    "concept": "Lowercase and uppercase letters (B.4)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Find the SMALL (lowercase) letter in the row:",
    "visualEmoji": "🔡 ✨",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "t",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "T",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "L",
          "isCorrect": false
        }
      ]
    },
    "explanation": "'t' is the small lowercase letter!",
    "points": 10
  },
  {
    "id": "lkg_skill_b_4_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "B.4: Find all the lowercase letters",
    "concept": "Lowercase and uppercase letters (B.4)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Which group contains ONLY small (lowercase) letters?",
    "visualEmoji": "🔡 ✨",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "a, b, c",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "A, b, c",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "A, B, C",
          "isCorrect": false
        }
      ]
    },
    "explanation": "'a, b, c' are all small lowercase letters!",
    "points": 10
  },
  {
    "id": "lkg_skill_b_5_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "B.5: Choose the uppercase letter that matches: C, K, O, P, S, U, V, W, X, Z",
    "concept": "Lowercase and uppercase letters (B.5)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Look at small 'p'. Which is its BIG uppercase partner?",
    "visualEmoji": "🔤 ✨",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "P",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "B",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "D",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Small 'p' grows into big 'P'!",
    "points": 10
  },
  {
    "id": "lkg_skill_b_5_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "B.5: Choose the uppercase letter that matches: C, K, O, P, S, U, V, W, X, Z",
    "concept": "Lowercase and uppercase letters (B.5)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Look at small 'u'. Which is its BIG uppercase partner?",
    "visualEmoji": "🔤 ✨",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "U",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "V",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "W",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Small 'u' matches big 'U'!",
    "points": 10
  },
  {
    "id": "lkg_skill_b_5_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "B.5: Choose the uppercase letter that matches: C, K, O, P, S, U, V, W, X, Z",
    "concept": "Lowercase and uppercase letters (B.5)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at small 'v'. Which is its BIG uppercase partner?",
    "visualEmoji": "🔤 ✨",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "V",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "U",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "Y",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Small 'v' matches big 'V'!",
    "points": 10
  },
  {
    "id": "lkg_skill_b_5_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "B.5: Choose the uppercase letter that matches: C, K, O, P, S, U, V, W, X, Z",
    "concept": "Lowercase and uppercase letters (B.5)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Look at small 'z'. Which is its BIG uppercase partner?",
    "visualEmoji": "🔤 ✨",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "Z",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "S",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "N",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Small 'z' matches big 'Z'!",
    "points": 10
  },
  {
    "id": "lkg_skill_b_6_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "B.6: Choose the uppercase letter that matches: F, I, J, L, M, T, Y",
    "concept": "Lowercase and uppercase letters (B.6)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Look at small 'j'. Which is its BIG uppercase partner?",
    "visualEmoji": "🔤 ✨",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "J",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "I",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "L",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Small 'j' matches big 'J'!",
    "points": 10
  },
  {
    "id": "lkg_skill_b_6_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "B.6: Choose the uppercase letter that matches: F, I, J, L, M, T, Y",
    "concept": "Lowercase and uppercase letters (B.6)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Look at small 'l'. Which is its BIG uppercase partner?",
    "visualEmoji": "🔤 ✨",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "L",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "I",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "T",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Small 'l' matches big 'L'!",
    "points": 10
  },
  {
    "id": "lkg_skill_b_6_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "B.6: Choose the uppercase letter that matches: F, I, J, L, M, T, Y",
    "concept": "Lowercase and uppercase letters (B.6)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at small 'i'. Which is its BIG uppercase partner?",
    "visualEmoji": "🔤 ✨",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "I",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "L",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "J",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Small 'i' matches big 'I'!",
    "points": 10
  },
  {
    "id": "lkg_skill_b_6_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "B.6: Choose the uppercase letter that matches: F, I, J, L, M, T, Y",
    "concept": "Lowercase and uppercase letters (B.6)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Look at small 'y'. Which is its BIG uppercase partner?",
    "visualEmoji": "🔤 ✨",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "Y",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "V",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "T",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Small 'y' matches big 'Y'!",
    "points": 10
  },
  {
    "id": "lkg_skill_b_7_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "B.7: Choose the uppercase letter that matches: A, B, D, E, G, H, N, Q, R",
    "concept": "Lowercase and uppercase letters (B.7)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Look at small 'b'. Which is its BIG uppercase partner?",
    "visualEmoji": "🔤 ✨",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "B",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "D",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "P",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Small 'b' matches big 'B'!",
    "points": 10
  },
  {
    "id": "lkg_skill_b_7_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "B.7: Choose the uppercase letter that matches: A, B, D, E, G, H, N, Q, R",
    "concept": "Lowercase and uppercase letters (B.7)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Look at small 'd'. Which is its BIG uppercase partner?",
    "visualEmoji": "🔤 ✨",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "D",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "B",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "O",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Small 'd' matches big 'D'!",
    "points": 10
  },
  {
    "id": "lkg_skill_b_7_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "B.7: Choose the uppercase letter that matches: A, B, D, E, G, H, N, Q, R",
    "concept": "Lowercase and uppercase letters (B.7)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at small 'e'. Which is its BIG uppercase partner?",
    "visualEmoji": "🔤 ✨",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "E",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "F",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "C",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Small 'e' matches big 'E'!",
    "points": 10
  },
  {
    "id": "lkg_skill_b_7_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "B.7: Choose the uppercase letter that matches: A, B, D, E, G, H, N, Q, R",
    "concept": "Lowercase and uppercase letters (B.7)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Look at small 'n'. Which is its BIG uppercase partner?",
    "visualEmoji": "🔤 ✨",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "N",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "M",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "H",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Small 'n' matches big 'N'!",
    "points": 10
  },
  {
    "id": "lkg_skill_b_8_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "B.8: Find all the uppercase letters",
    "concept": "Lowercase and uppercase letters (B.8)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which of these is a BIG (uppercase) letter?",
    "visualEmoji": "🔤 🌟",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "H",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "h",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "n",
          "isCorrect": false
        }
      ]
    },
    "explanation": "'H' is the big uppercase letter!",
    "points": 10
  },
  {
    "id": "lkg_skill_b_8_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "B.8: Find all the uppercase letters",
    "concept": "Lowercase and uppercase letters (B.8)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which of these is a BIG (uppercase) letter?",
    "visualEmoji": "🔤 🌟",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "R",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "r",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "v",
          "isCorrect": false
        }
      ]
    },
    "explanation": "'R' is the big uppercase letter!",
    "points": 10
  },
  {
    "id": "lkg_skill_b_8_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "B.8: Find all the uppercase letters",
    "concept": "Lowercase and uppercase letters (B.8)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Find the BIG (uppercase) letter in the group:",
    "visualEmoji": "🔤 🌟",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "G",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "g",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "q",
          "isCorrect": false
        }
      ]
    },
    "explanation": "'G' is the big uppercase letter!",
    "points": 10
  },
  {
    "id": "lkg_skill_b_8_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "B.8: Find all the uppercase letters",
    "concept": "Lowercase and uppercase letters (B.8)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Which group contains ONLY big (uppercase) letters?",
    "visualEmoji": "🔤 🌟",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "D, E, F",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "d, e, f",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "D, e, F",
          "isCorrect": false
        }
      ]
    },
    "explanation": "'D, E, F' are all big uppercase letters!",
    "points": 10
  },
  {
    "id": "lkg_skill_c_1_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "C.1: Choose the two words that are the same",
    "concept": "Word recognition (C.1)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which pair shows the EXACT SAME word twice?",
    "visualEmoji": "🐱 👯",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "cat — cat",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "cat — bat",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "cat — mat",
          "isCorrect": false
        }
      ]
    },
    "explanation": "'cat — cat' shows the exact same word both times!",
    "points": 10
  },
  {
    "id": "lkg_skill_c_1_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "C.1: Choose the two words that are the same",
    "concept": "Word recognition (C.1)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which pair shows two identical words?",
    "visualEmoji": "☀️ 👯",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "sun — sun",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "sun — run",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "son — sun",
          "isCorrect": false
        }
      ]
    },
    "explanation": "'sun — sun' is an identical pair!",
    "points": 10
  },
  {
    "id": "lkg_skill_c_1_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "C.1: Choose the two words that are the same",
    "concept": "Word recognition (C.1)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look closely at the letters. Which pair matches exactly?",
    "visualEmoji": "🛏️ 👯",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "bed — bed",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "bed — bad",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "bed — red",
          "isCorrect": false
        }
      ]
    },
    "explanation": "'bed — bed' has identical spelling and letters!",
    "points": 10
  },
  {
    "id": "lkg_skill_c_1_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "C.1: Choose the two words that are the same",
    "concept": "Word recognition (C.1)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Find the matching word pair:",
    "visualEmoji": "🦘 👯",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "hop — hop",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "hop — mop",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "hop — top",
          "isCorrect": false
        }
      ]
    },
    "explanation": "'hop — hop' has the exact same letters!",
    "points": 10
  },
  {
    "id": "lkg_skill_c_2_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "C.2: Choose the sentence that is spaced correctly",
    "concept": "Word recognition (C.2)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which sentence has good spaces between each word?",
    "visualEmoji": "🐱 📏",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "I see a cat.",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "Iseeacat.",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "I  s  e  e  a  c  a  t.",
          "isCorrect": false
        }
      ]
    },
    "explanation": "'I see a cat.' has neat finger spaces between words!",
    "points": 10
  },
  {
    "id": "lkg_skill_c_2_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "C.2: Choose the sentence that is spaced correctly",
    "concept": "Word recognition (C.2)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Find the sentence with proper spacing:",
    "visualEmoji": "⚽ 📏",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "We can play.",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "Wecanplay.",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "We canplay.",
          "isCorrect": false
        }
      ]
    },
    "explanation": "'We can play.' separates each word clearly.",
    "points": 10
  },
  {
    "id": "lkg_skill_c_2_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "C.2: Choose the sentence that is spaced correctly",
    "concept": "Word recognition (C.2)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which sentence is spaced correctly for reading?",
    "visualEmoji": "🐕 📏",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "The dog ran.",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "Thedogran.",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "Th ed og ran.",
          "isCorrect": false
        }
      ]
    },
    "explanation": "'The dog ran.' has correct spaces between words.",
    "points": 10
  },
  {
    "id": "lkg_skill_c_2_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "C.2: Choose the sentence that is spaced correctly",
    "concept": "Word recognition (C.2)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Which sentence has clear spaces between words?",
    "visualEmoji": "👀 📏",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "Look at me.",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "Lookatme.",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "Look atme.",
          "isCorrect": false
        }
      ]
    },
    "explanation": "'Look at me.' is written with clear spaces.",
    "points": 10
  },
  {
    "id": "lkg_skill_c_3_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "C.3: Find a word in a sentence",
    "concept": "Word recognition (C.3)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "In the sentence 'The cat sat on a mat.', which word tells us WHO sat?",
    "visualEmoji": "🐱 🔍",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "cat 🐱",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "on",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "the",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The 'cat' is the animal who sat on the mat!",
    "points": 10
  },
  {
    "id": "lkg_skill_c_3_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "C.3: Find a word in a sentence",
    "concept": "Word recognition (C.3)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "In the sentence 'A big dog ran fast.', which word tells what the dog did?",
    "visualEmoji": "🐕 🏃",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "ran 🏃",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "big",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "dog",
          "isCorrect": false
        }
      ]
    },
    "explanation": "'ran' is the action word describing what the dog did!",
    "points": 10
  },
  {
    "id": "lkg_skill_c_3_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "C.3: Find a word in a sentence",
    "concept": "Word recognition (C.3)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "In the sentence 'The red car zoomed away.', which word describes the color?",
    "visualEmoji": "🚗 🔴",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "red 🔴",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "car",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "zoomed",
          "isCorrect": false
        }
      ]
    },
    "explanation": "'red' tells us the color of the car!",
    "points": 10
  },
  {
    "id": "lkg_skill_c_3_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "C.3: Find a word in a sentence",
    "concept": "Word recognition (C.3)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "In the sentence 'She has a cute puppy.', which word is at the very END of the sentence?",
    "visualEmoji": "🐶 🔍",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "puppy 🐶",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "She",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "has",
          "isCorrect": false
        }
      ]
    },
    "explanation": "'puppy' is the final word right before the full stop!",
    "points": 10
  },
  {
    "id": "lkg_skill_d_1_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "D.1: Which word has the same ending?",
    "concept": "Rhyming (D.1)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which word rhymes with BAT 🦇?",
    "visualEmoji": "🦇 🎵",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "cat 🐱",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "dog 🐶",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "pig 🐷",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Bat and Cat both end with the '-at' sound!",
    "points": 10
  },
  {
    "id": "lkg_skill_d_1_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "D.1: Which word has the same ending?",
    "concept": "Rhyming (D.1)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which word rhymes with PIN 🧷?",
    "visualEmoji": "🧷 🎵",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "tin 🥫",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "pan 🍳",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "pen 🖊️",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Pin and Tin both end with the '-in' sound!",
    "points": 10
  },
  {
    "id": "lkg_skill_d_1_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "D.1: Which word has the same ending?",
    "concept": "Rhyming (D.1)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which word rhymes with FROG 🐸?",
    "visualEmoji": "🐸 🎵",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "log 🪵",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "leg 🦵",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "bug 🐛",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Frog and Log both end with the '-og' sound!",
    "points": 10
  },
  {
    "id": "lkg_skill_d_1_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "D.1: Which word has the same ending?",
    "concept": "Rhyming (D.1)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Which word rhymes with SUN ☀️?",
    "visualEmoji": "☀️ 🎵",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "bun 🍞",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "star ⭐",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "sky 🌤️",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Sun and Bun both end with the '-un' sound!",
    "points": 10
  },
  {
    "id": "lkg_skill_d_2_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "D.2: Which two words have the same ending?",
    "concept": "Rhyming (D.2)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which pair of words rhyme with each other?",
    "visualEmoji": "🦘 🎶",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "hop — top 🦘",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "hop — hip",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "hop — hat",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Hop and Top both end with the '-op' sound!",
    "points": 10
  },
  {
    "id": "lkg_skill_d_2_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "D.2: Which two words have the same ending?",
    "concept": "Rhyming (D.2)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which two words have the same rhyming sound?",
    "visualEmoji": "🍳 🎶",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "fan — pan 🍳",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "fan — fin",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "fan — fun",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Fan and Pan both end with the '-an' sound!",
    "points": 10
  },
  {
    "id": "lkg_skill_d_2_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "D.2: Which two words have the same ending?",
    "concept": "Rhyming (D.2)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which pair rhymes together?",
    "visualEmoji": "🛏️ 🎶",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "bed — red 🛏️",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "bed — bad",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "bed — big",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Bed and Red both end with the '-ed' sound!",
    "points": 10
  },
  {
    "id": "lkg_skill_d_2_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "D.2: Which two words have the same ending?",
    "concept": "Rhyming (D.2)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Listen to the endings. Which pair rhymes?",
    "visualEmoji": "☕ 🎶",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "bug — mug ☕",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "bug — bag",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "bug — bat",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Bug and Mug both end with the '-ug' sound!",
    "points": 10
  },
  {
    "id": "lkg_skill_d_3_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "D.3: Choose the picture that rhymes with the word",
    "concept": "Rhyming (D.3)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which picture rhymes with FOX 🦊?",
    "visualEmoji": "🦊 📦",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "Box 📦",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "Fish 🐟",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "Tree 🌳",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Fox and Box rhyme together (-ox)!",
    "points": 10
  },
  {
    "id": "lkg_skill_d_3_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "D.3: Choose the picture that rhymes with the word",
    "concept": "Rhyming (D.3)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which picture rhymes with BELL 🔔?",
    "visualEmoji": "🔔 🪣",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "Well 🪣",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "Book 📖",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "Cup 🥛",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Bell and Well rhyme together (-ell)!",
    "points": 10
  },
  {
    "id": "lkg_skill_d_3_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "D.3: Choose the picture that rhymes with the word",
    "concept": "Rhyming (D.3)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which picture rhymes with BOAT ⛵?",
    "visualEmoji": "⛵ 🐐",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "Goat 🐐",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "Bird 🐦",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "Kite 🪁",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Boat and Goat rhyme together (-oat)!",
    "points": 10
  },
  {
    "id": "lkg_skill_d_3_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "D.3: Choose the picture that rhymes with the word",
    "concept": "Rhyming (D.3)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Which picture rhymes with CAKE 🎂?",
    "visualEmoji": "🎂 🐍",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "Snake 🐍",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "Apple 🍎",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "Car 🚗",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Cake and Snake rhyme together (-ake)!",
    "points": 10
  },
  {
    "id": "lkg_skill_e_1_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "E.1: Blend onset and rime together to make a word",
    "concept": "Blending and segmenting (E.1)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Blend the sounds: /c/ + /-at/. What word do they make?",
    "visualEmoji": "🐱 🧩",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "cat 🐱",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "car 🚗",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "cup ☕",
          "isCorrect": false
        }
      ]
    },
    "explanation": "/c/ + /-at/ blends smoothly to form 'cat'!",
    "points": 10
  },
  {
    "id": "lkg_skill_e_1_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "E.1: Blend onset and rime together to make a word",
    "concept": "Blending and segmenting (E.1)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Blend the sounds: /h/ + /-en/. What word do they make?",
    "visualEmoji": "🐔 🧩",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "hen 🐔",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "hat 👒",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "hug 🤗",
          "isCorrect": false
        }
      ]
    },
    "explanation": "/h/ + /-en/ blends smoothly to form 'hen'!",
    "points": 10
  },
  {
    "id": "lkg_skill_e_1_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "E.1: Blend onset and rime together to make a word",
    "concept": "Blending and segmenting (E.1)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Blend the sounds: /p/ + /-ig/. What word do they make?",
    "visualEmoji": "🐷 🧩",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "pig 🐷",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "pan 🍳",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "pot 🍲",
          "isCorrect": false
        }
      ]
    },
    "explanation": "/p/ + /-ig/ blends smoothly to form 'pig'!",
    "points": 10
  },
  {
    "id": "lkg_skill_e_1_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "E.1: Blend onset and rime together to make a word",
    "concept": "Blending and segmenting (E.1)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Blend the sounds: /s/ + /-un/. What word do they make?",
    "visualEmoji": "☀️ 🧩",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "sun ☀️",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "sit 🪑",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "sock 🧦",
          "isCorrect": false
        }
      ]
    },
    "explanation": "/s/ + /-un/ blends smoothly to form 'sun'!",
    "points": 10
  },
  {
    "id": "lkg_skill_e_2_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "E.2: Blend each sound in a word together",
    "concept": "Blending and segmenting (E.2)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Blend the 3 sounds: /d/ + /o/ + /g/. What word is it?",
    "visualEmoji": "🐕 🔤",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "dog 🐕",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "dig ⛏️",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "dot 🔴",
          "isCorrect": false
        }
      ]
    },
    "explanation": "/d/ + /o/ + /g/ makes 'dog'!",
    "points": 10
  },
  {
    "id": "lkg_skill_e_2_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "E.2: Blend each sound in a word together",
    "concept": "Blending and segmenting (E.2)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Blend the 3 sounds: /b/ + /u/ + /s/. What word is it?",
    "visualEmoji": "🚌 🔤",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "bus 🚌",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "bat 🦇",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "box 📦",
          "isCorrect": false
        }
      ]
    },
    "explanation": "/b/ + /u/ + /s/ makes 'bus'!",
    "points": 10
  },
  {
    "id": "lkg_skill_e_2_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "E.2: Blend each sound in a word together",
    "concept": "Blending and segmenting (E.2)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Blend the 3 sounds: /f/ + /i/ + /n/. What word is it?",
    "visualEmoji": "🐟 🔤",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "fin 🐟",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "fan 🪭",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "fun 🎈",
          "isCorrect": false
        }
      ]
    },
    "explanation": "/f/ + /i/ + /n/ makes 'fin'!",
    "points": 10
  },
  {
    "id": "lkg_skill_e_2_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "E.2: Blend each sound in a word together",
    "concept": "Blending and segmenting (E.2)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Blend the 3 sounds: /r/ + /e/ + /d/. What word is it?",
    "visualEmoji": "🔴 🔤",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "red 🔴",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "rod 🎣",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "ran 🏃",
          "isCorrect": false
        }
      ]
    },
    "explanation": "/r/ + /e/ + /d/ makes 'red'!",
    "points": 10
  },
  {
    "id": "lkg_skill_e_3_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "E.3: Identify the first sound in a word",
    "concept": "Blending and segmenting (E.3)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "What is the FIRST sound you hear in TOP 🪀?",
    "visualEmoji": "🪀 🥇",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "/t/",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "/o/",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "/p/",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Top starts with the ticking sound /t/!",
    "points": 10
  },
  {
    "id": "lkg_skill_e_3_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "E.3: Identify the first sound in a word",
    "concept": "Blending and segmenting (E.3)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "What is the FIRST sound you hear in VAN 🚐?",
    "visualEmoji": "🚐 🥇",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "/v/",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "/a/",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "/n/",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Van starts with the buzzing sound /v/!",
    "points": 10
  },
  {
    "id": "lkg_skill_e_3_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "E.3: Identify the first sound in a word",
    "concept": "Blending and segmenting (E.3)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "What is the FIRST sound you hear in MUG ☕?",
    "visualEmoji": "☕ 🥇",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "/m/",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "/u/",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "/g/",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Mug starts with the yummy humming sound /m/!",
    "points": 10
  },
  {
    "id": "lkg_skill_e_3_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "E.3: Identify the first sound in a word",
    "concept": "Blending and segmenting (E.3)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "What is the FIRST sound you hear in ZIP 🤐?",
    "visualEmoji": "🤐 🥇",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "/z/",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "/i/",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "/p/",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Zip starts with the buzzing sound /z/!",
    "points": 10
  },
  {
    "id": "lkg_skill_e_4_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "E.4: Put the sounds in order",
    "concept": "Blending and segmenting (E.4)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Put the sounds in order to make the word BED 🛏️:",
    "visualEmoji": "🛏️ 🔢",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "/b/ - /e/ - /d/",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "/d/ - /e/ - /b/",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "/e/ - /b/ - /d/",
          "isCorrect": false
        }
      ]
    },
    "explanation": "First /b/, middle /e/, ending with /d/ = BED!",
    "points": 10
  },
  {
    "id": "lkg_skill_e_4_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "E.4: Put the sounds in order",
    "concept": "Blending and segmenting (E.4)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Put the sounds in order to make the word MAP 🗺️:",
    "visualEmoji": "🗺️ 🔢",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "/m/ - /a/ - /p/",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "/p/ - /a/ - /m/",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "/a/ - /m/ - /p/",
          "isCorrect": false
        }
      ]
    },
    "explanation": "First /m/, middle /a/, ending with /p/ = MAP!",
    "points": 10
  },
  {
    "id": "lkg_skill_e_4_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "E.4: Put the sounds in order",
    "concept": "Blending and segmenting (E.4)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Put the sounds in order to make the word NET 🥅:",
    "visualEmoji": "🥅 🔢",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "/n/ - /e/ - /t/",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "/t/ - /e/ - /n/",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "/e/ - /n/ - /t/",
          "isCorrect": false
        }
      ]
    },
    "explanation": "First /n/, middle /e/, ending with /t/ = NET!",
    "points": 10
  },
  {
    "id": "lkg_skill_e_4_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "E.4: Put the sounds in order",
    "concept": "Blending and segmenting (E.4)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Put the sounds in order to make the word LIP 👄:",
    "visualEmoji": "👄 🔢",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "/l/ - /i/ - /p/",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "/p/ - /i/ - /l/",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "/i/ - /l/ - /p/",
          "isCorrect": false
        }
      ]
    },
    "explanation": "First /l/, middle /i/, ending with /p/ = LIP!",
    "points": 10
  },
  {
    "id": "lkg_skill_f_1_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "F.1: Which two words start with the same sound?",
    "concept": "Beginning and ending sounds (F.1)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which two words start with the same sound?",
    "visualEmoji": "☀️ ⭐",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "Sun and Star ☀️ ⭐",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "Sun and Moon ☀️ 🌙",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "Star and Cloud ⭐ ☁️",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Sun and Star both start with /s/!",
    "points": 10
  },
  {
    "id": "lkg_skill_f_1_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "F.1: Which two words start with the same sound?",
    "concept": "Beginning and ending sounds (F.1)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which two words start with the /b/ sound?",
    "visualEmoji": "⚽ 🐻",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "Ball and Bear ⚽ 🐻",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "Ball and Duck ⚽ 🦆",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "Bear and Fish 🐻 🐟",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Ball and Bear both start with /b/!",
    "points": 10
  },
  {
    "id": "lkg_skill_f_1_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "F.1: Which two words start with the same sound?",
    "concept": "Beginning and ending sounds (F.1)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which two words start with the /c/ (kuh) sound?",
    "visualEmoji": "🐱 ☕",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "Cat and Cup 🐱 ☕",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "Cat and Dog 🐱 🐶",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "Cup and Spoon ☕ 🥄",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Cat and Cup both start with /c/!",
    "points": 10
  },
  {
    "id": "lkg_skill_f_1_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "F.1: Which two words start with the same sound?",
    "concept": "Beginning and ending sounds (F.1)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Which two words start with the /f/ sound?",
    "visualEmoji": "🐟 🐸",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "Fish and Frog 🐟 🐸",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "Fish and Bird 🐟 🐦",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "Frog and Duck 🐸 🦆",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Fish and Frog both start with /f/!",
    "points": 10
  },
  {
    "id": "lkg_skill_f_2_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "F.2: Which word ends with the same sound?",
    "concept": "Beginning and ending sounds (F.2)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "The word BAT 🦇 ends with /t/. Which word also ends with /t/?",
    "visualEmoji": "🦇 🏁",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "hat 👒",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "hop 🦘",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "hen 🐔",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Bat and Hat both end with /t/!",
    "points": 10
  },
  {
    "id": "lkg_skill_f_2_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "F.2: Which word ends with the same sound?",
    "concept": "Beginning and ending sounds (F.2)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "The word CUP ☕ ends with /p/. Which word also ends with /p/?",
    "visualEmoji": "☕ 🏁",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "cap 🧢",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "can 🥫",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "cat 🐱",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Cup and Cap both end with /p/!",
    "points": 10
  },
  {
    "id": "lkg_skill_f_2_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "F.2: Which word ends with the same sound?",
    "concept": "Beginning and ending sounds (F.2)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "The word DOG 🐕 ends with /g/. Which word also ends with /g/?",
    "visualEmoji": "🐕 🏁",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "log 🪵",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "lip 👄",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "lid 🍲",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Dog and Log both end with /g/!",
    "points": 10
  },
  {
    "id": "lkg_skill_f_2_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "F.2: Which word ends with the same sound?",
    "concept": "Beginning and ending sounds (F.2)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "The word SUN ☀️ ends with /n/. Which word also ends with /n/?",
    "visualEmoji": "☀️ 🏁",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "pan 🍳",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "pig 🐷",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "pot 🍲",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Sun and Pan both end with /n/!",
    "points": 10
  },
  {
    "id": "lkg_skill_f_3_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "F.3: Which two words end with the same sound?",
    "concept": "Beginning and ending sounds (F.3)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which two words end with the exact same sound?",
    "visualEmoji": "🦵 🐷",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "leg and pig 🦵 🐷",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "leg and lip 🦵 👄",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "pig and pan 🐷 🍳",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Leg and Pig both end with the hard /g/ sound!",
    "points": 10
  },
  {
    "id": "lkg_skill_f_3_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "F.3: Which two words end with the same sound?",
    "concept": "Beginning and ending sounds (F.3)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which two words both end with the /t/ sound?",
    "visualEmoji": "🐱 🥅",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "cat and net 🐱 🥅",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "cat and car 🐱 🚗",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "net and nod 🥅 😴",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Cat and Net both end with /t/!",
    "points": 10
  },
  {
    "id": "lkg_skill_f_3_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "F.3: Which two words end with the same sound?",
    "concept": "Beginning and ending sounds (F.3)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which two words both end with the /m/ sound?",
    "visualEmoji": "🍓 🍬",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "jam and gum 🍓 🍬",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "jam and jug 🍓 🏺",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "gum and gut 🍬 🎈",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Jam and Gum both end with /m/!",
    "points": 10
  },
  {
    "id": "lkg_skill_f_3_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "F.3: Which two words end with the same sound?",
    "concept": "Beginning and ending sounds (F.3)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Which two words both end with the /p/ sound?",
    "visualEmoji": "🗺️ 🪀",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "map and top 🗺️ 🪀",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "map and man 🗺️ 👨",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "top and tub 🪀 🛁",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Map and Top both end with /p/!",
    "points": 10
  },
  {
    "id": "lkg_skill_g_1_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "G.1: Choose the letter that matches the consonant sound: B, D, J, K, P, T, V, Z",
    "concept": "Letter-sound associations: uppercase (G.1)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which letter makes the sound you hear at the start of BALL ⚽?",
    "visualEmoji": "⚽ 🔤",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "B",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "D",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "P",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Ball starts with the bouncy sound /b/ made by B!",
    "points": 10
  },
  {
    "id": "lkg_skill_g_1_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "G.1: Choose the letter that matches the consonant sound: B, D, J, K, P, T, V, Z",
    "concept": "Letter-sound associations: uppercase (G.1)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which letter makes the sound you hear at the start of DRUM 🥁?",
    "visualEmoji": "🥁 🔤",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "D",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "B",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "T",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Drum starts with /d/ made by D!",
    "points": 10
  },
  {
    "id": "lkg_skill_g_1_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "G.1: Choose the letter that matches the consonant sound: B, D, J, K, P, T, V, Z",
    "concept": "Letter-sound associations: uppercase (G.1)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which letter makes the sound you hear at the start of JUG 🏺?",
    "visualEmoji": "🏺 🔤",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "J",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "K",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "Z",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Jug starts with /j/ made by J!",
    "points": 10
  },
  {
    "id": "lkg_skill_g_1_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "G.1: Choose the letter that matches the consonant sound: B, D, J, K, P, T, V, Z",
    "concept": "Letter-sound associations: uppercase (G.1)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Which letter makes the sound you hear at the start of KITE 🪁?",
    "visualEmoji": "🪁 🔤",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "K",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "T",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "V",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Kite starts with /k/ made by K!",
    "points": 10
  },
  {
    "id": "lkg_skill_g_2_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "G.2: Choose the letter that matches the consonant sound: F, L, M, N, R, S",
    "concept": "Letter-sound associations: uppercase (G.2)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which letter makes the sound you hear at the start of FISH 🐟?",
    "visualEmoji": "🐟 🔤",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "F",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "L",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "S",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Fish starts with the soft blowing sound /f/ made by F!",
    "points": 10
  },
  {
    "id": "lkg_skill_g_2_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "G.2: Choose the letter that matches the consonant sound: F, L, M, N, R, S",
    "concept": "Letter-sound associations: uppercase (G.2)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which letter makes the sound you hear at the start of LION 🦁?",
    "visualEmoji": "🦁 🔤",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "L",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "F",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "R",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Lion starts with /l/ made by L!",
    "points": 10
  },
  {
    "id": "lkg_skill_g_2_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "G.2: Choose the letter that matches the consonant sound: F, L, M, N, R, S",
    "concept": "Letter-sound associations: uppercase (G.2)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which letter makes the sound you hear at the start of MOON 🌙?",
    "visualEmoji": "🌙 🔤",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "M",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "N",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "S",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Moon starts with humming /m/ made by M!",
    "points": 10
  },
  {
    "id": "lkg_skill_g_2_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "G.2: Choose the letter that matches the consonant sound: F, L, M, N, R, S",
    "concept": "Letter-sound associations: uppercase (G.2)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Which letter makes the sound you hear at the start of NEST 🪺?",
    "visualEmoji": "🪺 🔤",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "N",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "M",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "R",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Nest starts with /n/ made by N!",
    "points": 10
  },
  {
    "id": "lkg_skill_g_3_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "G.3: Choose the letter that matches the consonant sound: C, G, H, W",
    "concept": "Letter-sound associations: uppercase (G.3)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which letter makes the sound you hear at the start of CAT 🐱?",
    "visualEmoji": "🐱 🔤",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "C",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "G",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "H",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Cat starts with /k/ made by C!",
    "points": 10
  },
  {
    "id": "lkg_skill_g_3_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "G.3: Choose the letter that matches the consonant sound: C, G, H, W",
    "concept": "Letter-sound associations: uppercase (G.3)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which letter makes the sound you hear at the start of GIRL 👧?",
    "visualEmoji": "👧 🔤",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "G",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "C",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "W",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Girl starts with /g/ made by G!",
    "points": 10
  },
  {
    "id": "lkg_skill_g_3_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "G.3: Choose the letter that matches the consonant sound: C, G, H, W",
    "concept": "Letter-sound associations: uppercase (G.3)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which letter makes the sound you hear at the start of HOUSE 🏠?",
    "visualEmoji": "🏠 🔤",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "H",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "W",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "G",
          "isCorrect": false
        }
      ]
    },
    "explanation": "House starts with the breathy sound /h/ made by H!",
    "points": 10
  },
  {
    "id": "lkg_skill_g_3_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "G.3: Choose the letter that matches the consonant sound: C, G, H, W",
    "concept": "Letter-sound associations: uppercase (G.3)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Which letter makes the sound you hear at the start of WATCH ⌚?",
    "visualEmoji": "⌚ 🔤",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "W",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "H",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "C",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Watch starts with /w/ made by W!",
    "points": 10
  },
  {
    "id": "lkg_skill_g_4_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "G.4: Choose the uppercase letter that matches the consonant sound: review",
    "concept": "Letter-sound associations: uppercase (G.4)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which letter makes the sound you hear at the start of STAR 🌟?",
    "visualEmoji": "🌟 🔤",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "S",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "Z",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "R",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Star starts with the hissing sound /s/ made by S!",
    "points": 10
  },
  {
    "id": "lkg_skill_g_4_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "G.4: Choose the uppercase letter that matches the consonant sound: review",
    "concept": "Letter-sound associations: uppercase (G.4)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which letter makes the sound you hear at the start of ROBOT 🤖?",
    "visualEmoji": "🤖 🔤",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "R",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "L",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "B",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Robot starts with /r/ made by R!",
    "points": 10
  },
  {
    "id": "lkg_skill_g_4_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "G.4: Choose the uppercase letter that matches the consonant sound: review",
    "concept": "Letter-sound associations: uppercase (G.4)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which letter makes the sound you hear at the start of PENCIL ✏️?",
    "visualEmoji": "✏️ 🔤",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "P",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "B",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "T",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Pencil starts with popping /p/ made by P!",
    "points": 10
  },
  {
    "id": "lkg_skill_g_4_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "G.4: Choose the uppercase letter that matches the consonant sound: review",
    "concept": "Letter-sound associations: uppercase (G.4)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Which letter makes the sound you hear at the start of ZEBRA 🦓?",
    "visualEmoji": "🦓 🔤",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "Z",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "S",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "J",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Zebra starts with buzzing /z/ made by Z!",
    "points": 10
  },
  {
    "id": "lkg_skill_h_1_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "H.1: Find the word that begins with a given sound",
    "concept": "Letter-sound associations: lowercase (H.1)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which word begins with the sound /b/?",
    "visualEmoji": "⚽ 🔊",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "ball ⚽",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "doll 🪆",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "tall 🦒",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Ball begins with /b/!",
    "points": 10
  },
  {
    "id": "lkg_skill_h_1_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "H.1: Find the word that begins with a given sound",
    "concept": "Letter-sound associations: lowercase (H.1)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which word begins with the sound /s/?",
    "visualEmoji": "☀️ 🔊",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "sun ☀️",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "run 🏃",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "fun 🎈",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Sun begins with /s/!",
    "points": 10
  },
  {
    "id": "lkg_skill_h_1_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "H.1: Find the word that begins with a given sound",
    "concept": "Letter-sound associations: lowercase (H.1)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which word begins with the sound /m/?",
    "visualEmoji": "🥭 🔊",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "mango 🥭",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "apple 🍎",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "banana 🍌",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Mango begins with /m/!",
    "points": 10
  },
  {
    "id": "lkg_skill_h_1_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "H.1: Find the word that begins with a given sound",
    "concept": "Letter-sound associations: lowercase (H.1)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Which word begins with the sound /d/?",
    "visualEmoji": "🦆 🔊",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "duck 🦆",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "frog 🐸",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "chick 🐥",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Duck begins with /d/!",
    "points": 10
  },
  {
    "id": "lkg_skill_h_2_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "H.2: Choose the letter that matches the consonant sound: b, d, j, k, p, t, v, z",
    "concept": "Letter-sound associations: lowercase (H.2)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which small letter makes the sound you hear at the start of pig 🐷?",
    "visualEmoji": "🐷 🔡",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "p",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "b",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "d",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Pig starts with lowercase 'p'!",
    "points": 10
  },
  {
    "id": "lkg_skill_h_2_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "H.2: Choose the letter that matches the consonant sound: b, d, j, k, p, t, v, z",
    "concept": "Letter-sound associations: lowercase (H.2)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which small letter makes the sound you hear at the start of tub 🛁?",
    "visualEmoji": "🛁 🔡",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "t",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "k",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "j",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Tub starts with lowercase 't'!",
    "points": 10
  },
  {
    "id": "lkg_skill_h_2_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "H.2: Choose the letter that matches the consonant sound: b, d, j, k, p, t, v, z",
    "concept": "Letter-sound associations: lowercase (H.2)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which small letter makes the sound you hear at the start of van 🚐?",
    "visualEmoji": "🚐 🔡",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "v",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "z",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "b",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Van starts with lowercase 'v'!",
    "points": 10
  },
  {
    "id": "lkg_skill_h_2_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "H.2: Choose the letter that matches the consonant sound: b, d, j, k, p, t, v, z",
    "concept": "Letter-sound associations: lowercase (H.2)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Which small letter makes the sound you hear at the start of zip 🤐?",
    "visualEmoji": "🤐 🔡",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "z",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "v",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "s",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Zip starts with lowercase 'z'!",
    "points": 10
  },
  {
    "id": "lkg_skill_h_3_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "H.3: Choose the letter that matches the consonant sound: f, l, m, n, r, s",
    "concept": "Letter-sound associations: lowercase (H.3)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which small letter makes the sound you hear at the start of fox 🦊?",
    "visualEmoji": "🦊 🔡",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "f",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "l",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "r",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Fox starts with lowercase 'f'!",
    "points": 10
  },
  {
    "id": "lkg_skill_h_3_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "H.3: Choose the letter that matches the consonant sound: f, l, m, n, r, s",
    "concept": "Letter-sound associations: lowercase (H.3)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which small letter makes the sound you hear at the start of leaf 🍃?",
    "visualEmoji": "🍃 🔡",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "l",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "f",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "n",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Leaf starts with lowercase 'l'!",
    "points": 10
  },
  {
    "id": "lkg_skill_h_3_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "H.3: Choose the letter that matches the consonant sound: f, l, m, n, r, s",
    "concept": "Letter-sound associations: lowercase (H.3)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which small letter makes the sound you hear at the start of ring 💍?",
    "visualEmoji": "💍 🔡",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "r",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "m",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "s",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Ring starts with lowercase 'r'!",
    "points": 10
  },
  {
    "id": "lkg_skill_h_3_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "H.3: Choose the letter that matches the consonant sound: f, l, m, n, r, s",
    "concept": "Letter-sound associations: lowercase (H.3)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Which small letter makes the sound you hear at the start of soap 🧼?",
    "visualEmoji": "🧼 🔡",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "s",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "n",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "r",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Soap starts with lowercase 's'!",
    "points": 10
  },
  {
    "id": "lkg_skill_h_4_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "H.4: Choose the letter that matches the consonant sound: c, g, h, w",
    "concept": "Letter-sound associations: lowercase (H.4)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which small letter makes the sound you hear at the start of cup ☕?",
    "visualEmoji": "☕ 🔡",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "c",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "g",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "h",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Cup starts with lowercase 'c'!",
    "points": 10
  },
  {
    "id": "lkg_skill_h_4_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "H.4: Choose the letter that matches the consonant sound: c, g, h, w",
    "concept": "Letter-sound associations: lowercase (H.4)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which small letter makes the sound you hear at the start of gate 🚪?",
    "visualEmoji": "🚪 🔡",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "g",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "c",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "w",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Gate starts with lowercase 'g'!",
    "points": 10
  },
  {
    "id": "lkg_skill_h_4_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "H.4: Choose the letter that matches the consonant sound: c, g, h, w",
    "concept": "Letter-sound associations: lowercase (H.4)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which small letter makes the sound you hear at the start of hand ✋?",
    "visualEmoji": "✋ 🔡",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "h",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "w",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "g",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Hand starts with lowercase 'h'!",
    "points": 10
  },
  {
    "id": "lkg_skill_h_4_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "H.4: Choose the letter that matches the consonant sound: c, g, h, w",
    "concept": "Letter-sound associations: lowercase (H.4)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Which small letter makes the sound you hear at the start of web 🕸️?",
    "visualEmoji": "🕸️ 🔡",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "w",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "h",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "c",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Web starts with lowercase 'w'!",
    "points": 10
  },
  {
    "id": "lkg_skill_h_5_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "H.5: Choose the lowercase letter that matches the consonant sound: review",
    "concept": "Letter-sound associations: lowercase (H.5)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which small letter makes the sound you hear at the start of king 👑?",
    "visualEmoji": "👑 🔡",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "k",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "t",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "p",
          "isCorrect": false
        }
      ]
    },
    "explanation": "King starts with lowercase 'k'!",
    "points": 10
  },
  {
    "id": "lkg_skill_h_5_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "H.5: Choose the lowercase letter that matches the consonant sound: review",
    "concept": "Letter-sound associations: lowercase (H.5)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which small letter makes the sound you hear at the start of nest 🪺?",
    "visualEmoji": "🪺 🔡",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "n",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "m",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "r",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Nest starts with lowercase 'n'!",
    "points": 10
  },
  {
    "id": "lkg_skill_h_5_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "H.5: Choose the lowercase letter that matches the consonant sound: review",
    "concept": "Letter-sound associations: lowercase (H.5)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which small letter makes the sound you hear at the start of bell 🔔?",
    "visualEmoji": "🔔 🔡",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "b",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "d",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "p",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Bell starts with lowercase 'b'!",
    "points": 10
  },
  {
    "id": "lkg_skill_h_5_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "H.5: Choose the lowercase letter that matches the consonant sound: review",
    "concept": "Letter-sound associations: lowercase (H.5)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Which small letter makes the sound you hear at the start of dog 🐕?",
    "visualEmoji": "🐕 🔡",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "d",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "b",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "q",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Dog starts with lowercase 'd'!",
    "points": 10
  },
  {
    "id": "lkg_skill_i_1_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "I.1: Find the short a word",
    "concept": "Short a (I.1)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which word has the short 'a' vowel sound (like in apple 🍎)?",
    "visualEmoji": "🐱 🍎",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "cat 🐱",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "cut ✂️",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "cot 🛏️",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Cat has the short 'a' vowel sound!",
    "points": 10
  },
  {
    "id": "lkg_skill_i_1_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "I.1: Find the short a word",
    "concept": "Short a (I.1)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which word has the short 'a' vowel sound?",
    "visualEmoji": "🦇 🍎",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "bat 🦇",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "bet 🎰",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "bit 🦷",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Bat has the short 'a' sound!",
    "points": 10
  },
  {
    "id": "lkg_skill_i_1_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "I.1: Find the short a word",
    "concept": "Short a (I.1)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which word has the short 'a' vowel sound?",
    "visualEmoji": "🍳 🍎",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "pan 🍳",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "pin 🧷",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "pen 🖊️",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Pan has the short 'a' sound!",
    "points": 10
  },
  {
    "id": "lkg_skill_i_1_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "I.1: Find the short a word",
    "concept": "Short a (I.1)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Which word has the short 'a' vowel sound?",
    "visualEmoji": "🍓 🍎",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "jam 🍓",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "jug 🏺",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "jet ✈️",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Jam has the short 'a' sound!",
    "points": 10
  },
  {
    "id": "lkg_skill_i_2_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "I.2: Choose the short a word that matches the picture: lowercase",
    "concept": "Short a (I.2)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Look at the picture: 👒. Which short 'a' word matches?",
    "visualEmoji": "👒 ✨",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "hat",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "hit",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "hot",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The picture shows a hat!",
    "points": 10
  },
  {
    "id": "lkg_skill_i_2_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "I.2: Choose the short a word that matches the picture: lowercase",
    "concept": "Short a (I.2)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Look at the picture: 🪭. Which short 'a' word matches?",
    "visualEmoji": "🪭 ✨",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "fan",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "fin",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "fun",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The picture shows a cooling fan!",
    "points": 10
  },
  {
    "id": "lkg_skill_i_2_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "I.2: Choose the short a word that matches the picture: lowercase",
    "concept": "Short a (I.2)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at the picture: 🎒. Which short 'a' word matches?",
    "visualEmoji": "🎒 ✨",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "bag",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "beg",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "bug",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The picture shows a school bag!",
    "points": 10
  },
  {
    "id": "lkg_skill_i_2_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "I.2: Choose the short a word that matches the picture: lowercase",
    "concept": "Short a (I.2)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Look at the picture: 🗺️. Which short 'a' word matches?",
    "visualEmoji": "🗺️ ✨",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "map",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "mop",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "mug",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The picture shows a world map!",
    "points": 10
  },
  {
    "id": "lkg_skill_j_1_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "J.1: Find the short e word",
    "concept": "Short e (J.1)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which word has the short 'e' vowel sound (like in egg 🥚)?",
    "visualEmoji": "🛏️ 🥚",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "bed 🛏️",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "bad 👎",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "bud 🌸",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Bed has the short 'e' vowel sound!",
    "points": 10
  },
  {
    "id": "lkg_skill_j_1_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "J.1: Find the short e word",
    "concept": "Short e (J.1)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which word has the short 'e' vowel sound?",
    "visualEmoji": "🖊️ 🥚",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "pen 🖊️",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "pan 🍳",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "pin 🧷",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Pen has the short 'e' sound!",
    "points": 10
  },
  {
    "id": "lkg_skill_j_1_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "J.1: Find the short e word",
    "concept": "Short e (J.1)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which word has the short 'e' vowel sound?",
    "visualEmoji": "🐔 🥚",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "hen 🐔",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "hat 👒",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "hot ☕",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Hen has the short 'e' sound!",
    "points": 10
  },
  {
    "id": "lkg_skill_j_1_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "J.1: Find the short e word",
    "concept": "Short e (J.1)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Which word has the short 'e' vowel sound?",
    "visualEmoji": "🥅 🥚",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "net 🥅",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "not 🚫",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "nut 🥜",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Net has the short 'e' sound!",
    "points": 10
  },
  {
    "id": "lkg_skill_j_2_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "J.2: Choose the picture that matches the short e word: lowercase",
    "concept": "Short e (J.2)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which picture matches the short 'e' word 'red'?",
    "visualEmoji": "🔴 🥚",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "Red Apple 🍎",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "Blue Sky ☁️",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "Yellow Sun ☀️",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The red apple matches the color word 'red'!",
    "points": 10
  },
  {
    "id": "lkg_skill_j_2_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "J.2: Choose the picture that matches the short e word: lowercase",
    "concept": "Short e (J.2)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which picture matches the short 'e' word 'ten'?",
    "visualEmoji": "🔟 🥚",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "Number 10 🔟",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "Number 2 2️⃣",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "Number 5 5️⃣",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The number 10 is 'ten'!",
    "points": 10
  },
  {
    "id": "lkg_skill_j_2_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "J.2: Choose the picture that matches the short e word: lowercase",
    "concept": "Short e (J.2)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which picture matches the short 'e' word 'leg'?",
    "visualEmoji": "🦵 🥚",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "Human Leg 🦵",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "Arm 💪",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "Hand ✋",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Leg is spelled l-e-g!",
    "points": 10
  },
  {
    "id": "lkg_skill_j_2_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "J.2: Choose the picture that matches the short e word: lowercase",
    "concept": "Short e (J.2)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Which picture matches the short 'e' word 'web'?",
    "visualEmoji": "🕸️ 🥚",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "Spider Web 🕸️",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "Tree 🌳",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "Rock 🪨",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A spider spins a web!",
    "points": 10
  },
  {
    "id": "lkg_skill_k_1_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "K.1: Find the short i word",
    "concept": "Short i (K.1)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which word has the short 'i' vowel sound (like in igloo 🧊)?",
    "visualEmoji": "🐷 🧊",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "pig 🐷",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "peg 🪝",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "pug 🐶",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Pig has the short 'i' sound!",
    "points": 10
  },
  {
    "id": "lkg_skill_k_1_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "K.1: Find the short i word",
    "concept": "Short i (K.1)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which word has the short 'i' vowel sound?",
    "visualEmoji": "🧷 🧊",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "pin 🧷",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "pan 🍳",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "pen 🖊️",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Pin has the short 'i' sound!",
    "points": 10
  },
  {
    "id": "lkg_skill_k_1_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "K.1: Find the short i word",
    "concept": "Short i (K.1)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which word has the short 'i' vowel sound?",
    "visualEmoji": "🤐 🧊",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "zip 🤐",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "zap ⚡",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "zoo 🦁",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Zip has the short 'i' sound!",
    "points": 10
  },
  {
    "id": "lkg_skill_k_1_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "K.1: Find the short i word",
    "concept": "Short i (K.1)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Which word has the short 'i' vowel sound?",
    "visualEmoji": "🪑 🧊",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "sit 🪑",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "sat 🛋️",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "set 📦",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Sit has the short 'i' sound!",
    "points": 10
  },
  {
    "id": "lkg_skill_k_2_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "K.2: Choose the short i word that matches the picture: lowercase",
    "concept": "Short i (K.2)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Look at the picture: 🐟 (fish fin). Which short 'i' word matches?",
    "visualEmoji": "🐟 ✨",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "fin",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "fan",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "fun",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A fish swims using its fin!",
    "points": 10
  },
  {
    "id": "lkg_skill_k_2_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "K.2: Choose the short i word that matches the picture: lowercase",
    "concept": "Short i (K.2)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Look at the picture: 🗑️ (dustbin). Which short 'i' word matches?",
    "visualEmoji": "🗑️ ✨",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "bin",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "ban",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "bun",
          "isCorrect": false
        }
      ]
    },
    "explanation": "We throw rubbish in the bin!",
    "points": 10
  },
  {
    "id": "lkg_skill_k_2_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "K.2: Choose the short i word that matches the picture: lowercase",
    "concept": "Short i (K.2)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at the picture: 👄. Which short 'i' word matches?",
    "visualEmoji": "👄 ✨",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "lip",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "lap",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "lop",
          "isCorrect": false
        }
      ]
    },
    "explanation": "We speak with our lip!",
    "points": 10
  },
  {
    "id": "lkg_skill_k_2_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "K.2: Choose the short i word that matches the picture: lowercase",
    "concept": "Short i (K.2)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Look at the picture: 👶 (baby bib). Which short 'i' word matches?",
    "visualEmoji": "👶 ✨",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "bib",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "bob",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "bub",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A baby wears a bib when eating!",
    "points": 10
  },
  {
    "id": "lkg_skill_l_1_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "L.1: Find the short o word",
    "concept": "Short o (L.1)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which word has the short 'o' vowel sound (like in octopus 🐙)?",
    "visualEmoji": "🐕 🐙",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "dog 🐕",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "dig ⛏️",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "dug 🕳️",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Dog has the short 'o' vowel sound!",
    "points": 10
  },
  {
    "id": "lkg_skill_l_1_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "L.1: Find the short o word",
    "concept": "Short o (L.1)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which word has the short 'o' vowel sound?",
    "visualEmoji": "🍲 🐙",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "pot 🍲",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "pet 🐶",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "pat 🐾",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Pot has the short 'o' sound!",
    "points": 10
  },
  {
    "id": "lkg_skill_l_1_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "L.1: Find the short o word",
    "concept": "Short o (L.1)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which word has the short 'o' vowel sound?",
    "visualEmoji": "🧹 🐙",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "mop 🧹",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "map 🗺️",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "mug ☕",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Mop has the short 'o' sound!",
    "points": 10
  },
  {
    "id": "lkg_skill_l_1_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "L.1: Find the short o word",
    "concept": "Short o (L.1)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Which word has the short 'o' vowel sound?",
    "visualEmoji": "📦 🐙",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "box 📦",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "bee 🐝",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "bus 🚌",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Box has the short 'o' sound!",
    "points": 10
  },
  {
    "id": "lkg_skill_l_2_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "L.2: Choose the short o word that matches the picture: lowercase",
    "concept": "Short o (L.2)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which picture matches the short 'o' word 'fox'?",
    "visualEmoji": "🦊 ✨",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "Fox 🦊",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "Cat 🐱",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "Frog 🐸",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Fox is spelled f-o-x!",
    "points": 10
  },
  {
    "id": "lkg_skill_l_2_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "L.2: Choose the short o word that matches the picture: lowercase",
    "concept": "Short o (L.2)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which picture matches the short 'o' word 'log'?",
    "visualEmoji": "🪵 ✨",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "Wood Log 🪵",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "Leaf 🍃",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "Flower 🌸",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A fallen tree trunk is a log!",
    "points": 10
  },
  {
    "id": "lkg_skill_l_2_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "L.2: Choose the short o word that matches the picture: lowercase",
    "concept": "Short o (L.2)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which picture matches the short 'o' word 'top'?",
    "visualEmoji": "🪀 ✨",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "Spinning Top 🪀",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "Ball ⚽",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "Kite 🪁",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A toy that spins around is a top!",
    "points": 10
  },
  {
    "id": "lkg_skill_l_2_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "L.2: Choose the short o word that matches the picture: lowercase",
    "concept": "Short o (L.2)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Which picture matches the short 'o' word 'cot'?",
    "visualEmoji": "🛏️ ✨",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "Small Bed / Cot 🛏️",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "Chair 🪑",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "Table 🪵",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A small bed for a child is a cot!",
    "points": 10
  },
  {
    "id": "lkg_skill_m_1_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "M.1: Find the short u word",
    "concept": "Short u (M.1)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which word has the short 'u' vowel sound (like in umbrella ☂️)?",
    "visualEmoji": "☀️ ☂️",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "sun ☀️",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "sin ❌",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "son 👦",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Sun has the short 'u' vowel sound!",
    "points": 10
  },
  {
    "id": "lkg_skill_m_1_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "M.1: Find the short u word",
    "concept": "Short u (M.1)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which word has the short 'u' vowel sound?",
    "visualEmoji": "🐛 ☂️",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "bug 🐛",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "bag 🎒",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "beg 🙏",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Bug has the short 'u' sound!",
    "points": 10
  },
  {
    "id": "lkg_skill_m_1_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "M.1: Find the short u word",
    "concept": "Short u (M.1)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which word has the short 'u' vowel sound?",
    "visualEmoji": "🚌 ☂️",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "bus 🚌",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "bee 🐝",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "bat 🦇",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Bus has the short 'u' sound!",
    "points": 10
  },
  {
    "id": "lkg_skill_m_1_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "M.1: Find the short u word",
    "concept": "Short u (M.1)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Which word has the short 'u' vowel sound?",
    "visualEmoji": "☕ ☂️",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "cup ☕",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "cap 🧢",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "cop 👮",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Cup has the short 'u' sound!",
    "points": 10
  },
  {
    "id": "lkg_skill_m_2_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "M.2: Choose the picture that matches the short u word: lowercase",
    "concept": "Short u (M.2)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Look at the picture: ☕ (tea mug). Which short 'u' word matches?",
    "visualEmoji": "☕ ✨",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "mug",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "mag",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "meg",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A big cup for warm milk or tea is a mug!",
    "points": 10
  },
  {
    "id": "lkg_skill_m_2_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "M.2: Choose the picture that matches the short u word: lowercase",
    "concept": "Short u (M.2)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Look at the picture: 🛁 (bathtub). Which short 'u' word matches?",
    "visualEmoji": "🛁 ✨",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "tub",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "tab",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "tip",
          "isCorrect": false
        }
      ]
    },
    "explanation": "We take a bath in a tub!",
    "points": 10
  },
  {
    "id": "lkg_skill_m_2_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "M.2: Choose the picture that matches the short u word: lowercase",
    "concept": "Short u (M.2)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at the picture: 🧶 (warm floor rug). Which short 'u' word matches?",
    "visualEmoji": "🧶 ✨",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "rug",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "rag",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "rig",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A warm mat on the floor is a rug!",
    "points": 10
  },
  {
    "id": "lkg_skill_m_2_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "M.2: Choose the picture that matches the short u word: lowercase",
    "concept": "Short u (M.2)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Look at the picture: 🥜 (nut). Which short 'u' word matches?",
    "visualEmoji": "🥜 ✨",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "nut",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "not",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "net",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Squirrels love to eat a nut!",
    "points": 10
  },
  {
    "id": "lkg_skill_n_1_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "N.1: Choose the two sight words that are the same",
    "concept": "Sight words (N.1)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which pair shows the exact same sight word?",
    "visualEmoji": "👁️ 👯",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "the — the",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "the — to",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "you — yes",
          "isCorrect": false
        }
      ]
    },
    "explanation": "'the — the' is an exact match!",
    "points": 10
  },
  {
    "id": "lkg_skill_n_1_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "N.1: Choose the two sight words that are the same",
    "concept": "Sight words (N.1)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which pair shows the exact same sight word?",
    "visualEmoji": "👁️ 👯",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "to — to",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "to — do",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "to — two",
          "isCorrect": false
        }
      ]
    },
    "explanation": "'to — to' is an exact match!",
    "points": 10
  },
  {
    "id": "lkg_skill_n_1_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "N.1: Choose the two sight words that are the same",
    "concept": "Sight words (N.1)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which pair shows the exact same sight word?",
    "visualEmoji": "👁️ 👯",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "you — you",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "you — your",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "yes — you",
          "isCorrect": false
        }
      ]
    },
    "explanation": "'you — you' is an exact match!",
    "points": 10
  },
  {
    "id": "lkg_skill_n_1_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "N.1: Choose the two sight words that are the same",
    "concept": "Sight words (N.1)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Which pair shows the exact same sight word?",
    "visualEmoji": "👁️ 👯",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "and — and",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "and — ant",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "and — any",
          "isCorrect": false
        }
      ]
    },
    "explanation": "'and — and' is an exact match!",
    "points": 10
  },
  {
    "id": "lkg_skill_n_2_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "N.2: Read sight words set 1: a, in, run, the, you",
    "concept": "Sight words (N.2)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Complete the sentence: 'I see ___ big bus 🚌.'",
    "visualEmoji": "🚌 📖",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "a",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "the",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "in",
          "isCorrect": false
        }
      ]
    },
    "explanation": "'I see a big bus.' uses the sight word 'a'!",
    "points": 10
  },
  {
    "id": "lkg_skill_n_2_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "N.2: Read sight words set 1: a, in, run, the, you",
    "concept": "Sight words (N.2)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Complete the sentence: 'The pencil is ___ the box 📦.'",
    "visualEmoji": "📦 📖",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "in",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "a",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "run",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The pencil is 'in' the box!",
    "points": 10
  },
  {
    "id": "lkg_skill_n_2_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "N.2: Read sight words set 1: a, in, run, the, you",
    "concept": "Sight words (N.2)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which word describes moving very fast on your feet 🏃?",
    "visualEmoji": "🏃 📖",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "run",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "you",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "in",
          "isCorrect": false
        }
      ]
    },
    "explanation": "'run' means moving fast on foot!",
    "points": 10
  },
  {
    "id": "lkg_skill_n_2_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "N.2: Read sight words set 1: a, in, run, the, you",
    "concept": "Sight words (N.2)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Complete the greeting: 'How are ___ today 👋?'",
    "visualEmoji": "👋 📖",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "you",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "the",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "a",
          "isCorrect": false
        }
      ]
    },
    "explanation": "'How are you today?' uses the sight word 'you'!",
    "points": 10
  },
  {
    "id": "lkg_skill_n_3_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "N.3: Read sight words set 2: and, had, is, let, to",
    "concept": "Sight words (N.3)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Complete the sentence: 'I like bread ___ butter 🍞 🧈.'",
    "visualEmoji": "🍞 📖",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "and",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "had",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "to",
          "isCorrect": false
        }
      ]
    },
    "explanation": "'bread and butter' joins two yummy foods!",
    "points": 10
  },
  {
    "id": "lkg_skill_n_3_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "N.3: Read sight words set 2: and, had, is, let, to",
    "concept": "Sight words (N.3)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Complete the sentence: 'The sun ___ very bright ☀️.'",
    "visualEmoji": "☀️ 📖",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "is",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "let",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "and",
          "isCorrect": false
        }
      ]
    },
    "explanation": "'The sun is very bright' uses 'is'!",
    "points": 10
  },
  {
    "id": "lkg_skill_n_3_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "N.3: Read sight words set 2: and, had, is, let, to",
    "concept": "Sight words (N.3)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Complete the sentence: 'We walk ___ school together 🏫.'",
    "visualEmoji": "🏫 📖",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "to",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "had",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "is",
          "isCorrect": false
        }
      ]
    },
    "explanation": "'We walk to school' uses 'to'!",
    "points": 10
  },
  {
    "id": "lkg_skill_n_3_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "N.3: Read sight words set 2: and, had, is, let, to",
    "concept": "Sight words (N.3)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Complete the sentence: 'Please ___ the bird fly free 🕊️.'",
    "visualEmoji": "🕊️ 📖",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "let",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "is",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "and",
          "isCorrect": false
        }
      ]
    },
    "explanation": "'Please let the bird fly' uses 'let'!",
    "points": 10
  },
  {
    "id": "lkg_skill_n_4_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "N.4: Read sight words set 3: at, for, I, one, said",
    "concept": "Sight words (N.4)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Complete the sentence: '___ love my teacher ❤️.'",
    "visualEmoji": "❤️ 📖",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "I",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "at",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "one",
          "isCorrect": false
        }
      ]
    },
    "explanation": "'I love my teacher' begins with 'I'!",
    "points": 10
  },
  {
    "id": "lkg_skill_n_4_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "N.4: Read sight words set 3: at, for, I, one, said",
    "concept": "Sight words (N.4)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "There is only ___ moon in our night sky 🌙.",
    "visualEmoji": "🌙 📖",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "one",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "said",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "for",
          "isCorrect": false
        }
      ]
    },
    "explanation": "There is 'one' moon!",
    "points": 10
  },
  {
    "id": "lkg_skill_n_4_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "N.4: Read sight words set 3: at, for, I, one, said",
    "concept": "Sight words (N.4)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Complete the sentence: 'This sweet gift is ___ you 🎁.'",
    "visualEmoji": "🎁 📖",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "for",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "at",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "I",
          "isCorrect": false
        }
      ]
    },
    "explanation": "'This gift is for you' uses 'for'!",
    "points": 10
  },
  {
    "id": "lkg_skill_n_4_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "N.4: Read sight words set 3: at, for, I, one, said",
    "concept": "Sight words (N.4)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Complete the sentence: 'Mother ___ 'good night' with a smile 😊.'",
    "visualEmoji": "😊 📖",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "said",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "one",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "at",
          "isCorrect": false
        }
      ]
    },
    "explanation": "'Mother said good night' uses 'said'!",
    "points": 10
  },
  {
    "id": "lkg_skill_n_5_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "N.5: Read sight words: review sets 1, 2, 3",
    "concept": "Sight words (N.5)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Complete the sentence: 'Look at ___ bright shining stars ⭐.'",
    "visualEmoji": "⭐ 📖",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "the",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "had",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "run",
          "isCorrect": false
        }
      ]
    },
    "explanation": "'Look at the stars' uses 'the'!",
    "points": 10
  },
  {
    "id": "lkg_skill_n_5_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "N.5: Read sight words: review sets 1, 2, 3",
    "concept": "Sight words (N.5)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Complete the sentence: 'Yesterday, we ___ a fun picnic 🧺.'",
    "visualEmoji": "🧺 📖",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "had",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "one",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "let",
          "isCorrect": false
        }
      ]
    },
    "explanation": "'We had a fun picnic' uses 'had'!",
    "points": 10
  },
  {
    "id": "lkg_skill_n_5_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "N.5: Read sight words: review sets 1, 2, 3",
    "concept": "Sight words (N.5)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Complete the sentence: 'Look ___ that flying airplane ✈️.'",
    "visualEmoji": "✈️ 📖",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "at",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "said",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "is",
          "isCorrect": false
        }
      ]
    },
    "explanation": "'Look at that airplane' uses 'at'!",
    "points": 10
  },
  {
    "id": "lkg_skill_n_5_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "N.5: Read sight words: review sets 1, 2, 3",
    "concept": "Sight words (N.5)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Complete the sentence: 'The happy puppy likes to ___ in the park 🐶.'",
    "visualEmoji": "🐶 📖",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "run",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "for",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "to",
          "isCorrect": false
        }
      ]
    },
    "explanation": "'Puppy likes to run' uses 'run'!",
    "points": 10
  },
  {
    "id": "lkg_skill_n_6_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "N.6: Read sight words set 4: can, it, not, up, yes",
    "concept": "Sight words (N.6)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Complete the sentence: 'A lovely bird ___ fly in the sky 🦅.'",
    "visualEmoji": "🦅 📖",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "can",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "not",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "up",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A bird 'can' fly!",
    "points": 10
  },
  {
    "id": "lkg_skill_n_6_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "N.6: Read sight words set 4: can, it, not, up, yes",
    "concept": "Sight words (N.6)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Complete the sentence: 'Look at the balloon going ___ high 🎈.'",
    "visualEmoji": "🎈 📖",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "up",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "it",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "can",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The balloon goes 'up'!",
    "points": 10
  },
  {
    "id": "lkg_skill_n_6_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "N.6: Read sight words set 4: can, it, not, up, yes",
    "concept": "Sight words (N.6)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Complete the sentence: 'The baby is ___ crying now, she is smiling 👶.'",
    "visualEmoji": "👶 📖",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "not",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "yes",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "up",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The baby is 'not' crying!",
    "points": 10
  },
  {
    "id": "lkg_skill_n_6_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "N.6: Read sight words set 4: can, it, not, up, yes",
    "concept": "Sight words (N.6)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "When someone asks if you want an apple, you say: '___, please! 👍'",
    "visualEmoji": "👍 📖",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "yes",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "not",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "can",
          "isCorrect": false
        }
      ]
    },
    "explanation": "'yes, please!' is polite!",
    "points": 10
  },
  {
    "id": "lkg_skill_n_7_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "N.7: Read sight words set 5: an, do, jump, look, make",
    "concept": "Sight words (N.7)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Complete the sentence: 'I ate ___ apple for breakfast 🍎.'",
    "visualEmoji": "🍎 📖",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "an",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "do",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "make",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Before vowel sounds like apple, we say 'an'!",
    "points": 10
  },
  {
    "id": "lkg_skill_n_7_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "N.7: Read sight words set 5: an, do, jump, look, make",
    "concept": "Sight words (N.7)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Frogs and rabbits love to ___ high 🐸 🐰!",
    "visualEmoji": "🐸 📖",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "jump",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "look",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "an",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Rabbits and frogs 'jump'!",
    "points": 10
  },
  {
    "id": "lkg_skill_n_7_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "N.7: Read sight words set 5: an, do, jump, look, make",
    "concept": "Sight words (N.7)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Complete the sentence: '___ at the colorful rainbow 🌈!'",
    "visualEmoji": "🌈 📖",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "look",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "make",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "do",
          "isCorrect": false
        }
      ]
    },
    "explanation": "'look at the rainbow' invites us to see it!",
    "points": 10
  },
  {
    "id": "lkg_skill_n_7_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "N.7: Read sight words set 5: an, do, jump, look, make",
    "concept": "Sight words (N.7)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "We can ___ a clay house together 🎨.",
    "visualEmoji": "🎨 📖",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "make",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "jump",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "an",
          "isCorrect": false
        }
      ]
    },
    "explanation": "We 'make' creative things!",
    "points": 10
  },
  {
    "id": "lkg_skill_n_8_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "N.8: Read sight words set 6: down, go, out, so, two",
    "concept": "Sight words (N.8)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "The green traffic light says: '___' 🟢!",
    "visualEmoji": "🟢 📖",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "go",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "down",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "out",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Green means 'go'!",
    "points": 10
  },
  {
    "id": "lkg_skill_n_8_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "N.8: Read sight words set 6: down, go, out, so, two",
    "concept": "Sight words (N.8)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "How many eyes do we have 👀? We have ___.",
    "visualEmoji": "👀 📖",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "two",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "so",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "go",
          "isCorrect": false
        }
      ]
    },
    "explanation": "We have 'two' eyes!",
    "points": 10
  },
  {
    "id": "lkg_skill_n_8_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "N.8: Read sight words set 6: down, go, out, so, two",
    "concept": "Sight words (N.8)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Rain drops come falling ___ from the clouds 🌧️.",
    "visualEmoji": "🌧️ 📖",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "down",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "so",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "out",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Rain falls 'down' to the ground!",
    "points": 10
  },
  {
    "id": "lkg_skill_n_8_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "N.8: Read sight words set 6: down, go, out, so, two",
    "concept": "Sight words (N.8)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "The friendly lion stepped ___ of its den 🦁.",
    "visualEmoji": "🦁 📖",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "out",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "two",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "go",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The lion stepped 'out' into the open!",
    "points": 10
  },
  {
    "id": "lkg_skill_n_9_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "N.9: Read sight words: review sets 4, 5, 6",
    "concept": "Sight words (N.9)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Complete the sentence: 'We ___ build a sandcastle 🏖️.'",
    "visualEmoji": "🏖️ 📖",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "can",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "down",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "not",
          "isCorrect": false
        }
      ]
    },
    "explanation": "'We can build' uses 'can'!",
    "points": 10
  },
  {
    "id": "lkg_skill_n_9_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "N.9: Read sight words: review sets 4, 5, 6",
    "concept": "Sight words (N.9)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Complete the sentence: 'Kangaroo likes to ___ across grass 🦘.'",
    "visualEmoji": "🦘 📖",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "jump",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "two",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "out",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Kangaroos 'jump'!",
    "points": 10
  },
  {
    "id": "lkg_skill_n_9_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "N.9: Read sight words: review sets 4, 5, 6",
    "concept": "Sight words (N.9)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "A bicycle has ___ wheels 🚲.",
    "visualEmoji": "🚲 📖",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "two",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "go",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "make",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A bicycle has 'two' wheels!",
    "points": 10
  },
  {
    "id": "lkg_skill_n_9_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "N.9: Read sight words: review sets 4, 5, 6",
    "concept": "Sight words (N.9)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Complete the sentence: 'Come and ___ at this cute puppy 🐕.'",
    "visualEmoji": "🐕 📖",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "look",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "an",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "up",
          "isCorrect": false
        }
      ]
    },
    "explanation": "'Come and look' uses 'look'!",
    "points": 10
  },
  {
    "id": "lkg_skill_n_10_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "N.10: Read sight words set 7: find, my, no, red, see",
    "concept": "Sight words (N.10)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "We open our eyes to ___ the world 👀.",
    "visualEmoji": "👀 📖",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "see",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "no",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "red",
          "isCorrect": false
        }
      ]
    },
    "explanation": "We use our eyes to 'see'!",
    "points": 10
  },
  {
    "id": "lkg_skill_n_10_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "N.10: Read sight words set 7: find, my, no, red, see",
    "concept": "Sight words (N.10)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Complete the sentence: 'This is ___ favorite storybook 📖.'",
    "visualEmoji": "📖 ✨",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "my",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "find",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "no",
          "isCorrect": false
        }
      ]
    },
    "explanation": "'This is my book' uses 'my'!",
    "points": 10
  },
  {
    "id": "lkg_skill_n_10_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "N.10: Read sight words set 7: find, my, no, red, see",
    "concept": "Sight words (N.10)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "What color is a ripe cherry 🍒?",
    "visualEmoji": "🍒 🔴",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "red",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "find",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "see",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A cherry is 'red'!",
    "points": 10
  },
  {
    "id": "lkg_skill_n_10_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "N.10: Read sight words set 7: find, my, no, red, see",
    "concept": "Sight words (N.10)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Can you help me ___ my lost toy 🧸?",
    "visualEmoji": "🧸 🔍",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "find",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "my",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "no",
          "isCorrect": false
        }
      ]
    },
    "explanation": "'help me find my toy' uses 'find'!",
    "points": 10
  },
  {
    "id": "lkg_skill_n_11_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "N.11: Read sight words set 8: come, funny, little, me, sit",
    "concept": "Sight words (N.11)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Teacher said: 'Please ___ into the classroom 🏫.'",
    "visualEmoji": "🏫 📖",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "come",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "sit",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "funny",
          "isCorrect": false
        }
      ]
    },
    "explanation": "'Please come in' uses 'come'!",
    "points": 10
  },
  {
    "id": "lkg_skill_n_11_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "N.11: Read sight words set 8: come, funny, little, me, sit",
    "concept": "Sight words (N.11)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "A tiny ladybug 🐞 is very ___.",
    "visualEmoji": "🐞 📖",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "little",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "funny",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "me",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A tiny ladybug is 'little'!",
    "points": 10
  },
  {
    "id": "lkg_skill_n_11_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "N.11: Read sight words set 8: come, funny, little, me, sit",
    "concept": "Sight words (N.11)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "When storytime begins, children ___ on the carpet 🪑.",
    "visualEmoji": "🪑 📖",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "sit",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "come",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "me",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Children 'sit' on the carpet!",
    "points": 10
  },
  {
    "id": "lkg_skill_n_11_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "N.11: Read sight words set 8: come, funny, little, me, sit",
    "concept": "Sight words (N.11)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "The friendly clown made everyone giggle because he was so 🤡!",
    "visualEmoji": "🤡 📖",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "funny",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "little",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "come",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A cheerful clown is 'funny'!",
    "points": 10
  },
  {
    "id": "lkg_skill_n_12_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "N.12: Read sight words set 9: big, help, play, three, yellow",
    "concept": "Sight words (N.12)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "An elephant 🐘 is huge and ___!",
    "visualEmoji": "🐘 📖",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "big",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "yellow",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "help",
          "isCorrect": false
        }
      ]
    },
    "explanation": "An elephant is 'big'!",
    "points": 10
  },
  {
    "id": "lkg_skill_n_12_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "N.12: Read sight words set 9: big, help, play, three, yellow",
    "concept": "Sight words (N.12)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "A fresh ripe banana 🍌 is bright ___.",
    "visualEmoji": "🍌 💛",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "yellow",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "play",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "three",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A banana is 'yellow'!",
    "points": 10
  },
  {
    "id": "lkg_skill_n_12_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "N.12: Read sight words set 9: big, help, play, three, yellow",
    "concept": "Sight words (N.12)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Children love to ___ football in the garden ⚽.",
    "visualEmoji": "⚽ 📖",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "play",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "help",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "big",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Children love to 'play'!",
    "points": 10
  },
  {
    "id": "lkg_skill_n_12_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "N.12: Read sight words set 9: big, help, play, three, yellow",
    "concept": "Sight words (N.12)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Count the stars: ⭐ ⭐ ⭐. There are ___ stars.",
    "visualEmoji": "⭐ 📖",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "three",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "yellow",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "big",
          "isCorrect": false
        }
      ]
    },
    "explanation": "There are 'three' stars!",
    "points": 10
  },
  {
    "id": "lkg_skill_n_13_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "N.13: Read sight words set 10: away, blue, here, us, where",
    "concept": "Sight words (N.13)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "The clear morning sky ☁️ is pretty and ___.",
    "visualEmoji": "☁️ 💙",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "blue",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "away",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "us",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The sky is 'blue'!",
    "points": 10
  },
  {
    "id": "lkg_skill_n_13_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "N.13: Read sight words set 10: away, blue, here, us, where",
    "concept": "Sight words (N.13)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "When looking for your missing shoe, you ask: '___ is my shoe 👟?'",
    "visualEmoji": "👟 🔍",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "where",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "here",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "away",
          "isCorrect": false
        }
      ]
    },
    "explanation": "'where is my shoe?' asks for location!",
    "points": 10
  },
  {
    "id": "lkg_skill_n_13_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "N.13: Read sight words set 10: away, blue, here, us, where",
    "concept": "Sight words (N.13)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Complete the sentence: 'Please come sit right ___ next to me 🪑.'",
    "visualEmoji": "🪑 📖",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "here",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "us",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "blue",
          "isCorrect": false
        }
      ]
    },
    "explanation": "'come sit right here' uses 'here'!",
    "points": 10
  },
  {
    "id": "lkg_skill_n_13_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "N.13: Read sight words set 10: away, blue, here, us, where",
    "concept": "Sight words (N.13)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "The butterfly flapped its wings and flew ___ 🦋.",
    "visualEmoji": "🦋 📖",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "away",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "where",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "us",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The butterfly flew 'away'!",
    "points": 10
  },
  {
    "id": "lkg_skill_n_14_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "N.14: Read sight words: review sets 7, 8, 9, 10",
    "concept": "Sight words (N.14)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "With our eyes, we can ___ beautiful birds 🦚.",
    "visualEmoji": "🦚 📖",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "see",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "big",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "where",
          "isCorrect": false
        }
      ]
    },
    "explanation": "We 'see' with our eyes!",
    "points": 10
  },
  {
    "id": "lkg_skill_n_14_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "N.14: Read sight words: review sets 7, 8, 9, 10",
    "concept": "Sight words (N.14)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "A baby kitten 🐱 is sweet and ___.",
    "visualEmoji": "🐱 📖",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "little",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "red",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "here",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A kitten is 'little'!",
    "points": 10
  },
  {
    "id": "lkg_skill_n_14_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "N.14: Read sight words: review sets 7, 8, 9, 10",
    "concept": "Sight words (N.14)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Good friends always ___ each other 🤝.",
    "visualEmoji": "🤝 📖",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "help",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "no",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "away",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Friends 'help' each other!",
    "points": 10
  },
  {
    "id": "lkg_skill_n_14_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "N.14: Read sight words: review sets 7, 8, 9, 10",
    "concept": "Sight words (N.14)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "The deep ocean water 🌊 is bright ___.",
    "visualEmoji": "🌊 💙",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "blue",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "sit",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "find",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The ocean is 'blue'!",
    "points": 10
  },
  {
    "id": "lkg_skill_n_15_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "N.15: Read sight words: review sets 1-10",
    "concept": "Sight words (N.15)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Children love to ___ games in the playground 🛝.",
    "visualEmoji": "🛝 📖",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "play",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "said",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "one",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Children love to 'play'!",
    "points": 10
  },
  {
    "id": "lkg_skill_n_15_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "N.15: Read sight words: review sets 1-10",
    "concept": "Sight words (N.15)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Can you help me ___ my missing crayons 🖍️?",
    "visualEmoji": "🖍️ 🔍",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "find",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "down",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "yes",
          "isCorrect": false
        }
      ]
    },
    "explanation": "'help me find' uses 'find'!",
    "points": 10
  },
  {
    "id": "lkg_skill_n_15_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "N.15: Read sight words: review sets 1-10",
    "concept": "Sight words (N.15)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Always ___ your friends when they need a hand 🤝.",
    "visualEmoji": "🤝 📖",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "help",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "two",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "run",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Always 'help' friends!",
    "points": 10
  },
  {
    "id": "lkg_skill_n_15_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "N.15: Read sight words: review sets 1-10",
    "concept": "Sight words (N.15)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Frogs love to ___ into the cool pond 🐸 💦.",
    "visualEmoji": "🐸 💦",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "jump",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "make",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "look",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Frogs 'jump' into ponds!",
    "points": 10
  },
  {
    "id": "lkg_skill_o_1_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "O.1: Identify book parts and features",
    "concept": "Text features (O.1)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which part of a book shows the picture and title on the front 📖?",
    "visualEmoji": "📖 🏷️",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "Front Cover",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "Back Cover",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "Spine",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The front cover is the very first page showing the title and picture!",
    "points": 10
  },
  {
    "id": "lkg_skill_o_1_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "O.1: Identify book parts and features",
    "concept": "Text features (O.1)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Who is the person that writes the words in a storybook ✍️?",
    "visualEmoji": "✍️ 📖",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "Author",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "Doctor",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "Driver",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The author writes the wonderful story words!",
    "points": 10
  },
  {
    "id": "lkg_skill_o_1_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "O.1: Identify book parts and features",
    "concept": "Text features (O.1)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Who draws the colorful pictures and drawings in a book 🎨?",
    "visualEmoji": "🎨 📖",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "Illustrator",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "Cook",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "Pilot",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The illustrator paints and draws the pictures!",
    "points": 10
  },
  {
    "id": "lkg_skill_o_1_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "O.1: Identify book parts and features",
    "concept": "Text features (O.1)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "What is the special name of a book called (like 'Goldilocks')?",
    "visualEmoji": "🏷️ 📖",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "Title",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "Page",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "Bookmark",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The title is the name of the book!",
    "points": 10
  },
  {
    "id": "lkg_skill_p_1_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "P.1: Which could happen in real life?",
    "concept": "Reality vs fiction (P.1)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which of these can REALLY happen in real life?",
    "visualEmoji": "🐕 🪄",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "A dog barks and wags its tail 🐕",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "A dog drives a sports car 🚗",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "A dog cooks soup with a spoon 🍲",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Dogs really bark and wag their tails in real life!",
    "points": 10
  },
  {
    "id": "lkg_skill_p_1_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "P.1: Which could happen in real life?",
    "concept": "Reality vs fiction (P.1)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which of these is MAKE-BELIEVE (pretend/fiction)?",
    "visualEmoji": "🐉 🪄",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "A dragon breathes pink glitter sparkles 🐉",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "A bird builds a twig nest 🪺",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "A cow eats green grass 🐄",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Glitter dragons live only in magical fairy tales!",
    "points": 10
  },
  {
    "id": "lkg_skill_p_1_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "P.1: Which could happen in real life?",
    "concept": "Reality vs fiction (P.1)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which of these can REALLY happen in nature?",
    "visualEmoji": "🌧️ 🪄",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "Rain drops fall from dark clouds 🌧️",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "Lollipops grow on oak trees 🍭",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "The moon wears sunglasses and dances 🕶️",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Rain really falls from grey clouds in nature!",
    "points": 10
  },
  {
    "id": "lkg_skill_p_1_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "P.1: Which could happen in real life?",
    "concept": "Reality vs fiction (P.1)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Which event is REAL?",
    "visualEmoji": "👶 🪄",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "A little baby learns to crawl 👶",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "A fish rides a bicycle on land 🚲",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "A teapot sings opera on the stove 🫖",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Real human babies crawl on hands and knees!",
    "points": 10
  },
  {
    "id": "lkg_skill_q_1_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "Q.1: Which feeling matches the picture?",
    "concept": "Inference and analysis (Q.1)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "A child is smiling widely with colorful birthday balloons 🎈 😊. How do they feel?",
    "visualEmoji": "😃 🎈",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "Happy 😃",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "Sad 😢",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "Angry 😡",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Big smiles mean happy feelings!",
    "points": 10
  },
  {
    "id": "lkg_skill_q_1_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "Q.1: Which feeling matches the picture?",
    "concept": "Inference and analysis (Q.1)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "A boy dropped his ice cream cone on the ground 🍦 😢. How does he feel?",
    "visualEmoji": "😢 🍦",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "Sad 😢",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "Excited 🥳",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "Sleepy 😴",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Losing an ice cream makes him feel sad!",
    "points": 10
  },
  {
    "id": "lkg_skill_q_1_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "Q.1: Which feeling matches the picture?",
    "concept": "Inference and analysis (Q.1)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "A girl hears a sudden loud pop and opens her eyes wide 😲 💥. How does she feel?",
    "visualEmoji": "😲 💥",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "Surprised 😲",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "Bored 🥱",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "Angry 😡",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Wide eyes from a sudden noise show surprise!",
    "points": 10
  },
  {
    "id": "lkg_skill_q_1_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "Q.1: Which feeling matches the picture?",
    "concept": "Inference and analysis (Q.1)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "A puppy yawns gently and curls up on a soft blanket 🐶 💤. How does it feel?",
    "visualEmoji": "😴 💤",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "Tired and Sleepy 😴",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "Excited 🥳",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "Scared 😨",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Yawning and curling up means sleepy!",
    "points": 10
  },
  {
    "id": "lkg_skill_q_2_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "Q.2: What will happen next?",
    "concept": "Inference and analysis (Q.2)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Dark grey clouds fill the sky and thunder rumbles ☁️ ⚡. What will happen next?",
    "visualEmoji": "🌧️ 🔮",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "It will begin to rain 🌧️",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "Snow will turn into ice cream 🍦",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "The sun will turn bright green 🟢",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Dark storm clouds bring rain!",
    "points": 10
  },
  {
    "id": "lkg_skill_q_2_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "Q.2: What will happen next?",
    "concept": "Inference and analysis (Q.2)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "A baker puts cookie dough into a warm oven 🍪 ♨️. What will happen next?",
    "visualEmoji": "🍪 🔮",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "Delicious cookies will bake 🍪",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "The dough turns into a puppy 🐶",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "The oven turns into a refrigerator 🧊",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Baking turns dough into delicious cookies!",
    "points": 10
  },
  {
    "id": "lkg_skill_q_2_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "Q.2: What will happen next?",
    "concept": "Inference and analysis (Q.2)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "A gardener plants a flower seed in moist soil and waters it 🌱 💧. What will happen next?",
    "visualEmoji": "🌱 🔮",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "A green sprout will grow 🌱",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "A rock will appear 🪨",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "The soil will fly into the sky 🚀",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Water and soil help seeds sprout!",
    "points": 10
  },
  {
    "id": "lkg_skill_q_2_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "Q.2: What will happen next?",
    "concept": "Inference and analysis (Q.2)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "A child blows air continuously into a balloon without tying it 🎈. What happens if they let go?",
    "visualEmoji": "🎈 💨",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "The balloon will zoom around the room 🎈💨",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "The balloon turns into gold 🏆",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "The balloon turns into water 💧",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Untied air makes balloons zoom and fly!",
    "points": 10
  },
  {
    "id": "lkg_skill_r_1_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "R.1: Use colour words",
    "concept": "Colour and number words (R.1)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "What colour is the sweet ripe strawberry 🍓?",
    "visualEmoji": "🍓 🎨",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "Red",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "Blue",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "Yellow",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A ripe strawberry is red!",
    "points": 10
  },
  {
    "id": "lkg_skill_r_1_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "R.1: Use colour words",
    "concept": "Colour and number words (R.1)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "What colour is a fresh sunny lemon 🍋?",
    "visualEmoji": "🍋 🎨",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "Yellow",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "Purple",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "Black",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A ripe lemon is bright yellow!",
    "points": 10
  },
  {
    "id": "lkg_skill_r_1_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "R.1: Use colour words",
    "concept": "Colour and number words (R.1)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "What colour is a fresh green leaf on a tree 🍃?",
    "visualEmoji": "🍃 🎨",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "Green",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "Orange",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "Pink",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Tree leaves are green!",
    "points": 10
  },
  {
    "id": "lkg_skill_r_1_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "R.1: Use colour words",
    "concept": "Colour and number words (R.1)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "What colour is the deep ocean water 🌊?",
    "visualEmoji": "🌊 🎨",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "Blue",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "Brown",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "Red",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The deep sea looks blue!",
    "points": 10
  },
  {
    "id": "lkg_skill_r_2_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "R.2: Use number words: one to five",
    "concept": "Colour and number words (R.2)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Count the ducks: 🦆 🦆. Which number word matches?",
    "visualEmoji": "🦆 🖐️",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "two",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "one",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "three",
          "isCorrect": false
        }
      ]
    },
    "explanation": "1, 2 = two ducks!",
    "points": 10
  },
  {
    "id": "lkg_skill_r_2_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "R.2: Use number words: one to five",
    "concept": "Colour and number words (R.2)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Count the butterfly: 🦋. Which number word matches?",
    "visualEmoji": "🦋 🖐️",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "one",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "two",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "four",
          "isCorrect": false
        }
      ]
    },
    "explanation": "There is only one butterfly!",
    "points": 10
  },
  {
    "id": "lkg_skill_r_2_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "R.2: Use number words: one to five",
    "concept": "Colour and number words (R.2)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Count the stars: ⭐ ⭐ ⭐ ⭐. Which number word matches?",
    "visualEmoji": "⭐ 🖐️",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "four",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "three",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "five",
          "isCorrect": false
        }
      ]
    },
    "explanation": "1, 2, 3, 4 = four stars!",
    "points": 10
  },
  {
    "id": "lkg_skill_r_2_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "R.2: Use number words: one to five",
    "concept": "Colour and number words (R.2)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Count the fingers on one hand 🖐️. Which number word matches?",
    "visualEmoji": "🖐️ ✨",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "five",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "four",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "three",
          "isCorrect": false
        }
      ]
    },
    "explanation": "One hand has five fingers!",
    "points": 10
  },
  {
    "id": "lkg_skill_r_3_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "R.3: Use number words: six to ten",
    "concept": "Colour and number words (R.3)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Count the blue marbles: 🔵 🔵 🔵 🔵 🔵 🔵. Which number word matches?",
    "visualEmoji": "🔵 🔟",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "six",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "five",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "seven",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Count them up: six marbles!",
    "points": 10
  },
  {
    "id": "lkg_skill_r_3_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "R.3: Use number words: six to ten",
    "concept": "Colour and number words (R.3)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Count the birthday candles: 🕯️ 🕯️ 🕯️ 🕯️ 🕯️ 🕯️ 🕯️ (7). Which number word matches?",
    "visualEmoji": "🕯️ 🔟",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "seven",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "six",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "eight",
          "isCorrect": false
        }
      ]
    },
    "explanation": "There are seven candles!",
    "points": 10
  },
  {
    "id": "lkg_skill_r_3_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "R.3: Use number words: six to ten",
    "concept": "Colour and number words (R.3)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Count the spider legs: 🕷️ (4 on left + 4 on right = 8). Which number word matches?",
    "visualEmoji": "🕷️ 🔟",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "eight",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "seven",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "nine",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Spiders have eight legs!",
    "points": 10
  },
  {
    "id": "lkg_skill_r_3_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "R.3: Use number words: six to ten",
    "concept": "Colour and number words (R.3)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Count the bowling pins: 🎳 (10 pins total). Which number word matches?",
    "visualEmoji": "🎳 🔟",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "ten",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "nine",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "eight",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A full set has ten bowling pins!",
    "points": 10
  },
  {
    "id": "lkg_skill_r_4_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "R.4: Use number words: one to ten",
    "concept": "Colour and number words (R.4)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Count the juicy apples: 🍎 🍎 🍎. Which number word matches?",
    "visualEmoji": "🍎 🔢",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "three",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "two",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "four",
          "isCorrect": false
        }
      ]
    },
    "explanation": "1, 2, 3 = three apples!",
    "points": 10
  },
  {
    "id": "lkg_skill_r_4_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "R.4: Use number words: one to ten",
    "concept": "Colour and number words (R.4)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Count the colorful crayons: 🖍️ 🖍️ 🖍️ 🖍️ 🖍️ 🖍️ 🖍️ 🖍️ 🖍️ (9). Which number word matches?",
    "visualEmoji": "🖍️ 🔢",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "nine",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "eight",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "ten",
          "isCorrect": false
        }
      ]
    },
    "explanation": "There are nine crayons in the set!",
    "points": 10
  },
  {
    "id": "lkg_skill_r_4_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "R.4: Use number words: one to ten",
    "concept": "Colour and number words (R.4)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Count the soccer balls: ⚽ ⚽ ⚽ ⚽ ⚽ (5). Which number word matches?",
    "visualEmoji": "⚽ 🔢",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "five",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "four",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "six",
          "isCorrect": false
        }
      ]
    },
    "explanation": "There are five balls!",
    "points": 10
  },
  {
    "id": "lkg_skill_r_4_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "R.4: Use number words: one to ten",
    "concept": "Colour and number words (R.4)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Count the rainbow colors: 🌈 (7 colors). Which number word matches?",
    "visualEmoji": "🌈 🔢",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "seven",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "six",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "eight",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A rainbow has seven pretty colors!",
    "points": 10
  },
  {
    "id": "lkg_skill_s_1_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "S.1: Choose the singular or plural noun that matches the picture",
    "concept": "Nouns (S.1)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Look at the picture: 🐱. Is it one cat or many cats?",
    "visualEmoji": "🐱 📦",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "One cat (singular)",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "Many cats (plural)",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Just 1 cat is singular!",
    "points": 10
  },
  {
    "id": "lkg_skill_s_1_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "S.1: Choose the singular or plural noun that matches the picture",
    "concept": "Nouns (S.1)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Look at the picture: 🍎 🍎 🍎. Which word matches correctly?",
    "visualEmoji": "🍎 📦",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "apples",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "apple",
          "isCorrect": false
        }
      ]
    },
    "explanation": "More than one apple is 'apples'!",
    "points": 10
  },
  {
    "id": "lkg_skill_s_1_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "S.1: Choose the singular or plural noun that matches the picture",
    "concept": "Nouns (S.1)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at the picture: 🐕 🐕. Which word matches correctly?",
    "visualEmoji": "🐕 📦",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "dogs",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "dog",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Two friendly dogs is 'dogs'!",
    "points": 10
  },
  {
    "id": "lkg_skill_s_1_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "S.1: Choose the singular or plural noun that matches the picture",
    "concept": "Nouns (S.1)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Look at the picture: 🚗. Which word matches correctly?",
    "visualEmoji": "🚗 📦",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "car",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "cars",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A single car is 'car'!",
    "points": 10
  },
  {
    "id": "lkg_skill_t_1_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "T.1: Find the picture that matches the action verb",
    "concept": "Verbs (T.1)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Look at the energetic bunny hopping high 🐰 💨. Which action verb matches?",
    "visualEmoji": "🐰 🏃",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "jump 🦘",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "sleep 😴",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "sit 🪑",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Hopping up and down is 'jump'!",
    "points": 10
  },
  {
    "id": "lkg_skill_t_1_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "T.1: Find the picture that matches the action verb",
    "concept": "Verbs (T.1)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Look at the dolphin gliding through the ocean 🐬 🌊. Which action verb matches?",
    "visualEmoji": "🐬 🌊",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "swim 🏊",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "walk 🚶",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "climb 🧗",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Moving in water is 'swim'!",
    "points": 10
  },
  {
    "id": "lkg_skill_t_1_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "T.1: Find the picture that matches the action verb",
    "concept": "Verbs (T.1)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at the child fast in sports shoes 🏃 💨. Which action verb matches?",
    "visualEmoji": "🏃 👟",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "run 👟",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "eat 🍽️",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "read 📖",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Moving rapidly on foot is 'run'!",
    "points": 10
  },
  {
    "id": "lkg_skill_t_1_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "T.1: Find the picture that matches the action verb",
    "concept": "Verbs (T.1)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Look at the owl resting quietly with eyes closed at night 🦉 💤. Which action verb matches?",
    "visualEmoji": "🦉 💤",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "sleep 😴",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "dance 💃",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "shout 🗣️",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Resting with eyes closed is 'sleep'!",
    "points": 10
  },
  {
    "id": "lkg_skill_u_1_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "U.1: Compare pictures using adjectives",
    "concept": "Adjectives (U.1)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Compare the giraffe 🦒 and the turtle 🐢: The giraffe is ___.",
    "visualEmoji": "🦒 🐢",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "tall 🦒",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "short 🐢",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "tiny 🐜",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The giraffe has a long neck and is tall!",
    "points": 10
  },
  {
    "id": "lkg_skill_u_1_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "U.1: Compare pictures using adjectives",
    "concept": "Adjectives (U.1)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Compare the elephant 🐘 and the mouse 🐁: The elephant is ___.",
    "visualEmoji": "🐘 🐁",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "big 🐘",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "small 🐁",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "thin 🪱",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The elephant is very big!",
    "points": 10
  },
  {
    "id": "lkg_skill_u_1_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "U.1: Compare pictures using adjectives",
    "concept": "Adjectives (U.1)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Compare hot tea ☕ and an ice cube 🧊: The ice cube is ___.",
    "visualEmoji": "☕ 🧊",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "cold 🧊",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "hot ♨️",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "warm ☀️",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Ice feels freezing cold!",
    "points": 10
  },
  {
    "id": "lkg_skill_u_1_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "U.1: Compare pictures using adjectives",
    "concept": "Adjectives (U.1)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Compare a cheetah 🐆 and a snail 🐌: The cheetah is ___.",
    "visualEmoji": "🐆 🐌",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "fast 🐆",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "slow 🐌",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "heavy 🪨",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The cheetah sprints super fast!",
    "points": 10
  },
  {
    "id": "lkg_skill_v_1_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "V.1: Inside and outside",
    "concept": "Location words (V.1)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "The baby birds are sitting safe in their nest 🪺. Are they inside or outside?",
    "visualEmoji": "🪺 🚪",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "Inside the nest 🪺",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "Outside the nest",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The chicks are snugly inside their nest!",
    "points": 10
  },
  {
    "id": "lkg_skill_v_1_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "V.1: Inside and outside",
    "concept": "Location words (V.1)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Children are playing on the grass under the blue sky 🏡 🌳. Are they inside or outside?",
    "visualEmoji": "🌳 🚪",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "Outside in the garden 🌳",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "Inside the house",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Playing on open grass is outside!",
    "points": 10
  },
  {
    "id": "lkg_skill_v_1_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "V.1: Inside and outside",
    "concept": "Location words (V.1)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "The gold fish is swimming in the glass bowl 🐠 🥣. Where is the fish?",
    "visualEmoji": "🐠 🥣",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "Inside the bowl 🥣",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "Outside the bowl",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The fish stays inside the water bowl!",
    "points": 10
  },
  {
    "id": "lkg_skill_v_1_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "V.1: Inside and outside",
    "concept": "Location words (V.1)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "The family car is parked on the street in front of the house 🚗. Where is the car?",
    "visualEmoji": "🚗 🏡",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "Outside on the street 🚗",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "Inside the living room",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The car is outside on the open driveway!",
    "points": 10
  },
  {
    "id": "lkg_skill_v_2_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "V.2: Above and below",
    "concept": "Location words (V.2)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "The airplane flies high over the clouds ✈️ ☁️. Is it above or below the clouds?",
    "visualEmoji": "✈️ ☁️",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "Above the clouds ✈️",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "Below the ground",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Airplanes fly above the clouds!",
    "points": 10
  },
  {
    "id": "lkg_skill_v_2_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "V.2: Above and below",
    "concept": "Location words (V.2)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Plant roots grow deep under the soil 🌱 🪴. Are they above or below the ground?",
    "visualEmoji": "🌱 🪴",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "Below the ground 🌱",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "Above in the sky",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Roots spread below the surface of the soil!",
    "points": 10
  },
  {
    "id": "lkg_skill_v_2_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "V.2: Above and below",
    "concept": "Location words (V.2)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "A kite is soaring over the tall pine trees 🪁 🌲. Where is the kite?",
    "visualEmoji": "🪁 🌲",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "Above the trees 🪁",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "Below under the grass",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The kite flies high above the trees!",
    "points": 10
  },
  {
    "id": "lkg_skill_v_2_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "V.2: Above and below",
    "concept": "Location words (V.2)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "A submarine travels deep under the ocean surface 🚢 🌊. Where is it?",
    "visualEmoji": "🚢 🌊",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "Below the water 🌊",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "Above the sun",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A submarine travels below the waves!",
    "points": 10
  },
  {
    "id": "lkg_skill_v_3_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "V.3: Next to and beside",
    "concept": "Location words (V.3)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "A cute teddy bear is sitting right beside a gift box 🧸 🎁. Where is the teddy?",
    "visualEmoji": "🧸 🎁",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "Next to the gift box 🎁",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "Inside the mailbox",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "Above the moon",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The teddy sits next to the gift box!",
    "points": 10
  },
  {
    "id": "lkg_skill_v_3_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "V.3: Next to and beside",
    "concept": "Location words (V.3)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "A chair is placed right beside the study desk 🪑 🪵. Where is the chair?",
    "visualEmoji": "🪑 🪵",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "Beside the desk 🪵",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "On top of the roof",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "Under the carpet",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The chair is beside the desk!",
    "points": 10
  },
  {
    "id": "lkg_skill_v_3_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "V.3: Next to and beside",
    "concept": "Location words (V.3)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "A little duckling waddles right next to mother duck 🦆 🐥. Where is the duckling?",
    "visualEmoji": "🦆 🐥",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "Next to mother duck 🦆",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "Far away on a mountain",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "Inside a bottle",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The duckling stays next to mother duck!",
    "points": 10
  },
  {
    "id": "lkg_skill_v_3_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "V.3: Next to and beside",
    "concept": "Location words (V.3)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "A flower pot rests beside the sunny window 🪴 🪟. Where is the flower pot?",
    "visualEmoji": "🪴 🪟",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "Beside the window 🪟",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "Behind the refrigerator",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "Under the bed",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The plant gets sunlight beside the window!",
    "points": 10
  },
  {
    "id": "lkg_skill_w_1_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "W.1: Match antonyms to pictures",
    "concept": "Antonyms (W.1)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "What is the opposite (antonym) of HOT ☕?",
    "visualEmoji": "☕ 🧊",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "Cold 🧊",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "Warm ☀️",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "Red 🔴",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Cold is the opposite of Hot!",
    "points": 10
  },
  {
    "id": "lkg_skill_w_1_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "W.1: Match antonyms to pictures",
    "concept": "Antonyms (W.1)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "What is the opposite (antonym) of HAPPY 😊?",
    "visualEmoji": "😊 😢",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "Sad 😢",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "Funny 🤡",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "Kind 💖",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Sad is the opposite of Happy!",
    "points": 10
  },
  {
    "id": "lkg_skill_w_1_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "W.1: Match antonyms to pictures",
    "concept": "Antonyms (W.1)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "What is the opposite (antonym) of BIG 🐘?",
    "visualEmoji": "🐘 🐁",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "Small 🐁",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "Tall 🦒",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "Fat 🐻",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Small is the opposite of Big!",
    "points": 10
  },
  {
    "id": "lkg_skill_w_1_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "W.1: Match antonyms to pictures",
    "concept": "Antonyms (W.1)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "What is the opposite (antonym) of UP ⬆️?",
    "visualEmoji": "⬆️ ⬇️",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "Down ⬇️",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "High ☁️",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "Over 🪜",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Down is the opposite of Up!",
    "points": 10
  },
  {
    "id": "lkg_skill_x_1_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "X.1: Sort objects into categories",
    "concept": "Categories (X.1)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Apple 🍎, Banana 🍌, and Mango 🥭 all belong to which group?",
    "visualEmoji": "🍎 🧺",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "Fruits 🍎",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "Animals 🦁",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "Vehicles 🚗",
          "isCorrect": false
        }
      ]
    },
    "explanation": "They are all delicious fruits!",
    "points": 10
  },
  {
    "id": "lkg_skill_x_1_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "X.1: Sort objects into categories",
    "concept": "Categories (X.1)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Car 🚗, Bus 🚌, and Train 🚆 all belong to which group?",
    "visualEmoji": "🚗 🧺",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "Vehicles 🚗",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "Fruits 🍌",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "Clothes 👕",
          "isCorrect": false
        }
      ]
    },
    "explanation": "They are all transport vehicles!",
    "points": 10
  },
  {
    "id": "lkg_skill_x_1_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "X.1: Sort objects into categories",
    "concept": "Categories (X.1)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Lion 🦁, Tiger 🐯, and Bear 🐻 all belong to which group?",
    "visualEmoji": "🦁 🧺",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "Animals 🦁",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "Toys 🪀",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "Foods 🍞",
          "isCorrect": false
        }
      ]
    },
    "explanation": "They are all magnificent animals!",
    "points": 10
  },
  {
    "id": "lkg_skill_x_1_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "X.1: Sort objects into categories",
    "concept": "Categories (X.1)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Shirt 👕, Pants 👖, and Cap 🧢 all belong to which group?",
    "visualEmoji": "👕 🧺",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "Clothes 👕",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "Vehicles 🚌",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "Vegetables 🥕",
          "isCorrect": false
        }
      ]
    },
    "explanation": "They are all clothing we wear!",
    "points": 10
  },
  {
    "id": "lkg_skill_x_2_q01",
    "grade": "LKG",
    "subject": "english",
    "chapter": "X.2: Which one is not like the others?",
    "concept": "Categories (X.2)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which one does NOT belong (Odd One Out): 🍎 Apple, 🍌 Banana, 🥕 Carrot, 🍇 Grapes?",
    "visualEmoji": "🥕 🔍",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "Carrot 🥕 (It is a vegetable, others are fruits)",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "Apple 🍎",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "Banana 🍌",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Carrot is a crunchy root vegetable, while the rest are sweet fruits!",
    "points": 10
  },
  {
    "id": "lkg_skill_x_2_q02",
    "grade": "LKG",
    "subject": "english",
    "chapter": "X.2: Which one is not like the others?",
    "concept": "Categories (X.2)",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which one does NOT belong (Odd One Out): 🦁 Lion, 🐯 Tiger, 🐻 Bear, 🚗 Car?",
    "visualEmoji": "🚗 🔍",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "Car 🚗 (It is a machine, others are living animals)",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "Lion 🦁",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "Bear 🐻",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A car is a machine, while the others are wild animals!",
    "points": 10
  },
  {
    "id": "lkg_skill_x_2_q03",
    "grade": "LKG",
    "subject": "english",
    "chapter": "X.2: Which one is not like the others?",
    "concept": "Categories (X.2)",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which one does NOT belong (Odd One Out): ✈️ Airplane, 🚁 Helicopter, 🚀 Rocket, 🐟 Fish?",
    "visualEmoji": "🐟 🔍",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "Fish 🐟 (It swims underwater, others fly high)",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "Airplane ✈️",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "Rocket 🚀",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A fish lives underwater, while the others fly up in the air!",
    "points": 10
  },
  {
    "id": "lkg_skill_x_2_q04",
    "grade": "LKG",
    "subject": "english",
    "chapter": "X.2: Which one is not like the others?",
    "concept": "Categories (X.2)",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Which one does NOT belong (Odd One Out): 🔴 Circle, 🟦 Square, 🔺 Triangle, 🥄 Spoon?",
    "visualEmoji": "🥄 🔍",
    "payload": {
      "options": [
        {
          "id": "opt_1",
          "text": "Spoon 🥄 (It is an eating tool, others are geometric shapes)",
          "isCorrect": true
        },
        {
          "id": "opt_2",
          "text": "Circle 🔴",
          "isCorrect": false
        },
        {
          "id": "opt_3",
          "text": "Square 🟦",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A spoon is cutlery, while the others are geometric shapes!",
    "points": 10
  }
];
