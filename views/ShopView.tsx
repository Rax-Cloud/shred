import React from 'react';
import { Product } from '../types';
import { THEME, GOOGLE_FORM_EMBED_URL } from '../constants';

// --- IMPORTS ---
import uldpiltFull from "../assets/uldPiltFullReduced.jpg";
import navyPink from "../assets/hoodies/SHRED_navy_roosa.jpg";
import navyWhite from "../assets/hoodies/SHRED_navy_valge.jpg";
import grayPink from "../assets/hoodies/SHRED_hall_roosa.jpg";
import grayWhite from "../assets/hoodies/SHRED_hall_valge.jpg";
import navyPocket from "../assets/hoodies/navy/navy_pocket.jpg";
import navySisetasku from "../assets/hoodies/navy/navy_sisetasku.jpg";
import navyEest from "../assets/hoodies/navy/navy_eest.jpg";
import grayEest from "../assets/hoodies/hall/hall_eest2.jpg";
import grayKaetasku from "../assets/hoodies/hall/hall_kaetasku.jpg";
import graySisetasku from "../assets/hoodies/hall/hall_sisetasku.jpg";
import navyPinkFront from "../assets/hoodies/navy/tumesinine_roosa_eest.jpg";
import grayWhiteFront from "../assets/hoodies/hall/tumehall_valgega_eest.jpg";
import grayLining from "../assets/hoodies/hall/hall_vooder.jpg";
import specialHoodie from "../assets/hoodies/special/hele_hall_tagant.jpg";
import specialBoard from "../assets/hoodies/special/hele_hall_laud.jpg";
import specialFront from "../assets/hoodies/special/hele_hall_eest.jpg";
import specialBackBoard from "../assets/hoodies/special/hele_hall_tagant_laud.jpg";
import specialColors from "../assets/hoodies/special/special_colors.jpg";


interface ShopViewProps {
  onProductSelect: (product: Product) => void;
}

// --- DATA: NORMAL ORDERS ---
const HOODIE_VARIANTS = [
  {
    id: 'hoodies_lining',
    title: 'Pusad voodriga',
    items: [
      { id: 'hoodie-navy-pink', color: 'Tumesinine roosa disainiga', image: navyPink, price: 108.00, description: 'Heavyweight pusa mäekaardi ja veekindla telefonitasku ning eemaldatava sisevoodriga.', detailImages: [navyPinkFront, navyPocket, navySisetasku, grayLining]},
      { id: 'hoodie-navy-white', color: 'Tumesinine valge disainiga', image: navyWhite, price: 108.00, description: 'Heavyweight pusa mäekaardi ja veekindla telefonitasku ning eemaldatava sisevoodriga.', detailImages: [navyEest, navyPocket, navySisetasku, grayLining] },
      { id: 'hoodie-gray-pink', color: 'Tumehall roosa disainiga', image: grayPink, price: 108.00, description: 'Heavyweight pusa mäekaardi ja veekindla telefonitasku ning eemaldatava sisevoodriga.', detailImages: [grayEest, grayKaetasku, graySisetasku, grayLining] },
      { id: 'hoodie-gray-white', color: 'Tumehall valge disainiga', image: grayWhite, price: 108.00, description: 'Heavyweight pusa mäekaardi ja veekindla telefonitasku ning eemaldatava sisevoodriga.', detailImages: [grayWhiteFront, grayKaetasku, graySisetasku, grayLining] },
    ],
  },
  {
    id: 'hoodies_no_lining',
    title: 'Pusad voodrita',
    items: [
      { id: 'no_line_hood-navy-pink', color: 'Tumesinine roosa disainiga', image: navyPink, price: 98.00, description: 'Heavyweight pusa mäekaardi ja veekindla telefonitaskuga.', detailImages: [navyPinkFront, navyPocket, navySisetasku] },
      { id: 'no_line_hood-navy-white', color: 'Tumesinine valge disainiga', image: navyWhite, price: 98.00, description: 'Heavyweight pusa mäekaardi ja veekindla telefonitaskuga.', detailImages: [navyEest, navyPocket, navySisetasku] },
      { id: 'no_line_hood-gray-pink', color: 'Tumehall roosa disainiga', image: grayPink, price: 98.00, description: 'Heavyweight pusa mäekaardi ja veekindla telefonitaskuga.', detailImages: [grayEest, grayKaetasku, graySisetasku] },
      { id: 'no_line_hood-gray-white', color: 'Tumehall valge disainiga', image: grayWhite, price: 98.00, description: 'Heavyweight pusa mäekaardi ja veekindla telefonitaskuga.', detailImages: [grayWhiteFront, grayKaetasku, graySisetasku] },
    ],
  },
];

// --- DATA: SPECIAL ORDERS (FIXED STRUCTURE) ---
// We make this an Array containing a Section, which contains Items
const SPECIAL_VARIANTS = [
  {
    id: 'special_order_section',
    title: 'Eritellimus',
    items: [
      {
        id: 'special_order_custom',
        color: 'Vali pusa värv ise',
        image: specialHoodie,
        price: 105.00,
        description: 'Heavyweight pusa mäekaardi ja veekindla telefonitaskuga.',
        detailImages: [specialColors, specialBoard, specialFront, specialBackBoard],
        // You can use this property in ProductDetailView to show extra stuff
        isSpecial: true
      }
    ]
  }
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

        {/* --- STANDARD PRODUCTS GRID --- */}
        <div className="space-y-16 font-medium font-poppins" style={{ fontFamily: 'Poppins, sans-serif' }}>
          {HOODIE_VARIANTS.map((variant) => (
            <div key={variant.id}>
              <h2 className="text-2xl font-semibold mb-6 antialiased transform-gpu ">
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
                        style={{ transform: 'perspective(1px) translateZ(0)'}}
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

        {/* --- SPECIAL ORDERS GRID --- */}
        <div className="mt-16 space-y-16 font-medium font-poppins" style={{ fontFamily: 'Poppins, sans-serif' }}>
          {SPECIAL_VARIANTS.map((variant) => (
            <div key={variant.id}>
              <h2 className="text-2xl font-semibold mb-6 antialiased transform-gpu ">
                {variant.title}
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 antialiased transform-gpu">
                {variant.items.map((item) => (
                  <button
                    key={item.id}
                    onClick={() =>
                      onProductSelect({
                        id: item.id,
                        name: item.color,
                        imageUrl: item.image,
                        price: item.price,
                        currency: 'EUR',
                        description: item.description,
                        detailImages: item.detailImages,
                        // Pass a flag if you need to detect this in Detail View
                        // @ts-ignore (if Product type doesn't have custom fields yet)
                        isSpecial: item.isSpecial
                      } as Product)
                    }
                    className="group text-left"
                  >
                    <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                      <img
                        src={item.image}
                        alt={item.color}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform antialiased transform-gpu"
                        style={{ transform: 'perspective(1px) translateZ(0)'}}
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

        {/* Embedded Order Form Section*/}
        <div className="mt-24 pt-12 border-t border-gray-200">
          <div className="text-center mb-8">
            <h2 className={`text-2xl ${THEME.fonts.display} mb-2`}>Valmis tellima?</h2>
            <p className="text-gray-600">Täida vorm, et esitada eeltellimus.</p>
          </div>

          <div className="w-full bg-gray-50 rounded-lg overflow-hidden flex justify-center shadow-inner">
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