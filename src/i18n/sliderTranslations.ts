import { SupportedLanguage } from './LanguageContext';
import { SlideItem } from '../components/BromoHeroSlider';

export interface LocalizedSlideContent {
  title: string;
  subtitle: string;
  locationTag: string;
  highlightLabel: string;
  description: string;
}

export const SLIDE_TRANSLATIONS: Record<string, Record<SupportedLanguage, LocalizedSlideContent>> = {
  'slide-633b7b65': {
    id: {
      title: 'Cakrawala Megah Kaldera Bromo Tengger',
      subtitle: 'Perspektif luas lanskap pegunungan vulkanis yang memukau di bawah langit cerah pegunungan.',
      locationTag: 'Kaldera Bromo Tengger',
      highlightLabel: 'Panorama Unggulan Bromo',
      description: 'Panorama luas yang memperlihatkan keasrian alam pegunungan Tengger dengan perbukitan vulkanik dan kaldera pasir yang membentang mempesona.'
    },
    en: {
      title: 'Majestic Horizon of Bromo Tengger Caldera',
      subtitle: 'Expansive volcanic mountain landscape under crisp alpine skies.',
      locationTag: 'Bromo Tengger Caldera',
      highlightLabel: 'Premier Bromo Panorama',
      description: 'Panoramic vista showcasing the pristine nature of the Tengger highlands with rolling volcanic peaks and ancient sand caldera.'
    },
    zh: {
      title: '腾格尔布罗莫破火山口壮丽地平线',
      subtitle: '在清澈高山天空下俯瞰令人屏息的火山群全景。',
      locationTag: '布罗莫腾格尔火山口',
      highlightLabel: '布罗莫顶级全景',
      description: '壮丽开阔的火山全景，展现腾格尔高地古老火山山脉与无垠沙海交织的自然奇观。'
    }
  },
  'slide-2f94bb9e': {
    id: {
      title: 'Eksotisme Pasir Berbisik & Kerucut Batok',
      subtitle: 'Hamparan lautan pasir purba membentang mengelilingi relief kerucut Gunung Batok nan legendaris.',
      locationTag: 'Segara Wedhi & Batok',
      highlightLabel: 'Lautan Pasir Ikonik',
      description: 'Hamparan pasir vulkanik luas berbisik ditiup angin sejuk, dikelilingi dinding tebing purba kaldera Bromo.'
    },
    en: {
      title: 'Whispering Sands & Mount Batok Cone',
      subtitle: 'Ancient volcanic sand sea surrounding the legendary corrugated cone of Mount Batok.',
      locationTag: 'Segara Wedhi & Mount Batok',
      highlightLabel: 'Iconic Sea of Sand',
      description: 'Vast volcanic sand sea whispering in the alpine breeze, framed by ancient caldera cliff walls.'
    },
    zh: {
      title: '低语沙海与神圣巴托克火山锥',
      subtitle: '远古火山沙海延绵环绕着传奇的神圣巴托克火山。',
      locationTag: '低语沙海与巴托克山',
      highlightLabel: '标志性沙海奇观',
      description: '微风轻拂的广袤黑色火山沙原，四周环绕着数万年地质运动造就的悬崖巨壁。'
    }
  },
  'slide-51c89c20': {
    id: {
      title: 'Sunrise Emas Menghangatkan Kaldera Tengger',
      subtitle: 'Momen magis mentari terbit menyinari puncak Semeru, Batok, dan kawah aktif Bromo.',
      locationTag: 'Penanjakan & Kingkong Hill',
      highlightLabel: 'Golden Hour Sunrise',
      description: 'Gradasi warna fajar spektakuler yang diakui dunia sebagai salah satu momen matahari terbit paling memukau di Indonesia.'
    },
    en: {
      title: 'Golden Sunrise Illuminating Tengger Caldera',
      subtitle: 'Magical dawn illuminating the peaks of Mount Semeru, Batok, and active Bromo crater.',
      locationTag: 'Penanjakan 1 & Kingkong Hill',
      highlightLabel: 'Golden Hour Sunrise',
      description: 'Spectacular dawn color gradations globally celebrated as one of the most mesmerizing sunrise spectacles.'
    },
    zh: {
      title: '金色日出照亮腾格尔火山群',
      subtitle: '破晓初晨的金色霞光洒在赛梅鲁峰、巴托克山与活跃的布罗莫火山口上。',
      locationTag: '佩南贾坎峰与金刚山',
      highlightLabel: '黄金日出时刻',
      description: '世界闻名的日出奇观，壮丽的云海与朝霞交织出如画般的梦幻景致。'
    }
  },
  'slide-5db1f48e': {
    id: {
      title: 'Konvoi Jeep Land Cruiser 4x4 di Lautan Pasir',
      subtitle: 'Ikon petualangan off-road melintasi padang pasir vulkanik menuju spot terbaik kaldera.',
      locationTag: 'Lautan Pasir Bromo',
      highlightLabel: 'Off-Road 4x4 Adventure',
      description: 'Sensasi meluncur bersama armada Jeep Toyota Land Cruiser legendaris melintasi jalur off-road kaldera Tengger.'
    },
    en: {
      title: 'Toyota FJ40 4x4 Expedition Across Sand Sea',
      subtitle: 'Legendary off-road journey crossing volcanic desert plains to premier sunrise viewpoints.',
      locationTag: 'Bromo Sea of Sand',
      highlightLabel: 'Off-Road 4x4 Adventure',
      description: 'Thrilling safari aboard our iconic Toyota Land Cruiser FJ40 fleet traversing rugged volcanic tracks.'
    },
    zh: {
      title: '丰田经典4x4四驱吉普穿越沙海',
      subtitle: '乘经典复古越野吉普车跨越火山沙海，直达绝佳观景点。',
      locationTag: '布罗莫沙海',
      highlightLabel: '四驱越野探险',
      description: '乘坐性能卓越的经典丰田陆地巡洋舰越野车队，体验驰骋火山黑沙荒野的澎湃快感。'
    }
  },
  'slide-mystical-temple': {
    id: {
      title: 'Seruni Point: Gardu Pandang Megah di Kaldera',
      subtitle: 'Destinasi wisata panorama spektakuler dengan arsitektur 4 pilar megah di kawasan Bromo.',
      locationTag: 'Seruni Point Bromo',
      highlightLabel: 'Panorama Seruni Point',
      description: 'Gardu pandang ikonik dengan pemandangan menakjubkan menghadap langsung ke arah kawah aktif dan lautan pasir Bromo.'
    },
    en: {
      title: 'Seruni Point: Majestic Viewpoint of the Caldera',
      subtitle: 'Grand 4-pillar architectural observatory overlooking the active crater and sand plains.',
      locationTag: 'Seruni Point Bromo',
      highlightLabel: 'Seruni Point Panorama',
      description: 'Iconic viewpoint offering spectacular panoramas facing the active crater and sweeping sea of sand.'
    },
    zh: {
      title: '塞鲁尼观景台：壮观的四柱火山口展望台',
      subtitle: '融合满者伯夷王朝建筑风格的宏伟观景平台，俯瞰活火山口。',
      locationTag: '塞鲁尼观景台',
      highlightLabel: '塞鲁尼绝景',
      description: '极具印尼传统历史文化韵味的标志性观景台，正对布罗莫活火山口与沙海全貌。'
    }
  },
  'slide-362a1c07': {
    id: {
      title: 'Dinding Tebing Megah Widodaren',
      subtitle: 'Formasi tebing batu purba nan menjulang tinggi menjadi latar foto favorit para petualang.',
      locationTag: 'Tebing Widodaren Bromo',
      highlightLabel: 'Spot Foto Widodaren',
      description: 'Pahatan alam dinding batu cadas Widodaren memberikan kesan gagah dan dramatis di setiap sudut pemotretan.'
    },
    en: {
      title: 'Dramatic Cliff Walls of Mount Widodaren',
      subtitle: 'Towering ancient rock formations creating the premier backdrop for safari photography.',
      locationTag: 'Widodaren Cliff Bromo',
      highlightLabel: 'Widodaren Photo Spot',
      description: 'Naturally sculpted basalt cliffs of Widodaren providing a bold, cinematic backdrop.'
    },
    zh: {
      title: '威多达伦远古巨岩峭壁',
      subtitle: '高耸入云的天然玄武岩古崖，是越野吉普车打卡的绝佳背景。',
      locationTag: '威多达伦岩壁',
      highlightLabel: '威多达伦摄影胜地',
      description: '数百万年自然侵蚀雕琢的巨型石壁，为每一位探险者记录震撼的吉普旅拍照。'
    }
  },
  'slide-f47cb8b6': {
    id: {
      title: 'Panorama Spektakuler Lembah Kaldera Purba',
      subtitle: 'Pemandangan tak berbatas menyajikan harmoni alam pegunungan Jawa Timur nan memesona.',
      locationTag: 'Seruni Point & Dingklik',
      highlightLabel: 'Lanskap Kaldera Luas',
      description: 'Pandangan 360 derajat membentang ke seluruh penjuru kaldera, mengabadikan keagungan alam semesta.'
    },
    en: {
      title: 'Spectacular Ancient Caldera Valley Panorama',
      subtitle: 'Boundless vistas harmonizing the awe-inspiring mountain geography of East Java.',
      locationTag: 'Seruni Point & Dingklik',
      highlightLabel: 'Expansive Caldera Valley',
      description: '360-degree expansive views across the volcanic valley, capturing timeless geological grandeur.'
    },
    zh: {
      title: '壮丽远古火山口峡谷全景',
      subtitle: '东爪哇壮阔火山群地貌交融相映，呈现令人赞叹的自然和谐之美。',
      locationTag: '塞鲁尼与丁格里克',
      highlightLabel: '广袤火山口峡谷',
      description: '360度开阔视野俯瞰整座火山盆地，感受大自然的无穷磅礴与震撼。'
    }
  },
  'slide-236c626a': {
    id: {
      title: 'Petualangan Eksplorasi Bromo Bersama Sahabat',
      subtitle: 'Abadikan momen kebersamaan tak terlupakan di atas kap jeep berlatar kaldera luas.',
      locationTag: 'Bukit Cinta Bromo',
      highlightLabel: 'Momen Foto Favorit',
      description: 'Dokumentasi eksklusif gaya hidup petualang bersama fotografer profesional berlatar belakang matahari fajar.'
    },
    en: {
      title: 'Unforgettable Bromo Exploration with Companions',
      subtitle: 'Capture cherished moments atop rugged jeeps against the vast caldera amphitheater.',
      locationTag: 'Love Hill Bromo',
      highlightLabel: 'Favorite Photo Moments',
      description: 'Exclusive adventure documentation guided by skilled photographers under morning skies.'
    },
    zh: {
      title: '与挚友共赴布罗莫火山探险之旅',
      subtitle: '在越野吉普车引擎盖上留下难忘的旅拍合影，定格火山回忆。',
      locationTag: '布罗莫爱之山',
      highlightLabel: '最受欢迎旅拍',
      description: '专业摄影师贴心指导抓拍，在日出柔光与火山背景下记录珍贵的友情与爱情。'
    }
  }
};

export const getLocalizedSlide = (slide: SlideItem, lang: SupportedLanguage): SlideItem => {
  if (lang === 'id') return slide;
  const translation = SLIDE_TRANSLATIONS[slide.id]?.[lang];
  if (!translation) return slide;
  return {
    ...slide,
    title: translation.title || slide.title,
    subtitle: translation.subtitle || slide.subtitle,
    locationTag: translation.locationTag || slide.locationTag,
    highlightLabel: translation.highlightLabel || slide.highlightLabel,
    description: translation.description || slide.description
  };
};
