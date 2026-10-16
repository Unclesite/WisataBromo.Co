export type TripCategory = 'all' | 'open_trip' | 'private_trip' | 'long_jeep' | 'picnic' | 'trail' | 'custom';

export type StartCity = 'all' | 'malang' | 'batu' | 'surabaya' | 'sukapura' | 'tosari' | 'gubugklakah';

export interface PackageItineraryItem {
  time: string;
  activity: string;
  description: string;
}

export interface TourPackage {
  id: string;
  title: string;
  subtitle: string;
  category: TripCategory;
  startCity: StartCity;
  price: number;
  priceWithDoc?: number;
  priceUnit: string;
  duration: string;
  minPax: number;
  maxPax: number;
  description: string;
  startLocationName: string;
  departureTime: string;
  imageUrl: string;
  rating: number;
  reviewsCount: number;
  badge?: string;
  destinations: string[];
  includes: string[];
  inclusions?: string[];
  excludes?: string[];
  exclusions?: string[];
  highlights?: string[];
  meetingPoints?: string[];
  meetingPoint?: string;
  recommendedFor?: string;
  pricingTiers?: any;
  mapUrl?: string;
  wnaChargePerPax?: number;
  tips?: string[];
  itinerary?: PackageItineraryItem[];
}

export interface BookingFormState {
  packageId: string;
  startCity: StartCity;
  travelDate: string;
  paxCount: number;
  fullName: string;
  whatsappNumber: string;
  email: string;
  pickupAddress: string;
  specialNotes?: string;
  includeDocumentation?: boolean;
  photographerCount?: number;
  includeDrone?: boolean;
  isHighSeason?: boolean;
  wnaCount?: number;
  dayType?: 'weekday' | 'weekend' | 'highseason';
  pickupAreaExtra?: string;
  openTripSurabayaRoute?: 'malang' | 'tosari';
  paymentMethod?: string;
  paymentProofName?: string;
  paymentProofPreview?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  subtitle?: string;
  summary: string;
  excerpt?: string;
  date: string;
  publishDate?: string;
  author: string;
  tag: string;
  tags?: string[];
  category?: string;
  categoryLabel?: string;
  readTime: string;
  imageUrl: string;
  content: string | string[];
  keyTakeaways?: string[];
  ratesTable?: Array<any>;
  galleryImages?: Array<any>;
  footnotes?: string[];
  references?: string[];
}

export type BlogCategory = 'all' | 'tips_wisata' | 'budaya_tengger' | 'sejarah_spiritual' | 'destinasi_alam' | 'transportasi' | string;

export interface DestinationSpot {
  id: string;
  name: string;
  elevation: string;
  bestTime: string;
  speciality: string;
  description: string;
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

