import { BlogPost } from '../types';
import { SupportedLanguage } from '../i18n/LanguageContext';
import { ARTICLE_BARANG_WAJIB_BROMO, LocalizedArticleContent } from './articles/barang-wajib-bromo';
import { ARTICLE_KAPASITAS_JEEP_BROMO, LocalizedJeepArticleContent } from './articles/kapasitas-jeep-bromo';
import { ARTICLE_WAKTU_TERBAIK_BROMO, LocalizedSeasonArticleContent } from './articles/waktu-terbaik-bromo';
import { ARTICLE_BIAYA_KUDA_BROMO, LocalizedHorseArticleContent } from './articles/biaya-kuda-bromo';

export {
  ARTICLE_BARANG_WAJIB_BROMO,
  ARTICLE_KAPASITAS_JEEP_BROMO,
  ARTICLE_WAKTU_TERBAIK_BROMO,
  ARTICLE_BIAYA_KUDA_BROMO,
};
export type {
  LocalizedArticleContent,
  LocalizedJeepArticleContent,
  LocalizedSeasonArticleContent,
  LocalizedHorseArticleContent,
};

// Helper to convert LocalizedArticleContent to standard BlogPost type
export const getLocalizedBlogPosts = (lang: SupportedLanguage = 'id'): BlogPost[] => {
  const currentJeepArt = ARTICLE_KAPASITAS_JEEP_BROMO[lang] || ARTICLE_KAPASITAS_JEEP_BROMO.id;
  const currentGearArt = ARTICLE_BARANG_WAJIB_BROMO[lang] || ARTICLE_BARANG_WAJIB_BROMO.id;
  const currentSeasonArt = ARTICLE_WAKTU_TERBAIK_BROMO[lang] || ARTICLE_WAKTU_TERBAIK_BROMO.id;
  const currentHorseArt = ARTICLE_BIAYA_KUDA_BROMO[lang] || ARTICLE_BIAYA_KUDA_BROMO.id;

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

  return [jeepPost, gearPost, seasonPost, horsePost];
};

// Default ID export for fallback
export const BLOG_POSTS: BlogPost[] = getLocalizedBlogPosts('id');
