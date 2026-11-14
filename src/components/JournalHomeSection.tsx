import React, { useMemo } from 'react';
import { BlogPost } from '../types';
import { getLocalizedBlogPosts } from '../data/blogsData';
import { useLanguage } from '../i18n/LanguageContext';
import { ArrowRight, Sparkles, User, BookOpen, Calendar, Clock } from 'lucide-react';
import imgCustom from '../assets/images/633b7b65-1f37-4dbd-9714-6a4197e04480.png';
import imgCard1 from '../assets/images/1794228785863.jpg';

interface JournalHomeSectionProps {
  onOpenAllArticles: () => void;
  onSelectArticle?: (articleId: string) => void;
}

export const JournalHomeSection: React.FC<JournalHomeSectionProps> = ({
  onOpenAllArticles,
  onSelectArticle,
}) => {
  const { language } = useLanguage();

  // Retrieve localized blog posts dynamically according to selected language
  const blogPosts = useMemo(() => {
    return getLocalizedBlogPosts(language);
  }, [language]);

  // Take top 3 articles for the home editorial grid
  const featuredArticles = blogPosts.slice(0, 3);

  const sectionTitle = language === 'en' 
    ? 'Travel Inspiration & Guides' 
    : language === 'zh' 
    ? '旅行灵感与指南' 
    : 'Inspirasi & Panduan Perjalanan';

  const sectionSubtitle = language === 'en'
    ? 'In-depth insights, packing guides, and trip preparations for an unforgettable Mount Bromo adventure.'
    : language === 'zh'
    ? '权威攻略、行前准备与穿搭指南，助您畅游布罗莫火山。'
    : 'Ulasan mendalam, panduan perlengkapan, dan persiapan perjalanan untuk liburan Bromo yang hangat, nyaman, dan tak terlupakan.';

  const viewAllLabel = language === 'en' 
    ? 'View All Articles' 
    : language === 'zh' 
    ? '查看所有文章' 
    : 'Lihat Semua Artikel';

  const readMoreLabel = language === 'en' 
    ? 'Read Article' 
    : language === 'zh' 
    ? '阅读全文' 
    : 'Baca Selengkapnya';

  const handleArticleClick = (articleId: string) => {
    if (onSelectArticle) {
      onSelectArticle(articleId);
    } else {
      onOpenAllArticles();
    }
  };

  return (
    <section id="the-journal" className="py-16 sm:py-20 bg-gradient-to-b from-[#f8fafc] via-[#e5f4ff]/40 to-[#ffffff] border-t border-b border-slate-200/90 text-[#111318]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-[#0996f5]/10 text-[#0996f5] border border-[#0996f5]/20 rounded-full text-xs font-black uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5 text-[#0996f5]" />
            <span>THE JOURNAL • WISATABROMO.CO</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#102a56] mb-3.5 text-balance font-serif">
            {sectionTitle}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {sectionSubtitle}
          </p>
        </div>

        {/* Luxury Editorial Cards Grid (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {featuredArticles.map((article, idx) => {
            const articleUrl = `/journal/${article.slug || article.id}`;
            return (
              <a
                key={article.id}
                href={articleUrl}
                onClick={(e) => {
                  e.preventDefault();
                  handleArticleClick(article.slug || article.id);
                }}
                className="bg-white border border-slate-200/90 rounded-3xl overflow-hidden shadow-xs hover:border-[#0996f5] hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#0996f5]/15 transition-all duration-300 flex flex-col justify-between group cursor-pointer block"
              >
                <div>
                  {/* Cover Image Thumbnail with Hover Zoom */}
                  {article.imageUrl && (
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                      <img
                        src={idx === 0 ? imgCard1 : idx === 1 ? imgCustom : article.imageUrl}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-80" />
                      
                      {/* Category Badge Pill */}
                      <div className="absolute top-3.5 left-3.5">
                        <span className="px-3 py-1 bg-white/95 backdrop-blur-xs text-[#0996f5] text-[10px] sm:text-[11px] font-black rounded-xl shadow-xs uppercase tracking-wide">
                          {article.categoryLabel || article.tag}
                        </span>
                      </div>

                      {/* Quick Date Overlay Badge */}
                      <div className="absolute bottom-3 left-3.5 flex items-center gap-2 text-[11px] text-white/90 font-medium">
                        <span className="flex items-center gap-1 bg-black/50 backdrop-blur-xs px-2.5 py-0.5 rounded-md">
                          <Calendar className="w-3 h-3 text-[#FFF700]" />
                          {article.publishDate || article.date}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Article Body Details */}
                  <div className="p-6 space-y-3">
                    {/* Read Time & Author meta */}
                    <div className="flex items-center justify-between text-xs text-slate-500 pt-0.5">
                      <span className="flex items-center gap-1 text-[#0996f5] font-bold">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{article.readTime}</span>
                      </span>
                      <span className="flex items-center gap-1 text-slate-500 truncate max-w-[140px]">
                        <User className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span className="truncate">{article.author}</span>
                      </span>
                    </div>

                    {/* Article Title */}
                    <h3 className="text-lg sm:text-xl font-bold font-serif text-[#102a56] group-hover:text-[#0996f5] transition-colors leading-snug line-clamp-2">
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                      {article.excerpt || article.summary}
                    </p>

                    {/* Highlight Pill Takeaway */}
                    {article.keyTakeaways && article.keyTakeaways[0] && (
                      <div className="p-3 bg-[#e5f4ff]/80 border border-[#0996f5]/20 rounded-2xl flex items-start gap-2 mt-2">
                        <Sparkles className="w-4 h-4 text-[#fff700] fill-[#fff700] drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)] shrink-0 mt-0.5" />
                        <span className="text-xs font-semibold text-slate-700 line-clamp-2 leading-relaxed">
                          {article.keyTakeaways[0]}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Footer Read More */}
                <div className="px-6 py-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between text-xs font-black">
                  <span className="text-slate-400 text-[11px] uppercase tracking-wider">WISATABROMO JOURNAL</span>
                  <span className="text-[#0996f5] flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                    <span>{readMoreLabel}</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        {/* Large Elegant View All Articles Button */}
        <div className="mt-12 sm:mt-14 text-center">
          <a
            href="/journal"
            onClick={(e) => {
              e.preventDefault();
              onOpenAllArticles();
            }}
            className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 bg-[#0996f5] hover:bg-[#071A2B] text-white text-sm sm:text-base font-black rounded-2xl shadow-xl shadow-[#0996f5]/25 hover:shadow-2xl hover:scale-102 active:scale-98 transition-all cursor-pointer group"
          >
            <span>{viewAllLabel}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};
