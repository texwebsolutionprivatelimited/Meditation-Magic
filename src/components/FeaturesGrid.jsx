import React from 'react';
import logoImg from '../assets/logo.jpg';
import { Sparkles } from 'lucide-react';

export default function FeaturesGrid() {
  const leftFeatures = [
    { title: 'Heart Chakra Activation (Unicorn Therapy)',   iconUrl: 'https://amiettkumar.com/wp-content/uploads/2025/06/healing-white.svg' },
    { title: 'Sacred Wealth Coding (Maha Laxmi Workshop)',   iconUrl: 'https://amiettkumar.com/wp-content/uploads/2025/06/financial.svg' },
    { title: 'Dragon Power Activation (Dragon Energy Course)', iconUrl: 'https://amiettkumar.com/wp-content/uploads/2025/06/confidence-building.svg' },
    { title: 'Soul Blueprint Clarity (Akashic Records)',      iconUrl: 'https://amiettkumar.com/wp-content/uploads/2025/06/goal.svg' },
    { title: 'Abundance Timeline Shifting (Maha Laxmi)',      iconUrl: 'https://amiettkumar.com/wp-content/uploads/2025/06/dream-job.svg' },
    { title: 'Kriya Breathwork Focus (Kundalini Yoga)',       iconUrl: 'https://amiettkumar.com/wp-content/uploads/2025/06/focus-discipline.svg' },
    { title: 'Relationship Cord Cutting (Kali Workshop)',      iconUrl: 'https://amiettkumar.com/wp-content/uploads/2025/06/soulmate-attraction.svg' },
    { title: 'Subconscious Block Release (1-on-1 Session)',   iconUrl: 'https://amiettkumar.com/wp-content/uploads/2025/06/beliefs.svg' },
    { title: '7-Chakra Balancing (Kundalini Yoga)',           iconUrl: 'https://amiettkumar.com/wp-content/uploads/2025/06/energy-blance.svg' },
    { title: 'Reality Timeline Shifting (Angelic Healing)',    iconUrl: 'https://amiettkumar.com/wp-content/uploads/2025/06/parallel.svg' },
  ];

  const rightFeatures = [
    { title: 'Divine Authority & Leadership (Dragon Mastery)', iconUrl: 'https://amiettkumar.com/wp-content/uploads/2025/06/fingerprint.svg' },
    { title: 'Inner Child Pure Healing (Unicorn Therapy)',     iconUrl: 'https://amiettkumar.com/wp-content/uploads/2025/06/inner-child.svg' },
    { title: 'Abundance Mantra Writing (Saraswati Wisdom)',    iconUrl: 'https://amiettkumar.com/wp-content/uploads/2025/06/manifestation-writing.svg' },
    { title: 'Akashic Record Access (Akashic Soul Blueprint)',  iconUrl: 'https://amiettkumar.com/wp-content/uploads/2025/06/awareness.svg' },
    { title: 'Mind Money Reprogramming (Laxmi Attunement)',    iconUrl: 'https://amiettkumar.com/wp-content/uploads/2025/06/subconscious.svg' },
    { title: 'Multidimensional Self-Healing (Angelic Healing)', iconUrl: 'https://amiettkumar.com/wp-content/uploads/2025/06/body-healing.svg' },
    { title: 'Angel Guidance Synchronicities (Angel Therapy)', iconUrl: 'https://amiettkumar.com/wp-content/uploads/2025/06/synchronicities.svg' },
    { title: 'Metatronic Geometric Shielding (Level 3 Therapy)', iconUrl: 'https://amiettkumar.com/wp-content/uploads/2025/06/visualization.svg' },
    { title: 'Fierce Aura Protection (Maa Kali Workshop)',      iconUrl: 'https://amiettkumar.com/wp-content/uploads/2025/06/sleep-rest.svg' },
    { title: 'Ganesha Obstacle Removal (Saraswati Attunement)', iconUrl: 'https://amiettkumar.com/wp-content/uploads/2025/06/opportunities.svg' },
  ];

  const FeatureCard = ({ feat, align = 'left' }) => (
    <div
      className={`group flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#3E0844]/90 border border-[#FFD95A]/20 hover:border-[#FFD95A]/60 hover:bg-[#3E0844] shadow-sm hover:shadow-[0_0_16px_2px_rgba(255,217,90,0.15)] transition-all duration-300 cursor-pointer ${
        align === 'right' ? 'flex-row-reverse text-right' : 'flex-row text-left'
      }`}
    >
      {/* Gold Icon Wrapper */}
      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-[#FFD95A] to-[#F5A623] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
        <img src={feat.iconUrl} className="w-5 h-5 object-contain" alt={feat.title} />
      </div>

      {/* Title */}
      <span className="text-white font-semibold text-[13px] sm:text-sm leading-snug group-hover:text-[#FFD95A] transition-colors duration-300">
        {feat.title}
      </span>

      {/* Gold accent dot on hover */}
      <span className={`ml-auto flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#FFD95A]/0 group-hover:bg-[#FFD95A] transition-all duration-300 ${align === 'right' ? 'mr-auto ml-0' : ''}`} />
    </div>
  );

  return (
    <section id="features" className="relative py-10 overflow-hidden bg-[#E2D5F3]">

      {/* Soft blurred glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] rounded-full bg-[#3E0844]/10 blur-[120px] pointer-events-none" />

      <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#6B1736] uppercase mb-3 animate-tagline-blink">
            <Sparkles className="w-3.5 h-3.5" />
            Transformational Workshop Outcomes
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1C0320] mb-4">
            What You Master in Our Courses & Workshops
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-[#FFD95A] to-[#F5A623] mb-6" />
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-medium">
            Every online course and interactive workshop targets these crucial vibrational frequencies, aligning your energy to clear old blockages and manifest wealth, healing, and absolute protection.
          </p>
        </div>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">

          {/* Left Column */}
          <div className="lg:col-span-4 space-y-3">
            {leftFeatures.map((feat, idx) => (
              <FeatureCard key={idx} feat={feat} align="left" />
            ))}
          </div>

          {/* Center Logo Orb */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center py-10 lg:py-0 relative">
            {/* Spinning rings */}
            <div className="absolute w-80 h-80 rounded-full border border-dashed border-[#FFD95A]/20 animate-spin" style={{ animationDuration: '60s' }} />
            <div className="absolute w-64 h-64 rounded-full border border-[#FFD95A]/15 animate-spin" style={{ animationDuration: '40s', animationDirection: 'reverse' }} />
            <div className="absolute w-48 h-48 rounded-full bg-[#3E0844]/10 blur-2xl" />

            {/* Gold glow ring */}
            <div className="relative z-10 p-1.5 rounded-full bg-gradient-to-br from-[#FFD95A] via-[#F5A623] to-[#3E0844] shadow-xl shadow-[#FFD95A]/20 animate-float-slow">
              <div className="p-5 bg-[#3E0844] rounded-full">
                <div className="w-44 h-44 rounded-full overflow-hidden border-2 border-[#FFD95A]/30">
                  <img
                    src={logoImg}
                    alt="Meditation Magic Logo"
                    className="w-full h-full object-contain bg-white p-2"
                  />
                </div>
              </div>
            </div>

            {/* Caption pill */}
            <div className="mt-8 relative z-10 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#FFD95A] to-[#F5A623] shadow-md shadow-[#F5A623]/30">
              <span className="text-[10px] font-extrabold text-[#3E0844] tracking-widest uppercase flex items-center gap-1.5">
                <Sparkles className="w-3 h-3" />
                The Real Magic is in You
              </span>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-4 space-y-3">
            {rightFeatures.map((feat, idx) => (
              <FeatureCard key={idx} feat={feat} align="right" />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
