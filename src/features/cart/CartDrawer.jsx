import { useMemo } from 'react';
import { formatMoney } from '../../utils/format';
import { useCart } from './CartContext';

function CartDrawer() {
  const { items, setQuantity, removeItem } = useCart();

  const hasItems = items.length > 0;
  const estimatedTotal = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items]
  );

  return (
    <section className="card stack">
      <h3 style={{ margin: 0 }}>Cart</h3>
      {!hasItems && <p className="muted">Your cart is empty.</p>}
      {items.map((item) => (
        <div
          key={item.productId}
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
        >
          <div>
            <div>{item.name}</div>
            <div className="muted">{formatMoney(item.price)}</div>
          </div>
          <div className="button-row">
            <button onClick={() => setQuantity(item.productId, item.quantity - 1)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => setQuantity(item.productId, item.quantity + 1)}>+</button>
            <button onClick={() => removeItem(item.productId)}>Remove</button>
          </div>
        </div>
      ))}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6 }}>
        <strong>Estimated</strong>
        <strong>{formatMoney(estimatedTotal)}</strong>
      </div>
    </section>
  );
}

export default CartDrawer;
