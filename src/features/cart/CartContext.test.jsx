// @vitest-environment jsdom
import { renderHook, act } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { CartProvider, useCart } from './CartContext';

const wrapper = ({ children }) => <CartProvider>{children}</CartProvider>;

const sampleProduct = {
  id: 'demo-1',
  name: 'Demo Product',
  price: 12.5
};

describe('CartContext behavior', () => {
  it('adds, updates, removes, and clears cart items', () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.addItem(sampleProduct);
      result.current.addItem(sampleProduct);
    });
    expect(result.current.items).toHaveLength(1);
    expect(result.current.items[0].quantity).toBe(2);

    act(() => {
      result.current.setQuantity(sampleProduct.id, 0);
    });
    expect(result.current.items[0].quantity).toBe(1);

    act(() => {
      result.current.removeItem(sampleProduct.id);
    });
    expect(result.current.items).toHaveLength(0);

    act(() => {
      result.current.addItem(sampleProduct);
      result.current.clearCart();
    });
    expect(result.current.items).toHaveLength(0);
  });
});
