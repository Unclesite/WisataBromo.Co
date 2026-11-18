import React, { useState, useEffect, useCallback } from 'react';
import { TourPackage, StartCity, TripCategory, BlogPost } from './types';
import { TOUR_PACKAGES } from './data/packagesData';
import { Navbar } from './components/Navbar';
import { LiveTnbtsWeatherBar } from './components/LiveTnbtsWeatherBar';
import { HeroSection } from './components/HeroSection';
import { PackageExplorer } from './components/PackageExplorer';
import { FlightRouteMapSection } from './components/FlightRouteMapSection';
import { StartCityGuideSection } from './components/StartCityGuideSection';
import { ElevationSpotGuide } from './components/ElevationSpotGuide';
import { JournalHomeSection } from './components/JournalHomeSection';
import { VipTestimonialVideoSection } from './components/VipTestimonialVideoSection';
import { PeakSeasonBannerSection } from './components/PeakSeasonBannerSection';
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
import { LanguageGateway } from './components/LanguageGateway';
import { fetchLiveBromoWeather, WeatherData } from './services/weatherService';
import { getOfficialTnbtsStatus, TnbtsStatusData } from './services/tnbtsStatusService';
import { getStoredAdminSession, clearStoredAdminSession } from './services/adminAuthService';
import { AdminUser } from './types/admin';

type AppView = 'home' | 'package-detail' | 'about' | 'blogs' | 'picnic' | 'admin';

const parseInitialRoute = (): { view: AppView; pkg: TourPackage | null; adminLogin: boolean; articleId?: string } => {
  if (typeof window === 'undefined') return { view: 'home', pkg: null, adminLogin: false };
  const pathname = window.location.pathname.toLowerCase().replace(/\/+$/, '');
  const hash = window.location.hash.toLowerCase();

  if (pathname === '/admin' || hash === '#admin') {
    const storedAdmin = getStoredAdminSession();
    return storedAdmin ? { view: 'admin', pkg: null, adminLogin: false } : { view: 'home', pkg: null, adminLogin: true };
  }
  if (pathname === '/tentang-kami' || pathname === '/about' || hash === '#tentang-kami' || hash === '#about') {
    return { view: 'about', pkg: null, adminLogin: false };
  }
  if (
    pathname === '/artikel' || 
    pathname === '/blog' || 
    pathname === '/panduan' || 
    pathname === '/journal' ||
    pathname.startsWith('/artikel/') ||
    pathname.startsWith('/blog/') ||
    pathname.startsWith('/journal/') ||
    hash === '#artikel' || 
    hash === '#blog' || 
    hash === '#panduan' ||
    hash === '#journal'
  ) {
    let artId: string | undefined = undefined;
    if (pathname.includes('jeep') || pathname.includes('kapasitas') || hash.includes('jeep') || hash.includes('kapasitas')) {
      artId = 'kapasitas-jeep-bromo';
    } else if (pathname.includes('waktu') || pathname.includes('musim') || hash.includes('waktu') || hash.includes('musim')) {
      artId = 'waktu-terbaik-ke-bromo';
    } else if (pathname.includes('barang') || pathname.includes('7-') || hash.includes('barang')) {
      artId = 'barang-wajib-bawaan-ke-bromo';
    }
    return { view: 'blogs', pkg: null, adminLogin: false, articleId: artId };
  }
  if (pathname === '/picnic' || pathname === '/piknik' || hash === '#picnic' || hash === '#piknik') {
    return { view: 'picnic', pkg: null, adminLogin: false };
  }
  if (pathname.startsWith('/paket/') || pathname.startsWith('/paket-') || hash.startsWith('#paket-')) {
    let pkgParam = '';
    if (pathname.startsWith('/paket/')) {
      pkgParam = pathname.replace(/^\/paket\//, '').trim();
    } else if (pathname.startsWith('/paket-')) {
      pkgParam = pathname.replace(/^\/paket-/, '').trim();
    } else if (hash.startsWith('#paket-')) {
      pkgParam = hash.replace(/^#paket-/, '').trim();
    }
    const targetPkg = TOUR_PACKAGES.find(
      p => p.id === pkgParam || 
           p.slug === pkgParam || 
           p.id === `paket-${pkgParam}` || 
           `paket-${p.id}` === pkgParam ||
           (p.slug && p.slug === `paket-${pkgParam}`)
    );
    if (targetPkg) {
      return { view: 'package-detail', pkg: targetPkg, adminLogin: false };
    }
  }
  return { view: 'home', pkg: null, adminLogin: false };
};

export default function App() {
  const initialRoute = parseInitialRoute();
  const [currentView, setCurrentView] = useState<AppView>(initialRoute.view);
  const [selectedPackage, setSelectedPackage] = useState<TourPackage | null>(initialRoute.pkg);
  const [selectedArticlePostId, setSelectedArticlePostId] = useState<string | undefined>(initialRoute.articleId);
  
  // Filter states
  const [selectedCategory, setSelectedCategory] = useState<TripCategory>('all');
  const [selectedCity, setSelectedCity] = useState<StartCity>('all');
  
  // Modals state
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingPackageId, setBookingPackageId] = useState<string | undefined>('open-trip-malang');
  const [detailModalPackage, setDetailModalPackage] = useState<TourPackage | null>(null);
  const [isLiveStatusModalOpen, setIsLiveStatusModalOpen] = useState(false);
  const [isAdminLoginOpen, setIsAdminLoginOpen] = useState(initialRoute.adminLogin);
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

  // Path-based and Hash-based routing handler for Google Ads Sitelinks compatibility
  useEffect(() => {
    const handleRoute = () => {
      const pathname = window.location.pathname.toLowerCase().replace(/\/$/, '');
      const hash = window.location.hash.toLowerCase();

      if (pathname === '/admin' || hash === '#admin') {
        const storedAdmin = getStoredAdminSession();
        if (storedAdmin) {
          setAdminUser(storedAdmin);
          setCurrentView('admin');
        } else {
          setIsAdminLoginOpen(true);
        }
      } else if (
        pathname === '/tentang-kami' || 
        pathname === '/about' || 
        hash === '#tentang-kami' || 
        hash === '#about'
      ) {
        setCurrentView('about');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        pathname === '/artikel' || 
        pathname === '/blog' || 
        pathname === '/panduan' || 
        pathname === '/journal' ||
        pathname.startsWith('/artikel/') ||
        pathname.startsWith('/blog/') ||
        pathname.startsWith('/journal/') ||
        hash === '#artikel' || 
        hash === '#blog' || 
        hash === '#panduan' ||
        hash === '#journal'
      ) {
        if (pathname.includes('jeep') || pathname.includes('kapasitas') || hash.includes('jeep') || hash.includes('kapasitas')) {
          setSelectedArticlePostId('kapasitas-jeep-bromo');
        } else if (pathname.includes('waktu') || pathname.includes('musim') || hash.includes('waktu') || hash.includes('musim')) {
          setSelectedArticlePostId('waktu-terbaik-ke-bromo');
        } else if (pathname.includes('barang') || pathname.includes('7-') || hash.includes('barang')) {
          setSelectedArticlePostId('barang-wajib-bawaan-ke-bromo');
        }
        setCurrentView('blogs');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        pathname === '/picnic' || 
        pathname === '/piknik' || 
        hash === '#picnic' || 
        hash === '#piknik'
      ) {
        setCurrentView('picnic');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        pathname.startsWith('/paket/') || 
        pathname.startsWith('/paket-') || 
        hash.startsWith('#paket-')
      ) {
        let pkgParam = '';
        if (pathname.startsWith('/paket/')) {
          pkgParam = pathname.replace('/paket/', '').trim();
        } else if (pathname.startsWith('/paket-')) {
          pkgParam = pathname.replace('/paket-', '').trim();
        } else if (hash.startsWith('#paket-')) {
          pkgParam = hash.replace('#paket-', '').trim();
        }

        const targetPkg = TOUR_PACKAGES.find(
          p => p.id === pkgParam || 
               p.slug === pkgParam || 
               p.id === `paket-${pkgParam}` || 
               `paket-${p.id}` === pkgParam ||
               (p.slug && p.slug === `paket-${pkgParam}`)
        );
        if (targetPkg) {
          setSelectedPackage(targetPkg);
          setCurrentView('package-detail');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    };

    handleRoute();
    window.addEventListener('popstate', handleRoute);
    window.addEventListener('hashchange', handleRoute);
    return () => {
      window.removeEventListener('popstate', handleRoute);
      window.removeEventListener('hashchange', handleRoute);
    };
  }, []);

  const handleOpenBooking = (pkgId?: string) => {
    setBookingPackageId(pkgId || 'open-trip-malang');
    setIsBookingModalOpen(true);
  };

  const handleViewPackageDetails = (pkg: TourPackage) => {
    setSelectedPackage(pkg);
    setCurrentView('package-detail');
    const newPath = `/paket/${pkg.slug || pkg.id}`;
    if (window.location.pathname !== newPath) {
      window.history.pushState({}, '', newPath);
    }
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
    if (window.location.pathname !== '/') {
      window.history.pushState({}, '', '/');
    }
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
          window.history.pushState({}, '', '/');
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
          onOpenArticles={() => {
            setCurrentView('blogs');
            window.history.pushState({}, '', '/journal');
          }}
          onOpenAbout={() => {
            setCurrentView('about');
            window.history.pushState({}, '', '/tentang-kami');
          }}
          onOpenPicnic={() => {
            setCurrentView('picnic');
            window.history.pushState({}, '', '/picnic');
          }}
          weather={weather || undefined}
        />
        <main className="flex-1">
          <PackageDetailPage
            packageItem={selectedPackage}
            onBackToHome={() => {
              setCurrentView('home');
              window.history.pushState({}, '', '/');
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
            window.history.pushState({}, '', '/');
          }}
        />
        {/* Floating WhatsApp Bubble (Elevated above sticky mobile booking bar, hidden when modal open) */}
        <FloatingWhatsApp hasBottomBar={true} hidden={isAnyModalOpen} />
        {/* Language Gateway Modal on First Visit */}
        <LanguageGateway />
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
          onOpenArticles={() => {
            setCurrentView('blogs');
            window.history.pushState({}, '', '/journal');
          }}
          onOpenAbout={() => {
            setCurrentView('about');
            window.history.pushState({}, '', '/tentang-kami');
          }}
          onOpenPicnic={() => {
            setCurrentView('picnic');
            window.history.pushState({}, '', '/picnic');
          }}
          weather={weather || undefined}
        />
        <main className="flex-1">
          <TentangKamiPage
            onBackToHome={() => {
              setCurrentView('home');
              window.history.pushState({}, '', '/');
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
        {/* Language Gateway Modal on First Visit */}
        <LanguageGateway />
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
          onOpenArticles={() => {
            setCurrentView('blogs');
            window.history.pushState({}, '', '/journal');
          }}
          onOpenAbout={() => {
            setCurrentView('about');
            window.history.pushState({}, '', '/tentang-kami');
          }}
          onOpenPicnic={() => {
            setCurrentView('picnic');
            window.history.pushState({}, '', '/picnic');
          }}
          weather={weather || undefined}
        />
        <main className="flex-1">
          <BlogDirectoryPage
            onBackToHome={() => {
              setCurrentView('home');
              window.history.pushState({}, '', '/');
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
        {/* Language Gateway Modal on First Visit */}
        <LanguageGateway />
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
          onOpenArticles={() => {
            setCurrentView('blogs');
            window.history.pushState({}, '', '/journal');
          }}
          onOpenAbout={() => {
            setCurrentView('about');
            window.history.pushState({}, '', '/tentang-kami');
          }}
          onOpenPicnic={() => {
            setCurrentView('picnic');
            window.history.pushState({}, '', '/picnic');
          }}
          weather={weather || undefined}
        />
        <main className="flex-1">
          <PicnicDedicatedPage
            onBackToHome={() => {
              setCurrentView('home');
              window.history.pushState({}, '', '/');
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
        {/* Language Gateway Modal on First Visit */}
        <LanguageGateway />
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
        onOpenArticles={() => {
          setCurrentView('blogs');
          window.history.pushState({}, '', '/journal');
        }}
        onOpenAbout={() => {
          setCurrentView('about');
          window.history.pushState({}, '', '/tentang-kami');
        }}
        onOpenPicnic={() => {
          setCurrentView('picnic');
          window.history.pushState({}, '', '/picnic');
        }}
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

        {/* 4. Peak Season Natal & Tahun Baru Alert Banner */}
        <PeakSeasonBannerSection onOpenBooking={() => handleOpenBooking('open-trip-malang')} />

        {/* 5. Bukti Layanan VVIP Dipercaya Kementerian RI & Korporat */}
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

        {/* Animated Flight & Overland Route Map to Mt. Bromo */}
        <FlightRouteMapSection />

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

        {/* 9. The Journal - Inspirasi & Panduan Perjalanan (Luxury Editorial Magazine Grid) */}
        <JournalHomeSection
          onOpenAllArticles={() => {
            setCurrentView('blogs');
            window.history.pushState({}, '', '/journal');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onSelectArticle={(artSlugOrId) => {
            let matchedId = artSlugOrId;
            if (artSlugOrId.includes('jeep') || artSlugOrId.includes('kapasitas')) {
              matchedId = 'kapasitas-jeep-bromo';
            } else if (artSlugOrId.includes('waktu') || artSlugOrId.includes('musim')) {
              matchedId = 'waktu-terbaik-ke-bromo';
            } else if (artSlugOrId.includes('barang') || artSlugOrId.includes('7-')) {
              matchedId = 'barang-wajib-bawaan-ke-bromo';
            }
            setSelectedArticlePostId(matchedId);
            setCurrentView('blogs');
            window.history.pushState({}, '', `/journal/${artSlugOrId}`);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
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
          window.history.pushState({}, '', '/');
        }}
      />

      {/* 17. Progressive Web App Offline Banner */}
      <PWAInstallBanner />

      {/* 18. Floating WhatsApp Customer Service Bubble */}
      <FloatingWhatsApp
        hasBottomBar={currentView === 'package-detail'}
        hidden={isAnyModalOpen}
      />

      {/* 19. Language Gateway Modal on First Visit */}
      <LanguageGateway />
    </div>
  );
}
