import { Product } from './product';

export interface CartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
}

export type CartAction =
  | { type: 'add-item'; payload: CartItem }
  | { type: 'remove-item'; payload: { productId: string } }
  | { type: 'set-quantity'; payload: { productId: string; quantity: number } }
  | { type: 'clear' };

export interface CartState {
  items: CartItem[];
}

export interface CartTotals {
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
}

export interface CartContextValue {
  items: CartItem[];
  itemCount: number;
  addItem: (product: Pick<Product, 'id' | 'name' | 'price'>) => void;
  removeItem: (productId: string) => void;
  setQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}
