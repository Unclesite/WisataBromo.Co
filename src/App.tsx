import React, { useState, useEffect, useCallback } from 'react';
import { TourPackage, StartCity, TripCategory, BlogPost } from './types';
import { TOUR_PACKAGES } from './data/packagesData';
import { Navbar } from './components/Navbar';
import { LiveTnbtsWeatherBar } from './components/LiveTnbtsWeatherBar';
import { HeroSection } from './components/HeroSection';
import { PackageExplorer } from './components/PackageExplorer';
import { StartCityGuideSection } from './components/StartCityGuideSection';
import { ElevationSpotGuide } from './components/ElevationSpotGuide';
import { PicnicAndTrailSection } from './components/PicnicAndTrailSection';
import { VipTestimonialVideoSection } from './components/VipTestimonialVideoSection';
import { BromoCultureBlogSection } from './components/BromoCultureBlogSection';
import { TipsAndPreparationSection } from './components/TipsAndPreparationSection';
import { TestimonialsAndFaqSection } from './components/TestimonialsAndFaqSection';
import { Footer } from './components/Footer';
import { BookingCalculatorModal } from './components/BookingCalculatorModal';
import { PackageDetailPage } from './components/PackageDetailPage';
import { PackageDetailModal } from './components/PackageDetailModal';
import { LiveStatusModal } from './components/LiveStatusModal';
import { TentangKamiPage } from './components/TentangKamiPage';
import { BlogDirectoryPage } from './components/BlogDirectoryPage';
import { PicnicDedicatedPage } from './components/picnic/PicnicDedicatedPage';
import { PicnicHomeTeaser } from './components/picnic/PicnicHomeTeaser';
import { PicnicBookingModal } from './components/picnic/PicnicBookingModal';
import { PicnicPackage } from './types/picnic';
import { AdminLoginModal } from './components/admin/AdminLoginModal';
import { AdminLayout } from './components/admin/AdminLayout';
import { PWAInstallBanner } from './components/PWAInstallBanner';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { fetchLiveBromoWeather, WeatherData } from './services/weatherService';
import { getOfficialTnbtsStatus, TnbtsStatusData } from './services/tnbtsStatusService';
import { getStoredAdminSession, clearStoredAdminSession } from './services/adminAuthService';
import { AdminUser } from './types/admin';

type AppView = 'home' | 'package-detail' | 'about' | 'blogs' | 'picnic' | 'admin';

export default function App() {
  const [currentView, setCurrentView] = useState<AppView>('home');
  const [selectedPackage, setSelectedPackage] = useState<TourPackage | null>(null);
  const [selectedArticlePostId, setSelectedArticlePostId] = useState<string | undefined>(undefined);
  
  // Filter states
  const [selectedCategory, setSelectedCategory] = useState<TripCategory>('all');
  const [selectedCity, setSelectedCity] = useState<StartCity>('all');
  
  // Modals state
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingPackageId, setBookingPackageId] = useState<string | undefined>('open-trip-malang');
  const [detailModalPackage, setDetailModalPackage] = useState<TourPackage | null>(null);
  const [isLiveStatusModalOpen, setIsLiveStatusModalOpen] = useState(false);
  const [isAdminLoginOpen, setIsAdminLoginOpen] = useState(false);
  const [selectedPicnicPackage, setSelectedPicnicPackage] = useState<PicnicPackage | null>(null);
  const [isPicnicBookingOpen, setIsPicnicBookingOpen] = useState(false);
  
  // Admin state
  const [adminUser, setAdminUser] = useState<AdminUser | null>(() => getStoredAdminSession());
  
  // Weather & TNBTS Status
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [isLoadingWeather, setIsLoadingWeather] = useState(false);
  const [tnbtsStatus] = useState<TnbtsStatusData>(() => getOfficialTnbtsStatus());

  const loadWeather = useCallback(async () => {
    setIsLoadingWeather(true);
    try {
      const data = await fetchLiveBromoWeather();
      setWeather(data);
    } catch (err) {
      console.warn('Gagal memuat cuaca:', err);
    } finally {
      setIsLoadingWeather(false);
    }
  }, []);

  useEffect(() => {
    loadWeather();
  }, [loadWeather]);

  // Hash-based routing handler
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#admin') {
        const storedAdmin = getStoredAdminSession();
        if (storedAdmin) {
          setAdminUser(storedAdmin);
          setCurrentView('admin');
        } else {
          setIsAdminLoginOpen(true);
        }
      } else if (hash === '#tentang-kami' || hash === '#about') {
        setCurrentView('about');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#artikel' || hash === '#blog' || hash === '#panduan') {
        setCurrentView('blogs');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#picnic' || hash === '#piknik') {
        setCurrentView('picnic');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash.startsWith('#paket-')) {
        const pkgId = hash.replace('#paket-', '');
        const targetPkg = TOUR_PACKAGES.find(p => p.id === pkgId);
        if (targetPkg) {
          setSelectedPackage(targetPkg);
          setCurrentView('package-detail');
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleOpenBooking = (pkgId?: string) => {
    setBookingPackageId(pkgId || 'open-trip-malang');
    setIsBookingModalOpen(true);
  };

  const handleViewPackageDetails = (pkg: TourPackage) => {
    setSelectedPackage(pkg);
    setCurrentView('package-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAdminLoginSuccess = (admin: AdminUser) => {
    setAdminUser(admin);
    setIsAdminLoginOpen(false);
    setCurrentView('admin');
  };

  const handleAdminLogout = () => {
    clearStoredAdminSession();
    setAdminUser(null);
    setCurrentView('home');
    window.location.hash = '';
  };

  const isAnyModalOpen = isBookingModalOpen || isPicnicBookingOpen || isLiveStatusModalOpen || !!detailModalPackage || isAdminLoginOpen;

  // Render Admin View
  if (currentView === 'admin' && adminUser) {
    return (
      <AdminLayout
        admin={adminUser}
        onLogout={handleAdminLogout}
        onBackToWebsite={() => {
          setCurrentView('home');
          window.location.hash = '';
        }}
      />
    );
  }

  // Render Package Detail Page View
  if (currentView === 'package-detail' && selectedPackage) {
    return (
      <div className="min-h-screen bg-[#ffffff] text-[#0B1220] flex flex-col font-sans">
        <LiveTnbtsWeatherBar
          weather={weather || ({} as any)}
          tnbtsStatus={tnbtsStatus}
          isLoadingWeather={isLoadingWeather}
          onRefreshWeather={loadWeather}
          onOpenDetails={() => setIsLiveStatusModalOpen(true)}
        />
        <Navbar
          onOpenBooking={handleOpenBooking}
          onFilterCategory={(cat) => {
            setSelectedCategory(cat);
            setCurrentView('home');
            setTimeout(() => {
              const el = document.getElementById('paket-wisata');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
          onOpenLiveStatus={() => setIsLiveStatusModalOpen(true)}
          onOpenArticles={() => setCurrentView('blogs')}
          onOpenAbout={() => setCurrentView('about')}
          onOpenPicnic={() => setCurrentView('picnic')}
          weather={weather || undefined}
        />
        <main className="flex-1">
          <PackageDetailPage
            packageItem={selectedPackage}
            onBackToHome={() => {
              setCurrentView('home');
              window.location.hash = '';
            }}
            onBookNow={(pkg) => handleOpenBooking(pkg.id)}
          />
        </main>
        <Footer />
        <BookingCalculatorModal
          isOpen={isBookingModalOpen}
          onClose={() => setIsBookingModalOpen(false)}
          packages={TOUR_PACKAGES}
          initialPackageId={bookingPackageId}
        />
        <LiveStatusModal
          isOpen={isLiveStatusModalOpen}
          onClose={() => setIsLiveStatusModalOpen(false)}
          weather={weather || ({} as any)}
          isLoadingWeather={isLoadingWeather}
          onRefreshWeather={loadWeather}
        />
        <AdminLoginModal
          isOpen={isAdminLoginOpen}
          onSuccess={handleAdminLoginSuccess}
          onBackToWebsite={() => {
            setIsAdminLoginOpen(false);
            window.location.hash = '';
          }}
        />
        {/* Floating WhatsApp Bubble (Elevated above sticky mobile booking bar, hidden when modal open) */}
        <FloatingWhatsApp hasBottomBar={true} hidden={isAnyModalOpen} />
      </div>
    );
  }

  // Render Tentang Kami Page View
  if (currentView === 'about') {
    return (
      <div className="min-h-screen bg-[#ffffff] text-[#0B1220] flex flex-col font-sans">
        <LiveTnbtsWeatherBar
          weather={weather || ({} as any)}
          tnbtsStatus={tnbtsStatus}
          isLoadingWeather={isLoadingWeather}
          onRefreshWeather={loadWeather}
          onOpenDetails={() => setIsLiveStatusModalOpen(true)}
        />
        <Navbar
          onOpenBooking={handleOpenBooking}
          onFilterCategory={(cat) => {
            setSelectedCategory(cat);
            setCurrentView('home');
          }}
          onOpenLiveStatus={() => setIsLiveStatusModalOpen(true)}
          onOpenArticles={() => setCurrentView('blogs')}
          onOpenAbout={() => setCurrentView('about')}
          onOpenPicnic={() => setCurrentView('picnic')}
          weather={weather || undefined}
        />
        <main className="flex-1">
          <TentangKamiPage
            onBackToHome={() => {
              setCurrentView('home');
              window.location.hash = '';
            }}
            onOpenBooking={handleOpenBooking}
            onOpenArticles={() => setCurrentView('blogs')}
          />
        </main>
        <Footer />
        <BookingCalculatorModal
          isOpen={isBookingModalOpen}
          onClose={() => setIsBookingModalOpen(false)}
          packages={TOUR_PACKAGES}
          initialPackageId={bookingPackageId}
        />
        <LiveStatusModal
          isOpen={isLiveStatusModalOpen}
          onClose={() => setIsLiveStatusModalOpen(false)}
          weather={weather || ({} as any)}
          isLoadingWeather={isLoadingWeather}
          onRefreshWeather={loadWeather}
        />
        {/* Floating WhatsApp Bubble */}
        <FloatingWhatsApp />
      </div>
    );
  }

  // Render Blogs / Articles Directory View
  if (currentView === 'blogs') {
    return (
      <div className="min-h-screen bg-[#ffffff] text-[#0B1220] flex flex-col font-sans">
        <LiveTnbtsWeatherBar
          weather={weather || ({} as any)}
          tnbtsStatus={tnbtsStatus}
          isLoadingWeather={isLoadingWeather}
          onRefreshWeather={loadWeather}
          onOpenDetails={() => setIsLiveStatusModalOpen(true)}
        />
        <Navbar
          onOpenBooking={handleOpenBooking}
          onFilterCategory={(cat) => {
            setSelectedCategory(cat);
            setCurrentView('home');
          }}
          onOpenLiveStatus={() => setIsLiveStatusModalOpen(true)}
          onOpenArticles={() => setCurrentView('blogs')}
          onOpenAbout={() => setCurrentView('about')}
          onOpenPicnic={() => setCurrentView('picnic')}
          weather={weather || undefined}
        />
        <main className="flex-1">
          <BlogDirectoryPage
            onBackToHome={() => {
              setCurrentView('home');
              window.location.hash = '';
            }}
            onOpenBooking={handleOpenBooking}
            initialPostId={selectedArticlePostId}
          />
        </main>
        <Footer />
        <BookingCalculatorModal
          isOpen={isBookingModalOpen}
          onClose={() => setIsBookingModalOpen(false)}
          packages={TOUR_PACKAGES}
          initialPackageId={bookingPackageId}
        />
        <LiveStatusModal
          isOpen={isLiveStatusModalOpen}
          onClose={() => setIsLiveStatusModalOpen(false)}
          weather={weather || ({} as any)}
          isLoadingWeather={isLoadingWeather}
          onRefreshWeather={loadWeather}
        />
        {/* Floating WhatsApp Bubble */}
        <FloatingWhatsApp />
      </div>
    );
  }

  // Render Picnic Dedicated Page View
  if (currentView === 'picnic') {
    return (
      <div className="min-h-screen bg-[#ffffff] text-[#0B1220] flex flex-col font-sans">
        <LiveTnbtsWeatherBar
          weather={weather || ({} as any)}
          tnbtsStatus={tnbtsStatus}
          isLoadingWeather={isLoadingWeather}
          onRefreshWeather={loadWeather}
          onOpenDetails={() => setIsLiveStatusModalOpen(true)}
        />
        <Navbar
          onOpenBooking={handleOpenBooking}
          onFilterCategory={(cat) => {
            setSelectedCategory(cat);
            setCurrentView('home');
          }}
          onOpenLiveStatus={() => setIsLiveStatusModalOpen(true)}
          onOpenArticles={() => setCurrentView('blogs')}
          onOpenAbout={() => setCurrentView('about')}
          onOpenPicnic={() => setCurrentView('picnic')}
          weather={weather || undefined}
        />
        <main className="flex-1">
          <PicnicDedicatedPage
            onBackToHome={() => {
              setCurrentView('home');
              window.location.hash = '';
            }}
            onOpenJeepBooking={() => handleOpenBooking('open-trip-malang')}
          />
        </main>
        <Footer />
        <LiveStatusModal
          isOpen={isLiveStatusModalOpen}
          onClose={() => setIsLiveStatusModalOpen(false)}
          weather={weather || ({} as any)}
          isLoadingWeather={isLoadingWeather}
          onRefreshWeather={loadWeather}
        />
        {/* Floating WhatsApp Bubble */}
        <FloatingWhatsApp />
      </div>
    );
  }

  // Default: Main Portal Home View
  return (
    <div className="min-h-screen bg-[#ffffff] text-[#0B1220] flex flex-col font-sans selection:bg-[#0996F5] selection:text-white">
      {/* 1. Live Weather & TNBTS Operational Status Top Bar */}
      <LiveTnbtsWeatherBar
        weather={weather || ({} as any)}
        tnbtsStatus={tnbtsStatus}
        isLoadingWeather={isLoadingWeather}
        onRefreshWeather={loadWeather}
        onOpenDetails={() => setIsLiveStatusModalOpen(true)}
      />

      {/* 2. Official Sticky Header Navbar */}
      <Navbar
        onOpenBooking={handleOpenBooking}
        onFilterCategory={(cat) => {
          setSelectedCategory(cat);
          const el = document.getElementById('paket-wisata');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenLiveStatus={() => setIsLiveStatusModalOpen(true)}
        onOpenArticles={() => setCurrentView('blogs')}
        onOpenAbout={() => setCurrentView('about')}
        onOpenPicnic={() => setCurrentView('picnic')}
        weather={weather || undefined}
      />

      <main className="flex-1">
        {/* 3. Hero Section with Carousel & Search Filter */}
        <HeroSection
          onSearch={(city, category) => {
            setSelectedCity(city);
            setSelectedCategory(category);
          }}
          onOpenBooking={() => handleOpenBooking('open-trip-malang')}
          onExplorePackages={() => {
            const el = document.getElementById('paket-wisata');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenLiveStatus={() => setIsLiveStatusModalOpen(true)}
          weather={weather || undefined}
          tnbtsStatus={tnbtsStatus}
        />

        {/* 4. Bukti Layanan VVIP Dipercaya Kementerian RI & Korporat (Dinaikkan ke atas) */}
        <VipTestimonialVideoSection />

        {/* 5. Core Section: Card-Based Previews of Available Trip Packages with Title, Description, Starting Price, and Hover Effects */}
        <PackageExplorer
          packages={TOUR_PACKAGES}
          selectedCategory={selectedCategory}
          selectedCity={selectedCity}
          onSelectCategory={setSelectedCategory}
          onSelectCity={setSelectedCity}
          onViewDetails={handleViewPackageDetails}
          onBookPackage={(pkg) => handleOpenBooking(pkg.id)}
        />

        {/* 6. Bromo Picnic Experience - Banner Menuju Dedicated Picnic Page */}
        <PicnicHomeTeaser
          onOpenPicnicPage={() => {
            setCurrentView('picnic');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />

        {/* 7. Start City Gate Guide */}
        <StartCityGuideSection
          onSelectCityFilter={(city) => {
            setSelectedCity(city);
            const el = document.getElementById('paket-wisata');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 8. Elevation & Spot Guide */}
        <ElevationSpotGuide />

        {/* 9. Special Experience: Sewa Trail Sukapura & Overview */}
        <PicnicAndTrailSection
          packages={TOUR_PACKAGES}
          onSelectPackage={handleOpenBooking}
          onOpenPicnic={() => setCurrentView('picnic')}
        />

        {/* 11. Packing Checklist & High-Altitude Cold Tips */}
        <TipsAndPreparationSection />

        {/* 12. Google Reviews Testimonials & FAQ Accordion */}
        <TestimonialsAndFaqSection />
      </main>

      {/* Official Footer */}
      <Footer />

      {/* Interactive Booking Modal with Form, Down Payment & Email Notifications */}
      <BookingCalculatorModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        packages={TOUR_PACKAGES}
        initialPackageId={bookingPackageId}
      />

      {/* Picnic Experience Booking Modal */}
      <PicnicBookingModal
        packageItem={selectedPicnicPackage}
        isOpen={isPicnicBookingOpen}
        onClose={() => setIsPicnicBookingOpen(false)}
        onOpenJeepBooking={() => handleOpenBooking('open-trip-malang')}
      />

      {/* Quick Package Detail Modal */}
      <PackageDetailModal
        packageItem={detailModalPackage}
        onClose={() => setDetailModalPackage(null)}
        onProceedToBooking={(pkg) => {
          setDetailModalPackage(null);
          handleOpenBooking(pkg.id);
        }}
      />

      {/* 15. Live Weather & Operational Status Modal */}
      <LiveStatusModal
        isOpen={isLiveStatusModalOpen}
        onClose={() => setIsLiveStatusModalOpen(false)}
        weather={weather || ({} as any)}
        isLoadingWeather={isLoadingWeather}
        onRefreshWeather={loadWeather}
      />

      {/* 16. Admin Login Modal for Authorized Operators */}
      <AdminLoginModal
        isOpen={isAdminLoginOpen}
        onSuccess={handleAdminLoginSuccess}
        onBackToWebsite={() => {
          setIsAdminLoginOpen(false);
          window.location.hash = '';
        }}
      />

      {/* 17. Progressive Web App Offline Banner */}
      <PWAInstallBanner />

      {/* 18. Floating WhatsApp Customer Service Bubble */}
      <FloatingWhatsApp
        hasBottomBar={currentView === 'package-detail'}
        hidden={isAnyModalOpen}
      />
    </div>
  );
}
