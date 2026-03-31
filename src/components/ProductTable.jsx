import { formatMoney } from '../utils/format';

function ProductTable({ products }) {
  return (
    <section className="card">
      <h3 style={{ marginTop: 0 }}>Catalog Snapshot</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ textAlign: 'left', borderBottom: '1px solid #e2e8f0' }}>
            <th style={{ paddingBottom: 6 }}>Name</th>
            <th style={{ paddingBottom: 6 }}>Category</th>
            <th style={{ paddingBottom: 6 }}>Inventory</th>
            <th style={{ paddingBottom: 6 }}>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
              <td style={{ padding: '8px 0' }}>{product.name}</td>
              <td style={{ padding: '8px 0' }}>{product.category}</td>
              <td style={{ padding: '8px 0' }}>{product.inventory}</td>
              <td style={{ padding: '8px 0' }}>{formatMoney(product.price)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default ProductTable;
