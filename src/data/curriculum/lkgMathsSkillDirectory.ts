import { Question } from '../../types';

// ============================================================================
// LKG (BALVATIKA 2) MATHEMATICS — FULL 55 FOUNDATION SKILL DIRECTORY & QUESTION BANK
// Early Numeracy & Logic Standard (A.1 to J.2)
// Total 55 Skills | 550 Curated Pedagogical Questions (10 per Skill) | Zero Spoilers
// ============================================================================

export interface LKGMathsSkillItem {
  id: string;
  code: string;
  categoryCode: string;
  categoryTitle: string;
  area: 'Geometry & Shapes' | 'Counting & Numbers' | 'Comparing & Positions' | 'Classify & Patterns' | 'Measurement & Money';
  title: string;
  titleHindi: string;
  icon: string;
  color: string;
  borderColor: string;
  questionCount: number;
}

export const LKG_MATHS_SKILLS: LKGMathsSkillItem[] = [
  {"id": "skill_lkg_m_a_1", "code": "A.1", "categoryCode": "A", "categoryTitle": "Shapes", "area": "Geometry & Shapes", "title": "Name the shape", "titleHindi": "आकार का नाम बताएं", "icon": "🔺", "color": "#FEF3C7", "borderColor": "#FDE68A", "questionCount": 10},
  {"id": "skill_lkg_m_a_2", "code": "A.2", "categoryCode": "A", "categoryTitle": "Shapes", "area": "Geometry & Shapes", "title": "Circles", "titleHindi": "वृत्त (गोलाकार)", "icon": "🔴", "color": "#FEE2E2", "borderColor": "#FECACA", "questionCount": 10},
  {"id": "skill_lkg_m_a_3", "code": "A.3", "categoryCode": "A", "categoryTitle": "Shapes", "area": "Geometry & Shapes", "title": "Squares", "titleHindi": "वर्ग (चौकोर)", "icon": "🟦", "color": "#EFF6FF", "borderColor": "#BFDBFE", "questionCount": 10},
  {"id": "skill_lkg_m_a_4", "code": "A.4", "categoryCode": "A", "categoryTitle": "Shapes", "area": "Geometry & Shapes", "title": "Triangles", "titleHindi": "त्रिकोण (तीन कोने)", "icon": "📐", "color": "#FEF3C7", "borderColor": "#FDE68A", "questionCount": 10},
  {"id": "skill_lkg_m_a_5", "code": "A.5", "categoryCode": "A", "categoryTitle": "Shapes", "area": "Geometry & Shapes", "title": "Rectangles", "titleHindi": "आयत (लंबा चौकोर)", "icon": "🟨", "color": "#FDF4FF", "borderColor": "#F5D0FE", "questionCount": 10},
  {"id": "skill_lkg_m_a_6", "code": "A.6", "categoryCode": "A", "categoryTitle": "Shapes", "area": "Geometry & Shapes", "title": "Circles, squares and triangles", "titleHindi": "वृत्त, वर्ग और त्रिकोण की पहचान", "icon": "🔷", "color": "#F0FDF4", "borderColor": "#BBF7D0", "questionCount": 10},
  {"id": "skill_lkg_m_b_1", "code": "B.1", "categoryCode": "B", "categoryTitle": "Count to 3", "area": "Counting & Numbers", "title": "Identify numbers - up to 3", "titleHindi": "संख्या पहचानें - 3 तक", "icon": "🔢", "color": "#EFF6FF", "borderColor": "#BFDBFE", "questionCount": 10},
  {"id": "skill_lkg_m_b_2", "code": "B.2", "categoryCode": "B", "categoryTitle": "Count to 3", "area": "Counting & Numbers", "title": "Count dots - up to 3", "titleHindi": "बिंदु गिनें - 3 तक", "icon": "🎲", "color": "#FEF3C7", "borderColor": "#FDE68A", "questionCount": 10},
  {"id": "skill_lkg_m_b_3", "code": "B.3", "categoryCode": "B", "categoryTitle": "Count to 3", "area": "Counting & Numbers", "title": "Count shapes - up to 3", "titleHindi": "आकार गिनें - 3 तक", "icon": "⭐", "color": "#FDF4FF", "borderColor": "#F5D0FE", "questionCount": 10},
  {"id": "skill_lkg_m_b_4", "code": "B.4", "categoryCode": "B", "categoryTitle": "Count to 3", "area": "Counting & Numbers", "title": "Count objects - up to 3", "titleHindi": "वस्तुएं गिनें - 3 तक", "icon": "🍎", "color": "#FEE2E2", "borderColor": "#FECACA", "questionCount": 10},
  {"id": "skill_lkg_m_b_5", "code": "B.5", "categoryCode": "B", "categoryTitle": "Count to 3", "area": "Counting & Numbers", "title": "Count on ten frames - up to 3", "titleHindi": "टेन-फ्रेम पर गिनें - 3 तक", "icon": "🔲", "color": "#F0FDF4", "borderColor": "#BBF7D0", "questionCount": 10},
  {"id": "skill_lkg_m_b_6", "code": "B.6", "categoryCode": "B", "categoryTitle": "Count to 3", "area": "Counting & Numbers", "title": "Show numbers on ten frames - up to 3", "titleHindi": "टेन-फ्रेम पर संख्या दिखाएं - 3 तक", "icon": "🎯", "color": "#EFF6FF", "borderColor": "#BFDBFE", "questionCount": 10},
  {"id": "skill_lkg_m_b_7", "code": "B.7", "categoryCode": "B", "categoryTitle": "Count to 3", "area": "Counting & Numbers", "title": "Represent numbers - up to 3", "titleHindi": "संख्या निरूपण - 3 तक", "icon": "📝", "color": "#FEF3C7", "borderColor": "#FDE68A", "questionCount": 10},
  {"id": "skill_lkg_m_c_1", "code": "C.1", "categoryCode": "C", "categoryTitle": "Count to 5", "area": "Counting & Numbers", "title": "Identify numbers - up to 5", "titleHindi": "संख्या पहचानें - 5 तक", "icon": "🖐️", "color": "#EFF6FF", "borderColor": "#BFDBFE", "questionCount": 10},
  {"id": "skill_lkg_m_c_2", "code": "C.2", "categoryCode": "C", "categoryTitle": "Count to 5", "area": "Counting & Numbers", "title": "Count dots - up to 5", "titleHindi": "बिंदु गिनें - 5 तक", "icon": "⚄", "color": "#FEF3C7", "borderColor": "#FDE68A", "questionCount": 10},
  {"id": "skill_lkg_m_c_3", "code": "C.3", "categoryCode": "C", "categoryTitle": "Count to 5", "area": "Counting & Numbers", "title": "Count shapes - up to 5", "titleHindi": "आकार गिनें - 5 तक", "icon": "🔶", "color": "#FDF4FF", "borderColor": "#F5D0FE", "questionCount": 10},
  {"id": "skill_lkg_m_c_4", "code": "C.4", "categoryCode": "C", "categoryTitle": "Count to 5", "area": "Counting & Numbers", "title": "Count objects - up to 5", "titleHindi": "वस्तुएं गिनें - 5 तक", "icon": "🐟", "color": "#F0F9FF", "borderColor": "#BAE6FD", "questionCount": 10},
  {"id": "skill_lkg_m_c_5", "code": "C.5", "categoryCode": "C", "categoryTitle": "Count to 5", "area": "Counting & Numbers", "title": "Count on ten frames - up to 5", "titleHindi": "टेन-फ्रेम पर गिनें - 5 तक", "icon": "🔲", "color": "#F0FDF4", "borderColor": "#BBF7D0", "questionCount": 10},
  {"id": "skill_lkg_m_c_6", "code": "C.6", "categoryCode": "C", "categoryTitle": "Count to 5", "area": "Counting & Numbers", "title": "Show numbers on ten frames - up to 5", "titleHindi": "टेन-फ्रेम पर संख्या दिखाएं - 5 तक", "icon": "🎯", "color": "#EFF6FF", "borderColor": "#BFDBFE", "questionCount": 10},
  {"id": "skill_lkg_m_c_7", "code": "C.7", "categoryCode": "C", "categoryTitle": "Count to 5", "area": "Counting & Numbers", "title": "Represent numbers - up to 5", "titleHindi": "संख्या निरूपण - 5 तक", "icon": "📝", "color": "#FEF3C7", "borderColor": "#FDE68A", "questionCount": 10},
  {"id": "skill_lkg_m_d_1", "code": "D.1", "categoryCode": "D", "categoryTitle": "Count to 10", "area": "Counting & Numbers", "title": "Identify numbers - up to 10", "titleHindi": "संख्या पहचानें - 10 तक", "icon": "🔟", "color": "#EFF6FF", "borderColor": "#BFDBFE", "questionCount": 10},
  {"id": "skill_lkg_m_d_2", "code": "D.2", "categoryCode": "D", "categoryTitle": "Count to 10", "area": "Counting & Numbers", "title": "Count dots - up to 10", "titleHindi": "बिंदु गिनें - 10 तक", "icon": "🔘", "color": "#FEF3C7", "borderColor": "#FDE68A", "questionCount": 10},
  {"id": "skill_lkg_m_d_3", "code": "D.3", "categoryCode": "D", "categoryTitle": "Count to 10", "area": "Counting & Numbers", "title": "Count shapes - up to 10", "titleHindi": "आकार गिनें - 10 तक", "icon": "🔷", "color": "#FDF4FF", "borderColor": "#F5D0FE", "questionCount": 10},
  {"id": "skill_lkg_m_d_4", "code": "D.4", "categoryCode": "D", "categoryTitle": "Count to 10", "area": "Counting & Numbers", "title": "Count objects - up to 10", "titleHindi": "वस्तुएं गिनें - 10 तक", "icon": "🦋", "color": "#F0F9FF", "borderColor": "#BAE6FD", "questionCount": 10},
  {"id": "skill_lkg_m_d_5", "code": "D.5", "categoryCode": "D", "categoryTitle": "Count to 10", "area": "Counting & Numbers", "title": "Count on ten frames - up to 10", "titleHindi": "टेन-फ्रेम पर गिनें - 10 तक", "icon": "🔲", "color": "#F0FDF4", "borderColor": "#BBF7D0", "questionCount": 10},
  {"id": "skill_lkg_m_d_6", "code": "D.6", "categoryCode": "D", "categoryTitle": "Count to 10", "area": "Counting & Numbers", "title": "Show numbers on ten frames - up to 10", "titleHindi": "टेन-फ्रेम पर संख्या दिखाएं - 10 तक", "icon": "🎯", "color": "#EFF6FF", "borderColor": "#BFDBFE", "questionCount": 10},
  {"id": "skill_lkg_m_d_7", "code": "D.7", "categoryCode": "D", "categoryTitle": "Count to 10", "area": "Counting & Numbers", "title": "Represent numbers - up to 10", "titleHindi": "संख्या निरूपण - 10 तक", "icon": "📝", "color": "#FEF3C7", "borderColor": "#FDE68A", "questionCount": 10},
  {"id": "skill_lkg_m_e_1", "code": "E.1", "categoryCode": "E", "categoryTitle": "Comparing", "area": "Comparing & Positions", "title": "Are there enough?", "titleHindi": "क्या पर्याप्त हैं? (One-to-One)", "icon": "🥕", "color": "#FEF3C7", "borderColor": "#FDE68A", "questionCount": 10},
  {"id": "skill_lkg_m_e_2", "code": "E.2", "categoryCode": "E", "categoryTitle": "Comparing", "area": "Comparing & Positions", "title": "More", "titleHindi": "अधिक (More)", "icon": "📈", "color": "#F0FDF4", "borderColor": "#BBF7D0", "questionCount": 10},
  {"id": "skill_lkg_m_e_3", "code": "E.3", "categoryCode": "E", "categoryTitle": "Comparing", "area": "Comparing & Positions", "title": "Fewer", "titleHindi": "कम (Fewer / Less)", "icon": "📉", "color": "#FEE2E2", "borderColor": "#FECACA", "questionCount": 10},
  {"id": "skill_lkg_m_e_4", "code": "E.4", "categoryCode": "E", "categoryTitle": "Comparing", "area": "Comparing & Positions", "title": "Compare in a chart", "titleHindi": "चार्ट में तुलना करें", "icon": "📊", "color": "#EFF6FF", "borderColor": "#BFDBFE", "questionCount": 10},
  {"id": "skill_lkg_m_e_5", "code": "E.5", "categoryCode": "E", "categoryTitle": "Comparing", "area": "Comparing & Positions", "title": "Compare groups", "titleHindi": "समूहों की तुलना करें", "icon": "⚖️", "color": "#FDF4FF", "borderColor": "#F5D0FE", "questionCount": 10},
  {"id": "skill_lkg_m_f_1", "code": "F.1", "categoryCode": "F", "categoryTitle": "Positions", "area": "Comparing & Positions", "title": "Inside and outside", "titleHindi": "अंदर और बाहर (Inside / Outside)", "icon": "📦", "color": "#FEF3C7", "borderColor": "#FDE68A", "questionCount": 10},
  {"id": "skill_lkg_m_f_2", "code": "F.2", "categoryCode": "F", "categoryTitle": "Positions", "area": "Comparing & Positions", "title": "Above and below", "titleHindi": "ऊपर और नीचे (Above / Below)", "icon": "⬆️", "color": "#EFF6FF", "borderColor": "#BFDBFE", "questionCount": 10},
  {"id": "skill_lkg_m_f_3", "code": "F.3", "categoryCode": "F", "categoryTitle": "Positions", "area": "Comparing & Positions", "title": "Beside and next to", "titleHindi": "पास और बगल में (Beside / Next to)", "icon": "↔️", "color": "#F0FDF4", "borderColor": "#BBF7D0", "questionCount": 10},
  {"id": "skill_lkg_m_f_4", "code": "F.4", "categoryCode": "F", "categoryTitle": "Positions", "area": "Comparing & Positions", "title": "Left and right", "titleHindi": "बायां और दायां (Left / Right)", "icon": "👉", "color": "#FDF4FF", "borderColor": "#F5D0FE", "questionCount": 10},
  {"id": "skill_lkg_m_f_5", "code": "F.5", "categoryCode": "F", "categoryTitle": "Positions", "area": "Comparing & Positions", "title": "Left, middle and right", "titleHindi": "बायां, बीच और दायां (Left, Middle, Right)", "icon": "🎯", "color": "#FEE2E2", "borderColor": "#FECACA", "questionCount": 10},
  {"id": "skill_lkg_m_f_6", "code": "F.6", "categoryCode": "F", "categoryTitle": "Positions", "area": "Comparing & Positions", "title": "Top and bottom", "titleHindi": "शीर्ष और तल (Top / Bottom)", "icon": "🏔️", "color": "#EFF6FF", "borderColor": "#BFDBFE", "questionCount": 10},
  {"id": "skill_lkg_m_f_7", "code": "F.7", "categoryCode": "F", "categoryTitle": "Positions", "area": "Comparing & Positions", "title": "Top, middle and bottom", "titleHindi": "ऊपर, बीच और नीचे (Top, Middle, Bottom)", "icon": "🚦", "color": "#FEF3C7", "borderColor": "#FDE68A", "questionCount": 10},
  {"id": "skill_lkg_m_g_1", "code": "G.1", "categoryCode": "G", "categoryTitle": "Classify", "area": "Classify & Patterns", "title": "Same", "titleHindi": "समान (Same)", "icon": "👯", "color": "#F0FDF4", "borderColor": "#BBF7D0", "questionCount": 10},
  {"id": "skill_lkg_m_g_2", "code": "G.2", "categoryCode": "G", "categoryTitle": "Classify", "area": "Classify & Patterns", "title": "Different", "titleHindi": "भिन्न (Different / Odd One)", "icon": "🔍", "color": "#FEE2E2", "borderColor": "#FECACA", "questionCount": 10},
  {"id": "skill_lkg_m_g_3", "code": "G.3", "categoryCode": "G", "categoryTitle": "Classify", "area": "Classify & Patterns", "title": "Same and different", "titleHindi": "समान और भिन्न तुलना", "icon": "⚖️", "color": "#EFF6FF", "borderColor": "#BFDBFE", "questionCount": 10},
  {"id": "skill_lkg_m_g_4", "code": "G.4", "categoryCode": "G", "categoryTitle": "Classify", "area": "Classify & Patterns", "title": "Classify shapes by color", "titleHindi": "रंग के आधार पर आकार छाँटें", "icon": "🎨", "color": "#FDF4FF", "borderColor": "#F5D0FE", "questionCount": 10},
  {"id": "skill_lkg_m_g_5", "code": "G.5", "categoryCode": "G", "categoryTitle": "Classify", "area": "Classify & Patterns", "title": "Classify and sort by shape", "titleHindi": "आकार के आधार पर छाँटें", "icon": "🧩", "color": "#FEF3C7", "borderColor": "#FDE68A", "questionCount": 10},
  {"id": "skill_lkg_m_g_6", "code": "G.6", "categoryCode": "G", "categoryTitle": "Classify", "area": "Classify & Patterns", "title": "Classify and sort by color", "titleHindi": "रंग के आधार पर वस्तुएं छाँटें", "icon": "🌈", "color": "#F0FDF4", "borderColor": "#BBF7D0", "questionCount": 10},
  {"id": "skill_lkg_m_h_1", "code": "H.1", "categoryCode": "H", "categoryTitle": "Patterns", "area": "Classify & Patterns", "title": "Color patterns", "titleHindi": "रंगों के पैटर्न (AB, AAB)", "icon": "🟡", "color": "#FEF3C7", "borderColor": "#FDE68A", "questionCount": 10},
  {"id": "skill_lkg_m_h_2", "code": "H.2", "categoryCode": "H", "categoryTitle": "Patterns", "area": "Classify & Patterns", "title": "Size patterns", "titleHindi": "आकार के पैटर्न (बड़ा, छोटा)", "icon": "🐘", "color": "#EFF6FF", "borderColor": "#BFDBFE", "questionCount": 10},
  {"id": "skill_lkg_m_h_3", "code": "H.3", "categoryCode": "H", "categoryTitle": "Patterns", "area": "Classify & Patterns", "title": "Shape patterns", "titleHindi": "आकृतियों के पैटर्न (🔺, 🟦)", "icon": "🔺", "color": "#FDF4FF", "borderColor": "#F5D0FE", "questionCount": 10},
  {"id": "skill_lkg_m_h_4", "code": "H.4", "categoryCode": "H", "categoryTitle": "Patterns", "area": "Classify & Patterns", "title": "What comes next?", "titleHindi": "आगे क्या आएगा? (Next Pattern)", "icon": "❓", "color": "#F0FDF4", "borderColor": "#BBF7D0", "questionCount": 10},
  {"id": "skill_lkg_m_i_1", "code": "I.1", "categoryCode": "I", "categoryTitle": "Size", "area": "Measurement & Money", "title": "Long and short", "titleHindi": "लंबा और छोटा (Long / Short)", "icon": "📏", "color": "#FEF3C7", "borderColor": "#FDE68A", "questionCount": 10},
  {"id": "skill_lkg_m_i_2", "code": "I.2", "categoryCode": "I", "categoryTitle": "Size", "area": "Measurement & Money", "title": "Tall and short", "titleHindi": "ऊंचा और छोटा (Tall / Short)", "icon": "🦒", "color": "#EFF6FF", "borderColor": "#BFDBFE", "questionCount": 10},
  {"id": "skill_lkg_m_i_3", "code": "I.3", "categoryCode": "I", "categoryTitle": "Size", "area": "Measurement & Money", "title": "Wide and narrow", "titleHindi": "चौड़ा और संकरा (Wide / Narrow)", "icon": "🛣️", "color": "#F0FDF4", "borderColor": "#BBF7D0", "questionCount": 10},
  {"id": "skill_lkg_m_i_4", "code": "I.4", "categoryCode": "I", "categoryTitle": "Size", "area": "Measurement & Money", "title": "Light and heavy", "titleHindi": "हल्का और भारी (Light / Heavy)", "icon": "🪨", "color": "#FEE2E2", "borderColor": "#FECACA", "questionCount": 10},
  {"id": "skill_lkg_m_j_1", "code": "J.1", "categoryCode": "J", "categoryTitle": "Money", "area": "Measurement & Money", "title": "Coin values", "titleHindi": "सिक्कों का मूल्य (₹1, ₹2, ₹5, ₹10)", "icon": "🪙", "color": "#FEF3C7", "borderColor": "#FDE68A", "questionCount": 10},
  {"id": "skill_lkg_m_j_2", "code": "J.2", "categoryCode": "J", "categoryTitle": "Money", "area": "Measurement & Money", "title": "Count 1-rupee coins", "titleHindi": "1 रुपये के सिक्के गिनें", "icon": "💰", "color": "#F0FDF4", "borderColor": "#BBF7D0", "questionCount": 10},
];

export const LKG_MATHS_SKILL_QUESTIONS: Question[] = [
  // ==========================================================================
  // A.1: Name the shape (10 Questions)
  // ==========================================================================
  {
    "id": "lkg_ms_a_1_q1",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "A.1: Name the shape",
    "concept": "Name the shape",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which shape has 3 straight sides and 3 corners?",
    "questionHindi": "किस आकृति की 3 सीधी भुजाएं और 3 कोने होते हैं?",
    "visualEmoji": "🔺 🟦 🔴",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_a_1_q1_opt1",
          "text": "Triangle 🔺",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_a_1_q1_opt2",
          "text": "Square 🟦",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_a_1_q1_opt3",
          "text": "Circle 🔴",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A triangle always has 3 sides and 3 corners!",
    "explanationHindi": "त्रिकोण की हमेशा 3 भुजाएं और 3 कोने होते हैं!",
    "points": 10
  },
  {
    "id": "lkg_ms_a_1_q2",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "A.1: Name the shape",
    "concept": "Name the shape",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which shape is completely round with no corners?",
    "questionHindi": "कौन सी आकृति बिना किसी कोने के पूरी तरह गोल होती है?",
    "visualEmoji": "🔴 🔺 🟩",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_a_1_q2_opt1",
          "text": "Circle 🔴",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_a_1_q2_opt2",
          "text": "Square 🟩",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_a_1_q2_opt3",
          "text": "Triangle 🔺",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A circle is round and curved, with zero corners!",
    "explanationHindi": "वृत्त (Circle) गोल होता है और इसका कोई कोना नहीं होता!",
    "points": 10
  },
  {
    "id": "lkg_ms_a_1_q3",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "A.1: Name the shape",
    "concept": "Name the shape",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which shape has 4 equal sides and 4 corners?",
    "questionHindi": "किस आकृति की 4 बराबर भुजाएं और 4 कोने होते हैं?",
    "visualEmoji": "🟦 🟡 🔺",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_a_1_q3_opt1",
          "text": "Square 🟦",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_a_1_q3_opt2",
          "text": "Circle 🟡",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_a_1_q3_opt3",
          "text": "Triangle 🔺",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A square has 4 equal straight sides!",
    "explanationHindi": "वर्ग (Square) की सभी 4 भुजाएं बराबर होती हैं!",
    "points": 10
  },
  {
    "id": "lkg_ms_a_1_q4",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "A.1: Name the shape",
    "concept": "Name the shape",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which shape has 2 long sides and 2 short sides?",
    "questionHindi": "किस आकृति की 2 लंबी भुजाएं और 2 छोटी भुजाएं होती हैं?",
    "visualEmoji": "🟨 🔴 🔺",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_a_1_q4_opt1",
          "text": "Rectangle 🟨",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_a_1_q4_opt2",
          "text": "Circle 🔴",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_a_1_q4_opt3",
          "text": "Triangle 🔺",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A rectangle has opposite sides equal (2 long, 2 short)!",
    "explanationHindi": "आयत (Rectangle) की 2 भुजाएं लंबी और 2 छोटी होती हैं!",
    "points": 15
  },
  {
    "id": "lkg_ms_a_1_q5",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "A.1: Name the shape",
    "concept": "Name the shape",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at this yummy pizza slice 🍕. What shape does it look like?",
    "questionHindi": "इस पिज़्ज़ा स्लाइस 🍕 को देखें। यह किस आकृति जैसा दिखता है?",
    "visualEmoji": "🍕 🔺",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_a_1_q5_opt1",
          "text": "Triangle 🔺",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_a_1_q5_opt2",
          "text": "Circle 🔴",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_a_1_q5_opt3",
          "text": "Square 🟦",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A pizza slice has 3 sides, just like a triangle!",
    "explanationHindi": "पिज़्ज़ा स्लाइस में 3 भुजाएं होती हैं, त्रिकोण की तरह!",
    "points": 15
  },
  {
    "id": "lkg_ms_a_1_q6",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "A.1: Name the shape",
    "concept": "Name the shape",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at this car tire 🛞. What shape does it have?",
    "questionHindi": "इस कार के पहिए 🛞 को देखें। इसका आकार क्या है?",
    "visualEmoji": "🛞 🔴",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_a_1_q6_opt1",
          "text": "Circle 🔴",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_a_1_q6_opt2",
          "text": "Rectangle 🟨",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_a_1_q6_opt3",
          "text": "Triangle 🔺",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A wheel rolls smoothly because it is a round circle!",
    "explanationHindi": "पहिया गोल होता है इसलिए यह वृत्त (Circle) का आकार है!",
    "points": 15
  },
  {
    "id": "lkg_ms_a_1_q7",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "A.1: Name the shape",
    "concept": "Name the shape",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at this chessboard 🏁. All 4 sides are equal. What shape is it?",
    "questionHindi": "इस शतरंज बोर्ड 🏁 को देखें। इसकी चारों भुजाएं बराबर हैं। यह क्या है?",
    "visualEmoji": "🏁 🟦",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_a_1_q7_opt1",
          "text": "Square 🟦",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_a_1_q7_opt2",
          "text": "Triangle 🔺",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_a_1_q7_opt3",
          "text": "Oval 🥚",
          "isCorrect": false
        }
      ]
    },
    "explanation": "All 4 sides of the board are equal, making it a square!",
    "explanationHindi": "बोर्ड की चारों भुजाएं बराबर हैं, इसलिए यह वर्ग (Square) है!",
    "points": 15
  },
  {
    "id": "lkg_ms_a_1_q8",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "A.1: Name the shape",
    "concept": "Name the shape",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Look at this door 🚪. It has 2 long sides and 2 short sides. What shape is it?",
    "questionHindi": "इस दरवाज़े 🚪 को देखें। इसमें 2 लंबी और 2 छोटी भुजाएं हैं। यह क्या है?",
    "visualEmoji": "🚪 🟨",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_a_1_q8_opt1",
          "text": "Rectangle 🟨",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_a_1_q8_opt2",
          "text": "Square 🟦",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_a_1_q8_opt3",
          "text": "Circle 🔴",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A door stands tall with 2 long sides and 2 short sides, so it is a rectangle!",
    "explanationHindi": "दरवाज़े में 2 लंबी और 2 छोटी भुजाएं होती हैं, अतः यह आयत है!",
    "points": 20
  },
  {
    "id": "lkg_ms_a_1_q9",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "A.1: Name the shape",
    "concept": "Name the shape",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Look at this egg 🥚. It is rounded but stretched out. What shape is it?",
    "questionHindi": "इस अंडे 🥚 को देखें। यह गोल है पर लंबा खिंचा हुआ है। यह क्या है?",
    "visualEmoji": "🥚 🪺",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_a_1_q9_opt1",
          "text": "Oval 🥚",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_a_1_q9_opt2",
          "text": "Circle 🔴",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_a_1_q9_opt3",
          "text": "Triangle 🔺",
          "isCorrect": false
        }
      ]
    },
    "explanation": "An egg is shaped like an oval!",
    "explanationHindi": "अंडा अंडाकार (Oval) आकृति का होता है!",
    "points": 20
  },
  {
    "id": "lkg_ms_a_1_q10",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "A.1: Name the shape",
    "concept": "Name the shape",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Which shape twinkles in the sky with 5 points?",
    "questionHindi": "रात के आकाश में 5 कोनों के साथ कौन सा आकार चमकता है?",
    "visualEmoji": "⭐ ✨",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_a_1_q10_opt1",
          "text": "Star ⭐",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_a_1_q10_opt2",
          "text": "Square 🟦",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_a_1_q10_opt3",
          "text": "Triangle 🔺",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A star has 5 pointed tips shining bright!",
    "explanationHindi": "तारे (Star) के 5 नुकीले कोने होते हैं!",
    "points": 20
  },
  // ==========================================================================
  // A.2: Circles (10 Questions)
  // ==========================================================================
  {
    "id": "lkg_ms_a_2_q1",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "A.2: Circles",
    "concept": "Circles",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which object is round like a circle?",
    "questionHindi": "कौन सी वस्तु वृत्त की तरह गोल है?",
    "visualEmoji": "⏰ 📖 📦",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_a_2_q1_opt1",
          "text": "Wall Clock ⏰",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_a_2_q1_opt2",
          "text": "Book 📖",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_a_2_q1_opt3",
          "text": "Box 📦",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A wall clock is round with curved edges, like a circle!",
    "explanationHindi": "दीवार घड़ी गोल होती है, एक वृत्त की तरह!",
    "points": 10
  },
  {
    "id": "lkg_ms_a_2_q2",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "A.2: Circles",
    "concept": "Circles",
    "difficulty": "easy",
    "type": "mcq",
    "question": "How many straight corners does a circle have?",
    "questionHindi": "एक वृत्त में कितने सीधे कोने होते हैं?",
    "visualEmoji": "🔴 ⭕",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_a_2_q2_opt1",
          "text": "0 corners",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_a_2_q2_opt2",
          "text": "3 corners",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_a_2_q2_opt3",
          "text": "4 corners",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A circle has zero corners! It is smooth all around.",
    "explanationHindi": "वृत्त में 0 कोने होते हैं! यह चारों तरफ से गोल होता है।",
    "points": 10
  },
  {
    "id": "lkg_ms_a_2_q3",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "A.2: Circles",
    "concept": "Circles",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which fruit looks like a round circle?",
    "questionHindi": "कौन सा फल गोल वृत्त जैसा दिखता है?",
    "visualEmoji": "🍊 🍌 🥕",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_a_2_q3_opt1",
          "text": "Orange 🍊",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_a_2_q3_opt2",
          "text": "Banana 🍌",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_a_2_q3_opt3",
          "text": "Carrot 🥕",
          "isCorrect": false
        }
      ]
    },
    "explanation": "An orange is round like a ball, matching a circle!",
    "explanationHindi": "संतरा गोल होता है, जो वृत्त से मेल खाता है!",
    "points": 10
  },
  {
    "id": "lkg_ms_a_2_q4",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "A.2: Circles",
    "concept": "Circles",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which item is shaped like a circle?",
    "questionHindi": "इनमें से कौन सी वस्तु वृत्त के आकार की है?",
    "visualEmoji": "🪙 ✉️ 🧱",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_a_2_q4_opt1",
          "text": "Coin 🪙",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_a_2_q4_opt2",
          "text": "Envelope ✉️",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_a_2_q4_opt3",
          "text": "Brick 🧱",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A coin is flat and round, forming a circle!",
    "explanationHindi": "सिक्का गोल होता है, अतः यह वृत्त के आकार का है!",
    "points": 15
  },
  {
    "id": "lkg_ms_a_2_q5",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "A.2: Circles",
    "concept": "Circles",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Find the circle among these shapes:",
    "questionHindi": "इन आकृतियों में से वृत्त (Circle) चुनें:",
    "visualEmoji": "🔴 🟦 🔺",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_a_2_q5_opt1",
          "text": "Red Circle 🔴",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_a_2_q5_opt2",
          "text": "Blue Square 🟦",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_a_2_q5_opt3",
          "text": "Red Triangle 🔺",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The red shape is curved and round, making it a circle!",
    "explanationHindi": "लाल आकृति गोल और घुमावदार है, इसलिए यह वृत्त है!",
    "points": 15
  },
  {
    "id": "lkg_ms_a_2_q6",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "A.2: Circles",
    "concept": "Circles",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at the full moon in the night sky 🌕. What shape is it?",
    "questionHindi": "आकाश में पूर्णिमा के पूरे चाँद 🌕 को देखें। इसका आकार क्या है?",
    "visualEmoji": "🌕 🌌",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_a_2_q6_opt1",
          "text": "Circle 🔴",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_a_2_q6_opt2",
          "text": "Square 🟦",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_a_2_q6_opt3",
          "text": "Triangle 🔺",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The full moon shines as a perfect round circle!",
    "explanationHindi": "पूर्णिमा का चाँद एक सुंदर गोल वृत्त की तरह चमकता है!",
    "points": 15
  },
  {
    "id": "lkg_ms_a_2_q7",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "A.2: Circles",
    "concept": "Circles",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which tasty snack is shaped like a round ring?",
    "questionHindi": "कौन सा स्वादिष्ट स्नैक गोल छल्ले (Circle) के आकार का होता है?",
    "visualEmoji": "🍩 🥪 🍫",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_a_2_q7_opt1",
          "text": "Donut 🍩",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_a_2_q7_opt2",
          "text": "Sandwich 🥪",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_a_2_q7_opt3",
          "text": "Chocolate Bar 🍫",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A donut is round with a hole in the middle, shaped like a circle!",
    "explanationHindi": "डोनट गोल होता है, वृत्त के आकार का!",
    "points": 15
  },
  {
    "id": "lkg_ms_a_2_q8",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "A.2: Circles",
    "concept": "Circles",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Which shape can roll easily across the floor?",
    "questionHindi": "कौन सी आकृति फर्श पर आसानी से लुढ़क (roll) सकती है?",
    "visualEmoji": "🔴 🟦 🔺",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_a_2_q8_opt1",
          "text": "Circle 🔴",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_a_2_q8_opt2",
          "text": "Square 🟦",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_a_2_q8_opt3",
          "text": "Triangle 🔺",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Circles roll because they have no flat edges or corners!",
    "explanationHindi": "वृत्त लुढ़क सकते हैं क्योंकि उनके कोने नहीं होते!",
    "points": 20
  },
  {
    "id": "lkg_ms_a_2_q9",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "A.2: Circles",
    "concept": "Circles",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Look at a shirt button. It is round with no pointy edges. What shape is it?",
    "questionHindi": "शर्ट के बटन को देखें। यह बिना नुकीले कोनों के गोल है। यह क्या है?",
    "visualEmoji": "🔘 👕",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_a_2_q9_opt1",
          "text": "Circle 🔴",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_a_2_q9_opt2",
          "text": "Square 🟦",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_a_2_q9_opt3",
          "text": "Rectangle 🟨",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A round shirt button is a circle!",
    "explanationHindi": "शर्ट का बटन वृत्त (Circle) होता है!",
    "points": 20
  },
  {
    "id": "lkg_ms_a_2_q10",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "A.2: Circles",
    "concept": "Circles",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Count the circles in this group: 🔴 🟦 🔴 🔺 🔴",
    "questionHindi": "इस समूह में वृत्तों (Circles) को गिनें: 🔴 🟦 🔴 🔺 🔴",
    "visualEmoji": "🔴 🟦 🔴 🔺 🔴",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_a_2_q10_opt1",
          "text": "3 Circles",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_a_2_q10_opt2",
          "text": "2 Circles",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_a_2_q10_opt3",
          "text": "4 Circles",
          "isCorrect": false
        }
      ]
    },
    "explanation": "There are 3 red circles in the group!",
    "explanationHindi": "समूह में 3 लाल वृत्त हैं!",
    "points": 20
  },
  // ==========================================================================
  // A.3: Squares (10 Questions)
  // ==========================================================================
  {
    "id": "lkg_ms_a_3_q1",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "A.3: Squares",
    "concept": "Squares",
    "difficulty": "easy",
    "type": "mcq",
    "question": "How many straight sides does a square have?",
    "questionHindi": "एक वर्ग (Square) में कितनी सीधी भुजाएं होती हैं?",
    "visualEmoji": "🟦 ⏹️",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_a_3_q1_opt1",
          "text": "4 sides",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_a_3_q1_opt2",
          "text": "3 sides",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_a_3_q1_opt3",
          "text": "5 sides",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A square always has 4 sides!",
    "explanationHindi": "एक वर्ग में हमेशा 4 भुजाएं होती हैं!",
    "points": 10
  },
  {
    "id": "lkg_ms_a_3_q2",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "A.3: Squares",
    "concept": "Squares",
    "difficulty": "easy",
    "type": "mcq",
    "question": "In a square, how are all the sides?",
    "questionHindi": "एक वर्ग में सभी भुजाएं कैसी होती हैं?",
    "visualEmoji": "🟦",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_a_3_q2_opt1",
          "text": "All 4 sides are equal",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_a_3_q2_opt2",
          "text": "2 long and 2 short",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_a_3_q2_opt3",
          "text": "All sides different",
          "isCorrect": false
        }
      ]
    },
    "explanation": "All 4 sides of a square are exactly the same length!",
    "explanationHindi": "वर्ग की सभी चारों भुजाएं बिल्कुल बराबर होती हैं!",
    "points": 10
  },
  {
    "id": "lkg_ms_a_3_q3",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "A.3: Squares",
    "concept": "Squares",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which game piece is shaped like a square box?",
    "questionHindi": "कौन सा खेल का टुकड़ा एक चौकोर डिब्बे जैसा होता है?",
    "visualEmoji": "🎲 ⚽ 🏉",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_a_3_q3_opt1",
          "text": "Dice 🎲",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_a_3_q3_opt2",
          "text": "Football ⚽",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_a_3_q3_opt3",
          "text": "Rugby ball 🏉",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Each face of a dice is a perfect square!",
    "explanationHindi": "पासे (Dice) का हर चेहरा एक वर्ग होता है!",
    "points": 10
  },
  {
    "id": "lkg_ms_a_3_q4",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "A.3: Squares",
    "concept": "Squares",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Find the square among these shapes:",
    "questionHindi": "इन आकृतियों में से वर्ग (Square) चुनें:",
    "visualEmoji": "🟦 🔴 🔺",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_a_3_q4_opt1",
          "text": "Blue Square 🟦",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_a_3_q4_opt2",
          "text": "Red Circle 🔴",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_a_3_q4_opt3",
          "text": "Red Triangle 🔺",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The blue shape has 4 equal sides and 4 corners, so it is a square!",
    "explanationHindi": "नीली आकृति की 4 बराबर भुजाएं हैं, इसलिए यह वर्ग है!",
    "points": 15
  },
  {
    "id": "lkg_ms_a_3_q5",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "A.3: Squares",
    "concept": "Squares",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at this window frame 🪟. All 4 sides are equal. What shape is it?",
    "questionHindi": "इस खिड़की के फ्रेम 🪟 को देखें। चारों भुजाएं बराबर हैं। यह क्या है?",
    "visualEmoji": "🪟 🏠",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_a_3_q5_opt1",
          "text": "Square 🟦",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_a_3_q5_opt2",
          "text": "Circle 🔴",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_a_3_q5_opt3",
          "text": "Triangle 🔺",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A window with 4 equal sides is a square!",
    "explanationHindi": "4 बराबर भुजाओं वाली खिड़की एक वर्ग होती है!",
    "points": 15
  },
  {
    "id": "lkg_ms_a_3_q6",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "A.3: Squares",
    "concept": "Squares",
    "difficulty": "medium",
    "type": "mcq",
    "question": "How many sharp corners does a square have?",
    "questionHindi": "एक वर्ग में कितने नुकीले कोने होते हैं?",
    "visualEmoji": "🟦",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_a_3_q6_opt1",
          "text": "4 corners",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_a_3_q6_opt2",
          "text": "3 corners",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_a_3_q6_opt3",
          "text": "0 corners",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A square has 4 corners!",
    "explanationHindi": "वर्ग में 4 कोने होते हैं!",
    "points": 15
  },
  {
    "id": "lkg_ms_a_3_q7",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "A.3: Squares",
    "concept": "Squares",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at this bread slice 🍞. All 4 sides measure the same. What shape is it?",
    "questionHindi": "इस ब्रेड स्लाइस 🍞 को देखें। चारों भुजाएं समान हैं। यह क्या है?",
    "visualEmoji": "🍞 🥪",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_a_3_q7_opt1",
          "text": "Square 🟦",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_a_3_q7_opt2",
          "text": "Circle 🔴",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_a_3_q7_opt3",
          "text": "Oval 🥚",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The bread slice has 4 equal sides, making it a square!",
    "explanationHindi": "ब्रेड स्लाइस की 4 बराबर भुजाएं हैं, अतः यह वर्ग है!",
    "points": 15
  },
  {
    "id": "lkg_ms_a_3_q8",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "A.3: Squares",
    "concept": "Squares",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Look at this gift box top 🎁. What shape is it?",
    "questionHindi": "इस उपहार डिब्बे के ढक्कन 🎁 को देखें। यह किस आकार का है?",
    "visualEmoji": "🎁 📦",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_a_3_q8_opt1",
          "text": "Square 🟦",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_a_3_q8_opt2",
          "text": "Triangle 🔺",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_a_3_q8_opt3",
          "text": "Circle 🔴",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The top face of this gift box is a square!",
    "explanationHindi": "उपहार डिब्बे का ऊपरी हिस्सा एक वर्ग है!",
    "points": 20
  },
  {
    "id": "lkg_ms_a_3_q9",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "A.3: Squares",
    "concept": "Squares",
    "difficulty": "hard",
    "type": "mcq",
    "question": "A floor tile has 4 equal sides and 4 corners. Can it roll like a ball?",
    "questionHindi": "फर्श की टाइल की 4 बराबर भुजाएं और 4 कोने हैं। क्या यह गेंद की तरह लुढ़क सकती है?",
    "visualEmoji": "🟦 ⚽",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_a_3_q9_opt1",
          "text": "No, it slides because it is flat",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_a_3_q9_opt2",
          "text": "Yes, it rolls fast",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_a_3_q9_opt3",
          "text": "It bounces high",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Squares have flat sides and corners, so they slide, not roll!",
    "explanationHindi": "वर्ग चपटा होता है, इसलिए यह लुढ़कता नहीं बल्कि फिसलता है!",
    "points": 20
  },
  {
    "id": "lkg_ms_a_3_q10",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "A.3: Squares",
    "concept": "Squares",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Count the squares here: 🟦 🔺 🟦 🔴 🟦",
    "questionHindi": "यहाँ वर्गों (Squares) को गिनें: 🟦 🔺 🟦 🔴 🟦",
    "visualEmoji": "🟦 🔺 🟦 🔴 🟦",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_a_3_q10_opt1",
          "text": "3 Squares",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_a_3_q10_opt2",
          "text": "2 Squares",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_a_3_q10_opt3",
          "text": "4 Squares",
          "isCorrect": false
        }
      ]
    },
    "explanation": "There are 3 blue squares in the pattern!",
    "explanationHindi": "पैटर्न में 3 नीले वर्ग हैं!",
    "points": 20
  },
  // ==========================================================================
  // A.4: Triangles (10 Questions)
  // ==========================================================================
  {
    "id": "lkg_ms_a_4_q1",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "A.4: Triangles",
    "concept": "Triangles",
    "difficulty": "easy",
    "type": "mcq",
    "question": "How many straight sides does a triangle have?",
    "questionHindi": "एक त्रिकोण (Triangle) में कितनी सीधी भुजाएं होती हैं?",
    "visualEmoji": "🔺 📐",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_a_4_q1_opt1",
          "text": "3 sides",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_a_4_q1_opt2",
          "text": "4 sides",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_a_4_q1_opt3",
          "text": "5 sides",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A triangle always has 3 straight sides!",
    "explanationHindi": "त्रिकोण की हमेशा 3 सीधी भुजाएं होती हैं!",
    "points": 10
  },
  {
    "id": "lkg_ms_a_4_q2",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "A.4: Triangles",
    "concept": "Triangles",
    "difficulty": "easy",
    "type": "mcq",
    "question": "How many corners does a triangle have?",
    "questionHindi": "एक त्रिकोण में कितने कोने होते हैं?",
    "visualEmoji": "🔺",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_a_4_q2_opt1",
          "text": "3 corners",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_a_4_q2_opt2",
          "text": "4 corners",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_a_4_q2_opt3",
          "text": "2 corners",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Count the points: 1, 2, 3! A triangle has 3 corners.",
    "explanationHindi": "कोने गिनें: 1, 2, 3! त्रिकोण में 3 कोने होते हैं।",
    "points": 10
  },
  {
    "id": "lkg_ms_a_4_q3",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "A.4: Triangles",
    "concept": "Triangles",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which shape is this: 🔺?",
    "questionHindi": "यह कौन सा आकार है: 🔺?",
    "visualEmoji": "🔺",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_a_4_q3_opt1",
          "text": "Triangle 🔺",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_a_4_q3_opt2",
          "text": "Square 🟦",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_a_4_q3_opt3",
          "text": "Circle 🔴",
          "isCorrect": false
        }
      ]
    },
    "explanation": "This shape has 3 sides and 3 corners, so it is a triangle!",
    "explanationHindi": "इस आकृति की 3 भुजाएं और 3 कोने हैं, अतः यह त्रिकोण है!",
    "points": 10
  },
  {
    "id": "lkg_ms_a_4_q4",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "A.4: Triangles",
    "concept": "Triangles",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at the roof of this house 🏠. What shape is the roof?",
    "questionHindi": "इस घर की छत 🏠 को देखें। छत का आकार क्या है?",
    "visualEmoji": "🏠 🔺",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_a_4_q4_opt1",
          "text": "Triangle 🔺",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_a_4_q4_opt2",
          "text": "Circle 🔴",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_a_4_q4_opt3",
          "text": "Rectangle 🟨",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The peaked roof forms a triangle with 3 sides!",
    "explanationHindi": "घर की नुकीली छत 3 भुजाओं वाला त्रिकोण बनाती है!",
    "points": 15
  },
  {
    "id": "lkg_ms_a_4_q5",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "A.4: Triangles",
    "concept": "Triangles",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at the sail of this boat ⛵. What shape is the sail?",
    "questionHindi": "इस नाव के पाल ⛵ को देखें। पाल का आकार क्या है?",
    "visualEmoji": "⛵ 🌊",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_a_4_q5_opt1",
          "text": "Triangle 🔺",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_a_4_q5_opt2",
          "text": "Square 🟦",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_a_4_q5_opt3",
          "text": "Circle 🔴",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The sail has 3 straight edges, so it is a triangle!",
    "explanationHindi": "पाल के 3 सीधे किनारे होते हैं, अतः यह त्रिकोण है!",
    "points": 15
  },
  {
    "id": "lkg_ms_a_4_q6",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "A.4: Triangles",
    "concept": "Triangles",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which road sign has 3 sides and 3 corners?",
    "questionHindi": "किस सड़क चिन्ह (Traffic sign) में 3 भुजाएं और 3 कोने होते हैं?",
    "visualEmoji": "⚠️ 🛑 🅿️",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_a_4_q6_opt1",
          "text": "Warning sign ⚠️",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_a_4_q6_opt2",
          "text": "Stop sign 🛑",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_a_4_q6_opt3",
          "text": "Parking sign 🅿️",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The warning sign ⚠️ is shaped like a triangle!",
    "explanationHindi": "चेतावनी चिन्ह ⚠️ त्रिकोण के आकार का होता है!",
    "points": 15
  },
  {
    "id": "lkg_ms_a_4_q7",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "A.4: Triangles",
    "concept": "Triangles",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which crunchy snack is shaped like a triangle?",
    "questionHindi": "कौन सा कुरकुरा स्नैक त्रिकोण के आकार का होता है?",
    "visualEmoji": "🥟 🥪 🍩",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_a_4_q7_opt1",
          "text": "Samosa 🥟",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_a_4_q7_opt2",
          "text": "Round Donut 🍩",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_a_4_q7_opt3",
          "text": "Square Bread 🍞",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A samosa has 3 delicious corners and 3 sides, forming a triangle!",
    "explanationHindi": "समोसे के 3 कोने होते हैं, जो त्रिकोण बनाते हैं!",
    "points": 15
  },
  {
    "id": "lkg_ms_a_4_q8",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "A.4: Triangles",
    "concept": "Triangles",
    "difficulty": "hard",
    "type": "mcq",
    "question": "If you cut a square sandwich diagonally in half, what shapes do you get?",
    "questionHindi": "यदि आप एक चौकोर सैंडविच को बीच से तिरछा काटें, तो क्या आकार मिलेगा?",
    "visualEmoji": "🥪 ✂️",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_a_4_q8_opt1",
          "text": "2 Triangles",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_a_4_q8_opt2",
          "text": "2 Circles",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_a_4_q8_opt3",
          "text": "2 Rectangles",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Cutting a square from corner to corner makes 2 triangles!",
    "explanationHindi": "कोने से कोने तक काटने पर 2 त्रिकोण बनते हैं!",
    "points": 20
  },
  {
    "id": "lkg_ms_a_4_q9",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "A.4: Triangles",
    "concept": "Triangles",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Which musical instrument is named after its 3-sided shape?",
    "questionHindi": "किस वाद्य यंत्र का नाम उसके 3-भुजाओं वाले आकार पर रखा गया है?",
    "visualEmoji": "📐 🥁 🎸",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_a_4_q9_opt1",
          "text": "Triangle 📐",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_a_4_q9_opt2",
          "text": "Drum 🥁",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_a_4_q9_opt3",
          "text": "Guitar 🎸",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The musical triangle is made of metal shaped like a triangle!",
    "explanationHindi": "म्यूजिकल ट्रायंगल धातु से बना त्रिकोण होता है!",
    "points": 20
  },
  {
    "id": "lkg_ms_a_4_q10",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "A.4: Triangles",
    "concept": "Triangles",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Count the triangles here: 🔺 🔴 🔺 🟦 🔺",
    "questionHindi": "यहाँ त्रिकोणों को गिनें: 🔺 🔴 🔺 🟦 🔺",
    "visualEmoji": "🔺 🔴 🔺 🟦 🔺",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_a_4_q10_opt1",
          "text": "3 Triangles",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_a_4_q10_opt2",
          "text": "2 Triangles",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_a_4_q10_opt3",
          "text": "4 Triangles",
          "isCorrect": false
        }
      ]
    },
    "explanation": "There are 3 triangles in this line!",
    "explanationHindi": "इस पंक्ति में 3 त्रिकोण हैं!",
    "points": 20
  },
  // ==========================================================================
  // A.5: Rectangles (10 Questions)
  // ==========================================================================
  {
    "id": "lkg_ms_a_5_q1",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "A.5: Rectangles",
    "concept": "Rectangles",
    "difficulty": "easy",
    "type": "mcq",
    "question": "How many sides does a rectangle have?",
    "questionHindi": "एक आयत (Rectangle) में कितनी भुजाएं होती हैं?",
    "visualEmoji": "🟨 🚪",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_a_5_q1_opt1",
          "text": "4 sides",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_a_5_q1_opt2",
          "text": "3 sides",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_a_5_q1_opt3",
          "text": "6 sides",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A rectangle has 4 straight sides!",
    "explanationHindi": "एक आयत में 4 सीधी भुजाएं होती हैं!",
    "points": 10
  },
  {
    "id": "lkg_ms_a_5_q2",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "A.5: Rectangles",
    "concept": "Rectangles",
    "difficulty": "easy",
    "type": "mcq",
    "question": "How are the sides in a rectangle?",
    "questionHindi": "एक आयत में भुजाएं कैसी होती हैं?",
    "visualEmoji": "🟨",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_a_5_q2_opt1",
          "text": "2 long sides and 2 short sides",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_a_5_q2_opt2",
          "text": "All 4 sides equal",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_a_5_q2_opt3",
          "text": "No straight sides",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A rectangle has 2 long sides and 2 short sides!",
    "explanationHindi": "आयत की 2 भुजाएं लंबी और 2 छोटी होती हैं!",
    "points": 10
  },
  {
    "id": "lkg_ms_a_5_q3",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "A.5: Rectangles",
    "concept": "Rectangles",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which school object is shaped like a rectangle?",
    "questionHindi": "स्कूल की कौन सी वस्तु आयत के आकार की होती है?",
    "visualEmoji": "📒 ⚽ 🎈",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_a_5_q3_opt1",
          "text": "Notebook 📒",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_a_5_q3_opt2",
          "text": "Football ⚽",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_a_5_q3_opt3",
          "text": "Balloon 🎈",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A notebook has 2 long sides and 2 short sides, making it a rectangle!",
    "explanationHindi": "नोटबुक की 2 भुजाएं लंबी और 2 छोटी होती हैं, अतः यह आयत है!",
    "points": 10
  },
  {
    "id": "lkg_ms_a_5_q4",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "A.5: Rectangles",
    "concept": "Rectangles",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at the classroom door 🚪. What shape is it?",
    "questionHindi": "कक्षा के दरवाज़े 🚪 को देखें। इसका आकार क्या है?",
    "visualEmoji": "🚪 🏫",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_a_5_q4_opt1",
          "text": "Rectangle 🟨",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_a_5_q4_opt2",
          "text": "Circle 🔴",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_a_5_q4_opt3",
          "text": "Triangle 🔺",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A door has 2 tall sides and 2 short sides, so it is a rectangle!",
    "explanationHindi": "दरवाज़ा आयताकार (Rectangle) होता है!",
    "points": 15
  },
  {
    "id": "lkg_ms_a_5_q5",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "A.5: Rectangles",
    "concept": "Rectangles",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at this chocolate bar 🍫. What shape is it?",
    "questionHindi": "इस चॉकलेट बार 🍫 को देखें। इसका आकार क्या है?",
    "visualEmoji": "🍫 😋",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_a_5_q5_opt1",
          "text": "Rectangle 🟨",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_a_5_q5_opt2",
          "text": "Circle 🔴",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_a_5_q5_opt3",
          "text": "Triangle 🔺",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A chocolate bar is long and rectangular!",
    "explanationHindi": "चॉकलेट बार आयताकार होती है!",
    "points": 15
  },
  {
    "id": "lkg_ms_a_5_q6",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "A.5: Rectangles",
    "concept": "Rectangles",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at this letter envelope ✉️. What shape does it have?",
    "questionHindi": "इस पत्र के लिफाफे ✉️ को देखें। इसका आकार क्या है?",
    "visualEmoji": "✉️ 📬",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_a_5_q6_opt1",
          "text": "Rectangle 🟨",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_a_5_q6_opt2",
          "text": "Circle 🔴",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_a_5_q6_opt3",
          "text": "Triangle 🔺",
          "isCorrect": false
        }
      ]
    },
    "explanation": "An envelope has 2 long sides and 2 short sides, forming a rectangle!",
    "explanationHindi": "लिफाफा आयताकार होता है!",
    "points": 15
  },
  {
    "id": "lkg_ms_a_5_q7",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "A.5: Rectangles",
    "concept": "Rectangles",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at this paper currency note 💵. What shape is it?",
    "questionHindi": "इस कागज़ी नोट 💵 को देखें। इसका आकार क्या है?",
    "visualEmoji": "💵 🪙",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_a_5_q7_opt1",
          "text": "Rectangle 🟨",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_a_5_q7_opt2",
          "text": "Circle 🔴",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_a_5_q7_opt3",
          "text": "Square 🟦",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A currency note is a flat rectangle!",
    "explanationHindi": "करेंसी नोट एक चपटा आयत होता है!",
    "points": 15
  },
  {
    "id": "lkg_ms_a_5_q8",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "A.5: Rectangles",
    "concept": "Rectangles",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Look at the television screen 📺. It has 2 wide sides and 2 short sides. What shape?",
    "questionHindi": "टीवी स्क्रीन 📺 को देखें। इसमें 2 चौड़ी और 2 छोटी भुजाएं हैं। यह क्या है?",
    "visualEmoji": "📺 🛋️",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_a_5_q8_opt1",
          "text": "Rectangle 🟨",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_a_5_q8_opt2",
          "text": "Square 🟦",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_a_5_q8_opt3",
          "text": "Circle 🔴",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A TV screen is wide and rectangular!",
    "explanationHindi": "टीवी स्क्रीन आयताकार (Rectangle) होती है!",
    "points": 20
  },
  {
    "id": "lkg_ms_a_5_q9",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "A.5: Rectangles",
    "concept": "Rectangles",
    "difficulty": "hard",
    "type": "mcq",
    "question": "How many corners does a rectangle have?",
    "questionHindi": "एक आयत में कितने कोने होते हैं?",
    "visualEmoji": "🟨",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_a_5_q9_opt1",
          "text": "4 corners",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_a_5_q9_opt2",
          "text": "3 corners",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_a_5_q9_opt3",
          "text": "0 corners",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A rectangle has 4 corners, just like a square!",
    "explanationHindi": "आयत में 4 कोने होते हैं!",
    "points": 20
  },
  {
    "id": "lkg_ms_a_5_q10",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "A.5: Rectangles",
    "concept": "Rectangles",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Count the rectangles: 🟨 🔴 🟨 🔺 🟨 🟨",
    "questionHindi": "यहाँ आयतों (Rectangles) को गिनें: 🟨 🔴 🟨 🔺 🟨 🟨",
    "visualEmoji": "🟨 🔴 🟨 🔺 🟨 🟨",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_a_5_q10_opt1",
          "text": "4 Rectangles",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_a_5_q10_opt2",
          "text": "3 Rectangles",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_a_5_q10_opt3",
          "text": "5 Rectangles",
          "isCorrect": false
        }
      ]
    },
    "explanation": "There are 4 yellow rectangles in the row!",
    "explanationHindi": "पंक्ति में 4 पीले आयत हैं!",
    "points": 20
  },
  // ==========================================================================
  // A.6: Circles, squares and triangles (10 Questions)
  // ==========================================================================
  {
    "id": "lkg_ms_a_6_q1",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "A.6: Circles, squares and triangles",
    "concept": "Circles, squares and triangles",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which shape has the fewest corners?",
    "questionHindi": "किस आकृति में सबसे कम कोने होते हैं?",
    "visualEmoji": "🔴 🔺 🟦",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_a_6_q1_opt1",
          "text": "Circle (0 corners) 🔴",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_a_6_q1_opt2",
          "text": "Triangle (3 corners) 🔺",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_a_6_q1_opt3",
          "text": "Square (4 corners) 🟦",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A circle has 0 corners, which is the fewest!",
    "explanationHindi": "वृत्त में 0 कोने होते हैं, जो सबसे कम हैं!",
    "points": 10
  },
  {
    "id": "lkg_ms_a_6_q2",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "A.6: Circles, squares and triangles",
    "concept": "Circles, squares and triangles",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which shape does NOT belong in this group: 🔴 🔴 🟦 🔴?",
    "questionHindi": "इस समूह में कौन सा आकार अलग है: 🔴 🔴 🟦 🔴?",
    "visualEmoji": "🔴 🔴 🟦 🔴",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_a_6_q2_opt1",
          "text": "Square 🟦",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_a_6_q2_opt2",
          "text": "Circle 🔴",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_a_6_q2_opt3",
          "text": "Triangle 🔺",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The square 🟦 has corners and straight sides, while the rest are round circles!",
    "explanationHindi": "वर्ग 🟦 अलग है क्योंकि बाकी सभी गोल वृत्त हैं!",
    "points": 10
  },
  {
    "id": "lkg_ms_a_6_q3",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "A.6: Circles, squares and triangles",
    "concept": "Circles, squares and triangles",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which shape has 3 sides and 3 corners?",
    "questionHindi": "किस आकृति में 3 भुजाएं और 3 कोने होते हैं?",
    "visualEmoji": "🔺 🟦 🔴",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_a_6_q3_opt1",
          "text": "Triangle 🔺",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_a_6_q3_opt2",
          "text": "Square 🟦",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_a_6_q3_opt3",
          "text": "Circle 🔴",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A triangle has exactly 3 sides and 3 corners!",
    "explanationHindi": "त्रिकोण में 3 भुजाएं और 3 कोने होते हैं!",
    "points": 10
  },
  {
    "id": "lkg_ms_a_6_q4",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "A.6: Circles, squares and triangles",
    "concept": "Circles, squares and triangles",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which of these shapes can roll across the floor?",
    "questionHindi": "इनमें से कौन सी आकृति फर्श पर लुढ़क सकती है?",
    "visualEmoji": "🔴 🟦 🔺",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_a_6_q4_opt1",
          "text": "Circle 🔴",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_a_6_q4_opt2",
          "text": "Square 🟦",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_a_6_q4_opt3",
          "text": "Triangle 🔺",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Circles have round curved borders, so they roll!",
    "explanationHindi": "वृत्त गोल होते हैं इसलिए वे लुढ़कते हैं!",
    "points": 15
  },
  {
    "id": "lkg_ms_a_6_q5",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "A.6: Circles, squares and triangles",
    "concept": "Circles, squares and triangles",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Find the group that has ONLY triangles:",
    "questionHindi": "वह समूह चुनें जिसमें केवल त्रिकोण (Triangles) हैं:",
    "visualEmoji": "🔺 🔺 🔺",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_a_6_q5_opt1",
          "text": "🔺 🔺 🔺",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_a_6_q5_opt2",
          "text": "🔴 🟦 🔺",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_a_6_q5_opt3",
          "text": "🟦 🟦 🟦",
          "isCorrect": false
        }
      ]
    },
    "explanation": "All 3 shapes in this group are triangles!",
    "explanationHindi": "इस समूह के सभी 3 आकार त्रिकोण हैं!",
    "points": 15
  },
  {
    "id": "lkg_ms_a_6_q6",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "A.6: Circles, squares and triangles",
    "concept": "Circles, squares and triangles",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at this ice cream cone 🍦. What shape holds the ice cream at the bottom?",
    "questionHindi": "इस आइसक्रीम कोन 🍦 को देखें। नीचे का हिस्सा किस आकार का है?",
    "visualEmoji": "🍦 🍨",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_a_6_q6_opt1",
          "text": "Triangle 🔺",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_a_6_q6_opt2",
          "text": "Square 🟦",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_a_6_q6_opt3",
          "text": "Circle 🔴",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The cone tapers down to a point, forming a triangle shape!",
    "explanationHindi": "आइसक्रीम का कोन त्रिकोण के आकार का होता है!",
    "points": 15
  },
  {
    "id": "lkg_ms_a_6_q7",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "A.6: Circles, squares and triangles",
    "concept": "Circles, squares and triangles",
    "difficulty": "medium",
    "type": "mcq",
    "question": "A clock is a 🔴, a gift box is a 🟦, and a party hat is a 🔺. Which has 4 equal sides?",
    "questionHindi": "घड़ी 🔴 है, डिब्बा 🟦 है, और टोपी 🔺 है। किसकी 4 बराबर भुजाएं हैं?",
    "visualEmoji": "⏰ 🎁 🥳",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_a_6_q7_opt1",
          "text": "Gift Box 🎁 (Square)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_a_6_q7_opt2",
          "text": "Clock ⏰ (Circle)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_a_6_q7_opt3",
          "text": "Party Hat 🥳 (Triangle)",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A square gift box has 4 equal straight sides!",
    "explanationHindi": "चौकोर उपहार डिब्बे की 4 बराबर भुजाएं होती हैं!",
    "points": 15
  },
  {
    "id": "lkg_ms_a_6_q8",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "A.6: Circles, squares and triangles",
    "concept": "Circles, squares and triangles",
    "difficulty": "hard",
    "type": "mcq",
    "question": "How many total corners do 1 triangle and 1 square have together?",
    "questionHindi": "1 त्रिकोण और 1 वर्ग के मिलाकर कुल कितने कोने होते हैं?",
    "visualEmoji": "🔺 + 🟦",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_a_6_q8_opt1",
          "text": "7 corners (3 + 4)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_a_6_q8_opt2",
          "text": "5 corners",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_a_6_q8_opt3",
          "text": "6 corners",
          "isCorrect": false
        }
      ]
    },
    "explanation": "3 corners (triangle) + 4 corners (square) = 7 corners!",
    "explanationHindi": "3 कोने (त्रिकोण) + 4 कोने (वर्ग) = 7 कोने!",
    "points": 20
  },
  {
    "id": "lkg_ms_a_6_q9",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "A.6: Circles, squares and triangles",
    "concept": "Circles, squares and triangles",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Sort the shapes: How many squares are in this mixed bunch: 🟦 🔴 🔺 🟦 🔴?",
    "questionHindi": "आकृतियां छाँटें: 🟦 🔴 🔺 🟦 🔴 में कितने वर्ग हैं?",
    "visualEmoji": "🟦 🔴 🔺 🟦 🔴",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_a_6_q9_opt1",
          "text": "2 Squares",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_a_6_q9_opt2",
          "text": "3 Squares",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_a_6_q9_opt3",
          "text": "1 Square",
          "isCorrect": false
        }
      ]
    },
    "explanation": "There are 2 blue squares in this bunch!",
    "explanationHindi": "इस समूह में 2 नीले वर्ग हैं!",
    "points": 20
  },
  {
    "id": "lkg_ms_a_6_q10",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "A.6: Circles, squares and triangles",
    "concept": "Circles, squares and triangles",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Which shape has more corners than a triangle?",
    "questionHindi": "किस आकृति में त्रिकोण से अधिक कोने होते हैं?",
    "visualEmoji": "🟦 🔴",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_a_6_q10_opt1",
          "text": "Square (4 corners) 🟦",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_a_6_q10_opt2",
          "text": "Circle (0 corners) 🔴",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_a_6_q10_opt3",
          "text": "None",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A square has 4 corners, which is more than a triangle's 3 corners!",
    "explanationHindi": "वर्ग में 4 कोने होते हैं, जो त्रिकोण के 3 कोनों से अधिक हैं!",
    "points": 20
  },
  // ==========================================================================
  // B.1: Identify numbers - up to 3 (10 Questions)
  // ==========================================================================
  {
    "id": "lkg_ms_b_1_q1",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "B.1: Identify numbers - up to 3",
    "concept": "Identify numbers - up to 3",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which number is this numeral: 2?",
    "questionHindi": "यह कौन सी संख्या है: 2?",
    "visualEmoji": "2️⃣ ✌️",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_b_1_q1_opt1",
          "text": "Two (2)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_b_1_q1_opt2",
          "text": "One (1)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_b_1_q1_opt3",
          "text": "Three (3)",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The numeral 2 represents two objects!",
    "explanationHindi": "अंक 2 दो वस्तुओं को दर्शाता है!",
    "points": 10
  },
  {
    "id": "lkg_ms_b_1_q2",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "B.1: Identify numbers - up to 3",
    "concept": "Identify numbers - up to 3",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which number is this numeral: 1?",
    "questionHindi": "यह कौन सी संख्या है: 1?",
    "visualEmoji": "1️⃣ ☝️",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_b_1_q2_opt1",
          "text": "One (1)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_b_1_q2_opt2",
          "text": "Two (2)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_b_1_q2_opt3",
          "text": "Three (3)",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The numeral 1 represents a single object!",
    "explanationHindi": "अंक 1 एक वस्तु को दर्शाता है!",
    "points": 10
  },
  {
    "id": "lkg_ms_b_1_q3",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "B.1: Identify numbers - up to 3",
    "concept": "Identify numbers - up to 3",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which number is this numeral: 3?",
    "questionHindi": "यह कौन सी संख्या है: 3?",
    "visualEmoji": "3️⃣ 🤟",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_b_1_q3_opt1",
          "text": "Three (3)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_b_1_q3_opt2",
          "text": "Two (2)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_b_1_q3_opt3",
          "text": "One (1)",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The numeral 3 represents three objects!",
    "explanationHindi": "अंक 3 तीन वस्तुओं को दर्शाता है!",
    "points": 10
  },
  {
    "id": "lkg_ms_b_1_q4",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "B.1: Identify numbers - up to 3",
    "concept": "Identify numbers - up to 3",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which numeral represents the word 'TWO'?",
    "questionHindi": "शब्द 'दो (TWO)' को कौन सा अंक दर्शाता है?",
    "visualEmoji": "✌️ 2️⃣",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_b_1_q4_opt1",
          "text": "2",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_b_1_q4_opt2",
          "text": "1",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_b_1_q4_opt3",
          "text": "3",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Two is written as the numeral 2!",
    "explanationHindi": "'दो' को अंक 2 के रूप में लिखा जाता है!",
    "points": 15
  },
  {
    "id": "lkg_ms_b_1_q5",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "B.1: Identify numbers - up to 3",
    "concept": "Identify numbers - up to 3",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which numeral represents the word 'THREE'?",
    "questionHindi": "शब्द 'तीन (THREE)' को कौन सा अंक दर्शाता है?",
    "visualEmoji": "🤟 3️⃣",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_b_1_q5_opt1",
          "text": "3",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_b_1_q5_opt2",
          "text": "2",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_b_1_q5_opt3",
          "text": "1",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Three is written as 3!",
    "explanationHindi": "'तीन' को अंक 3 लिखा जाता है!",
    "points": 15
  },
  {
    "id": "lkg_ms_b_1_q6",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "B.1: Identify numbers - up to 3",
    "concept": "Identify numbers - up to 3",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which numeral represents a single solitary object: 'ONE'?",
    "questionHindi": "एक अकेली वस्तु 'एक (ONE)' को कौन सा अंक दर्शाता है?",
    "visualEmoji": "☝️ 1️⃣",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_b_1_q6_opt1",
          "text": "1",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_b_1_q6_opt2",
          "text": "3",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_b_1_q6_opt3",
          "text": "2",
          "isCorrect": false
        }
      ]
    },
    "explanation": "One is written as 1!",
    "explanationHindi": "'एक' को अंक 1 लिखा जाता है!",
    "points": 15
  },
  {
    "id": "lkg_ms_b_1_q7",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "B.1: Identify numbers - up to 3",
    "concept": "Identify numbers - up to 3",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at the fingers: ☝️. How many fingers are held up?",
    "questionHindi": "उंगलियों को देखें: ☝️। कितनी उंगलियां ऊपर हैं?",
    "visualEmoji": "☝️",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_b_1_q7_opt1",
          "text": "1",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_b_1_q7_opt2",
          "text": "2",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_b_1_q7_opt3",
          "text": "3",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Only 1 pointer finger is held up!",
    "explanationHindi": "केवल 1 उंगली ऊपर है!",
    "points": 15
  },
  {
    "id": "lkg_ms_b_1_q8",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "B.1: Identify numbers - up to 3",
    "concept": "Identify numbers - up to 3",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Look at the peace sign fingers: ✌️. How many fingers?",
    "questionHindi": "इस हाथ के चिन्ह को देखें: ✌️। कितनी उंगलियां हैं?",
    "visualEmoji": "✌️",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_b_1_q8_opt1",
          "text": "2",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_b_1_q8_opt2",
          "text": "1",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_b_1_q8_opt3",
          "text": "3",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Two fingers are held up: 1, 2!",
    "explanationHindi": "दो उंगलियां ऊपर हैं: 1, 2!",
    "points": 20
  },
  {
    "id": "lkg_ms_b_1_q9",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "B.1: Identify numbers - up to 3",
    "concept": "Identify numbers - up to 3",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Look at these fingers: 🤟. How many fingers are extended?",
    "questionHindi": "इन उंगलियों को देखें: 🤟। कितनी उंगलियां खुली हैं?",
    "visualEmoji": "🤟",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_b_1_q9_opt1",
          "text": "3",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_b_1_q9_opt2",
          "text": "2",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_b_1_q9_opt3",
          "text": "1",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Count them: 1, 2, 3 fingers!",
    "explanationHindi": "गिनें: 1, 2, 3 उंगलियां!",
    "points": 20
  },
  {
    "id": "lkg_ms_b_1_q10",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "B.1: Identify numbers - up to 3",
    "concept": "Identify numbers - up to 3",
    "difficulty": "hard",
    "type": "mcq",
    "question": "What number comes right after 2 when counting?",
    "questionHindi": "गिनती में 2 के तुरंत बाद कौन सी संख्या आती है?",
    "visualEmoji": "1, 2, ❓",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_b_1_q10_opt1",
          "text": "3",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_b_1_q10_opt2",
          "text": "1",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_b_1_q10_opt3",
          "text": "4",
          "isCorrect": false
        }
      ]
    },
    "explanation": "1, 2, 3! The number after 2 is 3.",
    "explanationHindi": "1, 2, 3! 2 के बाद 3 आता है।",
    "points": 20
  },
  // ==========================================================================
  // B.2: Count dots - up to 3 (10 Questions)
  // ==========================================================================
  {
    "id": "lkg_ms_b_2_q1",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "B.2: Count dots - up to 3",
    "concept": "Count dots - up to 3",
    "difficulty": "easy",
    "type": "mcq",
    "question": "How many dots do you see: ⚫ ⚫?",
    "questionHindi": "आपको कितने बिंदु (dots) दिख रहे हैं: ⚫ ⚫?",
    "visualEmoji": "⚫ ⚫",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_b_2_q1_opt1",
          "text": "2 dots",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_b_2_q1_opt2",
          "text": "1 dot",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_b_2_q1_opt3",
          "text": "3 dots",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Count them: 1, 2! There are 2 dots.",
    "explanationHindi": "गिनें: 1, 2! यहाँ 2 बिंदु हैं।",
    "points": 10
  },
  {
    "id": "lkg_ms_b_2_q2",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "B.2: Count dots - up to 3",
    "concept": "Count dots - up to 3",
    "difficulty": "easy",
    "type": "mcq",
    "question": "How many dots do you see: ⚫?",
    "questionHindi": "आपको कितने बिंदु दिख रहे हैं: ⚫?",
    "visualEmoji": "⚫",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_b_2_q2_opt1",
          "text": "1 dot",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_b_2_q2_opt2",
          "text": "2 dots",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_b_2_q2_opt3",
          "text": "3 dots",
          "isCorrect": false
        }
      ]
    },
    "explanation": "There is only 1 single dot!",
    "explanationHindi": "यहाँ केवल 1 बिंदु है!",
    "points": 10
  },
  {
    "id": "lkg_ms_b_2_q3",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "B.2: Count dots - up to 3",
    "concept": "Count dots - up to 3",
    "difficulty": "easy",
    "type": "mcq",
    "question": "How many dots do you see: ⚫ ⚫ ⚫?",
    "questionHindi": "आपको कितने बिंदु दिख रहे हैं: ⚫ ⚫ ⚫?",
    "visualEmoji": "⚫ ⚫ ⚫",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_b_2_q3_opt1",
          "text": "3 dots",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_b_2_q3_opt2",
          "text": "2 dots",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_b_2_q3_opt3",
          "text": "1 dot",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Count them together: 1, 2, 3! There are 3 dots.",
    "explanationHindi": "एक साथ गिनें: 1, 2, 3! यहाँ 3 बिंदु हैं।",
    "points": 10
  },
  {
    "id": "lkg_ms_b_2_q4",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "B.2: Count dots - up to 3",
    "concept": "Count dots - up to 3",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which dice face shows exactly 1 dot?",
    "questionHindi": "किस पासे के चेहरे पर ठीक 1 बिंदु है?",
    "visualEmoji": "⚀ ⚁ ⚂",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_b_2_q4_opt1",
          "text": "⚀ (One dot)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_b_2_q4_opt2",
          "text": "⚁ (Two dots)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_b_2_q4_opt3",
          "text": "⚂ (Three dots)",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The dice face with 1 dot in the center is ⚀!",
    "explanationHindi": "बीच में 1 बिंदु वाला पासा ⚀ है!",
    "points": 15
  },
  {
    "id": "lkg_ms_b_2_q5",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "B.2: Count dots - up to 3",
    "concept": "Count dots - up to 3",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which dice face shows exactly 2 dots?",
    "questionHindi": "किस पासे के चेहरे पर ठीक 2 बिंदु हैं?",
    "visualEmoji": "⚀ ⚁ ⚂",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_b_2_q5_opt1",
          "text": "⚁ (Two dots)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_b_2_q5_opt2",
          "text": "⚀ (One dot)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_b_2_q5_opt3",
          "text": "⚂ (Three dots)",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The dice face with diagonal dots is ⚁ (two)!",
    "explanationHindi": "दो बिंदुओं वाला पासा ⚁ है!",
    "points": 15
  },
  {
    "id": "lkg_ms_b_2_q6",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "B.2: Count dots - up to 3",
    "concept": "Count dots - up to 3",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which dice face shows exactly 3 dots?",
    "questionHindi": "किस पासे के चेहरे पर ठीक 3 बिंदु हैं?",
    "visualEmoji": "⚀ ⚁ ⚂",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_b_2_q6_opt1",
          "text": "⚂ (Three dots)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_b_2_q6_opt2",
          "text": "⚁ (Two dots)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_b_2_q6_opt3",
          "text": "⚀ (One dot)",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The dice face with a line of 3 dots is ⚂!",
    "explanationHindi": "तीन बिंदुओं वाला पासा ⚂ है!",
    "points": 15
  },
  {
    "id": "lkg_ms_b_2_q7",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "B.2: Count dots - up to 3",
    "concept": "Count dots - up to 3",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at this ladybug 🐞. How many black spots are on its back: ⚫ ⚫ ⚫?",
    "questionHindi": "इस लेडीबग 🐞 को देखें। इसकी पीठ पर कितने काले धब्बे हैं: ⚫ ⚫ ⚫?",
    "visualEmoji": "🐞 ⚫⚫⚫",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_b_2_q7_opt1",
          "text": "3 spots",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_b_2_q7_opt2",
          "text": "2 spots",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_b_2_q7_opt3",
          "text": "1 spot",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Count the spots: 1, 2, 3 spots!",
    "explanationHindi": "धब्बे गिनें: 1, 2, 3 धब्बे!",
    "points": 15
  },
  {
    "id": "lkg_ms_b_2_q8",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "B.2: Count dots - up to 3",
    "concept": "Count dots - up to 3",
    "difficulty": "hard",
    "type": "mcq",
    "question": "A card has 1 blue dot 🔵 and 1 yellow dot 🟡. How many dots in all?",
    "questionHindi": "एक कार्ड पर 1 नीला बिंदु 🔵 और 1 पीला बिंदु 🟡 है। कुल कितने बिंदु हैं?",
    "visualEmoji": "🔵 🟡",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_b_2_q8_opt1",
          "text": "2 dots",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_b_2_q8_opt2",
          "text": "3 dots",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_b_2_q8_opt3",
          "text": "1 dot",
          "isCorrect": false
        }
      ]
    },
    "explanation": "1 + 1 = 2 dots altogether!",
    "explanationHindi": "1 + 1 = कुल 2 बिंदु!",
    "points": 20
  },
  {
    "id": "lkg_ms_b_2_q9",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "B.2: Count dots - up to 3",
    "concept": "Count dots - up to 3",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Look at this domino tile: [ ⚫ | ⚫ ]. How many dots total on both sides?",
    "questionHindi": "इस डोमिनो टाइल को देखें: [ ⚫ | ⚫ ]। दोनों तरफ मिलाकर कुल कितने बिंदु हैं?",
    "visualEmoji": "[⚫|⚫]",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_b_2_q9_opt1",
          "text": "2 dots",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_b_2_q9_opt2",
          "text": "3 dots",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_b_2_q9_opt3",
          "text": "1 dot",
          "isCorrect": false
        }
      ]
    },
    "explanation": "1 dot on the left + 1 dot on the right = 2 dots!",
    "explanationHindi": "बाएं 1 + दाएं 1 = कुल 2 बिंदु!",
    "points": 20
  },
  {
    "id": "lkg_ms_b_2_q10",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "B.2: Count dots - up to 3",
    "concept": "Count dots - up to 3",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Look at this domino: [ ⚫⚫ | ⚫ ]. How many dots in total?",
    "questionHindi": "इस डोमिनो को देखें: [ ⚫⚫ | ⚫ ]। कुल कितने बिंदु हैं?",
    "visualEmoji": "[⚫⚫|⚫]",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_b_2_q10_opt1",
          "text": "3 dots",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_b_2_q10_opt2",
          "text": "2 dots",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_b_2_q10_opt3",
          "text": "1 dot",
          "isCorrect": false
        }
      ]
    },
    "explanation": "2 dots + 1 dot = 3 dots in all!",
    "explanationHindi": "2 बिंदु + 1 बिंदु = कुल 3 बिंदु!",
    "points": 20
  },
  // ==========================================================================
  // B.3: Count shapes - up to 3 (10 Questions)
  // ==========================================================================
  {
    "id": "lkg_ms_b_3_q1",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "B.3: Count shapes - up to 3",
    "concept": "Count shapes - up to 3",
    "difficulty": "easy",
    "type": "mcq",
    "question": "How many blue squares can you count: 🟦 🟦?",
    "questionHindi": "आप कितने नीले वर्ग गिन सकते हैं: 🟦 🟦?",
    "visualEmoji": "🟦 🟦",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_b_3_q1_opt1",
          "text": "2 squares",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_b_3_q1_opt2",
          "text": "1 square",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_b_3_q1_opt3",
          "text": "3 squares",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Count them: 1, 2! There are 2 squares.",
    "explanationHindi": "गिनें: 1, 2! यहाँ 2 वर्ग हैं।",
    "points": 10
  },
  {
    "id": "lkg_ms_b_3_q2",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "B.3: Count shapes - up to 3",
    "concept": "Count shapes - up to 3",
    "difficulty": "easy",
    "type": "mcq",
    "question": "How many shiny stars are here: ⭐?",
    "questionHindi": "यहाँ कितने चमकदार तारे हैं: ⭐?",
    "visualEmoji": "⭐",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_b_3_q2_opt1",
          "text": "1 star",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_b_3_q2_opt2",
          "text": "2 stars",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_b_3_q2_opt3",
          "text": "3 stars",
          "isCorrect": false
        }
      ]
    },
    "explanation": "There is 1 beautiful star!",
    "explanationHindi": "यहाँ 1 सुंदर तारा है!",
    "points": 10
  },
  {
    "id": "lkg_ms_b_3_q3",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "B.3: Count shapes - up to 3",
    "concept": "Count shapes - up to 3",
    "difficulty": "easy",
    "type": "mcq",
    "question": "How many red triangles do you see: 🔺 🔺 🔺?",
    "questionHindi": "आपको कितने लाल त्रिकोण दिख रहे हैं: 🔺 🔺 🔺?",
    "visualEmoji": "🔺 🔺 🔺",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_b_3_q3_opt1",
          "text": "3 triangles",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_b_3_q3_opt2",
          "text": "2 triangles",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_b_3_q3_opt3",
          "text": "1 triangle",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Count: 1, 2, 3! There are 3 triangles.",
    "explanationHindi": "गिनें: 1, 2, 3! यहाँ 3 त्रिकोण हैं।",
    "points": 10
  },
  {
    "id": "lkg_ms_b_3_q4",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "B.3: Count shapes - up to 3",
    "concept": "Count shapes - up to 3",
    "difficulty": "medium",
    "type": "mcq",
    "question": "How many circles are in this group: 🔴 🔴?",
    "questionHindi": "इस समूह में कितने वृत्त हैं: 🔴 🔴?",
    "visualEmoji": "🔴 🔴",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_b_3_q4_opt1",
          "text": "2 circles",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_b_3_q4_opt2",
          "text": "3 circles",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_b_3_q4_opt3",
          "text": "1 circle",
          "isCorrect": false
        }
      ]
    },
    "explanation": "There are 2 round red circles!",
    "explanationHindi": "यहाँ 2 गोल लाल वृत्त हैं!",
    "points": 15
  },
  {
    "id": "lkg_ms_b_3_q5",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "B.3: Count shapes - up to 3",
    "concept": "Count shapes - up to 3",
    "difficulty": "medium",
    "type": "mcq",
    "question": "How many green squares are on the screen: 🟩 🟩 🟩?",
    "questionHindi": "स्क्रीन पर कितने हरे वर्ग हैं: 🟩 🟩 🟩?",
    "visualEmoji": "🟩 🟩 🟩",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_b_3_q5_opt1",
          "text": "3 squares",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_b_3_q5_opt2",
          "text": "2 squares",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_b_3_q5_opt3",
          "text": "1 square",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Count together: 1, 2, 3 green squares!",
    "explanationHindi": "एक साथ गिनें: 1, 2, 3 हरे वर्ग!",
    "points": 15
  },
  {
    "id": "lkg_ms_b_3_q6",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "B.3: Count shapes - up to 3",
    "concept": "Count shapes - up to 3",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which group has exactly 2 stars?",
    "questionHindi": "किस समूह में ठीक 2 तारे हैं?",
    "visualEmoji": "⭐ ⭐ vs ⭐ vs ⭐⭐⭐",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_b_3_q6_opt1",
          "text": "⭐ ⭐ (Two)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_b_3_q6_opt2",
          "text": "⭐ (One)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_b_3_q6_opt3",
          "text": "⭐ ⭐ ⭐ (Three)",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Count: 1, 2 stars!",
    "explanationHindi": "गिनें: 1, 2 तारे!",
    "points": 15
  },
  {
    "id": "lkg_ms_b_3_q7",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "B.3: Count shapes - up to 3",
    "concept": "Count shapes - up to 3",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which group has exactly 3 diamonds?",
    "questionHindi": "किस समूह में ठीक 3 हीरे (Diamonds) हैं?",
    "visualEmoji": "🔷 🔷 🔷",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_b_3_q7_opt1",
          "text": "🔷 🔷 🔷 (Three)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_b_3_q7_opt2",
          "text": "🔷 🔷 (Two)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_b_3_q7_opt3",
          "text": "🔷 (One)",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Count: 1, 2, 3 diamonds!",
    "explanationHindi": "गिनें: 1, 2, 3 हीरे!",
    "points": 15
  },
  {
    "id": "lkg_ms_b_3_q8",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "B.3: Count shapes - up to 3",
    "concept": "Count shapes - up to 3",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Count ONLY the triangles in this mixed group: 🔺 🟦 🔺",
    "questionHindi": "इस मिले-जुले समूह में केवल त्रिकोण गिनें: 🔺 🟦 🔺",
    "visualEmoji": "🔺 🟦 🔺",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_b_3_q8_opt1",
          "text": "2 triangles",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_b_3_q8_opt2",
          "text": "1 triangle",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_b_3_q8_opt3",
          "text": "3 triangles",
          "isCorrect": false
        }
      ]
    },
    "explanation": "There are 2 triangles and 1 square!",
    "explanationHindi": "यहाँ 2 त्रिकोण और 1 वर्ग है!",
    "points": 20
  },
  {
    "id": "lkg_ms_b_3_q9",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "B.3: Count shapes - up to 3",
    "concept": "Count shapes - up to 3",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Count ONLY the circles in this group: 🔴 🔺 🔴 🔴",
    "questionHindi": "इस समूह में केवल वृत्त गिनें: 🔴 🔺 🔴 🔴",
    "visualEmoji": "🔴 🔺 🔴 🔴",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_b_3_q9_opt1",
          "text": "3 circles",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_b_3_q9_opt2",
          "text": "2 circles",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_b_3_q9_opt3",
          "text": "1 circle",
          "isCorrect": false
        }
      ]
    },
    "explanation": "There are 3 circles (and 1 triangle)!",
    "explanationHindi": "यहाँ 3 वृत्त हैं!",
    "points": 20
  },
  {
    "id": "lkg_ms_b_3_q10",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "B.3: Count shapes - up to 3",
    "concept": "Count shapes - up to 3",
    "difficulty": "hard",
    "type": "mcq",
    "question": "A box has 1 red heart ❤️ and 2 pink hearts 🩷. How many hearts in total?",
    "questionHindi": "एक डिब्बे में 1 लाल दिल ❤️ और 2 गुलाबी दिल 🩷 हैं। कुल कितने दिल हैं?",
    "visualEmoji": "❤️ 🩷 🩷",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_b_3_q10_opt1",
          "text": "3 hearts",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_b_3_q10_opt2",
          "text": "2 hearts",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_b_3_q10_opt3",
          "text": "1 heart",
          "isCorrect": false
        }
      ]
    },
    "explanation": "1 + 2 = 3 hearts in total!",
    "explanationHindi": "1 + 2 = कुल 3 दिल!",
    "points": 20
  },
  // ==========================================================================
  // B.4: Count objects - up to 3 (10 Questions)
  // ==========================================================================
  {
    "id": "lkg_ms_b_4_q1",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "B.4: Count objects - up to 3",
    "concept": "Count objects - up to 3",
    "difficulty": "easy",
    "type": "mcq",
    "question": "How many sweet red apples do you see: 🍎 🍎?",
    "questionHindi": "आपको कितने लाल सेब दिख रहे हैं: 🍎 🍎?",
    "visualEmoji": "🍎 🍎",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_b_4_q1_opt1",
          "text": "2 apples",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_b_4_q1_opt2",
          "text": "1 apple",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_b_4_q1_opt3",
          "text": "3 apples",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Count them: 1, 2 apples!",
    "explanationHindi": "गिनें: 1, 2 सेब!",
    "points": 10
  },
  {
    "id": "lkg_ms_b_4_q2",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "B.4: Count objects - up to 3",
    "concept": "Count objects - up to 3",
    "difficulty": "easy",
    "type": "mcq",
    "question": "How many cute puppies are playing: 🐶?",
    "questionHindi": "कितने पिल्ले खेल रहे हैं: 🐶?",
    "visualEmoji": "🐶",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_b_4_q2_opt1",
          "text": "1 puppy",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_b_4_q2_opt2",
          "text": "2 puppies",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_b_4_q2_opt3",
          "text": "3 puppies",
          "isCorrect": false
        }
      ]
    },
    "explanation": "There is 1 happy puppy!",
    "explanationHindi": "यहाँ 1 प्यारा पिल्ला है!",
    "points": 10
  },
  {
    "id": "lkg_ms_b_4_q3",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "B.4: Count objects - up to 3",
    "concept": "Count objects - up to 3",
    "difficulty": "easy",
    "type": "mcq",
    "question": "How many colorful balloons are floating: 🎈 🎈 🎈?",
    "questionHindi": "कितने रंग-बिरंगे गुब्बारे उड़ रहे हैं: 🎈 🎈 🎈?",
    "visualEmoji": "🎈 🎈 🎈",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_b_4_q3_opt1",
          "text": "3 balloons",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_b_4_q3_opt2",
          "text": "2 balloons",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_b_4_q3_opt3",
          "text": "1 balloon",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Count: 1, 2, 3 balloons!",
    "explanationHindi": "गिनें: 1, 2, 3 गुब्बारे!",
    "points": 10
  },
  {
    "id": "lkg_ms_b_4_q4",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "B.4: Count objects - up to 3",
    "concept": "Count objects - up to 3",
    "difficulty": "medium",
    "type": "mcq",
    "question": "How many little yellow ducklings are in the pond: 🦆 🦆?",
    "questionHindi": "तालाब में कितने बत्तख के बच्चे हैं: 🦆 🦆?",
    "visualEmoji": "🦆 🦆",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_b_4_q4_opt1",
          "text": "2 ducks",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_b_4_q4_opt2",
          "text": "3 ducks",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_b_4_q4_opt3",
          "text": "1 duck",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Count: 1, 2 ducks swimming!",
    "explanationHindi": "गिनें: 1, 2 बत्तखें!",
    "points": 15
  },
  {
    "id": "lkg_ms_b_4_q5",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "B.4: Count objects - up to 3",
    "concept": "Count objects - up to 3",
    "difficulty": "medium",
    "type": "mcq",
    "question": "How many toy cars are parked in the garage: 🚗 🚗 🚗?",
    "questionHindi": "गैराज में कितनी खिलौना कारें खड़ी हैं: 🚗 🚗 🚗?",
    "visualEmoji": "🚗 🚗 🚗",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_b_4_q5_opt1",
          "text": "3 cars",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_b_4_q5_opt2",
          "text": "2 cars",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_b_4_q5_opt3",
          "text": "1 car",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Count: 1, 2, 3 cars!",
    "explanationHindi": "गिनें: 1, 2, 3 कारें!",
    "points": 15
  },
  {
    "id": "lkg_ms_b_4_q6",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "B.4: Count objects - up to 3",
    "concept": "Count objects - up to 3",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which fruit basket has exactly 1 juicy mango?",
    "questionHindi": "किस टोकरी में ठीक 1 रसीला आम है?",
    "visualEmoji": "🥭 vs 🥭🥭 vs 🥭🥭🥭",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_b_4_q6_opt1",
          "text": "🥭 (One mango)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_b_4_q6_opt2",
          "text": "🥭 🥭 (Two)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_b_4_q6_opt3",
          "text": "🥭 🥭 🥭 (Three)",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The first group has 1 single mango!",
    "explanationHindi": "पहले समूह में केवल 1 आम है!",
    "points": 15
  },
  {
    "id": "lkg_ms_b_4_q7",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "B.4: Count objects - up to 3",
    "concept": "Count objects - up to 3",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which plate has exactly 2 cookies: 🍪 🍪?",
    "questionHindi": "किस प्लेट में ठीक 2 कुकीज़ हैं: 🍪 🍪?",
    "visualEmoji": "🍪 🍪",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_b_4_q7_opt1",
          "text": "Plate with 2 cookies 🍪🍪",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_b_4_q7_opt2",
          "text": "Plate with 1 cookie 🍪",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_b_4_q7_opt3",
          "text": "Plate with 3 cookies 🍪🍪🍪",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Count them: 1, 2 cookies!",
    "explanationHindi": "गिनें: 1, 2 कुकीज़!",
    "points": 15
  },
  {
    "id": "lkg_ms_b_4_q8",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "B.4: Count objects - up to 3",
    "concept": "Count objects - up to 3",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Count the yellow bananas in this snack bowl: 🍌 🍌 🍌",
    "questionHindi": "कटोरे में पीले केलों को गिनें: 🍌 🍌 🍌",
    "visualEmoji": "🍌 🍌 🍌",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_b_4_q8_opt1",
          "text": "3 bananas",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_b_4_q8_opt2",
          "text": "2 bananas",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_b_4_q8_opt3",
          "text": "1 banana",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Count: 1, 2, 3 bananas!",
    "explanationHindi": "गिनें: 1, 2, 3 केले!",
    "points": 20
  },
  {
    "id": "lkg_ms_b_4_q9",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "B.4: Count objects - up to 3",
    "concept": "Count objects - up to 3",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Rohan has 1 toy train 🚂. His sister gives him 1 more 🚂. How many toy trains now?",
    "questionHindi": "रोहन के पास 1 रेलगाड़ी 🚂 है। उसकी बहन 1 और 🚂 देती है। अब कुल कितनी ट्रेनें हैं?",
    "visualEmoji": "🚂 + 🚂",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_b_4_q9_opt1",
          "text": "2 toy trains",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_b_4_q9_opt2",
          "text": "3 toy trains",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_b_4_q9_opt3",
          "text": "1 toy train",
          "isCorrect": false
        }
      ]
    },
    "explanation": "1 + 1 = 2 toy trains in total!",
    "explanationHindi": "1 + 1 = कुल 2 खिलौना ट्रेनें!",
    "points": 20
  },
  {
    "id": "lkg_ms_b_4_q10",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "B.4: Count objects - up to 3",
    "concept": "Count objects - up to 3",
    "difficulty": "hard",
    "type": "mcq",
    "question": "There are 2 birds on a branch 🐦 🐦. 1 more bird lands beside them 🐦. How many birds now?",
    "questionHindi": "शाखा पर 2 पक्षी 🐦 🐦 हैं। 1 और पक्षी 🐦 आकर बैठता है। अब कुल कितने पक्षी हैं?",
    "visualEmoji": "🐦🐦 + 🐦",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_b_4_q10_opt1",
          "text": "3 birds",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_b_4_q10_opt2",
          "text": "2 birds",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_b_4_q10_opt3",
          "text": "4 birds",
          "isCorrect": false
        }
      ]
    },
    "explanation": "2 + 1 = 3 birds singing on the branch!",
    "explanationHindi": "2 + 1 = शाखा पर कुल 3 पक्षी!",
    "points": 20
  },
  // ==========================================================================
  // B.5: Count on ten frames - up to 3 (10 Questions)
  // ==========================================================================
  {
    "id": "lkg_ms_b_5_q1",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "B.5: Count on ten frames - up to 3",
    "concept": "Count on ten frames - up to 3",
    "difficulty": "easy",
    "type": "mcq",
    "question": "How many dots are filled in this frame: [ ⚫ ⚫ | ⬜ ⬜ ⬜ ]?",
    "questionHindi": "इस फ्रेम में कितने बिंदु भरे हैं: [ ⚫ ⚫ | ⬜ ⬜ ⬜ ]?",
    "visualEmoji": "[⚫⚫|⬜⬜⬜]",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_b_5_q1_opt1",
          "text": "2 dots",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_b_5_q1_opt2",
          "text": "1 dot",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_b_5_q1_opt3",
          "text": "3 dots",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Count the filled dots: 1, 2 dots!",
    "explanationHindi": "भरे हुए बिंदु गिनें: 1, 2 बिंदु!",
    "points": 10
  },
  {
    "id": "lkg_ms_b_5_q2",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "B.5: Count on ten frames - up to 3",
    "concept": "Count on ten frames - up to 3",
    "difficulty": "easy",
    "type": "mcq",
    "question": "How many dots are in this frame: [ ⚫ | ⬜ ⬜ ⬜ ⬜ ]?",
    "questionHindi": "इस फ्रेम में कितने बिंदु हैं: [ ⚫ | ⬜ ⬜ ⬜ ⬜ ]?",
    "visualEmoji": "[⚫|⬜⬜⬜⬜]",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_b_5_q2_opt1",
          "text": "1 dot",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_b_5_q2_opt2",
          "text": "2 dots",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_b_5_q2_opt3",
          "text": "0 dots",
          "isCorrect": false
        }
      ]
    },
    "explanation": "There is only 1 dot in the first box!",
    "explanationHindi": "पहले बॉक्स में केवल 1 बिंदु है!",
    "points": 10
  },
  {
    "id": "lkg_ms_b_5_q3",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "B.5: Count on ten frames - up to 3",
    "concept": "Count on ten frames - up to 3",
    "difficulty": "easy",
    "type": "mcq",
    "question": "How many dots are in this frame: [ ⚫ ⚫ ⚫ | ⬜ ⬜ ]?",
    "questionHindi": "इस फ्रेम में कितने बिंदु हैं: [ ⚫ ⚫ ⚫ | ⬜ ⬜ ]?",
    "visualEmoji": "[⚫⚫⚫|⬜⬜]",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_b_5_q3_opt1",
          "text": "3 dots",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_b_5_q3_opt2",
          "text": "2 dots",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_b_5_q3_opt3",
          "text": "4 dots",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Count the dots: 1, 2, 3 dots!",
    "explanationHindi": "बिंदु गिनें: 1, 2, 3 बिंदु!",
    "points": 10
  },
  {
    "id": "lkg_ms_b_5_q4",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "B.5: Count on ten frames - up to 3",
    "concept": "Count on ten frames - up to 3",
    "difficulty": "medium",
    "type": "mcq",
    "question": "A frame has 2 dots filled and 3 empty spaces in the top row. How many dots?",
    "questionHindi": "फ्रेम की पहली पंक्ति में 2 बिंदु भरे हैं और 3 खाली हैं। कितने बिंदु हैं?",
    "visualEmoji": "[⚫⚫⬜⬜⬜]",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_b_5_q4_opt1",
          "text": "2",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_b_5_q4_opt2",
          "text": "3",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_b_5_q4_opt3",
          "text": "1",
          "isCorrect": false
        }
      ]
    },
    "explanation": "There are 2 dots filled in the frame!",
    "explanationHindi": "फ्रेम में 2 बिंदु भरे हैं!",
    "points": 15
  },
  {
    "id": "lkg_ms_b_5_q5",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "B.5: Count on ten frames - up to 3",
    "concept": "Count on ten frames - up to 3",
    "difficulty": "medium",
    "type": "mcq",
    "question": "A frame shows: [ 🔴 🔴 🔴 | ⬜ ⬜ ]. How many red counters are inside?",
    "questionHindi": "फ्रेम दिखाता है: [ 🔴 🔴 🔴 | ⬜ ⬜ ]। अंदर कितने लाल काउंटर हैं?",
    "visualEmoji": "[🔴🔴🔴|⬜⬜]",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_b_5_q5_opt1",
          "text": "3 counters",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_b_5_q5_opt2",
          "text": "2 counters",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_b_5_q5_opt3",
          "text": "1 counter",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Count: 1, 2, 3 red counters!",
    "explanationHindi": "गिनें: 1, 2, 3 लाल काउंटर!",
    "points": 15
  },
  {
    "id": "lkg_ms_b_5_q6",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "B.5: Count on ten frames - up to 3",
    "concept": "Count on ten frames - up to 3",
    "difficulty": "medium",
    "type": "mcq",
    "question": "A frame shows: [ 🔴 | ⬜ ⬜ ⬜ ⬜ ]. How many counters?",
    "questionHindi": "फ्रेम दिखाता है: [ 🔴 | ⬜ ⬜ ⬜ ⬜ ]। कितने काउंटर हैं?",
    "visualEmoji": "[🔴|⬜⬜⬜⬜]",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_b_5_q6_opt1",
          "text": "1 counter",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_b_5_q6_opt2",
          "text": "2 counters",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_b_5_q6_opt3",
          "text": "3 counters",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Only 1 counter is inside the frame!",
    "explanationHindi": "फ्रेम में केवल 1 काउंटर है!",
    "points": 15
  },
  {
    "id": "lkg_ms_b_5_q7",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "B.5: Count on ten frames - up to 3",
    "concept": "Count on ten frames - up to 3",
    "difficulty": "medium",
    "type": "mcq",
    "question": "How many empty boxes are left if 2 boxes are filled out of 5: [ ⚫ ⚫ | ⬜ ⬜ ⬜ ]?",
    "questionHindi": "यदि 5 में से 2 बॉक्स भरे हैं तो कितने खाली हैं: [ ⚫ ⚫ | ⬜ ⬜ ⬜ ]?",
    "visualEmoji": "[⚫⚫|⬜⬜⬜]",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_b_5_q7_opt1",
          "text": "3 empty boxes",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_b_5_q7_opt2",
          "text": "2 empty boxes",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_b_5_q7_opt3",
          "text": "1 empty box",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Count the white empty boxes: 1, 2, 3!",
    "explanationHindi": "सफ़ेद खाली बॉक्स गिनें: 1, 2, 3!",
    "points": 15
  },
  {
    "id": "lkg_ms_b_5_q8",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "B.5: Count on ten frames - up to 3",
    "concept": "Count on ten frames - up to 3",
    "difficulty": "hard",
    "type": "mcq",
    "question": "If you put 1 more dot into [ ⚫ | ⬜ ⬜ ⬜ ⬜ ], how many dots will be there?",
    "questionHindi": "यदि आप [ ⚫ | ⬜ ⬜ ⬜ ⬜ ] में 1 बिंदु और रखें, तो कितने बिंदु होंगे?",
    "visualEmoji": "[⚫|⬜⬜⬜⬜] + ⚫",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_b_5_q8_opt1",
          "text": "2 dots",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_b_5_q8_opt2",
          "text": "3 dots",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_b_5_q8_opt3",
          "text": "1 dot",
          "isCorrect": false
        }
      ]
    },
    "explanation": "1 dot + 1 more dot = 2 dots!",
    "explanationHindi": "1 बिंदु + 1 और बिंदु = 2 बिंदु!",
    "points": 20
  },
  {
    "id": "lkg_ms_b_5_q9",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "B.5: Count on ten frames - up to 3",
    "concept": "Count on ten frames - up to 3",
    "difficulty": "hard",
    "type": "mcq",
    "question": "If you add 1 dot to [ ⚫ ⚫ | ⬜ ⬜ ⬜ ], how many dots will you have?",
    "questionHindi": "यदि आप [ ⚫ ⚫ | ⬜ ⬜ ⬜ ] में 1 बिंदु और जोड़ें, तो कितने बिंदु होंगे?",
    "visualEmoji": "[⚫⚫|⬜⬜⬜] + ⚫",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_b_5_q9_opt1",
          "text": "3 dots",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_b_5_q9_opt2",
          "text": "2 dots",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_b_5_q9_opt3",
          "text": "4 dots",
          "isCorrect": false
        }
      ]
    },
    "explanation": "2 dots + 1 more dot = 3 dots!",
    "explanationHindi": "2 बिंदु + 1 और बिंदु = 3 बिंदु!",
    "points": 20
  },
  {
    "id": "lkg_ms_b_5_q10",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "B.5: Count on ten frames - up to 3",
    "concept": "Count on ten frames - up to 3",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Which frame has MORE dots: Frame A [ ⚫ ⚫ ] or Frame B [ ⚫ ]?",
    "questionHindi": "किस फ्रेम में अधिक बिंदु हैं: फ्रेम A [ ⚫ ⚫ ] या फ्रेम B [ ⚫ ]?",
    "visualEmoji": "A: [⚫⚫] vs B: [⚫]",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_b_5_q10_opt1",
          "text": "Frame A (2 dots)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_b_5_q10_opt2",
          "text": "Frame B (1 dot)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_b_5_q10_opt3",
          "text": "Both are equal",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Frame A has 2 dots, which is more than Frame B's 1 dot!",
    "explanationHindi": "फ्रेम A में 2 बिंदु हैं, जो फ्रेम B के 1 बिंदु से अधिक हैं!",
    "points": 20
  },
  // ==========================================================================
  // B.6: Show numbers on ten frames - up to 3 (10 Questions)
  // ==========================================================================
  {
    "id": "lkg_ms_b_6_q1",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "B.6: Show numbers on ten frames - up to 3",
    "concept": "Show numbers on ten frames - up to 3",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which ten frame shows the number 1?",
    "questionHindi": "कौन सा टेन फ्रेम संख्या 1 को दर्शाता है?",
    "visualEmoji": "1️⃣",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_b_6_q1_opt1",
          "text": "[ ⚫ ⬜ ⬜ ⬜ ⬜ ]",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_b_6_q1_opt2",
          "text": "[ ⚫ ⚫ ⬜ ⬜ ⬜ ]",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_b_6_q1_opt3",
          "text": "[ ⚫ ⚫ ⚫ ⬜ ⬜ ]",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The frame with 1 dot filled represents the number 1!",
    "explanationHindi": "1 बिंदु से भरा फ्रेम संख्या 1 को दर्शाता है!",
    "points": 10
  },
  {
    "id": "lkg_ms_b_6_q2",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "B.6: Show numbers on ten frames - up to 3",
    "concept": "Show numbers on ten frames - up to 3",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which ten frame shows the number 2?",
    "questionHindi": "कौन सा टेन फ्रेम संख्या 2 को दर्शाता है?",
    "visualEmoji": "2️⃣",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_b_6_q2_opt1",
          "text": "[ ⚫ ⚫ ⬜ ⬜ ⬜ ]",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_b_6_q2_opt2",
          "text": "[ ⚫ ⬜ ⬜ ⬜ ⬜ ]",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_b_6_q2_opt3",
          "text": "[ ⚫ ⚫ ⚫ ⬜ ⬜ ]",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The frame with 2 dots filled represents the number 2!",
    "explanationHindi": "2 बिंदुओं से भरा फ्रेम संख्या 2 को दर्शाता है!",
    "points": 10
  },
  {
    "id": "lkg_ms_b_6_q3",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "B.6: Show numbers on ten frames - up to 3",
    "concept": "Show numbers on ten frames - up to 3",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which ten frame shows the number 3?",
    "questionHindi": "कौन सा टेन फ्रेम संख्या 3 को दर्शाता है?",
    "visualEmoji": "3️⃣",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_b_6_q3_opt1",
          "text": "[ ⚫ ⚫ ⚫ ⬜ ⬜ ]",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_b_6_q3_opt2",
          "text": "[ ⚫ ⚫ ⬜ ⬜ ⬜ ]",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_b_6_q3_opt3",
          "text": "[ ⚫ ⬜ ⬜ ⬜ ⬜ ]",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The frame with 3 dots filled represents the number 3!",
    "explanationHindi": "3 बिंदुओं से भरा फ्रेम संख्या 3 को दर्शाता है!",
    "points": 10
  },
  {
    "id": "lkg_ms_b_6_q4",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "B.6: Show numbers on ten frames - up to 3",
    "concept": "Show numbers on ten frames - up to 3",
    "difficulty": "medium",
    "type": "mcq",
    "question": "How many dots do you need to place in a frame to show the word 'TWO'?",
    "questionHindi": "शब्द 'TWO (दो)' दिखाने के लिए आपको फ्रेम में कितने बिंदु रखने होंगे?",
    "visualEmoji": "✌️ 2️⃣",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_b_6_q4_opt1",
          "text": "2 dots",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_b_6_q4_opt2",
          "text": "1 dot",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_b_6_q4_opt3",
          "text": "3 dots",
          "isCorrect": false
        }
      ]
    },
    "explanation": "You place 2 dots to represent the number 2!",
    "explanationHindi": "संख्या 2 दिखाने के लिए 2 बिंदु रखें!",
    "points": 15
  },
  {
    "id": "lkg_ms_b_6_q5",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "B.6: Show numbers on ten frames - up to 3",
    "concept": "Show numbers on ten frames - up to 3",
    "difficulty": "medium",
    "type": "mcq",
    "question": "How many dots do you need to show the word 'THREE'?",
    "questionHindi": "शब्द 'THREE (तीन)' दिखाने के लिए कितने बिंदु चाहिए?",
    "visualEmoji": "🤟 3️⃣",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_b_6_q5_opt1",
          "text": "3 dots",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_b_6_q5_opt2",
          "text": "2 dots",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_b_6_q5_opt3",
          "text": "1 dot",
          "isCorrect": false
        }
      ]
    },
    "explanation": "You place 3 dots to represent 3!",
    "explanationHindi": "संख्या 3 दिखाने के लिए 3 बिंदु रखें!",
    "points": 15
  },
  {
    "id": "lkg_ms_b_6_q6",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "B.6: Show numbers on ten frames - up to 3",
    "concept": "Show numbers on ten frames - up to 3",
    "difficulty": "medium",
    "type": "mcq",
    "question": "How many dots do you need to show 'ONE'?",
    "questionHindi": "'ONE (एक)' दिखाने के लिए कितने बिंदु चाहिए?",
    "visualEmoji": "☝️ 1️⃣",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_b_6_q6_opt1",
          "text": "1 dot",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_b_6_q6_opt2",
          "text": "2 dots",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_b_6_q6_opt3",
          "text": "3 dots",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Place 1 dot to represent the number 1!",
    "explanationHindi": "संख्या 1 के लिए 1 बिंदु रखें!",
    "points": 15
  },
  {
    "id": "lkg_ms_b_6_q7",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "B.6: Show numbers on ten frames - up to 3",
    "concept": "Show numbers on ten frames - up to 3",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Match the fingers ✌️ (two) to the correct ten frame:",
    "questionHindi": "उंगलियों ✌️ (दो) को सही टेन फ्रेम से मिलाएं:",
    "visualEmoji": "✌️",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_b_6_q7_opt1",
          "text": "[ ⚫ ⚫ ⬜ ⬜ ⬜ ]",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_b_6_q7_opt2",
          "text": "[ ⚫ ⬜ ⬜ ⬜ ⬜ ]",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_b_6_q7_opt3",
          "text": "[ ⚫ ⚫ ⚫ ⬜ ⬜ ]",
          "isCorrect": false
        }
      ]
    },
    "explanation": "2 fingers match the frame with 2 dots!",
    "explanationHindi": "2 उंगलियां 2 बिंदुओं वाले फ्रेम से मेल खाती हैं!",
    "points": 15
  },
  {
    "id": "lkg_ms_b_6_q8",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "B.6: Show numbers on ten frames - up to 3",
    "concept": "Show numbers on ten frames - up to 3",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Match the fingers 🤟 (three) to the correct frame:",
    "questionHindi": "उंगलियों 🤟 (तीन) को सही फ्रेम से मिलाएं:",
    "visualEmoji": "🤟",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_b_6_q8_opt1",
          "text": "[ ⚫ ⚫ ⚫ ⬜ ⬜ ]",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_b_6_q8_opt2",
          "text": "[ ⚫ ⚫ ⬜ ⬜ ⬜ ]",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_b_6_q8_opt3",
          "text": "[ ⚫ ⬜ ⬜ ⬜ ⬜ ]",
          "isCorrect": false
        }
      ]
    },
    "explanation": "3 fingers match the frame with 3 dots!",
    "explanationHindi": "3 उंगलियां 3 बिंदुओं वाले फ्रेम से मेल खाती हैं!",
    "points": 20
  },
  {
    "id": "lkg_ms_b_6_q9",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "B.6: Show numbers on ten frames - up to 3",
    "concept": "Show numbers on ten frames - up to 3",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Match 1 single apple 🍎 to the ten frame:",
    "questionHindi": "1 अकेले सेब 🍎 को टेन फ्रेम से मिलाएं:",
    "visualEmoji": "🍎",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_b_6_q9_opt1",
          "text": "[ ⚫ ⬜ ⬜ ⬜ ⬜ ]",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_b_6_q9_opt2",
          "text": "[ ⚫ ⚫ ⬜ ⬜ ⬜ ]",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_b_6_q9_opt3",
          "text": "[ ⚫ ⚫ ⚫ ⬜ ⬜ ]",
          "isCorrect": false
        }
      ]
    },
    "explanation": "1 apple matches the frame with 1 dot!",
    "explanationHindi": "1 सेब 1 बिंदु वाले फ्रेम से मेल खाता है!",
    "points": 20
  },
  {
    "id": "lkg_ms_b_6_q10",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "B.6: Show numbers on ten frames - up to 3",
    "concept": "Show numbers on ten frames - up to 3",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Which frame is completely EMPTY (zero dots)?",
    "questionHindi": "कौन सा फ्रेम पूरी तरह खाली (0 बिंदु) है?",
    "visualEmoji": "0️⃣",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_b_6_q10_opt1",
          "text": "[ ⬜ ⬜ ⬜ ⬜ ⬜ ]",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_b_6_q10_opt2",
          "text": "[ ⚫ ⬜ ⬜ ⬜ ⬜ ]",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_b_6_q10_opt3",
          "text": "[ ⚫ ⚫ ⬜ ⬜ ⬜ ]",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A frame with 0 dots has all boxes white and empty!",
    "explanationHindi": "0 बिंदु वाले फ्रेम के सभी बॉक्स खाली होते हैं!",
    "points": 20
  },
  // ==========================================================================
  // B.7: Represent numbers - up to 3 (10 Questions)
  // ==========================================================================
  {
    "id": "lkg_ms_b_7_q1",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "B.7: Represent numbers - up to 3",
    "concept": "Represent numbers - up to 3",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which group shows the number 2: 🐱 🐱 or 🐱?",
    "questionHindi": "कौन सा समूह संख्या 2 को दर्शाता है: 🐱 🐱 या 🐱?",
    "visualEmoji": "🐱 🐱 vs 🐱",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_b_7_q1_opt1",
          "text": "🐱 🐱 (Two cats)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_b_7_q1_opt2",
          "text": "🐱 (One cat)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_b_7_q1_opt3",
          "text": "🐱 🐱 🐱 (Three cats)",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Count them: 1, 2 cats!",
    "explanationHindi": "गिनें: 1, 2 बिल्लियां!",
    "points": 10
  },
  {
    "id": "lkg_ms_b_7_q2",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "B.7: Represent numbers - up to 3",
    "concept": "Represent numbers - up to 3",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which group represents the number 1?",
    "questionHindi": "कौन सा समूह संख्या 1 को दर्शाता है?",
    "visualEmoji": "🐶",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_b_7_q2_opt1",
          "text": "🐶 (One dog)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_b_7_q2_opt2",
          "text": "🐶 🐶 (Two dogs)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_b_7_q2_opt3",
          "text": "🐶 🐶 🐶 (Three dogs)",
          "isCorrect": false
        }
      ]
    },
    "explanation": "1 single puppy represents the number 1!",
    "explanationHindi": "1 पिल्ला संख्या 1 को दर्शाता है!",
    "points": 10
  },
  {
    "id": "lkg_ms_b_7_q3",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "B.7: Represent numbers - up to 3",
    "concept": "Represent numbers - up to 3",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which picture set represents the number 3?",
    "questionHindi": "कौन सा चित्र सेट संख्या 3 को दर्शाता है?",
    "visualEmoji": "🚗 🚗 🚗",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_b_7_q3_opt1",
          "text": "🚗 🚗 🚗 (Three cars)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_b_7_q3_opt2",
          "text": "🚗 🚗 (Two cars)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_b_7_q3_opt3",
          "text": "🚗 (One car)",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Count: 1, 2, 3 cars represent the number 3!",
    "explanationHindi": "गिनें: 1, 2, 3 कारें संख्या 3 को दर्शाती हैं!",
    "points": 10
  },
  {
    "id": "lkg_ms_b_7_q4",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "B.7: Represent numbers - up to 3",
    "concept": "Represent numbers - up to 3",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at the dots: ⚫ ⚫ ⚫. Which numeral represents this set?",
    "questionHindi": "बिंदुओं को देखें: ⚫ ⚫ ⚫। कौन सा अंक इस सेट को दर्शाता है?",
    "visualEmoji": "⚫ ⚫ ⚫",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_b_7_q4_opt1",
          "text": "3",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_b_7_q4_opt2",
          "text": "2",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_b_7_q4_opt3",
          "text": "1",
          "isCorrect": false
        }
      ]
    },
    "explanation": "3 dots are represented by the numeral 3!",
    "explanationHindi": "3 बिंदु अंक 3 द्वारा दर्शाए जाते हैं!",
    "points": 15
  },
  {
    "id": "lkg_ms_b_7_q5",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "B.7: Represent numbers - up to 3",
    "concept": "Represent numbers - up to 3",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at the ice creams: 🍦 🍦. Which numeral represents this set?",
    "questionHindi": "आइसक्रीम को देखें: 🍦 🍦। कौन सा अंक इस सेट को दर्शाता है?",
    "visualEmoji": "🍦 🍦",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_b_7_q5_opt1",
          "text": "2",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_b_7_q5_opt2",
          "text": "1",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_b_7_q5_opt3",
          "text": "3",
          "isCorrect": false
        }
      ]
    },
    "explanation": "2 ice cream cones are represented by the numeral 2!",
    "explanationHindi": "2 आइसक्रीम अंक 2 द्वारा दर्शाई जाती हैं!",
    "points": 15
  },
  {
    "id": "lkg_ms_b_7_q6",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "B.7: Represent numbers - up to 3",
    "concept": "Represent numbers - up to 3",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at the sun: ☀️. Which numeral represents this set?",
    "questionHindi": "सूरज को देखें: ☀️। कौन सा अंक इस सेट को दर्शाता है?",
    "visualEmoji": "☀️",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_b_7_q6_opt1",
          "text": "1",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_b_7_q6_opt2",
          "text": "2",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_b_7_q6_opt3",
          "text": "3",
          "isCorrect": false
        }
      ]
    },
    "explanation": "There is 1 sun in our sky, represented by 1!",
    "explanationHindi": "आकाश में 1 सूरज है, जिसे 1 द्वारा दर्शाया जाता है!",
    "points": 15
  },
  {
    "id": "lkg_ms_b_7_q7",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "B.7: Represent numbers - up to 3",
    "concept": "Represent numbers - up to 3",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which tally marks represent the number 2: | | or |?",
    "questionHindi": "कौन से टैली चिन्ह संख्या 2 को दर्शाते हैं: | | या |?",
    "visualEmoji": "| |",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_b_7_q7_opt1",
          "text": "| | (Two tally marks)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_b_7_q7_opt2",
          "text": "| (One tally mark)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_b_7_q7_opt3",
          "text": "| | | (Three tally marks)",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Two vertical strokes | | represent 2!",
    "explanationHindi": "दो सीधी रेखाएं | | संख्या 2 को दर्शाती हैं!",
    "points": 15
  },
  {
    "id": "lkg_ms_b_7_q8",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "B.7: Represent numbers - up to 3",
    "concept": "Represent numbers - up to 3",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Which tally marks represent the number 3?",
    "questionHindi": "कौन से टैली चिन्ह संख्या 3 को दर्शाते हैं?",
    "visualEmoji": "| | |",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_b_7_q8_opt1",
          "text": "| | | (Three tally marks)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_b_7_q8_opt2",
          "text": "| | (Two tally marks)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_b_7_q8_opt3",
          "text": "| (One tally mark)",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Three vertical strokes | | | represent 3!",
    "explanationHindi": "तीन रेखाएं | | | संख्या 3 को दर्शाती हैं!",
    "points": 20
  },
  {
    "id": "lkg_ms_b_7_q9",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "B.7: Represent numbers - up to 3",
    "concept": "Represent numbers - up to 3",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Match the number 2 to the equal set:",
    "questionHindi": "संख्या 2 को उसके बराबर सेट से मिलाएं:",
    "visualEmoji": "2️⃣",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_b_7_q9_opt1",
          "text": "⭐ ⭐ (Two stars)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_b_7_q9_opt2",
          "text": "⭐ (One star)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_b_7_q9_opt3",
          "text": "⭐ ⭐ ⭐ (Three stars)",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The numeral 2 equals a pair of 2 stars!",
    "explanationHindi": "अंक 2 दो तारों के बराबर है!",
    "points": 20
  },
  {
    "id": "lkg_ms_b_7_q10",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "B.7: Represent numbers - up to 3",
    "concept": "Represent numbers - up to 3",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Match the number 3 to the equal set:",
    "questionHindi": "संख्या 3 को उसके बराबर सेट से मिलाएं:",
    "visualEmoji": "3️⃣",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_b_7_q10_opt1",
          "text": "🍎 🍎 🍎 (Three apples)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_b_7_q10_opt2",
          "text": "🍎 🍎 (Two apples)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_b_7_q10_opt3",
          "text": "🍎 (One apple)",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The numeral 3 matches a set of 3 apples!",
    "explanationHindi": "अंक 3 तीन सेबों के सेट से मेल खाता है!",
    "points": 20
  },
  // ==========================================================================
  // C.1: Identify numbers - up to 5 (10 Questions)
  // ==========================================================================
  {
    "id": "lkg_ms_c_1_q1",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "C.1: Identify numbers - up to 5",
    "concept": "Identify numbers - up to 5",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which number is this numeral: 4?",
    "questionHindi": "यह कौन सी संख्या है: 4?",
    "visualEmoji": "4️⃣ 🖐️",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_c_1_q1_opt1",
          "text": "Four (4)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_c_1_q1_opt2",
          "text": "Three (3)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_c_1_q1_opt3",
          "text": "Five (5)",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The numeral 4 represents four items!",
    "explanationHindi": "अंक 4 चार वस्तुओं को दर्शाता है!",
    "points": 10
  },
  {
    "id": "lkg_ms_c_1_q2",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "C.1: Identify numbers - up to 5",
    "concept": "Identify numbers - up to 5",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which number is this numeral: 5?",
    "questionHindi": "यह कौन सी संख्या है: 5?",
    "visualEmoji": "5️⃣ 🖐️",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_c_1_q2_opt1",
          "text": "Five (5)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_c_1_q2_opt2",
          "text": "Four (4)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_c_1_q2_opt3",
          "text": "Two (2)",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The numeral 5 represents five items, like 5 fingers on a hand!",
    "explanationHindi": "अंक 5 पाँच वस्तुओं को दर्शाता है!",
    "points": 10
  },
  {
    "id": "lkg_ms_c_1_q3",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "C.1: Identify numbers - up to 5",
    "concept": "Identify numbers - up to 5",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which numeral represents the word 'FOUR'?",
    "questionHindi": "शब्द 'चार (FOUR)' को कौन सा अंक दर्शाता है?",
    "visualEmoji": "4️⃣",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_c_1_q3_opt1",
          "text": "4",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_c_1_q3_opt2",
          "text": "3",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_c_1_q3_opt3",
          "text": "5",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Four is written as 4!",
    "explanationHindi": "'चार' को अंक 4 लिखा जाता है!",
    "points": 10
  },
  {
    "id": "lkg_ms_c_1_q4",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "C.1: Identify numbers - up to 5",
    "concept": "Identify numbers - up to 5",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which numeral represents the word 'FIVE'?",
    "questionHindi": "शब्द 'पाँच (FIVE)' को कौन सा अंक दर्शाता है?",
    "visualEmoji": "🖐️ 5️⃣",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_c_1_q4_opt1",
          "text": "5",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_c_1_q4_opt2",
          "text": "4",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_c_1_q4_opt3",
          "text": "3",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Five is written as 5!",
    "explanationHindi": "'पाँच' को अंक 5 लिखा जाता है!",
    "points": 15
  },
  {
    "id": "lkg_ms_c_1_q5",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "C.1: Identify numbers - up to 5",
    "concept": "Identify numbers - up to 5",
    "difficulty": "medium",
    "type": "mcq",
    "question": "How many fingers are on one open hand: 🖐️?",
    "questionHindi": "एक खुले हाथ 🖐️ में कितनी उंगलियां होती हैं?",
    "visualEmoji": "🖐️",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_c_1_q5_opt1",
          "text": "5 fingers",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_c_1_q5_opt2",
          "text": "4 fingers",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_c_1_q5_opt3",
          "text": "6 fingers",
          "isCorrect": false
        }
      ]
    },
    "explanation": "An open hand has 5 fingers: thumb, index, middle, ring, pinky!",
    "explanationHindi": "एक हाथ में 5 उंगलियां होती हैं!",
    "points": 15
  },
  {
    "id": "lkg_ms_c_1_q6",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "C.1: Identify numbers - up to 5",
    "concept": "Identify numbers - up to 5",
    "difficulty": "medium",
    "type": "mcq",
    "question": "What number comes right after 3 when counting: 1, 2, 3, ❓?",
    "questionHindi": "गिनती में 3 के तुरंत बाद कौन सी संख्या आती है: 1, 2, 3, ❓?",
    "visualEmoji": "1, 2, 3, ❓",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_c_1_q6_opt1",
          "text": "4",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_c_1_q6_opt2",
          "text": "5",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_c_1_q6_opt3",
          "text": "2",
          "isCorrect": false
        }
      ]
    },
    "explanation": "After 3 comes 4! 1, 2, 3, 4, 5.",
    "explanationHindi": "3 के बाद 4 आता है! 1, 2, 3, 4, 5.",
    "points": 15
  },
  {
    "id": "lkg_ms_c_1_q7",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "C.1: Identify numbers - up to 5",
    "concept": "Identify numbers - up to 5",
    "difficulty": "medium",
    "type": "mcq",
    "question": "What number comes right after 4 when counting: 1, 2, 3, 4, ❓?",
    "questionHindi": "गिनती में 4 के तुरंत बाद कौन सी संख्या आती है: 1, 2, 3, 4, ❓?",
    "visualEmoji": "1, 2, 3, 4, ❓",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_c_1_q7_opt1",
          "text": "5",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_c_1_q7_opt2",
          "text": "6",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_c_1_q7_opt3",
          "text": "3",
          "isCorrect": false
        }
      ]
    },
    "explanation": "After 4 comes 5!",
    "explanationHindi": "4 के बाद 5 आता है!",
    "points": 15
  },
  {
    "id": "lkg_ms_c_1_q8",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "C.1: Identify numbers - up to 5",
    "concept": "Identify numbers - up to 5",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Which number is missing in this sequence: 1, 2, ❓, 4, 5?",
    "questionHindi": "इस क्रम में कौन सी संख्या छूटी है: 1, 2, ❓, 4, 5?",
    "visualEmoji": "1, 2, ❓, 4, 5",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_c_1_q8_opt1",
          "text": "3",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_c_1_q8_opt2",
          "text": "4",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_c_1_q8_opt3",
          "text": "2",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The missing number between 2 and 4 is 3!",
    "explanationHindi": "2 और 4 के बीच छूटी हुई संख्या 3 है!",
    "points": 20
  },
  {
    "id": "lkg_ms_c_1_q9",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "C.1: Identify numbers - up to 5",
    "concept": "Identify numbers - up to 5",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Which number is 1 LESS than 5?",
    "questionHindi": "5 से 1 कम कौन सी संख्या है?",
    "visualEmoji": "5 - 1",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_c_1_q9_opt1",
          "text": "4",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_c_1_q9_opt2",
          "text": "3",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_c_1_q9_opt3",
          "text": "5",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Count backwards: 5, 4! So 4 is one less than 5.",
    "explanationHindi": "उल्टी गिनती: 5, 4! अतः 4, 5 से एक कम है।",
    "points": 20
  },
  {
    "id": "lkg_ms_c_1_q10",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "C.1: Identify numbers - up to 5",
    "concept": "Identify numbers - up to 5",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Which number is 1 MORE than 4?",
    "questionHindi": "4 से 1 अधिक कौन सी संख्या है?",
    "visualEmoji": "4 + 1",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_c_1_q10_opt1",
          "text": "5",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_c_1_q10_opt2",
          "text": "3",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_c_1_q10_opt3",
          "text": "6",
          "isCorrect": false
        }
      ]
    },
    "explanation": "4 and 1 more makes 5!",
    "explanationHindi": "4 में 1 जोड़ने पर 5 बनता है!",
    "points": 20
  },
  // ==========================================================================
  // C.2: Count dots - up to 5 (10 Questions)
  // ==========================================================================
  {
    "id": "lkg_ms_c_2_q1",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "C.2: Count dots - up to 5",
    "concept": "Count dots - up to 5",
    "difficulty": "easy",
    "type": "mcq",
    "question": "How many black dots do you see: ⚫ ⚫ ⚫ ⚫?",
    "questionHindi": "आपको कितने काले बिंदु दिख रहे हैं: ⚫ ⚫ ⚫ ⚫?",
    "visualEmoji": "⚫ ⚫ ⚫ ⚫",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_c_2_q1_opt1",
          "text": "4 dots",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_c_2_q1_opt2",
          "text": "3 dots",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_c_2_q1_opt3",
          "text": "5 dots",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Count: 1, 2, 3, 4 dots!",
    "explanationHindi": "गिनें: 1, 2, 3, 4 बिंदु!",
    "points": 10
  },
  {
    "id": "lkg_ms_c_2_q2",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "C.2: Count dots - up to 5",
    "concept": "Count dots - up to 5",
    "difficulty": "easy",
    "type": "mcq",
    "question": "How many dots do you see: ⚫ ⚫ ⚫ ⚫ ⚫?",
    "questionHindi": "आपको कितने बिंदु दिख रहे हैं: ⚫ ⚫ ⚫ ⚫ ⚫?",
    "visualEmoji": "⚫ ⚫ ⚫ ⚫ ⚫",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_c_2_q2_opt1",
          "text": "5 dots",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_c_2_q2_opt2",
          "text": "4 dots",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_c_2_q2_opt3",
          "text": "6 dots",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Count: 1, 2, 3, 4, 5 dots in a row!",
    "explanationHindi": "गिनें: 1, 2, 3, 4, 5 बिंदु!",
    "points": 10
  },
  {
    "id": "lkg_ms_c_2_q3",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "C.2: Count dots - up to 5",
    "concept": "Count dots - up to 5",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which dice face shows exactly 4 dots?",
    "questionHindi": "किस पासे पर ठीक 4 बिंदु हैं?",
    "visualEmoji": "⚂ ⚃ ⚄",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_c_2_q3_opt1",
          "text": "⚃ (Four dots)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_c_2_q3_opt2",
          "text": "⚂ (Three dots)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_c_2_q3_opt3",
          "text": "⚄ (Five dots)",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The square arrangement of 4 corner dots is ⚃!",
    "explanationHindi": "4 बिंदुओं वाला पासा ⚃ है!",
    "points": 10
  },
  {
    "id": "lkg_ms_c_2_q4",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "C.2: Count dots - up to 5",
    "concept": "Count dots - up to 5",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which dice face shows exactly 5 dots?",
    "questionHindi": "किस पासे पर ठीक 5 बिंदु हैं?",
    "visualEmoji": "⚂ ⚃ ⚄",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_c_2_q4_opt1",
          "text": "⚄ (Five dots)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_c_2_q4_opt2",
          "text": "⚃ (Four dots)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_c_2_q4_opt3",
          "text": "⚂ (Three dots)",
          "isCorrect": false
        }
      ]
    },
    "explanation": "4 corners + 1 center dot is ⚄ (five)!",
    "explanationHindi": "4 कोने + 1 बीच का बिंदु = ⚄ (पाँच)!",
    "points": 15
  },
  {
    "id": "lkg_ms_c_2_q5",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "C.2: Count dots - up to 5",
    "concept": "Count dots - up to 5",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at this domino tile: [ ⚫⚫ | ⚫⚫ ]. How many total dots?",
    "questionHindi": "इस डोमिनो को देखें: [ ⚫⚫ | ⚫⚫ ]। कुल कितने बिंदु हैं?",
    "visualEmoji": "[⚫⚫|⚫⚫]",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_c_2_q5_opt1",
          "text": "4 dots",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_c_2_q5_opt2",
          "text": "3 dots",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_c_2_q5_opt3",
          "text": "5 dots",
          "isCorrect": false
        }
      ]
    },
    "explanation": "2 dots + 2 dots = 4 dots!",
    "explanationHindi": "2 बिंदु + 2 बिंदु = 4 बिंदु!",
    "points": 15
  },
  {
    "id": "lkg_ms_c_2_q6",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "C.2: Count dots - up to 5",
    "concept": "Count dots - up to 5",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at this domino tile: [ ⚫⚫⚫ | ⚫⚫ ]. How many total dots?",
    "questionHindi": "इस डोमिनो को देखें: [ ⚫⚫⚫ | ⚫⚫ ]। कुल कितने बिंदु हैं?",
    "visualEmoji": "[⚫⚫⚫|⚫⚫]",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_c_2_q6_opt1",
          "text": "5 dots",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_c_2_q6_opt2",
          "text": "4 dots",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_c_2_q6_opt3",
          "text": "6 dots",
          "isCorrect": false
        }
      ]
    },
    "explanation": "3 dots + 2 dots = 5 dots!",
    "explanationHindi": "3 बिंदु + 2 बिंदु = 5 बिंदु!",
    "points": 15
  },
  {
    "id": "lkg_ms_c_2_q7",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "C.2: Count dots - up to 5",
    "concept": "Count dots - up to 5",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at this domino: [ ⚫⚫⚫⚫ | ⚫ ]. How many dots?",
    "questionHindi": "इस डोमिनो को देखें: [ ⚫⚫⚫⚫ | ⚫ ]। कितने बिंदु हैं?",
    "visualEmoji": "[⚫⚫⚫⚫|⚫]",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_c_2_q7_opt1",
          "text": "5 dots",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_c_2_q7_opt2",
          "text": "4 dots",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_c_2_q7_opt3",
          "text": "3 dots",
          "isCorrect": false
        }
      ]
    },
    "explanation": "4 dots + 1 dot = 5 dots!",
    "explanationHindi": "4 बिंदु + 1 बिंदु = 5 बिंदु!",
    "points": 15
  },
  {
    "id": "lkg_ms_c_2_q8",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "C.2: Count dots - up to 5",
    "concept": "Count dots - up to 5",
    "difficulty": "hard",
    "type": "mcq",
    "question": "A ladybug 🐞 has 2 spots on the left wing and 2 spots on the right wing. How many total spots?",
    "questionHindi": "लेडीबग 🐞 के बाएं पंख पर 2 और दाएं पर 2 धब्बे हैं। कुल कितने धब्बे हैं?",
    "visualEmoji": "🐞 (2 + 2)",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_c_2_q8_opt1",
          "text": "4 spots",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_c_2_q8_opt2",
          "text": "3 spots",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_c_2_q8_opt3",
          "text": "5 spots",
          "isCorrect": false
        }
      ]
    },
    "explanation": "2 + 2 = 4 spots altogether!",
    "explanationHindi": "2 + 2 = कुल 4 धब्बे!",
    "points": 20
  },
  {
    "id": "lkg_ms_c_2_q9",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "C.2: Count dots - up to 5",
    "concept": "Count dots - up to 5",
    "difficulty": "hard",
    "type": "mcq",
    "question": "A card has 3 blue dots 🔵 🔵 🔵 and 2 red dots 🔴 🔴. How many dots total?",
    "questionHindi": "एक कार्ड पर 3 नीले और 2 लाल बिंदु हैं। कुल कितने बिंदु हैं?",
    "visualEmoji": "🔵🔵🔵 + 🔴🔴",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_c_2_q9_opt1",
          "text": "5 dots",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_c_2_q9_opt2",
          "text": "4 dots",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_c_2_q9_opt3",
          "text": "6 dots",
          "isCorrect": false
        }
      ]
    },
    "explanation": "3 + 2 = 5 dots in all!",
    "explanationHindi": "3 + 2 = कुल 5 बिंदु!",
    "points": 20
  },
  {
    "id": "lkg_ms_c_2_q10",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "C.2: Count dots - up to 5",
    "concept": "Count dots - up to 5",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Which group has MORE dots: Group A with 4 dots or Group B with 5 dots?",
    "questionHindi": "किसमें अधिक बिंदु हैं: समूह A (4 बिंदु) या समूह B (5 बिंदु)?",
    "visualEmoji": "A: ⚫⚫⚫⚫ vs B: ⚫⚫⚫⚫⚫",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_c_2_q10_opt1",
          "text": "Group B (5 dots)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_c_2_q10_opt2",
          "text": "Group A (4 dots)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_c_2_q10_opt3",
          "text": "Both are equal",
          "isCorrect": false
        }
      ]
    },
    "explanation": "5 dots is more than 4 dots!",
    "explanationHindi": "5 बिंदु, 4 बिंदुओं से अधिक होते हैं!",
    "points": 20
  },
  // ==========================================================================
  // C.3: Count shapes - up to 5 (10 Questions)
  // ==========================================================================
  {
    "id": "lkg_ms_c_3_q1",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "C.3: Count shapes - up to 5",
    "concept": "Count shapes - up to 5",
    "difficulty": "easy",
    "type": "mcq",
    "question": "How many yellow stars do you count: ⭐ ⭐ ⭐ ⭐?",
    "questionHindi": "आप कितने पीले तारे गिन सकते हैं: ⭐ ⭐ ⭐ ⭐?",
    "visualEmoji": "⭐ ⭐ ⭐ ⭐",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_c_3_q1_opt1",
          "text": "4 stars",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_c_3_q1_opt2",
          "text": "3 stars",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_c_3_q1_opt3",
          "text": "5 stars",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Count: 1, 2, 3, 4 shining stars!",
    "explanationHindi": "गिनें: 1, 2, 3, 4 तारे!",
    "points": 10
  },
  {
    "id": "lkg_ms_c_3_q2",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "C.3: Count shapes - up to 5",
    "concept": "Count shapes - up to 5",
    "difficulty": "easy",
    "type": "mcq",
    "question": "How many blue circles can you see: 🔵 🔵 🔵 🔵 🔵?",
    "questionHindi": "आपको कितने नीले वृत्त दिख रहे हैं: 🔵 🔵 🔵 🔵 🔵?",
    "visualEmoji": "🔵 🔵 🔵 🔵 🔵",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_c_3_q2_opt1",
          "text": "5 circles",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_c_3_q2_opt2",
          "text": "4 circles",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_c_3_q2_opt3",
          "text": "3 circles",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Count them: 1, 2, 3, 4, 5 blue circles!",
    "explanationHindi": "गिनें: 1, 2, 3, 4, 5 नीले वृत्त!",
    "points": 10
  },
  {
    "id": "lkg_ms_c_3_q3",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "C.3: Count shapes - up to 5",
    "concept": "Count shapes - up to 5",
    "difficulty": "easy",
    "type": "mcq",
    "question": "How many green triangles are here: 🔺 🔺 🔺 🔺?",
    "questionHindi": "यहाँ कितने त्रिकोण हैं: 🔺 🔺 🔺 🔺?",
    "visualEmoji": "🔺 🔺 🔺 🔺",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_c_3_q3_opt1",
          "text": "4 triangles",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_c_3_q3_opt2",
          "text": "5 triangles",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_c_3_q3_opt3",
          "text": "3 triangles",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Count: 1, 2, 3, 4 triangles!",
    "explanationHindi": "गिनें: 1, 2, 3, 4 त्रिकोण!",
    "points": 10
  },
  {
    "id": "lkg_ms_c_3_q4",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "C.3: Count shapes - up to 5",
    "concept": "Count shapes - up to 5",
    "difficulty": "medium",
    "type": "mcq",
    "question": "How many purple squares are in this row: 🟪 🟪 🟪 🟪 🟪?",
    "questionHindi": "इस पंक्ति में कितने बैंगनी वर्ग हैं: 🟪 🟪 🟪 🟪 🟪?",
    "visualEmoji": "🟪 🟪 🟪 🟪 🟪",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_c_3_q4_opt1",
          "text": "5 squares",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_c_3_q4_opt2",
          "text": "4 squares",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_c_3_q4_opt3",
          "text": "6 squares",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Count: 1, 2, 3, 4, 5 purple squares!",
    "explanationHindi": "गिनें: 1, 2, 3, 4, 5 बैंगनी वर्ग!",
    "points": 15
  },
  {
    "id": "lkg_ms_c_3_q5",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "C.3: Count shapes - up to 5",
    "concept": "Count shapes - up to 5",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which group has exactly 4 orange diamonds: 🔶?",
    "questionHindi": "किस समूह में ठीक 4 नारंगी हीरे (Diamonds) हैं?",
    "visualEmoji": "🔶 🔶 🔶 🔶",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_c_3_q5_opt1",
          "text": "Group with 4 diamonds",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_c_3_q5_opt2",
          "text": "Group with 3 diamonds",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_c_3_q5_opt3",
          "text": "Group with 5 diamonds",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Count: 1, 2, 3, 4 diamonds!",
    "explanationHindi": "गिनें: 1, 2, 3, 4 हीरे!",
    "points": 15
  },
  {
    "id": "lkg_ms_c_3_q6",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "C.3: Count shapes - up to 5",
    "concept": "Count shapes - up to 5",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which group has exactly 5 red hearts: ❤️?",
    "questionHindi": "किस समूह में ठीक 5 लाल दिल हैं?",
    "visualEmoji": "❤️ ❤️ ❤️ ❤️ ❤️",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_c_3_q6_opt1",
          "text": "Group with 5 hearts",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_c_3_q6_opt2",
          "text": "Group with 4 hearts",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_c_3_q6_opt3",
          "text": "Group with 3 hearts",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Count: 1, 2, 3, 4, 5 red hearts!",
    "explanationHindi": "गिनें: 1, 2, 3, 4, 5 दिल!",
    "points": 15
  },
  {
    "id": "lkg_ms_c_3_q7",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "C.3: Count shapes - up to 5",
    "concept": "Count shapes - up to 5",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Count ONLY the squares in this line: 🟦 🔴 🟦 🟦 🔴 🟦",
    "questionHindi": "इस पंक्ति में केवल वर्ग गिनें: 🟦 🔴 🟦 🟦 🔴 🟦",
    "visualEmoji": "🟦 🔴 🟦 🟦 🔴 🟦",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_c_3_q7_opt1",
          "text": "4 squares",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_c_3_q7_opt2",
          "text": "3 squares",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_c_3_q7_opt3",
          "text": "5 squares",
          "isCorrect": false
        }
      ]
    },
    "explanation": "There are 4 blue squares and 2 red circles!",
    "explanationHindi": "यहाँ 4 नीले वर्ग और 2 लाल वृत्त हैं!",
    "points": 15
  },
  {
    "id": "lkg_ms_c_3_q8",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "C.3: Count shapes - up to 5",
    "concept": "Count shapes - up to 5",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Count ONLY the triangles in this group: 🔺 🔺 🟩 🔺 🔺 🔺",
    "questionHindi": "इस समूह में केवल त्रिकोण गिनें: 🔺 🔺 🟩 🔺 🔺 🔺",
    "visualEmoji": "🔺 🔺 🟩 🔺 🔺 🔺",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_c_3_q8_opt1",
          "text": "5 triangles",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_c_3_q8_opt2",
          "text": "4 triangles",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_c_3_q8_opt3",
          "text": "6 triangles",
          "isCorrect": false
        }
      ]
    },
    "explanation": "There are 5 triangles and 1 green square!",
    "explanationHindi": "यहाँ 5 त्रिकोण और 1 हरा वर्ग है!",
    "points": 20
  },
  {
    "id": "lkg_ms_c_3_q9",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "C.3: Count shapes - up to 5",
    "concept": "Count shapes - up to 5",
    "difficulty": "hard",
    "type": "mcq",
    "question": "You have 3 circles 🔴 🔴 🔴. You draw 2 more 🔴 🔴. How many circles now?",
    "questionHindi": "आपके पास 3 वृत्त हैं। आप 2 और बनाते हैं। अब कितने वृत्त हैं?",
    "visualEmoji": "🔴🔴🔴 + 🔴🔴",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_c_3_q9_opt1",
          "text": "5 circles",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_c_3_q9_opt2",
          "text": "4 circles",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_c_3_q9_opt3",
          "text": "6 circles",
          "isCorrect": false
        }
      ]
    },
    "explanation": "3 + 2 = 5 circles altogether!",
    "explanationHindi": "3 + 2 = कुल 5 वृत्त!",
    "points": 20
  },
  {
    "id": "lkg_ms_c_3_q10",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "C.3: Count shapes - up to 5",
    "concept": "Count shapes - up to 5",
    "difficulty": "hard",
    "type": "mcq",
    "question": "You have 5 stars ⭐ ⭐ ⭐ ⭐ ⭐. 1 star shoots away. How many stars remain?",
    "questionHindi": "आपके पास 5 तारे हैं। 1 तारा टूट जाता है। कितने तारे बचे?",
    "visualEmoji": "⭐⭐⭐⭐⭐ - ⭐",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_c_3_q10_opt1",
          "text": "4 stars",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_c_3_q10_opt2",
          "text": "5 stars",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_c_3_q10_opt3",
          "text": "3 stars",
          "isCorrect": false
        }
      ]
    },
    "explanation": "5 - 1 = 4 stars remaining!",
    "explanationHindi": "5 - 1 = 4 तारे बचे!",
    "points": 20
  },
  // ==========================================================================
  // C.4: Count objects - up to 5 (10 Questions)
  // ==========================================================================
  {
    "id": "lkg_ms_c_4_q1",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "C.4: Count objects - up to 5",
    "concept": "Count objects - up to 5",
    "difficulty": "easy",
    "type": "mcq",
    "question": "How many little fish are swimming: 🐟 🐟 🐟 🐟?",
    "questionHindi": "कितनी छोटी मछलियां तैर रही हैं: 🐟 🐟 🐟 🐟?",
    "visualEmoji": "🐟 🐟 🐟 🐟",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_c_4_q1_opt1",
          "text": "4 fish",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_c_4_q1_opt2",
          "text": "3 fish",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_c_4_q1_opt3",
          "text": "5 fish",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Count them: 1, 2, 3, 4 fish swimming!",
    "explanationHindi": "गिनें: 1, 2, 3, 4 मछलियां!",
    "points": 10
  },
  {
    "id": "lkg_ms_c_4_q2",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "C.4: Count objects - up to 5",
    "concept": "Count objects - up to 5",
    "difficulty": "easy",
    "type": "mcq",
    "question": "How many yellow mangoes are on the tray: 🥭 🥭 🥭 🥭 🥭?",
    "questionHindi": "ट्रे में कितने पीले आम हैं: 🥭 🥭 🥭 🥭 🥭?",
    "visualEmoji": "🥭 🥭 🥭 🥭 🥭",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_c_4_q2_opt1",
          "text": "5 mangoes",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_c_4_q2_opt2",
          "text": "4 mangoes",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_c_4_q2_opt3",
          "text": "3 mangoes",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Count them: 1, 2, 3, 4, 5 sweet mangoes!",
    "explanationHindi": "गिनें: 1, 2, 3, 4, 5 मीठे आम!",
    "points": 10
  },
  {
    "id": "lkg_ms_c_4_q3",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "C.4: Count objects - up to 5",
    "concept": "Count objects - up to 5",
    "difficulty": "easy",
    "type": "mcq",
    "question": "How many colorful butterflies are in the garden: 🦋 🦋 🦋 🦋?",
    "questionHindi": "बगीचे में कितनी रंग-बिरंगी तितलियां हैं: 🦋 🦋 🦋 🦋?",
    "visualEmoji": "🦋 🦋 🦋 🦋",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_c_4_q3_opt1",
          "text": "4 butterflies",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_c_4_q3_opt2",
          "text": "5 butterflies",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_c_4_q3_opt3",
          "text": "3 butterflies",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Count: 1, 2, 3, 4 butterflies!",
    "explanationHindi": "गिनें: 1, 2, 3, 4 तितलियां!",
    "points": 10
  },
  {
    "id": "lkg_ms_c_4_q4",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "C.4: Count objects - up to 5",
    "concept": "Count objects - up to 5",
    "difficulty": "medium",
    "type": "mcq",
    "question": "How many red strawberries can you pick: 🍓 🍓 🍓 🍓 🍓?",
    "questionHindi": "आप कितनी स्ट्रॉबेरी चुन सकते हैं: 🍓 🍓 🍓 🍓 🍓?",
    "visualEmoji": "🍓 🍓 🍓 🍓 🍓",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_c_4_q4_opt1",
          "text": "5 strawberries",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_c_4_q4_opt2",
          "text": "4 strawberries",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_c_4_q4_opt3",
          "text": "6 strawberries",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Count: 1, 2, 3, 4, 5 juicy strawberries!",
    "explanationHindi": "गिनें: 1, 2, 3, 4, 5 स्ट्रॉबेरी!",
    "points": 15
  },
  {
    "id": "lkg_ms_c_4_q5",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "C.4: Count objects - up to 5",
    "concept": "Count objects - up to 5",
    "difficulty": "medium",
    "type": "mcq",
    "question": "How many cute kittens are sleeping in the basket: 🐱 🐱 🐱 🐱?",
    "questionHindi": "टोकरी में कितने प्यारे बिल्ली के बच्चे सो रहे हैं: 🐱 🐱 🐱 🐱?",
    "visualEmoji": "🐱 🐱 🐱 🐱",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_c_4_q5_opt1",
          "text": "4 kittens",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_c_4_q5_opt2",
          "text": "3 kittens",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_c_4_q5_opt3",
          "text": "5 kittens",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Count: 1, 2, 3, 4 sleeping kittens!",
    "explanationHindi": "गिनें: 1, 2, 3, 4 बिल्ली के बच्चे!",
    "points": 15
  },
  {
    "id": "lkg_ms_c_4_q6",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "C.4: Count objects - up to 5",
    "concept": "Count objects - up to 5",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which tree has exactly 5 ripe red apples: 🍎?",
    "questionHindi": "किस पेड़ पर ठीक 5 पके लाल सेब हैं?",
    "visualEmoji": "🍎 🍎 🍎 🍎 🍎",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_c_4_q6_opt1",
          "text": "Tree with 5 apples",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_c_4_q6_opt2",
          "text": "Tree with 4 apples",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_c_4_q6_opt3",
          "text": "Tree with 3 apples",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Count: 1, 2, 3, 4, 5 apples on the tree!",
    "explanationHindi": "पेड़ पर 5 सेब हैं!",
    "points": 15
  },
  {
    "id": "lkg_ms_c_4_q7",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "C.4: Count objects - up to 5",
    "concept": "Count objects - up to 5",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which pond has exactly 4 green frogs: 🐸?",
    "questionHindi": "किस तालाब में ठीक 4 हरे मेंढक हैं: 🐸?",
    "visualEmoji": "🐸 🐸 🐸 🐸",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_c_4_q7_opt1",
          "text": "Pond with 4 frogs",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_c_4_q7_opt2",
          "text": "Pond with 5 frogs",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_c_4_q7_opt3",
          "text": "Pond with 3 frogs",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Count: 1, 2, 3, 4 hopping frogs!",
    "explanationHindi": "गिनें: 1, 2, 3, 4 मेंढक!",
    "points": 15
  },
  {
    "id": "lkg_ms_c_4_q8",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "C.4: Count objects - up to 5",
    "concept": "Count objects - up to 5",
    "difficulty": "hard",
    "type": "mcq",
    "question": "A box has 3 toy cars 🚗 🚗 🚗. You put in 2 more cars 🚗 🚗. How many cars in total?",
    "questionHindi": "डिब्बे में 3 कारें हैं। आप 2 और कारें रखते हैं। कुल कितनी कारें हैं?",
    "visualEmoji": "🚗🚗🚗 + 🚗🚗",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_c_4_q8_opt1",
          "text": "5 toy cars",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_c_4_q8_opt2",
          "text": "4 toy cars",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_c_4_q8_opt3",
          "text": "6 toy cars",
          "isCorrect": false
        }
      ]
    },
    "explanation": "3 + 2 = 5 toy cars in all!",
    "explanationHindi": "3 + 2 = कुल 5 कारें!",
    "points": 20
  },
  {
    "id": "lkg_ms_c_4_q9",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "C.4: Count objects - up to 5",
    "concept": "Count objects - up to 5",
    "difficulty": "hard",
    "type": "mcq",
    "question": "There are 5 birds on a wire 🐦 🐦 🐦 🐦 🐦. 1 flies away. How many remain?",
    "questionHindi": "तार पर 5 पक्षी बैठे हैं। 1 उड़ जाता है। कितने पक्षी बचे?",
    "visualEmoji": "🐦🐦🐦🐦🐦 - 🐦",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_c_4_q9_opt1",
          "text": "4 birds",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_c_4_q9_opt2",
          "text": "5 birds",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_c_4_q9_opt3",
          "text": "3 birds",
          "isCorrect": false
        }
      ]
    },
    "explanation": "5 - 1 = 4 birds sitting on the wire!",
    "explanationHindi": "5 - 1 = 4 पक्षी बचे!",
    "points": 20
  },
  {
    "id": "lkg_ms_c_4_q10",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "C.4: Count objects - up to 5",
    "concept": "Count objects - up to 5",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Maya has 2 pink flowers 🌸 🌸. Her friend gives her 2 more 🌸 🌸. How many flowers now?",
    "questionHindi": "माया के पास 2 फूल हैं। उसकी सहेली 2 और देती है। अब कितने फूल हैं?",
    "visualEmoji": "🌸🌸 + 🌸🌸",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_c_4_q10_opt1",
          "text": "4 flowers",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_c_4_q10_opt2",
          "text": "5 flowers",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_c_4_q10_opt3",
          "text": "3 flowers",
          "isCorrect": false
        }
      ]
    },
    "explanation": "2 + 2 = 4 flowers in Maya's bouquet!",
    "explanationHindi": "2 + 2 = कुल 4 फूल!",
    "points": 20
  },
  // ==========================================================================
  // C.5: Count on ten frames - up to 5 (10 Questions)
  // ==========================================================================
  {
    "id": "lkg_ms_c_5_q1",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "C.5: Count on ten frames - up to 5",
    "concept": "Count on ten frames - up to 5",
    "difficulty": "easy",
    "type": "mcq",
    "question": "How many dots are in this five frame: [ ⚫ ⚫ ⚫ ⚫ | ⬜ ]?",
    "questionHindi": "इस फ्रेम में कितने बिंदु हैं: [ ⚫ ⚫ ⚫ ⚫ | ⬜ ]?",
    "visualEmoji": "[⚫⚫⚫⚫|⬜]",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_c_5_q1_opt1",
          "text": "4 dots",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_c_5_q1_opt2",
          "text": "3 dots",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_c_5_q1_opt3",
          "text": "5 dots",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Count the filled boxes: 1, 2, 3, 4 dots!",
    "explanationHindi": "भरे हुए बॉक्स गिनें: 1, 2, 3, 4 बिंदु!",
    "points": 10
  },
  {
    "id": "lkg_ms_c_5_q2",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "C.5: Count on ten frames - up to 5",
    "concept": "Count on ten frames - up to 5",
    "difficulty": "easy",
    "type": "mcq",
    "question": "How many dots are in this full top row: [ ⚫ ⚫ ⚫ ⚫ ⚫ ]?",
    "questionHindi": "इस पूरी भरी हुई पंक्ति में कितने बिंदु हैं: [ ⚫ ⚫ ⚫ ⚫ ⚫ ]?",
    "visualEmoji": "[⚫⚫⚫⚫⚫]",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_c_5_q2_opt1",
          "text": "5 dots",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_c_5_q2_opt2",
          "text": "4 dots",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_c_5_q2_opt3",
          "text": "6 dots",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A completely filled five-row has 5 dots!",
    "explanationHindi": "पूरी भरी हुई 5-पंक्ति में 5 बिंदु होते हैं!",
    "points": 10
  },
  {
    "id": "lkg_ms_c_5_q3",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "C.5: Count on ten frames - up to 5",
    "concept": "Count on ten frames - up to 5",
    "difficulty": "easy",
    "type": "mcq",
    "question": "How many dots are in this frame: [ 🔴 🔴 🔴 🔴 | ⬜ ]?",
    "questionHindi": "इस फ्रेम में कितने बिंदु हैं: [ 🔴 🔴 🔴 🔴 | ⬜ ]?",
    "visualEmoji": "[🔴🔴🔴🔴|⬜]",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_c_5_q3_opt1",
          "text": "4 counters",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_c_5_q3_opt2",
          "text": "5 counters",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_c_5_q3_opt3",
          "text": "3 counters",
          "isCorrect": false
        }
      ]
    },
    "explanation": "There are 4 red counters inside!",
    "explanationHindi": "अंदर 4 लाल काउंटर हैं!",
    "points": 10
  },
  {
    "id": "lkg_ms_c_5_q4",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "C.5: Count on ten frames - up to 5",
    "concept": "Count on ten frames - up to 5",
    "difficulty": "medium",
    "type": "mcq",
    "question": "How many dots are in this frame: [ 🔵 🔵 🔵 🔵 🔵 ]?",
    "questionHindi": "इस फ्रेम में कितने बिंदु हैं: [ 🔵 🔵 🔵 🔵 🔵 ]?",
    "visualEmoji": "[🔵🔵🔵🔵🔵]",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_c_5_q4_opt1",
          "text": "5 counters",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_c_5_q4_opt2",
          "text": "4 counters",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_c_5_q4_opt3",
          "text": "3 counters",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Count: 1, 2, 3, 4, 5 blue counters!",
    "explanationHindi": "गिनें: 1, 2, 3, 4, 5 नीले काउंटर!",
    "points": 15
  },
  {
    "id": "lkg_ms_c_5_q5",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "C.5: Count on ten frames - up to 5",
    "concept": "Count on ten frames - up to 5",
    "difficulty": "medium",
    "type": "mcq",
    "question": "How many empty boxes are in this frame: [ ⚫ ⚫ ⚫ ⚫ | ⬜ ]?",
    "questionHindi": "इस फ्रेम में कितने खाली बॉक्स हैं: [ ⚫ ⚫ ⚫ ⚫ | ⬜ ]?",
    "visualEmoji": "[⚫⚫⚫⚫|⬜]",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_c_5_q5_opt1",
          "text": "1 empty box",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_c_5_q5_opt2",
          "text": "2 empty boxes",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_c_5_q5_opt3",
          "text": "0 empty boxes",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Only 1 box is empty at the end!",
    "explanationHindi": "अंत में केवल 1 बॉक्स खाली है!",
    "points": 15
  },
  {
    "id": "lkg_ms_c_5_q6",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "C.5: Count on ten frames - up to 5",
    "concept": "Count on ten frames - up to 5",
    "difficulty": "medium",
    "type": "mcq",
    "question": "How many empty boxes in a completely full five-row: [ ⚫ ⚫ ⚫ ⚫ ⚫ ]?",
    "questionHindi": "पूरी भरी हुई 5-पंक्ति में कितने खाली बॉक्स हैं: [ ⚫ ⚫ ⚫ ⚫ ⚫ ]?",
    "visualEmoji": "[⚫⚫⚫⚫⚫]",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_c_5_q6_opt1",
          "text": "0 empty boxes (completely full)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_c_5_q6_opt2",
          "text": "1 empty box",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_c_5_q6_opt3",
          "text": "5 empty boxes",
          "isCorrect": false
        }
      ]
    },
    "explanation": "All 5 boxes are filled, so 0 boxes are empty!",
    "explanationHindi": "सभी 5 बॉक्स भरे हैं, अतः 0 खाली हैं!",
    "points": 15
  },
  {
    "id": "lkg_ms_c_5_q7",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "C.5: Count on ten frames - up to 5",
    "concept": "Count on ten frames - up to 5",
    "difficulty": "medium",
    "type": "mcq",
    "question": "If you have [ ⚫ ⚫ ⚫ | ⬜ ⬜ ] and add 1 more dot, how many dots will there be?",
    "questionHindi": "यदि आपके पास [ ⚫ ⚫ ⚫ | ⬜ ⬜ ] है और 1 बिंदु जोड़ें, तो कितने होंगे?",
    "visualEmoji": "[⚫⚫⚫|⬜⬜] + ⚫",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_c_5_q7_opt1",
          "text": "4 dots",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_c_5_q7_opt2",
          "text": "5 dots",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_c_5_q7_opt3",
          "text": "3 dots",
          "isCorrect": false
        }
      ]
    },
    "explanation": "3 dots + 1 more dot = 4 dots!",
    "explanationHindi": "3 बिंदु + 1 और बिंदु = 4 बिंदु!",
    "points": 15
  },
  {
    "id": "lkg_ms_c_5_q8",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "C.5: Count on ten frames - up to 5",
    "concept": "Count on ten frames - up to 5",
    "difficulty": "hard",
    "type": "mcq",
    "question": "If you have [ ⚫ ⚫ ⚫ ⚫ | ⬜ ] and fill the last box, how many dots will there be?",
    "questionHindi": "यदि आपके पास [ ⚫ ⚫ ⚫ ⚫ | ⬜ ] है और आखिरी बॉक्स भर दें, तो कितने होंगे?",
    "visualEmoji": "[⚫⚫⚫⚫|⬜] + ⚫",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_c_5_q8_opt1",
          "text": "5 dots",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_c_5_q8_opt2",
          "text": "4 dots",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_c_5_q8_opt3",
          "text": "6 dots",
          "isCorrect": false
        }
      ]
    },
    "explanation": "4 dots + 1 more dot = 5 dots (full row)!",
    "explanationHindi": "4 बिंदु + 1 और बिंदु = 5 बिंदु (पूरी पंक्ति)!",
    "points": 20
  },
  {
    "id": "lkg_ms_c_5_q9",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "C.5: Count on ten frames - up to 5",
    "concept": "Count on ten frames - up to 5",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Which frame has MORE dots: Frame A [ ⚫ ⚫ ⚫ ⚫ ] or Frame B [ ⚫ ⚫ ⚫ ]?",
    "questionHindi": "किसमें अधिक बिंदु हैं: फ्रेम A [ ⚫ ⚫ ⚫ ⚫ ] या फ्रेम B [ ⚫ ⚫ ⚫ ]?",
    "visualEmoji": "A: [⚫⚫⚫⚫] vs B: [⚫⚫⚫]",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_c_5_q9_opt1",
          "text": "Frame A (4 dots)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_c_5_q9_opt2",
          "text": "Frame B (3 dots)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_c_5_q9_opt3",
          "text": "Both are equal",
          "isCorrect": false
        }
      ]
    },
    "explanation": "4 dots is more than 3 dots!",
    "explanationHindi": "4 बिंदु, 3 बिंदुओं से अधिक होते हैं!",
    "points": 20
  },
  {
    "id": "lkg_ms_c_5_q10",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "C.5: Count on ten frames - up to 5",
    "concept": "Count on ten frames - up to 5",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Which frame has the MOST dots (maximum 5)?",
    "questionHindi": "किस फ्रेम में सबसे अधिक बिंदु हैं (अधिकतम 5)?",
    "visualEmoji": "Frames A, B, C",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_c_5_q10_opt1",
          "text": "[ ⚫ ⚫ ⚫ ⚫ ⚫ ] (5 dots)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_c_5_q10_opt2",
          "text": "[ ⚫ ⚫ ⚫ ⚫ ⬜ ] (4 dots)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_c_5_q10_opt3",
          "text": "[ ⚫ ⚫ ⚫ ⬜ ⬜ ] (3 dots)",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The completely filled frame with 5 dots has the most!",
    "explanationHindi": "5 बिंदुओं वाला भरा हुआ फ्रेम सबसे अधिक है!",
    "points": 20
  },
  // ==========================================================================
  // C.6: Show numbers on ten frames - up to 5 (10 Questions)
  // ==========================================================================
  {
    "id": "lkg_ms_c_6_q1",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "C.6: Show numbers on ten frames - up to 5",
    "concept": "Show numbers on ten frames - up to 5",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which ten frame shows the number 4?",
    "questionHindi": "कौन सा टेन फ्रेम संख्या 4 को दर्शाता है?",
    "visualEmoji": "4️⃣",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_c_6_q1_opt1",
          "text": "[ ⚫ ⚫ ⚫ ⚫ ⬜ ]",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_c_6_q1_opt2",
          "text": "[ ⚫ ⚫ ⚫ ⬜ ⬜ ]",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_c_6_q1_opt3",
          "text": "[ ⚫ ⚫ ⚫ ⚫ ⚫ ]",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The frame with 4 dots filled represents the number 4!",
    "explanationHindi": "4 बिंदुओं से भरा फ्रेम संख्या 4 को दर्शाता है!",
    "points": 10
  },
  {
    "id": "lkg_ms_c_6_q2",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "C.6: Show numbers on ten frames - up to 5",
    "concept": "Show numbers on ten frames - up to 5",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which ten frame shows the number 5?",
    "questionHindi": "कौन सा टेन फ्रेम संख्या 5 को दर्शाता है?",
    "visualEmoji": "5️⃣",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_c_6_q2_opt1",
          "text": "[ ⚫ ⚫ ⚫ ⚫ ⚫ ]",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_c_6_q2_opt2",
          "text": "[ ⚫ ⚫ ⚫ ⚫ ⬜ ]",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_c_6_q2_opt3",
          "text": "[ ⚫ ⚫ ⚫ ⬜ ⬜ ]",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The completely filled row of 5 dots shows the number 5!",
    "explanationHindi": "5 बिंदुओं वाली पूरी भरी पंक्ति संख्या 5 को दर्शाती है!",
    "points": 10
  },
  {
    "id": "lkg_ms_c_6_q3",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "C.6: Show numbers on ten frames - up to 5",
    "concept": "Show numbers on ten frames - up to 5",
    "difficulty": "easy",
    "type": "mcq",
    "question": "How many dots do you place to show the number 4?",
    "questionHindi": "संख्या 4 दिखाने के लिए आप कितने बिंदु रखेंगे?",
    "visualEmoji": "4️⃣",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_c_6_q3_opt1",
          "text": "4 dots",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_c_6_q3_opt2",
          "text": "3 dots",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_c_6_q3_opt3",
          "text": "5 dots",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Place 4 dots in the frame to show 4!",
    "explanationHindi": "संख्या 4 के लिए फ्रेम में 4 बिंदु रखें!",
    "points": 10
  },
  {
    "id": "lkg_ms_c_6_q4",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "C.6: Show numbers on ten frames - up to 5",
    "concept": "Show numbers on ten frames - up to 5",
    "difficulty": "medium",
    "type": "mcq",
    "question": "How many dots do you place to show the number 5?",
    "questionHindi": "संख्या 5 दिखाने के लिए आप कितने बिंदु रखेंगे?",
    "visualEmoji": "5️⃣",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_c_6_q4_opt1",
          "text": "5 dots",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_c_6_q4_opt2",
          "text": "4 dots",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_c_6_q4_opt3",
          "text": "6 dots",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Place 5 dots in the frame to show 5!",
    "explanationHindi": "संख्या 5 के लिए 5 बिंदु रखें!",
    "points": 15
  },
  {
    "id": "lkg_ms_c_6_q5",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "C.6: Show numbers on ten frames - up to 5",
    "concept": "Show numbers on ten frames - up to 5",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Match all 5 fingers of an open hand 🖐️ to the correct frame:",
    "questionHindi": "खुले हाथ की सभी 5 उंगलियों 🖐️ को सही फ्रेम से मिलाएं:",
    "visualEmoji": "🖐️",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_c_6_q5_opt1",
          "text": "[ ⚫ ⚫ ⚫ ⚫ ⚫ ]",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_c_6_q5_opt2",
          "text": "[ ⚫ ⚫ ⚫ ⚫ ⬜ ]",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_c_6_q5_opt3",
          "text": "[ ⚫ ⚫ ⚫ ⬜ ⬜ ]",
          "isCorrect": false
        }
      ]
    },
    "explanation": "5 fingers match the frame with 5 dots!",
    "explanationHindi": "5 उंगलियां 5 बिंदुओं वाले फ्रेम से मेल खाती हैं!",
    "points": 15
  },
  {
    "id": "lkg_ms_c_6_q6",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "C.6: Show numbers on ten frames - up to 5",
    "concept": "Show numbers on ten frames - up to 5",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Match 4 legs of a dog 🐕 to the ten frame:",
    "questionHindi": "कुत्ते के 4 पैरों 🐕 को टेन फ्रेम से मिलाएं:",
    "visualEmoji": "🐕",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_c_6_q6_opt1",
          "text": "[ ⚫ ⚫ ⚫ ⚫ ⬜ ]",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_c_6_q6_opt2",
          "text": "[ ⚫ ⚫ ⚫ ⬜ ⬜ ]",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_c_6_q6_opt3",
          "text": "[ ⚫ ⚫ ⚫ ⚫ ⚫ ]",
          "isCorrect": false
        }
      ]
    },
    "explanation": "4 legs match the frame with 4 dots!",
    "explanationHindi": "4 पैर 4 बिंदुओं वाले फ्रेम से मेल खाते हैं!",
    "points": 15
  },
  {
    "id": "lkg_ms_c_6_q7",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "C.6: Show numbers on ten frames - up to 5",
    "concept": "Show numbers on ten frames - up to 5",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Match the word 'FOUR' to the ten frame:",
    "questionHindi": "शब्द 'FOUR (चार)' को टेन फ्रेम से मिलाएं:",
    "visualEmoji": "FOUR",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_c_6_q7_opt1",
          "text": "[ ⚫ ⚫ ⚫ ⚫ ⬜ ]",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_c_6_q7_opt2",
          "text": "[ ⚫ ⚫ ⬜ ⬜ ⬜ ]",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_c_6_q7_opt3",
          "text": "[ ⚫ ⚫ ⚫ ⚫ ⚫ ]",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The word FOUR matches 4 dots in the frame!",
    "explanationHindi": "शब्द FOUR फ्रेम में 4 बिंदुओं से मेल खाता है!",
    "points": 15
  },
  {
    "id": "lkg_ms_c_6_q8",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "C.6: Show numbers on ten frames - up to 5",
    "concept": "Show numbers on ten frames - up to 5",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Match the word 'FIVE' to the ten frame:",
    "questionHindi": "शब्द 'FIVE (पाँच)' को टेन फ्रेम से मिलाएं:",
    "visualEmoji": "FIVE",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_c_6_q8_opt1",
          "text": "[ ⚫ ⚫ ⚫ ⚫ ⚫ ]",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_c_6_q8_opt2",
          "text": "[ ⚫ ⚫ ⚫ ⚫ ⬜ ]",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_c_6_q8_opt3",
          "text": "[ ⚫ ⚫ ⚫ ⬜ ⬜ ]",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The word FIVE matches all 5 dots filled!",
    "explanationHindi": "शब्द FIVE सभी 5 बिंदुओं से मेल खाता है!",
    "points": 20
  },
  {
    "id": "lkg_ms_c_6_q9",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "C.6: Show numbers on ten frames - up to 5",
    "concept": "Show numbers on ten frames - up to 5",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Which frame has 1 dot MORE than [ ⚫ ⚫ ⚫ ⬜ ⬜ ]?",
    "questionHindi": "किस फ्रेम में [ ⚫ ⚫ ⚫ ⬜ ⬜ ] से 1 बिंदु अधिक है?",
    "visualEmoji": "[⚫⚫⚫⬜⬜] + 1",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_c_6_q9_opt1",
          "text": "[ ⚫ ⚫ ⚫ ⚫ ⬜ ] (4 dots)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_c_6_q9_opt2",
          "text": "[ ⚫ ⚫ ⚫ ⚫ ⚫ ] (5 dots)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_c_6_q9_opt3",
          "text": "[ ⚫ ⚫ ⬜ ⬜ ⬜ ] (2 dots)",
          "isCorrect": false
        }
      ]
    },
    "explanation": "3 dots + 1 more = 4 dots [ ⚫ ⚫ ⚫ ⚫ ⬜ ]!",
    "explanationHindi": "3 बिंदु + 1 अधिक = 4 बिंदु!",
    "points": 20
  },
  {
    "id": "lkg_ms_c_6_q10",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "C.6: Show numbers on ten frames - up to 5",
    "concept": "Show numbers on ten frames - up to 5",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Which frame has 1 dot LESS than [ ⚫ ⚫ ⚫ ⚫ ⚫ ]?",
    "questionHindi": "किस फ्रेम में [ ⚫ ⚫ ⚫ ⚫ ⚫ ] से 1 बिंदु कम है?",
    "visualEmoji": "[⚫⚫⚫⚫⚫] - 1",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_c_6_q10_opt1",
          "text": "[ ⚫ ⚫ ⚫ ⚫ ⬜ ] (4 dots)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_c_6_q10_opt2",
          "text": "[ ⚫ ⚫ ⚫ ⬜ ⬜ ] (3 dots)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_c_6_q10_opt3",
          "text": "[ ⚫ ⚫ ⬜ ⬜ ⬜ ] (2 dots)",
          "isCorrect": false
        }
      ]
    },
    "explanation": "5 dots - 1 less = 4 dots [ ⚫ ⚫ ⚫ ⚫ ⬜ ]!",
    "explanationHindi": "5 बिंदु - 1 कम = 4 बिंदु!",
    "points": 20
  },
  // ==========================================================================
  // C.7: Represent numbers - up to 5 (10 Questions)
  // ==========================================================================
  {
    "id": "lkg_ms_c_7_q1",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "C.7: Represent numbers - up to 5",
    "concept": "Represent numbers - up to 5",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which group represents the number 4?",
    "questionHindi": "कौन सा समूह संख्या 4 को दर्शाता है?",
    "visualEmoji": "4️⃣",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_c_7_q1_opt1",
          "text": "🍎 🍎 🍎 🍎 (Four apples)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_c_7_q1_opt2",
          "text": "🍎 🍎 🍎 (Three apples)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_c_7_q1_opt3",
          "text": "🍎 🍎 🍎 🍎 🍎 (Five apples)",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Count them: 1, 2, 3, 4 apples represent the number 4!",
    "explanationHindi": "गिनें: 1, 2, 3, 4 सेब संख्या 4 को दर्शाते हैं!",
    "points": 10
  },
  {
    "id": "lkg_ms_c_7_q2",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "C.7: Represent numbers - up to 5",
    "concept": "Represent numbers - up to 5",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which group represents the number 5?",
    "questionHindi": "कौन सा समूह संख्या 5 को दर्शाता है?",
    "visualEmoji": "5️⃣",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_c_7_q2_opt1",
          "text": "⭐ ⭐ ⭐ ⭐ ⭐ (Five stars)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_c_7_q2_opt2",
          "text": "⭐ ⭐ ⭐ ⭐ (Four stars)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_c_7_q2_opt3",
          "text": "⭐ ⭐ ⭐ (Three stars)",
          "isCorrect": false
        }
      ]
    },
    "explanation": "5 stars represent the numeral 5!",
    "explanationHindi": "5 तारे अंक 5 को दर्शाते हैं!",
    "points": 10
  },
  {
    "id": "lkg_ms_c_7_q3",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "C.7: Represent numbers - up to 5",
    "concept": "Represent numbers - up to 5",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Look at the cars: 🚗 🚗 🚗 🚗. Which numeral represents this set?",
    "questionHindi": "कारों को देखें: 🚗 🚗 🚗 🚗। कौन सा अंक इस सेट को दर्शाता है?",
    "visualEmoji": "🚗 🚗 🚗 🚗",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_c_7_q3_opt1",
          "text": "4",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_c_7_q3_opt2",
          "text": "3",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_c_7_q3_opt3",
          "text": "5",
          "isCorrect": false
        }
      ]
    },
    "explanation": "4 cars are represented by the numeral 4!",
    "explanationHindi": "4 कारें अंक 4 द्वारा दर्शाई जाती हैं!",
    "points": 10
  },
  {
    "id": "lkg_ms_c_7_q4",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "C.7: Represent numbers - up to 5",
    "concept": "Represent numbers - up to 5",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at the balloons: 🎈 🎈 🎈 🎈 🎈. Which numeral represents this set?",
    "questionHindi": "गुब्बारों को देखें: 🎈 🎈 🎈 🎈 🎈। कौन सा अंक इस सेट को दर्शाता है?",
    "visualEmoji": "🎈 🎈 🎈 🎈 🎈",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_c_7_q4_opt1",
          "text": "5",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_c_7_q4_opt2",
          "text": "4",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_c_7_q4_opt3",
          "text": "3",
          "isCorrect": false
        }
      ]
    },
    "explanation": "5 balloons are represented by the numeral 5!",
    "explanationHindi": "5 गुब्बारे अंक 5 द्वारा दर्शाए जाते हैं!",
    "points": 15
  },
  {
    "id": "lkg_ms_c_7_q5",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "C.7: Represent numbers - up to 5",
    "concept": "Represent numbers - up to 5",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which tally marks represent the number 4?",
    "questionHindi": "कौन से टैली चिन्ह संख्या 4 को दर्शाते हैं?",
    "visualEmoji": "| | | |",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_c_7_q5_opt1",
          "text": "| | | | (Four vertical marks)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_c_7_q5_opt2",
          "text": "| | | (Three marks)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_c_7_q5_opt3",
          "text": "卌 (Five marks)",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Four vertical strokes | | | | represent 4!",
    "explanationHindi": "चार सीधी रेखाएं | | | | संख्या 4 को दर्शाती हैं!",
    "points": 15
  },
  {
    "id": "lkg_ms_c_7_q6",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "C.7: Represent numbers - up to 5",
    "concept": "Represent numbers - up to 5",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which tally marks represent the number 5 with a diagonal cross?",
    "questionHindi": "कौन से टैली चिन्ह संख्या 5 को तिरछी रेखा के साथ दर्शाते हैं?",
    "visualEmoji": "卌",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_c_7_q6_opt1",
          "text": "卌 (Four lines bundled with a cross)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_c_7_q6_opt2",
          "text": "| | | | (Four lines)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_c_7_q6_opt3",
          "text": "| | | (Three lines)",
          "isCorrect": false
        }
      ]
    },
    "explanation": "In tally marks, 5 is shown as a bundle of 4 with a cross!",
    "explanationHindi": "टैली चिन्हों में 5 को 4 रेखाओं पर 1 तिरछी रेखा काटकर दर्शाया जाता है!",
    "points": 15
  },
  {
    "id": "lkg_ms_c_7_q7",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "C.7: Represent numbers - up to 5",
    "concept": "Represent numbers - up to 5",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which hand gesture represents the number 4?",
    "questionHindi": "हाथ का कौन सा इशारा संख्या 4 को दर्शाता है?",
    "visualEmoji": "4️⃣",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_c_7_q7_opt1",
          "text": "4 fingers held up",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_c_7_q7_opt2",
          "text": "3 fingers held up",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_c_7_q7_opt3",
          "text": "5 fingers (whole hand)",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Holding up 4 fingers represents the number 4!",
    "explanationHindi": "4 उंगलियां ऊपर करना संख्या 4 को दर्शाता है!",
    "points": 15
  },
  {
    "id": "lkg_ms_c_7_q8",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "C.7: Represent numbers - up to 5",
    "concept": "Represent numbers - up to 5",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Which hand gesture represents the number 5?",
    "questionHindi": "हाथ का कौन सा इशारा संख्या 5 को दर्शाता है?",
    "visualEmoji": "5️⃣",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_c_7_q8_opt1",
          "text": "🖐️ All 5 fingers open",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_c_7_q8_opt2",
          "text": "4 fingers open",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_c_7_q8_opt3",
          "text": "3 fingers open",
          "isCorrect": false
        }
      ]
    },
    "explanation": "An open hand 🖐️ has all 5 fingers showing!",
    "explanationHindi": "पूरा खुला हाथ 🖐️ 5 उंगलियां दिखाता है!",
    "points": 20
  },
  {
    "id": "lkg_ms_c_7_q9",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "C.7: Represent numbers - up to 5",
    "concept": "Represent numbers - up to 5",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Match the numeral 4 to the picture with the exact same count:",
    "questionHindi": "अंक 4 को उसी संख्या वाले चित्र से मिलाएं:",
    "visualEmoji": "4️⃣",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_c_7_q9_opt1",
          "text": "🌸 🌸 🌸 🌸 (Four flowers)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_c_7_q9_opt2",
          "text": "🌸 🌸 🌸 (Three flowers)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_c_7_q9_opt3",
          "text": "🌸 🌸 (Two flowers)",
          "isCorrect": false
        }
      ]
    },
    "explanation": "4 matches 4 flowers!",
    "explanationHindi": "4 चार फूलों से मेल खाता है!",
    "points": 20
  },
  {
    "id": "lkg_ms_c_7_q10",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "C.7: Represent numbers - up to 5",
    "concept": "Represent numbers - up to 5",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Match the numeral 5 to the picture with the exact same count:",
    "questionHindi": "अंक 5 को उसी संख्या वाले चित्र से मिलाएं:",
    "visualEmoji": "5️⃣",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_c_7_q10_opt1",
          "text": "🍬 🍬 🍬 🍬 🍬 (Five candies)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_c_7_q10_opt2",
          "text": "🍬 🍬 🍬 🍬 (Four candies)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_c_7_q10_opt3",
          "text": "🍬 🍬 🍬 (Three candies)",
          "isCorrect": false
        }
      ]
    },
    "explanation": "5 matches 5 sweet candies!",
    "explanationHindi": "5 पाँच टॉफियों से मेल खाता है!",
    "points": 20
  },
  // ==========================================================================
  // D.1: Identify numbers - up to 10 (10 Questions)
  // ==========================================================================
  {
    "id": "lkg_ms_d_1_q1",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "D.1: Identify numbers - up to 10",
    "concept": "Identify numbers - up to 10",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which number is this numeral: 6?",
    "questionHindi": "यह कौन सा अंक है: 6?",
    "visualEmoji": "6️⃣",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_d_1_q1_opt1",
          "text": "Six (6)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_d_1_q1_opt2",
          "text": "Seven (7)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_d_1_q1_opt3",
          "text": "Five (5)",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The numeral 6 represents six items!",
    "explanationHindi": "अंक 6 छह वस्तुओं को दर्शाता है!",
    "points": 10
  },
  {
    "id": "lkg_ms_d_1_q2",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "D.1: Identify numbers - up to 10",
    "concept": "Identify numbers - up to 10",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which number is this numeral: 7?",
    "questionHindi": "यह कौन सा अंक है: 7?",
    "visualEmoji": "7️⃣",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_d_1_q2_opt1",
          "text": "Seven (7)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_d_1_q2_opt2",
          "text": "Six (6)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_d_1_q2_opt3",
          "text": "Eight (8)",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The numeral 7 represents seven items!",
    "explanationHindi": "अंक 7 सात वस्तुओं को दर्शाता है!",
    "points": 10
  },
  {
    "id": "lkg_ms_d_1_q3",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "D.1: Identify numbers - up to 10",
    "concept": "Identify numbers - up to 10",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which number is this numeral: 8?",
    "questionHindi": "यह कौन सा अंक है: 8?",
    "visualEmoji": "8️⃣",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_d_1_q3_opt1",
          "text": "Eight (8)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_d_1_q3_opt2",
          "text": "Nine (9)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_d_1_q3_opt3",
          "text": "Seven (7)",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The numeral 8 looks like two circles stacked together!",
    "explanationHindi": "अंक 8 आठ को दर्शाता है!",
    "points": 10
  },
  {
    "id": "lkg_ms_d_1_q4",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "D.1: Identify numbers - up to 10",
    "concept": "Identify numbers - up to 10",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which number is this numeral: 9?",
    "questionHindi": "यह कौन सा अंक है: 9?",
    "visualEmoji": "9️⃣",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_d_1_q4_opt1",
          "text": "Nine (9)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_d_1_q4_opt2",
          "text": "Six (6)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_d_1_q4_opt3",
          "text": "Eight (8)",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The numeral 9 represents nine objects!",
    "explanationHindi": "अंक 9 नौ को दर्शाता है!",
    "points": 15
  },
  {
    "id": "lkg_ms_d_1_q5",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "D.1: Identify numbers - up to 10",
    "concept": "Identify numbers - up to 10",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which number is made of 1 and 0 together: 10?",
    "questionHindi": "1 और 0 से मिलकर कौन सी संख्या बनती है: 10?",
    "visualEmoji": "🔟",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_d_1_q5_opt1",
          "text": "Ten (10)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_d_1_q5_opt2",
          "text": "One (1)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_d_1_q5_opt3",
          "text": "Zero (0)",
          "isCorrect": false
        }
      ]
    },
    "explanation": "1 followed by 0 makes the number 10!",
    "explanationHindi": "1 के बाद 0 लगाने से 10 बनता है!",
    "points": 15
  },
  {
    "id": "lkg_ms_d_1_q6",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "D.1: Identify numbers - up to 10",
    "concept": "Identify numbers - up to 10",
    "difficulty": "medium",
    "type": "mcq",
    "question": "How many fingers do you have on BOTH hands together: 🖐️ 🖐️?",
    "questionHindi": "दोनों हाथों को मिलाकर कुल कितनी उंगलियां होती हैं: 🖐️ 🖐️?",
    "visualEmoji": "🖐️ 🖐️",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_d_1_q6_opt1",
          "text": "10 fingers",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_d_1_q6_opt2",
          "text": "8 fingers",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_d_1_q6_opt3",
          "text": "5 fingers",
          "isCorrect": false
        }
      ]
    },
    "explanation": "5 on the left + 5 on the right = 10 fingers in all!",
    "explanationHindi": "5 बाएं + 5 दाएं = कुल 10 उंगलियां!",
    "points": 15
  },
  {
    "id": "lkg_ms_d_1_q7",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "D.1: Identify numbers - up to 10",
    "concept": "Identify numbers - up to 10",
    "difficulty": "medium",
    "type": "mcq",
    "question": "What number comes right after 6 when counting: 5, 6, ❓?",
    "questionHindi": "गिनती में 6 के बाद कौन सी संख्या आती है: 5, 6, ❓?",
    "visualEmoji": "5, 6, ❓",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_d_1_q7_opt1",
          "text": "7",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_d_1_q7_opt2",
          "text": "8",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_d_1_q7_opt3",
          "text": "5",
          "isCorrect": false
        }
      ]
    },
    "explanation": "After 6 comes 7! 5, 6, 7, 8.",
    "explanationHindi": "6 के बाद 7 आता है!",
    "points": 15
  },
  {
    "id": "lkg_ms_d_1_q8",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "D.1: Identify numbers - up to 10",
    "concept": "Identify numbers - up to 10",
    "difficulty": "hard",
    "type": "mcq",
    "question": "What number comes right after 8 when counting: 7, 8, ❓?",
    "questionHindi": "गिनती में 8 के बाद क्या आता है: 7, 8, ❓?",
    "visualEmoji": "7, 8, ❓",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_d_1_q8_opt1",
          "text": "9",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_d_1_q8_opt2",
          "text": "10",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_d_1_q8_opt3",
          "text": "6",
          "isCorrect": false
        }
      ]
    },
    "explanation": "After 8 comes 9! 7, 8, 9, 10.",
    "explanationHindi": "8 के बाद 9 आता है!",
    "points": 20
  },
  {
    "id": "lkg_ms_d_1_q9",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "D.1: Identify numbers - up to 10",
    "concept": "Identify numbers - up to 10",
    "difficulty": "hard",
    "type": "mcq",
    "question": "What number comes right after 9 when counting: 8, 9, ❓?",
    "questionHindi": "गिनती में 9 के बाद क्या आता है: 8, 9, ❓?",
    "visualEmoji": "8, 9, ❓",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_d_1_q9_opt1",
          "text": "10",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_d_1_q9_opt2",
          "text": "7",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_d_1_q9_opt3",
          "text": "11",
          "isCorrect": false
        }
      ]
    },
    "explanation": "After 9 comes the big number 10!",
    "explanationHindi": "9 के बाद संख्या 10 आती है!",
    "points": 20
  },
  {
    "id": "lkg_ms_d_1_q10",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "D.1: Identify numbers - up to 10",
    "concept": "Identify numbers - up to 10",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Which number is missing in this sequence: 6, 7, ❓, 9, 10?",
    "questionHindi": "इस क्रम में कौन सी संख्या छूटी है: 6, 7, ❓, 9, 10?",
    "visualEmoji": "6, 7, ❓, 9, 10",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_d_1_q10_opt1",
          "text": "8",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_d_1_q10_opt2",
          "text": "5",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_d_1_q10_opt3",
          "text": "10",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The number between 7 and 9 is 8!",
    "explanationHindi": "7 और 9 के बीच की संख्या 8 है!",
    "points": 20
  },
  // ==========================================================================
  // D.2: Count dots - up to 10 (10 Questions)
  // ==========================================================================
  {
    "id": "lkg_ms_d_2_q1",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "D.2: Count dots - up to 10",
    "concept": "Count dots - up to 10",
    "difficulty": "easy",
    "type": "mcq",
    "question": "How many dots do you see in this row: ⚫ ⚫ ⚫ ⚫ ⚫ ⚫?",
    "questionHindi": "इस पंक्ति में कितने बिंदु हैं: ⚫ ⚫ ⚫ ⚫ ⚫ ⚫?",
    "visualEmoji": "⚫ ⚫ ⚫ ⚫ ⚫ ⚫",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_d_2_q1_opt1",
          "text": "6 dots",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_d_2_q1_opt2",
          "text": "5 dots",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_d_2_q1_opt3",
          "text": "7 dots",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Count: 1, 2, 3, 4, 5, 6 dots!",
    "explanationHindi": "गिनें: 1, 2, 3, 4, 5, 6 बिंदु!",
    "points": 10
  },
  {
    "id": "lkg_ms_d_2_q2",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "D.2: Count dots - up to 10",
    "concept": "Count dots - up to 10",
    "difficulty": "easy",
    "type": "mcq",
    "question": "How many dots do you see: ⚫ ⚫ ⚫ ⚫ ⚫ ⚫ ⚫?",
    "questionHindi": "कितने बिंदु हैं: ⚫ ⚫ ⚫ ⚫ ⚫ ⚫ ⚫?",
    "visualEmoji": "⚫ ⚫ ⚫ ⚫ ⚫ ⚫ ⚫",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_d_2_q2_opt1",
          "text": "7 dots",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_d_2_q2_opt2",
          "text": "6 dots",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_d_2_q2_opt3",
          "text": "8 dots",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Count them: 1, 2, 3, 4, 5, 6, 7 dots!",
    "explanationHindi": "गिनें: 1, 2, 3, 4, 5, 6, 7 बिंदु!",
    "points": 10
  },
  {
    "id": "lkg_ms_d_2_q3",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "D.2: Count dots - up to 10",
    "concept": "Count dots - up to 10",
    "difficulty": "easy",
    "type": "mcq",
    "question": "How many dots do you see: ⚫ ⚫ ⚫ ⚫ ⚫ ⚫ ⚫ ⚫?",
    "questionHindi": "कितने बिंदु हैं: ⚫ ⚫ ⚫ ⚫ ⚫ ⚫ ⚫ ⚫?",
    "visualEmoji": "⚫ ⚫ ⚫ ⚫ ⚫ ⚫ ⚫ ⚫",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_d_2_q3_opt1",
          "text": "8 dots",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_d_2_q3_opt2",
          "text": "7 dots",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_d_2_q3_opt3",
          "text": "9 dots",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Count: 1, 2, 3, 4, 5, 6, 7, 8 dots!",
    "explanationHindi": "गिनें: 1, 2, 3, 4, 5, 6, 7, 8 बिंदु!",
    "points": 10
  },
  {
    "id": "lkg_ms_d_2_q4",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "D.2: Count dots - up to 10",
    "concept": "Count dots - up to 10",
    "difficulty": "medium",
    "type": "mcq",
    "question": "How many dots do you see: ⚫ ⚫ ⚫ ⚫ ⚫ ⚫ ⚫ ⚫ ⚫?",
    "questionHindi": "कितने बिंदु हैं: ⚫ ⚫ ⚫ ⚫ ⚫ ⚫ ⚫ ⚫ ⚫?",
    "visualEmoji": "⚫ ⚫ ⚫ ⚫ ⚫ ⚫ ⚫ ⚫ ⚫",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_d_2_q4_opt1",
          "text": "9 dots",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_d_2_q4_opt2",
          "text": "8 dots",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_d_2_q4_opt3",
          "text": "10 dots",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Count: 1, 2, 3, 4, 5, 6, 7, 8, 9 dots!",
    "explanationHindi": "गिनें: 1, 2, 3, 4, 5, 6, 7, 8, 9 बिंदु!",
    "points": 15
  },
  {
    "id": "lkg_ms_d_2_q5",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "D.2: Count dots - up to 10",
    "concept": "Count dots - up to 10",
    "difficulty": "medium",
    "type": "mcq",
    "question": "How many dots are in two rows of five: ⚫⚫⚫⚫⚫ and ⚫⚫⚫⚫⚫?",
    "questionHindi": "5-5 की दो पंक्तियों में कुल कितने बिंदु हैं: ⚫⚫⚫⚫⚫ और ⚫⚫⚫⚫⚫?",
    "visualEmoji": "5 dots + 5 dots",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_d_2_q5_opt1",
          "text": "10 dots",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_d_2_q5_opt2",
          "text": "9 dots",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_d_2_q5_opt3",
          "text": "8 dots",
          "isCorrect": false
        }
      ]
    },
    "explanation": "5 + 5 = 10 dots in total!",
    "explanationHindi": "5 + 5 = कुल 10 बिंदु!",
    "points": 15
  },
  {
    "id": "lkg_ms_d_2_q6",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "D.2: Count dots - up to 10",
    "concept": "Count dots - up to 10",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at this domino: [ ⚫⚫⚫ | ⚫⚫⚫ ]. How many total dots?",
    "questionHindi": "इस डोमिनो को देखें: [ ⚫⚫⚫ | ⚫⚫⚫ ]। कुल कितने बिंदु हैं?",
    "visualEmoji": "[⚫⚫⚫|⚫⚫⚫]",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_d_2_q6_opt1",
          "text": "6 dots",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_d_2_q6_opt2",
          "text": "5 dots",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_d_2_q6_opt3",
          "text": "7 dots",
          "isCorrect": false
        }
      ]
    },
    "explanation": "3 dots + 3 dots = 6 dots!",
    "explanationHindi": "3 + 3 = 6 बिंदु!",
    "points": 15
  },
  {
    "id": "lkg_ms_d_2_q7",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "D.2: Count dots - up to 10",
    "concept": "Count dots - up to 10",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at this domino: [ ⚫⚫⚫⚫ | ⚫⚫⚫ ]. How many total dots?",
    "questionHindi": "इस डोमिनो को देखें: [ ⚫⚫⚫⚫ | ⚫⚫⚫ ]। कुल कितने बिंदु हैं?",
    "visualEmoji": "[⚫⚫⚫⚫|⚫⚫⚫]",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_d_2_q7_opt1",
          "text": "7 dots",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_d_2_q7_opt2",
          "text": "6 dots",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_d_2_q7_opt3",
          "text": "8 dots",
          "isCorrect": false
        }
      ]
    },
    "explanation": "4 dots + 3 dots = 7 dots!",
    "explanationHindi": "4 + 3 = 7 बिंदु!",
    "points": 15
  },
  {
    "id": "lkg_ms_d_2_q8",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "D.2: Count dots - up to 10",
    "concept": "Count dots - up to 10",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Look at this domino: [ ⚫⚫⚫⚫ | ⚫⚫⚫⚫ ]. How many total dots?",
    "questionHindi": "इस डोमिनो को देखें: [ ⚫⚫⚫⚫ | ⚫⚫⚫⚫ ]। कुल कितने बिंदु हैं?",
    "visualEmoji": "[⚫⚫⚫⚫|⚫⚫⚫⚫]",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_d_2_q8_opt1",
          "text": "8 dots",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_d_2_q8_opt2",
          "text": "7 dots",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_d_2_q8_opt3",
          "text": "9 dots",
          "isCorrect": false
        }
      ]
    },
    "explanation": "4 dots + 4 dots = 8 dots in total!",
    "explanationHindi": "4 + 4 = कुल 8 बिंदु!",
    "points": 20
  },
  {
    "id": "lkg_ms_d_2_q9",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "D.2: Count dots - up to 10",
    "concept": "Count dots - up to 10",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Look at this domino: [ ⚫⚫⚫⚫⚫ | ⚫⚫⚫⚫ ]. How many total dots?",
    "questionHindi": "इस डोमिनो को देखें: [ ⚫⚫⚫⚫⚫ | ⚫⚫⚫⚫ ]। कुल कितने बिंदु हैं?",
    "visualEmoji": "[⚫⚫⚫⚫⚫|⚫⚫⚫⚫]",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_d_2_q9_opt1",
          "text": "9 dots",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_d_2_q9_opt2",
          "text": "8 dots",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_d_2_q9_opt3",
          "text": "10 dots",
          "isCorrect": false
        }
      ]
    },
    "explanation": "5 dots + 4 dots = 9 dots!",
    "explanationHindi": "5 + 4 = 9 बिंदु!",
    "points": 20
  },
  {
    "id": "lkg_ms_d_2_q10",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "D.2: Count dots - up to 10",
    "concept": "Count dots - up to 10",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Look at this double-five domino: [ ⚫⚫⚫⚫⚫ | ⚫⚫⚫⚫⚫ ]. How many dots?",
    "questionHindi": "इस डबल-पाँच डोमिनो को देखें: [ ⚫⚫⚫⚫⚫ | ⚫⚫⚫⚫⚫ ]। कितने बिंदु हैं?",
    "visualEmoji": "[⚫⚫⚫⚫⚫|⚫⚫⚫⚫⚫]",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_d_2_q10_opt1",
          "text": "10 dots",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_d_2_q10_opt2",
          "text": "9 dots",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_d_2_q10_opt3",
          "text": "8 dots",
          "isCorrect": false
        }
      ]
    },
    "explanation": "5 dots + 5 dots = 10 dots in all!",
    "explanationHindi": "5 + 5 = कुल 10 बिंदु!",
    "points": 20
  },
  // ==========================================================================
  // D.3: Count shapes - up to 10 (10 Questions)
  // ==========================================================================
  {
    "id": "lkg_ms_d_3_q1",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "D.3: Count shapes - up to 10",
    "concept": "Count shapes - up to 10",
    "difficulty": "easy",
    "type": "mcq",
    "question": "How many yellow stars do you count: ⭐ ⭐ ⭐ ⭐ ⭐ ⭐?",
    "questionHindi": "आप कितने पीले तारे गिन सकते हैं: ⭐ ⭐ ⭐ ⭐ ⭐ ⭐?",
    "visualEmoji": "⭐⭐⭐⭐⭐⭐",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_d_3_q1_opt1",
          "text": "6 stars",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_d_3_q1_opt2",
          "text": "5 stars",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_d_3_q1_opt3",
          "text": "7 stars",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Count them: 1, 2, 3, 4, 5, 6 stars!",
    "explanationHindi": "गिनें: 1, 2, 3, 4, 5, 6 तारे!",
    "points": 10
  },
  {
    "id": "lkg_ms_d_3_q2",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "D.3: Count shapes - up to 10",
    "concept": "Count shapes - up to 10",
    "difficulty": "easy",
    "type": "mcq",
    "question": "How many red circles do you see: 🔴 🔴 🔴 🔴 🔴 🔴 🔴?",
    "questionHindi": "आपको कितने लाल वृत्त दिख रहे हैं: 🔴 🔴 🔴 🔴 🔴 🔴 🔴?",
    "visualEmoji": "🔴🔴🔴🔴🔴🔴🔴",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_d_3_q2_opt1",
          "text": "7 circles",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_d_3_q2_opt2",
          "text": "6 circles",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_d_3_q2_opt3",
          "text": "8 circles",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Count them: 1, 2, 3, 4, 5, 6, 7 circles!",
    "explanationHindi": "गिनें: 1, 2, 3, 4, 5, 6, 7 वृत्त!",
    "points": 10
  },
  {
    "id": "lkg_ms_d_3_q3",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "D.3: Count shapes - up to 10",
    "concept": "Count shapes - up to 10",
    "difficulty": "easy",
    "type": "mcq",
    "question": "How many blue squares can you see: 🟦 🟦 🟦 🟦 🟦 🟦 🟦 🟦?",
    "questionHindi": "आप कितने नीले वर्ग देख सकते हैं: 🟦 🟦 🟦 🟦 🟦 🟦 🟦 🟦?",
    "visualEmoji": "🟦🟦🟦🟦🟦🟦🟦🟦",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_d_3_q3_opt1",
          "text": "8 squares",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_d_3_q3_opt2",
          "text": "7 squares",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_d_3_q3_opt3",
          "text": "9 squares",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Count them: 1, 2, 3, 4, 5, 6, 7, 8 squares!",
    "explanationHindi": "गिनें: 1, 2, 3, 4, 5, 6, 7, 8 वर्ग!",
    "points": 10
  },
  {
    "id": "lkg_ms_d_3_q4",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "D.3: Count shapes - up to 10",
    "concept": "Count shapes - up to 10",
    "difficulty": "medium",
    "type": "mcq",
    "question": "How many green triangles do you see: 🔺 🔺 🔺 🔺 🔺 🔺 🔺 🔺 🔺?",
    "questionHindi": "आप कितने त्रिकोण देख सकते हैं: 🔺 🔺 🔺 🔺 🔺 🔺 🔺 🔺 🔺?",
    "visualEmoji": "🔺🔺🔺🔺🔺🔺🔺🔺🔺",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_d_3_q4_opt1",
          "text": "9 triangles",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_d_3_q4_opt2",
          "text": "8 triangles",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_d_3_q4_opt3",
          "text": "10 triangles",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Count: 1, 2, 3, 4, 5, 6, 7, 8, 9 triangles!",
    "explanationHindi": "गिनें: 1, 2, 3, 4, 5, 6, 7, 8, 9 त्रिकोण!",
    "points": 15
  },
  {
    "id": "lkg_ms_d_3_q5",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "D.3: Count shapes - up to 10",
    "concept": "Count shapes - up to 10",
    "difficulty": "medium",
    "type": "mcq",
    "question": "How many purple diamonds are shining: 🔷 🔷 🔷 🔷 🔷 🔷 🔷 🔷 🔷 🔷?",
    "questionHindi": "कितने हीरे चमक रहे हैं: 🔷 🔷 🔷 🔷 🔷 🔷 🔷 🔷 🔷 🔷?",
    "visualEmoji": "🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_d_3_q5_opt1",
          "text": "10 diamonds",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_d_3_q5_opt2",
          "text": "9 diamonds",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_d_3_q5_opt3",
          "text": "8 diamonds",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Count them: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 diamonds!",
    "explanationHindi": "गिनें: कुल 10 हीरे हैं!",
    "points": 15
  },
  {
    "id": "lkg_ms_d_3_q6",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "D.3: Count shapes - up to 10",
    "concept": "Count shapes - up to 10",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Count ONLY the stars in this mixed group: ⭐ 🔴 ⭐ ⭐ 🟦 ⭐ ⭐ ⭐",
    "questionHindi": "इस समूह में केवल तारे गिनें: ⭐ 🔴 ⭐ ⭐ 🟦 ⭐ ⭐ ⭐",
    "visualEmoji": "⭐ 🔴 ⭐ ⭐ 🟦 ⭐ ⭐ ⭐",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_d_3_q6_opt1",
          "text": "6 stars",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_d_3_q6_opt2",
          "text": "5 stars",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_d_3_q6_opt3",
          "text": "7 stars",
          "isCorrect": false
        }
      ]
    },
    "explanation": "There are 6 stars (plus 1 circle and 1 square)!",
    "explanationHindi": "यहाँ 6 तारे हैं!",
    "points": 15
  },
  {
    "id": "lkg_ms_d_3_q7",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "D.3: Count shapes - up to 10",
    "concept": "Count shapes - up to 10",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Count ONLY the hearts in this row: ❤️ ❤️ 🟦 ❤️ ❤️ ❤️ ❤️ ❤️",
    "questionHindi": "इस पंक्ति में केवल दिल गिनें: ❤️ ❤️ 🟦 ❤️ ❤️ ❤️ ❤️ ❤️",
    "visualEmoji": "❤️ ❤️ 🟦 ❤️ ❤️ ❤️ ❤️ ❤️",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_d_3_q7_opt1",
          "text": "7 hearts",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_d_3_q7_opt2",
          "text": "6 hearts",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_d_3_q7_opt3",
          "text": "8 hearts",
          "isCorrect": false
        }
      ]
    },
    "explanation": "There are 7 red hearts in the row!",
    "explanationHindi": "यहाँ 7 लाल दिल हैं!",
    "points": 15
  },
  {
    "id": "lkg_ms_d_3_q8",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "D.3: Count shapes - up to 10",
    "concept": "Count shapes - up to 10",
    "difficulty": "hard",
    "type": "mcq",
    "question": "You have 4 squares 🟦 🟦 🟦 🟦 and add 4 more 🟦 🟦 🟦 🟦. How many in all?",
    "questionHindi": "आपके पास 4 वर्ग हैं और 4 और जोड़ते हैं। कुल कितने वर्ग हैं?",
    "visualEmoji": "4 + 4 squares",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_d_3_q8_opt1",
          "text": "8 squares",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_d_3_q8_opt2",
          "text": "7 squares",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_d_3_q8_opt3",
          "text": "9 squares",
          "isCorrect": false
        }
      ]
    },
    "explanation": "4 + 4 = 8 squares in total!",
    "explanationHindi": "4 + 4 = कुल 8 वर्ग!",
    "points": 20
  },
  {
    "id": "lkg_ms_d_3_q9",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "D.3: Count shapes - up to 10",
    "concept": "Count shapes - up to 10",
    "difficulty": "hard",
    "type": "mcq",
    "question": "You have 5 circles 🔴 🔴 🔴 🔴 🔴 and add 4 more 🔴 🔴 🔴 🔴. How many now?",
    "questionHindi": "आपके पास 5 वृत्त हैं और 4 और जोड़ते हैं। अब कितने हैं?",
    "visualEmoji": "5 + 4 circles",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_d_3_q9_opt1",
          "text": "9 circles",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_d_3_q9_opt2",
          "text": "8 circles",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_d_3_q9_opt3",
          "text": "10 circles",
          "isCorrect": false
        }
      ]
    },
    "explanation": "5 + 4 = 9 circles altogether!",
    "explanationHindi": "5 + 4 = कुल 9 वृत्त!",
    "points": 20
  },
  {
    "id": "lkg_ms_d_3_q10",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "D.3: Count shapes - up to 10",
    "concept": "Count shapes - up to 10",
    "difficulty": "hard",
    "type": "mcq",
    "question": "You have 5 yellow stars ⭐ ⭐ ⭐ ⭐ ⭐ and 5 blue stars 🌟 🌟 🌟 🌟 🌟. Total stars?",
    "questionHindi": "5 पीले तारे और 5 नीले तारे। कुल कितने तारे हैं?",
    "visualEmoji": "5 + 5 stars",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_d_3_q10_opt1",
          "text": "10 stars",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_d_3_q10_opt2",
          "text": "9 stars",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_d_3_q10_opt3",
          "text": "8 stars",
          "isCorrect": false
        }
      ]
    },
    "explanation": "5 + 5 = 10 stars shining in the sky!",
    "explanationHindi": "5 + 5 = कुल 10 तारे!",
    "points": 20
  },
  // ==========================================================================
  // D.4: Count objects - up to 10 (10 Questions)
  // ==========================================================================
  {
    "id": "lkg_ms_d_4_q1",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "D.4: Count objects - up to 10",
    "concept": "Count objects - up to 10",
    "difficulty": "easy",
    "type": "mcq",
    "question": "How many sweet red apples are in the basket: 🍎 🍎 🍎 🍎 🍎 🍎?",
    "questionHindi": "टोकरी में कितने लाल सेब हैं: 🍎 🍎 🍎 🍎 🍎 🍎?",
    "visualEmoji": "🍎🍎🍎🍎🍎🍎",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_d_4_q1_opt1",
          "text": "6 apples",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_d_4_q1_opt2",
          "text": "5 apples",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_d_4_q1_opt3",
          "text": "7 apples",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Count them: 1, 2, 3, 4, 5, 6 apples!",
    "explanationHindi": "गिनें: 1, 2, 3, 4, 5, 6 सेब!",
    "points": 10
  },
  {
    "id": "lkg_ms_d_4_q2",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "D.4: Count objects - up to 10",
    "concept": "Count objects - up to 10",
    "difficulty": "easy",
    "type": "mcq",
    "question": "How many green leaves do you see: 🍃 🍃 🍃 🍃 🍃 🍃 🍃?",
    "questionHindi": "आपको कितने हरे पत्ते दिख रहे हैं: 🍃 🍃 🍃 🍃 🍃 🍃 🍃?",
    "visualEmoji": "🍃🍃🍃🍃🍃🍃🍃",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_d_4_q2_opt1",
          "text": "7 leaves",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_d_4_q2_opt2",
          "text": "6 leaves",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_d_4_q2_opt3",
          "text": "8 leaves",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Count them: 1, 2, 3, 4, 5, 6, 7 leaves!",
    "explanationHindi": "गिनें: 1, 2, 3, 4, 5, 6, 7 पत्ते!",
    "points": 10
  },
  {
    "id": "lkg_ms_d_4_q3",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "D.4: Count objects - up to 10",
    "concept": "Count objects - up to 10",
    "difficulty": "easy",
    "type": "mcq",
    "question": "How many sharp pencils are in the pencil case: ✏️ ✏️ ✏️ ✏️ ✏️ ✏️ ✏️ ✏️?",
    "questionHindi": "पेंसिल बॉक्स में कितनी पेंसिलें हैं: ✏️ ✏️ ✏️ ✏️ ✏️ ✏️ ✏️ ✏️?",
    "visualEmoji": "✏️✏️✏️✏️✏️✏️✏️✏️",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_d_4_q3_opt1",
          "text": "8 pencils",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_d_4_q3_opt2",
          "text": "7 pencils",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_d_4_q3_opt3",
          "text": "9 pencils",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Count: 1, 2, 3, 4, 5, 6, 7, 8 pencils!",
    "explanationHindi": "गिनें: 1, 2, 3, 4, 5, 6, 7, 8 पेंसिलें!",
    "points": 10
  },
  {
    "id": "lkg_ms_d_4_q4",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "D.4: Count objects - up to 10",
    "concept": "Count objects - up to 10",
    "difficulty": "medium",
    "type": "mcq",
    "question": "How many colorful butterflies are fluttering: 🦋 🦋 🦋 🦋 🦋 🦋 🦋 🦋 🦋?",
    "questionHindi": "कितनी तितलियां उड़ रही हैं: 🦋 🦋 🦋 🦋 🦋 🦋 🦋 🦋 🦋?",
    "visualEmoji": "🦋🦋🦋🦋🦋🦋🦋🦋🦋",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_d_4_q4_opt1",
          "text": "9 butterflies",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_d_4_q4_opt2",
          "text": "8 butterflies",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_d_4_q4_opt3",
          "text": "10 butterflies",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Count: 1, 2, 3, 4, 5, 6, 7, 8, 9 butterflies!",
    "explanationHindi": "गिनें: 1, 2, 3, 4, 5, 6, 7, 8, 9 तितलियां!",
    "points": 15
  },
  {
    "id": "lkg_ms_d_4_q5",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "D.4: Count objects - up to 10",
    "concept": "Count objects - up to 10",
    "difficulty": "medium",
    "type": "mcq",
    "question": "How many happy ducklings are swimming in the river: 🦆 🦆 🦆 🦆 🦆 🦆 🦆 🦆 🦆 🦆?",
    "questionHindi": "नदी में कितने बत्तख के बच्चे तैर रहे हैं?",
    "visualEmoji": "🦆🦆🦆🦆🦆🦆🦆🦆🦆🦆",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_d_4_q5_opt1",
          "text": "10 ducks",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_d_4_q5_opt2",
          "text": "9 ducks",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_d_4_q5_opt3",
          "text": "8 ducks",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Count: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ducks!",
    "explanationHindi": "गिनें: कुल 10 बत्तखें!",
    "points": 15
  },
  {
    "id": "lkg_ms_d_4_q6",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "D.4: Count objects - up to 10",
    "concept": "Count objects - up to 10",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which plate has exactly 6 cookies: 🍪?",
    "questionHindi": "किस प्लेट में ठीक 6 कुकीज़ हैं?",
    "visualEmoji": "🍪 🍪 🍪 🍪 🍪 🍪",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_d_4_q6_opt1",
          "text": "Plate with 6 cookies",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_d_4_q6_opt2",
          "text": "Plate with 5 cookies",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_d_4_q6_opt3",
          "text": "Plate with 7 cookies",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Count: 1, 2, 3, 4, 5, 6 cookies!",
    "explanationHindi": "गिनें: 6 कुकीज़!",
    "points": 15
  },
  {
    "id": "lkg_ms_d_4_q7",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "D.4: Count objects - up to 10",
    "concept": "Count objects - up to 10",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which tree has exactly 7 bright oranges: 🍊?",
    "questionHindi": "किस पेड़ पर ठीक 7 संतरे हैं?",
    "visualEmoji": "🍊 🍊 🍊 🍊 🍊 🍊 🍊",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_d_4_q7_opt1",
          "text": "Tree with 7 oranges",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_d_4_q7_opt2",
          "text": "Tree with 6 oranges",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_d_4_q7_opt3",
          "text": "Tree with 8 oranges",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Count: 1, 2, 3, 4, 5, 6, 7 oranges!",
    "explanationHindi": "गिनें: 7 संतरे!",
    "points": 15
  },
  {
    "id": "lkg_ms_d_4_q8",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "D.4: Count objects - up to 10",
    "concept": "Count objects - up to 10",
    "difficulty": "hard",
    "type": "mcq",
    "question": "There are 5 birds in a tree 🐦. 3 more fly in 🐦. How many birds now?",
    "questionHindi": "पेड़ पर 5 पक्षी हैं। 3 और आ जाते हैं। अब कितने पक्षी हैं?",
    "visualEmoji": "5 + 3 birds",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_d_4_q8_opt1",
          "text": "8 birds",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_d_4_q8_opt2",
          "text": "7 birds",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_d_4_q8_opt3",
          "text": "9 birds",
          "isCorrect": false
        }
      ]
    },
    "explanation": "5 + 3 = 8 birds singing together!",
    "explanationHindi": "5 + 3 = कुल 8 पक्षी!",
    "points": 20
  },
  {
    "id": "lkg_ms_d_4_q9",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "D.4: Count objects - up to 10",
    "concept": "Count objects - up to 10",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Rahul has 6 toy cars 🚗. His grandma gives him 3 more 🚗. How many cars in all?",
    "questionHindi": "राहुल के पास 6 कारें हैं। दादी 3 और देती हैं। अब कुल कितनी कारें हैं?",
    "visualEmoji": "6 + 3 cars",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_d_4_q9_opt1",
          "text": "9 toy cars",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_d_4_q9_opt2",
          "text": "8 toy cars",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_d_4_q9_opt3",
          "text": "10 toy cars",
          "isCorrect": false
        }
      ]
    },
    "explanation": "6 + 3 = 9 toy cars in his collection!",
    "explanationHindi": "6 + 3 = कुल 9 कारें!",
    "points": 20
  },
  {
    "id": "lkg_ms_d_4_q10",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "D.4: Count objects - up to 10",
    "concept": "Count objects - up to 10",
    "difficulty": "hard",
    "type": "mcq",
    "question": "A box has 7 red balls 🔴 and 3 green balls 🟢. How many balls in total?",
    "questionHindi": "डिब्बे में 7 लाल और 3 हरी गेंदें हैं। कुल कितनी गेंदें हैं?",
    "visualEmoji": "7 + 3 balls",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_d_4_q10_opt1",
          "text": "10 balls",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_d_4_q10_opt2",
          "text": "9 balls",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_d_4_q10_opt3",
          "text": "8 balls",
          "isCorrect": false
        }
      ]
    },
    "explanation": "7 + 3 = 10 balls in the box!",
    "explanationHindi": "7 + 3 = कुल 10 गेंदें!",
    "points": 20
  },
  // ==========================================================================
  // D.5: Count on ten frames - up to 10 (10 Questions)
  // ==========================================================================
  {
    "id": "lkg_ms_d_5_q1",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "D.5: Count on ten frames - up to 10",
    "concept": "Count on ten frames - up to 10",
    "difficulty": "easy",
    "type": "mcq",
    "question": "How many dots in this frame (top row full of 5 + 1 more in bottom): 5 + 1?",
    "questionHindi": "इस फ्रेम में कितने बिंदु हैं (ऊपर 5 + नीचे 1)?",
    "visualEmoji": "[ ⚫⚫⚫⚫⚫ / ⚫⬜⬜⬜⬜ ]",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_d_5_q1_opt1",
          "text": "6 dots",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_d_5_q1_opt2",
          "text": "5 dots",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_d_5_q1_opt3",
          "text": "7 dots",
          "isCorrect": false
        }
      ]
    },
    "explanation": "5 in the top row + 1 in the bottom row = 6 dots!",
    "explanationHindi": "ऊपरी पंक्ति में 5 + निचली में 1 = 6 बिंदु!",
    "points": 10
  },
  {
    "id": "lkg_ms_d_5_q2",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "D.5: Count on ten frames - up to 10",
    "concept": "Count on ten frames - up to 10",
    "difficulty": "easy",
    "type": "mcq",
    "question": "How many dots in this frame (top 5 + bottom 2)?",
    "questionHindi": "इस फ्रेम में कितने बिंदु हैं (ऊपर 5 + नीचे 2)?",
    "visualEmoji": "[ ⚫⚫⚫⚫⚫ / ⚫⚫⬜⬜⬜ ]",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_d_5_q2_opt1",
          "text": "7 dots",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_d_5_q2_opt2",
          "text": "6 dots",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_d_5_q2_opt3",
          "text": "8 dots",
          "isCorrect": false
        }
      ]
    },
    "explanation": "5 + 2 = 7 dots!",
    "explanationHindi": "5 + 2 = 7 बिंदु!",
    "points": 10
  },
  {
    "id": "lkg_ms_d_5_q3",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "D.5: Count on ten frames - up to 10",
    "concept": "Count on ten frames - up to 10",
    "difficulty": "easy",
    "type": "mcq",
    "question": "How many dots in this frame (top 5 + bottom 3)?",
    "questionHindi": "इस फ्रेम में कितने बिंदु हैं (ऊपर 5 + नीचे 3)?",
    "visualEmoji": "[ ⚫⚫⚫⚫⚫ / ⚫⚫⚫⬜⬜ ]",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_d_5_q3_opt1",
          "text": "8 dots",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_d_5_q3_opt2",
          "text": "7 dots",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_d_5_q3_opt3",
          "text": "9 dots",
          "isCorrect": false
        }
      ]
    },
    "explanation": "5 + 3 = 8 dots!",
    "explanationHindi": "5 + 3 = 8 बिंदु!",
    "points": 10
  },
  {
    "id": "lkg_ms_d_5_q4",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "D.5: Count on ten frames - up to 10",
    "concept": "Count on ten frames - up to 10",
    "difficulty": "medium",
    "type": "mcq",
    "question": "How many dots in this frame (top 5 + bottom 4)?",
    "questionHindi": "इस फ्रेम में कितने बिंदु हैं (ऊपर 5 + नीचे 4)?",
    "visualEmoji": "[ ⚫⚫⚫⚫⚫ / ⚫⚫⚫⚫⬜ ]",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_d_5_q4_opt1",
          "text": "9 dots",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_d_5_q4_opt2",
          "text": "8 dots",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_d_5_q4_opt3",
          "text": "10 dots",
          "isCorrect": false
        }
      ]
    },
    "explanation": "5 + 4 = 9 dots!",
    "explanationHindi": "5 + 4 = 9 बिंदु!",
    "points": 15
  },
  {
    "id": "lkg_ms_d_5_q5",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "D.5: Count on ten frames - up to 10",
    "concept": "Count on ten frames - up to 10",
    "difficulty": "medium",
    "type": "mcq",
    "question": "How many dots when both rows of the ten frame are completely full?",
    "questionHindi": "जब टेन फ्रेम की दोनों पंक्तियाँ पूरी भरी हों तो कितने बिंदु होते हैं?",
    "visualEmoji": "[ ⚫⚫⚫⚫⚫ / ⚫⚫⚫⚫⚫ ]",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_d_5_q5_opt1",
          "text": "10 dots (full frame)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_d_5_q5_opt2",
          "text": "9 dots",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_d_5_q5_opt3",
          "text": "8 dots",
          "isCorrect": false
        }
      ]
    },
    "explanation": "5 in top + 5 in bottom = 10 dots! The frame is completely full.",
    "explanationHindi": "5 ऊपर + 5 नीचे = कुल 10 बिंदु! फ्रेम पूरा भरा है।",
    "points": 15
  },
  {
    "id": "lkg_ms_d_5_q6",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "D.5: Count on ten frames - up to 10",
    "concept": "Count on ten frames - up to 10",
    "difficulty": "medium",
    "type": "mcq",
    "question": "How many empty boxes in a frame with 9 dots: [ ⚫⚫⚫⚫⚫ / ⚫⚫⚫⚫⬜ ]?",
    "questionHindi": "9 बिंदुओं वाले फ्रेम में कितने खाली बॉक्स हैं?",
    "visualEmoji": "[ 9 dots filled ]",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_d_5_q6_opt1",
          "text": "1 empty box",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_d_5_q6_opt2",
          "text": "2 empty boxes",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_d_5_q6_opt3",
          "text": "0 empty boxes",
          "isCorrect": false
        }
      ]
    },
    "explanation": "10 - 9 = 1 empty box remaining!",
    "explanationHindi": "10 - 9 = केवल 1 खाली बॉक्स बचा है!",
    "points": 15
  },
  {
    "id": "lkg_ms_d_5_q7",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "D.5: Count on ten frames - up to 10",
    "concept": "Count on ten frames - up to 10",
    "difficulty": "medium",
    "type": "mcq",
    "question": "How many empty boxes in a frame with 8 dots?",
    "questionHindi": "8 बिंदुओं वाले फ्रेम में कितने खाली बॉक्स हैं?",
    "visualEmoji": "[ 8 dots filled ]",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_d_5_q7_opt1",
          "text": "2 empty boxes",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_d_5_q7_opt2",
          "text": "1 empty box",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_d_5_q7_opt3",
          "text": "3 empty boxes",
          "isCorrect": false
        }
      ]
    },
    "explanation": "10 - 8 = 2 empty boxes!",
    "explanationHindi": "10 - 8 = 2 खाली बॉक्स!",
    "points": 15
  },
  {
    "id": "lkg_ms_d_5_q8",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "D.5: Count on ten frames - up to 10",
    "concept": "Count on ten frames - up to 10",
    "difficulty": "hard",
    "type": "mcq",
    "question": "If you have 7 dots in a ten frame, how many more dots do you need to make 10?",
    "questionHindi": "यदि फ्रेम में 7 बिंदु हैं, तो 10 बनाने के लिए कितने और चाहिए?",
    "visualEmoji": "7 + ❓ = 10",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_d_5_q8_opt1",
          "text": "3 more dots",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_d_5_q8_opt2",
          "text": "2 more dots",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_d_5_q8_opt3",
          "text": "4 more dots",
          "isCorrect": false
        }
      ]
    },
    "explanation": "7 + 3 = 10! You need 3 more dots.",
    "explanationHindi": "7 + 3 = 10! आपको 3 बिंदु और चाहिए।",
    "points": 20
  },
  {
    "id": "lkg_ms_d_5_q9",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "D.5: Count on ten frames - up to 10",
    "concept": "Count on ten frames - up to 10",
    "difficulty": "hard",
    "type": "mcq",
    "question": "If you have 8 dots in a ten frame, how many more dots to fill the entire frame?",
    "questionHindi": "यदि फ्रेम में 8 बिंदु हैं, तो पूरा भरने के लिए कितने और चाहिए?",
    "visualEmoji": "8 + ❓ = 10",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_d_5_q9_opt1",
          "text": "2 more dots",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_d_5_q9_opt2",
          "text": "3 more dots",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_d_5_q9_opt3",
          "text": "1 more dot",
          "isCorrect": false
        }
      ]
    },
    "explanation": "8 + 2 = 10! Just 2 more dots fill the frame.",
    "explanationHindi": "8 + 2 = 10! केवल 2 बिंदु और चाहिए।",
    "points": 20
  },
  {
    "id": "lkg_ms_d_5_q10",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "D.5: Count on ten frames - up to 10",
    "concept": "Count on ten frames - up to 10",
    "difficulty": "hard",
    "type": "mcq",
    "question": "If you have 6 dots and remove 1 dot, how many dots will be left in the frame?",
    "questionHindi": "यदि फ्रेम में 6 बिंदु हैं और 1 हटा दें, तो कितने बचेंगे?",
    "visualEmoji": "6 - 1",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_d_5_q10_opt1",
          "text": "5 dots",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_d_5_q10_opt2",
          "text": "6 dots",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_d_5_q10_opt3",
          "text": "4 dots",
          "isCorrect": false
        }
      ]
    },
    "explanation": "6 - 1 = 5 dots (one full top row)!",
    "explanationHindi": "6 - 1 = 5 बिंदु (पूरी ऊपरी पंक्ति)!",
    "points": 20
  },
  // ==========================================================================
  // D.6: Show numbers on ten frames - up to 10 (10 Questions)
  // ==========================================================================
  {
    "id": "lkg_ms_d_6_q1",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "D.6: Show numbers on ten frames - up to 10",
    "concept": "Show numbers on ten frames - up to 10",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which ten frame shows the number 6?",
    "questionHindi": "कौन सा टेन फ्रेम संख्या 6 को दर्शाता है?",
    "visualEmoji": "6️⃣",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_d_6_q1_opt1",
          "text": "Top row full (5) + 1 bottom dot",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_d_6_q1_opt2",
          "text": "Top row full (5) + 2 bottom dots",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_d_6_q1_opt3",
          "text": "Top row 4 dots",
          "isCorrect": false
        }
      ]
    },
    "explanation": "5 + 1 = 6 dots in the ten frame!",
    "explanationHindi": "5 + 1 = 6 बिंदु!",
    "points": 10
  },
  {
    "id": "lkg_ms_d_6_q2",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "D.6: Show numbers on ten frames - up to 10",
    "concept": "Show numbers on ten frames - up to 10",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which ten frame shows the number 7?",
    "questionHindi": "कौन सा टेन फ्रेम संख्या 7 को दर्शाता है?",
    "visualEmoji": "7️⃣",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_d_6_q2_opt1",
          "text": "Top row full (5) + 2 bottom dots",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_d_6_q2_opt2",
          "text": "Top row full (5) + 1 bottom dot",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_d_6_q2_opt3",
          "text": "Top row full (5) + 3 bottom dots",
          "isCorrect": false
        }
      ]
    },
    "explanation": "5 + 2 = 7 dots in the ten frame!",
    "explanationHindi": "5 + 2 = 7 बिंदु!",
    "points": 10
  },
  {
    "id": "lkg_ms_d_6_q3",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "D.6: Show numbers on ten frames - up to 10",
    "concept": "Show numbers on ten frames - up to 10",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which ten frame shows the number 8?",
    "questionHindi": "कौन सा टेन फ्रेम संख्या 8 को दर्शाता है?",
    "visualEmoji": "8️⃣",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_d_6_q3_opt1",
          "text": "Top row full (5) + 3 bottom dots",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_d_6_q3_opt2",
          "text": "Top row full (5) + 2 bottom dots",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_d_6_q3_opt3",
          "text": "All 10 full",
          "isCorrect": false
        }
      ]
    },
    "explanation": "5 + 3 = 8 dots!",
    "explanationHindi": "5 + 3 = 8 बिंदु!",
    "points": 10
  },
  {
    "id": "lkg_ms_d_6_q4",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "D.6: Show numbers on ten frames - up to 10",
    "concept": "Show numbers on ten frames - up to 10",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which ten frame shows the number 9?",
    "questionHindi": "कौन सा टेन फ्रेम संख्या 9 को दर्शाता है?",
    "visualEmoji": "9️⃣",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_d_6_q4_opt1",
          "text": "Top row full (5) + 4 bottom dots (1 empty)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_d_6_q4_opt2",
          "text": "All 10 dots full",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_d_6_q4_opt3",
          "text": "5 + 3 dots",
          "isCorrect": false
        }
      ]
    },
    "explanation": "5 + 4 = 9 dots (only 1 empty space)!",
    "explanationHindi": "5 + 4 = 9 बिंदु (केवल 1 खाली स्थान)!",
    "points": 15
  },
  {
    "id": "lkg_ms_d_6_q5",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "D.6: Show numbers on ten frames - up to 10",
    "concept": "Show numbers on ten frames - up to 10",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which ten frame shows the number 10?",
    "questionHindi": "कौन सा टेन फ्रेम संख्या 10 को दर्शाता है?",
    "visualEmoji": "🔟",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_d_6_q5_opt1",
          "text": "All 10 boxes completely filled",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_d_6_q5_opt2",
          "text": "9 boxes filled (1 empty)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_d_6_q5_opt3",
          "text": "8 boxes filled",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A full frame of all 10 dots shows 10!",
    "explanationHindi": "सभी 10 भरे हुए बॉक्स संख्या 10 दर्शाते हैं!",
    "points": 15
  },
  {
    "id": "lkg_ms_d_6_q6",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "D.6: Show numbers on ten frames - up to 10",
    "concept": "Show numbers on ten frames - up to 10",
    "difficulty": "medium",
    "type": "mcq",
    "question": "How many dots do you place in a ten frame to show the number 6?",
    "questionHindi": "संख्या 6 दिखाने के लिए आप कितने बिंदु रखेंगे?",
    "visualEmoji": "6️⃣",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_d_6_q6_opt1",
          "text": "6 dots",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_d_6_q6_opt2",
          "text": "5 dots",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_d_6_q6_opt3",
          "text": "7 dots",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Place 6 dots to represent 6!",
    "explanationHindi": "6 बिंदु रखें!",
    "points": 15
  },
  {
    "id": "lkg_ms_d_6_q7",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "D.6: Show numbers on ten frames - up to 10",
    "concept": "Show numbers on ten frames - up to 10",
    "difficulty": "medium",
    "type": "mcq",
    "question": "How many dots do you place in a ten frame to show the number 8?",
    "questionHindi": "संख्या 8 दिखाने के लिए कितने बिंदु रखेंगे?",
    "visualEmoji": "8️⃣",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_d_6_q7_opt1",
          "text": "8 dots",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_d_6_q7_opt2",
          "text": "7 dots",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_d_6_q7_opt3",
          "text": "9 dots",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Place 8 dots to represent 8!",
    "explanationHindi": "8 बिंदु रखें!",
    "points": 15
  },
  {
    "id": "lkg_ms_d_6_q8",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "D.6: Show numbers on ten frames - up to 10",
    "concept": "Show numbers on ten frames - up to 10",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Match all 10 fingers on two hands 🖐️ 🖐️ to the ten frame:",
    "questionHindi": "दोनों हाथों की 10 उंगलियों 🖐️ 🖐️ को टेन फ्रेम से मिलाएं:",
    "visualEmoji": "🖐️ 🖐️",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_d_6_q8_opt1",
          "text": "Completely filled 10-frame (10 dots)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_d_6_q8_opt2",
          "text": "Frame with 8 dots",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_d_6_q8_opt3",
          "text": "Frame with 5 dots",
          "isCorrect": false
        }
      ]
    },
    "explanation": "10 fingers match all 10 dots in the frame!",
    "explanationHindi": "10 उंगलियां 10 बिंदुओं से मेल खाती हैं!",
    "points": 20
  },
  {
    "id": "lkg_ms_d_6_q9",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "D.6: Show numbers on ten frames - up to 10",
    "concept": "Show numbers on ten frames - up to 10",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Which frame has 1 dot MORE than a frame showing 6 dots?",
    "questionHindi": "किस फ्रेम में 6 बिंदुओं से 1 बिंदु अधिक है?",
    "visualEmoji": "6 + 1",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_d_6_q9_opt1",
          "text": "Frame with 7 dots",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_d_6_q9_opt2",
          "text": "Frame with 8 dots",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_d_6_q9_opt3",
          "text": "Frame with 5 dots",
          "isCorrect": false
        }
      ]
    },
    "explanation": "6 + 1 = 7 dots!",
    "explanationHindi": "6 + 1 = 7 बिंदु!",
    "points": 20
  },
  {
    "id": "lkg_ms_d_6_q10",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "D.6: Show numbers on ten frames - up to 10",
    "concept": "Show numbers on ten frames - up to 10",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Which frame has 1 dot LESS than a full 10-frame?",
    "questionHindi": "पूर्ण 10-फ्रेम से 1 बिंदु कम किस फ्रेम में है?",
    "visualEmoji": "10 - 1",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_d_6_q10_opt1",
          "text": "Frame with 9 dots",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_d_6_q10_opt2",
          "text": "Frame with 8 dots",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_d_6_q10_opt3",
          "text": "Frame with 7 dots",
          "isCorrect": false
        }
      ]
    },
    "explanation": "10 - 1 = 9 dots!",
    "explanationHindi": "10 - 1 = 9 बिंदु!",
    "points": 20
  },
  // ==========================================================================
  // D.7: Represent numbers - up to 10 (10 Questions)
  // ==========================================================================
  {
    "id": "lkg_ms_d_7_q1",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "D.7: Represent numbers - up to 10",
    "concept": "Represent numbers - up to 10",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which group represents the number 6?",
    "questionHindi": "कौन सा समूह संख्या 6 को दर्शाता है?",
    "visualEmoji": "6️⃣",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_d_7_q1_opt1",
          "text": "🍎 🍎 🍎 🍎 🍎 🍎 (Six apples)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_d_7_q1_opt2",
          "text": "🍎 🍎 🍎 🍎 🍎 (Five apples)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_d_7_q1_opt3",
          "text": "🍎 🍎 🍎 🍎 🍎 🍎 🍎 (Seven apples)",
          "isCorrect": false
        }
      ]
    },
    "explanation": "6 apples represent the number 6!",
    "explanationHindi": "6 सेब संख्या 6 को दर्शाते हैं!",
    "points": 10
  },
  {
    "id": "lkg_ms_d_7_q2",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "D.7: Represent numbers - up to 10",
    "concept": "Represent numbers - up to 10",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which group represents the number 7?",
    "questionHindi": "कौन सा समूह संख्या 7 को दर्शाता है?",
    "visualEmoji": "7️⃣",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_d_7_q2_opt1",
          "text": "⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ (Seven stars)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_d_7_q2_opt2",
          "text": "⭐ ⭐ ⭐ ⭐ ⭐ ⭐ (Six stars)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_d_7_q2_opt3",
          "text": "⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ (Eight stars)",
          "isCorrect": false
        }
      ]
    },
    "explanation": "7 stars represent the number 7!",
    "explanationHindi": "7 तारे संख्या 7 को दर्शाते हैं!",
    "points": 10
  },
  {
    "id": "lkg_ms_d_7_q3",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "D.7: Represent numbers - up to 10",
    "concept": "Represent numbers - up to 10",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which group represents the number 8?",
    "questionHindi": "कौन सा समूह संख्या 8 को दर्शाता है?",
    "visualEmoji": "8️⃣",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_d_7_q3_opt1",
          "text": "🚗 🚗 🚗 🚗 🚗 🚗 🚗 🚗 (Eight cars)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_d_7_q3_opt2",
          "text": "🚗 🚗 🚗 🚗 🚗 🚗 🚗 (Seven cars)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_d_7_q3_opt3",
          "text": "🚗 🚗 🚗 🚗 🚗 🚗 (Six cars)",
          "isCorrect": false
        }
      ]
    },
    "explanation": "8 cars represent the number 8!",
    "explanationHindi": "8 कारें संख्या 8 को दर्शाती हैं!",
    "points": 10
  },
  {
    "id": "lkg_ms_d_7_q4",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "D.7: Represent numbers - up to 10",
    "concept": "Represent numbers - up to 10",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which group represents the number 9?",
    "questionHindi": "कौन सा समूह संख्या 9 को दर्शाता है?",
    "visualEmoji": "9️⃣",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_d_7_q4_opt1",
          "text": "🎈 🎈 🎈 🎈 🎈 🎈 🎈 🎈 🎈 (Nine balloons)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_d_7_q4_opt2",
          "text": "🎈 🎈 🎈 🎈 🎈 🎈 🎈 🎈 (Eight balloons)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_d_7_q4_opt3",
          "text": "🎈 🎈 🎈 🎈 🎈 🎈 🎈 🎈 🎈 🎈 (Ten balloons)",
          "isCorrect": false
        }
      ]
    },
    "explanation": "9 balloons represent the number 9!",
    "explanationHindi": "9 गुब्बारे संख्या 9 को दर्शाते हैं!",
    "points": 15
  },
  {
    "id": "lkg_ms_d_7_q5",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "D.7: Represent numbers - up to 10",
    "concept": "Represent numbers - up to 10",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which group represents the number 10?",
    "questionHindi": "कौन सा समूह संख्या 10 को दर्शाता है?",
    "visualEmoji": "🔟",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_d_7_q5_opt1",
          "text": "🌸 🌸 🌸 🌸 🌸 🌸 🌸 🌸 🌸 🌸 (Ten flowers)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_d_7_q5_opt2",
          "text": "🌸 🌸 🌸 🌸 🌸 🌸 🌸 🌸 🌸 (Nine flowers)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_d_7_q5_opt3",
          "text": "🌸 🌸 🌸 🌸 🌸 🌸 🌸 🌸 (Eight flowers)",
          "isCorrect": false
        }
      ]
    },
    "explanation": "10 flowers represent the numeral 10!",
    "explanationHindi": "10 फूल संख्या 10 को दर्शाते हैं!",
    "points": 15
  },
  {
    "id": "lkg_ms_d_7_q6",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "D.7: Represent numbers - up to 10",
    "concept": "Represent numbers - up to 10",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at the tally marks: 卌 | (one bundle of 5 + 1 line). What number is this?",
    "questionHindi": "टैली चिन्ह देखें: 卌 |। यह कौन सी संख्या है?",
    "visualEmoji": "卌 |",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_d_7_q6_opt1",
          "text": "6",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_d_7_q6_opt2",
          "text": "7",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_d_7_q6_opt3",
          "text": "5",
          "isCorrect": false
        }
      ]
    },
    "explanation": "5 + 1 = 6 in tally marks!",
    "explanationHindi": "5 + 1 = 6 टैली चिन्ह!",
    "points": 15
  },
  {
    "id": "lkg_ms_d_7_q7",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "D.7: Represent numbers - up to 10",
    "concept": "Represent numbers - up to 10",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at the tally marks: 卌 | | (5 + 2 lines). What number is this?",
    "questionHindi": "टैली चिन्ह देखें: 卌 | |। यह कौन सी संख्या है?",
    "visualEmoji": "卌 ||",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_d_7_q7_opt1",
          "text": "7",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_d_7_q7_opt2",
          "text": "6",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_d_7_q7_opt3",
          "text": "8",
          "isCorrect": false
        }
      ]
    },
    "explanation": "5 + 2 = 7 in tally marks!",
    "explanationHindi": "5 + 2 = 7 टैली चिन्ह!",
    "points": 15
  },
  {
    "id": "lkg_ms_d_7_q8",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "D.7: Represent numbers - up to 10",
    "concept": "Represent numbers - up to 10",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Look at the tally marks: 卌 | | | (5 + 3 lines). What number is this?",
    "questionHindi": "टैली चिन्ह देखें: 卌 | | |। यह क्या है?",
    "visualEmoji": "卌 |||",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_d_7_q8_opt1",
          "text": "8",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_d_7_q8_opt2",
          "text": "7",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_d_7_q8_opt3",
          "text": "9",
          "isCorrect": false
        }
      ]
    },
    "explanation": "5 + 3 = 8 in tally marks!",
    "explanationHindi": "5 + 3 = 8!",
    "points": 20
  },
  {
    "id": "lkg_ms_d_7_q9",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "D.7: Represent numbers - up to 10",
    "concept": "Represent numbers - up to 10",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Look at the tally marks: 卌 | | | | (5 + 4 lines). What number is this?",
    "questionHindi": "टैली चिन्ह देखें: 卌 | | | |। यह क्या है?",
    "visualEmoji": "卌 ||||",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_d_7_q9_opt1",
          "text": "9",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_d_7_q9_opt2",
          "text": "8",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_d_7_q9_opt3",
          "text": "10",
          "isCorrect": false
        }
      ]
    },
    "explanation": "5 + 4 = 9 in tally marks!",
    "explanationHindi": "5 + 4 = 9!",
    "points": 20
  },
  {
    "id": "lkg_ms_d_7_q10",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "D.7: Represent numbers - up to 10",
    "concept": "Represent numbers - up to 10",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Look at two tally bundles: 卌 卌 (5 + 5). What number is this?",
    "questionHindi": "दो टैली बंडल देखें: 卌 卌। यह क्या है?",
    "visualEmoji": "卌 卌",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_d_7_q10_opt1",
          "text": "10",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_d_7_q10_opt2",
          "text": "9",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_d_7_q10_opt3",
          "text": "8",
          "isCorrect": false
        }
      ]
    },
    "explanation": "5 + 5 = 10 in tally marks!",
    "explanationHindi": "5 + 5 = 10!",
    "points": 20
  },
  // ==========================================================================
  // E.1: Are there enough? (10 Questions)
  // ==========================================================================
  {
    "id": "lkg_ms_e_1_q1",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "E.1: Are there enough?",
    "concept": "Are there enough?",
    "difficulty": "easy",
    "type": "mcq",
    "question": "There are 3 hungry bunnies 🐰 🐰 🐰 and 3 crunchy carrots 🥕 🥕 🥕. Are there enough carrots for every bunny?",
    "questionHindi": "3 खरगोश 🐰 🐰 🐰 और 3 गाजर 🥕 🥕 🥕 हैं। क्या हर खरगोश के लिए गाजर पर्याप्त है?",
    "visualEmoji": "🐰🐰🐰 vs 🥕🥕🥕",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_e_1_q1_opt1",
          "text": "Yes, there are enough! (3 = 3)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_e_1_q1_opt2",
          "text": "No, not enough",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_e_1_q1_opt3",
          "text": "Too many",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Each of the 3 bunnies gets 1 carrot! Exactly enough.",
    "explanationHindi": "हर खरगोश को 1 गाजर मिलेगी! संख्या बराबर है।",
    "points": 10
  },
  {
    "id": "lkg_ms_e_1_q2",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "E.1: Are there enough?",
    "concept": "Are there enough?",
    "difficulty": "easy",
    "type": "mcq",
    "question": "There are 4 children 👧 👧 👧 👧 but only 2 ice creams 🍦 🍦. Are there enough ice creams?",
    "questionHindi": "4 बच्चे 👧 👧 👧 👧 हैं पर केवल 2 आइसक्रीम 🍦 🍦 हैं। क्या आइसक्रीम पर्याप्त है?",
    "visualEmoji": "4 children vs 2 ice creams",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_e_1_q2_opt1",
          "text": "No, not enough! (4 > 2)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_e_1_q2_opt2",
          "text": "Yes, enough",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_e_1_q2_opt3",
          "text": "Too many",
          "isCorrect": false
        }
      ]
    },
    "explanation": "4 children need 4 ice creams, but there are only 2! Not enough.",
    "explanationHindi": "4 बच्चों के लिए 4 आइसक्रीम चाहिए, पर केवल 2 हैं! पर्याप्त नहीं हैं।",
    "points": 10
  },
  {
    "id": "lkg_ms_e_1_q3",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "E.1: Are there enough?",
    "concept": "Are there enough?",
    "difficulty": "easy",
    "type": "mcq",
    "question": "There are 2 birds 🐦 🐦 and 2 nests 🪹 🪹. Does each bird have a nest?",
    "questionHindi": "2 पक्षी 🐦 🐦 और 2 घोंसले 🪹 🪹 हैं। क्या हर पक्षी के लिए घोंसला है?",
    "visualEmoji": "🐦🐦 vs 🪹🪹",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_e_1_q3_opt1",
          "text": "Yes, there are enough! (2 = 2)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_e_1_q3_opt2",
          "text": "No, not enough",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_e_1_q3_opt3",
          "text": "Zero",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Every bird gets 1 nest because 2 equals 2!",
    "explanationHindi": "हर पक्षी को घोंसला मिलेगा क्योंकि 2 = 2!",
    "points": 10
  },
  {
    "id": "lkg_ms_e_1_q4",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "E.1: Are there enough?",
    "concept": "Are there enough?",
    "difficulty": "medium",
    "type": "mcq",
    "question": "There are 5 monkeys 🐒 🐒 🐒 🐒 🐒 and 4 bananas 🍌 🍌 🍌 🍌. Are there enough bananas?",
    "questionHindi": "5 बंदर 🐒 और 4 केले 🍌 हैं। क्या सभी बंदरों के लिए केले पर्याप्त हैं?",
    "visualEmoji": "5 monkeys vs 4 bananas",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_e_1_q4_opt1",
          "text": "No, not enough (need 1 more)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_e_1_q4_opt2",
          "text": "Yes, enough",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_e_1_q4_opt3",
          "text": "Too many",
          "isCorrect": false
        }
      ]
    },
    "explanation": "5 monkeys need 5 bananas, but there are only 4! 1 monkey will have none.",
    "explanationHindi": "5 बंदरों के लिए 5 केले चाहिए, 1 केला कम है!",
    "points": 15
  },
  {
    "id": "lkg_ms_e_1_q5",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "E.1: Are there enough?",
    "concept": "Are there enough?",
    "difficulty": "medium",
    "type": "mcq",
    "question": "There are 3 dogs 🐶 🐶 🐶 and 5 juicy bones 🦴 🦴 🦴 🦴 🦴. Are there enough bones for every dog?",
    "questionHindi": "3 कुत्ते 🐶 और 5 हड्डियाँ 🦴 हैं। क्या हर कुत्ते के लिए हड्डी पर्याप्त है?",
    "visualEmoji": "3 dogs vs 5 bones",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_e_1_q5_opt1",
          "text": "Yes, there are enough! (5 > 3)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_e_1_q5_opt2",
          "text": "No, not enough",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_e_1_q5_opt3",
          "text": "Zero",
          "isCorrect": false
        }
      ]
    },
    "explanation": "There are 5 bones for 3 dogs, so there are plenty of bones!",
    "explanationHindi": "हाँ, हड्डियाँ पर्याप्त (बल्कि अधिक) हैं!",
    "points": 15
  },
  {
    "id": "lkg_ms_e_1_q6",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "E.1: Are there enough?",
    "concept": "Are there enough?",
    "difficulty": "medium",
    "type": "mcq",
    "question": "There are 4 students 🧑 🧑 🧑 🧑 and 4 chairs 🪑 🪑 🪑 🪑. Can every student sit down?",
    "questionHindi": "4 छात्र 🧑 और 4 कुर्सियां 🪑 हैं। क्या हर छात्र बैठ सकता है?",
    "visualEmoji": "4 students vs 4 chairs",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_e_1_q6_opt1",
          "text": "Yes, everyone gets a chair! (4 = 4)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_e_1_q6_opt2",
          "text": "No, someone must stand",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_e_1_q6_opt3",
          "text": "Not enough",
          "isCorrect": false
        }
      ]
    },
    "explanation": "4 students match 4 chairs exactly!",
    "explanationHindi": "4 छात्र और 4 कुर्सियां बिल्कुल बराबर हैं!",
    "points": 15
  },
  {
    "id": "lkg_ms_e_1_q7",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "E.1: Are there enough?",
    "concept": "Are there enough?",
    "difficulty": "medium",
    "type": "mcq",
    "question": "There are 5 cars 🚗 🚗 🚗 🚗 🚗 and 3 parking spots 🅿️ 🅿️ 🅿️. Are there enough parking spots?",
    "questionHindi": "5 कारें 🚗 और 3 पार्किंग स्थल 🅿️ हैं। क्या पार्किंग पर्याप्त है?",
    "visualEmoji": "5 cars vs 3 parking",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_e_1_q7_opt1",
          "text": "No, 2 cars cannot park",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_e_1_q7_opt2",
          "text": "Yes, enough",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_e_1_q7_opt3",
          "text": "Too many spots",
          "isCorrect": false
        }
      ]
    },
    "explanation": "5 cars need 5 spots, but there are only 3!",
    "explanationHindi": "5 कारों के लिए 3 जगह कम हैं!",
    "points": 15
  },
  {
    "id": "lkg_ms_e_1_q8",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "E.1: Are there enough?",
    "concept": "Are there enough?",
    "difficulty": "hard",
    "type": "mcq",
    "question": "You have 4 flowers 🌸 🌸 🌸 🌸 and 5 bees 🐝 🐝 🐝 🐝 🐝. How many bees will NOT get a flower?",
    "questionHindi": "4 फूल 🌸 और 5 मधुमक्खियां 🐝 हैं। कितनी मधुमक्खियों को फूल नहीं मिलेगा?",
    "visualEmoji": "5 bees vs 4 flowers",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_e_1_q8_opt1",
          "text": "1 bee",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_e_1_q8_opt2",
          "text": "2 bees",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_e_1_q8_opt3",
          "text": "0 bees",
          "isCorrect": false
        }
      ]
    },
    "explanation": "5 bees - 4 flowers = 1 bee without a flower!",
    "explanationHindi": "5 - 4 = 1 मधुमक्खी को फूल नहीं मिलेगा!",
    "points": 20
  },
  {
    "id": "lkg_ms_e_1_q9",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "E.1: Are there enough?",
    "concept": "Are there enough?",
    "difficulty": "hard",
    "type": "mcq",
    "question": "There are 3 cats 🐱 🐱 🐱 and 2 bowls of milk 🥣 🥣. How many more bowls of milk do you need?",
    "questionHindi": "3 बिल्लियां 🐱 और 2 कटोरे 🥣 दूध हैं। आपको कितने और कटोरे चाहिए?",
    "visualEmoji": "3 cats vs 2 bowls",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_e_1_q9_opt1",
          "text": "1 more bowl",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_e_1_q9_opt2",
          "text": "2 more bowls",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_e_1_q9_opt3",
          "text": "0 bowls",
          "isCorrect": false
        }
      ]
    },
    "explanation": "3 - 2 = 1 more bowl needed so each cat has one!",
    "explanationHindi": "3 - 2 = 1 और कटोरा चाहिए!",
    "points": 20
  },
  {
    "id": "lkg_ms_e_1_q10",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "E.1: Are there enough?",
    "concept": "Are there enough?",
    "difficulty": "hard",
    "type": "mcq",
    "question": "There are 6 squirrels 🐿️ and 6 acorns 🌰. Which statement is true?",
    "questionHindi": "6 गिलहरियां 🐿️ और 6 शाहबलूत 🌰 हैं। कौन सा कथन सत्य है?",
    "visualEmoji": "6 squirrels vs 6 acorns",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_e_1_q10_opt1",
          "text": "There are exactly enough acorns (6 = 6)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_e_1_q10_opt2",
          "text": "There are not enough",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_e_1_q10_opt3",
          "text": "There are too few squirrels",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Both numbers are 6, so every squirrel gets an acorn!",
    "explanationHindi": "दोनों संख्याएं 6 हैं, अतः पर्याप्त हैं!",
    "points": 20
  },
  // ==========================================================================
  // E.2: More (10 Questions)
  // ==========================================================================
  {
    "id": "lkg_ms_e_2_q1",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "E.2: More",
    "concept": "More",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which group has MORE: 🍎 🍎 🍎 or 🍎?",
    "questionHindi": "किस समूह में अधिक हैं: 🍎 🍎 🍎 या 🍎?",
    "visualEmoji": "🍎 🍎 🍎 vs 🍎",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_e_2_q1_opt1",
          "text": "Group with 3 apples 🍎🍎🍎",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_e_2_q1_opt2",
          "text": "Group with 1 apple 🍎",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_e_2_q1_opt3",
          "text": "Both are equal",
          "isCorrect": false
        }
      ]
    },
    "explanation": "3 apples is more than 1 apple!",
    "explanationHindi": "3 सेब 1 सेब से अधिक होते हैं!",
    "points": 10
  },
  {
    "id": "lkg_ms_e_2_q2",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "E.2: More",
    "concept": "More",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which group has MORE balloons: 🎈 🎈 🎈 🎈 or 🎈 🎈?",
    "questionHindi": "किस समूह में अधिक गुब्बारे हैं: 🎈 🎈 🎈 🎈 या 🎈 🎈?",
    "visualEmoji": "🎈🎈🎈🎈 vs 🎈🎈",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_e_2_q2_opt1",
          "text": "Group with 4 balloons",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_e_2_q2_opt2",
          "text": "Group with 2 balloons",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_e_2_q2_opt3",
          "text": "Both are equal",
          "isCorrect": false
        }
      ]
    },
    "explanation": "4 balloons is more than 2 balloons!",
    "explanationHindi": "4 गुब्बारे 2 गुब्बारों से अधिक हैं!",
    "points": 10
  },
  {
    "id": "lkg_ms_e_2_q3",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "E.2: More",
    "concept": "More",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which number is MORE: 5 or 2?",
    "questionHindi": "कौन सी संख्या अधिक है: 5 या 2?",
    "visualEmoji": "5 vs 2",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_e_2_q3_opt1",
          "text": "5 is more",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_e_2_q3_opt2",
          "text": "2 is more",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_e_2_q3_opt3",
          "text": "They are equal",
          "isCorrect": false
        }
      ]
    },
    "explanation": "5 is greater than 2!",
    "explanationHindi": "5 संख्या 2 से बड़ी/अधिक है!",
    "points": 10
  },
  {
    "id": "lkg_ms_e_2_q4",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "E.2: More",
    "concept": "More",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which plate has MORE cookies: Plate A with 5 cookies or Plate B with 3 cookies?",
    "questionHindi": "किस प्लेट में अधिक कुकीज़ हैं: A (5) या B (3)?",
    "visualEmoji": "Plate A (5) vs Plate B (3)",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_e_2_q4_opt1",
          "text": "Plate A (5 cookies)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_e_2_q4_opt2",
          "text": "Plate B (3 cookies)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_e_2_q4_opt3",
          "text": "Both are equal",
          "isCorrect": false
        }
      ]
    },
    "explanation": "5 cookies is more than 3 cookies!",
    "explanationHindi": "5 कुकीज़ 3 से अधिक हैं!",
    "points": 15
  },
  {
    "id": "lkg_ms_e_2_q5",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "E.2: More",
    "concept": "More",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which tree has MORE birds: Tree A with 6 birds or Tree B with 4 birds?",
    "questionHindi": "किस पेड़ पर अधिक पक्षी हैं: A (6) या B (4)?",
    "visualEmoji": "Tree A (6) vs Tree B (4)",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_e_2_q5_opt1",
          "text": "Tree A (6 birds)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_e_2_q5_opt2",
          "text": "Tree B (4 birds)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_e_2_q5_opt3",
          "text": "Both are equal",
          "isCorrect": false
        }
      ]
    },
    "explanation": "6 birds is more than 4 birds!",
    "explanationHindi": "6 पक्षी 4 से अधिक हैं!",
    "points": 15
  },
  {
    "id": "lkg_ms_e_2_q6",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "E.2: More",
    "concept": "More",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which group of stars has MORE: ⭐ ⭐ ⭐ ⭐ ⭐ or ⭐ ⭐ ⭐?",
    "questionHindi": "किस समूह में अधिक तारे हैं?",
    "visualEmoji": "5 stars vs 3 stars",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_e_2_q6_opt1",
          "text": "5 stars",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_e_2_q6_opt2",
          "text": "3 stars",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_e_2_q6_opt3",
          "text": "Both are equal",
          "isCorrect": false
        }
      ]
    },
    "explanation": "5 stars is more than 3 stars!",
    "explanationHindi": "5 तारे 3 से अधिक हैं!",
    "points": 15
  },
  {
    "id": "lkg_ms_e_2_q7",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "E.2: More",
    "concept": "More",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which number is MORE: 8 or 6?",
    "questionHindi": "कौन सी संख्या अधिक है: 8 या 6?",
    "visualEmoji": "8 vs 6",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_e_2_q7_opt1",
          "text": "8 is more",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_e_2_q7_opt2",
          "text": "6 is more",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_e_2_q7_opt3",
          "text": "Both are equal",
          "isCorrect": false
        }
      ]
    },
    "explanation": "8 is more than 6!",
    "explanationHindi": "8 संख्या 6 से अधिक है!",
    "points": 15
  },
  {
    "id": "lkg_ms_e_2_q8",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "E.2: More",
    "concept": "More",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Group A has 7 fish 🐟 and Group B has 9 fish 🐟. Which group has MORE fish?",
    "questionHindi": "समूह A (7 मछलियां) और समूह B (9 मछलियां)। किसमें अधिक हैं?",
    "visualEmoji": "A: 7 fish vs B: 9 fish",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_e_2_q8_opt1",
          "text": "Group B (9 fish)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_e_2_q8_opt2",
          "text": "Group A (7 fish)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_e_2_q8_opt3",
          "text": "Both are equal",
          "isCorrect": false
        }
      ]
    },
    "explanation": "9 fish is more than 7 fish!",
    "explanationHindi": "9 मछलियां 7 से अधिक हैं!",
    "points": 20
  },
  {
    "id": "lkg_ms_e_2_q9",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "E.2: More",
    "concept": "More",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Which box has MORE pencils: Box with 10 pencils or Box with 8 pencils?",
    "questionHindi": "किस डिब्बे में अधिक पेंसिलें हैं: 10 या 8?",
    "visualEmoji": "10 pencils vs 8 pencils",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_e_2_q9_opt1",
          "text": "Box with 10 pencils",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_e_2_q9_opt2",
          "text": "Box with 8 pencils",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_e_2_q9_opt3",
          "text": "Both are equal",
          "isCorrect": false
        }
      ]
    },
    "explanation": "10 is the biggest number here, so it has more!",
    "explanationHindi": "10 पेंसिलें 8 से अधिक हैं!",
    "points": 20
  },
  {
    "id": "lkg_ms_e_2_q10",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "E.2: More",
    "concept": "More",
    "difficulty": "hard",
    "type": "mcq",
    "question": "How many MORE is 5 than 3?",
    "questionHindi": "5, 3 से कितना अधिक है?",
    "visualEmoji": "5 - 3",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_e_2_q10_opt1",
          "text": "2 more",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_e_2_q10_opt2",
          "text": "1 more",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_e_2_q10_opt3",
          "text": "3 more",
          "isCorrect": false
        }
      ]
    },
    "explanation": "5 is 2 more than 3 (3 + 2 = 5)!",
    "explanationHindi": "5, 3 से 2 अधिक है!",
    "points": 20
  },
  // ==========================================================================
  // E.3: Fewer (10 Questions)
  // ==========================================================================
  {
    "id": "lkg_ms_e_3_q1",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "E.3: Fewer",
    "concept": "Fewer",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which group has FEWER: 🍎 🍎 or 🍎 🍎 🍎 🍎?",
    "questionHindi": "किस समूह में कम हैं: 🍎 🍎 या 🍎 🍎 🍎 🍎?",
    "visualEmoji": "🍎 🍎 vs 🍎 🍎 🍎 🍎",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_e_3_q1_opt1",
          "text": "Group with 2 apples 🍎🍎",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_e_3_q1_opt2",
          "text": "Group with 4 apples",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_e_3_q1_opt3",
          "text": "Both are equal",
          "isCorrect": false
        }
      ]
    },
    "explanation": "2 apples is fewer (less) than 4 apples!",
    "explanationHindi": "2 सेब 4 सेबों से कम हैं!",
    "points": 10
  },
  {
    "id": "lkg_ms_e_3_q2",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "E.3: Fewer",
    "concept": "Fewer",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which group has FEWER cars: 🚗 or 🚗 🚗 🚗?",
    "questionHindi": "किस समूह में कम कारें हैं: 🚗 या 🚗 🚗 🚗?",
    "visualEmoji": "🚗 vs 🚗 🚗 🚗",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_e_3_q2_opt1",
          "text": "Group with 1 car 🚗",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_e_3_q2_opt2",
          "text": "Group with 3 cars",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_e_3_q2_opt3",
          "text": "Both are equal",
          "isCorrect": false
        }
      ]
    },
    "explanation": "1 car is fewer than 3 cars!",
    "explanationHindi": "1 कार 3 कारों से कम है!",
    "points": 10
  },
  {
    "id": "lkg_ms_e_3_q3",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "E.3: Fewer",
    "concept": "Fewer",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which number is FEWER (smaller): 2 or 5?",
    "questionHindi": "कौन सी संख्या कम (छोटी) है: 2 या 5?",
    "visualEmoji": "2 vs 5",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_e_3_q3_opt1",
          "text": "2 is fewer",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_e_3_q3_opt2",
          "text": "5 is fewer",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_e_3_q3_opt3",
          "text": "They are equal",
          "isCorrect": false
        }
      ]
    },
    "explanation": "2 is smaller than 5!",
    "explanationHindi": "2 संख्या 5 से कम/छोटी है!",
    "points": 10
  },
  {
    "id": "lkg_ms_e_3_q4",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "E.3: Fewer",
    "concept": "Fewer",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which pond has FEWER ducks: Pond A with 3 ducks or Pond B with 5 ducks?",
    "questionHindi": "किस तालाब में कम बत्तखें हैं: A (3) या B (5)?",
    "visualEmoji": "Pond A (3) vs Pond B (5)",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_e_3_q4_opt1",
          "text": "Pond A (3 ducks)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_e_3_q4_opt2",
          "text": "Pond B (5 ducks)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_e_3_q4_opt3",
          "text": "Both are equal",
          "isCorrect": false
        }
      ]
    },
    "explanation": "3 ducks is fewer than 5 ducks!",
    "explanationHindi": "3 बत्तखें 5 से कम हैं!",
    "points": 15
  },
  {
    "id": "lkg_ms_e_3_q5",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "E.3: Fewer",
    "concept": "Fewer",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which basket has FEWER mangoes: Basket with 2 mangoes or Basket with 6 mangoes?",
    "questionHindi": "किस टोकरी में कम आम हैं: 2 या 6?",
    "visualEmoji": "2 mangoes vs 6 mangoes",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_e_3_q5_opt1",
          "text": "Basket with 2 mangoes",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_e_3_q5_opt2",
          "text": "Basket with 6 mangoes",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_e_3_q5_opt3",
          "text": "Both are equal",
          "isCorrect": false
        }
      ]
    },
    "explanation": "2 is fewer than 6!",
    "explanationHindi": "2 आम 6 आमों से कम हैं!",
    "points": 15
  },
  {
    "id": "lkg_ms_e_3_q6",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "E.3: Fewer",
    "concept": "Fewer",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which group has FEWER stars: ⭐ ⭐ ⭐ or ⭐ ⭐ ⭐ ⭐ ⭐?",
    "questionHindi": "किस समूह में कम तारे हैं?",
    "visualEmoji": "3 stars vs 5 stars",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_e_3_q6_opt1",
          "text": "3 stars",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_e_3_q6_opt2",
          "text": "5 stars",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_e_3_q6_opt3",
          "text": "Both are equal",
          "isCorrect": false
        }
      ]
    },
    "explanation": "3 stars is fewer than 5 stars!",
    "explanationHindi": "3 तारे 5 से कम हैं!",
    "points": 15
  },
  {
    "id": "lkg_ms_e_3_q7",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "E.3: Fewer",
    "concept": "Fewer",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which number is FEWER: 4 or 7?",
    "questionHindi": "कौन सी संख्या कम है: 4 या 7?",
    "visualEmoji": "4 vs 7",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_e_3_q7_opt1",
          "text": "4 is fewer",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_e_3_q7_opt2",
          "text": "7 is fewer",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_e_3_q7_opt3",
          "text": "Both are equal",
          "isCorrect": false
        }
      ]
    },
    "explanation": "4 is smaller than 7!",
    "explanationHindi": "4 संख्या 7 से कम है!",
    "points": 15
  },
  {
    "id": "lkg_ms_e_3_q8",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "E.3: Fewer",
    "concept": "Fewer",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Group A has 8 balloons and Group B has 6 balloons. Which group has FEWER?",
    "questionHindi": "समूह A (8 गुब्बारे) और समूह B (6 गुब्बारे)। किसमें कम हैं?",
    "visualEmoji": "8 vs 6 balloons",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_e_3_q8_opt1",
          "text": "Group B (6 balloons)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_e_3_q8_opt2",
          "text": "Group A (8 balloons)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_e_3_q8_opt3",
          "text": "Both are equal",
          "isCorrect": false
        }
      ]
    },
    "explanation": "6 balloons is fewer than 8 balloons!",
    "explanationHindi": "6 गुब्बारे 8 से कम हैं!",
    "points": 20
  },
  {
    "id": "lkg_ms_e_3_q9",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "E.3: Fewer",
    "concept": "Fewer",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Which jar has FEWER candies: Jar with 5 candies or Jar with 9 candies?",
    "questionHindi": "किस जार में कम टॉफियां हैं: 5 या 9?",
    "visualEmoji": "5 candies vs 9 candies",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_e_3_q9_opt1",
          "text": "Jar with 5 candies",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_e_3_q9_opt2",
          "text": "Jar with 9 candies",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_e_3_q9_opt3",
          "text": "Both are equal",
          "isCorrect": false
        }
      ]
    },
    "explanation": "5 candies is fewer than 9 candies!",
    "explanationHindi": "5 टॉफियां 9 से कम हैं!",
    "points": 20
  },
  {
    "id": "lkg_ms_e_3_q10",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "E.3: Fewer",
    "concept": "Fewer",
    "difficulty": "hard",
    "type": "mcq",
    "question": "How many FEWER is 2 than 5?",
    "questionHindi": "2, 5 से कितना कम है?",
    "visualEmoji": "5 - 2",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_e_3_q10_opt1",
          "text": "3 fewer",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_e_3_q10_opt2",
          "text": "2 fewer",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_e_3_q10_opt3",
          "text": "1 fewer",
          "isCorrect": false
        }
      ]
    },
    "explanation": "5 - 2 = 3! So 2 is 3 fewer than 5.",
    "explanationHindi": "5 - 2 = 3! अतः 2, 5 से 3 कम है।",
    "points": 20
  },
  // ==========================================================================
  // E.4: Compare in a chart (10 Questions)
  // ==========================================================================
  {
    "id": "lkg_ms_e_4_q1",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "E.4: Compare in a chart",
    "concept": "Compare in a chart",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Look at the fruit chart: Apples 🍎 🍎 🍎 | Oranges 🍊 🍊. Which fruit has MORE?",
    "questionHindi": "फलों का चार्ट देखें: सेब 🍎 🍎 🍎 | संतरा 🍊 🍊। कौन सा फल अधिक है?",
    "visualEmoji": "🍎🍎🍎 vs 🍊🍊",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_e_4_q1_opt1",
          "text": "Apples 🍎 (3)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_e_4_q1_opt2",
          "text": "Oranges 🍊 (2)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_e_4_q1_opt3",
          "text": "Both are equal",
          "isCorrect": false
        }
      ]
    },
    "explanation": "There are 3 apples and only 2 oranges, so apples are more!",
    "explanationHindi": "3 सेब हैं और केवल 2 संतरे, अतः सेब अधिक हैं!",
    "points": 10
  },
  {
    "id": "lkg_ms_e_4_q2",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "E.4: Compare in a chart",
    "concept": "Compare in a chart",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Look at the pet chart: Dogs 🐶 🐶 | Cats 🐱 🐱 🐱 🐱. Which pet has MORE?",
    "questionHindi": "पालतू चार्ट: कुत्ते 🐶 🐶 | बिल्लियां 🐱 🐱 🐱 🐱। कौन अधिक हैं?",
    "visualEmoji": "🐶🐶 vs 🐱🐱🐱🐱",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_e_4_q2_opt1",
          "text": "Cats 🐱 (4)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_e_4_q2_opt2",
          "text": "Dogs 🐶 (2)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_e_4_q2_opt3",
          "text": "Both are equal",
          "isCorrect": false
        }
      ]
    },
    "explanation": "4 cats is more than 2 dogs!",
    "explanationHindi": "4 बिल्लियां 2 कुत्तों से अधिक हैं!",
    "points": 10
  },
  {
    "id": "lkg_ms_e_4_q3",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "E.4: Compare in a chart",
    "concept": "Compare in a chart",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Look at the color chart: Red 🔴 🔴 🔴 | Blue 🔵 🔵 🔵. How do they compare?",
    "questionHindi": "रंग चार्ट: लाल 🔴 🔴 🔴 | नीला 🔵 🔵 🔵। इनकी तुलना कैसे करेंगे?",
    "visualEmoji": "🔴🔴🔴 vs 🔵🔵🔵",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_e_4_q3_opt1",
          "text": "They are EQUAL (3 = 3)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_e_4_q3_opt2",
          "text": "Red has more",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_e_4_q3_opt3",
          "text": "Blue has more",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Both colors have 3 dots, so they are equal!",
    "explanationHindi": "दोनों रंगों के 3 बिंदु हैं, अतः दोनों बराबर हैं!",
    "points": 10
  },
  {
    "id": "lkg_ms_e_4_q4",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "E.4: Compare in a chart",
    "concept": "Compare in a chart",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at the toy chart: Cars 🚗 🚗 🚗 🚗 🚗 | Trains 🚂 🚂. Which toy has FEWER?",
    "questionHindi": "खिलौना चार्ट: कारें 🚗 (5) | ट्रेनें 🚂 (2)। कौन से खिलौने कम हैं?",
    "visualEmoji": "Cars (5) vs Trains (2)",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_e_4_q4_opt1",
          "text": "Trains 🚂 (2)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_e_4_q4_opt2",
          "text": "Cars 🚗 (5)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_e_4_q4_opt3",
          "text": "Both are equal",
          "isCorrect": false
        }
      ]
    },
    "explanation": "There are only 2 trains, which is fewer than 5 cars!",
    "explanationHindi": "केवल 2 ट्रेनें हैं, जो 5 कारों से कम हैं!",
    "points": 15
  },
  {
    "id": "lkg_ms_e_4_q5",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "E.4: Compare in a chart",
    "concept": "Compare in a chart",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at the flower chart: Roses 🌹 🌹 🌹 🌹 | Daisies 🌼 🌼 🌼 🌼 🌼 🌼. Which has MORE?",
    "questionHindi": "फूलों का चार्ट: गुलाब 🌹 (4) | डेज़ी 🌼 (6)। कौन से अधिक हैं?",
    "visualEmoji": "Roses (4) vs Daisies (6)",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_e_4_q5_opt1",
          "text": "Daisies 🌼 (6)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_e_4_q5_opt2",
          "text": "Roses 🌹 (4)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_e_4_q5_opt3",
          "text": "Both are equal",
          "isCorrect": false
        }
      ]
    },
    "explanation": "6 daisies is more than 4 roses!",
    "explanationHindi": "6 डेज़ी 4 गुलाबों से अधिक हैं!",
    "points": 15
  },
  {
    "id": "lkg_ms_e_4_q6",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "E.4: Compare in a chart",
    "concept": "Compare in a chart",
    "difficulty": "medium",
    "type": "mcq",
    "question": "In a snack chart: Cookies 🍪 🍪 🍪 | Candies 🍬 🍬 🍬. Are they equal?",
    "questionHindi": "स्नैक चार्ट: कुकीज़ 🍪 (3) | टॉफियां 🍬 (3)। क्या वे बराबर हैं?",
    "visualEmoji": "Cookies (3) vs Candies (3)",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_e_4_q6_opt1",
          "text": "Yes, they are equal!",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_e_4_q6_opt2",
          "text": "No, cookies are more",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_e_4_q6_opt3",
          "text": "No, candies are more",
          "isCorrect": false
        }
      ]
    },
    "explanation": "3 cookies and 3 candies are exactly equal!",
    "explanationHindi": "3 और 3 बिल्कुल बराबर हैं!",
    "points": 15
  },
  {
    "id": "lkg_ms_e_4_q7",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "E.4: Compare in a chart",
    "concept": "Compare in a chart",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at the birds chart: Parrots 🦜 (5) | Sparrows 🐦 (3). Which bird has FEWER?",
    "questionHindi": "पक्षी चार्ट: तोते 🦜 (5) | गौरैया 🐦 (3)। कौन सा पक्षी कम है?",
    "visualEmoji": "Parrots (5) vs Sparrows (3)",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_e_4_q7_opt1",
          "text": "Sparrows 🐦 (3)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_e_4_q7_opt2",
          "text": "Parrots 🦜 (5)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_e_4_q7_opt3",
          "text": "Both are equal",
          "isCorrect": false
        }
      ]
    },
    "explanation": "3 sparrows is fewer than 5 parrots!",
    "explanationHindi": "3 गौरैया 5 तोतों से कम हैं!",
    "points": 15
  },
  {
    "id": "lkg_ms_e_4_q8",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "E.4: Compare in a chart",
    "concept": "Compare in a chart",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Chart: Red balls 🔴 (7) | Blue balls 🔵 (5). How many MORE red balls are there?",
    "questionHindi": "चार्ट: लाल गेंदें (7) | नीली गेंदें (5)। लाल गेंदें कितनी अधिक हैं?",
    "visualEmoji": "7 - 5",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_e_4_q8_opt1",
          "text": "2 more red balls",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_e_4_q8_opt2",
          "text": "1 more",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_e_4_q8_opt3",
          "text": "3 more",
          "isCorrect": false
        }
      ]
    },
    "explanation": "7 - 5 = 2 more red balls!",
    "explanationHindi": "7 - 5 = 2 लाल गेंदें अधिक हैं!",
    "points": 20
  },
  {
    "id": "lkg_ms_e_4_q9",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "E.4: Compare in a chart",
    "concept": "Compare in a chart",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Chart: Bananas 🍌 (4) | Apples 🍎 (8). How many FEWER bananas are there?",
    "questionHindi": "चार्ट: केले 🍌 (4) | सेब 🍎 (8)। केले कितने कम हैं?",
    "visualEmoji": "8 - 4",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_e_4_q9_opt1",
          "text": "4 fewer bananas",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_e_4_q9_opt2",
          "text": "2 fewer",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_e_4_q9_opt3",
          "text": "3 fewer",
          "isCorrect": false
        }
      ]
    },
    "explanation": "8 - 4 = 4 fewer bananas!",
    "explanationHindi": "8 - 4 = 4 केले कम हैं!",
    "points": 20
  },
  {
    "id": "lkg_ms_e_4_q10",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "E.4: Compare in a chart",
    "concept": "Compare in a chart",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Look at the shapes chart: Stars ⭐ (6) | Hearts ❤️ (6). Which shape is the winner?",
    "questionHindi": "आकार चार्ट: तारे ⭐ (6) | दिल ❤️ (6)। कौन सा आकार जीता?",
    "visualEmoji": "Stars (6) vs Hearts (6)",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_e_4_q10_opt1",
          "text": "It is a tie! Both have 6",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_e_4_q10_opt2",
          "text": "Stars won",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_e_4_q10_opt3",
          "text": "Hearts won",
          "isCorrect": false
        }
      ]
    },
    "explanation": "6 equals 6, so both shapes are tied and equal!",
    "explanationHindi": "दोनों 6 हैं, अतः दोनों बराबर (Tie) हैं!",
    "points": 20
  },
  // ==========================================================================
  // E.5: Compare groups (10 Questions)
  // ==========================================================================
  {
    "id": "lkg_ms_e_5_q1",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "E.5: Compare groups",
    "concept": "Compare groups",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Group A has 3 ducks 🦆 🦆 🦆. Group B has 3 ducks 🦆 🦆 🦆. How do they compare?",
    "questionHindi": "समूह A में 3 बत्तखें हैं। समूह B में 3 बत्तखें हैं। इनकी तुलना कैसे होगी?",
    "visualEmoji": "A (3) vs B (3)",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_e_5_q1_opt1",
          "text": "They are EQUAL",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_e_5_q1_opt2",
          "text": "Group A is more",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_e_5_q1_opt3",
          "text": "Group B is more",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Both groups have 3 ducks, so they are equal!",
    "explanationHindi": "दोनों समूहों में 3 बत्तखें हैं, अतः दोनों बराबर हैं!",
    "points": 10
  },
  {
    "id": "lkg_ms_e_5_q2",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "E.5: Compare groups",
    "concept": "Compare groups",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Group A has 5 stars ⭐. Group B has 2 stars ⭐. Which group has MORE?",
    "questionHindi": "समूह A (5 तारे) और समूह B (2 तारे)। किस समूह में अधिक हैं?",
    "visualEmoji": "A (5) vs B (2)",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_e_5_q2_opt1",
          "text": "Group A (5 stars)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_e_5_q2_opt2",
          "text": "Group B (2 stars)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_e_5_q2_opt3",
          "text": "Both equal",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Group A has 5 stars, which is more than 2!",
    "explanationHindi": "समूह A में 5 तारे हैं, जो अधिक हैं!",
    "points": 10
  },
  {
    "id": "lkg_ms_e_5_q3",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "E.5: Compare groups",
    "concept": "Compare groups",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Group A has 1 puppy 🐶. Group B has 4 puppies 🐶 🐶 🐶 🐶. Which group has FEWER?",
    "questionHindi": "समूह A (1 पिल्ला) और समूह B (4 पिल्ले)। किसमें कम हैं?",
    "visualEmoji": "A (1) vs B (4)",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_e_5_q3_opt1",
          "text": "Group A (1 puppy)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_e_5_q3_opt2",
          "text": "Group B (4 puppies)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_e_5_q3_opt3",
          "text": "Both equal",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Group A has only 1 puppy, which is fewer!",
    "explanationHindi": "समूह A में केवल 1 पिल्ला है, अतः यह कम है!",
    "points": 10
  },
  {
    "id": "lkg_ms_e_5_q4",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "E.5: Compare groups",
    "concept": "Compare groups",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Group A has 6 apples 🍎. Group B has 6 oranges 🍊. Are the two groups equal in number?",
    "questionHindi": "समूह A में 6 सेब हैं। समूह B में 6 संतरे हैं। क्या दोनों की संख्या बराबर है?",
    "visualEmoji": "6 apples vs 6 oranges",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_e_5_q4_opt1",
          "text": "Yes, both have 6 items!",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_e_5_q4_opt2",
          "text": "No, apples are bigger",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_e_5_q4_opt3",
          "text": "No, oranges are more",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Both groups have 6 items, so their count is equal!",
    "explanationHindi": "दोनों में 6 वस्तुएं हैं, अतः दोनों की गिनती बराबर है!",
    "points": 15
  },
  {
    "id": "lkg_ms_e_5_q5",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "E.5: Compare groups",
    "concept": "Compare groups",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Group A has 4 blue fish 🐟. Group B has 7 gold fish 🐠. Which has MORE?",
    "questionHindi": "समूह A (4 नीली मछली) और समूह B (7 सुनहरी मछली)। किसमें अधिक हैं?",
    "visualEmoji": "4 vs 7 fish",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_e_5_q5_opt1",
          "text": "Group B (7 fish)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_e_5_q5_opt2",
          "text": "Group A (4 fish)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_e_5_q5_opt3",
          "text": "Both equal",
          "isCorrect": false
        }
      ]
    },
    "explanation": "7 fish is more than 4 fish!",
    "explanationHindi": "7 मछलियां 4 से अधिक हैं!",
    "points": 15
  },
  {
    "id": "lkg_ms_e_5_q6",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "E.5: Compare groups",
    "concept": "Compare groups",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Group A has 8 balloons 🎈. Group B has 5 balloons 🎈. Which group has FEWER?",
    "questionHindi": "समूह A (8 गुब्बारे) और समूह B (5 गुब्बारे)। किसमें कम हैं?",
    "visualEmoji": "8 vs 5 balloons",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_e_5_q6_opt1",
          "text": "Group B (5 balloons)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_e_5_q6_opt2",
          "text": "Group A (8 balloons)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_e_5_q6_opt3",
          "text": "Both equal",
          "isCorrect": false
        }
      ]
    },
    "explanation": "5 balloons is fewer than 8 balloons!",
    "explanationHindi": "5 गुब्बारे 8 से कम हैं!",
    "points": 15
  },
  {
    "id": "lkg_ms_e_5_q7",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "E.5: Compare groups",
    "concept": "Compare groups",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which comparison word fits: 7 is _______ than 3?",
    "questionHindi": "कौन सा शब्द सही है: 7, 3 से _______ है?",
    "visualEmoji": "7 vs 3",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_e_5_q7_opt1",
          "text": "More",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_e_5_q7_opt2",
          "text": "Fewer",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_e_5_q7_opt3",
          "text": "Equal",
          "isCorrect": false
        }
      ]
    },
    "explanation": "7 is more than 3!",
    "explanationHindi": "7, 3 से अधिक (More) है!",
    "points": 15
  },
  {
    "id": "lkg_ms_e_5_q8",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "E.5: Compare groups",
    "concept": "Compare groups",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Which comparison word fits: 2 is _______ than 6?",
    "questionHindi": "कौन सा शब्द सही है: 2, 6 से _______ है?",
    "visualEmoji": "2 vs 6",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_e_5_q8_opt1",
          "text": "Fewer (Less)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_e_5_q8_opt2",
          "text": "More",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_e_5_q8_opt3",
          "text": "Equal",
          "isCorrect": false
        }
      ]
    },
    "explanation": "2 is fewer than 6!",
    "explanationHindi": "2, 6 से कम (Fewer) है!",
    "points": 20
  },
  {
    "id": "lkg_ms_e_5_q9",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "E.5: Compare groups",
    "concept": "Compare groups",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Which comparison symbol fits: 5 _______ 5?",
    "questionHindi": "कौन सा चिन्ह सही है: 5 _______ 5?",
    "visualEmoji": "5 vs 5",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_e_5_q9_opt1",
          "text": "= (Equal)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_e_5_q9_opt2",
          "text": "> (More)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_e_5_q9_opt3",
          "text": "< (Less)",
          "isCorrect": false
        }
      ]
    },
    "explanation": "5 is equal to 5!",
    "explanationHindi": "5, 5 के बराबर (=) है!",
    "points": 20
  },
  {
    "id": "lkg_ms_e_5_q10",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "E.5: Compare groups",
    "concept": "Compare groups",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Group A has 10 marbles. Group B has 9 marbles. Which group is the LARGEST?",
    "questionHindi": "समूह A (10 कंचे) और समूह B (9 कंचे)। कौन सा समूह सबसे बड़ा है?",
    "visualEmoji": "10 vs 9",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_e_5_q10_opt1",
          "text": "Group A (10 marbles)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_e_5_q10_opt2",
          "text": "Group B (9 marbles)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_e_5_q10_opt3",
          "text": "Both equal",
          "isCorrect": false
        }
      ]
    },
    "explanation": "10 is greater than 9!",
    "explanationHindi": "10, 9 से बड़ा है!",
    "points": 20
  },
  // ==========================================================================
  // F.1: Inside and outside (10 Questions)
  // ==========================================================================
  {
    "id": "lkg_ms_f_1_q1",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "F.1: Inside and outside",
    "concept": "Inside and outside",
    "difficulty": "easy",
    "type": "mcq",
    "question": "A puppy is sitting INSIDE a cardboard box 📦. Where is the puppy?",
    "questionHindi": "एक पिल्ला डिब्बे 📦 के अंदर बैठा है। पिल्ला कहाँ है?",
    "visualEmoji": "📦 🐶",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_f_1_q1_opt1",
          "text": "Inside the box",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_f_1_q1_opt2",
          "text": "Outside the box",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_f_1_q1_opt3",
          "text": "Under the table",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The puppy is inside the box!",
    "explanationHindi": "पिल्ला डिब्बे के अंदर (Inside) है!",
    "points": 10
  },
  {
    "id": "lkg_ms_f_1_q2",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "F.1: Inside and outside",
    "concept": "Inside and outside",
    "difficulty": "easy",
    "type": "mcq",
    "question": "A cat is playing OUTSIDE in the green yard 🏡. Where is the cat?",
    "questionHindi": "बिल्ली बाहर आँगन में खेल रही है। बिल्ली कहाँ है?",
    "visualEmoji": "🏡 🐱",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_f_1_q2_opt1",
          "text": "Outside",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_f_1_q2_opt2",
          "text": "Inside the house",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_f_1_q2_opt3",
          "text": "Under a rock",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The cat is playing outside in the fresh air!",
    "explanationHindi": "बिल्ली बाहर (Outside) खेल रही है!",
    "points": 10
  },
  {
    "id": "lkg_ms_f_1_q3",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "F.1: Inside and outside",
    "concept": "Inside and outside",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Goldfish are swimming inside a round fishbowl 🐠 🐟. Are they inside or outside?",
    "questionHindi": "सुनहरी मछलियां मछलीघर के अंदर तैर रही हैं। वे अंदर हैं या बाहर?",
    "visualEmoji": "🫧 🐠",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_f_1_q3_opt1",
          "text": "Inside the bowl",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_f_1_q3_opt2",
          "text": "Outside the bowl",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_f_1_q3_opt3",
          "text": "In the sky",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Fish live inside their bowl filled with water!",
    "explanationHindi": "मछलियां मछलीघर के अंदर (Inside) हैं!",
    "points": 10
  },
  {
    "id": "lkg_ms_f_1_q4",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "F.1: Inside and outside",
    "concept": "Inside and outside",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at this pencil case ✏️. The pencils are zipped up inside. Where are the pencils?",
    "questionHindi": "पेंसिल बॉक्स में ज़िप बंद है। पेंसिलें कहाँ हैं?",
    "visualEmoji": "✏️ 👝",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_f_1_q4_opt1",
          "text": "Inside the pencil case",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_f_1_q4_opt2",
          "text": "Outside on the desk",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_f_1_q4_opt3",
          "text": "On the floor",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The pencils are kept inside the pouch!",
    "explanationHindi": "पेंसिलें पाउच के अंदर हैं!",
    "points": 15
  },
  {
    "id": "lkg_ms_f_1_q5",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "F.1: Inside and outside",
    "concept": "Inside and outside",
    "difficulty": "medium",
    "type": "mcq",
    "question": "A ball rolled OUT of the toy bin onto the carpet. Where is the ball now?",
    "questionHindi": "गेंद डिब्बे से बाहर निकलकर कालीन पर आ गई। अब गेंद कहाँ है?",
    "visualEmoji": "⚽ 🧸",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_f_1_q5_opt1",
          "text": "Outside the toy bin",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_f_1_q5_opt2",
          "text": "Inside the toy bin",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_f_1_q5_opt3",
          "text": "Inside a drawer",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The ball is outside the bin on the carpet!",
    "explanationHindi": "गेंद डिब्बे से बाहर (Outside) है!",
    "points": 15
  },
  {
    "id": "lkg_ms_f_1_q6",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "F.1: Inside and outside",
    "concept": "Inside and outside",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which fruit is INSIDE the lunchbox: 🥪 🍎 vs 🍌 on the table?",
    "questionHindi": "लंचबॉक्स के अंदर कौन सा फल है: लंचबॉक्स में 🍎 या मेज पर 🍌?",
    "visualEmoji": "🍱 🍎 vs 🍌",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_f_1_q6_opt1",
          "text": "Apple 🍎 (Inside)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_f_1_q6_opt2",
          "text": "Banana 🍌 (Outside)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_f_1_q6_opt3",
          "text": "None",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The apple is packed inside the lunchbox!",
    "explanationHindi": "सेब लंचबॉक्स के अंदर है!",
    "points": 15
  },
  {
    "id": "lkg_ms_f_1_q7",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "F.1: Inside and outside",
    "concept": "Inside and outside",
    "difficulty": "medium",
    "type": "mcq",
    "question": "You step through the front door into your cozy home. Are you inside or outside?",
    "questionHindi": "आप मुख्य द्वार से अपने घर में प्रवेश करते हैं। आप अंदर हैं या बाहर?",
    "visualEmoji": "🚪 🏠",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_f_1_q7_opt1",
          "text": "Inside the house",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_f_1_q7_opt2",
          "text": "Outside on the street",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_f_1_q7_opt3",
          "text": "Under the tree",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Once you step in, you are inside your home!",
    "explanationHindi": "घर में जाने पर आप अंदर (Inside) होते हैं!",
    "points": 15
  },
  {
    "id": "lkg_ms_f_1_q8",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "F.1: Inside and outside",
    "concept": "Inside and outside",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Look at this circle: ⭕. If a star ⭐ is placed right in the center, where is the star?",
    "questionHindi": "इस वृत्त ⭕ को देखें। यदि तारा ⭐ बीच में रखा है, तो वह कहाँ है?",
    "visualEmoji": "⭕ ⭐",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_f_1_q8_opt1",
          "text": "Inside the circle",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_f_1_q8_opt2",
          "text": "Outside the circle",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_f_1_q8_opt3",
          "text": "Below the circle",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The star is placed inside the boundary of the circle!",
    "explanationHindi": "तारा वृत्त के अंदर (Inside) है!",
    "points": 20
  },
  {
    "id": "lkg_ms_f_1_q9",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "F.1: Inside and outside",
    "concept": "Inside and outside",
    "difficulty": "hard",
    "type": "mcq",
    "question": "If a red dot 🔴 is placed far away from the circle ⭕, where is the red dot?",
    "questionHindi": "यदि लाल बिंदु 🔴 वृत्त ⭕ से दूर रखा है, तो वह कहाँ है?",
    "visualEmoji": "⭕ ... 🔴",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_f_1_q9_opt1",
          "text": "Outside the circle",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_f_1_q9_opt2",
          "text": "Inside the circle",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_f_1_q9_opt3",
          "text": "Under the circle",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The red dot is outside the circle!",
    "explanationHindi": "लाल बिंदु वृत्त के बाहर (Outside) है!",
    "points": 20
  },
  {
    "id": "lkg_ms_f_1_q10",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "F.1: Inside and outside",
    "concept": "Inside and outside",
    "difficulty": "hard",
    "type": "mcq",
    "question": "A bird is flying high in the open blue sky 🦅. Is the bird inside a cage or outside in the wild?",
    "questionHindi": "एक चील खुले नीले आकाश में उड़ रही है। क्या वह पिंजरे में है या बाहर?",
    "visualEmoji": "🦅 ☁️",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_f_1_q10_opt1",
          "text": "Outside in the wild sky",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_f_1_q10_opt2",
          "text": "Inside a small cage",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_f_1_q10_opt3",
          "text": "Underground",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The bird is flying free outside in the sky!",
    "explanationHindi": "पक्षी खुले आकाश में बाहर (Outside) उड़ रहा है!",
    "points": 20
  },
  // ==========================================================================
  // F.2: Above and below (10 Questions)
  // ==========================================================================
  {
    "id": "lkg_ms_f_2_q1",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "F.2: Above and below",
    "concept": "Above and below",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Look at the ceiling fan spinning high above your head 💨. Is the fan ABOVE or BELOW?",
    "questionHindi": "छत का पंखा आपके सिर से ऊपर घूम रहा है। पंखा कहाँ है: ऊपर (Above) या नीचे (Below)?",
    "visualEmoji": "💨 🧑",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_f_2_q1_opt1",
          "text": "Above",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_f_2_q1_opt2",
          "text": "Below",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_f_2_q1_opt3",
          "text": "Beside",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The ceiling fan is high above your head!",
    "explanationHindi": "पंखे की स्थिति ऊपर (Above) है!",
    "points": 10
  },
  {
    "id": "lkg_ms_f_2_q2",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "F.2: Above and below",
    "concept": "Above and below",
    "difficulty": "easy",
    "type": "mcq",
    "question": "A playful puppy is sleeping on the rug BELOW the table. Where is the puppy?",
    "questionHindi": "एक पिल्ला मेज के नीचे चटाई पर सो रहा है। पिल्ला कहाँ है?",
    "visualEmoji": "🪑 🐶",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_f_2_q2_opt1",
          "text": "Below the table",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_f_2_q2_opt2",
          "text": "Above the table",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_f_2_q2_opt3",
          "text": "On the roof",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The puppy is down below the table!",
    "explanationHindi": "पिल्ला मेज के नीचे (Below) है!",
    "points": 10
  },
  {
    "id": "lkg_ms_f_2_q3",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "F.2: Above and below",
    "concept": "Above and below",
    "difficulty": "easy",
    "type": "mcq",
    "question": "The bright golden sun shines high in the sky ☀️. Is the sun ABOVE the clouds?",
    "questionHindi": "सूरज बादलों के ऊपर चमकता है। क्या सूरज ऊपर है या नीचे?",
    "visualEmoji": "☀️ ☁️",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_f_2_q3_opt1",
          "text": "Above the clouds",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_f_2_q3_opt2",
          "text": "Below the ground",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_f_2_q3_opt3",
          "text": "Under the water",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The sun shines high above the clouds!",
    "explanationHindi": "सूरज बादलों के ऊपर (Above) चमकता है!",
    "points": 10
  },
  {
    "id": "lkg_ms_f_2_q4",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "F.2: Above and below",
    "concept": "Above and below",
    "difficulty": "medium",
    "type": "mcq",
    "question": "A tiny earthworm 🪱 crawls under the soil. Is the earthworm ABOVE or BELOW the ground?",
    "questionHindi": "केंचुआ मिट्टी के नीचे रेंगता है। केंचुआ जमीन के ऊपर है या नीचे?",
    "visualEmoji": "🌱 🪱",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_f_2_q4_opt1",
          "text": "Below the ground",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_f_2_q4_opt2",
          "text": "Above the clouds",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_f_2_q4_opt3",
          "text": "In the tree",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The earthworm burrows below the ground!",
    "explanationHindi": "केंचुआ जमीन के नीचे (Below) रहता है!",
    "points": 15
  },
  {
    "id": "lkg_ms_f_2_q5",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "F.2: Above and below",
    "concept": "Above and below",
    "difficulty": "medium",
    "type": "mcq",
    "question": "An airplane ✈️ flies through the clouds. Is the airplane ABOVE the trees?",
    "questionHindi": "हवाई जहाज़ बादलों में उड़ रहा है। क्या यह पेड़ों के ऊपर है?",
    "visualEmoji": "✈️ 🌲",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_f_2_q5_opt1",
          "text": "Yes, high ABOVE the trees",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_f_2_q5_opt2",
          "text": "Below the tree roots",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_f_2_q5_opt3",
          "text": "Under the water",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Airplanes fly high up in the sky, far above the trees!",
    "explanationHindi": "हवाई जहाज पेड़ों से बहुत ऊपर (Above) उड़ता है!",
    "points": 15
  },
  {
    "id": "lkg_ms_f_2_q6",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "F.2: Above and below",
    "concept": "Above and below",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at this picture: ☀️ on top, 🌲 at bottom. Which object is BELOW?",
    "questionHindi": "चित्र देखें: ऊपर ☀️, नीचे 🌲। कौन सी वस्तु नीचे (Below) है?",
    "visualEmoji": "☀️ (top) / 🌲 (bottom)",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_f_2_q6_opt1",
          "text": "Tree 🌲 (Below)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_f_2_q6_opt2",
          "text": "Sun ☀️ (Above)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_f_2_q6_opt3",
          "text": "Both",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The tree is down below on the ground!",
    "explanationHindi": "पेड़ नीचे (Below) जमीन पर है!",
    "points": 15
  },
  {
    "id": "lkg_ms_f_2_q7",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "F.2: Above and below",
    "concept": "Above and below",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at this picture: ☁️ on top, 🏠 at bottom. Which object is ABOVE?",
    "questionHindi": "चित्र देखें: ऊपर ☁️, नीचे 🏠। कौन सी वस्तु ऊपर (Above) है?",
    "visualEmoji": "☁️ (top) / 🏠 (bottom)",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_f_2_q7_opt1",
          "text": "Cloud ☁️ (Above)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_f_2_q7_opt2",
          "text": "House 🏠 (Below)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_f_2_q7_opt3",
          "text": "Both",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The cloud floats high up above the house!",
    "explanationHindi": "बादल घर के ऊपर (Above) तैरता है!",
    "points": 15
  },
  {
    "id": "lkg_ms_f_2_q8",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "F.2: Above and below",
    "concept": "Above and below",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Fish swim 🐟 under the water. Are they ABOVE or BELOW the surface?",
    "questionHindi": "मछलियां पानी के अंदर तैरती हैं। वे पानी की सतह के ऊपर हैं या नीचे?",
    "visualEmoji": "🌊 🐟",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_f_2_q8_opt1",
          "text": "Below the water surface",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_f_2_q8_opt2",
          "text": "Above the sky",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_f_2_q8_opt3",
          "text": "On the roof",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Fish swim down below the surface of the water!",
    "explanationHindi": "मछलियां पानी की सतह के नीचे (Below) तैरती हैं!",
    "points": 20
  },
  {
    "id": "lkg_ms_f_2_q9",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "F.2: Above and below",
    "concept": "Above and below",
    "difficulty": "hard",
    "type": "mcq",
    "question": "A chandelier 💡 hangs from the ceiling. Is it ABOVE the dining table?",
    "questionHindi": "झूमर छत से लटक रहा है। क्या यह खाने की मेज के ऊपर है?",
    "visualEmoji": "💡 🍽️",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_f_2_q9_opt1",
          "text": "Yes, it is ABOVE the table",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_f_2_q9_opt2",
          "text": "Below the floor",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_f_2_q9_opt3",
          "text": "Behind the door",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The chandelier hangs above the table to give light!",
    "explanationHindi": "झूमर मेज के ऊपर (Above) लटकता है!",
    "points": 20
  },
  {
    "id": "lkg_ms_f_2_q10",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "F.2: Above and below",
    "concept": "Above and below",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Your shoes 👟 are placed on the shoe rack BELOW your jackets 🧥. Where are the shoes?",
    "questionHindi": "आपके जूते जैकेट के नीचे रखे हैं। जूते कहाँ हैं?",
    "visualEmoji": "🧥 (top) / 👟 (bottom)",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_f_2_q10_opt1",
          "text": "Below the jackets",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_f_2_q10_opt2",
          "text": "Above the jackets",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_f_2_q10_opt3",
          "text": "Outside",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The shoes are below the jackets!",
    "explanationHindi": "जूते जैकेट के नीचे (Below) हैं!",
    "points": 20
  },
  // ==========================================================================
  // F.3: Beside and next to (10 Questions)
  // ==========================================================================
  {
    "id": "lkg_ms_f_3_q1",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "F.3: Beside and next to",
    "concept": "Beside and next to",
    "difficulty": "easy",
    "type": "mcq",
    "question": "A chair is placed right NEXT TO the study desk: 🪑 🖥️. Where is the chair?",
    "questionHindi": "कुर्सी मेज के बिल्कुल बगल में रखी है: 🪑 🖥️। कुर्सी कहाँ है?",
    "visualEmoji": "🪑 🖥️",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_f_3_q1_opt1",
          "text": "Beside / Next to the desk",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_f_3_q1_opt2",
          "text": "On top of the desk",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_f_3_q1_opt3",
          "text": "Under the desk",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The chair is right beside the desk!",
    "explanationHindi": "कुर्सी मेज के बगल में (Next to) है!",
    "points": 10
  },
  {
    "id": "lkg_ms_f_3_q2",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "F.3: Beside and next to",
    "concept": "Beside and next to",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Two best friends are standing side by side: 👧 👦. Where is the boy standing?",
    "questionHindi": "दो दोस्त साथ-साथ खड़े हैं: 👧 👦। लड़का कहाँ खड़ा है?",
    "visualEmoji": "👧 👦",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_f_3_q2_opt1",
          "text": "Beside the girl",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_f_3_q2_opt2",
          "text": "Above the girl",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_f_3_q2_opt3",
          "text": "Inside the girl",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The boy is standing right beside the girl!",
    "explanationHindi": "लड़का लड़की के पास/बगल में (Beside) खड़ा है!",
    "points": 10
  },
  {
    "id": "lkg_ms_f_3_q3",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "F.3: Beside and next to",
    "concept": "Beside and next to",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Look at the shoes: Left shoe 👟 and Right shoe 👟. Are they sitting NEXT TO each other?",
    "questionHindi": "जूते देखें। क्या वे एक दूसरे के बगल में रखे हैं?",
    "visualEmoji": "👟 👟",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_f_3_q3_opt1",
          "text": "Yes, they are beside each other",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_f_3_q3_opt2",
          "text": "No, one is on the moon",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_f_3_q3_opt3",
          "text": "No, one is inside",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A pair of shoes sit neatly side by side next to each other!",
    "explanationHindi": "जूते एक दूसरे के पास-पास (Beside) रखे हैं!",
    "points": 10
  },
  {
    "id": "lkg_ms_f_3_q4",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "F.3: Beside and next to",
    "concept": "Beside and next to",
    "difficulty": "medium",
    "type": "mcq",
    "question": "A teddy bear 🧸 is sitting right NEXT TO the pillow 🛋️ on the bed. Where is the bear?",
    "questionHindi": "टेडी बियर बिस्तर पर तकिए 🛋️ के पास बैठा है। टेडी कहाँ है?",
    "visualEmoji": "🧸 🛋️",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_f_3_q4_opt1",
          "text": "Beside the pillow",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_f_3_q4_opt2",
          "text": "Under the mattress",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_f_3_q4_opt3",
          "text": "On the ceiling",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The teddy bear is beside the pillow!",
    "explanationHindi": "टेडी बियर तकिए के बगल में (Beside) है!",
    "points": 15
  },
  {
    "id": "lkg_ms_f_3_q5",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "F.3: Beside and next to",
    "concept": "Beside and next to",
    "difficulty": "medium",
    "type": "mcq",
    "question": "A tall tree grows right BESIDE the cozy house: 🏠 🌲. What is next to the house?",
    "questionHindi": "घर के बगल में एक पेड़ उगता है: 🏠 🌲। घर के पास क्या है?",
    "visualEmoji": "🏠 🌲",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_f_3_q5_opt1",
          "text": "The tree 🌲",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_f_3_q5_opt2",
          "text": "The ocean",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_f_3_q5_opt3",
          "text": "The airplane",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The tree stands next to the house!",
    "explanationHindi": "पेड़ घर के बगल में (Next to) है!",
    "points": 15
  },
  {
    "id": "lkg_ms_f_3_q6",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "F.3: Beside and next to",
    "concept": "Beside and next to",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at this row: 🍎 🍌. Which fruit is NEXT TO the apple?",
    "questionHindi": "पंक्ति देखें: 🍎 🍌। सेब के बगल में कौन सा फल है?",
    "visualEmoji": "🍎 🍌",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_f_3_q6_opt1",
          "text": "Banana 🍌",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_f_3_q6_opt2",
          "text": "Orange 🍊",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_f_3_q6_opt3",
          "text": "Grape 🍇",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The banana is sitting right next to the apple!",
    "explanationHindi": "केला सेब के ठीक पास में है!",
    "points": 15
  },
  {
    "id": "lkg_ms_f_3_q7",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "F.3: Beside and next to",
    "concept": "Beside and next to",
    "difficulty": "medium",
    "type": "mcq",
    "question": "A glass of milk 🥛 is placed BESIDE your plate of pancakes 🥞. Where is the milk?",
    "questionHindi": "दूध का गिलास प्लेट के बगल में रखा है। दूध कहाँ है?",
    "visualEmoji": "🥞 🥛",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_f_3_q7_opt1",
          "text": "Next to the plate",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_f_3_q7_opt2",
          "text": "Under the floor",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_f_3_q7_opt3",
          "text": "On top of the food",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The glass of milk is next to the plate!",
    "explanationHindi": "दूध प्लेट के पास (Beside) रखा है!",
    "points": 15
  },
  {
    "id": "lkg_ms_f_3_q8",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "F.3: Beside and next to",
    "concept": "Beside and next to",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Look at this line of shapes: 🔴 🟦 🔺. Which shape is directly NEXT TO the red circle?",
    "questionHindi": "आकृतियों को देखें: 🔴 🟦 🔺। लाल वृत्त के ठीक पास कौन सा आकार है?",
    "visualEmoji": "🔴 🟦 🔺",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_f_3_q8_opt1",
          "text": "Blue Square 🟦",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_f_3_q8_opt2",
          "text": "Red Triangle 🔺",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_f_3_q8_opt3",
          "text": "None",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The blue square 🟦 is right next to the red circle!",
    "explanationHindi": "नीला वर्ग लाल वृत्त के ठीक बगल में है!",
    "points": 20
  },
  {
    "id": "lkg_ms_f_3_q9",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "F.3: Beside and next to",
    "concept": "Beside and next to",
    "difficulty": "hard",
    "type": "mcq",
    "question": "In this line: 🚗 🚙 🚕, which car is BESIDE the middle blue car?",
    "questionHindi": "इस पंक्ति में: 🚗 🚙 🚕, बीच वाली नीली कार के बगल में कौन है?",
    "visualEmoji": "🚗 🚙 🚕",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_f_3_q9_opt1",
          "text": "Both the red car and the yellow taxi",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_f_3_q9_opt2",
          "text": "Only an airplane",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_f_3_q9_opt3",
          "text": "None",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Both the car on the left and the car on the right are beside the blue car!",
    "explanationHindi": "लाल कार और पीली टैक्सी दोनों नीली कार के अगल-बगल हैं!",
    "points": 20
  },
  {
    "id": "lkg_ms_f_3_q10",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "F.3: Beside and next to",
    "concept": "Beside and next to",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Which word means the same as 'NEXT TO'?",
    "questionHindi": "'NEXT TO' का समान अर्थ वाला शब्द कौन सा है?",
    "visualEmoji": "Next to = ?",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_f_3_q10_opt1",
          "text": "Beside",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_f_3_q10_opt2",
          "text": "Above",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_f_3_q10_opt3",
          "text": "Inside",
          "isCorrect": false
        }
      ]
    },
    "explanation": "'Next to' and 'beside' mean side-by-side neighbors!",
    "explanationHindi": "'Next to' और 'beside' का अर्थ बगल में/पास में होता है!",
    "points": 20
  },
  // ==========================================================================
  // F.4: Left and right (10 Questions)
  // ==========================================================================
  {
    "id": "lkg_ms_f_4_q1",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "F.4: Left and right",
    "concept": "Left and right",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Hold up both hands: 🖐️ 🖐️. Which hand is on the LEFT side of your screen: 👈?",
    "questionHindi": "दोनों हाथ उठाएं। स्क्रीन के बाईं ओर (Left) कौन सा हाथ है: 👈?",
    "visualEmoji": "👈 Left vs Right 👉",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_f_4_q1_opt1",
          "text": "Left Hand 👈",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_f_4_q1_opt2",
          "text": "Right Hand 👉",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_f_4_q1_opt3",
          "text": "Foot",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The hand pointing left 👈 is on the left side!",
    "explanationHindi": "बाईं ओर (Left) वाला हाथ 👈 है!",
    "points": 10
  },
  {
    "id": "lkg_ms_f_4_q2",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "F.4: Left and right",
    "concept": "Left and right",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which arrow points to the RIGHT: ➡️ or ⬅️?",
    "questionHindi": "कौन सा तीर दाईं ओर (Right) इशारा करता है: ➡️ या ⬅️?",
    "visualEmoji": "⬅️ vs ➡️",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_f_4_q2_opt1",
          "text": "➡️ (Right Arrow)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_f_4_q2_opt2",
          "text": "⬅️ (Left Arrow)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_f_4_q2_opt3",
          "text": "⬆️ (Up)",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The arrow pointing right is ➡️!",
    "explanationHindi": "दाईं ओर इशारा करने वाला तीर ➡️ है!",
    "points": 10
  },
  {
    "id": "lkg_ms_f_4_q3",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "F.4: Left and right",
    "concept": "Left and right",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Look at these fruits: 🍎 (left) and 🍌 (right). Which fruit is on the RIGHT?",
    "questionHindi": "फल देखें: बाईं ओर 🍎 और दाईं ओर 🍌। दाईं ओर (Right) कौन सा फल है?",
    "visualEmoji": "🍎 🍌",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_f_4_q3_opt1",
          "text": "Banana 🍌",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_f_4_q3_opt2",
          "text": "Apple 🍎",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_f_4_q3_opt3",
          "text": "Orange 🍊",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The banana 🍌 is on the right side!",
    "explanationHindi": "केला 🍌 दाईं ओर (Right) है!",
    "points": 10
  },
  {
    "id": "lkg_ms_f_4_q4",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "F.4: Left and right",
    "concept": "Left and right",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at these fruits: 🍎 (left) and 🍌 (right). Which fruit is on the LEFT?",
    "questionHindi": "फल देखें: बाईं ओर 🍎 और दाईं ओर 🍌। बाईं ओर (Left) कौन सा फल है?",
    "visualEmoji": "🍎 🍌",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_f_4_q4_opt1",
          "text": "Apple 🍎",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_f_4_q4_opt2",
          "text": "Banana 🍌",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_f_4_q4_opt3",
          "text": "Grape 🍇",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The apple 🍎 is on the left side!",
    "explanationHindi": "सेब 🍎 बाईं ओर (Left) है!",
    "points": 15
  },
  {
    "id": "lkg_ms_f_4_q5",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "F.4: Left and right",
    "concept": "Left and right",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at the animals: 🐶 🐱. Which animal is on the LEFT?",
    "questionHindi": "जानवर देखें: 🐶 🐱। बाईं ओर (Left) कौन सा जानवर है?",
    "visualEmoji": "🐶 🐱",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_f_4_q5_opt1",
          "text": "Puppy 🐶",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_f_4_q5_opt2",
          "text": "Kitten 🐱",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_f_4_q5_opt3",
          "text": "Bird 🐦",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The puppy 🐶 is on the left!",
    "explanationHindi": "पिल्ला 🐶 बाईं ओर है!",
    "points": 15
  },
  {
    "id": "lkg_ms_f_4_q6",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "F.4: Left and right",
    "concept": "Left and right",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at the animals: 🐶 🐱. Which animal is on the RIGHT?",
    "questionHindi": "जानवर देखें: 🐶 🐱। दाईं ओर (Right) कौन सा जानवर है?",
    "visualEmoji": "🐶 🐱",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_f_4_q6_opt1",
          "text": "Kitten 🐱",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_f_4_q6_opt2",
          "text": "Puppy 🐶",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_f_4_q6_opt3",
          "text": "Bear 🐻",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The kitten 🐱 is on the right!",
    "explanationHindi": "बिल्ली का बच्चा 🐱 दाईं ओर है!",
    "points": 15
  },
  {
    "id": "lkg_ms_f_4_q7",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "F.4: Left and right",
    "concept": "Left and right",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at the vehicles: 🚗 (left) and 🚌 (right). Which vehicle is on the RIGHT?",
    "questionHindi": "वाहन देखें: 🚗 (बाएं) और 🚌 (दाएं)। दाईं ओर कौन सा वाहन है?",
    "visualEmoji": "🚗 🚌",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_f_4_q7_opt1",
          "text": "Bus 🚌",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_f_4_q7_opt2",
          "text": "Car 🚗",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_f_4_q7_opt3",
          "text": "Train 🚂",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The bus 🚌 is on the right!",
    "explanationHindi": "बस 🚌 दाईं ओर है!",
    "points": 15
  },
  {
    "id": "lkg_ms_f_4_q8",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "F.4: Left and right",
    "concept": "Left and right",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Which hand makes an 'L' shape when you look at your palm with your thumb out?",
    "questionHindi": "जब आप अपना अंगूठा बाहर निकालते हैं तो कौन सा हाथ 'L' का आकार बनाता है?",
    "visualEmoji": "🖐️",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_f_4_q8_opt1",
          "text": "Left Hand (makes 'L')",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_f_4_q8_opt2",
          "text": "Right Hand",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_f_4_q8_opt3",
          "text": "Neither",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Your left hand index finger and thumb form the letter L for Left!",
    "explanationHindi": "बाएं हाथ की उंगली और अंगूठा 'L' (Left) बनाते हैं!",
    "points": 20
  },
  {
    "id": "lkg_ms_f_4_q9",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "F.4: Left and right",
    "concept": "Left and right",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Look at these shapes: 🔺 🟦. Which shape is on the LEFT?",
    "questionHindi": "आकार देखें: 🔺 🟦। बाईं ओर (Left) कौन सा आकार है?",
    "visualEmoji": "🔺 🟦",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_f_4_q9_opt1",
          "text": "Triangle 🔺",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_f_4_q9_opt2",
          "text": "Square 🟦",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_f_4_q9_opt3",
          "text": "Circle 🔴",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The triangle 🔺 is on the left!",
    "explanationHindi": "त्रिकोण 🔺 बाईं ओर है!",
    "points": 20
  },
  {
    "id": "lkg_ms_f_4_q10",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "F.4: Left and right",
    "concept": "Left and right",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Look at these shapes: 🔺 🟦. Which shape is on the RIGHT?",
    "questionHindi": "आकार देखें: 🔺 🟦। दाईं ओर (Right) कौन सा आकार है?",
    "visualEmoji": "🔺 🟦",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_f_4_q10_opt1",
          "text": "Square 🟦",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_f_4_q10_opt2",
          "text": "Triangle 🔺",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_f_4_q10_opt3",
          "text": "Circle 🔴",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The square 🟦 is on the right!",
    "explanationHindi": "वर्ग 🟦 दाईं ओर है!",
    "points": 20
  },
  // ==========================================================================
  // F.5: Left, middle and right (10 Questions)
  // ==========================================================================
  {
    "id": "lkg_ms_f_5_q1",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "F.5: Left, middle and right",
    "concept": "Left, middle and right",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Look at the animals in a row: 🐶 🐱 🐰. Which animal is in the MIDDLE?",
    "questionHindi": "पंक्ति देखें: 🐶 🐱 🐰। बीच में (Middle) कौन सा जानवर है?",
    "visualEmoji": "🐶 🐱 🐰",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_f_5_q1_opt1",
          "text": "Cat 🐱 (Middle)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_f_5_q1_opt2",
          "text": "Dog 🐶 (Left)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_f_5_q1_opt3",
          "text": "Bunny 🐰 (Right)",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The cat 🐱 sits right between the dog and the bunny!",
    "explanationHindi": "बिल्ली 🐱 बिल्कुल बीच में (Middle) है!",
    "points": 10
  },
  {
    "id": "lkg_ms_f_5_q2",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "F.5: Left, middle and right",
    "concept": "Left, middle and right",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Look at the fruits: 🍎 🍌 🍇. Which fruit is on the far LEFT?",
    "questionHindi": "फल देखें: 🍎 🍌 🍇। सबसे बाईं ओर (Left) कौन सा फल है?",
    "visualEmoji": "🍎 🍌 🍇",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_f_5_q2_opt1",
          "text": "Apple 🍎 (Left)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_f_5_q2_opt2",
          "text": "Banana 🍌 (Middle)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_f_5_q2_opt3",
          "text": "Grapes 🍇 (Right)",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The apple 🍎 is on the left!",
    "explanationHindi": "सेब 🍎 बाईं ओर है!",
    "points": 10
  },
  {
    "id": "lkg_ms_f_5_q3",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "F.5: Left, middle and right",
    "concept": "Left, middle and right",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Look at the fruits: 🍎 🍌 🍇. Which fruit is on the far RIGHT?",
    "questionHindi": "फल देखें: 🍎 🍌 🍇। सबसे दाईं ओर (Right) कौन सा फल है?",
    "visualEmoji": "🍎 🍌 🍇",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_f_5_q3_opt1",
          "text": "Grapes 🍇 (Right)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_f_5_q3_opt2",
          "text": "Apple 🍎 (Left)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_f_5_q3_opt3",
          "text": "Banana 🍌 (Middle)",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The grapes 🍇 are on the right!",
    "explanationHindi": "अंगूर 🍇 दाईं ओर हैं!",
    "points": 10
  },
  {
    "id": "lkg_ms_f_5_q4",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "F.5: Left, middle and right",
    "concept": "Left, middle and right",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at the shapes: 🔴 🟦 🔺. Which shape is in the MIDDLE?",
    "questionHindi": "आकृतियां देखें: 🔴 🟦 🔺। बीच में (Middle) कौन सा आकार है?",
    "visualEmoji": "🔴 🟦 🔺",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_f_5_q4_opt1",
          "text": "Blue Square 🟦",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_f_5_q4_opt2",
          "text": "Red Circle 🔴",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_f_5_q4_opt3",
          "text": "Red Triangle 🔺",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The square 🟦 is between the circle and triangle!",
    "explanationHindi": "वर्ग 🟦 बीच में है!",
    "points": 15
  },
  {
    "id": "lkg_ms_f_5_q5",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "F.5: Left, middle and right",
    "concept": "Left, middle and right",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at the toys: 🚗 🧸 ⚽. Which toy is in the MIDDLE?",
    "questionHindi": "खिलौने देखें: 🚗 🧸 ⚽। बीच में (Middle) कौन सा खिलौना है?",
    "visualEmoji": "🚗 🧸 ⚽",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_f_5_q5_opt1",
          "text": "Teddy Bear 🧸",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_f_5_q5_opt2",
          "text": "Car 🚗",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_f_5_q5_opt3",
          "text": "Ball ⚽",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The teddy bear 🧸 is in the middle!",
    "explanationHindi": "टेडी बियर 🧸 बीच में है!",
    "points": 15
  },
  {
    "id": "lkg_ms_f_5_q6",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "F.5: Left, middle and right",
    "concept": "Left, middle and right",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at the flowers: 🌸 🌻 🌹. Which flower is on the LEFT?",
    "questionHindi": "फूल देखें: 🌸 🌻 🌹। बाईं ओर (Left) कौन सा फूल है?",
    "visualEmoji": "🌸 🌻 🌹",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_f_5_q6_opt1",
          "text": "Pink Flower 🌸",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_f_5_q6_opt2",
          "text": "Sunflower 🌻",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_f_5_q6_opt3",
          "text": "Rose 🌹",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The pink flower 🌸 is on the left side!",
    "explanationHindi": "गुलाबी फूल 🌸 बाईं ओर है!",
    "points": 15
  },
  {
    "id": "lkg_ms_f_5_q7",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "F.5: Left, middle and right",
    "concept": "Left, middle and right",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at the flowers: 🌸 🌻 🌹. Which flower is on the RIGHT?",
    "questionHindi": "फूल देखें: 🌸 🌻 🌹। दाईं ओर (Right) कौन सा फूल है?",
    "visualEmoji": "🌸 🌻 🌹",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_f_5_q7_opt1",
          "text": "Red Rose 🌹",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_f_5_q7_opt2",
          "text": "Sunflower 🌻",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_f_5_q7_opt3",
          "text": "Pink Flower 🌸",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The red rose 🌹 is on the right side!",
    "explanationHindi": "लाल गुलाब 🌹 दाईं ओर है!",
    "points": 15
  },
  {
    "id": "lkg_ms_f_5_q8",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "F.5: Left, middle and right",
    "concept": "Left, middle and right",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Three birds sit on a wire: 🐦 (left), 🦜 (middle), 🦆 (right). If the middle bird flies away, who flew?",
    "questionHindi": "तीन पक्षी बैठे हैं: 🐦 (बाएं), 🦜 (बीच), 🦆 (दाएं)। यदि बीच वाला पक्षी उड़ जाए, तो कौन उड़ा?",
    "visualEmoji": "🐦 🦜 🦆",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_f_5_q8_opt1",
          "text": "Parrot 🦜",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_f_5_q8_opt2",
          "text": "Sparrow 🐦",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_f_5_q8_opt3",
          "text": "Duck 🦆",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The parrot 🦜 was in the middle!",
    "explanationHindi": "तोता 🦜 बीच में था!",
    "points": 20
  },
  {
    "id": "lkg_ms_f_5_q9",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "F.5: Left, middle and right",
    "concept": "Left, middle and right",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Look at three numbers: 1️⃣ 2️⃣ 3️⃣. Which number is in the MIDDLE?",
    "questionHindi": "तीन संख्याएं देखें: 1️⃣ 2️⃣ 3️⃣। बीच में कौन सी संख्या है?",
    "visualEmoji": "1️⃣ 2️⃣ 3️⃣",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_f_5_q9_opt1",
          "text": "2️⃣ (Two)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_f_5_q9_opt2",
          "text": "1️⃣ (One)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_f_5_q9_opt3",
          "text": "3️⃣ (Three)",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The number 2 is in the middle between 1 and 3!",
    "explanationHindi": "संख्या 2 बीच में है!",
    "points": 20
  },
  {
    "id": "lkg_ms_f_5_q10",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "F.5: Left, middle and right",
    "concept": "Left, middle and right",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Three cups sit on a table: Red (left), Yellow (middle), Blue (right). Where is the yellow cup?",
    "questionHindi": "तीन कप: लाल (बाएं), पीला (बीच), नीला (दाएं)। पीला कप कहाँ है?",
    "visualEmoji": "Red, Yellow, Blue",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_f_5_q10_opt1",
          "text": "In the Middle",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_f_5_q10_opt2",
          "text": "On the Left",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_f_5_q10_opt3",
          "text": "On the Right",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The yellow cup is in the middle!",
    "explanationHindi": "पीला कप बीच (Middle) में है!",
    "points": 20
  },
  // ==========================================================================
  // F.6: Top and bottom (10 Questions)
  // ==========================================================================
  {
    "id": "lkg_ms_f_6_q1",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "F.6: Top and bottom",
    "concept": "Top and bottom",
    "difficulty": "easy",
    "type": "mcq",
    "question": "A cat climbs up to the very TOP branch of a tree 🌲 🐱. Where is the cat?",
    "questionHindi": "बिल्ली पेड़ की सबसे ऊपरी शाखा पर चढ़ गई। बिल्ली कहाँ है?",
    "visualEmoji": "🌲 🐱",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_f_6_q1_opt1",
          "text": "At the Top",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_f_6_q1_opt2",
          "text": "At the Bottom",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_f_6_q1_opt3",
          "text": "In the dirt",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The cat is perched up at the top!",
    "explanationHindi": "बिल्ली सबसे ऊपर (Top) है!",
    "points": 10
  },
  {
    "id": "lkg_ms_f_6_q2",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "F.6: Top and bottom",
    "concept": "Top and bottom",
    "difficulty": "easy",
    "type": "mcq",
    "question": "A dog is resting at the BOTTOM of the tree on the grass 🐕. Where is the dog?",
    "questionHindi": "कुत्ता पेड़ के नीचे घास पर आराम कर रहा है। कुत्ता कहाँ है?",
    "visualEmoji": "🌲 🐕",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_f_6_q2_opt1",
          "text": "At the Bottom",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_f_6_q2_opt2",
          "text": "At the Top",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_f_6_q2_opt3",
          "text": "In the clouds",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The dog is down at the bottom!",
    "explanationHindi": "कुत्ता सबसे नीचे (Bottom) है!",
    "points": 10
  },
  {
    "id": "lkg_ms_f_6_q3",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "F.6: Top and bottom",
    "concept": "Top and bottom",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Look at a flagpole 🇮🇳. Where is the flag waving: TOP or BOTTOM?",
    "questionHindi": "झंडे के खंभे को देखें। झंडा कहाँ लहरा रहा है: ऊपर (Top) या नीचे (Bottom)?",
    "visualEmoji": "🚩 💈",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_f_6_q3_opt1",
          "text": "At the Top",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_f_6_q3_opt2",
          "text": "At the Bottom",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_f_6_q3_opt3",
          "text": "Under the ground",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The flag flies proud at the very top of the pole!",
    "explanationHindi": "झंडा खंभे के सबसे ऊपर (Top) लहराता है!",
    "points": 10
  },
  {
    "id": "lkg_ms_f_6_q4",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "F.6: Top and bottom",
    "concept": "Top and bottom",
    "difficulty": "medium",
    "type": "mcq",
    "question": "A bookcase has 2 shelves. Books are on the TOP shelf, toys on the BOTTOM shelf. Where are the toys?",
    "questionHindi": "किताबों की अलमारी में खिलौने नीचे वाले शेल्फ पर हैं। खिलौने कहाँ हैं?",
    "visualEmoji": "📚 (top) / 🧸 (bottom)",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_f_6_q4_opt1",
          "text": "Bottom shelf",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_f_6_q4_opt2",
          "text": "Top shelf",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_f_6_q4_opt3",
          "text": "Outside",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The toys are on the bottom shelf!",
    "explanationHindi": "खिलौने नीचे (Bottom) वाले शेल्फ पर हैं!",
    "points": 15
  },
  {
    "id": "lkg_ms_f_6_q5",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "F.6: Top and bottom",
    "concept": "Top and bottom",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Where are the books kept in that same bookcase?",
    "questionHindi": "उसी अलमारी में किताबें कहाँ रखी हैं?",
    "visualEmoji": "📚 (top) / 🧸 (bottom)",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_f_6_q5_opt1",
          "text": "Top shelf",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_f_6_q5_opt2",
          "text": "Bottom shelf",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_f_6_q5_opt3",
          "text": "Under the bed",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The books are on the top shelf!",
    "explanationHindi": "किताबें ऊपर (Top) वाले शेल्फ पर हैं!",
    "points": 15
  },
  {
    "id": "lkg_ms_f_6_q6",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "F.6: Top and bottom",
    "concept": "Top and bottom",
    "difficulty": "medium",
    "type": "mcq",
    "question": "When you wear your winter clothes, where does your woolen cap 🧢 go?",
    "questionHindi": "ऊनी टोपी कहाँ पहनी जाती है: सिर के ऊपर (Top) या पैरों में (Bottom)?",
    "visualEmoji": "🧢 🧑 👟",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_f_6_q6_opt1",
          "text": "At the Top (on your head)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_f_6_q6_opt2",
          "text": "At the Bottom (on your feet)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_f_6_q6_opt3",
          "text": "On your knee",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A cap goes on top of your head!",
    "explanationHindi": "टोपी सिर के ऊपर (Top) पहनी जाती है!",
    "points": 15
  },
  {
    "id": "lkg_ms_f_6_q7",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "F.6: Top and bottom",
    "concept": "Top and bottom",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Where do your warm socks 🧦 go: on top or at the bottom?",
    "questionHindi": "मोज़े 🧦 कहाँ पहने जाते हैं: ऊपर या नीचे (Bottom)?",
    "visualEmoji": "🧦 🦶",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_f_6_q7_opt1",
          "text": "At the Bottom (on your feet)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_f_6_q7_opt2",
          "text": "At the Top (on your head)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_f_6_q7_opt3",
          "text": "On your hands",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Socks go down at the bottom on your feet!",
    "explanationHindi": "मोज़े नीचे (Bottom) पैरों में पहने जाते हैं!",
    "points": 15
  },
  {
    "id": "lkg_ms_f_6_q8",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "F.6: Top and bottom",
    "concept": "Top and bottom",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Look at a delicious burger 🍔. Where is the sesame bun placed?",
    "questionHindi": "बर्गर 🍔 को देखें। तिल वाला बन कहाँ होता है?",
    "visualEmoji": "🍔",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_f_6_q8_opt1",
          "text": "At the Top (and bottom)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_f_6_q8_opt2",
          "text": "Inside the drink",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_f_6_q8_opt3",
          "text": "Under the table",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The burger bun covers the top!",
    "explanationHindi": "बर्गर का बन सबसे ऊपर (Top) होता है!",
    "points": 20
  },
  {
    "id": "lkg_ms_f_6_q9",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "F.6: Top and bottom",
    "concept": "Top and bottom",
    "difficulty": "hard",
    "type": "mcq",
    "question": "A snow mountain has white snow at its peak 🏔️. Is the snow at the TOP or BOTTOM?",
    "questionHindi": "बर्फीले पहाड़ की चोटी पर बर्फ है। बर्फ कहाँ है?",
    "visualEmoji": "🏔️",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_f_6_q9_opt1",
          "text": "At the Top peak",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_f_6_q9_opt2",
          "text": "At the Bottom valley",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_f_6_q9_opt3",
          "text": "Under the rock",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The snow rests on the mountain top!",
    "explanationHindi": "बर्फ पहाड़ की चोटी के ऊपर (Top) है!",
    "points": 20
  },
  {
    "id": "lkg_ms_f_6_q10",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "F.6: Top and bottom",
    "concept": "Top and bottom",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Look at this fraction line: 3 on top and 4 at the bottom. Where is the number 3?",
    "questionHindi": "अंक 3 ऊपर है और 4 नीचे। अंक 3 कहाँ है?",
    "visualEmoji": "3 / 4",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_f_6_q10_opt1",
          "text": "At the Top",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_f_6_q10_opt2",
          "text": "At the Bottom",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_f_6_q10_opt3",
          "text": "In the middle",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The number 3 is at the top!",
    "explanationHindi": "संख्या 3 ऊपर (Top) है!",
    "points": 20
  },
  // ==========================================================================
  // F.7: Top, middle and bottom (10 Questions)
  // ==========================================================================
  {
    "id": "lkg_ms_f_7_q1",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "F.7: Top, middle and bottom",
    "concept": "Top, middle and bottom",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Look at a 3-tier birthday cake 🎂: Top has a candle 🕯️, middle has strawberries 🍓, bottom has chocolate 🍫. What is on the TOP?",
    "questionHindi": "3-मंजिला केक: सबसे ऊपर मोमबत्ती 🕯️, बीच में स्ट्रॉबेरी 🍓, नीचे चॉकलेट 🍫। सबसे ऊपर क्या है?",
    "visualEmoji": "🎂 🕯️",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_f_7_q1_opt1",
          "text": "Candle 🕯️ (Top)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_f_7_q1_opt2",
          "text": "Strawberries 🍓 (Middle)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_f_7_q1_opt3",
          "text": "Chocolate 🍫 (Bottom)",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The candle stands at the very top of the cake!",
    "explanationHindi": "मोमबत्ती सबसे ऊपर (Top) है!",
    "points": 10
  },
  {
    "id": "lkg_ms_f_7_q2",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "F.7: Top, middle and bottom",
    "concept": "Top, middle and bottom",
    "difficulty": "easy",
    "type": "mcq",
    "question": "On the same birthday cake, what is in the MIDDLE?",
    "questionHindi": "उसी केक में बीच (Middle) में क्या है?",
    "visualEmoji": "🎂",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_f_7_q2_opt1",
          "text": "Strawberries 🍓 (Middle)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_f_7_q2_opt2",
          "text": "Candle 🕯️ (Top)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_f_7_q2_opt3",
          "text": "Chocolate 🍫 (Bottom)",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The juicy strawberries are in the middle layer!",
    "explanationHindi": "स्ट्रॉबेरी बीच (Middle) की परत में हैं!",
    "points": 10
  },
  {
    "id": "lkg_ms_f_7_q3",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "F.7: Top, middle and bottom",
    "concept": "Top, middle and bottom",
    "difficulty": "easy",
    "type": "mcq",
    "question": "On that same cake, what is at the BOTTOM?",
    "questionHindi": "उसी केक में सबसे नीचे (Bottom) क्या है?",
    "visualEmoji": "🎂",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_f_7_q3_opt1",
          "text": "Chocolate 🍫 (Bottom)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_f_7_q3_opt2",
          "text": "Candle 🕯️ (Top)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_f_7_q3_opt3",
          "text": "Strawberries 🍓 (Middle)",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The chocolate cake forms the bottom base!",
    "explanationHindi": "चॉकलेट सबसे नीचे (Bottom) की परत है!",
    "points": 10
  },
  {
    "id": "lkg_ms_f_7_q4",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "F.7: Top, middle and bottom",
    "concept": "Top, middle and bottom",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at a traffic light 🚦: Red is at top 🔴, Yellow in middle 🟡, Green at bottom 🟢. What color is in the MIDDLE?",
    "questionHindi": "ट्रैफिक लाइट 🚦: ऊपर लाल 🔴, बीच में पीला 🟡, नीचे हरा 🟢। बीच (Middle) में कौन सा रंग है?",
    "visualEmoji": "🚦 🟡",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_f_7_q4_opt1",
          "text": "Yellow 🟡 (Middle)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_f_7_q4_opt2",
          "text": "Red 🔴 (Top)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_f_7_q4_opt3",
          "text": "Green 🟢 (Bottom)",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The yellow light shines right in the middle!",
    "explanationHindi": "पीली बत्ती बीच (Middle) में होती है!",
    "points": 15
  },
  {
    "id": "lkg_ms_f_7_q5",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "F.7: Top, middle and bottom",
    "concept": "Top, middle and bottom",
    "difficulty": "medium",
    "type": "mcq",
    "question": "On the traffic light 🚦, what color is at the very TOP?",
    "questionHindi": "ट्रैफिक लाइट 🚦 में सबसे ऊपर (Top) कौन सा रंग है?",
    "visualEmoji": "🚦 🔴",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_f_7_q5_opt1",
          "text": "Red 🔴 (Top)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_f_7_q5_opt2",
          "text": "Yellow 🟡 (Middle)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_f_7_q5_opt3",
          "text": "Green 🟢 (Bottom)",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Red is at the top to tell vehicles to stop!",
    "explanationHindi": "लाल बत्ती सबसे ऊपर (Top) होती है!",
    "points": 15
  },
  {
    "id": "lkg_ms_f_7_q6",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "F.7: Top, middle and bottom",
    "concept": "Top, middle and bottom",
    "difficulty": "medium",
    "type": "mcq",
    "question": "On the traffic light 🚦, what color is at the BOTTOM?",
    "questionHindi": "ट्रैफिक लाइट 🚦 में सबसे नीचे (Bottom) कौन सा रंग है?",
    "visualEmoji": "🚦 🟢",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_f_7_q6_opt1",
          "text": "Green 🟢 (Bottom)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_f_7_q6_opt2",
          "text": "Red 🔴 (Top)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_f_7_q6_opt3",
          "text": "Yellow 🟡 (Middle)",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Green is at the bottom to tell vehicles to go!",
    "explanationHindi": "हरी बत्ती सबसे नीचे (Bottom) होती है!",
    "points": 15
  },
  {
    "id": "lkg_ms_f_7_q7",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "F.7: Top, middle and bottom",
    "concept": "Top, middle and bottom",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at a snowman ⛄: Head on top, body in middle, big snowball at bottom. Where is the carrot nose 🥕?",
    "questionHindi": "स्नोमैन ⛄: सिर ऊपर, धड़ बीच में, बड़ा गोला नीचे। गाजर की नाक 🥕 कहाँ है?",
    "visualEmoji": "⛄ 🥕",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_f_7_q7_opt1",
          "text": "At the Top (on the head)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_f_7_q7_opt2",
          "text": "In the Middle",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_f_7_q7_opt3",
          "text": "At the Bottom",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The carrot nose is on the face at the top!",
    "explanationHindi": "नाक चेहरे पर सबसे ऊपर (Top) होती है!",
    "points": 15
  },
  {
    "id": "lkg_ms_f_7_q8",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "F.7: Top, middle and bottom",
    "concept": "Top, middle and bottom",
    "difficulty": "hard",
    "type": "mcq",
    "question": "A stack of 3 colorful blocks: Red block on top, Blue block in middle, Green block at bottom. What color is in the MIDDLE?",
    "questionHindi": "3 ब्लॉकों का ढेर: ऊपर लाल, बीच में नीला, नीचे हरा। बीच में कौन सा रंग है?",
    "visualEmoji": "🟥 / 🟦 / 🟩",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_f_7_q8_opt1",
          "text": "Blue 🟦 (Middle)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_f_7_q8_opt2",
          "text": "Red 🟥 (Top)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_f_7_q8_opt3",
          "text": "Green 🟩 (Bottom)",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The blue block is in the middle!",
    "explanationHindi": "नीला ब्लॉक बीच (Middle) में है!",
    "points": 20
  },
  {
    "id": "lkg_ms_f_7_q9",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "F.7: Top, middle and bottom",
    "concept": "Top, middle and bottom",
    "difficulty": "hard",
    "type": "mcq",
    "question": "In the same stack of blocks, what color is at the BOTTOM?",
    "questionHindi": "उसी ढेर में सबसे नीचे (Bottom) कौन सा रंग है?",
    "visualEmoji": "🟥 / 🟦 / 🟩",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_f_7_q9_opt1",
          "text": "Green 🟩 (Bottom)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_f_7_q9_opt2",
          "text": "Blue 🟦 (Middle)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_f_7_q9_opt3",
          "text": "Red 🟥 (Top)",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The green block is at the bottom supporting the stack!",
    "explanationHindi": "हरा ब्लॉक सबसे नीचे (Bottom) है!",
    "points": 20
  },
  {
    "id": "lkg_ms_f_7_q10",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "F.7: Top, middle and bottom",
    "concept": "Top, middle and bottom",
    "difficulty": "hard",
    "type": "mcq",
    "question": "In India's National Flag 🇮🇳: Saffron is top, White is middle, Green is bottom. Which color is in the MIDDLE?",
    "questionHindi": "भारतीय राष्ट्रीय ध्वज 🇮🇳: ऊपर केसरिया, बीच में सफेद, नीचे हरा। बीच में कौन सा रंग है?",
    "visualEmoji": "🇮🇳",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_f_7_q10_opt1",
          "text": "White with Ashoka Chakra (Middle)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_f_7_q10_opt2",
          "text": "Saffron (Top)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_f_7_q10_opt3",
          "text": "Green (Bottom)",
          "isCorrect": false
        }
      ]
    },
    "explanation": "White is in the middle with the Ashoka Chakra!",
    "explanationHindi": "सफेद रंग बीच (Middle) में होता है!",
    "points": 20
  },
  // ==========================================================================
  // G.1: Same (10 Questions)
  // ==========================================================================
  {
    "id": "lkg_ms_g_1_q1",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "G.1: Same",
    "concept": "Same",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which shape is exactly the SAME as this red circle: 🔴?",
    "questionHindi": "इस लाल वृत्त 🔴 के बिल्कुल समान (Same) कौन सा आकार है?",
    "visualEmoji": "🔴 ❓",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_g_1_q1_opt1",
          "text": "🔴 (Red circle)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_g_1_q1_opt2",
          "text": "🟦 (Blue square)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_g_1_q1_opt3",
          "text": "🔺 (Red triangle)",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Both are red circles, so they are exactly the same!",
    "explanationHindi": "दोनों लाल वृत्त हैं, अतः बिल्कुल समान हैं!",
    "points": 10
  },
  {
    "id": "lkg_ms_g_1_q2",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "G.1: Same",
    "concept": "Same",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which fruit is the SAME as this sweet red apple: 🍎?",
    "questionHindi": "इस लाल सेब 🍎 के बिल्कुल समान कौन सा फल है?",
    "visualEmoji": "🍎 ❓",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_g_1_q2_opt1",
          "text": "🍎 (Apple)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_g_1_q2_opt2",
          "text": "🍌 (Banana)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_g_1_q2_opt3",
          "text": "🍊 (Orange)",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Both are crisp red apples, matching identically!",
    "explanationHindi": "दोनों सेब हैं, अतः समान हैं!",
    "points": 10
  },
  {
    "id": "lkg_ms_g_1_q3",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "G.1: Same",
    "concept": "Same",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which animal is the SAME as this playful puppy: 🐶?",
    "questionHindi": "इस पिल्ले 🐶 के बिल्कुल समान कौन सा जानवर है?",
    "visualEmoji": "🐶 ❓",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_g_1_q3_opt1",
          "text": "🐶 (Puppy)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_g_1_q3_opt2",
          "text": "🐱 (Cat)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_g_1_q3_opt3",
          "text": "🐸 (Frog)",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Both are dogs!",
    "explanationHindi": "दोनों पिल्ले हैं, अतः समान हैं!",
    "points": 10
  },
  {
    "id": "lkg_ms_g_1_q4",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "G.1: Same",
    "concept": "Same",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which vehicle is the SAME as this red car: 🚗?",
    "questionHindi": "इस लाल कार 🚗 के बिल्कुल समान कौन सा वाहन है?",
    "visualEmoji": "🚗 ❓",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_g_1_q4_opt1",
          "text": "🚗 (Car)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_g_1_q4_opt2",
          "text": "✈️ (Airplane)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_g_1_q4_opt3",
          "text": "🚢 (Ship)",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Both are cars!",
    "explanationHindi": "दोनों कारें हैं!",
    "points": 15
  },
  {
    "id": "lkg_ms_g_1_q5",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "G.1: Same",
    "concept": "Same",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which toy is the SAME as this cuddly teddy bear: 🧸?",
    "questionHindi": "इस टेडी बियर 🧸 के बिल्कुल समान कौन सा खिलौना है?",
    "visualEmoji": "🧸 ❓",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_g_1_q5_opt1",
          "text": "🧸 (Teddy bear)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_g_1_q5_opt2",
          "text": "⚽ (Football)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_g_1_q5_opt3",
          "text": "🪁 (Kite)",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Both are teddy bears!",
    "explanationHindi": "दोनों टेडी बियर हैं!",
    "points": 15
  },
  {
    "id": "lkg_ms_g_1_q6",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "G.1: Same",
    "concept": "Same",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Find the pair of shoes that match and are the SAME:",
    "questionHindi": "जूतों की वह जोड़ी चुनें जो बिल्कुल समान (Same) हो:",
    "visualEmoji": "👟 👟",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_g_1_q6_opt1",
          "text": "👟 👟 (Matching sneakers)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_g_1_q6_opt2",
          "text": "👟 👠 (Sneaker and high heel)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_g_1_q6_opt3",
          "text": "👟 🩴 (Sneaker and slipper)",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A matching pair of sneakers are the same!",
    "explanationHindi": "समान जूतों की जोड़ी एक जैसी होती है!",
    "points": 15
  },
  {
    "id": "lkg_ms_g_1_q7",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "G.1: Same",
    "concept": "Same",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which pair of socks are the SAME: 🧦 🧦 or 🧦 🧤?",
    "questionHindi": "कौन से मोज़े एक समान हैं: 🧦 🧦 या 🧦 🧤?",
    "visualEmoji": "🧦 🧦 vs 🧦 🧤",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_g_1_q7_opt1",
          "text": "🧦 🧦 (Both are blue socks)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_g_1_q7_opt2",
          "text": "🧦 🧤 (Sock and glove)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_g_1_q7_opt3",
          "text": "Neither",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Two blue socks match each other identically!",
    "explanationHindi": "दोनों मोज़े बिल्कुल एक जैसे हैं!",
    "points": 15
  },
  {
    "id": "lkg_ms_g_1_q8",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "G.1: Same",
    "concept": "Same",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Look at the shape: 🟦. Which shape has the SAME color and shape?",
    "questionHindi": "आकृति 🟦 देखें। किसमें समान रंग और आकार है?",
    "visualEmoji": "🟦 ❓",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_g_1_q8_opt1",
          "text": "🟦 (Blue square)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_g_1_q8_opt2",
          "text": "🟩 (Green square)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_g_1_q8_opt3",
          "text": "🔵 (Blue circle)",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Only 🟦 matches both the blue color and the square shape!",
    "explanationHindi": "केवल 🟦 का रंग और आकार दोनों समान हैं!",
    "points": 20
  },
  {
    "id": "lkg_ms_g_1_q9",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "G.1: Same",
    "concept": "Same",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Look at this pair of butterflies: 🦋 🦋. Are they the same insect?",
    "questionHindi": "इन तितलियों 🦋 🦋 को देखें। क्या वे एक ही कीट हैं?",
    "visualEmoji": "🦋 🦋",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_g_1_q9_opt1",
          "text": "Yes, both are butterflies!",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_g_1_q9_opt2",
          "text": "No, one is a bee",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_g_1_q9_opt3",
          "text": "No, one is a bird",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Both are colorful butterflies with matching wings!",
    "explanationHindi": "दोनों तितलियां हैं!",
    "points": 20
  },
  {
    "id": "lkg_ms_g_1_q10",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "G.1: Same",
    "concept": "Same",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Which set shows two shapes that are EXACTLY the same size, color and shape?",
    "questionHindi": "कौन सा सेट बिल्कुल समान आकार, रंग और रूप दिखाता है?",
    "visualEmoji": "⭐ ⭐ vs ⭐ 🌟",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_g_1_q10_opt1",
          "text": "⭐ ⭐ (Identical yellow stars)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_g_1_q10_opt2",
          "text": "⭐ 🔴 (Star and circle)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_g_1_q10_opt3",
          "text": "🔺 🟦 (Triangle and square)",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Both stars are identical in every way!",
    "explanationHindi": "दोनों तारे हर तरह से समान हैं!",
    "points": 20
  },
  // ==========================================================================
  // G.2: Different (10 Questions)
  // ==========================================================================
  {
    "id": "lkg_ms_g_2_q1",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "G.2: Different",
    "concept": "Different",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which item is DIFFERENT from the others: 🍎 🍎 🍌 🍎?",
    "questionHindi": "कौन सी वस्तु बाकी से अलग (Different) है: 🍎 🍎 🍌 🍎?",
    "visualEmoji": "🍎 🍎 🍌 🍎",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_g_2_q1_opt1",
          "text": "Banana 🍌",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_g_2_q1_opt2",
          "text": "Apple 🍎",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_g_2_q1_opt3",
          "text": "None",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The yellow banana is different from all the red apples!",
    "explanationHindi": "केला अलग फल है, बाकी सब सेब हैं!",
    "points": 10
  },
  {
    "id": "lkg_ms_g_2_q2",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "G.2: Different",
    "concept": "Different",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which shape is DIFFERENT: 🔴 🔴 🟦 🔴?",
    "questionHindi": "कौन सा आकार अलग (Different) है: 🔴 🔴 🟦 🔴?",
    "visualEmoji": "🔴 🔴 🟦 🔴",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_g_2_q2_opt1",
          "text": "Blue Square 🟦",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_g_2_q2_opt2",
          "text": "Red Circle 🔴",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_g_2_q2_opt3",
          "text": "None",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The square 🟦 has 4 straight sides, while the rest are round circles!",
    "explanationHindi": "वर्ग 🟦 अलग है क्योंकि बाकी सभी गोल वृत्त हैं!",
    "points": 10
  },
  {
    "id": "lkg_ms_g_2_q3",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "G.2: Different",
    "concept": "Different",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which animal is DIFFERENT: 🐶 🐶 🐱 🐶?",
    "questionHindi": "कौन सा जानवर अलग है: 🐶 🐶 🐱 🐶?",
    "visualEmoji": "🐶 🐶 🐱 🐶",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_g_2_q3_opt1",
          "text": "Cat 🐱",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_g_2_q3_opt2",
          "text": "Dog 🐶",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_g_2_q3_opt3",
          "text": "All same",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The cat 🐱 says meow, while the rest are barking dogs!",
    "explanationHindi": "बिल्ली 🐱 अलग है, बाकी सब कुत्ते हैं!",
    "points": 10
  },
  {
    "id": "lkg_ms_g_2_q4",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "G.2: Different",
    "concept": "Different",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which vehicle is DIFFERENT: 🚗 🚗 ✈️ 🚗?",
    "questionHindi": "कौन सा वाहन अलग है: 🚗 🚗 ✈️ 🚗?",
    "visualEmoji": "🚗 🚗 ✈️ 🚗",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_g_2_q4_opt1",
          "text": "Airplane ✈️",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_g_2_q4_opt2",
          "text": "Car 🚗",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_g_2_q4_opt3",
          "text": "None",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The airplane ✈️ flies in the sky, while cars drive on roads!",
    "explanationHindi": "हवाई जहाज ✈️ हवा में उड़ता है, अतः अलग है!",
    "points": 15
  },
  {
    "id": "lkg_ms_g_2_q5",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "G.2: Different",
    "concept": "Different",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which toy is DIFFERENT: ⚽ ⚽ ⚽ 🧸?",
    "questionHindi": "कौन सा खिलौना अलग है: ⚽ ⚽ ⚽ 🧸?",
    "visualEmoji": "⚽ ⚽ ⚽ 🧸",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_g_2_q5_opt1",
          "text": "Teddy bear 🧸",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_g_2_q5_opt2",
          "text": "Football ⚽",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_g_2_q5_opt3",
          "text": "None",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The teddy bear 🧸 is a soft plushie, while the rest are balls!",
    "explanationHindi": "टेडी बियर 🧸 अलग है!",
    "points": 15
  },
  {
    "id": "lkg_ms_g_2_q6",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "G.2: Different",
    "concept": "Different",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which color is DIFFERENT: 🔴 🔴 🟢 🔴?",
    "questionHindi": "कौन सा रंग अलग है: 🔴 🔴 🟢 🔴?",
    "visualEmoji": "🔴 🔴 🟢 🔴",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_g_2_q6_opt1",
          "text": "Green dot 🟢",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_g_2_q6_opt2",
          "text": "Red dot 🔴",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_g_2_q6_opt3",
          "text": "All same",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The green circle 🟢 has a different color from the red ones!",
    "explanationHindi": "हरा बिंदु 🟢 अलग रंग का है!",
    "points": 15
  },
  {
    "id": "lkg_ms_g_2_q7",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "G.2: Different",
    "concept": "Different",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which bird can SWIM in water while others perch on trees: 🐦 🐦 🦆 🐦?",
    "questionHindi": "कौन सा पक्षी पानी में तैरता है: 🐦 🐦 🦆 🐦?",
    "visualEmoji": "🐦 🐦 🦆 🐦",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_g_2_q7_opt1",
          "text": "Duck 🦆",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_g_2_q7_opt2",
          "text": "Sparrow 🐦",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_g_2_q7_opt3",
          "text": "None",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The duck 🦆 swims in the pond, making it different!",
    "explanationHindi": "बत्तख 🦆 पानी में तैरती है, अतः अलग है!",
    "points": 15
  },
  {
    "id": "lkg_ms_g_2_q8",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "G.2: Different",
    "concept": "Different",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Look at these shapes: 🔺 🔺 🔺 ⭕. What makes ⭕ different?",
    "questionHindi": "आकृतियां देखें: 🔺 🔺 🔺 ⭕। ⭕ क्यों अलग है?",
    "visualEmoji": "🔺 🔺 🔺 ⭕",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_g_2_q8_opt1",
          "text": "It has 0 corners (round)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_g_2_q8_opt2",
          "text": "It has 3 corners",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_g_2_q8_opt3",
          "text": "It is yellow",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The circle ⭕ has no corners, but triangles have 3 corners!",
    "explanationHindi": "वृत्त के 0 कोने होते हैं, जबकि त्रिकोण के 3 कोने होते हैं!",
    "points": 20
  },
  {
    "id": "lkg_ms_g_2_q9",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "G.2: Different",
    "concept": "Different",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Which object does NOT belong in a school bag: ✏️ 📖 📐 🪥?",
    "questionHindi": "स्कूल बैग में कौन सी चीज़ नहीं होनी चाहिए: ✏️ 📖 📐 🪥?",
    "visualEmoji": "✏️ 📖 📐 🪥",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_g_2_q9_opt1",
          "text": "Toothbrush 🪥",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_g_2_q9_opt2",
          "text": "Pencil ✏️",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_g_2_q9_opt3",
          "text": "Book 📖",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A toothbrush belongs in the bathroom, not the school bag!",
    "explanationHindi": "टूथब्रश 🪥 बाथरूम में रखा जाता है, बैग में नहीं!",
    "points": 20
  },
  {
    "id": "lkg_ms_g_2_q10",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "G.2: Different",
    "concept": "Different",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Which number is an ODD ONE OUT because it is not single-digit: 1, 2, 3, 10?",
    "questionHindi": "कौन सी संख्या अलग है क्योंकि यह 1-अंक की नहीं है: 1, 2, 3, 10?",
    "visualEmoji": "1, 2, 3, 10",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_g_2_q10_opt1",
          "text": "10 (two digits: 1 and 0)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_g_2_q10_opt2",
          "text": "1",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_g_2_q10_opt3",
          "text": "3",
          "isCorrect": false
        }
      ]
    },
    "explanation": "10 is a two-digit number, while 1, 2, 3 are single digits!",
    "explanationHindi": "10 दो अंकों की संख्या है, बाकी एक अंक की हैं!",
    "points": 20
  },
  // ==========================================================================
  // G.3: Same and different (10 Questions)
  // ==========================================================================
  {
    "id": "lkg_ms_g_3_q1",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "G.3: Same and different",
    "concept": "Same and different",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Look at a red circle 🔴 and a blue circle 🔵. How are they the SAME?",
    "questionHindi": "लाल वृत्त 🔴 और नीले वृत्त 🔵 को देखें। वे किस प्रकार समान हैं?",
    "visualEmoji": "🔴 vs 🔵",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_g_3_q1_opt1",
          "text": "Both are round circles",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_g_3_q1_opt2",
          "text": "Both are blue",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_g_3_q1_opt3",
          "text": "Both are squares",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Both shapes are round circles, even though their colors differ!",
    "explanationHindi": "दोनों गोल वृत्त हैं!",
    "points": 10
  },
  {
    "id": "lkg_ms_g_3_q2",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "G.3: Same and different",
    "concept": "Same and different",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Look at 🔴 and 🔵. How are they DIFFERENT?",
    "questionHindi": "🔴 और 🔵 किस प्रकार भिन्न (Different) हैं?",
    "visualEmoji": "🔴 vs 🔵",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_g_3_q2_opt1",
          "text": "They have different colors (red vs blue)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_g_3_q2_opt2",
          "text": "One has corners",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_g_3_q2_opt3",
          "text": "One is a square",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Their colors are different: one is red and one is blue!",
    "explanationHindi": "उनके रंग अलग-अलग हैं!",
    "points": 10
  },
  {
    "id": "lkg_ms_g_3_q3",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "G.3: Same and different",
    "concept": "Same and different",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Look at a big apple 🍎 and a small apple 🍎. How are they the same?",
    "questionHindi": "एक बड़े सेब और एक छोटे सेब में क्या समानता है?",
    "visualEmoji": "Big 🍎 vs Small 🍎",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_g_3_q3_opt1",
          "text": "Both are apples",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_g_3_q3_opt2",
          "text": "Both are squares",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_g_3_q3_opt3",
          "text": "Both are yellow",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Both are apples, even though one is big and one is small!",
    "explanationHindi": "दोनों सेब हैं!",
    "points": 10
  },
  {
    "id": "lkg_ms_g_3_q4",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "G.3: Same and different",
    "concept": "Same and different",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at a red square 🟥 and a red triangle 🔺. How are they the SAME?",
    "questionHindi": "लाल वर्ग 🟥 और लाल त्रिकोण 🔺 में क्या समानता है?",
    "visualEmoji": "🟥 vs 🔺",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_g_3_q4_opt1",
          "text": "Both have the same RED color",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_g_3_q4_opt2",
          "text": "Both have 3 corners",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_g_3_q4_opt3",
          "text": "Both are circles",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Both shapes share the same bright red color!",
    "explanationHindi": "दोनों का रंग लाल है!",
    "points": 15
  },
  {
    "id": "lkg_ms_g_3_q5",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "G.3: Same and different",
    "concept": "Same and different",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at 🟥 and 🔺. How are they DIFFERENT?",
    "questionHindi": "🟥 और 🔺 में क्या भिन्नता है?",
    "visualEmoji": "🟥 vs 🔺",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_g_3_q5_opt1",
          "text": "They have different shapes (4 sides vs 3 sides)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_g_3_q5_opt2",
          "text": "They have different colors",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_g_3_q5_opt3",
          "text": "Both roll",
          "isCorrect": false
        }
      ]
    },
    "explanation": "One is a 4-sided square, the other is a 3-sided triangle!",
    "explanationHindi": "एक वर्ग है और दूसरा त्रिकोण!",
    "points": 15
  },
  {
    "id": "lkg_ms_g_3_q6",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "G.3: Same and different",
    "concept": "Same and different",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at a bird 🐦 and an airplane ✈️. How are they the SAME?",
    "questionHindi": "पक्षी 🐦 और हवाई जहाज ✈️ में क्या समानता है?",
    "visualEmoji": "🐦 vs ✈️",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_g_3_q6_opt1",
          "text": "Both can fly high in the sky with wings",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_g_3_q6_opt2",
          "text": "Both lay eggs",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_g_3_q6_opt3",
          "text": "Both eat worms",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Both can fly up in the air!",
    "explanationHindi": "दोनों हवा में उड़ सकते हैं!",
    "points": 15
  },
  {
    "id": "lkg_ms_g_3_q7",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "G.3: Same and different",
    "concept": "Same and different",
    "difficulty": "medium",
    "type": "mcq",
    "question": "How is a bird 🐦 DIFFERENT from an airplane ✈️?",
    "questionHindi": "पक्षी 🐦 हवाई जहाज ✈️ से कैसे अलग है?",
    "visualEmoji": "🐦 vs ✈️",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_g_3_q7_opt1",
          "text": "A bird is a living animal, an airplane is a machine",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_g_3_q7_opt2",
          "text": "An airplane can fly",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_g_3_q7_opt3",
          "text": "None",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A bird is alive, but an airplane is a man-made machine!",
    "explanationHindi": "पक्षी जीवित प्राणी है, हवाई जहाज मशीन है!",
    "points": 15
  },
  {
    "id": "lkg_ms_g_3_q8",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "G.3: Same and different",
    "concept": "Same and different",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Look at a dice 🎲 and a cardboard box 📦. How are they the same?",
    "questionHindi": "पासा 🎲 और डिब्बा 📦 किस प्रकार समान हैं?",
    "visualEmoji": "🎲 vs 📦",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_g_3_q8_opt1",
          "text": "Both have square box shapes with corners",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_g_3_q8_opt2",
          "text": "Both are made of metal",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_g_3_q8_opt3",
          "text": "Both can roll",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Both are 3D cube/box shapes with flat faces and corners!",
    "explanationHindi": "दोनों चौकोर डिब्बे के आकार के हैं!",
    "points": 20
  },
  {
    "id": "lkg_ms_g_3_q9",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "G.3: Same and different",
    "concept": "Same and different",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Look at a soccer ball ⚽ and an orange 🍊. How are they the same?",
    "questionHindi": "फुटबॉल ⚽ और संतरा 🍊 किस प्रकार समान हैं?",
    "visualEmoji": "⚽ vs 🍊",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_g_3_q9_opt1",
          "text": "Both are round sphere shapes that can roll",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_g_3_q9_opt2",
          "text": "Both can be eaten",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_g_3_q9_opt3",
          "text": "Both are black and white",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Both are round like balls and can roll on the floor!",
    "explanationHindi": "दोनों गोल हैं और लुढ़क सकते हैं!",
    "points": 20
  },
  {
    "id": "lkg_ms_g_3_q10",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "G.3: Same and different",
    "concept": "Same and different",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Two children wear the same school uniform 👕 👕. How are they different?",
    "questionHindi": "दो बच्चे समान वर्दी 👕 👕 पहनते हैं। वे अलग कैसे हो सकते हैं?",
    "visualEmoji": "👕 👕",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_g_3_q10_opt1",
          "text": "One may be taller, have different hair, or different shoes",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_g_3_q10_opt2",
          "text": "They are clones",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_g_3_q10_opt3",
          "text": "No difference",
          "isCorrect": false
        }
      ]
    },
    "explanation": "People are unique! They may have different heights or faces.",
    "explanationHindi": "उनकी लंबाई या चेहरे अलग हो सकते हैं!",
    "points": 20
  },
  // ==========================================================================
  // G.4: Classify shapes by color (10 Questions)
  // ==========================================================================
  {
    "id": "lkg_ms_g_4_q1",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "G.4: Classify shapes by color",
    "concept": "Classify shapes by color",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which shape belongs in the RED team: 🔴 🟦 🟩?",
    "questionHindi": "लाल रंग की टीम में कौन सा आकार जाएगा: 🔴 🟦 🟩?",
    "visualEmoji": "🔴 🟦 🟩",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_g_4_q1_opt1",
          "text": "Red Circle 🔴",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_g_4_q1_opt2",
          "text": "Blue Square 🟦",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_g_4_q1_opt3",
          "text": "Green Square 🟩",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The red circle 🔴 goes with other red shapes!",
    "explanationHindi": "लाल वृत्त 🔴 लाल रंग की टीम में जाएगा!",
    "points": 10
  },
  {
    "id": "lkg_ms_g_4_q2",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "G.4: Classify shapes by color",
    "concept": "Classify shapes by color",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which shape belongs in the BLUE team: 🔺 🔵 🟡?",
    "questionHindi": "नीले रंग की टीम में कौन सा आकार जाएगा: 🔺 🔵 🟡?",
    "visualEmoji": "🔺 🔵 🟡",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_g_4_q2_opt1",
          "text": "Blue Circle 🔵",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_g_4_q2_opt2",
          "text": "Red Triangle 🔺",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_g_4_q2_opt3",
          "text": "Yellow Circle 🟡",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The blue circle 🔵 belongs in the blue group!",
    "explanationHindi": "नीला वृत्त 🔵 नीले समूह में जाएगा!",
    "points": 10
  },
  {
    "id": "lkg_ms_g_4_q3",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "G.4: Classify shapes by color",
    "concept": "Classify shapes by color",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which shape belongs in the YELLOW team: 🟨 🔴 🟦?",
    "questionHindi": "पीले रंग की टीम में कौन सा आकार जाएगा: 🟨 🔴 🟦?",
    "visualEmoji": "🟨 🔴 🟦",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_g_4_q3_opt1",
          "text": "Yellow Square 🟨",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_g_4_q3_opt2",
          "text": "Red Circle 🔴",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_g_4_q3_opt3",
          "text": "Blue Square 🟦",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The yellow square 🟨 belongs in the yellow team!",
    "explanationHindi": "पीला वर्ग 🟨 पीली टीम में जाएगा!",
    "points": 10
  },
  {
    "id": "lkg_ms_g_4_q4",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "G.4: Classify shapes by color",
    "concept": "Classify shapes by color",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Sort by color: How many GREEN shapes are in this group: 🟩 🟢 🔺 🟩?",
    "questionHindi": "रंग के आधार पर छाँटें: इस समूह में कितने हरे (Green) आकार हैं: 🟩 🟢 🔺 🟩?",
    "visualEmoji": "🟩 🟢 🔺 🟩",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_g_4_q4_opt1",
          "text": "3 green shapes",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_g_4_q4_opt2",
          "text": "2 green shapes",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_g_4_q4_opt3",
          "text": "1 green shape",
          "isCorrect": false
        }
      ]
    },
    "explanation": "There are 2 green squares and 1 green circle = 3 green shapes!",
    "explanationHindi": "2 हरे वर्ग + 1 हरा वृत्त = कुल 3 हरे आकार!",
    "points": 15
  },
  {
    "id": "lkg_ms_g_4_q5",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "G.4: Classify shapes by color",
    "concept": "Classify shapes by color",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Sort by color: How many RED shapes are here: 🔴 🔺 🔴 🟦 🔴?",
    "questionHindi": "यहाँ कितने लाल (Red) आकार हैं: 🔴 🔺 🔴 🟦 🔴?",
    "visualEmoji": "🔴 🔺 🔴 🟦 🔴",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_g_4_q5_opt1",
          "text": "4 red shapes",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_g_4_q5_opt2",
          "text": "3 red shapes",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_g_4_q5_opt3",
          "text": "2 red shapes",
          "isCorrect": false
        }
      ]
    },
    "explanation": "3 red circles + 1 red triangle = 4 red shapes in total!",
    "explanationHindi": "3 लाल वृत्त + 1 लाल त्रिकोण = कुल 4 लाल आकार!",
    "points": 15
  },
  {
    "id": "lkg_ms_g_4_q6",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "G.4: Classify shapes by color",
    "concept": "Classify shapes by color",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which group contains ONLY blue shapes?",
    "questionHindi": "किस समूह में केवल नीले (Blue) आकार हैं?",
    "visualEmoji": "🔵 🟦 🔹",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_g_4_q6_opt1",
          "text": "🔵 🟦 🔹 (All blue)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_g_4_q6_opt2",
          "text": "🔴 🟦 🟡",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_g_4_q6_opt3",
          "text": "🟩 🟩 🔴",
          "isCorrect": false
        }
      ]
    },
    "explanation": "All shapes in this group are colored blue!",
    "explanationHindi": "इस समूह के सभी आकार नीले हैं!",
    "points": 15
  },
  {
    "id": "lkg_ms_g_4_q7",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "G.4: Classify shapes by color",
    "concept": "Classify shapes by color",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which group contains ONLY yellow shapes?",
    "questionHindi": "किस समूह में केवल पीले (Yellow) आकार हैं?",
    "visualEmoji": "🟡 ⭐ 🟨",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_g_4_q7_opt1",
          "text": "🟡 ⭐ 🟨 (All yellow)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_g_4_q7_opt2",
          "text": "🔴 🟡 🔵",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_g_4_q7_opt3",
          "text": "🟩 🟩 🟩",
          "isCorrect": false
        }
      ]
    },
    "explanation": "All shapes in this group shine yellow!",
    "explanationHindi": "इस समूह के सभी आकार पीले हैं!",
    "points": 15
  },
  {
    "id": "lkg_ms_g_4_q8",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "G.4: Classify shapes by color",
    "concept": "Classify shapes by color",
    "difficulty": "hard",
    "type": "mcq",
    "question": "A box is for ORANGE shapes only 🟧. Which object can go inside: 🍊 or 🫐?",
    "questionHindi": "डिब्बा केवल नारंगी आकारों के लिए है। कौन सी वस्तु अंदर जा सकती है?",
    "visualEmoji": "🟧 : 🍊 vs 🫐",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_g_4_q8_opt1",
          "text": "Orange 🍊",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_g_4_q8_opt2",
          "text": "Blueberry 🫐",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_g_4_q8_opt3",
          "text": "Green apple 🍏",
          "isCorrect": false
        }
      ]
    },
    "explanation": "An orange matches the orange color bin!",
    "explanationHindi": "संतरा नारंगी रंग से मेल खाता है!",
    "points": 20
  },
  {
    "id": "lkg_ms_g_4_q9",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "G.4: Classify shapes by color",
    "concept": "Classify shapes by color",
    "difficulty": "hard",
    "type": "mcq",
    "question": "You have mixed shapes: 🔴 🔵 🔴 🔵 🔴. How many go in the RED basket?",
    "questionHindi": "मिश्रित आकार हैं: 🔴 🔵 🔴 🔵 🔴। लाल टोकरी में कितने जाएंगे?",
    "visualEmoji": "🔴 🔵 🔴 🔵 🔴",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_g_4_q9_opt1",
          "text": "3 red shapes",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_g_4_q9_opt2",
          "text": "2 red shapes",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_g_4_q9_opt3",
          "text": "4 red shapes",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Count the red ones: 1, 2, 3 red shapes!",
    "explanationHindi": "लाल आकार गिनें: 1, 2, 3!",
    "points": 20
  },
  {
    "id": "lkg_ms_g_4_q10",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "G.4: Classify shapes by color",
    "concept": "Classify shapes by color",
    "difficulty": "hard",
    "type": "mcq",
    "question": "In that same group: 🔴 🔵 🔴 🔵 🔴, how many go in the BLUE basket?",
    "questionHindi": "उसी समूह में: 🔴 🔵 🔴 🔵 🔴, नीली टोकरी में कितने जाएंगे?",
    "visualEmoji": "🔴 🔵 🔴 🔵 🔴",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_g_4_q10_opt1",
          "text": "2 blue shapes",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_g_4_q10_opt2",
          "text": "3 blue shapes",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_g_4_q10_opt3",
          "text": "1 blue shape",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Count the blue ones: 1, 2 blue shapes!",
    "explanationHindi": "नीले आकार गिनें: 1, 2!",
    "points": 20
  },
  // ==========================================================================
  // G.5: Classify and sort by shape (10 Questions)
  // ==========================================================================
  {
    "id": "lkg_ms_g_5_q1",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "G.5: Classify and sort by shape",
    "concept": "Classify and sort by shape",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Sort by shape: Which object goes into the CIRCLE bin: ⚽ or 📦?",
    "questionHindi": "आकार के आधार पर छाँटें: वृत्त (Circle) वाले डिब्बे में क्या जाएगा: ⚽ या 📦?",
    "visualEmoji": "⚽ vs 📦",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_g_5_q1_opt1",
          "text": "Ball ⚽ (Round circle)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_g_5_q1_opt2",
          "text": "Box 📦 (Square)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_g_5_q1_opt3",
          "text": "None",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The round soccer ball goes into the circle bin!",
    "explanationHindi": "गोल फुटबॉल वृत्त वाले डिब्बे में जाएगी!",
    "points": 10
  },
  {
    "id": "lkg_ms_g_5_q2",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "G.5: Classify and sort by shape",
    "concept": "Classify and sort by shape",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which object goes into the SQUARE bin: 🎲 or ⚽?",
    "questionHindi": "वर्ग (Square) वाले डिब्बे में क्या जाएगा: 🎲 या ⚽?",
    "visualEmoji": "🎲 vs ⚽",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_g_5_q2_opt1",
          "text": "Dice 🎲 (Square)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_g_5_q2_opt2",
          "text": "Ball ⚽ (Circle)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_g_5_q2_opt3",
          "text": "None",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The square dice goes into the square bin!",
    "explanationHindi": "चौकोर पासा वर्ग वाले डिब्बे में जाएगा!",
    "points": 10
  },
  {
    "id": "lkg_ms_g_5_q3",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "G.5: Classify and sort by shape",
    "concept": "Classify and sort by shape",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which object goes into the TRIANGLE bin: 🍕 slice or 🍩 donut?",
    "questionHindi": "त्रिकोण वाले डिब्बे में क्या जाएगा: पिज़्ज़ा स्लाइस 🍕 या डोनट 🍩?",
    "visualEmoji": "🍕 vs 🍩",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_g_5_q3_opt1",
          "text": "Pizza Slice 🍕 (Triangle)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_g_5_q3_opt2",
          "text": "Donut 🍩 (Circle)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_g_5_q3_opt3",
          "text": "None",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A 3-cornered pizza slice belongs with triangles!",
    "explanationHindi": "3 कोनों वाली पिज़्ज़ा स्लाइस त्रिकोण के समूह में जाएगी!",
    "points": 10
  },
  {
    "id": "lkg_ms_g_5_q4",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "G.5: Classify and sort by shape",
    "concept": "Classify and sort by shape",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Sort this mixed pile: 🔴 🟦 🔴 🔴 🟦. How many CIRCLES are there?",
    "questionHindi": "इस ढेर को छाँटें: 🔴 🟦 🔴 🔴 🟦। इसमें कितने वृत्त (Circles) हैं?",
    "visualEmoji": "🔴 🟦 🔴 🔴 🟦",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_g_5_q4_opt1",
          "text": "3 circles",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_g_5_q4_opt2",
          "text": "2 circles",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_g_5_q4_opt3",
          "text": "4 circles",
          "isCorrect": false
        }
      ]
    },
    "explanation": "There are 3 circles and 2 squares!",
    "explanationHindi": "यहाँ 3 वृत्त और 2 वर्ग हैं!",
    "points": 15
  },
  {
    "id": "lkg_ms_g_5_q5",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "G.5: Classify and sort by shape",
    "concept": "Classify and sort by shape",
    "difficulty": "medium",
    "type": "mcq",
    "question": "In that same pile: 🔴 🟦 🔴 🔴 🟦, how many SQUARES are there?",
    "questionHindi": "उसी ढेर में: 🔴 🟦 🔴 🔴 🟦, कितने वर्ग (Squares) हैं?",
    "visualEmoji": "🔴 🟦 🔴 🔴 🟦",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_g_5_q5_opt1",
          "text": "2 squares",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_g_5_q5_opt2",
          "text": "3 squares",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_g_5_q5_opt3",
          "text": "1 square",
          "isCorrect": false
        }
      ]
    },
    "explanation": "There are 2 blue squares!",
    "explanationHindi": "यहाँ 2 नीले वर्ग हैं!",
    "points": 15
  },
  {
    "id": "lkg_ms_g_5_q6",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "G.5: Classify and sort by shape",
    "concept": "Classify and sort by shape",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which shape does NOT belong in the Triangle bin: 🔺 🔺 🟦 🔺?",
    "questionHindi": "त्रिकोण वाले डिब्बे में कौन सा आकार नहीं जाएगा: 🔺 🔺 🟦 🔺?",
    "visualEmoji": "🔺 🔺 🟦 🔺",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_g_5_q6_opt1",
          "text": "Square 🟦",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_g_5_q6_opt2",
          "text": "Triangle 🔺",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_g_5_q6_opt3",
          "text": "None",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The square 🟦 has 4 sides and belongs in the square bin!",
    "explanationHindi": "वर्ग 🟦 में 4 भुजाएं हैं अतः यह अलग है!",
    "points": 15
  },
  {
    "id": "lkg_ms_g_5_q7",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "G.5: Classify and sort by shape",
    "concept": "Classify and sort by shape",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which shape does NOT belong in the Circle bin: 🔴 🔴 🔺 🔴?",
    "questionHindi": "वृत्त वाले डिब्बे में कौन सा आकार नहीं जाएगा: 🔴 🔴 🔺 🔴?",
    "visualEmoji": "🔴 🔴 🔺 🔴",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_g_5_q7_opt1",
          "text": "Triangle 🔺",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_g_5_q7_opt2",
          "text": "Circle 🔴",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_g_5_q7_opt3",
          "text": "None",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The triangle 🔺 has 3 corners and cannot go with circles!",
    "explanationHindi": "त्रिकोण 🔺 वृत्त के डिब्बे में नहीं जा सकता!",
    "points": 15
  },
  {
    "id": "lkg_ms_g_5_q8",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "G.5: Classify and sort by shape",
    "concept": "Classify and sort by shape",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Sort by shape: You have 4 triangles 🔺, 3 circles 🔴, and 2 squares 🟦. Which shape has the MOST?",
    "questionHindi": "छाँटें: 4 त्रिकोण, 3 वृत्त, और 2 वर्ग। किस आकार की संख्या सबसे अधिक है?",
    "visualEmoji": "4 triangles, 3 circles, 2 squares",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_g_5_q8_opt1",
          "text": "Triangles 🔺 (4)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_g_5_q8_opt2",
          "text": "Circles 🔴 (3)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_g_5_q8_opt3",
          "text": "Squares 🟦 (2)",
          "isCorrect": false
        }
      ]
    },
    "explanation": "4 is the largest number, so triangles have the most!",
    "explanationHindi": "4 सबसे बड़ी संख्या है, अतः त्रिकोण सबसे अधिक हैं!",
    "points": 20
  },
  {
    "id": "lkg_ms_g_5_q9",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "G.5: Classify and sort by shape",
    "concept": "Classify and sort by shape",
    "difficulty": "hard",
    "type": "mcq",
    "question": "In that same collection (4 triangles, 3 circles, 2 squares), which shape has the FEWEST?",
    "questionHindi": "उसी संग्रह में, किस आकार की संख्या सबसे कम (Fewest) है?",
    "visualEmoji": "4 triangles, 3 circles, 2 squares",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_g_5_q9_opt1",
          "text": "Squares 🟦 (2)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_g_5_q9_opt2",
          "text": "Circles 🔴 (3)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_g_5_q9_opt3",
          "text": "Triangles 🔺 (4)",
          "isCorrect": false
        }
      ]
    },
    "explanation": "2 is the smallest number, so squares are the fewest!",
    "explanationHindi": "2 सबसे छोटी संख्या है, अतः वर्ग सबसे कम हैं!",
    "points": 20
  },
  {
    "id": "lkg_ms_g_5_q10",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "G.5: Classify and sort by shape",
    "concept": "Classify and sort by shape",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Which group contains ONLY shapes with zero corners?",
    "questionHindi": "किस समूह में केवल बिना कोने वाले (0 corners) आकार हैं?",
    "visualEmoji": "🔴 🟡 🔵",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_g_5_q10_opt1",
          "text": "Circles 🔴 🟡 🔵 (0 corners)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_g_5_q10_opt2",
          "text": "Squares 🟦 (4 corners)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_g_5_q10_opt3",
          "text": "Triangles 🔺 (3 corners)",
          "isCorrect": false
        }
      ]
    },
    "explanation": "All circles have zero corners!",
    "explanationHindi": "सभी वृत्तों के 0 कोने होते हैं!",
    "points": 20
  },
  // ==========================================================================
  // G.6: Classify and sort by color (10 Questions)
  // ==========================================================================
  {
    "id": "lkg_ms_g_6_q1",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "G.6: Classify and sort by color",
    "concept": "Classify and sort by color",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Sort by color: Which fruit goes into the RED basket: 🍎 or 🍌?",
    "questionHindi": "रंग से छाँटें: लाल टोकरी में कौन सा फल जाएगा: 🍎 या 🍌?",
    "visualEmoji": "🍎 vs 🍌",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_g_6_q1_opt1",
          "text": "Red Apple 🍎",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_g_6_q1_opt2",
          "text": "Yellow Banana 🍌",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_g_6_q1_opt3",
          "text": "None",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The red apple 🍎 belongs in the red basket!",
    "explanationHindi": "लाल सेब 🍎 लाल टोकरी में जाएगा!",
    "points": 10
  },
  {
    "id": "lkg_ms_g_6_q2",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "G.6: Classify and sort by color",
    "concept": "Classify and sort by color",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which fruit goes into the YELLOW basket: 🍌 or 🍇?",
    "questionHindi": "पीली टोकरी में कौन सा फल जाएगा: 🍌 या 🍇?",
    "visualEmoji": "🍌 vs 🍇",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_g_6_q2_opt1",
          "text": "Yellow Banana 🍌",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_g_6_q2_opt2",
          "text": "Purple Grapes 🍇",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_g_6_q2_opt3",
          "text": "None",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The yellow banana 🍌 belongs in the yellow basket!",
    "explanationHindi": "पीला केला 🍌 पीली टोकरी में जाएगा!",
    "points": 10
  },
  {
    "id": "lkg_ms_g_6_q3",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "G.6: Classify and sort by color",
    "concept": "Classify and sort by color",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which fruit goes into the GREEN basket: 🍏 or 🍓?",
    "questionHindi": "हरी टोकरी में कौन सा फल जाएगा: 🍏 या 🍓?",
    "visualEmoji": "🍏 vs 🍓",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_g_6_q3_opt1",
          "text": "Green Apple 🍏",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_g_6_q3_opt2",
          "text": "Red Strawberry 🍓",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_g_6_q3_opt3",
          "text": "None",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The green apple 🍏 goes in the green basket!",
    "explanationHindi": "हरा सेब 🍏 हरी टोकरी में जाएगा!",
    "points": 10
  },
  {
    "id": "lkg_ms_g_6_q4",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "G.6: Classify and sort by color",
    "concept": "Classify and sort by color",
    "difficulty": "medium",
    "type": "mcq",
    "question": "You have mixed toys: 🔴 ball, 🔵 car, 🔴 teddy, 🔵 boat. How many RED toys?",
    "questionHindi": "मिश्रित खिलौने: 🔴 गेंद, 🔵 कार, 🔴 टेडी, 🔵 नाव। कितने लाल खिलौने हैं?",
    "visualEmoji": "🔴 🔵 🔴 🔵",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_g_6_q4_opt1",
          "text": "2 red toys",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_g_6_q4_opt2",
          "text": "3 red toys",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_g_6_q4_opt3",
          "text": "1 red toy",
          "isCorrect": false
        }
      ]
    },
    "explanation": "There are 2 red toys and 2 blue toys!",
    "explanationHindi": "यहाँ 2 लाल खिलौने हैं!",
    "points": 15
  },
  {
    "id": "lkg_ms_g_6_q5",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "G.6: Classify and sort by color",
    "concept": "Classify and sort by color",
    "difficulty": "medium",
    "type": "mcq",
    "question": "In that same toy set (🔴 🔵 🔴 🔵), how many BLUE toys are there?",
    "questionHindi": "उसी खिलौना सेट में कितने नीले (Blue) खिलौने हैं?",
    "visualEmoji": "🔴 🔵 🔴 🔵",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_g_6_q5_opt1",
          "text": "2 blue toys",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_g_6_q5_opt2",
          "text": "3 blue toys",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_g_6_q5_opt3",
          "text": "1 blue toy",
          "isCorrect": false
        }
      ]
    },
    "explanation": "There are 2 blue toys!",
    "explanationHindi": "यहाँ 2 नीले खिलौने हैं!",
    "points": 15
  },
  {
    "id": "lkg_ms_g_6_q6",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "G.6: Classify and sort by color",
    "concept": "Classify and sort by color",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which object does NOT belong in the Green bin: 🍃 🐸 🍓 🥒?",
    "questionHindi": "हरे डिब्बे में कौन सी वस्तु नहीं जाएगी: 🍃 🐸 🍓 🥒?",
    "visualEmoji": "🍃 🐸 🍓 🥒",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_g_6_q6_opt1",
          "text": "Red Strawberry 🍓",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_g_6_q6_opt2",
          "text": "Green Leaf 🍃",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_g_6_q6_opt3",
          "text": "Green Frog 🐸",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The strawberry 🍓 is red, so it cannot go in the green bin!",
    "explanationHindi": "स्ट्रॉबेरी 🍓 लाल है, अतः यह हरी टोकरी में नहीं जा सकती!",
    "points": 15
  },
  {
    "id": "lkg_ms_g_6_q7",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "G.6: Classify and sort by color",
    "concept": "Classify and sort by color",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Sort by color: How many YELLOW items are here: 🌻 🍋 🍌 🍎?",
    "questionHindi": "यहाँ कितनी पीली वस्तुएं हैं: 🌻 🍋 🍌 🍎?",
    "visualEmoji": "🌻 🍋 🍌 🍎",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_g_6_q7_opt1",
          "text": "3 yellow items",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_g_6_q7_opt2",
          "text": "2 yellow items",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_g_6_q7_opt3",
          "text": "4 yellow items",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Sunflower 🌻, Lemon 🍋, and Banana 🍌 are all yellow = 3 items!",
    "explanationHindi": "सूरजमुखी, नींबू और केला पीले हैं = 3 वस्तुएं!",
    "points": 15
  },
  {
    "id": "lkg_ms_g_6_q8",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "G.6: Classify and sort by color",
    "concept": "Classify and sort by color",
    "difficulty": "hard",
    "type": "mcq",
    "question": "A laundry basket has 4 white shirts 👕 and 3 blue shirts 👔. Which color shirt has MORE?",
    "questionHindi": "कपड़ों की टोकरी में 4 सफेद शर्ट और 3 नीली शर्ट हैं। किस रंग की शर्ट अधिक है?",
    "visualEmoji": "4 white vs 3 blue",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_g_6_q8_opt1",
          "text": "White shirts 👕 (4)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_g_6_q8_opt2",
          "text": "Blue shirts 👔 (3)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_g_6_q8_opt3",
          "text": "Both are equal",
          "isCorrect": false
        }
      ]
    },
    "explanation": "4 white shirts is more than 3 blue shirts!",
    "explanationHindi": "4 सफेद शर्ट 3 नीली शर्ट से अधिक हैं!",
    "points": 20
  },
  {
    "id": "lkg_ms_g_6_q9",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "G.6: Classify and sort by color",
    "concept": "Classify and sort by color",
    "difficulty": "hard",
    "type": "mcq",
    "question": "You sort balloons by color: 5 pink balloons 🎈 and 5 yellow balloons 🎈. How do they compare?",
    "questionHindi": "गुब्बारों को रंग से छाँटा: 5 गुलाबी और 5 पीले। इनकी तुलना कैसे होगी?",
    "visualEmoji": "5 pink vs 5 yellow",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_g_6_q9_opt1",
          "text": "They are EQUAL (5 = 5)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_g_6_q9_opt2",
          "text": "Pink is more",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_g_6_q9_opt3",
          "text": "Yellow is more",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Both colors have 5 balloons, so they are equal!",
    "explanationHindi": "दोनों रंगों के 5-5 गुब्बारे हैं, अतः बराबर हैं!",
    "points": 20
  },
  {
    "id": "lkg_ms_g_6_q10",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "G.6: Classify and sort by color",
    "concept": "Classify and sort by color",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Sort 8 crayons: 5 blue crayons and 3 red crayons. How many MORE blue crayons are there?",
    "questionHindi": "8 मोमी रंग: 5 नीले और 3 लाल। नीले रंग कितने अधिक हैं?",
    "visualEmoji": "5 - 3",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_g_6_q10_opt1",
          "text": "2 more blue crayons",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_g_6_q10_opt2",
          "text": "1 more",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_g_6_q10_opt3",
          "text": "3 more",
          "isCorrect": false
        }
      ]
    },
    "explanation": "5 - 3 = 2 more blue crayons!",
    "explanationHindi": "5 - 3 = 2 नीले रंग अधिक हैं!",
    "points": 20
  },
  // ==========================================================================
  // H.1: Color patterns (10 Questions)
  // ==========================================================================
  {
    "id": "lkg_ms_h_1_q1",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "H.1: Color patterns",
    "concept": "Color patterns",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Look at the color pattern: 🔴 🔵 🔴 🔵 🔴 ❓. What color comes next?",
    "questionHindi": "रंग पैटर्न देखें: 🔴 🔵 🔴 🔵 🔴 ❓। अगला कौन सा रंग आएगा?",
    "visualEmoji": "🔴 🔵 🔴 🔵 🔴 ❓",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_h_1_q1_opt1",
          "text": "Blue 🔵",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_h_1_q1_opt2",
          "text": "Red 🔴",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_h_1_q1_opt3",
          "text": "Yellow 🟡",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The pattern alternates Red, Blue, Red, Blue, Red... so next is Blue 🔵!",
    "explanationHindi": "पैटर्न लाल-नीला-लाल-नीला है, अतः अगला नीला 🔵 आएगा!",
    "points": 10
  },
  {
    "id": "lkg_ms_h_1_q2",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "H.1: Color patterns",
    "concept": "Color patterns",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Look at the pattern: 🟡 🟢 🟡 🟢 🟡 ❓. What color comes next?",
    "questionHindi": "पैटर्न देखें: 🟡 🟢 🟡 🟢 🟡 ❓। अगला रंग क्या है?",
    "visualEmoji": "🟡 🟢 🟡 🟢 🟡 ❓",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_h_1_q2_opt1",
          "text": "Green 🟢",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_h_1_q2_opt2",
          "text": "Yellow 🟡",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_h_1_q2_opt3",
          "text": "Red 🔴",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Yellow, Green, Yellow, Green, Yellow... next is Green 🟢!",
    "explanationHindi": "पीला, हरा, पीला, हरा, पीला... अगला हरा 🟢 है!",
    "points": 10
  },
  {
    "id": "lkg_ms_h_1_q3",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "H.1: Color patterns",
    "concept": "Color patterns",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Look at this pattern: 🍎 🍌 🍎 🍌 🍎 ❓. Which fruit comes next?",
    "questionHindi": "पैटर्न देखें: 🍎 🍌 🍎 🍌 🍎 ❓। अगला फल कौन सा है?",
    "visualEmoji": "🍎 🍌 🍎 🍌 🍎 ❓",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_h_1_q3_opt1",
          "text": "Banana 🍌",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_h_1_q3_opt2",
          "text": "Apple 🍎",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_h_1_q3_opt3",
          "text": "Orange 🍊",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Apple, Banana, Apple, Banana... next is Banana 🍌!",
    "explanationHindi": "सेब, केला, सेब, केला... अगला केला 🍌 है!",
    "points": 10
  },
  {
    "id": "lkg_ms_h_1_q4",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "H.1: Color patterns",
    "concept": "Color patterns",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at this pattern: 🔴 🔴 🔵 🔴 🔴 ❓. What color comes next?",
    "questionHindi": "पैटर्न देखें: 🔴 🔴 🔵 🔴 🔴 ❓। अगला रंग क्या होगा?",
    "visualEmoji": "🔴 🔴 🔵 🔴 🔴 ❓",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_h_1_q4_opt1",
          "text": "Blue 🔵",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_h_1_q4_opt2",
          "text": "Red 🔴",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_h_1_q4_opt3",
          "text": "Green 🟢",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Two reds, one blue, two reds... next is Blue 🔵!",
    "explanationHindi": "दो लाल, एक नीला, दो लाल... अगला नीला 🔵 है!",
    "points": 15
  },
  {
    "id": "lkg_ms_h_1_q5",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "H.1: Color patterns",
    "concept": "Color patterns",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at this pattern: 🟢 🟢 🟡 🟢 🟢 ❓. What color comes next?",
    "questionHindi": "पैटर्न देखें: 🟢 🟢 🟡 🟢 🟢 ❓। अगला रंग क्या है?",
    "visualEmoji": "🟢 🟢 🟡 🟢 🟢 ❓",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_h_1_q5_opt1",
          "text": "Yellow 🟡",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_h_1_q5_opt2",
          "text": "Green 🟢",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_h_1_q5_opt3",
          "text": "Blue 🔵",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Two greens, one yellow, two greens... next is Yellow 🟡!",
    "explanationHindi": "दो हरे, एक पीला, दो हरे... अगला पीला 🟡 है!",
    "points": 15
  },
  {
    "id": "lkg_ms_h_1_q6",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "H.1: Color patterns",
    "concept": "Color patterns",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which pattern repeats: Red, Yellow, Red, Yellow?",
    "questionHindi": "कौन सा पैटर्न लाल, पीला, लाल, पीला दोहराता है?",
    "visualEmoji": "🔴 🟡 🔴 🟡",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_h_1_q6_opt1",
          "text": "🔴 🟡 🔴 🟡",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_h_1_q6_opt2",
          "text": "🔴 🔴 🟡 🟡",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_h_1_q6_opt3",
          "text": "🔴 🔵 🔴 🔵",
          "isCorrect": false
        }
      ]
    },
    "explanation": "🔴 🟡 🔴 🟡 matches Red, Yellow alternating!",
    "explanationHindi": "🔴 🟡 🔴 🟡 लाल और पीले का दोहराव है!",
    "points": 15
  },
  {
    "id": "lkg_ms_h_1_q7",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "H.1: Color patterns",
    "concept": "Color patterns",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at a 3-color pattern: 🔴 🟡 🔵 🔴 🟡 ❓. What color comes next?",
    "questionHindi": "3-रंगों का पैटर्न: 🔴 🟡 🔵 🔴 🟡 ❓। अगला क्या आएगा?",
    "visualEmoji": "🔴 🟡 🔵 🔴 🟡 ❓",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_h_1_q7_opt1",
          "text": "Blue 🔵",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_h_1_q7_opt2",
          "text": "Red 🔴",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_h_1_q7_opt3",
          "text": "Yellow 🟡",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Red, Yellow, Blue, Red, Yellow... next is Blue 🔵!",
    "explanationHindi": "लाल, पीला, नीला, लाल, पीला... अगला नीला 🔵 है!",
    "points": 15
  },
  {
    "id": "lkg_ms_h_1_q8",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "H.1: Color patterns",
    "concept": "Color patterns",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Look at: 💜 🩷 💜 🩷 💜 ❓. What color heart comes next?",
    "questionHindi": "पैटर्न: 💜 🩷 💜 🩷 💜 ❓। अगला दिल किस रंग का होगा?",
    "visualEmoji": "💜 🩷 💜 🩷 💜 ❓",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_h_1_q8_opt1",
          "text": "Pink Heart 🩷",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_h_1_q8_opt2",
          "text": "Purple Heart 💜",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_h_1_q8_opt3",
          "text": "Red Heart ❤️",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Purple, Pink, Purple, Pink, Purple... next is Pink 🩷!",
    "explanationHindi": "बैंगनी, गुलाबी, बैंगनी, गुलाबी... अगला गुलाबी 🩷 है!",
    "points": 20
  },
  {
    "id": "lkg_ms_h_1_q9",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "H.1: Color patterns",
    "concept": "Color patterns",
    "difficulty": "hard",
    "type": "mcq",
    "question": "In the pattern ⚪ ⚫ ⚪ ⚫ ⚪ ⚫, how many white circles are there?",
    "questionHindi": "पैटर्न ⚪ ⚫ ⚪ ⚫ ⚪ ⚫ में कितने सफेद वृत्त हैं?",
    "visualEmoji": "⚪ ⚫ ⚪ ⚫ ⚪ ⚫",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_h_1_q9_opt1",
          "text": "3 white circles",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_h_1_q9_opt2",
          "text": "2 white circles",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_h_1_q9_opt3",
          "text": "4 white circles",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Count the white circles: 1, 2, 3!",
    "explanationHindi": "सफेद वृत्त गिनें: 1, 2, 3!",
    "points": 20
  },
  {
    "id": "lkg_ms_h_1_q10",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "H.1: Color patterns",
    "concept": "Color patterns",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Find the broken piece in this pattern: 🔴 🔵 🔴 🟢 🔴 🔵. Which color broke the pattern?",
    "questionHindi": "पैटर्न में गलती ढूंढें: 🔴 🔵 🔴 🟢 🔴 🔵। किस रंग ने पैटर्न तोड़ा?",
    "visualEmoji": "🔴 🔵 🔴 🟢 🔴 🔵",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_h_1_q10_opt1",
          "text": "Green 🟢 (should be Blue)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_h_1_q10_opt2",
          "text": "Red 🔴",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_h_1_q10_opt3",
          "text": "None",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Green 🟢 broke the Red-Blue pattern! It should have been Blue 🔵.",
    "explanationHindi": "हरे 🟢 ने पैटर्न तोड़ा, वहाँ नीला होना चाहिए था!",
    "points": 20
  },
  // ==========================================================================
  // H.2: Size patterns (10 Questions)
  // ==========================================================================
  {
    "id": "lkg_ms_h_2_q1",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "H.2: Size patterns",
    "concept": "Size patterns",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Look at the animal size pattern: Big 🐘, Small 🐭, Big 🐘, Small 🐭, Big 🐘, ❓. What size comes next?",
    "questionHindi": "आकार पैटर्न: बड़ा 🐘, छोटा 🐭, बड़ा 🐘, छोटा 🐭, बड़ा 🐘, ❓। अगला क्या आएगा?",
    "visualEmoji": "🐘 🐭 🐘 🐭 🐘 ❓",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_h_2_q1_opt1",
          "text": "Small mouse 🐭",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_h_2_q1_opt2",
          "text": "Big elephant 🐘",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_h_2_q1_opt3",
          "text": "Medium cat 🐱",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Big, Small, Big, Small, Big... next is Small 🐭!",
    "explanationHindi": "बड़ा, छोटा, बड़ा, छोटा... अगला छोटा 🐭 आएगा!",
    "points": 10
  },
  {
    "id": "lkg_ms_h_2_q2",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "H.2: Size patterns",
    "concept": "Size patterns",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Look at the ball pattern: Big ⚽, Small 🎾, Big ⚽, Small 🎾, ❓. What comes next?",
    "questionHindi": "पैटर्न: बड़ी गेंद ⚽, छोटी गेंद 🎾, बड़ी ⚽, छोटी 🎾, ❓। अगला क्या है?",
    "visualEmoji": "⚽ 🎾 ⚽ 🎾 ❓",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_h_2_q2_opt1",
          "text": "Big soccer ball ⚽",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_h_2_q2_opt2",
          "text": "Small tennis ball 🎾",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_h_2_q2_opt3",
          "text": "Balloon 🎈",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Big, Small, Big, Small... next is Big ⚽!",
    "explanationHindi": "बड़ा, छोटा, बड़ा, छोटा... अगला बड़ा ⚽ है!",
    "points": 10
  },
  {
    "id": "lkg_ms_h_2_q3",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "H.2: Size patterns",
    "concept": "Size patterns",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Look at the tree pattern: Tall 🌲, Short 🪴, Tall 🌲, Short 🪴, Tall 🌲, ❓. What comes next?",
    "questionHindi": "पैटर्न: लंबा 🌲, छोटा 🪴, लंबा 🌲, छोटा 🪴, लंबा 🌲, ❓। अगला क्या है?",
    "visualEmoji": "🌲 🪴 🌲 🪴 🌲 ❓",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_h_2_q3_opt1",
          "text": "Short plant 🪴",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_h_2_q3_opt2",
          "text": "Tall tree 🌲",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_h_2_q3_opt3",
          "text": "Flower 🌸",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Tall, Short, Tall, Short, Tall... next is Short 🪴!",
    "explanationHindi": "लंबा, छोटा, लंबा, छोटा... अगला छोटा 🪴 है!",
    "points": 10
  },
  {
    "id": "lkg_ms_h_2_q4",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "H.2: Size patterns",
    "concept": "Size patterns",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at the star pattern: Big ⭐, Small ▫️, Big ⭐, Small ▫️, ❓. What comes next?",
    "questionHindi": "तारा पैटर्न: बड़ा ⭐, छोटा ▫️, बड़ा ⭐, छोटा ▫️, ❓। अगला क्या है?",
    "visualEmoji": "⭐ ▫️ ⭐ ▫️ ❓",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_h_2_q4_opt1",
          "text": "Big star ⭐",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_h_2_q4_opt2",
          "text": "Small dot ▫️",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_h_2_q4_opt3",
          "text": "Circle 🔴",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Big, Small, Big, Small... next is Big ⭐!",
    "explanationHindi": "बड़ा, छोटा, बड़ा, छोटा... अगला बड़ा ⭐ है!",
    "points": 15
  },
  {
    "id": "lkg_ms_h_2_q5",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "H.2: Size patterns",
    "concept": "Size patterns",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at this pattern: Big 🔴, Big 🔴, Small 🔴, Big 🔴, Big 🔴, ❓. What comes next?",
    "questionHindi": "पैटर्न देखें: बड़ा, बड़ा, छोटा, बड़ा, बड़ा, ❓। अगला क्या है?",
    "visualEmoji": "Big, Big, Small, Big, Big, ❓",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_h_2_q5_opt1",
          "text": "Small 🔴",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_h_2_q5_opt2",
          "text": "Big 🔴",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_h_2_q5_opt3",
          "text": "Medium",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Big, Big, Small, Big, Big... next is Small 🔴!",
    "explanationHindi": "बड़ा, बड़ा, छोटा, बड़ा, बड़ा... अगला छोटा 🔴 है!",
    "points": 15
  },
  {
    "id": "lkg_ms_h_2_q6",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "H.2: Size patterns",
    "concept": "Size patterns",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at this pattern: Small 🐟, Small 🐟, Big 🐋, Small 🐟, Small 🐟, ❓. What comes next?",
    "questionHindi": "पैटर्न: छोटी, छोटी, बड़ी, छोटी, छोटी, ❓। अगला क्या है?",
    "visualEmoji": "Small, Small, Big, Small, Small, ❓",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_h_2_q6_opt1",
          "text": "Big whale 🐋",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_h_2_q6_opt2",
          "text": "Small fish 🐟",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_h_2_q6_opt3",
          "text": "Medium",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Two small, one big, two small... next is Big 🐋!",
    "explanationHindi": "दो छोटी, एक बड़ी, दो छोटी... अगला बड़ी 🐋 है!",
    "points": 15
  },
  {
    "id": "lkg_ms_h_2_q7",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "H.2: Size patterns",
    "concept": "Size patterns",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which pattern shows: Short, Tall, Short, Tall?",
    "questionHindi": "कौन सा पैटर्न छोटा, लंबा, छोटा, लंबा दिखाता है?",
    "visualEmoji": "Short, Tall, Short, Tall",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_h_2_q7_opt1",
          "text": "🪴 🌲 🪴 🌲",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_h_2_q7_opt2",
          "text": "🌲 🌲 🪴 🪴",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_h_2_q7_opt3",
          "text": "🌲 🪴 🌲 🪴",
          "isCorrect": false
        }
      ]
    },
    "explanation": "🪴 (short) followed by 🌲 (tall) repeating is 🪴 🌲 🪴 🌲!",
    "explanationHindi": "छोटा और लंबा क्रम 🪴 🌲 🪴 🌲 है!",
    "points": 15
  },
  {
    "id": "lkg_ms_h_2_q8",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "H.2: Size patterns",
    "concept": "Size patterns",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Look at this growing pattern: 🟢, 🟢🟢, 🟢🟢🟢, ❓. How many dots come next?",
    "questionHindi": "बढ़ता पैटर्न: 1, 2, 3, ❓। आगे कितने बिंदु आएंगे?",
    "visualEmoji": "1, 2, 3, ❓",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_h_2_q8_opt1",
          "text": "4 dots (🟢🟢🟢🟢)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_h_2_q8_opt2",
          "text": "3 dots",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_h_2_q8_opt3",
          "text": "5 dots",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The count grows by 1 each step: 1, 2, 3, 4!",
    "explanationHindi": "हर कदम पर 1 बढ़ता है: 1, 2, 3, 4!",
    "points": 20
  },
  {
    "id": "lkg_ms_h_2_q9",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "H.2: Size patterns",
    "concept": "Size patterns",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Look at this shrinking pattern: ⭐⭐⭐, ⭐⭐, ❓. What comes next?",
    "questionHindi": "घटता पैटर्न: 3 तारे, 2 तारे, ❓। आगे क्या आएगा?",
    "visualEmoji": "3, 2, ❓",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_h_2_q9_opt1",
          "text": "1 star (⭐)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_h_2_q9_opt2",
          "text": "2 stars",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_h_2_q9_opt3",
          "text": "0 stars",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The pattern counts down: 3, 2, 1 star!",
    "explanationHindi": "उल्टी गिनती: 3, 2, 1 तारा!",
    "points": 20
  },
  {
    "id": "lkg_ms_h_2_q10",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "H.2: Size patterns",
    "concept": "Size patterns",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Look at this 3-size staircase: Small 🐁, Medium 🐕, Big 🐘, Small 🐁, Medium 🐕, ❓. What comes next?",
    "questionHindi": "3 आकारों की सीढ़ी: छोटा, मध्यम, बड़ा, छोटा, मध्यम, ❓। अगला क्या है?",
    "visualEmoji": "Small, Medium, Big, Small, Medium, ❓",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_h_2_q10_opt1",
          "text": "Big elephant 🐘",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_h_2_q10_opt2",
          "text": "Small mouse 🐁",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_h_2_q10_opt3",
          "text": "Medium dog 🐕",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Small, Medium, Big repeats! Next is Big 🐘.",
    "explanationHindi": "छोटा, मध्यम, बड़ा दोहराता है! अगला बड़ा 🐘 है।",
    "points": 20
  },
  // ==========================================================================
  // H.3: Shape patterns (10 Questions)
  // ==========================================================================
  {
    "id": "lkg_ms_h_3_q1",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "H.3: Shape patterns",
    "concept": "Shape patterns",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Look at the shape pattern: 🔺 🟦 🔺 🟦 🔺 ❓. What shape comes next?",
    "questionHindi": "आकार पैटर्न देखें: 🔺 🟦 🔺 🟦 🔺 ❓। अगला कौन सा आकार आएगा?",
    "visualEmoji": "🔺 🟦 🔺 🟦 🔺 ❓",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_h_3_q1_opt1",
          "text": "Square 🟦",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_h_3_q1_opt2",
          "text": "Triangle 🔺",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_h_3_q1_opt3",
          "text": "Circle 🔴",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Triangle, Square, Triangle, Square, Triangle... next is Square 🟦!",
    "explanationHindi": "त्रिकोण, वर्ग, त्रिकोण, वर्ग... अगला वर्ग 🟦 है!",
    "points": 10
  },
  {
    "id": "lkg_ms_h_3_q2",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "H.3: Shape patterns",
    "concept": "Shape patterns",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Look at the pattern: 🔴 🟦 🔴 🟦 🔴 ❓. What shape comes next?",
    "questionHindi": "पैटर्न देखें: 🔴 🟦 🔴 🟦 🔴 ❓। अगला क्या आएगा?",
    "visualEmoji": "🔴 🟦 🔴 🟦 🔴 ❓",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_h_3_q2_opt1",
          "text": "Square 🟦",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_h_3_q2_opt2",
          "text": "Circle 🔴",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_h_3_q2_opt3",
          "text": "Triangle 🔺",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Circle, Square, Circle, Square, Circle... next is Square 🟦!",
    "explanationHindi": "वृत्त, वर्ग, वृत्त, वर्ग... अगला वर्ग 🟦 है!",
    "points": 10
  },
  {
    "id": "lkg_ms_h_3_q3",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "H.3: Shape patterns",
    "concept": "Shape patterns",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Look at the pattern: 🔴 🔺 🔴 🔺 🔴 ❓. What shape comes next?",
    "questionHindi": "पैटर्न देखें: 🔴 🔺 🔴 🔺 🔴 ❓। अगला क्या है?",
    "visualEmoji": "🔴 🔺 🔴 🔺 🔴 ❓",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_h_3_q3_opt1",
          "text": "Triangle 🔺",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_h_3_q3_opt2",
          "text": "Circle 🔴",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_h_3_q3_opt3",
          "text": "Square 🟦",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Circle, Triangle, Circle, Triangle, Circle... next is Triangle 🔺!",
    "explanationHindi": "वृत्त, त्रिकोण, वृत्त, त्रिकोण... अगला त्रिकोण 🔺 है!",
    "points": 10
  },
  {
    "id": "lkg_ms_h_3_q4",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "H.3: Shape patterns",
    "concept": "Shape patterns",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at this pattern: ⭐ ❤️ ⭐ ❤️ ⭐ ❓. What shape comes next?",
    "questionHindi": "पैटर्न देखें: ⭐ ❤️ ⭐ ❤️ ⭐ ❓। अगला क्या है?",
    "visualEmoji": "⭐ ❤️ ⭐ ❤️ ⭐ ❓",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_h_3_q4_opt1",
          "text": "Heart ❤️",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_h_3_q4_opt2",
          "text": "Star ⭐",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_h_3_q4_opt3",
          "text": "Circle 🔴",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Star, Heart, Star, Heart, Star... next is Heart ❤️!",
    "explanationHindi": "तारा, दिल, तारा, दिल... अगला दिल ❤️ है!",
    "points": 15
  },
  {
    "id": "lkg_ms_h_3_q5",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "H.3: Shape patterns",
    "concept": "Shape patterns",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at: 🔺 🔺 🟦 🔺 🔺 ❓. What shape comes next?",
    "questionHindi": "पैटर्न देखें: 🔺 🔺 🟦 🔺 🔺 ❓। अगला आकार क्या है?",
    "visualEmoji": "🔺 🔺 🟦 🔺 🔺 ❓",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_h_3_q5_opt1",
          "text": "Square 🟦",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_h_3_q5_opt2",
          "text": "Triangle 🔺",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_h_3_q5_opt3",
          "text": "Circle 🔴",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Two triangles, one square, two triangles... next is Square 🟦!",
    "explanationHindi": "दो त्रिकोण, एक वर्ग, दो त्रिकोण... अगला वर्ग 🟦 है!",
    "points": 15
  },
  {
    "id": "lkg_ms_h_3_q6",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "H.3: Shape patterns",
    "concept": "Shape patterns",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at: 🔴 🔴 🔺 🔴 🔴 ❓. What shape comes next?",
    "questionHindi": "पैटर्न: 🔴 🔴 🔺 🔴 🔴 ❓। अगला आकार क्या है?",
    "visualEmoji": "🔴 🔴 🔺 🔴 🔴 ❓",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_h_3_q6_opt1",
          "text": "Triangle 🔺",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_h_3_q6_opt2",
          "text": "Circle 🔴",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_h_3_q6_opt3",
          "text": "Square 🟦",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Two circles, one triangle, two circles... next is Triangle 🔺!",
    "explanationHindi": "दो वृत्त, एक त्रिकोण, दो वृत्त... अगला त्रिकोण 🔺 है!",
    "points": 15
  },
  {
    "id": "lkg_ms_h_3_q7",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "H.3: Shape patterns",
    "concept": "Shape patterns",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at 3 shapes: 🔴 🟦 🔺 🔴 🟦 ❓. What comes next?",
    "questionHindi": "3 आकारों का पैटर्न: 🔴 🟦 🔺 🔴 🟦 ❓। अगला क्या है?",
    "visualEmoji": "🔴 🟦 🔺 🔴 🟦 ❓",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_h_3_q7_opt1",
          "text": "Triangle 🔺",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_h_3_q7_opt2",
          "text": "Square 🟦",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_h_3_q7_opt3",
          "text": "Circle 🔴",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Circle, Square, Triangle repeats! Next is Triangle 🔺.",
    "explanationHindi": "वृत्त, वर्ग, त्रिकोण दोहराता है! अगला त्रिकोण 🔺 है।",
    "points": 15
  },
  {
    "id": "lkg_ms_h_3_q8",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "H.3: Shape patterns",
    "concept": "Shape patterns",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Look at: 🟦 🟨 🟦 🟨 🟦 ❓. What shape comes next?",
    "questionHindi": "पैटर्न देखें: 🟦 🟨 🟦 🟨 🟦 ❓। अगला क्या है?",
    "visualEmoji": "🟦 🟨 🟦 🟨 🟦 ❓",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_h_3_q8_opt1",
          "text": "Yellow Rectangle 🟨",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_h_3_q8_opt2",
          "text": "Blue Square 🟦",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_h_3_q8_opt3",
          "text": "Triangle 🔺",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Blue square, yellow rectangle repeats! Next is Yellow 🟨.",
    "explanationHindi": "नीला वर्ग, पीला आयत... अगला पीला आयत 🟨 है!",
    "points": 20
  },
  {
    "id": "lkg_ms_h_3_q9",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "H.3: Shape patterns",
    "concept": "Shape patterns",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Which shape does NOT belong in the pattern: 🔺 🟦 🔺 🔴 🔺 🟦?",
    "questionHindi": "पैटर्न में कौन सा आकार गलत है: 🔺 🟦 🔺 🔴 🔺 🟦?",
    "visualEmoji": "🔺 🟦 🔺 🔴 🔺 🟦",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_h_3_q9_opt1",
          "text": "Circle 🔴 (should be Square)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_h_3_q9_opt2",
          "text": "Triangle 🔺",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_h_3_q9_opt3",
          "text": "None",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The circle 🔴 broke the Triangle-Square pattern!",
    "explanationHindi": "वृत्त 🔴 गलत है, वहाँ वर्ग 🟦 होना चाहिए था!",
    "points": 20
  },
  {
    "id": "lkg_ms_h_3_q10",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "H.3: Shape patterns",
    "concept": "Shape patterns",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Count how many triangles are in this repeating pattern: 🔺 🟦 🔺 🟦 🔺 🟦?",
    "questionHindi": "इस पैटर्न में कितने त्रिकोण हैं: 🔺 🟦 🔺 🟦 🔺 🟦?",
    "visualEmoji": "🔺 🟦 🔺 🟦 🔺 🟦",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_h_3_q10_opt1",
          "text": "3 triangles",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_h_3_q10_opt2",
          "text": "2 triangles",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_h_3_q10_opt3",
          "text": "4 triangles",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Count the triangles: 1, 2, 3 triangles!",
    "explanationHindi": "त्रिकोण गिनें: 1, 2, 3!",
    "points": 20
  },
  // ==========================================================================
  // H.4: What comes next? (10 Questions)
  // ==========================================================================
  {
    "id": "lkg_ms_h_4_q1",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "H.4: What comes next?",
    "concept": "What comes next?",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Day, Night, Day, Night, Day, ❓. What comes next?",
    "questionHindi": "दिन, रात, दिन, रात, दिन, ❓। अगला क्या आएगा?",
    "visualEmoji": "☀️ 🌙 ☀️ 🌙 ☀️ ❓",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_h_4_q1_opt1",
          "text": "Night 🌙",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_h_4_q1_opt2",
          "text": "Day ☀️",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_h_4_q1_opt3",
          "text": "Rain 🌧️",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Day alternates with night! After day comes night 🌙.",
    "explanationHindi": "दिन के बाद रात आती है!",
    "points": 10
  },
  {
    "id": "lkg_ms_h_4_q2",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "H.4: What comes next?",
    "concept": "What comes next?",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Up, Down, Up, Down, Up, ❓. What direction comes next?",
    "questionHindi": "ऊपर, नीचे, ऊपर, नीचे, ऊपर, ❓। अगला क्या है?",
    "visualEmoji": "⬆️ ⬇️ ⬆️ ⬇️ ⬆️ ❓",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_h_4_q2_opt1",
          "text": "Down ⬇️",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_h_4_q2_opt2",
          "text": "Up ⬆️",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_h_4_q2_opt3",
          "text": "Left ⬅️",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Up, Down, Up, Down, Up... next is Down ⬇️!",
    "explanationHindi": "ऊपर, नीचे, ऊपर, नीचे... अगला नीचे ⬇️ है!",
    "points": 10
  },
  {
    "id": "lkg_ms_h_4_q3",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "H.4: What comes next?",
    "concept": "What comes next?",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Stand, Sit, Stand, Sit, Stand, ❓. What action comes next?",
    "questionHindi": "खड़े होना, बैठना, खड़े होना, बैठना, खड़े होना, ❓। अगला क्या है?",
    "visualEmoji": "🧍 🪑 🧍 🪑 🧍 ❓",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_h_4_q3_opt1",
          "text": "Sit 🪑",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_h_4_q3_opt2",
          "text": "Stand 🧍",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_h_4_q3_opt3",
          "text": "Run 🏃",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Stand, Sit, Stand, Sit, Stand... next is Sit 🪑!",
    "explanationHindi": "अगली क्रिया बैठना (Sit) है!",
    "points": 10
  },
  {
    "id": "lkg_ms_h_4_q4",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "H.4: What comes next?",
    "concept": "What comes next?",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at the animals: 🐱 🐶 🐱 🐶 🐱 ❓. What animal comes next?",
    "questionHindi": "पैटर्न देखें: 🐱 🐶 🐱 🐶 🐱 ❓। अगला कौन सा जानवर है?",
    "visualEmoji": "🐱 🐶 🐱 🐶 🐱 ❓",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_h_4_q4_opt1",
          "text": "Puppy 🐶",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_h_4_q4_opt2",
          "text": "Kitten 🐱",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_h_4_q4_opt3",
          "text": "Cow 🐮",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Cat, Dog, Cat, Dog, Cat... next is Dog 🐶!",
    "explanationHindi": "बिल्ली, कुत्ता, बिल्ली, कुत्ता... अगला कुत्ता 🐶 है!",
    "points": 15
  },
  {
    "id": "lkg_ms_h_4_q5",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "H.4: What comes next?",
    "concept": "What comes next?",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at the weather: ☀️ 🌧️ ☀️ 🌧️ ☀️ ❓. What comes next?",
    "questionHindi": "मौसम देखें: ☀️ 🌧️ ☀️ 🌧️ ☀️ ❓। अगला क्या है?",
    "visualEmoji": "☀️ 🌧️ ☀️ 🌧️ ☀️ ❓",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_h_4_q5_opt1",
          "text": "Rain 🌧️",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_h_4_q5_opt2",
          "text": "Sun ☀️",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_h_4_q5_opt3",
          "text": "Snow ❄️",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Sunny, Rainy, Sunny, Rainy, Sunny... next is Rain 🌧️!",
    "explanationHindi": "धूप, बारिश, धूप, बारिश... अगली बारिश 🌧️ है!",
    "points": 15
  },
  {
    "id": "lkg_ms_h_4_q6",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "H.4: What comes next?",
    "concept": "What comes next?",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Clap 👏, Snap 🫰, Clap 👏, Snap 🫰, Clap 👏, ❓. What comes next?",
    "questionHindi": "ताली 👏, चुटकी 🫰, ताली 👏, चुटकी 🫰, ताली 👏, ❓। अगला क्या है?",
    "visualEmoji": "👏 🫰 👏 🫰 👏 ❓",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_h_4_q6_opt1",
          "text": "Snap 🫰",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_h_4_q6_opt2",
          "text": "Clap 👏",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_h_4_q6_opt3",
          "text": "Jump 🏃",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Clap, Snap, Clap, Snap, Clap... next is Snap 🫰!",
    "explanationHindi": "ताली के बाद चुटकी (Snap) आएगी!",
    "points": 15
  },
  {
    "id": "lkg_ms_h_4_q7",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "H.4: What comes next?",
    "concept": "What comes next?",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at: 🚗 🚲 🚗 🚲 🚗 ❓. What vehicle comes next?",
    "questionHindi": "पैटर्न देखें: 🚗 🚲 🚗 🚲 🚗 ❓। अगला कौन सा वाहन है?",
    "visualEmoji": "🚗 🚲 🚗 🚲 🚗 ❓",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_h_4_q7_opt1",
          "text": "Bicycle 🚲",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_h_4_q7_opt2",
          "text": "Car 🚗",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_h_4_q7_opt3",
          "text": "Train 🚂",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Car, Bike, Car, Bike, Car... next is Bicycle 🚲!",
    "explanationHindi": "कार, साइकिल, कार, साइकिल... अगली साइकिल 🚲 है!",
    "points": 15
  },
  {
    "id": "lkg_ms_h_4_q8",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "H.4: What comes next?",
    "concept": "What comes next?",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Look at: 1, 2, 1, 2, 1, ❓. What number comes next?",
    "questionHindi": "संख्या पैटर्न: 1, 2, 1, 2, 1, ❓। अगली कौन सी संख्या है?",
    "visualEmoji": "1, 2, 1, 2, 1, ❓",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_h_4_q8_opt1",
          "text": "2",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_h_4_q8_opt2",
          "text": "1",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_h_4_q8_opt3",
          "text": "3",
          "isCorrect": false
        }
      ]
    },
    "explanation": "1, 2, 1, 2, 1... next is 2!",
    "explanationHindi": "1 और 2 के क्रम में अगला 2 है!",
    "points": 20
  },
  {
    "id": "lkg_ms_h_4_q9",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "H.4: What comes next?",
    "concept": "What comes next?",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Look at: 1, 2, 3, 1, 2, ❓. What number comes next?",
    "questionHindi": "पैटर्न: 1, 2, 3, 1, 2, ❓। अगला अंक क्या है?",
    "visualEmoji": "1, 2, 3, 1, 2, ❓",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_h_4_q9_opt1",
          "text": "3",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_h_4_q9_opt2",
          "text": "1",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_h_4_q9_opt3",
          "text": "4",
          "isCorrect": false
        }
      ]
    },
    "explanation": "1, 2, 3 repeats! After 2 comes 3.",
    "explanationHindi": "1, 2, 3 दोहराता है! 2 के बाद 3 आएगा।",
    "points": 20
  },
  {
    "id": "lkg_ms_h_4_q10",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "H.4: What comes next?",
    "concept": "What comes next?",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Look at: A, B, A, B, A, ❓. What letter comes next?",
    "questionHindi": "अक्षर पैटर्न: A, B, A, B, A, ❓। अगला अक्षर क्या है?",
    "visualEmoji": "A, B, A, B, A, ❓",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_h_4_q10_opt1",
          "text": "B",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_h_4_q10_opt2",
          "text": "A",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_h_4_q10_opt3",
          "text": "C",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A, B, A, B, A... next is letter B!",
    "explanationHindi": "A और B के क्रम में अगला B है!",
    "points": 20
  },
  // ==========================================================================
  // I.1: Long and short (10 Questions)
  // ==========================================================================
  {
    "id": "lkg_ms_i_1_q1",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "I.1: Long and short",
    "concept": "Long and short",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which snake is LONGER: a giant python 🐍 (stretched far) or a tiny caterpillar 🐛?",
    "questionHindi": "कौन अधिक लंबा (Longer) है: अजगर 🐍 या छोटी इल्ली 🐛?",
    "visualEmoji": "🐍 vs 🐛",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_i_1_q1_opt1",
          "text": "Python snake 🐍 (Longer)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_i_1_q1_opt2",
          "text": "Caterpillar 🐛 (Shorter)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_i_1_q1_opt3",
          "text": "Both are equal",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A python stretches out very long!",
    "explanationHindi": "अजगर बहुत लंबा (Long) होता है!",
    "points": 10
  },
  {
    "id": "lkg_ms_i_1_q2",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "I.1: Long and short",
    "concept": "Long and short",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which pencil is SHORTER: a brand new pencil ✏️ or a tiny sharpened pencil stub ✏️?",
    "questionHindi": "कौन सी पेंसिल छोटी (Shorter) है: नई पेंसिल या छोटी घिसी पेंसिल?",
    "visualEmoji": "Long ✏️ vs Short ✏️",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_i_1_q2_opt1",
          "text": "Sharpened stub (Shorter)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_i_1_q2_opt2",
          "text": "Brand new pencil (Longer)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_i_1_q2_opt3",
          "text": "Both equal",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The sharpened stub is short in length!",
    "explanationHindi": "घिसी हुई पेंसिल छोटी (Short) होती है!",
    "points": 10
  },
  {
    "id": "lkg_ms_i_1_q3",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "I.1: Long and short",
    "concept": "Long and short",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which vehicle is LONGER: a long passenger train 🚂🚃🚃🚃 or a small bicycle 🚲?",
    "questionHindi": "कौन सा वाहन लंबा (Longer) है: लंबी रेलगाड़ी 🚂 या छोटी साइकिल 🚲?",
    "visualEmoji": "🚂🚃🚃 vs 🚲",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_i_1_q3_opt1",
          "text": "Train 🚂 (Longer)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_i_1_q3_opt2",
          "text": "Bicycle 🚲 (Shorter)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_i_1_q3_opt3",
          "text": "Both equal",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A train with many coaches is much longer!",
    "explanationHindi": "ट्रेन बहुत लंबी (Long) होती है!",
    "points": 10
  },
  {
    "id": "lkg_ms_i_1_q4",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "I.1: Long and short",
    "concept": "Long and short",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which ribbon is LONGER: Ribbon A (10 cm) or Ribbon B (3 cm)?",
    "questionHindi": "कौन सा रिबन लंबा है: रिबन A (10 सेमी) या रिबन B (3 सेमी)?",
    "visualEmoji": "10 cm vs 3 cm",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_i_1_q4_opt1",
          "text": "Ribbon A (10 cm)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_i_1_q4_opt2",
          "text": "Ribbon B (3 cm)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_i_1_q4_opt3",
          "text": "Both equal",
          "isCorrect": false
        }
      ]
    },
    "explanation": "10 cm is longer than 3 cm!",
    "explanationHindi": "10 सेमी, 3 सेमी से अधिक लंबा है!",
    "points": 15
  },
  {
    "id": "lkg_ms_i_1_q5",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "I.1: Long and short",
    "concept": "Long and short",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which ribbon is SHORTER: Ribbon X (2 cm) or Ribbon Y (8 cm)?",
    "questionHindi": "कौन सा रिबन छोटा है: X (2 सेमी) या Y (8 सेमी)?",
    "visualEmoji": "2 cm vs 8 cm",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_i_1_q5_opt1",
          "text": "Ribbon X (2 cm)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_i_1_q5_opt2",
          "text": "Ribbon Y (8 cm)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_i_1_q5_opt3",
          "text": "Both equal",
          "isCorrect": false
        }
      ]
    },
    "explanation": "2 cm is shorter than 8 cm!",
    "explanationHindi": "2 सेमी, 8 सेमी से छोटा (Short) है!",
    "points": 15
  },
  {
    "id": "lkg_ms_i_1_q6",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "I.1: Long and short",
    "concept": "Long and short",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at your pants 👖 and your shorts 🩳. Which clothing is LONGER?",
    "questionHindi": "पैंट 👖 और शॉर्ट्स 🩳 देखें। कौन सा कपड़ा लंबा है?",
    "visualEmoji": "👖 vs 🩳",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_i_1_q6_opt1",
          "text": "Pants 👖 (Goes down to ankles)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_i_1_q6_opt2",
          "text": "Shorts 🩳 (Stops at knees)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_i_1_q6_opt3",
          "text": "Both equal",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Full pants are longer than knee-length shorts!",
    "explanationHindi": "पैंट घुटनों से नीचे तक जाती है, अतः लंबी है!",
    "points": 15
  },
  {
    "id": "lkg_ms_i_1_q7",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "I.1: Long and short",
    "concept": "Long and short",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which animal has a LONGER neck: a Giraffe 🦒 or a Duck 🦆?",
    "questionHindi": "किस जानवर की गर्दन अधिक लंबी है: जिराफ़ 🦒 या बत्तख 🦆?",
    "visualEmoji": "🦒 vs 🦆",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_i_1_q7_opt1",
          "text": "Giraffe 🦒",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_i_1_q7_opt2",
          "text": "Duck 🦆",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_i_1_q7_opt3",
          "text": "Both equal",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A giraffe has a famously long neck reaching high into trees!",
    "explanationHindi": "जिराफ़ की गर्दन बहुत लंबी होती है!",
    "points": 15
  },
  {
    "id": "lkg_ms_i_1_q8",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "I.1: Long and short",
    "concept": "Long and short",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Which stick has the SHORTEST length: Stick A (1 cm), Stick B (5 cm), or Stick C (8 cm)?",
    "questionHindi": "किस छड़ी की लंबाई सबसे कम (Shortest) है: A (1 सेमी), B (5 सेमी), C (8 सेमी)?",
    "visualEmoji": "1 cm vs 5 cm vs 8 cm",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_i_1_q8_opt1",
          "text": "Stick A (1 cm)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_i_1_q8_opt2",
          "text": "Stick B (5 cm)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_i_1_q8_opt3",
          "text": "Stick C (8 cm)",
          "isCorrect": false
        }
      ]
    },
    "explanation": "1 cm is the shortest measurement!",
    "explanationHindi": "1 सेमी सबसे छोटी (Shortest) लंबाई है!",
    "points": 20
  },
  {
    "id": "lkg_ms_i_1_q9",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "I.1: Long and short",
    "concept": "Long and short",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Which stick has the LONGEST length: Stick A (2 cm), Stick B (6 cm), or Stick C (10 cm)?",
    "questionHindi": "किस छड़ी की लंबाई सबसे अधिक (Longest) है: A (2 सेमी), B (6 सेमी), C (10 सेमी)?",
    "visualEmoji": "2 cm vs 6 cm vs 10 cm",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_i_1_q9_opt1",
          "text": "Stick C (10 cm)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_i_1_q9_opt2",
          "text": "Stick B (6 cm)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_i_1_q9_opt3",
          "text": "Stick A (2 cm)",
          "isCorrect": false
        }
      ]
    },
    "explanation": "10 cm is the longest measurement!",
    "explanationHindi": "10 सेमी सबसे लंबी (Longest) छड़ी है!",
    "points": 20
  },
  {
    "id": "lkg_ms_i_1_q10",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "I.1: Long and short",
    "concept": "Long and short",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Compare a ruler 📏 (30 cm) and an eraser 🧼 (3 cm). Is the ruler LONGER or SHORTER?",
    "questionHindi": "पैमाना (30 सेमी) और रबर (3 सेमी)। पैमाना लंबा है या छोटा?",
    "visualEmoji": "📏 vs 🧼",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_i_1_q10_opt1",
          "text": "Ruler is LONGER",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_i_1_q10_opt2",
          "text": "Ruler is shorter",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_i_1_q10_opt3",
          "text": "Both equal",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A ruler is much longer than a tiny eraser!",
    "explanationHindi": "पैमाना रबर से बहुत लंबा (Longer) होता है!",
    "points": 20
  },
  // ==========================================================================
  // I.2: Tall and short (10 Questions)
  // ==========================================================================
  {
    "id": "lkg_ms_i_2_q1",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "I.2: Tall and short",
    "concept": "Tall and short",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Who is TALLER: an adult parent 🧑 or a little toddler 👶?",
    "questionHindi": "कौन अधिक लंबा (Taller) है: माता-पिता 🧑 या छोटा बच्चा 👶?",
    "visualEmoji": "🧑 vs 👶",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_i_2_q1_opt1",
          "text": "Adult Parent 🧑 (Taller)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_i_2_q1_opt2",
          "text": "Toddler 👶 (Shorter)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_i_2_q1_opt3",
          "text": "Both equal",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Grown-ups stand much taller than babies!",
    "explanationHindi": "वयस्क छोटे बच्चे से अधिक लंबे होते हैं!",
    "points": 10
  },
  {
    "id": "lkg_ms_i_2_q2",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "I.2: Tall and short",
    "concept": "Tall and short",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which plant is TALLER: a giant coconut tree 🌴 or a tiny grass blade 🌱?",
    "questionHindi": "कौन सा पौधा लंबा है: नारियल का पेड़ 🌴 या घास का तिनका 🌱?",
    "visualEmoji": "🌴 vs 🌱",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_i_2_q2_opt1",
          "text": "Coconut Tree 🌴 (Taller)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_i_2_q2_opt2",
          "text": "Grass blade 🌱 (Shorter)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_i_2_q2_opt3",
          "text": "Both equal",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A coconut tree reaches high up into the sky!",
    "explanationHindi": "नारियल का पेड़ बहुत ऊंचा/लंबा होता है!",
    "points": 10
  },
  {
    "id": "lkg_ms_i_2_q3",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "I.2: Tall and short",
    "concept": "Tall and short",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which animal is SHORTER: a friendly dog 🐕 or a tiny mouse 🐁?",
    "questionHindi": "कौन सा जानवर छोटा (Shorter) है: कुत्ता 🐕 या चूहा 🐁?",
    "visualEmoji": "🐕 vs 🐁",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_i_2_q3_opt1",
          "text": "Mouse 🐁 (Shorter)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_i_2_q3_opt2",
          "text": "Dog 🐕 (Taller)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_i_2_q3_opt3",
          "text": "Both equal",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A mouse is very short and close to the ground!",
    "explanationHindi": "चूहा बहुत छोटा (Short) होता है!",
    "points": 10
  },
  {
    "id": "lkg_ms_i_2_q4",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "I.2: Tall and short",
    "concept": "Tall and short",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which building is TALLER: a skyscraper with 50 floors 🏙️ or a 1-story house 🏠?",
    "questionHindi": "कौन सी इमारत अधिक ऊंची है: 50 मंजिला गगनचुंबी इमारत 🏙️ या 1 मंजिला घर 🏠?",
    "visualEmoji": "🏙️ vs 🏠",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_i_2_q4_opt1",
          "text": "Skyscraper 🏙️ (Taller)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_i_2_q4_opt2",
          "text": "House 🏠 (Shorter)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_i_2_q4_opt3",
          "text": "Both equal",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A skyscraper reaches high into the clouds!",
    "explanationHindi": "गगनचुंबी इमारत बहुत ऊंची होती है!",
    "points": 15
  },
  {
    "id": "lkg_ms_i_2_q5",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "I.2: Tall and short",
    "concept": "Tall and short",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which animal is TALLER: a Giraffe 🦒 or a Rabbit 🐇?",
    "questionHindi": "कौन सा जानवर लंबा है: जिराफ़ 🦒 या खरगोश 🐇?",
    "visualEmoji": "🦒 vs 🐇",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_i_2_q5_opt1",
          "text": "Giraffe 🦒 (Taller)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_i_2_q5_opt2",
          "text": "Rabbit 🐇 (Shorter)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_i_2_q5_opt3",
          "text": "Both equal",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The giraffe is the tallest animal on land!",
    "explanationHindi": "जिराफ़ ज़मीन का सबसे ऊंचा जानवर है!",
    "points": 15
  },
  {
    "id": "lkg_ms_i_2_q6",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "I.2: Tall and short",
    "concept": "Tall and short",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which animal is SHORTER: an Elephant 🐘 or a Cat 🐱?",
    "questionHindi": "कौन सा जानवर छोटा (Shorter) है: हाथी 🐘 या बिल्ली 🐱?",
    "visualEmoji": "🐘 vs 🐱",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_i_2_q6_opt1",
          "text": "Cat 🐱 (Shorter)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_i_2_q6_opt2",
          "text": "Elephant 🐘 (Taller)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_i_2_q6_opt3",
          "text": "Both equal",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A cat is much shorter than a giant elephant!",
    "explanationHindi": "बिल्ली हाथी से बहुत छोटी होती है!",
    "points": 15
  },
  {
    "id": "lkg_ms_i_2_q7",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "I.2: Tall and short",
    "concept": "Tall and short",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at a water bottle 🍶 and a water tank on the roof. Which is TALLER?",
    "questionHindi": "पानी की बोतल 🍶 और छत की पानी की टंकी। कौन ऊंची है?",
    "visualEmoji": "🍶 vs Tank",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_i_2_q7_opt1",
          "text": "Water tank (Taller)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_i_2_q7_opt2",
          "text": "Water bottle (Shorter)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_i_2_q7_opt3",
          "text": "Both equal",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A water tank stands tall on the building roof!",
    "explanationHindi": "पानी की टंकी बोतल से बहुत ऊंची होती है!",
    "points": 15
  },
  {
    "id": "lkg_ms_i_2_q8",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "I.2: Tall and short",
    "concept": "Tall and short",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Between a Giraffe 🦒, a Man 🧑, and a Puppy 🐶, who is the TALLEST?",
    "questionHindi": "जिराफ़ 🦒, इंसान 🧑, और पिल्ले 🐶 में सबसे लंबा (Tallest) कौन है?",
    "visualEmoji": "🦒 vs 🧑 vs 🐶",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_i_2_q8_opt1",
          "text": "Giraffe 🦒 (Tallest)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_i_2_q8_opt2",
          "text": "Man 🧑",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_i_2_q8_opt3",
          "text": "Puppy 🐶",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The giraffe stands taller than all of them!",
    "explanationHindi": "जिराफ़ सबसे ऊंचा (Tallest) है!",
    "points": 20
  },
  {
    "id": "lkg_ms_i_2_q9",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "I.2: Tall and short",
    "concept": "Tall and short",
    "difficulty": "hard",
    "type": "mcq",
    "question": "In that same group (Giraffe 🦒, Man 🧑, Puppy 🐶), who is the SHORTEST?",
    "questionHindi": "उसी समूह में सबसे छोटा (Shortest) कौन है?",
    "visualEmoji": "🦒 vs 🧑 vs 🐶",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_i_2_q9_opt1",
          "text": "Puppy 🐶 (Shortest)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_i_2_q9_opt2",
          "text": "Man 🧑",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_i_2_q9_opt3",
          "text": "Giraffe 🦒",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The puppy stands closest to the ground!",
    "explanationHindi": "पिल्ला सबसे छोटा (Shortest) है!",
    "points": 20
  },
  {
    "id": "lkg_ms_i_2_q10",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "I.2: Tall and short",
    "concept": "Tall and short",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Ladder A has 10 steps, Ladder B has 4 steps. Which ladder is TALLER?",
    "questionHindi": "सीढ़ी A (10 पायदान), सीढ़ी B (4 पायदान)। कौन सी सीढ़ी ऊंची है?",
    "visualEmoji": "10 steps vs 4 steps",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_i_2_q10_opt1",
          "text": "Ladder A (10 steps)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_i_2_q10_opt2",
          "text": "Ladder B (4 steps)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_i_2_q10_opt3",
          "text": "Both equal",
          "isCorrect": false
        }
      ]
    },
    "explanation": "10 steps reaches much higher up!",
    "explanationHindi": "10 पायदान वाली सीढ़ी अधिक ऊंची है!",
    "points": 20
  },
  // ==========================================================================
  // I.3: Wide and narrow (10 Questions)
  // ==========================================================================
  {
    "id": "lkg_ms_i_3_q1",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "I.3: Wide and narrow",
    "concept": "Wide and narrow",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which road is WIDER: a 4-lane highway 🛣️ or a tiny walking footpath 🚶?",
    "questionHindi": "कौन सा रास्ता अधिक चौड़ा (Wider) है: 4-लेन राजमार्ग 🛣️ या पगडंडी 🚶?",
    "visualEmoji": "🛣️ vs 🚶",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_i_3_q1_opt1",
          "text": "4-lane highway 🛣️ (Wider)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_i_3_q1_opt2",
          "text": "Footpath 🚶 (Narrower)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_i_3_q1_opt3",
          "text": "Both equal",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A highway is very wide so many cars can drive side by side!",
    "explanationHindi": "राजमार्ग बहुत चौड़ा (Wide) होता है!",
    "points": 10
  },
  {
    "id": "lkg_ms_i_3_q2",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "I.3: Wide and narrow",
    "concept": "Wide and narrow",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which stream of water is NARROWER: a small garden pipe stream or a giant ocean 🌊?",
    "questionHindi": "पानी का कौन सा रास्ता संकरा (Narrower) है: पाइप की धार या विशाल समुद्र 🌊?",
    "visualEmoji": "Pipe stream vs Ocean",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_i_3_q2_opt1",
          "text": "Pipe stream (Narrower)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_i_3_q2_opt2",
          "text": "Ocean 🌊 (Wider)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_i_3_q2_opt3",
          "text": "Both equal",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A pipe stream is tiny and narrow, while the ocean is vast and wide!",
    "explanationHindi": "पाइप की धार संकरी (Narrow) होती है!",
    "points": 10
  },
  {
    "id": "lkg_ms_i_3_q3",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "I.3: Wide and narrow",
    "concept": "Wide and narrow",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Look at a double entrance door 🚪🚪 and a single narrow cupboard door 🚪. Which is WIDER?",
    "questionHindi": "दोहरा मुख्य द्वार 🚪🚪 और अलमारी का दरवाजा। कौन सा चौड़ा है?",
    "visualEmoji": "🚪🚪 vs 🚪",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_i_3_q3_opt1",
          "text": "Double entrance door 🚪🚪 (Wider)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_i_3_q3_opt2",
          "text": "Cupboard door (Narrower)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_i_3_q3_opt3",
          "text": "Both equal",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Two doors side by side make a wide opening!",
    "explanationHindi": "दोहरा दरवाजा अधिक चौड़ा (Wide) होता है!",
    "points": 10
  },
  {
    "id": "lkg_ms_i_3_q4",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "I.3: Wide and narrow",
    "concept": "Wide and narrow",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which bridge is WIDER: a bridge that fits 2 trucks 🚛 🚛 or a log bridge that fits 1 person?",
    "questionHindi": "कौन सा पुल अधिक चौड़ा है: 2 ट्रकों वाला पुल या 1 व्यक्ति वाली लकड़ी का पुल?",
    "visualEmoji": "Truck bridge vs Log bridge",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_i_3_q4_opt1",
          "text": "Truck bridge (Wider)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_i_3_q4_opt2",
          "text": "Log bridge (Narrower)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_i_3_q4_opt3",
          "text": "Both equal",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A bridge carrying big trucks is wide!",
    "explanationHindi": "ट्रकों वाला पुल चौड़ा (Wide) होता है!",
    "points": 15
  },
  {
    "id": "lkg_ms_i_3_q5",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "I.3: Wide and narrow",
    "concept": "Wide and narrow",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which path is NARROW: an alley between two houses 🏘️ or a football field ⚽?",
    "questionHindi": "कौन सा रास्ता संकरा (Narrow) है: दो घरों के बीच की पतली गली या फुटबॉल मैदान?",
    "visualEmoji": "Alley vs Football field",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_i_3_q5_opt1",
          "text": "Alley between houses (Narrow)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_i_3_q5_opt2",
          "text": "Football field (Wide)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_i_3_q5_opt3",
          "text": "Both equal",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A thin alleyway is narrow!",
    "explanationHindi": "पतली गली संकरी (Narrow) होती है!",
    "points": 15
  },
  {
    "id": "lkg_ms_i_3_q6",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "I.3: Wide and narrow",
    "concept": "Wide and narrow",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at a paintbrush: a broad wall roller 🪚 and a tiny fine art brush 🖌️. Which is NARROWER?",
    "questionHindi": "दीवार का रोलर और चित्रकारी का बारीक ब्रश 🖌️। कौन सा संकरा (Narrower) है?",
    "visualEmoji": "Roller vs Fine brush",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_i_3_q6_opt1",
          "text": "Fine art brush 🖌️ (Narrower)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_i_3_q6_opt2",
          "text": "Wall roller (Wider)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_i_3_q6_opt3",
          "text": "Both equal",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The fine art brush has a very narrow tip!",
    "explanationHindi": "बारीक ब्रश संकरा (Narrow) होता है!",
    "points": 15
  },
  {
    "id": "lkg_ms_i_3_q7",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "I.3: Wide and narrow",
    "concept": "Wide and narrow",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which bed is WIDER: a King-size bed 🛏️ for the family or a baby crib?",
    "questionHindi": "कौन सा बिस्तर चौड़ा है: बड़ा पारिवारिक पलंग 🛏️ या बच्चे का पालना?",
    "visualEmoji": "King bed vs Crib",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_i_3_q7_opt1",
          "text": "King-size bed 🛏️ (Wider)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_i_3_q7_opt2",
          "text": "Baby crib (Narrower)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_i_3_q7_opt3",
          "text": "Both equal",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A king-size bed has plenty of width to stretch out!",
    "explanationHindi": "बड़ा पलंग अधिक चौड़ा (Wide) होता है!",
    "points": 15
  },
  {
    "id": "lkg_ms_i_3_q8",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "I.3: Wide and narrow",
    "concept": "Wide and narrow",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Ribbon A is 10 cm across (wide belt), Ribbon B is 1 cm across (thin shoelace). Which is WIDE?",
    "questionHindi": "रिबन A (10 सेमी चौड़ा), रिबन B (1 सेमी चौड़ा)। कौन सा चौड़ा है?",
    "visualEmoji": "10 cm vs 1 cm width",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_i_3_q8_opt1",
          "text": "Ribbon A (10 cm wide)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_i_3_q8_opt2",
          "text": "Ribbon B (1 cm narrow)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_i_3_q8_opt3",
          "text": "Both equal",
          "isCorrect": false
        }
      ]
    },
    "explanation": "10 cm has more width, so it is wider!",
    "explanationHindi": "10 सेमी वाला रिबन चौड़ा (Wide) है!",
    "points": 20
  },
  {
    "id": "lkg_ms_i_3_q9",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "I.3: Wide and narrow",
    "concept": "Wide and narrow",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Which shape is WIDER: a stretched horizontal rectangle 🟨 or a tall thin pole?",
    "questionHindi": "कौन सी आकृति चौड़ी है: लेटा हुआ आयत 🟨 या पतला खंभा?",
    "visualEmoji": "Rectangle vs Pole",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_i_3_q9_opt1",
          "text": "Horizontal rectangle 🟨 (Wider)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_i_3_q9_opt2",
          "text": "Thin pole (Narrower)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_i_3_q9_opt3",
          "text": "Both equal",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The horizontal rectangle spans wider side to side!",
    "explanationHindi": "आयत अगल-बगल से अधिक चौड़ा है!",
    "points": 20
  },
  {
    "id": "lkg_ms_i_3_q10",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "I.3: Wide and narrow",
    "concept": "Wide and narrow",
    "difficulty": "hard",
    "type": "mcq",
    "question": "What is the OPPOSITE of 'Wide'?",
    "questionHindi": "'चौड़ा (Wide)' का विलोम शब्द क्या है?",
    "visualEmoji": "Opposite of Wide = ?",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_i_3_q10_opt1",
          "text": "Narrow (संकीर्ण/पतला)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_i_3_q10_opt2",
          "text": "Tall",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_i_3_q10_opt3",
          "text": "Heavy",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The opposite of wide is narrow!",
    "explanationHindi": "चौड़ा का विलोम संकरा/पतला (Narrow) होता है!",
    "points": 20
  },
  // ==========================================================================
  // I.4: Light and heavy (10 Questions)
  // ==========================================================================
  {
    "id": "lkg_ms_i_4_q1",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "I.4: Light and heavy",
    "concept": "Light and heavy",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which item is HEAVIER: a giant rock 🪨 or a light bird feather 🪶?",
    "questionHindi": "कौन सी वस्तु अधिक भारी (Heavier) है: बड़ा पत्थर 🪨 या पक्षी का पंख 🪶?",
    "visualEmoji": "🪨 vs 🪶",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_i_4_q1_opt1",
          "text": "Giant rock 🪨 (Heavier)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_i_4_q1_opt2",
          "text": "Feather 🪶 (Lighter)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_i_4_q1_opt3",
          "text": "Both equal",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A solid rock is very heavy to lift!",
    "explanationHindi": "पत्थर बहुत भारी (Heavy) होता है!",
    "points": 10
  },
  {
    "id": "lkg_ms_i_4_q2",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "I.4: Light and heavy",
    "concept": "Light and heavy",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which item is LIGHTER: a floating party balloon 🎈 or a big metal truck 🚛?",
    "questionHindi": "कौन सी वस्तु हल्की (Lighter) है: हवा में उड़ता गुब्बारा 🎈 या बड़ा ट्रक 🚛?",
    "visualEmoji": "🎈 vs 🚛",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_i_4_q2_opt1",
          "text": "Balloon 🎈 (Lighter)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_i_4_q2_opt2",
          "text": "Truck 🚛 (Heavier)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_i_4_q2_opt3",
          "text": "Both equal",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A balloon is filled with air and floats effortlessly, so it is light!",
    "explanationHindi": "गुब्बारा हवा में तैरता है, अतः बहुत हल्का (Light) है!",
    "points": 10
  },
  {
    "id": "lkg_ms_i_4_q3",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "I.4: Light and heavy",
    "concept": "Light and heavy",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Which animal is HEAVIER: a giant elephant 🐘 or a tiny kitten 🐱?",
    "questionHindi": "कौन सा जानवर भारी है: विशाल हाथी 🐘 या छोटी बिल्ली 🐱?",
    "visualEmoji": "🐘 vs 🐱",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_i_4_q3_opt1",
          "text": "Elephant 🐘 (Heavy)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_i_4_q3_opt2",
          "text": "Kitten 🐱 (Light)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_i_4_q3_opt3",
          "text": "Both equal",
          "isCorrect": false
        }
      ]
    },
    "explanation": "An elephant weighs thousands of kilograms and is very heavy!",
    "explanationHindi": "हाथी बहुत भारी (Heavy) होता है!",
    "points": 10
  },
  {
    "id": "lkg_ms_i_4_q4",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "I.4: Light and heavy",
    "concept": "Light and heavy",
    "difficulty": "medium",
    "type": "mcq",
    "question": "On a seesaw, which side goes DOWN: the HEAVY side or the LIGHT side?",
    "questionHindi": "शी-सॉ झूले पर कौन सा हिस्सा नीचे जाता है: भारी (Heavy) या हल्का (Light)?",
    "visualEmoji": "Seesaw physics",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_i_4_q4_opt1",
          "text": "The HEAVY side goes down",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_i_4_q4_opt2",
          "text": "The light side goes down",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_i_4_q4_opt3",
          "text": "Neither",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Gravity pulls the heavier weight down!",
    "explanationHindi": "भारी हिस्सा नीचे झुकता है!",
    "points": 15
  },
  {
    "id": "lkg_ms_i_4_q5",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "I.4: Light and heavy",
    "concept": "Light and heavy",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which fruit is HEAVIER: a giant green watermelon 🍉 or a tiny red grape 🍇?",
    "questionHindi": "कौन सा फल भारी है: बड़ा तरबूज 🍉 या छोटा अंगूर 🍇?",
    "visualEmoji": "🍉 vs 🍇",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_i_4_q5_opt1",
          "text": "Watermelon 🍉 (Heavy)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_i_4_q5_opt2",
          "text": "Grape 🍇 (Light)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_i_4_q5_opt3",
          "text": "Both equal",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A watermelon is big, juicy, and very heavy!",
    "explanationHindi": "तरबूज बहुत भारी होता है!",
    "points": 15
  },
  {
    "id": "lkg_ms_i_4_q6",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "I.4: Light and heavy",
    "concept": "Light and heavy",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which object is LIGHTER: a fluffy cotton ball ☁️ or a heavy iron dumbbell 🏋️?",
    "questionHindi": "कौन सी वस्तु हल्की है: रुई का फाहा ☁️ या लोहे का डंबल 🏋️?",
    "visualEmoji": "Cotton ball vs Iron dumbbell",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_i_4_q6_opt1",
          "text": "Cotton ball ☁️ (Light)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_i_4_q6_opt2",
          "text": "Iron dumbbell 🏋️ (Heavy)",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_i_4_q6_opt3",
          "text": "Both equal",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A cotton ball weighs almost nothing!",
    "explanationHindi": "रुई बहुत हल्की (Light) होती है!",
    "points": 15
  },
  {
    "id": "lkg_ms_i_4_q7",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "I.4: Light and heavy",
    "concept": "Light and heavy",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Can the wind blow away a heavy brick 🧱?",
    "questionHindi": "क्या हवा एक भारी ईंट 🧱 को उड़ा सकती है?",
    "visualEmoji": "🧱 + 💨",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_i_4_q7_opt1",
          "text": "No, because the brick is too HEAVY",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_i_4_q7_opt2",
          "text": "Yes, it flies away easily",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_i_4_q7_opt3",
          "text": "Bricks float",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A brick is made of dense clay and is too heavy for the wind!",
    "explanationHindi": "ईंट भारी होती है, हवा इसे नहीं उड़ा सकती!",
    "points": 15
  },
  {
    "id": "lkg_ms_i_4_q8",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "I.4: Light and heavy",
    "concept": "Light and heavy",
    "difficulty": "hard",
    "type": "mcq",
    "question": "A dry autumn leaf 🍂 falls from a tree. Can the wind carry it? Is it light or heavy?",
    "questionHindi": "सूखा पत्ता 🍂 पेड़ से गिरता है। क्या हवा इसे उड़ा सकती है? यह हल्का है या भारी?",
    "visualEmoji": "🍂 + 💨",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_i_4_q8_opt1",
          "text": "Yes, because the leaf is very LIGHT",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_i_4_q8_opt2",
          "text": "No, it is too heavy",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_i_4_q8_opt3",
          "text": "Leaves sink like rocks",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A dry leaf is light and dances in the breeze!",
    "explanationHindi": "सूखा पत्ता हल्का होता है और हवा में तैरता है!",
    "points": 20
  },
  {
    "id": "lkg_ms_i_4_q9",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "I.4: Light and heavy",
    "concept": "Light and heavy",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Between an Elephant 🐘, a Dog 🐕, and an Ant 🐜, who is the HEAVIEST?",
    "questionHindi": "हाथी 🐘, कुत्ता 🐕, और चींटी 🐜 में सबसे भारी (Heaviest) कौन है?",
    "visualEmoji": "🐘 vs 🐕 vs 🐜",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_i_4_q9_opt1",
          "text": "Elephant 🐘 (Heaviest)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_i_4_q9_opt2",
          "text": "Dog 🐕",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_i_4_q9_opt3",
          "text": "Ant 🐜",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The elephant is the heaviest land mammal!",
    "explanationHindi": "हाथी सबसे भारी (Heaviest) है!",
    "points": 20
  },
  {
    "id": "lkg_ms_i_4_q10",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "I.4: Light and heavy",
    "concept": "Light and heavy",
    "difficulty": "hard",
    "type": "mcq",
    "question": "In that same group (Elephant 🐘, Dog 🐕, Ant 🐜), who is the LIGHTEST?",
    "questionHindi": "उसी समूह में सबसे हल्का (Lightest) कौन है?",
    "visualEmoji": "🐘 vs 🐕 vs 🐜",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_i_4_q10_opt1",
          "text": "Ant 🐜 (Lightest)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_i_4_q10_opt2",
          "text": "Dog 🐕",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_i_4_q10_opt3",
          "text": "Elephant 🐘",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A tiny ant is the lightest of all!",
    "explanationHindi": "छोटी चींटी सबसे हल्की (Lightest) होती है!",
    "points": 20
  },
  // ==========================================================================
  // J.1: Coin values (10 Questions)
  // ==========================================================================
  {
    "id": "lkg_ms_j_1_q1",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "J.1: Coin values",
    "concept": "Coin values",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Look at this Indian coin with the number '1' engraved: 🪙. How many rupees is it worth?",
    "questionHindi": "भारतीय सिक्के पर '1' लिखा है: 🪙। इसका मूल्य कितने रुपये है?",
    "visualEmoji": "🪙 (1 Rupee)",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_j_1_q1_opt1",
          "text": "₹1 (One Rupee)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_j_1_q1_opt2",
          "text": "₹2",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_j_1_q1_opt3",
          "text": "₹5",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A coin marked with 1 is worth ₹1 (One Rupee)!",
    "explanationHindi": "1 अंक वाला सिक्का ₹1 का होता है!",
    "points": 10
  },
  {
    "id": "lkg_ms_j_1_q2",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "J.1: Coin values",
    "concept": "Coin values",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Look at a coin with the number '2' stamped on it. How many rupees is it worth?",
    "questionHindi": "सिक्के पर '2' लिखा है। इसका मूल्य क्या है?",
    "visualEmoji": "🪙 (2 Rupees)",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_j_1_q2_opt1",
          "text": "₹2 (Two Rupees)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_j_1_q2_opt2",
          "text": "₹1",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_j_1_q2_opt3",
          "text": "₹10",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A coin marked with 2 is worth ₹2!",
    "explanationHindi": "2 अंक वाला सिक्का ₹2 का होता है!",
    "points": 10
  },
  {
    "id": "lkg_ms_j_1_q3",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "J.1: Coin values",
    "concept": "Coin values",
    "difficulty": "easy",
    "type": "mcq",
    "question": "Look at a gold-bordered coin with '5' on it. How many rupees is it worth?",
    "questionHindi": "सिक्के पर '5' लिखा है। इसका मूल्य क्या है?",
    "visualEmoji": "🪙 (5 Rupees)",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_j_1_q3_opt1",
          "text": "₹5 (Five Rupees)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_j_1_q3_opt2",
          "text": "₹2",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_j_1_q3_opt3",
          "text": "₹1",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A coin marked with 5 is worth ₹5!",
    "explanationHindi": "5 अंक वाला सिक्का ₹5 का होता है!",
    "points": 10
  },
  {
    "id": "lkg_ms_j_1_q4",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "J.1: Coin values",
    "concept": "Coin values",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Look at the bi-metallic coin with '10' on it. How many rupees is it worth?",
    "questionHindi": "सिक्के पर '10' लिखा है। इसका मूल्य क्या है?",
    "visualEmoji": "🪙 (10 Rupees)",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_j_1_q4_opt1",
          "text": "₹10 (Ten Rupees)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_j_1_q4_opt2",
          "text": "₹5",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_j_1_q4_opt3",
          "text": "₹20",
          "isCorrect": false
        }
      ]
    },
    "explanation": "The coin marked with 10 is worth ₹10!",
    "explanationHindi": "10 अंक वाला सिक्का ₹10 का होता है!",
    "points": 15
  },
  {
    "id": "lkg_ms_j_1_q5",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "J.1: Coin values",
    "concept": "Coin values",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which coin has a HIGHER value: a ₹5 coin or a ₹1 coin?",
    "questionHindi": "किस सिक्के का मूल्य अधिक है: ₹5 या ₹1?",
    "visualEmoji": "₹5 vs ₹1",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_j_1_q5_opt1",
          "text": "₹5 coin (Higher value)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_j_1_q5_opt2",
          "text": "₹1 coin",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_j_1_q5_opt3",
          "text": "Both are equal",
          "isCorrect": false
        }
      ]
    },
    "explanation": "₹5 is worth five times as much as ₹1!",
    "explanationHindi": "₹5 का सिक्का ₹1 से अधिक मूल्यवान है!",
    "points": 15
  },
  {
    "id": "lkg_ms_j_1_q6",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "J.1: Coin values",
    "concept": "Coin values",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which coin has a HIGHER value: a ₹10 coin or a ₹2 coin?",
    "questionHindi": "किस सिक्के का मूल्य अधिक है: ₹10 या ₹2?",
    "visualEmoji": "₹10 vs ₹2",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_j_1_q6_opt1",
          "text": "₹10 coin (Higher value)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_j_1_q6_opt2",
          "text": "₹2 coin",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_j_1_q6_opt3",
          "text": "Both equal",
          "isCorrect": false
        }
      ]
    },
    "explanation": "₹10 is greater than ₹2!",
    "explanationHindi": "₹10, ₹2 से अधिक है!",
    "points": 15
  },
  {
    "id": "lkg_ms_j_1_q7",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "J.1: Coin values",
    "concept": "Coin values",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Which coin has the SMALLEST value among these: ₹1, ₹5, ₹10?",
    "questionHindi": "इनमें से सबसे कम मूल्य का सिक्का कौन सा है: ₹1, ₹5, ₹10?",
    "visualEmoji": "₹1, ₹5, ₹10",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_j_1_q7_opt1",
          "text": "₹1 coin",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_j_1_q7_opt2",
          "text": "₹5 coin",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_j_1_q7_opt3",
          "text": "₹10 coin",
          "isCorrect": false
        }
      ]
    },
    "explanation": "₹1 is the smallest value among the three coins!",
    "explanationHindi": "₹1 का सिक्का सबसे छोटा मूल्य है!",
    "points": 15
  },
  {
    "id": "lkg_ms_j_1_q8",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "J.1: Coin values",
    "concept": "Coin values",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Which coin has the GREATEST value among: ₹2, ₹5, ₹10?",
    "questionHindi": "इनमें से सबसे बड़ा मूल्य किसका है: ₹2, ₹5, ₹10?",
    "visualEmoji": "₹2, ₹5, ₹10",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_j_1_q8_opt1",
          "text": "₹10 coin",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_j_1_q8_opt2",
          "text": "₹5 coin",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_j_1_q8_opt3",
          "text": "₹2 coin",
          "isCorrect": false
        }
      ]
    },
    "explanation": "₹10 is the biggest value coin here!",
    "explanationHindi": "₹10 का सिक्का सबसे बड़ा है!",
    "points": 20
  },
  {
    "id": "lkg_ms_j_1_q9",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "J.1: Coin values",
    "concept": "Coin values",
    "difficulty": "hard",
    "type": "mcq",
    "question": "How many ₹1 coins make the same value as ONE ₹2 coin?",
    "questionHindi": "कितने ₹1 के सिक्के मिलकर 1 ₹2 के सिक्के के बराबर होते हैं?",
    "visualEmoji": "₹1 + ₹1 = ?",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_j_1_q9_opt1",
          "text": "Two ₹1 coins (1 + 1 = 2)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_j_1_q9_opt2",
          "text": "One ₹1 coin",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_j_1_q9_opt3",
          "text": "Three ₹1 coins",
          "isCorrect": false
        }
      ]
    },
    "explanation": "1 + 1 = 2! Two ₹1 coins equal one ₹2 coin.",
    "explanationHindi": "1 + 1 = 2! दो ₹1 के सिक्के ₹2 के बराबर होते हैं।",
    "points": 20
  },
  {
    "id": "lkg_ms_j_1_q10",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "J.1: Coin values",
    "concept": "Coin values",
    "difficulty": "hard",
    "type": "mcq",
    "question": "How many ₹5 coins make the same value as ONE ₹10 coin?",
    "questionHindi": "कितने ₹5 के सिक्के मिलकर 1 ₹10 के सिक्के के बराबर होते हैं?",
    "visualEmoji": "₹5 + ₹5 = ?",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_j_1_q10_opt1",
          "text": "Two ₹5 coins (5 + 5 = 10)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_j_1_q10_opt2",
          "text": "One ₹5 coin",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_j_1_q10_opt3",
          "text": "Three ₹5 coins",
          "isCorrect": false
        }
      ]
    },
    "explanation": "5 + 5 = 10! Two ₹5 coins equal one ₹10 coin.",
    "explanationHindi": "5 + 5 = 10! दो ₹5 के सिक्के ₹10 के बराबर होते हैं।",
    "points": 20
  },
  // ==========================================================================
  // J.2: Count 1-rupee coins (10 Questions)
  // ==========================================================================
  {
    "id": "lkg_ms_j_2_q1",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "J.2: Count 1-rupee coins",
    "concept": "Count 1-rupee coins",
    "difficulty": "easy",
    "type": "mcq",
    "question": "How many ₹1 coins are in your palm: 🪙 🪙? What is the total value?",
    "questionHindi": "हथेली में कितने ₹1 के सिक्के हैं: 🪙 🪙? कुल मूल्य क्या है?",
    "visualEmoji": "🪙 🪙",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_j_2_q1_opt1",
          "text": "₹2 (Two ₹1 coins)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_j_2_q1_opt2",
          "text": "₹1",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_j_2_q1_opt3",
          "text": "₹3",
          "isCorrect": false
        }
      ]
    },
    "explanation": "1 + 1 = ₹2 in total!",
    "explanationHindi": "1 + 1 = कुल ₹2!",
    "points": 10
  },
  {
    "id": "lkg_ms_j_2_q2",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "J.2: Count 1-rupee coins",
    "concept": "Count 1-rupee coins",
    "difficulty": "easy",
    "type": "mcq",
    "question": "How many ₹1 coins are on the table: 🪙 🪙 🪙? Total rupees?",
    "questionHindi": "मेज पर कितने ₹1 के सिक्के हैं: 🪙 🪙 🪙? कुल रुपये कितने हैं?",
    "visualEmoji": "🪙 🪙 🪙",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_j_2_q2_opt1",
          "text": "₹3 (Three ₹1 coins)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_j_2_q2_opt2",
          "text": "₹2",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_j_2_q2_opt3",
          "text": "₹4",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Count: 1, 2, 3 coins = ₹3!",
    "explanationHindi": "गिनें: 1, 2, 3 सिक्के = कुल ₹3!",
    "points": 10
  },
  {
    "id": "lkg_ms_j_2_q3",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "J.2: Count 1-rupee coins",
    "concept": "Count 1-rupee coins",
    "difficulty": "easy",
    "type": "mcq",
    "question": "You have 1 single ₹1 coin: 🪙. What is its total value?",
    "questionHindi": "आपके पास 1 अकेला ₹1 का सिक्का है: 🪙। इसका मूल्य क्या है?",
    "visualEmoji": "🪙",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_j_2_q3_opt1",
          "text": "₹1 (One Rupee)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_j_2_q3_opt2",
          "text": "₹2",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_j_2_q3_opt3",
          "text": "₹0",
          "isCorrect": false
        }
      ]
    },
    "explanation": "A single ₹1 coin is worth ₹1!",
    "explanationHindi": "1 सिक्का = ₹1!",
    "points": 10
  },
  {
    "id": "lkg_ms_j_2_q4",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "J.2: Count 1-rupee coins",
    "concept": "Count 1-rupee coins",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Count these shiny ₹1 coins: 🪙 🪙 🪙 🪙. How many rupees do you have?",
    "questionHindi": "सिक्के गिनें: 🪙 🪙 🪙 🪙। आपके पास कितने रुपये हैं?",
    "visualEmoji": "🪙 🪙 🪙 🪙",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_j_2_q4_opt1",
          "text": "₹4 (Four Rupees)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_j_2_q4_opt2",
          "text": "₹3",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_j_2_q4_opt3",
          "text": "₹5",
          "isCorrect": false
        }
      ]
    },
    "explanation": "4 one-rupee coins equal ₹4!",
    "explanationHindi": "चार ₹1 के सिक्के = ₹4!",
    "points": 15
  },
  {
    "id": "lkg_ms_j_2_q5",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "J.2: Count 1-rupee coins",
    "concept": "Count 1-rupee coins",
    "difficulty": "medium",
    "type": "mcq",
    "question": "Count these coins: 🪙 🪙 🪙 🪙 🪙. How many rupees in your piggy bank?",
    "questionHindi": "गुल्लक में सिक्के गिनें: 🪙 🪙 🪙 🪙 🪙। कुल कितने रुपये हैं?",
    "visualEmoji": "🪙 🪙 🪙 🪙 🪙",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_j_2_q5_opt1",
          "text": "₹5 (Five Rupees)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_j_2_q5_opt2",
          "text": "₹4",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_j_2_q5_opt3",
          "text": "₹6",
          "isCorrect": false
        }
      ]
    },
    "explanation": "5 one-rupee coins equal ₹5!",
    "explanationHindi": "पाँच ₹1 के सिक्के = ₹5!",
    "points": 15
  },
  {
    "id": "lkg_ms_j_2_q6",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "J.2: Count 1-rupee coins",
    "concept": "Count 1-rupee coins",
    "difficulty": "medium",
    "type": "mcq",
    "question": "A delicious candy costs ₹3 🍬. How many ₹1 coins do you need to buy it?",
    "questionHindi": "एक टॉफी ₹3 की है 🍬। इसे खरीदने के लिए आपको कितने ₹1 के सिक्के चाहिए?",
    "visualEmoji": "🍬 costs ₹3",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_j_2_q6_opt1",
          "text": "3 coins (₹1 + ₹1 + ₹1)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_j_2_q6_opt2",
          "text": "2 coins",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_j_2_q6_opt3",
          "text": "4 coins",
          "isCorrect": false
        }
      ]
    },
    "explanation": "You need three ₹1 coins to pay ₹3!",
    "explanationHindi": "₹3 देने के लिए तीन ₹1 के सिक्के चाहिए!",
    "points": 15
  },
  {
    "id": "lkg_ms_j_2_q7",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "J.2: Count 1-rupee coins",
    "concept": "Count 1-rupee coins",
    "difficulty": "medium",
    "type": "mcq",
    "question": "An eraser costs ₹4 🧼. How many ₹1 coins will you give to the shopkeeper?",
    "questionHindi": "रबर ₹4 का है 🧼। आप दुकानदार को कितने ₹1 के सिक्के देंगे?",
    "visualEmoji": "🧼 costs ₹4",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_j_2_q7_opt1",
          "text": "4 coins",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_j_2_q7_opt2",
          "text": "3 coins",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_j_2_q7_opt3",
          "text": "5 coins",
          "isCorrect": false
        }
      ]
    },
    "explanation": "Give four ₹1 coins to pay ₹4!",
    "explanationHindi": "चार ₹1 के सिक्के दें!",
    "points": 15
  },
  {
    "id": "lkg_ms_j_2_q8",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "J.2: Count 1-rupee coins",
    "concept": "Count 1-rupee coins",
    "difficulty": "hard",
    "type": "mcq",
    "question": "You have 3 one-rupee coins: 🪙 🪙 🪙. Mom gives you 2 more 🪙 🪙. How many rupees now?",
    "questionHindi": "आपके पास 3 सिक्के हैं। माँ 2 और देती हैं। अब कितने रुपये हैं?",
    "visualEmoji": "₹3 + ₹2",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_j_2_q8_opt1",
          "text": "₹5 (Five Rupees)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_j_2_q8_opt2",
          "text": "₹4",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_j_2_q8_opt3",
          "text": "₹6",
          "isCorrect": false
        }
      ]
    },
    "explanation": "3 + 2 = ₹5 in total!",
    "explanationHindi": "3 + 2 = कुल ₹5!",
    "points": 20
  },
  {
    "id": "lkg_ms_j_2_q9",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "J.2: Count 1-rupee coins",
    "concept": "Count 1-rupee coins",
    "difficulty": "hard",
    "type": "mcq",
    "question": "You have five ₹1 coins 🪙🪙🪙🪙🪙. You buy a pencil for ₹2 ✏️. How many rupees are left?",
    "questionHindi": "आपके पास 5 सिक्के हैं। आप ₹2 की पेंसिल खरीदते हैं। कितने रुपये बचे?",
    "visualEmoji": "₹5 - ₹2",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_j_2_q9_opt1",
          "text": "₹3 left (Three coins)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_j_2_q9_opt2",
          "text": "₹4 left",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_j_2_q9_opt3",
          "text": "₹2 left",
          "isCorrect": false
        }
      ]
    },
    "explanation": "5 - 2 = ₹3 remaining!",
    "explanationHindi": "5 - 2 = ₹3 बचे!",
    "points": 20
  },
  {
    "id": "lkg_ms_j_2_q10",
    "grade": "LKG",
    "subject": "maths",
    "chapter": "J.2: Count 1-rupee coins",
    "concept": "Count 1-rupee coins",
    "difficulty": "hard",
    "type": "mcq",
    "question": "Count: 🪙🪙🪙🪙🪙 (5 coins) and 🪙🪙🪙🪙🪙 (5 coins). How many rupees in total?",
    "questionHindi": "गिनें: 5 सिक्के और 5 सिक्के। कुल कितने रुपये हुए?",
    "visualEmoji": "5 + 5 coins",
    "payload": {
      "options": [
        {
          "id": "lkg_ms_j_2_q10_opt1",
          "text": "₹10 (Ten Rupees)",
          "isCorrect": true
        },
        {
          "id": "lkg_ms_j_2_q10_opt2",
          "text": "₹9",
          "isCorrect": false
        },
        {
          "id": "lkg_ms_j_2_q10_opt3",
          "text": "₹8",
          "isCorrect": false
        }
      ]
    },
    "explanation": "5 + 5 = ₹10 in total!",
    "explanationHindi": "5 + 5 = कुल ₹10!",
    "points": 20
  },
];
