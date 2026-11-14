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
  },
  'slide-65fbd49c': {
    id: {
      title: 'Jejak Langkah Menuju Bibir Kawah Bromo',
      subtitle: 'Mendaki tangga kawah vulkanis untuk menyaksikan gemuruh kepulan asap belerang bumi.',
      locationTag: 'Kawah Aktif Bromo',
      highlightLabel: 'Eksplorasi Kawah Aktif',
      description: 'Pengalaman tak tertandingi menatap langsung ke dalam kawah bergemuruh dengan aroma belerang alami khas gunung berapi.'
    },
    en: {
      title: 'Hiking to the Rim of Active Bromo Crater',
      subtitle: 'Ascend the iconic crater staircase to witness roaring volcanic steam plumes.',
      locationTag: 'Active Bromo Crater',
      highlightLabel: 'Active Crater Rim Safari',
      description: 'Peer into the roaring volcanic crater and feel the primal forces of the earth.'
    },
    zh: {
      title: '徒步登顶布罗莫活火山口边缘',
      subtitle: '攀登火山台阶，亲眼目睹咆哮奔腾的天然硫磺烟云。',
      locationTag: '布罗莫活火山口',
      highlightLabel: '火山口深度探索',
      description: '近距离俯瞰沸腾咆哮的火山深渊，感受大自然最原始震撼的地心力量。'
    }
  },
  'slide-vintage-4x4': {
    id: {
      title: 'Klasik & Gagah: Jeep Hardtop 4x4 di Savana Hijau',
      subtitle: 'Perpaduan ketangguhan armada klasik 4x4 dengan hamparan rumput hijau bukit savana.',
      locationTag: 'Lembah Savana Watangan',
      highlightLabel: 'Vintage 4x4 Savana',
      description: 'Keanggunan unit Land Cruiser FJ40 klasik di tengah padang rumput hijau perbukitan Teletubbies Bromo.'
    },
    en: {
      title: 'Vintage & Rugged: 4x4 Hardtop Jeep in Green Savanna',
      subtitle: 'Classic 4x4 capability combined with lush green rolling hills of Bromo savanna.',
      locationTag: 'Watangan Savanna Valley',
      highlightLabel: 'Vintage 4x4 Savana',
      description: 'Timeless Toyota FJ40 vintage jeeps parked against Teletubbies green rolling hills.'
    },
    zh: {
      title: '经典传奇：绿茵草原中的丰田四驱吉普',
      subtitle: '复古越野吉普车的沉稳霸气与天线宝宝草原的翠绿相得益彰。',
      locationTag: '瓦唐甘草地山谷',
      highlightLabel: '复古四驱越野',
      description: '经典丰田FJ40越野吉普车穿梭于如诗如画的天线宝宝绿色丘陵山谷之中。'
    }
  },
  'slide-81a01754': {
    id: {
      title: 'Kehangatan Budaya & Tradisi Masyarakat Tengger',
      subtitle: 'Kearifan lokal suku Tengger bersarung khas yang ramah menyambut setiap wisatawan.',
      locationTag: 'Desa Wisata Tengger',
      highlightLabel: 'Kearifan Lokal Tengger',
      description: 'Mengenal nilai-nilai luhur dan keramahan warga asli penjaga kelestarian Gunung Suci Bromo.'
    },
    en: {
      title: 'Cultural Warmth & Sacred Traditions of Tengger People',
      subtitle: 'Warm hospitality from indigenous Tengger guardians wearing traditional sarongs.',
      locationTag: 'Tengger Cultural Village',
      highlightLabel: 'Tengger Indigenous Culture',
      description: 'Discover the peaceful spiritual traditions of the native guardians of sacred Mount Bromo.'
    },
    zh: {
      title: '腾格尔原住民族的神圣传统与热情人文',
      subtitle: '身着传统沙笼的腾格尔守卫者热情迎接收看世界各地的旅人。',
      locationTag: '腾格尔传统文化村',
      highlightLabel: '腾格尔人文底蕴',
      description: '感受神圣布罗莫火山守护者古老虔诚的宗教仪式与质朴温馨的淳朴民风。'
    }
  },
  'slide-family-picnic': {
    id: {
      title: 'Picnic Experience: Momen Hangat di Kaki Bromo',
      subtitle: 'Santap hidangan hangat dengan setup meja estetik & butler service di tengah keasrian alam.',
      locationTag: 'Lembah Widodaren',
      highlightLabel: 'Picnic Experience VIP',
      description: 'Layanan piknik sarapan mewah bergaya bohemian dengan menu lezat, kopi panas, dan udara pegunungan yang segar.'
    },
    en: {
      title: 'Picnic Experience: Cozy Outdoor Dining at Mount Bromo',
      subtitle: 'Aesthetic bohemian breakfast setup with dedicated butler service amidst mountain air.',
      locationTag: 'Widodaren Valley',
      highlightLabel: 'VIP Picnic Experience',
      description: 'Luxury outdoor dining experience featuring gourmet warm dishes, fresh drip coffee, and plush seating.'
    },
    zh: {
      title: '火山野餐体验：布罗莫山麓下的雅致用餐',
      subtitle: '在清爽高山空气中享用波西米亚木桌雅致早餐与专属管家服务。',
      locationTag: '威多达伦山谷',
      highlightLabel: '尊享火山野餐',
      description: '在被壮丽玄武岩崖壁环绕的山谷中，品味热气腾腾的特色美食与现滤咖啡。'
    }
  },
  'slide-9ff4f27d': {
    id: {
      title: 'Gradasi Sunset Menawan di Balik Gunung Batok',
      subtitle: 'Cahaya senja yang menenangkan saat langit kaldera berubah menjadi lembayung keemasan.',
      locationTag: 'Mentigen & Pasir Berbisik',
      highlightLabel: 'Sunset Magis Kaldera',
      description: 'Suasana syahdu dan tenang saat mentari mulai tenggelam di balik dinding kaldera purba Bromo Tengger.'
    },
    en: {
      title: 'Mesmerizing Twilight Sunset Behind Mount Batok',
      subtitle: 'Serene evening glow as the caldera sky transforms into golden purple hues.',
      locationTag: 'Mentigen & Whispering Sands',
      highlightLabel: 'Magical Caldera Sunset',
      description: 'Tranquil twilight atmosphere as dusk falls across the ancient volcanic amphitheater.'
    },
    zh: {
      title: '巴托克火山身后的绝美夕阳余晖',
      subtitle: '当火山口天空染上金紫霞光，感受沉静安详的高寒黄昏之美。',
      locationTag: '门蒂根与低语沙海',
      highlightLabel: '梦幻火山落日',
      description: '夕阳缓缓沉入远古火山壁之后，天地间笼罩着唯美而震撼的绚丽晚霞。'
    }
  },
  'slide-jeep-expedition': {
    id: {
      title: 'Ekspedisi Grup & Gathering Seru di Kaldera',
      subtitle: 'Pilihan terbaik untuk corporate outing, trip keluarga besar, maupun private adventure.',
      locationTag: 'Blok Savana & Pasir Berbisik',
      highlightLabel: 'Ekspedisi & Gathering',
      description: 'Keseruan jelajah alam bersama puluhan rombongan jeep dengan koordinasi profesional tim WisataBromo.co.'
    },
    en: {
      title: 'Group Expeditions & Thrilling Caldera Gatherings',
      subtitle: 'The ultimate choice for corporate retreats, large family trips, and group outings.',
      locationTag: 'Savanna & Sand Sea Plain',
      highlightLabel: 'Group Expedition & Outing',
      description: 'Seamless multi-jeep convoy coordination managed by certified WisataBromo.co trip leaders.'
    },
    zh: {
      title: '火山口大型团体探险与团建越野之旅',
      subtitle: '公司团建、家族大团及私人定制越野探险的卓越首选。',
      locationTag: '萨瓦纳草原与沙海',
      highlightLabel: '团队探险与团建',
      description: '由专业领队团队统一调度数十辆越野吉普车队，打造井然有序的震撼大团出游。'
    }
  },
  'slide-baweantrip': {
    id: {
      title: 'Lautan Awan Menutupi Kaldera Seperti Permadani',
      subtitle: 'Kerapatan samudera awan putih tebal yang memanjakan mata di pagi hari yang cerah.',
      locationTag: 'Spot Sunrise Kingkong Hill',
      highlightLabel: 'Samudera Di Atas Awan',
      description: 'Sensasi melayang di atas awan saat gumpalan kabut putih fajar menenggelamkan dasar kaldera 5.250 hektar.'
    },
    en: {
      title: 'Thick Sea of Clouds Blanketing the Caldera',
      subtitle: 'Dense white cloud carpet floating beneath peak viewpoints on crisp mornings.',
      locationTag: 'Kingkong Hill Sunrise Spot',
      highlightLabel: 'Ocean Above the Clouds',
      description: 'Feel like floating above the sky as thick dawn cloud blankets submerge the 5,250-hectare sand basin.'
    },
    zh: {
      title: '壮观云海如地毯般缭绕覆盖古火山口',
      subtitle: '清晨晴空下，厚重的白色云海如滔滔巨浪横卧于山谷之间。',
      locationTag: '金刚山日出观景台',
      highlightLabel: '云海之巅奇观',
      description: '漫步于海拔2650米的高空，俯瞰漫漫云海漫过5250公顷的火山基底。'
    }
  },
  'slide-3760fd9b': {
    id: {
      title: 'Pesona Siluet Kuda & Penunggang di Pagi Buta',
      subtitle: 'Nuansa puitis tradisi berkuda masyarakat lokal menembus dinginnya kabut fajar Bromo.',
      locationTag: 'Jalur Lautan Pasir Bromo',
      highlightLabel: 'Kuda Bromo Legendaris',
      description: 'Siluet penunggang kuda suku Tengger berselimut sarung rajut di tengah lautan pasir yang berkabut magis.'
    },
    en: {
      title: 'Poetic Silhouettes of Horses & Riders at Dawn',
      subtitle: 'Atmospheric local horse riding tradition piercing through crisp morning mist.',
      locationTag: 'Bromo Sand Sea Trail',
      highlightLabel: 'Legendary Bromo Horses',
      description: 'Timeless silhouette of Tengger horsemen wrapped in traditional woven blankets in the misty desert.'
    },
    zh: {
      title: '晨雾缭绕中腾格尔马夫与骏马的诗意剪影',
      subtitle: '马蹄声声穿透高寒晨雾，尽显印尼高山原住民古老传统的唯美意境。',
      locationTag: '布罗莫沙海马道',
      highlightLabel: '传奇火山骑马',
      description: '披着传统毛毯的腾格尔马夫策马穿行于如梦似幻的雾海黑沙荒野之中。'
    }
  },
  'slide-1791386575556': {
    id: {
      title: 'Eksotisme Segara Wedhi di Bawah Tebing Purba',
      subtitle: 'Relief pasir vulkanik berbisik yang luas membentang di dasar kaldera sakral Bromo Tengger.',
      locationTag: 'Segara Wedhi & Lautan Pasir',
      highlightLabel: 'Segara Wedhi Purba',
      description: 'Keheningan megah lautan pasir hitam vulkanis seluas ribuan hektar yang menjadi saksi bisu upacara adat Yadnya Kasada.'
    },
    en: {
      title: 'Exotic Whispering Sand Sea Beneath Ancient Cliffs',
      subtitle: 'Vast volcanic sand ripples stretching across the sacred Tengger caldera floor.',
      locationTag: 'Segara Wedhi Sand Plain',
      highlightLabel: 'Ancient Segara Wedhi',
      description: 'Serene black volcanic desert plains spanning thousands of hectares below towering mountain walls.'
    },
    zh: {
      title: '远古巨崖阴影下的神圣黑色火山沙海',
      subtitle: '风吹沙浪连绵起伏，绵延于布罗莫神圣火山群的腹地之中。',
      locationTag: 'Segara Wedhi 沙海平原',
      highlightLabel: '远古神圣沙海',
      description: '数千公顷黑色火山沙海沉寂肃穆，见证着数百年传承不绝的 Yadnya Kasada 祭祀盛典。'
    }
  },
  'slide-1791387293923': {
    id: {
      title: 'Harmoni Lembah Kaldera & Puncak Gunung Batok',
      subtitle: 'Komposisi alam sempurna antara dinding tebing kaldera, lembah hijau, dan kerucut Batok.',
      locationTag: 'Lembah Kaldera Tengger',
      highlightLabel: 'Harmoni Batok & Lembah',
      description: 'Kombinasi eksotis bukit hijau dan relief kaldera yang memukau dipandang dari berbagai sudut pandang terbaik Bromo.'
    },
    en: {
      title: 'Harmony of Caldera Valley & Mount Batok Peak',
      subtitle: 'Perfect landscape composition blending emerald valley slopes and corrugated volcanic cones.',
      locationTag: 'Tengger Caldera Valley',
      highlightLabel: 'Batok & Valley Harmony',
      description: 'Exotic blend of lush green ridges and corrugated volcanic peaks viewed from premier photography angles.'
    },
    zh: {
      title: '火山口盆地与巴托克火山锥的宏伟交响',
      subtitle: '翠绿的谷地山脊与纹理清晰的巴托克死火山交相辉映。',
      locationTag: '腾格尔火山口山谷',
      highlightLabel: '巴托克与山谷全景',
      description: '从多个精选摄影机位将绿意盎然的斜坡与震撼的高山地质纹理收揽眼底。'
    }
  },
  'slide-lightroom-panorama': {
    id: {
      title: 'Kemegahan Lanskap Fajar Bromo Beresolusi Tinggi',
      subtitle: 'Gradasi cahaya mentari terbit menyibak selimut kabut putih yang memeluk lereng-lereng vulkanik.',
      locationTag: 'Viewpoint Kingkong Hill & Penanjakan',
      highlightLabel: 'Panorama High-Definition',
      description: 'Pemandangan spektakuler kaldera Bromo secara menyeluruh dengan ketajaman warna alam fajar yang tiada duanya.'
    },
    en: {
      title: 'High-Definition Panoramic Vistas of Bromo Dawn',
      subtitle: 'Glorious dawn light parting thin white mists hugging volcanic mountain slopes.',
      locationTag: 'Kingkong Hill & Penanjakan Viewpoint',
      highlightLabel: 'High-Definition Panorama',
      description: 'Crisp, high-definition panoramic views of the entire caldera bathed in golden morning light.'
    },
    zh: {
      title: '高画质布罗莫晨光全景震撼画卷',
      subtitle: '初升的太阳将金光穿透白雾，轻轻抚过火山群峰的绵延山脊。',
      locationTag: '金刚山与佩南贾坎观景台',
      highlightLabel: '高清极致全景',
      description: '在顶尖视角饱览布罗莫火山口无与伦比的高清晨光色彩与立体层次感。'
    }
  },
  'slide-dbbd6620': {
    id: {
      title: 'Tebing Megah Widodaren & Savana Kaldera',
      subtitle: 'Pesona bentang dinding batuan purba Widodaren yang menjulang anggun di tepi padang rumput savana.',
      locationTag: 'Dinding Tebing Widodaren',
      highlightLabel: 'Widodaren Majestic Cliff',
      description: 'Dinding tebing purba kaldera dengan relief vertikal dramatis yang menjadi latar foto favorit para petualang sejati.'
    },
    en: {
      title: 'Majestic Widodaren Cliff & Caldera Savanna',
      subtitle: 'Imposing ancient rock wall rising gracefully beside green savanna grasslands.',
      locationTag: 'Widodaren Cliff Wall',
      highlightLabel: 'Widodaren Majestic Cliff',
      description: 'Dramatic ancient caldera wall carved with vertical ridges, providing iconic background views.'
    },
    zh: {
      title: '维多达伦雄伟悬崖与广袤火山口草原',
      subtitle: '巍峨屹立的古巨岩石壁耸立于一望无际的草原边缘。',
      locationTag: '维多达伦石壁',
      highlightLabel: '维多达伦巨崖',
      description: '拥有垂直纹理的远古火山口岩壁，是拍照打卡与硬派越野旅拍的绝佳图景。'
    }
  },
  'slide-crater-steam-plume': {
    id: {
      title: 'Gemuruh Kepulan Asap Dramatis Kawah Vulkanik',
      subtitle: 'Dinamika hembusan uap putih belerang dari jantung magma aktif kaldera Bromo.',
      locationTag: 'Bilib Kawah Aktif Bromo',
      highlightLabel: 'Kawah Vulkanik Aktif',
      description: 'Menyaksikan langsung tenaga alam bumi yang aktif dengan kepulan asap vulkanis membubung tinggi ke angkasa biru.'
    },
    en: {
      title: 'Dramatic Volcanic Steam Plumes from Active Crater',
      subtitle: 'Dynamic sulfur vapors rising continuously from the fiery heart of Mount Bromo.',
      locationTag: 'Active Bromo Crater Rim',
      highlightLabel: 'Active Volcanic Crater',
      description: 'Witness Earth’s living energy as sulfur steam billows into the alpine blue skies.'
    },
    zh: {
      title: '活火山口咆哮奔腾的壮观硫磺烟云',
      subtitle: '白色的水蒸气与硫磺烟云源源不断地从布罗莫地心深处涌出。',
      locationTag: '布罗莫活火山口边缘',
      highlightLabel: '活跃火山奇观',
      description: '亲眼见证地球深处的蓬勃生机，感受烟云直冲蔚蓝高空带来的震撼心灵。'
    }
  },
  'slide-horizon-9c2881fa': {
    id: {
      title: 'Cakrawala Lembayung Fajar di Atas Lautan Pasir',
      subtitle: 'Pergantian malam menuju fajar menyuguhkan garis cakrawala ungu keemasan yang menenangkan jiwa.',
      locationTag: 'Cakrawala Lautan Pasir Bromo',
      highlightLabel: 'Cakrawala Fajar Emas',
      description: 'Pesona tenang mentari pagi saat perlahan memancarkan sinar hangat pertama di atas pasir vulkanik kaldera.'
    },
    en: {
      title: 'Golden Sunset & Twilight Horizon Over Sand Sea',
      subtitle: 'Peaceful transition of light painting the caldera rim in purple and gold.',
      locationTag: 'Bromo Sand Sea Horizon',
      highlightLabel: 'Golden Twilight Horizon',
      description: 'Soothing twilight rays reflecting off dark volcanic sand plains in the quiet dawn hours.'
    },
    zh: {
      title: '火山沙海之上微光拂晓的流金地平线',
      subtitle: '黑夜与黎明交替之际，天空绽放出一道宁静绚丽的紫金霞光。',
      locationTag: '布罗莫沙海地平线',
      highlightLabel: '金色拂晓霞光',
      description: '当第一缕晨曦温暖地洒在黑色沙平原上，天地间充盈着拂去纷扰的安宁。'
    }
  },
  'slide-golden-sunrise-shrine': {
    id: {
      title: 'Seruni Point Berselimut Kabut Pagi Emas',
      subtitle: 'Keindahan panorama gardu pandang Seruni Point di tengah lautan pasir dengan latar sinar fajar keemasan.',
      locationTag: 'Seruni Point Tengger',
      highlightLabel: 'Panorama Seruni Point',
      description: 'Spot panorama terfavorit para wisatawan untuk menikmati keindahan fajar dan lanskap kaldera Bromo dari ketinggian.'
    },
    en: {
      title: 'Seruni Point Cloaked in Golden Morning Mist',
      subtitle: 'Exquisite vista from Seruni Point observatory bathed in radiant sunrise glow.',
      locationTag: 'Seruni Point Tengger',
      highlightLabel: 'Seruni Point Panorama',
      description: 'Premier architectural viewpoint for witnessing the sun rise over the sand sea and active crater.'
    },
    zh: {
      title: '晨曦金雾缭绕中的塞鲁尼神圣观景台',
      subtitle: '塞鲁尼观景台四柱建筑在金灿灿的初升晨光与晨雾中隐现。',
      locationTag: '腾格尔塞鲁尼观景台',
      highlightLabel: '塞鲁尼金光全景',
      description: '高空俯瞰布罗莫活火山口与茫茫沙海在拂晓曙光中渐渐苏醒的标志性绝景。'
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
