import { formatMoney } from '../utils/format';
import type { Product } from '../features/products/data';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const disabled = product.inventory <= 0;
  const primaryImage = product.images?.[0] || 'https://via.placeholder.com/300x200?text=No+Image';

  return (
    <article className="card stack">
      <img src={primaryImage} alt={product.name} style={{ width: '100%', borderRadius: 8 }} />
      <div>
        <h3 style={{ margin: 0 }}>{product.name}</h3>
        <p className="muted" style={{ margin: '4px 0' }}>
          SKU: {product.sku}
        </p>
      </div>
      <p style={{ margin: 0 }}>{product.description || 'No description yet.'}</p>
      <div className="button-row" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <span className="price">{formatMoney(product.price)}</span>
        <button disabled={disabled} onClick={() => onAddToCart(product)}>
          {disabled ? 'Out of Stock' : 'Add to Cart'}
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
