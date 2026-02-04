import React from 'react';
import { THEME } from '../constants';

const ContactView: React.FC = () => {
  return (
    <div className={`min-h-screen ${THEME.colors.background}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h1 className={`text-4xl sm:text-5xl mb-8 ${THEME.fonts.display}`}>
              KONTAKT
            </h1>
            <p className="text-xl text-gray-600 mb-12 font-light">
              On küsimusi suuruse, saatmise või tellimise kohta? Võta meiega ühendust!
            </p>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Email</h3>
                <a href="mailto:hello@shred.ee" className="text-xl hover:text-blue-600 transition-colors">shred.murg@gmail.com</a>
              </div>
              
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Telefon</h3>
                <a href="tel:+37255551234" className="text-xl hover:text-blue-600 transition-colors">+372 5910 7548</a>
              </div>

              <div>
                 <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Asume</h3>
                 <p className="text-xl">Tallinn, Eesti</p>

              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Socials</h3>
                <div className="flex gap-4">
                  <a target="_blank" href="https://www.instagram.com/of.shred?igsh=MTUwaGR5YmdpbzdwZA==" className="underline underline-offset-4 hover:text-blue-600">Instagram</a>
                  <a target="_blank" href="https://www.tiktok.com/@ofshred?_r=1&_t=ZN-93TGDnusLqw" className="underline underline-offset-4 hover:text-blue-600">Facebook</a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 sm:p-12 h-full flex flex-col justify-center items-start">
             <h3 className={`text-2xl ${THEME.fonts.display} mb-4`}>FAQ</h3>
             <ul className="space-y-6">
                <li>
                  <strong className="block text-sm uppercase mb-1">Do you ship internationally?</strong>
                  <p className="text-sm text-gray-600">Yes, we ship to most countries within the EU. Shipping costs are calculated at checkout.</p>
                </li>
                <li>
                  <strong className="block text-sm uppercase mb-1">How long does delivery take?</strong>
                  <p className="text-sm text-gray-600">Since items are finished by hand, allow 1-2 weeks for production plus shipping time.</p>
                </li>
                <li>
                  <strong className="block text-sm uppercase mb-1">Returns?</strong>
                  <p className="text-sm text-gray-600">We accept returns within 14 days of receipt if the item is unworn.</p>
                </li>
             </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactView;
