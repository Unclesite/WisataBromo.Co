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
import {
  ARTICLE_PRIVATE_TRIP_BROMO_START_SURABAYA,
  LocalizedSurabayaTripArticleContent,
} from './articles/private-trip-bromo-start-surabaya';
import {
  ARTICLE_PRIVATE_TRIP_BROMO_START_BATU,
  LocalizedBatuTripArticleContent,
} from './articles/private-trip-bromo-start-batu';
import {
  ARTICLE_PRIVATE_TRIP_BROMO_START_SUKAPURA,
  LocalizedSukapuraTripArticleContent,
} from './articles/private-trip-bromo-start-sukapura';
import {
  ARTICLE_PRIVATE_TRIP_BROMO_START_TOSARI,
  LocalizedTosariTripArticleContent,
} from './articles/private-trip-bromo-start-tosari';
import {
  ARTICLE_PRIVATE_TRIP_BROMO_START_GUBUGKLAKAH,
  LocalizedGubugklakahTripArticleContent,
} from './articles/private-trip-bromo-start-gubugklakah';
import {
  ARTICLE_OPEN_TRIP_BROMO_START_SURABAYA,
  LocalizedOpenTripSurabayaArticleContent,
} from './articles/open-trip-bromo-start-surabaya';
import {
  ARTICLE_OPEN_TRIP_BROMO_START_KOTA_MALANG,
  LocalizedOpenTripMalangArticleContent,
} from './articles/open-trip-bromo-start-kota-malang';
import {
  ARTICLE_OPEN_TRIP_BROMO_START_KOTA_BATU,
  LocalizedOpenTripBatuArticleContent,
} from './articles/open-trip-bromo-start-kota-batu';
import {
  ARTICLE_TOILET_DI_BROMO,
  LocalizedToiletArticleContent,
} from './articles/toilet-di-bromo';
import {
  ARTICLE_AMAN_BROMO_KELUARGA,
  LocalizedFamilySafetyArticleContent,
} from './articles/aman-ke-bromo-balita-difabel-lansia';

export {
  ARTICLE_BARANG_WAJIB_BROMO,
  ARTICLE_KAPASITAS_JEEP_BROMO,
  ARTICLE_WAKTU_TERBAIK_BROMO,
  ARTICLE_BIAYA_KUDA_BROMO,
  ARTICLE_NAIK_KERETA_BROMO,
  ARTICLE_PINTU_MASUK_HARGA_JEEP,
  ARTICLE_OPEN_TRIP_BROMO_START_MALANG,
  ARTICLE_PRIVATE_TRIP_BROMO_START_SURABAYA,
  ARTICLE_PRIVATE_TRIP_BROMO_START_BATU,
  ARTICLE_PRIVATE_TRIP_BROMO_START_SUKAPURA,
  ARTICLE_PRIVATE_TRIP_BROMO_START_TOSARI,
  ARTICLE_PRIVATE_TRIP_BROMO_START_GUBUGKLAKAH,
  ARTICLE_OPEN_TRIP_BROMO_START_SURABAYA,
  ARTICLE_OPEN_TRIP_BROMO_START_KOTA_MALANG,
  ARTICLE_OPEN_TRIP_BROMO_START_KOTA_BATU,
  ARTICLE_TOILET_DI_BROMO,
  ARTICLE_AMAN_BROMO_KELUARGA,
};
export type {
  LocalizedArticleContent,
  LocalizedJeepArticleContent,
  LocalizedSeasonArticleContent,
  LocalizedHorseArticleContent,
  LocalizedTrainArticleContent,
  LocalizedGateJeepArticleContent,
  LocalizedMalangTripArticleContent,
  LocalizedSurabayaTripArticleContent,
  LocalizedBatuTripArticleContent,
  LocalizedSukapuraTripArticleContent,
  LocalizedTosariTripArticleContent,
  LocalizedGubugklakahTripArticleContent,
  LocalizedOpenTripSurabayaArticleContent,
  LocalizedOpenTripMalangArticleContent,
  LocalizedOpenTripBatuArticleContent,
  LocalizedToiletArticleContent,
  LocalizedFamilySafetyArticleContent,
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
  const currentSurabayaTripArt =
    ARTICLE_PRIVATE_TRIP_BROMO_START_SURABAYA[lang] || ARTICLE_PRIVATE_TRIP_BROMO_START_SURABAYA.id;
  const currentBatuTripArt =
    ARTICLE_PRIVATE_TRIP_BROMO_START_BATU[lang] || ARTICLE_PRIVATE_TRIP_BROMO_START_BATU.id;
  const currentSukapuraTripArt =
    ARTICLE_PRIVATE_TRIP_BROMO_START_SUKAPURA[lang] || ARTICLE_PRIVATE_TRIP_BROMO_START_SUKAPURA.id;
  const currentTosariTripArt =
    ARTICLE_PRIVATE_TRIP_BROMO_START_TOSARI[lang] || ARTICLE_PRIVATE_TRIP_BROMO_START_TOSARI.id;
  const currentGubugklakahTripArt =
    ARTICLE_PRIVATE_TRIP_BROMO_START_GUBUGKLAKAH[lang] || ARTICLE_PRIVATE_TRIP_BROMO_START_GUBUGKLAKAH.id;
  const currentOpenTripSurabayaArt =
    ARTICLE_OPEN_TRIP_BROMO_START_SURABAYA[lang] || ARTICLE_OPEN_TRIP_BROMO_START_SURABAYA.id;
  const currentOpenTripMalangArt =
    ARTICLE_OPEN_TRIP_BROMO_START_KOTA_MALANG[lang] || ARTICLE_OPEN_TRIP_BROMO_START_KOTA_MALANG.id;
  const currentOpenTripBatuArt =
    ARTICLE_OPEN_TRIP_BROMO_START_KOTA_BATU[lang] || ARTICLE_OPEN_TRIP_BROMO_START_KOTA_BATU.id;
  const currentToiletArt =
    ARTICLE_TOILET_DI_BROMO[lang] || ARTICLE_TOILET_DI_BROMO.id;
  const currentFamilySafetyArt =
    ARTICLE_AMAN_BROMO_KELUARGA[lang] || ARTICLE_AMAN_BROMO_KELUARGA.id;

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

  const surabayaTripPost: BlogPost = {
    id: currentSurabayaTripArt.id,
    slug: currentSurabayaTripArt.slug,
    title: currentSurabayaTripArt.title,
    subtitle: currentSurabayaTripArt.metaDescription,
    summary: currentSurabayaTripArt.metaDescription,
    excerpt: currentSurabayaTripArt.introduction[0] || currentSurabayaTripArt.metaDescription,
    date: currentSurabayaTripArt.publishDate,
    publishDate: currentSurabayaTripArt.publishDate,
    author: currentSurabayaTripArt.author,
    tag: currentSurabayaTripArt.categoryLabel,
    tags: currentSurabayaTripArt.tags,
    category: currentSurabayaTripArt.category,
    categoryLabel: currentSurabayaTripArt.categoryLabel,
    readTime: currentSurabayaTripArt.readTime,
    imageUrl: currentSurabayaTripArt.heroImage,
    content: [
      ...currentSurabayaTripArt.introduction,
      ...currentSurabayaTripArt.itinerarySteps.map(s => `${s.time} ${s.title}: ${s.description}`),
      currentSurabayaTripArt.conclusion,
    ],
    keyTakeaways: [
      lang === 'en'
        ? '💰 From Rp370k/pax (>18 pax) or Rp570k/pax (6 pax) | 📸 Photo & Video INCLUDED | 🚁 +Rp1.5M'
        : lang === 'zh'
        ? '💰 6人团 Rp570k/人、18人以上 Rp370k/人 | 📸 摄影跟拍已含 | 🚁 +Rp150万'
        : '💰 Mulai Rp370rb/org (>18 pax) atau Rp570rb/org (6 pax) | 📸 Dokumentasi INCLUDE | 🚁 +Rp1,5jt',
      lang === 'en'
        ? '📍 VIP Greater Surabaya Pickup — Juanda Airport, Train Stations & Hotels (23:00–13:30 WIB)'
        : lang === 'zh'
        ? '📍 泗水大区 VIP 接送 — 朱安达机场、火车站及酒店（23:00–13:30 WIB）'
        : '📍 Private Trip Start Surabaya Raya — Jemput Juanda, Stasiun & Hotel (23:00–13:30 WIB)',
    ],
  };

  const batuTripPost: BlogPost = {
    id: currentBatuTripArt.id,
    slug: currentBatuTripArt.slug,
    title: currentBatuTripArt.title,
    subtitle: currentBatuTripArt.metaDescription,
    summary: currentBatuTripArt.metaDescription,
    excerpt: currentBatuTripArt.introduction[0] || currentBatuTripArt.metaDescription,
    date: currentBatuTripArt.publishDate,
    publishDate: currentBatuTripArt.publishDate,
    author: currentBatuTripArt.author,
    tag: currentBatuTripArt.categoryLabel,
    tags: currentBatuTripArt.tags,
    category: currentBatuTripArt.category,
    categoryLabel: currentBatuTripArt.categoryLabel,
    readTime: currentBatuTripArt.readTime,
    imageUrl: currentBatuTripArt.heroImage,
    content: [
      ...currentBatuTripArt.introduction,
      ...currentBatuTripArt.itinerarySteps.map(s => `${s.time} ${s.title}: ${s.description}`),
      currentBatuTripArt.conclusion,
    ],
    keyTakeaways: [
      lang === 'en'
        ? '💰 Rp1.800.000 / jeep (1–6 pax, same price for 1 or 6 people) | 📸 +Rp500k | 🚁 +Rp1.5M'
        : lang === 'zh'
        ? '💰 Rp1.800.000 / 辆吉普（1–6人同价，1人或6人价格相同）| 📸 +Rp50万 | 🚁 +Rp150万'
        : '💰 Rp1.800.000 / jeep (1–6 peserta, 1 atau 6 orang harga sama) | 📸 +Rp500rb | 🚁 +Rp1,5jt',
      lang === 'en'
        ? '📍 Private Trip Start Batu City — Door-to-door Hotel, Resort & Villa pickup (23:00–13:00 WIB)'
        : lang === 'zh'
        ? '📍 巴图市私人团 — 酒店/度假村/别墅上门接送（23:00–13:00 WIB）'
        : '📍 Private Trip Start Kota Batu — Jemput Hotel, Resort & Villa (23:00–13:00 WIB)',
    ],
  };

  const sukapuraTripPost: BlogPost = {
    id: currentSukapuraTripArt.id,
    slug: currentSukapuraTripArt.slug,
    title: currentSukapuraTripArt.title,
    subtitle: currentSukapuraTripArt.metaDescription,
    summary: currentSukapuraTripArt.metaDescription,
    excerpt: currentSukapuraTripArt.introduction[0] || currentSukapuraTripArt.metaDescription,
    date: currentSukapuraTripArt.publishDate,
    publishDate: currentSukapuraTripArt.publishDate,
    author: currentSukapuraTripArt.author,
    tag: currentSukapuraTripArt.categoryLabel,
    tags: currentSukapuraTripArt.tags,
    category: currentSukapuraTripArt.category,
    categoryLabel: currentSukapuraTripArt.categoryLabel,
    readTime: currentSukapuraTripArt.readTime,
    imageUrl: currentSukapuraTripArt.heroImage,
    content: [
      ...currentSukapuraTripArt.introduction,
      ...currentSukapuraTripArt.itinerarySteps.map(s => `${s.time} ${s.title}: ${s.description}`),
      currentSukapuraTripArt.conclusion,
    ],
    keyTakeaways: [
      lang === 'en'
        ? '💰 Rp1.000.000 / jeep (1–6 pax, same price for 1 or 6 people) | 📸 +Rp500k | 🚁 +Rp1.5M'
        : lang === 'zh'
        ? '💰 Rp1.000.000 / 辆吉普（1–6人同价，1人或6人价格相同）| 📸 +Rp50万 | 🚁 +Rp150万'
        : '💰 Rp1.000.000 / jeep (1–6 peserta, 1 atau 6 orang harga sama) | 📸 +Rp500rb | 🚁 +Rp1,5jt',
      lang === 'en'
        ? '📍 Basecamp Sukapura Probolinggo & Cemoro Lawang Hotels (Sunrise 03:00 / Panorama 11:00)'
        : lang === 'zh'
        ? '📍 庞越 Sukapura 吉普大本营及周边酒店（日出 03:00 / 全景 11:00）'
        : '📍 Basecamp Sukapura Probolinggo & Hotel Cemoro Lawang (Sunrise 03:00 / Panorama 11:00)',
    ],
  };

  const tosariTripPost: BlogPost = {
    id: currentTosariTripArt.id,
    slug: currentTosariTripArt.slug,
    title: currentTosariTripArt.title,
    subtitle: currentTosariTripArt.metaDescription,
    summary: currentTosariTripArt.metaDescription,
    excerpt: currentTosariTripArt.introduction[0] || currentTosariTripArt.metaDescription,
    date: currentTosariTripArt.publishDate,
    publishDate: currentTosariTripArt.publishDate,
    author: currentTosariTripArt.author,
    tag: currentTosariTripArt.categoryLabel,
    tags: currentTosariTripArt.tags,
    category: currentTosariTripArt.category,
    categoryLabel: currentTosariTripArt.categoryLabel,
    readTime: currentTosariTripArt.readTime,
    imageUrl: currentTosariTripArt.heroImage,
    content: [
      ...currentTosariTripArt.introduction,
      ...currentTosariTripArt.itinerarySteps.map(s => `${s.time} ${s.title}: ${s.description}`),
      currentTosariTripArt.conclusion,
    ],
    keyTakeaways: [
      lang === 'en'
        ? '💰 Rp950.000 / jeep (1–6 pax, same price for 1 or 6 people) | 📸 +Rp500k | 🚁 +Rp1.5M'
        : lang === 'zh'
        ? '💰 Rp950.000 / 辆吉普（1–6人同价，1人或6人价格相同）| 📸 +Rp50万 | 🚁 +Rp150万'
        : '💰 Rp950.000 / jeep (1–6 peserta, 1 atau 6 orang harga sama) | 📸 +Rp500rb | 🚁 +Rp1,5jt',
      lang === 'en'
        ? '📍 Basecamp Tosari Pasuruan & Wonokitri Hotels — Shortest drive to Sunrise Point'
        : lang === 'zh'
        ? '📍 岩望 Tosari 吉普大本营及 Wonokitri 酒店 — 距日出点最近入口'
        : '📍 Basecamp Tosari Pasuruan & Hotel Wonokitri — Jarak terdekat ke Sunrise Point',
    ],
  };

  const gubugklakahTripPost: BlogPost = {
    id: currentGubugklakahTripArt.id,
    slug: currentGubugklakahTripArt.slug,
    title: currentGubugklakahTripArt.title,
    subtitle: currentGubugklakahTripArt.metaDescription,
    summary: currentGubugklakahTripArt.metaDescription,
    excerpt: currentGubugklakahTripArt.introduction[0] || currentGubugklakahTripArt.metaDescription,
    date: currentGubugklakahTripArt.publishDate,
    publishDate: currentGubugklakahTripArt.publishDate,
    author: currentGubugklakahTripArt.author,
    tag: currentGubugklakahTripArt.categoryLabel,
    tags: currentGubugklakahTripArt.tags,
    category: currentGubugklakahTripArt.category,
    categoryLabel: currentGubugklakahTripArt.categoryLabel,
    readTime: currentGubugklakahTripArt.readTime,
    imageUrl: currentGubugklakahTripArt.heroImage,
    content: [
      ...currentGubugklakahTripArt.introduction,
      ...currentGubugklakahTripArt.itinerarySteps.map(s => `${s.time} ${s.title}: ${s.description}`),
      currentGubugklakahTripArt.conclusion,
    ],
    keyTakeaways: [
      lang === 'en'
        ? '💰 Rp1.400.000 / jeep (1–6 pax, same price for 1 or 6 people) | 📸 +Rp500k | 🚁 +Rp1.5M'
        : lang === 'zh'
        ? '💰 Rp1.400.000 / 辆吉普（1–6人同价，1人或6人价格相同）| 📸 +Rp50万 | 🚁 +Rp150万'
        : '💰 Rp1.400.000 / jeep (1–6 peserta, 1 atau 6 orang harga sama) | 📸 +Rp500rb | 🚁 +Rp1,5jt',
      lang === 'en'
        ? '📍 Basecamp Gubugklakah No. 147, Malang Regency — Scenic Ngadas & Jemplang route'
        : lang === 'zh'
        ? '📍 玛琅县 Gubugklakah 147号大本营 — Ngadas 与 Jemplang 绝美南线'
        : '📍 Basecamp Gubugklakah No. 147 Kab. Malang — Jalur eksotis Ngadas & Jemplang',
    ],
  };

  const openTripSurabayaPost: BlogPost = {
    id: currentOpenTripSurabayaArt.id,
    slug: currentOpenTripSurabayaArt.slug,
    title: currentOpenTripSurabayaArt.title,
    subtitle: currentOpenTripSurabayaArt.metaDescription,
    summary: currentOpenTripSurabayaArt.metaDescription,
    excerpt: currentOpenTripSurabayaArt.introduction[0] || currentOpenTripSurabayaArt.metaDescription,
    date: currentOpenTripSurabayaArt.publishDate,
    publishDate: currentOpenTripSurabayaArt.publishDate,
    author: currentOpenTripSurabayaArt.author,
    tag: currentOpenTripSurabayaArt.categoryLabel,
    tags: currentOpenTripSurabayaArt.tags,
    category: currentOpenTripSurabayaArt.category,
    categoryLabel: currentOpenTripSurabayaArt.categoryLabel,
    readTime: currentOpenTripSurabayaArt.readTime,
    imageUrl: currentOpenTripSurabayaArt.heroImage,
    content: [
      ...currentOpenTripSurabayaArt.introduction,
      ...currentOpenTripSurabayaArt.itinerarySteps.map(s => `${s.time} ${s.title}: ${s.description}`),
      currentOpenTripSurabayaArt.conclusion,
    ],
    keyTakeaways: [
      lang === 'en'
        ? '💰 Weekend via Tosari Rp400k/pax (1 pax guaranteed!) | Daily via Malang Rp750k/pax | 📸 Photo INCLUDED'
        : lang === 'zh'
        ? '💰 周六经 Tosari Rp400k/人（1人发团！）| 每日经玛琅 Rp750k/人 | 📸 摄影跟拍已含'
        : '💰 Weekend via Tosari Rp400rb/org (1 org pasti berangkat!) | Harian via Malang Rp750rb/org | 📸 Doc INCLUDE',
      lang === 'en'
        ? '📍 Pasar Turi Station & Bungurasih Terminal (Weekend) or Custom Surabaya/Sidoarjo Pickup (Daily)'
        : lang === 'zh'
        ? '📍 Pasar Turi 火车站与 Bungurasih 总站（周末）或泗水/诗都阿佐自由接送（每日）'
        : '📍 Stasiun Pasar Turi & Terminal Bungurasih (Weekend) atau Bebas Titik Jemput Surabaya/Sidoarjo (Harian)',
    ],
  };

  const openTripMalangPost: BlogPost = {
    id: currentOpenTripMalangArt.id,
    slug: currentOpenTripMalangArt.slug,
    title: currentOpenTripMalangArt.title,
    subtitle: currentOpenTripMalangArt.metaDescription,
    summary: currentOpenTripMalangArt.metaDescription,
    excerpt: currentOpenTripMalangArt.introduction[0] || currentOpenTripMalangArt.metaDescription,
    date: currentOpenTripMalangArt.publishDate,
    publishDate: currentOpenTripMalangArt.publishDate,
    author: currentOpenTripMalangArt.author,
    tag: currentOpenTripMalangArt.categoryLabel,
    tags: currentOpenTripMalangArt.tags,
    category: currentOpenTripMalangArt.category,
    categoryLabel: currentOpenTripMalangArt.categoryLabel,
    readTime: currentOpenTripMalangArt.readTime,
    imageUrl: currentOpenTripMalangArt.heroImage,
    content: [
      ...currentOpenTripMalangArt.introduction,
      ...currentOpenTripMalangArt.itinerarySteps.map(s => `${s.time} ${s.title}: ${s.description}`),
      currentOpenTripMalangArt.conclusion,
    ],
    keyTakeaways: [
      lang === 'en'
        ? '💰 Start Malang Rp275k/pax (Regular) or Rp325k/pax (+DSLR Photo) | 1 Pax Guaranteed Daily!'
        : lang === 'zh'
        ? '💰 玛琅出发 Rp275k/人（标准版）或 Rp325k/人（含单反跟拍）| 1人天天发团！'
        : '💰 Start Malang Rp275rb/org (Reguler) atau Rp325rb/org (+Foto DSLR) | 1 Orang Pasti Berangkat!',
      lang === 'en'
        ? '📍 Door-to-door pickup at Malang Stations, Hotels, Airport & Homes (23:00–13:00 WIB)'
        : lang === 'zh'
        ? '📍 玛琅火车站、酒店、机场及市区住宅上门接送（23:00–13:00 WIB）'
        : '📍 Jemput langsung Stasiun Malang, Hotel, Bandara & Rumah (23:00–13:00 WIB)',
    ],
  };

  const openTripBatuPost: BlogPost = {
    id: currentOpenTripBatuArt.id,
    slug: currentOpenTripBatuArt.slug,
    title: currentOpenTripBatuArt.title,
    subtitle: currentOpenTripBatuArt.metaDescription,
    summary: currentOpenTripBatuArt.metaDescription,
    excerpt: currentOpenTripBatuArt.introduction[0] || currentOpenTripBatuArt.metaDescription,
    date: currentOpenTripBatuArt.publishDate,
    publishDate: currentOpenTripBatuArt.publishDate,
    author: currentOpenTripBatuArt.author,
    tag: currentOpenTripBatuArt.categoryLabel,
    tags: currentOpenTripBatuArt.tags,
    category: currentOpenTripBatuArt.category,
    categoryLabel: currentOpenTripBatuArt.categoryLabel,
    readTime: currentOpenTripBatuArt.readTime,
    imageUrl: currentOpenTripBatuArt.heroImage,
    content: [
      ...currentOpenTripBatuArt.introduction,
      ...currentOpenTripBatuArt.itinerarySteps.map(s => `${s.time} ${s.title}: ${s.description}`),
      currentOpenTripBatuArt.conclusion,
    ],
    keyTakeaways: [
      lang === 'en'
        ? '💰 Start Batu City Rp325k/pax (Regular) or Rp375k/pax (+DSLR Photo) | 1 Pax Guaranteed Daily!'
        : lang === 'zh'
        ? '💰 巴图市出发 Rp325k/人（标准版）或 Rp375k/人（含单反跟拍）| 1人天天发团！'
        : '💰 Start Kota Batu Rp325rb/org (Reguler) atau Rp375rb/org (+Foto DSLR) | 1 Orang Pasti Berangkat!',
      lang === 'en'
        ? '📍 Door-to-door pickup at Batu Hotels, Resorts & Villas near Jatim Park & Selecta (23:00–13:00 WIB)'
        : lang === 'zh'
        ? '📍 巴图市 Jatim Park、Selecta 周边酒店、度假村与别墅上门接送（23:00–13:00 WIB）'
        : '📍 Jemput langsung Hotel, Resort & Villa Kota Wisata Batu area Jatim Park & Selecta (23:00–13:00 WIB)',
    ],
  };

  const toiletPost: BlogPost = {
    id: currentToiletArt.id,
    slug: currentToiletArt.slug,
    title: currentToiletArt.title,
    subtitle: currentToiletArt.metaDescription,
    summary: currentToiletArt.metaDescription,
    excerpt: currentToiletArt.introduction[0] || currentToiletArt.metaDescription,
    date: currentToiletArt.publishDate,
    publishDate: currentToiletArt.publishDate,
    author: currentToiletArt.author,
    tag: currentToiletArt.categoryLabel,
    tags: currentToiletArt.tags,
    category: currentToiletArt.category,
    categoryLabel: currentToiletArt.categoryLabel,
    readTime: currentToiletArt.readTime,
    imageUrl: currentToiletArt.heroImage,
    content: [
      ...currentToiletArt.introduction,
      ...currentToiletArt.locations.map(l => `${l.symbol} ${l.name}: ${l.description}`),
      currentToiletArt.conclusion,
    ],
    keyTakeaways: [
      lang === 'en'
        ? '🚻 4 Locations: Transit Rest Areas (Best), Sunrise Point, Sea of Sand Jeep Parking & Crater Stairs'
        : lang === 'zh'
        ? '🚻 4大厕所点位：入口中转休息区（最佳）、日出观景台、沙海停车场与火山口台阶'
        : '🚻 4 Lokasi: Rest Area Transit (Terbaik), Sunrise Point, Parkir Jeep Lautan Pasir & Tangga Kawah',
      lang === 'en'
        ? '💰 Cash Fee: Rp2,000–Rp5,000 | ⚠️ 10–20 min sunrise queues & scarce water — pack 🧻 wipes & sanitizer'
        : lang === 'zh'
        ? '💰 现金费用：Rp2,000–Rp5,000 | ⚠️ 日出排队10–20分钟且易缺水 — 必带 🧻 干湿纸巾与免洗洗手液'
        : '💰 Biaya Tunai: Rp2.000–Rp5.000 | ⚠️ Antre 10–20 mnt saat sunrise & air terbatas — bawa 🧻 tisu & sanitizer',
    ],
  };

  const familySafetyPost: BlogPost = {
    id: currentFamilySafetyArt.id,
    slug: currentFamilySafetyArt.slug,
    title: currentFamilySafetyArt.title,
    subtitle: currentFamilySafetyArt.metaDescription,
    summary: currentFamilySafetyArt.metaDescription,
    excerpt: currentFamilySafetyArt.introduction[0] || currentFamilySafetyArt.metaDescription,
    date: currentFamilySafetyArt.publishDate,
    publishDate: currentFamilySafetyArt.publishDate,
    author: currentFamilySafetyArt.author,
    tag: currentFamilySafetyArt.categoryLabel,
    tags: currentFamilySafetyArt.tags,
    category: currentFamilySafetyArt.category,
    categoryLabel: currentFamilySafetyArt.categoryLabel,
    readTime: currentFamilySafetyArt.readTime,
    imageUrl: currentFamilySafetyArt.heroImage,
    content: [
      ...currentFamilySafetyArt.introduction,
      currentFamilySafetyArt.verdictBox.statement,
      currentFamilySafetyArt.conclusion,
    ],
    keyTakeaways: [
      lang === 'en'
        ? '✅ Safe at Viewpoints & Sea of Sand with route adjustments | ⚠️ Skip 250 steep crater stairs'
        : lang === 'zh'
        ? '✅ 观景台与沙海调整路线后相对安全 | ⚠️ 切勿勉强攀爬250级陡峭火山口台阶'
        : '✅ Aman di Viewpoint & Lautan Pasir dengan penyesuaian rute | ⚠️ Hindari 250 tangga curam kawah',
      lang === 'en'
        ? '🚐 Private Jeep mandatory for babies, wheelchairs & seniors | 🍼 Baby carrier, 🧥 layers & 💊 meds'
        : lang === 'zh'
        ? '🚐 带婴儿、轮椅与老人必选私人吉普 | 🍼 婴儿背带、🧥 保暖多层与 💊 常备药'
        : '🚐 Wajib Jeep Private untuk bayi, difabel & lansia | 🍼 Baby carrier, 🧥 baju berlapis & 💊 obat pribadi',
    ],
  };

  return [jeepPost, gearPost, seasonPost, horsePost, trainPost, gateJeepPost, malangTripPost, surabayaTripPost, batuTripPost, sukapuraTripPost, tosariTripPost, gubugklakahTripPost, openTripSurabayaPost, openTripMalangPost, openTripBatuPost, toiletPost, familySafetyPost];
};

// Default ID export for fallback
export const BLOG_POSTS: BlogPost[] = getLocalizedBlogPosts('id');
