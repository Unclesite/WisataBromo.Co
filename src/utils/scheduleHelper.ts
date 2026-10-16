/**
 * Helper Terpusat Penjadwalan Trip Bromo (WIB / Asia/Jakarta)
 *
 * Menerapkan 2 Pola Utama berdasarkan Titik Start & Jenis Paket:
 *
 * 1. MALANG / BATU / SURABAYA:
 *    - Customer memilih TANGGAL PERJALANAN / SUNRISE (misal: 1 Januari 2027)
 *    - Penjemputan dilakukan MALAM SEBELUMNYA (H-1):
 *      pickupDate = selectedTripDate - 1 hari (31 Desember 2026)
 *      pickupTime = '23.00 WIB'
 *      sunriseDate = selectedTripDate (1 Januari 2027 — pagi)
 *
 * 2. SUKAPURA & TOSARI (Private Trip / Sewa Jeep / Trail):
 *    - pickupDate = selectedTripDate (1 Januari 2027)
 *    - pickupTime = '03.00 WIB' (dini hari pada tanggal sunrise)
 *    - sunriseDate = selectedTripDate (1 Januari 2027 — pagi)
 *
 * 3. GUBUGKLAKAH / HOTEL GUBUGKLAKAH:
 *    - pickupDate = selectedTripDate (1 Januari 2027)
 *    - pickupTime = '02.00 / 02.30 WIB' (dini hari pada tanggal sunrise)
 *    - sunriseDate = selectedTripDate (1 Januari 2027 — pagi)
 */

export type BromoPickupPattern = 'malang_batu_surabaya' | 'sukapura_tosari' | 'gubugklakah';

export interface BromoScheduleOptions {
  startCity?: string;
  packageId?: string;
  pickupAddress?: string;
  pickupAreaExtra?: 'none' | 'malang' | 'batu';
}

export interface BromoScheduleResult {
  // ISO Strings YYYY-MM-DD
  selectedTripDate: string;  // Tanggal Sunrise / Perjalanan yang dipilih customer (YYYY-MM-DD)
  pickupDateStr: string;     // Tanggal Penjemputan (YYYY-MM-DD)
  sunriseDateStr: string;    // Tanggal Golden Sunrise (YYYY-MM-DD)

  // Jam (WIB)
  pickupTime: string;        // '23.00 WIB' | '03.00 WIB' | '02.00 / 02.30 WIB'
  sunriseTime: string;       // '05.00 WIB'

  // Format Nama Hari & Tanggal Bahasa Indonesia
  pickupDayName: string;         // e.g. 'Kamis'
  pickupDateSimple: string;      // e.g. '31 Desember 2026'
  pickupDateFormatted: string;   // e.g. 'Kamis, 31 Desember 2026'

  sunriseDayName: string;        // e.g. 'Jumat'
  sunriseDateSimple: string;     // e.g. '1 Januari 2027'
  sunriseDateFormatted: string;  // e.g. 'Jumat, 1 Januari 2027'

  // Gabungan Jadwal Lengkap
  pickupScheduleFull: string;    // e.g. '31 Desember 2026 — 23.00 WIB'
  sunriseScheduleFull: string;   // e.g. '1 Januari 2027 — 05.00 WIB'

  // Kompatibilitas mundur dengan kode lama
  departureDateStr: string;      // = pickupDateStr
  departureFormatted: string;    // = pickupDateFormatted

  // Pola & Penjelasan
  pattern: BromoPickupPattern;
  locationLabel: string;
  explanation: string;
}

const MONTHS_INDO = [
  'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
];

const DAYS_INDO = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];

/**
 * Deteksi Pola Penjemputan Bromo berdasarkan lokasi / jenis paket
 */
export function detectBromoPickupPattern(
  optionsOrCity?: string | BromoScheduleOptions
): { pattern: BromoPickupPattern; locationLabel: string } {
  let city = '';
  let pkgId = '';
  let addr = '';
  let extra = '';

  if (typeof optionsOrCity === 'string') {
    city = optionsOrCity.toLowerCase().trim();
  } else if (optionsOrCity && typeof optionsOrCity === 'object') {
    city = (optionsOrCity.startCity || '').toLowerCase().trim();
    pkgId = (optionsOrCity.packageId || '').toLowerCase().trim();
    addr = (optionsOrCity.pickupAddress || '').toLowerCase().trim();
    extra = (optionsOrCity.pickupAreaExtra || '').toLowerCase().trim();
  }

  // Khusus Long Jeep jika tamu menambah jemput area Malang atau Batu
  if (pkgId === 'long-jeep' && (extra === 'malang' || extra === 'batu')) {
    return {
      pattern: 'malang_batu_surabaya',
      locationLabel: extra === 'batu' ? 'Kota Batu' : 'Kota Malang'
    };
  }

  // 1. Gubugklakah Kab. Malang
  if (
    city === 'gubugklakah' ||
    pkgId.includes('gubugklakah') ||
    pkgId === 'long-jeep' ||
    addr.includes('gubugklakah')
  ) {
    return {
      pattern: 'gubugklakah',
      locationLabel: 'Basecamp / Hotel Gubugklakah'
    };
  }

  // 2. Sukapura (Probolinggo) & Tosari (Pasuruan)
  if (
    city === 'sukapura' ||
    city === 'tosari' ||
    pkgId.includes('sukapura') ||
    pkgId.includes('tosari') ||
    pkgId === 'paket-sewa-trail-sukapura' ||
    addr.includes('sukapura') ||
    addr.includes('tosari')
  ) {
    const isTosari = city === 'tosari' || pkgId.includes('tosari') || addr.includes('tosari');
    return {
      pattern: 'sukapura_tosari',
      locationLabel: isTosari ? 'Tosari Kab. Pasuruan' : 'Sukapura Kab. Probolinggo'
    };
  }

  // 3. Malang, Batu, Surabaya (Pola Default)
  let label = 'Malang / Batu / Surabaya';
  if (city === 'surabaya' || pkgId.includes('surabaya') || addr.includes('surabaya')) {
    label = 'Surabaya Raya';
  } else if (city === 'batu' || pkgId.includes('batu') || addr.includes('batu')) {
    label = 'Kota Batu';
  } else if (city === 'malang' || pkgId.includes('malang') || addr.includes('malang')) {
    label = 'Kota Malang';
  }

  return {
    pattern: 'malang_batu_surabaya',
    locationLabel: label
  };
}

/**
 * Format string tanggal YYYY-MM-DD menjadi info kalender Indonesia
 */
function parseYMD(ymdStr: string) {
  const parts = ymdStr.split('-');
  const year = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10);
  const day = parseInt(parts[2], 10);

  // Buat Date objek di jam 12:00 UTC untuk menghindari pergeseran daylight/timezone
  const d = new Date(Date.UTC(year, month - 1, day, 12, 0, 0));
  const dayOfWeek = d.getUTCDay();

  return {
    year,
    month,
    day,
    dayName: DAYS_INDO[dayOfWeek],
    monthName: MONTHS_INDO[month - 1],
    dateSimple: `${day} ${MONTHS_INDO[month - 1]} ${year}`,
    dateFormatted: `${DAYS_INDO[dayOfWeek]}, ${day} ${MONTHS_INDO[month - 1]} ${year}`,
  };
}

/**
 * Hitung tanggal H-1 (1 hari sebelum YYYY-MM-DD)
 */
function getPreviousDayYMD(ymdStr: string): string {
  const parts = ymdStr.split('-');
  const year = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10);
  const day = parseInt(parts[2], 10);

  const d = new Date(Date.UTC(year, month - 1, day, 12, 0, 0));
  d.setUTCDate(d.getUTCDate() - 1);

  const prevYear = d.getUTCFullYear();
  const prevMonth = d.getUTCMonth() + 1;
  const prevDay = d.getUTCDate();

  return `${prevYear}-${String(prevMonth).padStart(2, '0')}-${String(prevDay).padStart(2, '0')}`;
}

/**
 * FUNGSI UTAMA TERPUSAT: Menghitung jadwal penjemputan & sunrise Bromo
 *
 * @param selectedTripDate Tanggal perjalanan / Sunrise yang dipilih customer (YYYY-MM-DD)
 * @param optionsOrCity Objek opsi atau string startCity ('malang', 'batu', 'surabaya', 'sukapura', 'tosari', 'gubugklakah')
 */
export function calculateBromoSchedule(
  selectedTripDate: string,
  optionsOrCity?: string | BromoScheduleOptions
): BromoScheduleResult {
  if (!selectedTripDate) {
    return {
      selectedTripDate: '',
      pickupDateStr: '',
      sunriseDateStr: '',
      pickupTime: '',
      sunriseTime: '',
      pickupDayName: '',
      pickupDateSimple: '',
      pickupDateFormatted: '',
      sunriseDayName: '',
      sunriseDateSimple: '',
      sunriseDateFormatted: '',
      pickupScheduleFull: '',
      sunriseScheduleFull: '',
      departureDateStr: '',
      departureFormatted: '',
      pattern: 'malang_batu_surabaya',
      locationLabel: '',
      explanation: '',
    };
  }

  const { pattern, locationLabel } = detectBromoPickupPattern(optionsOrCity);
  const sunriseInfo = parseYMD(selectedTripDate);
  const sunriseDateStr = selectedTripDate;
  const sunriseTime = '05.00 WIB';

  let pickupDateStr = selectedTripDate;
  let pickupTime = '23.00 WIB';
  let explanation = '';

  switch (pattern) {
    case 'sukapura_tosari': {
      // Pola B: Sukapura / Tosari
      // pickupDate = selectedTripDate (dini hari pada tanggal sunrise)
      // pickupTime = 03.00 WIB
      pickupDateStr = selectedTripDate;
      pickupTime = '03.00 WIB';
      const pickupInfo = sunriseInfo; // Tanggalnya sama dengan sunrise
      explanation = `Penjemputan dilakukan dini hari pada ${pickupInfo.dateFormatted} pukul ${pickupTime}. Jadwal Golden Sunrise Bromo Anda adalah pada ${sunriseInfo.dateFormatted} pukul ${sunriseTime}.`;
      break;
    }

    case 'gubugklakah': {
      // Pola C: Gubugklakah / Hotel Gubugklakah
      // pickupDate = selectedTripDate (dini hari pada tanggal sunrise)
      // pickupTime = 02.00 / 02.30 WIB
      pickupDateStr = selectedTripDate;
      pickupTime = '02.00 / 02.30 WIB';
      const pickupInfo = sunriseInfo; // Tanggalnya sama dengan sunrise
      explanation = `Penjemputan dilakukan dini hari pada ${pickupInfo.dateFormatted} pukul ${pickupTime}. Jadwal Golden Sunrise Bromo Anda adalah pada ${sunriseInfo.dateFormatted} pukul ${sunriseTime}.`;
      break;
    }

    case 'malang_batu_surabaya':
    default: {
      // Pola A: Malang / Batu / Surabaya
      // pickupDate = selectedTripDate - 1 hari (malam sebelum tanggal perjalanan)
      // pickupTime = 23.00 WIB
      pickupDateStr = getPreviousDayYMD(selectedTripDate);
      pickupTime = '23.00 WIB';
      const pickupInfo = parseYMD(pickupDateStr);
      explanation = `Penjemputan dilakukan malam sebelumnya pada ${pickupInfo.dateFormatted} pukul ${pickupTime}. Jadwal Golden Sunrise Bromo Anda adalah pada keesokan paginya yaitu ${sunriseInfo.dateFormatted} pukul ${sunriseTime}.`;
      break;
    }
  }

  const pickupInfo = parseYMD(pickupDateStr);

  return {
    selectedTripDate,
    pickupDateStr,
    sunriseDateStr,
    pickupTime,
    sunriseTime,
    pickupDayName: pickupInfo.dayName,
    pickupDateSimple: pickupInfo.dateSimple,
    pickupDateFormatted: pickupInfo.dateFormatted,
    sunriseDayName: sunriseInfo.dayName,
    sunriseDateSimple: sunriseInfo.dateSimple,
    sunriseDateFormatted: sunriseInfo.dateFormatted,
    pickupScheduleFull: `${pickupInfo.dateSimple} — ${pickupTime}`,
    sunriseScheduleFull: `${sunriseInfo.dateSimple} — ${sunriseTime}`,
    departureDateStr: pickupDateStr,
    departureFormatted: pickupInfo.dateFormatted,
    pattern,
    locationLabel,
    explanation,
  };
}

export const calculateBromoTripSchedule = calculateBromoSchedule;
