import React from 'react';
import { Star, Quote, Sparkles } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Shanti Sanap',
      role: 'Kundalini Kriya Yoga Graduate',
      content: 'The Kundalini Kriya Yoga course completely changed my life! The simple breathing exercises are very easy to follow. I feel so active and peaceful every morning. My family is so happy to see this change in me!',
      rating: 5,
    },
    {
      name: 'Garvit Bansal',
      role: 'Maha Laxmi Workshop Graduate',
      content: 'The 5-day Lakshmi Kuber abundance workshop is magical! I learned simple wealth codes and used them for my digital marketing business. Clients started coming in instantly and business is booming now!',
      rating: 5,
    },
    {
      name: 'Pallavi Hadawale',
      role: 'Akashic Records Student',
      content: 'I joined the Akashic Records course to clear repeated career blockages. The simple lessons helped me cut family lack timelines and clear my mind. I got my dream job with an amazing package!',
      rating: 5,
    },
    {
      name: 'Kiran Patel',
      role: 'Dragon Energy Course Graduate',
      content: 'I am a healer, and the Dragon Protection course taught me simple ways to build a strong light shield around me. I now stay perfectly safe from daily stress and negative energy.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="relative py-10 bg-[#E2D5F3] text-gray-900 overflow-hidden">

      {/* Soft glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-white/30 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-6">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#6B1736] uppercase mb-2 animate-tagline-blink">
            <Sparkles className="w-3.5 h-3.5" />
            Student Success Stories
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1C0320] mb-3">
            Course Graduate Reviews
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#3E0844] to-[#6B1736] mx-auto rounded-full" />
        </div>

        {/* 3 Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="relative bg-white rounded-2xl p-5 border border-purple-100/60 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col"
            >
              {/* Watermark Quote Icon */}
              <Quote className="absolute top-3 right-4 w-8 h-8 text-[#3E0844]/5 pointer-events-none" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-sm text-gray-700 italic leading-relaxed mb-4 flex-1">
                "{t.content}"
              </p>

              {/* Author */}
              <div className="border-t border-purple-100 pt-3 mt-auto">
                <p className="font-serif font-bold text-sm text-[#3E0844]">{t.name}</p>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-0.5">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer badge */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-[#3E0844]/50 font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} />
          <span>Every story reflects quantum frequency alignment</span>
        </div>

      </div>
    </section>
  );
}
