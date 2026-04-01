import { toTitleCase } from './format';
import type { Product } from '../features/products/data';

interface FilterOptions {
  query?: string;
  category?: string;
}

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
