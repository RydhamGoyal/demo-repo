function ProductFilters({
  query,
  category,
  sortBy,
  categories,
  onQueryChange,
  onCategoryChange,
  onSortChange
}) {
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
          <select value={sortBy} onChange={(event) => onSortChange(event.target.value)}>
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
