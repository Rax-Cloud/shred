import { Product, ThemeConfig } from './types';

// ==========================================
// THEME CONFIGURATION
// Change these values to alter the global look
// ==========================================
export const THEME: ThemeConfig = {
  colors: {
    background: 'bg-white',
    text: 'text-neutral-900',
    accent: 'text-blue-600',
    secondaryText: 'text-neutral-500',
  },
  fonts: {
    main: 'font-sans', // Corresponds to Tailwind's font-sans
    display: 'font-bold uppercase tracking-tighter', // For headers
  },
};

export const GOOGLE_FORM_EMBED_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfD_GL9E8d_E8d_E8d_E8d/viewform?embedded=true"; 

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'HANDPRINT HOODIE - CHARCOAL',
    price: 65.00,
    currency: 'EUR',
    description: 'Heavyweight organic cotton hoodie featuring a unique denim handprint patch on the back. Oversized fit for maximum comfort.',
    imageUrl: 'https://picsum.photos/800/1000?random=1',
    detailImages: ['https://picsum.photos/800/1000?random=1', 'https://picsum.photos/800/1000?random=11']
  },
  {
    id: '2',
    name: 'HANDPRINT HOODIE - BLACK',
    price: 65.00,
    currency: 'EUR',
    description: 'Classic black silhouette with our signature distressed denim hand motif. Durable, stylish, and perfect for everyday wear.',
    imageUrl: 'https://picsum.photos/800/1000?random=2',
    detailImages: ['https://picsum.photos/800/1000?random=2', 'https://picsum.photos/800/1000?random=22']
  },
  {
    id: '3',
    name: 'HANDPRINT HOODIE - CREAM',
    price: 65.00,
    currency: 'EUR',
    description: 'Soft cream colorway featuring the iconic blue denim handprint. Made from 100% sustainable materials.',
    imageUrl: 'https://picsum.photos/800/1000?random=3',
    detailImages: ['https://picsum.photos/800/1000?random=3', 'https://picsum.photos/800/1000?random=33']
  },
  {
    id: '4',
    name: 'DENIM PATCH CREWNECK',
    price: 55.00,
    currency: 'EUR',
    description: 'A lighter alternative to our hoodies, this crewneck features subtle denim patchwork details on the elbows and chest.',
    imageUrl: 'https://picsum.photos/800/1000?random=4',
    detailImages: ['https://picsum.photos/800/1000?random=4', 'https://picsum.photos/800/1000?random=44']
  },
];
