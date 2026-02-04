import React from 'react';
import { Product } from '../types';
import { THEME } from '../constants';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div 
      className="group cursor-pointer flex flex-col gap-3 animate-fade-in" 
      onClick={() => onClick(product)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 w-full">
        <img 
          src={product.imageUrl} 
          alt={product.name}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        {/* Overlay effect on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
      </div>
      
      <div className="flex flex-col gap-1">
        <h3 className={`text-sm font-semibold uppercase ${THEME.colors.text}`}>
          {product.name}
        </h3>
        <p className={`text-sm ${THEME.colors.secondaryText}`}>
          {product.price.toFixed(2)} {product.currency}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
