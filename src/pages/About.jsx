import React from 'react';
import {
  Sparkles, Heart, Star, Shield,
  Compass, Flame, Award, Sun, Zap
} from 'lucide-react';
import neelamPortrait from '../assets/neelam_portrait.jpg';
import bhavyaPortrait from '../assets/bhavya_portrait.png';

// Custom Youtube Icon SVG to avoid lucide-react version export issues
const Youtube = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.52 3.5 12 3.5 12 3.5s-7.52 0-9.388.555A3.002 3.002 0 0 0 .502 6.163C0 8.07 0 12 0 12s0 3.93.502 5.837a3.002 3.002 0 0 0 2.11 2.108C4.48 20.5 12 20.5 12 20.5s7.52 0 9.388-.555a3.002 3.002 0 0 0 2.11-2.108C24 15.93 24 12 24 12s0-3.93-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

export default function About() {
  const modalities = [
    {
      title: 'Dragon Therapy & Golden Dragon Energy',
      description: 'Connect with high-frequency Dragon consciousness for deep spiritual protection, burning away karmic blockages, activating inner confidence, and rapid manifestation.',
      icon: <Flame className="w-5 h-5 text-amber-500" />,
      tag: 'Power & Manifestation'
    },
    {
      title: 'Elemental Unicorn Activations',
      description: 'Experience pure crystalline light frequencies to heal inner child wounds, activate the third eye chakra, restore divine hope, and clear emotional blockages.',
      icon: <Sparkles className="w-5 h-5 text-purple-600" />,
      tag: 'Purity & Healing'
    },
    {
      title: 'Sheshnaag Connection',
      description: 'Tap into sacred Earth energies and ancestral guardians for absolute divine protection, grounding of high-frequency energies, and spiritual stabilizing.',
      icon: <Shield className="w-5 h-5 text-emerald-600" />,
      tag: 'Ancestral Protection'
    },
    {
      title: '5D Chakra & Etheric Implant Removal',
      description: 'Clear deep etheric implants, matrix attachments, and old negative programming to shift your body and aura into 5th-dimensional vibrational states.',
      icon: <Zap className="w-5 h-5 text-[#3E0844]" />,
      tag: 'Vibrational Upgrade'
    },
    {
      title: 'Akashic Records Access',
      description: 'Open the book of your soul’s journeys across time. Access past-life wisdom, understand present-day karmic cycles, and align with your absolute highest path.',
      icon: <Compass className="w-5 h-5 text-rose-500" />,
      tag: 'Soul Blueprints'
    },
    {
      title: 'Kriya Yoga & Angel Therapy',
      description: 'Blend deep respiratory consciousness and sacred breathing with angelic guidance, inviting archangels to help restore balance, peace, and abundance.',
      icon: <Sun className="w-5 h-5 text-amber-500" />,
      tag: 'Angelic Alignment'
    }
  ];

  return (
    <div className="pt-16 lg:pt-24 pb-20 min-h-screen bg-[#E2D5F3] relative overflow-hidden">

      {/* Background gradients and visual sparkles */}
      <div className="absolute top-[10%] left-[-15%] w-[50%] h-[50%] rounded-full bg-white/40 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] w-[50%] h-[50%] rounded-full bg-purple-200/50 blur-[150px] pointer-events-none" />

      {/* Immersive Page Header */}
      <div className="relative pt-4 pb-8 text-center overflow-hidden z-10">
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <div className="text-center space-y-3 max-w-3xl mx-auto animate-fade-in">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#6B1736] uppercase">
              <Award className="w-4 h-4 text-[#6B1736] animate-pulse" />
              Spiritual Guides & Masters
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1C0320] leading-tight">
              Meet Our Guides
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-[#3E0844] to-[#6B1736] mx-auto rounded-full" />
            <p className="text-gray-600 text-xs sm:text-sm font-semibold max-w-2xl mx-auto">
              Discover the cosmic channels bringing high-frequency energy activations, ancestral healing, and divine guidance to seekers around the globe.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[95%] mx-auto px-3 sm:px-6 lg:px-8 relative z-10 space-y-8 sm:space-y-16 lg:space-y-20">

        {/* Profiles Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

          {/* Card 1: Neelam Arora */}
          <div className="bg-white rounded-[1.5rem] sm:rounded-[2.5rem] p-3.5 sm:p-10 border border-purple-100/60 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col justify-between relative overflow-hidden group">
            {/* Top decorative glow */}
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-purple-100/40 rounded-full blur-2xl group-hover:scale-150 transition-all duration-500" />

            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                {/* Photo Frame */}
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden ring-4 ring-[#3E0844]/10 shadow-xl flex-shrink-0">
                  <img
                    src={neelamPortrait}
                    alt="Neelam Arora"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="text-center sm:text-left space-y-1.5">
                  <h3 className="font-serif text-2xl sm:text-3xl font-black text-[#1C0320]">
                    Neelam Arora
                  </h3>
                  <p className="text-[#6B1736] text-xs sm:text-sm font-black tracking-widest uppercase">
                    Divine Channel & Founder
                  </p>
                  <div className="flex items-center justify-center sm:justify-start gap-0.5 text-amber-500">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-gray-600 text-xs sm:text-sm font-medium leading-relaxed">
                <p className="font-bold text-[#1C0320] text-sm sm:text-base">
                  Neelam Arora is a Direct Channel of Divine Consciousness, working beyond conventional meditation to trigger deep, experiential energy alignments.
                </p>
                <p>
                  She connects with high-frequency celestial beings—Angels, Unicorns, Dragons, and Ascended Masters—to help seekers dissolve etheric attachments, remove chakra implants, and align with abundance.
                </p>
                <p className="italic text-[#3E0844] bg-purple-50/50 p-4 rounded-2xl border border-purple-100/60 font-semibold">
                  "Healing is not about learning; it is an active experience of shifting your vibrational frequency from 3D to 5D reality."
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-purple-50 flex flex-col sm:flex-row gap-2 items-center justify-between text-[9px] sm:text-[10px] text-gray-400 font-extrabold tracking-normal sm:tracking-widest uppercase text-center sm:text-left">
              <span>neelamarora.in</span>
              <span className="text-[#6B1736]">Founder</span>
            </div>
          </div>

          {/* Card 2: Bhavya Chudasama */}
          <div className="bg-white rounded-[1.5rem] sm:rounded-[2.5rem] p-3.5 sm:p-10 border border-purple-100/60 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col justify-between relative overflow-hidden group">
            {/* Top decorative glow */}
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-purple-100/40 rounded-full blur-2xl group-hover:scale-150 transition-all duration-500" />

            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                {/* Photo Frame */}
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden ring-4 ring-[#3E0844]/10 shadow-xl flex-shrink-0">
                  <img
                    src={bhavyaPortrait}
                    alt="Bhavya Chudasama"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="text-center sm:text-left space-y-1.5">
                  <h3 className="font-serif text-2xl sm:text-3xl font-black text-[#1C0320]">
                    Bhavya Chudasama
                  </h3>
                  <p className="text-[#6B1736] text-xs sm:text-sm font-black tracking-widest uppercase">
                    Co-Facilitator & Spiritual Mentor
                  </p>
                  <div className="flex items-center justify-center sm:justify-start gap-0.5 text-amber-500">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-gray-600 text-xs sm:text-sm font-medium leading-relaxed">
                <p className="font-bold text-[#1C0320] text-sm sm:text-base">
                  Bhavya Chudasama co-guides this sacred platform, bridging high-frequency healing sessions and deep meditative alignments with practical lifestyle transformation.
                </p>
                <p>
                  Working alongside Neelam, Bhavya is dedicated to unlocking the spiritual blueprint of seekers, assisting them in cleansing their energy body and grounding cosmic wisdom into physical awareness.
                </p>
                <p className="italic text-[#3E0844] bg-purple-50/50 p-4 rounded-2xl border border-purple-100/60 font-semibold">
                  "We help you release timeline blockages, raise your emotional vibrations, and anchor into your true soul purpose."
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-purple-50 flex flex-col sm:flex-row gap-2 items-center justify-between text-[9px] sm:text-[10px] text-gray-400 font-extrabold tracking-normal sm:tracking-widest uppercase text-center sm:text-left">
              <span>Timeline Healing & Chakras</span>
              <span className="text-[#6B1736]">Senior Guide</span>
            </div>
          </div>

        </div>

        {/* Interactive Modalities Section */}
        <div className="space-y-10">
          <div className="text-center space-y-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#6B1736] uppercase">
              <Compass className="w-4 h-4 text-[#6B1736]" />
              Sacred Modalities
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#1C0320]">
              Advanced Energy Therapies
            </h3>
            <div className="w-16 h-1 bg-[#6B1736] mx-auto rounded-full" />
            <p className="text-gray-600 text-xs sm:text-sm font-semibold max-w-2xl mx-auto">
              Explore the unique high-vibrational energetic modalities that Neelam and Bhavya facilitate to clear old 3D programming and activate your 5D consciousness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modalities.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[1.25rem] sm:rounded-[2rem] p-3.5 sm:p-8 border border-purple-100 hover:border-[#6B1736]/40 hover:shadow-xl transition-all duration-300 relative group flex flex-col justify-between text-left"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="p-3 bg-purple-50 rounded-xl text-white group-hover:bg-[#6B1736]/10 transition-all">
                      {item.icon}
                    </span>
                    <span className="text-[9px] font-black uppercase tracking-wider text-[#6B1736] bg-purple-50 border border-purple-100 px-3 py-1.5 rounded-full">
                      {item.tag}
                    </span>
                  </div>

                  <h4 className="font-serif text-lg font-black text-[#1C0320] group-hover:text-[#3E0844] transition-colors leading-snug">
                    {item.title}
                  </h4>

                  <p className="text-gray-500 text-xs sm:text-sm font-semibold leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom line glow */}
                <div className="h-0.5 w-0 group-hover:w-full bg-[#6B1736] transition-all duration-300 mt-6 rounded-full opacity-50" />
              </div>
            ))}
          </div>
        </div>

        {/* YouTube Spotlight Channel Card */}
        <div className="relative rounded-[1.25rem] sm:rounded-[2.5rem] overflow-hidden bg-gradient-to-r from-[#2F0A59] via-[#3E0844] to-[#1E003B] p-4 sm:p-12 border border-white/10 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 group">
          {/* Subtle overlay decorative grid */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-600/10 via-transparent to-transparent pointer-events-none" />

          <div className="space-y-4 max-w-2xl text-center lg:text-left relative z-10">
            <span className="inline-flex items-center gap-1.5 text-[9px] sm:text-xs font-black tracking-widest text-[#F5D28E] uppercase bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
              <Youtube className="w-3.5 h-3.5 text-red-500 fill-red-500" />
              Official YouTube Channel
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
              Subscribe to <span className="text-red-500 font-bold">Meditation Magic</span> on YouTube
            </h3>
            <p className="text-white/75 text-xs sm:text-sm font-semibold leading-relaxed">
              Unlock a treasure trove of guided 5D meditations, Dragon Energy activations, Angel therapies, chakra attunements, and live spiritual podcasts. Join our community of seekers.
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-[10px] sm:text-xs font-bold text-white/60 pt-2">
              <span className="flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5 text-red-500 fill-red-500" /> Guided Meditations
              </span>
              <span className="flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5 text-[#F5D28E] fill-[#F5D28E]" /> Dragon Activations
              </span>
              <span className="flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5 text-[#A047B8] fill-[#A047B8]" /> Weekly Live Sessions
              </span>
            </div>
          </div>

          <div className="relative z-10 flex-shrink-0 w-full lg:w-auto flex justify-center">
            <a
              href="https://www.youtube.com/@meditationmagic33"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto justify-center flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-black px-6 sm:px-8 py-3.5 sm:py-4.5 rounded-2xl shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 text-[10px] sm:text-sm uppercase tracking-wider group-hover:shadow-red-600/20 cursor-pointer"
            >
              <Youtube className="w-4.5 h-4.5 fill-current" />
              Subscribe Channel
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
