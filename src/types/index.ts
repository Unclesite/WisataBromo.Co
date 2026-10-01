export type TripCategory = 'all' | 'open_trip' | 'private_trip' | 'long_jeep' | 'picnic' | 'trail';

export type StartCity = 'all' | 'malang' | 'batu' | 'surabaya' | 'gubugklakah' | 'sukapura' | 'tosari';

export interface PackageItineraryItem {
  time: string;
  activity: string;
  description: string;
}

export interface PricingTier {
  pax: number;
  pricePerPax: number;
}

export interface TourPackage {
  id: string;
  shortcode: string;
  title: string;
  subtitle: string;
  category: 'open_trip' | 'private_trip' | 'long_jeep' | 'picnic' | 'trail';
  startCity: 'malang' | 'batu' | 'surabaya' | 'gubugklakah' | 'sukapura' | 'tosari';
  startLocationName: string;
  price: number; // base price (without doc or base tier)
  priceWithDoc?: number; // if documentation is add-on or option
  priceUnit: string; // e.g. "/ orang" or "/ rombongan (1-6 pax)"
  duration: string;
  badge?: string;
  rating: number;
  reviewsCount: number;
  minPax: number;
  maxPax: number;
  meetingPoint: string;
  departureTime: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: PackageItineraryItem[];
  themeGradient: string;
  recommendedFor: string;
  mapUrl?: string;
  docPriceAddon?: number;
  highSeasonAddon?: number;
  wnaChargePerPax?: number;
  droneAddonPrice?: number; // Add-on include drone video 4K (+Rp 1.500.000)
  pricingTiers?: PricingTier[];
  imageUrl?: string;
}

export type BlogCategory = 
  | 'all' 
  | 'budaya_tengger' 
  | 'tips_wisata' 
  | 'spot_sunrise' 
  | 'panduan_lengkap' 
  | 'sejarah_spiritual' 
  | 'pengalaman_bromo' 
  | 'destinasi_alam'
  | 'transportasi'
  | 'liputan_resmi';

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  category: BlogCategory;
  categoryLabel: string;
  readTime: string;
  publishDate: string;
  author: string;
  excerpt: string;
  content: string[];
  keyTakeaways: string[];
  tags: string[];
  footnotes?: string[];
  references?: string[];
  ratesTable?: { item: string; price: string; note: string }[];
  imageUrl?: string;
  galleryImages?: { url: string; caption: string; alt: string }[];
}

export interface DestinationSpot {
  id: string;
  name: string;
  elevation: string;
  bestTime: string;
  description: string;
  speciality: string;
  iconName: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  city: string;
  tripTaken: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export interface BookingFormState {
  packageId: string;
  startCity: string;
  travelDate: string;
  paxCount: number;
  fullName: string;
  whatsappNumber: string;
  email: string;
  pickupAddress: string;
  specialNotes: string;
  includeDocumentation: boolean;
  includeDrone?: boolean; // Add-on drone video 4K (+Rp 1.500.000) for private trip
  isHighSeason: boolean;
  wnaCount: number;
  dayType?: 'weekday' | 'weekend' | 'highseason'; // for long jeep
  pickupAreaExtra?: 'none' | 'malang' | 'batu'; // for long jeep
  openTripSurabayaRoute?: 'tosari' | 'malang'; // for open trip surabaya
  paymentMethod: 'bca' | 'dana' | 'ovo';
  paymentProofName?: string;
  paymentProofPreview?: string;
}
