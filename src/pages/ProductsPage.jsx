import React from 'react';
import Products from '../components/Products';
import { Gem } from 'lucide-react';

export default function ProductsPage({ onAddToCart }) {
  return (
    <div className="pt-24 min-h-screen bg-[#E2D5F3]">
      {/* Page Header */}
      <div className="relative py-12 text-center overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#6B1736] uppercase mb-3">
            <Gem className="w-4 h-4 text-[#6B1736]" />
            Vibrational Crystals & sacred jewelry
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1C0320] leading-tight mb-3">
            Sacred Crystal shop
          </h1>
          <p className="text-gray-700 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed font-medium">
            Every crystal is handpicked, carefully cleansed with high-frequency sound bowls, and charged with 5D manifestation coding by Neelam Arora to attract divine abundance into your life.
          </p>
        </div>
      </div>

      {/* Render Products Grid Component */}
      <Products onAddToCart={onAddToCart} />
    </div>
  );
}
