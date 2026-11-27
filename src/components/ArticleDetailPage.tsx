import React, { useState } from 'react';
import { 
  ArrowLeft, Share2, Check, Calendar, Clock, User, Sparkles, 
  Shield, Layers, Flame, Wind, Footprints, BatteryCharging, HeartPulse,
  MessageCircle, Camera, CheckCircle2, ArrowRight, Play, ExternalLink,
  Users, AlertCircle, Luggage, Compass, Car, Leaf, CloudFog, Cloud, Link2
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { ARTICLE_BARANG_WAJIB_BROMO } from '../data/articles/barang-wajib-bromo';
import { ARTICLE_KAPASITAS_JEEP_BROMO } from '../data/articles/kapasitas-jeep-bromo';
import { ARTICLE_WAKTU_TERBAIK_BROMO } from '../data/articles/waktu-terbaik-bromo';
import { ARTICLE_BIAYA_KUDA_BROMO } from '../data/articles/biaya-kuda-bromo';
import { ARTICLE_NAIK_KERETA_BROMO } from '../data/articles/naik-kereta-ke-bromo';
import { ARTICLE_PINTU_MASUK_HARGA_JEEP } from '../data/articles/pintu-masuk-bromo-harga-jeep';
import { ARTICLE_OPEN_TRIP_BROMO_START_MALANG } from '../data/articles/open-trip-bromo-start-malang';
import { ARTICLE_PRIVATE_TRIP_BROMO_START_SURABAYA } from '../data/articles/private-trip-bromo-start-surabaya';
import { ARTICLE_PRIVATE_TRIP_BROMO_START_BATU } from '../data/articles/private-trip-bromo-start-batu';
import { ARTICLE_PRIVATE_TRIP_BROMO_START_SUKAPURA } from '../data/articles/private-trip-bromo-start-sukapura';
import { ARTICLE_PRIVATE_TRIP_BROMO_START_TOSARI } from '../data/articles/private-trip-bromo-start-tosari';
import { ARTICLE_PRIVATE_TRIP_BROMO_START_GUBUGKLAKAH } from '../data/articles/private-trip-bromo-start-gubugklakah';
import { ARTICLE_OPEN_TRIP_BROMO_START_SURABAYA } from '../data/articles/open-trip-bromo-start-surabaya';
import { ARTICLE_OPEN_TRIP_BROMO_START_KOTA_MALANG } from '../data/articles/open-trip-bromo-start-kota-malang';
import { ARTICLE_OPEN_TRIP_BROMO_START_KOTA_BATU } from '../data/articles/open-trip-bromo-start-kota-batu';
import { HorseCuteVector } from './HorseArticleVectors';
import imgCustom from '../assets/images/633b7b65-1f37-4dbd-9714-6a4197e04480.png';
import imgJeepGroup from '../assets/images/volcanic_jeep_expedition_group_portrait.png';

interface ArticleDetailPageProps {
  articleId?: string;
  articleSlug?: string;
  onBackToDirectory: () => void;
  onOpenBooking: (packageId?: string) => void;
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
  const isOpenTripBatuArticle =
    articleId === 'open-trip-bromo-start-kota-batu' ||
    articleId?.includes('open-trip-bromo-start-kota-batu') ||
    articleId?.includes('open-trip-bromo-start-batu') ||
    articleId?.includes('open-trip-start-kota-batu') ||
    articleSlug?.includes('open-trip-bromo-start-kota-batu') ||
    articleSlug?.includes('open-trip-bromo-start-batu') ||
    articleSlug?.includes('open-trip-start-kota-batu');

  const isOpenTripMalangArticle =
    !isOpenTripBatuArticle &&
    (articleId === 'open-trip-bromo-start-kota-malang' ||
      articleId?.includes('open-trip-bromo-start-kota-malang') ||
      articleId?.includes('open-trip-start-kota-malang') ||
      articleSlug?.includes('open-trip-bromo-start-kota-malang') ||
      articleSlug?.includes('open-trip-start-kota-malang'));

  const isOpenTripSurabayaArticle =
    !isOpenTripBatuArticle &&
    !isOpenTripMalangArticle &&
    (articleId === 'open-trip-bromo-start-surabaya' ||
      articleId?.includes('open-trip-bromo-start-surabaya') ||
      articleId?.includes('open-trip-bromo-start-kota-surabaya') ||
      articleId?.includes('open-trip-start-kota-surabaya') ||
      articleSlug?.includes('open-trip-bromo-start-surabaya') ||
      articleSlug?.includes('open-trip-bromo-start-kota-surabaya') ||
      articleSlug?.includes('open-trip-start-kota-surabaya'));

  const isGubugklakahTripArticle =
    !isOpenTripBatuArticle &&
    !isOpenTripMalangArticle &&
    !isOpenTripSurabayaArticle &&
    (articleId === 'private-trip-bromo-start-gubugklakah' ||
      articleId?.includes('start-gubugklakah') ||
      articleSlug?.includes('start-gubugklakah') ||
      articleSlug?.includes('gubugklakah-kab-malang'));

  const isTosariTripArticle =
    !isOpenTripBatuArticle &&
    !isOpenTripMalangArticle &&
    !isOpenTripSurabayaArticle &&
    !isGubugklakahTripArticle &&
    (articleId === 'private-trip-bromo-start-tosari' ||
      articleId?.includes('start-tosari') ||
      articleSlug?.includes('start-tosari') ||
      articleSlug?.includes('tosari-pasuruan'));

  const isSukapuraTripArticle =
    !isOpenTripBatuArticle &&
    !isOpenTripMalangArticle &&
    !isOpenTripSurabayaArticle &&
    !isGubugklakahTripArticle &&
    !isTosariTripArticle &&
    (articleId === 'private-trip-bromo-start-sukapura' ||
      articleId?.includes('start-sukapura') ||
      articleSlug?.includes('start-sukapura') ||
      articleSlug?.includes('sukapura-probolinggo'));

  const isBatuTripArticle =
    !isOpenTripBatuArticle &&
    !isOpenTripMalangArticle &&
    !isOpenTripSurabayaArticle &&
    !isGubugklakahTripArticle &&
    !isTosariTripArticle &&
    !isSukapuraTripArticle &&
    (articleId === 'private-trip-bromo-start-batu' ||
      articleId?.includes('start-batu') ||
      articleId?.includes('start-kota-batu') ||
      articleSlug?.includes('start-batu') ||
      articleSlug?.includes('start-kota-batu'));

  const isSurabayaTripArticle =
    !isOpenTripBatuArticle &&
    !isOpenTripMalangArticle &&
    !isOpenTripSurabayaArticle &&
    !isGubugklakahTripArticle &&
    !isTosariTripArticle &&
    !isSukapuraTripArticle &&
    !isBatuTripArticle &&
    (articleId === 'private-trip-bromo-start-surabaya' ||
      articleId?.includes('start-surabaya') ||
      articleSlug?.includes('start-surabaya'));

  const isMalangTripArticle =
    !isOpenTripBatuArticle &&
    !isOpenTripMalangArticle &&
    !isOpenTripSurabayaArticle &&
    !isGubugklakahTripArticle &&
    !isTosariTripArticle &&
    !isSukapuraTripArticle &&
    !isBatuTripArticle &&
    !isSurabayaTripArticle &&
    (articleId === 'private-trip-bromo-start-kota-malang' ||
      articleId?.includes('open-trip-bromo-start-malang') ||
      articleId?.includes('private-trip-bromo-start') ||
      articleId?.includes('start-kota-malang') ||
      articleSlug?.includes('open-trip-bromo-start-malang') ||
      articleSlug?.includes('private-trip-bromo-start') ||
      articleSlug?.includes('start-kota-malang'));

  const isGateJeepArticle =
    !isOpenTripBatuArticle &&
    !isOpenTripMalangArticle &&
    !isOpenTripSurabayaArticle &&
    !isGubugklakahTripArticle &&
    !isTosariTripArticle &&
    !isSukapuraTripArticle &&
    !isBatuTripArticle &&
    !isSurabayaTripArticle &&
    !isMalangTripArticle &&
    (articleId === 'pintu-masuk-bromo-harga-jeep' ||
      articleId?.includes('pintu-masuk') ||
      articleSlug?.includes('pintu-masuk') ||
      articleSlug?.includes('harga-sewa-jeep'));

  const isTrainArticle =
    !isOpenTripBatuArticle &&
    !isOpenTripMalangArticle &&
    !isOpenTripSurabayaArticle &&
    !isGubugklakahTripArticle &&
    !isTosariTripArticle &&
    !isSukapuraTripArticle &&
    !isBatuTripArticle &&
    !isSurabayaTripArticle &&
    !isMalangTripArticle &&
    !isGateJeepArticle &&
    (articleId === 'naik-kereta-ke-bromo' ||
      articleId?.includes('kereta') ||
      articleSlug?.includes('kereta') ||
      articleSlug?.includes('train'));

  const isHorseArticle =
    !isOpenTripBatuArticle &&
    !isOpenTripMalangArticle &&
    !isOpenTripSurabayaArticle &&
    !isGubugklakahTripArticle &&
    !isTosariTripArticle &&
    !isSukapuraTripArticle &&
    !isBatuTripArticle &&
    !isSurabayaTripArticle &&
    !isMalangTripArticle &&
    !isGateJeepArticle &&
    !isTrainArticle &&
    (articleId === 'biaya-kuda-bromo' ||
      articleId?.includes('kuda') ||
      articleSlug?.includes('kuda') ||
      articleSlug?.includes('horse'));

  const isSeasonArticle =
    !isOpenTripBatuArticle &&
    !isOpenTripMalangArticle &&
    !isOpenTripSurabayaArticle &&
    !isGubugklakahTripArticle &&
    !isTosariTripArticle &&
    !isSukapuraTripArticle &&
    !isBatuTripArticle &&
    !isSurabayaTripArticle &&
    !isMalangTripArticle &&
    !isGateJeepArticle &&
    !isTrainArticle &&
    !isHorseArticle &&
    (articleId === 'waktu-terbaik-ke-bromo' ||
      articleSlug?.includes('waktu') ||
      articleSlug?.includes('musim') ||
      articleId === 'waktu-terbaik-ke-bromo-menyelami-pesona-4-musim');

  const isJeepArticle =
    !isOpenTripBatuArticle &&
    !isOpenTripMalangArticle &&
    !isOpenTripSurabayaArticle &&
    !isGubugklakahTripArticle &&
    !isTosariTripArticle &&
    !isSukapuraTripArticle &&
    !isBatuTripArticle &&
    !isSurabayaTripArticle &&
    !isMalangTripArticle &&
    !isGateJeepArticle &&
    !isTrainArticle &&
    !isHorseArticle &&
    !isSeasonArticle &&
    (articleId === 'kapasitas-jeep-bromo' ||
      articleSlug?.includes('kapasitas') ||
      articleSlug?.includes('jeep'));

  const openTripBatuArticle =
    ARTICLE_OPEN_TRIP_BROMO_START_KOTA_BATU[language] || ARTICLE_OPEN_TRIP_BROMO_START_KOTA_BATU.id;
  const openTripMalangArticle =
    ARTICLE_OPEN_TRIP_BROMO_START_KOTA_MALANG[language] || ARTICLE_OPEN_TRIP_BROMO_START_KOTA_MALANG.id;
  const openTripSurabayaArticle =
    ARTICLE_OPEN_TRIP_BROMO_START_SURABAYA[language] || ARTICLE_OPEN_TRIP_BROMO_START_SURABAYA.id;
  const gubugklakahTripArticle =
    ARTICLE_PRIVATE_TRIP_BROMO_START_GUBUGKLAKAH[language] || ARTICLE_PRIVATE_TRIP_BROMO_START_GUBUGKLAKAH.id;
  const tosariTripArticle =
    ARTICLE_PRIVATE_TRIP_BROMO_START_TOSARI[language] || ARTICLE_PRIVATE_TRIP_BROMO_START_TOSARI.id;
  const sukapuraTripArticle =
    ARTICLE_PRIVATE_TRIP_BROMO_START_SUKAPURA[language] || ARTICLE_PRIVATE_TRIP_BROMO_START_SUKAPURA.id;
  const batuTripArticle =
    ARTICLE_PRIVATE_TRIP_BROMO_START_BATU[language] || ARTICLE_PRIVATE_TRIP_BROMO_START_BATU.id;
  const surabayaTripArticle =
    ARTICLE_PRIVATE_TRIP_BROMO_START_SURABAYA[language] || ARTICLE_PRIVATE_TRIP_BROMO_START_SURABAYA.id;
  const activeTieredTripArticle = isOpenTripBatuArticle
    ? openTripBatuArticle
    : isOpenTripMalangArticle
    ? openTripMalangArticle
    : isOpenTripSurabayaArticle
    ? openTripSurabayaArticle
    : surabayaTripArticle;
  const malangTripArticle =
    ARTICLE_OPEN_TRIP_BROMO_START_MALANG[language] || ARTICLE_OPEN_TRIP_BROMO_START_MALANG.id;
  const activeFlatJeepArticle = isGubugklakahTripArticle
    ? gubugklakahTripArticle
    : isTosariTripArticle
    ? tosariTripArticle
    : isSukapuraTripArticle
    ? sukapuraTripArticle
    : isBatuTripArticle
    ? batuTripArticle
    : malangTripArticle;
  const gateJeepArticle =
    ARTICLE_PINTU_MASUK_HARGA_JEEP[language] || ARTICLE_PINTU_MASUK_HARGA_JEEP.id;
  const trainArticle = ARTICLE_NAIK_KERETA_BROMO[language] || ARTICLE_NAIK_KERETA_BROMO.id;
  const horseArticle = ARTICLE_BIAYA_KUDA_BROMO[language] || ARTICLE_BIAYA_KUDA_BROMO.id;
  const seasonArticle = ARTICLE_WAKTU_TERBAIK_BROMO[language] || ARTICLE_WAKTU_TERBAIK_BROMO.id;
  const jeepArticle = ARTICLE_KAPASITAS_JEEP_BROMO[language] || ARTICLE_KAPASITAS_JEEP_BROMO.id;
  const gearArticle = ARTICLE_BARANG_WAJIB_BROMO[language] || ARTICLE_BARANG_WAJIB_BROMO.id;

  const currentTitle = isOpenTripBatuArticle
    ? openTripBatuArticle.title
    : isOpenTripMalangArticle
    ? openTripMalangArticle.title
    : isOpenTripSurabayaArticle
    ? openTripSurabayaArticle.title
    : isGubugklakahTripArticle
    ? gubugklakahTripArticle.title
    : isTosariTripArticle
    ? tosariTripArticle.title
    : isSukapuraTripArticle
    ? sukapuraTripArticle.title
    : isBatuTripArticle
    ? batuTripArticle.title
    : isSurabayaTripArticle
    ? surabayaTripArticle.title
    : isMalangTripArticle
    ? malangTripArticle.title
    : isGateJeepArticle
    ? gateJeepArticle.title
    : isTrainArticle
    ? trainArticle.title
    : isHorseArticle
    ? horseArticle.title
    : isSeasonArticle
    ? seasonArticle.title
    : isJeepArticle
    ? jeepArticle.title
    : gearArticle.title;
  const currentCategory = isOpenTripBatuArticle
    ? openTripBatuArticle.categoryLabel
    : isOpenTripMalangArticle
    ? openTripMalangArticle.categoryLabel
    : isOpenTripSurabayaArticle
    ? openTripSurabayaArticle.categoryLabel
    : isGubugklakahTripArticle
    ? gubugklakahTripArticle.categoryLabel
    : isTosariTripArticle
    ? tosariTripArticle.categoryLabel
    : isSukapuraTripArticle
    ? sukapuraTripArticle.categoryLabel
    : isBatuTripArticle
    ? batuTripArticle.categoryLabel
    : isSurabayaTripArticle
    ? surabayaTripArticle.categoryLabel
    : isMalangTripArticle
    ? malangTripArticle.categoryLabel
    : isGateJeepArticle
    ? gateJeepArticle.categoryLabel
    : isTrainArticle
    ? trainArticle.categoryLabel
    : isHorseArticle
    ? horseArticle.categoryLabel
    : isSeasonArticle
    ? seasonArticle.categoryLabel
    : isJeepArticle
    ? jeepArticle.categoryLabel
    : gearArticle.categoryLabel;

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

  const renderBottomShareSection = (heading: string) => (
    <div className="p-5 sm:p-6 bg-gradient-to-br from-slate-50 via-white to-[#F2F8FF] border border-slate-200/90 rounded-2xl shadow-xs">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 sm:gap-5">
        <div className="flex flex-col items-center md:flex-row md:items-center gap-3 text-center md:text-left min-w-0">
          <div className="w-10 h-10 rounded-xl bg-[#EAF6FF] text-[#0996f5] border border-[#0996f5]/15 flex items-center justify-center shrink-0">
            <Share2 className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <h4 className="text-[15px] sm:text-base font-extrabold text-[#0B1220] leading-snug text-balance">
              {heading}
            </h4>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              {language === 'en'
                ? 'Send instantly via WhatsApp, Facebook, or copy link'
                : language === 'zh'
                ? '一键转发至 WhatsApp、Facebook 或复制链接'
                : 'Bagikan lewat WhatsApp, Facebook, atau salin tautan'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2.5 w-full md:w-auto md:flex md:items-center md:gap-2.5 md:shrink-0">
          <button
            type="button"
            onClick={() => handleShareSocial('wa')}
            className="col-span-2 md:col-span-1 min-h-[44px] md:min-h-[40px] px-4 py-2.5 bg-[#25D366] hover:bg-[#1fb858] active:scale-[0.98] text-white text-xs sm:text-[13px] font-bold rounded-xl shadow-xs shadow-[#25D366]/20 transition-all flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 shrink-0" />
            <span>WhatsApp</span>
          </button>

          <button
            type="button"
            onClick={() => handleShareSocial('fb')}
            className="min-h-[44px] md:min-h-[40px] px-4 py-2.5 bg-[#1877F2] hover:bg-[#1567d3] active:scale-[0.98] text-white text-xs sm:text-[13px] font-bold rounded-xl shadow-xs shadow-[#1877F2]/20 transition-all flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
          >
            <Share2 className="w-4 h-4 shrink-0" />
            <span>Facebook</span>
          </button>

          <button
            type="button"
            onClick={handleCopyLink}
            className={`min-h-[44px] md:min-h-[40px] px-4 py-2.5 text-xs sm:text-[13px] font-bold rounded-xl border transition-all active:scale-[0.98] flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer ${
              copiedShare
                ? 'bg-emerald-50 border-emerald-300 text-emerald-700'
                : 'bg-white border-slate-200/90 text-slate-800 hover:bg-slate-100 hover:border-slate-300 shadow-2xs'
            }`}
          >
            {copiedShare ? (
              <>
                <Check className="w-4 h-4 shrink-0 text-emerald-600" />
                <span>{language === 'en' ? 'Copied!' : language === 'zh' ? '已复制!' : 'Tersalin!'}</span>
              </>
            ) : (
              <>
                <Link2 className="w-4 h-4 shrink-0 text-slate-500" />
                <span>{language === 'en' ? 'Copy Link' : language === 'zh' ? '复制链接' : 'Salin Link'}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );

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
              src={
                isOpenTripBatuArticle
                  ? openTripBatuArticle.heroImage
                  : isOpenTripMalangArticle
                  ? openTripMalangArticle.heroImage
                  : isOpenTripSurabayaArticle
                  ? openTripSurabayaArticle.heroImage
                  : isGubugklakahTripArticle
                  ? gubugklakahTripArticle.heroImage
                  : isTosariTripArticle
                  ? tosariTripArticle.heroImage
                  : isSukapuraTripArticle
                  ? sukapuraTripArticle.heroImage
                  : isBatuTripArticle
                  ? batuTripArticle.heroImage
                  : isSurabayaTripArticle
                  ? surabayaTripArticle.heroImage
                  : isMalangTripArticle
                  ? malangTripArticle.heroImage
                  : isGateJeepArticle
                  ? gateJeepArticle.heroImage
                  : isTrainArticle
                  ? trainArticle.heroImage
                  : isHorseArticle
                  ? horseArticle.heroImage
                  : isSeasonArticle || isJeepArticle
                  ? imgCustom
                  : gearArticle.heroImage
              }
              alt={currentTitle}
              className="w-full h-full object-cover object-center filter brightness-90 hover:scale-103 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/90 via-[#0B1220]/40 to-transparent"></div>
            
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-200 mb-2 font-medium">
                <span className="flex items-center gap-1 bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-md">
                  <Calendar className="w-3.5 h-3.5 text-[#FFF700]" />
                  {isOpenTripBatuArticle ? openTripBatuArticle.publishDate : isOpenTripMalangArticle ? openTripMalangArticle.publishDate : isOpenTripSurabayaArticle ? openTripSurabayaArticle.publishDate : isGubugklakahTripArticle ? gubugklakahTripArticle.publishDate : isTosariTripArticle ? tosariTripArticle.publishDate : isSukapuraTripArticle ? sukapuraTripArticle.publishDate : isBatuTripArticle ? batuTripArticle.publishDate : isSurabayaTripArticle ? surabayaTripArticle.publishDate : isMalangTripArticle ? malangTripArticle.publishDate : isGateJeepArticle ? gateJeepArticle.publishDate : isTrainArticle ? trainArticle.publishDate : isHorseArticle ? horseArticle.publishDate : isSeasonArticle ? seasonArticle.publishDate : isJeepArticle ? jeepArticle.publishDate : gearArticle.publishDate}
                </span>
                <span className="flex items-center gap-1 bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-md">
                  <Clock className="w-3.5 h-3.5 text-[#FFF700]" />
                  {isOpenTripBatuArticle ? openTripBatuArticle.readTime : isOpenTripMalangArticle ? openTripMalangArticle.readTime : isOpenTripSurabayaArticle ? openTripSurabayaArticle.readTime : isGubugklakahTripArticle ? gubugklakahTripArticle.readTime : isTosariTripArticle ? tosariTripArticle.readTime : isSukapuraTripArticle ? sukapuraTripArticle.readTime : isBatuTripArticle ? batuTripArticle.readTime : isSurabayaTripArticle ? surabayaTripArticle.readTime : isMalangTripArticle ? malangTripArticle.readTime : isGateJeepArticle ? gateJeepArticle.readTime : isTrainArticle ? trainArticle.readTime : isHorseArticle ? horseArticle.readTime : isSeasonArticle ? seasonArticle.readTime : isJeepArticle ? jeepArticle.readTime : gearArticle.readTime}
                </span>
                <span className="flex items-center gap-1 bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-md">
                  <User className="w-3.5 h-3.5 text-[#FFF700]" />
                  {isOpenTripBatuArticle ? openTripBatuArticle.author : isOpenTripMalangArticle ? openTripMalangArticle.author : isOpenTripSurabayaArticle ? openTripSurabayaArticle.author : isGubugklakahTripArticle ? gubugklakahTripArticle.author : isTosariTripArticle ? tosariTripArticle.author : isSukapuraTripArticle ? sukapuraTripArticle.author : isBatuTripArticle ? batuTripArticle.author : isSurabayaTripArticle ? surabayaTripArticle.author : isMalangTripArticle ? malangTripArticle.author : isGateJeepArticle ? gateJeepArticle.author : isTrainArticle ? trainArticle.author : isHorseArticle ? horseArticle.author : isSeasonArticle ? seasonArticle.author : isJeepArticle ? jeepArticle.author : gearArticle.author}
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
              {isOpenTripBatuArticle ? openTripBatuArticle.metaDescription : isOpenTripMalangArticle ? openTripMalangArticle.metaDescription : isOpenTripSurabayaArticle ? openTripSurabayaArticle.metaDescription : isGubugklakahTripArticle ? gubugklakahTripArticle.metaDescription : isTosariTripArticle ? tosariTripArticle.metaDescription : isSukapuraTripArticle ? sukapuraTripArticle.metaDescription : isBatuTripArticle ? batuTripArticle.metaDescription : isSurabayaTripArticle ? surabayaTripArticle.metaDescription : isMalangTripArticle ? malangTripArticle.metaDescription : isGateJeepArticle ? gateJeepArticle.metaDescription : isTrainArticle ? trainArticle.metaDescription : isHorseArticle ? horseArticle.metaDescription : isSeasonArticle ? seasonArticle.metaDescription : isJeepArticle ? jeepArticle.metaDescription : gearArticle.metaDescription}
            </p>

            {/* Author & Share row */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 mt-6 border-t border-slate-100 text-xs">
              <div className="flex items-center gap-2 text-slate-600 font-medium">
                <User className="w-4 h-4 text-[#0996f5]" />
                <span>{language === 'en' ? 'By' : language === 'zh' ? '撰写:' : 'Penulis:'} <strong>{isOpenTripBatuArticle ? openTripBatuArticle.author : isOpenTripMalangArticle ? openTripMalangArticle.author : isOpenTripSurabayaArticle ? openTripSurabayaArticle.author : isGubugklakahTripArticle ? gubugklakahTripArticle.author : isTosariTripArticle ? tosariTripArticle.author : isSukapuraTripArticle ? sukapuraTripArticle.author : isBatuTripArticle ? batuTripArticle.author : isSurabayaTripArticle ? surabayaTripArticle.author : isMalangTripArticle ? malangTripArticle.author : isGateJeepArticle ? gateJeepArticle.author : isTrainArticle ? trainArticle.author : isHorseArticle ? horseArticle.author : isSeasonArticle ? seasonArticle.author : isJeepArticle ? jeepArticle.author : gearArticle.author}</strong></span>
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
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#128C7E] rounded-xl font-bold transition-all cursor-pointer whitespace-nowrap shrink-0"
                  title="Share to WhatsApp"
                >
                  <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>WhatsApp</span>
                </button>

                {/* Facebook */}
                <button
                  type="button"
                  onClick={() => handleShareSocial('fb')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1877F2]/10 hover:bg-[#1877F2]/20 text-[#1877F2] rounded-xl font-bold transition-all cursor-pointer whitespace-nowrap shrink-0"
                  title="Share to Facebook"
                >
                  <Share2 className="w-3.5 h-3.5 shrink-0" />
                  <span>Facebook</span>
                </button>

                {/* Twitter / X */}
                <button
                  type="button"
                  onClick={() => handleShareSocial('x')}
                  className="inline-flex items-center gap-1 px-3 py-1.5 bg-slate-900/10 hover:bg-slate-900/20 text-[#0B1220] rounded-xl font-bold transition-all cursor-pointer whitespace-nowrap shrink-0"
                  title="Share to X"
                >
                  <span>𝕏</span>
                </button>

                {/* Copy Link */}
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-[#EAF6FF] text-slate-700 hover:text-[#0996f5] rounded-xl transition-colors cursor-pointer font-extrabold whitespace-nowrap shrink-0"
                  title="Copy link"
                >
                  {copiedShare ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="text-emerald-600 font-bold">{language === 'en' ? 'Copied!' : language === 'zh' ? '已复制!' : 'Tersalin!'}</span>
                    </>
                  ) : (
                    <>
                      <Link2 className="w-3.5 h-3.5 shrink-0" />
                      <span>{language === 'en' ? 'Copy Link' : language === 'zh' ? '复制链接' : 'Salin Link'}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* ARTICLE BODY CONTENT */}
          {isSurabayaTripArticle || isOpenTripSurabayaArticle || isOpenTripMalangArticle || isOpenTripBatuArticle ? (
            /* PRIVATE TRIP SURABAYA / OPEN TRIP SURABAYA / OPEN TRIP MALANG / OPEN TRIP BATU HARGA 2026 ARTICLE BODY */
            <div className="p-6 sm:p-10 lg:p-12 space-y-10">
              {/* Intro Paragraphs */}
              <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
                {activeTieredTripArticle.introduction.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {/* Embedded Animated Convoy Bromo Jeep (Full Width, No Card/Border) */}
              <div className="-mx-6 sm:-mx-10 lg:-mx-12 overflow-hidden">
                <div className="w-full aspect-[5/2] sm:aspect-[4/1] overflow-hidden">
                  <iframe
                    src={activeTieredTripArticle.animationEmbedUrl}
                    title={activeTieredTripArticle.animationCaption}
                    className="w-full h-full border-0 block bg-transparent"
                    scrolling="no"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* 1. HARGA & PAKET 2026 */}
              <div className="space-y-5">
                <div>
                  <h2 className="text-xl sm:text-2xl font-black font-serif text-[#102a56]">
                    {activeTieredTripArticle.pricingSectionTitle}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    {activeTieredTripArticle.pricingSectionSubtitle}
                  </p>
                </div>

                {/* Main Price Banner */}
                <div className="rounded-3xl border-2 border-[#0996f5]/40 bg-gradient-to-br from-[#102a56] via-[#0B1F42] to-[#0996f5] text-white p-6 sm:p-8 shadow-xl relative overflow-hidden space-y-5">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="space-y-2.5">
                      <span className="inline-block px-3 py-1 rounded-lg bg-[#fff700] text-[#102a56] text-[11px] font-black uppercase tracking-wider">
                        {activeTieredTripArticle.heroBadge}
                      </span>
                      <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                        <span className="text-sm sm:text-base font-bold text-sky-200">
                          {activeTieredTripArticle.startingPriceLabel}
                        </span>
                        <span className="text-3xl sm:text-4xl font-black text-[#fff700] tracking-tight">
                          {activeTieredTripArticle.startingPriceValue}
                        </span>
                        <span className="text-xs sm:text-sm font-extrabold text-sky-100">
                          {activeTieredTripArticle.startingPriceUnit}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-sky-100 font-medium">
                        💰 {activeTieredTripArticle.seasonNote}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => onOpenBooking(activeTieredTripArticle.bookingPackageId)}
                      className="w-full md:w-auto px-6 py-3.5 bg-[#fff700] hover:bg-amber-300 text-[#102a56] text-xs sm:text-sm font-black rounded-2xl shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2 shrink-0 group"
                    >
                      <span>
                        {isOpenTripBatuArticle
                          ? language === 'en'
                            ? 'Open Batu Open Trip Calculator'
                            : language === 'zh'
                            ? '打开巴图市拼团计算器'
                            : 'Buka Kalkulator Open Trip Batu'
                          : isOpenTripMalangArticle
                          ? language === 'en'
                            ? 'Open Malang Open Trip Calculator'
                            : language === 'zh'
                            ? '打开玛琅拼团计算器'
                            : 'Buka Kalkulator Open Trip Malang'
                          : isOpenTripSurabayaArticle
                          ? language === 'en'
                            ? 'Open Surabaya Open Trip Calculator'
                            : language === 'zh'
                            ? '打开泗水拼团计算器'
                            : 'Buka Kalkulator Open Trip Surabaya'
                          : language === 'en'
                          ? 'Open Private Surabaya Calculator'
                          : language === 'zh'
                          ? '打开泗水私人团计算器'
                          : 'Buka Kalkulator Private Start Surabaya'}
                      </span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  {/* Highlight: Documentation Included */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xs space-y-1">
                    <div className="text-xs sm:text-sm font-black text-[#fff700]">
                      {activeTieredTripArticle.docIncludedBannerTitle}
                    </div>
                    <p className="text-xs sm:text-sm text-white/95 font-medium leading-relaxed">
                      {activeTieredTripArticle.docIncludedBannerDesc}
                    </p>
                  </div>
                </div>

                {/* Tiered Pricing Grid */}
                <div className="p-5 sm:p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-[#102a56]">
                      {activeTieredTripArticle.tiersTableTitle}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                      {activeTieredTripArticle.tiersTableSubtitle}
                    </p>
                  </div>

                  <div
                    className={`grid grid-cols-1 sm:grid-cols-2 ${
                      activeTieredTripArticle.pricingTiers.length === 4 ? '' : 'lg:grid-cols-3'
                    } gap-2.5`}
                  >
                    {activeTieredTripArticle.pricingTiers.map((tier, idx) => (
                      <div
                        key={idx}
                        className={`p-3.5 rounded-2xl border flex items-center justify-between gap-2 transition-colors ${
                          tier.highlight
                            ? 'bg-[#EAF6FF] border-[#0996f5]/50 shadow-2xs'
                            : 'bg-white border-slate-200/90'
                        }`}
                      >
                        <div>
                          <div className="text-xs sm:text-sm font-black text-[#102a56]">
                            {tier.pax}
                          </div>
                          {tier.badge && (
                            <div className="text-[10px] font-extrabold text-[#0996f5] mt-0.5">
                              {tier.badge}
                            </div>
                          )}
                        </div>
                        <div className="text-xs sm:text-sm font-black text-emerald-700 text-right shrink-0">
                          {tier.pricePerPax}
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="text-xs text-slate-500 font-medium leading-relaxed pt-1">
                    ℹ️ {activeTieredTripArticle.highSeasonNote}
                  </p>
                </div>

                {/* Documentation (Included) & Add-on Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeTieredTripArticle.addons.map((addon, idx) => (
                    <div
                      key={idx}
                      className={`p-5 rounded-2xl border transition-colors flex items-start gap-4 shadow-2xs ${
                        addon.included
                          ? 'bg-emerald-50/70 border-emerald-200'
                          : 'bg-slate-50 border-slate-200 hover:border-[#0996f5]/50'
                      }`}
                    >
                      <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-2xl shrink-0 shadow-2xs">
                        {addon.symbol}
                      </div>
                      <div className="space-y-1 flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h3 className="text-sm sm:text-base font-black text-[#102a56]">
                            {addon.label}
                          </h3>
                          <span
                            className={`px-2.5 py-0.5 rounded-lg text-xs sm:text-sm font-black ${
                              addon.included
                                ? 'bg-emerald-600 text-white'
                                : 'bg-[#EAF6FF] text-[#0996f5]'
                            }`}
                          >
                            {addon.price}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {addon.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 2. FASILITAS (INCLUDE & EXCLUDE) */}
              <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-black font-serif text-[#102a56]">
                  {activeTieredTripArticle.facilitiesSectionTitle}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Include Card */}
                  <div className="p-6 rounded-3xl bg-emerald-50/70 border-2 border-emerald-200 space-y-3.5 shadow-2xs">
                    <h3 className="text-base sm:text-lg font-black text-emerald-950">
                      {activeTieredTripArticle.includeTitle}
                    </h3>
                    <ul className="space-y-2.5">
                      {activeTieredTripArticle.includeItems.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium leading-relaxed"
                        >
                          <span className="shrink-0 mt-0.5">✅</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Exclude Card */}
                  <div className="p-6 rounded-3xl bg-rose-50/70 border-2 border-rose-200 space-y-3.5 shadow-2xs">
                    <h3 className="text-base sm:text-lg font-black text-rose-950">
                      {activeTieredTripArticle.excludeTitle}
                    </h3>
                    <ul className="space-y-2.5">
                      {activeTieredTripArticle.excludeItems.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium leading-relaxed"
                        >
                          <span className="shrink-0 mt-0.5">❌</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* 3. ITINERARY LENGKAP (URUT) */}
              <div className="space-y-5">
                <div>
                  <h2 className="text-xl sm:text-2xl font-black font-serif text-[#102a56]">
                    {activeTieredTripArticle.itinerarySectionTitle}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    {activeTieredTripArticle.itinerarySectionSubtitle}
                  </p>
                </div>

                <div className="space-y-3.5">
                  {activeTieredTripArticle.itinerarySteps.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col sm:flex-row sm:items-start gap-4 relative overflow-hidden"
                    >
                      <div className="flex items-center gap-3 sm:w-48 shrink-0">
                        <span className="w-10 h-10 rounded-xl bg-[#EAF6FF] border border-[#0996f5]/20 flex items-center justify-center text-xl shrink-0">
                          {step.symbol}
                        </span>
                        <span className="text-xs sm:text-sm font-black text-[#0996f5] whitespace-nowrap">
                          {step.time}
                        </span>
                      </div>
                      <div className="space-y-1 flex-1 border-t sm:border-t-0 sm:border-l border-slate-100 pt-3 sm:pt-0 sm:pl-4">
                        <h3 className="text-sm sm:text-base font-black text-[#102a56]">
                          {step.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. LOKASI PENJEMPUTAN RESMI SURABAYA */}
              <div className="p-6 sm:p-7 rounded-3xl bg-[#EAF6FF]/75 border-2 border-[#0996f5]/30 space-y-4 shadow-2xs">
                <h2 className="text-lg sm:text-xl font-black font-serif text-[#102a56]">
                  {activeTieredTripArticle.pickupSectionTitle}
                </h2>
                <p className="text-sm sm:text-base text-slate-700 font-semibold leading-relaxed">
                  {activeTieredTripArticle.pickupLead}
                </p>
                <div className="space-y-2.5">
                  <div className="text-xs font-black uppercase tracking-wider text-[#0996f5]">
                    {activeTieredTripArticle.pickupPopularTitle}
                  </div>
                  <ul className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {activeTieredTripArticle.pickupPoints.map((pt, idx) => (
                      <li
                        key={idx}
                        className="p-4 rounded-2xl bg-white border border-sky-200/80 text-xs sm:text-sm font-bold text-[#102a56] flex items-start gap-2.5 shadow-2xs"
                      >
                        <span className="shrink-0">📍</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 5. PERLENGKAPAN WAJIB (SUHU 2°C - 10°C) */}
              <div className="space-y-4">
                <div>
                  <h2 className="text-xl sm:text-2xl font-black font-serif text-[#102a56]">
                    {activeTieredTripArticle.gearSectionTitle}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    {activeTieredTripArticle.gearSectionSubtitle}
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {activeTieredTripArticle.gearItems.map((gear, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3.5 shadow-2xs"
                    >
                      <span className="w-11 h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-2xl shrink-0 shadow-2xs">
                        {gear.symbol}
                      </span>
                      <div className="space-y-1">
                        <h3 className="text-sm sm:text-base font-black text-[#102a56]">
                          {gear.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {gear.reason}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 6. TIPS TAMBAHAN */}
              <div className="p-6 sm:p-7 rounded-3xl bg-[#fff700]/15 border-2 border-[#fff700] space-y-2 shadow-2xs">
                <h2 className="text-base sm:text-lg font-black text-[#102a56]">
                  {activeTieredTripArticle.extraTipTitle}
                </h2>
                <p className="text-xs sm:text-sm sm:leading-relaxed text-slate-800 font-medium">
                  {activeTieredTripArticle.extraTipContent}
                </p>
              </div>

              {/* Conclusion & Direct Start Booking CTA */}
              <div className="p-6 sm:p-8 bg-[#EAF6FF] border border-[#0996f5]/30 rounded-3xl space-y-4">
                <h3 className="text-xl font-extrabold text-[#0B1220]">
                  {isOpenTripBatuArticle
                    ? language === 'en'
                      ? 'Ready to Book Your Open Trip Start Batu City?'
                      : language === 'zh'
                      ? '准备好预订您的巴图市出发拼团行程了吗？'
                      : 'Siap Hitung & Booking Open Trip Start Kota Batu?'
                    : isOpenTripMalangArticle
                    ? language === 'en'
                      ? 'Ready to Book Your Open Trip Start Malang City?'
                      : language === 'zh'
                      ? '准备好预订您的玛琅市区出发拼团行程了吗？'
                      : 'Siap Hitung & Booking Open Trip Start Kota Malang?'
                    : isOpenTripSurabayaArticle
                    ? language === 'en'
                      ? 'Ready to Book Your Open Trip Start Surabaya City?'
                      : language === 'zh'
                      ? '准备好预订您的泗水市区出发拼团行程了吗？'
                      : 'Siap Hitung & Booking Open Trip Start Kota Surabaya?'
                    : language === 'en'
                    ? 'Ready to Calculate Your Private Trip Start Surabaya?'
                    : language === 'zh'
                    ? '准备好计算您的泗水出发私人团行程了吗？'
                    : 'Siap Hitung & Booking Private Trip Start Surabaya?'}
                </h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {activeTieredTripArticle.conclusion}
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="button"
                    onClick={() => onOpenBooking(activeTieredTripArticle.bookingPackageId)}
                    className="w-full sm:w-auto px-6 py-3.5 bg-[#0996f5] hover:bg-[#071A2B] text-white text-xs sm:text-sm font-black rounded-2xl shadow-lg shadow-[#0996f5]/25 transition-all cursor-pointer flex items-center justify-center gap-2 group"
                  >
                    <span>{activeTieredTripArticle.ctaButton}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <a
                    href={
                      isOpenTripBatuArticle
                        ? 'https://wa.me/6281222290318?text=Halo%20Admin%20WisataBromo.co,%20saya%20mau%20booking%20Open%20Trip%20Bromo%20Start%20Kota%20Batu%20(Rp325.000/org%20Reguler%20/%20Rp375.000/org%20Plus%20Foto%20DSLR).'
                        : isOpenTripMalangArticle
                        ? 'https://wa.me/6281222290318?text=Halo%20Admin%20WisataBromo.co,%20saya%20mau%20booking%20Open%20Trip%20Bromo%20Start%20Kota%20Malang%20(Rp275.000/org%20Reguler%20/%20Rp325.000/org%20Plus%20Foto%20DSLR).'
                        : isOpenTripSurabayaArticle
                        ? 'https://wa.me/6281222290318?text=Halo%20Admin%20WisataBromo.co,%20saya%20mau%20booking%20Open%20Trip%20Bromo%20Start%20Kota%20Surabaya%20(Rp400.000/org%20Weekend%20via%20Tosari%20/%20Rp750.000/org%20Harian%20via%20Malang,%20Include%20Dokumentasi).'
                        : 'https://wa.me/6281222290318?text=Halo%20Admin%20WisataBromo.co,%20saya%20mau%20booking%20Private%20Trip%20Bromo%20Start%20Surabaya%20(Include%20Dokumentasi).'
                    }
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
              {renderBottomShareSection(
                isOpenTripBatuArticle
                  ? language === 'en'
                    ? 'Share this Open Trip Start Batu City guide'
                    : language === 'zh'
                    ? '分享这份巴图市出发拼团指南'
                    : 'Bagikan panduan Open Trip Start Kota Batu ini'
                  : isOpenTripMalangArticle
                  ? language === 'en'
                    ? 'Share this Open Trip Start Malang City guide'
                    : language === 'zh'
                    ? '分享这份玛琅市区出发拼团指南'
                    : 'Bagikan panduan Open Trip Start Kota Malang ini'
                  : isOpenTripSurabayaArticle
                  ? language === 'en'
                    ? 'Share this Open Trip Start Surabaya City guide'
                    : language === 'zh'
                    ? '分享这份泗水市区出发拼团指南'
                    : 'Bagikan panduan Open Trip Start Kota Surabaya ini'
                  : language === 'en'
                  ? 'Share this Private Trip Start Surabaya guide'
                  : language === 'zh'
                  ? '分享这份泗水出发私人团指南'
                  : 'Bagikan panduan Private Trip Start Surabaya ini'
              )}

              {/* Article Tags */}
              <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center gap-2 text-xs text-slate-600">
                <span className="font-bold text-slate-400 mr-1">Tags:</span>
                {activeTieredTripArticle.tags?.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 bg-slate-100 rounded-lg text-slate-600 font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ) : isMalangTripArticle || isBatuTripArticle || isSukapuraTripArticle || isTosariTripArticle || isGubugklakahTripArticle ? (
            /* PRIVATE TRIP BROMO START KOTA MALANG / KOTA BATU / SUKAPURA / TOSARI / GUBUGKLAKAH HARGA 2026 ARTICLE BODY */
            <div className="p-6 sm:p-10 lg:p-12 space-y-10">
              {/* Intro Paragraphs */}
              <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
                {activeFlatJeepArticle.introduction.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {/* Embedded Animated Convoy Bromo Jeep (Full Width, No Card/Border) */}
              <div className="-mx-6 sm:-mx-10 lg:-mx-12 overflow-hidden">
                <div className="w-full aspect-[5/2] sm:aspect-[4/1] overflow-hidden">
                  <iframe
                    src={activeFlatJeepArticle.animationEmbedUrl}
                    title={activeFlatJeepArticle.animationCaption}
                    className="w-full h-full border-0 block bg-transparent"
                    scrolling="no"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* 1. HARGA & PAKET 2026 */}
              <div className="space-y-5">
                <div>
                  <h2 className="text-xl sm:text-2xl font-black font-serif text-[#102a56]">
                    {activeFlatJeepArticle.pricingSectionTitle}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    {activeFlatJeepArticle.pricingSectionSubtitle}
                  </p>
                </div>

                {/* Main Promo Price Card */}
                <div className="rounded-3xl border-2 border-[#0996f5]/40 bg-gradient-to-br from-[#102a56] via-[#0B1F42] to-[#0996f5] text-white p-6 sm:p-8 shadow-xl relative overflow-hidden space-y-5">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="space-y-2.5">
                      <span className="inline-block px-3 py-1 rounded-lg bg-[#fff700] text-[#102a56] text-[11px] font-black uppercase tracking-wider">
                        {activeFlatJeepArticle.savingsBadge}
                      </span>
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <span className="text-lg sm:text-xl font-bold text-slate-300 line-through decoration-rose-400 decoration-2">
                          {activeFlatJeepArticle.normalPrice}
                        </span>
                        <span className="text-3xl sm:text-4xl font-black text-[#fff700] tracking-tight">
                          {activeFlatJeepArticle.promoPrice}
                        </span>
                        <span className="text-sm sm:text-base font-extrabold text-sky-100">
                          {activeFlatJeepArticle.priceUnitLabel}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-sky-100 font-medium">
                        💰 {activeFlatJeepArticle.seasonNote}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => onOpenBooking(activeFlatJeepArticle.bookingPackageId)}
                      className="w-full md:w-auto px-6 py-3.5 bg-[#fff700] hover:bg-amber-300 text-[#102a56] text-xs sm:text-sm font-black rounded-2xl shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2 shrink-0 group"
                    >
                      <span>
                        {isGubugklakahTripArticle
                          ? language === 'en'
                            ? 'Open Private Gubugklakah Calculator'
                            : language === 'zh'
                            ? '打开 Gubugklakah 私人团计算器'
                            : 'Buka Kalkulator Private Start Gubugklakah'
                          : isTosariTripArticle
                          ? language === 'en'
                            ? 'Open Private Tosari Calculator'
                            : language === 'zh'
                            ? '打开 Tosari 私人团计算器'
                            : 'Buka Kalkulator Private Start Tosari'
                          : isSukapuraTripArticle
                          ? language === 'en'
                            ? 'Open Private Sukapura Calculator'
                            : language === 'zh'
                            ? '打开 Sukapura 私人团计算器'
                            : 'Buka Kalkulator Private Start Sukapura'
                          : isBatuTripArticle
                          ? language === 'en'
                            ? 'Open Private Batu Calculator'
                            : language === 'zh'
                            ? '打开巴图市私人团计算器'
                            : 'Buka Kalkulator Private Start Kota Batu'
                          : language === 'en'
                          ? 'Open Private Malang Calculator'
                          : language === 'zh'
                          ? '打开玛琅私人团计算器'
                          : 'Buka Kalkulator Private Start Malang'}
                      </span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  {/* Highlight: 1-6 Peserta Flat Per Jeep / Per Grup */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xs space-y-1">
                    <div className="text-xs sm:text-sm font-black text-[#fff700]">
                      {activeFlatJeepArticle.groupPriceTitle}
                    </div>
                    <p className="text-xs sm:text-sm text-white/95 font-medium leading-relaxed">
                      {activeFlatJeepArticle.groupPriceNote}
                    </p>
                  </div>
                </div>

                {/* Optional Add-ons (Dokumentasi & Drone) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeFlatJeepArticle.addons.map((addon, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#0996f5]/50 transition-colors flex items-start gap-4 shadow-2xs"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-2xl shrink-0 shadow-2xs">
                        {addon.symbol}
                      </div>
                      <div className="space-y-1 flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h3 className="text-sm sm:text-base font-black text-[#102a56]">
                            {addon.label}
                          </h3>
                          <span className="px-2.5 py-0.5 rounded-lg bg-[#EAF6FF] text-[#0996f5] text-xs sm:text-sm font-black">
                            {addon.price}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {addon.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 2. FASILITAS (INCLUDE & EXCLUDE) */}
              <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-black font-serif text-[#102a56]">
                  {activeFlatJeepArticle.facilitiesSectionTitle}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Include Card */}
                  <div className="p-6 rounded-3xl bg-emerald-50/70 border-2 border-emerald-200 space-y-3.5 shadow-2xs">
                    <h3 className="text-base sm:text-lg font-black text-emerald-950">
                      {activeFlatJeepArticle.includeTitle}
                    </h3>
                    <ul className="space-y-2.5">
                      {activeFlatJeepArticle.includeItems.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium leading-relaxed"
                        >
                          <span className="shrink-0 mt-0.5">✅</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Exclude Card */}
                  <div className="p-6 rounded-3xl bg-rose-50/70 border-2 border-rose-200 space-y-3.5 shadow-2xs">
                    <h3 className="text-base sm:text-lg font-black text-rose-950">
                      {activeFlatJeepArticle.excludeTitle}
                    </h3>
                    <ul className="space-y-2.5">
                      {activeFlatJeepArticle.excludeItems.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium leading-relaxed"
                        >
                          <span className="shrink-0 mt-0.5">❌</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* 3. ITINERARY LENGKAP (URUT) */}
              <div className="space-y-5">
                <div>
                  <h2 className="text-xl sm:text-2xl font-black font-serif text-[#102a56]">
                    {activeFlatJeepArticle.itinerarySectionTitle}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    {activeFlatJeepArticle.itinerarySectionSubtitle}
                  </p>
                </div>

                <div className="space-y-3.5">
                  {activeFlatJeepArticle.itinerarySteps.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col sm:flex-row sm:items-start gap-4 relative overflow-hidden"
                    >
                      <div className="flex items-center gap-3 sm:w-48 shrink-0">
                        <span className="w-10 h-10 rounded-xl bg-[#EAF6FF] border border-[#0996f5]/20 flex items-center justify-center text-xl shrink-0">
                          {step.symbol}
                        </span>
                        <span className="text-xs sm:text-sm font-black text-[#0996f5] whitespace-nowrap">
                          {step.time}
                        </span>
                      </div>
                      <div className="space-y-1 flex-1 border-t sm:border-t-0 sm:border-l border-slate-100 pt-3 sm:pt-0 sm:pl-4">
                        <h3 className="text-sm sm:text-base font-black text-[#102a56]">
                          {step.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. LOKASI PENJEMPUTAN RESMI */}
              <div className="p-6 sm:p-7 rounded-3xl bg-[#EAF6FF]/75 border-2 border-[#0996f5]/30 space-y-4 shadow-2xs">
                <h2 className="text-lg sm:text-xl font-black font-serif text-[#102a56]">
                  {activeFlatJeepArticle.pickupSectionTitle}
                </h2>
                <p className="text-sm sm:text-base text-slate-700 font-semibold leading-relaxed">
                  {activeFlatJeepArticle.pickupLead}
                </p>
                <div className="space-y-2.5">
                  <div className="text-xs font-black uppercase tracking-wider text-[#0996f5]">
                    {activeFlatJeepArticle.pickupPopularTitle}
                  </div>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {activeFlatJeepArticle.pickupPoints.map((pt, idx) => (
                      <li
                        key={idx}
                        className="p-4 rounded-2xl bg-white border border-sky-200/80 text-xs sm:text-sm font-bold text-[#102a56] flex items-start gap-2.5 shadow-2xs"
                      >
                        <span className="shrink-0">📍</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 5. PERLENGKAPAN WAJIB (SUHU 2°C - 10°C) */}
              <div className="space-y-4">
                <div>
                  <h2 className="text-xl sm:text-2xl font-black font-serif text-[#102a56]">
                    {activeFlatJeepArticle.gearSectionTitle}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    {activeFlatJeepArticle.gearSectionSubtitle}
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {activeFlatJeepArticle.gearItems.map((gear, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3.5 shadow-2xs"
                    >
                      <span className="w-11 h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-2xl shrink-0 shadow-2xs">
                        {gear.symbol}
                      </span>
                      <div className="space-y-1">
                        <h3 className="text-sm sm:text-base font-black text-[#102a56]">
                          {gear.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {gear.reason}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 6. TIPS TAMBAHAN */}
              <div className="p-6 sm:p-7 rounded-3xl bg-[#fff700]/15 border-2 border-[#fff700] space-y-2 shadow-2xs">
                <h2 className="text-base sm:text-lg font-black text-[#102a56]">
                  {activeFlatJeepArticle.extraTipTitle}
                </h2>
                <p className="text-xs sm:text-sm sm:leading-relaxed text-slate-800 font-medium">
                  {activeFlatJeepArticle.extraTipContent}
                </p>
              </div>

              {/* Conclusion & Direct Private Booking CTA */}
              <div className="p-6 sm:p-8 bg-[#EAF6FF] border border-[#0996f5]/30 rounded-3xl space-y-4">
                <h3 className="text-xl font-extrabold text-[#0B1220]">
                  {isGubugklakahTripArticle
                    ? language === 'en'
                      ? 'Ready to Calculate Your Private Trip Start Gubugklakah Malang?'
                      : language === 'zh'
                      ? '准备好计算您的玛琅县 Gubugklakah 出发私人团行程了吗？'
                      : 'Siap Hitung & Booking Private Trip Start Gubugklakah Kab. Malang?'
                    : isTosariTripArticle
                    ? language === 'en'
                      ? 'Ready to Calculate Your Private Trip Start Tosari Pasuruan?'
                      : language === 'zh'
                      ? '准备好计算您的岩望 Tosari 出发私人团行程了吗？'
                      : 'Siap Hitung & Booking Private Trip Start Tosari Pasuruan?'
                    : isSukapuraTripArticle
                    ? language === 'en'
                      ? 'Ready to Calculate Your Private Trip Start Sukapura Probolinggo?'
                      : language === 'zh'
                      ? '准备好计算您的庞越 Sukapura 出发私人团行程了吗？'
                      : 'Siap Hitung & Booking Private Trip Start Sukapura Probolinggo?'
                    : isBatuTripArticle
                    ? language === 'en'
                      ? 'Ready to Calculate Your Private Trip Start Batu City?'
                      : language === 'zh'
                      ? '准备好计算您的巴图市出发私人团行程了吗？'
                      : 'Siap Hitung & Booking Private Trip Start Kota Batu?'
                    : language === 'en'
                    ? 'Ready to Calculate Your Private Trip Start Malang City?'
                    : language === 'zh'
                    ? '准备好计算您的玛琅市区出发私人团行程了吗？'
                    : 'Siap Hitung & Booking Private Trip Start Kota Malang?'}
                </h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {activeFlatJeepArticle.conclusion}
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="button"
                    onClick={() => onOpenBooking(activeFlatJeepArticle.bookingPackageId)}
                    className="w-full sm:w-auto px-6 py-3.5 bg-[#0996f5] hover:bg-[#071A2B] text-white text-xs sm:text-sm font-black rounded-2xl shadow-lg shadow-[#0996f5]/25 transition-all cursor-pointer flex items-center justify-center gap-2 group"
                  >
                    <span>{activeFlatJeepArticle.ctaButton}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <a
                    href={
                      isGubugklakahTripArticle
                        ? 'https://wa.me/6281222290318?text=Halo%20Admin%20WisataBromo.co,%20saya%20mau%20booking%20Private%20Trip%20Bromo%20Start%20Gubugklakah%20Kab.%20Malang%20(Rp1.400.000%20per%20jeep%20untuk%201-6%20peserta).'
                        : isTosariTripArticle
                        ? 'https://wa.me/6281222290318?text=Halo%20Admin%20WisataBromo.co,%20saya%20mau%20booking%20Private%20Trip%20Bromo%20Start%20Tosari%20Pasuruan%20(Rp950.000%20per%20jeep%20untuk%201-6%20peserta).'
                        : isSukapuraTripArticle
                        ? 'https://wa.me/6281222290318?text=Halo%20Admin%20WisataBromo.co,%20saya%20mau%20booking%20Private%20Trip%20Bromo%20Start%20Sukapura%20Probolinggo%20(Rp1.000.000%20per%20jeep%20untuk%201-6%20peserta).'
                        : isBatuTripArticle
                        ? 'https://wa.me/6281222290318?text=Halo%20Admin%20WisataBromo.co,%20saya%20mau%20booking%20Private%20Trip%20Bromo%20Start%20Kota%20Batu%20(Rp1.800.000%20per%20jeep%20untuk%201-6%20peserta).'
                        : 'https://wa.me/6281222290318?text=Halo%20Admin%20WisataBromo.co,%20saya%20mau%20booking%20Private%20Trip%20Bromo%20Start%20Kota%20Malang%20(Harga%20Promo%20Rp1.700.000%20per%20jeep%20untuk%201-6%20peserta).'
                    }
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
              {renderBottomShareSection(
                isGubugklakahTripArticle
                  ? language === 'en'
                    ? 'Share this Private Trip Start Gubugklakah Malang guide'
                    : language === 'zh'
                    ? '分享这份玛琅县 Gubugklakah 出发私人团指南'
                    : 'Bagikan panduan Private Trip Start Gubugklakah Kab. Malang ini'
                  : isTosariTripArticle
                  ? language === 'en'
                    ? 'Share this Private Trip Start Tosari Pasuruan guide'
                    : language === 'zh'
                    ? '分享这份岩望 Tosari 出发私人团指南'
                    : 'Bagikan panduan Private Trip Start Tosari Pasuruan ini'
                  : isSukapuraTripArticle
                  ? language === 'en'
                    ? 'Share this Private Trip Start Sukapura Probolinggo guide'
                    : language === 'zh'
                    ? '分享这份庞越 Sukapura 出发私人团指南'
                    : 'Bagikan panduan Private Trip Start Sukapura Probolinggo ini'
                  : isBatuTripArticle
                  ? language === 'en'
                    ? 'Share this Private Trip Start Batu City guide'
                    : language === 'zh'
                    ? '分享这份巴图市出发私人团指南'
                    : 'Bagikan panduan Private Trip Start Kota Batu ini'
                  : language === 'en'
                  ? 'Share this Private Trip Start Malang City guide'
                  : language === 'zh'
                  ? '分享这份玛琅市区出发私人团指南'
                  : 'Bagikan panduan Private Trip Start Kota Malang ini'
              )}

              {/* Article Tags */}
              <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center gap-2 text-xs text-slate-600">
                <span className="font-bold text-slate-400 mr-1">Tags:</span>
                {activeFlatJeepArticle.tags?.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 bg-slate-100 rounded-lg text-slate-600 font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ) : isGateJeepArticle ? (
            /* PINTU MASUK BROMO & HARGA SEWA JEEP 2026 ARTICLE BODY */
            <div className="p-6 sm:p-10 lg:p-12 space-y-10">
              {/* Intro Paragraphs */}
              <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
                {gateJeepArticle.introduction.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {/* Embedded Interactive Animated Route Map to 3 Entrances of Mt. Bromo (Full Width) */}
              <div className="-mx-6 sm:-mx-10 lg:-mx-12 rounded-none border-y-2 border-x-0 border-[#0996f5]/25 overflow-hidden bg-white shadow-md">
                <div className="px-6 sm:px-10 lg:px-12 py-4 bg-gradient-to-r from-[#102a56] to-[#0996f5] text-white">
                  <h2 className="text-base sm:text-lg font-black tracking-tight">
                    {gateJeepArticle.mapTitle}
                  </h2>
                </div>

                <div className="w-full bg-[#e0e0e0] aspect-[1274/520] relative overflow-hidden">
                  <iframe
                    src={gateJeepArticle.mapEmbedUrl}
                    title={gateJeepArticle.mapTitle}
                    className="w-full h-full border-0 block"
                    loading="lazy"
                  />
                </div>

                {/* Map Legend & Caption */}
                <div className="px-6 sm:px-10 lg:px-12 py-4 bg-slate-50 border-t border-slate-200 space-y-2.5">
                  <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-slate-700">
                    <span className="inline-flex items-center gap-2">
                      <span className="w-5 h-1.5 rounded-full bg-[#1e6fd9] inline-block" />
                      <span>{gateJeepArticle.mapLegend.sukapura}</span>
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <span className="w-5 h-1.5 rounded-full bg-[#0aa5a5] inline-block" />
                      <span>{gateJeepArticle.mapLegend.tosari}</span>
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <span className="w-5 h-1.5 rounded-full bg-[#7048e8] inline-block" />
                      <span>{gateJeepArticle.mapLegend.gubugklakah}</span>
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-[#4f7a55] inline-block" />
                      <span>{gateJeepArticle.mapLegend.bromo}</span>
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {gateJeepArticle.mapCaption}
                  </p>
                </div>
              </div>

              {/* 3 MAIN ENTRANCE ROUTES */}
              <div className="space-y-5">
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-black font-serif text-[#102a56]">
                    {gateJeepArticle.gatesSectionTitle}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    {gateJeepArticle.gatesSectionSubtitle}
                  </p>
                </div>

                <div className="space-y-5">
                  {gateJeepArticle.gates.map((gate) => (
                    <div
                      key={gate.id}
                      id={gate.id}
                      className={`p-5 sm:p-7 rounded-3xl border-2 ${gate.borderClass} ${gate.bgClass} shadow-2xs space-y-4`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span
                          className="px-3 py-1 text-white text-[10px] sm:text-[11px] font-black uppercase tracking-wider rounded-lg"
                          style={{ backgroundColor: gate.colorHex }}
                        >
                          {gate.badge}
                        </span>
                        <span className="px-3 py-1 bg-white/95 border border-slate-200 text-[#102a56] text-xs font-extrabold rounded-lg">
                          {gate.gatePoint}
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl lg:text-2xl font-serif font-black text-[#102a56]">
                        {gate.title}
                      </h3>

                      <p className="text-slate-700 text-sm sm:text-base leading-relaxed bg-white/85 p-4 rounded-2xl border border-white">
                        {gate.description}
                      </p>

                      <ul className="space-y-2 pl-1">
                        {gate.highlights.map((hl, hlIdx) => (
                          <li
                            key={hlIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 leading-relaxed"
                          >
                            <span
                              className="w-5 h-5 rounded-full text-white flex items-center justify-center shrink-0 mt-0.5"
                              style={{ backgroundColor: gate.colorHex }}
                            >
                              <Check className="w-3 h-3 stroke-[3]" />
                            </span>
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* JEEP RENTAL PRICE CARDS BY STARTING POINT (WITH STRIKETHROUGH PROMO) */}
              <div className="space-y-5">
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-black font-serif text-[#102a56]">
                    {gateJeepArticle.pricesSectionTitle}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    {gateJeepArticle.pricesSectionSubtitle}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
                  {gateJeepArticle.jeepPrices.map((item) => {
                    const headerBg =
                      item.accentTheme === 'blue'
                        ? 'bg-[#1e6fd9]'
                        : item.accentTheme === 'teal'
                        ? 'bg-[#0aa5a5]'
                        : 'bg-[#7048e8]';
                    const borderCol =
                      item.accentTheme === 'blue'
                        ? 'border-[#1e6fd9]/40'
                        : item.accentTheme === 'teal'
                        ? 'border-[#0aa5a5]/40'
                        : 'border-[#7048e8]/40';

                    return (
                      <div
                        key={item.id}
                        className={`rounded-3xl border-2 ${borderCol} bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between`}
                      >
                        <div>
                          <div className={`${headerBg} p-5 text-white space-y-1.5`}>
                            <span className="inline-block px-2.5 py-0.5 bg-[#fff700] text-[#102a56] text-[10px] font-black uppercase tracking-wider rounded-md">
                              💰 {item.savingsBadge}
                            </span>
                            <h3 className="text-lg sm:text-xl font-black font-serif">
                              {item.startPoint}
                            </h3>
                            <p className="text-xs text-white/90 font-medium">{item.routeLabel}</p>
                          </div>

                          <div className="p-5 space-y-3">
                            <div className="space-y-1">
                              <div className="text-xs font-bold text-slate-400">
                                {language === 'en'
                                  ? 'Normal price'
                                  : language === 'zh'
                                  ? '原价'
                                  : 'Harga normal'}
                              </div>
                              <div className="text-base font-bold text-slate-400 line-through decoration-rose-500 decoration-2">
                                {item.normalPrice}
                              </div>
                            </div>

                            <div className="p-3.5 rounded-2xl bg-[#fff700]/20 border border-amber-300 space-y-0.5">
                              <div className="text-[11px] font-black uppercase tracking-wider text-amber-800">
                                {language === 'en'
                                  ? 'Promo Price'
                                  : language === 'zh'
                                  ? '优惠价'
                                  : 'Harga Promo'}
                              </div>
                              <div className="text-2xl font-black text-[#102a56]">
                                {item.promoPrice}
                              </div>
                              <div className="text-xs font-bold text-slate-600">{item.unitNote}</div>
                            </div>
                          </div>
                        </div>

                        <div className="px-5 pb-5">
                          <button
                            type="button"
                            onClick={() => onOpenBooking()}
                            className={`w-full py-2.5 px-4 rounded-xl text-xs font-black text-white ${headerBg} hover:opacity-90 transition-opacity cursor-pointer flex items-center justify-center gap-1.5`}
                          >
                            <span>
                              {language === 'en'
                                ? 'Book Jeep'
                                : language === 'zh'
                                ? '立即预订'
                                : 'Pesan Jeep Ini'}
                            </span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* QUICK PRICE EXPLANATION BOX */}
              <div className="p-6 sm:p-7 rounded-3xl bg-[#fff700]/15 border-2 border-[#fff700] space-y-4 shadow-xs">
                <h2 className="text-lg sm:text-xl font-black font-serif text-[#102a56]">
                  {gateJeepArticle.priceExplanation.title}
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {gateJeepArticle.priceExplanation.points.map((pt, idx) => (
                    <li
                      key={idx}
                      className="p-3.5 bg-white rounded-2xl border border-amber-200/90 text-xs sm:text-sm font-bold text-[#102a56] leading-relaxed shadow-2xs"
                    >
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>

              {/* TIPS & WARNINGS */}
              <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-black font-serif text-[#102a56]">
                  {gateJeepArticle.tipsTitle}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {gateJeepArticle.tips.map((tip, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-amber-50/90 border-2 border-amber-300 space-y-2 shadow-2xs"
                    >
                      <h3 className="text-sm sm:text-base font-black text-[#102a56]">
                        {tip.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {tip.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Conclusion & Booking CTA */}
              <div className="p-6 sm:p-8 bg-[#EAF6FF] border border-[#0996f5]/30 rounded-3xl space-y-4">
                <h3 className="text-xl font-extrabold text-[#0B1220]">
                  {language === 'en'
                    ? 'Ready to Choose Your Bromo Entrance & Book Your Jeep?'
                    : language === 'zh'
                    ? '准备好选定入口并预订布罗莫吉普车了吗？'
                    : 'Sudah Tentukan Pintu Masuk Bromo Pilihan Anda?'}
                </h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {gateJeepArticle.conclusion}
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="button"
                    onClick={() => onOpenBooking()}
                    className="w-full sm:w-auto px-6 py-3.5 bg-[#0996f5] hover:bg-[#071A2B] text-white text-xs sm:text-sm font-black rounded-2xl shadow-lg shadow-[#0996f5]/25 transition-all cursor-pointer flex items-center justify-center gap-2 group"
                  >
                    <span>{gateJeepArticle.ctaButton}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <a
                    href="https://wa.me/6281222290318?text=Halo%20Admin%20WisataBromo.co,%20saya%20mau%20pesan%20Sewa%20Jeep%20Bromo%20(Start%20Sukapura%20/%20Tosari%20/%20Gubugklakah)."
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
              {renderBottomShareSection(
                language === 'en'
                  ? 'Share this Bromo entrance & jeep price guide'
                  : language === 'zh'
                  ? '分享这份布罗莫入口与吉普车价格指南'
                  : 'Bagikan panduan pintu masuk & harga sewa jeep Bromo ini'
              )}

              {/* Article Tags */}
              <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center gap-2 text-xs text-slate-600">
                <span className="font-bold text-slate-400 mr-1">Tags:</span>
                {gateJeepArticle.tags?.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-slate-100 hover:bg-[#EAF6FF] text-slate-700 hover:text-[#0996f5] rounded-xl font-medium transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ) : isTrainArticle ? (
            /* NAIK KERETA KE BROMO — OPEN TRIP MALANG SURABAYA ARTICLE BODY */
            <div className="p-6 sm:p-10 lg:p-12 space-y-10">
              {/* Intro Paragraphs */}
              <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
                {trainArticle.introduction.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {/* Embedded Interactive Java Rail Route Map (Full Width) */}
              <div className="-mx-6 sm:-mx-10 lg:-mx-12 rounded-none border-y-2 border-x-0 border-[#0996f5]/25 overflow-hidden bg-white shadow-md">
                <div className="px-6 sm:px-10 lg:px-12 py-4 bg-gradient-to-r from-[#102a56] to-[#0996f5] text-white">
                  <h2 className="text-base sm:text-lg font-black tracking-tight">
                    {trainArticle.mapTitle}
                  </h2>
                </div>

                <div className="w-full bg-[#e0e0e0] aspect-[1274/470] relative overflow-hidden">
                  <iframe
                    src={trainArticle.mapEmbedUrl}
                    title={trainArticle.mapTitle}
                    className="w-full h-full border-0 block"
                    loading="lazy"
                  />
                </div>

                {/* Map Legend & Caption */}
                <div className="px-6 sm:px-10 lg:px-12 py-4 bg-slate-50 border-t border-slate-200 space-y-2.5">
                  <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-slate-700">
                    <span className="inline-flex items-center gap-2">
                      <span className="w-5 h-1.5 rounded-full bg-[#1e6fd9] inline-block" />
                      <span>{trainArticle.mapLegend.surabaya}</span>
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <span className="w-5 h-1.5 rounded-full bg-[#3aa0f0] inline-block" />
                      <span>{trainArticle.mapLegend.malang}</span>
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <span className="w-5 h-1.5 rounded-full bg-[#4f7a55] inline-block" />
                      <span>{trainArticle.mapLegend.bromo}</span>
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {trainArticle.mapCaption}
                  </p>
                </div>
              </div>

              {/* TWO SEPARATED OPEN TRIP PACKAGES (PAKET A vs PAKET B) */}
              <div className="space-y-5">
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-black font-serif text-[#102a56]">
                    {trainArticle.packagesSectionTitle}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    {trainArticle.packagesSectionSubtitle}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                  {[trainArticle.packageA, trainArticle.packageB].map((pkg, pIdx) => {
                    const isBlue = pkg.accentTheme === 'blue';
                    return (
                      <div
                        key={pIdx}
                        className={`rounded-3xl border-2 overflow-hidden flex flex-col justify-between shadow-sm ${
                          isBlue
                            ? 'border-[#0996f5] bg-[#EAF6FF]/40'
                            : 'border-[#102a56] bg-slate-50'
                        }`}
                      >
                        <div>
                          {/* Package Header */}
                          <div
                            className={`p-5 sm:p-6 text-white ${
                              isBlue ? 'bg-[#0996f5]' : 'bg-[#102a56]'
                            }`}
                          >
                            <span className="inline-block px-3 py-1 bg-[#fff700] text-[#102a56] text-[10px] sm:text-[11px] font-black uppercase tracking-wider rounded-lg mb-2.5">
                              {pkg.badge}
                            </span>
                            <h3 className="text-xl sm:text-2xl font-black font-serif leading-snug">
                              {pkg.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-white/90 font-semibold mt-1">
                              {pkg.schedule} · {pkg.pickupTime}
                            </p>
                          </div>

                          {/* Package Details */}
                          <div className="p-5 sm:p-6 space-y-4">
                            {/* Key Specs */}
                            <div className="bg-white rounded-2xl p-4 border border-slate-200/90 space-y-2 text-xs sm:text-sm">
                              <div>
                                <span className="font-extrabold text-[#102a56]">
                                  {language === 'en' ? 'Pickup Point: ' : language === 'zh' ? '接站点：' : 'Titik Jemput: '}
                                </span>
                                <span className="text-slate-700">{pkg.pickupPoint}</span>
                              </div>
                              <div>
                                <span className="font-extrabold text-[#102a56]">
                                  {language === 'en' ? 'Pickup Time: ' : language === 'zh' ? '接站时间：' : 'Jam Jemput: '}
                                </span>
                                <span className="text-slate-700 font-bold">{pkg.pickupTime}</span>
                              </div>
                              <div>
                                <span className="font-extrabold text-[#102a56]">
                                  {language === 'en' ? 'Transport: ' : language === 'zh' ? '交通方式：' : 'Transportasi: '}
                                </span>
                                <span className="text-slate-700">{pkg.transport}</span>
                              </div>
                            </div>

                            {/* Price Box */}
                            <div className="bg-white rounded-2xl p-4 border-2 border-[#fff700] space-y-2 shadow-2xs">
                              <div className="text-xs font-black uppercase tracking-wider text-[#102a56]">
                                💰 {language === 'en' ? 'Open Trip Price' : language === 'zh' ? '拼团价格' : 'Harga Paket'}
                              </div>
                              {pkg.priceLines.map((pl, plIdx) => (
                                <div
                                  key={plIdx}
                                  className="flex items-center justify-between gap-2 text-xs sm:text-sm py-1 border-b last:border-b-0 border-slate-100"
                                >
                                  <span className="text-slate-700 font-semibold">{pl.label}</span>
                                  <span className="font-black text-[#0996f5] text-sm sm:text-base whitespace-nowrap">
                                    {pl.price}
                                  </span>
                                </div>
                              ))}
                            </div>

                            {/* Highlights */}
                            <ul className="space-y-2">
                              {pkg.highlights.map((hl, hlIdx) => (
                                <li
                                  key={hlIdx}
                                  className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed"
                                >
                                  <span
                                    className={`w-5 h-5 rounded-full text-white flex items-center justify-center shrink-0 mt-0.5 ${
                                      isBlue ? 'bg-[#0996f5]' : 'bg-[#102a56]'
                                    }`}
                                  >
                                    <Check className="w-3 h-3 stroke-[3]" />
                                  </span>
                                  <span>{hl}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Direct CTA inside Card */}
                        <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                          <button
                            type="button"
                            onClick={() => onOpenBooking()}
                            className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-black text-white transition-all cursor-pointer flex items-center justify-center gap-2 ${
                              isBlue
                                ? 'bg-[#0996f5] hover:bg-[#0779c8]'
                                : 'bg-[#102a56] hover:bg-[#0B1220]'
                            }`}
                          >
                            <span>
                              {isBlue
                                ? language === 'en'
                                  ? 'Book Start Malang'
                                  : language === 'zh'
                                  ? '预订玛琅出发团'
                                  : 'Booking Paket A (Start Malang)'
                                : language === 'en'
                                ? 'Book Start Surabaya'
                                : language === 'zh'
                                ? '预订泗水出发团'
                                : 'Booking Paket B (Start Surabaya)'}
                            </span>
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* COST CLARIFICATION BOX (💰 PENEGASAN BIAYA) */}
              <div className="p-6 sm:p-7 rounded-3xl bg-[#fff700]/15 border-2 border-[#fff700] space-y-5 shadow-xs">
                <h2 className="text-lg sm:text-xl font-black font-serif text-[#102a56]">
                  {trainArticle.costClarification.title}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-2xl p-4 border border-emerald-200 space-y-2.5">
                    <div className="text-xs font-black uppercase tracking-wider text-emerald-700">
                      ✅ {trainArticle.costClarification.includedTitle}
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                      {trainArticle.costClarification.includedItems.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white rounded-2xl p-4 border border-rose-200 space-y-2.5">
                    <div className="text-xs font-black uppercase tracking-wider text-rose-700">
                      ❌ {trainArticle.costClarification.excludedTitle}
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                      {trainArticle.costClarification.excludedItems.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <p className="text-xs sm:text-sm font-extrabold text-[#102a56] bg-white/90 p-3.5 rounded-xl border border-amber-300 leading-relaxed">
                  💰 {trainArticle.costClarification.summaryNote}
                </p>
              </div>

              {/* TRAIN FARE REFERENCE TABLES (🚂 ACUAN HARGA KERETA) */}
              <div className="space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-black font-serif text-[#102a56]">
                    {trainArticle.trainFaresSectionTitle}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    {trainArticle.trainFaresSectionSubtitle}
                  </p>
                </div>

                {/* Table 1: To Malang */}
                <div className="bg-white border-2 border-[#0996f5]/25 rounded-3xl overflow-hidden shadow-sm">
                  <div className="px-5 py-4 bg-[#EAF6FF] border-b border-[#0996f5]/20">
                    <h3 className="text-base sm:text-lg font-black text-[#102a56]">
                      {trainArticle.toMalangTitle}
                    </h3>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-50 border-b border-slate-200 text-[11px] sm:text-xs font-black uppercase tracking-wider text-slate-500">
                          <th className="py-3.5 px-4 sm:px-5">{trainArticle.tableHeaders.route}</th>
                          <th className="py-3.5 px-4 sm:px-5">{trainArticle.tableHeaders.train}</th>
                          <th className="py-3.5 px-4 sm:px-5">{trainArticle.tableHeaders.schedule}</th>
                          <th className="py-3.5 px-4 sm:px-5">{trainArticle.tableHeaders.price}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                        {trainArticle.toMalangRows.map((row, idx) => (
                          <tr key={idx} className="hover:bg-[#EAF6FF]/40 transition-colors">
                            <td className="py-4 px-4 sm:px-5 font-extrabold text-[#102a56] whitespace-nowrap">
                              {row.origin}
                            </td>
                            <td className="py-4 px-4 sm:px-5 font-bold text-[#0996f5]">
                              {row.trainName}
                            </td>
                            <td className="py-4 px-4 sm:px-5 text-slate-600 leading-relaxed">
                              {row.scheduleNote}
                            </td>
                            <td className="py-4 px-4 sm:px-5">
                              <span className="inline-block px-3 py-1 bg-[#fff700]/40 border border-amber-300 text-[#102a56] font-black rounded-lg">
                                {row.fare}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Table 2: To Surabaya */}
                <div className="bg-white border-2 border-[#102a56]/25 rounded-3xl overflow-hidden shadow-sm">
                  <div className="px-5 py-4 bg-slate-100 border-b border-slate-200">
                    <h3 className="text-base sm:text-lg font-black text-[#102a56]">
                      {trainArticle.toSurabayaTitle}
                    </h3>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-50 border-b border-slate-200 text-[11px] sm:text-xs font-black uppercase tracking-wider text-slate-500">
                          <th className="py-3.5 px-4 sm:px-5">{trainArticle.tableHeaders.route}</th>
                          <th className="py-3.5 px-4 sm:px-5">{trainArticle.tableHeaders.train}</th>
                          <th className="py-3.5 px-4 sm:px-5">{trainArticle.tableHeaders.schedule}</th>
                          <th className="py-3.5 px-4 sm:px-5">{trainArticle.tableHeaders.price}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                        {trainArticle.toSurabayaRows.map((row, idx) => (
                          <tr key={idx} className="hover:bg-slate-50 transition-colors">
                            <td className="py-4 px-4 sm:px-5 font-extrabold text-[#102a56] whitespace-nowrap">
                              {row.origin}
                            </td>
                            <td className="py-4 px-4 sm:px-5 font-bold text-[#102a56]">
                              {row.trainName}
                            </td>
                            <td className="py-4 px-4 sm:px-5 text-slate-600 leading-relaxed">
                              {row.scheduleNote}
                            </td>
                            <td className="py-4 px-4 sm:px-5">
                              <span className="inline-block px-3 py-1 bg-[#fff700]/40 border border-amber-300 text-[#102a56] font-black rounded-lg">
                                {row.fare}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* WARNINGS & ESSENTIAL TIPS (⚠️) */}
              <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-black font-serif text-[#102a56]">
                  {trainArticle.tipsTitle}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {trainArticle.tips.map((tip, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-amber-50/90 border-2 border-amber-300 space-y-2 shadow-2xs"
                    >
                      <h3 className="text-sm sm:text-base font-black text-[#102a56]">
                        {tip.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {tip.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Conclusion & Booking CTA */}
              <div className="p-6 sm:p-8 bg-[#EAF6FF] border border-[#0996f5]/30 rounded-3xl space-y-4">
                <h3 className="text-xl font-extrabold text-[#0B1220]">
                  {language === 'en'
                    ? 'Ready to Take the Train & Join Our Bromo Open Trip?'
                    : language === 'zh'
                    ? '准备好乘火车衔接布罗莫拼团了吗？'
                    : 'Siap Naik Kereta & Gabung Open Trip Bromo?'}
                </h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {trainArticle.conclusion}
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="button"
                    onClick={() => onOpenBooking()}
                    className="w-full sm:w-auto px-6 py-3.5 bg-[#0996f5] hover:bg-[#071A2B] text-white text-xs sm:text-sm font-black rounded-2xl shadow-lg shadow-[#0996f5]/25 transition-all cursor-pointer flex items-center justify-center gap-2 group"
                  >
                    <span>{trainArticle.ctaButton}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <a
                    href="https://wa.me/6281222290318?text=Halo%20Admin%20WisataBromo.co,%20saya%20mau%20booking%20Open%20Trip%20Bromo%20Start%20Malang%20/%20Surabaya%20(naik%20kereta)."
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
              {renderBottomShareSection(
                language === 'en'
                  ? 'Share this Bromo train & open trip guide'
                  : language === 'zh'
                  ? '分享这份布罗莫火车与拼团指南'
                  : 'Bagikan panduan naik kereta & open trip Bromo ini'
              )}

              {/* Article Tags */}
              <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center gap-2 text-xs text-slate-600">
                <span className="font-bold text-slate-400 mr-1">Tags:</span>
                {trainArticle.tags?.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-slate-100 hover:bg-[#EAF6FF] text-slate-700 hover:text-[#0996f5] rounded-xl font-medium transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ) : isHorseArticle ? (
            /* BIAYA SEWA KUDA DI BROMO ARTICLE BODY (WITH CUTE CUSTOM VECTORS) */
            <div className="p-6 sm:p-10 lg:p-12 space-y-10">
              {/* Cute Welcome Intro Banner + Intro Paragraphs */}
              <div className="space-y-5">
                <div className="p-4 sm:p-5 bg-gradient-to-r from-[#EAF6FF] via-white to-[#FEFCE8] border border-[#0996f5]/25 rounded-2xl flex items-center gap-4 shadow-2xs">
                  <HorseCuteVector type="pony-mascot" className="w-16 h-16 shrink-0 drop-shadow-xs" />
                  <div className="space-y-1">
                    <span className="inline-block text-[11px] font-black uppercase tracking-wider text-[#0996f5]">
                      {language === 'en'
                        ? 'PONY GUIDE • MOUNT BROMO'
                        : language === 'zh'
                        ? '布罗莫小马向导'
                        : 'PANDUAN SAHABAT KUDA BROMO'}
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-[#102a56] leading-snug">
                      {language === 'en'
                        ? 'Complete rates, routes & friendly tips so you can ride happily across the Sea of Sand!'
                        : language === 'zh'
                        ? '最新骑马价格、路线与实用小贴士，助您轻松畅游布罗莫沙海！'
                        : 'Panduan jujur tarif terbaru, rute & trik tawar ramah biar naik kuda di Lautan Pasir makin happy dan bebas drama!'}
                    </p>
                  </div>
                </div>

                <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
                  {horseArticle.introduction.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </div>

              {/* Quick Price Summary Table */}
              <div className="bg-white border-2 border-[#0996f5]/20 rounded-3xl overflow-hidden shadow-sm">
                <div className="p-5 sm:p-6 bg-gradient-to-r from-[#0996f5]/10 via-[#EAF6FF] to-white border-b border-slate-200/80 flex items-center gap-4">
                  <HorseCuteVector type="coin-piggy" className="w-14 h-14 shrink-0" />
                  <div>
                    <h2 className="text-lg sm:text-xl font-black font-serif text-[#102a56]">
                      {horseArticle.priceTableTitle}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                      {horseArticle.priceTableSubtitle}
                    </p>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200 text-[11px] sm:text-xs font-black uppercase tracking-wider text-slate-500">
                        <th className="py-3.5 px-4 sm:px-5">{horseArticle.priceTableHeaders.service}</th>
                        <th className="py-3.5 px-4 sm:px-5">{horseArticle.priceTableHeaders.route}</th>
                        <th className="py-3.5 px-4 sm:px-5">{horseArticle.priceTableHeaders.price}</th>
                        <th className="py-3.5 px-4 sm:px-5 hidden md:table-cell">{horseArticle.priceTableHeaders.notes}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                      {horseArticle.priceTableRows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-[#EAF6FF]/40 transition-colors">
                          <td className="py-4 px-4 sm:px-5 font-extrabold text-[#102a56]">{row.service}</td>
                          <td className="py-4 px-4 sm:px-5 text-slate-600">{row.route}</td>
                          <td className="py-4 px-4 sm:px-5">
                            <span className="inline-block px-3 py-1 bg-[#fff700]/40 border border-amber-300 text-[#102a56] font-black rounded-lg whitespace-nowrap">
                              {row.priceRange}
                            </span>
                          </td>
                          <td className="py-4 px-4 sm:px-5 text-slate-600 hidden md:table-cell leading-relaxed">
                            {row.notes}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Inline Photo 1 */}
              <figure className="rounded-3xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50">
                <img
                  src={horseArticle.inlineImage1}
                  alt={horseArticle.inlineImage1Caption}
                  className="w-full max-h-[420px] object-cover object-center"
                  loading="lazy"
                />
                <figcaption className="px-5 py-3 text-xs sm:text-sm text-slate-600 italic flex items-center gap-2 bg-white border-t border-slate-100">
                  <Camera className="w-4 h-4 text-[#0996f5] shrink-0" />
                  <span>{horseArticle.inlineImage1Caption}</span>
                </figcaption>
              </figure>

              {/* 7 Points with Cute Custom Vectors */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 pb-2 border-b border-slate-200">
                  <HorseCuteVector type="horse-route" className="w-12 h-12 shrink-0" />
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-black font-serif text-[#102a56]">
                    {horseArticle.pointsSectionTitle}
                  </h2>
                </div>

                <div className="space-y-6">
                  {horseArticle.points.map((point) => (
                    <div
                      key={point.id}
                      id={point.id}
                      className={`p-5 sm:p-7 rounded-3xl border ${point.accentBorder} ${point.accentBg} shadow-2xs hover:shadow-md transition-all space-y-4`}
                    >
                      {/* Point Header with Cute Vector Mascot */}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white border border-white/90 shadow-sm flex items-center justify-center shrink-0 p-1.5">
                          <HorseCuteVector type={point.vectorType} className="w-full h-full" />
                        </div>

                        <div className="flex-1 space-y-1.5">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="px-2.5 py-0.5 bg-[#102a56] text-white text-[10px] sm:text-[11px] font-black uppercase tracking-wider rounded-md">
                              {point.numberBadge}
                            </span>
                            {point.priceHighlight && (
                              <span className="px-2.5 py-0.5 bg-[#fff700] text-[#102a56] text-[11px] font-black rounded-md border border-amber-300/80">
                                {point.priceHighlight}
                              </span>
                            )}
                          </div>

                          <h3 className="text-lg sm:text-xl lg:text-2xl font-serif font-black text-[#102a56] leading-snug">
                            {point.title}
                          </h3>
                          <p className="text-xs sm:text-sm font-bold text-[#0996f5]">
                            {point.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-slate-700 text-sm sm:text-base leading-relaxed bg-white/80 p-4 rounded-2xl border border-white">
                        {point.description}
                      </p>

                      {/* Bullet Points */}
                      {point.bulletPoints && point.bulletPoints.length > 0 && (
                        <ul className="space-y-2.5 pl-1">
                          {point.bulletPoints.map((bp, bpIdx) => (
                            <li
                              key={bpIdx}
                              className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed"
                            >
                              <span className="w-5 h-5 rounded-full bg-[#0996f5] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                                <Check className="w-3 h-3 stroke-[3]" />
                              </span>
                              <span>{bp}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Cute Tip Callout */}
                      <div className="p-3.5 sm:p-4 bg-white/95 border-l-4 border-[#fff700] rounded-r-2xl flex items-start gap-3 shadow-2xs">
                        <HorseCuteVector type="tip-star" className="w-8 h-8 shrink-0" />
                        <div className="text-xs sm:text-sm text-slate-800 leading-relaxed pt-0.5">
                          <span className="font-extrabold text-[#102a56] mr-1.5">
                            {language === 'en' ? 'Cute Tip:' : language === 'zh' ? '贴心小提示：' : 'Tips Manis:'}
                          </span>
                          {point.tip}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inline Photo 2 */}
              <figure className="rounded-3xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50">
                <img
                  src={horseArticle.inlineImage2}
                  alt={horseArticle.inlineImage2Caption}
                  className="w-full max-h-[420px] object-cover object-center"
                  loading="lazy"
                />
                <figcaption className="px-5 py-3 text-xs sm:text-sm text-slate-600 italic flex items-center gap-2 bg-white border-t border-slate-100">
                  <Camera className="w-4 h-4 text-[#0996f5] shrink-0" />
                  <span>{horseArticle.inlineImage2Caption}</span>
                </figcaption>
              </figure>

              {/* Pro Tip Box with Cute Pony Mascot */}
              <div className="p-6 sm:p-8 bg-[#fff700]/15 border-2 border-[#fff700] rounded-3xl shadow-sm flex flex-col sm:flex-row items-start gap-4">
                <HorseCuteVector type="pony-mascot" className="w-16 h-16 shrink-0" />
                <div className="space-y-2.5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#fff700] text-black font-black rounded-full text-xs uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5 text-black" />
                    <span>{horseArticle.proTipBox.title}</span>
                  </div>
                  <p className="text-sm sm:text-base text-slate-900 font-medium leading-relaxed">
                    {horseArticle.proTipBox.content}
                  </p>
                </div>
              </div>

              {/* Conclusion & Booking CTA */}
              <div className="p-6 sm:p-8 bg-[#EAF6FF] border border-[#0996f5]/30 rounded-3xl space-y-4">
                <h3 className="text-xl font-extrabold text-[#0B1220]">
                  {language === 'en'
                    ? 'Ready to Ride Across Mount Bromo’s Sea of Sand?'
                    : language === 'zh'
                    ? '准备好在布罗莫沙海体验骑马了吗？'
                    : 'Siap Merasakan Serunya Naik Kuda di Lautan Pasir Bromo?'}
                </h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {horseArticle.conclusion}
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="button"
                    onClick={() => onOpenBooking()}
                    className="w-full sm:w-auto px-6 py-3.5 bg-[#0996f5] hover:bg-[#071A2B] text-white text-xs sm:text-sm font-black rounded-2xl shadow-lg shadow-[#0996f5]/25 transition-all cursor-pointer flex items-center justify-center gap-2 group"
                  >
                    <span>{horseArticle.ctaButton}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <a
                    href="https://wa.me/6281222290318?text=Halo%20Admin%20WisataBromo.co,%20saya%20baru%20baca%20artikel%20biaya%20sewa%20kuda%20di%20Bromo%20dan%20ingin%20konsultasi%20paket%20trip%20Bromo."
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
              {renderBottomShareSection(
                language === 'en'
                  ? 'Share this Bromo horse price guide with your travel buddies'
                  : language === 'zh'
                  ? '把这份布罗莫骑马价格攻略分享给同行伙伴'
                  : 'Bagikan panduan biaya kuda Bromo ini ke teman perjalanan Anda'
              )}

              {/* Article Tags */}
              <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center gap-2 text-xs text-slate-600">
                <span className="font-bold text-slate-400 mr-1">Tags:</span>
                {horseArticle.tags?.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-slate-100 hover:bg-[#EAF6FF] text-slate-700 hover:text-[#0996f5] rounded-xl font-medium transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ) : isSeasonArticle ? (
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
                    onClick={() => onOpenBooking()}
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
              {renderBottomShareSection(
                language === 'en'
                  ? 'Help friends plan their Bromo trip'
                  : language === 'zh'
                  ? '分享给计划前往布罗莫的朋友'
                  : 'Bagikan panduan ini ke teman perjalanan Anda'
              )}

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
                    onClick={() => onOpenBooking()}
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
              {renderBottomShareSection(
                language === 'en'
                  ? 'Help friends plan their Bromo trip'
                  : language === 'zh'
                  ? '分享给计划前往布罗莫的朋友'
                  : 'Bagikan panduan ini ke teman perjalanan Anda'
              )}

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
                    onClick={() => onOpenBooking()}
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
              {renderBottomShareSection(
                language === 'en'
                  ? 'Help friends pack properly for Bromo'
                  : language === 'zh'
                  ? '分享行囊清单给计划前往布罗莫的朋友'
                  : 'Bagikan daftar perlengkapan ini ke teman perjalanan Anda'
              )}

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
