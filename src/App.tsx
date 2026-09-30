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
import { TipsAndPreparationSection } from './components/TipsAndPreparationSection';
import { BromoCultureBlogSection } from './components/BromoCultureBlogSection';
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

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<TripCategory>('all');
  const [selectedCity, setSelectedCity] = useState<StartCity>('all');
  
  // Dedicated Page View State
  const [activeDetailPage, setActiveDetailPage] = useState<TourPackage | null>(null);
  const [activePackageModal, setActivePackageModal] = useState<TourPackage | null>(null);
  
  // Booking Modal State
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingInitialPackageId, setBookingInitialPackageId] = useState<string | undefined>(undefined);

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

  // Sync hash routing on initial load and hashchange
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#paket-')) {
        const pkgId = hash.replace('#paket-', '');
        const match = TOUR_PACKAGES.find((p) => p.id === pkgId);
        if (match) {
          setActiveDetailPage(match);
          return;
        }
      }
      if (hash === '' || hash === '#') {
        setActiveDetailPage(null);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleOpenBooking = (pkgId?: string) => {
    setBookingInitialPackageId(pkgId || 'open-trip-malang');
    setBookingModalOpen(true);
  };

  const handleSearchFromHero = (city: StartCity, category: TripCategory) => {
    setActiveDetailPage(null);
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
    window.location.hash = '';
    document.title = 'WisataBromo.co - Spesialis Paket Wisata & Sewa Jeep Bromo Resmi';
  };

  const scrollToPackages = () => {
    setActiveDetailPage(null);
    window.location.hash = '';
    setTimeout(() => {
      const element = document.getElementById('paket-wisata');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <div className="min-h-screen bg-white text-[#111318] flex flex-col font-sans selection:bg-[#3d72fe] selection:text-white w-full max-w-full overflow-x-hidden">
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
          window.location.hash = '';
          setSelectedCategory(cat);
        }}
        onOpenLiveStatus={() => setLiveStatusModalOpen(true)}
        weather={weather}
      />

      <main className="flex-grow">
        {activeDetailPage ? (
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
                window.location.hash = '';
                setSelectedCity(city);
              }}
            />

            {/* 5. 8 Spots Elevation & Caldera Visual Guide */}
            <ElevationSpotGuide />

            {/* 6. Picnic & Dirt Bike Trail Specialty Showcase */}
            <PicnicAndTrailSection
              packages={TOUR_PACKAGES}
              onSelectPackage={handleSelectPackageFromSpotlight}
            />

            {/* 7. Cold Weather Tips & Packing Checklist (2°C - 10°C) */}
            <TipsAndPreparationSection />

            {/* 8. Tengger Culture, Kasada & Bromo Blog Articles */}
            <BromoCultureBlogSection />

            {/* 9. Destination Highlights, Testimonials, & FAQ */}
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
          className="group flex items-center gap-2.5 bg-[#3d72fe] hover:bg-[#2b5ae0] text-white px-4.5 py-3.5 rounded-full font-bold text-xs shadow-xl shadow-[#3d72fe]/35 hover:scale-105 transition-all duration-200 cursor-pointer"
          title="Chat WhatsApp Admin WisataBromo.co (+62 812 2229 0318)"
        >
          <MessageCircle className="w-5 h-5 fill-white" />
          <span className="hidden sm:inline">Chat Admin (+62 812 2229 0318)</span>
        </a>
      </aside>
    </div>
  );
}
