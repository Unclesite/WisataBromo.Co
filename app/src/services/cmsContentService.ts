import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from './firestoreBookingService';
import { WebsiteContentConfig } from '../types/admin';
import { TOUR_PACKAGES } from '../data/packagesData';

export const CMS_DOC_PATH = 'website_content/homepage';

/**
 * Default fallback data based on current website content
 */
export const DEFAULT_WEBSITE_CONTENT: WebsiteContentConfig = {
  hero: {
    badge: '🏆 Provider Resmi Wisata Bromo #1 Jawa Timur',
    headline: 'Eksplorasi Keajaiban Sunrise Bromo Bersama Tim Profesional',
    highlightWord: 'Sunrise Bromo',
    subheadline: 'Paket Open Trip & Private Trip resmi bergaransi berangkat setiap hari dari Malang, Batu, Surabaya, Gubugklakah, Sukapura, & Tosari. Armada Toyota Land Cruiser FJ40 legal & resmi izin TNBTS.',
    trustedCounter: '25.000+ Tamu Terlayani',
    announcementText: 'Reservasi Open Trip Midnight untuk akhir pekan & high season disarankan booking H-3 untuk memastikan ketersediaan Jeep dan kuota TNBTS.',
    announcementActive: true
  },
  contact: {
    whatsappHotline: '+62 812 2229 0318',
    csEmail: 'cs@wisatabromo.co',
    officeAddressMalang: 'Jalan Raya Gubugklakah no 147, Gubugklakah, Kec. Poncokusumo, Kabupaten Malang, Jawa Timur',
    officeAddressSukapura: 'Jalan Pasar Sayur no 43, Sukapura, Kabupaten Probolinggo, Jawa Timur',
    operatingHours: '24 Jam Non-Stop (Booking & Layanan Tamu)',
    bcaAccountNumber: '5200888415',
    bcaAccountHolder: 'PT Global Travel Healing'
  },
  customPackages: TOUR_PACKAGES.map(pkg => ({
    id: pkg.id,
    title: pkg.title,
    subtitle: pkg.subtitle,
    price: pkg.price,
    priceWithDoc: pkg.priceWithDoc,
    priceUnit: pkg.priceUnit,
    badge: pkg.badge,
    highlights: pkg.highlights,
    inclusions: pkg.inclusions,
    exclusions: pkg.exclusions
  })),
  faqs: [
    {
      question: 'Apakah Open Trip pasti berangkat jika saya hanya booking 1 orang?',
      answer: 'Ya, 100% PASTI BERANGKAT! Untuk Open Trip dari Malang dan Surabaya, 1 orang pendaftar tetap kami berangkatkan tanpa minimal kuota peserta.'
    },
    {
      question: 'Jam berapa penjemputan peserta trip Midnight Sunrise?',
      answer: 'Penjemputan area Malang & Batu dimulai pukul 23.30 – 00.30 WIB. Penjemputan area Surabaya dimulai pukul 22.00 – 23.30 WIB langsung di alamat/hotel peserta.'
    },
    {
      question: 'Bagaimana sistem pembayaran dan pelunasan trip?',
      answer: 'Cukup membayar uang muka (DP) sebesar 30% ke rekening resmi BCA PT Global Travel Healing (5200888415). Sisa pelunasan 70% dibayarkan tunai atau transfer saat penjemputan trip.'
    },
    {
      question: 'Pakaian dan perlengkapan apa saja yang wajib dibawa ke Bromo?',
      answer: 'Suhu Bromo berkisar 3°C – 12°C. Harap bawa jaket tebal/windbreaker, syal, kupluk/beanie, sarung tangan hangat, sepatu kets yang nyaman, masker debu, dan obat pribadi.'
    }
  ],
  importantNotice: {
    active: false,
    title: 'Informasi Status Kawasan Bromo',
    content: 'Seluruh spot wisata Bromo (Kawah, Penanjakan, Widodaren, Pasir Berbisik, Savana) buka normal dan aman dikunjungi.',
    level: 'info'
  }
};

/**
 * Fetch website content from Firestore document `website_content/homepage`
 * Falls back to DEFAULT_WEBSITE_CONTENT if not found or on error
 */
export const getWebsiteContent = async (): Promise<WebsiteContentConfig> => {
  try {
    const docRef = doc(db, 'website_content', 'homepage');
    const snap = await getDoc(docRef);

    if (snap.exists()) {
      const data = snap.data() as Partial<WebsiteContentConfig>;
      return {
        hero: {
          ...DEFAULT_WEBSITE_CONTENT.hero,
          ...(data.hero || {})
        },
        contact: {
          ...DEFAULT_WEBSITE_CONTENT.contact,
          ...(data.contact || {})
        },
        customPackages: data.customPackages && data.customPackages.length > 0
          ? data.customPackages
          : DEFAULT_WEBSITE_CONTENT.customPackages,
        faqs: data.faqs && data.faqs.length > 0
          ? data.faqs
          : DEFAULT_WEBSITE_CONTENT.faqs,
        importantNotice: data.importantNotice
          ? { ...DEFAULT_WEBSITE_CONTENT.importantNotice!, ...data.importantNotice }
          : DEFAULT_WEBSITE_CONTENT.importantNotice,
        updatedAt: data.updatedAt,
        updatedBy: data.updatedBy
      };
    }
  } catch (error) {
    console.warn('Notice: Using default website content fallback:', error);
  }

  return DEFAULT_WEBSITE_CONTENT;
};

/**
 * Save / Update website content to Firestore document `website_content/homepage`
 * Restricted to authenticated Admins by Security Rules
 */
export const saveWebsiteContent = async (
  content: WebsiteContentConfig, 
  adminEmail: string
): Promise<{ success: boolean; error?: string }> => {
  try {
    const docRef = doc(db, 'website_content', 'homepage');
    const payloadToSave: WebsiteContentConfig = {
      ...content,
      updatedAt: new Date().toISOString(),
      updatedBy: adminEmail
    };

    await setDoc(docRef, payloadToSave, { merge: true });
    return { success: true };
  } catch (error: any) {
    console.error('Error saving website content to Firestore:', error);
    return { 
      success: false, 
      error: error.message || 'Gagal menyimpan konten ke Firestore. Pastikan akun memiliki hak akses admin.' 
    };
  }
};
