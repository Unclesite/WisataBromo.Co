import React, { useState } from 'react';
import { FAQS, TESTIMONIALS, DESTINATION_SPOTS } from '../data/destinationsData';
import { Star, ChevronDown, ChevronUp, CheckCircle, Sparkles } from 'lucide-react';

export const TestimonialsAndFaqSection: React.FC = () => {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  return (
    <section id="faq-section" className="py-14 sm:py-18 bg-[#ffffff] text-[#111318] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 sm:space-y-16">
        
        {/* Spot Highlights Bar */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <div className="text-xs font-black text-[#3d72fe] tracking-wider mb-2 uppercase flex items-center justify-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#ffc928]" />
              <span>LOKASI IKONIK KALDERA BROMO</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#111318] mb-2">
              5 Destinasi Utama yang Dikunjungi
            </h2>
            <p className="text-xs sm:text-sm text-[#111318]/75">
              Setiap paket trip kami dirancang untuk mengunjungi seluruh keindahan alam magis Bromo dalam satu perjalanan.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4">
            {DESTINATION_SPOTS.map((spot) => (
              <div
                key={spot.id}
                className="p-4 sm:p-5 bg-[#eaf2ff]/50 border border-slate-200 hover:border-[#3d72fe] rounded-2xl transition-all shadow-xs"
              >
                <div className="text-xs font-mono text-[#3d72fe] font-black mb-1 flex items-center justify-between">
                  <span>{spot.elevation}</span>
                  <span className="text-[10px] text-slate-500 font-sans">{spot.bestTime}</span>
                </div>
                <h4 className="text-sm font-black text-[#111318] mb-1.5">{spot.name}</h4>
                <p className="text-xs text-[#111318]/80 line-clamp-3 leading-relaxed">
                  {spot.speciality}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Block */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <div className="text-xs font-black text-[#3d72fe] tracking-wider mb-2 uppercase flex items-center justify-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#ffc928]" />
              <span>TESTIMONI & ULASAN TAMU</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-[#111318] mb-2">
              Cerita Liburan Nyata Bersama WisataBromo.co
            </h3>
            <p className="text-xs sm:text-sm text-[#111318]/75">
              Kepuasan dan kenyamanan Anda adalah prioritas utama setiap driver dan pemandu lokal kami.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-[#ffffff] border border-slate-200/90 rounded-2xl p-5 flex flex-col justify-between shadow-xs hover:border-[#3d72fe] hover:shadow-lg hover:shadow-[#3d72fe]/10 transition-all"
              >
                <div>
                  {/* Star Rating in Warm Gold #ffc928 */}
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#ffc928] text-[#ffc928]" />
                    ))}
                  </div>

                  <p className="text-xs text-[#111318]/85 leading-relaxed mb-4 italic">
                    "{t.comment}"
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <div className="text-xs font-black text-[#111318] flex items-center gap-1.5">
                    <span>{t.author}</span>
                    {t.verified && (
                      <span title="Verified Customer" className="inline-flex">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                      </span>
                    )}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    {t.city} · <span className="text-[#3d72fe] font-bold">{t.tripTaken}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Accordion Block */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-xs font-black text-[#3d72fe] tracking-wider mb-2 uppercase flex items-center justify-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#ffc928]" />
              <span>PERTANYAAN UMUM</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-[#111318] mb-2">
              Frequently Asked Questions (FAQ)
            </h3>
            <p className="text-xs sm:text-sm text-[#111318]/75">
              Hal-hal yang sering ditanyakan seputar pendaftaran, cuaca, dan fasilitas trip.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div
                  key={idx}
                  className={`border rounded-2xl overflow-hidden transition-all ${
                    isOpen ? 'border-[#3d72fe] bg-[#eaf2ff]/40 shadow-xs' : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-4 sm:p-4.5 flex items-center justify-between gap-4 text-xs sm:text-sm font-bold text-[#111318] cursor-pointer min-h-[46px]"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#3d72fe] shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-4 sm:px-4.5 pb-4 text-xs text-[#111318]/85 leading-relaxed border-t border-slate-200/80 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
