// @vitest-environment jsdom
import { useEffect, useRef } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import CheckoutForm from './CheckoutForm';
import { CartProvider, useCart } from './CartContext';

function SeededCheckout() {
  return (
    <CartProvider>
      <SeedItem />
      <CartCountProbe />
      <CheckoutForm />
    </CartProvider>
  );
}

function SeedItem() {
  const { addItem } = useCart();
  const hasSeeded = useRef(false);

  useEffect(() => {
    if (hasSeeded.current) return;
    hasSeeded.current = true;
    addItem({ id: 'checkout-seed', name: 'Seed Item', price: 15 });
  }, [addItem]);

  return null;
}

function CartCountProbe() {
  const { itemCount } = useCart();
  return <p data-testid="cart-count">Count:{itemCount}</p>;
}

describe('CheckoutForm', () => {
  it('submits when email is valid and cart has items', () => {
    render(<SeededCheckout />);

    const button = /** @type {HTMLButtonElement} */ (screen.getByRole('button', { name: 'Place Order' }));
    expect(button.disabled).toBe(true);
    expect(screen.getByTestId('cart-count').textContent).toContain('1');

    fireEvent.change(screen.getByPlaceholderText('buyer@shopdirect.dev'), {
      target: { value: 'buyer@example.com' }
    });
    expect(button.disabled).toBe(false);
    fireEvent.click(button);

    expect(screen.getByText('Order submitted. A confirmation email will be sent shortly.')).toBeTruthy();
    expect(screen.getByTestId('cart-count').textContent).toContain('0');
  });
});
