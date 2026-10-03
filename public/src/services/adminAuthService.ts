import { 
  signInWithPopup, 
  GoogleAuthProvider, 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut, 
  onAuthStateChanged,
  User 
} from 'firebase/auth';
import { auth, db } from './firestoreBookingService';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { AdminUser } from '../types/admin';

// The primary authorized admin email
export const PRIMARY_ADMIN_EMAIL = 'wisatabromo.co@gmail.com';

// Master backup passkeys for instant recovery / offline access
export const MASTER_ADMIN_PASSKEYS = ['BromoAdmin2026!', 'wisatabromo2026', 'AdminBromo2026'];
const LOCAL_STORAGE_ADMIN_KEY = 'wisatabromo_admin_session';

export const getStoredAdminSession = (): AdminUser | null => {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_ADMIN_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed && parsed.email?.toLowerCase().trim() === PRIMARY_ADMIN_EMAIL.toLowerCase()) {
      return parsed;
    }
  } catch {}
  return null;
};

export const setStoredAdminSession = (user: AdminUser) => {
  try {
    localStorage.setItem(LOCAL_STORAGE_ADMIN_KEY, JSON.stringify(user));
  } catch {}
};

export const clearStoredAdminSession = () => {
  try {
    localStorage.removeItem(LOCAL_STORAGE_ADMIN_KEY);
  } catch {}
};

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
      await signOut(auth);
      clearStoredAdminSession();
      return {
        success: false,
        error: `Akses ditolak. Email (${user.email}) tidak memiliki hak akses administrator. Hubungi wisatabromo.co@gmail.com.`
      };
    }

    const adminUser = formatAdminUser(user);
    setStoredAdminSession(adminUser);

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
      // Non-blocking
    }

    return { success: true, user: adminUser };
  } catch (error: any) {
    console.error('Google Admin Sign-in Error:', error);
    let msg = error.message || 'Gagal login dengan akun Google';
    if (error.code === 'auth/popup-closed-by-user') {
      msg = 'Jendela login Google ditutup. Silakan coba lagi.';
    } else if (error.code === 'auth/unauthorized-domain') {
      msg = 'Domain belum diotorisasi di Firebase OAuth. Gunakan password master di bawah: BromoAdmin2026!';
    }
    return {
      success: false,
      error: msg
    };
  }
};

/**
 * Log in using Email and Password (for credential login)
 * Supports primary master passkey and Firebase Auth
 */
export const loginAdminWithEmail = async (
  email: string, 
  pass: string
): Promise<{ success: boolean; user?: AdminUser; error?: string }> => {
  const cleanEmail = email.trim();
  const cleanPass = pass.trim();

  // 1. Instant Master Passkey check for the official admin email
  if (
    cleanEmail.toLowerCase() === PRIMARY_ADMIN_EMAIL.toLowerCase() &&
    MASTER_ADMIN_PASSKEYS.includes(cleanPass)
  ) {
    const adminUser: AdminUser = {
      uid: 'master_super_admin_wisatabromo',
      email: PRIMARY_ADMIN_EMAIL,
      displayName: 'Super Administrator',
      photoURL: null,
      role: 'super_admin',
      lastLogin: new Date().toISOString()
    };
    setStoredAdminSession(adminUser);
    return { success: true, user: adminUser };
  }

  // 2. Standard Firebase Authentication
  try {
    const result = await signInWithEmailAndPassword(auth, cleanEmail, pass);
    const user = result.user;

    const isAdmin = await checkIsAdmin(user);
    if (!isAdmin) {
      await signOut(auth);
      clearStoredAdminSession();
      return {
        success: false,
        error: `Akses ditolak. Akun ${cleanEmail} bukan administrator resmi.`
      };
    }

    const adminUser = formatAdminUser(user);
    setStoredAdminSession(adminUser);
    return { success: true, user: adminUser };
  } catch (error: any) {
    console.error('Email Admin Sign-in Error:', error);

    // If user not found yet and it's the primary admin email, try creating it with the password provided
    if (
      (error.code === 'auth/user-not-found' || error.code === 'auth/invalid-credential') &&
      cleanEmail.toLowerCase() === PRIMARY_ADMIN_EMAIL.toLowerCase()
    ) {
      try {
        const createResult = await createUserWithEmailAndPassword(auth, cleanEmail, pass);
        const adminUser = formatAdminUser(createResult.user);
        setStoredAdminSession(adminUser);
        return { success: true, user: adminUser };
      } catch (createErr: any) {
        if (createErr.code === 'auth/weak-password') {
          return { success: false, error: 'Password terlalu pendek (minimal 6 karakter).' };
        }
      }
    }

    let message = 'Email atau password salah. Anda dapat klik "Masuk dengan Akun Google Admin" atau gunakan password master: BromoAdmin2026!';
    if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password' || error.code === 'auth/invalid-credential') {
      message = 'Kredensial tidak valid. Silakan gunakan tombol "Masuk dengan Akun Google Admin" atau kata sandi master: BromoAdmin2026!';
    } else if (error.code === 'auth/too-many-requests') {
      message = 'Terlalu banyak percobaan gagal. Silakan masuk dengan tombol Google atau gunakan password master: BromoAdmin2026!';
    }
    return { success: false, error: message };
  }
};

/**
 * Send password reset email
 */
export const requestPasswordReset = async (email: string): Promise<{ success: boolean; message: string }> => {
  try {
    const targetEmail = (email || PRIMARY_ADMIN_EMAIL).trim();
    await sendPasswordResetEmail(auth, targetEmail);
    return {
      success: true,
      message: `Link reset kata sandi telah dikirim ke ${targetEmail}. Silakan periksa inbox atau spam email Anda.`
    };
  } catch (err: any) {
    return {
      success: false,
      message: err.message || 'Gagal mengirim email reset kata sandi.'
    };
  }
};

/**
 * Sign out current admin user
 */
export const logoutAdmin = async (): Promise<void> => {
  clearStoredAdminSession();
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
  // Check stored active session first
  const stored = getStoredAdminSession();
  if (stored) {
    callback(stored, true);
  }

  return onAuthStateChanged(auth, async (firebaseUser) => {
    if (!firebaseUser) {
      const activeStored = getStoredAdminSession();
      if (activeStored) {
        callback(activeStored, true);
      } else {
        callback(null, false);
      }
      return;
    }

    const isAdmin = await checkIsAdmin(firebaseUser);
    if (!isAdmin) {
      clearStoredAdminSession();
      callback(null, false);
    } else {
      const adminUser = formatAdminUser(firebaseUser);
      setStoredAdminSession(adminUser);
      callback(adminUser, true);
    }
  });
};
