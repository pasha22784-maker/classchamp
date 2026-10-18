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
      id: 'shape_sorter',
      title: 'Shape & Color Sorter',
      subtitle: 'Sensory geometric cutouts & color matching',
      icon: '🔷',
      badge: 'NCERT Foundation • Ch 1',
      accentColor: '#3B82F6',
      boxColor: '#1E3A8A',
      ncertTopic: 'Shapes & Spatial Understanding',
      pedagogicalOutcome: {
        english: 'Children develop spatial intuition by matching 2D geometric shapes into matching glowing stencils rather than memorizing definitions.',
        hindi: 'बच्चे रटने के बजाय आकारों (सर्कल, स्क्वायर, ट्रायंगल) को देखकर और खांचों में बिठाकर स्वाभाविक रूप से सीखते हैं।',
      },
    },
    {
      id: 'counting_train',
      title: 'Counting Garden & Train',
      subtitle: '1-to-1 quantity recognition & cargo loading',
      icon: '🎈',
      badge: 'NCERT Foundation • Numbers 1-20',
      accentColor: '#10B981',
      boxColor: '#064E3B',
      ncertTopic: 'Number Sense & 1-to-1 Correspondence',
      pedagogicalOutcome: {
        english: 'Connects abstract digits with physical items (apples, stars, butterflies) loaded one-by-one into train wagons.',
        hindi: 'नंबर सिर्फ एक अंक नहीं बल्कि वास्तविक वस्तुओं की संख्या है — इसे ट्रेन में सामान भरकर बच्चे खुद गिनते हैं।',
      },
    },
    {
      id: 'animal_seesaw',
      title: 'Animal Seesaw Balance',
      subtitle: 'Heavy vs Light physics with cute animals',
      icon: '⚖️',
      badge: 'NCERT Foundation • Measurement',
      accentColor: '#F59E0B',
      boxColor: '#78350F',
      ncertTopic: 'Heavy vs Light (Mass Comparison)',
      pedagogicalOutcome: {
        english: 'Visual fulcrum seesaw teaches mass comparison (Elephant vs Mouse) and early physics equilibrium.',
        hindi: 'झूला (सी-सॉ) पर भारी जानवर नीचे और हल्का ऊपर जाता है — खेल-खेल में भारी और हल्के का व्यावहारिक ज्ञान।',
      },
    },
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
      pedagogicalOutcome: {
        english: 'Pattern detection builds the early brain architecture for coding, algebra, and logical sequences.',
        hindi: 'पैटर्न पहचानना बच्चों में लॉजिकल थिंकिंग और कोडिंग की समझ की सबसे मजबूत बुनियाद तैयार करता है।',
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
];

export const ALL_CONCEPT_LABS: ConceptLabItem[] = [
  ...CONCEPT_LABS_BY_GRADE.lkg_ukg,
  ...CONCEPT_LABS_BY_GRADE.class_1_2,
  ...CONCEPT_LABS_BY_GRADE.class_3_4,
  ...CONCEPT_LABS_BY_GRADE.class_5_6,
  ...SCIENCE_STEM_LABS,
];
