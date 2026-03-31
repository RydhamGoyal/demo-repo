# ShopDirect TypeScript Migration Plan

This plan is designed for tooling demos that split migration into batches and run autonomous sessions per batch.

## Batch 1 - Product listing surface (recommended first PoC)

**Goal:** establish TSX patterns on mostly presentational components with bounded state logic.

### Files

- `src/components/ProductCard.jsx`
- `src/features/products/ProductGrid.jsx`
- `src/features/products/ProductFilters.jsx`
- `src/features/products/useProductFilters.js`
- `src/features/products/data.js`

### Risk profile

- `ProductCard.jsx` - **Medium** (nullable `description`, optional image array, event callback props)
- `ProductGrid.jsx` - **Low** (simple prop pass-through + list rendering)
- `ProductFilters.jsx` - **Medium** (multiple callback props and controlled inputs)
- `useProductFilters.js` - **Medium** (state types + derived list logic)
- `data.js` - **High** (nested objects, nullable `vendor`, nullable `description`, optional images)

### Success criteria

- All files converted to `.tsx`/`.ts` with explicit interfaces/types
- Product data model typed with nullable/optional fields represented accurately
- No runtime regressions in filtering, sorting, and add-to-cart interactions
- `npm run build`, `npm run test`, and `npm run lint` pass

## Batch 2 - Cart and checkout UI

**Goal:** type reducer actions/state and form data flow.

### Files

- `src/features/cart/CartContext.jsx`
- `src/features/cart/CartDrawer.jsx`
- `src/features/cart/CheckoutForm.jsx`
- `src/components/CartSummary.jsx`
- `src/pages/StorefrontPage.jsx`

### Risk profile

- `CartContext.jsx` - **High** (reducer action unions, context defaults, quantity update semantics)
- `CartDrawer.jsx` - **Medium** (cart item props and quantity actions)
- `CheckoutForm.jsx` - **Medium** (form state and submit constraints)
- `CartSummary.jsx` - **Low** (typed totals object consumption)
- `StorefrontPage.jsx` - **Medium** (cross-feature typed integration)

### Success criteria

- Cart reducer actions are strongly typed with discriminated unions
- Cart context cannot be consumed outside provider without type-safe guardrails
- Checkout form handles optional notes and required email without type assertions
- End-to-end cart + checkout behavior remains unchanged

## Batch 3 - Shared utilities and admin wiring

**Goal:** close out base models and utility typing used across the app.

### Files

- `src/utils/format.js`
- `src/utils/filter.js`
- `src/utils/totals.js`
- `src/components/Header.jsx`
- `src/pages/AdminDashboardPage.jsx`

### Risk profile

- `format.js` - **Low** (primitive function signatures)
- `filter.js` - **Medium** (typed filter option object + sort mode union)
- `totals.js` - **Medium** (numeric return contracts)
- `Header.jsx` - **Low** (simple props + context consumption)
- `AdminDashboardPage.jsx` - **Medium** (nullable vendor handling)

### Success criteria

- Shared product/cart utility types are centralized and reused
- Sort/filter mode values are restricted to valid string unions
- Admin dashboard handles nullable vendor data with no unsafe access
- Lint/build/test pass after conversion

## Recommended first Devin proof of concept (1-2 files)

Start with:

1. `src/components/ProductCard.jsx`
2. `src/features/products/ProductGrid.jsx`

Why these first:

- They are highly visible and easy to validate manually
- They introduce prop typing patterns without reducer/context complexity
- They create a low-friction baseline for batch automation quality checks
