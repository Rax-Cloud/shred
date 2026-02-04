import React, { useState } from 'react';
import { Page, Product } from './types';
import Header from './components/Header';
import ShopView from './views/ShopView';
import AboutView from './views/AboutView';
import ContactView from './views/ContactView';
import ProductDetailView from './views/ProductDetailView';

const App: React.FC = () => {
  // State for simple navigation
  const [currentPage, setCurrentPage] = useState<Page>(Page.SHOP);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    setSelectedProduct(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToShop = () => {
    setSelectedProduct(null);
    if (currentPage !== Page.SHOP) {
      setCurrentPage(Page.SHOP);
    }
  };

  // Render logic based on state
  const renderContent = () => {
    if (selectedProduct) {
      return (
        <ProductDetailView 
          product={selectedProduct} 
          onBack={handleBackToShop} 
        />
      );
    }

    switch (currentPage) {
      case Page.SHOP:
        return <ShopView onProductSelect={handleProductSelect} />;
      case Page.ABOUT:
        return <AboutView />;
      case Page.CONTACT:
        return <ContactView />;
      default:
        return <ShopView onProductSelect={handleProductSelect} />;
    }
  };

  return (
    <div className="font-sans text-neutral-900 antialiased selection:bg-black selection:text-white">
      <Header activePage={currentPage} onNavigate={handleNavigate} />
      
      <main>
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-100 mt-auto bg-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-4">
           <span className="font-bold text-xl italic tracking-tighter">SHRED</span>
           <p className="text-xs text-gray-400 uppercase">© {new Date().getFullYear()} SHRED. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
