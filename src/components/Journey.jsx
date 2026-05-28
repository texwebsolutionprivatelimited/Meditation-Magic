import React from 'react';

export default function Journey() {
  const blocks = [
    {
      title: 'Graduated Seekers',
      desc: '1 Million+ Seekers',
      image: 'https://amiettkumar.com/wp-content/uploads/2025/06/trained.webp',
      alt: 'Graduated Seekers'
    },
    {
      title: 'Founder & Mentor',
      desc: 'Meditation Magic Courses',
      image: 'https://amiettkumar.com/wp-content/uploads/2025/06/readers-books-club.png',
      alt: 'Founder Meditation Magic'
    },
    {
      title: 'Social Community',
      desc: '500K+ Course Seekers',
      image: 'https://amiettkumar.com/wp-content/uploads/2025/06/instagram.webp',
      alt: 'Instagram community'
    },
    {
      title: 'YouTube Stream',
      desc: '3M+ Class Viewers',
      image: 'https://amiettkumar.com/wp-content/uploads/2025/06/youtube.webp',
      alt: 'Youtube streams'
    },
    {
      title: 'Workshops Taught',
      desc: '1500+ Batches Completed',
      image: 'https://amiettkumar.com/wp-content/uploads/2025/06/speaches.webp',
      alt: 'Workshops conducted'
    },
    {
      title: 'Spiritual Coaching',
      desc: '15+ Years Mentorship',
      image: 'https://amiettkumar.com/wp-content/uploads/2025/03/DALL%C2%B7E-2025-03-06-16.26.58-A-visually-captivating-digital-artwork-representing-Neuro-Linguistic-Programming-NLP-and-Manifestation.-The-image-features-a-futuristic-human-brain-.webp',
      alt: 'Meditation and NLP classes'
    },
    {
      title: 'Live Workshop Attendees',
      desc: '1 Million+ Active Seekers',
      image: 'https://amiettkumar.com/wp-content/uploads/2025/06/live-audience.webp',
      alt: 'Live workshop audience'
    },
    {
      title: 'Training Journey',
      desc: '19+ Years Experience',
      image: 'https://amiettkumar.com/wp-content/uploads/2025/06/coaching-experience.webp',
      alt: 'Mentorship experience'
    }
  ];

  return (
    <section id="journey" className="relative pt-8 pb-8 bg-[#E2D5F3] text-gray-900">
      <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold tracking-widest text-[#6B1736] uppercase block mb-3 animate-tagline-blink">
            Course & Workshop Milestones
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1C0320] mb-4">
            Our Teaching & Training Journey
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#3E0844] to-[#6B1736] mx-auto rounded-full"></div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {blocks.map((block, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 border-2 border-[#3E0844]/40 flex items-center gap-4 hover:shadow-xl hover:bg-white/80 hover:border-[#3E0844]/80 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl overflow-hidden bg-purple-50/50 border border-purple-100 p-2 flex items-center justify-center shadow-sm">
                <img
                  src={block.image}
                  alt={block.alt}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                  {block.title}
                </h4>
                <p className="font-serif font-extrabold text-sm sm:text-base text-[#3E0844] mt-0.5">
                  {block.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
