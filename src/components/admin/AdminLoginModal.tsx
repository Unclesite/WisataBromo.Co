import React, { useState } from 'react';
import { ShieldCheck, AlertCircle, ArrowLeft, LogIn, Lock, Eye, EyeOff, KeyRound, CheckCircle2 } from 'lucide-react';
import { 
  loginAdminWithGoogle, 
  loginAdminWithEmail, 
  requestPasswordReset, 
  PRIMARY_ADMIN_EMAIL, 
  MASTER_ADMIN_PASSKEYS 
} from '../../services/adminAuthService';
import { AdminUser } from '../../types/admin';

interface AdminLoginModalProps {
  isOpen: boolean;
  onSuccess: (admin: AdminUser) => void;
  onBackToWebsite: () => void;
}

export const AdminLoginModal: React.FC<AdminLoginModalProps> = ({
  isOpen,
  onSuccess,
  onBackToWebsite
}) => {
  const [email, setEmail] = useState(PRIMARY_ADMIN_EMAIL);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    setErrorMsg(null);
    setSuccessMsg(null);
    try {
      const res = await loginAdminWithGoogle();
      if (res.success && res.user) {
        onSuccess(res.user);
      } else {
        setErrorMsg(res.error || 'Akses ditolak. Akun tidak memiliki otorisasi administrator.');
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Gagal login via Google.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMsg('Harap masukkan email dan password admin.');
      return;
    }
    setIsLoading(true);
    setErrorMsg(null);
    setSuccessMsg(null);
    try {
      const res = await loginAdminWithEmail(email, password);
      if (res.success && res.user) {
        onSuccess(res.user);
      } else {
        setErrorMsg(res.error || 'Email atau password salah.');
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Gagal masuk.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleUseMasterPass = () => {
    setEmail(PRIMARY_ADMIN_EMAIL);
    setPassword(MASTER_ADMIN_PASSKEYS[0]);
    setErrorMsg(null);
    setSuccessMsg('Kata sandi master terisi otomatis. Silakan klik "Masuk ke Dashboard".');
  };

  const handleResetPassword = async () => {
    setIsLoading(true);
    setErrorMsg(null);
    setSuccessMsg(null);
    try {
      const res = await requestPasswordReset(email);
      if (res.success) {
        setSuccessMsg(res.message);
      } else {
        setErrorMsg(res.message);
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Gagal mengirim email reset.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden my-auto">
        {/* Header pattern */}
        <div className="bg-gradient-to-br from-[#102a56] to-[#1e3a8a] text-white p-6 sm:p-7 text-center relative">
          <div className="inline-flex items-center justify-center w-13 h-13 rounded-2xl bg-white/10 backdrop-blur-md mb-3 border border-white/20 shadow-inner">
            <ShieldCheck className="w-7 h-7 text-blue-200" />
          </div>
          <h2 className="text-xl font-bold tracking-tight">Admin Portal</h2>
          <p className="text-xs text-blue-100/80 mt-1 font-medium">
            WisataBromo.co · PT Global Travel Healing
          </p>
        </div>

        <div className="p-6 sm:p-7">
          {/* Instructions Box */}
          <div className="mb-5 p-3.5 bg-blue-50/80 border border-blue-200/80 rounded-xl text-blue-900 text-xs leading-relaxed">
            <p className="font-semibold text-blue-950 flex items-center gap-1.5 mb-1">
              <KeyRound className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              2 Cara Mudah Masuk Admin:
            </p>
            <ol className="list-decimal list-inside space-y-1 text-slate-700">
              <li>
                <strong className="text-blue-900">Tombol Google di bawah:</strong> 1-klik masuk via Gmail <code className="bg-white px-1 py-0.5 rounded text-[11px] font-mono text-blue-800">wisatabromo.co@gmail.com</code> tanpa kata sandi.
              </li>
              <li>
                <strong className="text-blue-900">Atau Sandi Master:</strong> Gunakan kata sandi <code className="bg-white px-1 py-0.5 rounded text-[11px] font-mono text-emerald-700 font-bold">BromoAdmin2026!</code>
              </li>
            </ol>
          </div>

          {errorMsg && (
            <div className="mb-4 p-3.5 bg-rose-50 border border-rose-200 rounded-xl flex items-start gap-3 text-rose-800 text-xs sm:text-sm">
              <AlertCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
              <div className="leading-snug">{errorMsg}</div>
            </div>
          )}

          {successMsg && (
            <div className="mb-4 p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl flex items-start gap-3 text-emerald-800 text-xs sm:text-sm">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <div className="leading-snug">{successMsg}</div>
            </div>
          )}

          {/* Primary: Google Sign-in */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm rounded-xl border-2 border-blue-600/30 hover:border-blue-600 shadow-sm transition-all hover:shadow active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed mb-5 cursor-pointer"
          >
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <span>{isLoading ? 'Memverifikasi...' : 'Masuk dengan Akun Google Admin'}</span>
          </button>

          <div className="relative flex items-center justify-center mb-5">
            <div className="border-t border-slate-200 w-full" />
            <span className="bg-white px-3 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
              atau kredensial email & sandi
            </span>
          </div>

          {/* Email / Password Form */}
          <form onSubmit={handleEmailLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">Email Administrator</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="wisatabromo.co@gmail.com"
                required
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-semibold text-slate-700">Kata Sandi</label>
                <button
                  type="button"
                  onClick={handleUseMasterPass}
                  className="text-[11px] font-medium text-blue-600 hover:text-blue-800 hover:underline cursor-pointer"
                >
                  Isi Sandi Master Otomatis
                </button>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full px-3.5 py-2.5 pr-10 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition font-mono"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer p-1"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#102a56] hover:bg-[#163873] text-white font-semibold text-sm rounded-xl transition shadow-md shadow-blue-950/10 active:scale-[0.99] disabled:opacity-50 cursor-pointer"
            >
              <LogIn className="w-4 h-4" />
              <span>{isLoading ? 'Memproses...' : 'Masuk ke Dashboard'}</span>
            </button>
          </form>

          <div className="mt-4 text-center">
            <button
              type="button"
              onClick={handleResetPassword}
              disabled={isLoading}
              className="text-xs text-slate-500 hover:text-blue-600 hover:underline transition cursor-pointer"
            >
              Lupa kata sandi? Kirim link reset ke email
            </button>
          </div>

          <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
            <button
              type="button"
              onClick={onBackToWebsite}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-slate-800 transition cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Kembali ke Website
            </button>

            <span className="inline-flex items-center gap-1 text-[11px] text-slate-400">
              <Lock className="w-3 h-3 text-slate-400" />
              Enkripsi TLS 256-bit
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
