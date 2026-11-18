import { SupportedLanguage } from './LanguageContext';
import { StartCity } from '../types';

export interface LocalizedGate {
  name: string;
  badge: string;
  distanceTime: string;
  routeHighlight: string;
  bestFor: string;
  meetingPoints: string[];
}

export const CITY_GATE_TRANSLATIONS: Record<StartCity, Record<SupportedLanguage, LocalizedGate>> = {
  malang: {
    id: {
      name: 'Kota Malang (Pintu Masuk Utama)',
      badge: 'Paling Populer',
      distanceTime: '± 2 Jam ke Bromo (Midnight 00.00)',
      routeHighlight: 'Rute Tumpang - Gubugklakah - Jemplang - Savana',
      bestFor: 'Wisatawan kereta api stasiun Malang, keluarga, & solo traveler open trip.',
      meetingPoints: ['Stasiun Malang Kotabaru', 'Hotel / Guesthouse Kota Malang', 'Bandara Abdulrachman Saleh (MLG)']
    },
    en: {
      name: 'Malang City (Primary Gate)',
      badge: 'Most Popular',
      distanceTime: '± 2 Hours to Bromo (Midnight 00:00)',
      routeHighlight: 'Tumpang - Gubugklakah - Jemplang - Savanna route',
      bestFor: 'Train passengers arriving at Malang Station, families, and solo open trip travelers.',
      meetingPoints: ['Malang Kotabaru Railway Station', 'All Malang City Hotels & Guesthouses', 'Abdulrachman Saleh Airport (MLG)']
    },
    zh: {
      name: '玛琅市 (主要集结点)',
      badge: '最受欢迎',
      distanceTime: '± 2小时车程至火山 (午夜00:00出发)',
      routeHighlight: '通邦 - 古布格拉卡 - 占普朗 - 特莱特比斯草原路线',
      bestFor: '乘火车抵达玛琅的旅客、亲子家庭及拼车散客。',
      meetingPoints: ['玛琅火车站 (Kotabaru)', '玛琅市区内各星级酒店/民宿', '阿卜杜勒拉赫曼萨利赫机场 (MLG)']
    }
  },
  batu: {
    id: {
      name: 'Kota Wisata Batu (KWB)',
      badge: 'Villa & Resort',
      distanceTime: '± 2.5 Jam ke Bromo (Midnight 23.30)',
      routeHighlight: 'Rute Kota Batu - Malang - Poncokusumo - Bromo',
      bestFor: 'Tamu yang menginap di villa keluarga & hotel resort Batu tanpa pindah hotel.',
      meetingPoints: ['Seluruh Villa & Resort Kota Batu', 'Alun-alun Kota Batu', 'Jatim Park / Museum Angkut']
    },
    en: {
      name: 'Batu Tourism City (KWB)',
      badge: 'Villas & Resorts',
      distanceTime: '± 2.5 Hours to Bromo (Midnight 23:30)',
      routeHighlight: 'Batu City - Malang - Poncokusumo - Bromo route',
      bestFor: 'Guests residing in family villas and highland resorts in Batu without switching hotels.',
      meetingPoints: ['All Villas & Resorts in Batu City', 'Batu City Town Square', 'Jatim Park / Museum Angkut']
    },
    zh: {
      name: '巴图度假城 (KWB)',
      badge: '度假别墅区',
      distanceTime: '± 2.5小时车程至火山 (午夜23:30出发)',
      routeHighlight: '巴图市 - 玛琅 - 庞克库苏莫 - 布罗莫路线',
      bestFor: '入住巴图高地度假村及家庭独栋别墅、无需更换酒店的旅客。',
      meetingPoints: ['巴图市内所有度假村与别墅', '巴图市中心广场', '东爪哇乐园 / 交通工具博物馆']
    }
  },
  surabaya: {
    id: {
      name: 'Kota Surabaya Raya (Tol Cepat)',
      badge: 'Akses Tol & Bandara',
      distanceTime: '± 2.5 - 3 Jam via Tol Trans Jawa',
      routeHighlight: 'Tol Surabaya-Gempol-Pasuruan menuju Basecamp Tosari',
      bestFor: 'Pesawat Bandara Juanda, Kereta Stasiun Pasar Turi/Gubeng, gathering korporat.',
      meetingPoints: ['Stasiun Pasar Turi', 'Terminal Bungurasih', 'Bandara Internasional Juanda (SUB)']
    },
    en: {
      name: 'Surabaya Metropolitan (Trans-Java Highway)',
      badge: 'Airport & Highway Access',
      distanceTime: '± 2.5 - 3 Hours via Trans-Java Toll',
      routeHighlight: 'Surabaya - Gempol - Pasuruan Highway to Tosari Basecamp',
      bestFor: 'Juanda Airport arrivals, Gubeng/Pasar Turi train stations, corporate outings.',
      meetingPoints: ['Pasar Turi & Gubeng Stations', 'Bungurasih Terminal', 'Juanda International Airport (SUB)']
    },
    zh: {
      name: '泗水都会区 (高速直达)',
      badge: '机场与高速专线',
      distanceTime: '± 2.5 - 3小时经高速公路直达',
      routeHighlight: '泗水 - 珍波 - 帕苏鲁安高速直抵托萨里吉普基地',
      bestFor: '朱安达国际机场航班抵达者、古崩/图里火车站乘客及企业团建。',
      meetingPoints: ['泗水火车站 (Gubeng/Pasar Turi)', '泗水客运总站', '朱安达国际机场 (SUB)']
    }
  },
  sukapura: {
    id: {
      name: 'Sukapura Kab. Probolinggo',
      badge: 'Gerbang Hotel Bromo',
      distanceTime: '± 45 Menit (Start Fajar 03.00)',
      routeHighlight: 'Sukapura - Ngadisari - Cemorolawang - Lautan Pasir',
      bestFor: 'Tamu hotel Sukapura (Jiwa Jawa, Lava View, Bromo Terrace) & turis asing.',
      meetingPoints: ['Basecamp Jeep Sukapura', 'Lobby Hotel Sukapura & Cemorolawang', 'Jalan Raya Bromo']
    },
    en: {
      name: 'Sukapura, Probolinggo Regency',
      badge: 'Bromo Hotel Gateway',
      distanceTime: '± 45 Mins (Dawn Start 03:00)',
      routeHighlight: 'Sukapura - Ngadisari - Cemorolawang - Sea of Sand',
      bestFor: 'Guests at Sukapura & Cemorolawang hotels (Jiwa Jawa, Lava View) and international travelers.',
      meetingPoints: ['Sukapura 4x4 Jeep Basecamp', 'Sukapura & Cemorolawang Hotel Lobbies', 'Jalan Raya Bromo Main Road']
    },
    zh: {
      name: '苏卡普拉 (庞越县门廊)',
      badge: '高地酒店大门',
      distanceTime: '± 45分钟 (清晨03:00出发)',
      routeHighlight: '苏卡普拉 - 恩加迪萨里 - 切摩罗拉旺 - 火山沙海',
      bestFor: '入住苏卡普拉高档度假酒店（Jiwa Jawa、Lava View等）的海外游客。',
      meetingPoints: ['苏卡普拉吉普大本营', '苏卡普拉及切摩罗拉旺酒店大堂', '布罗莫大道沿线']
    }
  },
  tosari: {
    id: {
      name: 'Tosari Kab. Pasuruan',
      badge: 'Akses Tercepat Penanjakan',
      distanceTime: '± 35 Menit (Start Fajar 03.00)',
      routeHighlight: 'Tosari - Wonokitri - Dingklik - Penanjakan 1',
      bestFor: 'Akses langsung tanpa macet ke puncak tertinggi Penanjakan 1 (2.770 mdpl).',
      meetingPoints: ['Basecamp Jeep Tosari', 'Hotel Plataran Bromo / Bromo Cottage', 'Pasar Tosari']
    },
    en: {
      name: 'Tosari, Pasuruan Regency',
      badge: 'Fastest Penanjakan Route',
      distanceTime: '± 35 Mins (Dawn Start 03:00)',
      routeHighlight: 'Tosari - Wonokitri - Dingklik - Penanjakan 1 Viewpoint',
      bestFor: 'Direct, traffic-free access to highest sunrise peak Penanjakan 1 (2,770 masl).',
      meetingPoints: ['Tosari 4x4 Jeep Basecamp', 'Plataran Bromo Resort / Bromo Cottage', 'Tosari Traditional Market']
    },
    zh: {
      name: '托萨里 (帕苏鲁安县)',
      badge: '登顶佩南贾坎最快捷径',
      distanceTime: '± 35分钟 (清晨03:00出发)',
      routeHighlight: '托萨里 - 沃诺基特里 - 丁格里克 - 佩南贾坎1号观景台',
      bestFor: '直达最高日出点佩南贾坎1号（海拔2770米）且不易堵车的最佳通道。',
      meetingPoints: ['托萨里吉普基地', '普拉塔兰布罗莫度假酒店 / Bromo Cottage', '托萨里高山集市']
    }
  },
  gubugklakah: {
    id: {
      name: 'Gubugklakah Kab. Malang',
      badge: 'Jalur Eksotis Savana',
      distanceTime: '± 40 Menit (Start Fajar 03.00)',
      routeHighlight: 'Jalan Raya Gubugklakah 147 - Coban Pelangi - Jemplang',
      bestFor: 'Pecinta pemandangan perkebunan apel, homestay desa wisata, & Long Jeep 9 pax.',
      meetingPoints: ['Basecamp Gubugklakah No. 147', 'Rest Area Poncokusumo', 'Homestay Gubugklakah']
    },
    en: {
      name: 'Gubugklakah, Malang Regency',
      badge: 'Exotic Savanna Route',
      distanceTime: '± 40 Mins (Dawn Start 03:00)',
      routeHighlight: 'Gubugklakah 147 - Rainbow Waterfall - Jemplang',
      bestFor: 'Lovers of apple orchards, eco-tourism homestays, and Long Jeep 9-passenger parties.',
      meetingPoints: ['Gubugklakah Basecamp No. 147', 'Poncokusumo Rest Area', 'Village Homestays Gubugklakah']
    },
    zh: {
      name: '古布格拉卡 (玛琅东部生态线)',
      badge: '原生态草原景观道',
      distanceTime: '± 40分钟 (清晨03:00出发)',
      routeHighlight: '古布格拉卡路147号 - 彩虹瀑布 - 占普朗高地',
      bestFor: '喜爱高山苹果园风光、乡村特色民宿体验及9人加长吉普团体。',
      meetingPoints: ['古布格拉卡大本营147号', '庞克库苏莫休息区', '古布格拉卡村民宿']
    }
  }
};
