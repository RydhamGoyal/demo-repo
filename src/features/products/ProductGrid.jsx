import ProductCard from '../../components/ProductCard';

function ProductGrid({ products, onAddToCart }) {
  if (products.length === 0) {
    return <p className="muted">No products matched your current filters.</p>;
  }

  return (
    <section className="grid products">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </section>
  );
}

export default ProductGrid;
