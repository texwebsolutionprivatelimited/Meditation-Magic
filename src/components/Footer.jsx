import React from 'react';
import { Mail, Phone, ExternalLink } from 'lucide-react';

export default function Footer({ onOpenModal }) {
  return (
    <footer id="contact" className="bg-[#E2D5F3] text-[#3E0844]/70 border-t border-[#3E0844]/10 pt-12 pb-8">
      <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-[#3E0844]/15">
          
          {/* Column 1: Resources */}
          <div>
            <h3 className="text-[#1C0320] font-serif font-bold text-lg mb-6 tracking-wide">
              Resources
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li>
                <a href="/#programs" className="hover:text-white transition-colors duration-200">
                  Our Courses & Sadhana
                </a>
              </li>
              <li>
                <a href="/#book" className="hover:text-white transition-colors duration-200">
                  Meditation Magic Journal
                </a>
              </li>
              <li>
                <a 
                  href="https://youtube.com/playlist?list=PL6PZEg_RKSYxixUL9RHSIdjNTsrWtFOiF" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors duration-200 flex items-center gap-1"
                >
                  In-Depth Podcasts <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Subscribe */}
          <div>
            <h3 className="text-[#1C0320] font-serif font-bold text-lg mb-6 tracking-wide">
              Subscribe
            </h3>
            <div className="space-y-4">
              <a 
                href="https://www.youtube.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block text-center bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-xl text-sm transition-colors duration-200"
              >
                Neelam Arora YouTube
              </a>
              <a 
                href="https://www.youtube.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block text-center border border-white/20 hover:bg-white/5 text-white font-bold py-3 px-4 rounded-xl text-sm transition-colors duration-200"
              >
                Meditation Magic Channel
              </a>
            </div>
          </div>

          {/* Column 3: Apps & Dashboard */}
          <div>
            
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h3 className="text-[#1C0320] font-serif font-bold text-lg mb-6 tracking-wide">
              Contact Us
            </h3>
            <div className="space-y-4 text-sm">
              <a href="tel:+919873993666" className="flex items-center gap-2.5 hover:text-[#1C0320] transition-colors duration-200">
                <Phone className="w-4 h-4 text-[#6B1736]" />
                <span>+91 9873993666</span>
              </a>
              <a href="mailto:meditationmagichelp@gmail.com" className="flex items-center gap-2.5 hover:text-[#1C0320] transition-colors duration-200">
                <Mail className="w-4 h-4 text-[#6B1736]" />
                <span className="truncate">meditationmagichelp@gmail.com</span>
              </a>
            </div>

            <h3 className="text-[#1C0320] font-serif font-bold text-sm mt-8 mb-4 tracking-wide">
              Find us on Social Media
            </h3>
            <div className="flex gap-4">
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-85 transition-opacity">
                <img src="https://amiettkumar.com/wp-content/themes/amiett-kumar/assets/img/youtube.svg" alt="YouTube" className="w-8 h-8" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-85 transition-opacity">
                <img src="https://amiettkumar.com/wp-content/themes/amiett-kumar/assets/img/instagram.svg" alt="Instagram" className="w-8 h-8" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-85 transition-opacity">
                <img src="https://amiettkumar.com/wp-content/themes/amiett-kumar/assets/img/facebook.svg" alt="Facebook" className="w-8 h-8" />
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-85 transition-opacity">
                <img src="https://amiettkumar.com/wp-content/themes/amiett-kumar/assets/img/x.svg" alt="X" className="w-8 h-8" />
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#3E0844]/50 font-semibold tracking-wider text-center sm:text-left gap-4">
                    <p>© {new Date().getFullYear()} Made by Internship Catalyst Team. All Rights Reserved.</p>

        </div>

      </div>
    </footer>
  );
}
