import { SupportedLanguage } from './LanguageContext';

export interface LocalizedTipsContent {
  threeLayerTitle: string;
  l1Title: string;
  l1Desc: string;
  l2Title: string;
  l2Desc: string;
  l3Title: string;
  l3Desc: string;

  accessoriesTitle: string;
  accMaskTitle: string;
  accMaskDesc: string;
  accBeanieTitle: string;
  accBeanieDesc: string;
  accGlovesTitle: string;
  accGlovesDesc: string;
  accGlassesTitle: string;
  accGlassesDesc: string;

  gearTitle: string;
  gearShoesTitle: string;
  gearShoesDesc: string;
  gearPhoneTitle: string;
  gearPhoneDesc: string;
  gearCashTitle: string;
  gearCashDesc: string;

  healthAltTitle: string;
  healthAltDesc: string;
  healthAltPoint1: string;
  healthAltPoint2: string;

  healthSpecialTitle: string;
  healthSpecialDesc: string;
  healthSpecialPoint1: string;
  healthSpecialPoint2: string;

  ethicsTitle: string;
  ethicsSubtitle: string;
  ethics1Title: string;
  ethics1Desc: string;
  ethics2Title: string;
  ethics2Desc: string;
  ethics3Title: string;
  ethics3Desc: string;
  ethics4Title: string;
  ethics4Desc: string;
}

export const TIPS_CONTENT: Record<SupportedLanguage, LocalizedTipsContent> = {
  id: {
    threeLayerTitle: '3-Layer Clothing System (Suhu 2°C - 8°C)',
    l1Title: '1. Baselayer (Lapisan Dasar):',
    l1Desc: 'Pakaian dalam thermal (Long John) atau kaos sintetis cepat kering. Hindari kaos katun tebal basah keringat.',
    l2Title: '2. Midlayer (Penyekap Panas):',
    l2Desc: 'Sweater bahan fleece atau rajut wol tebal untuk mempertahankan suhu inti tubuh.',
    l3Title: '3. Outerlayer (Penahan Angin):',
    l3Desc: 'Jaket windproof, parasut tebal, atau Down Jacket (bulu angsa) untuk memblokir terpaan angin gunung.',

    accessoriesTitle: 'Aksesori & Perlindungan Debu Pasir',
    accMaskTitle: 'Masker Dobel:',
    accMaskDesc: 'Sangat vital saat berada di Lautan Pasir dan Kawah agar terhindar dari debu vulkanik dan aroma belerang.',
    accBeanieTitle: 'Kupluk Beanie & Syal:',
    accBeanieDesc: 'Menutup telinga dan leher agar tidak terkena hipotermia ringan atau masuk angin fajar.',
    accGlovesTitle: 'Sarung Tangan Polar:',
    accGlovesDesc: 'Jari tangan adalah bagian paling cepat kaku terkena udara beku saat menunggu sunrise jam 04.00 pagi.',
    accGlassesTitle: 'Kacamata Hitam (Sunglasses):',
    accGlassesDesc: 'Melindungi mata dari pantulan sinar matahari di pasir putih dan butiran debu terbang.',

    gearTitle: 'Sepatu, Gadget & Dana Tunai',
    gearShoesTitle: 'Sepatu Sneakers / Hiking Grip Karet:',
    gearShoesDesc: 'Gunakan sepatu sol karet anti-selip untuk menaiki 250 anak tangga kawah. Jangan pakai heels atau sandal jepit.',
    gearPhoneTitle: 'Simpan Baterai HP di Saku Dalam:',
    gearPhoneDesc: 'Suhu dingin ekstrem bisa menguras persentase baterai smartphone dalam hitungan menit. Selalu bawa powerbank.',
    gearCashTitle: 'Uang Tunai Pecahan Kecil:',
    gearCashDesc: 'Di puncak tidak ada mesin ATM. Siapkan uang cash Rp 10rb - Rp 50rb untuk toilet, kopi, dan sewa kuda kawah.',

    healthAltTitle: 'Aklimatisasi Ketinggian 2.300 - 2.770 mdpl',
    healthAltDesc: 'Kandungan oksigen di puncak Bromo sedikit lebih tipis daripada dataran rendah. Jangan berlari-lari tergesa saat menaiki tangga view point agar nafas tidak ngos-ngosan.',
    healthAltPoint1: 'Cukupi asupan air putih hangat sebelum berangkat trip.',
    healthAltPoint2: 'Bawa minyak kayu putih, inhaler, dan obat pusing pribadi.',

    healthSpecialTitle: 'Penderita Asma, Jantung & Lansia',
    healthSpecialDesc: 'Bagi peserta lansia atau memiliki riwayat asma yang dipicu udara dingin, sangat disarankan menyewa kuda untuk menuju Kawah Bromo daripada memaksakan jalan kaki 1.5 km di pasir gembur.',
    healthSpecialPoint1: 'Jarak dari parkiran jeep ke tangga kawah dapat ditempuh naik kuda seharga Rp 150rb - Rp 200rb PP.',
    healthSpecialPoint2: 'Driver kami siap mendampingi dan memantau kondisi seluruh keluarga.',

    ethicsTitle: 'Etika Berwisata di Tanah Sakral Suku Tengger',
    ethicsSubtitle: 'Kawasan Bromo dan Pura Luhur Poten adalah tempat ibadah dan tanah suci leluhur masyarakat Hindu Tengger. Marilah kita menjaga kesopanan dan kelestarian alam:',
    ethics1Title: '1. Dilarang Membuang Sampah Sembarangan',
    ethics1Desc: 'Bawa kembali sampah plastik, puntung rokok, atau botol air Anda ke mobil Jeep. Kaldera adalah kawasan konservasi nasional TNBTS.',
    ethics2Title: '2. Menghormati Kawasan Pura Luhur Poten',
    ethics2Desc: 'Tidak diperkenankan memanjat pagar pura atau memasuki area suci saat sedang berlangsung prosesi persembahyangan warga Tengger.',
    ethics3Title: '3. Sopan Santun Terhadap Sesaji Adat',
    ethics3Desc: 'Jangan melangkahi, menendang, atau mengambil sesaji (canang sari / sesajen) yang diletakkan warga di lereng atau pintu masuk.',
    ethics4Title: '4. Menjaga Tutur Kata & Sikap',
    ethics4Desc: 'Masyarakat Tengger menjunjung tinggi kedamaian hati (Bawera). Hindari berkata kotor, berteriak tanpa sopan santun, atau bertindak merusak alam.'
  },
  en: {
    threeLayerTitle: '3-Layer Clothing System (2°C - 8°C Temperatures)',
    l1Title: '1. Baselayer (Next to Skin):',
    l1Desc: 'Thermal underwear (Long Johns) or quick-drying synthetic shirts. Avoid heavy cotton t-shirts that hold sweat.',
    l2Title: '2. Midlayer (Thermal Insulation):',
    l2Desc: 'Polar fleece sweater or thick wool knitwear to lock in your body’s core heat.',
    l3Title: '3. Outerlayer (Wind & Weather Shield):',
    l3Desc: 'Windproof jacket, thick parka, or down puffer jacket to deflect piercing alpine mountain gusts.',

    accessoriesTitle: 'Essential Accessories & Sand Shield',
    accMaskTitle: 'Double Face Mask:',
    accMaskDesc: 'Crucial across the Sea of Sand and crater to filter fine volcanic ash and sulfur fumes.',
    accBeanieTitle: 'Beanie Cap & Scarf:',
    accBeanieDesc: 'Keep your ears and neck insulated to prevent morning chills or mild hypothermia.',
    accGlovesTitle: 'Thermal Gloves:',
    accGlovesDesc: 'Fingers stiffen rapidly in freezing dawn breezes while waiting for the 04:00 AM sunrise.',
    accGlassesTitle: 'UV Sunglasses:',
    accGlassesDesc: 'Shield your eyes from intense sunrise glare on light sand dunes and flying dust.',

    gearTitle: 'Footwear, Electronics & Cash',
    gearShoesTitle: 'Rubber-Grip Sneakers or Hiking Shoes:',
    gearShoesDesc: 'Wear anti-slip rubber-soled footwear for climbing the 250 crater steps. Do not wear heels or flip-flops.',
    gearPhoneTitle: 'Keep Smartphone in Inner Pockets:',
    gearPhoneDesc: 'Extreme cold drains lithium smartphone batteries in minutes. Always carry a portable powerbank.',
    gearCashTitle: 'Small Cash Bills:',
    gearCashDesc: 'There are no ATMs on the mountain. Prepare small cash bills for restrooms, hot tea/coffee, and horse rentals.',

    healthAltTitle: 'Altitude Acclimatization (2,300 - 2,770 masl)',
    healthAltDesc: 'Atmospheric oxygen at Bromo viewpoints is noticeably thinner than at sea level. Pace your steps steadily rather than rushing up stairs.',
    healthAltPoint1: 'Drink adequate warm water before departing on midnight drives.',
    healthAltPoint2: 'Carry eucalyptus oil balm, inhalers, and personal motion-sickness remedies.',

    healthSpecialTitle: 'Asthma, Heart Conditions & Senior Travelers',
    healthSpecialDesc: 'For elderly companions or guests with cold-induced asthma, hiring a local horse across the 1.5 km loose sand plain to the crater stairs is strongly recommended.',
    healthSpecialPoint1: 'Horse return rides from jeep parking to the crater stairs are available for ~IDR 150k - 200k round-trip.',
    healthSpecialPoint2: 'Our private drivers actively assist and ensure comfort for every family member.',

    ethicsTitle: 'Cultural Etiquette in Sacred Tengger Ancestral Lands',
    ethicsSubtitle: 'Mount Bromo and Pura Luhur Poten are deeply revered places of worship for Hindu Tengger people. Please observe reverent conduct:',
    ethics1Title: '1. Strict Zero-Littering Policy',
    ethics1Desc: 'Pack out all plastic wrappers, cigarette butts, and bottles back to your jeep. The caldera is a protected national park.',
    ethics2Title: '2. Respect Pura Luhur Poten Sanctuary',
    ethics2Desc: 'Do not climb temple walls or enter inner sanctums during sacred Tengger prayer and Yadnya Kasada ceremonies.',
    ethics3Title: '3. Reverence for Traditional Offerings',
    ethics3Desc: 'Never step over, kick, or disturb flower offerings (sesajen) placed by locals along pathways or crater rims.',
    ethics4Title: '4. Mindful Speech & Peaceful Demeanor',
    ethics4Desc: 'Tengger highland culture cherishes peace of heart (Bawera). Avoid foul language, aggressive shouting, or vandalism.'
  },
  zh: {
    threeLayerTitle: '三层穿衣法则 (应对2°C至8°C高山气温)',
    l1Title: '1. 基础内层 (透气排汗):',
    l1Desc: '保暖排汗内衣 (秋衣裤/Long John) 或速干长袖。切忌穿吸汗不易干的厚纯棉衣物。',
    l2Title: '2. 中间保暖层 (锁温蓄热):',
    l2Desc: '抓绒衣 (Fleece) 或高密度厚羊毛衫，锁住身体核心体温。',
    l3Title: '3. 最外防风层 (抵御山风):',
    l3Desc: '防风冲锋衣、防雨羽绒服 (Down Jacket) 或防寒大衣，有效阻挡刺骨高山冷风。',

    accessoriesTitle: '必备防寒防尘配件',
    accMaskTitle: '双层防尘口罩:',
    accMaskDesc: '在黑沙海与火山口极其必要，能有效阻隔细微火山灰尘与浓烈硫磺气味。',
    accBeanieTitle: '毛线保暖帽与围巾:',
    accBeanieDesc: '严密护住耳朵与颈部，避免清晨受寒或因剧烈温差导致偏头痛。',
    accGlovesTitle: '保暖抓绒手套:',
    accGlovesDesc: '清晨04:00等候日出时手指极易冻僵，佩戴防风手套便于握持相机与手机拍照。',
    accGlassesTitle: '防紫外线墨镜:',
    accGlassesDesc: '有效抵御高山强紫外线、日出反光以及飞扬的细微黑沙入眼。',

    gearTitle: '登山防滑鞋、电子设备与零钱',
    gearShoesTitle: '防滑抓地运动鞋 / 登山鞋:',
    gearShoesDesc: '攀登250级水泥台阶必须穿着橡胶深齿防滑鞋。切勿穿高跟鞋或人字拖。',
    gearPhoneTitle: '手机贴身放于内袋:',
    gearPhoneDesc: '极低温会导致锂电池瞬间掉电关机，务必将手机贴近体温并随身携带充电宝。',
    gearCashTitle: '准备小额印尼盾现金:',
    gearCashDesc: '山上无ATM取款机。请提前准备小额现金用于如厕、热饮热咖啡及租骑当地小马。',

    healthAltTitle: '海拔适应与高原反应预防 (2300 - 2770米)',
    healthAltDesc: '火山观景台氧气略稀薄于平原。登上观景台阶梯时请保持平稳匀速，避免快速奔跑导致气喘心慌。',
    healthAltPoint1: '午夜出发前请适量饮用温开水，保持身体充足水分。',
    healthAltPoint2: '随身携带清凉油、白树油 (Minyak Kayu Putih) 及个人常用胃药头痛药。',

    healthSpecialTitle: '老年人、儿童及心肺哮喘体质特别关照',
    healthSpecialDesc: '如同行有长辈或遇冷易发哮喘的游客，前往火山口1.5公里松软沙地强烈建议骑乘当地向导小马，免除长途徒步体力透支。',
    healthSpecialPoint1: '吉普车停车场至火山口台阶往返骑马参考费用约15万至20万印尼盾。',
    healthSpecialPoint2: '我们的专属向导与司机会全程关照长辈，提供安心陪护。',

    ethicsTitle: '尊崇腾格尔原住印度教圣地民俗与文明礼仪',
    ethicsSubtitle: '布罗莫火山及沙海中的波腾神庙是腾格尔族世代祭祀的圣土，请共同爱护文明环境：',
    ethics1Title: '1. 严格实行垃圾随身带走',
    ethics1Desc: '请将塑料包装、纸巾、烟蒂及矿泉水瓶带回吉普车垃圾袋内，保护国家公园自然生态。',
    ethics2Title: '2. 尊重波腾神庙圣域',
    ethics2Desc: '遇当地原住民举行宗教祈福仪式时，请保持安静肃穆，切勿攀爬神庙围栏或擅闯内殿。',
    ethics3Title: '3. 切勿踩踏触碰祭品',
    ethics3Desc: '路旁山石边摆放的传统花卉祈福祭品 (Sesajen)，请勿随意跨越、踢踏或挪动。',
    ethics4Title: '4. 举止温和言语文明',
    ethics4Desc: '腾格尔高山居民崇尚和平宁静心境 (Bawera)，请勿大声喧哗、随意涂鸦破坏岩壁。'
  }
};
