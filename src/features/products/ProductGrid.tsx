import ProductCard from '../../components/ProductCard';
import { Product } from './data';

interface ProductGridProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

function ProductGrid({ products, onAddToCart }: ProductGridProps) {
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
