export interface Vendor {
  id: string;
  name: string;
  score: number;
}

export interface Product {
  id: string;
  sku: string;
  name: string;
  category: string;
  price: number;
  inventory: number;
  description: string | null;
  vendor: Vendor | null;
  images: string[];
}

export const productCatalog: Product[] = [
  {
    id: 'p-100',
    sku: 'SD-COF-100',
    name: 'Cold Brew Starter Kit',
    category: 'Beverage',
    price: 39.99,
    inventory: 18,
    description: 'Glass brewer, reusable filter, and grind guide.',
    vendor: { id: 'v-12', name: 'Urban Roast', score: 4.7 },
    images: ['https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600']
  },
  {
    id: 'p-101',
    sku: 'SD-DESK-204',
    name: 'Standing Desk Mat',
    category: 'Office',
    price: 69,
    inventory: 9,
    description: null,
    vendor: { id: 'v-22', name: 'Flow Works', score: 4.2 },
    images: ['https://images.unsplash.com/photo-1486946255434-2466348c2166?w=600']
  },
  {
    id: 'p-102',
    sku: 'SD-LGT-330',
    name: 'Monitor Light Bar',
    category: 'Office',
    price: 89.5,
    inventory: 0,
    description: 'USB-C powered light with auto dimmer.',
    vendor: { id: 'v-30', name: 'ClearView', score: 4.5 },
    images: ['https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600']
  },
  {
    id: 'p-103',
    sku: 'SD-WEL-410',
    name: 'Focus Journal Pack',
    category: 'Wellness',
    price: 24.25,
    inventory: 43,
    description: 'Three undated journals with monthly prompts.',
    vendor: { id: 'v-18', name: 'North Paper', score: 4.8 },
    images: []
  },
  {
    id: 'p-104',
    sku: 'SD-TRV-550',
    name: 'Weekend Tech Pouch',
    category: 'Travel',
    price: 31,
    inventory: 27,
    description: 'Expandable cable and charger organizer.',
    vendor: null,
    images: ['https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600']
  }
];
