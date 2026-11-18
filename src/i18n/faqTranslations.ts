import { SupportedLanguage } from './LanguageContext';

export interface LocalizedDestinationSpot {
  name: string;
  bestTime: string;
  speciality: string;
}

export interface LocalizedTestimonial {
  author: string;
  city: string;
  tripTaken: string;
  comment: string;
}

export interface LocalizedFaqItem {
  question: string;
  answer: string;
}

export const DESTINATION_SPOTS_TRANSLATIONS: Record<string, Record<SupportedLanguage, LocalizedDestinationSpot>> = {
  'penanjakan-1': {
    id: {
      name: 'Puncak Penanjakan 1',
      bestTime: '04:30 - 05:45 WIB',
      speciality: 'Spot golden sunrise paling spektakuler dengan panorama deretan Bromo, Batok, dan Semeru.'
    },
    en: {
      name: 'Penanjakan 1 Summit',
      bestTime: '04:30 - 05:45 WIB',
      speciality: 'World-renowned golden sunrise viewpoint overlooking Mount Bromo, Batok, and smoking Semeru.'
    },
    zh: {
      name: '佩南贾坎1号山巅',
      bestTime: '04:30 - 05:45 印尼时间',
      speciality: '全球知名的黄金日出观景点，俯瞰布罗莫、巴托克与远方赛梅鲁火山同框全景。'
    }
  },
  'kawah-bromo': {
    id: {
      name: 'Kawah Aktif Bromo & Poten',
      bestTime: '06:30 - 08:30 WIB',
      speciality: 'Kawah berapi aktif dengan 250 anak tangga beton & Pura Luhur Poten di kaki gunung.'
    },
    en: {
      name: 'Active Bromo Crater & Poten Temple',
      bestTime: '06:30 - 08:30 WIB',
      speciality: 'Active smoking volcanic crater with 250 concrete steps & sacred Poten Temple on the plains.'
    },
    zh: {
      name: '布罗莫活火山口与波腾古庙',
      bestTime: '06:30 - 08:30 印尼时间',
      speciality: '直面咆哮喷发的活火山口，攀登250级石阶并瞻仰沙海中的神圣波腾庙。'
    }
  },
  'bukit-widodaren': {
    id: {
      name: 'Tebing Lembah Widodaren',
      bestTime: '06:00 - 07:30 WIB',
      speciality: 'Latar foto ikonik di atas kap mobil Jeep 4x4 dengan dinding tebing batu bergaris dramatis.'
    },
    en: {
      name: 'Widodaren Valley Cliffs',
      bestTime: '06:00 - 07:30 WIB',
      speciality: 'Iconic safari photo backdrop atop 4x4 Toyota Jeeps framed by dramatic vertical basalt cliffs.'
    },
    zh: {
      name: '威多达伦岩壁峡谷',
      bestTime: '06:00 - 07:30 印尼时间',
      speciality: '经典丰田越野车旅拍背景，高耸入云的天然玄武岩古悬崖造就震撼大片。'
    }
  },
  'pasir-berbisik': {
    id: {
      name: 'Pasir Berbisik (Segara Wedhi)',
      bestTime: '07:30 - 09:30 WIB',
      speciality: 'Lautan pasir vulkanik seluas 5.250 hektar dengan desau angin khas yang menenangkan jiwa.'
    },
    en: {
      name: 'Whispering Sands (Segara Wedhi)',
      bestTime: '07:30 - 09:30 WIB',
      speciality: 'Expansive 5,250-hectare volcanic black desert where soothing alpine breezes whisper across the dunes.'
    },
    zh: {
      name: '低语沙海 (Segara Wedhi)',
      bestTime: '07:30 - 09:30 印尼时间',
      speciality: '广达5250公顷的火山黑沙原野，微风拂动沙丘如天籁耳语般治愈心灵。'
    }
  },
  'savana-teletubbies': {
    id: {
      name: 'Savana Hijau & Bukit Teletubbies',
      bestTime: '08:30 - 10:30 WIB',
      speciality: 'Perbukitan rumput gelombang asri yang hijau royo-royo bak serial anak Teletubbies.'
    },
    en: {
      name: 'Emerald Savanna & Teletubbies Hills',
      bestTime: '08:30 - 10:30 WIB',
      speciality: 'Lush undulating green hills reminiscent of the Teletubbies landscapes, ideal for outdoor breakfast.'
    },
    zh: {
      name: '特莱特比斯青翠草原',
      bestTime: '08:30 - 10:30 印尼时间',
      speciality: '连绵起伏的翠绿草丘，如童话世界般宁静秀丽，是户外惬意野餐的首选胜地。'
    }
  }
};

export const TESTIMONIALS_TRANSLATIONS: Record<string, Record<SupportedLanguage, LocalizedTestimonial>> = {
  'rev-1': {
    id: {
      author: 'Dimas Wicaksono & Istri',
      city: 'Jakarta Selatan',
      tripTaken: 'Paket Piknik Bromo Savana',
      comment: 'Pengalaman honeymoon yang luar biasa berkesan! Sarapan estetik di tengah Savana Bukit Teletubbies disiapkan sangat rapi. Ada croissant hangat, drip coffee, buah segar, dan fotografer Mas Rendy yang sabar mengarahkan gaya. Hasil foto dan videonya sangat aesthetic!'
    },
    en: {
      author: 'Dimas Wicaksono & Wife',
      city: 'South Jakarta',
      tripTaken: 'Bromo Savanna Picnic Package',
      comment: 'An utterly memorable honeymoon experience! The aesthetic breakfast in the middle of Teletubbies Savanna was set up impeccably. Warm croissants, drip coffee, fresh fruit, and our photographer Rendy patiently directed our poses. The photos and videos turned out so aesthetic!'
    },
    zh: {
      author: '迪马斯夫妇 (Dimas & Wife)',
      city: '雅加达 (Jakarta)',
      tripTaken: '特莱特比斯草原野餐套餐',
      comment: '非常难忘的蜜月体验！在特莱特比斯大草原中心精心布置的波西米亚早餐无懈可击。现烤牛角包、手冲热咖啡和新鲜水果，摄影师还耐心指导拍照姿势，拍出来的照片视频发社交平台大获好评！'
    }
  },
  'rev-2': {
    id: {
      author: 'dr. Farah Nabila',
      city: 'Surabaya',
      tripTaken: 'Open Trip Start Surabaya',
      comment: 'Solo trip pertama kali ke Bromo dan sangat puas dengan wisatabromo.co. Dijemput tepat waktu di Stasiun Gubeng jam 23.30, mobil AC nya bersih wangi, driver jeepnya ramah dan jago cari spot foto sepi di Penanjakan. 1 orang pasti berangkat tanpa drama kuota!'
    },
    en: {
      author: 'dr. Farah Nabila',
      city: 'Surabaya',
      tripTaken: 'Open Trip from Surabaya',
      comment: 'My first solo trip to Mount Bromo and I was thoroughly impressed with WisataBromo.co. Picked up right on time at Gubeng Station at 23:30, spotless air-conditioned car, and the friendly jeep driver found peaceful uncrowded sunrise spots on Penanjakan. 1 person guaranteed departure without quota drama!'
    },
    zh: {
      author: '法拉医生 (dr. Farah Nabila)',
      city: '泗水 (Surabaya)',
      tripTaken: '泗水出发拼车之旅 (Open Trip)',
      comment: '第一次独自一人去布罗莫，WisataBromo.co的服务让我极其放心！午夜23:30在泗水古崩火车站准时接送，空调车干净舒适，吉普司机非常热情还在佩南贾坎帮我找到了人少视野极佳的机位。一人即可成行，毫无后顾之忧！'
    }
  },
  'rev-3': {
    id: {
      author: 'Keluarga Hartono (6 Pax)',
      city: 'Semarang',
      tripTaken: 'Private Trip Start Malang',
      comment: 'Bawa orang tua dan anak-anak jadi lebih tenang pakai Private Trip. Penjemputan di hotel Malang tepat jam 00.30 WIB, jeep 4x4 bersih dan suspensi enak. Driver Mas Joko sangat sopan, membantu orang tua saat naik turun jeep. Rekomendasi bintang 5 untuk wisata keluarga.'
    },
    en: {
      author: 'Hartono Family (6 Pax)',
      city: 'Semarang',
      tripTaken: 'Private Trip from Malang',
      comment: 'Traveling with elderly parents and children was completely stress-free with the Private Trip. Punctual hotel pickup in Malang at 00:30 WIB, clean 4x4 jeep with great suspension. Our driver Joko was exceptionally courteous and assisted our parents boarding. 5-star recommendation for families.'
    },
    zh: {
      author: '哈托诺一家 6人 (Hartono Family)',
      city: '三宝垄 (Semarang)',
      tripTaken: '玛琅出发专属包车包吉普 (Private Trip)',
      comment: '带着老人与小孩出游，选择独立包车真的省心太多。凌晨00:30准时在玛琅酒店大堂接驳，四驱吉普车避震舒适干净。司机大哥服务十分礼貌，上下车细心搀扶老人，全家一致给予五星好评！'
    }
  },
  'rev-4': {
    id: {
      author: 'Rian Pratama & Komunitas Trail',
      city: 'Bandung',
      tripTaken: 'Paket Sewa Trail Start Sukapura',
      comment: 'Gaspol di Lautan Pasir dan Widodaren pakai Honda CRF 150L kondisi mesin prima banget! Safety gear lengkap dan bersih, marshall lokalnya Mas Slamet bawa kami ke track pasir tersembunyi yang seru parah. Adrenalin terbayar tuntas!'
    },
    en: {
      author: 'Rian Pratama & Dirt Bike Club',
      city: 'Bandung',
      tripTaken: 'Trail Dirt Bike Rental Sukapura',
      comment: 'Ripping across the Sea of Sand and Widodaren on a Honda CRF 150L with immaculate engine tuning! Complete clean protective safety gear, and local trail marshal Slamet took us to exhilarating hidden sand tracks. Pure adrenaline!'
    },
    zh: {
      author: '瑞安及越野摩托车友 (Rian Pratama)',
      city: '万隆 (Bandung)',
      tripTaken: '苏卡普拉越野摩托车租赁',
      comment: '驾驶本田CRF 150L在广阔黑沙海和威多达伦岩壁间尽情狂飙，车况非常动力强劲！专业全套护具干净崭新，当地领队向导带我们探访了极具挑战性的秘密越野路线，肾上腺素瞬间飙升，痛快淋漓！'
    }
  }
};

export const FAQS_TRANSLATIONS: Record<number, Record<SupportedLanguage, LocalizedFaqItem>> = {
  0: {
    id: {
      question: 'Apakah 1 orang solo traveler bisa mendaftar paket Open Trip?',
      answer: 'Tentu bisa! Open Trip kami (baik Start Malang maupun Start Surabaya) dijamin PASTI BERANGKAT setiap hari tanpa syarat minimal peserta. Solo traveler tidak perlu khawatir trip dibatalkan.'
    },
    en: {
      question: 'Can a solo traveler join the Open Trip package?',
      answer: 'Absolutely! Our Open Trips (from both Malang and Surabaya) have a 100% Guaranteed Daily Departure with no minimum guest quota required. Solo travelers never need to worry about cancellations.'
    },
    zh: {
      question: '独自一人（单人游客）可以报名参加拼车行程 (Open Trip) 吗？',
      answer: '完全可以！我们的拼车团（无论是玛琅出发还是泗水出发）均享有100%每日保证出团承诺，绝无最低人数限制，单人报名即可成行，绝不临时取消。'
    }
  },
  1: {
    id: {
      question: 'Kapan waktu terbaik untuk menyaksikan Golden Sunrise dan Embun Es di Bromo?',
      answer: 'Musim terbaik adalah kemarau antara bulan Mei hingga Oktober ketika langit cerah tanpa halangan awan mendung. Fenomena embun beku/es (frost) di Savana umumnya terjadi pada puncak dingin bulan Juni, Juli, hingga Agustus saat suhu fajar mencapai 2°C - 5°C.'
    },
    en: {
      question: 'When is the best season to witness the Golden Sunrise and Frost (Frozen Dew) in Bromo?',
      answer: 'The optimal window is the dry season between May and October when the skies are clear. The unique morning frost phenomenon across the savanna typically occurs during the peak cool months of June, July, and August with dawn temperatures dropping to 2°C - 5°C.'
    },
    zh: {
      question: '观赏布罗莫黄金日出和高原霜冻冰晶的最佳月份是什么时候？',
      answer: '最佳观赏季节是每年5月至10月的旱季，此时高山晴空万里无云雾遮挡。特莱特比斯草原的晨间凝霜结冰奇观通常出现在6月至8月的高寒时段，清晨气温可降至2°C至5°C。'
    }
  },
  2: {
    id: {
      question: 'Berapa kapasitas penumpang untuk 1 unit mobil Jeep Bromo?',
      answer: 'Satu unit Jeep Land Cruiser Hardtop 4x4 memiliki kapasitas ideal 5 hingga maksimal 6 penumpang dewasa untuk kenyamanan maksimal saat berkendara di jalur kaldera.'
    },
    en: {
      question: 'What is the passenger capacity of a Mount Bromo 4x4 Jeep?',
      answer: 'Each Toyota Land Cruiser Hardtop 4x4 comfortably accommodates 5 to a maximum of 6 adult passengers for an optimal, safe, and comfortable ride across rugged caldera terrain.'
    },
    zh: {
      question: '一辆布罗莫火山四驱吉普车的乘客核载人数是多少？',
      answer: '每辆丰田陆地巡洋舰经典4x4硬顶吉普车标准舒适核载为5人，至多6名成年乘客，以确保穿越火山沙海险峻地形时的宽敞与乘坐安全。'
    }
  },
  3: {
    id: {
      question: 'Bagaimana jika cuaca buruk atau status Gunung Bromo meningkat?',
      answer: 'Keselamatan tamu adalah prioritas nomor satu. WisataBromo.co senantiasa berkoordinasi dengan PVMBG dan Balai Besar TNBTS. Jika kawasan ditutup secara resmi akibat force majeure/kondisi alam, Anda dapat melakukan reschedule jadwal tanpa biaya penalti atau refund sesuai ketentuan SOP TNBTS.'
    },
    en: {
      question: 'What happens in case of severe weather or heightened volcanic activity alert?',
      answer: 'Guest safety is our foremost priority. WisataBromo.co maintains direct coordination with PVMBG vulcanologists and the TNBTS National Park Bureau. If the park is officially closed due to natural force majeure, you can reschedule at zero penalty fee or receive refunds per TNBTS regulations.'
    },
    zh: {
      question: '如果遇到恶劣天气或火山预警级别调整，行程将如何处理？',
      answer: '旅客安全是我们的首要准则。WisataBromo.co 与印尼火山地质局 (PVMBG) 及国家公园管理局保持实时联动。如遇官方因不可抗力闭园，可免费改期或按国家公园管理规定办理退款手续。'
    }
  },
  4: {
    id: {
      question: 'Apa perbedaan rute start Malang, Batu, Surabaya, Gubugklakah, Sukapura, dan Tosari?',
      answer: 'Start Malang/Batu/Surabaya sudah mencakup mobil penjemputan dari kota asal ke basecamp Bromo. Sementara start Gubugklakah (Malang Timur), Sukapura (Probolinggo), dan Tosari (Pasuruan) adalah titik kumpul terdekat langsung ganti/naik Jeep 4x4 bagi wisatawan yang sudah menginap di hotel sekitar lereng Bromo.'
    },
    en: {
      question: 'What is the difference between starting from Malang, Batu, Surabaya, Gubugklakah, Sukapura, and Tosari?',
      answer: 'Start points in Malang, Batu, and Surabaya include private city transfers directly from your hotel/station to Bromo. Meanwhile, Gubugklakah, Sukapura (Probolinggo), and Tosari (Pasuruan) are slope basecamps where guests staying near the park board 4x4 jeeps directly.'
    },
    zh: {
      question: '从玛琅、巴图、泗水、古布格拉卡、苏卡普拉和托萨里出发有何区别？',
      answer: '玛琅、巴图和泗水出发包含从市区酒店/火车站/机场到火山基地的舒适接驳专车；而古布格拉卡、苏卡普拉和托萨里则是靠近景区的吉普车换乘基地，适合已自行入住火山周边度假酒店的游客。'
    }
  },
  5: {
    id: {
      question: 'Bagaimana cara pemesanan dan pembayaran?',
      answer: 'Pemesanan sangat mudah: pilih paket di website ini, klik "Pesan via WhatsApp", Anda akan langsung terhubung dengan admin reservasi kami. Cukup membayar DP (Down Payment) 30% untuk mengunci armada dan sisa pelunasan dapat dibayarkan saat hari H trip.'
    },
    en: {
      question: 'How do I complete booking and payment?',
      answer: 'Booking is effortless: select your desired package, click "Book via WhatsApp", and you will connect directly with our reservation team. A 30% deposit secures your jeep fleet, and the remaining balance is paid on the day of the tour.'
    },
    zh: {
      question: '如何预订行程与完成定金支付？',
      answer: '预订流程极简：在网站选定心仪套餐后，点击“微信/WhatsApp客服”，即可直接连线双语顾问。仅需支付30%定金即可锁定专属车队与门票，余款于出团当日结算即可。'
    }
  }
};
