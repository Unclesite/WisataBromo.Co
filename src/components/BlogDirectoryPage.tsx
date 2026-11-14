import React, { useState, useMemo } from 'react';
import { BlogPost } from '../types';
import { getLocalizedBlogPosts } from '../data/blogsData';
import { useLanguage } from '../i18n/LanguageContext';
import { ArticleDetailPage } from './ArticleDetailPage';
import { 
  ArrowLeft, Search, Sparkles, User, Tag, 
  ArrowRight, BookOpen, Share2, Check, MessageCircle,
  FileText, CheckCircle2
} from 'lucide-react';
import imgBlog1 from '../assets/images/633b7b65-1f37-4dbd-9714-6a4197e04480.png';
import imgBlog2 from '../assets/images/7_20261007_221919_0006_1.jpg';
import imgBlog3 from '../assets/images/a0eb9e3a-cda4-4f6d-acc4-ac045e656d7a.jpg';

interface BlogDirectoryPageProps {
  onBackToHome: () => void;
  onOpenBooking: (packageId?: string) => void;
  initialPostId?: string;
}

export const BlogDirectoryPage: React.FC<BlogDirectoryPageProps> = ({
  onBackToHome,
  onOpenBooking,
  initialPostId,
}) => {
  const { language, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  // Retrieve current active localized articles list
  const activeBlogPosts = useMemo(() => {
    return getLocalizedBlogPosts(language);
  }, [language]);

  const [selectedPostId, setSelectedPostId] = useState<string | null>(initialPostId || null);
  const [isReadingArticle, setIsReadingArticle] = useState<boolean>(Boolean(initialPostId));

  const categories = [
    { id: 'all', label: language === 'en' ? `All Articles (${activeBlogPosts.length})` : language === 'zh' ? `全部文章 (${activeBlogPosts.length})` : `Semua Artikel (${activeBlogPosts.length})` },
    { id: 'tips_wisata', label: language === 'en' ? 'Travel Tips & Guide' : language === 'zh' ? '攻略与指南' : 'Tips & Panduan Wisata' },
  ];

  const filteredPosts = useMemo(() => {
    const posts = Array.isArray(activeBlogPosts) ? activeBlogPosts : [];
    return posts.filter((post) => {
      if (!post) return false;
      const matchCategory = selectedCategory === 'all' || post.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        (post.subtitle && post.subtitle.toLowerCase().includes(q)) ||
        (post.excerpt || post.summary || '').toLowerCase().includes(q) ||
        (Array.isArray(post.tags) && post.tags.some((t) => t.toLowerCase().includes(q))) ||
        (post.author && post.author.toLowerCase().includes(q));
      return matchCategory && matchSearch;
    });
  }, [activeBlogPosts, searchQuery, selectedCategory]);

  // If reading an article, display magazine reader component
  if (isReadingArticle && activeBlogPosts.length > 0) {
    return (
      <ArticleDetailPage
        articleId={selectedPostId || 'kapasitas-jeep-bromo'}
        onBackToDirectory={() => {
          setIsReadingArticle(false);
          window.history.pushState({}, '', '/journal');
        }}
        onOpenBooking={() => onOpenBooking()}
        onSelectArticle={(id) => {
          setSelectedPostId(id);
          const targetPost = activeBlogPosts.find(p => p.id === id || p.slug === id);
          window.history.pushState({}, '', `/journal/${targetPost?.slug || id}`);
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#111318] pt-4 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between py-4 border-b border-slate-200 mb-8">
          <button
            type="button"
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-bold text-[#102a56] hover:text-[#0996f5] bg-white hover:bg-[#e5f4ff] border border-slate-200 rounded-xl transition-all cursor-pointer shadow-2xs group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>{language === 'en' ? 'Back to Home' : language === 'zh' ? '返回首页' : 'Kembali ke Beranda'}</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 hidden sm:inline">The Journal WisataBromo.co</span>
            <span className="px-2.5 py-0.5 bg-[#0996f5]/10 text-[#0996f5] rounded-full text-xs font-black">
              {activeBlogPosts.length} {language === 'en' ? 'Article' : language === 'zh' ? '篇文章' : 'Artikel'}
            </span>
          </div>
        </div>

        {/* Directory Grid */}
        <div>
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0996f5]/10 text-[#0996f5] rounded-full text-xs font-black uppercase tracking-wider mb-2">
              <BookOpen className="w-3.5 h-3.5" />
              <span>THE JOURNAL • WISATABROMO.CO</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#102a56] tracking-tight mb-3">
              {language === 'en' ? 'Travel Journal & Bromo Packing Guide' : language === 'zh' ? '布罗莫火山游记与必备物品清单' : 'Portal Artikel & Panduan Wisata Bromo'}
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {language === 'en' 
                ? 'Expert insights, packing guides, and trip preparations for an unforgettable Mount Bromo adventure.' 
                : language === 'zh' 
                ? '权威攻略、行前准备与穿搭指南，助您畅游布罗莫火山。' 
                : 'Ulasan mendalam, panduan perlengkapan, dan persiapan perjalanan untuk liburan Bromo yang hangat, nyaman, dan tak terlupakan.'}
            </p>
          </div>

          {activeBlogPosts.length > 0 && (
            /* Search Bar & Category Filter Bar */
            <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm mb-8 space-y-4">
              {/* Search Bar */}
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder={language === 'en' ? 'Search articles...' : language === 'zh' ? '搜索文章...' : 'Cari artikel...'}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#0996f5] focus:bg-white transition-all font-medium"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700 font-bold"
                  >
                    Reset
                  </button>
                )}
              </div>

              {/* Category Pills */}
              <div className="flex flex-wrap items-center gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      selectedCategory === cat.id
                        ? 'bg-[#0996f5] text-white shadow-xs'
                        : 'bg-slate-100 hover:bg-slate-200/80 text-slate-700'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Articles Grid */}
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16 px-6 bg-white border border-slate-200/90 rounded-3xl max-w-xl mx-auto shadow-sm">
              <div className="w-16 h-16 bg-[#e5f4ff] text-[#0996f5] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-black text-[#102a56] mb-2">
                {language === 'en' ? 'No Articles Found' : language === 'zh' ? '未找到相关文章' : 'Artikel Tidak Ditemukan'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed max-w-md mx-auto">
                {language === 'en' ? 'Try adjusting your search criteria.' : language === 'zh' ? '请尝试重置搜索条件。' : `Tidak ada artikel yang cocok dengan kata kunci "${searchQuery}".`}
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  onClick={onBackToHome}
                  className="px-5 py-2.5 bg-[#0996f5] hover:bg-[#0782d6] text-white text-xs font-bold rounded-xl shadow-md transition-all cursor-pointer"
                >
                  {language === 'en' ? 'Back to Home' : language === 'zh' ? '返回首页' : 'Kembali ke Beranda'}
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              {Array.isArray(filteredPosts) && filteredPosts.map((post, idx) => (
                <a
                  key={post.id}
                  href={`/journal/${post.slug || post.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedPostId(post.id);
                    setIsReadingArticle(true);
                    window.history.pushState({}, '', `/journal/${post.slug || post.id}`);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-[#0996f5] hover:shadow-xl hover:shadow-[#0996f5]/10 transition-all duration-300 flex flex-col justify-between group cursor-pointer block"
                >
                  <div>
                    {/* Image Thumbnail */}
                    {post.imageUrl && (
                      <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                        <img
                          src={idx === 0 ? imgBlog1 : idx === 1 ? imgBlog2 : idx === 2 ? imgBlog3 : post.imageUrl}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="px-2.5 py-1 bg-white/95 backdrop-blur-xs text-[#0996f5] text-[10px] font-black rounded-lg shadow-xs uppercase">
                            {post.categoryLabel}
                          </span>
                        </div>
                      </div>
                    )}

                    <div className="p-5">
                      {/* Meta info */}
                      <div className="flex items-center gap-2 text-[11px] text-slate-500 mb-2">
                        <span>{post.publishDate}</span>
                        <span>·</span>
                        <span>{post.readTime}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-base sm:text-lg font-extrabold text-[#102a56] group-hover:text-[#0996f5] transition-colors leading-snug mb-2 line-clamp-2">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                        {post.excerpt || post.summary}
                      </p>

                      {/* Key takeaway pill */}
                      {post.keyTakeaways && post.keyTakeaways[0] && (
                        <div className="p-2.5 bg-[#e5f4ff]/70 border border-[#0996f5]/20 rounded-xl text-[11px] text-slate-700 flex items-start gap-1.5 mb-2">
                          <Sparkles className="w-3.5 h-3.5 text-[#fff700] fill-[#fff700] drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)] shrink-0 mt-0.5" />
                          <span className="line-clamp-2 font-medium">{post.keyTakeaways[0]}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="px-5 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-500 text-[11px] flex items-center gap-1">
                      <User className="w-3 h-3 text-slate-400" />
                      <span className="truncate max-w-[120px]">{post.author}</span>
                    </span>
                    <span className="text-[#0996f5] font-black flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      <span>{language === 'en' ? 'Read Article' : language === 'zh' ? '阅读全文' : 'Baca Selengkapnya'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
