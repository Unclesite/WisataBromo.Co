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
import imgBannerShowcase from '../assets/images/about_banner_showcase.png';

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
  const corporateClients = [
    {
      name: 'Kementerian Lingkungan Hidup dan Kehutanan (KLHK)',
      detail: 'BPKHTL Wil II Palembang',
      tag: 'Kementerian RI'
    },
    {
      name: 'Menteri Ketenagakerjaan RI, Prof. Yassierli',
      detail: 'Kunjungan Kerja & Wisata Eksklusif',
      tag: 'Pejabat Negara'
    },
    {
      name: 'PT Haida Agriculture Indonesia',
      detail: 'Corporate Outing & Employee Appreciation',
      tag: 'Korporat Nasional'
    },
    {
      name: 'PLN Krian Sidoarjo',
      detail: 'Employee Gathering & Tour Bromo',
      tag: 'BUMN Energi'
    },
    {
      name: 'PT MS Aishah Mandiri (Umroh Aishah)',
      detail: 'Paket Wisata & Family Gathering Syariah',
      tag: 'Biro Perjalanan'
    },
    {
      name: 'Dinas PUPR Jakarta, dan masih banyak lainnya',
      detail: 'Instansi Pemerintah Daerah Khusus Jakarta',
      tag: 'Pemerintah Daerah'
    },
    {
      name: 'Adi Wira Jaya Group',
      detail: 'Corporate Gathering & Outbound',
      tag: 'Korporat Swasta'
    },
    {
      name: 'SMK Al Haramain III',
      detail: 'Study Tour & Edukasi Geologi Bromo',
      tag: 'Institusi Pendidikan'
    },
    {
      name: 'Pusat oleh-oleh Kepala Singa, Sidoarjo',
      detail: 'Family Gathering & Pegawai',
      tag: 'Mitra Industri'
    },
    {
      name: 'Ndalem Ngropoh',
      detail: 'Rombongan Komunitas & Outing Bersama',
      tag: 'Mitra & Budaya'
    },
  ];

  const medicalClients = [
    {
      name: 'RSAL Dr. Ramelan',
      detail: 'Rumah Sakit Angkatan Laut Surabaya (Outing Tenaga Medis)',
      tag: 'Rumah Sakit Militer'
    },
    {
      name: 'RS Siloam',
      detail: 'Jaringan Rumah Sakit Swasta Terkemuka Indonesia',
      tag: 'Rumah Sakit Swasta'
    },
    {
      name: 'RS Mata Undaan',
      detail: 'Rumah Sakit Spesialis Mata Legendaris Jawa Timur',
      tag: 'Rumah Sakit Spesialis'
    },
    {
      name: 'Perhimpunan Dokter Spesialis Patologi Klinik (PDSPK)',
      detail: 'Asosiasi Dokter Spesialis Medis Indonesia',
      tag: 'Lembaga Medis'
    },
  ];

  const whyChooseUs = [
    {
      icon: ShieldCheck,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
      title: 'Legalitas Resmi & Berizin TNBTS',
      desc: 'Beroperasi di bawah naungan PT Global Travel Healing dengan izin resmi Taman Nasional Bromo Tengger Semeru dan rekening bank atas nama perusahaan.'
    },
    {
      icon: Award,
      color: 'text-[#3d72fe]',
      bgColor: 'bg-[#eaf2ff]',
      borderColor: 'border-[#3d72fe]/20',
      title: 'Spesialis Bromo Berpengalaman Sejak 2019',
      desc: 'Telah melayani ribuan wisatawan lokal maupun mancanegara dengan standar operasional prosedur (SOP) keselamatan tinggi di medan kaldera.'
    },
    {
      icon: Compass,
      color: 'text-amber-600',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
      title: 'Pilihan Paket Lengkap & Fleksibel',
      desc: 'Mulai dari Open Trip sharing midnight, Private Trip jeep eksklusif, Luxury Picnic Savana, Sewa Trail, hingga Long Jeep berkapasitas 9 orang.'
    },
    {
      icon: Users,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200',
      title: 'Driver & Guide Asli Warga Tengger',
      desc: 'Dipandu oleh pengemudi Jeep berpengalaman dan guide lokal yang memahami seluk-beluk alam, spot foto tersembunyi, serta kearifan budaya leluhur.'
    },
    {
      icon: Star,
      color: 'text-rose-600',
      bgColor: 'bg-rose-50',
      borderColor: 'border-rose-200',
      title: 'Harga Transparan Tanpa Biaya Tersembunyi',
      desc: 'Seluruh komponen tiket masuk TNBTS, sewa jeep, driver, BBM, dan asuransi dijelaskan secara terbuka dalam e-invoice resmi pemesanan.'
    },
    {
      icon: Sparkles,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      title: 'Dokumentasi Profesional & Video Drone 4K',
      desc: 'Tim fotografer berpengalaman dengan kamera mirrorless/DSLR dan add-on drone udara untuk mengabadikan momen magis Anda di Bromo.'
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
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-bold text-[#102a56] hover:text-[#3d72fe] bg-white hover:bg-[#eaf2ff] border border-slate-200 rounded-xl transition-all cursor-pointer shadow-2xs group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Kembali ke Beranda</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 hidden sm:inline">Profil Perusahaan</span>
            <span className="px-2.5 py-0.5 bg-[#3d72fe]/10 text-[#3d72fe] rounded-full text-xs font-black">
              PT Global Travel Healing
            </span>
          </div>
        </div>

        {/* HERO SECTION: Explore Bromo Bersama Spesialisnya */}
        <section className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 lg:p-12">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#3d72fe]/10 text-[#3d72fe] rounded-full text-xs font-black tracking-wider uppercase">
                <Mountain className="w-3.5 h-3.5" />
                <span>EXPLORE BROMO BERSAMA SPESIALISNYA · SEJAK 2019</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#102a56] tracking-tight leading-tight">
                Mitra Perjalanan Terpercaya untuk Petualangan Tak Terlupakan di Gunung Bromo
              </h1>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Selamat datang di <strong>WisataBromo.co</strong>, platform reservasi dan operator perjalanan resmi di bawah naungan <strong>PT Global Travel Healing</strong>. Kami hadir sebagai solusi terbaik bagi Anda yang menginginkan pengalaman perjalanan yang tak hanya nyaman dan aman, tetapi juga sarat makna di kawasan Taman Nasional Bromo Tengger Semeru.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-2xl">
                  <div className="text-xl sm:text-2xl font-black text-[#3d72fe]">2019</div>
                  <div className="text-[11px] text-slate-500 font-medium">Beroperasi &amp; Melayani</div>
                </div>
                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-2xl">
                  <div className="text-xl sm:text-2xl font-black text-[#102a56]">10.000+</div>
                  <div className="text-[11px] text-slate-500 font-medium">Wisatawan Puas</div>
                </div>
                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-2xl col-span-2 sm:col-span-1">
                  <div className="text-xl sm:text-2xl font-black text-emerald-600">100%</div>
                  <div className="text-[11px] text-slate-500 font-medium">Armada Jeep Resmi</div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => onOpenBooking()}
                  className="px-6 py-3.5 bg-[#3d72fe] hover:bg-[#2b5ae0] text-white text-xs sm:text-sm font-bold rounded-xl shadow-md shadow-[#3d72fe]/20 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-[#ffc928]" />
                  <span>Pesan Trip Sekarang</span>
                </button>
                <a
                  href="https://wa.me/6281222290318?text=Halo%20Admin%20WisataBromo.co,%20saya%20ingin%20konsultasi%20paket%20tour%20Bromo."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 bg-white hover:bg-slate-50 text-[#102a56] border border-slate-300 text-xs sm:text-sm font-bold rounded-xl transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4 text-emerald-600" />
                  <span>Hubungi Hotline WhatsApp</span>
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
                      <span>PT Global Travel Healing</span>
                    </div>
                    <span className="px-2 py-0.5 bg-[#3d72fe]/10 text-[#3d72fe] text-[10px] font-black rounded-md uppercase">
                      Sejak 2019
                    </span>
                  </div>
                  <p className="text-slate-600 text-[11px] leading-relaxed">
                    Spesialis perjalanan Bromo terpercaya dengan armada Jeep 4x4 berizin resmi TNBTS, guide lokal ahli, dan standar kenyamanan VIP.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 2: Kisah & Nilai Perusahaan */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 mb-12 shadow-sm space-y-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3d72fe] uppercase tracking-wider mb-2">
              <Heart className="w-3.5 h-3.5 text-rose-500" />
              <span>DEDIKASI KAMI UNTUK ANDA</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102a56] tracking-tight">
              Lahir dari Kecintaan Mendalam terhadap Keajaiban Bromo &amp; Kearifan Suku Tengger
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-700 leading-relaxed font-normal">
            <div className="space-y-4">
              <p>
                WisataBromo.co didirikan dengan satu komitmen sederhana: <strong>menghilangkan kerumitan, ketidakpastian harga, dan kekhawatiran wisatawan</strong> yang ingin menyaksikan keagungan fajar di kaldera Bromo.
              </p>
              <p>
                Sebagai kawasan konservasi di dataran tinggi dengan iklim ekstrem dan medan pasir vulkanik berliku, berwisata ke Bromo membutuhkan persiapan matang, armada kendaraan 4x4 yang prima, serta pemandu lapangan yang memahami cuaca dan kearifan masyarakat adat Tengger.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                Kami telah mendampingi puluhan ribu pelancong — mulai dari solo traveler yang ingin menikmati kesunyian fajar, pasangan yang mengabadikan foto prewedding, rombongan keluarga lintas generasi, hingga ratusan peserta instansi kementerian dan korporat nasional.
              </p>
              <p>
                Setiap perjalanan kami rancang dengan penuh kehati-hatian agar Anda dapat menikmati momen tanpa rasa waswas, dengan kepastian jemput tepat waktu, tiket masuk resmi TNBTS, dan panduan hangat dari awal hingga kembali pulang.
              </p>
            </div>
          </div>

          {/* Activity Showcase Banner */}
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm mt-4">
            <img
              src={imgBannerShowcase}
              alt="WisataBromo.co Tour Showcase"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </section>

        {/* SECTION 3: Klien & Rekam Jejak Portofolio Resmi */}
        <section className="bg-gradient-to-br from-[#102a56] to-[#1c4079] text-white rounded-3xl p-6 sm:p-10 lg:p-12 mb-12 shadow-xl relative overflow-hidden">
          <div className="relative z-10 space-y-8">
            <div className="max-w-3xl space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 text-[#ffc928] rounded-full text-xs font-bold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5" />
                <span>KEPERCAYAAN &amp; PORTOFOLIO RESMI</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight">
                Dipercaya oleh Kementerian RI, Lembaga Medis, BUMN &amp; Korporat
              </h2>
              <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                Standar layanan VIP kami telah terbukti dalam menangani perjalanan dinas kenegaraan, kunjungan menteri, acara outing perusahaan besar, serta rombongan rumah sakit &amp; asosiasi dokter spesialis.
              </p>
            </div>

            {/* Sub-Group 1: Perusahaan dan Instansi */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#ffc928]" />
                <h3 className="text-base sm:text-lg font-black text-white">
                  Perusahaan dan Instansi:
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {corporateClients.map((c, i) => (
                  <div
                    key={i}
                    className="bg-white/10 hover:bg-white/15 border border-white/15 rounded-2xl p-4 sm:p-5 transition-all backdrop-blur-xs flex flex-col justify-between space-y-3"
                  >
                    <div className="space-y-2">
                      <span className="inline-block px-2.5 py-0.5 bg-[#ffc928] text-[#111318] text-[10px] font-black rounded-md uppercase tracking-wider">
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
                  Rumah Sakit dan Lembaga Medis:
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5">
                {medicalClients.map((c, i) => (
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
                  <Users className="w-4 h-4 text-[#ffc928]" />
                  <span className="text-sm font-extrabold text-white">Tim Resmi WisataBromo.co (Owner, Admin &amp; Tour Guide):</span>
                </div>
                <span className="text-[11px] text-[#ffc928] font-bold">
                  Spesialis Lapangan &amp; Manajemen Bromo
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
                        <span className="px-2 py-0.5 bg-[#ffc928] text-[#111318] text-[10px] font-black rounded uppercase tracking-wider">
                          Owner
                        </span>
                        <span className="text-[10px] text-amber-300 font-bold">Founder</span>
                      </div>
                      <div className="text-base font-black text-white flex items-center gap-1.5">
                        <span>Zainuddin</span>
                        <CheckCircle2 className="w-4 h-4 text-[#ffc928]" />
                      </div>
                      <div className="text-xs text-[#ffc928] font-bold">
                        CEO &amp; Founder
                      </div>
                      <p className="text-[11px] text-white/80 leading-relaxed mt-1 font-normal">
                        Pemilik dan pendiri WisataBromo.co (PT Global Travel Healing). Berpengalaman sejak 2019 mengawal delegasi Kementerian RI, instansi BUMN, dan ribuan wisatawan.
                      </p>
                    </div>
                    <div className="pt-2 border-t border-white/10 text-[10px] text-amber-400 font-bold flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Founder &amp; Tour Director</span>
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
                        <span className="px-2 py-0.5 bg-[#3d72fe] text-white text-[10px] font-black rounded uppercase tracking-wider">
                          Admin
                        </span>
                        <span className="text-[10px] text-sky-300 font-bold">Customer Care</span>
                      </div>
                      <div className="text-base font-black text-white flex items-center gap-1.5">
                        <span>Tiara</span>
                        <CheckCircle2 className="w-4 h-4 text-[#3d72fe]" />
                      </div>
                      <div className="text-xs text-[#3d72fe] font-bold">
                        Admin Reservasi &amp; CS 24/7
                      </div>
                      <p className="text-[11px] text-white/80 leading-relaxed mt-1 font-normal">
                        Koordinator reservasi dan customer care. Memastikan tiket masuk TNBTS, invoice resmi, jadwal jemput, dan kebutuhan trip Anda terpenuhi secara rapi dan cepat.
                      </p>
                    </div>
                    <div className="pt-2 border-t border-white/10 text-[10px] text-sky-400 font-bold flex items-center gap-1">
                      <PhoneCall className="w-3.5 h-3.5" />
                      <span>Hotline CS &amp; Tiket Resmi</span>
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
                        Tour Guide Bromo
                      </div>
                      <p className="text-[11px] text-white/80 leading-relaxed mt-1 font-normal">
                        Pemandu wisata lapangan berlisensi asli kawasan Tengger. Ahli dalam navigasi titik sunrise terbaik, jalur kaldera kawah Bromo, dan edukasi budaya masyarakat lokal.
                      </p>
                    </div>
                    <div className="pt-2 border-t border-white/10 text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                      <Mountain className="w-3.5 h-3.5" />
                      <span>Pemandu Berpengalaman Kaldera</span>
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
                        Tour Guide Bromo
                      </div>
                      <p className="text-[11px] text-white/80 leading-relaxed mt-1 font-normal">
                        Pemandu lapangan ramah dan energik. Menguasai rute Jeep Hardtop 4x4, pendampingan tangga kawah aktif, serta pengambilan foto dan video estetik wisatawan.
                      </p>
                    </div>
                    <div className="pt-2 border-t border-white/10 text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                      <Mountain className="w-3.5 h-3.5" />
                      <span>Pemandu Ramah &amp; Fotogenik</span>
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
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3d72fe] uppercase tracking-wider">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>KEUNGGULAN OPERASIONAL</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#102a56] tracking-tight">
              Kenapa Memilih WisataBromo.co?
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Pengalaman wisata luar biasa tidak harus mahal. Kami memberikan nilai maksimal dan transparansi penuh untuk liburan impian Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, idx) => {
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
              <span>INFORMASI ENTITAS &amp; TRANSAKSI AMAN</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              Legalitas Perusahaan &amp; Rekening Resmi
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Demi keamanan transaksi Anda, seluruh pembayaran down payment (DP) dan pelunasan hanya dilakukan ke rekening resmi perusahaan berbadan hukum.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Rekening Resmi Box */}
            <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-6 space-y-4">
              <div className="text-xs font-bold text-[#ffc928] uppercase tracking-wider flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-[#ffc928]" />
                <span>Rekening Bank Resmi Perusahaan:</span>
              </div>

              <div className="bg-slate-900 border border-slate-700/80 rounded-xl p-4 space-y-1">
                <div className="text-[11px] text-slate-400">Bank Central Asia (BCA)</div>
                <div className="text-xl sm:text-2xl font-mono font-black text-white tracking-wider">
                  5200888415
                </div>
                <div className="text-xs font-bold text-emerald-400">
                  a/n PT Global Travel Healing
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-700/80 rounded-xl p-4 space-y-1">
                <div className="text-[11px] text-slate-400">E-Wallet Resmi (DANA / OVO)</div>
                <div className="text-lg font-mono font-bold text-white tracking-wider">
                  08113212318
                </div>
                <div className="text-xs font-bold text-slate-300">
                  a/n Achmad J (Founder &amp; Tour Leader)
                </div>
              </div>

              <div className="p-3 bg-emerald-950/60 border border-emerald-500/30 rounded-xl text-emerald-300 text-[11px] leading-relaxed">
                ✓ Transaksi diverifikasi otomatis dengan E-Invoice PDF berstempel resmi dan notifikasi instan via WhatsApp dan Email.
              </div>
            </div>

            {/* Basecamp & Support Box */}
            <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-6 space-y-4">
              <div className="text-xs font-bold text-[#3d72fe] uppercase tracking-wider flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#3d72fe]" />
                <span>Kantor Operasional &amp; Basecamp Lapangan:</span>
              </div>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="p-3 bg-slate-900 border border-slate-700/80 rounded-xl space-y-1">
                  <div className="font-bold text-white">📍 Basecamp 1 (Rute Malang via Poncokusumo):</div>
                  <div className="text-slate-400">Jalan Raya Gubugklakah No. 147, Gubugklakah, Poncokusumo, Kabupaten Malang, Jawa Timur</div>
                </div>

                <div className="p-3 bg-slate-900 border border-slate-700/80 rounded-xl space-y-1">
                  <div className="font-bold text-white">📍 Basecamp 2 (Rute Probolinggo via Sukapura):</div>
                  <div className="text-slate-400">Jalan Pasar Sayur No. 43, Sukapura, Kabupaten Probolinggo, Jawa Timur</div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                  <a
                    href="mailto:wisatabromo.co@gmail.com"
                    className="p-2.5 bg-slate-900 hover:bg-slate-700 border border-slate-700 rounded-xl text-slate-300 text-xs font-bold flex items-center gap-2 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#3d72fe]" />
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
        <section className="bg-gradient-to-r from-[#102a56] via-[#3d72fe] to-emerald-600 text-white rounded-3xl p-8 sm:p-10 text-center space-y-5 shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight max-w-xl mx-auto">
            Siap Menjelajahi Keindahan Bromo Bersama Kami?
          </h2>
          <p className="text-white/85 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
            Konsultasikan rencana liburan Anda, rombongan keluarga, maupun outing kantor bersama tim spesialis kami sekarang. Dapatkan itinerary terbaik dan harga jujur tanpa repot.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => onOpenBooking()}
              className="px-6 py-3.5 bg-white text-[#102a56] hover:bg-slate-100 font-extrabold text-xs sm:text-sm rounded-xl shadow-lg transition-transform active:scale-95 cursor-pointer"
            >
              Lihat Kalkulator &amp; Pesan Trip
            </button>
            <a
              href="https://wa.me/6281222290318?text=Halo%20Admin%20WisataBromo.co,%20saya%20tertarik%20dengan%20paket%20tour%20Bromo."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold text-xs sm:text-sm rounded-xl transition-all shadow-md flex items-center gap-2 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-white" />
              <span>Chat WhatsApp Customer Service</span>
            </a>
          </div>
        </section>

      </div>
    </div>
  );
};
