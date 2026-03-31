# ShopDirect Frontend Demo Repo

This is a fictional React storefront/admin frontend for **ShopDirect**.  
It intentionally uses JavaScript and JSX only, with patterns that are realistic for a small startup team that postponed TypeScript migration.

## What the app includes

- Storefront product listing with search/category/sort filters
- Product cards with optional/null fields in data
- Cart context with reducer state updates
- Checkout form and order summary calculations
- Lightweight admin dashboard and catalog table
- Shared utility functions for formatting, filtering, and cart totals

## Stack

- React 18
- Vite 6
- ESLint
- Vitest (small utility test included)

## Getting started

```bash
cd demo-repo
npm install
npm run dev
```

Then open the local URL shown by Vite (usually `http://localhost:5173`).

## Available scripts

- `npm run dev` - start local dev server
- `npm run build` - production build
- `npm run preview` - preview production build
- `npm run lint` - lint JS/JSX source files
- `npm run test` - run unit tests once

## Suggested migration batches

### Batch 1 - Product listing components

- `src/components/ProductCard.jsx`
- `src/features/products/ProductGrid.jsx`
- `src/features/products/ProductFilters.jsx`
- `src/features/products/useProductFilters.js`
- `src/features/products/data.js`

### Batch 2 - Cart and checkout UI

- `src/features/cart/CartContext.jsx`
- `src/features/cart/CartDrawer.jsx`
- `src/features/cart/CheckoutForm.jsx`
- `src/components/CartSummary.jsx`
- `src/pages/StorefrontPage.jsx`

### Batch 3 - Shared utilities and hooks

- `src/utils/format.js`
- `src/utils/filter.js`
- `src/utils/totals.js`
- `src/components/Header.jsx`
- `src/pages/AdminDashboardPage.jsx`

See `MIGRATION_PLAN.md` for a risk-focused migration strategy and proof-of-concept recommendation.
