import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  CheckCircle2, 
  Clock, 
  XCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  Users, 
  FileText, 
  Image as ImageIcon, 
  Download, 
  ExternalLink, 
  X, 
  RefreshCw, 
  Check,
  Send,
  ShieldCheck,
  SunMedium
} from 'lucide-react';
import { StoredBookingRecord, updateBookingInFirestore } from '../../services/firestoreBookingService';
import { TOUR_PACKAGES } from '../../data/packagesData';
import { BookingFormState } from '../../types';
import { generateBookingInvoicePDF } from '../../utils/pdfInvoiceGenerator';
import { calculateBromoSchedule } from '../../utils/scheduleHelper';

interface AdminBookingsTabProps {
  bookings: StoredBookingRecord[];
  onRefresh: () => void;
  selectedBookingProp?: StoredBookingRecord | null;
  onClearSelectedProp?: () => void;
}

export const AdminBookingsTab: React.FC<AdminBookingsTabProps> = ({
  bookings,
  onRefresh,
  selectedBookingProp,
  onClearSelectedProp
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'ALL' | 'WAITING_DP' | 'DP_SUBMITTED' | 'VERIFIED' | 'CANCELLED'>('ALL');
  const [activeDetail, setActiveDetail] = useState<StoredBookingRecord | null>(selectedBookingProp || null);
  const [isUpdatingStatus, setIsUpdatingStatus] = useState(false);
  const [updateFeedback, setUpdateFeedback] = useState<string | null>(null);
  const [proofModalOpen, setProofModalOpen] = useState(false);

  // Sync if parent passes booking
  React.useEffect(() => {
    if (selectedBookingProp) {
      setActiveDetail(selectedBookingProp);
    }
  }, [selectedBookingProp]);

  const formatRupiah = (num: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0
    }).format(num || 0);
  };

  const filteredBookings = bookings.filter((item) => {
    const matchesStatus = statusFilter === 'ALL' || item.status === statusFilter;
    const term = searchTerm.toLowerCase();
    const matchesSearch =
      !term ||
      item.bookingCode.toLowerCase().includes(term) ||
      item.fullName.toLowerCase().includes(term) ||
      item.whatsappNumber.includes(term) ||
      item.email.toLowerCase().includes(term) ||
      item.packageTitle.toLowerCase().includes(term);

    return matchesStatus && matchesSearch;
  });

  const handleUpdateStatus = async (newStatus: 'WAITING_DP' | 'DP_SUBMITTED' | 'VERIFIED' | 'CANCELLED') => {
    if (!activeDetail) return;
    setIsUpdatingStatus(true);
    setUpdateFeedback(null);
    try {
      const res = await updateBookingInFirestore(activeDetail.bookingCode, { status: newStatus });
      if (res.success) {
        setActiveDetail({ ...activeDetail, status: newStatus });
        setUpdateFeedback(`Status berhasil diubah ke ${newStatus}`);
        onRefresh();
        setTimeout(() => setUpdateFeedback(null), 3500);
      } else {
        setUpdateFeedback(`Gagal: ${res.error}`);
      }
    } catch (err: any) {
      setUpdateFeedback(`Gagal: ${err.message}`);
    } finally {
      setIsUpdatingStatus(false);
    }
  };

  const handleQuickVerify = async (booking: StoredBookingRecord, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setIsUpdatingStatus(true);
    try {
      const res = await updateBookingInFirestore(booking.bookingCode, { status: 'VERIFIED' });
      if (res.success) {
        if (activeDetail && activeDetail.bookingCode === booking.bookingCode) {
          setActiveDetail({ ...activeDetail, status: 'VERIFIED' });
        }
        setUpdateFeedback(`Pembayaran ${booking.bookingCode} berhasil diverifikasi!`);
        onRefresh();
        setTimeout(() => setUpdateFeedback(null), 3500);
      }
    } catch (err: any) {
      console.error(err);
    } finally {
      setIsUpdatingStatus(false);
    }
  };

  const handleDownloadInvoice = (booking: StoredBookingRecord) => {
    const pkg = TOUR_PACKAGES.find(p => p.id === booking.packageId) || TOUR_PACKAGES[0];
    const formState: BookingFormState = {
      packageId: booking.packageId || pkg.id,
      startCity: pkg.startCity || 'malang',
      travelDate: booking.tripDate,
      paxCount: booking.paxCount,
      fullName: booking.fullName,
      whatsappNumber: booking.whatsappNumber,
      email: booking.email,
      pickupAddress: booking.pickupAddress,
      specialNotes: booking.specialNotes || '',
      includeDocumentation: !!booking.includeDocumentation,
      includeDrone: !!booking.includeDrone,
      isHighSeason: false,
      wnaCount: booking.wnaCount || 0,
      paymentMethod: (booking.paymentMethod as any) || 'bca',
      paymentProofName: booking.paymentProofName,
    };

    generateBookingInvoicePDF(
      pkg,
      formState,
      booking.bookingCode,
      booking.grandTotal,
      booking.downPayment
    );
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'VERIFIED':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
            <CheckCircle2 className="w-3 h-3" /> Dana Diterima (Terverifikasi)
          </span>
        );
      case 'DP_SUBMITTED':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
            <Clock className="w-3 h-3" /> DP Terkirim (Cek Mutasi)
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

  const getWaVerificationLink = (booking: StoredBookingRecord) => {
    const clean = booking.whatsappNumber.replace(/[^0-9]/g, '');
    const num = clean.startsWith('0') ? '62' + clean.slice(1) : (clean.startsWith('62') ? clean : '62' + clean);
    const sisa = (booking.grandTotal || 0) - (booking.downPayment || 0);

    const schedule = calculateBromoSchedule(booking.tripDate, {
      startCity: booking.startCity,
      packageId: booking.packageId,
      pickupAddress: booking.pickupAddress,
    });

    const message = 
`Halo Kak *${booking.fullName}*,

Kabar baik dari *WisataBromo.co (PT Global Travel Healing)*! 🌋
Pembayaran DP untuk reservasi Bromo Anda telah *KAMI TERIMA & TERVERIFIKASI*.

📋 *DETAIL RESERVASI RESMI:*
- Kode Booking: *${booking.bookingCode}*
- Paket: *${booking.packageTitle}*
- Tanggal Sunrise: *${schedule.sunriseDateFormatted}*
- Jadwal Penjemputan (Pickup): *${schedule.pickupScheduleFull}*
- Peserta: *${booking.paxCount} Domestik ${booking.wnaCount ? `+ ${booking.wnaCount} WNA` : ''}*
- Titik Jemput: *${booking.pickupAddress}*
- DP Diterima: *${formatRupiah(booking.downPayment)}* (Lunas)
- Sisa Pelunasan: *${formatRupiah(sisa)}* (saat penjemputan)
- Status: ✅ *TERKONFIRMASI (CONFIRMED)*

Driver & tim operasional Jeep kami akan menghubungi Anda via WhatsApp H-1 sebelum penjemputan untuk koordinasi jam penjemputan dan nomor armada.

Terima kasih atas kepercayaannya bersama WisataBromo.co!`;

    return `https://wa.me/${num}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Top Header & Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs">
        <div className="flex-1 relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Cari kode booking, nama customer, no. WA, email..."
            className="w-full pl-10 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition"
          />
        </div>

        <div className="flex items-center gap-2">
          <div className="relative">
            <select
              value={statusFilter}
              onChange={(e: any) => setStatusFilter(e.target.value)}
              className="appearance-none bg-slate-50 border border-slate-200 rounded-xl py-2 pl-3 pr-8 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
            >
              <option value="ALL">Semua Status</option>
              <option value="WAITING_DP">Menunggu DP</option>
              <option value="DP_SUBMITTED">DP Terkirim</option>
              <option value="VERIFIED">Terverifikasi</option>
              <option value="CANCELLED">Dibatalkan</option>
            </select>
            <Filter className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          <button
            onClick={onRefresh}
            className="p-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl border border-slate-200 transition cursor-pointer"
            title="Refresh Data"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Table */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
        <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between">
          <h2 className="text-base font-bold text-slate-900">
            Daftar Reservasi ({filteredBookings.length} ditemukan)
          </h2>
          <span className="text-xs text-slate-400">Database Firestore Realtime</span>
        </div>

        {filteredBookings.length === 0 ? (
          <div className="p-12 text-center text-slate-400 text-sm">
            Tidak ada reservasi yang sesuai dengan pencarian atau filter.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50/75 text-[11px] font-bold text-slate-500 uppercase tracking-wider border-b border-slate-100">
                <tr>
                  <th className="py-3 px-4">Kode Booking</th>
                  <th className="py-3 px-4">Nama Customer</th>
                  <th className="py-3 px-4">Kontak</th>
                  <th className="py-3 px-4">Paket Tour</th>
                  <th className="py-3 px-4">Tanggal Trip</th>
                  <th className="py-3 px-4">Total / DP</th>
                  <th className="py-3 px-4">Bukti DP</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Aksi & Konfirmasi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {filteredBookings.map((item) => (
                  <tr 
                    key={item.bookingCode} 
                    className={`hover:bg-slate-50/70 transition cursor-pointer ${activeDetail?.bookingCode === item.bookingCode ? 'bg-blue-50/40' : ''}`}
                    onClick={() => setActiveDetail(item)}
                  >
                    <td className="py-3.5 px-4 font-mono font-bold text-xs text-blue-900">
                      {item.bookingCode}
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-slate-900">
                      {item.fullName}
                    </td>
                    <td className="py-3.5 px-4 text-xs">
                      <div className="text-slate-800 font-medium">{item.whatsappNumber}</div>
                      <div className="text-slate-400 text-[11px] truncate max-w-[130px]">{item.email}</div>
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="text-xs font-semibold text-slate-800 line-clamp-1 max-w-[180px]">
                        {item.packageTitle}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {item.paxCount} Domestik {item.wnaCount ? `+ ${item.wnaCount} WNA` : ''}
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-xs font-medium text-slate-700 whitespace-nowrap">
                      {(() => {
                        const sched = calculateBromoSchedule(item.tripDate, {
                          startCity: item.startCity,
                          packageId: item.packageId,
                          pickupAddress: item.pickupAddress,
                        });
                        return (
                          <div>
                            <div className="font-bold text-slate-900 flex items-center gap-1">
                              <SunMedium className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                              <span>{sched.sunriseDateSimple || item.tripDate}</span>
                            </div>
                            <div className="text-[11px] text-blue-700 flex items-center gap-1 mt-0.5 font-medium">
                              <Clock className="w-3 h-3 text-blue-500 shrink-0" />
                              <span>{sched.pickupScheduleFull}</span>
                            </div>
                          </div>
                        );
                      })()}
                    </td>
                    <td className="py-3.5 px-4 text-xs">
                      <div className="font-bold text-slate-900">{formatRupiah(item.grandTotal)}</div>
                      <div className="text-emerald-600 text-[11px] font-semibold">DP: {formatRupiah(item.downPayment)}</div>
                    </td>
                    <td className="py-3.5 px-4 text-xs">
                      {item.paymentProofDataUrl || item.paymentProofName ? (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveDetail(item);
                            setProofModalOpen(true);
                          }}
                          className="inline-flex items-center gap-1 text-emerald-700 font-semibold bg-emerald-50 hover:bg-emerald-100 px-2 py-0.5 rounded-md text-[11px] border border-emerald-200 transition"
                        >
                          <ImageIcon className="w-3 h-3 text-emerald-600" /> Lihat Bukti
                        </button>
                      ) : (
                        <span className="text-slate-400 text-[11px] italic">Belum ada</span>
                      )}
                    </td>
                    <td className="py-3.5 px-4">
                      {getStatusBadge(item.status)}
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <div className="flex items-center justify-end gap-1.5" onClick={(e) => e.stopPropagation()}>
                        {item.status !== 'VERIFIED' ? (
                          <button
                            onClick={(e) => handleQuickVerify(item, e)}
                            disabled={isUpdatingStatus}
                            className="px-2.5 py-1.5 text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg flex items-center gap-1 transition shadow-xs"
                            title="Konfirmasi Dana Diterima"
                          >
                            <ShieldCheck className="w-3.5 h-3.5" /> Terima DP
                          </button>
                        ) : (
                          <a
                            href={getWaVerificationLink(item)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-2.5 py-1.5 text-xs font-bold bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 rounded-lg flex items-center gap-1 transition"
                            title="Kirim Konfirmasi WA"
                          >
                            <Send className="w-3.5 h-3.5" /> WA Konfirmasi
                          </a>
                        )}

                        <button
                          onClick={() => setActiveDetail(item)}
                          className="px-2.5 py-1.5 text-xs font-semibold bg-slate-100 hover:bg-blue-600 hover:text-white rounded-lg transition"
                        >
                          Detail
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Booking Detail Modal / Drawer */}
      {activeDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl w-full max-w-2xl shadow-2xl border border-slate-100 overflow-hidden my-8 max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="bg-[#102a56] text-white p-5 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/10 rounded-xl">
                  <FileText className="w-5 h-5 text-blue-200" />
                </div>
                <div>
                  <div className="text-xs text-blue-200 font-medium">Detail Reservasi Wisata Bromo</div>
                  <div className="text-lg font-bold font-mono">{activeDetail.bookingCode}</div>
                </div>
              </div>

              <button
                onClick={() => {
                  setActiveDetail(null);
                  if (onClearSelectedProp) onClearSelectedProp();
                }}
                className="p-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto space-y-6">
              {updateFeedback && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-xl flex items-center gap-2 font-medium">
                  <Check className="w-4 h-4 text-emerald-600" />
                  {updateFeedback}
                </div>
              )}

              {/* Status & Prominent Verification Bar */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Status Reservasi:</div>
                    <div className="mt-1">{getStatusBadge(activeDetail.status)}</div>
                  </div>

                  <div className="flex items-center gap-2">
                    <label className="text-xs font-semibold text-slate-700">Ubah Status:</label>
                    <select
                      disabled={isUpdatingStatus}
                      value={activeDetail.status}
                      onChange={(e: any) => handleUpdateStatus(e.target.value)}
                      className="text-xs font-semibold bg-white border border-slate-300 rounded-lg px-3 py-1.5 focus:ring-2 focus:ring-blue-600/20 focus:outline-none cursor-pointer"
                    >
                      <option value="WAITING_DP">Menunggu DP (WAITING_DP)</option>
                      <option value="DP_SUBMITTED">DP Terkirim (DP_SUBMITTED)</option>
                      <option value="VERIFIED">Terverifikasi (VERIFIED)</option>
                      <option value="CANCELLED">Dibatalkan (CANCELLED)</option>
                    </select>
                  </div>
                </div>

                {/* Instant Verification Quick Action Box */}
                <div className="pt-3 border-t border-slate-200 flex flex-wrap items-center gap-2">
                  {activeDetail.status !== 'VERIFIED' ? (
                    <button
                      type="button"
                      disabled={isUpdatingStatus}
                      onClick={() => handleUpdateStatus('VERIFIED')}
                      className="flex-1 min-w-[200px] py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition shadow-md shadow-emerald-600/20 cursor-pointer"
                    >
                      <ShieldCheck className="w-4 h-4" />
                      Konfirmasi Dana DP Diterima (Verifikasi)
                    </button>
                  ) : (
                    <div className="flex-1 flex items-center gap-2">
                      <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-2 rounded-xl border border-emerald-200 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        Pembayaran DP sudah diverifikasi
                      </span>
                    </div>
                  )}

                  {/* Send WhatsApp Confirmation */}
                  <a
                    href={getWaVerificationLink(activeDetail)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-4 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs rounded-xl flex items-center gap-2 transition shadow-md shadow-green-600/20"
                  >
                    <Send className="w-4 h-4" />
                    Kirim Konfirmasi WA
                  </a>

                  {/* Download Official PDF Invoice */}
                  <button
                    type="button"
                    onClick={() => handleDownloadInvoice(activeDetail)}
                    className="py-2.5 px-4 bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs rounded-xl flex items-center gap-2 transition cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    Unduh Invoice PDF
                  </button>
                </div>
              </div>

              {/* Customer Profile */}
              <div>
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">1. Data Pemesan</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="text-xs text-slate-400">Nama Lengkap</div>
                    <div className="font-bold text-slate-900 mt-0.5">{activeDetail.fullName}</div>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-slate-400">WhatsApp</div>
                      <div className="font-bold text-slate-900 mt-0.5">{activeDetail.whatsappNumber}</div>
                    </div>
                    <a
                      href={getWaVerificationLink(activeDetail)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 transition"
                    >
                      <Phone className="w-3.5 h-3.5" /> Hubungi WA
                    </a>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="text-xs text-slate-400">Email Customer</div>
                    <div className="font-medium text-slate-900 mt-0.5 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-slate-400" />
                      {activeDetail.email}
                    </div>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="text-xs text-slate-400">Titik Penjemputan</div>
                    <div className="font-medium text-slate-900 mt-0.5 flex items-start gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                      <span>{activeDetail.pickupAddress}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trip Package Details */}
              <div>
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">2. Paket & Jadwal Trip</h3>
                {(() => {
                  const sched = calculateBromoSchedule(activeDetail.tripDate, {
                    startCity: activeDetail.startCity,
                    packageId: activeDetail.packageId,
                    pickupAddress: activeDetail.pickupAddress,
                  });
                  return (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 sm:col-span-2">
                        <div className="text-xs text-slate-400">Paket Wisata</div>
                        <div className="font-bold text-slate-900 mt-0.5 text-base">{activeDetail.packageTitle}</div>
                      </div>

                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                        <div className="text-xs text-slate-400">Tanggal Golden Sunrise</div>
                        <div className="font-bold text-amber-700 mt-0.5 flex items-center gap-1.5">
                          <SunMedium className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                          <span>{sched.sunriseDateFormatted || activeDetail.tripDate} (05.00 WIB)</span>
                        </div>
                      </div>

                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                        <div className="text-xs text-slate-400">Jadwal Penjemputan (Pickup)</div>
                        <div className="font-bold text-blue-700 mt-0.5 flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                          <span>{sched.pickupScheduleFull}</span>
                        </div>
                      </div>

                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 sm:col-span-2">
                        <div className="text-xs text-slate-400">Jumlah Peserta</div>
                        <div className="font-bold text-slate-900 mt-0.5 flex items-center gap-1.5">
                          <Users className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                          {activeDetail.paxCount} Domestik {activeDetail.wnaCount ? `+ ${activeDetail.wnaCount} WNA` : ''}
                        </div>
                      </div>

                      {activeDetail.specialNotes && (
                        <div className="p-3 bg-amber-50/50 rounded-xl border border-amber-200/60 sm:col-span-2">
                          <div className="text-xs text-amber-700 font-semibold">Catatan Khusus Tamu</div>
                          <div className="text-xs text-slate-700 mt-1 italic leading-relaxed">
                            "{activeDetail.specialNotes}"
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })()}
              </div>

              {/* Finance & Payment Proof */}
              <div>
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">3. Pembayaran & Bukti Transfer</h3>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Total Biaya Trip:</span>
                    <span className="font-bold text-slate-900">{formatRupiah(activeDetail.grandTotal)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Uang Muka (DP 30%):</span>
                    <span className="font-bold text-emerald-600 text-base">{formatRupiah(activeDetail.downPayment)}</span>
                  </div>
                  <div className="flex justify-between text-xs text-slate-500 pt-2 border-t border-slate-200">
                    <span>Metode Pembayaran:</span>
                    <span className="font-semibold uppercase">{activeDetail.paymentMethod}</span>
                  </div>

                  {/* Payment proof preview */}
                  <div className="mt-4 pt-3 border-t border-slate-200">
                    <div className="text-xs font-semibold text-slate-700 mb-2">File Bukti Transfer:</div>
                    {activeDetail.paymentProofDataUrl ? (
                      <div className="space-y-3">
                        <div 
                          className="relative border border-slate-200 rounded-xl overflow-hidden bg-white max-h-60 flex items-center justify-center cursor-pointer group"
                          onClick={() => setProofModalOpen(true)}
                        >
                          <img
                            src={activeDetail.paymentProofDataUrl}
                            alt="Bukti Transfer"
                            className="object-contain max-h-56 w-auto transition group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-xs font-semibold transition">
                            Klik untuk Memperbesar
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => setProofModalOpen(true)}
                            className="px-3 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition cursor-pointer"
                          >
                            <ExternalLink className="w-3.5 h-3.5" /> Lihat Ukuran Penuh
                          </button>
                          <a
                            href={activeDetail.paymentProofDataUrl}
                            download={activeDetail.paymentProofName || `bukti-${activeDetail.bookingCode}.jpg`}
                            className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 transition"
                          >
                            <Download className="w-3.5 h-3.5" /> Unduh Gambar
                          </a>
                        </div>
                      </div>
                    ) : (
                      <div className="text-xs text-slate-400 italic bg-white p-3 rounded-lg border border-slate-200 text-center">
                        Customer belum mengunggah bukti transfer DP pada saat booking.
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between shrink-0">
              <span className="text-[11px] text-slate-400">
                Waktu Booking: {activeDetail.createdAt || '-'}
              </span>
              <button
                onClick={() => {
                  setActiveDetail(null);
                  if (onClearSelectedProp) onClearSelectedProp();
                }}
                className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold text-xs rounded-xl transition cursor-pointer"
              >
                Tutup Detail
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Proof Zoom Modal */}
      {proofModalOpen && activeDetail?.paymentProofDataUrl && (
        <div 
          className="fixed inset-0 z-60 bg-black/90 flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setProofModalOpen(false)}
        >
          <div className="relative max-w-4xl max-h-[90vh] overflow-hidden" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setProofModalOpen(false)}
              className="absolute top-3 right-3 p-2 bg-black/60 hover:bg-black text-white rounded-full transition"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={activeDetail.paymentProofDataUrl}
              alt="Bukti Transfer Penuh"
              className="max-h-[85vh] max-w-full rounded-xl object-contain shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};
