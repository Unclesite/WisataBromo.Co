import { 
  signInWithPopup, 
  GoogleAuthProvider, 
  signInWithEmailAndPassword,
  signOut, 
  onAuthStateChanged,
  User 
} from 'firebase/auth';
import { auth, db } from './firestoreBookingService';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { AdminUser } from '../types/admin';

// The primary authorized admin email
export const PRIMARY_ADMIN_EMAIL = 'wisatabromo.co@gmail.com';

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

/**
 * Checks whether a given email or UID has admin privileges
 */
export const checkIsAdmin = async (user: User | null): Promise<boolean> => {
  if (!user || !user.email) return false;

  const emailClean = user.email.toLowerCase().trim();

  // Primary administrator match
  if (emailClean === PRIMARY_ADMIN_EMAIL.toLowerCase()) {
    return true;
  }

  // Fallback to Firestore `/admins/{uid}` document check
  try {
    const adminDocRef = doc(db, 'admins', user.uid);
    const snap = await getDoc(adminDocRef);
    if (snap.exists() && snap.data()?.active === true) {
      return true;
    }
  } catch (err) {
    console.warn('Error checking admin document in Firestore:', err);
  }

  return false;
};

/**
 * Format Firebase User into AdminUser structure
 */
export const formatAdminUser = (user: User): AdminUser => {
  return {
    uid: user.uid,
    email: user.email,
    displayName: user.displayName || user.email?.split('@')[0] || 'Admin',
    photoURL: user.photoURL,
    role: user.email?.toLowerCase().trim() === PRIMARY_ADMIN_EMAIL.toLowerCase() ? 'super_admin' : 'admin',
    lastLogin: new Date().toISOString()
  };
};

/**
 * Log in using Google Sign-In Popup
 */
export const loginAdminWithGoogle = async (): Promise<{ success: boolean; user?: AdminUser; error?: string }> => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;

    const isAdmin = await checkIsAdmin(user);
    if (!isAdmin) {
      // User is not authorized as admin, sign them out immediately
      await signOut(auth);
      return {
        success: false,
        error: `Akses ditolak. Email (${user.email}) tidak memiliki hak akses administrator. Hubungi wisatabromo.co@gmail.com.`
      };
    }

    const adminUser = formatAdminUser(user);

    // Record login timestamp in admins collection
    try {
      await setDoc(doc(db, 'admins', user.uid), {
        email: user.email,
        displayName: user.displayName,
        lastLogin: new Date().toISOString(),
        role: adminUser.role,
        active: true
      }, { merge: true });
    } catch {
      // Non-blocking if permissions are strict
    }

    return { success: true, user: adminUser };
  } catch (error: any) {
    console.error('Google Admin Sign-in Error:', error);
    return {
      success: false,
      error: error.message || 'Gagal login dengan akun Google'
    };
  }
};

/**
 * Log in using Email and Password (for credential login)
 */
export const loginAdminWithEmail = async (
  email: string, 
  pass: string
): Promise<{ success: boolean; user?: AdminUser; error?: string }> => {
  try {
    const cleanEmail = email.trim();
    const result = await signInWithEmailAndPassword(auth, cleanEmail, pass);
    const user = result.user;

    const isAdmin = await checkIsAdmin(user);
    if (!isAdmin) {
      await signOut(auth);
      return {
        success: false,
        error: `Akses ditolak. Akun ${cleanEmail} bukan administrator resmi.`
      };
    }

    const adminUser = formatAdminUser(user);
    return { success: true, user: adminUser };
  } catch (error: any) {
    console.error('Email Admin Sign-in Error:', error);
    let message = 'Email atau password salah';
    if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password' || error.code === 'auth/invalid-credential') {
      message = 'Kredensial login admin tidak valid.';
    } else if (error.code === 'auth/too-many-requests') {
      message = 'Terlalu banyak percobaan gagal. Silakan coba beberapa saat lagi.';
    }
    return { success: false, error: message };
  }
};

/**
 * Sign out current admin user
 */
export const logoutAdmin = async (): Promise<void> => {
  try {
    await signOut(auth);
  } catch (err) {
    console.error('Error logging out admin:', err);
  }
};

/**
 * Listen to admin authentication state changes
 */
export const onAdminAuthStateChanged = (
  callback: (user: AdminUser | null, isAdmin: boolean) => void
): (() => void) => {
  return onAuthStateChanged(auth, async (firebaseUser) => {
    if (!firebaseUser) {
      callback(null, false);
      return;
    }

    const isAdmin = await checkIsAdmin(firebaseUser);
    if (!isAdmin) {
      callback(null, false);
    } else {
      callback(formatAdminUser(firebaseUser), true);
    }
  });
};
