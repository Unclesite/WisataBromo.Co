import React, { useState } from 'react';
import { BlogPost } from '../types';
import { BLOG_POSTS } from '../data/blogsData';
import { ArrowRight, X, Sparkles, User, Tag, BookOpen, ChevronRight, CheckCircle2, FileText, Camera } from 'lucide-react';

interface BromoCultureBlogSectionProps {
  onOpenAllArticles?: () => void;
  onSelectArticle?: (post: BlogPost) => void;
}

export const BromoCultureBlogSection: React.FC<BromoCultureBlogSectionProps> = ({
  onOpenAllArticles,
  onSelectArticle,
}) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  // Home section only shows 3 to 4 articles (per user requirement)
  const homeFeaturedPosts = BLOG_POSTS.slice(0, 3);

  const handleOpenPost = (post: BlogPost) => {
    if (onSelectArticle) {
      onSelectArticle(post);
    } else {
      setSelectedPost(post);
    }
  };

  return (
    <section id="budaya-tengger" className="py-16 sm:py-20 bg-[#e5f4ff]/40 border-t border-slate-200 text-[#111318]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0996f5]/10 text-[#0996f5] rounded-full text-xs font-black uppercase tracking-wider mb-2.5">
            <BookOpen className="w-3.5 h-3.5" />
            <span>ENSIKLOPEDIA &amp; CATATAN PERJALANAN</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#102a56] mb-3 text-balance">
            Blog Tentang Bromo, Suku Tengger &amp; Panduan Wisata
          </h2>
          <p className="text-[#111318]/75 text-sm sm:text-base leading-relaxed">
            Mengenal lebih dekat kearifan lokal Suku Tengger, perlengkapan wajib di suhu dingin, makna nama Bromo, hingga kisah spiritual Majapahit.
          </p>
        </div>

        {/* 3 Featured Blog Posts on Homepage */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {homeFeaturedPosts.map((post, idx) => (
            <article
              key={post.id}
              className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-[#0996f5] hover:shadow-xl hover:shadow-[#0996f5]/10 transition-all duration-300 group cursor-pointer"
              onClick={() => handleOpenPost(post)}
            >
              <div>
                {/* Image Thumbnail */}
                {post.imageUrl && (
                  <div className="relative h-44 w-full overflow-hidden bg-slate-900">
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
                  </div>
                )}

                <div className="p-5 sm:p-6">
                  {/* Metadata line */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-2.5">
                    <span>{post.publishDate}</span>
                    <span aria-hidden="true" className="text-slate-300">·</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-extrabold text-[#102a56] group-hover:text-[#0996f5] transition-colors mb-2.5 leading-snug line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-xs text-[#111318]/75 line-clamp-3 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  {/* Key Takeaways preview */}
                  {post.keyTakeaways && post.keyTakeaways[0] && (
                    <div className="bg-[#e5f4ff]/70 p-3 rounded-xl border border-[#0996f5]/20 mb-2">
                      <div className="text-[11px] font-bold text-[#102a56] mb-1 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                        <span>Poin Penting:</span>
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
                  Baca Artikel <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* KOLOM ARTIKEL / BLOG SELENGKAPNYA (REQUIRED BANNER) */}
        <div className="mt-12 p-6 sm:p-8 bg-gradient-to-br from-white via-[#e5f4ff]/60 to-white border-2 border-[#0996f5]/30 rounded-3xl shadow-md">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-1.5 text-xs font-black text-[#0996f5] uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Koleksi Lengkap Ensiklopedia Wisata Bromo</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-[#102a56]">
                Kolom Artikel &amp; Blog Selengkapnya (Tersedia 9 Artikel)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Temukan seluruh 9 ulasan mendalam: panduan perlengkapan suhu 3–10°C, bahasa ritual Kawi Tengger, kosmologi Brahma, filosofi 4 gaya bersarung, perbedaan dengan Hindu Bali, sensasi berkuda di lautan pasir, hingga liputan resmi kegiatan Kementerian Lingkungan Hidup &amp; Kehutanan (KLHK).
              </p>

              {/* Mini topic badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-1.5 pt-2">
                <span className="px-2.5 py-1 bg-white border border-slate-200 text-slate-700 rounded-lg text-[11px] font-medium">
                  🧥 18 Checklist Perlengkapan
                </span>
                <span className="px-2.5 py-1 bg-white border border-slate-200 text-slate-700 rounded-lg text-[11px] font-medium">
                  📜 Bahasa Ritual Majapahit
                </span>
                <span className="px-2.5 py-1 bg-white border border-slate-200 text-slate-700 rounded-lg text-[11px] font-medium">
                  🧣 4 Gaya Bersarung Perempuan
                </span>
                <span className="px-2.5 py-1 bg-white border border-slate-200 text-slate-700 rounded-lg text-[11px] font-medium">
                  🐎 Tarif &amp; Tips Berkuda
                </span>
                <span className="px-2.5 py-1 bg-white border border-slate-200 text-slate-700 rounded-lg text-[11px] font-medium">
                  🏛️ Liputan SPK Kementerian KLHK
                </span>
              </div>
            </div>

            <div className="shrink-0 w-full sm:w-auto text-center">
              <button
                type="button"
                onClick={onOpenAllArticles}
                className="w-full sm:w-auto px-6 sm:px-8 py-3.5 bg-[#0996f5] hover:bg-[#0782d6] text-white text-xs sm:text-sm font-black rounded-2xl shadow-lg shadow-[#0996f5]/25 hover:shadow-xl hover:scale-105 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Buka Kolom Artikel Selengkapnya (9 Artikel)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="text-[11px] text-slate-500 mt-2 font-medium">
                Dilengkapi fitur pencarian &amp; kategori lengkap
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fallback Inline Article Reader Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
          <div className="relative bg-white border border-slate-200 rounded-3xl w-full max-w-3xl overflow-hidden shadow-2xl my-8">
            {/* Modal Header */}
            <div className="p-6 bg-[#e5f4ff]/80 border-b border-slate-200 relative">
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-5 right-5 p-2 text-slate-500 hover:text-[#102a56] hover:bg-white rounded-xl transition-colors cursor-pointer"
                aria-label="Tutup artikel"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-xs text-[#0996f5] font-bold mb-2">
                <span>{selectedPost.categoryLabel}</span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span className="text-slate-600">{selectedPost.publishDate}</span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span className="text-slate-600">{selectedPost.readTime}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-[#102a56] pr-8 leading-snug">
                {selectedPost.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#111318]/75 mt-2">
                {selectedPost.subtitle}
              </p>

              <div className="text-xs text-slate-500 mt-3 pt-3 border-t border-slate-200/80 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-slate-400" />
                <span>Penulis: {selectedPost.author}</span>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-5 max-h-[65vh] overflow-y-auto">
              {/* Key Takeaways Box */}
              {selectedPost.keyTakeaways && selectedPost.keyTakeaways.length > 0 && (
                <div className="p-4 bg-[#e5f4ff] border border-[#0996f5]/25 rounded-2xl">
                  <div className="text-xs font-bold text-[#102a56] mb-2 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-[#ffc928]" />
                    <span>Rangkuman &amp; Poin Kunci:</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-[#111318]/90">
                    {selectedPost.keyTakeaways.map((takeaway, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#0996f5] font-bold">•</span>
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Rates Table if available */}
              {selectedPost.ratesTable && selectedPost.ratesTable.length > 0 && (
                <div className="border border-slate-200 rounded-xl overflow-hidden my-3">
                  <div className="bg-[#102a56] text-white px-3.5 py-2 text-xs font-bold">
                    Daftar Estimasi Tarif Terkait
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left">
                      <thead className="bg-slate-100 text-slate-700">
                        <tr>
                          <th className="p-2.5">Item / Layanan</th>
                          <th className="p-2.5">Tarif</th>
                          <th className="p-2.5">Catatan</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {selectedPost.ratesTable.map((row, i) => (
                          <tr key={i}>
                            <td className="p-2.5 font-bold text-[#102a56]">{row.item}</td>
                            <td className="p-2.5 font-mono text-[#0996f5] font-black">{row.price}</td>
                            <td className="p-2.5 text-slate-500">{row.note}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Full Content Paragraphs with Rich Layout */}
              <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                {selectedPost.content.map((paragraph, idx) => {
                  // Format 4 knots bullet items with distinctive badge
                  if (paragraph.startsWith('• Simpul')) {
                    const [knotLabel, meaning] = paragraph.replace('• ', '').split('→');
                    return (
                      <div key={idx} className="p-3 bg-gradient-to-r from-[#e5f4ff] to-white border-l-4 border-[#0996f5] rounded-r-xl my-2 flex items-start gap-2 shadow-2xs">
                        <span className="font-extrabold text-[#102a56] whitespace-nowrap text-xs">{knotLabel} →</span>
                        <span className="text-slate-700 font-medium text-xs">{meaning || ''}</span>
                      </div>
                    );
                  }

                  // Format standard bullet items
                  if (paragraph.startsWith('• ') || paragraph.startsWith('- ')) {
                    return (
                      <div key={idx} className="flex items-start gap-2 pl-2">
                        <span className="text-[#0996f5] font-bold text-sm leading-none mt-1">•</span>
                        <span className="leading-relaxed text-xs sm:text-sm">{paragraph.replace(/^[•\-]\s*/, '')}</span>
                      </div>
                    );
                  }

                  // Format blockquotes or sacred sayings
                  if (paragraph.startsWith('Dari sinilah muncul tafsir lokal') || paragraph.includes('“Teng iku luhur') || paragraph.includes('"Teng iku luhur') || paragraph.includes('"Tengger iku teguh')) {
                    return (
                      <div key={idx} className="my-3 p-3.5 bg-gradient-to-r from-amber-500/10 via-[#e5f4ff] to-white border-l-4 border-[#ffc928] rounded-r-xl shadow-2xs">
                        <p className="italic font-medium text-slate-800 text-xs sm:text-sm leading-relaxed">
                          {paragraph}
                        </p>
                      </div>
                    );
                  }

                  // Format section sub-headings
                  const colonIndex = paragraph.indexOf(': ');
                  if (colonIndex > 0 && colonIndex <= 75 && !paragraph.startsWith('http')) {
                    const headerCandidate = paragraph.slice(0, colonIndex).trim();
                    if (!headerCandidate.includes('.') && !headerCandidate.includes(',')) {
                      const text = paragraph.slice(colonIndex + 2).trim();
                      return (
                        <div key={idx} className="pt-2 pb-1">
                          <h4 className="text-sm sm:text-base font-black text-[#102a56] mb-1.5 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#0996f5] shrink-0"></span>
                            <span>{headerCandidate}</span>
                          </h4>
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

              {/* Photo Documentation Gallery if available */}
              {selectedPost.galleryImages && selectedPost.galleryImages.length > 0 && (
                <div className="pt-6 border-t border-slate-200">
                  <div className="flex items-center gap-2 text-sm font-bold text-[#102a56] mb-4">
                    <Camera className="w-4 h-4 text-[#0996f5]" />
                    <span>Dokumentasi Foto Budaya Bersarung Suku Tengger:</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedPost.galleryImages.map((imgItem, idx) => (
                      <figure 
                        key={idx} 
                        className={`bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs group ${
                          idx === 0 || idx === selectedPost.galleryImages!.length - 1 ? 'sm:col-span-2' : ''
                        }`}
                      >
                        <div className="relative overflow-hidden bg-slate-900">
                          <img
                            src={imgItem.url}
                            alt={imgItem.alt}
                            className={`w-full object-cover object-center group-hover:scale-103 transition-transform duration-500 ${
                              idx === 0 ? 'h-52 sm:h-72' : 'h-44 sm:h-56'
                            }`}
                            loading="lazy"
                          />
                          <span className="absolute top-2.5 left-2.5 px-2 py-0.5 bg-black/60 backdrop-blur-xs text-white text-[10px] font-bold rounded">
                            Foto #{idx + 1}
                          </span>
                        </div>
                        <figcaption className="p-3 text-[11px] sm:text-xs text-slate-600 bg-white border-t border-slate-100 flex items-start gap-2">
                          <span className="font-bold text-[#0996f5] shrink-0">Keterangan:</span>
                          <span className="leading-relaxed">{imgItem.caption}</span>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              )}

              {/* Footnotes */}
              {selectedPost.footnotes && selectedPost.footnotes.length > 0 && (
                <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 space-y-1">
                  <div className="font-bold text-slate-600 mb-1">Catatan Kaki:</div>
                  {selectedPost.footnotes.map((fn, i) => (
                    <div key={i}>{fn}</div>
                  ))}
                </div>
              )}

              {/* References */}
              {selectedPost.references && selectedPost.references.length > 0 && (
                <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 space-y-1">
                  <div className="font-bold text-slate-600 mb-1">Referensi:</div>
                  {selectedPost.references.map((rf, i) => (
                    <div key={i}>• {rf}</div>
                  ))}
                </div>
              )}

              {/* Tags */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-1.5 text-xs text-slate-600">
                <Tag className="w-3.5 h-3.5 text-slate-400 mr-1" />
                {selectedPost.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 bg-slate-100 border border-slate-200 rounded-lg text-[11px] font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-between items-center">
              <button
                type="button"
                onClick={() => {
                  setSelectedPost(null);
                  if (onOpenAllArticles) onOpenAllArticles();
                }}
                className="text-xs font-bold text-[#0996f5] hover:underline"
              >
                Lihat Seluruh 9 Artikel →
              </button>
              <button
                type="button"
                onClick={() => setSelectedPost(null)}
                className="px-4 py-2 text-xs font-bold text-white bg-[#0996f5] hover:bg-[#0782d6] rounded-xl transition-colors cursor-pointer shadow-xs"
              >
                Tutup Bacaan
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
