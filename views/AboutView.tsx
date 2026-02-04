import React from 'react';
import { THEME } from '../constants';
import uldGruppiPiltFull from '../assets/uldgruppipiltFull.jpg';
import birgitImg from '../assets/owners/Birgit.jpeg';
import amandaImg from '../assets/owners/amanda.jpeg';
import teeleImg from '../assets/owners/teele.jpeg';
import urmeliImg from '../assets/owners/urmeli.jpeg';

const AboutView: React.FC = () => {
  const owners = [
    { name: 'Birgit', role: 'Tegevjuht', image: birgitImg },
    { name: 'Amanda', role: 'Turundus- ja müügijuht', image: amandaImg },
    { name: 'Teele', role: 'Finantsjuht', image: teeleImg },
    { name: 'Urmeli', role: 'Tootmisjuht', image: urmeliImg },
  ];

  return (
    <div className={`min-h-screen ${THEME.colors.background}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">

        {/* Intro Section */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h1 className={`text-5xl sm:text-6xl mb-12 ${THEME.fonts.display} tracking-tight`}>
            MEIST
          </h1>

          <div className="space-y-8 text-lg leading-relaxed text-gray-700">
            <p>
              Tere tulemast <span className="font-bold">SHREDI</span>.
            </p>
            <p>
              Oleme pühendunud meeskond, kes usub jätkusuutlikku moodi ja unikaalsesse disaini.
              Iga meie toode on valminud hoole ja armastusega.
            </p>
            <div className="my-16">
              <img
                 src={uldGruppiPiltFull}
                 alt="SHREDI meeskond"
                 className="w-full h-auto object-cover shadow-sm"
              />
              <p className="text-sm text-gray-400 mt-4 uppercase tracking-widest">Meie tiim Tallinna südames</p>
            </div>
          </div>
        </div>

        {/* owners Section */}
        <div className="mt-24 pt-16 border-t border-gray-100">
           <h2 className={`text-3xl text-center mb-16 ${THEME.fonts.display}`}>OMANIKUD</h2>

           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
              {owners.map((owner, index) => (
                <div key={index} className="group flex flex-col gap-4">
                   <div className="aspect-[3/4] bg-neutral-100 overflow-hidden relative border border-gray-50">
                  {/* IMAGE LOGIC START */}
                  {owner.image ? (
                    <img
                      src={owner.image}
                      alt={owner.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    /* Placeholder Icon (shown if no image is provided) */
                    <div className="absolute inset-0 flex items-center justify-center text-neutral-300">
                      <svg fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" className="w-12 h-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                      </svg>
                    </div>
                  )}
                  {/* IMAGE LOGIC END */}
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                   </div>
                   <div className="text-center sm:text-left">
                      <h3 className="font-bold uppercase text-sm tracking-wider">{owner.name}</h3>
                      <p className="text-xs text-gray-500 uppercase mt-1 leading-tight">{owner.role}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>

        {/* Credits / Helpers Section */}
        <div className="mt-32 py-16 border-t border-gray-100 text-center">
           <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-gray-400 mb-12">Aitäh toetajatele</h2>

           <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8">
              <div>
                 <span className="block text-[10px] uppercase tracking-widest text-gray-400 mb-2">Juhendaja</span>
                 <p className="text-lg font-medium">Astrid Maldre</p>
              </div>

              <div>
                 <span className="block text-[10px] uppercase tracking-widest text-gray-400 mb-2">Mentorid</span>
                 <p className="text-lg font-medium">Otto Jürgens</p>
                 <p className="text-lg font-medium">Sten Solovjov</p>
              </div>

              <div>
                 <span className="block text-[10px] uppercase tracking-widest text-gray-400 mb-2">Fotograaf</span>
                 <p className="text-lg font-medium">Uku S.</p>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default AboutView;