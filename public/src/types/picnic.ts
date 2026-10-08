export type PicnicPackageType = 'selectable' | 'fixed';

export interface PicnicMenuItem {
  id: string;
  name: string;
  category: 'snack' | 'makanan' | 'dessert' | 'minuman' | 'free';
  description?: string;
  image?: string;
}

export interface PicnicMenuGroup {
  id: string;
  title: string;
  instruction: string;
  category: 'snack' | 'makanan' | 'dessert' | 'minuman';
  minSelect: number;
  maxSelect: number;
  options: string[]; // item names
}

export interface FixedSectionItem {
  sectionTitle: string;
  items: string[];
}

export interface PicnicPackage {
  id: string;
  name: string;
  pricePerPax: number;
  minPax: number;
  type: PicnicPackageType;
  badge?: string;
  shortDescription: string;
  highlights: string[];
  selectionGroups?: PicnicMenuGroup[];
  includedSections?: FixedSectionItem[];
  freeItems: string[];
  imageUrl: string;
  active: boolean;
}

export interface PicnicLocation {
  id: string;
  name: string;
  elevation?: string;
  transportFee: number;
  active: boolean;
  unavailableLabel?: string;
  description: string;
  imageUrl: string;
}

export interface PicnicAddon {
  id: string;
  name: string;
  category: 'tent' | 'birthday';
  price: number;
  description: string;
  requiresDetails?: boolean;
}

export interface BirthdayDetails {
  balloonColor?: string;
  letterText?: string;
  cakeText?: string;
}

export interface SelectedMenuItemQuantity {
  id: string;
  name: string;
  quantity: number;
}

export type SelectedMenuQuantities = Record<string, Record<string, number>>; // groupId -> { itemName: quantity }

export interface PicnicPricingBreakdown {
  packagePrice: number;
  paxCount: number;
  packageSubtotal: number;
  surcharge: number;
  locationFee: number;
  addonsSubtotal: number;
  grandTotal: number;
  downPayment: number;
}

export interface PicnicBookingPayload {
  bookingCode: string;
  bookingType: 'PICNIC';
  fullName: string;
  whatsappNumber: string;
  email: string;
  tripDate: string;
  packageId: string;
  packageName: string;
  packagePrice: number;
  paxCount: number;
  locationId: string;
  locationName: string;
  selectedMenuGroups: Record<string, string>;
  selectedMenuItems: string[];
  addons: Array<{
    id: string;
    name: string;
    price: number;
    details?: BirthdayDetails;
  }>;
  birthdayDetails?: BirthdayDetails;
  packageSubtotal: number;
  surcharge: number;
  locationTransportFee: number;
  addonsSubtotal: number;
  grandTotal: number;
  downPayment: number;
  paymentMethod: string;
  status: 'WAITING_DP' | 'DP_SUBMITTED' | 'VERIFIED' | 'CANCELLED';
  specialNotes?: string;
  createdAt: string;
}
