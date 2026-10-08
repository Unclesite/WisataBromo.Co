import React, { useState, useEffect, useRef } from 'react';
import { TourPackage, BookingFormState } from '../types';
import { 
  X, Calendar, Users, Copy, Check, Calculator, ShieldCheck, MapPin, 
  Send, Camera, Plus, Minus, AlertCircle, Mail, Upload, FileText, 
  Download, CreditCard, Wallet, Smartphone, CheckCircle2, RefreshCw,
  Sparkles, Clock, Flame, Info, Video, CheckCheck, ArrowRight, ArrowLeft
} from 'lucide-react';
import { generateBookingInvoicePDF } from '../utils/pdfInvoiceGenerator';
import { 
  checkIsHighSeason, 
  calculateBromoTripSchedule, 
  HIGH_SEASON_PERIODS, 
  getOpenTripSurabayaSchedule 
} from '../utils/highSeasonCalendar';
import { 
  saveBookingToFirestore,
  BookingPayload
} from '../services/firestoreBookingService';
import { triggerBookingEmailNotification } from '../services/emailNotificationService';

interface BookingCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  packages: TourPackage[];
  initialPackageId?: string;
}

export const BookingCalculatorModal: React.FC<BookingCalculatorModalProps> = ({
  isOpen,
  onClose,
  packages,
  initialPackageId,
}) => {
  const [selectedPkgId, setSelectedPkgId] = useState<string>(
    initialPackageId || packages[0]?.id || 'open-trip-malang'
  );

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const defaultDateStr = tomorrow.toISOString().split('T')[0];
  const initialHighSeason = checkIsHighSeason(defaultDateStr);
  const initialDayOfWeek = tomorrow.getDay();
  const initialDayType: 'weekday' | 'weekend' | 'highseason' = initialHighSeason.isHighSeason
    ? 'highseason'
    : initialDayOfWeek === 0 || initialDayOfWeek === 6
    ? 'weekend'
    : 'weekday';

  const initialSbySchedule = getOpenTripSurabayaSchedule(defaultDateStr, initialHighSeason.isHighSeason);
  const isInitialSbyPkg = (initialPackageId || packages[0]?.id) === 'open-trip-surabaya';
  const initialPaxCount = isInitialSbyPkg && !initialSbySchedule.isSaturday ? 2 : 0;

  const initialSelectedPkg = packages.find((p) => p.id === (initialPackageId || selectedPkgId)) || packages[0];

  const [form, setForm] = useState<BookingFormState>({
    packageId: initialSelectedPkg.id,
    startCity: initialSelectedPkg.startCity || 'malang',
    travelDate: defaultDateStr,
    paxCount: initialPaxCount,
    fullName: '',
    whatsappNumber: '',
    email: '',
    pickupAddress: '',
    specialNotes: '',
    includeDocumentation: true,
    includeDrone: false,
    isHighSeason: initialHighSeason.isHighSeason,
    wnaCount: 0,
    dayType: initialDayType,
    pickupAreaExtra: 'none',
    openTripSurabayaRoute: initialSbySchedule.route,
    paymentMethod: 'bca',
    paymentProofName: '',
    paymentProofPreview: '',
  });

  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedBca, setCopiedBca] = useState(false);
  const [copiedEwallet, setCopiedEwallet] = useState(false);
  const [bookingCode, setBookingCode] = useState('');
  const [bookingStep, setBookingStep] = useState<'form' | 'payment'>('form');
  const [proofUploadSuccess, setProofUploadSuccess] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [showHighSeasonCalendar, setShowHighSeasonCalendar] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploadingProof, setIsUploadingProof] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const modalContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialPackageId) {
      setSelectedPkgId(initialPackageId);
      const chosen = packages.find((p) => p.id === initialPackageId);
      const isSby = initialPackageId === 'open-trip-surabaya';
      const sbySchedule = getOpenTripSurabayaSchedule(form.travelDate, form.isHighSeason);
      const isPrivate = chosen?.category === 'private_trip' || chosen?.category === 'long_jeep';
      setForm((prev) => ({
        ...prev,
        packageId: initialPackageId,
        startCity: chosen ? chosen.startCity : prev.startCity,
        openTripSurabayaRoute: sbySchedule.route,
        paxCount: isSby && !sbySchedule.isSaturday ? Math.max(2, prev.paxCount) : prev.paxCount,
        includeDrone: isPrivate ? prev.includeDrone : false,
      }));
    }
  }, [initialPackageId]);

  useEffect(() => {
    if (!bookingCode) {
      const randomSuffix = Math.floor(1000 + Math.random() * 9000);
      setBookingCode(`WB-2026-${randomSuffix}`);
    }
  }, [bookingCode]);

  // Real-time error clearance when user edits form
  const clearFieldError = (field: string) => {
    if (formErrors[field]) {
      setFormErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleTravelDateChange = (dateVal: string) => {
    const hs = checkIsHighSeason(dateVal);
    let dayType: 'weekday' | 'weekend' | 'highseason' = 'weekday';

    if (dateVal) {
      const parts = dateVal.split('-');
      const d = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
      const dayOfWeek = d.getDay();
      dayType = hs.isHighSeason ? 'highseason' : dayOfWeek === 0 || dayOfWeek === 6 ? 'weekend' : 'weekday';
    }

    const sbySchedule = getOpenTripSurabayaSchedule(dateVal, hs.isHighSeason);

    setForm((prev) => {
      const isSbyPkg = selectedPkgId === 'open-trip-surabaya';
      let newPax = prev.paxCount;
      if (isSbyPkg) {
        if (!sbySchedule.isSaturday) {
          newPax = Math.max(2, newPax);
        } else {
          if (newPax < 1) newPax = 1;
        }
      }

      return {
        ...prev,
        travelDate: dateVal,
        isHighSeason: hs.isHighSeason,
        dayType,
        openTripSurabayaRoute: sbySchedule.route,
        paxCount: newPax,
      };
    });
    clearFieldError('travelDate');
    clearFieldError('paxCount');
  };

  const currentPkg = packages.find((p) => p.id === selectedPkgId) || packages[0];

  const isSukapura =
    form.startCity === 'sukapura' ||
    currentPkg.startCity === 'sukapura' ||
    currentPkg.id.includes('sukapura') ||
    (form.pickupAddress && form.pickupAddress.toLowerCase().includes('sukapura'));

  const isTosari =
    !isSukapura && (
      form.startCity === 'tosari' ||
      currentPkg.startCity === 'tosari' ||
      currentPkg.id.includes('tosari') ||
      (form.pickupAddress && form.pickupAddress.toLowerCase().includes('tosari'))
    );

  const isGubugklakah =
    !isSukapura && !isTosari && (
      form.startCity === 'gubugklakah' ||
      currentPkg.startCity === 'gubugklakah' ||
      currentPkg.id.includes('gubugklakah') ||
      (currentPkg.id === 'long-jeep' && form.pickupAreaExtra === 'none') ||
      (form.pickupAddress && form.pickupAddress.toLowerCase().includes('gubugklakah'))
    );

  const resolvedStartCity = isSukapura
    ? 'sukapura'
    : isTosari
    ? 'tosari'
    : isGubugklakah
    ? 'gubugklakah'
    : currentPkg.id === 'open-trip-malang'
    ? (form.startCity === 'batu' ? 'batu' : 'malang')
    : (currentPkg.startCity || form.startCity || 'malang');

  const tripSchedule = calculateBromoTripSchedule(form.travelDate, {
    startCity: resolvedStartCity,
    packageId: currentPkg.id,
    pickupAddress: form.pickupAddress,
    pickupAreaExtra: form.pickupAreaExtra,
  });
  const highSeasonCheck = checkIsHighSeason(form.travelDate);
  const openTripSbyInfo = getOpenTripSurabayaSchedule(form.travelDate, form.isHighSeason);

  // Form Validation Step 1
  const validateStep1 = (): boolean => {
    const errs: Record<string, string> = {};
    const isSbyMalang = currentPkg.id === 'open-trip-surabaya' && !openTripSbyInfo.isSaturday;

    if (isSbyMalang && form.paxCount < 2) {
      errs.paxCount = 'Open Trip Surabaya via Malang (keberangkatan Minggu s/d Jumat) minimal 2 orang.';
    } else if (form.paxCount <= 0) {
      errs.paxCount = 'Jumlah peserta wajib ditentukan minimal 1 ' + (currentPkg.category === 'trail' ? 'motor' : 'orang') + ' menggunakan tombol (+).';
    }

    if (!form.travelDate) {
      errs.travelDate = 'Tanggal keberangkatan trip wajib dipilih.';
    }

    if (!form.fullName || form.fullName.trim().length < 2) {
      errs.fullName = 'Nama lengkap pemesan wajib diisi (minimal 2 karakter).';
    }

    if (!form.whatsappNumber || form.whatsappNumber.trim().length < 8) {
      errs.whatsappNumber = 'Nomor WhatsApp aktif wajib diisi untuk konfirmasi booking resmi.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email || !emailRegex.test(form.email.trim())) {
      errs.email = 'Alamat email valid wajib diisi untuk pengiriman e-tiket TNBTS & invoice PDF.';
    }

    if (!form.pickupAddress || form.pickupAddress.trim().length < 3) {
      errs.pickupAddress = 'Alamat / lokasi penjemputan wajib diisi (contoh: Nama Hotel, Stasiun, Bandara, atau Basecamp).';
    }

    setFormErrors(errs);
    return Object.keys(errs).length === 0;
  };

  // Pricing Calculation
  let basePrice = 0;
  if (form.paxCount > 0) {
    if (currentPkg.id === 'open-trip-malang') {
      const isBatu = form.startCity === 'batu';
      if (form.isHighSeason) {
        basePrice = isBatu
          ? form.includeDocumentation ? 425000 : 375000
          : form.includeDocumentation ? 375000 : 325000;
      } else {
        basePrice = isBatu
          ? form.includeDocumentation ? 375000 : 325000
          : form.includeDocumentation ? 325000 : 275000;
      }
      basePrice *= form.paxCount;
    } else if (currentPkg.id === 'open-trip-surabaya') {
      const isSaturday = openTripSbyInfo.isSaturday;
      if (form.isHighSeason) {
        basePrice = isSaturday ? 450000 : 425000;
      } else {
        basePrice = isSaturday ? 400000 : 375000;
      }
      basePrice *= form.paxCount;
    } else if (currentPkg.id === 'private-sukapura' || currentPkg.id === 'private-tosari') {
      const jeepCount = Math.ceil(form.paxCount / (form.includeDocumentation ? 5 : 6)) || 1;
      let singleJeepPrice = 0;
      if (form.isHighSeason) {
        singleJeepPrice = 1700000 + (form.includeDocumentation ? 600000 : 0);
      } else {
        singleJeepPrice = 1400000 + (form.includeDocumentation ? 500000 : 0);
      }
      basePrice = singleJeepPrice * jeepCount;
    } else if (currentPkg.id === 'long-jeep') {
      const isHigh = form.isHighSeason || form.dayType === 'highseason';
      let groupPrice = 1900000;
      if (isHigh) {
        groupPrice = form.includeDocumentation ? 3250000 : 2650000;
      } else if (form.dayType === 'weekend') {
        groupPrice = form.includeDocumentation ? 2500000 : 2150000;
      } else {
        groupPrice = form.includeDocumentation ? 2100000 : 1900000;
      }

      let pickupFee = 0;
      if (form.pickupAreaExtra === 'malang') {
        pickupFee = (isHigh ? 400000 : 300000) * Math.ceil(form.paxCount / 6);
      } else if (form.pickupAreaExtra === 'batu') {
        pickupFee = (isHigh ? 500000 : 400000) * Math.ceil(form.paxCount / 6);
      }
      basePrice = groupPrice + pickupFee;
    } else if (currentPkg.id === 'private-malang') {
      const jeepCount = Math.ceil(form.paxCount / (form.includeDocumentation ? 5 : 6)) || 1;
      let singleJeepPrice = 0;
      if (form.isHighSeason) {
        singleJeepPrice = 2000000 + (form.includeDocumentation ? 600000 : 0);
      } else {
        singleJeepPrice = 1700000 + (form.includeDocumentation ? 500000 : 0);
      }
      basePrice = singleJeepPrice * jeepCount;
    } else if (currentPkg.id === 'private-batu') {
      const jeepCount = Math.ceil(form.paxCount / (form.includeDocumentation ? 5 : 6)) || 1;
      let singleJeepPrice = 0;
      if (form.isHighSeason) {
        singleJeepPrice = 2100000 + (form.includeDocumentation ? 600000 : 0);
      } else {
        singleJeepPrice = 1800000 + (form.includeDocumentation ? 500000 : 0);
      }
      basePrice = singleJeepPrice * jeepCount;
    } else if (currentPkg.id === 'private-surabaya') {
      let perPax = 570000;
      if (form.isHighSeason) {
        if (form.paxCount <= 2) perPax = 1600000;
        else if (form.paxCount <= 4) perPax = 850000;
        else if (form.paxCount <= 6) perPax = 620000;
        else if (form.paxCount === 7) perPax = 750000;
        else if (form.paxCount === 8) perPax = 700000;
        else if (form.paxCount <= 10) perPax = 650000;
        else if (form.paxCount <= 12) perPax = 520000;
        else if (form.paxCount <= 14) perPax = 530000;
        else if (form.paxCount <= 16) perPax = 500000;
        else if (form.paxCount <= 18) perPax = 450000;
        else perPax = 420000;
      } else {
        if (form.paxCount <= 2) perPax = 1550000;
        else if (form.paxCount <= 4) perPax = 800000;
        else if (form.paxCount <= 6) perPax = 570000;
        else if (form.paxCount === 7) perPax = 700000;
        else if (form.paxCount === 8) perPax = 650000;
        else if (form.paxCount <= 10) perPax = 600000;
        else if (form.paxCount <= 12) perPax = 470000;
        else if (form.paxCount <= 14) perPax = 480000;
        else if (form.paxCount <= 16) perPax = 450000;
        else if (form.paxCount <= 18) perPax = 400000;
        else perPax = 370000;
      }
      basePrice = perPax * form.paxCount;
    } else if (currentPkg.category === 'picnic') {
      basePrice = currentPkg.price * form.paxCount;
    } else if (currentPkg.category === 'trail') {
      basePrice = currentPkg.price * form.paxCount;
    } else {
      const jeepCount = Math.ceil(form.paxCount / 6) || 1;
      basePrice = currentPkg.price * jeepCount;
    }
  }

  // WNA foreign surcharge
  const wnaSurcharge = form.wnaCount * (currentPkg.wnaChargePerPax || 255000);

  // Drone Add-on (+Rp 1.500.000) for Private Trips
  const isPrivateTrip = currentPkg.category === 'private_trip' || currentPkg.category === 'long_jeep';
  const dronePrice = isPrivateTrip && form.includeDrone ? 1500000 : 0;

  const grandTotal = basePrice + wnaSurcharge + dronePrice;
  const downPaymentEstimated = Math.round(grandTotal * 0.3);

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(bookingCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  const handleCopyBca = () => {
    navigator.clipboard.writeText('5200888415');
    setCopiedBca(true);
    setTimeout(() => setCopiedBca(false), 2500);
  };

  const handleCopyEwallet = () => {
    navigator.clipboard.writeText('08113212318');
    setCopiedEwallet(true);
    setTimeout(() => setCopiedEwallet(false), 2500);
  };

  // Helper functions for Increment and Decrement with 0 minimum (or 2 for SBY via Malang)
  const updatePax = (delta: number) => {
    setForm((prev) => {
      const isSbyMalang = currentPkg.id === 'open-trip-surabaya' && !openTripSbyInfo.isSaturday;
      const minAllowed = isSbyMalang ? 2 : 0;
      const nextVal = Math.max(minAllowed, Math.min(50, prev.paxCount + delta));
      if (nextVal >= (isSbyMalang ? 2 : 1)) clearFieldError('paxCount');
      const adjustedWna = Math.min(prev.wnaCount, nextVal);
      return { ...prev, paxCount: nextVal, wnaCount: adjustedWna };
    });
  };

  const updateWna = (delta: number) => {
    setForm((prev) => {
      const maxAllowed = prev.paxCount > 0 ? prev.paxCount : 50;
      const nextVal = Math.max(0, Math.min(maxAllowed, prev.wnaCount + delta));
      return { ...prev, wnaCount: nextVal };
    });
  };

  // Handle File Upload for Bukti Transfer
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('Ukuran file maksimal 5MB');
        return;
      }
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        const dataUrl = uploadEvent.target?.result as string;
        setForm((prev) => ({
          ...prev,
          paymentProofName: file.name,
          paymentProofPreview: dataUrl,
        }));
        clearFieldError('paymentProof');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemovePaymentProof = () => {
    setForm((prev) => ({
      ...prev,
      paymentProofName: '',
      paymentProofPreview: '',
    }));
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleDownloadInvoice = () => {
    generateBookingInvoicePDF(currentPkg, form, bookingCode, grandTotal, downPaymentEstimated);
  };

  const constructWhatsAppMessage = () => {
    const lines = [
      `*FORM RESERVASI TRIP BROMO - WISATABROMO.CO*`,
      `Kode Booking: ${bookingCode}`,
      `---------------------------------------`,
      `*Paket:* ${currentPkg.title}`,
      `*Titik Start:* ${form.startCity === 'batu' ? 'Kota Batu' : currentPkg.startLocationName}`,
      currentPkg.id === 'open-trip-surabaya' ? `*Rute:* ${form.openTripSurabayaRoute === 'malang' ? 'Via Malang' : 'Via Tosari'}` : null,
      `*Tanggal Perjalanan (Sunrise):* ${tripSchedule.sunriseDateFormatted || form.travelDate} (Pagi Hari)`,
      `*Jadwal Penjemputan (Pickup):* ${tripSchedule.pickupScheduleFull}`,
      `*Jumlah Peserta:* ${form.paxCount} ${currentPkg.category === 'trail' ? 'Unit Motor' : 'Orang'}`,
      currentPkg.category !== 'trail' && currentPkg.id !== 'open-trip-surabaya' && currentPkg.id !== 'private-surabaya'
        ? `*Paket Dokumentasi:* ${form.includeDocumentation ? 'Plus Foto & Video DSLR/Mirrorless' : 'Tanpa Dokumentasi'}`
        : null,
      form.includeDrone ? `*Add-on Drone Video Udara 4K:* Ya, Include Drone (+Rp 1.500.000)` : null,
      form.isHighSeason ? `*Status Musim:* High / Peak Season (${highSeasonCheck.seasonName || 'Tarif Khusus High Season'})` : null,
      form.wnaCount > 0 ? `*Peserta Asing (WNA):* ${form.wnaCount} Orang (+Rp 255.000/org)` : null,
      currentPkg.id === 'long-jeep' ? `*Tipe Hari:* ${form.dayType} | *Opsi Jemput:* ${form.pickupAreaExtra}` : null,
      `*Nama Pemesan:* ${form.fullName}`,
      `*Email (Untuk E-Tiket & Invoice):* ${form.email}`,
      `*No WhatsApp:* ${form.whatsappNumber}`,
      `*Lokasi Penjemputan:* ${form.pickupAddress}`,
      `*Metode Pembayaran DP:* ${
        form.paymentMethod === 'bca' 
          ? 'BCA (5200888415 a/n PT Global Travel Healing)' 
          : form.paymentMethod === 'dana' 
          ? 'DANA (08113212318 a/n Achmad J)' 
          : 'OVO (08113212318 a/n Achmad J)'
      }`,
      form.paymentProofName ? `*Bukti Transfer DP:* Terlampir (${form.paymentProofName}) - Wajib Diverifikasi` : null,
      form.specialNotes ? `*Catatan Tambahan:* ${form.specialNotes}` : null,
      `---------------------------------------`,
      `*Total Estimasi Biaya:* ${formatRupiah(grandTotal)}`,
      `*Estimasi DP Booking (30%):* ${formatRupiah(downPaymentEstimated)}`,
      `---------------------------------------`,
      `Halo Admin WisataBromo.co, saya sudah melengkapi formulir pemesanan trip Bromo.`
    ].filter(Boolean);

    return encodeURIComponent(lines.join('\n'));
  };

  // STEP 1: Proceed to Payment Screen
  const handleProceedToPaymentStep = async (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = validateStep1();
    if (!isValid) {
      modalContainerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setIsSubmitting(true);

    const generatedCode = bookingCode || `WB-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    if (!bookingCode) {
      setBookingCode(generatedCode);
    }

    const bookingPayload: BookingPayload = {
      bookingCode: generatedCode,
      tripDate: form.travelDate,
      pickupDate: tripSchedule.pickupDateStr,
      pickupTime: tripSchedule.pickupTime,
      sunriseDate: tripSchedule.sunriseDateStr,
      sunriseTime: tripSchedule.sunriseTime,
      pickupScheduleFull: tripSchedule.pickupScheduleFull,
      sunriseScheduleFull: tripSchedule.sunriseScheduleFull,
      startCity: resolvedStartCity,
      fullName: form.fullName.trim(),
      whatsappNumber: form.whatsappNumber.trim(),
      email: form.email.trim(),
      packageTitle: currentPkg ? currentPkg.title : 'Paket Wisata Bromo',
      packageId: currentPkg?.id,
      paxCount: form.paxCount,
      wnaCount: form.wnaCount,
      pickupAddress: form.pickupAddress.trim(),
      paymentMethod: form.paymentMethod,
      paymentProofName: '',
      grandTotal,
      downPayment: downPaymentEstimated,
      specialNotes: form.specialNotes.trim() || undefined,
      includeDocumentation: form.includeDocumentation,
      includeDrone: form.includeDrone,
    };

    const bookingRecord = {
      ...bookingPayload,
      createdAt: new Date().toISOString(),
      status: 'WAITING_DP' as const
    };

    try {
      await saveBookingToFirestore(bookingRecord);
      setBookingStep('payment');
      modalContainerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err: any) {
      console.warn('Booking save notice:', err);
      setBookingStep('payment');
      modalContainerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
    } finally {
      setIsSubmitting(false);
    }
  };

  // STEP 2: Upload Payment Proof & Finalize
  const handleUploadProofAndFinalize = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.paymentProofName || !form.paymentProofPreview) {
      setFormErrors({ paymentProof: 'Silakan pilih dan unggah foto/screenshot bukti transfer pembayaran DP terlebih dahulu.' });
      return;
    }

    setIsUploadingProof(true);

    const bookingPayload: BookingPayload = {
      bookingCode,
      tripDate: form.travelDate,
      pickupDate: tripSchedule.pickupDateStr,
      pickupTime: tripSchedule.pickupTime,
      sunriseDate: tripSchedule.sunriseDateStr,
      sunriseTime: tripSchedule.sunriseTime,
      pickupScheduleFull: tripSchedule.pickupScheduleFull,
      sunriseScheduleFull: tripSchedule.sunriseScheduleFull,
      startCity: resolvedStartCity,
      fullName: form.fullName.trim(),
      whatsappNumber: form.whatsappNumber.trim(),
      email: form.email.trim(),
      packageTitle: currentPkg ? currentPkg.title : 'Paket Wisata Bromo',
      packageId: currentPkg?.id,
      paxCount: form.paxCount,
      wnaCount: form.wnaCount,
      pickupAddress: form.pickupAddress.trim(),
      paymentMethod: form.paymentMethod,
      paymentProofName: form.paymentProofName,
      paymentProofDataUrl: form.paymentProofPreview,
      grandTotal,
      downPayment: downPaymentEstimated,
      specialNotes: form.specialNotes.trim() || undefined,
      includeDocumentation: form.includeDocumentation,
      includeDrone: form.includeDrone,
    };

    const bookingRecord = {
      ...bookingPayload,
      createdAt: new Date().toISOString(),
      status: 'DP_SUBMITTED' as const
    };

    try {
      await Promise.allSettled([
        saveBookingToFirestore(bookingRecord),
        triggerBookingEmailNotification(bookingRecord)
      ]);
      setProofUploadSuccess(true);
      modalContainerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err: any) {
      console.error('Proof submission notice:', err);
      setProofUploadSuccess(true);
      modalContainerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
    } finally {
      setIsUploadingProof(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div 
        ref={modalContainerRef}
        className="relative bg-white border border-slate-200 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl my-4 sm:my-6"
      >
        {/* Modal Top Bar */}
        <div className="sticky top-0 z-30 p-4 sm:p-5 bg-[#e5f4ff] border-b border-slate-200 flex items-center justify-between backdrop-blur-md">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#0996f5] text-white flex items-center justify-center shadow-xs">
              <Calculator className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black text-[#111318]">
                Formulir Reservasi Resmi Trip Bromo
              </h3>
              <p className="text-xs text-slate-600 font-medium">
                PT Global Travel Healing · Rekening Resmi &amp; Konfirmasi Instan
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-500 hover:text-[#111318] hover:bg-white rounded-xl transition-colors cursor-pointer min-h-[40px] min-w-[40px] flex items-center justify-center"
            aria-label="Tutup formulir reservasi"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 2-Step Progress Header */}
        {!proofUploadSuccess && (
          <div className="px-4 sm:px-6 pt-4 pb-2 border-b border-slate-100 bg-slate-50/70">
            <div className="flex items-center justify-between max-w-xl mx-auto">
              <div className="flex items-center gap-2">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black transition-colors ${
                  bookingStep === 'form'
                    ? 'bg-[#0996f5] text-white shadow-xs'
                    : 'bg-emerald-600 text-white'
                }`}>
                  {bookingStep === 'payment' ? <Check className="w-4 h-4" /> : '1'}
                </div>
                <div className="text-left">
                  <div className={`text-xs font-bold ${bookingStep === 'form' ? 'text-[#102a56]' : 'text-slate-600'}`}>
                    1. Isi Data Booking
                  </div>
                  <div className="text-[10px] text-slate-400">Paket, Pax &amp; Data Tamu</div>
                </div>
              </div>

              <div className="flex-1 mx-4 h-0.5 bg-slate-200 relative">
                <div 
                  className="absolute left-0 top-0 h-full bg-[#0996f5] transition-all duration-300"
                  style={{ width: bookingStep === 'payment' ? '100%' : '0%' }}
                />
              </div>

              <div className="flex items-center gap-2">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black transition-colors ${
                  bookingStep === 'payment'
                    ? 'bg-[#0996f5] text-white shadow-xs'
                    : 'bg-slate-200 text-slate-600'
                }`}>
                  2
                </div>
                <div className="text-left">
                  <div className={`text-xs font-bold ${bookingStep === 'payment' ? 'text-[#102a56]' : 'text-slate-500'}`}>
                    2. Laman Rekening &amp; Bukti TF
                  </div>
                  <div className="text-[10px] text-slate-400">Transfer DP 30% &amp; Upload</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 1: SUCCESS SCREEN */}
        {proofUploadSuccess ? (
          <div className="p-6 sm:p-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
              <Check className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-xl font-extrabold text-[#102a56] mb-1">
                Bukti Pembayaran DP Berhasil Terkirim!
              </h4>
              <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                Reservasi Anda dengan kode <strong className="text-[#0996f5] font-mono">{bookingCode}</strong> telah tersimpan di sistem resmi. Invoice dan konfirmasi resmi telah dikirimkan ke <strong className="text-[#102a56]">{form.email}</strong> dan tim kami siap menyambut Anda.
              </p>
            </div>

            <div className="p-4 sm:p-5 bg-[#e5f4ff] border border-[#0996f5]/25 rounded-2xl max-w-md mx-auto space-y-3 text-left">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-slate-500 font-semibold">Kode Reservasi Resmi:</div>
                  <div className="text-lg font-mono font-black text-[#102a56] tracking-wider">
                    {bookingCode}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyCode}
                  className="p-2 text-[#0996f5] hover:bg-white rounded-lg border border-[#0996f5]/20 transition-colors cursor-pointer text-xs font-bold flex items-center gap-1"
                >
                  {copiedCode ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  <span>Salin Kode</span>
                </button>
              </div>

              <div className="pt-2 border-t border-[#0996f5]/15 space-y-1.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-600">Paket:</span>
                  <span className="font-bold text-[#102a56] text-right truncate max-w-[200px]">{currentPkg.title}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Tanggal Trip:</span>
                  <span className="font-bold text-[#102a56]">{tripSchedule.sunriseDateFormatted || form.travelDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Peserta:</span>
                  <span className="font-bold text-[#102a56]">{form.paxCount} {currentPkg.category === 'trail' ? 'Motor' : 'Orang'}</span>
                </div>
                <div className="flex justify-between pt-1 border-t border-[#0996f5]/10">
                  <span className="text-slate-600">Total Biaya:</span>
                  <span className="font-mono font-bold text-[#102a56]">{formatRupiah(grandTotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-emerald-700 font-bold">DP Terbayar (30%):</span>
                  <span className="font-mono font-black text-emerald-700">{formatRupiah(downPaymentEstimated)}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons: WhatsApp & Download PDF */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href={`https://wa.me/6281222290318?text=${constructWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-all shadow-md shadow-emerald-600/20 flex items-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4 text-white" />
                <span>Konfirmasi via WhatsApp Admin</span>
              </a>

              <button
                type="button"
                onClick={handleDownloadInvoice}
                className="px-5 py-3 text-xs font-bold text-white bg-[#102a56] hover:bg-[#1b3a6b] rounded-xl transition-all shadow-md shadow-[#102a56]/20 flex items-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#ffc928]" />
                <span>Unduh E-Invoice PDF (Resmi)</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="px-5 py-3 text-xs font-bold text-[#102a56] hover:bg-slate-100 bg-white border border-slate-300 rounded-xl cursor-pointer"
              >
                Selesai &amp; Tutup
              </button>
            </div>
          </div>
        ) : bookingStep === 'payment' ? (
          /* VIEW 2: STEP 2 - PAYMENT ACCOUNT & PROOF UPLOAD SCREEN */
          <div className="p-4 sm:p-6 space-y-6">
            {/* Header Title */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-200">
              <div>
                <h4 className="text-base sm:text-lg font-black text-[#102a56]">
                  Laman Pembayaran Rekening &amp; Bukti Transfer DP
                </h4>
                <p className="text-xs text-slate-600">
                  Silakan lakukan transfer DP (30%) ke rekening resmi berikut untuk mengunci jadwal armada &amp; Jeep Anda.
                </p>
              </div>
              <div className="flex items-center gap-2 bg-[#e5f4ff] border border-[#0996f5]/30 px-3 py-1.5 rounded-xl self-start">
                <span className="text-[10px] text-slate-500 font-bold uppercase">Kode Booking:</span>
                <span className="font-mono font-black text-xs text-[#0996f5]">{bookingCode}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left 6 Cols: Official Bank Accounts & Transfer Amount */}
              <div className="lg:col-span-6 space-y-4">
                {/* DP Amount Card */}
                <div className="p-4 bg-gradient-to-br from-emerald-50 via-teal-50/40 to-blue-50/30 border-2 border-emerald-300 rounded-2xl space-y-2 shadow-xs">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-700">Nominal Transfer DP (30%):</span>
                    <span className="text-[10px] bg-emerald-600 text-white font-black px-2 py-0.5 rounded-md">Wajib DP</span>
                  </div>
                  <div className="text-2xl font-black font-mono text-emerald-700 tabular-nums">
                    {formatRupiah(downPaymentEstimated)}
                  </div>
                  <div className="text-[11px] text-slate-600 flex justify-between pt-1 border-t border-emerald-200/80">
                    <span>Total Estimasi Biaya Trip:</span>
                    <span className="font-mono font-bold text-[#102a56]">{formatRupiah(grandTotal)}</span>
                  </div>
                  <p className="text-[10px] text-slate-500">
                    *Pelunasan 70% sisa biaya dibayarkan saat hari H bertemu driver/guide.
                  </p>
                </div>

                {/* Official Bank Account & E-Wallet Box */}
                <div className="p-4 bg-amber-50/80 border border-amber-300/80 rounded-2xl space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold text-amber-900 uppercase">
                    <span className="flex items-center gap-1.5">
                      <CreditCard className="w-4 h-4 text-amber-700" />
                      <span>Rekening Resmi WisataBromo.co:</span>
                    </span>
                    <span className="text-[10px] text-emerald-700 font-bold bg-emerald-100 px-2 py-0.5 rounded">PT Legal</span>
                  </div>

                  {/* Bank BCA Card */}
                  <div className="p-3 bg-white rounded-xl border border-amber-200 flex items-center justify-between gap-2 shadow-2xs">
                    <div>
                      <div className="text-xs font-extrabold text-[#102a56]">BANK BCA</div>
                      <div className="font-mono font-black text-sm sm:text-base text-[#0996f5]">5200888415</div>
                      <div className="text-[10px] text-slate-500">a/n PT Global Travel Healing</div>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyBca}
                      className="px-3 py-2 bg-[#e5f4ff] hover:bg-[#0996f5] text-[#0996f5] hover:text-white rounded-lg text-xs font-bold transition-colors cursor-pointer shrink-0"
                    >
                      {copiedBca ? 'Tersalin ✓' : 'Salin BCA'}
                    </button>
                  </div>

                  {/* E-Wallet DANA & OVO */}
                  <div className="p-3 bg-white rounded-xl border border-amber-200 flex items-center justify-between gap-2 shadow-2xs">
                    <div>
                      <div className="text-xs font-extrabold text-[#102a56]">DANA &amp; OVO</div>
                      <div className="font-mono font-black text-sm sm:text-base text-emerald-700">08113212318</div>
                      <div className="text-[10px] text-slate-500">a/n Achmad J</div>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyEwallet}
                      className="px-3 py-2 bg-[#e5f4ff] hover:bg-[#0996f5] text-[#0996f5] hover:text-white rounded-lg text-xs font-bold transition-colors cursor-pointer shrink-0"
                    >
                      {copiedEwallet ? 'Tersalin ✓' : 'Salin No'}
                    </button>
                  </div>
                </div>

                {/* Booking Summary Mini Card */}
                <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 text-xs space-y-1.5 text-slate-700">
                  <div className="font-bold text-[#102a56] pb-1 border-b border-slate-200 flex items-center justify-between">
                    <span>Ringkasan Data Pemesan:</span>
                    <button
                      type="button"
                      onClick={() => setBookingStep('form')}
                      className="text-[11px] text-[#0996f5] hover:underline font-bold cursor-pointer"
                    >
                      Ubah Data
                    </button>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Nama:</span>
                    <span className="font-bold text-[#102a56]">{form.fullName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">WhatsApp:</span>
                    <span className="font-bold text-[#102a56]">{form.whatsappNumber}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Email:</span>
                    <span className="font-bold text-[#102a56] truncate max-w-[200px]">{form.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Lokasi Jemput:</span>
                    <span className="font-bold text-[#102a56] truncate max-w-[200px]">{form.pickupAddress}</span>
                  </div>
                </div>
              </div>

              {/* Right 6 Cols: Upload Bukti Transfer & Submission Form */}
              <div className="lg:col-span-6 space-y-4">
                <form onSubmit={handleUploadProofAndFinalize} className="space-y-4">
                  {/* Upload Bukti Transfer DP (WAJIB / REQUIRED) */}
                  <div className={`p-4 sm:p-5 rounded-2xl border-2 transition-all space-y-3 ${
                    formErrors.paymentProof 
                      ? 'bg-rose-50/80 border-rose-400' 
                      : form.paymentProofName 
                      ? 'bg-emerald-50/80 border-emerald-400' 
                      : 'bg-[#f8fafc] border-slate-300'
                  }`}>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black text-[#102a56] flex items-center gap-1.5">
                        <Upload className="w-4 h-4 text-[#0996f5]" />
                        <span>Unggah Bukti Transfer DP</span>
                        <span className="text-[#ea0610] font-black">*</span>
                      </span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                        form.paymentProofName ? 'bg-emerald-200 text-emerald-800' : 'bg-rose-100 text-rose-800'
                      }`}>
                        {form.paymentProofName ? 'Terlampir ✓' : 'Wajib Upload'}
                      </span>
                    </div>

                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      Unggah foto struk ATM, screenshot m-Banking, atau receipt e-wallet tanda transfer DP 30% Anda:
                    </p>

                    {/* Upload Action Box */}
                    <div 
                      onClick={() => fileInputRef.current?.click()}
                      className={`border-2 border-dashed rounded-xl p-4 text-center cursor-pointer transition-all group ${
                        formErrors.paymentProof
                          ? 'border-rose-400 bg-white hover:bg-rose-50/40'
                          : form.paymentProofName
                          ? 'border-emerald-400 bg-white'
                          : 'border-slate-300 hover:border-[#0996f5] bg-white'
                      }`}
                    >
                      <input 
                        type="file" 
                        ref={fileInputRef} 
                        onChange={handleFileUpload} 
                        accept="image/*,.pdf" 
                        className="hidden" 
                      />

                      {form.paymentProofName ? (
                        <div className="space-y-2">
                          {form.paymentProofPreview && (
                            <div className="flex justify-center">
                              <img 
                                src={form.paymentProofPreview} 
                                alt="Bukti Transfer DP" 
                                className="max-h-36 rounded-lg object-contain border border-emerald-300 shadow-xs" 
                              />
                            </div>
                          )}
                          <div className="flex items-center justify-center gap-2 text-xs text-emerald-800 font-bold">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span className="truncate max-w-[220px]">{form.paymentProofName}</span>
                          </div>
                          <div className="flex items-center justify-center gap-3 pt-1">
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                fileInputRef.current?.click();
                              }}
                              className="text-[11px] font-bold text-[#0996f5] hover:underline cursor-pointer"
                            >
                              Ganti File
                            </button>
                            <span className="text-slate-300">|</span>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleRemovePaymentProof();
                              }}
                              className="text-[11px] font-bold text-rose-600 hover:underline cursor-pointer"
                            >
                              Hapus File
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center justify-center gap-2 py-4">
                          <div className="w-12 h-12 rounded-full bg-[#e5f4ff] text-[#0996f5] flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Upload className="w-6 h-6" />
                          </div>
                          <div className="text-xs font-black text-[#102a56]">
                            Klik di Sini untuk Unggah Foto Bukti Transfer DP
                          </div>
                          <div className="text-[10px] text-slate-500">
                            Mendukung JPG, PNG, WEBP, atau PDF (Maks. 5MB)
                          </div>
                        </div>
                      )}
                    </div>

                    {formErrors.paymentProof && (
                      <div className="text-[11px] text-rose-600 font-bold flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{formErrors.paymentProof}</span>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2.5 pt-1">
                    <button
                      type="submit"
                      disabled={isUploadingProof}
                      className="w-full py-4 px-4 text-xs sm:text-sm font-black text-white bg-gradient-to-r from-[#102a56] via-[#0996f5] to-emerald-600 hover:opacity-95 rounded-2xl transition-all shadow-lg shadow-[#0996f5]/25 flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                    >
                      {isUploadingProof ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin text-white" />
                          <span>Mengirim Bukti &amp; Menyimpan Reservasi...</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4 text-[#ffc928]" />
                          <span>Kirim Bukti Transfer &amp; Selesaikan Reservasi</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleDownloadInvoice}
                      className="w-full py-3 px-4 text-xs font-bold text-[#102a56] hover:bg-[#e5f4ff] bg-white border border-slate-300 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Download className="w-4 h-4 text-[#0996f5]" />
                      <span>Unduh E-Invoice PDF (Surat Reservasi Resmi)</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setBookingStep('form')}
                      className="w-full py-2.5 px-4 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Kembali ke Formulir Data Tamu</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        ) : (
          /* VIEW 3: STEP 1 - BOOKING FORM & PRICING WITH CONTINUE BUTTON AT THE VERY BOTTOM */
          <form onSubmit={handleProceedToPaymentStep} className="p-4 sm:p-6 space-y-6">
            <div className="space-y-5">
              {/* 1. Pilih Paket */}
              <div>
                <label className="block text-xs font-bold text-[#102a56] mb-1.5">
                  1. Pilih Paket Wisata Bromo
                </label>
                <select
                  value={selectedPkgId}
                  onChange={(e) => {
                    const newId = e.target.value;
                    setSelectedPkgId(newId);
                    const chosen = packages.find((p) => p.id === newId);
                    if (chosen) {
                      const isSby = newId === 'open-trip-surabaya';
                      const sbySchedule = getOpenTripSurabayaSchedule(form.travelDate, form.isHighSeason);
                      const isPrivate = chosen.category === 'private_trip' || chosen.category === 'long_jeep';
                      setForm((prev) => ({
                        ...prev,
                        packageId: chosen.id,
                        startCity: chosen.startCity,
                        openTripSurabayaRoute: sbySchedule.route,
                        paxCount: isSby && !sbySchedule.isSaturday ? Math.max(2, prev.paxCount) : prev.paxCount,
                        includeDrone: isPrivate ? prev.includeDrone : false,
                      }));
                    }
                  }}
                  className="w-full bg-[#f8fafc] border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#111318] focus:outline-none focus:border-[#0996f5] focus:bg-white font-medium"
                >
                  {packages.map((pkg) => (
                    <option key={pkg.id} value={pkg.id}>
                      {pkg.title} ({formatRupiah(pkg.price)} {pkg.priceUnit})
                    </option>
                  ))}
                </select>
              </div>

              {/* Start Location Specifics for Open Trip Malang/Batu */}
              {currentPkg.id === 'open-trip-malang' && (
                <div className="p-3.5 bg-[#e5f4ff]/60 border border-[#0996f5]/20 rounded-2xl space-y-2">
                  <label className="block text-xs font-bold text-[#102a56]">
                    Pilih Titik Start:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setForm((prev) => ({ ...prev, startCity: 'malang' }))}
                      className={`p-2.5 rounded-xl border text-xs font-bold text-center cursor-pointer transition-all ${
                        form.startCity === 'malang'
                          ? 'bg-[#0996f5] text-white border-[#0996f5] shadow-xs'
                          : 'bg-white text-[#102a56] border-slate-200 hover:border-[#0996f5]'
                      }`}
                    >
                      <div>Start Kota Malang</div>
                      <div className="text-[10px] opacity-80 font-normal">
                        {form.isHighSeason ? 'Rp 325rb / Rp 375rb (+Doc)' : 'Rp 275rb / Rp 325rb (+Doc)'}
                      </div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setForm((prev) => ({ ...prev, startCity: 'batu' }))}
                      className={`p-2.5 rounded-xl border text-xs font-bold text-center cursor-pointer transition-all ${
                        form.startCity === 'batu'
                          ? 'bg-[#0996f5] text-white border-[#0996f5] shadow-xs'
                          : 'bg-white text-[#102a56] border-slate-200 hover:border-[#0996f5]'
                      }`}
                    >
                      <div>Start Kota Batu</div>
                      <div className="text-[10px] opacity-80 font-normal">
                        {form.isHighSeason ? 'Rp 375rb / Rp 425rb (+Doc)' : 'Rp 325rb / Rp 375rb (+Doc)'}
                      </div>
                    </button>
                  </div>
                </div>
              )}

              {/* Start Route Connected to Calendar for Open Trip Surabaya */}
              {currentPkg.id === 'open-trip-surabaya' && (
                <div className="p-3.5 bg-gradient-to-br from-blue-50/80 via-indigo-50/50 to-white border border-[#0996f5]/30 rounded-2xl space-y-2.5 shadow-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-[#102a56] flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#0996f5]" />
                      <span>Rute Open Trip Surabaya (Otomatis Terhubung Kalender):</span>
                    </span>
                    <span className={`text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-2xs ${
                      openTripSbyInfo.isSaturday 
                        ? 'bg-amber-100 text-amber-950 border border-amber-300' 
                        : 'bg-blue-100 text-blue-950 border border-blue-300'
                    }`}>
                      {openTripSbyInfo.isSaturday ? '🗓️ Jadwal Hari Sabtu' : '🗓️ Jadwal Minggu s/d Jumat'}
                    </span>
                  </div>

                  <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-extrabold text-xs text-[#102a56]">
                          {openTripSbyInfo.isSaturday ? '📍 Surabaya via Tosari (Pasuruan)' : '📍 Surabaya via Malang'}
                        </span>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                          openTripSbyInfo.isSaturday ? 'bg-emerald-100 text-emerald-800' : 'bg-indigo-100 text-indigo-800'
                        }`}>
                          {openTripSbyInfo.isSaturday ? '1 Orang Bisa Gabung' : 'Minimal 2 Orang'}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-600">
                        {openTripSbyInfo.isSaturday
                          ? 'Berangkat Sabtu pukul 22.00 WIB, nikmati Sunrise Minggu pagi. Dokumentasi Foto Include!'
                          : `Berangkat hari ${openTripSbyInfo.dayName} pukul 23.00 WIB via Malang. Peserta dimulai dari 2 orang. Dokumentasi Foto Include!`}
                      </p>
                    </div>

                    <div className="text-right shrink-0 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                      <div className="text-[10px] text-slate-500 font-bold uppercase">Tarif / Pax:</div>
                      <div className="font-mono font-black text-sm text-[#0996f5]">
                        {form.isHighSeason
                          ? (openTripSbyInfo.isSaturday ? 'Rp 450.000' : 'Rp 425.000')
                          : (openTripSbyInfo.isSaturday ? 'Rp 400.000' : 'Rp 375.000')}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Documentation Toggle (DSLR / Mirrorless) */}
              {currentPkg.category !== 'trail' && currentPkg.id !== 'open-trip-surabaya' && currentPkg.id !== 'private-surabaya' && (
                <div className="p-3.5 bg-[#e5f4ff]/60 border border-[#0996f5]/20 rounded-2xl space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#102a56] flex items-center gap-1.5">
                      <Camera className="w-3.5 h-3.5 text-[#0996f5]" />
                      <span>Pilihan Dokumentasi DSLR / Mirrorless:</span>
                    </span>
                    <span className="text-[11px] font-bold text-[#0996f5]">
                      {currentPkg.category === 'open_trip' 
                        ? '+Rp 50.000 / org' 
                        : (form.isHighSeason ? '+Rp 600.000 / grup (High Season)' : '+Rp 500.000 / grup')}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setForm((prev) => ({ ...prev, includeDocumentation: false }))}
                      className={`p-2.5 rounded-xl border text-xs font-bold text-center cursor-pointer transition-all ${
                        !form.includeDocumentation
                          ? 'bg-[#102a56] text-white border-[#102a56]'
                          : 'bg-white text-[#102a56] border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      Tanpa Dokumentasi
                    </button>
                    <button
                      type="button"
                      onClick={() => setForm((prev) => ({ ...prev, includeDocumentation: true }))}
                      className={`p-2.5 rounded-xl border text-xs font-bold text-center cursor-pointer transition-all ${
                        form.includeDocumentation
                          ? 'bg-[#0996f5] text-white border-[#0996f5] shadow-xs'
                          : 'bg-white text-[#102a56] border-slate-200 hover:border-[#0996f5]'
                      }`}
                    >
                      Plus Dokumentasi DSLR/Mirrorless ✨
                    </button>
                  </div>
                </div>
              )}

              {/* Drone Video Udara 4K (+Rp 1.500.000) Add-on for Private Trips */}
              {(currentPkg.category === 'private_trip' || currentPkg.category === 'long_jeep') && (
                <div className={`p-3.5 rounded-2xl border transition-all space-y-2 ${
                  form.includeDrone
                    ? 'bg-gradient-to-br from-indigo-50/90 via-blue-50/70 to-purple-50/40 border-[#0996f5]/40 shadow-xs'
                    : 'bg-[#e5f4ff]/40 border-slate-200'
                }`}>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#102a56] flex items-center gap-1.5">
                      <Video className="w-3.5 h-3.5 text-[#0996f5]" />
                      <span>Add-on Dokumentasi Drone (Video Udara 4K):</span>
                    </span>
                    <span className={`text-[11px] font-black px-2.5 py-0.5 rounded-md ${
                      form.includeDrone ? 'bg-[#0996f5] text-white shadow-2xs' : 'bg-slate-200 text-slate-700'
                    }`}>
                      +Rp 1.500.000 / trip
                    </span>
                  </div>

                  <p className="text-[11px] text-slate-600">
                    Pengambilan video sinematik udara resolusi 4K dengan pilot drone berlisensi resmi TNBTS. Menghasilkan footage spektakuler lautan awan, kawah aktif, dan tebing kaldera Bromo.
                  </p>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setForm((prev) => ({ ...prev, includeDrone: false }))}
                      className={`p-2.5 rounded-xl border text-xs font-bold text-center cursor-pointer transition-all ${
                        !form.includeDrone
                          ? 'bg-[#102a56] text-white border-[#102a56]'
                          : 'bg-white text-[#102a56] border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      Tanpa Drone
                    </button>
                    <button
                      type="button"
                      onClick={() => setForm((prev) => ({ ...prev, includeDrone: true }))}
                      className={`p-2.5 rounded-xl border text-xs font-bold text-center cursor-pointer transition-all flex items-center justify-center gap-1.5 ${
                        form.includeDrone
                          ? 'bg-gradient-to-r from-[#0996f5] to-indigo-600 text-white border-transparent shadow-xs'
                          : 'bg-white text-[#102a56] border-slate-200 hover:border-[#0996f5]'
                      }`}
                    >
                      <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                      <span>Include Drone (+1.5 Juta) 🚁</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Long Jeep Options (Weekday / Weekend / High Season & Pickup Addon) */}
              {currentPkg.id === 'long-jeep' && (
                <div className="p-3.5 bg-[#e5f4ff]/60 border border-[#0996f5]/20 rounded-2xl space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-[#102a56]">Kategori Tarif Hari Long Jeep:</span>
                      <div className="text-[10px] text-slate-500">Ditentukan otomatis berdasarkan tanggal keberangkatan</div>
                    </div>
                    <span className={`text-[11px] font-black px-3 py-1 rounded-full shadow-xs ${
                      form.dayType === 'highseason' || form.isHighSeason
                        ? 'bg-[#ea0610] text-white'
                        : form.dayType === 'weekend'
                        ? 'bg-[#0996f5] text-white'
                        : 'bg-emerald-600 text-white'
                    }`}>
                      {form.dayType === 'highseason' || form.isHighSeason 
                        ? '🔥 Peak Season' 
                        : form.dayType === 'weekend' 
                        ? '🏖️ Weekend' 
                        : '💼 Weekday'}
                    </span>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#102a56] mb-1.5">
                      Opsi Antar-Jemput Tambahan:
                    </label>
                    <select
                      value={form.pickupAreaExtra || 'none'}
                      onChange={(e) =>
                        setForm((prev) => ({
                          ...prev,
                          pickupAreaExtra: e.target.value as 'none' | 'malang' | 'batu',
                        }))
                      }
                      className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs text-[#111318]"
                    >
                      <option value="none">Start Basecamp Gubugklakah (Tanpa Tambahan Jemput)</option>
                      <option value="malang">Jemput Kota Malang ({form.isHighSeason ? '+Rp 400.000 High Season' : '+Rp 300.000'} / mobil max 6 pax)</option>
                      <option value="batu">Jemput Kota Batu ({form.isHighSeason ? '+Rp 500.000 High Season' : '+Rp 400.000'} / mobil max 6 pax)</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Date & Interactive Pax Count */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs font-bold text-[#102a56] flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#0996f5]" />
                      <span>2. Tanggal Perjalanan / Sunrise</span>
                      <span className="text-[#ea0610] font-black">*</span>
                    </label>
                    <button
                      type="button"
                      onClick={() => setShowHighSeasonCalendar(true)}
                      className="text-[10px] text-[#0996f5] hover:underline font-bold flex items-center gap-0.5 cursor-pointer"
                    >
                      <Flame className="w-3 h-3 text-red-500" />
                      <span>Kalender Season</span>
                    </button>
                  </div>
                  <input
                    type="date"
                    required
                    value={form.travelDate}
                    onChange={(e) => handleTravelDateChange(e.target.value)}
                    className={`w-full bg-[#f8fafc] border rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#111318] focus:outline-none font-medium transition-colors ${
                      formErrors.travelDate ? 'border-rose-500 bg-rose-50/20' : 'border-slate-300 focus:border-[#0996f5] focus:bg-white'
                    }`}
                  />
                  {formErrors.travelDate && (
                    <div className="text-[11px] text-rose-600 font-bold mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{formErrors.travelDate}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#102a56] mb-1.5 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#0996f5]" />
                    <span>3. {currentPkg.category === 'trail' ? 'Jumlah Unit Motor' : 'Jumlah Peserta (Pax)'}</span>
                    <span className="text-[#ea0610] font-black">*</span>
                  </label>

                  {/* Stepper */}
                  <div className="flex items-center gap-2">
                    <div className={`flex items-center justify-between rounded-xl p-1 w-full border transition-colors ${
                      formErrors.paxCount ? 'border-rose-500 bg-rose-50/30' : 'bg-[#f8fafc] border-slate-300'
                    }`}>
                      <button
                        type="button"
                        onClick={() => updatePax(-1)}
                        disabled={
                          form.paxCount <= (currentPkg.id === 'open-trip-surabaya' && !openTripSbyInfo.isSaturday ? 2 : 0)
                        }
                        className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold transition-all cursor-pointer ${
                          form.paxCount <= (currentPkg.id === 'open-trip-surabaya' && !openTripSbyInfo.isSaturday ? 2 : 0)
                            ? 'opacity-30 text-slate-400 cursor-not-allowed bg-slate-200'
                            : 'bg-white hover:bg-[#e5f4ff] text-[#102a56] hover:text-[#0996f5] shadow-xs active:scale-95'
                        }`}
                        aria-label="Kurangi peserta"
                      >
                        <Minus className="w-4 h-4" />
                      </button>

                      <div className="flex flex-col items-center justify-center px-3">
                        <span className={`font-mono text-base font-black tabular-nums ${form.paxCount === 0 ? 'text-rose-600' : 'text-[#102a56]'}`}>
                          {form.paxCount}
                        </span>
                        <span className="text-[10px] text-slate-500 font-medium">
                          {currentPkg.category === 'trail' ? 'Motor' : 'Orang'}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => updatePax(1)}
                        className="w-9 h-9 rounded-lg bg-[#0996f5] hover:bg-[#0782d6] text-white flex items-center justify-center font-bold shadow-xs transition-all cursor-pointer active:scale-95"
                        aria-label="Tambah peserta"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  {formErrors.paxCount && (
                    <div className="text-[11px] text-rose-600 font-bold mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{formErrors.paxCount}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Dynamic Trip & Sunrise Schedule Alert Card */}
              {tripSchedule.sunriseDateFormatted && (
                <div className="p-3.5 bg-gradient-to-br from-amber-50 via-orange-50/50 to-blue-50/30 border border-amber-200 rounded-2xl text-xs space-y-2.5 shadow-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-black text-[#102a56] flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-amber-600" />
                      <span>Jadwal Penjemputan &amp; Golden Sunrise Bromo</span>
                    </span>
                    <span className="text-[10px] bg-amber-200/80 text-amber-950 font-bold px-2 py-0.5 rounded-full">
                      Pola: {tripSchedule.locationLabel}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="bg-white/95 p-2.5 rounded-xl border border-blue-200/70 shadow-xs">
                      <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">1. Jadwal Jemput (Pickup):</div>
                      <div className="font-extrabold text-[#102a56] text-xs mt-0.5">{tripSchedule.pickupDateFormatted}</div>
                      <div className="text-[11px] text-blue-700 font-black mt-0.5">
                        Pukul {tripSchedule.pickupTime} {tripSchedule.pattern === 'malang_batu_surabaya' ? '(Malam Sebelumnya)' : '(Dini Hari Tanggal Sunrise)'}
                      </div>
                    </div>

                    <div className="bg-white/95 p-2.5 rounded-xl border border-amber-200/70 shadow-xs">
                      <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">2. Golden Sunrise Bromo:</div>
                      <div className="font-extrabold text-[#102a56] text-xs mt-0.5">{tripSchedule.sunriseDateFormatted}</div>
                      <div className="text-[11px] text-amber-700 font-black mt-0.5">Pukul {tripSchedule.sunriseTime} (Pagi Hari)</div>
                    </div>
                  </div>

                  <div className="text-[11px] text-slate-700 bg-white/95 p-3 rounded-xl border border-amber-200 flex items-start gap-2 leading-relaxed">
                    <Info className="w-4 h-4 text-[#0996f5] shrink-0 mt-0.5" />
                    <span>{tripSchedule.explanation}</span>
                  </div>
                </div>
              )}

              {/* Automatic Season Status & WNA Stepper */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className={`p-3 rounded-xl border flex items-center gap-2.5 transition-colors ${
                  form.isHighSeason 
                    ? 'bg-red-50/80 border-red-200 text-red-900' 
                    : 'bg-emerald-50/60 border-emerald-200/80 text-emerald-950'
                }`}>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                    form.isHighSeason ? 'bg-red-100 text-red-600' : 'bg-emerald-100 text-emerald-700'
                  }`}>
                    {form.isHighSeason ? <Flame className="w-4 h-4" /> : <Sparkles className="w-4 h-4" />}
                  </div>
                  <div className="text-xs min-w-0">
                    <div className="font-bold flex items-center gap-1.5">
                      <span>Status Musim:</span>
                      <span className={`text-[10px] font-black px-1.5 py-0.2 rounded-md ${
                        form.isHighSeason ? 'bg-red-600 text-white' : 'bg-emerald-600 text-white'
                      }`}>
                        {form.isHighSeason ? 'Peak / High Season' : 'Reguler / Normal'}
                      </span>
                    </div>
                    <div className="text-[10px] text-slate-600 truncate mt-0.5">
                      {form.isHighSeason 
                        ? (highSeasonCheck.seasonName || 'Tarif Peak Season otomatis aktif') 
                        : 'Tarif reguler berlaku otomatis'}
                    </div>
                  </div>
                </div>

                {/* Foreigner / WNA Count */}
                <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between gap-2">
                  <div className="text-xs">
                    <div className="font-bold text-[#102a56]">Wisatawan Asing (WNA)</div>
                    <div className="text-[10px] text-slate-500">+Rp 255.000 / orang</div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => updateWna(-1)}
                      disabled={form.wnaCount <= 0}
                      className={`w-7 h-7 rounded-md flex items-center justify-center text-xs font-bold transition-all cursor-pointer ${
                        form.wnaCount <= 0
                          ? 'opacity-30 text-slate-400 bg-slate-100 cursor-not-allowed'
                          : 'bg-[#e5f4ff] text-[#102a56] hover:bg-[#0996f5] hover:text-white'
                      }`}
                      aria-label="Kurangi WNA"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="w-6 text-center font-mono font-bold text-xs text-[#102a56]">
                      {form.wnaCount}
                    </span>
                    <button
                      type="button"
                      onClick={() => updateWna(1)}
                      className="w-7 h-7 rounded-md bg-[#0996f5] text-white flex items-center justify-center text-xs font-bold hover:bg-[#0782d6] transition-all cursor-pointer"
                      aria-label="Tambah WNA"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Customer Contact Details */}
              <div className="space-y-3 pt-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-bold text-[#102a56] mb-1.5">
                      Nama Lengkap Pemesan <span className="text-[#ea0610] font-black">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Budi Santoso"
                      value={form.fullName}
                      onChange={(e) => {
                        setForm({ ...form, fullName: e.target.value });
                        clearFieldError('fullName');
                      }}
                      className={`w-full bg-[#f8fafc] border rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#111318] focus:outline-none transition-colors ${
                        formErrors.fullName ? 'border-rose-500 bg-rose-50/20' : 'border-slate-300 focus:border-[#0996f5] focus:bg-white'
                      }`}
                    />
                    {formErrors.fullName && (
                      <div className="text-[11px] text-rose-600 font-bold mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{formErrors.fullName}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#102a56] mb-1.5">
                      Nomor WhatsApp Aktif <span className="text-[#ea0610] font-black">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0812xxxxxxx"
                      value={form.whatsappNumber}
                      onChange={(e) => {
                        setForm({ ...form, whatsappNumber: e.target.value });
                        clearFieldError('whatsappNumber');
                      }}
                      className={`w-full bg-[#f8fafc] border rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#111318] focus:outline-none transition-colors ${
                        formErrors.whatsappNumber ? 'border-rose-500 bg-rose-50/20' : 'border-slate-300 focus:border-[#0996f5] focus:bg-white'
                      }`}
                    />
                    {formErrors.whatsappNumber && (
                      <div className="text-[11px] text-rose-600 font-bold mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{formErrors.whatsappNumber}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Email Address (MANDATORY) */}
                <div>
                  <label className="block text-xs font-bold text-[#102a56] mb-1.5 flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-[#0996f5]" />
                      <span>Alamat Email (Wajib untuk E-Tiket &amp; Invoice PDF)</span>
                      <span className="text-[#ea0610] font-black">*</span>
                    </span>
                    <span className="text-[10px] text-slate-500 font-normal">Kirim Invoice PDF Otomatis</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="nama.anda@gmail.com"
                    value={form.email}
                    onChange={(e) => {
                      setForm({ ...form, email: e.target.value });
                      clearFieldError('email');
                    }}
                    className={`w-full bg-[#f8fafc] border rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#111318] focus:outline-none font-medium transition-colors ${
                      formErrors.email ? 'border-rose-500 bg-rose-50/20' : 'border-slate-300 focus:border-[#0996f5] focus:bg-white'
                    }`}
                  />
                  {formErrors.email && (
                    <div className="text-[11px] text-rose-600 font-bold mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{formErrors.email}</span>
                    </div>
                  )}
                </div>

                {/* Pickup Address */}
                <div>
                  <label className="block text-xs font-bold text-[#102a56] mb-1.5 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#0996f5]" />
                    <span>Alamat / Lokasi Penjemputan Anda</span>
                    <span className="text-[#ea0610] font-black">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Hotel Santika Malang / Stasiun Gubeng / Bandara Juanda / Basecamp"
                    value={form.pickupAddress}
                    onChange={(e) => {
                      setForm({ ...form, pickupAddress: e.target.value });
                      clearFieldError('pickupAddress');
                    }}
                    className={`w-full bg-[#f8fafc] border rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#111318] focus:outline-none transition-colors ${
                      formErrors.pickupAddress ? 'border-rose-500 bg-rose-50/20' : 'border-slate-300 focus:border-[#0996f5] focus:bg-white'
                    }`}
                  />
                  {formErrors.pickupAddress && (
                    <div className="text-[11px] text-rose-600 font-bold mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{formErrors.pickupAddress}</span>
                    </div>
                  )}
                </div>

                {/* Catatan Khusus Opsional */}
                <div>
                  <label className="block text-xs font-bold text-[#102a56] mb-1.5">
                    Catatan Khusus (Opsional):
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: Minta driver ramah / bawa bayi / alergi tertentu"
                    value={form.specialNotes || ''}
                    onChange={(e) => setForm({ ...form, specialNotes: e.target.value })}
                    className="w-full bg-[#f8fafc] border border-slate-300 rounded-xl px-3.5 py-2 text-xs text-[#111318] focus:outline-none focus:border-[#0996f5] focus:bg-white"
                  />
                </div>
              </div>

              {/* REALTIME CALCULATION SUMMARY & TOTAL HARGA */}
              <div className="bg-[#e5f4ff] border border-[#0996f5]/25 rounded-2xl p-4 sm:p-5 space-y-3 shadow-xs">
                <div className="text-xs font-bold text-[#102a56] uppercase tracking-wider pb-2 border-b border-[#0996f5]/20 flex items-center justify-between">
                  <span>Ringkasan Rincian Tagihan</span>
                  <span className="text-[11px] text-[#0996f5] font-mono font-extrabold">{bookingCode}</span>
                </div>

                <div className="space-y-2 text-xs text-[#111318]/90">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Paket:</span>
                    <span className="font-bold text-[#102a56] text-right max-w-[240px] truncate">
                      {currentPkg.title}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-slate-600">Start / Penjemputan:</span>
                    <span className="font-bold text-[#102a56]">
                      {form.startCity === 'batu' ? 'Kota Batu' : currentPkg.startLocationName}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-slate-600">Tarif Dasar ({form.paxCount} {currentPkg.category === 'trail' ? 'motor' : 'pax'}):</span>
                    <span className="font-mono tabular-nums font-bold text-[#102a56]">
                      {form.paxCount === 0 ? 'Rp 0' : formatRupiah(basePrice)}
                    </span>
                  </div>

                  {currentPkg.category !== 'trail' && currentPkg.id !== 'open-trip-surabaya' && currentPkg.id !== 'private-surabaya' && (
                    <div className="flex justify-between text-slate-600">
                      <span>Dokumentasi:</span>
                      <span className="font-bold text-[#0996f5]">
                        {form.includeDocumentation ? 'Plus Foto & Video DSLR/Mirrorless' : 'Tanpa Dokumentasi'}
                      </span>
                    </div>
                  )}

                  {wnaSurcharge > 0 && (
                    <div className="flex justify-between text-slate-600">
                      <span>Charge WNA ({form.wnaCount}x):</span>
                      <span className="font-mono tabular-nums text-[#0996f5] font-bold">+{formatRupiah(wnaSurcharge)}</span>
                    </div>
                  )}

                  {dronePrice > 0 && (
                    <div className="flex justify-between text-slate-600">
                      <span>Add-on Drone Udara 4K:</span>
                      <span className="font-mono tabular-nums text-[#0996f5] font-bold">+{formatRupiah(dronePrice)}</span>
                    </div>
                  )}
                </div>

                {/* Total Grand Price */}
                <div className="pt-3 border-t border-[#0996f5]/20">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs sm:text-sm font-bold text-[#102a56]">Total Estimasi Biaya:</span>
                    <span className="text-xl sm:text-2xl font-black text-[#102a56] font-mono tabular-nums">
                      {formatRupiah(grandTotal)}
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between text-xs text-slate-600 mt-1">
                    <span>Estimasi DP Booking (30%):</span>
                    <span className="font-mono text-emerald-700 font-black text-sm sm:text-base">{formatRupiah(downPaymentEstimated)}</span>
                  </div>
                  <p className="text-[10px] text-slate-500 mt-1.5">
                    *Pelunasan 70% sisa biaya dibayarkan saat hari H bertemu driver/guide.
                  </p>
                </div>
              </div>

              {/* TOMBOL LANJUTKAN RESERVASI (DI PALING BAWAH SETELAH TOTAL HARGA) */}
              <div className="pt-2 space-y-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 text-xs sm:text-sm font-black text-white bg-gradient-to-r from-[#102a56] via-[#0996f5] to-emerald-600 hover:opacity-95 rounded-2xl transition-all shadow-xl shadow-[#0996f5]/25 flex items-center justify-center gap-2.5 cursor-pointer active:scale-98"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin text-white" />
                      <span>Menyiapkan Tagihan &amp; Laman Rekening...</span>
                    </>
                  ) : (
                    <>
                      <span>Lanjutkan Reservasi &amp; Pembayaran DP (30%)</span>
                      <ArrowRight className="w-4 h-4 text-[#ffc928]" />
                    </>
                  )}
                </button>

                <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] text-slate-500 text-center">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Garansi Berangkat 100% Resmi</span>
                  </span>
                  <span className="text-slate-300">•</span>
                  <span>Invoice Resmi Otomatis Terbit</span>
                  <span className="text-slate-300">•</span>
                  <span>Rekening Legal PT Global Travel Healing</span>
                </div>
              </div>
            </div>
          </form>
        )}
      </div>

      {/* Modal Kalender Resmi High Season TNBTS */}
      {showHighSeasonCalendar && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-xs p-3 sm:p-4 animate-fadeIn">
          <div className="w-full max-w-lg bg-white rounded-3xl p-5 sm:p-6 shadow-2xl relative border border-slate-200 text-[#111318] max-h-[85vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setShowHighSeasonCalendar(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-red-600 to-orange-500 flex items-center justify-center text-white shadow-md">
                <Flame className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-black text-[#102a56]">Kalender High / Peak Season TNBTS</h3>
                <p className="text-xs text-slate-500">Pemetaan Resmi Jadwal Musim Libur Wisata Bromo</p>
              </div>
            </div>

            <p className="text-xs text-slate-600 mb-3 leading-relaxed">
              Jika tanggal keberangkatan yang Anda pilih berada dalam salah satu rentang tanggal di bawah ini, kalkulator pemesanan akan <strong>secara otomatis menerapkan tarif High Season resmi</strong>:
            </p>

            <div className="space-y-2.5 max-h-[50vh] overflow-y-auto pr-1">
              {HIGH_SEASON_PERIODS.map((period, idx) => (
                <div key={idx} className="p-3 bg-slate-50 hover:bg-red-50/50 rounded-2xl border border-slate-200 transition-colors">
                  <div className="flex items-center justify-between text-xs font-bold text-[#102a56]">
                    <span>{period.name}</span>
                    <span className="text-[10px] bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-black">Peak Season</span>
                  </div>
                  <div className="text-xs font-mono font-bold text-red-600 mt-1">
                    📅 {period.startDate} s/d {period.endDate}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    {period.description}
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setShowHighSeasonCalendar(false)}
              className="mt-5 w-full py-2.5 bg-[#0996f5] hover:bg-[#0782d6] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer shadow-md"
            >
              Tutup Kalender
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
