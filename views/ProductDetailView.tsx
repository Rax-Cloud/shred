import React, { useState } from 'react';
import { Product } from '../types';
import { THEME, GOOGLE_FORM_EMBED_URL_SPECIAL } from '../constants';

// Extending the interface locally to handle the new flag without changing your types file immediately
interface ExtendedProduct extends Product {
  isSpecial?: boolean;
}

interface ProductDetailViewProps {
  product: ExtendedProduct;
  onBack: () => void;
}

const ProductDetailView: React.FC<ProductDetailViewProps> = ({ product, onBack }) => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  // Define colors for the special order view
  const specialColors = [
    { name: 'Roosa', className: 'bg-pink-400' },
    { name: 'Must', className: 'bg-black' },
    { name: 'Valge', className: 'bg-white border border-gray-200' },
    { name: 'Sinu valik', className: 'bg-gradient-to-br from-red-500 via-yellow-400 via-green-400 to-blue-500' }, // Rainbow
  ];

  return (
    <div className={`min-h-screen ${THEME.colors.background} animate-fade-in relative`}>

      {/* --- LIGHTBOX / MODAL START --- */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setActiveImage(null)}
        >
          {/* Close button */}
          <button
            className="absolute top-6 right-6 text-white text-3xl font-light hover:opacity-70"
            onClick={() => setActiveImage(null)}
          >
            ×
          </button>

          {/* Image */}
          <img
            src={activeImage}
            alt="Enlarged product"
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
      {/* --- LIGHTBOX / MODAL END --- */}

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
                  onClick={() => setActiveImage(product.imageUrl)}
                  className="w-full h-full object-cover cursor-zoom-in"
                />
            </div>
            {/* Additional Thumbnails Grid */}
            <div className="grid grid-cols-2 gap-4">
              {product.detailImages && product.detailImages.map((img, idx) => (
                <div key={idx} className="aspect-[3/4] bg-gray-100 overflow-hidden">
                  <img
                      src={img}
                      alt={`${product.name} detail ${idx}`}
                      onClick={() => setActiveImage(img)}
                      className="w-full h-full object-cover cursor-zoom-in"
                    />
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

              {/* Size Guide (Visible for all products) */}
            <div className="mt-12">
              <h3 className="font-bold uppercase mb-4 text-sm tracking-wide">Suurus</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-8 gap-3">
                {['S', 'M', 'L', 'XL', '2XL', '3XL', '4XL'].map((size) => (
                  <div
                    key={size}
                    className="flex items-center justify-center
                               border border-gray-300 rounded-lg
                               py-4 text-sm font-medium
                               text-gray-800 bg-white
                               tracking-wide select-none"
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>

            {/* --- SPECIAL ORDER SECTION --- */}
            {product.isSpecial && (
              <>
                {/* 1. Color Selection */}
                <div className="mt-12 mb-12">
                  <h3 className="font-bold uppercase mb-4 text-sm tracking-wide">Disaini värvi valik</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {specialColors.map((color) => (
                      <div
                        key={color.name}
                        className="flex items-center gap-3
                                  border border-gray-300 rounded-lg
                                  p-3 text-sm font-medium
                                  text-gray-800 bg-white
                                  select-none cursor-pointer hover:border-gray-800 transition-colors"
                      >
                        {/* Color Square */}
                        <div className={`w-6 h-6 rounded-md shadow-sm border border-black/10 flex-shrink-0 ${color.className}`} />

                        {/* Label */}
                        <span>{color.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2. Embedded Order Form Section
                <div className="mt-24 pt-12 border-t border-gray-200">
                  <div className="text-center mb-8">
                    <h2 className={`text-2xl ${THEME.fonts.display} mb-2`}>Valmis tellima?</h2>
                    <p className="text-gray-600">Täida eritellimuse vorm, et esitada oma tellimus.</p>
                  </div>

                  <div className="w-full bg-gray-50 rounded-lg overflow-hidden flex justify-center shadow-inner">
                     <iframe
                       src={GOOGLE_FORM_EMBED_URL_SPECIAL}
                       width="640"
                       height="800"
                       className="w-full max-w-4xl border-none"
                       title="Order Form"
                     >
                       Loading…
                     </iframe>
                  </div>
                </div> */}
              </>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailView;