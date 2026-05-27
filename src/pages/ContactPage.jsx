import React, { useState } from 'react';
import { Mail, Phone, Sparkles, Send, CheckCircle, Shield, Award } from 'lucide-react';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API request
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
    <div className="pt-24 min-h-screen bg-[#E2D5F3] text-gray-900">
      
      {/* Page Header */}
      <div className="relative py-16 text-center overflow-hidden">
        {/* Soft light glow backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-white/40 blur-[120px] pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#6B1736] uppercase mb-3">
            <Sparkles className="w-4 h-4 text-[#6B1736] animate-pulse" />
            Connect with the divine frequency
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1C0320] leading-tight mb-3">
            Contact & Align
          </h1>
          <p className="text-gray-700 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed font-medium">
            Have questions about our daily sadhanas, crystal accessories, or 1-on-1 consultations? Reach out to our spiritual alignment team today.
          </p>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 pb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Block: Contact Details */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-white rounded-3xl p-8 sm:p-10 border border-purple-100 relative overflow-hidden group hover:border-[#3E0844]/20 hover:shadow-2xl transition-all duration-300 shadow-md">
            {/* Soft decorative glow */}
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-purple-100/50 rounded-full blur-2xl group-hover:scale-150 transition-all duration-500" />

            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#1C0320] mb-3">
                  Get in Touch
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed font-medium">
                  Our dedicated support and attunement team is here to assist you in aligning your registration and matching your energy.
                </p>
              </div>

              {/* Direct Channels */}
              <div className="space-y-6">
                <a href="tel:+919873993666" className="flex items-center gap-4 group/item">
                  <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-100 text-[#3E0844] flex items-center justify-center group-hover/item:bg-[#3E0844] group-hover/item:text-white transition-all">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-black text-gray-400 tracking-wider">Phone Support</span>
                    <span className="text-sm font-bold text-[#1C0320] group-hover/item:text-[#3E0844] transition-colors">+91 9873993666</span>
                  </div>
                </a>

                <a href="mailto:meditationmagichelp@gmail.com" className="flex items-center gap-4 group/item">
                  <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-100 text-[#3E0844] flex items-center justify-center group-hover/item:bg-[#3E0844] group-hover/item:text-white transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[10px] uppercase font-black text-gray-400 tracking-wider">Email Address</span>
                    <span className="text-sm font-bold text-[#1C0320] group-hover/item:text-[#3E0844] transition-colors truncate block">meditationmagichelp@gmail.com</span>
                  </div>
                </a>
              </div>

              {/* Social links */}
              <div>
                <h3 className="text-xs font-black uppercase text-[#6B1736] tracking-widest mb-4">Follow the Magic</h3>
                <div className="flex flex-wrap gap-4">
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-purple-50 border border-purple-100 rounded-2xl hover:bg-purple-100/80 hover:border-red-500/30 transition-all flex items-center gap-2 text-xs font-bold text-[#1C0320]">
                    <img src="https://amiettkumar.com/wp-content/themes/amiett-kumar/assets/img/youtube.svg" alt="YouTube" className="w-5 h-5" />
                    YouTube
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-purple-50 border border-purple-100 rounded-2xl hover:bg-purple-100/80 hover:border-pink-500/30 transition-all flex items-center gap-2 text-xs font-bold text-[#1C0320]">
                    <img src="https://amiettkumar.com/wp-content/themes/amiett-kumar/assets/img/instagram.svg" alt="Instagram" className="w-5 h-5" />
                    Instagram
                  </a>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 pt-8 border-t border-purple-100 space-y-4">
              <div className="flex items-center gap-3 text-xs text-gray-500 font-semibold uppercase tracking-wider">
                <Shield className="w-4 h-4 text-[#3E0844]" />
                <span>100% Encrypted & Secure Request</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-gray-500 font-semibold uppercase tracking-wider">
                <Award className="w-4 h-4 text-[#3E0844]" />
                <span>Certified Spiritual Mentors</span>
              </div>
            </div>

          </div>

          {/* Right Block: Interactive Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-purple-100 relative overflow-hidden flex flex-col justify-center shadow-md hover:shadow-2xl transition-all duration-300">
            
            {isSubmitted ? (
              <div className="text-center py-16 flex flex-col items-center justify-center animate-fade-in text-gray-800">
                <div className="w-20 h-20 rounded-full bg-purple-50 border border-purple-200 flex items-center justify-center text-[#3E0844] mb-6">
                  <CheckCircle className="w-10 h-10 animate-pulse" />
                </div>
                <h3 className="font-serif text-3xl font-bold text-[#3E0844] mb-3">Vibration Aligned!</h3>
                <p className="text-gray-600 text-sm sm:text-base max-w-md leading-relaxed mx-auto">
                  Thank you, <span className="text-[#3E0844] font-bold">{formData.name}</span>. Your details have been entered into the quantum field. Neelam Arora's team will connect with you via email or phone within 24 hours.
                </p>
                <div className="mt-8 flex items-center justify-center gap-2 text-xs text-[#3E0844]/60 uppercase tracking-widest font-black">
                  <Sparkles className="w-4 h-4 animate-spin" style={{ animationDuration: '4s' }} />
                  <span>Subconscious Manifestation Triggered</span>
                </div>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-3 mb-8 border-b border-purple-100 pb-5">
                  <div className="w-12 h-12 rounded-2xl border border-purple-200 bg-purple-50 flex items-center justify-center text-[#3E0844]">
                    <Sparkles className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#1C0320]">Send Alignment Request</h3>
                    <p className="text-xs text-gray-500">Submit your goals to customize your spiritual path</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-[#6B1736] uppercase tracking-wider mb-2">Full Name</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Enter your name"
                        className="w-full bg-purple-50/50 border border-purple-100 rounded-2xl px-5 py-3.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#3E0844]/60 focus:ring-1 focus:ring-[#3E0844]/30 transition-all text-sm font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#6B1736] uppercase tracking-wider mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full bg-purple-50/50 border border-purple-100 rounded-2xl px-5 py-3.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#3E0844]/60 focus:ring-1 focus:ring-[#3E0844]/30 transition-all text-sm font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#6B1736] uppercase tracking-wider mb-2">Email Address</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="name@example.com"
                      className="w-full bg-purple-50/50 border border-purple-100 rounded-2xl px-5 py-3.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#3E0844]/60 focus:ring-1 focus:ring-[#3E0844]/30 transition-all text-sm font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#6B1736] uppercase tracking-wider mb-2">Select Program / Consultation</label>
                    <div className="relative">
                      <select 
                        value={formData.program}
                        onChange={(e) => setFormData({...formData, program: e.target.value})}
                        className="w-full bg-purple-50 border border-purple-100 rounded-2xl px-5 py-3.5 text-gray-900 focus:outline-none focus:border-[#3E0844]/60 focus:ring-1 focus:ring-[#3E0844]/30 transition-all text-sm font-medium appearance-none cursor-pointer"
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
                    <label className="block text-xs font-bold text-[#6B1736] uppercase tracking-wider mb-2">Your Manifestation Goals / Query</label>
                    <textarea 
                      rows="4"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="What is your biggest roadblock or what would you like to manifest?"
                      className="w-full bg-purple-50/50 border border-purple-100 rounded-2xl px-5 py-3.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#3E0844]/60 focus:ring-1 focus:ring-[#3E0844]/30 transition-all text-sm font-medium resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-gold w-full py-4 rounded-2xl flex items-center justify-center gap-2 font-bold transition-all shadow-md shadow-purple-950/10 hover:shadow-purple-950/25 text-sm uppercase tracking-wider"
                  >
                    {loading ? (
                      <span className="w-5 h-5 border-2 border-cosmic-darkest border-t-transparent rounded-full animate-spin"></span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Alignment Request
                      </>
                    )}
                  </button>

                </form>
              </>
            )}

          </div>

        </div>
      </div>

    </div>
  );
}
