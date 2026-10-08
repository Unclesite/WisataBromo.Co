import React, { useState, useMemo } from 'react';
import { BlogPost, BlogCategory } from '../types';
import { BLOG_POSTS } from '../data/blogsData';
import { 
  ArrowLeft, Search, Sparkles, User, Tag, Calendar, Clock, 
  ArrowRight, BookOpen, Share2, Check, MessageCircle, ChevronRight,
  ExternalLink, FileText, CheckCircle2, ShieldCheck, PhoneCall, Camera, Image as ImageIcon
} from 'lucide-react';

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
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(
    initialPostId ? (BLOG_POSTS.find((p) => p.id === initialPostId) || null) : null
  );
  const [copiedShare, setCopiedShare] = useState(false);

  const categories = [
    { id: 'all', label: `Semua Artikel (${BLOG_POSTS.length})` },
    { id: 'tips_wisata', label: 'Tips & Panduan Wisata' },
    { id: 'budaya_tengger', label: 'Budaya & Tradisi' },
    { id: 'sejarah_spiritual', label: 'Sejarah & Kosmologi' },
    { id: 'destinasi_alam', label: 'Spot & Pesona Alam' },
    { id: 'transportasi', label: 'Transportasi & Fasilitas' },
  ];

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchCategory = selectedCategory === 'all' || post.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        (post.subtitle && post.subtitle.toLowerCase().includes(q)) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.tags.some((t) => t.toLowerCase().includes(q)) ||
        post.author.toLowerCase().includes(q);
      return matchCategory && matchSearch;
    });
  }, [searchQuery, selectedCategory]);

  const handleShare = (post: BlogPost) => {
    const url = window.location.href;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`${post.title} - Baca di WisataBromo.co: ${url}`);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#111318] pt-4 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between py-4 border-b border-slate-200 mb-8">
          <button
            type="button"
            onClick={selectedPost ? () => setSelectedPost(null) : onBackToHome}
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-bold text-[#102a56] hover:text-[#0996f5] bg-white hover:bg-[#e5f4ff] border border-slate-200 rounded-xl transition-all cursor-pointer shadow-2xs group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>{selectedPost ? `Kembali ke Daftar ${BLOG_POSTS.length} Artikel` : 'Kembali ke Beranda'}</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 hidden sm:inline">Portal Ensiklopedia Bromo</span>
            <span className="px-2.5 py-0.5 bg-[#0996f5]/10 text-[#0996f5] rounded-full text-xs font-black">
              {BLOG_POSTS.length} Artikel Lengkap
            </span>
          </div>
        </div>

        {/* VIEW 1: DEDICATED ARTICLE READER */}
        {selectedPost ? (
          <article className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-3xl shadow-xl overflow-hidden animate-fadeIn">
            {/* Hero Image if available */}
            {selectedPost.imageUrl && (
              <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-900">
                <img
                  src={selectedPost.imageUrl}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="px-3 py-1 bg-[#0996f5] text-white text-xs font-bold rounded-lg uppercase tracking-wider inline-block mb-2 shadow-sm">
                    {selectedPost.categoryLabel}
                  </span>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-200">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {selectedPost.publishDate}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {selectedPost.readTime}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5" />
                      {selectedPost.author}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Header Content */}
            <div className="p-6 sm:p-10 border-b border-slate-100">
              {!selectedPost.imageUrl && (
                <div className="flex items-center gap-2 text-xs font-bold text-[#0996f5] mb-3">
                  <span className="px-2.5 py-1 bg-[#e5f4ff] rounded-md">{selectedPost.categoryLabel}</span>
                  <span>·</span>
                  <span className="text-slate-500">{selectedPost.publishDate}</span>
                  <span>·</span>
                  <span className="text-slate-500">{selectedPost.readTime}</span>
                </div>
              )}

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102a56] leading-tight tracking-tight mb-3">
                {selectedPost.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                {selectedPost.subtitle}
              </p>

              {/* Share & Actions */}
              <div className="flex items-center justify-between pt-5 mt-5 border-t border-slate-100 text-xs">
                <div className="flex items-center gap-2 text-slate-500">
                  <User className="w-4 h-4 text-[#0996f5]" />
                  <span>Penulis: <strong>{selectedPost.author}</strong></span>
                </div>

                <button
                  type="button"
                  onClick={() => handleShare(selectedPost)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-[#e5f4ff] text-slate-700 hover:text-[#0996f5] rounded-lg transition-colors cursor-pointer font-bold"
                >
                  {copiedShare ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600">Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-3.5 h-3.5" />
                      <span>Bagikan</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Body Content */}
            <div className="p-6 sm:p-10 space-y-6">
              {/* Key Takeaways Box */}
              {selectedPost.keyTakeaways && selectedPost.keyTakeaways.length > 0 && (
                <div className="p-5 bg-gradient-to-br from-[#e5f4ff] to-blue-50/50 border border-[#0996f5]/25 rounded-2xl shadow-2xs">
                  <div className="text-xs font-black text-[#102a56] mb-3 flex items-center gap-2 uppercase tracking-wider">
                    <Sparkles className="w-4 h-4 text-[#ffc928]" />
                    <span>Poin Kunci &amp; Ringkasan Penting</span>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    {selectedPost.keyTakeaways.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#0996f5] shrink-0 mt-0.5" />
                        <span className="leading-snug">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Rates / Checklist Table (if available) */}
              {selectedPost.ratesTable && selectedPost.ratesTable.length > 0 && (
                <div className="my-6 border border-slate-200 rounded-2xl overflow-hidden shadow-2xs">
                  <div className="bg-[#102a56] text-white px-4 py-2.5 text-xs font-black tracking-wider uppercase flex items-center gap-2">
                    <FileText className="w-3.5 h-3.5 text-[#ffc928]" />
                    <span>Daftar Estimasi Tarif &amp; Layanan Terkait</span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left">
                      <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                        <tr>
                          <th className="p-3">Kategori Layanan / Item</th>
                          <th className="p-3">Estimasi Biaya</th>
                          <th className="p-3">Keterangan</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {selectedPost.ratesTable.map((row, i) => (
                          <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'}>
                            <td className="p-3 font-semibold text-[#102a56]">{row.item}</td>
                            <td className="p-3 font-bold text-[#0996f5] whitespace-nowrap">{row.price}</td>
                            <td className="p-3 text-slate-600">{row.note}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Main Content Paragraphs */}
              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                {selectedPost.content.map((paragraph, idx) => {
                  // Format 4 knots bullet items with distinctive badge
                  if (paragraph.startsWith('• Simpul')) {
                    const [knotLabel, meaning] = paragraph.replace('• ', '').split('→');
                    return (
                      <div key={idx} className="p-3.5 bg-gradient-to-r from-[#e5f4ff] to-white border-l-4 border-[#0996f5] rounded-r-xl my-2 flex items-start gap-2 shadow-2xs">
                        <span className="font-extrabold text-[#102a56] whitespace-nowrap">{knotLabel} →</span>
                        <span className="text-slate-700 font-medium">{meaning || ''}</span>
                      </div>
                    );
                  }

                  // Format standard bullet items
                  if (paragraph.startsWith('• ') || paragraph.startsWith('- ')) {
                    return (
                      <div key={idx} className="flex items-start gap-2 pl-2">
                        <span className="text-[#0996f5] font-bold text-base leading-none mt-1">•</span>
                        <span className="leading-relaxed">{paragraph.replace(/^[•\-]\s*/, '')}</span>
                      </div>
                    );
                  }

                  // Format blockquotes or sacred sayings
                  if (paragraph.startsWith('Dari sinilah muncul tafsir lokal') || paragraph.includes('“Teng iku luhur') || paragraph.includes('"Teng iku luhur') || paragraph.includes('"Tengger iku teguh')) {
                    return (
                      <div key={idx} className="my-4 p-4 sm:p-5 bg-gradient-to-r from-amber-500/10 via-[#e5f4ff] to-white border-l-4 border-[#ffc928] rounded-r-2xl shadow-2xs">
                        <p className="italic font-medium text-slate-800 text-sm sm:text-base leading-relaxed">
                          {paragraph}
                        </p>
                      </div>
                    );
                  }

                  // Format section sub-headings
                  const colonIndex = paragraph.indexOf(': ');
                  if (colonIndex > 0 && colonIndex <= 75 && !paragraph.startsWith('http')) {
                    const headerCandidate = paragraph.slice(0, colonIndex).trim();
                    // Make sure it doesn't look like a normal sentence with colon
                    if (!headerCandidate.includes('.') && !headerCandidate.includes(',')) {
                      const text = paragraph.slice(colonIndex + 2).trim();
                      return (
                        <div key={idx} className="pt-3 pb-1">
                          <h3 className="text-base sm:text-lg font-black text-[#102a56] mb-2 flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#0996f5] shrink-0"></span>
                            <span>{headerCandidate}</span>
                          </h3>
                          <p className="leading-relaxed text-slate-700">
                            {text}
                          </p>
                        </div>
                      );
                    }
                  }

                  return (
                    <p key={idx} className="leading-relaxed">
                      {paragraph}
                    </p>
                  );
                })}
              </div>

              {/* Photo Documentation Gallery (if available) */}
              {selectedPost.galleryImages && selectedPost.galleryImages.length > 0 && (
                <div className="my-8 pt-8 border-t border-slate-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Camera className="w-5 h-5 text-[#0996f5]" />
                    <h3 className="text-lg sm:text-xl font-black text-[#102a56]">
                      Dokumentasi Foto Budaya Bersarung Suku Tengger
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 mb-6">
                    Koleksi foto eksklusif ragam letak simpul sarung, aktivitas berkuda gadis Tengger di Savana, hingga panorama Lautan Pasir berlatar Gunung Batok.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {selectedPost.galleryImages.map((imgItem, idx) => (
                      <figure
                        key={idx}
                        className={`bg-white border border-slate-200 rounded-2xl overflow-hidden group shadow-sm hover:shadow-md transition-all ${
                          idx === 0 || idx === selectedPost.galleryImages!.length - 1 ? 'md:col-span-2' : ''
                        }`}
                      >
                        <div className="relative overflow-hidden bg-slate-900">
                          <img
                            src={imgItem.url}
                            alt={imgItem.alt}
                            className={`w-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ${
                              idx === 0 
                                ? 'h-64 sm:h-96 md:h-[420px]' 
                                : idx === selectedPost.galleryImages!.length - 1 
                                ? 'h-56 sm:h-72 md:h-80' 
                                : 'h-64 sm:h-80'
                            }`}
                            loading="lazy"
                          />
                          <div className="absolute top-3 left-3">
                            <span className="px-2.5 py-1 bg-black/60 backdrop-blur-xs text-white text-[10px] font-bold rounded-md">
                              Foto Dokumentasi #{idx + 1}
                            </span>
                          </div>
                        </div>
                        <figcaption className="p-4 text-xs sm:text-sm text-slate-700 bg-white border-t border-slate-100 flex items-start gap-2.5">
                          <span className="font-black text-[#0996f5] shrink-0 text-xs uppercase tracking-wide">
                            Keterangan:
                          </span>
                          <span className="leading-relaxed text-slate-600 font-medium">
                            {imgItem.caption}
                          </span>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              )}

              {/* References / Footnotes (if present) */}
              {selectedPost.footnotes && selectedPost.footnotes.length > 0 && (
                <div className="pt-6 border-t border-slate-200">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Catatan Kaki &amp; Sumber Rujukan Filologis:
                  </h4>
                  <ol className="list-decimal pl-5 space-y-1 text-xs text-slate-500">
                    {selectedPost.footnotes.map((fn, i) => (
                      <li key={i}>{fn.replace(/^\d+\.\s*/, '').replace(/^\[\d+\]\s*/, '')}</li>
                    ))}
                  </ol>
                </div>
              )}

              {selectedPost.references && selectedPost.references.length > 0 && (
                <div className="pt-6 border-t border-slate-200">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Referensi Ilmiah &amp; Publikasi Akademik:
                  </h4>
                  <ul className="space-y-1 text-xs text-slate-500">
                    {selectedPost.references.map((rf, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-[#0996f5] font-bold">•</span>
                        <span>{rf.replace(/^\d+\.\s*/, '')}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tags */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-1.5 text-xs text-slate-600">
                <Tag className="w-3.5 h-3.5 text-slate-400 mr-1" />
                {selectedPost.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 bg-slate-100 hover:bg-[#e5f4ff] hover:text-[#0996f5] border border-slate-200 rounded-lg text-xs font-medium transition-colors cursor-pointer"
                    onClick={() => {
                      setSelectedPost(null);
                      setSearchQuery(tag);
                    }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Booking CTA Banner inside article */}
              <div className="mt-8 p-6 bg-gradient-to-br from-[#102a56] to-[#1d3b6f] text-white rounded-2xl shadow-lg flex flex-col sm:flex-row items-center justify-between gap-5">
                <div className="space-y-1 text-center sm:text-left">
                  <div className="text-xs text-[#ffc928] font-bold uppercase tracking-wider">
                    Wisata Bromo Nyaman &amp; Terencana
                  </div>
                  <h4 className="text-lg sm:text-xl font-extrabold">
                    Siap Berpetualang ke Gunung Bromo?
                  </h4>
                  <p className="text-xs text-slate-200 max-w-md">
                    Nikmati kemudahan sewa jeep 4WD resmi, paket open trip hemat, atau private trip eksklusif berfasilitas lengkap.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-2.5 shrink-0 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => onOpenBooking()}
                    className="w-full sm:w-auto px-5 py-2.5 bg-[#0996f5] hover:bg-[#0782d6] text-white text-xs font-black rounded-xl shadow-md transition-all cursor-pointer text-center"
                  >
                    Kalkulator &amp; Booking
                  </button>
                  <a
                    href="https://wa.me/6281222290318?text=Halo%20Admin%20WisataBromo.co,%20saya%20tertarik%20trip%20ke%20Bromo%20setelah%20membaca%20artikel%20resmi."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </article>
        ) : (
          /* VIEW 2: FULL DIRECTORY GRID OF ALL 9 ARTICLES */
          <div>
            {/* Header Section */}
            <div className="text-center max-w-3xl mx-auto mb-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0996f5]/10 text-[#0996f5] rounded-full text-xs font-black uppercase tracking-wider mb-2">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Pusat Ensiklopedia &amp; Edukasi Bromo</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#102a56] tracking-tight mb-3">
                Koleksi Lengkap {BLOG_POSTS.length} Artikel &amp; Panduan Wisata Bromo
              </h1>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Eksplorasi wawasan mendalam seputar sejarah Majapahit, kosmologi Brahma, ritual Yadnya Kasada, filosofi bersarung, tips suhu dingin, berkuda, hingga liputan resmi Kementerian KLHK.
              </p>
            </div>

            {/* Search Bar & Category Filter Bar */}
            <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm mb-8 space-y-4">
              {/* Search Bar */}
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Cari artikel (contoh: perlengkapan, bahasa tengger, sarung, berkuda, KLHK, brahma)..."
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

            {/* 9 Articles Grid */}
            {filteredPosts.length === 0 ? (
              <div className="text-center py-16 bg-white border border-slate-200 rounded-3xl p-8">
                <Search className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <h3 className="text-base font-bold text-slate-800 mb-1">Artikel Tidak Ditemukan</h3>
                <p className="text-xs text-slate-500 mb-4">
                  Tidak ada artikel yang cocok dengan kata kunci &quot;{searchQuery}&quot;.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="px-4 py-2 bg-[#0996f5] text-white text-xs font-bold rounded-xl"
                >
                  Tampilkan Semua {BLOG_POSTS.length} Artikel
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
                {filteredPosts.map((post, idx) => (
                  <article
                    key={post.id}
                    onClick={() => {
                      setSelectedPost(post);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-[#0996f5] hover:shadow-xl hover:shadow-[#0996f5]/10 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                  >
                    <div>
                      {/* Image Thumbnail */}
                      {post.imageUrl && (
                        <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                          <img
                            src={post.imageUrl}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-3 left-3">
                            <span className="px-2.5 py-1 bg-white/95 backdrop-blur-xs text-[#0996f5] text-[10px] font-black rounded-lg shadow-xs uppercase">
                              {post.categoryLabel}
                            </span>
                          </div>
                          <div className="absolute top-3 right-3">
                            <span className="px-2 py-0.5 bg-black/60 backdrop-blur-xs text-white text-[10px] font-bold rounded-md">
                              #{idx + 1}
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
                        <h3 className="text-base font-extrabold text-[#102a56] group-hover:text-[#0996f5] transition-colors leading-snug mb-2 line-clamp-2">
                          {post.title}
                        </h3>

                        {/* Excerpt */}
                        <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                          {post.excerpt}
                        </p>

                        {/* Key takeaway pill */}
                        {post.keyTakeaways && post.keyTakeaways[0] && (
                          <div className="p-2.5 bg-[#e5f4ff]/70 border border-[#0996f5]/20 rounded-xl text-[11px] text-slate-700 flex items-start gap-1.5 mb-2">
                            <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
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
                        <span>Baca Lengkap</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
