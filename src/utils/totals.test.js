import { describe, expect, it } from 'vitest';
import { calculateCartTotals } from './totals';

describe('calculateCartTotals', () => {
  it('adds subtotal, tax, and shipping', () => {
    const result = calculateCartTotals([
      { price: 10, quantity: 2 },
      { price: 5, quantity: 1 }
    ]);

    expect(result.subtotal).toBe(25);
    expect(result.shipping).toBe(7.99);
    expect(result.total).toBeCloseTo(35.115, 3);
  });
});
