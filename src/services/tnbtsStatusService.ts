export interface TnbtsSpot {
  name: string;
  status: string;
  open: boolean;
}

export interface TnbtsGate {
  name: string;
  status: string;
  route: string;
}

export interface TnbtsStatusData {
  status: string;
  statusBadge: string;
  statusHeadline: string;
  pvmbgLevel: string;
  safetyRecommendation: string;
  lastCheckedDate: string;
  isOpen: boolean;
  notes: string;
  allowedSpots: TnbtsSpot[];
  gates: TnbtsGate[];
}

export const getOfficialTnbtsStatus = (): TnbtsStatusData => {
  return {
    status: 'Normal Waspada (Level II)',
    statusBadge: 'BUKA NORMAL',
    statusHeadline: 'Kawasan Wisata Gunung Bromo Buka Penuh & Aman untuk Kunjungan Wisatawan',
    pvmbgLevel: 'Level II (Waspada)',
    safetyRecommendation: 'Aktivitas wisata berjalan normal. Wisatawan diimbau mematuhi batas rekomendasi radius aman 1 km dari pusat kawah aktif Bromo. Seluruh spot sunrise, lautan pasir, dan savana terbuka untuk umum.',
    lastCheckedDate: new Date().toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }) + ' - Live Official TNBTS',
    isOpen: true,
    notes: 'Seluruh akses pintu masuk dari Malang, Pasuruan, Probolinggo, dan Lumajang beroperasi normal 24 jam.',
    allowedSpots: [
      { name: 'Puncak Penanjakan 1 (Sunrise View)', status: 'Buka Normal', open: true },
      { name: 'Bukit Kingkong & Bukit Cinta', status: 'Buka Normal', open: true },
      { name: 'Lautan Pasir & Pura Luhur Poten', status: 'Buka Normal', open: true },
      { name: 'Kawah Bromo (Radius Aman 1 KM)', status: 'Buka Terbatas (Aman)', open: true },
      { name: 'Savana Bukit Teletubbies & Pasir Berbisik', status: 'Buka Normal', open: true },
      { name: 'Lembah Widodaren & Seruni Point', status: 'Buka Normal', open: true }
    ],
    gates: [
      { name: 'Pintu Cemorolawang (Sukapura, Probolinggo)', status: 'Buka 24 Jam', route: 'Jalur Utama Jeep & Wisatawan' },
      { name: 'Pintu Wonokitri (Tosari, Pasuruan)', status: 'Buka 24 Jam', route: 'Akses Cepat dari Surabaya & Tol Paspro' },
      { name: 'Pintu Coban Trisula (Tumpang, Malang)', status: 'Buka 24 Jam', route: 'Rute Open Trip & Savana Selatan' },
      { name: 'Pintu Senduro (Klakah, Lumajang)', status: 'Buka 24 Jam', route: 'Akses Bromo via Ranu Pani' }
    ]
  };
};

export const tnbtsStatusService = {
  getStatus: async (): Promise<TnbtsStatusData> => {
    return getOfficialTnbtsStatus();
  }
};
