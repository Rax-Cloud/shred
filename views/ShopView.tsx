import React from 'react';
import { Product } from '../types';
import ProductCard from '../components/ProductCard';
import { THEME, MOCK_PRODUCTS, GOOGLE_FORM_EMBED_URL } from '../constants';

import uldpiltFull from "../assets/uldpiltFull.jpg";
import navyPink from "../assets/hoodies/SHRED_navy_roosa.jpg";
import navyWhite from "../assets/hoodies/SHRED_navy_valge.jpg";
import grayPink from "../assets/hoodies/SHRED_hall_roosa.jpg";
import grayWhite from "../assets/hoodies/SHRED_hall_valge.jpg"
import navyPocket from "../assets/hoodies/navy/navy_pocket.jpg"
import navySisetasku from "../assets/hoodies/navy/navy_sisetasku.jpg"
import navyEest from "../assets/hoodies/navy/navy_eest.jpg"
import grayEest from "../assets/hoodies/hall/hall_eest.jpg"
import grayKaetasku from "../assets/hoodies/hall/hall_kaetasku.jpg"
import graySisetasku from "../assets/hoodies/hall/hall_sisetasku.jpg"

interface ShopViewProps {
  onProductSelect: (product: Product) => void;
}

const HOODIE_VARIANTS = [
  {
    id: 'hoodies_lining',
    title: 'Pusad voodriga',
    items: [
      { id: 'hoodie-navy-pink', color: 'Tumesinine roosa disainiga', image: navyPink, price: 98.00, description: 'Kvaliteetne voodriga pusa SHRED kollektsioonist.', detailImages: [navyEest, navyPocket, navySisetasku ] },
      { id: 'hoodie-navy-white', color: 'Tumesinine valge disainiga', image: navyWhite, price: 98.00, description: 'Kvaliteetne voodriga pusa SHRED kollektsioonist.', detailImages: [navyPocket, navySisetasku] },
      { id: 'hoodie-gray-pink', color: 'Hall roosa disainiga', image: grayPink, price: 98.00, description: 'Kvaliteetne voodriga pusa SHRED kollektsioonist.', detailImages: [grayEest, grayKaetasku, graySisetasku] },
      { id: 'hoodie-gray-white', color: 'Hall valge disainiga', image: grayWhite, price: 98.00, description: 'Kvaliteetne voodriga pusa SHRED kollektsioonist.', detailImages: [] },
    ],
  },
  {
    id: 'hoodies_no_lining',
    title: 'Pusad voodrita',
    items: [
      { id: 'no_line_hood-navy-pink', color: 'Tumesinine roosa disainiga', image: navyPink, price: 88.00, description: 'Kvaliteetne voodrita pusa SHRED kollektsioonist.', detailImages: [navyPocket, navySisetasku] },
      { id: 'no_line_hood-navy-white', color: 'Tumesinine valge disainiga', image: navyWhite, price: 88.00, description: 'Kvaliteetne voodrita pusa SHRED kollektsioonist.', detailImages: [navyPocket, navySisetasku] },
      { id: 'no_line_hood-gray-pink', color: 'Hall roosa disainiga', image: grayPink, price: 88.00, description: 'Kvaliteetne voodrita pusa SHRED kollektsioonist.', detailImages: [] },
      { id: 'no_line_hood-gray-white', color: 'Hall valge disainiga', image: grayWhite, price: 88.00, description: 'Kvaliteetne voodrita pusa SHRED kollektsioonist.', detailImages: [] },
    ],
  },
];

const ShopView: React.FC<ShopViewProps> = ({ onProductSelect }) => {
  return (
    <div className={`min-h-screen ${THEME.colors.background}`}>
              {/* FULL-WIDTH HERO IMAGE */}
      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <img
          src={uldpiltFull}
          alt="SHREDI meeskond uld"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        
        {/* Page Title */}
        <h1 className={`text-4xl sm:text-5xl mb-8 ${THEME.fonts.display} ${THEME.colors.text}`}>
          Tooted
        </h1>

        {/* Toolbar (Filter / Count)
        <div className="flex justify-between items-center mb-6 pt-4 border-t border-gray-100">
          <button className="flex items-center gap-2 text-sm font-medium uppercase hover:opacity-60 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
            </svg>
            Filter
          </button>
          <span className="text-xs font-medium text-gray-500 uppercase">
            {MOCK_PRODUCTS.length} Products
          </span>
        </div>*/}

        {/* Product Grid
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6">
          {MOCK_PRODUCTS.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onClick={onProductSelect} 
            />
          ))}
        </div>*/}
          {/* Product Grid */}

          <div className="space-y-16" >
              {HOODIE_VARIANTS.map((variant) => (
                <div key={variant.id}>
                  <h2 className="text-2xl font-semibold mb-6 antialiased transform-gpu">
                    {variant.title}
                  </h2>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 antialiased transform-gpu">
                    {variant.items.map((item) => (
                      <button
                        key={item.id}
                        onClick={() =>
                          onProductSelect({
                            id: item.id,
                            name: `${variant.title} – ${item.color}`,
                            imageUrl: item.image,
                            price: item.price,
                            currency: 'EUR',
                            description: item.description,
                            detailImages: item.detailImages,
                          } as Product)
                        }
                        className="group text-left"
                      >
                        <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                          <img
                            src={item.image}
                            alt={item.color}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform antialiased transform-gpu"
                            style={{
                                transform: 'perspective(1px) translateZ(0)'}}
                          />
                        </div>

                        <p className="mt-2 text-sm font-medium">
                          {item.color}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>


        {/* Embedded Order Form Section */}
        <div className="mt-24 pt-12 border-t border-gray-200">
          <div className="text-center mb-8">
            <h2 className={`text-2xl ${THEME.fonts.display} mb-2`}>Ready to Order?</h2>
            <p className="text-gray-600">Fill out the form below to place your custom order.</p>
          </div>
          
          <div className="w-full bg-gray-50 rounded-lg overflow-hidden flex justify-center shadow-inner">
             {/* Note: This is a placeholder iframe. Replace src in constants.ts with your real Google Form embed link */}
             <iframe 
               src={GOOGLE_FORM_EMBED_URL} 
               width="640" 
               height="800" 
               className="w-full max-w-4xl border-none"
               title="Order Form"
             >
               Loading…
             </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopView;
