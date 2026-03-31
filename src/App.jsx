import { useMemo, useState } from 'react';
import { CartProvider } from './features/cart/CartContext';
import Header from './components/Header';
import StorefrontPage from './pages/StorefrontPage';
import AdminDashboardPage from './pages/AdminDashboardPage';

function App() {
  const [view, setView] = useState('storefront');

  const activePage = useMemo(() => {
    if (view === 'admin') {
      return <AdminDashboardPage />;
    }

    return <StorefrontPage />;
  }, [view]);

  return (
    <CartProvider>
      <Header activeView={view} onChangeView={setView} />
      <main className="page-shell">{activePage}</main>
    </CartProvider>
  );
}

export default App;
