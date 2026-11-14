import { Language } from './LanguageContext';

export interface LocalizedPicnicTrailContent {
  sectionBadge: string;
  sectionHeading: string;
  sectionSubheading: string;
  picnicCard: {
    tag1: string;
    tag2: string;
    title: string;
    description: string;
    highlightTitle: string;
    highlights: string[];
    priceLabel: string;
    priceAmount: string;
    priceUnit: string;
    buttonText: string;
  };
  trailCard: {
    tag1: string;
    tag2: string;
    title: string;
    description: string;
    highlightTitle: string;
    highlights: string[];
    priceLabel: string;
    priceAmount: string;
    priceUnit: string;
    buttonText: string;
  };
}

export const PICNIC_TRAIL_TRANSLATIONS: Record<Language, LocalizedPicnicTrailContent> = {
  id: {
    sectionBadge: 'PENGALAMAN SPESIAL & VIRAL',
    sectionHeading: 'Paket Piknik Savana & Sewa Trail Sukapura',
    sectionSubheading: 'Dua pengalaman paling diminati di Bromo: bersantai menikmati sarapan estetik di tengah hamparan hijau Savana Teletubbies atau menaklukkan lautan pasir vulkanik dengan motor trail bertenaga.',
    picnicCard: {
      tag1: 'OUTDOOR DINING KALDERA BROMO',
      tag2: '8 PILIHAN MENU',
      title: 'Bromo Picnic Experience (8 Paket Pilihan)',
      description: 'Rasakan kemewahan bersantap hangat di tengah panorama alam Bromo (View Bromo & Widodaren). Tersedia Paket 1–4, BBQ Grill, Suki Shabu Tomyum, Paket Ngemie, hingga Ultimate Dining.',
      highlightTitle: 'Highlight Pengalaman Piknik Bromo:',
      highlights: [
        '8 Paket Pilihan: Ngemie, BBQ, Suki & Paket 1-4',
        'Meja Kayu Rustic & Karpet Bohemian',
        'Spot View Bromo & Tebing Widodaren',
        'Pilihan Minuman Bebas & Free Teh/Mineral',
        'Add-on Tenda Bell Tent & Birthday Decor',
        'Layanan Butler Khusus & Booking Instan DP 30%'
      ],
      priceLabel: 'Mulai dari:',
      priceAmount: 'Rp 75.000',
      priceUnit: '/ pax (Paket Ngemie s/d Ultimate)',
      buttonText: 'Baca Selengkapnya (8 Paket)'
    },
    trailCard: {
      tag1: 'START BASECAMP SUKAPURA PROBOLINGGO',
      tag2: 'DIRT BIKE ADVENTURE',
      title: 'Paket Sewa Trail Start Sukapura',
      description: 'Pacu adrenalin melibas Lautan Pasir Berbisik dan lereng Tebing Widodaren dengan motor trail siap tempur. Didampingi Marshall lokal Tengger yang hafal seluk-beluk pasir kaldera.',
      highlightTitle: 'Armada Prima & Safety Gear Lengkap:',
      highlights: [
        'Honda CRF 150L / KLX 150 / WR 155R',
        'Helm Cross SNI/DOT + Kacamata Goggle',
        'Deker Pelindung Lutut & Siku (Body Armor)',
        'BBM Full Tank Saat Berangkat',
        'Guide / Marshall Pemandu Rute Lautan Pasir',
        'Jersey Trail Eksklusif (Dipinjamkan)'
      ],
      priceLabel: 'Harga Sewa:',
      priceAmount: 'Rp 450.000',
      priceUnit: '/ unit (Half Day 4 Jam)',
      buttonText: 'Baca Selengkapnya'
    }
  },
  en: {
    sectionBadge: 'SPECIAL & VIRAL EXPERIENCES',
    sectionHeading: 'Savanna Caldera Picnic & Sukapura Trail Dirt Bike Rental',
    sectionSubheading: 'Two of the most sought-after adventures in Bromo: relaxing over hot aesthetic outdoor breakfast in the Teletubbies Savanna or conquering the volcanic sea of sand with high-torque trail bikes.',
    picnicCard: {
      tag1: 'BROMO CALDERA OUTDOOR DINING',
      tag2: '8 CULINARY MENUS',
      title: 'Bromo Picnic Experience (8 Curated Menus)',
      description: 'Savor piping-hot gourmet delicacies against the panoramic backdrop of Mount Bromo and Widodaren Cliffs. Packages 1–4, BBQ Grill, Suki Shabu Tom Yum, Noodle Sets, up to Ultimate Dining.',
      highlightTitle: 'Bromo Picnic Highlights:',
      highlights: [
        '8 Curated Menus: Noodles, BBQ, Suki Shabu & Packages 1-4',
        'Rustic Low Timber Tables & Bohemian Rugs',
        'Vantage Viewpoints of Mount Bromo & Widodaren',
        'Complimentary Warm Tea, Fresh Drip Coffee & Mineral Water',
        'Add-on Glamping Bell Tent & Custom Birthday Decor',
        'Dedicated Private Butler & Instant 30% Deposit Confirmation'
      ],
      priceLabel: 'Starting from:',
      priceAmount: 'IDR 75,000',
      priceUnit: '/ person (Noodles to Ultimate Set)',
      buttonText: 'View All 8 Picnic Packages'
    },
    trailCard: {
      tag1: 'START SUKAPURA BASECAMP PROBOLINGGO',
      tag2: 'DIRT BIKE SAFARI',
      title: 'Sukapura Trail Bike Rental Package',
      description: 'Unleash your adrenaline across the Whispering Sea of Sand and rugged slopes of Widodaren. Accompanied by experienced local Tengger trail marshals who master every contour of the caldera.',
      highlightTitle: 'High-Performance Fleet & Certified Safety Gear:',
      highlights: [
        'Honda CRF 150L / Kawasaki KLX 150 / Yamaha WR 155R',
        'SNI/DOT Certified Cross Helmet + Dust Goggles',
        'Knee & Elbow Protective Guards (Body Armor)',
        'Full Tank Fuel Included at Departure',
        'Local Tengger Route Guide & Marshall Support',
        'Complimentary Adventure Trail Jersey Loan'
      ],
      priceLabel: 'Rental Rate:',
      priceAmount: 'IDR 450,000',
      priceUnit: '/ bike (Half-Day 4 Hours)',
      buttonText: 'Explore Trail Details'
    }
  },
  zh: {
    sectionBadge: '热门与特色体验',
    sectionHeading: '天线宝宝草原野餐与苏卡普拉越野摩托租赁',
    sectionSubheading: '布罗莫火山极具人气的双重体验：在郁郁葱葱的天线宝宝草原品尝精致野餐早餐，或骑行强劲越野摩托征服壮丽火山沙海。',
    picnicCard: {
      tag1: '布罗莫火山口户外雅致野餐',
      tag2: '8款精选美食',
      title: '布罗莫野餐尊享体验（8款特色套餐）',
      description: '在壮丽的布罗莫与维多达伦峰前品尝热气腾腾的户外美食。提供1-4号套餐、精致BBQ烧烤、寿喜烧冬阴功火锅、暖心泡面套餐及尊享盛宴。',
      highlightTitle: '布罗莫野餐特色亮点：',
      highlights: [
        '8款精选菜单：特色泡面、BBQ烧烤、寿喜烧火锅及1-4号套餐',
        '原木质感矮桌与波西米亚风格编织地毯',
        '正对布罗莫火山与维多达伦绝壁景致',
        '热茶、现滤咖啡与瓶装矿泉水无限畅饮',
        '可加配奢华钟形帐篷与生日惊喜定制布置',
        '专属野餐管家贴心服务与30%定金极速确认'
      ],
      priceLabel: '起价：',
      priceAmount: '7.5万印尼盾',
      priceUnit: '/ 人（从暖心套餐至尊享盛宴）',
      buttonText: '查看全部8款野餐套餐'
    },
    trailCard: {
      tag1: '出发基地：苏卡普拉 (SUKAPURA)',
      tag2: '越野摩托探险',
      title: '苏卡普拉越野摩托租赁套餐',
      description: '骑乘专业越野摩托驰骋于细沙呼啸的沙海与维多达伦悬崖山麓，由熟悉火山地貌的当地腾格尔领队全程专业保驾护航。',
      highlightTitle: '高品质车辆与全套专业防护装备：',
      highlights: [
        '本田 CRF 150L / 川崎 KLX 150 / 雅马哈 WR 155R',
        '专业越野头盔（SNI/DOT认证）+ 防风护目镜',
        '专业护膝与护肘防摔护具（全套防护）',
        '出发时已加满燃油',
        '沙海专属向导兼专业领队带队',
        '提供免费租用专业越野骑行服'
      ],
      priceLabel: '租赁价格：',
      priceAmount: '45万印尼盾',
      priceUnit: '/ 台（半天 4小时）',
      buttonText: '查看越野摩托详情'
    }
  }
};
