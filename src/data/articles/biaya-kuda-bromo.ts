import { SupportedLanguage } from '../../i18n/LanguageContext';
import { HorseVectorType } from '../../components/HorseArticleVectors';
import imgHorseHero from '../../assets/images/imgkudabromo_wisatabromo.jpg';
import imgHorseCrater from '../../assets/images/bromo_perjalanan_kawah_kuda.jpg';
import imgHorseSavana from '../../assets/images/gadis_sarung_berkuda_savana.jpg';

export interface HorsePriceRow {
  service: string;
  route: string;
  priceRange: string;
  notes: string;
}

export interface HorsePointDetail {
  id: string;
  numberBadge: string;
  vectorType: HorseVectorType;
  accentBg: string;
  accentBorder: string;
  title: string;
  subtitle: string;
  priceHighlight?: string;
  description: string;
  bulletPoints?: string[];
  tip: string;
}

export interface LocalizedHorseArticleContent {
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
  introduction: string[];
  priceTableTitle: string;
  priceTableSubtitle: string;
  priceTableHeaders: {
    service: string;
    route: string;
    price: string;
    notes: string;
  };
  priceTableRows: HorsePriceRow[];
  pointsSectionTitle: string;
  points: HorsePointDetail[];
  proTipBox: {
    title: string;
    content: string;
  };
  conclusion: string;
  ctaButton: string;
  tags: string[];
}

export const ARTICLE_BIAYA_KUDA_BROMO: Record<SupportedLanguage, LocalizedHorseArticleContent> = {
  id: {
    id: 'biaya-kuda-bromo',
    slug: 'biaya-sewa-kuda-di-bromo-daftar-harga-tips',
    title: 'Biaya Sewa Kuda di Bromo: Daftar Harga Terbaru, Rute & Tips Anti Kena Mahal',
    metaDescription:
      'Panduan lengkap tarif sewa kuda di Gunung Bromo terbaru mulai dari jalur Parkiran Jeep ke Kaki Tangga Kawah, sesi foto di Lautan Pasir, hingga trik tawar-menawar ramah bersama pemilik kuda Tengger.',
    author: 'Tim Editorial WisataBromo.co',
    publishDate: '19 November 2026',
    readTime: '6 Menit Baca',
    category: 'tips_wisata',
    categoryLabel: 'Tips & Panduan Wisata',
    heroImage: imgHorseHero,
    inlineImage1: imgHorseCrater,
    inlineImage1Caption:
      'Jalur ikonik menunggang kuda melintasi Lautan Pasir menuju kaki tangga Kawah Gunung Bromo ditemani pawang lokal Suku Tengger.',
    inlineImage2: imgHorseSavana,
    inlineImage2Caption:
      'Berkuda dengan balutan kain sarung khas Tengger di padang pasir dan savana menjadi momen foto favorit wisatawan Bromo.',
    introduction: [
      'Menjelajahi Lautan Pasir Gunung Bromo setelah menikmati Golden Sunrise adalah pengalaman yang tak tergantikan. Namun, berjalan kaki sejauh 1,5 hingga 2 kilometer dari area parkir Jeep menuju kaki tangga Kawah Bromo melintasi pasir vulkanik yang gembur dan menanjak bisa terasa cukup melelahkan—terutama di ketinggian 2.300+ mdpl dengan udara tipis.',
      'Di sinilah jasa sewa kuda lokal milik masyarakat Suku Tengger menjadi penyelamat sekaligus pengalaman wisata ikonik yang wajib dicoba! Agar budget liburan Anda tetap aman dan transaksi berjalan hangat tanpa salah paham, berikut rincian lengkap biaya sewa kuda di Bromo beserta tips praktisnya.',
    ],
    priceTableTitle: 'Ringkasan Tarif Sewa Kuda di Bromo (Terbaru)',
    priceTableSubtitle: 'Estimasi harga standar lapangan yang disepakati bersama paguyuban pemilik kuda lokal.',
    priceTableHeaders: {
      service: 'Jenis Layanan',
      route: 'Rute / Durasi',
      price: 'Kisaran Biaya',
      notes: 'Keterangan',
    },
    priceTableRows: [
      {
        service: 'Sewa Kuda Pulang-Pergi (PP)',
        route: 'Parkiran Jeep ↔ Kaki Tangga Kawah',
        priceRange: 'Rp 150.000 – Rp 250.000',
        notes: 'Paling populer; sudah termasuk waktu tunggu saat Anda naik ke kawah.',
      },
      {
        service: 'Sewa Kuda Sekali Jalan (One-Way)',
        route: 'Parkiran Jeep → Kaki Tangga (atau sebaliknya)',
        priceRange: 'Rp 100.000 – Rp 150.000',
        notes: 'Cocok jika berangkat ingin jalan kaki, lalu pulangnya naik kuda.',
      },
      {
        service: 'Sewa Dekat Pura Poten / Setengah Jalan',
        route: 'Area Pura Luhur Poten → Kaki Tangga',
        priceRange: 'Rp 75.000 – Rp 120.000',
        notes: 'Harga lebih hemat karena jarak tempuh sudah lebih dekat.',
      },
      {
        service: 'Sesi Foto di Atas Kuda (Photo Only)',
        route: 'Lautan Pasir / Latar Gunung Batok (10–15 menit)',
        priceRange: 'Rp 30.000 – Rp 50.000',
        notes: 'Khusus berpose foto tanpa menempuh jalur menuju tangga kawah.',
      },
    ],
    pointsSectionTitle: '7 Poin Penting Soal Biaya & Tips Naik Kuda di Bromo',
    points: [
      {
        id: 'rute-standar',
        numberBadge: 'POIN 01',
        vectorType: 'horse-route',
        accentBg: 'bg-[#e5f4ff]/70',
        accentBorder: 'border-[#0996f5]/25',
        title: 'Tarif Standar Pulang-Pergi (PP) vs. Sekali Jalan',
        subtitle: 'Parkiran Jeep ↔ Kaki Tangga Kawah Bromo (± 1,5 – 2 km)',
        priceHighlight: 'Rp 150rb – Rp 250rb (PP)',
        description:
          'Mayoritas wisatawan memilih paket Pulang-Pergi (PP) seharga Rp 150.000 hingga Rp 250.000 per ekor kuda (untuk 1 orang). Pemilik kuda akan menuntun kuda Anda hingga area tambatan di bawah kaki tangga kawah, menunggu Anda selesai menikmati pemandangan kawah di atas, lalu mengantar kembali ke lokasi parkir Jeep.',
        bulletPoints: [
          'Jika fisik masih bugar saat berangkat, Anda bisa berjalan kaki dahulu lalu menyewa kuda sekali jalan (One-Way) saat pulang seharga Rp 100.000 – Rp 150.000.',
          'Tarif selalu dihitung per kuda (1 orang dewasa), kecuali membawa balita yang bisa dipangku dengan persetujuan pawang.',
        ],
        tip: 'Ingat atau foto nomor plat Jeep Anda serta ciri-ciri jaket pemilik kuda agar tidak tertukar saat turun dari tangga kawah!',
      },
      {
        id: 'jarak-titik-naik',
        numberBadge: 'POIN 02',
        vectorType: 'coin-piggy',
        accentBg: 'bg-amber-50/80',
        accentBorder: 'border-amber-300/60',
        title: 'Harga Berubah Sesuai Titik Naik & Jarak Tempuh',
        subtitle: 'Semakin dekat ke tangga kawah, tarif semakin bersahabat',
        priceHighlight: 'Mulai Rp 75rb (Jarak Pendek)',
        description:
          'Saat baru turun dari Jeep di area parkir utama, banyak pemilik kuda akan langsung menawarkan jasa mereka. Jika Anda berjalan sedikit lebih maju melewati Pura Luhur Poten menuju lereng bawah kawah, harga sewa kuda biasanya turun drastis karena jarak tempuhnya sudah jauh berkurang.',
        bulletPoints: [
          'Dari parkiran Jeep terjauh (saat ramai): Rp 200.000 – Rp 250.000 PP.',
          'Dari sekitar Pura Luhur Poten: Rp 100.000 – Rp 150.000 PP.',
          'Dari tanjakan terakhir sebelum tangga: Rp 75.000 – Rp 100.000 sekali jalan.',
        ],
        tip: 'Cek posisi parkir Jeep Anda terlebih dahulu. Jika Jeep parkir agak jauh di belakang saat weekend, paket PP langsung dari Jeep jauh lebih hemat tenaga.',
      },
      {
        id: 'seni-tawar-menawar',
        numberBadge: 'POIN 03',
        vectorType: 'handshake-deal',
        accentBg: 'bg-emerald-50/80',
        accentBorder: 'border-emerald-300/60',
        title: 'Seni Tawar-Menawar yang Ramah & Transparan',
        subtitle: 'Sepakati detail rute dan harga sebelum naik ke pelana',
        priceHighlight: 'Wajib Deal di Awal!',
        description:
          'Tarif sewa kuda di Bromo bersifat fleksibel dan sangat bisa dinegosiasikan dengan sopan. Kunci utamanya adalah berkomunikasi jelas sejak awal: tanyakan apakah harga tersebut untuk Pulang-Pergi (PP) atau Sekali Jalan (One-Way), serta pastikan tidak ada biaya tambahan tersembunyi untuk waktu tunggu.',
        bulletPoints: [
          'Gunakan senyum dan bahasa yang santun—para pemilik kuda adalah warga lokal Suku Tengger yang ramah.',
          'Jika menyewa lebih dari 2–3 kuda bersama rombongan atau keluarga, Anda biasanya bisa mendapatkan harga paket yang lebih miring.',
        ],
        tip: 'Hindari menawar terlalu ekstrem di bawah harga wajar. Menyewa dengan harga fair ikut membantu perekonomian masyarakat adat Tengger.',
      },
      {
        id: 'weekday-vs-weekend',
        numberBadge: 'POIN 04',
        vectorType: 'calendar-peak',
        accentBg: 'bg-blue-50/80',
        accentBorder: 'border-blue-300/60',
        title: 'Beda Harga Hari Biasa (Weekday) & Musim Liburan',
        subtitle: 'Pahami fluktuasi tarif saat High Season & Long Weekend',
        priceHighlight: 'Naik ± Rp 50rb saat Peak Season',
        description:
          'Pada hari kerja (Senin–Jumat), permintaan lebih lengang sehingga Anda sangat mudah mendapatkan tarif Rp 150.000 PP. Sebaliknya, pada akhir pekan, libur nasional, libur sekolah, Lebaran, dan Tahun Baru, tarif wajar berada di kisaran Rp 200.000 – Rp 250.000 PP karena antrean wisatawan meningkat tajam.',
        bulletPoints: [
          'Weekday (Hari Biasa): Lebih leluasa nego dan waktu tunggu pawang lebih santai.',
          'Weekend / Peak Season: Disarankan segera deal begitu turun dari Jeep jika membawa anak-anak atau orang tua.',
        ],
        tip: 'Jika ingin menikmati suasana berkuda yang tenang dan fotogenik tanpa kerumunan, jadwalkan trip Bromo Anda di hari Selasa hingga Kamis.',
      },
      {
        id: 'spot-foto-estetik',
        numberBadge: 'POIN 05',
        vectorType: 'camera-pose',
        accentBg: 'bg-pink-50/80',
        accentBorder: 'border-pink-300/60',
        title: 'Sesi Foto Estetik di Punggung Kuda (Tanpa ke Kawah)',
        subtitle: 'Pilihan hemat buat Anda yang hanya ingin berfoto keren',
        priceHighlight: 'Rp 30rb – Rp 50rb / Sesi',
        description:
          'Tidak berniat naik ke kawah tapi ingin punya foto ikonik menunggang kuda ala koboi di tengah Lautan Pasir? Bisa banget! Anda cukup bilang ke pemilik kuda untuk "sewa foto saja". Biayanya sangat terjangkau, sekitar Rp 30.000 – Rp 50.000 untuk berfoto sepuasnya selama 10–15 menit.',
        bulletPoints: [
          'Spot terbaik: Latar belakang siluet Gunung Batok yang gagah, Pura Luhur Poten, atau hamparan pasir berbisik.',
          'Banyak pawang kuda di Bromo sudah jago membantu mengambilkan foto atau video keren menggunakan HP Anda!',
        ],
        tip: 'Bawalah kain sarung tenun atau jaket warna cerah (kuning, merah, biru) agar warna outfit Anda kontras memukau dengan pasir gelap Bromo.',
      },
      {
        id: 'tips-keamanan-etika',
        numberBadge: 'POIN 06',
        vectorType: 'safety-hat',
        accentBg: 'bg-orange-50/80',
        accentBorder: 'border-orange-300/60',
        title: 'Tips Aman & Nyaman Saat Menunggang Kuda Bromo',
        subtitle: 'Wajib tahu terutama untuk pemula yang baru pertama kali berkuda',
        priceHighlight: 'Aman untuk Pemula',
        description:
          'Kuda-kuda di Bromo sangat terlatih menghadapi medan pasir dan tanjakan, serta selalu dituntun langsung oleh pawangnya dari depan. Meski demikian, mengikuti etika dan posisi duduk yang tepat akan membuat perjalanan Anda jauh lebih rileks dan aman.',
        bulletPoints: [
          'Naiklah dari sisi kiri kuda secara perlahan mengikuti arahan pawang, lalu pegang erat pegangan pelana di depan.',
          'Condongkan badan sedikit ke depan saat jalur menanjak, dan agak bersandar ke belakang saat jalur menurun.',
          'Jangan berteriak tiba-tiba, membuka payung mendadak, atau menyalakan flash kamera tepat di depan mata kuda agar kuda tidak kaget.',
        ],
        tip: 'Kenakan celana panjang yang lentur dan sepatu tertutup (sneakers/boots)—hindari rok pendek atau sandal licin agar kaki mantap di pijakan sanggurdi.',
      },
      {
        id: 'siapkan-uang-tunai',
        numberBadge: 'POIN 07',
        vectorType: 'wallet-cash',
        accentBg: 'bg-teal-50/80',
        accentBorder: 'border-teal-300/60',
        title: 'Wajib Bawa Uang Tunai (Cash) Pecahan Kecil',
        subtitle: 'Sinyal seluler di Lautan Pasir sangat terbatas untuk QRIS/Transfer',
        priceHighlight: 'Cash Only di Area Kawah',
        description:
          'Di kawasan Lautan Pasir dan kaki Kawah Bromo, jaringan internet sering kali tidak stabil bahkan hilang total. Hampir semua pemilik kuda hanya menerima pembayaran tunai. Menyiapkan uang pecahan Rp 50.000 dan Rp 20.000 akan sangat memudahkan transaksi di akhir perjalanan.',
        bulletPoints: [
          'Pembayaran umumnya dilakukan setelah Anda selesai diantar kembali ke area parkir Jeep (khusus paket PP).',
          'Boleh memberikan tips sukarela tambahan jika pawang sangat ramah, sabar menunggu, atau membantu sesi foto Anda dengan apik.',
        ],
        tip: 'Tarik tunai secukupnya di kota keberangkatan (Malang/Surabaya/Probolinggo) karena mesin ATM di kawasan pegunungan Bromo sangat terbatas.',
      },
    ],
    proTipBox: {
      title: 'PRO TIP DARI TOUR LEADER WISATABROMO.CO',
      content:
        'Jika Anda berangkat menggunakan paket Jeep resmi WisataBromo.co, jangan ragu meminta bantuan Driver Jeep kami untuk merekomendasikan pawang kuda langganan yang ramah dan jujur. Driver kami biasanya membantu mencocokkan harga wajar sekaligus memastikan kuda mengantar Anda kembali tepat ke unit Jeep kami tanpa bingung mencari!',
    },
    conclusion:
      'Menunggang kuda di Gunung Bromo bukan hanya cara cerdas menghemat tenaga saat melintasi Lautan Pasir, melainkan juga bagian dari petualangan budaya bersama masyarakat Suku Tengger. Dengan mengetahui kisaran tarif terbaru sebesar Rp 150.000 – Rp 250.000 PP dan menerapkan tips di atas, liburan Bromo Anda dijamin makin seru, aman, dan bebas drama!',
    ctaButton: 'Konsultasi & Booking Trip Bromo Sekarang',
    tags: [
      'Biaya Kuda Bromo',
      'Sewa Kuda Bromo',
      'Tips Wisata Bromo',
      'Kawah Bromo',
      'Lautan Pasir Bromo',
      'Panduan Bromo',
    ],
  },

  en: {
    id: 'biaya-kuda-bromo',
    slug: 'biaya-sewa-kuda-di-bromo-daftar-harga-tips',
    title: 'Mount Bromo Horse Rental Cost: Official Price Guide, Routes & Fair-Bargaining Tips',
    metaDescription:
      'Complete guide to horse riding prices at Mount Bromo—covering Jeep Parking to Crater Stairs round-trip rates, Sea of Sand photo sessions, and friendly local tips.',
    author: 'WisataBromo.co Editorial Team',
    publishDate: 'November 19, 2026',
    readTime: '6 Min Read',
    category: 'tips_wisata',
    categoryLabel: 'Travel Tips & Guide',
    heroImage: imgHorseHero,
    inlineImage1: imgHorseCrater,
    inlineImage1Caption:
      'Iconic horseback ride across the volcanic Sea of Sand toward the base of Mount Bromo Crater stairs led by a local Tengger guide.',
    inlineImage2: imgHorseSavana,
    inlineImage2Caption:
      'Horseback riding wrapped in a traditional Tengger sarong across the savanna makes for an unforgettable Mount Bromo photo moment.',
    introduction: [
      'Crossing Mount Bromo’s dramatic Sea of Sand after catching the Golden Sunrise is an unforgettable highlight. However, walking 1.5 to 2 kilometers over soft volcanic sand and uphill trails to the crater stairs at 2,300+ meters elevation can feel exhausting for many travelers.',
      'Renting a local horse guided by the Tengger community is both a lifesaver for your legs and an iconic Mount Bromo cultural experience. Here is the complete price breakdown and practical tips so you get a fair, smooth, and joyful ride.',
    ],
    priceTableTitle: 'Mount Bromo Horse Rental Price Summary (Latest Rates)',
    priceTableSubtitle: 'Standard field rates commonly agreed upon with local Tengger horse owners.',
    priceTableHeaders: {
      service: 'Service Type',
      route: 'Route / Duration',
      price: 'Estimated Price',
      notes: 'Details',
    },
    priceTableRows: [
      {
        service: 'Round-Trip Ride (PP)',
        route: 'Jeep Parking ↔ Base of Crater Stairs',
        priceRange: 'IDR 150,000 – 250,000',
        notes: 'Most popular option; includes waiting time while you climb the crater.',
      },
      {
        service: 'One-Way Ride',
        route: 'Jeep Parking → Crater Stairs (or return)',
        priceRange: 'IDR 100,000 – 150,000',
        notes: 'Great if you walk one way and ride back when tired.',
      },
      {
        service: 'Mid-Route / Near Pura Poten',
        route: 'Pura Luhur Poten → Crater Stairs',
        priceRange: 'IDR 75,000 – 120,000',
        notes: 'Cheaper since you have already walked part of the trail.',
      },
      {
        service: 'Horseback Photo Session',
        route: 'Sea of Sand / Mt. Batok backdrop (10–15 min)',
        priceRange: 'IDR 30,000 – 50,000',
        notes: 'Posing for photos on horseback without riding up to the crater.',
      },
    ],
    pointsSectionTitle: '7 Essential Things to Know About Horse Riding in Bromo',
    points: [
      {
        id: 'rute-standar',
        numberBadge: 'POINT 01',
        vectorType: 'horse-route',
        accentBg: 'bg-[#e5f4ff]/70',
        accentBorder: 'border-[#0996f5]/25',
        title: 'Standard Round-Trip vs. One-Way Rates',
        subtitle: 'Jeep Parking ↔ Base of Bromo Crater Stairs (~1.5 – 2 km)',
        priceHighlight: 'IDR 150k – 250k (Round-Trip)',
        description:
          'Most visitors choose the Round-Trip package (IDR 150,000 – 250,000 per horse for 1 rider). Your Tengger horse guide leads the horse on foot all the way to the hitching post below the crater stairs, waits while you explore the rim, and guides you safely back to your Jeep.',
        bulletPoints: [
          'If you feel energetic on the way up, walk first and hire a One-Way ride back for IDR 100,000 – 150,000.',
          'Prices are per horse (1 adult rider). Small toddlers can sometimes ride on a parent’s lap with the guide’s consent.',
        ],
        tip: 'Take a quick photo of your Jeep license plate and remember your horse guide’s jacket so you can spot each other easily after coming down from the crater.',
      },
      {
        id: 'jarak-titik-naik',
        numberBadge: 'POINT 02',
        vectorType: 'coin-piggy',
        accentBg: 'bg-amber-50/80',
        accentBorder: 'border-amber-300/60',
        title: 'Prices Drop Based on Your Starting Point',
        subtitle: 'The closer you get to the stairs, the lower the fare',
        priceHighlight: 'From IDR 75k (Short Distance)',
        description:
          'Horse guides greet visitors right at the Jeep parking area. If you walk past Pura Luhur Poten closer toward the foot of the volcano, rental rates decrease significantly because the remaining distance is shorter.',
        bulletPoints: [
          'From the far Jeep parking lot (busy days): IDR 200,000 – 250,000 round-trip.',
          'From near Pura Luhur Poten temple: IDR 100,000 – 150,000 round-trip.',
          'Final sandy slope before the stairs: IDR 75,000 – 100,000 one-way.',
        ],
        tip: 'Check how far your Jeep is parked—on busy weekends, hopping on right from the Jeep saves a lot of dusty walking.',
      },
      {
        id: 'seni-tawar-menawar',
        numberBadge: 'POINT 03',
        vectorType: 'handshake-deal',
        accentBg: 'bg-emerald-50/80',
        accentBorder: 'border-emerald-300/60',
        title: 'Friendly & Clear Bargaining Etiquette',
        subtitle: 'Confirm round-trip vs. one-way before mounting',
        priceHighlight: 'Always Agree Upfront!',
        description:
          'Horse rental prices in Bromo are negotiable. Always clarify clearly before getting on: confirm whether the agreed price covers Round-Trip (pulang-pergi) or One-Way, and confirm waiting time is included.',
        bulletPoints: [
          'Always bargain with a warm smile and polite tone—horse guides are proud local Tengger residents.',
          'Booking 2–3 horses together for a family or group often gives you a better per-horse rate.',
        ],
        tip: 'Avoid pushing prices unfairly low—paying a fair rate directly supports the livelihood of local Tengger highland families.',
      },
      {
        id: 'weekday-vs-weekend',
        numberBadge: 'POINT 04',
        vectorType: 'calendar-peak',
        accentBg: 'bg-blue-50/80',
        accentBorder: 'border-blue-300/60',
        title: 'Weekday vs. Weekend & Peak Season Rates',
        subtitle: 'Expect modest adjustments during national holidays',
        priceHighlight: '+IDR 50k on Peak Holidays',
        description:
          'On weekdays (Monday–Friday), visitor traffic is lighter so IDR 150,000 round-trip is easy to find. During weekends, school holidays, Eid, and New Year, fair rates typically sit around IDR 200,000 – 250,000 round-trip due to high demand.',
        bulletPoints: [
          'Weekdays: Easier negotiation and a calmer, less crowded volcanic trail.',
          'Weekends / Peak Season: Secure a horse early if traveling with seniors or kids.',
        ],
        tip: 'Tuesday through Thursday offers the most relaxed riding experience and clearest photo backdrops.',
      },
      {
        id: 'spot-foto-estetik',
        numberBadge: 'POINT 05',
        vectorType: 'camera-pose',
        accentBg: 'bg-pink-50/80',
        accentBorder: 'border-pink-300/60',
        title: 'Budget-Friendly Horseback Photo Sessions',
        subtitle: 'Just want an epic cowboy-style Bromo photo?',
        priceHighlight: 'IDR 30k – 50k / Session',
        description:
          'If you prefer walking or skipping the crater climb but still want iconic photos sitting on a Bromo horse, simply ask for "foto saja" (photo only). For just IDR 30,000 – 50,000, you get 10–15 minutes of posing against dramatic volcanic backdrops.',
        bulletPoints: [
          'Top photo angles: Ridged Mount Batok backdrop, Pura Luhur Poten, or the open Sea of Sand.',
          'Many Tengger horse guides are surprisingly great smartphone photographers!',
        ],
        tip: 'Wear a colorful jacket or Tengger woven sarong (yellow, red, or bright blue) to stand out vividly against the dark volcanic sand.',
      },
      {
        id: 'tips-keamanan-etika',
        numberBadge: 'POINT 06',
        vectorType: 'safety-hat',
        accentBg: 'bg-orange-50/80',
        accentBorder: 'border-orange-300/60',
        title: 'Beginner Safety & Riding Tips',
        subtitle: 'Safe even if it is your very first time on a horse',
        priceHighlight: 'Beginner Friendly',
        description:
          'Bromo horses are calm, sturdy, and led slowly on foot by their owners the entire way. Still, simple riding posture makes the bumpy sandy climb much smoother.',
        bulletPoints: [
          'Mount from the horse’s left side with your guide’s help and hold the front saddle pommel steadily.',
          'Lean slightly forward going uphill and slightly back going downhill.',
          'Avoid sudden loud screams, popping open umbrellas, or camera flashes near the horse’s face.',
        ],
        tip: 'Wear comfortable long pants and closed-toe shoes (sneakers or hiking boots) so your feet rest securely in the stirrups.',
      },
      {
        id: 'siapkan-uang-tunai',
        numberBadge: 'POINT 07',
        vectorType: 'wallet-cash',
        accentBg: 'bg-teal-50/80',
        accentBorder: 'border-teal-300/60',
        title: 'Bring Indonesian Rupiah Cash in Small Bills',
        subtitle: 'Mobile signal in the Sea of Sand is weak for QRIS/transfers',
        priceHighlight: 'Cash Only at the Crater',
        description:
          'Cellular data in the volcanic caldera is notoriously spotty, so digital payments rarely work. Carry crisp IDR 50,000 and IDR 20,000 notes for smooth payment.',
        bulletPoints: [
          'For round-trip rides, payment is normally settled once you safely return to your Jeep.',
          'A small extra tip is warmly appreciated if your guide patiently waited or helped capture awesome photos.',
        ],
        tip: 'Withdraw sufficient cash in Malang, Surabaya, or Probolinggo before heading up to Bromo since ATMs in the mountains are scarce.',
      },
    ],
    proTipBox: {
      title: 'PRO TIP FROM WISATABROMO.CO TOUR LEADERS',
      content:
        'Traveling with an official WisataBromo.co Jeep? Ask our Jeep driver to introduce you to a trusted local Tengger horse guide. Our drivers help confirm fair local rates and make sure your guide returns you directly to our exact Jeep without getting lost in the crowd.',
    },
    conclusion:
      'Riding a horse across Mount Bromo’s Sea of Sand saves your energy for the 250 crater steps while immersing you in authentic Tengger highland culture. With the round-trip rate of IDR 150,000 – 250,000 and these practical tips in hand, you are all set for a smooth, memorable ride!',
    ctaButton: 'Consult & Book Your Bromo Trip Now',
    tags: [
      'Bromo Horse Cost',
      'Mount Bromo Horse Riding',
      'Bromo Travel Tips',
      'Bromo Crater',
      'Sea of Sand',
      'Bromo Guide',
    ],
  },

  zh: {
    id: 'biaya-kuda-bromo',
    slug: 'biaya-sewa-kuda-di-bromo-daftar-harga-tips',
    title: '布罗莫火山骑马费用指南：最新价格表、路线与防坑砍价技巧',
    metaDescription:
      '布罗莫火山租马完整攻略：吉普车停车场至火山口台阶往返价格、沙海拍照费用及与滕格尔族马夫友好沟通的实用贴士。',
    author: 'WisataBromo.co 编辑团队',
    publishDate: '2026年11月19日',
    readTime: '6 分钟阅读',
    category: 'tips_wisata',
    categoryLabel: '攻略与指南',
    heroImage: imgHorseHero,
    inlineImage1: imgHorseCrater,
    inlineImage1Caption: '由当地滕格尔族马夫牵引，骑马穿越布罗莫沙海前往火山口台阶的经典体验。',
    inlineImage2: imgHorseSavana,
    inlineImage2Caption: '披上滕格尔传统沙龙骑马在火山沙海与草原留影，是游客最爱的打卡画面。',
    introduction: [
      '看完布罗莫金色日出后，穿越壮观的火山沙海前往火山口是必玩项目。但从吉普车停车场步行 1.5 至 2 公里松软上坡的火山灰路，在海拔 2300 米以上的高原非常消耗体力。',
      '租一匹当地滕格尔族居民牵引的布罗莫小马，不仅能轻松保存体力攀登火山口台阶，更是极具仪式感的特色体验！以下是 最新骑马价格与实用避坑指南。',
    ],
    priceTableTitle: '布罗莫火山骑马费用一览表（最新参考）',
    priceTableSubtitle: '现场与当地马夫协会普遍认可的合理参考价格。',
    priceTableHeaders: {
      service: '服务类型',
      route: '路线 / 时长',
      price: '参考价格',
      notes: '说明',
    },
    priceTableRows: [
      {
        service: '往返租马 (PP)',
        route: '吉普车停车场 ↔ 火山口台阶脚下',
        priceRange: 'Rp 150,000 – 250,000',
        notes: '最受欢迎；已包含您登火山口期间马夫的等候费用。',
      },
      {
        service: '单程租马 (One-Way)',
        route: '停车场 → 台阶脚下（或仅返程）',
        priceRange: 'Rp 100,000 – 150,000',
        notes: '适合去程步行拍照、返程累了再骑马的游客。',
      },
      {
        service: '半程 / 印度庙附近上马',
        route: 'Pura Luhur Poten 庙 → 台阶脚下',
        priceRange: 'Rp 75,000 – 120,000',
        notes: '距离更短，价格更实惠。',
      },
      {
        service: '骑马打卡拍照（不登火山）',
        route: '沙海 / 巴托克火山背景（10–15分钟）',
        priceRange: 'Rp 30,000 – 50,000',
        notes: '仅骑在马上拍大片，不前往火山口台阶。',
      },
    ],
    pointsSectionTitle: '布罗莫骑马必须知道的 7 个实用要点',
    points: [
      {
        id: 'rute-standar',
        numberBadge: '要点 01',
        vectorType: 'horse-route',
        accentBg: 'bg-[#e5f4ff]/70',
        accentBorder: 'border-[#0996f5]/25',
        title: '往返 (PP) 与单程 (One-Way) 标准价',
        subtitle: '吉普车停车场 ↔ 火山口台阶脚下（约 1.5–2 公里）',
        priceHighlight: 'Rp 15万 – 25万（往返）',
        description:
          '大多数游客选择往返套餐，每匹马（限 1 位成人）约 15 万至 25 万印尼盾。马夫会全程牵马送您至台阶下方的拴马点，等候您游览完火山口后再送回吉普车旁。',
        bulletPoints: [
          '体力充足的朋友可以去程步行，回程再花 10 万 – 15 万印尼盾租单程马。',
          '价格按马匹计算，若带年幼宝宝可在马夫同意下由家长怀抱同乘。',
        ],
        tip: '上马前记得拍下您的吉普车牌号并记住马夫的外套特征，下山时更容易汇合！',
      },
      {
        id: 'jarak-titik-naik',
        numberBadge: '要点 02',
        vectorType: 'coin-piggy',
        accentBg: 'bg-amber-50/80',
        accentBorder: 'border-amber-300/60',
        title: '上马地点越靠近火山，价格越便宜',
        subtitle: '根据实际步行距离灵活选择',
        priceHighlight: '短程 Rp 7.5万 起',
        description:
          '一下吉普车就会有许多马夫热情询问。如果您先往前步行经过 Pura Luhur Poten 印度庙再租马，因路程大大缩短，报价会便宜不少。',
        bulletPoints: [
          '旺季较远停车场出发：往返约 Rp 200,000 – 250,000。',
          '印度庙附近出发：往返约 Rp 100,000 – 150,000。',
          '最后一段上坡：单程约 Rp 75,000 – 100,000。',
        ],
        tip: '周末如果吉普车停得非常远，直接从停车场选往返马最省体力。',
      },
      {
        id: 'seni-tawar-menawar',
        numberBadge: '要点 03',
        vectorType: 'handshake-deal',
        accentBg: 'bg-emerald-50/80',
        accentBorder: 'border-emerald-300/60',
        title: '礼貌透明的砍价与确认技巧',
        subtitle: '上马前务必确认单程还是往返',
        priceHighlight: '先谈妥再上马！',
        description:
          '布罗莫骑马价格可以礼貌议价。关键是在上马前说清楚：报价是往返（Pulang-Pergi）还是单程（One-Way），以及是否已包含等候时间。',
        bulletPoints: [
          '保持微笑与友善沟通，当地滕格尔族马夫非常淳朴热情。',
          '家庭或朋友同时租 2–3 匹以上通常更容易拿到优惠价。',
        ],
        tip: '议价请保持合理区间，公平交易也是支持当地原住民社区生计的善举。',
      },
      {
        id: 'weekday-vs-weekend',
        numberBadge: '要点 04',
        vectorType: 'calendar-peak',
        accentBg: 'bg-blue-50/80',
        accentBorder: 'border-blue-300/60',
        title: '平日与周末/节假日的合理价差',
        subtitle: '旺季需求高，价格略有上浮属正常现象',
        priceHighlight: '旺季约上浮 Rp 5万',
        description:
          '周一至周五游客较少，通常很容易谈到 15 万印尼盾往返；周末、学校假期、开斋节或跨年期间，往返 20 万 – 25 万印尼盾属于合理市场价。',
        bulletPoints: [
          '平日：人少景美，马夫等候时间更充裕。',
          '周末与长假：若带老人或小孩建议下车尽早预定马匹。',
        ],
        tip: '想拍出无人干扰的沙海骑马大片，最推荐周二至周四出行。',
      },
      {
        id: 'spot-foto-estetik',
        numberBadge: '要点 05',
        vectorType: 'camera-pose',
        accentBg: 'bg-pink-50/80',
        accentBorder: 'border-pink-300/60',
        title: '高性价比“纯骑马拍照”体验',
        subtitle: '不爬火山也能拍出西部牛仔大片',
        priceHighlight: 'Rp 3万 – 5万 / 次',
        description:
          '如果只想在沙海骑马留影，可以直接跟马夫说“Photo Only（仅拍照）”。只需 3 万至 5 万印尼盾即可拍照 10–15 分钟，超值又出片！',
        bulletPoints: [
          '绝佳机位：巴托克火山（Mount Batok）轮廓背景、印度庙前或开阔沙海。',
          '不少当地马夫非常熟悉手机构图，乐意帮您抓拍美照。',
        ],
        tip: '穿亮色冲锋衣或披上滕格尔民族风沙龙（红、黄、蓝），与黑色火山沙形成绝美对比。',
      },
      {
        id: 'tips-keamanan-etika',
        numberBadge: '要点 06',
        vectorType: 'safety-hat',
        accentBg: 'bg-orange-50/80',
        accentBorder: 'border-orange-300/60',
        title: '新手骑马安全与礼仪指南',
        subtitle: '马夫全程牵行，零基础也能安心体验',
        priceHighlight: '新手友好安全',
        description:
          '布罗莫马匹久经沙海训练且性情温顺，全程由马夫步行牵绳。只要掌握简单姿势，第一次骑马也能非常轻松。',
        bulletPoints: [
          '按马夫指引从马匹左侧上马，双手稳握前方马鞍把手。',
          '上坡时身体微微前倾，下坡时微微后仰保持重心。',
          '切勿突然大喊、猛然撑伞或对着马眼开闪光灯，以免惊吓马匹。',
        ],
        tip: '建议穿舒适长裤和防滑运动鞋/登山鞋，避免短裙或光滑拖鞋。',
      },
      {
        id: 'siapkan-uang-tunai',
        numberBadge: '要点 07',
        vectorType: 'wallet-cash',
        accentBg: 'bg-teal-50/80',
        accentBorder: 'border-teal-300/60',
        title: '务必提前准备印尼盾小额现金',
        subtitle: '沙海区域手机信号极弱，无法扫码支付',
        priceHighlight: '现场仅收现金',
        description:
          '布罗莫火山口及沙海几乎没有稳定移动网络，马夫普遍只收现金。建议提前准备好 5 万与 2 万印尼盾面额纸币。',
        bulletPoints: [
          '往返套餐通常在安全送回吉普车后再结清费用。',
          '若马夫热情耐心还帮您拍了许多好照片，可自愿给予少量小费表示感谢。',
        ],
        tip: '山区 ATM 极少，出发前请在玛琅、泗水或庞越市区提前取好现金。',
      },
    ],
    proTipBox: {
      title: 'WISATABROMO.CO 领队贴心提示',
      content:
        '如果您预订了 WisataBromo.co 官方吉普车行程，欢迎请我们的司机协助推荐熟悉且靠谱的当地马夫！司机不仅能帮您把关合理价格，还能确保马夫直接把您稳妥送回咱们的吉普车旁。',
    },
    conclusion:
      '在布罗莫沙海骑马既能为您保留攀登 250 级火山台阶的体力，又能深度感受滕格尔高原文化。掌握 15 万–25 万印尼盾往返参考价与这 7 条小贴士，祝您玩得尽兴又舒心！',
    ctaButton: '立即咨询并预订布罗莫行程',
    tags: [
      '布罗莫骑马费用',
      '布罗莫租马攻略',
      '布罗莫旅游贴士',
      '布罗莫火山口',
      '火山沙海',
      '布罗莫指南',
    ],
  },
};
