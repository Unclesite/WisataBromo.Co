import React from 'react';
import { 
  Users, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  TrendingUp, 
  ArrowRight,
  Wallet,
  Calendar,
  Sparkles
} from 'lucide-react';
import { StoredBookingRecord } from '../../services/firestoreBookingService';

interface AdminDashboardTabProps {
  bookings: StoredBookingRecord[];
  onSelectBooking: (booking: StoredBookingRecord) => void;
  onNavigateToBookings: () => void;
}

export const AdminDashboardTab: React.FC<AdminDashboardTabProps> = ({
  bookings,
  onSelectBooking,
  onNavigateToBookings
}) => {
  const formatRupiah = (num: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0
    }).format(num || 0);
  };

  const totalBookings = bookings.length;
  const waitingDp = bookings.filter(b => b.status === 'WAITING_DP').length;
  const dpSubmitted = bookings.filter(b => b.status === 'DP_SUBMITTED').length;
  const verified = bookings.filter(b => b.status === 'VERIFIED').length;
  const cancelled = bookings.filter(b => b.status === 'CANCELLED').length;

  const totalRevenue = bookings
    .filter(b => b.status !== 'CANCELLED')
    .reduce((sum, b) => sum + (Number(b.grandTotal) || 0), 0);

  const dpCollected = bookings
    .filter(b => b.status === 'DP_SUBMITTED' || b.status === 'VERIFIED')
    .reduce((sum, b) => sum + (Number(b.downPayment) || 0), 0);

  const recentBookings = bookings.slice(0, 6);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'VERIFIED':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
            <CheckCircle2 className="w-3 h-3" /> Terverifikasi
          </span>
        );
      case 'DP_SUBMITTED':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
            <Clock className="w-3 h-3" /> DP Terkirim
          </span>
        );
      case 'CANCELLED':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-600 border border-slate-200">
            <XCircle className="w-3 h-3" /> Dibatalkan
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">
            <Clock className="w-3 h-3" /> Menunggu DP
          </span>
        );
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Top Banner Summary */}
      <div className="bg-gradient-to-r from-[#102a56] to-[#1e3a8a] rounded-2xl p-6 sm:p-8 text-white shadow-xl shadow-blue-950/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-blue-200 text-xs font-semibold mb-3 border border-white/15">
            <Sparkles className="w-3.5 h-3.5" />
            Ringkasan Operasional Realtime
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Dashboard Reservasi</h1>
          <p className="text-blue-100/80 text-sm mt-1 max-w-xl">
            Pantau seluruh data reservasi turis Bromo, konfirmasi bukti transfer DP, dan status armada Jeep secara terpusat.
          </p>
        </div>

        <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/15">
          <div className="p-3 bg-emerald-500/20 text-emerald-300 rounded-lg">
            <Wallet className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs text-blue-200 font-medium">Estimasi Nilai Reservasi</div>
            <div className="text-xl sm:text-2xl font-black text-white tracking-tight">
              {formatRupiah(totalRevenue)}
            </div>
            <div className="text-[11px] text-emerald-300 font-medium mt-0.5">
              DP Terkumpul: {formatRupiah(dpCollected)}
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Total Reservasi</span>
            <Users className="w-4 h-4 text-blue-600" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            {totalBookings}
          </div>
          <div className="text-[11px] text-slate-400 mt-1">Keseluruhan data tercatat</div>
        </div>

        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition">
          <div className="flex items-center justify-between text-amber-600 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Menunggu DP</span>
            <Clock className="w-4 h-4" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-amber-600 tracking-tight">
            {waitingDp}
          </div>
          <div className="text-[11px] text-slate-400 mt-1">Belum setor bukti transfer</div>
        </div>

        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition">
          <div className="flex items-center justify-between text-blue-600 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">DP Terkirim</span>
            <TrendingUp className="w-4 h-4" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-blue-600 tracking-tight">
            {dpSubmitted}
          </div>
          <div className="text-[11px] text-blue-600/80 font-medium mt-1">Perlu diverifikasi Admin</div>
        </div>

        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition">
          <div className="flex items-center justify-between text-emerald-600 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Terverifikasi</span>
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-emerald-600 tracking-tight">
            {verified}
          </div>
          <div className="text-[11px] text-slate-400 mt-1">Jadwal trip siap berangkat</div>
        </div>

        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition col-span-2 sm:col-span-1">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Dibatalkan</span>
            <XCircle className="w-4 h-4" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-slate-600 tracking-tight">
            {cancelled}
          </div>
          <div className="text-[11px] text-slate-400 mt-1">Pesanan tidak dilanjutkan</div>
        </div>
      </div>

      {/* Recent Bookings Table */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
        <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900">Reservasi Terbaru</h2>
            <p className="text-xs text-slate-500 mt-0.5">Daftar booking yang baru masuk dari website</p>
          </div>
          <button
            onClick={onNavigateToBookings}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 transition cursor-pointer"
          >
            Lihat Semua ({totalBookings})
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {recentBookings.length === 0 ? (
          <div className="p-12 text-center text-slate-400 text-sm">
            Belum ada data reservasi masuk di database Firestore.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50/75 text-[11px] font-bold text-slate-500 uppercase tracking-wider border-b border-slate-100">
                <tr>
                  <th className="py-3 px-4">Kode Booking</th>
                  <th className="py-3 px-4">Customer</th>
                  <th className="py-3 px-4">Paket Tour</th>
                  <th className="py-3 px-4">Tanggal Trip</th>
                  <th className="py-3 px-4">Total / DP</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {recentBookings.map((item) => (
                  <tr key={item.bookingCode} className="hover:bg-slate-50/60 transition">
                    <td className="py-3.5 px-4 font-mono font-bold text-xs text-blue-900">
                      {item.bookingCode}
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="font-semibold text-slate-900">{item.fullName}</div>
                      <div className="text-xs text-slate-400">{item.whatsappNumber}</div>
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="text-xs font-medium text-slate-800 line-clamp-1 max-w-[200px]">
                        {item.packageTitle}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {item.paxCount} Domestik {item.wnaCount ? `+ ${item.wnaCount} WNA` : ''}
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-xs">
                      <div className="inline-flex items-center gap-1 font-medium text-slate-700">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        {item.tripDate}
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-xs font-semibold">
                      <div className="text-slate-900">{formatRupiah(item.grandTotal)}</div>
                      <div className="text-[11px] text-emerald-600 font-bold">
                        DP: {formatRupiah(item.downPayment)}
                      </div>
                    </td>
                    <td className="py-3.5 px-4">
                      {getStatusBadge(item.status)}
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <button
                        onClick={() => onSelectBooking(item)}
                        className="px-3 py-1.5 text-xs font-semibold text-blue-600 hover:bg-blue-50 rounded-lg transition cursor-pointer"
                      >
                        Detail
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};
