import { SupportedLanguage } from '../../i18n/LanguageContext';
import imgFamilyHero from '../../assets/images/bromo_picnic_savana_1790773999908.jpg';
import imgJeepFamily from '../../assets/images/bromo_long_jeep_1790774030187.jpg';
import imgSunrisePoint from '../../assets/images/bromo_sunrise_jeep_1790773945206.jpg';

export interface AccessibilitySpotRow {
  spot: string;
  toddlerBaby: string;
  disability: string;
  senior: string;
}

export interface GroupGuidanceBlock {
  id: string;
  badge: string;
  emoji: string;
  title: string;
  subtitle: string;
  tone: 'emerald' | 'sky' | 'amber' | 'indigo';
  safePoint: {
    symbol: string;
    label: string;
    text: string;
  };
  riskPoint: {
    symbol: string;
    label: string;
    text: string;
  };
  jeepTipPoint: {
    symbol: string;
    label: string;
    text: string;
  };
}

export interface BabySpecificItem {
  id: string;
  symbol: string;
  title: string;
  badge: string;
  description: string;
}

export interface UniversalPrepItem {
  symbol: string;
  title: string;
  description: string;
}

export interface LocalizedFamilySafetyArticleContent {
  id: string;
  slug: string;
  title: string;
  metaDescription: string;
  author: string;
  publishDate: string;
  readTime: string;
  category: string;
  categoryLabel: string;
  heroImage: string;
  inlineImage1: string;
  inlineImage1Caption: string;
  inlineImage2: string;
  inlineImage2Caption: string;
  verdictBox: {
    eyebrow: string;
    headline: string;
    statement: string;
    highlights: string[];
  };
  introduction: string[];
  spotMatrixTitle: string;
  spotMatrixSubtitle: string;
  spotMatrixHeaders: {
    spot: string;
    toddlerBaby: string;
    disability: string;
    senior: string;
  };
  spotMatrixRows: AccessibilitySpotRow[];
  groupsSectionTitle: string;
  groupsSectionSubtitle: string;
  toddlerBlock: GroupGuidanceBlock;
  babySection: {
    badge: string;
    title: string;
    subtitle: string;
    items: BabySpecificItem[];
  };
  disabilityBlock: GroupGuidanceBlock;
  seniorBlock: GroupGuidanceBlock;
  universalPrepTitle: string;
  universalPrepSubtitle: string;
  universalPrepItems: UniversalPrepItem[];
  warningsTitle: string;
  warningsSubtitle: string;
  warnings: string[];
  proTipBox: {
    title: string;
    content: string;
  };
  conclusionTitle: string;
  conclusion: string;
  ctaButton: string;
  whatsappText: string;
  sharePrompt: string;
  tags: string[];
}

export const ARTICLE_AMAN_BROMO_KELUARGA: Record<
  SupportedLanguage,
  LocalizedFamilySafetyArticleContent
> = {
  id: {
    id: 'aman-ke-bromo-balita-difabel-lansia',
    slug: 'aman-nggak-ke-bromo-panduan-balita-difabel-lansia',
    title: 'Aman Nggak ke Bromo? Panduan Bromo untuk Balita, Difabel, dan Lansia',
    metaDescription:
      'Panduan jujur dan lengkap wisata Gunung Bromo untuk balita, bayi, difabel, dan lansia: penilaian aman per spot (Viewpoint, Lautan Pasir, Tangga Kawah), syarat Jeep Private, perlengkapan bayi, kesehatan, hingga peringatan penting.',
    author: 'Tim Editorial WisataBromo.co',
    publishDate: '27 November 2026',
    readTime: '7 Menit Baca',
    category: 'tips_wisata',
    categoryLabel: 'Tips & Panduan Wisata',
    heroImage: imgFamilyHero,
    inlineImage1: imgJeepFamily,
    inlineImage1Caption:
      'Dengan layanan Private Jeep 4x4, rombongan keluarga bersama balita, lansia, maupun pengguna kursi roda dapat menikmati Lautan Pasir dengan ritme santai dan fleksibel.',
    inlineImage2: imgSunrisePoint,
    inlineImage2Caption:
      'Beberapa titik viewpoint sunrise seperti Penanjakan 1 & 2 serta Bukit Cinta dapat dijangkau kendaraan sehingga rombongan rentan tidak perlu berjalan jauh menanjak.',
    verdictBox: {
      eyebrow: '✅ PENILAIAN UMUM • WAJIB BACA SEBELUM BERANGKAT',
      headline: 'Ya, Bromo BISA Dikunjungi — Dengan Penyesuaian Rute & Persiapan Ekstra',
      statement:
        'Gunung Bromo bisa dikunjungi oleh kelompok rentan (balita, bayi, difabel, dan lansia), tetapi ada catatan penting di setiap spot. Kuncinya adalah menyesuaikan rute, memilih Jeep Private yang fleksibel, tidak memaksakan naik 250 anak tangga kawah, dan membawa persiapan ekstra.',
      highlights: [
        '✅ Viewpoint & Lautan Pasir relatif aman dengan penyesuaian jam dan kendaraan.',
        '⚠️ Kawah Bromo (250 anak tangga curam) & suhu ekstrem dini hari adalah titik risiko utama.',
        '🚐 Jeep Private wajib dipilih agar jadwal berhenti, suhu kabin, dan durasi bisa disesuaikan penuh.',
      ],
    },
    introduction: [
      'Banyak keluarga yang ingin mengajak si kecil, orang tua lanjut usia, atau anggota keluarga penyandang disabilitas menikmati keajaiban alam Gunung Bromo — namun ragu: "Aman nggak ya? Medannya ekstrem nggak? Bayi atau lansia kuat nggak menghadapi dinginnya?"',
      'Jawabannya tegas: Bromo tetap bisa dinikmati dengan aman dan berkesan oleh balita, bayi, difabel, maupun lansia, ASALKAN Anda tahu persis batas aman di tiap spot dan tidak menyamakan itinerary-nya dengan rombongan backpacker muda. Berikut panduan lengkap, jujur, dan terstruktur untuk setiap kelompok usia dan kebutuhan khusus.',
    ],
    spotMatrixTitle: 'Peta Cepat Kelayakan Spot Bromo per Kelompok',
    spotMatrixSubtitle:
      'Gunakan ringkasan ini untuk menyusun rute keluarga yang paling aman dan bebas drama.',
    spotMatrixHeaders: {
      spot: 'Spot Wisata Bromo',
      toddlerBaby: '🍼 Balita & Bayi',
      disability: '♿ Difabel / Kursi Roda',
      senior: '👵 Lansia',
    },
    spotMatrixRows: [
      {
        spot: 'Sunrise Point (Penanjakan 1 & 2, Bukit Cinta)',
        toddlerBaby: '⚠️ Sangat dingin (bisa 2°C). Bayi sebaiknya tunggu di Jeep/area hangat.',
        disability: '✅ Akses kendaraan dekat spot (Penanjakan 1 & 2, Bukit Cinta) dengan pendamping.',
        senior: '⚠️ Risiko dingin ekstrem untuk jantung/paru. Wajib jaket tebal & tidak terlalu malam.',
      },
      {
        spot: 'Lautan Pasir & Savana Bukit Teletubbies',
        toddlerBaby: '✅ Aman! Suhu lebih hangat saat pagi, anak bisa main pasir dalam pengawasan.',
        disability: '✅ Bisa diakses kursi roda (waspada selip di pasir), sangat disarankan Jeep Private.',
        senior: '✅ Aman & nyaman! Pemandangan megah langsung dari dekat Jeep tanpa mendaki.',
      },
      {
        spot: 'Kawah Bromo (250 Anak Tangga Curam)',
        toddlerBaby: '⚠️ Tidak disarankan! Tangga curam, sempit, berdebu & penuh asap belerang.',
        disability: '⚠️ Tidak ramah kursi roda (tidak ada ramp/jalur khusus disabilitas).',
        senior: '⚠️ Berat untuk sendi lutut & pernapasan (ketinggian 2.300+ mdpl). Hindari memaksa.',
      },
    ],
    groupsSectionTitle: 'Panduan Detail Bromo untuk Balita, Bayi, Difabel & Lansia',
    groupsSectionSubtitle:
      'Perhatikan tanda ✅ aman jika, ⚠️ risiko, 🚐 tips jeep, 💊 kesehatan, dan 🍼 panduan bayi di bawah ini.',
    toddlerBlock: {
      id: 'panduan-balita',
      badge: 'KELOMPOK 01 • BALITA / BATITA',
      emoji: '🧒',
      title: 'Panduan Bromo untuk Balita / Batita (1–5 Tahun)',
      subtitle: 'Seru bermain di Lautan Pasir saat matahari naik, cukup hindari tangga curam kawah',
      tone: 'emerald',
      safePoint: {
        symbol: '✅',
        label: 'Aman di Lautan Pasir',
        text: 'Lautan Pasir aman untuk balita. Saat matahari mulai naik (pukul 07.00 ke atas), suhu di Lautan Pasir sudah tidak sedingin di sunrise point. Anak-anak bisa berjalan santai, berfoto dengan Jeep, atau bermain pasir vulkanik — tetap dengan pengawasan penuh orang tua.',
      },
      riskPoint: {
        symbol: '⚠️',
        label: 'Risiko Lain yang Perlu Diwaspadai',
        text: 'Medan tangga menuju bibir Kawah Bromo sangat curam, berdebu, dan berdesakan dengan wisatawan lain maupun jalur kuda. Paparan angin kencang dan debu pasir halus juga mudah membuat anak rewel atau batuk.',
      },
      jeepTipPoint: {
        symbol: '🚐',
        label: 'Tips Jeep & Rute Balita',
        text: 'Tetap fokus di area viewpoint sunrise dan Lautan Pasir / Savana. Jangan memaksakan membawa balita naik tangga kawah. Siapkan perlengkapan ekstra seperti pakaian berlapis (layering), selimut hangat di dalam Jeep, topi kupluk, dan masker anak.',
      },
    },
    babySection: {
      badge: '🍼 TAMBAHAN KHUSUS • BAYI (< 1 TAHUN)',
      title: '🍼 Panduan Khusus Membawa Bayi ke Gunung Bromo',
      subtitle:
        'Membawa bayi membutuhkan penyesuaian jauh lebih ketat dibanding balita — utamakan suhu tubuh hangat dan kesehatan pernapasan.',
      items: [
        {
          id: 'baby-gear',
          symbol: '🍼',
          title: 'Perlengkapan Wajib Bayi (Gendongan, Bukan Stroller)',
          badge: '🧥 PERLENGKAPAN BAYI',
          description:
            'Wajib bawa gendongan baby carrier (jangan bawa stroller karena medan berpasir, berbatu, dan tidak rata). Siapkan pakaian hangat berlapis, selimut tebal, topi kupluk, sarung tangan, kaus kaki tebal, masker khusus bayi untuk debu, serta termos air hangat untuk menyeduh susu.',
        },
        {
          id: 'baby-jeep',
          symbol: '🚐',
          title: 'Pilihan Jeep: Wajib Sewa Jeep Private',
          badge: '🚐 TIPS JEEP WAJIB',
          description:
            'Wajib menyewa Jeep Private dan jangan ikut open trip ramai. Dengan Jeep Private, Anda bebas berhenti kapan saja di tempat teduh jika bayi rewel, lapar, butuh menyusui, atau perlu ganti popok tanpa sungkan terhadap peserta lain.',
        },
        {
          id: 'baby-timing',
          symbol: '⏱️',
          title: 'Waktu Singkat & Hindari Suhu Ekstrem Penanjakan (2°C)',
          badge: '⏱️ ATUR WAKTU',
          description:
            'Jangan memaksakan bayi ikut menunggu sunrise di Penanjakan yang suhunya bisa menyentuh 2°C. Cukup tunggu di dalam kabin Jeep yang tertutup atau di area warung yang lebih hangat, lalu baru bergabung ke Lautan Pasir setelah matahari sudah naik dan udara menghangat.',
        },
        {
          id: 'baby-health',
          symbol: '💊',
          title: 'Kesehatan Bayi Harus 100% Fit (Tidak Flu/Batuk)',
          badge: '⚠️ RISIKO KESEHATAN',
          description:
            'Pastikan bayi benar-benar sehat dan tidak sedang flu, pilek, atau batuk sebelum berangkat. Suhu ekstrem dan udara tipis pegunungan bisa memicu masalah pernapasan. Selalu siapkan obat-obatan pribadi bayi, minyak telon, dan P3K dasar.',
        },
        {
          id: 'baby-diaper',
          symbol: '🧷',
          title: 'Persiapan Ganti Popok Mandiri',
          badge: '🧷 FASILITAS TERBATAS',
          description:
            'Fasilitas ruang menyusui dan tempat ganti popok (changing table) di kawasan Bromo sangat terbatas. Siapkan alas ganti portabel (changing pad) yang bisa digelar di kursi Jeep serta kantong plastik kedap bau khusus untuk menyimpan sampah popok hingga bertemu tempat sampah utama.',
        },
      ],
    },
    disabilityBlock: {
      id: 'panduan-difabel',
      badge: 'KELOMPOK 02 • PENYANDANG DISABILITAS / DIFABEL',
      emoji: '♿',
      title: 'Panduan Bromo untuk Wisatawan Difabel & Pengguna Kursi Roda',
      subtitle: 'Fokus pada spot dengan akses langsung kendaraan & rute fleksibel bersama Jeep Private',
      tone: 'sky',
      safePoint: {
        symbol: '✅',
        label: 'Akses di Lautan Pasir & Viewpoint Kendaraan',
        text: 'Area Lautan Pasir bisa diakses dengan kursi roda, tetapi roda rawan selip karena medan berpasir vulkanik dan permukaan tidak rata. Sangat disarankan menggunakan paket Private Trip agar rute berhenti, posisi parkir Jeep sedekat mungkin, dan durasi kunjungan jauh lebih fleksibel.',
      },
      riskPoint: {
        symbol: '⚠️',
        label: 'Risiko & Keterbatasan Fasilitas Lapangan',
        text: 'Saat ini belum tersedia fasilitas khusus ramah disabilitas (seperti jalur ramp landai permanen atau toilet aksesibel kursi roda) di kawasan taman nasional. Tangga menuju Kawah Bromo sangat curam dan fasilitas toilet umum sangat terbatas.',
      },
      jeepTipPoint: {
        symbol: '🚐',
        label: 'Tips Jeep & Rute Ramah Difabel',
        text: 'Fokus menikmati panorama dari area viewpoint yang bisa langsung dijangkau kendaraan (seperti Penanjakan 1 & 2 dan Bukit Cinta) serta berhenti santai di tepi Lautan Pasir dan Savana. Gunakan Jeep Private dengan driver berpengalaman yang paham kebutuhan khusus, dan pastikan selalu membawa pendamping.',
      },
    },
    seniorBlock: {
      id: 'panduan-lansia',
      badge: 'KELOMPOK 03 • LANSIA / ORANG TUA',
      emoji: '👵',
      title: 'Panduan Bromo untuk Lansia (Usia Lanjut)',
      subtitle: 'Nikmati keindahan kaldera megah tanpa memaksakan fisik di ketinggian 2.300+ mdpl',
      tone: 'amber',
      safePoint: {
        symbol: '✅',
        label: 'Aman Jika Menjaga Ritme & Rute',
        text: 'Wisata Bromo aman untuk lansia jika tetap berada di area viewpoint dan Lautan Pasir / Bukit Teletubbies, tidak memaksakan diri menaiki tangga kawah, serta selalu membawa obat-obatan pribadi rutin (seperti obat tekanan darah, jantung, atau asma).',
      },
      riskPoint: {
        symbol: '⚠️',
        label: 'Risiko Kesehatan (💊 Suhu & Tangga Kawah)',
        text: 'Suhu dingin ekstrem dini hari di sunrise point bisa memicu masalah kesehatan (terutama bagi riwayat jantung, hipertensi, dan paru-paru/asma). Selain itu, mendaki 250 anak tangga kawah yang curam di udara tipis sangat berat untuk sendi lutut dan pernapasan.',
      },
      jeepTipPoint: {
        symbol: '🚐',
        label: 'Tips Jeep & Kenyamanan Lansia',
        text: 'Pilih Jeep Private (atau opsi Trip Panorama Siang mulai pukul 08.00–11.00 WIB agar tidak berangkat terlalu malam dan suhu sudah hangat!). Pastikan lansia mendapat istirahat tidur yang cukup sebelumnya, mengenakan jaket tebal + syal + sarung tangan, dan duduk di kursi depan/tengah Jeep yang lebih stabil.',
      },
    },
    universalPrepTitle: '🧥 Persiapan Wajib untuk Semua Kelompok (Balita, Difabel & Lansia)',
    universalPrepSubtitle:
      'Pastikan keempat perlengkapan dasar ini selalu masuk dalam tas kabin Jeep Anda:',
    universalPrepItems: [
      {
        symbol: '🧥',
        title: 'Pakaian Berlapis + Jaket Tebal',
        description:
          'Gunakan sistem layering (kaos dalam/thermal + sweater + jaket windproof tebal), kupluk, syal, dan kaus kaki hangat agar mudah dilepas saat matahari mulai terik.',
      },
      {
        symbol: '🧴',
        title: 'Hand Sanitizer + Tisu Basah',
        description:
          'Sangat penting untuk menjaga kebersihan tangan sebelum makan atau setelah bermain pasir, karena pasokan air di toilet kawasan Bromo sangat terbatas.',
      },
      {
        symbol: '💊',
        title: 'Obat Pribadi + P3K Dasar',
        description:
          'Bawa obat rutin (jantung, hipertensi, inhaler asma, obat flu/demam anak), minyak angin/telon, plester luka, dan obat anti mabuk perjalanan.',
      },
      {
        symbol: '🥤',
        title: 'Air Minum Hangat & Camilan',
        description:
          'Siapkan air mineral, termos air hangat, roti, biskuit, atau madu sachet untuk menjaga energi dan mencegah dehidrasi maupun masuk angin di ketinggian.',
      },
    ],
    warningsTitle: '⚠️ 3 Peringatan Penting yang Tidak Boleh Diabaikan',
    warningsSubtitle:
      'Keselamatan dan kenyamanan rombongan selalu jauh lebih utama daripada memaksakan semua spot foto:',
    warnings: [
      '⚠️ Jangan memaksakan naik tangga kawah (250 anak tangga curam) jika kondisi fisik balita, difabel, atau lansia tidak memungkinkan — pemandangan dari Lautan Pasir dan Bukit Widodaren sudah luar biasa megah.',
      '⚠️ Pastikan operator Jeep tahu kondisi rombongan sejak awal pemesanan (termasuk jika membawa bayi, kursi roda, atau lansia dengan riwayat medis tertentu) agar driver dan unit Jeep disiapkan secara khusus.',
      '⚠️ Hindari berangkat saat peak season (libur Lebaran, Natal, Tahun Baru, dan long weekend) karena jalanan macet, area sunrise sangat padat, antrean panjang, dan toilet penuh sesak.',
    ],
    proTipBox: {
      title: 'Rekomendasi Khusus WisataBromo.co untuk Keluarga',
      content:
        'Jika membawa bayi di bawah 1 tahun atau lansia yang sangat sensitif terhadap suhu 2°C dini hari, Anda bisa memilih paket Private Trip Panorama Bromo (berangkat lebih santai pagi/siang hari tanpa harus begadang jam 00.00 WIB). Suhu sudah hangat sekitar 15°C–20°C, jauh lebih sepi, dan tetap bisa menikmati Viewpoint, Lautan Pasir, Bukit Widodaren, dan Savana Bukit Teletubbies dengan tenang!',
    },
    conclusionTitle: 'Ingin Rute Private Trip Bromo yang Ramah Bayi, Difabel, atau Lansia?',
    conclusion:
      'Dengan rute yang disesuaikan, Jeep Private yang nyaman, persiapan perlengkapan hangat, serta driver lokal yang sabar dan paham kondisi rombongan, Gunung Bromo dapat menjadi kenangan liburan keluarga lintas generasi yang aman dan tak terlupakan. Konsultasikan kebutuhan khusus rombongan Anda bersama tim WisataBromo.co sejak awal!',
    ctaButton: 'Konsultasi & Booking Private Jeep Keluarga',
    whatsappText:
      'Halo Admin WisataBromo.co, saya baru baca panduan Bromo untuk Balita, Difabel, dan Lansia. Saya ingin konsultasi Private Trip Bromo yang aman untuk rombongan keluarga kami.',
    sharePrompt: 'Bagikan panduan Bromo untuk Balita, Difabel & Lansia ini ke grup keluarga Anda',
    tags: [
      'Bromo untuk Balita',
      'Bromo untuk Lansia',
      'Bromo Ramah Difabel',
      'Bawa Bayi ke Bromo',
      'Private Jeep Keluarga Bromo',
      'Tips Aman Wisata Bromo',
    ],
  },

  en: {
    id: 'aman-ke-bromo-balita-difabel-lansia',
    slug: 'aman-nggak-ke-bromo-panduan-balita-difabel-lansia',
    title: 'Is Mount Bromo Safe? Complete Guide to Bromo for Toddlers, Disabilities, and Seniors',
    metaDescription:
      'An honest family accessibility guide to Mount Bromo for toddlers, infants, travelers with disabilities, and seniors: safety verdict per spot, Private Jeep tips, baby essentials, health risks, and key warnings.',
    author: 'WisataBromo.co Editorial Team',
    publishDate: '27 November 2026',
    readTime: '7 Min Read',
    category: 'tips_wisata',
    categoryLabel: 'Travel Tips & Guide',
    heroImage: imgFamilyHero,
    inlineImage1: imgJeepFamily,
    inlineImage1Caption:
      'With a Private 4x4 Jeep, families traveling with toddlers, seniors, or wheelchair users can enjoy the Sea of Sand at a relaxed, flexible pace.',
    inlineImage2: imgSunrisePoint,
    inlineImage2Caption:
      'Vehicle-accessible viewpoints such as Penanjakan 1 & 2 and Bukit Cinta let vulnerable travelers take in Bromo’s caldera without steep uphill hikes.',
    verdictBox: {
      eyebrow: '✅ OVERALL VERDICT • READ BEFORE YOU GO',
      headline: 'Yes, Mount Bromo IS Visit-Friendly — With Route Adjustments & Extra Prep',
      statement:
        'Mount Bromo can be visited by vulnerable groups (toddlers, infants, travelers with disabilities, and seniors), but each spot comes with important caveats. Route adjustment, a flexible Private Jeep, skipping the 250 steep crater stairs, and thorough preparation are essential.',
      highlights: [
        '✅ Viewpoints & Sea of Sand are relatively safe with smart timing and private transport.',
        '⚠️ Bromo Crater (250 steep stairs) & extreme pre-dawn cold (down to 2°C) are the main hazards.',
        '🚐 A Private Jeep is a must so you can pause, warm up, and pace the itinerary freely.',
      ],
    },
    introduction: [
      'Many families dream of experiencing Mount Bromo together with young toddlers, infants, aging parents, or family members with mobility disabilities—yet understandably hesitate: "Is it safe? Is the terrain too rough or too cold?"',
      'The honest answer is YES: Mount Bromo can be safely and joyfully visited by toddlers, babies, travelers with disabilities, and seniors—provided you adjust the itinerary instead of forcing a rushed backpacker schedule. Here is your complete group-by-group guide.',
    ],
    spotMatrixTitle: 'Quick Accessibility Matrix by Mount Bromo Spot',
    spotMatrixSubtitle: 'Use this overview to design the safest, stress-free family itinerary.',
    spotMatrixHeaders: {
      spot: 'Mount Bromo Spot',
      toddlerBaby: '🍼 Toddlers & Infants',
      disability: '♿ Disabilities / Wheelchair',
      senior: '👵 Seniors',
    },
    spotMatrixRows: [
      {
        spot: 'Sunrise Point (Penanjakan 1 & 2, Bukit Cinta)',
        toddlerBaby: '⚠️ Freezing cold (down to 2°C). Infants should wait inside the Jeep or warm stall.',
        disability: '✅ Vehicle-accessible viewpoints (Penanjakan 1 & 2, Bukit Cinta) with a companion.',
        senior: '⚠️ Extreme cold poses heart/lung risks. Heavy layers required; avoid overly early starts.',
      },
      {
        spot: 'Sea of Sand & Teletubbies Savanna',
        toddlerBaby: '✅ Safe! Warmer after sunrise; toddlers can walk and play in the sand under supervision.',
        disability: '✅ Wheelchair accessible (watch for wheel slip on uneven sand); Private Jeep strongly advised.',
        senior: '✅ Safe & scenic! Enjoy majestic caldera views right beside the Jeep with zero climbing.',
      },
      {
        spot: 'Bromo Crater (250 Steep Stairs)',
        toddlerBaby: '⚠️ Not recommended! Steep, crowded stairs with volcanic dust and sulfur fumes.',
        disability: '⚠️ Not wheelchair accessible (no ramps or dedicated disability facilities).',
        senior: '⚠️ Tough on knees and breathing at 2,300+ masl. Never force the climb.',
      },
    ],
    groupsSectionTitle: 'Detailed Guide: Mount Bromo for Toddlers, Infants, Disabilities & Seniors',
    groupsSectionSubtitle:
      'Look out for ✅ safe conditions, ⚠️ risks, 🚐 Jeep tips, 💊 health notes, and 🍼 infant essentials below.',
    toddlerBlock: {
      id: 'panduan-balita',
      badge: 'GROUP 01 • TODDLERS (1–5 YEARS)',
      emoji: '🧒',
      title: 'Mount Bromo Guide for Toddlers',
      subtitle: 'Fun & safe in the sunlit Sea of Sand—simply skip the steep crater staircase',
      tone: 'emerald',
      safePoint: {
        symbol: '✅',
        label: 'Safe at the Sea of Sand',
        text: 'The Sea of Sand is safe for toddlers. Once morning sunlight arrives, temperatures are far milder than at the sunrise ridge. Kids can walk around or play in the volcanic sand while closely supervised.',
      },
      riskPoint: {
        symbol: '⚠️',
        label: 'Other Risks to Watch',
        text: 'The steep, narrow staircase up to Bromo Crater poses fall hazards and heavy crowd pressure. Gusty volcanic dust can also irritate young eyes and airways.',
      },
      jeepTipPoint: {
        symbol: '🚐',
        label: 'Jeep & Route Tips for Toddlers',
        text: 'Stick to the viewpoints and the Sea of Sand / Savanna. Do not force toddlers up the crater steps. Pack extra layered clothing, a warm blanket for the Jeep, beanies, and child-sized dust masks.',
      },
    },
    babySection: {
      badge: '🍼 SPECIAL SECTION • INFANTS (< 1 YEAR)',
      title: '🍼 Essential Guide to Bringing a Baby to Mount Bromo',
      subtitle:
        'Infants require much stricter warmth, timing, and medical care than older toddlers.',
      items: [
        {
          id: 'baby-gear',
          symbol: '🍼',
          title: 'Mandatory Baby Gear (Baby Carrier, Never a Stroller)',
          badge: '🧥 BABY GEAR',
          description:
            'Bring an ergonomic baby carrier (leave strollers behind—Bromo’s sand and gravel are uneven). Pack layered warm clothing, a thick blanket, beanie, mittens, baby-safe mask, and a thermos of hot water for formula/milk.',
        },
        {
          id: 'baby-jeep',
          symbol: '🚐',
          title: 'Jeep Choice: Private Jeep Is Mandatory',
          badge: '🚐 PRIVATE JEEP ONLY',
          description:
            'Always book a Private Jeep—never join a crowded Open Trip. Private transport lets you stop anytime your baby gets fussy, needs feeding, or needs a diaper change.',
        },
        {
          id: 'baby-timing',
          symbol: '⏱️',
          title: 'Short Exposure & Skip Freezing 2°C Sunrise Ridges',
          badge: '⏱️ SMART TIMING',
          description:
            'Do not force an infant onto Penanjakan at 03:30 AM where temperatures can plunge to 2°C. Stay cozy inside the Jeep or a warm sheltered area, then head into the Sea of Sand once the sun is up.',
        },
        {
          id: 'baby-health',
          symbol: '💊',
          title: 'Health Check: Baby Must Be 100% Healthy',
          badge: '⚠️ HEALTH RISK',
          description:
            'Ensure your baby has no cold, cough, or congestion. Extreme cold and thin mountain air can trigger respiratory distress. Bring personal infant medications and a basic first-aid kit.',
        },
        {
          id: 'baby-diaper',
          symbol: '🧷',
          title: 'Portable Diaper Changing Setup',
          badge: '🧷 LIMITED FACILITIES',
          description:
            'Baby changing tables are virtually unavailable inside the national park. Pack a foldable changing pad for the Jeep seat plus sealed plastic bags for soiled diapers.',
        },
      ],
    },
    disabilityBlock: {
      id: 'panduan-difabel',
      badge: 'GROUP 02 • TRAVELERS WITH DISABILITIES',
      emoji: '♿',
      title: 'Mount Bromo Guide for Travelers with Disabilities',
      subtitle: 'Focus on vehicle-accessible viewpoints and flexible Private Jeep routing',
      tone: 'sky',
      safePoint: {
        symbol: '✅',
        label: 'Sea of Sand Access',
        text: 'The Sea of Sand can be accessed with a wheelchair, though wheels can slip on loose, uneven volcanic sand. A Private Trip is strongly recommended for flexible pacing and close Jeep drop-off points.',
      },
      riskPoint: {
        symbol: '⚠️',
        label: 'Accessibility Limitations & Risks',
        text: 'Mount Bromo lacks dedicated disability infrastructure (no paved wheelchair ramps or accessible restrooms). The crater staircase is steep, and public toilets are very limited.',
      },
      jeepTipPoint: {
        symbol: '🚐',
        label: 'Jeep & Companion Tips',
        text: 'Focus on vehicle-accessible viewpoints (Penanjakan 1 & 2, Bukit Cinta) plus scenic stops in the Sea of Sand. Book a Private Jeep with a driver briefed on special assistance needs, and always travel with a companion.',
      },
    },
    seniorBlock: {
      id: 'panduan-lansia',
      badge: 'GROUP 03 • SENIORS / ELDERLY TRAVELERS',
      emoji: '👵',
      title: 'Mount Bromo Guide for Seniors',
      subtitle: 'Soak in world-class volcanic scenery comfortably without overexertion',
      tone: 'amber',
      safePoint: {
        symbol: '✅',
        label: 'Safe When Paced Properly',
        text: 'Mount Bromo is safe for seniors if they remain at the viewpoints and Sea of Sand / Savanna, skip climbing the crater stairs, and carry all personal maintenance medications.',
      },
      riskPoint: {
        symbol: '⚠️',
        label: 'Health Risks (💊 Cold & 250 Crater Steps)',
        text: 'Extreme pre-dawn cold at sunrise points can trigger heart or lung issues. Climbing 250 steep steps to the crater rim at 2,300+ meters puts heavy strain on joints and breathing.',
      },
      jeepTipPoint: {
        symbol: '🚐',
        label: 'Jeep & Comfort Tips for Seniors',
        text: 'Choose a Private Jeep (or opt for a warmer Daytime Panorama Trip instead of a midnight departure), get plenty of rest beforehand, wear thick insulated jackets, and avoid starting too late at night.',
      },
    },
    universalPrepTitle: '🧥 Essential Packing List for Everyone',
    universalPrepSubtitle: 'Keep these four must-haves inside the Jeep cabin at all times:',
    universalPrepItems: [
      {
        symbol: '🧥',
        title: 'Layered Clothing + Heavy Jacket',
        description: 'Thermal base layers, fleece/sweater, windproof down jacket, beanie, and warm socks.',
      },
      {
        symbol: '🧴',
        title: 'Hand Sanitizer + Wet Wipes',
        description: 'Vital for hygiene since water supply in Bromo restrooms is very limited.',
      },
      {
        symbol: '💊',
        title: 'Personal Medications + First-Aid Kit',
        description: 'Prescription heart/BP/asthma meds, infant fever meds, warming balm, and motion-sickness tablets.',
      },
      {
        symbol: '🥤',
        title: 'Drinking Water & Snacks',
        description: 'Warm water thermos, bottled water, biscuits, and light energy snacks for high-altitude comfort.',
      },
    ],
    warningsTitle: '⚠️ 3 Crucial Warnings Never to Ignore',
    warningsSubtitle: 'Safety and comfort always come before checking off every photo stop:',
    warnings: [
      '⚠️ Never force anyone to climb the 250 steep crater stairs if physical stamina or health does not allow it.',
      '⚠️ Inform your Jeep operator in advance about your group’s exact needs (including infants, wheelchairs, or medical conditions).',
      '⚠️ Avoid peak seasons (major national holidays & long weekends) due to traffic jams, long queues, and overcrowded toilets.',
    ],
    proTipBox: {
      title: 'WisataBromo.co Family Recommendation',
      content:
        'Traveling with a baby under 1 year or seniors sensitive to 2°C pre-dawn chill? Ask about our relaxed Daytime Panorama Private Jeep Trip (morning/midday start instead of midnight)—enjoy warmer 15°C–20°C air, far fewer crowds, and all the iconic viewpoints and Sea of Sand!',
    },
    conclusionTitle: 'Need a Family-Friendly Private Jeep Itinerary for Mount Bromo?',
    conclusion:
      'With thoughtful routing, a comfortable Private Jeep, warm layers, and patient local drivers briefed on your family’s needs, Mount Bromo can be a safe and unforgettable multi-generational adventure. Chat with WisataBromo.co to customize your route today!',
    ctaButton: 'Plan & Book a Family Private Jeep',
    whatsappText:
      'Hello WisataBromo.co Admin, I just read the Mount Bromo guide for Toddlers, Disabilities, and Seniors and would like to consult about a safe Private Jeep trip for our family.',
    sharePrompt: 'Share this Mount Bromo guide for Toddlers, Disabilities & Seniors with your family',
    tags: [
      'Bromo for Toddlers',
      'Bromo for Seniors',
      'Bromo Accessibility',
      'Baby at Mount Bromo',
      'Family Private Jeep Bromo',
      'Safe Bromo Guide',
    ],
  },

  zh: {
    id: 'aman-ke-bromo-balita-difabel-lansia',
    slug: 'aman-nggak-ke-bromo-panduan-balita-difabel-lansia',
    title: '去布罗莫安全吗？婴幼儿、残障人士与长辈专属安全指南',
    metaDescription:
      '带幼童、婴儿、残障人士或长辈游布罗莫火山最全安全攻略：各景点可行性评估、包车私人吉普建议、婴儿保暖与换尿布准备、健康风险提醒及关键避坑事项。',
    author: 'WisataBromo.co 编辑团队',
    publishDate: '2026年11月27日',
    readTime: '阅读约 7 分钟',
    category: 'tips_wisata',
    categoryLabel: '攻略与指南',
    heroImage: imgFamilyHero,
    inlineImage1: imgJeepFamily,
    inlineImage1Caption:
      '选择私人四驱吉普包车，带娃、老人或轮椅出行的家庭可以按自己的节奏轻松游览沙海与草原。',
    inlineImage2: imgSunrisePoint,
    inlineImage2Caption:
      'Penanjakan 1 & 2 与 Bukit Cinta 等观景台可直接乘车抵达附近，避免长距离爬坡。',
    verdictBox: {
      eyebrow: '✅ 总体结论 • 出发前必读',
      headline: '可以去！但必须调整路线并做好充分额外准备',
      statement:
        '布罗莫火山适合婴幼儿、残障人士与长辈前往，但每个景点都有重要限制。关键在于选择灵活的私人吉普车、量力调整路线（不强行攀爬250级火山口台阶），并备齐保暖与医疗用品。',
      highlights: [
        '✅ 观景台与沙海在合理安排时间与包车的情况下相对安全。',
        '⚠️ 250级陡峭火山口台阶与凌晨极端低温（可低至2°C）是主要风险点。',
        '🚐 强烈建议预订私人吉普包车，随时可停车休息、保暖或照顾家人。',
      ],
    },
    introduction: [
      '许多家庭希望带着宝宝、年迈父母或行动不便的亲人一起领略布罗莫火山的壮丽奇景，但总免不了担心：“带娃和老人去布罗莫安全吗？路况和低温能承受吗？”',
      '答案很明确：只要摸清每个景点的安全边界、调整行程节奏，而不是照搬年轻人的特种兵玩法，幼童、婴儿、残障人士与长辈同样可以安心游览布罗莫。以下是为您分人群整理的详细安全指南。',
    ],
    spotMatrixTitle: '布罗莫各景点分人群可行性速查表',
    spotMatrixSubtitle: '对照此表即可快速规划最安心省力的家庭路线。',
    spotMatrixHeaders: {
      spot: '布罗莫主要景点',
      toddlerBaby: '🍼 幼童与婴儿',
      disability: '♿ 残障人士 / 轮椅',
      senior: '👵 老年长辈',
    },
    spotMatrixRows: [
      {
        spot: '日出观景台（Penanjakan 1 & 2、爱情山）',
        toddlerBaby: '⚠️ 极寒（可低至2°C），婴儿建议留在吉普车内或暖和区域等待。',
        disability: '✅ 车辆可直接开到观景台附近，需有亲友全程陪同协助。',
        senior: '⚠️ 严寒易诱发心肺不适，务必穿厚羽绒服且避免出发过早。',
      },
      {
        spot: '沙海（Lautan Pasir）与天线宝宝草原',
        toddlerBaby: '✅ 安全！日出后气温回暖，幼童可在看护下漫步或玩沙。',
        disability: '✅ 轮椅可通行但沙地易打滑，强烈建议选择私人吉普包车。',
        senior: '✅ 安全舒适！无需爬山，在吉普车旁即可欣赏壮阔火山全景。',
      },
      {
        spot: '布罗莫火山口（250级陡峭台阶）',
        toddlerBaby: '⚠️ 不建议！台阶陡峭狭窄、风沙大且有硫磺烟气。',
        disability: '⚠️ 无无障碍通道或坡道，轮椅无法通行。',
        senior: '⚠️ 海拔2300+米爬250级台阶极耗关节与呼吸，切勿勉强。',
      },
    ],
    groupsSectionTitle: '幼童、婴儿、残障人士与长辈详细出行指南',
    groupsSectionSubtitle: '重点关注以下 ✅ 安全条件、⚠️ 风险提示、🚐 吉普建议、💊 健康提醒与 🍼 婴儿要点。',
    toddlerBlock: {
      id: 'panduan-balita',
      badge: '人群 01 • 幼童（1–5岁）',
      emoji: '🧒',
      title: '带幼童（1–5岁）游布罗莫指南',
      subtitle: '上午阳光照耀的沙海安全有趣，避开陡峭火山口台阶即可',
      tone: 'emerald',
      safePoint: {
        symbol: '✅',
        label: '沙海区域安全友好',
        text: '沙海对幼童十分安全。太阳升起后气温不再像日出观景台那样刺骨，小朋友可以在家长看护下散步或玩火山沙。',
      },
      riskPoint: {
        symbol: '⚠️',
        label: '需注意的其他风险',
        text: '通往火山口的台阶陡峭拥挤且尘土较多，大风扬沙也容易引起幼童呼吸道不适。',
      },
      jeepTipPoint: {
        symbol: '🚐',
        label: '幼童吉普与路线建议',
        text: '行程以观景台和沙海为主，切勿勉强带幼童攀爬火山口台阶。准备多层保暖衣物、车内毛毯与儿童防尘口罩。',
      },
    },
    babySection: {
      badge: '🍼 特别专题 • 婴儿（1岁以下）',
      title: '🍼 带婴儿前往布罗莫火山专属攻略',
      subtitle: '携带1岁以下婴儿需采取更严格的防寒、时间控制与健康防护措施。',
      items: [
        {
          id: 'baby-gear',
          symbol: '🍼',
          title: '婴儿必带装备（背带而非推车）',
          badge: '🧥 婴儿装备',
          description:
            '务必使用婴儿背带（切勿带婴儿推车，沙石路面凹凸不平无法推行）。备齐多层保暖衣、厚毛毯、帽子、手套、婴儿口罩以及冲奶用的保温热水壶。',
        },
        {
          id: 'baby-jeep',
          symbol: '🚐',
          title: '车辆选择：必须包私人吉普车',
          badge: '🚐 必选私人吉普',
          description:
            '必须预订私人吉普包车，切勿参加拥挤拼团。如宝宝哭闹、需喂奶或换尿布，随时可停车处理，行程完全自主。',
        },
        {
          id: 'baby-timing',
          symbol: '⏱️',
          title: '缩短暴露时间，避开 2°C 极寒日出点',
          badge: '⏱️ 时间控制',
          description:
            '切勿勉强婴儿在凌晨 2°C 的 Penanjakan 吹冷风等日出。可在温暖的吉普车内或室内避寒，待太阳升起气温回暖后再进入沙海汇合。',
        },
        {
          id: 'baby-health',
          symbol: '💊',
          title: '健康前提：确保宝宝无感冒咳嗽',
          badge: '⚠️ 健康风险',
          description:
            '出发前务必确认宝宝身体健康、没有感冒发烧或咳嗽。极端低温与高原空气可能诱发呼吸问题，请备齐宝宝常用药与基础急救包。',
        },
        {
          id: 'baby-diaper',
          symbol: '🧷',
          title: '自备便携换尿布用品',
          badge: '🧷 设施有限',
          description:
            '景区几乎没有母婴室或尿布台。请自带便携防水隔尿垫（可在吉普车座椅上使用）及密封垃圾袋收纳用过的纸尿裤。',
        },
      ],
    },
    disabilityBlock: {
      id: 'panduan-difabel',
      badge: '人群 02 • 残障人士 / 轮椅出行',
      emoji: '♿',
      title: '残障人士游布罗莫指南',
      subtitle: '聚焦车行可达观景台，通过私人包车灵活安排停靠点',
      tone: 'sky',
      safePoint: {
        symbol: '✅',
        label: '沙海与车行观景台',
        text: '沙海区域轮椅可进入，但沙地松软不平易打滑。强烈建议选择私人定制团，灵活安排停车点与游览时长。',
      },
      riskPoint: {
        symbol: '⚠️',
        label: '现场设施限制与风险',
        text: '景区目前缺乏无障碍设施（无专用坡道与无障碍卫生间），火山口台阶陡峭且公厕数量有限。',
      },
      jeepTipPoint: {
        symbol: '🚐',
        label: '吉普与陪同贴士',
        text: '重点游览车辆可直接抵达的观景台（Penanjakan 1 & 2、Bukit Cinta）以及沙海平缓地带。选择熟悉特殊需求照顾的私人吉普司机，并务必安排同行陪护人员。',
      },
    },
    seniorBlock: {
      id: 'panduan-lansia',
      badge: '人群 03 • 老年长辈',
      emoji: '👵',
      title: '带长辈 / 老人游布罗莫指南',
      subtitle: '舒缓节奏欣赏世界级火山奇观，避免高海拔透支体力',
      tone: 'amber',
      safePoint: {
        symbol: '✅',
        label: '满足这些条件即可安心游玩',
        text: '只要集中在日出观景台与沙海/草原游览、不勉强攀爬火山口台阶，并随身携带个人日常药物，长辈也能安全愉快地畅游布罗莫。',
      },
      riskPoint: {
        symbol: '⚠️',
        label: '健康风险（💊 低温与250级台阶）',
        text: '日出点极端低温容易诱发心血管或肺部不适；海拔2300+米攀登250级陡峭火山口台阶对膝盖关节与心肺负担极重。',
      },
      jeepTipPoint: {
        symbol: '🚐',
        label: '长辈舒适包车贴士',
        text: '务必选择私人吉普车（或选择白天出发的全景团避免半夜熬夜受寒），出发前保证充足睡眠，穿好厚羽绒服与防风装备。',
      },
    },
    universalPrepTitle: '🧥 所有人群通用必备清单',
    universalPrepSubtitle: '以下 4 类物品请务必放在吉普车随身包内方便随时取用：',
    universalPrepItems: [
      {
        symbol: '🧥',
        title: '多层穿搭 + 厚防风羽绒服',
        description: '保暖内衣、抓绒衣配防风厚外套、毛线帽与厚袜子，白天回暖后方便逐层脱减。',
      },
      {
        symbol: '🧴',
        title: '免洗洗手液 + 湿纸巾',
        description: '景区公厕水源有限，随身消毒湿巾与洗手液在饭前和玩沙后非常实用。',
      },
      {
        symbol: '💊',
        title: '个人常备药 + 基础急救包',
        description: '高血压/心脏病/哮喘等处方药、儿童退烧感冒药、驱风油、创可贴与晕车药。',
      },
      {
        symbol: '🥤',
        title: '温热饮用水与小零食',
        description: '保温杯热水、矿泉水与饼干能量棒，在高海拔低温下及时补充热量与水分。',
      },
    ],
    warningsTitle: '⚠️ 绝不可忽视的 3 条重要警告',
    warningsSubtitle: '家人的安全与舒适永远比打卡所有景点更重要：',
    warnings: [
      '⚠️ 如果身体条件不允许，切勿勉强攀爬 250 级陡峭火山口台阶。',
      '⚠️ 预订时务必提前告知吉普车运营商团队成员情况（包括婴儿、轮椅或长辈健康状况），以便提前安排合适车辆与司机。',
      '⚠️ 尽量避开旺季与公众长假（人潮拥挤、堵车严重、排队漫长且厕所爆满）。',
    ],
    proTipBox: {
      title: 'WisataBromo.co 家庭专属贴心推荐',
      content:
        '如果同行有 1 岁以下婴儿或极怕凌晨 2°C 严寒的长辈，欢迎考虑我们的“布罗莫日间全景私人吉普团”（上午/中午从容出发，无需午夜熬夜）——气温舒适（约 15°C–20°C）、游客稀少，同样能轻松饱览观景台、沙海与天线宝宝草原！',
    },
    conclusionTitle: '想为宝宝、残障亲友或长辈定制安心的布罗莫私人包车？',
    conclusion:
      '只要合理规划路线、乘坐舒适的私人吉普并由经验丰富的本地司机全程协助，布罗莫火山完全可以成为一家老小安全又难忘的珍贵回忆。立即联系 WisataBromo.co 定制您的专属家庭行程！',
    ctaButton: '咨询并预订家庭私人吉普团',
    whatsappText:
      '您好 WisataBromo.co 客服，我刚阅读了婴幼儿、残障人士与长辈游布罗莫指南，想为我们家庭咨询安全舒适的私人吉普套餐。',
    sharePrompt: '把这份婴幼儿、残障人士与长辈布罗莫安全指南分享给家人',
    tags: [
      '带娃游布罗莫',
      '老人游布罗莫',
      '布罗莫无障碍',
      '布罗莫家庭游',
      '布罗莫私人吉普',
      '布罗莫安全攻略',
    ],
  },
};
