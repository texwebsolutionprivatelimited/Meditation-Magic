import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import { WORKSHOPS_DATA } from '../data/workshops';
import mahaLaxmiImg from '../assets/maha_laxmi_wealth.png';
import dragonMasteryImg from '../assets/dragon_protection.png';
import akashicRecordsImg from '../assets/akashic_records.png';
import unicornTherapyImg from '../assets/unicorn_healing.png';

export default function Offerings({ onOpenModal }) {
  // Get 4 prominent featured programs to display on the Home page
  const featuredIds = ['maha-laxmi-workshop', 'dragon-mastery', 'akashic-records', 'unicorn-therapy'];
  const programs = featuredIds.map(id => WORKSHOPS_DATA.find(w => w.id === id)).filter(Boolean);

  const imageMap = {
    'maha-laxmi-workshop': mahaLaxmiImg,
    'dragon-mastery': dragonMasteryImg,
    'akashic-records': akashicRecordsImg,
    'unicorn-therapy': unicornTherapyImg
  };

  return (
    <section id="programs" className="relative py-6 bg-[#E2D5F3] overflow-hidden">

      {/* Space left-right inside container */}
      <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-5">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#6B1736] uppercase mb-3 animate-tagline-blink">
            <Sparkles className="w-3.5 h-3.5" />
            Premium Divine Attunements
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1C0320] mb-3">
            Featured Courses & Workshops
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#3E0844] to-[#6B1736] mx-auto rounded-full mb-4" />
          <p className="text-gray-600 text-xs sm:text-sm font-semibold max-w-2xl mx-auto">
            Begin your spiritual path today. Choose from our certified online courses, high-vibrational workshops, and personalized 1-on-1 sessions designed to help you attract wealth, heal emotional blocks, and find deep peace.
          </p>
        </div>

        {/* Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {programs.map((prog) => (
            <div
              key={prog.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full border border-purple-100/50"
            >
              <div>
                {/* Card Image */}
                <div className="relative h-36 sm:h-40 overflow-hidden bg-purple-950">
                  <img
                    src={imageMap[prog.id] || prog.image}
                    alt={prog.title}
                    className="w-full h-full object-cover transform hover:scale-[1.03] transition-transform duration-500 brightness-95"
                  />
                  <span className="absolute top-3 left-3 text-[9px] font-black uppercase tracking-wider bg-[#3E0844]/80 text-[#F5D28E] border border-[#F5D28E]/20 px-3 py-1 rounded-full backdrop-blur-md">
                    {prog.category}
                  </span>
                </div>

                {/* Card Info */}
                <div className="p-5">
                  <h3 className="font-serif text-lg font-bold text-[#1C0320] leading-snug mb-1 line-clamp-2">
                    {prog.title}
                  </h3>
                  <h4 className="text-[11px] font-semibold text-[#6B1736] tracking-wide mb-3 uppercase">
                    {prog.subtitle}
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed line-clamp-4">
                    {prog.description}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0">
                <Link
                  to={`/courses/${prog.id}`}
                  className="w-full bg-[#3E0844] hover:bg-[#2C0530] text-white font-bold py-2.5 rounded-lg text-center text-xs transition-all duration-300 transform active:scale-[0.98] block uppercase tracking-wider cursor-pointer"
                >
                  View Details & Syllabus
                </Link>
              </div>

            </div>
          ))}
        </div>

        {/* See More CTA */}
        <div className="mt-8 text-center">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 bg-[#3E0844] hover:bg-[#1C0320] text-white font-bold text-sm px-8 py-3.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 uppercase tracking-wider"
          >
            View All Courses & Workshops
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>

      </div>

    </section>
  );
}
