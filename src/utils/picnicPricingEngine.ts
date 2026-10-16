import { PicnicPackage, PicnicLocation, PicnicAddon } from '../types/picnic';

export interface CalculatePicnicPricingParams {
  packageItem: PicnicPackage;
  paxCount: number;
  location?: PicnicLocation | null;
  selectedAddons?: PicnicAddon[];
}

export interface PicnicPricingResult {
  packagePrice: number;
  paxCount: number;
  packageSubtotal: number;
  surcharge: number;
  locationFee: number;
  addonsSubtotal: number;
  grandTotal: number;
  downPayment: number;
}

export function formatRupiah(value: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(value || 0);
}

export function calculatePicnicPricing({
  packageItem,
  paxCount,
  location,
  selectedAddons = []
}: CalculatePicnicPricingParams): PicnicPricingResult {
  const safePax = Math.max(1, paxCount || 1);
  const packagePrice = packageItem?.pricePerPax || 0;
  const packageSubtotal = packagePrice * safePax;

  // Surcharge adjustment for small groups (below 4 pax)
  let surcharge = 0;
  if (safePax === 1) {
    surcharge = 150000;
  } else if (safePax === 2) {
    surcharge = 100000;
  } else if (safePax === 3) {
    surcharge = 50000;
  }

  // Location fee / transport surcharge if applicable
  const locationFee = Number(location?.price ?? location?.transportFee ?? 0);

  // Addons total
  const addonsSubtotal = (selectedAddons || []).reduce((sum, addon) => {
    return sum + (Number(addon?.price) || 0);
  }, 0);

  const grandTotal = packageSubtotal + surcharge + locationFee + addonsSubtotal;
  const downPayment = Math.round(grandTotal * 0.3);

  return {
    packagePrice,
    paxCount: safePax,
    packageSubtotal,
    surcharge,
    locationFee,
    addonsSubtotal,
    grandTotal,
    downPayment
  };
}
