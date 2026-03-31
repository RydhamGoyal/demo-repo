// @vitest-environment jsdom
import { act, renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import useProductFilters from './useProductFilters';
import { productCatalog } from './data';

describe('useProductFilters', () => {
  it('filters by query and category', () => {
    const { result } = renderHook(() => useProductFilters(productCatalog));

    act(() => {
      result.current.setQuery('desk');
      result.current.setCategory('Office');
    });

    expect(result.current.filteredProducts).toHaveLength(1);
    expect(result.current.filteredProducts[0].name).toBe('Standing Desk Mat');
  });

  it('sorts products by price descending', () => {
    const { result } = renderHook(() => useProductFilters(productCatalog));

    act(() => {
      result.current.setSortBy('price-desc');
    });

    const prices = result.current.filteredProducts.map((product) => product.price);
    expect(prices[0]).toBeGreaterThanOrEqual(prices[1]);
    expect(prices[1]).toBeGreaterThanOrEqual(prices[2]);
  });
});
