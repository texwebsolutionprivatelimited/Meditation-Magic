import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Sparkles, ChevronRight, Heart } from 'lucide-react';
import logoImg from '../assets/logo.jpg';

export default function Footer({ onOpenModal }) {

  return (
    <footer id="contact" className="relative bg-gradient-to-b from-[#1C0320] via-[#0D0015] to-[#0A000D] text-white/60 border-t border-white/10 pt-10 pb-8 overflow-hidden z-10">
      
      {/* 🌌 Cosmic background stars and sparkles */}
      <style>{`
        @keyframes footerTwinkle {
          0%, 100% { opacity: 0.2; transform: scale(0.8); }
          50% { opacity: 0.7; transform: scale(1.2); }
        }
        .animate-footer-twinkle {
          animation: footerTwinkle 5s ease-in-out infinite;
        }
      `}</style>

      {[...Array(12)].map((_, i) => (
        <div
          key={`fstar-${i}`}
          className="absolute rounded-full bg-[#FFD95A]/25 animate-footer-twinkle pointer-events-none"
          style={{
            width: `${Math.random() * 3 + 2}px`,
            height: `${Math.random() * 3 + 2}px`,
            top: `${Math.random() * 90}%`,
            left: `${Math.random() * 95}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
          }}
        />
      ))}

      {/* Decorative top aura */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#FFD95A]/40 to-transparent pointer-events-none" />

      <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* 🌟 Premium Spiritual Blessing Banner at the top of the Footer */}
        <div className="bg-gradient-to-r from-[#3E0844]/60 via-[#1C0320]/80 to-[#6B1736]/60 border-2 border-[#FFD95A]/30 rounded-3xl p-6 sm:p-8 text-center max-w-4xl mx-auto mb-14 shadow-2xl relative overflow-hidden group">
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#FFD95A]/5 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#A047B8]/5 rounded-full blur-2xl pointer-events-none" />
          
          <div className="relative z-10 space-y-3">
            <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-[#FFD95A]">
              <Sparkles className="w-3.5 h-3.5 text-[#FFD95A] animate-pulse" />
              Daily Blessing & Intention
            </span>
            <p className="font-serif text-white font-medium text-sm sm:text-base md:text-lg italic leading-relaxed">
              "Close your eyes, take a deep breath, and connect with your inner divinity. The magic you seek is already inside you."
            </p>
            <div className="flex items-center justify-center gap-1 text-[10px] text-white/45 font-bold uppercase tracking-wider">
              <span>May all beings be happy, healthy, and free</span>
              <Heart className="w-3 h-3 text-red-500 fill-red-500 animate-pulse" />
            </div>
          </div>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">

          {/* Column 1: Brand details with glowing social icons */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <img src={logoImg} alt="Meditation Magic" className="w-12 h-12 rounded-full object-cover border-2 border-[#FFD95A]/30 shadow-lg" />
              <div>
                <h3 className="font-serif text-white font-black text-sm uppercase tracking-wider leading-none">Meditation Magic</h3>
                <span className="text-[9px] text-[#FFD95A] font-black tracking-widest uppercase mt-1 block">With Neelam Arora</span>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-white/50">
              India's leading spiritual healing platform. We offer highly certified courses, abundance workshops, and private 1-on-1 attunements to attract wealth, clear karma, and activate self-love.
            </p>
            
            {/* Beautiful Social Media Icons with dynamic borders */}
            <div className="flex items-center gap-3.5 pt-2">
              <a
                href="https://www.youtube.com/@meditationmagic33"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:border-red-500/40 hover:bg-red-500/5 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center shadow-md cursor-pointer"
                title="YouTube"
              >
                <img src="https://amiettkumar.com/wp-content/themes/amiett-kumar/assets/img/youtube.svg" alt="YouTube" className="w-5 h-5 filter invert" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:border-rose-400/40 hover:bg-rose-400/5 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center shadow-md cursor-pointer"
                title="Instagram"
              >
                <img src="https://amiettkumar.com/wp-content/themes/amiett-kumar/assets/img/instagram.svg" alt="Instagram" className="w-5 h-5 filter invert" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:border-blue-500/40 hover:bg-blue-500/5 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center shadow-md cursor-pointer"
                title="Facebook"
              >
                <img src="https://amiettkumar.com/wp-content/themes/amiett-kumar/assets/img/facebook.svg" alt="Facebook" className="w-5 h-5 filter invert" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (SPA instant Routing) */}
          <div>
            <h3 className="text-white font-serif font-black text-sm uppercase tracking-widest mb-6 relative w-fit">
              Quick Links
              <span className="absolute bottom-[-6px] left-0 w-8 h-[2px] bg-[#FFD95A] rounded-full" />
            </h3>
            <ul className="space-y-3.5 text-xs font-bold uppercase tracking-wider">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'All Courses', href: '/courses' },
                { label: 'Workshops', href: '/courses?type=Workshops' },
                { label: '1-on-1 Sessions', href: '/courses?type=1-to-1 Sessions' },
                { label: 'Crystal Products', href: '/products' },
                { label: 'Blog', href: '/blog' },
                { label: 'Contact', href: '/contact' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link
                    to={href}
                    className="hover:text-[#FFD95A] transition-colors duration-200 flex items-center gap-1 group w-fit"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#FFD95A]/40 group-hover:text-[#FFD95A] group-hover:translate-x-0.5 transition-all duration-200" />
                    <span>{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Featured Programs */}
          <div>
            <h3 className="text-white font-serif font-black text-sm uppercase tracking-widest mb-6 relative w-fit">
              Our Programs
              <span className="absolute bottom-[-6px] left-0 w-8 h-[2px] bg-[#FFD95A] rounded-full" />
            </h3>
            <ul className="space-y-3.5 text-xs font-bold uppercase tracking-wider">
              {[
                { label: 'Maha Laxmi Workshop', href: '/courses/maha-laxmi-workshop' },
                { label: 'Dragon Energy Mastery', href: '/courses/dragon-mastery' },
                { label: 'Akashic Records', href: '/courses/akashic-records' },
                { label: 'Unicorn Therapy Level 1', href: '/courses/unicorn-therapy' },
                { label: 'Angelic Healing Program', href: '/courses/angelic-healing' },
                { label: 'Kundalini Kriya Yoga', href: '/courses/kundalini-kriya' },
                { label: 'Saraswati Maa Attunement', href: '/courses/saraswati-attunement' },
                { label: 'Maa Kali Workshop', href: '/courses/kali-attunement' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link
                    to={href}
                    className="hover:text-[#FFD95A] transition-colors duration-200 flex items-center gap-1 group w-fit"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#FFD95A]/40 group-hover:text-[#FFD95A] group-hover:translate-x-0.5 transition-all duration-200" />
                    <span>{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & WhatsApp Action */}
          <div>
            <h3 className="text-white font-serif font-black text-sm uppercase tracking-widest mb-6 relative w-fit">
              Contact Us
              <span className="absolute bottom-[-6px] left-0 w-8 h-[2px] bg-[#FFD95A] rounded-full" />
            </h3>
            <div className="space-y-4 text-xs font-bold mb-6">
              <a href="tel:+919873993666" className="flex items-center gap-2.5 hover:text-white transition-colors duration-200 w-fit">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-[#FFD95A] border border-white/10">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>+91 9873993666</span>
              </a>
              <a href="mailto:meditationmagichelp@gmail.com" className="flex items-center gap-2.5 hover:text-white transition-colors duration-200 w-fit">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-[#FFD95A] border border-white/10">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span className="break-all">meditationmagichelp@gmail.com</span>
              </a>
            </div>

            <div className="space-y-3">
              <a
                href="https://www.youtube.com/@meditationmagic33"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-red-600 hover:bg-red-700 text-white font-black py-3.5 px-4 rounded-xl text-xs uppercase tracking-wider transition-colors duration-300 block shadow-md hover:shadow-lg hover:shadow-red-600/10 cursor-pointer"
              >
                Subscribe on YouTube
              </a>
              <a
                href={`https://wa.me/919829156812?text=${encodeURIComponent("Hello Neelam Arora Team! I would like to enquire about your live courses, healing workshops, and energized crystal products. Please guide me!")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-emerald-500 via-teal-600 to-emerald-600 hover:brightness-110 text-white font-black py-3.5 px-4 rounded-xl text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1.5 shadow-md hover:shadow-lg hover:shadow-emerald-500/10 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-white animate-pulse" />
                Enquire via WhatsApp
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom — 3 column layout */}
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 items-center gap-4 text-[10px] text-white/30 font-black uppercase tracking-widest border-t border-white/5 pt-4">

          {/* Left: Copyright */}
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Meditation Magic. All Rights Reserved.
          </p>

          {/* Center: Made with love */}
          <span className="inline-flex items-center justify-center gap-1 text-white/25">
            Made with
            <Heart className="w-3 h-3 text-red-500 fill-red-500 animate-pulse" style={{ animationDuration: '0.8s' }} />
            by&nbsp;
            <a
              href="https://internshipcatalyst.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-[#FFD95A] transition-colors duration-300 underline underline-offset-2"
            >
              Internship Catalyst
            </a>
          </span>

          {/* Right: Policy Links */}
          <div className="flex items-center justify-center sm:justify-end gap-4 flex-wrap">
            <Link to="/privacy-policy" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
            <Link to="/refund-policy" className="hover:text-white/60 transition-colors">Refund Policy</Link>
            <Link to="/terms-and-conditions" className="hover:text-white/60 transition-colors">Terms &amp; Conditions</Link>
          </div>

        </div>

      </div>
    </footer>
  );
}
