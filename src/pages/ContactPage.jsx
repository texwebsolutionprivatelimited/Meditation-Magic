import React, { useState } from 'react';
import { Mail, Phone, Sparkles, Send, CheckCircle, Shield, Award, HelpCircle, Heart, Gem } from 'lucide-react';
import kundaliniKriyaImg from '../assets/kundalini_kriya.png';
import neelamPortrait from '../assets/neelam_portrait.jpg';
import { db } from '../admin/firebase';
import { doc, setDoc } from 'firebase/firestore';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: 'Sampann Sadhana (30 Days Morning Practice)',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const queryId = String(Date.now());
    const newQuery = {
      id: Number(queryId),
      date: new Date().toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      program: formData.program,
      message: formData.message.trim()
    };

    try {
      // Sync locally for instant compatibility
      const existing = JSON.parse(localStorage.getItem('mm_admin_contacts') || '[]');
      localStorage.setItem('mm_admin_contacts', JSON.stringify([newQuery, ...existing]));
      window.dispatchEvent(new Event('meditation-magic-content-updated'));

      // Save to Firebase Firestore cloud database
      await setDoc(doc(db, 'contacts', queryId), newQuery);
    } catch (err) {
      console.error('Error saving contact query to Firestore:', err);
    }

    // Simulate API request delay for manifestation confirmation UX
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          program: 'Sampann Sadhana (30 Days Morning Practice)',
          message: ''
        });
      }, 5000);
    }, 1500);
  };

  const programs = [
    'Sampann Sadhana (30 Days Morning Practice)',
    'Meditation Magic Masterclass (1 Year Program)',
    'Abundance & Alignment Mentorship (4M Elite)',
    '1-on-1 Subconscious & Spiritual Consultation',
    'General Query / Guidance'
  ];

  return (
    <div className="pt-16 lg:pt-24 pb-20 min-h-screen bg-[#E2D5F3] text-gray-900 relative overflow-hidden">

      {/* Sacred Mandala SVG Background Pattern */}
      <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-[0.04] text-[#3E0844] pointer-events-none" viewBox="0 0 100 100" fill="none" stroke="currentColor">
        <circle cx="50" cy="50" r="45" strokeWidth="0.2" />
        <circle cx="50" cy="50" r="35" strokeWidth="0.2" />
        <circle cx="50" cy="50" r="25" strokeWidth="0.2" />
        <circle cx="50" cy="50" r="15" strokeWidth="0.2" />
        {[...Array(24)].map((_, i) => (
          <line
            key={i}
            x1="50"
            y1="50"
            x2={50 + 45 * Math.cos((i * 15 * Math.PI) / 180)}
            y2={50 + 45 * Math.sin((i * 15 * Math.PI) / 180)}
            strokeWidth="0.1"
          />
        ))}
        {[...Array(12)].map((_, i) => (
          <circle
            key={`c-${i}`}
            cx={50 + 25 * Math.cos((i * 30 * Math.PI) / 180)}
            cy={50 + 25 * Math.sin((i * 30 * Math.PI) / 180)}
            r="10"
            strokeWidth="0.1"
          />
        ))}
      </svg>

      {/* Glowing backdrops */}
      <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] rounded-full bg-white/40 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-[-10%] w-[500px] h-[500px] rounded-full bg-purple-200/50 blur-[130px] pointer-events-none" />

      {/* Page Header */}
      <div className="relative pt-4 pb-8 text-center overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#6B1736] uppercase mb-3 animate-tagline-blink">
            <Sparkles className="w-4 h-4 text-[#6B1736] animate-pulse" />
            We are here to help you
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-[#1C0320] leading-tight mb-3">
            Contact Us
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-[#3E0844] to-[#6B1736] mx-auto rounded-full mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto text-xs sm:text-sm font-semibold leading-relaxed">
            Have questions about our daily meditation classes, crystal bracelets, or personal consultations? Get in touch with our friendly support team today.
          </p>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Block: Image + Contact Details */}
          <div className="lg:col-span-5 flex flex-col gap-6">

            {/* Stunning Glowing Portrait Card of Neelam Arora */}
            <div className="relative rounded-[1.75rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/60 w-full h-[320px] sm:h-[520px] lg:h-[480px] group bg-[#0D0015]">
              <img
                src={neelamPortrait}
                alt="Neelam Arora Spiritual Guide"
                className="w-full h-full object-cover object-[center_28%] group-hover:scale-105 transition-transform duration-[10s] brightness-95"
              />
              
              {/* Crystalline aura glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C0320]/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(160,71,184,0.1)_0%,transparent_70%)] animate-pulse pointer-events-none" style={{ animationDuration: '4s' }} />

              {/* Elegant Static Portrait Label */}
              <span className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 inline-flex items-center gap-1.2 sm:gap-1.5 text-[8.5px] sm:text-[10px] font-black uppercase tracking-widest text-[#FFD95A] bg-[#3E0844]/85 px-3 py-2 sm:px-4 sm:py-2.5 rounded-full border border-[#FFD95A]/25 shadow-lg backdrop-blur-sm z-10">
                <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#FFD95A]" /> Neelam Arora - Founder &amp; Guide
              </span>
            </div>

            {/* Deep Spiritual Contact & Trust Oath */}
            <div className="flex-1 flex flex-col justify-between bg-gradient-to-br from-[#3E0844] via-[#2F0A59] to-[#1C0320] text-white rounded-[1.75rem] sm:rounded-[2.5rem] p-5 sm:p-10 shadow-2xl border border-[#FFD95A]/15 relative overflow-hidden group">

              {/* Top decorative glow */}
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-[#FFD95A]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="space-y-8 relative z-10">
                <div>
                  <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase text-[#FFD95A] tracking-widest mb-2">
                    🔱 Contact Channels
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                    Get in Touch
                  </h2>
                  <p className="text-white/60 text-xs sm:text-sm font-medium leading-relaxed mt-2">
                    Our supportive team is here to help answer your questions, assist with course bookings, or guide your crystal choices.
                  </p>
                </div>



                {/* Trust Alignment Oath */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10">
                  <h4 className="text-[10px] font-black text-[#FFD95A] uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                    <Heart className="w-3.5 h-3.5 fill-[#FFD95A]/20" /> Safe &amp; Trusted
                  </h4>
                  <p className="text-[11px] text-white/70 leading-relaxed font-bold">
                    Every message is kept 100% private. We value your trust and ensure your personal details are fully secure, confidential, and protected.
                  </p>
                </div>

                {/* Direct WhatsApp Call-to-action */}
                <div className="pt-2">
                  <a
                    href="https://wa.me/919829156812?text=Hello%20Neelam%20Arora%20Team!%20I%20would%20like%20to%20connect%20for%20spiritual%20guidance."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-teal-600 hover:to-emerald-500 text-white font-black text-xs px-6 py-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 uppercase tracking-widest flex items-center justify-center gap-2 border border-white/10"
                  >
                    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                    Connect via WhatsApp
                  </a>
                </div>

              </div>

              {/* Bottom trust line */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-4 relative z-10 text-[9px] font-extrabold uppercase text-white/50 tracking-widest">
                <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-[#FFD95A]" /> 100% Confidential</span>
                <span className="flex items-center gap-1.5"><Award className="w-3.5 h-3.5 text-[#FFD95A]" /> Certified Channels</span>
              </div>

            </div>

          </div>

          {/* Right Block: Spiritual & High-Contrast Form Card */}
          <div className="lg:col-span-7 bg-white/90 backdrop-blur-md rounded-[1.75rem] sm:rounded-[2.5rem] p-5 sm:p-10 border border-purple-100/60 shadow-2xl relative overflow-hidden flex flex-col justify-start">

            {isSubmitted ? (
              <div className="text-center py-16 flex flex-col items-center justify-center animate-fade-in text-gray-800">
                <div className="w-20 h-20 rounded-full bg-purple-50 border border-purple-200 flex items-center justify-center text-[#3E0844] mb-6">
                  <CheckCircle className="w-10 h-10 animate-pulse" />
                </div>
                <h3 className="font-serif text-3xl font-black text-[#3E0844] mb-3">Message Received!</h3>
                <p className="text-gray-600 text-xs sm:text-sm font-semibold max-w-md leading-relaxed mx-auto">
                  Thank you, <span className="text-[#3E0844] font-black">{formData.name}</span>. We have received your query. Neelam Arora's support team will get back to you via email or phone within 24 hours.
                </p>
                <div className="mt-8 flex items-center justify-center gap-2 text-[10px] text-[#3E0844]/60 uppercase tracking-widest font-black">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>Sent Successfully</span>
                </div>
              </div>
            ) : (
              <>
                {/* Divine Manifestation Gateway Banner */}
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-purple-50 to-amber-50/60 border border-purple-100/70 mb-6 relative overflow-hidden flex items-start gap-3.5 shadow-sm">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-amber-200/10 rounded-full blur-2xl pointer-events-none" />
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#3E0844] to-[#6B1736] flex items-center justify-center flex-shrink-0 text-white shadow-md">
                    <Sparkles className="w-4 h-4 animate-pulse" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-black text-[#1C0320] uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                      🔮 Reach Out to Us
                    </h4>
                    <p className="text-[11px] text-gray-500 font-bold leading-relaxed">
                      Fill out this simple form to ask your questions about our meditation classes, upcoming abundance workshops, or gemstone bracelets. We are happy to help!
                    </p>
                  </div>
                </div>

                {/* Form Header */}
                <div className="flex items-center gap-3.5 mb-6 border-b border-purple-100 pb-5">
                  <div className="w-11 h-11 rounded-xl border border-purple-200 bg-purple-50 flex items-center justify-center text-[#3E0844]">
                    <Sparkles className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-black text-[#1C0320] leading-none mb-1">Send a Message</h3>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Fill out this form to connect with our team</p>
                  </div>
                </div>

                {/* Form Elements */}
                <form onSubmit={handleSubmit} className="space-y-5">

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[10px] font-black text-[#6B1736] uppercase tracking-widest mb-1.5">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Enter your name"
                        className="w-full bg-purple-50/30 border border-purple-100 rounded-xl px-5 py-3.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#3E0844]/60 focus:ring-1 focus:ring-[#3E0844]/30 transition-all text-xs font-semibold"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-black text-[#6B1736] uppercase tracking-widest mb-1.5">WhatsApp / Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full bg-purple-50/30 border border-purple-100 rounded-xl px-5 py-3.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#3E0844]/60 focus:ring-1 focus:ring-[#3E0844]/30 transition-all text-xs font-semibold"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-black text-[#6B1736] uppercase tracking-widest mb-1.5">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full bg-purple-50/30 border border-purple-100 rounded-xl px-5 py-3.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#3E0844]/60 focus:ring-1 focus:ring-[#3E0844]/30 transition-all text-xs font-semibold"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-black text-[#6B1736] uppercase tracking-widest mb-1.5">Select Modality / Consultation</label>
                    <div className="relative">
                      <select
                        value={formData.program}
                        onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                        className="w-full bg-purple-50/30 border border-purple-100 rounded-xl px-5 py-3.5 text-gray-900 focus:outline-none focus:border-[#3E0844]/60 focus:ring-1 focus:ring-[#3E0844]/30 transition-all text-xs font-semibold appearance-none cursor-pointer"
                      >
                        {programs.map((prog, idx) => (
                          <option key={idx} value={prog} className="bg-white text-gray-900">
                            {prog}
                          </option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-black text-[#6B1736] uppercase tracking-widest mb-1.5">Your Message or Questions</label>
                    <textarea
                      rows="4"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please write your questions, queries, or course topics you would like to know more about..."
                      className="w-full bg-purple-50/30 border border-purple-100 rounded-xl px-5 py-3.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#3E0844]/60 focus:ring-1 focus:ring-[#3E0844]/30 transition-all text-xs font-semibold resize-none"
                    ></textarea>
                  </div>

                  {/* Spiritual Assurance and Submit Button Group */}
                  <div className="space-y-4 pt-4">
                    <p className="text-[10px] text-[#6B1736] font-bold text-center leading-relaxed bg-amber-50/60 border border-amber-100/50 p-3.5 rounded-xl shadow-inner flex items-center justify-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse flex-shrink-0" />
                      <span>Your request undergoes sacred sound vibration scanning prior to attunement scheduling.</span>
                    </p>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4.5 rounded-xl flex items-center justify-center gap-2 bg-gradient-to-r from-[#FFD95A] to-[#F5A623] hover:from-[#F5A623] hover:to-[#FFD95A] text-[#0D0015] font-black transition-all duration-300 shadow-md shadow-purple-950/15 hover:shadow-purple-950/25 text-xs uppercase tracking-widest"
                    >
                      {loading ? (
                        <span className="w-5 h-5 border-2 border-[#0D0015] border-t-transparent rounded-full animate-spin"></span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </button>

                    {/* Quick Direct Support Channels moved from Left to Right Column */}
                    <div className="pt-4.5 border-t border-purple-100/80 mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold text-gray-600">
                      <a href="tel:+919829156812" className="flex items-center gap-3 p-3 rounded-xl bg-purple-50/30 border border-purple-100/50 hover:bg-purple-50/60 transition-colors group/tel">
                        <div className="w-8 h-8 rounded-lg bg-[#3E0844] text-[#FFD95A] flex items-center justify-center flex-shrink-0 group-hover/tel:scale-105 transition-transform duration-300">
                          <Phone className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="block text-[8px] uppercase font-black text-gray-400 tracking-wider">Phone Support</span>
                          <span className="text-xs font-black text-[#3E0844]">+91 98291 56812</span>
                        </div>
                      </a>

                      <a href="mailto:meditationmagicofficial@gmail.com" className="flex items-center gap-3 p-3 rounded-xl bg-purple-50/30 border border-purple-100/50 hover:bg-purple-50/60 transition-colors group/mail">
                        <div className="w-8 h-8 rounded-lg bg-[#3E0844] text-[#FFD95A] flex items-center justify-center flex-shrink-0 group-hover/mail:scale-105 transition-transform duration-300">
                          <Mail className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <span className="block text-[9px] uppercase font-black text-gray-400 tracking-wider">Email Address</span>
                          <span className="text-[10px] sm:text-xs font-black text-[#3E0844] break-all sm:truncate block">meditationmagicofficial@gmail.com</span>
                        </div>
                      </a>
                    </div>
                  </div>

                </form>
              </>
            )}

          </div>

        </div>

        {/* Global Spiritual Stamps bottom trust builder - Jaw-Dropping Cosmic Altar UI */}
        <div className="mt-12 sm:mt-20 bg-gradient-to-br from-[#3E0844]/95 via-[#2F0A59]/90 to-[#1C0320]/95 backdrop-blur-md rounded-[2rem] sm:rounded-[3rem] p-5 sm:p-12 border border-[#FFD95A]/30 shadow-2xl text-center w-full relative overflow-hidden group">
          
          {/* Spiritual background glow layers */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#FFD95A]/10 rounded-full blur-[80px] pointer-events-none group-hover:scale-150 transition-transform duration-1000" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500/20 rounded-full blur-[80px] pointer-events-none group-hover:scale-150 transition-transform duration-1000" />

          {/* Golden Crystalline Top Seal Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1C0320]/60 border border-[#FFD95A]/25 backdrop-blur-sm mb-6 shadow-lg animate-pulse" style={{ animationDuration: '4s' }}>
            <span className="text-base">🧘</span>
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-[#FFD95A]">
              Meditation Magic Sanctuary
            </span>
          </div>

          {/* Main heading */}
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FFD95A] to-white leading-tight mb-4 drop-shadow-sm">
            The Meditation Magic Trust Guarantee
          </h2>
          
          <p className="text-white/70 text-xs sm:text-sm font-semibold max-w-3xl mx-auto mb-10 leading-relaxed">
            Every class, personal consultation, and crystal gemstone bracelet is blessed and energized with pure heart, sound bowls, and divine frequency codes. We promise to support your spiritual journey with complete devotion and over 19+ years of master-level mastership.
          </p>

          {/* Three Stunning Crystalline Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full border-t border-white/10 pt-10">
            
            {/* Card 1: Private & Secure */}
            <div className="p-5 rounded-[1.75rem] sm:rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-[#FFD95A]/40 hover:bg-white/10 transition-all duration-500 text-left relative overflow-hidden group/item flex flex-col justify-between hover:shadow-xl hover:shadow-[#FFD95A]/5">
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#FFD95A]/5 rounded-bl-[2rem] group-hover/item:scale-110 transition-transform" />
              <div className="space-y-4 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-[#FFD95A] text-[#0D0015] flex items-center justify-center shadow-lg shadow-[#FFD95A]/15 group-hover/item:scale-105 transition-transform duration-300">
                  <Shield className="w-5.5 h-5.5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-black text-white uppercase tracking-wider flex items-center gap-1.5">
                    100% Private &amp; Secure
                  </h4>
                  <p className="text-[11px] font-bold text-white/50 mt-2 leading-relaxed">
                    Your details and personal transformation paths are kept strictly confidential and protected in our sacred records.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Kind support & Advice */}
            <div className="p-5 rounded-[1.75rem] sm:rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-[#FFD95A]/40 hover:bg-white/10 transition-all duration-500 text-left relative overflow-hidden group/item flex flex-col justify-between hover:shadow-xl hover:shadow-[#FFD95A]/5">
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#FFD95A]/5 rounded-bl-[2rem] group-hover/item:scale-110 transition-transform" />
              <div className="space-y-4 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-[#FFD95A] text-[#0D0015] flex items-center justify-center shadow-lg shadow-[#FFD95A]/15 group-hover/item:scale-105 transition-transform duration-300">
                  <Sparkles className="w-5.5 h-5.5 animate-pulse" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-black text-white uppercase tracking-wider flex items-center gap-1.5">
                    Kind Support &amp; Advice
                  </h4>
                  <p className="text-[11px] font-bold text-white/50 mt-2 leading-relaxed">
                    Our support team coordinates directly with Neelam's office to answer your questions and guide your spiritual path.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Experience */}
            <div className="p-5 rounded-[1.75rem] sm:rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-[#FFD95A]/40 hover:bg-white/10 transition-all duration-500 text-left relative overflow-hidden group/item flex flex-col justify-between hover:shadow-xl hover:shadow-[#FFD95A]/5">
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#FFD95A]/5 rounded-bl-[2rem] group-hover/item:scale-110 transition-transform" />
              <div className="space-y-4 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-[#FFD95A] text-[#0D0015] flex items-center justify-center shadow-lg shadow-[#FFD95A]/15 group-hover/item:scale-105 transition-transform duration-300">
                  <Award className="w-5.5 h-5.5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-black text-white uppercase tracking-wider flex items-center gap-1.5">
                    19+ Years of Experience
                  </h4>
                  <p className="text-[11px] font-bold text-white/50 mt-2 leading-relaxed">
                    Access decades of direct channeling and energy blessings under the guidance of facilitator Neelam Arora.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}
