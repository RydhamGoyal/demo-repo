import { toTitleCase } from './format';

export interface Product {
  id: string;
  sku: string;
  name: string;
  category: string;
  price: number;
  inventory: number;
  description: string | null;
  vendor: { id: string; name: string; score: number } | null;
  images: string[];
}

export interface FilterOptions {
  query?: string;
  category?: string;
}

export type SortMode = 'price-asc' | 'price-desc' | 'inventory-desc' | 'name-asc';

export function filterProducts(products: Product[], options: FilterOptions = {}): Product[] {
  const query = options.query?.trim().toLowerCase() || '';
  const category = options.category || 'all';

  return products.filter((product) => {
    const matchesCategory = category === 'all' || product.category === category;
    const haystack = `${product.name} ${product.sku} ${product.description || ''}`.toLowerCase();
    const matchesQuery = query.length === 0 || haystack.includes(query);
    return matchesCategory && matchesQuery;
  });
}

export function sortProducts(products: Product[], mode: string): Product[] {
  const list = [...products];

  switch (mode) {
    case 'price-asc':
      return list.sort((a, b) => a.price - b.price);
    case 'price-desc':
      return list.sort((a, b) => b.price - a.price);
    case 'inventory-desc':
      return list.sort((a, b) => b.inventory - a.inventory);
    default:
      return list.sort((a, b) => toTitleCase(a.name).localeCompare(toTitleCase(b.name)));
  }
}
