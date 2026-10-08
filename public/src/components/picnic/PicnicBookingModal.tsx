import React, { useState, useMemo } from 'react';
import { 
  X, ArrowLeft, ArrowRight, Calendar, Sparkles, CheckCircle2, 
  RefreshCw, MessageCircle, AlertCircle, Copy, Check 
} from 'lucide-react';
import { 
  PicnicPackage, PicnicLocation, PicnicAddon, BirthdayDetails 
} from '../../types/picnic';
import { PICNIC_LOCATIONS, PICNIC_ADDONS } from '../../data/picnicData';
import { calculatePicnicPricing, formatRupiah } from '../../utils/picnicPricingEngine';
import { MenuSelectionGroup } from './MenuSelectionGroup';
import { FixedPackageContents } from './FixedPackageContents';
import { LocationSelector } from './LocationSelector';
import { PaxSelector } from './PaxSelector';
import { AddonSelector } from './AddonSelector';
import { PicnicPricingSummary } from './PicnicPricingSummary';
import { saveBookingToFirestore } from '../../services/firestoreBookingService';

interface PicnicBookingModalProps {
  packageItem: PicnicPackage | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenJeepBooking?: () => void;
}

export const PicnicBookingModal: React.FC<PicnicBookingModalProps> = ({
  packageItem,
  isOpen,
  onClose,
  onOpenJeepBooking
}) => {
  if (!isOpen || !packageItem) return null;

  // Step state: 1 = Menu Config (or contents), 2 = Date, Pax, Location & Addons, 3 = Customer Info & Payment, 4 = Success
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Form State
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const defaultDateStr = tomorrow.toISOString().split('T')[0];

  const [tripDate, setTripDate] = useState<string>(defaultDateStr);
  const [paxCount, setPaxCount] = useState<number>(packageItem.minPax || 4);
  const [selectedLocation, setSelectedLocation] = useState<PicnicLocation>(
    PICNIC_LOCATIONS.find((l) => l.active) || PICNIC_LOCATIONS[0]
  );
  const [selectedMenuGroups, setSelectedMenuGroups] = useState<Record<string, string>>({});
  const [selectedAddonIds, setSelectedAddonIds] = useState<string[]>([]);
  const [birthdayDetails, setBirthdayDetails] = useState<BirthdayDetails>({});

  // Customer Contact State
  const [fullName, setFullName] = useState<string>('');
  const [whatsappNumber, setWhatsappNumber] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<string>('bca');
  const [specialNotes, setSpecialNotes] = useState<string>('');

  // Status
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [confirmedBookingCode, setConfirmedBookingCode] = useState<string | null>(null);
  const [copiedCode, setCopiedCode] = useState<boolean>(false);

  // Selected addons objects
  const selectedAddons = useMemo(() => {
    return PICNIC_ADDONS.filter((a) => selectedAddonIds.includes(a.id));
  }, [selectedAddonIds]);

  // Pricing calculation
  const pricing = useMemo(() => {
    return calculatePicnicPricing({
      packageItem,
      paxCount,
      location: selectedLocation,
      selectedAddons
    });
  }, [packageItem, paxCount, selectedLocation, selectedAddons]);

  // Check if all selectable menu groups have been picked
  const isMenuSelectionComplete = useMemo(() => {
    if (packageItem.type === 'fixed') return true;
    if (!packageItem.selectionGroups || packageItem.selectionGroups.length === 0) return true;
    return packageItem.selectionGroups.every(
      (group) => !!selectedMenuGroups[group.id]
    );
  }, [packageItem, selectedMenuGroups]);

  // Handlers
  const handleSelectMenuItem = (groupId: string, item: string) => {
    setSelectedMenuGroups((prev) => ({
      ...prev,
      [groupId]: item
    }));
  };

  const handleToggleAddon = (addon: PicnicAddon) => {
    setSelectedAddonIds((prev) =>
      prev.includes(addon.id) ? prev.filter((id) => id !== addon.id) : [...prev, addon.id]
    );
  };

  const handleUpdateBirthdayDetails = (details: Partial<BirthdayDetails>) => {
    setBirthdayDetails((prev) => ({
      ...prev,
      ...details
    }));
  };

  const generateBookingCode = () => {
    const d = new Date();
    const yy = String(d.getFullYear()).slice(-2);
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    const random = Math.floor(1000 + Math.random() * 9000);
    return `WB-PICNIC-${yy}${mm}${dd}-${random}`;
  };

  const handleSubmitBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!fullName.trim()) {
      setErrorMessage('Nama lengkap wajib diisi');
      return;
    }
    if (!whatsappNumber.trim()) {
      setErrorMessage('Nomor WhatsApp aktif wajib diisi');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMessage('Alamat email valid wajib diisi untuk penerimaan invoice');
      return;
    }
    if (!selectedLocation || !selectedLocation.active) {
      setErrorMessage('Silakan pilih lokasi piknik yang aktif');
      return;
    }

    setIsSubmitting(true);

    const bookingCode = generateBookingCode();
    const selectedMenuItemsList = Object.values(selectedMenuGroups);

    const addonsPayload = selectedAddons.map((a) => ({
      id: a.id,
      name: a.name,
      price: a.price,
      details: a.category === 'birthday' ? birthdayDetails : undefined
    }));

    try {
      const result = await saveBookingToFirestore({
        bookingCode,
        bookingType: 'PICNIC',
        tripDate,
        fullName: fullName.trim(),
        whatsappNumber: whatsappNumber.trim(),
        email: email.trim(),
        packageTitle: `Picnic Experience: ${packageItem.name}`,
        packageId: packageItem.id,
        packageName: packageItem.name,
        packagePrice: packageItem.pricePerPax,
        paxCount,
        wnaCount: 0,
        pickupAddress: `Lokasi Piknik: ${selectedLocation.name} (TNBTS)`,
        locationId: selectedLocation.id,
        locationName: selectedLocation.name,
        selectedMenuGroups,
        selectedMenuItems: selectedMenuItemsList,
        addons: addonsPayload,
        birthdayDetails: selectedAddons.some((a) => a.category === 'birthday') ? birthdayDetails : undefined,
        packageSubtotal: pricing.packageSubtotal,
        surcharge: pricing.surcharge,
        locationTransportFee: pricing.locationFee,
        addonsSubtotal: pricing.addonsSubtotal,
        grandTotal: pricing.grandTotal,
        downPayment: pricing.downPayment,
        paymentMethod,
        paymentProofName: '',
        status: 'WAITING_DP',
        specialNotes: specialNotes.trim(),
        createdAt: new Date().toISOString()
      } as any);

      if (result.success) {
        setConfirmedBookingCode(bookingCode);
        setCurrentStep(4);
      } else {
        setErrorMessage(result.error || 'Gagal menyimpan pesanan. Silakan coba lagi.');
      }
    } catch (err: any) {
      console.error('Submit picnic booking error:', err);
      setErrorMessage(err.message || 'Terjadi kendala koneksi');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyCode = () => {
    if (confirmedBookingCode) {
      navigator.clipboard.writeText(confirmedBookingCode);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2500);
    }
  };

  const constructWhatsAppMessage = () => {
    const text = `Halo Admin WisataBromo.co, saya ingin konfirmasi pesanan Picnic Experience:
Kode Booking: ${confirmedBookingCode}
Paket: ${packageItem.name}
Tanggal: ${tripDate}
Jumlah: ${paxCount} pax
Lokasi: ${selectedLocation.name}
Total: ${formatRupiah(pricing.grandTotal)}
DP 30%: ${formatRupiah(pricing.downPayment)}
Atas Nama: ${fullName} (${whatsappNumber})
Mohon petunjuk transfer DP dan koordinasi persiapan acara. Terima kasih!`;
    return encodeURIComponent(text);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="relative bg-white border border-[#DCEAF5] rounded-3xl w-full max-w-4xl overflow-hidden shadow-2xl my-4 sm:my-6 flex flex-col max-h-[90vh]">
        
        {/* Modal Top Bar */}
        <div className="p-4 sm:p-5 bg-[#071A2B] text-white border-b border-[#0d2a45] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            {currentStep > 1 && currentStep < 4 && (
              <button
                type="button"
                onClick={() => setCurrentStep((prev) => prev - 1)}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Kembali ke langkah sebelumnya"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
            )}
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#FFF700] bg-white/10 px-2 py-0.5 rounded-md">
                  PICNIC EXPERIENCE
                </span>
                <span className="text-xs text-slate-300">
                  Langkah {currentStep} dari 3
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-black text-white">
                {packageItem.name} · {formatRupiah(packageItem.pricePerPax)} / pax
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-xl transition-colors cursor-pointer"
            aria-label="Tutup popup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-6">
          
          {/* STEP 1: MENU CONFIGURATION OR INCLUDED LIST */}
          {currentStep === 1 && (
            <div className="space-y-5 animate-fadeIn">
              <div className="bg-[#EAF6FF]/70 p-4 rounded-2xl border border-[#DCEAF5]">
                <h4 className="text-sm font-black text-[#0B1220] mb-1">
                  {packageItem.type === 'selectable' 
                    ? '1. Konfigurasi Pilihan Menu Hidangan'
                    : '1. Daftar Lengkap Hidangan Termasuk'}
                </h4>
                <p className="text-xs text-[#526273] leading-relaxed">
                  {packageItem.type === 'selectable'
                    ? 'Pilih 1 varian menu dari setiap kategori wajib di bawah ini. Pilihan ini akan disajikan hangat untuk seluruh rombongan Anda.'
                    : 'Paket ini hadir dengan sajian lengkap tanpa perlu memilih. Semua item siap disajikan higienis & lezat di kaldera Bromo.'}
                </p>
              </div>

              {packageItem.type === 'selectable' && packageItem.selectionGroups ? (
                <div className="space-y-4">
                  {packageItem.selectionGroups.map((group, idx) => (
                    <MenuSelectionGroup
                      key={group.id}
                      group={group}
                      selectedValue={selectedMenuGroups[group.id]}
                      onSelect={handleSelectMenuItem}
                      groupIndex={idx + 1}
                    />
                  ))}
                </div>
              ) : (
                <FixedPackageContents
                  includedSections={packageItem.includedSections}
                  freeItems={packageItem.freeItems}
                  packageName={packageItem.name}
                />
              )}

              {/* Complimentary Banner */}
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-between text-xs text-emerald-900">
                <span className="font-semibold">
                  ☕ Seluruh paket sudah termasuk Gratis Teh Hangat &amp; Air Mineral untuk semua peserta.
                </span>
                <span className="font-black text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full text-[10px]">
                  FREE
                </span>
              </div>
            </div>
          )}

          {/* STEP 2: DATE, PAX, LOCATION & ADD-ONS */}
          {currentStep === 2 && (
            <div className="space-y-6 animate-fadeIn">
              {/* Date Input */}
              <div className="p-4 bg-white rounded-2xl border border-[#DCEAF5] space-y-2">
                <label className="text-sm font-black text-[#0B1220] flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-[#0996F5]" />
                  <span>Pilih Tanggal Acara Piknik</span>
                </label>
                <input
                  type="date"
                  value={tripDate}
                  min={defaultDateStr}
                  onChange={(e) => setTripDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-[#0996F5] text-xs sm:text-sm font-bold text-[#0B1220] bg-white cursor-pointer"
                  required
                />
              </div>

              {/* Pax Selector with automatic Surcharge calculation */}
              <PaxSelector
                paxCount={paxCount}
                minPax={packageItem.minPax}
                onChangePax={setPaxCount}
              />

              {/* Location Selector (View Bromo, Widodaren, Savana [disabled]) */}
              <LocationSelector
                locations={PICNIC_LOCATIONS}
                selectedLocationId={selectedLocation?.id}
                onSelectLocation={setSelectedLocation}
              />

              {/* Optional Add-ons (Tent & Birthday Decor) */}
              <AddonSelector
                addons={PICNIC_ADDONS}
                selectedAddonIds={selectedAddonIds}
                birthdayDetails={birthdayDetails}
                onToggleAddon={handleToggleAddon}
                onChangeBirthdayDetails={handleUpdateBirthdayDetails}
              />

              {/* Real-time Order Summary */}
              <PicnicPricingSummary
                packageItem={packageItem}
                paxCount={paxCount}
                tripDate={tripDate}
                location={selectedLocation}
                selectedAddons={selectedAddons}
                pricing={pricing}
                onAddJeepClick={onOpenJeepBooking}
              />
            </div>
          )}

          {/* STEP 3: CUSTOMER INFORMATION & CONFIRMATION */}
          {currentStep === 3 && (
            <form onSubmit={handleSubmitBooking} className="space-y-5 animate-fadeIn">
              <div className="p-4 bg-[#EAF6FF]/70 rounded-2xl border border-[#DCEAF5]">
                <h4 className="text-sm font-black text-[#0B1220] mb-1">
                  3. Informasi Tamu Pemesan &amp; Pembayaran DP
                </h4>
                <p className="text-xs text-[#526273]">
                  Invoice resmi dan rincian koordinasi piknik akan otomatis dikirimkan ke email &amp; WhatsApp Anda.
                </p>
              </div>

              {errorMessage && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#0B1220] mb-1">
                    Nama Lengkap Pemesan *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Sarah Wijaya"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:border-[#0996F5] bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0B1220] mb-1">
                    Nomor WhatsApp Aktif *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Contoh: 081222290318"
                    value={whatsappNumber}
                    onChange={(e) => setWhatsappNumber(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:border-[#0996F5] bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0B1220] mb-1">
                    Alamat Email (Untuk E-Invoice) *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Contoh: sarah@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:border-[#0996F5] bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0B1220] mb-1">
                    Metode Pembayaran DP *
                  </label>
                  <select
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:border-[#0996F5] bg-white cursor-pointer font-bold"
                  >
                    <option value="bca">Transfer Bank BCA (PT Global Travel Healing)</option>
                    <option value="mandiri">Transfer Bank Mandiri</option>
                    <option value="dana">E-Wallet DANA</option>
                    <option value="ovo">E-Wallet OVO</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-[#0B1220] mb-1">
                    Catatan Khusus / Permintaan Khusus (Opsional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Contoh: Alergi makanan laut, request warna taplak rustic, atau jam penyajian sarapan jam 07.30..."
                    value={specialNotes}
                    onChange={(e) => setSpecialNotes(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:border-[#0996F5] bg-white resize-none"
                  ></textarea>
                </div>
              </div>

              {/* Order Recap */}
              <PicnicPricingSummary
                packageItem={packageItem}
                paxCount={paxCount}
                tripDate={tripDate}
                location={selectedLocation}
                selectedAddons={selectedAddons}
                pricing={pricing}
                onAddJeepClick={onOpenJeepBooking}
              />
            </form>
          )}

          {/* STEP 4: SUCCESS CONFIRMATION SCREEN */}
          {currentStep === 4 && (
            <div className="py-6 sm:py-8 text-center space-y-5 animate-fadeIn max-w-xl mx-auto">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  RESERVASI BERHASIL DISIMPAN
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#0B1220] mt-2">
                  Terima Kasih, {fullName}!
                </h3>
                <p className="text-xs text-[#526273] mt-1 leading-relaxed">
                  Pemesanan <strong>Picnic Experience ({packageItem.name})</strong> Anda telah berhasil terdaftar di database resmi WisataBromo.co dan notifikasi telah dikirimkan ke email <strong>{email}</strong>.
                </p>
              </div>

              {/* Booking Code Card */}
              <div className="p-4 bg-[#F4FAFF] rounded-2xl border border-[#DCEAF5] text-left space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                  <span className="text-xs text-[#526273]">Kode Booking Anda:</span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-black text-sm text-[#0996F5]">
                      {confirmedBookingCode}
                    </span>
                    <button
                      type="button"
                      onClick={handleCopyCode}
                      className="p-1 hover:bg-white rounded text-slate-500 hover:text-[#0996F5] transition-colors"
                      title="Salin kode booking"
                    >
                      {copiedCode ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-slate-500">Tanggal Trip:</span>
                    <div className="font-bold text-[#0B1220]">{tripDate}</div>
                  </div>
                  <div>
                    <span className="text-slate-500">Jumlah Peserta:</span>
                    <div className="font-bold text-[#0B1220]">{paxCount} pax</div>
                  </div>
                  <div>
                    <span className="text-slate-500">Lokasi Piknik:</span>
                    <div className="font-bold text-[#0B1220]">{selectedLocation.name}</div>
                  </div>
                  <div>
                    <span className="text-slate-500">Nominal DP (30%):</span>
                    <div className="font-bold text-[#0996F5] font-mono">{formatRupiah(pricing.downPayment)}</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2">
                <a
                  href={`https://wa.me/6281222290318?text=${constructWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs sm:text-sm font-black transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Kirim Konfirmasi ke WhatsApp Admin Sekarang</span>
                </a>

                <button
                  type="button"
                  onClick={onClose}
                  className="w-full py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-[#0B1220] rounded-xl text-xs font-bold transition-colors cursor-pointer"
                >
                  Tutup &amp; Kembali ke Halaman Utama
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Modal Bottom Action Controls (for Steps 1 to 3) */}
        {currentStep < 4 && (
          <div className="p-4 sm:p-5 bg-[#F4FAFF] border-t border-[#DCEAF5] flex items-center justify-between gap-3 shrink-0">
            <div>
              <div className="text-[10px] text-[#526273] uppercase font-bold">
                Estimasi Total
              </div>
              <div className="text-lg font-black text-[#0996F5] font-mono tabular-nums leading-none">
                {formatRupiah(pricing.grandTotal)}
              </div>
            </div>

            <div className="flex items-center gap-2">
              {currentStep === 1 && (
                <button
                  type="button"
                  disabled={!isMenuSelectionComplete}
                  onClick={() => setCurrentStep(2)}
                  className="py-2.5 px-5 text-xs font-black text-white bg-[#0996F5] hover:bg-[#071A2B] disabled:opacity-40 disabled:cursor-not-allowed rounded-xl transition-all shadow-md shadow-[#0996F5]/20 flex items-center gap-2 cursor-pointer min-h-[42px]"
                >
                  <span>Lanjutkan ke Tanggal &amp; Lokasi</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}

              {currentStep === 2 && (
                <button
                  type="button"
                  onClick={() => setCurrentStep(3)}
                  className="py-2.5 px-5 text-xs font-black text-white bg-[#0996F5] hover:bg-[#071A2B] rounded-xl transition-all shadow-md shadow-[#0996F5]/20 flex items-center gap-2 cursor-pointer min-h-[42px]"
                >
                  <span>Lanjut ke Data Diri Pemesan</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}

              {currentStep === 3 && (
                <button
                  type="button"
                  disabled={isSubmitting}
                  onClick={handleSubmitBooking}
                  className="py-3 px-6 text-xs sm:text-sm font-black text-white bg-[#0996F5] hover:bg-[#071A2B] disabled:opacity-75 rounded-xl transition-all shadow-lg shadow-[#0996F5]/25 flex items-center gap-2 cursor-pointer active:scale-95 min-h-[44px]"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Menyimpan Reservasi...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-[#FFF700]" />
                      <span>Konfirmasi &amp; Booking Sekarang</span>
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
