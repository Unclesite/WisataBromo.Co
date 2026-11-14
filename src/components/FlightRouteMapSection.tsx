import React from 'react';
import { Plane, Car, Mountain, Globe } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export const FlightRouteMapSection: React.FC = () => {
  const { language } = useLanguage();

  const copy = {
    id: {
      badge: 'AKSES PENERBANGAN & JALUR DARAT',
      heading: 'Peta Rute Penerbangan & Akses Menuju Gunung Bromo',
      subheading:
        'Terhubung langsung dari bandara utama di Jawa & Bali (Yogyakarta YK, Surabaya SUB, Malang MLG, dan Denpasar DPS) menuju kawasan Taman Nasional Bromo Tengger Semeru.',
      flightLegend: 'Rute Penerbangan (YK, SUB, MLG, DPS)',
      groundLegend: 'Rute Perjalanan Darat Menuju Mt. Bromo',
      hubs: [
        { code: 'SUB', city: 'Surabaya (Juanda)', note: '± 2,5 - 3 Jam via Tol Trans Jawa' },
        { code: 'MLG', city: 'Malang (Abd. Saleh)', note: '± 2 Jam via Tumpang / Gubugklakah' },
        { code: 'YK', city: 'Yogyakarta (YIA)', note: 'Koneksi Kereta Eksekutif & Tol' },
        { code: 'DPS', city: 'Bali (Ngurah Rai)', note: 'Penerbangan ke SUB / Jalur Darat-Feri' },
      ],
    },
    en: {
      badge: 'FLIGHT & OVERLAND ACCESS MAP',
      heading: 'Flight Routes & Overland Access to Mount Bromo',
      subheading:
        'Seamlessly connected from major domestic and international gateways across Java & Bali (Yogyakarta YK, Surabaya SUB, Malang MLG, and Denpasar DPS) straight to Mount Bromo.',
      flightLegend: 'Flight Paths (YK, SUB, MLG, DPS)',
      groundLegend: 'Overland & 4x4 Jeep Routes to Mt. Bromo',
      hubs: [
        { code: 'SUB', city: 'Surabaya (Juanda)', note: '± 2.5 - 3 hrs via Trans-Java Toll' },
        { code: 'MLG', city: 'Malang (Abd. Saleh)', note: '± 2 hrs via Tumpang / Gubugklakah' },
        { code: 'YK', city: 'Yogyakarta (YIA)', note: 'Executive Train & Highway Link' },
        { code: 'DPS', city: 'Bali (Ngurah Rai)', note: 'Short Flight to SUB / Overland Ferry' },
      ],
    },
    zh: {
      badge: '航班与陆路交通网络',
      heading: '前往布罗莫火山的航班路线与陆路接驳图',
      subheading:
        '从爪哇及巴厘岛主要门户机场（日惹 YK、泗水 SUB、玛琅 MLG、巴厘岛 DPS）轻松衔接陆路专车与四驱吉普车，直达布罗莫火山景区。',
      flightLegend: '国际及国内航线（YK、SUB、MLG、DPS）',
      groundLegend: '前往布罗莫火山的陆路接驳路线',
      hubs: [
        { code: 'SUB', city: '泗水朱安达机场', note: '经跨爪哇高速约 2.5 - 3 小时' },
        { code: 'MLG', city: '玛琅阿卜杜勒机场', note: '经通庞 / 古布克拉卡约 2 小时' },
        { code: 'YK', city: '日惹国际机场', note: '可乘高铁/行政列车或高速直达' },
        { code: 'DPS', city: '巴厘岛伍拉·赖机场', note: '转飞泗水或经跨海渡轮陆路抵达' },
      ],
    },
  }[language] || {
    badge: 'AKSES PENERBANGAN & JALUR DARAT',
    heading: 'Peta Rute Penerbangan & Akses Menuju Gunung Bromo',
    subheading:
      'Terhubung langsung dari bandara utama di Jawa & Bali (Yogyakarta YK, Surabaya SUB, Malang MLG, dan Denpasar DPS) menuju kawasan Taman Nasional Bromo Tengger Semeru.',
    flightLegend: 'Rute Penerbangan (YK, SUB, MLG, DPS)',
    groundLegend: 'Rute Perjalanan Darat Menuju Mt. Bromo',
    hubs: [
      { code: 'SUB', city: 'Surabaya (Juanda)', note: '± 2,5 - 3 Jam via Tol Trans Jawa' },
      { code: 'MLG', city: 'Malang (Abd. Saleh)', note: '± 2 Jam via Tumpang / Gubugklakah' },
      { code: 'YK', city: 'Yogyakarta (YIA)', note: 'Koneksi Kereta Eksekutif & Tol' },
      { code: 'DPS', city: 'Bali (Ngurah Rai)', note: 'Penerbangan ke SUB / Jalur Darat-Feri' },
    ],
  };

  return (
    <section id="peta-rute-penerbangan" className="py-14 sm:py-18 bg-[#ffffff] border-t border-slate-200 text-[#111318]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="text-xs font-black text-[#0996f5] tracking-wider mb-2 flex items-center justify-center gap-1.5 uppercase">
            <Globe className="w-4 h-4" />
            <span>{copy.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#111318] mb-3 text-balance">
            {copy.heading}
          </h2>
          <p className="text-xs sm:text-base text-slate-600 leading-relaxed">
            {copy.subheading}
          </p>
        </div>

        {/* Embedded Interactive SVG Route Map Card */}
        <div className="rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden bg-[#b8defa]">
          <div className="relative w-full aspect-[1274/928] overflow-hidden bg-[#b8defa]">
            <iframe
              src="/assets/aistudio/Peta_Rute_Penerbangan___Mt._Bromo_aa2b41ca.html"
              title="Peta Rute Penerbangan – Mt. Bromo"
              className="w-full h-full border-0 block"
              loading="lazy"
            />
          </div>

          {/* Map Legend Bar */}
          <div className="bg-white border-t border-slate-200 px-4 sm:px-6 py-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-bold text-slate-700">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-[#1e6fd9]/10 text-[#1e6fd9]">
                  <Plane className="w-4 h-4" />
                </span>
                <span className="inline-block w-6 border-t-2 border-dashed border-[#1e6fd9]" />
                <span>{copy.flightLegend}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-[#4f7a55]/10 text-[#4f7a55]">
                  <Car className="w-4 h-4" />
                </span>
                <span className="inline-block w-6 border-t-2 border-dotted border-[#4f7a55]" />
                <span>{copy.groundLegend}</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-black text-[#4f7a55]">
              <Mountain className="w-4 h-4" />
              <span>MT. BROMO (2.329 – 2.770 MDPL)</span>
            </div>
          </div>
        </div>

        {/* Airport & Hub Quick Reference Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-6">
          {copy.hubs.map((hub) => (
            <div
              key={hub.code}
              className="bg-[#f8fafc] border border-slate-200/90 rounded-2xl p-4 flex items-start gap-3"
            >
              <span className="px-2.5 py-1.5 rounded-xl bg-[#1e6fd9] text-white text-xs font-black tracking-wider shrink-0">
                {hub.code}
              </span>
              <div className="min-w-0">
                <div className="text-sm font-black text-[#111318] truncate">{hub.city}</div>
                <div className="text-xs text-slate-600 mt-0.5 leading-snug">{hub.note}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
