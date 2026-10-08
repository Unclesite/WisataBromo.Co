import { PicnicPackage, PicnicLocation, PicnicAddon, PicnicPricingBreakdown } from '../types/picnic';

export interface CalculatePicnicPricingParams {
  packageItem: PicnicPackage;
  paxCount: number;
  location?: PicnicLocation | null;
  selectedAddons?: PicnicAddon[];
}

/**
 * Single Source of Truth for Picnic Experience Pricing.
 * JEEP is strictly excluded from this calculation.
 */
export function calculatePicnicPricing({
  packageItem,
  paxCount,
  location,
  selectedAddons = []
}: CalculatePicnicPricingParams): PicnicPricingBreakdown {
  const safePax = Math.max(1, Number(paxCount) || 1);
  const packagePrice = packageItem.pricePerPax;

  // 1. Package Subtotal
  const packageSubtotal = packagePrice * safePax;

  // 2. Surcharge based on Pax count:
  // 2 pax: surcharge Rp100.000
  // 3 pax: surcharge Rp50.000
  // 4 pax or more: surcharge Rp0
  let surcharge = 0;
  if (safePax === 2) {
    surcharge = 100000;
  } else if (safePax === 3) {
    surcharge = 50000;
  } else if (safePax === 1) {
    surcharge = 150000; // Defensive fallback if 1 pax
  } else {
    surcharge = 0;
  }

  // 3. Location Transport Fee (Property & Food logistics)
  // Only apply if location is active! Inactive locations (like Savana) are strictly 0.
  const locationFee = (location && location.active) ? location.transportFee : 0;

  // 4. Add-ons Subtotal
  const addonsSubtotal = selectedAddons.reduce((sum, item) => sum + item.price, 0);

  // 5. Grand Total (Package + Surcharge + Location Transport + Add-ons)
  const grandTotal = packageSubtotal + surcharge + locationFee + addonsSubtotal;

  // 6. Down Payment (30% DP)
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

export function formatRupiah(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(amount || 0);
}
