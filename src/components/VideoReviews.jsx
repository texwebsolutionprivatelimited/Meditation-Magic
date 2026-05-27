import React, { useState } from 'react';
import { Play, X, Sparkles } from 'lucide-react';

export default function VideoReviews() {
  const [activeVideoId, setActiveVideoId] = useState(null);

  const videos = [
    {
      id: 'LwE3J331YTM',
      title: 'Graduate Review – Womb Healing & Cord Cutting Workshop',
      subtitle: 'Neelam Arora live clearing experience',
      thumbnail: 'https://img.youtube.com/vi/LwE3J331YTM/hqdefault.jpg',
      tag: 'Live Workshop Feedback',
    },
    {
      id: 'rM1-33_m7Cs',
      title: 'Graduate Review – Maha Laxmi Abundance Workshop',
      subtitle: 'Real money magnet attunement secret',
      thumbnail: 'https://img.youtube.com/vi/rM1-33_m7Cs/hqdefault.jpg',
      tag: 'Live Attunement Feedback',
    },
  ];

  return (
    <section id="videos" className="relative py-10 bg-[#E2D5F3] text-gray-900 overflow-hidden">

      {/* Soft glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-white/30 blur-[100px] pointer-events-none rounded-full"></div>

      <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="inline-flex items-center justify-center gap-1.5 text-xs font-bold tracking-widest text-[#6B1736] uppercase mb-3 animate-tagline-blink">
            <Sparkles className="w-3.5 h-3.5" />
            Watch Real Student Success
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1C0320] mb-4">
            Workshop Student Video Reviews
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#3E0844] to-[#6B1736] mx-auto rounded-full" />
          <p className="mt-4 text-sm text-gray-600 font-medium">
            Listen to real reviews from students who experienced deep emotional healing, money abundance activation, and strong positive shifts during our live sessions!
          </p>
        </div>


        {/* Video Cards Grid */}
        <div className="grid grid-cols-2 gap-8">
          {videos.map((v) => (
            <div key={v.id} className="relative group cursor-pointer" onClick={() => setActiveVideoId(v.id)}>
              <img src={v.thumbnail} alt={v.title} className="w-full h-auto rounded-lg object-cover transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                <span className="text-white font-semibold">{v.title}</span>
                <span className="text-gray-200 text-sm">{v.subtitle}</span>
              </div>
            </div>
          ))}
        </div>

        {/* See More CTA */}
        <div className="mt-8 text-center">
          <a
            href="https://www.youtube.com/@meditationmagic33"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-8 py-3.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 uppercase tracking-wider"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            Watch More Videos on YouTube
          </a>
        </div>

      </div>

      {/* Lightbox Frame Modal */}
      {activeVideoId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-cosmic-darkest/90 backdrop-blur-md transition-opacity"
            onClick={() => setActiveVideoId(null)}
          ></div>

          <div className="relative w-full max-w-4xl aspect-video glass-card rounded-3xl overflow-hidden border border-gold/30 shadow-2xl z-10">
            {/* Close Button */}
            <button
              onClick={() => setActiveVideoId(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-cosmic-darkest/75 text-cosmic-cream hover:text-gold border border-gold/20 transition-all focus:outline-none"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Iframe */}
            <iframe
              src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full border-0"
            ></iframe>
          </div>
        </div>
      )}

    </section>
  );
}
