import { SupportedLanguage } from '../../i18n/LanguageContext';

export interface JeepArticleSection {
  id: string;
  number: string;
  title: string;
  badge?: string;
  paragraphs: string[];
  bulletPoints?: Array<{
    title: string;
    description: string;
  }>;
  highlightBox?: {
    type: 'info' | 'warning' | 'success';
    title: string;
    text: string;
  };
  hasFloorplanImage?: boolean;
}

export interface LocalizedJeepArticleContent {
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
  sections: JeepArticleSection[];
  floorplanImage: {
    src: string;
    alt: string;
    caption: string;
  };
  youtubeShorts: {
    videoId: string;
    url: string;
    embedUrl: string;
    title: string;
    description: string;
  };
  proTipBox: {
    title: string;
    content: string;
  };
  conclusion: string;
  ctaButton: string;
  tags: string[];
}

export const ARTICLE_KAPASITAS_JEEP_BROMO: Record<SupportedLanguage, LocalizedJeepArticleContent> = {
  id: {
    id: 'kapasitas-jeep-bromo',
    slug: 'berapa-kapasitas-jeep-bromo',
    title: 'Berapa Kapasitas Jeep Bromo? Ini Faktanya Sebelum Kamu Booking',
    metaDescription: 'Panduan teknis kapasitas Jeep Bromo: aturan maksimal 1 driver + 6 peserta, denah kursi duduk, batasan koper/bagasi, dan tips agar tidak overcapacity.',
    author: 'Tim Redaksi & Operasional WisataBromo.co',
    category: 'tips_wisata',
    categoryLabel: 'Panduan Armada & Transportasi',
    publishDate: '8 November 2026',
    readTime: '6 Menit Baca',
    heroImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop',
    heroImageCaption: 'Konvoi armada tangguh Toyota Land Cruiser Hardtop 4x4 berizin resmi TNBTS di lautan pasir kaldera Bromo.',
    introduction: [
      'Bagi siapa pun yang pertama kali merencanakan liburan ke kawasan Taman Nasional Bromo Tengger Semeru (TNBTS), pertanyaan seputar armada transportasi lokal hampir selalu menjadi perhatian utama: "Berapa sebenarnya kapasitas satu unit Jeep Bromo? Apakah muat untuk keluarga besar kami? Dan bagaimana jika kami membawa banyak koper ukuran besar?"',
      'Di kawasan Bromo, kendaraan pribadi non-4x4 seperti Avanza, Innova, maupun mobil sedan dilarang keras memasuki lautan pasir (Kaldera Tengger) demi alasan keselamatan ekstrim dan regulasi konservasi alam. Seluruh wisatawan wajib berpindah ke armada legendaris Toyota Land Cruiser FJ40 (Hardtop 4x4) yang memang didesain khusus melibas pasir berbisik dan tanjakan curam Penanjakan.',
      'Namun, masih sering terjadi kesalahpahaman kapasitas tempat duduk yang berujung pada perjalanan yang berdesak-desakan dan tidak nyaman. Agar rencana liburan impian Anda berjalan sempurna, berikut adalah bedah fakta teknis kapasitas Jeep Bromo yang wajib Anda pahami sebelum menekan tombol booking.'
    ],
    sections: [
      {
        id: 'kapasitas-maksimal',
        number: '1',
        title: 'Kapasitas Maksimal Jeep Bromo: Standar Resmi TNBTS',
        badge: 'Regulasi Standar Keamanan',
        paragraphs: [
          'Secara regulasi standar Paguyuban Jeep Bromo dan Balai Besar Taman Nasional Bromo Tengger Semeru (TNBTS), 1 unit mobil Jeep Toyota Hardtop 4x4 memiliki kapasitas maksimal 1 Driver + 6 Peserta.',
          'Angka 6 penumpang ini adalah batas aman tertinggi agar suspensi kendaraan tetap stabil saat bermanuver di jalanan berkelok tajam lereng Gunung Bromo pada jam 3 dini hari. Jika rombongan Anda melebihi 6 orang (misalnya 7 atau 8 orang), sangat tidak disarankan memaksakan masuk ke dalam satu mobil, melainkan wajib memesan 2 unit Jeep.',
          'Bagi Anda yang mengambil paket wisata VIP dengan layanan fotografer profesional, konfigurasi kapasitas yang paling ideal dan nyaman adalah 1 Driver + 1 Fotografer + 5 Peserta. Dengan konfigurasi ini, fotografer memiliki fleksibilitas mengambil angle dokumentasi terbaik tanpa mengorbankan kenyamanan duduk Anda.'
        ],
        highlightBox: {
          type: 'info',
          title: 'FORMULA KAPASITAS STANDAR',
          text: 'Maksimal Kapasitas Standar: 1 Driver + 6 Peserta | Opsi Paket Fotografer: 1 Driver + 1 Fotografer + 5 Peserta.'
        }
      },
      {
        id: 'pembagian-kursi',
        number: '2',
        title: 'Pembagian Kursi (Layout Tempat Duduk di Dalam Jeep)',
        badge: 'Denah Posisi Duduk',
        paragraphs: [
          'Desain kabin Toyota Land Cruiser Hardtop FJ40 klasik memiliki pembagian tempat duduk yang unik dan berbeda dari mobil MPV modern keluarga. Berikut adalah pembagian posisi duduk resminya:',
          'Dengan memahami susunan ini, rombongan Anda dapat membagi tempat duduk secara adil dan nyaman sejak awal keberangkatan dari meeting point.'
        ],
        bulletPoints: [
          {
            title: 'Baris Depan (Kabin Depan): 1 Driver + 2 Peserta',
            description: 'Di samping kemudi sopir terdapat bangku menyatu (bench seat) yang dirancang untuk 2 orang penumpang. Kursi depan ini adalah spot paling favorit karena menawarkan sudut pandang kaca depan yang lapang ke arah kabut dan jurang Bromo, serta memiliki guncangan suspensi yang relatif lebih halus bagi penumpang yang rentan mabuk darat.'
          },
          {
            title: 'Baris Belakang (Kabin Belakang): 4 Peserta Berhadapan',
            description: 'Di kabin belakang terdapat 2 deret bangku panjang yang posisinya saling berhadapan (2 orang di sisi kanan dan 2 orang di sisi kiri menghadap ke tengah). Duduk saling berhadapan ini menciptakan suasana akrab dan seru untuk mengobrol sepanjang perjalanan melintasi padang savana.'
          }
        ],
        hasFloorplanImage: true
      },
      {
        id: 'kenapa-harus-tahu',
        number: '3',
        title: 'Kenapa Harus Tahu Kapasitas Ini Sebelum Booking?',
        badge: 'Kenyamanan & Keamanan',
        paragraphs: [
          'Banyak calon wisatawan berasumsi bahwa mobil Jeep bertubuh kekar ini muat hingga 8–10 orang layaknya mobil minibus elf. Asumsi ini sangat keliru dan berisiko tinggi terhadap kenyamanan liburan Anda:',
          'Perjalanan trip Bromo berlangsung selama 5 hingga 7 jam melintasi tanjakan berliku dan jalanan berbatu terjal pada dini hari. Menjaga ruang gerak yang cukup di dalam kabin adalah kunci agar tubuh tidak kaku atau kelelahan saat tiba di puncak penanjakan sunrise.'
        ],
        bulletPoints: [
          {
            title: 'Mencegah Overcapacity (Kelebihan Muatan)',
            description: 'Memaksakan lebih dari 6 penumpang ke dalam satu jeep membuat ruang siku dan ruang kaki hilang sama sekali, menyebabkan penumpang cepat pegal dan mual di perjalanan.'
          },
          {
            title: 'Keseimbangan Suspensi di Lautan Pasir',
            description: 'Jalur lautan pasir yang gembur membutuhkan cengkeraman ban 4WD optimal. Beban berlebih berpotensi membuat mobil amblas di pasir vulkanik atau mesin bekerja ekstra berat saat menanjak.'
          },
          {
            title: 'Kenyamanan Membawa Peralatan Hangat',
            description: 'Setiap penumpang mengenakan jaket tebal, syal, dan membawa termos pribadi. Kabin yang longgar memastikan Anda tetap leluasa bergerak tanpa merasa sesak.'
          }
        ]
      },
      {
        id: 'bagasi-dan-koper',
        number: '4',
        title: 'Bagasi & Koper: Panduan Sangat Krusial (Khusus Wisatawan Luar Kota & WNA)',
        badge: 'Aturan Bagasi',
        paragraphs: [
          'Hal paling krusial yang kerap luput dari perhatian wisatawan—terutama wisatawan mancanegara (WNA) yang langsung mendarat di bandara dan membawa koper besar ukuran 24–28 inch—adalah ruang bagasi Jeep Hardtop yang SANGAT TERBATAS.',
          'Ruang di belakang bangku penumpang hanya muat untuk 1–2 tas ransel kecil. Tidak ada bagasi bagasi mobil modern di dalam Jeep 4x4 klasik ini.',
          'WisataBromo.co menyediakan fasilitas penitipan koper dan barang berharga yang aman dan terpantau CCTV di rest area / basecamp resmi kami di Sukapura, Tosari, dan Malang tanpa dipungut biaya tambahan!'
        ],
        bulletPoints: [
          {
            title: 'Aturan Koper Besar (24 - 28 Inch)',
            description: 'Koper besar WAJIB ditinggal di hotel, homestay, atau di mobil penjemputan utama (van/hiace) di basecamp transit sebelum berganti naik ke Jeep.'
          },
          {
            title: 'Tas yang Boleh Dibawa Naik Jeep',
            description: 'Setiap peserta disarankan hanya membawa 1 daypack/backpack kecil atau tas selempang berisi jaket, kamera/ponsel, dompet, charger, dan obat pribadi.'
          },
          {
            title: 'Rombongan Transit ke Bali / Banyuwangi',
            description: 'Jika trip Bromo Anda adalah bagian dari overland tour menuju Kawah Ijen atau Pulau Bali, koper Anda akan aman tersimpan di dalam mobil van/MPV travel utama di basecamp hingga trip Jeep selesai.'
          }
        ]
      }
    ],
    floorplanImage: {
      src: '/assets/aistudio/mobil_animasi_7a302c64.svg',
      alt: 'Denah Kapasitas Jeep Bromo',
      caption: 'Ilustrasi denah tempat duduk Jeep Bromo (1 Driver + 5 Peserta + 1 Fotografer) - Konfigurasi ternyaman untuk paket dokumentasi premium.'
    },
    youtubeShorts: {
      videoId: '1K7YG5pvl4c',
      url: 'https://youtube.com/shorts/1K7YG5pvl4c',
      embedUrl: 'https://www.youtube.com/embed/1K7YG5pvl4c',
      title: 'Tonton: Suasana Nyata dan Sensasi Naik Jeep Hardtop 4x4 di Lautan Pasir Bromo',
      description: 'Saksikan bagaimana armada Jeep 4x4 berlisensi resmi WisataBromo.co melibas kabut dan debu lautan pasir Bromo dengan tangguh dan nyaman.'
    },
    proTipBox: {
      title: 'PRO TIP DARI TIM OPERASIONAL WISATABROMO.CO',
      content: 'Jika Anda bepergian bersama orang tua lanjut usia atau anak-anak di bawah usia 5 tahun, selalu request tempat duduk di baris depan (samping driver). Kursi depan memiliki bantalan suspensi paling lembut, pandangan kaca luas tanpa mual, serta akses naik-turun yang paling mudah!'
    },
    conclusion: 'Memahami kapasitas dan aturan bagasi Jeep Bromo menjamin liburan Anda berjalan mulus, nyaman, dan terhindar dari stres overcapacity. Bersama WisataBromo.co, Anda mendapatkan jaminan armada Jeep 4x4 berizin resmi TNBTS, driver lokal berpengalaman yang ramah, serta transparansi penuh tanpa calo!',
    ctaButton: 'Booking Jeep Bromo Resmi Sekarang',
    tags: ['KapasitasJeepBromo', 'JeepBromo4x4', 'TipsWisataBromo', 'SewaJeepBromo', 'WisataBromoCo']
  },

  en: {
    id: 'kapasitas-jeep-bromo',
    slug: 'berapa-kapasitas-jeep-bromo',
    title: 'What is the Capacity of a Bromo Jeep? Here are the Facts Before You Book',
    metaDescription: 'Complete technical guide to Mount Bromo 4x4 Jeep capacity: 1 driver + 6 passenger rules, seating layout chart, luggage limits, and comfort tips before booking.',
    author: 'WisataBromo.co Operations & Editorial Team',
    category: 'tips_wisata',
    categoryLabel: 'Fleet Guide & Transport',
    publishDate: 'November 8, 2026',
    readTime: '6 Min Read',
    heroImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop',
    heroImageCaption: 'Official TNBTS-licensed 4x4 Toyota Land Cruiser Hardtop convoy crossing Mount Bromo’s mystical caldera.',
    introduction: [
      'For anyone planning their very first expedition to Bromo Tengger Semeru National Park (TNBTS), one question consistently ranks at the top: "What is the true passenger capacity of a Mount Bromo Jeep? Will it comfortably seat our entire family? And where do our large suitcases go?"',
      'In Mount Bromo, standard commercial vehicles such as sedans, minivans, or conventional tourist coaches are strictly prohibited from entering the volcanic Sea of Sand (Tengger Caldera) due to severe safety risks and strict conservation laws. Every traveler must transfer to the legendary 4x4 Toyota Land Cruiser FJ40 (Hardtop), purpose-built to conquer shifting dunes and steep mountain passes.',
      'Unfortunately, misunderstandings regarding passenger seating and luggage volume frequently cause unnecessary overcrowding and cramped rides. To ensure your sunrise adventure remains unforgettable for all the right reasons, here is the complete technical breakdown of Mount Bromo Jeep capacity you need to know before booking.'
    ],
    sections: [
      {
        id: 'kapasitas-maksimal',
        number: '1',
        title: 'Maximum Capacity of a Bromo Jeep: TNBTS Official Standards',
        badge: 'Official Safety Regulation',
        paragraphs: [
          'According to strict regulations established by the Bromo Jeep Association and the Bromo Tengger Semeru National Park Authority (TNBTS), one unit of Toyota Hardtop 4x4 Jeep is certified for a maximum of 1 Driver + 6 Passengers.',
          'The 6-passenger limit is the official upper safety threshold designed to maintain vehicle stability, safe traction, and proper center of gravity while navigating winding, narrow mountain switchbacks at 3:00 AM. If your group consists of 7 or 8 people, cramming everyone into one jeep is strictly forbidden; booking 2 Jeeps is mandatory.',
          'For travelers selecting our VIP Package with an accompanying professional photographer, the most comfortable and recommended configuration is 1 Driver + 1 Photographer + 5 Guests. This guarantees ample freedom for the photographer to frame breathtaking moments without compromising your legroom.'
        ],
        highlightBox: {
          type: 'info',
          title: 'STANDARD CAPACITY FORMULA',
          text: 'Official Maximum Limit: 1 Driver + 6 Guests | VIP Photo Package Option: 1 Driver + 1 Photographer + 5 Guests.'
        }
      },
      {
        id: 'pembagian-kursi',
        number: '2',
        title: 'Seat Distribution (Cabin Layout Inside the Bromo Jeep)',
        badge: 'Cabin Floorplan',
        paragraphs: [
          'The vintage Toyota Land Cruiser FJ40 interior features a classic expedition layout that differs considerably from modern family minivans. Here is the official cabin seating distribution:',
          'Understanding this layout allows your group to decide seating arrangements harmoniously before stepping out into the brisk midnight air.'
        ],
        bulletPoints: [
          {
            title: 'Front Row (Front Cabin): 1 Driver + 2 Passengers',
            description: 'Beside the driver is a continuous bench seat designed for 2 guests. The front seat is the most coveted position, offering uninterrupted panoramic views through the front windshield and smoother suspension damping for guests susceptible to motion sickness.'
          },
          {
            title: 'Rear Row (Rear Cabin): 4 Passengers Facing Inward',
            description: 'The rear cabin features 2 long inward-facing benches (2 guests on the right and 2 guests on the left facing one another). This face-to-face seating arrangement fosters an energetic social atmosphere as you rumble across the mystical volcanic savannas.'
          }
        ],
        hasFloorplanImage: true
      },
      {
        id: 'kenapa-harus-tahu',
        number: '3',
        title: 'Why You Must Know This Capacity Before Booking?',
        badge: 'Comfort & Safety',
        paragraphs: [
          'Many first-time international visitors mistakenly assume these rugged 4x4 jeeps can accommodate 8 to 10 guests like an extended van. This assumption can quickly turn a dream vacation into an exhausting ordeal:',
          'A typical Mount Bromo excursion lasts between 5 and 7 hours over uneven gravel tracks, bumpy desert plains, and cold mountain roads. Adequate breathing room inside the cabin is vital to prevent fatigue before hiking the crater stairs.'
        ],
        bulletPoints: [
          {
            title: 'Eliminating Overcrowding',
            description: 'Stuffing more than 6 passengers into a single vehicle eliminates elbow and legroom, leaving passengers cramped and prone to motion sickness.'
          },
          {
            title: 'Vehicle Suspension & Sand Stability',
            description: 'Navigating deep volcanic ash requires balanced tire grip and 4WD clearance. Excess weight risks getting stuck in sand or overheating the engine on steep ascents.'
          },
          {
            title: 'Space for Bulky Winter Wear',
            description: 'Every passenger wears heavy down jackets, thermal beanies, and carries personal thermoses. Proper cabin space ensures you stay warm without feeling constricted.'
          }
        ]
      },
      {
        id: 'bagasi-dan-koper',
        number: '4',
        title: 'Luggage & Suitcases: Crucial Rules (Especially for International Guests)',
        badge: 'Baggage Advisory',
        paragraphs: [
          'The most critical factor often overlooked by international travelers—especially those arriving straight from Surabaya Airport or Malang with 24-inch to 28-inch hard-shell suitcases—is that Bromo Jeep luggage space is EXTREMELY LIMITED.',
          'The space behind the passenger benches only fits 1 or 2 small daypacks. There is NO conventional vehicle boot or modern hatchback trunk in these vintage 4x4 expedition vehicles.',
          'WisataBromo.co provides complimentary, secure luggage storage monitored by 24/7 CCTV at our official basecamps and transit lounges in Sukapura, Tosari, and Malang!'
        ],
        bulletPoints: [
          {
            title: 'Large Suitcases (24 - 28 Inches)',
            description: 'Bulky suitcases MUST be stored at your hotel, homestay, or left inside your private highway shuttle van at the transit basecamp before boarding the Jeep.'
          },
          {
            title: 'Allowed Bags Inside the Jeep',
            description: 'Each guest should carry only 1 small personal backpack or crossbody bag containing warm layers, camera/phone, wallet, and personal medication.'
          },
          {
            title: 'Overland Guests Continuing to Ijen or Bali',
            description: 'If your Bromo trip is part of an East Java overland route to Ijen Crater or Bali, your heavy luggage remains securely parked in your main tour vehicle during the 4x4 caldera excursion.'
          }
        ]
      }
    ],
    floorplanImage: {
      src: '/assets/aistudio/mobil_animasi_7a302c64.svg',
      alt: 'Denah Kapasitas Jeep Bromo',
      caption: 'Mount Bromo Jeep seating layout diagram (1 Driver + 5 Guests + 1 Photographer) - The recommended comfort configuration for premium photo tours.'
    },
    youtubeShorts: {
      videoId: '1K7YG5pvl4c',
      url: 'https://youtube.com/shorts/1K7YG5pvl4c',
      embedUrl: 'https://www.youtube.com/embed/1K7YG5pvl4c',
      title: 'Watch: The Real Thrill of Riding a 4x4 Hardtop Jeep Across Mount Bromo',
      description: 'Experience how WisataBromo.co official licensed 4x4 jeeps glide through the mystical morning mist and volcanic sands with superior comfort.'
    },
    proTipBox: {
      title: 'PRO TIP FROM WISATABROMO.CO OPERATIONS TEAM',
      content: 'If traveling with elderly parents or young children under 5, always request front row seats (next to the driver). The front cabin provides the softest suspension cushioning, expansive windshield views without nausea, and effortless boarding access!'
    },
    conclusion: 'Understanding the exact seating capacity and luggage guidelines for Mount Bromo jeeps ensures a smooth, safe, and stress-free holiday. With WisataBromo.co, you get guaranteed official TNBTS-licensed 4x4 jeeps, verified local drivers, and 100% transparent pricing with zero middleman scams!',
    ctaButton: 'Book Official Bromo Jeep Now',
    tags: ['BromoJeepCapacity', 'JeepBromo4x4', 'BromoTravelTips', 'BromoJeepRental', 'WisataBromoCo']
  },

  zh: {
    id: 'kapasitas-jeep-bromo',
    slug: 'berapa-kapasitas-jeep-bromo',
    title: '布罗莫吉普车容量是多少？预订前必看的事实',
    metaDescription: '布罗莫火山四驱吉普车容量全解析：1名司机+6名乘客规则、座位排布示意图、大件行李存放指南及避免超载的舒适出行建议。',
    author: 'WisataBromo.co 官方车队与编辑团队',
    category: 'tips_wisata',
    categoryLabel: '车队指南与交通攻略',
    publishDate: '2026年11月8日',
    readTime: '阅读时间 6分钟',
    heroImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop',
    heroImageCaption: 'TNBTS 官方特许经典丰田陆地巡洋舰 FJ40 四驱吉普车队驰骋于布罗莫火山黑沙海。',
    introduction: [
      '对于初次计划前往印度尼西亚布罗莫腾格尔塞梅鲁国家公园（TNBTS）的游客而言，关于当地四驱越野交通工具的疑问总是排在第一位：“一辆布罗莫吉普车究竟能坐多少人？我们全家同行坐得下吗？如果携带大件行李箱该放在哪里？”',
      '在布罗莫火山保护区内，出于极其严格的高山安全法规与生态环境保护要求，所有普通两驱轿车、商务车（如埃尔法、Innova 等）均严禁驶入腾格尔火山喷发形成的黑沙海（Caldera）。所有游客必须换乘标志性的丰田 FJ40 四驱硬顶吉普车（Toyota Hardtop 4x4），以应对松软沙原与陡峭山道。',
      '然而，许多外国游客因不清楚车内空间与座位配置，导致行程中出现拥挤、晕车或大行李无处安放的尴尬。为了让您的火山日出圆满无憾，WisataBromo.co 特此为您全面拆解布罗莫吉普车的真实承载力与出行注意事项。'
    ],
    sections: [
      {
        id: 'kapasitas-maksimal',
        number: '1',
        title: '布罗莫吉普车最大容量：国家公园 TNBTS 官方标准',
        badge: '官方安全规范',
        paragraphs: [
          '根据布罗莫吉普车公会及 TNBTS 国家公园管理局的官方安全规定，每辆丰田硬顶四驱吉普车的法定最大载客上限为：1名司机 + 6名乘客。',
          '“6名乘客”是确保车辆在凌晨3点翻越陡峭盘山公路与沙丘时，底盘悬挂稳定与抓地力平衡的安全红线。如果您的团队人数达到7至8人，严禁强行挤在一辆车内，必须预订2辆吉普车以策安全。',
          '对于预订了跟拍服务的 VIP 摄影团，最舒适、最受推荐的黄金座位配置为：1名司机 + 1名随车摄影师 + 5名乘客。这种配置能为摄影师留出充裕的器材摆放空间，并在各打卡点快速抓拍绝美大片，而不会挤压您的乘坐空间。'
        ],
        highlightBox: {
          type: 'info',
          title: '官方载客公式',
          text: '常规标准上限：1名司机 + 6名乘客 | 摄影跟拍团推荐：1名司机 + 1名摄影师 + 5名乘客。'
        }
      },
      {
        id: 'pembagian-kursi',
        number: '2',
        title: '座位布局划分（吉普车内实际座位分布）',
        badge: '车厢座位图解',
        paragraphs: [
          '经典款丰田 FJ40 硬顶越野车的座舱设计极具复古探险风格，与现代家用七座商务车完全不同。其内部座位划分如下：',
          '提前知晓座位分布，能让您的同行伙伴在半夜出发前合理安排座位，让长辈与孩子享受更舒适的旅程。'
        ],
        bulletPoints: [
          {
            title: '前排副驾位置：1名司机 + 2名乘客',
            description: '主驾驶位右侧为一体式长条连排座椅，可容纳2名乘客。这是全车视野最开阔的“景观王座”，透过前挡风玻璃可将浩瀚星空与晨雾尽收眼底，且减震体验最平稳，非常适合容易晕车的客人。'
          },
          {
            title: '后排乘客车厢：4名乘客（面对面侧坐）',
            description: '后车厢两侧配有两排长椅，采取面对面侧身对坐的形式（左侧坐2人，右侧坐2人）。相对而坐的空间利于好友结伴互动，极具越野探险的仪式感。'
          }
        ],
        hasFloorplanImage: true
      },
      {
        id: 'kenapa-harus-tahu',
        number: '3',
        title: '为什么必须在预订前明确吉普车容量？',
        badge: '舒适与安全考量',
        paragraphs: [
          '部分游客误以为这种外观硬派的吉普车能像中巴车一样挤下8到10人，这种想法不仅违反安全交规，更会极大破坏旅行体验：',
          '布罗莫日出之旅通常持续5至7个小时，途中包含颠簸的碎石路、陡峭的发夹弯与清晨的低温寒风。车内保持充裕的空间是避免身体疲劳、顺利登顶火山口的核心保证。'
        ],
        bulletPoints: [
          {
            title: '坚决杜绝超载（Overcapacity）',
            description: '如果车内硬塞超过6名乘客，手臂与双腿将毫无舒展空间，在颠簸的山地路段极易引发剧烈晕车与肢体酸痛。'
          },
          {
            title: '火山沙海行驶的车辆重心平衡',
            description: '穿越松软的火山黑沙海需要四驱越野车保持轻盈动力。车身超重不仅增加陷入沙坑的风险，更可能在爬坡时导致发动机负荷过大。'
          },
          {
            title: '冬季厚重防寒服占用空间',
            description: '在0-5°C的凌晨，每位游客都身着厚重羽绒服并携带保温杯与相机。合理的车内空间能确保大家在温暖中自由活动。'
          }
        ]
      },
      {
        id: 'bagasi-dan-koper',
        number: '4',
        title: '行李与大件拉杆箱：非常关键的注意事项（海外游客必读）',
        badge: '行李存放规定',
        paragraphs: [
          '海外游客最容易忽视的问题，就是大件拉杆箱（24至28寸）的处理。丰田越野吉普车的内部后备空间极小，无法存放大型硬壳旅行箱！',
          '后排座椅后方的缝隙仅能放置1至2个随身小背包，不存在现代SUV那样的宽大行李舱。',
          '对此您完全不必担心！WisataBromo.co 在苏卡普拉（Sukapura）、托萨里（Tosari）及玛琅的官方集结中转站，均为您提供全天候 CCTV 监控的免费大件行李安全寄存服务！'
        ],
        bulletPoints: [
          {
            title: '大件行李箱（24 - 28寸）处理方案',
            description: '大件拉杆箱必须在换乘吉普车前，寄存在中转站服务中心、下榻酒店或留在全程接送的商务包车（Van/HiAce）内。'
          },
          {
            title: '随身带上吉普车的物品',
            description: '每位游客只需随身携带1个轻便双肩包或斜挎包，装入保暖外套、手机相机、充电宝、纸巾及个人常用药品即可。'
          },
          {
            title: '连线前往宜珍火山（Ijen）或巴厘岛的客人',
            description: '如果您的行程是布罗莫-宜珍-巴厘岛跨岛连线游，您的大件行李会全程安放在公路专车内，吉普车行程结束后无缝汇合，全程无需搬运操心。'
          }
        ]
      }
    ],
    floorplanImage: {
      src: '/assets/aistudio/mobil_animasi_7a302c64.svg',
      alt: 'Denah Kapasitas Jeep Bromo',
      caption: '布罗莫火山四驱吉普车座位布局示意图（1名司机 + 5名乘客 + 1名摄影师）— 摄影定制团推荐舒适布局。'
    },
    youtubeShorts: {
      videoId: '1K7YG5pvl4c',
      url: 'https://youtube.com/shorts/1K7YG5pvl4c',
      embedUrl: 'https://www.youtube.com/embed/1K7YG5pvl4c',
      title: '沉浸式体验：布罗莫火山黑沙海四驱硬顶吉普车真实乘车氛围',
      description: '亲眼见证 WisataBromo.co 官方特许四驱吉普车队在晨雾与火山沙丘中平稳穿行，感受纯正火山越野魅力。'
    },
    proTipBox: {
      title: 'WISATABROMO.CO 车队运营经理温馨提醒',
      content: '若您与年迈长辈或5岁以下幼儿同行，请务必提前向客服申请前排副驾驶座位。前排座椅减震效果最佳、视野开阔无视线遮挡，上下车最为轻松，能最大程度避免山路晕车！'
    },
    conclusion: '提前了解布罗莫吉普车的载客标准与行李规则，能让您的火山探险之旅顺畅无忧。选择 WisataBromo.co 官方正规特许服务 — 车况卓越、本地持证向导、透明报价无任何隐形宰客陷阱，为您打造安全安心的布罗莫完美之旅！',
    ctaButton: '立即预订布罗莫官方吉普车',
    tags: ['布罗莫吉普车容量', '布罗莫四驱车', '布罗莫避坑指南', '布罗莫包车', 'WisataBromoCo']
  }
};
