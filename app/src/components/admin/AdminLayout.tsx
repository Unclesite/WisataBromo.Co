import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  CalendarCheck, 
  Mail, 
  FileEdit, 
  Settings, 
  LogOut, 
  ArrowLeft, 
  Menu, 
  X, 
  ShieldCheck, 
  User, 
  Bell,
  ExternalLink
} from 'lucide-react';
import { AdminUser } from '../../types/admin';
import { logoutAdmin } from '../../services/adminAuthService';
import { listenToBookingsRealtime, StoredBookingRecord, getAllBookingsFromFirestore } from '../../services/firestoreBookingService';
import { AdminDashboardTab } from './AdminDashboardTab';
import { AdminBookingsTab } from './AdminBookingsTab';
import { AdminEmailTab } from './AdminEmailTab';
import { AdminContentTab } from './AdminContentTab';
import { AdminSettingsTab } from './AdminSettingsTab';

interface AdminLayoutProps {
  admin: AdminUser;
  onLogout: () => void;
  onBackToWebsite: () => void;
}

export type AdminTab = 'dashboard' | 'bookings' | 'email' | 'content' | 'settings';

export const AdminLayout: React.FC<AdminLayoutProps> = ({
  admin,
  onLogout,
  onBackToWebsite
}) => {
  const [activeTab, setActiveTab] = useState<AdminTab>('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [bookings, setBookings] = useState<StoredBookingRecord[]>([]);
  const [selectedBookingForDetail, setSelectedBookingForDetail] = useState<StoredBookingRecord | null>(null);

  // Attach realtime listener for bookings
  useEffect(() => {
    // Initial fetch
    getAllBookingsFromFirestore().then(data => {
      if (data && data.length > 0) setBookings(data);
    });

    const unsubscribe = listenToBookingsRealtime((updatedList) => {
      setBookings(updatedList);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleSelectBookingFromDashboard = (booking: StoredBookingRecord) => {
    setSelectedBookingForDetail(booking);
    setActiveTab('bookings');
  };

  const handleLogout = async () => {
    await logoutAdmin();
    onLogout();
  };

  const navItems = [
    {
      id: 'dashboard' as AdminTab,
      label: 'Dashboard',
      icon: LayoutDashboard,
      badge: null
    },
    {
      id: 'bookings' as AdminTab,
      label: 'Booking',
      icon: CalendarCheck,
      badge: bookings.filter(b => b.status === 'DP_SUBMITTED').length || null
    },
    {
      id: 'email' as AdminTab,
      label: 'Email',
      icon: Mail,
      badge: null
    },
    {
      id: 'content' as AdminTab,
      label: 'Konten Website',
      icon: FileEdit,
      badge: null
    },
    {
      id: 'settings' as AdminTab,
      label: 'Pengaturan',
      icon: Settings,
      badge: null
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row font-sans text-slate-800">
      {/* Mobile Top Header */}
      <div className="md:hidden bg-[#102a56] text-white p-4 flex items-center justify-between shadow-md sticky top-0 z-40">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center font-black text-sm text-blue-200">
            WB
          </div>
          <div>
            <div className="font-bold text-sm leading-none">WisataBromo.co</div>
            <div className="text-[10px] text-blue-200/80 mt-0.5">Admin Management</div>
          </div>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-white/80 hover:text-white rounded-lg focus:outline-none cursor-pointer"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <aside
        className={`fixed md:sticky top-0 left-0 h-screen w-64 bg-[#102a56] text-white flex flex-col justify-between z-50 transition-transform duration-300 md:translate-x-0 ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        } shadow-xl md:shadow-none shrink-0`}
      >
        <div>
          {/* Brand Logo & Header */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center font-black text-white shadow-inner">
                WB
              </div>
              <div>
                <div className="font-extrabold text-base tracking-tight leading-none text-white">
                  WISATABROMO
                </div>
                <div className="text-[10px] text-blue-200/80 font-medium tracking-wide mt-1">
                  ADMINISTRATOR PANEL
                </div>
              </div>
            </div>

            {/* Mobile close */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="md:hidden text-white/70 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="px-3 py-6 space-y-1">
            <div className="px-3 pb-2 text-[10px] font-bold text-blue-300/60 uppercase tracking-widest">
              Menu Utama
            </div>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-semibold text-xs transition cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/30'
                      : 'text-blue-100/75 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-blue-300/70'}`} />
                    <span>{item.label}</span>
                  </div>

                  {item.badge !== null && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-400 text-amber-950">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Sidebar Bottom: Admin Profile & Actions */}
        <div className="p-4 border-t border-white/10 bg-black/15 space-y-3">
          {/* User profile card */}
          <div className="flex items-center gap-3 p-2 bg-white/5 rounded-xl border border-white/5">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-xs shrink-0">
              {admin.displayName ? admin.displayName.charAt(0).toUpperCase() : 'A'}
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-xs font-bold text-white truncate">
                {admin.displayName || 'Administrator'}
              </div>
              <div className="text-[10px] text-blue-200/70 truncate" title={admin.email || ''}>
                {admin.email}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1">
            <button
              onClick={onBackToWebsite}
              className="flex items-center justify-center gap-1.5 px-2.5 py-2 bg-white/10 hover:bg-white/15 text-white text-xs font-semibold rounded-lg transition cursor-pointer"
              title="Buka Website Customer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Website</span>
            </button>

            <button
              onClick={handleLogout}
              className="flex items-center justify-center gap-1.5 px-2.5 py-2 bg-rose-500/20 hover:bg-rose-500/30 text-rose-200 text-xs font-semibold rounded-lg transition cursor-pointer"
              title="Keluar dari Admin"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {/* Top Navbar */}
        <header className="hidden md:flex items-center justify-between px-8 py-4 bg-white border-b border-slate-200/80 sticky top-0 z-30 shadow-2xs">
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400 font-medium">Panel Admin</span>
            <span className="text-slate-300">/</span>
            <span className="text-xs font-bold text-slate-800 capitalize">{activeTab}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onBackToWebsite}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition cursor-pointer"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Lihat Website</span>
            </button>

            <div className="h-4 w-px bg-slate-200" />

            <div className="flex items-center gap-2 pl-1">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Live Mode
              </span>
            </div>
          </div>
        </header>

        {/* Tab Content */}
        <div className="p-4 sm:p-8 flex-1">
          {activeTab === 'dashboard' && (
            <AdminDashboardTab
              bookings={bookings}
              onSelectBooking={handleSelectBookingFromDashboard}
              onNavigateToBookings={() => setActiveTab('bookings')}
            />
          )}

          {activeTab === 'bookings' && (
            <AdminBookingsTab
              bookings={bookings}
              onRefresh={() => {
                getAllBookingsFromFirestore().then(data => setBookings(data));
              }}
              selectedBookingProp={selectedBookingForDetail}
              onClearSelectedProp={() => setSelectedBookingForDetail(null)}
            />
          )}

          {activeTab === 'email' && <AdminEmailTab />}

          {activeTab === 'content' && <AdminContentTab adminEmail={admin.email || 'wisatabromo.co@gmail.com'} />}

          {activeTab === 'settings' && <AdminSettingsTab />}
        </div>
      </main>
    </div>
  );
};
