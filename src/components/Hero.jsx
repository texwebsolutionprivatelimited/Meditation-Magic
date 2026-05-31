import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import neelamPortrait from '../assets/neelam_portrait.jpg';
import mahaLaxmiWealthImg from '../assets/maha_laxmi_wealth.png';
import angelicHealingImg from '../assets/angelic_healing.png';
import unicornHealingImg from '../assets/unicorn_healing.png';
import dragonProtectionImg from '../assets/dragon_protection.png';

export default function Hero({ onOpenModal }) {
  const navigate = useNavigate();
  const [activeId, setActiveId] = useState('g'); // 'g' (Grounded Belief) active by default

  const panels = [
    {
      id: 'm',
      title: 'Mind Clarity',
      letter: 'M',
      desc: 'Clear money worries and bring prosperity into your life with the blessings of Goddess Laxmi and Lord Kuber.',
      image: mahaLaxmiWealthImg,
      path: '/courses/maha-laxmi-workshop',
      icons: (
        <svg className="w-16 h-40 filter drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]" viewBox="0 0 100 240" xmlns="http://www.w3.org/2000/svg">
          {/* Heart */}
          <path d="M50 45 C48 30, 32 30, 32 46 C32 62, 50 78, 50 78 C50 78, 68 62, 68 46 C68 30, 52 30, 50 45 Z" fill="none" stroke="#F5D28E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          {/* Airplane */}
          <path d="M50 120 L50 95 L58 108 L62 108 L50 90 L50 85 L38 90 L42 108 L46 108 L50 95 Z" fill="none" stroke="#F5D28E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M30 105 L70 105" stroke="#F5D28E" strokeWidth="2" strokeLinecap="round" />
          {/* Money Bag */}
          <path d="M50 150 C44 150, 40 155, 40 162 C40 172, 45 178, 50 178 C55 178, 60 172, 60 162 C60 155, 56 150, 50 150 Z" fill="none" stroke="#F5D28E" strokeWidth="2.5" />
          <path d="M43 154 L57 154" stroke="#F5D28E" strokeWidth="2" />
          <text x="47" y="167" fill="#F5D28E" className="text-xs font-bold font-sans">$</text>
        </svg>
      )
    },
    {
      id: 'a',
      title: 'Aligned Emotions',
      letter: 'A',
      desc: 'Connect with 16 Archangels for deep peace, physical healing, and strong mental clarity.',
      image: angelicHealingImg,
      path: '/courses/angelic-healing',
      icons: (
        <svg className="w-16 h-40 filter drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]" viewBox="0 0 100 240" xmlns="http://www.w3.org/2000/svg">
          {/* Happy Face */}
          <circle cx="50" cy="40" r="16" stroke="#F5D28E" strokeWidth="2" fill="none" />
          <circle cx="44" cy="36" r="1.5" fill="#F5D28E" />
          <circle cx="56" cy="36" r="1.5" fill="#F5D28E" />
          <path d="M44 44 Q50 50 56 44" stroke="#F5D28E" strokeWidth="2" fill="none" />

          {/* Neutral Face */}
          <circle cx="50" cy="110" r="16" stroke="#F5D28E" strokeWidth="2" fill="none" />
          <circle cx="44" cy="106" r="1.5" fill="#F5D28E" />
          <circle cx="56" cy="106" r="1.5" fill="#F5D28E" />
          <line x1="42" y1="116" x2="58" y2="116" stroke="#F5D28E" strokeWidth="2" />

          {/* Sad Face */}
          <circle cx="50" cy="180" r="16" stroke="#F5D28E" strokeWidth="2" fill="none" />
          <circle cx="44" cy="176" r="1.5" fill="#F5D28E" />
          <circle cx="56" cy="176" r="1.5" fill="#F5D28E" />
          <path d="M44 186 Q50 180 56 186" stroke="#F5D28E" strokeWidth="2" fill="none" />
        </svg>
      )
    },
    {
      id: 'g',
      title: 'Grounded Belief',
      letter: 'G',
      desc: 'True power comes from unshakable faith, stand firm in what you know is possible.',
      image: neelamPortrait,
      path: '/courses/kundalini-kriya',
      icons: null // Focus on the teacher profile portrait
    },
    {
      id: 'i',
      title: 'Inspired Action',
      letter: 'I',
      desc: 'Heal childhood worries, let go of old bad memories, and fill your heart with pure love and peace.',
      image: unicornHealingImg,
      path: '/courses/unicorn-therapy',
      icons: (
        <svg className="w-24 h-40 filter drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]" viewBox="0 0 120 240" xmlns="http://www.w3.org/2000/svg">
          {/* Glowing Arrow curving upwards right */}
          <path d="M20 200 C40 180, 50 140, 60 80 C68 40, 85 30, 95 30" stroke="#F5D28E" strokeWidth="4.5" fill="none" strokeLinecap="round" />
          <path d="M78 30 L97 28 L95 47" stroke="#F5D28E" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      )
    },
    {
      id: 'c',
      title: 'Conscious Gratitude',
      letter: 'C',
      desc: 'Build a highly strong protective energy shield around you to stay safe from daily stress and bad moods.',
      image: dragonProtectionImg,
      path: '/courses/dragon-mastery',
      icons: (
        <svg className="w-16 h-40 filter drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]" viewBox="0 0 100 240" xmlns="http://www.w3.org/2000/svg">
          {/* Glowing Lotus outline */}
          <path d="M50 90 C55 110, 70 120, 85 120 C70 125, 55 130, 50 150 C45 130, 30 125, 15 120 C30 120, 45 110, 50 90 Z" fill="none" stroke="#F5D28E" strokeWidth="2" strokeLinecap="round" />
          <path d="M35 140 Q50 155 65 140" stroke="#F5D28E" strokeWidth="2" fill="none" />
        </svg>
      )
    }
  ];

  const desktopTitleMap = {
    m: 'Maha Laxmi Wealth',
    a: 'Angelic Healing',
    g: 'Grounded Kriya Yoga',
    i: 'Inner child & Unicorns',
    c: 'Cosmic Dragon Protection'
  };

  const desktopPanels = panels.map(p => ({
    ...p,
    title: desktopTitleMap[p.id] || p.title
  }));

  const mobilePanels = panels;

  return (
    <>
      {/* ─── DESKTOP/LAPTOP VERSION (100% Original Layout & Titles) ─── */}
      <section className="hidden lg:flex relative w-full h-[calc(100vh-72px)] mt-[72px] flex-row overflow-hidden bg-cosmic-darkest">
        {desktopPanels.map((p) => (
          <div
            key={p.id}
            className="relative w-1/5 h-full flex flex-col justify-end p-4 sm:p-6 pb-8 sm:pb-12 text-center group border-r border-white/5 transition-all duration-700 hover:w-[28%] overflow-hidden cursor-pointer"
            onClick={() => navigate(p.path)}
          >
            {/* Panel Background Image */}
            <div className="absolute inset-0 z-0">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover filter brightness-[0.35] group-hover:brightness-100 group-hover:scale-105 transition-all duration-700"
              />
              {/* Rich dark overlay gradient for maximum text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/20"></div>
            </div>

            {/* Central Neon Icons Overlay */}
            {p.icons && (
              <div className="absolute inset-0 flex items-center justify-center pb-24 z-10 pointer-events-none group-hover:scale-105 transition-transform duration-700">
                {p.icons}
              </div>
            )}

            {/* Bottom Text and Labels */}
            <div className="relative z-10 flex flex-col items-center justify-end space-y-2 mt-auto">
              {/* Title & Abbreviation */}
              <h3 className="font-serif text-lg sm:text-2xl font-extrabold text-white tracking-wide leading-tight group-hover:text-gold transition-colors duration-300">
                {p.title}
              </h3>

              <span className="font-serif text-lg font-bold text-gold tracking-widest block">
                ({p.letter})
              </span>

              {/* Description Paragraph */}
              <p className="text-[11px] text-white/95 font-medium leading-relaxed max-w-[240px] mx-auto mt-2">
                {p.desc}
              </p>
            </div>

            {/* Golden Hover Indicator Bar at the bottom */}
            <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-gold/50 via-gold to-gold/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
          </div>
        ))}
      </section>

      {/* ─── MOBILE/TABLET VERSION (Interactive Tab Accordion & M.A.G.I.C. Pillars) ─── */}
      <section className="relative w-full h-[48vh] min-h-[330px] md:h-[58vh] md:min-h-[420px] mt-16 flex lg:hidden flex-row overflow-hidden bg-[#1E003B]">
        {mobilePanels.map((p) => {
          const isActive = activeId === p.id;
          return (
            <div
              key={p.id}
              onMouseEnter={() => setActiveId(p.id)}
              onClick={(e) => {
                if (activeId !== p.id) {
                  e.preventDefault();
                  setActiveId(p.id);
                } else {
                  navigate(p.path);
                }
              }}
              className="relative flex flex-col justify-end p-2 sm:p-4 pb-6 sm:pb-12 text-center transition-all duration-700 ease-out cursor-pointer overflow-hidden border-r border-white/5 last:border-r-0"
              style={{
                flexGrow: isActive ? 4.5 : 0.7,
                flexShrink: 1,
                flexBasis: '0%',
              }}
            >
              {/* Panel Background Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={p.image}
                  alt={p.title}
                  className={`w-full h-full object-cover filter transition-all duration-700 ease-out ${isActive ? 'brightness-[0.75] scale-105' : 'brightness-[0.25] scale-100'
                    }`}
                />
                {/* Rich dark overlay gradient for maximum text contrast */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/10 transition-opacity duration-700 ease-out ${isActive ? 'opacity-90' : 'opacity-65'
                  }`}></div>
              </div>

              {/* Central Neon Icons Overlay */}
              {p.icons && (
                <div className={`absolute inset-0 flex items-center justify-center pb-24 z-10 pointer-events-none transition-all duration-700 ease-out ${isActive ? 'opacity-100 scale-100' : 'opacity-20 scale-75'
                  }`}>
                  {p.icons}
                </div>
              )}

              {/* Bottom Text and Labels */}
              <div className="relative z-10 flex flex-col items-center justify-end h-full w-full mt-auto">
                {isActive ? (
                  // Expanded Active Content Layout
                  <div className="flex flex-col items-center space-y-2 animate-fade-in w-full px-2">
                    <h3 className="font-serif text-sm sm:text-2xl font-extrabold text-white tracking-wide leading-tight group-hover:text-gold transition-colors duration-300">
                      {p.title}
                    </h3>
                    <span className="font-serif text-xs sm:text-lg font-bold text-gold tracking-widest block">
                      ({p.letter})
                    </span>
                    <p className="text-[9px] sm:text-xs text-white/90 font-medium leading-relaxed max-w-[240px] mx-auto mt-2">
                      {p.desc}
                    </p>
                  </div>
                ) : (
                  // Collapsed Inactive Content Layout (Vertical Rotation) - Aligned to bottom (justify-end)
                  <div className="flex flex-col items-center justify-end space-y-4 h-full animate-fade-in select-none w-full pb-2 sm:pb-4">
                    <div className="w-full flex justify-center items-center">
                      <div 
                        className="font-serif text-[10px] sm:text-base font-bold text-white/70 tracking-widest uppercase text-center"
                        style={{
                          writingMode: 'vertical-rl',
                          transform: 'rotate(180deg)',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        {p.title}
                      </div>
                    </div>
                    <span className="font-serif text-[10px] sm:text-sm font-extrabold text-gold/60 tracking-widest block text-center">
                      ({p.letter})
                    </span>
                  </div>
                )}
              </div>

              {/* Golden Active Indicator Bar at the bottom */}
              <div className={`absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-gold/50 via-gold to-gold/50 transition-transform duration-500 origin-center ${isActive ? 'scale-x-100' : 'scale-x-0'
                }`}></div>

            </div>
          );
        })}
      </section>
    </>
  );
}
