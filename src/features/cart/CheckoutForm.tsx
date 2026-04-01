import { useMemo, useState, type FormEvent } from 'react';
import { useCart } from './CartContext';

function CheckoutForm() {
  const { items, clearCart } = useCart();
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const canSubmit = useMemo(() => {
    return items.length > 0 && email.includes('@');
  }, [email, items.length]);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!canSubmit) return;

    setIsSubmitted(true);
    clearCart();
    setNotes('');
  }

  return (
    <form className="card stack" onSubmit={onSubmit}>
      <h3 style={{ margin: 0 }}>Checkout</h3>
      <label className="stack">
        Email for receipt
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="buyer@shopdirect.dev"
        />
      </label>
      <label className="stack">
        Delivery notes (optional)
        <textarea
          rows={3}
          value={notes}
          onChange={(event) => setNotes(event.target.value)}
          placeholder="Leave at front desk, ring buzzer #302..."
        />
      </label>
      <button type="submit" disabled={!canSubmit}>
        Place Order
      </button>
      {isSubmitted ? (
        <p>Order submitted. A confirmation email will be sent shortly.</p>
      ) : (
        <p className="muted">Use any valid email and at least one cart item.</p>
      )}
    </form>
  );
}

export default CheckoutForm;
