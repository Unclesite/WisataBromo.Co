import React from 'react';

export type HorseVectorType =
  | 'pony-mascot'
  | 'horse-route'
  | 'coin-piggy'
  | 'handshake-deal'
  | 'calendar-peak'
  | 'camera-pose'
  | 'safety-hat'
  | 'wallet-cash'
  | 'tip-star';

interface HorseVectorProps {
  type: HorseVectorType;
  className?: string;
}

export const HorseCuteVector: React.FC<HorseVectorProps> = ({
  type,
  className = 'w-14 h-14',
}) => {
  switch (type) {
    case 'pony-mascot':
      return (
        <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
          <circle cx="32" cy="32" r="30" fill="#E6F5FF" stroke="#0996F5" strokeWidth="2" />
          {/* Cute ears */}
          <path d="M19 22L15 11C18 11 23 14 25 18Z" fill="#C68642" stroke="#5C3A21" strokeWidth="2" strokeLinejoin="round" />
          <path d="M45 22L49 11C46 11 41 14 39 18Z" fill="#C68642" stroke="#5C3A21" strokeWidth="2" strokeLinejoin="round" />
          <path d="M18.5 19L16.8 13.5C19 14 21.5 15.8 22.8 18Z" fill="#FFB6C1" />
          <path d="M45.5 19L47.2 13.5C45 14 42.5 15.8 41.2 18Z" fill="#FFB6C1" />
          {/* Fluffy mane */}
          <path d="M24 17C26 11 33 10 37 14C40 12 43 15 41 19C36 18 28 18 24 17Z" fill="#6F4222" stroke="#5C3A21" strokeWidth="1.8" strokeLinejoin="round" />
          {/* Pony head */}
          <rect x="18" y="18" width="28" height="28" rx="13" fill="#D99B58" stroke="#5C3A21" strokeWidth="2" />
          {/* Cute muzzle */}
          <ellipse cx="32" cy="38" rx="12" ry="8.5" fill="#FCE3C6" stroke="#5C3A21" strokeWidth="1.8" />
          {/* Eyes with kawaii shine */}
          <circle cx="25" cy="27.5" r="2.7" fill="#2A1B12" />
          <circle cx="24.2" cy="26.6" r="1" fill="#FFFFFF" />
          <circle cx="39" cy="27.5" r="2.7" fill="#2A1B12" />
          <circle cx="38.2" cy="26.6" r="1" fill="#FFFFFF" />
          {/* Rosy cheeks */}
          <ellipse cx="21" cy="32.5" rx="2.6" ry="1.6" fill="#FF8FA3" opacity="0.8" />
          <ellipse cx="43" cy="32.5" rx="2.6" ry="1.6" fill="#FF8FA3" opacity="0.8" />
          {/* Nostrils & happy smile */}
          <circle cx="28" cy="36" r="1.2" fill="#5C3A21" />
          <circle cx="36" cy="36" r="1.2" fill="#5C3A21" />
          <path d="M28.5 40.5C30 42.5 34 42.5 35.5 40.5" stroke="#5C3A21" strokeWidth="1.8" strokeLinecap="round" />
          {/* Cute Bromo bandana */}
          <path d="M21 46L32 55L43 46C39 48 25 48 21 46Z" fill="#0996F5" stroke="#102A56" strokeWidth="1.8" strokeLinejoin="round" />
          <circle cx="32" cy="50" r="1.6" fill="#FFF700" />
          {/* Sparkle */}
          <path d="M53 16L54.2 19L57 20L54.2 21L53 24L51.8 21L49 20L51.8 19L53 16Z" fill="#FFF700" stroke="#D97706" strokeWidth="0.8" />
        </svg>
      );

    case 'horse-route':
      return (
        <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
          <rect x="3" y="3" width="58" height="58" rx="18" fill="#E6F5FF" stroke="#0996F5" strokeWidth="2" />
          {/* Cute miniature Bromo crater in background */}
          <path d="M10 40L22 20H32L44 40H10Z" fill="#7C98B3" stroke="#102A56" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M22 20L27 23L32 20" stroke="#102A56" strokeWidth="1.8" strokeLinecap="round" />
          {/* Cute puff cloud */}
          <path d="M23 14C23 11.8 25 10.5 27 11.2C28.2 9.5 31.2 10 31.6 12C33.4 12.2 34 14.8 32 15.6H24.2C23.3 15.6 23 14.8 23 14Z" fill="#FFFFFF" stroke="#0996F5" strokeWidth="1.4" />
          {/* Dotted sand path */}
          <path d="M12 50C22 44 38 49 52 44" stroke="#D97706" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="3 4" />
          {/* Cute tiny trotting horse */}
          <ellipse cx="42" cy="39" rx="9" ry="6" fill="#C68642" stroke="#5C3A21" strokeWidth="1.8" />
          {/* Legs */}
          <path d="M36 44L34 50M40 44.5L40 50.5M45 44.5L46 50.5M48 43.5L51 49" stroke="#5C3A21" strokeWidth="2" strokeLinecap="round" />
          {/* Tail */}
          <path d="M33 38C29.5 37.5 28 40.5 29.5 43" stroke="#5C3A21" strokeWidth="2.2" strokeLinecap="round" />
          {/* Cute head & neck */}
          <path d="M47 35L51 27C53 26.5 55.5 28.5 55 31.5L51 35" fill="#D99B58" stroke="#5C3A21" strokeWidth="1.8" strokeLinejoin="round" />
          {/* Saddle */}
          <path d="M38 34C40 36.5 44 36.5 46 34" fill="#FFF700" stroke="#102A56" strokeWidth="1.5" strokeLinecap="round" />
          {/* Eye */}
          <circle cx="51.5" cy="29.5" r="1.2" fill="#2A1B12" />
          {/* Pin marker */}
          <circle cx="15" cy="48" r="3" fill="#0996F5" stroke="#FFFFFF" strokeWidth="1.5" />
        </svg>
      );

    case 'coin-piggy':
      return (
        <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
          <rect x="3" y="3" width="58" height="58" rx="18" fill="#FEFCE8" stroke="#F59E0B" strokeWidth="2" />
          {/* Cute coin pouch */}
          <path d="M24 19L20 12C24 11 28 13 32 13C36 13 40 11 44 12L40 19H24Z" fill="#FCD34D" stroke="#92400E" strokeWidth="2" strokeLinejoin="round" />
          <path d="M22 21C15 26 13 38 16 46C18.5 51.5 25 53 32 53C39 53 45.5 51.5 48 46C51 38 49 26 42 21H22Z" fill="#FDE047" stroke="#92400E" strokeWidth="2" />
          {/* Ribbon tie */}
          <rect x="22" y="18" width="20" height="4.5" rx="2.2" fill="#0996F5" stroke="#102A56" strokeWidth="1.6" />
          {/* Cute smiling face on pouch */}
          <circle cx="26" cy="34" r="2.1" fill="#5C3A21" />
          <circle cx="25.4" cy="33.3" r="0.7" fill="#FFFFFF" />
          <circle cx="38" cy="34" r="2.1" fill="#5C3A21" />
          <circle cx="37.4" cy="33.3" r="0.7" fill="#FFFFFF" />
          <ellipse cx="22.5" cy="37.5" rx="2.2" ry="1.3" fill="#FB7185" opacity="0.75" />
          <ellipse cx="41.5" cy="37.5" rx="2.2" ry="1.3" fill="#FB7185" opacity="0.75" />
          <path d="M29.5 37.5C30.8 39.2 33.2 39.2 34.5 37.5" stroke="#5C3A21" strokeWidth="1.8" strokeLinecap="round" />
          {/* Floating Rp badge */}
          <circle cx="48" cy="46" r="8.5" fill="#10B981" stroke="#065F46" strokeWidth="1.8" />
          <text x="48" y="49.5" textAnchor="middle" fontSize="8.5" fontWeight="900" fill="#FFFFFF" fontFamily="sans-serif">Rp</text>
          {/* Cute sparkle */}
          <path d="M13 18L14.2 21L17 22L14.2 23L13 26L11.8 23L9 22L11.8 21L13 18Z" fill="#0996F5" />
        </svg>
      );

    case 'handshake-deal':
      return (
        <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
          <rect x="3" y="3" width="58" height="58" rx="18" fill="#ECFDF5" stroke="#10B981" strokeWidth="2" />
          {/* Cute speech bubble with heart */}
          <path d="M20 12H44C47.3 12 50 14.7 50 18V27C50 30.3 47.3 33 44 33H36L32 37.5L28 33H20C16.7 33 14 30.3 14 27V18C14 14.7 16.7 12 20 12Z" fill="#FFFFFF" stroke="#059669" strokeWidth="2" strokeLinejoin="round" />
          {/* Happy deal text / smiling check */}
          <path d="M27 22.5C27 20.5 29.5 19.8 31 21.5C32.5 19.8 35 20.5 35 22.5C35 25 31 27.5 31 27.5C31 27.5 27 25 27 22.5Z" fill="#FB7185" stroke="#E11D48" strokeWidth="1.2" />
          <circle cx="21" cy="22.5" r="1.5" fill="#059669" />
          <circle cx="43" cy="22.5" r="1.5" fill="#059669" />
          {/* Two cute hands shaking */}
          <path d="M12 43L21 37L29 41L37 37L52 43" stroke="#102A56" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="21" y="39" width="22" height="11" rx="5.5" fill="#FDE68A" stroke="#92400E" strokeWidth="2" />
          <path d="M28 43V47M32 43V47M36 43V47" stroke="#92400E" strokeWidth="1.8" strokeLinecap="round" />
          {/* Cute sleeves */}
          <rect x="9" y="39" width="12" height="10" rx="3" fill="#0996F5" stroke="#102A56" strokeWidth="1.8" />
          <rect x="43" y="39" width="12" height="10" rx="3" fill="#F59E0B" stroke="#92400E" strokeWidth="1.8" />
        </svg>
      );

    case 'calendar-peak':
      return (
        <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
          <rect x="3" y="3" width="58" height="58" rx="18" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="2" />
          {/* Calendar base */}
          <rect x="13" y="16" width="38" height="35" rx="8" fill="#FFFFFF" stroke="#1E3A8A" strokeWidth="2" />
          <path d="M13 24C13 19.6 16.6 16 21 16H43C47.4 16 51 19.6 51 24V27H13V24Z" fill="#0996F5" stroke="#1E3A8A" strokeWidth="2" />
          {/* Rings */}
          <rect x="21" y="11" width="4" height="9" rx="2" fill="#FFF700" stroke="#1E3A8A" strokeWidth="1.6" />
          <rect x="39" y="11" width="4" height="9" rx="2" fill="#FFF700" stroke="#1E3A8A" strokeWidth="1.6" />
          {/* Cute smiling sun sticker inside calendar */}
          <circle cx="32" cy="39" r="7.5" fill="#FDE047" stroke="#D97706" strokeWidth="1.8" />
          <circle cx="29.5" cy="38" r="1.2" fill="#78350F" />
          <circle cx="34.5" cy="38" r="1.2" fill="#78350F" />
          <path d="M30 41.2C31 42.4 33 42.4 34 41.2" stroke="#78350F" strokeWidth="1.4" strokeLinecap="round" />
          <ellipse cx="27.5" cy="40" rx="1.2" ry="0.7" fill="#FB7185" />
          <ellipse cx="36.5" cy="40" rx="1.2" ry="0.7" fill="#FB7185" />
          {/* Sun rays */}
          <path d="M32 29V30.5M32 47.5V49M22 39H23.5M40.5 39H42" stroke="#F59E0B" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );

    case 'camera-pose':
      return (
        <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
          <rect x="3" y="3" width="58" height="58" rx="18" fill="#FDF2F8" stroke="#EC4899" strokeWidth="2" />
          {/* Camera top hump */}
          <path d="M23 19L26 14H38L41 19H23Z" fill="#0996F5" stroke="#102A56" strokeWidth="2" strokeLinejoin="round" />
          {/* Shutter button */}
          <rect x="17" y="16" width="5" height="3" rx="1.5" fill="#FFF700" stroke="#102A56" strokeWidth="1.5" />
          {/* Camera body */}
          <rect x="11" y="19" width="42" height="30" rx="9" fill="#FFFFFF" stroke="#102A56" strokeWidth="2" />
          <rect x="11" y="29" width="42" height="10" fill="#E6F5FF" />
          {/* Cute lens */}
          <circle cx="32" cy="34" r="10" fill="#0996F5" stroke="#102A56" strokeWidth="2" />
          <circle cx="32" cy="34" r="6" fill="#102A56" />
          {/* Kawaii eye sparkle inside lens */}
          <circle cx="29.8" cy="31.8" r="2.1" fill="#FFFFFF" />
          <circle cx="34.5" cy="36.2" r="1.1" fill="#67E8F9" />
          {/* Flash dot */}
          <circle cx="45" cy="24.5" r="2.2" fill="#FFF700" stroke="#D97706" strokeWidth="1.2" />
          {/* Floating cute heart */}
          <path d="M49 12C49 10.6 50.8 10 51.8 11.2C52.8 10 54.6 10.6 54.6 12C54.6 13.8 51.8 15.5 51.8 15.5C51.8 15.5 49 13.8 49 12Z" fill="#F43F5E" />
        </svg>
      );

    case 'safety-hat':
      return (
        <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
          <rect x="3" y="3" width="58" height="58" rx="18" fill="#FFF7ED" stroke="#EA580C" strokeWidth="2" />
          {/* Cute cowboy hat */}
          <path d="M18 35C18 22 23 16 27 17C29.5 17.5 30.5 20 32 20C33.5 20 34.5 17.5 37 17C41 16 46 22 46 35H18Z" fill="#D97706" stroke="#78350F" strokeWidth="2" strokeLinejoin="round" />
          {/* Hat band */}
          <path d="M18.5 31H45.5V35H18.5V31Z" fill="#0996F5" stroke="#102A56" strokeWidth="1.5" />
          {/* Star emblem on hat */}
          <path d="M32 28.5L33.2 31.3L36 31.6L33.8 33.4L34.5 36.2L32 34.7L29.5 36.2L30.2 33.4L28 31.6L30.8 31.3L32 28.5Z" fill="#FFF700" stroke="#78350F" strokeWidth="1" />
          {/* Hat brim */}
          <path d="M9 36C12 42 22 44 32 44C42 44 52 42 55 36C51 34 45 35 32 35C19 35 13 34 9 36Z" fill="#F59E0B" stroke="#78350F" strokeWidth="2" strokeLinejoin="round" />
          {/* Cute safety check badge */}
          <circle cx="48" cy="48" r="8" fill="#10B981" stroke="#065F46" strokeWidth="1.8" />
          <path d="M44.5 48L47 50.5L51.8 45.5" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'wallet-cash':
      return (
        <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
          <rect x="3" y="3" width="58" height="58" rx="18" fill="#ECFDF5" stroke="#059669" strokeWidth="2" />
          {/* Banknotes peeking out */}
          <rect x="17" y="13" width="28" height="15" rx="3" transform="rotate(-6 17 13)" fill="#34D399" stroke="#065F46" strokeWidth="1.8" />
          <rect x="22" y="16" width="26" height="14" rx="3" transform="rotate(4 22 16)" fill="#6EE7B7" stroke="#065F46" strokeWidth="1.8" />
          {/* Cute smiling wallet body */}
          <rect x="12" y="24" width="38" height="26" rx="7" fill="#C68642" stroke="#5C3A21" strokeWidth="2" />
          {/* Wallet clasp */}
          <rect x="38" y="32" width="14" height="10" rx="4" fill="#FDE047" stroke="#5C3A21" strokeWidth="1.8" />
          <circle cx="44" cy="37" r="2" fill="#5C3A21" />
          {/* Kawaii face on wallet */}
          <circle cx="22" cy="35" r="2" fill="#2A1B12" />
          <circle cx="21.4" cy="34.4" r="0.7" fill="#FFFFFF" />
          <circle cx="31" cy="35" r="2" fill="#2A1B12" />
          <circle cx="30.4" cy="34.4" r="0.7" fill="#FFFFFF" />
          <ellipse cx="19" cy="38.5" rx="2" ry="1.1" fill="#FDA4AF" />
          <ellipse cx="34" cy="38.5" rx="2" ry="1.1" fill="#FDA4AF" />
          <path d="M24.5 39C25.5 40.5 27.5 40.5 28.5 39" stroke="#2A1B12" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );

    case 'tip-star':
    default:
      return (
        <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
          <circle cx="32" cy="32" r="30" fill="#FEFCE8" stroke="#EAB308" strokeWidth="2" />
          {/* Cute lucky horseshoe */}
          <path
            d="M20 20V34C20 41.2 25.4 47 32 47C38.6 47 44 41.2 44 34V20"
            stroke="#0996F5"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <path
            d="M20 20V34C20 41.2 25.4 47 32 47C38.6 47 44 41.2 44 34V20"
            stroke="#102A56"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="1 7"
          />
          {/* Cute yellow star above */}
          <path d="M32 10L34.3 15.3L40 16L35.7 19.7L37 25.3L32 22.3L27 25.3L28.3 19.7L24 16L29.7 15.3L32 10Z" fill="#FFF700" stroke="#B45309" strokeWidth="1.6" strokeLinejoin="round" />
        </svg>
      );
  }
};
