import React from 'react';
import { Product } from '../types';
import { THEME } from '../constants';

interface ProductDetailViewProps {
  product: Product;
  onBack: () => void;
}

const ProductDetailView: React.FC<ProductDetailViewProps> = ({ product, onBack }) => {
  return (
    <div className={`min-h-screen ${THEME.colors.background} animate-fade-in`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Breadcrumb / Back */}
        <button 
          onClick={onBack}
          className="mb-8 flex items-center gap-2 text-sm font-medium uppercase text-gray-500 hover:text-black transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          Back to Shop
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Images Section */}
          <div className="flex flex-col gap-4">
            <div className="aspect-[3/4] w-full bg-gray-100 overflow-hidden">
               <img 
                 src={product.imageUrl} 
                 alt={product.name} 
                 className="w-full h-full object-cover"
               />
            </div>
            {/* Additional Thumbnails Grid */}
            <div className="grid grid-cols-2 gap-4">
              {product.detailImages.map((img, idx) => (
                <div key={idx} className="aspect-[3/4] bg-gray-100 overflow-hidden">
                  <img src={img} alt={`${product.name} detail ${idx}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Details Section */}
          <div className="sticky top-24 h-fit">
             <h1 className={`text-3xl md:text-4xl ${THEME.fonts.display} mb-4`}>
               {product.name}
             </h1>
             
             <p className="text-xl font-medium mb-8">
               {product.price.toFixed(2)} {product.currency}
             </p>

             <div className="prose prose-sm text-gray-600 mb-8">
               <p>{product.description}</p>
             </div>
              {/*
             <div className="flex flex-col gap-4">
                <button 
                  onClick={() => document.getElementById('order-instructions')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full py-4 bg-black text-white uppercase font-bold tracking-widest hover:bg-gray-800 transition-colors"
                >
                  How to Buy
                </button>
             </div>

             <div id="order-instructions" className="mt-12 p-6 bg-gray-50 border border-gray-100 rounded">
                <h3 className="font-bold uppercase mb-2 text-sm">Ordering Information</h3>
                <p className="text-sm text-gray-600 mb-4">
                  All our pieces are limited edition. To purchase this item, please note the name 
                  <strong> "{product.name}"</strong> and fill out the order form below the catalog on the main page.
                </p>
                <button 
                   onClick={onBack}
                   className="text-sm underline underline-offset-2 font-medium"
                >
                  Go to Order Form
                </button>
             </div>
              */}
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetailView;
