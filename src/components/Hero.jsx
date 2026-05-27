import React from 'react';
import { useNavigate } from 'react-router-dom';
import neelamPortrait from '../assets/neelam_portrait.jpg';
import mahaLaxmiWealthImg from '../assets/maha_laxmi_wealth.png';
import angelicHealingImg from '../assets/angelic_healing.png';
import unicornHealingImg from '../assets/unicorn_healing.png';
import dragonProtectionImg from '../assets/dragon_protection.png';

export default function Hero({ onOpenModal }) {
  const navigate = useNavigate();

  const panels = [
    {
      id: 'm',
      title: 'Maha Laxmi Wealth',
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
      title: 'Angelic Healing',
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
      title: 'Grounded Kriya Yoga',
      letter: 'G',
      desc: 'Calm your mind, improve focus, and feel active through simple breathing exercises guided by Neelam Arora.',
      image: neelamPortrait,
      path: '/courses/kundalini-kriya',
      icons: null // Empty overlay as shown in screenshot (focus on the teacher profile)
    },
    {
      id: 'i',
      title: 'Inner child & Unicorns',
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
      title: 'Cosmic Dragon Protection',
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

  return (
    <section className="relative w-full min-h-screen md:min-h-0 md:h-[calc(100vh-72px)] mt-[72px] flex flex-col md:flex-row overflow-hidden bg-cosmic-darkest">

      {/* 5 Vertical MAGIC Panels */}
      {panels.map((p) => (
        <div
          key={p.id}
          className="relative w-full md:w-1/5 min-h-[260px] h-[38vh] sm:h-[42vh] md:h-full flex flex-col justify-end p-4 sm:p-6 pb-8 sm:pb-12 text-center group border-b md:border-b-0 md:border-r border-white/5 transition-all duration-700 hover:md:w-[28%] overflow-hidden cursor-pointer"
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

      {/* Embedded WhatsApp Floating Chat Button (Bottom Right matching screenshot) */}
      <a
        href="https://wa.me/919999999999" // Representative WhatsApp link
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-30 p-2.5 sm:p-3 bg-[#25D366] hover:bg-[#20BA56] text-white rounded-full shadow-2xl transition-all hover:scale-110 active:scale-95 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-6 h-6 sm:w-8 sm:h-8 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 2.72 1.49 4.8 1.49 5.53 0 10.03-4.5 10.03-10.03 0-2.66-1.04-5.16-2.92-7.04C16.67 1.74 14.17.7 11.51.7c-5.54 0-10.05 4.51-10.05 10.04 0 1.9.49 3.19 1.4 4.77l-1.02 3.73 3.8-1.08z" />
        </svg>
      </a>

    </section>
  );
}
