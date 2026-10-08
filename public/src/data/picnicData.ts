import { PicnicPackage, PicnicLocation, PicnicAddon } from '../types/picnic';
import imgPicnicPaket1 from '../assets/images/bromo_picnic_paket1_20261008.png';
import imgPicnicPaket2 from '../assets/images/20261008_023909_0001.png';
import imgPicnicSavana from '../assets/images/bromo_picnic_experience_aesthetic.png';
import imgGoldenHour from '../assets/images/bromo_golden_hour_1790774487968.jpg';
import imgWidodaren from '../assets/images/bromo_widodaren_cliff_1790774506404.jpg';
import imgSeaClouds from '../assets/images/bromo_sea_clouds_1790773968204.jpg';

export const PICNIC_MENU_ITEMS = {
  snack: [
    'Salad Buah',
    'Roti Bakar',
    'Pisang Goreng',
    'Dimsum',
    'Kentang Goreng',
    'Tempe Mendoan',
    'Lumpia',
    'Burger',
    'Sandwich',
    'Popmie Goreng',
    'Popmie Kuah'
  ],
  makanan: [
    'Nasi Rawon',
    'Nasi Soto',
    'Nasi Goreng',
    'Nasi Rames',
    'Sate Ayam'
  ],
  dessert: [
    'Buah Potong',
    'Brownies'
  ],
  minuman: [
    'Kopi',
    'Jahe',
    'Susu',
    'Lemon Tea',
    'Juice Jambu',
    'Juice Jeruk'
  ],
  free: [
    'Teh',
    'Mineral'
  ]
};

export const PICNIC_PACKAGES: PicnicPackage[] = [
  {
    id: 'paket-1',
    name: 'Paket 1',
    pricePerPax: 85000,
    minPax: 4,
    type: 'selectable',
    shortDescription: 'Pilihan sarapan santai dengan kombinasi 2 jenis snack gurih & minuman hangat favorit.',
    highlights: ['Snack 1', 'Snack 2', 'Minuman', 'Free Teh & Mineral'],
    imageUrl: imgPicnicPaket1,
    freeItems: ['Teh', 'Mineral'],
    active: true,
    selectionGroups: [
      {
        id: 'snack-1',
        title: 'Snack 1',
        instruction: 'Pilih 1 jenis snack utama',
        category: 'snack',
        minSelect: 1,
        maxSelect: 1,
        options: [
          'Burger',
          'Sandwich',
          'Popmie Goreng',
          'Popmie Kuah',
          'Salad Buah',
          'Roti Bakar'
        ]
      },
      {
        id: 'snack-2',
        title: 'Snack 2',
        instruction: 'Pilih 1 jenis camilan pelengkap',
        category: 'snack',
        minSelect: 1,
        maxSelect: 1,
        options: [
          'Pisang Goreng',
          'Dimsum',
          'Kentang Goreng',
          'Tempe Mendoan',
          'Lumpia'
        ]
      },
      {
        id: 'minuman',
        title: 'Minuman',
        instruction: 'Pilih 1 jenis minuman',
        category: 'minuman',
        minSelect: 1,
        maxSelect: 1,
        options: [
          'Kopi',
          'Jahe',
          'Susu',
          'Lemon Tea',
          'Juice Jambu',
          'Juice Jeruk'
        ]
      }
    ]
  },
  {
    id: 'paket-2',
    name: 'Paket 2',
    pricePerPax: 110000,
    minPax: 4,
    type: 'selectable',
    shortDescription: 'Santap siang lengkap dengan hidangan utama khas Jawa Timur, snack hangat, dan minuman segar.',
    highlights: ['Snack', 'Makanan Utama', 'Minuman', 'Free Teh & Mineral'],
    imageUrl: imgPicnicPaket2,
    freeItems: ['Teh', 'Mineral'],
    active: true,
    selectionGroups: [
      {
        id: 'snack',
        title: 'Snack',
        instruction: 'Pilih 1 jenis snack pembuka',
        category: 'snack',
        minSelect: 1,
        maxSelect: 1,
        options: [
          'Salad Buah',
          'Roti Bakar',
          'Pisang Goreng',
          'Dimsum',
          'Kentang Goreng',
          'Tempe Mendoan',
          'Lumpia'
        ]
      },
      {
        id: 'makanan',
        title: 'Makanan Utama',
        instruction: 'Pilih 1 jenis makanan utama',
        category: 'makanan',
        minSelect: 1,
        maxSelect: 1,
        options: [
          'Nasi Rawon',
          'Nasi Soto',
          'Nasi Goreng',
          'Nasi Rames',
          'Sate Ayam'
        ]
      },
      {
        id: 'minuman',
        title: 'Minuman',
        instruction: 'Pilih 1 jenis minuman',
        category: 'minuman',
        minSelect: 1,
        maxSelect: 1,
        options: [
          'Kopi',
          'Jahe',
          'Susu',
          'Lemon Tea',
          'Juice Jambu',
          'Juice Jeruk'
        ]
      }
    ]
  },
  {
    id: 'paket-3',
    name: 'Paket 3',
    pricePerPax: 120000,
    minPax: 4,
    type: 'selectable',
    badge: 'BEST VALUE',
    shortDescription: 'Pengalaman piknik paling favorit & komplit: hidangan utama, snack, dessert manis, dan aneka minuman.',
    highlights: ['Snack', 'Makanan Utama', 'Dessert', 'Minuman', 'Free Teh & Mineral'],
    imageUrl: imgWidodaren,
    freeItems: ['Teh', 'Mineral'],
    active: true,
    selectionGroups: [
      {
        id: 'snack',
        title: 'Snack',
        instruction: 'Pilih 1 jenis snack',
        category: 'snack',
        minSelect: 1,
        maxSelect: 1,
        options: [
          'Salad Buah',
          'Roti Bakar',
          'Pisang Goreng',
          'Dimsum',
          'Kentang Goreng',
          'Tempe Mendoan',
          'Lumpia'
        ]
      },
      {
        id: 'makanan',
        title: 'Makanan Utama',
        instruction: 'Pilih 1 jenis hidangan utama',
        category: 'makanan',
        minSelect: 1,
        maxSelect: 1,
        options: [
          'Nasi Rawon',
          'Nasi Soto',
          'Nasi Goreng',
          'Nasi Rames',
          'Sate Ayam'
        ]
      },
      {
        id: 'dessert',
        title: 'Dessert',
        instruction: 'Pilih 1 hidangan penutup',
        category: 'dessert',
        minSelect: 1,
        maxSelect: 1,
        options: [
          'Buah Potong',
          'Brownies'
        ]
      },
      {
        id: 'minuman',
        title: 'Minuman',
        instruction: 'Pilih 1 jenis minuman',
        category: 'minuman',
        minSelect: 1,
        maxSelect: 1,
        options: [
          'Kopi',
          'Jahe',
          'Susu',
          'Lemon Tea',
          'Juice Jambu',
          'Juice Jeruk'
        ]
      }
    ]
  },
  {
    id: 'paket-4',
    name: 'Paket 4',
    pricePerPax: 95000,
    minPax: 4,
    type: 'selectable',
    shortDescription: 'Pilihan praktis & mengenyangkan: hidangan utama hangat khas nusantara dengan minuman pilihan.',
    highlights: ['Makanan Utama', 'Minuman', 'Free Teh & Mineral'],
    imageUrl: imgSeaClouds,
    freeItems: ['Teh', 'Mineral'],
    active: true,
    selectionGroups: [
      {
        id: 'makanan',
        title: 'Makanan Utama',
        instruction: 'Pilih 1 jenis makanan utama',
        category: 'makanan',
        minSelect: 1,
        maxSelect: 1,
        options: [
          'Nasi Rawon',
          'Nasi Soto',
          'Nasi Goreng',
          'Nasi Rames',
          'Sate Ayam'
        ]
      },
      {
        id: 'minuman',
        title: 'Minuman',
        instruction: 'Pilih 1 jenis minuman',
        category: 'minuman',
        minSelect: 1,
        maxSelect: 1,
        options: [
          'Kopi',
          'Jahe',
          'Susu',
          'Lemon Tea',
          'Juice Jambu',
          'Juice Jeruk'
        ]
      }
    ]
  },
  {
    id: 'paket-bbq',
    name: 'Paket BBQ',
    pricePerPax: 120000,
    minPax: 4,
    type: 'fixed',
    shortDescription: 'Sensasi memanggang daging premium hangat di udara sejuk Bromo. Daging slice gurih marinasi siap santap.',
    highlights: ['Beef Slice 125gr', 'Chicken Slice 125gr', 'Grill Set & Sosis', 'Nasi & Kentang', 'Pilihan Minuman Bebas'],
    imageUrl: imgGoldenHour,
    freeItems: ['Peralatan Grill BBQ', 'Teh', 'Mineral'],
    active: true,
    selectionGroups: [
      {
        id: 'minuman',
        title: 'Pilihan Minuman',
        instruction: 'Pilih varian minuman hangat / jus segar pendamping BBQ sesuai jumlah pax',
        category: 'minuman',
        minSelect: 1,
        maxSelect: 1,
        options: [
          'Kopi',
          'Jahe',
          'Susu',
          'Lemon Tea',
          'Juice Jambu',
          'Juice Jeruk'
        ]
      }
    ],
    includedSections: [
      {
        sectionTitle: 'Yang Kamu Dapatkan (BBQ Lengkap)',
        items: [
          'Beef Slice 125gr',
          'Chicken Slice 125gr',
          'Sosis',
          'Bawang Bombay',
          'Bumbu Marinasi Khas',
          'Margarin',
          'Selada Segar',
          'Nasi Putih',
          'Kentang Goreng'
        ]
      }
    ]
  },
  {
    id: 'paket-bbq-suki',
    name: 'BBQ + Suki Shabu',
    pricePerPax: 160000,
    minPax: 4,
    type: 'fixed',
    badge: 'POPULAR',
    shortDescription: 'Kombinasi memanggang daging gurih sekaligus menikmati kuah hangat Tomyum/Kaldu menyegarkan di Bromo.',
    highlights: ['Grill BBQ Lengkap', 'Suki Steamboat Shabu', 'Kuah Tomyum & Kaldu', 'Pilihan Minuman Bebas'],
    imageUrl: imgWidodaren,
    freeItems: ['Peralatan Grill & Hotpot', 'Teh', 'Mineral'],
    active: true,
    selectionGroups: [
      {
        id: 'minuman',
        title: 'Pilihan Minuman',
        instruction: 'Pilih varian minuman hangat / jus segar sesuai jumlah pax',
        category: 'minuman',
        minSelect: 1,
        maxSelect: 1,
        options: [
          'Kopi',
          'Jahe',
          'Susu',
          'Lemon Tea',
          'Juice Jambu',
          'Juice Jeruk'
        ]
      }
    ],
    includedSections: [
      {
        sectionTitle: 'Section BBQ (Fixed Termasuk)',
        items: [
          'Beef Slice 125gr',
          'Chicken Slice 125gr',
          'Sosis',
          'Bawang Bombay',
          'Bumbu Marinasi',
          'Margarin',
          'Selada',
          'Nasi Putih',
          'Kentang Goreng'
        ]
      },
      {
        sectionTitle: 'Section Suki Shabu (Fixed Termasuk)',
        items: [
          'Aneka Steamboat',
          'Jagung Manis',
          'Sayuran Segar',
          'Jamur Enoki',
          'Kuah Tomyum Gurih',
          'Kuah Kaldu Gurih'
        ]
      }
    ]
  },
  {
    id: 'paket-ngemie',
    name: 'Paket Ngemie',
    pricePerPax: 75000,
    minPax: 4,
    type: 'fixed',
    shortDescription: 'Sensasi makan Indomie legendaris di dinginnya kaldera Bromo dilengkapi ayam goreng, telur mata sapi, & nasi.',
    highlights: ['Indomie Goreng & Kuah', 'Ayam Goreng & Telur', 'Nasi & Sayuran', 'Minuman Hangat'],
    imageUrl: imgPicnicSavana,
    freeItems: ['Teh', 'Mineral'],
    active: true,
    selectionGroups: [
      {
        id: 'minuman',
        title: 'Pilihan Minuman',
        instruction: 'Pilih minuman favorit pendamping Ngemie sesuai jumlah pax',
        category: 'minuman',
        minSelect: 1,
        maxSelect: 1,
        options: [
          'Kopi',
          'Jahe',
          'Susu',
          'Lemon Tea',
          'Juice Jambu',
          'Juice Jeruk'
        ]
      }
    ],
    includedSections: [
      {
        sectionTitle: 'Menu Ngemie Termasuk (Fixed)',
        items: [
          'Mie Indomie Goreng',
          'Mie Indomie Kuah',
          'Sayuran Segar',
          'Cabe Rawit Utuh',
          'Nasi Putih',
          'Ayam Goreng Gurih',
          'Telur Mata Sapi'
        ]
      }
    ]
  },
  {
    id: 'paket-ultimate',
    name: 'Paket Ultimate',
    pricePerPax: 200000,
    minPax: 4,
    type: 'fixed',
    badge: 'LUXURY VIP',
    shortDescription: 'Pesta hidangan piknik termewah: snack lengkap, hidangan utama, grill BBQ, dessert manis, dan minuman komplit.',
    highlights: ['6 Jenis Snack', '4 Hidangan Utama + BBQ', 'Dessert Brownies & Buah', 'Aneka Minuman Bebas'],
    imageUrl: imgSeaClouds,
    freeItems: ['Peralatan Luxury Dining', 'Teh', 'Mineral'],
    active: true,
    selectionGroups: [
      {
        id: 'minuman',
        title: 'Pilihan Minuman',
        instruction: 'Pilih minuman favorit tamu undangan sesuai jumlah pax',
        category: 'minuman',
        minSelect: 1,
        maxSelect: 1,
        options: [
          'Kopi',
          'Jahe',
          'Susu',
          'Lemon Tea',
          'Juice Jambu',
          'Juice Jeruk'
        ]
      }
    ],
    includedSections: [
      {
        sectionTitle: 'Section Snack (6 Macam Fixed)',
        items: [
          'Burger',
          'Popmie Kuah',
          'Pisang Goreng',
          'Dimsum',
          'Tempe Mendoan',
          'Lumpia'
        ]
      },
      {
        sectionTitle: 'Section Makanan Utama (4 Macam + BBQ Fixed)',
        items: [
          'Nasi Rawon Daging',
          'Nasi Goreng Spesial',
          'Sate Ayam Madura',
          'Grill BBQ Premium'
        ]
      },
      {
        sectionTitle: 'Section Dessert (Fixed)',
        items: [
          'Buah Potong Segar',
          'Brownies Cokelat'
        ]
      }
    ]
  }
];

export const PICNIC_LOCATIONS: PicnicLocation[] = [
  {
    id: 'view-bromo',
    name: 'View Bromo',
    elevation: '2.329 mdpl',
    transportFee: 150000,
    active: true,
    description: 'Pemandangan panorama terbuka dengan latar kaldera Bromo, Gunung Batok, dan langit fajar yang luas.',
    imageUrl: imgGoldenHour
  },
  {
    id: 'widodaren',
    name: 'Widodaren',
    elevation: '2.200 mdpl',
    transportFee: 200000,
    active: true,
    description: 'Berada tepat di bawah tebing karst Widodaren yang megah, artistik, privat, dan terlindung dari angin kencang.',
    imageUrl: imgWidodaren
  },
  {
    id: 'savana',
    name: 'Savana',
    elevation: '2.150 mdpl',
    transportFee: 250000,
    active: false,
    unavailableLabel: 'Sementara Tidak Tersedia',
    description: 'Hamparan perbukitan hijau Teletubbies yang asri dan sejuk (Saat ini dalam masa pemulihan ekosistem rumput hijau).',
    imageUrl: imgPicnicSavana
  }
];

export const PICNIC_ADDONS: PicnicAddon[] = [
  {
    id: 'tenda-besar',
    name: 'Tenda Besar (Canvas Bell Tent)',
    category: 'tent',
    price: 200000,
    description: 'Tenda canvas bohemian estetik untuk berteduh dari angin & tempat beristirahat yang nyaman.'
  },
  {
    id: 'birthday-balloon-only',
    name: 'Birthday Decor: Balon Dekorasi',
    category: 'birthday',
    price: 100000,
    description: 'Dekorasi balon warna-warni cantik untuk perayaan ulang tahun atau anniversary.',
    requiresDetails: true
  },
  {
    id: 'birthday-balloon-letter',
    name: 'Birthday Decor: Balon + Balon Huruf',
    category: 'birthday',
    price: 200000,
    description: 'Balon dekorasi lengkap dengan balon foil custom nama / ucapan spesial.',
    requiresDetails: true
  },
  {
    id: 'birthday-full-package',
    name: 'Birthday Decor: Balon + Balon Huruf + Kue Tart + Lilin',
    category: 'birthday',
    price: 350000,
    description: 'Paket perayaan ulang tahun komplit siap tiup lilin di kaldera Bromo.',
    requiresDetails: true
  }
];
