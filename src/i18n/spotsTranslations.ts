import { SupportedLanguage } from './LanguageContext';

export interface LocalizedSpotDetail {
  name: string;
  bestTime: string;
  description: string;
  highlights: string[];
  tips: string;
  jeepAccess: string;
}

export const ELEVATION_SPOTS_TRANSLATIONS: Record<string, Record<SupportedLanguage, LocalizedSpotDetail>> = {
  'penanjakan-1': {
    id: {
      name: 'Puncak Penanjakan 1 (King of Sunrise)',
      bestTime: '03.30 – 06.00 WIB',
      description: 'Gardu pandang tertinggi dan paling legendaris di Bromo. Menawarkan sudut pandang 180 derajat kaldera Tengger dengan latar belakang Gunung Batok, Kawah Bromo, dan erupsi asap Gunung Semeru di kejauhan.',
      highlights: ['Sudut pandang tertinggi & terluas', 'Fasilitas lengkap: toilet, musholla, warung kopi', 'Spot foto sunrise lautan awan terbaik di dunia'],
      tips: 'Datang lebih awal (sekitar pukul 03.30 WIB) untuk mengamankan posisi terdepan di pagar pembatas.',
      jeepAccess: 'Akses langsung via Jalur Tosari (Pasuruan) & Sukapura (Probolinggo).'
    },
    en: {
      name: 'Penanjakan 1 Peak (King of Sunrise)',
      bestTime: '03:30 – 06:00 WIB',
      description: 'The highest and most legendary observatory at Mount Bromo. Offers an expansive 180-degree view of the Tengger caldera framed by Mount Batok, active Bromo crater, and the smoking crest of Mount Semeru.',
      highlights: ['Highest & widest caldera panoramic angle', 'Complete amenities: clean restrooms, prayer room, warm cafes', 'World-famous sea-of-clouds golden sunrise'],
      tips: 'Arrive early (around 03:30 WIB) to secure front-row spots along the viewing deck railings.',
      jeepAccess: 'Direct access via Tosari (Pasuruan) & Sukapura (Probolinggo) jeep routes.'
    },
    zh: {
      name: '佩南贾坎1号观景台 (日出之王)',
      bestTime: '03:30 – 06:00 印尼时间',
      description: '布罗莫海拔最高、最负盛名的日出观景平台。提供180度开阔全景，将巴托克山、布罗莫活火山口及远方赛梅鲁火山喷发的烟柱尽收眼底。',
      highlights: ['最高视野、全景观景平台', '配套齐全：卫生间、祈祷室、热饮咖啡驿站', '享誉全球的壮观云海黄金日出胜地'],
      tips: '建议清晨03:30左右及早抵达，以便在观景栏杆前排占据最佳拍摄机位。',
      jeepAccess: '经托萨里（帕苏鲁安）或苏卡普拉（庞越）吉普路线直达。'
    }
  },
  'kingkong-hill': {
    id: {
      name: 'Kingkong Hill (Bukit Kedaluh)',
      bestTime: '04.00 – 06.00 WIB',
      description: 'Dinamakan Kingkong Hill karena tebing batu karangnya yang menyerupai wajah kingkong. Alternatif favorit jika Penanjakan 1 sedang sangat padat pengunjung.',
      highlights: ['Bentuk tebing karang dramatis', 'Sudut foto sejajar dengan garis fajar', 'Suasana sedikit lebih tenang'],
      tips: 'Jalur jalan setapak berbatu sekitar 100 meter dari area parkir jeep, siapkan senter / headlamp.',
      jeepAccess: 'Terletak tepat di bawah Penanjakan 1.'
    },
    en: {
      name: 'Kingkong Hill (Bukit Kedaluh)',
      bestTime: '04:00 – 06:00 WIB',
      description: 'Named Kingkong Hill due to its iconic rock formation resembling a giant gorilla profile. The premier alternative when Penanjakan 1 is crowded.',
      highlights: ['Dramatic craggy rock formations', 'Eye-level angle with the sunrise horizon', 'More serene, uncrowded atmosphere'],
      tips: 'Involves a short 100-meter rocky trail from the jeep parking lot; a flashlight or phone torch is recommended.',
      jeepAccess: 'Located just beneath Penanjakan 1 along the main ridge.'
    },
    zh: {
      name: '金刚山 (Bukit Kedaluh)',
      bestTime: '04:00 – 06:00 印尼时间',
      description: '因天然岩石轮廓酷似巨型大猩猩脸庞而得名。当佩南贾坎1号人流密集时，这里是极佳的私密高位日出替代点。',
      highlights: ['轮廓鲜明的戏剧性岩壁', '与破晓地平线齐平的极佳构图角度', '更为静谧幽雅的观景氛围'],
      tips: '从吉普停泊点步行约100米石阶山径，清晨建议携带便携手电筒。',
      jeepAccess: '坐落于佩南贾坎1号山脊正下方。'
    }
  },
  'bukit-cinta': {
    id: {
      name: 'Bukit Cinta (Love Hill / Lemah Pasar)',
      bestTime: '04.15 – 06.00 WIB',
      description: 'Spot romantis dengan monumen bertuliskan "Love Hill Bromo". Sangat cocok untuk pasangan dan rombongan yang ingin menikmati sunrise tanpa harus trekking jauh dari parkiran jeep.',
      highlights: ['Akses sangat dekat dari parkir jeep', 'Monumen foto romantis', 'Pemandangan kawah Bromo yang jernih'],
      tips: 'Suhu di pagi hari sangat dingin, kenakan jaket gunung tebal dan sarung tangan.',
      jeepAccess: 'Berada di jalur utama menuju Penanjakan.'
    },
    en: {
      name: 'Love Hill (Bukit Cinta / Lemah Pasar)',
      bestTime: '04:15 – 06:00 WIB',
      description: 'A romantic vantage point featuring the iconic "Love Hill Bromo" landmark monument. Ideal for couples and families desiring a sunrise viewpoint with zero strenuous trekking.',
      highlights: ['Effortless access right beside jeep parking', 'Romantic commemorative photo monument', 'Crystal-clear perspective of Bromo caldera floor'],
      tips: 'Highland dawn temperatures drop sharply; wear a thermal insulated jacket and windproof gloves.',
      jeepAccess: 'Located directly along the primary Penanjakan ascent highway.'
    },
    zh: {
      name: '爱之山 (Bukit Cinta / 爱情山)',
      bestTime: '04:15 – 06:00 印尼时间',
      description: '拥有“Love Hill Bromo”标志石碑的浪漫观景点。非常适合情侣与亲子家庭，无需徒步登山即可轻松饱览壮丽日出。',
      highlights: ['紧邻吉普车停靠点，步行零难度', '浪漫的爱之山纪念碑打卡点', '清晰俯瞰火山口盆地全景'],
      tips: '清晨气温极低，请务必穿戴防风羽绒服、毛线手套及保暖防寒配件。',
      jeepAccess: '位于前往佩南贾坎主干道路旁。'
    }
  },
  'seruni-point': {
    id: {
      name: 'Seruni Point (Penanjakan 2)',
      bestTime: '04.30 – 06.00 WIB',
      description: 'Gardu pandang dengan arsitektur 4 pilar megah bernuansa Kerajaan Majapahit. Terletak di atas Desa Ngadisari / Cemorolawang Sukapura.',
      highlights: ['Bangunan ikonik 4 pilar Majapahit', 'Akses mudah dari Cemorolawang', 'Pemandangan dinding tebing Widodaren yang gagah'],
      tips: 'Terdapat 256 anak tangga menuju puncak gardu pandang, bisa sewa kuda hingga pos tengah.',
      jeepAccess: 'Akses utama dari Sukapura & Ngadisari Probolinggo.'
    },
    en: {
      name: 'Seruni Point (Penanjakan 2)',
      bestTime: '04:30 – 06:00 WIB',
      description: 'Grand vantage observatory celebrated for its four towering Majapahit-style classical pillars perched atop Ngadisari village in Sukapura.',
      highlights: ['Iconic 4-pillar ancient Majapahit architecture', 'Direct convenient access from Cemorolawang hotels', 'Sweeping vistas of Mount Widodaren cliffs'],
      tips: 'Includes 256 stone steps to the summit deck; local horse riding service is available to the mid-way pavilion.',
      jeepAccess: 'Primary route via Sukapura and Ngadisari (Probolinggo).'
    },
    zh: {
      name: '塞鲁尼观景台 (佩南贾坎2号)',
      bestTime: '04:30 – 06:00 印尼时间',
      description: '融合满者伯夷古王朝传统建筑风格、矗立四座巍峨石柱的宏伟观景台，坐落于切摩罗拉旺村庄上方。',
      highlights: ['满者伯夷王朝四柱标志性建筑', '从切摩罗拉旺各酒店出发便捷快速', '近距离饱览威多达伦悬崖雄姿'],
      tips: '前往顶层需登256级平缓石阶，亦可在山脚租骑当地小马抵达半山休息亭。',
      jeepAccess: '庞越县苏卡普拉及恩加迪萨里核心通道。'
    }
  },
  'kawah-bromo': {
    id: {
      name: 'Kawah Aktif Bromo & Seruni Point',
      bestTime: '06.30 – 09.00 WIB',
      description: 'Kawah aktif vulkanik dengan tangga 250 anak tangga beton menuju bibir kawah. Di kawasan kaldera berdiri Seruni Point yang megah.',
      highlights: ['Mendengar gemuruh magma kawah aktif', 'Sensasi menaiki tangga 250 trap', 'Kemegahan panorama Seruni Point'],
      tips: 'Gunakan masker debu atau buff untuk menyaring bau belerang dan debu pasir vulkanik.',
      jeepAccess: 'Parkir jeep di Segara Wedhi (Lautan Pasir), dilanjutkan jalan kaki/sewa kuda.'
    },
    en: {
      name: 'Active Bromo Crater & Sacred Poten Temple',
      bestTime: '06:30 – 09:00 WIB',
      description: 'Walk or ride horses across the vast sand sea to climb 250 concrete steps directly to the rim of an active, rumbling volcanic crater.',
      highlights: ['Listen to volcanic sulfur plumes echoing from the crater floor', 'Historic 250-step stairway ascent', 'View of ancient Hindu Poten Temple on the plains'],
      tips: 'Wear an anti-dust mask or buff to filter fine volcanic ash and sulfur fumes.',
      jeepAccess: 'Jeep parks at the Sea of Sand; continue on foot or rent local Tengger horses.'
    },
    zh: {
      name: '布罗莫活火山口与波腾神庙',
      bestTime: '06:30 – 09:00 印尼时间',
      description: '横跨辽阔沙海，登上250级水泥台阶，直面翻滚咆哮的活火山口边缘，感受地球深处的脉动。',
      highlights: ['聆听火山口深处地心岩浆的轰鸣', '攀登250级火山石阶的经典仪式感', '俯瞰沙海中肃穆的波腾印度教古庙'],
      tips: '请佩戴双层口罩或防风防尘面罩，阻隔火山灰尘与硫磺气味。',
      jeepAccess: '吉普车停靠于沙海停车场，随后可步行或租骑当地腾格尔矮马。'
    }
  },
  'tebing-widodaren': {
    id: {
      name: 'Lembah & Tebing Purba Widodaren',
      bestTime: '06.00 – 08.00 WIB',
      description: 'Tebing batu purba dengan corak tekstur vertikal yang menjulang tinggi di pinggir lautan pasir. Spot terfavorit untuk foto estetik di atas kap Jeep Land Cruiser FJ40.',
      highlights: ['Spot foto nomor 1 Jeep Hardtop', 'Latar belakang tebing batu raksasa', 'Kabut fajar yang mengalir dramatis'],
      tips: 'Minta bantuan driver/fotografer untuk mengarahkan gaya berfoto di atas ban atau kap mobil jeep.',
      jeepAccess: 'Dapat diakses langsung oleh armada Jeep 4x4.'
    },
    en: {
      name: 'Widodaren Ancient Valley & Basalt Cliffs',
      bestTime: '06:00 – 08:00 WIB',
      description: 'Majestic ancient rock wall characterized by dramatic vertical erosion flutes rising sheer above the desert floor. The number-one photo spot atop vintage Toyota FJ40 jeeps.',
      highlights: ['World-renowned #1 vintage jeep photo backdrop', 'Towering basalt natural rock formations', 'Dramatic drifting morning caldera mist'],
      tips: 'Ask your driver/photographer to assist with stylish poses on the jeep bumper or roof rack.',
      jeepAccess: 'Directly reachable and drivable by our 4x4 Jeep fleet.'
    },
    zh: {
      name: '威多达伦远古峡谷与玄武岩壁',
      bestTime: '06:00 – 08:00 印尼时间',
      description: '垂直耸立于沙海边缘的高耸古老玄武岩壁，具有数万年水风侵蚀的独特纵向纹理，是经典丰田陆巡FJ40越野车旅拍的头号打卡胜地。',
      highlights: ['吉普车顶与车盖旅拍的绝佳背景', '壮丽磅礴的天然玄武岩古崖壁', '清晨如梦如幻的流淌晨雾'],
      tips: '向导或司机会热情指导并协助拍摄站在吉普车前盖上的时尚大片。',
      jeepAccess: '四驱吉普车队可直接驶抵峭壁脚下。'
    }
  },
  'savana-teletubbies': {
    id: {
      name: 'Savana Hijau & Bukit Teletubbies',
      bestTime: '08.00 – 11.00 WIB',
      description: 'Hamparan perbukitan hijau bergelombang yang menyerupai lembah Teletubbies. Kontras yang menyejukkan setelah menjelajahi kawah dan lautan pasir.',
      highlights: ['Hamparan rumput hijau asri', 'Spot terbaik untuk paket piknik santai', 'Banyak tanaman edelweiss & bunga liar'],
      tips: 'Musim terbaik untuk warna hijau paling segar adalah bulan Januari hingga Agustus.',
      jeepAccess: 'Terhubung langsung dari lautan pasir menuju jalur Jemplang Malang.'
    },
    en: {
      name: 'Green Savanna & Teletubbies Hill',
      bestTime: '08:00 – 11:00 WIB',
      description: 'Verdant undulating hills evoking the iconic Teletubbies landscape. A soothing, lush contrast after exploring the arid volcanic sands and crater.',
      highlights: ['Lush rolling emerald grasslands', 'Premier location for our luxury breakfast picnic', 'Native edelweiss & high-altitude wildflowers'],
      tips: 'The most vibrant emerald green season spans from January through August.',
      jeepAccess: 'Seamlessly linked across the sand sea connecting toward Jemplang Malang.'
    },
    zh: {
      name: '特莱特比斯草原与青翠山丘',
      bestTime: '08:00 – 11:00 印尼时间',
      description: '连绵起伏的翠绿草丘，犹如童话中的天线宝宝山丘。在探索完荒凉黑色沙海与火山后，呈现出治愈宁静的绿色生机。',
      highlights: ['连绵如茵的青翠草甸', '户外野餐与精致早餐的绝佳打卡地', '高山雪绒花与野花盛放'],
      tips: '草地最为碧绿青翠的季节为每年1月至8月。',
      jeepAccess: '穿过沙海直通玛琅占普朗高山公路。'
    }
  },
  'pasir-berbisik': {
    id: {
      name: 'Segara Wedhi (Lautan Pasir Berbisik)',
      bestTime: '08.30 – 11.00 WIB',
      description: 'Hamparan pasir vulkanik seluas 5.250 hektar. Disebut pasir berbisik karena hembusan angin fajar menciptakan gesekan pasir halus yang terdengar seperti bisikan alam.',
      highlights: ['Padang pasir vulkanik 5.250 hektar', 'Lokasi syuting film legendaris Indonesia', 'Sensasi berkendara off-road 4x4 meluncur bebas'],
      tips: 'Gunakan kacamata hitam (sunglasses) untuk melindungi mata dari pantulan sinar matahari dan debu pasir.',
      jeepAccess: 'Jalur off-road terbuka untuk armada Jeep Toyota FJ40.'
    },
    en: {
      name: 'Whispering Sea of Sand (Segara Wedhi)',
      bestTime: '08:30 – 11:00 WIB',
      description: 'A vast 5,250-hectare volcanic sand expanse. Called whispering sands because morning alpine winds create a gentle rustling sound across the fine black grains.',
      highlights: ['Massive 5,250-hectare volcanic caldera desert', 'Filming location of Indonesia’s iconic film "Whispering Sands"', 'Exhilarating off-road safari driving experience'],
      tips: 'Wear UV-blocking sunglasses to shield your eyes from bright morning reflections and airborne sand.',
      jeepAccess: 'Open off-road terrain traversed by our Toyota FJ40 4x4 fleet.'
    },
    zh: {
      name: '低语沙海 (Segara Wedhi)',
      bestTime: '08:30 – 11:00 印尼时间',
      description: '广达5250公顷的火山黑沙荒原。微风吹拂细腻沙粒摩擦作响，仿佛大自然在耳畔轻柔低语。',
      highlights: ['占地5250公顷的壮阔火山沙海盆地', '印尼著名经典电影《低语的沙》拍摄取景地', '驰骋火山沙野的四驱越野探险体验'],
      tips: '建议佩戴墨镜，既能有效防风沙入眼，又能防止高原强紫外线照射。',
      jeepAccess: '丰田陆地巡洋舰FJ40越野车畅行无阻。'
    }
  }
};
