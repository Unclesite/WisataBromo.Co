import React, { useState } from 'react';
import { BlogPost } from '../types';
import { BLOG_POSTS } from '../data/blogsData';
import { ArrowRight, X, Sparkles, User, Tag } from 'lucide-react';

export const BromoCultureBlogSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="budaya-tengger" className="py-16 bg-[#eaf2ff]/40 border-t border-slate-200 text-[#111318]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-extrabold text-[#3d72fe] tracking-wider mb-2 uppercase">
            ENSIKLOPEDIA & CATATAN PERJALANAN
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#102a56] mb-3 text-balance">
            Blog Tentang Bromo, Suku Tengger & Tradisi Kasada
          </h2>
          <p className="text-[#111318]/75 text-sm sm:text-base leading-relaxed">
            Mengenal lebih dekat sejarah peradaban suku asli lereng Bromo, ritual sakral Yadnya Kasada, legenda Roro Anteng & Joko Seger, serta panduan spot sunrise terindah.
          </p>
        </div>

        {/* Featured Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="bg-white border border-slate-200/90 rounded-2xl p-6 flex flex-col justify-between hover:border-[#3d72fe] hover:shadow-xl hover:shadow-[#3d72fe]/10 transition-all duration-300 group cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              <div>
                {/* Unboxed metadata line with typographic separator */}
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                  <span className="text-[#3d72fe] font-bold">{post.categoryLabel}</span>
                  <span aria-hidden="true" className="text-slate-300">·</span>
                  <span>{post.readTime}</span>
                  <span aria-hidden="true" className="text-slate-300">·</span>
                  <span>{post.publishDate}</span>
                </div>

                <h3 className="text-base sm:text-lg font-extrabold text-[#102a56] group-hover:text-[#3d72fe] transition-colors mb-2.5 leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs text-[#111318]/75 line-clamp-3 leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                {/* Key Takeaways preview */}
                <div className="bg-[#eaf2ff]/70 p-3 rounded-xl border border-[#3d72fe]/20 mb-4">
                  <div className="text-[11px] font-bold text-[#102a56] mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#ffc928]" />
                    Poin Penting:
                  </div>
                  <div className="text-xs text-[#111318]/80 line-clamp-2">
                    {post.keyTakeaways[0]}
                  </div>
                </div>
              </div>

              {/* Author & Read More */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 text-[11px] flex items-center gap-1">
                  <User className="w-3 h-3 text-slate-400" />
                  {post.author}
                </span>
                <span className="text-[#3d72fe] font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Baca Artikel <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Reader Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
          <div className="relative bg-white border border-slate-200 rounded-3xl w-full max-w-3xl overflow-hidden shadow-2xl my-8">
            {/* Modal Header */}
            <div className="p-6 bg-[#eaf2ff]/80 border-b border-slate-200 relative">
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-5 right-5 p-2 text-slate-500 hover:text-[#102a56] hover:bg-white rounded-xl transition-colors cursor-pointer"
                aria-label="Tutup artikel"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-xs text-[#3d72fe] font-bold mb-2">
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
              <div className="p-4 bg-[#eaf2ff] border border-[#3d72fe]/25 rounded-2xl">
                <div className="text-xs font-bold text-[#102a56] mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#ffc928]" />
                  Rangkuman & Poin Kunci:
                </div>
                <ul className="space-y-1.5 text-xs text-[#111318]/90">
                  {selectedPost.keyTakeaways.map((takeaway, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#3d72fe] font-bold">•</span>
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Full Content Paragraphs */}
              <div className="space-y-4 text-xs sm:text-sm text-[#111318]/90 leading-relaxed">
                {selectedPost.content.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

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
              <span className="text-xs text-slate-500">
                WisataBromo.co — Menjaga Kelestarian Alam & Budaya Tengger
              </span>
              <button
                type="button"
                onClick={() => setSelectedPost(null)}
                className="px-4 py-2 text-xs font-bold text-white bg-[#3d72fe] hover:bg-[#2b5ae0] rounded-xl transition-colors cursor-pointer shadow-xs"
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
