import React, { useState } from 'react';
import {
  Sparkles, Star, Award, Shield, Heart, Compass,
  Check, Play, HelpCircle, ChevronDown, Clock, Video, MapPin
} from 'lucide-react';
import neelamPortrait from '../assets/neelam_portrait.jpg';

// High-quality custom WhatsApp SVG Logo icon component
const WhatsAppIcon = ({ className = "w-4 h-4 fill-current" }) => (
  <svg className={className} viewBox="0 0 24 24">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
  </svg>
);

export default function CounselingPage() {
  // State for interactive FAQ accordion
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // 1-to-1 Counseling Tiers
  const pricingTiers = [
    {
      title: 'Inner Shift',
      duration: '30-Minute Video Call',
      price: '₹25,000',
      description: 'Best for quick support, finding current life problems, and getting fast advice for personal growth.',
      features: [
        'Understand your current problems',
        'Find emotional blockages quickly',
        'Get simple and daily spiritual tips',
        'Private Zoom or WhatsApp video call',
        'Actionable steps for a positive mind'
      ],
      ctaText: 'Book Inner Shift',
      whatsAppMsg: 'Hello Neelam Arora Team! I want to book the Inner Shift 30-Minute Session (₹25,000). Please share the details.',
      featured: false,
    },
    {
      title: 'Deep Consultation',
      duration: '60-Minute Detailed Video Session',
      price: '₹50,000',
      description: 'Our most popular session. We clean old negative energy, clear life blockages, and build a happy life success path.',
      features: [
        'Clear negative energy and bad karma',
        'Remove emotional pain and worries',
        'Full body energy chakra cleaning',
        'Get a personalized life success map',
        'Custom meditation and healing steps',
        'Private audio recording of the session'
      ],
      ctaText: 'Book Deep Consultation',
      whatsAppMsg: 'Hello Neelam Arora Team! I want to book the Deep Consultation 60-Minute Session (₹50,000). Please share the details.',
      featured: true,
    },
    {
      title: 'Face-to-Face Session',
      duration: '1-Hour Private In-Person Session',
      price: '₹75,000',
      description: 'The ultimate personal session with direct face-to-face counseling, healing presence, and life solutions in Delhi.',
      features: [
        'Direct face-to-face personal advice',
        'Deep personal energy healing',
        'Special crystal layout for deep peace',
        'Solutions for big life or business blocks',
        'Comfortable and premium private room',
        'Located in a beautiful space in New Delhi'
      ],
      ctaText: 'Book In-Person Session',
      whatsAppMsg: 'Hello Neelam Arora Team! I want to book the Face-to-Face 1-Hour Session in New Delhi (₹75,000). Please share details.',
      featured: false,
    }
  ];

  // FAQ Mappings with easy English words and embedded WhatsApp logos
  const faqItems = [
    {
      q: 'What is the difference between Inner Shift and Deep Consultation?',
      a: 'Inner Shift is a quick 30-minute session to find immediate blockages and get fast, helpful life advice. Deep Consultation is a full 60-minute session that does a deep clean of negative energy, balances your body chakras, and builds a detailed roadmap for your life goals.'
    },
    {
      q: 'Can I record our personal session?',
      a: 'Yes, for the 60-minute Deep Consultation, we will send you a private audio recording of the session so you can listen to the advice anytime. The 30-minute session is short and does not include a recording.'
    },
    {
      q: 'What happens during a Face-to-Face session in New Delhi?',
      a: 'You meet Neelam Arora in person in a calm, beautiful space in New Delhi. She guides you directly with personalized counseling, direct energy healing, and custom crystal placements to bring peace to your mind.'
    },
    {
      q: 'How do I book a slot after making the payment?',
      a: (
        <span>
          Once you click the booking button, it will open{' '}
          <span className="inline-flex items-center gap-1 font-bold text-[#20BA56] bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100/50">
            <WhatsAppIcon className="w-3.5 h-3.5 fill-[#20BA56]" />
            WhatsApp
          </span>{' '}
          to message our friendly team. After confirming your payment, our team will share the available date and time slots so you can choose the best time for you.
        </span>
      )
    },
    {
      q: 'Is my session kept private?',
      a: 'Absolutely. Everything you share during the session is 100% private and confidential. Your safety and trust are our highest priorities.'
    },
    {
      q: 'Can I change my session time if I am busy?',
      a: 'Yes, you can easily change your session time up to 24 hours before the call. Rescheduling is not possible if you inform us in less than 24 hours.'
    },
    {
      q: 'Do I need to know meditation before booking?',
      a: 'No, you do not need any past experience in meditation. Neelam Arora will guide you very simply and easily. You only need to sit comfortably and listen with an open mind.'
    }
  ];

  return (
    <div className="pt-20 lg:pt-28 pb-20 min-h-screen bg-[#E2D5F3] relative overflow-hidden text-gray-900">

      {/* 🌌 Soft background glowing spheres for visual wonder */}
      <div className="absolute top-[5%] left-[-10%] w-[45%] h-[45%] rounded-full bg-white/40 blur-[130px] pointer-events-none" />
      <div className="absolute top-[30%] right-[-15%] w-[50%] h-[50%] rounded-full bg-purple-200/50 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[45%] h-[45%] rounded-full bg-purple-100/40 blur-[130px] pointer-events-none" />

      {/* Container to restrict maximum width and keep uniform left/right spaces */}
      <div className="max-w-[95%] mx-auto px-3 sm:px-6 lg:px-8 relative z-10 space-y-12 sm:space-y-16 lg:space-y-20">

        {/* 🔮 Hero Heading */}
        <section className="text-center max-w-3xl mx-auto px-2">
          <div className="space-y-3 sm:space-y-4 animate-fade-in">
            <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-black tracking-widest text-[#6B1736] uppercase bg-white/50 px-4 py-2 rounded-full border border-purple-200/60 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#6B1736] animate-pulse" />
              Private 1-on-1 Sessions
            </span>
            <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#1C0320] leading-tight">
              Personal Guidance & Life Healing
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-[#3E0844] to-[#6B1736] mx-auto rounded-full" />
            <p className="text-gray-700 text-xs sm:text-sm font-semibold max-w-2xl mx-auto leading-relaxed">
              Get personal guidance from Neelam Arora to heal emotional pain, clear life blockages, and invite success and happiness into your career, family, and relationships.
            </p>
          </div>
        </section>

        {/* 💳 Section 1: Three-Tier Pricing Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {pricingTiers.map((tier, idx) => {
            const encodedText = encodeURIComponent(tier.whatsAppMsg);
            const waUrl = `https://wa.me/919829156812?text=${encodedText}`;

            return (
              <div
                key={idx}
                className={`relative flex flex-col justify-between rounded-[1.75rem] sm:rounded-[2.5rem] p-5 sm:p-8 md:p-10 border transition-all duration-500 hover:-translate-y-1.5 group ${
                  tier.featured
                    ? 'bg-gradient-to-br from-[#3E0844] via-[#2F0A59] to-[#1C0320] text-white border-[#FFD95A]/50 shadow-xl shadow-purple-950/20 hover:shadow-2xl hover:shadow-purple-900/35'
                    : 'bg-white text-gray-900 border-purple-100 shadow-md hover:shadow-xl'
                }`}
              >
                {/* Most Popular/Featured Badge */}
                {tier.featured && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-[8px] sm:text-[9px] font-black uppercase tracking-widest bg-gradient-to-r from-[#FFD95A] to-[#F5D28E] text-[#3E0844] px-4 py-1.5 rounded-full border border-white/20 shadow-md whitespace-nowrap">
                    Best Healing Session
                  </span>
                )}

                <div className="space-y-5">
                  {/* Card Title & Icon */}
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className={`font-serif text-lg sm:text-xl font-black tracking-wide ${
                        tier.featured ? 'text-white' : 'text-[#1C0320]'
                      }`}>
                        {tier.title}
                      </h3>
                      <div className="flex items-center gap-1.5 mt-2">
                        {tier.title.includes('Face-to-Face') ? (
                          <MapPin className={`w-3.5 h-3.5 ${tier.featured ? 'text-[#FFD95A]' : 'text-[#6B1736]'}`} />
                        ) : (
                          <Video className={`w-3.5 h-3.5 ${tier.featured ? 'text-[#FFD95A]' : 'text-[#6B1736]'}`} />
                        )}
                        <span className={`text-[10px] sm:text-xs font-bold uppercase tracking-wider ${
                          tier.featured ? 'text-white/80' : 'text-gray-600'
                        }`}>
                          {tier.duration}
                        </span>
                      </div>
                    </div>
                    {tier.featured && (
                      <Star className="w-5 h-5 text-[#FFD95A] fill-[#FFD95A] animate-pulse" />
                    )}
                  </div>

                  {/* Price */}
                  <div>
                    <div className="flex items-baseline gap-1">
                      <span className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold ${tier.featured ? 'text-[#FFD95A]' : 'text-[#1C0320]'}`}>
                        {tier.price}
                      </span>
                      <span className={`text-xs font-bold uppercase tracking-wider ${tier.featured ? 'text-white/60' : 'text-gray-500'}`}>
                        INR
                      </span>
                    </div>
                    <p className={`text-[11px] sm:text-xs font-semibold leading-relaxed mt-2 ${
                      tier.featured ? 'text-white/95' : 'text-gray-700'
                    }`}>
                      {tier.description}
                    </p>
                  </div>

                  {/* Bullet Benefits */}
                  <div className="space-y-3 pt-3 border-t border-purple-100/10">
                    <p className={`text-[10px] font-black uppercase tracking-wider ${
                      tier.featured ? 'text-[#FFD95A]' : 'text-[#6B1736]'
                    }`}>
                      What is included:
                    </p>
                    <ul className="space-y-2.5 text-xs font-semibold leading-relaxed">
                      {tier.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                            tier.featured ? 'text-[#FFD95A]' : 'text-[#6B1736]'
                          }`} />
                          
                          {/* If the benefit mentions WhatsApp, render a small inline WhatsApp icon */}
                          <span className={tier.featured ? 'text-purple-100' : 'text-gray-800'}>
                            {feat.includes('WhatsApp') ? (
                              <span className="inline-flex items-center gap-1.5 flex-wrap">
                                Private Zoom or 
                                <span className="inline-flex items-center gap-0.5 font-bold text-[#20BA56]">
                                  <WhatsAppIcon className="w-3.5 h-3.5 fill-[#20BA56]" />
                                  WhatsApp
                                </span>
                                video call
                              </span>
                            ) : (
                              feat
                            )}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Direct WhatsApp Branded Booking Button */}
                <div className="mt-6 sm:mt-8">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 rounded-xl flex items-center justify-center gap-2 text-xs font-black uppercase tracking-widest transition-all duration-300 shadow-md hover:scale-[1.01] active:scale-[0.98] bg-[#25D366] hover:bg-[#20BA56] text-white border border-white/10 shadow-[#25d366]/20"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-white animate-bounce" />
                    <span>{tier.ctaText}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </section>

        {/* 🏢 Section 2: Corporate wellness Callout banner */}
        <section className="relative z-10">
          <div className="bg-gradient-to-r from-[#3E0844] via-[#2F0A59] to-[#1C0320] rounded-[1.75rem] sm:rounded-[2.5rem] p-5 sm:p-10 lg:p-12 border border-[#FFD95A]/30 shadow-2xl relative overflow-hidden group">
            {/* Ambient glows inside corporate card */}
            <div className="absolute -top-12 -left-12 w-28 h-28 bg-[#FFD95A]/5 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-12 -right-12 w-28 h-28 bg-purple-500/5 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center lg:text-left max-w-2xl">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-[#FFD95A]">
                  <Award className="w-3.5 h-3.5" />
                  Corporate & Group Healing
                </span>
                <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-extrabold text-white">
                  Want Group Sessions or Corporate Training?
                </h3>
                <p className="text-purple-100 text-xs sm:text-sm font-semibold leading-relaxed">
                  Reduce stress, improve team focus, and bring positivity to your office. Neelam Arora designs special group meditation and healing sessions for companies, events, and business leaders.
                </p>
              </div>

              <a
                href="https://wa.me/919829156812?text=Hello%20Neelam%20Arora%20Team!%20I%20want%20to%20inquire%20about%20group%20meditation%20sessions%20or%20corporate%20wellness%20training."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full lg:w-auto px-6 py-3.5 bg-[#25D366] hover:bg-[#20BA56] text-white text-xs font-black uppercase tracking-widest rounded-xl transition-all duration-300 shadow-md flex items-center justify-center gap-2 shrink-0 whitespace-nowrap active:scale-95 animate-pulse"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>Inquire For Corporate</span>
              </a>
            </div>
          </div>
        </section>

        {/* 🎬 Section 3: Large Responsive Video Trailer Showcase */}
        <section className="relative z-10 space-y-4 sm:space-y-6">
          <div className="text-center space-y-3">
            <span className="inline-flex items-center justify-center gap-1.5 text-[10px] sm:text-xs font-bold tracking-widest text-[#6B1736] uppercase bg-white/50 px-4 py-2 rounded-full border border-purple-200/60 shadow-sm">
              <Clock className="w-3.5 h-3.5 text-[#6B1736]" />
              Video Introduction
            </span>
            <h2 className="font-serif text-xl sm:text-3xl font-extrabold text-[#1C0320]">
              Learn How Energy Healing Works
            </h2>
            <div className="w-16 h-1 bg-[#6B1736] mx-auto rounded-full" />
            <p className="text-gray-700 text-xs sm:text-sm font-semibold max-w-2xl mx-auto leading-relaxed px-2">
              Watch this short video to understand how personal healing sessions help you remove fear, stress, and bring good luck and peace into your life.
            </p>
          </div>

          <div className="relative aspect-video rounded-[1.75rem] sm:rounded-[2.5rem] overflow-hidden bg-black border-2 border-white shadow-xl shadow-purple-950/10">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/TRH08Ip3NtY"
              title="Meditation Magic Introduction Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </section>

        {/* 🧘 Section 4: Why Choose Us Split Benefits / Portrait Card */}
        <section className="bg-white rounded-[1.75rem] sm:rounded-[2.5rem] p-5 sm:p-10 border border-purple-100/60 shadow-lg relative overflow-hidden">
          {/* Subtle decoration */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-purple-50 rounded-full blur-2xl" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            {/* Left Column: Benefits Content */}
            <div className="space-y-6">
              <div className="space-y-3">
                <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-black tracking-widest text-[#6B1736] uppercase">
                  <Compass className="w-4 h-4 text-[#6B1736]" />
                  Trusted Guidance
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#1C0320] leading-snug">
                  Why Choose Neelam Arora as Your Guide?
                </h3>
                <div className="w-16 h-1 bg-[#6B1736] rounded-full" />
              </div>

              <div className="space-y-5 text-gray-800 text-xs sm:text-sm font-semibold leading-relaxed">
                <p>
                  These personal calls are simple, practical, and highly effective. They are built to help you solve real-life problems like family stress, career path choices, and money blockages.
                </p>
                
                {/* 3 Core Strengths list */}
                <div className="space-y-4 pt-2">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-purple-50 flex items-center justify-center text-[#6B1736] border border-purple-100 shrink-0">
                      <Star className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-serif font-black text-sm sm:text-base text-[#1C0320]">19+ Years of Trusted Experience</h4>
                      <p className="text-[11px] sm:text-xs text-gray-600 font-semibold mt-0.5">
                        Guided thousands of people around the world to find peace, health, and complete success.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-purple-50 flex items-center justify-center text-[#6B1736] border border-purple-100 shrink-0">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-serif font-black text-sm sm:text-base text-[#1C0320]">Fully Customized Solutions</h4>
                      <p className="text-[11px] sm:text-xs text-gray-600 font-semibold mt-0.5">
                        Every single session is uniquely personalized to focus on your specific problems and life situation.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-purple-50 flex items-center justify-center text-[#6B1736] border border-purple-100 shrink-0">
                      <Shield className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-serif font-black text-sm sm:text-base text-[#1C0320]">Safe & 100% Private Call</h4>
                      <p className="text-[11px] sm:text-xs text-gray-600 font-semibold mt-0.5">
                        Enjoy absolute safety and complete secrecy. You can share your feelings and heart out with total peace.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Premium Framed Portrait */}
            <div className="relative flex justify-center">
              {/* Decorative back orbits */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#3E0844]/5 to-purple-500/10 rounded-3xl -rotate-2 transform scale-102" />
              <div className="absolute inset-0 w-full h-full border-2 border-dashed border-[#6B1736]/20 rounded-3xl rotate-2 transform scale-98 pointer-events-none" />

              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white max-w-xs w-full">
                <img
                  src={neelamPortrait}
                  alt="Neelam Arora Portrait"
                  className="w-full h-auto object-cover hover:scale-103 transition-transform duration-750"
                />
                
                {/* Bottom title block */}
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 sm:p-5 text-white">
                  <span className="text-[9px] font-black uppercase tracking-widest text-[#FFD95A]">Spiritual Master & Guide</span>
                  <h4 className="font-serif font-extrabold text-sm sm:text-base text-white tracking-wide mt-1">Neelam Arora</h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ❓ Section 5: Premium Interactive FAQ Accordion */}
        <section className="space-y-6">
          <div className="text-center space-y-3">
            <span className="inline-flex items-center justify-center gap-1.5 text-[10px] sm:text-xs font-bold tracking-widest text-[#6B1736] uppercase bg-white/50 px-4 py-2 rounded-full border border-purple-200/60 shadow-sm">
              <HelpCircle className="w-3.5 h-3.5 text-[#6B1736]" />
              Questions & Answers
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#1C0320]">
              Frequently Asked Questions
            </h2>
            <div className="w-16 h-1 bg-[#6B1736] mx-auto rounded-full" />
            <p className="text-gray-700 text-xs sm:text-sm font-semibold max-w-2xl mx-auto leading-relaxed px-2">
              Got questions about booking your personal session? Read our simple answers below.
            </p>
          </div>

          <div className="space-y-3">
            {faqItems.map((item, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white border border-purple-100 rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-4 py-3.5 sm:px-6 sm:py-5 flex items-center justify-between text-left gap-4"
                  >
                    <span className="font-serif font-extrabold text-xs sm:text-sm md:text-base text-[#1C0320] leading-snug">
                      {item.q}
                    </span>
                    <span className={`p-1.5 rounded-full border border-purple-50 transition-all ${
                      isOpen ? 'bg-[#3E0844] text-[#FFD95A] rotate-180' : 'bg-purple-50/50 text-[#3E0844]'
                    }`}>
                      <ChevronDown className="w-4 h-4 pointer-events-none" />
                    </span>
                  </button>

                  <div
                    className={`transition-all duration-500 ease-in-out ${
                      isOpen ? 'max-h-96 opacity-100 border-t border-purple-50' : 'max-h-0 opacity-0 pointer-events-none'
                    }`}
                  >
                    <div className="px-4 py-3.5 sm:px-6 sm:py-5 text-gray-800 text-xs sm:text-sm font-semibold leading-relaxed bg-purple-50/20">
                      {item.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

      </div>
    </div>
  );
}
