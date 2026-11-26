import { BlogPost } from '../types';
import { SupportedLanguage } from '../i18n/LanguageContext';
import { ARTICLE_BARANG_WAJIB_BROMO, LocalizedArticleContent } from './articles/barang-wajib-bromo';
import { ARTICLE_KAPASITAS_JEEP_BROMO, LocalizedJeepArticleContent } from './articles/kapasitas-jeep-bromo';
import { ARTICLE_WAKTU_TERBAIK_BROMO, LocalizedSeasonArticleContent } from './articles/waktu-terbaik-bromo';
import { ARTICLE_BIAYA_KUDA_BROMO, LocalizedHorseArticleContent } from './articles/biaya-kuda-bromo';
import { ARTICLE_NAIK_KERETA_BROMO, LocalizedTrainArticleContent } from './articles/naik-kereta-ke-bromo';
import { ARTICLE_PINTU_MASUK_HARGA_JEEP, LocalizedGateJeepArticleContent } from './articles/pintu-masuk-bromo-harga-jeep';
import {
  ARTICLE_OPEN_TRIP_BROMO_START_MALANG,
  LocalizedMalangTripArticleContent,
} from './articles/open-trip-bromo-start-malang';

export {
  ARTICLE_BARANG_WAJIB_BROMO,
  ARTICLE_KAPASITAS_JEEP_BROMO,
  ARTICLE_WAKTU_TERBAIK_BROMO,
  ARTICLE_BIAYA_KUDA_BROMO,
  ARTICLE_NAIK_KERETA_BROMO,
  ARTICLE_PINTU_MASUK_HARGA_JEEP,
  ARTICLE_OPEN_TRIP_BROMO_START_MALANG,
};
export type {
  LocalizedArticleContent,
  LocalizedJeepArticleContent,
  LocalizedSeasonArticleContent,
  LocalizedHorseArticleContent,
  LocalizedTrainArticleContent,
  LocalizedGateJeepArticleContent,
  LocalizedMalangTripArticleContent,
};

// Helper to convert LocalizedArticleContent to standard BlogPost type
export const getLocalizedBlogPosts = (lang: SupportedLanguage = 'id'): BlogPost[] => {
  const currentJeepArt = ARTICLE_KAPASITAS_JEEP_BROMO[lang] || ARTICLE_KAPASITAS_JEEP_BROMO.id;
  const currentGearArt = ARTICLE_BARANG_WAJIB_BROMO[lang] || ARTICLE_BARANG_WAJIB_BROMO.id;
  const currentSeasonArt = ARTICLE_WAKTU_TERBAIK_BROMO[lang] || ARTICLE_WAKTU_TERBAIK_BROMO.id;
  const currentHorseArt = ARTICLE_BIAYA_KUDA_BROMO[lang] || ARTICLE_BIAYA_KUDA_BROMO.id;
  const currentTrainArt = ARTICLE_NAIK_KERETA_BROMO[lang] || ARTICLE_NAIK_KERETA_BROMO.id;
  const currentGateJeepArt = ARTICLE_PINTU_MASUK_HARGA_JEEP[lang] || ARTICLE_PINTU_MASUK_HARGA_JEEP.id;
  const currentMalangTripArt =
    ARTICLE_OPEN_TRIP_BROMO_START_MALANG[lang] || ARTICLE_OPEN_TRIP_BROMO_START_MALANG.id;

  const jeepPost: BlogPost = {
    id: currentJeepArt.id,
    slug: 'kapasitas-jeep-bromo-tips-nyaman',
    title: currentJeepArt.title,
    subtitle: currentJeepArt.metaDescription,
    summary: currentJeepArt.metaDescription,
    excerpt: currentJeepArt.introduction[0] || currentJeepArt.metaDescription,
    date: currentJeepArt.publishDate,
    publishDate: currentJeepArt.publishDate,
    author: currentJeepArt.author,
    tag: currentJeepArt.categoryLabel,
    tags: currentJeepArt.tags,
    category: currentJeepArt.category,
    categoryLabel: currentJeepArt.categoryLabel,
    readTime: currentJeepArt.readTime,
    imageUrl: currentJeepArt.heroImage,
    content: [
      ...currentJeepArt.introduction,
      ...currentJeepArt.sections.map(s => `${s.title}: ${s.paragraphs.join(' ')}`),
      currentJeepArt.conclusion
    ],
    keyTakeaways: [
      lang === 'en' 
        ? 'Official limit: 1 Driver + 6 Passengers (or 1 Driver + 1 Photographer + 5 Guests)' 
        : lang === 'zh'
        ? '官方限额：1名司机 + 6名乘客（或1名司机 + 1名摄影师 + 5名乘客）'
        : 'Batas resmi: 1 Driver + 6 Peserta (atau 1 Driver + 1 Fotografer + 5 Peserta)',
      lang === 'en'
        ? 'Front seat: 2 guests | Rear benches: 4 guests facing inward'
        : lang === 'zh'
        ? '前排副驾：2名乘客 | 后排对坐长椅：4名乘客'
        : 'Baris depan: 2 peserta | Baris belakang: 4 peserta saling berhadapan'
    ]
  };

  const gearPost: BlogPost = {
    id: currentGearArt.id,
    slug: '7-barang-wajib-bawaan-ke-bromo',
    title: currentGearArt.title,
    subtitle: currentGearArt.metaDescription,
    summary: currentGearArt.metaDescription,
    excerpt: currentGearArt.introduction[0] || currentGearArt.metaDescription,
    date: currentGearArt.publishDate,
    publishDate: currentGearArt.publishDate,
    author: currentGearArt.author,
    tag: currentGearArt.categoryLabel,
    tags: currentGearArt.tags,
    category: currentGearArt.category,
    categoryLabel: currentGearArt.categoryLabel,
    readTime: currentGearArt.readTime,
    imageUrl: currentGearArt.heroImage,
    content: [
      ...currentGearArt.introduction,
      ...currentGearArt.items.map(item => `${item.title}: ${item.description}`),
      currentGearArt.conclusion
    ],
    keyTakeaways: currentGearArt.items.map(item => `${item.title.replace(/^\d+\.\s*/, '')} — ${item.subtitle}`)
  };

  const seasonPost: BlogPost = {
    id: currentSeasonArt.id,
    slug: 'kapan-waktu-terbaik-ke-bromo',
    title: currentSeasonArt.title,
    subtitle: currentSeasonArt.metaDescription,
    summary: currentSeasonArt.metaDescription,
    excerpt: currentSeasonArt.introduction?.[0] || currentSeasonArt.metaDescription,
    date: currentSeasonArt.publishDate,
    publishDate: currentSeasonArt.publishDate,
    author: currentSeasonArt.author,
    tag: currentSeasonArt.categoryLabel,
    tags: currentSeasonArt.tags,
    category: currentSeasonArt.category,
    categoryLabel: currentSeasonArt.categoryLabel,
    readTime: currentSeasonArt.readTime,
    imageUrl: currentSeasonArt.heroImage,
    content: [
      ...(currentSeasonArt.introduction || []),
      ...(currentSeasonArt.seasons || []).map(s => `${s.title}: ${s.paragraphs?.join(' ') || ''}`),
      currentSeasonArt.conclusion
    ],
    keyTakeaways: [
      lang === 'en'
        ? 'Dry Season (May–Oct): Best for Golden Sunrise & Stargazing'
        : lang === 'zh'
        ? '旱季（5月-10月）：最适合观赏金色日出与星空'
        : 'Musim Kemarau (Mei–Okt): Terbaik untuk Golden Sunrise & Stargazing',
      lang === 'en'
        ? 'Rainy Season (Nov–Apr): Lush Emerald Teletubbies Savanna'
        : lang === 'zh'
        ? '雨季（11月-4月）：生机盎然的翠绿天线宝宝草原'
        : 'Musim Penghujan (Nov–Apr): Bukit Teletubbies Hijau Royo-Royo'
    ]
  };

  const horsePost: BlogPost = {
    id: currentHorseArt.id,
    slug: currentHorseArt.slug,
    title: currentHorseArt.title,
    subtitle: currentHorseArt.metaDescription,
    summary: currentHorseArt.metaDescription,
    excerpt: currentHorseArt.introduction[0] || currentHorseArt.metaDescription,
    date: currentHorseArt.publishDate,
    publishDate: currentHorseArt.publishDate,
    author: currentHorseArt.author,
    tag: currentHorseArt.categoryLabel,
    tags: currentHorseArt.tags,
    category: currentHorseArt.category,
    categoryLabel: currentHorseArt.categoryLabel,
    readTime: currentHorseArt.readTime,
    imageUrl: currentHorseArt.heroImage,
    content: [
      ...currentHorseArt.introduction,
      ...currentHorseArt.points.map(p => `${p.title}: ${p.description}`),
      currentHorseArt.conclusion
    ],
    keyTakeaways: [
      lang === 'en'
        ? 'Round-Trip (Jeep ↔ Crater Stairs): IDR 150k – 250k | Photo Only: IDR 30k – 50k'
        : lang === 'zh'
        ? '往返租马（停车场↔火山口台阶）：Rp 15万–25万 | 仅拍照：Rp 3万–5万'
        : 'Tarif PP Parkiran Jeep ↔ Kaki Tangga: Rp 150rb – Rp 250rb | Foto Saja: Rp 30rb – Rp 50rb',
      lang === 'en'
        ? 'Always agree on Round-Trip vs One-Way upfront & bring small IDR cash'
        : lang === 'zh'
        ? '上马前确认往返或单程并提前备好小额印尼盾现金'
        : 'Selalu sepakati harga PP/sekali jalan di awal & bawa uang tunai pecahan kecil'
    ]
  };

  const trainPost: BlogPost = {
    id: currentTrainArt.id,
    slug: currentTrainArt.slug,
    title: currentTrainArt.title,
    subtitle: currentTrainArt.metaDescription,
    summary: currentTrainArt.metaDescription,
    excerpt: currentTrainArt.introduction[0] || currentTrainArt.metaDescription,
    date: currentTrainArt.publishDate,
    publishDate: currentTrainArt.publishDate,
    author: currentTrainArt.author,
    tag: currentTrainArt.categoryLabel,
    tags: currentTrainArt.tags,
    category: currentTrainArt.category,
    categoryLabel: currentTrainArt.categoryLabel,
    readTime: currentTrainArt.readTime,
    imageUrl: currentTrainArt.heroImage,
    content: [
      ...currentTrainArt.introduction,
      currentTrainArt.costClarification.summaryNote,
      currentTrainArt.conclusion,
    ],
    keyTakeaways: [
      lang === 'en'
        ? '🚐 Malang Daily (23:00): Rp275k / Rp325k | Surabaya Saturday (22:00): Rp400k'
        : lang === 'zh'
        ? '🚐 玛琅每日团 (23:00): Rp275k/Rp325k | 泗水周六团 (22:00): Rp400k'
        : '🚐 Start Malang (Setiap Hari 23.00): Rp275rb/Rp325rb | Start Surabaya (Sabtu 22.00): Rp400rb',
      lang === 'en'
        ? '🚂 Includes Java animated train route map & fares from Jakarta, Bandung, Semarang, Yogyakarta'
        : lang === 'zh'
        ? '🚂 含爪哇铁路动态地图及雅加达、万隆、三宝垄、日惹火车票价参考'
        : '🚂 Dilengkapi peta animasi jalur kereta Jawa & acuan harga dari Jakarta, Bandung, Semarang, Jogja',
    ],
  };

  const gateJeepPost: BlogPost = {
    id: currentGateJeepArt.id,
    slug: currentGateJeepArt.slug,
    title: currentGateJeepArt.title,
    subtitle: currentGateJeepArt.metaDescription,
    summary: currentGateJeepArt.metaDescription,
    excerpt: currentGateJeepArt.introduction[0] || currentGateJeepArt.metaDescription,
    date: currentGateJeepArt.publishDate,
    publishDate: currentGateJeepArt.publishDate,
    author: currentGateJeepArt.author,
    tag: currentGateJeepArt.categoryLabel,
    tags: currentGateJeepArt.tags,
    category: currentGateJeepArt.category,
    categoryLabel: currentGateJeepArt.categoryLabel,
    readTime: currentGateJeepArt.readTime,
    imageUrl: currentGateJeepArt.heroImage,
    content: [
      ...currentGateJeepArt.introduction,
      ...currentGateJeepArt.gates.map(g => `${g.title}: ${g.description}`),
      currentGateJeepArt.conclusion,
    ],
    keyTakeaways: [
      lang === 'en'
        ? '🚐 Per Jeep (incl. driver, tickets & fuel): Tosari Rp950k | Sukapura Rp1M | Gubugklakah Rp1.4M'
        : lang === 'zh'
        ? '🚐 每辆吉普（含司机门票油费）：Tosari Rp950k | Sukapura Rp100万 | Gubugklakah Rp140万'
        : '🚐 Per Jeep (include driver, tiket & BBM): Tosari Rp950rb | Sukapura Rp1jt | Gubugklakah Rp1,4jt',
      lang === 'en'
        ? '🛣️ Includes animated route map to Cemoro Lawang, Wonokitri & Gubugklakah'
        : lang === 'zh'
        ? '🛣️ 含三大入口（Cemoro Lawang / Wonokitri / Gubugklakah）动态路线图'
        : '🛣️ Dilengkapi peta animasi 3 pintu masuk: Sukapura, Tosari & Gubugklakah',
    ],
  };

  const malangTripPost: BlogPost = {
    id: currentMalangTripArt.id,
    slug: currentMalangTripArt.slug,
    title: currentMalangTripArt.title,
    subtitle: currentMalangTripArt.metaDescription,
    summary: currentMalangTripArt.metaDescription,
    excerpt: currentMalangTripArt.introduction[0] || currentMalangTripArt.metaDescription,
    date: currentMalangTripArt.publishDate,
    publishDate: currentMalangTripArt.publishDate,
    author: currentMalangTripArt.author,
    tag: currentMalangTripArt.categoryLabel,
    tags: currentMalangTripArt.tags,
    category: currentMalangTripArt.category,
    categoryLabel: currentMalangTripArt.categoryLabel,
    readTime: currentMalangTripArt.readTime,
    imageUrl: currentMalangTripArt.heroImage,
    content: [
      ...currentMalangTripArt.introduction,
      ...currentMalangTripArt.itinerarySteps.map(s => `${s.time} ${s.title}: ${s.description}`),
      currentMalangTripArt.conclusion,
    ],
    keyTakeaways: [
      lang === 'en'
        ? '💰 Rp1.700.000 / jeep (1–6 pax, same price for 1 or 6 people) | 📸 +Rp500k | 🚁 +Rp1.5M'
        : lang === 'zh'
        ? '💰 Rp1.700.000 / 辆吉普（1–6人同价，1人或6人价格相同）| 📸 +Rp50万 | 🚁 +Rp150万'
        : '💰 Rp1.700.000 / jeep (1–6 peserta, 1 atau 6 orang harga sama) | 📸 +Rp500rb | 🚁 +Rp1,5jt',
      lang === 'en'
        ? '📍 Private Trip Start Malang City — Direct Station & Hotel pickup (23:00–12:30 WIB)'
        : lang === 'zh'
        ? '📍 玛琅市区私人团 — 火车站/酒店上门接送（23:00–12:30 WIB）'
        : '📍 Private Trip Start Kota Malang — Jemput Stasiun & Hotel (23:00–12:30 WIB)',
    ],
  };

  return [jeepPost, gearPost, seasonPost, horsePost, trainPost, gateJeepPost, malangTripPost];
};

// Default ID export for fallback
export const BLOG_POSTS: BlogPost[] = getLocalizedBlogPosts('id');
