import React, { useState } from 'react';
import { 
  ArrowLeft, Share2, Check, Calendar, Clock, User, Sparkles, 
  Shield, Layers, Flame, Wind, Footprints, BatteryCharging, HeartPulse,
  MessageCircle, Camera, CheckCircle2, ArrowRight, Play, ExternalLink,
  Users, AlertCircle, Luggage, Compass, Car, Leaf, CloudFog, Cloud
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { ARTICLE_BARANG_WAJIB_BROMO } from '../data/articles/barang-wajib-bromo';
import { ARTICLE_KAPASITAS_JEEP_BROMO } from '../data/articles/kapasitas-jeep-bromo';
import { ARTICLE_WAKTU_TERBAIK_BROMO } from '../data/articles/waktu-terbaik-bromo';
import imgCustom from '../assets/images/633b7b65-1f37-4dbd-9714-6a4197e04480.png';
import imgJeepGroup from '../assets/images/volcanic_jeep_expedition_group_portrait.png';

interface ArticleDetailPageProps {
  articleId?: string;
  articleSlug?: string;
  onBackToDirectory: () => void;
  onOpenBooking: () => void;
  onSelectArticle?: (articleId: string) => void;
}

export const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({
  articleId = 'kapasitas-jeep-bromo',
  articleSlug,
  onBackToDirectory,
  onOpenBooking,
  onSelectArticle,
}) => {
  const { language, t } = useLanguage();
  const [copiedShare, setCopiedShare] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Determine active article type
  const isSeasonArticle = articleId === 'waktu-terbaik-ke-bromo' || 
                          articleSlug?.includes('waktu') || 
                          articleSlug?.includes('musim') ||
                          articleId === 'waktu-terbaik-ke-bromo-menyelami-pesona-4-musim';

  const isJeepArticle = !isSeasonArticle && (
                        articleId === 'kapasitas-jeep-bromo' || 
                        articleSlug?.includes('kapasitas') || 
                        articleSlug?.includes('jeep'));

  const seasonArticle = ARTICLE_WAKTU_TERBAIK_BROMO[language] || ARTICLE_WAKTU_TERBAIK_BROMO.id;
  const jeepArticle = ARTICLE_KAPASITAS_JEEP_BROMO[language] || ARTICLE_KAPASITAS_JEEP_BROMO.id;
  const gearArticle = ARTICLE_BARANG_WAJIB_BROMO[language] || ARTICLE_BARANG_WAJIB_BROMO.id;

  const currentTitle = isSeasonArticle ? seasonArticle.title : isJeepArticle ? jeepArticle.title : gearArticle.title;
  const currentCategory = isSeasonArticle ? seasonArticle.categoryLabel : isJeepArticle ? jeepArticle.categoryLabel : gearArticle.categoryLabel;

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  const handleCopyLink = () => {
    const url = window.location.href;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`${currentTitle} - WisataBromo.co: ${url}`);
      setCopiedShare(true);
      const copiedText = language === 'en' 
        ? 'Link copied to clipboard!' 
        : language === 'zh' 
        ? '文章链接已成功复制到剪贴板！' 
        : 'Link artikel berhasil disalin!';
      showToast(copiedText);
      setTimeout(() => setCopiedShare(false), 2500);
    }
  };

  const handleShareSocial = (platform: 'wa' | 'fb' | 'x') => {
    const url = window.location.href;
    const text = `${currentTitle} - WisataBromo.co`;
    let shareUrl = '';

    if (platform === 'wa') {
      shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text + '\n' + url)}`;
    } else if (platform === 'fb') {
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    } else if (platform === 'x') {
      shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    }

    if (shareUrl) {
      window.open(shareUrl, '_blank', 'noopener,noreferrer,width=600,height=450');
    }
  };

  const getItemIcon = (iconName: string) => {
    switch (iconName) {
      case 'Shield':
        return <Shield className="w-5 h-5 text-[#0996f5]" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-[#0996f5]" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-[#ea0610]" />;
      case 'Wind':
        return <Wind className="w-5 h-5 text-[#0996f5]" />;
      case 'Footprints':
        return <Footprints className="w-5 h-5 text-[#0996f5]" />;
      case 'BatteryCharging':
        return <BatteryCharging className="w-5 h-5 text-emerald-600" />;
      case 'HeartPulse':
        return <HeartPulse className="w-5 h-5 text-[#ea0610]" />;
      case 'Leaf':
        return <Leaf className="w-5 h-5 text-emerald-600" />;
      case 'CloudFog':
        return <CloudFog className="w-5 h-5 text-cyan-600" />;
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-blue-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#fff700] fill-[#fff700] drop-shadow-sm" />;
    }
  };

  return (
    <article className="min-h-screen bg-[#f8fafc] text-[#0B1220] pt-4 pb-20 font-sans relative">
      
      {/* Toast Notification Alert */}
      {toastMessage && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-[#0B1220] text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-2.5 border border-slate-700 animate-in fade-in slide-in-from-top-4 duration-200">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <span className="text-xs sm:text-sm font-bold">{toastMessage}</span>
        </div>
      )}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Breadcrumb Nav Bar */}
        <div className="flex items-center justify-between py-4 border-b border-slate-200 mb-8">
          <button
            type="button"
            onClick={onBackToDirectory}
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-extrabold text-[#0B1220] hover:text-[#0996f5] bg-white hover:bg-[#EAF6FF] border border-slate-200 rounded-xl transition-all cursor-pointer shadow-2xs group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>{language === 'en' ? 'Back to The Journal' : language === 'zh' ? '返回文章目录' : 'Kembali ke The Journal'}</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-[#0996f5]/10 text-[#0996f5] rounded-full text-xs font-black uppercase tracking-wider">
              {currentCategory}
            </span>
          </div>
        </div>

        {/* Editorial Container Card */}
        <div className="bg-white border border-slate-200/90 rounded-3xl shadow-xl overflow-hidden">
          
          {/* Cover Hero Image */}
          <div className="relative h-72 sm:h-96 w-full overflow-hidden bg-slate-900">
            <img
              src={imgCustom}
              alt={currentTitle}
              className="w-full h-full object-cover object-center filter brightness-90 hover:scale-103 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/90 via-[#0B1220]/40 to-transparent"></div>
            
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-200 mb-2 font-medium">
                <span className="flex items-center gap-1 bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-md">
                  <Calendar className="w-3.5 h-3.5 text-[#FFF700]" />
                  {isSeasonArticle ? seasonArticle.publishDate : isJeepArticle ? jeepArticle.publishDate : gearArticle.publishDate}
                </span>
                <span className="flex items-center gap-1 bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-md">
                  <Clock className="w-3.5 h-3.5 text-[#FFF700]" />
                  {isSeasonArticle ? seasonArticle.readTime : isJeepArticle ? jeepArticle.readTime : gearArticle.readTime}
                </span>
                <span className="flex items-center gap-1 bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-md">
                  <User className="w-3.5 h-3.5 text-[#FFF700]" />
                  {isSeasonArticle ? seasonArticle.author : isJeepArticle ? jeepArticle.author : gearArticle.author}
                </span>
              </div>
            </div>
          </div>

          {/* Article Header Details */}
          <div className="p-6 sm:p-10 lg:p-12 border-b border-slate-100">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0B1220] leading-tight tracking-tight mb-4 font-serif">
              {currentTitle}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal bg-[#EAF6FF]/60 p-4 sm:p-5 rounded-2xl border-l-4 border-[#0996f5]">
              {isSeasonArticle ? seasonArticle.metaDescription : isJeepArticle ? jeepArticle.metaDescription : gearArticle.metaDescription}
            </p>

            {/* Author & Share row */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 mt-6 border-t border-slate-100 text-xs">
              <div className="flex items-center gap-2 text-slate-600 font-medium">
                <User className="w-4 h-4 text-[#0996f5]" />
                <span>{language === 'en' ? 'By' : language === 'zh' ? '撰写:' : 'Penulis:'} <strong>{isSeasonArticle ? seasonArticle.author : isJeepArticle ? jeepArticle.author : gearArticle.author}</strong></span>
              </div>

              {/* Share Actions Suite */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider hidden sm:inline mr-1">
                  {language === 'en' ? 'Share:' : language === 'zh' ? '分享:' : 'Bagikan:'}
                </span>

                {/* WhatsApp */}
                <button
                  type="button"
                  onClick={() => handleShareSocial('wa')}
                  className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#128C7E] rounded-xl font-bold transition-all cursor-pointer"
                  title="Share to WhatsApp"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </button>

                {/* Facebook */}
                <button
                  type="button"
                  onClick={() => handleShareSocial('fb')}
                  className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#1877F2]/10 hover:bg-[#1877F2]/20 text-[#1877F2] rounded-xl font-bold transition-all cursor-pointer"
                  title="Share to Facebook"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Facebook</span>
                </button>

                {/* Twitter / X */}
                <button
                  type="button"
                  onClick={() => handleShareSocial('x')}
                  className="inline-flex items-center gap-1 px-3 py-1.5 bg-slate-900/10 hover:bg-slate-900/20 text-[#0B1220] rounded-xl font-bold transition-all cursor-pointer"
                  title="Share to X"
                >
                  <span>𝕏</span>
                </button>

                {/* Copy Link */}
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-[#EAF6FF] text-slate-700 hover:text-[#0996f5] rounded-xl transition-colors cursor-pointer font-extrabold"
                  title="Copy link"
                >
                  {copiedShare ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600 font-bold">{language === 'en' ? 'Copied!' : language === 'zh' ? '已复制!' : 'Tersalin!'}</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-3.5 h-3.5" />
                      <span>{language === 'en' ? 'Copy Link' : language === 'zh' ? '复制链接' : 'Salin Link'}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* ARTICLE BODY CONTENT */}
          {isSeasonArticle ? (
            /* FLAGSHIP 4 SEASONS ARTICLE BODY */
            <div className="p-6 sm:p-10 lg:p-12 space-y-12 text-base text-[#0B1220] leading-relaxed">
              
              {/* Introduction Paragraphs */}
              <div className="space-y-5 text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
                {seasonArticle.introduction.map((p, idx) => (
                  <p key={idx} className="first-letter:text-4xl first-letter:font-black first-letter:text-[#0996f5] first-letter:mr-1.5 first-letter:float-left">
                    {p}
                  </p>
                ))}
              </div>

              {/* 4 SEASONS SECTIONS LOOP */}
              <div className="space-y-12 pt-4">
                {seasonArticle.seasons.map((season) => (
                  <div 
                    key={season.id} 
                    id={season.id}
                    className="p-6 sm:p-8 bg-slate-50/80 border border-slate-200/90 rounded-3xl space-y-6 shadow-xs hover:border-[#0996f5]/60 transition-colors"
                  >
                    {/* Header with Number, Season Name & Mood Badge */}
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4">
                      <div className="flex items-center gap-3">
                        <span className="w-10 h-10 rounded-2xl bg-[#0996f5] text-white flex items-center justify-center font-mono font-black text-sm shadow-sm">
                          {season.number}
                        </span>
                        <div>
                          <div className="text-xs font-black text-[#0996f5] uppercase tracking-wider">
                            {season.seasonName}
                          </div>
                          <h2 className="text-xl sm:text-2xl font-black font-serif text-[#0B1220]">
                            {season.title}
                          </h2>
                        </div>
                      </div>

                      {/* Mood/Vibes Badge Card */}
                      <div className={`px-3.5 py-1.5 rounded-xl border text-xs font-black shadow-2xs flex items-center gap-1.5 ${season.moodBadge.colorClass}`}>
                        <span>{season.moodBadge.text}</span>
                      </div>
                    </div>

                    {/* Season Inline Image */}
                    <figure className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 shadow-md">
                      <img
                        src={season.imageUrl}
                        alt={season.title}
                        className="w-full h-64 sm:h-80 md:h-96 object-cover object-center"
                        loading="lazy"
                      />
                      <figcaption className="p-3 bg-slate-900 text-white text-xs text-center border-t border-slate-800 italic">
                        📸 {season.imageCaption}
                      </figcaption>
                    </figure>

                    {/* Paragraphs */}
                    <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                      {season.paragraphs.map((para, pIdx) => (
                        <p key={pIdx}>{para}</p>
                      ))}
                    </div>

                    {/* Highlights Bullet List */}
                    {season.highlights && season.highlights.length > 0 && (
                      <div className="p-5 bg-white border border-slate-200 rounded-2xl space-y-3 shadow-2xs">
                        <h4 className="text-xs font-black text-[#102a56] uppercase tracking-wider flex items-center gap-1.5">
                          <Sparkles className="w-4 h-4 text-[#fff700] fill-[#fff700] drop-shadow-sm" />
                          <span>{language === 'en' ? 'Season Highlights:' : language === 'zh' ? '季节核心亮点:' : 'Highlight Musim Ini:'}</span>
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {season.highlights.map((hl, hIdx) => (
                            <div key={hIdx} className="flex items-start gap-2 p-2.5 bg-[#EAF6FF]/60 rounded-xl text-xs sm:text-sm font-semibold text-slate-800">
                              <CheckCircle2 className="w-4 h-4 text-[#0996f5] shrink-0 mt-0.5" />
                              <span>{hl}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* RESPONSIVE COMPARISON TABLE */}
              <div className="p-6 sm:p-8 bg-white border-2 border-slate-200 rounded-3xl shadow-md space-y-5 overflow-hidden">
                <div className="text-center max-w-lg mx-auto">
                  <span className="px-3 py-1 bg-[#fff700] text-black font-black rounded-full text-xs uppercase tracking-wider border border-[#fff700]">
                    {language === 'en' ? 'Quick Reference' : language === 'zh' ? '快速参考指南' : 'Panduan Cepat'}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black font-serif text-[#102a56] mt-2">
                    {seasonArticle.comparisonTable.title}
                  </h3>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-[#071A2B] text-white">
                        {seasonArticle.comparisonTable.headers.map((hdr, hIdx) => (
                          <th key={hIdx} className="p-3.5 font-bold uppercase tracking-wider border-b border-slate-700">
                            {hdr}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {seasonArticle.comparisonTable.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-[#EAF6FF]/50 transition-colors">
                          <td className="p-3.5 font-bold text-[#102a56]">{row[0]}</td>
                          <td className="p-3.5 font-medium text-[#0996f5]">{row[1]}</td>
                          <td className="p-3.5 text-slate-700">{row[2]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Styled "PRO TIP" Callout Box */}
              <div className="p-6 sm:p-8 bg-[#fff700]/15 border-2 border-[#fff700] rounded-3xl shadow-sm space-y-3 relative overflow-hidden">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#fff700] text-black font-black rounded-full text-xs uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 text-black" />
                  <span>{seasonArticle.proTipBox.title}</span>
                </div>
                <p className="text-sm sm:text-base text-slate-900 font-medium leading-relaxed">
                  {seasonArticle.proTipBox.content}
                </p>
              </div>

              {/* Conclusion & Booking CTA */}
              <div className="p-6 sm:p-8 bg-[#EAF6FF] border border-[#0996f5]/30 rounded-3xl space-y-4">
                <h3 className="text-xl font-extrabold text-[#0B1220]">
                  {language === 'en' ? 'Ready to Experience Your Favorite Bromo Season?' : language === 'zh' ? '准备好开启您心仪的布罗莫季节之旅了吗？' : 'Siap Menikmati Musim Bromo Favorit Anda?'}
                </h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {seasonArticle.conclusion}
                </p>
                
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="button"
                    onClick={onOpenBooking}
                    className="w-full sm:w-auto px-6 py-3.5 bg-[#0996f5] hover:bg-[#071A2B] text-white text-xs sm:text-sm font-black rounded-2xl shadow-lg shadow-[#0996f5]/25 transition-all cursor-pointer flex items-center justify-center gap-2 group"
                  >
                    <span>{seasonArticle.ctaButton}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <a
                    href="https://wa.me/6281222290318?text=Halo%20Admin%20WisataBromo.co,%20saya%20mau%20konsultasi%20jadwal%20dan%20musim%20terbaik%20ke%20Bromo."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-5 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold rounded-2xl transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Hotline (+62 812-2229-0318)</span>
                  </a>
                </div>
              </div>

              {/* Social Share Buttons Bottom Section */}
              <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <h4 className="text-sm font-extrabold text-[#0B1220]">
                    {language === 'en' ? 'Help friends plan their Bromo trip' : language === 'zh' ? '分享给计划前往布罗莫的朋友' : 'Bagikan panduan ini ke teman perjalanan Anda'}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {language === 'en' ? 'Share this flagship guide via WhatsApp, Facebook, or X' : language === 'zh' ? '通过微信/WhatsApp、社交媒体一键分享' : 'Bagikan melalui WhatsApp, Facebook, atau X'}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleShareSocial('wa')}
                    className="px-3.5 py-2 bg-[#25D366] text-white text-xs font-bold rounded-xl shadow-xs hover:bg-[#20ba5a] transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleShareSocial('fb')}
                    className="px-3.5 py-2 bg-[#1877F2] text-white text-xs font-bold rounded-xl shadow-xs hover:bg-[#1567d3] transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Facebook</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopyLink}
                    className="px-3.5 py-2 bg-slate-200 text-slate-800 hover:bg-slate-300 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{language === 'en' ? 'Copy Link' : language === 'zh' ? '复制链接' : 'Salin Link'}</span>
                  </button>
                </div>
              </div>

              {/* Article Tags */}
              <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center gap-2 text-xs text-slate-600">
                <span className="font-bold text-slate-400 mr-1">Tags:</span>
                {seasonArticle.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-slate-100 hover:bg-[#EAF6FF] text-slate-700 hover:text-[#0996f5] rounded-xl font-medium transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

            </div>
          ) : isJeepArticle ? (
            /* JEEP CAPACITY ARTICLE BODY */
            <div className="p-6 sm:p-10 lg:p-12 space-y-10 text-base text-[#0B1220] leading-relaxed">
              
              <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
                {jeepArticle.introduction.map((p, idx) => (
                  <p key={idx} className="first-letter:text-4xl first-letter:font-black first-letter:text-[#0996f5] first-letter:mr-1 first-letter:float-left">
                    {p}
                  </p>
                ))}
              </div>

              <div className="space-y-10 pt-2">
                {jeepArticle.sections.map((sec) => (
                  <section 
                    key={sec.id} 
                    id={sec.id} 
                    className="p-6 sm:p-8 bg-slate-50/70 border border-slate-200/90 rounded-3xl space-y-5"
                  >
                    <div className="space-y-1.5">
                      {sec.badge && (
                        <span className="inline-block px-3 py-0.5 bg-[#0996f5]/10 text-[#0996f5] text-xs font-black rounded-full uppercase tracking-wider">
                          {sec.badge}
                        </span>
                      )}
                      <h2 className="text-xl sm:text-2xl font-black text-[#0B1220] flex items-baseline gap-2">
                        <span className="text-[#0996f5]">{sec.number}.</span>
                        <span>{sec.title}</span>
                      </h2>
                    </div>

                    <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                      {sec.paragraphs.map((para, pIdx) => (
                        <p key={pIdx}>{para}</p>
                      ))}
                    </div>

                    {sec.highlightBox && (
                      <div className="p-4 sm:p-5 bg-[#EAF6FF] border-l-4 border-[#0996f5] rounded-r-2xl text-xs sm:text-sm text-[#0B1220] space-y-1">
                        <div className="font-black text-[#0996f5] uppercase tracking-wide">
                          {sec.highlightBox.title}
                        </div>
                        <div className="font-semibold text-slate-700">
                          {sec.highlightBox.text}
                        </div>
                      </div>
                    )}

                    {sec.bulletPoints && sec.bulletPoints.length > 0 && (
                      <div className="grid grid-cols-1 gap-3 pt-2">
                        {sec.bulletPoints.map((bp, bpIdx) => (
                          <div 
                            key={bpIdx}
                            className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs space-y-1"
                          >
                            <h4 className="text-sm sm:text-base font-extrabold text-[#0B1220] flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4 text-[#0996f5] shrink-0" />
                              <span>{bp.title}</span>
                            </h4>
                            <p className="text-xs sm:text-sm text-slate-600 pl-6 leading-relaxed">
                              {bp.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {sec.hasFloorplanImage && jeepArticle.floorplanImage && (
                      <div className="pt-4 pb-2">
                        <figure className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-md p-4 sm:p-6 text-center space-y-4">
                          <img
                            src={jeepArticle.floorplanImage.src}
                            alt={jeepArticle.floorplanImage.alt}
                            className="max-w-full h-auto rounded-xl shadow-md mx-auto object-contain max-h-[380px]"
                          />
                          <figcaption className="p-3 bg-slate-100 rounded-xl text-slate-700 text-xs sm:text-sm font-semibold italic border border-slate-200">
                            📐 {jeepArticle.floorplanImage.caption}
                          </figcaption>
                        </figure>
                      </div>
                    )}
                  </section>
                ))}
              </div>

              <div className="p-6 sm:p-8 bg-[#fff700]/15 border-2 border-[#fff700] rounded-3xl shadow-sm space-y-3 relative overflow-hidden">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#fff700] text-black font-black rounded-full text-xs uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 text-black" />
                  <span>{jeepArticle.proTipBox.title}</span>
                </div>
                <p className="text-sm sm:text-base text-slate-900 font-medium leading-relaxed">
                  {jeepArticle.proTipBox.content}
                </p>
              </div>

              <div className="p-6 sm:p-8 bg-[#EAF6FF] border border-[#0996f5]/30 rounded-3xl space-y-4">
                <h3 className="text-xl font-extrabold text-[#0B1220]">
                  {language === 'en' ? 'Book Your Official Mount Bromo Jeep' : language === 'zh' ? '预订正规布罗莫吉普车' : 'Booking Jeep Resmi Sekarang'}
                </h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {jeepArticle.conclusion}
                </p>
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="button"
                    onClick={onOpenBooking}
                    className="w-full sm:w-auto px-6 py-3.5 bg-[#0996f5] hover:bg-[#071A2B] text-white text-xs sm:text-sm font-black rounded-2xl shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>{jeepArticle.ctaButton}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href="https://wa.me/6281222290318?text=Halo%20Admin%20WisataBromo.co,%20saya%20mau%20konsultasi%20kapasitas%20dan%20booking%20Jeep%20Bromo."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-5 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold rounded-2xl transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Hotline (+62 812-2229-0318)</span>
                  </a>
                </div>
              </div>

              {/* Social Share Buttons Bottom Section */}
              <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <h4 className="text-sm font-extrabold text-[#0B1220]">
                    {language === 'en' ? 'Help friends plan their Bromo trip' : language === 'zh' ? '分享给计划前往布罗莫的朋友' : 'Bagikan panduan ini ke teman perjalanan Anda'}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {language === 'en' ? 'Share this guide via WhatsApp, Facebook, or X' : language === 'zh' ? '通过微信/WhatsApp、社交媒体一键分享' : 'Bagikan melalui WhatsApp, Facebook, atau X'}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleShareSocial('wa')}
                    className="px-3.5 py-2 bg-[#25D366] text-white text-xs font-bold rounded-xl shadow-xs hover:bg-[#20ba5a] transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleShareSocial('fb')}
                    className="px-3.5 py-2 bg-[#1877F2] text-white text-xs font-bold rounded-xl shadow-xs hover:bg-[#1567d3] transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Facebook</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopyLink}
                    className="px-3.5 py-2 bg-slate-200 text-slate-800 hover:bg-slate-300 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{language === 'en' ? 'Copy Link' : language === 'zh' ? '复制链接' : 'Salin Link'}</span>
                  </button>
                </div>
              </div>

              {/* Article Tags */}
              <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center gap-2 text-xs text-slate-600">
                <span className="font-bold text-slate-400 mr-1">Tags:</span>
                {jeepArticle.tags?.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-slate-100 hover:bg-[#EAF6FF] text-slate-700 hover:text-[#0996f5] rounded-xl font-medium transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

            </div>
          ) : (
            /* GEAR ARTICLE BODY (7 BARANG WAJIB BAWAAN) */
            <div className="p-6 sm:p-10 lg:p-12 space-y-10 text-base text-[#0B1220] leading-relaxed">
              
              {/* Introduction Editorial Paragraphs */}
              <div className="space-y-5 text-slate-700 text-base sm:text-lg leading-relaxed">
                {gearArticle.introduction.map((p, idx) => (
                  <p 
                    key={idx} 
                    className={idx === 0 ? "first-letter:text-5xl first-letter:font-black first-letter:text-[#0996f5] first-letter:mr-2.5 first-letter:float-left first-letter:font-serif first-letter:leading-none" : ""}
                  >
                    {p}
                  </p>
                ))}
              </div>

              {/* Items 1 - 3 */}
              <div className="space-y-8 pt-2">
                {gearArticle.items.slice(0, 3).map((item) => (
                  <div key={item.id} className="p-6 sm:p-8 bg-[#EAF6FF]/35 hover:bg-[#EAF6FF]/60 border border-slate-200 rounded-3xl transition-all space-y-4 shadow-xs">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1">
                        <span className="inline-block px-2.5 py-0.5 bg-[#0996f5]/10 text-[#0996f5] rounded-full text-xs font-black tracking-wider uppercase">
                          {item.subtitle}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-serif font-black text-[#102a56]">
                          {item.title}
                        </h3>
                      </div>
                      <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center justify-center shrink-0">
                        {getItemIcon(item.iconName)}
                      </div>
                    </div>

                    <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                      {item.description}
                    </p>

                    {item.tip && (
                      <div className="p-3.5 sm:p-4 bg-[#fff700]/15 border-l-4 border-[#fff700] rounded-r-2xl flex items-start gap-3 shadow-2xs">
                        <Sparkles className="w-4 h-4 text-black bg-[#fff700] rounded p-0.5 shrink-0 mt-0.5" />
                        <div className="text-xs sm:text-sm text-slate-900 leading-relaxed">
                          <span className="font-extrabold text-black mr-1.5">
                            {language === 'en' ? 'Practical Tip:' : language === 'zh' ? '实用小贴士：' : 'Tips Praktis:'}
                          </span>
                          {item.tip}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Inline Photo 1 */}
              {gearArticle.inlinePhotos?.[0] && (
                <figure className="my-8 rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-md">
                  <img
                    src={imgJeepGroup}
                    alt={gearArticle.inlinePhotos[0].caption}
                    className="w-full h-auto max-h-[460px] object-cover object-center hover:scale-101 transition-transform duration-700"
                  />
                  <figcaption className="p-3.5 bg-slate-50 text-slate-600 text-xs sm:text-sm font-medium italic border-t border-slate-100 text-center flex items-center justify-center gap-2">
                    <Camera className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>{gearArticle.inlinePhotos[0].caption}</span>
                  </figcaption>
                </figure>
              )}


              {/* Items 4 - 7 */}
              <div className="space-y-8 pt-2">
                {gearArticle.items.slice(3).map((item) => (
                  <div key={item.id} className="p-6 sm:p-8 bg-[#EAF6FF]/35 hover:bg-[#EAF6FF]/60 border border-slate-200 rounded-3xl transition-all space-y-4 shadow-xs">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1">
                        <span className="inline-block px-2.5 py-0.5 bg-[#0996f5]/10 text-[#0996f5] rounded-full text-xs font-black tracking-wider uppercase">
                          {item.subtitle}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-serif font-black text-[#102a56]">
                          {item.title}
                        </h3>
                      </div>
                      <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center justify-center shrink-0">
                        {getItemIcon(item.iconName)}
                      </div>
                    </div>

                    <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                      {item.description}
                    </p>

                    {item.tip && (
                      <div className="p-3.5 sm:p-4 bg-[#fff700]/15 border-l-4 border-[#fff700] rounded-r-2xl flex items-start gap-3 shadow-2xs">
                        <Sparkles className="w-4 h-4 text-black bg-[#fff700] rounded p-0.5 shrink-0 mt-0.5" />
                        <div className="text-xs sm:text-sm text-slate-900 leading-relaxed">
                          <span className="font-extrabold text-black mr-1.5">
                            {language === 'en' ? 'Practical Tip:' : language === 'zh' ? '实用小贴士：' : 'Tips Praktis:'}
                          </span>
                          {item.tip}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Styled "PRO TIP" Callout Box */}
              <div className="p-6 sm:p-8 bg-[#fff700]/15 border-2 border-[#fff700] rounded-3xl shadow-sm space-y-3 relative overflow-hidden">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#fff700] text-black font-black rounded-full text-xs uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 text-black" />
                  <span>{gearArticle.proTipBox.title}</span>
                </div>
                <p className="text-sm sm:text-base text-slate-900 font-medium leading-relaxed">
                  {gearArticle.proTipBox.content}
                </p>
              </div>

              {/* Conclusion & Booking CTA */}
              <div className="p-6 sm:p-8 bg-[#EAF6FF] border border-[#0996f5]/30 rounded-3xl space-y-4">
                <h3 className="text-xl font-extrabold text-[#0B1220]">
                  {language === 'en' ? 'Ready for Your Mount Bromo Adventure?' : language === 'zh' ? '准备好开启布罗莫火山探险了吗？' : 'Siap Menjelajahi Keindahan Bromo dengan Nyaman?'}
                </h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {gearArticle.conclusion}
                </p>
                
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="button"
                    onClick={onOpenBooking}
                    className="w-full sm:w-auto px-6 py-3.5 bg-[#0996f5] hover:bg-[#071A2B] text-white text-xs sm:text-sm font-black rounded-2xl shadow-lg shadow-[#0996f5]/25 transition-all cursor-pointer flex items-center justify-center gap-2 group"
                  >
                    <span>{gearArticle.ctaButton}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <a
                    href="https://wa.me/6281222290318?text=Halo%20Admin%20WisataBromo.co,%20saya%20mau%20konsultasi%20perlengkapan%20dan%20booking%20trip%20ke%20Bromo."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-5 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold rounded-2xl transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Hotline (+62 812-2229-0318)</span>
                  </a>
                </div>
              </div>

              {/* Social Share Buttons Bottom Section */}
              <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <h4 className="text-sm font-extrabold text-[#0B1220]">
                    {language === 'en' ? 'Help friends pack properly for Bromo' : language === 'zh' ? '分享行囊清单给计划前往布罗莫的朋友' : 'Bagikan daftar perlengkapan ini ke teman perjalanan Anda'}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {language === 'en' ? 'Share this essential checklist via WhatsApp, Facebook, or X' : language === 'zh' ? '通过微信/WhatsApp、社交媒体一键分享' : 'Bagikan melalui WhatsApp, Facebook, atau X'}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleShareSocial('wa')}
                    className="px-3.5 py-2 bg-[#25D366] text-white text-xs font-bold rounded-xl shadow-xs hover:bg-[#20ba5a] transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleShareSocial('fb')}
                    className="px-3.5 py-2 bg-[#1877F2] text-white text-xs font-bold rounded-xl shadow-xs hover:bg-[#1567d3] transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Facebook</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopyLink}
                    className="px-3.5 py-2 bg-slate-200 text-slate-800 hover:bg-slate-300 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{language === 'en' ? 'Copy Link' : language === 'zh' ? '复制链接' : 'Salin Link'}</span>
                  </button>
                </div>
              </div>

              {/* Article Tags */}
              <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center gap-2 text-xs text-slate-600">
                <span className="font-bold text-slate-400 mr-1">Tags:</span>
                {gearArticle.tags?.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-slate-100 hover:bg-[#EAF6FF] text-slate-700 hover:text-[#0996f5] rounded-xl font-medium transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

            </div>
          )}

        </div>
      </div>
    </article>
  );
};
