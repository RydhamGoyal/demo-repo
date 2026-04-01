import { useMemo } from 'react';
import CartSummary from '../components/CartSummary';
import ProductFilters from '../features/products/ProductFilters';
import ProductGrid from '../features/products/ProductGrid';
import { productCatalog } from '../features/products/data';
import useProductFilters from '../features/products/useProductFilters';
import { useCart } from '../features/cart/CartContext';
import CartDrawer from '../features/cart/CartDrawer';
import CheckoutForm from '../features/cart/CheckoutForm';

function StorefrontPage() {
  const { addItem, items } = useCart();

  const categories = useMemo(() => {
    return [...new Set(productCatalog.map((item) => item.category))];
  }, []);

  const {
    query,
    category,
    sortBy,
    filteredProducts,
    setQuery,
    setCategory,
    setSortBy
  } = useProductFilters(productCatalog);

  return (
    <section>
      <h2>Storefront</h2>
      <p className="muted">Internal demo storefront used by the ShopDirect merchandising team.</p>
      <ProductFilters
        query={query}
        category={category}
        sortBy={sortBy}
        categories={categories}
        onQueryChange={setQuery}
        onCategoryChange={setCategory}
        onSortChange={setSortBy}
      />
      <div className="layout-columns">
        <div className="stack">
          <ProductGrid products={filteredProducts} onAddToCart={addItem} />
        </div>
        <aside className="stack">
          <CartDrawer />
          <CartSummary items={items} />
          <CheckoutForm />
        </aside>
      </div>
    </section>
  );
}

export default StorefrontPage;
