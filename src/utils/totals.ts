import { CartTotals } from '../types/cart';
import { Product } from '../types/product';

export function calculateCartTotals(items: { price: number; quantity: number }[]): CartTotals {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.085;
  const shipping = subtotal >= 100 || subtotal === 0 ? 0 : 7.99;
  const total = subtotal + tax + shipping;

  return {
    subtotal,
    tax,
    shipping,
    total
  };
}

export function countLowInventory(products: Product[], threshold: number = 5): number {
  return products.filter((product) => product.inventory < threshold).length;
}
