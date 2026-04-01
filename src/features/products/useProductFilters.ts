import { useMemo, useState } from 'react';
import { filterProducts, sortProducts } from '../../utils/filter';
import type { Product } from './data';

function useProductFilters(products: Product[]) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = useMemo(() => {
    const byFilter = filterProducts(products, { query, category });
    return sortProducts(byFilter, sortBy);
  }, [products, query, category, sortBy]);

  return {
    query,
    category,
    sortBy,
    setQuery,
    setCategory,
    setSortBy,
    filteredProducts
  };
}

export default useProductFilters;
