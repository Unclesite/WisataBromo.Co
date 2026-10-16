export interface PicnicLocation {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl?: string;
}

export interface PicnicAddon {
  id: string;
  name: string;
  price: number;
  description?: string;
}

export interface PicnicDecorationOption {
  id: string;
  name: string;
  imageUrl?: string;
  colorHex?: string;
}

export interface PicnicPackage {
  id: string;
  name: string;
  subtitle: string;
  tagline: string;
  badge?: string;
  pricePerPax: number;
  minPax: number;
  imageUrl?: string;
  features: string[];
}
