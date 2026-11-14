import { BlogPost } from '../types';
import { SupportedLanguage } from '../i18n/LanguageContext';
import { ARTICLE_BARANG_WAJIB_BROMO, LocalizedArticleContent } from './articles/barang-wajib-bromo';
import { ARTICLE_KAPASITAS_JEEP_BROMO, LocalizedJeepArticleContent } from './articles/kapasitas-jeep-bromo';
import { ARTICLE_WAKTU_TERBAIK_BROMO, LocalizedSeasonArticleContent } from './articles/waktu-terbaik-bromo';

export { ARTICLE_BARANG_WAJIB_BROMO, ARTICLE_KAPASITAS_JEEP_BROMO, ARTICLE_WAKTU_TERBAIK_BROMO };
export type { LocalizedArticleContent, LocalizedJeepArticleContent, LocalizedSeasonArticleContent };

// Helper to convert LocalizedArticleContent to standard BlogPost type
export const getLocalizedBlogPosts = (lang: SupportedLanguage = 'id'): BlogPost[] => {
  const currentJeepArt = ARTICLE_KAPASITAS_JEEP_BROMO[lang] || ARTICLE_KAPASITAS_JEEP_BROMO.id;
  const currentGearArt = ARTICLE_BARANG_WAJIB_BROMO[lang] || ARTICLE_BARANG_WAJIB_BROMO.id;
  const currentSeasonArt = ARTICLE_WAKTU_TERBAIK_BROMO[lang] || ARTICLE_WAKTU_TERBAIK_BROMO.id;

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

  return [jeepPost, gearPost, seasonPost];
};

// Default ID export for fallback
export const BLOG_POSTS: BlogPost[] = getLocalizedBlogPosts('id');
