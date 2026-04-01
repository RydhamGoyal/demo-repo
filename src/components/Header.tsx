import { useCart } from '../features/cart/CartContext';

interface HeaderProps {
  activeView: string;
  onChangeView: (view: string) => void;
}

function Header({ activeView, onChangeView }: HeaderProps) {
  const { itemCount } = useCart();

  return (
    <header className="top-nav">
      <h1>ShopDirect Console</h1>
      <div className="button-row">
        <button
          className={`nav-button ${activeView === 'storefront' ? 'active' : ''}`}
          onClick={() => onChangeView('storefront')}
        >
          Storefront
        </button>
        <button
          className={`nav-button ${activeView === 'admin' ? 'active' : ''}`}
          onClick={() => onChangeView('admin')}
        >
          Admin
        </button>
        <span className="pill">Cart: {itemCount}</span>
      </div>
    </header>
  );
}

export default Header;
