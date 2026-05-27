import React from 'react';
import Blog from '../components/Blog';
import { Newspaper } from 'lucide-react';

export default function BlogPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#E2D5F3]">
      {/* Page Header */}
      <div className="relative py-12 text-center overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#6B1736] uppercase mb-3">
            <Newspaper className="w-4 h-4 text-[#6B1736]" />
            Spiritual knowledge & Cosmic wisdom
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1C0320] leading-tight mb-3">
            The Magic Blog
          </h1>
          <p className="text-gray-700 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed font-medium">
            Read daily vibrational updates, science-backed spiritual studies, and deep manifestation guides curated to help reprogram your subconscious mind.
          </p>
        </div>
      </div>

      {/* Render Blog component */}
      <Blog />
    </div>
  );
}
