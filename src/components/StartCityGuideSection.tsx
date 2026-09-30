import React from 'react';
import { MapPin, Navigation, Clock, ShieldCheck, ArrowRight, Car, ExternalLink } from 'lucide-react';
import { StartCity } from '../types';

interface StartCityGuideSectionProps {
  onSelectCityFilter: (city: StartCity) => void;
}

interface CityGate {
  id: StartCity;
  name: string;
  badge: string;
  distanceTime: string;
  routeHighlight: string;
  bestFor: string;
  meetingPoints: string[];
}

const GATES: CityGate[] = [
  {
    id: 'malang',
    name: 'Kota Malang (Pintu Masuk Utama)',
    badge: 'Paling Populer',
    distanceTime: '± 2 Jam ke Bromo (Midnight 00.00)',
    routeHighlight: 'Rute Tumpang - Gubugklakah - Jemplang - Savana',
    bestFor: 'Wisatawan kereta api stasiun Malang, keluarga, & solo traveler open trip.',
    meetingPoints: ['Stasiun Malang Kotabaru', 'Hotel / Guesthouse Kota Malang', 'Bandara Abdulrachman Saleh (MLG)']
  },
  {
    id: 'batu',
    name: 'Kota Wisata Batu (KWB)',
    badge: 'Villa & Resort',
    distanceTime: '± 2.5 Jam ke Bromo (Midnight 23.30)',
    routeHighlight: 'Rute Kota Batu - Malang - Poncokusumo - Bromo',
    bestFor: 'Tamu yang menginap di villa keluarga & hotel resort Batu tanpa pindah hotel.',
    meetingPoints: ['Seluruh Villa & Resort Kota Batu', 'Alun-alun Kota Batu', 'Jatim Park / Museum Angkut']
  },
  {
    id: 'surabaya',
    name: 'Kota Surabaya Raya (Tol Cepat)',
    badge: 'Akses Tol & Bandara',
    distanceTime: '± 2.5 - 3 Jam via Tol Trans Jawa',
    routeHighlight: 'Tol Surabaya-Gempol-Pasuruan menuju Basecamp Tosari',
    bestFor: 'Pesawat Bandara Juanda, Kereta Stasiun Pasar Turi/Gubeng, gathering korporat.',
    meetingPoints: ['Stasiun Pasar Turi', 'Terminal Bungurasih', 'Bandara Internasional Juanda (SUB)']
  },
  {
    id: 'sukapura',
    name: 'Sukapura Kab. Probolinggo',
    badge: 'Gerbang Hotel Bromo',
    distanceTime: '± 45 Menit (Start Fajar 03.00)',
    routeHighlight: 'Sukapura - Ngadisari - Cemorolawang - Lautan Pasir',
    bestFor: 'Tamu hotel Sukapura (Jiwa Jawa, Lava View, Bromo Terrace) & turis asing.',
    meetingPoints: ['Basecamp Jeep Sukapura', 'Lobby Hotel Sukapura & Cemorolawang', 'Jalan Raya Bromo']
  },
  {
    id: 'tosari',
    name: 'Tosari Kab. Pasuruan',
    badge: 'Akses Tercepat Penanjakan',
    distanceTime: '± 35 Menit (Start Fajar 03.00)',
    routeHighlight: 'Tosari - Wonokitri - Dingklik - Penanjakan 1',
    bestFor: 'Akses langsung tanpa macet ke puncak tertinggi Penanjakan 1 (2.770 mdpl).',
    meetingPoints: ['Basecamp Jeep Tosari', 'Hotel Plataran Bromo / Bromo Cottage', 'Pasar Tosari']
  },
  {
    id: 'gubugklakah',
    name: 'Gubugklakah Kab. Malang',
    badge: 'Jalur Eksotis Savana',
    distanceTime: '± 40 Menit (Start Fajar 03.00)',
    routeHighlight: 'Jalan Raya Gubugklakah 147 - Coban Pelangi - Jemplang',
    bestFor: 'Pecinta pemandangan perkebunan apel, homestay desa wisata, & Long Jeep 9 pax.',
    meetingPoints: ['Basecamp Gubugklakah No. 147', 'Rest Area Poncokusumo', 'Homestay Gubugklakah']
  }
];

export const StartCityGuideSection: React.FC<StartCityGuideSectionProps> = ({ onSelectCityFilter }) => {
  return (
    <section id="titik-start" className="py-14 sm:py-16 bg-[#f8fafc] border-t border-slate-200 text-[#111318]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="text-xs font-extrabold text-[#3d72fe] tracking-wider mb-2 flex items-center justify-center gap-1.5 uppercase">
            <Navigation className="w-4 h-4" />
            <span>JARINGAN PENJEMPUTAN TERLUAS DI JAWA TIMUR</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102a56] mb-3 text-balance">
            6 Pilihan Titik Start & Pintu Gerbang TNBTS
          </h2>
          <p className="text-xs sm:text-base text-slate-600 leading-relaxed mb-4">
            WisataBromo.co melayani penjemputan resmi dari seluruh kota utama dan pintu gerbang lingkar Bromo dengan armada terawat dan driver berlisensi resmi.
          </p>
          <div className="inline-flex items-center gap-2">
            <a
              href="https://maps.app.goo.gl/s2RnoqJqDLtZSEvP7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#eaf2ff] hover:bg-[#3d72fe] text-[#3d72fe] hover:text-white border border-[#3d72fe]/30 rounded-xl text-xs font-bold transition-all shadow-xs"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Petunjuk Arah Google Maps Basecamp</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 6 Gates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GATES.map((gate) => (
            <div
              key={gate.id}
              className="bg-white border border-slate-200 hover:border-[#3d72fe] rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-[#3d72fe]/10"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-extrabold text-[#3d72fe] bg-[#eaf2ff] px-2.5 py-1 rounded-lg">
                    {gate.badge}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500 font-medium flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#3d72fe]" />
                    {gate.distanceTime}
                  </span>
                </div>

                <h3 className="text-base font-extrabold text-[#102a56]">
                  {gate.name}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong className="text-[#102a56]">Cocok untuk: </strong>{gate.bestFor}
                </p>

                {/* Meeting Point Bullets */}
                <div className="p-3 bg-slate-50 rounded-2xl space-y-1.5 text-xs text-slate-700 border border-slate-100">
                  <div className="text-[11px] font-bold text-[#102a56] uppercase tracking-wider">
                    Titik Jemput Populer:
                  </div>
                  {gate.meetingPoints.map((mp, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-[11px]">
                      <MapPin className="w-3 h-3 text-[#3d72fe] shrink-0 mt-0.5" />
                      <span>{mp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Action */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-2">
                <button
                  type="button"
                  onClick={() => {
                    onSelectCityFilter(gate.id);
                    const el = document.getElementById('paket-wisata');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="flex-1 py-2.5 text-xs font-bold text-[#102a56] hover:text-white bg-[#eaf2ff] hover:bg-[#3d72fe] rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Paket Start {gate.name.split(' ')[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href="https://maps.app.goo.gl/s2RnoqJqDLtZSEvP7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2.5 text-xs font-bold text-slate-600 hover:text-[#3d72fe] bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors flex items-center justify-center gap-1"
                  title="Buka Google Maps"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#3d72fe]" />
                  <span>Maps</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
