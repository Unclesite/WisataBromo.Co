import React, { useEffect, useState } from 'react';
import { TourPackage } from '../types';
import { 
  ArrowLeft, MapPin, Clock, Calendar, Users, Star, Check, AlertCircle, 
  PhoneCall, Send, ShieldCheck, Sparkles,
  Car, Share2, Luggage, Navigation
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { getLocalizedPackage, formatCurrencyByLang } from '../i18n/packageTranslations';

interface PackageDetailPageProps {
  packageItem: TourPackage;
  onBackToHome: () => void;
  onBookNow: (pkg: TourPackage) => void;
}

export const PackageDetailPage: React.FC<PackageDetailPageProps> = ({
  packageItem,
  onBackToHome,
  onBookNow,
}) => {
  const { language, t } = useLanguage();
  const [copiedLink, setCopiedLink] = useState(false);
  const [activeTab, setActiveTab] = useState<'itinerary' | 'fasilitas' | 'lokasi' | 'tips'>('itinerary');

  const localPkg = getLocalizedPackage(packageItem, language);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = `${localPkg.title} - WisataBromo.co Official`;
    const targetPath = `/paket/${packageItem.slug || packageItem.id}`;
    if (window.location.pathname !== targetPath) {
      window.history.pushState({}, '', targetPath);
    }
  }, [packageItem.id, packageItem.slug, localPkg.title]);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const getWaMessage = () => {
    if (language === 'zh') {
      return `您好，WisataBromo.co 客服，我想预订“${localPkg.title}”（${formatCurrencyByLang(localPkg.price, language)} ${localPkg.priceUnit}）。请问最近的出行排期如何？`;
    }
    if (language === 'en') {
      return `Hello WisataBromo.co team, I would like to book the "${localPkg.title}" package (${formatCurrencyByLang(localPkg.price, language)} ${localPkg.priceUnit}). Please share available schedule and dates.`;
    }
    return `Halo Admin WisataBromo.co, saya ingin reservasi paket "${localPkg.title}" (${formatCurrencyByLang(localPkg.price, language)} ${localPkg.priceUnit}). Mohon info jadwal ketersediaan tanggalnya.`;
  };

  const whatsappMessage = encodeURIComponent(getWaMessage());

  // Comprehensive localized text labels
  const uiLabels = {
    id: {
      backToCatalog: 'Kembali ke Katalog Paket',
      linkCopied: 'Link Tersalin!',
      share: 'Bagikan',
      guestReviews: 'Ulasan Tamu',
      startLabel: 'Start:',
      durationLabel: 'Durasi Trip',
      departureSchedule: 'Jadwal Berangkat',
      capacityLabel: 'Kapasitas',
      fleetLabel: 'Armada Resmi',
      fleetDesc: 'Jeep Toyota Land Cruiser FJ40',
      itineraryTab: 'Jadwal & Itinerary',
      facilitiesTab: 'Fasilitas & Include',
      meetingTab: 'Titik Jemput',
      tipsTab: 'Tips & Pakaian',
      itineraryTitle: 'Jadwal Perjalanan (Itinerary)',
      timeZone: 'WIB',
      includesTitle: 'Fasilitas Termasuk (Include)',
      excludesTitle: 'Belum Termasuk (Exclude)',
      meetingTitle: 'Area Penjemputan & Meeting Point',
      officialPickup: '📍 Lokasi Penjemputan Resmi:',
      popularMeeting: 'Titik Populer:',
      gearTitle: 'Perlengkapan Wajib (Suhu 2°C - 10°C)',
      gearItems: [
        {
          title: '🧥 Jaket Gunung Tebal / Windbreaker',
          desc: 'Suhu fajar di Penanjakan bisa mencapai 2°C – 6°C.'
        },
        {
          title: '🧤 Sarung Tangan & Kupluk / Beanie',
          desc: 'Melindungi telapak tangan dan telinga dari angin dingin.'
        },
        {
          title: '😷 Masker Debu & Kacamata Hitam',
          desc: 'Sangat berguna saat di Lautan Pasir dan Kawah.'
        },
        {
          title: '👟 Sepatu Kets / Trekking Nyaman',
          desc: 'Hindari sandal jepit atau sepatu berhak tinggi.'
        }
      ],
      officialRate: 'Tarif Resmi WisataBromo.co',
      officialBadge: 'Resmi TNBTS',
      includeDocOption: 'Plus Dokumentasi:',
      bookNow: 'Hitung Biaya & Pesan Sekarang',
      consultWa: 'Konsultasi WhatsApp',
      legalBadge: 'PT Global Travel Healing',
      ticketBadge: 'Tiket TNBTS Resmi & Asuransi Perjalanan',
      eTicketNote: 'E-Tiket & Invoice PDF resmi otomatis',
      startingFrom: 'Mulai Dari',
    },
    en: {
      backToCatalog: 'Back to Tour Packages',
      linkCopied: 'Link Copied!',
      share: 'Share',
      guestReviews: 'Guest Reviews',
      startLabel: 'Start:',
      durationLabel: 'Trip Duration',
      departureSchedule: 'Departure Schedule',
      capacityLabel: 'Capacity',
      fleetLabel: 'Official Fleet',
      fleetDesc: 'Toyota Land Cruiser FJ40 4x4 Jeep',
      itineraryTab: 'Tour Itinerary',
      facilitiesTab: 'Inclusions & Facilities',
      meetingTab: 'Meeting Points',
      tipsTab: 'Tips & Clothing',
      itineraryTitle: 'Tour Itinerary & Timeline',
      timeZone: 'WIB (GMT+7)',
      includesTitle: 'Included In Package (Inclusions)',
      excludesTitle: 'Not Included (Exclusions)',
      meetingTitle: 'Pickup Locations & Meeting Points',
      officialPickup: '📍 Official Pickup Location:',
      popularMeeting: 'Popular Meeting Hubs:',
      gearTitle: 'Essential Cold Gear Checklist (2°C - 10°C)',
      gearItems: [
        {
          title: '🧥 Heavy Mountain Jacket / Windbreaker',
          desc: 'Dawn temperatures at Penanjakan drop to 2°C – 6°C.'
        },
        {
          title: '🧤 Warm Gloves & Beanie / Balaclava',
          desc: 'Protects your hands and ears from biting mountain wind.'
        },
        {
          title: '😷 Dust Mask & Sunglasses',
          desc: 'Essential protection against fine volcanic sand in the caldera.'
        },
        {
          title: '👟 Comfortable Sneakers / Trekking Shoes',
          desc: 'Avoid high heels, flip-flops, or open sandals.'
        }
      ],
      officialRate: 'Official WisataBromo.co Rate',
      officialBadge: 'Official TNBTS Partner',
      includeDocOption: '+ Photo Documentation:',
      bookNow: 'Calculate Cost & Book Now',
      consultWa: 'WhatsApp Consultation',
      legalBadge: 'PT Global Travel Healing',
      ticketBadge: 'Official TNBTS National Park Ticket & Insurance',
      eTicketNote: 'Automated Official E-Ticket & PDF Invoice',
      startingFrom: 'Starting From',
    },
    zh: {
      backToCatalog: '返回旅游套餐目录',
      linkCopied: '链接已复制！',
      share: '分享',
      guestReviews: '条住客真实点评',
      startLabel: '出发地:',
      durationLabel: '行程时长',
      departureSchedule: '发车时间',
      capacityLabel: '团队容量',
      fleetLabel: '官方正规车队',
      fleetDesc: '丰田FJ40经典四驱越野吉普',
      itineraryTab: '行程安排与时间表',
      facilitiesTab: '包含费用与设施',
      meetingTab: '集合与接送地点',
      tipsTab: '行前准备与装备',
      itineraryTitle: '详细行程规划与时间表',
      timeZone: '印尼西部时间 (WIB)',
      includesTitle: '费用包含项目 (Inclusions)',
      excludesTitle: '费用不含项目 (Exclusions)',
      meetingTitle: '接送范围与集合地点',
      officialPickup: '📍 官方指定接送地点：',
      popularMeeting: '热门集合与接送点：',
      gearTitle: '高寒防风穿衣必备清单 (2°C - 10°C)',
      gearItems: [
        {
          title: '🧥 防风保暖羽绒服 / 冲锋衣',
          desc: '观景台日出清晨气温可降至 2°C – 6°C，体感极寒。'
        },
        {
          title: '🧤 保暖手套与毛线帽 / 抓绒帽',
          desc: '有效阻挡高原强风侵袭头部与双手手心。'
        },
        {
          title: '😷 防尘口罩与防风太阳镜',
          desc: '穿越火山沙海及攀登火山口时防护沙尘十分重要。'
        },
        {
          title: '👟 防滑运动鞋 / 舒适登山鞋',
          desc: '沙地与火山口台阶行走较多，请勿穿高跟鞋或人字拖。'
        }
      ],
      officialRate: 'WisataBromo.co 官方核准价格',
      officialBadge: 'TNBTS正规特许经营',
      includeDocOption: '+ 单反摄影跟拍：',
      bookNow: '测算费用并立即预订',
      consultWa: 'WhatsApp中文客服咨询',
      legalBadge: 'PT Global Travel Healing 荣誉承运',
      ticketBadge: '包含国家公园正规门票与高山救援险',
      eTicketNote: '系统自动生成正规电子票及PDF预约单',
      startingFrom: '起价',
    }
  }[language] || {
    backToCatalog: 'Kembali ke Katalog Paket',
    linkCopied: 'Link Tersalin!',
    share: 'Bagikan',
    guestReviews: 'Ulasan Tamu',
    startLabel: 'Start:',
    durationLabel: 'Durasi Trip',
    departureSchedule: 'Jadwal Berangkat',
    capacityLabel: 'Kapasitas',
    fleetLabel: 'Armada Resmi',
    fleetDesc: 'Jeep Toyota Land Cruiser FJ40',
    itineraryTab: 'Jadwal & Itinerary',
    facilitiesTab: 'Fasilitas & Include',
    meetingTab: 'Titik Jemput',
    tipsTab: 'Tips & Pakaian',
    itineraryTitle: 'Jadwal Perjalanan (Itinerary)',
    timeZone: 'WIB',
    includesTitle: 'Fasilitas Termasuk (Include)',
    excludesTitle: 'Belum Termasuk (Exclude)',
    meetingTitle: 'Area Penjemputan & Meeting Point',
    officialPickup: '📍 Lokasi Penjemputan Resmi:',
    popularMeeting: 'Titik Populer:',
    gearTitle: 'Perlengkapan Wajib (Suhu 2°C - 10°C)',
    gearItems: [
      {
        title: '🧥 Jaket Gunung Tebal / Windbreaker',
        desc: 'Suhu fajar di Penanjakan bisa mencapai 2°C – 6°C.'
      },
      {
        title: '🧤 Sarung Tangan & Kupluk / Beanie',
        desc: 'Melindungi telapak tangan dan telinga dari angin dingin.'
      },
      {
        title: '😷 Masker Debu & Kacamata Hitam',
        desc: 'Sangat berguna saat di Lautan Pasir dan Kawah.'
      },
      {
        title: '👟 Sepatu Kets / Trekking Nyaman',
        desc: 'Hindari sandal jepit atau sepatu berhak tinggi.'
      }
    ],
    officialRate: 'Tarif Resmi WisataBromo.co',
    officialBadge: 'Resmi TNBTS',
    includeDocOption: 'Plus Dokumentasi:',
    bookNow: 'Hitung Biaya & Pesan Sekarang',
    consultWa: 'Konsultasi WhatsApp',
    legalBadge: 'PT Global Travel Healing',
    ticketBadge: 'Tiket TNBTS Resmi & Asuransi Perjalanan',
    eTicketNote: 'E-Tiket & Invoice PDF resmi otomatis',
    startingFrom: 'Mulai Dari',
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen py-5 sm:py-10 text-[#111318] animate-fadeIn pb-28 md:pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Navigation Bar: Breadcrumb & Share */}
        <div className="flex items-center justify-between gap-3 mb-5 sm:mb-6">
          <button
            type="button"
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 bg-white hover:bg-[#e5f4ff] text-[#111318] hover:text-[#0996f5] border border-slate-200 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer group min-h-[42px]"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform text-[#0996f5]" />
            <span>{uiLabels.backToCatalog}</span>
          </button>

          <button
            type="button"
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white hover:bg-slate-100 text-[#111318] border border-slate-200 rounded-xl text-xs font-bold transition-colors cursor-pointer min-h-[42px]"
          >
            {copiedLink ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700 font-bold">{uiLabels.linkCopied}</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5 text-[#0996f5]" />
                <span className="hidden xs:inline">{uiLabels.share}</span>
              </>
            )}
          </button>
        </div>

        {/* Hero Image & Main Title Card */}
        <div className="bg-[#ffffff] border border-slate-200/90 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl mb-6 sm:mb-8">
          {localPkg.imageUrl && (
            <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full bg-slate-900 overflow-hidden">
              <img
                src={localPkg.imageUrl}
                alt={localPkg.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent"></div>

              {/* Floating badges on image */}
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between gap-2">
                <span className="text-[11px] sm:text-xs font-bold text-white bg-black/60 backdrop-blur-md px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl border border-white/20 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#fff700]" />
                  <span>{uiLabels.startLabel} {localPkg.startLocationName}</span>
                </span>

                {localPkg.badge && (
                  <span className={`text-[11px] sm:text-xs font-black px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl backdrop-blur-md shadow-sm ${
                    localPkg.category === 'trail'
                      ? 'bg-[#ea0610] text-white'
                      : 'bg-[#fff700] text-black'
                  }`}>
                    {localPkg.badge}
                  </span>
                )}
              </div>

              {/* Bottom Hero Info */}
              <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6 text-white">
                <div className="flex items-center gap-2 mb-1 text-xs text-[#fff700] font-bold">
                  <Star className="w-3.5 h-3.5 fill-[#fff700] text-[#fff700]" />
                  <span>{localPkg.rating.toFixed(1)}</span>
                  <span className="text-white/80 font-normal">({localPkg.reviewsCount} {uiLabels.guestReviews})</span>
                </div>
                <h1 className="text-xl sm:text-3xl lg:text-4xl font-black text-white leading-tight drop-shadow-md text-balance">
                  {localPkg.title}
                </h1>
              </div>
            </div>
          )}

          {/* Quick Specifications Ribbon */}
          <div className="p-4 sm:p-6 bg-[#ffffff] border-b border-slate-100">
            <p className="text-xs sm:text-sm text-[#111318]/80 leading-relaxed max-w-4xl mb-4 sm:mb-5">
              {localPkg.subtitle}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs text-[#111318]">
              {/* Box 1: Durasi Trip */}
              <div className="p-3 sm:p-3.5 bg-[#e5f4ff]/70 border border-[#0996f5]/20 rounded-2xl flex items-start gap-3 min-w-0">
                <Clock className="w-5 h-5 text-[#0996f5] shrink-0 mt-0.5" />
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                    {uiLabels.durationLabel}
                  </div>
                  <div className="font-black text-xs sm:text-sm leading-snug mt-0.5 break-words">{localPkg.duration}</div>
                </div>
              </div>

              {/* Box 2: Jam Berangkat */}
              <div className="p-3 sm:p-3.5 bg-[#e5f4ff]/70 border border-[#0996f5]/20 rounded-2xl flex items-start gap-3 min-w-0">
                <Calendar className="w-5 h-5 text-[#0996f5] shrink-0 mt-0.5" />
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                    {uiLabels.departureSchedule}
                  </div>
                  <div className="font-black text-xs sm:text-sm leading-snug mt-0.5 break-words text-[#111318]">
                    {localPkg.departureTime}
                  </div>
                </div>
              </div>

              {/* Box 3: Kapasitas */}
              <div className="p-3 sm:p-3.5 bg-[#e5f4ff]/70 border border-[#0996f5]/20 rounded-2xl flex items-start gap-3 min-w-0">
                <Users className="w-5 h-5 text-[#0996f5] shrink-0 mt-0.5" />
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                    {uiLabels.capacityLabel}
                  </div>
                  <div className="font-black text-xs sm:text-sm leading-snug mt-0.5 break-words">
                    {localPkg.category === 'open_trip'
                      ? (language === 'zh' ? '1人成行 保证出发' : (language === 'en' ? '1 Pax Guaranteed Departure' : '1 Orang Pasti Jalan'))
                      : `${localPkg.minPax} - ${localPkg.maxPax} ${language === 'zh' ? '人 / 专属吉普' : (language === 'en' ? 'pax / jeep' : 'Pax')}`}
                  </div>
                </div>
              </div>

              {/* Box 4: Armada */}
              <div className="p-3 sm:p-3.5 bg-[#e5f4ff]/70 border border-[#0996f5]/20 rounded-2xl flex items-start gap-3 min-w-0">
                <Car className="w-5 h-5 text-[#0996f5] shrink-0 mt-0.5" />
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                    {uiLabels.fleetLabel}
                  </div>
                  <div className="font-black text-xs sm:text-sm leading-snug mt-0.5 break-words">
                    {uiLabels.fleetDesc}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2-Column Content Grid: Details Left, Sticky Booking Right */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Left Column: Tabs, Itinerary, Inclusions, Meeting Point, FAQs */}
          <div className="md:col-span-7 lg:col-span-8 space-y-5 sm:space-y-6">
            
            {/* Interactive Section Tabs */}
            <div className="flex items-center gap-1.5 p-1.5 bg-[#ffffff] border border-slate-200 rounded-2xl shadow-xs overflow-x-auto no-scrollbar">
              <button
                onClick={() => setActiveTab('itinerary')}
                className={`flex-1 py-2.5 px-3 text-xs font-bold rounded-xl transition-all whitespace-nowrap cursor-pointer min-h-[42px] ${
                  activeTab === 'itinerary'
                    ? 'bg-[#0996f5] text-white shadow-sm'
                    : 'text-[#111318] hover:bg-slate-100'
                }`}
              >
                {uiLabels.itineraryTab}
              </button>
              <button
                onClick={() => setActiveTab('fasilitas')}
                className={`flex-1 py-2.5 px-3 text-xs font-bold rounded-xl transition-all whitespace-nowrap cursor-pointer min-h-[42px] ${
                  activeTab === 'fasilitas'
                    ? 'bg-[#0996f5] text-white shadow-sm'
                    : 'text-[#111318] hover:bg-slate-100'
                }`}
              >
                {uiLabels.facilitiesTab}
              </button>
              <button
                onClick={() => setActiveTab('lokasi')}
                className={`flex-1 py-2.5 px-3 text-xs font-bold rounded-xl transition-all whitespace-nowrap cursor-pointer min-h-[42px] ${
                  activeTab === 'lokasi'
                    ? 'bg-[#0996f5] text-white shadow-sm'
                    : 'text-[#111318] hover:bg-slate-100'
                }`}
              >
                {uiLabels.meetingTab}
              </button>
              <button
                onClick={() => setActiveTab('tips')}
                className={`flex-1 py-2.5 px-3 text-xs font-bold rounded-xl transition-all whitespace-nowrap cursor-pointer min-h-[42px] ${
                  activeTab === 'tips'
                    ? 'bg-[#0996f5] text-white shadow-sm'
                    : 'text-[#111318] hover:bg-slate-100'
                }`}
              >
                {uiLabels.tipsTab}
              </button>
            </div>

            {/* Tab 1: Itinerary (Fully Localized from localPkg) */}
            {activeTab === 'itinerary' && (
              <div className="bg-[#ffffff] border border-slate-200/90 rounded-2xl sm:rounded-3xl p-4 sm:p-7 space-y-4 sm:space-y-5 shadow-sm animate-fadeIn">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h2 className="text-base sm:text-lg font-black text-[#111318] flex items-center gap-2">
                    <Clock className="w-5 h-5 text-[#0996f5]" />
                    <span>{uiLabels.itineraryTitle}</span>
                  </h2>
                  <span className="text-xs text-slate-500 font-medium">{uiLabels.timeZone}</span>
                </div>

                <div className="space-y-4 relative pl-5 border-l-2 border-[#0996f5]/30 ml-2">
                  {Array.isArray(localPkg?.itinerary) && localPkg.itinerary.map((step, idx) => (
                    <div key={idx} className="relative">
                      <div className="absolute -left-[27px] top-1 w-3.5 h-3.5 rounded-full bg-[#0996f5] border-2 border-white shadow-xs"></div>
                      <div className="text-xs font-mono font-bold text-[#0996f5] bg-[#e5f4ff] inline-block px-2.5 py-0.5 rounded-md">
                        {step.time} WIB
                      </div>
                      <div className="text-sm font-extrabold text-[#111318] mt-1">{step.activity}</div>
                      <div className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">{step.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 2: Fasilitas (Fully Localized Inclusions & Exclusions from localPkg) */}
            {activeTab === 'fasilitas' && (
              <div className="bg-[#ffffff] border border-slate-200/90 rounded-2xl sm:rounded-3xl p-4 sm:p-7 space-y-5 shadow-sm animate-fadeIn">
                <div className="space-y-3">
                  <h2 className="text-base sm:text-lg font-black text-[#111318] flex items-center gap-2 pb-3 border-b border-slate-100">
                    <Check className="w-5 h-5 text-emerald-600" />
                    <span>{uiLabels.includesTitle}</span>
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {Array.isArray(localPkg?.includes) && localPkg.includes.map((inc, idx) => (
                      <div key={idx} className="flex items-start gap-2 p-2.5 bg-emerald-50/60 rounded-xl text-xs text-slate-800">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {Array.isArray(localPkg?.excludes) && localPkg.excludes.length > 0 && (
                  <div className="space-y-3 pt-3 border-t border-slate-100">
                    <h3 className="text-sm font-bold text-slate-600 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-rose-500" />
                      <span>{uiLabels.excludesTitle}</span>
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {localPkg.excludes.map((exc, idx) => (
                        <div key={idx} className="flex items-start gap-2 p-2.5 bg-rose-50/50 rounded-xl text-xs text-slate-700">
                          <span className="text-rose-500 font-bold shrink-0">✕</span>
                          <span>{exc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Tab 3: Lokasi & Titik Jemput (Fully Localized from localPkg) */}
            {activeTab === 'lokasi' && (
              <div className="bg-[#ffffff] border border-slate-200/90 rounded-2xl sm:rounded-3xl p-4 sm:p-7 space-y-4 shadow-sm animate-fadeIn">
                <h2 className="text-base sm:text-lg font-black text-[#111318] flex items-center gap-2 pb-3 border-b border-slate-100">
                  <Navigation className="w-5 h-5 text-[#0996f5]" />
                  <span>{uiLabels.meetingTitle}</span>
                </h2>

                <div className="p-4 bg-[#e5f4ff]/50 rounded-2xl border border-[#0996f5]/20 space-y-2 text-xs">
                  <div className="font-bold text-[#102a56]">{uiLabels.officialPickup}</div>
                  <p className="text-slate-700 leading-relaxed">
                    {localPkg.meetingPoint || (language === 'zh' ? '在您指定的酒店、火车站或住所提供灵活上门接送。' : (language === 'en' ? 'Flexible pickup at your hotel, station, or residence according to agreed schedule.' : 'Penjemputan fleksibel di hotel, stasiun, atau rumah sesuai jadwal kesepakatan.'))}
                  </p>
                </div>

                {Array.isArray(localPkg?.meetingPoints) && localPkg.meetingPoints.length > 0 && (
                  <div className="space-y-2 pt-2">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">{uiLabels.popularMeeting}</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {localPkg.meetingPoints.map((mp, idx) => (
                        <div key={idx} className="p-2.5 bg-slate-50 rounded-xl text-xs text-slate-800 flex items-center gap-2 border border-slate-200">
                          <MapPin className="w-3.5 h-3.5 text-[#0996f5] shrink-0" />
                          <span>{mp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Tab 4: Tips & Perlengkapan (Fully Localized Checklist) */}
            {activeTab === 'tips' && (
              <div className="bg-[#ffffff] border border-slate-200/90 rounded-2xl sm:rounded-3xl p-4 sm:p-7 space-y-4 shadow-sm animate-fadeIn">
                <h2 className="text-base sm:text-lg font-black text-[#111318] flex items-center gap-2 pb-3 border-b border-slate-100">
                  <Luggage className="w-5 h-5 text-[#0996f5]" />
                  <span>{uiLabels.gearTitle}</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {uiLabels.gearItems.map((gear, idx) => (
                    <div key={idx} className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
                      <div className="font-bold text-[#111318]">{gear.title}</div>
                      <div className="text-slate-600 text-[11px]">{gear.desc}</div>
                    </div>
                  ))}
                </div>

                {Array.isArray(localPkg?.tips) && localPkg.tips.length > 0 && (
                  <div className="pt-3 border-t border-slate-100 space-y-2">
                    <div className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                      {language === 'zh' ? '实用出行建议：' : (language === 'en' ? 'Helpful Tour Tips:' : 'Tips Tambahan:')}
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {localPkg.tips.map((tItem, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-2">
                          <span className="text-[#0996f5] font-bold">•</span>
                          <span>{tItem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right Column: Sticky Pricing Card & Direct Booking */}
          <div className="md:col-span-5 lg:col-span-4 space-y-5 md:sticky md:top-20 lg:top-24">
            
            {/* Price Box */}
            <div className="bg-[#ffffff] border-2 border-[#0996f5]/30 rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-[#0996f5] uppercase tracking-wider">
                  {uiLabels.officialRate}
                </span>
                <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-lg">
                  {uiLabels.officialBadge}
                </span>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-black text-[#0996f5] font-mono tabular-nums">
                  {formatCurrencyByLang(localPkg.price, language)}
                </div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">
                  {localPkg.priceUnit}
                </div>
              </div>

              {localPkg.priceWithDoc && localPkg.priceWithDoc !== localPkg.price && (
                <div className="p-3 bg-[#e5f4ff] rounded-xl text-xs text-[#111318] flex items-center justify-between border border-[#0996f5]/20">
                  <span className="font-bold">{uiLabels.includeDocOption}</span>
                  <span className="font-mono font-black text-[#0996f5]">
                    {formatCurrencyByLang(localPkg.priceWithDoc, language)}
                  </span>
                </div>
              )}

              {/* Primary Action Button */}
              <div className="space-y-2.5 pt-1">
                <button
                  type="button"
                  onClick={() => onBookNow(packageItem)}
                  className="w-full py-4 px-4 text-xs sm:text-sm font-black text-white bg-[#0996f5] hover:bg-[#0782d6] rounded-xl transition-all shadow-lg shadow-[#0996f5]/30 flex items-center justify-center gap-2 cursor-pointer active:scale-95 min-h-[48px]"
                >
                  <Send className="w-4 h-4 text-[#fff700]" />
                  <span>{uiLabels.bookNow}</span>
                </button>

                <a
                  href={`https://wa.me/6281222290318?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 text-xs font-bold text-[#111318] hover:text-[#0996f5] bg-[#e5f4ff] hover:bg-[#d8e7ff] rounded-xl transition-colors flex items-center justify-center gap-2 min-h-[44px]"
                >
                  <PhoneCall className="w-4 h-4 text-[#0996f5]" />
                  <span>{uiLabels.consultWa}</span>
                </a>
              </div>

              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500 space-y-1">
                <div className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{uiLabels.legalBadge}</span>
                </div>
                <div>• {uiLabels.ticketBadge}</div>
                <div>• {uiLabels.eTicketNote}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Quick Booking Bar (Only on phones < 768px) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#ffffff]/98 backdrop-blur-md border-t border-slate-200/90 px-4 py-3 flex items-center justify-between gap-3 shadow-2xl">
        <div className="min-w-0">
          <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">
            {uiLabels.startingFrom}
          </div>
          <div className="text-lg font-mono font-black text-[#0996f5] leading-tight truncate">
            {formatCurrencyByLang(localPkg.price, language)}
          </div>
        </div>
        <button
          type="button"
          onClick={() => onBookNow(packageItem)}
          className="px-5 py-2.5 text-xs font-black text-white bg-[#0996f5] hover:bg-[#0782d6] rounded-xl shadow-md shadow-[#0996f5]/25 flex items-center gap-1.5 active:scale-95 cursor-pointer whitespace-nowrap min-h-[44px]"
        >
          <span>{uiLabels.bookNow}</span>
          <Send className="w-3.5 h-3.5 text-[#fff700]" />
        </button>
      </div>
    </div>
  );
};
