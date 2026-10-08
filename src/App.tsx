/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { VipTestimonialVideoSection } from './components/VipTestimonialVideoSection';
import { PackageExplorer } from './components/PackageExplorer';
import { PackageDetailPage } from './components/PackageDetailPage';
import { StartCityGuideSection } from './components/StartCityGuideSection';
import { ElevationSpotGuide } from './components/ElevationSpotGuide';
import { PackageDetailModal } from './components/PackageDetailModal';
import { PicnicAndTrailSection } from './components/PicnicAndTrailSection';
import { PicnicBanner } from './components/picnic/PicnicHomeTeaser';
import { PicnicPage } from './pages/PicnicPage';
import { TipsAndPreparationSection } from './components/TipsAndPreparationSection';
import { BromoCultureBlogSection } from './components/BromoCultureBlogSection';
import { BlogDirectoryPage } from './components/BlogDirectoryPage';
import { TentangKamiPage } from './components/TentangKamiPage';
import { TestimonialsAndFaqSection } from './components/TestimonialsAndFaqSection';
import { BookingCalculatorModal } from './components/BookingCalculatorModal';
import { LiveTnbtsWeatherBar } from './components/LiveTnbtsWeatherBar';
import { LiveStatusModal } from './components/LiveStatusModal';
import { PWAInstallBanner } from './components/PWAInstallBanner';
import { Footer } from './components/Footer';
import { TOUR_PACKAGES } from './data/packagesData';
import { StartCity, TourPackage, TripCategory } from './types';
import { MessageCircle } from 'lucide-react';
import { fetchLiveBromoWeather, FALLBACK_WEATHER_DATA, WeatherData } from './services/weatherService';
import { getOfficialTnbtsStatus, TnbtsStatusData } from './services/tnbtsStatusService';
import { AdminLayout } from './components/admin/AdminLayout';
import { AdminLoginModal } from './components/admin/AdminLoginModal';
import { AdminUser } from './types/admin';
import { onAdminAuthStateChanged } from './services/adminAuthService';
import { ErrorBoundary } from './components/ErrorBoundary';

function MainApp() {
  const [selectedCategory, setSelectedCategory] = useState<TripCategory>('all');
  const [selectedCity, setSelectedCity] = useState<StartCity>('all');
  
  // Admin Portal State
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [currentAdmin, setCurrentAdmin] = useState<AdminUser | null>(null);

  // Dedicated Page View State
  const [activeDetailPage, setActiveDetailPage] = useState<TourPackage | null>(null);
  const [activePackageModal, setActivePackageModal] = useState<TourPackage | null>(null);
  
  // Dedicated Articles / Blog Page View State (20 Articles)
  const [isArticlesPageOpen, setIsArticlesPageOpen] = useState(false);
  const [selectedArticleId, setSelectedArticleId] = useState<string | undefined>(undefined);

  // Dedicated Tentang Kami (About Us) Page View State
  const [isAboutPageOpen, setIsAboutPageOpen] = useState(false);
  
  // Booking Modal State
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingInitialPackageId, setBookingInitialPackageId] = useState<string | undefined>(undefined);

  // Dedicated Picnic Experience Page View State (/picnic)
  const [isPicnicPageOpen, setIsPicnicPageOpen] = useState(false);

  // Live Weather & Official TNBTS Status State
  const [weather, setWeather] = useState<WeatherData>(FALLBACK_WEATHER_DATA);
  const [isLoadingWeather, setIsLoadingWeather] = useState(false);
  const [liveStatusModalOpen, setLiveStatusModalOpen] = useState(false);
  const [tnbtsStatus] = useState<TnbtsStatusData>(getOfficialTnbtsStatus());

  const handleRefreshWeather = async () => {
    setIsLoadingWeather(true);
    try {
      const data = await fetchLiveBromoWeather();
      setWeather(data);
    } catch (err) {
      console.error('Error fetching live weather:', err);
    } finally {
      setIsLoadingWeather(false);
    }
  };

  useEffect(() => {
    handleRefreshWeather();
    // Auto refresh every 10 minutes for live continuous updates
    const interval = setInterval(handleRefreshWeather, 10 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  // Admin auth state listener
  useEffect(() => {
    const unsub = onAdminAuthStateChanged((adminUser, isAdmin) => {
      if (isAdmin && adminUser) {
        setCurrentAdmin(adminUser);
      } else {
        setCurrentAdmin(null);
      }
    });
    return () => unsub();
  }, []);

  // Sync routing on initial load, hashchange, and popstate (/picnic, /admin, #tentang-kami, etc.)
  useEffect(() => {
    const handleLocationChange = () => {
      const hash = window.location.hash;
      const path = window.location.pathname;

      if (hash === '#admin' || path === '/admin' || path === '/admin/') {
        setIsAdminOpen(true);
        setIsAboutPageOpen(false);
        setIsArticlesPageOpen(false);
        setIsPicnicPageOpen(false);
        setActiveDetailPage(null);
        document.title = 'Admin Panel - WisataBromo.co';
        return;
      } else {
        setIsAdminOpen(false);
      }

      if (
        path === '/picnic' ||
        path === '/picnic/' ||
        path.startsWith('/picnic') ||
        hash === '#picnic' ||
        hash.startsWith('#picnic') ||
        hash === '#picnic-experience' ||
        hash === '#piknik'
      ) {
        setIsPicnicPageOpen(true);
        setIsAboutPageOpen(false);
        setIsArticlesPageOpen(false);
        setActiveDetailPage(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        document.title = 'Bromo Picnic Experience (8 Pilihan Menu) - WisataBromo.co';
        return;
      } else {
        setIsPicnicPageOpen(false);
      }

      if (hash === '#tentang-kami' || hash === '#about') {
        setIsAboutPageOpen(true);
        setIsArticlesPageOpen(false);
        setIsPicnicPageOpen(false);
        setActiveDetailPage(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        document.title = 'Tentang Kami - WisataBromo.co · PT Global Travel Healing';
        return;
      }
      if (hash.startsWith('#artikel-')) {
        const artId = hash.replace('#artikel-', '');
        setSelectedArticleId(artId);
        setIsArticlesPageOpen(true);
        setIsAboutPageOpen(false);
        setIsPicnicPageOpen(false);
        setActiveDetailPage(null);
        return;
      }
      if (hash === '#artikel' || hash === '#blog') {
        setSelectedArticleId(undefined);
        setIsArticlesPageOpen(true);
        setIsAboutPageOpen(false);
        setIsPicnicPageOpen(false);
        setActiveDetailPage(null);
        return;
      }
      if (hash.startsWith('#paket-')) {
        const pkgId = hash.replace('#paket-', '');
        const match = TOUR_PACKAGES.find((p) => p.id === pkgId);
        if (match) {
          setIsArticlesPageOpen(false);
          setIsAboutPageOpen(false);
          setIsPicnicPageOpen(false);
          setActiveDetailPage(match);
          return;
        }
      }
      if (hash === '' || hash === '#') {
        setActiveDetailPage(null);
        setIsArticlesPageOpen(false);
        setIsAboutPageOpen(false);
        setIsPicnicPageOpen(false);
      }
    };

    handleLocationChange();
    window.addEventListener('hashchange', handleLocationChange);
    window.addEventListener('popstate', handleLocationChange);
    return () => {
      window.removeEventListener('hashchange', handleLocationChange);
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  const handleOpenBooking = (pkgId?: string) => {
    setBookingInitialPackageId(pkgId || 'open-trip-malang');
    setBookingModalOpen(true);
  };

  const handleOpenPicnicPage = () => {
    setActiveDetailPage(null);
    setIsAboutPageOpen(false);
    setIsArticlesPageOpen(false);
    setIsPicnicPageOpen(true);
    if (window.location.pathname !== '/picnic') {
      window.history.pushState({}, '', '/picnic');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Bromo Picnic Experience (8 Pilihan Menu) - WisataBromo.co';
  };

  const handleBackFromPicnic = () => {
    setIsPicnicPageOpen(false);
    if (window.location.pathname === '/picnic') {
      window.history.pushState({}, '', '/');
    }
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'WisataBromo.co - Spesialis Paket Wisata & Sewa Jeep Bromo Resmi';
  };

  const handleSearchFromHero = (city: StartCity, category: TripCategory) => {
    setActiveDetailPage(null);
    setIsPicnicPageOpen(false);
    if (window.location.pathname === '/picnic') {
      window.history.pushState({}, '', '/');
    }
    window.location.hash = '';
    setSelectedCity(city);
    setSelectedCategory(category);
  };

  const handleSelectPackageFromSpotlight = (pkgId: string) => {
    const pkg = TOUR_PACKAGES.find((p) => p.id === pkgId);
    if (pkg) {
      setActiveDetailPage(pkg);
    }
  };

  const handleOpenPackageDetailPage = (pkg: TourPackage) => {
    setActiveDetailPage(pkg);
  };

  const handleBookFromCard = (pkg: TourPackage) => {
    setBookingInitialPackageId(pkg.id);
    setBookingModalOpen(true);
  };

  const handleProceedFromDetailModal = (pkg: TourPackage) => {
    setActivePackageModal(null);
    setBookingInitialPackageId(pkg.id);
    setBookingModalOpen(true);
  };

  const handleBackToHome = () => {
    setActiveDetailPage(null);
    setIsPicnicPageOpen(false);
    if (window.location.pathname === '/picnic') {
      window.history.pushState({}, '', '/');
    }
    window.location.hash = '';
    document.title = 'WisataBromo.co - Spesialis Paket Wisata & Sewa Jeep Bromo Resmi';
  };

  const scrollToPackages = () => {
    setActiveDetailPage(null);
    setIsArticlesPageOpen(false);
    setIsPicnicPageOpen(false);
    if (window.location.pathname === '/picnic') {
      window.history.pushState({}, '', '/');
    }
    window.location.hash = '';
    setTimeout(() => {
      const element = document.getElementById('paket-wisata');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  const handleOpenArticles = (articleId?: string) => {
    setActiveDetailPage(null);
    setIsAboutPageOpen(false);
    setIsPicnicPageOpen(false);
    setSelectedArticleId(articleId);
    setIsArticlesPageOpen(true);
    if (window.location.pathname === '/picnic') {
      window.history.pushState({}, '', '/');
    }
    window.location.hash = articleId ? `#artikel-${articleId}` : '#artikel';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Ensiklopedia & 20 Artikel Lengkap Wisata Bromo - WisataBromo.co';
  };

  const handleBackFromArticles = () => {
    setIsArticlesPageOpen(false);
    setSelectedArticleId(undefined);
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'WisataBromo.co - Spesialis Paket Wisata & Sewa Jeep Bromo Resmi';
  };

  const handleOpenAbout = () => {
    setActiveDetailPage(null);
    setIsArticlesPageOpen(false);
    setIsPicnicPageOpen(false);
    setIsAboutPageOpen(true);
    if (window.location.pathname === '/picnic') {
      window.history.pushState({}, '', '/');
    }
    window.location.hash = '#tentang-kami';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Tentang Kami - WisataBromo.co · PT Global Travel Healing';
  };

  const handleBackFromAbout = () => {
    setIsAboutPageOpen(false);
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'WisataBromo.co - Spesialis Paket Wisata & Sewa Jeep Bromo Resmi';
  };

  // Render Admin Portal if active
  if (isAdminOpen) {
    if (currentAdmin) {
      return (
        <AdminLayout
          admin={currentAdmin}
          onLogout={() => setCurrentAdmin(null)}
          onBackToWebsite={() => {
            window.location.hash = '';
            setIsAdminOpen(false);
          }}
        />
      );
    }
    return (
      <AdminLoginModal
        isOpen={true}
        onSuccess={(admin) => setCurrentAdmin(admin)}
        onBackToWebsite={() => {
          window.location.hash = '';
          setIsAdminOpen(false);
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-white text-[#111318] flex flex-col font-sans selection:bg-[#0996f5] selection:text-white w-full max-w-full overflow-x-hidden">
      {/* Top Live Operational & Meteorological Alert Bar */}
      <LiveTnbtsWeatherBar
        weather={weather}
        tnbtsStatus={tnbtsStatus}
        isLoadingWeather={isLoadingWeather}
        onRefreshWeather={handleRefreshWeather}
        onOpenDetails={() => setLiveStatusModalOpen(true)}
      />

      {/* Navigation Top Bar with Classified Menus */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onFilterCategory={(cat) => {
          setActiveDetailPage(null);
          setIsArticlesPageOpen(false);
          setIsAboutPageOpen(false);
          setIsPicnicPageOpen(false);
          if (window.location.pathname === '/picnic') {
            window.history.pushState({}, '', '/');
          }
          window.location.hash = '';
          setSelectedCategory(cat);
        }}
        onOpenLiveStatus={() => setLiveStatusModalOpen(true)}
        onOpenArticles={() => handleOpenArticles()}
        onOpenAbout={handleOpenAbout}
        onOpenPicnic={handleOpenPicnicPage}
        weather={weather}
      />

      <main className="flex-grow">
        {isAboutPageOpen ? (
          /* DEDICATED TENTANG KAMI (ABOUT US) PAGE VIEW */
          <TentangKamiPage
            onBackToHome={handleBackFromAbout}
            onOpenBooking={handleOpenBooking}
            onOpenArticles={handleOpenArticles}
          />
        ) : isArticlesPageOpen ? (
          /* DEDICATED BLOG & ARTICLES DIRECTORY / READER VIEW (20 ARTICLES) */
          <BlogDirectoryPage
            onBackToHome={handleBackFromArticles}
            onOpenBooking={handleOpenBooking}
            initialPostId={selectedArticleId}
          />
        ) : isPicnicPageOpen ? (
          /* DEDICATED PICNIC EXPERIENCE PAGE VIEW (/picnic) */
          <PicnicPage
            onBackToHome={handleBackFromPicnic}
            onOpenJeepBooking={() => handleOpenBooking()}
          />
        ) : activeDetailPage ? (
          /* DEDICATED PACKAGE DETAIL PAGE VIEW */
          <PackageDetailPage
            packageItem={activeDetailPage}
            onBackToHome={handleBackToHome}
            onBookNow={(pkg) => {
              setBookingInitialPackageId(pkg.id);
              setBookingModalOpen(true);
            }}
          />
        ) : (
          /* FULL HOMEPAGE LANDING VIEW */
          <>
            {/* 1. Hero Section & Panoramic Bromo Batok Semeru Header Slider */}
            <HeroSection
              onSearch={handleSearchFromHero}
              onOpenBooking={() => handleOpenBooking()}
              onExplorePackages={scrollToPackages}
              onOpenLiveStatus={() => setLiveStatusModalOpen(true)}
              weather={weather}
              tnbtsStatus={tnbtsStatus}
            />

            {/* 2. VIP Credentials & Ministry Documentation Video Carousel */}
            <VipTestimonialVideoSection />

            {/* 3. 10 Tour Packages Explorer with Real Photos & Categories */}
            <PackageExplorer
              packages={TOUR_PACKAGES}
              selectedCategory={selectedCategory}
              selectedCity={selectedCity}
              onSelectCategory={setSelectedCategory}
              onSelectCity={setSelectedCity}
              onViewDetails={handleOpenPackageDetailPage}
              onBookPackage={handleBookFromCard}
            />

            {/* 4. 6 Departure Points / Gates Guide */}
            <StartCityGuideSection
              onSelectCityFilter={(city) => {
                setActiveDetailPage(null);
                setIsArticlesPageOpen(false);
                setIsPicnicPageOpen(false);
                if (window.location.pathname === '/picnic') {
                  window.history.pushState({}, '', '/');
                }
                window.location.hash = '';
                setSelectedCity(city);
              }}
            />

            {/* 5. 8 Spots Elevation & Caldera Visual Guide */}
            <ElevationSpotGuide />

            {/* 6. SATU BANNER / HERO TEASER PICNIC EXPERIENCE (HOMEPAGE HANYA INI) */}
            <PicnicBanner
              onOpenPicnicPage={handleOpenPicnicPage}
            />

            {/* 7. Special Adventure Showcase (Trail Sukapura & Picnic Feature) */}
            <PicnicAndTrailSection
              packages={TOUR_PACKAGES}
              onSelectPackage={handleSelectPackageFromSpotlight}
              onOpenPicnic={handleOpenPicnicPage}
            />

            {/* 8. Cold Weather Tips & Packing Checklist (2°C - 10°C) */}
            <TipsAndPreparationSection />

            {/* 9. Tengger Culture, Kasada & Bromo Blog Articles (3-4 on Home, with Full Articles Column) */}
            <BromoCultureBlogSection
              onOpenAllArticles={() => handleOpenArticles()}
              onSelectArticle={(post) => handleOpenArticles(post.id)}
            />

            {/* 10. Destination Highlights, Testimonials, & FAQ */}
            <TestimonialsAndFaqSection />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Package Detail Modal Fallback */}
      <PackageDetailModal
        packageItem={activePackageModal}
        onClose={() => setActivePackageModal(null)}
        onProceedToBooking={handleProceedFromDetailModal}
      />

      {/* Interactive Booking Calculator & WhatsApp Generator Modal */}
      <BookingCalculatorModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        packages={TOUR_PACKAGES}
        initialPackageId={bookingInitialPackageId}
      />

      {/* Live Weather & Official TNBTS Operational Status Modal */}
      <LiveStatusModal
        isOpen={liveStatusModalOpen}
        onClose={() => setLiveStatusModalOpen(false)}
        weather={weather}
        isLoadingWeather={isLoadingWeather}
        onRefreshWeather={handleRefreshWeather}
      />

      {/* Progressive Web App Install Snackbar for Google Chrome */}
      <PWAInstallBanner />

      {/* Floating WhatsApp Quick Action Button */}
      <aside
        aria-label="Bantuan WhatsApp"
        className={`fixed z-40 flex items-center gap-2 right-5 transition-all ${
          activeDetailPage ? 'hidden md:flex bottom-5' : 'bottom-5'
        }`}
      >
        <a
          href="https://wa.me/6281222290318?text=Halo%20Admin%20WisataBromo.co,%20saya%20ingin%20tanya%20informasi%20paket%20trip%20ke%20Bromo."
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 bg-[#0996f5] hover:bg-[#0782d6] text-white px-4.5 py-3.5 rounded-full font-bold text-xs shadow-xl shadow-[#0996f5]/35 hover:scale-105 transition-all duration-200 cursor-pointer"
          title="Chat WhatsApp Admin WisataBromo.co (+62 812 2229 0318)"
        >
          <MessageCircle className="w-5 h-5 fill-white" />
          <span className="hidden sm:inline">Chat Admin (+62 812 2229 0318)</span>
        </a>
      </aside>
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <MainApp />
    </ErrorBoundary>
  );
}
