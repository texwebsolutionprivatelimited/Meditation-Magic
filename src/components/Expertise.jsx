import React from 'react';
import { Sparkles } from 'lucide-react';

// Import local premium AI-generated artworks
import mahaLaxmiImg from '../assets/maha_laxmi_wealth.png';
import angelicHealingImg from '../assets/angelic_healing.png';
import unicornHealingImg from '../assets/unicorn_healing.png';
import dragonProtectionImg from '../assets/dragon_protection.png';
import akashicRecordsImg from '../assets/akashic_records.png';
import kundaliniKriyaImg from '../assets/kundalini_kriya.png';
import saraswatiWisdomImg from '../assets/saraswati_wisdom.png';
import kaliProtectionImg from '../assets/kali_protection.png';
import pranayamaBreathImg from '../assets/pranayama_breath.png';
import ancestralKarmaImg from '../assets/ancestral_karma.png';
import auraShieldImg from '../assets/aura_shield.png';
import neelamPortraitImg from '../assets/neelam_portrait.jpg';

export default function Expertise({ onOpenModal }) {
  const expertiseItems = [
    {
      title: 'Maha Laxmi, Ashta Lakshmi & Dhan Kuber Workshop',
      image: mahaLaxmiImg,
      cta: 'Explore Workshop'
    },
    {
      title: 'Advanced Angelic Healing Mastery',
      image: angelicHealingImg,
      cta: 'Join Course'
    },
    {
      title: 'Kundalini Kriya Yoga & Divine Initiation',
      image: kundaliniKriyaImg,
      cta: 'Join Course'
    },
    {
      title: 'Akashic Records & Soul Blueprint Activation',
      image: akashicRecordsImg,
      cta: 'Explore Course'
    },
    {
      title: 'Dragon Energy Mastery & Protection Codes',
      image: dragonProtectionImg,
      cta: 'Explore Course'
    },
    {
      title: 'Saraswati Maa Attunement Workshop',
      image: saraswatiWisdomImg,
      cta: 'Join Workshop'
    },
    {
      title: '1-on-1 Spiritual & Manifestation Session',
      image: neelamPortraitImg,
      cta: 'Book Session'
    },
    {
      title: 'Maha Lakshmi, Ashta Lakshmi & Dhan Kuber Attunement',
      image: mahaLaxmiImg,
      cta: 'Join Workshop'
    },
    {
      title: 'Pranayama & Breathwork',
      image: pranayamaBreathImg,
      cta: 'Join Workshop'
    },
    {
      title: 'Maa Kali Attunement & Healing Workshop',
      image: kaliProtectionImg,
      cta: 'Explore Course'
    },
    {
      title: 'Ancestral Karma Release',
      image: ancestralKarmaImg,
      cta: 'Join Workshop'
    },
    {
      title: 'Aura & Energy Shielding',
      image: auraShieldImg,
      cta: 'Explore Course'
    },
    {
      title: 'Ho\'oponopono Manifestation',
      image: neelamPortraitImg,
      cta: 'Book Session'
    },
    {
      title: 'Diamond Course of Angel Therapy Level 3',
      image: angelicHealingImg,
      cta: 'Join Course'
    },
    {
      title: 'Unicorn Therapy Level 1 Workshop',
      image: unicornHealingImg,
      cta: 'Join Workshop'
    }
  ];

  return (
    <section id="expertise" className="relative pt-14 pb-6 bg-[#E2D5F3] text-gray-900 overflow-hidden">

      {/* Self-contained style tag for infinite marquee animation */}
      <style>{`
        @keyframes marquee-rtl {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-rtl {
          display: flex;
          width: max-content;
          animation: marquee-rtl 45s linear infinite;
        }
        .marquee-container:hover .animate-marquee-rtl {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-3">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold tracking-widest text-[#6B1736] uppercase block mb-3 flex items-center justify-center gap-1.5 animate-tagline-blink">
            <Sparkles className="w-4 h-4 text-[#6B1736]" />
            Areas of Mastery & Growth
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1C0320] mb-4">
            Our Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#3E0844] to-[#6B1736] mx-auto rounded-full"></div>
        </div>
      </div>

      {/* Marquee Container wrapping the single row, restricted to max-w-[95%] and centered */}
      <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 marquee-container overflow-hidden relative">

        {/* Soft fading overlays on the left and right boundaries */}
        <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-[#E2D5F3] via-[#E2D5F3]/90 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-[#E2D5F3] via-[#E2D5F3]/90 to-transparent z-20 pointer-events-none"></div>

        {/* Single Row: Right to Left */}
        <div className="relative w-full overflow-hidden">
          <div className="animate-marquee-rtl gap-6 py-4">
            {/* Render items twice for seamless loop */}
            {[...expertiseItems, ...expertiseItems].map((exp, idx) => (
              <div
                key={idx}
                onClick={onOpenModal}
                className="group relative w-60 h-[17.5rem] sm:w-64 sm:h-[18.5rem] rounded-[28px] border border-white/15 flex flex-col justify-end p-5 shadow-md hover:shadow-[0_15px_35px_rgba(107,23,54,0.25)] hover:-translate-y-1.5 transition-all duration-500 flex-shrink-0 overflow-hidden cursor-pointer"
              >
                {/* Full Bleed Background Image */}
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="absolute inset-0 w-full h-full object-cover filter brightness-[0.72] group-hover:brightness-[0.92] group-hover:scale-108 transition-all duration-700 ease-out"
                />

                {/* Rich Gradient Overlay for maximum text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent z-10" />

                {/* Elegant Sparkle Icon Badge appearing on hover */}
                <div className="absolute top-3 right-3 p-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm z-20">
                  <Sparkles className="w-3.5 h-3.5 text-[#FFD95A]" />
                </div>

                {/* Card Content Overlay */}
                <div className="relative z-20 space-y-3.5 text-left">
                  {/* Title */}
                  <h3 className="font-serif font-extrabold text-white group-hover:text-[#FFD95A] text-center text-xs sm:text-sm leading-snug line-clamp-2 px-1 transition-colors duration-300">
                    {exp.title}
                  </h3>
                  
                  {/* Action Button */}
                  <button
                    className="w-full bg-[#FFD95A] text-[#3E0844] hover:bg-white hover:text-[#6B1736] font-bold py-2.5 px-4 rounded-xl text-[10px] tracking-wider uppercase transition-all duration-300 transform active:scale-95 shadow-md border border-transparent"
                  >
                    {exp.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}
