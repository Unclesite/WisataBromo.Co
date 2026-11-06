import React, { useRef, useState } from 'react';
import { TourPackage, BookingFormState } from '../types';
import { 
  CheckCircle2, CreditCard, Copy, Check, Upload, Download, 
  Send, X, ArrowLeft, RefreshCw, FileText, AlertCircle, ShieldCheck
} from 'lucide-react';
import { OFFICIAL_PAYMENT_ACCOUNTS } from '../data/paymentConfig';

interface BookingPaymentStepProps {
  bookingCode: string;
  currentPkg: TourPackage;
  form: BookingFormState;
  grandTotal: number;
  downPaymentEstimated: number;
  tripSchedule: any;
  isUploadingProof: boolean;
  proofUploadSuccess: boolean;
  formErrors: Record<string, string>;
  onUploadProof: (e: React.FormEvent) => void;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemoveProof: () => void;
  onSelectPaymentMethod: (method: string) => void;
  onBackToForm: () => void;
  onClose: () => void;
  onDownloadInvoice: () => void;
}

export const BookingPaymentStep: React.FC<BookingPaymentStepProps> = ({
  bookingCode,
  currentPkg,
  form,
  grandTotal,
  downPaymentEstimated,
  tripSchedule,
  isUploadingProof,
  proofUploadSuccess,
  formErrors,
  onUploadProof,
  onFileChange,
  onRemoveProof,
  onSelectPaymentMethod,
  onBackToForm,
  onClose,
  onDownloadInvoice,
}) => {
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedAccount(id);
    setTimeout(() => setCopiedAccount(null), 2500);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(bookingCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  const remainingPayment = Math.max(0, grandTotal - downPaymentEstimated);

  const whatsappMessage = encodeURIComponent(
    `Halo Admin WisataBromo.co, saya ingin konfirmasi pembayaran DP untuk reservasi trip Bromo:\n` +
    `- Kode Booking: *${bookingCode}*\n` +
    `- Paket: *${currentPkg.title}*\n` +
    `- Nama: *${form.fullName}*\n` +
    `- Tanggal Trip: *${tripSchedule.sunriseDateFormatted || form.travelDate}*\n` +
    `- Total Biaya: *${formatRupiah(grandTotal)}*\n` +
    `- Nominal DP 30%: *${formatRupiah(downPaymentEstimated)}*\n\n` +
    `Mohon verifikasi reservasi saya. Terima kasih!`
  );

  return (
    <div className="p-4 sm:p-8 space-y-6 animate-fadeIn">
      {/* Top Banner Status */}
      <div className="text-center">
        <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3 shadow-xs">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <span className="text-[11px] font-black text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider border border-emerald-200">
          Data Reservasi Tersimpan
        </span>
        <h2 className="text-xl sm:text-2xl font-black text-[#102a56] mt-2">
          Instruksi Pembayaran DP &amp; Bukti Transfer
        </h2>
        <p className="text-xs text-slate-600 max-w-lg mx-auto mt-1 leading-relaxed">
          Halo <strong>{form.fullName}</strong>, silakan lakukan transfer pembayaran DP 30% untuk mengunci jadwal trip, armada Jeep, dan tiket resmi TNBTS.
        </p>
      </div>

      {/* Booking Code Banner */}
      <div className="p-4 sm:p-5 bg-[#e5f4ff] rounded-2xl border border-[#0996f5]/30 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xs">
        <div>
          <div className="text-[11px] font-bold text-[#0996f5] uppercase tracking-wider">
            Kode Reservasi Resmi
          </div>
          <div className="font-mono font-black text-xl sm:text-2xl text-[#102a56]">
            {bookingCode}
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
          <button
            type="button"
            onClick={onDownloadInvoice}
            className="px-3.5 py-2 rounded-xl bg-[#0996f5] text-white hover:bg-[#102a56] font-bold text-xs transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs active:scale-95"
            title="Unduh Invoice PDF"
          >
            <Download className="w-4 h-4 text-[#ffc928]" />
            <span>Download Invoice PDF</span>
          </button>

          <button
            type="button"
            onClick={handleCopyCode}
            className="px-3.5 py-2 rounded-xl bg-white text-[#0996f5] font-bold text-xs border border-[#0996f5]/20 hover:bg-[#e5f4ff] transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            {copiedCode ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            <span>{copiedCode ? 'Tersalin' : 'Salin Kode'}</span>
          </button>
        </div>
      </div>

      {/* Financial Breakdown Card */}
      <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200 space-y-2.5">
        <h3 className="text-xs font-black text-slate-500 uppercase tracking-wider mb-2">
          Rincian Pembayaran
        </h3>
        <div className="flex justify-between text-xs sm:text-sm">
          <span className="text-slate-600">Paket Wisata: {currentPkg.title} ({form.paxCount} {currentPkg.category === 'trail' ? 'Unit' : 'Pax'})</span>
          <span className="font-bold text-[#102a56]">{formatRupiah(grandTotal)}</span>
        </div>
        <div className="flex justify-between text-xs sm:text-sm">
          <span className="text-slate-600">Tanggal Trip / Sunrise:</span>
          <span className="font-semibold text-blue-700">{tripSchedule.sunriseDateFormatted || form.travelDate}</span>
        </div>
        <div className="flex justify-between text-xs sm:text-sm">
          <span className="text-slate-600">Titik Penjemputan:</span>
          <span className="font-semibold text-slate-800 truncate max-w-[220px]">{form.pickupAddress}</span>
        </div>
        <div className="pt-2.5 border-t border-slate-200 flex justify-between text-sm font-bold text-[#102a56]">
          <span>Total Biaya Trip:</span>
          <span>{formatRupiah(grandTotal)}</span>
        </div>
        <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-300/80 flex justify-between items-center text-sm font-black text-emerald-950 mt-1">
          <span>Kewajiban Transfer DP 30%:</span>
          <span className="text-base sm:text-lg text-emerald-700 font-mono font-black">
            {formatRupiah(downPaymentEstimated)}
          </span>
        </div>
        <div className="flex justify-between text-[11px] text-slate-500 pt-1">
          <span>Sisa Pelunasan (70%):</span>
          <span className="font-semibold">{formatRupiah(remainingPayment)} (dibayarkan saat hari H bertemu driver/guide)</span>
        </div>
      </div>

      {/* Official Bank Account Cards */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs font-black text-slate-700 uppercase tracking-wider">
          <span className="flex items-center gap-1.5">
            <CreditCard className="w-4 h-4 text-[#0996f5]" />
            <span>Rekening Resmi Pembayaran PT Global Travel Healing:</span>
          </span>
          <span className="text-[10px] text-emerald-700 font-bold bg-emerald-100 px-2 py-0.5 rounded">Rekening Resmi PT</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {OFFICIAL_PAYMENT_ACCOUNTS.map((acc) => (
            <div
              key={acc.id}
              className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-[#0996f5] shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-black text-[#102a56]">{acc.bankName}</span>
                  {acc.badge && (
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      {acc.badge}
                    </span>
                  )}
                </div>
                <div className="font-mono font-black text-lg text-[#0996f5] tracking-wider my-1">
                  {acc.accountNumber}
                </div>
                <div className="text-[11px] text-slate-500">
                  a/n {acc.accountHolder}
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleCopy(acc.accountNumber, acc.id)}
                className="mt-3 w-full py-2 bg-[#e5f4ff] hover:bg-[#0996f5] text-[#0996f5] hover:text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                {copiedAccount === acc.id ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedAccount === acc.id ? 'Tersalin' : `Salin No. ${acc.bankName}`}</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Payment Proof Upload Section */}
      <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Upload className="w-4 h-4 text-[#0996f5]" />
            <h3 className="text-xs sm:text-sm font-black text-[#102a56]">
              Unggah Bukti Transfer DP (Konfirmasi Instan)
            </h3>
          </div>
        </div>

        {proofUploadSuccess ? (
          <div className="p-5 bg-gradient-to-br from-emerald-50 via-teal-50/60 to-white border-2 border-emerald-500/80 rounded-2xl text-emerald-950 space-y-4 shadow-sm animate-fadeIn">
            <div className="flex items-start gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-md">
                <CheckCircle2 className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div className="flex-1">
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-[10px] font-black uppercase tracking-wider mb-1">
                  <span>✓ BUKTI DP TERKIRIM &amp; TERVERIFIKASI</span>
                </div>
                <h4 className="text-sm sm:text-base font-black text-emerald-950">
                  Bukti Transfer Berhasil Diterima &amp; Diteruskan ke Admin!
                </h4>
                <p className="text-xs text-emerald-800/90 mt-1 leading-relaxed">
                  Data pembayaran Anda telah tersimpan di sistem. Invoice resmi telah diterbitkan dan notifikasi telah dikirimkan ke email <strong>{form.email}</strong> dan admin <strong>wisatabromo.co@gmail.com</strong>.
                </p>
              </div>
            </div>

            {/* Action Buttons After Success */}
            <div className="pt-3 border-t border-emerald-200/70 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                type="button"
                onClick={onDownloadInvoice}
                className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer active:scale-95"
              >
                <Download className="w-4 h-4 text-[#ffc928]" />
                <span>Unduh E-Invoice PDF (Resmi)</span>
              </button>

              <a
                href={`https://wa.me/6281222290318?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer active:scale-95"
              >
                <Send className="w-4 h-4 text-white" />
                <span>Konfirmasi via WhatsApp Admin</span>
              </a>

              <button
                type="button"
                onClick={onClose}
                className="py-3 px-4 rounded-xl bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 font-bold text-xs sm:text-sm transition-colors cursor-pointer"
              >
                Selesai &amp; Tutup
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={onUploadProof} className="space-y-4">
            {/* Payment Method Selector */}
            <div>
              <label className="block text-xs font-bold text-[#102a56] mb-1.5">
                Pilih Bank / E-Wallet Tujuan Transfer:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'bca', name: 'Bank BCA', num: '5200888415' },
                  { id: 'dana', name: 'DANA', num: '08113212318' },
                  { id: 'ovo', name: 'OVO', num: '08113212318' },
                ].map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => onSelectPaymentMethod(m.id)}
                    className={`p-2.5 rounded-xl border text-xs font-bold text-center transition-all cursor-pointer ${
                      form.paymentMethod === m.id
                        ? 'border-[#0996f5] bg-[#e5f4ff] text-[#0996f5] ring-2 ring-[#0996f5]/20 shadow-2xs'
                        : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <div>{m.name}</div>
                    <div className="text-[10px] font-mono opacity-80">{m.num}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Upload Dropzone */}
            <div
              onClick={() => fileInputRef.current?.click()}
              className={`border-2 border-dashed rounded-2xl p-5 text-center cursor-pointer transition-all ${
                form.paymentProofName
                  ? 'border-emerald-500 bg-emerald-50/50'
                  : formErrors.paymentProof
                  ? 'border-rose-400 bg-rose-50/40'
                  : 'border-slate-300 hover:border-[#0996f5] bg-white'
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*,application/pdf"
                className="hidden"
                onChange={onFileChange}
              />

              {form.paymentProofName ? (
                <div className="space-y-3">
                  {form.paymentProofPreview && (
                    <div className="flex justify-center">
                      <img
                        src={form.paymentProofPreview}
                        alt="Bukti Transfer"
                        className="max-h-36 rounded-xl border border-emerald-300 shadow-xs object-contain"
                      />
                    </div>
                  )}
                  <div className="flex items-center justify-center gap-2 text-xs font-black text-emerald-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>{form.paymentProofName}</span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        fileInputRef.current?.click();
                      }}
                      className="text-xs text-[#0996f5] font-bold hover:underline"
                    >
                      Ganti File
                    </button>
                    <span className="text-slate-300">|</span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onRemoveProof();
                      }}
                      className="text-xs text-rose-600 font-bold hover:underline"
                    >
                      Hapus
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center gap-2 py-2">
                  <div className="w-12 h-12 rounded-2xl bg-[#e5f4ff] text-[#0996f5] flex items-center justify-center">
                    <Upload className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-black text-[#102a56]">
                      Klik untuk Unggah Bukti Transfer DP 30%
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">
                      Screenshot m-Banking, Struk ATM, atau bukti e-Wallet (Maksimal 5MB)
                    </div>
                  </div>
                </div>
              )}
            </div>

            {formErrors.paymentProof && (
              <div className="text-xs text-rose-600 font-bold flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{formErrors.paymentProof}</span>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                type="button"
                onClick={onBackToForm}
                className="py-3 px-4 rounded-xl bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Ubah Data Pemesanan</span>
              </button>

              <button
                type="submit"
                disabled={isUploadingProof || !form.paymentProofName}
                className={`flex-1 py-3.5 px-5 rounded-xl font-black text-xs sm:text-sm text-white flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer ${
                  !form.paymentProofName
                    ? 'bg-slate-300 cursor-not-allowed text-slate-500'
                    : 'bg-gradient-to-r from-[#102a56] via-[#0996f5] to-emerald-600 hover:opacity-95 shadow-[#0996f5]/25 active:scale-98'
                }`}
              >
                {isUploadingProof ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin text-white" />
                    <span>Mengirim Bukti Transfer &amp; Notifikasi Email...</span>
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-[#ffc928]" />
                    <span>Kirim Bukti Transfer &amp; Selesaikan Reservasi</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
