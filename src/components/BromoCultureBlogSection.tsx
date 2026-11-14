import React, { useMemo } from 'react';
import { BlogPost } from '../types';
import { getLocalizedBlogPosts } from '../data/blogsData';
import { useLanguage } from '../i18n/LanguageContext';
import { ArrowRight, Sparkles, User, BookOpen } from 'lucide-react';

interface BromoCultureBlogSectionProps {
  onOpenAllArticles?: () => void;
  onSelectArticle?: (post: BlogPost) => void;
}

export const BromoCultureBlogSection: React.FC<BromoCultureBlogSectionProps> = ({
  onOpenAllArticles,
  onSelectArticle,
}) => {
  const { language, t } = useLanguage();

  const blogPosts = useMemo(() => {
    return getLocalizedBlogPosts(language);
  }, [language]);

  const homeFeaturedPosts = blogPosts.slice(0, 3);

  const handleOpenPost = (post: BlogPost) => {
    if (onSelectArticle) {
      onSelectArticle(post);
    } else if (onOpenAllArticles) {
      onOpenAllArticles();
    }
  };

  return (
    <section id="budaya-tengger" className="py-16 sm:py-20 bg-[#e5f4ff]/40 border-t border-slate-200 text-[#111318]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0996f5]/10 text-[#0996f5] rounded-full text-xs font-black uppercase tracking-wider mb-2.5">
            <BookOpen className="w-3.5 h-3.5" />
            <span>THE JOURNAL • WISATABROMO.CO</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#102a56] mb-3 text-balance">
            {language === 'en' ? 'Mount Bromo Travel Journal & Guides' : language === 'zh' ? '布罗莫火山游记与实用指南' : 'Blog & Panduan Wisata Bromo'}
          </h2>
          <p className="text-[#111318]/75 text-sm sm:text-base leading-relaxed">
            {language === 'en'
              ? 'Expert tips, packing advice, and local insights for an unforgettable Mount Bromo adventure.'
              : language === 'zh'
              ? '实用的高寒保暖穿搭建议、物品打包清单与观景经验，助您完美打卡布罗莫。'
              : 'Eksplorasi cerita petualangan, panduan perlengkapan wajib di suhu dingin, serta tips liburan Bromo yang hangat dan nyaman.'}
          </p>
        </div>

        {/* Featured Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {homeFeaturedPosts.map((post) => {
            const articleUrl = `/journal/${post.slug || post.id}`;
            return (
              <a
                key={post.id}
                href={articleUrl}
                className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-[#0996f5] hover:shadow-xl hover:shadow-[#0996f5]/10 transition-all duration-300 group cursor-pointer block"
                onClick={(e) => {
                  e.preventDefault();
                  handleOpenPost(post);
                }}
              >
              <div>
                {/* Image Thumbnail */}
                {post.imageUrl && (
                  <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 bg-white/95 backdrop-blur-xs text-[#0996f5] text-[10px] font-black rounded-lg shadow-xs uppercase">
                        {post.categoryLabel || post.tag}
                      </span>
                    </div>
                  </div>
                )}

                <div className="p-5 sm:p-6">
                  {/* Metadata line */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-2.5">
                    <span>{post.publishDate || post.date}</span>
                    <span aria-hidden="true" className="text-slate-300">·</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-extrabold text-[#102a56] group-hover:text-[#0996f5] transition-colors mb-2.5 leading-snug line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-xs text-[#111318]/75 line-clamp-3 leading-relaxed mb-4">
                    {post.excerpt || post.summary}
                  </p>

                  {/* Key Takeaways preview */}
                  {post.keyTakeaways && post.keyTakeaways[0] && (
                    <div className="bg-[#e5f4ff]/70 p-3 rounded-xl border border-[#0996f5]/20 mb-2">
                      <div className="text-[11px] font-bold text-[#102a56] mb-1 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#fff700] fill-[#fff700] drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]" />
                        <span>{language === 'en' ? 'Key Highlights:' : language === 'zh' ? '核心要点:' : 'Poin Penting:'}</span>
                      </div>
                      <div className="text-xs text-[#111318]/80 line-clamp-2">
                        {post.keyTakeaways[0]}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Author & Read More */}
              <div className="px-5 sm:px-6 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 text-[11px] flex items-center gap-1 truncate max-w-[130px]">
                  <User className="w-3 h-3 text-slate-400 shrink-0" />
                  <span className="truncate">{post.author}</span>
                </span>
                <span className="text-[#0996f5] font-black flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>{language === 'en' ? 'Read Article' : language === 'zh' ? '阅读全文' : 'Baca Artikel'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </a>
          );
        })}
        </div>

        {/* KOLOM ARTIKEL / BLOG SELENGKAPNYA BANNER */}
        <div className="mt-12 p-6 sm:p-8 bg-gradient-to-br from-white via-[#e5f4ff]/60 to-white border-2 border-[#0996f5]/30 rounded-3xl shadow-md">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-1.5 text-xs font-black text-[#0996f5] uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-[#fff700] fill-[#fff700] drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]" />
                <span>The Journal • WisataBromo.co</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-[#102a56]">
                {language === 'en' ? 'Explore Our Full Travel Journal' : language === 'zh' ? '探索完整的布罗莫火山游记专栏' : 'Kolom Artikel & Journal Selengkapnya'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {language === 'en'
                  ? 'Discover essential packing guides, cold weather clothing checklists, and insider tips for an effortless trip.'
                  : language === 'zh'
                  ? '深入了解包含防寒穿搭清单、防滑鞋装备与高寒适应技巧在内的丰富旅游指南。'
                  : 'Temukan panduan perlengkapan wajib di suhu 0-5°C, tips pakaian berlapis (layering), hingga persiapan kawah Bromo.'}
              </p>
            </div>

            <div className="shrink-0 w-full sm:w-auto text-center">
              <button
                type="button"
                onClick={onOpenAllArticles}
                className="w-full sm:w-auto px-6 sm:px-8 py-3.5 bg-[#0996f5] hover:bg-[#0782d6] text-white text-xs sm:text-sm font-black rounded-2xl shadow-lg shadow-[#0996f5]/25 hover:shadow-xl hover:scale-105 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>{language === 'en' ? 'Open Full Journal' : language === 'zh' ? '打开文章专栏' : 'Buka Portal Artikel'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
