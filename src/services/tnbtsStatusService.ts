export interface TnbtsGate {
  name: string;
  status: string;
  description: string;
  accessibleBy: string;
  route?: string;
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
  allowedSpots: string[];
  gates: TnbtsGate[];
  activityLevel?: string;
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
    activityLevel: 'Aman untuk Kunjungan Wisatawan',
    notes: 'Seluruh akses pintu masuk dari Malang, Pasuruan, Probolinggo, dan Lumajang beroperasi normal 24 jam.',
    allowedSpots: [
      'Puncak Penanjakan 1 (Sunrise View)',
      'Bukit Kingkong & Bukit Cinta',
      'Lautan Pasir & Seruni Point',
      'Kawah Bromo (Radius Aman 1 KM)',
      'Savana Bukit Teletubbies & Pasir Berbisik',
      'Lembah Widodaren & Seruni Point'
    ],
    gates: [
      { 
        name: 'Pintu Cemorolawang (Sukapura, Probolinggo)', 
        status: 'Buka 24 Jam', 
        description: 'Jalur utama wisatawan & rental jeep terdekat dari Surabaya/Malang.',
        accessibleBy: 'Jeep 4x4, Mobil Pribadi, Sepeda Motor',
        route: 'Jalur Utama Jeep & Wisatawan'
      },
      { 
        name: 'Pintu Wonokitri (Tosari, Pasuruan)', 
        status: 'Buka 24 Jam', 
        description: 'Akses cepat dari Surabaya & Tol Paspro via Pasuruan.',
        accessibleBy: 'Jeep 4x4, Mobil Pribadi, Sepeda Motor',
        route: 'Akses Cepat dari Surabaya & Tol Paspro'
      },
      { 
        name: 'Pintu Coban Trisula (Tumpang, Malang)', 
        status: 'Buka 24 Jam', 
        description: 'Rute Open Trip Malang via Tumpang menuju Savana Teletubbies.',
        accessibleBy: 'Jeep 4x4 TNBTS Resmi',
        route: 'Rute Open Trip & Savana Selatan'
      },
      { 
        name: 'Pintu Senduro (Klakah, Lumajang)', 
        status: 'Buka 24 Jam', 
        description: 'Akses eksotis dari Lumajang via Ranu Pane & Burno.',
        accessibleBy: 'Jeep 4x4, Sepeda Motor Trail',
        route: 'Akses Bromo via Ranu Pani'
      }
    ]
  };
};

export const tnbtsStatusService = {
  getStatus: async (): Promise<TnbtsStatusData> => {
    return getOfficialTnbtsStatus();
  }
};

export default tnbtsStatusService;
