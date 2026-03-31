import { createContext, useContext, useMemo, useReducer } from 'react';

const CartContext = createContext(null);

function cartReducer(state, action) {
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

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  const value = useMemo(() => {
    const itemCount = state.items.reduce((sum, line) => sum + line.quantity, 0);

    return {
      items: state.items,
      itemCount,
      addItem: (product) =>
        dispatch({
          type: 'add-item',
          payload: {
            productId: product.id,
            name: product.name,
            price: product.price,
            quantity: 1
          }
        }),
      removeItem: (productId) => dispatch({ type: 'remove-item', payload: { productId } }),
      setQuantity: (productId, quantity) =>
        dispatch({ type: 'set-quantity', payload: { productId, quantity } }),
      clearCart: () => dispatch({ type: 'clear' })
    };
  }, [state.items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider.');
  }
  return context;
}
