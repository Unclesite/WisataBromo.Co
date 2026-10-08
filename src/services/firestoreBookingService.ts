import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { 
  getFirestore, 
  doc, 
  setDoc, 
  getDoc, 
  updateDoc, 
  getDocFromServer,
  collection,
  query,
  getDocs,
  where,
  orderBy,
  onSnapshot
} from 'firebase/firestore';
import firebaseConfig from './firebaseConfig';
import { triggerBookingEmailNotification } from './emailNotificationService';

export const ADMIN_TARGET_EMAIL = 'wisatabromo.co@gmail.com';

// Initialize Firebase App safely (singleton)
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);

// Test connection on boot
export const testFirestoreConnection = async () => {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
  } catch (error) {
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.warn('Firestore offline check:', error.message);
    }
  }
};
testFirestoreConnection();

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  };
}

export function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo: auth.currentUser?.providerData?.map(provider => ({
        providerId: provider.providerId,
        email: provider.email,
      })) || []
    },
    operationType,
    path
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

export interface BookingPayload {
  bookingCode: string;
  tripDate: string; // Tanggal Perjalanan / Sunrise (YYYY-MM-DD)
  pickupDate?: string;
  pickupTime?: string;
  sunriseDate?: string;
  sunriseTime?: string;
  pickupScheduleFull?: string;
  sunriseScheduleFull?: string;
  startCity?: string;
  fullName: string;
  whatsappNumber: string;
  email: string;
  packageTitle: string;
  packageId?: string;
  paxCount: number;
  wnaCount: number;
  pickupAddress: string;
  paymentMethod: string;
  paymentProofName: string;
  paymentProofDataUrl?: string;
  grandTotal: number;
  downPayment: number;
  specialNotes?: string;
  includeDocumentation?: boolean;
  includeDrone?: boolean;
  bookingType?: string;
  packageName?: string;
  packagePrice?: number;
  locationId?: string;
  locationName?: string;
  selectedMenuGroups?: Record<string, string>;
  selectedMenus?: Record<string, any>;
  selectedMenuItems?: string[];
  addons?: any[];
  birthdayDetails?: any;
  packageSubtotal?: number;
  surcharge?: number;
  locationTransportFee?: number;
  addonsSubtotal?: number;
  [key: string]: any;
}

export interface StoredBookingRecord extends BookingPayload {
  createdAt: string;
  status: 'WAITING_DP' | 'DP_SUBMITTED' | 'VERIFIED' | 'CANCELLED';
  driveLink?: string;
  calendarEventId?: string;
  syncedToGoogle?: boolean;
}

export const saveBookingToLocalDb = (record: StoredBookingRecord) => {
  try {
    const existingRaw = localStorage.getItem('wisatabromo_bookings_db');
    const list: StoredBookingRecord[] = existingRaw ? JSON.parse(existingRaw) : [];
    const idx = list.findIndex(b => b.bookingCode === record.bookingCode);
    if (idx >= 0) {
      list[idx] = { ...list[idx], ...record };
    } else {
      list.unshift(record);
    }
    localStorage.setItem('wisatabromo_bookings_db', JSON.stringify(list));
  } catch (e) {
    console.error('Failed to save booking to local storage:', e);
  }
};

export const getStoredBookingsFromDb = (): StoredBookingRecord[] => {
  try {
    const raw = localStorage.getItem('wisatabromo_bookings_db');
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

/**
 * Save booking document directly to Firestore collection 'bookings'
 */
export const saveBookingToFirestore = async (record: StoredBookingRecord): Promise<{ success: boolean; id: string; error?: string }> => {
  // Always update local cache for resilience
  saveBookingToLocalDb(record);

  const path = `bookings/${record.bookingCode}`;
  try {
    const cleanRecord: Record<string, any> = {
      bookingCode: record.bookingCode,
      tripDate: record.tripDate,
      fullName: record.fullName,
      whatsappNumber: record.whatsappNumber,
      email: record.email,
      packageTitle: record.packageTitle,
      paxCount: record.paxCount,
      wnaCount: record.wnaCount || 0,
      pickupAddress: record.pickupAddress,
      paymentMethod: record.paymentMethod,
      grandTotal: record.grandTotal,
      downPayment: record.downPayment,
      status: record.status || 'WAITING_DP',
      createdAt: record.createdAt || new Date().toISOString()
    };

    if (record.specialNotes) cleanRecord.specialNotes = record.specialNotes;
    if (record.packageId) cleanRecord.packageId = record.packageId;
    if (record.startCity) cleanRecord.startCity = record.startCity;
    if (record.pickupDate) cleanRecord.pickupDate = record.pickupDate;
    if (record.pickupTime) cleanRecord.pickupTime = record.pickupTime;
    if (record.sunriseDate) cleanRecord.sunriseDate = record.sunriseDate;
    if (record.sunriseTime) cleanRecord.sunriseTime = record.sunriseTime;
    if (record.pickupScheduleFull) cleanRecord.pickupScheduleFull = record.pickupScheduleFull;
    if (record.sunriseScheduleFull) cleanRecord.sunriseScheduleFull = record.sunriseScheduleFull;
    if (typeof record.includeDocumentation === 'boolean') cleanRecord.includeDocumentation = record.includeDocumentation;
    if (typeof record.includeDrone === 'boolean') cleanRecord.includeDrone = record.includeDrone;
    if (record.paymentProofName) cleanRecord.paymentProofName = record.paymentProofName;
    if (record.driveLink) cleanRecord.driveLink = record.driveLink;
    if (record.calendarEventId) cleanRecord.calendarEventId = record.calendarEventId;
    if (record.bookingType) cleanRecord.bookingType = record.bookingType;
    if (record.packageName) cleanRecord.packageName = record.packageName;
    if (record.packagePrice) cleanRecord.packagePrice = record.packagePrice;
    if (record.locationId) cleanRecord.locationId = record.locationId;
    if (record.locationName) cleanRecord.locationName = record.locationName;
    if (record.selectedMenuGroups) cleanRecord.selectedMenuGroups = record.selectedMenuGroups;
    if (record.selectedMenuItems) cleanRecord.selectedMenuItems = record.selectedMenuItems;
    if (record.addons) cleanRecord.addons = record.addons;
    if (record.birthdayDetails) cleanRecord.birthdayDetails = record.birthdayDetails;
    if (record.packageSubtotal) cleanRecord.packageSubtotal = record.packageSubtotal;
    if (record.surcharge) cleanRecord.surcharge = record.surcharge;
    if (record.locationTransportFee) cleanRecord.locationTransportFee = record.locationTransportFee;
    if (record.addonsSubtotal) cleanRecord.addonsSubtotal = record.addonsSubtotal;

    // Guarantee immediate email notification dispatch to admin & customer
    triggerBookingEmailNotification(cleanRecord as any).catch(err => {
      console.warn('Booking email dispatch notice:', err);
    });

    const docRef = doc(db, 'bookings', record.bookingCode);
    await setDoc(docRef, cleanRecord, { merge: true });

    return { success: true, id: record.bookingCode };
  } catch (err: any) {
    console.error('Error saving booking to Firestore:', err);
    try {
      handleFirestoreError(err, OperationType.WRITE, path);
    } catch (e) {
      // return structured response
    }
    return { success: false, id: record.bookingCode, error: err.message || 'Gagal menyimpan ke Firestore' };
  }
};

/**
 * Update booking in Firestore collection 'bookings'
 */
export const updateBookingInFirestore = async (
  bookingCode: string, 
  updates: Partial<StoredBookingRecord>
): Promise<{ success: boolean; error?: string }> => {
  const path = `bookings/${bookingCode}`;
  try {
    const docRef = doc(db, 'bookings', bookingCode);
    const cleanUpdates: Record<string, any> = { ...updates };
    Object.keys(cleanUpdates).forEach(key => {
      if (cleanUpdates[key] === undefined) delete cleanUpdates[key];
    });

    await updateDoc(docRef, cleanUpdates);

    // Update local cache as well
    const existing = getStoredBookingsFromDb().find(b => b.bookingCode === bookingCode);
    if (existing) {
      saveBookingToLocalDb({ ...existing, ...updates });
    }

    return { success: true };
  } catch (err: any) {
    console.error('Error updating booking in Firestore:', err);
    try {
      handleFirestoreError(err, OperationType.UPDATE, path);
    } catch (e) {
      // return structured response
    }
    return { success: false, error: err.message || 'Gagal memperbarui Firestore' };
  }
};

/**
 * Get booking from Firestore
 */
export const getBookingFromFirestore = async (bookingCode: string): Promise<StoredBookingRecord | null> => {
  const path = `bookings/${bookingCode}`;
  try {
    const docRef = doc(db, 'bookings', bookingCode);
    const snap = await getDoc(docRef);
    if (snap.exists()) {
      return snap.data() as StoredBookingRecord;
    }
    return null;
  } catch (err: any) {
    console.error('Error getting booking from Firestore:', err);
    try {
      handleFirestoreError(err, OperationType.GET, path);
    } catch (e) {
      // fallback
    }
    const local = getStoredBookingsFromDb().find(b => b.bookingCode === bookingCode);
    return local || null;
  }
};

/**
 * Fetch all bookings from Firestore collection 'bookings'
 * (Restricted to authenticated Admins by Security Rules)
 */
export const getAllBookingsFromFirestore = async (): Promise<StoredBookingRecord[]> => {
  const path = 'bookings';
  try {
    const colRef = collection(db, 'bookings');
    const q = query(colRef, orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(q);

    const bookings: StoredBookingRecord[] = [];
    snapshot.forEach(docSnap => {
      bookings.push(docSnap.data() as StoredBookingRecord);
    });

    // Update local cache
    if (bookings.length > 0) {
      localStorage.setItem('wisatabromo_bookings_db', JSON.stringify(bookings));
    }

    return bookings;
  } catch (err: any) {
    console.error('Error fetching all bookings from Firestore:', err);
    try {
      handleFirestoreError(err, OperationType.LIST, path);
    } catch {
      // ignore
    }
    // Fallback to local storage if network or permissions fail
    return getStoredBookingsFromDb();
  }
};

/**
 * Listen to realtime updates of bookings collection
 * Used by Admin Panel to see bookings live
 */
export const listenToBookingsRealtime = (
  callback: (bookings: StoredBookingRecord[]) => void,
  errorCallback?: (error: Error) => void
): (() => void) => {
  const path = 'bookings';
  try {
    const colRef = collection(db, 'bookings');
    const q = query(colRef, orderBy('createdAt', 'desc'));

    return onSnapshot(
      q,
      (snapshot) => {
        const bookings: StoredBookingRecord[] = [];
        snapshot.forEach(docSnap => {
          bookings.push(docSnap.data() as StoredBookingRecord);
        });

        // Sync to local cache
        localStorage.setItem('wisatabromo_bookings_db', JSON.stringify(bookings));
        callback(bookings);
      },
      (error) => {
        console.error('Realtime bookings listener error:', error);
        try {
          handleFirestoreError(error, OperationType.LIST, path);
        } catch (e: any) {
          if (errorCallback) errorCallback(e);
        }
      }
    );
  } catch (err: any) {
    console.error('Failed to attach realtime booking listener:', err);
    if (errorCallback) errorCallback(err);
    return () => {};
  }
};

