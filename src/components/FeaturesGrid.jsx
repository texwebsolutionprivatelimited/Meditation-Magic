import React from 'react';
import logoImg from '../assets/logo.jpg';
import { Sparkles } from 'lucide-react';

const leftFeatures = [
  { title: 'Heart Chakra Activation',     sub: 'Unicorn Therapy',      iconUrl: 'https://amiettkumar.com/wp-content/uploads/2025/06/healing-white.svg' },
  { title: 'Sacred Wealth Coding',        sub: 'Maha Laxmi Workshop',  iconUrl: 'https://amiettkumar.com/wp-content/uploads/2025/06/financial.svg' },
  { title: 'Dragon Power Activation',     sub: 'Dragon Energy Course', iconUrl: 'https://amiettkumar.com/wp-content/uploads/2025/06/confidence-building.svg' },
  { title: 'Soul Blueprint Clarity',      sub: 'Akashic Records',      iconUrl: 'https://amiettkumar.com/wp-content/uploads/2025/06/goal.svg' },
  { title: 'Abundance Timeline Shifting', sub: 'Maha Laxmi',           iconUrl: 'https://amiettkumar.com/wp-content/uploads/2025/06/dream-job.svg' },
  { title: 'Subconscious Block Release',  sub: '1-on-1 Session',       iconUrl: 'https://amiettkumar.com/wp-content/uploads/2025/06/beliefs.svg' },
];

const rightFeatures = [
  { title: 'Divine Authority & Leadership', sub: 'Dragon Mastery',         iconUrl: 'https://amiettkumar.com/wp-content/uploads/2025/06/fingerprint.svg' },
  { title: 'Inner Child Pure Healing',      sub: 'Unicorn Therapy',        iconUrl: 'https://amiettkumar.com/wp-content/uploads/2025/06/inner-child.svg' },
  { title: 'Abundance Mantra Writing',      sub: 'Saraswati Wisdom',       iconUrl: 'https://amiettkumar.com/wp-content/uploads/2025/06/manifestation-writing.svg' },
  { title: 'Akashic Record Access',         sub: 'Soul Blueprint',         iconUrl: 'https://amiettkumar.com/wp-content/uploads/2025/06/awareness.svg' },
  { title: 'Mind Money Reprogramming',      sub: 'Laxmi Attunement',       iconUrl: 'https://amiettkumar.com/wp-content/uploads/2025/06/subconscious.svg' },
  { title: 'Angel Guidance Sync',           sub: 'Angel Therapy',          iconUrl: 'https://amiettkumar.com/wp-content/uploads/2025/06/synchronicities.svg' },
];

// Card vertical centers inside a 540px-high flex-column with justify-around
// 6 cards ~52px each → remaining ≈ 228px → justify-around spacing ≈ 38px per item
const cardY = [45, 135, 225, 315, 405, 495];
const CX = 500; // center X in 1000-wide viewBox
const CY = 270; // center Y in 540-high viewBox
const LX = 332; // right edge of left column (33% of 1000)
const RX = 668; // left edge of right column (67% of 1000)

// Bezier curve: left card right-edge → center
const leftPaths = cardY.map(y => `M ${LX},${y} C ${LX + 100},${y} ${CX - 100},${CY} ${CX},${CY}`);
// Bezier curve: center → right card left-edge
const rightPaths = cardY.map(y => `M ${CX},${CY} C ${CX + 100},${CY} ${RX - 100},${y} ${RX},${y}`);

export default function FeaturesGrid() {
  return (
    <section id="features" className="relative pt-8 pb-16 sm:pt-12 sm:pb-20 overflow-hidden bg-gradient-to-b from-[#0D0015] via-[#1C0040] to-[#0D0015]">

      {/* Starfield dots */}
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white/30 animate-pulse"
          style={{
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
          }}
        />
      ))}

      {/* Radial glow behind center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[60%] bg-[#7B2FBE]/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-[95%] mx-auto px-3 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#FFD95A] uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            Spiritual Healing & Energy Activation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            What You Will{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD95A] to-[#F5A623]">
              Experience & Transform
            </span>
          </h2>
          <div className="w-24 h-0.5 mx-auto bg-gradient-to-r from-[#FFD95A] to-[#F5A623] mb-5" />
          <p className="text-white/60 text-sm sm:text-base leading-relaxed font-medium">
            Each session with Neelam Arora brings deep energetic shifts — clearing karmic blocks,
            activating abundance codes, and aligning your soul with its highest divine purpose.
          </p>
        </div>

        {/* ─── DESKTOP: SVG Energy Web Layout ─── */}
        <div className="hidden lg:block">
          <div className="relative h-[540px] grid grid-cols-12">

            {/* ── Absolute SVG Overlay ── */}
            <svg
              className="absolute inset-0 w-full h-full z-0 pointer-events-none"
              viewBox="0 0 1000 540"
              preserveAspectRatio="none"
            >
              <defs>
                <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
                <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FFD95A" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#FFD95A" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Center radial glow */}
              <ellipse cx={CX} cy={CY} rx="80" ry="80" fill="url(#centerGlow)" />

              {/* LEFT: soft glow duplicate paths */}
              {leftPaths.map((d, i) => (
                <path key={`lg-${i}`} d={d} fill="none" stroke="#FFD95A" strokeWidth="4" opacity="0.08" filter="url(#glow)" />
              ))}

              {/* LEFT: animated dashed paths */}
              {leftPaths.map((d, i) => (
                <path
                  key={`lp-${i}`} d={d} fill="none"
                  stroke="#FFD95A" strokeWidth="1.2"
                  strokeDasharray="6 4" opacity="0.5"
                >
                  <animate attributeName="stroke-dashoffset" from="200" to="0" dur={`${1.8 + i * 0.15}s`} repeatCount="indefinite" />
                </path>
              ))}

              {/* LEFT: traveling glow particles */}
              {leftPaths.map((d, i) => (
                <circle key={`lc-${i}`} r="4" fill="#FFD95A" filter="url(#glow)" opacity="0.9">
                  <animateMotion dur={`${2 + i * 0.2}s`} repeatCount="indefinite" path={d} />
                </circle>
              ))}

              {/* RIGHT: soft glow duplicate paths */}
              {rightPaths.map((d, i) => (
                <path key={`rg-${i}`} d={d} fill="none" stroke="#FFD95A" strokeWidth="4" opacity="0.08" filter="url(#glow)" />
              ))}

              {/* RIGHT: animated dashed paths */}
              {rightPaths.map((d, i) => (
                <path
                  key={`rp-${i}`} d={d} fill="none"
                  stroke="#FFD95A" strokeWidth="1.2"
                  strokeDasharray="6 4" opacity="0.5"
                >
                  <animate attributeName="stroke-dashoffset" from="0" to="200" dur={`${1.8 + i * 0.15}s`} repeatCount="indefinite" />
                </path>
              ))}

              {/* RIGHT: traveling glow particles */}
              {rightPaths.map((d, i) => (
                <circle key={`rc-${i}`} r="4" fill="#FFD95A" filter="url(#glow)" opacity="0.9">
                  <animateMotion dur={`${2 + i * 0.2}s`} repeatCount="indefinite" path={d} />
                </circle>
              ))}

              {/* Glowing dots at left card connection points */}
              {cardY.map((y, i) => (
                <g key={`ld-${i}`}>
                  <circle cx={LX} cy={y} r="7" fill="#FFD95A" opacity="0.08" filter="url(#glow)" />
                  <circle cx={LX} cy={y} r="3.5" fill="#FFD95A" opacity="0.85" />
                </g>
              ))}

              {/* Glowing dots at right card connection points */}
              {cardY.map((y, i) => (
                <g key={`rd-${i}`}>
                  <circle cx={RX} cy={y} r="7" fill="#FFD95A" opacity="0.08" filter="url(#glow)" />
                  <circle cx={RX} cy={y} r="3.5" fill="#FFD95A" opacity="0.85" />
                </g>
              ))}

              {/* Center convergence ring */}
              <circle cx={CX} cy={CY} r="12" fill="none" stroke="#FFD95A" strokeWidth="1" opacity="0.3">
                <animate attributeName="r" values="10;16;10" dur="3s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.3;0.7;0.3" dur="3s" repeatCount="indefinite" />
              </circle>
            </svg>

            {/* ── LEFT Feature Cards ── */}
            <div className="col-span-4 relative z-10 flex flex-col justify-around py-2 pr-6">
              {leftFeatures.map((feat, i) => (
                <div
                  key={i}
                  className="group flex items-center gap-3 px-3 py-2.5 rounded-xl
                    bg-white/5 backdrop-blur-sm border border-[#FFD95A]/15
                    hover:border-[#FFD95A]/50 hover:bg-white/10
                    shadow-lg hover:shadow-[0_0_20px_rgba(255,217,90,0.1)]
                    transition-all duration-300 cursor-pointer"
                >
                  <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-gradient-to-br from-[#FFD95A] to-[#F5A623] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                    <img src={feat.iconUrl} className="w-4 h-4 object-contain" alt={feat.title} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-white text-xs font-semibold leading-snug group-hover:text-[#FFD95A] transition-colors duration-300">
                      {feat.title}
                    </div>
                    <div className="text-white/35 text-[10px] font-medium">{feat.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* ── CENTER Logo Orb ── */}
            <div className="col-span-4 relative z-10 flex flex-col items-center justify-center gap-4">
              {/* Spinning decorative rings */}
              <div className="absolute w-52 h-52 rounded-full border border-dashed border-[#FFD95A]/10 animate-spin" style={{ animationDuration: '50s' }} />
              <div className="absolute w-40 h-40 rounded-full border border-[#FFD95A]/8 animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }} />

              {/* Logo orb */}
              <div
                className="relative z-10 p-[3px] rounded-full shadow-2xl"
                style={{ background: 'linear-gradient(135deg, #FFD95A, #F5A623, #7B2FBE, #FFD95A)' }}
              >
                <div className="p-2.5 bg-[#0D0015] rounded-full">
                  <div className="w-28 h-28 rounded-full overflow-hidden ring-2 ring-[#FFD95A]/20">
                    <img src={logoImg} alt="Meditation Magic" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              {/* Label pill */}
              <div className="relative z-10 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#FFD95A] to-[#F5A623] shadow-lg shadow-[#FFD95A]/20">
                <span className="text-[9px] font-extrabold text-[#0D0015] tracking-widest uppercase flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5" /> The Real Magic
                </span>
              </div>
            </div>

            {/* ── RIGHT Feature Cards ── */}
            <div className="col-span-4 relative z-10 flex flex-col justify-around py-2 pl-6">
              {rightFeatures.map((feat, i) => (
                <div
                  key={i}
                  className="group flex items-center gap-3 px-3 py-2.5 rounded-xl flex-row-reverse
                    bg-white/5 backdrop-blur-sm border border-[#FFD95A]/15
                    hover:border-[#FFD95A]/50 hover:bg-white/10
                    shadow-lg hover:shadow-[0_0_20px_rgba(255,217,90,0.1)]
                    transition-all duration-300 cursor-pointer text-right"
                >
                  <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-gradient-to-br from-[#FFD95A] to-[#F5A623] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                    <img src={feat.iconUrl} className="w-4 h-4 object-contain" alt={feat.title} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-white text-xs font-semibold leading-snug group-hover:text-[#FFD95A] transition-colors duration-300">
                      {feat.title}
                    </div>
                    <div className="text-white/35 text-[10px] font-medium">{feat.sub}</div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* ─── MOBILE fallback (Symmetrical 5-Logo-5 Layout for Mobile/Tablet ONLY) ─── */}
        <div className="lg:hidden space-y-8">
          
          {/* Top 5 Feature Cards (leftFeatures sliced to 5) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {leftFeatures.slice(0, 5).map((feat, i) => (
              <div key={i} className="group flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-[#FFD95A]/15 hover:border-[#FFD95A]/40 transition-all cursor-pointer">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#FFD95A] to-[#F5A623] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <img src={feat.iconUrl} className="w-4 h-4 object-contain" alt="" />
                </div>
                <div>
                  <div className="text-white text-xs font-semibold group-hover:text-[#FFD95A] transition-colors duration-300">{feat.title}</div>
                  <div className="text-white/40 text-[10px]">{feat.sub}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Centered Mobile Logo Orb in the middle */}
          <div className="flex flex-col items-center py-4 relative">
            <div className="absolute w-44 h-44 rounded-full border border-dashed border-[#FFD95A]/5 animate-spin" style={{ animationDuration: '30s' }} />
            <div className="p-[3px] rounded-full shadow-xl relative z-10" style={{ background: 'linear-gradient(135deg, #FFD95A, #F5A623, #7B2FBE)' }}>
              <div className="p-2 bg-[#0D0015] rounded-full">
                <div className="w-24 h-24 rounded-full overflow-hidden ring-2 ring-[#FFD95A]/10">
                  <img src={logoImg} alt="Meditation Magic" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            <div className="mt-4 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#FFD95A] to-[#F5A623] shadow-md shadow-[#FFD95A]/10 relative z-10">
              <span className="text-[9px] font-extrabold text-[#0D0015] tracking-widest uppercase">The Real Magic is in You</span>
            </div>
          </div>

          {/* Bottom 5 Feature Cards (rightFeatures sliced to 5) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {rightFeatures.slice(0, 5).map((feat, i) => (
              <div key={i} className="group flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-[#FFD95A]/15 hover:border-[#FFD95A]/40 transition-all cursor-pointer">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#FFD95A] to-[#F5A623] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <img src={feat.iconUrl} className="w-4 h-4 object-contain" alt="" />
                </div>
                <div>
                  <div className="text-white text-xs font-semibold group-hover:text-[#FFD95A] transition-colors duration-300">{feat.title}</div>
                  <div className="text-white/40 text-[10px]">{feat.sub}</div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
