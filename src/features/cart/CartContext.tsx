import { createContext, useContext, useMemo, useReducer, ReactNode } from 'react';
import { Product } from '../products/data';

export interface CartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

type CartAction =
  | { type: 'add-item'; payload: CartItem }
  | { type: 'remove-item'; payload: { productId: string } }
  | { type: 'set-quantity'; payload: { productId: string; quantity: number } }
  | { type: 'clear' };

interface CartContextValue {
  items: CartItem[];
  itemCount: number;
  addItem: (product: Pick<Product, 'id' | 'name' | 'price'>) => void;
  removeItem: (productId: string) => void;
  setQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'add-item': {
      const existingIndex = state.items.findIndex((item) => item.productId === action.payload.productId);
      if (existingIndex === -1) {
        return {
          ...state,
          items: [...state.items, action.payload]
        };
      }

      const nextItems = [...state.items];
      const existing = nextItems[existingIndex];
      nextItems[existingIndex] = {
        ...existing,
        quantity: existing.quantity + action.payload.quantity
      };
      return { ...state, items: nextItems };
    }
    case 'remove-item':
      return {
        ...state,
        items: state.items.filter((item) => item.productId !== action.payload.productId)
      };
    case 'set-quantity':
      return {
        ...state,
        items: state.items.map((item) =>
          item.productId === action.payload.productId
            ? { ...item, quantity: Math.max(1, action.payload.quantity) }
            : item
        )
      };
    case 'clear':
      return { ...state, items: [] };
    default:
      return state;
  }
}

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  const value = useMemo(() => {
    const itemCount = state.items.reduce((sum, line) => sum + line.quantity, 0);

    return {
      items: state.items,
      itemCount,
      addItem: (product: Pick<Product, 'id' | 'name' | 'price'>) =>
        dispatch({
          type: 'add-item',
          payload: {
            productId: product.id,
            name: product.name,
            price: product.price,
            quantity: 1
          }
        }),
      removeItem: (productId: string) => dispatch({ type: 'remove-item', payload: { productId } }),
      setQuantity: (productId: string, quantity: number) =>
        dispatch({ type: 'set-quantity', payload: { productId, quantity } }),
      clearCart: () => dispatch({ type: 'clear' })
    };
  }, [state.items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider.');
  }
  return context;
}
