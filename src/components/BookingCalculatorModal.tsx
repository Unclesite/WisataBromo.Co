import React, { useState, useEffect, useRef } from 'react';
import { TourPackage, BookingFormState } from '../types';
import { 
  X, Calendar, Users, Copy, Check, Calculator, ShieldCheck, MapPin, 
  Send, Camera, Plus, Minus, AlertCircle, Mail, Upload, FileText, 
  Download, CreditCard, Wallet, Smartphone, CheckCircle2, RefreshCw,
  Sparkles, Clock, Flame, Info, Video, CheckCheck
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
  ADMIN_TARGET_EMAIL,
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

  const [form, setForm] = useState<BookingFormState>({
    packageId: selectedPkgId,
    startCity: 'malang',
    travelDate: defaultDateStr,
    paxCount: initialPaxCount, // Starts from 2 for SBY via Malang, or 0
    fullName: '',
    whatsappNumber: '',
    email: '', // Required email
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
  const [isSuccessScreen, setIsSuccessScreen] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState(false);
  const [showHighSeasonCalendar, setShowHighSeasonCalendar] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

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
          // Minggu s/d Jumat: Minimal 2 orang (peserta dimulai dari 2 orang)
          newPax = Math.max(2, newPax);
        } else {
          // Sabtu: 1 orang tetap bisa gabung
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
  const tripSchedule = calculateBromoTripSchedule(form.travelDate);
  const highSeasonCheck = checkIsHighSeason(form.travelDate);
  const openTripSbyInfo = getOpenTripSurabayaSchedule(form.travelDate, form.isHighSeason);

  const validateBookingForm = (): boolean => {
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

    if (!form.paymentProofName) {
      errs.paymentProof = 'Bukti transfer pembayaran DP (30%) wajib diunggah/di-upload sebelum mengirim reservasi.';
    }

    setFormErrors(errs);
    return Object.keys(errs).length === 0;
  };

  if (!isOpen) return null;

  // Pricing Calculation Logic (Direct mapping from official pricelist)
  let basePrice = 0;

  if (form.paxCount > 0) {
    if (currentPkg.id === 'open-trip-malang') {
      // Open Trip Malang / Batu
      const isBatu = form.startCity === 'batu';
      let perPax = 0;
      if (!isBatu) {
        // Start: Malang
        // High Season: tanpa doc 325.000, plus doc 375.000
        // Low Season: tanpa doc 275.000, plus doc 325.000
        if (form.isHighSeason) {
          perPax = form.includeDocumentation ? 375000 : 325000;
        } else {
          perPax = form.includeDocumentation ? 325000 : 275000;
        }
      } else {
        // Start: Batu
        // High Season: tanpa doc 375.000, plus doc 425.000
        // Low Season: tanpa doc 325.000, plus doc 375.000
        if (form.isHighSeason) {
          perPax = form.includeDocumentation ? 425000 : 375000;
        } else {
          perPax = form.includeDocumentation ? 375000 : 325000;
        }
      }
      basePrice = perPax * form.paxCount;
    } else if (currentPkg.id === 'open-trip-surabaya') {
      // Start Surabaya: Connected to calendar!
      // Hari Sabtu: via Tosari pukul 22.00 WIB, Rp 400.000 (High season: Rp 425.000), 1 orang bisa gabung
      // Hari Minggu - Jumat: via Malang, Rp 750.000 (High season: Rp 800.000), minimal 2 orang
      const perPax = form.isHighSeason ? openTripSbyInfo.highSeasonPricePerPax : openTripSbyInfo.pricePerPax;
      basePrice = perPax * form.paxCount;
    } else if (currentPkg.id === 'jeep-tosari') {
      // Basecamp: Tosari
      // High Season Tanpa Doc: 1.250.000, Plus Doc foto video: +600.000
      // Low Season: Tanpa Doc 950.000, Plus Doc: +500.000
      const jeepCount = Math.ceil(form.paxCount / (form.includeDocumentation ? 5 : 6)) || 1;
      let singleJeepPrice = 0;
      if (form.isHighSeason) {
        singleJeepPrice = 1250000 + (form.includeDocumentation ? 600000 : 0);
      } else {
        singleJeepPrice = 950000 + (form.includeDocumentation ? 500000 : 0);
      }
      basePrice = singleJeepPrice * jeepCount;
    } else if (currentPkg.id === 'jeep-sukapura') {
      // Basecamp: Sukapura
      // High Season Tanpa Doc: 1.300.000, Plus Doc foto video: +600.000
      // Low Season: Tanpa Doc 1.000.000, Plus Doc: +500.000
      const jeepCount = Math.ceil(form.paxCount / (form.includeDocumentation ? 5 : 6)) || 1;
      let singleJeepPrice = 0;
      if (form.isHighSeason) {
        singleJeepPrice = 1300000 + (form.includeDocumentation ? 600000 : 0);
      } else {
        singleJeepPrice = 1000000 + (form.includeDocumentation ? 500000 : 0);
      }
      basePrice = singleJeepPrice * jeepCount;
    } else if (currentPkg.id === 'jeep-gubugklakah') {
      // Basecamp: Gubugklakah
      // High Season Tanpa Doc: 1.700.000, Plus Doc foto video: +600.000
      // Low Season: Tanpa Doc 1.400.000, Plus Doc: +500.000
      const jeepCount = Math.ceil(form.paxCount / (form.includeDocumentation ? 5 : 6)) || 1;
      let singleJeepPrice = 0;
      if (form.isHighSeason) {
        singleJeepPrice = 1700000 + (form.includeDocumentation ? 600000 : 0);
      } else {
        singleJeepPrice = 1400000 + (form.includeDocumentation ? 500000 : 0);
      }
      basePrice = singleJeepPrice * jeepCount;
    } else if (currentPkg.id === 'long-jeep') {
      // Long Jeep Start Basecamp Gubugklakah
      // weekday: 1.900.000 per grup (tanpa doc), 2.100.000 (plus doc)
      // weekend: 2.150.000 per grup (tanpa doc), 2.500.000 (plus doc)
      // peak/highseason: 2.650.000 per grup (tanpa doc) + doc = +600.000 (total 3.250.000)
      // Shuttle per mobil (Avanza dll) untuk long Jeep dari Malang: +300.000 (low season), 400.000 (high/peak season)
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
      // Start: Malang
      // High Season Tanpa Doc: 2.000.000, Plus Doc High Season: +600.000 (total 2.600.000)
      // Low Season: Tanpa Doc 1.700.000, Plus Doc: +500.000 (total 2.200.000)
      const jeepCount = Math.ceil(form.paxCount / (form.includeDocumentation ? 5 : 6)) || 1;
      let singleJeepPrice = 0;
      if (form.isHighSeason) {
        singleJeepPrice = 2000000 + (form.includeDocumentation ? 600000 : 0);
      } else {
        singleJeepPrice = 1700000 + (form.includeDocumentation ? 500000 : 0);
      }
      basePrice = singleJeepPrice * jeepCount;
    } else if (currentPkg.id === 'private-batu') {
      // Start: Batu
      // High Season Tanpa Doc: 2.100.000, Plus Doc High Season: +600.000 (total 2.700.000)
      // Low Season: Tanpa Doc 1.800.000, Plus Doc: +500.000 (total 2.300.000)
      const jeepCount = Math.ceil(form.paxCount / (form.includeDocumentation ? 5 : 6)) || 1;
      let singleJeepPrice = 0;
      if (form.isHighSeason) {
        singleJeepPrice = 2100000 + (form.includeDocumentation ? 600000 : 0);
      } else {
        singleJeepPrice = 1800000 + (form.includeDocumentation ? 500000 : 0);
      }
      basePrice = singleJeepPrice * jeepCount;
    } else if (currentPkg.id === 'private-surabaya') {
      // PRIVATE START SURABAYA
      // > 30 org: High Season 420.000 (Low 370.000)
      // 18 org: High Season 450.000 (Low 400.000)
      // 16 org: High Season 500.000 (Low 450.000)
      // 14 org: High Season 530.000 (Low 480.000)
      // 12 org: High Season 520.000 (Low 470.000)
      // 10 org: High Season 650.000 (Low 600.000)
      // 8 org: High Season 700.000 (Low 650.000)
      // 7 org: High Season 750.000 (Low 700.000)
      // 6 org: High Season 620.000 (Low 570.000)
      // 4 org: High Season 850.000 (Low 800.000)
      // 2 org: High Season 1.600.000 (Low 1.550.000)
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

  // Handle File Upload for Bukti Transfer with Base64 conversion for Gmail & Drive
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
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
    setHasAttemptedSubmit(true);
    const isValid = validateBookingForm();
    if (!isValid) {
      return;
    }
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
      `*Tanggal Keberangkatan (Jemput):* ${tripSchedule.departureFormatted || form.travelDate} (${currentPkg.id === 'open-trip-surabaya' && openTripSbyInfo.isSaturday ? 'Pukul 22.00 WIB Malam' : 'Pukul 23.00 WIB Malam'})`,
      `*Jadwal Golden Sunrise Bromo:* ${tripSchedule.sunriseFormatted || '-'} (Pukul 05.00 WIB Pagi Keesokan Harinya)`,
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
      `*Bukti Transfer DP:* Terlampir (${form.paymentProofName}) - Wajib Diverifikasi`,
      form.specialNotes ? `*Catatan Tambahan:* ${form.specialNotes}` : null,
      `---------------------------------------`,
      `*Total Estimasi Biaya:* ${formatRupiah(grandTotal)}`,
      `*Estimasi DP Booking (30%):* ${formatRupiah(downPaymentEstimated)}`,
      `---------------------------------------`,
      `Halo Admin WisataBromo.co, saya sudah melengkapi seluruh formulir dan mengunggah bukti transfer DP. Mohon segera verifikasi reservasi dan kirimkan e-tiket resmi SIMAKSI TNBTS. Terima kasih!`
    ].filter(Boolean);

    return encodeURIComponent(lines.join('\n'));
  };

  const handleSubmitBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    setHasAttemptedSubmit(true);
    const isValid = validateBookingForm();
    if (!isValid) {
      return;
    }

    setIsSubmitting(true);

    const bookingPayload: BookingPayload = {
      bookingCode,
      tripDate: form.travelDate,
      fullName: form.fullName,
      whatsappNumber: form.whatsappNumber,
      email: form.email,
      packageTitle: currentPkg ? currentPkg.title : 'Paket Wisata Bromo',
      packageId: currentPkg?.id,
      paxCount: form.paxCount,
      wnaCount: form.wnaCount,
      pickupAddress: form.pickupAddress,
      paymentMethod: form.paymentMethod,
      paymentProofName: form.paymentProofName || 'bukti-transfer',
      paymentProofDataUrl: form.paymentProofPreview || undefined,
      grandTotal,
      downPayment: downPaymentEstimated,
      specialNotes: form.specialNotes,
      includeDocumentation: form.includeDocumentation,
      includeDrone: form.includeDrone,
    };

    const bookingRecord = {
      ...bookingPayload,
      createdAt: new Date().toISOString(),
      status: 'DP_SUBMITTED' as const
    };

    try {
      // Concurrently persist to Firestore and dispatch Hostinger SMTP email with exact live payload
      await Promise.allSettled([
        saveBookingToFirestore(bookingRecord),
        triggerBookingEmailNotification(bookingRecord)
      ]);
      setIsSuccessScreen(true);
    } catch (err: any) {
      console.error('Booking save error:', err);
      setIsSuccessScreen(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOpenWhatsApp = () => {
    const msg = constructWhatsAppMessage();
    const waUrl = `https://wa.me/6281222290318?text=${msg}`;
    window.open(waUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="relative bg-white border border-slate-200 rounded-3xl w-full max-w-4xl overflow-hidden shadow-2xl my-4 sm:my-6">
        {/* Modal Top Bar */}
        <div className="p-4 sm:p-6 bg-[#eaf2ff] border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#3d72fe] text-white flex items-center justify-center shadow-xs">
              <Calculator className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black text-[#111318]">
                Formulir Reservasi Resmi & Invoice
              </h3>
              <p className="text-xs text-slate-600 font-medium">
                PT Global Travel Healing · Rekening Resmi & Konfirmasi Instan
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-500 hover:text-[#111318] hover:bg-white rounded-xl transition-colors cursor-pointer min-h-[40px] min-w-[40px] flex items-center justify-center"
            aria-label="Tutup kalkulator"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Success Screen view or Form view */}
        {isSuccessScreen ? (
          <div className="p-6 sm:p-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-600 flex items-center justify-center mx-auto">
              <Check className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-xl font-extrabold text-[#102a56] mb-1">
                Pemesanan Anda Berhasil Diproses!
              </h4>
              <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                Rincian reservasi telah disiapkan untuk WhatsApp Admin (+62 812 2229 0318) dan konfirmasi e-tiket resmi akan dikirimkan ke email <strong className="text-[#102a56]">{form.email}</strong>.
              </p>
            </div>

            <div className="p-4 bg-[#eaf2ff] border border-[#3d72fe]/25 rounded-2xl max-w-md mx-auto space-y-3 text-left">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-slate-500 font-semibold">Kode Reservasi Anda:</div>
                  <div className="text-lg font-mono font-black text-[#102a56] tracking-wider">
                    {bookingCode}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyCode}
                  className="p-2 text-[#3d72fe] hover:bg-white rounded-lg border border-[#3d72fe]/20 transition-colors cursor-pointer text-xs font-bold flex items-center gap-1"
                >
                  {copiedCode ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  <span>Salin Kode</span>
                </button>
              </div>

              <div className="pt-2 border-t border-[#3d72fe]/15 flex items-center justify-between text-xs">
                <span className="text-slate-600">Total Biaya:</span>
                <span className="font-mono font-bold text-[#102a56]">{formatRupiah(grandTotal)}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-emerald-700 font-bold">DP Pemesanan (30%):</span>
                <span className="font-mono font-bold text-emerald-700">{formatRupiah(downPaymentEstimated)}</span>
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
        ) : (
          <form onSubmit={handleSubmitBooking} className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 max-h-[78vh] overflow-y-auto">
            {/* Left 7 Columns: Form Inputs */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              {/* Package Selection */}
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
                  className="w-full bg-[#f8fafc] border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#111318] focus:outline-none focus:border-[#3d72fe] focus:bg-white font-medium"
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
                <div className="p-3.5 bg-[#eaf2ff]/60 border border-[#3d72fe]/20 rounded-2xl space-y-2">
                  <label className="block text-xs font-bold text-[#102a56]">
                    Pilih Titik Start:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setForm((prev) => ({ ...prev, startCity: 'malang' }))}
                      className={`p-2.5 rounded-xl border text-xs font-bold text-center cursor-pointer transition-all ${
                        form.startCity === 'malang'
                          ? 'bg-[#3d72fe] text-white border-[#3d72fe] shadow-xs'
                          : 'bg-white text-[#102a56] border-slate-200 hover:border-[#3d72fe]'
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
                          ? 'bg-[#3d72fe] text-white border-[#3d72fe] shadow-xs'
                          : 'bg-white text-[#102a56] border-slate-200 hover:border-[#3d72fe]'
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
                <div className="p-3.5 bg-gradient-to-br from-blue-50/80 via-indigo-50/50 to-white border border-[#3d72fe]/30 rounded-2xl space-y-2.5 shadow-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-[#102a56] flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#3d72fe]" />
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

                    <div className="sm:text-right shrink-0">
                      <div className="text-[10px] text-slate-500 uppercase font-bold">Tarif Terpilih:</div>
                      <div className="text-base font-black text-[#3d72fe] font-mono">
                        {formatRupiah(form.isHighSeason ? openTripSbyInfo.highSeasonPricePerPax : openTripSbyInfo.pricePerPax)}
                        <span className="text-[10px] font-normal text-slate-500"> / org</span>
                      </div>
                      {form.isHighSeason && (
                        <div className="text-[9px] font-bold text-red-600 flex items-center justify-end gap-0.5">
                          <Flame className="w-2.5 h-2.5" /> High Season Aktif
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Quick Helper to choose next Saturday */}
                  {!openTripSbyInfo.isSaturday && (
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between text-[11px] bg-amber-50/90 border border-amber-200/80 p-2.5 rounded-xl text-amber-900 gap-2">
                      <span className="leading-snug">
                        Ingin tarif hemat <strong>Rp 400.000/orang</strong> &amp; <strong>1 orang bisa gabung</strong>?
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          const curr = form.travelDate ? new Date(form.travelDate) : new Date();
                          const day = curr.getDay();
                          const diff = (6 - day + 7) % 7 || 7;
                          curr.setDate(curr.getDate() + diff);
                          const nextSatStr = curr.toISOString().split('T')[0];
                          handleTravelDateChange(nextSatStr);
                        }}
                        className="px-3 py-1 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg text-[10px] transition-colors cursor-pointer shrink-0 self-start sm:self-auto shadow-2xs"
                      >
                        Pilih Hari Sabtu Terdekat (Via Tosari)
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* Documentation Toggle for Open & Private Trips */}
              {currentPkg.id !== 'open-trip-surabaya' && currentPkg.id !== 'private-surabaya' && currentPkg.category !== 'trail' && (
                <div className="p-3.5 bg-[#eaf2ff]/60 border border-[#3d72fe]/20 rounded-2xl space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#102a56] flex items-center gap-1.5">
                      <Camera className="w-3.5 h-3.5 text-[#3d72fe]" />
                      Pilihan Paket Dokumentasi Foto/Video:
                    </span>
                    <span className="text-[11px] font-bold text-[#3d72fe]">
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
                          ? 'bg-[#3d72fe] text-white border-[#3d72fe] shadow-xs'
                          : 'bg-white text-[#102a56] border-slate-200 hover:border-[#3d72fe]'
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
                    ? 'bg-gradient-to-br from-indigo-50/90 via-blue-50/70 to-purple-50/40 border-[#3d72fe]/40 shadow-xs'
                    : 'bg-[#eaf2ff]/40 border-slate-200'
                }`}>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#102a56] flex items-center gap-1.5">
                      <Video className="w-3.5 h-3.5 text-[#3d72fe]" />
                      <span>Add-on Dokumentasi Drone (Video Udara 4K):</span>
                    </span>
                    <span className={`text-[11px] font-black px-2.5 py-0.5 rounded-md ${
                      form.includeDrone ? 'bg-[#3d72fe] text-white shadow-2xs' : 'bg-slate-200 text-slate-700'
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
                          ? 'bg-gradient-to-r from-[#3d72fe] to-indigo-600 text-white border-transparent shadow-xs'
                          : 'bg-white text-[#102a56] border-slate-200 hover:border-[#3d72fe]'
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
                <div className="p-3.5 bg-[#eaf2ff]/60 border border-[#3d72fe]/20 rounded-2xl space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-[#102a56]">Kategori Tarif Hari Long Jeep:</span>
                      <div className="text-[10px] text-slate-500">Ditentukan otomatis berdasarkan tanggal keberangkatan</div>
                    </div>
                    <span className={`text-[11px] font-black px-3 py-1 rounded-full shadow-xs ${
                      form.dayType === 'highseason' || form.isHighSeason
                        ? 'bg-[#ea0610] text-white'
                        : form.dayType === 'weekend'
                        ? 'bg-[#3d72fe] text-white'
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

              {/* Date & Interactive Pax Count (+ and - starting from 0) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs font-bold text-[#102a56] flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#3d72fe]" />
                      <span>2. Tanggal Keberangkatan Trip</span>
                      <span className="text-[#ea0610] font-black">*</span>
                    </label>
                    <button
                      type="button"
                      onClick={() => setShowHighSeasonCalendar(true)}
                      className="text-[10px] text-[#3d72fe] hover:underline font-bold flex items-center gap-0.5 cursor-pointer"
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
                      formErrors.travelDate ? 'border-rose-500 bg-rose-50/20' : 'border-slate-300 focus:border-[#3d72fe] focus:bg-white'
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
                    <Users className="w-3.5 h-3.5 text-[#3d72fe]" />
                    <span>3. {currentPkg.category === 'trail' ? 'Jumlah Unit Motor' : 'Jumlah Peserta (Pax)'}</span>
                    <span className="text-[#ea0610] font-black">*</span>
                  </label>

                  {/* Stepper starting from 0 */}
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
                            : 'bg-white hover:bg-[#eaf2ff] text-[#102a56] hover:text-[#3d72fe] shadow-xs active:scale-95'
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
                        className="w-9 h-9 rounded-lg bg-[#3d72fe] hover:bg-[#2b5ae0] text-white flex items-center justify-center font-bold shadow-xs transition-all cursor-pointer active:scale-95"
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
              {tripSchedule.departureFormatted && (
                <div className="p-3.5 bg-gradient-to-br from-amber-50 via-orange-50/50 to-blue-50/30 border border-amber-200 rounded-2xl text-xs space-y-2.5 shadow-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-black text-[#102a56] flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-amber-600" />
                      <span>Jadwal Penjemputan &amp; Golden Sunrise Bromo</span>
                    </span>
                    <span className="text-[10px] bg-amber-200/80 text-amber-950 font-bold px-2 py-0.5 rounded-full">
                      Penting
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="bg-white/95 p-2.5 rounded-xl border border-amber-200/70 shadow-xs">
                      <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">1. Keberangkatan / Jemput:</div>
                      <div className="font-extrabold text-[#102a56] text-xs mt-0.5">{tripSchedule.departureFormatted}</div>
                      <div className="text-[11px] text-amber-700 font-black mt-0.5">
                        {currentPkg.id === 'open-trip-surabaya' && openTripSbyInfo.isSaturday 
                          ? 'Pukul 22.00 WIB (10 PM Malam)' 
                          : 'Pukul 23.00 WIB (11 PM Malam)'}
                      </div>
                    </div>

                    <div className="bg-white/95 p-2.5 rounded-xl border border-emerald-200/70 shadow-xs">
                      <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">2. Golden Sunrise Bromo:</div>
                      <div className="font-extrabold text-[#102a56] text-xs mt-0.5">{tripSchedule.sunriseFormatted}</div>
                      <div className="text-[11px] text-emerald-700 font-black mt-0.5">Pukul 05.00 WIB (Pagi Keesokan Harinya)</div>
                    </div>
                  </div>

                  <div className="text-[11px] text-slate-700 bg-white/95 p-3 rounded-xl border border-amber-200 flex items-start gap-2 leading-relaxed">
                    <Info className="w-4 h-4 text-[#3d72fe] shrink-0 mt-0.5" />
                    <span>
                      <strong>Konfirmasi Jadwal Sunrise:</strong> Anda memilih tanggal keberangkatan <strong>{tripSchedule.departureFormatted}</strong> pada <strong>{currentPkg.id === 'open-trip-surabaya' && openTripSbyInfo.isSaturday ? 'pukul 22.00 (10 PM malam)' : 'pukul 23.00 (11 PM malam)'}</strong>, maka jadwal <strong>Golden Sunrise Bromo Anda adalah pada tanggal {tripSchedule.sunriseFormatted} pagi keesokan harinya</strong>.
                    </span>
                  </div>
                </div>
              )}

              {/* High Season Auto-Detected Alert Banner */}
              {highSeasonCheck.isHighSeason && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-2xl text-xs flex items-start gap-2.5 text-red-900 shadow-xs animate-fadeIn">
                  <Flame className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-black text-red-700">Periode High / Peak Season Terdeteksi:</span>
                      <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-md">Harga High Season Aktif</span>
                    </div>
                    <div className="font-bold text-slate-800 text-[11px] mt-0.5">{highSeasonCheck.seasonName}</div>
                    <div className="text-[10px] text-slate-600 mt-0.5">
                      {highSeasonCheck.seasonDescription}. Tarif pemesanan otomatis menggunakan harga resmi High Season TNBTS.
                    </div>
                  </div>
                </div>
              )}

              {/* Automatic Season Status & WNA Stepper */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Automatic Season Status Card (No Checkbox Required) */}
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

                {/* Foreigner / WNA Count with Stepper */}
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
                          : 'bg-[#eaf2ff] text-[#102a56] hover:bg-[#3d72fe] hover:text-white'
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
                      className="w-7 h-7 rounded-md bg-[#3d72fe] text-white flex items-center justify-center text-xs font-bold hover:bg-[#2b5ae0] transition-all cursor-pointer"
                      aria-label="Tambah WNA"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Customer Contact Details with REQUIRED VALIDATIONS */}
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
                        formErrors.fullName ? 'border-rose-500 bg-rose-50/20' : 'border-slate-300 focus:border-[#3d72fe] focus:bg-white'
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
                        formErrors.whatsappNumber ? 'border-rose-500 bg-rose-50/20' : 'border-slate-300 focus:border-[#3d72fe] focus:bg-white'
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
                      <Mail className="w-3.5 h-3.5 text-[#3d72fe]" />
                      <span>Alamat Email (Wajib untuk E-Tiket & Invoice PDF)</span>
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
                      formErrors.email ? 'border-rose-500 bg-rose-50/20' : 'border-slate-300 focus:border-[#3d72fe] focus:bg-white'
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
                    <MapPin className="w-3.5 h-3.5 text-[#3d72fe]" />
                    <span>Alamat / Lokasi Penjemputan Anda</span>
                    <span className="text-[#ea0610] font-black">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Hotel Santika Malang / Stasiun Gubeng / Bandara Juanda"
                    value={form.pickupAddress}
                    onChange={(e) => {
                      setForm({ ...form, pickupAddress: e.target.value });
                      clearFieldError('pickupAddress');
                    }}
                    className={`w-full bg-[#f8fafc] border rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#111318] focus:outline-none transition-colors ${
                      formErrors.pickupAddress ? 'border-rose-500 bg-rose-50/20' : 'border-slate-300 focus:border-[#3d72fe] focus:bg-white'
                    }`}
                  />
                  {formErrors.pickupAddress && (
                    <div className="text-[11px] text-rose-600 font-bold mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{formErrors.pickupAddress}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Upload Bukti Transfer DP (WAJIB / REQUIRED) */}
              <div className={`p-4 rounded-2xl border-2 transition-all space-y-3 ${
                formErrors.paymentProof 
                  ? 'bg-rose-50/80 border-rose-400' 
                  : form.paymentProofName 
                  ? 'bg-emerald-50/80 border-emerald-400' 
                  : 'bg-[#f8fafc] border-slate-300'
              }`}>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-[#102a56] flex items-center gap-1.5">
                    <Upload className="w-4 h-4 text-[#3d72fe]" />
                    <span>Upload Bukti Transfer DP 30%</span>
                    <span className="text-[#ea0610] font-black">* (Wajib)</span>
                  </span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                    form.paymentProofName ? 'bg-emerald-200 text-emerald-800' : 'bg-rose-100 text-rose-800'
                  }`}>
                    {form.paymentProofName ? 'Terlampir ✓' : 'Wajib Upload'}
                  </span>
                </div>

                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Silakan transfer DP (30%) ke rekening resmi di sebelah kanan, lalu unggah foto/tangkapan layar (screenshot) bukti transfer Anda di bawah ini:
                </p>

                {/* Upload Action Box */}
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className={`border-2 border-dashed rounded-xl p-4 text-center cursor-pointer transition-all group ${
                    formErrors.paymentProof
                      ? 'border-rose-400 bg-white hover:bg-rose-50/40'
                      : form.paymentProofName
                      ? 'border-emerald-400 bg-white'
                      : 'border-slate-300 hover:border-[#3d72fe] bg-white'
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
                            className="max-h-28 rounded-lg object-contain border border-emerald-300 shadow-xs" 
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
                          className="text-[11px] font-bold text-[#3d72fe] hover:underline cursor-pointer"
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
                    <div className="flex flex-col items-center justify-center gap-1.5 py-1">
                      <div className="w-10 h-10 rounded-full bg-[#eaf2ff] text-[#3d72fe] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Upload className="w-5 h-5" />
                      </div>
                      <div className="text-xs font-black text-[#102a56]">
                        Klik untuk Unggah Foto Bukti Transfer DP
                      </div>
                      <div className="text-[10px] text-slate-500">
                        Mendukung format JPG, PNG, WEBP, atau PDF (Screenshot m-Banking / Struk ATM / E-Wallet)
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
            </div>

            {/* Right 5 Columns: Realtime Calculation & Official Bank Accounts */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                {/* Cost Estimation Card */}
                <div className="bg-[#eaf2ff] border border-[#3d72fe]/20 rounded-2xl p-4 sm:p-5 space-y-3">
                  <div className="text-xs font-bold text-[#102a56] uppercase tracking-wider pb-2 border-b border-[#3d72fe]/20 flex items-center justify-between">
                    <span>Ringkasan Tagihan</span>
                    <span className="text-[11px] text-[#3d72fe] font-mono font-extrabold">{bookingCode}</span>
                  </div>

                  <div className="space-y-2 text-xs text-[#111318]/90">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Paket:</span>
                      <span className="font-bold text-[#102a56] text-right max-w-[180px] truncate">
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
                      <span className="text-slate-600">Tarif Dasar ({form.paxCount} pax):</span>
                      <span className="font-mono tabular-nums font-bold text-[#102a56]">
                        {form.paxCount === 0 ? 'Rp 0' : formatRupiah(basePrice)}
                      </span>
                    </div>

                    {currentPkg.category !== 'trail' && currentPkg.id !== 'open-trip-surabaya' && currentPkg.id !== 'private-surabaya' && (
                      <div className="flex justify-between text-slate-600">
                        <span>Dokumentasi:</span>
                        <span className="font-bold text-[#3d72fe]">
                          {form.includeDocumentation ? 'Plus Foto & Video DSLR' : 'Tanpa Dokumentasi'}
                        </span>
                      </div>
                    )}

                    {wnaSurcharge > 0 && (
                      <div className="flex justify-between text-slate-600">
                        <span>Charge WNA ({form.wnaCount}x):</span>
                        <span className="font-mono tabular-nums text-[#3d72fe] font-bold">+{formatRupiah(wnaSurcharge)}</span>
                      </div>
                    )}

                    {dronePrice > 0 && (
                      <div className="flex justify-between text-slate-600">
                        <span>Add-on Drone Udara 4K:</span>
                        <span className="font-mono tabular-nums text-[#3d72fe] font-bold">+{formatRupiah(dronePrice)}</span>
                      </div>
                    )}
                  </div>

                  {/* Total Grand Price */}
                  <div className="pt-3 border-t border-[#3d72fe]/20">
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs font-bold text-[#102a56]">Total Estimasi:</span>
                      <span className="text-xl font-black text-[#102a56] font-mono tabular-nums">
                        {formatRupiah(grandTotal)}
                      </span>
                    </div>
                    <div className="flex items-baseline justify-between text-[11px] text-slate-600 mt-1">
                      <span>Estimasi DP Booking (30%):</span>
                      <span className="font-mono text-emerald-700 font-extrabold text-sm">{formatRupiah(downPaymentEstimated)}</span>
                    </div>
                    <p className="text-[10px] text-slate-500 mt-1.5">
                      *Pelunasan 70% sisa biaya dibayarkan saat hari H bertemu driver/guide.
                    </p>
                  </div>
                </div>

                {/* Official Bank Account & E-Wallet Box */}
                <div className="p-3.5 bg-amber-50/80 border border-amber-300/80 rounded-2xl space-y-2.5">
                  <div className="flex items-center justify-between text-xs font-bold text-amber-900 uppercase">
                    <span className="flex items-center gap-1.5">
                      <CreditCard className="w-3.5 h-3.5 text-amber-700" />
                      Rekening Resmi WisataBromo.co:
                    </span>
                    <span className="text-[10px] text-emerald-700 font-bold bg-emerald-100 px-2 py-0.5 rounded">PT Legal</span>
                  </div>

                  {/* Bank BCA Card */}
                  <div className="p-2.5 bg-white rounded-xl border border-amber-200 flex items-center justify-between gap-2">
                    <div>
                      <div className="text-xs font-extrabold text-[#102a56]">BANK BCA</div>
                      <div className="font-mono font-black text-sm text-[#3d72fe]">5200888415</div>
                      <div className="text-[10px] text-slate-500">a/n PT Global Travel Healing</div>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyBca}
                      className="px-2.5 py-1.5 bg-[#eaf2ff] hover:bg-[#3d72fe] text-[#3d72fe] hover:text-white rounded-lg text-[11px] font-bold transition-colors cursor-pointer shrink-0"
                    >
                      {copiedBca ? 'Tersalin ✓' : 'Salin BCA'}
                    </button>
                  </div>

                  {/* E-Wallet DANA & OVO */}
                  <div className="p-2.5 bg-white rounded-xl border border-amber-200 flex items-center justify-between gap-2">
                    <div>
                      <div className="text-xs font-extrabold text-[#102a56]">DANA & OVO</div>
                      <div className="font-mono font-black text-sm text-emerald-700">08113212318</div>
                      <div className="text-[10px] text-slate-500">a/n Achmad J</div>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyEwallet}
                      className="px-2.5 py-1.5 bg-[#eaf2ff] hover:bg-[#3d72fe] text-[#3d72fe] hover:text-white rounded-lg text-[11px] font-bold transition-colors cursor-pointer shrink-0"
                    >
                      {copiedEwallet ? 'Tersalin ✓' : 'Salin No'}
                    </button>
                  </div>
                </div>
              </div>

              {/* Action Buttons: Submit & Download PDF */}
              <div className="space-y-2 pt-1">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-4 text-xs font-black text-white bg-gradient-to-r from-[#102a56] via-[#3d72fe] to-emerald-600 hover:opacity-95 rounded-xl transition-all shadow-lg shadow-[#3d72fe]/25 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin text-white" />
                      <span>Menyimpan Reservasi &amp; Mengirim Email...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-[#ffc928]" />
                      <span>Kirim Bukti Transfer &amp; Konfirmasi Reservasi</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleDownloadInvoice}
                  className="w-full py-2.5 px-4 text-xs font-bold text-[#102a56] hover:bg-[#eaf2ff] bg-white border border-slate-300 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Download className="w-4 h-4 text-[#3d72fe]" />
                  <span>Unduh E-Invoice PDF (Bukti Reservasi Resmi)</span>
                </button>

                <div className="text-[10px] text-slate-500 text-center flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>E-Tiket &amp; Invoice PDF resmi otomatis dikirimkan ke email &amp; WhatsApp Anda</span>
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
              className="mt-5 w-full py-2.5 bg-[#3d72fe] hover:bg-[#2b5ae0] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer shadow-md"
            >
              Tutup Kalender
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
