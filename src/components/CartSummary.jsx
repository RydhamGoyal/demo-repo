import { formatMoney } from '../utils/format';
import { calculateCartTotals } from '../utils/totals';

function CartSummary({ items }) {
  const totals = calculateCartTotals(items);

  return (
    <section className="card stack">
      <h3 style={{ margin: 0 }}>Order Summary</h3>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span>Subtotal</span>
        <span>{formatMoney(totals.subtotal)}</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span>Tax (8.5%)</span>
        <span>{formatMoney(totals.tax)}</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span>Shipping</span>
        <span>{totals.shipping === 0 ? 'Free' : formatMoney(totals.shipping)}</span>
      </div>
      <hr style={{ border: 0, borderTop: '1px solid #e2e8f0', width: '100%' }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700 }}>
        <span>Total</span>
        <span>{formatMoney(totals.total)}</span>
      </div>
    </section>
  );
}

export default CartSummary;
