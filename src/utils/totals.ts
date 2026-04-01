import type { Product } from '../features/products/data';

interface CartLineItem {
  price: number;
  quantity: number;
}

interface CartTotals {
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
}

export function calculateCartTotals(items: CartLineItem[]): CartTotals {
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
