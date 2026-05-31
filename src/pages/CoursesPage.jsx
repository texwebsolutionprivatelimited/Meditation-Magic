import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import { isPrivateSession, useAdminContent } from '../admin/contentStore';

export default function CoursesPage() {
  const [searchParams] = useSearchParams();
  const workshops = useAdminContent('courses');

  // Internal type filter coming from Navbar Query Parameter (e.g. ?type=Courses)
  const typeParam = searchParams.get('type') || 'All';

  // Screen Category tabs visible on the page (Abundance & Wealth, etc.)
  const [selectedCategory, setSelectedCategory] = useState('All');

  // 1. Filter workshops matching the internal Navbar type
  const typeMatchedWorkshops = workshops.filter((w) => {
    if (typeParam !== 'All') {
      return (typeParam === 'Courses' && w.type === 'Course') ||
        (typeParam === 'Workshops' && w.type === 'Workshop') ||
        (typeParam === '1-to-1 Sessions' && isPrivateSession(w.type));
    }
    // If "All", show everything EXCEPT private '1-to-1 Session' products
    return !isPrivateSession(w.type);
  });

  // 2. Extract unique categories that actually have available items under this type
  const availableCategories = ['All', ...new Set(typeMatchedWorkshops.map((w) => w.category))];

  // 3. Reset selected Category tab to 'All' if the category is not available in the new type list
  useEffect(() => {
    if (!availableCategories.includes(selectedCategory)) {
      setSelectedCategory('All');
    }
  }, [typeParam]);

  // 4. Final filter representing the intersection of Navbar type & screen Category tab selection
  const filteredWorkshops = typeMatchedWorkshops.filter((w) => {
    if (selectedCategory !== 'All') {
      return w.category === selectedCategory;
    }
    return true;
  });

  // Scroll to hash sections on page load if present
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    }
  }, []);

  return (
    <div className="pt-16 lg:pt-24 min-h-screen bg-[#E2D5F3] text-gray-900">
      {/* Immersive Page Header */}
      <div className="relative pt-4 pb-8 text-center overflow-hidden">
        {/* Soft light glow backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-white/40 blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#6B1736] uppercase mb-4 animate-tagline-blink">
            <BookOpen className="w-4 h-4 text-[#6B1736] animate-pulse" />
            Vibrational Upgrades & Attunements
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1C0320] leading-tight mb-4 drop-shadow-sm">
            Sacred Offerings
          </h1>
          <p className="text-gray-700 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed font-medium">
            Shift your reality from 3D blockages to 5D divine abundance. Explore our high-energy spiritual courses, workshops, and private 1-to-1 healing sessions.
          </p>
        </div>
      </div>

      {/* Hide scrollbar utility class */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Categories Tabs Filter (Dynamically showing only categories that have items available) */}
      <div className="max-w-[95%] mx-auto px-3 sm:px-6 lg:px-8 mb-6 sm:mb-12 relative z-10">
        <div className="flex flex-nowrap sm:flex-wrap items-center justify-start sm:justify-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar border-b border-purple-200 pb-3 sm:pb-6 px-1 sm:px-0">
          {availableCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-[10px] sm:text-xs font-bold transition-all duration-300 border uppercase tracking-wider whitespace-nowrap flex-shrink-0 ${selectedCategory === cat
                  ? 'bg-[#3E0844] text-white border-transparent'
                  : 'bg-white/60 text-[#3E0844]/80 border-purple-200 hover:bg-white hover:text-[#3E0844]'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Catalog Grid */}
      <div className="max-w-[95%] mx-auto px-3 sm:px-6 lg:px-8 pb-24 relative z-10">
        {filteredWorkshops.length === 0 ? (
          <div className="text-center py-16 bg-white/40 border border-purple-100/50 rounded-[2rem] p-8 max-w-lg mx-auto shadow-sm">
            <BookOpen className="w-12 h-12 text-[#6B1736]/60 mx-auto mb-4" />
            <h3 className="font-serif text-lg font-bold text-[#1C0320] mb-2">No Matching Programs</h3>
            <p className="text-gray-600 text-xs sm:text-sm mb-4">
              We couldn't find any programs matching this specific combination of Navbar type and category tab.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
              }}
              className="bg-[#3E0844] hover:bg-[#1C0320] text-white font-bold py-2.5 px-5 rounded-xl text-xs uppercase tracking-wider transition-all shadow-md"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWorkshops.map((w) => (
              <Link
                key={w.id}
                to={`/courses/${w.id}`}
                className="bg-white rounded-[1.5rem] sm:rounded-[2rem] border-2 border-[#3E0844]/50 p-4 sm:p-5 flex flex-col justify-between hover:border-[#3E0844] hover:shadow-2xl transition-all duration-300 group transform hover:-translate-y-1 text-left cursor-pointer animate-fade-in"
              >
                <div>
                  {/* Thumbnail Image */}
                  <div className="relative h-48 sm:h-72 w-full rounded-xl sm:rounded-2xl overflow-hidden mb-4 bg-purple-950 flex items-center justify-center">
                    <img
                      src={w.image}
                      alt={w.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 brightness-90"
                    />
                    <span className="absolute top-3 left-3 text-[10px] font-black uppercase tracking-wider bg-[#3E0844]/80 text-[#F5D28E] border border-[#F5D28E]/20 px-3 py-1.5 rounded-full backdrop-blur-md">
                      {w.category}
                    </span>
                  </div>

                  {/* Body */}
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1C0320] group-hover:text-[#3E0844] transition-colors leading-snug mb-1">
                    {w.title}
                  </h3>
                  <h4 className="text-[10px] font-bold text-[#6B1736] uppercase tracking-widest mb-3">
                    {w.subtitle}
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-3 mb-4">
                    {w.description}
                  </p>
                </div>

                {/* View syllabus Link CTA */}
                <div
                  className="w-full border border-purple-200 group-hover:border-[#3E0844] group-hover:bg-[#3E0844]/5 text-[#3E0844] font-bold py-3.5 rounded-xl text-center text-xs uppercase tracking-wider transition-all duration-300 block"
                >
                  View Details & Syllabus
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
