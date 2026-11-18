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
  optionsOrCity?: string | BromoScheduleOptions,
  lang: 'id' | 'en' | 'zh' = 'id'
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
    const batuLabel = lang === 'zh' ? '巴图市 (Batu City)' : lang === 'en' ? 'Batu City' : 'Kota Batu';
    const malangLabel = lang === 'zh' ? '玛琅市 (Malang City)' : lang === 'en' ? 'Malang City' : 'Kota Malang';
    return {
      pattern: 'malang_batu_surabaya',
      locationLabel: extra === 'batu' ? batuLabel : malangLabel
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
      locationLabel: lang === 'zh' ? 'Gubugklakah 基地 / 酒店' : lang === 'en' ? 'Gubugklakah Basecamp / Hotel' : 'Basecamp / Hotel Gubugklakah'
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
    const tosariLabel = lang === 'zh' ? '帕苏鲁安-托萨里 (Tosari Pasuruan)' : lang === 'en' ? 'Tosari, Pasuruan' : 'Tosari Kab. Pasuruan';
    const sukapuraLabel = lang === 'zh' ? '波罗蒙-苏卡普拉 (Sukapura Probolinggo)' : lang === 'en' ? 'Sukapura, Probolinggo' : 'Sukapura Kab. Probolinggo';
    return {
      pattern: 'sukapura_tosari',
      locationLabel: isTosari ? tosariLabel : sukapuraLabel
    };
  }

  // 3. Malang, Batu, Surabaya (Pola Default)
  let label = lang === 'zh' ? '玛琅 / 巴图 / 泗水 区域' : lang === 'en' ? 'Malang / Batu / Surabaya Area' : 'Malang / Batu / Surabaya';
  if (city === 'surabaya' || pkgId.includes('surabaya') || addr.includes('surabaya')) {
    label = lang === 'zh' ? '大泗水地区 (Surabaya Area)' : lang === 'en' ? 'Greater Surabaya Area' : 'Surabaya Raya';
  } else if (city === 'batu' || pkgId.includes('batu') || addr.includes('batu')) {
    label = lang === 'zh' ? '巴图市 (Batu City)' : lang === 'en' ? 'Batu City' : 'Kota Batu';
  } else if (city === 'malang' || pkgId.includes('malang') || addr.includes('malang')) {
    label = lang === 'zh' ? '玛琅市 (Malang City)' : lang === 'en' ? 'Malang City' : 'Kota Malang';
  }

  return {
    pattern: 'malang_batu_surabaya',
    locationLabel: label
  };
}

/**
 * Format string tanggal YYYY-MM-DD menjadi info kalender Indonesia / English / Mandarin
 */
function parseYMD(ymdStr: string, lang: 'id' | 'en' | 'zh' = 'id') {
  const parts = ymdStr.split('-');
  const year = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10);
  const day = parseInt(parts[2], 10);

  // Buat Date objek di jam 12:00 UTC untuk menghindari pergeseran daylight/timezone
  const d = new Date(Date.UTC(year, month - 1, day, 12, 0, 0));
  const dayOfWeek = d.getUTCDay();

  const MONTHS_EN = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const DAYS_EN = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const MONTHS_ZH = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
  const DAYS_ZH = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];

  if (lang === 'en') {
    const dayName = DAYS_EN[dayOfWeek];
    const monthName = MONTHS_EN[month - 1];
    return {
      year,
      month,
      day,
      dayName,
      monthName,
      dateSimple: `${monthName} ${day}, ${year}`,
      dateFormatted: `${dayName}, ${monthName} ${day}, ${year}`,
    };
  } else if (lang === 'zh') {
    const dayName = DAYS_ZH[dayOfWeek];
    const monthName = MONTHS_ZH[month - 1];
    return {
      year,
      month,
      day,
      dayName,
      monthName,
      dateSimple: `${year}年${monthName}${day}日`,
      dateFormatted: `${year}年${monthName}${day}日 (${dayName})`,
    };
  }

  const dayName = DAYS_INDO[dayOfWeek];
  const monthName = MONTHS_INDO[month - 1];
  return {
    year,
    month,
    day,
    dayName,
    monthName,
    dateSimple: `${day} ${monthName} ${year}`,
    dateFormatted: `${dayName}, ${day} ${monthName} ${year}`,
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
 * @param lang Bahasa aktif ('id' | 'en' | 'zh')
 */
export function calculateBromoSchedule(
  selectedTripDate: string,
  optionsOrCity?: string | BromoScheduleOptions,
  lang: 'id' | 'en' | 'zh' = 'id'
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

  const { pattern, locationLabel } = detectBromoPickupPattern(optionsOrCity, lang);
  const sunriseInfo = parseYMD(selectedTripDate, lang);
  const sunriseDateStr = selectedTripDate;
  const sunriseTime = lang === 'zh' ? '05:00 (印尼西部时间)' : lang === 'en' ? '05:00 AM WIB' : '05.00 WIB';

  let pickupDateStr = selectedTripDate;
  let pickupTime = lang === 'zh' ? '23:00 (印尼西部时间)' : lang === 'en' ? '11:00 PM WIB' : '23.00 WIB';
  let explanation = '';

  switch (pattern) {
    case 'sukapura_tosari': {
      pickupDateStr = selectedTripDate;
      pickupTime = lang === 'zh' ? '03:00 (印尼西部时间)' : lang === 'en' ? '03:00 AM WIB' : '03.00 WIB';
      const pickupInfo = sunriseInfo;
      if (lang === 'en') {
        explanation = `Pickup takes place early morning on ${pickupInfo.dateFormatted} at ${pickupTime}. Your Mount Bromo Golden Sunrise schedule is on ${sunriseInfo.dateFormatted} at ${sunriseTime}.`;
      } else if (lang === 'zh') {
        explanation = `接送时间为当日凌晨 ${pickupInfo.dateFormatted} ${pickupTime}。您的布罗莫金光日出行程为 ${sunriseInfo.dateFormatted} ${sunriseTime}。`;
      } else {
        explanation = `Penjemputan dilakukan dini hari pada ${pickupInfo.dateFormatted} pukul ${pickupTime}. Jadwal Golden Sunrise Bromo Anda adalah pada ${sunriseInfo.dateFormatted} pukul ${sunriseTime}.`;
      }
      break;
    }

    case 'gubugklakah': {
      pickupDateStr = selectedTripDate;
      pickupTime = lang === 'zh' ? '02:00 - 02:30 (印尼西部时间)' : lang === 'en' ? '02:00 - 02:30 AM WIB' : '02.00 / 02.30 WIB';
      const pickupInfo = sunriseInfo;
      if (lang === 'en') {
        explanation = `Pickup takes place early morning on ${pickupInfo.dateFormatted} at ${pickupTime}. Your Mount Bromo Golden Sunrise schedule is on ${sunriseInfo.dateFormatted} at ${sunriseTime}.`;
      } else if (lang === 'zh') {
        explanation = `接送时间为当日凌晨 ${pickupInfo.dateFormatted} ${pickupTime}。您的布罗莫金光日出行程为 ${sunriseInfo.dateFormatted} ${sunriseTime}。`;
      } else {
        explanation = `Penjemputan dilakukan dini hari pada ${pickupInfo.dateFormatted} pukul ${pickupTime}. Jadwal Golden Sunrise Bromo Anda adalah pada ${sunriseInfo.dateFormatted} pukul ${sunriseTime}.`;
      }
      break;
    }

    case 'malang_batu_surabaya':
    default: {
      pickupDateStr = getPreviousDayYMD(selectedTripDate);
      pickupTime = lang === 'zh' ? '23:00 (印尼西部时间)' : lang === 'en' ? '11:00 PM WIB' : '23.00 WIB';
      const pickupInfo = parseYMD(pickupDateStr, lang);
      if (lang === 'en') {
        explanation = `Pickup takes place the previous night on ${pickupInfo.dateFormatted} at ${pickupTime}. Your Mount Bromo Golden Sunrise schedule is the following morning on ${sunriseInfo.dateFormatted} at ${sunriseTime}.`;
      } else if (lang === 'zh') {
        explanation = `接送时间为前一晚 ${pickupInfo.dateFormatted} ${pickupTime}。您的布罗莫金光日出行程为次日早晨 ${sunriseInfo.dateFormatted} ${sunriseTime}。`;
      } else {
        explanation = `Penjemputan dilakukan malam sebelumnya pada ${pickupInfo.dateFormatted} pukul ${pickupTime}. Jadwal Golden Sunrise Bromo Anda adalah pada keesokan paginya yaitu ${sunriseInfo.dateFormatted} pukul ${sunriseTime}.`;
      }
      break;
    }
  }

  const pickupInfo = parseYMD(pickupDateStr, lang);

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
