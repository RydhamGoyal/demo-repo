import { productCatalog } from '../features/products/data';
import ProductTable from '../components/ProductTable';
import { countLowInventory } from '../utils/totals';

function AdminDashboardPage() {
  const lowInventoryCount = countLowInventory(productCatalog, 10);
  const vendorsMissing = productCatalog.filter((item) => !item.vendor).length;

  return (
    <section className="stack">
      <h2>Admin Dashboard</h2>
      <p className="muted">
        Lightweight internal panel. Useful for migration demos because data includes nullable values.
      </p>
      <div className="grid" style={{ gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' }}>
        <article className="card stack">
          <h4 style={{ margin: 0 }}>Total SKUs</h4>
          <strong style={{ fontSize: '1.4rem' }}>{productCatalog.length}</strong>
        </article>
        <article className="card stack">
          <h4 style={{ margin: 0 }}>Low Inventory (&lt; 10)</h4>
          <strong style={{ fontSize: '1.4rem' }}>{lowInventoryCount}</strong>
        </article>
        <article className="card stack">
          <h4 style={{ margin: 0 }}>Missing Vendor Link</h4>
          <strong style={{ fontSize: '1.4rem' }}>{vendorsMissing}</strong>
        </article>
      </div>
      <ProductTable products={productCatalog} />
    </section>
  );
}

export default AdminDashboardPage;
