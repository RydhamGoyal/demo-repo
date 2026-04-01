import { SortMode } from '../../types/product';

interface ProductFiltersProps {
  query: string;
  category: string;
  sortBy: SortMode;
  categories: string[];
  onQueryChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onSortChange: (value: SortMode) => void;
}

function ProductFilters({
  query,
  category,
  sortBy,
  categories,
  onQueryChange,
  onCategoryChange,
  onSortChange
}: ProductFiltersProps) {
  return (
    <section className="card" style={{ marginBottom: 16 }}>
      <div className="grid" style={{ gridTemplateColumns: '2fr 1fr 1fr' }}>
        <label className="stack">
          Search
          <input
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Search products or SKU"
          />
        </label>
        <label className="stack">
          Category
          <select value={category} onChange={(event) => onCategoryChange(event.target.value)}>
            <option value="all">All Categories</option>
            {categories.map((entry) => (
              <option key={entry} value={entry}>
                {entry}
              </option>
            ))}
          </select>
        </label>
        <label className="stack">
          Sort
          <select value={sortBy} onChange={(event) => onSortChange(event.target.value as SortMode)}>
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="inventory-desc">Inventory</option>
          </select>
        </label>
      </div>
    </section>
  );
}

export default ProductFilters;
