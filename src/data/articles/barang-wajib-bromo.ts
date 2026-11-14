import { SupportedLanguage } from '../../i18n/LanguageContext';

export interface ArticleItemDetail {
  id: string;
  iconName: string;
  title: string;
  subtitle: string;
  description: string;
  tip: string;
}

export interface LocalizedArticleContent {
  id: string;
  slug: string;
  title: string;
  metaDescription: string;
  author: string;
  category: string;
  categoryLabel: string;
  publishDate: string;
  readTime: string;
  heroImage: string;
  heroImageCaption: string;
  introduction: string[];
  items: ArticleItemDetail[];
  proTipBox: {
    title: string;
    content: string;
  };
  inlinePhotos: Array<{
    url: string;
    caption: string;
  }>;
  conclusion: string;
  ctaButton: string;
  tags: string[];
}

export const ARTICLE_BARANG_WAJIB_BROMO: Record<SupportedLanguage, LocalizedArticleContent> = {
  id: {
    id: 'barang-wajib-bawaan-ke-bromo',
    slug: '7-barang-wajib-bawaan-ke-bromo',
    title: '7 Barang Wajib Bawaan ke Bromo (Biarkan Kamu Tetap Hangat & Nyaman)',
    metaDescription: 'Panduan lengkap 7 barang wajib dibawa saat liburan ke Bromo agar tetap hangat & nyaman di suhu 0-5°C. Dari jaket windbreaker, sepatu anti-slip, hingga masker.',
    author: 'Tim Redaksi WisataBromo.co',
    category: 'tips_wisata',
    categoryLabel: 'Tips & Panduan Wisata',
    publishDate: '7 November 2026',
    readTime: '6 Menit Baca',
    heroImage: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=1600&auto=format&fit=crop',
    heroImageCaption: 'Pemandangan fajar spektakuler di Penanjakan 1 Bromo dengan hembusan angin kencang pegunungan.',
    introduction: [
      'Merencanakan petualangan ke Gunung Bromo adalah salah satu keputusan liburan paling mendebarkan yang bisa Anda buat di Jawa Timur. Namun, di balik pesona matahari terbit keemasan dan hamparan lautan pasir yang magis, terdapat tantangan iklim pegunungan vulkanik yang tidak boleh diremehkan.',
      'Terletak di ketinggian 2.329 hingga 2.770 meter di atas permukaan laut (mdpl), suhu udara di kawasan Bromo pada dini hari (pukul 03.00 – 06.00 WIB) bisa merosot tajam hingga 0°C - 5°C, bahkan mencapai minus di musim kemarau! Embusan angin kencang di puncak Penanjakan 1 dan Kingkong Hill sering kali membuat rasa dingin menusuk hingga ke tulang.',
      'Agar momen berharga menikmati Golden Sunrise tidak rusak karena hipotermia atau badan menggigil hebat, berikut adalah daftar 7 barang wajib bawaan yang dijamin menjaga Anda tetap hangat, aman, dan nyaman sepanjang perjalanan bersama WisataBromo.co.'
    ],
    items: [
      {
        id: '1',
        iconName: 'Shield',
        title: '1. Jaket Tebal / Windbreaker (Outer Layer)',
        subtitle: 'Pelindung Utama dari Angin Kencang Pegunungan',
        description: 'Jaket adalah benteng pertahanan utama Anda. Pilihlah jaket berteknologi windbreaker atau down jacket (jaket bulu angsa/dacron) yang memiliki penutup kepala (hoodie). Kain luarnya harus mampu menahan embusan angin kencang dan embun pagi yang basah. Hindari menggunakan jaket bahan denim atau katun tipis karena bahan tersebut mudah menyerap dingin dan kelembapan.',
        tip: 'Pilihlah jaket dengan zipper yang rapat dan kantong bersleting untuk menyimpan ponsel agar baterai tidak cepat drop akibat suhu dingin.'
      },
      {
        id: '2',
        iconName: 'Layers',
        title: '2. Pakaian Berlapis (Midlayer: Sweater / Fleece)',
        subtitle: 'Mekanisme Layering Perangkap Panas Tubuh',
        description: 'Rahasia para pendaki berpengalaman adalah teknik pakaian berlapis (layering system). Gabungkan 3 lapisan: Base Layer (kaos thermal/heattech penahan keringat), Mid Layer (sweater/fleece penyimpan panas tubuh), dan Outer Layer (jaket windbreaker). Saat matahari mulai tinggi pukul 08.00 pagi dan suhu berangsur hangat, Anda bisa melepas jaket luar dengan mudah.',
        tip: 'Bawa 1 kaos ganti ekstra di dalam tas kecil jika Anda termasuk orang yang mudah berkeringat saat berjalan mendaki kawah.'
      },
      {
        id: '3',
        iconName: 'Flame',
        title: '3. Sarung Tangan & Kupluk / Beanie',
        subtitle: 'Menjaga Ujung Bagian Tubuh Tetap Hangat',
        description: 'Kepala dan telapak tangan adalah area tubuh tempat keluarnya panas secara masif. Mengabaikan kedua area ini bisa memicu sakit kepala akibat angin dingin (cold wind headache) dan jari kaku. Gunakan kupluk/beanie berbahan wool/fleece yang menutup telinga dengan sempurna, serta sarung tangan hangat yang fleksibel.',
        tip: 'Pilih sarung tangan touch-screen friendly agar Anda bisa tetap memotret sunrise tanpa harus melepas sarung tangan.'
      },
      {
        id: '4',
        iconName: 'Wind',
        title: '4. Masker & Scarf (Debu Vulkanik & Bau Belerang)',
        subtitle: 'Proteksi Pernapasan di Lautan Pasir Bromo',
        description: 'Lautan Pasir Bromo (Pasir Berbisik) terkenal dengan paparan debu vulkanik halus yang berhembus saat jeep melintas atau angin kencang bertiup. Selain itu, bibir Kawah Bromo sering kali mengembuskan asap uap belerang. Masker medis/N95 atau buff/scarf kain sangat vital untuk melindungi paru-paru dan saluran pernapasan Anda.',
        tip: 'Basahi sedikit buff atau masker kain Anda dengan air bersih jika aroma belerang di bibir kawah terasa agak menyengat.'
      },
      {
        id: '5',
        iconName: 'Footprints',
        title: '5. Sepatu yang Nyaman & Anti-Slip',
        subtitle: 'Pijakan Kokoh di Medan Pasir & Tangga Kawah',
        description: 'Jalur perjalanan di Bromo meliputi tanah berkerikil, padang pasir gembur, tebing batu, dan 250 anak tangga kawah yang lembap. Gunakan sepatu sneakers, kets, atau sepatu trekking berbahan kain/kulit yang memiliki sol karet bergerigi (anti-slip). Hindari penggunaan sepatu heels, flatshoes licin, atau sandal jepit biasa.',
        tip: 'Gunakan kaus kaki tebal berbahan wool/katun tinggi untuk mencegah lecet dan menjaga kaki tetap hangat selama berjalan.'
      },
      {
        id: '6',
        iconName: 'BatteryCharging',
        title: '6. Powerbank & Kamera (Dokumentasi Momen)',
        subtitle: 'Cegah Baterai Drop Akibat Suhu Dingin Ekstrem',
        description: 'Suhu udara dingin di bawah 10°C dapat menurunkan performa baterai lithium-ion pada smartphone dan kamera secara drastis (baterai cepat habis atau mati mendadak). Bawa powerbank berkapasitas minimal 10.000 mAh dan simpan ponsel/baterai cadangan di saku dalam jaket dekat suhu tubuh Anda.',
        tip: 'Pastikan memori HP/kamera masih memiliki ruang penyimpanan yang luas karena Anda akan mengambil ratusan foto indah di setiap spot!'
      },
      {
        id: '7',
        iconName: 'HeartPulse',
        title: '7. Obat Pribadi, Minyak Angin & Camilan Energi',
        subtitle: 'Persiapan Fisik dan Pertolongan Pertama di Ketinggian',
        description: 'Setiap orang memiliki tingkat toleransi ketinggian dan suhu yang berbeda. Selalu siapkan obat-obatan pribadi seperti inhaler asma, obat pusing, minyak kayu putih/aromatapi untuk mengusir mual, serta obat mual perjalanan. Bawa juga cokelat, biskuit, atau permen jahe untuk menambah kadar gula darah.',
        tip: 'Permen jahe atau permen mint sangat efektif meredakan pusing dan rasa mual saat perjalanan jeep bergoyang melewati jalur bergelombang.'
      }
    ],
    proTipBox: {
      title: 'PRO TIP DARI TOUR LEADER WISATABROMO.CO',
      content: 'Minum air hangat atau teh jahe sebelum naik Jeep 4x4 pukul 03.00 WIB untuk mencegah kram perut dan hipotermia. Seluruh armada Jeep WisataBromo.co dilengkapi driver berpengalaman yang siap mengantar petualangan Anda!'
    },
    inlinePhotos: [
      {
        url: '/assets/images/5db1f48e-4eb1-4403-a65e-54b659b1357a.png',
        caption: 'Rombongan wisatawan menikmati kehangatan matahari terbit berlatar pemandangan lautan pasir dan Gunung Batok.'
      },
      {
        url: '/assets/gaya_bersarung_perempuan_tengger_169-BPuUNd7O.jpg',
        caption: 'Kearifan lokal gaya berbusana hangat masyarakat Tengger dengan sarung tebal dan jaket windbreaker penahan dingin Bromo.'
      }
    ],
    conclusion: 'Mempersiapkan 7 barang di atas dengan teliti adalah kunci utama untuk menikmati keindahan magis Bromo tanpa gangguan fisik. Percayakan perjalanan liburan Anda kepada WisataBromo.co — operator resmi berizin dengan armada jeep terawat, driver lokal berpengalaman, dan layanan ramah siap menemani Anda menciptakan kenangan tak terlupakan di Gunung Bromo!',
    ctaButton: 'Reservasi Trip Bromo Sekarang',
    tags: ['TipsBromo', 'PerlengkapanWisata', 'SuhuDinginBromo', 'OpenTripBromo', 'WisataBromoCo']
  },

  en: {
    id: 'barang-wajib-bawaan-ke-bromo',
    slug: '7-barang-wajib-bawaan-ke-bromo',
    title: '7 Essential Items to Pack for Mount Bromo (Keep Yourself Warm & Comfortable)',
    metaDescription: 'Essential packing guide for Mount Bromo: 7 must-have items to stay warm and comfortable in 0-5°C alpine weather. From windbreakers to anti-slip boots.',
    author: 'WisataBromo.co Editorial Team',
    category: 'tips_wisata',
    categoryLabel: 'Travel Tips & Guide',
    publishDate: 'November 7, 2026',
    readTime: '6 Min Read',
    heroImage: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=1600&auto=format&fit=crop',
    heroImageCaption: 'Spectacular dawn viewpoint at Penanjakan 1 Bromo with crisp high-altitude mountain winds.',
    introduction: [
      'Planning an expedition to Mount Bromo is one of the most thrilling vacation decisions you can make in East Java, Indonesia. However, behind the allure of golden sunrises and magical volcanic sand seas lies a rugged alpine climate that should never be underestimated.',
      'Perched at an elevation of 2,329 to 2,770 meters above sea level (masl), temperatures in the Bromo caldera during pre-dawn hours (03:00 – 06:00 AM) frequently plummet to 0°C – 5°C, occasionally dropping below freezing during the dry season! Biting mountain winds at Penanjakan 1 and Kingkong Hill can quickly chill you to the bone.',
      'To ensure your once-in-a-lifetime Golden Sunrise moment isn’t spoiled by severe shivering or hypothermia, here is our expert checklist of 7 essential packing items guaranteed to keep you warm, safe, and comfortable with WisataBromo.co.'
    ],
    items: [
      {
        id: '1',
        iconName: 'Shield',
        title: '1. Heavy Jacket / Windbreaker (Outer Layer)',
        subtitle: 'Your Primary Defense Against Alpine Winds',
        description: 'A heavy jacket is your first line of defense. Choose a windbreaker or down jacket equipped with a hood. The outer fabric should effectively repel piercing gusts and damp morning dew. Avoid wearing denim or thin cotton jackets, as these fabrics absorb moisture and cold air easily.',
        tip: 'Opt for jackets with secure zippers and zipped pockets to protect your smartphone from rapid battery drain caused by freezing temperatures.'
      },
      {
        id: '2',
        iconName: 'Layers',
        title: '2. Layered Clothing (Midlayer: Sweater / Fleece)',
        subtitle: 'Trapping Body Heat with the 3-Layer System',
        description: 'The secret used by seasoned mountaineers is proper layering. Combine 3 layers: Base Layer (thermal moisture-wicking top), Mid Layer (fleece/wool sweater to trap body heat), and Outer Layer (windproof jacket). As the sun rises after 08:00 AM and warmth returns, you can effortlessly strip off the outer coat.',
        tip: 'Pack an extra thermal t-shirt in your daypack if you tend to sweat while trekking up the 250 crater steps.'
      },
      {
        id: '3',
        iconName: 'Flame',
        title: '3. Warm Gloves & Beanie / Kupluk',
        subtitle: 'Protecting Extremities Where Heat Escapes Quickly',
        description: 'Your head and hands are key zones where body heat escapes rapidly. Neglecting these areas often leads to cold wind headaches and stiff fingers. Wear a fleece or wool beanie that covers your ears completely, alongside flexible insulated gloves.',
        tip: 'Choose touch-screen friendly gloves so you can capture sunrise photos on your camera or phone without exposing bare skin to freezing winds.'
      },
      {
        id: '4',
        iconName: 'Wind',
        title: '4. Face Mask & Scarf (Volcanic Dust & Sulfur Fumes)',
        subtitle: 'Essential Respiratory Protection Across Bromo’s Sand Sea',
        description: 'Bromo’s Sea of Sand (Pasir Berbisik) is famous for fine airborne volcanic ash kicked up by passing 4x4 jeeps or gusty winds. Furthermore, the active crater rim constantly vents sulfur vapors. An N95/medical mask or a fabric buff/scarf is vital for shielding your lungs and airways.',
        tip: 'Lightly dampen your cloth buff with clean water if sulfur odors near the crater staircase feel overwhelming.'
      },
      {
        id: '5',
        iconName: 'Footprints',
        title: '5. Comfortable Anti-Slip Trekking Shoes',
        subtitle: 'Solid Traction on Loose Sand & Damp Stairs',
        description: 'Terrain in Bromo includes gravel paths, loose volcanic sand plains, rocky ridges, and 250 damp concrete stairs up the crater. Wear sturdy sneakers, running shoes, or trekking boots with deep rubber treads. High heels, flat shoes with smooth soles, or open sandals are strictly discouraged.',
        tip: 'Wear thick wool or cotton socks to prevent blisters and keep your feet snugly warm throughout the morning excursion.'
      },
      {
        id: '6',
        iconName: 'BatteryCharging',
        title: '6. High-Capacity Powerbank & Camera',
        subtitle: 'Prevent Cold-Induced Smartphone Battery Drain',
        description: 'Sub-10°C cold weather significantly degrades lithium-ion battery performance in phones and cameras, causing rapid discharge or unexpected shutdowns. Carry a powerbank of at least 10,000 mAh and keep spare batteries in an inner jacket pocket close to your body heat.',
        tip: 'Clear memory storage before departure, as you’ll want to take hundreds of breathtaking photos at every caldera viewpoint!'
      },
      {
        id: '7',
        iconName: 'HeartPulse',
        title: '7. Personal Medicines, Essential Oils & Snacks',
        subtitle: 'First Aid & Quick Altitude Energy Boosts',
        description: 'Altitude tolerance varies from person to person. Always pack essential personal medication like asthma inhalers, headache relievers, eucalyptus oil/balm to combat nausea, and motion sickness pills. Carry chocolate bars, nuts, or ginger candies to boost blood sugar levels.',
        tip: 'Ginger or mint candies work wonders in soothing mild nausea during the bumpy 4x4 jeep ride across volcanic desert tracks.'
      }
    ],
    proTipBox: {
      title: 'PRO TIP FROM WISATABROMO.CO TOUR LEADERS',
      content: 'Sip warm water or ginger tea before boarding your 4x4 Jeep at 03:00 AM to prevent stomach cramps and hypothermia. WisataBromo.co tour leaders and experienced drivers ensure a comfortable and safe journey for all travelers!'
    },
    inlinePhotos: [
      {
        url: '/assets/images/5db1f48e-4eb1-4403-a65e-54b659b1357a.png',
        caption: 'Travelers soaking in the golden dawn warmth with Mount Batok and the sand caldera in the background.'
      },
      {
        url: '/assets/gaya_bersarung_perempuan_tengger_169-BPuUNd7O.jpg',
        caption: 'Iconic Tengger mountain warm sarong and windbreaker style keeping visitors snug in sub-zero alpine temperatures.'
      }
    ],
    conclusion: 'Packing these 7 essential items is the key to experiencing Mount Bromo’s raw magic in comfort and safety. Trust your dream adventure to WisataBromo.co — your licensed official operator providing pristine 4x4 jeeps, certified local drivers, and warm hospitality from start to finish!',
    ctaButton: 'Book Your Bromo Tour Now',
    tags: ['BromoTips', 'PackingList', 'ColdWeatherPrep', 'BromoTourPackage', 'WisataBromoCo']
  },

  zh: {
    id: 'barang-wajib-bawaan-ke-bromo',
    slug: '7-barang-wajib-bawaan-ke-bromo',
    title: '布罗莫火山必备的7件物品（让你保持温暖与舒适）',
    metaDescription: '布罗莫火山必看穿搭与打包指南：7件让你在0-5°C高寒环境中保持温暖与舒适的必备物品，涵盖防风外套、防滑靴及防尘口罩。',
    author: 'WisataBromo.co 官方编辑团队',
    category: 'tips_wisata',
    categoryLabel: '旅游攻略与指南',
    publishDate: '2026年11月7日',
    readTime: '阅读时间 6分钟',
    heroImage: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=1600&auto=format&fit=crop',
    heroImageCaption: '布罗莫火山佩南贾坎1号观景台破晓初升的震撼景色，伴随着高山凛冽清爽的微风。',
    introduction: [
      '计划前往印度尼西亚东爪哇省的布罗莫火山（Mount Bromo）探险，无疑是一次令人心潮澎湃的非凡之旅。然而，在金色日出与如梦似幻的黑沙海奇观背后，高寒的火山气候绝不可忽视。',
      '布罗莫火山群海拔高耸于2,329至2,770米之间，凌晨破晓前（03:00至06:00）的寒气逼人，气温常骤降至 0°C – 5°C，在旱季甚至可能出现零下霜冻！山顶佩南贾坎观景台的强烈高寒狂风，常常让人瑟瑟发抖。',
      '为了确保您的布罗莫日出之旅不会因失温或剧烈发抖而扫兴，WisataBromo.co 贴心为您整理了以下7件必备行囊清单，助您全程温暖、安全、舒适地畅游火山！'
    ],
    items: [
      {
        id: '1',
        iconName: 'Shield',
        title: '1. 厚重保暖外套 / 防风冲锋衣（外层）',
        subtitle: '抵御高山凛冽狂风的第一道坚固防线',
        description: '一件优质的保暖外套是您的核心防线。建议选择具备防风功能的羽绒服或连帽冲锋衣。外层面料需能阻挡强风与清晨的湿冷浓雾。请避免穿着牛仔外套或薄棉衣，这类面料容易吸收湿气与寒气。',
        tip: '选择带有拉链口袋的外套，方便妥善存放手机，防止手机因高寒低温导致电池电量急剧下降。'
      },
      {
        id: '2',
        iconName: 'Layers',
        title: '2. 分层穿搭（中层：羊毛衫 / 抓绒衣）',
        subtitle: '三层穿搭法则 锁住身体热量',
        description: '资深高山户外爱好者的秘诀在于分层穿搭（Layering System）：内层排汗保暖内衣 + 中层抓绒/羊毛衫锁热 + 外层防风外套。上午08:00后阳光升起、气温回升时，您可以轻松脱下外层外套。',
        tip: '如果您在攀登火山口台阶时容易出汗，建议在随身小包里备一件替换的保暖内衣。'
      },
      {
        id: '3',
        iconName: 'Flame',
        title: '3. 保暖手套与毛线帽 / Kupluk',
        subtitle: '保护热量极易散失的肢体末端',
        description: '头部与手部是人体热量散失最快的区域。忽视这两个部位极易引发冷风偏头痛和手指僵硬。请佩戴能完全覆盖耳朵的羊毛/抓绒帽子，以及保暖灵活的手套。',
        tip: '优先选择支持触屏操作的手套，这样您无需脱下手套即可随时用手机或相机拍摄日出美景。'
      },
      {
        id: '4',
        iconName: 'Wind',
        title: '4. 防尘口罩与围巾（防火山灰与硫磺味）',
        subtitle: '穿越布罗莫黑色沙海的呼吸防护',
        description: '布罗莫低语沙海（Pasir Berbisik）在吉普车驶过或强风吹拂时会扬起细腻的火山灰。此外，活火山口边缘常有硫磺蒸汽涌出。N95/医用口罩或布质围脖能有效保护您的呼吸道健康。',
        tip: '如果在火山口边缘感到硫磺味较浓，可用清水微湿润布围脖遮住口鼻。'
      },
      {
        id: '5',
        iconName: 'Footprints',
        title: '5. 舒适防滑徒步鞋 / 运动鞋',
        subtitle: '行走于松软沙海与湿滑台阶的稳定抓地力',
        description: '布罗莫的游览路线涵盖碎石路、松软火山沙原、岩石山脊以及登火山口的250级台阶。请穿着抓地力强、底纹较深的运动鞋或徒步鞋。切勿穿着高跟鞋、平底薄靴或普通拖鞋。',
        tip: '搭配吸汗保暖的高筒羊毛或厚棉袜，防止磨脚并保持双脚整天干爽温暖。'
      },
      {
        id: '6',
        iconName: 'BatteryCharging',
        title: '6. 大容量移动电源与相机',
        subtitle: '防止高寒低温导致手机与相机快速掉电',
        description: '10°C以下的低温会显著降低智能手机与相机锂电池的性能，导致掉电极快甚至自动关机。请携带至少10,000 mAh的充电宝，并将备用电池放在贴身口袋借体温保暖。',
        tip: '出发前请清空手机与相机内存，因为您将在每一个绝美观景点拍摄成百上千张质感大片！'
      },
      {
        id: '7',
        iconName: 'HeartPulse',
        title: '7. 个人药品、薄荷油与高能零食',
        subtitle: '高海拔抗寒与应急能量补充',
        description: '每个人对高海拔与低温的适应能力不同。请随身携带个人药品，如哮喘吸入剂、头痛药、驱风油/薄荷油（缓解恶心感）以及晕车药。带些巧克力、坚果或姜糖以快速补充血糖与热量。',
        tip: '乘坐四驱吉普车在颠簸的沙海路段行驶时，嚼一块姜糖或薄荷糖能非常有效地缓解晕车与头晕。'
      }
    ],
    proTipBox: {
      title: 'WISATABROMO.CO 领队专业贴士',
      content: '凌晨03:00乘坐四驱吉普车前，建议喝一杯温水或姜茶以防胃部受凉和失温。WisataBromo.co 配备经验丰富的专业司机与优质服务，确保您的行程温暖舒适！'
    },
    inlinePhotos: [
      {
        url: '/assets/images/5db1f48e-4eb1-4403-a65e-54b659b1357a.png',
        caption: '游客们在暖阳照耀的日出时刻，以巴托克火山与火山口沙海为背景留下难忘合影。'
      },
      {
        url: '/assets/gaya_bersarung_perempuan_tengger_169-BPuUNd7O.jpg',
        caption: '腾格尔原住民特色厚保暖沙笼与高山防风冲锋衣搭配，轻松抵御布罗莫高原的严寒。'
      }
    ],
    conclusion: '准备好以上7件必备物品，是让您的布罗莫火山之旅倍感轻松与舒适的黄金法则。将您的梦幻假期放心交给 WisataBromo.co — 正规特许运营商，配备状况优秀的四驱吉普车队、经验丰富的当地司机与无微不至的贴心服务！',
    ctaButton: '立即预订布罗莫火山行程',
    tags: ['布罗莫攻略', '穿搭建议', '防寒准备', '布罗莫包车', 'WisataBromoCo']
  }
};
