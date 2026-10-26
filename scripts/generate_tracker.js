import fs from 'fs';
import path from 'path';
import XLSX from 'xlsx';

// 32 Rich Questions for Class 2 Mathematics - Chapter 1: What is Long, What is Round? (क्या है लंबा, क्या है गोल?)
export const CLASS_2_CH1_QUESTIONS = [
  {
    id: "Q_C2_M_CH1_01",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "Maths",
    chapter: "Chapter 1: What is Long, What is Round?",
    chapterCode: "C2_MATH_CH1",
    text: "Which of the following objects is completely ROUND (गोल) in shape?",
    options: { A: "Cricket Ball", B: "Bat", C: "Pencil Box", D: "Ruler Scale" },
    text_hi: "निम्नलिखित में से कौन सी वस्तु पूरी तरह 'गोल' (Round) होती है?",
    options_hi: { A: "क्रिकेट की गेंद", B: "बल्ला", C: "पेंसिल बॉक्स", D: "पैमाना (स्केल)" },
    correctAnswer: "A",
    guruHint: "It has no flat sides and rolls smoothly in all directions.",
    guruHint_hi: "इसकी कोई समतल सतह नहीं होती और यह सभी दिशाओं में आसानी से लुढ़कती है।",
    explanation: "A cricket ball is spherical and completely round."
  },
  {
    id: "Q_C2_M_CH1_02",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "Maths",
    chapter: "Chapter 1: What is Long, What is Round?",
    chapterCode: "C2_MATH_CH1",
    text: "Which of the following objects is LONG (लंबा) in shape?",
    options: { A: "Bangle", B: "Tomato", C: "Ruler Scale", D: "Orange" },
    text_hi: "निम्नलिखित में से कौन सी वस्तु आकार में 'लंबी' (Long) होती है?",
    options_hi: { A: "चूड़ी", B: "टमाटर", C: "रूलर स्केल (पैमाना)", D: "संतरा" },
    correctAnswer: "C",
    guruHint: "You use it in school to draw straight long lines in your notebook.",
    guruHint_hi: "इसका उपयोग स्कूल में कॉपी पर सीधी लंबी लाइन खींचने के लिए किया जाता है।",
    explanation: "A ruler scale is long and straight."
  },
  {
    id: "Q_C2_M_CH1_03",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "Maths",
    chapter: "Chapter 1: What is Long, What is Round?",
    chapterCode: "C2_MATH_CH1",
    text: "What happens to a football when you push it across the playground floor?",
    options: { A: "It rolls (लुढ़कती है)", B: "It slides (सरकती है)", C: "It breaks", D: "It stands still" },
    text_hi: "जब आप फुटबॉल को खेल के मैदान पर धक्का देते हैं, तो वह क्या करती है?",
    options_hi: { A: "वह लुढ़कती है (Rolls)", B: "वह केवल सरकती है (Slides)", C: "वह टूट जाती है", D: "वह स्थिर रहती है" },
    correctAnswer: "A",
    guruHint: "Round objects with curved surfaces roll when pushed.",
    guruHint_hi: "गोल और घुमावदार सतह वाली वस्तुएं धक्का देने पर लुढ़कती (Roll) हैं।",
    explanation: "Due to its curved spherical surface, a football rolls easily."
  },
  {
    id: "Q_C2_M_CH1_04",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "Maths",
    chapter: "Chapter 1: What is Long, What is Round?",
    chapterCode: "C2_MATH_CH1",
    text: "Which of the following objects will SLIDE (सरकेगी) when pushed across a flat table?",
    options: { A: "Marble", B: "Matchbox", C: "Lemon", D: "Tennis Ball" },
    text_hi: "समतल मेज पर धक्का देने पर इनमें से कौन सी वस्तु 'सरकेगी' (Slide)?",
    options_hi: { A: "कंचा (Marble)", B: "माचिस की डिब्बी", C: "नींबू", D: "टेनिस गेंद" },
    correctAnswer: "B",
    guruHint: "Objects with flat bottom surfaces slide rather than roll.",
    guruHint_hi: "जिन वस्तुओं की नीचे की सतह चपटी (समतल) होती है, वे सरकती हैं।",
    explanation: "A matchbox has flat rectangular faces, so it slides when pushed."
  },
  {
    id: "Q_C2_M_CH1_05",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "Maths",
    chapter: "Chapter 1: What is Long, What is Round?",
    chapterCode: "C2_MATH_CH1",
    text: "Which of these objects can BOTH ROLL and SLIDE (लुढ़क और सरक दोनों सकती है)?",
    options: { A: "One-rupee Coin", B: "Eraser", C: "Football", D: "Textbook" },
    text_hi: "इनमें से कौन सी वस्तु लुढ़क (Roll) भी सकती है और सरक (Slide) भी सकती है?",
    options_hi: { A: "एक रुपये का सिक्का", B: "रबड़ (Eraser)", C: "फुटबॉल", D: "किताब" },
    correctAnswer: "A",
    guruHint: "On its edge it rolls, and on its flat circular face it slides.",
    guruHint_hi: "किनारे के बल यह लुढ़कता है, और चपटी सतह के बल यह सरकता है।",
    explanation: "A coin has flat faces (slides) and a round edge (rolls)."
  },
  {
    id: "Q_C2_M_CH1_06",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "Maths",
    chapter: "Chapter 1: What is Long, What is Round?",
    chapterCode: "C2_MATH_CH1",
    text: "How many CORNERS (कोने) does a round circular plate or ball have?",
    options: { A: "0", B: "1", C: "3", D: "4" },
    text_hi: "एक गोल गेंद या थाली में कुल कितने 'कोने' (Corners) होते हैं?",
    options_hi: { A: "0 (शून्य)", B: "1", C: "3", D: "4" },
    correctAnswer: "A",
    guruHint: "Round shapes are curved throughout and have no sharp turns.",
    guruHint_hi: "गोल आकृतियों में कोई नुकीला मोड़ या कोना नहीं होता।",
    explanation: "Circles and spheres have zero corners."
  },
  {
    id: "Q_C2_M_CH1_07",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "Maths",
    chapter: "Chapter 1: What is Long, What is Round?",
    chapterCode: "C2_MATH_CH1",
    text: "How many corners does your rectangular Math-Magic textbook have?",
    options: { A: "2", B: "3", C: "4", D: "6" },
    text_hi: "आपकी गणित की किताब (आयताकार) के कितने कोने होते हैं?",
    options_hi: { A: "2", B: "3", C: "4", D: "6" },
    correctAnswer: "C",
    guruHint: "Count the four sharp points of the front cover.",
    guruHint_hi: "किताब के मुख्य पृष्ठ के चारों नुकीले सिरों को गिनें।",
    explanation: "A rectangle has exactly 4 corners and 4 sides."
  },
  {
    id: "Q_C2_M_CH1_08",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "Maths",
    chapter: "Chapter 1: What is Long, What is Round?",
    chapterCode: "C2_MATH_CH1",
    text: "Which of the following CANNOT easily be stacked to make a tall tower?",
    options: { A: "Matchboxes", B: "Ten-rupee Coins", C: "Round Oranges", D: "Wooden Blocks" },
    text_hi: "इनमें से किसके ऊपर दूसरा रखकर मीनार (Tower) नहीं बनाई जा सकती?",
    options_hi: { A: "माचिस की डिब्बियां", B: "दस रुपये के सिक्के", C: "गोल संतरे", D: "लकड़ी के गुटके" },
    correctAnswer: "C",
    guruHint: "Because it is round, it rolls off when another one is put on top.",
    guruHint_hi: "क्योंकि यह गोल होता है, इसके ऊपर दूसरा संतरा रखने पर वह फिसलकर लुढ़क जाता है।",
    explanation: "Round objects like oranges roll and cannot stand stably on top of each other."
  },
  {
    id: "Q_C2_M_CH1_09",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "Maths",
    chapter: "Chapter 1: What is Long, What is Round?",
    chapterCode: "C2_MATH_CH1",
    text: "Which of these can easily be stacked on top of each other to make a tall tower?",
    options: { A: "Tennis balls", B: "Marbles", C: "Ludo Dices", D: "Lemons" },
    text_hi: "एक के ऊपर एक रखकर किसकी ऊंची मीनार आसानी से बनाई जा सकती है?",
    options_hi: { A: "टेनिस गेंदों की", B: "कंचों की", C: "लूडो के पासों (Dice) की", D: "नींबुओं की" },
    correctAnswer: "C",
    guruHint: "It has flat cube faces that rest firmly on each other.",
    guruHint_hi: "इसके सभी फलक समतल (Flat) होते हैं जो एक दूसरे पर स्थिर टिकते हैं।",
    explanation: "Objects with flat faces like dice can be stacked to form a tower."
  },
  {
    id: "Q_C2_M_CH1_10",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "Maths",
    chapter: "Chapter 1: What is Long, What is Round?",
    chapterCode: "C2_MATH_CH1",
    text: "Riddle from Math-Magic: 'Pointed at one end, flat at the other, but round like a pipe. What am I?'",
    options: { A: "Pencil", B: "Ball", C: "Coin", D: "Eraser" },
    text_hi: "पहेली: 'एक सिरे से नुकीली, दूसरे से चपटी, लेकिन पाइप जैसी गोल। बताओ मैं कौन हूँ?'",
    options_hi: { A: "पेंसिल", B: "गेंद", C: "सिक्का", D: "रबड़" },
    correctAnswer: "A",
    guruHint: "You sharpen its tip to write and draw in class.",
    guruHint_hi: "आप इसे छीलकर कॉपी में सुंदर चित्र और अक्षर लिखते हैं।",
    explanation: "A sharpened pencil has a pointed tip, a flat bottom, and a round body."
  },
  {
    id: "Q_C2_M_CH1_11",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "Maths",
    chapter: "Chapter 1: What is Long, What is Round?",
    chapterCode: "C2_MATH_CH1",
    text: "Riddle from Math-Magic: 'Round all around, has no corners, you can roll me in your hand. What am I?'",
    options: { A: "Cricket Ball", B: "Scale", C: "Pencil Box", D: "Book" },
    text_hi: "पहेली: 'चारों तरफ से गोल-मटोल, कोई कोना नहीं, हाथ में रखो तो लुढ़क जाऊं। बताओ मैं कौन हूँ?'",
    options_hi: { A: "क्रिकेट की गेंद", B: "पैमाना", C: "पेंसिल बॉक्स", D: "किताब" },
    correctAnswer: "A",
    guruHint: "Batsmen hit it for four or six runs.",
    guruHint_hi: "बल्लेबाज इसे बल्ले से मारकर चौका या छक्का लगाते हैं।",
    explanation: "A ball is round everywhere with zero corners."
  },
  {
    id: "Q_C2_M_CH1_12",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "Maths",
    chapter: "Chapter 1: What is Long, What is Round?",
    chapterCode: "C2_MATH_CH1",
    text: "Which of the following fruits is completely ROUND in shape?",
    options: { A: "Banana", B: "Sweet Lime / Orange", C: "Cucumber", D: "Drumstick" },
    text_hi: "इनमें से कौन सा फल पूरी तरह 'गोल' (Round) आकार का होता है?",
    options_hi: { A: "केला", B: "मौसमी / संतरा", C: "खीरा", D: "सहजन" },
    correctAnswer: "B",
    guruHint: "It looks like a small orange ball packed with juicy slices.",
    guruHint_hi: "यह एक छोटी गोल गेंद जैसा दिखता है जिसमें रसदार फांकें होती हैं।",
    explanation: "An orange is round, while banana and cucumber are long."
  },
  {
    id: "Q_C2_M_CH1_13",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "Maths",
    chapter: "Chapter 1: What is Long, What is Round?",
    chapterCode: "C2_MATH_CH1",
    text: "Which of the following vegetables is LONG in shape?",
    options: { A: "Cucumber (खीरा)", B: "Tomato (टमाटर)", C: "Onion (प्याज)", D: "Lemon (नींबू)" },
    text_hi: "इनमें से कौन सी सब्जी आकार में 'लंबी' (Long) होती है?",
    options_hi: { A: "खीरा (Cucumber)", B: "टमाटर", C: "प्याज", D: "नींबू" },
    correctAnswer: "A",
    guruHint: "It is green, crunchy, long, and eaten raw in green salads.",
    guruHint_hi: "यह हरी, लंबी होती है और सलाद में काटकर खाई जाती है।",
    explanation: "A cucumber is long, whereas tomato, onion, and lemon are round."
  },
  {
    id: "Q_C2_M_CH1_14",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "Maths",
    chapter: "Chapter 1: What is Long, What is Round?",
    chapterCode: "C2_MATH_CH1",
    text: "If you push a circular water bottle lying on its side, it rolls. If you push it standing upright, what does it do?",
    options: { A: "It slides", B: "It flies", C: "It rolls", D: "It turns into a ball" },
    text_hi: "यदि पानी की गोल बोतल को लिटाकर धक्का दें तो वह लुढ़कती है। यदि उसे सीधा खड़ा करके धक्का दें तो वह क्या करेगी?",
    options_hi: { A: "वह सरकेगी (Slides)", B: "वह उड़ जाएगी", C: "वह लुढ़केगी (Rolls)", D: "वह गेंद बन जाएगी" },
    correctAnswer: "A",
    guruHint: "Its flat bottom base touches the table surface, causing it to slide.",
    guruHint_hi: "इसका नीचे का चपटा पेंदा मेज को छूता है, जिससे यह सरकती है।",
    explanation: "On its flat circular bottom, a bottle slides; on its curved side, it rolls."
  },
  {
    id: "Q_C2_M_CH1_15",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "Maths",
    chapter: "Chapter 1: What is Long, What is Round?",
    chapterCode: "C2_MATH_CH1",
    text: "Why are wheels of bicycles, cars, and buses always made ROUND?",
    options: { A: "So they can roll smoothly", B: "To make them look pretty", C: "So they slide on the road", D: "Because corners are fast" },
    text_hi: "साइकिल, कार और बस के पहिये हमेशा 'गोल' ही क्यों बनाए जाते हैं?",
    options_hi: { A: "ताकि वे सड़क पर आसानी से लुढ़क (Roll) सकें", B: "ताकि वे सुंदर दिखें", C: "ताकि वे सड़क पर केवल सरकें", D: "क्योंकि कोनों से गति बढ़ती है" },
    correctAnswer: "A",
    guruHint: "Round shapes have no corners, so they rotate and roll with minimal effort.",
    guruHint_hi: "गोल पहिए बिना किसी रुकावट के आसानी से घूमते और लुढ़कते हैं।",
    explanation: "Round wheels roll effortlessly without getting stuck on corners."
  },
  {
    id: "Q_C2_M_CH1_16",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "Maths",
    chapter: "Chapter 1: What is Long, What is Round?",
    chapterCode: "C2_MATH_CH1",
    text: "Which of the following geometric shapes has exactly 3 CORNERS?",
    options: { A: "Triangle", B: "Circle", C: "Square", D: "Rectangle" },
    text_hi: "इनमें से किस ज्यामितीय आकृति के ठीक '3 कोने' होते हैं?",
    options_hi: { A: "त्रिभुज (Triangle)", B: "वृत्त (Circle)", C: "वर्ग (Square)", D: "आयत (Rectangle)" },
    correctAnswer: "A",
    guruHint: "'Tri' means three. Think of a slice of pizza or a samosa.",
    guruHint_hi: "'त्रि' का अर्थ तीन होता है। जैसे समोसे के तीन कोने होते हैं।",
    explanation: "A triangle has exactly 3 sides and 3 corners."
  },
  {
    id: "Q_C2_M_CH1_17",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "Maths",
    chapter: "Chapter 1: What is Long, What is Round?",
    chapterCode: "C2_MATH_CH1",
    text: "When you play Carrom, what happens when you strike a carrom coin with the striker?",
    options: { A: "The coin slides across the smooth board", B: "The coin rolls like a ball", C: "The coin bounces like rubber", D: "The coin stands on edge" },
    text_hi: "कैरम बोर्ड पर स्ट्राइकर से गोटी पर चोट मारने पर गोटी क्या करती है?",
    options_hi: { A: "गोटी बोर्ड पर फिसलती/सरकती (Slide) है", B: "गोटी गेंद की तरह लुढ़कती है", C: "गोटी हवा में उड़ती है", D: "गोटी खड़ी हो जाती है" },
    correctAnswer: "A",
    guruHint: "The bottom of the coin is flat, so it slides across the smooth powder.",
    guruHint_hi: "गोटी की निचली सतह चपटी होती है, इसलिए वह पाउडर पर तेजी से सरकती है।",
    explanation: "Carrom coins and strikers slide because their contact surfaces are completely flat."
  },
  {
    id: "Q_C2_M_CH1_18",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "Maths",
    chapter: "Chapter 1: What is Long, What is Round?",
    chapterCode: "C2_MATH_CH1",
    text: "If you try to spin a 5-rupee coin on its curved edge on a flat floor, it can:",
    options: { A: "Roll forward like a tiny wheel", B: "Fly like a bird", C: "Disappear", D: "Melt instantly" },
    text_hi: "यदि आप 5 रुपये के सिक्के को किनारे के बल फर्श पर घुमाएँ, तो वह क्या कर सकता है?",
    options_hi: { A: "छोटे पहिये की तरह आगे लुढ़क (Roll) सकता है", B: "पक्षी की तरह उड़ सकता है", C: "गायब हो सकता है", D: "पिघल सकता है" },
    correctAnswer: "A",
    guruHint: "Its round edge acts just like a bicycle wheel.",
    guruHint_hi: "सिक्के का गोल किनारा पहिये की भांति कार्य करता है।",
    explanation: "Coins can roll on their round edges like miniature wheels."
  },
  {
    id: "Q_C2_M_CH1_19",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "Maths",
    chapter: "Chapter 1: What is Long, What is Round?",
    chapterCode: "C2_MATH_CH1",
    text: "Can you make a stable tower by placing 4 glass marbles (कंचे) on top of each other?",
    options: { A: "No, because round marbles roll off", B: "Yes, easily up to 10 marbles", C: "Yes, marbles are flat", D: "Yes, marbles stick like glue" },
    text_hi: "क्या आप 4 कांच के कंचों को एक के ऊपर एक रखकर सीधी मीनार बना सकते हैं?",
    options_hi: { A: "नहीं, क्योंकि गोल कंचे फिसलकर लुढ़क जाएंगे", B: "हाँ, 10 कंचे भी रख सकते हैं", C: "हाँ, कंचे चपटे होते हैं", D: "हाँ, कंचे चुंबक जैसे चिपकते हैं" },
    correctAnswer: "A",
    guruHint: "Spherical objects have no flat surfaces to balance another marble.",
    guruHint_hi: "गोल कंचों पर कोई चपटी सतह नहीं होती, इसलिए वे तुरंत गिरकर लुढ़क जाते हैं।",
    explanation: "Completely spherical objects roll off and cannot be stacked."
  },
  {
    id: "Q_C2_M_CH1_20",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "Maths",
    chapter: "Chapter 1: What is Long, What is Round?",
    chapterCode: "C2_MATH_CH1",
    text: "Which of the following objects is BOTH LONG and ROUND like a pipe?",
    options: { A: "Flute (बांसुरी)", B: "Coin", C: "Eraser", D: "Postcard" },
    text_hi: "इनमें से कौन सी वस्तु पाइप की तरह 'लंबी और गोल' दोनों होती है?",
    options_hi: { A: "बांसुरी (Flute)", B: "सिक्का", C: "रबड़", D: "पोस्टकार्ड" },
    correctAnswer: "A",
    guruHint: "Lord Krishna plays sweet melodies on this hollow musical instrument.",
    guruHint_hi: "भगवान श्रीकृष्ण इस वाद्य यंत्र से मधुर धुन बजाते हैं।",
    explanation: "A flute is cylindrical: long throughout its body and circular in cross-section."
  },
  {
    id: "Q_C2_M_CH1_21",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "Maths",
    chapter: "Chapter 1: What is Long, What is Round?",
    chapterCode: "C2_MATH_CH1",
    text: "Which kitchen item has a completely circular flat surface with NO corners?",
    options: { A: "Dining Thali (थाली)", B: "Matchbox", C: "Bread Slice", D: "Spice Box" },
    text_hi: "रसोई का कौन सा बर्तन पूरी तरह गोल होता है और उसमें कोई कोना नहीं होता?",
    options_hi: { A: "थाली (Dining Thali)", B: "माचिस", C: "ब्रेड स्लाइस", D: "मसाला पेटी" },
    correctAnswer: "A",
    guruHint: "You eat daily meals of roti, rice, and dal in this round dish.",
    guruHint_hi: "आप इसमें प्रतिदिन रोटी, दाल और चावल परोस कर भोजन करते हैं।",
    explanation: "A round dining plate (thali) has a circular rim with zero corners."
  },
  {
    id: "Q_C2_M_CH1_22",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "Maths",
    chapter: "Chapter 1: What is Long, What is Round?",
    chapterCode: "C2_MATH_CH1",
    text: "Why does an eraser (रबड़) slide on paper instead of rolling?",
    options: { A: "Because it has flat surfaces", B: "Because it is heavy", C: "Because it has wheels", D: "Because it is liquid" },
    text_hi: "एक रबड़ (Eraser) कागज पर लुढ़कने के बजाय सरकती क्यों है?",
    options_hi: { A: "क्योंकि इसकी सतह समतल (Flat) होती है", B: "क्योंकि वह भारी होती है", C: "क्योंकि उसमें पहिए लगे होते हैं", D: "क्योंकि वह तरल होती है" },
    correctAnswer: "A",
    guruHint: "Flat surfaces make contact with paper and slide smoothly.",
    guruHint_hi: "समतल पृष्ठ कागज के संपर्क में आकर आसानी से सरकता है।",
    explanation: "Objects with flat planar faces slide rather than roll."
  },
  {
    id: "Q_C2_M_CH1_23",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "Maths",
    chapter: "Chapter 1: What is Long, What is Round?",
    chapterCode: "C2_MATH_CH1",
    text: "Which of the following fruits will ROLL fastest down a park slide?",
    options: { A: "Watermelon (तरबूज)", B: "Banana (केला)", C: "Pineapple slice", D: "Cucumber slice" },
    text_hi: "पार्क की फिसलपट्टी (Slide) से नीचे लुढ़काने पर कौन सा फल सबसे तेज लुढ़केगा?",
    options_hi: { A: "गोल तरबूज (Watermelon)", B: "केला", C: "अनानास का टुकड़ा", D: "खीरे की फांक" },
    correctAnswer: "A",
    guruHint: "It is large, round, green, and rolls down slopes easily.",
    guruHint_hi: "यह गोल-मटोल होता है और ढलान पर तेजी से लुढ़कता है।",
    explanation: "A round watermelon rolls rapidly down any inclined slope."
  },
  {
    id: "Q_C2_M_CH1_24",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "Maths",
    chapter: "Chapter 1: What is Long, What is Round?",
    chapterCode: "C2_MATH_CH1",
    text: "How many FLAT FACES does a standard cubical playing dice have?",
    options: { A: "4", B: "6", C: "8", D: "12" },
    text_hi: "लूडो के एक मानक पासे (Dice) में कुल कितने समतल फलक (Flat Faces) होते हैं?",
    options_hi: { A: "4", B: "6", C: "8", D: "12" },
    correctAnswer: "B",
    guruHint: "The faces are numbered from 1 dot up to 6 dots.",
    guruHint_hi: "इस पर 1 से लेकर 6 तक बिंदु (अंक) अंकित होते हैं।",
    explanation: "A cube has 6 flat square faces numbered 1 to 6."
  },
  {
    id: "Q_C2_M_CH1_25",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "Maths",
    chapter: "Chapter 1: What is Long, What is Round?",
    chapterCode: "C2_MATH_CH1",
    text: "What shape is a festive birthday party cap?",
    options: { A: "Cone (शंकु)", B: "Circle", C: "Square", D: "Rectangle" },
    text_hi: "जन्मदिन पर सिर पर पहनी जाने वाली जोकर टोपी का आकार क्या होता है?",
    options_hi: { A: "शंकु (Cone)", B: "वृत्त", C: "वर्ग", D: "आयत" },
    correctAnswer: "A",
    guruHint: "It has a sharp point at the top and a circular open base at the bottom.",
    guruHint_hi: "ऊपर एक नुकीला सिरा और नीचे एक गोल आधार होता है।",
    explanation: "A birthday party cap is cone-shaped (pointed top with circular base)."
  },
  {
    id: "Q_C2_M_CH1_26",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "Maths",
    chapter: "Chapter 1: What is Long, What is Round?",
    chapterCode: "C2_MATH_CH1",
    text: "If you place a flat ₹10 note on the desk and blow air at it, what will it do?",
    options: { A: "Slide across the table", B: "Roll into a ball on its own", C: "Turn into a coin", D: "Break into pieces" },
    text_hi: "यदि आप 10 रुपये के नोट को मेज पर रखकर फूंक मारें, तो वह क्या करेगा?",
    options_hi: { A: "मेज पर सरक जाएगा (Slides)", B: "अपने आप गेंद की तरह लुढ़क जाएगा", C: "सिक्का बन जाएगा", D: "टूट जाएगा" },
    correctAnswer: "A",
    guruHint: "Paper currency is thin and flat, so it glides and slides.",
    guruHint_hi: "कागजी नोट समतल और पतला होता है, इसलिए हवा से सरकता है।",
    explanation: "Flat paper notes slide across smooth surfaces."
  },
  {
    id: "Q_C2_M_CH1_27",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "Maths",
    chapter: "Chapter 1: What is Long, What is Round?",
    chapterCode: "C2_MATH_CH1",
    text: "Which of these classroom items has a flat circular base and rolls on its side?",
    options: { A: "Chalk piece", B: "Blackboard", C: "Notice board", D: "School bell rope" },
    text_hi: "कक्षा की इनमें से कौन सी वस्तु लिटाने पर लुढ़कती है और खड़ा करने पर सरकती है?",
    options_hi: { A: "चॉक (Chalk piece)", B: "श्यामपट्ट (Blackboard)", C: "नोटिस बोर्ड", D: "घंटी की रस्सी" },
    correctAnswer: "A",
    guruHint: "Teachers write on the board using this white cylindrical stick.",
    guruHint_hi: "अध्यापक बोर्ड पर लिखने के लिए इस बेलनाकार छड़ी का उपयोग करते हैं।",
    explanation: "A piece of chalk is cylindrical: it rolls on its curved surface and slides on its base."
  },
  {
    id: "Q_C2_M_CH1_28",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "Maths",
    chapter: "Chapter 1: What is Long, What is Round?",
    chapterCode: "C2_MATH_CH1",
    text: "In the Math-Magic game 'Guess its Name', how does Meeku Chacha identify objects blindfolded?",
    options: { A: "By touching and feeling their shape", B: "By opening his eyes secretly", C: "By smelling them only", D: "By tasting them" },
    text_hi: "गणित का जादू के खेल 'नाम बताओ' में मीकू चाचा आंख पर पट्टी बांधकर वस्तुओं को कैसे पहचानते हैं?",
    options_hi: { A: "हाथ से छूकर और उनके आकार को महसूस करके", B: "चोरी से आंखें खोलकर", C: "केवल सूंघकर", D: "चखकर" },
    correctAnswer: "A",
    guruHint: "His hands feel whether the object is round, long, pointed, or flat.",
    guruHint_hi: "उनके हाथ यह महसूस करते हैं कि वस्तु गोल है, लंबी है या चपटी।",
    explanation: "In blindfold shape games, students use touch to discern rolling and sliding contours."
  },
  {
    id: "Q_C2_M_CH1_29",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "Maths",
    chapter: "Chapter 1: What is Long, What is Round?",
    chapterCode: "C2_MATH_CH1",
    text: "A coin has TWO flat faces. What are they traditionally called?",
    options: { A: "Heads and Tails (चित और पट)", B: "Front and Side", C: "North and South", D: "Top and Edge" },
    text_hi: "सिक्के के दो समतल पहलू (Faces) होते हैं। उन्हें सामान्यतः क्या कहा जाता है?",
    options_hi: { A: "चित और पट (Heads and Tails)", B: "आगे और बाजू", C: "उत्तर और दक्षिण", D: "ऊपर और किनारा" },
    correctAnswer: "A",
    guruHint: "Used for coin tossing before a cricket match.",
    guruHint_hi: "क्रिकेट मैच में टॉस करते समय कप्तान चित या पट मांगते हैं।",
    explanation: "A coin has two flat circular faces called Heads and Tails."
  },
  {
    id: "Q_C2_M_CH1_30",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "Maths",
    chapter: "Chapter 1: What is Long, What is Round?",
    chapterCode: "C2_MATH_CH1",
    text: "Can a candle both ROLL and SLIDE?",
    options: { A: "Yes, rolls on curved side and slides on base", B: "No, candles only burn", C: "No, candles can only slide", D: "No, candles can only roll" },
    text_hi: "क्या मोमबत्ती (Candle) लुढ़क भी सकती है और सरक भी सकती है?",
    options_hi: { A: "हाँ, लिटाने पर लुढ़कती है और खड़ी करने पर सरकती है", B: "नहीं, मोमबत्ती केवल जलती है", C: "नहीं, वह केवल सरक सकती है", D: "नहीं, वह केवल लुढ़क सकती है" },
    correctAnswer: "A",
    guruHint: "A candle is cylinder-shaped just like a bottle or pipe.",
    guruHint_hi: "मोमबत्ती बेलनाकार होती है, जिसमें एक चपटा आधार और गोल किनारा होता है।",
    explanation: "A cylinder (candle) rolls on its curved body and slides on its flat circular base."
  },
  // FFF Ordering Questions for Class 2 Chapter 1
  {
    id: "Q_C2_M_CH1_FFF_01",
    division: "Junior",
    grade: 2,
    bracket: "FFF",
    subject: "Maths",
    chapter: "Chapter 1: What is Long, What is Round?",
    chapterCode: "C2_MATH_CH1",
    text: "Arrange these shapes in ASCENDING order of their number of corners (from LEAST to MOST):",
    options: { A: "Triangle (3)", B: "Circle (0)", C: "Pentagon (5)", D: "Square (4)" },
    text_hi: "इन आकृतियों को उनके कोनों की संख्या के आरोही क्रम (सबसे कम से सबसे अधिक) में व्यवस्थित करें:",
    options_hi: { A: "त्रिभुज (3 कोने)", B: "वृत्त (0 कोना)", C: "पंचभुज (5 कोने)", D: "वर्ग (4 कोने)" },
    correctAnswer: "B,A,D,C", // Circle (0), Triangle (3), Square (4), Pentagon (5)
    guruHint: "Circle has 0, Triangle has 3, Square has 4, Pentagon has 5.",
    guruHint_hi: "वृत्त: 0 ➔ त्रिभुज: 3 ➔ वर्ग: 4 ➔ पंचभुज: 5.",
    explanation: "Corners count: Circle = 0, Triangle = 3, Square = 4, Pentagon = 5."
  },
  {
    id: "Q_C2_M_CH1_FFF_02",
    division: "Junior",
    grade: 2,
    bracket: "FFF",
    subject: "Maths",
    chapter: "Chapter 1: What is Long, What is Round?",
    chapterCode: "C2_MATH_CH1",
    text: "Arrange these sports objects from ROUNDEST to LONGEST in shape:",
    options: { A: "Cricket Bat", B: "Hockey Stick", C: "Cricket Ball", D: "Water Bottle" },
    text_hi: "इन खेल सामग्रियों को सबसे गोल से सबसे लंबे के क्रम में व्यवस्थित करें:",
    options_hi: { A: "क्रिकेट बल्ला", B: "हॉकी स्टिक", C: "क्रिकेट गेंद", D: "पानी की बोतल" },
    correctAnswer: "C,D,A,B", // Ball (pure round) -> Bottle (cylinder) -> Bat (long) -> Hockey Stick (longest)
    guruHint: "Start with the pure sphere, then cylinder, then flat long bat, then long hockey stick.",
    guruHint_hi: "गेंद (पूरी गोल) ➔ बोतल (गोल-लंबी) ➔ बल्ला (लंबा) ➔ हॉकी स्टिक।",
    explanation: "Correct progression from spherical to elongated object."
  }
];

// NCERT Class 2 to 12 Syllabus Overview for the Master Tracker Sheet
export const NCERT_SYLLABUS_TRACKER = [
  // Class 2 Mathematics (Math-Magic / Joyful Maths)
  {
    classNum: "Class 2",
    subject: "Mathematics",
    chapterNum: "Chapter 1",
    chapterTitle: "What is Long, What is Round? (क्या है लंबा, क्या है गोल?)",
    totalQuestionsAdded: 32,
    status: "COMPLETED",
    coverageDetails: "Rolling vs Sliding, Stacking Towers, Shapes, Corners & Edges",
    lastUpdated: new Date().toLocaleDateString('en-IN')
  },
  {
    classNum: "Class 2",
    subject: "Mathematics",
    chapterNum: "Chapter 2",
    chapterTitle: "Counting in Groups (गिनो मगर समूह में)",
    totalQuestionsAdded: 0,
    status: "PENDING",
    coverageDetails: "Pairs, Counting in 2s, 5s, 10s, Estimation, Guessing counts",
    lastUpdated: "-"
  },
  {
    classNum: "Class 2",
    subject: "Mathematics",
    chapterNum: "Chapter 3",
    chapterTitle: "How Much Can You Carry? (तुम कितना वज़न उठा सकते हो?)",
    totalQuestionsAdded: 0,
    status: "PENDING",
    coverageDetails: "Heavy vs Light, Balance Scales, Animal carrying capacities",
    lastUpdated: "-"
  },
  {
    classNum: "Class 2",
    subject: "Mathematics",
    chapterNum: "Chapter 4",
    chapterTitle: "Counting in Tens (दस-दस में गिनो)",
    totalQuestionsAdded: 0,
    status: "PENDING",
    coverageDetails: "Bundles of 10, Matchsticks counting, Tens and Units",
    lastUpdated: "-"
  },
  {
    classNum: "Class 2",
    subject: "Mathematics",
    chapterNum: "Chapter 5",
    chapterTitle: "Patterns (पैटर्न)",
    totalQuestionsAdded: 0,
    status: "PENDING",
    coverageDetails: "Leaf patterns, Grills, Footwear prints, Number sequences",
    lastUpdated: "-"
  },
  {
    classNum: "Class 2",
    subject: "Mathematics",
    chapterNum: "Chapter 6",
    chapterTitle: "Footprints (पैरों के निशान)",
    totalQuestionsAdded: 0,
    status: "PENDING",
    coverageDetails: "2D shapes from 3D objects, Trace outlines, Circles, Squares",
    lastUpdated: "-"
  },
  {
    classNum: "Class 2",
    subject: "Mathematics",
    chapterNum: "Chapter 7",
    chapterTitle: "Jugs and Mugs (जग और मग)",
    totalQuestionsAdded: 0,
    status: "PENDING",
    coverageDetails: "Liquid volume capacity, Drops in spoon, Glasses in a jug",
    lastUpdated: "-"
  },
  {
    classNum: "Class 2",
    subject: "Mathematics",
    chapterNum: "Chapter 8",
    chapterTitle: "Tens and Ones (दहाई और इकाई)",
    totalQuestionsAdded: 0,
    status: "PENDING",
    coverageDetails: "Currency notes (₹10 & ₹1), Token cards, Place value",
    lastUpdated: "-"
  },
  {
    classNum: "Class 2",
    subject: "Mathematics",
    chapterNum: "Chapter 9",
    chapterTitle: "My Funday (मज़ेदार दिन)",
    totalQuestionsAdded: 0,
    status: "PENDING",
    coverageDetails: "Days of week, Months of year, Daily timetable, Seasons",
    lastUpdated: "-"
  },
  {
    classNum: "Class 2",
    subject: "Mathematics",
    chapterNum: "Chapter 10",
    chapterTitle: "Add our Points (अंक जोड़ो)",
    totalQuestionsAdded: 0,
    status: "PENDING",
    coverageDetails: "Mental addition of 2 and 3 numbers, Toss game points",
    lastUpdated: "-"
  },
  {
    classNum: "Class 2",
    subject: "Mathematics",
    chapterNum: "Chapter 11",
    chapterTitle: "Lines and Lines (रेखाएं ही रेखाएं)",
    totalQuestionsAdded: 0,
    status: "PENDING",
    coverageDetails: "Standing, Slanting & Sleeping lines, Curved lines, Dances",
    lastUpdated: "-"
  },
  {
    classNum: "Class 2",
    subject: "Mathematics",
    chapterNum: "Chapter 12",
    chapterTitle: "Give and Take (लेना और देना)",
    totalQuestionsAdded: 0,
    status: "PENDING",
    coverageDetails: "Addition & Subtraction with carry and borrow, Word problems",
    lastUpdated: "-"
  },
  {
    classNum: "Class 2",
    subject: "Mathematics",
    chapterNum: "Chapter 13",
    chapterTitle: "The Longest Step (सबसे लंबा कदम)",
    totalQuestionsAdded: 0,
    status: "PENDING",
    coverageDetails: "Non-standard measurement, Footsteps, Fingers, Handspans",
    lastUpdated: "-"
  },
  {
    classNum: "Class 2",
    subject: "Mathematics",
    chapterNum: "Chapter 14",
    chapterTitle: "Birds Come, Birds Go (पक्षी आए, पक्षी गए)",
    totalQuestionsAdded: 0,
    status: "PENDING",
    coverageDetails: "Token cards addition/subtraction, Counting birds, Story sums",
    lastUpdated: "-"
  },
  {
    classNum: "Class 2",
    subject: "Mathematics",
    chapterNum: "Chapter 15",
    chapterTitle: "How Many Ponytails? (कितनी चोटी हैं?)",
    totalQuestionsAdded: 0,
    status: "PENDING",
    coverageDetails: "Data handling, Pictographs, Counting categories, Preferences",
    lastUpdated: "-"
  }
];

// Generate Excel Workbook
export function createExcelTracker() {
  const wb = XLSX.utils.book_new();

  // Sheet 1: Master NCERT Syllabus Progress Tracker
  const trackerRows = NCERT_SYLLABUS_TRACKER.map(row => ({
    "Class": row.classNum,
    "Subject": row.subject,
    "Chapter No.": row.chapterNum,
    "Chapter Name": row.chapterTitle,
    "Questions Added": row.totalQuestionsAdded,
    "Status": row.status,
    "Syllabus Concepts Covered": row.coverageDetails,
    "Last Updated": row.lastUpdated
  }));

  const wsTracker = XLSX.utils.json_to_sheet(trackerRows);

  wsTracker['!cols'] = [
    { wch: 10 },
    { wch: 14 },
    { wch: 14 },
    { wch: 45 },
    { wch: 16 },
    { wch: 14 },
    { wch: 55 },
    { wch: 14 }
  ];

  XLSX.utils.book_append_sheet(wb, wsTracker, "Syllabus Progress Tracker");

  // Sheet 2: Class 2 Maths Ch 1 Full Question Bank
  const questionsRows = CLASS_2_CH1_QUESTIONS.map((q, idx) => ({
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

  const wsQuestions = XLSX.utils.json_to_sheet(questionsRows);
  wsQuestions['!cols'] = [
    { wch: 6 },
    { wch: 18 },
    { wch: 10 },
    { wch: 12 },
    { wch: 35 },
    { wch: 50 },
    { wch: 50 },
    { wch: 25 },
    { wch: 25 },
    { wch: 25 },
    { wch: 25 },
    { wch: 14 },
    { wch: 45 },
    { wch: 45 }
  ];

  XLSX.utils.book_append_sheet(wb, wsQuestions, "Class 2 Maths Ch 1 Questions");

  // Write to Desktop and Workspace
  const desktopPath = 'C:\\Users\\Admin\\Desktop\\NCERT_Curriculum_Tracker.xlsx';
  const workspacePath = path.resolve('NCERT_Curriculum_Tracker.xlsx');

  XLSX.writeFile(wb, desktopPath);
  XLSX.writeFile(wb, workspacePath);
  console.log(`Excel tracker written successfully to:\n1. ${desktopPath}\n2. ${workspacePath}`);
}

// Execute tracker generation
createExcelTracker();

// Inject into initialQuestions.js
const targetFile = path.resolve('src/data/initialQuestions.js');
let content = fs.readFileSync(targetFile, 'utf8');

const formattedQuestions = CLASS_2_CH1_QUESTIONS.map(q => {
  return `  {
    id: ${JSON.stringify(q.id)},
    division: ${JSON.stringify(q.division)},
    grade: ${q.grade},
    bracket: ${JSON.stringify(q.bracket)},
    subject: ${JSON.stringify(q.subject)},
    chapter: ${JSON.stringify(q.chapter)},
    chapterCode: ${JSON.stringify(q.chapterCode)},
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
  const replacement = `${marker}\n  // ==========================================\n  // NCERT Math-Magic / Joyful Maths - Chapter 1: What is Long, What is Round? (क्या है लंबा, क्या है गोल?)\n  // ==========================================\n${formattedQuestions}`;
  content = content.replace(marker, replacement);
  fs.writeFileSync(targetFile, content, 'utf8');
  console.log(`Successfully injected 32 Class 2 Chapter 1 questions into initialQuestions.js!`);
} else {
  console.error(`Marker not found in initialQuestions.js!`);
}
