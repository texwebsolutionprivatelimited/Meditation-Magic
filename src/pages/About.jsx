import React from 'react';
import { 
  Sparkles, Heart, Star, Shield, 
  Compass, Flame, Award, Sun, Zap, Users
} from 'lucide-react';
import neelamPortrait from '../assets/neelam_portrait.jpg';

// Custom Youtube Icon SVG to avoid lucide-react version export issues
const Youtube = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.52 3.5 12 3.5 12 3.5s-7.52 0-9.388.555A3.002 3.002 0 0 0 .502 6.163C0 8.07 0 12 0 12s0 3.93.502 5.837a3.002 3.002 0 0 0 2.11 2.108C4.48 20.5 12 20.5 12 20.5s7.52 0 9.388-.555a3.002 3.002 0 0 0 2.11-2.108C24 15.93 24 12 24 12s0-3.93-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

export default function About() {
  const modalities = [
    {
      title: 'Dragon Therapy & Golden Dragon Energy',
      description: 'Connect with high-frequency Dragon consciousness for deep spiritual protection, burning away karmic blockages, activating inner confidence, and rapid manifestation.',
      icon: <Flame className="w-6 h-6 text-amber-400" />,
      tag: 'Power & Manifestation'
    },
    {
      title: 'Elemental Unicorn Activations',
      description: 'Experience pure crystalline light frequencies to heal inner child wounds, activate the third eye chakra, restore divine hope, and clear emotional blockages.',
      icon: <Sparkles className="w-6 h-6 text-purple-400" />,
      tag: 'Purity & Healing'
    },
    {
      title: 'Sheshnaag Connection',
      description: 'Tap into sacred Earth energies and ancestral guardians for absolute divine protection, grounding of high-frequency energies, and spiritual stabilizing.',
      icon: <Shield className="w-6 h-6 text-emerald-400" />,
      tag: 'Ancestral Protection'
    },
    {
      title: '5D Chakra & Etheric Implant Removal',
      description: 'Clear deep etheric implants, matrix attachments, and old negative programming to shift your body and aura into 5th-dimensional vibrational states.',
      icon: <Zap className="w-6 h-6 text-blue-400" />,
      tag: 'Vibrational Upgrade'
    },
    {
      title: 'Akashic Records Access',
      description: 'Open the book of your soul’s journeys across time. Access past-life wisdom, understand present-day karmic cycles, and align with your absolute highest path.',
      icon: <Compass className="w-6 h-6 text-rose-400" />,
      tag: 'Soul Blueprints'
    },
    {
      title: 'Kriya Yoga & Angel Therapy',
      description: 'Blend deep respiratory consciousness and sacred breathing with angelic guidance, inviting archangels to help restore balance, peace, and abundance.',
      icon: <Sun className="w-6 h-6 text-yellow-300" />,
      tag: 'Angelic Alignment'
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-[#1E003B] text-white overflow-hidden">
      
      {/* Background gradients and visual sparkles */}
      <div className="absolute top-[10%] left-[-15%] w-[50%] h-[50%] rounded-full bg-[#A047B8]/20 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] w-[50%] h-[50%] rounded-full bg-[#7C3AED]/15 blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] rounded-full bg-white/5 blur-[120px] pointer-events-none" />

      <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        
        {/* Main Title Banner */}
        <div className="text-center space-y-4 max-w-3xl mx-auto animate-fade-in">
          <span className="inline-flex items-center gap-1.5 text-xs font-black tracking-widest text-[#F5D28E] uppercase">
            <Award className="w-4 h-4 animate-pulse" />
            Spiritual Guides & Masters
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F5D28E] to-white leading-tight drop-shadow-sm">
            Meet Our Guides
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-[#F5D28E] to-transparent mx-auto rounded-full" />
          <p className="text-white/70 text-sm sm:text-base leading-relaxed">
            Discover the cosmic channels bringing high-frequency energy activations, ancestral healing, and divine guidance to seekers around the globe.
          </p>
        </div>

        {/* Profiles Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Card 1: Neelam Arora */}
          <div className="glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-[#F5D28E]/30 transition-all duration-300">
            {/* Top decorative glow */}
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-[#A047B8]/20 rounded-full blur-2xl group-hover:scale-150 transition-all duration-500" />
            
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                {/* Photo Frame */}
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-[#F5D28E] shadow-xl flex-shrink-0">
                  <img
                    src={neelamPortrait}
                    alt="Neelam Arora"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="text-center sm:text-left space-y-2">
                  <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-white">
                    Neelam Arora
                  </h3>
                  <p className="text-[#F5D28E] text-xs sm:text-sm font-bold tracking-wide uppercase">
                    Divine Channel & Founder
                  </p>
                  <div className="flex items-center justify-center sm:justify-start gap-1 text-[#F5D28E]">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-white/80 text-sm sm:text-base leading-relaxed">
                <p className="font-semibold text-white">
                  Neelam Arora is a Direct Channel of Divine Consciousness, working beyond conventional meditation to trigger deep, experiential energy alignments.
                </p>
                <p>
                  She connects with high-frequency celestial beings—Angels, Unicorns, Dragons, and Ascended Masters—to help seekers dissolve etheric attachments, remove chakra implants, and align with abundance.
                </p>
                <p className="italic text-purple-200 bg-white/5 p-3.5 rounded-xl border border-white/5">
                  "Healing is not about learning; it is an active experience of shifting your vibrational frequency from 3D to 5D reality."
                </p>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-white/60 font-semibold tracking-wider uppercase">
              <span>meditationmagicwithneelamarora.com</span>
              <span className="text-[#F5D28E]">Founder</span>
            </div>
          </div>

          {/* Card 2: Bhavya Chudasama */}
          <div className="glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-[#F5D28E]/30 transition-all duration-300">
            {/* Top decorative glow */}
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-[#7C3AED]/20 rounded-full blur-2xl group-hover:scale-150 transition-all duration-500" />
            
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                {/* Visual Avatar Placeholder */}
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-purple-400 shadow-xl flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-[#2F0A59] to-[#1E003B]">
                  <Users className="w-12 h-12 text-[#F5D28E]" />
                </div>
                <div className="text-center sm:text-left space-y-2">
                  <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-white">
                    Bhavya Chudasama
                  </h3>
                  <p className="text-[#F5D28E] text-xs sm:text-sm font-bold tracking-wide uppercase">
                    Co-Facilitator & Spiritual Mentor
                  </p>
                  <div className="flex items-center justify-center sm:justify-start gap-1 text-[#F5D28E]">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-white/80 text-sm sm:text-base leading-relaxed">
                <p className="font-semibold text-white">
                  Bhavya Chudasama co-guides this sacred platform, bridging high-frequency healing sessions and deep meditative alignments with practical lifestyle transformation.
                </p>
                <p>
                  Working alongside Neelam, Bhavya is dedicated to unlocking the spiritual blueprint of seekers, assisting them in cleansing their energy body and grounding cosmic wisdom into physical awareness.
                </p>
                <p className="italic text-purple-200 bg-white/5 p-3.5 rounded-xl border border-white/5">
                  "We help you release timeline blockages, raise your emotional vibrations, and anchor into your true soul purpose."
                </p>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-white/60 font-semibold tracking-wider uppercase">
              <span>Timeline Healing & Chakras</span>
              <span className="text-[#F5D28E]">Senior Guide</span>
            </div>
          </div>

        </div>

        {/* Interactive Modalities Section */}
        <div className="space-y-12">
          <div className="text-center space-y-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-black tracking-widest text-[#F5D28E] uppercase">
              <Compass className="w-4 h-4" />
              Sacred Modalities
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-extrabold text-white">
              Advanced Energy Therapies
            </h3>
            <p className="text-white/60 max-w-2xl mx-auto text-sm sm:text-base">
              Explore the unique high-vibrational energetic modalities that Neelam and Bhavya facilitate to clear old 3D programming and activate your 5D consciousness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modalities.map((item, idx) => (
              <div 
                key={idx} 
                className="glass-card rounded-2xl p-6 border border-white/5 hover:border-[#F5D28E]/25 transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="p-3 bg-white/5 rounded-xl text-white group-hover:bg-[#F5D28E]/10 group-hover:text-[#F5D28E] transition-all">
                      {item.icon}
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#F5D28E]/80 bg-[#F5D28E]/5 border border-[#F5D28E]/10 px-2.5 py-1 rounded-full">
                      {item.tag}
                    </span>
                  </div>
                  
                  <h4 className="font-serif text-lg font-bold text-white group-hover:text-[#F5D28E] transition-colors leading-snug">
                    {item.title}
                  </h4>
                  
                  <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
                
                {/* Bottom line glow */}
                <div className="h-0.5 w-0 group-hover:w-full bg-[#F5D28E] transition-all duration-300 mt-4 rounded-full opacity-50" />
              </div>
            ))}
          </div>
        </div>

        {/* YouTube Spotlight Channel Card */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#2F0A59] via-[#3E0844] to-[#1E003B] p-8 sm:p-10 border border-white/10 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 group">
          {/* Subtle overlay decorative grid */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-600/10 via-transparent to-transparent pointer-events-none" />
          
          <div className="space-y-4 max-w-2xl text-center lg:text-left relative z-10">
            <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-black tracking-widest text-[#F5D28E] uppercase bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              <Youtube className="w-4 h-4 text-red-500 fill-red-500" />
              Official YouTube Channel
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
              Subscribe to <span className="text-red-500 font-bold">Meditation Magic</span> on YouTube
            </h3>
            <p className="text-white/75 text-sm sm:text-base leading-relaxed">
              Unlock a treasure trove of guided 5D meditations, Dragon Energy activations, Angel therapies, chakra attunements, and live spiritual podcasts. Join our community of seekers.
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs sm:text-sm font-semibold text-white/60 pt-2">
              <span className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-red-500 fill-red-500" /> Guided Meditations
              </span>
              <span className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-[#F5D28E] fill-[#F5D28E]" /> Dragon Activations
              </span>
              <span className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-[#A047B8] fill-[#A047B8]" /> Weekly Live Sessions
              </span>
            </div>
          </div>

          <div className="relative z-10 flex-shrink-0">
            <a 
              href="https://www.youtube.com/@meditationmagic33" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 bg-red-600 hover:bg-red-700 text-white font-black px-8 py-4 rounded-2xl shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 text-sm sm:text-base uppercase tracking-wider group-hover:shadow-red-600/20"
            >
              <Youtube className="w-5 h-5 fill-current" />
              Subscribe Channel
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
