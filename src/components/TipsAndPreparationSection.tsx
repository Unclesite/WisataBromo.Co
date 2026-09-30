import React, { useState } from 'react';
import { Thermometer, Wind, CheckCircle2, AlertTriangle, Layers, Heart, Sparkles } from 'lucide-react';

export const TipsAndPreparationSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'pakaian' | 'kesehatan' | 'etika'>('pakaian');

  return (
    <section id="tips-dan-panduan" className="py-16 bg-white text-[#111318]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="text-xs font-extrabold text-[#3d72fe] tracking-wider mb-2 uppercase">
            PANDUAN LENGKAP & AMAN
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#102a56] mb-3 text-balance">
            Tips Wisata Bromo & Checklist Pakaian Suhu Dingin (2°C - 8°C)
          </h2>
          <p className="text-[#111318]/75 text-sm sm:text-base leading-relaxed">
            Persiapan matang adalah kunci liburan yang nyaman dan berkesan. Pelajari sistem pakaian berlapis, tips aklimatisasi udara tipis, serta etika menghormati kesakralan tanah adat Tengger.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveTab('pakaian')}
            className={`px-4.5 py-2.5 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'pakaian'
                ? 'bg-[#3d72fe] text-white shadow-md shadow-[#3d72fe]/20'
                : 'bg-[#eaf2ff] text-[#102a56] hover:bg-slate-200/70 border border-[#3d72fe]/20'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Sistem Pakaian & Checklist</span>
          </button>
          <button
            onClick={() => setActiveTab('kesehatan')}
            className={`px-4.5 py-2.5 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'kesehatan'
                ? 'bg-[#3d72fe] text-white shadow-md shadow-[#3d72fe]/20'
                : 'bg-[#eaf2ff] text-[#102a56] hover:bg-slate-200/70 border border-[#3d72fe]/20'
            }`}
          >
            <Heart className="w-3.5 h-3.5" />
            <span>Kesehatan & Ketinggian</span>
          </button>
          <button
            onClick={() => setActiveTab('etika')}
            className={`px-4.5 py-2.5 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'etika'
                ? 'bg-[#3d72fe] text-white shadow-md shadow-[#3d72fe]/20'
                : 'bg-[#eaf2ff] text-[#102a56] hover:bg-slate-200/70 border border-[#3d72fe]/20'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Etika Adat Suku Tengger</span>
          </button>
        </div>

        {/* Tab 1: Pakaian & Perlengkapan */}
        {activeTab === 'pakaian' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Box 1: 3-Layer System */}
            <div className="bg-[#eaf2ff]/60 border border-[#3d72fe]/25 rounded-2xl p-6">
              <div className="flex items-center gap-2 text-[#102a56] font-bold text-sm mb-4">
                <Thermometer className="w-4 h-4 text-[#3d72fe]" />
                <span>3-Layer Clothing System (Suhu 2°C - 8°C)</span>
              </div>
              <div className="space-y-3.5 text-xs text-[#111318]/90">
                <div className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <div className="font-bold text-[#102a56] mb-0.5">1. Baselayer (Lapisan Dasar):</div>
                  <div className="text-slate-600">Pakaian dalam thermal (Long John) atau kaos sintetis cepat kering. Hindari kaos katun tebal basah keringat.</div>
                </div>
                <div className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <div className="font-bold text-[#102a56] mb-0.5">2. Midlayer (Penyekap Panas):</div>
                  <div className="text-slate-600">Sweater bahan fleece atau rajut wol tebal untuk mempertahankan suhu inti tubuh.</div>
                </div>
                <div className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <div className="font-bold text-[#102a56] mb-0.5">3. Outerlayer (Penahan Angin):</div>
                  <div className="text-slate-600">Jaket windproof, parasut tebal, atau Down Jacket (bulu angsa) untuk memblokir terpaan angin gunung.</div>
                </div>
              </div>
            </div>

            {/* Box 2: Aksesori Wajib */}
            <div className="bg-[#eaf2ff]/60 border border-[#3d72fe]/25 rounded-2xl p-6">
              <div className="flex items-center gap-2 text-[#102a56] font-bold text-sm mb-4">
                <Wind className="w-4 h-4 text-[#3d72fe]" />
                <span>Aksesori & Perlindungan Debu Pasir</span>
              </div>
              <ul className="space-y-3 text-xs text-[#111318]/90">
                <li className="flex items-start gap-2.5 p-2 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#102a56]">Masker Dobel: </strong>
                    Sangat vital saat berada di Lautan Pasir dan Kawah agar terhindar dari debu vulkanik dan aroma belerang.
                  </div>
                </li>
                <li className="flex items-start gap-2.5 p-2 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#102a56]">Kupluk Beanie & Syal: </strong>
                    Menutup telinga dan leher agar tidak terkena hipotermia ringan atau masuk angin fajar.
                  </div>
                </li>
                <li className="flex items-start gap-2.5 p-2 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#102a56]">Sarung Tangan Polar: </strong>
                    Jari tangan adalah bagian paling cepat kaku terkena udara beku saat menunggu sunrise jam 04.00 pagi.
                  </div>
                </li>
                <li className="flex items-start gap-2.5 p-2 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#102a56]">Kacamata Hitam (Sunglasses): </strong>
                    Melindungi mata dari pantulan sinar matahari di pasir putih dan butiran debu terbang.
                  </div>
                </li>
              </ul>
            </div>

            {/* Box 3: Sepatu & Gadget */}
            <div className="bg-[#eaf2ff]/60 border border-[#3d72fe]/25 rounded-2xl p-6">
              <div className="flex items-center gap-2 text-[#102a56] font-bold text-sm mb-4">
                <CheckCircle2 className="w-4 h-4 text-[#3d72fe]" />
                <span>Sepatu, Gadget & Dana Tunai</span>
              </div>
              <ul className="space-y-3 text-xs text-[#111318]/90">
                <li className="flex items-start gap-2.5 p-2 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#102a56]">Sepatu Sneakers / Hiking Grip Karet: </strong>
                    Gunakan sepatu sol karet anti-selip untuk menaiki 250 anak tangga kawah. Jangan pakai heels atau sandal jepit.
                  </div>
                </li>
                <li className="flex items-start gap-2.5 p-2 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#102a56]">Simpan Baterai HP di Saku Dalam: </strong>
                    Suhu dingin ekstrem bisa menguras persentase baterai smartphone dalam hitungan menit. Selalu bawa powerbank.
                  </div>
                </li>
                <li className="flex items-start gap-2.5 p-2 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#102a56]">Uang Tunai Pecahan Kecil: </strong>
                    Di puncak tidak ada mesin ATM. Siapkan uang cash Rp 10rb - Rp 50rb untuk toilet, kopi, dan sewa kuda kawah.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Tab 2: Kesehatan & Ketinggian */}
        {activeTab === 'kesehatan' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-[#eaf2ff]/60 border border-[#3d72fe]/25 rounded-2xl p-6">
              <h4 className="text-sm font-bold text-[#102a56] mb-3 flex items-center gap-2">
                <Heart className="w-4 h-4 text-[#ea0610]" />
                Aklimatisasi Ketinggian 2.300 - 2.770 mdpl
              </h4>
              <p className="text-xs text-[#111318]/85 leading-relaxed mb-3">
                Kandungan oksigen di puncak Bromo sedikit lebih tipis daripada dataran rendah. Jangan berlari-lari tergesa saat menaiki tangga view point agar nafas tidak ngos-ngosan.
              </p>
              <div className="space-y-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Cukupi asupan air putih hangat sebelum berangkat trip.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Bawa minyak kayu putih, inhaler, dan obat pusing pribadi.</span>
                </div>
              </div>
            </div>

            <div className="bg-[#eaf2ff]/60 border border-[#3d72fe]/25 rounded-2xl p-6">
              <h4 className="text-sm font-bold text-[#102a56] mb-3 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-[#ffc928]" />
                Penderita Asma, Jantung & Lansia
              </h4>
              <p className="text-xs text-[#111318]/85 leading-relaxed mb-3">
                Bagi peserta lansia atau memiliki riwayat asma yang dipicu udara dingin, sangat disarankan menyewa kuda untuk menuju Kawah Bromo daripada memaksakan jalan kaki 1.5 km di pasir gembur.
              </p>
              <div className="space-y-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Jarak dari parkiran jeep ke tangga kawah dapat ditempuh naik kuda seharga Rp 150rb - Rp 200rb PP.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Driver kami siap mendampingi dan memantau kondisi seluruh keluarga.</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Etika Adat Suku Tengger */}
        {activeTab === 'etika' && (
          <div className="bg-[#eaf2ff]/60 border border-[#3d72fe]/25 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-[#3d72fe] font-bold text-sm mb-3">
              <Sparkles className="w-4 h-4 text-[#ffc928]" />
              <span className="text-[#102a56]">Etika Berwisata di Tanah Sakral Suku Tengger</span>
            </div>
            <p className="text-xs sm:text-sm text-[#111318]/85 leading-relaxed mb-6">
              Kawasan Bromo dan Pura Luhur Poten adalah tempat ibadah dan tanah suci leluhur masyarakat Hindu Tengger. Marilah kita menjaga kesopanan dan kelestarian alam:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#111318]/90">
              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs">
                <strong className="text-[#102a56] block mb-1">1. Dilarang Membuang Sampah Sembarangan</strong>
                Bawa kembali sampah plastik, puntung rokok, atau botol air Anda ke mobil Jeep. Kaldera adalah kawasan konservasi nasional TNBTS.
              </div>
              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs">
                <strong className="text-[#102a56] block mb-1">2. Menghormati Kawasan Pura Luhur Poten</strong>
                Tidak diperkenankan memanjat pagar pura atau memasuki area suci saat sedang berlangsung prosesi persembahyangan warga Tengger.
              </div>
              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs">
                <strong className="text-[#102a56] block mb-1">3. Sopan Santun Terhadap Sesaji Adat</strong>
                Jangan melangkahi, menendang, atau mengambil sesaji (canang sari / sesajen) yang diletakkan warga di lereng atau pintu masuk.
              </div>
              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs">
                <strong className="text-[#102a56] block mb-1">4. Menjaga Tutur Kata & Sikap</strong>
                Masyarakat Tengger menjunjung tinggi kedamaian hati (Bawera). Hindari berkata kotor, berteriak tanpa sopan santun, atau bertindak merusak alam.
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
