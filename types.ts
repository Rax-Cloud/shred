export enum Page {
  SHOP = 'SHOP',
  ABOUT = 'ABOUT',
  CONTACT = 'CONTACT'
}

export interface Product {
  id: string;
  name: string;
  price: number;
  currency: string;
  description: string;
  imageUrl: string;
  detailImages: string[];
}

export interface ThemeConfig {
  colors: {
    background: string;
    text: string;
    accent: string;
    secondaryText: string;
  };
  fonts: {
    main: string;
    display: string;
  };
}