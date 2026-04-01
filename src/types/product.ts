export interface Vendor {
  id: string;
  name: string;
  score: number;
}

export interface Product {
  id: string;
  sku: string;
  name: string;
  category: string;
  price: number;
  inventory: number;
  description: string | null;
  vendor: Vendor | null;
  images: string[];
}

export type SortMode = 'featured' | 'price-asc' | 'price-desc' | 'inventory-desc';

export interface FilterOptions {
  query?: string;
  category?: string;
}
