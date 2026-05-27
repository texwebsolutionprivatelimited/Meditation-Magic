import React from 'react';
import { Gem, ShoppingCart, Star, Shield, Zap } from 'lucide-react';

export default function Products({ onAddToCart }) {
  const products = [
    {
      id: 1,
      title: 'Multi Fluorite Crystal Bracelet',
      price: 1111,
      rating: 5,
      badge: 'Best Seller',
      badgeColor: 'bg-[#FFD95A] text-[#3E0844]',
      tagline: 'Focus · Clarity · Freedom',
      accent: 'from-[#a78bfa] to-[#7c3aed]',
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 2,
      title: 'Tiger Eye Bracelet',
      price: 899,
      rating: 5,
      badge: 'Top Rated',
      badgeColor: 'bg-amber-100 text-amber-700',
      tagline: 'Courage · Strength · Grounding',
      accent: 'from-[#fbbf24] to-[#d97706]',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 3,
      title: 'Amethyst Healing Bracelet',
      price: 1299,
      rating: 5,
      badge: 'Premium',
      badgeColor: 'bg-purple-100 text-purple-700',
      tagline: 'Wisdom · Peace · Intuition',
      accent: 'from-[#c084fc] to-[#9333ea]',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 4,
      title: 'Rose Quartz Love Bracelet',
      price: 999,
      rating: 5,
      badge: 'New',
      badgeColor: 'bg-rose-100 text-rose-600',
      tagline: 'Love · Harmony · Self-care',
      accent: 'from-[#fb7185] to-[#e11d48]',
      image: 'https://images.unsplash.com/photo-1573408301185-9519f94816b5?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 5,
      title: 'Black Tourmaline Bracelet',
      price: 1199,
      rating: 5,
      badge: 'Protection',
      badgeColor: 'bg-gray-900 text-white',
      tagline: 'Shield · Cleanse · Protect',
      accent: 'from-[#6b7280] to-[#1f2937]',
      image: 'https://images.unsplash.com/photo-1573497019707-1c04de26e58c?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 6,
      title: 'Lapis Lazuli Bracelet',
      price: 1499,
      rating: 5,
      badge: 'Rare',
      badgeColor: 'bg-blue-100 text-blue-700',
      tagline: 'Truth · Awareness · Wisdom',
      accent: 'from-[#60a5fa] to-[#1d4ed8]',
      image: 'https://images.unsplash.com/photo-1518459031867-a89b944bffe4?auto=format&fit=crop&w=400&q=80',
    },
  ];

  return (
    <section id="products" className="relative py-6 bg-[#E2D5F3] overflow-hidden">

      {/* Soft blurred glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-white/30 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}

        <div className="text-center mb-5 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#6B1736] uppercase mb-3 animate-tagline-blink">
            <Gem className="w-3.5 h-3.5" />
            Blessed in Live Courses & Workshops
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1C0320] mb-3">
            Energized Crystal Products
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full bg-gradient-to-r from-[#3E0844] to-[#6B1736] mb-4" />
          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-semibold">
            All our crystals are cleansed, blessed, and energized during our live Maha Laxmi Wealth and Kundalini Kriya workshops to instantly double your positive vibrations.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-2 sm:gap-3">
          {products.map((p) => (
            <div
              key={p.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-purple-100/60 flex flex-col"
            >
              {/* Image with gradient overlay */}
              <div className="relative h-52 sm:h-56 overflow-hidden flex-shrink-0">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Gradient top overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-0 group-hover:opacity-25 transition-opacity duration-500`} />

                {/* Badge */}
                <span className={`absolute top-2.5 left-2.5 text-[10px] font-extrabold px-2.5 py-1 rounded-full ${p.badgeColor} shadow-sm`}>
                  {p.badge}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-3.5 flex flex-col flex-1">

                {/* Stars */}
                <div className="flex gap-0.5 mb-1.5">
                  {[...Array(p.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Title */}
                <h3 className="font-serif font-extrabold text-[#1C0320] text-sm sm:text-base leading-snug mb-1 group-hover:text-[#3E0844] transition-colors">
                  {p.title}
                </h3>

                {/* Tagline */}
                <p className="text-[10px] sm:text-xs text-[#6B1736] font-semibold tracking-wide mb-3">
                  {p.tagline}
                </p>

                {/* Price & Add to Cart */}
                <div className="mt-auto flex items-center justify-between gap-2">
                  <span className="text-base sm:text-lg font-black text-[#3E0844]">
                    ₹{p.price.toLocaleString('en-IN')}
                  </span>
                  <button
                    onClick={() => onAddToCart(p)}
                    className="flex items-center gap-1.5 bg-[#3E0844] hover:bg-[#6B1736] text-white text-[10px] sm:text-xs font-bold px-3 py-2 rounded-xl transition-all duration-300 active:scale-95 shadow-sm"
                  >
                    <ShoppingCart className="w-3.5 h-3.5" />
                    Add
                  </button>
                </div>

              </div>

              {/* Bottom shimmer bar on hover */}
              <div className={`h-0.5 bg-gradient-to-r ${p.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-[#3E0844]/60">
          <span className="flex items-center gap-1.5 text-xs font-semibold">
            <Shield className="w-4 h-4" /> 100% Genuine Crystals
          </span>
          <span className="flex items-center gap-1.5 text-xs font-semibold">
            <Zap className="w-4 h-4" /> Energy Cleansed & Blessed
          </span>
          <span className="flex items-center gap-1.5 text-xs font-semibold">
            <Star className="w-3.5 h-3.5 fill-current" /> 5-Star Rated by 1000+ Seekers
          </span>
        </div>

        {/* See More CTA */}
        <div className="mt-8 text-center">
          <a
            href="/products"
            className="inline-flex items-center gap-2 bg-[#3E0844] hover:bg-[#1C0320] text-white font-bold text-sm px-8 py-3.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 uppercase tracking-wider"
          >
            View All Crystal Products
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>

      </div>
    </section>
  );
}
