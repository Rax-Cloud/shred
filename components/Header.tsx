import React from 'react';
import { Page } from '../types';
import { THEME } from '../constants';
import logo from '../assets/shred_logo_smaller.png';

interface HeaderProps {
  activePage: Page;
  onNavigate: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ activePage, onNavigate }) => {
  const getLinkClass = (page: Page) => {
    const base = "cursor-pointer hover:opacity-70 transition-opacity text-sm font-medium uppercase tracking-wide";
    return activePage === page ? `${base} underline underline-offset-4 decoration-2` : base;
  };

  return (
    <header className={`sticky top-0 z-50 w-full ${THEME.colors.background} border-b border-gray-100`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo and Main Nav */}
        <div className="flex items-center gap-12">
          {/* Logo */}
            <div
              onClick={() => onNavigate(Page.SHOP)}
              className="cursor-pointer flex items-center"
            >
              <img
                src={logo}
                alt="SHRED logo"
                className="h-8 w-auto"
              />
            </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => onNavigate(Page.SHOP)} 
              className={getLinkClass(Page.SHOP)}
            >
              pood
            </button>
            <button 
              onClick={() => onNavigate(Page.ABOUT)} 
              className={getLinkClass(Page.ABOUT)}
            >
              meist
            </button>
            <button 
              onClick={() => onNavigate(Page.CONTACT)} 
              className={getLinkClass(Page.CONTACT)}
            >
              kontakt
            </button>
          </nav>
        </div>

        {/* Right Side - Currency/Cart Placeholder
        <div className="flex items-center gap-4 text-sm font-medium">
          <span className="hidden sm:block">ESTONIA | EUR €</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
          </svg>

        </div>
        */}
      </div>
      
      {/* Mobile Nav (Simple version) */}
      <div className="md:hidden flex justify-around py-2 border-t border-gray-100 bg-white">
        <button onClick={() => onNavigate(Page.SHOP)} className={getLinkClass(Page.SHOP)}>pood</button>
        <button onClick={() => onNavigate(Page.ABOUT)} className={getLinkClass(Page.ABOUT)}>meist</button>
        <button onClick={() => onNavigate(Page.CONTACT)} className={getLinkClass(Page.CONTACT)}>kontakt</button>
      </div>
    </header>
  );
};

export default Header;
