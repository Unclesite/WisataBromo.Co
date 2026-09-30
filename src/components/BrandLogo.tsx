import React from 'react';

interface BrandLogoProps {
  variant?: 'light' | 'dark' | 'monochrome' | 'blue-white';
  className?: string;
  alt?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'light',
  className = 'h-11 sm:h-14 w-auto',
  alt = 'WisataBromo.co',
}) => {
  // Menggunakan file gambar PNG asli berlatar transparan (bukan vektor, tanpa render ulang font teks)
  // - Navbar terang: /images/logo-wisatabromo.png (Gunung Biru + Teks Hitam Pekat)
  // - Footer gelap: /images/logo-wisatabromo-white.png (Versi Putih Bersih)
  const isDarkBg = variant === 'dark' || variant === 'blue-white' || variant === 'monochrome';
  const logoSrc = isDarkBg
    ? '/images/logo-wisatabromo-white.png'
    : '/images/logo-wisatabromo.png';

  return (
    <img
      src={logoSrc}
      alt={alt}
      className={`shrink-0 object-contain select-none transition-transform hover:scale-102 ${className}`}
      loading="eager"
      decoding="async"
    />
  );
};
