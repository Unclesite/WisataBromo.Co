import React, { useState, useMemo, useEffect } from 'react';
import { 
  ArrowLeft, Sparkles, Utensils, CheckCircle2, AlertCircle, 
  MapPin, Calendar, User, Phone, Mail, FileText, Upload, 
  Copy, Check, MessageCircle, RefreshCw, ShieldCheck, Heart, Coffee, 
  ChevronRight, AlertTriangle, CreditCard, ChevronDown, Download
} from 'lucide-react';
import { 
  PicnicPackage, PicnicLocation, PicnicAddon, BirthdayDetails, 
  SelectedMenuQuantities, SelectedMenuItemQuantity 
} from '../../types/picnic';
import { PICNIC_PACKAGES, PICNIC_LOCATIONS, PICNIC_ADDONS } from '../../data/picnicData';
import { OFFICIAL_PAYMENT_ACCOUNTS, PAYMENT_METHODS } from '../../data/paymentConfig';
import { calculatePicnicPricing, formatRupiah } from '../../utils/picnicPricingEngine';
import { generatePicnicInvoicePDF } from '../../utils/picnicPdfInvoiceGenerator';
import { QuantityMenuSelector } from './QuantityMenuSelector';
import { FixedPackageContents } from './FixedPackageContents';
import { LocationSelector } from './LocationSelector';
import { DecorationColorSelector } from './DecorationColorSelector';
import { PaxSelector } from './PaxSelector';
import { AddonSelector } from './AddonSelector';
import { Footer } from '../Footer';
import { saveBookingToFirestore, updateBookingInFirestore } from '../../services/firestoreBookingService';
import { triggerBookingEmailNotification } from '../../services/emailNotificationService';
import imgPicnicSavana from '../../assets/images/bromo_picnic_experience_aesthetic.png';
import imgWidodaren from '../../assets/images/bromo_widodaren_cliff_1790774506404.jpg';
import imgGoldenHour from '../../assets/images/bromo_golden_hour_1790774487968.jpg';

import { useLanguage } from '../../i18n/LanguageContext';

interface PicnicDedicatedPageProps {
  onBackToHome: () => void;
  onOpenJeepBooking?: () => void;
}

export const PicnicDedicatedPage: React.FC<PicnicDedicatedPageProps> = ({
  onBackToHome,
  onOpenJeepBooking
}) => {
  const { language, t } = useLanguage();

  const getLocalizedPackage = (pkg: PicnicPackage) => {
    if (language === 'en') {
      return {
        ...pkg,
        name: pkg.id === 'paket-1' ? 'Package 1 (Breakfast & Snacks)'
            : pkg.id === 'paket-2' ? 'Package 2 (Lunch Specialties)'
            : pkg.id === 'paket-3' ? 'Package 3 (Best Value Complete Feast)'
            : pkg.id === 'paket-4' ? 'Package 4 (Main Course Express)'
            : pkg.id === 'paket-bbq' ? 'BBQ Grill Package'
            : pkg.id === 'paket-bbq-suki' ? 'BBQ + Steamboat Suki'
            : pkg.id === 'paket-ngemie' ? 'Ngemie Package (Noodles & Chicken)'
            : pkg.id === 'paket-ultimate' ? 'Ultimate Luxury VIP Package'
            : pkg.name,
        shortDescription: pkg.id === 'paket-1' ? 'Relaxing breakfast option combining 2 savory snacks and warm beverages.'
            : pkg.id === 'paket-2' ? 'Complete lunch featuring East Javanese specialties, warm snacks, and cold beverages.'
            : pkg.id === 'paket-3' ? 'Our most popular complete feast: main course, snacks, sweet desserts, and beverages.'
            : pkg.id === 'paket-4' ? 'Practical & filling choice: hot Indonesian main course with choice of drinks.'
            : pkg.id === 'paket-bbq' ? 'Savor sizzling marinated premium beef & chicken slices in cold caldera air.'
            : pkg.id === 'paket-bbq-suki' ? 'Combine sizzling BBQ grilling with hot Tomyum & broth steamboat hotpot.'
            : pkg.id === 'paket-ngemie' ? 'Legendary Indomie noodles in cold Bromo air served with fried chicken, egg, and rice.'
            : pkg.id === 'paket-ultimate' ? 'Most lavish picnic feast: snacks, main courses, BBQ grill, desserts, and free-flow drinks.'
            : pkg.shortDescription
      };
    } else if (language === 'zh') {
      return {
        ...pkg,
        name: pkg.id === 'paket-1' ? '1号套餐（风味早餐）'
            : pkg.id === 'paket-2' ? '2号套餐（正宗午餐）'
            : pkg.id === 'paket-3' ? '3号套餐（超值全能宴）'
            : pkg.id === 'paket-4' ? '4号套餐（精选主食）'
            : pkg.id === 'paket-bbq' ? 'BBQ 烤肉套餐'
            : pkg.id === 'paket-bbq-suki' ? 'BBQ 烤肉 + 寿喜烧火锅'
            : pkg.id === 'paket-ngemie' ? 'Ngemie 国民拉面套餐'
            : pkg.id === 'paket-ultimate' ? 'Ultimate 奢华尊享 VIP 套餐'
            : pkg.name,
        shortDescription: pkg.id === 'paket-1' ? '轻松惬意的早餐选择，结合2款咸甜点心与热饮。'
            : pkg.id === 'paket-2' ? '正宗印尼特色午餐，搭配温暖小吃与清凉饮品。'
            : pkg.id === 'paket-3' ? '最受欢迎的全能美食盛宴：主食、小吃、甜点与特饮一应俱全。'
            : pkg.id === 'paket-4' ? '实惠暖胃之选：热气腾腾的印尼经典主食与特调饮品。'
            : pkg.id === 'paket-bbq' ? '在高原清凉空气中现场炙烤特调腌制牛肉片与鸡肉片。'
            : pkg.id === 'paket-bbq-suki' ? '烤肉与冬阴功/高汤鲜美火锅双重美食享受。'
            : pkg.id === 'paket-ngemie' ? '高寒火山地带品尝印尼传奇方便面、炸鸡、煎蛋与白饭。'
            : pkg.id === 'paket-ultimate' ? '最高规格奢华野餐盛宴：6款小吃、4款主食、BBQ、甜点及畅饮。'
            : pkg.shortDescription
      };
    }
    return pkg;
  };

  // 1. Selection State
  const [selectedPackage, setSelectedPackage] = useState<PicnicPackage>(PICNIC_PACKAGES[0]);
  const [paxCount, setPaxCount] = useState<number>(PICNIC_PACKAGES[0].minPax || 4);
  const [selectedLocation, setSelectedLocation] = useState<PicnicLocation>(PICNIC_LOCATIONS[0]);
  const [selectedDecorationColor, setSelectedDecorationColor] = useState<string>('Coklat Putih');
  
  // Quantities: groupId -> { itemName: qty }
  const [menuQuantities, setMenuQuantities] = useState<SelectedMenuQuantities>({});
  
  // Addons & Birthday details
  const [selectedAddons, setSelectedAddons] = useState<PicnicAddon[]>([]);
  const [birthdayDetails, setBirthdayDetails] = useState<BirthdayDetails>({
    balloonColor: '',
    letterText: '',
    cakeText: ''
  });

  // 2. Customer Form State
  const [fullName, setFullName] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [email, setEmail] = useState('');
  const [tripDate, setTripDate] = useState('');
  const [specialNotes, setSpecialNotes] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('bca');

  // 3. Flow & UI Status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  
  // 4. Success & Payment State
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [createdBookingCode, setCreatedBookingCode] = useState('');
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);

  // 5. Payment Proof Upload State
  const [paymentProofDataUrl, setPaymentProofDataUrl] = useState<string | null>(null);
  const [paymentProofName, setPaymentProofName] = useState('');
  const [isUploadingProof, setIsUploadingProof] = useState(false);
  const [proofUploadSuccess, setProofUploadSuccess] = useState(false);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Bromo Picnic Experience (8 Pilihan Menu) - WisataBromo.co';
  }, []);

  // When package changes, update minPax if current pax is below minPax
  const handleSelectPackage = (pkg: PicnicPackage) => {
    setSelectedPackage(pkg);
    const newMin = pkg.minPax || 4;
    if (paxCount < newMin) {
      setPaxCount(newMin);
    }
    // Reset menu quantities for new package
    setMenuQuantities({});
    setSubmissionError(null);

    // Smooth scroll to configurator section
    const el = document.getElementById('picnic-configurator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle Pax change
  const handlePaxChange = (newPax: number) => {
    const min = selectedPackage.minPax || 4;
    const safePax = Math.max(min, newPax);
    setPaxCount(safePax);
  };

  // Handle quantity change for a specific item in a group
  const handleMenuQuantityChange = (groupId: string, itemName: string, newQty: number) => {
    setMenuQuantities((prev: SelectedMenuQuantities) => {
      const groupPrev = prev[groupId] || {};
      const updatedGroup = { ...groupPrev, [itemName]: newQty };
      if (newQty <= 0) {
        delete updatedGroup[itemName];
      }
      return { ...prev, [groupId]: updatedGroup };
    });
  };

  // Handle Addon toggle
  const handleToggleAddon = (addon: PicnicAddon) => {
    setSelectedAddons(prev => {
      const exists = prev.some(a => a.id === addon.id);
      if (exists) {
        return prev.filter(a => a.id !== addon.id);
      } else {
        if (addon.category === 'birthday') {
          const withoutBirthday = prev.filter(a => a.category !== 'birthday');
          return [...withoutBirthday, addon];
        }
        return [...prev, addon];
      }
    });
  };

  const handleUpdateBirthdayDetails = (details: Partial<BirthdayDetails>) => {
    setBirthdayDetails(prev => ({
      ...prev,
      ...details
    }));
  };

  // Pricing Calculation via centralized engine
  const pricing = useMemo(() => {
    return calculatePicnicPricing({
      packageItem: selectedPackage,
      paxCount,
      location: selectedLocation,
      selectedAddons
    });
  }, [selectedPackage, paxCount, selectedLocation, selectedAddons]);

  // Validation: Check that every selectionGroup has total items equal to paxCount
  const menuValidation = useMemo(() => {
    const groups = selectedPackage.selectionGroups || [];
    const errors: string[] = [];

    groups.forEach(g => {
      const gQuantities = menuQuantities[g.id || ''] || {};
      const totalInGroup = Object.values(gQuantities).reduce((sum: number, q: number) => sum + (Number(q) || 0), 0);
      
      if (totalInGroup < paxCount) {
        errors.push(`Pilihan "${g.title}" kurang ${paxCount - totalInGroup} porsi (saat ini ${totalInGroup}/${paxCount})`);
      } else if (totalInGroup > paxCount) {
        errors.push(`Pilihan "${g.title}" kelebihan ${totalInGroup - paxCount} porsi (saat ini ${totalInGroup}/${paxCount})`);
      }
    });

    return {
      isValid: errors.length === 0,
      errors
    };
  }, [selectedPackage, menuQuantities, paxCount]);

  // Copy helper
  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedAccount(id);
    setTimeout(() => setCopiedAccount(null), 2500);
  };

  // File reader for payment proof
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      alert('Ukuran file maksimal 5MB');
      return;
    }

    setPaymentProofName(file.name);
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setPaymentProofDataUrl(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  // Generate Booking Code
  const generateBookingCode = () => {
    const date = new Date();
    const dateStr = date.toISOString().slice(2, 10).replace(/-/g, '');
    const rand = Math.floor(1000 + Math.random() * 9000);
    return `WB-PICNIC-${dateStr}-${rand}`;
  };

  // Submit Booking
  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionError(null);

    if (!menuValidation.isValid) {
      setSubmissionError(menuValidation.errors[0] || 'Mohon lengkapi porsi pilihan makanan & minuman.');
      return;
    }

    if (!selectedLocation || !selectedLocation.active) {
      setSubmissionError('Silakan pilih lokasi piknik yang aktif (View Bromo atau Widodaren).');
      return;
    }

    if (!fullName.trim() || fullName.trim().length < 2) {
      setSubmissionError('Nama lengkap wajib diisi minimal 2 karakter.');
      return;
    }
    if (!whatsappNumber.trim() || whatsappNumber.trim().length < 8) {
      setSubmissionError('Nomor WhatsApp valid wajib diisi.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setSubmissionError('Alamat email valid wajib diisi untuk penerimaan invoice.');
      return;
    }
    if (!tripDate) {
      setSubmissionError('Tanggal trip piknik wajib ditentukan.');
      return;
    }

    setIsSubmitting(true);
    const bookingCode = generateBookingCode();

    const structuredSelectedMenus: Record<string, SelectedMenuItemQuantity[]> = {};
    const flatSelectedItemsList: string[] = [];

    (selectedPackage.selectionGroups || []).forEach(g => {
      const gQuantities = menuQuantities[g.id || ''] || {};
      const list: SelectedMenuItemQuantity[] = [];
      Object.entries(gQuantities).forEach(([name, qty]) => {
        const qtyNum = Number(qty) || 0;
        if (qtyNum > 0) {
          list.push({ itemName: name, name, quantity: qtyNum });
          flatSelectedItemsList.push(`${qtyNum}x ${name}`);
        }
      });
      structuredSelectedMenus[(g.category || g.id || '') as string] = list;
    });

    const addonsPayload = selectedAddons.map(a => {
      const item: Record<string, any> = {
        id: a.id,
        name: a.name,
        price: a.price
      };
      if (a.category === 'birthday') {
        const cleanBday: Record<string, string> = {};
        if (birthdayDetails.balloonColor) cleanBday.balloonColor = birthdayDetails.balloonColor;
        if (birthdayDetails.letterText) cleanBday.letterText = birthdayDetails.letterText;
        if (birthdayDetails.cakeText) cleanBday.cakeText = birthdayDetails.cakeText;
        item.details = cleanBday;
      }
      return item;
    });

    const isBirthdaySelected = selectedAddons.some(a => a.category === 'birthday');
    const cleanBirthdayDetails: Record<string, string> = {};
    if (isBirthdaySelected) {
      if (birthdayDetails.balloonColor) cleanBirthdayDetails.balloonColor = birthdayDetails.balloonColor;
      if (birthdayDetails.letterText) cleanBirthdayDetails.letterText = birthdayDetails.letterText;
      if (birthdayDetails.cakeText) cleanBirthdayDetails.cakeText = birthdayDetails.cakeText;
    }

    try {
      const bookingPayload: Record<string, any> = {
        bookingCode,
        bookingType: 'PICNIC' as const,
        tripDate,
        fullName: fullName.trim(),
        whatsappNumber: whatsappNumber.trim(),
        email: email.trim(),
        packageTitle: `Picnic Experience: ${selectedPackage.name}`,
        packageId: selectedPackage.id,
        packageName: selectedPackage.name,
        packagePrice: selectedPackage.pricePerPax,
        paxCount,
        wnaCount: 0,
        pickupAddress: `Lokasi Piknik: ${selectedLocation.name} (TNBTS)`,
        locationId: selectedLocation.id,
        locationName: selectedLocation.name,
        decorationColor: selectedDecorationColor,
        selectedMenus: structuredSelectedMenus,
        selectedMenuItems: flatSelectedItemsList,
        addons: addonsPayload,
        packageSubtotal: pricing.packageSubtotal,
        surcharge: pricing.surcharge,
        locationTransportFee: pricing.locationFee,
        addonsSubtotal: pricing.addonsSubtotal,
        grandTotal: pricing.grandTotal,
        downPayment: pricing.downPayment,
        paymentMethod,
        paymentProofName: '',
        status: 'WAITING_DP' as const,
        createdAt: new Date().toISOString()
      };

      if (isBirthdaySelected && Object.keys(cleanBirthdayDetails).length > 0) {
        bookingPayload.birthdayDetails = cleanBirthdayDetails;
      }
      if (specialNotes.trim()) {
        bookingPayload.specialNotes = specialNotes.trim();
      }

      const [result] = await Promise.all([
        saveBookingToFirestore(bookingPayload as any),
        triggerBookingEmailNotification(bookingPayload as any)
      ]);

      if (result.success) {
        setCreatedBookingCode(bookingCode);
        setBookingSuccess(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setSubmissionError(result.error || 'Gagal menyimpan booking ke server. Silakan coba lagi.');
      }
    } catch (err: any) {
      console.error('Error submitting picnic booking:', err);
      setSubmissionError(err.message || 'Terjadi kesalahan sistem saat memproses booking.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Upload Payment Proof
  const handleUploadPaymentProof = async () => {
    if (!createdBookingCode || !paymentProofDataUrl) return;

    setIsUploadingProof(true);
    try {
      const structuredSelectedMenus: Record<string, SelectedMenuItemQuantity[]> = {};
      const flatSelectedItemsList: string[] = [];

      (selectedPackage.selectionGroups || []).forEach(g => {
        const gQuantities = menuQuantities[g.id || ''] || {};
        const list: SelectedMenuItemQuantity[] = [];
        Object.entries(gQuantities).forEach(([name, qty]) => {
          const qtyNum = Number(qty) || 0;
          if (qtyNum > 0) {
            list.push({ itemName: name, name, quantity: qtyNum });
            flatSelectedItemsList.push(`${qtyNum}x ${name}`);
          }
        });
        structuredSelectedMenus[(g.category || g.id || '') as string] = list;
      });

      const addonsPayload = selectedAddons.map(a => ({
        id: a.id,
        name: a.name,
        price: a.price,
        details: a.category === 'birthday' ? birthdayDetails : undefined
      }));

      await updateBookingInFirestore(createdBookingCode, {
        status: 'DP_SUBMITTED',
        paymentProofName,
        paymentProofDataUrl,
        decorationColor: selectedDecorationColor,
        selectedMenuItems: flatSelectedItemsList,
        addons: addonsPayload
      });

      await triggerBookingEmailNotification({
        bookingCode: createdBookingCode,
        bookingType: 'PICNIC',
        tripDate,
        fullName: fullName.trim(),
        whatsappNumber: whatsappNumber.trim(),
        email: email.trim(),
        packageTitle: `Picnic Experience: ${selectedPackage.name}`,
        packageName: selectedPackage.name,
        paxCount,
        wnaCount: 0,
        pickupAddress: `Lokasi Piknik: ${selectedLocation.name} (TNBTS)`,
        locationName: selectedLocation.name,
        decorationColor: selectedDecorationColor,
        selectedMenus: structuredSelectedMenus,
        selectedMenuItems: flatSelectedItemsList,
        addons: addonsPayload,
        paymentMethod,
        paymentProofName,
        paymentProofDataUrl,
        grandTotal: pricing.grandTotal,
        downPayment: pricing.downPayment,
        status: 'DP_SUBMITTED',
        specialNotes: specialNotes.trim() || undefined
      });

      setProofUploadSuccess(true);
    } catch (err: any) {
      console.error('Error uploading payment proof:', err);
      alert('Gagal mengirim bukti transfer. Anda tetap dapat mengonfirmasi melalui WhatsApp CS kami.');
    } finally {
      setIsUploadingProof(false);
    }
  };

  // WhatsApp CS URL
  const waConfirmLink = useMemo(() => {
    const text = `Halo Admin WisataBromo.co, saya ingin konfirmasi pesanan Picnic Experience:
- Kode Reservasi: *${createdBookingCode}*
- Nama: *${fullName}*
- Paket: *${selectedPackage.name}* (${paxCount} Pax)
- Lokasi: *${selectedLocation.name}*
- Warna Dekorasi: *${selectedDecorationColor}*
- Tanggal: *${tripDate}*
- Total Biaya: *${formatRupiah(pricing.grandTotal)}*
- Nominal DP 30%: *${formatRupiah(pricing.downPayment)}*

Mohon verifikasi reservasi saya. Terima kasih!`;
    return `https://wa.me/6281222290318?text=${encodeURIComponent(text)}`;
  }, [createdBookingCode, fullName, selectedPackage, paxCount, selectedLocation, selectedDecorationColor, tripDate, pricing]);

  // Download Official PDF Invoice
  const handleDownloadPicnicInvoice = () => {
    const structuredSelectedMenus: Record<string, SelectedMenuItemQuantity[]> = {};
    (selectedPackage.selectionGroups || []).forEach(g => {
      const gQuantities = menuQuantities[g.id || ''] || {};
      const list: SelectedMenuItemQuantity[] = [];
      Object.entries(gQuantities).forEach(([name, qty]) => {
        const qtyNum = Number(qty) || 0;
        if (qtyNum > 0) {
          list.push({ itemName: name, name, quantity: qtyNum });
        }
      });
      structuredSelectedMenus[(g.category || g.id || '') as string] = list;
    });

    generatePicnicInvoicePDF({
      bookingCode: createdBookingCode,
      tripDate,
      fullName: fullName.trim(),
      email: email.trim(),
      whatsappNumber: whatsappNumber.trim(),
      packageItem: selectedPackage,
      paxCount,
      location: selectedLocation,
      decorationColor: selectedDecorationColor,
      selectedMenus: structuredSelectedMenus,
      selectedAddons,
      birthdayDetails: selectedAddons.some(a => a.category === 'birthday') ? birthdayDetails : undefined,
      packageSubtotal: pricing.packageSubtotal,
      surcharge: pricing.surcharge,
      locationFee: pricing.locationFee,
      addonsSubtotal: pricing.addonsSubtotal,
      grandTotal: pricing.grandTotal,
      downPayment: pricing.downPayment,
      paymentMethod,
      status: proofUploadSuccess ? 'DP_SUBMITTED' : 'WAITING_DP'
    });
  };

  const activePackage = getLocalizedPackage(selectedPackage);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0B1220]">
      
      {/* Top Floating Navigation Bar */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0996F5] hover:text-[#071A2B] transition-colors py-2 px-3 rounded-xl hover:bg-[#EAF6FF] cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t('picnicPage.backToHome', t('picnic.backToHome', 'Kembali ke Beranda'))}</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-block text-xs font-semibold text-slate-500">
              {t('picnic.officialService', 'Official Service')}
            </span>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF6FF] border border-[#0996F5]/20 text-[#0996F5] text-xs font-black">
              <Sparkles className="w-3.5 h-3.5 text-[#FFF700] fill-[#FFF700]" />
              <span>{t('picnicPage.heroTitle', 'Bromo Picnic Experience')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content View */}
      {bookingSuccess ? (
        /* ================= SUCCESS & PAYMENT INSTRUCTIONS ================= */
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-10">
            
            {/* Top Success Badge */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 shadow-sm">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <span className="text-xs font-black text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider border border-emerald-200">
                {t('picnicPage.successBadge', 'Pemesanan Berhasil Terdaftar')}
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-[#0B1220] mt-3">
                {t('picnicPage.successTitle', 'Detail Pembayaran & Instruksi DP')}
              </h1>
              <p className="text-xs sm:text-sm text-[#526273] mt-2">
                Terima kasih, <strong>{fullName}</strong>. Data reservasi Anda telah tersimpan di sistem resmi WisataBromo.co dan notifikasi telah dikirimkan ke <strong>{email}</strong>.
              </p>
            </div>

            {/* Booking Code Banner */}
            <div className="p-4 sm:p-5 bg-[#EAF6FF] rounded-2xl border border-[#0996F5]/30 flex flex-col sm:flex-row items-center justify-between gap-3 mb-8">
              <div>
                <div className="text-[11px] font-bold text-[#0996F5] uppercase tracking-wider">
                  {t('picnicPage.bookingCodeLabel', 'Kode Reservasi Unik')}
                </div>
                <div className="font-mono font-black text-xl sm:text-2xl text-[#071A2B]">
                  {createdBookingCode}
                </div>
              </div>
              <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
                <button
                  type="button"
                  onClick={handleDownloadPicnicInvoice}
                  className="px-3.5 py-2 rounded-xl bg-[#0996F5] text-white hover:bg-[#071A2B] font-bold text-xs transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs active:scale-95"
                >
                  <Download className="w-4 h-4 text-[#FFF700]" />
                  <span>{t('picnicPage.downloadInvoice', 'Download Invoice')}</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleCopy(createdBookingCode, 'code')}
                  className="px-3.5 py-2 rounded-xl bg-white text-[#0996F5] font-bold text-xs border border-[#0996F5]/20 hover:bg-[#EAF6FF] transition-colors flex items-center gap-1.5 cursor-pointer shadow-2xs"
                >
                  {copiedAccount === 'code' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedAccount === 'code' ? t('picnicPage.copied', 'Tersalin') : t('picnicPage.copyCode', 'Salin Kode')}</span>
                </button>
              </div>
            </div>

            {/* Financial Summary */}
            <div className="bg-slate-50 rounded-2xl p-4 sm:p-6 border border-slate-200 mb-8 space-y-2.5">
              <h3 className="text-xs font-black text-slate-500 uppercase tracking-wider mb-2">
                {t('picnicPage.paymentDetailsTitle', 'Rincian Pembayaran')}
              </h3>
              <div className="flex justify-between text-xs sm:text-sm">
                <span className="text-slate-600">Paket: {activePackage.name} ({paxCount} Pax)</span>
                <span className="font-semibold">{formatRupiah(pricing.packageSubtotal)}</span>
              </div>
              {pricing.surcharge > 0 && (
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="text-amber-700">Surcharge Pax Kecil ({paxCount} Pax)</span>
                  <span className="font-semibold text-amber-800">+{formatRupiah(pricing.surcharge)}</span>
                </div>
              )}
              <div className="flex justify-between text-xs sm:text-sm">
                <span className="text-slate-600">{t('picnicPage.transportFeeLabel', 'Transport Logistik')} ({selectedLocation.name})</span>
                <span className="font-semibold">{formatRupiah(pricing.locationFee)}</span>
              </div>
              <div className="flex justify-between text-xs sm:text-sm">
                <span className="text-slate-600">{t('picnicPage.colorLabel', 'Warna Dekorasi:')}</span>
                <span className="font-semibold text-[#0996F5]">{selectedDecorationColor} ({t('picnicPage.includedBadge', 'Termasuk')})</span>
              </div>
              {pricing.addonsSubtotal > 0 && (
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="text-slate-600">{t('picnicPage.addonsLabel', 'Add-on Terpilih:')}</span>
                  <span className="font-semibold">{formatRupiah(pricing.addonsSubtotal)}</span>
                </div>
              )}
              <div className="pt-3 border-t border-slate-200 flex justify-between text-sm sm:text-base font-bold text-[#0B1220]">
                <span>{t('picnicPage.grandTotalLabel', 'Grand Total:')}</span>
                <span>{formatRupiah(pricing.grandTotal)}</span>
              </div>
              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 flex justify-between items-center text-sm font-black text-amber-950 mt-2">
                <span>{t('picnicPage.dp30Label', 'Nominal DP 30%:')}</span>
                <span className="text-base sm:text-lg text-[#0996F5] font-mono font-black">
                  {formatRupiah(pricing.downPayment)}
                </span>
              </div>
            </div>

            {/* Official Bank Account Cards */}
            <div className="space-y-4 mb-8">
              <h3 className="text-xs font-black text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                <CreditCard className="w-4 h-4 text-[#0996F5]" />
                <span>{t('picnicPage.bankTitle', 'Rekening Resmi Pembayaran PT Global Travel Healing:')}</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {OFFICIAL_PAYMENT_ACCOUNTS.map((acc) => (
                  <div
                    key={acc.id}
                    className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-[#0996F5] shadow-xs flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-black text-[#071A2B]">{acc.bankName}</span>
                        {acc.badge && (
                          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                            {acc.badge}
                          </span>
                        )}
                      </div>
                      <div className="font-mono font-black text-lg text-[#0996F5] tracking-wider my-1">
                        {acc.accountNumber}
                      </div>
                      <div className="text-[11px] text-slate-500">
                        a/n {acc.accountHolder}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleCopy(acc.accountNumber, acc.id)}
                      className="mt-3 w-full py-2 bg-[#EAF6FF] hover:bg-[#0996F5] text-[#0996F5] hover:text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      {copiedAccount === acc.id ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedAccount === acc.id ? t('picnicPage.copied', 'Tersalin') : `Salin No. ${acc.bankName}`}</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Proof Upload Section */}
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 mb-8 space-y-4">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <div className="flex items-center gap-2">
                  <Upload className="w-4 h-4 text-[#0996F5]" />
                  <h3 className="text-xs sm:text-sm font-black text-[#0B1220]">
                    {t('picnicPage.uploadProofTitle', 'Unggah Bukti Transfer (Konfirmasi Instan)')}
                  </h3>
                </div>
                {!proofUploadSuccess && (
                  <button
                    type="button"
                    onClick={handleDownloadPicnicInvoice}
                    className="text-xs font-bold text-[#0996F5] hover:text-[#071A2B] flex items-center gap-1.5 cursor-pointer underline"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Download Invoice PDF</span>
                  </button>
                )}
              </div>

              {proofUploadSuccess ? (
                <div className="p-5 bg-gradient-to-br from-emerald-50 via-teal-50/60 to-white border-2 border-emerald-500/80 rounded-2xl text-emerald-950 space-y-4 shadow-sm animate-fadeIn">
                  <div className="flex items-start gap-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-md">
                      <CheckCircle2 className="w-6 h-6 stroke-[2.5]" />
                    </div>
                    <div className="flex-1">
                      <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-[10px] font-black uppercase tracking-wider mb-1">
                        <span>✓ BUKTI DP TERKIRIM</span>
                      </div>
                      <h4 className="text-sm sm:text-base font-black text-emerald-950">
                        {t('picnicPage.proofSuccessTitle', 'Bukti Transfer Berhasil Diterima & Diteruskan ke Admin!')}
                      </h4>
                      <p className="text-xs text-emerald-800/90 mt-1 leading-relaxed">
                        {t('picnicPage.proofSuccessDesc', 'Data pembayaran Anda telah tersimpan di sistem. Invoice resmi Anda telah diperbarui dengan status verifikasi DP.')}
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-emerald-200/70 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <button
                      type="button"
                      onClick={handleDownloadPicnicInvoice}
                      className="flex-1 py-3.5 px-5 bg-[#0996F5] hover:bg-[#071A2B] text-white font-black text-xs sm:text-sm rounded-xl shadow-lg shadow-[#0996F5]/25 transition-all flex items-center justify-center gap-2.5 cursor-pointer active:scale-95"
                    >
                      <Download className="w-4 h-4 text-[#FFF700] stroke-[2.5]" />
                      <span>{t('picnicPage.downloadOfficialPdf', 'Download Invoice Resmi Picnic (PDF)')}</span>
                    </button>
                    <a
                      href={waConfirmLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3.5 px-4 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>{t('picnicPage.chatAdminCs', 'Chat CS Admin')}</span>
                    </a>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    onChange={handleFileChange}
                    className="block w-full text-xs text-slate-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-[#EAF6FF] file:text-[#0996F5] hover:file:bg-[#0996F5] hover:file:text-white file:transition-colors file:cursor-pointer"
                  />

                  {paymentProofDataUrl && (
                    <div className="p-2.5 bg-white rounded-xl border border-slate-200 flex items-center gap-3">
                      <img
                        src={paymentProofDataUrl}
                        alt="Preview Bukti"
                        className="w-12 h-12 object-cover rounded-lg border border-slate-200"
                      />
                      <div className="text-xs text-slate-600 truncate flex-1 font-mono">
                        {paymentProofName}
                      </div>
                      <button
                        type="button"
                        onClick={handleUploadPaymentProof}
                        disabled={isUploadingProof}
                        className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5 shrink-0 cursor-pointer disabled:opacity-50 shadow-xs"
                      >
                        {isUploadingProof ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Upload className="w-3.5 h-3.5" />}
                        <span>{t('picnicPage.uploadProofButton', 'Kirim Bukti Transfer')}</span>
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={handleDownloadPicnicInvoice}
                className="py-3.5 px-5 bg-[#0996F5] hover:bg-[#071A2B] text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-md shadow-[#0996F5]/20 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <Download className="w-4 h-4 text-[#FFF700]" />
                <span>{t('picnicPage.downloadInvoice', 'Download Invoice')}</span>
              </button>

              <a
                href={waConfirmLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 px-4 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>{t('picnicPage.chatAdminCs', 'Chat CS Admin')} (+62 812-2229-0318)</span>
              </a>

              <button
                type="button"
                onClick={onBackToHome}
                className="py-3.5 px-6 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm rounded-xl transition-colors cursor-pointer"
              >
                {t('picnicPage.finishAndHome', 'Selesai & Beranda')}
              </button>
            </div>

          </div>
        </div>
      ) : (
        /* ================= FLOW: HERO -> PAKET -> MENU -> LOKASI -> ADDONS -> FORM ================= */
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          
          {/* 1. HERO SECTION */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF6FF] border border-[#0996F5]/20 text-[#0996F5] text-xs font-black uppercase tracking-wider mb-4 shadow-2xs">
              <Sparkles className="w-4 h-4 text-[#FFF700] fill-[#FFF700]" />
              <span>{t('picnicPage.heroBadge', 'OUTDOOR DINING EXPERIENCE KALDERA BROMO')}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1220] tracking-tight mb-4">
              {t('picnicPage.heroTitle', 'Bromo Picnic Experience')}
            </h1>

            <p className="text-xs sm:text-base text-[#526273] leading-relaxed max-w-2xl mx-auto mb-6">
              {t('picnicPage.heroDesc', 'Nikmati kehangatan sajian kuliner istimewa berpadu panorama tebing karst Widodaren dan kaldera Bromo. Pilih dari 8 varian paket, sesuaikan porsi menu sesuai selera rombongan, dan booking instan.')}
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-bold text-[#0B1220]">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-xl border border-slate-200 shadow-2xs">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>{t('picnicPage.trustButler', 'Butler Service')}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-xl border border-slate-200 shadow-2xs">
                <Utensils className="w-4 h-4 text-[#0996F5]" />
                <span>{t('picnicPage.trustTable', 'Meja Kayu Rustic Bohemian')}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-xl border border-slate-200 shadow-2xs">
                <Heart className="w-4 h-4 text-rose-500" />
                <span>{t('picnicPage.trustFresh', 'Fresh & Higienis')}</span>
              </div>
            </div>

            {/* Notice about Jeep */}
            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-amber-50 rounded-xl border border-amber-200 text-amber-900 text-xs font-semibold">
              <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
              <span>{t('picnicPage.jeepNotice', 'Layanan khusus makanan & properti piknik. Harga belum termasuk armada Jeep menuju lokasi.')}</span>
              {onOpenJeepBooking && (
                <button
                  type="button"
                  onClick={onOpenJeepBooking}
                  className="underline hover:text-amber-950 font-bold ml-1 cursor-pointer"
                >
                  {t('picnicPage.rentJeepCta', 'Sewa Jeep Bromo →')}
                </button>
              )}
            </div>
          </div>

          {/* STRIKING PANORAMIC PHOTO BANNER */}
          <div className="mb-12 sm:mb-16 rounded-3xl overflow-hidden border-2 border-[#0996F5]/40 shadow-2xl relative group bg-[#071A2B]">
            <div className="relative h-[280px] sm:h-[380px] lg:h-[440px] overflow-hidden">
              <img
                src={imgPicnicSavana}
                alt="Bromo Picnic Experience - Dining di Kaldera Bromo"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071A2B] via-[#071A2B]/40 to-transparent" />
              
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-3 z-10 flex-wrap">
                <span className="px-3.5 py-1.5 rounded-full bg-[#071A2B]/90 backdrop-blur-md text-[#FFF700] text-xs font-black uppercase tracking-wider border border-white/20 shadow-lg flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 fill-[#FFF700]" />
                  {t('picnicPage.bannerBadge', 'AESTHETIC BOHEMIAN PICNIC')}
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-[#0996F5] text-white text-xs font-black shadow-lg">
                  {t('picnicPage.bannerRate', 'Mulai Rp 75.000 / pax · Min. 4 Pax')}
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 text-white max-w-2xl z-10">
                <span className="text-xs font-bold text-[#FFF700] uppercase tracking-wider mb-1 block">
                  {t('picnicPage.bannerTagline', 'Sensasi Bersantap Mewah di Atas Awan')}
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white drop-shadow-md">
                  {t('picnicPage.bannerTitle', 'Piknik Estetik Kaldera Bromo & Widodaren')}
                </h2>
                <p className="text-xs sm:text-sm text-slate-200 mt-2 hidden sm:block leading-relaxed">
                  {t('picnicPage.bannerDesc', 'Meja kayu rustic rendah, karpet bohemian, bantal duduk nyaman, free-flow teh hangat & kopi, serta butler service resmi berlatar panorama megah Gunung Bromo.')}
                </p>
              </div>
            </div>
          </div>

          {/* 2. PILIH PAKET (8 PACKAGE CARDS) */}
          <div className="mb-14">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-[#0B1220]">
                  {t('picnicPage.step1Title', 'Langkah 1: Pilih Paket Piknik')}
                </h2>
                <p className="text-xs sm:text-sm text-[#526273]">
                  {t('picnicPage.step1Sub', 'Pilih salah satu dari 8 paket kuliner di bawah ini untuk memulai konfigurasi.')}
                </p>
              </div>
              <span className="hidden sm:inline-block text-xs font-bold text-[#0996F5] bg-[#EAF6FF] px-3 py-1 rounded-full border border-[#0996F5]/20">
                {t('picnicPage.availableCount', '8 Paket Tersedia')}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {PICNIC_PACKAGES.map((rawPkg) => {
                const pkg = getLocalizedPackage(rawPkg);
                const isSelected = selectedPackage.id === pkg.id;

                return (
                  <div
                    key={pkg.id}
                    className={`bg-white rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-lg ${
                      isSelected
                        ? 'border-[#0996F5] ring-2 ring-[#0996F5]/30 shadow-md'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {/* Image Thumbnail */}
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={pkg.imageUrl}
                        alt={pkg.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/70 via-transparent to-transparent" />
                      
                      {pkg.badge && (
                        <div className="absolute top-2.5 right-2.5">
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#FFF700] text-[#071A2B] shadow-sm">
                            {pkg.badge}
                          </span>
                        </div>
                      )}

                      <div className="absolute bottom-2.5 left-3 text-white">
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-[#071A2B]/80 px-2 py-0.5 rounded backdrop-blur-xs">
                          {pkg.type === 'selectable' ? 'Menu Pilihan Bebas' : 'Menu Komplit'}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-base font-black text-[#0B1220] mb-1">
                          {pkg.name}
                        </h3>
                        <p className="text-xs text-[#526273] line-clamp-2 mb-3">
                          {pkg.shortDescription}
                        </p>

                        <div className="space-y-1 mb-4">
                          {Array.isArray(pkg?.highlights) && pkg.highlights.slice(0, 3).map((hl: string, idx: number) => (
                            <div key={idx} className="flex items-center gap-1.5 text-[11px] text-slate-600">
                              <CheckCircle2 className="w-3 h-3 text-[#0996F5] shrink-0" />
                              <span className="truncate">{hl}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Price & Select Button */}
                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                        <div>
                          <div className="text-[10px] text-slate-400 font-medium">{t('picnicPage.perPax', 'Harga / Pax:')}</div>
                          <div className="font-mono font-black text-sm text-[#0996F5]">
                            {formatRupiah(pkg.pricePerPax)}
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => handleSelectPackage(rawPkg)}
                          className={`px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-[#0996F5] text-white shadow-xs'
                              : 'bg-[#EAF6FF] text-[#0996F5] hover:bg-[#0996F5] hover:text-white'
                          }`}
                        >
                          {isSelected ? t('picnicPage.selected', '✓ Terpilih') : t('picnicPage.selectPackage', 'Pilih Paket')}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 3. CONFIGURATOR & BOOKING GRID */}
          <div id="picnic-configurator" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
            
            {/* Left Column: Configurator Steps (8 Cols) */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Selected Package Header Banner */}
              <div className="p-4 sm:p-5 bg-white rounded-2xl border border-[#0996F5]/40 shadow-xs flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#EAF6FF] text-[#0996F5] flex items-center justify-center font-black text-base shrink-0">
                    <Utensils className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      {t('picnicPage.configuredPackage', 'Paket yang Dikonfigurasi')}
                    </span>
                    <h3 className="text-base sm:text-lg font-black text-[#0B1220]">
                      {activePackage.name}
                    </h3>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] text-slate-400">{t('picnicPage.unitPrice', 'Harga Satuan:')}</span>
                  <div className="font-mono font-black text-base sm:text-lg text-[#0996F5]">
                    {formatRupiah(selectedPackage.pricePerPax)} <span className="text-xs font-normal text-slate-500">/ pax</span>
                  </div>
                </div>
              </div>

              {/* STEP 2: ATUR JUMLAH PAX */}
              <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-base font-black text-[#0B1220]">
                      {t('picnicPage.step2Title', 'Langkah 2: Tentukan Jumlah Peserta (Pax)')}
                    </h3>
                    <p className="text-xs text-[#526273]">
                      {t('picnicPage.step2Sub', 'Semua kebutuhan porsi makanan & minuman akan otomatis menyesuaikan jumlah pax ini.')}
                    </p>
                  </div>
                </div>

                <PaxSelector
                  paxCount={paxCount}
                  onChangePax={handlePaxChange}
                  minPax={selectedPackage.minPax || 4}
                />
              </div>

              {/* STEP 3: KONFIGURASI MAKANAN & MINUMAN (QUANTITY SELECTOR) */}
              <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs">
                <div className="mb-4">
                  <h3 className="text-base font-black text-[#0B1220]">
                    {t('picnicPage.step3Title', 'Langkah 3: Konfigurasi Makanan & Minuman')}
                  </h3>
                  <p className="text-xs text-[#526273]">
                    {t('picnicPage.step3Sub', 'Pilih porsi masing-masing item menggunakan tombol [-] [Qty] [+]. Total porsi per kategori wajib tepat sejumlah porsi pax.')}
                  </p>
                </div>

                {selectedPackage.includedSections && selectedPackage.includedSections.length > 0 && (
                  <div className="mb-6">
                    <FixedPackageContents
                      sections={selectedPackage.includedSections}
                      freeItems={selectedPackage.freeItems}
                    />
                  </div>
                )}

                {selectedPackage.selectionGroups && selectedPackage.selectionGroups.length > 0 ? (
                  <div className="space-y-4">
                    {selectedPackage.selectionGroups.map((group) => (
                      <QuantityMenuSelector
                        key={group.id}
                        group={group}
                        paxCount={paxCount}
                        currentQuantities={menuQuantities[group.id || ''] || {}}
                        onChangeQuantity={(itemName, newQty) => handleMenuQuantityChange(group.id || '', itemName, newQty)}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-800 font-semibold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{t('picnicPage.fixedMenuNotice', 'Seluruh menu pada paket ini telah lengkap dan siap disajikan langsung oleh butler di lokasi.')}</span>
                  </div>
                )}
              </div>

              {/* STEP 4: PILIHAN WARNA DEKORASI */}
              <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs">
                <div className="mb-4">
                  <h3 className="text-base font-black text-[#0B1220]">
                    {t('picnicPage.step4Title', 'Langkah 4: Pilihan Warna Dekorasi')}
                  </h3>
                  <p className="text-xs text-[#526273]">
                    {t('picnicPage.step4Sub', 'Pilih 1 tema warna karpet & setup properti rustic bohemian favorit Anda (sudah termasuk dalam paket).')}
                  </p>
                </div>

                <DecorationColorSelector
                  selectedColor={selectedDecorationColor}
                  onSelectColor={setSelectedDecorationColor}
                />
              </div>

              {/* STEP 5: PILIH LOKASI */}
              <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs">
                <div className="mb-4">
                  <h3 className="text-base font-black text-[#0B1220]">
                    {t('picnicPage.step5Title', 'Langkah 5: Pilih Lokasi Gelaran Piknik')}
                  </h3>
                  <p className="text-xs text-[#526273]">
                    {t('picnicPage.step5Sub', 'Biaya transportasi & logistik berlaku per reservasi (bukan per orang).')}
                  </p>
                </div>

                <LocationSelector
                  locations={PICNIC_LOCATIONS}
                  selectedLocation={selectedLocation}
                  onSelectLocation={setSelectedLocation}
                />
              </div>

              {/* STEP 6: PILIH ADD-ON */}
              <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs">
                <div className="mb-4">
                  <h3 className="text-base font-black text-[#0B1220]">
                    {t('picnicPage.step6Title', 'Langkah 6: Tambahan Fasilitas & Dekorasi (Add-on Opsional)')}
                  </h3>
                  <p className="text-xs text-[#526273]">
                    {t('picnicPage.step6Sub', 'Sempurnakan momen piknik Anda dengan tenda canvas aesthetic atau set perayaan ulang tahun.')}
                  </p>
                </div>

                <AddonSelector
                  addons={PICNIC_ADDONS}
                  selectedAddons={selectedAddons}
                  onToggleAddon={handleToggleAddon}
                  birthdayDetails={birthdayDetails}
                  onUpdateBirthdayDetails={handleUpdateBirthdayDetails}
                />
              </div>

              {/* STEP 7: FORM DATA PEMESAN */}
              <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs">
                <div className="mb-4">
                  <h3 className="text-base font-black text-[#0B1220]">
                    {t('picnicPage.step7Title', 'Langkah 7: Data Kontak Pemesan')}
                  </h3>
                  <p className="text-xs text-[#526273]">
                    {t('picnicPage.step7Sub', 'Informasi ini digunakan untuk pengiriman invoice resmi, briefing tim butler, dan koordinasi lapangan.')}
                  </p>
                </div>

                {submissionError && (
                  <div className="mb-4 p-3 bg-rose-50 border border-rose-300 rounded-xl text-xs text-rose-800 font-bold flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>{submissionError}</span>
                  </div>
                )}

                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {t('picnicPage.fullNameLabel', 'Nama Lengkap')} <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder={t('picnicPage.fullNamePlaceholder', 'Nama sesuai KTP / Paspor')}
                          className="w-full pl-9 pr-3 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-[#0996F5] focus:outline-hidden"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {t('picnicPage.waLabel', 'Nomor WhatsApp')} <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="tel"
                          required
                          value={whatsappNumber}
                          onChange={(e) => setWhatsappNumber(e.target.value)}
                          placeholder={t('picnicPage.waPlaceholder', 'Contoh: 081234567890')}
                          className="w-full pl-9 pr-3 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-[#0996F5] focus:outline-hidden"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {t('picnicPage.emailLabel', 'Alamat Email Valid')} <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder={t('picnicPage.emailPlaceholder', 'nama@email.com (Untuk invoice & voucher)')}
                          className="w-full pl-9 pr-3 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-[#0996F5] focus:outline-hidden"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {t('picnicPage.dateLabel', 'Tanggal Trip Piknik')} <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="date"
                          required
                          min={new Date().toISOString().split('T')[0]}
                          value={tripDate}
                          onChange={(e) => setTripDate(e.target.value)}
                          className="w-full pl-9 pr-3 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-[#0996F5] focus:outline-hidden font-mono"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t('picnicPage.paymentMethodLabel', 'Metode Pembayaran Rekening')}
                    </label>
                    <select
                      value={paymentMethod}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-full py-2.5 px-3 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-[#0996F5] focus:outline-hidden"
                    >
                      {PAYMENT_METHODS.map((pm) => (
                        <option key={pm.id} value={pm.id}>
                          {pm.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t('picnicPage.specialNotesLabel', 'Catatan Tambahan (Opsional)')}
                    </label>
                    <textarea
                      rows={2}
                      value={specialNotes}
                      onChange={(e) => setSpecialNotes(e.target.value)}
                      placeholder={t('picnicPage.specialNotesPlaceholder', 'Contoh: Request sambal dipisah, perkiraan tiba jam 08.00 WIB...')}
                      className="w-full p-3 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-[#0996F5] focus:outline-hidden"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting || !menuValidation.isValid}
                      className="w-full py-4 px-6 text-sm font-black text-white bg-[#0996F5] hover:bg-[#071A2B] disabled:opacity-40 disabled:cursor-not-allowed rounded-xl transition-all shadow-lg shadow-[#0996F5]/25 flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                    >
                      {isSubmitting ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          <span>{t('picnicPage.submitting', 'Memproses Reservasi Piknik...')}</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4 text-[#FFF700] fill-[#FFF700]" />
                          <span>{t('picnicPage.submitButton', 'Lanjutkan Reservasi & Dapatkan Instruksi Pembayaran')}</span>
                        </>
                      )}
                    </button>
                    {!menuValidation.isValid && (
                      <p className="text-[11px] text-amber-700 text-center mt-2 font-medium">
                        {t('picnicPage.disabledSubmitNotice', `⚠️ Tombol akan aktif setelah seluruh porsi makanan & minuman (${paxCount} porsi) telah dipilih.`)}
                      </p>
                    )}
                  </div>
                </form>
              </div>

            </div>

            {/* Right Column: Sticky Pricing & Breakdown Summary (4 Cols) */}
            <div className="lg:col-span-4 sticky top-20 space-y-4">
              <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-6 shadow-lg">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                  <h3 className="text-sm font-black text-[#0B1220] uppercase tracking-wider">
                    {t('picnicPage.summaryTitle', 'Ringkasan Reservasi')}
                  </h3>
                  <span className="text-[10px] font-bold text-[#0996F5] bg-[#EAF6FF] px-2 py-0.5 rounded">
                    {t('picnicPage.liveCalc', 'Live Calculation')}
                  </span>
                </div>

                {/* Package Selected */}
                <div className="mb-4 pb-3 border-b border-slate-100">
                  <div className="text-xs font-bold text-[#0B1220]">
                    {activePackage.name}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {formatRupiah(selectedPackage.pricePerPax)} × {paxCount} Pax
                  </div>
                  <div className="font-mono font-extrabold text-xs text-[#0996F5] mt-0.5">
                    {formatRupiah(pricing.packageSubtotal)}
                  </div>
                </div>

                {/* Menu Choices Summary */}
                <div className="mb-4 pb-3 border-b border-slate-100">
                  <div className="text-xs font-bold text-[#0B1220] mb-1">
                    {t('picnicPage.menuConfigLabel', 'Konfigurasi Menu:')}
                  </div>
                  {Object.entries(menuQuantities).length > 0 ? (
                    <div className="space-y-1 text-[11px] text-slate-600">
                      {Object.entries(menuQuantities).map(([groupId, items]) => {
                        const entries = Object.entries((items as Record<string, number>) || {}).filter(([_, q]) => Number(q) > 0);
                        if (entries.length === 0) return null;
                        return (
                          <div key={groupId} className="pt-0.5">
                            <span className="font-semibold text-slate-700 capitalize">{groupId}: </span>
                            {entries.map(([name, q]) => `${q}x ${name}`).join(', ')}
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="text-[11px] text-slate-400 italic">
                      {t('picnicPage.noMenuSelected', 'Belum ada menu yang dipilih')}
                    </div>
                  )}
                </div>

                {/* Location */}
                <div className="mb-4 pb-3 border-b border-slate-100 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-[#0B1220]">{t('picnicPage.locationLabel', 'Lokasi:')} </span>
                    <span className="text-slate-600">{selectedLocation.name}</span>
                  </div>
                  <span className="font-mono font-bold text-slate-700">
                    {formatRupiah(pricing.locationFee)}
                  </span>
                </div>

                {/* Warna Dekorasi */}
                <div className="mb-4 pb-3 border-b border-slate-100 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-[#0B1220]">{t('picnicPage.colorLabel', 'Warna Dekorasi:')} </span>
                    <span className="text-[#0996F5] font-semibold">{selectedDecorationColor}</span>
                  </div>
                  <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded">
                    {t('picnicPage.includedBadge', 'Termasuk')}
                  </span>
                </div>

                {/* Surcharge if applicable */}
                {pricing.surcharge > 0 && (
                  <div className="mb-4 pb-3 border-b border-slate-100 flex items-center justify-between text-xs text-amber-800">
                    <span>{t('picnicPage.surchargeLabel', 'Surcharge')} ({paxCount} Pax)</span>
                    <span className="font-mono font-bold">+{formatRupiah(pricing.surcharge)}</span>
                  </div>
                )}

                {/* Add-ons */}
                {selectedAddons.length > 0 && (
                  <div className="mb-4 pb-3 border-b border-slate-100">
                    <div className="text-xs font-bold text-[#0B1220] mb-1">{t('picnicPage.addonsLabel', 'Add-on Terpilih:')}</div>
                    {selectedAddons.map((a) => (
                      <div key={a.id} className="text-[11px] text-slate-600 mb-1.5 last:mb-0">
                        <div className="flex justify-between">
                          <span className="truncate">{a.name}</span>
                          <span className="font-mono font-semibold">{formatRupiah(a.price)}</span>
                        </div>
                        {a.category === 'birthday' && (birthdayDetails.balloonColor || birthdayDetails.letterText || birthdayDetails.cakeText) && (
                          <div className="text-[10px] text-pink-600 pl-2 mt-0.5 border-l-2 border-pink-300 leading-tight">
                            {birthdayDetails.balloonColor && <div>• Balon: {birthdayDetails.balloonColor}</div>}
                            {birthdayDetails.letterText && <div>• Tulisan: {birthdayDetails.letterText}</div>}
                            {birthdayDetails.cakeText && <div>• Kue: {birthdayDetails.cakeText}</div>}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Total & DP */}
                <div className="pt-2 space-y-2">
                  <div className="flex items-center justify-between text-sm font-bold text-slate-600">
                    <span>{t('picnicPage.grandTotalLabel', 'Grand Total:')}</span>
                    <span className="text-base text-[#0B1220] font-black font-mono">
                      {formatRupiah(pricing.grandTotal)}
                    </span>
                  </div>

                  <div className="p-3 bg-[#EAF6FF] rounded-2xl border border-[#0996F5]/30">
                    <div className="flex items-center justify-between text-xs font-black text-[#071A2B]">
                      <span>{t('picnicPage.dp30Label', 'Nominal DP 30%:')}</span>
                      <span className="text-base font-black text-[#0996F5] font-mono">
                        {formatRupiah(pricing.downPayment)}
                      </span>
                    </div>
                    <div className="text-[10px] text-slate-500 mt-1">
                      {t('picnicPage.dpNotice', 'Wajib dibayarkan setelah submit untuk mengunci jadwal butler & bahan makanan fresh.')}
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      )}

      {/* Footer Included at Bottom */}
      <Footer />

    </div>
  );
};
