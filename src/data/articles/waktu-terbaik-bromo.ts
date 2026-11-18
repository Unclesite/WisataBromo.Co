import { SupportedLanguage } from '../../i18n/LanguageContext';
import imgEmeraldSavana from '../../assets/images/5db1f48e-4eb1-4403-a65e-54b659b1357a.jpg';
import imgGoldenDust from '../../assets/images/633b7b65-1f37-4dbd-9714-6a4197e04480.png';
import imgMysticalSeason from '../../assets/images/7_20261007_221919_0006_1.jpg';
import imgSeaOfClouds from '../../assets/images/a0eb9e3a-cda4-4f6d-acc4-ac045e656d7a.jpg';

export interface SeasonSectionDetail {
  id: string;
  number: string;
  seasonName: string;
  months: string;
  title: string;
  moodBadge: {
    iconName: string;
    text: string;
    colorClass: string;
  };
  imageUrl: string;
  imageCaption: string;
  paragraphs: string[];
  highlights: Array<{
    title: string;
    description: string;
  }>;
}

export interface LocalizedFlagshipArticleContent {
  id: string;
  slug: string;
  title: string;
  metaDescription: string;
  author: string;
  category: string;
  categoryLabel: string;
  publishDate: string;
  readTime: string;
  heroImage: string;
  heroImageCaption: string;
  introduction: string[];
  seasons: SeasonSectionDetail[];
  comparisonTable: {
    title: string;
    headers: [string, string, string];
    rows: Array<[string, string, string]>;
  };
  proTipBox: {
    title: string;
    content: string;
  };
  conclusion: string;
  ctaButton: string;
  tags: string[];
}

export const ARTICLE_WAKTU_TERBAIK_BROMO: Record<SupportedLanguage, LocalizedFlagshipArticleContent> = {
  id: {
    id: 'waktu-terbaik-ke-bromo',
    slug: 'waktu-terbaik-ke-bromo-menyelami-pesona-4-musim',
    title: 'Kapan Waktu Terbaik ke Bromo? Menyelami Pesona 4 Musim dengan Vibes-nya Masing-Masing',
    metaDescription: 'Panduan flagship komprehensif ke Bromo: Menyelami 4 musim (Emerald, Golden Dust, Mystical, Sea of Clouds), vibes unik, dan waktu terbaik sesuai impian Anda.',
    author: 'Tim Redaksi & Kurator Travel WisataBromo.co',
    category: 'tips_wisata',
    categoryLabel: 'Panduan Flagship & Musim',
    publishDate: '8 November 2026',
    readTime: '8 Menit Baca',
    heroImage: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=1600&auto=format&fit=crop',
    heroImageCaption: 'Samudera awan spektakuler memeluk kaldera suci Bromo Tengger Semeru di pagi hari.',
    introduction: [
      'Gunung Bromo bukanlah sekadar destinasi wisata satu babak. Ia adalah panggung alam megah yang terus berganti kostum seiring berputarnya roda musim. Setiap jengkal kaldera purba seluas 5.250 hektar ini memiliki jiwa, aroma, dan warna cahaya yang bertransformasi sepanjang tahun.',
      'Banyak wisatawan terjebak pada pertanyaan mutlak: "Kapan bulan paling bagus ke Bromo?" Padahal, di mata para petualang sejati dan fotografer dunia, tidak ada musim yang buruk di Bromo. Yang ada hanyalah ragam *vibes* yang siap menyapa jiwa Anda.',
      'Apakah Anda mendambakan hamparan savana hijau yang menyejukkan mata, lautan pasir eksotis berkilau emas, kabut mistis yang dramatis, atau samudera awan putih di bawah kaki Anda? Mari kita selami pesona 4 musim di Bromo secara mendalam agar Anda dapat merencanakan petualangan paling berkesan bersama WisataBromo.co.'
    ],
    seasons: [
      {
        id: 'emerald-season',
        number: '01',
        seasonName: 'April – Juni',
        title: 'The Emerald Season (Musim Hijau Zamrud)',
        moodBadge: {
          iconName: 'Leaf',
          text: '🌿 Fresh & Vibrant Vibes',
          colorClass: 'bg-emerald-500/10 text-emerald-700 border-emerald-300'
        },
        imageUrl: imgEmeraldSavana,
        imageCaption: 'Bukit Teletubbies dan Lembah Watangan yang menghijau subur bak permadani alam.',
        paragraphs: [
          'Begitu pancaroba usai dan sisa hujan April menyuburkan tanah vulkanik, kawasan Bromo bertransformasi menjadi oase hijau yang menakjubkan. Bukit Teletubbies dan lembah savana yang tadinya berwarna cokelat kehitaman berubah menjadi permadani hijau zamrud yang sangat kontras dengan birunya langit.',
          'Udara di musim ini terasa sangat bersih dan bebas dari debu kering karena tersapu air hujan. Sinar matahari pagi memantulkan pendar kehijauan yang lembut, menjadikan periode ini sebagai waktu paling favorit bagi pasangan yang ingin melakukan pemotretan pre-wedding atau liburan keluarga yang santai.',
          'Aktivitas jeep melintasi lembah savana hijau memberikan kesegaran visual yang jarang ditemukan di tempat lain di Jawa Timur.'
        ],
        highlights: [
          'Savana & Bukit Teletubbies Hijau Royo-Royo',
          'Udara Bersih Tanpa Debu Vulkanik',
          'Sangat Cocok untuk Fotografi Pre-Wedding & Keluarga'
        ]
      },
      {
        id: 'golden-dust',
        number: '02',
        seasonName: 'Juli – Agustus',
        title: 'The Golden Dust & Peak Season (Musim Puncak & Pasir Emas)',
        moodBadge: {
          iconName: 'Flame',
          text: '🔥 Dusty & Energic Adventure',
          colorClass: 'bg-[#fff700]/25 text-black border-[#fff700] font-black'
        },
        imageUrl: imgGoldenDust,
        imageCaption: 'Konvoi jeep 4x4 melintasi Lautan Pasir Berbisik di bawah langit cerah musim kemarau.',
        paragraphs: [
          'Inilah puncak musim liburan (peak season) internasional di mana Bromo memamerkan kemegahan terangnya secara total. Langit malam bersih bertabur bintang (Milky Way) dan fajar keemasan (Golden Sunrise) tersaji tanpa cela.',
          'Angin kering musim kemarau meniup halus butiran pasir vulkanik, menciptakan pendar keemasan magis saat tersiram cahaya matahari pagi. Di bulan Juli-Agustus, Anda juga berkesempatan menyaksikan fenomena langka "Embun Upas" di mana rumput tertutup kristal es tipis karena suhu menyentuh titik 0°C.',
          'Suasana di Penanjakan 1 sangat energik, dipenuhi pelancong dari seluruh penjuru dunia yang berbagi antusiasme tinggi.'
        ],
        highlights: [
          'Golden Sunrise & Milky Way Paling Sempurna',
          'Fenomena Embun Upas (Suhu 0°C di Dini Hari)',
          'Atmosfer Petualangan Off-Road yang Sangat Energik'
        ]
      },
      {
        id: 'mystical-season',
        number: '03',
        seasonName: 'September – Oktober',
        title: 'The Misty & Mystical Season (Musim Kabut & Kesunyian Magis)',
        moodBadge: {
          iconName: 'CloudFog',
          text: '🌫️ Mystical & Cinematic Mood',
          colorClass: 'bg-cyan-500/10 text-cyan-800 border-cyan-300'
        },
        imageUrl: imgMysticalSeason,
        imageCaption: 'Kabut tipis menyelimuti punggung bukit dan pura sakral di kaki Gunung Bromo.',
        paragraphs: [
          'Ketika musim kemarau mulai bergeser menuju akhir tahun, Bromo menghadirkan sisi paling kontemplatif dan puitisnya. Kabut tipis dan awan rendah kerap turun menyelimuti kaldera di pagi dan sore hari.',
          'Cahaya matahari yang menembus sela-sela kabut menciptakan efek sinar krepuskular (god rays) yang dramatis dan sinematik. Bagi para fotografer lanskap, penulis, dan pencari ketenangan, inilah musim di mana Bromo terasa sangat magis dan personal.',
          'Jumlah pengunjung yang mulai melandai memberikan ruang luas bagi Anda untuk meresapi keagungan alam Tengger dalam keheningan.'
        ],
        highlights: [
          'Kabut Tipis Sinematik & God Rays Menawan',
          'Suasana Kaldera yang Tenang & Kontemplatif',
          'Spot Foto Moody Bernuansa Seni Tinggi'
        ]
      },
      {
        id: 'sea-of-clouds',
        number: '04',
        seasonName: 'November – Maret',
        title: 'The Sea of Clouds & Rainy Retreat (Musim Samudera Awan)',
        moodBadge: {
          iconName: 'Cloud',
          text: '☁️ Dreamy & Dramatic Clouds',
          colorClass: 'bg-blue-500/10 text-blue-800 border-blue-300'
        },
        imageUrl: imgSeaOfClouds,
        imageCaption: 'Samudera awan putih tebal membentang luas di bawah gardu pandang sunrise Bromo.',
        paragraphs: [
          'Jangan pernah mengabaikan musim penghujan di Bromo! Meskipun gerimis kadang menyapa di siang hari, pagi hari di musim ini justru menyimpan keajaiban terbesar: Samudera Awan (Sea of Clouds).',
          'Uap air dari curah hujan malam sebelumnya terperangkap di lembah kaldera, membentuk gumpalan awan putih tebal yang bergelombang bagaikan ombak lautan tepat di bawah kaki Anda dari atas Penanjakan.',
          'Pemandangan matahari terbit yang menyembul di atas samudera awan ini menciptakan drama visual yang jauh lebih megah dan romantis dibandingkan bulan-bulan lainnya.'
        ],
        highlights: [
          'Peluang Terbesar Menyaksikan Samudera Awan',
          'Lanskap Gunung Batok & Semeru yang Sangat Dramatis',
          'Suasana Eksklusif dengan Jumlah Wisatawan Minimal'
        ]
      }
    ],
    comparisonTable: {
      title: 'Tabel Perbandingan Cepat: Musim vs Vibes vs Highlight Bromo',
      headers: ['Musim / Bulan', 'Vibes Utama', 'Highlight & Rekomendasi'],
      rows: [
        ['April – Juni (Emerald)', 'Hijau, Segar, Tenang', 'Savana Teletubbies hijau subur, bebas debu, ideal untuk keluarga & pre-wedding.'],
        ['Juli – Agustus (Golden Dust)', 'Eksotis, Energik, Terang', 'Peak season, Milky Way, Embun Upas 0°C, sunrise paling tajam tanpa awan.'],
        ['September – Oktober (Misty)', 'Mistis, Sinematik, Sunyi', 'Kabut tipis artistik, god rays dramatis, sangat disukai fotografer moody.'],
        ['November – Maret (Clouds)', 'Dramatis, Romantis, Megah', 'Samudera awan spektakuler di bawah Penanjakan, suasana syahdu & eksklusif.']
      ]
    },
    proTipBox: {
      title: 'CATATAN KURATOR WISATABROMO.CO',
      content: 'Tidak ada kata "salah" dalam memilih waktu ke Bromo. Setiap musim memiliki daya tarik estetikanya sendiri. Kunci utamanya adalah mempersiapkan pakaian yang sesuai (jaket tebal & windbreaker di kemarau, jas hujan & alas kaki anti-slip di penghujan). Serahkan sisanya kepada tim jeep dan guide profesional kami!'
    },
    conclusion: 'Gunung Bromo selalu siap menyambut Anda dengan mahakarya alamnya yang menakjubkan di setiap hari sepanjang tahun. Apapun vibes yang Anda cari—baik hijaunya zamrud, keemasan pasir, syahdunya kabut, atau megahnya samudera awan—WisataBromo.co siap menemani langkah petualangan Anda dengan pelayanan VVIP terbaik.',
    ctaButton: 'Konsultasi & Booking Trip Bromo Sekarang',
    tags: ['WaktuTerbaikBromo', 'FlagshipArticle', 'MusimBromo', 'GoldenSunrise', 'WisataBromoCo']
  },

  en: {
    id: 'waktu-terbaik-ke-bromo',
    slug: 'waktu-terbaik-ke-bromo-menyelami-pesona-4-musim',
    title: 'When is the Best Time to Visit Bromo? Exploring the Charm of 4 Seasons and Their Unique Vibes',
    metaDescription: 'Comprehensive flagship guide to Mount Bromo: Exploring the 4 distinct seasons (Emerald, Golden Dust, Mystical, Sea of Clouds) and their unique vibes.',
    author: 'WisataBromo.co Editorial & Travel Curators Team',
    category: 'tips_wisata',
    categoryLabel: 'Flagship Guide & Seasons',
    publishDate: 'November 8, 2026',
    readTime: '8 Min Read',
    heroImage: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=1600&auto=format&fit=crop',
    heroImageCaption: 'Spectacular sea of clouds embracing the sacred caldera of Mount Bromo at dawn.',
    introduction: [
      'Mount Bromo is far more than a one-act tourist destination. It is a magnificent natural stage that continuously changes its costume as the wheel of seasons turns. Every square inch of this 5,250-hectare ancient caldera possesses its own soul, fragrance, and quality of light.',
      'Many travelers get trapped in the absolute question: "When is the absolute best month to visit Bromo?" Yet in the eyes of seasoned explorers and world photographers, there is no bad season in Bromo. There are only distinct vibes ready to greet your soul.',
      'Whether you crave lush green savannas that soothe the eyes, golden-glowing volcanic sands, dramatic mystical mists, or an ocean of clouds beneath your feet—let us dive deep into the 4 seasons of Bromo so you can plan the journey of a lifetime with WisataBromo.co.'
    ],
    seasons: [
      {
        id: 'emerald-season',
        number: '01',
        seasonName: 'April – June',
        title: 'The Emerald Season',
        moodBadge: {
          iconName: 'Leaf',
          text: '🌿 Fresh & Vibrant Vibes',
          colorClass: 'bg-emerald-500/10 text-emerald-700 border-emerald-300'
        },
        imageUrl: imgEmeraldSavana,
        imageCaption: 'Teletubbies Hills and Watangan Valley flourishing in lush vibrant emerald green.',
        paragraphs: [
          'As the transition period ends and April rains enrich the volcanic soil, Bromo transforms into a breathtaking green oasis. The Teletubbies hills and savanna valleys shift from dark brown into emerald carpets contrasting sharply with azure skies.',
          'The air during this season is exceptionally clean and dust-free, washed clean by seasonal showers. Morning sunlight reflects a gentle green glow, making this period a top favorite for couples seeking pre-wedding photography or tranquil family getaways.',
          'Riding a 4x4 jeep across the emerald savanna offers a refreshing visual palette rarely found elsewhere in East Java.'
        ],
        highlights: [
          'Lush Emerald Teletubbies Hills & Savannas',
          'Crisp, Dust-Free Mountain Air',
          'Ideal for Pre-Wedding & Family Photography'
        ]
      },
      {
        id: 'golden-dust',
        number: '02',
        seasonName: 'July – August',
        title: 'The Golden Dust & Peak Season',
        moodBadge: {
          iconName: 'Flame',
          text: '🔥 Dusty & Energic Adventure',
          colorClass: 'bg-[#fff700]/25 text-black border-[#fff700] font-black'
        },
        imageUrl: imgGoldenDust,
        imageCaption: '4x4 Jeep convoy crossing the whispering sand sea under clear dry-season skies.',
        paragraphs: [
          'This is the international peak travel season where Bromo proudly displays its brightest magnificence. Starlit night skies (Milky Way) and fiery Golden Sunrises unfold flawlessly.',
          'Dry seasonal winds gently sweep volcanic sand particles, creating a magical golden shimmer when struck by morning rays. In July and August, you may also witness the rare "Frost Phenomenon" (Embun Upas) where grass is coated in delicate ice crystals as temperatures hit 0°C.',
          'The atmosphere at Penanjakan 1 is exceptionally energetic, buzzing with global travelers sharing high spirits.'
        ],
        highlights: [
          'Flawless Golden Sunrise & Milky Way Stargazing',
          'Rare Frost Phenomenon (0°C Pre-Dawn Temperatures)',
          'High-Energy Off-Road Expedition Atmosphere'
        ]
      },
      {
        id: 'mystical-season',
        number: '03',
        seasonName: 'September – October',
        title: 'The Misty & Mystical Season',
        moodBadge: {
          iconName: 'CloudFog',
          text: '🌫️ Mystical & Cinematic Mood',
          colorClass: 'bg-cyan-500/10 text-cyan-800 border-cyan-300'
        },
        imageUrl: imgMysticalSeason,
        imageCaption: 'Gentle morning mists weaving across ridge lines and sacred shrines in Bromo.',
        paragraphs: [
          'As the dry season transitions toward year-end, Bromo reveals its most contemplative and poetic side. Light mists and low-lying clouds frequently drape across the caldera during early mornings and late afternoons.',
          'Sunlight piercing through misty curtains creates dramatic, cinematic god rays. For landscape photographers, writers, and tranquility seekers, this is the season where Bromo feels profoundly magical and personal.',
          'As visitor numbers soften, you gain ample space to absorb the majesty of Tengger in utter peace.'
        ],
        highlights: [
          'Cinematic Morning Mists & Dramatic God Rays',
          'Calm, Contemplative Caldera Atmosphere',
          'Moody Art-Grade Photography Backdrops'
        ]
      },
      {
        id: 'sea-of-clouds',
        number: '04',
        seasonName: 'November – March',
        title: 'The Sea of Clouds & Rainy Retreat',
        moodBadge: {
          iconName: 'Cloud',
          text: '☁️ Dreamy & Dramatic Clouds',
          colorClass: 'bg-blue-500/10 text-blue-800 border-blue-300'
        },
        imageUrl: imgSeaOfClouds,
        imageCaption: 'A magnificent ocean of white clouds stretching below the Bromo sunrise viewpoints.',
        paragraphs: [
          'Never overlook the rainy season in Bromo! While afternoon showers occasionally arrive, mornings during these months hold the ultimate reward: The Sea of Clouds.',
          'Moisture from overnight rainfall gets trapped within the caldera basin, forming thick, billowing waves of white clouds resembling an ocean right beneath your feet from Penanjakan.',
          'The sunrise emerging above this endless ocean of clouds creates a visual spectacle far grander and more romantic than any other time of year.'
        ],
        highlights: [
          'Highest Probability of Witnessing the Sea of Clouds',
          'Magnificent Dramatic Mount Batok & Semeru Vistas',
          'Exclusive Experience with Minimal Crowds'
        ]
      }
    ],
    comparisonTable: {
      title: 'Quick Comparison Table: Seasons vs Vibes vs Bromo Highlights',
      headers: ['Season / Months', 'Primary Vibes', 'Highlights & Recommendations'],
      rows: [
        ['April – June (Emerald)', 'Green, Fresh, Serene', 'Lush Teletubbies hills, dust-free air, ideal for families & pre-wedding shoots.'],
        ['July – August (Golden Dust)', 'Exotic, Energetic, Bright', 'Peak season, Milky Way, 0°C Frost, sharpest sunrise views without clouds.'],
        ['September – October (Misty)', 'Mystical, Cinematic, Quiet', 'Artistic morning mists, dramatic god rays, beloved by moody landscape photographers.'],
        ['November – March (Clouds)', 'Dramatic, Romantic, Grand', 'Spectacular sea of clouds below Penanjakan, serene & exclusive atmosphere.']
      ]
    },
    proTipBox: {
      title: 'WISATABROMO.CO CURATOR NOTE',
      content: 'There is no "wrong" time to visit Mount Bromo. Every season holds its own aesthetic brilliance. The key is packing appropriately (heavy windbreakers in dry months, compact raincoats & anti-slip footwear in rainy months). Leave the rest to our expert jeep drivers and guides!'
    },
    conclusion: 'Mount Bromo stands ready to welcome you with breathtaking natural masterpieces every single day of the year. Whichever vibes you seek—emerald greens, golden sands, mystical mists, or grand seas of clouds—WisataBromo.co is honored to accompany your journey with premier VVIP hospitality.',
    ctaButton: 'Consult & Book Your Bromo Tour Now',
    tags: ['BestTimeToVisitBromo', 'FlagshipArticle', 'BromoSeasons', 'GoldenSunrise', 'WisataBromoCo']
  },

  zh: {
    id: 'waktu-terbaik-ke-bromo',
    slug: 'waktu-terbaik-ke-bromo-menyelami-pesona-4-musim',
    title: '什么时候是去布罗莫火山的最佳时间？探索四个季节的独特魅力与氛围',
    metaDescription: '布罗莫火山旗舰级深度指南：探索四个季节（翠绿季、黄金沙海季、神秘雾气季、云海季）及其独一无二的氛围。',
    author: 'WisataBromo.co 官方编辑与旅行策划团队',
    category: 'tips_wisata',
    categoryLabel: '旗舰指南与季节',
    publishDate: '2026年11月8日',
    readTime: '阅读时间 8分钟',
    heroImage: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=1600&auto=format&fit=crop',
    heroImageCaption: '清晨时分，壮丽的云海拥抱着神圣的布罗莫火山 kaldera。',
    introduction: [
      '布罗莫火山绝不仅仅是一个走马观花的旅游景点。它是一个随着季节车轮转动而不断更换盛装的宏伟自然舞台。这片占地5250公顷的古老火山口的每一寸土地，都拥有全年变换的灵魂、气息与光影质感。',
      '许多游客常陷入这样一个绝对的问题：“去布罗莫最好的月份到底是哪个月？”然而在资深探险家和世界级摄影师眼中，布罗莫没有所谓的坏季节，只有随时准备迎接您心灵的独特氛围（Vibes）。',
      '无论您向往洗涤眼球的青翠草原、闪烁金色光芒的火山沙海、充满戏剧性的神秘雾气，还是脚下翻滚的云海秘境——让我们一同深入探索布罗莫的四个季节，与 WisataBromo.co 共同开启最难忘的火山之旅。'
    ],
    seasons: [
      {
        id: 'emerald-season',
        number: '01',
        seasonName: '4月 – 6月',
        title: 'The Emerald Season (翡翠绿意季)',
        moodBadge: {
          iconName: 'Leaf',
          text: '🌿 Fresh & Vibrant Vibes',
          colorClass: 'bg-emerald-500/10 text-emerald-700 border-emerald-300'
        },
        imageUrl: imgEmeraldSavana,
        imageCaption: '天线宝宝山丘与瓦唐甘山谷呈现出郁郁葱葱的翡翠绿色。',
        paragraphs: [
          '过渡期结束、4月的雨水滋润了火山土壤后，布罗莫瞬间蜕变成令人惊叹的绿色绿洲。原本呈深褐色的天线宝宝山丘与 savana 山谷披上了翡翠般的绿毯，与湛蓝的天空形成极致的视觉对比。',
          '经过季节雨水的洗涤，此时空气格外清新纯净，几乎没有任何干燥浮尘。清晨的阳光折射出柔和的翠绿微光，使这段时期成为情侣拍摄婚纱照或家庭悠闲度假的最爱。',
          '乘坐四驱吉普车穿梭于绿色 savana 之间，能带给您东爪哇其他地方难得一见的视觉清新感。'
        ],
        highlights: [
          '郁郁葱葱的天线宝宝山丘与广袤绿野',
          '清新纯净、无火山浮尘的高山空气',
          '婚纱摄影与家庭度假的绝佳时期'
        ]
      },
      {
        id: 'golden-dust',
        number: '02',
        seasonName: '7月 – 8月',
        title: 'The Golden Dust & Peak Season (黄金沙海与旅游旺季)',
        moodBadge: {
          iconName: 'Flame',
          text: '🔥 Dusty & Energic Adventure',
          colorClass: 'bg-[#fff700]/25 text-black border-[#fff700] font-black'
        },
        imageUrl: imgGoldenDust,
        imageCaption: '在旱季晴朗的天空下，四驱吉普车队驰骋于低语沙海。',
        paragraphs: [
          '这是国际旅游旺季（Peak Season），布罗莫在此期间骄傲地展示其最明亮壮丽的一面。璀璨的星空银河与炽热的金色日出完美呈现。',
          '干燥的旱季微风轻轻吹拂着火山沙粒，在晨光的照耀下泛起神奇的金色光芒。在7月和8月，您甚至有机会见证罕见的“结霜现象”（Embun Upas），由于气温触及0°C，草地被一层洁白的微小冰晶所覆盖。',
          'Penanjakan 1 观景台的气氛充满活力，汇聚了来自世界各地、激情高昂的旅行者。'
        ],
        highlights: [
          '无瑕的金色日出与银河星空观测',
          '罕见的0°C清晨结霜奇观（Embun Upas）',
          '充满活力的越野探险氛围'
        ]
      },
      {
        id: 'mystical-season',
        number: '03',
        seasonName: '9月 – 10月',
        title: 'The Misty & Mystical Season (神秘雾气与空灵之美)',
        moodBadge: {
          iconName: 'CloudFog',
          text: '🌫️ Mystical & Cinematic Mood',
          colorClass: 'bg-cyan-500/10 text-cyan-800 border-cyan-300'
        },
        imageUrl: imgMysticalSeason,
        imageCaption: '清晨薄雾在布罗莫的山脊线与神圣寺庙间萦绕。',
        paragraphs: [
          '当旱季向年底过渡时，布罗莫展现出其最具沉思感与诗意的一面。清晨和傍晚，薄雾与低空云层常常在火山口四周萦绕。',
          '阳光穿透薄雾形成的耶稣光（God Rays）带来极具电影质感的视觉效果。对于风景摄影师、作家和追求内心平静的旅者而言，这个季节能让布罗莫显得无比神秘与深邃。',
          '随着游客数量趋于平缓，您拥有充足的空间在绝对的宁静中体悟腾格尔大自然的威严。'
        ],
        highlights: [
          '电影质感的清晨薄雾与动人耶稣光',
          '宁静深邃的火山口氛围',
          '富有艺术感的高级摄影背景'
        ]
      },
      {
        id: 'sea-of-clouds',
        number: '04',
        seasonName: '11月 – 3月',
        title: 'The Sea of Clouds & Rainy Retreat (云海秘境季)',
        moodBadge: {
          iconName: 'Cloud',
          text: '☁️ Dreamy & Dramatic Clouds',
          colorClass: 'bg-blue-500/10 text-blue-800 border-blue-300'
        },
        imageUrl: imgSeaOfClouds,
        imageCaption: '一片壮丽的白色云海在布罗莫日出观景台下方翻滚延伸。',
        paragraphs: [
          '千万不要错过布罗莫的雨季！虽然午后偶尔会伴随阵雨，但这些月份的清晨却蕴藏着终极奖赏：壮丽的云海（Sea of Clouds）。',
          '夜间降雨产生的水汽被锁在火山口盆地内，形成厚重翻滚的白色云浪，站在 Penanjakan 俯瞰，犹如置身云端大海之上。',
          '旭日从这片无垠云海中喷薄而出的壮丽景象，其视觉震撼与浪漫程度远超一年中的其他任何时候。'
        ],
        highlights: [
          '观测壮丽云海的最高概率期',
          '巴托克火山与塞梅鲁峰的宏伟布景',
          '游人稀少、专属私密的尊贵体验'
        ]
      }
    ],
    comparisonTable: {
      title: '快速对比表：季节 vs 氛围 vs 布罗莫亮点',
      headers: ['季节 / 月份', '核心氛围 (Vibes)', '亮点与游览建议'],
      rows: [
        ['4月 – 6月 (翡翠绿意)', '清新、充满生机、宁静', '郁郁葱葱的天线宝宝山丘，无浮尘，适合家庭及婚纱摄影。'],
        ['7月 – 8月 (黄金沙海)', '异域风情、充满活力、晴朗', '旅游旺季、银河星空、0°C结霜奇观，日出视野最清晰。'],
        ['9月 – 10月 (神秘雾气)', '空灵神秘、电影质感、幽静', '艺术感薄雾、耶稣光，深受 moody 风景摄影师喜爱。'],
        ['11月 – 3月 (云海秘境)', '戏剧张力、浪漫宏伟', 'Penanjakan 下方壮丽云海，氛围静谧且极具独占感。']
      ]
    },
    proTipBox: {
      title: 'WISATABROMO.CO 策划人寄语',
      content: '前往布罗莫没有所谓的“错误时间”。每个季节都有其独特的美学光芒。关键在于做好充分的穿搭准备（旱季准备厚羽绒服与防风衣，雨季准备便携雨衣与防滑鞋）。其余的交给我们专业的吉普车队与向导即可！'
    },
    conclusion: '布罗莫火山全年每一天都准备好用大自然的杰作迎接您的到来。无论您寻觅何种氛围——翠绿的翡翠、金色的沙海、神秘的雾气还是宏伟的云海——WisataBromo.co 都将以最顶级的 VVIP 热情陪伴您的探险之旅。',
    ctaButton: '立即咨询并预订布罗莫行程',
    tags: ['布罗莫最佳时间', '旗舰文章', '布罗莫季节', '金色日出', 'WisataBromoCo']
  }
};
