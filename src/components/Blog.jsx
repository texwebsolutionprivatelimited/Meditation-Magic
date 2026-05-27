import React from 'react';
import { BookOpen, Calendar, ArrowRight } from 'lucide-react';

export default function Blog() {
  const posts = [
    {
      title: 'The Science and Spiritual Power of Words in Manifestation',
      date: 'May 20, 2026',
      image: 'https://amiettkumar.com/wp-content/uploads/2026/05/ChatGPT-Image-May-20-2026-01_02_00-PM-1024x683.png',
      link: '#',
      course: 'Saraswati Maa Attunement'
    },
    {
      title: 'How to Overcome Self-Doubt and Build Unshakeable Confidence',
      date: 'May 12, 2026',
      image: 'https://amiettkumar.com/wp-content/uploads/2026/05/ChatGPT-Image-May-11-2026-03_50_57-PM-1024x683.png',
      link: '#',
      course: 'Dragon Energy Mastery'
    },
    {
      title: 'The Largest Meditation & Manifestation Community by Neelam Arora',
      date: 'May 16, 2026',
      image: 'https://amiettkumar.com/wp-content/uploads/2026/05/ChatGPT-Image-May-16-2026-04_14_22-PM-1024x683.png',
      link: '#',
      course: 'Kundalini Kriya Yoga'
    },
    {
      title: 'The Secret to Attracting More Money & Prosperity',
      date: 'May 12, 2026',
      image: 'https://amiettkumar.com/wp-content/uploads/2026/05/ChatGPT-Image-May-11-2026-05_24_58-PM-1024x683.png',
      link: '#',
      course: 'Maha Laxmi Wealth'
    },
    {
      title: 'The Ultimate Guide to the Water Technique for Manifestation',
      date: 'May 7, 2026',
      image: 'https://amiettkumar.com/wp-content/uploads/2026/05/ChatGPT-Image-May-7-2026-04_39_45-PM-1024x683.png',
      link: '#',
      course: '1-on-1 Consultation'
    },
    {
      title: 'Are Crystals and Pyramids Fake or Real Energy Tools?',
      date: 'May 14, 2026',
      image: 'https://amiettkumar.com/wp-content/uploads/2026/04/ChatGPT-Image-Apr-29-2026-05_36_43-PM-1024x683.png',
      link: '#',
      course: 'Angelic Healing Program'
    }
  ];

  return (
    <section id="blog" className="relative py-10 bg-[#E2D5F3] text-gray-900">
      <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="text-xs font-bold tracking-widest text-[#6B1736] uppercase block mb-3 flex items-center justify-center gap-1.5 animate-tagline-blink">
            <BookOpen className="w-4 h-4 text-[#6B1736]" />
            Spiritual Wisdom & Course Insights
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1C0320] mb-4">
            Our Course & Workshop Blogs
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#3E0844] to-[#6B1736] mx-auto rounded-full"></div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <article
              key={idx}
              className="group bg-white rounded-3xl border border-purple-100/60 overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div>
                {/* Image Container */}
                <div className="aspect-[3/2] w-full overflow-hidden bg-gray-50 border-b border-purple-100/30">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 group-hover:brightness-90 transition-all duration-500"
                  />
                </div>

                {/* Content Block */}
                <div className="p-6">
                  {/* Meta */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 font-semibold">
                      <Calendar className="w-3.5 h-3.5 text-[#6B1736]" />
                      <span>{post.date}</span>
                    </div>
                    <span className="text-[9px] font-bold text-[#6B1736] bg-purple-100 border border-purple-200/50 px-2 py-0.5 rounded-full">
                      {post.course}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif font-bold text-base sm:text-lg text-[#1C0320] leading-snug group-hover:text-[#6B1736] transition-colors duration-300">
                    {post.title}
                  </h3>
                </div>
              </div>

              {/* Read More Link */}
              <div className="px-6 pb-6 pt-2">
                <a
                  href={post.link}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#7C3AED] group-hover:text-[#35086B] transition-colors"
                >
                  Read Article
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

            </article>
          ))}
        </div>

        {/* See More CTA */}
        <div className="mt-8 text-center">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 bg-[#3E0844] hover:bg-[#1C0320] text-white font-bold text-sm px-8 py-3.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 uppercase tracking-wider"
          >
            Read All Blog Articles
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>

      </div>
    </section>
  );
}
