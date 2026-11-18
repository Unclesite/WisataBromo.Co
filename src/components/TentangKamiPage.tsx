import React from 'react';
import { 
  ArrowLeft, ShieldCheck, CheckCircle2, Award, Users, Compass, 
  MapPin, PhoneCall, Mail, Building2, Calendar, Star, Sparkles, 
  ChevronRight, Camera, Mountain, Heart, ExternalLink 
} from 'lucide-react';
import imgHeroShowcase from '../assets/images/bromo_sunrise_jeep_1790773945206.jpg';
import imgOwnerZainuddin from '../assets/images/about_activity_1.png';
import imgAdminTiara from '../assets/images/about_activity_2.png';
import imgGuideHaris from '../assets/images/about_activity_3.png';
import imgGuideDani from '../assets/images/about_hero_team.jpg';
import { useLanguage } from '../i18n/LanguageContext';

interface TentangKamiPageProps {
  onBackToHome: () => void;
  onOpenBooking: (packageId?: string) => void;
  onOpenArticles?: () => void;
}

export const TentangKamiPage: React.FC<TentangKamiPageProps> = ({
  onBackToHome,
  onOpenBooking,
  onOpenArticles,
}) => {
  const { language, t } = useLanguage();

  const corporateClients = [
    {
      name: language === 'zh' ? '印尼环境与林业部 (KLHK)' : language === 'en' ? 'Ministry of Environment and Forestry (KLHK)' : 'Kementerian Lingkungan Hidup dan Kehutanan (KLHK)',
      detail: language === 'zh' ? '巴邻旁第二区域局考察团' : language === 'en' ? 'BPKHTL Region II Palembang Delegation' : 'BPKHTL Wil II Palembang',
      tag: language === 'zh' ? '印尼国家部委' : language === 'en' ? 'Indonesian Ministry' : 'Kementerian RI'
    },
    {
      name: language === 'zh' ? '印尼劳工部部长 Prof. Yassierli' : language === 'en' ? 'Minister of Manpower of RI, Prof. Yassierli' : 'Menteri Ketenagakerjaan RI, Prof. Yassierli',
      detail: language === 'zh' ? '官方工作考察与专属游览' : language === 'en' ? 'Official Working Visit & Exclusive Tour' : 'Kunjungan Kerja & Wisata Eksklusif',
      tag: language === 'zh' ? '国家政要' : language === 'en' ? 'State Dignitary' : 'Pejabat Negara'
    },
    {
      name: language === 'zh' ? '海大集团印尼农业公司 (PT Haida)' : language === 'en' ? 'PT Haida Agriculture Indonesia' : 'PT Haida Agriculture Indonesia',
      detail: language === 'zh' ? '企业团建与员工嘉奖之旅' : language === 'en' ? 'Corporate Outing & Employee Appreciation' : 'Corporate Outing & Employee Appreciation',
      tag: language === 'zh' ? '知名企业' : language === 'en' ? 'National Corporate' : 'Korporat Nasional'
    },
    {
      name: language === 'zh' ? '印尼国家电力公司 PLN (Krian Sidoarjo)' : language === 'en' ? 'PLN Krian Sidoarjo' : 'PLN Krian Sidoarjo',
      detail: language === 'zh' ? '国企员工团建与布罗莫之旅' : language === 'en' ? 'Employee Gathering & Tour Bromo' : 'Employee Gathering & Tour Bromo',
      tag: language === 'zh' ? '国家能源国企' : language === 'en' ? 'State-Owned Energy' : 'BUMN Energi'
    },
    {
      name: language === 'zh' ? 'PT MS Aishah Mandiri 旅游集团' : language === 'en' ? 'PT MS Aishah Mandiri (Aishah Tour)' : 'PT MS Aishah Mandiri (Umroh Aishah)',
      detail: language === 'zh' ? '家庭团聚与清真风尚游' : language === 'en' ? 'Family Gathering & Syariah Tour Group' : 'Paket Wisata & Family Gathering Syariah',
      tag: language === 'zh' ? '旅游集团' : language === 'en' ? 'Travel Bureau' : 'Biro Perjalanan'
    },
    {
      name: language === 'zh' ? '雅加达公共工程局 (Dinas PUPR Jakarta) 等' : language === 'en' ? 'Jakarta Public Works Agency (PUPR), & more' : 'Dinas PUPR Jakarta, dan masih banyak lainnya',
      detail: language === 'zh' ? '雅加达特区政府考察团' : language === 'en' ? 'Jakarta Special Regional Government Delegation' : 'Instansi Pemerintah Daerah Khusus Jakarta',
      tag: language === 'zh' ? '地方政府机关' : language === 'en' ? 'Regional Gov' : 'Pemerintah Daerah'
    },
    {
      name: language === 'zh' ? 'Adi Wira Jaya 商业集团' : language === 'en' ? 'Adi Wira Jaya Group' : 'Adi Wira Jaya Group',
      detail: language === 'zh' ? '企业年度盛会与拓展游' : language === 'en' ? 'Corporate Gathering & Outbound' : 'Corporate Gathering & Outbound',
      tag: language === 'zh' ? '知名私企' : language === 'en' ? 'Private Corp' : 'Korporat Swasta'
    },
    {
      name: language === 'zh' ? 'Al Haramain III 职业高中' : language === 'en' ? 'SMK Al Haramain III' : 'SMK Al Haramain III',
      detail: language === 'zh' ? '布罗莫地质研学与研学游' : language === 'en' ? 'Study Tour & Bromo Geology' : 'Study Tour & Edukasi Geologi Bromo',
      tag: language === 'zh' ? '教育机构' : language === 'en' ? 'Educational Inst' : 'Institusi Pendidikan'
    },
    {
      name: language === 'zh' ? 'Kepala Singa 泗水特产中心' : language === 'en' ? 'Kepala Singa Souvenir Center' : 'Pusat oleh-oleh Kepala Singa, Sidoarjo',
      detail: language === 'zh' ? '员工与家属感谢团建' : language === 'en' ? 'Staff & Family Appreciation Outing' : 'Family Gathering & Pegawai',
      tag: language === 'zh' ? '工业合作伙伴' : language === 'en' ? 'Industry Partner' : 'Mitra Industri'
    },
    {
      name: language === 'zh' ? 'Ndalem Ngropoh 文化社团' : language === 'en' ? 'Ndalem Ngropoh' : 'Ndalem Ngropoh',
      detail: language === 'zh' ? '文化社团团建与游览' : language === 'en' ? 'Cultural Community Outing' : 'Rombongan Komunitas & Outing Bersama',
      tag: language === 'zh' ? '文化合作伙伴' : language === 'en' ? 'Cultural Partner' : 'Mitra & Budaya'
    },
  ];

  const medicalClients = [
    {
      name: language === 'zh' ? 'Dr. Ramelan 泗水海军总医院' : language === 'en' ? 'RSAL Dr. Ramelan Surabaya' : 'RSAL Dr. Ramelan',
      detail: language === 'zh' ? '海军医院医护人员放松之旅' : language === 'en' ? 'Naval Hospital Medical Staff Outing' : 'Rumah Sakit Angkatan Laut Surabaya (Outing Tenaga Medis)',
      tag: language === 'zh' ? '军队总医院' : language === 'en' ? 'Military Hospital' : 'Rumah Sakit Militer'
    },
    {
      name: language === 'zh' ? 'Siloam 医疗集团 (RS Siloam)' : language === 'en' ? 'Siloam Hospitals Group' : 'RS Siloam',
      detail: language === 'zh' ? '印尼顶尖私立医疗集团代表团' : language === 'en' ? 'Premier Private Hospital Network in Indonesia' : 'Jaringan Rumah Sakit Swasta Terkemuka Indonesia',
      tag: language === 'zh' ? '知名私立医院' : language === 'en' ? 'Private Hospital' : 'Rumah Sakit Swasta'
    },
    {
      name: language === 'zh' ? 'Undaan 专科眼科医院' : language === 'en' ? 'Undaan Eye Hospital' : 'RS Mata Undaan',
      detail: language === 'zh' ? '东爪哇享誉盛名的眼科专科医院' : language === 'en' ? 'Legendary Eye Specialist Hospital of East Java' : 'Rumah Sakit Spesialis Mata Legendaris Jawa Timur',
      tag: language === 'zh' ? '专科医院' : language === 'en' ? 'Specialist Hospital' : 'Rumah Sakit Spesialis'
    },
    {
      name: language === 'zh' ? '印尼临床病理学专家医师协会 (PDSPK)' : language === 'en' ? 'Indonesian Association of Clinical Pathology Specialists (PDSPK)' : 'Perhimpunan Dokter Spesialis Patologi Klinik (PDSPK)',
      detail: language === 'zh' ? '印尼全国医学专家医师协会' : language === 'en' ? 'National Medical Specialists Association' : 'Asosiasi Dokter Spesialis Medis Indonesia',
      tag: language === 'zh' ? '医学学术协会' : language === 'en' ? 'Medical Association' : 'Lembaga Medis'
    },
  ];

  const whyChooseUs = [
    {
      icon: ShieldCheck,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
      title: t('aboutPage.whyUs1Title', 'Legalitas Resmi & Berizin TNBTS'),
      desc: t('aboutPage.whyUs1Desc', 'Beroperasi di bawah naungan PT Global Travel Healing dengan izin resmi Taman Nasional Bromo Tengger Semeru dan rekening bank atas nama perusahaan.')
    },
    {
      icon: Award,
      color: 'text-[#0996f5]',
      bgColor: 'bg-[#e5f4ff]',
      borderColor: 'border-[#0996f5]/20',
      title: t('aboutPage.whyUs2Title', 'Spesialis Bromo Berpengalaman Sejak 2019'),
      desc: t('aboutPage.whyUs2Desc', 'Telah melayani ribuan wisatawan lokal maupun mancanegara dengan standar operasional prosedur (SOP) keselamatan tinggi di medan kaldera.')
    },
    {
      icon: Compass,
      color: 'text-black',
      bgColor: 'bg-[#fff700]/25',
      borderColor: 'border-[#fff700]',
      title: t('aboutPage.whyUs3Title', 'Pilihan Paket Lengkap & Fleksibel'),
      desc: t('aboutPage.whyUs3Desc', 'Mulai dari Open Trip sharing midnight, Private Trip jeep eksklusif, Luxury Picnic Savana, Sewa Trail, hingga Long Jeep berkapasitas 9 orang.')
    },
    {
      icon: Users,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200',
      title: t('aboutPage.whyUs4Title', 'Driver & Guide Asli Warga Tengger'),
      desc: t('aboutPage.whyUs4Desc', 'Dipandu oleh pengemudi Jeep berpengalaman dan guide lokal yang memahami seluk-beluk alam, spot foto tersembunyi, serta kearifan budaya leluhur.')
    },
    {
      icon: Star,
      color: 'text-rose-600',
      bgColor: 'bg-rose-50',
      borderColor: 'border-rose-200',
      title: t('aboutPage.whyUs5Title', 'Harga Transparan Tanpa Biaya Tersembunyi'),
      desc: t('aboutPage.whyUs5Desc', 'Seluruh komponen tiket masuk TNBTS, sewa jeep, driver, BBM, dan asuransi dijelaskan secara terbuka dalam e-invoice resmi pemesanan.')
    },
    {
      icon: Sparkles,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      title: t('aboutPage.whyUs6Title', 'Dokumentasi Profesional & Video Drone 4K'),
      desc: t('aboutPage.whyUs6Desc', 'Tim fotografer berpengalaman dengan kamera mirrorless/DSLR dan add-on drone udara untuk mengabadikan momen magis Anda di Bromo.')
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#111318] pt-4 pb-20 animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between py-4 border-b border-slate-200 mb-8">
          <button
            type="button"
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-bold text-[#102a56] hover:text-[#0996f5] bg-white hover:bg-[#e5f4ff] border border-slate-200 rounded-xl transition-all cursor-pointer shadow-2xs group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>{t('aboutPage.backToHome', 'Kembali ke Beranda')}</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 hidden sm:inline">{t('aboutPage.companyProfile', 'Profil Perusahaan')}</span>
            <span className="px-2.5 py-0.5 bg-[#0996f5]/10 text-[#0996f5] rounded-full text-xs font-black">
              PT Global Travel Healing
            </span>
          </div>
        </div>

        {/* HERO SECTION: Explore Bromo Bersama Spesialisnya */}
        <section className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 lg:p-12">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0996f5]/10 text-[#0996f5] rounded-full text-xs font-black tracking-wider uppercase">
                <Mountain className="w-3.5 h-3.5" />
                <span>{t('aboutPage.heroEyebrow', 'EXPLORE BROMO BERSAMA SPESIALISNYA · SEJAK 2019')}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#102a56] tracking-tight leading-tight">
                {t('aboutPage.heroHeadline', 'Mitra Perjalanan Terpercaya untuk Petualangan Tak Terlupakan di Gunung Bromo')}
              </h1>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {t('aboutPage.heroParagraph', 'Selamat datang di WisataBromo.co, platform reservasi dan operator perjalanan resmi di bawah naungan PT Global Travel Healing. Kami hadir sebagai solusi terbaik bagi Anda yang menginginkan pengalaman perjalanan yang tak hanya nyaman dan aman, tetapi juga sarat makna di kawasan Taman Nasional Bromo Tengger Semeru.')}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-2xl">
                  <div className="text-xl sm:text-2xl font-black text-[#0996f5]">{t('aboutPage.statYears', '2019')}</div>
                  <div className="text-[11px] text-slate-500 font-medium">{t('aboutPage.statYearsLabel', 'Beroperasi & Melayani')}</div>
                </div>
                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-2xl">
                  <div className="text-xl sm:text-2xl font-black text-[#102a56]">{t('aboutPage.statGuests', '10.000+')}</div>
                  <div className="text-[11px] text-slate-500 font-medium">{t('aboutPage.statGuestsLabel', 'Wisatawan Puas')}</div>
                </div>
                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-2xl col-span-2 sm:col-span-1">
                  <div className="text-xl sm:text-2xl font-black text-emerald-600">{t('aboutPage.statJeep', '100%')}</div>
                  <div className="text-[11px] text-slate-500 font-medium">{t('aboutPage.statJeepLabel', 'Armada Jeep Resmi')}</div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => onOpenBooking()}
                  className="px-6 py-3.5 bg-[#0996f5] hover:bg-[#0782d6] text-white text-xs sm:text-sm font-bold rounded-xl shadow-md shadow-[#0996f5]/20 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-[#fff700]" />
                  <span>{t('aboutPage.bookNow', 'Pesan Trip Sekarang')}</span>
                </button>
                <a
                  href="https://wa.me/6281222290318?text=Halo%20Admin%20WisataBromo.co,%20saya%20ingin%20konsultasi%20paket%20tour%20Bromo."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 bg-white hover:bg-slate-50 text-[#102a56] border border-slate-300 text-xs sm:text-sm font-bold rounded-xl transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4 text-emerald-600" />
                  <span>{t('aboutPage.callHotline', 'Hubungi Hotline WhatsApp')}</span>
                </a>
              </div>
            </div>

            {/* Showcase Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
                <img
                  src={imgHeroShowcase}
                  alt="Eksplorasi Kaldera & Sunrise Bromo bersama WisataBromo.co"
                  className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
                
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-white/60 shadow-lg text-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <div className="font-extrabold text-[#102a56] flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>{t('aboutPage.showcaseBadge', 'PT Global Travel Healing')}</span>
                    </div>
                    <span className="px-2 py-0.5 bg-[#0996f5]/10 text-[#0996f5] text-[10px] font-black rounded-md uppercase">
                      {t('aboutPage.showcaseSince', 'Sejak 2019')}
                    </span>
                  </div>
                  <p className="text-slate-600 text-[11px] leading-relaxed">
                    {t('aboutPage.showcaseDesc', 'Spesialis perjalanan Bromo terpercaya dengan armada Jeep 4x4 berizin resmi TNBTS, guide lokal ahli, dan standar kenyamanan VIP.')}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 2: Kisah & Nilai Perusahaan */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 mb-12 shadow-sm space-y-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0996f5] uppercase tracking-wider mb-2">
              <Heart className="w-3.5 h-3.5 text-rose-500" />
              <span>{t('aboutPage.storyEyebrow', 'DEDIKASI KAMI UNTUK ANDA')}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102a56] tracking-tight">
              {t('aboutPage.storyTitle', 'Lahir dari Kecintaan Mendalam terhadap Keajaiban Bromo & Kearifan Suku Tengger')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-700 leading-relaxed font-normal">
            <div className="space-y-4">
              <p>
                {t('aboutPage.storyP1', 'WisataBromo.co didirikan dengan satu komitmen sederhana: menghilangkan kerumitan, ketidakpastian harga, dan kekhawatiran wisatawan yang ingin menyaksikan keagungan fajar di kaldera Bromo.')}
              </p>
              <p>
                {t('aboutPage.storyP2', 'Sebagai kawasan konservasi di dataran tinggi dengan iklim ekstrem dan medan pasir vulkanik berliku, berwisata ke Bromo membutuhkan persiapan matang, armada kendaraan 4x4 yang prima, serta pemandu lapangan yang memahami cuaca dan kearifan masyarakat adat Tengger.')}
              </p>
            </div>
            <div className="space-y-4">
              <p>
                {t('aboutPage.storyP3', 'Kami telah mendampingi puluhan ribu pelancong — mulai dari solo traveler yang ingin menikmati kesunyian fajar, pasangan yang mengabadikan foto prewedding, rombongan keluarga lintas generasi, hingga ratusan peserta instansi kementerian dan korporat nasional.')}
              </p>
              <p>
                {t('aboutPage.storyP4', 'Setiap perjalanan kami rancang dengan penuh kehati-hatian agar Anda dapat menikmati momen tanpa rasa waswas, dengan kepastian jemput tepat waktu, tiket masuk resmi TNBTS, dan panduan hangat dari awal hingga kembali pulang.')}
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: Klien & Rekam Jejak Portofolio Resmi */}
        <section className="bg-gradient-to-br from-[#102a56] to-[#1c4079] text-white rounded-3xl p-6 sm:p-10 lg:p-12 mb-12 shadow-xl relative overflow-hidden">
          <div className="relative z-10 space-y-8">
            <div className="max-w-3xl space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 text-[#fff700] rounded-full text-xs font-bold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5 text-[#fff700]" />
                <span>{t('aboutPage.vipEyebrow', 'KEPERCAYAAN & PORTOFOLIO RESMI')}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight">
                {t('aboutPage.vipTitle', 'Dipercaya oleh Kementerian RI, Lembaga Medis, BUMN & Korporat')}
              </h2>
              <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                {t('aboutPage.vipDesc', 'Standar layanan VIP kami telah terbukti dalam menangani perjalanan dinas kenegaraan, kunjungan menteri, acara outing perusahaan besar, serta rombongan rumah sakit & asosiasi dokter spesialis.')}
              </p>
            </div>

            {/* Sub-Group 1: Perusahaan dan Instansi */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#fff700]" />
                <h3 className="text-base sm:text-lg font-black text-white">
                  {t('aboutPage.corpTitle', 'Perusahaan dan Instansi:')}
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {Array.isArray(corporateClients) && corporateClients.map((c, i) => (
                  <div
                    key={i}
                    className="bg-white/10 hover:bg-white/15 border border-white/15 rounded-2xl p-4 sm:p-5 transition-all backdrop-blur-xs flex flex-col justify-between space-y-3"
                  >
                    <div className="space-y-2">
                      <span className="inline-block px-2.5 py-0.5 bg-[#fff700] text-black text-[10px] font-black rounded-md uppercase tracking-wider">
                        {c.tag}
                      </span>
                      <h4 className="text-sm font-extrabold text-white leading-snug">
                        {c.name}
                      </h4>
                    </div>
                    <p className="text-white/75 text-xs font-medium">
                      {c.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sub-Group 2: Rumah Sakit dan Lembaga Medis */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-rose-400" />
                <h3 className="text-base sm:text-lg font-black text-white">
                  {t('aboutPage.medicalTitle', 'Rumah Sakit dan Lembaga Medis:')}
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5">
                {Array.isArray(medicalClients) && medicalClients.map((c, i) => (
                  <div
                    key={i}
                    className="bg-white/10 hover:bg-white/15 border border-white/15 rounded-2xl p-4 sm:p-5 transition-all backdrop-blur-xs flex flex-col justify-between space-y-3"
                  >
                    <div className="space-y-2">
                      <span className="inline-block px-2.5 py-0.5 bg-rose-400 text-[#111318] text-[10px] font-black rounded-md uppercase tracking-wider">
                        {c.tag}
                      </span>
                      <h4 className="text-sm font-extrabold text-white leading-snug">
                        {c.name}
                      </h4>
                    </div>
                    <p className="text-white/75 text-xs font-medium">
                      {c.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Official Team Profiles: Owner, Admin & Tour Guide */}
            <div className="pt-6 border-t border-white/15">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-bold text-white/90 mb-5">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#fff700]" />
                  <span className="text-sm font-extrabold text-white">{t('aboutPage.teamTitle', 'Tim Resmi WisataBromo.co (Owner, Admin & Tour Guide):')}</span>
                </div>
                <span className="text-[11px] text-[#fff700] font-bold">
                  {t('aboutPage.teamSub', 'Spesialis Lapangan & Manajemen Bromo')}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {/* 1. Zainuddin - Owner / CEO & Founder */}
                <div className="rounded-2xl overflow-hidden border border-white/20 bg-slate-900/90 group flex flex-col justify-between shadow-xl">
                  <img
                    src={imgOwnerZainuddin}
                    alt="Zainuddin - CEO & Founder (Owner) WisataBromo.co"
                    className="w-full h-64 sm:h-72 object-cover object-top group-hover:scale-105 transition-transform duration-500 bg-slate-950"
                    loading="lazy"
                  />
                  <div className="p-4 bg-gradient-to-t from-black/95 via-black/85 to-black/70 text-white space-y-2 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="px-2 py-0.5 bg-[#fff700] text-black text-[10px] font-black rounded uppercase tracking-wider">
                          Owner
                        </span>
                        <span className="text-[10px] text-[#fff700] font-bold">Founder</span>
                      </div>
                      <div className="text-base font-black text-white flex items-center gap-1.5">
                        <span>Zainuddin</span>
                        <CheckCircle2 className="w-4 h-4 text-[#fff700]" />
                      </div>
                      <div className="text-xs text-[#fff700] font-bold">
                        {t('aboutPage.teamZainuddinRole', 'CEO & Founder')}
                      </div>
                      <p className="text-[11px] text-white/80 leading-relaxed mt-1 font-normal">
                        {t('aboutPage.teamZainuddinBio', 'Pemilik dan pendiri WisataBromo.co (PT Global Travel Healing). Berpengalaman sejak 2019 mengawal delegasi Kementerian RI, instansi BUMN, dan ribuan wisatawan.')}
                      </p>
                    </div>
                    <div className="pt-2 border-t border-white/10 text-[10px] text-[#fff700] font-bold flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>{t('aboutPage.teamZainuddinTag', 'Founder & Tour Director')}</span>
                    </div>
                  </div>
                </div>

                {/* 2. Tiara - Admin & Layanan Pelanggan */}
                <div className="rounded-2xl overflow-hidden border border-white/20 bg-slate-900/90 group flex flex-col justify-between shadow-xl">
                  <img
                    src={imgAdminTiara}
                    alt="Tiara - Admin & Layanan Pelanggan WisataBromo.co"
                    className="w-full h-64 sm:h-72 object-cover object-top group-hover:scale-105 transition-transform duration-500 bg-slate-950"
                    loading="lazy"
                  />
                  <div className="p-4 bg-gradient-to-t from-black/95 via-black/85 to-black/70 text-white space-y-2 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="px-2 py-0.5 bg-[#0996f5] text-white text-[10px] font-black rounded uppercase tracking-wider">
                          Admin
                        </span>
                        <span className="text-[10px] text-sky-300 font-bold">Customer Care</span>
                      </div>
                      <div className="text-base font-black text-white flex items-center gap-1.5">
                        <span>Tiara</span>
                        <CheckCircle2 className="w-4 h-4 text-[#0996f5]" />
                      </div>
                      <div className="text-xs text-[#0996f5] font-bold">
                        {t('aboutPage.teamTiaraRole', 'Admin Reservasi & CS 24/7')}
                      </div>
                      <p className="text-[11px] text-white/80 leading-relaxed mt-1 font-normal">
                        {t('aboutPage.teamTiaraBio', 'Koordinator reservasi dan customer care. Memastikan tiket masuk TNBTS, invoice resmi, jadwal jemput, dan kebutuhan trip Anda terpenuhi secara rapi dan cepat.')}
                      </p>
                    </div>
                    <div className="pt-2 border-t border-white/10 text-[10px] text-sky-400 font-bold flex items-center gap-1">
                      <PhoneCall className="w-3.5 h-3.5" />
                      <span>{t('aboutPage.teamTiaraTag', 'Hotline CS & Tiket Resmi')}</span>
                    </div>
                  </div>
                </div>

                {/* 3. Haris - Tour Guide Lapangan */}
                <div className="rounded-2xl overflow-hidden border border-white/20 bg-slate-900/90 group flex flex-col justify-between shadow-xl">
                  <img
                    src={imgGuideHaris}
                    alt="Haris - Tour Guide Lapangan WisataBromo.co"
                    className="w-full h-64 sm:h-72 object-cover object-top group-hover:scale-105 transition-transform duration-500 bg-slate-950"
                    loading="lazy"
                  />
                  <div className="p-4 bg-gradient-to-t from-black/95 via-black/85 to-black/70 text-white space-y-2 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="px-2 py-0.5 bg-emerald-600 text-white text-[10px] font-black rounded uppercase tracking-wider">
                          Tour Guide
                        </span>
                        <span className="text-[10px] text-emerald-300 font-bold">Local Expert</span>
                      </div>
                      <div className="text-base font-black text-white flex items-center gap-1.5">
                        <span>Haris</span>
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div className="text-xs text-emerald-400 font-bold">
                        {t('aboutPage.teamHarisRole', 'Tour Guide Bromo')}
                      </div>
                      <p className="text-[11px] text-white/80 leading-relaxed mt-1 font-normal">
                        {t('aboutPage.teamHarisBio', 'Pemandu wisata lapangan berlisensi asli kawasan Tengger. Ahli dalam navigasi titik sunrise terbaik, jalur kaldera kawah Bromo, dan edukasi budaya masyarakat lokal.')}
                      </p>
                    </div>
                    <div className="pt-2 border-t border-white/10 text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                      <Mountain className="w-3.5 h-3.5" />
                      <span>{t('aboutPage.teamHarisTag', 'Pemandu Berpengalaman Kaldera')}</span>
                    </div>
                  </div>
                </div>

                {/* 4. Dani - Tour Guide Lapangan */}
                <div className="rounded-2xl overflow-hidden border border-white/20 bg-slate-900/90 group flex flex-col justify-between shadow-xl">
                  <img
                    src={imgGuideDani}
                    alt="Dani - Tour Guide Lapangan WisataBromo.co"
                    className="w-full h-64 sm:h-72 object-cover object-center group-hover:scale-105 transition-transform duration-500 bg-slate-950"
                    loading="lazy"
                  />
                  <div className="p-4 bg-gradient-to-t from-black/95 via-black/85 to-black/70 text-white space-y-2 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="px-2 py-0.5 bg-emerald-600 text-white text-[10px] font-black rounded uppercase tracking-wider">
                          Tour Guide
                        </span>
                        <span className="text-[10px] text-emerald-300 font-bold">Field Specialist</span>
                      </div>
                      <div className="text-base font-black text-white flex items-center gap-1.5">
                        <span>Dani</span>
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div className="text-xs text-emerald-400 font-bold">
                        {t('aboutPage.teamDaniRole', 'Tour Guide Bromo')}
                      </div>
                      <p className="text-[11px] text-white/80 leading-relaxed mt-1 font-normal">
                        {t('aboutPage.teamDaniBio', 'Pemandu lapangan ramah dan energik. Menguasai rute Jeep Hardtop 4x4, pendampingan tangga kawah aktif, serta pengambilan foto dan video estetik wisatawan.')}
                      </p>
                    </div>
                    <div className="pt-2 border-t border-white/10 text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                      <Mountain className="w-3.5 h-3.5" />
                      <span>{t('aboutPage.teamDaniTag', 'Pemandu Ramah & Fotogenik')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 4: 6 Alasan Memilih WisataBromo.co */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 mb-12 shadow-sm space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0996f5] uppercase tracking-wider">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{t('aboutPage.whyUsEyebrow', 'KEUNGGULAN OPERASIONAL')}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#102a56] tracking-tight">
              {t('aboutPage.whyUsTitle', 'Kenapa Memilih WisataBromo.co?')}
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              {t('aboutPage.whyUsDesc', 'Pengalaman wisata luar biasa tidak harus mahal. Kami memberikan nilai maksimal dan transparansi penuh untuk liburan impian Anda.')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.isArray(whyChooseUs) && whyChooseUs.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl border ${item.borderColor} ${item.bgColor} flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow`}
                >
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-center">
                    <IconComp className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-base font-extrabold text-[#102a56]">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 5: Legalitas Perusahaan, Rekening Resmi & Lokasi Basecamp */}
        <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 lg:p-12 mb-12 shadow-xl space-y-8">
          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{t('aboutPage.legalEyebrow', 'INFORMASI ENTITAS & TRANSAKSI AMAN')}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              {t('aboutPage.legalTitle', 'Legalitas Perusahaan & Rekening Resmi')}
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              {t('aboutPage.legalDesc', 'Demi kenyamanan dan keamanan Anda, seluruh pembayaran down payment (DP) dan pelunasan hanya dilakukan ke rekening resmi perusahaan berbadan hukum.')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Rekening Resmi Box */}
            <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-6 space-y-4">
              <div className="text-xs font-bold text-[#fff700] uppercase tracking-wider flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-[#fff700]" />
                <span>{t('aboutPage.bankTitle', 'Rekening Bank Resmi Perusahaan:')}</span>
              </div>

              <div className="bg-slate-900 border border-slate-700/80 rounded-xl p-4 space-y-1">
                <div className="text-[11px] text-slate-400">{t('aboutPage.bcaSub', 'Bank Central Asia (BCA)')}</div>
                <div className="text-xl sm:text-2xl font-mono font-black text-white tracking-wider">
                  5200888415
                </div>
                <div className="text-xs font-bold text-emerald-400">
                  {t('aboutPage.bcaOwner', 'a/n PT Global Travel Healing')}
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-700/80 rounded-xl p-4 space-y-1">
                <div className="text-[11px] text-slate-400">{t('aboutPage.ewalletSub', 'E-Wallet Resmi (DANA / OVO)')}</div>
                <div className="text-lg font-mono font-bold text-white tracking-wider">
                  08113212318
                </div>
                <div className="text-xs font-bold text-slate-300">
                  {t('aboutPage.ewalletOwner', 'a/n Achmad J (Founder & Tour Leader)')}
                </div>
              </div>

              <div className="p-3 bg-emerald-950/60 border border-emerald-500/30 rounded-xl text-emerald-300 text-[11px] leading-relaxed">
                {t('aboutPage.verifiedNote', '✓ Transaksi diverifikasi otomatis dengan E-Invoice PDF berstempel resmi dan notifikasi instan via WhatsApp dan Email.')}
              </div>
            </div>

            {/* Basecamp & Support Box */}
            <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-6 space-y-4">
              <div className="text-xs font-bold text-[#0996f5] uppercase tracking-wider flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#0996f5]" />
                <span>{t('aboutPage.officeTitle', 'Kantor Operasional & Basecamp Lapangan:')}</span>
              </div>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="p-3 bg-slate-900 border border-slate-700/80 rounded-xl space-y-1">
                  <div className="font-bold text-white">{t('aboutPage.basecamp1Title', '📍 Basecamp 1 (Rute Malang via Poncokusumo):')}</div>
                  <div className="text-slate-400">{t('aboutPage.basecamp1Addr', 'Jalan Raya Gubugklakah No. 147, Gubugklakah, Poncokusumo, Kabupaten Malang, Jawa Timur')}</div>
                </div>

                <div className="p-3 bg-slate-900 border border-slate-700/80 rounded-xl space-y-1">
                  <div className="font-bold text-white">{t('aboutPage.basecamp2Title', '📍 Basecamp 2 (Rute Probolinggo via Sukapura):')}</div>
                  <div className="text-slate-400">{t('aboutPage.basecamp2Addr', 'Jalan Pasar Sayur No. 43, Sukapura, Kabupaten Probolinggo, Jawa Timur')}</div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                  <a
                    href="mailto:wisatabromo.co@gmail.com"
                    className="p-2.5 bg-slate-900 hover:bg-slate-700 border border-slate-700 rounded-xl text-slate-300 text-xs font-bold flex items-center gap-2 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#0996f5]" />
                    <span>wisatabromo.co@gmail.com</span>
                  </a>
                  <a
                    href="https://wa.me/6281222290318"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-slate-900 hover:bg-slate-700 border border-slate-700 rounded-xl text-slate-300 text-xs font-bold flex items-center gap-2 transition-colors"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
                    <span>+62 812 2229 0318</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BOTTOM CTA: Siap Merencanakan Liburan? */}
        <section className="bg-gradient-to-r from-[#102a56] via-[#0996f5] to-emerald-600 text-white rounded-3xl p-8 sm:p-10 text-center space-y-5 shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight max-w-xl mx-auto">
            {t('aboutPage.ctaTitle', 'Siap Menjelajahi Keindahan Bromo Bersama Kami?')}
          </h2>
          <p className="text-white/85 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
            {t('aboutPage.ctaDesc', 'Konsultasikan rencana liburan Anda, rombongan keluarga, maupun outing kantor bersama tim spesialis kami sekarang. Dapatkan itinerary terbaik dan harga jujur tanpa repot.')}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => onOpenBooking()}
              className="px-6 py-3.5 bg-white text-[#102a56] hover:bg-slate-100 font-extrabold text-xs sm:text-sm rounded-xl shadow-lg transition-transform active:scale-95 cursor-pointer"
            >
              {t('aboutPage.ctaCalcButton', 'Lihat Kalkulator & Pesan Trip')}
            </button>
            <a
              href="https://wa.me/6281222290318?text=Halo%20Admin%20WisataBromo.co,%20saya%20tertarik%20dengan%20paket%20tour%20Bromo."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold text-xs sm:text-sm rounded-xl transition-all shadow-md flex items-center gap-2 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-white" />
              <span>{t('aboutPage.ctaWaButton', 'Chat WhatsApp Customer Service')}</span>
            </a>
          </div>
        </section>

      </div>
    </div>
  );
};
