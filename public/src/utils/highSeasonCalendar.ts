/**
 * Kalender Resmi Pemetaan Periode High Season & Peak Season Wisata Bromo TNBTS
 * Meliputi: Idul Fitri, Nataru, Idul Adha, Libur Sekolah Pertengahan Tahun, & Libur Nasional
 */

export interface HighSeasonPeriod {
  name: string;
  startDate: string; // YYYY-MM-DD
  endDate: string;   // YYYY-MM-DD
  description: string;
}

export const HIGH_SEASON_PERIODS: HighSeasonPeriod[] = [
  // 2025
  {
    name: 'Libur Hari Raya Idul Fitri 1446 H',
    startDate: '2025-03-24',
    endDate: '2025-04-08',
    description: 'Puncak arus mudik dan liburan lebaran Idul Fitri',
  },
  {
    name: 'Libur Hari Raya Idul Adha 1446 H',
    startDate: '2025-06-04',
    endDate: '2025-06-10',
    description: 'Periode libur Idul Adha & long weekend',
  },
  {
    name: 'Libur Sekolah Tengah Tahun 2025',
    startDate: '2025-06-20',
    endDate: '2025-07-15',
    description: 'Liburan kenaikan kelas & libur semester pertengahan tahun',
  },
  {
    name: 'Libur Kemerdekaan RI 2025',
    startDate: '2025-08-15',
    endDate: '2025-08-18',
    description: 'Pekan peringatan Hari Kemerdekaan RI',
  },
  {
    name: 'Libur Natal & Tahun Baru 2025/2026',
    startDate: '2025-12-18',
    endDate: '2026-01-05',
    description: 'Peak season libur akhir tahun & pergantian tahun',
  },

  // 2026
  {
    name: 'Libur Tahun Baru Imlek 2026',
    startDate: '2026-02-14',
    endDate: '2026-02-18',
    description: 'Long weekend Tahun Baru Imlek 2577',
  },
  {
    name: 'Libur Hari Raya Idul Fitri 1447 H',
    startDate: '2026-03-15',
    endDate: '2026-04-05',
    description: 'Peak season lebaran & cuti bersama Idul Fitri 2026',
  },
  {
    name: 'Libur Hari Raya Idul Adha 1447 H',
    startDate: '2026-05-23',
    endDate: '2026-06-02',
    description: 'Periode libur Idul Adha & cuti bersama 2026',
  },
  {
    name: 'Libur Sekolah Tengah Tahun 2026',
    startDate: '2026-06-20',
    endDate: '2026-07-15',
    description: 'Puncak liburan sekolah pertengahan tahun / semester genap',
  },
  {
    name: 'Libur Kemerdekaan RI 2026',
    startDate: '2026-08-14',
    endDate: '2026-08-18',
    description: 'Long weekend HUT RI ke-81',
  },
  {
    name: 'Libur Natal & Tahun Baru 2026/2027',
    startDate: '2026-12-18',
    endDate: '2027-01-05',
    description: 'Puncak musim liburan Natal & Tahun Baru (Nataru)',
  },

  // 2027
  {
    name: 'Libur Hari Raya Idul Fitri 1448 H',
    startDate: '2027-03-05',
    endDate: '2027-03-25',
    description: 'Periode mudik dan liburan lebaran Idul Fitri 2027',
  },
  {
    name: 'Libur Hari Raya Idul Adha 1448 H',
    startDate: '2027-05-14',
    endDate: '2027-05-22',
    description: 'Periode libur Idul Adha 2027',
  },
  {
    name: 'Libur Sekolah Tengah Tahun 2027',
    startDate: '2027-06-19',
    endDate: '2027-07-15',
    description: 'Liburan sekolah kenaikan kelas 2027',
  },
  {
    name: 'Libur Natal & Tahun Baru 2027/2028',
    startDate: '2027-12-18',
    endDate: '2028-01-05',
    description: 'Puncak liburan Nataru 2027/2028',
  },
];

/**
 * Cek apakah sebuah tanggal (YYYY-MM-DD) masuk dalam kalender High Season Bromo
 */
export function checkIsHighSeason(dateString: string): {
  isHighSeason: boolean;
  seasonName?: string;
  seasonDescription?: string;
} {
  if (!dateString) {
    return { isHighSeason: false };
  }

  const match = HIGH_SEASON_PERIODS.find(
    (period) => dateString >= period.startDate && dateString <= period.endDate
  );

  if (match) {
    return {
      isHighSeason: true,
      seasonName: match.name,
      seasonDescription: match.description,
    };
  }

  return { isHighSeason: false };
}

/**
 * Logika Keberangkatan & Sunrise Bromo:
 * Jika tamu memilih keberangkatan tanggal D jam 23.00 (11 PM),
 * maka Sunrise Bromo adalah tanggal D+1 jam 05.00 WIB pagi keesokan harinya.
 */
export function calculateBromoTripSchedule(dateString: string): {
  departureDateStr: string;
  sunriseDateStr: string;
  explanation: string;
  departureFormatted: string;
  sunriseFormatted: string;
} {
  if (!dateString) {
    return {
      departureDateStr: '',
      sunriseDateStr: '',
      explanation: '',
      departureFormatted: '',
      sunriseFormatted: '',
    };
  }

  // Parse YYYY-MM-DD
  const parts = dateString.split('-');
  const year = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1;
  const day = parseInt(parts[2], 10);

  const departureDate = new Date(year, month, day);
  const sunriseDate = new Date(year, month, day);
  sunriseDate.setDate(departureDate.getDate() + 1);

  const monthsIndo = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
  ];

  const daysIndo = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];

  const depDayName = daysIndo[departureDate.getDay()];
  const depDay = departureDate.getDate();
  const depMonthName = monthsIndo[departureDate.getMonth()];
  const depYear = departureDate.getFullYear();

  const sunDayName = daysIndo[sunriseDate.getDay()];
  const sunDay = sunriseDate.getDate();
  const sunMonthName = monthsIndo[sunriseDate.getMonth()];
  const sunYear = sunriseDate.getFullYear();

  const departureFormatted = `${depDayName}, ${depDay} ${depMonthName} ${depYear}`;
  const sunriseFormatted = `${sunDayName}, ${sunDay} ${sunMonthName} ${sunYear}`;

  const explanation = `Keberangkatan / penjemputan dilakukan pada ${departureFormatted} pukul 23.00 WIB (malam), sehingga jadwal Golden Sunrise Bromo Anda adalah pada ${sunriseFormatted} pukul 05.00 WIB (pagi keesokan harinya).`;

  return {
    departureDateStr: dateString,
    sunriseDateStr: sunriseDate.toISOString().split('T')[0],
    explanation,
    departureFormatted,
    sunriseFormatted,
  };
}

export interface OpenTripSurabayaSchedule {
  route: 'tosari' | 'malang';
  isSaturday: boolean;
  dayName: string;
  minPax: number;
  departureTime: string;
  pricePerPax: number;
  highSeasonPricePerPax: number;
  titleBadge: string;
  explanation: string;
}

/**
 * Logika Khusus Open Trip Start Surabaya:
 * - Hari Sabtu: via Tosari pukul 22.00 WIB (sunrise Minggu pagi), Rp 400.000 / High season Rp 425.000 (1 orang bisa gabung)
 * - Hari Minggu s/d Jumat: via Malang pukul 23.00 WIB, Rp 750.000 / High season Rp 800.000 (minimal 2 orang)
 */
export function getOpenTripSurabayaSchedule(dateString: string, isHighSeason = false): OpenTripSurabayaSchedule {
  if (!dateString) {
    return {
      route: 'tosari',
      isSaturday: true,
      dayName: 'Sabtu',
      minPax: 1,
      departureTime: '22.00 WIB (Sabtu Malam)',
      pricePerPax: isHighSeason ? 425000 : 400000,
      highSeasonPricePerPax: 425000,
      titleBadge: 'Via Tosari (Khusus Sabtu 22.00 WIB)',
      explanation: 'Keberangkatan khusus hari Sabtu pukul 22.00 WIB via Tosari (Sunrise Minggu pagi). 1 orang tetap bisa gabung!',
    };
  }

  const parts = dateString.split('-');
  const d = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
  const day = d.getDay();
  const isSaturday = day === 6;

  const daysIndo = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  const dayName = daysIndo[day];

  if (isSaturday) {
    return {
      route: 'tosari',
      isSaturday: true,
      dayName,
      minPax: 1,
      departureTime: '22.00 WIB (Sabtu Malam)',
      pricePerPax: isHighSeason ? 425000 : 400000,
      highSeasonPricePerPax: 425000,
      titleBadge: 'Via Tosari (Khusus Sabtu)',
      explanation: 'Khusus keberangkatan hari Sabtu pukul 22.00 WIB via Tosari (Sunrise Minggu pagi). 1 orang tetap bisa gabung!',
    };
  } else {
    return {
      route: 'malang',
      isSaturday: false,
      dayName,
      minPax: 2,
      departureTime: '23.00 WIB (Malam)',
      pricePerPax: isHighSeason ? 800000 : 750000,
      highSeasonPricePerPax: 800000,
      titleBadge: `Via Malang (Jadwal ${dayName})`,
      explanation: `Keberangkatan hari ${dayName} via Malang (Jadwal Minggu s/d Jumat). Minimal pemesanan 2 orang.`,
    };
  }
}
