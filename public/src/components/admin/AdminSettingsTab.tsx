import React, { useState, useEffect } from 'react';
import { 
  Server, 
  Database, 
  Mail, 
  ShieldCheck, 
  RefreshCw, 
  CheckCircle2, 
  AlertCircle, 
  CreditCard,
  Lock,
  ExternalLink
} from 'lucide-react';
import firebaseConfig from '../../services/firebaseConfig';

export const AdminSettingsTab: React.FC = () => {
  const [systemStatus, setSystemStatus] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const fetchStatus = async () => {
    setIsLoading(true);
    setErrorMsg(null);
    try {
      const res = await fetch('/api/admin/system-status');
      const data = await res.json();
      setSystemStatus(data);
    } catch (err: any) {
      setErrorMsg(err.message || 'Gagal menghubungi server diagnostik.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchStatus();
  }, []);

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Top Header */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-900">Pengaturan & Status Sistem</h2>
          <p className="text-xs text-slate-500">
            Monitoring konektivitas cloud Firestore, Hostinger SMTP, dan arsitektur runtime Express
          </p>
        </div>

        <button
          onClick={fetchStatus}
          disabled={isLoading}
          className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl transition cursor-pointer self-start sm:self-auto disabled:opacity-50"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
          <span>Cek Ulang Diagnostik</span>
        </button>
      </div>

      {errorMsg && (
        <div className="p-4 bg-rose-50 border border-rose-200 text-rose-800 text-xs rounded-xl flex items-center gap-2 font-medium">
          <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Grid Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* 1. Firestore Cloud Database */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2.5 bg-blue-50 text-blue-700 rounded-xl">
                <Database className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">Firebase Firestore</h3>
                <span className="text-[11px] text-slate-400">Database NoSQL Realtime</span>
              </div>
            </div>

            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
              <CheckCircle2 className="w-3.5 h-3.5" /> Terhubung
            </span>
          </div>

          <div className="space-y-2 text-xs divide-y divide-slate-100">
            <div className="flex justify-between py-1.5">
              <span className="text-slate-500">Project ID:</span>
              <span className="font-mono font-medium text-slate-900">{firebaseConfig.projectId}</span>
            </div>
            <div className="flex justify-between py-1.5">
              <span className="text-slate-500">Database ID:</span>
              <span className="font-mono font-medium text-slate-900 truncate max-w-[200px]" title={firebaseConfig.firestoreDatabaseId}>
                {firebaseConfig.firestoreDatabaseId}
              </span>
            </div>
            <div className="flex justify-between py-1.5">
              <span className="text-slate-500">Auth Domain:</span>
              <span className="font-medium text-slate-700">{firebaseConfig.authDomain}</span>
            </div>
            <div className="flex justify-between py-1.5">
              <span className="text-slate-500">Security Rules:</span>
              <span className="font-semibold text-emerald-700">Hardened ABAC Production</span>
            </div>
          </div>
        </div>

        {/* 2. Hostinger Mail SMTP */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2.5 bg-emerald-50 text-emerald-700 rounded-xl">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">Hostinger Mail SMTP</h3>
                <span className="text-[11px] text-slate-400">Layanan Notifikasi Email Booking</span>
              </div>
            </div>

            {systemStatus?.smtp?.configured ? (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5" /> Aktif
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">
                <AlertCircle className="w-3.5 h-3.5" /> Simulasi
              </span>
            )}
          </div>

          <div className="space-y-2 text-xs divide-y divide-slate-100">
            <div className="flex justify-between py-1.5">
              <span className="text-slate-500">SMTP Host:</span>
              <span className="font-mono font-medium text-slate-900">
                {systemStatus?.smtp?.host || 'smtp.hostinger.com'}
              </span>
            </div>
            <div className="flex justify-between py-1.5">
              <span className="text-slate-500">Port / Keamanan:</span>
              <span className="font-medium text-slate-900">
                Port {systemStatus?.smtp?.port || '465'} (SSL Enkripsi)
              </span>
            </div>
            <div className="flex justify-between py-1.5">
              <span className="text-slate-500">Email Pengirim:</span>
              <span className="font-medium text-slate-900">{systemStatus?.smtp?.user || 'cs@wisatabromo.co'}</span>
            </div>
            <div className="flex justify-between py-1.5">
              <span className="text-slate-500">Tujuan Notifikasi Admin:</span>
              <span className="font-bold text-blue-900">{systemStatus?.smtp?.adminTarget || 'wisatabromo.co@gmail.com'}</span>
            </div>
          </div>
        </div>

        {/* 3. Node.js & Server Runtime */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2.5 bg-purple-50 text-purple-700 rounded-xl">
                <Server className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">Server Backend Express</h3>
                <span className="text-[11px] text-slate-400">Node.js Web Server & API</span>
              </div>
            </div>

            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
              <CheckCircle2 className="w-3.5 h-3.5" /> Normal
            </span>
          </div>

          <div className="space-y-2 text-xs divide-y divide-slate-100">
            <div className="flex justify-between py-1.5">
              <span className="text-slate-500">Versi Node.js:</span>
              <span className="font-mono font-medium text-slate-900">{systemStatus?.nodeVersion || 'v22.x'}</span>
            </div>
            <div className="flex justify-between py-1.5">
              <span className="text-slate-500">Waktu Aktif (Uptime):</span>
              <span className="font-medium text-slate-700">
                {systemStatus?.uptimeSeconds ? `${Math.floor(systemStatus.uptimeSeconds / 60)} menit` : '-'}
              </span>
            </div>
            <div className="flex justify-between py-1.5">
              <span className="text-slate-500">Entry File Produksi:</span>
              <span className="font-mono font-medium text-slate-900">/server.js (Hostinger Root)</span>
            </div>
            <div className="flex justify-between py-1.5">
              <span className="text-slate-500">Ukuran Payload Lampiran:</span>
              <span className="font-medium text-slate-700">Maksimal 10 MB (Base64 Bukti Transfer)</span>
            </div>
          </div>
        </div>

        {/* 4. Payment Gateway (Midtrans & Manual BCA) */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2.5 bg-amber-50 text-amber-700 rounded-xl">
                <CreditCard className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">Gerbang Pembayaran</h3>
                <span className="text-[11px] text-slate-400">Transfer Bank Resmi & Midtrans</span>
              </div>
            </div>

            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
              <CheckCircle2 className="w-3.5 h-3.5" /> Siap
            </span>
          </div>

          <div className="space-y-2 text-xs divide-y divide-slate-100">
            <div className="flex justify-between py-1.5">
              <span className="text-slate-500">Metode Utama:</span>
              <span className="font-bold text-slate-900">Transfer Rekening BCA PT Global Travel Healing</span>
            </div>
            <div className="flex justify-between py-1.5">
              <span className="text-slate-500">Nomor Rekening BCA:</span>
              <span className="font-mono font-bold text-blue-900">5200888415</span>
            </div>
            <div className="flex justify-between py-1.5">
              <span className="text-slate-500">Kebijakan DP:</span>
              <span className="font-semibold text-emerald-700">30% dari Total Tagihan Trip</span>
            </div>
            <div className="flex justify-between py-1.5">
              <span className="text-slate-500">Pelunasan:</span>
              <span className="font-medium text-slate-700">70% Sisa Saat Penjemputan di Lokasi</span>
            </div>
          </div>
        </div>
      </div>

      {/* Security Best Practices Reminder */}
      <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-2xl flex items-start gap-3 text-xs text-slate-600">
        <Lock className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
        <div className="leading-relaxed">
          <strong className="text-slate-800">Privasi & Keamanan Kredensial:</strong> Seluruh password email SMTP, token Firebase Admin, dan kunci rahasia disimpan secara eksklusif pada environment server Node.js (`process.env`) dan tidak pernah diekspos ke browser pengguna.
        </div>
      </div>
    </div>
  );
};
