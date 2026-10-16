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
  excludes?: string[];
  highlights?: string[];
  meetingPoints?: string[];
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
  includeDrone?: boolean;
  isHighSeason?: boolean;
  wnaCount?: number;
  dayType?: 'weekday' | 'weekend';
  pickupAreaExtra?: string;
  openTripSurabayaRoute?: 'malang' | 'tosari';
  paymentMethod?: string;
  paymentProofName?: string;
  paymentProofPreview?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  date: string;
  author: string;
  tag: string;
  readTime: string;
  imageUrl: string;
  content: string;
}
