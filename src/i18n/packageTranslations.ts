import { TourPackage, PackageItineraryItem } from '../types';
import { SupportedLanguage } from './LanguageContext';

export interface LocalizedPackageData {
  title: string;
  subtitle: string;
  badge?: string;
  duration: string;
  departureTime: string;
  startLocationName: string;
  priceUnit: string;
  description: string;
  destinations: string[];
  includes: string[];
  excludes: string[];
  highlights: string[];
  meetingPoint: string;
  meetingPoints: string[];
  tips: string[];
  itinerary: PackageItineraryItem[];
  recommendedFor?: string;
}

export const PACKAGE_FULL_TRANSLATIONS: Record<'en' | 'zh', Record<string, LocalizedPackageData>> = {
  en: {
    'open-trip-malang': {
      title: 'Open Trip Sunrise Bromo from Malang / Batu',
      subtitle: 'Most popular daily budget sharing trip with 4x4 Toyota Jeep. 1 person guaranteed to depart without minimum quota.',
      badge: '1 Pax Guaranteed Departure',
      duration: '1 Day (Midnight Tour)',
      departureTime: '23:00 - 01:00 WIB',
      startLocationName: 'Malang & Batu City',
      priceUnit: '/ person',
      description: 'The top-rated affordable daily sharing expedition to Bromo crater & sunrise viewpoints. Free hotel or train station pickup in Malang and Batu.',
      destinations: [
        'Golden Sunrise Point (King Kong Hill / Penanjakan / Love Hill / Prau Hill)',
        'Widodaren Valley, Mount Batok Crater, Poten Temple, Whispering Sands, Teletubbies Green Savanna'
      ],
      includes: [
        'Round-trip AC Shuttle Car pickup & drop-off in Malang / Batu area',
        'Professional, licensed & friendly local driver',
        'Fuel for shuttle vehicle & 4x4 Jeep round trip',
        'Official 4x4 Toyota Land Cruiser FJ40 Jeep in Bromo caldera',
        'Official TNBTS National Park Entrance Ticket & Insurance',
        'Regional environmental levies & authorized parking fees',
        'DSLR/Mirrorless Photo Documentation (for photo documentation package)'
      ],
      excludes: [
        'Horse riding in Bromo caldera (optional, walking is accessible)',
        'Personal meals & beverages (available at local mountain warungs)',
        'Paid public restroom facilities in Bromo',
        'TNBTS International Visitor Ticket Surcharge (IDR 255,000 / person)',
        'Personal medication & expenses'
      ],
      highlights: [
        '1 Person Guaranteed Daily Departure with No Minimum Quota',
        'Free door-to-door pickup across Malang & Batu City',
        'Complete tour covering all 5 iconic Bromo caldera landmarks',
        'High Season (Dec 18, 2026 - Jan 5, 2027): +IDR 50,000 / person'
      ],
      meetingPoint: 'Door-to-door pickup at hotels, villas, train stations, or airport in Malang & Batu',
      meetingPoints: [
        'Malang Kotabaru & Malang Kota Lama Railway Stations',
        'Hotels, Villas, and Residences in Malang City Area',
        'Hotels, Villas, and Mountain Resorts in Batu Tourism City',
        'Abdulrachman Saleh Airport (MLG) & Arjosari Bus Terminal'
      ],
      tips: [
        'Wear thick windbreaker jackets, beanies, and warm gloves (2°C - 8°C dawn cold)',
        'Bring a face mask/buff against fine caldera sand',
        'Bring cash for public restrooms and hot mountain snacks'
      ],
      itinerary: [
        { time: '23:00 - 01:30', activity: 'Pickup in Malang / Batu', description: 'Driver picks you up at your hotel, station, or residence in Malang or Batu.' },
        { time: '02:00 - 03:00', activity: '4x4 Jeep to Sunrise Point', description: 'Transfer to 4x4 Toyota Jeep and ascend the mountain to the sunrise vantage point.' },
        { time: '03:30 - 06:00', activity: 'Spectacular Golden Sunrise', description: 'Witness the world-famous sea of clouds and golden sunrise over Bromo caldera.' },
        { time: '06:00 - 09:30', activity: 'Caldera Wonders Exploration', description: 'Explore Widodaren Cliff, climb Bromo Crater rim, visit Poten Temple, Whispering Sands, and Teletubbies Savanna.' },
        { time: '10:00 - 11:00', activity: 'Return to Basecamp', description: 'Head back to the transit basecamp for a short rest.' },
        { time: '11:00 - 13:00', activity: 'Drop-off in Malang / Batu', description: 'Comfortable transfer back to your hotel, station, or chosen drop-off location.' }
      ],
      recommendedFor: 'Solo travelers, couples, backpackers, and small groups seeking a hassle-free, affordable sunrise trip.'
    },
    'open-trip-surabaya': {
      title: 'Open Trip Sunrise Bromo from Surabaya',
      subtitle: 'Convenient daily sharing tour from Surabaya & Sidoarjo with AC shuttle and 4x4 Jeep. 1 person guaranteed, photo documentation included!',
      badge: 'All-In & Documented',
      duration: '1 Day (Midnight Tour)',
      departureTime: '22:00 - 23:00 WIB',
      startLocationName: 'Surabaya Raya & Sidoarjo',
      priceUnit: '/ person (Include Doc)',
      description: 'Daily sharing trip from Surabaya & Sidoarjo. 1 person guaranteed to join! Includes professional DSLR/Mirrorless photo documentation, fuel, and highway tolls.',
      destinations: [
        'Golden Sunrise Point (Penanjakan / King Kong / Love Hill / Prau Hill)',
        'Widodaren Valley, Mount Batok Crater, Poten Temple, Whispering Sands, Teletubbies Savanna'
      ],
      includes: [
        'Prime AC Shuttle (Innova / Hiace / Elf / Coach) Surabaya - Bromo round trip',
        'Professional, licensed & friendly driver',
        'Fuel and Trans-Java Expressway Toll fees round trip',
        'Toyota Land Cruiser FJ40 4x4 Jeep in Bromo caldera',
        'Official TNBTS National Park Entrance Ticket & Insurance',
        'Regional environmental levies & authorized parking fees',
        'Professional DSLR/Mirrorless Photo Documentation Included!'
      ],
      excludes: [
        'Horse riding in Bromo caldera (optional, walking is accessible)',
        'Personal meals & beverages',
        'Paid public restroom facilities in Bromo',
        'TNBTS International Visitor Ticket Surcharge (IDR 255,000 / person)',
        'Personal medication & expenses'
      ],
      highlights: [
        'Direct connection from Surabaya with expressway toll included',
        '1 Person guaranteed departure on weekend routes',
        'Professional photo documentation included in every booking',
        'Complete caldera tour covering 5 prime locations'
      ],
      meetingPoint: 'Surabaya Pasar Turi Station & Bungurasih Terminal (Weekend) / Flexible City Pickup (Daily)',
      meetingPoints: [
        'Surabaya Pasar Turi & Gubeng Railway Stations',
        'Purabaya Bungurasih Bus Terminal',
        'Juanda International Airport Surabaya (SUB)',
        'Hotels & Apartments across Surabaya & Sidoarjo'
      ],
      tips: [
        'Bring a warm thermal jacket suitable for 5°C - 10°C sunrise conditions',
        'Wear comfortable sneakers or trekking shoes for caldera walking'
      ],
      itinerary: [
        { time: '22:00 - 23:00', activity: 'Surabaya Pickup', description: 'AC shuttle car picks up guests at designated meeting points across Surabaya.' },
        { time: '02:00 - 03:00', activity: 'Transfer to 4x4 Jeep', description: 'Switch to 4x4 Toyota Jeep at the official mountain transit basecamp.' },
        { time: '03:30 - 06:00', activity: 'Golden Sunrise Point', description: 'Marvel at the golden dawn over Mount Bromo with professional photo sessions.' },
        { time: '06:00 - 09:30', activity: 'Explore 5 Caldera Highlights', description: 'Visit Widodaren, Bromo crater rim, Poten temple, whispering sand, and Teletubbies savanna.' },
        { time: '10:30 - 11:30', activity: 'Return to Transit Area', description: 'Scenic drive back to the shuttle rest area.' },
        { time: '11:30 - 14:00', activity: 'Expressway Return to Surabaya', description: 'Smooth highway journey back and drop-off at your Surabaya location.' }
      ],
      recommendedFor: 'Travelers arriving in Surabaya, international guests, and weekend holidaymakers.'
    },
    'private-jeep-wonokitri': {
      title: 'Private Jeep 4x4 Bromo from Tosari Pasuruan',
      subtitle: 'Exclusive 4x4 Jeep rental departing from Tosari Pasuruan Basecamp or Hotel. Fastest 35-min access to King of Sunrise Penanjakan 1.',
      badge: 'Basecamp Tosari',
      duration: '1 Day (8 Hours)',
      departureTime: '03:00 Dawn / 11:00 Noon',
      startLocationName: 'Tosari Pasuruan (Basecamp Jeep)',
      priceUnit: '/ jeep (max 6 pax)',
      description: 'Charter 1 exclusive Toyota Land Cruiser FJ40 Jeep without sharing with strangers. Daily departures: Sunrise trip starts 03:00 AM or Panorama trip starts 11:00 AM. Capacity: up to 6 guests without doc or 5 guests with photo/video crew.',
      destinations: [
        'Sunrise Point (Penanjakan 1 / King Kong Hill / Love Hill / Prau Hill)',
        'Widodaren Valley, Mount Batok Crater, Poten Temple, Whispering Sands, Teletubbies Savanna'
      ],
      includes: [
        '1 Unit 100% Private Toyota Land Cruiser FJ40 4x4 Jeep',
        'Licensed local Tengger driver from Tosari highlands',
        'Fuel for 4x4 Jeep round trip',
        'Official TNBTS National Park Entrance Tickets for all participants',
        'Basecamp levies & official parking fees',
        'DSLR/Mirrorless Photo & Video Documentation (for doc package)'
      ],
      excludes: [
        'Horse riding in Bromo caldera (optional)',
        'Personal meals & drinks',
        'Paid public restroom facilities',
        'TNBTS International Visitor Ticket Surcharge (IDR 255,000 / person)',
        'Transportation to Tosari Basecamp (self-provided or hotel pickup in Tosari area)'
      ],
      highlights: [
        'Fastest 35-minute paved route to Penanjakan 1 viewpoint',
        '100% Private Jeep with no stranger sharing',
        'Smooth asphalt road access from Pasuruan & Surabaya highway',
        'Flexible schedule and customized photo stops'
      ],
      meetingPoint: 'Tosari Jeep Basecamp or hotels around Tosari & Wonokitri Pasuruan',
      meetingPoints: [
        'Tosari Pasuruan Jeep Basecamp (Official Departure Hub)',
        'Hotels, Villas & Homestays around Tosari & Wonokitri (Plataran, Bromo Cottage, etc.)'
      ],
      tips: [
        'Most recommended route for families staying at luxury resorts in Tosari',
        'Dress in layers as Penanjakan 1 is the coldest viewpoint (2°C - 5°C)'
      ],
      itinerary: [
        { time: '02:30 - 03:00', activity: 'Meetup at Tosari Basecamp', description: 'Briefing and boarding your private 4x4 Jeep.' },
        { time: '03:30 - 06:00', activity: 'Sunrise at Penanjakan 1', description: 'Witness the legendary golden sunrise from the highest vantage point.' },
        { time: '06:00 - 09:30', activity: 'Full Caldera Exploration', description: 'Visit Widodaren, Bromo crater rim, Poten Hindu Temple, Whispering Sands, and Savanna.' },
        { time: '10:00', activity: 'Return to Tosari', description: 'Head back to Tosari basecamp or your hotel.' }
      ],
      recommendedFor: 'Families and groups staying in Tosari/Pasuruan seeking rapid access to Penanjakan 1.'
    },
    'private-jeep-sukapura': {
      title: 'Private Jeep 4x4 Bromo from Sukapura Probolinggo',
      subtitle: 'Exclusive 4x4 Jeep rental departing from Sukapura Probolinggo Basecamp. Closest gateway via Probolinggo expressway.',
      badge: 'Basecamp Sukapura',
      duration: '1 Day (8 Hours)',
      departureTime: '03:00 Dawn / 11:00 Noon',
      startLocationName: 'Sukapura Probolinggo (Basecamp Jeep)',
      priceUnit: '/ jeep (max 6 pax)',
      description: 'Charter 1 exclusive Toyota Land Cruiser FJ40 Jeep from Sukapura Probolinggo without stranger sharing. Daily departures: Sunrise trip at 03:00 AM or Panorama trip at 11:00 AM. Capacity: up to 6 guests without doc or 5 guests with photo/video crew.',
      destinations: [
        'Sunrise Point (Seruni Point / King Kong Hill / Penanjakan)',
        'Widodaren Valley, Mount Batok Crater, Poten Temple, Whispering Sands, Teletubbies Savanna'
      ],
      includes: [
        '1 Unit 100% Private Toyota Land Cruiser FJ40 4x4 Jeep',
        'Professional local driver from Sukapura',
        'Fuel for 4x4 Jeep round trip',
        'Official TNBTS National Park Entrance Tickets for all participants',
        'Basecamp levies & official parking fees',
        'DSLR/Mirrorless Photo & Video Documentation (for doc package)'
      ],
      excludes: [
        'Horse riding in Bromo caldera (optional)',
        'Personal meals & beverages',
        'Paid public restroom facilities',
        'TNBTS International Visitor Ticket Surcharge (IDR 255,000 / person)',
        'Transportation to Sukapura Basecamp'
      ],
      highlights: [
        'Closest gateway from Probolinggo toll exit for private cars',
        '100% Private Jeep with full itinerary flexibility',
        'Direct access to Cemorolawang and Seruni Point',
        'Safe, monitored parking available at official Sukapura basecamp'
      ],
      meetingPoint: 'Sukapura Jeep Basecamp or hotels around Sukapura & Cemorolawang',
      meetingPoints: [
        'Sukapura Probolinggo Jeep Basecamp',
        'Hotels & Lodgings in Sukapura & Cemorolawang (Jiwa Jawa, Lava View, Bromo Terrace)'
      ],
      tips: [
        'Your private car can be securely parked at the official Sukapura basecamp rest area'
      ],
      itinerary: [
        { time: '02:30 - 03:00', activity: 'Meetup at Sukapura Basecamp', description: 'Route briefing and boarding your prepared 4x4 Jeep.' },
        { time: '03:45 - 06:00', activity: 'Sunrise Vantage Point', description: 'Watch the sunrise unfold over the sea of sand and smoking crater.' },
        { time: '06:00 - 09:30', activity: 'Explore Caldera & Crater', description: 'Trek to Bromo crater rim, visit Poten Temple, Whispering Sand, and Teletubbies Savanna.' },
        { time: '10:00', activity: 'Return to Sukapura', description: 'Tour concludes, return to Sukapura basecamp.' }
      ],
      recommendedFor: 'Road trippers driving their own vehicle to Probolinggo or staying in Cemorolawang.'
    },
    'private-jeep-tumpang': {
      title: 'Private Jeep 4x4 Bromo from Gubugklakah Malang',
      subtitle: 'Exclusive 4x4 Jeep rental departing from Gubugklakah Basecamp. Scenic route through apple orchards and southern savanna pass.',
      badge: 'Basecamp Gubugklakah',
      duration: '1 Day (10 Hours)',
      departureTime: '03:00 Dawn (Optional Morning/Noon)',
      startLocationName: 'Gubugklakah Malang (Basecamp Jeep)',
      priceUnit: '/ jeep (max 6 pax)',
      description: 'Charter 1 exclusive Toyota Land Cruiser FJ40 Jeep from Gubugklakah Basecamp in East Malang. Departures daily at 03:00 AM (optional morning/noon). Capacity: up to 6 guests without doc or 5 guests with photo/video crew.',
      destinations: [
        'Sunrise Point (King Kong Hill / Penanjakan / Love Hill / Prau Hill)',
        'Widodaren Valley, Mount Batok Crater, Poten Temple, Whispering Sands, Teletubbies Savanna'
      ],
      includes: [
        '1 Unit 100% Private Toyota Land Cruiser FJ40 4x4 Jeep',
        'Professional local driver from Gubugklakah',
        'Fuel for 4x4 Jeep round trip',
        'Official TNBTS National Park Entrance Tickets for all participants',
        'Basecamp levies & official parking fees',
        'DSLR/Mirrorless Photo & Video Documentation (for doc package)'
      ],
      excludes: [
        'Horse riding in caldera',
        'Personal meals & beverages',
        'Paid public restrooms',
        'TNBTS International Visitor Ticket Surcharge (IDR 255,000 / person)',
        'Transportation to Gubugklakah Basecamp'
      ],
      highlights: [
        'Breathtaking scenery through apple orchards, pine forests, and Jemplang cliff pass',
        '100% Private Jeep with flexible schedule',
        'Authentic mountain route away from heavy commercial traffic'
      ],
      meetingPoint: 'Gubugklakah Jeep Basecamp (Jln. Raya Gubugklakah no 147, Malang)',
      meetingPoints: [
        'Gubugklakah Jeep Basecamp (Jln. Raya Gubugklakah no 147, Malang)',
        'Hotels & Homestays in Gubugklakah & Tumpang Tourism Villages'
      ],
      tips: [
        'Bring a camera for the stunning daytime cliff views of Jemplang Savanna'
      ],
      itinerary: [
        { time: '02:30 - 03:00', activity: 'Meetup at Gubugklakah', description: 'Briefing and departure via scenic Gubugklakah - Ngadas mountain route.' },
        { time: '03:30 - 06:00', activity: 'Sunrise Vantage Point', description: 'Enjoy the majestic sunrise over the volcanic landscape.' },
        { time: '06:00 - 09:30', activity: 'Caldera Exploration', description: 'Explore Widodaren, Bromo crater rim, Poten Temple, Whispering Sand, and Savanna.' },
        { time: '10:30', activity: 'Return to Gubugklakah', description: 'Scenic drive back and drop-off at Gubugklakah basecamp.' }
      ],
      recommendedFor: 'Nature lovers wanting a scenic adventure route through rural apple orchards.'
    },
    'private-jeep-malang': {
      title: 'Private Trip Bromo from Malang City (Door-to-Door)',
      subtitle: 'Exclusive all-in private tour with door-to-door hotel/station pickup in Malang City via private AC shuttle and 4x4 Jeep.',
      badge: 'Door to Door Malang',
      duration: '1 Day (12 Hours)',
      departureTime: '23:00 - 01:00 WIB',
      startLocationName: 'Malang City Area',
      priceUnit: '/ group (max 6 pax)',
      description: '100% private all-in tour with zero stranger sharing. Direct door-to-door pickup at your hotel, villa, train station, or residence anywhere in Malang City. Departures daily between 23:00 - 01:00 midnight. Capacity: up to 6 guests without doc or 5 guests with photographer.',
      destinations: [
        'Sunrise Point (King Kong Hill / Penanjakan / Love Hill / Prau Hill)',
        'Widodaren Valley, Mount Batok Crater, Poten Temple, Whispering Sands, Teletubbies Savanna'
      ],
      includes: [
        'Private AC Shuttle Car door-to-door pickup & return across Malang City',
        'Professional driver and friendly local guide',
        'Fuel for shuttle car & 4x4 Jeep round trip',
        '1 Unit 100% Private Toyota Land Cruiser FJ40 4x4 Jeep',
        'Official TNBTS National Park Entrance Tickets for all participants',
        'Regional environmental levies & authorized parking fees',
        'DSLR/Mirrorless Photo & Video Documentation (for doc package)'
      ],
      excludes: [
        'Horse riding in Bromo caldera (optional)',
        'Personal meals & beverages',
        'Paid public restroom facilities',
        'TNBTS International Visitor Ticket Surcharge (IDR 255,000 / person)',
        'Personal expenses'
      ],
      highlights: [
        '100% Private tour with door-to-door convenience in Malang',
        'Zero stranger sharing in shuttle or 4x4 Jeep',
        'Flexible timing tailored to your group rhythm',
        'Free choice of photo spots and resting times'
      ],
      meetingPoint: 'Door-to-door pickup at any hotel, homestay, station, or address in Malang City',
      meetingPoints: [
        'Malang Kotabaru & Malang Kota Lama Railway Stations',
        'All Hotels, Homestays, Villas & Private Residences across Malang City'
      ],
      tips: [
        'Perfect choice for families with young children or elders needing maximum comfort and privacy'
      ],
      itinerary: [
        { time: '23:00 - 01:00', activity: 'Private Door-to-Door Pickup', description: 'Driver picks up your group directly from your Malang address or hotel.' },
        { time: '03:30 - 06:00', activity: 'Golden Sunrise Point', description: 'Watch the sunrise without rushing, with full personal flexibility.' },
        { time: '06:00 - 09:30', activity: 'Explore 5 Caldera Highlights', description: 'Visit Widodaren, Bromo crater rim, Poten Temple, Whispering Sand, and Savanna.' },
        { time: '10:00 - 12:30', activity: 'Return to Malang City', description: 'Comfortable drop-off back to your hotel or origin address in Malang.' }
      ],
      recommendedFor: 'Families, corporate groups, and travelers wanting maximum comfort and privacy.'
    },
    'private-jeep-batu': {
      title: 'Private Trip Bromo from Batu Tourism City',
      subtitle: 'Exclusive all-in private tour with door-to-door pickup from your hotel, resort, or villa in Batu City via AC shuttle and 4x4 Jeep.',
      badge: 'Door to Door Batu',
      duration: '1 Day (12 Hours)',
      departureTime: '23:00 - 01:00 WIB',
      startLocationName: 'Batu Tourism City',
      priceUnit: '/ group (max 6 pax)',
      description: '100% private all-in tour with zero stranger sharing. Direct door-to-door pickup at any hotel, resort, or villa in Batu City. Departures daily between 23:00 - 01:00 midnight. Capacity: up to 6 guests without doc or 5 guests with photographer.',
      destinations: [
        'Sunrise Point (King Kong Hill / Penanjakan / Love Hill / Prau Hill)',
        'Widodaren Valley, Mount Batok Crater, Poten Temple, Whispering Sands, Teletubbies Savanna'
      ],
      includes: [
        'Private AC Shuttle Car door-to-door pickup & return across Batu City',
        'Professional driver and friendly local guide',
        'Fuel for shuttle car & 4x4 Jeep round trip',
        '1 Unit 100% Private Toyota Land Cruiser FJ40 4x4 Jeep',
        'Official TNBTS National Park Entrance Tickets for all participants',
        'Regional environmental levies & authorized parking fees',
        'DSLR/Mirrorless Photo & Video Documentation (for doc package)'
      ],
      excludes: [
        'Horse riding in Bromo caldera (optional)',
        'Personal meals & beverages',
        'Paid public restroom facilities',
        'TNBTS International Visitor Ticket Surcharge (IDR 255,000 / person)',
        'Personal expenses'
      ],
      highlights: [
        'Direct pickup from cool mountain villas and luxury resorts in Batu',
        '100% Private group experience without sharing vehicles',
        'Flexible schedule adapted to your family pace'
      ],
      meetingPoint: 'Door-to-door pickup at any hotel, villa, or resort in Batu Tourism City',
      meetingPoints: [
        'All Hotels, Resorts, Villas & Homestays across Batu Tourism City'
      ],
      tips: [
        'Pickup timing will be coordinated with the location of your villa in Batu'
      ],
      itinerary: [
        { time: '23:00 - 01:00', activity: 'Pickup at Batu Villa/Resort', description: 'Driver picks you up directly from your accommodation in Batu City.' },
        { time: '03:30 - 06:00', activity: 'Golden Sunrise Point', description: 'Witness the breathtaking dawn over Mount Bromo.' },
        { time: '06:00 - 09:30', activity: 'Caldera Exploration', description: 'Explore Widodaren, climb crater rim, visit temple, sand sea, and savanna.' },
        { time: '10:00 - 13:00', activity: 'Return to Batu City', description: 'Relaxing ride back and drop-off at your lodging in Batu.' }
      ],
      recommendedFor: 'Families and holidaymakers vacationing in Batu City villas and resorts.'
    },
    'private-jeep-surabaya': {
      title: 'Private Trip Bromo from Surabaya Raya (VVIP Door-to-Door)',
      subtitle: 'VIP door-to-door service from Surabaya / Sidoarjo with prime AC vehicles and private 4x4 Jeep. Photo & video documentation included!',
      badge: 'VVIP Surabaya (Include Doc)',
      duration: '1 Day (14 Hours)',
      departureTime: '23:00 - 23:30 WIB (On Request)',
      startLocationName: 'Surabaya Raya & Sidoarjo',
      priceUnit: '/ group (from 2 pax)',
      description: 'Exclusive VVIP private service from Surabaya Raya via luxury AC shuttle (Innova Reborn / Hiace / Elf / Coach) connecting to private 4x4 Jeeps in Bromo. Full choice of pickup location & departure time. DSLR/Mirrorless Photo and Video Documentation SUDAH INCLUDE!',
      destinations: [
        'Sunrise Point (King Kong Hill / Penanjakan / Love Hill / Prau Hill)',
        'Widodaren Valley, Mount Batok Crater, Poten Temple, Whispering Sands, Teletubbies Savanna'
      ],
      includes: [
        'Prime AC Shuttle (Innova Reborn / Hiace / Elf / Coach) Surabaya - Bromo round trip',
        'Professional, licensed & courteous driver',
        'Fuel & Trans-Java Expressway Toll fees round trip',
        '100% Private 4x4 Toyota Land Cruiser FJ40 Jeeps (5-6 pax per jeep)',
        'Official TNBTS National Park Entrance Tickets for all participants',
        'Regional environmental levies & authorized parking fees',
        'Professional DSLR/Mirrorless Photo & Video Documentation Included!'
      ],
      excludes: [
        'Horse riding in Bromo caldera (optional)',
        'Personal meals & beverages',
        'Paid public restrooms',
        'TNBTS International Visitor Ticket Surcharge (IDR 255,000 / person)',
        'Personal expenses outside package inclusions'
      ],
      highlights: [
        'Free choice of pickup across Surabaya Raya (Juanda Airport, railway stations, hotels)',
        'Zero stranger sharing (100% Private throughout)',
        'Professional photo & video documentation included as standard',
        'Transparent tiered pricing — the more guests, the more cost-effective'
      ],
      meetingPoint: 'Free pickup at any location across Surabaya Raya & Sidoarjo',
      meetingPoints: [
        'Juanda International Airport Surabaya (SUB)',
        'Surabaya Gubeng / Pasar Turi / Wonokromo Railway Stations',
        'All Hotels, Apartments & Residences in Surabaya and Sidoarjo'
      ],
      tips: [
        'The most ideal choice for business delegations, executive groups, and overseas families'
      ],
      itinerary: [
        { time: '23:00 - 23:30', activity: 'Private Pickup in Surabaya', description: 'Private AC vehicle picks up your group at your chosen address.' },
        { time: '02:00 - 02:30', activity: 'Transfer to 4x4 Jeep', description: 'Board your private 4x4 Jeep at the official mountain transit area.' },
        { time: '03:30 - 06:00', activity: 'Spectacular Golden Sunrise', description: 'Watch the sunrise accompanied by our professional photography crew.' },
        { time: '06:00 - 09:30', activity: 'Explore 5 Caldera Highlights', description: 'Visit Widodaren, Bromo crater rim, Poten Temple, Whispering Sand, and Savanna.' },
        { time: '10:30 - 13:30', activity: 'Highway Return to Surabaya', description: 'Comfortable expressway ride back and drop-off at your location.' }
      ],
      recommendedFor: 'Corporate delegations, international tourists, VIP guests, and large families.'
    },
    'long-jeep': {
      title: 'Long Jeep Bromo 9-Passenger Capacity (Limited)',
      subtitle: 'Large capacity Long Chassis 4x4 Jeep for up to 9 adult guests. Most economical private solution for medium groups.',
      badge: '9-Passenger Capacity',
      duration: '1 Day (12 Hours)',
      departureTime: '00:00 - 02:30 WIB (Based on Option)',
      startLocationName: 'Basecamp Gubugklakah Malang',
      priceUnit: '/ unit (up to 9 guests)',
      description: 'Exclusive Long Chassis 4x4 Jeep with spacious seating for up to 9 adult passengers. Departure from Basecamp Jln. Raya Gubugklakah 147 Malang, with optional hotel pickup add-ons for Malang or Batu. Much more economical than renting two separate standard jeeps.',
      destinations: [
        'Sunrise Point (King Kong Hill / Penanjakan / Love Hill / Prau Hill)',
        'Widodaren Valley, Mount Batok Crater, Poten Temple, Whispering Sands, Teletubbies Savanna'
      ],
      includes: [
        '1 Unit Long Chassis 4x4 Jeep (Capacity up to 9 adult passengers)',
        'Professional mountain driver experienced in Bromo terrains',
        'Fuel for 4x4 Jeep round trip',
        'Official TNBTS National Park Entrance Tickets for up to 9 participants',
        'Basecamp levies & official parking fees',
        'DSLR/Mirrorless Photo & Video Documentation (for doc package)'
      ],
      excludes: [
        'Shuttle pickup outside basecamp (optional add-on for Malang or Batu city pickup)',
        'Horse riding in Bromo caldera',
        'Personal meals & beverages',
        'Paid public restrooms',
        'TNBTS International Visitor Ticket Surcharge (IDR 255,000 / person)'
      ],
      highlights: [
        'Seats up to 9 passengers in one vehicle — perfect for medium-sized groups',
        'Significantly more economical than chartering two standard 4x4 jeeps',
        'Full access to all 5 iconic caldera destinations'
      ],
      meetingPoint: 'Start Basecamp Jln. Raya Gubugklakah 147 Malang (optional Malang/Batu pickup)',
      meetingPoints: [
        'Basecamp: Jln. Raya Gubugklakah no 147, Malang Regency',
        'Optional Malang City Pickup (+IDR 300,000 per car max 6 pax)',
        'Optional Batu City Pickup (+IDR 400,000 per car max 6 pax)'
      ],
      tips: [
        'Early reservation (7 days ahead) is highly recommended as Long Jeep units are very limited'
      ],
      itinerary: [
        { time: '00:00 - 02:30', activity: 'Meetup / Pickup', description: 'Meet at Gubugklakah basecamp or enjoy optional pickup from Malang/Batu.' },
        { time: '03:30 - 06:00', activity: 'Sunrise Vantage Point', description: 'Witness the sunrise with all 9 group members together in one vehicle.' },
        { time: '06:00 - 09:30', activity: 'Caldera Exploration', description: 'Explore Widodaren, crater rim, Poten Temple, Whispering Sand, and Savanna.' },
        { time: '10:00 - 12:30', activity: 'Return to Basecamp / Malang', description: 'Return journey and drop-off.' }
      ],
      recommendedFor: 'Medium families, circles of friends, and company teams of 7 to 9 people.'
    },
    'sewa-trail-sukapura': {
      title: 'Sukapura Bromo Dirt Bike Rental (KLX / CRF / WR)',
      subtitle: 'Conquer the whispering sand sea and Teletubbies hills on ready-to-ride trail bikes.',
      badge: 'Dirt Bike Safari',
      duration: '12 Hours (Full Day)',
      departureTime: 'Flexible (Morning / Afternoon)',
      startLocationName: 'Sukapura Probolinggo',
      priceUnit: '/ bike (12 hours)',
      description: 'Experience pure adrenaline riding across the volcanic sand sea and Widodaren cliffs on high-torque Kawasaki KLX 150, Honda CRF 150L, or Yamaha WR 155R dirt bikes.',
      destinations: [
        'Whispering Sea of Sand (Lautan Pasir Berbisik)',
        'Bromo Crater Foot & Ridge',
        'Teletubbies Savanna Hills',
        'Widodaren Sacred Cliff Pass'
      ],
      includes: [
        '1 Unit 150cc Dirt Bike (Kawasaki KLX / Honda CRF / Yamaha WR)',
        'Cross Helmet (DOT/SNI certified) + Dust Goggles',
        'Knee & Elbow Protective Guards (Body Armor)',
        'Full Tank Fuel Included at Handover'
      ],
      excludes: [
        'TNBTS National Park Entrance Ticket',
        'Local Route Trail Marshall / Guide (optional add-on)'
      ],
      highlights: [
        'Pristine bike condition with knobby tires built for soft volcanic sand',
        'Full protective gear included for maximum safety',
        'Freedom to explore the vast caldera floor at your own pace'
      ],
      meetingPoint: 'Sukapura Dirt Bike Basecamp Probolinggo',
      meetingPoints: [
        'Sukapura Dirt Bike Basecamp Probolinggo'
      ],
      tips: [
        'Wear sturdy boots or high-ankle sneakers for optimal sand riding control'
      ],
      itinerary: [
        { time: '07:00 - 08:00', activity: 'Bike Handover & Safety Briefing', description: 'Check bike condition, fit helmets and body armor, review caldera trail safety.' },
        { time: '08:00 - 16:00', activity: 'Free Ride Bromo Caldera', description: 'Thrilling off-road riding across the Sea of Sand and Teletubbies Savanna.' },
        { time: '16:30', activity: 'Return to Basecamp', description: 'Hand back motorcycle and equipment at Sukapura basecamp.' }
      ],
      recommendedFor: 'Adventure seekers, motorcycle enthusiasts, and solo riders looking for high-octane thrills.'
    },
    'bromo-picnic-savana': {
      title: 'Bromo Aesthetic Picnic Experience Savana Teletubbies',
      subtitle: 'Aesthetic breakfast & outdoor dining amidst lush green savannas with boho rugs, timber tables, and hot BBQ/Suki sets.',
      badge: 'Aesthetic VIP Dining',
      duration: 'Morning (07:00 - 11:00 WIB)',
      departureTime: '07:00 - 08:00 WIB',
      startLocationName: 'Teletubbies Savanna Bromo',
      priceUnit: '/ person',
      description: 'Luxury outdoor breakfast and dining experience set against the dramatic backdrop of Mount Bromo and Widodaren cliffs. Features bohemian woven rugs, low rustic timber tables, teepee tents, plush cushions, and hot gourmet delicacies.',
      destinations: [
        'Widodaren Valley / Teletubbies Green Savanna'
      ],
      includes: [
        'Luxury Bohemian Setup: Boho Rugs, Low Timber Tables, Teepee Tent, Bean Bags & Ethnic Cushions',
        'Hot Gourmet Set Menu Choice (BBQ Grill / Suki Shabu / Traditional Indonesian Cuisine)',
        'Warm Beverages: Fresh Ground Coffee, Hot Tea & Javanese Ginger Tea',
        'Dedicated Private Butler & Full Porcelain Dining Ware',
        'Aesthetic Photo Props & Acoustic Background Atmosphere'
      ],
      excludes: [
        '4x4 Jeep transport to picnic site (can be bundled with jeep packages)',
        'TNBTS National Park Entrance Ticket'
      ],
      highlights: [
        'The most viral aesthetic outdoor breakfast experience in Bromo',
        '8 curated gourmet menus prepared hot on the spot',
        'Dedicated butler team for seamless hospitality and photo assistance'
      ],
      meetingPoint: 'Teletubbies Savanna / Widodaren Valley Bromo',
      meetingPoints: [
        'Teletubbies Savanna / Widodaren Valley Bromo'
      ],
      tips: [
        'Wear earth-tone, cream, or white casual outfits for stunning photographs'
      ],
      itinerary: [
        { time: '07:00 - 07:30', activity: 'Arrival & Welcome Drink', description: 'Warmly greeted by your private butler with piping-hot welcome drinks.' },
        { time: '07:30 - 09:30', activity: 'Gourmet Dining & Photo Session', description: 'Savor hot delicacies while taking aesthetic photos against Widodaren cliffs.' },
        { time: '10:00 - 10:30', activity: 'Relaxation & Wrap-up', description: 'Enjoy the cool mountain breeze before departing.' }
      ],
      recommendedFor: 'Couples, aesthetic content creators, honeymooners, and family gatherings.'
    }
  },
  zh: {
    'open-trip-malang': {
      title: '布罗莫日出拼车之旅（玛琅/巴图出发）',
      subtitle: '超高性价比每日拼车日出之旅，配备经典四驱丰田硬顶吉普，1人成行保证出发，无须凑人。',
      badge: '1人成行 保证出发',
      duration: '1日游（深夜发车）',
      departureTime: '23:00 - 01:00 WIB',
      startLocationName: '玛琅与巴图市区',
      priceUnit: '/ 人',
      description: '最受海内外游客喜爱的经典经济型布罗莫火山口与日出拼车行程。每日半夜发车，玛琅及巴图全市区酒店、火车站免费上门接送。',
      destinations: [
        '黄金日出观景台（金刚山 / 佩南贾坎 / 爱情山 / 普劳山）',
        '维多达伦绝壁山谷、巴托克火山口、波滕印度教古庙、细沙呼啸海、天线宝宝绿色草原'
      ],
      includes: [
        '玛琅 / 巴图全境空调穿梭接送专车往返（上门接送）',
        '专业、合规且熟悉路况的持牌经验司机',
        '往返专车及四驱吉普全部燃油费用',
        '布罗莫火山口官方正规丰田陆地巡洋舰FJ40四驱吉普',
        'TNBTS布罗莫国家公园官方正规门票及高山救援保险',
        '国家公园管理费及各景区正规停车费',
        '单反/微单相机专业跟拍摄影（适用于摄影套餐）'
      ],
      excludes: [
        '火山口骑马体验（自愿选乘，步行登顶同样方便）',
        '个人餐饮及饮品（可在当地山间小店自费享用）',
        '景区付费公共卫生间使用费',
        'TNBTS国家公园外籍游客官方门票附加费（25.5万印尼盾/人）',
        '个人药品及其他私人消费'
      ],
      highlights: [
        '每日1人成行 保证发车，无需担心因凑不够人数而取消',
        '玛琅与巴图市区酒店、火车站免费上门接驳',
        '行程完整涵盖布罗莫火山口全部5大核心胜景',
        '元旦/圣诞旺季（2026年12月18日-2027年1月5日）：附加5万印尼盾/人'
      ],
      meetingPoint: '玛琅及巴图市区各酒店、民宿、火车站、机场上门接送',
      meetingPoints: [
        '玛琅 Kotabaru 火车站与 Kota Lama 火车站',
        '玛琅市区内所有酒店、民宿、公寓及住宅',
        '巴图旅游城市内所有度假村、酒店及半山别墅',
        '阿卜杜勒拉赫曼萨利赫机场 (MLG) 与 Arjosari 巴士总站'
      ],
      tips: [
        '清晨山顶气温仅 2°C – 8°C，请备足防风厚外套、保暖手套及毛线帽',
        '建议佩戴防尘口罩与太阳镜，以防火山沙海细沙扑面',
        '请携带适量印尼盾现金，以便在景区使用洗手间或购买热饮'
      ],
      itinerary: [
        { time: '23:00 - 01:30', activity: '玛琅 / 巴图上门接载', description: '司机前往您所在的酒店、火车站或住址进行专属接驳。' },
        { time: '02:00 - 03:00', activity: '换乘四驱吉普上山', description: '在大本营换乘丰田FJ40经典四驱吉普，穿越山路前往日出观景台。' },
        { time: '03:30 - 06:00', activity: '观赏壮丽黄金日出', description: '在观景台欣赏云海涌动与朝霞映照布罗莫群山的震撼奇观。' },
        { time: '06:00 - 09:30', activity: '火山口与五大景点漫步', description: '近距离游览维多达伦悬崖、攀登火山口台阶、参观波滕古庙、探秘沙海与天线宝宝草原。' },
        { time: '10:00 - 11:00', activity: '返回吉普换乘基地', description: '乘吉普下山返回中转大本营稍作休整。' },
        { time: '11:00 - 13:00', activity: '安全送回玛琅 / 巴图', description: '乘坐空调专车返回您在玛琅或巴图的酒店，行程圆满结束。' }
      ],
      recommendedFor: '独行背包客、情侣伴侣及追求高性价比、保证出发的自由行旅客。'
    },
    'open-trip-surabaya': {
      title: '布罗莫日出拼车之旅（泗水出发）',
      subtitle: '便捷舒适的泗水及诗都阿佐每日拼车之旅，空调快线接驳+经典四驱吉普，1人成行，已包含专业摄影！',
      badge: '全包直达·含摄影',
      duration: '1日游（深夜发车）',
      departureTime: '22:00 - 23:00 WIB',
      startLocationName: '泗水全境与诗都阿佐',
      priceUnit: '/ 人（含摄影）',
      description: '每日从泗水与诗都阿佐发车的高品质拼车团。1人即可报名！费用已全包单反跟拍摄影、全程高速过路费、燃油费与国家公园正规门票。',
      destinations: [
        '黄金日出观景台（佩南贾坎 / 金刚山 / 爱情山 / 普劳山）',
        '维多达伦山谷、巴托克火山、波滕神庙、细沙呼啸海、天线宝宝绿色草原'
      ],
      includes: [
        '高品质空调专车（Hiace / Innova / Elf / 豪华客车）泗水-布罗莫往返接送',
        '专业合规且经验丰富的持牌司机',
        '往返全部燃油费及跨爪哇跨城高速公路通行费',
        '布罗莫火山正规丰田FJ40四驱吉普车',
        'TNBTS国家公园官方正规门票及高山救援保险',
        '景区管理费与大本营正规停车费',
        '专业单反/微单相机跟拍摄影服务（已免费包含！）'
      ],
      excludes: [
        '沙海骑马代步服务（自愿选择，步行亦可）',
        '个人就餐及饮料消费',
        '景区付费公共洗手间',
        '外籍游客国家公园门票官方附加费（25.5万印尼盾/人）',
        '其他私人消费'
      ],
      highlights: [
        '泗水直达走高速快线，省时省力舒适便捷',
        '周末路线1人成行 稳定发车',
        '全程配备单反跟拍摄影，留下专业高质感旅途大片',
        '完整游览火山口全部5大著名自然与人文奇观'
      ],
      meetingPoint: '泗水 Pasar Turi 火车站 & Bungurasih 车站（周末）/ 全市区自选地点（每日）',
      meetingPoints: [
        '泗水 Pasar Turi 与 Gubeng 火车站',
        'Purabaya Bungurasih 长途客运站',
        '泗水朱安达国际机场 (SUB)',
        '泗水与诗都阿佐全境内各大酒店及公寓'
      ],
      tips: [
        '山顶日出气温仅 5°C - 10°C，请携带防风保暖外套',
        '适合飞抵泗水机场或乘火车抵达泗水的国内外自由行旅客'
      ],
      itinerary: [
        { time: '22:00 - 23:00', activity: '泗水市区上门接驳', description: '空调专车按预约在泗水集合地点接载各位贵宾。' },
        { time: '02:00 - 03:00', activity: '换乘四驱吉普车队', description: '抵达布罗莫换乘大本营，换乘经典四驱吉普车启程。' },
        { time: '03:30 - 06:00', activity: '观赏壮阔日出盛景', description: '在观景台欣赏绝美日出与云海翻腾，摄影师跟拍精彩瞬间。' },
        { time: '06:00 - 09:30', activity: '火山口五大景观深度游', description: '探访维多达伦悬崖、近距离观赏火山口喷烟、波滕古庙与绿意盎然的草原。' },
        { time: '10:30 - 11:30', activity: '返回换乘大本营', description: '乘坐吉普下山，返回中转休息区。' },
        { time: '11:30 - 14:00', activity: '经高速公路返回泗水', description: '乘空调专车经高速返回泗水，安全送抵您的酒店或车站。' }
      ],
      recommendedFor: '经泗水朱安达机场抵离的国际游客、商务客及短途周末游旅客。'
    },
    'private-jeep-wonokitri': {
      title: '布罗莫专属包车四驱吉普（托萨里帕苏鲁安出发）',
      subtitle: '专属四驱吉普包车，从托萨里帕苏鲁安大本营或酒店出发。仅需35分钟直达日出之王佩南贾坎1号观景台。',
      badge: '托萨里大本营出发',
      duration: '1日游（约8小时）',
      departureTime: '凌晨 03:00 / 中午 11:00',
      startLocationName: '托萨里帕苏鲁安 (吉普大本营)',
      priceUnit: '/ 车（最多容纳6人）',
      description: '独享1台丰田FJ40经典四驱吉普，不与陌生游客拼车。每日发车：日出之旅凌晨03:00出发，或全景之旅上午11:00出发。车辆容纳：无摄影最多6人，含摄影师团队最多5人。',
      destinations: [
        '黄金日出观景台（佩南贾坎1号 / 金刚山 / 爱情山 / 普劳山）',
        '维多达伦山谷、巴托克火山口、波滕神庙、细沙呼啸海、天线宝宝绿色草原'
      ],
      includes: [
        '1台100%专属丰田陆地巡洋舰FJ40四驱吉普车（不拼车）',
        '托萨里高山当地经验丰富的持牌腾格尔原住民司机',
        '吉普车全程往返燃油费用',
        'TNBTS国家公园官方正规门票及高山救援保险（全员包含）',
        '大本营停车费与国家公园管理费',
        '单反/微单摄影与高清视频拍摄（适用于包含摄影的套餐）'
      ],
      excludes: [
        '火山口骑马服务（自费自愿）',
        '个人就餐及饮料费用',
        '景区付费公共卫生间',
        '外籍游客国家公园门票官方附加费（25.5万印尼盾/人）',
        '抵达托萨里大本营的交通（自驾或托萨里周边酒店接送）'
      ],
      highlights: [
        '通往佩南贾坎1号观景台最平坦、耗时最短的高品质柏油路（仅35分钟）',
        '100%尊享私密包车，行程节奏与拍照停留完全自由掌控',
        '由泗水/帕苏鲁安方向自驾前往布罗莫最为便捷的官方大门'
      ],
      meetingPoint: '托萨里帕苏鲁安吉普大本营或周边各度假村酒店',
      meetingPoints: [
        '托萨里帕苏鲁安官方吉普大本营',
        '托萨里及沃诺基特里周边酒店、度假村及高端民宿（Plataran、Bromo Cottage 等）'
      ],
      tips: [
        '入住托萨里高端度假村（如 Plataran）家庭客人的首选路线',
        '佩南贾坎1号是海拔最高的观景台（气温低至2°C-5°C），请务必穿戴保暖'
      ],
      itinerary: [
        { time: '02:30 - 03:00', activity: '托萨里大本营集合', description: '行程简报并登上为您准备就绪的专属四驱吉普。' },
        { time: '03:30 - 06:00', activity: '佩南贾坎1号迎日出', description: '在最高观景台俯瞰云海翻涌与火山破晓的旷世美景。' },
        { time: '06:00 - 09:30', activity: '火山口全景漫步探索', description: '探访维多达伦绝壁、攀登火山口边缘、波滕神庙、沙海与天线宝宝草原。' },
        { time: '10:00', activity: '返回托萨里基地', description: '行程圆满结束，吉普车送回托萨里大本营或您的酒店。' }
      ],
      recommendedFor: '下榻托萨里高山度假村、追求私密性与快速登上最高观景台的家庭或好友团队。'
    },
    'private-jeep-sukapura': {
      title: '布罗莫专属包车四驱吉普（苏卡普拉庞越出发）',
      subtitle: '专属四驱吉普包车，从苏卡普拉庞越吉普大本营发车。走高速公路最快抵离的官方核心大门。',
      badge: '苏卡普拉大本营出发',
      duration: '1日游（约8小时）',
      departureTime: '凌晨 03:00 / 中午 11:00',
      startLocationName: '苏卡普拉庞越 (吉普大本营)',
      priceUnit: '/ 车（最多容纳6人）',
      description: '独享1台丰田FJ40经典四驱吉普，从庞越苏卡普拉出发，全程不与外人拼车。每日发车：日出之旅凌晨03:00或全景之旅中午11:00。容纳人数：无摄影最多6人，含摄影团队最多5人。',
      destinations: [
        '黄金日出观景台（塞鲁尼观景台 / 金刚山 / 佩南贾坎）',
        '维多达伦山谷、巴托克火山口、波滕神庙、细沙呼啸海、天线宝宝绿色草原'
      ],
      includes: [
        '1台100%专属丰田陆地巡洋舰FJ40四驱吉普车（不拼车）',
        '苏卡普拉当地熟悉火山地貌的专业持牌司机',
        '吉普车全程往返燃油费用',
        'TNBTS国家公园官方正规门票及高山救援保险（全员包含）',
        '大本营停车费与国家公园管理费',
        '单反/微单摄影与精彩视频跟拍（适用于包含摄影的套餐）'
      ],
      excludes: [
        '沙海骑马代步服务（自费自愿）',
        '个人就餐及饮料消费',
        '付费公共洗手间',
        '外籍游客国家公园门票官方附加费（25.5万印尼盾/人）',
        '抵达苏卡普拉大本营的接驳交通'
      ],
      highlights: [
        '自驾车辆经庞越高速出口下路后最近的换乘入口',
        '100%私密包车体验，无强制催促，拍照更自由',
        '大本营拥有正规安保停车场，自驾车辆停放安全有保障'
      ],
      meetingPoint: '苏卡普拉吉普大本营或周边苏卡普拉与切莫罗拉旺酒店',
      meetingPoints: [
        '苏卡普拉庞越官方吉普大本营',
        '苏卡普拉与切莫罗拉旺周边酒店（Jiwa Jawa、Lava View、Bromo Terrace 等）'
      ],
      tips: [
        '自驾车辆可安心停放在苏卡普拉官方大本营专用停车场'
      ],
      itinerary: [
        { time: '02:30 - 03:00', activity: '苏卡普拉大本营集合', description: '安全简报，乘坐已整备完毕的专属四驱吉普。' },
        { time: '03:45 - 06:00', activity: '日出观景台观景', description: '守候破晓朝霞照亮火山口沙海与冒烟奇景。' },
        { time: '06:00 - 09:30', activity: '深入火山口与各景点', description: '近距离游览维多达伦山谷、攀登火山口、参观波滕神庙、沙海与天线宝宝草原。' },
        { time: '10:00', activity: '安全返回苏卡普拉', description: '吉普车送回苏卡普拉大本营，行程结束。' }
      ],
      recommendedFor: '自驾前往布罗莫或下榻切莫罗拉旺/苏卡普拉沿线酒店的自由行旅客。'
    },
    'private-jeep-tumpang': {
      title: '布罗莫专属包车四驱吉普（古布克拉卡玛琅东出发）',
      subtitle: '专属四驱吉普包车，从玛琅古布克拉卡大本营出发。途经苹果田园与南部壮美悬崖草原的原生态秘境路线。',
      badge: '古布克拉卡大本营出发',
      duration: '1日游（约10小时）',
      departureTime: '凌晨 03:00 (可选上午/中午)',
      startLocationName: '古布克拉卡玛琅东 (吉普大本营)',
      priceUnit: '/ 车（最多容纳6人）',
      description: '独享1台丰田FJ40经典四驱吉普，从玛琅县古布克拉卡大本营出发。每日凌晨03:00发车（亦可定制白天行程）。车辆容纳：无摄影最多6人，含摄影团队最多5人。',
      destinations: [
        '黄金日出观景台（金刚山 / 佩南贾坎 / 爱情山 / 普劳山）',
        '维多达伦山谷、巴托克火山口、波滕神庙、细沙呼啸海、天线宝宝绿色草原'
      ],
      includes: [
        '1台100%专属丰田陆地巡洋舰FJ40四驱吉普车（不拼车）',
        '古布克拉卡当地经验丰富的持牌山路司机',
        '吉普车全程往返燃油费用',
        'TNBTS国家公园官方正规门票及高山救援保险（全员包含）',
        '大本营停车费与国家公园管理费',
        '单反/微单摄影与精彩视频跟拍（适用于包含摄影的套餐）'
      ],
      excludes: [
        '沙海骑马代步费用',
        '个人就餐及饮料消费',
        '付费公共洗手间',
        '外籍游客国家公园门票官方附加费（25.5万印尼盾/人）',
        '前往古布克拉卡大本营的接送交通'
      ],
      highlights: [
        '沿途饱览玛琅东部苹果果园、松树林及简普朗绝壁大草原的迷人自然风光',
        '远离拥堵嘈杂的商业主干道，体验原汁原味的爪哇高山穿越',
        '100%私密包车，行程自由惬意'
      ],
      meetingPoint: '古布克拉卡吉普大本营（Jln. Raya Gubugklakah 147, Malang）',
      meetingPoints: [
        '古布克拉卡吉普大本营（Jln. Raya Gubugklakah 147, Malang）',
        '古布克拉卡与吞邦生态旅游村周边酒店及民宿'
      ],
      tips: [
        '建议携带长焦相机，白天途径简普朗悬崖段可俯瞰无与伦比的草原大峡谷'
      ],
      itinerary: [
        { time: '02:30 - 03:00', activity: '古布克拉卡大本营集合', description: '简报并经由古布克拉卡-恩加达斯高山景观公路启程。' },
        { time: '03:30 - 06:00', activity: '日出观景台赏景', description: '在观景台欣赏第一缕阳光穿透云海的壮丽画卷。' },
        { time: '06:00 - 09:30', activity: '火山口全景漫步探索', description: '深入维多达伦山谷、火山口喷烟奇观、波滕神庙、沙海与天线宝宝草原。' },
        { time: '10:30', activity: '返回古布克拉卡', description: '乘吉普返回大本营，结束精彩的火山之旅。' }
      ],
      recommendedFor: '热爱大自然原始风貌、希望避开人群走景观小径的摄影与户外爱好者。'
    },
    'private-jeep-malang': {
      title: '布罗莫尊享专属私家团（玛琅市区门到门接送）',
      subtitle: '门到门全包私家团，在玛琅市区酒店/火车站/住宅直接上门接送，全程专属空调商务车与四驱吉普。',
      badge: '玛琅市区门到门',
      duration: '1日游（约12小时）',
      departureTime: '23:00 - 01:00 WIB',
      startLocationName: '玛琅市区全境',
      priceUnit: '/ 团（最多容纳6人）',
      description: '100%独立私家包车，全程不与任何外人拼车拼团。司机直接到您在玛琅市区的酒店、别墅或车站接您。每天深夜23:00 - 01:00发车。容量：无摄影最多6人，含摄影团队最多5人。',
      destinations: [
        '黄金日出观景台（金刚山 / 佩南贾坎 / 爱情山 / 普劳山）',
        '维多达伦山谷、巴托克火山口、波滕神庙、细沙呼啸海、天线宝宝绿色草原'
      ],
      includes: [
        '玛琅市区内全境空调专车往返门到门专属接送（Door to Door）',
        '专业司机兼热情当地中文/印尼语向导服务',
        '往返专车及四驱吉普全部燃油费用',
        '1台100%专属丰田陆地巡洋舰FJ40四驱吉普车（不拼车）',
        'TNBTS国家公园官方正规门票及高山救援保险（全员包含）',
        '景区管理费与正规停车场费用',
        '单反/微单摄影与精彩短视频拍摄（适用于包含摄影的套餐）'
      ],
      excludes: [
        '火山口骑马代步服务（自愿选择）',
        '个人就餐及饮料消费',
        '景区付费洗手间',
        '外籍游客国家公园门票官方附加费（25.5万印尼盾/人）',
        '其他私人消费'
      ],
      highlights: [
        '全流程100%独立专属包车，绝不与任何陌生人拼凑',
        '玛琅市区全境酒店与车站门到门接送，省去深夜辗转劳顿',
        '随走随停，自由掌控每个景点的游览与拍照时间'
      ],
      meetingPoint: '玛琅市区内所有酒店、民宿、火车站、机场门到门上门接送',
      meetingPoints: [
        '玛琅 Kotabaru 火车站与 Kota Lama 火车站',
        '玛琅市区内所有星级酒店、度假村、民宿及私人公寓'
      ],
      tips: [
        '携带老人或小孩的家庭、追求旅行品质与舒适私密性的团队首选'
      ],
      itinerary: [
        { time: '23:00 - 01:00', activity: '玛琅市区门到门接驾', description: '专车司机准时抵达您指定的玛琅酒店或住址接您启程。' },
        { time: '03:30 - 06:00', activity: '私享黄金日出观景', description: '从容就座观赏壮美日出，无须跟随大巴团赶时间。' },
        { time: '06:00 - 09:30', activity: '火山口五大景观深度畅游', description: '在维多达伦绝壁前拍照留念、攀登火山口、探寻沙海与天线宝宝草原。' },
        { time: '10:00 - 12:30', activity: '舒适返回玛琅市区', description: '乘专车舒适返回玛琅，直接送回您的酒店，轻松无负担。' }
      ],
      recommendedFor: '注重旅行品质、带老人小孩同行的家庭、企事业单位团队及情侣蜜月。'
    },
    'private-jeep-batu': {
      title: '布罗莫尊享专属私家团（巴图旅游城市门到门接送）',
      subtitle: '门到门全包私家团，在巴图城市酒店/度假村/半山别墅直接上门接送，专属空调商务车与四驱吉普。',
      badge: '巴图度假村门到门',
      duration: '1日游（约12小时）',
      departureTime: '23:00 - 01:00 WIB',
      startLocationName: '巴图旅游城市全境',
      priceUnit: '/ 团（最多容纳6人）',
      description: '100%独立私家包车，全程不与外人拼团。司机直接前往巴图市区的度假村、酒店或半山别墅接驾。每天深夜23:00 - 01:00发车。容量：无摄影最多6人，含摄影团队最多5人。',
      destinations: [
        '黄金日出观景台（金刚山 / 佩南贾坎 / 爱情山 / 普劳山）',
        '维多达伦山谷、巴托克火山口、波滕神庙、细沙呼啸海、天线宝宝绿色草原'
      ],
      includes: [
        '巴图旅游城市内全境空调专车往返门到门专属接送（Door to Door）',
        '专业司机兼热情当地向导服务',
        '往返专车及四驱吉普全部燃油费用',
        '1台100%专属丰田陆地巡洋舰FJ40四驱吉普车（不拼车）',
        'TNBTS国家公园官方正规门票及高山救援保险（全员包含）',
        '景区管理费与正规停车场费用',
        '单反/微单摄影与精彩短视频拍摄（适用于包含摄影的套餐）'
      ],
      excludes: [
        '火山口骑马代步服务（自愿选择）',
        '个人就餐及饮料消费',
        '景区付费洗手间',
        '外籍游客国家公园门票官方附加费（25.5万印尼盾/人）',
        '其他私人消费'
      ],
      highlights: [
        '专为下榻巴图清凉度假村与高档别墅客人量身打造',
        '100%独立私密包车，行程自由松弛',
        '全程包含正规门票及保险，无隐形加价'
      ],
      meetingPoint: '巴图市区内所有酒店、度假村、半山别墅门到门上门接送',
      meetingPoints: [
        '巴图旅游城市所有星级度假村、酒店、别墅及民宿'
      ],
      tips: [
        '接送时间将根据您在巴图半山别墅的具体地理位置提前精准协调'
      ],
      itinerary: [
        { time: '23:00 - 01:00', activity: '巴图度假村/别墅接驾', description: '司机前往您在巴图的住所接载，开启布罗莫探险。' },
        { time: '03:30 - 06:00', activity: '观景台赏壮丽朝阳', description: '在观景台欣赏第一缕阳光穿透云海的壮丽画卷。' },
        { time: '06:00 - 09:30', activity: '火山口五大奇观探索', description: '深入维多达伦悬崖、攀登火山口、参观波滕神庙、沙海与天线宝宝草原。' },
        { time: '10:00 - 13:00', activity: '返回巴图度假村', description: '乘专车平稳返回巴图，送回您的度假酒店，惬意休息。' }
      ],
      recommendedFor: '在巴图避暑度假的家庭、情侣及注重舒适接送体验的自由行贵宾。'
    },
    'private-jeep-surabaya': {
      title: '布罗莫VVIP尊享专属私家团（泗水全境门到门接送）',
      subtitle: '泗水与诗都阿佐VVIP级专属门到门服务，豪华空调商务车直达+布罗莫专属四驱吉普。已包含全套摄影与视频！',
      badge: '泗水VVIP全包·含摄影',
      duration: '1日游（约14小时）',
      departureTime: '23:00 - 23:30 WIB (随心定制)',
      startLocationName: '泗水全境与朱安达机场',
      priceUnit: '/ 团（2人起订，人数越多越划算）',
      description: '泗水全境VVIP级高规格私家定制团，选用豪华空调专车（Innova Reborn / Hiace Premio / 考斯特商务车）经高速直达布罗莫，无缝衔接专属四驱吉普。完全自由决定接送地点与出发时刻。专业单反/微单摄影与精彩短视频拍摄全部免费包含！',
      destinations: [
        '黄金日出观景台（金刚山 / 佩南贾坎 / 爱情山 / 普劳山）',
        '维多达伦山谷、巴托克火山口、波滕神庙、细沙呼啸海、天线宝宝绿色草原'
      ],
      includes: [
        '豪华空调商务车（Innova / Hiace Premio / 商务大巴）泗水-布罗莫往返门到门专车接送',
        '专业合规且经验丰富的持牌司机',
        '往返全程燃油费与跨爪哇高速公路全部通行费',
        '布罗莫火山100%专属丰田FJ40四驱吉普车（按5-6人/车合理配比）',
        'TNBTS国家公园官方正规门票及高山救援保险（全员包含）',
        '景区管理费与正规停车场费用',
        '专业单反/微单摄影与精彩短视频跟拍服务（已免费全部包含！）'
      ],
      excludes: [
        '火山口骑马代步服务（自愿选择）',
        '个人就餐及饮料消费',
        '景区付费洗手间',
        '外籍游客国家公园门票官方附加费（25.5万印尼盾/人）',
        '套餐包含项目以外的其他私人开销'
      ],
      highlights: [
        '在泗水全境自由指定接送点（朱安达国际机场、火车站、五星级酒店或私人公寓）',
        '全流程100%独立私密，绝无与任何外人拼车的烦扰',
        '免费标配专业摄影摄像跟拍，随手即是封面级旅行大片',
        '透明阶梯式团费计价，出行人数越多，人均费用越实惠'
      ],
      meetingPoint: '泗水及诗都阿佐全境内任何机场、车站、酒店自由指定',
      meetingPoints: [
        '泗水朱安达国际机场 (SUB)',
        '泗水 Gubeng / Pasar Turi / Wonokromo 火车站',
        '泗水与诗都阿佐全境内所有星级酒店、私人公寓及住宅'
      ],
      tips: [
        '经泗水抵离的高端商务代表团、外籍专家学者、跨省家庭旅行的最佳之选'
      ],
      itinerary: [
        { time: '23:00 - 23:30', activity: '泗水自选地点私密接驾', description: '豪华空调专车在您指定的泗水酒店或机场准时迎候贵宾。' },
        { time: '02:00 - 02:30', activity: '无缝换乘四驱吉普', description: '抵达正规中转基地，转乘专属丰田FJ40四驱吉普。' },
        { time: '03:30 - 06:00', activity: '日出大片专业摄影跟拍', description: '在观景台欣赏震撼黄金日出，专属摄影师全程抓拍难忘大片。' },
        { time: '06:00 - 09:30', activity: '火山口五大景观深度畅享', description: '漫步维多达伦悬崖、近探火山口浓烟、波滕神庙、沙海与天线宝宝草原。' },
        { time: '10:30 - 13:30', activity: '经高速舒适返回泗水', description: '专车经跨爪哇高速公路平稳送回泗水，送抵您指定的任何地点。' }
      ],
      recommendedFor: '商务外宾代表团、家庭亲子游、追求最高舒适度与专属大片记录的尊贵旅客。'
    },
    'long-jeep': {
      title: '布罗莫9座加长四驱吉普套餐（限量稀缺）',
      subtitle: '超大容量加长底盘四驱吉普，最多可容纳9位成年宾客。中型团队出行最具性价比的私家解决方案。',
      badge: '9人超大容量',
      duration: '1日游（约12小时）',
      departureTime: '00:00 - 02:30 WIB (依接送选项)',
      startLocationName: '玛琅古布克拉卡大本营',
      priceUnit: '/ 台（最多容纳9人）',
      description: '独家加长底盘4x4越野吉普，拥有宽敞座舱空间，最多可容纳9名成年旅客同乘一车。集合地点为玛琅县古布克拉卡大本营，亦可加配玛琅或巴图市区上门接驳服务。相较租用两台普通吉普，不仅大幅降低费用，更能让团队成员欢聚一车。',
      destinations: [
        '黄金日出观景台（金刚山 / 佩南贾坎 / 爱情山 / 普劳山）',
        '维多达伦山谷、巴托克火山口、波滕神庙、细沙呼啸海、天线宝宝绿色草原'
      ],
      includes: [
        '1台4x4加长底盘越野吉普（容纳多达9名成年旅客）',
        '熟练掌握布罗莫复杂越野路况的专业资深高山司机',
        '吉普车全程往返燃油费用',
        'TNBTS国家公园官方正规门票及高山救援保险（最多包含9位宾客）',
        '大本营停车费与国家公园管理费',
        '单反/微单摄影与精彩短视频拍摄（适用于包含摄影的套餐）'
      ],
      excludes: [
        '大本营以外接送（可选配玛琅或巴图市区接送小巴）',
        '沙海骑马代步费用',
        '个人就餐及饮料消费',
        '付费公共洗手间',
        '外籍游客国家公园门票官方附加费（25.5万印尼盾/人）'
      ],
      highlights: [
        '全员9人同乘一车，共享欢声笑语，氛围更亲密',
        '相比租用两台标准四驱吉普，大幅节省团费成本',
        '完整游览布罗莫火山口全部5大经典自然与人文名胜'
      ],
      meetingPoint: '玛琅古布克拉卡大本营（可升级玛琅/巴图市区上门接送）',
      meetingPoints: [
        '大本营：玛琅县 Jln. Raya Gubugklakah no 147',
        '可选玛琅市区上门接送（每台专车限6人，附加30万印尼盾）',
        '可选巴图市区上门接送（每台专车限6人，附加40万印尼盾）'
      ],
      tips: [
        '由于9座加长吉普全景区数量极度稀缺，强烈建议至少提前7天预约锁车'
      ],
      itinerary: [
        { time: '00:00 - 02:30', activity: '集合 / 上门接驳', description: '在大本营集合或在玛琅/巴图酒店接驾换乘。' },
        { time: '03:30 - 06:00', activity: '全员同乘观赏日出', description: '9人同乘加长吉普直达观景台，共赏金色晨曦照亮云海。' },
        { time: '06:00 - 09:30', activity: '火山口五大景点探索', description: '游览维多达伦悬崖、近距离观赏火山口、波滕神庙、沙海与天线宝宝草原。' },
        { time: '10:00 - 12:30', activity: '安全返回大本营/市区', description: '乘车返回大本营或接驳专车送回市区酒店。' }
      ],
      recommendedFor: '7至9人中型家庭、大学同学同窗会、公司部门团建及好友抱团出行。'
    },
    'sewa-trail-sukapura': {
      title: '苏卡普拉布罗莫越野摩托租赁（KLX / CRF / WR）',
      subtitle: '骑乘强劲越野摩托驰骋于细沙呼啸的火山沙海与天线宝宝起伏山丘。',
      badge: '越野探险',
      duration: '12小时（全天）',
      departureTime: '灵活自定（上午 / 下午）',
      startLocationName: '苏卡普拉庞越',
      priceUnit: '/ 台（12小时租期）',
      description: '骑乘性能卓越的川崎 KLX 150、本田 CRF 150L 或雅马哈 WR 155R 专业越野摩托车，在松软的火山沙海与维多达伦绝壁下释放肾上腺素。',
      destinations: [
        '细沙呼啸海（Lautan Pasir Berbisik）',
        '布罗莫火山口山脚与边缘',
        '天线宝宝草原群丘',
        '维多达伦神圣绝壁通道'
      ],
      includes: [
        '1台150cc专业越野摩托（川崎 KLX / 本田 CRF / 雅马哈 WR）',
        '专业越野全盔（DOT/SNI认证）+ 防风防尘护目镜',
        '专业护膝与护肘防摔护具（全套身体防护）',
        '车辆交付时已加满燃油'
      ],
      excludes: [
        'TNBTS国家公园入园门票',
        '沙海路线专属专业领队 / 向导（可选配）'
      ],
      highlights: [
        '车辆性能卓越，深齿越野菠萝胎专为火山松散沙地设计',
        '配备全套专业安全护具与头盔，保障骑行安全',
        '无固定枯燥线路限制，自由纵横广袤火山盆地'
      ],
      meetingPoint: '苏卡普拉越野摩托租赁大本营 (Sukapura Probolinggo)',
      meetingPoints: [
        '苏卡普拉越野摩托租赁大本营 (Sukapura Probolinggo)'
      ],
      tips: [
        '强烈建议穿戴高帮靴或硬底运动鞋，以便在沙地中稳健控车'
      ],
      itinerary: [
        { time: '07:00 - 08:00', activity: '验车交付与安全宣讲', description: '检查车况、试戴头盔护具、讲解沙海越野骑行安全要点。' },
        { time: '08:00 - 16:00', activity: '火山口自由越野骑行', description: '在广袤沙海与天线宝宝草原间尽情体验越野轰鸣的快感。' },
        { time: '16:30', activity: '归还车辆至大本营', description: '返回苏卡普拉大本营办理还车手续。' }
      ],
      recommendedFor: '越野骑行狂热者、户外探险家以及渴望非同寻常刺激体验的年轻旅客。'
    },
    'bromo-picnic-savana': {
      title: '布罗莫天线宝宝草原雅致野餐尊享体验',
      subtitle: '在布罗莫郁郁葱葱的绿色草原上享用精致户外早餐，配备波西米亚地毯、原木矮桌及现做热腾腾BBQ/寿喜烧。',
      badge: '尊贵雅致野餐',
      duration: '晨光时段（07:00 - 11:00 WIB）',
      departureTime: '07:00 - 08:00 WIB',
      startLocationName: '布罗莫天线宝宝草原',
      priceUnit: '/ 人',
      description: '背靠维多达伦悬崖与壮丽布罗莫火山的奢华户外用餐体验。铺设波西米亚风编织地毯、低矮原木桌、精致印第安帐篷、柔软靠垫，由专属管家现场奉上热气腾腾的美食佳肴。',
      destinations: [
        '维多达伦山谷 / 天线宝宝绿色大草原'
      ],
      includes: [
        '奢华波西米亚布景：波西米亚地毯、原木矮桌、印第安帐篷、懒人豆袋及民族风抱枕',
        '精选热腾腾美食菜单（BBQ烧烤 / 寿喜烧冬阴功火锅 / 印尼传统美食）',
        '高山暖心热饮：现滤热咖啡、热红茶与爪哇老姜茶',
        '全程专属贴身野餐管家服务与成套精致瓷质餐具',
        '高颜值摄影拍照道具与原声音乐氛围'
      ],
      excludes: [
        '前往野餐地点的四驱吉普交通（可与吉普日出套餐搭配）',
        'TNBTS国家公园入园门票'
      ],
      highlights: [
        '布罗莫火爆全网的云端绝景户外奢华早餐体验',
        '8款由专业大厨研发的高品质热餐菜单现场温热供应',
        '贴心管家全程随侍，协助摆盘并提供专业拍照协助'
      ],
      meetingPoint: '布罗莫天线宝宝草原 / 维多达伦山谷',
      meetingPoints: [
        '布罗莫天线宝宝草原 / 维多达伦山谷'
      ],
      tips: [
        '建议穿着大地色系（Earth Tone）、米色或纯白休闲服饰，拍摄成片效果极佳'
      ],
      itinerary: [
        { time: '07:00 - 07:30', activity: '抵达野餐场地与迎宾', description: '管家亲切迎接并奉上热气腾腾的欢迎热饮。' },
        { time: '07:30 - 09:30', activity: '享用美食与大片拍摄', description: '在壮丽维多达伦悬崖前细细品味美食，拍摄充满仪式感的照片。' },
        { time: '10:00 - 10:30', activity: '微风小憩与圆满收官', description: '享受布罗莫高原微风拂面的宁静惬意，随后启程返回。' }
      ],
      recommendedFor: '情侣夫妻蜜月、网红摄影博主、闺蜜同行及注重浪漫仪式感的家庭聚会。'
    }
  }
};

/**
 * Returns a localized TourPackage object with titles, subtitles, durations, price units,
 * full itineraries, inclusions, exclusions, meeting points, and tips translated
 * into the active language (en/zh/id).
 */
export function getLocalizedPackage(pkg: TourPackage, lang: 'id' | 'en' | 'zh'): TourPackage {
  if (lang === 'id') {
    return {
      ...pkg,
      inclusions: pkg.includes || pkg.inclusions || [],
      exclusions: pkg.excludes || pkg.exclusions || [],
    };
  }

  // Look up normalized ID (handling alias for long-jeep)
  const lookupKey = pkg.id === 'bromo-long-jeep' ? 'long-jeep' : pkg.id;
  const trans = PACKAGE_FULL_TRANSLATIONS[lang]?.[lookupKey] || PACKAGE_FULL_TRANSLATIONS[lang]?.[pkg.id];

  if (!trans) {
    // Fallback if specific package key is not found
    return {
      ...pkg,
      priceUnit: lang === 'en' 
        ? (pkg.priceUnit.includes('orang') ? '/ person' : (pkg.priceUnit.includes('rombongan') || pkg.priceUnit.includes('grup') ? '/ group' : '/ unit'))
        : (pkg.priceUnit.includes('orang') ? '/ 人' : (pkg.priceUnit.includes('rombongan') || pkg.priceUnit.includes('grup') ? '/ 团' : '/ 台')),
      duration: lang === 'en' ? '1 Day Tour' : '1日游',
      inclusions: pkg.includes || pkg.inclusions || [],
      exclusions: pkg.excludes || pkg.exclusions || [],
    };
  }

  return {
    ...pkg,
    title: trans.title,
    subtitle: trans.subtitle,
    badge: trans.badge || pkg.badge,
    duration: trans.duration,
    departureTime: trans.departureTime,
    startLocationName: trans.startLocationName,
    priceUnit: trans.priceUnit,
    description: trans.description,
    destinations: trans.destinations || pkg.destinations,
    includes: trans.includes,
    inclusions: trans.includes,
    excludes: trans.excludes,
    exclusions: trans.excludes,
    highlights: trans.highlights || pkg.highlights,
    meetingPoint: trans.meetingPoint || pkg.meetingPoint,
    meetingPoints: trans.meetingPoints || pkg.meetingPoints,
    tips: trans.tips || pkg.tips,
    itinerary: trans.itinerary || pkg.itinerary,
    recommendedFor: trans.recommendedFor || pkg.recommendedFor,
  };
}

/**
 * Formats monetary amounts according to the active language:
 * id: Rp 275.000
 * en: IDR 275,000
 * zh: 275,000 印尼盾
 */
export function formatCurrencyByLang(amount: number, lang: 'id' | 'en' | 'zh'): string {
  if (lang === 'en') {
    return `IDR ${amount.toLocaleString('en-US')}`;
  }
  if (lang === 'zh') {
    return `${amount.toLocaleString('zh-CN')} 印尼盾`;
  }
  return `Rp ${amount.toLocaleString('id-ID')}`;
}
