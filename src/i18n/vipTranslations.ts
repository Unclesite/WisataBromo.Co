import { SupportedLanguage } from './LanguageContext';

export interface LocalizedVipVideo {
  title: string;
  vipName: string;
  role: string;
  institution: string;
  highlight: string;
  description: string;
  badgeText: string;
  duration: string;
}

export const VIP_TRANSLATIONS: Record<string, Record<SupportedLanguage, LocalizedVipVideo>> = {
  'menaker-prof-yassierli': {
    id: {
      title: 'Pelayanan Kunjungan Kerja & Wisata Eksklusif Menteri Ketenagakerjaan RI',
      vipName: 'Prof. Yassierli, S.T., M.T., Ph.D.',
      role: 'Menteri Ketenagakerjaan Republik Indonesia',
      institution: 'Kementerian Ketenagakerjaan RI (Kemnaker)',
      highlight: 'Armada Jeep FJ40 VVIP & Protokol Pelayanan Pejabat Negara',
      description: 'WisataBromo.co dipercaya secara resmi mendampingi perjalanan rombongan Menteri Ketenagakerjaan RI, Prof. Yassierli, dalam agenda kunjungan kerja dan eksplorasi keindahan kaldera Bromo dengan standar kenyamanan VVIP.',
      badgeText: 'Menteri Ketenagakerjaan RI',
      duration: 'Dokumentasi Resmi'
    },
    en: {
      title: 'Official Working Visit & Exclusive Tour for Minister of Manpower of the Republic of Indonesia',
      vipName: 'Prof. Yassierli, S.T., M.T., Ph.D.',
      role: 'Minister of Manpower of the Republic of Indonesia',
      institution: 'Ministry of Manpower RI (Kemnaker)',
      highlight: 'VVIP Toyota FJ40 Fleet & State Dignitary Protocol',
      description: 'WisataBromo.co was officially entrusted to accompany the delegation of Indonesia’s Minister of Manpower, Prof. Yassierli, during an official state tour exploring the Bromo caldera with top-tier VVIP standards.',
      badgeText: 'Minister of Manpower RI',
      duration: 'Official Documentation'
    },
    zh: {
      title: '印度尼西亚共和国劳工部长工作考察与火山贵宾之旅',
      vipName: 'Prof. Yassierli, S.T., M.T., Ph.D.',
      role: '印度尼西亚共和国劳工部部长',
      institution: '印尼劳工部 (Kemnaker)',
      highlight: 'VVIP丰田FJ40车队与国家要员接待礼遇',
      description: 'WisataBromo.co 荣幸受托全程接待印尼劳工部长一行，以最高规格的VVIP车队服务陪同考察布罗莫火山自然保护区。',
      badgeText: '印尼劳工部部长',
      duration: '官方记录实拍'
    }
  },
  'kemenhut-ri': {
    id: {
      title: 'Ekspedisi & Kunjungan Resmi Kementerian Kehutanan Republik Indonesia',
      vipName: 'Delegasi Kementerian Kehutanan RI',
      role: 'Kementerian Kehutanan Republik Indonesia',
      institution: 'Kementerian Kehutanan RI (Kemenhut)',
      highlight: 'Dukungan Logistik & Armada Jeep Konservasi Kawasan TNBTS',
      description: 'Pelayanan armada Jeep 4x4 dan pemandu lokal berizin resmi TNBTS dalam mendampingi delegasi Kementerian Kehutanan RI melintasi kawasan konservasi, lautan pasir, dan savana Bromo.',
      badgeText: 'Kementerian Kehutanan RI',
      duration: 'Dokumentasi Resmi'
    },
    en: {
      title: 'Official Expedition & Visit of the Ministry of Forestry of the Republic of Indonesia',
      vipName: 'Delegation of Ministry of Forestry RI',
      role: 'Ministry of Forestry of the Republic of Indonesia',
      institution: 'Ministry of Forestry RI (Kemenhut)',
      highlight: 'Logistical Support & Conservation-Certified 4x4 Jeep Fleet',
      description: 'Dedicated 4x4 jeep fleet and licensed national park guides accompanying the Ministry of Forestry delegation across the national park conservation zones and savanna.',
      badgeText: 'Ministry of Forestry RI',
      duration: 'Official Documentation'
    },
    zh: {
      title: '印度尼西亚共和国林业部官方考察与考察车队',
      vipName: '印尼林业部代表团',
      role: '印度尼西亚共和国林业部',
      institution: '印尼林业部 (Kemenhut)',
      highlight: '国家公园环保特许越野车队与全方位地勤保障',
      description: '由拥有国家公园特许资质的专业车队及持证向导陪同印尼林业部代表团考察沙海、保护区与特莱特比斯草原。',
      badgeText: '印尼林业部代表团',
      duration: '官方记录实拍'
    }
  }
};
