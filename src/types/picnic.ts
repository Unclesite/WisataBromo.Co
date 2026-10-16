export interface PicnicLocation {
  id: string;
  name: string;
  description: string;
  price?: number;
  imageUrl?: string;
  active?: boolean;
  elevation?: string;
  transportFee?: number;
  unavailableLabel?: string;
}

export interface PicnicAddon {
  id: string;
  name: string;
  price: number;
  description?: string;
  category?: string;
  requiresDetails?: boolean;
}

export interface PicnicDecorationOption {
  id: string;
  name: string;
  imageUrl?: string;
  colorHex?: string;
  themeColor?: string;
  pattern?: string;
  description?: string;
}

export interface PicnicMenuGroup {
  id?: string;
  title: string;
  instruction: string;
  options: string[];
  category?: string;
  minSelect?: number;
  maxSelect?: number;
}

export interface FixedSectionItem {
  id?: string;
  title?: string;
  sectionTitle?: string;
  items: string[];
}

export interface PicnicPackage {
  id: string;
  name: string;
  subtitle?: string;
  tagline?: string;
  badge?: string;
  pricePerPax: number;
  minPax: number;
  imageUrl?: string;
  features?: string[];
  type?: string;
  selectionGroups?: PicnicMenuGroup[];
  includedSections?: FixedSectionItem[];
  freeItems?: string[];
  shortDescription?: string;
  highlights?: string[];
  active?: boolean;
}

export interface BirthdayDetails {
  balloonColor?: string;
  letterText?: string;
  cakeText?: string;
}

export interface SelectedMenuItemQuantity {
  itemName?: string;
  name?: string;
  quantity: number;
}

export type SelectedMenuQuantities = Record<string, Record<string, number>>;

export interface PicnicPricingBreakdown {
  packagePrice?: number;
  paxCount?: number;
  packageSubtotal: number;
  surcharge: number;
  locationFee: number;
  addonsSubtotal: number;
  grandTotal: number;
  downPayment: number;
}
